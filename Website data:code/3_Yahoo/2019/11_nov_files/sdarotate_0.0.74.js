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

YUI.add("type_sdarotate",function(c){function b(){var h,e="#my-adsLREC",i="#my-adsUBALREC",k="#my-adsMAST",d="#my-adsLDRB",g="#my-adsUBALDRB",f="#my-adsFPAD",j="hlAdsAll";h=c.one("body");h.plug(c.Plugin.ScrollInfo);adEvent=a();if(!c.Af||!c.Af.Event||!c.Af.Event.on){return;}c.Af.Event.on("modal:hide",function(){if(!window.DARLA||!window.pageloadNonCollapsedAds){return;}var o=window.DARLA||null,s=window.pageloadNonCollapsedAds,t=c.Array.indexOf(s||[],"LREC")>=0,q=c.Array.indexOf(s||[],"MAST")>=0,x=c.Array.indexOf(s||[],"LDRB")>=0,u=c.Array.indexOf(s||[],"UBALDRB")>=0,n=c.Array.indexOf(s||[],"FPAD")>=0,m=c.Array.indexOf(s||[],"UBALREC")>=0,v,l=[];if(m||t||q||x||u){if(t){v=c.one(e);if(v.inViewportRegion()){l.push("LREC");}}if(m){v=c.one(i);if(v.inViewportRegion()){l.push("UBALREC");}}if(x){v=c.one(d);if(v.inViewportRegion()){l.push("LDRB");}}if(u){v=c.one(g);if(v.inViewportRegion()){l.push("UBALDRB");}}if(q){v=c.one(k);if(v&&v.inViewportRegion()){l.push("MAST");}}adEvent.ps=l;if(0!==l.length&&o){if(o.inProgress()){var r=o.inProgress();if(r&&r===j){o.abort();if(typeof window._darlaAutoEvt!=="undefined"&&typeof window._darlaAutoEvt.ps!=="undefined"){o.add(window._darlaAutoEvt);}o.add(adEvent);o.event("adRotateEvt");}}else{if(typeof window._darlaAutoEvt!=="undefined"&&typeof window._darlaAutoEvt.ps!=="undefined"){o.add(window._darlaAutoEvt);}o.add(adEvent);o.event("adRotateEvt");}}}else{if(n&&typeof safeframeOptinPositions!=="undefined"&&safeframeOptinPositions.FPAD){adEvent.ps="FPAD";v=c.one(f);var w=false;var p=o.config();if(p&&p.positions&&p.positions.FPAD){w=true;}if(w&&v.inViewportRegion()&&o){if(o.inProgress()){var r=o.inProgress();if(r&&r===j){o.abort();o.add(adEvent);o.event("adRotateEvt");}}else{o.add(adEvent);o.event("adRotateEvt");}}}}});}function a(){var d,h,g="";if(window.location.protocol==="http:"){h=0;}if(window.YAHOO&&window.YAHOO.i13n&&window.YAHOO.i13n.currentSID){g=window.YAHOO.i13n.currentSID;}d={name:"adRotateEvt",sp:window.Af.config.spaceid,ssl:h,secure:1,ref:window.location.href,npv:1,property:"fp",ult:{pg:{property:"fp",test:window.Af.context.bucket,intl:window.Af.context.region,rid:window.Af.context.rid,device:window.Af.context.device}},experience:{pt:"index",pd:"modal",rid:window.Af.context.rid,sid:g,bucket:window.Af.context.bucket}};if(window.bucketSAEnabled){d.sa='Y-BUCKET="'+window.Af.context.bucket+'"';}if(window.facCustomTimout&&window.facCustomTimout>0){d.sa+=" ctout="+window.facCustomTimout;}if(window.flSAKey&&"undefined"!==window.flInstalled){d.sa+=" "+window.flSAKey+"="+window.flInstalled;}if(window.segBlob){var i="";var e="";for(var f in window.segBlob){if(window.segBlob.hasOwnProperty(f)){i+=e+f+":"+window.segBlob[f];e=";";}}d.sa+=' rs="'+i+'"';}if(window.customSiteAttr){d.sa+=" "+window.customSiteAttr;}return d;}b();},"0.0.1",{requires:["base","node-scroll-info","af-event"]});/* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 02:39:36 Nov 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:32:47 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 594.777
  exclusion.robots: 0.182
  exclusion.robots.policy: 0.173
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 295.168 (3)
  PetaboxLoader3.datanode: 201.963 (4)
  load_resource: 33.067
  PetaboxLoader3.resolve: 20.674
*/