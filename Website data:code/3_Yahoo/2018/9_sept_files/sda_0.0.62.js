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

YUI.add("type_sda",function(a){a.namespace("My.Extensions.Sda");var o="#my-adsLREC2",e="#my-adsMAST",g="#my-adsMAST1",d="#sticky-lrec2-footer",f="fetch_selective_ad",h=window.DARLA||null,l="LREC2",p="LREC3",i="LREC4",c=false,b=1000,j="hlAdsAll",k="",n="2023538075";function m(){var q=this;YMedia.after("appletsinit",function(r){q.init();});}m.prototype.init=function(){var q=this;this.container=a.one(o);this.streamRestoreState=false;if(!this.container||!h){return;}var r=a.one("body");var s=r&&!!r.one("#bbnavdetect");r.plug(a.Plugin.ScrollInfo);this.scrollInfo=r.scrollInfo;this.scrollevent=this.scrollInfo.on("scroll",a.bind(this.VisibleLREC2Ads,this,true),this);if(s){a.Global.on("stream:normal-load",function(){q.addAutoEvent();q.VisibleLREC2Ads();});a.Global.on("stream:restore-state",function(){if(q.isNodeInViewport(o)){var t=true;q.fetchDarlaAd(t);}},q);}else{setTimeout(function(){q.addAutoEvent();q.VisibleLREC2Ads();},300);}};m.prototype.isNodeInViewport=function(q){var r=this.scrollInfo.getOnscreenNodes(q,100);if(a.one("html").hasClass("Reader-open")&&!a.one("html").hasClass("Reader-closed")){return false;}return !r.isEmpty();},m.prototype.VisibleLREC2Ads=function(){if(this.isNodeInViewport(o)){this.fetchDarlaAd();if(this.scrollevent){this.scrollevent.detach();this.scrollevent=null;}}};m.prototype.addAutoEvent=function(){var r=this;var q=a.one("#my-adsLREC2");var s=q.getData("autorotate")==="1";if(!s){return;}if(window.DARLA&&window.DARLA.inProgress()){setTimeout(function(){r.addAutoEvent();},500);}else{window._darlaAutoEvt=r.getAutoEvent();if(window.DARLA&&window._darlaAutoEvt){window.DARLA.add(window._darlaAutoEvt);}}},m.prototype.getAutoEvent=function(L){var q={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},t='Y-BUCKET="'+window.Af.context.bucket+'"',C=(window.location.protocol==="http:")?0:1,E=a.one("#my-adsLREC2"),K=E.getData("disablerotation")==="1",w=a.one("#my-adsLREC2").getData("lrec4enabled")==="1",D=E.getData("autoeventrt"),r=E.getData("mastrt"),G=E.getData("lrecrt"),v=E.getData("ldrbrt"),J=E.getData("defaultrt"),H={},A=E.getData("lrec3replace")==="1",y=a.one("#my-adsLREC2").getData("lrec2SelectiveEnabled")==="1",F=a.one(e),u=F&&F.getData("mast1rp")==="1",s,B="",z=n;if(window.facCustomTimout&&window.facCustomTimout>0){t+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){t+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var I="";var M="";for(var x in window.segBlob){if(window.segBlob.hasOwnProperty(x)){I+=M+x+":"+window.segBlob[x];M=";";}}t+=' rs="'+I+'"';}if(window.YAHOO&&window.YAHOO.i13n){B=window.YAHOO.i13n.currentSID||"";z=window.YAHOO.i13n.SPACEID||n;}if(w&&!K&&(!y||!A||L)){H.LREC5={autoIV:1,autoMax:25,autoRT:J};H.LREC4={autoIV:1,autoMax:25,autoRT:J};}if(!K){if(A){H.LREC3={autoIV:1,autoMax:25,autoRT:J};}else{H.LREC2={autoIV:1,autoMax:25,autoRT:J};}}if(r&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"MAST")>=0){if(u){H.MAST1={autoIV:1,autoMax:25,autoRT:r};}else{H.MAST={autoIV:1,autoMax:25,autoRT:r};}}if(v&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LDRB")>=0){H.LDRB={autoIV:1,autoMax:25,autoRT:v};}if(G&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LREC")>=0){H.LREC={autoIV:1,autoMax:25,autoRT:G};}s={ps:H,name:"AUTO",sp:z,autoStart:1,autoMax:25,autoRT:D,autoIV:1,autoDDG:1,ssl:C,secure:1,ref:window.location.href,npv:1,property:"fp",ult:q,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:B,bucket:window.Af.context.bucket}};if(bucketSAEnabled){s.sa=t;}return s;},m.prototype.fetchAdLater=function(t){var s=this;var q=0;var r=setInterval(function(){if(q>20){clearInterval(r);return;}if(!h.inProgress()){clearInterval(r);s.fetchDarlaAd(t);}q++;},500);},m.prototype.fetchDarlaAd=function(T){var U,X,r,s,P,t,I=this,K,O=false,H=false,B=false,N=a.one("#my-adsLREC2").getData("config"),x=a.one("#my-adsLREC2").getData("lrec4pos")||"LREC4",Q=a.one("#my-adsLREC3")&&a.one("#my-adsLREC3").getData("config"),E=a.one("#my-ads"+x)&&a.one("#my-ads"+x).getData("config"),J={pos:"LREC2",clean:"my-adsLREC2",dest:"my-adsLREC2-iframe",metaSize:true,w:300,h:250,supports:false},R={pos:"LREC3",clean:"my-adsLREC3",dest:"my-adsLREC3-iframe",metaSize:true,w:300,h:250,supports:false},V={pos:x,clean:"my-ads"+x,dest:"my-ads"+x+"-iframe",metaSize:true,w:300,h:250,supports:false},q={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},v='Y-BUCKET="'+window.Af.context.bucket+'"',M=(window.location.protocol==="http:")?0:1,w,A=a.one("#my-adsLREC2").getData("lrec2SelectiveEnabled")==="1",L="",G=n;P=a.one("#my-adsLREC2").getData("autoeventrt");if(P){P=parseInt(P,10);}if(window.facCustomTimout&&window.facCustomTimout>0){v+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){v+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var S="";var W="";for(var D in window.segBlob){if(window.segBlob.hasOwnProperty(D)){S+=W+D+":"+window.segBlob[D];W=";";}}v+=' rs="'+S+'"';}if(window.YAHOO&&window.YAHOO.i13n){L=window.YAHOO.i13n.currentSID||"";G=window.YAHOO.i13n.SPACEID||n;}if(N){J=a.JSON.parse(N);l=J.pos;}if(E){V=a.JSON.parse(E);i=V.pos;}J.id=l;O=a.one("#my-adsLREC2").getData("autorotate")==="1";H=a.one("#my-adsLREC2").getData("lrec3replace")==="1";r=f+"_"+l.toLowerCase();B=a.one("#my-adsLREC2").getData("lrec4enabled")==="1";K=l;if(B){K=(!!T&&H?p:K)+","+i;}U={ps:K,name:r,sp:G,ssl:M,secure:1,ref:window.location.href,npv:1,property:"fp",ult:q,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:L,bucket:window.Af.context.bucket}};if(bucketSAEnabled){U.sa=v;}var C=B?[V,J]:[J];if(h.inProgress()){var z=h.inProgress();if(z&&z===j){h.abort();h.add(U);h.addPos(C);h.event(r);}else{this.fetchAdLater(T);return;}}else{if(A){h.add(U);h.addPos([C]);h.event(r);}}s=f+"_"+p.toLowerCase();if(Q){R=a.JSON.parse(Q);p=R.pos;}var y=p;R.id=y;if(B){y=y+","+i;}X={ps:y,name:s,sp:G,ssl:M,secure:1,ref:window.location.href,npv:1,property:"fp",ult:q,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:L,bucket:window.Af.context.bucket}};t=I.getAutoEvent(true);if(bucketSAEnabled){X.sa=v;}if(H){h.addPos([R]);function F(){if(h.inProgress()){var Y=h.inProgress();if(Y&&Y===j){h.abort();if(O){h.add(t);}h.add(X);h.event(s);}}else{if(O){h.add(t);}h.add(X);h.event(s);}}setTimeout(function(){var Y=I.isNodeInViewport(d);if(!c&&Y){F();}else{if(!c&&!Y){I.scrollevent=I.scrollInfo.on("scroll",function(){if(!c&&I.isNodeInViewport(d)){F();if(I.scrollevent){I.scrollevent.detach();I.scrollevent=null;}}});}}},2*P);}else{if(O){h.add(t);}}if(!h.isAutoOn()){h.startAuto();}var u=function(){if(h.inProgress()){var Y=h.inProgress();if(Y&&Y===j){h.abort();}else{return;}}c=true;if(I.scrollevent){I.scrollevent.detach();I.scrollevent=null;}if(O){h.add(t);if(!h.isAutoOn()){h.startAuto();}}k="";if(I.isNodeInViewport(d)){if(H){k=k?k+","+p:p;}else{if(I.isNodeInViewport(d)){k=k?k+","+l:l;}}}if(B&&I.isNodeInViewport(d)){k=k?k+","+i:i;}if(k){if(H){X.ps=k;h.add(X);h.event(s);}else{U.ps=k;h.add(U);h.event(r);}}};a.Af.Event.on("modal:hide",u);};m.prototype.destructor=function(){};a.My.Extensions.Sda.init=new m();},"0.0.1",{requires:["node-scroll-info","json-parse"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 13:32:45 Aug 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:13 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 160.954
  exclusion.robots: 0.072
  exclusion.robots.policy: 0.064
  cdx.remote: 0.052
  esindex: 0.009
  LoadShardBlock: 135.479 (3)
  PetaboxLoader3.datanode: 240.282 (5)
  load_resource: 264.182 (2)
  PetaboxLoader3.resolve: 135.366 (2)
*/