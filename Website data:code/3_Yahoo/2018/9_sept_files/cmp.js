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

/*! CMP 2.8.1 Copyright 2018 Oath Holdings, Inc. */
window.__cmpEnv='PROD';
!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=7)}([function(e,n,t){"use strict";var o=function(){var e=function(e){var n=[];for(var t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&")};return{parseQuery:function(e){var n={};if(e){"?"===e[0]&&(e=e.substring(1));for(var t=e.split("&"),o=0;o<t.length;o++){var r=t[o].split("=");r[0]&&(n[decodeURIComponent(r[0])]=decodeURIComponent(r[1]))}}return n},stringifyQuery:e,isUndefined:function(e){return"undefined"!==e&&void 0===e},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},toBoolean:function(e){return"string"==typeof e?"true"===e||"1"===e:!!e},logMessage:function(e,n){console&&"function"==typeof console[e]&&console[e](n)},addWindowMessageListener:function(e,n){(e=e||window).addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n)},parsePostMessageData:function(e){var n=e;if("string"==typeof e)try{n=JSON.parse(e)}catch(e){}return n},ajax:function(e,n,t,o){var r=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),i=function(){var e=void 0!==r.status?r.status:200,n=r.responseText;try{n=200===e?JSON.parse(r.responseText):void 0}catch(e){}t(n,e)};window.XDomainRequest&&((r=new XDomainRequest).onload=i),r.onreadystatechange=function(e){4===r.readyState&&i()},n&&(r.withCredentials=!0);try{r.open("GET",e,!1!==o),r.send(null)}catch(e){t(void 0,0)}},getMetaTagContent:function(e){var n=new RegExp(":","g"),t=e.replace(n,"\\:"),o=document.head.querySelector("[name="+t+"]");return o?o.content:void 0},setLocationUrl:function(n,t){window.location.replace(n+"?"+e(t))},documentReady:function(e){"loading"!==document.readyState?e():document.addEventListener?document.addEventListener("DOMContentLoaded",e):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&e()})},isHostedUI:function(e){var n=RegExp(/\.oath.com$/),t=document.createElement("a");return t.href=e,n.test(t.hostname)}}}();n.a=o},function(e,n,t){"use strict";var o=t(0),r=function(){var e=function(e){return function(){var e,n,t,o,r,i=document.cookie;if(e={},i)for(n=0,t=(r=i.split(";")).length;n<t;n++)e[(o=r[n].split(/=(.+)/))[0].trim()]=(o[1]||"").trim();return e}()[e]},n=function(e,n,t){var r=new Date,i=t?31536e6:864e5;r.setTime(r.getTime()+i),document.cookie=o.a.isUndefined(n)?e+"=; path=/; Max-Age=0":e+"="+n+"; path=/; expires="+r.toGMTString()+";"},t=function(){var n=e("cmp"),t=n?o.a.parseQuery(n):{};return Math.round(Date.now()/1e3)-(t.t||0)>3600},r=function(){var t=Math.round(Date.now()/1e3),r=e("cmp"),i=r?o.a.parseQuery(r):{};i.t=t,n("cmp",o.a.stringifyQuery(i),!0)},i=function(){var n=e("cmp"),r=n?o.a.parseQuery(n):{};if(!o.a.isUndefined(r.j)&&!t())return o.a.toBoolean(r.j)},a=function(t){var i=e("cmp"),a=i?o.a.parseQuery(i):{};o.a.isUndefined(t)?delete a.j:(t=o.a.toBoolean(t),a.j=t?"1":"0"),n("cmp",o.a.stringifyQuery(a),!0),r()};return{getConsentString:function(){return e("EuConsent")},setConsentString:function(e,t){n("EuConsent",e,t),r()},isConsentStringStale:t,setGdprAppliesGlobally:function(e){if(e)return a(i()||o.a.toBoolean(e))},setIsUserInEU:function(e){if(!o.a.isUndefined(e))return a(i()||o.a.toBoolean(e))},setGdprApplies:a,getGdprApplies:i,getPubVendorListVersion:function(){var n=e("cmp"),t=n?o.a.parseQuery(n):{};return t.v&&parseInt(t.v)},setPubVendorListVersion:function(t){var r=e("cmp"),i=r?o.a.parseQuery(r):{};i.v=t,n("cmp",o.a.stringifyQuery(i),!0)},getAllowedOathVendorIds:function(){var n=e("cmp");return(n?o.a.parseQuery(n):{}).o||""},setAllowedOathVendorIds:function(t){var r=e("cmp"),i=r?o.a.parseQuery(r):{};t?i.o=t:delete i.o,n("cmp",o.a.stringifyQuery(i),!0)}}}();n.a=r},function(e,n){!function(){var e=!1;function n(e){var n="string"==typeof e.data,t=e.data;if(n)try{t=JSON.parse(e.data)}catch(e){}if(t&&t.__cmpCall){var o=t.__cmpCall;window.__cmp(o.command,o.parameter,function(t,r){var i={__cmpReturn:{returnValue:t,success:r,callId:o.callId}};e&&e.source&&e.source.postMessage(n?JSON.stringify(i):i,"*")})}}"function"==typeof __cmp||(window.__cmp=function(){var n=arguments;if(__cmp.a=__cmp.a||[],!n.length)return __cmp.a;"ping"===n[0]?n[2]({gdprAppliesGlobally:e,cmpLoaded:!1},!0):__cmp.a.push([].slice.apply(n))},function e(){if(document.body&&document.body.firstChild){var n=document.body,t=document.createElement("iframe");t.style.display="none",t.height=t.width=0,t.name="__cmpLocator",n.insertBefore(t,n.firstChild)}else setTimeout(e,5)}(),window.addEventListener?window.addEventListener("message",n,!1):window.attachEvent("onmessage",n))}()},function(e,n,t){"use strict";var o=t(1),r=t(0),i=function(){var e,n=[],t=!1,a=function(n){return void 0!==n&&(e=n),e},s=function(e){n.push({method:e,args:[].slice.call(arguments,1)})},d=function(e,n){if(a()||n){var t=o.a.getConsentString();void 0===t?e(void 0,!1):e(t,!0)}else s(d,e)},c=function(e){if(a()){var n=o.a.getGdprApplies();if(r.a.isUndefined(n))return e(void 0,!1);e(n,!0)}else i.queueRequestUntilInitialized(c,e)};return{isInitialized:a,queueRequestUntilInitialized:s,initializationComplete:function(){if(!a())for(a(!0);n.length;){var e=n.shift();"function"==typeof e.method&&e.method.apply(null,[].slice.call(e.args))}},setGdprAppliesGlobally:function(e){t=e,o.a.setGdprAppliesGlobally(e)},ping:function(e,n){n({gdprAppliesGlobally:t,cmpLoaded:!0})},getConsentString:d,isUserInEU:c}}();n.a=i},function(e,n,t){"use strict";var o=function(e){var n=6,t=36,o=36,r=12,i=12,a=6,s=12,d=12,c=24,u=16,l=1,f=12,p=1,v=1,g=16,h=16;!function(){var e="undefined"!=typeof exports?exports:"undefined"!=typeof self?self:window,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t(e){this.message=e}t.prototype=new Error,t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var o,r,i=String(e),a=0,s=n,d="";i.charAt(0|a)||(s="=",a%1);d+=s.charAt(63&o>>8-a%1*8)){if((r=i.charCodeAt(a+=.75))>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");o=o<<8|r}return d}),e.atob||(e.atob=function(e){var o=String(e).replace(/[=]+$/,"");if(o.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,i,a=0,s=0,d="";i=o.charAt(s++);~i&&(r=a%4?64*r+i:i,a++%4)?d+=String.fromCharCode(255&r>>(-2*a&6)):0)i=n.indexOf(i);return d})}();var m=function(){var e="a".charCodeAt(0),y="00000000000000000000000000000000000000000000000000",C=function(){this.binaryStr="",this.addField=function(e,n,t){var o=(e+0||0).toString(2);if(o.length<n)o=y.substr(0,n-o.length)+o;else if(o.length>n)throw new Error("Encountered an overflow setting cookie field "+t);this.binaryStr+=o}};return{build:function(e){e.version=1,e.cmpId=14,e.cmpVersion=1;var n=m.encodeBinary(e),t=m.binaryToBytes(n);return m.toWebSafeBase64(t)},setAll:function(e){var n=m.fromWebSafeBase64(e),t=m.bytesToBinary(n);return m.decodeBinary(t)},bytesToBinary:function(e){for(var n="",t=["0000","0001","0010","0011","0100","0101","0110","0111","1000","1001","1010","1011","1100","1101","1110","1111"],o=function(e){return t[e>>>4&15]+t[15&e]},r=0;r<e.length;r++)n+=o(e.charCodeAt(r));return{string:n,atPos:0,getBits:function(e){var n=parseInt(this.string.substr(this.atPos,e),2);return this.atPos+=e,n}}},binaryToBytes:function(e){var n="";e+=y.substr(0,7-(e.length+7)%8);for(var t=0;t<e.length;t+=8)n+=String.fromCharCode(parseInt(e.substr(t,8),2));return n},toWebSafeBase64:function(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},fromWebSafeBase64:function(e){return atob(e.replace(/-/g,"+").replace(/_/g,"/"))},languageFromCookieValue:function(n){return String.fromCharCode(e+n/64>>>0)+String.fromCharCode(e+n%64)},languageToCookieValue:function(n){return 64*(n.charCodeAt(0)-e)+(n.charCodeAt(1)-e)},dateFromDeciseconds:function(e){return new Date(100*e)},dateToDeciseconds:function(e){return Math.floor(e.getTime()/100)},decodeBinary:function(e){var y=e.getBits(n);if(1!==y)throw new Error("Cookie version "+y+" is not supported");var C,w={version:y,created:m.dateFromDeciseconds(e.getBits(t)),lastUpdated:m.dateFromDeciseconds(e.getBits(o)),cmpId:e.getBits(r),cmpVersion:e.getBits(i),consentScreen:e.getBits(a),consentLanguage:m.languageFromCookieValue(e.getBits(s)),vendorListVersion:e.getBits(d),purposesAllowed:e.getBits(c),maxVendorId:e.getBits(u),encodingType:e.getBits(l)},b=w.maxVendorId,A=new Array(b+1);if(0===w.encodingType){var V=e.string.length-e.atPos;if(V<b)throw new Error("Incorrect bitfield size: "+V+" < "+b);for(C=0;C<b;C++)A[C+1]="1"===e.string.charAt(e.atPos+C)}else{for(w.defaultConsent=1===e.getBits(p),C=0;C<b;C++)A[C+1]=w.defaultConsent;for(w.numEntries=e.getBits(f),C=0;C<w.numEntries;C++){var I=1===e.getBits(v),S=e.getBits(g),E=I?e.getBits(h):S;if(e.atPos>e.string.length)throw new Error("Not enough bits for numEntries in ranges");if(S>E||E>b)throw new Error("Invalid vendorId range: "+S+"-"+E+". The max valid vendorId is: "+b);for(var _=S;_<=E;_++)A[_]=!w.defaultConsent}}return w.vendorConsents=A,w},encodeRanges:function(e){for(var n,t,o=new C,r=e.vendorConsents,i=!!r[1],a=!1,s=e.maxVendorId,d=0,c=2;c<=s;c++){var u=!!r[c]!=!!i;if(u&&(a||(n=c,a=!0),t=c),a&&(!u||c===s)){d++;var l=t>n;if(o.addField(l?1:0,v,"isRange"),o.addField(n,g,"startVendorId"),l&&o.addField(t,h,"endVendorId"),13+o.binaryStr.length>s)return null;a=!1}}return{binary:o,defaultConsent:i?1:0,numEntries:d}},encodeBinary:function(e){var v=e.vendorConsents,g=new C;if(1!==e.version)throw new Error("version "+e.version+" not supported");g.addField(e.version,n,"version"),g.addField(m.dateToDeciseconds(e.created),t,"created"),g.addField(m.dateToDeciseconds(e.lastUpdated),o,"lastUpdated"),g.addField(e.cmpId,r,"cmpId"),g.addField(e.cmpVersion,i,"cmpVersion"),g.addField(e.consentScreen,a,"consentScreen"),g.addField(m.languageToCookieValue(e.consentLanguage||"en"),s,"consentLanguage"),g.addField(e.vendorListVersion,d,"vendorListVersion"),g.addField(e.purposesAllowed,c,"purposesAllowed"),g.addField(e.maxVendorId,u,"maxVendorId");var h=m.encodeRanges(e);if(e.encodingType=h?1:0,g.addField(e.encodingType,l,"encodingType"),0===e.encodingType)for(var y=1;y<=e.maxVendorId;y++)g.binaryStr+=v[y]?"1":"0";else e.defaultConsent=h.defaultConsent,e.numEntries=h.numEntries,g.addField(e.defaultConsent,p,"defaultConsent"),g.addField(e.numEntries,f,"numEntries"),g.binaryStr+=h.binary.binaryStr;return g.binaryStr}}}(),y={vendorConsents:[]};return{setMaxVendorId:function(e){y.maxVendorId=e},getMaxVendorId:function(){return y.maxVendorId},setVendorConsent:function(e,n){y.vendorConsents[n]=!!e},setAllVendorConsents:function(e){for(var n=1;n<=y.maxVendorId;n++)y.vendorConsents[n]=!!e},getAllVendorConsents:function(){for(var e={},n=1;n<y.vendorConsents.length;n++)e[n]=!!y.vendorConsents[n];return e},getVendorConsent:function(e){return!!y.vendorConsents[e]},setPurposeConsent:function(e,n){var t=1<<c-n;y.purposesAllowed=e?y.purposesAllowed|t:y.purposesAllowed&~t},setAllPurposeConsents:function(e){for(var n=1;n<=24;n++){var t=1<<c-n;y.purposesAllowed=e?y.purposesAllowed|t:y.purposesAllowed&~t}},getAllPurposeConsents:function(){for(var e={},n=1;n<=c;n++){var t=1<<c-n;e[n]=0!=(y.purposesAllowed&t)}return e},getPurposeConsent:function(e){var n=1<<c-e;return 0!=(y.purposesAllowed&n)},setVendorListVersion:function(e){y.vendorListVersion=e},getVendorListVersion:function(){return y.vendorListVersion},build:function(){return y.created||(y.created=new Date),y.lastUpdated=new Date,m.build(y)},setAll:function(e){y=m.setAll(e)}}}(window);n.a=o},function(e,n,t){"use strict";var o=t(6),r=t(0),i=function(e){var n,t=o.a.cmpAPIUrl+"v0/location/eu",i=o.a.cmpAPIUrl+"v0/vendor_list/global",a=o.a.cmpAPIUrl+"v0/measurement/events",s={},d={},c={},u=function(e,n,t,o){var i="";if(n){var a=[];for(var s in n)a.push(encodeURIComponent(s)+"="+encodeURIComponent(n[s]));i="?"+a.join("&")}var d=e+i;c[d]&&c[d].length?c[d].push(t):(c[d]=[t],r.a.ajax(e+i,!1,function(e,n){for(;c[d].length;){e=200===n?e:void 0;var t=200===n;c[d].shift()(e,t)}},o))},l=function(e,n){if(s[e])n(s[e],!0);else{var t=r.a.isNumeric(e)?{version:e}:{};u(i,t,function(t,o){o?(s[e]=t,n(s[e],!0)):n(void 0,!1)})}};return{isUserInEU:function(e){u(t,null,function(n,t){e(t?r.a.toBoolean(n.result):void 0,t)})},getVendorList:l,getVendorListFromPubVendors:function(e,t){s.null?t(s.null,!0):l(null,function(o,i){if(i){for(var a=0;a<o.vendors.length;a++){var u=o.vendors[a];d[u.id]=u}!function(e,t){if(!1!==n){var o=(e||"")+"/pubvendors.json";c[o]&&c[o].length?c[o].push(t):(c[o]=[t],r.a.ajax(o,!1,function(e,t){for((n=200===t)&&"object"!=typeof e&&(n=!1,r.a.logMessage("error","CMP Error: Invalid pubvendors.json format"));c[o].length;)c[o].shift()(e,n)}))}else t(void 0,!1)}(e,function(e,n){if(n){var i=function(e,n){for(var t=[],o=0;o<n.vendors.length;o++){var i=n.vendors[o].id;d[i]?t.push(d[i]):r.a.logMessage("error","CMP Error: pubvendors.json references vendor id "+i+" which does not exist in the Global Vendor List")}var a=JSON.parse(JSON.stringify(e));return a.vendors=t,a}(o,e);s.null=i,t(i,!!i)}else s.null=o,t(s.null,!0)})}else t(void 0,!1)})},CMPEvent:function(){var n=window.location.host,t=n.indexOf(":");t>0&&(n=n.substr(0,t));var o={ev_type:"A",gdpr:"N",p_domain:n=n.substr(n.length-255)},r=null;this.setPublisherId=function(e){return o.p_id=e,this},this.setGdpr=function(e){return o.gdpr=e,this},this.setGdprConsent=function(e){return o.consent=e,this},this.setType=function(e){return o.ev_type=e,this},this.markConsentRenderStartTime=function(){r=Date.now();var n=this;return e.addEventListener?(e.addEventListener("beforeunload",function(){n.fire(!1)},!1),e.addEventListener("unload",function(){n.fire(!1)},!1)):(e.attachEvent("onbeforeunload",function(){n.fire(!1)}),e.attachEvent("onunload",function(){n.fire(!1)})),this},this.fire=function(e){r&&(o.ev_duration=Math.round((Date.now()-r)/1e3)),o.fired||function(e,n){u(a,e||{},function(n,t){e.fired=t},n)}(o,e)}}}}(window);n.a=i},function(e,n,t){"use strict";var o={LOCAL:{cmpAPIUrl:"https://web.archive.org/web/20180831235235/https://service-dev.cmp.oath.com/cmp/"},DEV:{cmpAPIUrl:"https://web.archive.org/web/20180831235235/https://service-dev.cmp.oath.com/cmp/"},PROD:{cmpAPIUrl:"https://web.archive.org/web/20180831235235/https://service.cmp.oath.com/cmp/"}}[window.__cmpEnv||"LOCAL"];n.a=o},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=(t.n(o),t(3)),i=t(8),a=t(1),s=t(0),d=t(4),c=t(5),u=!1,l=function(e,n){if(u&&!n)return e.__cmp;u=!0;var t=n||"function"!=typeof e.__cmp?[]:__cmp()||[],o=function(){if(!r.a.isInitialized()){var e=a.a.getGdprApplies(),n=a.a.getConsentString();a.a.isConsentStringStale()||!1!==e&&!n?i.a.getConsentData(function(e,n){n&&(a.a.setConsentString(e.consentString),a.a.setGdprApplies(e.gdprApplies),a.a.setAllowedOathVendorIds(e.allowedOathVendorIds)),r.a.initializationComplete()}):r.a.initializationComplete(),setInterval(function(){i.a.getConsentData(function(e,n){n&&(a.a.setConsentString(e.consentString),a.a.setGdprApplies(e.gdprApplies),a.a.setAllowedOathVendorIds(e.allowedOathVendorIds))},!0)},36e5)}},l=function(e){r.a.getConsentString(function(n,t){t&&!a.a.isConsentStringStale()?e(n,!0):i.a.getConsentData(function(n,t){t?(a.a.setConsentString(n.consentString),e(n.consentString,!0)):e(void 0,!1)})})},f=function(e){r.a.isUserInEU(function(n,t){t?e(n,!0):i.a.getConsentData(function(n,t){t?(a.a.setGdprApplies(n.gdprApplies),e(n.gdprApplies,t)):e(void 0,!1)})})},p=function(e,n){f(function(e,t){if(e){for(var o=a.a.getAllowedOathVendorIds().split(","),r={106:!1},i=0;i<o.length;i++)o[i]&&(r[o[i]]=!0);l(function(o,i){n({consentData:o,gdprApplies:e,hasGlobalScope:!1,isOathFirstParty:!0,oathVendorConsents:r},i&&t)})}else n({gdprApplies:e,hasGlobalScope:!1,isOathFirstParty:!0},t)})};o();for(var v=function(e){if(e)return{init:o,ping:r.a.ping,getVendorConsents:function(e,n){p(null,function(e,t){e.consentData?c.a.getVendorList(null,function(o,r){d.a.setAll(e.consentData);var i=d.a.getAllPurposeConsents(),a=d.a.getAllVendorConsents(),s={},c={};if(r){var u;for(var l in o.purposes)s[u=o.purposes[l].id]=i[u];for(var f in o.vendors)c[u=o.vendors[f].id]=a[u]}var p={metadata:e.consentData,gdprApplies:e.gdprApplies,hasGlobalScope:e.hasGlobalScope,purposeConsents:s,vendorConsents:c,oathVendorConsents:e.oathVendorConsents,isOathFirstParty:!0};n(p,t&&r)}):n({gdprApplies:e.gdprApplies,hasGlobalScope:e.hasGlobalScope,isOathFirstParty:!0},t)})},getConsentData:p,getConsentString:l,isUserInEU:f}[e].apply(null,[].slice.call(arguments,1))};t.length;)try{v.apply(null,t.shift())}catch(e){s.a.logMessage("error","CMP: Error executing request",e)}return v};window.__cmp=l(window);var f={createInstance:function(e){return l(window,e)}};n.default=f},function(e,n,t){"use strict";var o=t(9),r=t(0),i=t(1),a=function(){var e,n="",t=r.a.getMetaTagContent("oath:guce:consent-host");t?n="https://{{domain}}/".replace("{{domain}}",t):r.a.logMessage("error","CMP Error: Required oath:guce:consent-host meta tag is not present on the page");var a=[],s=!1,d=function(e,t,o){if(n){var i="";if(t){var a=[];for(var s in t)a.push(encodeURIComponent(s)+"="+encodeURIComponent(t[s]));i="?"+a.join("&")}r.a.ajax(n+e+i,!0,function(e,n){200===n?o(e,!0):o(void 0,404===n)})}else o(void 0,!1)};return{getConsentData:function(n,t){if(s)n(e,!1);else if(!t&&e)n(e,!0);else if(a.length)a.push(n);else{a.push(n);var c={consentTypes:"iab,oathVendorsConsent",oathVendorIds:"106"},u=i.a.getPubVendorListVersion();u&&(c.pubVendorListVersion=u),d("v1/consentRecord",c,function(n,t){if(t){var u=n&&n.tosRecords&&n.tosRecords.eu,l=u&&u.consentEvents&&u.consentEvents.iab||{},f=u&&u.consentEvents&&u.consentEvents.oathVendorsConsent||{},p=l.status,v=l.pubVendorListVersion,g=[];for(var h in f)f[h]&&g.push(h);e={consentString:p||void 0,gdprApplies:!!u,allowedOathVendorIds:g.join(",")},v&&i.a.setPubVendorListVersion(v)}else s=!0,r.a.logMessage("info","CMP: Received error response retrieving GDPR consent from GUCE");for(;a.length;)a.shift()(e,t);u&&o.a.getApid(function(e){e&&(c.apid=e,d("v1/consentRecord",c,function(e,n){}))})})}}}}();n.a=a},function(e,n,t){"use strict";var o=t(0),r=function(e,n){var t="https://web.archive.org/web/20180831235235/https://secure.bannerfarm.ace.advertising.com/cmp/cmp-apid.html",r=null,i=!1,a=[],s=[],d={},c=function(e,n){for(clearTimeout(0);s.length;)s.shift()(e,!!n)};return{getApid:function(n){if(n&&s.push(n),!r){(r=document.createElement("iframe")).id="apid-iframe",r.src=t,r.style.display="none",r.height=r.width=0,o.a.addWindowMessageListener(e,function(e){var n=o.a.parsePostMessageData(e.data).__cmpApidReturn;if(n){var t=n.callId;if(d[t]){var r=n.returnValue,i=n.success;d[t](r,i)}}});var u=function(){for(i=!0;a.length;)r.contentWindow.postMessage(JSON.stringify(a.shift()),t)};r.addEventListener?r.addEventListener("load",u,!1):r.attachEvent&&r.attachEvent("onload",u)}o.a.documentReady(function(){document.body.appendChild(r),function(e,n){var o="apid-iframe-"+Date.now();"function"==typeof n&&(d[o]=n);var s={__cmpApidCall:{command:e,callId:o}};i?r.contentWindow.postMessage(JSON.stringify(s),t):a.push(s)}("getApid",c)})}}}(window,document);n.a=r}]);

}
/*
     FILE ARCHIVED ON 23:52:35 Aug 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:33:42 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 146.33
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.081
  cdx.remote: 0.071
  esindex: 0.012
  LoadShardBlock: 99.876 (3)
  PetaboxLoader3.datanode: 90.562 (5)
  load_resource: 70.478 (2)
  PetaboxLoader3.resolve: 42.657 (2)
*/