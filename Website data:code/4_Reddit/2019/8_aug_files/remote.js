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

(function(g){var window=this;var lqa=function(a,b){return g.Ub(a,b)},j6=function(){},mqa=function(a){if(a.Cc&&"function"==typeof a.Cc)return a.Cc();
if(g.Da(a))return a.split("");if(g.La(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return g.Qb(a)},nqa=function(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);
else if(g.La(a)||g.Da(a))(0,g.y)(a,b,void 0);else{if(a.Qd&&"function"==typeof a.Qd)var c=a.Qd();else if(a.Cc&&"function"==typeof a.Cc)c=void 0;else if(g.La(a)||g.Da(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=g.Rb(a);d=mqa(a);e=d.length;for(var f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}},k6=function(a){g.tn(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^(0,g.D)()).toString(36));
return a},l6=function(a,b,c){g.Ka(c)||(c=[String(c)]);
g.yn(a.l,b,c)},m6=function(a){return(a=g.Ro(a))?new ActiveXObject(a):new XMLHttpRequest},n6=function(a,b){return b+" ["+a.Z+" "+a.F+" "+a.getStatus()+"]"},oqa=function(a){return"content-type"==a.toLowerCase()},o6=function(a){a.g&&a.J&&(a.g.ontimeout=null);
a.G&&(g.u.clearTimeout(a.G),a.G=null)},pqa=function(a){return g.Ld&&g.ld(9)&&g.Fa(a.timeout)&&g.Ca(a.ontimeout)},p6=function(a){a.R||(a.R=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))},q6=function(a,b){if(a.g){o6(a);
var c=a.g,d=a.T[0]?g.Ha:null;a.g=null;a.T=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){}}},r6=function(a,b){a.i=!1;
a.g&&(a.o=!0,a.g.abort(),a.o=!1);a.l=b;a.A=5;p6(a);q6(a)},s6=function(a){return a.g?a.g.readyState:0},t6=function(a){if(a.i&&"undefined"!=typeof g.fZ)if(a.T[1]&&4==s6(a)&&2==a.getStatus())n6(a,"Local request error detected and ignored");
else if(a.C&&4==s6(a))g.Fg(a.Cw,0,a);else if(a.dispatchEvent("readystatechange"),4==s6(a)){n6(a,"Request complete");a.i=!1;try{var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=g.Rg(1,String(a.F));if(!f&&g.u.self&&g.u.self.location){var k=g.u.self.location.protocol;f=k.substr(0,k.length-1)}e=!qqa.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");
else{a.A=6;try{var l=2<s6(a)?a.g.statusText:""}catch(m){l=""}a.l=l+" ["+a.getStatus()+"]";p6(a)}}finally{q6(a)}}},u6=function(a){g.Pf.call(this);
this.headers=new g.hn;this.N=a||null;this.i=!1;this.T=this.g=null;this.Z=this.F="";this.A=0;this.l="";this.o=this.ba=this.C=this.R=!1;this.B=0;this.G=null;this.Y="";this.J=this.U=!1},v6=function(a){try{return a.g?a.g.responseText:""}catch(b){return""}},rqa=function(a,b){var c=[];
g.Qk(b,function(d){try{var e=g.hp.prototype.i.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}g.Ca(e)?g.gp(e)&&c.push(d):c.push(d)},a);
return c},sqa=function(a,b){var c=rqa(a,b);
(0,g.y)(c,function(d){g.hp.prototype.remove.call(this,d)},a)},w6=function(a){if(a.jd){if(a.jd.locationOverrideToken)return{locationOverrideToken:a.jd.locationOverrideToken};
if(null!=a.jd.latitudeE7&&null!=a.jd.longitudeE7)return{latitudeE7:a.jd.latitudeE7,longitudeE7:a.jd.longitudeE7}}return null},tqa=function(a,b){g.$a(a,b)||a.push(b)},x6=function(a){var b=0,c;
for(c in a)b++;return b},y6=function(a,b){var c=b instanceof g.xc?b:g.Dc(b,/^data:image\//i.test(b));
a.src=g.yc(c)},uqa=function(a){try{return g.u.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},vqa=function(a,b,c,d){var e=new g.ln(null,void 0);
a&&g.mn(e,a);b&&g.nn(e,b);c&&g.on(e,c);d&&(e.i=d);return e},z6=function(a){if(g.u.JSON)try{return g.u.JSON.parse(a)}catch(b){}return uqa(a)},A6=function(){this.g=[];
this.i=[]},B6=function(a,b){g.mq[a]=!0;
var c=g.kq();c&&c.publish.apply(c,arguments);g.mq[a]=!1},C6=function(a){this.app=this.name=this.id="";
this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.l=!1;this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.hn;this.g=this.i="";a&&(this.id=a.id||a.name,this.name=a.name,this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",wqa(this,a.capabilities||""),xqa(this,a.experiments||""),this.i=a.remoteControllerUrl||"",this.g=a.localChannelEncryptionKey||
"")},wqa=function(a,b){a.capabilities.clear();
(0,g.Xd)(b.split(","),g.Qa(lqa,yqa)).forEach(function(c){a.capabilities.add(c)})},xqa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},D6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||""},E6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},F6=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid}},zqa=function(a){return new D6(a)},G6=function(a){return g.Ka(a)?(0,g.ge)(a,zqa):[]},H6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+(a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+"}":"null"},I6=function(a){return g.Ka(a)?"["+(0,g.ge)(a,H6).join(",")+"]":"null"},J6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},Aqa=function(a){return(0,g.ge)(a,function(b){return{key:b.id,
name:b.name}})},K6=function(a,b){return g.Xa(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},L6=function(a,b){return g.Xa(a,function(c){return E6(c,b)})},M6=function(a){try{var b=(0,g.Jt)(),c=(0,g.It)();
b&&b.remove(a);c&&c.remove(a)}catch(d){}},Bqa=function(){var a=(0,g.It)();
a&&sqa(a,a.g.rf(!0))},N6=function(){var a=g.Lt("yt-remote-connected-devices")||[];
g.qb(a);return a},Cqa=function(a){if(0==a.length)return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return(0,g.ge)(a,function(d,e){return 0==e?d:d.substring(c.length)})},O6=function(a){g.Kt("yt-remote-connected-devices",a,86400)},Q6=function(){if(P6)return P6;
var a=g.Lt("yt-remote-device-id");a||(a=J6(),g.Kt("yt-remote-device-id",a,31536E3));for(var b=N6(),c=1,d=a;g.$a(b,d);)c++,d=a+"#"+c;return P6=d},R6=function(){var a=N6(),b=Q6();
g.$a(a,b);g.Mt()&&g.sb(a,b);a=Cqa(a);if(0==a.length)try{g.Ks("remote_sid")}catch(c){}else try{g.Js("remote_sid",a.join(","),-1)}catch(c){}},S6=function(){return g.Lt("yt-remote-session-browser-channel")},T6=function(){return g.Lt("yt-remote-local-screens")||[]},U6=function(){g.Kt("yt-remote-lounge-token-expiration",!0,86400)},Dqa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=(0,g.ge)(T6(),function(d){return d.loungeToken}),c=(0,g.ge)(a,function(d){return d.loungeToken});
(0,g.lj)(c,function(d){return!g.$a(b,d)})&&U6();
g.Kt("yt-remote-local-screens",a,31536E3)},Eqa=function(a,b){g.Kt("yt-remote-session-browser-channel",a);
g.Kt("yt-remote-session-screen-id",b);var c=N6(),d=Q6();g.$a(c,d)||c.push(d);O6(c);R6()},V6=function(a){a||(M6("yt-remote-session-screen-id"),M6("yt-remote-session-video-id"));
R6();a=N6();g.cb(a,Q6());O6(a)},X6=function(){if(!W6){var a=g.rp();
a&&(W6=new g.bp(a))}return W6?!!W6.get("yt-remote-use-staging-server"):!1},Y6=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},Z6=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},a7=function(a){a.length?$6(a.shift(),function(){a7(a)}):b7()},Fqa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},$6=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);d.src=a;(document.head||document.documentElement).appendChild(d)},b7=function(){var a=Z6();
a&&a(!1,"No cast extension found")},c7=function(){if(Gqa){var a=2,b=Z6(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;$6("//web.archive.org/web/20190801015000/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",b7,c)}},Hqa=function(){c7();
var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);a7(["//web.archive.org/web/20190801015000/https://www.gstatic.com/eureka/clank/"+(a?parseInt(a[1],10):0)+"/cast_sender.js","//web.archive.org/web/20190801015000/https://www.gstatic.com/eureka/clank/cast_sender.js"])},d7=function(a,b,c){g.A.call(this);
this.B=null!=c?(0,g.x)(a,c):a;this.bd=b;this.A=(0,g.x)(this.KD,this);this.g=!1;this.i=0;this.l=this.Ba=null;this.o=[]},e7=function(){},f7=function(a,b,c,d){this.g=a;
this.l=b;this.C=c;this.B=d||1;this.o=45E3;this.da=new g.zn(this);this.i=new g.Eg;this.i.setInterval(250)},h7=function(a,b,c){a.di=1;
a.ag=k6(b.clone());a.xh=c;a.A=!0;g7(a,null)},i7=function(a,b,c,d,e){a.di=1;
a.ag=k6(b.clone());a.xh=null;a.A=c;e&&(a.uA=!1);g7(a,d)},g7=function(a,b){a.Ki=(0,g.D)();
j7(a);a.Fg=a.ag.clone();l6(a.Fg,"t",a.B);a.nl=0;a.uc=a.g.Pp(a.g.Vk()?b:null);0<a.zq&&(a.ho=new g.Il((0,g.x)(a.BB,a,a.uc),a.zq));a.da.ea(a.uc,"readystatechange",a.HM);var c=a.eh?g.bc(a.eh):{};a.xh?(a.No="POST",c["Content-Type"]="application/x-www-form-urlencoded",a.uc.send(a.Fg,a.No,a.xh,c)):(a.No="GET",a.uA&&!g.Nd&&(c.Connection="close"),a.uc.send(a.Fg,a.No,null,c));a.g.Ce(1)},Jqa=function(a,b,c){for(var d=!0;!a.Qg&&a.nl<c.length;){var e=Iqa(a,c);
if(e==k7){4==b&&(a.rg=4,l7(15),d=!1);break}else if(e==m7){a.rg=4;l7(16);d=!1;break}else n7(a,e)}4==b&&0==c.length&&(a.rg=1,l7(17),d=!1);a.Fe=a.Fe&&d;d||(o7(a),p7(a))},Iqa=function(a,b){var c=a.nl,d=b.indexOf("\n",c);
if(-1==d)return k7;c=Number(b.substring(c,d));if(isNaN(c))return m7;d+=1;if(d+c>b.length)return k7;var e=b.substr(d,c);a.nl=d+c;return e},Lqa=function(a,b){a.Ki=(0,g.D)();
j7(a);var c=b?window.location.hostname:"";a.Fg=a.ag.clone();g.tn(a.Fg,"DOMAIN",c);g.tn(a.Fg,"t",a.B);try{a.Je=new ActiveXObject("htmlfile")}catch(n){o7(a);a.rg=7;l7(22);p7(a);return}var d="<html><body>";if(b){for(var e="",f=0;f<c.length;f++){var k=c.charAt(f);if("<"==k)e+="\\x3c";else if(">"==k)e+="\\x3e";else{var l=k;if(l in q7)k=q7[l];else if(l in Kqa)k=q7[l]=Kqa[l];else{var m=l.charCodeAt(0);if(31<m&&127>m)k=l;else{if(256>m){if(k="\\x",16>m||256<m)k+="0"}else k="\\u",4096>m&&(k+="0");k+=m.toString(16).toUpperCase()}k=
q7[l]=k}e+=k}}d+='<script>document.domain="'+e+'"\x3c/script>'}c=g.Rc(g.qc("b/12014412"),d+"</body></html>");a.Je.open();a.Je.write(g.Mc(c));a.Je.close();a.Je.parentWindow.m=(0,g.x)(a.UL,a);a.Je.parentWindow.d=(0,g.x)(a.Cz,a,!0);a.Je.parentWindow.rpcClose=(0,g.x)(a.Cz,a,!1);c=a.Je.createElement("DIV");a.Je.parentWindow.document.body.appendChild(c);d=g.Cc(a.Fg.toString());d=g.Yc(g.zc(d));d=g.Rc(g.qc("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Sc(c,d);a.g.Ce(1)},j7=function(a){a.Et=(0,g.D)()+a.o;
Mqa(a,a.o)},Mqa=function(a,b){if(null!=a.aj)throw Error("WatchDog timer not null");
a.aj=r7((0,g.x)(a.eM,a),b)},s7=function(a){a.aj&&(g.u.clearTimeout(a.aj),a.aj=null)},p7=function(a){a.g.Aw()||a.Qg||a.g.Tn(a)},o7=function(a){s7(a);
g.pf(a.ho);a.ho=null;a.i.stop();g.Bn(a.da);if(a.uc){var b=a.uc;a.uc=null;b.abort();b.dispose()}a.Je&&(a.Je=null)},n7=function(a,b){try{a.g.wz(a,b),a.g.Ce(4)}catch(c){}},Oqa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;Nqa(a,b,function(k){k?c(!0):g.u.setTimeout(function(){Oqa(a,b,c,d,f)},f)})}},Nqa=function(a,b,c){var d=new Image;
d.onload=function(){try{t7(d),c(!0)}catch(e){}};
d.onerror=function(){try{t7(d),c(!1)}catch(e){}};
d.onabort=function(){try{t7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{t7(d),c(!1)}catch(e){}};
g.u.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
y6(d,a)},t7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},Pqa=function(a){this.g=a;
this.i=new e7},Qqa=function(a){var b=u7(a.g,a.mj,"/mail/images/cleardot.gif");
k6(b);Oqa(b.toString(),5E3,(0,g.x)(a.RC,a),3,2E3);a.Ce(1)},w7=function(a){var b=a.g.G;
if(null!=b)l7(5),b?(l7(11),v7(a.g,a,!1)):(l7(12),v7(a.g,a,!0));else if(a.Id=new f7(a,void 0,void 0,void 0),a.Id.eh=a.xq,b=a.g,b=u7(b,b.Vk()?a.Sj:null,a.yq),l7(5),!g.Ld||g.md(10))l6(b,"TYPE","xmlhttp"),i7(a.Id,b,!1,a.Sj,!1);else{l6(b,"TYPE","html");var c=a.Id;a=!!a.Sj;c.di=3;c.ag=k6(b.clone());Lqa(c,a)}},x7=function(a,b,c){this.g=1;
this.i=[];this.o=[];this.A=new e7;this.F=a||null;this.G=null!=b?b:null;this.B=c||!1},Rqa=function(a,b){this.g=a;
this.map=b;this.context=null},Sqa=function(a){g.rf.call(this,"statevent",a)},Tqa=function(a,b){g.rf.call(this,"timingevent",a);
this.size=b},Uqa=function(a){g.rf.call(this,"serverreachability",a)},Xqa=function(a){Vqa(a);
if(3==a.g){var b=a.zk++,c=a.pm.clone();g.tn(c,"SID",a.l);g.tn(c,"RID",b);g.tn(c,"TYPE","terminate");y7(a,c);b=new f7(a,a.l,b,void 0);b.di=2;b.ag=k6(c.clone());y6(new Image,b.ag.toString());b.Ki=(0,g.D)();j7(b)}Wqa(a)},Yqa=function(a){a.jD(1,0);
a.pm=u7(a,null,a.wq);z7(a)},Vqa=function(a){a.hg&&(a.hg.abort(),a.hg=null);
a.Ub&&(a.Ub.cancel(),a.Ub=null);a.sf&&(g.u.clearTimeout(a.sf),a.sf=null);A7(a);a.Fd&&(a.Fd.cancel(),a.Fd=null);a.pg&&(g.u.clearTimeout(a.pg),a.pg=null)},Zqa=function(a,b){if(0==a.g)throw Error("Invalid operation: sending map when state is closed");
a.i.push(new Rqa(a.iI++,b));2!=a.g&&3!=a.g||z7(a)},z7=function(a){a.Fd||a.pg||(a.pg=r7((0,g.x)(a.Bz,a),0),a.Wh=0)},ara=function(a,b){if(1==a.g){if(!b){a.zk=Math.floor(1E5*Math.random());
var c=a.zk++,d=new f7(a,"",c,void 0);d.eh=null;var e=B7(a),f=a.pm.clone();g.tn(f,"RID",c);g.tn(f,"CVER","1");y7(a,f);h7(d,f,e);a.Fd=d;a.g=2}}else 3==a.g&&(b?$qa(a,b):0==a.i.length||a.Fd||$qa(a))},$qa=function(a,b){if(b)if(6<a.Rg){a.i=a.o.concat(a.i);
a.o.length=0;var c=a.zk-1;var d=B7(a)}else c=b.C,d=b.xh;else c=a.zk++,d=B7(a);var e=a.pm.clone();g.tn(e,"SID",a.l);g.tn(e,"RID",c);g.tn(e,"AID",a.oi);y7(a,e);c=new f7(a,a.l,c,a.Wh+1);c.eh=null;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Fd=c;h7(c,e,d)},y7=function(a,b){if(a.Xc){var c=a.Xc.Yv();
c&&g.Kb(c,function(d,e){g.tn(b,e,d)})}},B7=function(a){var b=Math.min(a.i.length,1E3),c=["count="+b];
if(6<a.Rg&&0<b){var d=a.i[0].g;c.push("ofs="+d)}else d=0;for(var e=0;e<b;e++){var f=a.i[e].g,k=a.i[e].map;f=6>=a.Rg?e:f-d;try{g.Kb(k,function(l,m){c.push("req"+f+"_"+m+"="+encodeURIComponent(l))})}catch(l){c.push("req"+f+"_type="+encodeURIComponent("_badmap"))}}a.o=a.o.concat(a.i.splice(0,b));
return c.join("&")},bra=function(a){a.Ub||a.sf||(a.C=1,a.sf=r7((0,g.x)(a.Az,a),0),a.Ph=0)},C7=function(a){if(a.Ub||a.sf||3<=a.Ph)return!1;
a.C++;a.sf=r7((0,g.x)(a.Az,a),cra(a,a.Ph));a.Ph++;return!0},v7=function(a,b,c){a.Lo=c;
a.Oe=b.Cf;a.B||Yqa(a)},A7=function(a){null!=a.Vg&&(g.u.clearTimeout(a.Vg),a.Vg=null)},cra=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},D7=function(a,b){if(2==b||9==b){var c=null;
a.Xc&&(c=null);var d=(0,g.x)(a.nN,a);c||(c=new g.ln("//web.archive.org/web/20190801015000/https://www.google.com/images/cleardot.gif"),k6(c));Nqa(c.toString(),1E4,d)}else l7(2);dra(a,b)},dra=function(a,b){a.g=0;
a.Xc&&a.Xc.Yu(b);Wqa(a);Vqa(a)},Wqa=function(a){a.g=0;
a.Oe=-1;if(a.Xc)if(0==a.o.length&&0==a.i.length)a.Xc.Bp();else{g.gb(a.o);var b=g.gb(a.i);a.o.length=0;a.i.length=0;a.Xc.Bp(b)}},u7=function(a,b,c){var d=g.un(c);
if(""!=d.g)b&&g.nn(d,b+"."+d.g),g.on(d,d.A);else{var e=window.location;d=vqa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Aj&&g.Kb(a.Aj,function(f,k){g.tn(d,k,f)});
g.tn(d,"VER",a.Rg);y7(a,d);return d},r7=function(a,b){if(!g.Ma(a))throw Error("Fn must not be null and must be a function");
return g.u.setTimeout(function(){a()},b)},l7=function(a){E7.dispatchEvent(new Sqa(E7,a))},era=function(){},fra=function(a,b){this.action=a;
this.params=b||{}},F7=function(a,b){g.A.call(this);
this.g=new g.J(this.ML,0,this);g.B(this,this.g);this.bd=5E3;this.i=0;if(g.Ma(a))b&&(a=(0,g.x)(a,b));else if(a&&g.Ma(a.handleEvent))a=(0,g.x)(a.handleEvent,a);else throw Error("Invalid listener argument");this.l=a},G7=function(a,b,c){this.I=a;
this.B=b;this.l=new g.ap;this.i=new F7(this.SM,this);this.g=null;this.jb=!1;this.A=null;this.G="";this.F=this.o=0;this.C=[];this.J=c||!1},gra=function(a){return{firstTestResults:[""],
secondTestResults:!a.g.Lo,sessionId:a.g.l,arrayId:a.g.oi}},hra=function(a,b){a.F=b||0;
a.i.stop();a.g&&(3==a.g.g&&ara(a.g),Xqa(a.g));a.F=0},H7=function(a){return!!a.g&&3==a.g.g},ira=function(a,b){(a.B.loungeIdToken=b)||a.i.stop()},I7=function(a){this.port=this.domain="";
this.g="/api/lounge";this.i=!0;a=a||document.location.href;var b=Number(g.Rg(4,a))||"";b&&(this.port=":"+b);this.domain=g.Sg(a)||"";a=g.Ib;0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.Hb(a,"10.0")&&(this.i=!1))},J7=function(a,b){var c=a.g;
if(g.Ca(void 0)?0:a.i)c="https://"+a.domain+a.port+a.g;return g.ah(c+b,{})},K7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Qa(a.o,d,!0),onError:g.Qa(a.l,e),pe:g.Qa(a.A,e)};c&&(a.wb=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.er(b,a)},mra=function(){var a=jra;
kra();L7.push(a);lra(L7)},M7=function(a,b){kra();
var c=L7,d=nra(a,String(b));0==c.length?ora(d):(lra(c),(0,g.y)(c,function(e){e(d)}))},kra=function(){L7||(L7=g.v("yt.mdx.remote.debug.handlers_")||[],g.Ga("yt.mdx.remote.debug.handlers_",L7,void 0))},ora=function(a){var b=(N7+1)%50;
N7=b;O7[b]=a;P7||(P7=49==b)},lra=function(a){var b=O7;
if(b[0]){var c=N7,d=P7?c:-1;do{d=(d+1)%50;var e=b[d];(0,g.y)(a,function(f){f(e)})}while(d!=c);
O7=Array(50);N7=-1;P7=!1}},nra=function(a,b){var c=((0,g.D)()-pra)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},Q7=function(a){g.N.call(this);
this.C=a;this.g=[]},qra=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c){var d=c.name;c.id=b.id||c.id;c.name=b.name;c.token=b.token;c.uuid=b.uuid||c.uuid;return c.name!=d}a.g.push(b);return!0},rra=function(a,b){var c=a.g.length!=b.length;
a.g=(0,g.Xd)(a.g,function(f){return!!K6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=qra(a,b[d])||c;return c},sra=function(a,b){var c=a.g.length;
a.g=(0,g.Xd)(a.g,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.g.length<c},R7=function(a,b,c,d){g.N.call(this);
this.B=a;this.A=b;this.l=c;this.o=d;this.i=0;this.g=null;this.Ba=NaN},T7=function(a){Q7.call(this,"LocalScreenService");
this.l=a;this.i=NaN;S7(this);this.info("Initializing with "+I6(this.g))},tra=function(a){if(a.g.length){var b=(0,g.ge)(a.g,function(d){return d.id}),c=J7(a.l,"/pairing/get_lounge_token_batch");
K7(a.l,c,{screen_ids:b.join(",")},(0,g.x)(a.UD,a),(0,g.x)(a.TD,a))}},S7=function(a){var b=G6(T6());
b=(0,g.Xd)(b,function(c){return!c.uuid});
return rra(a,b)},U7=function(a,b){Dqa((0,g.ge)(a.g,F6));
b&&U6()},W7=function(a,b){g.N.call(this);
this.B=b;var c=g.Lt("yt-remote-online-screen-ids")||"";c=c?c.split(","):[];for(var d={},e=this.B(),f=0,k=e.length;f<k;++f){var l=e[f].id;d[l]=g.$a(c,l)}this.g=d;this.A=a;this.l=this.o=NaN;this.i=null;V7("Initialized with "+g.Jg(this.g))},ura=function(a,b,c){var d=J7(a.A,"/pairing/get_screen_availability");
K7(a.A,d,{lounge_token:b.token},(0,g.x)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.x)(function(){c(!1)},a))},X7=function(a,b){a:if(x6(b)!=x6(a.g))var c=!1;
else{c=g.Rb(b);for(var d=0,e=c.length;d<e;++d)if(!a.g[c[d]]){c=!1;break a}c=!0}c||(V7("Updated online screens: "+g.Jg(a.g)),a.g=b,a.O("screenChange"));vra(a)},Y7=function(a){isNaN(a.l)||g.jq(a.l);
a.l=g.hq((0,g.x)(a.Is,a),0<a.o&&a.o<(0,g.D)()?2E4:1E4)},V7=function(a){M7("OnlineScreenService",a)},wra=function(a){var b={};
(0,g.y)(a.B(),function(c){c.token?b[c.token]=c.id:this.Jb("Requesting availability of screen w/o lounge token.")});
return b},vra=function(a){a=g.Rb(g.Lb(a.g,function(b){return b}));
g.qb(a);a.length?g.Kt("yt-remote-online-screen-ids",a.join(","),60):M6("yt-remote-online-screen-ids")},Z7=function(a){Q7.call(this,"ScreenService");
this.B=a;this.i=this.l=null;this.o=[];this.A={};xra(this)},zra=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.A[b]);var k=a.Sd();if(k=(c?L6(k,c):null)||L6(k,b)){k.uuid=b;var l=$7(a,k);ura(a.i,l,function(m){e(m?l:null)})}else c?yra(a,c,(0,g.x)(function(m){var n=$7(this,new D6({name:d,
screenId:c,loungeToken:m,dialId:b||""}));ura(this.i,n,function(p){e(p?n:null)})},a),f):e(null)},Ara=function(a,b){for(var c=0,d=a.g.length;c<d;++c)if(a.g[c].name==b)return a.g[c];
return null},yra=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={wb:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){var l=k&&k.screens||[];l[0]&&l[0].screenId==b?c(l[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.er(J7(a.B,"/pairing/get_lounge_token_batch"),e)},Bra=function(a){a.g=a.l.Sd();
var b=a.A,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.g.length;b<d;++b){var e=a.g[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+I6(a.g))},xra=function(a){a8(a);
a.l=new T7(a.B);a.l.subscribe("screenChange",(0,g.x)(a.cE,a));Bra(a);a.o=G6(g.Lt("yt-remote-automatic-screen-cache")||[]);a8(a);a.info("Initializing automatic screens: "+I6(a.o));a.i=new W7(a.B,(0,g.x)(a.Sd,a,!0));a.i.subscribe("screenChange",(0,g.x)(function(){this.O("onlineScreenChange")},a))},$7=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=L6(a.o,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.o.push(b),g.Kt("yt-remote-automatic-screen-cache",(0,g.ge)(a.o,F6)));a8(a);a.A[b.uuid]=b.id;g.Kt("yt-remote-device-id-map",a.A,31536E3);return b},a8=function(a){a.A=g.Lt("yt-remote-device-id-map")||{}},b8=function(a,b,c){g.N.call(this);
this.T=c;this.G=a;this.i=b;this.l=null},c8=function(a,b){M7(a.T,b)},d8=function(a,b){b8.call(this,a,b,"CastSession");
this.g=null;this.o=0;this.B=(0,g.x)(this.TN,this);this.A=(0,g.x)(this.pM,this);this.o=g.hq((0,g.x)(function(){Cra(this,null)},this),12E4)},Dra=function(a){a.info("sendYoutubeMessage_: getMdxSessionStatus "+g.Jg(void 0));
var b={type:"getMdxSessionStatus"};a.g?a.g.sendMessage("urn:x-cast:com.google.youtube.mdx",b,g.Ha,(0,g.x)(function(){c8(this,"Failed to send message: getMdxSessionStatus.")},a)):c8(a,"Sending yt message without session: "+g.Jg(b))},Cra=function(a,b){g.jq(a.o);
if(b){if(a.info("onConnectedScreenId_: Received screenId: "+b),!a.l||a.l.id!=b){var c=(0,g.x)(a.Vn,a),d=(0,g.x)(a.Vd,a);a.qw(b,c,d,5)}}else a.Vd(Error("Waiting for session status timed out."))},e8=function(a,b,c){b8.call(this,a,b,"DialSession");
this.o=this.F=null;this.I="";this.N=c;this.A=null;this.C=g.Ha;this.B=NaN;this.J=(0,g.x)(this.WN,this);this.g=g.Ha},Era=function(a){a.g=a.G.GB(a.I,a.i.label,a.i.friendlyName,(0,g.x)(function(b){this.g=g.Ha;
this.Vn(b)},a),(0,g.x)(function(b){this.g=g.Ha;
this.Vd(b)},a))},Fra=function(a){var b={};
b.pairingCode=a.I;b.theme=a.N;if(a.A){var c=a.A.currentTime||0;b.v=a.A.videoId;b.t=c}X6()&&(b.env_useStageMdx=1);return g.Zg(b)},f8=function(a,b){b8.call(this,a,b,"ManualSession");
this.g=g.hq((0,g.x)(this.ri,this,null),150)},g8=function(a,b,c,d){g.N.call(this);
this.i=a;this.C=b||"233637DE";this.B=c||"cl";this.F=d||!1;this.g=null;this.A=!1;this.l=[];this.o=(0,g.x)(this.UK,this)},Gra=function(a,b){return b?g.Xa(a.l,function(c){return E6(b,c.label)},a):null},h8=function(a){M7("Controller",a)},jra=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},i8=function(a){return a.A||!!a.l.length||!!a.g},j8=function(a,b,c){b!=a.g&&(g.pf(a.g),(a.g=b)?(c?a.O("yt-remote-cast2-receiver-resumed",b.i):a.O("yt-remote-cast2-receiver-selected",
b.i),b.subscribe("sessionScreen",(0,g.x)(a.zz,a,b)),b.l?a.O("yt-remote-cast2-session-change",b.l):c&&a.g.ri(null)):a.O("yt-remote-cast2-session-change",null))},Hra=function(a){var b=a.i.FB(),c=a.g&&a.g.i;
a=(0,g.ge)(b,function(d){c&&E6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=Gra(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Nra=function(a,b,c,d,e,f,k){Ira()?Jra(b,e,f,k)&&(l8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?Kra(a,c):(window.__onGCastApiAvailable=function(l,m){l?Kra(a,c):(m8("Failed to load cast API: "+m),n8(!1),l8(!1),M6("yt-remote-cast-available"),M6("yt-remote-cast-receiver"),Lra(),c(!1))},d?g.uq("https://web.archive.org/web/20190801015000/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):
0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?Hqa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?b7():(c7(),a7(Mra.map(Fqa))))):k8("Cannot initialize because not running Chrome")},Lra=function(){k8("dispose");
var a=o8();a&&a.dispose();g.Ga("yt.mdx.remote.cloudview.instance_",null,void 0);Ora(!1);g.pq(p8);p8.length=0},q8=function(){return!!g.Lt("yt-remote-cast-installed")},Pra=function(){var a=g.Lt("yt-remote-cast-receiver");
return a?a.friendlyName:null},Qra=function(){k8("clearCurrentReceiver");
M6("yt-remote-cast-receiver")},Rra=function(){return q8()?o8()?o8().getCastSession():(m8("getCastSelector: Cast is not initialized."),null):(m8("getCastSelector: Cast API is not installed!"),null)},s8=function(){q8()?o8()?r8()?(k8("Requesting cast selector."),o8().requestSession()):(k8("Wait for cast API to be ready to request the session."),p8.push(g.oq("yt-remote-cast2-api-ready",s8))):m8("requestCastSelector: Cast is not initialized."):m8("requestCastSelector: Cast API is not installed!")},t8=
function(a,b){r8()?o8().setConnectedScreenStatus(a,b):m8("setConnectedScreenStatus called before ready.")},Ira=function(){var a=0<=g.Ib.search(/ (CrMo|Chrome|CriOS)\//);
return g.tx||a},Sra=function(a,b){o8().init(a,b)},Jra=function(a,b,c,d){var e=!1;
o8()||(a=new g8(a,b,c,d),a.subscribe("yt-remote-cast2-availability-change",function(f){g.Kt("yt-remote-cast-available",f);B6("yt-remote-cast2-availability-change",f)}),a.subscribe("yt-remote-cast2-receiver-selected",function(f){k8("onReceiverSelected: "+f.friendlyName);
g.Kt("yt-remote-cast-receiver",f);B6("yt-remote-cast2-receiver-selected",f)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(f){k8("onReceiverResumed: "+f.friendlyName);
g.Kt("yt-remote-cast-receiver",f)}),a.subscribe("yt-remote-cast2-session-change",function(f){k8("onSessionChange: "+H6(f));
f||M6("yt-remote-cast-receiver");B6("yt-remote-cast2-session-change",f)}),g.Ga("yt.mdx.remote.cloudview.instance_",a,void 0),e=!0);
k8("cloudview.createSingleton_: "+e);return e},o8=function(){return g.v("yt.mdx.remote.cloudview.instance_")},Kra=function(a,b){n8(!0);
l8(!1);Sra(a,function(c){c?(Ora(!0),g.rq("yt-remote-cast2-api-ready")):(m8("Failed to initialize cast API."),n8(!1),M6("yt-remote-cast-available"),M6("yt-remote-cast-receiver"),Lra());b(c)})},k8=function(a){M7("cloudview",a)},m8=function(a){M7("cloudview",a)},n8=function(a){k8("setCastInstalled_ "+a);
g.Kt("yt-remote-cast-installed",a)},r8=function(){return!!g.v("yt.mdx.remote.cloudview.apiReady_")},Ora=function(a){k8("setApiReady_ "+a);
g.Ga("yt.mdx.remote.cloudview.apiReady_",a,void 0)},l8=function(a){g.Ga("yt.mdx.remote.cloudview.initializing_",a,void 0)},u8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.B=this.C=0;this.g=null;this.hasNext=this.Pe=!1;this.G=this.F=this.i=this.o=0;this.l=NaN;this.A=!1;this.reset(a)},v8=function(a){a.audioTrackId=null;
a.g=null;a.playerState=-1;a.Pe=!1;a.hasNext=!1;a.C=0;a.B=(0,g.D)();a.o=0;a.i=0;a.F=0;a.G=0;a.l=NaN;a.A=!1},w8=function(a){return 1==a.playerState?((0,g.D)()-a.B)/1E3:0},x8=function(a,b){a.C=b;
a.B=(0,g.D)()},y8=function(a){switch(a.playerState){case 1:case 1081:return((0,g.D)()-a.B)/1E3+a.C;
case -1E3:return 0}return a.C},z8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&v8(a)},A8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.cc(a.g);b.hasPrevious=a.Pe;b.hasNext=a.hasNext;b.playerTime=a.C;b.playerTimeAt=a.B;b.seekableStart=a.o;b.seekableEnd=a.i;b.duration=a.F;b.loadedTime=a.G;b.liveIngestionTime=a.l;return b},C8=function(a,b){g.N.call(this);
this.g=0;this.o=a;this.B=[];this.A=new A6;this.l=this.i=null;this.G=(0,g.x)(this.SI,this);this.C=(0,g.x)(this.Ck,this);this.F=(0,g.x)(this.RI,this);this.I=(0,g.x)(this.fJ,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.Ht,this),Tra(this))):c=3;0!=c&&(b?this.Ht(c):g.hq((0,g.x)(function(){this.Ht(c)},this),0));
var d=Rra();d&&B8(this,d);this.subscribe("yt-remote-cast2-session-change",this.I)},D8=function(a){return new u8(a.o.getPlayerContextData())},Tra=function(a){(0,g.y)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "),function(b){this.B.push(this.o.subscribe(b,g.Qa(this.RK,b),this))},a)},Ura=function(a){(0,g.y)(a.B,function(b){this.o.unsubscribeByKey(b)},a);
a.B.length=0},E8=function(a,b){var c=a.A;
50>c.g.length+c.i.length&&a.A.i.push(b)},G8=function(a,b,c){var d=D8(a);
x8(d,c);-1E3!=d.playerState&&(d.playerState=b);F8(a,d)},H8=function(a,b,c){a.o.sendMessage(b,c)},F8=function(a,b){Ura(a);
a.o.setPlayerContextData(A8(b));Tra(a)},B8=function(a,b){a.l&&(a.l.removeUpdateListener(a.G),a.l.removeMediaListener(a.C),a.Ck(null));
a.l=b;a.l&&(M7("CP","Setting cast session: "+a.l.sessionId),a.l.addUpdateListener(a.G),a.l.addMediaListener(a.C),a.l.media.length&&a.Ck(a.l.media[0]))},Vra=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=D8(a);b.contentId!=d.videoId&&M7("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;x8(d,a.i.getEstimatedTime());F8(a,d)}else M7("CP","No cast media video. Ignoring state update.")},I8=function(a,b,c){return(0,g.x)(function(d){this.Jb("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.Jb("Retrying "+b+" using MDx browser channel."),H8(this,b,c))},a)},J8=function(a,b,c){g.N.call(this);
this.A=NaN;this.J=!1;this.F=this.C=this.G=this.I=NaN;this.T=[];this.o=this.B=this.l=this.Qa=this.g=null;this.R=a;this.T.push(g.ns(window,"beforeunload",(0,g.x)(this.ND,this)));this.i=[];this.Qa=new u8;this.N=b.id;this.g=Wra(this,c);this.g.subscribe("handlerOpened",this.WI,this);this.g.subscribe("handlerClosed",this.TI,this);this.g.subscribe("handlerError",this.UI,this);this.g.subscribe("handlerMessage",this.VI,this);ira(this.g,b.token);this.subscribe("remoteQueueChange",function(){var d=this.Qa.videoId;
g.Mt()&&g.Kt("yt-remote-session-video-id",d)},this)},K8=function(a){M7("conn",a)},Wra=function(a,b){return new G7(J7(a.R,"/bc"),b)},L8=function(a,b){a.O("proxyStateChange",b)},Xra=function(a){a.A=g.hq((0,g.x)(function(){K8("Connecting timeout");
this.Th(1)},a),2E4)},M8=function(a){g.jq(a.A);
a.A=NaN},N8=function(a){g.jq(a.I);
a.I=NaN},Yra=function(a){O8(a);
a.G=g.hq((0,g.x)(function(){P8(this,"getNowPlaying")},a),2E4)},O8=function(a){g.jq(a.G);
a.G=NaN},$ra=function(a,b){b&&(M8(a),N8(a));
b==(H7(a.g)&&isNaN(a.A))?b&&(L8(a,1),P8(a,"getSubtitlesTrack")):b?(a.ow()&&a.Qa.reset(),L8(a,1),P8(a,"getNowPlaying"),Zra(a)):a.Th(1)},asa=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.Qa.videoId&&(g.Xb(b.params)?a.Qa.g=null:a.Qa.g=b.params,a.O("remotePlayerChange"))},bsa=function(a,b){var c=b.params.videoId||b.params.video_id,d=parseInt(b.params.currentIndex,10);
a.Qa.listId=b.params.listId||a.Qa.listId;z8(a.Qa,c,d);a.O("remoteQueueChange")},dsa=function(a,b){b.params=b.params||{};
bsa(a,b);csa(a,b);a.O("autoplayDismissed")},csa=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
x8(a.Qa,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.Qa.playerState&&(c=-1E3);a.Qa.playerState=c;c=Number(b.params.loadedTime);a.Qa.G=isNaN(c)?0:c;c=Number(b.params.duration);a.Qa.F=isNaN(c)?0:c;c=a.Qa;var d=Number(b.params.liveIngestionTime);c.l=d;c.A=isNaN(d)?!1:!0;c=a.Qa;d=Number(b.params.seekableStartTime);var e=Number(b.params.seekableEndTime);c.o=isNaN(d)?0:d;c.i=isNaN(e)?0:e;1==a.Qa.playerState?Yra(a):O8(a);a.O("remotePlayerChange")},esa=function(a,b){if(-1E3!=
a.Qa.playerState){var c=1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.Qa.playerState=c;c=parseInt(b.params.currentTime,10);x8(a.Qa,isNaN(c)?0:c);a.O("remotePlayerChange")}},fsa=function(a,b){var c="true"==b.params.muted;
a.Qa.volume=parseInt(b.params.volume,10);a.Qa.muted=c;a.O("remotePlayerChange")},gsa=function(a,b){a.B=b.params.videoId;
a.O("nowAutoplaying",parseInt(b.params.timeout,10))},hsa=function(a,b){var c="true"==b.params.hasNext;
a.Qa.Pe="true"==b.params.hasPrevious;a.Qa.hasNext=c;a.O("previousNextChange")},Zra=function(a){g.jq(a.F);
a.F=g.hq((0,g.x)(a.Th,a,1),864E5)},P8=function(a,b,c){c?K8("Sending: action="+b+", params="+g.Jg(c)):K8("Sending: action="+b);
a.g.sendMessage(b,c)},Q8=function(a){Q7.call(this,"ScreenServiceProxy");
this.Zc=a;this.i=[];this.i.push(this.Zc.$_s("screenChange",(0,g.x)(this.RN,this)));this.i.push(this.Zc.$_s("onlineScreenChange",(0,g.x)(this.wK,this)))},msa=function(a){var b={device:"Desktop",
app:"youtube-desktop"};b=g.$p("MDX_CONFIG")||b;Bqa();R6();R8||(R8=new I7(b?b.loungeApiHost:void 0),X6()&&(R8.g="/api/loungedev"));S8||(S8=g.v("yt.mdx.remote.deferredProxies_")||[],g.Ga("yt.mdx.remote.deferredProxies_",S8,void 0));isa();var c=T8();if(!c){var d=new Z7(R8);g.Ga("yt.mdx.remote.screenService_",d,void 0);c=T8();var e=!1,f=void 0,k=void 0,l=!1;b&&(e=!!b.loadCastApiSetupScript,f=b.appId,k=b.theme,l=!!b.disableDial);Nra(a,d,function(m){m?U8()&&t8(U8(),"YouTube TV"):d.subscribe("onlineScreenChange",
function(){B6("yt-remote-receiver-availability-change")})},e,f,k,l)}b&&!g.v("yt.mdx.remote.initialized_")&&(g.Ga("yt.mdx.remote.initialized_",!0,void 0),V8("Initializing: "+g.Jg(b)),W8.push(g.oq("yt-remote-cast2-availability-change",function(){B6("yt-remote-receiver-availability-change")})),W8.push(g.oq("yt-remote-cast2-receiver-selected",function(){X8(null);
B6("yt-remote-auto-connect","cast-selector-receiver")})),W8.push(g.oq("yt-remote-cast2-receiver-resumed",function(){B6("yt-remote-receiver-resumed","cast-selector-receiver")})),W8.push(g.oq("yt-remote-cast2-session-change",jsa)),W8.push(g.oq("yt-remote-connection-change",function(m){m?t8(U8(),"YouTube TV"):Y8()||(t8(null,null),Qra())})),a=Z8(),b.isAuto&&(a.id+="#dial"),g.Wq("desktop_enable_autoplay")&&(a.capabilities=["atp"]),a.name=b.device,a.app=b.app,(k=b.theme)&&(a.theme=k),V8(" -- with channel params: "+
g.Jg(a)),ksa(a),c.start(),U8()||lsa())},osa=function(){var a=nsa();
q8()&&g.Lt("yt-remote-cast-available")&&a.push({key:"cast-selector-receiver",name:"Cast..."});return a},nsa=function(){var a=T8().Zc.$_gos();
var b=$8();b&&a9()&&(K6(a,b)||a.push(b));return Aqa(a)},b9=function(){var a=psa();
!a&&q8()&&Pra()&&(a={key:"cast-selector-receiver",name:Pra()});return a},psa=function(){var a=nsa(),b=$8();
b||(b=Y8());return g.Xa(a,function(c){return b&&E6(b,c.key)?!0:!1})},$8=function(){var a=U8();
if(!a)return null;var b=T8().Sd();return L6(b,a)},jsa=function(a){V8("remote.onCastSessionChange_: "+H6(a));
if(a){var b=$8();b&&b.id==a.id?t8(b.id,"YouTube TV"):(b&&c9(),d9(a,1))}else a9()&&c9()},c9=function(){r8()?o8().stopSession():m8("stopSession called before API ready.");
var a=a9();a&&(a.disconnect(1),e9(null))},f9=function(){var a=a9();
return!!a&&3!=a.getProxyState()},V8=function(a){M7("remote",a)},T8=function(){if(!g9){var a=g.v("yt.mdx.remote.screenService_");
g9=a?new Q8(a):null}return g9},U8=function(){return g.v("yt.mdx.remote.currentScreenId_")},qsa=function(a){g.Ga("yt.mdx.remote.currentScreenId_",a,void 0)},rsa=function(){return g.v("yt.mdx.remote.connectData_")},X8=function(a){g.Ga("yt.mdx.remote.connectData_",a,void 0)},a9=function(){return g.v("yt.mdx.remote.connection_")},e9=function(a){var b=a9();
X8(null);a||qsa("");g.Ga("yt.mdx.remote.connection_",a,void 0);S8&&((0,g.y)(S8,function(c){c(a)}),S8.length=0);
b&&!a?B6("yt-remote-connection-change",!1):!b&&a&&B6("yt-remote-connection-change",!0)},Y8=function(){var a=g.Mt();
if(!a)return null;var b=T8().Sd();return L6(b,a)},d9=function(a,b){$8()&&$8();
if(h9)i9=a;else{qsa(a.id);var c=new J8(R8,a,Z8());c.connect(b,rsa());c.subscribe("beforeDisconnect",function(d){B6("yt-remote-before-disconnect",d)});
c.subscribe("beforeDispose",function(){a9()&&e9(null)});
e9(c)}},lsa=function(){var a=Y8();
a?(V8("Resume connection to: "+H6(a)),d9(a,0)):(V6(),Qra(),V8("Skipping connecting because no session screen found."))},isa=function(){var a=Z8();
if(g.Xb(a)){a=Q6();var b=g.Lt("yt-remote-session-name")||"",c=g.Lt("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ga("yt.mdx.remote.channelParams_",a,void 0)}},Z8=function(){return g.v("yt.mdx.remote.channelParams_")||{}},ksa=function(a){a?(g.Kt("yt-remote-session-app",a.app),g.Kt("yt-remote-session-name",a.name)):(M6("yt-remote-session-app"),M6("yt-remote-session-name"));
g.Ga("yt.mdx.remote.channelParams_",a,void 0)},j9=function(a,b,c){g.A.call(this);
this.A=a;this.i=b;this.l=new g.Xs(this);g.B(this,this.l);this.l.L(b,"onCaptionsTrackListChanged",this.RJ);this.l.L(b,"captionschanged",this.QI);this.l.L(b,"captionssettingschanged",this.SA);this.l.L(b,"videoplayerreset",this.Wn);this.l.L(b,"mdxautoplaycancel",this.QC);this.R=this.l.L(b,"onVolumeChange",this.iz);this.F=!1;this.g=c;c.subscribe("proxyStateChange",this.vz,this);c.subscribe("remotePlayerChange",this.Ek,this);c.subscribe("remoteQueueChange",this.Wn,this);c.subscribe("autoplayUpNext",this.Xy,
this);c.subscribe("previousNextChange",this.rz,this);c.subscribe("nowAutoplaying",this.nz,this);c.subscribe("autoplayDismissed",this.Wy,this);this.suggestion=null;this.G=new g.UC(64);this.o=new g.J(this.QA,500,this);g.B(this,this.o);this.B=new g.J(this.RA,1E3,this);g.B(this,this.B);this.J=new d7(this.wN,0,this);g.B(this,this.J);this.C={};this.T=new g.J(this.tB,1E3,this);g.B(this,this.T);this.I=new g.Il(this.mG,1E3,this);g.B(this,this.I);this.N=g.Ha;this.SA();this.Wn();this.Ek()},k9=function(a,b){a.A.Pc(b,
a.i.getVideoData().lengthSeconds)},ssa=function(a){k9(a,0);
a.o.stop();l9(a,new g.UC(64))},n9=function(a,b){if(m9(a)&&!a.F){var c=null;
b&&(c={style:a.i.getSubtitlesUserSettings()},g.ec(c,b));a.g.HA(a.i.getVideoData(1).videoId,c);a.C=D8(a.g).g}},o9=function(a,b){var c=a.i.getPlaylist();
if(c){var d=c.Ua;var e=c.listId.toString()}c=a.i.getVideoData(1);a.g.playVideo(c.videoId,b,d,e,c.playerParams,c.Re,w6(c));l9(a,new g.UC(1))},tsa=function(a,b){if(b){var c=a.i.getOption("captions","tracklist",{sR:1});
c&&c.length?(a.i.setOption("captions","track",b),a.F=!1):(a.i.loadModule("captions"),a.F=!0)}else a.i.setOption("captions","track",{})},m9=function(a){return D8(a.g).videoId==a.i.getVideoData(1).videoId},l9=function(a,b){a.B.stop();
var c=a.G;if(!g.$C(c,b)){var d=g.T(b,2);d!=g.T(a.G,2)&&g.UK(a.i,d);a.G=b;usa(a.A,c,b)}},p9=function(){g.V.call(this,{D:"div",
H:"ytp-mdx-popup-dialog",M:{role:"dialog"},K:[{D:"div",H:"ytp-mdx-popup-dialog-inner-content",K:[{D:"div",H:"ytp-mdx-popup-title",W:"You're signed out"},{D:"div",H:"ytp-mdx-popup-description",W:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",H:"ytp-mdx-privacy-popup-buttons",K:[{D:"button",X:["ytp-button","ytp-mdx-privacy-popup-cancel"],W:"Cancel"},{D:"button",X:["ytp-button","ytp-mdx-privacy-popup-confirm"],
W:"Confirm"}]}]}]});this.l=new g.OQ(this,250);g.B(this,this.l);this.C=this.i["ytp-mdx-privacy-popup-cancel"];this.L(this.C,"click",this.o);this.A=this.i["ytp-mdx-privacy-popup-confirm"];this.L(this.A,"click",this.B)},q9=function(a){g.V.call(this,{D:"div",
H:"ytp-remote",K:[{D:"div",H:"ytp-remote-display-status",K:[{D:"div",H:"ytp-remote-display-status-icon",K:[g.cQ()]},{D:"div",H:"ytp-remote-display-status-text",W:"{{statustext}}"}]}]});this.l=new g.OQ(this,250);g.B(this,this.l);this.o=a;this.L(a,"presentingplayerstatechange",this.A);vsa(this,g.QK(a))},vsa=function(a,b){if(3==a.o.getPresentingPlayerType()){var c={RECEIVER_NAME:a.o.getOption("remote","currentReceiver").name};
c=g.T(b,128)?g.bO("Error on $RECEIVER_NAME",c):g.aD(b)||g.T(b,4)?g.bO("Playing on $RECEIVER_NAME",c):g.bO("Connected to $RECEIVER_NAME",c);a.updateValue("statustext",c);a.l.show()}else a.l.hide()},r9=function(a,b){g.zU.call(this,"Play on",0,a,b);
this.l=a;this.C={};this.L(a,"onMdxReceiversChange",this.J);this.L(a,"presentingplayerstatechange",this.J);this.J()},s9=function(a){g.uL.call(this,a);
this.i={key:J6(),name:"This computer"};this.A=null;this.o=[];this.I=this.g=null;this.F=[this.i];this.l=this.i;this.mk=new g.UC(64);this.J=0;this.Wm=-1;this.B=null;if(!g.vz(g.X(this.player))){a=this.player;var b=g.OD(a);b&&(b=b.Cn())&&(b=new r9(a,b),g.B(this,b));b=new q9(a);g.B(this,b);g.eL(a,b.element,4);this.B=new p9;g.B(this,this.B);g.eL(a,this.B.element,4);this.G=!!Y8()}this.C=null},t9=function(a){a.C&&(a.player.removeEventListener("presentingplayerstatechange",a.C),a.C=null)},usa=function(a,b,
c){a.mk=c;
a.player.O("presentingplayerstatechange",new g.fE(c,b))},u9=function(a,b){if(b.key!=a.l.key)if(b.key==a.i.key)c9();
else{var c;(c=!g.O(g.X(a.player).experiments,"mdx_enable_privacy_disclosure_ui"))||(c=((c=g.$p("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.$p("SESSION_INDEX")&&!g.$p("LOGGED_IN")))||a.G||!a.B);c||g.vz(g.X(a.player))||(g.aD(g.QK(a.player))?a.player.pauseVideo():(a.C=(0,g.x)(a.xM,a),a.player.addEventListener("presentingplayerstatechange",a.C)),a.B&&a.B.l.show(),a9()||(h9=!0));a.l=b;var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(d||e){var f=a.player.getPlaylist();
if(f){var k=[];for(var l=0;l<f.getLength();l++)k[l]=f.wa(l).videoId}else k=[e];f=a.player.getCurrentTime(1);d={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Re,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0==f?void 0:f};(c=w6(c))&&(d.locationInfo=c);c=d}else c=null;V8("Connecting to: "+g.Jg(b));"cast-selector-receiver"==b.key?(X8(c||null),r8()?o8().setLaunchParams(c||null):m8("setLaunchParams called before ready.")):!c&&f9()&&U8()==b.key?B6("yt-remote-connection-change",
!0):(c9(),X8(c||null),c=T8().Sd(),(c=L6(c,b.key))&&d9(c,1))}},qqa=/^https?$/i,wsa=["POST",
"PUT"];g.Sa(u6,g.Pf);g.h=u6.prototype;
g.h.send=function(a,b,c,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.F+"; newUri="+a);b=b?b.toUpperCase():"GET";this.F=a;this.l="";this.A=0;this.Z=b;this.R=!1;this.i=!0;this.g=this.N?m6(this.N):m6(g.DZ);this.T=this.N?this.N.getOptions():g.DZ.getOptions();this.g.onreadystatechange=(0,g.x)(this.Cw,this);try{j6(n6(this,"Opening Xhr")),this.ba=!0,this.g.open(b,String(a),!0),this.ba=!1}catch(f){j6(n6(this,"Error opening Xhr: "+f.message));r6(this,f);return}a=
c||"";var e=this.headers.clone();d&&nqa(d,function(f,k){e.set(k,f)});
d=g.Xa(e.Qd(),oqa);c=g.u.FormData&&a instanceof g.u.FormData;!g.$a(wsa,b)||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");e.forEach(function(f,k){this.g.setRequestHeader(k,f)},this);
this.Y&&(this.g.responseType=this.Y);"withCredentials"in this.g&&this.g.withCredentials!==this.U&&(this.g.withCredentials=this.U);try{o6(this),0<this.B&&(this.J=pqa(this.g),j6(n6(this,"Will abort after "+this.B+"ms if incomplete, xhr2 "+this.J)),this.J?(this.g.timeout=this.B,this.g.ontimeout=(0,g.x)(this.Dw,this)):this.G=g.Fg(this.Dw,this.B,this)),j6(n6(this,"Sending request")),this.C=!0,this.g.send(a),this.C=!1}catch(f){j6(n6(this,"Send error: "+f.message)),r6(this,f)}};
g.h.Dw=function(){"undefined"!=typeof g.fZ&&this.g&&(this.l="Timed out after "+this.B+"ms, aborting",this.A=8,n6(this,this.l),this.dispatchEvent("timeout"),this.abort(8))};
g.h.abort=function(a){this.g&&this.i&&(n6(this,"Aborting"),this.i=!1,this.o=!0,this.g.abort(),this.o=!1,this.A=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),q6(this))};
g.h.V=function(){this.g&&(this.i&&(this.i=!1,this.o=!0,this.g.abort(),this.o=!1),q6(this,!0));u6.fb.V.call(this)};
g.h.Cw=function(){this.ga()||(this.ba||this.C||this.o?t6(this):this.TK())};
g.h.TK=function(){t6(this)};
g.h.isActive=function(){return!!this.g};
g.h.getStatus=function(){try{return 2<s6(this)?this.g.status:-1}catch(a){return-1}};
g.h.getLastError=function(){return g.Da(this.l)?this.l:String(this.l)};
var Kqa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},q7={"'":"\\'"},xsa={};g.h=A6.prototype;g.h.isEmpty=function(){return 0==this.g.length&&0==this.i.length};
g.h.clear=function(){this.g=[];this.i=[]};
g.h.contains=function(a){return g.$a(this.g,a)||g.$a(this.i,a)};
g.h.remove=function(a){var b=this.g;var c=(0,g.Yma)(b,a);0<=c?(g.bb(b,c),b=!0):b=!1;return b||g.cb(this.i,a)};
g.h.Cc=function(){for(var a=[],b=this.g.length-1;0<=b;--b)a.push(this.g[b]);var c=this.i.length;for(b=0;b<c;++b)a.push(this.i[b]);return a};
var yqa={qO:"atp",FQ:"ska",uQ:"que",UP:"mus",EQ:"sus",mP:"dsp",BQ:"seq"};C6.prototype.jg=function(){var a=new C6({id:this.id,name:this.name,app:this.app,type:this.type,user:this.username,userAvatarUri:this.avatar,obfuscatedGaiaId:this.obfuscatedGaiaId,theme:this.theme,capabilities:Array.from(this.capabilities.values()).join(","),experiments:Array.from(this.experiments.values()).join(",")});a.l=this.l;a.i=this.i;a.g=this.g};
var W6,P6="",Gqa=Y6("loadCastFramework")||Y6("loadCastApplicationFramework"),Mra=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];g.Sa(d7,g.A);g.h=d7.prototype;g.h.JD=function(a){this.o=arguments;this.g=!1;this.Ba?this.l=(0,g.D)()+this.bd:this.Ba=g.Fg(this.A,this.bd)};
g.h.stop=function(){this.Ba&&(g.u.clearTimeout(this.Ba),this.Ba=null);this.l=null;this.g=!1;this.o=[]};
g.h.pause=function(){++this.i};
g.h.resume=function(){this.i&&(--this.i,!this.i&&this.g&&(this.g=!1,this.B.apply(null,this.o)))};
g.h.V=function(){this.stop();d7.fb.V.call(this)};
g.h.KD=function(){this.l?(this.Ba=g.Fg(this.A,this.l-(0,g.D)()),this.l=null):(this.Ba=null,this.i?this.g=!0:(this.g=!1,this.B.apply(null,this.o)))};e7.prototype.stringify=function(a){return g.u.JSON.stringify(a,void 0)};
e7.prototype.parse=function(a){return g.u.JSON.parse(a,void 0)};g.h=f7.prototype;g.h.eh=null;g.h.Fe=!1;g.h.aj=null;g.h.Et=null;g.h.Ki=null;g.h.di=null;g.h.ag=null;g.h.Fg=null;g.h.xh=null;g.h.uc=null;g.h.nl=0;g.h.Je=null;g.h.No=null;g.h.rg=null;g.h.Tj=-1;g.h.uA=!0;g.h.Qg=!1;g.h.zq=0;g.h.ho=null;var m7={},k7={};g.h=f7.prototype;g.h.setTimeout=function(a){this.o=a};
g.h.HM=function(a){a=a.target;var b=this.ho;b&&3==s6(a)?b.Pj():this.BB(a)};
g.h.BB=function(a){try{if(a==this.uc)a:{var b=s6(this.uc),c=this.uc.A,d=this.uc.getStatus();if(g.Ld&&!g.md(10)||g.Nd&&!g.ld("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Bh&&!v6(this.uc))break a;this.Qg||4!=b||7==c||(8==c||0>=d?this.g.Ce(3):this.g.Ce(2));s7(this);var e=this.uc.getStatus();this.Tj=e;var f=v6(this.uc);(this.Fe=200==e)?(4==b&&o7(this),this.A?(Jqa(this,b,f),g.Bh&&this.Fe&&3==b&&(this.da.ea(this.i,"tick",this.BM),this.i.start())):n7(this,f),this.Fe&&!this.Qg&&(4==b?this.g.Tn(this):(this.Fe=
!1,j7(this)))):(400==e&&0<f.indexOf("Unknown SID")?(this.rg=3,l7(13)):(this.rg=0,l7(14)),o7(this),p7(this))}}catch(k){this.uc&&v6(this.uc)}finally{}};
g.h.BM=function(){var a=s6(this.uc),b=v6(this.uc);this.nl<b.length&&(s7(this),Jqa(this,a,b),this.Fe&&4!=a&&j7(this))};
g.h.UL=function(a){r7((0,g.x)(this.TL,this,a),0)};
g.h.TL=function(a){this.Qg||(s7(this),n7(this,a),j7(this))};
g.h.Cz=function(a){r7((0,g.x)(this.SL,this,a),0)};
g.h.SL=function(a){this.Qg||(o7(this),this.Fe=a,this.g.Tn(this),this.g.Ce(4))};
g.h.cancel=function(){this.Qg=!0;o7(this)};
g.h.eM=function(){this.aj=null;var a=(0,g.D)();0<=a-this.Et?(2!=this.di&&this.g.Ce(3),o7(this),this.rg=2,l7(18),p7(this)):Mqa(this,this.Et-a)};
g.h.getLastError=function(){return this.rg};g.h=Pqa.prototype;g.h.xq=null;g.h.Id=null;g.h.jo=!1;g.h.Bw=null;g.h.nm=null;g.h.gr=null;g.h.yq=null;g.h.ie=null;g.h.Cf=-1;g.h.Sj=null;g.h.mj=null;g.h.connect=function(a){this.yq=a;a=u7(this.g,null,this.yq);l7(3);this.Bw=(0,g.D)();var b=this.g.F;null!=b?(this.Sj=b[0],(this.mj=b[1])?(this.ie=1,Qqa(this)):(this.ie=2,w7(this))):(l6(a,"MODE","init"),this.Id=new f7(this,void 0,void 0,void 0),this.Id.eh=this.xq,i7(this.Id,a,!1,null,!0),this.ie=0)};
g.h.RC=function(a){if(a)this.ie=2,w7(this);else{l7(4);var b=this.g;b.Oe=b.hg.Cf;D7(b,9)}a&&this.Ce(2)};
g.h.Pp=function(a){return this.g.Pp(a)};
g.h.abort=function(){this.Id&&(this.Id.cancel(),this.Id=null);this.Cf=-1};
g.h.Aw=function(){return!1};
g.h.wz=function(a,b){this.Cf=a.Tj;if(0==this.ie)if(b){try{var c=this.i.parse(b)}catch(d){c=this.g;c.Oe=this.Cf;D7(c,2);return}this.Sj=c[0];this.mj=c[1]}else c=this.g,c.Oe=this.Cf,D7(c,2);else if(2==this.ie)if(this.jo)l7(7),this.gr=(0,g.D)();else if("11111"==b){if(l7(6),this.jo=!0,this.nm=(0,g.D)(),c=this.nm-this.Bw,!g.Ld||g.md(10)||500>c)this.Cf=200,this.Id.cancel(),l7(12),v7(this.g,this,!0)}else l7(8),this.nm=this.gr=(0,g.D)(),this.jo=!1};
g.h.Tn=function(){this.Cf=this.Id.Tj;if(this.Id.Fe)0==this.ie?this.mj?(this.ie=1,Qqa(this)):(this.ie=2,w7(this)):2==this.ie&&((!g.Ld||g.md(10)?!this.jo:200>this.gr-this.nm)?(l7(11),v7(this.g,this,!1)):(l7(12),v7(this.g,this,!0)));else{0==this.ie?l7(9):2==this.ie&&l7(10);var a=this.g;this.Id.getLastError();a.Oe=this.Cf;D7(a,2)}};
g.h.Vk=function(){return this.g.Vk()};
g.h.isActive=function(){return this.g.isActive()};
g.h.Ce=function(a){this.g.Ce(a)};g.h=x7.prototype;g.h.Aj=null;g.h.Fd=null;g.h.Ub=null;g.h.wq=null;g.h.pm=null;g.h.Mu=null;g.h.Em=null;g.h.zk=0;g.h.iI=0;g.h.Xc=null;g.h.pg=null;g.h.sf=null;g.h.Vg=null;g.h.hg=null;g.h.Lo=null;g.h.oi=-1;g.h.nx=-1;g.h.Oe=-1;g.h.Wh=0;g.h.Ph=0;g.h.Rg=8;var E7=new g.Pf;g.Sa(Sqa,g.rf);g.Sa(Tqa,g.rf);g.Sa(Uqa,g.rf);g.h=x7.prototype;g.h.connect=function(a,b,c,d,e){l7(0);this.wq=b;this.Aj=c||{};d&&g.Ca(e)&&(this.Aj.OSID=d,this.Aj.OAID=e);this.B?(r7((0,g.x)(this.gv,this,a),100),Yqa(this)):this.gv(a)};
g.h.gv=function(a){this.hg=new Pqa(this);this.hg.xq=null;this.hg.i=this.A;this.hg.connect(a)};
g.h.Aw=function(){return 0==this.g};
g.h.Bz=function(a){this.pg=null;ara(this,a)};
g.h.Az=function(){this.sf=null;this.Ub=new f7(this,this.l,"rpc",this.C);this.Ub.eh=null;this.Ub.zq=0;var a=this.Mu.clone();g.tn(a,"RID","rpc");g.tn(a,"SID",this.l);g.tn(a,"CI",this.Lo?"0":"1");g.tn(a,"AID",this.oi);y7(this,a);if(!g.Ld||g.md(10))g.tn(a,"TYPE","xmlhttp"),i7(this.Ub,a,!0,this.Em,!1);else{g.tn(a,"TYPE","html");var b=this.Ub,c=!!this.Em;b.di=3;b.ag=k6(a.clone());Lqa(b,c)}};
g.h.wz=function(a,b){if(0!=this.g&&(this.Ub==a||this.Fd==a))if(this.Oe=a.Tj,this.Fd==a&&3==this.g)if(7<this.Rg){try{var c=this.A.parse(b)}catch(f){c=null}if(g.Ka(c)&&3==c.length)if(0==c[0])a:{if(!this.sf){if(this.Ub)if(this.Ub.Ki+3E3<this.Fd.Ki)A7(this),this.Ub.cancel(),this.Ub=null;else break a;C7(this);l7(19)}}else this.nx=c[1],0<this.nx-this.oi&&37500>c[2]&&this.Lo&&0==this.Ph&&!this.Vg&&(this.Vg=r7((0,g.x)(this.LI,this),6E3));else D7(this,11)}else b!=xsa.NO.g&&D7(this,11);else if(this.Ub==a&&
A7(this),!g.wb(b)){c=this.A.parse(b);g.Ka(c);for(var d=0;d<c.length;d++){var e=c[d];this.oi=e[0];e=e[1];2==this.g?"c"==e[0]?(this.l=e[1],this.Em=e[2],e=e[3],null!=e?this.Rg=e:this.Rg=6,this.g=3,this.Xc&&this.Xc.av(),this.Mu=u7(this,this.Vk()?this.Em:null,this.wq),bra(this)):"stop"==e[0]&&D7(this,7):3==this.g&&("stop"==e[0]?D7(this,7):"noop"!=e[0]&&this.Xc&&this.Xc.Zu(e),this.Ph=0)}}};
g.h.LI=function(){null!=this.Vg&&(this.Vg=null,this.Ub.cancel(),this.Ub=null,C7(this),l7(20))};
g.h.Tn=function(a){if(this.Ub==a){A7(this);this.Ub=null;var b=2}else if(this.Fd==a)this.Fd=null,b=1;else return;this.Oe=a.Tj;if(0!=this.g)if(a.Fe)1==b?(b=(0,g.D)()-a.Ki,E7.dispatchEvent(new Tqa(E7,a.xh?a.xh.length:0,b,this.Wh)),z7(this),this.o.length=0):bra(this);else{var c=a.getLastError(),d;if(!(d=3==c||7==c||0==c&&0<this.Oe)){if(d=1==b)this.Fd||this.pg||1==this.g||2<=this.Wh?d=!1:(this.pg=r7((0,g.x)(this.Bz,this,a),cra(this,this.Wh)),this.Wh++,d=!0);d=!(d||2==b&&C7(this))}if(d)switch(c){case 1:D7(this,
5);break;case 4:D7(this,10);break;case 3:D7(this,6);break;case 7:D7(this,12);break;default:D7(this,2)}}};
g.h.jD=function(a){if(!g.$a(arguments,this.g))throw Error("Unexpected channel state: "+this.g);};
g.h.nN=function(a){a?l7(2):(l7(1),dra(this,8))};
g.h.Pp=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new u6;a.U=!1;return a};
g.h.isActive=function(){return!!this.Xc&&this.Xc.isActive(this)};
g.h.Ce=function(a){E7.dispatchEvent(new Uqa(E7,a))};
g.h.Vk=function(){return!(!g.Ld||g.md(10))};
g.h=era.prototype;g.h.av=function(){};
g.h.Zu=function(){};
g.h.Yu=function(){};
g.h.Bp=function(){};
g.h.Yv=function(){return{}};
g.h.isActive=function(){return!0};g.Sa(F7,g.A);g.h=F7.prototype;g.h.ML=function(){this.bd=Math.min(3E5,2*this.bd);this.l();this.i&&this.start()};
g.h.start=function(){var a=this.bd+15E3*Math.random();g.Eo(this.g,a);this.i=(0,g.D)()+a};
g.h.stop=function(){this.g.stop();this.i=0};
g.h.isActive=function(){return this.g.isActive()};
g.h.reset=function(){this.g.stop();this.bd=5E3};g.Sa(G7,era);g.h=G7.prototype;g.h.subscribe=function(a,b,c){return this.l.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.l.unsubscribe(a,b,c)};
g.h.Lf=function(a){return this.l.fh(a)};
g.h.O=function(a,b){return this.l.O.apply(this.l,arguments)};
g.h.dispose=function(){this.jb||(this.jb=!0,g.pf(this.l),hra(this),g.pf(this.i),this.i=null)};
g.h.ga=function(){return this.jb};
g.h.connect=function(a,b,c){if(!this.g||2!=this.g.g){this.G="";this.i.stop();this.A=a||null;this.o=b||0;a=this.I+"/test";b=this.I+"/bind";var d=new x7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.J),e=this.g;e&&(e.Xc=null);d.Xc=this;this.g=d;e?this.g.connect(a,b,this.B,e.l,e.oi):c?this.g.connect(a,b,this.B,c.sessionId,c.arrayId):this.g.connect(a,b,this.B)}};
g.h.sendMessage=function(a,b){var c={_sc:a};b&&g.ec(c,b);this.i.isActive()||2==(this.g?this.g.g:0)?this.C.push(c):H7(this)&&Zqa(this.g,c)};
g.h.av=function(){this.i.reset();this.A=null;this.o=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)Zqa(this.g,a[b])}this.O("handlerOpened")};
g.h.Yu=function(a){var b=2==a&&401==this.g.Oe;4==a||b||this.i.start();this.O("handlerError",a)};
g.h.Bp=function(a){if(!this.i.isActive())this.O("handlerClosed");else if(a)for(var b=0,c=a.length;b<c;++b){var d=a[b].map;d&&this.C.push(d)}};
g.h.Yv=function(){var a={v:2};this.G&&(a.gsessionid=this.G);0!=this.o&&(a.ui=""+this.o);0!=this.F&&(a.ui=""+this.F);this.A&&g.ec(a,this.A);return a};
g.h.Zu=function(a){"S"==a[0]?this.G=a[1]:"gracefulReconnect"==a[0]?(this.i.start(),Xqa(this.g)):this.O("handlerMessage",new fra(a[0],a[1]))};
g.h.SM=function(){this.i.isActive();var a=this.g,b=0;a.Ub&&b++;a.Fd&&b++;0==b&&this.connect(this.A,this.o)};I7.prototype.o=function(a,b,c,d){b?a(d):a({text:c.responseText})};
I7.prototype.l=function(a,b){a(Error("Request error: "+b.status))};
I7.prototype.A=function(a){a(Error("request timed out"))};var pra=(0,g.D)(),L7=null,O7=Array(50),N7=-1,P7=!1;g.Sa(Q7,g.N);Q7.prototype.Sd=function(){return this.g};
Q7.prototype.contains=function(a){return!!K6(this.g,a)};
Q7.prototype.get=function(a){return a?L6(this.g,a):null};
Q7.prototype.info=function(a){M7(this.C,a)};g.t(R7,g.N);g.h=R7.prototype;g.h.start=function(){!this.g&&isNaN(this.Ba)&&this.EB()};
g.h.stop=function(){this.g&&(this.g.abort(),this.g=null);isNaN(this.Ba)||(g.jq(this.Ba),this.Ba=NaN)};
g.h.V=function(){this.stop();g.N.prototype.V.call(this)};
g.h.EB=function(){this.Ba=NaN;this.g=g.er(J7(this.B,"/pairing/get_screen"),{method:"POST",wb:{pairing_code:this.A},timeout:5E3,onSuccess:(0,g.x)(this.PN,this),onError:(0,g.x)(this.ON,this),pe:(0,g.x)(this.QN,this)})};
g.h.PN=function(a,b){this.g=null;var c=b.screen||{};c.dialId=this.l;c.name=this.o;this.O("pairingComplete",new D6(c))};
g.h.ON=function(a){this.g=null;a.status&&404==a.status?this.i>=ysa.length?this.O("pairingFailed",Error("DIAL polling timed out")):(a=ysa[this.i],this.Ba=g.hq((0,g.x)(this.EB,this),a),this.i++):this.O("pairingFailed",Error("Server error "+a.status))};
g.h.QN=function(){this.g=null;this.O("pairingFailed",Error("Server not responding"))};
var ysa=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Sa(T7,Q7);g.h=T7.prototype;g.h.start=function(){S7(this)&&this.O("screenChange");!g.Lt("yt-remote-lounge-token-expiration")&&tra(this);g.jq(this.i);this.i=g.hq((0,g.x)(this.start,this),1E4)};
g.h.add=function(a,b){S7(this);qra(this,a);U7(this,!1);this.O("screenChange");b(a);a.token||tra(this)};
g.h.remove=function(a,b){var c=S7(this);sra(this,a)&&(U7(this,!1),c=!0);b(a);c&&this.O("screenChange")};
g.h.Ho=function(a,b,c,d){var e=S7(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,U7(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.O("screenChange")};
g.h.V=function(){g.jq(this.i);T7.fb.V.call(this)};
g.h.UD=function(a){S7(this);var b=this.g.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}U7(this,!b);b&&M7(this.C,"Missed "+b+" lounge tokens.")};
g.h.TD=function(a){M7(this.C,"Requesting lounge tokens failed: "+a)};g.t(W7,g.N);g.h=W7.prototype;g.h.start=function(){var a=parseInt(g.Lt("yt-remote-fast-check-period")||"0",10);(this.o=(0,g.D)()-144E5<a?0:a)?Y7(this):(this.o=(0,g.D)()+3E5,g.Kt("yt-remote-fast-check-period",this.o),this.Is())};
g.h.isEmpty=function(){return g.Xb(this.g)};
g.h.update=function(){V7("Updating availability on schedule.");var a=this.B(),b=g.Lb(this.g,function(c,d){return c&&!!L6(a,d)},this);
X7(this,b)};
g.h.V=function(){g.jq(this.l);this.l=NaN;this.i&&(this.i.abort(),this.i=null);g.N.prototype.V.call(this)};
g.h.Is=function(){g.jq(this.l);this.l=NaN;this.i&&this.i.abort();var a=wra(this);if(x6(a)){var b=J7(this.A,"/pairing/get_screen_availability");this.i=K7(this.A,b,{lounge_token:g.Rb(a).join(",")},(0,g.x)(this.pL,this,a),(0,g.x)(this.oL,this))}else X7(this,{}),Y7(this)};
g.h.pL=function(a,b){this.i=null;var c=g.Rb(wra(this));if(g.rb(c,g.Rb(a))){c=b.screens||[];for(var d={},e=0,f=c.length;e<f;++e)d[a[c[e].loungeToken]]="online"==c[e].status;X7(this,d);Y7(this)}else this.Jb("Changing Screen set during request."),this.Is()};
g.h.oL=function(a){this.Jb("Screen availability failed: "+a);this.i=null;Y7(this)};
g.h.Jb=function(a){M7("OnlineScreenService",a)};g.Sa(Z7,Q7);g.h=Z7.prototype;g.h.start=function(){this.l.start();this.i.start();this.g.length&&(this.O("screenChange"),this.i.isEmpty()||this.O("onlineScreenChange"))};
g.h.add=function(a,b,c){this.l.add(a,b,c)};
g.h.remove=function(a,b,c){this.l.remove(a,b,c);this.i.update()};
g.h.Ho=function(a,b,c,d){this.l.contains(a)?this.l.Ho(a,b,c,d):(a="Updating name of unknown screen: "+a.name,M7(this.C,a),d(Error(a)))};
g.h.Sd=function(a){return a?this.g:g.fb(this.g,(0,g.Xd)(this.o,function(b){return!this.contains(b)},this))};
g.h.FB=function(){return(0,g.Xd)(this.Sd(!0),function(a){return!!this.i.g[a.id]},this)};
g.h.GB=function(a,b,c,d,e){this.info("getDialScreenByPairingCode "+a+" / "+b);var f=new R7(this.B,a,b,c);f.subscribe("pairingComplete",(0,g.x)(function(k){g.pf(f);d($7(this,k))},this));
f.subscribe("pairingFailed",function(k){g.pf(f);e(k)});
f.start();return(0,g.x)(f.stop,f)};
g.h.SN=function(a,b,c,d){g.er(J7(this.B,"/pairing/get_screen"),{method:"POST",wb:{pairing_code:a},timeout:5E3,onSuccess:(0,g.x)(function(e,f){var k=new D6(f.screen||{});if(!k.name||Ara(this,k.name)){a:{var l=k.name;for(var m=2,n=b(l,m);Ara(this,n);){m++;if(20<m)break a;n=b(l,m)}l=n}k.name=l}c($7(this,k))},this),
onError:(0,g.x)(function(e){d(Error("pairing request failed: "+e.status))},this),
pe:(0,g.x)(function(){d(Error("pairing request timed out."))},this)})};
g.h.V=function(){g.pf(this.l);g.pf(this.i);Z7.fb.V.call(this)};
g.h.cE=function(){Bra(this);this.O("screenChange");this.i.update()};
Z7.prototype.dispose=Z7.prototype.dispose;g.Sa(b8,g.N);g.h=b8.prototype;g.h.Vn=function(a){this.l=a;this.O("sessionScreen",this.l)};
g.h.Vd=function(a){this.ga()||(a&&c8(this,""+a),this.l=null,this.O("sessionScreen",null))};
g.h.info=function(a){M7(this.T,a)};
g.h.IB=function(){return null};
g.h.Rs=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.x)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.x)(function(){c8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.V=function(){this.Rs("");b8.fb.V.call(this)};g.Sa(d8,b8);g.h=d8.prototype;g.h.Qs=function(a){if(this.g){if(this.g==a)return;c8(this,"Overriding cast sesison with new session object");this.g.removeUpdateListener(this.B);this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.A)}this.g=a;this.g.addUpdateListener(this.B);this.g.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.A);Dra(this)};
g.h.ri=function(a){this.info("launchWithParams no-op for Cast: "+g.Jg(a))};
g.h.stop=function(){this.g?this.g.stop((0,g.x)(function(){this.Vd()},this),(0,g.x)(function(){this.Vd(Error("Failed to stop receiver app."))},this)):this.Vd(Error("Stopping cast device witout session."))};
g.h.Rs=g.Ha;g.h.V=function(){this.info("disposeInternal");g.jq(this.o);this.o=0;this.g&&(this.g.removeUpdateListener(this.B),this.g.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.A));this.g=null;d8.fb.V.call(this)};
g.h.pM=function(a,b){if(!this.ga())if(b){var c=z6(b);if(g.Na(c)){var d=""+c.type;c=c.data||{};this.info("onYoutubeMessage_: "+d+" "+g.Jg(c));switch(d){case "mdxSessionStatus":Cra(this,c.screenId);break;default:c8(this,"Unknown youtube message: "+d)}}else c8(this,"Unable to parse message.")}else c8(this,"No data in message.")};
g.h.qw=function(a,b,c,d){zra(this.G,this.i.label,a,this.i.friendlyName,(0,g.x)(function(e){e?b(e):0<=d?(c8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),g.hq((0,g.x)(this.qw,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.IB=function(){return this.g};
g.h.TN=function(a){this.ga()||a||(c8(this,"Cast session died."),this.Vd())};g.Sa(e8,b8);g.h=e8.prototype;g.h.Qs=function(a){this.o=a;this.o.addUpdateListener(this.J)};
g.h.ri=function(a){this.A=a;this.C()};
g.h.stop=function(){this.g();this.g=g.Ha;g.jq(this.B);this.o?this.o.stop((0,g.x)(this.Vd,this,null),(0,g.x)(this.Vd,this,"Failed to stop DIAL device.")):this.Vd()};
g.h.V=function(){this.g();this.g=g.Ha;g.jq(this.B);this.o&&this.o.removeUpdateListener(this.J);this.o=null;e8.fb.V.call(this)};
g.h.WN=function(a){this.ga()||a||(c8(this,"DIAL session died."),this.g(),this.g=g.Ha,this.Vd())};
g.h.Lq=function(a){this.I=J6();if(this.A){var b=new chrome.cast.DialLaunchResponse(!0,Fra(this));a(b);Era(this)}else this.C=(0,g.x)(function(){g.jq(this.B);this.C=g.Ha;this.B=NaN;var c=new chrome.cast.DialLaunchResponse(!0,Fra(this));a(c);Era(this)},this),this.B=g.hq((0,g.x)(function(){this.C()},this),100)};
g.h.zE=function(a,b,c){zra(this.G,this.F.receiver.label,a,this.i.friendlyName,(0,g.x)(function(d){d&&d.token?(this.Vn(d),b(new chrome.cast.DialLaunchResponse(!1))):this.Lq(b,c)},this),(0,g.x)(function(d){c8(this,"Failed to get DIAL screen: "+d);
this.Lq(b,c)},this))};g.Sa(f8,b8);f8.prototype.stop=function(){this.Vd()};
f8.prototype.Qs=g.Ha;f8.prototype.ri=function(){g.jq(this.g);this.g=NaN;var a=L6(this.G.Sd(),this.i.label);a?this.Vn(a):this.Vd(Error("No such screen"))};
f8.prototype.V=function(){g.jq(this.g);this.g=NaN;f8.fb.V.call(this)};g.Sa(g8,g.N);g.h=g8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.C);this.F||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,e=a?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION,f=(0,g.x)(this.YK,this);c=new chrome.cast.ApiConfig(c,(0,g.x)(this.yz,this),f,d,e);c.customDialLaunchCallback=(0,g.x)(this.mJ,this);chrome.cast.initialize(c,(0,g.x)(function(){this.ga()||
(chrome.cast.addReceiverActionListener(this.o),mra(),this.i.subscribe("onlineScreenChange",(0,g.x)(this.HB,this)),this.l=Hra(this),chrome.cast.setCustomReceivers(this.l,g.Ha,(0,g.x)(function(k){this.Jb("Failed to set initial custom receivers: "+g.Jg(k))},this)),this.O("yt-remote-cast2-availability-change",i8(this)),b(!0))},this),(0,g.x)(function(k){this.Jb("Failed to initialize API: "+g.Jg(k));
b(!1)},this))};
g.h.bN=function(a,b){h8("Setting connected screen ID: "+a+" -> "+b);if(this.g){var c=this.g.l;if(!a||c&&c.id!=a)h8("Unsetting old screen status: "+this.g.i.friendlyName),j8(this,null)}if(a&&b){if(!this.g){c=L6(this.i.Sd(),a);if(!c){h8("setConnectedScreenStatus: Unknown screen.");return}var d=Gra(this,c);d||(h8("setConnectedScreenStatus: Connected receiver not custom..."),d=new chrome.cast.Receiver(c.uuid?c.uuid:c.id,c.name),d.receiverType=chrome.cast.ReceiverType.CUSTOM,this.l.push(d),chrome.cast.setCustomReceivers(this.l,
g.Ha,(0,g.x)(function(e){this.Jb("Failed to set initial custom receivers: "+g.Jg(e))},this)));
h8("setConnectedScreenStatus: new active receiver: "+d.friendlyName);j8(this,new f8(this.i,d),!0)}this.g.Rs(b)}else h8("setConnectedScreenStatus: no screen.")};
g.h.cN=function(a){this.ga()?this.Jb("Setting connection data on disposed cast v2"):this.g?this.g.ri(a):this.Jb("Setting connection data without a session")};
g.h.VN=function(){this.ga()?this.Jb("Stopping session on disposed cast v2"):this.g?(this.g.stop(),j8(this,null)):h8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.x)(this.yz,this),(0,g.x)(this.vL,this))};
g.h.V=function(){this.i.unsubscribe("onlineScreenChange",(0,g.x)(this.HB,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.o);g.cb(g.v("yt.mdx.remote.debug.handlers_")||[],jra);g.pf(this.g);g8.fb.V.call(this)};
g.h.Jb=function(a){M7("Controller",a)};
g.h.zz=function(a,b){this.g==a&&(b||j8(this,null),this.O("yt-remote-cast2-session-change",b))};
g.h.UK=function(a,b){if(!this.ga())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),h8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.g)if(this.g.i.label!=a.label)h8("onReceiverAction_: Stopping active receiver: "+this.g.i.friendlyName),this.g.stop();else{h8("onReceiverAction_: Casting to active receiver.");this.g.l&&this.O("yt-remote-cast2-session-change",this.g.l);break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:j8(this,
new f8(this.i,a));break;case chrome.cast.ReceiverType.DIAL:j8(this,new e8(this.i,a,this.B));break;case chrome.cast.ReceiverType.CAST:j8(this,new d8(this.i,a));break;default:this.Jb("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.g&&this.g.i.label==a.label?this.g.stop():this.Jb("Stopping receiver w/o session: "+a.friendlyName)}else this.Jb("onReceiverAction_ called without receiver.")};
g.h.mJ=function(a){if(this.ga())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.Jb("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.g?this.g.i:null;if(!c||c.label!=b.label)return this.Jb("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.g.l)return h8("Reselecting dial screen."),
this.O("yt-remote-cast2-session-change",this.g.l),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.Jb('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);j8(this,new e8(this.i,b,this.B))}b=this.g;b.F=a;return b.F.appState==chrome.cast.DialAppState.RUNNING?new Promise((0,g.x)(b.zE,b,(b.F.extraData||{}).screenId||null)):new Promise((0,g.x)(b.Lq,b))};
g.h.yz=function(a){if(!this.ga()){h8("New cast session ID: "+a.sessionId);var b=a.receiver;if(b.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.g)if(b.receiverType==chrome.cast.ReceiverType.CAST)h8("Got resumed cast session before resumed mdx connection."),b.friendlyName=chrome.cast.unescape(b.friendlyName),j8(this,new d8(this.i,b),!0);else{this.Jb("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var c=this.g.i,d=L6(this.i.Sd(),c.label);d&&E6(d,b.label)&&
c.receiverType!=chrome.cast.ReceiverType.CAST&&b.receiverType==chrome.cast.ReceiverType.CAST&&(h8("onSessionEstablished_: manual to cast session change "+b.friendlyName),g.pf(this.g),this.g=new d8(this.i,b),this.g.subscribe("sessionScreen",(0,g.x)(this.zz,this,this.g)),this.g.ri(null));this.g.Qs(a)}}};
g.h.UN=function(){return this.g?this.g.IB():null};
g.h.vL=function(a){this.ga()||(this.Jb("Failed to estabilish a session: "+g.Jg(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&j8(this,null))};
g.h.YK=function(a){h8("Receiver availability updated: "+a);if(!this.ga()){var b=i8(this);this.A=a==chrome.cast.ReceiverAvailability.AVAILABLE;i8(this)!=b&&this.O("yt-remote-cast2-availability-change",i8(this))}};
g.h.HB=function(){this.ga()||(this.l=Hra(this),h8("Updating custom receivers: "+g.Jg(this.l)),chrome.cast.setCustomReceivers(this.l,g.Ha,(0,g.x)(function(){this.Jb("Failed to set custom receivers.")},this)),this.O("yt-remote-cast2-availability-change",i8(this)))};
g8.prototype.setLaunchParams=g8.prototype.cN;g8.prototype.setConnectedScreenStatus=g8.prototype.bN;g8.prototype.stopSession=g8.prototype.VN;g8.prototype.getCastSession=g8.prototype.UN;g8.prototype.requestSession=g8.prototype.requestSession;g8.prototype.init=g8.prototype.init;g8.prototype.dispose=g8.prototype.dispose;var p8=[];u8.prototype.reset=function(a){this.listId="";this.index=-1;this.videoId="";v8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.g=a.trackData,this.Pe=a.hasPrevious,this.hasNext=a.hasNext,this.C=a.playerTime,this.B=a.playerTimeAt,this.o=a.seekableStart,this.i=a.seekableEnd,this.F=a.duration,this.G=a.loadedTime,this.l=a.liveIngestionTime,this.A=
!isNaN(this.l))};
u8.prototype.isAdPlaying=function(){return 1081==this.playerState};
u8.prototype.getDuration=function(){return this.A?this.F+w8(this):this.F};
u8.prototype.clone=function(){return new u8(A8(this))};g.t(C8,g.N);g.h=C8.prototype;g.h.play=function(){1==this.g?(this.i?this.i.play(null,g.Ha,I8(this,"play")):H8(this,"play"),G8(this,1,y8(D8(this))),this.O("remotePlayerChange")):E8(this,this.play)};
g.h.pause=function(){1==this.g?(this.i?this.i.pause(null,g.Ha,I8(this,"pause")):H8(this,"pause"),G8(this,2,y8(D8(this))),this.O("remotePlayerChange")):E8(this,this.pause)};
g.h.seekTo=function(a){if(1==this.g){if(this.i){var b=D8(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;c.resumeState=1==b.playerState||3==b.playerState?chrome.cast.media.ResumeState.PLAYBACK_START:chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ha,I8(this,"seekTo",{newTime:a}))}else H8(this,"seekTo",{newTime:a});G8(this,3,a);this.O("remotePlayerChange")}else E8(this,g.Qa(this.seekTo,a))};
g.h.stop=function(){if(1==this.g){this.i?this.i.stop(null,g.Ha,I8(this,"stopVideo")):H8(this,"stopVideo");var a=D8(this);a.index=-1;a.videoId="";v8(a);F8(this,a);this.O("remotePlayerChange")}else E8(this,this.stop)};
g.h.setVolume=function(a,b){if(1==this.g){var c=D8(this);if(this.l){if(c.volume!=a){var d=Math.round(a)/100;this.l.setReceiverVolumeLevel(d,(0,g.x)(function(){M7("CP","set receiver volume: "+d)},this),(0,g.x)(function(){this.Jb("failed to set receiver volume.")},this))}c.muted!=b&&this.l.setReceiverMuted(b,(0,g.x)(function(){M7("CP","set receiver muted: "+b)},this),(0,g.x)(function(){this.Jb("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);H8(this,"setVolume",e)}c.muted=b;c.volume=a;F8(this,c)}else E8(this,g.Qa(this.setVolume,a,b))};
g.h.HA=function(a,b){if(1==this.g){var c=D8(this),d={videoId:a};b&&(c.g={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},d.style=g.Jg(b.style),g.ec(d,c.g));H8(this,"setSubtitlesTrack",d);F8(this,c)}else E8(this,g.Qa(this.HA,a,b))};
g.h.setAudioTrack=function(a,b){if(1==this.g){var c=b.getLanguageInfo().getId();H8(this,"setAudioTrack",{videoId:a,audioTrackId:c});var d=D8(this);d.audioTrackId=c;F8(this,d)}else E8(this,g.Qa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){var l=D8(this);c=c||0;var m={videoId:a,currentIndex:c};z8(l,a,c);g.Ca(b)&&(x8(l,b),m.currentTime=b);g.Ca(d)&&(m.listId=d);null!=e&&(m.playerParams=e);null!=f&&(m.clickTrackingParams=f);null!=k&&(m.locationInfo=g.Jg(k));H8(this,"setPlaylist",m);d||F8(this,l)};
g.h.ao=function(a,b){if(1==this.g){if(a&&b){var c=D8(this);z8(c,a,b);F8(this,c)}H8(this,"previous")}else E8(this,g.Qa(this.ao,a,b))};
g.h.nextVideo=function(a,b){if(1==this.g){if(a&&b){var c=D8(this);z8(c,a,b);F8(this,c)}H8(this,"next")}else E8(this,g.Qa(this.nextVideo,a,b))};
g.h.Ev=function(){1==this.g?H8(this,"dismissAutoplay"):E8(this,this.Ev)};
g.h.dispose=function(){if(3!=this.g){var a=this.g;this.g=3;this.O("proxyStateChange",a,this.g)}g.N.prototype.dispose.call(this)};
g.h.V=function(){Ura(this);this.o=null;this.A.clear();B8(this,null);g.N.prototype.V.call(this)};
g.h.Ht=function(a){if((a!=this.g||2==a)&&3!=this.g&&0!=a){var b=this.g;this.g=a;this.O("proxyStateChange",b,a);if(1==a)for(;!this.A.isEmpty();)b=a=this.A,0==b.g.length&&(b.g=b.i,b.g.reverse(),b.i=[]),a.g.pop().apply(this);else 3==a&&this.dispose()}};
g.h.RK=function(a,b){this.O(a,b)};
g.h.SI=function(a){if(!a)this.Ck(null),B8(this,null);else if(this.l.receiver.volume){a=this.l.receiver.volume;var b=D8(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)M7("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,F8(this,b)}};
g.h.Ck=function(a){M7("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.F);if(this.i=a)this.i.addUpdateListener(this.F),Vra(this),this.O("remotePlayerChange")};
g.h.RI=function(a){a?(Vra(this),this.O("remotePlayerChange")):this.Ck(null)};
g.h.mt=function(){H8(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.fJ=function(){var a=Rra();a&&B8(this,a)};
g.h.Jb=function(a){M7("CP",a)};g.t(J8,g.N);g.h=J8.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.playerParams,f=b.clickTrackingParams,k=b.index,l={videoId:d},m=b.currentTime,n=b.locationInfo;g.Ca(m)&&(l.currentTime=5>=m?0:m);e&&(l.playerParams=e);n&&(l.locationInfo=n);f&&(l.clickTrackingParams=f);c&&(l.listId=c);g.Ca(k)&&(l.currentIndex=k);c&&(this.Qa.listId=c);this.Qa.videoId=d;this.Qa.index=k||0;this.Qa.state=3;x8(this.Qa,m);this.o="UNSUPPORTED";K8("Connecting with setPlaylist and params: "+g.Jg(l));this.g.connect({method:"setPlaylist",
params:g.Jg(l)},a,S6())}else K8("Connecting without params"),this.g.connect({},a,S6());Xra(this)};
g.h.dispose=function(){this.ga()||(this.O("beforeDispose"),L8(this,3));g.N.prototype.dispose.call(this)};
g.h.V=function(){M8(this);O8(this);N8(this);g.jq(this.C);this.C=NaN;g.jq(this.F);this.F=NaN;this.l=null;g.os(this.T);this.T.length=0;this.g.dispose();g.N.prototype.V.call(this);this.o=this.B=this.i=this.Qa=this.g=null};
g.h.ND=function(){this.Th(2)};
g.h.WI=function(){K8("Channel opened");this.J&&(this.J=!1,N8(this),this.I=g.hq((0,g.x)(function(){K8("Timing out waiting for a screen.");this.Th(1)},this),15E3));
Eqa(gra(this.g),this.N)};
g.h.TI=function(){K8("Channel closed");isNaN(this.A)?V6(!0):V6();this.dispose()};
g.h.UI=function(a){V6();isNaN(this.Ij())?(K8("Channel error: "+a+" without reconnection"),this.dispose()):(this.J=!0,K8("Channel error: "+a+" with reconnection in "+this.Ij()+" ms"),L8(this,2))};
g.h.VI=function(a){a.params?K8("Received: action="+a.action+", params="+g.Jg(a.params)):K8("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=z6(a.params.devices);this.i=(0,g.ge)(a,function(c){return new C6(c)});
a=!!g.Xa(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
$ra(this,a);break;case "loungeScreenDisconnected":g.eb(this.i,function(c){return"LOUNGE_SCREEN"==c.type});
$ra(this,!1);break;case "remoteConnected":var b=new C6(z6(a.params.device));g.Xa(this.i,function(c){return b?c.id==b.id:!1})||tqa(this.i,b);
break;case "remoteDisconnected":b=new C6(z6(a.params.device));g.eb(this.i,function(c){return b?c.id==b.id:!1});
break;case "gracefulDisconnect":break;case "playlistModified":bsa(this,a);break;case "nowPlaying":dsa(this,a);break;case "onStateChange":csa(this,a);break;case "onAdStateChange":esa(this,a);break;case "onVolumeChanged":fsa(this,a);break;case "onSubtitlesTrackChanged":asa(this,a);break;case "nowAutoplaying":gsa(this,a);break;case "autoplayDismissed":this.O("autoplayDismissed");break;case "autoplayUpNext":this.B=a.params.videoId||null;this.O("autoplayUpNext",this.B);break;case "onAutoplayModeChanged":this.o=
a.params.autoplayMode;this.O("autoplayModeChange",this.o);"DISABLED"==this.o&&this.O("autoplayDismissed");break;case "onHasPreviousNextChanged":hsa(this,a);break;case "requestAssistedSignIn":this.O("assistedSignInRequested",a.params.authCode);break;default:K8("Unrecognized action: "+a.action)}};
g.h.PM=function(){if(this.l){var a=this.l;this.l=null;this.Qa.videoId!=a&&P8(this,"getNowPlaying")}};
g.h.DD=function(){var a=3;this.ga()||(a=0,isNaN(this.Ij())?H7(this.g)&&isNaN(this.A)&&(a=1):a=2);return a};
g.h.Th=function(a){K8("Disconnecting with "+a);M8(this);this.O("beforeDisconnect",a);1==a&&V6();hra(this.g,a);this.dispose()};
g.h.CD=function(){var a=this.Qa;this.l&&(a=this.Qa.clone(),z8(a,this.l,a.index));return A8(a)};
g.h.dN=function(a){var b=new u8(a);b.videoId&&b.videoId!=this.Qa.videoId&&(this.l=b.videoId,g.jq(this.C),this.C=g.hq((0,g.x)(this.PM,this),5E3));var c=[];this.Qa.listId==b.listId&&this.Qa.videoId==b.videoId&&this.Qa.index==b.index||c.push("remoteQueueChange");this.Qa.playerState==b.playerState&&this.Qa.volume==b.volume&&this.Qa.muted==b.muted&&y8(this.Qa)==y8(b)&&g.Jg(this.Qa.g)==g.Jg(b.g)||c.push("remotePlayerChange");this.Qa.reset(a);(0,g.y)(c,function(d){this.O(d)},this)};
g.h.ow=function(){var a=this.g.B.id,b=g.Xa(this.i,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Ij=function(){var a=this.g;return a.i.isActive()?a.i.i-(0,g.D)():NaN};
g.h.vD=function(){return this.o||"UNSUPPORTED"};
g.h.wD=function(){return this.B||""};
g.h.NN=function(){if(!isNaN(this.Ij())){var a=this.g.i;g.Fo(a.g);a.start()}};
g.h.WM=function(a,b){P8(this,a,b);Zra(this)};
J8.prototype.subscribe=J8.prototype.subscribe;J8.prototype.unsubscribeByKey=J8.prototype.Lf;J8.prototype.getProxyState=J8.prototype.DD;J8.prototype.disconnect=J8.prototype.Th;J8.prototype.getPlayerContextData=J8.prototype.CD;J8.prototype.setPlayerContextData=J8.prototype.dN;J8.prototype.getOtherConnectedRemoteId=J8.prototype.ow;J8.prototype.getReconnectTimeout=J8.prototype.Ij;J8.prototype.getAutoplayMode=J8.prototype.vD;J8.prototype.getAutoplayVideoId=J8.prototype.wD;J8.prototype.reconnect=J8.prototype.NN;
J8.prototype.sendMessage=J8.prototype.WM;g.t(Q8,Q7);g.h=Q8.prototype;g.h.Sd=function(a){return this.Zc.$_gs(a)};
g.h.contains=function(a){return!!this.Zc.$_c(a)};
g.h.get=function(a){return this.Zc.$_g(a)};
g.h.start=function(){this.Zc.$_st()};
g.h.add=function(a,b,c){this.Zc.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Zc.$_r(a,b,c)};
g.h.Ho=function(a,b,c,d){this.Zc.$_un(a,b,c,d)};
g.h.V=function(){for(var a=0,b=this.i.length;a<b;++a)this.Zc.$_ubk(this.i[a]);this.i.length=0;this.Zc=null;Q7.prototype.V.call(this)};
g.h.RN=function(){this.O("screenChange")};
g.h.wK=function(){this.O("onlineScreenChange")};
Z7.prototype.$_st=Z7.prototype.start;Z7.prototype.$_gspc=Z7.prototype.SN;Z7.prototype.$_gsppc=Z7.prototype.GB;Z7.prototype.$_c=Z7.prototype.contains;Z7.prototype.$_g=Z7.prototype.get;Z7.prototype.$_a=Z7.prototype.add;Z7.prototype.$_un=Z7.prototype.Ho;Z7.prototype.$_r=Z7.prototype.remove;Z7.prototype.$_gs=Z7.prototype.Sd;Z7.prototype.$_gos=Z7.prototype.FB;Z7.prototype.$_s=Z7.prototype.subscribe;Z7.prototype.$_ubk=Z7.prototype.Lf;var i9=null,h9=!1,R8=null,S8=null,g9=null,W8=[];g.t(j9,g.A);g.h=j9.prototype;
g.h.V=function(){g.A.prototype.V.call(this);this.o.stop();this.B.stop();this.J.stop();this.N();this.g.unsubscribe("proxyStateChange",this.vz,this);this.g.unsubscribe("remotePlayerChange",this.Ek,this);this.g.unsubscribe("remoteQueueChange",this.Wn,this);this.g.unsubscribe("autoplayUpNext",this.Xy,this);this.g.unsubscribe("previousNextChange",this.rz,this);this.g.unsubscribe("nowAutoplaying",this.nz,this);this.g.unsubscribe("autoplayDismissed",this.Wy,this);this.g=this.A=null};
g.h.Tx=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(2!=this.g.g)if(m9(this)){if(!D8(this.g).isAdPlaying()||"control_seek"!=a)switch(a){case "control_toggle_play_pause":1==D8(this.g).playerState?this.g.pause():this.g.play();break;case "control_play":this.g.play();break;case "control_pause":this.g.pause();break;case "control_seek":this.I.Pj(c[0],c[1]);break;case "control_subtitles_set_track":n9(this,c[0]);break;case "control_set_audio_track":c=c[0],m9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,
c)}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":c=this.i.getCurrentTime();o9(this,0==c?void 0:c);break;case "control_seek":o9(this,c[0]);break;case "control_subtitles_set_track":n9(this,c[0]);break;case "control_set_audio_track":c=c[0],m9(this)&&this.g.setAudioTrack(this.i.getVideoData(1).videoId,c)}};
g.h.QI=function(a){this.J.JD(a)};
g.h.wN=function(a){this.Tx("control_subtitles_set_track",g.Xb(a)?null:a)};
g.h.SA=function(){var a=this.i.getOption("captions","track");g.Xb(a)||n9(this,a)};
g.h.iz=function(a){if(m9(this)){this.g.unsubscribe("remotePlayerChange",this.Ek,this);var b=Math.round(a.volume);a=!!a.muted;var c=D8(this.g);if(b!=c.volume||a!=c.muted)this.g.setVolume(b,a),this.T.start();this.g.subscribe("remotePlayerChange",this.Ek,this)}};
g.h.RJ=function(){g.Xb(this.C)||tsa(this,this.C);this.F=!1};
g.h.vz=function(a,b){this.B.stop();2==b&&this.RA()};
g.h.Ek=function(){if(m9(this)){this.o.stop();var a=D8(this.g);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.A.Wm=1;break;case 1082:case 1083:this.A.Wm=0;break;default:this.A.Wm=-1}switch(a.playerState){case 1081:case 1:l9(this,new g.UC(8));this.QA();break;case 1085:case 3:l9(this,new g.UC(9));break;case 1083:case 0:l9(this,new g.UC(2));this.I.stop();k9(this,this.i.getVideoData().lengthSeconds);break;case 1084:l9(this,new g.UC(4));break;case 2:l9(this,new g.UC(4));k9(this,y8(a));
break;case -1:l9(this,new g.UC(64));break;case -1E3:l9(this,new g.UC(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback."}))}a=D8(this.g).g;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,tsa(this,a));a=D8(this.g);-1==a.volume||Math.round(this.i.getVolume())==a.volume&&this.i.isMuted()==a.muted||this.T.isActive()||this.tB()}else ssa(this)};
g.h.rz=function(){this.i.O("mdxpreviousnextchange")};
g.h.Wn=function(){m9(this)||ssa(this)};
g.h.QC=function(){this.g.Ev()};
g.h.Xy=function(a){a&&(a=g.er("/watch_queue_ajax",{method:"GET",wd:{action_get_watch_queue_item:1,video_id:a},onSuccess:(0,g.x)(this.XL,this)}))&&(this.N=(0,g.x)(a.abort,a))};
g.h.XL=function(a,b){var c=new g.CB(g.X(this.i),{videoId:b.videoId,title:b.title,author:b.author,murlmq_webp:b.url});this.suggestion=c;this.i.O("mdxautoplayupnext",c)};
g.h.nz=function(a){isNaN(a)||this.i.O("mdxnowautoplaying",a)};
g.h.Wy=function(){this.i.O("mdxautoplaycanceled")};
g.h.mG=function(a,b){-1==D8(this.g).playerState?o9(this,a):b&&this.g.seekTo(a)};
g.h.tB=function(){if(m9(this)){var a=D8(this.g);this.l.Oa(this.R);a.muted?this.i.mute():this.i.unMute();this.i.setVolume(a.volume);this.R=this.l.L(this.i,"onVolumeChange",this.iz)}};
g.h.QA=function(){this.o.stop();if(!this.g.ga()){var a=D8(this.g);1==a.playerState&&l9(this,new g.UC(8));k9(this,y8(a));this.o.start()}};
g.h.RA=function(){this.B.stop();this.o.stop();var a=this.g.o.getReconnectTimeout();2==this.g.g&&!isNaN(a)&&this.B.start()};g.t(p9,g.V);p9.prototype.o=function(){B6("mdx-privacy-popup-cancel");this.l.hide()};
p9.prototype.B=function(){B6("mdx-privacy-popup-confirm");this.l.hide()};g.t(q9,g.V);q9.prototype.A=function(a){vsa(this,a.state)};g.t(r9,g.zU);r9.prototype.J=function(){var a=this.l.getOption("remote","receivers");a&&1<a.length&&!this.l.getOption("remote","quickCast")?(this.C=g.tb(a,this.B,this),g.BU(this,(0,g.ge)(a,this.B)),a=this.l.getOption("remote","currentReceiver"),this.ne(this.B(a)),this.enable(!0)):this.enable(!1)};
r9.prototype.B=function(a){return a.key};
r9.prototype.Be=function(a){return"cast-selector-receiver"==a?"Cast...":this.C[a].name};
r9.prototype.Nc=function(a){g.zU.prototype.Nc.call(this,a);this.l.setOption("remote","currentReceiver",this.C[a]);this.o.ob()};g.t(s9,g.uL);g.h=s9.prototype;
g.h.create=function(){msa(g.iz(g.X(this.player)));this.o.push(g.oq("yt-remote-before-disconnect",this.MI,this));this.o.push(g.oq("yt-remote-connection-change",this.ZK,this));this.o.push(g.oq("yt-remote-receiver-availability-change",this.sz,this));this.o.push(g.oq("yt-remote-auto-connect",this.XK,this));this.o.push(g.oq("yt-remote-receiver-resumed",this.WK,this));this.o.push(g.oq("mdx-privacy-popup-confirm",this.EM,this));this.o.push(g.oq("mdx-privacy-popup-cancel",this.DM,this));this.sz()};
g.h.load=function(){this.player.cancelPlayback();g.uL.prototype.load.call(this);this.A=new j9(this,this.player,this.g);var a=(a=rsa())?a.currentTime:0;var b=f9()?new C8(a9(),void 0):null;0==a&&b&&(a=y8(D8(b)));0!=a&&this.Pc(a);usa(this,this.mk,this.mk);g.BY(this.player.app,6)};
g.h.unload=function(){this.player.O("mdxautoplaycanceled");this.l=this.i;g.qf(this.A,this.g);this.g=this.A=null;g.uL.prototype.unload.call(this);g.BY(this.player.app,5);t9(this)};
g.h.V=function(){g.pq(this.o);g.uL.prototype.V.call(this)};
g.h.df=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.loaded&&this.A.Tx.apply(this.A,[a].concat(g.ea(c)))};
g.h.getAdState=function(){return this.Wm};
g.h.FD=function(){return this.loaded?this.A.suggestion:null};
g.h.Pe=function(){return this.g?D8(this.g).Pe:!1};
g.h.hasNext=function(){return this.g?D8(this.g).hasNext:!1};
g.h.Pc=function(a,b){this.J=a||0;this.player.O("progresssync",a,b)};
g.h.getCurrentTime=function(){return this.J};
g.h.getProgressState=function(){var a=D8(this.g),b=this.player.getVideoData();return{allowSeeking:g.O(g.X(this.player).experiments,"web_player_mdx_allow_seeking_change_killswitch")?this.player.fc():!a.isAdPlaying()&&this.player.fc(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.A?a.l+w8(a):a.l,isAtLiveHead:1>=(a.A?a.i+w8(a):a.i)-this.getCurrentTime(),loaded:a.G,seekableEnd:a.A?a.i+w8(a):a.i,seekableStart:0<a.o?a.o+
w8(a):a.o}};
g.h.nextVideo=function(){this.g&&this.g.nextVideo()};
g.h.ao=function(){this.g&&this.g.ao()};
g.h.MI=function(a){1==a&&(this.I=this.g?D8(this.g):null)};
g.h.ZK=function(){var a=f9()?new C8(a9(),void 0):null;if(a){var b=this.l;this.loaded&&this.unload();this.g=a;this.I=null;b.key!=this.i.key&&(this.l=b,this.load())}else g.pf(this.g),this.g=null,this.loaded&&(this.unload(),(a=this.I)&&a.videoId==this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,y8(a)));this.player.O("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.sz=function(){this.F=[this.i].concat(osa());var a=b9()||this.i;u9(this,a);this.player.na("onMdxReceiversChange")};
g.h.xM=function(a){!this.G&&g.hE(a,8)&&(this.player.pauseVideo(),t9(this))};
g.h.XK=function(){var a=b9();u9(this,a)};
g.h.WK=function(){this.l=b9()};
g.h.EM=function(){this.G=!0;t9(this);h9=!1;i9&&d9(i9,1);i9=null};
g.h.DM=function(){this.G=!1;t9(this);u9(this,this.i);this.l=this.i;h9=!1;i9=null;this.player.playVideo()};
g.h.yc=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.F;case "currentReceiver":return b&&("cast-selector-receiver"==b.key?s8():u9(this,b)),this.loaded?this.l:this.i;case "quickCast":return 2==this.F.length&&"cast-selector-receiver"==this.F[1].key?(b&&s8(),!0):!1}};
g.h.mt=function(){this.g.mt()};
g.h.Eb=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.QV.remote=s9;})(_yt_player);


}
/*
     FILE ARCHIVED ON 01:50:00 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:48:32 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.113
  exclusion.robots.policy: 0.095
  cdx.remote: 0.142
  esindex: 0.018
  LoadShardBlock: 435.773 (6)
  PetaboxLoader3.datanode: 307.9 (8)
  load_resource: 263.803 (2)
  PetaboxLoader3.resolve: 121.856 (2)
*/