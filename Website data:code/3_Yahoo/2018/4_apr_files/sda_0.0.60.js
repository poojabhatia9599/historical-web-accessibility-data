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

YUI.add("type_sda",function(a){a.namespace("My.Extensions.Sda");var n="#my-adsLREC2",e="#my-adsMAST",g="#my-adsMAST1",d="#sticky-lrec2-footer",f="fetch_selective_ad",h=window.DARLA||null,l="LREC2",o="LREC3",i="LREC4",c=false,b=1000,j="hlAdsAll",k="";function m(){var p=this;YMedia.after("appletsinit",function(q){p.init();});}m.prototype.init=function(){var p=this;this.container=a.one(n);this.streamRestoreState=false;if(!this.container){return;}var q=a.one("body");var r=q&&!!q.one("#bbnavdetect");q.plug(a.Plugin.ScrollInfo);this.scrollInfo=q.scrollInfo;this.scrollevent=this.scrollInfo.on("scroll",a.bind(this.VisibleLREC2Ads,this,true),this);if(r){a.Global.on("stream:normal-load",function(){p.addAutoEvent();p.VisibleLREC2Ads();});a.Global.on("stream:restore-state",function(){if(p.isNodeInViewport(n)){var s=true;p.fetchDarlaAd(s);}},p);}else{setTimeout(function(){p.addAutoEvent();p.VisibleLREC2Ads();},300);}};m.prototype.isNodeInViewport=function(p){var q=this.scrollInfo.getOnscreenNodes(p,100);if(a.one("html").hasClass("Reader-open")&&!a.one("html").hasClass("Reader-closed")){return false;}return !q.isEmpty();},m.prototype.VisibleLREC2Ads=function(){if(this.isNodeInViewport(n)){this.fetchDarlaAd();if(this.scrollevent){this.scrollevent.detach();this.scrollevent=null;}}};m.prototype.addAutoEvent=function(){var q=this;var p=a.one("#my-adsLREC2");var r=p.getData("autorotate")==="1";if(!r){return;}if(window.DARLA&&window.DARLA.inProgress()){setTimeout(function(){q.addAutoEvent();},500);}else{window._darlaAutoEvt=q.getAutoEvent();if(window.DARLA&&window._darlaAutoEvt){window.DARLA.add(window._darlaAutoEvt);}}},m.prototype.getAutoEvent=function(I){var p={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},s='Y-BUCKET="'+window.Af.context.bucket+'"',z=(window.location.protocol==="http:")?0:1,B=a.one("#my-adsLREC2"),H=B.getData("disablerotation")==="1",v=a.one("#my-adsLREC2").getData("lrec4enabled")==="1",A=B.getData("autoeventrt"),q=B.getData("mastrt"),D=B.getData("lrecrt"),u=B.getData("ldrbrt"),G=B.getData("defaultrt"),E={},y=B.getData("lrec3replace")==="1",x=a.one("#my-adsLREC2").getData("lrec2SelectiveEnabled")==="1",C=a.one(e),t=C&&C.getData("mast1rp")==="1",r;if(window.facCustomTimout&&window.facCustomTimout>0){s+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){s+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var F="";var J="";for(var w in window.segBlob){if(window.segBlob.hasOwnProperty(w)){F+=J+w+":"+window.segBlob[w];J=";";}}s+=' rs="'+F+'"';}if(v&&!H&&(!x||!y||I)){E.LREC5={autoIV:1,autoMax:25,autoRT:G};E.LREC4={autoIV:1,autoMax:25,autoRT:G};}if(!H){if(y){E.LREC3={autoIV:1,autoMax:25,autoRT:G};}else{E.LREC2={autoIV:1,autoMax:25,autoRT:G};}}if(q&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"MAST")>=0){if(t){E.MAST1={autoIV:1,autoMax:25,autoRT:q};}else{E.MAST={autoIV:1,autoMax:25,autoRT:q};}}if(u&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LDRB")>=0){E.LDRB={autoIV:1,autoMax:25,autoRT:u};}if(D&&a.Array.indexOf(window.pageloadNonCollapsedAds||[],"LREC")>=0){E.LREC={autoIV:1,autoMax:25,autoRT:D};}r={ps:E,name:"AUTO",sp:YAHOO.i13n.SPACEID,autoStart:1,autoMax:25,autoRT:A,autoIV:1,autoDDG:1,ssl:z,secure:1,ref:window.location.href,npv:1,property:"fp",ult:p,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:YAHOO.i13n.currentSID,bucket:window.Af.context.bucket}};if(bucketSAEnabled){r.sa=s;}return r;},m.prototype.fetchAdLater=function(s){var r=this;var p=0;var q=setInterval(function(){if(p>20){clearInterval(q);return;}if(!h.inProgress()){clearInterval(q);r.fetchDarlaAd(s);}p++;},500);},m.prototype.fetchDarlaAd=function(Q){var R,U,q,r,M,s,G=this,I,L=false,F=false,A=false,K=a.one("#my-adsLREC2").getData("config"),w=a.one("#my-adsLREC2").getData("lrec4pos")||"LREC4",N=a.one("#my-adsLREC3")&&a.one("#my-adsLREC3").getData("config"),D=a.one("#my-ads"+w)&&a.one("#my-ads"+w).getData("config"),H={pos:"LREC2",clean:"my-adsLREC2",dest:"my-adsLREC2-iframe",metaSize:true,w:300,h:250,supports:false},O={pos:"LREC3",clean:"my-adsLREC3",dest:"my-adsLREC3-iframe",metaSize:true,w:300,h:250,supports:false},S={pos:w,clean:"my-ads"+w,dest:"my-ads"+w+"-iframe",metaSize:true,w:300,h:250,supports:false},p={pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},u='Y-BUCKET="'+window.Af.context.bucket+'"',J=(window.location.protocol==="http:")?0:1,v,z=a.one("#my-adsLREC2").getData("lrec2SelectiveEnabled")==="1";M=a.one("#my-adsLREC2").getData("autoeventrt");if(M){M=parseInt(M,10);}if(window.facCustomTimout&&window.facCustomTimout>0){u+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){u+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var P="";var T="";for(var C in window.segBlob){if(window.segBlob.hasOwnProperty(C)){P+=T+C+":"+window.segBlob[C];T=";";}}u+=' rs="'+P+'"';}if(K){H=a.JSON.parse(K);l=H.pos;}if(D){S=a.JSON.parse(D);i=S.pos;}H.id=l;L=a.one("#my-adsLREC2").getData("autorotate")==="1";F=a.one("#my-adsLREC2").getData("lrec3replace")==="1";q=f+"_"+l.toLowerCase();A=a.one("#my-adsLREC2").getData("lrec4enabled")==="1";I=l;if(A){I=(!!Q&&F?o:I)+","+i;}R={ps:I,name:q,sp:YAHOO.i13n.SPACEID,ssl:J,secure:1,ref:window.location.href,npv:1,property:"fp",ult:p,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:YAHOO.i13n.currentSID,bucket:window.Af.context.bucket}};if(bucketSAEnabled){R.sa=u;}var B=A?[S,H]:[H];if(h.inProgress()){var y=h.inProgress();if(y&&y===j){h.abort();h.add(R);h.addPos(B);h.event(q);}else{this.fetchAdLater(Q);return;}}else{if(z){h.add(R);h.addPos([B]);h.event(q);}}r=f+"_"+o.toLowerCase();if(N){O=a.JSON.parse(N);o=O.pos;}var x=o;O.id=x;if(A){x=x+","+i;}U={ps:x,name:r,sp:YAHOO.i13n.SPACEID,ssl:J,secure:1,ref:window.location.href,npv:1,property:"fp",ult:p,experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:YAHOO.i13n.currentSID,bucket:window.Af.context.bucket}};s=G.getAutoEvent(true);if(bucketSAEnabled){U.sa=u;}if(F){h.addPos([O]);function E(){if(h.inProgress()){var V=h.inProgress();if(V&&V===j){h.abort();if(L){h.add(s);}h.add(U);h.event(r);}}else{if(L){h.add(s);}h.add(U);h.event(r);}}setTimeout(function(){var V=G.isNodeInViewport(d);if(!c&&V){E();}else{if(!c&&!V){G.scrollevent=G.scrollInfo.on("scroll",function(){if(!c&&G.isNodeInViewport(d)){E();if(G.scrollevent){G.scrollevent.detach();G.scrollevent=null;}}});}}},2*M);}else{if(L){h.add(s);}}if(!h.isAutoOn()){h.startAuto();}var t=function(){if(h.inProgress()){var V=h.inProgress();if(V&&V===j){h.abort();}else{return;}}c=true;if(G.scrollevent){G.scrollevent.detach();G.scrollevent=null;}if(L){h.add(s);if(!h.isAutoOn()){h.startAuto();}}k="";if(G.isNodeInViewport(d)){if(F){k=k?k+","+o:o;}else{if(G.isNodeInViewport(d)){k=k?k+","+l:l;}}}if(A&&G.isNodeInViewport(d)){k=k?k+","+i:i;}if(k){if(F){U.ps=k;h.add(U);h.event(r);}else{R.ps=k;h.add(R);h.event(q);}}};a.Af.Event.on("modal:hide",t);};m.prototype.destructor=function(){};a.My.Extensions.Sda.init=new m();},"0.0.1",{requires:["node-scroll-info","json-parse"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 14:43:37 Apr 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:41:34 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 264.311
  exclusion.robots: 0.357
  exclusion.robots.policy: 0.346
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 238.042 (3)
  PetaboxLoader3.datanode: 242.976 (5)
  PetaboxLoader3.resolve: 86.934 (3)
  load_resource: 106.11 (2)
*/