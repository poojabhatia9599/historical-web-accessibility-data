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

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(require,module,exports){/**
 * @license
 * Copyright (c) 2014, Amazon.com
 * DACX SafeFrame v1.36_FX2 -- 2016-07-14T10:24:02
*/
!function(window,document){function logError(a,b,c){b=b||new Error(a),c!=ERROR_TYPE.WARN&&(window.ueLogError?window.ueLogError(b,{logLevel:c||ERROR_TYPE.ERROR,attribution:"DACX-safeframe",message:a+" "}):"undefined"!=typeof console&&console.error&&console.error(a,b))}function loadScript(a,b){var c=document.createElement("script");c.src=a,c.onload=c.onreadystatechange=function(){c.readyState&&"loaded"!=c.readyState&&"complete"!=c.readyState||(c.onload=c.onreadystatechange=null,b&&"function"==typeof b&&b())},c.onerror=function(a){return logError("Error loading script",a,ERROR_TYPE.WARN),!1},(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(c)}function initSafeframe(){function getMediaCentralOrigin(){var a=window.location.host.match(/^.*\.([^.:\/]*)/),b=null;if(a&&a.length>1&&(b=a[1]),!/s/.test(location.protocol))return"cn"===b?"https://web.archive.org/web/20160801024520/http://g-ec4.images-amazon.com":"https://web.archive.org/web/20160801024520/http://z-ecx.images-amazon.com";var c="na";return/^(com|ca|mx|es)$/.test(b)?c="na":/^(uk|de|fr|it|in)$/.test(b)?c="eu":/^(jp)$/.test(b)?c="fe":/^(cn)$/.test(b)&&(c="cn"),"https://web.archive.org/web/20160801024520/https://images-"+c+".ssl-images-amazon.com"}function initializeAdIds(a,b){-1!==b.indexOf("DA")?AD_IDS[a]={slotId:b,placementDivId:b}:AD_IDS[a]={slotId:b,placementDivId:"ape_"+b+"_placement",iframeId:"ape_"+b+"_iframe"}}function receiveMessage(a){var b,c;try{if(b=JSON.parse(a.data),c=AD_MAP[b.arid],!c||stripProtocol(a.origin)!==stripProtocol(SF_DOMAIN)||"object"!=typeof b.data)throw"Invalid Message: "+JSON.stringify(a.data)}catch(d){var e="Received Error: "+a.data;return"undefined"!=typeof b&&(e+=appendErrorDetails(b.arid)),void logError(e,d,ERROR_TYPE.WARN)}c.options.debug&&"undefined"!=typeof console&&console.log(a);try{var f=SupportedCommands[b.command];f&&f(c,b.data)}catch(d){var e="Problem with message: "+a.data;"undefined"!=typeof b&&(e+=appendErrorDetails(b.arid)),logError(e,d,ERROR_TYPE.WARN)}}function appendJsScript(a,b,c){var d=document.createElement("script");d.charset=c||"utf-8",d.src=a,b.appendChild(d)}function scriptValidator(a,b){var c=/^((?:https?:)?\/\/)?([\w\-\.]+(?::[0-9]+)?)\/?(.*)$/,d=a.match(c)[2];return d==b}function sizeValidator(a,b){return a.height==b.height&&a.width==b.width}function checkAgainstWhitelist(a,b,c){if(!b||"object"!=typeof b)return!1;for(var d=0,e=b.length;e>d;d++)if(c(a,b[d]))return!0;return!1}function openFeedback(a,b){if("function"==typeof window.DA.s)window.DAF=[a,b],window.DA.s(window.DA.f+"-external");else if("function"==typeof window.d16g_showFeedbackDialog){var c={a:b,c:a};window.d16g_showFeedbackDialog(c)}else{var d="Unable to open feedback popover (campaign:"+a+") aanParams: "+b;logError(d,null,ERROR_TYPE.ERROR)}}function getQueryParams(){var a={};try{for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("="),f=e[0];e.length>1&&0===f.indexOf("sf-")&&(a[f]=e[1])}}catch(g){logError("Error parsing query parameters",g,ERROR_TYPE.ERROR)}return a}function sendCsmMetric(a,b,c){var d=csmFunctionHash[a];if("function"==typeof window[d]){var e=c?b+":"+c:b;if(window[d](a,e,{wb:1}),-1===e.indexOf("DA")){var f=e.split("_")[1],g=f.split("-");e="";for(var h in g)e+=g[h][0];window[d](a,"DA"+e,{wb:1}),c=c?c+":":"",window[d](a,"adplacements:"+c+b.replace(/\_/g,":"),{wb:1})}}}function stripProtocol(a){return a.replace(/^.{1,5}:\/\/|^\/\//,"")}function hasClass(a,b){var c=new RegExp("(^|\\s)"+b+"(\\s|$)"),d=a.className;return d&&c.test(d)}function customMessage(a,b){if(MSG_LISTENERS[a])try{MSG_LISTENERS[a](b)}catch(c){logError("Custom Message Error",c)}else logError("Unrecognized custom message key: "+a,null,ERROR_TYPE.ERROR)}function createIframeWithName(a){var b=document.createElement("iframe");return b.name=a,b}function createSafeFrame(a){try{var b,c=JSON.stringify(a),d=document.getElementById(AD_IDS[a.arid].placementDivId);if(/MSIE (6|7|8)/.test(navigator.userAgent))try{b=document.createElement("<iframe name='"+c+"'>")}catch(e){b=createIframeWithName(c)}else b=createIframeWithName(c);b.src=SF_HTML,b.scrolling="no",b.height=a.size.height||"250px",b.width=a.size.width||"300px",b.className=a.iframeClass||"",b.setAttribute("frameborder","0"),b.setAttribute("marginheight","0"),b.setAttribute("marginwidth","0"),b.setAttribute("scrolling","no"),b.setAttribute("allowtransparency","true"),b.setAttribute("allowfullscreen",""),b.setAttribute("mozallowfullscreen",""),b.setAttribute("webkitallowfullscreen",""),b.setAttribute(ARID_ATTR,a.arid),b.style.cssText=a.iframeExtraStyle||"",b.a=a.aanParams||{},b.f=a.feedbackJsUrl||1,b.c=a.campaignId,b.isSafeframeGoldbox="goldbox-ads"==a.slotName,b.boolFeedback=a.boolFeedback,b.onload=function(){setTimeout(function(){resizeBillboardAd(AD_IDS[a.arid].placementDivId)},0)},a.showInlineFeedback&&(b.ifp=a.inlineFeedbackParams||{}),d.appendChild(b),sendCsmMetric("cf",a.slot),AD_MAP[a.arid]={slot:d,iframe:b,options:a}}catch(f){logError("Error creating safeFrame",f)}}function delayLoad(a,b){if("windowOnLoad"===a)"complete"===document.readyState?b():util.addWindowListener("load",b);else if("spATFEvent"===a)hasP?P.when("search-page-utilities").execute(function(a){a.afterEvent("spATFEvent",b)}):hasAmznJQ?amznJQ.available("search-js-general",function(){SPUtils.afterEvent("spATFEvent",b)}):b();else if("criticalFeature"===a)hasP?P.when("cf").execute(b):hasAmznJQ?amznJQ.onCompletion("amznJQ.criticalFeature",b):b();else if("r2OnLoad"===a)hasP?P.when("r2Loaded").execute(b):hasAmznJQ?amznJQ.onReady("r2Loaded",b):b();else if(a.match("[^:]+:.+")){var c=a.split(":");if(c.length>1){var d=c[0].split("."),e=c[1],f=c.length>2?c[2]:e;hasP?P.when(f,"A").execute(b):hasAmznJQ&&d.length>1?amznJQ[d[1]](e,b):b()}else b()}else b()}function collapseSlot(a){slotDiv=document.getElementById(a),"undefined"!=typeof slotDiv&&(slotDiv.style.display="none")}function appendErrorDetails(a){var b="";if("undefined"!=typeof AD_MAP[a]){var c=AD_MAP[a].options;"undefined"!=typeof c.aanResponse&&(b=" Ad Details: "+JSON.stringify(c.aanResponse))}return b}function logCounter(a,b){hasUeCount&&ue.count(a,b)}function renderViewableAds(a,b){var c=!0;for(var d in VIEWABLE_ADS){var e=VIEWABLE_ADS[d].iframe?VIEWABLE_ADS[d].iframe.contentWindow:null;if(e&&!VIEWABLE_ADS[d].alreadyRendered){c=!1;var f=VIEWABLE_ADS[d].slot;viewability.findPercentInView(f)>=a?VIEWABLE_ADS[d].timeout||(VIEWABLE_ADS[d].timeout=setTimeout(renderAdMessage(d),b)):VIEWABLE_ADS[d].timeout&&(clearTimeout(VIEWABLE_ADS[d].timeout),VIEWABLE_ADS[d].timeout=null)}}c&&(util.removeWindowListener("scroll",debouncedViewabilityHandler),util.removeWindowListener("resize",debouncedViewabilityHandler))}function viewabilityHandler(){return renderViewableAds(viewability.PERCENT_VIEWABLE,viewability.DURATION_VIEWABLE)}function renderAdMessage(a){return function(){var b={key:"readyToRender",data:a};sendMessageToAd(a,"customMessage",b),VIEWABLE_ADS[a].timeout=null,VIEWABLE_ADS[a].alreadyRendered=!0}}function sendMessageToAd(a,b,c){var d=AD_MAP[a].iframe?AD_MAP[a].iframe.contentWindow:null;if(d){var e={command:b,data:c};e=JSON.stringify(e),d.postMessage(e,"*")}}function isDfpSimplifiedUrl(a){var b="pubads.g.doubleclick.net/gampad";return a.indexOf(b)>-1}function sendAjaxRequest(a,b,c,d){try{var e;window.XMLHttpRequest&&(e=new XMLHttpRequest),e&&"withCredentials"in e?(e.onreadystatechange=function(){if(4==e.readyState)if(200==e.status){var a=e.responseText;a?(d(a),sendCsmMetric("ld",b,"ajax:renderad")):(sendCsmMetric("ld",b,"ajax:noad"),collapseSlot(c))}else sendCsmMetric("ld",b,"ajax:errorstatus"),sendCsmMetric("ld",b,"ajax:error:"+e.status),collapseSlot(c)},e.open("GET",a,!0),e.withCredentials=!0,e.send(),sendCsmMetric("ld",b,"request")):(sendCsmMetric("ld",b,"ajax:xhr2notsupported"),collapseSlot(c))}catch(f){collapseSlot(c);var g=navigator.userAgent.toLowerCase(),h=g.match(/(firefox(?=\/))\/?\s*(\d+)/i)||[],i=3==h.length?parseInt(h[2],10):0;i>=42?sendCsmMetric("ld",b,"ajax:exception:ff"):(sendCsmMetric("ld",b,"ajax:exception"),logError("Error building AJAX request",f,ERROR_TYPE.ERROR))}}function createDfpAjaxRequest(a,b){sendAjaxRequest(a,b.slot,AD_IDS[b.arid].placementDivId,function(c){var d=a.match(/amzn.[a-z\.^\/].+?(?=&)/);b.dfpSiteZone=d?d[0].replace("/","."):"",b.htmlContent=c,createSafeFrame(b)})}function createXspAjaxRequest(a,b){var c=function(a){if(4==a.readyState)if(200==a.status)try{var c=a.responseText;if(c){var d=JSON.parse(c);b.aaxImpPixelUrl=d.impPixelURL,b.aaxInstrPixelUrl=d.instrPixelURL,b.htmlContent=d.creative,b&&b.adFeedbackInfo&&(b.adFeedbackInfo.adProgramId=d.programId),createSafeFrame(b),sendCsmMetric("ld",b.slot,"ajax:renderad")}else collapseSlot(AD_IDS[b.arid].placementDivId),sendCsmMetric("ld",b.slot,"ajax:noad")}catch(e){collapseSlot(AD_IDS[b.arid].placementDivId)}else sendCsmMetric("ld",b.slot,"ajax:errorstatus"),collapseSlot(AD_IDS[b.arid].placementDivId)},d=function(){sendCsmMetric("ld",b.slot,"ajax:xhrnotsupported"),collapseSlot(AD_IDS[b.arid].placementDivId)},f=function(){sendCsmMetric("ld",b.slot,"ajax:exception"),logError("Error building AJAX request",e,ERROR_TYPE.ERROR),collapseSlot(AD_IDS[b.arid].placementDivId)};util.sendAjaxRequest("GET",a,!0,c,d,f)}function loadAdSequence(a){return function(){var b=AD_IDS[a.arid].placementDivId;if(b){var c=document.getElementById(b);if(c&&!c.innerHTML){var d=a.src;a.htmlContent||a.htmlContentEncoded||!d?createSafeFrame(a):isDfpSimplifiedUrl(d)?createDfpAjaxRequest(d,a):-1!==d.indexOf("xsp")?createXspAjaxRequest(d,a):createSafeFrame(a)}}}}function appendNewAdFeedbackLink(a,b){if(a&&!a.isFeedbackLoaded&&b.adFeedbackInfo.boolFeedback){a.isFeedbackLoaded=!0;var c=a.parentNode,d=(b.adFeedbackInfo.feedbackTextFont,b.adFeedbackInfo.slugText),e=b.adFeedbackInfo.endPoint,f=(b.adFeedbackInfo.adProgramId,b.adFeedbackInfo.emptyJson),g=b.advertisementStyle,h=b.feedbackDivStyle,i=function(a,b){if(a&&b)for(var c in b)a.style[c]=b[c];return a},j=function(a,b,c,d){var e=document.createElement(a);for(var f in b)e.setAttribute(f,b[f]);return i(e,c),d&&d.insertBefore(e,null),e},k=c.getElementsByTagName("div")[0]||j("div",{id:c.id+"_Feedback"},h,c),l=function(){var a=k.getElementsByTagName("div")[0]||j("div",0,g,k);a.innerHTML=d},m=function(a){return a.adProgramId},n=e&&e.length?e+m(b.adFeedbackInfo):f,o=function(a){if(4==a.readyState)if(200==a.status)try{var b=JSON.parse(a.responseText);if(b&&"ok"==b.status){if("html"in b&&b.html&&(k.innerHTML=b.html),"script"in b&&b.script){var c=k.getElementsByTagName("script")[0]||j("script",0,null,k);c.innerHTML=b.script}}else l()}catch(d){l()}else l()};util.sendAjaxRequest("GET",n,!0,o,l,l)}}function appendFeedbackLink(a){try{"function"==typeof d16g_addFeedbackLink&&!a.isFeedbackLoaded&&a.boolFeedback&&(a.isFeedbackLoaded=!0,d16g_addFeedbackLink(a))}catch(b){}}function modifyExistingIframes(){for(var a in AD_MAP){var b=AD_MAP[a].iframe;appendFeedbackLink(b)}}function loadAdFeedback(a){try{window.DA=window.DA||[];var b=null;a&&a.adFeedbackInfo&&(b=a.adFeedbackInfo.adProgramId),b?appendNewAdFeedbackLink(AD_MAP[a.arid].iframe,a):a.daJsUrl&&loadScript(a.daJsUrl,function(){appendFeedbackLink(AD_MAP[a.arid].iframe)})}catch(c){logError("Problem loading ad feedback ",c)}}function resizeSafeFrameAd(a,b,c){var d=document.getElementById(c);if(d){var e=d.offsetWidth,f=Math.round(e*b/a);d.style.height=f+22+"px";var g=d.children[0];g&&(g.height=f+"px",g.width=e+"px")}}function resizeBillboardAd(a){if("DAdac1"===a||"DAdac2"===a||-1!==a.indexOf("desktop-ad-center-1")||-1!==a.indexOf("desktop-ad-center-2")){resizeSafeFrameAd(970,250,a);var b=function(){resizeSafeFrameAd(970,250,a)};util.addWindowListener("resize",b)}}if(window.DAsf)return void window.DAsf.loadAds();window.DAsf={version:"1.36_FX2"};var SF_TYPE="text/x-dacx-safeframe",SF_DOMAIN=getMediaCentralOrigin(),SF_HTML=SF_DOMAIN+"/images/G/01/dacx/sf/sf-1.36_FX2._V284532699_.html",ARID_ATTR="data-arid",hasP="undefined"!=typeof P,hasAmznJQ="undefined"!=typeof amznJQ,hasUeCount=window.ue&&"function"==typeof ue.count,CUSTOM_METRICS={POST_MESSAGE_UNSUPPORTED:"d16g_postMessageUnsupported",POST_MESSAGE_SUPPORTED:"d16g_postMessageSupported"},AD_MAP={},MSG_LISTENERS={},VIEWABLE_ADS={},AD_IDS={},SupportedCommands={changeSize:function(a,b){var c=a.options.allowedSizes;if(checkAgainstWhitelist(b,c,sizeValidator))a.iframe.height=b.height,a.iframe.width=b.width;else{var d="Size is not whitelisted: "+b.width+" x "+b.height+appendErrorDetails(a.options.arid);logError(d)}},collapseSlot:function(a,b){collapseSlot(AD_IDS[a.options.arid].placementDivId),"nav-sitewide-msg"===a.options.slotName&&delayLoad("amznJQ.available:navbarJSLoaded",function(){"undefined"!=typeof parent.navbar&&"function"==typeof parent.navbar.unHideSWM&&parent.navbar.unHideSWM()})},embedScript:function(a,b){var c=a.options.allowedDomains;if(checkAgainstWhitelist(b.src,c,scriptValidator))a.slot=document.getElementById(AD_IDS[a.options.arid].placementDivId),"undefined"!=typeof a.slot&&appendJsScript(b.src,a.slot,b.charset);else{var d="Domain is not whitelisted: "+b.src+appendErrorDetails(a.options.arid);logError(d)}},adFeedback:function(a,b){openFeedback(a.options.campaignId,a.options.aanParams)},logError:function(a,b){logError(b.message+appendErrorDetails(a.options.arid),b.error,b.level)},sendMetrics:function(a,b){sendCsmMetric(b.metric,a.options.slot,b.metricMsg)},customMessage:function(a,b){customMessage(b.key,b.body)},adDetails:function(a,b){a.options.aanResponse=b.aanResponse,a.options.extraInfo=util.extend(a.options.extraInfo||{},b.extraInfo),loadAdFeedback(a.options)},notifyWhenViewable:function(a,b){VIEWABLE_ADS[a.options.arid]||(a.rendered=!1,VIEWABLE_ADS[a.options.arid]=a),debouncedViewabilityHandler(),util.addWindowListener("scroll",debouncedViewabilityHandler),util.addWindowListener("resize",debouncedViewabilityHandler)},safeFrameReady:function(a){var b=function(){var a,b,c,d,e,f;for(a in AD_MAP)b=AD_MAP[a],c=b.iframe,d=b.options.slotName,f=viewability.getViewableInfo(c,d),e={ivp:viewability.findPercentInView(c),payload:f},sendMessageToAd(a,"updateViewability",e)};b(),b=util.throttle(b,20),util.addWindowListener("scroll",b),util.addWindowListener("resize",b)}},csmFunctionHash={wb:"ues",bb:"uet",af:"uet",cf:"uet",be:"uet",ld:"uex"};util.addWindowListener("message",receiveMessage);var debouncedViewabilityHandler=util.debounce(viewabilityHandler,100);window.DAsf.registerCustomMessageListener=function(a,b,c){var d=!1;try{if(!MSG_LISTENERS[a]||"function"!=typeof MSG_LISTENERS[a]||c)MSG_LISTENERS[a]=b,d=!0;else{var e=new Error("Custom message listener already exists for key: "+a);logError("Duplicate Key",e,ERROR_TYPE.WARN)}}catch(f){logError("Error registering custom message listener",f)}return d},window.DAsf.sendCustomMessage=function(a,b){var c={key:a,data:b};for(var d in AD_MAP)sendMessageToAd(d,"customMessage",c)},window.DAsf.isSafeframeAd=function(a){var b=!1;return"string"==typeof a&&(b="undefined"!=typeof AD_MAP[a]),b},window.DAsf.getAdDetails=function(a){if(!window.DAsf.isSafeframeAd(a))return!1;var b=AD_MAP[a].options,c=b.aanResponse||{},d={creativeId:c.creativeId||"",adId:c.adId||"",adNetwork:b.adServer||"",hostName:b.hostDomain||"",extraInfo:b.extraInfo||{},iframe:AD_MAP[a].iframe};return d},window.DAsf.openAdFeedback=function(a){try{var b=AD_MAP[a];openFeedback(b.options.campaignId,b.options.aanParams)}catch(c){logError("Error opening feedback",c)}},window.DAsf.loadAds=function(){var indx=0,tag=null,tags=[];if("function"!=typeof document.getElementsByClassName){var divs=document.getElementsByTagName("div"),scripts=document.getElementsByTagName("script"),i=0;for(i=0;i<divs.length;i++)tags[i]=divs[i];for(i=0;i<scripts.length;i++)tags[i+divs.length]=scripts[i]}else tags=document.getElementsByClassName(SF_TYPE);for(0===tags.length&&(tags=document.getElementsByTagName("script"));tag=tags[indx++];)if(("DIV"==tag.tagName&&hasClass(tag,SF_TYPE)||tag.getAttribute("type")==SF_TYPE)&&!tag.getAttribute(ARID_ATTR)){var data=tag.getAttribute("data-ad-details")||tag.text||tag.innerHTML||tag.innerText;try{data=/^\s*\(function\(\)/.test(data)?eval(data):JSON.parse(data),data.arid=data.arid||Math.random().toString(16).slice(2),tag.setAttribute(ARID_ATTR,data.arid),data.hostDomain=location.protocol+"//"+location.host,data.aanParams=decodeURIComponent(data.aanParams),data.allowedSizes="object"==typeof data.allowedSizes&&data.allowedSizes.length>=0?data.allowedSizes.concat(data.size):[data.size];var whitelistedDomains="d3l3lkinz3f56t.cloudfront.net,g-ecx.images-amazon.com,z-ecx.images-amazon.com,images-na.ssl-images-amazon.com,g-ec4.images-amazon.com,images-cn.ssl-images-amazon.com".split(",");if(data.allowedDomains="object"==typeof data.allowedDomains&&data.allowedDomains.length>=0?data.allowedDomains.concat(whitelistedDomains):whitelistedDomains,data.productAdsUrl=window.paSearchTowerAdsURL||window.paCusRevAllURL,data.parentLocation=location.origin||location.protocol+location.hostname,data.queryParams=getQueryParams(),initializeAdIds(data.arid,data.slot),sendCsmMetric("af",data.slot),"function"!=typeof window.postMessage){logCounter(CUSTOM_METRICS.POST_MESSAGE_UNSUPPORTED,1),collapseSlot(AD_IDS[data.arid].placementDivId);continue}logCounter(CUSTOM_METRICS.POST_MESSAGE_SUPPORTED,1),delayLoad(data.loadAfter,loadAdSequence(data))}catch(err){data=null,logError("Error parsing sf tag",err)}}},window.DAsf.loadAds()}var viewability=require("./components/viewability"),util=require("./components/util"),ERROR_TYPE={ERROR:"ERROR",WARN:"WARN",FATAL:"FATAL"};"undefined"==typeof JSON?loadScript("https://web.archive.org/web/20160801024520/https://images-na.ssl-images-amazon.com/images/G/01/da/js/json3.min._V308851628_.js",initSafeframe):initSafeframe()}(window,document)},{"./components/util":2,"./components/viewability":3}],2:[function(a,b,c){function d(a){for(var b="",c=0,d=0,e=0,f=0;c<a.length;)d=a.charCodeAt(c),128>d?(b+=String.fromCharCode(d),c++):d>191&&224>d?(e=a.charCodeAt(c+1),b+=String.fromCharCode((31&d)<<6|63&e),c+=2):(e=a.charCodeAt(c+1),f=a.charCodeAt(c+2),b+=String.fromCharCode((15&d)<<12|(63&e)<<6|63&f),c+=3);return b}function e(a){var b,c,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k="",l=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");l<a.length;)f=j.indexOf(a.charAt(l++)),g=j.indexOf(a.charAt(l++)),h=j.indexOf(a.charAt(l++)),i=j.indexOf(a.charAt(l++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,k+=String.fromCharCode(b),64!=h&&(k+=String.fromCharCode(c)),64!=i&&(k+=String.fromCharCode(e));return k=d(k)}/*
    @license
    Underscore.js 1.8.3
    http://underscorejs.org
    (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    Underscore may be freely distributed under the MIT license.
*/
b.exports.debounce=function(a,b,c){var d,e,g,h,i,j=function(){var k=f()-h;b>k&&k>=0?d=setTimeout(j,b-k):(d=null,c||(i=a.apply(g,e),d||(g=e=null)))};return function(){g=this,e=arguments,h=f();var k=c&&!d;return d||(d=setTimeout(j,b)),k&&(i=a.apply(g,e),g=e=null),i}},b.exports.throttle=function(a,b,c){var d,e,g,h=null,i=0;c||(c={});var j=function(){i=c.leading===!1?0:f(),h=null,g=a.apply(d,e),h||(d=e=null)};return function(){var k=f();i||c.leading!==!1||(i=k);var l=b-(k-i);return d=this,e=arguments,0>=l||l>b?(h&&(clearTimeout(h),h=null),i=k,g=a.apply(d,e),h||(d=e=null)):h||c.trailing===!1||(h=setTimeout(j,l)),g}};var f=function(){return Date.now?Date.now():(new Date).getTime()};b.exports.addListener=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):window.attachEvent&&a.attachEvent("on"+b,c)},b.exports.addWindowListener=function(a,c){b.exports.addListener(window,a,c)},b.exports.removeWindowListener=function(a,b){window.removeEventListener?window.removeEventListener(a,b,!1):window.detachEvent&&window.detachEvent("on"+a,b)},b.exports.getQueryString=function(a,b){var c=[];for(var d in a)c.push(d+"="+a[d]);var e=c.join("&");return b?encodeURIComponent(e):e},b.exports.extend=function(a){for(var b,c,d=1,e=arguments.length;e>d;d++){b=arguments[d];for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&null!==b[c]&&(a[c]=b[c])}return a},b.exports.decodeBase64=e,b.exports.sendAjaxRequest=function(a,b,c,d,e,f){try{var g=null;window.XMLHttpRequest?g=new XMLHttpRequest:window.ActiveXObject&&(g=new ActiveXObject("Microsoft.XMLHTTP")),g?(g.onreadystatechange=function(){d(g)},g.open(a,b,c),g.send()):"function"==typeof failFallback&&e()}catch(h){"function"==typeof errorHandler&&f()}}},{}],3:[function(a,b,c){function d(a,b,c){var d=0;return d=a>0?c-a:b>0?Math.min(b,c):0,Math.min(d,b-a)}b.exports.PERCENT_VIEWABLE=.5,b.exports.DURATION_VIEWABLE=500,b.exports.findPercentInView=function(a){try{var c=a.getBoundingClientRect(),e=d(c.top,c.bottom,b.exports.windowHeight()),f=d(c.left,c.right,b.exports.windowWidth()),g=e*f,h=(c.bottom-c.top)*Math.min(c.right-c.left,b.exports.windowWidth());return Math.min(1,Math.max(0,g/h))}catch(i){return null}},b.exports.getViewableInfo=function(a,b){var c={},d=window[b]?window[b].adStartTime||0:0;c.ptv="undefined"!=typeof aPageStart?(Date.now()-aPageStart)/1e3:0,c.ttv=(Date.now()-d)/1e3,c.wh=window.innerHeight||document.documentElement.clientHeight,c.ww=window.innerWidth||document.documentElement.clientWidth,c.sx=window.scrollX,c.sy=window.scrollY,c.ah=a?a.offsetHeight:0,c.aw=a?a.offsetWidth:0;for(var e=0,f=0;a;)e+=a.offsetTop,f+=a.offsetLeft,a=a.offsetParent;return c.top=e,c.left=f,c},b.exports.windowHeight=function(){return window.innerHeight||document.documentElement.clientHeight},b.exports.windowWidth=function(){return window.innerWidth||document.documentElement.clientWidth}},{}]},{},[1]);

}
/*
     FILE ARCHIVED ON 02:45:20 Aug 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:26:16 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 106.622
  exclusion.robots: 0.087
  exclusion.robots.policy: 0.075
  cdx.remote: 0.064
  esindex: 0.01
  LoadShardBlock: 60.1 (3)
  PetaboxLoader3.datanode: 95.969 (5)
  load_resource: 806.577 (2)
  PetaboxLoader3.resolve: 720.837 (2)
*/