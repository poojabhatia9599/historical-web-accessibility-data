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

(function(g){var window=this;var mta=function(a,b){return g.Tb(a,b)},Y5=function(a,b,c){a.w.set(b,c)},Z5=function(a){Y5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.I)()).toString(36));
return a},$5=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Ym(a.w,b,c)},nta=function(a,b){var c=[];
g.dk(b,function(d){try{var e=g.$n.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Zn(e)&&c.push(d)},a);
return c},ota=function(a,b){var c=nta(a,b);
(0,g.y)(c,function(d){g.$n.prototype.remove.call(this,d)},a)},pta=function(a,b){g.Wa(a,b)||a.push(b)},a6=function(a){var b=0,c;
for(c in a)b++;return b},qta=function(a,b){var c=b instanceof g.wc?b:g.Ac(b,/^data:image\//i.test(b));
a.src=g.xc(c)},b6=function(){},rta=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},sta=function(a){if(a.zd&&"function"==typeof a.zd)return a.zd();
if("string"===typeof a)return a.split("");if(g.Ha(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Pb(a)},tta=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ha(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.qe&&"function"==typeof a.qe)var c=a.qe();else if(a.zd&&"function"==typeof a.zd)c=void 0;else if(g.Ha(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Qb(a);d=sta(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},uta=function(a,b,c,d){var e=new g.Mm(null,void 0);
a&&g.Nm(e,a);b&&g.Om(e,b);c&&g.Pm(e,c);d&&(e.u=d);return e},c6=function(a,b){g.Ho[a]=!0;
var c=g.Fo();c&&c.publish.apply(c,arguments);g.Ho[a]=!1},d6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.w=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Jm;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",vta(this,a.capabilities||""),wta(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},vta=function(a,b){a.capabilities.clear();
(0,g.Wd)(b.split(","),g.Ma(mta,xta)).forEach(function(c){a.capabilities.add(c)})},wta=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},e6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},f6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},yta=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},zta=function(a){return new e6(a)},Ata=function(a){return g.Ga(a)?(0,g.A)(a,zta):[]},g6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},h6=function(a){return g.Ga(a)?"["+(0,g.A)(a,g6).join(",")+"]":"null"},i6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Bta=function(a){return(0,g.A)(a,function(b){return{key:b.id,
name:b.name}})},j6=function(a,b){return g.Ta(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},k6=function(a,b){return g.Ta(a,function(c){return f6(c,b)})},l6=function(a){try{var b=(0,g.hs)(),c=(0,g.gs)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},Cta=function(){var a=(0,g.gs)();
a&&ota(a,a.o.Gf(!0))},m6=function(){var a=g.js("yt-remote-connected-devices")||[];
g.nb(a);return a},Dta=function(a){if(g.Xa(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.A)(a,function(d,e){return 0==e?d:d.substring(c.length)})},Eta=function(a){g.is("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.js("yt-remote-device-id");a||(a=i6(),g.is("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.Wa(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.Wa(a,b);g.ks()&&g.pb(a,b);a=Dta(a);if(g.Xa(a))try{g.Zq("remote_sid")}catch(c){}else try{g.Yq("remote_sid",a.join(","),-1)}catch(c){}},Fta=function(){return g.js("yt-remote-session-browser-channel")},Gta=function(){return g.js("yt-remote-local-screens")||[]},Hta=function(){g.is("yt-remote-lounge-token-expiration",!0,86400)},Ita=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.A)(Gta(),function(d){return d.loungeToken}),c=(0,g.A)(a,function(d){return d.loungeToken});
(0,g.ni)(c,function(d){return!g.Wa(b,d)})&&Hta();
g.is("yt-remote-local-screens",a,31536E3)},Jta=function(a,b){g.is("yt-remote-session-browser-channel",a);
g.is("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.Wa(c,d)||c.push(d);Eta(c);p6()},q6=function(a){a||(l6("yt-remote-session-screen-id"),l6("yt-remote-session-video-id"));
p6();a=m6();g.ab(a,o6());Eta(a)},Kta=function(){if(!r6){var a=g.lo();
a&&(r6=new g.Un(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},Lta=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Mta=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?Nta(a.shift(),function(){s6(a)}):t6()},Ota=function(a){return"chrome-extension://"+a+"/cast_sender.js"},Nta=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=Mta();
a&&a(!1,"No cast extension found")},Qta=function(){if(Pta){var a=2,b=Mta(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Nta("//web.archive.org/web/20200301000226/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},Rta=function(){Qta();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200301000226/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200301000226/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(){},Sta=function(){},Uta=function(a){return(a=Tta(a))?new ActiveXObject(a):new XMLHttpRequest},Tta=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},v6=function(a,b,c){g.B.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.od=b;this.u=(0,g.x)(this.TE,this);this.o=[]},w6=function(a){a.Da=g.wf(a.u,a.od);
a.w.apply(null,a.o)},x6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.F=d||1;this.B=45E3;this.A=new g.U1(this);this.u=new g.vf;this.u.setInterval(250)},Wta=function(a,b,c){a.Ni=1;
a.ug=Z5(b.clone());a.di=c;a.C=!0;Vta(a,null)},y6=function(a,b,c,d,e){a.Ni=1;
a.ug=Z5(b.clone());a.di=null;a.C=c;e&&(a.sB=!1);Vta(a,d)},Vta=function(a,b){a.Aj=(0,g.I)();
z6(a);a.dh=a.ug.clone();$5(a.dh,"t",a.F);a.Wl=0;a.Hc=a.o.iq(a.o.Ll()?b:null);0<a.Sq&&(a.Go=new v6((0,g.x)(a.vC,a,a.Hc),a.Sq));a.A.ia(a.Hc,"readystatechange",a.XN);var c=a.Jh?g.Zb(a.Jh):{};a.di?(a.np="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Hc.send(a.dh,a.np,a.di,c)):(a.np="GET",a.sB&&!g.Ld&&(c.Connection="close"),a.Hc.send(a.dh,a.np,null,c));a.o.Qe(1)},Zta=function(a,b,c){for(var d=!0;!a.qh&&a.Wl<c.length;){var e=Xta(a,c);
if(e==A6){4==b&&(a.Gg=4,B6(15),d=!1);break}else if(e==Yta){a.Gg=4;B6(16);d=!1;break}else C6(a,e)}4==b&&0==c.length&&(a.Gg=1,B6(17),d=!1);a.Re=a.Re&&d;d||(D6(a),E6(a))},Xta=function(a,b){var c=a.Wl,d=b.indexOf("\n",c);
if(-1==d)return A6;c=Number(b.substring(c,d));if(isNaN(c))return Yta;d+=1;if(d+c>b.length)return A6;var e=b.substr(d,c);a.Wl=d+c;return e},aua=function(a,b){a.Aj=(0,g.I)();
z6(a);var c=b?window.location.hostname:"";a.dh=a.ug.clone();Y5(a.dh,"DOMAIN",c);Y5(a.dh,"t",a.F);try{a.Ve=new ActiveXObject("htmlfile")}catch(n){D6(a);a.Gg=7;B6(22);E6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in F6)k=F6[l];else if(l in $ta)k=F6[l]=$ta[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
F6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Sc(g.oc("b/12014412"),d+"</body></html>");a.Ve.open();a.Ve.write(g.Nc(c));a.Ve.close();a.Ve.parentWindow.m=(0,g.x)(a.pN,a);a.Ve.parentWindow.d=(0,g.x)(a.BA,a,!0);a.Ve.parentWindow.rpcClose=(0,g.x)(a.BA,a,!1);c=a.Ve.createElement("DIV");a.Ve.parentWindow.document.body.appendChild(c);d=g.zc(a.dh.toString());d=g.Zc(g.xc(d));d=g.Sc(g.oc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Tc(c,d);a.o.Qe(1)},z6=function(a){a.qu=(0,g.I)()+a.B;
bua(a,a.B)},bua=function(a,b){if(null!=a.Oj)throw Error("WatchDog timer not null");
a.Oj=G6((0,g.x)(a.xN,a),b)},H6=function(a){a.Oj&&(g.v.clearTimeout(a.Oj),a.Oj=null)},E6=function(a){a.o.gx()||a.qh||a.o.yo(a)},D6=function(a){H6(a);
g.he(a.Go);a.Go=null;a.u.stop();g.loa(a.A);if(a.Hc){var b=a.Hc;a.Hc=null;b.abort();b.dispose()}a.Ve&&(a.Ve=null)},C6=function(a,b){try{a.o.vA(a,b),a.o.Qe(4)}catch(c){}},dua=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;cua(a,b,function(k){k?c(!0):g.v.setTimeout(function(){dua(a,b,c,d,f)},f)})}},cua=function(a,b,c){var d=new Image;
d.onload=function(){try{I6(d),c(!0)}catch(e){}};
d.onerror=function(){try{I6(d),c(!1)}catch(e){}};
d.onabort=function(){try{I6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{I6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
qta(d,a)},I6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},J6=function(){},eua=function(a){this.o=a;
this.u=new J6},fua=function(a){var b=K6(a.o,a.Yj,"/mail/images/cleardot.gif");
Z5(b);dua(b.toString(),5E3,(0,g.x)(a.OD,a),3,2E3);a.Qe(1)},M6=function(a){var b=a.o.H;
if(null!=b)B6(5),b?(B6(11),L6(a.o,a,!1)):(B6(12),L6(a.o,a,!0));else if(a.Pd=new x6(a,void 0,void 0,void 0),a.Pd.Jh=a.Qq,b=a.o,b=K6(b,b.Ll()?a.wk:null,a.Rq),B6(5),!g.Jd||g.md(10))$5(b,"TYPE","xmlhttp"),y6(a.Pd,b,!1,a.wk,!1);else{$5(b,"TYPE","html");var c=a.Pd;a=!!a.wk;c.Ni=3;c.ug=Z5(b.clone());aua(c,a)}},N6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return rta(a)},O6=function(a){g.He.call(this);
this.headers=new g.Jm;this.S=a||null;this.w=!1;this.N=this.o=null;this.da=this.H="";this.C=0;this.A="";this.B=this.Z=this.G=this.U=!1;this.F=0;this.J=null;this.ea="";this.P=this.V=!1},gua=function(a){return g.Jd&&g.ld(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},hua=function(a){return"content-type"==a.toLowerCase()},jua=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;iua(a);P6(a)},iua=function(a){a.U||(a.U=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},lua=function(a){if(a.w&&"undefined"!=typeof g.Z1)if(a.N[1]&&4==Q6(a)&&2==a.getStatus())R6(a,"Local request error detected and ignored");
else if(a.G&&4==Q6(a))g.wf(a.ix,0,a);else if(a.dispatchEvent("readystatechange"),4==Q6(a)){R6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Qg(1,String(a.H));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!kua.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<Q6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";iua(a)}}finally{P6(a)}}},P6=function(a,b){if(a.o){mua(a);
var c=a.o,d=a.N[0]?g.Da:null;a.o=null;a.N=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},mua=function(a){a.o&&a.P&&(a.o.ontimeout=null);
a.J&&(g.v.clearTimeout(a.J),a.J=null)},Q6=function(a){return a.o?a.o.readyState:0},S6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},R6=function(a,b){return b+" ["+a.da+" "+a.H+" "+a.getStatus()+"]"},T6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new J6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},nua=function(a,b){this.o=a;
this.map=b;this.context=null},oua=function(a){g.je.call(this,"statevent",a)},pua=function(a,b){g.je.call(this,"timingevent",a);
this.size=b},qua=function(a){g.je.call(this,"serverreachability",a)},tua=function(a){rua(a);
if(3==a.o){var b=a.ql++,c=a.an.clone();Y5(c,"SID",a.w);Y5(c,"RID",b);Y5(c,"TYPE","terminate");U6(a,c);b=new x6(a,a.w,b,void 0);b.Ni=2;b.ug=Z5(c.clone());qta(new Image,b.ug.toString());b.Aj=(0,g.I)();z6(b)}sua(a)},uua=function(a){a.kE(1,0);
a.an=K6(a,null,a.Pq);V6(a)},rua=function(a){a.yg&&(a.yg.abort(),a.yg=null);
a.ac&&(a.ac.cancel(),a.ac=null);a.If&&(g.v.clearTimeout(a.If),a.If=null);W6(a);a.Hd&&(a.Hd.cancel(),a.Hd=null);a.Cg&&(g.v.clearTimeout(a.Cg),a.Cg=null)},vua=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new nua(a.GJ++,b));2!=a.o&&3!=a.o||V6(a)},V6=function(a){a.Hd||a.Cg||(a.Cg=G6((0,g.x)(a.AA,a),0),a.Hi=0)},xua=function(a,b){if(1==a.o){if(!b){a.ql=Math.floor(1E5*Math.random());
var c=a.ql++,d=new x6(a,"",c,void 0);d.Jh=null;var e=X6(a),f=a.an.clone();Y5(f,"RID",c);Y5(f,"CVER","1");U6(a,f);Wta(d,f,e);a.Hd=d;a.o=2}}else 3==a.o&&(b?wua(a,b):0==a.u.length||a.Hd||wua(a))},wua=function(a,b){if(b)if(6<a.rh){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.ql-1;var d=X6(a)}else c=b.G,d=b.di;else c=a.ql++,d=X6(a);var e=a.an.clone();Y5(e,"SID",a.w);Y5(e,"RID",c);Y5(e,"AID",a.aj);U6(a,e);c=new x6(a,a.w,c,a.Hi+1);c.Jh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Hd=c;Wta(c,e,d)},U6=function(a,b){if(a.ld){var c=a.ld.Ew();
c&&g.Jb(c,function(d,e){Y5(b,e,d)})}},X6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.rh&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.rh?e:f-d;try{g.Jb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},yua=function(a){a.ac||a.If||(a.F=1,a.If=G6((0,g.x)(a.zA,a),0),a.Ai=0)},Y6=function(a){if(a.ac||a.If||3<=a.Ai)return!1;
a.F++;a.If=G6((0,g.x)(a.zA,a),zua(a,a.Ai));a.Ai++;return!0},L6=function(a,b,c){a.lp=c;
a.gf=b.Uf;a.C||uua(a)},W6=function(a){null!=a.yh&&(g.v.clearTimeout(a.yh),a.yh=null)},zua=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},Z6=function(a,b){if(2==b||9==b){var c=null;
a.ld&&(c=null);var d=(0,g.x)(a.IO,a);c||(c=new g.Mm("//web.archive.org/web/20200301000226/https://www.google.com/images/cleardot.gif"),Z5(c));cua(c.toString(),1E4,d)}else B6(2);Aua(a,b)},Aua=function(a,b){a.o=0;
a.ld&&a.ld.Qv(b);sua(a);rua(a)},sua=function(a){a.o=0;
a.gf=-1;if(a.ld)if(0==a.A.length&&0==a.u.length)a.ld.Yp();else{g.db(a.A);var b=g.db(a.u);a.A.length=0;a.u.length=0;a.ld.Yp(b)}},K6=function(a,b,c){var d=g.Um(c);
if(""!=d.o)b&&g.Om(d,b+"."+d.o),g.Pm(d,d.B);else{var e=window.location;d=uta(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.jk&&g.Jb(a.jk,function(f,k){Y5(d,k,f)});
Y5(d,"VER",a.rh);U6(a,d);return d},G6=function(a,b){if(!g.Ia(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},B6=function(a){$6.dispatchEvent(new oua($6,a))},Bua=function(){},a7=function(a,b,c){g.B.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.od=b;this.B=(0,g.x)(this.SE,this);this.o=!1;this.u=0;this.w=this.Da=null;this.A=[]},Cua=function(){this.o=[];
this.u=[]},Dua=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.B.call(this);
this.o=new g.K(this.gN,0,this);g.H(this,this.o);this.od=5E3;this.u=0;if(g.Ia(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ia(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.J=a;
this.C=b;this.w=new g.Tn;this.u=new b7(this.mO,this);this.o=null;this.ub=!1;this.B=null;this.H="";this.G=this.A=0;this.F=[];this.P=c||!1},Eua=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.lp,sessionId:a.o.w,arrayId:a.o.aj}},Fua=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&xua(a.o),tua(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},Gua=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Qg(4,a))||"";b&&(this.port=":"+b);this.domain=g.Rg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Gb(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.$g(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ma(a.A,d,!0),onError:g.Ma(a.w,e),Ld:g.Ma(a.B,e)};c&&(a.yb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.rp(b,a)},Kua=function(){var a=Hua;
Iua();h7.push(a);Jua(h7)},i7=function(a,b){Iua();
var c=h7,d=Lua(a,String(b));g.Xa(c)?Mua(d):(Jua(c),(0,g.y)(c,function(e){e(d)}))},Iua=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ca("yt.mdx.remote.debug.handlers_",h7,void 0))},Mua=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},Jua=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},Lua=function(a,b){var c=((0,g.I)()-Nua)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.Q.call(this);
this.F=a;this.o=[]},Oua=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},Pua=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Wd)(a.o,function(f){return!!j6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=Oua(a,b[d])||c;return c},Qua=function(a,b){var c=a.o.length;
a.o=(0,g.Wd)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.Q.call(this);
this.C=a;this.A=b;this.B=c;this.w=d;this.u=0;this.o=null;this.Da=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+h6(this.o))},Rua=function(a){if(a.o.length){var b=(0,g.A)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.dF,a),(0,g.x)(a.cF,a))}},o7=function(a){var b=Ata(Gta());
b=(0,g.Wd)(b,function(c){return!c.uuid});
return Pua(a,b)},q7=function(a,b){Ita((0,g.A)(a.o,yta));
b&&Hta()},s7=function(a,b){g.Q.call(this);
this.C=b;var c=g.js("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Wa(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.Fk(this.o))},Sua=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(a6(b)!=a6(a.o))var c=!1;
else{c=g.Qb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Fk(a.o)),a.o=b,a.R("screenChange"));Tua(a)},u7=function(a){isNaN(a.w)||g.Eo(a.w);
a.w=g.Co((0,g.x)(a.Ct,a),0<a.A&&a.A<(0,g.I)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},Uua=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Sb("Requesting availability of screen w/o lounge token.")});
return b},Tua=function(a){a=g.Qb(g.Kb(a.o,function(b){return b}));
g.nb(a);a.length?g.is("yt-remote-online-screen-ids",a.join(","),60):l6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};Vua(this)},Xua=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.ae();if(k=(c?k6(k,c):null)||k6(k,b)){k.uuid=b;var l=w7(a,k);Sua(a.u,l,function(m){e(m?l:null)})}else c?Wua(a,c,(0,g.x)(function(m){var n=w7(this,new e6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));Sua(this.u,n,function(q){e(q?n:null)})},a),f):e(null)},Yua=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},Wua=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={yb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.rp(f7(a.C,"/pairing/get_lounge_token_batch"),e)},Zua=function(a){a.o=a.w.ae();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+h6(a.o))},Vua=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.lF,a));Zua(a);a.A=Ata(g.js("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+h6(a.A));a.u=new s7(a.C,(0,g.x)(a.ae,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.R("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=k6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.is("yt-remote-automatic-screen-cache",(0,g.A)(a.A,yta)));x7(a);a.B[b.uuid]=b.id;g.is("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.js("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.Q.call(this);
this.N=c;this.H=a;this.u=b;this.w=null},z7=function(a,b){i7(a.N,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.tP,this);this.B=(0,g.x)(this.FN,this);this.A=g.Co((0,g.x)(function(){$ua(this,null)},this),12E4)},ava=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Fk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Da,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Fk(b))},$ua=function(a,b){g.Eo(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.Ao,a),d=(0,g.x)(a.fe,a);a.Xw(b,c,d,5)}}else a.fe(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.J="";this.S=c;this.B=null;this.F=g.Da;this.C=NaN;this.P=(0,g.x)(this.wP,this);this.o=g.Da},bva=function(a){a.o=a.H.BC(a.J,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Da;
this.Ao(b)},a),(0,g.x)(function(b){this.o=g.Da;
this.fe(b)},a))},cva=function(a){var b={};
b.pairingCode=a.J;b.theme=a.S;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}Kta()&&(b.env_useStageMdx=1);return g.Yg(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Co((0,g.x)(this.bj,this,null),150)},D7=function(a,b,c,d){g.Q.call(this);
this.u=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.nM,this)},dva=function(a,b){return b?g.Ta(a.w,function(c){return f6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},Hua=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.he(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.u):a.R("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.yA,a,b)),b.w?a.R("yt-remote-cast2-session-change",b.w):c&&a.o.bj(null)):a.R("yt-remote-cast2-session-change",null))},eva=function(a){var b=a.u.AC(),c=a.o&&a.o.u;
a=(0,g.A)(b,function(d){c&&f6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=dva(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},kva=function(a,b,c,d,e,f,k){fva()?gva(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?hva(a,c):(window.__onGCastApiAvailable=function(l,m){l?hva(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),iva(),c(!1))},d?g.Oo("https://web.archive.org/web/20200301000226/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Rta():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(Qta(),s6(jva.map(Ota))))):H7("Cannot initialize because not running Chrome")},iva=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Ca("yt.mdx.remote.cloudview.instance_",null,void 0);lva(!1);g.Ko(M7);M7.length=0},N7=function(){return!!g.js("yt-remote-cast-installed")},mva=function(){var a=g.js("yt-remote-cast-receiver");
return a?a.friendlyName:null},nva=function(){H7("clearCurrentReceiver");
l6("yt-remote-cast-receiver")},ova=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.Jo("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},fva=function(){var a=0<=g.Hb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Bv||a},pva=function(a,b){L7().init(a,b)},gva=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.is("yt-remote-cast-available",f);c6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.is("yt-remote-cast-receiver",f);c6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.is("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+g6(f));
f||l6("yt-remote-cast-receiver");c6("yt-remote-cast2-session-change",f)}),g.Ca("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},hva=function(a,b){K7(!0);
I7(!1);pva(a,function(c){c?(lva(!0),g.Lo("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),iva());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.is("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},lva=function(a){H7("setApiReady_ "+a);
g.Ca("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Ca("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.o=null;this.hasNext=this.hf=!1;this.H=this.G=this.u=this.A=0;this.w=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.hf=!1;a.hasNext=!1;a.F=0;a.C=(0,g.I)();a.A=0;a.u=0;a.G=0;a.H=0;a.w=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.I)()-a.C)/1E3:0},U7=function(a,b){a.F=b;
a.C=(0,g.I)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.I)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.$b(a.o);b.hasPrevious=a.hf;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.A;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.w;return b},Z7=function(a,b){g.Q.call(this);
this.o=0;this.A=a;this.C=[];this.B=new Cua;this.w=this.u=null;this.H=(0,g.x)(this.oK,this);this.F=(0,g.x)(this.sl,this);this.G=(0,g.x)(this.nK,this);this.J=(0,g.x)(this.zK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.uu,this),qva(this))):c=3;0!=c&&(b?this.uu(c):g.Co((0,g.x)(function(){this.uu(c)},this),0));
var d=ova();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},$7=function(a){return new R7(a.A.getPlayerContextData())},qva=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.Ma(this.kM,b),this))},a)},rva=function(a){(0,g.y)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){rva(a);
a.A.setPlayerContextData(X7(b));qva(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.H),a.w.removeMediaListener(a.F),a.sl(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.H),a.w.addMediaListener(a.F),a.w.media.length&&a.sl(a.w.media[0]))},sva=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Sb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Sb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.Q.call(this);
this.B=NaN;this.P=!1;this.G=this.F=this.H=this.J=NaN;this.N=[];this.A=this.C=this.w=this.Sa=this.o=null;this.U=a;this.N.push(g.Bq(window,"beforeunload",(0,g.x)(this.VE,this)));this.u=[];this.Sa=new R7;this.S=b.id;this.o=tva(this,c);this.o.subscribe("handlerOpened",this.sK,this);this.o.subscribe("handlerClosed",this.pK,this);this.o.subscribe("handlerError",this.qK,this);this.o.subscribe("handlerMessage",this.rK,this);Gua(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Sa.videoId;
g.ks()&&g.is("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},tva=function(a,b){return new c7(f7(a.U,"/bc"),b)},h8=function(a,b){a.R("proxyStateChange",b)},uva=function(a){a.B=g.Co((0,g.x)(function(){g8("Connecting timeout");
this.Fi(1)},a),2E4)},i8=function(a){g.Eo(a.B);
a.B=NaN},j8=function(a){g.Eo(a.J);
a.J=NaN},vva=function(a){k8(a);
a.H=g.Co((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.Eo(a.H);
a.H=NaN},xva=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.Vw()&&a.Sa.reset(),h8(a,1),l8(a,"getNowPlaying"),wva(a)):a.Fi(1)},yva=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Sa.videoId&&(g.Wb(b.params)?a.Sa.o=null:a.Sa.o=b.params,a.R("remotePlayerChange"))},zva=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Sa.listId=b.params.listId||a.Sa.listId;W7(a.Sa,c,d);a.R("remoteQueueChange")},Bva=function(a,b){b.params=b.params||{};
zva(a,b);Ava(a,b);a.R("autoplayDismissed")},Ava=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Sa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Sa.playerState&&(c=-1E3);a.Sa.playerState=c;c=Number(b.params.loadedTime);a.Sa.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Sa.G=isNaN(c)?0:c;c=a.Sa;var d=Number(b.params.liveIngestionTime);c.w=d;c.B=isNaN(d)?!1:!0;c=a.Sa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.A=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Sa.playerState?vva(a):k8(a);a.R("remotePlayerChange")},Cva=function(a,b){if(-1E3!=
a.Sa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Sa.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Sa,isNaN(c)?0:c);a.R("remotePlayerChange")}},Dva=function(a,b){var c="true"==b.params.muted;
a.Sa.volume=parseInt(b.params.volume,10);a.Sa.muted=c;a.R("remotePlayerChange")},Eva=function(a,b){a.C=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},Fva=function(a,b){var c="true"==b.params.hasNext;
a.Sa.hf="true"==b.params.hasPrevious;a.Sa.hasNext=c;a.R("previousNextChange")},wva=function(a){g.Eo(a.G);
a.G=g.Co((0,g.x)(a.Fi,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Fk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.nd=a;this.u=[];this.u.push(this.nd.$_s("screenChange",(0,g.x)(this.rP,this)));this.u.push(this.nd.$_s("onlineScreenChange",(0,g.x)(this.PL,this)))},Kva=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.N("MDX_CONFIG")||b;Cta();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),Kta()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ca("yt.mdx.remote.deferredProxies_",o8,void 0));Gva();var c=p8();if(!c){var d=new v7(n8);g.Ca("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);kva(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){c6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ca("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Fk(b)),s8.push(g.Jo("yt-remote-cast2-availability-change",function(){c6("yt-remote-receiver-availability-change")})),s8.push(g.Jo("yt-remote-cast2-receiver-selected",function(){t8(null);
c6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.Jo("yt-remote-cast2-receiver-resumed",function(){c6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.Jo("yt-remote-cast2-session-change",Hva)),s8.push(g.Jo("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),nva())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.So("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Fk(a)),Iva(a),c.start(),q8()||Jva())},Mva=function(){var a=Lva();
N7()&&g.js("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Lva=function(){var a=p8().nd.$_gos();
var b=w8();b&&x8()&&(j6(a,b)||a.push(b));return Bta(a)},y8=function(){var a=Nva();
!a&&N7()&&mva()&&(a={key:"cast-selector-receiver",name:mva()});return a},Nva=function(){var a=Lva(),b=w8();
b||(b=u8());return g.Ta(a,function(c){return b&&f6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().ae();return k6(b,a)},Hva=function(a){r8("remote.onCastSessionChange_: "+g6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},Ova=function(a){g.Ca("yt.mdx.remote.currentScreenId_",a,void 0)},Pva=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Ca("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||Ova("");g.Ca("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?c6("yt-remote-connection-change",!1):!b&&a&&c6("yt-remote-connection-change",!0)},u8=function(){var a=g.ks();
if(!a)return null;var b=p8().ae();return k6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{Ova(a.id);var c=new f8(n8,a,v8());c.connect(b,Pva());c.subscribe("beforeDisconnect",function(d){c6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},Jva=function(){var a=u8();
a?(r8("Resume connection to: "+g6(a)),A8(a,0)):(q6(),nva(),r8("Skipping connecting because no session screen found."))},Gva=function(){var a=v8();
if(g.Wb(a)){a=o6();var b=g.js("yt-remote-session-name")||"",c=g.js("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ca("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},Iva=function(a){a?(g.is("yt-remote-session-app",a.app),g.is("yt-remote-session-name",a.name)):(l6("yt-remote-session-app"),l6("yt-remote-session-name"));
g.Ca("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.B.call(this);
this.B=a;this.u=b;this.w=new g.P(this);g.H(this,this.w);this.w.L(b,"onCaptionsTrackListChanged",this.lL);this.w.L(b,"captionschanged",this.mK);this.w.L(b,"captionssettingschanged",this.OB);this.w.L(b,"videoplayerreset",this.Bo);this.w.L(b,"mdxautoplaycancel",this.ND);this.S=this.w.L(b,"onVolumeChange",this.fA);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.uA,this);c.subscribe("remotePlayerChange",this.vl,this);c.subscribe("remoteQueueChange",this.Bo,this);c.subscribe("autoplayUpNext",this.Vz,
this);c.subscribe("previousNextChange",this.rA,this);c.subscribe("nowAutoplaying",this.nA,this);c.subscribe("autoplayDismissed",this.Uz,this);this.suggestion=null;this.H=new g.kD(64);this.A=new g.K(this.KB,500,this);g.H(this,this.A);this.C=new g.K(this.LB,1E3,this);g.H(this,this.C);this.P=new a7(this.TO,0,this);g.H(this,this.P);this.F={};this.N=new g.K(this.oC,1E3,this);g.H(this,this.N);this.J=new v6(this.OH,1E3,this);g.H(this,this.J);this.U=g.Da;this.OB();this.Bo();this.vl()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.N=b||0;c.player.R("progresssync",b,d)},Qva=function(a){H8(a,0);
a.A.stop();I8(a,new g.kD(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.bc(c,b));a.o.zB(a.u.getVideoData(1).videoId,c);a.F=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.Xa;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.kf,g.tB(c));I8(a,new g.kD(1))},Rva=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{nT:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.qD(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.fT(a.u.app,d);a.H=b;Sva(a.B,c,b)}},M8=function(){g.V.call(this,{D:"div",
I:"ytp-mdx-popup-dialog",M:{role:"dialog"},K:[{D:"div",I:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",I:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",I:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",I:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",Y:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.u=new g.ZL(this,250);g.H(this,this.u);this.C=this.o["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.w);this.A=this.o["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},N8=function(a){g.V.call(this,{D:"div",
I:"ytp-remote",K:[{D:"div",I:"ytp-remote-display-status",K:[{D:"div",I:"ytp-remote-display-status-icon",K:[g.aM()]},{D:"div",I:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.u=new g.ZL(this,250);g.H(this,this.u);this.w=a;this.L(a,"presentingplayerstatechange",this.A);Tva(this,g.nL(a))},Tva=function(a,b){if(3==a.w.getPresentingPlayerType()){var c={RECEIVER_NAME:a.w.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.EM("Error on $RECEIVER_NAME",c):g.rD(b)||g.W(b,4)?g.EM("Playing on $RECEIVER_NAME",c):g.EM("Connected to $RECEIVER_NAME",c);a.ha("statustext",c);a.u.show()}else a.u.hide()},O8=function(a,b){g.uO.call(this,"Play on",0,a,b);
this.u=a;this.C={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},P8=function(a){g.EP.call(this,a);
this.u={key:i6(),name:"This computer"};this.B=null;this.A=[];this.S=this.o=null;this.J=[this.u];this.w=this.u;this.F=new g.kD(64);this.N=0;this.H=-1;this.C=null;if(!g.Ex(this.player.O())){a=this.player;var b=g.RC(a);b&&(b=b.il())&&(b=new O8(a,b),g.H(this,b));b=new N8(a);g.H(this,b);g.FL(a,b.element,4);this.C=new M8;g.H(this,this.C);g.FL(a,this.C.element,4);this.P=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},Sva=function(a,b,c){a.F=
c;
a.player.R("presentingplayerstatechange",new g.wD(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.R(a.player.O().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.N("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.N("SESSION_INDEX")&&!g.N("LOGGED_IN")))||a.P||!a.C);if(c?0:g.Nx(a.player.O())||"WEB_EMBEDDED_PLAYER"==a.player.O().deviceParams.c)g.rD(g.nL(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.KN,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.u.show(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2==a.player.app.U||1==a.player.app.U)&&g.R(a.player.O().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.wa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.kf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=g.tB(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Fk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?c6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().ae(),(c=k6(c,b.key))&&A8(c,1))}},$ta={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},F6={"'":"\\'"},Uva={},xta={UP:"atp",zS:"ska",oS:"que",HR:"mus",yS:"sus",TQ:"dsp",vS:"seq"};
d6.prototype.zg=function(){var a=new d6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.w=this.w;a.u=this.u;a.o=this.o};
var r6,n6="",Pta=Lta("loadCastFramework")||Lta("loadCastApplicationFramework"),jva=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];u6.prototype.o=null;u6.prototype.getOptions=function(){var a;(a=this.o)||(a={},Tta(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Oa(Sta,u6);S8=new Sta;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Oa(v6,g.B);g.h=v6.prototype;g.h.Mi=!1;g.h.vk=0;g.h.Da=null;g.h.fx=function(a){this.o=arguments;this.Da||this.vk?this.Mi=!0:w6(this)};
g.h.stop=function(){this.Da&&(g.v.clearTimeout(this.Da),this.Da=null,this.Mi=!1,this.o=[])};
g.h.pause=function(){this.vk++};
g.h.resume=function(){this.vk--;this.vk||!this.Mi||this.Da||(this.Mi=!1,w6(this))};
g.h.X=function(){v6.Gb.X.call(this);this.stop()};
g.h.TE=function(){this.Da=null;this.Mi&&!this.vk&&(this.Mi=!1,w6(this))};g.h=x6.prototype;g.h.Jh=null;g.h.Re=!1;g.h.Oj=null;g.h.qu=null;g.h.Aj=null;g.h.Ni=null;g.h.ug=null;g.h.dh=null;g.h.di=null;g.h.Hc=null;g.h.Wl=0;g.h.Ve=null;g.h.np=null;g.h.Gg=null;g.h.xk=-1;g.h.sB=!0;g.h.qh=!1;g.h.Sq=0;g.h.Go=null;var Yta={},A6={};g.h=x6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.XN=function(a){a=a.target;var b=this.Go;b&&3==Q6(a)?b.fx():this.vC(a)};
g.h.vC=function(a){try{if(a==this.Hc)a:{var b=Q6(this.Hc),c=this.Hc.C,d=this.Hc.getStatus();if(g.Jd&&!g.md(10)||g.Ld&&!g.ld("420+")){if(4>b)break a}else if(3>b||3==b&&!g.rh&&!S6(this.Hc))break a;this.qh||4!=b||7==c||(8==c||0>=d?this.o.Qe(3):this.o.Qe(2));H6(this);var e=this.Hc.getStatus();this.xk=e;var f=S6(this.Hc);(this.Re=200==e)?(4==b&&D6(this),this.C?(Zta(this,b,f),g.rh&&this.Re&&3==b&&(this.A.ia(this.u,"tick",this.RN),this.u.start())):C6(this,f),this.Re&&!this.qh&&(4==b?this.o.yo(this):(this.Re=
!1,z6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.Gg=3,B6(13)):(this.Gg=0,B6(14)),D6(this),E6(this))}}catch(k){this.Hc&&S6(this.Hc)}finally{}};
g.h.RN=function(){var a=Q6(this.Hc),b=S6(this.Hc);this.Wl<b.length&&(H6(this),Zta(this,a,b),this.Re&&4!=a&&z6(this))};
g.h.pN=function(a){G6((0,g.x)(this.oN,this,a),0)};
g.h.oN=function(a){this.qh||(H6(this),C6(this,a),z6(this))};
g.h.BA=function(a){G6((0,g.x)(this.nN,this,a),0)};
g.h.nN=function(a){this.qh||(D6(this),this.Re=a,this.o.yo(this),this.o.Qe(4))};
g.h.cancel=function(){this.qh=!0;D6(this)};
g.h.xN=function(){this.Oj=null;var a=(0,g.I)();0<=a-this.qu?(2!=this.Ni&&this.o.Qe(3),D6(this),this.Gg=2,B6(18),E6(this)):bua(this,this.qu-a)};
g.h.getLastError=function(){return this.Gg};J6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
J6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};g.h=eua.prototype;g.h.Qq=null;g.h.Pd=null;g.h.Ho=!1;g.h.hx=null;g.h.Ym=null;g.h.Br=null;g.h.Rq=null;g.h.te=null;g.h.Uf=-1;g.h.wk=null;g.h.Yj=null;g.h.connect=function(a){this.Rq=a;a=K6(this.o,null,this.Rq);B6(3);this.hx=(0,g.I)();var b=this.o.G;null!=b?(this.wk=b[0],(this.Yj=b[1])?(this.te=1,fua(this)):(this.te=2,M6(this))):($5(a,"MODE","init"),this.Pd=new x6(this,void 0,void 0,void 0),this.Pd.Jh=this.Qq,y6(this.Pd,a,!1,null,!0),this.te=0)};
g.h.OD=function(a){if(a)this.te=2,M6(this);else{B6(4);var b=this.o;b.gf=b.yg.Uf;Z6(b,9)}a&&this.Qe(2)};
g.h.iq=function(a){return this.o.iq(a)};
g.h.abort=function(){this.Pd&&(this.Pd.cancel(),this.Pd=null);this.Uf=-1};
g.h.gx=function(){return!1};
g.h.vA=function(a,b){this.Uf=a.xk;if(0==this.te)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.gf=this.Uf;Z6(c,2);return}this.wk=c[0];this.Yj=c[1]}else c=this.o,c.gf=this.Uf,Z6(c,2);else if(2==this.te)if(this.Ho)B6(7),this.Br=(0,g.I)();else if("11111"==b){if(B6(6),this.Ho=!0,this.Ym=(0,g.I)(),c=this.Ym-this.hx,!g.Jd||g.md(10)||500>c)this.Uf=200,this.Pd.cancel(),B6(12),L6(this.o,this,!0)}else B6(8),this.Ym=this.Br=(0,g.I)(),this.Ho=!1};
g.h.yo=function(){this.Uf=this.Pd.xk;if(this.Pd.Re)0==this.te?this.Yj?(this.te=1,fua(this)):(this.te=2,M6(this)):2==this.te&&((!g.Jd||g.md(10)?!this.Ho:200>this.Br-this.Ym)?(B6(11),L6(this.o,this,!1)):(B6(12),L6(this.o,this,!0)));else{0==this.te?B6(9):2==this.te&&B6(10);var a=this.o;this.Pd.getLastError();a.gf=this.Uf;Z6(a,2)}};
g.h.Ll=function(){return this.o.Ll()};
g.h.isActive=function(){return this.o.isActive()};
g.h.Qe=function(a){this.o.Qe(a)};g.Oa(O6,g.He);var kua=/^https?$/i,Vva=["POST","PUT"];g.h=O6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.A="";this.C=0;this.da=b;this.U=!1;this.w=!0;this.o=this.S?Uta(this.S):Uta(S8);this.N=this.S?this.S.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.ix,this);try{b6(R6(this,"Opening Xhr")),this.Z=!0,this.o.open(b,String(a),!0),this.Z=!1}catch(f){b6(R6(this,"Error opening Xhr: "+f.message));jua(this,f);return}a=c||
"";var e=this.headers.clone();d&&tta(d,function(f,k){e.set(k,f)});
d=g.Ta(e.qe(),hua);c=g.v.FormData&&a instanceof g.v.FormData;!g.Wa(Vva,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.ea&&(this.o.responseType=this.ea);"withCredentials"in this.o&&this.o.withCredentials!==this.V&&(this.o.withCredentials=this.V);try{mua(this),0<this.F&&(this.P=gua(this.o),b6(R6(this,"Will abort after "+this.F+"ms if incomplete, xhr2 "+this.P)),this.P?(this.o.timeout=this.F,this.o.ontimeout=(0,g.x)(this.jx,this)):this.J=g.wf(this.jx,this.F,this)),b6(R6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){b6(R6(this,"Send error: "+f.message)),jua(this,f)}};
g.h.jx=function(){"undefined"!=typeof g.Z1&&this.o&&(this.A="Timed out after "+this.F+"ms, aborting",this.C=8,R6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(R6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),P6(this))};
g.h.X=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),P6(this,!0));O6.Gb.X.call(this)};
g.h.ix=function(){this.la()||(this.Z||this.G||this.B?lua(this):this.mM())};
g.h.mM=function(){lua(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<Q6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=T6.prototype;g.h.jk=null;g.h.Hd=null;g.h.ac=null;g.h.Pq=null;g.h.an=null;g.h.Ev=null;g.h.pn=null;g.h.ql=0;g.h.GJ=0;g.h.ld=null;g.h.Cg=null;g.h.If=null;g.h.yh=null;g.h.yg=null;g.h.lp=null;g.h.aj=-1;g.h.Ux=-1;g.h.gf=-1;g.h.Hi=0;g.h.Ai=0;g.h.rh=8;var $6=new g.He;g.Oa(oua,g.je);g.Oa(pua,g.je);g.Oa(qua,g.je);g.h=T6.prototype;g.h.connect=function(a,b,c,d,e){B6(0);this.Pq=b;this.jk=c||{};d&&void 0!==e&&(this.jk.OSID=d,this.jk.OAID=e);this.C?(G6((0,g.x)(this.Wv,this,a),100),uua(this)):this.Wv(a)};
g.h.Wv=function(a){this.yg=new eua(this);this.yg.Qq=null;this.yg.u=this.B;this.yg.connect(a)};
g.h.gx=function(){return 0==this.o};
g.h.AA=function(a){this.Cg=null;xua(this,a)};
g.h.zA=function(){this.If=null;this.ac=new x6(this,this.w,"rpc",this.F);this.ac.Jh=null;this.ac.Sq=0;var a=this.Ev.clone();Y5(a,"RID","rpc");Y5(a,"SID",this.w);Y5(a,"CI",this.lp?"0":"1");Y5(a,"AID",this.aj);U6(this,a);if(!g.Jd||g.md(10))Y5(a,"TYPE","xmlhttp"),y6(this.ac,a,!0,this.pn,!1);else{Y5(a,"TYPE","html");var b=this.ac,c=!!this.pn;b.Ni=3;b.ug=Z5(a.clone());aua(b,c)}};
g.h.vA=function(a,b){if(0!=this.o&&(this.ac==a||this.Hd==a))if(this.gf=a.xk,this.Hd==a&&3==this.o)if(7<this.rh){try{var c=this.B.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.If){if(this.ac)if(this.ac.Aj+3E3<this.Hd.Aj)W6(this),this.ac.cancel(),this.ac=null;else break a;Y6(this);B6(19)}}else this.Ux=c[1],0<this.Ux-this.aj&&37500>c[2]&&this.lp&&0==this.Ai&&!this.yh&&(this.yh=G6((0,g.x)(this.iK,this),6E3));else Z6(this,11)}else b!=Uva.rQ.o&&Z6(this,11);else if(this.ac==
a&&W6(this),!g.ub(b)){c=this.B.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.aj=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.pn=e[2],e=e[3],null!=e?this.rh=e:this.rh=6,this.o=3,this.ld&&this.ld.Sv(),this.Ev=K6(this,this.Ll()?this.pn:null,this.Pq),yua(this)):"stop"==e[0]&&Z6(this,7):3==this.o&&("stop"==e[0]?Z6(this,7):"noop"!=e[0]&&this.ld&&this.ld.Rv(e),this.Ai=0)}}};
g.h.iK=function(){null!=this.yh&&(this.yh=null,this.ac.cancel(),this.ac=null,Y6(this),B6(20))};
g.h.yo=function(a){if(this.ac==a){W6(this);this.ac=null;var b=2}else if(this.Hd==a)this.Hd=null,b=1;else return;this.gf=a.xk;if(0!=this.o)if(a.Re)1==b?(b=(0,g.I)()-a.Aj,$6.dispatchEvent(new pua($6,a.di?a.di.length:0,b,this.Hi)),V6(this),this.A.length=0):yua(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.gf)){if(d=1==b)this.Hd||this.Cg||1==this.o||2<=this.Hi?d=!1:(this.Cg=G6((0,g.x)(this.AA,this,a),zua(this,this.Hi)),this.Hi++,d=!0);d=!(d||2==b&&Y6(this))}if(d)switch(c){case 1:Z6(this,
5);break;case 4:Z6(this,10);break;case 3:Z6(this,6);break;case 7:Z6(this,12);break;default:Z6(this,2)}}};
g.h.kE=function(a){if(!g.Wa(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.IO=function(a){a?B6(2):(B6(1),Aua(this,8))};
g.h.iq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new O6;a.V=!1;return a};
g.h.isActive=function(){return!!this.ld&&this.ld.isActive(this)};
g.h.Qe=function(a){$6.dispatchEvent(new qua($6,a))};
g.h.Ll=function(){return!(!g.Jd||g.md(10))};
g.h=Bua.prototype;g.h.Sv=function(){};
g.h.Rv=function(){};
g.h.Qv=function(){};
g.h.Yp=function(){};
g.h.Ew=function(){return{}};
g.h.isActive=function(){return!0};g.Oa(a7,g.B);g.h=a7.prototype;g.h.RE=function(a){this.A=arguments;this.o=!1;this.Da?this.w=(0,g.I)()+this.od:this.Da=g.wf(this.B,this.od)};
g.h.stop=function(){this.Da&&(g.v.clearTimeout(this.Da),this.Da=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.X=function(){this.stop();a7.Gb.X.call(this)};
g.h.SE=function(){this.w?(this.Da=g.wf(this.B,this.w-(0,g.I)()),this.w=null):(this.Da=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};g.h=Cua.prototype;g.h.isEmpty=function(){return g.Xa(this.o)&&g.Xa(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.Wa(this.o,a)||g.Wa(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.qoa)(b,a);0<=c?(g.$a(b,c),b=!0):b=!1;return b||g.ab(this.u,a)};
g.h.zd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Oa(b7,g.B);g.h=b7.prototype;g.h.gN=function(){this.od=Math.min(3E5,2*this.od);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.od+15E3*Math.random();g.vn(this.o,a);this.u=(0,g.I)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.od=5E3};g.Oa(c7,Bua);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.gg=function(a){return this.w.Kh(a)};
g.h.R=function(a,b){return this.w.R.apply(this.w,arguments)};
g.h.dispose=function(){this.ub||(this.ub=!0,g.he(this.w),Fua(this),g.he(this.u),this.u=null)};
g.h.la=function(){return this.ub};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new T6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.P),e=this.o;e&&(e.ld=null);d.ld=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.aj):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.bc(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.F.push(c):d7(this)&&vua(this.o,c)};
g.h.Sv=function(){this.u.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)vua(this.o,a[b])}this.R("handlerOpened")};
g.h.Qv=function(a){var b=2==a&&401==this.o.gf;4==a||b||this.u.start();this.R("handlerError",a)};
g.h.Yp=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.Ew=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.bc(a,this.B);return a};
g.h.Rv=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),tua(this.o)):this.R("handlerMessage",new Dua(a[0],a[1]))};
g.h.mO=function(){this.u.isActive();var a=this.o,b=0;a.ac&&b++;a.Hd&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var Nua=(0,g.I)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Oa(m7,g.Q);m7.prototype.ae=function(){return this.o};
m7.prototype.contains=function(a){return!!j6(this.o,a)};
m7.prototype.get=function(a){return a?k6(this.o,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.r(n7,g.Q);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Da)&&this.zC()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Da)||(g.Eo(this.Da),this.Da=NaN)};
g.h.X=function(){this.stop();g.Q.prototype.X.call(this)};
g.h.zC=function(){this.Da=NaN;this.o=g.rp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:this.A},timeout:5E3,onSuccess:(0,g.x)(this.pP,this),onError:(0,g.x)(this.oP,this),Ld:(0,g.x)(this.qP,this)})};
g.h.pP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.w;this.R("pairingComplete",new e6(c))};
g.h.oP=function(a){this.o=null;a.status&&404==a.status?this.u>=Wva.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=Wva[this.u],this.Da=g.Co((0,g.x)(this.zC,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.qP=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var Wva=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Oa(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.R("screenChange");!g.js("yt-remote-lounge-token-expiration")&&Rua(this);g.Eo(this.u);this.u=g.Co((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);Oua(this,a);q7(this,!1);this.R("screenChange");b(a);a.token||Rua(this)};
g.h.remove=function(a,b){var c=o7(this);Qua(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.ip=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.X=function(){g.Eo(this.u);p7.Gb.X.call(this)};
g.h.dF=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.cF=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.r(s7,g.Q);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.js("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.I)()-144E5<a?0:a)?u7(this):(this.A=(0,g.I)()+3E5,g.is("yt-remote-fast-check-period",this.A),this.Ct())};
g.h.isEmpty=function(){return g.Wb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Kb(this.o,function(c,d){return c&&!!k6(a,d)},this);
t7(this,b)};
g.h.X=function(){g.Eo(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.X.call(this)};
g.h.Ct=function(){g.Eo(this.w);this.w=NaN;this.u&&this.u.abort();var a=Uua(this);if(a6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Qb(a).join(",")},(0,g.x)(this.JM,this,a),(0,g.x)(this.IM,this))}else t7(this,{}),u7(this)};
g.h.JM=function(a,b){this.u=null;var c=g.Qb(Uua(this));if(g.ob(c,g.Qb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Sb("Changing Screen set during request."),this.Ct()};
g.h.IM=function(a){this.Sb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Sb=function(a){i7("OnlineScreenService",a)};g.Oa(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.R("screenChange"),this.u.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.ip=function(a,b,c,d){this.w.contains(a)?this.w.ip(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.ae=function(a){return a?this.o:g.cb(this.o,(0,g.Wd)(this.A,function(b){return!this.contains(b)},this))};
g.h.AC=function(){return(0,g.Wd)(this.ae(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.BC=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.he(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.he(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.sP=function(a,b,c,d){g.rp(f7(this.C,"/pairing/get_screen"),{method:"POST",yb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new e6(f.screen||{});if(!k.name||Yua(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);Yua(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Ld:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.he(this.w);g.he(this.u);v7.Gb.X.call(this)};
g.h.lF=function(){Zua(this);this.R("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Oa(y7,g.Q);g.h=y7.prototype;g.h.Ao=function(a){this.w=a;this.R("sessionScreen",this.w)};
g.h.fe=function(a){this.la()||(a&&z7(this,""+a),this.w=null,this.R("sessionScreen",null))};
g.h.info=function(a){i7(this.N,a)};
g.h.DC=function(){return null};
g.h.Lt=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.Lt("");y7.Gb.X.call(this)};g.Oa(A7,y7);g.h=A7.prototype;g.h.Kt=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);ava(this)};
g.h.bj=function(a){this.info("launchWithParams no-op for Cast: "+g.Fk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.fe()},this),(0,g.x)(function(){this.fe(Error("Failed to stop receiver app."))},this)):this.fe(Error("Stopping cast device witout session."))};
g.h.Lt=g.Da;g.h.X=function(){this.info("disposeInternal");g.Eo(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.Gb.X.call(this)};
g.h.FN=function(a,b){if(!this.la())if(b){var c=N6(b);if(g.Ja(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Fk(c));switch(d){case "mdxSessionStatus":$ua(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.Xw=function(a,b,c,d){Xua(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Co((0,g.x)(this.Xw,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.DC=function(){return this.o};
g.h.tP=function(a){this.la()||a||(z7(this,"Cast session died."),this.fe())};g.Oa(B7,y7);g.h=B7.prototype;g.h.Kt=function(a){this.A=a;this.A.addUpdateListener(this.P)};
g.h.bj=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Da;g.Eo(this.C);this.A?this.A.stop((0,g.x)(this.fe,this,null),(0,g.x)(this.fe,this,"Failed to stop DIAL device.")):this.fe()};
g.h.X=function(){this.o();this.o=g.Da;g.Eo(this.C);this.A&&this.A.removeUpdateListener(this.P);this.A=null;B7.Gb.X.call(this)};
g.h.wP=function(a){this.la()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Da,this.fe())};
g.h.er=function(a){this.J=i6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,cva(this));a(b);bva(this)}else this.F=(0,g.x)(function(){g.Eo(this.C);this.F=g.Da;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,cva(this));a(c);bva(this)},this),this.C=g.Co((0,g.x)(function(){this.F()},this),100)};
g.h.FF=function(a,b,c){Xua(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.Ao(d),b(new chrome.cast.DialLaunchResponse(!1))):this.er(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.er(b,c)},this))};g.Oa(C7,y7);C7.prototype.stop=function(){this.fe()};
C7.prototype.Kt=g.Da;C7.prototype.bj=function(){g.Eo(this.o);this.o=NaN;var a=k6(this.H.ae(),this.u.label);a?this.Ao(a):this.fe(Error("No such screen"))};
C7.prototype.X=function(){g.Eo(this.o);this.o=NaN;C7.Gb.X.call(this)};g.Oa(D7,g.Q);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.rM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.xA,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.HK,this);chrome.cast.initialize(c,(0,g.x)(function(){this.la()||
(chrome.cast.addReceiverActionListener(this.A),Kua(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.CC,this)),this.w=eva(this),chrome.cast.setCustomReceivers(this.w,g.Da,(0,g.x)(function(k){this.Sb("Failed to set initial custom receivers: "+g.Fk(k))},this)),this.R("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Sb("Failed to initialize API: "+g.Fk(k));
b(!1)},this))};
g.h.uO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=k6(this.u.ae(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=dva(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Da,(0,g.x)(function(e){this.Sb("Failed to set initial custom receivers: "+g.Fk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.Lt(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.vO=function(a){this.la()?this.Sb("Setting connection data on disposed cast v2"):this.o?this.o.bj(a):this.Sb("Setting connection data without a session")};
g.h.vP=function(){this.la()?this.Sb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.xA,this),(0,g.x)(this.OM,this))};
g.h.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.CC,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=Hua,b=g.w("yt.mdx.remote.debug.handlers_");g.ab(b||[],a);g.he(this.o);D7.Gb.X.call(this)};
g.h.Sb=function(a){i7("Controller",a)};
g.h.yA=function(a,b){this.o==a&&(b||G7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.nM=function(a,b){if(!this.la())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.R("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Sb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Sb("Stopping receiver w/o session: "+a.friendlyName)}else this.Sb("onReceiverAction_ called without receiver.")};
g.h.HK=function(a){if(this.la())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Sb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Sb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Sb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.FF,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.er,b))};
g.h.xA=function(a){if(!this.la()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Sb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=k6(this.u.ae(),c.label);d&&f6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.he(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.yA,this,this.o)),this.o.bj(null));this.o.Kt(a)}}};
g.h.uP=function(){return this.o?this.o.DC():null};
g.h.OM=function(a){this.la()||(this.Sb("Failed to estabilish a session: "+g.Fk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.rM=function(a){E7("Receiver availability updated: "+a);if(!this.la()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.R("yt-remote-cast2-availability-change",F7(this))}};
g.h.CC=function(){this.la()||(this.w=eva(this),E7("Updating custom receivers: "+g.Fk(this.w)),chrome.cast.setCustomReceivers(this.w,g.Da,(0,g.x)(function(){this.Sb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.vO;D7.prototype.setConnectedScreenStatus=D7.prototype.uO;D7.prototype.stopSession=D7.prototype.vP;D7.prototype.getCastSession=D7.prototype.uP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.hf=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.A=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.w=a.liveIngestionTime,this.B=
!isNaN(this.w))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.Q);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Da,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Da,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Da,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.R("remotePlayerChange")}else a8(this,g.Ma(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Da,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.R("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Sb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Sb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Ma(this.setVolume,a,b))};
g.h.zB=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Fk(b.style),g.bc(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Ma(this.zB,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Ma(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Fk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.yC=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Ma(this.yC,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Ma(this.nextVideo,a,b))};
g.h.hw=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.hw)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.Q.prototype.dispose.call(this)};
g.h.X=function(){rva(this);this.A=null;this.B.clear();Y7(this,null);g.Q.prototype.X.call(this)};
g.h.uu=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.Xa(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.kM=function(a,b){this.R(a,b)};
g.h.oK=function(a){if(!a)this.sl(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.sl=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),sva(this),this.R("remotePlayerChange")};
g.h.nK=function(a){a?(sva(this),this.R("remotePlayerChange")):this.sl(null)};
g.h.zK=function(){var a=ova();a&&Y7(this,a)};
g.h.Sb=function(a){i7("CP",a)};g.r(f8,g.Q);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Sa.listId=c);this.Sa.videoId=d;this.Sa.index=k||0;this.Sa.state=3;U7(this.Sa,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Fk(l));this.o.connect({method:"setPlaylist",
params:g.Fk(l)},a,Fta())}else g8("Connecting without params"),this.o.connect({},a,Fta());uva(this)};
g.h.dispose=function(){this.la()||(this.R("beforeDispose"),h8(this,3));g.Q.prototype.dispose.call(this)};
g.h.X=function(){i8(this);k8(this);j8(this);g.Eo(this.F);this.F=NaN;g.Eo(this.G);this.G=NaN;this.w=null;g.Cq(this.N);this.N.length=0;this.o.dispose();g.Q.prototype.X.call(this);this.A=this.C=this.u=this.Sa=this.o=null};
g.h.VE=function(){this.Fi(2)};
g.h.sK=function(){g8("Channel opened");this.P&&(this.P=!1,j8(this),this.J=g.Co((0,g.x)(function(){g8("Timing out waiting for a screen.");this.Fi(1)},this),15E3));
Jta(Eua(this.o),this.S)};
g.h.pK=function(){g8("Channel closed");isNaN(this.B)?q6(!0):q6();this.dispose()};
g.h.qK=function(a){q6();isNaN(this.pk())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.P=!0,g8("Channel error: "+a+" with reconnection in "+this.pk()+" ms"),h8(this,2))};
g.h.rK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Fk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=N6(a.params.devices);this.u=(0,g.A)(a,function(c){return new d6(c)});
a=!!g.Ta(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
xva(this,a);break;case "loungeScreenDisconnected":g.bb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
xva(this,!1);break;case "remoteConnected":var b=new d6(N6(a.params.device));g.Ta(this.u,function(c){return b?c.id==b.id:!1})||pta(this.u,b);
break;case "remoteDisconnected":b=new d6(N6(a.params.device));g.bb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":zva(this,a);break;case "nowPlaying":Bva(this,a);break;case "onStateChange":Ava(this,a);break;case "onAdStateChange":Cva(this,a);break;case "onVolumeChanged":Dva(this,a);break;case "onSubtitlesTrackChanged":yva(this,a);break;case "nowAutoplaying":Eva(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.R("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":Fva(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.iO=function(){if(this.w){var a=this.w;this.w=null;this.Sa.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.KE=function(){var a=3;this.la()||(a=0,isNaN(this.pk())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.Fi=function(a){g8("Disconnecting with "+a);i8(this);this.R("beforeDisconnect",a);1==a&&q6();Fua(this.o,a);this.dispose()};
g.h.JE=function(){var a=this.Sa;this.w&&(a=this.Sa.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.wO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Sa.videoId&&(this.w=b.videoId,g.Eo(this.F),this.F=g.Co((0,g.x)(this.iO,this),5E3));var c=[];this.Sa.listId==b.listId&&this.Sa.videoId==b.videoId&&this.Sa.index==b.index||c.push("remoteQueueChange");this.Sa.playerState==b.playerState&&this.Sa.volume==b.volume&&this.Sa.muted==b.muted&&V7(this.Sa)==V7(b)&&g.Fk(this.Sa.o)==g.Fk(b.o)||c.push("remotePlayerChange");this.Sa.reset(a);(0,g.y)(c,function(d){this.R(d)},this)};
g.h.Vw=function(){var a=this.o.C.id,b=g.Ta(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.pk=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.I)():NaN};
g.h.yE=function(){return this.A||"UNSUPPORTED"};
g.h.zE=function(){return this.C||""};
g.h.nP=function(){if(!isNaN(this.pk())){var a=this.o.u;g.wn(a.o);a.start()}};
g.h.rO=function(a,b){l8(this,a,b);wva(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.gg;f8.prototype.getProxyState=f8.prototype.KE;f8.prototype.disconnect=f8.prototype.Fi;f8.prototype.getPlayerContextData=f8.prototype.JE;f8.prototype.setPlayerContextData=f8.prototype.wO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.Vw;f8.prototype.getReconnectTimeout=f8.prototype.pk;f8.prototype.getAutoplayMode=f8.prototype.yE;f8.prototype.getAutoplayVideoId=f8.prototype.zE;f8.prototype.reconnect=f8.prototype.nP;
f8.prototype.sendMessage=f8.prototype.rO;g.r(m8,m7);g.h=m8.prototype;g.h.ae=function(a){return this.nd.$_gs(a)};
g.h.contains=function(a){return!!this.nd.$_c(a)};
g.h.get=function(a){return this.nd.$_g(a)};
g.h.start=function(){this.nd.$_st()};
g.h.add=function(a,b,c){this.nd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.nd.$_r(a,b,c)};
g.h.ip=function(a,b,c,d){this.nd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.u.length;a<b;++a)this.nd.$_ubk(this.u[a]);this.u.length=0;this.nd=null;m7.prototype.X.call(this)};
g.h.rP=function(){this.R("screenChange")};
g.h.PL=function(){this.R("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.sP;v7.prototype.$_gsppc=v7.prototype.BC;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.ip;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.ae;v7.prototype.$_gos=v7.prototype.AC;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.gg;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.B);g.h=G8.prototype;
g.h.X=function(){g.B.prototype.X.call(this);this.A.stop();this.C.stop();this.P.stop();this.U();this.o.unsubscribe("proxyStateChange",this.uA,this);this.o.unsubscribe("remotePlayerChange",this.vl,this);this.o.unsubscribe("remoteQueueChange",this.Bo,this);this.o.unsubscribe("autoplayUpNext",this.Vz,this);this.o.unsubscribe("previousNextChange",this.rA,this);this.o.unsubscribe("nowAutoplaying",this.nA,this);this.o.unsubscribe("autoplayDismissed",this.Uz,this);this.o=this.B=null};
g.h.Uy=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.fx(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.mK=function(a){this.P.RE(a)};
g.h.TO=function(a){this.Uy("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.OB=function(){var a=this.u.getOption("captions","track");g.Wb(a)||K8(this,a)};
g.h.fA=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.vl,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.N.start();this.o.subscribe("remotePlayerChange",this.vl,this)}};
g.h.lL=function(){g.Wb(this.F)||Rva(this,this.F);this.G=!1};
g.h.uA=function(a,b){this.C.stop();2==b&&this.LB()};
g.h.vl=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.kD(8));this.KB();break;case 1085:case 3:I8(this,new g.kD(9));break;case 1083:case 0:I8(this,new g.kD(2));this.J.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.kD(4));break;case 2:I8(this,new g.kD(4));H8(this,V7(a));
break;case -1:I8(this,new g.kD(64));break;case -1E3:I8(this,new g.kD(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.F=a,Rva(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.N.isActive()||this.oC()}else Qva(this)};
g.h.rA=function(){this.u.R("mdxpreviousnextchange")};
g.h.Bo=function(){J8(this)||Qva(this)};
g.h.ND=function(){this.o.hw()};
g.h.Vz=function(){};
g.h.nA=function(a){isNaN(a)||this.u.R("mdxnowautoplaying",a)};
g.h.Uz=function(){this.u.R("mdxautoplaycanceled")};
g.h.OH=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.oC=function(){if(J8(this)){var a=$7(this.o);this.w.Wa(this.S);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.S=this.w.L(this.u,"onVolumeChange",this.fA)}};
g.h.KB=function(){this.A.stop();if(!this.o.la()){var a=$7(this.o);1==a.playerState&&I8(this,new g.kD(8));H8(this,V7(a));this.A.start()}};
g.h.LB=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.V);M8.prototype.w=function(){c6("mdx-privacy-popup-cancel");this.u.hide()};
M8.prototype.B=function(){c6("mdx-privacy-popup-confirm");this.u.hide()};g.r(N8,g.V);N8.prototype.A=function(a){Tva(this,a.state)};g.r(O8,g.uO);O8.prototype.J=function(){var a=this.u.getOption("remote","receivers");a&&1<a.length&&!this.u.getOption("remote","quickCast")?(this.C=g.qb(a,this.B,this),g.wO(this,(0,g.A)(a,this.B)),a=this.u.getOption("remote","currentReceiver"),this.ze(this.B(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.B=function(a){return a.key};
O8.prototype.Oe=function(a){return"cast-selector-receiver"==a?"Cast...":this.C[a].name};
O8.prototype.Wc=function(a){g.uO.prototype.Wc.call(this,a);this.u.setOption("remote","currentReceiver",this.C[a]);this.w.gb()};g.r(P8,g.EP);g.h=P8.prototype;
g.h.create=function(){Kva(g.vx(this.player.O()));this.A.push(g.Jo("yt-remote-before-disconnect",this.jK,this));this.A.push(g.Jo("yt-remote-connection-change",this.sM,this));this.A.push(g.Jo("yt-remote-receiver-availability-change",this.sA,this));this.A.push(g.Jo("yt-remote-auto-connect",this.qM,this));this.A.push(g.Jo("yt-remote-receiver-resumed",this.pM,this));this.A.push(g.Jo("mdx-privacy-popup-confirm",this.UN,this));this.A.push(g.Jo("mdx-privacy-popup-cancel",this.TN,this));this.sA()};
g.h.load=function(){this.player.cancelPlayback();g.EP.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=Pva())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.N=a||0,this.player.R("progresssync",a,void 0));Sva(this,this.F,this.F);g.lT(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.w=this.u;g.ie(this.B,this.o);this.o=this.B=null;g.EP.prototype.unload.call(this);g.lT(this.player.app,5);Q8(this)};
g.h.X=function(){g.Ko(this.A);g.EP.prototype.X.call(this)};
g.h.dl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.Uy.apply(this.B,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.H};
g.h.ME=function(){return this.loaded?this.B.suggestion:null};
g.h.hf=function(){return this.o?$7(this.o).hf:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.N};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.O().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Nc():!a.isAdPlaying()&&this.player.Nc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.w+T7(a):a.w,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.A?a.A+T7(a):
a.A}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.uH=function(){this.o&&this.o.yC()};
g.h.jK=function(a){1==a&&(this.S=this.o?$7(this.o):null)};
g.h.sM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.S=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.he(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.S)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.sA=function(){this.J=[this.u].concat(Mva());var a=y8()||this.u;R8(this,a);this.player.ka("onMdxReceiversChange")};
g.h.KN=function(a){!this.P&&g.yD(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.qM=function(){var a=y8();R8(this,a)};
g.h.pM=function(){this.w=y8()};
g.h.UN=function(){this.P=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.TN=function(){this.P=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Kc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.J;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.J.length&&"cast-selector-receiver"==this.J[1].key?(b&&P7(),!0):!1}};
g.h.vH=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.yf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.TP.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:02:26 Mar 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:59:13 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 280.514
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.096
  cdx.remote: 0.063
  esindex: 0.01
  LoadShardBlock: 27.65 (3)
  PetaboxLoader3.datanode: 83.067 (5)
  load_resource: 151.333 (2)
  PetaboxLoader3.resolve: 88.116 (2)
*/