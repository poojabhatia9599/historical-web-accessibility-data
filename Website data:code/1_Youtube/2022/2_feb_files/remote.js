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

(function(g){var window=this;'use strict';var UXa=function(a,b,c){null!=c&&(g.sd(a,b,1),a=a.i,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.we=b,g.ve=c,g.qd(a,g.we),g.qd(a,g.ve))},VXa=function(a,b,c){b=g.Cd(b,c);
null!=b&&(g.sd(a,c,0),a.i.i.push(b?1:0))},WXa=function(a,b){return g.rf(a,b)},XXa=function(a,b){b=b instanceof g.sg?b:g.yg(b,/^data:image\//i.test(b));
a.src=g.tg(b)},ZXa=function(a){g.E.call(this,a,-1,YXa)},$Xa=function(a){g.E.call(this,a)},cYa=function(){return[1,
aYa,2,bYa]},dYa=function(){return[1,
g.ds,$Xa,cYa]},eYa=function(a){g.E.call(this,a)},fYa=function(a){g.E.call(this,a)},hYa=function(){return[1,
g.fs,2,g.fs,3,gYa]},iYa=function(a){g.E.call(this,a)},kYa=function(){return[1,
g.fs,2,g.fs,3,jYa,4,gYa]},mYa=function(){return[1,
g.Me,fYa,hYa,lYa,2,g.Me,iYa,kYa,lYa]},qYa=function(){return[1,
nYa,g.Xi,2,oYa,g.Xi,3,pYa,g.Xi]},tYa=function(){return[1,
rYa,g.Wi,2,sYa,g.Wi,3,g.Me,ZXa,dYa,g.Wi]},vYa=function(){return[1,
g.ds,g.Ni,qYa,2,uYa,g.Ui,tYa]},zYa=function(){return[1,
g.fs,5,wYa,2,uYa,eYa,mYa,3,xYa,6,yYa,4,g.ds,g.Mi,vYa]},W6=function(a){g.Tl(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ta()).toString(36));
return a},X6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Yl(a.j,b,c)},AYa=function(a){if(a===g.wp)throw Error("ES6 Iteration protocol does NOT adjust control flow when StopIteration is thrown from callback helper functions. If your code relies on this behavior, consider throwing a different error and catching it to terminate iteration.");
throw a;},BYa=function(a){if(a instanceof g.up)return a;
if("function"==typeof a.Pg)return a.Pg(!1);if(g.Na(a)){var b=0,c=new g.up;c.next=function(){for(;;){if(b>=a.length)return g.k2;if(b in a)return g.vp(a[b++]);b++}};
var d=c.next;c.Mj=function(){return g.xp(d.call(c))};
return c}throw Error("Not implemented");},CYa=function(a,b,c){if(g.Na(a))try{g.uc(a,b,c)}catch(e){AYa(e)}else for(a=BYa(a);;){var d=void 0;
try{d=a.Mj()}catch(e){if(e===g.wp)break;throw e;}try{b.call(c,d,void 0,a)}catch(e){AYa(e)}}},DYa=function(a,b){var c=[];
CYa(b,function(d){try{var e=g.Nr.prototype.j.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.Qga(e)&&c.push(d)},a);
return c},EYa=function(a,b){DYa(a,b).forEach(function(c){g.Nr.prototype.remove.call(this,c)},a)},FYa=function(a){if(a.ea){if(a.ea.locationOverrideToken)return{locationOverrideToken:a.ea.locationOverrideToken};
if(null!=a.ea.latitudeE7&&null!=a.ea.longitudeE7)return{latitudeE7:a.ea.latitudeE7,longitudeE7:a.ea.longitudeE7}}return null},GYa=function(a,b){g.$b(a,b)||a.push(b)},Y6=function(a){var b=0,c;
for(c in a)b++;return b},HYa=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},Z6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return HYa(a)},IYa=function(a,b,c,d){var e=new g.Al(null,void 0);
a&&g.Bl(e,a);b&&g.Cl(e,b);c&&g.Dl(e,c);d&&(e.J=d);return e},$6=function(a,b){g.Ru[a]=!0;
var c=g.Pu();c&&c.publish.apply(c,arguments);g.Ru[a]=!1},a7=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.vr;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",JYa(this,a.capabilities||""),KYa(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},JYa=function(a,b){a.capabilities.clear();
g.Bp(b.split(","),g.Sa(WXa,LYa)).forEach(function(c){a.capabilities.add(c)})},KYa=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},b7=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},c7=function(a,b){return!!b&&(a.id==b||a.uuid==b)},MYa=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},NYa=function(a){return new b7(a)},OYa=function(a){return Array.isArray(a)?g.po(a,NYa):[]},d7=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},e7=function(a){return Array.isArray(a)?"["+g.po(a,d7).join(",")+"]":"null"},f7=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},PYa=function(a){return g.po(a,function(b){return{key:b.id,
name:b.name}})},g7=function(a,b){return g.Wb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},h7=function(a,b){return g.Wb(a,function(c){return c7(c,b)})},QYa=function(){var a=(0,g.gy)();
a&&EYa(a,a.i.Pg(!0))},i7=function(){var a=g.jy("yt-remote-connected-devices")||[];
g.qc(a);return a},RYa=function(a){if(g.ac(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.po(a,function(d,e){return 0==e?d:d.substring(c.length)})},SYa=function(a){g.iy("yt-remote-connected-devices",a,86400)},k7=function(){if(j7)return j7;
var a=g.jy("yt-remote-device-id");a||(a=f7(),g.iy("yt-remote-device-id",a,31536E3));for(var b=i7(),c=1,d=a;g.$b(b,d);)c++,d=a+"#"+c;return j7=d},l7=function(){var a=i7(),b=k7();
g.$b(a,b);g.ly()&&g.tc(a,b);a=RYa(a);if(g.ac(a))try{g.ska("remote_sid")}catch(c){}else try{g.Vt("remote_sid",a.join(","),-1)}catch(c){}},TYa=function(){return g.jy("yt-remote-session-browser-channel")},UYa=function(){return g.jy("yt-remote-local-screens")||[]},VYa=function(){g.iy("yt-remote-lounge-token-expiration",!0,86400)},WYa=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.po(UYa(),function(d){return d.loungeToken}),c=g.po(a,function(d){return d.loungeToken});
g.qo(c,function(d){return!g.$b(b,d)})&&VYa();
g.iy("yt-remote-local-screens",a,31536E3)},XYa=function(a,b){g.iy("yt-remote-session-browser-channel",a);
g.iy("yt-remote-session-screen-id",b);a=i7();b=k7();g.$b(a,b)||a.push(b);SYa(a);l7()},m7=function(a){a||(g.ky("yt-remote-session-screen-id"),g.ky("yt-remote-session-video-id"));
l7();a=i7();g.fc(a,k7());SYa(a)},YYa=function(){if(!n7){var a=g.Wr();
a&&(n7=new g.Kr(a))}},ZYa=function(){YYa();
return n7?!!n7.get("yt-remote-use-staging-server"):!1},o7=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},$Ya=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},aZa=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},p7=function(a){a.length?bZa(a.shift(),function(){p7(a)}):q7()},cZa=function(a){return"chrome-extension://"+a+"/cast_sender.js"},bZa=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Uk(d,g.Ar(a));(document.head||document.documentElement).appendChild(d)},dZa=function(){var a=o7(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220201000150/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220201000150/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},q7=function(){var a=aZa();
a&&a(!1,"No cast extension found")},r7=function(){if(eZa){var a=2,b=aZa(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;bZa("//web.archive.org/web/20220201000150/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",q7,c)}},fZa=function(){r7();
var a=dZa();a.push("//web.archive.org/web/20220201000150/https://www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},hZa=function(){r7();
var a=dZa();a.push.apply(a,g.u(gZa.map(cZa)));a.push("//web.archive.org/web/20220201000150/https://www.gstatic.com/eureka/clank/cast_sender.js");p7(a)},iZa=function(){this.i=s7();
this.i.Ny("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},jZa=function(){this.i=s7();
this.i.Ny("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},kZa=function(){this.i=s7();
this.i.Ny("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},t7=function(a,b,c){g.G.call(this);
this.I=null!=c?(0,g.Ra)(a,c):a;this.Zf=b;this.C=(0,g.Ra)(this.AR,this);this.i=!1;this.j=0;this.u=this.Pb=null;this.B=[]},u7=function(a,b,c){g.G.call(this);
this.B=null!=c?a.bind(c):a;this.Zf=b;this.u=null;this.i=!1;this.j=0;this.Pb=null},v7=function(a){a.Pb=g.Ei(function(){a.Pb=null;
a.i&&!a.j&&(a.i=!1,v7(a))},a.Zf);
var b=a.u;a.u=null;a.B.apply(null,b)},w7=function(){},x7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},z7=function(a){y7.dispatchEvent(new lZa(y7,a))},lZa=function(a,b){g.Ve.call(this,"statevent",a);
this.stat=b},A7=function(a,b,c,d){this.i=a;
this.u=b;this.N=c;this.J=d||1;this.j=45E3;this.B=new g.Zl(this);this.I=new g.Di;this.I.setInterval(250)},nZa=function(a,b,c){a.mu=1;
a.xn=W6(b.clone());a.Jq=c;a.C=!0;mZa(a,null)},B7=function(a,b,c,d,e){a.mu=1;
a.xn=W6(b.clone());a.Jq=null;a.C=c;e&&(a.LO=!1);mZa(a,d)},mZa=function(a,b){a.Pt=Date.now();
C7(a);a.Uo=a.xn.clone();X6(a.Uo,"t",a.J);a.cC=0;a.Pf=a.i.hE(a.i.Px()?b:null);0<a.TC&&(a.nB=new u7((0,g.Ra)(a.LP,a,a.Pf),a.TC));a.B.Pa(a.Pf,"readystatechange",a.BR);b=a.qp?g.yf(a.qp):{};a.Jq?(a.ZB="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.Pf.send(a.Uo,a.ZB,a.Jq,b)):(a.ZB="GET",a.LO&&!g.Ze&&(b.Connection="close"),a.Pf.send(a.Uo,a.ZB,null,b));a.i.Nj(1)},pZa=function(a,b){var c=a.cC,d=b.indexOf("\n",c);
if(-1==d)return D7;c=Number(b.substring(c,d));if(isNaN(c))return oZa;d+=1;if(d+c>b.length)return D7;b=b.substr(d,c);a.cC=d+c;return b},rZa=function(a,b){a.Pt=Date.now();
C7(a);var c=b?window.location.hostname:"";a.Uo=a.xn.clone();g.Tl(a.Uo,"DOMAIN",c);g.Tl(a.Uo,"t",a.J);try{a.dk=new ActiveXObject("htmlfile")}catch(m){E7(a);a.fn=7;z7(22);F7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in G7)f=G7[f];else if(f in qZa)f=G7[f]=qZa[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
G7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.Sg(g.kg("b/12014412"),d);a.dk.open();a.dk.write(g.Jg(c));a.dk.close();a.dk.parentWindow.m=(0,g.Ra)(a.GX,a);a.dk.parentWindow.d=(0,g.Ra)(a.UN,a,!0);a.dk.parentWindow.rpcClose=(0,g.Ra)(a.UN,a,!1);c=a.dk.createElement("DIV");a.dk.parentWindow.document.body.appendChild(c);d=g.xg(a.Uo.toString());d=g.ih(g.tg(d));d=g.Sg(g.kg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.Ug(c,d);a.i.Nj(1)},C7=function(a){a.fI=Date.now()+
a.j;
sZa(a,a.j)},sZa=function(a,b){if(null!=a.Du)throw Error("WatchDog timer not null");
a.Du=x7((0,g.Ra)(a.OX,a),b)},H7=function(a){a.Du&&(g.C.clearTimeout(a.Du),a.Du=null)},F7=function(a){a.i.zf()||a.Jp||a.i.Hy(a)},E7=function(a){H7(a);
g.Se(a.nB);a.nB=null;a.I.stop();g.am(a.B);if(a.Pf){var b=a.Pf;a.Pf=null;b.abort();b.dispose()}a.dk&&(a.dk=null)},I7=function(a,b){try{a.i.NN(a,b),a.i.Nj(4)}catch(c){}},uZa=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;tZa(a,b,function(k){k?c(!0):g.C.setTimeout(function(){uZa(a,b,c,d,f)},f)})}},tZa=function(a,b,c){var d=new Image;
d.onload=function(){try{J7(d),c(!0)}catch(e){}};
d.onerror=function(){try{J7(d),c(!1)}catch(e){}};
d.onabort=function(){try{J7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{J7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
XXa(d,a)},J7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},vZa=function(a){this.i=a;
this.j=new w7},wZa=function(a){var b=K7(a.i,a.wv,"/mail/images/cleardot.gif");
W6(b);uZa(b.toString(),5E3,(0,g.Ra)(a.rS,a),3,2E3);a.Nj(1)},M7=function(a){var b=a.i.W;
if(null!=b)z7(5),b?(z7(11),L7(a.i,a,!1)):(z7(12),L7(a.i,a,!0));else if(a.uh=new A7(a,void 0,void 0,void 0),a.uh.qp=a.UC,b=a.i,b=K7(b,b.Px()?a.Yu:null,a.VC),z7(5),!g.Nc||g.Gc(10))X6(b,"TYPE","xmlhttp"),B7(a.uh,b,!1,a.Yu,!1);else{X6(b,"TYPE","html");var c=a.uh;a=!!a.Yu;c.mu=3;c.xn=W6(b.clone());rZa(c,a)}},N7=function(a,b,c){this.i=1;
this.j=[];this.B=[];this.C=new w7;this.N=a||null;this.W=null!=b?b:null;this.I=c||!1},xZa=function(a,b){this.i=a;
this.map=b;this.context=null},yZa=function(a,b,c,d){g.Ve.call(this,"timingevent",a);
this.size=b;this.Fx=d},zZa=function(a){g.Ve.call(this,"serverreachability",a)},CZa=function(a){AZa(a);
if(3==a.i){var b=a.Sw++,c=a.yz.clone();g.Tl(c,"SID",a.u);g.Tl(c,"RID",b);g.Tl(c,"TYPE","terminate");O7(a,c);b=new A7(a,a.u,b,void 0);b.mu=2;b.xn=W6(c.clone());XXa(new Image,b.xn.toString());b.Pt=Date.now();C7(b)}BZa(a)},DZa=function(a){a.WS(1,0);
a.yz=K7(a,null,a.WC);P7(a)},AZa=function(a){a.Bn&&(a.Bn.abort(),a.Bn=null);
a.Qe&&(a.Qe.cancel(),a.Qe=null);a.Sl&&(g.C.clearTimeout(a.Sl),a.Sl=null);Q7(a);a.ah&&(a.ah.cancel(),a.ah=null);a.Ln&&(g.C.clearTimeout(a.Ln),a.Ln=null)},EZa=function(a,b){if(0==a.i)throw Error("Invalid operation: sending map when state is closed");
a.j.push(new xZa(a.IU++,b));2!=a.i&&3!=a.i||P7(a)},FZa=function(a){var b=0;
a.Qe&&b++;a.ah&&b++;return b},P7=function(a){a.ah||a.Ln||(a.Ln=x7((0,g.Ra)(a.SN,a),0),a.Js=0)},HZa=function(a,b){if(1==a.i){if(!b){a.Sw=Math.floor(1E5*Math.random());
b=a.Sw++;var c=new A7(a,"",b,void 0);c.qp=a.yk;var d=R7(a),e=a.yz.clone();g.Tl(e,"RID",b);g.Tl(e,"CVER","1");O7(a,e);nZa(c,e,d);a.ah=c;a.i=2}}else 3==a.i&&(b?GZa(a,b):0==a.j.length||a.ah||GZa(a))},GZa=function(a,b){if(b)if(6<a.Kp){a.j=a.B.concat(a.j);
a.B.length=0;var c=a.Sw-1;b=R7(a)}else c=b.N,b=b.Jq;else c=a.Sw++,b=R7(a);var d=a.yz.clone();g.Tl(d,"SID",a.u);g.Tl(d,"RID",c);g.Tl(d,"AID",a.ot);O7(a,d);c=new A7(a,a.u,c,a.Js+1);c.qp=a.yk;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.ah=c;nZa(c,d,b)},O7=function(a,b){a.Qf&&(a=a.Qf.mL())&&g.ef(a,function(c,d){g.Tl(b,d,c)})},R7=function(a){var b=Math.min(a.j.length,1E3),c=["count="+b];
if(6<a.Kp&&0<b){var d=a.j[0].i;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={xr:e.xr},f++){e.xr=a.j[f].i;var k=a.j[f].map;e.xr=6>=a.Kp?f:e.xr-d;try{g.ef(k,function(l){return function(m,n){c.push("req"+l.xr+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.xr+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.j.splice(0,b));
return c.join("&")},IZa=function(a){a.Qe||a.Sl||(a.J=1,a.Sl=x7((0,g.Ra)(a.RN,a),0),a.ls=0)},S7=function(a){if(a.Qe||a.Sl||3<=a.ls)return!1;
a.J++;a.Sl=x7((0,g.Ra)(a.RN,a),JZa(a,a.ls));a.ls++;return!0},L7=function(a,b,c){a.XB=c;
a.zk=b.Il;a.I||DZa(a)},Q7=function(a){null!=a.Sp&&(g.C.clearTimeout(a.Sp),a.Sp=null)},JZa=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},T7=function(a,b){if(2==b||9==b){var c=null;
a.Qf&&(c=null);var d=(0,g.Ra)(a.UY,a);c||(c=new g.Al("//web.archive.org/web/20220201000150/https://www.google.com/images/cleardot.gif"),W6(c));tZa(c.toString(),1E4,d)}else z7(2);KZa(a,b)},KZa=function(a,b){a.i=0;
a.Qf&&a.Qf.BK(b);BZa(a);AZa(a)},BZa=function(a){a.i=0;
a.zk=-1;if(a.Qf)if(0==a.B.length&&0==a.j.length)a.Qf.RD();else{var b=g.ic(a.B),c=g.ic(a.j);a.B.length=0;a.j.length=0;a.Qf.RD(b,c)}},K7=function(a,b,c){var d=g.Ul(c);
if(""!=d.i)b&&g.Cl(d,b+"."+d.i),g.Dl(d,d.u);else{var e=window.location;d=IYa(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Rv&&g.ef(a.Rv,function(f,k){g.Tl(d,k,f)});
g.Tl(d,"VER",a.Kp);O7(a,d);return d},LZa=function(){},MZa=function(){this.i=[];
this.j=[]},NZa=function(){},s7=function(){if(!U7){U7=new g.Gi(new NZa);
var a=g.kt("client_streamz_web_flush_count",-1);-1!==a&&(U7.B=a)}return U7},OZa=function(a,b){this.action=a;
this.params=b||{}},V7=function(a,b){g.G.call(this);
this.i=new g.K(this.xX,0,this);g.J(this,this.i);this.Zf=5E3;this.j=0;if("function"===typeof a)b&&(a=(0,g.Ra)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Ra)(a.handleEvent,a);else throw Error("Invalid listener argument");this.u=a},W7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.I=b;this.u=new g.Jr;this.j=new V7(this.vY,this);this.i=null;this.Y=!1;this.C=null;this.W="";this.N=this.B=0;this.J=[];this.ya=c;this.ea=d;this.Ha=e;this.xa=new iZa;this.Ia=new jZa;this.La=new kZa},PZa=function(a){return{firstTestResults:[""],
secondTestResults:!a.i.XB,sessionId:a.i.u,arrayId:a.i.ot}},QZa=function(a,b){a.N=b||0;
a.j.stop();X7(a);a.i&&(3==a.i.getState()&&HZa(a.i),CZa(a.i));a.N=0},Y7=function(a){return!!a.i&&3==a.i.getState()},X7=function(a){if(a.i){var b=a.ea(),c=a.i.yk||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.i.yk=c}},Z7=function(a){this.port=this.domain="";
this.i="/api/lounge";this.j=!0;a=a||document.location.href;var b=Number(g.vj(4,a))||"";b&&(this.port=":"+b);this.domain=g.wj(a)||"";a=g.yb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.xb(a,"10.0")&&(this.j=!1))},$7=function(a,b){var c=a.i;
a.j&&(c="https://"+a.domain+a.port+a.i);return g.Hj(c+b,{})},a8=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Sa(a.B,d,!0),onError:g.Sa(a.u,e),onTimeout:g.Sa(a.C,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Mt(b,a)},UZa=function(){var a=RZa;
SZa();b8.push(a);TZa()},c8=function(a,b){SZa();
var c=VZa(a,String(b));g.ac(b8)?WZa(c):(TZa(),g.uc(b8,function(d){d(c)}))},SZa=function(){b8||(b8=g.Ja("yt.mdx.remote.debug.handlers_")||[],g.Ia("yt.mdx.remote.debug.handlers_",b8,void 0))},WZa=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},TZa=function(){var a=b8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.uc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},VZa=function(a,b){var c=(Date.now()-XZa)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.tx.call(this);
this.I=a;this.screens=[]},YZa=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},ZZa=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.Bp(a.screens,function(f){return!!g7(b,f)});
for(var d=0,e=b.length;d<e;d++)c=YZa(a,b[d])||c;return c},$Za=function(a,b){var c=a.screens.length;
a.screens=g.Bp(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.tx.call(this);
this.u=a;this.J=b;this.B=c;this.I=d;this.C=e;this.j=0;this.i=null;this.Pb=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.j=a;this.i=NaN;i8(this);this.info("Initializing with "+e7(this.screens))},a_a=function(a){if(a.screens.length){var b=g.po(a.screens,function(d){return d.id}),c=$7(a.j,"/pairing/get_lounge_token_batch");
a8(a.j,c,{screen_ids:b.join(",")},(0,g.Ra)(a.wT,a),(0,g.Ra)(a.vT,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return ZZa(a,[]);
var b=OYa(UYa());b=g.Bp(b,function(c){return!c.uuid});
return ZZa(a,b)},k8=function(a,b){WYa(g.po(a.screens,MYa));
b&&VYa()},m8=function(a,b){g.tx.call(this);
this.I=b;b=(b=g.jy("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.I(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.$b(b,k)}this.i=c;this.C=a;this.u=this.B=NaN;this.j=null;l8("Initialized with "+g.mj(this.i))},n8=function(a,b,c){var d=$7(a.C,"/pairing/get_screen_availability");
a8(a.C,d,{lounge_token:b.token},(0,g.Ra)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Ra)(function(){c(!1)},a))},o8=function(a,b){a:if(Y6(b)!=Y6(a.i))var c=!1;
else{c=g.pf(b);for(var d=0,e=c.length;d<e;++d)if(!a.i[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.mj(a.i)),a.i=b,a.Z("screenChange"));b_a(a)},p8=function(a){isNaN(a.u)||g.It(a.u);
a.u=g.Gt((0,g.Ra)(a.WG,a),0<a.B&&a.B<g.Ta()?2E4:1E4)},l8=function(a){c8("OnlineScreenService",a)},c_a=function(a){var b={};
g.uc(a.I(),function(c){c.token?b[c.token]=c.id:this.xe("Requesting availability of screen w/o lounge token.")});
return b},b_a=function(a){a=g.pf(g.hf(a.i,function(b){return b}));
g.qc(a);a.length?g.iy("yt-remote-online-screen-ids",a.join(","),60):g.ky("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.B=a;this.J=b;this.i=this.j=null;this.u=[];this.C={};d_a(this)},f_a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.C[b]);var k=a.Jh(),l=c?h7(k,c):null;c&&(a.J||l)||(l=h7(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.i,m,function(n){e(n?m:null)})}else c?e_a(a,c,(0,g.Ra)(function(n){var p=r8(this,new b7({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.i,p,function(r){e(r?p:null)})},a),f):e(null)},g_a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},h_a=function(a,b,c){n8(a.i,b,c)},e_a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Mt($7(a.B,"/pairing/get_lounge_token_batch"),e)},i_a=function(a){a.screens=a.j.Jh();
var b=a.C,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+e7(a.screens))},d_a=function(a){s8(a);
a.j=new j8(a.B);a.j.subscribe("screenChange",(0,g.Ra)(a.FT,a));i_a(a);a.J||(a.u=OYa(g.jy("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+e7(a.u));a.i=new m8(a.B,(0,g.Ra)(a.Jh,a,!0));a.i.subscribe("screenChange",(0,g.Ra)(function(){this.Z("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=h7(a.u,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.u.push(b),a.J||j_a(a));s8(a);a.C[b.uuid]=b.id;g.iy("yt-remote-device-id-map",a.C,31536E3);return b},j_a=function(a){a=g.Bp(a.u,function(b){return"shortLived"!=b.idType});
g.iy("yt-remote-automatic-screen-cache",g.po(a,MYa))},s8=function(a){a.C=g.jy("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.tx.call(this);
this.ya=c;this.u=a;this.i=b;this.B=null},u8=function(a,b){a.B=b;
a.Z("sessionScreen",a.B)},k_a=function(a,b){a.B&&(a.B.token=b,r8(a.u,a.B));
a.Z("sessionScreen",a.B)},v8=function(a,b){c8(a.ya,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.j=null;this.ea=(0,g.Ra)(this.GR,this);this.xa=(0,g.Ra)(this.SX,this);this.Y=g.Gt(function(){l_a(d,null)},12E4);
this.J=this.C=this.I=this.N=0;this.va=!1;this.W="unknown"},x8=function(a,b){g.It(a.J);
a.J=0;0==b?m_a(a):a.J=g.Gt(function(){m_a(a)},b)},m_a=function(a){n_a(a,"getLoungeToken");
g.It(a.C);a.C=g.Gt(function(){o_a(a,null)},3E4)},n_a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.mj(void 0));
var c={};c.type=b;a.j?a.j.sendMessage("urn:x-cast:com.google.youtube.mdx",c,g.Ka,(0,g.Ra)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.mj(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.AL(b,function(c){u8(a,c)},function(){return a.Bg()},5)):a.Bg(Error("Waiting for session status timed out."))},q_a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);p_a(a,d,function(e){e?(a.va=!0,r8(a.u,d),u8(a,d),a.W="unknown",x8(a,c)):(g.ot(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Bg())},5)},l_a=function(a,b){g.It(a.Y);
a.Y=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?q_a(a,{name:a.i.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.ot(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.ot(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Bg(Error("Waiting for session status timed out."))},o_a=function(a,b){g.It(a.C);
a.C=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.W=c,x8(a,3E4)):(k_a(a,b.loungeToken),a.va=!1,a.W="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},p_a=function(a,b,c,d){g.It(a.I);
a.I=0;h_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Gt(function(){p_a(a,b,c,d-1)},300)})},r_a=function(a){g.It(a.N);
a.N=0;g.It(a.I);a.I=0;g.It(a.Y);a.Y=0;g.It(a.C);a.C=0;g.It(a.J);a.J=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.j=this.N=null;this.xa="";this.La=c;this.Ia=null;this.Y=g.Ka;this.W=NaN;this.Ha=(0,g.Ra)(this.HR,this);this.C=g.Ka;this.J=this.I=0;this.ea=!1;this.va="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.j)?0:b.getDialAppInfo))},s_a=function(a){a.C=a.u.pJ(a.xa,a.i.label,a.i.friendlyName,A8(a),function(b,c){a.C=g.Ka;
a.ea=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.C=g.Ka;
a.Bg(b)})},t_a=function(a){var b={};
b.pairingCode=a.xa;b.theme=a.La;ZYa()&&(b.env_useStageMdx=1);return g.Fj(b)},C8=function(a){return new Promise(function(b){a.xa=f7();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,t_a(a));b(c);s_a(a)}else a.Y=function(){g.It(a.W);a.Y=function(){};
a.W=NaN;var d=new chrome.cast.DialLaunchResponse(!0,t_a(a));b(d);s_a(a)},a.W=g.Gt(function(){a.Y()},100)})},v_a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new b7(b);return(new Promise(function(e){u_a(a,d,function(f){f?(a.ea=!0,r8(a.u,d),u8(a,d),B8(a,c)):g.ot(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},w_a=function(a,b){var c=a.N.receiver.label,d=a.i.friendlyName;
return(new Promise(function(e){f_a(a.u,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},u_a=function(a,b,c,d){g.It(a.I);
a.I=0;h_a(a.u,b,function(e){e||0>d?c(e):a.I=g.Gt(function(){u_a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.It(a.J),a.J=0,0==b?x_a(a):a.J=g.Gt(function(){x_a(a)},b))},x_a=function(a){A8(a)&&a.j.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,B8(a,3E4)):(a.ea=!1,a.va="unknown",k_a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";B8(a,3E4)})},y_a=function(a){g.It(a.I);
a.I=0;g.It(a.J);a.J=0;a.C();a.C=function(){};
g.It(a.W)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.j=g.Gt((0,g.Ra)(this.qt,this,null),150)},E8=function(a,b){g.tx.call(this);
this.config_=b;this.j=a;this.N=b.appId||"233637DE";this.B=b.theme||"cl";this.W=b.disableCastApi||!1;this.I=b.forceMirroring||!1;this.i=null;this.J=!1;this.u=[];this.C=(0,g.Ra)(this.LW,this)},z_a=function(a,b){return b?g.Wb(a.u,function(c){return c7(b,c.label)},a):null},F8=function(a){c8("Controller",a)},RZa=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.J||!!a.u.length||!!a.i},H8=function(a,b,c){b!=a.i&&(g.Se(a.i),(a.i=b)?(c?a.Z("yt-remote-cast2-receiver-resumed",
b.i):a.Z("yt-remote-cast2-receiver-selected",b.i),b.subscribe("sessionScreen",(0,g.Ra)(a.QN,a,b)),b.subscribe("sessionFailed",function(){return A_a(a,b)}),b.getScreen()?a.Z("yt-remote-cast2-session-change",b.getScreen()):c&&a.i.qt(null)):a.Z("yt-remote-cast2-session-change",null))},A_a=function(a,b){a.i==b&&a.Z("yt-remote-cast2-session-failed")},B_a=function(a){var b=a.j.oJ(),c=a.i&&a.i.i;
a=g.po(b,function(d){c&&c7(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=z_a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},G_a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):C_a()?D_a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?E_a(a,c):(window.__onGCastApiAvailable=function(e,f){e?E_a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.ky("yt-remote-cast-available"),g.ky("yt-remote-cast-receiver"),
F_a(),c(!1))},d.loadCastApiSetupScript?g.my("https://web.archive.org/web/20220201000150/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=o7()&&fZa():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?q7():89<=o7()?hZa():(r7(),p7(gZa.map(cZa))))):I8("Cannot initialize because not running Chrome")},F_a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ia("yt.mdx.remote.cloudview.instance_",null,void 0);H_a(!1);g.Uu(N8);N8.length=0},O8=function(){return!!g.jy("yt-remote-cast-installed")},I_a=function(){var a=g.jy("yt-remote-cast-receiver");
return a?a.friendlyName:null},J_a=function(){I8("clearCurrentReceiver");
g.ky("yt-remote-cast-receiver")},K_a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.Tu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},C_a=function(){var a=0<=g.yb().search(/ (CrMo|Chrome|CriOS)\//);
return g.Uz||a},L_a=function(a,b){M8().init(a,b)},D_a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.iy("yt-remote-cast-available",d);$6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.iy("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.iy("yt-remote-cast-receiver",d);$6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+d7(d));
d||g.ky("yt-remote-cast-receiver");$6("yt-remote-cast2-session-change",d)}),g.Ia("yt.mdx.remote.cloudview.instance_",a,void 0),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ja("yt.mdx.remote.cloudview.instance_")},E_a=function(a,b){L8(!0);
J8(!1);L_a(a,function(c){c?(H_a(!0),g.Vu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.ky("yt-remote-cast-available"),g.ky("yt-remote-cast-receiver"),F_a());b(c)})},I8=function(a){c8("cloudview",a)},K8=function(a){c8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.iy("yt-remote-cast-installed",a)},P8=function(){return!!g.Ja("yt.mdx.remote.cloudview.apiReady_")},H_a=function(a){I8("setApiReady_ "+a);
g.Ia("yt.mdx.remote.cloudview.apiReady_",a,void 0)},J8=function(a){g.Ia("yt.mdx.remote.cloudview.initializing_",a,void 0)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.I=this.J=0;this.trackData=null;this.hasNext=this.Xk=!1;this.N=this.C=this.i=this.B=0;this.u=NaN;this.j=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.Xk=!1;a.hasNext=!1;a.J=0;a.I=g.Ta();a.B=0;a.i=0;a.C=0;a.N=0;a.u=NaN;a.j=!1},U8=function(a){return a.Ic()?(g.Ta()-a.I)/1E3:0},V8=function(a,b){a.J=b;
a.I=g.Ta()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ta()-a.I)/1E3+a.J;
case -1E3:return 0}return a.J},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.zf(a.trackData);b.hasPrevious=a.Xk;b.hasNext=a.hasNext;b.playerTime=a.J;b.playerTimeAt=a.I;b.seekableStart=a.B;b.seekableEnd=a.i;b.duration=a.C;b.loadedTime=a.N;b.liveIngestionTime=a.u;return b},$8=function(a,b){g.tx.call(this);
this.u=0;this.B=a;this.I=[];this.C=new MZa;this.j=this.i=null;this.W=(0,g.Ra)(this.rV,this);this.J=(0,g.Ra)(this.bx,this);this.N=(0,g.Ra)(this.qV,this);this.Y=(0,g.Ra)(this.yV,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.nH,this),M_a(this))):c=3;0!=c&&(b?this.nH(c):g.Gt((0,g.Ra)(function(){this.nH(c)},this),0));
(a=K_a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Y)},a9=function(a){return new S8(a.B.getPlayerContextData())},M_a=function(a){g.uc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.I.push(this.B.subscribe(b,g.Sa(this.JW,b),this))},a)},N_a=function(a){g.uc(a.I,function(b){this.B.unsubscribeByKey(b)},a);
a.I.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.C;
50>c.i.length+c.j.length&&a.C.j.push(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.B.sendMessage(b,c)},d9=function(a,b){N_a(a);
a.B.setPlayerContextData(Y8(b));M_a(a)},Z8=function(a,b){a.j&&(a.j.removeUpdateListener(a.W),a.j.removeMediaListener(a.J),a.bx(null));
a.j=b;a.j&&(c8("CP","Setting cast session: "+a.j.sessionId),a.j.addUpdateListener(a.W),a.j.addMediaListener(a.J),a.j.media.length&&a.bx(a.j.media[0]))},O_a=function(a){var b=a.i.media,c=a.i.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("CP","Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.i.getEstimatedTime());d9(a,d)}else c8("CP","No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Ra)(function(d){this.xe("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.xe("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},h9=function(a,b,c,d){d=void 0===d?!1:d;
g.tx.call(this);var e=this;this.C=NaN;this.va=!1;this.N=this.J=this.Y=this.ea=NaN;this.W=[];this.B=this.I=this.u=this.yc=this.i=null;this.Ha=a;this.ya=d;this.W.push(g.zu(window,"beforeunload",function(){e.Fs(2)}));
this.j=[];this.yc=new S8;this.Ia=b.id;this.xa=b.idType;this.i=P_a(this,c);this.i.subscribe("handlerOpened",this.vV,this);this.i.subscribe("handlerClosed",this.sV,this);this.i.subscribe("handlerError",this.tV,this);this.i.subscribe("handlerMessage",this.uV,this);this.i.zB(b.token);this.subscribe("remoteQueueChange",function(){var f=this.yc.videoId;g.ly()&&g.iy("yt-remote-session-video-id",f)},this)},Q_a=function(a){return g.Wb(a.j,function(b){return"LOUNGE_SCREEN"==b.type})},i9=function(a){c8("conn",
a)},P_a=function(a,b){return new W7($7(a.Ha,"/bc"),b,!1,function(){return a.tJ()},"shortLived"==a.xa)},j9=function(a,b){a.Z("proxyStateChange",b)},R_a=function(a){a.C=g.Gt(function(){i9("Connecting timeout");
a.Fs(1)},2E4)},k9=function(a){g.It(a.C);
a.C=NaN},l9=function(a){g.It(a.ea);
a.ea=NaN},S_a=function(a){m9(a);
a.Y=g.Gt(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.It(a.Y);
a.Y=NaN},U_a=function(a,b){var c=null;
if(b){var d=Q_a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ia("yt.mdx.remote.remoteClient_",c,void 0);b&&(k9(a),l9(a));c=Y7(a.i)&&isNaN(a.C);b==c?b&&(j9(a,1),n9(a,"getSubtitlesTrack")):b?(a.zL()&&a.yc.reset(),j9(a,1),n9(a,"getNowPlaying"),T_a(a)):a.Fs(1)},V_a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.yc.videoId&&(g.uf(b.params)?a.yc.trackData=null:a.yc.trackData=b.params,a.Z("remotePlayerChange"))},W_a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.yc.listId=b.params.listId||a.yc.listId;X8(a.yc,d,e);a.Z("remoteQueueChange",c)},Y_a=function(a,b){b.params=b.params||{};
W_a(a,b,"NOW_PLAYING_MAY_CHANGE");X_a(a,b);a.Z("autoplayDismissed")},X_a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.yc,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.yc.playerState&&(c=-1E3);a.yc.playerState=c;c=Number(b.params.loadedTime);a.yc.N=isNaN(c)?0:c;a.yc.Wj(Number(b.params.duration));c=a.yc;var d=Number(b.params.liveIngestionTime);c.u=d;c.j=isNaN(d)?!1:!0;c=a.yc;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.B=isNaN(d)?0:d;c.i=isNaN(b)?0:b;1==a.yc.playerState?S_a(a):m9(a);a.Z("remotePlayerChange")},Z_a=function(a,b){if(-1E3!=a.yc.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.yc.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.yc,isNaN(b)?0:b);a.Z("remotePlayerChange")}},$_a=function(a,b){var c="true"==b.params.muted;
a.yc.volume=parseInt(b.params.volume,10);a.yc.muted=c;a.Z("remotePlayerChange")},a0a=function(a,b){a.I=b.params.videoId;
a.Z("nowAutoplaying",parseInt(b.params.timeout,10))},b0a=function(a,b){var c="true"==b.params.hasNext;
a.yc.Xk="true"==b.params.hasPrevious;a.yc.hasNext=c;a.Z("previousNextChange")},T_a=function(a){g.It(a.N);
a.N=g.Gt(function(){a.Fs(1)},864E5)},n9=function(a,b,c){c?i9("Sending: action="+b+", params="+g.mj(c)):i9("Sending: action="+b);
a.i.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Xe=a;this.i=[];this.i.push(this.Xe.$_s("screenChange",(0,g.Ra)(this.LR,this)));this.i.push(this.Xe.$_s("onlineScreenChange",(0,g.Ra)(this.pW,this)))},f0a=function(a,b){YYa();
if(!n7||!n7.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;QYa();l7();p9||(p9=new Z7(b?b.loungeApiHost:void 0),ZYa()&&(p9.i="/api/loungedev"));q9||(q9=g.Ja("yt.mdx.remote.deferredProxies_")||[],g.Ia("yt.mdx.remote.deferredProxies_",q9,void 0));c0a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ia("yt.mdx.remote.screenService_",d,void 0);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ia("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1,void 0);G_a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){$6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ja("yt.mdx.remote.initialized_")&&(g.Ia("yt.mdx.remote.initialized_",!0,void 0),t9("Initializing: "+
g.mj(b)),u9.push(g.Tu("yt-remote-cast2-api-ready",function(){$6("yt-remote-api-ready")})),u9.push(g.Tu("yt-remote-cast2-availability-change",function(){$6("yt-remote-receiver-availability-change")})),u9.push(g.Tu("yt-remote-cast2-receiver-selected",function(){v9(null);
$6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.Tu("yt-remote-cast2-receiver-resumed",function(){$6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.Tu("yt-remote-cast2-session-change",d0a)),u9.push(g.Tu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),J_a())})),u9.push(g.Tu("yt-remote-cast2-session-failed",function(){$6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.mj(a)),a?(g.iy("yt-remote-session-app",a.app),g.iy("yt-remote-session-name",a.name)):(g.ky("yt-remote-session-app"),g.ky("yt-remote-session-name")),g.Ia("yt.mdx.remote.channelParams_",a,void 0),c.start(),s9()||e0a())}},g0a=function(){var a=r9().Xe.$_gos();
var b=y9();b&&z9()&&(g7(a,b)||a.push(b));return PYa(a)},A9=function(){var a=h0a();
!a&&O8()&&I_a()&&(a={key:"cast-selector-receiver",name:I_a()});return a},h0a=function(){var a=g0a(),b=y9();
b||(b=w9());return g.Wb(a,function(c){return b&&c7(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Jh();return h7(b,a)},d0a=function(a){t9("remote.onCastSessionChange_: "+d7(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.zB(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){c8("remote",a)},r9=function(){if(!G9){var a=g.Ja("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ja("yt.mdx.remote.currentScreenId_")},i0a=function(a){g.Ia("yt.mdx.remote.currentScreenId_",a,void 0)},j0a=function(){return g.Ja("yt.mdx.remote.connectData_")},v9=function(a){g.Ia("yt.mdx.remote.connectData_",a,void 0)},z9=function(){return g.Ja("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||i0a("");g.Ia("yt.mdx.remote.connection_",a,void 0);q9&&(g.uc(q9,function(c){c(a)}),q9.length=0);
b&&!a?$6("yt-remote-connection-change",!1):!b&&a&&$6("yt-remote-connection-change",!0)},w9=function(){var a=g.ly();
if(!a)return null;var b=r9();if(!b)return null;b=b.Jh();return h7(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{i0a(a.id);var c=g.Ja("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new h9(p9,a,x9(),c);a.connect(b,j0a());a.subscribe("beforeDisconnect",function(d){$6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},e0a=function(){var a=w9();
a?(t9("Resume connection to: "+d7(a)),D9(a,0)):(m7(),J_a(),t9("Skipping connecting because no session screen found."))},c0a=function(){var a=x9();
if(g.uf(a)){a=k7();var b=g.jy("yt-remote-session-name")||"",c=g.jy("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ia("yt.mdx.remote.channelParams_",a,void 0)}},x9=function(){return g.Ja("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.G.call(this);
var d=this;this.j=a;this.G=b;this.Xb=c;this.events=new g.sC(this);this.Y=this.events.S(this.G,"onVolumeChange",function(e){k0a(d,e)});
this.C=!1;this.I=new g.QI(64);this.i=new g.K(this.XO,500,this);this.u=new g.K(this.YO,1E3,this);this.N=new t7(this.nZ,0,this);this.B={};this.W=new g.K(this.DP,1E3,this);this.J=new u7(this.seekTo,1E3,this);this.ea=g.Ka;g.J(this,this.events);this.events.S(b,"onCaptionsTrackListChanged",this.aW);this.events.S(b,"captionschanged",this.oV);this.events.S(b,"captionssettingschanged",this.dP);this.events.S(b,"videoplayerreset",this.SA);this.events.S(b,"mdxautoplaycancel",function(){d.Xb.VK()});
a=this.Xb;a.isDisposed();a.subscribe("proxyStateChange",this.MN,this);a.subscribe("remotePlayerChange",this.ix,this);a.subscribe("remoteQueueChange",this.SA,this);a.subscribe("previousNextChange",this.JN,this);a.subscribe("nowAutoplaying",this.DN,this);a.subscribe("autoplayDismissed",this.gN,this);g.J(this,this.i);g.J(this,this.u);g.J(this,this.N);g.J(this,this.W);g.J(this,this.J);this.dP();this.SA();this.ix()},k0a=function(a,b){if(J9(a)){a.Xb.unsubscribe("remotePlayerChange",a.ix,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.Xb);if(c!==d.volume||b!==d.muted)a.Xb.setVolume(c,b),a.W.start();a.Xb.subscribe("remotePlayerChange",a.ix,a)}},l0a=function(a){a.Rb(0);
a.i.stop();a.Yb(new g.QI(64))},K9=function(a,b){if(J9(a)&&!a.C){var c=null;
b&&(c={style:a.G.getSubtitlesUserSettings()},g.Bf(c,b));a.Xb.sJ(a.G.getVideoData(1).videoId,c);a.B=a9(a.Xb).trackData}},L9=function(a,b){var c=a.G.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.G.getVideoData(1);a.Xb.playVideo(c.videoId,b,d,e,c.playerParams,c.Ya,FYa(c));a.Yb(new g.QI(1))},m0a=function(a,b){if(b){var c=a.G.getOption("captions","tracklist",{WL:1});
c&&c.length?(a.G.setOption("captions","track",b),a.C=!1):(a.G.loadModule("captions"),a.C=!0)}else a.G.setOption("captions","track",{})},J9=function(a){return a9(a.Xb).videoId===a.G.getVideoData(1).videoId},M9=function(){g.W.call(this,{D:"div",
K:"ytp-mdx-popup-dialog",V:{role:"dialog"},U:[{D:"div",K:"ytp-mdx-popup-dialog-inner-content",U:[{D:"div",K:"ytp-mdx-popup-title",qa:"You're signed out"},{D:"div",K:"ytp-mdx-popup-description",qa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{D:"div",K:"ytp-mdx-privacy-popup-buttons",U:[{D:"button",Ga:["ytp-button","ytp-mdx-privacy-popup-cancel"],qa:"Cancel"},{D:"button",Ga:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],qa:"Confirm"}]}]}]});this.i=new g.MK(this,250);this.cancelButton=this.Da("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Da("ytp-mdx-privacy-popup-confirm");g.J(this,this.i);this.S(this.cancelButton,"click",this.j);this.S(this.confirmButton,"click",this.u)},N9=function(a){g.W.call(this,{D:"div",
K:"ytp-remote",U:[{D:"div",K:"ytp-remote-display-status",U:[{D:"div",K:"ytp-remote-display-status-icon",U:[g.bK()]},{D:"div",K:"ytp-remote-display-status-text",qa:"{{statustext}}"}]}]});this.api=a;this.i=new g.MK(this,250);g.J(this,this.i);this.S(a,"presentingplayerstatechange",this.onStateChange);n0a(this,a.zb())},n0a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.V(b,128)?g.kH("Error on $RECEIVER_NAME",c):b.Ic()||g.V(b,4)?g.kH("Playing on $RECEIVER_NAME",c):g.kH("Connected to $RECEIVER_NAME",c);a.Ma("statustext",b);a.i.show()}else a.i.hide()},O9=function(a,b){g.tP.call(this,"Play on",0,a,b);
this.G=a;this.Ro={};this.S(a,"onMdxReceiversChange",this.C);this.S(a,"presentingplayerstatechange",this.C);this.C()},P9=function(a){g.tM.call(this,a);
this.il={key:f7(),name:"This computer"};this.ji=null;this.subscriptions=[];this.IG=this.Xb=null;this.Ro=[this.il];this.Dn=this.il;this.Hd=new g.QI(64);this.uM=0;this.Cf=-1;this.sx=!1;this.ox=this.Kt=null;if(!g.dE(this.player.T())&&!g.eE(this.player.T())){a=this.player;var b=g.WL(a);b&&(b=b.Vn())&&(b=new O9(a,b),g.J(this,b));b=new N9(a);g.J(this,b);g.fM(a,b.element,4);this.Kt=new M9;g.J(this,this.Kt);g.fM(a,this.Kt.element,4);this.sx=!!w9()}},Q9=function(a){a.ox&&(a.player.removeEventListener("presentingplayerstatechange",
a.ox),a.ox=null)},o0a=function(a,b,c){a.Hd=c;
a.player.Z("presentingplayerstatechange",new g.TG(c,b))},R9=function(a,b){if(b.key!==a.Dn.key)if(b.key===a.il.key)C9();
else{var c;(c=!a.player.T().L("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.sx||!a.Kt);(c?0:g.tE(a.player.T())||g.wE(a.player.T()))&&p0a(a);a.Dn=b;if(!a.player.T().L("disable_mdx_connection_in_mdx_module_for_music_web")||!g.eE(a.player.T())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.T().L("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.nM(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.Ya,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=FYa(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.mj(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?$6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Jh(),(b=h7(a,b.key))&&D9(b,1))}}},p0a=function(a){a.player.zb().Ic()?a.player.pauseVideo():(a.ox=function(b){!a.sx&&g.VG(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.ox));
a.Kt&&a.Kt.jd();z9()||(H9=!0)};
g.Yc.prototype.C=g.ca(0,function(){var a=g.bd(this);return 4294967296*g.bd(this)+(a>>>0)});
var aYa=g.ue(function(a,b,c){if(1!==a.j)return!1;g.D(b,c,g.hd(a));return!0},g.xe),sYa=g.ue(function(a,b,c,d){if(1!==a.j)return!1;
g.Ld(b,c,d,g.hd(a));return!0},g.xe),bYa=g.ue(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.Zc(a.i));return!0},g.ye),rYa=g.ue(function(a,b,c,d){if(0!==a.j)return!1;
g.Ld(b,c,d,g.Zc(a.i));return!0},g.ye),jYa=g.ue(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,g.ad(a.i));return!0},g.ze),oYa=g.ue(function(a,b,c,d){if(0!==a.j)return!1;
g.Ld(b,c,d,g.ad(a.i));return!0},g.ze),wYa=g.ue(function(a,b,c){if(1!==a.j)return!1;
g.D(b,c,a.i.C());return!0},function(a,b,c){UXa(a,c,g.Cd(b,c))}),yYa=g.ue(function(a,b,c){if(1!==a.j&&2!==a.j)return!1;
b=g.Ed(b,c);if(2==a.j){c=g.Yc.prototype.C;var d=g.ad(a.i);for(d=a.i.i+d;a.i.i<d;)b.push(c.call(a.i))}else b.push(a.i.C());return!0},function(a,b,c){b=g.Ed(b,c);
if(null!=b)for(var d=0;d<b.length;d++)UXa(a,c,b[d])}),gYa=g.ue(function(a,b,c){if(0!==a.j)return!1;
g.D(b,c,!!g.ad(a.i));return!0},VXa),pYa=g.ue(function(a,b,c,d){if(0!==a.j)return!1;
g.Ld(b,c,d,!!g.ad(a.i));return!0},VXa),xYa=g.ue(function(a,b,c){if(2!==a.j)return!1;
a=g.jd(a);g.Ed(b,c).push(a);return!0},function(a,b,c){b=g.Ed(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.vd(a,c,g.fb(e))}}),nYa=g.ue(function(a,b,c,d){if(2!==a.j)return!1;
g.Ld(b,c,d,g.jd(a));return!0},g.Ae),uYa=g.ue(function(a,b,c,d,e){if(2!==a.j)return!1;
g.gd(a,g.Md(b,d,c),e);return!0},g.De),YXa=[1];
g.v(ZXa,g.E);g.v($Xa,g.E);g.v(eYa,g.E);g.v(fYa,g.E);var lYa=[1,2];g.v(iYa,g.E);var qZa={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},G7={"'":"\\'"},LYa={J_:"atp",Zba:"ska",Eaa:"que",s9:"mus",Yba:"sus",e5:"dsp",cba:"seq",V8:"mic",a4:"dpa",Y_:"cds",q9:"mlm",X3:"dsdtr",Y9:"ntb"};a7.prototype.equals=function(a){return a?this.id==a.id:!1};
var n7,j7="",eZa=$Ya("loadCastFramework")||$Ya("loadCastApplicationFramework"),gZa=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ua(t7,g.G);g.h=t7.prototype;g.h.zR=function(a){this.B=arguments;this.i=!1;this.Pb?this.u=g.Ta()+this.Zf:this.Pb=g.Ei(this.C,this.Zf)};
g.h.stop=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null);this.u=null;this.i=!1;this.B=[]};
g.h.pause=function(){++this.j};
g.h.resume=function(){this.j&&(--this.j,!this.j&&this.i&&(this.i=!1,this.I.apply(null,this.B)))};
g.h.ra=function(){this.stop();t7.ue.ra.call(this)};
g.h.AR=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null);this.u?(this.Pb=g.Ei(this.C,this.u-g.Ta()),this.u=null):this.j?this.i=!0:(this.i=!1,this.I.apply(null,this.B))};g.v(u7,g.G);g.h=u7.prototype;g.h.nJ=function(a){this.u=arguments;this.Pb||this.j?this.i=!0:v7(this)};
g.h.stop=function(){this.Pb&&(g.C.clearTimeout(this.Pb),this.Pb=null,this.i=!1,this.u=null)};
g.h.pause=function(){this.j++};
g.h.resume=function(){this.j--;this.j||!this.i||this.Pb||(this.i=!1,v7(this))};
g.h.ra=function(){g.G.prototype.ra.call(this);this.stop()};w7.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
w7.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};var y7=new g.Uf;g.v(lZa,g.Ve);g.h=A7.prototype;g.h.qp=null;g.h.Vm=!1;g.h.Du=null;g.h.fI=null;g.h.Pt=null;g.h.mu=null;g.h.xn=null;g.h.Uo=null;g.h.Jq=null;g.h.Pf=null;g.h.cC=0;g.h.dk=null;g.h.ZB=null;g.h.fn=null;g.h.Xu=-1;g.h.LO=!0;g.h.Jp=!1;g.h.TC=0;g.h.nB=null;var oZa={},D7={};g.h=A7.prototype;g.h.setTimeout=function(a){this.j=a};
g.h.BR=function(a){a=a.target;var b=this.nB;b&&3==g.Uj(a)?b.nJ():this.LP(a)};
g.h.LP=function(a){try{if(a==this.Pf)a:{var b=g.Uj(this.Pf),c=this.Pf.j,d=this.Pf.getStatus();if(g.Nc&&!g.Gc(10)||g.Ze&&!g.Ec("420+")){if(4>b)break a}else if(3>b||3==b&&!g.lk(this.Pf))break a;this.Jp||4!=b||7==c||(8==c||0>=d?this.i.Nj(3):this.i.Nj(2));H7(this);var e=this.Pf.getStatus();this.Xu=e;var f=g.lk(this.Pf);if(this.Vm=200==e){4==b&&E7(this);if(this.C){for(a=!0;!this.Jp&&this.cC<f.length;){var k=pZa(this,f);if(k==D7){4==b&&(this.fn=4,z7(15),a=!1);break}else if(k==oZa){this.fn=4;z7(16);a=!1;
break}else I7(this,k)}4==b&&0==f.length&&(this.fn=1,z7(17),a=!1);this.Vm=this.Vm&&a;a||(E7(this),F7(this))}else I7(this,f);this.Vm&&!this.Jp&&(4==b?this.i.Hy(this):(this.Vm=!1,C7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.fn=3,z7(13)):(this.fn=0,z7(14)),E7(this),F7(this)}}catch(l){this.Pf&&g.lk(this.Pf)}finally{}};
g.h.GX=function(a){x7((0,g.Ra)(this.FX,this,a),0)};
g.h.FX=function(a){this.Jp||(H7(this),I7(this,a),C7(this))};
g.h.UN=function(a){x7((0,g.Ra)(this.EX,this,a),0)};
g.h.EX=function(a){this.Jp||(E7(this),this.Vm=a,this.i.Hy(this),this.i.Nj(4))};
g.h.cancel=function(){this.Jp=!0;E7(this)};
g.h.OX=function(){this.Du=null;var a=Date.now();0<=a-this.fI?(2!=this.mu&&this.i.Nj(3),E7(this),this.fn=2,z7(18),F7(this)):sZa(this,this.fI-a)};
g.h.getLastError=function(){return this.fn};g.h=vZa.prototype;g.h.UC=null;g.h.uh=null;g.h.oB=!1;g.h.ZO=null;g.h.xz=null;g.h.DF=null;g.h.VC=null;g.h.ai=null;g.h.Il=-1;g.h.Yu=null;g.h.wv=null;g.h.connect=function(a){this.VC=a;a=K7(this.i,null,this.VC);z7(3);this.ZO=Date.now();var b=this.i.N;null!=b?(this.Yu=b[0],(this.wv=b[1])?(this.ai=1,wZa(this)):(this.ai=2,M7(this))):(X6(a,"MODE","init"),this.uh=new A7(this,void 0,void 0,void 0),this.uh.qp=this.UC,B7(this.uh,a,!1,null,!0),this.ai=0)};
g.h.rS=function(a){if(a)this.ai=2,M7(this);else{z7(4);var b=this.i;b.zk=b.Bn.Il;T7(b,9)}a&&this.Nj(2)};
g.h.hE=function(a){return this.i.hE(a)};
g.h.abort=function(){this.uh&&(this.uh.cancel(),this.uh=null);this.Il=-1};
g.h.zf=function(){return!1};
g.h.NN=function(a,b){this.Il=a.Xu;if(0==this.ai)if(b){try{var c=this.j.parse(b)}catch(d){a=this.i;a.zk=this.Il;T7(a,2);return}this.Yu=c[0];this.wv=c[1]}else a=this.i,a.zk=this.Il,T7(a,2);else if(2==this.ai)if(this.oB)z7(7),this.DF=Date.now();else if("11111"==b){if(z7(6),this.oB=!0,this.xz=Date.now(),a=this.xz-this.ZO,!g.Nc||g.Gc(10)||500>a)this.Il=200,this.uh.cancel(),z7(12),L7(this.i,this,!0)}else z7(8),this.xz=this.DF=Date.now(),this.oB=!1};
g.h.Hy=function(){this.Il=this.uh.Xu;if(this.uh.Vm)0==this.ai?this.wv?(this.ai=1,wZa(this)):(this.ai=2,M7(this)):2==this.ai&&((!g.Nc||g.Gc(10)?!this.oB:200>this.DF-this.xz)?(z7(11),L7(this.i,this,!1)):(z7(12),L7(this.i,this,!0)));else{0==this.ai?z7(9):2==this.ai&&z7(10);var a=this.i;this.uh.getLastError();a.zk=this.Il;T7(a,2)}};
g.h.Px=function(){return this.i.Px()};
g.h.isActive=function(){return this.i.isActive()};
g.h.Nj=function(a){this.i.Nj(a)};g.h=N7.prototype;g.h.yk=null;g.h.Rv=null;g.h.ah=null;g.h.Qe=null;g.h.WC=null;g.h.yz=null;g.h.lK=null;g.h.Iy=null;g.h.Sw=0;g.h.IU=0;g.h.Qf=null;g.h.Ln=null;g.h.Sl=null;g.h.Sp=null;g.h.Bn=null;g.h.XB=null;g.h.ot=-1;g.h.tM=-1;g.h.zk=-1;g.h.Js=0;g.h.ls=0;g.h.Kp=8;g.Ua(yZa,g.Ve);g.Ua(zZa,g.Ve);g.h=N7.prototype;g.h.connect=function(a,b,c,d,e){z7(0);this.WC=b;this.Rv=c||{};d&&void 0!==e&&(this.Rv.OSID=d,this.Rv.OAID=e);this.I?(x7((0,g.Ra)(this.HK,this,a),100),DZa(this)):this.HK(a)};
g.h.HK=function(a){this.Bn=new vZa(this);this.Bn.UC=this.yk;this.Bn.j=this.C;this.Bn.connect(a)};
g.h.zf=function(){return 0==this.i};
g.h.getState=function(){return this.i};
g.h.SN=function(a){this.Ln=null;HZa(this,a)};
g.h.RN=function(){this.Sl=null;this.Qe=new A7(this,this.u,"rpc",this.J);this.Qe.qp=this.yk;this.Qe.TC=0;var a=this.lK.clone();g.Tl(a,"RID","rpc");g.Tl(a,"SID",this.u);g.Tl(a,"CI",this.XB?"0":"1");g.Tl(a,"AID",this.ot);O7(this,a);if(!g.Nc||g.Gc(10))g.Tl(a,"TYPE","xmlhttp"),B7(this.Qe,a,!0,this.Iy,!1);else{g.Tl(a,"TYPE","html");var b=this.Qe,c=!!this.Iy;b.mu=3;b.xn=W6(a.clone());rZa(b,c)}};
g.h.NN=function(a,b){if(0!=this.i&&(this.Qe==a||this.ah==a))if(this.zk=a.Xu,this.ah==a&&3==this.i)if(7<this.Kp){try{var c=this.C.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Sl){if(this.Qe)if(this.Qe.Pt+3E3<this.ah.Pt)Q7(this),this.Qe.cancel(),this.Qe=null;else break a;S7(this);z7(19)}}else this.tM=a[1],0<this.tM-this.ot&&37500>a[2]&&this.XB&&0==this.ls&&!this.Sp&&(this.Sp=x7((0,g.Ra)(this.lV,this),6E3));else T7(this,11)}else null!=b&&T7(this,11);else if(this.Qe==
a&&Q7(this),!g.lb(b))for(a=this.C.parse(b),b=0;b<a.length;b++)c=a[b],this.ot=c[0],c=c[1],2==this.i?"c"==c[0]?(this.u=c[1],this.Iy=c[2],c=c[3],null!=c?this.Kp=c:this.Kp=6,this.i=3,this.Qf&&this.Qf.DK(),this.lK=K7(this,this.Px()?this.Iy:null,this.WC),IZa(this)):"stop"==c[0]&&T7(this,7):3==this.i&&("stop"==c[0]?T7(this,7):"noop"!=c[0]&&this.Qf&&this.Qf.CK(c),this.ls=0)};
g.h.lV=function(){null!=this.Sp&&(this.Sp=null,this.Qe.cancel(),this.Qe=null,S7(this),z7(20))};
g.h.Hy=function(a){if(this.Qe==a){Q7(this);this.Qe=null;var b=2}else if(this.ah==a)this.ah=null,b=1;else return;this.zk=a.Xu;if(0!=this.i)if(a.Vm)if(1==b){b=Date.now()-a.Pt;var c=y7;c.dispatchEvent(new yZa(c,a.Jq?a.Jq.length:0,b,this.Js));P7(this);this.B.length=0}else IZa(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.zk)){if(d=1==b)this.ah||this.Ln||1==this.i||2<=this.Js?d=!1:(this.Ln=x7((0,g.Ra)(this.SN,this,a),JZa(this,this.Js)),this.Js++,d=!0);d=!(d||2==b&&S7(this))}if(d)switch(c){case 1:T7(this,
5);break;case 4:T7(this,10);break;case 3:T7(this,6);break;case 7:T7(this,12);break;default:T7(this,2)}}};
g.h.WS=function(a){if(!g.$b(arguments,this.i))throw Error("Unexpected channel state: "+this.i);};
g.h.UY=function(a){a?z7(2):(z7(1),KZa(this,8))};
g.h.hE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.Oj;a.N=!1;return a};
g.h.isActive=function(){return!!this.Qf&&this.Qf.isActive(this)};
g.h.Nj=function(a){var b=y7;b.dispatchEvent(new zZa(b,a))};
g.h.Px=function(){return!(!g.Nc||g.Gc(10))};
g.h=LZa.prototype;g.h.DK=function(){};
g.h.CK=function(){};
g.h.BK=function(){};
g.h.RD=function(){};
g.h.mL=function(){return{}};
g.h.isActive=function(){return!0};g.h=MZa.prototype;g.h.isEmpty=function(){return 0===this.i.length&&0===this.j.length};
g.h.clear=function(){this.i=[];this.j=[]};
g.h.contains=function(a){return g.$b(this.i,a)||g.$b(this.j,a)};
g.h.remove=function(a){var b=this.i;var c=(0,g.WRa)(b,a);0<=c?(g.ec(b,c),b=!0):b=!1;return b||g.fc(this.j,a)};
g.h.Bi=function(){for(var a=[],b=this.i.length-1;0<=b;--b)a.push(this.i[b]);var c=this.j.length;for(b=0;b<c;++b)a.push(this.j[b]);return a};NZa.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.q(a);for(var c=a.next();!c.done;c=a.next())c=g.Yi(c.value),c={serializedIncrementBatch:g.Jc(g.te(c,zYa))},g.Fv("streamzIncremented",c,{hH:b})}};var U7;g.Ua(V7,g.G);g.h=V7.prototype;g.h.xX=function(){this.Zf=Math.min(3E5,2*this.Zf);this.u();this.j&&this.start()};
g.h.start=function(){var a=this.Zf+15E3*Math.random();g.hr(this.i,a);this.j=Date.now()+a};
g.h.stop=function(){this.i.stop();this.j=0};
g.h.isActive=function(){return this.i.isActive()};
g.h.reset=function(){this.i.stop();this.Zf=5E3};g.Ua(W7,LZa);g.h=W7.prototype;g.h.subscribe=function(a,b,c){return this.u.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.u.unsubscribe(a,b,c)};
g.h.jg=function(a){return this.u.jg(a)};
g.h.Z=function(a,b){return this.u.Z.apply(this.u,arguments)};
g.h.dispose=function(){this.Y||(this.Y=!0,g.Se(this.u),QZa(this),g.Se(this.j),this.j=null,this.ea=function(){return""})};
g.h.isDisposed=function(){return this.Y};
g.h.connect=function(a,b,c){if(!this.i||2!=this.i.getState()){this.W="";this.j.stop();this.C=a||null;this.B=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new N7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.ya),e=this.i;e&&(e.Qf=null);d.Qf=this;this.i=d;X7(this);if(this.i){d=g.P("ID_TOKEN");var f=this.i.yk||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.i.yk=f}e?(3!=e.getState()&&0==FZa(e)||e.getState(),this.i.connect(a,b,this.I,e.u,e.ot)):c?this.i.connect(a,
b,this.I,c.sessionId,c.arrayId):this.i.connect(a,b,this.I)}};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.Bf(a,b);this.j.isActive()||2==(this.i?this.i.getState():0)?this.J.push(a):Y7(this)&&(X7(this),EZa(this.i,a))};
g.h.DK=function(){this.j.reset();this.C=null;this.B=0;if(this.J.length){var a=this.J;this.J=[];for(var b=0,c=a.length;b<c;++b)EZa(this.i,a[b])}this.Z("handlerOpened")};
g.h.BK=function(a){var b=2==a&&401==this.i.zk;4==a||b||this.j.start();this.Z("handlerError",a,b)};
g.h.RD=function(a,b){if(!this.j.isActive())this.Z("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.J.push(e)}this.xa.i.DI("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.i.AC("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.La.i.AC("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.mL=function(){var a={v:2};this.W&&(a.gsessionid=this.W);0!=this.B&&(a.ui=""+this.B);0!=this.N&&(a.ui=""+this.N);this.C&&g.Bf(a,this.C);return a};
g.h.CK=function(a){"S"==a[0]?this.W=a[1]:"gracefulReconnect"==a[0]?(this.j.start(),CZa(this.i)):this.Z("handlerMessage",new OZa(a[0],a[1]))};
g.h.zB=function(a){(this.I.loungeIdToken=a)||this.j.stop();if(this.Ha&&this.i){var b=this.i.yk||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.i.yk=b}};
g.h.vY=function(){this.j.isActive();0==FZa(this.i)&&this.connect(this.C,this.B)};Z7.prototype.B=function(a,b,c,d){b?a(d):a({text:c.responseText})};
Z7.prototype.u=function(a,b){a(Error("Request error: "+b.status))};
Z7.prototype.C=function(a){a(Error("request timed out"))};var XZa=Date.now(),b8=null,e8=Array(50),d8=-1,f8=!1;g.Ua(g8,g.tx);g8.prototype.Jh=function(){return this.screens};
g8.prototype.contains=function(a){return!!g7(this.screens,a)};
g8.prototype.get=function(a){return a?h7(this.screens,a):null};
g8.prototype.info=function(a){c8(this.I,a)};g.v(h8,g.tx);g.h=h8.prototype;g.h.start=function(){!this.i&&isNaN(this.Pb)&&this.fO()};
g.h.stop=function(){this.i&&(this.i.abort(),this.i=null);isNaN(this.Pb)||(g.It(this.Pb),this.Pb=NaN)};
g.h.ra=function(){this.stop();g.tx.prototype.ra.call(this)};
g.h.fO=function(){this.Pb=NaN;this.i=g.Mt($7(this.u,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.J},timeout:5E3,onSuccess:(0,g.Ra)(this.DR,this),onError:(0,g.Ra)(this.CR,this),onTimeout:(0,g.Ra)(this.ER,this)})};
g.h.DR=function(a,b){this.i=null;a=b.screen||{};a.dialId=this.B;a.name=this.I;b=-1;this.C&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.Z("pairingComplete",new b7(a),b)};
g.h.CR=function(a){this.i=null;a.status&&404==a.status?this.j>=q0a.length?this.Z("pairingFailed",Error("DIAL polling timed out")):(a=q0a[this.j],this.Pb=g.Gt((0,g.Ra)(this.fO,this),a),this.j++):this.Z("pairingFailed",Error("Server error "+a.status))};
g.h.ER=function(){this.i=null;this.Z("pairingFailed",Error("Server not responding"))};
var q0a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.Z("screenChange");!g.jy("yt-remote-lounge-token-expiration")&&a_a(this);g.It(this.i);this.i=g.Gt((0,g.Ra)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);YZa(this,a);k8(this,!1);this.Z("screenChange");b(a);a.token||a_a(this)};
g.h.remove=function(a,b){var c=i8(this);$Za(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.Z("screenChange")};
g.h.VB=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.Z("screenChange")};
g.h.ra=function(){g.It(this.i);j8.ue.ra.call(this)};
g.h.wT=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&c8(this.I,"Missed "+b+" lounge tokens.")};
g.h.vT=function(a){c8(this.I,"Requesting lounge tokens failed: "+a)};g.v(m8,g.tx);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.jy("yt-remote-fast-check-period")||"0",10);(this.B=g.Ta()-144E5<a?0:a)?p8(this):(this.B=g.Ta()+3E5,g.iy("yt-remote-fast-check-period",this.B),this.WG())};
g.h.isEmpty=function(){return g.uf(this.i)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.I(),b=g.hf(this.i,function(c,d){return c&&!!h7(a,d)},this);
o8(this,b)};
g.h.ra=function(){g.It(this.u);this.u=NaN;this.j&&(this.j.abort(),this.j=null);g.tx.prototype.ra.call(this)};
g.h.WG=function(){g.It(this.u);this.u=NaN;this.j&&this.j.abort();var a=c_a(this);if(Y6(a)){var b=$7(this.C,"/pairing/get_screen_availability");this.j=a8(this.C,b,{lounge_token:g.pf(a).join(",")},(0,g.Ra)(this.dX,this,a),(0,g.Ra)(this.cX,this))}else o8(this,{}),p8(this)};
g.h.dX=function(a,b){this.j=null;var c=g.pf(c_a(this));if(g.sc(c,g.pf(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.xe("Changing Screen set during request."),this.WG()};
g.h.cX=function(a){this.xe("Screen availability failed: "+a);this.j=null;p8(this)};
g.h.xe=function(a){c8("OnlineScreenService",a)};g.Ua(q8,g8);g.h=q8.prototype;g.h.start=function(){this.j.start();this.i.start();this.screens.length&&(this.Z("screenChange"),this.i.isEmpty()||this.Z("onlineScreenChange"))};
g.h.add=function(a,b,c){this.j.add(a,b,c)};
g.h.remove=function(a,b,c){this.j.remove(a,b,c);this.i.update()};
g.h.VB=function(a,b,c,d){this.j.contains(a)?this.j.VB(a,b,c,d):(a="Updating name of unknown screen: "+a.name,c8(this.I,a),d(Error(a)))};
g.h.Jh=function(a){return a?this.screens:g.hc(this.screens,g.Bp(this.u,function(b){return!this.contains(b)},this))};
g.h.oJ=function(){return g.Bp(this.Jh(!0),function(a){return!!this.i.i[a.id]},this)};
g.h.pJ=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.B,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.Se(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.Se(l);f(m)});
l.start();return(0,g.Ra)(l.stop,l)};
g.h.FR=function(a,b,c,d){g.Mt($7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Ra)(function(e,f){e=new b7(f.screen||{});if(!e.name||g_a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);g_a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Ra)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Ra)(function(){d(Error("pairing request timed out."))},this)})};
g.h.ra=function(){g.Se(this.j);g.Se(this.i);q8.ue.ra.call(this)};
g.h.FT=function(){i_a(this);this.Z("screenChange");this.i.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Ua(t8,g.tx);g.h=t8.prototype;g.h.getScreen=function(){return this.B};
g.h.Bg=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.Z("sessionFailed")),this.B=null,this.Z("sessionScreen",null))};
g.h.info=function(a){c8(this.ya,a)};
g.h.qJ=function(){return null};
g.h.mH=function(a){var b=this.i;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Ra)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Ra)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.ra=function(){this.mH("");t8.ue.ra.call(this)};g.v(w8,t8);g.h=w8.prototype;g.h.lH=function(a){if(this.j){if(this.j==a)return;v8(this,"Overriding cast session with new session object");r_a(this);this.va=!1;this.W="unknown";this.j.removeUpdateListener(this.ea);this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa)}this.j=a;this.j.addUpdateListener(this.ea);this.j.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa);n_a(this,"getMdxSessionStatus")};
g.h.qt=function(a){this.info("launchWithParams no-op for Cast: "+g.mj(a))};
g.h.stop=function(){this.j?this.j.stop((0,g.Ra)(function(){this.Bg()},this),(0,g.Ra)(function(){this.Bg(Error("Failed to stop receiver app."))},this)):this.Bg(Error("Stopping cast device without session."))};
g.h.mH=function(){};
g.h.ra=function(){this.info("disposeInternal");r_a(this);this.j&&(this.j.removeUpdateListener(this.ea),this.j.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.xa));this.j=null;t8.prototype.ra.call(this)};
g.h.SX=function(a,b){if(!this.isDisposed())if(b)if(b=Z6(b),g.Oa(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.mj(b)),a){case "mdxSessionStatus":l_a(this,b);break;case "loungeToken":o_a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.AL=function(a,b,c,d){g.It(this.N);this.N=0;f_a(this.u,this.i.label,a,this.i.friendlyName,(0,g.Ra)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.N=g.Gt((0,g.Ra)(this.AL,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.qJ=function(){return this.j};
g.h.GR=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Bg())};g.v(z8,t8);g.h=z8.prototype;g.h.lH=function(a){this.j=a;this.j.addUpdateListener(this.Ha)};
g.h.qt=function(a){this.Ia=a;this.Y()};
g.h.stop=function(){y_a(this);this.j?this.j.stop((0,g.Ra)(this.Bg,this,null),(0,g.Ra)(this.Bg,this,"Failed to stop DIAL device.")):this.Bg()};
g.h.ra=function(){y_a(this);this.j&&this.j.removeUpdateListener(this.Ha);this.j=null;t8.prototype.ra.call(this)};
g.h.HR=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.C(),this.C=g.Ka,this.Bg())};g.v(D8,t8);D8.prototype.stop=function(){this.Bg()};
D8.prototype.lH=function(){};
D8.prototype.qt=function(){g.It(this.j);this.j=NaN;var a=h7(this.u.Jh(),this.i.label);a?u8(this,a):this.Bg(Error("No such screen"))};
D8.prototype.ra=function(){g.It(this.j);this.j=NaN;t8.prototype.ra.call(this)};g.v(E8,g.tx);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.N,[chrome.cast.Capability.AUDIO_OUT]);this.W||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.I?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Ra)(this.OW,this);c=new chrome.cast.ApiConfig(c,(0,g.Ra)(this.ON,this),e,d,a);c.customDialLaunchCallback=(0,g.Ra)(this.HV,this);
chrome.cast.initialize(c,(0,g.Ra)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.C),UZa(),this.j.subscribe("onlineScreenChange",(0,g.Ra)(this.rJ,this)),this.u=B_a(this),chrome.cast.setCustomReceivers(this.u,g.Ka,(0,g.Ra)(function(f){this.xe("Failed to set initial custom receivers: "+g.mj(f))},this)),this.Z("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Ra)(function(f){this.xe("Failed to initialize API: "+g.mj(f));
b(!1)},this))};
g.h.zY=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.i){var c=this.i.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.i.i.friendlyName),H8(this,null)}if(a&&b){if(!this.i){c=h7(this.j.Jh(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=z_a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.u.push(a),chrome.cast.setCustomReceivers(this.u,g.Ka,(0,g.Ra)(function(d){this.xe("Failed to set initial custom receivers: "+g.mj(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.j,a),!0)}this.i.mH(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.AY=function(a){this.isDisposed()?this.xe("Setting connection data on disposed cast v2"):this.i?this.i.qt(a):this.xe("Setting connection data without a session")};
g.h.JR=function(){this.isDisposed()?this.xe("Stopping session on disposed cast v2"):this.i?(this.i.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Ra)(this.ON,this),(0,g.Ra)(this.gX,this))};
g.h.ra=function(){this.j.unsubscribe("onlineScreenChange",(0,g.Ra)(this.rJ,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.C);var a=RZa,b=g.Ja("yt.mdx.remote.debug.handlers_");g.fc(b||[],a);g.Se(this.i);g.tx.prototype.ra.call(this)};
g.h.xe=function(a){c8("Controller",a)};
g.h.QN=function(a,b){this.i==a&&(b||H8(this,null),this.Z("yt-remote-cast2-session-change",b))};
g.h.LW=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.i)if(this.i.i.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.i.i.friendlyName),this.i.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.i.getScreen()&&this.Z("yt-remote-cast2-session-change",this.i.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.j,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.j,a,this.B,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.j,a,this.config_));break;default:this.xe("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.i&&this.i.i.label==a.label?this.i.stop():this.xe("Stopping receiver w/o session: "+a.friendlyName)}else this.xe("onReceiverAction_ called without receiver.")};
g.h.HV=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.xe("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.i?this.i.i:null;if(!c||c.label!=b.label)return this.xe("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.i.getScreen())return F8("Reselecting dial screen."),
this.Z("yt-remote-cast2-session-change",this.i.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.xe('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.j,b,this.B,this.config_))}b=this.i;b.N=a;b.N.appState==chrome.cast.DialAppState.RUNNING?(a=b.N.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=v_a(b,{name:b.i.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.N.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.ot(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=w_a(b,c)):a=w_a(b,c)):a=C8(b);return a};
g.h.ON=function(a){var b=this;if(!this.isDisposed()&&!this.I){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.i)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.j,c,this.config_),!0);else{this.xe("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.i.i,e=h7(this.j.Jh(),
d.label);e&&c7(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.Se(this.i),this.i=new w8(this.j,c,this.config_),this.i.subscribe("sessionScreen",(0,g.Ra)(this.QN,this,this.i)),this.i.subscribe("sessionFailed",function(){return A_a(b,b.i)}),this.i.qt(null));
this.i.lH(a)}}};
g.h.IR=function(){return this.i?this.i.qJ():null};
g.h.gX=function(a){this.isDisposed()||(this.xe("Failed to estabilish a session: "+g.mj(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.Z("yt-remote-cast2-session-failed"))};
g.h.OW=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.J=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.Z("yt-remote-cast2-availability-change",G8(this))}};
g.h.rJ=function(){this.isDisposed()||(this.u=B_a(this),F8("Updating custom receivers: "+g.mj(this.u)),chrome.cast.setCustomReceivers(this.u,g.Ka,(0,g.Ra)(function(){this.xe("Failed to set custom receivers.")},this)),this.Z("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.AY;E8.prototype.setConnectedScreenStatus=E8.prototype.zY;E8.prototype.stopSession=E8.prototype.JR;E8.prototype.getCastSession=E8.prototype.IR;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.Xk=a.hasPrevious,this.hasNext=a.hasNext,this.J=a.playerTime,this.I=a.playerTimeAt,this.B=a.seekableStart,this.i=a.seekableEnd,this.C=a.duration,this.N=a.loadedTime,this.u=a.liveIngestionTime,this.j=
!isNaN(this.u))};
g.h.Ic=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.Wj=function(a){this.C=isNaN(a)?0:a};
g.h.getDuration=function(){return this.j?this.C+U8(this):this.C};
g.h.clone=function(){return new S8(Y8(this))};g.v($8,g.tx);g.h=$8.prototype;g.h.getState=function(){return this.u};
g.h.play=function(){b9(this)?(this.i?this.i.play(null,g.Ka,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.i?this.i.pause(null,g.Ka,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.Z("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.i){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Ic()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.i.seek(c,g.Ka,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.Z("remotePlayerChange")}else c9(this,g.Sa(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.i?this.i.stop(null,g.Ka,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.j){if(c.volume!=a){var d=Math.round(a)/100;this.j.setReceiverVolumeLevel(d,(0,g.Ra)(function(){c8("CP","set receiver volume: "+d)},this),(0,g.Ra)(function(){this.xe("failed to set receiver volume.")},this))}c.muted!=b&&this.j.setReceiverMuted(b,(0,g.Ra)(function(){c8("CP","set receiver muted: "+b)},this),(0,g.Ra)(function(){this.xe("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Sa(this.setVolume,a,b))};
g.h.sJ=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.mj(b.style),g.Bf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Sa(this.sJ,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Sa(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.mj(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.gB=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Sa(this.gB,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Sa(this.nextVideo,a,b))};
g.h.ws=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.Z("remotePlayerChange")}else c9(this,this.ws)};
g.h.VK=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.VK)};
g.h.dispose=function(){if(3!=this.u){var a=this.u;this.u=3;this.Z("proxyStateChange",a,this.u)}g.tx.prototype.dispose.call(this)};
g.h.ra=function(){N_a(this);this.B=null;this.C.clear();Z8(this,null);g.tx.prototype.ra.call(this)};
g.h.nH=function(a){if((a!=this.u||2==a)&&3!=this.u&&0!=a){var b=this.u;this.u=a;this.Z("proxyStateChange",b,a);if(1==a)for(;!this.C.isEmpty();)b=a=this.C,0===b.i.length&&(b.i=b.j,b.i.reverse(),b.j=[]),a.i.pop().apply(this);else 3==a&&this.dispose()}};
g.h.JW=function(a,b){this.Z(a,b)};
g.h.rV=function(a){if(!a)this.bx(null),Z8(this,null);else if(this.j.receiver.volume){a=this.j.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("CP","Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.bx=function(a){c8("CP","Cast media: "+!!a);this.i&&this.i.removeUpdateListener(this.N);if(this.i=a)this.i.addUpdateListener(this.N),O_a(this),this.Z("remotePlayerChange")};
g.h.qV=function(a){a?(O_a(this),this.Z("remotePlayerChange")):this.bx(null)};
g.h.HH=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.yV=function(){var a=K_a();a&&Z8(this,a)};
g.h.xe=function(a){c8("CP",a)};g.v(h9,g.tx);g.h=h9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.ya&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.yc.listId=c);this.yc.videoId=d;this.yc.index=l||0;this.yc.state=3;V8(this.yc,
n);this.B="UNSUPPORTED";c=this.ya?"setInitialState":"setPlaylist";i9("Connecting with "+c+" and params: "+g.mj(m));this.i.connect({method:c,params:g.mj(m)},a,TYa())}else i9("Connecting without params"),this.i.connect({},a,TYa());R_a(this)};
g.h.zB=function(a){this.i.zB(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ia("yt.mdx.remote.remoteClient_",null,void 0),this.Z("beforeDispose"),j9(this,3));g.tx.prototype.dispose.call(this)};
g.h.ra=function(){k9(this);m9(this);l9(this);g.It(this.J);this.J=NaN;g.It(this.N);this.N=NaN;this.u=null;g.Au(this.W);this.W.length=0;this.i.dispose();g.tx.prototype.ra.call(this);this.B=this.I=this.j=this.yc=this.i=null};
g.h.vV=function(){var a=this;i9("Channel opened");this.va&&(this.va=!1,l9(this),this.ea=g.Gt(function(){i9("Timing out waiting for a screen.");a.Fs(1)},15E3));
XYa(PZa(this.i),this.Ia)};
g.h.sV=function(){i9("Channel closed");isNaN(this.C)?m7(!0):m7();this.dispose()};
g.h.tV=function(a,b){m7();isNaN(this.lw())?(b&&"shortLived"==this.xa&&this.Z("browserChannelAuthError",a),i9("Channel error: "+a+" without reconnection"),this.dispose()):(this.va=!0,i9("Channel error: "+a+" with reconnection in "+this.lw()+" ms"),j9(this,2))};
g.h.fM=function(a){if(!this.j||0===this.j.length)return!1;for(var b=g.q(this.j),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.uV=function(a){a.params?i9("Received: action="+a.action+", params="+g.mj(a.params)):i9("Received: action="+a.action+" {}");switch(a.action){case "loungeStatus":a=Z6(a.params.devices);this.j=g.po(a,function(c){return new a7(c)});
a=!!g.Wb(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
U_a(this,a);a=this.fM("mlm");this.Z("multiStateLoopEnabled",a);break;case "loungeScreenDisconnected":g.gc(this.j,function(c){return"LOUNGE_SCREEN"==c.type});
U_a(this,!1);break;case "remoteConnected":var b=new a7(Z6(a.params.device));g.Wb(this.j,function(c){return c.equals(b)})||GYa(this.j,b);
break;case "remoteDisconnected":b=new a7(Z6(a.params.device));g.gc(this.j,function(c){return c.equals(b)});
break;case "gracefulDisconnect":break;case "playlistModified":W_a(this,a,"QUEUE_MODIFIED");break;case "nowPlaying":Y_a(this,a);break;case "onStateChange":X_a(this,a);break;case "onAdStateChange":Z_a(this,a);break;case "onVolumeChanged":$_a(this,a);break;case "onSubtitlesTrackChanged":V_a(this,a);break;case "nowAutoplaying":a0a(this,a);break;case "autoplayDismissed":this.Z("autoplayDismissed");break;case "autoplayUpNext":this.I=a.params.videoId||null;this.Z("autoplayUpNext",this.I);break;case "onAutoplayModeChanged":this.B=
a.params.autoplayMode;this.Z("autoplayModeChange",this.B);"DISABLED"==this.B&&this.Z("autoplayDismissed");break;case "onHasPreviousNextChanged":b0a(this,a);break;case "requestAssistedSignIn":this.Z("assistedSignInRequested",a.params.authCode);break;case "onLoopModeChanged":this.Z("loopModeChange",a.params.loopMode);break;default:i9("Unrecognized action: "+a.action)}};
g.h.pT=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.lw())?Y7(this.i)&&isNaN(this.C)&&(a=1):a=2);return a};
g.h.Fs=function(a){i9("Disconnecting with "+a);g.Ia("yt.mdx.remote.remoteClient_",null,void 0);k9(this);this.Z("beforeDisconnect",a);1==a&&m7();QZa(this.i,a);this.dispose()};
g.h.nT=function(){var a=this.yc;this.u&&(a=this.yc.clone(),X8(a,this.u,a.index));return Y8(a)};
g.h.BY=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.yc.videoId&&(this.u=c.videoId,g.It(this.J),this.J=g.Gt(function(){if(b.u){var e=b.u;b.u=null;b.yc.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.yc.listId==c.listId&&this.yc.videoId==c.videoId&&this.yc.index==c.index||d.push("remoteQueueChange");this.yc.playerState==c.playerState&&this.yc.volume==c.volume&&this.yc.muted==c.muted&&W8(this.yc)==W8(c)&&g.mj(this.yc.trackData)==g.mj(c.trackData)||d.push("remotePlayerChange");this.yc.reset(a);g.uc(d,function(e){this.Z(e)},this)};
g.h.zL=function(){var a=this.i.I.id,b=g.Wb(this.j,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.lw=function(){var a=this.i;return a.j.isActive()?a.j.j-Date.now():NaN};
g.h.kT=function(){return this.B||"UNSUPPORTED"};
g.h.lT=function(){return this.I||""};
g.h.KR=function(){if(!isNaN(this.lw())){var a=this.i.j;g.ir(a.i);a.start()}};
g.h.yY=function(a,b){n9(this,a,b);T_a(this)};
g.h.tJ=function(){var a=g.Wt("SID","")||"",b=g.Wt("SAPISID","")||"",c=g.Wt("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.Jc(g.ib(a),2);b=g.Jc(g.ib(b),2);c=g.Jc(g.ib(c),2);return g.Jc(g.ib(a+","+b+","+c),2)};
h9.prototype.subscribe=h9.prototype.subscribe;h9.prototype.unsubscribeByKey=h9.prototype.jg;h9.prototype.getProxyState=h9.prototype.pT;h9.prototype.disconnect=h9.prototype.Fs;h9.prototype.getPlayerContextData=h9.prototype.nT;h9.prototype.setPlayerContextData=h9.prototype.BY;h9.prototype.getOtherConnectedRemoteId=h9.prototype.zL;h9.prototype.getReconnectTimeout=h9.prototype.lw;h9.prototype.getAutoplayMode=h9.prototype.kT;h9.prototype.getAutoplayVideoId=h9.prototype.lT;h9.prototype.reconnect=h9.prototype.KR;
h9.prototype.sendMessage=h9.prototype.yY;h9.prototype.getXsrfToken=h9.prototype.tJ;h9.prototype.isCapabilitySupportedOnConnectedDevices=h9.prototype.fM;g.v(o9,g8);g.h=o9.prototype;g.h.Jh=function(a){return this.Xe.$_gs(a)};
g.h.contains=function(a){return!!this.Xe.$_c(a)};
g.h.get=function(a){return this.Xe.$_g(a)};
g.h.start=function(){this.Xe.$_st()};
g.h.add=function(a,b,c){this.Xe.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Xe.$_r(a,b,c)};
g.h.VB=function(a,b,c,d){this.Xe.$_un(a,b,c,d)};
g.h.ra=function(){for(var a=0,b=this.i.length;a<b;++a)this.Xe.$_ubk(this.i[a]);this.i.length=0;this.Xe=null;g8.prototype.ra.call(this)};
g.h.LR=function(){this.Z("screenChange")};
g.h.pW=function(){this.Z("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.FR;q8.prototype.$_gsppc=q8.prototype.pJ;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.VB;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Jh;q8.prototype.$_gos=q8.prototype.oJ;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.jg;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.v(I9,g.G);g.h=I9.prototype;g.h.ra=function(){g.G.prototype.ra.call(this);this.i.stop();this.u.stop();this.N.stop();this.ea();var a=this.Xb;a.unsubscribe("proxyStateChange",this.MN,this);a.unsubscribe("remotePlayerChange",this.ix,this);a.unsubscribe("remoteQueueChange",this.SA,this);a.unsubscribe("previousNextChange",this.JN,this);a.unsubscribe("nowAutoplaying",this.DN,this);a.unsubscribe("autoplayDismissed",this.gN,this);this.Xb=this.j=null};
g.h.Fj=function(a){var b=g.Ca.apply(1,arguments);if(2!=this.Xb.u)if(J9(this)){var c=a;if(!a9(this.Xb).isAdPlaying()||"control_seek"!==c)switch(c){case "control_toggle_play_pause":a9(this.Xb).Ic()?this.Xb.pause():this.Xb.play();break;case "control_play":this.Xb.play();break;case "control_pause":this.Xb.pause();break;case "control_seek":this.J.nJ(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.G.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.oV=function(a){this.N.zR(a)};
g.h.nZ=function(a){this.Fj("control_subtitles_set_track",g.uf(a)?null:a)};
g.h.dP=function(){var a=this.G.getOption("captions","track");g.uf(a)||K9(this,a)};
g.h.Rb=function(a){this.j.Rb(a,this.G.getVideoData().lengthSeconds)};
g.h.aW=function(){g.uf(this.B)||m0a(this,this.B);this.C=!1};
g.h.MN=function(a,b){this.u.stop();2===b&&this.YO()};
g.h.ix=function(){if(J9(this)){this.i.stop();var a=a9(this.Xb);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.j.Cf=1;break;case 1082:case 1083:this.j.Cf=0;break;default:this.j.Cf=-1}switch(a.playerState){case 1081:case 1:this.Yb(new g.QI(8));this.XO();break;case 1085:case 3:this.Yb(new g.QI(9));break;case 1083:case 0:this.Yb(new g.QI(2));this.J.stop();this.Rb(this.G.getVideoData().lengthSeconds);break;case 1084:this.Yb(new g.QI(4));break;case 2:this.Yb(new g.QI(4));this.Rb(W8(a));
break;case -1:this.Yb(new g.QI(64));break;case -1E3:this.Yb(new g.QI(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",rE:2}))}a=a9(this.Xb).trackData;var b=this.B;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.B=a,m0a(this,a));a=a9(this.Xb);-1===a.volume||Math.round(this.G.getVolume())===a.volume&&this.G.isMuted()===a.muted||this.W.isActive()||this.DP()}else l0a(this)};
g.h.JN=function(){this.G.Z("mdxpreviousnextchange")};
g.h.SA=function(){J9(this)||l0a(this)};
g.h.DN=function(a){isNaN(a)||this.G.Z("mdxnowautoplaying",a)};
g.h.gN=function(){this.G.Z("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.Xb.setAudioTrack(this.G.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.Xb).playerState?L9(this,a):b&&this.Xb.seekTo(a)};
g.h.DP=function(){var a=this;if(J9(this)){var b=a9(this.Xb);this.events.xc(this.Y);b.muted?this.G.mute():this.G.unMute();this.G.setVolume(b.volume);this.Y=this.events.S(this.G,"onVolumeChange",function(c){k0a(a,c)})}};
g.h.XO=function(){this.i.stop();if(!this.Xb.isDisposed()){var a=a9(this.Xb);a.Ic()&&this.Yb(new g.QI(8));this.Rb(W8(a));this.i.start()}};
g.h.YO=function(){this.u.stop();this.i.stop();var a=this.Xb.B.getReconnectTimeout();2==this.Xb.u&&!isNaN(a)&&this.u.start()};
g.h.Yb=function(a){this.u.stop();var b=this.I;if(!g.VI(b,a)){var c=g.V(a,2);c!==g.V(this.I,2)&&this.G.Vt(c);this.I=a;o0a(this.j,b,a)}};g.v(M9,g.W);M9.prototype.jd=function(){this.i.show()};
M9.prototype.Db=function(){this.i.hide()};
M9.prototype.j=function(){$6("mdx-privacy-popup-cancel");this.Db()};
M9.prototype.u=function(){$6("mdx-privacy-popup-confirm");this.Db()};g.v(N9,g.W);N9.prototype.onStateChange=function(a){n0a(this,a.state)};g.v(O9,g.tP);O9.prototype.C=function(){var a=this.G.getOption("remote","receivers");a&&1<a.length&&!this.G.getOption("remote","quickCast")?(this.Ro=g.vc(a,this.i,this),g.uP(this,g.po(a,this.i)),a=this.G.getOption("remote","currentReceiver"),a=this.i(a),this.options[a]&&this.Zh(a),this.enable(!0)):this.enable(!1)};
O9.prototype.i=function(a){return a.key};
O9.prototype.vj=function(a){return"cast-selector-receiver"===a?"Cast...":this.Ro[a].name};
O9.prototype.If=function(a){g.tP.prototype.If.call(this,a);this.G.setOption("remote","currentReceiver",this.Ro[a]);this.qb.Db()};g.v(P9,g.tM);g.h=P9.prototype;
g.h.create=function(){var a=this.player.T(),b=g.bE(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.L("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.L("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.L("enable_cast_short_lived_lounge_token")};f0a(b,a);this.subscriptions.push(g.Tu("yt-remote-before-disconnect",this.nV,this));this.subscriptions.push(g.Tu("yt-remote-connection-change",this.PW,this));this.subscriptions.push(g.Tu("yt-remote-receiver-availability-change",this.LN,
this));this.subscriptions.push(g.Tu("yt-remote-auto-connect",this.NW,this));this.subscriptions.push(g.Tu("yt-remote-receiver-resumed",this.MW,this));this.subscriptions.push(g.Tu("mdx-privacy-popup-confirm",this.eY,this));this.subscriptions.push(g.Tu("mdx-privacy-popup-cancel",this.dY,this));this.LN()};
g.h.load=function(){this.player.cancelPlayback();g.tM.prototype.load.call(this);this.ji=new I9(this,this.player,this.Xb);var a=(a=j0a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Rb(a);o0a(this,this.Hd,this.Hd);this.player.wl(6)};
g.h.unload=function(){this.player.Z("mdxautoplaycanceled");this.Dn=this.il;g.Te(this.ji,this.Xb);this.Xb=this.ji=null;g.tM.prototype.unload.call(this);this.player.wl(5);Q9(this)};
g.h.ra=function(){g.Uu(this.subscriptions);g.tM.prototype.ra.call(this)};
g.h.jl=function(a){var b=g.Ca.apply(1,arguments);this.loaded&&this.ji.Fj.apply(this.ji,[a].concat(g.u(b)))};
g.h.getAdState=function(){return this.Cf};
g.h.Xk=function(){return this.Xb?a9(this.Xb).Xk:!1};
g.h.hasNext=function(){return this.Xb?a9(this.Xb).hasNext:!1};
g.h.Rb=function(a,b){this.uM=a||0;this.player.Z("progresssync",a,b);this.player.Oa("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.uM};
g.h.getProgressState=function(){var a=a9(this.Xb),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.T().L("web_player_mdx_allow_seeking_change_killswitch")?this.player.lf():!a.isAdPlaying()&&this.player.lf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.j?a.u+U8(a):a.u,isAtLiveHead:1>=(a.j?a.i+U8(a):a.i)-this.getCurrentTime(),loaded:a.N,seekableEnd:a.j?a.i+U8(a):a.i,seekableStart:0<
a.B?a.B+U8(a):a.B}};
g.h.nextVideo=function(){this.Xb&&this.Xb.nextVideo()};
g.h.gB=function(){this.Xb&&this.Xb.gB()};
g.h.nV=function(a){1===a&&(this.IG=this.Xb?a9(this.Xb):null)};
g.h.PW=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Dn;this.loaded&&this.unload();this.Xb=a;this.IG=null;b.key!==this.il.key&&(this.Dn=b,this.load())}else g.Se(this.Xb),this.Xb=null,this.loaded&&(this.unload(),(a=this.IG)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.Z("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.LN=function(){var a=[this.il],b=a.concat,c=g0a();O8()&&g.jy("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.Ro=b.call(a,c);a=A9()||this.il;R9(this,a);this.player.Oa("onMdxReceiversChange")};
g.h.NW=function(){var a=A9();R9(this,a)};
g.h.MW=function(){this.Dn=A9()};
g.h.eY=function(){this.sx=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.dY=function(){this.sx=!1;Q9(this);R9(this,this.il);this.Dn=this.il;H9=!1;B9=null;this.player.playVideo()};
g.h.tf=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.Ro;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Dn:this.il;case "quickCast":return 2===this.Ro.length&&"cast-selector-receiver"===this.Ro[1].key?(b&&Q8(),!0):!1}};
g.h.HH=function(){this.Xb.HH()};
g.h.bj=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.sM("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:01:50 Feb 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:08 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 89.702
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.056
  cdx.remote: 0.058
  esindex: 0.008
  LoadShardBlock: 41.585 (3)
  PetaboxLoader3.datanode: 25.849 (4)
  load_resource: 32.226
  PetaboxLoader3.resolve: 28.21
*/