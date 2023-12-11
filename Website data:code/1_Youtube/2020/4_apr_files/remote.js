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

(function(g){var window=this;var cva=function(a,b){return g.Lb(a,b)},Y5=function(a,b,c){a.w.set(b,c)},Z5=function(a){Y5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.H)()).toString(36));
return a},$5=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.bn(a.w,b,c)},dva=function(a,b){var c=[];
g.kk(b,function(d){try{var e=g.fo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.eo(e)&&c.push(d)},a);
return c},eva=function(a,b){var c=dva(a,b);
(0,g.y)(c,function(d){g.fo.prototype.remove.call(this,d)},a)},fva=function(a){if(a.Pc){if(a.Pc.locationOverrideToken)return{locationOverrideToken:a.Pc.locationOverrideToken};
if(null!=a.Pc.latitudeE7&&null!=a.Pc.longitudeE7)return{latitudeE7:a.Pc.latitudeE7,longitudeE7:a.Pc.longitudeE7}}return null},gva=function(a,b){g.cb(a,b)||a.push(b)},a6=function(a){var b=0,c;
for(c in a)b++;return b},hva=function(a,b){var c=b instanceof g.vc?b:g.Ac(b,/^data:image\//i.test(b));
a.src=g.xc(c)},b6=function(){},iva=function(a){try{return g.u.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},jva=function(a){if(a.Bd&&"function"==typeof a.Bd)return a.Bd();
if("string"===typeof a)return a.split("");if(g.Na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Hb(a)},kva=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Na(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.pe&&"function"==typeof a.pe)var c=a.pe();else if(a.Bd&&"function"==typeof a.Bd)c=void 0;else if(g.Na(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Ib(a);d=jva(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},lva=function(a,b,c,d){var e=new g.Qm(null,void 0);
a&&g.Rm(e,a);b&&g.Sm(e,b);c&&g.Tm(e,c);d&&(e.u=d);return e},c6=function(a,b){g.Ro[a]=!0;
var c=g.Po();c&&c.publish.apply(c,arguments);g.Ro[a]=!1},d6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Nm;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",mva(this,a.capabilities||""),nva(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},mva=function(a,b){a.capabilities.clear();
(0,g.we)(b.split(","),g.Sa(cva,ova)).forEach(function(c){a.capabilities.add(c)})},nva=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},e6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},f6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},pva=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},qva=function(a){return new e6(a)},rva=function(a){return g.Ma(a)?(0,g.Fc)(a,qva):[]},g6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},h6=function(a){return g.Ma(a)?"["+(0,g.Fc)(a,g6).join(",")+"]":"null"},i6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},sva=function(a){return(0,g.Fc)(a,function(b){return{key:b.id,
name:b.name}})},j6=function(a,b){return g.$a(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},k6=function(a,b){return g.$a(a,function(c){return f6(c,b)})},l6=function(a){try{var b=(0,g.rs)(),c=(0,g.qs)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},tva=function(){var a=(0,g.qs)();
a&&eva(a,a.o.Hf(!0))},m6=function(){var a=g.us("yt-remote-connected-devices")||[];
g.tb(a);return a},uva=function(a){if(g.db(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Fc)(a,function(d,e){return 0==e?d:d.substring(c.length)})},vva=function(a){g.ts("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.us("yt-remote-device-id");a||(a=i6(),g.ts("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.cb(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.cb(a,b);g.vs()&&g.vb(a,b);a=uva(a);if(g.db(a))try{g.Iq("remote_sid")}catch(c){}else try{g.Gq("remote_sid",a.join(","),-1)}catch(c){}},wva=function(){return g.us("yt-remote-session-browser-channel")},xva=function(){return g.us("yt-remote-local-screens")||[]},yva=function(){g.ts("yt-remote-lounge-token-expiration",!0,86400)},zva=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Fc)(xva(),function(d){return d.loungeToken}),c=(0,g.Fc)(a,function(d){return d.loungeToken});
(0,g.ui)(c,function(d){return!g.cb(b,d)})&&yva();
g.ts("yt-remote-local-screens",a,31536E3)},Ava=function(a,b){g.ts("yt-remote-session-browser-channel",a);
g.ts("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.cb(c,d)||c.push(d);vva(c);p6()},q6=function(a){a||(l6("yt-remote-session-screen-id"),l6("yt-remote-session-video-id"));
p6();a=m6();g.gb(a,o6());vva(a)},Bva=function(){if(!r6){var a=g.po();
a&&(r6=new g.Zn(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},Cva=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Dva=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?Eva(a.shift(),function(){s6(a)}):t6()},Fva=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Eva=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=Dva();
a&&a(!1,"No cast extension found")},Hva=function(){if(Gva){var a=2,b=Dva(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Eva("//web.archive.org/web/20200401000125/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},Iva=function(){Hva();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200401000125/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200401000125/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(a,b,c){g.A.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.ud=b;this.B=(0,g.x)(this.pF,this);this.o=!1;this.u=0;this.w=this.Da=null;this.A=[]},v6=function(a,b,c){g.A.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.ud=b;this.u=(0,g.x)(this.qF,this);this.o=[]},w6=function(a){a.Da=g.Xf(a.u,a.ud);
a.w.apply(null,a.o)},x6=function(a){if(g.u.JSON)try{return g.u.JSON.parse(a)}catch(b){}return iva(a)},y6=function(){},z6=function(){},Jva=function(){},Lva=function(a){return(a=Kva(a))?new ActiveXObject(a):new XMLHttpRequest},Kva=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},A6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.F=d||1;this.B=45E3;this.A=new g.P1(this);this.u=new g.Wf;this.u.setInterval(250)},Nva=function(a,b,c){a.Zi=1;
a.Eg=Z5(b.clone());a.vi=c;a.C=!0;Mva(a,null)},B6=function(a,b,c,d,e){a.Zi=1;
a.Eg=Z5(b.clone());a.vi=null;a.C=c;e&&(a.OB=!1);Mva(a,d)},Mva=function(a,b){a.Jj=(0,g.H)();
C6(a);a.qh=a.Eg.clone();$5(a.qh,"t",a.F);a.om=0;a.Ic=a.o.Iq(a.o.cm()?b:null);0<a.wr&&(a.fp=new v6((0,g.x)(a.QC,a,a.Ic),a.wr));a.A.ha(a.Ic,"readystatechange",a.oO);var c=a.Xh?g.Rb(a.Xh):{};a.vi?(a.Np="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Ic.send(a.qh,a.Np,a.vi,c)):(a.Np="GET",a.OB&&!g.le&&(c.Connection="close"),a.Ic.send(a.qh,a.Np,null,c));a.o.Ve(1)},Qva=function(a,b,c){for(var d=!0;!a.Jh&&a.om<c.length;){var e=Ova(a,c);
if(e==D6){4==b&&(a.Sg=4,E6(15),d=!1);break}else if(e==Pva){a.Sg=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.Sg=1,E6(17),d=!1);a.We=a.We&&d;d||(G6(a),H6(a))},Ova=function(a,b){var c=a.om,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if(isNaN(c))return Pva;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.om=d+c;return e},Sva=function(a,b){a.Jj=(0,g.H)();
C6(a);var c=b?window.location.hostname:"";a.qh=a.Eg.clone();Y5(a.qh,"DOMAIN",c);Y5(a.qh,"t",a.F);try{a.af=new ActiveXObject("htmlfile")}catch(n){G6(a);a.Sg=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in Rva)k=I6[l]=Rva[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Zc(g.ac("b/12014412"),d+"</body></html>");a.af.open();a.af.write(g.Uc(c));a.af.close();a.af.parentWindow.m=(0,g.x)(a.JN,a);a.af.parentWindow.d=(0,g.x)(a.WA,a,!0);a.af.parentWindow.rpcClose=(0,g.x)(a.WA,a,!1);c=a.af.createElement("DIV");a.af.parentWindow.document.body.appendChild(c);d=g.zc(a.qh.toString());d=g.fd(g.xc(d));d=g.Zc(g.ac("b/12014412"),'<iframe src="'+d+'"></iframe>');g.$c(c,d);a.o.Ve(1)},C6=function(a){a.Hu=(0,g.H)()+a.B;
Tva(a,a.B)},Tva=function(a,b){if(null!=a.Wj)throw Error("WatchDog timer not null");
a.Wj=J6((0,g.x)(a.RN,a),b)},K6=function(a){a.Wj&&(g.u.clearTimeout(a.Wj),a.Wj=null)},H6=function(a){a.o.yx()||a.Jh||a.o.So(a)},G6=function(a){K6(a);
g.Ie(a.fp);a.fp=null;a.u.stop();g.bqa(a.A);if(a.Ic){var b=a.Ic;a.Ic=null;b.abort();b.dispose()}a.af&&(a.af=null)},F6=function(a,b){try{a.o.QA(a,b),a.o.Ve(4)}catch(c){}},Vva=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Uva(a,b,function(k){k?c(!0):g.u.setTimeout(function(){Vva(a,b,c,d,f)},f)})}},Uva=function(a,b,c){var d=new Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.u.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
hva(d,a)},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Wva=function(a){this.o=a;
this.u=new y6},Xva=function(a){var b=M6(a.o,a.gk,"/mail/images/cleardot.gif");
Z5(b);Vva(b.toString(),5E3,(0,g.x)(a.kE,a),3,2E3);a.Ve(1)},O6=function(a){var b=a.o.H;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.Od=new A6(a,void 0,void 0,void 0),a.Od.Xh=a.ur,b=a.o,b=M6(b,b.cm()?a.Gk:null,a.vr),E6(5),!g.je||g.Od(10))$5(b,"TYPE","xmlhttp"),B6(a.Od,b,!1,a.Gk,!1);else{$5(b,"TYPE","html");var c=a.Od;a=!!a.Gk;c.Zi=3;c.Eg=Z5(b.clone());Sva(c,a)}},P6=function(a){g.hf.call(this);
this.headers=new g.Nm;this.R=a||null;this.w=!1;this.O=this.o=null;this.da=this.H="";this.C=0;this.A="";this.B=this.Z=this.G=this.T=!1;this.F=0;this.J=null;this.ea="";this.P=this.V=!1},Yva=function(a){return g.je&&g.Nd(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Zva=function(a){return"content-type"==a.toLowerCase()},awa=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;$va(a);Q6(a)},$va=function(a){a.T||(a.T=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},cwa=function(a){if(a.w&&"undefined"!=typeof g.U1)if(a.O[1]&&4==R6(a)&&2==a.getStatus())S6(a,"Local request error detected and ignored");
else if(a.G&&4==R6(a))g.Xf(a.Ax,0,a);else if(a.dispatchEvent("readystatechange"),4==R6(a)){S6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.pd(1,String(a.H));if(!f&&g.u.self&&g.u.self.location){var k=g.u.self.location.protocol;f=k.substr(0,k.length-1)}e=!bwa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<R6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";$va(a)}}finally{Q6(a)}}},Q6=function(a,b){if(a.o){dwa(a);
var c=a.o,d=a.O[0]?g.Ja:null;a.o=null;a.O=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},dwa=function(a){a.o&&a.P&&(a.o.ontimeout=null);
a.J&&(g.u.clearTimeout(a.J),a.J=null)},R6=function(a){return a.o?a.o.readyState:0},T6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},S6=function(a,b){return b+" ["+a.da+" "+a.H+" "+a.getStatus()+"]"},U6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new y6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},ewa=function(a,b){this.o=a;
this.map=b;this.context=null},fwa=function(a){g.Ke.call(this,"statevent",a)},gwa=function(a,b){g.Ke.call(this,"timingevent",a);
this.size=b},hwa=function(a){g.Ke.call(this,"serverreachability",a)},kwa=function(a){iwa(a);
if(3==a.o){var b=a.Bl++,c=a.yn.clone();Y5(c,"SID",a.w);Y5(c,"RID",b);Y5(c,"TYPE","terminate");V6(a,c);b=new A6(a,a.w,b,void 0);b.Zi=2;b.Eg=Z5(c.clone());hva(new Image,b.Eg.toString());b.Jj=(0,g.H)();C6(b)}jwa(a)},lwa=function(a){a.IE(1,0);
a.yn=M6(a,null,a.tr);W6(a)},iwa=function(a){a.Ig&&(a.Ig.abort(),a.Ig=null);
a.ac&&(a.ac.cancel(),a.ac=null);a.Jf&&(g.u.clearTimeout(a.Jf),a.Jf=null);X6(a);a.Id&&(a.Id.cancel(),a.Id=null);a.Ng&&(g.u.clearTimeout(a.Ng),a.Ng=null)},mwa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new ewa(a.aK++,b));2!=a.o&&3!=a.o||W6(a)},W6=function(a){a.Id||a.Ng||(a.Ng=J6((0,g.x)(a.VA,a),0),a.Ti=0)},owa=function(a,b){if(1==a.o){if(!b){a.Bl=Math.floor(1E5*Math.random());
var c=a.Bl++,d=new A6(a,"",c,void 0);d.Xh=null;var e=Y6(a),f=a.yn.clone();Y5(f,"RID",c);Y5(f,"CVER","1");V6(a,f);Nva(d,f,e);a.Id=d;a.o=2}}else 3==a.o&&(b?nwa(a,b):0==a.u.length||a.Id||nwa(a))},nwa=function(a,b){if(b)if(6<a.Kh){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.Bl-1;var d=Y6(a)}else c=b.G,d=b.vi;else c=a.Bl++,d=Y6(a);var e=a.yn.clone();Y5(e,"SID",a.w);Y5(e,"RID",c);Y5(e,"AID",a.lj);V6(a,e);c=new A6(a,a.w,c,a.Ti+1);c.Xh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Id=c;Nva(c,e,d)},V6=function(a,b){if(a.rd){var c=a.rd.Tw();
c&&g.Bb(c,function(d,e){Y5(b,e,d)})}},Y6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Kh&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.Kh?e:f-d;try{g.Bb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},pwa=function(a){a.ac||a.Jf||(a.F=1,a.Jf=J6((0,g.x)(a.UA,a),0),a.Mi=0)},Z6=function(a){if(a.ac||a.Jf||3<=a.Mi)return!1;
a.F++;a.Jf=J6((0,g.x)(a.UA,a),qwa(a,a.Mi));a.Mi++;return!0},N6=function(a,b,c){a.Lp=c;
a.jf=b.Xf;a.C||lwa(a)},X6=function(a){null!=a.Oh&&(g.u.clearTimeout(a.Oh),a.Oh=null)},qwa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},$6=function(a,b){if(2==b||9==b){var c=null;
a.rd&&(c=null);var d=(0,g.x)(a.bP,a);c||(c=new g.Qm("//web.archive.org/web/20200401000125/https://www.google.com/images/cleardot.gif"),Z5(c));Uva(c.toString(),1E4,d)}else E6(2);rwa(a,b)},rwa=function(a,b){a.o=0;
a.rd&&a.rd.jw(b);jwa(a);iwa(a)},jwa=function(a){a.o=0;
a.jf=-1;if(a.rd)if(0==a.A.length&&0==a.u.length)a.rd.Aq();else{g.kb(a.A);var b=g.kb(a.u);a.A.length=0;a.u.length=0;a.rd.Aq(b)}},M6=function(a,b,c){var d=g.Ym(c);
if(""!=d.o)b&&g.Sm(d,b+"."+d.o),g.Tm(d,d.B);else{var e=window.location;d=lva(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.uk&&g.Bb(a.uk,function(f,k){Y5(d,k,f)});
Y5(d,"VER",a.Kh);V6(a,d);return d},J6=function(a,b){if(!g.Oa(a))throw Error("Fn must not be null and must be a function");
return g.u.setTimeout(function(){a()},b)},E6=function(a){a7.dispatchEvent(new fwa(a7,a))},swa=function(){},twa=function(){this.o=[];
this.u=[]},uwa=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.A.call(this);
this.o=new g.I(this.AN,0,this);g.C(this,this.o);this.ud=5E3;this.u=0;if(g.Oa(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Oa(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.J=a;
this.C=b;this.w=new g.Yn;this.u=new b7(this.DO,this);this.o=null;this.sb=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.P=c||!1},vwa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.Lp,sessionId:a.o.w,arrayId:a.o.lj}},wwa=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&owa(a.o),kwa(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},xwa=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.pd(4,a))||"";b&&(this.port=":"+b);this.domain=g.qd(a)||"";a=g.Mc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.sc(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Bd(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Sa(a.A,d,!0),onError:g.Sa(a.w,e),Ld:g.Sa(a.B,e)};c&&(a.ub=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.yq(b,a)},Bwa=function(){var a=ywa;
zwa();h7.push(a);Awa(h7)},i7=function(a,b){zwa();
var c=h7,d=Cwa(a,String(b));g.db(c)?Dwa(d):(Awa(c),(0,g.y)(c,function(e){e(d)}))},zwa=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",h7,void 0))},Dwa=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},Awa=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},Cwa=function(a,b){var c=((0,g.H)()-Ewa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.P.call(this);
this.F=a;this.o=[]},Fwa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},Gwa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.we)(a.o,function(f){return!!j6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Fwa(a,b[d])||c;return c},Hwa=function(a,b){var c=a.o.length;
a.o=(0,g.we)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.P.call(this);
this.C=a;this.A=b;this.B=c;this.w=d;this.u=0;this.o=null;this.Da=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+h6(this.o))},Iwa=function(a){if(a.o.length){var b=(0,g.Fc)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.AF,a),(0,g.x)(a.zF,a))}},o7=function(a){var b=rva(xva());
b=(0,g.we)(b,function(c){return!c.uuid});
return Gwa(a,b)},q7=function(a,b){zva((0,g.Fc)(a.o,pva));
b&&yva()},s7=function(a,b){g.P.call(this);
this.C=b;var c=g.us("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.cb(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.Mk(this.o))},Jwa=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(a6(b)!=a6(a.o))var c=!1;
else{c=g.Ib(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Mk(a.o)),a.o=b,a.S("screenChange"));Kwa(a)},u7=function(a){isNaN(a.w)||g.Oo(a.w);
a.w=g.Mo((0,g.x)(a.Ut,a),0<a.A&&a.A<(0,g.H)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},Lwa=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Qb("Requesting availability of screen w/o lounge token.")});
return b},Kwa=function(a){a=g.Ib(g.Cb(a.o,function(b){return b}));
g.tb(a);a.length?g.ts("yt-remote-online-screen-ids",a.join(","),60):l6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};Mwa(this)},Owa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ae();if(k=(c?k6(k,c):null)||k6(k,b)){k.uuid=b;var l=w7(a,k);Jwa(a.u,l,function(m){e(m?l:null)})}else c?Nwa(a,c,(0,g.x)(function(m){var n=w7(this,new e6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));Jwa(this.u,n,function(p){e(p?n:null)})},a),f):e(null)},Pwa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},Nwa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={ub:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.yq(f7(a.C,"/pairing/get_lounge_token_batch"),e)},Qwa=function(a){a.o=a.w.ae();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+h6(a.o))},Mwa=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.IF,a));Qwa(a);a.A=rva(g.us("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+h6(a.A));a.u=new s7(a.C,(0,g.x)(a.ae,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.S("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=k6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.ts("yt-remote-automatic-screen-cache",(0,g.Fc)(a.A,pva)));x7(a);a.B[b.uuid]=b.id;g.ts("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.us("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.P.call(this);
this.O=c;this.H=a;this.u=b;this.w=null},z7=function(a,b){i7(a.O,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.MP,this);this.B=(0,g.x)(this.ZN,this);this.A=g.Mo((0,g.x)(function(){Rwa(this,null)},this),12E4)},Swa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Mk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ja,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Mk(b))},Rwa=function(a,b){g.Oo(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.Uo,a),d=(0,g.x)(a.fe,a);a.nx(b,c,d,5)}}else a.fe(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.J="";this.R=c;this.B=null;this.F=g.Ja;this.C=NaN;this.P=(0,g.x)(this.PP,this);this.o=g.Ja},Twa=function(a){a.o=a.H.WC(a.J,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ja;
this.Uo(b)},a),(0,g.x)(function(b){this.o=g.Ja;
this.fe(b)},a))},Uwa=function(a){var b={};
b.pairingCode=a.J;b.theme=a.R;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}Bva()&&(b.env_useStageMdx=1);return g.yd(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Mo((0,g.x)(this.mj,this,null),150)},D7=function(a,b,c,d){g.P.call(this);
this.u=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.HM,this)},Vwa=function(a,b){return b?g.$a(a.w,function(c){return f6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},ywa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.Ie(a.o),(a.o=b)?(c?a.S("yt-remote-cast2-receiver-resumed",b.u):a.S("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.TA,a,b)),b.w?a.S("yt-remote-cast2-session-change",b.w):c&&a.o.mj(null)):a.S("yt-remote-cast2-session-change",null))},Wwa=function(a){var b=a.u.VC(),c=a.o&&a.o.u;
a=(0,g.Fc)(b,function(d){c&&f6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Vwa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},bxa=function(a,b,c,d,e,f,k){Xwa()?Ywa(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Zwa(a,c):(window.__onGCastApiAvailable=function(l,m){l?Zwa(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),$wa(),c(!1))},d?g.Yo("https://web.archive.org/web/20200401000125/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Iva():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(Hva(),s6(axa.map(Fva))))):H7("Cannot initialize because not running Chrome")},$wa=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);cxa(!1);g.Uo(M7);M7.length=0},N7=function(){return!!g.us("yt-remote-cast-installed")},dxa=function(){var a=g.us("yt-remote-cast-receiver");
return a?a.friendlyName:null},exa=function(){H7("clearCurrentReceiver");
l6("yt-remote-cast-receiver")},fxa=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.To("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Xwa=function(){var a=0<=g.Mc.search(/ (CrMo|Chrome|CriOS)\//);
return g.ot||a},gxa=function(a,b){L7().init(a,b)},Ywa=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.ts("yt-remote-cast-available",f);c6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.ts("yt-remote-cast-receiver",f);c6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.ts("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+g6(f));
f||l6("yt-remote-cast-receiver");c6("yt-remote-cast2-session-change",f)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Zwa=function(a,b){K7(!0);
I7(!1);gxa(a,function(c){c?(cxa(!0),g.Vo("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),$wa());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.ts("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},cxa=function(a){H7("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.o=null;this.hasNext=this.J=!1;this.H=this.G=this.u=this.A=0;this.w=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.J=!1;a.hasNext=!1;a.F=0;a.C=(0,g.H)();a.A=0;a.u=0;a.G=0;a.H=0;a.w=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.H)()-a.C)/1E3:0},U7=function(a,b){a.F=b;
a.C=(0,g.H)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.H)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Sb(a.o);b.hasPrevious=a.J;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.w;return b},Z7=function(a,b){g.P.call(this);
this.o=0;this.A=a;this.C=[];this.B=new twa;this.w=this.u=null;this.H=(0,g.x)(this.HK,this);this.F=(0,g.x)(this.Dl,this);this.G=(0,g.x)(this.GK,this);this.J=(0,g.x)(this.SK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ku,this),hxa(this))):c=3;0!=c&&(b?this.Ku(c):g.Mo((0,g.x)(function(){this.Ku(c)},this),0));
var d=fxa();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},$7=function(a){return new R7(a.A.getPlayerContextData())},hxa=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.Sa(this.EM,b),this))},a)},ixa=function(a){(0,g.y)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){ixa(a);
a.A.setPlayerContextData(X7(b));hxa(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.H),a.w.removeMediaListener(a.F),a.Dl(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.H),a.w.addMediaListener(a.F),a.w.media.length&&a.Dl(a.w.media[0]))},jxa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Qb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Qb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.P.call(this);
this.B=NaN;this.P=!1;this.G=this.F=this.H=this.J=NaN;this.O=[];this.A=this.C=this.w=this.Ra=this.o=null;this.T=a;this.O.push(g.zp(window,"beforeunload",(0,g.x)(this.sF,this)));this.u=[];this.Ra=new R7;this.R=b.id;this.o=kxa(this,c);this.o.subscribe("handlerOpened",this.LK,this);this.o.subscribe("handlerClosed",this.IK,this);this.o.subscribe("handlerError",this.JK,this);this.o.subscribe("handlerMessage",this.KK,this);xwa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Ra.videoId;
g.vs()&&g.ts("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},kxa=function(a,b){return new c7(f7(a.T,"/bc"),b)},h8=function(a,b){a.S("proxyStateChange",b)},lxa=function(a){a.B=g.Mo((0,g.x)(function(){g8("Connecting timeout");
this.Ri(1)},a),2E4)},i8=function(a){g.Oo(a.B);
a.B=NaN},j8=function(a){g.Oo(a.J);
a.J=NaN},mxa=function(a){k8(a);
a.H=g.Mo((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.Oo(a.H);
a.H=NaN},oxa=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.lx()&&a.Ra.reset(),h8(a,1),l8(a,"getNowPlaying"),nxa(a)):a.Ri(1)},pxa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Ra.videoId&&(g.Ob(b.params)?a.Ra.o=null:a.Ra.o=b.params,a.S("remotePlayerChange"))},qxa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Ra.listId=b.params.listId||a.Ra.listId;W7(a.Ra,c,d);a.S("remoteQueueChange")},sxa=function(a,b){b.params=b.params||{};
qxa(a,b);rxa(a,b);a.S("autoplayDismissed")},rxa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Ra,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Ra.playerState&&(c=-1E3);a.Ra.playerState=c;c=Number(b.params.loadedTime);a.Ra.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Ra.G=isNaN(c)?0:c;c=a.Ra;var d=Number(b.params.liveIngestionTime);c.w=d;c.B=isNaN(d)?!1:!0;c=a.Ra;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Ra.playerState?mxa(a):k8(a);a.S("remotePlayerChange")},txa=function(a,b){if(-1E3!=
a.Ra.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Ra.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Ra,isNaN(c)?0:c);a.S("remotePlayerChange")}},uxa=function(a,b){var c="true"==b.params.muted;
a.Ra.volume=parseInt(b.params.volume,10);a.Ra.muted=c;a.S("remotePlayerChange")},vxa=function(a,b){a.C=b.params.videoId;
a.S("nowAutoplaying",parseInt(b.params.timeout,10))},wxa=function(a,b){var c="true"==b.params.hasNext;
a.Ra.J="true"==b.params.hasPrevious;a.Ra.hasNext=c;a.S("previousNextChange")},nxa=function(a){g.Oo(a.G);
a.G=g.Mo((0,g.x)(a.Ri,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Mk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.td=a;this.u=[];this.u.push(this.td.$_s("screenChange",(0,g.x)(this.KP,this)));this.u.push(this.td.$_s("onlineScreenChange",(0,g.x)(this.hM,this)))},Bxa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.L("MDX_CONFIG")||b;tva();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),Bva()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",o8,void 0));xxa();var c=p8();if(!c){var d=new v7(n8);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);bxa(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){c6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Mk(b)),s8.push(g.To("yt-remote-cast2-availability-change",function(){c6("yt-remote-receiver-availability-change")})),s8.push(g.To("yt-remote-cast2-receiver-selected",function(){t8(null);
c6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.To("yt-remote-cast2-receiver-resumed",function(){c6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.To("yt-remote-cast2-session-change",yxa)),s8.push(g.To("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),exa())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.Bo("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Mk(a)),zxa(a),c.start(),q8()||Axa())},Dxa=function(){var a=Cxa();
N7()&&g.us("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Cxa=function(){var a=p8().td.$_gos();
var b=w8();b&&x8()&&(j6(a,b)||a.push(b));return sva(a)},y8=function(){var a=Exa();
!a&&N7()&&dxa()&&(a={key:"cast-selector-receiver",name:dxa()});return a},Exa=function(){var a=Cxa(),b=w8();
b||(b=u8());return g.$a(a,function(c){return b&&f6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().ae();return k6(b,a)},yxa=function(a){r8("remote.onCastSessionChange_: "+g6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},Fxa=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},Gxa=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||Fxa("");g.Ia("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?c6("yt-remote-connection-change",!1):!b&&a&&c6("yt-remote-connection-change",!0)},u8=function(){var a=g.vs();
if(!a)return null;var b=p8().ae();return k6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{Fxa(a.id);var c=new f8(n8,a,v8());c.connect(b,Gxa());c.subscribe("beforeDisconnect",function(d){c6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},Axa=function(){var a=u8();
a?(r8("Resume connection to: "+g6(a)),A8(a,0)):(q6(),exa(),r8("Skipping connecting because no session screen found."))},xxa=function(){var a=v8();
if(g.Ob(a)){a=o6();var b=g.us("yt-remote-session-name")||"",c=g.us("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},zxa=function(a){a?(g.ts("yt-remote-session-app",a.app),g.ts("yt-remote-session-name",a.name)):(l6("yt-remote-session-app"),l6("yt-remote-session-name"));
g.Ia("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.A.call(this);
this.B=a;this.u=b;this.w=new g.O(this);g.C(this,this.w);this.w.L(b,"onCaptionsTrackListChanged",this.DL);this.w.L(b,"captionschanged",this.FK);this.w.L(b,"captionssettingschanged",this.hC);this.w.L(b,"videoplayerreset",this.Vo);this.w.L(b,"mdxautoplaycancel",this.jE);this.R=this.w.L(b,"onVolumeChange",this.AA);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.PA,this);c.subscribe("remotePlayerChange",this.Kl,this);c.subscribe("remoteQueueChange",this.Vo,this);c.subscribe("autoplayUpNext",this.pA,
this);c.subscribe("previousNextChange",this.MA,this);c.subscribe("nowAutoplaying",this.IA,this);c.subscribe("autoplayDismissed",this.oA,this);this.suggestion=null;this.H=new g.qD(64);this.A=new g.I(this.fC,500,this);g.C(this,this.A);this.C=new g.I(this.gC,1E3,this);g.C(this,this.C);this.P=new u6(this.mP,0,this);g.C(this,this.P);this.F={};this.O=new g.I(this.IC,1E3,this);g.C(this,this.O);this.J=new v6(this.mI,1E3,this);g.C(this,this.J);this.T=g.Ja;this.hC();this.Vo();this.Kl()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.O=b||0;c.player.S("progresssync",b,d)},Hxa=function(a){H8(a,0);
a.A.stop();I8(a,new g.qD(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.Vb(c,b));a.o.UB(a.u.getVideoData(1).videoId,c);a.F=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.lf,fva(c));I8(a,new g.qD(1))},Ixa=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{ET:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.wD(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.tT(a.u.app,d);a.H=b;Jxa(a.B,c,b)}},M8=function(){g.R.call(this,{D:"div",
I:"ytp-mdx-popup-dialog",M:{role:"dialog"},K:[{D:"div",I:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",I:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",I:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",I:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.u=new g.yM(this,250);g.C(this,this.u);this.C=this.o["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.w);this.A=this.o["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},N8=function(a){g.R.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.AM()]},{D:"div",I:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.u=new g.yM(this,250);g.C(this,this.u);this.w=a;this.L(a,"presentingplayerstatechange",this.A);Kxa(this,g.zL(a))},Kxa=function(a,b){if(3==a.w.getPresentingPlayerType()){var c={RECEIVER_NAME:a.w.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.dN("Error on $RECEIVER_NAME",c):g.xD(b)||g.W(b,4)?g.dN("Playing on $RECEIVER_NAME",c):g.dN("Connected to $RECEIVER_NAME",c);a.ia("statustext",c);a.u.show()}else a.u.hide()},O8=function(a,b){g.XO.call(this,"Play on",0,a,b);
this.u=a;this.C={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},P8=function(a){g.dM.call(this,a);
this.u={key:i6(),name:"This computer"};this.B=null;this.A=[];this.R=this.o=null;this.J=[this.u];this.w=this.u;this.F=new g.qD(64);this.O=0;this.H=-1;this.C=null;if(!g.Ny(this.player.N())){a=this.player;var b=g.VC(a);b&&(b=b.sl())&&(b=new O8(a,b),g.C(this,b));b=new N8(a);g.C(this,b);g.RL(a,b.element,4);this.C=new M8;g.C(this,this.C);g.RL(a,this.C.element,4);this.P=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},Jxa=function(a,b,c){a.F=
c;
a.player.S("presentingplayerstatechange",new g.CD(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.S(a.player.N().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.L("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.L("SESSION_INDEX")&&!g.L("LOGGED_IN")))||a.P||!a.C);if(c?0:g.Vy(a.player.N())||"WEB_EMBEDDED_PLAYER"==a.player.N().deviceParams.c)g.xD(g.zL(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.dO,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.u.show(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2==a.player.app.T||1==a.player.app.T)&&g.S(a.player.N().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.xa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.lf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=fva(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Mk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?c6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().ae(),(c=k6(c,b.key))&&A8(c,1))}},Rva={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},I6={"'":"\\'"},Lxa={},ova={nQ:"atp",SS:"ska",HS:"que",aS:"mus",RS:"sus",mR:"dsp",OS:"seq"};
d6.prototype.Jg=function(){var a=new d6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.u=this.u;a.o=this.o};
var r6,n6="",Gva=Cva("loadCastFramework")||Cva("loadCastApplicationFramework"),axa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ua(u6,g.A);g.h=u6.prototype;g.h.oF=function(a){this.A=arguments;this.o=!1;this.Da?this.w=(0,g.H)()+this.ud:this.Da=g.Xf(this.B,this.ud)};
g.h.stop=function(){this.Da&&(g.u.clearTimeout(this.Da),this.Da=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.X=function(){this.stop();u6.Db.X.call(this)};
g.h.pF=function(){this.w?(this.Da=g.Xf(this.B,this.w-(0,g.H)()),this.w=null):(this.Da=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};g.Ua(v6,g.A);g.h=v6.prototype;g.h.Yi=!1;g.h.Fk=0;g.h.Da=null;g.h.xx=function(a){this.o=arguments;this.Da||this.Fk?this.Yi=!0:w6(this)};
g.h.stop=function(){this.Da&&(g.u.clearTimeout(this.Da),this.Da=null,this.Yi=!1,this.o=[])};
g.h.pause=function(){this.Fk++};
g.h.resume=function(){this.Fk--;this.Fk||!this.Yi||this.Da||(this.Yi=!1,w6(this))};
g.h.X=function(){v6.Db.X.call(this);this.stop()};
g.h.qF=function(){this.Da=null;this.Yi&&!this.Fk&&(this.Yi=!1,w6(this))};y6.prototype.stringify=function(a){return g.u.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.u.JSON.parse(a,void 0)};z6.prototype.o=null;z6.prototype.getOptions=function(){var a;(a=this.o)||(a={},Kva(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Ua(Jva,z6);S8=new Jva;g.h=A6.prototype;g.h.Xh=null;g.h.We=!1;g.h.Wj=null;g.h.Hu=null;g.h.Jj=null;g.h.Zi=null;g.h.Eg=null;g.h.qh=null;g.h.vi=null;g.h.Ic=null;g.h.om=0;g.h.af=null;g.h.Np=null;g.h.Sg=null;g.h.Hk=-1;g.h.OB=!0;g.h.Jh=!1;g.h.wr=0;g.h.fp=null;var Pva={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.oO=function(a){a=a.target;var b=this.fp;b&&3==R6(a)?b.xx():this.QC(a)};
g.h.QC=function(a){try{if(a==this.Ic)a:{var b=R6(this.Ic),c=this.Ic.C,d=this.Ic.getStatus();if(g.je&&!g.Od(10)||g.le&&!g.Nd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.yh&&!T6(this.Ic))break a;this.Jh||4!=b||7==c||(8==c||0>=d?this.o.Ve(3):this.o.Ve(2));K6(this);var e=this.Ic.getStatus();this.Hk=e;var f=T6(this.Ic);(this.We=200==e)?(4==b&&G6(this),this.C?(Qva(this,b,f),g.yh&&this.We&&3==b&&(this.A.ha(this.u,"tick",this.iO),this.u.start())):F6(this,f),this.We&&!this.Jh&&(4==b?this.o.So(this):(this.We=
!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Sg=3,E6(13)):(this.Sg=0,E6(14)),G6(this),H6(this))}}catch(k){this.Ic&&T6(this.Ic)}finally{}};
g.h.iO=function(){var a=R6(this.Ic),b=T6(this.Ic);this.om<b.length&&(K6(this),Qva(this,a,b),this.We&&4!=a&&C6(this))};
g.h.JN=function(a){J6((0,g.x)(this.IN,this,a),0)};
g.h.IN=function(a){this.Jh||(K6(this),F6(this,a),C6(this))};
g.h.WA=function(a){J6((0,g.x)(this.HN,this,a),0)};
g.h.HN=function(a){this.Jh||(G6(this),this.We=a,this.o.So(this),this.o.Ve(4))};
g.h.cancel=function(){this.Jh=!0;G6(this)};
g.h.RN=function(){this.Wj=null;var a=(0,g.H)();0<=a-this.Hu?(2!=this.Zi&&this.o.Ve(3),G6(this),this.Sg=2,E6(18),H6(this)):Tva(this,this.Hu-a)};
g.h.getLastError=function(){return this.Sg};g.h=Wva.prototype;g.h.ur=null;g.h.Od=null;g.h.gp=!1;g.h.zx=null;g.h.un=null;g.h.Yr=null;g.h.vr=null;g.h.se=null;g.h.Xf=-1;g.h.Gk=null;g.h.gk=null;g.h.connect=function(a){this.vr=a;a=M6(this.o,null,this.vr);E6(3);this.zx=(0,g.H)();var b=this.o.G;null!=b?(this.Gk=b[0],(this.gk=b[1])?(this.se=1,Xva(this)):(this.se=2,O6(this))):($5(a,"MODE","init"),this.Od=new A6(this,void 0,void 0,void 0),this.Od.Xh=this.ur,B6(this.Od,a,!1,null,!0),this.se=0)};
g.h.kE=function(a){if(a)this.se=2,O6(this);else{E6(4);var b=this.o;b.jf=b.Ig.Xf;$6(b,9)}a&&this.Ve(2)};
g.h.Iq=function(a){return this.o.Iq(a)};
g.h.abort=function(){this.Od&&(this.Od.cancel(),this.Od=null);this.Xf=-1};
g.h.yx=function(){return!1};
g.h.QA=function(a,b){this.Xf=a.Hk;if(0==this.se)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.jf=this.Xf;$6(c,2);return}this.Gk=c[0];this.gk=c[1]}else c=this.o,c.jf=this.Xf,$6(c,2);else if(2==this.se)if(this.gp)E6(7),this.Yr=(0,g.H)();else if("11111"==b){if(E6(6),this.gp=!0,this.un=(0,g.H)(),c=this.un-this.zx,!g.je||g.Od(10)||500>c)this.Xf=200,this.Od.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.un=this.Yr=(0,g.H)(),this.gp=!1};
g.h.So=function(){this.Xf=this.Od.Hk;if(this.Od.We)0==this.se?this.gk?(this.se=1,Xva(this)):(this.se=2,O6(this)):2==this.se&&((!g.je||g.Od(10)?!this.gp:200>this.Yr-this.un)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.se?E6(9):2==this.se&&E6(10);var a=this.o;this.Od.getLastError();a.jf=this.Xf;$6(a,2)}};
g.h.cm=function(){return this.o.cm()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Ve=function(a){this.o.Ve(a)};g.Ua(P6,g.hf);var bwa=/^https?$/i,Mxa=["POST","PUT"];g.h=P6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.A="";this.C=0;this.da=b;this.T=!1;this.w=!0;this.o=this.R?Lva(this.R):Lva(S8);this.O=this.R?this.R.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.Ax,this);try{b6(S6(this,"Opening Xhr")),this.Z=!0,this.o.open(b,String(a),!0),this.Z=!1}catch(f){b6(S6(this,"Error opening Xhr: "+f.message));awa(this,f);return}a=c||
"";var e=this.headers.clone();d&&kva(d,function(f,k){e.set(k,f)});
d=g.$a(e.pe(),Zva);c=g.u.FormData&&a instanceof g.u.FormData;!g.cb(Mxa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.ea&&(this.o.responseType=this.ea);"withCredentials"in this.o&&this.o.withCredentials!==this.V&&(this.o.withCredentials=this.V);try{dwa(this),0<this.F&&(this.P=Yva(this.o),b6(S6(this,"Will abort after "+this.F+"ms if incomplete, xhr2 "+this.P)),this.P?(this.o.timeout=this.F,this.o.ontimeout=(0,g.x)(this.Bx,this)):this.J=g.Xf(this.Bx,this.F,this)),b6(S6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){b6(S6(this,"Send error: "+f.message)),awa(this,f)}};
g.h.Bx=function(){"undefined"!=typeof g.U1&&this.o&&(this.A="Timed out after "+this.F+"ms, aborting",this.C=8,S6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(S6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Q6(this))};
g.h.X=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),Q6(this,!0));P6.Db.X.call(this)};
g.h.Ax=function(){this.la()||(this.Z||this.G||this.B?cwa(this):this.GM())};
g.h.GM=function(){cwa(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<R6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=U6.prototype;g.h.uk=null;g.h.Id=null;g.h.ac=null;g.h.tr=null;g.h.yn=null;g.h.Vv=null;g.h.Ln=null;g.h.Bl=0;g.h.aK=0;g.h.rd=null;g.h.Ng=null;g.h.Jf=null;g.h.Oh=null;g.h.Ig=null;g.h.Lp=null;g.h.lj=-1;g.h.ly=-1;g.h.jf=-1;g.h.Ti=0;g.h.Mi=0;g.h.Kh=8;var a7=new g.hf;g.Ua(fwa,g.Ke);g.Ua(gwa,g.Ke);g.Ua(hwa,g.Ke);g.h=U6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.tr=b;this.uk=c||{};d&&void 0!==e&&(this.uk.OSID=d,this.uk.OAID=e);this.C?(J6((0,g.x)(this.qw,this,a),100),lwa(this)):this.qw(a)};
g.h.qw=function(a){this.Ig=new Wva(this);this.Ig.ur=null;this.Ig.u=this.B;this.Ig.connect(a)};
g.h.yx=function(){return 0==this.o};
g.h.VA=function(a){this.Ng=null;owa(this,a)};
g.h.UA=function(){this.Jf=null;this.ac=new A6(this,this.w,"rpc",this.F);this.ac.Xh=null;this.ac.wr=0;var a=this.Vv.clone();Y5(a,"RID","rpc");Y5(a,"SID",this.w);Y5(a,"CI",this.Lp?"0":"1");Y5(a,"AID",this.lj);V6(this,a);if(!g.je||g.Od(10))Y5(a,"TYPE","xmlhttp"),B6(this.ac,a,!0,this.Ln,!1);else{Y5(a,"TYPE","html");var b=this.ac,c=!!this.Ln;b.Zi=3;b.Eg=Z5(a.clone());Sva(b,c)}};
g.h.QA=function(a,b){if(0!=this.o&&(this.ac==a||this.Id==a))if(this.jf=a.Hk,this.Id==a&&3==this.o)if(7<this.Kh){try{var c=this.B.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.Jf){if(this.ac)if(this.ac.Jj+3E3<this.Id.Jj)X6(this),this.ac.cancel(),this.ac=null;else break a;Z6(this);E6(19)}}else this.ly=c[1],0<this.ly-this.lj&&37500>c[2]&&this.Lp&&0==this.Mi&&!this.Oh&&(this.Oh=J6((0,g.x)(this.BK,this),6E3));else $6(this,11)}else b!=Lxa.KQ.o&&$6(this,11);else if(this.ac==
a&&X6(this),!g.hc(b)){c=this.B.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.lj=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.Ln=e[2],e=e[3],null!=e?this.Kh=e:this.Kh=6,this.o=3,this.rd&&this.rd.lw(),this.Vv=M6(this,this.cm()?this.Ln:null,this.tr),pwa(this)):"stop"==e[0]&&$6(this,7):3==this.o&&("stop"==e[0]?$6(this,7):"noop"!=e[0]&&this.rd&&this.rd.kw(e),this.Mi=0)}}};
g.h.BK=function(){null!=this.Oh&&(this.Oh=null,this.ac.cancel(),this.ac=null,Z6(this),E6(20))};
g.h.So=function(a){if(this.ac==a){X6(this);this.ac=null;var b=2}else if(this.Id==a)this.Id=null,b=1;else return;this.jf=a.Hk;if(0!=this.o)if(a.We)1==b?(b=(0,g.H)()-a.Jj,a7.dispatchEvent(new gwa(a7,a.vi?a.vi.length:0,b,this.Ti)),W6(this),this.A.length=0):pwa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.jf)){if(d=1==b)this.Id||this.Ng||1==this.o||2<=this.Ti?d=!1:(this.Ng=J6((0,g.x)(this.VA,this,a),qwa(this,this.Ti)),this.Ti++,d=!0);d=!(d||2==b&&Z6(this))}if(d)switch(c){case 1:$6(this,
5);break;case 4:$6(this,10);break;case 3:$6(this,6);break;case 7:$6(this,12);break;default:$6(this,2)}}};
g.h.IE=function(a){if(!g.cb(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.bP=function(a){a?E6(2):(E6(1),rwa(this,8))};
g.h.Iq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new P6;a.V=!1;return a};
g.h.isActive=function(){return!!this.rd&&this.rd.isActive(this)};
g.h.Ve=function(a){a7.dispatchEvent(new hwa(a7,a))};
g.h.cm=function(){return!(!g.je||g.Od(10))};
g.h=swa.prototype;g.h.lw=function(){};
g.h.kw=function(){};
g.h.jw=function(){};
g.h.Aq=function(){};
g.h.Tw=function(){return{}};
g.h.isActive=function(){return!0};g.h=twa.prototype;g.h.isEmpty=function(){return g.db(this.o)&&g.db(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.cb(this.o,a)||g.cb(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.gqa)(b,a);0<=c?(g.fb(b,c),b=!0):b=!1;return b||g.gb(this.u,a)};
g.h.Bd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ua(b7,g.A);g.h=b7.prototype;g.h.AN=function(){this.ud=Math.min(3E5,2*this.ud);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.ud+15E3*Math.random();g.An(this.o,a);this.u=(0,g.H)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.ud=5E3};g.Ua(c7,swa);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.ih=function(a){return this.w.Yh(a)};
g.h.S=function(a,b){return this.w.S.apply(this.w,arguments)};
g.h.dispose=function(){this.sb||(this.sb=!0,g.Ie(this.w),wwa(this),g.Ie(this.u),this.u=null)};
g.h.la=function(){return this.sb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new U6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.P),e=this.o;e&&(e.rd=null);d.rd=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.lj):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.Vb(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.F.push(c):d7(this)&&mwa(this.o,c)};
g.h.lw=function(){this.u.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)mwa(this.o,a[b])}this.S("handlerOpened")};
g.h.jw=function(a){var b=2==a&&401==this.o.jf;4==a||b||this.u.start();this.S("handlerError",a)};
g.h.Aq=function(a){if(!this.u.isActive())this.S("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.Tw=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.Vb(a,this.B);return a};
g.h.kw=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),kwa(this.o)):this.S("handlerMessage",new uwa(a[0],a[1]))};
g.h.DO=function(){this.u.isActive();var a=this.o,b=0;a.ac&&b++;a.Id&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var Ewa=(0,g.H)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Ua(m7,g.P);m7.prototype.ae=function(){return this.o};
m7.prototype.contains=function(a){return!!j6(this.o,a)};
m7.prototype.get=function(a){return a?k6(this.o,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.r(n7,g.P);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Da)&&this.UC()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Da)||(g.Oo(this.Da),this.Da=NaN)};
g.h.X=function(){this.stop();g.P.prototype.X.call(this)};
g.h.UC=function(){this.Da=NaN;this.o=g.yq(f7(this.C,"/pairing/get_screen"),{method:"POST",ub:{pairing_code:this.A},timeout:5E3,onSuccess:(0,g.x)(this.IP,this),onError:(0,g.x)(this.HP,this),Ld:(0,g.x)(this.JP,this)})};
g.h.IP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.w;this.S("pairingComplete",new e6(c))};
g.h.HP=function(a){this.o=null;a.status&&404==a.status?this.u>=Nxa.length?this.S("pairingFailed",Error("DIAL polling timed out")):(a=Nxa[this.u],this.Da=g.Mo((0,g.x)(this.UC,this),a),this.u++):this.S("pairingFailed",Error("Server error "+a.status))};
g.h.JP=function(){this.o=null;this.S("pairingFailed",Error("Server not responding"))};
var Nxa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.S("screenChange");!g.us("yt-remote-lounge-token-expiration")&&Iwa(this);g.Oo(this.u);this.u=g.Mo((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);Fwa(this,a);q7(this,!1);this.S("screenChange");b(a);a.token||Iwa(this)};
g.h.remove=function(a,b){var c=o7(this);Hwa(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.S("screenChange")};
g.h.Jp=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.S("screenChange")};
g.h.X=function(){g.Oo(this.u);p7.Db.X.call(this)};
g.h.AF=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.zF=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.r(s7,g.P);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.us("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.H)()-144E5<a?0:a)?u7(this):(this.A=(0,g.H)()+3E5,g.ts("yt-remote-fast-check-period",this.A),this.Ut())};
g.h.isEmpty=function(){return g.Ob(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Cb(this.o,function(c,d){return c&&!!k6(a,d)},this);
t7(this,b)};
g.h.X=function(){g.Oo(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.P.prototype.X.call(this)};
g.h.Ut=function(){g.Oo(this.w);this.w=NaN;this.u&&this.u.abort();var a=Lwa(this);if(a6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Ib(a).join(",")},(0,g.x)(this.eN,this,a),(0,g.x)(this.dN,this))}else t7(this,{}),u7(this)};
g.h.eN=function(a,b){this.u=null;var c=g.Ib(Lwa(this));if(g.ub(c,g.Ib(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Qb("Changing Screen set during request."),this.Ut()};
g.h.dN=function(a){this.Qb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Qb=function(a){i7("OnlineScreenService",a)};g.Ua(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.S("screenChange"),this.u.isEmpty()||this.S("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.Jp=function(a,b,c,d){this.w.contains(a)?this.w.Jp(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.ae=function(a){return a?this.o:g.jb(this.o,(0,g.we)(this.A,function(b){return!this.contains(b)},this))};
g.h.VC=function(){return(0,g.we)(this.ae(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.WC=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.Ie(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.Ie(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.LP=function(a,b,c,d){g.yq(f7(this.C,"/pairing/get_screen"),{method:"POST",ub:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new e6(f.screen||{});if(!k.name||Pwa(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);Pwa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Ld:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.Ie(this.w);g.Ie(this.u);v7.Db.X.call(this)};
g.h.IF=function(){Qwa(this);this.S("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Ua(y7,g.P);g.h=y7.prototype;g.h.Uo=function(a){this.w=a;this.S("sessionScreen",this.w)};
g.h.fe=function(a){this.la()||(a&&z7(this,""+a),this.w=null,this.S("sessionScreen",null))};
g.h.info=function(a){i7(this.O,a)};
g.h.YC=function(){return null};
g.h.eu=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.eu("");y7.Db.X.call(this)};g.Ua(A7,y7);g.h=A7.prototype;g.h.du=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);Swa(this)};
g.h.mj=function(a){this.info("launchWithParams no-op for Cast: "+g.Mk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.fe()},this),(0,g.x)(function(){this.fe(Error("Failed to stop receiver app."))},this)):this.fe(Error("Stopping cast device witout session."))};
g.h.eu=g.Ja;g.h.X=function(){this.info("disposeInternal");g.Oo(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.Db.X.call(this)};
g.h.ZN=function(a,b){if(!this.la())if(b){var c=x6(b);if(g.Pa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Mk(c));switch(d){case "mdxSessionStatus":Rwa(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.nx=function(a,b,c,d){Owa(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Mo((0,g.x)(this.nx,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.YC=function(){return this.o};
g.h.MP=function(a){this.la()||a||(z7(this,"Cast session died."),this.fe())};g.Ua(B7,y7);g.h=B7.prototype;g.h.du=function(a){this.A=a;this.A.addUpdateListener(this.P)};
g.h.mj=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Ja;g.Oo(this.C);this.A?this.A.stop((0,g.x)(this.fe,this,null),(0,g.x)(this.fe,this,"Failed to stop DIAL device.")):this.fe()};
g.h.X=function(){this.o();this.o=g.Ja;g.Oo(this.C);this.A&&this.A.removeUpdateListener(this.P);this.A=null;B7.Db.X.call(this)};
g.h.PP=function(a){this.la()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ja,this.fe())};
g.h.Fr=function(a){this.J=i6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,Uwa(this));a(b);Twa(this)}else this.F=(0,g.x)(function(){g.Oo(this.C);this.F=g.Ja;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Uwa(this));a(c);Twa(this)},this),this.C=g.Mo((0,g.x)(function(){this.F()},this),100)};
g.h.cG=function(a,b,c){Owa(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.Uo(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Fr(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.Fr(b,c)},this))};g.Ua(C7,y7);C7.prototype.stop=function(){this.fe()};
C7.prototype.du=g.Ja;C7.prototype.mj=function(){g.Oo(this.o);this.o=NaN;var a=k6(this.H.ae(),this.u.label);a?this.Uo(a):this.fe(Error("No such screen"))};
C7.prototype.X=function(){g.Oo(this.o);this.o=NaN;C7.Db.X.call(this)};g.Ua(D7,g.P);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.LM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.SA,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.aL,this);chrome.cast.initialize(c,(0,g.x)(function(){this.la()||
(chrome.cast.addReceiverActionListener(this.A),Bwa(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.XC,this)),this.w=Wwa(this),chrome.cast.setCustomReceivers(this.w,g.Ja,(0,g.x)(function(k){this.Qb("Failed to set initial custom receivers: "+g.Mk(k))},this)),this.S("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Qb("Failed to initialize API: "+g.Mk(k));
b(!1)},this))};
g.h.LO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=k6(this.u.ae(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=Vwa(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Ja,(0,g.x)(function(e){this.Qb("Failed to set initial custom receivers: "+g.Mk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.eu(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.MO=function(a){this.la()?this.Qb("Setting connection data on disposed cast v2"):this.o?this.o.mj(a):this.Qb("Setting connection data without a session")};
g.h.OP=function(){this.la()?this.Qb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.SA,this),(0,g.x)(this.iN,this))};
g.h.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.XC,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=ywa,b=g.w("yt.mdx.remote.debug.handlers_");g.gb(b||[],a);g.Ie(this.o);D7.Db.X.call(this)};
g.h.Qb=function(a){i7("Controller",a)};
g.h.TA=function(a,b){this.o==a&&(b||G7(this,null),this.S("yt-remote-cast2-session-change",b))};
g.h.HM=function(a,b){if(!this.la())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.S("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Qb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Qb("Stopping receiver w/o session: "+a.friendlyName)}else this.Qb("onReceiverAction_ called without receiver.")};
g.h.aL=function(a){if(this.la())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Qb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Qb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.S("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Qb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.cG,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Fr,b))};
g.h.SA=function(a){if(!this.la()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Qb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=k6(this.u.ae(),c.label);d&&f6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Ie(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.TA,this,this.o)),this.o.mj(null));this.o.du(a)}}};
g.h.NP=function(){return this.o?this.o.YC():null};
g.h.iN=function(a){this.la()||(this.Qb("Failed to estabilish a session: "+g.Mk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.LM=function(a){E7("Receiver availability updated: "+a);if(!this.la()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.S("yt-remote-cast2-availability-change",F7(this))}};
g.h.XC=function(){this.la()||(this.w=Wwa(this),E7("Updating custom receivers: "+g.Mk(this.w)),chrome.cast.setCustomReceivers(this.w,g.Ja,(0,g.x)(function(){this.Qb("Failed to set custom receivers.")},this)),this.S("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.MO;D7.prototype.setConnectedScreenStatus=D7.prototype.LO;D7.prototype.stopSession=D7.prototype.OP;D7.prototype.getCastSession=D7.prototype.NP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.J=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.w=a.liveIngestionTime,this.B=
!isNaN(this.w))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.P);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ja,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.S("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ja,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.S("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ja,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.S("remotePlayerChange")}else a8(this,g.Sa(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ja,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.S("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Qb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Qb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Sa(this.setVolume,a,b))};
g.h.UB=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Mk(b.style),g.Vb(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Sa(this.UB,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Sa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Mk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.TC=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Sa(this.TC,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Sa(this.nextVideo,a,b))};
g.h.Bw=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.Bw)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.S("proxyStateChange",a,this.o)}g.P.prototype.dispose.call(this)};
g.h.X=function(){ixa(this);this.A=null;this.B.clear();Y7(this,null);g.P.prototype.X.call(this)};
g.h.Ku=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.S("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.db(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.EM=function(a,b){this.S(a,b)};
g.h.HK=function(a){if(!a)this.Dl(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.Dl=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),jxa(this),this.S("remotePlayerChange")};
g.h.GK=function(a){a?(jxa(this),this.S("remotePlayerChange")):this.Dl(null)};
g.h.SK=function(){var a=fxa();a&&Y7(this,a)};
g.h.Qb=function(a){i7("CP",a)};g.r(f8,g.P);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Ra.listId=c);this.Ra.videoId=d;this.Ra.index=k||0;this.Ra.state=3;U7(this.Ra,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Mk(l));this.o.connect({method:"setPlaylist",
params:g.Mk(l)},a,wva())}else g8("Connecting without params"),this.o.connect({},a,wva());lxa(this)};
g.h.dispose=function(){this.la()||(this.S("beforeDispose"),h8(this,3));g.P.prototype.dispose.call(this)};
g.h.X=function(){i8(this);k8(this);j8(this);g.Oo(this.F);this.F=NaN;g.Oo(this.G);this.G=NaN;this.w=null;g.Ap(this.O);this.O.length=0;this.o.dispose();g.P.prototype.X.call(this);this.A=this.C=this.u=this.Ra=this.o=null};
g.h.sF=function(){this.Ri(2)};
g.h.LK=function(){g8("Channel opened");this.P&&(this.P=!1,j8(this),this.J=g.Mo((0,g.x)(function(){g8("Timing out waiting for a screen.");this.Ri(1)},this),15E3));
Ava(vwa(this.o),this.R)};
g.h.IK=function(){g8("Channel closed");isNaN(this.B)?q6(!0):q6();this.dispose()};
g.h.JK=function(a){q6();isNaN(this.Ak())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.P=!0,g8("Channel error: "+a+" with reconnection in "+this.Ak()+" ms"),h8(this,2))};
g.h.KK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Mk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.u=(0,g.Fc)(a,function(c){return new d6(c)});
a=!!g.$a(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
oxa(this,a);break;case "loungeScreenDisconnected":g.ib(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
oxa(this,!1);break;case "remoteConnected":var b=new d6(x6(a.params.device));g.$a(this.u,function(c){return b?c.id==b.id:!1})||gva(this.u,b);
break;case "remoteDisconnected":b=new d6(x6(a.params.device));g.ib(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":qxa(this,a);break;case "nowPlaying":sxa(this,a);break;case "onStateChange":rxa(this,a);break;case "onAdStateChange":txa(this,a);break;case "onVolumeChanged":uxa(this,a);break;case "onSubtitlesTrackChanged":pxa(this,a);break;case "nowAutoplaying":vxa(this,a);break;case "autoplayDismissed":this.S("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.S("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.S("autoplayModeChange",this.A);"DISABLED"==this.A&&this.S("autoplayDismissed");break;case "onHasPreviousNextChanged":wxa(this,a);break;case "requestAssistedSignIn":this.S("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.zO=function(){if(this.w){var a=this.w;this.w=null;this.Ra.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.hF=function(){var a=3;this.la()||(a=0,isNaN(this.Ak())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.Ri=function(a){g8("Disconnecting with "+a);i8(this);this.S("beforeDisconnect",a);1==a&&q6();wwa(this.o,a);this.dispose()};
g.h.gF=function(){var a=this.Ra;this.w&&(a=this.Ra.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.NO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Ra.videoId&&(this.w=b.videoId,g.Oo(this.F),this.F=g.Mo((0,g.x)(this.zO,this),5E3));var c=[];this.Ra.listId==b.listId&&this.Ra.videoId==b.videoId&&this.Ra.index==b.index||c.push("remoteQueueChange");this.Ra.playerState==b.playerState&&this.Ra.volume==b.volume&&this.Ra.muted==b.muted&&V7(this.Ra)==V7(b)&&g.Mk(this.Ra.o)==g.Mk(b.o)||c.push("remotePlayerChange");this.Ra.reset(a);(0,g.y)(c,function(d){this.S(d)},this)};
g.h.lx=function(){var a=this.o.C.id,b=g.$a(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Ak=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.H)():NaN};
g.h.VE=function(){return this.A||"UNSUPPORTED"};
g.h.WE=function(){return this.C||""};
g.h.GP=function(){if(!isNaN(this.Ak())){var a=this.o.u;g.Bn(a.o);a.start()}};
g.h.IO=function(a,b){l8(this,a,b);nxa(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.ih;f8.prototype.getProxyState=f8.prototype.hF;f8.prototype.disconnect=f8.prototype.Ri;f8.prototype.getPlayerContextData=f8.prototype.gF;f8.prototype.setPlayerContextData=f8.prototype.NO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.lx;f8.prototype.getReconnectTimeout=f8.prototype.Ak;f8.prototype.getAutoplayMode=f8.prototype.VE;f8.prototype.getAutoplayVideoId=f8.prototype.WE;f8.prototype.reconnect=f8.prototype.GP;
f8.prototype.sendMessage=f8.prototype.IO;g.r(m8,m7);g.h=m8.prototype;g.h.ae=function(a){return this.td.$_gs(a)};
g.h.contains=function(a){return!!this.td.$_c(a)};
g.h.get=function(a){return this.td.$_g(a)};
g.h.start=function(){this.td.$_st()};
g.h.add=function(a,b,c){this.td.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.td.$_r(a,b,c)};
g.h.Jp=function(a,b,c,d){this.td.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.u.length;a<b;++a)this.td.$_ubk(this.u[a]);this.u.length=0;this.td=null;m7.prototype.X.call(this)};
g.h.KP=function(){this.S("screenChange")};
g.h.hM=function(){this.S("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.LP;v7.prototype.$_gsppc=v7.prototype.WC;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.Jp;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.ae;v7.prototype.$_gos=v7.prototype.VC;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.ih;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.A);g.h=G8.prototype;
g.h.X=function(){g.A.prototype.X.call(this);this.A.stop();this.C.stop();this.P.stop();this.T();this.o.unsubscribe("proxyStateChange",this.PA,this);this.o.unsubscribe("remotePlayerChange",this.Kl,this);this.o.unsubscribe("remoteQueueChange",this.Vo,this);this.o.unsubscribe("autoplayUpNext",this.pA,this);this.o.unsubscribe("previousNextChange",this.MA,this);this.o.unsubscribe("nowAutoplaying",this.IA,this);this.o.unsubscribe("autoplayDismissed",this.oA,this);this.o=this.B=null};
g.h.lz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.xx(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.FK=function(a){this.P.oF(a)};
g.h.mP=function(a){this.lz("control_subtitles_set_track",g.Ob(a)?null:a)};
g.h.hC=function(){var a=this.u.getOption("captions","track");g.Ob(a)||K8(this,a)};
g.h.AA=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.Kl,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.O.start();this.o.subscribe("remotePlayerChange",this.Kl,this)}};
g.h.DL=function(){g.Ob(this.F)||Ixa(this,this.F);this.G=!1};
g.h.PA=function(a,b){this.C.stop();2==b&&this.gC()};
g.h.Kl=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.qD(8));this.fC();break;case 1085:case 3:I8(this,new g.qD(9));break;case 1083:case 0:I8(this,new g.qD(2));this.J.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.qD(4));break;case 2:I8(this,new g.qD(4));H8(this,V7(a));
break;case -1:I8(this,new g.qD(64));break;case -1E3:I8(this,new g.qD(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.F=a,Ixa(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.O.isActive()||this.IC()}else Hxa(this)};
g.h.MA=function(){this.u.S("mdxpreviousnextchange")};
g.h.Vo=function(){J8(this)||Hxa(this)};
g.h.jE=function(){this.o.Bw()};
g.h.pA=function(){};
g.h.IA=function(a){isNaN(a)||this.u.S("mdxnowautoplaying",a)};
g.h.oA=function(){this.u.S("mdxautoplaycanceled")};
g.h.mI=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.IC=function(){if(J8(this)){var a=$7(this.o);this.w.Va(this.R);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.R=this.w.L(this.u,"onVolumeChange",this.AA)}};
g.h.fC=function(){this.A.stop();if(!this.o.la()){var a=$7(this.o);1==a.playerState&&I8(this,new g.qD(8));H8(this,V7(a));this.A.start()}};
g.h.gC=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.R);M8.prototype.w=function(){c6("mdx-privacy-popup-cancel");this.u.hide()};
M8.prototype.B=function(){c6("mdx-privacy-popup-confirm");this.u.hide()};g.r(N8,g.R);N8.prototype.A=function(a){Kxa(this,a.state)};g.r(O8,g.XO);O8.prototype.J=function(){var a=this.u.getOption("remote","receivers");a&&1<a.length&&!this.u.getOption("remote","quickCast")?(this.C=g.wb(a,this.B,this),g.ZO(this,(0,g.Fc)(a,this.B)),a=this.u.getOption("remote","currentReceiver"),this.ze(this.B(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.B=function(a){return a.key};
O8.prototype.Te=function(a){return"cast-selector-receiver"==a?"Cast...":this.C[a].name};
O8.prototype.Zc=function(a){g.XO.prototype.Zc.call(this,a);this.u.setOption("remote","currentReceiver",this.C[a]);this.w.ib()};g.r(P8,g.dM);g.h=P8.prototype;
g.h.create=function(){Bxa(g.Ey(this.player.N()));this.A.push(g.To("yt-remote-before-disconnect",this.CK,this));this.A.push(g.To("yt-remote-connection-change",this.MM,this));this.A.push(g.To("yt-remote-receiver-availability-change",this.NA,this));this.A.push(g.To("yt-remote-auto-connect",this.KM,this));this.A.push(g.To("yt-remote-receiver-resumed",this.JM,this));this.A.push(g.To("mdx-privacy-popup-confirm",this.lO,this));this.A.push(g.To("mdx-privacy-popup-cancel",this.kO,this));this.NA()};
g.h.load=function(){this.player.cancelPlayback();g.dM.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=Gxa())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.O=a||0,this.player.S("progresssync",a,void 0));Jxa(this,this.F,this.F);g.AT(this.player.app,6)};
g.h.unload=function(){this.player.S("mdxautoplaycanceled");this.w=this.u;g.Je(this.B,this.o);this.o=this.B=null;g.dM.prototype.unload.call(this);g.AT(this.player.app,5);Q8(this)};
g.h.X=function(){g.Uo(this.A);g.dM.prototype.X.call(this)};
g.h.jl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.lz.apply(this.B,[a].concat(g.na(c)))};
g.h.getAdState=function(){return this.H};
g.h.jF=function(){return this.loaded?this.B.suggestion:null};
g.h.Fy=function(){return this.o?$7(this.o).J:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.O};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.S(this.player.N().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Mc():!a.isAdPlaying()&&this.player.Mc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.w+T7(a):a.w,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.A?a.A+T7(a):
a.A}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.GG=function(){this.o&&this.o.TC()};
g.h.CK=function(a){1==a&&(this.R=this.o?$7(this.o):null)};
g.h.MM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.R=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.Ie(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.R)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.S("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.NA=function(){this.J=[this.u].concat(Dxa());var a=y8()||this.u;R8(this,a);this.player.ma("onMdxReceiversChange")};
g.h.dO=function(a){!this.P&&g.ED(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.KM=function(){var a=y8();R8(this,a)};
g.h.JM=function(){this.w=y8()};
g.h.lO=function(){this.P=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.kO=function(){this.P=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Kc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.J;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.J.length&&"cast-selector-receiver"==this.J[1].key?(b&&P7(),!0):!1}};
g.h.HG=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Af=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.sM.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:01:25 Apr 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:59:07 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 447.831
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.053
  esindex: 0.008
  LoadShardBlock: 77.847 (3)
  PetaboxLoader3.datanode: 106.278 (5)
  load_resource: 154.023 (2)
  PetaboxLoader3.resolve: 82.081 (2)
*/