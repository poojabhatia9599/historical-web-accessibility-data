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

YUI.add("type_sda",function(a){a.namespace("My.Extensions.Sda");var b="#my-adsLREC2-config",p="#my-adsLREC2",f="#my-adsMAST",e="#sticky-lrec2-footer",g="fetch_selective_ad",h=window.DARLA||null,m="LREC2",q="LREC3",i="LREC4",j="MON2",d=false,c=1000,k="hlAdsAll",l="",o="2023538075";function n(){var r=this;YMedia.after("appletsinit",function(s){r.init();});}n.prototype.init=function(){var s=this;var r=a.one(b);if(!r){return;}var v=r.getData("config");if(!v){return;}try{lrec2PositionMeta=a.JSON.parse(v);}catch(u){return;}p="#my-ads"+lrec2PositionMeta.pos;this.container=a.one(p);this.streamRestoreState=false;if(!this.container||!h){return;}var t=a.one("body");var w=t&&!!t.one("#bbnavdetect");t.plug(a.Plugin.ScrollInfo);this.scrollInfo=t.scrollInfo;this.scrollevent=this.scrollInfo.on("scroll",a.bind(this.VisibleLREC2Ads,this,true),this);if(w){a.Global.on("stream:normal-load",function(){s.addAutoEvent();s.registerTabswitch();s.registerScrollRotate();s.VisibleLREC2Ads();});a.Global.on("stream:restore-state",function(){if(s.isNodeInViewport(p)){var x=true;s.fetchDarlaAd(x);}},s);}else{setTimeout(function(){s.addAutoEvent();s.registerTabswitch();s.registerScrollRotate();s.VisibleLREC2Ads();},300);}};n.prototype.isNodeInViewport=function(r){var s=this.scrollInfo.getOnscreenNodes(r,100);if(a.one("html").hasClass("Reader-open")&&!a.one("html").hasClass("Reader-closed")){return false;}return !s.isEmpty();},n.prototype.VisibleLREC2Ads=function(){if(this.isNodeInViewport(p)){this.fetchDarlaAd();if(this.scrollevent){this.scrollevent.detach();this.scrollevent=null;}}};n.prototype.registerTabswitch=function(){var y=this;var u=a.one(b);var t=u.getData("tabswitchrotate");t=t&&parseInt(t,10)||0;var v=t>0;if(!v){return;}var z=Date.now||function(){return new Date().getTime();};var x=z();var w=a.Af&&a.Af.PageViz&&a.Af.PageViz.isHidden()||false;function r(){if(!w){x=z();w=true;}}function s(){var B=z();if(B-x<t){return;}if(a.Af&&a.Af.PageViz&&a.Af.PageViz.isHidden()){w=true;return;}w=false;if(!window._darlaAutoEvt){window._darlaAutoEvt=y.getAutoEvent();}var D=[].concat(a.Object.keys(window._darlaAutoEvt.ps),"MON");var A=[];if(!window.DARLA||window.DARLA.inProgress()){return;}a.Array.each(D,function(F){if(A.indexOf(F)<0){var G=window.DARLA.posSettings(F);if(G){if(y.isNodeInViewport("#"+G.dest)){var E=a.one("#"+G.dest);if(E&&E.get("offsetHeight")>1){A.push(F);}}}}});if(A.length>0){var C={ps:A.join(","),name:"tabswitch",sp:window._darlaAutoEvt.sp,sa:window._darlaAutoEvt.sa+" "+(window.customSiteAttr||""),ssl:window._darlaAutoEvt.ssl,secure:window._darlaAutoEvt.secure,ref:window.location.href,npv:1,property:"fp",ult:window._darlaAutoEvt.ult,experience:window._darlaAutoEvt.experience};window.DARLA.add(C);window.DARLA.event("tabswitch");}}a.on("blur",r,window);a.on("focus",s,window);if(a.Af&&a.Af.PageViz){a.Af.PageViz.on("visible",s,y);a.Af.PageViz.on("hidden",r,y);}},n.prototype.registerScrollRotate=function(){var t=this;var s=a.one(b);var y=s.getData("scrollrotate");var v=s.getData("lrec2SelectiveEnabled")==="1",y=y&&parseInt(y,10)||0;var u=y>0;if(!u){return;}var r=0;var w=0;function x(){r++;if(r-w<y){return;}if(!window._darlaAutoEvt){window._darlaAutoEvt=t.getAutoEvent();}var A=v?["LREC3","LREC4","MON2"]:[];var C=[].concat(a.Object.keys(window._darlaAutoEvt.ps),["MON"],A);var z=[];if(!window.DARLA||window.DARLA.inProgress()){return;}a.Array.each(C,function(E){if(z.indexOf(E)<0){var F=window.DARLA.posSettings(E);if(F){if(t.isNodeInViewport("#"+F.dest)){var D=a.one("#"+F.dest);if(D&&D.get("offsetHeight")>1){z.push(E);}}}}});if(z.length>0){w=r;var B={ps:z.join(","),name:"scrollrotate",sp:window._darlaAutoEvt.sp,sa:window._darlaAutoEvt.sa+" "+(window.customSiteAttr||""),ssl:window._darlaAutoEvt.ssl,secure:window._darlaAutoEvt.secure,ref:window.location.href,npv:1,property:"fp",ult:window._darlaAutoEvt.ult,experience:window._darlaAutoEvt.experience};window.DARLA.add(B);window.DARLA.event("scrollrotate");}}window.sdaAvpCallback=x;},n.prototype.addAutoEvent=function(){var s=this;var r=a.one(b);var t=r.getData("autorotate")==="1";if(!t){return;}if(window.DARLA&&window.DARLA.inProgress()){setTimeout(function(){s.addAutoEvent();},500);}else{window._darlaAutoEvt=s.getAutoEvent();if(window.DARLA&&window._darlaAutoEvt){window.DARLA.add(window._darlaAutoEvt);}}},n.prototype.getAutoEvent=function(){var r={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},u='Y-BUCKET="'+window.Af.context.bucket+'"',D=(window.location.protocol==="http:")?0:1,A=a.one(b),K=A.getData("disablerotation")==="1",w=A.getData("lrec4enabled")==="1",E=A.getData("mon2Enabled")==="1",F=A.getData("autoeventrt"),s=A.getData("mastrt"),G=A.getData("lrecrt"),v=A.getData("ldrbrt"),J=A.getData("defaultrt"),C=A.getData("currentpos"),H={},y=A.getData("lrec2SelectiveEnabled")==="1",t,B="",z=o;if(window.facCustomTimout&&window.facCustomTimout>0){u+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){u+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var I="";var L="";for(var x in window.segBlob){if(window.segBlob.hasOwnProperty(x)){I+=L+x+":"+window.segBlob[x];L=";";}}u+=' rs="'+I+'"';}if(window.YAHOO&&window.YAHOO.i13n){B=window.YAHOO.i13n.currentSID||"";z=window.YAHOO.i13n.SPACEID||o;}if(!K){H[C]={autoIV:1,autoMax:25,autoRT:J};if(w){H.LREC4={autoIV:1,autoMax:25,autoRT:J};}if(E){H.MON2={autoIV:1,autoMax:25,autoRT:J};}}if(s&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"MAST")>=0){H.MAST={autoIV:1,autoMax:25,autoRT:s};}if(v&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LDRB")>=0){H.LDRB={autoIV:1,autoMax:25,autoRT:v};}if(G&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LREC")>=0){H.LREC={autoIV:1,autoMax:25,autoRT:G};}t={ps:H,name:"AUTO",sp:z,autoStart:1,autoMax:25,autoRT:F,autoIV:1,autoDDG:1,ssl:D,secure:1,ref:window.location.href,npv:1,property:"fp",ult:r,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:B,bucket:window.Af.context.bucket}};if(bucketSAEnabled){t.sa=u;}return t;},n.prototype.fetchAdLater=function(u){var t=this;var r=0;var s=setInterval(function(){if(r>20){clearInterval(s);return;}if(!h.inProgress()){clearInterval(s);t.fetchDarlaAd(u);}r++;},500);},n.prototype.fetchDarlaAd=function(I){var L,N,E,r,aa,U,z=this,D,w=false,P=false,B=false,S=a.one(b),K=S.getData("config"),x=S.getData("lrec4pos")||"LREC4",M=S.getData("mon2pos")||"MON2",u=a.one("#my-adsLREC3")&&a.one("#my-adsLREC3").getData("config"),V=a.one("#my-ads"+x)&&a.one("#my-ads"+x).getData("config"),G=a.one("#my-ads"+M)&&a.one("#my-ads"+M).getData("config"),F={pos:"LREC2",clean:"my-adsLREC2",dest:"my-adsLREC2-iframe",metaSize:true,w:300,h:250,supports:false},v={pos:"LREC3",clean:"my-adsLREC3",dest:"my-adsLREC3-iframe",metaSize:true,w:300,h:250,supports:false},W={pos:x,clean:"my-ads"+x,dest:"my-ads"+x+"-iframe",metaSize:true,w:300,h:250,supports:false},Q={pos:M,clean:"my-ads"+M,dest:"my-ads"+M+"-iframe",metaSize:true,w:300,h:600,supports:false},C={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},R='Y-BUCKET="'+window.Af.context.bucket+'"',y=(window.location.protocol==="http:")?0:1,H,J=a.one(b).getData("lrec2SelectiveEnabled")==="1",s="",Y=o;aa=S.getData("autoeventrt");if(aa){aa=parseInt(aa,10);}if(window.facCustomTimout&&window.facCustomTimout>0){R+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){R+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var A="";var O="";for(var Z in window.segBlob){if(window.segBlob.hasOwnProperty(Z)){A+=O+Z+":"+window.segBlob[Z];O=";";}}R+=' rs="'+A+'"';}if(window.YAHOO&&window.YAHOO.i13n){s=window.YAHOO.i13n.currentSID||"";Y=window.YAHOO.i13n.SPACEID||o;}if(K){F=a.JSON.parse(K);m=F.pos;}if(V){W=a.JSON.parse(V);i=W.pos;}if(G){Q=a.JSON.parse(G);j=Q.pos;}F.id=m;w=S.getData("autorotate")==="1";E=g+"_"+m.toLowerCase();B=S.getData("lrec4enabled")==="1";mon2Enabled=S.getData("mon2enabled")==="1";D=m;if(B){D=D+","+i;}if(mon2Enabled){D=D+","+j;}L={ps:D,name:E,sp:Y,ssl:y,secure:1,ref:window.location.href,npv:1,property:"fp",ult:C,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:s,bucket:window.Af.context.bucket}};if(bucketSAEnabled){L.sa=R;}var X=B?[W,F]:[F];if(mon2Enabled){X.push(Q);}if(h.inProgress()){var T=h.inProgress();if(T&&T===k){h.abort();h.add(L);h.addPos(X);h.event(E);}else{this.fetchAdLater(I);return;}}else{if(J){h.add(L);h.addPos([X]);h.event(E);}}U=z.getAutoEvent();if(w){h.add(U);}if(!h.isAutoOn()){h.startAuto();}var t=function(){if(h.inProgress()){var ab=h.inProgress();if(ab&&ab===k){h.abort();}else{return;}}d=true;if(z.scrollevent){z.scrollevent.detach();z.scrollevent=null;}if(w){h.add(U);if(!h.isAutoOn()){h.startAuto();}}l="";var ad=false;var ac=document.getElementById("my-adsMON2");ad=ac&&ac.className.indexOf("D-n")===-1;if(z.isNodeInViewport(e)){if((mon2Enabled&&!ad)||!mon2Enabled){l=l?l+","+m:m;}if(mon2Enabled&&ad){l=l?l+","+j:j;}else{if((B&&!ad)||!mon2Enabled){l=l?l+","+i:i;}}}if(l){L.ps=l;h.add(L);h.event(E);}};a.Af.Event.on("modal:hide",t);};n.prototype.destructor=function(){};a.My.Extensions.Sda.init=new n();},"0.0.1",{requires:["node-scroll-info","json-parse"]});/* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 22:33:20 Feb 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:32:35 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 136.595
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.088
  cdx.remote: 0.084
  esindex: 0.013
  LoadShardBlock: 57.22 (3)
  PetaboxLoader3.datanode: 132.293 (5)
  load_resource: 258.991 (2)
  PetaboxLoader3.resolve: 141.112 (2)
*/