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

YUI.add("type_sdarotate",function(e){function b(){var g,f="#my-adsLREC",k="#my-adsUBALREC",h="#my-adsMAST",j="#my-adsMAST1",i="#my-adsLDRB",m="#my-adsUBALDRB",n="#my-adsFPAD",l="hlAdsAll";g=e.one("body");g.plug(e.Plugin.ScrollInfo);adEvent=a();if(!e.Af||!e.Af.Event||!e.Af.Event.on){return;}c();e.Af.Event.on("modal:hide",function(){if(!window.DARLA||!window.pageloadNonCollapsedAds){return;}var r=window.DARLA||null,y=window.pageloadNonCollapsedAds,z=e.Array.indexOf(y||[],"LREC")>=0,t=e.Array.indexOf(y||[],"MAST")>=0,E=e.Array.indexOf(y||[],"LDRB")>=0,A=e.Array.indexOf(y||[],"UBALDRB")>=0,q=e.Array.indexOf(y||[],"FPAD")>=0,p=e.Array.indexOf(y||[],"UBALREC")>=0,B=e.one(f),v=e.one("#my-adsLREC2"),D=e.one("#my-adsMAST"),x=D&&D.getData("mast1rp")==="1",w=false,o=[];if(p||z||t||E||A){if(z){B=e.one(f);if(B.inViewportRegion()){o.push("LREC");}}if(p){B=e.one(k);if(B.inViewportRegion()){o.push("UBALREC");}}if(E){B=e.one(i);if(B.inViewportRegion()){o.push("LDRB");}}if(A){B=e.one(m);if(B.inViewportRegion()){o.push("UBALDRB");}}if(t){B=e.one(h);if(!x){if(B&&B.inViewportRegion()){o.push("MAST");}}else{adMast1Node=e.one(j);if(adMast1Node){if(adMast1Node.inViewportRegion()&&adMast1Node.get("offsetHeight")>0){w=true;}else{if(B&&B.inViewportRegion()&&B.get("offsetHeight")>0){w=true;}}}if(w){o.push("MAST1");window._mast1Fetch=1;}}}adEvent.ps=o;if(0!==o.length&&r){if(r.inProgress()){var u=r.inProgress();if(u&&u===l){r.abort();if(typeof window._darlaAutoEvt!=="undefined"&&typeof window._darlaAutoEvt.ps!=="undefined"){r.add(window._darlaAutoEvt);}r.add(adEvent);r.event("adRotateEvt");}}else{if(typeof window._darlaAutoEvt!=="undefined"&&typeof window._darlaAutoEvt.ps!=="undefined"){r.add(window._darlaAutoEvt);}r.add(adEvent);r.event("adRotateEvt");}}}else{if(q&&typeof safeframeOptinPositions!=="undefined"&&safeframeOptinPositions.FPAD){adEvent.ps="FPAD";B=e.one(n);var C=false;var s=r.config();if(s&&s.positions&&s.positions.FPAD){C=true;}if(C&&B.inViewportRegion()&&r){if(r.inProgress()){var u=r.inProgress();if(u&&u===l){r.abort();r.add(adEvent);r.event("adRotateEvt");}}else{r.add(adEvent);r.event("adRotateEvt");}}}}});}function a(){var f,j,i="";if(window.location.protocol==="http:"){j=0;}if(window.YAHOO&&window.YAHOO.i13n&&window.YAHOO.i13n.currentSID){i=window.YAHOO.i13n.currentSID;}f={name:"adRotateEvt",sp:window.Af.config.spaceid,ssl:j,secure:1,ref:window.location.href,npv:1,property:"fp",ult:{pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:i,bucket:window.Af.context.bucket}};if(window.bucketSAEnabled){f.sa='Y-BUCKET="'+window.Af.context.bucket+'"';}if(window.facCustomTimout&&window.facCustomTimout>0){f.sa+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){f.sa+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var k="";var g="";for(var h in window.segBlob){if(window.segBlob.hasOwnProperty(h)){k+=g+h+":"+window.segBlob[h];g=";";}}f.sa+=' rs="'+k+'"';}if(window.customSiteAttr){f.sa+=" "+window.customSiteAttr;}return f;}function c(){if(!window.DARLA||!window.pageloadNonCollapsedAds){return;}var j=window.DARLA||null,h=e.Array.indexOf(window.pageloadNonCollapsedAds||[],"MAST")>=0,k=e.one("#my-adsMAST"),g=k&&k.getData("mast1rp")==="1",f=e.one("#my-adsLREC2"),i=f&&f.getData("mastrt");if(h&&i&&g){i=parseInt(i,10)+10000;setTimeout(function(){d();},i);}}function d(){var i=window.DARLA,j=e.one("#my-adsMAST"),f=e.one("#my-adsLREC2"),h=f&&f.getData("mastrt"),g=a();g.ps=["MAST1"];if(i&&j&&!window._mast1Fetch&&j.inViewportRegion()&&!i.inProgress()){if(!e.one("html").hasClass("Reader-open")||e.one("html").hasClass("Reader-closed")){window._mast1Fetch=1;i.add(g);i.event("adRotateEvt");}}if(!window._mast1Fetch){h=parseInt(h,10)+10000;setTimeout(function(){d();},h);}}b();},"0.0.1",{requires:["base","node-scroll-info","af-event"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 23:57:15 Jun 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:11 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 122.852
  exclusion.robots: 0.079
  exclusion.robots.policy: 0.07
  cdx.remote: 0.062
  esindex: 0.008
  LoadShardBlock: 87.607 (3)
  PetaboxLoader3.datanode: 58.164 (5)
  load_resource: 91.369 (2)
  PetaboxLoader3.resolve: 71.883 (2)
*/