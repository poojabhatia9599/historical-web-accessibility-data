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

(function(g){var window=this;var Mva=function(a,b){return g.Jb(a,b)},Y5=function(a,b,c){a.w.set(b,c)},Z5=function(a){Y5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.G)()).toString(36));
return a},$5=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.$m(a.w,b,c)},Nva=function(a,b){var c=[];
g.ik(b,function(d){try{var e=g.fo.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.eo(e)&&c.push(d)},a);
return c},Ova=function(a,b){var c=Nva(a,b);
(0,g.y)(c,function(d){g.fo.prototype.remove.call(this,d)},a)},Pva=function(a){if(a.Sc){if(a.Sc.locationOverrideToken)return{locationOverrideToken:a.Sc.locationOverrideToken};
if(null!=a.Sc.latitudeE7&&null!=a.Sc.longitudeE7)return{latitudeE7:a.Sc.latitudeE7,longitudeE7:a.Sc.longitudeE7}}return null},Qva=function(a,b){g.bb(a,b)||a.push(b)},a6=function(a){var b=0,c;
for(c in a)b++;return b},Rva=function(a,b){var c=b instanceof g.uc?b:g.yc(b,/^data:image\//i.test(b));
a.src=g.vc(c)},b6=function(){},Sva=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Tva=function(a){if(a.Id&&"function"==typeof a.Id)return a.Id();
if("string"===typeof a)return a.split("");if(g.Na(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Fb(a)},Uva=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Na(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.ye&&"function"==typeof a.ye)var c=a.ye();else if(a.Id&&"function"==typeof a.Id)c=void 0;else if(g.Na(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Gb(a);d=Tva(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Vva=function(a,b,c,d){var e=new g.Om(null,void 0);
a&&g.Pm(e,a);b&&g.Qm(e,b);c&&g.Rm(e,c);d&&(e.u=d);return e},c6=function(a,b){g.Qo[a]=!0;
var c=g.Oo();c&&c.publish.apply(c,arguments);g.Qo[a]=!1},d6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Lm;a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Wva(this,a.capabilities||""),Xva(this,a.experiments||""))},Wva=function(a,b){a.capabilities.clear();
(0,g.we)(b.split(","),g.Sa(Mva,Yva)).forEach(function(c){a.capabilities.add(c)})},Xva=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},e6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},f6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Zva=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},$va=function(a){return new e6(a)},awa=function(a){return g.Ma(a)?(0,g.Ec)(a,$va):[]},g6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},h6=function(a){return g.Ma(a)?"["+(0,g.Ec)(a,g6).join(",")+"]":"null"},i6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},bwa=function(a){return(0,g.Ec)(a,function(b){return{key:b.id,
name:b.name}})},j6=function(a,b){return g.Za(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},k6=function(a,b){return g.Za(a,function(c){return f6(c,b)})},l6=function(a){try{var b=(0,g.Fs)(),c=(0,g.Es)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},cwa=function(){var a=(0,g.Es)();
a&&Ova(a,a.o.Zf(!0))},m6=function(){var a=g.Hs("yt-remote-connected-devices")||[];
g.sb(a);return a},dwa=function(a){if(g.cb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.Ec)(a,function(d,e){return 0==e?d:d.substring(c.length)})},ewa=function(a){g.Gs("yt-remote-connected-devices",a,86400)},o6=function(){if(n6)return n6;
var a=g.Hs("yt-remote-device-id");a||(a=i6(),g.Gs("yt-remote-device-id",a,31536E3));for(var b=m6(),c=1,d=a;g.bb(b,d);)c++,d=a+"#"+c;return n6=d},p6=function(){var a=m6(),b=o6();
g.bb(a,b);g.Is()&&g.ub(a,b);a=dwa(a);if(g.cb(a))try{g.Sq("remote_sid")}catch(c){}else try{g.Qq("remote_sid",a.join(","),-1)}catch(c){}},fwa=function(){return g.Hs("yt-remote-session-browser-channel")},gwa=function(){return g.Hs("yt-remote-local-screens")||[]},hwa=function(){g.Gs("yt-remote-lounge-token-expiration",!0,86400)},iwa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.Ec)(gwa(),function(d){return d.loungeToken}),c=(0,g.Ec)(a,function(d){return d.loungeToken});
(0,g.ui)(c,function(d){return!g.bb(b,d)})&&hwa();
g.Gs("yt-remote-local-screens",a,31536E3)},jwa=function(a,b){g.Gs("yt-remote-session-browser-channel",a);
g.Gs("yt-remote-session-screen-id",b);var c=m6(),d=o6();g.bb(c,d)||c.push(d);ewa(c);p6()},q6=function(a){a||(l6("yt-remote-session-screen-id"),l6("yt-remote-session-video-id"));
p6();a=m6();g.fb(a,o6());ewa(a)},kwa=function(){if(!r6){var a=g.po();
a&&(r6=new g.Zn(a))}return r6?!!r6.get("yt-remote-use-staging-server"):!1},lwa=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},mwa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},s6=function(a){a.length?nwa(a.shift(),function(){s6(a)}):t6()},owa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},nwa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},t6=function(){var a=mwa();
a&&a(!1,"No cast extension found")},qwa=function(){if(pwa){var a=2,b=mwa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;nwa("//web.archive.org/web/20200501001303/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",t6,c)}},rwa=function(){qwa();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);s6(["//web.archive.org/web/20200501001303/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200501001303/https://www.gstatic.com/eureka/clank/cast_sender.js"])},u6=function(a,b,c){g.A.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.Dd=b;this.B=(0,g.x)(this.hF,this);this.o=!1;this.u=0;this.w=this.Ea=null;this.A=[]},v6=function(a,b,c){g.A.call(this);
this.w=null!=c?(0,g.x)(a,c):a;this.Dd=b;this.u=(0,g.x)(this.iF,this);this.o=[]},w6=function(a){a.Ea=g.Vf(a.u,a.Dd);
a.w.apply(null,a.o)},x6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Sva(a)},y6=function(){},z6=function(){},swa=function(){},uwa=function(a){return(a=twa(a))?new ActiveXObject(a):new XMLHttpRequest},twa=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},A6=function(a,b,c,d){this.o=a;
this.w=b;this.G=c;this.F=d||1;this.B=45E3;this.A=new g.E1(this);this.u=new g.Uf;this.u.setInterval(250)},wwa=function(a,b,c){a.Aj=1;
a.Wg=Z5(b.clone());a.Ti=c;a.C=!0;vwa(a,null)},B6=function(a,b,c,d,e){a.Aj=1;
a.Wg=Z5(b.clone());a.Ti=null;a.C=c;e&&(a.NB=!1);vwa(a,d)},vwa=function(a,b){a.pk=(0,g.G)();
C6(a);a.Lh=a.Wg.clone();$5(a.Lh,"t",a.F);a.Lm=0;a.Lc=a.o.Zq(a.o.Bm()?b:null);0<a.Or&&(a.xp=new v6((0,g.x)(a.IC,a,a.Lc),a.Or));a.A.ia(a.Lc,"readystatechange",a.eO);var c=a.ti?g.Pb(a.ti):{};a.Ti?(a.eq="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.Lc.send(a.Lh,a.eq,a.Ti,c)):(a.eq="GET",a.NB&&!g.le&&(c.Connection="close"),a.Lc.send(a.Lh,a.eq,null,c));a.o.cf(1)},zwa=function(a,b,c){for(var d=!0;!a.bi&&a.Lm<c.length;){var e=xwa(a,c);
if(e==D6){4==b&&(a.lh=4,E6(15),d=!1);break}else if(e==ywa){a.lh=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.lh=1,E6(17),d=!1);a.ff=a.ff&&d;d||(G6(a),H6(a))},xwa=function(a,b){var c=a.Lm,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if(isNaN(c))return ywa;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.Lm=d+c;return e},Bwa=function(a,b){a.pk=(0,g.G)();
C6(a);var c=b?window.location.hostname:"";a.Lh=a.Wg.clone();Y5(a.Lh,"DOMAIN",c);Y5(a.Lh,"t",a.F);try{a.kf=new ActiveXObject("htmlfile")}catch(n){G6(a);a.lh=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in Awa)k=I6[l]=Awa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Yc(g.Yb("b/12014412"),d+"</body></html>");a.kf.open();a.kf.write(g.Tc(c));a.kf.close();a.kf.parentWindow.m=(0,g.x)(a.xN,a);a.kf.parentWindow.d=(0,g.x)(a.VA,a,!0);a.kf.parentWindow.rpcClose=(0,g.x)(a.VA,a,!1);c=a.kf.createElement("DIV");a.kf.parentWindow.document.body.appendChild(c);d=g.xc(a.Lh.toString());d=g.fd(g.vc(d));d=g.Yc(g.Yb("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Zc(c,d);a.o.cf(1)},C6=function(a){a.Ru=(0,g.G)()+a.B;
Cwa(a,a.B)},Cwa=function(a,b){if(null!=a.Dk)throw Error("WatchDog timer not null");
a.Dk=J6((0,g.x)(a.FN,a),b)},K6=function(a){a.Dk&&(g.v.clearTimeout(a.Dk),a.Dk=null)},H6=function(a){a.o.sx()||a.bi||a.o.ao(a)},G6=function(a){K6(a);
g.Je(a.xp);a.xp=null;a.u.stop();g.Lqa(a.A);if(a.Lc){var b=a.Lc;a.Lc=null;b.abort();b.dispose()}a.kf&&(a.kf=null)},F6=function(a,b){try{a.o.NA(a,b),a.o.cf(4)}catch(c){}},Ewa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Dwa(a,b,function(k){k?c(!0):g.v.setTimeout(function(){Ewa(a,b,c,d,f)},f)})}},Dwa=function(a,b,c){var d=new Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Rva(d,a)},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Fwa=function(a){this.o=a;
this.u=new y6},Gwa=function(a){var b=M6(a.o,a.Nk,"/mail/images/cleardot.gif");
Z5(b);Ewa(b.toString(),5E3,(0,g.x)(a.bE,a),3,2E3);a.cf(1)},O6=function(a){var b=a.o.I;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.Xd=new A6(a,void 0,void 0,void 0),a.Xd.ti=a.Mr,b=a.o,b=M6(b,b.Bm()?a.ul:null,a.Nr),E6(5),!g.je||g.Nd(10))$5(b,"TYPE","xmlhttp"),B6(a.Xd,b,!1,a.ul,!1);else{$5(b,"TYPE","html");var c=a.Xd;a=!!a.ul;c.Aj=3;c.Wg=Z5(b.clone());Bwa(c,a)}},P6=function(a){g.jf.call(this);
this.headers=new g.Lm;this.T=a||null;this.w=!1;this.V=this.o=null;this.da=this.I="";this.C=0;this.A="";this.B=this.aa=this.G=this.U=!1;this.F=0;this.J=null;this.ea="";this.M=this.Y=!1},Hwa=function(a){return g.je&&g.Md(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Iwa=function(a){return"content-type"==a.toLowerCase()},Kwa=function(a,b){a.w=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.A=b;a.C=5;Jwa(a);Q6(a)},Jwa=function(a){a.U||(a.U=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},Mwa=function(a){if(a.w&&"undefined"!=typeof g.J1)if(a.V[1]&&4==R6(a)&&2==a.getStatus())S6(a,"Local request error detected and ignored");
else if(a.G&&4==R6(a))g.Vf(a.JA,0,a);else if(a.dispatchEvent("readystatechange"),4==R6(a)){S6(a,"Request complete");a.w=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.pd(1,String(a.I));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!Lwa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<R6(a)?a.o.statusText:""}catch(m){l=""}a.A=l+" ["+a.getStatus()+"]";Jwa(a)}}finally{Q6(a)}}},Q6=function(a,b){if(a.o){Nwa(a);
var c=a.o,d=a.V[0]?g.Ja:null;a.o=null;a.V=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Nwa=function(a){a.o&&a.M&&(a.o.ontimeout=null);
a.J&&(g.v.clearTimeout(a.J),a.J=null)},R6=function(a){return a.o?a.o.readyState:0},T6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},S6=function(a,b){return b+" ["+a.da+" "+a.I+" "+a.getStatus()+"]"},U6=function(a,b,c){this.o=1;
this.u=[];this.A=[];this.B=new y6;this.G=a||null;this.I=null!=b?b:null;this.C=c||!1},Owa=function(a,b){this.o=a;
this.map=b;this.context=null},Pwa=function(a){g.Le.call(this,"statevent",a)},Qwa=function(a,b){g.Le.call(this,"timingevent",a);
this.size=b},Rwa=function(a){g.Le.call(this,"serverreachability",a)},Uwa=function(a){Swa(a);
if(3==a.o){var b=a.em++,c=a.Nn.clone();Y5(c,"SID",a.w);Y5(c,"RID",b);Y5(c,"TYPE","terminate");V6(a,c);b=new A6(a,a.w,b,void 0);b.Aj=2;b.Wg=Z5(c.clone());Rva(new Image,b.Wg.toString());b.pk=(0,g.G)();C6(b)}Twa(a)},Vwa=function(a){a.AE(1,0);
a.Nn=M6(a,null,a.Lr);W6(a)},Swa=function(a){a.ah&&(a.ah.abort(),a.ah=null);
a.lc&&(a.lc.cancel(),a.lc=null);a.cg&&(g.v.clearTimeout(a.cg),a.cg=null);X6(a);a.Pd&&(a.Pd.cancel(),a.Pd=null);a.fh&&(g.v.clearTimeout(a.fh),a.fh=null)},Wwa=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Owa(a.MJ++,b));2!=a.o&&3!=a.o||W6(a)},W6=function(a){a.Pd||a.fh||(a.fh=J6((0,g.x)(a.UA,a),0),a.tj=0)},Ywa=function(a,b){if(1==a.o){if(!b){a.em=Math.floor(1E5*Math.random());
var c=a.em++,d=new A6(a,"",c,void 0);d.ti=null;var e=Y6(a),f=a.Nn.clone();Y5(f,"RID",c);Y5(f,"CVER","1");V6(a,f);wwa(d,f,e);a.Pd=d;a.o=2}}else 3==a.o&&(b?Xwa(a,b):0==a.u.length||a.Pd||Xwa(a))},Xwa=function(a,b){if(b)if(6<a.ci){a.u=a.A.concat(a.u);
a.A.length=0;var c=a.em-1;var d=Y6(a)}else c=b.G,d=b.Ti;else c=a.em++,d=Y6(a);var e=a.Nn.clone();Y5(e,"SID",a.w);Y5(e,"RID",c);Y5(e,"AID",a.Oj);V6(a,e);c=new A6(a,a.w,c,a.tj+1);c.ti=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Pd=c;wwa(c,e,d)},V6=function(a,b){if(a.zd){var c=a.zd.Qw();
c&&g.zb(c,function(d,e){Y5(b,e,d)})}},Y6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.ci&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.ci?e:f-d;try{g.zb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.A=a.A.concat(a.u.splice(0,b));
return c.join("&")},Zwa=function(a){a.lc||a.cg||(a.F=1,a.cg=J6((0,g.x)(a.TA,a),0),a.mj=0)},Z6=function(a){if(a.lc||a.cg||3<=a.mj)return!1;
a.F++;a.cg=J6((0,g.x)(a.TA,a),$wa(a,a.mj));a.mj++;return!0},N6=function(a,b,c){a.bq=c;
a.yf=b.rg;a.C||Vwa(a)},X6=function(a){null!=a.ii&&(g.v.clearTimeout(a.ii),a.ii=null)},$wa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},$6=function(a,b){if(2==b||9==b){var c=null;
a.zd&&(c=null);var d=(0,g.x)(a.QO,a);c||(c=new g.Om("//web.archive.org/web/20200501001303/https://www.google.com/images/cleardot.gif"),Z5(c));Dwa(c.toString(),1E4,d)}else E6(2);axa(a,b)},axa=function(a,b){a.o=0;
a.zd&&a.zd.hw(b);Twa(a);Swa(a)},Twa=function(a){a.o=0;
a.yf=-1;if(a.zd)if(0==a.A.length&&0==a.u.length)a.zd.Rq();else{g.jb(a.A);var b=g.jb(a.u);a.A.length=0;a.u.length=0;a.zd.Rq(b)}},M6=function(a,b,c){var d=g.Wm(c);
if(""!=d.o)b&&g.Qm(d,b+"."+d.o),g.Rm(d,d.A);else{var e=window.location;d=Vva(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.dl&&g.zb(a.dl,function(f,k){Y5(d,k,f)});
Y5(d,"VER",a.ci);V6(a,d);return d},J6=function(a,b){if(!g.Oa(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},E6=function(a){a7.dispatchEvent(new Pwa(a7,a))},bxa=function(){},cxa=function(){this.o=[];
this.u=[]},dxa=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.A.call(this);
this.o=new g.H(this.nN,0,this);g.C(this,this.o);this.Dd=5E3;this.u=0;if(g.Oa(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Oa(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.w=a},c7=function(a,b,c){this.J=a;
this.C=b;this.w=new g.Yn;this.u=new b7(this.sO,this);this.o=null;this.wb=!1;this.B=null;this.I="";this.G=this.A=0;this.F=[];this.M=c||!1},exa=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.bq,sessionId:a.o.w,arrayId:a.o.Oj}},fxa=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&Ywa(a.o),Uwa(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},gxa=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.pd(4,a))||"";b&&(this.port=":"+b);this.domain=g.qd(a)||"";a=g.Lc;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.qc(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Ad(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Sa(a.A,d,!0),onError:g.Sa(a.w,e),Vd:g.Sa(a.B,e)};c&&(a.vb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Iq(b,a)},kxa=function(){var a=hxa;
ixa();h7.push(a);jxa(h7)},i7=function(a,b){ixa();
var c=h7,d=lxa(a,String(b));g.cb(c)?mxa(d):(jxa(c),(0,g.y)(c,function(e){e(d)}))},ixa=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",h7,void 0))},mxa=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},jxa=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},lxa=function(a,b){var c=((0,g.G)()-nxa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.P.call(this);
this.F=a;this.o=[]},oxa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},pxa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.we)(a.o,function(f){return!!j6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=oxa(a,b[d])||c;return c},qxa=function(a,b){var c=a.o.length;
a.o=(0,g.we)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.P.call(this);
this.C=a;this.A=b;this.B=c;this.w=d;this.u=0;this.o=null;this.Ea=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.w=a;this.u=NaN;o7(this);this.info("Initializing with "+h6(this.o))},rxa=function(a){if(a.o.length){var b=(0,g.Ec)(a.o,function(d){return d.id}),c=f7(a.w,"/pairing/get_lounge_token_batch");
g7(a.w,c,{screen_ids:b.join(",")},(0,g.x)(a.sF,a),(0,g.x)(a.rF,a))}},o7=function(a){var b=awa(gwa());
b=(0,g.we)(b,function(c){return!c.uuid});
return pxa(a,b)},q7=function(a,b){iwa((0,g.Ec)(a.o,Zva));
b&&hwa()},s7=function(a,b){g.P.call(this);
this.C=b;var c=g.Hs("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.bb(c,l)}this.o=d;this.B=a;this.w=this.A=NaN;this.u=null;r7("Initialized with "+g.Kk(this.o))},sxa=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(a6(b)!=a6(a.o))var c=!1;
else{c=g.Gb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Kk(a.o)),a.o=b,a.R("screenChange"));txa(a)},u7=function(a){isNaN(a.w)||g.No(a.w);
a.w=g.Lo((0,g.x)(a.hu,a),0<a.A&&a.A<(0,g.G)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},uxa=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Sb("Requesting availability of screen w/o lounge token.")});
return b},txa=function(a){a=g.Gb(g.Ab(a.o,function(b){return b}));
g.sb(a);a.length?g.Gs("yt-remote-online-screen-ids",a.join(","),60):l6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.w=null;this.A=[];this.B={};vxa(this)},xxa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.le();if(k=(c?k6(k,c):null)||k6(k,b)){k.uuid=b;var l=w7(a,k);sxa(a.u,l,function(m){e(m?l:null)})}else c?wxa(a,c,(0,g.x)(function(m){var n=w7(this,new e6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));sxa(this.u,n,function(p){e(p?n:null)})},a),f):e(null)},yxa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},wxa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={vb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Iq(f7(a.C,"/pairing/get_lounge_token_batch"),e)},zxa=function(a){a.o=a.w.le();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+h6(a.o))},vxa=function(a){x7(a);
a.w=new p7(a.C);a.w.subscribe("screenChange",(0,g.x)(a.BF,a));zxa(a);a.A=awa(g.Hs("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+h6(a.A));a.u=new s7(a.C,(0,g.x)(a.le,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.R("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=k6(a.A,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.A.push(b),g.Gs("yt-remote-automatic-screen-cache",(0,g.Ec)(a.A,Zva)));x7(a);a.B[b.uuid]=b.id;g.Gs("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.Hs("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.P.call(this);
this.V=c;this.I=a;this.u=b;this.w=null},z7=function(a,b){i7(a.V,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.A=0;this.C=(0,g.x)(this.AP,this);this.B=(0,g.x)(this.NN,this);this.A=g.Lo((0,g.x)(function(){Axa(this,null)},this),12E4)},Bxa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Kk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ja,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Kk(b))},Axa=function(a,b){g.No(a.A);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.w||a.w.id!=b){var c=(0,g.x)(a.mp,a),d=(0,g.x)(a.ne,a);a.kx(b,c,d,5)}}else a.ne(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.A=this.G=null;this.J="";this.T=c;this.B=null;this.F=g.Ja;this.C=NaN;this.M=(0,g.x)(this.DP,this);this.o=g.Ja},Cxa=function(a){a.o=a.I.OC(a.J,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ja;
this.mp(b)},a),(0,g.x)(function(b){this.o=g.Ja;
this.ne(b)},a))},Dxa=function(a){var b={};
b.pairingCode=a.J;b.theme=a.T;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}kwa()&&(b.env_useStageMdx=1);return g.yd(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.Lo((0,g.x)(this.Pj,this,null),150)},D7=function(a,b,c,d){g.P.call(this);
this.u=a;this.F=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.w=[];this.A=(0,g.x)(this.vM,this)},Exa=function(a,b){return b?g.Za(a.w,function(c){return f6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},hxa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.w.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.Je(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.u):a.R("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.SA,a,b)),b.w?a.R("yt-remote-cast2-session-change",b.w):c&&a.o.Pj(null)):a.R("yt-remote-cast2-session-change",null))},Fxa=function(a){var b=a.u.NC(),c=a.o&&a.o.u;
a=(0,g.Ec)(b,function(d){c&&f6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Exa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Lxa=function(a,b,c,d,e,f,k){Gxa()?Hxa(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Ixa(a,c):(window.__onGCastApiAvailable=function(l,m){l?Ixa(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Jxa(),c(!1))},d?g.Xo("https://web.archive.org/web/20200501001303/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?rwa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?t6():(qwa(),s6(Kxa.map(owa))))):H7("Cannot initialize because not running Chrome")},Jxa=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);Mxa(!1);g.To(M7);M7.length=0},N7=function(){return!!g.Hs("yt-remote-cast-installed")},Nxa=function(){var a=g.Hs("yt-remote-cast-receiver");
return a?a.friendlyName:null},Oxa=function(){H7("clearCurrentReceiver");
l6("yt-remote-cast-receiver")},Pxa=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.So("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Gxa=function(){var a=0<=g.Lc.search(/ (CrMo|Chrome|CriOS)\//);
return g.bx||a},Qxa=function(a,b){L7().init(a,b)},Hxa=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.Gs("yt-remote-cast-available",f);c6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.Gs("yt-remote-cast-receiver",f);c6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.Gs("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+g6(f));
f||l6("yt-remote-cast-receiver");c6("yt-remote-cast2-session-change",f)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Ixa=function(a,b){K7(!0);
I7(!1);Qxa(a,function(c){c?(Mxa(!0),g.Uo("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),l6("yt-remote-cast-available"),l6("yt-remote-cast-receiver"),Jxa());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.Gs("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},Mxa=function(a){H7("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.F=0;this.o=null;this.hasNext=this.J=!1;this.I=this.G=this.u=this.B=0;this.A=NaN;this.w=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.J=!1;a.hasNext=!1;a.F=0;a.C=(0,g.G)();a.B=0;a.u=0;a.G=0;a.I=0;a.A=NaN;a.w=!1},T7=function(a){return a.bb()?((0,g.G)()-a.C)/1E3:0},U7=function(a,b){a.F=b;
a.C=(0,g.G)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.G)()-a.C)/1E3+a.F;
case -1E3:return 0}return a.F},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Qb(a.o);b.hasPrevious=a.J;b.hasNext=a.hasNext;b.playerTime=a.F;b.playerTimeAt=a.C;b.seekableStart=a.B;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.I;b.liveIngestionTime=a.A;return b},Z7=function(a,b){g.P.call(this);
this.o=0;this.A=a;this.C=[];this.B=new cxa;this.w=this.u=null;this.I=(0,g.x)(this.uK,this);this.F=(0,g.x)(this.gm,this);this.G=(0,g.x)(this.tK,this);this.J=(0,g.x)(this.FK,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Uu,this),Rxa(this))):c=3;0!=c&&(b?this.Uu(c):g.Lo((0,g.x)(function(){this.Uu(c)},this),0));
var d=Pxa();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},$7=function(a){return new R7(a.A.getPlayerContextData())},Rxa=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.A.subscribe(b,g.Sa(this.sM,b),this))},a)},Sxa=function(a){(0,g.y)(a.C,function(b){this.A.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.A.sendMessage(b,c)},b8=function(a,b){Sxa(a);
a.A.setPlayerContextData(X7(b));Rxa(a)},Y7=function(a,b){a.w&&(a.w.removeUpdateListener(a.I),a.w.removeMediaListener(a.F),a.gm(null));
a.w=b;a.w&&(i7("CP","Setting cast session: "+a.w.sessionId),a.w.addUpdateListener(a.I),a.w.addMediaListener(a.F),a.w.media.length&&a.gm(a.w.media[0]))},Txa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Sb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Sb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.P.call(this);
this.B=NaN;this.M=!1;this.G=this.F=this.I=this.J=NaN;this.V=[];this.A=this.C=this.w=this.Ta=this.o=null;this.U=a;this.V.push(g.Ip(window,"beforeunload",(0,g.x)(this.kF,this)));this.u=[];this.Ta=new R7;this.T=b.id;this.o=Uxa(this,c);this.o.subscribe("handlerOpened",this.yK,this);this.o.subscribe("handlerClosed",this.vK,this);this.o.subscribe("handlerError",this.wK,this);this.o.subscribe("handlerMessage",this.xK,this);gxa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Ta.videoId;
g.Is()&&g.Gs("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},Uxa=function(a,b){return new c7(f7(a.U,"/bc"),b)},h8=function(a,b){a.R("proxyStateChange",b)},Vxa=function(a){a.B=g.Lo((0,g.x)(function(){g8("Connecting timeout");
this.rj(1)},a),2E4)},i8=function(a){g.No(a.B);
a.B=NaN},j8=function(a){g.No(a.J);
a.J=NaN},Wxa=function(a){k8(a);
a.I=g.Lo((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.No(a.I);
a.I=NaN},Yxa=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.ix()&&a.Ta.reset(),h8(a,1),l8(a,"getNowPlaying"),Xxa(a)):a.rj(1)},Zxa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Ta.videoId&&(g.Mb(b.params)?a.Ta.o=null:a.Ta.o=b.params,a.R("remotePlayerChange"))},$xa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Ta.listId=b.params.listId||a.Ta.listId;W7(a.Ta,c,d);a.R("remoteQueueChange")},bya=function(a,b){b.params=b.params||{};
$xa(a,b);aya(a,b);a.R("autoplayDismissed")},aya=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Ta,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Ta.playerState&&(c=-1E3);a.Ta.playerState=c;c=Number(b.params.loadedTime);a.Ta.I=isNaN(c)?0:c;c=Number(b.params.duration);a.Ta.G=isNaN(c)?0:c;c=a.Ta;var d=Number(b.params.liveIngestionTime);c.A=d;c.w=isNaN(d)?!1:!0;c=a.Ta;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Ta.playerState?Wxa(a):k8(a);a.R("remotePlayerChange")},cya=function(a,b){if(-1E3!=
a.Ta.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Ta.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Ta,isNaN(c)?0:c);a.R("remotePlayerChange")}},dya=function(a,b){var c="true"==b.params.muted;
a.Ta.volume=parseInt(b.params.volume,10);a.Ta.muted=c;a.R("remotePlayerChange")},eya=function(a,b){a.C=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},fya=function(a,b){var c="true"==b.params.hasNext;
a.Ta.J="true"==b.params.hasPrevious;a.Ta.hasNext=c;a.R("previousNextChange")},Xxa=function(a){g.No(a.G);
a.G=g.Lo((0,g.x)(a.rj,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Kk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.Cd=a;this.u=[];this.u.push(this.Cd.$_s("screenChange",(0,g.x)(this.yP,this)));this.u.push(this.Cd.$_s("onlineScreenChange",(0,g.x)(this.SL,this)))},kya=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.L("MDX_CONFIG")||b;cwa();p6();n8||(n8=new e7(b?b.loungeApiHost:void 0),kwa()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",o8,void 0));gya();var c=p8();if(!c){var d=new v7(n8);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Lxa(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){c6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Kk(b)),s8.push(g.So("yt-remote-cast2-availability-change",function(){c6("yt-remote-receiver-availability-change")})),s8.push(g.So("yt-remote-cast2-receiver-selected",function(){t8(null);
c6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.So("yt-remote-cast2-receiver-resumed",function(){c6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.So("yt-remote-cast2-session-change",hya)),s8.push(g.So("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),Oxa())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.Bo("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Kk(a)),iya(a),c.start(),q8()||jya())},mya=function(){var a=lya();
N7()&&g.Hs("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},lya=function(){var a=p8().Cd.$_gos();
var b=w8();b&&x8()&&(j6(a,b)||a.push(b));return bwa(a)},y8=function(){var a=nya();
!a&&N7()&&Nxa()&&(a={key:"cast-selector-receiver",name:Nxa()});return a},nya=function(){var a=lya(),b=w8();
b||(b=u8());return g.Za(a,function(c){return b&&f6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().le();return k6(b,a)},hya=function(a){r8("remote.onCastSessionChange_: "+g6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},oya=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},pya=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||oya("");g.Ia("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?c6("yt-remote-connection-change",!1):!b&&a&&c6("yt-remote-connection-change",!0)},u8=function(){var a=g.Is();
if(!a)return null;var b=p8().le();return k6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{oya(a.id);var c=new f8(n8,a,v8());c.connect(b,pya());c.subscribe("beforeDisconnect",function(d){c6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},jya=function(){var a=u8();
a?(r8("Resume connection to: "+g6(a)),A8(a,0)):(q6(),Oxa(),r8("Skipping connecting because no session screen found."))},gya=function(){var a=v8();
if(g.Mb(a)){a=o6();var b=g.Hs("yt-remote-session-name")||"",c=g.Hs("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},iya=function(a){a?(g.Gs("yt-remote-session-app",a.app),g.Gs("yt-remote-session-name",a.name)):(l6("yt-remote-session-app"),l6("yt-remote-session-name"));
g.Ia("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.A.call(this);
this.B=a;this.u=b;this.w=new g.O(this);g.C(this,this.w);this.w.L(b,"onCaptionsTrackListChanged",this.oL);this.w.L(b,"captionschanged",this.sK);this.w.L(b,"captionssettingschanged",this.bC);this.w.L(b,"videoplayerreset",this.np);this.w.L(b,"mdxautoplaycancel",this.aE);this.T=this.w.L(b,"onVolumeChange",this.rA);this.G=!1;this.o=c;c.ga();c.subscribe("proxyStateChange",this.MA,this);c.subscribe("remotePlayerChange",this.lm,this);c.subscribe("remoteQueueChange",this.np,this);c.subscribe("autoplayUpNext",
this.cA,this);c.subscribe("previousNextChange",this.IA,this);c.subscribe("nowAutoplaying",this.DA,this);c.subscribe("autoplayDismissed",this.bA,this);this.suggestion=null;this.I=new g.HC(64);this.A=new g.H(this.ZB,500,this);g.C(this,this.A);this.C=new g.H(this.aC,1E3,this);g.C(this,this.C);this.M=new u6(this.ZO,0,this);g.C(this,this.M);this.F={};this.V=new g.H(this.AC,1E3,this);g.C(this,this.V);this.J=new v6(this.iI,1E3,this);g.C(this,this.J);this.U=g.Ja;this.bC();this.np();this.lm()},H8=function(a,
b){var c=a.B,d=a.u.getVideoData().lengthSeconds;
c.V=b||0;c.player.R("progresssync",b,d)},qya=function(a){H8(a,0);
a.A.stop();I8(a,new g.HC(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.Sb(c,b));a.o.SB(a.u.getVideoData(1).videoId,c);a.F=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.index;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.Af,Pva(c));I8(a,new g.HC(1))},rya=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{uT:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.I;if(!g.NC(c,b)){var d=g.V(b,2);d!=g.V(a.I,2)&&g.SS(a.u.app,d);a.I=b;sya(a.B,c,b)}},M8=function(){g.Q.call(this,{D:"div",
H:"ytp-mdx-popup-dialog",O:{role:"dialog"},K:[{D:"div",H:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",H:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",H:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",H:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",Z:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",Z:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.u=new g.LL(this,250);g.C(this,this.u);this.C=this.o["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.w);this.A=this.o["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},N8=function(a){g.Q.call(this,{D:"div",
H:"ytp-remote",K:[{D:"div",H:"ytp-remote-display-status",K:[{D:"div",H:"ytp-remote-display-status-icon",K:[g.NL()]},{D:"div",H:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.u=new g.LL(this,250);g.C(this,this.u);this.w=a;this.L(a,"presentingplayerstatechange",this.A);tya(this,g.JK(a))},tya=function(a,b){if(3==a.w.getPresentingPlayerType()){var c={RECEIVER_NAME:a.w.getOption("remote","currentReceiver").name};
c=g.V(b,128)?g.BM("Error on $RECEIVER_NAME",c):b.bb()||g.V(b,4)?g.BM("Playing on $RECEIVER_NAME",c):g.BM("Connected to $RECEIVER_NAME",c);a.ka("statustext",c);a.u.show()}else a.u.hide()},O8=function(a,b){g.TN.call(this,"Play on",0,a,b);
this.A=a;this.G={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},P8=function(a){g.pL.call(this,a);
this.u={key:i6(),name:"This computer"};this.B=null;this.A=[];this.T=this.o=null;this.J=[this.u];this.w=this.u;this.F=new g.HC(64);this.V=0;this.I=-1;this.C=null;if(!g.Zy(this.player.N())){a=this.player;var b=g.bC(a);b&&(b=b.Vl())&&(b=new O8(a,b),g.C(this,b));b=new N8(a);g.C(this,b);g.cL(a,b.element,4);this.C=new M8;g.C(this,this.C);g.cL(a,this.C.element,4);this.M=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},sya=function(a,b,c){a.F=
c;
a.player.R("presentingplayerstatechange",new g.SC(c,b))},R8=function(a,b){if(b.key!=a.w.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.R(a.player.N().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.L("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.L("SESSION_INDEX")&&!g.L("LOGGED_IN")))||a.M||!a.C);if(c?0:g.hz(a.player.N())||"WEB_EMBEDDED_PLAYER"==a.player.N().deviceParams.c)g.JK(a.player).bb()?a.player.pauseVideo():(a.G=(0,g.x)(a.SN,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.Yb(),x8()||(E8=!0);a.w=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=
c.videoId;if(!d&&!e||(2==a.player.getAppState()||1==a.player.getAppState())&&g.R(a.player.N().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.va(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Af,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=Pva(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Kk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?c6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().le(),(c=k6(c,b.key))&&A8(c,1))}},Awa={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},I6={"'":"\\'"},uya={},Yva={bQ:"atp",IS:"ska",xS:"que",QR:"mus",HS:"sus",cR:"dsp",ES:"seq"},r6,n6="",pwa=lwa("loadCastFramework")||lwa("loadCastApplicationFramework"),Kxa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ua(u6,g.A);g.h=u6.prototype;g.h.gF=function(a){this.A=arguments;this.o=!1;this.Ea?this.w=(0,g.G)()+this.Dd:this.Ea=g.Vf(this.B,this.Dd)};
g.h.stop=function(){this.Ea&&(g.v.clearTimeout(this.Ea),this.Ea=null);this.w=null;this.o=!1;this.A=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.A)))};
g.h.X=function(){this.stop();u6.Gb.X.call(this)};
g.h.hF=function(){this.w?(this.Ea=g.Vf(this.B,this.w-(0,g.G)()),this.w=null):(this.Ea=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.A)))};g.Ua(v6,g.A);g.h=v6.prototype;g.h.zj=!1;g.h.tl=0;g.h.Ea=null;g.h.rx=function(a){this.o=arguments;this.Ea||this.tl?this.zj=!0:w6(this)};
g.h.stop=function(){this.Ea&&(g.v.clearTimeout(this.Ea),this.Ea=null,this.zj=!1,this.o=[])};
g.h.pause=function(){this.tl++};
g.h.resume=function(){this.tl--;this.tl||!this.zj||this.Ea||(this.zj=!1,w6(this))};
g.h.X=function(){v6.Gb.X.call(this);this.stop()};
g.h.iF=function(){this.Ea=null;this.zj&&!this.tl&&(this.zj=!1,w6(this))};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};z6.prototype.o=null;z6.prototype.getOptions=function(){var a;(a=this.o)||(a={},twa(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Ua(swa,z6);S8=new swa;g.h=A6.prototype;g.h.ti=null;g.h.ff=!1;g.h.Dk=null;g.h.Ru=null;g.h.pk=null;g.h.Aj=null;g.h.Wg=null;g.h.Lh=null;g.h.Ti=null;g.h.Lc=null;g.h.Lm=0;g.h.kf=null;g.h.eq=null;g.h.lh=null;g.h.vl=-1;g.h.NB=!0;g.h.bi=!1;g.h.Or=0;g.h.xp=null;var ywa={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.eO=function(a){a=a.target;var b=this.xp;b&&3==R6(a)?b.rx():this.IC(a)};
g.h.IC=function(a){try{if(a==this.Lc)a:{var b=R6(this.Lc),c=this.Lc.C,d=this.Lc.getStatus();if(g.je&&!g.Nd(10)||g.le&&!g.Md("420+")){if(4>b)break a}else if(3>b||3==b&&!g.yh&&!T6(this.Lc))break a;this.bi||4!=b||7==c||(8==c||0>=d?this.o.cf(3):this.o.cf(2));K6(this);var e=this.Lc.getStatus();this.vl=e;var f=T6(this.Lc);(this.ff=200==e)?(4==b&&G6(this),this.C?(zwa(this,b,f),g.yh&&this.ff&&3==b&&(this.A.ia(this.u,"tick",this.WN),this.u.start())):F6(this,f),this.ff&&!this.bi&&(4==b?this.o.ao(this):(this.ff=
!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.lh=3,E6(13)):(this.lh=0,E6(14)),G6(this),H6(this))}}catch(k){this.Lc&&T6(this.Lc)}finally{}};
g.h.WN=function(){var a=R6(this.Lc),b=T6(this.Lc);this.Lm<b.length&&(K6(this),zwa(this,a,b),this.ff&&4!=a&&C6(this))};
g.h.xN=function(a){J6((0,g.x)(this.wN,this,a),0)};
g.h.wN=function(a){this.bi||(K6(this),F6(this,a),C6(this))};
g.h.VA=function(a){J6((0,g.x)(this.vN,this,a),0)};
g.h.vN=function(a){this.bi||(G6(this),this.ff=a,this.o.ao(this),this.o.cf(4))};
g.h.cancel=function(){this.bi=!0;G6(this)};
g.h.FN=function(){this.Dk=null;var a=(0,g.G)();0<=a-this.Ru?(2!=this.Aj&&this.o.cf(3),G6(this),this.lh=2,E6(18),H6(this)):Cwa(this,this.Ru-a)};
g.h.getLastError=function(){return this.lh};g.h=Fwa.prototype;g.h.Mr=null;g.h.Xd=null;g.h.yp=!1;g.h.tx=null;g.h.Kn=null;g.h.xs=null;g.h.Nr=null;g.h.Be=null;g.h.rg=-1;g.h.ul=null;g.h.Nk=null;g.h.connect=function(a){this.Nr=a;a=M6(this.o,null,this.Nr);E6(3);this.tx=(0,g.G)();var b=this.o.G;null!=b?(this.ul=b[0],(this.Nk=b[1])?(this.Be=1,Gwa(this)):(this.Be=2,O6(this))):($5(a,"MODE","init"),this.Xd=new A6(this,void 0,void 0,void 0),this.Xd.ti=this.Mr,B6(this.Xd,a,!1,null,!0),this.Be=0)};
g.h.bE=function(a){if(a)this.Be=2,O6(this);else{E6(4);var b=this.o;b.yf=b.ah.rg;$6(b,9)}a&&this.cf(2)};
g.h.Zq=function(a){return this.o.Zq(a)};
g.h.abort=function(){this.Xd&&(this.Xd.cancel(),this.Xd=null);this.rg=-1};
g.h.sx=function(){return!1};
g.h.NA=function(a,b){this.rg=a.vl;if(0==this.Be)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.yf=this.rg;$6(c,2);return}this.ul=c[0];this.Nk=c[1]}else c=this.o,c.yf=this.rg,$6(c,2);else if(2==this.Be)if(this.yp)E6(7),this.xs=(0,g.G)();else if("11111"==b){if(E6(6),this.yp=!0,this.Kn=(0,g.G)(),c=this.Kn-this.tx,!g.je||g.Nd(10)||500>c)this.rg=200,this.Xd.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.Kn=this.xs=(0,g.G)(),this.yp=!1};
g.h.ao=function(){this.rg=this.Xd.vl;if(this.Xd.ff)0==this.Be?this.Nk?(this.Be=1,Gwa(this)):(this.Be=2,O6(this)):2==this.Be&&((!g.je||g.Nd(10)?!this.yp:200>this.xs-this.Kn)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.Be?E6(9):2==this.Be&&E6(10);var a=this.o;this.Xd.getLastError();a.yf=this.rg;$6(a,2)}};
g.h.Bm=function(){return this.o.Bm()};
g.h.isActive=function(){return this.o.isActive()};
g.h.cf=function(a){this.o.cf(a)};g.Ua(P6,g.jf);var Lwa=/^https?$/i,vya=["POST","PUT"];g.h=P6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+a);b=b?b.toUpperCase():"GET";this.I=a;this.A="";this.C=0;this.da=b;this.U=!1;this.w=!0;this.o=this.T?uwa(this.T):uwa(S8);this.V=this.T?this.T.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.JA,this);try{b6(S6(this,"Opening Xhr")),this.aa=!0,this.o.open(b,String(a),!0),this.aa=!1}catch(f){b6(S6(this,"Error opening Xhr: "+f.message));Kwa(this,f);return}a=
c||"";var e=this.headers.clone();d&&Uva(d,function(f,k){e.set(k,f)});
d=g.Za(e.ye(),Iwa);c=g.v.FormData&&a instanceof g.v.FormData;!g.bb(vya,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.ea&&(this.o.responseType=this.ea);"withCredentials"in this.o&&this.o.withCredentials!==this.Y&&(this.o.withCredentials=this.Y);try{Nwa(this),0<this.F&&(this.M=Hwa(this.o),b6(S6(this,"Will abort after "+this.F+"ms if incomplete, xhr2 "+this.M)),this.M?(this.o.timeout=this.F,this.o.ontimeout=(0,g.x)(this.vx,this)):this.J=g.Vf(this.vx,this.F,this)),b6(S6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){b6(S6(this,"Send error: "+f.message)),Kwa(this,f)}};
g.h.vx=function(){"undefined"!=typeof g.J1&&this.o&&(this.A="Timed out after "+this.F+"ms, aborting",this.C=8,S6(this,this.A),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.w&&(S6(this,"Aborting"),this.w=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Q6(this))};
g.h.X=function(){this.o&&(this.w&&(this.w=!1,this.B=!0,this.o.abort(),this.B=!1),Q6(this,!0));P6.Gb.X.call(this)};
g.h.JA=function(){this.ga()||(this.aa||this.G||this.B?Mwa(this):this.uM())};
g.h.uM=function(){Mwa(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<R6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.A?this.A:String(this.A)};g.h=U6.prototype;g.h.dl=null;g.h.Pd=null;g.h.lc=null;g.h.Lr=null;g.h.Nn=null;g.h.Tv=null;g.h.Zn=null;g.h.em=0;g.h.MJ=0;g.h.zd=null;g.h.fh=null;g.h.cg=null;g.h.ii=null;g.h.ah=null;g.h.bq=null;g.h.Oj=-1;g.h.Zx=-1;g.h.yf=-1;g.h.tj=0;g.h.mj=0;g.h.ci=8;var a7=new g.jf;g.Ua(Pwa,g.Le);g.Ua(Qwa,g.Le);g.Ua(Rwa,g.Le);g.h=U6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.Lr=b;this.dl=c||{};d&&void 0!==e&&(this.dl.OSID=d,this.dl.OAID=e);this.C?(J6((0,g.x)(this.nw,this,a),100),Vwa(this)):this.nw(a)};
g.h.nw=function(a){this.ah=new Fwa(this);this.ah.Mr=null;this.ah.u=this.B;this.ah.connect(a)};
g.h.sx=function(){return 0==this.o};
g.h.UA=function(a){this.fh=null;Ywa(this,a)};
g.h.TA=function(){this.cg=null;this.lc=new A6(this,this.w,"rpc",this.F);this.lc.ti=null;this.lc.Or=0;var a=this.Tv.clone();Y5(a,"RID","rpc");Y5(a,"SID",this.w);Y5(a,"CI",this.bq?"0":"1");Y5(a,"AID",this.Oj);V6(this,a);if(!g.je||g.Nd(10))Y5(a,"TYPE","xmlhttp"),B6(this.lc,a,!0,this.Zn,!1);else{Y5(a,"TYPE","html");var b=this.lc,c=!!this.Zn;b.Aj=3;b.Wg=Z5(a.clone());Bwa(b,c)}};
g.h.NA=function(a,b){if(0!=this.o&&(this.lc==a||this.Pd==a))if(this.yf=a.vl,this.Pd==a&&3==this.o)if(7<this.ci){try{var c=this.B.parse(b)}catch(f){c=null}if(Array.isArray(c)&&3==c.length)if(0==c[0])a:{if(!this.cg){if(this.lc)if(this.lc.pk+3E3<this.Pd.pk)X6(this),this.lc.cancel(),this.lc=null;else break a;Z6(this);E6(19)}}else this.Zx=c[1],0<this.Zx-this.Oj&&37500>c[2]&&this.bq&&0==this.mj&&!this.ii&&(this.ii=J6((0,g.x)(this.oK,this),6E3));else $6(this,11)}else b!=uya.yQ.o&&$6(this,11);else if(this.lc==
a&&X6(this),!g.fc(b)){c=this.B.parse(b);for(var d=0;d<c.length;d++){var e=c[d];this.Oj=e[0];e=e[1];2==this.o?"c"==e[0]?(this.w=e[1],this.Zn=e[2],e=e[3],null!=e?this.ci=e:this.ci=6,this.o=3,this.zd&&this.zd.jw(),this.Tv=M6(this,this.Bm()?this.Zn:null,this.Lr),Zwa(this)):"stop"==e[0]&&$6(this,7):3==this.o&&("stop"==e[0]?$6(this,7):"noop"!=e[0]&&this.zd&&this.zd.iw(e),this.mj=0)}}};
g.h.oK=function(){null!=this.ii&&(this.ii=null,this.lc.cancel(),this.lc=null,Z6(this),E6(20))};
g.h.ao=function(a){if(this.lc==a){X6(this);this.lc=null;var b=2}else if(this.Pd==a)this.Pd=null,b=1;else return;this.yf=a.vl;if(0!=this.o)if(a.ff)1==b?(b=(0,g.G)()-a.pk,a7.dispatchEvent(new Qwa(a7,a.Ti?a.Ti.length:0,b,this.tj)),W6(this),this.A.length=0):Zwa(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.yf)){if(d=1==b)this.Pd||this.fh||1==this.o||2<=this.tj?d=!1:(this.fh=J6((0,g.x)(this.UA,this,a),$wa(this,this.tj)),this.tj++,d=!0);d=!(d||2==b&&Z6(this))}if(d)switch(c){case 1:$6(this,
5);break;case 4:$6(this,10);break;case 3:$6(this,6);break;case 7:$6(this,12);break;default:$6(this,2)}}};
g.h.AE=function(a){if(!g.bb(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.QO=function(a){a?E6(2):(E6(1),axa(this,8))};
g.h.Zq=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new P6;a.Y=!1;return a};
g.h.isActive=function(){return!!this.zd&&this.zd.isActive(this)};
g.h.cf=function(a){a7.dispatchEvent(new Rwa(a7,a))};
g.h.Bm=function(){return!(!g.je||g.Nd(10))};
g.h=bxa.prototype;g.h.jw=function(){};
g.h.iw=function(){};
g.h.hw=function(){};
g.h.Rq=function(){};
g.h.Qw=function(){return{}};
g.h.isActive=function(){return!0};g.h=cxa.prototype;g.h.isEmpty=function(){return g.cb(this.o)&&g.cb(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.bb(this.o,a)||g.bb(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.Qqa)(b,a);0<=c?(g.eb(b,c),b=!0):b=!1;return b||g.fb(this.u,a)};
g.h.Id=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Ua(b7,g.A);g.h=b7.prototype;g.h.nN=function(){this.Dd=Math.min(3E5,2*this.Dd);this.w();this.u&&this.start()};
g.h.start=function(){var a=this.Dd+15E3*Math.random();g.zn(this.o,a);this.u=(0,g.G)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Dd=5E3};g.Ua(c7,bxa);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.w.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.w.unsubscribe(a,b,c)};
g.h.Ch=function(a){return this.w.vi(a)};
g.h.R=function(a,b){return this.w.R.apply(this.w,arguments)};
g.h.dispose=function(){this.wb||(this.wb=!0,g.Je(this.w),fxa(this),g.Je(this.u),this.u=null)};
g.h.ga=function(){return this.wb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.I="";this.u.stop();this.B=a||null;this.A=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new U6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.M),e=this.o;e&&(e.zd=null);d.zd=this;this.o=d;e?this.o.connect(a,b,this.C,e.w,e.Oj):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.Sb(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.F.push(c):d7(this)&&Wwa(this.o,c)};
g.h.jw=function(){this.u.reset();this.B=null;this.A=0;if(this.F.length){var a=this.F;this.F=[];for(var b=0,c=a.length;b<c;++b)Wwa(this.o,a[b])}this.R("handlerOpened")};
g.h.hw=function(a){var b=2==a&&401==this.o.yf;4==a||b||this.u.start();this.R("handlerError",a)};
g.h.Rq=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.F.push(d)}};
g.h.Qw=function(){var a={v:2};this.I&&(a.gsessionid=this.I);0!=this.A&&(a.ui=""+this.A);0!=this.G&&(a.ui=""+this.G);this.B&&g.Sb(a,this.B);return a};
g.h.iw=function(a){"S"==a[0]?this.I=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),Uwa(this.o)):this.R("handlerMessage",new dxa(a[0],a[1]))};
g.h.sO=function(){this.u.isActive();var a=this.o,b=0;a.lc&&b++;a.Pd&&b++;0==b&&this.connect(this.B,this.A)};e7.prototype.A=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.w=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var nxa=(0,g.G)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Ua(m7,g.P);m7.prototype.le=function(){return this.o};
m7.prototype.contains=function(a){return!!j6(this.o,a)};
m7.prototype.get=function(a){return a?k6(this.o,a):null};
m7.prototype.info=function(a){i7(this.F,a)};g.r(n7,g.P);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Ea)&&this.MC()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ea)||(g.No(this.Ea),this.Ea=NaN)};
g.h.X=function(){this.stop();g.P.prototype.X.call(this)};
g.h.MC=function(){this.Ea=NaN;this.o=g.Iq(f7(this.C,"/pairing/get_screen"),{method:"POST",vb:{pairing_code:this.A},timeout:5E3,onSuccess:(0,g.x)(this.wP,this),onError:(0,g.x)(this.vP,this),Vd:(0,g.x)(this.xP,this)})};
g.h.wP=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.B;c.name=this.w;this.R("pairingComplete",new e6(c))};
g.h.vP=function(a){this.o=null;a.status&&404==a.status?this.u>=wya.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=wya[this.u],this.Ea=g.Lo((0,g.x)(this.MC,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.xP=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var wya=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.R("screenChange");!g.Hs("yt-remote-lounge-token-expiration")&&rxa(this);g.No(this.u);this.u=g.Lo((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);oxa(this,a);q7(this,!1);this.R("screenChange");b(a);a.token||rxa(this)};
g.h.remove=function(a,b){var c=o7(this);qxa(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.Yp=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.X=function(){g.No(this.u);p7.Gb.X.call(this)};
g.h.sF=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.F,"Missed "+b+" lounge tokens.")};
g.h.rF=function(a){i7(this.F,"Requesting lounge tokens failed: "+a)};g.r(s7,g.P);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.Hs("yt-remote-fast-check-period")||"0",10);(this.A=(0,g.G)()-144E5<a?0:a)?u7(this):(this.A=(0,g.G)()+3E5,g.Gs("yt-remote-fast-check-period",this.A),this.hu())};
g.h.isEmpty=function(){return g.Mb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Ab(this.o,function(c,d){return c&&!!k6(a,d)},this);
t7(this,b)};
g.h.X=function(){g.No(this.w);this.w=NaN;this.u&&(this.u.abort(),this.u=null);g.P.prototype.X.call(this)};
g.h.hu=function(){g.No(this.w);this.w=NaN;this.u&&this.u.abort();var a=uxa(this);if(a6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Gb(a).join(",")},(0,g.x)(this.RM,this,a),(0,g.x)(this.QM,this))}else t7(this,{}),u7(this)};
g.h.RM=function(a,b){this.u=null;var c=g.Gb(uxa(this));if(g.tb(c,g.Gb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Sb("Changing Screen set during request."),this.hu()};
g.h.QM=function(a){this.Sb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Sb=function(a){i7("OnlineScreenService",a)};g.Ua(v7,m7);g.h=v7.prototype;g.h.start=function(){this.w.start();this.u.start();this.o.length&&(this.R("screenChange"),this.u.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.w.add(a,b,c)};
g.h.remove=function(a,b,c){this.w.remove(a,b,c);this.u.update()};
g.h.Yp=function(a,b,c,d){this.w.contains(a)?this.w.Yp(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.F,a),d(Error(a)))};
g.h.le=function(a){return a?this.o:g.ib(this.o,(0,g.we)(this.A,function(b){return!this.contains(b)},this))};
g.h.NC=function(){return(0,g.we)(this.le(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.OC=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.Je(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.Je(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.zP=function(a,b,c,d){g.Iq(f7(this.C,"/pairing/get_screen"),{method:"POST",vb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new e6(f.screen||{});if(!k.name||yxa(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);yxa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Vd:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.X=function(){g.Je(this.w);g.Je(this.u);v7.Gb.X.call(this)};
g.h.BF=function(){zxa(this);this.R("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Ua(y7,g.P);g.h=y7.prototype;g.h.mp=function(a){this.w=a;this.R("sessionScreen",this.w)};
g.h.ne=function(a){this.ga()||(a&&z7(this,""+a),this.w=null,this.R("sessionScreen",null))};
g.h.info=function(a){i7(this.V,a)};
g.h.QC=function(){return null};
g.h.qu=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.X=function(){this.qu("");y7.Gb.X.call(this)};g.Ua(A7,y7);g.h=A7.prototype;g.h.pu=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);Bxa(this)};
g.h.Pj=function(a){this.info("launchWithParams no-op for Cast: "+g.Kk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.ne()},this),(0,g.x)(function(){this.ne(Error("Failed to stop receiver app."))},this)):this.ne(Error("Stopping cast device witout session."))};
g.h.qu=g.Ja;g.h.X=function(){this.info("disposeInternal");g.No(this.A);this.A=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.Gb.X.call(this)};
g.h.NN=function(a,b){if(!this.ga())if(b){var c=x6(b);if(g.Pa(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Kk(c));switch(d){case "mdxSessionStatus":Axa(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.kx=function(a,b,c,d){xxa(this.I,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Lo((0,g.x)(this.kx,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.QC=function(){return this.o};
g.h.AP=function(a){this.ga()||a||(z7(this,"Cast session died."),this.ne())};g.Ua(B7,y7);g.h=B7.prototype;g.h.pu=function(a){this.A=a;this.A.addUpdateListener(this.M)};
g.h.Pj=function(a){this.B=a;this.F()};
g.h.stop=function(){this.o();this.o=g.Ja;g.No(this.C);this.A?this.A.stop((0,g.x)(this.ne,this,null),(0,g.x)(this.ne,this,"Failed to stop DIAL device.")):this.ne()};
g.h.X=function(){this.o();this.o=g.Ja;g.No(this.C);this.A&&this.A.removeUpdateListener(this.M);this.A=null;B7.Gb.X.call(this)};
g.h.DP=function(a){this.ga()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ja,this.ne())};
g.h.Wr=function(a){this.J=i6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,Dxa(this));a(b);Cxa(this)}else this.F=(0,g.x)(function(){g.No(this.C);this.F=g.Ja;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Dxa(this));a(c);Cxa(this)},this),this.C=g.Lo((0,g.x)(function(){this.F()},this),100)};
g.h.UF=function(a,b,c){xxa(this.I,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.mp(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Wr(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.Wr(b,c)},this))};g.Ua(C7,y7);C7.prototype.stop=function(){this.ne()};
C7.prototype.pu=g.Ja;C7.prototype.Pj=function(){g.No(this.o);this.o=NaN;var a=k6(this.I.le(),this.u.label);a?this.mp(a):this.ne(Error("No such screen"))};
C7.prototype.X=function(){g.No(this.o);this.o=NaN;C7.Gb.X.call(this)};g.Ua(D7,g.P);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.F);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.zM,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.QA,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.MK,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ga()||
(chrome.cast.addReceiverActionListener(this.A),kxa(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.PC,this)),this.w=Fxa(this),chrome.cast.setCustomReceivers(this.w,g.Ja,(0,g.x)(function(k){this.Sb("Failed to set initial custom receivers: "+g.Kk(k))},this)),this.R("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Sb("Failed to initialize API: "+g.Kk(k));
b(!1)},this))};
g.h.AO=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.w;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=k6(this.u.le(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=Exa(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.w.push(d),chrome.cast.setCustomReceivers(this.w,
g.Ja,(0,g.x)(function(e){this.Sb("Failed to set initial custom receivers: "+g.Kk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.qu(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.BO=function(a){this.ga()?this.Sb("Setting connection data on disposed cast v2"):this.o?this.o.Pj(a):this.Sb("Setting connection data without a session")};
g.h.CP=function(){this.ga()?this.Sb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.QA,this),(0,g.x)(this.VM,this))};
g.h.X=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.PC,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.A);var a=hxa,b=g.w("yt.mdx.remote.debug.handlers_");g.fb(b||[],a);g.Je(this.o);D7.Gb.X.call(this)};
g.h.Sb=function(a){i7("Controller",a)};
g.h.SA=function(a,b){this.o==a&&(b||G7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.vM=function(a,b){if(!this.ga())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.w&&this.R("yt-remote-cast2-session-change",this.o.w);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Sb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Sb("Stopping receiver w/o session: "+a.friendlyName)}else this.Sb("onReceiverAction_ called without receiver.")};
g.h.MK=function(a){if(this.ga())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Sb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Sb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.w)return E7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.w),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Sb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.UF,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Wr,b))};
g.h.QA=function(a){if(!this.ga()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Sb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=k6(this.u.le(),c.label);d&&f6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.Je(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.SA,this,this.o)),this.o.Pj(null));this.o.pu(a)}}};
g.h.BP=function(){return this.o?this.o.QC():null};
g.h.VM=function(a){this.ga()||(this.Sb("Failed to estabilish a session: "+g.Kk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.zM=function(a){E7("Receiver availability updated: "+a);if(!this.ga()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.R("yt-remote-cast2-availability-change",F7(this))}};
g.h.PC=function(){this.ga()||(this.w=Fxa(this),E7("Updating custom receivers: "+g.Kk(this.w)),chrome.cast.setCustomReceivers(this.w,g.Ja,(0,g.x)(function(){this.Sb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.BO;D7.prototype.setConnectedScreenStatus=D7.prototype.AO;D7.prototype.stopSession=D7.prototype.CP;D7.prototype.getCastSession=D7.prototype.BP;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];g.h=R7.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.J=a.hasPrevious,this.hasNext=a.hasNext,this.F=a.playerTime,this.C=a.playerTimeAt,this.B=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.I=a.loadedTime,this.A=a.liveIngestionTime,this.w=!isNaN(this.A))};
g.h.bb=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.getDuration=function(){return this.w?this.G+T7(this):this.G};
g.h.clone=function(){return new R7(X7(this))};g.r(Z7,g.P);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ja,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ja,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.bb()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ja,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.R("remotePlayerChange")}else a8(this,g.Sa(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ja,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.R("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.w){if(c.volume!=a){var d=Math.round(a)/100;this.w.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Sb("failed to set receiver volume.")},this))}c.muted!=b&&this.w.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Sb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Sa(this.setVolume,a,b))};
g.h.SB=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Kk(b.style),g.Sb(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Sa(this.SB,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Sa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Kk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.LC=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Sa(this.LC,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Sa(this.nextVideo,a,b))};
g.h.yw=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.yw)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.P.prototype.dispose.call(this)};
g.h.X=function(){Sxa(this);this.A=null;this.B.clear();Y7(this,null);g.P.prototype.X.call(this)};
g.h.Uu=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.cb(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.sM=function(a,b){this.R(a,b)};
g.h.uK=function(a){if(!a)this.gm(null),Y7(this,null);else if(this.w.receiver.volume){a=this.w.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.gm=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),Txa(this),this.R("remotePlayerChange")};
g.h.tK=function(a){a?(Txa(this),this.R("remotePlayerChange")):this.gm(null)};
g.h.FK=function(){var a=Pxa();a&&Y7(this,a)};
g.h.Sb=function(a){i7("CP",a)};g.r(f8,g.P);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Ta.listId=c);this.Ta.videoId=d;this.Ta.index=k||0;this.Ta.state=3;U7(this.Ta,m);this.A="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Kk(l));this.o.connect({method:"setPlaylist",
params:g.Kk(l)},a,fwa())}else g8("Connecting without params"),this.o.connect({},a,fwa());Vxa(this)};
g.h.dispose=function(){this.ga()||(this.R("beforeDispose"),h8(this,3));g.P.prototype.dispose.call(this)};
g.h.X=function(){i8(this);k8(this);j8(this);g.No(this.F);this.F=NaN;g.No(this.G);this.G=NaN;this.w=null;g.Jp(this.V);this.V.length=0;this.o.dispose();g.P.prototype.X.call(this);this.A=this.C=this.u=this.Ta=this.o=null};
g.h.kF=function(){this.rj(2)};
g.h.yK=function(){g8("Channel opened");this.M&&(this.M=!1,j8(this),this.J=g.Lo((0,g.x)(function(){g8("Timing out waiting for a screen.");this.rj(1)},this),15E3));
jwa(exa(this.o),this.T)};
g.h.vK=function(){g8("Channel closed");isNaN(this.B)?q6(!0):q6();this.dispose()};
g.h.wK=function(a){q6();isNaN(this.ol())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.M=!0,g8("Channel error: "+a+" with reconnection in "+this.ol()+" ms"),h8(this,2))};
g.h.xK=function(a){a.params?g8("Received: action="+a.action+", params="+g.Kk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.u=(0,g.Ec)(a,function(c){return new d6(c)});
a=!!g.Za(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Yxa(this,a);break;case "loungeScreenDisconnected":g.gb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Yxa(this,!1);break;case "remoteConnected":var b=new d6(x6(a.params.device));g.Za(this.u,function(c){return b?c.id==b.id:!1})||Qva(this.u,b);
break;case "remoteDisconnected":b=new d6(x6(a.params.device));g.gb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":$xa(this,a);break;case "nowPlaying":bya(this,a);break;case "onStateChange":aya(this,a);break;case "onAdStateChange":cya(this,a);break;case "onVolumeChanged":dya(this,a);break;case "onSubtitlesTrackChanged":Zxa(this,a);break;case "nowAutoplaying":eya(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.R("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.A=
a.params.autoplayMode;this.R("autoplayModeChange",this.A);"DISABLED"==this.A&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":fya(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.oO=function(){if(this.w){var a=this.w;this.w=null;this.Ta.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.ZE=function(){var a=3;this.ga()||(a=0,isNaN(this.ol())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.rj=function(a){g8("Disconnecting with "+a);i8(this);this.R("beforeDisconnect",a);1==a&&q6();fxa(this.o,a);this.dispose()};
g.h.YE=function(){var a=this.Ta;this.w&&(a=this.Ta.clone(),W7(a,this.w,a.index));return X7(a)};
g.h.CO=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Ta.videoId&&(this.w=b.videoId,g.No(this.F),this.F=g.Lo((0,g.x)(this.oO,this),5E3));var c=[];this.Ta.listId==b.listId&&this.Ta.videoId==b.videoId&&this.Ta.index==b.index||c.push("remoteQueueChange");this.Ta.playerState==b.playerState&&this.Ta.volume==b.volume&&this.Ta.muted==b.muted&&V7(this.Ta)==V7(b)&&g.Kk(this.Ta.o)==g.Kk(b.o)||c.push("remotePlayerChange");this.Ta.reset(a);(0,g.y)(c,function(d){this.R(d)},this)};
g.h.ix=function(){var a=this.o.C.id,b=g.Za(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.ol=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.G)():NaN};
g.h.NE=function(){return this.A||"UNSUPPORTED"};
g.h.OE=function(){return this.C||""};
g.h.uP=function(){if(!isNaN(this.ol())){var a=this.o.u;g.An(a.o);a.start()}};
g.h.xO=function(a,b){l8(this,a,b);Xxa(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.Ch;f8.prototype.getProxyState=f8.prototype.ZE;f8.prototype.disconnect=f8.prototype.rj;f8.prototype.getPlayerContextData=f8.prototype.YE;f8.prototype.setPlayerContextData=f8.prototype.CO;f8.prototype.getOtherConnectedRemoteId=f8.prototype.ix;f8.prototype.getReconnectTimeout=f8.prototype.ol;f8.prototype.getAutoplayMode=f8.prototype.NE;f8.prototype.getAutoplayVideoId=f8.prototype.OE;f8.prototype.reconnect=f8.prototype.uP;
f8.prototype.sendMessage=f8.prototype.xO;g.r(m8,m7);g.h=m8.prototype;g.h.le=function(a){return this.Cd.$_gs(a)};
g.h.contains=function(a){return!!this.Cd.$_c(a)};
g.h.get=function(a){return this.Cd.$_g(a)};
g.h.start=function(){this.Cd.$_st()};
g.h.add=function(a,b,c){this.Cd.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Cd.$_r(a,b,c)};
g.h.Yp=function(a,b,c,d){this.Cd.$_un(a,b,c,d)};
g.h.X=function(){for(var a=0,b=this.u.length;a<b;++a)this.Cd.$_ubk(this.u[a]);this.u.length=0;this.Cd=null;m7.prototype.X.call(this)};
g.h.yP=function(){this.R("screenChange")};
g.h.SL=function(){this.R("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.zP;v7.prototype.$_gsppc=v7.prototype.OC;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.Yp;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.le;v7.prototype.$_gos=v7.prototype.NC;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.Ch;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.A);g.h=G8.prototype;
g.h.X=function(){g.A.prototype.X.call(this);this.A.stop();this.C.stop();this.M.stop();this.U();this.o.unsubscribe("proxyStateChange",this.MA,this);this.o.unsubscribe("remotePlayerChange",this.lm,this);this.o.unsubscribe("remoteQueueChange",this.np,this);this.o.unsubscribe("autoplayUpNext",this.cA,this);this.o.unsubscribe("previousNextChange",this.IA,this);this.o.unsubscribe("nowAutoplaying",this.DA,this);this.o.unsubscribe("autoplayDismissed",this.bA,this);this.o=this.B=null};
g.h.bz=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":$7(this.o).bb()?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.rx(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.sK=function(a){this.M.gF(a)};
g.h.ZO=function(a){this.bz("control_subtitles_set_track",g.Mb(a)?null:a)};
g.h.bC=function(){var a=this.u.getOption("captions","track");g.Mb(a)||K8(this,a)};
g.h.rA=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.lm,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.V.start();this.o.subscribe("remotePlayerChange",this.lm,this)}};
g.h.oL=function(){g.Mb(this.F)||rya(this,this.F);this.G=!1};
g.h.MA=function(a,b){this.C.stop();2==b&&this.aC()};
g.h.lm=function(){if(J8(this)){this.A.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.I=1;break;case 1082:case 1083:this.B.I=0;break;default:this.B.I=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.HC(8));this.ZB();break;case 1085:case 3:I8(this,new g.HC(9));break;case 1083:case 0:I8(this,new g.HC(2));this.J.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.HC(4));break;case 2:I8(this,new g.HC(4));H8(this,V7(a));
break;case -1:I8(this,new g.HC(64));break;case -1E3:I8(this,new g.HC(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.F;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.F=a,rya(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.V.isActive()||this.AC()}else qya(this)};
g.h.IA=function(){this.u.R("mdxpreviousnextchange")};
g.h.np=function(){J8(this)||qya(this)};
g.h.aE=function(){this.o.yw()};
g.h.cA=function(){};
g.h.DA=function(a){isNaN(a)||this.u.R("mdxnowautoplaying",a)};
g.h.bA=function(){this.u.R("mdxautoplaycanceled")};
g.h.iI=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.AC=function(){if(J8(this)){var a=$7(this.o);this.w.Ya(this.T);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.T=this.w.L(this.u,"onVolumeChange",this.rA)}};
g.h.ZB=function(){this.A.stop();if(!this.o.ga()){var a=$7(this.o);a.bb()&&I8(this,new g.HC(8));H8(this,V7(a));this.A.start()}};
g.h.aC=function(){this.C.stop();this.A.stop();var a=this.o.A.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.Q);M8.prototype.Yb=function(){this.u.show()};
M8.prototype.w=function(){c6("mdx-privacy-popup-cancel");this.u.hide()};
M8.prototype.B=function(){c6("mdx-privacy-popup-confirm");this.u.hide()};g.r(N8,g.Q);N8.prototype.A=function(a){tya(this,a.state)};g.r(O8,g.TN);O8.prototype.J=function(){var a=this.A.getOption("remote","receivers");a&&1<a.length&&!this.A.getOption("remote","quickCast")?(this.G=g.vb(a,this.B,this),g.VN(this,(0,g.Ec)(a,this.B)),a=this.A.getOption("remote","currentReceiver"),this.Ge(this.B(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.B=function(a){return a.key};
O8.prototype.af=function(a){return"cast-selector-receiver"==a?"Cast...":this.G[a].name};
O8.prototype.kd=function(a){g.TN.prototype.kd.call(this,a);this.A.setOption("remote","currentReceiver",this.G[a]);this.u.eb()};g.r(P8,g.pL);g.h=P8.prototype;
g.h.create=function(){kya(g.Py(this.player.N()));this.A.push(g.So("yt-remote-before-disconnect",this.pK,this));this.A.push(g.So("yt-remote-connection-change",this.AM,this));this.A.push(g.So("yt-remote-receiver-availability-change",this.KA,this));this.A.push(g.So("yt-remote-auto-connect",this.yM,this));this.A.push(g.So("yt-remote-receiver-resumed",this.xM,this));this.A.push(g.So("mdx-privacy-popup-confirm",this.aO,this));this.A.push(g.So("mdx-privacy-popup-cancel",this.ZN,this));this.KA()};
g.h.load=function(){this.player.cancelPlayback();g.pL.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=pya())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.V=a||0,this.player.R("progresssync",a,void 0));sya(this,this.F,this.F);g.ZS(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.w=this.u;g.Ke(this.B,this.o);this.o=this.B=null;g.pL.prototype.unload.call(this);g.ZS(this.player.app,5);Q8(this)};
g.h.X=function(){g.To(this.A);g.pL.prototype.X.call(this)};
g.h.Nl=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.bz.apply(this.B,[a].concat(g.na(c)))};
g.h.getAdState=function(){return this.I};
g.h.bF=function(){return this.loaded?this.B.suggestion:null};
g.h.uy=function(){return this.o?$7(this.o).J:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.V};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.R(this.player.N().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.Pc():!a.isAdPlaying()&&this.player.Pc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.w?a.A+T7(a):a.A,isAtLiveHead:1>=(a.w?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.I,seekableEnd:a.w?a.u+T7(a):a.u,seekableStart:0<a.B?a.B+T7(a):
a.B}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.xG=function(){this.o&&this.o.LC()};
g.h.pK=function(a){1==a&&(this.T=this.o?$7(this.o):null)};
g.h.AM=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.w;this.loaded&&this.unload();this.o=a;this.T=null;b.key!=this.u.key&&(this.w=b,this.load())}else g.Je(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.T)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.KA=function(){this.J=[this.u].concat(mya());var a=y8()||this.u;R8(this,a);this.player.ma("onMdxReceiversChange")};
g.h.SN=function(a){!this.M&&g.UC(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.yM=function(){var a=y8();R8(this,a)};
g.h.xM=function(){this.w=y8()};
g.h.aO=function(){this.M=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.ZN=function(){this.M=!1;Q8(this);R8(this,this.u);this.w=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Nc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.J;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.w:this.u;case "quickCast":return 2==this.J.length&&"cast-selector-receiver"==this.J[1].key?(b&&P7(),!0):!1}};
g.h.yG=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.Qf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.EL.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:13:03 May 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:59:12 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 422.015
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 369.124 (3)
  PetaboxLoader3.datanode: 344.97 (4)
  PetaboxLoader3.resolve: 91.466 (2)
  load_resource: 93.997
*/