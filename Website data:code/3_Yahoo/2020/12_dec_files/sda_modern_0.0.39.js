(function(){var t=window;var V=document;var B=t.YAHOO||{};var w=t.DARLA||null;var e=t&&t.wafer;var Y;var m="viewerClosed";var ag="viewerOpened";var M="homepage-viewer";var h="pageVisibilityChange";var ac="scroll";var aj="adRotateEvt";var u="AUTO";var S="tabswitch";var D="darlaReadyOnAsync";var F="my-ads";var r=F+"LREC2-config";var X=F+"UBALREC2-config";var T="sticky-lrec2-footer";var q="my-adsLREC4-base";var ad="2023538075";var ae=100;var j;var s;var f;var H;var G;var p={};var v;var al;var a={"INARTICLE-1":true};var l="native-leaderboard-ad";var ah="gemini-ad-refresh";var af="pencil_ad_cluster_container";var I=5000;var Q=3;var ab;var P=true;var an;var k;var i=false;var L;var g=0;var E=Date.now||function(){return new Date().getTime();};if(!e){return;}e.ready(function(){Y=e.base||{};if(!w){t.addEventListener(D,function ao(){K();});return;}K();});function U(ap){var ao=["autorotate","disablerotation","lrec2selectiveenabled","lrec4enabled","mon2enabled"];for(var aq=0;aq<ao.length;aq++){ap[ao[aq]]=!!+ap[ao[aq]];}}function c(ao){if(!ao||typeof ao!=="string"){return"";}var aq;try{aq=JSON.parse(ao);}catch(ap){return"";}return aq;}function K(){v=V.getElementById(r)||V.getElementById(X);if(!v||!v.dataset){return;}j=c(JSON.stringify(v.dataset));if(!j||!j.config){return;}U(j);al=c(j.config);if(!al){return;}f=V.getElementById(F+al.pos);H=V.getElementById(F+"LDRB2");if(f){p.lrec=true;}if(H){p.ldrb2=true;G=c(H.dataset.config);}if(!w||!f){return;}var at={offsetX:0,offsetY:parseInt(j.offset,10)||ae};e.on(ac,A);t.addEventListener(ag,function ao(){i=true;});t.addEventListener(m,function ar(){i=false;J();});setTimeout(function(){am();b();A(at);},300);var ap=V.getElementsByClassName(l);if(ap&&ap.length>0){ab=ap[0];}var aq=V.getElementsByClassName(af);if(aq&&aq.length>0){setTimeout(function(){Z(aq[0]);},I);}if(typeof window.stageAdVideoPlaying!=="undefined"){s=V.getElementById("Masterwrap");ak();if(window.stageAdVideoPlaying){if(P){o();P=false;}window.onStageVideoComplete=function(){if(!P){z();P=true;}window.stageAdVideoPlaying=false;};}}}function o(){if(Y){Y.pauseVideo("stage-ad");}}function z(){if(Y){Y.resumeVideo("stage-ad");Y.sync(V.getElementById("Masterwrap"));}}function ak(){if(s){var ao=s.getBoundingClientRect();if(ao.y<=120){if(!P){z();P=true;}}else{if(window.stageAdVideoPlaying&&P){o();P=false;}}}}function n(ao,ap){if(!ao){return false;}ap=ap||{};return e.utils.elementInView(ao,ap,Y.viewport);}function A(ao){if(i){return;}if(n(f,ao)&&p.lrec){x();p.lrec=false;}if(n(H,{offsetX:0,offsetY:300})&&p.ldrb2){aa();p.ldrb2=false;}if(!p.lrec&&!p.ldrb2){e.removeListener(ac,A);}if(s&&window.stageAdVideoPlaying){ak();}}function b(){k=parseInt(j.tabswitchrotate,10)||0;if(!k){return;}an=E();e.on(h,W);e.on("caas:article:init",function(ao){L=ao;});if(window.addEventListener){window.addEventListener("focus",function(){W({isActive:true});});window.addEventListener("blur",function(){W({isActive:false});});}}function y(ap,aA,aB){var au=aA[ap].extrapositions&&aA[ap].extrapositions.split(",")||[];if(aA[ap].inview){var ay=true;var ar=[].concat(aA[ap].inview.split(","));for(var at=0;at<ar.length;at++){var ao=ar[at];var aw=w.posSettings(ao);if(aw){var az=document.getElementById(aw.dest);if(!n(az)){ay=false;}}}if(ay){var av=[].concat(ar,au);for(at=0;at<av.length;at++){nAdPos=av[at];if(aB.indexOf(nAdPos)<0){aB.push(nAdPos);}}}}else{for(var aq=0;aq<au.length;aq++){var ax=au[aq];if(aB.indexOf(ax)<0){aB.push(ax);}}}}function W(aF){if(!aF.isActive){an=E();return;}if(aF.isActive){var ao=E();if(ao-an<k||!w||w.inProgress()){return;}if(!t._darlaAutoEvt){t._darlaAutoEvt=ai();}var aw=t._darlaAutoEvt.ps;var az=["MON"];var aq=[];var aB=j.adboostgrouprotation;var ap;if(aB){try{ap=JSON.parse(aB);}catch(aG){}}var aC=j.vieweradboostgrouprotation;var aA;if(aC){try{aA=JSON.parse(aC);}catch(aG){}}if(t.pageloadValidAds&&t.pageloadValidAds.indexOf("UBALREC")>=0){az.push("UBALREC");az.push("UBALREC2");az.push("UBALREC3-9");}if(t.pageloadValidAds&&t.pageloadValidAds.indexOf("UBALDRB")>=0){az.push("UBALDRB");}var at={};if(i){var av=w.evtSettings("homepage-viewer");if(av&&av.ps){az=av.ps.split(",");}at=w.evtSettings("AUTO");}else{for(var aH in aw){if(aw.hasOwnProperty(aH)){az.push(aH);}}}for(var aE=0;aE<az.length;aE++){var ar=az[aE];var ay=w.posSettings(ar);if(ay&&ay.dest){var au=document.getElementById(ay.dest);if(au&&!a[ar]&&n(au,0)&&au.offsetHeight>1){aq.push(ar);if(!i&&ap&&ap[ar]){y(ar,ap,aq);}else{if(i&&aA&&aA[ar]){y(ar,aA,aq);}}}}}if(aq.length){var ax=at.sa||t._darlaAutoEvt.sa;if(j.togglesa&&g%2===0){ax=j.togglesa;}g++;var aD={ps:aq.join(","),name:S,sp:at.sp||t._darlaAutoEvt.sp,sa:ax,ssl:t._darlaAutoEvt.ssl,secure:t._darlaAutoEvt.secure,ref:t.location.href,npv:1,property:"fp",ult:at.ult||t._darlaAutoEvt.ult,experience:t._darlaAutoEvt.experience};t.DARLA.add(aD);t.DARLA.event(S);}return;}}function aa(){var aq="LDRB2";var ar="fetch_selective_ad_"+aq.toLowerCase();var ao=R(aq,ar);var ap=w.inProgress();if(ap){if(ap===M){w.abort();}else{setTimeout(aa,500);return;}}w.add(ao);w.addPos([G]);w.event(ar);}function x(){if(!j){return;}var av=al;var aA;var aD;var aw;var aC="";var az;var ay;var aF=[av];var ar=j.lrec4pos||"LREC4";var aH=F+ar;var aB=V.getElementById(aH);var aq=aB&&aB.dataset&&aB.dataset.config;var ax=aq&&c(aq)||C(ar,aH,aH+"-iframe",300,250);var au=j.mon2pos||"MON2";var ao=F+au;var aE=V.getElementById(ao);var aG=aE&&aE.dataset&&aE.dataset.config;var ap=aG&&c(aG)||C(au,ao,ao+"-iframe",300,600);if(av){aA=av.pos;av.id=aA;aC+=aA;}if(j.lrec4enabled){aD=ax.pos;aC+=","+aD;aF.unshift(ax);}if(j.mon2enabled){aw=ap.pos;aC+=","+aw;aF.push(ap);}ay="fetch_selective_ad_"+aA.toLowerCase();az=R(aC,ay);if(w.inProgress()){var at=w.inProgress();if(at&&at===M){w.abort();w.add(az);w.addPos(aF);w.event(ay);}else{O();return;}}else{if(j.lrec2selectiveenabled){w.add(az);w.addPos([aF]);w.event(ay);}}am();}function J(){if(!w||!t.pageloadNonCollapsedAds){return;}var aC;var aE=[];var aB=t.pageloadNonCollapsedAds;var aD=["LREC","MAST","LDRB","UBALDRB","UBALREC","UBALREC3-9"];for(var at=0;at<aD.length;at++){var ap=aD[at];if(aB.indexOf(ap)>=0){var ay=V.getElementById(F+ap);if(ay&&n(ay)){aE.push(ap);}}}if(aE.length){aC=R(aE,aj);N(aC,true);}else{if(aB.indexOf("FPAD")>=0&&t.safeframeOptinPositions&&t.safeframeOptinPositions.FPAD){aC=R("FPAD",aj);var aw=w.config();var au=V.getElementById(F+"FPAD");var az=!!(aw&&aw.positions&&aw.positions.FPAD);if(az&&au&&n(au)){N(aC);}}}if(!j){return;}var ao=V.getElementById(T);var ar=V.getElementById(q);if(ao&&n(ao)||ar&&n(ar)){var aA=[];var av=c(j.config);var aF=av&&av.pos||"";aF&&aA.push(aF);if(j.mon2enabled){aA.push("MON2");if(j.lrec4enabled&&j.lrec4pos){aA.push(j.lrec4pos);}}else{if(j.lrec4enabled&&j.lrec4pos){aA.push(j.lrec4pos);}}if(aA.length){var aq="fetch_selective_ad_"+aF.toLowerCase();var ax=R(aA.join(","),aq);w.add(ax);w.event(aq);}}am();if(ab){if(n(ab)){d();}}}function O(){var ao=0;var ar=j.fetchlaterretrycount||20;var aq=j.fetchlaterretryabort==="1";var ap=setInterval(function(){if(ao>ar){clearInterval(ap);if(aq){w.abort();x();}return;}if(!w.inProgress()){clearInterval(ap);x();}ao++;},500);}function C(at,aq,ap,ar,ao){return{pos:at,clean:aq,dest:ap,w:ar,h:ao,metaSize:true,supports:false};}function R(at,av,ax){var aw=B.context||{};var ay={pg:{property:"fp",test:aw.bucketId,intl:aw.intl,rid:aw.rid,device:aw.device}};var ap={ps:at,name:av,sp:aw.spaceid||ad,ssl:aw.isSsl||1,secure:1,ref:t.location.href,npv:1,property:"fp",ult:ay,experience:{pt:"index",pd:"modal",rid:aw.rid||"",sid:B.i13n&&B.i13n.currentSID||"",bucket:aw.bucketId||""}};for(var ar in ax){if(ax.hasOwnProperty(ar)){ap[ar]=ax[ar];}}if(t.bucketSAEnabled){var aq=aw.bucketId&&'Y-BUCKET="'+aw.bucketId+'"'||"";if(t.facCustomTimout&&t.facCustomTimout>0){aq+=" ctout="+t.facCustomTimout;}if(t.flSAKey&&"undefined"!==t.flInstalled){aq+=" "+t.flSAKey+"="+t.flInstalled;}if(t.segBlob){var au="";var ao="";for(var az in t.segBlob){if(t.segBlob.hasOwnProperty(az)){au+=ao+az+":"+t.segBlob[az];ao=";";}}aq+=' rs="'+au+'"';}aq+=" "+(t.customSiteAttr||"");ap.sa=aq;}return ap;}function ai(){var ay=!!+j.disablerotation;var aw={};var ap=j.currentpos.toLowerCase();j[ap+"enabled"]=true;var ao=j.defaultrt;var ax=t.pageloadNonCollapsedAds||[];var au=[ap,"lrec4","mon2","mast","ldrb","lrec","mon","mfpad"];if(ay||ap.toUpperCase().indexOf("UBA")!==-1){return null;}for(var aq=0;aq<au.length;aq++){var at=au[aq];if(j[at+"enabled"]||(j[at+"rt"]&&ax.indexOf(at.toUpperCase())!==-1)){aw[at.toUpperCase()]={autoIV:1,autoMax:25,autoRT:j[at+"rt"]||ao};}}var ar={autoStart:1,autoMax:25,autoRT:j.autoeventrt,autoIV:1,autoDDG:1};if(j.grouprotation){try{ar.groups=JSON.parse(j.grouprotation);}catch(av){}}return R(aw,u,ar);}function am(){if(j.autorotate){if(w&&w.inProgress()){setTimeout(function(){am();},500);}else{t._darlaAutoEvt=ai();if(w&&t._darlaAutoEvt){w.add(t._darlaAutoEvt);if(!w.isAutoOn()){w.startAuto();}}}}}function d(){if(!ab){return;}var ao=ab.getElementsByClassName(ah);if(ao&&ao.length>0){ao=ao[0];var ar=ao.getAttribute("data-url");var ap=ao.getAttribute("data-body");if(ar&&ap&&window.wafer&&window.wafer.utils&&window.wafer.utils.fetchWithCache){window.wafer.utils.fetchWithCache(ar,{body:ap,cache:0}).then(function aq(au){if(au&&au.html){ao.innerHTML=au.html;var at=ao.getElementsByClassName(l);if(at&&at.length>0){ab.replaceWith(at[0]);var av=V.getElementsByClassName(l);if(av&&av.length>0){ab=av[0];window.wafer.base.sync(ab.parentElement);}var aw=V.getElementsByClassName(af);if(aw&&aw.length>0){setTimeout(function(){Z(aw[0]);},I);}}}});}}}function N(ap,ao){ao=ao||false;if(w.inProgress()){if(w.inProgress()===M){w.abort();if(ao&&t._darlaAutoEvt&&t._darlaAutoEvt.ps){w.add(t._darlaAutoEvt);}w.add(ap);w.event(aj);}}else{if(ao&&t._darlaAutoEvt&&t._darlaAutoEvt.ps){w.add(t._darlaAutoEvt);}w.add(ap);w.event(aj);}}function Z(aw){if(!n(aw)){return;}var at=aw.getElementsByClassName("pac_image");var ao=aw.getElementsByClassName("pac_headline");var ar=aw.getElementsByClassName("pac_anchor");var au=at.length;var ap=1;var aq=1;if(!au){return;}(function av(){if(!n(aw)||aq>Q){return;}else{for(var ax=0;ax<au;ax++){if(at[ax]&&at[ax].className.indexOf("Op(0.5)")<0){at[ax].className+=" Op(0.5)";}if(ao[ax]&&ao[ax].className.indexOf("D(n)")<0){ao[ax].className+=" D(n)";}if(ar[ax]&&ar[ax].className.indexOf("D(n)")<0){ar[ax].className+=" D(n)";}if(at[ap]){at[ap].className=at[ap].className.replace(" Op(0.5)","");ao[ap].className=ao[ap].className.replace(" D(n)","");ar[ap].className=ar[ap].className.replace(" D(n)","");}}if(ap>=au-1){ap=0;aq++;}else{ap++;}setTimeout(av,I);}})();}})();/* Copyright (c) 2020, Yahoo! Inc.  All rights reserved. */
