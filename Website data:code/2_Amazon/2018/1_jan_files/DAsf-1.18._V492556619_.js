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

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * DACX SafeFrame v1.18 -- 2017-12-07T18:10:39
*/
!function(b,c){function d(){function a(a,b,c,d){N[a]=N[a]||{},N[a][c]=g.safeFunctionWrapper(d,j,"Error within ad handler "+c+": "+b)}function d(a,b){P[a]={slotId:b,placementDivId:"ape_"+b+"_placement",iframeId:"ape_"+b+"_iframe"}}function e(a,b){var c=!0;for(var d in O){var e=O[d].iframe?O[d].iframe.contentWindow:null;if(e&&!O[d].alreadyRendered){c=!1;var f=O[d].slot;h.findPercentInView(f)>=a?O[d].timeout||(O[d].timeout=setTimeout(l(d),b)):O[d].timeout&&(clearTimeout(O[d].timeout),O[d].timeout=null)}}c&&(g.removeWindowListener("scroll",R),g.removeWindowListener("resize",R))}function f(){return e(h.PERCENT_VIEWABLE,h.DURATION_VIEWABLE)}function l(a){return function(){var b={key:"readyToRender",data:a};i.sendMessageToAd(a,"customMessage",b),O[a].timeout=null,O[a].alreadyRendered=!0}}function D(){var a={};try{for(var c=b.location.search.substring(1),d=c.split("&"),e=0;e<d.length;e++){var f=d[e].split("="),g=f[0];f.length>1&&0===g.indexOf("sf-")&&(a[g]=f[1])}}catch(h){j("Error parsing query parameters",h)}return a}function E(a){return function(){u(a.arid,a.size.width,a.size.height,a.maxAdWidth,!0,i,P)}}function F(a){try{var b,d=JSON.stringify(a),e=c.getElementById(P[a.arid].placementDivId);if(/MSIE (6|7|8)/.test(navigator.userAgent))try{b=c.createElement("<iframe name='"+d+"'>")}catch(f){b=r(d)}else b=r(d);b.id=P[a.arid].iframeId,b.src=K,b.scrolling="no",b.height=a.size.height||"250px",b.width=a.size.width||"300px",b.className=a.iframeClass||"",b.setAttribute("frameborder","0"),b.setAttribute("marginheight","0"),b.setAttribute("marginwidth","0"),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("allowfullscreen",""),b.setAttribute("mozallowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.setAttribute(L,a.arid),b.style.cssText=a.iframeExtraStyle||"",a.iframeSandbox&&(b.sandbox=a.iframeSandbox),e.appendChild(b),m("cf",a.slot,a.placementId),i.adMap[a.arid]={slot:e,iframe:b,options:a},C.adbMap[a.arid]={slot:a.slot,adBlockerIsDisabled:void 0,adImgLoaded:void 0,adImpressionsFired:void 0,adViewabilityFired:void 0,placementId:a.placementId}}catch(g){j("Error creating safeFrame",g)}}function G(a){return function(){var b=P[a.arid].placementDivId;if(b){var d=c.getElementById(b);if(d&&!d.innerHTML){var e=a.src;a.htmlContent||a.htmlContentEncoded||!e?F(a):-1!==e.indexOf("xsp")?B(e,a,b,F):F(a)}}}}function H(a,d){if(a&&!a.isFeedbackLoaded&&d.adFeedbackInfo.boolFeedback){a.isFeedbackLoaded=!0;var e=a.parentNode,f=d.slotName,g=d.adFeedbackInfo.slugText,h=d.adFeedbackInfo.endPoint,i=d.advertisementStyle,j=d.feedbackDivStyle,k={adPlacementMetaData:d.adPlacementMetaData,adCreativeMetaData:d.adCreativeMetaData},l=function(a,b){if(a&&b)for(var c in b)a.style[c]=b[c];return a},m=function(a,b,d,e){var f=c.createElement(a);for(var g in b)f.setAttribute(g,b[g]);return l(f,d),e&&e.insertBefore(f,null),f},n=e.getElementsByTagName("div")[0]||m("div",{id:e.id+"_Feedback"},j,e),o=function(){var a=n.getElementsByTagName("div")[0]||m("div",0,i,n);a.innerHTML=g},p=function(a){return encodeURIComponent(JSON.stringify(a))},q=function(a,d,e,g,h){try{var i=f.match(/\b(\w)/g).join("")+"_"+d;b[i]=e;var j=c.createElement("script");j.async=!0,j.src=a+(a.indexOf("?")>=0?"&":"?")+"callback="+i,j.onerror=g,(c.getElementsByTagName("head")[0]||c.getElementsByTagName("body")[0]).appendChild(j)}catch(k){h(k)}},r=h&&h.length?h+"?pl="+p(k):h,s=function(a){try{var b="object"==typeof a&&a;if(b&&"ok"===b.status){if("html"in b&&b.html&&(n.innerHTML=b.html),"script"in b&&b.script){var c=n.getElementsByTagName("script")[0]||m("script",0,null,n);c.innerHTML=b.script}}else o()}catch(d){o()}};r?q(r,"addFeedbackLink",s,o,o):o()}}if(b.DAsf)return void b.DAsf.loadAds();b.DAsf={version:"1.18"};var I="text/x-dacx-safeframe",J=w(),K=J+"/images/G/01/ape/sf/desktop/sf-1.18._V492556617_.html",L="data-arid",M={POST_MESSAGE_UNSUPPORTED:"d16g_postMessageUnsupported",POST_MESSAGE_SUPPORTED:"d16g_postMessageSupported"},N={},O={},P={},Q=null,R=null;R=g.safeFunctionWrapper(g.debounce(f,100)),i.supportedCommands={resizeSafeFrameAd:function(a,b){g.addWindowListener("resize",N[a.options.arid].defaultResizeSafeFrameHandler),u(a.options.arid,a.options.size.width,a.options.size.height,a.options.maxAdWidth,!0,i,P)},changeSize:function(a,b){var c=a.options.allowedSizes;if(A(b,c,y))a.iframe.height=b.height,a.iframe.width=b.width;else{var d="Size is not whitelisted: "+b.width+" x "+b.height+k(a.options.arid);j(d)}},collapseSlot:function(a,b){t(P[a.options.arid].placementDivId),"nav-sitewide-msg"===a.options.slotName&&v("amznJQ.available:navbarJSLoaded",function(){"undefined"!=typeof parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(a,b){var d=a.options.allowedDomains;if(A(b.src,d,x))a.slot=c.getElementById(P[a.options.arid].placementDivId),"undefined"!=typeof a.slot&&z(b.src,a.slot,b.charset);else{var e="Domain is not whitelisted: "+b.src+k(a.options.arid);j(e)}},logError:function(a,b){j(b.message+k(a.options.arid)+": "+a.options.slot,b.error)},sendMetrics:function(a,b){m(b.metric,a.options.slot,a.options.placementId,b.metricMsg)},countMetric:function(a,b){n(a.options.slot,a.options.placementId,b.metricMsg,b.value)},addCsmTag:function(a,b){o(b.tag,a.options.slot,a.options.placementId,b.msg)},fireViewableLatencyMetrics:function(a,b){p(a.options.arid,a.options.slot,a.options.placementId)},customMessage:function(a,b){i.customMessage(b.key,b.body)},notifyWhenViewable:function(a,b){O[a.options.arid]||(a.rendered=!1,O[a.options.arid]=a),R(),g.addWindowListener("scroll",R),g.addWindowListener("resize",R)},enableViewabilityTracker:function(b){i.updateViewability(b.options.arid);var d=g.throttle(i.updateViewability,20);a(b.options.arid,b.options.slot,"viewabilityTracker",function(){d(b.options.arid)}),g.addWindowListener("scroll",N[b.options.arid].viewabilityTracker),g.addWindowListener("resize",N[b.options.arid].viewabilityTracker),g.addListener(c,"visibilitychange",N[b.options.arid].viewabilityTracker)},enableNoInventoryViewabilityTracker:function(b,d){i.updateNoInventoryViewability(b.options.arid,d);var e=g.throttle(i.updateNoInventoryViewability,20);a(b.options.arid,b.options.slot,"noInventoryViewabilityTracker",function(){e(b.options.arid,d)}),g.addWindowListener("scroll",N[b.options.arid].noInventoryViewabilityTracker),g.addWindowListener("resize",N[b.options.arid].noInventoryViewabilityTracker),g.addListener(c,"visibilitychange",N[b.options.arid].noInventoryViewabilityTracker)},loadAdBlockerDetectorScript:function(a,b){var d=w()+"/images/G/01/ads/advertising/ads._TTH_.js?cachebust="+Math.ceil(99989999*Math.random()+1e4),e=g.safeFunctionWrapper(function(){C.updateAdBlockerIsDisabled(a.options.arid,!1),i.sendMessageToAd(a.options.arid,"forceFallback",{})}),f=function(){C.updateAdBlockerIsDisabled(a.options.arid,!0)},h=g.createScript(d,"text/javascript","APE_adblockerdetector",e,f),j=c.getElementById(P[a.options.arid].placementDivId);j?j.appendChild(h):c.body.appendChild(h)},updateAdImpressionsFired:function(a,b){C.updateAdImpressionsFired(a.options.arid,b.isImpFired)},updateAdViewabilityFired:function(a,b){C.updateAdViewabilityFired(a.options.arid,b.isViewed)},updateNoInventoryViewabilityFired:function(a,b){C.updateNoInventoryViewabilityFired(a.options.arid,b.isViewed)},updateAdImgLoaded:function(a,b){C.updateAdImgLoaded(a.options.arid,b.isLoaded)},loadAdFeedback:function(a,b){var c=i.adMap[a.options.arid].iframe;a.options.adCreativeMetaData=b,H(c,a.options)},updateNoInventoryImpressionFired:function(a,b){C.updateNoInventoryImpressionFired(a.options.arid,b.isNoInventoryImpFired)},safeFrameReady:function(a){},requestVideoAutoplay:function(a,b){if(Q===a.options.arid&&i.sendCustomMessageToAd(a.options.arid,"videoAutoplayResponse",!0),null===Q&&null!==a.options.arid){var d=c.getElementsByTagName("video"),e=d&&0===d.length;Q=e?a.options.arid:null,i.sendCustomMessageToAd(a.options.arid,"videoAutoplayResponse",e)}},releaseVideoAutoplay:function(a,b){Q=null,i.sendCustomMessageToAd(a.options.arid,"videoAutoplayReleased")}},g.addWindowListener("message",i.receiveMessage),b.DAsf.registerCustomMessageListener=i.registerCustomMessageListener,b.DAsf.sendCustomMessage=i.sendCustomMessage,b.DAsf.loadAds=function(){var e=0,f=null,g=[];if("function"!=typeof c.getElementsByClassName){var h=c.getElementsByTagName("div"),i=c.getElementsByTagName("script"),k=0;for(k=0;k<h.length;k++)g[k]=h[k];for(k=0;k<i.length;k++)g[k+h.length]=i[k]}else g=c.getElementsByClassName(I);for(0===g.length&&(g=c.getElementsByTagName("script"));f=g[e++];)if(("DIV"===f.tagName&&q(f,I)||f.getAttribute("type")===I)&&!f.getAttribute(L)){var l=f.getAttribute("data-ad-details")||f.text||f.innerHTML||f.innerText;try{l=JSON.parse(l),l.arid=l.arid||Math.random().toString(16).slice(2),f.setAttribute(L,l.arid),l.hostDomain=location.protocol+"//"+location.host,l.allowedSizes="object"==typeof l.allowedSizes&&l.allowedSizes.length>=0?l.allowedSizes.concat(l.size):[l.size];var n="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(l.allowedDomains="object"==typeof l.allowedDomains&&l.allowedDomains.length>=0?l.allowedDomains.concat(n):n,l.productAdsUrl=b.paSearchTowerAdsURL||b.paCusRevAllURL,l.parentLocation=location.origin||location.protocol+location.hostname,l.queryParams=D(),l.aPageStart=b.aPageStart,l.adStartTime=b[l.slotName]?b[l.slotName].adStartTime||0:0,a(l.arid,l.slot,"defaultResizeSafeFrameHandler",E(l)),d(l.arid,l.slot),l.forcePunt){o("forcePunt",l.slot,l.placementId),t(P[l.arid].placementDivId);continue}if(m("af",l.slot,l.placementId),"function"!=typeof b.postMessage){s(M.POST_MESSAGE_UNSUPPORTED,1),t(P[l.arid].placementDivId);continue}s(M.POST_MESSAGE_SUPPORTED,1),v(l.loadAfter,G(l),0,f)}catch(p){l=null,j("Error parsing sf tag",p)}}},b.DAsf.loadAds()}var e=a("./components/msgHandler"),f=a("./components/adBlockerHandler"),g=e.util,h=e.viewability,i=e.messenger,j=e.logError,k=i.appendErrorDetails,l=e.loadScript,m=e.sendCsmMetric,n=e.sendCsmCounter,o=e.addCsmTag,p=e.fireViewableLatencyMetrics,q=e.hasClass,r=e.createIframeWithName,s=e.logCounter,t=e.collapseSlot,u=e.resizeSafeFrameAd,v=e.delayLoad,w=e.getMediaCentralOrigin,x=e.scriptValidator,y=e.sizeValidator,z=e.appendJsScript,A=e.checkAgainstWhitelist,B=e.createXspAjaxRequest,C=new f.AdBlockerCSMMediator(n),D=function(){"undefined"==typeof JSON?l("https://web.archive.org/web/20180101001610/https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",d):d()};g.safeFunctionWrapper(D,j,"Error initializing safeFrame")()}(window,document)},{"./components/adBlockerHandler":2,"./components/msgHandler":3}],2:[function(a,b,c){function d(a,b){var c=this;this.adbMap=b||{};var d=function(b,d,e){var f=c.adbMap;f[b].adBlockerIsDisabled!==!0&&void 0!==f[b].adBlockerIsDisabled&&f[b].adBlockerIsDisabled===!1&&(d===!1?a(f[b].slot,f[b].placementId,"adblocker:blocked:".concat(e),1):d===!0&&a(f[b].slot,f[b].placementId,"adblocker:notblocked:".concat(e),1))};this.updateAdBlockerIsDisabled=function(b,e){var f=c.adbMap;f[b]&&(f[b].adBlockerIsDisabled=e,f[b].adBlockerIsDisabled?a(f[b].slot,f[b].placementId,"adblockernotdetected",1):a(f[b].slot,f[b].placementId,"adblockerdetected",1),d(b,f[b].adImgLoaded,"adimg"),d(b,f[b].adImpressionsFired,"adimpressions"),d(b,f[b].adViewabilityFired,"adviewability"))},this.updateAdImgLoaded=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImgLoaded&&(e[a].adImgLoaded=b,d(a,e[a].adImgLoaded,"adimg"))},this.updateAdImpressionsFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adImpressionsFired&&(e[a].adImpressionsFired=b,d(a,e[a].adImpressionsFired,"adimpressions"))},this.updateAdViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].adViewabilityFired&&(e[a].adViewabilityFired=b,d(a,e[a].adViewabilityFired,"adviewability"))},this.updateNoInventoryViewabilityFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].noInventoryViewabilityFired&&(e[a].noInventoryViewabilityFired=b,d(a,e[a].noInventoryViewabilityFired,"noInventoryViewability"))},this.updateNoInventoryImpressionFired=function(a,b){var e=c.adbMap;e[a]&&void 0===e[a].noInventoryImpressionsFired&&(e[a].noInventoryImpressionsFired=b,d(a,e[a].noInventoryImpressionsFired,"noInventoryImpressions"))}}b.exports.AdBlockerCSMMediator=d},{}],3:[function(a,b,c){function d(a,b){var c=b||new Error(a);n("",null,"safeFrameError",1),window.sfLogErrors&&(window.ueLogError?window.ueLogError(c,{logLevel:z.ERROR,attribution:"APE-safeframe",message:a+" "}):"undefined"!=typeof console&&console.error&&console.error(a,c))}function e(){var a=window.location.host.match(/^.*\.([^.:\/]*)/),b=null;if(a&&a.length>1&&(b=a[1]),!/s/.test(location.protocol))return"cn"===b?"https://web.archive.org/web/20180101001610/http://g-ec4.images-amazon.com":"https://web.archive.org/web/20180101001610/http://z-ecx.images-amazon.com";var c="na";return/^(com|ca|mx)$/.test(b)?c="na":/^(uk|de|fr|it|es|in)$/.test(b)?c="eu":/^(jp)$/.test(b)?c="fe":/^(cn)$/.test(b)&&(c="cn"),"https://web.archive.org/web/20180101001610/https://images-"+c+".ssl-images-amazon.com"}function f(a){return a.replace(/^.{1,5}:\/\/|^\/\//,"")}function g(a,b){var c=document.createElement("script");c.src=a,c.setAttribute("crossorigin","anonymous"),c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!==c.readyState&&"complete"!==c.readyState||(c.onload=c.onreadystatechange=null,b&&"function"==typeof b&&b())},c.onerror=function(a){return d("Error loading script",a),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}function h(a,b,c){var d=document.createElement("script");d.charset=c||"utf-8",d.src=a,b.appendChild(d)}function i(a,b){var c=/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/,d=a.match(c)[2];return d===b}function j(a,b){return a.height===b.height&&a.width===b.width}function k(a,b,c){if(!b||"object"!=typeof b)return!1;for(var d=0,e=b.length;e>d;d++)if(c(a,b[d]))return!0;return!1}function l(a,b,c){var e=this;this.adMap=a||{},this.supportedCommands=b||{},this.msgListeners=c||{};var g=function(a){var b=e.adMap,c=b[a].options;if(b==={}||c==={})return null;var d="ape_"+c.slot+"_iframe";return b[a].iframe&&(b[a].iframe=b[a].iframe&&b[a].iframe.innerHTML?b[a].iframe:document.getElementById(d)),b[a].iframe};this.sendMessageToAd=function(a,b,c){var d=g(a),e=d?d.contentWindow:null;if(e){var f={command:b,data:c};f=JSON.stringify(f),e.postMessage(f,"*")}},this.receiveMessage=function(a){var b=e.adMap,c=e.supportedCommands;if(b!=={}){var g,h,i;try{if(a.data&&a.data.message&&/.*Mash.*/i.test(a.data.message.id))return;if(g=JSON.parse(a.data),h=b[g.arid],!h||f(a.origin)!==f(A)||"object"!=typeof g.data)throw"Invalid Message: "+JSON.stringify(a.data)}catch(j){return i="Received Error: "+a.data,"undefined"!=typeof g&&g&&(i+=e.appendErrorDetails(g.arid)),void d(i,j)}h.options.debug&&"undefined"!=typeof console&&console.log(a);try{var k=c[g.command];k&&k(h,g.data)}catch(j){i="Problem with message: "+a.data,"undefined"!=typeof g&&(i+=e.appendErrorDetails(g.arid)),d(i,j)}}},this.appendErrorDetails=function(a){var b=e.adMap;if(b==={})return"";var c="";if("undefined"!=typeof b[a]){var d=b[a].options;"undefined"!=typeof d.aanResponse&&(c=" Ad Details: "+JSON.stringify(d.aanResponse))}return c},this.customMessage=function(a,b){var c=e.msgListeners;if(c[a])try{c[a](b)}catch(f){d("Custom Message Error",f)}else d("Unrecognized custom message key: "+a)},this.registerCustomMessageListener=function(a,b,c){var f=!1,g=e.msgListeners;try{if(!g[a]||"function"!=typeof g[a]||c)g[a]=b,f=!0;else{var h=new Error("Custom message listener already exists for key: "+a);d("Duplicate Key",h)}}catch(i){d("Error registering custom message listener",i)}return f},this.sendCustomMessage=function(a,b){var c=e.adMap,d={key:a,data:b};for(var f in c)e.sendMessageToAd(f,"customMessage",d)},this.sendCustomMessageToAd=function(a,b,c){var d={key:b,data:c};e.sendMessageToAd(a,"customMessage",d)},this.updateViewability=function(a){var b=e.adMap,c=b[a].options;if(b!=={}&&c!=={}){var d=g(a),f=b[a].options.viewabilityStandards,h=x.getViewableInfo(d);null!==h&&(h.viewabilityStandards=f,e.sendMessageToAd(a,"updateViewability",h))}},this.updateNoInventoryViewability=function(a,b){var c=e.adMap,d=c[a].options;if(c!=={}&&d!=={}){try{var f=b.adHeight,g=b.adWidth,h=Number(f.substring(0,f.indexOf("px")))||f,i=Number(g.substring(0,g.indexOf("px")))||g,j=Math.round(h*b.divOffsetWidth/i),k=b.divOffsetWidth}catch(l){return}var m={height:j,width:k},n=c[a].options.viewabilityStandards,o=x.getNoAdViewableInfo(b.noAdPositionInfo,m,b.originalScrollX,b.originalScrollY);null!==o&&(o.viewabilityStandards=n,e.sendMessageToAd(a,"updateNoInventoryViewability",o))}}}function m(a,b,c,d){var e=B[a],f=d?d+":":"";"function"==typeof window[e]&&(window[e](a,"adplacements:"+f+b.replace(/\_/g,":"),{wb:1}),c&&window[e](a,"adplacements:"+f+c,{wb:1}))}function n(a,b,c,d){var e=c&&a?c+":":c,f="adplacements:"+e+a.replace(/\_/g,":"),g=window.ue&&"function"==typeof window.ue.count;if(g&&(window.ue.count(f,d),b)){var h=c&&b?c+":":c,i="adplacements:"+h+b;window.ue.count(i,d)}}function o(a,b,c,d){if(window.ue&&window.ue.tag){var e=a+":"+b.replace(/\_/g,":")+(d?":"+d:"");if(window.ue.tag(e),c){var f=a+":"+c+(d?":"+d:"");window.ue.tag(f)}}}function p(a,b,c){window.apeViewableLatencyTrackers&&window.apeViewableLatencyTrackers[a]&&window.apeViewableLatencyTrackers[a].valid&&(window.apeViewableLatencyTrackers[a].loaded=!0,window.apeViewableLatencyTrackers[a].viewed&&(m("ld",b,c,"viewablelatency"),n(b,c,"htmlviewed:loaded",1)))}function q(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=a.className;return d&&c.test(d)}function r(a){var b=document.createElement("iframe");return b.name=a,b}function s(a,b){var c=window.ue&&"function"==typeof window.ue.count;c&&window.ue.count(a,b)}function t(a){var b=document.getElementById(a);"undefined"!=typeof b&&b&&(b.style.display="none")}function u(a,b,c,e,f,g,h){try{var i=document.getElementById(h[a].placementDivId),j=document.getElementById(h[a].wrapperDivId)||i,k=document.getElementById(h[a].iframeId);if(null===j||null===i||null===k)return;var l=c,m=b,n=function(a){l=a*c/b,m=a};if(f){var o=0===j.offsetWidth?window.innerWidth:j.offsetWidth;n(e?window.innerHeight<window.innerWidth?e:o:o)}l=Math.round(l)+"px",m=Math.round(m)+"px",k.style.height=l,k.style.width=m;var p={width:m,height:l};j!==i&&(i.style.height=l,g.sendMessageToAd(a,"resizeCreativeWrapper",p))}catch(q){d("Error resizing ad: "+h[a].slotId,q)}}function v(a,b,c,e){n(b.slot,null,"ajax:request",1);var f=function(a){if(4===a.readyState)if(200===a.status)try{var d=a.responseText;if(d){var f=JSON.parse(d),g=f.status;switch(g){case"punt":o("aaxPunt",b.slot),n(b.slot,null,"ajax:punt",1),b.noInventory="true";var h=document.getElementById(c);"undefined"!=typeof h&&h&&b.noInventory&&(b.noAdPositionInfo=h.getBoundingClientRect(),b.originalScrollX=window.scrollX,b.originalScrollY=window.scrollY,b.offsetWidth=h.offsetWidth),t(c),b.aaxInstrPixelUrl=f.instrPixelURL,e(b);break;case"error":n(b.slot,null,"ajax:error",1),t(c);break;default:b.aaxImpPixelUrl=f.impPixelURL,b.aaxInstrPixelUrl=f.instrPixelURL,b.htmlContent=f.creative,b&&b.adFeedbackInfo&&(b.adFeedbackInfo.adProgramId=f.programId),b&&b.adCreativeMetaData&&(b.adCreativeMetaData.adProgramId=f.programId,b.adCreativeMetaData.adImpressionId=f.impPixelURL,b.adCreativeMetaData.adCreativeId=f.creativeId,b.adCreativeMetaData.adId=f.adId,o("adRender",b.slot),o("adRender",b.slot,"creativeId:"+b.adCreativeMetaData.adCreativeId),o("adRender",b.slot,"programId:"+b.adCreativeMetaData.adProgramId)),e(b),n(b.slot,null,"ajax:renderad",1)}}else t(c),n(b.slot,null,"ajax:noad",1)}catch(i){t(c)}else n(b.slot,null,"ajax:errorstatus",1),t(c)},g=function(){n(b.slot,null,"ajax:xhrnotsupported",1),t(c)},h=function(a){n(b.slot,null,"ajax:exception",1),d("Error building AJAX request",a),t(c)};y.sendAjaxRequest("GET",a,!0,f,g,h)}function w(a,b,c,d){var e="undefined"!=typeof P,f="undefined"!=typeof amznJQ,g=0!==c?function(){setTimeout(b,c)}:b;if("windowOnLoad"===a)"complete"===document.readyState?g():y.addWindowListener("load",g);else if("spATFEvent"===a)e?P.when("search-page-utilities").execute(function(a){a.afterEvent("spATFEvent",g)}):f?amznJQ.available("search-js-general",function(){window.SPUtils.afterEvent("spATFEvent",g)}):g();else if("criticalFeature"===a)e?P.when("cf").execute(g):f?amznJQ.onCompletion("amznJQ.criticalFeature",g):g();else if("r2OnLoad"===a)e?P.when("r2Loaded").execute(g):f?amznJQ.onReady("r2Loaded",g):g();else if(a.match("[^:]+:.+")){var h=a.split(":");if(h.length>1){var i=h[0].split("."),j=h[1],k=h.length>2?h[2]:j;e?P.when(k,"A").execute(g):f&&i.length>1?amznJQ[i[1]](j,g):g()}else g()}else if(a.match(/^\d{1,4}px$/g)){var l=!1,m=function(a,b,c){c&&x.findDistanceInView(c)<=parseInt(a,10)&&(b(),l=!0)},n=y.safeFunctionWrapper(y.throttle(function(){m(a,g,d),l&&(y.removeWindowListener("scroll",n),y.removeWindowListener("resize",n))},20));y.addWindowListener("scroll",n),y.addWindowListener("resize",n)}else g()}var x=a("./viewability"),y=a("./util"),z={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"},A=e(),B={wb:"ues",bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};b.exports.util=y,b.exports.viewability=x,b.exports.messenger=new l,b.exports.logError=d,b.exports.SF_DOMAIN=A,b.exports.loadScript=g,b.exports.sendCsmMetric=m,b.exports.sendCsmCounter=n,b.exports.addCsmTag=o,b.exports.fireViewableLatencyMetrics=p,b.exports.hasClass=q,b.exports.createIframeWithName=r,b.exports.logCounter=s,b.exports.collapseSlot=t,b.exports.resizeSafeFrameAd=u,b.exports.createXspAjaxRequest=v,b.exports.delayLoad=w,b.exports.getMediaCentralOrigin=e,b.exports.appendJsScript=h,b.exports.scriptValidator=i,b.exports.sizeValidator=j,b.exports.checkAgainstWhitelist=k},{"./util":4,"./viewability":5}],4:[function(a,b,c){function d(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b}function e(a){var b,c,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)f=j.indexOf(a.charAt(l++)),g=j.indexOf(a.charAt(l++)),h=j.indexOf(a.charAt(l++)),i=j.indexOf(a.charAt(l++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,k+=String.fromCharCode(b),64!=h&&(k+=String.fromCharCode(c)),64!=i&&(k+=String.fromCharCode(e));return k=d(k)}function f(){return window.P&&window.P.AUI_BUILD_DATE}/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
b.exports.debounce=function(a,b,c){var d,e,f,h,i,j=function(){var k=g()-h;b>k&&k>=0?d=setTimeout(j,b-k):(d=null,c||(i=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,h=g();var k=c&&!d;return d||(d=setTimeout(j,b)),k&&(i=a.apply(f,e),f=e=null),i}},b.exports.throttle=function(a,b,c){var d,e,f,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:g(),h=null,f=a.apply(d,e),h||(d=e=null)};return function(){var k=g();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,f=a.apply(d,e),h||(d=e=null)):h||c.trailing===!1||(h=setTimeout(j,l)),f}};var g=function(){return Date.now?Date.now():(new Date).getTime()};b.exports.addListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):window.attachEvent&&a.attachEvent("on"+b,c)},b.exports.addWindowListener=function(a,c){b.exports.addListener(window,a,c)},b.exports.removeWindowListener=function(a,b){window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b)},b.exports.getQueryString=function(a,b){var c=[];for(var d in a)c.push(d+"="+a[d]);var e=c.join("&");return b?encodeURIComponent(e):e},b.exports.ensureMessageListener=function(a){b.exports.removeWindowListener("message",a),b.exports.addWindowListener("message",a)},b.exports.extend=function(a){for(var b,c,d=1,e=arguments.length;e>d;d++){b=arguments[d];for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&null!==b[c]&&(a[c]=b[c])}return a},b.exports.decodeBase64=e,b.exports.sendAjaxRequest=function(a,b,c,d,e,f){try{var g=null;window.XMLHttpRequest?g=new XMLHttpRequest:window.ActiveXObject&&(g=new ActiveXObject("Microsoft.XMLHTTP")),g?(g.onreadystatechange=function(){d(g)},g.open(a,b,c),g.send()):"function"==typeof failFallback&&e()}catch(h){"function"==typeof errorHandler&&f()}},b.exports.createScript=function(a,b,c,d,e){if(!document.getElementById(c)){var f=document.createElement("script");return f.async=!0,f.setAttribute("crossorigin","anonymous"),f.src=a,f.type=b,f.id=c,f.onerror=d,f.onload=e,f}},b.exports.isAUIAvailable=f,b.exports.safeFunctionWrapper=function(a,b,c){return f()&&"function"==typeof window.P.guardError?P.guardError("APE-SafeFrame",a):function(){try{a.apply(this,arguments)}catch(d){"function"==typeof b&&c&&b(c,d)}}}},{}],5:[function(a,b,c){function d(a,b,c){var d=0;return document.hidden?d:(d=a>0?c-a:b>0?Math.min(b,c):0,Math.min(d,b-a))}function e(){try{var a={};return a.t=window.screenY?window.screenY:window.screenTop,a.l=window.screenX?window.screenX:window.screenLeft,a.w=b.exports.windowWidth(),a.h=b.exports.windowHeight(),a.b=a.t+a.h,a.r=a.l+a.w,a}catch(c){return null}}function f(a){try{var c={},e=a.getBoundingClientRect();c.t=e.top,c.l=e.left,c.r=e.right,c.b=e.bottom,c.w=e.width||c.r-c.l,c.h=e.height||c.b-c.t,c.z=Number(window.getComputedStyle(a,null).zIndex);var f=b.exports.windowWidth(),g=b.exports.windowHeight(),h=d(e.top,e.bottom,g),i=d(e.left,e.right,f),j=h*i,k=c.h*Math.min(c.w,b.exports.windowWidth());return c.xiv=Number(Math.min(1,Math.max(0,i/c.w)).toFixed(2)),c.yiv=Number(Math.min(1,Math.max(0,h/c.h)).toFixed(2)),c.iv=Number(Math.min(1,Math.max(0,j/k)).toFixed(2)),c}catch(l){return null}}function g(a,c,e,f){try{var g={};g.t=a.top-(window.scrollY-f),g.l=a.left-(window.scrollX-e);var h=c.width;g.r=g.l+h;var i=c.height;g.b=i+g.t,g.w=h,g.h=i;var j=b.exports.windowWidth(),k=b.exports.windowHeight(),l=d(g.t,g.b,k),m=d(g.l,g.r,j),n=l*m,o=g.h*Math.min(g.w,b.exports.windowWidth());return g.xiv=Number(Math.min(1,Math.max(0,m/g.w)).toFixed(2)),g.yiv=Number(Math.min(1,Math.max(0,l/g.h)).toFixed(2)),g.iv=Number(Math.min(1,Math.max(0,n/o)).toFixed(2)),g}catch(p){return null}}function h(a){try{var c={},d=a.getBoundingClientRect();return c.t=d.top,c.l=d.left,c.r=b.exports.windowWidth()-d.right,c.b=b.exports.windowHeight()-d.bottom,c.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>b.exports.windowWidth()?1:0,c.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>b.exports.windowHeight()?1:0,c}catch(e){return null}}function i(a,c,d,e){try{var f={};return f.t=a.top-(window.scrollY-e),f.l=a.left-(window.scrollX-d),f.r=b.exports.windowWidth()-a.left+(window.scrollX-d)-c.width,f.b=b.exports.windowHeight()-a.top+(window.scrollY-e)-c.height,f.xs=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth)>b.exports.windowWidth()?1:0,f.yx=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)>b.exports.windowHeight()?1:0,f}catch(g){return null}}b.exports.PERCENT_VIEWABLE=.5,b.exports.DURATION_VIEWABLE=500,b.exports.findPercentInView=function(a){try{var c=a.getBoundingClientRect(),e=d(c.top,c.bottom,b.exports.windowHeight()),f=d(c.left,c.right,b.exports.windowWidth()),g=e*f,h=(c.bottom-c.top)*Math.min(c.right-c.left,b.exports.windowWidth());return Math.min(1,Math.max(0,g/h))}catch(i){return null}},b.exports.findDistanceInView=function(a){try{var c=a.getBoundingClientRect();return c.top-b.exports.windowHeight()}catch(d){return null}},b.exports.getViewableInfo=function(a){if(!a)return null;var b={},c=e(),d=f(a),g=h(a);return c&&d&&g?(b.geom={},b.geom.win=c,b.geom.self=d,b.geom.exp=g,b.payload={},b.payload.wh=c.h,b.payload.ww=c.w,b.payload.sx=window.scrollX,b.payload.sy=window.scrollY,b.payload.ah=d.h,b.payload.aw=d.w,b.payload.top=d.t,b.payload.left=d.l,b):null},b.exports.getNoAdViewableInfo=function(a,b,c,d){var f={},h=e(),j=g(a,b,c,d),k=i(a,b,c,d);return h&&j&&k?(f.geom={},f.geom.win=h,f.geom.self=j,f.geom.exp=k,f.payload={},f.payload.wh=h.h,f.payload.ww=h.w,f.payload.sx=window.scrollX,f.payload.sy=window.scrollY,f.payload.ah=j.h,f.payload.aw=j.w,f.payload.top=j.t,f.payload.left=j.l,f):null},b.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}]},{},[1]);

}
/*
     FILE ARCHIVED ON 00:16:10 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:19:45 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 110.866
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.054
  esindex: 0.009
  LoadShardBlock: 57.692 (3)
  PetaboxLoader3.datanode: 109.491 (5)
  load_resource: 224.734 (2)
  PetaboxLoader3.resolve: 151.808 (2)
*/