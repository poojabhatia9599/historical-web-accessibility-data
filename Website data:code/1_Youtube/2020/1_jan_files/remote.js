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

(function(g){var window=this;var Gqa=function(a,b){return g.Sb(a,b)},$5=function(a,b,c){a.A.set(b,c)},a6=function(a){$5(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.F)()).toString(36));
return a},b6=function(a,b,c){g.Ha(c)||(c=[String(c)]);
g.Qm(a.A,b,c)},Hqa=function(a,b){var c=[];
g.gk(b,function(d){try{var e=g.Cn.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Bn(e)&&c.push(d)},a);
return c},Iqa=function(a,b){var c=Hqa(a,b);
(0,g.y)(c,function(d){g.Cn.prototype.remove.call(this,d)},a)},Jqa=function(a){if(a.kd){if(a.kd.locationOverrideToken)return{locationOverrideToken:a.kd.locationOverrideToken};
if(null!=a.kd.latitudeE7&&null!=a.kd.longitudeE7)return{latitudeE7:a.kd.latitudeE7,longitudeE7:a.kd.longitudeE7}}return null},Kqa=function(a,b){g.Ya(a,b)||a.push(b)},c6=function(a){var b=0,c;
for(c in a)b++;return b},Lqa=function(a,b){var c=b instanceof g.vc?b:g.zc(b,/^data:image\//i.test(b));
a.src=g.wc(c)},d6=function(){},Mqa=function(a){try{return g.v.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Nqa=function(a){if(a.qd&&"function"==typeof a.qd)return a.qd();
if("string"===typeof a)return a.split("");if(g.Ia(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Ob(a)},Oqa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.Ia(a)||"string"===typeof a)(0,g.y)(a,b,void 0);else{if(a.de&&"function"==typeof a.de)var c=a.de();else if(a.qd&&"function"==typeof a.qd)c=void 0;else if(g.Ia(a)||"string"===typeof a){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Pb(a);d=Nqa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},Pqa=function(a,b,c,d){var e=new g.Em(null,void 0);
a&&g.Fm(e,a);b&&g.Gm(e,b);c&&g.Hm(e,c);d&&(e.u=d);return e},e6=function(a,b){g.xo[a]=!0;
var c=g.vo();c&&c.publish.apply(c,arguments);g.xo[a]=!1},f6=function(a){try{var b=(0,g.yx)(),c=(0,g.xx)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},Qqa=function(){var a=(0,g.xx)();
a&&Iqa(a,a.o.tf(!0))},g6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.A=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Bm;this.o=this.u="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Rqa(this,a.capabilities||""),Sqa(this,a.experiments||""),this.u=a.remoteControllerUrl||"",this.o=a.localChannelEncryptionKey||
"")},Rqa=function(a,b){a.capabilities.clear();
(0,g.Rd)(b.split(","),g.Oa(Gqa,Tqa)).forEach(function(c){a.capabilities.add(c)})},Sqa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},h6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},i6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},Uqa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Vqa=function(a){return new h6(a)},Wqa=function(a){return g.Ha(a)?(0,g.G)(a,Vqa):[]},j6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},k6=function(a){return g.Ha(a)?"["+(0,g.G)(a,j6).join(",")+"]":"null"},l6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Xqa=function(a){return(0,g.G)(a,function(b){return{key:b.id,
name:b.name}})},m6=function(a,b){return g.Va(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},n6=function(a,b){return g.Va(a,function(c){return i6(c,b)})},o6=function(){var a=g.Ax("yt-remote-connected-devices")||[];
g.ob(a);return a},Yqa=function(a){if(g.Za(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(d,e){return 0==e?d:d.substring(c.length)})},Zqa=function(a){g.zx("yt-remote-connected-devices",a,86400)},q6=function(){if(p6)return p6;
var a=g.Ax("yt-remote-device-id");a||(a=l6(),g.zx("yt-remote-device-id",a,31536E3));for(var b=o6(),c=1,d=a;g.Ya(b,d);)c++,d=a+"#"+c;return p6=d},r6=function(){var a=o6(),b=q6();
g.Ya(a,b);g.iN()&&g.qb(a,b);a=Yqa(a);if(g.Za(a))try{g.Er("remote_sid")}catch(c){}else try{g.Dr("remote_sid",a.join(","),-1)}catch(c){}},$qa=function(){return g.Ax("yt-remote-session-browser-channel")},ara=function(){return g.Ax("yt-remote-local-screens")||[]},bra=function(){g.zx("yt-remote-lounge-token-expiration",!0,86400)},cra=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(ara(),function(d){return d.loungeToken}),c=(0,g.G)(a,function(d){return d.loungeToken});
(0,g.mi)(c,function(d){return!g.Ya(b,d)})&&bra();
g.zx("yt-remote-local-screens",a,31536E3)},dra=function(a,b){g.zx("yt-remote-session-browser-channel",a);
g.zx("yt-remote-session-screen-id",b);var c=o6(),d=q6();g.Ya(c,d)||c.push(d);Zqa(c);r6()},s6=function(a){a||(f6("yt-remote-session-screen-id"),f6("yt-remote-session-video-id"));
r6();a=o6();g.bb(a,q6());Zqa(a)},era=function(){if(!t6){var a=g.Mn();
a&&(t6=new g.wn(a))}return t6?!!t6.get("yt-remote-use-staging-server"):!1},fra=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},gra=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},u6=function(a){a.length?hra(a.shift(),function(){u6(a)}):v6()},ira=function(a){return"chrome-extension://"+a+"/cast_sender.js"},hra=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},v6=function(){var a=gra();
a&&a(!1,"No cast extension found")},kra=function(){if(jra){var a=2,b=gra(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;hra("//web.archive.org/web/20200101003028/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",v6,c)}},lra=function(){kra();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);u6(["//web.archive.org/web/20200101003028/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20200101003028/https://www.gstatic.com/eureka/clank/cast_sender.js"])},w6=function(a,b,c){g.A.call(this);
this.C=null!=c?(0,g.x)(a,c):a;this.Zc=b;this.B=(0,g.x)(this.PD,this);this.o=!1;this.u=0;this.A=this.Ga=null;this.w=[]},x6=function(a){if(g.v.JSON)try{return g.v.JSON.parse(a)}catch(b){}return Mqa(a)},y6=function(){},z6=function(){},mra=function(){},ora=function(a){return(a=nra(a))?new ActiveXObject(a):new XMLHttpRequest},nra=function(a){if(!a.u&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0",
"MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.u=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.u},A6=function(a,b,c,d){this.o=a;
this.A=b;this.G=c;this.D=d||1;this.B=45E3;this.w=new g.y0(this);this.u=new g.pf;this.u.setInterval(250)},qra=function(a,b,c){a.mi=1;
a.dg=a6(b.clone());a.Fh=c;a.C=!0;pra(a,null)},B6=function(a,b,c,d,e){a.mi=1;
a.dg=a6(b.clone());a.Fh=null;a.C=c;e&&(a.mA=!1);pra(a,d)},pra=function(a,b){a.Zi=(0,g.F)();
C6(a);a.Kg=a.dg.clone();b6(a.Kg,"t",a.D);a.sl=0;a.xc=a.o.zp(a.o.dl()?b:null);0<a.fq&&(a.Un=new g.bl((0,g.x)(a.qB,a,a.xc),a.fq));a.w.ga(a.xc,"readystatechange",a.bN);var c=a.kh?g.Zb(a.kh):{};a.Fh?(a.Bo="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.xc.send(a.Kg,a.Bo,a.Fh,c)):(a.Bo="GET",a.mA&&!g.Gd&&(c.Connection="close"),a.xc.send(a.Kg,a.Bo,null,c));a.o.ze(1)},tra=function(a,b,c){for(var d=!0;!a.Vg&&a.sl<c.length;){var e=rra(a,c);
if(e==D6){4==b&&(a.rg=4,E6(15),d=!1);break}else if(e==sra){a.rg=4;E6(16);d=!1;break}else F6(a,e)}4==b&&0==c.length&&(a.rg=1,E6(17),d=!1);a.Ae=a.Ae&&d;d||(G6(a),H6(a))},rra=function(a,b){var c=a.sl,d=b.indexOf("\n",c);
if(-1==d)return D6;c=Number(b.substring(c,d));if(isNaN(c))return sra;d+=1;if(d+c>b.length)return D6;var e=b.substr(d,c);a.sl=d+c;return e},vra=function(a,b){a.Zi=(0,g.F)();
C6(a);var c=b?window.location.hostname:"";a.Kg=a.dg.clone();$5(a.Kg,"DOMAIN",c);$5(a.Kg,"t",a.D);try{a.Ee=new ActiveXObject("htmlfile")}catch(n){G6(a);a.rg=7;E6(22);H6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in I6)k=I6[l];else if(l in ura)k=I6[l]=ura[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
I6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Oc(g.oc("b/12014412"),d+"</body></html>");a.Ee.open();a.Ee.write(g.Ic(c));a.Ee.close();a.Ee.parentWindow.m=(0,g.x)(a.pM,a);a.Ee.parentWindow.d=(0,g.x)(a.uz,a,!0);a.Ee.parentWindow.rpcClose=(0,g.x)(a.uz,a,!1);c=a.Ee.createElement("DIV");a.Ee.parentWindow.document.body.appendChild(c);d=g.yc(a.Kg.toString());d=g.Vc(g.wc(d));d=g.Oc(g.oc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Pc(c,d);a.o.ze(1)},C6=function(a){a.Dt=(0,g.F)()+a.B;
wra(a,a.B)},wra=function(a,b){if(null!=a.mj)throw Error("WatchDog timer not null");
a.mj=J6((0,g.x)(a.wM,a),b)},K6=function(a){a.mj&&(g.v.clearTimeout(a.mj),a.mj=null)},H6=function(a){a.o.gw()||a.Vg||a.o.Nn(a)},G6=function(a){K6(a);
g.de(a.Un);a.Un=null;a.u.stop();g.A0(a.w);if(a.xc){var b=a.xc;a.xc=null;b.abort();b.dispose()}a.Ee&&(a.Ee=null)},F6=function(a,b){try{a.o.nz(a,b),a.o.ze(4)}catch(c){}},yra=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;xra(a,b,function(k){k?c(!0):g.v.setTimeout(function(){yra(a,b,c,d,f)},f)})}},xra=function(a,b,c){var d=new Image;
d.onload=function(){try{L6(d),c(!0)}catch(e){}};
d.onerror=function(){try{L6(d),c(!1)}catch(e){}};
d.onabort=function(){try{L6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{L6(d),c(!1)}catch(e){}};
g.v.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
Lqa(d,a)},L6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},zra=function(a){this.o=a;
this.u=new y6},Ara=function(a){var b=M6(a.o,a.vj,"/mail/images/cleardot.gif");
a6(b);yra(b.toString(),5E3,(0,g.x)(a.NC,a),3,2E3);a.ze(1)},O6=function(a){var b=a.o.H;
if(null!=b)E6(5),b?(E6(11),N6(a.o,a,!1)):(E6(12),N6(a.o,a,!0));else if(a.Dd=new A6(a,void 0,void 0,void 0),a.Dd.kh=a.cq,b=a.o,b=M6(b,b.dl()?a.Tj:null,a.eq),E6(5),!g.Ed||g.jd(10))b6(b,"TYPE","xmlhttp"),B6(a.Dd,b,!1,a.Tj,!1);else{b6(b,"TYPE","html");var c=a.Dd;a=!!a.Tj;c.mi=3;c.dg=a6(b.clone());vra(c,a)}},P6=function(a){g.De.call(this);
this.headers=new g.Bm;this.N=a||null;this.A=!1;this.U=this.o=null;this.da=this.H="";this.C=0;this.w="";this.B=this.W=this.G=this.S=!1;this.D=0;this.J=null;this.aa="";this.K=this.V=!1},Bra=function(a){return g.Ed&&g.id(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout},Cra=function(a){return"content-type"==a.toLowerCase()},Era=function(a,b){a.A=!1;
a.o&&(a.B=!0,a.o.abort(),a.B=!1);a.w=b;a.C=5;Dra(a);Q6(a)},Dra=function(a){a.S||(a.S=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},Gra=function(a){if(a.A&&"undefined"!=typeof g.G0)if(a.U[1]&&4==R6(a)&&2==a.getStatus())S6(a,"Local request error detected and ignored");
else if(a.G&&4==R6(a))g.qf(a.iw,0,a);else if(a.dispatchEvent("readystatechange"),4==R6(a)){S6(a,"Request complete");a.A=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Mg(1,String(a.H));if(!f&&g.v.self&&g.v.self.location){var k=g.v.self.location.protocol;f=k.substr(0,k.length-1)}e=!Fra.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.C=6;try{var l=2<R6(a)?a.o.statusText:""}catch(m){l=""}a.w=l+" ["+a.getStatus()+"]";Dra(a)}}finally{Q6(a)}}},Q6=function(a,b){if(a.o){Hra(a);
var c=a.o,d=a.U[0]?g.Ea:null;a.o=null;a.U=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},Hra=function(a){a.o&&a.K&&(a.o.ontimeout=null);
a.J&&(g.v.clearTimeout(a.J),a.J=null)},R6=function(a){return a.o?a.o.readyState:0},T6=function(a){try{return a.o?a.o.responseText:""}catch(b){return""}},S6=function(a,b){return b+" ["+a.da+" "+a.H+" "+a.getStatus()+"]"},U6=function(a,b,c){this.o=1;
this.u=[];this.w=[];this.B=new y6;this.G=a||null;this.H=null!=b?b:null;this.C=c||!1},Ira=function(a,b){this.o=a;
this.map=b;this.context=null},Jra=function(a){g.fe.call(this,"statevent",a)},Kra=function(a,b){g.fe.call(this,"timingevent",a);
this.size=b},Lra=function(a){g.fe.call(this,"serverreachability",a)},Ora=function(a){Mra(a);
if(3==a.o){var b=a.Gk++,c=a.rm.clone();$5(c,"SID",a.A);$5(c,"RID",b);$5(c,"TYPE","terminate");V6(a,c);b=new A6(a,a.A,b,void 0);b.mi=2;b.dg=a6(c.clone());Lqa(new Image,b.dg.toString());b.Zi=(0,g.F)();C6(b)}Nra(a)},Pra=function(a){a.iD(1,0);
a.rm=M6(a,null,a.bq);W6(a)},Mra=function(a){a.hg&&(a.hg.abort(),a.hg=null);
a.Vb&&(a.Vb.cancel(),a.Vb=null);a.wf&&(g.v.clearTimeout(a.wf),a.wf=null);X6(a);a.wd&&(a.wd.cancel(),a.wd=null);a.ng&&(g.v.clearTimeout(a.ng),a.ng=null)},Qra=function(a,b){if(0==a.o)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new Ira(a.FI++,b));2!=a.o&&3!=a.o||W6(a)},W6=function(a){a.wd||a.ng||(a.ng=J6((0,g.x)(a.sz,a),0),a.di=0)},Sra=function(a,b){if(1==a.o){if(!b){a.Gk=Math.floor(1E5*Math.random());
var c=a.Gk++,d=new A6(a,"",c,void 0);d.kh=null;var e=Y6(a),f=a.rm.clone();$5(f,"RID",c);$5(f,"CVER","1");V6(a,f);qra(d,f,e);a.wd=d;a.o=2}}else 3==a.o&&(b?Rra(a,b):0==a.u.length||a.wd||Rra(a))},Rra=function(a,b){if(b)if(6<a.Wg){a.u=a.w.concat(a.u);
a.w.length=0;var c=a.Gk-1;var d=Y6(a)}else c=b.G,d=b.Fh;else c=a.Gk++,d=Y6(a);var e=a.rm.clone();$5(e,"SID",a.A);$5(e,"RID",c);$5(e,"AID",a.Ci);V6(a,e);c=new A6(a,a.A,c,a.di+1);c.kh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.wd=c;qra(c,e,d)},V6=function(a,b){if(a.Wc){var c=a.Wc.Ev();
c&&g.Ib(c,function(d,e){$5(b,e,d)})}},Y6=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Wg&&0<b){var d=a.u[0].o;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.u[e].o,k=a.u[e].map;f=6>=a.Wg?e:f-d;try{g.Ib(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.w=a.w.concat(a.u.splice(0,b));
return c.join("&")},Tra=function(a){a.Vb||a.wf||(a.D=1,a.wf=J6((0,g.x)(a.rz,a),0),a.Yh=0)},Z6=function(a){if(a.Vb||a.wf||3<=a.Yh)return!1;
a.D++;a.wf=J6((0,g.x)(a.rz,a),Ura(a,a.Yh));a.Yh++;return!0},N6=function(a,b,c){a.zo=c;
a.Oe=b.Jf;a.C||Pra(a)},X6=function(a){null!=a.ah&&(g.v.clearTimeout(a.ah),a.ah=null)},Ura=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},$6=function(a,b){if(2==b||9==b){var c=null;
a.Wc&&(c=null);var d=(0,g.x)(a.JN,a);c||(c=new g.Em("//web.archive.org/web/20200101003028/https://www.google.com/images/cleardot.gif"),a6(c));xra(c.toString(),1E4,d)}else E6(2);Vra(a,b)},Vra=function(a,b){a.o=0;
a.Wc&&a.Wc.Ru(b);Nra(a);Mra(a)},Nra=function(a){a.o=0;
a.Oe=-1;if(a.Wc)if(0==a.w.length&&0==a.u.length)a.Wc.pp();else{g.eb(a.w);var b=g.eb(a.u);a.w.length=0;a.u.length=0;a.Wc.pp(b)}},M6=function(a,b,c){var d=g.Mm(c);
if(""!=d.o)b&&g.Gm(d,b+"."+d.o),g.Hm(d,d.B);else{var e=window.location;d=Pqa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Hj&&g.Ib(a.Hj,function(f,k){$5(d,k,f)});
$5(d,"VER",a.Wg);V6(a,d);return d},J6=function(a,b){if(!g.Ja(a))throw Error("Fn must not be null and must be a function");
return g.v.setTimeout(function(){a()},b)},E6=function(a){a7.dispatchEvent(new Jra(a7,a))},Wra=function(){},Xra=function(){this.o=[];
this.u=[]},Yra=function(a,b){this.action=a;
this.params=b||{}},b7=function(a,b){g.A.call(this);
this.o=new g.J(this.gM,0,this);g.B(this,this.o);this.Zc=5E3;this.u=0;if(g.Ja(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ja(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.A=a},c7=function(a,b,c){this.J=a;
this.C=b;this.A=new g.vn;this.u=new b7(this.mN,this);this.o=null;this.fb=!1;this.B=null;this.H="";this.G=this.w=0;this.D=[];this.K=c||!1},Zra=function(a){return{firstTestResults:[""],
secondTestResults:!a.o.zo,sessionId:a.o.A,arrayId:a.o.Ci}},$ra=function(a,b){a.G=b||0;
a.u.stop();a.o&&(3==a.o.o&&Sra(a.o),Ora(a.o));a.G=0},d7=function(a){return!!a.o&&3==a.o.o},asa=function(a,b){(a.C.loungeIdToken=b)||a.u.stop()},e7=function(a){this.port=this.domain="";
this.o="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.Mg(4,a))||"";b&&(this.port=":"+b);this.domain=g.Ng(a)||"";a=g.Gb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Fb(a,"10.0")&&(this.u=!1))},f7=function(a,b){var c=a.o;
a.u&&(c="https://"+a.domain+a.port+a.o);return g.Wg(c+b,{})},g7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Oa(a.w,d,!0),onError:g.Oa(a.A,e),Vd:g.Oa(a.B,e)};c&&(a.tb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.sp(b,a)},esa=function(){var a=bsa;
csa();h7.push(a);dsa(h7)},i7=function(a,b){csa();
var c=h7,d=fsa(a,String(b));g.Za(c)?gsa(d):(dsa(c),(0,g.y)(c,function(e){e(d)}))},csa=function(){h7||(h7=g.w("yt.mdx.remote.debug.handlers_")||[],g.Da("yt.mdx.remote.debug.handlers_",h7,void 0))},gsa=function(a){var b=(j7+1)%50;
j7=b;k7[b]=a;l7||(l7=49==b)},dsa=function(a){var b=k7;
if(b[0]){var c=j7,d=l7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
k7=Array(50);j7=-1;l7=!1}},fsa=function(a,b){var c=((0,g.F)()-hsa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},m7=function(a){g.Q.call(this);
this.D=a;this.o=[]},isa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.o.push(b);return!0},jsa=function(a,b){var c=a.o.length!=b.length;
a.o=(0,g.Rd)(a.o,function(f){return!!m6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=isa(a,b[d])||c;return c},ksa=function(a,b){var c=a.o.length;
a.o=(0,g.Rd)(a.o,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.o.length<c},n7=function(a,b,c,d){g.Q.call(this);
this.C=a;this.B=b;this.A=c;this.w=d;this.u=0;this.o=null;this.Ga=NaN},p7=function(a){m7.call(this,"LocalScreenService");
this.A=a;this.u=NaN;o7(this);this.info("Initializing with "+k6(this.o))},lsa=function(a){if(a.o.length){var b=(0,g.G)(a.o,function(d){return d.id}),c=f7(a.A,"/pairing/get_lounge_token_batch");
g7(a.A,c,{screen_ids:b.join(",")},(0,g.x)(a.ZD,a),(0,g.x)(a.YD,a))}},o7=function(a){var b=Wqa(ara());
b=(0,g.Rd)(b,function(c){return!c.uuid});
return jsa(a,b)},q7=function(a,b){cra((0,g.G)(a.o,Uqa));
b&&bra()},s7=function(a,b){g.Q.call(this);
this.C=b;var c=g.Ax("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.C(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Ya(c,l)}this.o=d;this.B=a;this.A=this.w=NaN;this.u=null;r7("Initialized with "+g.Hk(this.o))},msa=function(a,b,c){var d=f7(a.B,"/pairing/get_screen_availability");
g7(a.B,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},t7=function(a,b){a:if(c6(b)!=c6(a.o))var c=!1;
else{c=g.Pb(b);for(var d=0,e=c.length;d<e;++d)if(!a.o[c[d]]){c=!1;break a}c=!0}c||(r7("Updated online screens: "+g.Hk(a.o)),a.o=b,a.R("screenChange"));nsa(a)},u7=function(a){isNaN(a.A)||g.uo(a.A);
a.A=g.so((0,g.x)(a.Fs,a),0<a.w&&a.w<(0,g.F)()?2E4:1E4)},r7=function(a){i7("OnlineScreenService",a)},osa=function(a){var b={};
(0,g.y)(a.C(),function(c){c.token?b[c.token]=c.id:this.Kb("Requesting availability of screen w/o lounge token.")});
return b},nsa=function(a){a=g.Pb(g.Jb(a.o,function(b){return b}));
g.ob(a);a.length?g.zx("yt-remote-online-screen-ids",a.join(","),60):f6("yt-remote-online-screen-ids")},v7=function(a){m7.call(this,"ScreenService");
this.C=a;this.u=this.A=null;this.w=[];this.B={};psa(this)},rsa=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.B[b]);var k=a.Qd();if(k=(c?n6(k,c):null)||n6(k,b)){k.uuid=b;var l=w7(a,k);msa(a.u,l,function(m){e(m?l:null)})}else c?qsa(a,c,(0,g.x)(function(m){var n=w7(this,new h6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));msa(this.u,n,function(q){e(q?n:null)})},a),f):e(null)},ssa=function(a,b){for(var c=0,d=a.o.length;c<d;++c)if(a.o[c].name==b)return a.o[c];
return null},qsa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={tb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.sp(f7(a.C,"/pairing/get_lounge_token_batch"),e)},tsa=function(a){a.o=a.A.Qd();
var b=a.B,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.o.length;b<d;++b){var e=a.o[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+k6(a.o))},psa=function(a){x7(a);
a.A=new p7(a.C);a.A.subscribe("screenChange",(0,g.x)(a.hE,a));tsa(a);a.w=Wqa(g.Ax("yt-remote-automatic-screen-cache")||[]);x7(a);a.info("Initializing automatic screens: "+k6(a.w));a.u=new s7(a.C,(0,g.x)(a.Qd,a,!0));a.u.subscribe("screenChange",(0,g.x)(function(){this.R("onlineScreenChange")},a))},w7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=n6(a.w,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.w.push(b),g.zx("yt-remote-automatic-screen-cache",(0,g.G)(a.w,Uqa)));x7(a);a.B[b.uuid]=b.id;g.zx("yt-remote-device-id-map",a.B,31536E3);return b},x7=function(a){a.B=g.Ax("yt-remote-device-id-map")||{}},y7=function(a,b,c){g.Q.call(this);
this.U=c;this.H=a;this.u=b;this.A=null},z7=function(a,b){i7(a.U,b)},A7=function(a,b){y7.call(this,a,b,"CastSession");
this.o=null;this.w=0;this.C=(0,g.x)(this.uO,this);this.B=(0,g.x)(this.HM,this);this.w=g.so((0,g.x)(function(){usa(this,null)},this),12E4)},vsa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Hk(void 0));
var b={type:"getMdxSessionStatus"};a.o?a.o.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ea,(0,g.x)(function(){z7(this,"Failed to send message: getMdxSessionStatus.")},a)):z7(a,"Sending yt message without session: "+g.Hk(b))},usa=function(a,b){g.uo(a.w);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.A||a.A.id!=b){var c=(0,g.x)(a.Pn,a),d=(0,g.x)(a.Ud,a);a.Xv(b,c,d,5)}}else a.Ud(Error("Waiting for session status timed out."))},B7=function(a,b,c){y7.call(this,a,b,"DialSession");
this.w=this.G=null;this.J="";this.N=c;this.B=null;this.D=g.Ea;this.C=NaN;this.K=(0,g.x)(this.xO,this);this.o=g.Ea},wsa=function(a){a.o=a.H.xB(a.J,a.u.label,a.u.friendlyName,(0,g.x)(function(b){this.o=g.Ea;
this.Pn(b)},a),(0,g.x)(function(b){this.o=g.Ea;
this.Ud(b)},a))},xsa=function(a){var b={};
b.pairingCode=a.J;b.theme=a.N;if(a.B){var c=a.B.currentTime||0;b.v=a.B.videoId;b.t=c}era()&&(b.env_useStageMdx=1);return g.Ug(b)},C7=function(a,b){y7.call(this,a,b,"ManualSession");
this.o=g.so((0,g.x)(this.Di,this,null),150)},D7=function(a,b,c,d){g.Q.call(this);
this.u=a;this.D=b||"233637DE";this.C=c||"cl";this.G=d||!1;this.o=null;this.B=!1;this.A=[];this.w=(0,g.x)(this.oL,this)},ysa=function(a,b){return b?g.Va(a.A,function(c){return i6(b,c.label)},a):null},E7=function(a){i7("Controller",a)},bsa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},F7=function(a){return a.B||!!a.A.length||!!a.o},G7=function(a,b,c){b!=a.o&&(g.de(a.o),(a.o=b)?(c?a.R("yt-remote-cast2-receiver-resumed",b.u):a.R("yt-remote-cast2-receiver-selected",
b.u),b.subscribe("sessionScreen",(0,g.x)(a.qz,a,b)),b.A?a.R("yt-remote-cast2-session-change",b.A):c&&a.o.Di(null)):a.R("yt-remote-cast2-session-change",null))},zsa=function(a){var b=a.u.wB(),c=a.o&&a.o.u;
a=(0,g.G)(b,function(d){c&&i6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=ysa(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Fsa=function(a,b,c,d,e,f,k){Asa()?Bsa(b,e,f,k)&&(I7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Csa(a,c):(window.__onGCastApiAvailable=function(l,m){l?Csa(a,c):(J7("Failed to load cast API: "+m),K7(!1),I7(!1),f6("yt-remote-cast-available"),f6("yt-remote-cast-receiver"),Dsa(),c(!1))},d?g.Fo("https://web.archive.org/web/20200101003028/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?lra():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?v6():(kra(),u6(Esa.map(ira))))):H7("Cannot initialize because not running Chrome")},Dsa=function(){H7("dispose");
var a=L7();a&&a.dispose();g.Da("yt.mdx.remote.cloudview.instance_",null,void 0);Gsa(!1);g.Ao(M7);M7.length=0},N7=function(){return!!g.Ax("yt-remote-cast-installed")},Hsa=function(){var a=g.Ax("yt-remote-cast-receiver");
return a?a.friendlyName:null},Isa=function(){H7("clearCurrentReceiver");
f6("yt-remote-cast-receiver")},Jsa=function(){return N7()?L7()?L7().getCastSession():(J7("getCastSelector: Cast is not initialized."),null):(J7("getCastSelector: Cast API is not installed!"),null)},P7=function(){N7()?L7()?O7()?(H7("Requesting cast selector."),L7().requestSession()):(H7("Wait for cast API to be ready to request the session."),M7.push(g.zo("yt-remote-cast2-api-ready",P7))):J7("requestCastSelector: Cast is not initialized."):J7("requestCastSelector: Cast API is not installed!")},Q7=
function(a,b){O7()?L7().setConnectedScreenStatus(a,b):J7("setConnectedScreenStatus called before ready.")},Asa=function(){var a=0<=g.Gb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Qs||a},Ksa=function(a,b){L7().init(a,b)},Bsa=function(a,b,c,d){var e=!1;
L7()||(a=new D7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.zx("yt-remote-cast-available",f);e6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){H7("onReceiverSelected: "+f.friendlyName);
g.zx("yt-remote-cast-receiver",f);e6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){H7("onReceiverResumed: "+f.friendlyName);
g.zx("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){H7("onSessionChange: "+j6(f));
f||f6("yt-remote-cast-receiver");e6("yt-remote-cast2-session-change",f)}),g.Da("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
H7("cloudview.createSingleton_: "+e);return e},L7=function(){return g.w("yt.mdx.remote.cloudview.instance_")},Csa=function(a,b){K7(!0);
I7(!1);Ksa(a,function(c){c?(Gsa(!0),g.Co("yt-remote-cast2-api-ready")):(J7("Failed to initialize cast API."),K7(!1),f6("yt-remote-cast-available"),f6("yt-remote-cast-receiver"),Dsa());b(c)})},H7=function(a){i7("cloudview",a)},J7=function(a){i7("cloudview",a)},K7=function(a){H7("setCastInstalled_ "+a);
g.zx("yt-remote-cast-installed",a)},O7=function(){return!!g.w("yt.mdx.remote.cloudview.apiReady_")},Gsa=function(a){H7("setApiReady_ "+a);
g.Da("yt.mdx.remote.cloudview.apiReady_",a,void 0)},I7=function(a){g.Da("yt.mdx.remote.cloudview.initializing_",a,void 0)},R7=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.C=this.D=0;this.o=null;this.hasNext=this.Pe=!1;this.H=this.G=this.u=this.w=0;this.A=NaN;this.B=!1;this.reset(a)},S7=function(a){a.audioTrackId=null;
a.o=null;a.playerState=-1;a.Pe=!1;a.hasNext=!1;a.D=0;a.C=(0,g.F)();a.w=0;a.u=0;a.G=0;a.H=0;a.A=NaN;a.B=!1},T7=function(a){return 1==a.playerState?((0,g.F)()-a.C)/1E3:0},U7=function(a,b){a.D=b;
a.C=(0,g.F)()},V7=function(a){switch(a.playerState){case 1:case 1081:return((0,g.F)()-a.C)/1E3+a.D;
case -1E3:return 0}return a.D},W7=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&S7(a)},X7=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.$b(a.o);b.hasPrevious=a.Pe;b.hasNext=a.hasNext;b.playerTime=a.D;b.playerTimeAt=a.C;b.seekableStart=a.w;b.seekableEnd=a.u;b.duration=a.G;b.loadedTime=a.H;b.liveIngestionTime=a.A;return b},Z7=function(a,b){g.Q.call(this);
this.o=0;this.w=a;this.C=[];this.B=new Xra;this.A=this.u=null;this.H=(0,g.x)(this.oJ,this);this.D=(0,g.x)(this.Jk,this);this.G=(0,g.x)(this.nJ,this);this.J=(0,g.x)(this.AJ,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Gt,this),Lsa(this))):c=3;0!=c&&(b?this.Gt(c):g.so((0,g.x)(function(){this.Gt(c)},this),0));
var d=Jsa();d&&Y7(this,d);this.subscribe("yt-remote-cast2-session-change",this.J)},$7=function(a){return new R7(a.w.getPlayerContextData())},Lsa=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.C.push(this.w.subscribe(b,g.Oa(this.lL,b),this))},a)},Msa=function(a){(0,g.y)(a.C,function(b){this.w.unsubscribeByKey(b)},a);
a.C.length=0},a8=function(a,b){var c=a.B;
50>c.o.length+c.u.length&&a.B.u.push(b)},c8=function(a,b,c){var d=$7(a);
U7(d,c);-1E3!=d.playerState&&(d.playerState=b);b8(a,d)},d8=function(a,b,c){a.w.sendMessage(b,c)},b8=function(a,b){Msa(a);
a.w.setPlayerContextData(X7(b));Lsa(a)},Y7=function(a,b){a.A&&(a.A.removeUpdateListener(a.H),a.A.removeMediaListener(a.D),a.Jk(null));
a.A=b;a.A&&(i7("CP","Setting cast session: "+a.A.sessionId),a.A.addUpdateListener(a.H),a.A.addMediaListener(a.D),a.A.media.length&&a.Jk(a.A.media[0]))},Nsa=function(a){var b=a.u.media,c=a.u.customData;
if(b&&c){var d=$7(a);b.contentId!=d.videoId&&i7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;U7(d,a.u.getEstimatedTime());b8(a,d)}else i7("CP","No cast media video. Ignoring state update.")},e8=function(a,b,c){return(0,g.x)(function(d){this.Kb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Kb("Retrying "+b+" using MDx browser channel."),d8(this,b,c))},a)},f8=function(a,b,c){g.Q.call(this);
this.B=NaN;this.K=!1;this.G=this.D=this.H=this.J=NaN;this.U=[];this.w=this.C=this.A=this.Qa=this.o=null;this.S=a;this.U.push(g.gr(window,"beforeunload",(0,g.x)(this.SD,this)));this.u=[];this.Qa=new R7;this.N=b.id;this.o=Osa(this,c);this.o.subscribe("handlerOpened",this.sJ,this);this.o.subscribe("handlerClosed",this.pJ,this);this.o.subscribe("handlerError",this.qJ,this);this.o.subscribe("handlerMessage",this.rJ,this);asa(this.o,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Qa.videoId;
g.iN()&&g.zx("yt-remote-session-video-id",d)},this)},g8=function(a){i7("conn",a)},Osa=function(a,b){return new c7(f7(a.S,"/bc"),b)},h8=function(a,b){a.R("proxyStateChange",b)},Psa=function(a){a.B=g.so((0,g.x)(function(){g8("Connecting timeout");
this.ci(1)},a),2E4)},i8=function(a){g.uo(a.B);
a.B=NaN},j8=function(a){g.uo(a.J);
a.J=NaN},Qsa=function(a){k8(a);
a.H=g.so((0,g.x)(function(){l8(this,"getNowPlaying")},a),2E4)},k8=function(a){g.uo(a.H);
a.H=NaN},Ssa=function(a,b){b&&(i8(a),j8(a));
b==(d7(a.o)&&isNaN(a.B))?b&&(h8(a,1),l8(a,"getSubtitlesTrack")):b?(a.Vv()&&a.Qa.reset(),h8(a,1),l8(a,"getNowPlaying"),Rsa(a)):a.ci(1)},Tsa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Qa.videoId&&(g.Wb(b.params)?a.Qa.o=null:a.Qa.o=b.params,a.R("remotePlayerChange"))},Usa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Qa.listId=b.params.listId||a.Qa.listId;W7(a.Qa,c,d);a.R("remoteQueueChange")},Wsa=function(a,b){b.params=b.params||{};
Usa(a,b);Vsa(a,b);a.R("autoplayDismissed")},Vsa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
U7(a.Qa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Qa.playerState&&(c=-1E3);a.Qa.playerState=c;c=Number(b.params.loadedTime);a.Qa.H=isNaN(c)?0:c;c=Number(b.params.duration);a.Qa.G=isNaN(c)?0:c;c=a.Qa;var d=Number(b.params.liveIngestionTime);c.A=d;c.B=isNaN(d)?!1:!0;c=a.Qa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.w=isNaN(d)?0:d;c.u=isNaN(e)?0:e;1==a.Qa.playerState?Qsa(a):k8(a);a.R("remotePlayerChange")},Xsa=function(a,b){if(-1E3!=
a.Qa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Qa.playerState=c;c=parseInt(b.params.currentTime,10);U7(a.Qa,isNaN(c)?0:c);a.R("remotePlayerChange")}},Ysa=function(a,b){var c="true"==b.params.muted;
a.Qa.volume=parseInt(b.params.volume,10);a.Qa.muted=c;a.R("remotePlayerChange")},Zsa=function(a,b){a.C=b.params.videoId;
a.R("nowAutoplaying",parseInt(b.params.timeout,10))},$sa=function(a,b){var c="true"==b.params.hasNext;
a.Qa.Pe="true"==b.params.hasPrevious;a.Qa.hasNext=c;a.R("previousNextChange")},Rsa=function(a){g.uo(a.G);
a.G=g.so((0,g.x)(a.ci,a,1),864E5)},l8=function(a,b,c){c?g8("Sending: action="+b+", params="+g.Hk(c)):g8("Sending: action="+b);
a.o.sendMessage(b,c)},m8=function(a){m7.call(this,"ScreenServiceProxy");
this.Yc=a;this.u=[];this.u.push(this.Yc.$_s("screenChange",(0,g.x)(this.sO,this)));this.u.push(this.Yc.$_s("onlineScreenChange",(0,g.x)(this.PK,this)))},eta=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.jo("MDX_CONFIG")||b;Qqa();r6();n8||(n8=new e7(b?b.loungeApiHost:void 0),era()&&(n8.o="/api/loungedev"));o8||(o8=g.w("yt.mdx.remote.deferredProxies_")||[],g.Da("yt.mdx.remote.deferredProxies_",o8,void 0));ata();var c=p8();if(!c){var d=new v7(n8);g.Da("yt.mdx.remote.screenService_",d,void 0);c=p8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Fsa(a,d,function(m){m?q8()&&Q7(q8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){e6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.w("yt.mdx.remote.initialized_")&&(g.Da("yt.mdx.remote.initialized_",!0,void 0),r8("Initializing: "+g.Hk(b)),s8.push(g.zo("yt-remote-cast2-availability-change",function(){e6("yt-remote-receiver-availability-change")})),s8.push(g.zo("yt-remote-cast2-receiver-selected",function(){t8(null);
e6("yt-remote-auto-connect","cast-selector-receiver")})),s8.push(g.zo("yt-remote-cast2-receiver-resumed",function(){e6("yt-remote-receiver-resumed","cast-selector-receiver")})),s8.push(g.zo("yt-remote-cast2-session-change",bta)),s8.push(g.zo("yt-remote-connection-change",function(m){m?Q7(q8(),"YouTube TV"):u8()||(Q7(null,null),Isa())})),a=v8(),b.isAuto&&(a.id+="#dial"),g.jp("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),r8(" -- with channel params: "+
g.Hk(a)),cta(a),c.start(),q8()||dta())},gta=function(){var a=fta();
N7()&&g.Ax("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},fta=function(){var a=p8().Yc.$_gos();
var b=w8();b&&x8()&&(m6(a,b)||a.push(b));return Xqa(a)},y8=function(){var a=hta();
!a&&N7()&&Hsa()&&(a={key:"cast-selector-receiver",name:Hsa()});return a},hta=function(){var a=fta(),b=w8();
b||(b=u8());return g.Va(a,function(c){return b&&i6(b,c.key)?!0:!1})},w8=function(){var a=q8();
if(!a)return null;var b=p8().Qd();return n6(b,a)},bta=function(a){r8("remote.onCastSessionChange_: "+j6(a));
if(a){var b=w8();b&&b.id==a.id?Q7(b.id,"YouTube TV"):(b&&z8(),A8(a,1))}else x8()&&z8()},z8=function(){O7()?L7().stopSession():J7("stopSession called before API ready.");
var a=x8();a&&(a.disconnect(1),B8(null))},C8=function(){var a=x8();
return!!a&&3!=a.getProxyState()},r8=function(a){i7("remote",a)},p8=function(){if(!D8){var a=g.w("yt.mdx.remote.screenService_");
D8=a?new m8(a):null}return D8},q8=function(){return g.w("yt.mdx.remote.currentScreenId_")},ita=function(a){g.Da("yt.mdx.remote.currentScreenId_",a,void 0)},jta=function(){return g.w("yt.mdx.remote.connectData_")},t8=function(a){g.Da("yt.mdx.remote.connectData_",a,void 0)},x8=function(){return g.w("yt.mdx.remote.connection_")},B8=function(a){var b=x8();
t8(null);a||ita("");g.Da("yt.mdx.remote.connection_",a,void 0);o8&&((0,g.y)(o8,function(c){c(a)}),o8.length=0);
b&&!a?e6("yt-remote-connection-change",!1):!b&&a&&e6("yt-remote-connection-change",!0)},u8=function(){var a=g.iN();
if(!a)return null;var b=p8().Qd();return n6(b,a)},A8=function(a,b){q8();
w8()&&w8();if(E8)F8=a;else{ita(a.id);var c=new f8(n8,a,v8());c.connect(b,jta());c.subscribe("beforeDisconnect",function(d){e6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){x8()&&(x8(),B8(null))});
B8(c)}},dta=function(){var a=u8();
a?(r8("Resume connection to: "+j6(a)),A8(a,0)):(s6(),Isa(),r8("Skipping connecting because no session screen found."))},ata=function(){var a=v8();
if(g.Wb(a)){a=q6();var b=g.Ax("yt-remote-session-name")||"",c=g.Ax("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Da("yt.mdx.remote.channelParams_",a,void 0)}},v8=function(){return g.w("yt.mdx.remote.channelParams_")||{}},cta=function(a){a?(g.zx("yt-remote-session-app",a.app),g.zx("yt-remote-session-name",a.name)):(f6("yt-remote-session-app"),f6("yt-remote-session-name"));
g.Da("yt.mdx.remote.channelParams_",a,void 0)},G8=function(a,b,c){g.A.call(this);
this.B=a;this.u=b;this.A=new g.P(this);g.B(this,this.A);this.A.M(b,"onCaptionsTrackListChanged",this.lK);this.A.M(b,"captionschanged",this.mJ);this.A.M(b,"captionssettingschanged",this.FA);this.A.M(b,"videoplayerreset",this.Qn);this.A.M(b,"mdxautoplaycancel",this.MC);this.N=this.A.M(b,"onVolumeChange",this.Yy);this.G=!1;this.o=c;c.subscribe("proxyStateChange",this.mz,this);c.subscribe("remotePlayerChange",this.Mk,this);c.subscribe("remoteQueueChange",this.Qn,this);c.subscribe("autoplayUpNext",this.Oy,
this);c.subscribe("previousNextChange",this.jz,this);c.subscribe("nowAutoplaying",this.fz,this);c.subscribe("autoplayDismissed",this.Ny,this);this.suggestion=null;this.H=new g.QD(64);this.w=new g.J(this.CA,500,this);g.B(this,this.w);this.C=new g.J(this.DA,1E3,this);g.B(this,this.C);this.K=new w6(this.UN,0,this);g.B(this,this.K);this.D={};this.U=new g.J(this.iB,1E3,this);g.B(this,this.U);this.J=new g.bl(this.zG,1E3,this);g.B(this,this.J);this.S=g.Ea;this.FA();this.Qn();this.Mk()},H8=function(a,b){var c=
a.B,d=a.u.getVideoData().lengthSeconds;
c.U=b||0;c.player.R("progresssync",b,d)},kta=function(a){H8(a,0);
a.w.stop();I8(a,new g.QD(64))},K8=function(a,b){if(J8(a)&&!a.G){var c=null;
b&&(c={style:a.u.getSubtitlesUserSettings()},g.bc(c,b));a.o.sA(a.u.getVideoData(1).videoId,c);a.D=$7(a.o).o}},L8=function(a,b){var c=a.u.getPlaylist();
if(c){var d=c.Ta;var e=c.listId.toString()}c=a.u.getVideoData(1);a.o.playVideo(c.videoId,b,d,e,c.playerParams,c.Re,Jqa(c));I8(a,new g.QD(1))},lta=function(a,b){if(b){var c=a.u.getOption("captions","tracklist",{jS:1});
c&&c.length?(a.u.setOption("captions","track",b),a.G=!1):(a.u.loadModule("captions"),a.G=!0)}else a.u.setOption("captions","track",{})},J8=function(a){return $7(a.o).videoId==a.u.getVideoData(1).videoId},I8=function(a,b){a.C.stop();
var c=a.H;if(!g.WD(c,b)){var d=g.W(b,2);d!=g.W(a.H,2)&&g.xU(a.u.app,d);a.H=b;mta(a.B,c,b)}},M8=function(){g.S.call(this,{F:"div",
I:"ytp-mdx-popup-dialog",O:{role:"dialog"},L:[{F:"div",I:"ytp-mdx-popup-dialog-inner-content",L:[{F:"div",I:"ytp-mdx-popup-title",X:"You're signed out"},{F:"div",I:"ytp-mdx-popup-description",X:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{F:"div",I:"ytp-mdx-privacy-popup-buttons",L:[{F:"button",Y:["ytp-button","ytp-mdx-privacy-popup-cancel"],X:"Cancel"},{F:"button",Y:["ytp-button","ytp-mdx-privacy-popup-confirm"],
X:"Confirm"}]}]}]});this.w=new g.oN(this,250);g.B(this,this.w);this.G=this.u["ytp-mdx-privacy-popup-cancel"];this.M(this.G,"click",this.B);this.C=this.u["ytp-mdx-privacy-popup-confirm"];this.M(this.C,"click",this.D)},N8=function(a){g.S.call(this,{F:"div",
I:"ytp-remote",L:[{F:"div",I:"ytp-remote-display-status",L:[{F:"div",I:"ytp-remote-display-status-icon",L:[g.qN()]},{F:"div",I:"ytp-remote-display-status-text",X:"{{statustext}}"}]}]});this.w=new g.oN(this,250);g.B(this,this.w);this.B=a;this.M(a,"presentingplayerstatechange",this.C);nta(this,g.mL(a))},nta=function(a,b){if(3==a.B.getPresentingPlayerType()){var c={RECEIVER_NAME:a.B.getOption("remote","currentReceiver").name};
c=g.W(b,128)?g.YN("Error on $RECEIVER_NAME",c):g.XD(b)||g.W(b,4)?g.YN("Playing on $RECEIVER_NAME",c):g.YN("Connected to $RECEIVER_NAME",c);a.A("statustext",c);a.w.show()}else a.w.hide()},O8=function(a,b){g.UP.call(this,"Play on",0,a,b);
this.w=a;this.G={};this.M(a,"onMdxReceiversChange",this.N);this.M(a,"presentingplayerstatechange",this.N);this.N()},P8=function(a){g.cR.call(this,a);
this.u={key:l6(),name:"This computer"};this.B=null;this.w=[];this.N=this.o=null;this.J=[this.u];this.A=this.u;this.D=new g.QD(64);this.U=0;this.H=-1;this.C=null;if(!g.By(this.player.P())){a=this.player;var b=g.wD(a);b&&(b=b.yk())&&(b=new O8(a,b),g.B(this,b));b=new N8(a);g.B(this,b);g.FL(a,b.element,4);this.C=new M8;g.B(this,this.C);g.FL(a,this.C.element,4);this.K=!!u8()}this.G=null},Q8=function(a){a.G&&(a.player.removeEventListener("presentingplayerstatechange",a.G),a.G=null)},mta=function(a,b,c){a.D=
c;
a.player.R("presentingplayerstatechange",new g.bE(c,b))},R8=function(a,b){if(b.key!=a.A.key)if(b.key==a.u.key)z8();
else{var c;(c=!g.T(a.player.P().experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.jo("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.jo("SESSION_INDEX")&&!g.jo("LOGGED_IN")))||a.K||!a.C);if(c?0:a.player.P().mh()||"WEB_EMBEDDED_PLAYER"==a.player.P().deviceParams.c)g.XD(g.mL(a.player))?a.player.pauseVideo():(a.G=(0,g.x)(a.MM,a),a.player.addEventListener("presentingplayerstatechange",a.G)),a.C&&a.C.w.show(),x8()||(E8=!0);a.A=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);
var e=c.videoId;if(!d&&!e||(2==a.player.app.S||1==a.player.app.S)&&g.T(a.player.P().experiments,"should_clear_video_data_on_player_cued_unstarted"))c=null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.wa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Re,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=Jqa(c))&&(d.locationInfo=c);c=d}r8("Connecting to: "+
g.Hk(b));"cast-selector-receiver"==b.key?(t8(c||null),c=c||null,O7()?L7().setLaunchParams(c):J7("setLaunchParams called before ready.")):!c&&C8()&&q8()==b.key?e6("yt-remote-connection-change",!0):(z8(),t8(c||null),c=p8().Qd(),(c=n6(c,b.key))&&A8(c,1))}},ura={"\x00":"\\0",
"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},I6={"'":"\\'"},ota={},Tqa={VO:"atp",tR:"ska",iR:"que",JQ:"mus",sR:"sus",UP:"dsp",pR:"seq"};
g6.prototype.jg=function(){var a=new g6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.A=this.A;a.u=this.u;a.o=this.o};
var t6,p6="",jra=fra("loadCastFramework")||fra("loadCastApplicationFramework"),Esa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Qa(w6,g.A);g.h=w6.prototype;g.h.OD=function(a){this.w=arguments;this.o=!1;this.Ga?this.A=(0,g.F)()+this.Zc:this.Ga=g.qf(this.B,this.Zc)};
g.h.stop=function(){this.Ga&&(g.v.clearTimeout(this.Ga),this.Ga=null);this.A=null;this.o=!1;this.w=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.o&&(this.o=!1,this.C.apply(null,this.w)))};
g.h.Z=function(){this.stop();w6.yb.Z.call(this)};
g.h.PD=function(){this.A?(this.Ga=g.qf(this.B,this.A-(0,g.F)()),this.A=null):(this.Ga=null,this.u?this.o=!0:(this.o=!1,this.C.apply(null,this.w)))};y6.prototype.stringify=function(a){return g.v.JSON.stringify(a,void 0)};
y6.prototype.parse=function(a){return g.v.JSON.parse(a,void 0)};z6.prototype.o=null;z6.prototype.getOptions=function(){var a;(a=this.o)||(a={},nra(this)&&(a[0]=!0,a[1]=!0),a=this.o=a);return a};var S8;g.Qa(mra,z6);S8=new mra;g.h=A6.prototype;g.h.kh=null;g.h.Ae=!1;g.h.mj=null;g.h.Dt=null;g.h.Zi=null;g.h.mi=null;g.h.dg=null;g.h.Kg=null;g.h.Fh=null;g.h.xc=null;g.h.sl=0;g.h.Ee=null;g.h.Bo=null;g.h.rg=null;g.h.Uj=-1;g.h.mA=!0;g.h.Vg=!1;g.h.fq=0;g.h.Un=null;var sra={},D6={};g.h=A6.prototype;g.h.setTimeout=function(a){this.B=a};
g.h.bN=function(a){a=a.target;var b=this.Un;b&&3==R6(a)?b.Hm():this.qB(a)};
g.h.qB=function(a){try{if(a==this.xc)a:{var b=R6(this.xc),c=this.xc.C,d=this.xc.getStatus();if(g.Ed&&!g.jd(10)||g.Gd&&!g.id("420+")){if(4>b)break a}else if(3>b||3==b&&!g.nh&&!T6(this.xc))break a;this.Vg||4!=b||7==c||(8==c||0>=d?this.o.ze(3):this.o.ze(2));K6(this);var e=this.xc.getStatus();this.Uj=e;var f=T6(this.xc);(this.Ae=200==e)?(4==b&&G6(this),this.C?(tra(this,b,f),g.nh&&this.Ae&&3==b&&(this.w.ga(this.u,"tick",this.VM),this.u.start())):F6(this,f),this.Ae&&!this.Vg&&(4==b?this.o.Nn(this):(this.Ae=
!1,C6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.rg=3,E6(13)):(this.rg=0,E6(14)),G6(this),H6(this))}}catch(k){this.xc&&T6(this.xc)}finally{}};
g.h.VM=function(){var a=R6(this.xc),b=T6(this.xc);this.sl<b.length&&(K6(this),tra(this,a,b),this.Ae&&4!=a&&C6(this))};
g.h.pM=function(a){J6((0,g.x)(this.oM,this,a),0)};
g.h.oM=function(a){this.Vg||(K6(this),F6(this,a),C6(this))};
g.h.uz=function(a){J6((0,g.x)(this.nM,this,a),0)};
g.h.nM=function(a){this.Vg||(G6(this),this.Ae=a,this.o.Nn(this),this.o.ze(4))};
g.h.cancel=function(){this.Vg=!0;G6(this)};
g.h.wM=function(){this.mj=null;var a=(0,g.F)();0<=a-this.Dt?(2!=this.mi&&this.o.ze(3),G6(this),this.rg=2,E6(18),H6(this)):wra(this,this.Dt-a)};
g.h.getLastError=function(){return this.rg};g.h=zra.prototype;g.h.cq=null;g.h.Dd=null;g.h.Vn=!1;g.h.hw=null;g.h.pm=null;g.h.Jq=null;g.h.eq=null;g.h.ge=null;g.h.Jf=-1;g.h.Tj=null;g.h.vj=null;g.h.connect=function(a){this.eq=a;a=M6(this.o,null,this.eq);E6(3);this.hw=(0,g.F)();var b=this.o.G;null!=b?(this.Tj=b[0],(this.vj=b[1])?(this.ge=1,Ara(this)):(this.ge=2,O6(this))):(b6(a,"MODE","init"),this.Dd=new A6(this,void 0,void 0,void 0),this.Dd.kh=this.cq,B6(this.Dd,a,!1,null,!0),this.ge=0)};
g.h.NC=function(a){if(a)this.ge=2,O6(this);else{E6(4);var b=this.o;b.Oe=b.hg.Jf;$6(b,9)}a&&this.ze(2)};
g.h.zp=function(a){return this.o.zp(a)};
g.h.abort=function(){this.Dd&&(this.Dd.cancel(),this.Dd=null);this.Jf=-1};
g.h.gw=function(){return!1};
g.h.nz=function(a,b){this.Jf=a.Uj;if(0==this.ge)if(b){try{var c=this.u.parse(b)}catch(d){c=this.o;c.Oe=this.Jf;$6(c,2);return}this.Tj=c[0];this.vj=c[1]}else c=this.o,c.Oe=this.Jf,$6(c,2);else if(2==this.ge)if(this.Vn)E6(7),this.Jq=(0,g.F)();else if("11111"==b){if(E6(6),this.Vn=!0,this.pm=(0,g.F)(),c=this.pm-this.hw,!g.Ed||g.jd(10)||500>c)this.Jf=200,this.Dd.cancel(),E6(12),N6(this.o,this,!0)}else E6(8),this.pm=this.Jq=(0,g.F)(),this.Vn=!1};
g.h.Nn=function(){this.Jf=this.Dd.Uj;if(this.Dd.Ae)0==this.ge?this.vj?(this.ge=1,Ara(this)):(this.ge=2,O6(this)):2==this.ge&&((!g.Ed||g.jd(10)?!this.Vn:200>this.Jq-this.pm)?(E6(11),N6(this.o,this,!1)):(E6(12),N6(this.o,this,!0)));else{0==this.ge?E6(9):2==this.ge&&E6(10);var a=this.o;this.Dd.getLastError();a.Oe=this.Jf;$6(a,2)}};
g.h.dl=function(){return this.o.dl()};
g.h.isActive=function(){return this.o.isActive()};
g.h.ze=function(a){this.o.ze(a)};g.Qa(P6,g.De);var Fra=/^https?$/i,pta=["POST","PUT"];g.h=P6.prototype;
g.h.send=function(a,b,c,d){if(this.o)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+a);b=b?b.toUpperCase():"GET";this.H=a;this.w="";this.C=0;this.da=b;this.S=!1;this.A=!0;this.o=this.N?ora(this.N):ora(S8);this.U=this.N?this.N.getOptions():S8.getOptions();this.o.onreadystatechange=(0,g.x)(this.iw,this);try{d6(S6(this,"Opening Xhr")),this.W=!0,this.o.open(b,String(a),!0),this.W=!1}catch(f){d6(S6(this,"Error opening Xhr: "+f.message));Era(this,f);return}a=c||
"";var e=this.headers.clone();d&&Oqa(d,function(f,k){e.set(k,f)});
d=g.Va(e.de(),Cra);c=g.v.FormData&&a instanceof g.v.FormData;!g.Ya(pta,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.o.setRequestHeader(k,f)},this);
this.aa&&(this.o.responseType=this.aa);"withCredentials"in this.o&&this.o.withCredentials!==this.V&&(this.o.withCredentials=this.V);try{Hra(this),0<this.D&&(this.K=Bra(this.o),d6(S6(this,"Will abort after "+this.D+"ms if incomplete, xhr2 "+this.K)),this.K?(this.o.timeout=this.D,this.o.ontimeout=(0,g.x)(this.jw,this)):this.J=g.qf(this.jw,this.D,this)),d6(S6(this,"Sending request")),this.G=!0,this.o.send(a),this.G=!1}catch(f){d6(S6(this,"Send error: "+f.message)),Era(this,f)}};
g.h.jw=function(){"undefined"!=typeof g.G0&&this.o&&(this.w="Timed out after "+this.D+"ms, aborting",this.C=8,S6(this,this.w),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.o&&this.A&&(S6(this,"Aborting"),this.A=!1,this.B=!0,this.o.abort(),this.B=!1,this.C=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Q6(this))};
g.h.Z=function(){this.o&&(this.A&&(this.A=!1,this.B=!0,this.o.abort(),this.B=!1),Q6(this,!0));P6.yb.Z.call(this)};
g.h.iw=function(){this.ka()||(this.W||this.G||this.B?Gra(this):this.nL())};
g.h.nL=function(){Gra(this)};
g.h.isActive=function(){return!!this.o};
g.h.getStatus=function(){try{return 2<R6(this)?this.o.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return"string"===typeof this.w?this.w:String(this.w)};g.h=U6.prototype;g.h.Hj=null;g.h.wd=null;g.h.Vb=null;g.h.bq=null;g.h.rm=null;g.h.Fu=null;g.h.Im=null;g.h.Gk=0;g.h.FI=0;g.h.Wc=null;g.h.ng=null;g.h.wf=null;g.h.ah=null;g.h.hg=null;g.h.zo=null;g.h.Ci=-1;g.h.Pw=-1;g.h.Oe=-1;g.h.di=0;g.h.Yh=0;g.h.Wg=8;var a7=new g.De;g.Qa(Jra,g.fe);g.Qa(Kra,g.fe);g.Qa(Lra,g.fe);g.h=U6.prototype;g.h.connect=function(a,b,c,d,e){E6(0);this.bq=b;this.Hj=c||{};d&&void 0!==e&&(this.Hj.OSID=d,this.Hj.OAID=e);this.C?(J6((0,g.x)(this.Xu,this,a),100),Pra(this)):this.Xu(a)};
g.h.Xu=function(a){this.hg=new zra(this);this.hg.cq=null;this.hg.u=this.B;this.hg.connect(a)};
g.h.gw=function(){return 0==this.o};
g.h.sz=function(a){this.ng=null;Sra(this,a)};
g.h.rz=function(){this.wf=null;this.Vb=new A6(this,this.A,"rpc",this.D);this.Vb.kh=null;this.Vb.fq=0;var a=this.Fu.clone();$5(a,"RID","rpc");$5(a,"SID",this.A);$5(a,"CI",this.zo?"0":"1");$5(a,"AID",this.Ci);V6(this,a);if(!g.Ed||g.jd(10))$5(a,"TYPE","xmlhttp"),B6(this.Vb,a,!0,this.Im,!1);else{$5(a,"TYPE","html");var b=this.Vb,c=!!this.Im;b.mi=3;b.dg=a6(a.clone());vra(b,c)}};
g.h.nz=function(a,b){if(0!=this.o&&(this.Vb==a||this.wd==a))if(this.Oe=a.Uj,this.wd==a&&3==this.o)if(7<this.Wg){try{var c=this.B.parse(b)}catch(f){c=null}if(g.Ha(c)&&3==c.length)if(0==c[0])a:{if(!this.wf){if(this.Vb)if(this.Vb.Zi+3E3<this.wd.Zi)X6(this),this.Vb.cancel(),this.Vb=null;else break a;Z6(this);E6(19)}}else this.Pw=c[1],0<this.Pw-this.Ci&&37500>c[2]&&this.zo&&0==this.Yh&&!this.ah&&(this.ah=J6((0,g.x)(this.iJ,this),6E3));else $6(this,11)}else b!=ota.sP.o&&$6(this,11);else if(this.Vb==a&&
X6(this),!g.ub(b)){c=this.B.parse(b);g.Ha(c);for(var d=0;d<c.length;d++){var e=c[d];this.Ci=e[0];e=e[1];2==this.o?"c"==e[0]?(this.A=e[1],this.Im=e[2],e=e[3],null!=e?this.Wg=e:this.Wg=6,this.o=3,this.Wc&&this.Wc.Tu(),this.Fu=M6(this,this.dl()?this.Im:null,this.bq),Tra(this)):"stop"==e[0]&&$6(this,7):3==this.o&&("stop"==e[0]?$6(this,7):"noop"!=e[0]&&this.Wc&&this.Wc.Su(e),this.Yh=0)}}};
g.h.iJ=function(){null!=this.ah&&(this.ah=null,this.Vb.cancel(),this.Vb=null,Z6(this),E6(20))};
g.h.Nn=function(a){if(this.Vb==a){X6(this);this.Vb=null;var b=2}else if(this.wd==a)this.wd=null,b=1;else return;this.Oe=a.Uj;if(0!=this.o)if(a.Ae)1==b?(b=(0,g.F)()-a.Zi,a7.dispatchEvent(new Kra(a7,a.Fh?a.Fh.length:0,b,this.di)),W6(this),this.w.length=0):Tra(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Oe)){if(d=1==b)this.wd||this.ng||1==this.o||2<=this.di?d=!1:(this.ng=J6((0,g.x)(this.sz,this,a),Ura(this,this.di)),this.di++,d=!0);d=!(d||2==b&&Z6(this))}if(d)switch(c){case 1:$6(this,
5);break;case 4:$6(this,10);break;case 3:$6(this,6);break;case 7:$6(this,12);break;default:$6(this,2)}}};
g.h.iD=function(a){if(!g.Ya(arguments,this.o))throw Error("Unexpected channel state: "+this.o);};
g.h.JN=function(a){a?E6(2):(E6(1),Vra(this,8))};
g.h.zp=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new P6;a.V=!1;return a};
g.h.isActive=function(){return!!this.Wc&&this.Wc.isActive(this)};
g.h.ze=function(a){a7.dispatchEvent(new Lra(a7,a))};
g.h.dl=function(){return!(!g.Ed||g.jd(10))};
g.h=Wra.prototype;g.h.Tu=function(){};
g.h.Su=function(){};
g.h.Ru=function(){};
g.h.pp=function(){};
g.h.Ev=function(){return{}};
g.h.isActive=function(){return!0};g.h=Xra.prototype;g.h.isEmpty=function(){return g.Za(this.o)&&g.Za(this.u)};
g.h.clear=function(){this.o=[];this.u=[]};
g.h.contains=function(a){return g.Ya(this.o,a)||g.Ya(this.u,a)};
g.h.remove=function(a){var b=this.o;var c=(0,g.zna)(b,a);0<=c?(g.ab(b,c),b=!0):b=!1;return b||g.bb(this.u,a)};
g.h.qd=function(){for(var a=[],b=this.o.length-1;0<=b;--b)a.push(this.o[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};g.Qa(b7,g.A);g.h=b7.prototype;g.h.gM=function(){this.Zc=Math.min(3E5,2*this.Zc);this.A();this.u&&this.start()};
g.h.start=function(){var a=this.Zc+15E3*Math.random();g.Xm(this.o,a);this.u=(0,g.F)()+a};
g.h.stop=function(){this.o.stop();this.u=0};
g.h.isActive=function(){return this.o.isActive()};
g.h.reset=function(){this.o.stop();this.Zc=5E3};g.Qa(c7,Wra);g.h=c7.prototype;g.h.subscribe=function(a,b,c){return this.A.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.A.unsubscribe(a,b,c)};
g.h.We=function(a){return this.A.lh(a)};
g.h.R=function(a,b){return this.A.R.apply(this.A,arguments)};
g.h.dispose=function(){this.fb||(this.fb=!0,g.de(this.A),$ra(this),g.de(this.u),this.u=null)};
g.h.ka=function(){return this.fb};
g.h.connect=function(a,b,c){if(!this.o||2!=this.o.o){this.H="";this.u.stop();this.B=a||null;this.w=b||0;a=this.J+"/test";b=this.J+"/bind";var d=new U6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.K),e=this.o;e&&(e.Wc=null);d.Wc=this;this.o=d;e?this.o.connect(a,b,this.C,e.A,e.Ci):c?this.o.connect(a,b,this.C,c.sessionId,c.arrayId):this.o.connect(a,b,this.C)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.bc(c,b);this.u.isActive()||2==(this.o?this.o.o:0)?this.D.push(c):d7(this)&&Qra(this.o,c)};
g.h.Tu=function(){this.u.reset();this.B=null;this.w=0;if(this.D.length){var a=this.D;this.D=[];for(var b=0,c=a.length;b<c;++b)Qra(this.o,a[b])}this.R("handlerOpened")};
g.h.Ru=function(a){var b=2==a&&401==this.o.Oe;4==a||b||this.u.start();this.R("handlerError",a)};
g.h.pp=function(a){if(!this.u.isActive())this.R("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.D.push(d)}};
g.h.Ev=function(){var a={v:2};this.H&&(a.gsessionid=this.H);0!=this.w&&(a.ui=""+this.w);0!=this.G&&(a.ui=""+this.G);this.B&&g.bc(a,this.B);return a};
g.h.Su=function(a){"S"==a[0]?this.H=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),Ora(this.o)):this.R("handlerMessage",new Yra(a[0],a[1]))};
g.h.mN=function(){this.u.isActive();var a=this.o,b=0;a.Vb&&b++;a.wd&&b++;0==b&&this.connect(this.B,this.w)};e7.prototype.w=function(a,b,c,d){b?a(d):a({text:c.responseText})};
e7.prototype.A=function(a,b){a(Error("Request error: "+b.status))};
e7.prototype.B=function(a){a(Error("request timed out"))};var hsa=(0,g.F)(),h7=null,k7=Array(50),j7=-1,l7=!1;g.Qa(m7,g.Q);m7.prototype.Qd=function(){return this.o};
m7.prototype.contains=function(a){return!!m6(this.o,a)};
m7.prototype.get=function(a){return a?n6(this.o,a):null};
m7.prototype.info=function(a){i7(this.D,a)};g.r(n7,g.Q);g.h=n7.prototype;g.h.start=function(){!this.o&&isNaN(this.Ga)&&this.vB()};
g.h.stop=function(){this.o&&(this.o.abort(),this.o=null);isNaN(this.Ga)||(g.uo(this.Ga),this.Ga=NaN)};
g.h.Z=function(){this.stop();g.Q.prototype.Z.call(this)};
g.h.vB=function(){this.Ga=NaN;this.o=g.sp(f7(this.C,"/pairing/get_screen"),{method:"POST",tb:{pairing_code:this.B},timeout:5E3,onSuccess:(0,g.x)(this.qO,this),onError:(0,g.x)(this.pO,this),Vd:(0,g.x)(this.rO,this)})};
g.h.qO=function(a,b){this.o=null;var c=b.screen||{};c.dialId=this.A;c.name=this.w;this.R("pairingComplete",new h6(c))};
g.h.pO=function(a){this.o=null;a.status&&404==a.status?this.u>=qta.length?this.R("pairingFailed",Error("DIAL polling timed out")):(a=qta[this.u],this.Ga=g.so((0,g.x)(this.vB,this),a),this.u++):this.R("pairingFailed",Error("Server error "+a.status))};
g.h.rO=function(){this.o=null;this.R("pairingFailed",Error("Server not responding"))};
var qta=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Qa(p7,m7);g.h=p7.prototype;g.h.start=function(){o7(this)&&this.R("screenChange");!g.Ax("yt-remote-lounge-token-expiration")&&lsa(this);g.uo(this.u);this.u=g.so((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){o7(this);isa(this,a);q7(this,!1);this.R("screenChange");b(a);a.token||lsa(this)};
g.h.remove=function(a,b){var c=o7(this);ksa(this,a)&&(q7(this,!1),c=!0);b(a);c&&this.R("screenChange")};
g.h.wo=function(a,b,c,d){var e=o7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,q7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.R("screenChange")};
g.h.Z=function(){g.uo(this.u);p7.yb.Z.call(this)};
g.h.ZD=function(a){o7(this);var b=this.o.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}q7(this,!b);b&&i7(this.D,"Missed "+b+" lounge tokens.")};
g.h.YD=function(a){i7(this.D,"Requesting lounge tokens failed: "+a)};g.r(s7,g.Q);g.h=s7.prototype;g.h.start=function(){var a=parseInt(g.Ax("yt-remote-fast-check-period")||"0",10);(this.w=(0,g.F)()-144E5<a?0:a)?u7(this):(this.w=(0,g.F)()+3E5,g.zx("yt-remote-fast-check-period",this.w),this.Fs())};
g.h.isEmpty=function(){return g.Wb(this.o)};
g.h.update=function(){r7("Updating availability on schedule.");var a=this.C(),b=g.Jb(this.o,function(c,d){return c&&!!n6(a,d)},this);
t7(this,b)};
g.h.Z=function(){g.uo(this.A);this.A=NaN;this.u&&(this.u.abort(),this.u=null);g.Q.prototype.Z.call(this)};
g.h.Fs=function(){g.uo(this.A);this.A=NaN;this.u&&this.u.abort();var a=osa(this);if(c6(a)){var b=f7(this.B,"/pairing/get_screen_availability");this.u=g7(this.B,b,{lounge_token:g.Pb(a).join(",")},(0,g.x)(this.JL,this,a),(0,g.x)(this.IL,this))}else t7(this,{}),u7(this)};
g.h.JL=function(a,b){this.u=null;var c=g.Pb(osa(this));if(g.pb(c,g.Pb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;t7(this,d);u7(this)}else this.Kb("Changing Screen set during request."),this.Fs()};
g.h.IL=function(a){this.Kb("Screen availability failed: "+a);this.u=null;u7(this)};
g.h.Kb=function(a){i7("OnlineScreenService",a)};g.Qa(v7,m7);g.h=v7.prototype;g.h.start=function(){this.A.start();this.u.start();this.o.length&&(this.R("screenChange"),this.u.isEmpty()||this.R("onlineScreenChange"))};
g.h.add=function(a,b,c){this.A.add(a,b,c)};
g.h.remove=function(a,b,c){this.A.remove(a,b,c);this.u.update()};
g.h.wo=function(a,b,c,d){this.A.contains(a)?this.A.wo(a,b,c,d):(a="Updating name of unknown screen: "+a.name,i7(this.D,a),d(Error(a)))};
g.h.Qd=function(a){return a?this.o:g.db(this.o,(0,g.Rd)(this.w,function(b){return!this.contains(b)},this))};
g.h.wB=function(){return(0,g.Rd)(this.Qd(!0),function(a){return!!this.u.o[a.id]},this)};
g.h.xB=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new n7(this.C,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.de(f);d(w7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.de(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.tO=function(a,b,c,d){g.sp(f7(this.C,"/pairing/get_screen"),{method:"POST",tb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new h6(f.screen||{});if(!k.name||ssa(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);ssa(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(w7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
Vd:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.Z=function(){g.de(this.A);g.de(this.u);v7.yb.Z.call(this)};
g.h.hE=function(){tsa(this);this.R("screenChange");this.u.update()};
v7.prototype.dispose=v7.prototype.dispose;g.Qa(y7,g.Q);g.h=y7.prototype;g.h.Pn=function(a){this.A=a;this.R("sessionScreen",this.A)};
g.h.Ud=function(a){this.ka()||(a&&z7(this,""+a),this.A=null,this.R("sessionScreen",null))};
g.h.info=function(a){i7(this.U,a)};
g.h.zB=function(){return null};
g.h.Ps=function(a){var b=this.u;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){z7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.Z=function(){this.Ps("");y7.yb.Z.call(this)};g.Qa(A7,y7);g.h=A7.prototype;g.h.Os=function(a){if(this.o){if(this.o==a)return;z7(this,"Overriding cast sesison with new session object");this.o.removeUpdateListener(this.C);this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B)}this.o=a;this.o.addUpdateListener(this.C);this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.B);vsa(this)};
g.h.Di=function(a){this.info("launchWithParams no-op for Cast: "+g.Hk(a))};
g.h.stop=function(){this.o?this.o.stop((0,g.x)(function(){this.Ud()},this),(0,g.x)(function(){this.Ud(Error("Failed to stop receiver app."))},this)):this.Ud(Error("Stopping cast device witout session."))};
g.h.Ps=g.Ea;g.h.Z=function(){this.info("disposeInternal");g.uo(this.w);this.w=0;this.o&&(this.o.removeUpdateListener(this.C),this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.B));this.o=null;A7.yb.Z.call(this)};
g.h.HM=function(a,b){if(!this.ka())if(b){var c=x6(b);if(g.La(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Hk(c));switch(d){case "mdxSessionStatus":usa(this,c.screenId);break;default:z7(this,"Unknown youtube message: "+d)}}else z7(this,"Unable to parse message.")}else z7(this,"No data in message.")};
g.h.Xv=function(a,b,c,d){rsa(this.H,this.u.label,a,this.u.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(z7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.so((0,g.x)(this.Xv,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.zB=function(){return this.o};
g.h.uO=function(a){this.ka()||a||(z7(this,"Cast session died."),this.Ud())};g.Qa(B7,y7);g.h=B7.prototype;g.h.Os=function(a){this.w=a;this.w.addUpdateListener(this.K)};
g.h.Di=function(a){this.B=a;this.D()};
g.h.stop=function(){this.o();this.o=g.Ea;g.uo(this.C);this.w?this.w.stop((0,g.x)(this.Ud,this,null),(0,g.x)(this.Ud,this,"Failed to stop DIAL device.")):this.Ud()};
g.h.Z=function(){this.o();this.o=g.Ea;g.uo(this.C);this.w&&this.w.removeUpdateListener(this.K);this.w=null;B7.yb.Z.call(this)};
g.h.xO=function(a){this.ka()||a||(z7(this,"DIAL session died."),this.o(),this.o=g.Ea,this.Ud())};
g.h.tq=function(a){this.J=l6();if(this.B){var b=new chrome.cast.DialLaunchResponse(!0,xsa(this));a(b);wsa(this)}else this.D=(0,g.x)(function(){g.uo(this.C);this.D=g.Ea;this.C=NaN;var c=new chrome.cast.DialLaunchResponse(!0,xsa(this));a(c);wsa(this)},this),this.C=g.so((0,g.x)(function(){this.D()},this),100)};
g.h.CE=function(a,b,c){rsa(this.H,this.G.receiver.label,a,this.u.friendlyName,(0,g.x)(function(d){d&&d.token?(this.Pn(d),b(new chrome.cast.DialLaunchResponse(!1))):this.tq(b,c)},this),(0,g.x)(function(d){z7(this,"Failed to get DIAL screen: "+d);
this.tq(b,c)},this))};g.Qa(C7,y7);C7.prototype.stop=function(){this.Ud()};
C7.prototype.Os=g.Ea;C7.prototype.Di=function(){g.uo(this.o);this.o=NaN;var a=n6(this.H.Qd(),this.u.label);a?this.Pn(a):this.Ud(Error("No such screen"))};
C7.prototype.Z=function(){g.uo(this.o);this.o=NaN;C7.yb.Z.call(this)};g.Qa(D7,g.Q);g.h=D7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.D);this.G||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.sL,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.pz,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.HJ,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ka()||
(chrome.cast.addReceiverActionListener(this.w),esa(),this.u.subscribe("onlineScreenChange",(0,g.x)(this.yB,this)),this.A=zsa(this),chrome.cast.setCustomReceivers(this.A,g.Ea,(0,g.x)(function(k){this.Kb("Failed to set initial custom receivers: "+g.Hk(k))},this)),this.R("yt-remote-cast2-availability-change",F7(this)),b(!0))},this),(0,g.x)(function(k){this.Kb("Failed to initialize API: "+g.Hk(k));
b(!1)},this))};
g.h.tN=function(a,b){E7("Setting connected screen ID: "+a+" -> "+b);if(this.o){var c=this.o.A;if(!a||c&&c.id!=a)E7("Unsetting old screen status: "+this.o.u.friendlyName),G7(this,null)}if(a&&b){if(!this.o){c=n6(this.u.Qd(),a);if(!c){E7("setConnectedScreenStatus: Unknown screen.");return}var d=ysa(this,c);d||(E7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.A.push(d),chrome.cast.setCustomReceivers(this.A,
g.Ea,(0,g.x)(function(e){this.Kb("Failed to set initial custom receivers: "+g.Hk(e))},this)));
E7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);G7(this,new C7(this.u,d),!0)}this.o.Ps(b)}else E7("setConnectedScreenStatus: no screen.")};
g.h.uN=function(a){this.ka()?this.Kb("Setting connection data on disposed cast v2"):this.o?this.o.Di(a):this.Kb("Setting connection data without a session")};
g.h.wO=function(){this.ka()?this.Kb("Stopping session on disposed cast v2"):this.o?(this.o.stop(),G7(this,null)):E7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.pz,this),(0,g.x)(this.PL,this))};
g.h.Z=function(){this.u.unsubscribe("onlineScreenChange",(0,g.x)(this.yB,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.w);var a=bsa,b=g.w("yt.mdx.remote.debug.handlers_");g.bb(b||[],a);g.de(this.o);D7.yb.Z.call(this)};
g.h.Kb=function(a){i7("Controller",a)};
g.h.qz=function(a,b){this.o==a&&(b||G7(this,null),this.R("yt-remote-cast2-session-change",b))};
g.h.oL=function(a,b){if(!this.ka())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),E7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.o)if(this.o.u.label!=a.label)E7("onReceiverAction_: Stopping active receiver: "+this.o.u.friendlyName),this.o.stop();else{E7("onReceiverAction_: Casting to active receiver.");this.o.A&&this.R("yt-remote-cast2-session-change",this.o.A);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:G7(this,
new C7(this.u,a));break;case chrome.cast.ReceiverType.DIAL:G7(this,new B7(this.u,a,this.C));break;case chrome.cast.ReceiverType.CAST:G7(this,new A7(this.u,a));break;default:this.Kb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.o&&this.o.u.label==a.label?this.o.stop():this.Kb("Stopping receiver w/o session: "+a.friendlyName)}else this.Kb("onReceiverAction_ called without receiver.")};
g.h.HJ=function(a){if(this.ka())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Kb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.o?this.o.u:null;if(!c||c.label!=b.label)return this.Kb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.o.A)return E7("Reselecting dial screen."),
this.R("yt-remote-cast2-session-change",this.o.A),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Kb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);G7(this,new B7(this.u,b,this.C))}b=this.o;b.G=a;return b.G.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.CE,b,(b.G.extraData||{}).screenId||null)):new Promise((0,g.x)(b.tq,b))};
g.h.pz=function(a){if(!this.ka()){E7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.o)if(b.receiverType==chrome.cast.ReceiverType.CAST)E7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),G7(this,new A7(this.u,b),!0);else{this.Kb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.o.u,d=n6(this.u.Qd(),c.label);d&&i6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(E7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.de(this.o),this.o=new A7(this.u,b),this.o.subscribe("sessionScreen",(0,g.x)(this.qz,this,this.o)),this.o.Di(null));this.o.Os(a)}}};
g.h.vO=function(){return this.o?this.o.zB():null};
g.h.PL=function(a){this.ka()||(this.Kb("Failed to estabilish a session: "+g.Hk(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&G7(this,null))};
g.h.sL=function(a){E7("Receiver availability updated: "+a);if(!this.ka()){var b=F7(this);this.B=a==chrome.cast.ReceiverAvailability.AVAILABLE;F7(this)!=b&&this.R("yt-remote-cast2-availability-change",F7(this))}};
g.h.yB=function(){this.ka()||(this.A=zsa(this),E7("Updating custom receivers: "+g.Hk(this.A)),chrome.cast.setCustomReceivers(this.A,g.Ea,(0,g.x)(function(){this.Kb("Failed to set custom receivers.")},this)),this.R("yt-remote-cast2-availability-change",F7(this)))};
D7.prototype.setLaunchParams=D7.prototype.uN;D7.prototype.setConnectedScreenStatus=D7.prototype.tN;D7.prototype.stopSession=D7.prototype.wO;D7.prototype.getCastSession=D7.prototype.vO;D7.prototype.requestSession=D7.prototype.requestSession;D7.prototype.init=D7.prototype.init;D7.prototype.dispose=D7.prototype.dispose;var M7=[];R7.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";S7(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.o=a.trackData,this.Pe=a.hasPrevious,this.hasNext=a.hasNext,this.D=a.playerTime,this.C=a.playerTimeAt,this.w=a.seekableStart,this.u=a.seekableEnd,this.G=a.duration,this.H=a.loadedTime,this.A=a.liveIngestionTime,this.B=
!isNaN(this.A))};
R7.prototype.isAdPlaying=function(){return 1081==this.playerState};
R7.prototype.getDuration=function(){return this.B?this.G+T7(this):this.G};
R7.prototype.clone=function(){return new R7(X7(this))};g.r(Z7,g.Q);g.h=Z7.prototype;g.h.play=function(){1==this.o?(this.u?this.u.play(null,g.Ea,e8(this,"play")):d8(this,"play"),c8(this,1,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.play)};
g.h.pause=function(){1==this.o?(this.u?this.u.pause(null,g.Ea,e8(this,"pause")):d8(this,"pause"),c8(this,2,V7($7(this))),this.R("remotePlayerChange")):a8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.o){if(this.u){var b=$7(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.u.seek(c,g.Ea,e8(this,"seekTo",{newTime:a}))}else d8(this,"seekTo",{newTime:a});c8(this,3,a);this.R("remotePlayerChange")}else a8(this,g.Oa(this.seekTo,a))};
g.h.stop=function(){if(1==this.o){this.u?this.u.stop(null,g.Ea,e8(this,"stopVideo")):d8(this,"stopVideo");var a=$7(this);a.index=-1;a.videoId="";S7(a);b8(this,a);this.R("remotePlayerChange")}else a8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.o){var c=$7(this);if(this.A){if(c.volume!=a){var d=Math.round(a)/100;this.A.setReceiverVolumeLevel(d,(0,g.x)(function(){i7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Kb("failed to set receiver volume.")},this))}c.muted!=b&&this.A.setReceiverMuted(b,(0,g.x)(function(){i7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Kb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);d8(this,"setVolume",e)}c.muted=b;c.volume=a;b8(this,c)}else a8(this,g.Oa(this.setVolume,a,b))};
g.h.sA=function(a,b){if(1==this.o){var c=$7(this),d={videoId:a};b&&(c.o={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Hk(b.style),g.bc(d,c.o));d8(this,"setSubtitlesTrack",d);b8(this,c)}else a8(this,g.Oa(this.sA,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.o){var c=b.getLanguageInfo().getId();d8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=$7(this);d.audioTrackId=c;b8(this,d)}else a8(this,g.Oa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=$7(this);c=c||0;var m={videoId:a,currentIndex:c};W7(l,a,c);void 0!==b&&(U7(l,b),m.currentTime=b);void 0!==d&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Hk(k));d8(this,"setPlaylist",m);d||b8(this,l)};
g.h.tB=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"previous")}else a8(this,g.Oa(this.tB,a,b))};
g.h.nextVideo=function(a,b){if(1==this.o){if(a&&b){var c=$7(this);W7(c,a,b);b8(this,c)}d8(this,"next")}else a8(this,g.Oa(this.nextVideo,a,b))};
g.h.ev=function(){1==this.o?d8(this,"dismissAutoplay"):a8(this,this.ev)};
g.h.dispose=function(){if(3!=this.o){var a=this.o;this.o=3;this.R("proxyStateChange",a,this.o)}g.Q.prototype.dispose.call(this)};
g.h.Z=function(){Msa(this);this.w=null;this.B.clear();Y7(this,null);g.Q.prototype.Z.call(this)};
g.h.Gt=function(a){if((a!=this.o||2==a)&&3!=this.o&&0!=a){var b=this.o;this.o=a;this.R("proxyStateChange",b,a);if(1==a)for(;!this.B.isEmpty();)b=a=this.B,g.Za(b.o)&&(b.o=b.u,b.o.reverse(),b.u=[]),a.o.pop().apply(this);else 3==a&&this.dispose()}};
g.h.lL=function(a,b){this.R(a,b)};
g.h.oJ=function(a){if(!a)this.Jk(null),Y7(this,null);else if(this.A.receiver.volume){a=this.A.receiver.volume;var b=$7(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)i7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,b8(this,b)}};
g.h.Jk=function(a){i7("CP","Cast media: "+!!a);this.u&&this.u.removeUpdateListener(this.G);if(this.u=a)this.u.addUpdateListener(this.G),Nsa(this),this.R("remotePlayerChange")};
g.h.nJ=function(a){a?(Nsa(this),this.R("remotePlayerChange")):this.Jk(null)};
g.h.AJ=function(){var a=Jsa();a&&Y7(this,a)};
g.h.Kb=function(a){i7("CP",a)};g.r(f8,g.Q);g.h=f8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;void 0!==m&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);void 0!==k&&(l.currentIndex=k);c&&(this.Qa.listId=c);this.Qa.videoId=d;this.Qa.index=k||0;this.Qa.state=3;U7(this.Qa,m);this.w="UNSUPPORTED";g8("Connecting with setPlaylist and params: "+g.Hk(l));this.o.connect({method:"setPlaylist",
params:g.Hk(l)},a,$qa())}else g8("Connecting without params"),this.o.connect({},a,$qa());Psa(this)};
g.h.dispose=function(){this.ka()||(this.R("beforeDispose"),h8(this,3));g.Q.prototype.dispose.call(this)};
g.h.Z=function(){i8(this);k8(this);j8(this);g.uo(this.D);this.D=NaN;g.uo(this.G);this.G=NaN;this.A=null;g.hr(this.U);this.U.length=0;this.o.dispose();g.Q.prototype.Z.call(this);this.w=this.C=this.u=this.Qa=this.o=null};
g.h.SD=function(){this.ci(2)};
g.h.sJ=function(){g8("Channel opened");this.K&&(this.K=!1,j8(this),this.J=g.so((0,g.x)(function(){g8("Timing out waiting for a screen.");this.ci(1)},this),15E3));
dra(Zra(this.o),this.N)};
g.h.pJ=function(){g8("Channel closed");isNaN(this.B)?s6(!0):s6();this.dispose()};
g.h.qJ=function(a){s6();isNaN(this.Nj())?(g8("Channel error: "+a+" without reconnection"),this.dispose()):(this.K=!0,g8("Channel error: "+a+" with reconnection in "+this.Nj()+" ms"),h8(this,2))};
g.h.rJ=function(a){a.params?g8("Received: action="+a.action+", params="+g.Hk(a.params)):g8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=x6(a.params.devices);this.u=(0,g.G)(a,function(c){return new g6(c)});
a=!!g.Va(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Ssa(this,a);break;case "loungeScreenDisconnected":g.cb(this.u,function(c){return"LOUNGE_SCREEN"==c.type});
Ssa(this,!1);break;case "remoteConnected":var b=new g6(x6(a.params.device));g.Va(this.u,function(c){return b?c.id==b.id:!1})||Kqa(this.u,b);
break;case "remoteDisconnected":b=new g6(x6(a.params.device));g.cb(this.u,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Usa(this,a);break;case "nowPlaying":Wsa(this,a);break;case "onStateChange":Vsa(this,a);break;case "onAdStateChange":Xsa(this,a);break;case "onVolumeChanged":Ysa(this,a);break;case "onSubtitlesTrackChanged":Tsa(this,a);break;case "nowAutoplaying":Zsa(this,a);break;case "autoplayDismissed":this.R("autoplayDismissed");break;case "autoplayUpNext":this.C=a.params.videoId||null;this.R("autoplayUpNext",this.C);break;case "onAutoplayModeChanged":this.w=
a.params.autoplayMode;this.R("autoplayModeChange",this.w);"DISABLED"==this.w&&this.R("autoplayDismissed");break;case "onHasPreviousNextChanged":$sa(this,a);break;case "requestAssistedSignIn":this.R("assistedSignInRequested",a.params.authCode);break;default:g8("Unrecognized action: "+a.action)}};
g.h.jN=function(){if(this.A){var a=this.A;this.A=null;this.Qa.videoId!=a&&l8(this,"getNowPlaying")}};
g.h.HD=function(){var a=3;this.ka()||(a=0,isNaN(this.Nj())?d7(this.o)&&isNaN(this.B)&&(a=1):a=2);return a};
g.h.ci=function(a){g8("Disconnecting with "+a);i8(this);this.R("beforeDisconnect",a);1==a&&s6();$ra(this.o,a);this.dispose()};
g.h.GD=function(){var a=this.Qa;this.A&&(a=this.Qa.clone(),W7(a,this.A,a.index));return X7(a)};
g.h.vN=function(a){var b=new R7(a);b.videoId&&b.videoId!=this.Qa.videoId&&(this.A=b.videoId,g.uo(this.D),this.D=g.so((0,g.x)(this.jN,this),5E3));var c=[];this.Qa.listId==b.listId&&this.Qa.videoId==b.videoId&&this.Qa.index==b.index||c.push("remoteQueueChange");this.Qa.playerState==b.playerState&&this.Qa.volume==b.volume&&this.Qa.muted==b.muted&&V7(this.Qa)==V7(b)&&g.Hk(this.Qa.o)==g.Hk(b.o)||c.push("remotePlayerChange");this.Qa.reset(a);(0,g.y)(c,function(d){this.R(d)},this)};
g.h.Vv=function(){var a=this.o.C.id,b=g.Va(this.u,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Nj=function(){var a=this.o;return a.u.isActive()?a.u.u-(0,g.F)():NaN};
g.h.vD=function(){return this.w||"UNSUPPORTED"};
g.h.wD=function(){return this.C||""};
g.h.oO=function(){if(!isNaN(this.Nj())){var a=this.o.u;g.Ym(a.o);a.start()}};
g.h.qN=function(a,b){l8(this,a,b);Rsa(this)};
f8.prototype.subscribe=f8.prototype.subscribe;f8.prototype.unsubscribeByKey=f8.prototype.We;f8.prototype.getProxyState=f8.prototype.HD;f8.prototype.disconnect=f8.prototype.ci;f8.prototype.getPlayerContextData=f8.prototype.GD;f8.prototype.setPlayerContextData=f8.prototype.vN;f8.prototype.getOtherConnectedRemoteId=f8.prototype.Vv;f8.prototype.getReconnectTimeout=f8.prototype.Nj;f8.prototype.getAutoplayMode=f8.prototype.vD;f8.prototype.getAutoplayVideoId=f8.prototype.wD;f8.prototype.reconnect=f8.prototype.oO;
f8.prototype.sendMessage=f8.prototype.qN;g.r(m8,m7);g.h=m8.prototype;g.h.Qd=function(a){return this.Yc.$_gs(a)};
g.h.contains=function(a){return!!this.Yc.$_c(a)};
g.h.get=function(a){return this.Yc.$_g(a)};
g.h.start=function(){this.Yc.$_st()};
g.h.add=function(a,b,c){this.Yc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Yc.$_r(a,b,c)};
g.h.wo=function(a,b,c,d){this.Yc.$_un(a,b,c,d)};
g.h.Z=function(){for(var a=0,b=this.u.length;a<b;++a)this.Yc.$_ubk(this.u[a]);this.u.length=0;this.Yc=null;m7.prototype.Z.call(this)};
g.h.sO=function(){this.R("screenChange")};
g.h.PK=function(){this.R("onlineScreenChange")};
v7.prototype.$_st=v7.prototype.start;v7.prototype.$_gspc=v7.prototype.tO;v7.prototype.$_gsppc=v7.prototype.xB;v7.prototype.$_c=v7.prototype.contains;v7.prototype.$_g=v7.prototype.get;v7.prototype.$_a=v7.prototype.add;v7.prototype.$_un=v7.prototype.wo;v7.prototype.$_r=v7.prototype.remove;v7.prototype.$_gs=v7.prototype.Qd;v7.prototype.$_gos=v7.prototype.wB;v7.prototype.$_s=v7.prototype.subscribe;v7.prototype.$_ubk=v7.prototype.We;var F8=null,E8=!1,n8=null,o8=null,D8=null,s8=[];g.r(G8,g.A);g.h=G8.prototype;
g.h.Z=function(){g.A.prototype.Z.call(this);this.w.stop();this.C.stop();this.K.stop();this.S();this.o.unsubscribe("proxyStateChange",this.mz,this);this.o.unsubscribe("remotePlayerChange",this.Mk,this);this.o.unsubscribe("remoteQueueChange",this.Qn,this);this.o.unsubscribe("autoplayUpNext",this.Oy,this);this.o.unsubscribe("previousNextChange",this.jz,this);this.o.unsubscribe("nowAutoplaying",this.fz,this);this.o.unsubscribe("autoplayDismissed",this.Ny,this);this.o=this.B=null};
g.h.Ix=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.o.o)if(J8(this)){if(!$7(this.o).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==$7(this.o).playerState?this.o.pause():this.o.play();break;case "control_play":this.o.play();break;case "control_pause":this.o.pause();break;case "control_seek":this.J.Hm(c[0],c[1]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.u.getCurrentTime();L8(this,0==c?void 0:c);break;case "control_seek":L8(this,c[0]);break;case "control_subtitles_set_track":K8(this,c[0]);break;case "control_set_audio_track":c=c[0],J8(this)&&this.o.setAudioTrack(this.u.getVideoData(1).videoId,c)}};
g.h.mJ=function(a){this.K.OD(a)};
g.h.UN=function(a){this.Ix("control_subtitles_set_track",g.Wb(a)?null:a)};
g.h.FA=function(){var a=this.u.getOption("captions","track");g.Wb(a)||K8(this,a)};
g.h.Yy=function(a){if(J8(this)){this.o.unsubscribe("remotePlayerChange",this.Mk,this);var b=Math.round(a.volume);a=!!a.muted;var c=$7(this.o);if(b!=c.volume||a!=c.muted)this.o.setVolume(b,a),this.U.start();this.o.subscribe("remotePlayerChange",this.Mk,this)}};
g.h.lK=function(){g.Wb(this.D)||lta(this,this.D);this.G=!1};
g.h.mz=function(a,b){this.C.stop();2==b&&this.DA()};
g.h.Mk=function(){if(J8(this)){this.w.stop();var a=$7(this.o);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.B.H=1;break;case 1082:case 1083:this.B.H=0;break;default:this.B.H=-1}switch(a.playerState){case 1081:case 1:I8(this,new g.QD(8));this.CA();break;case 1085:case 3:I8(this,new g.QD(9));break;case 1083:case 0:I8(this,new g.QD(2));this.J.stop();H8(this,this.u.getVideoData().lengthSeconds);break;case 1084:I8(this,new g.QD(4));break;case 2:I8(this,new g.QD(4));H8(this,V7(a));
break;case -1:I8(this,new g.QD(64));break;case -1E3:I8(this,new g.QD(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=$7(this.o).o;var b=this.D;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.D=a,lta(this,a));a=$7(this.o);-1==a.volume||Math.round(this.u.getVolume())==a.volume&&this.u.isMuted()==a.muted||this.U.isActive()||this.iB()}else kta(this)};
g.h.jz=function(){this.u.R("mdxpreviousnextchange")};
g.h.Qn=function(){J8(this)||kta(this)};
g.h.MC=function(){this.o.ev()};
g.h.Oy=function(){};
g.h.fz=function(a){isNaN(a)||this.u.R("mdxnowautoplaying",a)};
g.h.Ny=function(){this.u.R("mdxautoplaycanceled")};
g.h.zG=function(a,b){-1==$7(this.o).playerState?L8(this,a):b&&this.o.seekTo(a)};
g.h.iB=function(){if(J8(this)){var a=$7(this.o);this.A.Ua(this.N);a.muted?this.u.mute():this.u.unMute();this.u.setVolume(a.volume);this.N=this.A.M(this.u,"onVolumeChange",this.Yy)}};
g.h.CA=function(){this.w.stop();if(!this.o.ka()){var a=$7(this.o);1==a.playerState&&I8(this,new g.QD(8));H8(this,V7(a));this.w.start()}};
g.h.DA=function(){this.C.stop();this.w.stop();var a=this.o.w.getReconnectTimeout();2==this.o.o&&!isNaN(a)&&this.C.start()};g.r(M8,g.S);M8.prototype.B=function(){e6("mdx-privacy-popup-cancel");this.w.hide()};
M8.prototype.D=function(){e6("mdx-privacy-popup-confirm");this.w.hide()};g.r(N8,g.S);N8.prototype.C=function(a){nta(this,a.state)};g.r(O8,g.UP);O8.prototype.N=function(){var a=this.w.getOption("remote","receivers");a&&1<a.length&&!this.w.getOption("remote","quickCast")?(this.G=g.rb(a,this.D,this),g.WP(this,(0,g.G)(a,this.D)),a=this.w.getOption("remote","currentReceiver"),this.ke(this.D(a)),this.enable(!0)):this.enable(!1)};
O8.prototype.D=function(a){return a.key};
O8.prototype.xe=function(a){return"cast-selector-receiver"==a?"Cast...":this.G[a].name};
O8.prototype.Rc=function(a){g.UP.prototype.Rc.call(this,a);this.w.setOption("remote","currentReceiver",this.G[a]);this.B.bb()};g.r(P8,g.cR);g.h=P8.prototype;
g.h.create=function(){eta(g.ry(this.player.P()));this.w.push(g.zo("yt-remote-before-disconnect",this.jJ,this));this.w.push(g.zo("yt-remote-connection-change",this.tL,this));this.w.push(g.zo("yt-remote-receiver-availability-change",this.kz,this));this.w.push(g.zo("yt-remote-auto-connect",this.rL,this));this.w.push(g.zo("yt-remote-receiver-resumed",this.qL,this));this.w.push(g.zo("mdx-privacy-popup-confirm",this.YM,this));this.w.push(g.zo("mdx-privacy-popup-cancel",this.XM,this));this.kz()};
g.h.load=function(){this.player.cancelPlayback();g.cR.prototype.load.call(this);this.B=new G8(this,this.player,this.o);var a=(a=jta())?a.currentTime:0;var b=C8()?new Z7(x8(),void 0):null;0==a&&b&&(a=V7($7(b)));0!=a&&(this.U=a||0,this.player.R("progresssync",a,void 0));mta(this,this.D,this.D);g.DU(this.player.app,6)};
g.h.unload=function(){this.player.R("mdxautoplaycanceled");this.A=this.u;g.ee(this.B,this.o);this.o=this.B=null;g.cR.prototype.unload.call(this);g.DU(this.player.app,5);Q8(this)};
g.h.Z=function(){g.Ao(this.w);g.cR.prototype.Z.call(this)};
g.h.wk=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.B.Ix.apply(this.B,[a].concat(g.fa(c)))};
g.h.getAdState=function(){return this.H};
g.h.JD=function(){return this.loaded?this.B.suggestion:null};
g.h.Pe=function(){return this.o?$7(this.o).Pe:!1};
g.h.hasNext=function(){return this.o?$7(this.o).hasNext:!1};
g.h.getCurrentTime=function(){return this.U};
g.h.getProgressState=function(){var a=$7(this.o),b=this.player.getVideoData();return{allowSeeking:g.T(this.player.P().experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.tc():!a.isAdPlaying()&&this.player.tc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.B?a.A+T7(a):a.A,isAtLiveHead:1>=(a.B?a.u+T7(a):a.u)-this.getCurrentTime(),loaded:a.H,seekableEnd:a.B?a.u+T7(a):a.u,seekableStart:0<a.w?a.w+T7(a):
a.w}};
g.h.nextVideo=function(){this.o&&this.o.nextVideo()};
g.h.nG=function(){this.o&&this.o.tB()};
g.h.jJ=function(a){1==a&&(this.N=this.o?$7(this.o):null)};
g.h.tL=function(){var a=C8()?new Z7(x8(),void 0):null;if(a){var b=this.A;this.loaded&&this.unload();this.o=a;this.N=null;b.key!=this.u.key&&(this.A=b,this.load())}else g.de(this.o),this.o=null,this.loaded&&(this.unload(),(a=this.N)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,V7(a)));this.player.R("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.kz=function(){this.J=[this.u].concat(gta());var a=y8()||this.u;R8(this,a);this.player.ma("onMdxReceiversChange")};
g.h.MM=function(a){!this.K&&g.dE(a,8)&&(this.player.pauseVideo(),Q8(this))};
g.h.rL=function(){var a=y8();R8(this,a)};
g.h.qL=function(){this.A=y8()};
g.h.YM=function(){this.K=!0;Q8(this);E8=!1;F8&&A8(F8,1);F8=null};
g.h.XM=function(){this.K=!1;Q8(this);R8(this,this.u);this.A=this.u;E8=!1;F8=null;this.player.playVideo()};
g.h.Cc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.J;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?P7():R8(this,b)),this.loaded?this.A:this.u;case "quickCast":return 2==this.J.length&&"cast-selector-receiver"==this.J[1].key?(b&&P7(),!0):!1}};
g.h.oG=function(){d8(this.o,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.gf=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.sR.remote=P8;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:30:28 Jan 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:00:13 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.089
  cdx.remote: 0.13
  esindex: 0.012
  LoadShardBlock: 152.182 (6)
  PetaboxLoader3.datanode: 100.56 (7)
  load_resource: 97.683
  PetaboxLoader3.resolve: 80.362
*/