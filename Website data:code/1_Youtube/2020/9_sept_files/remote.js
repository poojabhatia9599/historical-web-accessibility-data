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

(function(g){var window=this;var zFa=function(a,b){return g.Nb(a,b)},$5=function(a,b,c){a.A.set(b,c)},a6=function(a){$5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.F)()).toString(36));
return a},b6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.En(a.A,b,c)},AFa=function(a,b){var c=[];
g.Fk(b,function(d){try{var e=g.Do.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Co(e)&&c.push(d)},a);
return c},BFa=function(a,b){var c=AFa(a,b);
g.y(c,function(d){g.Do.prototype.remove.call(this,d)},a)},CFa=function(a){if(a.bd){if(a.bd.locationOverrideToken)return{locationOverrideToken:a.bd.locationOverrideToken};
if(null!=a.bd.latitudeE7&&null!=a.bd.longitudeE7)return{latitudeE7:a.bd.latitudeE7,longitudeE7:a.bd.longitudeE7}}return null},DFa=function(a,b){g.jb(a,b)||a.push(b)},c6=function(a){var b=0,c;
for(c in a)b++;return b},EFa=function(a,b){var c=b instanceof g.Cc?b:g.Ic(b,/^data:image\//i.test(b));
a.src=g.Dc(c)},d6=function(){},FFa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},GFa=function(a){if(a.Td&&"function"==typeof a.Td)return a.Td();
if("string"===typeof a)return a.split("");if(g.Pa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Jb(a)},HFa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Pa(a)||"string"===typeof a)g.y(a,b,void 0);else{if(a.gf&&"function"==typeof a.gf)var c=a.gf();else if(a.Td&&"function"==typeof a.Td)c=void 0;else if(g.Pa(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Kb(a);d=GFa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},IFa=function(a,b,c,d){var e=new g.sn(null,void 0);
a&&g.tn(e,a);b&&g.un(e,b);c&&g.vn(e,c);d&&(e.u=d);return e},e6=function(a,b){g.jp[a]=!0;
var c=g.hp();c&&c.publish.apply(c,arguments);g.jp[a]=!1},f6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.pn;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",JFa(this,a.capabilities||""),KFa(this,a.experiments||""))},JFa=function(a,b){a.capabilities.clear();
g.Ie(b.split(","),g.Ua(zFa,LFa)).forEach(function(c){a.capabilities.add(c)})},KFa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},g6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},h6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},MFa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},NFa=function(a){return new g6(a)},OFa=function(a){return Array.isArray(a)?g.Mc(a,NFa):[]},i6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},j6=function(a){return Array.isArray(a)?"["+g.Mc(a,i6).join(",")+"]":"null"},k6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},PFa=function(a){return g.Mc(a,function(b){return{key:b.id,
name:b.name}})},l6=function(a,b){return g.eb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},m6=function(a,b){return g.eb(a,function(c){return h6(c,b)})},QFa=function(){var a=(0,g.zt)();
a&&BFa(a,a.o.Rh(!0))},n6=function(){var a=g.Ct("yt-remote-connected-devices")||[];
g.zb(a);return a},RFa=function(a){if(g.kb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Mc(a,function(d,e){return 0==e?d:d.substring(c.length)})},SFa=function(a){g.Bt("yt-remote-connected-devices",a,86400)},p6=function(){if(o6)return o6;
var a=g.Ct("yt-remote-device-id");a||(a=k6(),g.Bt("yt-remote-device-id",a,31536E3));for(var b=n6(),c=1,d=a;g.jb(b,d);)c++,d=a+"#"+c;return o6=d},q6=function(){var a=n6(),b=p6();
g.jb(a,b);g.Et()&&g.Bb(a,b);a=RFa(a);if(g.kb(a))try{g.Wq.remove("remote_sid","/","youtube.com")}catch(c){}else try{g.Xq("remote_sid",a.join(","),-1)}catch(c){}},TFa=function(){return g.Ct("yt-remote-session-browser-channel")},UFa=function(){return g.Ct("yt-remote-local-screens")||[]},VFa=function(){g.Bt("yt-remote-lounge-token-expiration",!0,86400)},WFa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Mc(UFa(),function(d){return d.loungeToken}),c=g.Mc(a,function(d){return d.loungeToken});
g.Ri(c,function(d){return!g.jb(b,d)})&&VFa();
g.Bt("yt-remote-local-screens",a,31536E3)},XFa=function(a,b){g.Bt("yt-remote-session-browser-channel",a);
g.Bt("yt-remote-session-screen-id",b);var c=n6(),d=p6();g.jb(c,d)||c.push(d);SFa(c);q6()},r6=function(a){a||(g.Dt("yt-remote-session-screen-id"),g.Dt("yt-remote-session-video-id"));
q6();a=n6();g.ob(a,p6());SFa(a)},YFa=function(){if(!s6){var a=g.Jo();
a&&(s6=new g.uo(a))}return s6?!!s6.get("yt-remote-use-staging-server"):!1},ZFa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},$Fa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},t6=function(a){a.length?aGa(a.shift(),function(){t6(a)}):u6()},bGa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},aGa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},u6=function(){var a=$Fa();
a&&a(!1,"No cast extension found")},dGa=function(){if(cGa){var a=2,b=$Fa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;aGa("//web.archive.org/web/20200901000012/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",u6,c)}},eGa=function(){dGa();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);t6(["//web.archive.org/web/20200901000012/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200901000012/https://www.gstatic.com/eureka/clank/cast_sender.js"])},v6=function(a,b,c){g.B.call(this);
this.F=null!=c?(0,g.x)(a,c):a;this.Gd=b;this.C=(0,g.x)(this.CG,this);this.o=!1;this.u=0;this.A=this.La=null;this.B=[]},w6=function(a,b,c){g.B.call(this);
this.B=null!=c?a.bind(c):a;this.Gd=b;this.A=null;this.o=!1;this.u=0;this.La=null},x6=function(a){a.La=g.ig(function(){a.La=null;
a.o&&!a.u&&(a.o=!1,x6(a))},a.Gd);
var b=a.A;a.A=null;a.B.apply(null,b)},y6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return FFa(a)},z6=function(){},A6=function(){},fGa=function(){},hGa=function(a){return(a=gGa(a))?new ActiveXObject(a):new XMLHttpRequest},gGa=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},B6=function(a,b,c,d){this.o=a;
this.A=b;this.I=c;this.G=d||1;this.C=45E3;this.B=new g.x1(this);this.u=new g.hg;this.u.setInterval(250)},jGa=function(a,b,c){a.Vl=1;
a.Uh=a6(b.clone());a.hk=c;a.F=!0;iGa(a,null)},C6=function(a,b,c,d,e){a.Vl=1;
a.Uh=a6(b.clone());a.hk=null;a.F=c;e&&(a.sD=!1);iGa(a,d)},iGa=function(a,b){a.Pl=(0,g.F)();
D6(a);a.Qi=a.Uh.clone();b6(a.Qi,"t",a.G);a.xo=0;a.cd=a.o.Bt(a.o.jo()?b:null);0<a.ju&&(a.xr=new w6((0,g.x)(a.nE,a,a.cd),a.ju));a.B.ma(a.cd,"readystatechange",a.gO);var c=a.Bj?g.Vb(a.Bj):{};a.hk?(a.qs="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.cd.send(a.Qi,a.qs,a.hk,c)):(a.qs="GET",a.sD&&!g.xe&&(c.Connection="close"),a.cd.send(a.Qi,a.qs,null,c));a.o.Uf(1)},mGa=function(a,b,c){for(var d=!0;!a.hj&&a.xo<c.length;){var e=kGa(a,c);
if(e==E6){4==b&&(a.ii=4,F6(15),d=!1);break}else if(e==lGa){a.ii=4;F6(16);d=!1;break}else G6(a,e)}4==b&&0==c.length&&(a.ii=1,F6(17),d=!1);a.dg=a.dg&&d;d||(H6(a),I6(a))},kGa=function(a,b){var c=a.xo,d=b.indexOf("\n",c);
if(-1==d)return E6;c=Number(b.substring(c,d));if(isNaN(c))return lGa;d+=1;if(d+c>b.length)return E6;var e=b.substr(d,c);a.xo=d+c;return e},oGa=function(a,b){a.Pl=(0,g.F)();
D6(a);var c=b?window.location.hostname:"";a.Qi=a.Uh.clone();$5(a.Qi,"DOMAIN",c);$5(a.Qi,"t",a.G);try{a.jg=new ActiveXObject("htmlfile")}catch(n){H6(a);a.ii=7;F6(22);I6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var h=c.charAt(f);if("<"==h)e+="\\x3c";else if(">"==h)e+="\\x3e";else{var l=h;if(l in J6)h=J6[l];else if(l in nGa)h=J6[l]=nGa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)h=l;else{if(256>m){if(h="\\x",16>m||256<m)h+="0"}else h="\\u",4096>m&&(h+="0");h+=m.toString(16).toUpperCase()}h=
J6[l]=h}e+=h}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.cd(g.gc("b/12014412"),d+"</body></html>");a.jg.open();a.jg.write(g.Zc(c));a.jg.close();a.jg.parentWindow.m=(0,g.x)(a.vN,a);a.jg.parentWindow.d=(0,g.x)(a.zC,a,!0);a.jg.parentWindow.rpcClose=(0,g.x)(a.zC,a,!1);c=a.jg.createElement("DIV");a.jg.parentWindow.document.body.appendChild(c);d=g.Hc(a.Qi.toString());d=g.kd(g.Dc(d));d=g.cd(g.gc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.dd(c,d);a.o.Uf(1)},D6=function(a){a.hx=(0,g.F)()+a.C;
pGa(a,a.C)},pGa=function(a,b){if(null!=a.cm)throw Error("WatchDog timer not null");
a.cm=K6((0,g.x)(a.FN,a),b)},L6=function(a){a.cm&&(g.v.clearTimeout(a.cm),a.cm=null)},I6=function(a){a.o.Fz()||a.hj||a.o.Vp(a)},H6=function(a){L6(a);
g.Ue(a.xr);a.xr=null;a.u.stop();g.Yza(a.B);if(a.cd){var b=a.cd;a.cd=null;b.abort();b.dispose()}a.jg&&(a.jg=null)},G6=function(a,b){try{a.o.qC(a,b),a.o.Uf(4)}catch(c){}},rGa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;qGa(a,b,function(h){h?c(!0):g.v.setTimeout(function(){rGa(a,b,c,d,f)},f)})}},qGa=function(a,b,c){var d=new Image;
d.onload=function(){try{M6(d),c(!0)}catch(e){}};
d.onerror=function(){try{M6(d),c(!1)}catch(e){}};
d.onabort=function(){try{M6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{M6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
EFa(d,a)},M6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},sGa=function(a){this.o=a;
this.u=new z6},tGa=function(a){var b=N6(a.o,a.pm,"/mail/images/cleardot.gif");
a6(b);rGa(b.toString(),5E3,(0,g.x)(a.AF,a),3,2E3);a.Uf(1)},P6=function(a){var b=a.o.M;
if(null!=b)F6(5),b?(F6(11),O6(a.o,a,!1)):(F6(12),O6(a.o,a,!0));else if(a.ue=new B6(a,void 0,void 0,void 0),a.ue.Bj=a.hu,b=a.o,b=N6(b,b.jo()?a.Xm:null,a.iu),F6(5),!g.ve||g.Xd(10))b6(b,"TYPE","xmlhttp"),C6(a.ue,b,!1,a.Xm,!1);else{b6(b,"TYPE","html");var c=a.ue;a=!!a.Xm;c.Vl=3;c.Uh=a6(b.clone());oGa(c,a)}},Q6=function(a){g.xf.call(this);
this.headers=new g.pn;this.T=a||null;this.A=!1;this.U=this.o=null;this.ha=this.M="";this.F=0;this.B="";this.C=this.Z=this.I=this.X=!1;this.G=0;this.N=null;this.fa="";this.R=this.Y=!1},uGa=function(a){return g.ve&&g.Wd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},vGa=function(a){return"content-type"==a.toLowerCase()},xGa=function(a,b){a.A=!1;
a.o&&(a.C=!0,a.o.abort(),a.C=!1);a.B=b;a.F=5;wGa(a);R6(a)},wGa=function(a){a.X||(a.X=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},zGa=function(a){if(a.A&&"undefined"!=typeof g.C1)if(a.U[1]&&4==S6(a)&&2==a.getStatus())T6(a,"Local request error detected and ignored");
else if(a.I&&4==S6(a))g.ig(a.mC,0,a);else if(a.dispatchEvent("readystatechange"),4==S6(a)){T6(a,"Request complete");a.A=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.ud(1,String(a.M));if(!f&&g.v.self&&g.v.self.location){var h=g.v.self.location.protocol;f=h.substr(0,h.length-1)}e=!yGa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.F=6;try{var l=2<S6(a)?a.o.statusText:""}catch(m){l=""}a.B=l+" ["+a.getStatus()+"]";wGa(a)}}finally{R6(a)}}},R6=function(a,b){if(a.o){AGa(a);
var c=a.o,d=a.U[0]?g.La:null;a.o=null;a.U=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},AGa=function(a){a.o&&a.R&&(a.o.ontimeout=null);
a.N&&(g.v.clearTimeout(a.N),a.N=null)},S6=function(a){return a.o?a.o.readyState:0},U6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},T6=function(a,b){return b+" ["+a.ha+" "+a.M+" "+a.getStatus()+"]"},V6=function(a,b,c){this.o=1;
this.u=[];this.B=[];this.C=new z6;this.I=a||null;this.M=null!=b?b:null;this.F=c||!1},CGa=function(a,b){this.o=a;
this.map=b;this.context=null},DGa=function(a){g.We.call(this,"statevent",a)},EGa=function(a,b,c,d){g.We.call(this,"timingevent",a);
this.size=b;this.Zn=d},FGa=function(a){g.We.call(this,"serverreachability",a)},IGa=function(a){GGa(a);
if(3==a.o){var b=a.Fn++,c=a.Ep.clone();$5(c,"SID",a.A);$5(c,"RID",b);$5(c,"TYPE","terminate");W6(a,c);b=new B6(a,a.A,b,void 0);b.Vl=2;b.Uh=a6(c.clone());EFa(new Image,b.Uh.toString());b.Pl=(0,g.F)();D6(b)}HGa(a)},JGa=function(a){a.aG(1,0);
a.Ep=N6(a,null,a.gu);X6(a)},GGa=function(a){a.Wh&&(a.Wh.abort(),a.Wh=null);
a.Dc&&(a.Dc.cancel(),a.Dc=null);a.Vg&&(g.v.clearTimeout(a.Vg),a.Vg=null);Y6(a);a.je&&(a.je.cancel(),a.je=null);a.ai&&(g.v.clearTimeout(a.ai),a.ai=null)},KGa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new CGa(a.fK++,b));2!=a.o&&3!=a.o||X6(a)},X6=function(a){a.je||a.ai||(a.ai=K6((0,g.x)(a.yC,a),0),a.Rk=0)},MGa=function(a,b){if(1==a.o){if(!b){a.Fn=Math.floor(1E5*Math.random());
var c=a.Fn++,d=new B6(a,"",c,void 0);d.Bj=a.Yk;var e=Z6(a),f=a.Ep.clone();$5(f,"RID",c);$5(f,"CVER","1");W6(a,f);jGa(d,f,e);a.je=d;a.o=2}}else 3==a.o&&(b?LGa(a,b):0==a.u.length||a.je||LGa(a))},LGa=function(a,b){if(b)if(6<a.ij){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Fn-1;var d=Z6(a)}else c=b.I,d=b.hk;else c=a.Fn++,d=Z6(a);var e=a.Ep.clone();$5(e,"SID",a.A);$5(e,"RID",c);$5(e,"AID",a.ql);W6(a,e);c=new B6(a,a.A,c,a.Rk+1);c.Bj=a.Yk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.je=c;jGa(c,e,d)},W6=function(a,b){if(a.Dd){var c=a.Dd.dz();
c&&g.Db(c,function(d,e){$5(b,e,d)})}},Z6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.ij&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,h=a.u[e].map;f=6>=a.ij?e:f-d;try{g.Db(h,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},NGa=function(a){a.Dc||a.Vg||(a.G=1,a.Vg=K6((0,g.x)(a.xC,a),0),a.Fk=0)},$6=function(a){if(a.Dc||a.Vg||3<=a.Fk)return!1;
a.G++;a.Vg=K6((0,g.x)(a.xC,a),OGa(a,a.Fk));a.Fk++;return!0},O6=function(a,b,c){a.ks=c;
a.tg=b.nh;a.F||JGa(a)},Y6=function(a){null!=a.mj&&(g.v.clearTimeout(a.mj),a.mj=null)},OGa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},a7=function(a,b){if(2==b||9==b){var c=null;
a.Dd&&(c=null);var d=(0,g.x)(a.PO,a);c||(c=new g.sn("//web.archive.org/web/20200901000012/https://www.google.com/images/cleardot.gif"),a6(c));qGa(c.toString(),1E4,d)}else F6(2);PGa(a,b)},PGa=function(a,b){a.o=0;
a.Dd&&a.Dd.ty(b);HGa(a);GGa(a)},HGa=function(a){a.o=0;
a.tg=-1;if(a.Dd)if(0==a.B.length&&0==a.u.length)a.Dd.jt();else{g.rb(a.B);var b=g.rb(a.u);a.B.length=0;a.u.length=0;a.Dd.jt(b)}},N6=function(a,b,c){var d=g.An(c);
if(""!=d.o)b&&g.un(d,b+"."+d.o),g.vn(d,d.B);else{var e=window.location;d=IFa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Km&&g.Db(a.Km,function(f,h){$5(d,h,f)});
$5(d,"VER",a.ij);W6(a,d);return d},K6=function(a,b){if(!g.Qa(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},F6=function(a){b7.dispatchEvent(new DGa(b7,a))},QGa=function(){},RGa=function(){this.o=[];
this.u=[]},SGa=function(a,b){this.action=a;
this.params=b||{}},c7=function(a,b){g.B.call(this);
this.o=new g.G(this.oN,0,this);g.C(this,this.o);this.Gd=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.x)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a},d7=function(a,b,c,d){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
this.N=a;this.F=b;this.A=new g.to;this.u=new c7(this.uO,this);this.o=null;this.Qc=!1;this.C=null;this.M="";this.I=this.B=0;this.G=[];this.U=c;this.R=d},TGa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.ks,sessionId:a.o.A,arrayId:a.o.ql}},UGa=function(a,b){a.I=b||0;
a.u.stop();e7(a);a.o&&(3==a.o.o&&MGa(a.o),IGa(a.o));a.I=0},f7=function(a){return!!a.o&&3==a.o.o},e7=function(a){if(a.o){var b=a.R(),c=a.o.Yk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.o.Yk=c}},VGa=function(a,b){(a.F.loungeIdToken=b)||a.u.stop()},g7=function(a){this.scheme="https";
this.port=this.domain="";this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.ud(4,a))||"";b&&(this.port=":"+b);this.domain=g.vd(a)||"";a=g.Sc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Ac(a,"10.0")&&(this.u=!1))},h7=function(a,b){var c=a.o;
a.u&&(c=a.scheme+"://"+a.domain+a.port+a.o);return g.Gd(c+b,{})},i7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ua(a.B,d,!0),onError:g.Ua(a.A,e),Qe:g.Ua(a.C,e)};c&&(a.Fb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Pq(b,a)},ZGa=function(){var a=WGa;
XGa();j7.push(a);YGa(j7)},k7=function(a,b){XGa();
var c=j7,d=$Ga(a,String(b));g.kb(c)?aHa(d):(YGa(c),g.y(c,function(e){e(d)}))},XGa=function(){j7||(j7=g.Ka("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",j7,void 0))},aHa=function(a){var b=(l7+1)%50;
l7=b;m7[b]=a;n7||(n7=49==b)},YGa=function(a){var b=m7;
if(b[0]){var c=l7,d=n7?c:-1;do{d=(d+1)%50;var e=b[d];g.y(a,function(f){f(e)})}while(d!=c);
m7=Array(50);l7=-1;n7=!1}},$Ga=function(a,b){var c=((0,g.F)()-bHa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},o7=function(a){g.N.call(this);
this.F=a;this.screens=[]},cHa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.screens.push(b);return!0},dHa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Ie(a.screens,function(f){return!!l6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=cHa(a,b[d])||c;return c},eHa=function(a,b){var c=a.screens.length;
a.screens=g.Ie(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},p7=function(a,b,c,d){g.N.call(this);
this.F=a;this.C=b;this.A=c;this.B=d;this.u=0;this.o=null;this.La=NaN},r7=function(a){o7.call(this,"LocalScreenService");
this.u=a;this.o=NaN;q7(this);this.info("Initializing with "+j6(this.screens))},fHa=function(a){if(a.screens.length){var b=g.Mc(a.screens,function(d){return d.id}),c=h7(a.u,"/pairing/get_lounge_token_batch");
i7(a.u,c,{screen_ids:b.join(",")},(0,g.x)(a.MG,a),(0,g.x)(a.LG,a))}},q7=function(a){var b=OFa(UFa());
b=g.Ie(b,function(c){return!c.uuid});
return dHa(a,b)},s7=function(a,b){WFa(g.Mc(a.screens,MFa));
b&&VFa()},u7=function(a,b){g.N.call(this);
this.F=b;var c=g.Ct("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.F(),f=0,h=e.length;f<h;++f){var l=e[f].id;d[l]=g.jb(c,l)}this.o=d;this.C=a;this.A=this.B=NaN;this.u=null;t7("Initialized with "+g.gl(this.o))},gHa=function(a,b,c){var d=h7(a.C,"/pairing/get_screen_availability");
i7(a.C,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,h=e.length;f<h;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},v7=function(a,b){a:if(c6(b)!=c6(a.o))var c=!1;
else{c=g.Kb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(t7("Updated online screens: "+g.gl(a.o)),a.o=b,a.S("screenChange"));hHa(a)},w7=function(a){isNaN(a.A)||g.gp(a.A);
a.A=g.ep((0,g.x)(a.gw,a),0<a.B&&a.B<(0,g.F)()?2E4:1E4)},t7=function(a){k7("OnlineScreenService",a)},iHa=function(a){var b={};
g.y(a.F(),function(c){c.token?b[c.token]=c.id:this.oc("Requesting availability of screen w/o lounge token.")});
return b},hHa=function(a){a=g.Kb(g.Eb(a.o,function(b){return b}));
g.zb(a);a.length?g.Bt("yt-remote-online-screen-ids",a.join(","),60):g.Dt("yt-remote-online-screen-ids")},x7=function(a){o7.call(this,"ScreenService");
this.C=a;this.o=this.u=null;this.A=[];this.B={};jHa(this)},lHa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var h=a.Ie();if(h=(c?m6(h,c):null)||m6(h,b)){h.uuid=b;var l=y7(a,h);gHa(a.o,l,function(m){e(m?l:null)})}else c?kHa(a,c,(0,g.x)(function(m){var n=y7(this,new g6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));gHa(this.o,n,function(q){e(q?n:null)})},a),f):e(null)},mHa=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},kHa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={Fb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,h){var l=h&&h.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Pq(h7(a.C,"/pairing/get_lounge_token_batch"),e)},nHa=function(a){a.screens=a.u.Ie();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+j6(a.screens))},jHa=function(a){z7(a);
a.u=new r7(a.C);a.u.subscribe("screenChange",(0,g.x)(a.UG,a));nHa(a);a.A=OFa(g.Ct("yt-remote-automatic-screen-cache")||[]);z7(a);a.info("Initializing automatic screens: "+j6(a.A));a.o=new u7(a.C,(0,g.x)(a.Ie,a,!0));a.o.subscribe("screenChange",(0,g.x)(function(){this.S("onlineScreenChange")},a))},y7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=m6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.Bt("yt-remote-automatic-screen-cache",g.Mc(a.A,MFa)));z7(a);a.B[b.uuid]=b.id;g.Bt("yt-remote-device-id-map",a.B,31536E3);return b},z7=function(a){a.B=g.Ct("yt-remote-device-id-map")||{}},A7=function(a,b,c){g.N.call(this);
this.U=c;this.I=a;this.o=b;this.G=null},B7=function(a,b){k7(a.U,b)},C7=function(a,b){A7.call(this,a,b,"CastSession");
this.u=null;this.A=0;this.C=(0,g.x)(this.wP,this);this.B=(0,g.x)(this.NN,this);this.A=g.ep((0,g.x)(function(){oHa(this,null)},this),12E4)},pHa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.gl(void 0));
var b={type:"getMdxSessionStatus"};a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.La,(0,g.x)(function(){B7(this,"Failed to send message: getMdxSessionStatus.")},a)):B7(a,"Sending yt message without session: "+g.gl(b))},oHa=function(a,b){g.gp(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.getScreen()||a.getScreen().id!=b){var c=(0,g.x)(a.kr,a),d=(0,g.x)(a.Pe,a);a.yz(b,c,d,5)}}else a.Pe(Error("Waiting for session status timed out."))},D7=function(a,b,c){A7.call(this,a,b,"DialSession");
this.A=this.F=null;this.M="";this.T=c;this.N=null;this.C=g.La;this.B=NaN;this.R=(0,g.x)(this.zP,this);this.u=g.La},qHa=function(a){a.u=a.I.uE(a.M,a.o.label,a.o.friendlyName,(0,g.x)(function(b){this.u=g.La;
this.kr(b)},a),(0,g.x)(function(b){this.u=g.La;
this.Pe(b)},a))},rHa=function(a){var b={};
b.pairingCode=a.M;b.theme=a.T;YFa()&&(b.env_useStageMdx=1);return g.Ed(b)},E7=function(a,b){A7.call(this,a,b,"ManualSession");
this.u=g.ep((0,g.x)(this.rl,this,null),150)},F7=function(a,b,c,d){g.N.call(this);
this.u=a;this.G=b||"233637DE";this.F=c||"cl";this.I=d||!1;this.o=null;this.C=!1;this.A=[];this.B=(0,g.x)(this.CM,this)},sHa=function(a,b){return b?g.eb(a.A,function(c){return h6(b,c.label)},a):null},G7=function(a){k7("Controller",a)},WGa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},H7=function(a){return a.C||!!a.A.length||!!a.o},I7=function(a,b,c){b!=a.o&&(g.Ue(a.o),(a.o=b)?(c?a.S("yt-remote-cast2-receiver-resumed",b.o):a.S("yt-remote-cast2-receiver-selected",
b.o),b.subscribe("sessionScreen",(0,g.x)(a.vC,a,b)),b.getScreen()?a.S("yt-remote-cast2-session-change",b.getScreen()):c&&a.o.rl(null)):a.S("yt-remote-cast2-session-change",null))},tHa=function(a){var b=a.u.tE(),c=a.o&&a.o.o;
a=g.Mc(b,function(d){c&&h6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=sHa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},zHa=function(a,b,c,d,e,f,h){uHa()?vHa(b,e,f,h)&&(K7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?wHa(a,c):(window.__onGCastApiAvailable=function(l,m){l?wHa(a,c):(L7("Failed to load cast API: "+m),M7(!1),K7(!1),g.Dt("yt-remote-cast-available"),g.Dt("yt-remote-cast-receiver"),xHa(),c(!1))},d?g.qp("https://web.archive.org/web/20200901000012/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?eGa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?u6():(dGa(),t6(yHa.map(bGa))))):J7("Cannot initialize because not running Chrome")},xHa=function(){J7("dispose");
var a=N7();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null,void 0);AHa(!1);g.mp(O7);O7.length=0},P7=function(){return!!g.Ct("yt-remote-cast-installed")},BHa=function(){var a=g.Ct("yt-remote-cast-receiver");
return a?a.friendlyName:null},CHa=function(){J7("clearCurrentReceiver");
g.Dt("yt-remote-cast-receiver")},DHa=function(){return P7()?N7()?N7().getCastSession():(L7("getCastSelector: Cast is not initialized."),null):(L7("getCastSelector: Cast API is not installed!"),null)},R7=function(){P7()?N7()?Q7()?(J7("Requesting cast selector."),N7().requestSession()):(J7("Wait for cast API to be ready to request the session."),O7.push(g.lp("yt-remote-cast2-api-ready",R7))):L7("requestCastSelector: Cast is not initialized."):L7("requestCastSelector: Cast API is not installed!")},S7=
function(a,b){Q7()?N7().setConnectedScreenStatus(a,b):L7("setConnectedScreenStatus called before ready.")},uHa=function(){var a=0<=g.Sc.search(/ (CrMo|Chrome|CriOS)\//);
return g.wx||a},EHa=function(a,b){N7().init(a,b)},vHa=function(a,b,c,d){var e=!1;
N7()||(a=new F7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.Bt("yt-remote-cast-available",f);e6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){J7("onReceiverSelected: "+f.friendlyName);
g.Bt("yt-remote-cast-receiver",f);e6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){J7("onReceiverResumed: "+f.friendlyName);
g.Bt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){J7("onSessionChange: "+i6(f));
f||g.Dt("yt-remote-cast-receiver");e6("yt-remote-cast2-session-change",f)}),g.Ha("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
J7("cloudview.createSingleton_: "+e);return e},N7=function(){return g.Ka("yt.mdx.remote.cloudview.instance_")},wHa=function(a,b){M7(!0);
K7(!1);EHa(a,function(c){c?(AHa(!0),g.np("yt-remote-cast2-api-ready")):(L7("Failed to initialize cast API."),M7(!1),g.Dt("yt-remote-cast-available"),g.Dt("yt-remote-cast-receiver"),xHa());b(c)})},J7=function(a){k7("cloudview",a)},L7=function(a){k7("cloudview",a)},M7=function(a){J7("setCastInstalled_ "+a);
g.Bt("yt-remote-cast-installed",a)},Q7=function(){return!!g.Ka("yt.mdx.remote.cloudview.apiReady_")},AHa=function(a){J7("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a,void 0)},K7=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a,void 0)},T7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.F=this.G=0;this.o=null;this.hasNext=this.ug=!1;this.M=this.I=this.u=this.C=0;this.B=NaN;this.A=!1;this.reset(a)},U7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.ug=!1;a.hasNext=!1;a.G=0;a.F=(0,g.F)();a.C=0;a.u=0;a.I=0;a.M=0;a.B=NaN;a.A=!1},V7=function(a){return a.sb()?((0,g.F)()-a.F)/1E3:0},W7=function(a,b){a.G=b;
a.F=(0,g.F)()},X7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.F)()-a.F)/1E3+a.G;
case -1E3:return 0}return a.G},Y7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&U7(a)},Z7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Wb(a.o);b.hasPrevious=a.ug;b.hasNext=a.hasNext;b.playerTime=a.G;b.playerTimeAt=a.F;b.seekableStart=a.C;b.seekableEnd=a.u;b.duration=a.I;b.loadedTime=a.M;b.liveIngestionTime=a.B;return b},a8=function(a,b){g.N.call(this);
this.o=0;this.B=a;this.F=[];this.C=new RGa;this.A=this.u=null;this.M=(0,g.x)(this.NK,this);this.G=(0,g.x)(this.Jn,this);this.I=(0,g.x)(this.MK,this);this.N=(0,g.x)(this.VK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.jx,this),FHa(this))):c=3;0!=c&&(b?this.jx(c):g.ep((0,g.x)(function(){this.jx(c)},this),0));
var d=DHa();d&&$7(this,d);this.subscribe("yt-remote-cast2-session-change",this.N)},b8=function(a){return new T7(a.B.getPlayerContextData())},FHa=function(a){g.y("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.F.push(this.B.subscribe(b,g.Ua(this.yM,b),this))},a)},GHa=function(a){g.y(a.F,function(b){this.B.unsubscribeByKey(b)},a);
a.F.length=0},c8=function(a,b){var c=a.C;
50>c.o.length+c.u.length&&a.C.u.push(b)},e8=function(a,b,c){var d=b8(a);
W7(d,c);-1E3!=d.playerState&&(d.playerState=b);d8(a,d)},f8=function(a,b,c){a.B.sendMessage(b,c)},d8=function(a,b){GHa(a);
a.B.setPlayerContextData(Z7(b));FHa(a)},$7=function(a,b){a.A&&(a.A.removeUpdateListener(a.M),a.A.removeMediaListener(a.G),a.Jn(null));
a.A=b;a.A&&(k7("CP","Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.M),a.A.addMediaListener(a.G),a.A.media.length&&a.Jn(a.A.media[0]))},HHa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=b8(a);b.contentId!=d.videoId&&k7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;W7(d,a.u.getEstimatedTime());d8(a,d)}else k7("CP","No cast media video. Ignoring state update.")},g8=function(a,b,c){return(0,g.x)(function(d){this.oc("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.oc("Retrying "+b+" using MDx browser channel."),f8(this,b,c))},a)},h8=function(a,b,c){g.N.call(this);
this.C=NaN;this.R=!1;this.I=this.G=this.M=this.N=NaN;this.U=[];this.B=this.F=this.A=this.fb=this.o=null;this.X=a;this.U.push(g.Bp(window,"beforeunload",(0,g.x)(this.FG,this)));this.u=[];this.fb=new T7;this.T=b.id;this.o=IHa(this,c);this.o.subscribe("handlerOpened",this.RK,this);this.o.subscribe("handlerClosed",this.OK,this);this.o.subscribe("handlerError",this.PK,this);this.o.subscribe("handlerMessage",this.QK,this);VGa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.fb.videoId;
g.Et()&&g.Bt("yt-remote-session-video-id",d)},this)},i8=function(a){k7("conn",a)},IHa=function(a,b){return new d7(h7(a.X,"/bc"),b,!1,function(){return a.qE()})},j8=function(a,b){a.S("proxyStateChange",b)},JHa=function(a){a.C=g.ep((0,g.x)(function(){i8("Connecting timeout");
this.Nk(1)},a),2E4)},k8=function(a){g.gp(a.C);
a.C=NaN},l8=function(a){g.gp(a.N);
a.N=NaN},KHa=function(a){m8(a);
a.M=g.ep((0,g.x)(function(){n8(this,"getNowPlaying")},a),2E4)},m8=function(a){g.gp(a.M);
a.M=NaN},MHa=function(a,b){b&&(k8(a),l8(a));
b==(f7(a.o)&&isNaN(a.C))?b&&(j8(a,1),n8(a,"getSubtitlesTrack")):b?(a.wz()&&a.fb.reset(),j8(a,1),n8(a,"getNowPlaying"),LHa(a)):a.Nk(1)},NHa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.fb.videoId&&(g.Qb(b.params)?a.fb.o=null:a.fb.o=b.params,a.S("remotePlayerChange"))},OHa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.fb.listId=b.params.listId||a.fb.listId;Y7(a.fb,c,d);a.S("remoteQueueChange")},QHa=function(a,b){b.params=b.params||{};
OHa(a,b);PHa(a,b);a.S("autoplayDismissed")},PHa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
W7(a.fb,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.fb.playerState&&(c=-1E3);a.fb.playerState=c;c=Number(b.params.loadedTime);a.fb.M=isNaN(c)?0:c;c=Number(b.params.duration);a.fb.I=isNaN(c)?0:c;c=a.fb;var d=Number(b.params.liveIngestionTime);c.B=d;c.A=isNaN(d)?!1:!0;c=a.fb;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.fb.playerState?KHa(a):m8(a);a.S("remotePlayerChange")},RHa=function(a,b){if(-1E3!=
a.fb.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.fb.playerState=c;c=parseInt(b.params.currentTime,10);W7(a.fb,isNaN(c)?0:c);a.S("remotePlayerChange")}},SHa=function(a,b){var c="true"==b.params.muted;
a.fb.volume=parseInt(b.params.volume,10);a.fb.muted=c;a.S("remotePlayerChange")},THa=function(a,b){a.F=b.params.videoId;
a.S("nowAutoplaying",parseInt(b.params.timeout,10))},UHa=function(a,b){var c="true"==b.params.hasNext;
a.fb.ug="true"==b.params.hasPrevious;a.fb.hasNext=c;a.S("previousNextChange")},LHa=function(a){g.gp(a.I);
a.I=g.ep((0,g.x)(a.Nk,a,1),864E5)},n8=function(a,b,c){c?i8("Sending: action="+b+", params="+g.gl(c)):i8("Sending: action="+b);
a.o.sendMessage(b,c)},o8=function(a){o7.call(this,"ScreenServiceProxy");
this.Fd=a;this.o=[];this.o.push(this.Fd.$_s("screenChange",(0,g.x)(this.uP,this)));this.o.push(this.Fd.$_s("onlineScreenChange",(0,g.x)(this.cM,this)))},ZHa=function(a,b){b=g.K("MDX_CONFIG")||b;
QFa();q6();p8||(p8=new g7(b?b.loungeApiHost:void 0),YFa()&&(p8.o="/api/loungedev"));q8||(q8=g.Ka("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",q8,void 0));VHa();var c=r8();if(!c){var d=new x7(p8);g.Ha("yt.mdx.remote.screenService_",d,void 0);c=r8();var e=!1,f=void 0,h=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,h=b.theme,l=!!b.disableDial);zHa(a,d,function(m){m?s8()&&S7(s8(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){e6("yt-remote-receiver-availability-change")})},
e,f,h,l)}b&&!g.Ka("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0,void 0),t8("Initializing: "+g.gl(b)),u8.push(g.lp("yt-remote-cast2-availability-change",function(){e6("yt-remote-receiver-availability-change")})),u8.push(g.lp("yt-remote-cast2-receiver-selected",function(){v8(null);
e6("yt-remote-auto-connect","cast-selector-receiver")})),u8.push(g.lp("yt-remote-cast2-receiver-resumed",function(){e6("yt-remote-receiver-resumed","cast-selector-receiver")})),u8.push(g.lp("yt-remote-cast2-session-change",WHa)),u8.push(g.lp("yt-remote-connection-change",function(m){m?S7(s8(),"YouTube TV"):w8()||(S7(null,null),CHa())})),e=x8(),b.isAuto&&(e.id+="#dial"),g.Vo("desktop_enable_autoplay")&&(e.capabilities=["atp"]),e.name=b.device,e.app=b.app,(h=b.theme)&&(e.theme=h),t8(" -- with channel params: "+
g.gl(e)),XHa(e),c.start(),s8()||YHa())},aIa=function(){var a=$Ha();
P7()&&g.Ct("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},$Ha=function(){var a=r8().Fd.$_gos();
var b=y8();b&&z8()&&(l6(a,b)||a.push(b));return PFa(a)},A8=function(){var a=bIa();
!a&&P7()&&BHa()&&(a={key:"cast-selector-receiver",name:BHa()});return a},bIa=function(){var a=$Ha(),b=y8();
b||(b=w8());return g.eb(a,function(c){return b&&h6(b,c.key)?!0:!1})},y8=function(){var a=s8();
if(!a)return null;var b=r8().Ie();return m6(b,a)},WHa=function(a){t8("remote.onCastSessionChange_: "+i6(a));
if(a){var b=y8();b&&b.id==a.id?S7(b.id,"YouTube TV"):(b&&B8(),C8(a,1))}else z8()&&B8()},B8=function(){Q7()?N7().stopSession():L7("stopSession called before API ready.");
var a=z8();a&&(a.disconnect(1),D8(null))},E8=function(){var a=z8();
return!!a&&3!=a.getProxyState()},t8=function(a){k7("remote",a)},r8=function(){if(!F8){var a=g.Ka("yt.mdx.remote.screenService_");
F8=a?new o8(a):null}return F8},s8=function(){return g.Ka("yt.mdx.remote.currentScreenId_")},cIa=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a,void 0)},dIa=function(){return g.Ka("yt.mdx.remote.connectData_")},v8=function(a){g.Ha("yt.mdx.remote.connectData_",a,void 0)},z8=function(){return g.Ka("yt.mdx.remote.connection_")},D8=function(a){var b=z8();
v8(null);a||cIa("");g.Ha("yt.mdx.remote.connection_",a,void 0);q8&&(g.y(q8,function(c){c(a)}),q8.length=0);
b&&!a?e6("yt-remote-connection-change",!1):!b&&a&&e6("yt-remote-connection-change",!0)},w8=function(){var a=g.Et();
if(!a)return null;var b=r8();if(!b)return null;b=b.Ie();return m6(b,a)},C8=function(a,b){s8();
y8()&&y8();if(G8)H8=a;else{cIa(a.id);var c=new h8(p8,a,x8());c.connect(b,dIa());c.subscribe("beforeDisconnect",function(d){e6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){z8()&&(z8(),D8(null))});
D8(c)}},YHa=function(){var a=w8();
a?(t8("Resume connection to: "+i6(a)),C8(a,0)):(r6(),CHa(),t8("Skipping connecting because no session screen found."))},VHa=function(){var a=x8();
if(g.Qb(a)){a=p6();var b=g.Ct("yt-remote-session-name")||"",c=g.Ct("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a,void 0)}},x8=function(){return g.Ka("yt.mdx.remote.channelParams_")||{}},XHa=function(a){a?(g.Bt("yt-remote-session-app",a.app),g.Bt("yt-remote-session-name",a.name)):(g.Dt("yt-remote-session-app"),g.Dt("yt-remote-session-name"));
g.Ha("yt.mdx.remote.channelParams_",a,void 0)},I8=function(a,b,c){g.B.call(this);
var d=this;this.module=a;this.H=b;this.Ya=c;this.events=new g.Es(this);this.M=this.events.L(this.H,"onVolumeChange",this.XB);this.B=!1;this.suggestion=null;this.C=new g.HH(64);this.o=new g.G(this.BD,500,this);this.u=new g.G(this.CD,1E3,this);this.G=new v6(this.ZO,0,this);this.A={};this.I=new g.G(this.dE,1E3,this);this.F=new w6(this.seekTo,1E3,this);this.N=g.La;g.C(this,this.events);this.events.L(b,"onCaptionsTrackListChanged",this.DL);this.events.L(b,"captionschanged",this.LK);this.events.L(b,"captionssettingschanged",
this.FD);this.events.L(b,"videoplayerreset",this.lr);this.events.L(b,"mdxautoplaycancel",function(){d.Ya.Ny()});
a=this.Ya;a.ga();a.subscribe("proxyStateChange",this.pC,this);a.subscribe("remotePlayerChange",this.Pn,this);a.subscribe("remoteQueueChange",this.lr,this);a.subscribe("previousNextChange",this.lC,this);a.subscribe("nowAutoplaying",this.hC,this);a.subscribe("autoplayDismissed",this.HB,this);g.C(this,this.o);g.C(this,this.u);g.C(this,this.G);g.C(this,this.I);g.C(this,this.F);this.FD();this.lr();this.Pn()},eIa=function(a){a.Wb(0);
a.o.stop();a.Oc(new g.HH(64))},K8=function(a,b){if(J8(a)&&!a.B){var c=null;
b&&(c={style:a.H.getSubtitlesUserSettings()},g.Yb(c,b));a.Ya.rE(a.H.getVideoData(1).videoId,c);a.A=b8(a.Ya).o}},L8=function(a,b){var c=a.H.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.H.getVideoData(1);a.Ya.playVideo(c.videoId,b,d,e,c.playerParams,c.Ke,CFa(c));a.Oc(new g.HH(1))},fIa=function(a,b){if(b){var c=a.H.getOption("captions","tracklist",{Xz:1});
c&&c.length?(a.H.setOption("captions","track",b),a.B=!1):(a.H.loadModule("captions"),a.B=!0)}else a.H.setOption("captions","track",{})},J8=function(a){return b8(a.Ya).videoId===a.H.getVideoData(1).videoId},M8=function(){g.U.call(this,{D:"div",
J:"ytp-mdx-manual-pairing-popup-dialog",P:{role:"dialog"},K:[{D:"div",J:"ytp-mdx-manual-pairing-popup-dialog-inner-content",K:[{D:"div",J:"ytp-mdx-manual-pairing-popup-title",V:"Connecting to your TV on web using a code will be going away soon"},{D:"div",J:"ytp-mdx-manual-pairing-popup-buttons",K:[{D:"button",ca:["ytp-button","ytp-mdx-manual-pairing-popup-learn-more"],V:"Learn more"},{D:"button",ca:["ytp-button","ytp-mdx-manual-pairing-popup-ok"],V:"OK"}]}]}]});this.o=new g.DO(this,250);this.learnMoreButton=
this.ba("ytp-mdx-manual-pairing-popup-learn-more");this.okButton=this.ba("ytp-mdx-manual-pairing-popup-ok");g.C(this,this.o);this.L(this.learnMoreButton,"click",this.u);this.L(this.okButton,"click",this.A)},N8=function(){g.U.call(this,{D:"div",
J:"ytp-mdx-popup-dialog",P:{role:"dialog"},K:[{D:"div",J:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",J:"ytp-mdx-popup-title",V:"You're signed out"},{D:"div",J:"ytp-mdx-popup-description",V:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",J:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",ca:["ytp-button","ytp-mdx-privacy-popup-cancel"],V:"Cancel"},{D:"button",ca:["ytp-button","ytp-mdx-privacy-popup-confirm"],
V:"Confirm"}]}]}]});this.o=new g.DO(this,250);this.cancelButton=this.ba("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.ba("ytp-mdx-privacy-popup-confirm");g.C(this,this.o);this.L(this.cancelButton,"click",this.u);this.L(this.confirmButton,"click",this.A)},O8=function(a){g.U.call(this,{D:"div",
J:"ytp-remote",K:[{D:"div",J:"ytp-remote-display-status",K:[{D:"div",J:"ytp-remote-display-status-icon",K:[g.FO()]},{D:"div",J:"ytp-remote-display-status-text",V:"{{statustext}}"}]}]});this.api=a;this.o=new g.DO(this,250);g.C(this,this.o);this.L(a,"presentingplayerstatechange",this.u);gIa(this,g.fE(a))},gIa=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.HD("Error on $RECEIVER_NAME",c):b.sb()||g.W(b,4)?g.HD("Playing on $RECEIVER_NAME",c):g.HD("Connected to $RECEIVER_NAME",c);a.la("statustext",c);a.o.show()}else a.o.hide()},P8=function(a,b){g.QR.call(this,"Play on",0,a,b);
this.H=a;this.Pi={};this.L(a,"onMdxReceiversChange",this.B);this.L(a,"presentingplayerstatechange",this.B);this.B()},Q8=function(a){g.iO.call(this,a);
this.Pf={key:k6(),name:"This computer"};this.mg=null;this.subscriptions=[];this.Pv=this.Ya=null;this.Pi=[this.Pf];this.Yh=this.Pf;this.Sb=new g.HH(64);this.pA=0;this.jd=-1;this.ul=null;this.Qn=this.xq=!1;this.gk=this.Ll=null;if(!g.nz(this.player.O())){a=this.player;var b=g.vN(a);b&&(b=b.yj())&&(b=new P8(a,b),g.C(this,b));b=new O8(a);g.C(this,b);g.VN(a,b.element,4);this.Ll=new N8;g.C(this,this.Ll);g.VN(a,this.Ll.element,4);g.R(this.player.O().experiments,"pair_servlet_deprecation_warning_enabled")&&
(this.ul=new M8,g.C(this,this.ul),g.VN(a,this.ul.element,4));this.Qn=!!w8();this.xq=!!g.Ct("yt-remote-manual-pairing-warning-shown")}},R8=function(a){a.gk&&(a.player.removeEventListener("presentingplayerstatechange",a.gk),a.gk=null)},hIa=function(a,b,c){a.Sb=c;
a.player.S("presentingplayerstatechange",new g.QH(c,b))},iIa=function(a,b,c){var d=!1;
1===b?d=!a.Qn:2===b&&(d=!a.xq);d&&g.SH(c,8)&&(a.player.pauseVideo(),R8(a))},S8=function(a,b){if(b.key!==a.Yh.key)if(b.key===a.Pf.key)B8();
else{if(a.ul&&!a.xq&&b!==a.Pf&&"cast-selector-receiver"!==b.key&&g.wz(a.player.O()))jIa(a);else{var c;(c=!g.R(a.player.O().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.K("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.K("SESSION_INDEX")&&!g.K("LOGGED_IN")))||a.Qn||!a.Ll);(c?0:g.wz(a.player.O())||g.Az(a.player.O()))&&kIa(a)}a.Yh=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&
g.R(a.player.O().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var h=[];for(var l=0;l<f.getLength();l++)h[l]=f.Ba(l).videoId}else h=[e];f=a.player.getCurrentTime(1);d={videoIds:h,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ke,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=CFa(c))&&(d.locationInfo=c);c=d}t8("Connecting to: "+g.gl(b));"cast-selector-receiver"==b.key?(v8(c||null),c=
c||null,Q7()?N7().setLaunchParams(c):L7("setLaunchParams called before ready.")):!c&&E8()&&s8()==b.key?e6("yt-remote-connection-change",!0):(B8(),v8(c||null),c=r8().Ie(),(c=m6(c,b.key))&&C8(c,1))}},kIa=function(a){g.fE(a.player).sb()?a.player.pauseVideo():(a.gk=function(b){iIa(a,1,b)},a.player.addEventListener("presentingplayerstatechange",a.gk));
a.Ll&&a.Ll.Lb();z8()||(G8=!0)},jIa=function(a){g.fE(a.player).sb()?a.player.pauseVideo():(a.gk=function(b){iIa(a,2,b)},a.player.addEventListener("presentingplayerstatechange",a.gk));
a.ul&&a.ul.Lb();z8()||(G8=!0)},nGa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},J6={"'":"\\'"},lIa={},LFa={bQ:"atp",US:"ska",ES:"que",SR:"mus",SS:"sus",aR:"dsp",LS:"seq"},s6,o6="",cGa=ZFa("loadCastFramework")||ZFa("loadCastApplicationFramework"),yHa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Wa(v6,g.B);g.k=v6.prototype;g.k.BG=function(a){this.B=arguments;this.o=!1;this.La?this.A=(0,g.F)()+this.Gd:this.La=g.ig(this.C,this.Gd)};
g.k.stop=function(){this.La&&(g.v.clearTimeout(this.La),this.La=null);this.A=null;this.o=!1;this.B=[]};
g.k.pause=function(){++this.u};
g.k.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.F.apply(null,this.B)))};
g.k.W=function(){this.stop();v6.sc.W.call(this)};
g.k.CG=function(){this.A?(this.La=g.ig(this.C,this.A-(0,g.F)()),this.A=null):(this.La=null,this.u?this.o=!0:(this.o=!1,this.F.apply(null,this.B)))};g.t(w6,g.B);g.k=w6.prototype;g.k.DA=function(a){this.A=arguments;this.La||this.u?this.o=!0:x6(this)};
g.k.stop=function(){this.La&&(g.v.clearTimeout(this.La),this.La=null,this.o=!1,this.A=null)};
g.k.pause=function(){this.u++};
g.k.resume=function(){this.u--;this.u||!this.o||this.La||(this.o=!1,x6(this))};
g.k.W=function(){g.B.prototype.W.call(this);this.stop()};z6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
z6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};A6.prototype.o=null;A6.prototype.getOptions=function(){var a;(a=this.o)||(a={},gGa(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var T8;g.Wa(fGa,A6);T8=new fGa;g.k=B6.prototype;g.k.Bj=null;g.k.dg=!1;g.k.cm=null;g.k.hx=null;g.k.Pl=null;g.k.Vl=null;g.k.Uh=null;g.k.Qi=null;g.k.hk=null;g.k.cd=null;g.k.xo=0;g.k.jg=null;g.k.qs=null;g.k.ii=null;g.k.Ym=-1;g.k.sD=!0;g.k.hj=!1;g.k.ju=0;g.k.xr=null;var lGa={},E6={};g.k=B6.prototype;g.k.setTimeout=function(a){this.C=a};
g.k.gO=function(a){a=a.target;var b=this.xr;b&&3==S6(a)?b.DA():this.nE(a)};
g.k.nE=function(a){try{if(a==this.cd)a:{var b=S6(this.cd),c=this.cd.F,d=this.cd.getStatus();if(g.ve&&!g.Xd(10)||g.xe&&!g.Wd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Rh&&!U6(this.cd))break a;this.hj||4!=b||7==c||(8==c||0>=d?this.o.Uf(3):this.o.Uf(2));L6(this);var e=this.cd.getStatus();this.Ym=e;var f=U6(this.cd);(this.dg=200==e)?(4==b&&H6(this),this.F?(mGa(this,b,f),g.Rh&&this.dg&&3==b&&(this.B.ma(this.u,"tick",this.aO),this.u.start())):G6(this,f),this.dg&&!this.hj&&(4==b?this.o.Vp(this):(this.dg=
!1,D6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.ii=3,F6(13)):(this.ii=0,F6(14)),H6(this),I6(this))}}catch(h){this.cd&&U6(this.cd)}finally{}};
g.k.aO=function(){var a=S6(this.cd),b=U6(this.cd);this.xo<b.length&&(L6(this),mGa(this,a,b),this.dg&&4!=a&&D6(this))};
g.k.vN=function(a){K6((0,g.x)(this.uN,this,a),0)};
g.k.uN=function(a){this.hj||(L6(this),G6(this,a),D6(this))};
g.k.zC=function(a){K6((0,g.x)(this.tN,this,a),0)};
g.k.tN=function(a){this.hj||(H6(this),this.dg=a,this.o.Vp(this),this.o.Uf(4))};
g.k.cancel=function(){this.hj=!0;H6(this)};
g.k.FN=function(){this.cm=null;var a=(0,g.F)();0<=a-this.hx?(2!=this.Vl&&this.o.Uf(3),H6(this),this.ii=2,F6(18),I6(this)):pGa(this,this.hx-a)};
g.k.getLastError=function(){return this.ii};g.k=sGa.prototype;g.k.hu=null;g.k.ue=null;g.k.yr=!1;g.k.Gz=null;g.k.Cp=null;g.k.Lu=null;g.k.iu=null;g.k.jf=null;g.k.nh=-1;g.k.Xm=null;g.k.pm=null;g.k.connect=function(a){this.iu=a;a=N6(this.o,null,this.iu);F6(3);this.Gz=(0,g.F)();var b=this.o.I;null!=b?(this.Xm=b[0],(this.pm=b[1])?(this.jf=1,tGa(this)):(this.jf=2,P6(this))):(b6(a,"MODE","init"),this.ue=new B6(this,void 0,void 0,void 0),this.ue.Bj=this.hu,C6(this.ue,a,!1,null,!0),this.jf=0)};
g.k.AF=function(a){if(a)this.jf=2,P6(this);else{F6(4);var b=this.o;b.tg=b.Wh.nh;a7(b,9)}a&&this.Uf(2)};
g.k.Bt=function(a){return this.o.Bt(a)};
g.k.abort=function(){this.ue&&(this.ue.cancel(),this.ue=null);this.nh=-1};
g.k.Fz=function(){return!1};
g.k.qC=function(a,b){this.nh=a.Ym;if(0==this.jf)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.tg=this.nh;a7(c,2);return}this.Xm=c[0];this.pm=c[1]}else c=this.o,c.tg=this.nh,a7(c,2);else if(2==this.jf)if(this.yr)F6(7),this.Lu=(0,g.F)();else if("11111"==b){if(F6(6),this.yr=!0,this.Cp=(0,g.F)(),c=this.Cp-this.Gz,!g.ve||g.Xd(10)||500>c)this.nh=200,this.ue.cancel(),F6(12),O6(this.o,this,!0)}else F6(8),this.Cp=this.Lu=(0,g.F)(),this.yr=!1};
g.k.Vp=function(){this.nh=this.ue.Ym;if(this.ue.dg)0==this.jf?this.pm?(this.jf=1,tGa(this)):(this.jf=2,P6(this)):2==this.jf&&((!g.ve||g.Xd(10)?!this.yr:200>this.Lu-this.Cp)?(F6(11),O6(this.o,this,!1)):(F6(12),O6(this.o,this,!0)));else{0==this.jf?F6(9):2==this.jf&&F6(10);var a=this.o;this.ue.getLastError();a.tg=this.nh;a7(a,2)}};
g.k.jo=function(){return this.o.jo()};
g.k.isActive=function(){return this.o.isActive()};
g.k.Uf=function(a){this.o.Uf(a)};g.Wa(Q6,g.xf);var yGa=/^https?$/i,mIa=["POST","PUT"];g.k=Q6.prototype;
g.k.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.M+"; newUri="+a);b=b?b.toUpperCase():"GET";this.M=a;this.B="";this.F=0;this.ha=b;this.X=!1;this.A=!0;this.o=this.T?hGa(this.T):hGa(T8);this.U=this.T?this.T.getOptions():T8.getOptions();this.o.onreadystatechange=(0,g.x)(this.mC,this);try{d6(T6(this,"Opening Xhr")),this.Z=!0,this.o.open(b,String(a),!0),this.Z=!1}catch(f){d6(T6(this,"Error opening Xhr: "+f.message));xGa(this,f);return}a=c||
"";var e=this.headers.clone();d&&HFa(d,function(f,h){e.set(h,f)});
d=g.eb(e.gf(),vGa);c=g.v.FormData&&a instanceof g.v.FormData;!g.jb(mIa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,h){this.o.setRequestHeader(h,f)},this);
this.fa&&(this.o.responseType=this.fa);"withCredentials"in this.o&&this.o.withCredentials!==this.Y&&(this.o.withCredentials=this.Y);try{AGa(this),0<this.G&&(this.R=uGa(this.o),d6(T6(this,"Will abort after "+this.G+"ms if incomplete, xhr2 "+this.R)),this.R?(this.o.timeout=this.G,this.o.ontimeout=(0,g.x)(this.Hz,this)):this.N=g.ig(this.Hz,this.G,this)),d6(T6(this,"Sending request")),this.I=!0,this.o.send(a),this.I=!1}catch(f){d6(T6(this,"Send error: "+f.message)),xGa(this,f)}};
g.k.Hz=function(){"undefined"!=typeof g.C1&&this.o&&(this.B="Timed out after "+this.G+"ms, aborting",this.F=8,T6(this,this.B),this.dispatchEvent("timeout"),this.abort(8))};
g.k.abort=function(a){this.o&&this.A&&(T6(this,"Aborting"),this.A=!1,this.C=!0,this.o.abort(),this.C=!1,this.F=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),R6(this))};
g.k.W=function(){this.o&&(this.A&&(this.A=!1,this.C=!0,this.o.abort(),this.C=!1),R6(this,!0));Q6.sc.W.call(this)};
g.k.mC=function(){this.ga()||(this.Z||this.I||this.C?zGa(this):this.BM())};
g.k.BM=function(){zGa(this)};
g.k.isActive=function(){return!!this.o};
g.k.getStatus=function(){try{return 2<S6(this)?this.o.status:-1}catch(a){return-1}};
g.k.getLastError=function(){return"string"===typeof this.B?this.B:String(this.B)};g.k=V6.prototype;g.k.Yk=null;g.k.Km=null;g.k.je=null;g.k.Dc=null;g.k.gu=null;g.k.Ep=null;g.k.jy=null;g.k.Up=null;g.k.Fn=0;g.k.fK=0;g.k.Dd=null;g.k.ai=null;g.k.Vg=null;g.k.mj=null;g.k.Wh=null;g.k.ks=null;g.k.ql=-1;g.k.oA=-1;g.k.tg=-1;g.k.Rk=0;g.k.Fk=0;g.k.ij=8;var b7=new g.xf;g.Wa(DGa,g.We);g.Wa(EGa,g.We);g.Wa(FGa,g.We);g.k=V6.prototype;g.k.connect=function(a,b,c,d,e){F6(0);this.gu=b;this.Km=c||{};d&&void 0!==e&&(this.Km.OSID=d,this.Km.OAID=e);this.F?(K6((0,g.x)(this.Ay,this,a),100),JGa(this)):this.Ay(a)};
g.k.Ay=function(a){this.Wh=new sGa(this);this.Wh.hu=this.Yk;this.Wh.u=this.C;this.Wh.connect(a)};
g.k.Fz=function(){return 0==this.o};
g.k.yC=function(a){this.ai=null;MGa(this,a)};
g.k.xC=function(){this.Vg=null;this.Dc=new B6(this,this.A,"rpc",this.G);this.Dc.Bj=this.Yk;this.Dc.ju=0;var a=this.jy.clone();$5(a,"RID","rpc");$5(a,"SID",this.A);$5(a,"CI",this.ks?"0":"1");$5(a,"AID",this.ql);W6(this,a);if(!g.ve||g.Xd(10))$5(a,"TYPE","xmlhttp"),C6(this.Dc,a,!0,this.Up,!1);else{$5(a,"TYPE","html");var b=this.Dc,c=!!this.Up;b.Vl=3;b.Uh=a6(a.clone());oGa(b,c)}};
g.k.qC=function(a,b){if(0!=this.o&&(this.Dc==a||this.je==a))if(this.tg=a.Ym,this.je==a&&3==this.o)if(7<this.ij){try{var c=this.C.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Vg){if(this.Dc)if(this.Dc.Pl+3E3<this.je.Pl)Y6(this),this.Dc.cancel(),this.Dc=null;else break a;$6(this);F6(19)}}else this.oA=c[1],0<this.oA-this.ql&&37500>c[2]&&this.ks&&0==this.Fk&&!this.mj&&(this.mj=K6((0,g.x)(this.HK,this),6E3));else a7(this,11)}else b!=lIa.zQ.o&&a7(this,11);else if(this.Dc==
a&&Y6(this),!g.oc(b)){c=this.C.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.ql=e[0];e=e[1];2==this.o?"c"==e[0]?(this.A=e[1],this.Up=e[2],e=e[3],null!=e?this.ij=e:this.ij=6,this.o=3,this.Dd&&this.Dd.vy(),this.jy=N6(this,this.jo()?this.Up:null,this.gu),NGa(this)):"stop"==e[0]&&a7(this,7):3==this.o&&("stop"==e[0]?a7(this,7):"noop"!=e[0]&&this.Dd&&this.Dd.uy(e),this.Fk=0)}}};
g.k.HK=function(){null!=this.mj&&(this.mj=null,this.Dc.cancel(),this.Dc=null,$6(this),F6(20))};
g.k.Vp=function(a){if(this.Dc==a){Y6(this);this.Dc=null;var b=2}else if(this.je==a)this.je=null,b=1;else return;this.tg=a.Ym;if(0!=this.o)if(a.dg)1==b?(b=(0,g.F)()-a.Pl,b7.dispatchEvent(new EGa(b7,a.hk?a.hk.length:0,b,this.Rk)),X6(this),this.B.length=0):NGa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.tg)){if(d=1==b)this.je||this.ai||1==this.o||2<=this.Rk?d=!1:(this.ai=K6((0,g.x)(this.yC,this,a),OGa(this,this.Rk)),this.Rk++,d=!0);d=!(d||2==b&&$6(this))}if(d)switch(c){case 1:a7(this,
5);break;case 4:a7(this,10);break;case 3:a7(this,6);break;case 7:a7(this,12);break;default:a7(this,2)}}};
g.k.aG=function(a){if(!g.jb(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.k.PO=function(a){a?F6(2):(F6(1),PGa(this,8))};
g.k.Bt=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new Q6;a.Y=!1;return a};
g.k.isActive=function(){return!!this.Dd&&this.Dd.isActive(this)};
g.k.Uf=function(a){b7.dispatchEvent(new FGa(b7,a))};
g.k.jo=function(){return!(!g.ve||g.Xd(10))};
g.k=QGa.prototype;g.k.vy=function(){};
g.k.uy=function(){};
g.k.ty=function(){};
g.k.jt=function(){};
g.k.dz=function(){return{}};
g.k.isActive=function(){return!0};g.k=RGa.prototype;g.k.isEmpty=function(){return g.kb(this.o)&&g.kb(this.u)};
g.k.clear=function(){this.o=[];this.u=[]};
g.k.contains=function(a){return g.jb(this.o,a)||g.jb(this.u,a)};
g.k.remove=function(a){var b=this.o;var c=(0,g.cAa)(b,a);0<=c?(g.nb(b,c),b=!0):b=!1;return b||g.ob(this.u,a)};
g.k.Td=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Wa(c7,g.B);g.k=c7.prototype;g.k.oN=function(){this.Gd=Math.min(3E5,2*this.Gd);this.A();this.u&&this.start()};
g.k.start=function(){var a=this.Gd+15E3*Math.random();this.o.gb(a);this.u=(0,g.F)()+a};
g.k.stop=function(){this.o.stop();this.u=0};
g.k.isActive=function(){return this.o.isActive()};
g.k.reset=function(){this.o.stop();this.Gd=5E3};g.Wa(d7,QGa);g.k=d7.prototype;g.k.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.k.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.k.Gi=function(a){return this.A.Cj(a)};
g.k.S=function(a,b){return this.A.S.apply(this.A,arguments)};
g.k.dispose=function(){this.Qc||(this.Qc=!0,g.Ue(this.A),UGa(this),g.Ue(this.u),this.u=null,this.R=function(){return""})};
g.k.ga=function(){return this.Qc};
g.k.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.M="";this.u.stop();this.C=a||null;this.B=b||0;a=this.N+"/test";b=this.N+"/bind";var d=new V6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.U),e=this.o;e&&(e.Dd=null);d.Dd=this;this.o=d;e7(this);e?this.o.connect(a,b,this.F,e.A,e.ql):c?this.o.connect(a,b,this.F,c.sessionId,c.arrayId):this.o.connect(a,b,this.F)}};
g.k.sendMessage=function(a,b){var c={_sc:a};b&&g.Yb(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.G.push(c):f7(this)&&(e7(this),KGa(this.o,c))};
g.k.vy=function(){this.u.reset();this.C=null;this.B=0;if(this.G.length){var a=this.G;this.G=[];for(var b=0,c=a.length;b<c;++b)KGa(this.o,a[b])}this.S("handlerOpened")};
g.k.ty=function(a){var b=2==a&&401==this.o.tg;4==a||b||this.u.start();this.S("handlerError",a)};
g.k.jt=function(a){if(!this.u.isActive())this.S("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.G.push(d)}};
g.k.dz=function(){var a={v:2};this.M&&(a.gsessionid=this.M);0!=this.B&&(a.ui=""+this.B);0!=this.I&&(a.ui=""+this.I);this.C&&g.Yb(a,this.C);return a};
g.k.uy=function(a){"S"==a[0]?this.M=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),IGa(this.o)):this.S("handlerMessage",new SGa(a[0],a[1]))};
g.k.uO=function(){this.u.isActive();var a=this.o,b=0;a.Dc&&b++;a.je&&b++;0==b&&this.connect(this.C,this.B)};g7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
g7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
g7.prototype.C=function(a){a(Error("request timed out"))};var bHa=(0,g.F)(),j7=null,m7=Array(50),l7=-1,n7=!1;g.Wa(o7,g.N);o7.prototype.Ie=function(){return this.screens};
o7.prototype.contains=function(a){return!!l6(this.screens,a)};
o7.prototype.get=function(a){return a?m6(this.screens,a):null};
o7.prototype.info=function(a){k7(this.F,a)};g.t(p7,g.N);g.k=p7.prototype;g.k.start=function(){!this.o&&isNaN(this.La)&&this.sE()};
g.k.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.La)||(g.gp(this.La),this.La=NaN)};
g.k.W=function(){this.stop();g.N.prototype.W.call(this)};
g.k.sE=function(){this.La=NaN;this.o=g.Pq(h7(this.F,"/pairing/get_screen"),{method:"POST",Fb:{pairing_code:this.C},timeout:5E3,onSuccess:(0,g.x)(this.sP,this),onError:(0,g.x)(this.rP,this),Qe:(0,g.x)(this.tP,this)})};
g.k.sP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.A;c.name=this.B;this.S("pairingComplete",new g6(c))};
g.k.rP=function(a){this.o=null;a.status&&404==a.status?this.u>=nIa.length?this.S("pairingFailed",Error("DIAL polling timed out")):(a=nIa[this.u],this.La=g.ep((0,g.x)(this.sE,this),a),this.u++):this.S("pairingFailed",Error("Server error "+a.status))};
g.k.tP=function(){this.o=null;this.S("pairingFailed",Error("Server not responding"))};
var nIa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Wa(r7,o7);g.k=r7.prototype;g.k.start=function(){q7(this)&&this.S("screenChange");!g.Ct("yt-remote-lounge-token-expiration")&&fHa(this);g.gp(this.o);this.o=g.ep((0,g.x)(this.start,this),1E4)};
g.k.add=function(a,b){q7(this);cHa(this,a);s7(this,!1);this.S("screenChange");b(a);a.token||fHa(this)};
g.k.remove=function(a,b){var c=q7(this);eHa(this,a)&&(s7(this,!1),c=!0);b(a);c&&this.S("screenChange")};
g.k.gs=function(a,b,c,d){var e=q7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,s7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.S("screenChange")};
g.k.W=function(){g.gp(this.o);r7.sc.W.call(this)};
g.k.MG=function(a){q7(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}s7(this,!b);b&&k7(this.F,"Missed "+b+" lounge tokens.")};
g.k.LG=function(a){k7(this.F,"Requesting lounge tokens failed: "+a)};g.t(u7,g.N);g.k=u7.prototype;g.k.start=function(){var a=parseInt(g.Ct("yt-remote-fast-check-period")||"0",10);(this.B=(0,g.F)()-144E5<a?0:a)?w7(this):(this.B=(0,g.F)()+3E5,g.Bt("yt-remote-fast-check-period",this.B),this.gw())};
g.k.isEmpty=function(){return g.Qb(this.o)};
g.k.update=function(){t7("Updating availability on schedule.");var a=this.F(),b=g.Eb(this.o,function(c,d){return c&&!!m6(a,d)},this);
v7(this,b)};
g.k.W=function(){g.gp(this.A);this.A=NaN;this.u&&(this.u.abort(),this.u=null);g.N.prototype.W.call(this)};
g.k.gw=function(){g.gp(this.A);this.A=NaN;this.u&&this.u.abort();var a=iHa(this);if(c6(a)){var b=h7(this.C,"/pairing/get_screen_availability");this.u=i7(this.C,b,{lounge_token:g.Kb(a).join(",")},(0,g.x)(this.YM,this,a),(0,g.x)(this.XM,this))}else v7(this,{}),w7(this)};
g.k.YM=function(a,b){this.u=null;var c=g.Kb(iHa(this));if(g.Ab(c,g.Kb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;v7(this,d);w7(this)}else this.oc("Changing Screen set during request."),this.gw()};
g.k.XM=function(a){this.oc("Screen availability failed: "+a);this.u=null;w7(this)};
g.k.oc=function(a){k7("OnlineScreenService",a)};g.Wa(x7,o7);g.k=x7.prototype;g.k.start=function(){this.u.start();this.o.start();this.screens.length&&(this.S("screenChange"),this.o.isEmpty()||this.S("onlineScreenChange"))};
g.k.add=function(a,b,c){this.u.add(a,b,c)};
g.k.remove=function(a,b,c){this.u.remove(a,b,c);this.o.update()};
g.k.gs=function(a,b,c,d){this.u.contains(a)?this.u.gs(a,b,c,d):(a="Updating name of unknown screen: "+a.name,k7(this.F,a),d(Error(a)))};
g.k.Ie=function(a){return a?this.screens:g.qb(this.screens,g.Ie(this.A,function(b){return!this.contains(b)},this))};
g.k.tE=function(){return g.Ie(this.Ie(!0),function(a){return!!this.o.o[a.id]},this)};
g.k.uE=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new p7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(h){g.Ue(f);d(y7(this,h))},this));
f.subscribe("pairingFailed",function(h){g.Ue(f);e(h)});
f.start();return(0,g.x)(f.stop,f)};
g.k.vP=function(a,b,c,d){g.Pq(h7(this.C,"/pairing/get_screen"),{method:"POST",Fb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var h=new g6(f.screen||{});if(!h.name||mHa(this,h.name)){a:{var l=h.name;for(var m=2,n=b(l,m);mHa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}h.name=l}c(y7(this,h))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Qe:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.k.W=function(){g.Ue(this.u);g.Ue(this.o);x7.sc.W.call(this)};
g.k.UG=function(){nHa(this);this.S("screenChange");this.o.update()};
x7.prototype.dispose=x7.prototype.dispose;g.Wa(A7,g.N);g.k=A7.prototype;g.k.getScreen=function(){return this.G};
g.k.kr=function(a){this.G=a;this.S("sessionScreen",this.G)};
g.k.Pe=function(a){this.ga()||(a&&B7(this,""+a),this.G=null,this.S("sessionScreen",null))};
g.k.info=function(a){k7(this.U,a)};
g.k.wE=function(){return null};
g.k.qw=function(a){var b=this.o;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){B7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.k.W=function(){this.qw("");A7.sc.W.call(this)};g.t(C7,A7);g.k=C7.prototype;g.k.pw=function(a){if(this.u){if(this.u==a)return;B7(this,"Overriding cast sesison with new session object");this.u.removeUpdateListener(this.C);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.u=a;this.u.addUpdateListener(this.C);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);pHa(this)};
g.k.rl=function(a){this.info("launchWithParams no-op for Cast: "+g.gl(a))};
g.k.stop=function(){this.u?this.u.stop((0,g.x)(function(){this.Pe()},this),(0,g.x)(function(){this.Pe(Error("Failed to stop receiver app."))},this)):this.Pe(Error("Stopping cast device witout session."))};
g.k.qw=function(){};
g.k.W=function(){this.info("disposeInternal");g.gp(this.A);this.A=0;this.u&&(this.u.removeUpdateListener(this.C),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.u=null;A7.prototype.W.call(this)};
g.k.NN=function(a,b){if(!this.ga())if(b){var c=y6(b);if(g.Ra(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.gl(c));switch(d){case "mdxSessionStatus":oHa(this,c.screenId);break;default:B7(this,"Unknown youtube message: "+d)}}else B7(this,"Unable to parse message.")}else B7(this,"No data in message.")};
g.k.yz=function(a,b,c,d){lHa(this.I,this.o.label,a,this.o.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(B7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.ep((0,g.x)(this.yz,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.k.wE=function(){return this.u};
g.k.wP=function(a){this.ga()||a||(B7(this,"Cast session died."),this.Pe())};g.t(D7,A7);g.k=D7.prototype;g.k.pw=function(a){this.A=a;this.A.addUpdateListener(this.R)};
g.k.rl=function(a){this.N=a;this.C()};
g.k.stop=function(){this.u();this.u=g.La;g.gp(this.B);this.A?this.A.stop((0,g.x)(this.Pe,this,null),(0,g.x)(this.Pe,this,"Failed to stop DIAL device.")):this.Pe()};
g.k.W=function(){this.u();this.u=g.La;g.gp(this.B);this.A&&this.A.removeUpdateListener(this.R);this.A=null;A7.prototype.W.call(this)};
g.k.zP=function(a){this.ga()||a||(B7(this,"DIAL session died."),this.u(),this.u=g.La,this.Pe())};
g.k.uu=function(a){this.M=k6();if(this.N){var b=new chrome.cast.DialLaunchResponse(!0,rHa(this));a(b);qHa(this)}else this.C=(0,g.x)(function(){g.gp(this.B);this.C=g.La;this.B=NaN;var c=new chrome.cast.DialLaunchResponse(!0,rHa(this));a(c);qHa(this)},this),this.B=g.ep((0,g.x)(function(){this.C()},this),100)};
g.k.kH=function(a,b,c){lHa(this.I,this.F.receiver.label,a,this.o.friendlyName,(0,g.x)(function(d){d&&d.token?(this.kr(d),b(new chrome.cast.DialLaunchResponse(!1))):this.uu(b,c)},this),(0,g.x)(function(d){B7(this,"Failed to get DIAL screen: "+d);
this.uu(b,c)},this))};g.t(E7,A7);E7.prototype.stop=function(){this.Pe()};
E7.prototype.pw=function(){};
E7.prototype.rl=function(){g.gp(this.u);this.u=NaN;var a=m6(this.I.Ie(),this.o.label);a?this.kr(a):this.Pe(Error("No such screen"))};
E7.prototype.W=function(){g.gp(this.u);this.u=NaN;A7.prototype.W.call(this)};g.t(F7,g.N);g.k=F7.prototype;
g.k.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.G);this.I||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.GM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.tC,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.aL,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ga()||
(chrome.cast.addReceiverActionListener(this.B),ZGa(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.vE,this)),this.A=tHa(this),chrome.cast.setCustomReceivers(this.A,g.La,(0,g.x)(function(h){this.oc("Failed to set initial custom receivers: "+g.gl(h))},this)),this.S("yt-remote-cast2-availability-change",H7(this)),b(!0))},this),(0,g.x)(function(h){this.oc("Failed to initialize API: "+g.gl(h));
b(!1)},this))};
g.k.AO=function(a,b){G7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.getScreen();if(!a||c&&c.id!=a)G7("Unsetting old screen status: "+this.o.o.friendlyName),I7(this,null)}if(a&&b){if(!this.o){c=m6(this.u.Ie(),a);if(!c){G7("setConnectedScreenStatus: Unknown screen.");return}var d=sHa(this,c);d||(G7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.A.push(d),chrome.cast.setCustomReceivers(this.A,
g.La,(0,g.x)(function(e){this.oc("Failed to set initial custom receivers: "+g.gl(e))},this)));
G7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);I7(this,new E7(this.u,d),!0)}this.o.qw(b)}else G7("setConnectedScreenStatus: no screen.")};
g.k.BO=function(a){this.ga()?this.oc("Setting connection data on disposed cast v2"):this.o?this.o.rl(a):this.oc("Setting connection data without a session")};
g.k.yP=function(){this.ga()?this.oc("Stopping session on disposed cast v2"):this.o?(this.o.stop(),I7(this,null)):G7("Stopping non-existing session")};
g.k.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.tC,this),(0,g.x)(this.bN,this))};
g.k.W=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.vE,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.B);var a=WGa,b=g.Ka("yt.mdx.remote.debug.handlers_");g.ob(b||[],a);g.Ue(this.o);g.N.prototype.W.call(this)};
g.k.oc=function(a){k7("Controller",a)};
g.k.vC=function(a,b){this.o==a&&(b||I7(this,null),this.S("yt-remote-cast2-session-change",b))};
g.k.CM=function(a,b){if(!this.ga())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),G7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.o.label!=a.label)G7("onReceiverAction_: Stopping active receiver: "+this.o.o.friendlyName),this.o.stop();else{G7("onReceiverAction_: Casting to active receiver.");this.o.getScreen()&&this.S("yt-remote-cast2-session-change",this.o.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:I7(this,
new E7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:I7(this,new D7(this.u,a,this.F));break;case chrome.cast.ReceiverType.CAST:I7(this,new C7(this.u,a));break;default:this.oc("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.o.label==a.label?this.o.stop():this.oc("Stopping receiver w/o session: "+a.friendlyName)}else this.oc("onReceiverAction_ called without receiver.")};
g.k.aL=function(a){if(this.ga())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.oc("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.o:null;if(!c||c.label!=b.label)return this.oc("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.getScreen())return G7("Reselecting dial screen."),
this.S("yt-remote-cast2-session-change",this.o.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.oc('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);I7(this,new D7(this.u,b,this.F))}b=this.o;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.kH,b,(b.F.extraData||{}).screenId||null)):new Promise((0,g.x)(b.uu,b))};
g.k.tC=function(a){if(!this.ga()){G7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)G7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),I7(this,new C7(this.u,b),!0);else{this.oc("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.o,d=m6(this.u.Ie(),c.label);d&&h6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(G7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ue(this.o),this.o=new C7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.vC,this,this.o)),this.o.rl(null));this.o.pw(a)}}};
g.k.xP=function(){return this.o?this.o.wE():null};
g.k.bN=function(a){this.ga()||(this.oc("Failed to estabilish a session: "+g.gl(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&I7(this,null))};
g.k.GM=function(a){G7("Receiver availability updated: "+a);if(!this.ga()){var b=H7(this);this.C=a==chrome.cast.ReceiverAvailability.AVAILABLE;H7(this)!=b&&this.S("yt-remote-cast2-availability-change",H7(this))}};
g.k.vE=function(){this.ga()||(this.A=tHa(this),G7("Updating custom receivers: "+g.gl(this.A)),chrome.cast.setCustomReceivers(this.A,g.La,(0,g.x)(function(){this.oc("Failed to set custom receivers.")},this)),this.S("yt-remote-cast2-availability-change",H7(this)))};
F7.prototype.setLaunchParams=F7.prototype.BO;F7.prototype.setConnectedScreenStatus=F7.prototype.AO;F7.prototype.stopSession=F7.prototype.yP;F7.prototype.getCastSession=F7.prototype.xP;F7.prototype.requestSession=F7.prototype.requestSession;F7.prototype.init=F7.prototype.init;F7.prototype.dispose=F7.prototype.dispose;var O7=[];g.k=T7.prototype;
g.k.reset=function(a){this.listId="";this.index=-1;this.videoId="";U7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.ug=a.hasPrevious,this.hasNext=a.hasNext,this.G=a.playerTime,this.F=a.playerTimeAt,this.C=a.seekableStart,this.u=a.seekableEnd,this.I=a.duration,this.M=a.loadedTime,this.B=a.liveIngestionTime,this.A=!isNaN(this.B))};
g.k.sb=function(){return 1==this.playerState};
g.k.isAdPlaying=function(){return 1081==this.playerState};
g.k.getDuration=function(){return this.A?this.I+V7(this):this.I};
g.k.clone=function(){return new T7(Z7(this))};g.t(a8,g.N);g.k=a8.prototype;g.k.play=function(){1==this.o?(this.u?this.u.play(null,g.La,g8(this,"play")):f8(this,"play"),e8(this,1,X7(b8(this))),this.S("remotePlayerChange")):c8(this,this.play)};
g.k.pause=function(){1==this.o?(this.u?this.u.pause(null,g.La,g8(this,"pause")):f8(this,"pause"),e8(this,2,X7(b8(this))),this.S("remotePlayerChange")):c8(this,this.pause)};
g.k.seekTo=function(a){if(1==this.o){if(this.u){var b=b8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.sb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.La,g8(this,"seekTo",{newTime:a}))}else f8(this,"seekTo",{newTime:a});e8(this,3,a);this.S("remotePlayerChange")}else c8(this,g.Ua(this.seekTo,a))};
g.k.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.La,g8(this,"stopVideo")):f8(this,"stopVideo");var a=b8(this);a.index=-1;a.videoId="";U7(a);d8(this,a);this.S("remotePlayerChange")}else c8(this,this.stop)};
g.k.setVolume=function(a,b){if(1==this.o){var c=b8(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.x)(function(){k7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.oc("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.x)(function(){k7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.oc("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f8(this,"setVolume",e)}c.muted=b;c.volume=a;d8(this,c)}else c8(this,g.Ua(this.setVolume,a,b))};
g.k.rE=function(a,b){if(1==this.o){var c=b8(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.gl(b.style),g.Yb(d,c.o));f8(this,"setSubtitlesTrack",d);d8(this,c)}else c8(this,g.Ua(this.rE,a,b))};
g.k.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();f8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=b8(this);d.audioTrackId=c;d8(this,d)}else c8(this,g.Ua(this.setAudioTrack,a,b))};
g.k.playVideo=function(a,b,c,d,e,f,h){var l=b8(this);c=c||0;var m={videoId:a,currentIndex:c};Y7(l,a,c);void 0!==b&&(W7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=h&&(m.locationInfo=g.gl(h));f8(this,"setPlaylist",m);d||d8(this,l)};
g.k.tr=function(a,b){if(1==this.o){if(a&&b){var c=b8(this);Y7(c,a,b);d8(this,c)}f8(this,"previous")}else c8(this,g.Ua(this.tr,a,b))};
g.k.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=b8(this);Y7(c,a,b);d8(this,c)}f8(this,"next")}else c8(this,g.Ua(this.nextVideo,a,b))};
g.k.Ny=function(){1==this.o?f8(this,"dismissAutoplay"):c8(this,this.Ny)};
g.k.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.S("proxyStateChange",a,this.o)}g.N.prototype.dispose.call(this)};
g.k.W=function(){GHa(this);this.B=null;this.C.clear();$7(this,null);g.N.prototype.W.call(this)};
g.k.jx=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.S("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,g.kb(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.k.yM=function(a,b){this.S(a,b)};
g.k.NK=function(a){if(!a)this.Jn(null),$7(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=b8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)k7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d8(this,b)}};
g.k.Jn=function(a){k7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.I);if(this.u=a)this.u.addUpdateListener(this.I),HHa(this),this.S("remotePlayerChange")};
g.k.MK=function(a){a?(HHa(this),this.S("remotePlayerChange")):this.Jn(null)};
g.k.Iw=function(){f8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.k.VK=function(){var a=DHa();a&&$7(this,a)};
g.k.oc=function(a){k7("CP",a)};g.t(h8,g.N);g.k=h8.prototype;
g.k.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,h=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==h&&(l.currentIndex=h);c&&(this.fb.listId=c);this.fb.videoId=d;this.fb.index=h||0;this.fb.state=3;W7(this.fb,m);this.B="UNSUPPORTED";i8("Connecting with setPlaylist and params: "+g.gl(l));this.o.connect({method:"setPlaylist",
params:g.gl(l)},a,TFa())}else i8("Connecting without params"),this.o.connect({},a,TFa());JHa(this)};
g.k.dispose=function(){this.ga()||(this.S("beforeDispose"),j8(this,3));g.N.prototype.dispose.call(this)};
g.k.W=function(){k8(this);m8(this);l8(this);g.gp(this.G);this.G=NaN;g.gp(this.I);this.I=NaN;this.A=null;g.Cp(this.U);this.U.length=0;this.o.dispose();g.N.prototype.W.call(this);this.B=this.F=this.u=this.fb=this.o=null};
g.k.FG=function(){this.Nk(2)};
g.k.RK=function(){i8("Channel opened");this.R&&(this.R=!1,l8(this),this.N=g.ep((0,g.x)(function(){i8("Timing out waiting for a screen.");this.Nk(1)},this),15E3));
XFa(TGa(this.o),this.T)};
g.k.OK=function(){i8("Channel closed");isNaN(this.C)?r6(!0):r6();this.dispose()};
g.k.PK=function(a){r6();isNaN(this.Tm())?(i8("Channel error: "+a+" without reconnection"),this.dispose()):(this.R=!0,i8("Channel error: "+a+" with reconnection in "+this.Tm()+" ms"),j8(this,2))};
g.k.QK=function(a){a.params?i8("Received: action="+a.action+", params="+g.gl(a.params)):i8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=y6(a.params.devices);this.u=g.Mc(a,function(c){return new f6(c)});
a=!!g.eb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
MHa(this,a);break;case "loungeScreenDisconnected":g.pb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
MHa(this,!1);break;case "remoteConnected":var b=new f6(y6(a.params.device));g.eb(this.u,function(c){return b?c.id==b.id:!1})||DFa(this.u,b);
break;case "remoteDisconnected":b=new f6(y6(a.params.device));g.pb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":OHa(this,a);break;case "nowPlaying":QHa(this,a);break;case "onStateChange":PHa(this,a);break;case "onAdStateChange":RHa(this,a);break;case "onVolumeChanged":SHa(this,a);break;case "onSubtitlesTrackChanged":NHa(this,a);break;case "nowAutoplaying":THa(this,a);break;case "autoplayDismissed":this.S("autoplayDismissed");break;case "autoplayUpNext":this.F=a.params.videoId||null;this.S("autoplayUpNext",this.F);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.S("autoplayModeChange",this.B);"DISABLED"==this.B&&this.S("autoplayDismissed");break;case "onHasPreviousNextChanged":UHa(this,a);break;case "requestAssistedSignIn":this.S("assistedSignInRequested",a.params.authCode);break;default:i8("Unrecognized action: "+a.action)}};
g.k.qO=function(){if(this.A){var a=this.A;this.A=null;this.fb.videoId!=a&&n8(this,"getNowPlaying")}};
g.k.vG=function(){var a=3;this.ga()||(a=0,isNaN(this.Tm())?f7(this.o)&&isNaN(this.C)&&(a=1):a=2);return a};
g.k.Nk=function(a){i8("Disconnecting with "+a);k8(this);this.S("beforeDisconnect",a);1==a&&r6();UGa(this.o,a);this.dispose()};
g.k.tG=function(){var a=this.fb;this.A&&(a=this.fb.clone(),Y7(a,this.A,a.index));return Z7(a)};
g.k.CO=function(a){var b=new T7(a);b.videoId&&b.videoId!=this.fb.videoId&&(this.A=b.videoId,g.gp(this.G),this.G=g.ep((0,g.x)(this.qO,this),5E3));var c=[];this.fb.listId==b.listId&&this.fb.videoId==b.videoId&&this.fb.index==b.index||c.push("remoteQueueChange");this.fb.playerState==b.playerState&&this.fb.volume==b.volume&&this.fb.muted==b.muted&&X7(this.fb)==X7(b)&&g.gl(this.fb.o)==g.gl(b.o)||c.push("remotePlayerChange");this.fb.reset(a);g.y(c,function(d){this.S(d)},this)};
g.k.wz=function(){var a=this.o.F.id,b=g.eb(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.k.Tm=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.F)():NaN};
g.k.iG=function(){return this.B||"UNSUPPORTED"};
g.k.jG=function(){return this.F||""};
g.k.qP=function(){if(!isNaN(this.Tm())){var a=this.o.u;g.Xn(a.o);a.start()}};
g.k.yO=function(a,b){n8(this,a,b);LHa(this)};
g.k.qE=function(){var a=g.Yq("SID","")||"",b=g.Yq("SAPISID","")||"";if(!a&&!b)return"";a=g.Jg(g.og(a),2);b=g.Jg(g.og(b),2);return g.Jg(g.og(a+","+b),2)};
h8.prototype.subscribe=h8.prototype.subscribe;h8.prototype.unsubscribeByKey=h8.prototype.Gi;h8.prototype.getProxyState=h8.prototype.vG;h8.prototype.disconnect=h8.prototype.Nk;h8.prototype.getPlayerContextData=h8.prototype.tG;h8.prototype.setPlayerContextData=h8.prototype.CO;h8.prototype.getOtherConnectedRemoteId=h8.prototype.wz;h8.prototype.getReconnectTimeout=h8.prototype.Tm;h8.prototype.getAutoplayMode=h8.prototype.iG;h8.prototype.getAutoplayVideoId=h8.prototype.jG;h8.prototype.reconnect=h8.prototype.qP;
h8.prototype.sendMessage=h8.prototype.yO;h8.prototype.getXsrfToken=h8.prototype.qE;g.t(o8,o7);g.k=o8.prototype;g.k.Ie=function(a){return this.Fd.$_gs(a)};
g.k.contains=function(a){return!!this.Fd.$_c(a)};
g.k.get=function(a){return this.Fd.$_g(a)};
g.k.start=function(){this.Fd.$_st()};
g.k.add=function(a,b,c){this.Fd.$_a(a,b,c)};
g.k.remove=function(a,b,c){this.Fd.$_r(a,b,c)};
g.k.gs=function(a,b,c,d){this.Fd.$_un(a,b,c,d)};
g.k.W=function(){for(var a=0,b=this.o.length;a<b;++a)this.Fd.$_ubk(this.o[a]);this.o.length=0;this.Fd=null;o7.prototype.W.call(this)};
g.k.uP=function(){this.S("screenChange")};
g.k.cM=function(){this.S("onlineScreenChange")};
x7.prototype.$_st=x7.prototype.start;x7.prototype.$_gspc=x7.prototype.vP;x7.prototype.$_gsppc=x7.prototype.uE;x7.prototype.$_c=x7.prototype.contains;x7.prototype.$_g=x7.prototype.get;x7.prototype.$_a=x7.prototype.add;x7.prototype.$_un=x7.prototype.gs;x7.prototype.$_r=x7.prototype.remove;x7.prototype.$_gs=x7.prototype.Ie;x7.prototype.$_gos=x7.prototype.tE;x7.prototype.$_s=x7.prototype.subscribe;x7.prototype.$_ubk=x7.prototype.Gi;var H8=null,G8=!1,p8=null,q8=null,F8=null,u8=[];g.t(I8,g.B);g.k=I8.prototype;g.k.W=function(){g.B.prototype.W.call(this);this.o.stop();this.u.stop();this.G.stop();this.N();var a=this.Ya;a.unsubscribe("proxyStateChange",this.pC,this);a.unsubscribe("remotePlayerChange",this.Pn,this);a.unsubscribe("remoteQueueChange",this.lr,this);a.unsubscribe("previousNextChange",this.lC,this);a.unsubscribe("nowAutoplaying",this.hC,this);a.unsubscribe("autoplayDismissed",this.HB,this);this.Ya=this.module=null};
g.k.TA=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.Ya.o)if(J8(this)){if(!b8(this.Ya).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":b8(this.Ya).sb()?this.Ya.pause():this.Ya.play();break;case "control_play":this.Ya.play();break;case "control_pause":this.Ya.pause();break;case "control_seek":this.F.DA(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=
this.H.getCurrentTime();L8(this,0===c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":this.setAudioTrack(c[0])}};
g.k.LK=function(a){this.G.BG(a)};
g.k.ZO=function(a){this.TA("control_subtitles_set_track",g.Qb(a)?null:a)};
g.k.FD=function(){var a=this.H.getOption("captions","track");g.Qb(a)||K8(this,a)};
g.k.Wb=function(a){this.module.Wb(a,this.H.getVideoData().lengthSeconds)};
g.k.XB=function(a){if(J8(this)){this.Ya.unsubscribe("remotePlayerChange",this.Pn,this);var b=Math.round(a.volume);a=!!a.muted;var c=b8(this.Ya);if(b!==c.volume||a!==c.muted)this.Ya.setVolume(b,a),this.I.start();this.Ya.subscribe("remotePlayerChange",this.Pn,this)}};
g.k.DL=function(){g.Qb(this.A)||fIa(this,this.A);this.B=!1};
g.k.pC=function(a,b){this.u.stop();2===b&&this.CD()};
g.k.Pn=function(){if(J8(this)){this.o.stop();var a=b8(this.Ya);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.module.jd=1;break;case 1082:case 1083:this.module.jd=0;break;default:this.module.jd=-1}switch(a.playerState){case 1081:case 1:this.Oc(new g.HH(8));this.BD();break;case 1085:case 3:this.Oc(new g.HH(9));break;case 1083:case 0:this.Oc(new g.HH(2));this.F.stop();this.Wb(this.H.getVideoData().lengthSeconds);break;case 1084:this.Oc(new g.HH(4));break;case 2:this.Oc(new g.HH(4));
this.Wb(X7(a));break;case -1:this.Oc(new g.HH(64));break;case -1E3:this.Oc(new g.HH(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=b8(this.Ya).o;var b=this.A;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.A=a,fIa(this,a));a=b8(this.Ya);-1===a.volume||Math.round(this.H.getVolume())===a.volume&&this.H.isMuted()===a.muted||this.I.isActive()||this.dE()}else eIa(this)};
g.k.lC=function(){this.H.S("mdxpreviousnextchange")};
g.k.lr=function(){J8(this)||eIa(this)};
g.k.hC=function(a){isNaN(a)||this.H.S("mdxnowautoplaying",a)};
g.k.HB=function(){this.H.S("mdxautoplaycanceled")};
g.k.setAudioTrack=function(a){J8(this)&&this.Ya.setAudioTrack(this.H.getVideoData(1).videoId,a)};
g.k.seekTo=function(a,b){-1===b8(this.Ya).playerState?L8(this,a):b&&this.Ya.seekTo(a)};
g.k.dE=function(){if(J8(this)){var a=b8(this.Ya);this.events.qb(this.M);a.muted?this.H.mute():this.H.unMute();this.H.setVolume(a.volume);this.M=this.events.L(this.H,"onVolumeChange",this.XB)}};
g.k.BD=function(){this.o.stop();if(!this.Ya.ga()){var a=b8(this.Ya);a.sb()&&this.Oc(new g.HH(8));this.Wb(X7(a));this.o.start()}};
g.k.CD=function(){this.u.stop();this.o.stop();var a=this.Ya.B.getReconnectTimeout();2==this.Ya.o&&!isNaN(a)&&this.u.start()};
g.k.Oc=function(a){this.u.stop();var b=this.C;if(!g.MH(b,a)){var c=g.W(a,2);c!==g.W(this.C,2)&&g.vT(this.H.app,c);this.C=a;hIa(this.module,b,a)}};g.t(M8,g.U);M8.prototype.Lb=function(){this.o.show()};
M8.prototype.Ra=function(){this.o.hide()};
M8.prototype.u=function(){g.iP("https://web.archive.org/web/20200901000012/https://support.google.com/youtube/answer/7640706")};
M8.prototype.A=function(){e6("mdx-manual-pairing-popup-ok");this.Ra()};g.t(N8,g.U);N8.prototype.Lb=function(){this.o.show()};
N8.prototype.Ra=function(){this.o.hide()};
N8.prototype.u=function(){e6("mdx-privacy-popup-cancel");this.Ra()};
N8.prototype.A=function(){e6("mdx-privacy-popup-confirm");this.Ra()};g.t(O8,g.U);O8.prototype.u=function(a){gIa(this,a.state)};g.t(P8,g.QR);P8.prototype.B=function(){var a=this.H.getOption("remote","receivers");a&&1<a.length&&!this.H.getOption("remote","quickCast")?(this.Pi=g.Cb(a,this.o,this),g.RR(this,g.Mc(a,this.o)),a=this.H.getOption("remote","currentReceiver"),this.Nb(this.o(a)),this.enable(!0)):this.enable(!1)};
P8.prototype.o=function(a){return a.key};
P8.prototype.Sf=function(a){return"cast-selector-receiver"===a?"Cast...":this.Pi[a].name};
P8.prototype.rd=function(a){g.QR.prototype.rd.call(this,a);this.H.setOption("remote","currentReceiver",this.Pi[a]);this.Ia.Ra()};g.t(Q8,g.iO);g.k=Q8.prototype;
g.k.create=function(){var a=this.player.O(),b=g.dz(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:g.R(a.experiments,"mdx_load_cast_api_bootstrap_script")};ZHa(b,a);this.subscriptions.push(g.lp("yt-remote-before-disconnect",this.JK,this));this.subscriptions.push(g.lp("yt-remote-connection-change",this.HM,this));this.subscriptions.push(g.lp("yt-remote-receiver-availability-change",this.nC,this));this.subscriptions.push(g.lp("yt-remote-auto-connect",this.FM,this));this.subscriptions.push(g.lp("yt-remote-receiver-resumed",
this.EM,this));this.subscriptions.push(g.lp("mdx-privacy-popup-confirm",this.eO,this));this.subscriptions.push(g.lp("mdx-privacy-popup-cancel",this.dO,this));this.subscriptions.push(g.lp("mdx-manual-pairing-popup-ok",this.BH,this));this.nC()};
g.k.load=function(){this.player.cancelPlayback();g.iO.prototype.load.call(this);this.mg=new I8(this,this.player,this.Ya);var a=(a=dIa())?a.currentTime:0;var b=E8()?new a8(z8(),void 0):null;0==a&&b&&(a=X7(b8(b)));0!==a&&this.Wb(a);hIa(this,this.Sb,this.Sb);g.BT(this.player.app,6)};
g.k.unload=function(){this.player.S("mdxautoplaycanceled");this.Yh=this.Pf;g.Ve(this.mg,this.Ya);this.Ya=this.mg=null;g.iO.prototype.unload.call(this);g.BT(this.player.app,5);R8(this)};
g.k.W=function(){g.mp(this.subscriptions);g.iO.prototype.W.call(this)};
g.k.Hg=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.mg.TA.apply(this.mg,[a].concat(g.la(c)))};
g.k.getAdState=function(){return this.jd};
g.k.xG=function(){return this.loaded?this.mg.suggestion:null};
g.k.ug=function(){return this.Ya?b8(this.Ya).ug:!1};
g.k.hasNext=function(){return this.Ya?b8(this.Ya).hasNext:!1};
g.k.Wb=function(a,b){this.pA=a||0;this.player.S("progresssync",a,b)};
g.k.getCurrentTime=function(){return this.pA};
g.k.getProgressState=function(){var a=b8(this.Ya),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.O().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.hd():!a.isAdPlaying()&&this.player.hd(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.A?a.B+V7(a):a.B,isAtLiveHead:1>=(a.A?a.u+V7(a):a.u)-this.getCurrentTime(),loaded:a.M,seekableEnd:a.A?a.u+V7(a):a.u,seekableStart:0<a.C?a.C+
V7(a):a.C}};
g.k.nextVideo=function(){this.Ya&&this.Ya.nextVideo()};
g.k.tr=function(){this.Ya&&this.Ya.tr()};
g.k.JK=function(a){1===a&&(this.Pv=this.Ya?b8(this.Ya):null)};
g.k.HM=function(){var a=E8()?new a8(z8(),void 0):null;if(a){var b=this.Yh;this.loaded&&this.unload();this.Ya=a;this.Pv=null;b.key!==this.Pf.key&&(this.Yh=b,this.load())}else g.Ue(this.Ya),this.Ya=null,this.loaded&&(this.unload(),(a=this.Pv)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,X7(a)));this.player.S("videodatachange","newdata",this.player.getVideoData(),3)};
g.k.nC=function(){this.Pi=[this.Pf].concat(aIa());var a=A8()||this.Pf;S8(this,a);this.player.oa("onMdxReceiversChange")};
g.k.FM=function(){var a=A8();S8(this,a)};
g.k.EM=function(){this.Yh=A8()};
g.k.eO=function(){this.Qn=!0;R8(this);G8=!1;H8&&C8(H8,1);H8=null};
g.k.dO=function(){this.Qn=!1;R8(this);S8(this,this.Pf);this.Yh=this.Pf;G8=!1;H8=null;this.player.playVideo()};
g.k.BH=function(){this.xq=!0;R8(this);g.Bt("yt-remote-manual-pairing-warning-shown",!0,2592E3);G8=!1;H8&&C8(H8,1);H8=null};
g.k.dd=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Pi;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?R7():S8(this,b)),this.loaded?this.Yh:this.Pf;case "quickCast":return 2===this.Pi.length&&"cast-selector-receiver"===this.Pi[1].key?(b&&R7(),!0):!1}};
g.k.Iw=function(){this.Ya.Iw()};
g.k.cg=function(){return!1};
g.k.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.tO.remote=Q8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:00:12 Sep 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:29 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 247.268
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.054
  esindex: 0.007
  LoadShardBlock: 216.297 (3)
  PetaboxLoader3.datanode: 248.374 (5)
  load_resource: 338.639 (2)
  PetaboxLoader3.resolve: 247.569 (2)
*/