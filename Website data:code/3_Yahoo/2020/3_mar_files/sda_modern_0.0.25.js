(function(){var p=window;var K=document;var w=p.YAHOO||{};var s=p.DARLA||null;var d=p&&p.wafer;var N;var l="viewerClosed";var S="viewerOpened";var D="homepage-viewer";var g="pageVisibilityChange";var P="scroll";var V="adRotateEvt";var q="AUTO";var H="tabswitch";var y="darlaReadyOnAsync";var A="my-ads";var o=A+"LREC2-config";var M=A+"UBALREC2-config";var I="sticky-lrec2-footer";var n="my-adsLREC4-base";var Q="2023538075";var R=100;var h;var e;var r;var W;var k="native-leaderboard-ad";var T="gemini-ad-refresh";var O;var Y;var j;var i=false;var f=0;var z=Date.now||function(){return new Date().getTime();};if(!d){return;}d.ready(function(){N=d.base||{};if(!s){p.addEventListener(y,function Z(){C();});return;}C();});function J(aa){var Z=["autorotate","disablerotation","lrec2selectiveenabled","lrec4enabled","mon2enabled"];for(var ab=0;ab<Z.length;ab++){aa[Z[ab]]=!!+aa[Z[ab]];}}function b(Z){if(!Z||typeof Z!=="string"){return"";}var ab;try{ab=JSON.parse(Z);}catch(aa){return"";}return ab;}function C(){r=K.getElementById(o)||K.getElementById(M);if(!r||!r.dataset){return;}h=b(JSON.stringify(r.dataset));if(!h||!h.config){return;}J(h);W=b(h.config);if(!W){return;}e=K.getElementById(A+W.pos);if(!s||!e){return;}var ac={offsetX:0,offsetY:parseInt(h.offset,10)||R};d.on(P,v);p.addEventListener(S,function Z(){i=true;});p.addEventListener(l,function ab(){i=false;B();});setTimeout(function(){X();a();v(ac);},300);var aa=K.getElementsByClassName(k);if(aa&&aa.length>0){O=aa[0];}}function m(Z,aa){aa=aa||{};return d.utils.elementInView(Z,aa,N.viewport);}function v(Z){if(i){return;}if(m(e,Z)){t();d.removeListener(P,v);}}function a(){j=parseInt(h.tabswitchrotate,10)||0;if(!j){return;}Y=z();d.on(g,L);if(window.addEventListener){window.addEventListener("focus",function(){L({isActive:true});});window.addEventListener("blur",function(){L({isActive:false});});}}function u(aa,ak,al){var ae=ak[aa].extrapositions&&ak[aa].extrapositions.split(",")||[];if(ak[aa].inview){var ai=true;var ac=[].concat(ak[aa].inview.split(","));for(var ad=0;ad<ac.length;ad++){var Z=ac[ad];var ag=s.posSettings(Z);if(ag){var aj=document.getElementById(ag.dest);if(!m(aj)){ai=false;}}}if(ai){var af=[].concat(ac,ae);for(ad=0;ad<af.length;ad++){nAdPos=af[ad];if(al.indexOf(nAdPos)<0){al.push(nAdPos);}}}}else{for(var ab=0;ab<ae.length;ab++){var ah=ae[ab];if(al.indexOf(ah)<0){al.push(ah);}}}}function L(ah){if(!ah.isActive){Y=z();return;}if(ah.isActive){var ab=z();if(ab-Y<j||!s||s.inProgress()){return;}if(!p._darlaAutoEvt){p._darlaAutoEvt=U();}var aj=p._darlaAutoEvt.ps;var ag=["MON"];var ao=[];var ap=h.adboostgrouprotation;var an;if(ap){try{an=JSON.parse(ap);}catch(ak){}}if(p.pageloadValidAds&&p.pageloadValidAds.indexOf("UBALREC")>=0){ag.push("UBALREC");ag.push("UBALREC2");ag.push("UBALREC3-9");}if(p.pageloadValidAds&&p.pageloadValidAds.indexOf("UBALDRB")>=0){ag.push("UBALDRB");}var aa={};if(i){var Z=s.evtSettings("homepage-viewer");if(Z&&Z.ps){ag=Z.ps.split(",");}aa=s.evtSettings("AUTO");}else{for(var am in aj){if(aj.hasOwnProperty(am)){ag.push(am);}}}for(var ai=0;ai<ag.length;ai++){var ae=ag[ai];var ad=s.posSettings(ae);if(ad&&ad.dest){var al=document.getElementById(ad.dest);if(al&&m(al,0)&&al.offsetHeight>1){ao.push(ae);if(!i&&an&&an[ae]){u(ae,an,ao);}}}}if(ao.length){var af=aa.sa||p._darlaAutoEvt.sa;if(h.togglesa&&f%2===0){af=h.togglesa;}f++;var ac={ps:ao.join(","),name:H,sp:aa.sp||p._darlaAutoEvt.sp,sa:af,ssl:p._darlaAutoEvt.ssl,secure:p._darlaAutoEvt.secure,ref:p.location.href,npv:1,property:"fp",ult:aa.ult||p._darlaAutoEvt.ult,experience:p._darlaAutoEvt.experience};p.DARLA.add(ac);p.DARLA.event(H);}return;}}function t(){if(!h){return;}var af=W;var ak;var an;var ag;var am="";var aj;var ai;var ap=[af];var ac=h.lrec4pos||"LREC4";var ar=A+ac;var al=K.getElementById(ar);var ab=al&&al.dataset&&al.dataset.config;var ah=ab&&b(ab)||x(ac,ar,ar+"-iframe",300,250);var ae=h.mon2pos||"MON2";var Z=A+ae;var ao=K.getElementById(Z);var aq=ao&&ao.dataset&&ao.dataset.config;var aa=aq&&b(aq)||x(ae,Z,Z+"-iframe",300,600);if(af){ak=af.pos;af.id=ak;am+=ak;}if(h.lrec4enabled){an=ah.pos;am+=","+an;ap.unshift(ah);}if(h.mon2enabled){ag=aa.pos;am+=","+ag;ap.push(aa);}ai="fetch_selective_ad_"+ak.toLowerCase();aj=G(am,ai);if(s.inProgress()){var ad=s.inProgress();if(ad&&ad===D){s.abort();s.add(aj);s.addPos(ap);s.event(ai);}else{F();return;}}else{if(h.lrec2selectiveenabled){s.add(aj);s.addPos([ap]);s.event(ai);}}X();}function B(){if(!s||!p.pageloadNonCollapsedAds){return;}var am;var ao=[];var al=p.pageloadNonCollapsedAds;var an=["LREC","MAST","LDRB","UBALDRB","UBALREC"];for(var ad=0;ad<an.length;ad++){var aa=an[ad];if(al.indexOf(aa)>=0){var ai=K.getElementById(A+aa);if(ai&&m(ai)){ao.push(aa);}}}if(ao.length){am=G(ao,V);E(am,true);}else{if(al.indexOf("FPAD")>=0&&p.safeframeOptinPositions&&p.safeframeOptinPositions.FPAD){am=G("FPAD",V);var ag=s.config();var ae=K.getElementById(A+"FPAD");var aj=!!(ag&&ag.positions&&ag.positions.FPAD);if(aj&&ae&&m(ae)){E(am);}}}if(!h){return;}var Z=K.getElementById(I);var ac=K.getElementById(n);if(Z&&m(Z)||ac&&m(ac)){var ak=[];var af=b(h.config);var ap=af&&af.pos||"";ap&&ak.push(ap);if(h.mon2enabled){ak.push("MON2");if(h.lrec4enabled&&h.lrec4pos){ak.push(h.lrec4pos);}}else{if(h.lrec4enabled&&h.lrec4pos){ak.push(h.lrec4pos);}}if(ak.length){var ab="fetch_selective_ad_"+ap.toLowerCase();var ah=G(ak.join(","),ab);s.add(ah);s.event(ab);}}X();if(O){if(m(O)){c();}}}function F(){var Z=0;var aa=setInterval(function(){if(Z>20){clearInterval(aa);return;}if(!s.inProgress()){clearInterval(aa);t();}Z++;},500);}function x(ad,ab,aa,ac,Z){return{pos:ad,clean:ab,dest:aa,w:ac,h:Z,metaSize:true,supports:false};}function G(ad,af,ah){var ag=w.context||{};var ai={pg:{property:"fp",test:ag.bucketId,intl:ag.intl,rid:ag.rid,device:ag.device}};var aa={ps:ad,name:af,sp:ag.spaceid||Q,ssl:ag.isSsl||1,secure:1,ref:p.location.href,npv:1,property:"fp",ult:ai,experience:{pt:"index",pd:"modal",rid:ag.rid||"",sid:w.i13n&&w.i13n.currentSID||"",bucket:ag.bucketId||""}};for(var ac in ah){if(ah.hasOwnProperty(ac)){aa[ac]=ah[ac];}}if(p.bucketSAEnabled){var ab=ag.bucketId&&'Y-BUCKET="'+ag.bucketId+'"'||"";if(p.facCustomTimout&&p.facCustomTimout>0){ab+=" ctout="+p.facCustomTimout;}if(p.flSAKey&&"undefined"!==p.flInstalled){ab+=" "+p.flSAKey+"="+p.flInstalled;}if(p.segBlob){var ae="";var Z="";for(var aj in p.segBlob){if(p.segBlob.hasOwnProperty(aj)){ae+=Z+aj+":"+p.segBlob[aj];Z=";";}}ab+=' rs="'+ae+'"';}ab+=" "+(p.customSiteAttr||"");aa.sa=ab;}return aa;}function U(){var ai=!!+h.disablerotation;var ag={};var aa=h.currentpos.toLowerCase();h[aa+"enabled"]=true;var Z=h.defaultrt;var ah=p.pageloadNonCollapsedAds||[];var ae=[aa,"lrec4","mon2","mast","ldrb","lrec","mon"];if(ai){return null;}for(var ab=0;ab<ae.length;ab++){var ad=ae[ab];if(h[ad+"enabled"]||(h[ad+"rt"]&&ah.indexOf(ad.toUpperCase())!==-1)){ag[ad.toUpperCase()]={autoIV:1,autoMax:25,autoRT:h[ad+"rt"]||Z};}}var ac={autoStart:1,autoMax:25,autoRT:h.autoeventrt,autoIV:1,autoDDG:1};if(h.grouprotation){try{ac.groups=JSON.parse(h.grouprotation);}catch(af){}}return G(ag,q,ac);}function X(){if(h.autorotate){if(s&&s.inProgress()){setTimeout(function(){X();},500);}else{p._darlaAutoEvt=U();if(s&&p._darlaAutoEvt){s.add(p._darlaAutoEvt);if(!s.isAutoOn()){s.startAuto();}}}}}function c(){if(!O){return;}var Z=O.getElementsByClassName(T);if(Z&&Z.length>0){Z=Z[0];var ac=Z.getAttribute("data-url");var aa=Z.getAttribute("data-body");if(ac&&aa&&window.wafer&&window.wafer.utils&&window.wafer.utils.fetchWithCache){window.wafer.utils.fetchWithCache(ac,{body:aa,cache:0}).then(function ab(ae){if(ae&&ae.html){Z.innerHTML=ae.html;var ad=Z.getElementsByClassName(k);if(ad&&ad.length>0){O.replaceWith(ad[0]);var af=K.getElementsByClassName(k);if(af&&af.length>0){O=af[0];window.wafer.base.sync(O.parentElement);}}}});}}}function E(aa,Z){Z=Z||false;if(s.inProgress()){if(s.inProgress()===D){s.abort();if(Z&&p._darlaAutoEvt&&p._darlaAutoEvt.ps){s.add(p._darlaAutoEvt);}s.add(aa);s.event(V);}}else{if(Z&&p._darlaAutoEvt&&p._darlaAutoEvt.ps){s.add(p._darlaAutoEvt);}s.add(aa);s.event(V);}}})();/* Copyright (c) 2020, Yahoo! Inc.  All rights reserved. */
