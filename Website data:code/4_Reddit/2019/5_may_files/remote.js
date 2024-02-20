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

(function(g){var window=this;var Kpa=function(a,b){return g.Ub(a,b)},i5=function(){},Lpa=function(a){if(a.yc&&"function"==typeof a.yc)return a.yc();
if(g.v(a))return a.split("");if(g.La(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Qb(a)},Mpa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.La(a)||g.v(a))(0,g.B)(a,b,void 0);else{if(a.Dd&&"function"==typeof a.Dd)var c=a.Dd();else if(a.yc&&"function"==typeof a.yc)c=void 0;else if(g.La(a)||g.v(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Rb(a);d=Lpa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},j5=function(a){g.bn(a,"zx",g.dd());
return a},k5=function(a,b,c){g.Ka(c)||(c=[String(c)]);
g.gn(a.l,b,c)},l5=function(a){return(a=g.Bo(a))?new ActiveXObject(a):new XMLHttpRequest},m5=function(a,b){return b+" ["+a.aa+" "+a.F+" "+a.getStatus()+"]"},Npa=function(a){return"content-type"==a.toLowerCase()},n5=function(a){a.g&&a.I&&(a.g.ontimeout=null);
a.B&&(g.w.clearTimeout(a.B),a.B=null)},Opa=function(a){return g.Od&&g.qd(9)&&g.Fa(a.timeout)&&g.Ca(a.ontimeout)},o5=function(a){a.O||(a.O=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},p5=function(a,b){if(a.g){n5(a);
var c=a.g,d=a.P[0]?g.Ha:null;a.g=null;a.P=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},q5=function(a,b){a.i=!1;
a.g&&(a.o=!0,a.g.abort(),a.o=!1);a.l=b;a.u=5;o5(a);p5(a)},r5=function(a){return a.g?a.g.readyState:0},s5=function(a){if(a.i&&"undefined"!=typeof g.nY)if(a.P[1]&&4==r5(a)&&2==a.getStatus())m5(a,"Local request error detected and ignored");
else if(a.D&&4==r5(a))g.Jg(a.Iv,0,a);else if(a.dispatchEvent("readystatechange"),4==r5(a)){m5(a,"Request complete");a.i=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Tg(String(a.F))[1]||null;if(!f&&g.w.self&&g.w.self.location){var k=g.w.self.location.protocol;f=k.substr(0,k.length-1)}e=!Ppa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.u=6;try{var l=2<r5(a)?a.g.statusText:""}catch(m){l=""}a.l=l+" ["+a.getStatus()+"]";o5(a)}}finally{p5(a)}}},t5=function(a){g.Uf.call(this);
this.headers=new g.Rm;this.M=a||null;this.i=!1;this.P=this.g=null;this.aa=this.F="";this.u=0;this.l="";this.o=this.V=this.D=this.O=!1;this.A=0;this.B=null;this.Y="";this.I=this.R=!1},u5=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}},Qpa=function(a,b){var c=[];
g.Rk(b,function(d){try{var e=g.Qo.prototype.i.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.Ca(e)?g.Po(e)&&c.push(d):c.push(d)},a);
return c},Rpa=function(a,b){var c=Qpa(a,b);
(0,g.B)(c,function(d){g.Qo.prototype.remove.call(this,d)},a)},v5=function(a){if(a.Yc){if(a.Yc.locationOverrideToken)return{locationOverrideToken:a.Yc.locationOverrideToken};
if(null!=a.Yc.latitudeE7&&null!=a.Yc.longitudeE7)return{latitudeE7:a.Yc.latitudeE7,longitudeE7:a.Yc.longitudeE7}}return null},Spa=function(a,b){g.Za(a,b)||a.push(b)},w5=function(a){var b=0,c;
for(c in a)b++;return b},x5=function(a,b){var c=b instanceof g.xc?b:g.Dc(b,/^data:image\//i.test(b));
a.src=g.yc(c)},Tpa=function(a){return/^\s*$/.test(a)?!1:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,""))},Upa=function(a){try{return g.w.JSON.parse(a)}catch(b){}a=String(a);
if(Tpa(a))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Vpa=function(a,b,c,d){var e=new g.Um(null,void 0);
a&&g.Vm(e,a);b&&g.Wm(e,b);c&&g.Xm(e,c);d&&(e.i=d);return e},y5=function(a){if(g.w.JSON)try{return g.w.JSON.parse(a)}catch(b){}return Upa(a)},z5=function(){this.g=[];
this.i=[]},A5=function(a,b){g.Vp[a]=!0;
var c=g.Tp();c&&c.publish.apply(c,arguments);g.Vp[a]=!1},B5=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.l=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Rm;this.g=this.i="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",Wpa(this,a.capabilities||""),Xpa(this,a.experiments||""),this.i=a.remoteControllerUrl||"",this.g=a.localChannelEncryptionKey||
"")},Wpa=function(a,b){a.capabilities.clear();
(0,g.$d)(b.split(","),g.Qa(Kpa,Ypa)).forEach(function(c){a.capabilities.add(c)})},Xpa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},C5=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},D5=function(a,b){return!!b&&(a.id==b||a.uuid==b)},E5=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},Zpa=function(a){return new C5(a)},F5=function(a){return g.Ka(a)?(0,g.G)(a,Zpa):[]},G5=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},H5=function(a){return g.Ka(a)?"["+(0,g.G)(a,G5).join(",")+"]":"null"},I5=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},$pa=function(a){return(0,g.G)(a,function(b){return{key:b.id,
name:b.name}})},J5=function(a,b){return g.Wa(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},K5=function(a,b){return g.Wa(a,function(c){return D5(c,b)})},aqa=function(){var a=(0,g.kt)();
a&&Rpa(a,a.g.cf(!0))},L5=function(){var a=g.nt("yt-remote-connected-devices")||[];
g.pb(a);return a},bqa=function(a){if(0==a.length)return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.G)(a,function(d,e){return 0==e?d:d.substring(c.length)})},M5=function(a){g.mt("yt-remote-connected-devices",a,86400)},O5=function(){if(N5)return N5;
var a=g.nt("yt-remote-device-id");a||(a=I5(),g.mt("yt-remote-device-id",a,31536E3));for(var b=L5(),c=1,d=a;g.Za(b,d);)c++,d=a+"#"+c;return N5=d},P5=function(){var a=L5(),b=O5();
g.Za(a,b);g.pt()&&g.rb(a,b);a=bqa(a);if(0==a.length)try{g.Ms("remote_sid")}catch(c){}else try{g.Ls("remote_sid",a.join(","),-1)}catch(c){}},Q5=function(){return g.nt("yt-remote-session-browser-channel")},R5=function(){return g.nt("yt-remote-local-screens")||[]},S5=function(){g.mt("yt-remote-lounge-token-expiration",!0,86400)},cqa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.G)(R5(),function(d){return d.loungeToken}),c=(0,g.G)(a,function(d){return d.loungeToken});
(0,g.hj)(c,function(d){return!g.Za(b,d)})&&S5();
g.mt("yt-remote-local-screens",a,31536E3)},dqa=function(a,b){g.mt("yt-remote-session-browser-channel",a);
g.mt("yt-remote-session-screen-id",b);var c=L5(),d=O5();g.Za(c,d)||c.push(d);M5(c);P5()},T5=function(a){a||(g.ot("yt-remote-session-screen-id"),g.ot("yt-remote-session-video-id"));
P5();a=L5();g.bb(a,O5());M5(a)},V5=function(){if(!U5){var a=g.$o();
a&&(U5=new g.Ko(a))}return U5?!!U5.get("yt-remote-use-staging-server"):!1},W5=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},X5=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},Z5=function(a){a.length?Y5(a.shift(),function(){Z5(a)}):$5()},eqa=function(a){return"chrome-extension://"+a+a6},Y5=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},$5=function(){var a=X5();
a&&a(!1,"No cast extension found")},b6=function(){if(fqa){var a=2,b=X5(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;Y5("//web.archive.org/web/20190430232716/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",$5,c)}},gqa=function(){b6();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);Z5(["//web.archive.org/web/20190430232716/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+a6,"//web.archive.org/web/20190430232716/https://www.gstatic.com/eureka/clank"+a6])},c6=function(a,b,c){g.H.call(this);
this.A=null!=c?(0,g.y)(a,c):a;this.Uc=b;this.u=(0,g.y)(this.LC,this);this.g=!1;this.i=0;this.l=this.za=null;this.o=[]},d6=function(){},e6=function(a,b,c,d){this.g=a;
this.l=b;this.B=c;this.A=d||1;this.o=45E3;this.ba=new g.hn(this);this.i=new g.Ig;this.i.setInterval(250)},g6=function(a,b,c){a.Ph=1;
a.cg=j5(b.clone());a.mh=c;a.u=!0;f6(a,null)},h6=function(a,b,c,d,e){a.Ph=1;
a.cg=j5(b.clone());a.mh=null;a.u=c;e&&(a.zz=!1);f6(a,d)},f6=function(a,b){a.si=(0,g.D)();
i6(a);a.wg=a.cg.clone();k5(a.wg,"t",a.A);a.Kk=0;a.tc=a.g.Yo(a.g.Bk()?b:null);0<a.Fp&&(a.nn=new g.Cl((0,g.y)(a.HA,a,a.tc),a.Fp));a.ba.da(a.tc,"readystatechange",a.rL);var c=a.Rg?g.bc(a.Rg):{};a.mh?(a.Xn="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.tc.send(a.wg,a.Xn,a.mh,c)):(a.Xn="GET",a.zz&&!g.Qd&&(c.Connection="close"),a.tc.send(a.wg,a.Xn,null,c));a.g.ne(1)},p6=function(a,b,c){for(var d=!0;!a.Hg&&a.Kk<c.length;){var e=hqa(a,c);
if(e==j6){4==b&&(a.dg=4,k6(15),d=!1);break}else if(e==l6){a.dg=4;k6(16);d=!1;break}else m6(a,e)}4==b&&0==c.length&&(a.dg=1,k6(17),d=!1);a.se=a.se&&d;d||(n6(a),o6(a))},hqa=function(a,b){var c=a.Kk,d=b.indexOf("\n",c);
if(-1==d)return j6;c=Number(b.substring(c,d));if(isNaN(c))return l6;d+=1;if(d+c>b.length)return j6;var e=b.substr(d,c);a.Kk=d+c;return e},s6=function(a,b){a.si=(0,g.D)();
i6(a);var c=b?window.location.hostname:"";a.wg=a.cg.clone();g.bn(a.wg,"DOMAIN",c);g.bn(a.wg,"t",a.A);try{a.we=new ActiveXObject("htmlfile")}catch(n){n6(a);a.dg=7;k6(22);o6(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in q6)k=q6[l];else if(l in r6)k=q6[l]=r6[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
q6[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Tc(g.qc("b/12014412"),d+"</body></html>");a.we.open();a.we.write(g.Nc(c));a.we.close();a.we.parentWindow.m=(0,g.y)(a.MK,a);a.we.parentWindow.d=(0,g.y)(a.Hy,a,!0);a.we.parentWindow.rpcClose=(0,g.y)(a.Hy,a,!1);c=a.we.createElement("DIV");a.we.parentWindow.document.body.appendChild(c);d=g.Cc(a.wg.toString());d=g.$c(g.zc(d));d=g.Tc(g.qc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Uc(c,d);a.g.ne(1)},i6=function(a){a.Ms=(0,g.D)()+a.o;
t6(a,a.o)},t6=function(a,b){if(null!=a.Ki)throw Error("WatchDog timer not null");
a.Ki=u6((0,g.y)(a.WK,a),b)},v6=function(a){a.Ki&&(g.w.clearTimeout(a.Ki),a.Ki=null)},o6=function(a){a.g.Gv()||a.Hg||a.g.Xm(a)},n6=function(a){v6(a);
g.sf(a.nn);a.nn=null;a.i.stop();g.kn(a.ba);if(a.tc){var b=a.tc;a.tc=null;b.abort();b.dispose()}a.we&&(a.we=null)},m6=function(a,b){try{a.g.By(a,b),a.g.ne(4)}catch(c){}},x6=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;w6(a,b,function(k){k?c(!0):g.w.setTimeout(function(){x6(a,b,c,d,f)},f)})}},w6=function(a,b,c){var d=new Image;
d.onload=function(){try{y6(d),c(!0)}catch(e){}};
d.onerror=function(){try{y6(d),c(!1)}catch(e){}};
d.onabort=function(){try{y6(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{y6(d),c(!1)}catch(e){}};
g.w.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
x5(d,a)},y6=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},z6=function(a){this.g=a;
this.i=new d6},B6=function(a){var b=A6(a.g,a.Ui,"/mail/images/cleardot.gif");
j5(b);x6(b.toString(),5E3,(0,g.y)(a.WB,a),3,2E3);a.ne(1)},D6=function(a){var b=a.g.F;
if(null!=b)k6(5),b?(k6(11),C6(a.g,a,!1)):(k6(12),C6(a.g,a,!0));else if(a.zd=new e6(a,void 0,void 0,void 0),a.zd.Rg=a.Dp,b=a.g,b=A6(b,b.Bk()?a.Aj:null,a.Ep),k6(5),!g.Od||g.rd(10))k5(b,"TYPE","xmlhttp"),h6(a.zd,b,!1,a.Aj,!1);else{k5(b,"TYPE","html");var c=a.zd;a=!!a.Aj;c.Ph=3;c.cg=j5(b.clone());s6(c,a)}},E6=function(a,b,c){this.g=1;
this.i=[];this.o=[];this.u=new d6;this.D=a||null;this.F=null!=b?b:null;this.A=c||!1},iqa=function(a,b){this.g=a;
this.map=b;this.context=null},F6=function(a){g.uf.call(this,"statevent",a)},G6=function(a,b){g.uf.call(this,"timingevent",a);
this.size=b},H6=function(a){g.uf.call(this,"serverreachability",a)},L6=function(a){I6(a);
if(3==a.g){var b=a.gk++,c=a.Kl.clone();g.bn(c,"SID",a.l);g.bn(c,"RID",b);g.bn(c,"TYPE","terminate");J6(a,c);b=new e6(a,a.l,b,void 0);b.Ph=2;b.cg=j5(c.clone());x5(new Image,b.cg.toString());b.si=(0,g.D)();i6(b)}K6(a)},N6=function(a){a.oC(1,0);
a.Kl=A6(a,null,a.Cp);M6(a)},I6=function(a){a.Tf&&(a.Tf.abort(),a.Tf=null);
a.Rb&&(a.Rb.cancel(),a.Rb=null);a.ff&&(g.w.clearTimeout(a.ff),a.ff=null);O6(a);a.ud&&(a.ud.cancel(),a.ud=null);a.Yf&&(g.w.clearTimeout(a.Yf),a.Yf=null)},P6=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new iqa(a.XG++,b));2!=a.g&&3!=a.g||M6(a)},M6=function(a){a.ud||a.Yf||(a.Yf=u6((0,g.y)(a.Gy,a),0),a.Kh=0)},S6=function(a,b){if(1==a.g){if(!b){a.gk=Math.floor(1E5*Math.random());
var c=a.gk++,d=new e6(a,"",c,void 0);d.Rg=null;var e=Q6(a),f=a.Kl.clone();g.bn(f,"RID",c);g.bn(f,"CVER","1");J6(a,f);g6(d,f,e);a.ud=d;a.g=2}}else 3==a.g&&(b?R6(a,b):0==a.i.length||a.ud||R6(a))},R6=function(a,b){if(b)if(6<a.Ig){a.i=a.o.concat(a.i);
a.o.length=0;var c=a.gk-1;var d=Q6(a)}else c=b.B,d=b.mh;else c=a.gk++,d=Q6(a);var e=a.Kl.clone();g.bn(e,"SID",a.l);g.bn(e,"RID",c);g.bn(e,"AID",a.Yh);J6(a,e);c=new e6(a,a.l,c,a.Kh+1);c.Rg=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ud=c;g6(c,e,d)},J6=function(a,b){if(a.Sc){var c=a.Sc.gv();
c&&g.Jb(c,function(d,e){g.bn(b,e,d)})}},Q6=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Ig&&0<b){var d=a.i[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.i[e].g,k=a.i[e].map;f=6>=a.Ig?e:f-d;try{g.Jb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.o=a.o.concat(a.i.splice(0,b));
return c.join("&")},T6=function(a){a.Rb||a.ff||(a.B=1,a.ff=u6((0,g.y)(a.Fy,a),0),a.Eh=0)},V6=function(a){if(a.Rb||a.ff||3<=a.Eh)return!1;
a.B++;a.ff=u6((0,g.y)(a.Fy,a),U6(a,a.Eh));a.Eh++;return!0},C6=function(a,b,c){a.Vn=c;
a.Ee=b.tf;a.A||N6(a)},O6=function(a){null!=a.Mg&&(g.w.clearTimeout(a.Mg),a.Mg=null)},U6=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},X6=function(a,b){if(2==b||9==b){var c=null;
a.Sc&&(c=null);var d=(0,g.y)(a.UL,a);c||(c=new g.Um("//web.archive.org/web/20190430232716/https://www.google.com/images/cleardot.gif"),j5(c));w6(c.toString(),1E4,d)}else k6(2);W6(a,b)},W6=function(a,b){a.g=0;
a.Sc&&a.Sc.mu(b);K6(a);I6(a)},K6=function(a){a.g=0;
a.Ee=-1;if(a.Sc)if(0==a.o.length&&0==a.i.length)a.Sc.Oo();else{g.fb(a.o);var b=g.fb(a.i);a.o.length=0;a.i.length=0;a.Sc.Oo(b)}},A6=function(a,b,c){var d=g.cn(c);
if(""!=d.g)b&&g.Wm(d,b+"."+d.g),g.Xm(d,d.u);else{var e=window.location;d=Vpa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.hj&&g.Jb(a.hj,function(f,k){g.bn(d,k,f)});
g.bn(d,"VER",a.Ig);J6(a,d);return d},u6=function(a,b){if(!g.Ma(a))throw Error("Fn must not be null and must be a function");
return g.w.setTimeout(function(){a()},b)},k6=function(a){Y6.dispatchEvent(new F6(Y6,a))},Z6=function(){},jqa=function(a,b){this.action=a;
this.params=b||{}},$6=function(a,b){g.H.call(this);
this.g=new g.N(this.EK,0,this);g.I(this,this.g);this.Uc=5E3;this.i=0;if(g.Ma(a))b&&(a=(0,g.y)(a,b));else if(a&&g.Ma(a.handleEvent))a=(0,g.y)(a.handleEvent,a);else throw Error("Invalid listener argument");this.l=a},a7=function(a,b,c){this.H=a;
this.A=b;this.l=new g.Jo;this.i=new $6(this.qM,this);this.g=null;this.Za=!1;this.u=null;this.F="";this.D=this.o=0;this.B=[];this.I=c||!1},kqa=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Vn,sessionId:a.g.l,arrayId:a.g.Yh}},b7=function(a,b){a.D=b||0;
a.i.stop();a.g&&(3==a.g.g&&S6(a.g),L6(a.g));a.D=0},c7=function(a){return!!a.g&&3==a.g.g},lqa=function(a,b){(a.A.loungeIdToken=b)||a.i.stop()},d7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.i=!0;a=a||document.location.href;var b=g.Xg(a)||"";b&&(this.port=":"+b);this.domain=g.Vg(a)||"";a=g.Hb;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Gb(a,"10.0")&&(this.i=!1))},e7=function(a,b){var c=a.g;
if(g.Ca(void 0)?0:a.i)c="https://"+a.domain+a.port+a.g;return g.fh(c+b,{})},f7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.o,d,!0),onError:g.Qa(a.l,e),md:g.Qa(a.u,e)};c&&(a.rb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Nq(b,a)},mqa=function(){var a=g7;
h7();i7.push(a);j7(i7)},k7=function(a,b){h7();
var c=i7,d=nqa(a,String(b));0==c.length?oqa(d):(j7(c),(0,g.B)(c,function(e){e(d)}))},h7=function(){i7||(i7=g.x("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",i7,void 0))},oqa=function(a){var b=(l7+1)%50;
l7=b;m7[b]=a;n7||(n7=49==b)},j7=function(a){var b=m7;
if(b[0]){var c=l7,d=n7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.B)(a,function(f){f(e)})}while(d!=c);
m7=Array(50);l7=-1;n7=!1}},nqa=function(a,b){var c=((0,g.D)()-pqa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},o7=function(a){g.P.call(this);
this.B=a;this.g=[]},p7=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},qqa=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.$d)(a.g,function(f){return!!J5(b,f)});
for(var d=0,e=b.length;d<e;d++)c=p7(a,b[d])||c;return c},rqa=function(a,b){var c=a.g.length;
a.g=(0,g.$d)(a.g,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.g.length<c},q7=function(a,b,c,d){g.P.call(this);
this.A=a;this.u=b;this.l=c;this.o=d;this.i=0;this.g=null;this.za=NaN},s7=function(a){o7.call(this,"LocalScreenService");
this.l=a;this.i=NaN;r7(this);this.info("Initializing with "+H5(this.g))},t7=function(a){if(a.g.length){var b=(0,g.G)(a.g,function(d){return d.id}),c=e7(a.l,"/pairing/get_lounge_token_batch");
f7(a.l,c,{screen_ids:b.join(",")},(0,g.y)(a.VC,a),(0,g.y)(a.UC,a))}},r7=function(a){var b=F5(R5());
b=(0,g.$d)(b,function(c){return!c.uuid});
return qqa(a,b)},u7=function(a,b){cqa((0,g.G)(a.g,E5));
b&&S5()},w7=function(a,b){g.P.call(this);
this.A=b;var c=g.nt("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.A(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.Za(c,l)}this.g=d;this.u=a;this.l=this.o=NaN;this.i=null;v7("Initialized with "+g.Ng(this.g))},x7=function(a,b,c){var d=e7(a.u,"/pairing/get_screen_availability");
f7(a.u,d,{lounge_token:b.token},(0,g.y)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.y)(function(){c(!1)},a))},y7=function(a,b){a:if(w5(b)!=w5(a.g))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(v7("Updated online screens: "+g.Ng(a.g)),a.g=b,a.N("screenChange"));sqa(a)},z7=function(a){isNaN(a.l)||g.Sp(a.l);
a.l=g.Qp((0,g.y)(a.Nr,a),0<a.o&&a.o<(0,g.D)()?2E4:1E4)},v7=function(a){k7("OnlineScreenService",a)},A7=function(a){var b={};
(0,g.B)(a.A(),function(c){c.token?b[c.token]=c.id:this.Jb("Requesting availability of screen w/o lounge token.")});
return b},sqa=function(a){a=g.Rb(g.Lb(a.g,function(b){return b}));
g.pb(a);a.length?g.mt("yt-remote-online-screen-ids",a.join(","),60):g.ot("yt-remote-online-screen-ids")},B7=function(a){o7.call(this,"ScreenService");
this.A=a;this.i=this.l=null;this.o=[];this.u={};tqa(this)},D7=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.u[b]);var k=a.Fd();if(k=(c?K5(k,c):null)||K5(k,b)){k.uuid=b;var l=C7(a,k);x7(a.i,l,function(m){e(m?l:null)})}else c?uqa(a,c,(0,g.y)(function(m){var n=C7(this,new C5({name:d,
screenId:c,loungeToken:m,dialId:b||""}));x7(this.i,n,function(p){e(p?n:null)})},a),f):e(null)},E7=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},uqa=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={rb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Nq(e7(a.A,"/pairing/get_lounge_token_batch"),e)},F7=function(a){a.g=a.l.Fd();
var b=a.u,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+H5(a.g))},tqa=function(a){G7(a);
a.l=new s7(a.A);a.l.subscribe("screenChange",(0,g.y)(a.eD,a));F7(a);a.o=F5(g.nt("yt-remote-automatic-screen-cache")||[]);G7(a);a.info("Initializing automatic screens: "+H5(a.o));a.i=new w7(a.A,(0,g.y)(a.Fd,a,!0));a.i.subscribe("screenChange",(0,g.y)(function(){this.N("onlineScreenChange")},a))},C7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=K5(a.o,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.o.push(b),g.mt("yt-remote-automatic-screen-cache",(0,g.G)(a.o,E5)));G7(a);a.u[b.uuid]=b.id;g.mt("yt-remote-device-id-map",a.u,31536E3);return b},G7=function(a){a.u=g.nt("yt-remote-device-id-map")||{}},H7=function(a,b,c){g.P.call(this);
this.P=c;this.F=a;this.i=b;this.l=null},I7=function(a,b){k7(a.P,b)},K7=function(a,b){H7.call(this,a,b,"CastSession");
this.g=null;this.o=0;this.A=(0,g.y)(this.wM,this);this.u=(0,g.y)(this.hL,this);this.o=g.Qp((0,g.y)(function(){J7(this,null)},this),12E4)},vqa=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Ng(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ha,(0,g.y)(function(){I7(this,"Failed to send message: getMdxSessionStatus.")},a)):I7(a,"Sending yt message without session: "+g.Ng(b))},J7=function(a,b){g.Sp(a.o);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.l||a.l.id!=b){var c=(0,g.y)(a.Ym,a),d=(0,g.y)(a.Id,a);a.zv(b,c,d,5)}}else a.Id(Error("Waiting for session status timed out."))},L7=function(a,b,c){H7.call(this,a,b,"DialSession");
this.o=this.D=null;this.H="";this.M=c;this.u=null;this.B=g.Ha;this.A=NaN;this.I=(0,g.y)(this.zM,this);this.g=g.Ha},M7=function(a){a.g=a.F.MA(a.H,a.i.label,a.i.friendlyName,(0,g.y)(function(b){this.g=g.Ha;
this.Ym(b)},a),(0,g.y)(function(b){this.g=g.Ha;
this.Id(b)},a))},N7=function(a){var b={};
b.pairingCode=a.H;b.theme=a.M;if(a.u){var c=a.u.currentTime||0;b.v=a.u.videoId;b.t=c}V5()&&(b.env_useStageMdx=1);return g.dh(b)},O7=function(a,b){H7.call(this,a,b,"ManualSession");
this.g=g.Qp((0,g.y)(this.ai,this,null),150)},P7=function(a,b,c,d){g.P.call(this);
this.i=a;this.B=b||"233637DE";this.A=c||"cl";this.D=d||!1;this.g=null;this.u=!1;this.l=[];this.o=(0,g.y)(this.NJ,this)},Q7=function(a,b){return b?g.Wa(a.l,function(c){return D5(b,c.label)},a):null},R7=function(a){k7("Controller",a)},g7=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},S7=function(a){return a.u||!!a.l.length||!!a.g},T7=function(a,b,c){b!=a.g&&(g.sf(a.g),(a.g=b)?(c?a.N("yt-remote-cast2-receiver-resumed",b.i):a.N("yt-remote-cast2-receiver-selected",
b.i),b.subscribe("sessionScreen",(0,g.y)(a.Ey,a,b)),b.l?a.N("yt-remote-cast2-session-change",b.l):c&&a.g.ai(null)):a.N("yt-remote-cast2-session-change",null))},U7=function(a){var b=a.i.LA(),c=a.g&&a.g.i;
a=(0,g.G)(b,function(d){c&&D5(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Q7(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},zqa=function(a,b,c,d,e,f,k){wqa()?xqa(b,e,f,k)&&(W7(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?X7(a,c):(window.__onGCastApiAvailable=function(l,m){l?X7(a,c):(Y7("Failed to load cast API: "+m),Z7(!1),W7(!1),g.ot("yt-remote-cast-available"),g.ot("yt-remote-cast-receiver"),$7(),c(!1))},d?g.cq("https://web.archive.org/web/20190430232716/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?gqa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?$5():(b6(),Z5(yqa.map(eqa))))):V7("Cannot initialize because not running Chrome")},$7=function(){V7("dispose");
var a=a8();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null,void 0);b8(!1);g.Yp(c8);c8.length=0},d8=function(){return!!g.nt("yt-remote-cast-installed")},e8=function(){var a=g.nt("yt-remote-cast-receiver");
return a?a.friendlyName:null},f8=function(){V7("clearCurrentReceiver");
g.ot("yt-remote-cast-receiver")},g8=function(){return d8()?a8()?a8().getCastSession():(Y7("getCastSelector: Cast is not initialized."),null):(Y7("getCastSelector: Cast API is not installed!"),null)},i8=function(){d8()?a8()?h8()?(V7("Requesting cast selector."),a8().requestSession()):(V7("Wait for cast API to be ready to request the session."),c8.push(g.Xp("yt-remote-cast2-api-ready",i8))):Y7("requestCastSelector: Cast is not initialized."):Y7("requestCastSelector: Cast API is not installed!")},j8=
function(a,b){h8()?a8().setConnectedScreenStatus(a,b):Y7("setConnectedScreenStatus called before ready.")},wqa=function(){var a=0<=g.Hb.search(/ (CrMo|Chrome|CriOS)\//);
return g.Xw||a},Aqa=function(a,b){a8().init(a,b)},xqa=function(a,b,c,d){var e=!1;
a8()||(a=new P7(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.mt("yt-remote-cast-available",f);A5("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){V7("onReceiverSelected: "+f.friendlyName);
g.mt("yt-remote-cast-receiver",f);A5("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){V7("onReceiverResumed: "+f.friendlyName);
g.mt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){V7("onSessionChange: "+G5(f));
f||g.ot("yt-remote-cast-receiver");A5("yt-remote-cast2-session-change",f)}),g.Ga("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
V7("cloudview.createSingleton_: "+e);return e},a8=function(){return g.x("yt.mdx.remote.cloudview.instance_")},X7=function(a,b){Z7(!0);
W7(!1);Aqa(a,function(c){c?(b8(!0),g.$p("yt-remote-cast2-api-ready")):(Y7("Failed to initialize cast API."),Z7(!1),g.ot("yt-remote-cast-available"),g.ot("yt-remote-cast-receiver"),$7());b(c)})},V7=function(a){k7("cloudview",a)},Y7=function(a){k7("cloudview",a)},Z7=function(a){V7("setCastInstalled_ "+a);
g.mt("yt-remote-cast-installed",a)},h8=function(){return!!g.x("yt.mdx.remote.cloudview.apiReady_")},b8=function(a){V7("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a,void 0)},W7=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a,void 0)},k8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.A=this.B=0;this.g=null;this.hasNext=this.Ge=!1;this.F=this.D=this.i=this.o=0;this.l=NaN;this.u=!1;this.reset(a)},l8=function(a){a.audioTrackId=null;
a.g=null;a.playerState=-1;a.Ge=!1;a.hasNext=!1;a.B=0;a.A=(0,g.D)();a.o=0;a.i=0;a.D=0;a.F=0;a.l=NaN;a.u=!1},m8=function(a){return 1==a.playerState?((0,g.D)()-a.A)/1E3:0},n8=function(a,b){a.B=b;
a.A=(0,g.D)()},o8=function(a){switch(a.playerState){case 1:case 1081:return((0,g.D)()-a.A)/1E3+a.B;
case -1E3:return 0}return a.B},p8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&l8(a)},q8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.cc(a.g);b.hasPrevious=a.Ge;b.hasNext=a.hasNext;b.playerTime=a.B;b.playerTimeAt=a.A;b.seekableStart=a.o;b.seekableEnd=a.i;b.duration=a.D;b.loadedTime=a.F;b.liveIngestionTime=a.l;return b},t8=function(a,b){g.P.call(this);
this.g=0;this.o=a;this.A=[];this.u=new z5;this.l=this.i=null;this.F=(0,g.y)(this.HH,this);this.B=(0,g.y)(this.ik,this);this.D=(0,g.y)(this.GH,this);this.H=(0,g.y)(this.TH,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ps,this),r8(this))):c=3;0!=c&&(b?this.Ps(c):g.Qp((0,g.y)(function(){this.Ps(c)},this),0));
var d=g8();d&&s8(this,d);this.subscribe("yt-remote-cast2-session-change",this.H)},u8=function(a){return new k8(a.o.getPlayerContextData())},r8=function(a){(0,g.B)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.A.push(this.o.subscribe(b,g.Qa(this.KJ,b),this))},a)},v8=function(a){(0,g.B)(a.A,function(b){this.o.unsubscribeByKey(b)},a);
a.A.length=0},w8=function(a,b){var c=a.u;
50>c.g.length+c.i.length&&a.u.i.push(b)},y8=function(a,b,c){var d=u8(a);
n8(d,c);-1E3!=d.playerState&&(d.playerState=b);x8(a,d)},z8=function(a,b,c){a.o.sendMessage(b,c)},x8=function(a,b){v8(a);
a.o.setPlayerContextData(q8(b));r8(a)},s8=function(a,b){a.l&&(a.l.removeUpdateListener(a.F),a.l.removeMediaListener(a.B),a.ik(null));
a.l=b;a.l&&(k7("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.F),a.l.addMediaListener(a.B),a.l.media.length&&a.ik(a.l.media[0]))},A8=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=u8(a);b.contentId!=d.videoId&&k7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;n8(d,a.i.getEstimatedTime());x8(a,d)}else k7("CP","No cast media video. Ignoring state update.")},B8=function(a,b,c){return(0,g.y)(function(d){this.Jb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Jb("Retrying "+b+" using MDx browser channel."),z8(this,b,c))},a)},C8=function(a,b,c){g.P.call(this);
this.u=NaN;this.M=!1;this.H=this.F=this.I=this.P=NaN;this.O=[];this.o=this.B=this.l=this.Qa=this.g=null;this.na=a;this.O.push(g.Pr(window,"beforeunload",(0,g.y)(this.OC,this)));this.i=[];this.Qa=new k8;this.V=b.id;this.g=Bqa(this,c);this.g.subscribe("handlerOpened",this.LH,this);this.g.subscribe("handlerClosed",this.IH,this);this.g.subscribe("handlerError",this.JH,this);this.g.subscribe("handlerMessage",this.KH,this);lqa(this.g,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Qa.videoId;
g.pt()&&g.mt("yt-remote-session-video-id",d)},this)},D8=function(a){k7("conn",a)},Bqa=function(a,b){return new a7(e7(a.na,"/bc"),b)},E8=function(a,b){a.N("proxyStateChange",b)},Cqa=function(a){a.u=g.Qp((0,g.y)(function(){D8("Connecting timeout");
this.A(1)},a),2E4)},F8=function(a){g.Sp(a.u);
a.u=NaN},G8=function(a){g.Sp(a.P);
a.P=NaN},Dqa=function(a){H8(a);
a.I=g.Qp((0,g.y)(function(){I8(this,"getNowPlaying")},a),2E4)},H8=function(a){g.Sp(a.I);
a.I=NaN},Fqa=function(a,b){b&&(F8(a),G8(a));
b==(c7(a.g)&&isNaN(a.u))?b&&(E8(a,1),I8(a,"getSubtitlesTrack")):b?(a.R()&&a.Qa.reset(),E8(a,1),I8(a,"getNowPlaying"),Eqa(a)):a.A(1)},Gqa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Qa.videoId&&(g.Xb(b.params)?a.Qa.g=null:a.Qa.g=b.params,a.N("remotePlayerChange"))},Hqa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Qa.listId=b.params.listId||a.Qa.listId;p8(a.Qa,c,d);a.N("remoteQueueChange")},Jqa=function(a,b){b.params=b.params||{};
Hqa(a,b);Iqa(a,b);a.N("autoplayDismissed")},Iqa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
n8(a.Qa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Qa.playerState&&(c=-1E3);a.Qa.playerState=c;c=Number(b.params.loadedTime);a.Qa.F=isNaN(c)?0:c;c=Number(b.params.duration);a.Qa.D=isNaN(c)?0:c;c=a.Qa;var d=Number(b.params.liveIngestionTime);c.l=d;c.u=isNaN(d)?!1:!0;c=a.Qa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.o=isNaN(d)?0:d;c.i=isNaN(e)?0:e;1==a.Qa.playerState?Dqa(a):H8(a);a.N("remotePlayerChange")},Kqa=function(a,b){if(-1E3!=
a.Qa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Qa.playerState=c;c=parseInt(b.params.currentTime,10);n8(a.Qa,isNaN(c)?0:c);a.N("remotePlayerChange")}},Lqa=function(a,b){var c="true"==b.params.muted;
a.Qa.volume=parseInt(b.params.volume,10);a.Qa.muted=c;a.N("remotePlayerChange")},Mqa=function(a,b){a.B=b.params.videoId;
a.N("nowAutoplaying",parseInt(b.params.timeout,10))},Nqa=function(a,b){var c="true"==b.params.hasNext;
a.Qa.Ge="true"==b.params.hasPrevious;a.Qa.hasNext=c;a.N("previousNextChange")},Eqa=function(a){g.Sp(a.H);
a.H=g.Qp((0,g.y)(a.A,a,1),864E5)},I8=function(a,b,c){c?D8("Sending: action="+b+", params="+g.Ng(c)):D8("Sending: action="+b);
a.g.sendMessage(b,c)},J8=function(a){o7.call(this,"ScreenServiceProxy");
this.Gc=a;this.i=[];this.i.push(this.Gc.$_s("screenChange",(0,g.y)(this.uM,this)));this.i.push(this.Gc.$_s("onlineScreenChange",(0,g.y)(this.oJ,this)))},Sqa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.Ip("MDX_CONFIG")||b;aqa();P5();K8||(K8=new d7(b?b.loungeApiHost:void 0),V5()&&(K8.g="/api/loungedev"));L8||(L8=g.x("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",L8,void 0));Oqa();var c=M8();if(!c){var d=new B7(K8);g.Ga("yt.mdx.remote.screenService_",d,void 0);c=M8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);zqa(a,d,function(m){m?N8()&&j8(N8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){A5("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.x("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0,void 0),O8("Initializing: "+g.Ng(b)),P8.push(g.Xp("yt-remote-cast2-availability-change",function(){A5("yt-remote-receiver-availability-change")})),P8.push(g.Xp("yt-remote-cast2-receiver-selected",function(){Q8(null);
A5("yt-remote-auto-connect","cast-selector-receiver")})),P8.push(g.Xp("yt-remote-cast2-receiver-resumed",function(){A5("yt-remote-receiver-resumed","cast-selector-receiver")})),P8.push(g.Xp("yt-remote-cast2-session-change",Pqa)),P8.push(g.Xp("yt-remote-connection-change",function(m){m?j8(N8(),"YouTube TV"):R8()||(j8(null,null),f8())})),a=S8(),b.isAuto&&(a.id+="#dial"),g.Eq("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),O8(" -- with channel params: "+
g.Ng(a)),Qqa(a),c.start(),N8()||Rqa())},Uqa=function(){var a=Tqa();
d8()&&g.nt("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},Tqa=function(){var a=M8().Gc.$_gos();
var b=T8();b&&U8()&&(J5(a,b)||a.push(b));return $pa(a)},V8=function(){var a=Vqa();
!a&&d8()&&e8()&&(a={key:"cast-selector-receiver",name:e8()});return a},Vqa=function(){var a=Tqa(),b=T8();
b||(b=R8());return g.Wa(a,function(c){return b&&D5(b,c.key)?!0:!1})},T8=function(){var a=N8();
if(!a)return null;var b=M8().Fd();return K5(b,a)},Pqa=function(a){O8("remote.onCastSessionChange_: "+G5(a));
if(a){var b=T8();b&&b.id==a.id?j8(b.id,"YouTube TV"):(b&&W8(),X8(a,1))}else U8()&&W8()},W8=function(){h8()?a8().stopSession():Y7("stopSession called before API ready.");
var a=U8();a&&(a.disconnect(1),Y8(null))},Z8=function(){var a=U8();
return!!a&&3!=a.getProxyState()},O8=function(a){k7("remote",a)},M8=function(){if(!$8){var a=g.x("yt.mdx.remote.screenService_");
$8=a?new J8(a):null}return $8},N8=function(){return g.x("yt.mdx.remote.currentScreenId_")},Wqa=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a,void 0)},Xqa=function(){return g.x("yt.mdx.remote.connectData_")},Q8=function(a){g.Ga("yt.mdx.remote.connectData_",a,void 0)},U8=function(){return g.x("yt.mdx.remote.connection_")},Y8=function(a){var b=U8();
Q8(null);a||Wqa("");g.Ga("yt.mdx.remote.connection_",a,void 0);L8&&((0,g.B)(L8,function(c){c(a)}),L8.length=0);
b&&!a?A5("yt-remote-connection-change",!1):!b&&a&&A5("yt-remote-connection-change",!0)},R8=function(){var a=g.pt();
if(!a)return null;var b=M8().Fd();return K5(b,a)},X8=function(a,b){T8()&&T8();
Wqa(a.id);var c=new C8(K8,a,S8());c.connect(b,Xqa());c.subscribe("beforeDisconnect",function(d){A5("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){U8()&&Y8(null)});
Y8(c)},Rqa=function(){var a=R8();
a?(O8("Resume connection to: "+G5(a)),X8(a,0)):(T5(),f8(),O8("Skipping connecting because no session screen found."))},Oqa=function(){var a=S8();
if(g.Xb(a)){a=O5();var b=g.nt("yt-remote-session-name")||"",c=g.nt("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a,void 0)}},S8=function(){return g.x("yt.mdx.remote.channelParams_")||{}},Qqa=function(a){a?(g.mt("yt-remote-session-app",a.app),g.mt("yt-remote-session-name",a.name)):(g.ot("yt-remote-session-app"),g.ot("yt-remote-session-name"));
g.Ga("yt.mdx.remote.channelParams_",a,void 0)},a9=function(a,b,c){g.H.call(this);
this.u=a;this.i=b;this.l=new g.bs(this);g.I(this,this.l);this.l.K(b,"onCaptionsTrackListChanged",this.FI);this.l.K(b,"captionschanged",this.FH);this.l.K(b,"captionssettingschanged",this.Zz);this.l.K(b,"videoplayerreset",this.Zm);this.l.K(b,"mdxautoplaycancel",this.VB);this.O=this.l.K(b,"onVolumeChange",this.my);this.D=!1;this.g=c;c.subscribe("proxyStateChange",this.Ay,this);c.subscribe("remotePlayerChange",this.kk,this);c.subscribe("remoteQueueChange",this.Zm,this);c.subscribe("autoplayUpNext",this.Zx,
this);c.subscribe("previousNextChange",this.wy,this);c.subscribe("nowAutoplaying",this.ry,this);c.subscribe("autoplayDismissed",this.Yx,this);this.suggestion=null;this.F=new g.$C(64);this.o=new g.N(this.Xz,500,this);g.I(this,this.o);this.A=new g.N(this.Yz,1E3,this);g.I(this,this.A);this.I=new c6(this.dM,0,this);g.I(this,this.I);this.B={};this.P=new g.N(this.yA,1E3,this);g.I(this,this.P);this.H=new g.Cl(this.lF,1E3,this);g.I(this,this.H);this.M=g.Ha;this.Zz();this.Zm();this.kk()},b9=function(a,b){a.u.nd(b,
a.i.getVideoData().lengthSeconds)},Yqa=function(a){b9(a,0);
a.o.stop();c9(a,new g.$C(64))},e9=function(a,b){if(d9(a)&&!a.D){var c=null;
b&&(c={style:a.i.getSubtitlesUserSettings()},g.ec(c,b));a.g.Nz(a.i.getVideoData(1).videoId,c);a.B=u8(a.g).g}},f9=function(a,b){var c=a.i.getPlaylist();
if(c){var d=c.Sa;var e=c.listId.toString()}c=a.i.getVideoData(1);a.g.playVideo(c.videoId,b,d,e,c.playerParams,c.vf,v5(c));c9(a,new g.$C(1))},Zqa=function(a,b){if(b){var c=a.i.getOption("captions","tracklist",{QP:1});
c&&c.length?(a.i.setOption("captions","track",b),a.D=!1):(a.i.loadModule("captions"),a.D=!0)}else a.i.setOption("captions","track",{})},d9=function(a){return u8(a.g).videoId==a.i.getVideoData(1).videoId},c9=function(a,b){a.A.stop();
var c=a.F;if(!g.fD(c,b)){var d=g.V(b,2);d!=g.V(a.F,2)&&g.eK(a.i,d);a.F=b;$qa(a.u,c,b)}},g9=function(a){g.U.call(this,{C:"div",
G:"ytp-remote",J:[{C:"div",G:"ytp-remote-display-status",J:[{C:"div",G:"ytp-remote-display-status-icon",J:[g.qP()]},{C:"div",G:"ytp-remote-display-status-text",U:"{{statustext}}"}]}]});this.l=new g.aQ(this,250);g.I(this,this.l);this.o=a;this.K(a,"presentingplayerstatechange",this.u);ara(this,g.aK(a))},ara=function(a,b){if(3==a.o.getPresentingPlayerType()){var c={RECEIVER_NAME:a.o.getOption("remote","currentReceiver").name};
c=g.V(b,128)?g.pN("Error on $RECEIVER_NAME",c):g.gD(b)||g.V(b,4)?g.pN("Playing on $RECEIVER_NAME",c):g.pN("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},h9=function(a,b){g.IT.call(this,"Play on",0,a,b);
this.l=a;this.F={};this.K(a,"onMdxReceiversChange",this.I);this.K(a,"presentingplayerstatechange",this.I);this.I()},i9=function(a){g.FK.call(this,a);
this.i={key:I5(),name:"This computer"};this.o=null;this.u=[];this.B=this.g=null;this.A=[this.i];this.l=this.i;this.Vj=new g.$C(64);this.D=0;this.om=-1;if(!g.dz(g.W(this.player))){a=this.player;var b=g.yC(a);b&&(b=b.Jm())&&(b=new h9(a,b),g.I(this,b));b=new g9(a);g.I(this,b);g.rK(a,b.element,4)}},$qa=function(a,b,c){a.Vj=c;
a.player.N("presentingplayerstatechange",new g.kD(c,b))},j9=function(a,b){if(b.key!=a.l.key)if(b.key==a.i.key)W8();
else{a.l=b;var c=a.player.getPlaylistId();var d=a.player.getVideoData(1);var e=d.videoId;if(c||e){var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.oa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);c={videoIds:k,listId:c,videoId:e,playerParams:d.playerParams,clickTrackingParams:d.vf,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(d=v5(d))&&(c.locationInfo=d);d=c}else d=null;O8("Connecting to: "+g.Ng(b));"cast-selector-receiver"==b.key?
(Q8(d||null),h8()?a8().setLaunchParams(d||null):Y7("setLaunchParams called before ready.")):!d&&Z8()&&N8()==b.key?A5("yt-remote-connection-change",!0):(W8(),Q8(d||null),d=M8().Fd(),(d=K5(d,b.key))&&X8(d,1))}},Ppa=/^https?$/i,bra=["POST",
"PUT"];g.A(t5,g.Uf);g.h=t5.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.F+"; newUri="+a);b=b?b.toUpperCase():"GET";this.F=a;this.l="";this.u=0;this.aa=b;this.O=!1;this.i=!0;this.g=this.M?l5(this.M):l5(g.KY);this.P=this.M?this.M.getOptions():g.KY.getOptions();this.g.onreadystatechange=(0,g.y)(this.Iv,this);try{i5(m5(this,"Opening Xhr")),this.V=!0,this.g.open(b,String(a),!0),this.V=!1}catch(f){i5(m5(this,"Error opening Xhr: "+f.message));q5(this,f);return}a=c||
"";var e=this.headers.clone();d&&Mpa(d,function(f,k){e.set(k,f)});
d=g.Wa(e.Dd(),Npa);c=g.w.FormData&&a instanceof g.w.FormData;!g.Za(bra,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.g.setRequestHeader(k,f)},this);
this.Y&&(this.g.responseType=this.Y);"withCredentials"in this.g&&this.g.withCredentials!==this.R&&(this.g.withCredentials=this.R);try{n5(this),0<this.A&&(this.I=Opa(this.g),i5(m5(this,"Will abort after "+this.A+"ms if incomplete, xhr2 "+this.I)),this.I?(this.g.timeout=this.A,this.g.ontimeout=(0,g.y)(this.Jv,this)):this.B=g.Jg(this.Jv,this.A,this)),i5(m5(this,"Sending request")),this.D=!0,this.g.send(a),this.D=!1}catch(f){i5(m5(this,"Send error: "+f.message)),q5(this,f)}};
g.h.Jv=function(){"undefined"!=typeof g.nY&&this.g&&(this.l="Timed out after "+this.A+"ms, aborting",this.u=8,m5(this,this.l),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.i&&(m5(this,"Aborting"),this.i=!1,this.o=!0,this.g.abort(),this.o=!1,this.u=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),p5(this))};
g.h.T=function(){this.g&&(this.i&&(this.i=!1,this.o=!0,this.g.abort(),this.o=!1),p5(this,!0));t5.Ha.T.call(this)};
g.h.Iv=function(){this.ea()||(this.V||this.D||this.o?s5(this):this.MJ())};
g.h.MJ=function(){s5(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<r5(this)?this.g.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return g.v(this.l)?this.l:String(this.l)};
var r6={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"<"},q6={"'":"\\'"},cra={};g.h=z5.prototype;g.h.isEmpty=function(){return 0==this.g.length&&0==this.i.length};
g.h.clear=function(){this.g=[];this.i=[]};
g.h.contains=function(a){return g.Za(this.g,a)||g.Za(this.i,a)};
g.h.remove=function(a){var b=this.g;var c=(0,g.yma)(b,a);0<=c?(g.ab(b,c),b=!0):b=!1;return b||g.bb(this.i,a)};
g.h.yc=function(){for(var a=[],b=this.g.length-1;0<=b;--b)a.push(this.g[b]);var c=this.i.length;for(b=0;b<c;++b)a.push(this.i[b]);return a};
var Ypa={TM:"atp",eP:"ska",TO:"que",sO:"mus",dP:"sus",JN:"dsp",aP:"seq"};B5.prototype.Uf=function(){var a=new B5({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.l=this.l;a.i=this.i;a.g=this.g};
var U5,N5="",a6=W5("loadGamesSDK")?"/cast_game_sender.js":"/cast_sender.js",fqa=W5("loadCastFramework")||W5("loadCastApplicationFramework"),yqa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.A(c6,g.H);g.h=c6.prototype;g.h.KC=function(a){this.o=arguments;this.g=!1;this.za?this.l=(0,g.D)()+this.Uc:this.za=g.Jg(this.u,this.Uc)};
g.h.stop=function(){this.za&&(g.w.clearTimeout(this.za),this.za=null);this.l=null;this.g=!1;this.o=[]};
g.h.pause=function(){++this.i};
g.h.resume=function(){this.i&&(--this.i,!this.i&&this.g&&(this.g=!1,this.A.apply(null,this.o)))};
g.h.T=function(){this.stop();c6.Ha.T.call(this)};
g.h.LC=function(){this.l?(this.za=g.Jg(this.u,this.l-(0,g.D)()),this.l=null):(this.za=null,this.i?this.g=!0:(this.g=!1,this.A.apply(null,this.o)))};d6.prototype.stringify=function(a){return g.w.JSON.stringify(a,void 0)};
d6.prototype.parse=function(a){return g.w.JSON.parse(a,void 0)};g.h=e6.prototype;g.h.Rg=null;g.h.se=!1;g.h.Ki=null;g.h.Ms=null;g.h.si=null;g.h.Ph=null;g.h.cg=null;g.h.wg=null;g.h.mh=null;g.h.tc=null;g.h.Kk=0;g.h.we=null;g.h.Xn=null;g.h.dg=null;g.h.Bj=-1;g.h.zz=!0;g.h.Hg=!1;g.h.Fp=0;g.h.nn=null;var l6={},j6={};g.h=e6.prototype;g.h.setTimeout=function(a){this.o=a};
g.h.rL=function(a){a=a.target;var b=this.nn;b&&3==r5(a)?b.xj():this.HA(a)};
g.h.HA=function(a){try{if(a==this.tc)a:{var b=r5(this.tc),c=this.tc.u,d=this.tc.getStatus();if(g.Od&&!g.rd(10)||g.Qd&&!g.qd("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Fh&&!u5(this.tc))break a;this.Hg||4!=b||7==c||(8==c||0>=d?this.g.ne(3):this.g.ne(2));v6(this);var e=this.tc.getStatus();this.Bj=e;var f=u5(this.tc);(this.se=200==e)?(4==b&&n6(this),this.u?(p6(this,b,f),g.Fh&&this.se&&3==b&&(this.ba.da(this.i,"tick",this.nL),this.i.start())):m6(this,f),this.se&&!this.Hg&&(4==b?this.g.Xm(this):(this.se=
!1,i6(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.dg=3,k6(13)):(this.dg=0,k6(14)),n6(this),o6(this))}}catch(k){this.tc&&u5(this.tc)}finally{}};
g.h.nL=function(){var a=r5(this.tc),b=u5(this.tc);this.Kk<b.length&&(v6(this),p6(this,a,b),this.se&&4!=a&&i6(this))};
g.h.MK=function(a){u6((0,g.y)(this.LK,this,a),0)};
g.h.LK=function(a){this.Hg||(v6(this),m6(this,a),i6(this))};
g.h.Hy=function(a){u6((0,g.y)(this.KK,this,a),0)};
g.h.KK=function(a){this.Hg||(n6(this),this.se=a,this.g.Xm(this),this.g.ne(4))};
g.h.cancel=function(){this.Hg=!0;n6(this)};
g.h.WK=function(){this.Ki=null;var a=(0,g.D)();0<=a-this.Ms?(2!=this.Ph&&this.g.ne(3),n6(this),this.dg=2,k6(18),o6(this)):t6(this,this.Ms-a)};
g.h.getLastError=function(){return this.dg};g.h=z6.prototype;g.h.Dp=null;g.h.zd=null;g.h.pn=!1;g.h.Hv=null;g.h.Il=null;g.h.tq=null;g.h.Ep=null;g.h.Wd=null;g.h.tf=-1;g.h.Aj=null;g.h.Ui=null;g.h.connect=function(a){this.Ep=a;a=A6(this.g,null,this.Ep);k6(3);this.Hv=(0,g.D)();var b=this.g.D;null!=b?(this.Aj=b[0],(this.Ui=b[1])?(this.Wd=1,B6(this)):(this.Wd=2,D6(this))):(k5(a,"MODE","init"),this.zd=new e6(this,void 0,void 0,void 0),this.zd.Rg=this.Dp,h6(this.zd,a,!1,null,!0),this.Wd=0)};
g.h.WB=function(a){if(a)this.Wd=2,D6(this);else{k6(4);var b=this.g;b.Ee=b.Tf.tf;X6(b,9)}a&&this.ne(2)};
g.h.Yo=function(a){return this.g.Yo(a)};
g.h.abort=function(){this.zd&&(this.zd.cancel(),this.zd=null);this.tf=-1};
g.h.Gv=function(){return!1};
g.h.By=function(a,b){this.tf=a.Bj;if(0==this.Wd)if(b){try{var c=this.i.parse(b)}catch(d){c=this.g;c.Ee=this.tf;X6(c,2);return}this.Aj=c[0];this.Ui=c[1]}else c=this.g,c.Ee=this.tf,X6(c,2);else if(2==this.Wd)if(this.pn)k6(7),this.tq=(0,g.D)();else if("11111"==b){if(k6(6),this.pn=!0,this.Il=(0,g.D)(),c=this.Il-this.Hv,!g.Od||g.rd(10)||500>c)this.tf=200,this.zd.cancel(),k6(12),C6(this.g,this,!0)}else k6(8),this.Il=this.tq=(0,g.D)(),this.pn=!1};
g.h.Xm=function(){this.tf=this.zd.Bj;if(this.zd.se)0==this.Wd?this.Ui?(this.Wd=1,B6(this)):(this.Wd=2,D6(this)):2==this.Wd&&((!g.Od||g.rd(10)?!this.pn:200>this.tq-this.Il)?(k6(11),C6(this.g,this,!1)):(k6(12),C6(this.g,this,!0)));else{0==this.Wd?k6(9):2==this.Wd&&k6(10);var a=this.g;this.zd.getLastError();a.Ee=this.tf;X6(a,2)}};
g.h.Bk=function(){return this.g.Bk()};
g.h.isActive=function(){return this.g.isActive()};
g.h.ne=function(a){this.g.ne(a)};g.h=E6.prototype;g.h.hj=null;g.h.ud=null;g.h.Rb=null;g.h.Cp=null;g.h.Kl=null;g.h.eu=null;g.h.Tl=null;g.h.gk=0;g.h.XG=0;g.h.Sc=null;g.h.Yf=null;g.h.ff=null;g.h.Mg=null;g.h.Tf=null;g.h.Vn=null;g.h.Yh=-1;g.h.mw=-1;g.h.Ee=-1;g.h.Kh=0;g.h.Eh=0;g.h.Ig=8;var Y6=new g.Uf;g.A(F6,g.uf);g.A(G6,g.uf);g.A(H6,g.uf);g.h=E6.prototype;g.h.connect=function(a,b,c,d,e){k6(0);this.Cp=b;this.hj=c||{};d&&g.Ca(e)&&(this.hj.OSID=d,this.hj.OAID=e);this.A?(u6((0,g.y)(this.vu,this,a),100),N6(this)):this.vu(a)};
g.h.vu=function(a){this.Tf=new z6(this);this.Tf.Dp=null;this.Tf.i=this.u;this.Tf.connect(a)};
g.h.Gv=function(){return 0==this.g};
g.h.Gy=function(a){this.Yf=null;S6(this,a)};
g.h.Fy=function(){this.ff=null;this.Rb=new e6(this,this.l,"rpc",this.B);this.Rb.Rg=null;this.Rb.Fp=0;var a=this.eu.clone();g.bn(a,"RID","rpc");g.bn(a,"SID",this.l);g.bn(a,"CI",this.Vn?"0":"1");g.bn(a,"AID",this.Yh);J6(this,a);if(!g.Od||g.rd(10))g.bn(a,"TYPE","xmlhttp"),h6(this.Rb,a,!0,this.Tl,!1);else{g.bn(a,"TYPE","html");var b=this.Rb,c=!!this.Tl;b.Ph=3;b.cg=j5(a.clone());s6(b,c)}};
g.h.By=function(a,b){if(0!=this.g&&(this.Rb==a||this.ud==a))if(this.Ee=a.Bj,this.ud==a&&3==this.g)if(7<this.Ig){try{var c=this.u.parse(b)}catch(f){c=null}if(g.Ka(c)&&3==c.length)if(0==c[0])a:{if(!this.ff){if(this.Rb)if(this.Rb.si+3E3<this.ud.si)O6(this),this.Rb.cancel(),this.Rb=null;else break a;V6(this);k6(19)}}else this.mw=c[1],0<this.mw-this.Yh&&37500>c[2]&&this.Vn&&0==this.Eh&&!this.Mg&&(this.Mg=u6((0,g.y)(this.BH,this),6E3));else X6(this,11)}else b!=cra.oN.g&&X6(this,11);else if(this.Rb==a&&
O6(this),!g.vb(b)){c=this.u.parse(b);g.Ka(c);for(var d=0;d<c.length;d++){var e=c[d];this.Yh=e[0];e=e[1];2==this.g?"c"==e[0]?(this.l=e[1],this.Tl=e[2],e=e[3],null!=e?this.Ig=e:this.Ig=6,this.g=3,this.Sc&&this.Sc.ou(),this.eu=A6(this,this.Bk()?this.Tl:null,this.Cp),T6(this)):"stop"==e[0]&&X6(this,7):3==this.g&&("stop"==e[0]?X6(this,7):"noop"!=e[0]&&this.Sc&&this.Sc.nu(e),this.Eh=0)}}};
g.h.BH=function(){null!=this.Mg&&(this.Mg=null,this.Rb.cancel(),this.Rb=null,V6(this),k6(20))};
g.h.Xm=function(a){if(this.Rb==a){O6(this);this.Rb=null;var b=2}else if(this.ud==a)this.ud=null,b=1;else return;this.Ee=a.Bj;if(0!=this.g)if(a.se)1==b?(b=(0,g.D)()-a.si,Y6.dispatchEvent(new G6(Y6,a.mh?a.mh.length:0,b,this.Kh)),M6(this),this.o.length=0):T6(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Ee)){if(d=1==b)this.ud||this.Yf||1==this.g||2<=this.Kh?d=!1:(this.Yf=u6((0,g.y)(this.Gy,this,a),U6(this,this.Kh)),this.Kh++,d=!0);d=!(d||2==b&&V6(this))}if(d)switch(c){case 1:X6(this,
5);break;case 4:X6(this,10);break;case 3:X6(this,6);break;case 7:X6(this,12);break;default:X6(this,2)}}};
g.h.oC=function(a){if(!g.Za(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.UL=function(a){a?k6(2):(k6(1),W6(this,8))};
g.h.Yo=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new t5;a.R=!1;return a};
g.h.isActive=function(){return!!this.Sc&&this.Sc.isActive(this)};
g.h.ne=function(a){Y6.dispatchEvent(new H6(Y6,a))};
g.h.Bk=function(){return!(!g.Od||g.rd(10))};
g.h=Z6.prototype;g.h.ou=function(){};
g.h.nu=function(){};
g.h.mu=function(){};
g.h.Oo=function(){};
g.h.gv=function(){return{}};
g.h.isActive=function(){return!0};g.A($6,g.H);g.h=$6.prototype;g.h.EK=function(){this.Uc=Math.min(3E5,2*this.Uc);this.l();this.i&&this.start()};
g.h.start=function(){var a=this.Uc+15E3*Math.random();g.oo(this.g,a);this.i=(0,g.D)()+a};
g.h.stop=function(){this.g.stop();this.i=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.Uc=5E3};g.A(a7,Z6);g.h=a7.prototype;g.h.subscribe=function(a,b,c){return this.l.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.l.unsubscribe(a,b,c)};
g.h.Bf=function(a){return this.l.Sg(a)};
g.h.N=function(a,b){return this.l.N.apply(this.l,arguments)};
g.h.dispose=function(){this.Za||(this.Za=!0,g.sf(this.l),b7(this),g.sf(this.i),this.i=null)};
g.h.ea=function(){return this.Za};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.F="";this.i.stop();this.u=a||null;this.o=b||0;a=this.H+"/test";b=this.H+"/bind";var d=new E6(c?c.firstTestResults:null,c?c.secondTestResults:null,this.I),e=this.g;e&&(e.Sc=null);d.Sc=this;this.g=d;e?this.g.connect(a,b,this.A,e.l,e.Yh):c?this.g.connect(a,b,this.A,c.sessionId,c.arrayId):this.g.connect(a,b,this.A)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.ec(c,b);this.i.isActive()||2==(this.g?this.g.g:0)?this.B.push(c):c7(this)&&P6(this.g,c)};
g.h.ou=function(){this.i.reset();this.u=null;this.o=0;if(this.B.length){var a=this.B;this.B=[];for(var b=0,c=a.length;b<c;++b)P6(this.g,a[b])}this.N("handlerOpened")};
g.h.mu=function(a){var b=2==a&&401==this.g.Ee;4==a||b||this.i.start();this.N("handlerError",a)};
g.h.Oo=function(a){if(!this.i.isActive())this.N("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.B.push(d)}};
g.h.gv=function(){var a={v:2};this.F&&(a.gsessionid=this.F);0!=this.o&&(a.ui=""+this.o);0!=this.D&&(a.ui=""+this.D);this.u&&g.ec(a,this.u);return a};
g.h.nu=function(a){"S"==a[0]?this.F=a[1]:"gracefulReconnect"==a[0]?(this.i.start(),L6(this.g)):this.N("handlerMessage",new jqa(a[0],a[1]))};
g.h.qM=function(){this.i.isActive();var a=this.g,b=0;a.Rb&&b++;a.ud&&b++;0!=b||this.connect(this.u,this.o)};d7.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
d7.prototype.l=function(a,b){a(Error("Request error: "+b.status))};
d7.prototype.u=function(a){a(Error("request timed out"))};var pqa=(0,g.D)(),i7=null,m7=Array(50),l7=-1,n7=!1;g.A(o7,g.P);o7.prototype.Fd=function(){return this.g};
o7.prototype.contains=function(a){return!!J5(this.g,a)};
o7.prototype.get=function(a){return a?K5(this.g,a):null};
o7.prototype.info=function(a){k7(this.B,a)};g.A(q7,g.P);var dra=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.h=q7.prototype;g.h.start=function(){!this.g&&isNaN(this.za)&&this.KA()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);isNaN(this.za)||(g.Sp(this.za),this.za=NaN)};
g.h.T=function(){this.stop();q7.Ha.T.call(this)};
g.h.KA=function(){this.za=NaN;this.g=g.Nq(e7(this.A,"/pairing/get_screen"),{method:"POST",rb:{pairing_code:this.u},timeout:5E3,onSuccess:(0,g.y)(this.sM,this),onError:(0,g.y)(this.rM,this),md:(0,g.y)(this.tM,this)})};
g.h.sM=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.l;c.name=this.o;this.N("pairingComplete",new C5(c))};
g.h.rM=function(a){this.g=null;a.status&&404==a.status?this.i>=dra.length?this.N("pairingFailed",Error("DIAL polling timed out")):(a=dra[this.i],this.za=g.Qp((0,g.y)(this.KA,this),a),this.i++):this.N("pairingFailed",Error("Server error "+a.status))};
g.h.tM=function(){this.g=null;this.N("pairingFailed",Error("Server not responding"))};g.A(s7,o7);g.h=s7.prototype;g.h.start=function(){r7(this)&&this.N("screenChange");!g.nt("yt-remote-lounge-token-expiration")&&t7(this);g.Sp(this.i);this.i=g.Qp((0,g.y)(this.start,this),1E4)};
g.h.add=function(a,b){r7(this);p7(this,a);u7(this,!1);this.N("screenChange");b(a);a.token||t7(this)};
g.h.remove=function(a,b){var c=r7(this);rqa(this,a)&&(u7(this,!1),c=!0);b(a);c&&this.N("screenChange")};
g.h.Rn=function(a,b,c,d){var e=r7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,u7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.N("screenChange")};
g.h.T=function(){g.Sp(this.i);s7.Ha.T.call(this)};
g.h.VC=function(a){r7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}u7(this,!b);b&&k7(this.B,"Missed "+b+" lounge tokens.")};
g.h.UC=function(a){k7(this.B,"Requesting lounge tokens failed: "+a)};g.A(w7,g.P);g.h=w7.prototype;g.h.start=function(){var a=parseInt(g.nt("yt-remote-fast-check-period")||"0",10);(this.o=(0,g.D)()-144E5<a?0:a)?z7(this):(this.o=(0,g.D)()+3E5,g.mt("yt-remote-fast-check-period",this.o),this.Nr())};
g.h.isEmpty=function(){return g.Xb(this.g)};
g.h.update=function(){v7("Updating availability on schedule.");var a=this.A(),b=g.Lb(this.g,function(c,d){return c&&!!K5(a,d)},this);
y7(this,b)};
g.h.T=function(){g.Sp(this.l);this.l=NaN;this.i&&(this.i.abort(),this.i=null);w7.Ha.T.call(this)};
g.h.Nr=function(){g.Sp(this.l);this.l=NaN;this.i&&this.i.abort();var a=A7(this);if(w5(a)){var b=e7(this.u,"/pairing/get_screen_availability");this.i=f7(this.u,b,{lounge_token:g.Rb(a).join(",")},(0,g.y)(this.iK,this,a),(0,g.y)(this.hK,this))}else y7(this,{}),z7(this)};
g.h.iK=function(a,b){this.i=null;var c=g.Rb(A7(this));if(g.qb(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;y7(this,d);z7(this)}else this.Jb("Changing Screen set during request."),this.Nr()};
g.h.hK=function(a){this.Jb("Screen availability failed: "+a);this.i=null;z7(this)};
g.h.Jb=function(a){k7("OnlineScreenService",a)};g.A(B7,o7);g.h=B7.prototype;g.h.start=function(){this.l.start();this.i.start();this.g.length&&(this.N("screenChange"),this.i.isEmpty()||this.N("onlineScreenChange"))};
g.h.add=function(a,b,c){this.l.add(a,b,c)};
g.h.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.h.Rn=function(a,b,c,d){this.l.contains(a)?this.l.Rn(a,b,c,d):(a="Updating name of unknown screen: "+a.name,k7(this.B,a),d(Error(a)))};
g.h.Fd=function(a){return a?this.g:g.eb(this.g,(0,g.$d)(this.o,function(b){return!this.contains(b)},this))};
g.h.LA=function(){return(0,g.$d)(this.Fd(!0),function(a){return!!this.i.g[a.id]},this)};
g.h.MA=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new q7(this.A,a,b,c);f.subscribe("pairingComplete",(0,g.y)(function(k){g.sf(f);d(C7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.sf(f);e(k)});
f.start();return(0,g.y)(f.stop,f)};
g.h.vM=function(a,b,c,d){g.Nq(e7(this.A,"/pairing/get_screen"),{method:"POST",rb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.y)(function(e,f){var k=new C5(f.screen||{});if(!k.name||E7(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);E7(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c(C7(this,k))},this),
onError:(0,g.y)(function(e){d(Error("pairing request failed: "+e.status))},this),
md:(0,g.y)(function(){d(Error("pairing request timed out."))},this)})};
g.h.T=function(){g.sf(this.l);g.sf(this.i);B7.Ha.T.call(this)};
g.h.eD=function(){F7(this);this.N("screenChange");this.i.update()};
B7.prototype.dispose=B7.prototype.dispose;g.A(H7,g.P);g.h=H7.prototype;g.h.Ym=function(a){this.l=a;this.N("sessionScreen",this.l)};
g.h.Id=function(a){this.ea()||(a&&I7(this,""+a),this.l=null,this.N("sessionScreen",null))};
g.h.info=function(a){k7(this.P,a)};
g.h.OA=function(){return null};
g.h.Xr=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.y)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.y)(function(){I7(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.T=function(){this.Xr("");H7.Ha.T.call(this)};g.A(K7,H7);g.h=K7.prototype;g.h.Wr=function(a){if(this.g){if(this.g==a)return;I7(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.A);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.u)}this.g=a;this.g.addUpdateListener(this.A);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.u);vqa(this)};
g.h.ai=function(a){this.info("launchWithParams no-op for Cast: "+g.Ng(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.y)(function(){this.Id()},this),(0,g.y)(function(){this.Id(Error("Failed to stop receiver app."))},this)):this.Id(Error("Stopping cast device witout session."))};
g.h.Xr=g.Ha;g.h.T=function(){this.info("disposeInternal");g.Sp(this.o);this.o=0;this.g&&(this.g.removeUpdateListener(this.A),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.u));this.g=null;K7.Ha.T.call(this)};
g.h.hL=function(a,b){if(!this.ea())if(b){var c=y5(b);if(g.Na(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Ng(c));switch(d){case "mdxSessionStatus":J7(this,c.screenId);break;default:I7(this,"Unknown youtube message: "+d)}}else I7(this,"Unable to parse message.")}else I7(this,"No data in message.")};
g.h.zv=function(a,b,c,d){D7(this.F,this.i.label,a,this.i.friendlyName,(0,g.y)(function(e){e?b(e):0<=d?(I7(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.Qp((0,g.y)(this.zv,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.OA=function(){return this.g};
g.h.wM=function(a){this.ea()||a||(I7(this,"Cast session died."),this.Id())};g.A(L7,H7);g.h=L7.prototype;g.h.Wr=function(a){this.o=a;this.o.addUpdateListener(this.I)};
g.h.ai=function(a){this.u=a;this.B()};
g.h.stop=function(){this.g();this.g=g.Ha;g.Sp(this.A);this.o?this.o.stop((0,g.y)(this.Id,this,null),(0,g.y)(this.Id,this,"Failed to stop DIAL device.")):this.Id()};
g.h.T=function(){this.g();this.g=g.Ha;g.Sp(this.A);this.o&&this.o.removeUpdateListener(this.I);this.o=null;L7.Ha.T.call(this)};
g.h.zM=function(a){this.ea()||a||(I7(this,"DIAL session died."),this.g(),this.g=g.Ha,this.Id())};
g.h.Tp=function(a){this.H=I5();if(this.u){var b=new chrome.cast.DialLaunchResponse(!0,N7(this));a(b);M7(this)}else this.B=(0,g.y)(function(){g.Sp(this.A);this.B=g.Ha;this.A=NaN;var c=new chrome.cast.DialLaunchResponse(!0,N7(this));a(c);M7(this)},this),this.A=g.Qp((0,g.y)(function(){this.B()},this),100)};
g.h.BD=function(a,b,c){D7(this.F,this.D.receiver.label,a,this.i.friendlyName,(0,g.y)(function(d){d&&d.token?(this.Ym(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Tp(b,c)},this),(0,g.y)(function(d){I7(this,"Failed to get DIAL screen: "+d);
this.Tp(b,c)},this))};g.A(O7,H7);O7.prototype.stop=function(){this.Id()};
O7.prototype.Wr=g.Ha;O7.prototype.ai=function(){g.Sp(this.g);this.g=NaN;var a=K5(this.F.Fd(),this.i.label);a?this.Ym(a):this.Id(Error("No such screen"))};
O7.prototype.T=function(){g.Sp(this.g);this.g=NaN;O7.Ha.T.call(this)};g.A(P7,g.P);g.h=P7.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.B);this.D||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;c=new chrome.cast.ApiConfig(c,(0,g.y)(this.Dy,this),(0,g.y)(this.RJ,this),d,e);c.customDialLaunchCallback=(0,g.y)(this.bI,this);chrome.cast.initialize(c,(0,g.y)(function(){this.ea()||
(chrome.cast.addReceiverActionListener(this.o),mqa(),this.i.subscribe("onlineScreenChange",(0,g.y)(this.NA,this)),this.l=U7(this),chrome.cast.setCustomReceivers(this.l,g.Ha,(0,g.y)(function(f){this.Jb("Failed to set initial custom receivers: "+g.Ng(f))},this)),this.N("yt-remote-cast2-availability-change",S7(this)),b(!0))},this),(0,g.y)(function(f){this.Jb("Failed to initialize API: "+g.Ng(f));
b(!1)},this))};
g.h.IL=function(a,b){R7("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.l;if(!a||c&&c.id!=a)R7("Unsetting old screen status: "+this.g.i.friendlyName),T7(this,null)}if(a&&b){if(!this.g){c=K5(this.i.Fd(),a);if(!c){R7("setConnectedScreenStatus: Unknown screen.");return}var d=Q7(this,c);d||(R7("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.l.push(d),chrome.cast.setCustomReceivers(this.l,
g.Ha,(0,g.y)(function(e){this.Jb("Failed to set initial custom receivers: "+g.Ng(e))},this)));
R7("setConnectedScreenStatus: new active receiver: "+d.friendlyName);T7(this,new O7(this.i,d),!0)}this.g.Xr(b)}else R7("setConnectedScreenStatus: no screen.")};
g.h.JL=function(a){this.ea()?this.Jb("Setting connection data on disposed cast v2"):this.g?this.g.ai(a):this.Jb("Setting connection data without a session")};
g.h.yM=function(){this.ea()?this.Jb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),T7(this,null)):R7("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.y)(this.Dy,this),(0,g.y)(this.nK,this))};
g.h.T=function(){this.i.unsubscribe("onlineScreenChange",(0,g.y)(this.NA,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);g.bb(g.x("yt.mdx.remote.debug.handlers_")||[],g7);g.sf(this.g);P7.Ha.T.call(this)};
g.h.Jb=function(a){k7("Controller",a)};
g.h.Ey=function(a,b){this.g==a&&(b||T7(this,null),this.N("yt-remote-cast2-session-change",b))};
g.h.NJ=function(a,b){if(!this.ea())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),R7("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.i.label!=a.label)R7("onReceiverAction_: Stopping active receiver: "+this.g.i.friendlyName),this.g.stop();else{R7("onReceiverAction_: Casting to active receiver.");this.g.l&&this.N("yt-remote-cast2-session-change",this.g.l);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:T7(this,
new O7(this.i,a));break;case chrome.cast.ReceiverType.DIAL:T7(this,new L7(this.i,a,this.A));break;case chrome.cast.ReceiverType.CAST:T7(this,new K7(this.i,a));break;default:this.Jb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.g&&this.g.i.label==a.label?this.g.stop():this.Jb("Stopping receiver w/o session: "+a.friendlyName)}else this.Jb("onReceiverAction_ called without receiver.")};
g.h.bI=function(a){if(this.ea())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Jb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.i:null;if(!c||c.label!=b.label)return this.Jb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.g.l)return R7("Reselecting dial screen."),
this.N("yt-remote-cast2-session-change",this.g.l),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Jb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);T7(this,new L7(this.i,b,this.A))}b=this.g;b.D=a;return b.D.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.y)(b.BD,b,(b.D.extraData||{}).screenId||null)):new Promise((0,g.y)(b.Tp,b))};
g.h.Dy=function(a){if(!this.ea()){R7("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==chrome.cast.ReceiverType.CAST)R7("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),T7(this,new K7(this.i,b),!0);else{this.Jb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.i,d=K5(this.i.Fd(),c.label);d&&D5(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(R7("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.sf(this.g),this.g=new K7(this.i,b),this.g.subscribe("sessionScreen",(0,g.y)(this.Ey,this,this.g)),this.g.ai(null));this.g.Wr(a)}}};
g.h.xM=function(){return this.g?this.g.OA():null};
g.h.nK=function(a){this.ea()||(this.Jb("Failed to estabilish a session: "+g.Ng(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&T7(this,null))};
g.h.RJ=function(a){R7("Receiver availability updated: "+a);if(!this.ea()){var b=S7(this);this.u=a==chrome.cast.ReceiverAvailability.AVAILABLE;S7(this)!=b&&this.N("yt-remote-cast2-availability-change",S7(this))}};
g.h.NA=function(){this.ea()||(this.l=U7(this),R7("Updating custom receivers: "+g.Ng(this.l)),chrome.cast.setCustomReceivers(this.l,g.Ha,(0,g.y)(function(){this.Jb("Failed to set custom receivers.")},this)),this.N("yt-remote-cast2-availability-change",S7(this)))};
P7.prototype.setLaunchParams=P7.prototype.JL;P7.prototype.setConnectedScreenStatus=P7.prototype.IL;P7.prototype.stopSession=P7.prototype.yM;P7.prototype.getCastSession=P7.prototype.xM;P7.prototype.requestSession=P7.prototype.requestSession;P7.prototype.init=P7.prototype.init;P7.prototype.dispose=P7.prototype.dispose;var c8=[];k8.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";l8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.Ge=a.hasPrevious,this.hasNext=a.hasNext,this.B=a.playerTime,this.A=a.playerTimeAt,this.o=a.seekableStart,this.i=a.seekableEnd,this.D=a.duration,this.F=a.loadedTime,this.l=a.liveIngestionTime,this.u=
!isNaN(this.l))};
k8.prototype.isAdPlaying=function(){return 1081==this.playerState};
k8.prototype.getDuration=function(){return this.u?this.D+m8(this):this.D};
k8.prototype.clone=function(){return new k8(q8(this))};g.A(t8,g.P);g.h=t8.prototype;g.h.play=function(){1==this.g?(this.i?this.i.play(null,g.Ha,B8(this,"play")):z8(this,"play"),y8(this,1,o8(u8(this))),this.N("remotePlayerChange")):w8(this,this.play)};
g.h.pause=function(){1==this.g?(this.i?this.i.pause(null,g.Ha,B8(this,"pause")):z8(this,"pause"),y8(this,2,o8(u8(this))),this.N("remotePlayerChange")):w8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.g){if(this.i){var b=u8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ha,B8(this,"seekTo",{newTime:a}))}else z8(this,"seekTo",{newTime:a});y8(this,3,a);this.N("remotePlayerChange")}else w8(this,g.Qa(this.seekTo,a))};
g.h.stop=function(){if(1==this.g){this.i?this.i.stop(null,g.Ha,B8(this,"stopVideo")):z8(this,"stopVideo");var a=u8(this);a.index=-1;a.videoId="";l8(a);x8(this,a);this.N("remotePlayerChange")}else w8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=u8(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.y)(function(){k7("CP","set receiver volume: "+d)},this),(0,g.y)(function(){this.Jb("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.y)(function(){k7("CP","set receiver muted: "+b)},this),(0,g.y)(function(){this.Jb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);z8(this,"setVolume",e)}c.muted=b;c.volume=a;x8(this,c)}else w8(this,g.Qa(this.setVolume,a,b))};
g.h.Nz=function(a,b){if(1==this.g){var c=u8(this),d={videoId:a};b&&(c.g={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Ng(b.style),g.ec(d,c.g));z8(this,"setSubtitlesTrack",d);x8(this,c)}else w8(this,g.Qa(this.Nz,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.g){var c=b.getLanguageInfo().getId();z8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=u8(this);d.audioTrackId=c;x8(this,d)}else w8(this,g.Qa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=u8(this);c=c||0;var m={videoId:a,currentIndex:c};p8(l,a,c);g.Ca(b)&&(n8(l,b),m.currentTime=b);g.Ca(d)&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Ng(k));z8(this,"setPlaylist",m);d||x8(this,l)};
g.h.gn=function(a,b){if(1==this.g){if(a&&b){var c=u8(this);p8(c,a,b);x8(this,c)}z8(this,"previous")}else w8(this,g.Qa(this.gn,a,b))};
g.h.nextVideo=function(a,b){if(1==this.g){if(a&&b){var c=u8(this);p8(c,a,b);x8(this,c)}z8(this,"next")}else w8(this,g.Qa(this.nextVideo,a,b))};
g.h.Mu=function(){1==this.g?z8(this,"dismissAutoplay"):w8(this,this.Mu)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.N("proxyStateChange",a,this.g)}t8.Ha.dispose.call(this)};
g.h.T=function(){v8(this);this.o=null;this.u.clear();s8(this,null);t8.Ha.T.call(this)};
g.h.Ps=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.N("proxyStateChange",b,a);if(1==a)for(;!this.u.isEmpty();)b=a=this.u,0==b.g.length&&(b.g=b.i,b.g.reverse(),b.i=[]),a.g.pop().apply(this);else 3==a&&this.dispose()}};
g.h.KJ=function(a,b){this.N(a,b)};
g.h.HH=function(a){if(!a)this.ik(null),s8(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=u8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)k7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,x8(this,b)}};
g.h.ik=function(a){k7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.D);if(this.i=a)this.i.addUpdateListener(this.D),A8(this),this.N("remotePlayerChange")};
g.h.GH=function(a){a?(A8(this),this.N("remotePlayerChange")):this.ik(null)};
g.h.zs=function(){z8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.TH=function(){var a=g8();a&&s8(this,a)};
g.h.Jb=function(a){k7("CP",a)};g.A(C8,g.P);g.h=C8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.Ca(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.Ca(k)&&(l.currentIndex=k);c&&(this.Qa.listId=c);this.Qa.videoId=d;this.Qa.index=k||0;this.Qa.state=3;n8(this.Qa,m);this.o="UNSUPPORTED";D8("Connecting with setPlaylist and params: "+g.Ng(l));this.g.connect({method:"setPlaylist",
params:g.Ng(l)},a,Q5())}else D8("Connecting without params"),this.g.connect({},a,Q5());Cqa(this)};
g.h.dispose=function(){this.ea()||(this.N("beforeDispose"),E8(this,3));C8.Ha.dispose.call(this)};
g.h.T=function(){F8(this);H8(this);G8(this);g.Sp(this.F);this.F=NaN;g.Sp(this.H);this.H=NaN;this.l=null;g.Qr(this.O);this.O.length=0;this.g.dispose();C8.Ha.T.call(this);this.o=this.B=this.i=this.Qa=this.g=null};
g.h.OC=function(){this.A(2)};
g.h.LH=function(){D8("Channel opened");this.M&&(this.M=!1,G8(this),this.P=g.Qp((0,g.y)(function(){D8("Timing out waiting for a screen.");this.A(1)},this),15E3));
dqa(kqa(this.g),this.V)};
g.h.IH=function(){D8("Channel closed");isNaN(this.u)?T5(!0):T5();this.dispose()};
g.h.JH=function(a){T5();isNaN(this.D())?(D8("Channel error: "+a+" without reconnection"),this.dispose()):(this.M=!0,D8("Channel error: "+a+" with reconnection in "+this.D()+" ms"),E8(this,2))};
g.h.KH=function(a){a.params?D8("Received: action="+a.action+", params="+g.Ng(a.params)):D8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=y5(a.params.devices);this.i=(0,g.G)(a,function(c){return new B5(c)});
a=!!g.Wa(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
Fqa(this,a);break;case "loungeScreenDisconnected":g.cb(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
Fqa(this,!1);break;case "remoteConnected":var b=new B5(y5(a.params.device));g.Wa(this.i,function(c){return b?c.id==b.id:!1})||Spa(this.i,b);
break;case "remoteDisconnected":b=new B5(y5(a.params.device));g.cb(this.i,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":Hqa(this,a);break;case "nowPlaying":Jqa(this,a);break;case "onStateChange":Iqa(this,a);break;case "onAdStateChange":Kqa(this,a);break;case "onVolumeChanged":Lqa(this,a);break;case "onSubtitlesTrackChanged":Gqa(this,a);break;case "nowAutoplaying":Mqa(this,a);break;case "autoplayDismissed":this.N("autoplayDismissed");break;case "autoplayUpNext":this.B=a.params.videoId||null;this.N("autoplayUpNext",this.B);break;case "onAutoplayModeChanged":this.o=
a.params.autoplayMode;this.N("autoplayModeChange",this.o);"DISABLED"==this.o&&this.N("autoplayDismissed");break;case "onHasPreviousNextChanged":Nqa(this,a);break;case "requestAssistedSignIn":this.N("assistedSignInRequested",a.params.authCode);break;default:D8("Unrecognized action: "+a.action)}};
g.h.xL=function(){if(this.l){var a=this.l;this.l=null;this.Qa.videoId!=a&&I8(this,"getNowPlaying")}};
C8.prototype.subscribe=C8.prototype.subscribe;C8.prototype.unsubscribeByKey=C8.prototype.Bf;C8.prototype.ca=function(){var a=3;this.ea()||(a=0,isNaN(this.D())?c7(this.g)&&isNaN(this.u)&&(a=1):a=2);return a};
C8.prototype.getProxyState=C8.prototype.ca;C8.prototype.A=function(a){D8("Disconnecting with "+a);F8(this);this.N("beforeDisconnect",a);1==a&&T5();b7(this.g,a);this.dispose()};
C8.prototype.disconnect=C8.prototype.A;C8.prototype.X=function(){var a=this.Qa;this.l&&(a=this.Qa.clone(),p8(a,this.l,a.index));return q8(a)};
C8.prototype.getPlayerContextData=C8.prototype.X;
C8.prototype.ka=function(a){var b=new k8(a);b.videoId&&b.videoId!=this.Qa.videoId&&(this.l=b.videoId,g.Sp(this.F),this.F=g.Qp((0,g.y)(this.xL,this),5E3));var c=[];this.Qa.listId==b.listId&&this.Qa.videoId==b.videoId&&this.Qa.index==b.index||c.push("remoteQueueChange");this.Qa.playerState==b.playerState&&this.Qa.volume==b.volume&&this.Qa.muted==b.muted&&o8(this.Qa)==o8(b)&&g.Ng(this.Qa.g)==g.Ng(b.g)||c.push("remotePlayerChange");this.Qa.reset(a);(0,g.B)(c,function(d){this.N(d)},this)};
C8.prototype.setPlayerContextData=C8.prototype.ka;C8.prototype.R=function(){var a=this.g.A.id,b=g.Wa(this.i,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
C8.prototype.getOtherConnectedRemoteId=C8.prototype.R;C8.prototype.D=function(){var a=this.g;return a.i.isActive()?a.i.i-(0,g.D)():NaN};
C8.prototype.getReconnectTimeout=C8.prototype.D;C8.prototype.aa=function(){return this.o||"UNSUPPORTED"};
C8.prototype.getAutoplayMode=C8.prototype.aa;C8.prototype.Y=function(){return this.B||""};
C8.prototype.getAutoplayVideoId=C8.prototype.Y;C8.prototype.va=function(){if(!isNaN(this.D())){var a=this.g.i;g.po(a.g);a.start()}};
C8.prototype.reconnect=C8.prototype.va;C8.prototype.ia=function(a,b){I8(this,a,b);Eqa(this)};
C8.prototype.sendMessage=C8.prototype.ia;g.A(J8,o7);g.h=J8.prototype;g.h.Fd=function(a){return this.Gc.$_gs(a)};
g.h.contains=function(a){return!!this.Gc.$_c(a)};
g.h.get=function(a){return this.Gc.$_g(a)};
g.h.start=function(){this.Gc.$_st()};
g.h.add=function(a,b,c){this.Gc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Gc.$_r(a,b,c)};
g.h.Rn=function(a,b,c,d){this.Gc.$_un(a,b,c,d)};
g.h.T=function(){for(var a=0,b=this.i.length;a<b;++a)this.Gc.$_ubk(this.i[a]);this.i.length=0;this.Gc=null;J8.Ha.T.call(this)};
g.h.uM=function(){this.N("screenChange")};
g.h.oJ=function(){this.N("onlineScreenChange")};
B7.prototype.$_st=B7.prototype.start;B7.prototype.$_gspc=B7.prototype.vM;B7.prototype.$_gsppc=B7.prototype.MA;B7.prototype.$_c=B7.prototype.contains;B7.prototype.$_g=B7.prototype.get;B7.prototype.$_a=B7.prototype.add;B7.prototype.$_un=B7.prototype.Rn;B7.prototype.$_r=B7.prototype.remove;B7.prototype.$_gs=B7.prototype.Fd;B7.prototype.$_gos=B7.prototype.LA;B7.prototype.$_s=B7.prototype.subscribe;B7.prototype.$_ubk=B7.prototype.Bf;var K8=null,L8=null,$8=null,P8=[];g.t(a9,g.H);g.h=a9.prototype;
g.h.T=function(){g.H.prototype.T.call(this);this.o.stop();this.A.stop();this.I.stop();this.M();this.g.unsubscribe("proxyStateChange",this.Ay,this);this.g.unsubscribe("remotePlayerChange",this.kk,this);this.g.unsubscribe("remoteQueueChange",this.Zm,this);this.g.unsubscribe("autoplayUpNext",this.Zx,this);this.g.unsubscribe("previousNextChange",this.wy,this);this.g.unsubscribe("nowAutoplaying",this.ry,this);this.g.unsubscribe("autoplayDismissed",this.Yx,this);this.g=this.u=null};
g.h.Xw=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(d9(this)){if(!u8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==u8(this.g).playerState?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.H.xj(c[0],c[1]);break;case "control_subtitles_set_track":e9(this,c[0]);break;case "control_set_audio_track":c=c[0],d9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.i.getCurrentTime();f9(this,0==c?void 0:c);break;case "control_seek":f9(this,c[0]);break;case "control_subtitles_set_track":e9(this,c[0]);break;case "control_set_audio_track":c=c[0],d9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,c)}};
g.h.FH=function(a){this.I.KC(a)};
g.h.dM=function(a){this.Xw("control_subtitles_set_track",g.Xb(a)?null:a)};
g.h.Zz=function(){var a=this.i.getOption("captions","track");g.Xb(a)||e9(this,a)};
g.h.my=function(a){if(d9(this)){this.g.unsubscribe("remotePlayerChange",this.kk,this);var b=Math.round(a.volume);a=!!a.muted;var c=u8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.P.start();this.g.subscribe("remotePlayerChange",this.kk,this)}};
g.h.FI=function(){g.Xb(this.B)||Zqa(this,this.B);this.D=!1};
g.h.Ay=function(a,b){this.A.stop();2==b&&this.Yz()};
g.h.kk=function(){if(d9(this)){this.o.stop();var a=u8(this.g);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.om=1;break;case 1082:case 1083:this.u.om=0;break;default:this.u.om=-1}switch(a.playerState){case 1081:case 1:c9(this,new g.$C(8));this.Xz();break;case 1085:case 3:c9(this,new g.$C(9));break;case 1083:case 0:c9(this,new g.$C(2));this.H.stop();b9(this,this.i.getVideoData().lengthSeconds);break;case 1084:c9(this,new g.$C(4));break;case 2:c9(this,new g.$C(4));b9(this,o8(a));
break;case -1:c9(this,new g.$C(64));break;case -1E3:c9(this,new g.$C(128,{errorCode:"mdx.remoteerror",message:"This video is not available for remote playback."}))}a=u8(this.g).g;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,Zqa(this,a));a=u8(this.g);-1==a.volume||Math.round(this.i.getVolume())==a.volume&&this.i.isMuted()==a.muted||this.P.isActive()||this.yA()}else Yqa(this)};
g.h.wy=function(){this.i.N("mdxpreviousnextchange")};
g.h.Zm=function(){d9(this)||Yqa(this)};
g.h.VB=function(){this.g.Mu()};
g.h.Zx=function(a){a&&(a=g.Nq("/watch_queue_ajax",{method:"GET",Cc:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.y)(this.PK,this)}))&&(this.M=(0,g.y)(a.abort,a))};
g.h.PK=function(a,b){var c=new g.dB(g.W(this.i),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.i.N("mdxautoplayupnext",c)};
g.h.ry=function(a){isNaN(a)||this.i.N("mdxnowautoplaying",a)};
g.h.Yx=function(){this.i.N("mdxautoplaycanceled")};
g.h.lF=function(a,b){-1==u8(this.g).playerState?f9(this,a):b&&this.g.seekTo(a)};
g.h.yA=function(){if(d9(this)){var a=u8(this.g);this.l.Na(this.O);a.muted?this.i.mute():this.i.unMute();this.i.setVolume(a.volume);this.O=this.l.K(this.i,"onVolumeChange",this.my)}};
g.h.Xz=function(){this.o.stop();if(!this.g.ea()){var a=u8(this.g);1==a.playerState&&c9(this,new g.$C(8));b9(this,o8(a));this.o.start()}};
g.h.Yz=function(){this.A.stop();this.o.stop();var a=this.g.o.getReconnectTimeout();2==this.g.g&&!isNaN(a)&&this.A.start()};g.t(g9,g.U);g9.prototype.u=function(a){ara(this,a.state)};g.t(h9,g.IT);h9.prototype.I=function(){var a=this.l.getOption("remote","receivers");a&&1<a.length&&!this.l.getOption("remote","quickCast")?(this.F=g.sb(a,this.A,this),g.JT(this,(0,g.G)(a,this.A)),a=this.l.getOption("remote","currentReceiver"),this.me(this.A(a)),this.enable(!0)):this.enable(!1)};
h9.prototype.A=function(a){return a.key};
h9.prototype.le=function(a){return"cast-selector-receiver"==a?"Cast...":this.F[a].name};
h9.prototype.Ic=function(a){g.IT.prototype.Ic.call(this,a);this.l.setOption("remote","currentReceiver",this.F[a]);this.o.gb()};g.t(i9,g.FK);g.h=i9.prototype;g.h.create=function(){Sqa(g.Wy(g.W(this.player)));this.u.push(g.Xp("yt-remote-before-disconnect",this.CH,this));this.u.push(g.Xp("yt-remote-connection-change",this.SJ,this));this.u.push(g.Xp("yt-remote-receiver-availability-change",this.yy,this));this.u.push(g.Xp("yt-remote-auto-connect",this.QJ,this));this.u.push(g.Xp("yt-remote-receiver-resumed",this.PJ,this));this.yy()};
g.h.load=function(){this.player.cancelPlayback();g.FK.prototype.load.call(this);this.o=new a9(this,this.player,this.g);var a=(a=Xqa())?a.currentTime:0;var b=Z8()?new t8(U8(),void 0):null;0==a&&b&&(a=o8(u8(b)));0!=a&&this.nd(a);$qa(this,this.Vj,this.Vj);g.JX(this.player.app,6)};
g.h.unload=function(){this.player.N("mdxautoplaycanceled");this.l=this.i;g.tf(this.o,this.g);this.g=this.o=null;g.FK.prototype.unload.call(this);g.JX(this.player.app,5)};
g.h.T=function(){g.Yp(this.u);g.FK.prototype.T.call(this)};
g.h.Re=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.o.Xw.apply(this.o,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.om};
g.h.GC=function(){return this.loaded?this.o.suggestion:null};
g.h.Ge=function(){return this.g?u8(this.g).Ge:!1};
g.h.hasNext=function(){return this.g?u8(this.g).hasNext:!1};
g.h.nd=function(a,b){this.D=a||0;this.player.N("progresssync",a,b)};
g.h.getCurrentTime=function(){return this.D};
g.h.getProgressState=function(){var a=u8(this.g),b=this.player.getVideoData();return{allowSeeking:g.R(g.W(this.player).experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.fc():!a.isAdPlaying()&&this.player.fc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.l+m8(a):a.l,isAtLiveHead:1>=(a.u?a.i+m8(a):a.i)-this.getCurrentTime(),loaded:a.F,seekableEnd:a.u?a.i+m8(a):a.i,seekableStart:0<a.o?a.o+
m8(a):a.o}};
g.h.nextVideo=function(){this.g&&this.g.nextVideo()};
g.h.gn=function(){this.g&&this.g.gn()};
g.h.CH=function(a){1==a&&(this.B=this.g?u8(this.g):null)};
g.h.SJ=function(){var a=Z8()?new t8(U8(),void 0):null;if(a){var b=this.l;this.loaded&&this.unload();this.g=a;this.B=null;b.key!=this.i.key&&(this.l=b,this.load())}else g.sf(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.B)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,o8(a)));this.player.N("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.yy=function(){this.A=[this.i].concat(Uqa());var a=V8()||this.i;j9(this,a);this.player.ma("onMdxReceiversChange")};
g.h.QJ=function(){var a=V8();j9(this,a)};
g.h.PJ=function(){this.l=V8()};
g.h.ac=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.A;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?i8():j9(this,b)),this.loaded?this.l:this.i;case "quickCast":return 2==this.A.length&&"cast-selector-receiver"==this.A[1].key?(b&&i8(),!0):!1}};
g.h.zs=function(){this.g.zs()};
g.h.Mb=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.ZU.remote=i9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:27:16 Apr 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:31 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.078
  exclusion.robots.policy: 0.064
  cdx.remote: 0.117
  esindex: 0.015
  LoadShardBlock: 145.536 (6)
  PetaboxLoader3.datanode: 147.62 (7)
  load_resource: 46.083
*/