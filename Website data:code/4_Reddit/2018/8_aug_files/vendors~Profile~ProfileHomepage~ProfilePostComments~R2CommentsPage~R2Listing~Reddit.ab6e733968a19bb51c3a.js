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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Profile~ProfileHomepage~ProfilePostComments~R2CommentsPage~R2Listing~Reddit"],{"./node_modules/bowser/src/bowser.js":function(e,n,r){var i;i=function(){var e=!0;function n(n){function r(e){var r=n.match(e);return r&&r.length>1&&r[1]||""}function i(e){var r=n.match(e);return r&&r.length>1&&r[2]||""}var o,t=r(/(ipod|iphone|ipad)/i).toLowerCase(),s=!/like android/i.test(n)&&/android/i.test(n),a=/nexus\s*[0-6]\s*/i.test(n),d=!a&&/nexus\s*[0-9]+/i.test(n),u=/CrOS/.test(n),c=/silk/i.test(n),l=/sailfish/i.test(n),m=/tizen/i.test(n),f=/(web|hpw)os/i.test(n),p=/windows phone/i.test(n),v=(/SamsungBrowser/i.test(n),!p&&/windows/i.test(n)),h=!t&&!c&&/macintosh/i.test(n),b=!s&&!l&&!m&&!f&&/linux/i.test(n),w=i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),g=r(/version\/(\d+(\.\d+)?)/i),y=/tablet/i.test(n)&&!/tablet pc/i.test(n),x=!y&&/[^-]mobi/i.test(n),k=/xbox/i.test(n);/opera/i.test(n)?o={name:"Opera",opera:e,version:g||r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(n)?o={name:"Opera",opera:e,version:r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||g}:/SamsungBrowser/i.test(n)?o={name:"Samsung Internet for Android",samsungBrowser:e,version:g||r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(n)?o={name:"Opera Coast",coast:e,version:g||r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(n)?o={name:"Yandex Browser",yandexbrowser:e,version:g||r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(n)?o={name:"UC Browser",ucbrowser:e,version:r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(n)?o={name:"Maxthon",maxthon:e,version:r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(n)?o={name:"Epiphany",epiphany:e,version:r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(n)?o={name:"Puffin",puffin:e,version:r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(n)?o={name:"Sleipnir",sleipnir:e,version:r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(n)?o={name:"K-Meleon",kMeleon:e,version:r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:p?(o={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},w?(o.msedge=e,o.version=w):(o.msie=e,o.version=r(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(n)?o={name:"Internet Explorer",msie:e,version:r(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?o={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(n)?o={name:"Microsoft Edge",msedge:e,version:w}:/vivaldi/i.test(n)?o={name:"Vivaldi",vivaldi:e,version:r(/vivaldi\/(\d+(\.\d+)?)/i)||g}:l?o={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(n)?o={name:"SeaMonkey",seamonkey:e,version:r(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(n)?(o={name:"Firefox",firefox:e,version:r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(n)&&(o.firefoxos=e,o.osname="Firefox OS")):c?o={name:"Amazon Silk",silk:e,version:r(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(n)?o={name:"PhantomJS",phantom:e,version:r(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(n)?o={name:"SlimerJS",slimer:e,version:r(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(n)||/rim\stablet/i.test(n)?o={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:g||r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:f?(o={name:"WebOS",osname:"WebOS",webos:e,version:g||r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(n)&&(o.touchpad=e)):/bada/i.test(n)?o={name:"Bada",osname:"Bada",bada:e,version:r(/dolfin\/(\d+(\.\d+)?)/i)}:m?o={name:"Tizen",osname:"Tizen",tizen:e,version:r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||g}:/qupzilla/i.test(n)?o={name:"QupZilla",qupzilla:e,version:r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||g}:/chromium/i.test(n)?o={name:"Chromium",chromium:e,version:r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||g}:/chrome|crios|crmo/i.test(n)?o={name:"Chrome",chrome:e,version:r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:s?o={name:"Android",version:g}:/safari|applewebkit/i.test(n)?(o={name:"Safari",safari:e},g&&(o.version=g)):t?(o={name:"iphone"==t?"iPhone":"ipad"==t?"iPad":"iPod"},g&&(o.version=g)):o=/googlebot/i.test(n)?{name:"Googlebot",googlebot:e,version:r(/googlebot\/(\d+(\.\d+))/i)||g}:{name:r(/^(.*)\/(.*) /),version:i(/^(.*)\/(.*) /)},!o.msedge&&/(apple)?webkit/i.test(n)?(/(apple)?webkit\/537\.36/i.test(n)?(o.name=o.name||"Blink",o.blink=e):(o.name=o.name||"Webkit",o.webkit=e),!o.version&&g&&(o.version=g)):!o.opera&&/gecko\//i.test(n)&&(o.name=o.name||"Gecko",o.gecko=e,o.version=o.version||r(/gecko\/(\d+(\.\d+)?)/i)),o.windowsphone||!s&&!o.silk?!o.windowsphone&&t?(o[t]=e,o.ios=e,o.osname="iOS"):h?(o.mac=e,o.osname="macOS"):k?(o.xbox=e,o.osname="Xbox"):v?(o.windows=e,o.osname="Windows"):b&&(o.linux=e,o.osname="Linux"):(o.android=e,o.osname="Android");var j="";o.windows?j=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)):o.windowsphone?j=r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):o.mac?j=(j=r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):t?j=(j=r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):s?j=r(/android[ \/-](\d+(\.\d+)*)/i):o.webos?j=r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):o.blackberry?j=r(/rim\stablet\sos\s(\d+(\.\d+)*)/i):o.bada?j=r(/bada\/(\d+(\.\d+)*)/i):o.tizen&&(j=r(/tizen[\/\s](\d+(\.\d+)*)/i)),j&&(o.osversion=j);var S=!o.windows&&j.split(".")[0];return y||d||"ipad"==t||s&&(3==S||S>=4&&!x)||o.silk?o.tablet=e:(x||"iphone"==t||"ipod"==t||s||a||o.blackberry||o.webos||o.bada)&&(o.mobile=e),o.msedge||o.msie&&o.version>=10||o.yandexbrowser&&o.version>=15||o.vivaldi&&o.version>=1||o.chrome&&o.version>=20||o.samsungBrowser&&o.version>=4||o.firefox&&o.version>=20||o.safari&&o.version>=6||o.opera&&o.version>=10||o.ios&&o.osversion&&o.osversion.split(".")[0]>=6||o.blackberry&&o.version>=10.1||o.chromium&&o.version>=20?o.a=e:o.msie&&o.version<10||o.chrome&&o.version<20||o.firefox&&o.version<20||o.safari&&o.version<6||o.opera&&o.version<10||o.ios&&o.osversion&&o.osversion.split(".")[0]<6||o.chromium&&o.version<20?o.c=e:o.x=e,o}var r=n("undefined"!=typeof navigator&&navigator.userAgent||"");function i(e){return e.split(".").length}function o(e,n){var r,i=[];if(Array.prototype.map)return Array.prototype.map.call(e,n);for(r=0;r<e.length;r++)i.push(n(e[r]));return i}function t(e){for(var n=Math.max(i(e[0]),i(e[1])),r=o(e,function(e){var r=n-i(e);return o((e+=new Array(r+1).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--n>=0;){if(r[0][n]>r[1][n])return 1;if(r[0][n]!==r[1][n])return-1;if(0===n)return 0}}function s(e,i,o){var s=r;"string"==typeof i&&(o=i,i=void 0),void 0===i&&(i=!1),o&&(s=n(o));var a=""+s.version;for(var d in e)if(e.hasOwnProperty(d)&&s[d]){if("string"!=typeof e[d])throw new Error("Browser version in the minVersion map should be a string: "+d+": "+String(e));return t([a,e[d]])<0}return i}return r.test=function(e){for(var n=0;n<e.length;++n){var i=e[n];if("string"==typeof i&&i in r)return!0}return!1},r.isUnsupportedBrowser=s,r.compareVersions=t,r.check=function(e,n,r){return!s(e,n,r)},r._detect=n,r.detect=n,r},void 0!==e&&e.exports?e.exports=i():r("./node_modules/webpack/buildin/amd-define.js")("bowser",i)},"./node_modules/lodash/_baseClamp.js":function(e,n){e.exports=function(e,n,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==n&&(e=e>=n?e:n)),e}},"./node_modules/lodash/clamp.js":function(e,n,r){var i=r("./node_modules/lodash/_baseClamp.js"),o=r("./node_modules/lodash/toNumber.js");e.exports=function(e,n,r){return void 0===r&&(r=n,n=void 0),void 0!==r&&(r=(r=o(r))==r?r:0),void 0!==n&&(n=(n=o(n))==n?n:0),i(o(e),n,r)}},"./node_modules/path-browserify/index.js":function(e,n,r){(function(e){function r(e,n){for(var r=0,i=e.length-1;i>=0;i--){var o=e[i];"."===o?e.splice(i,1):".."===o?(e.splice(i,1),r++):r&&(e.splice(i,1),r--)}if(n)for(;r--;r)e.unshift("..");return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return i.exec(e).slice(1)};function t(e,n){if(e.filter)return e.filter(n);for(var r=[],i=0;i<e.length;i++)n(e[i],i,e)&&r.push(e[i]);return r}n.resolve=function(){for(var n="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(n=s+"/"+n,i="/"===s.charAt(0))}return n=r(t(n.split("/"),function(e){return!!e}),!i).join("/"),(i?"/":"")+n||"."},n.normalize=function(e){var i=n.isAbsolute(e),o="/"===s(e,-1);return(e=r(t(e.split("/"),function(e){return!!e}),!i).join("/"))||i||(e="."),e&&o&&(e+="/"),(i?"/":"")+e},n.isAbsolute=function(e){return"/"===e.charAt(0)},n.join=function(){var e=Array.prototype.slice.call(arguments,0);return n.normalize(t(e,function(e,n){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},n.relative=function(e,r){function i(e){for(var n=0;n<e.length&&""===e[n];n++);for(var r=e.length-1;r>=0&&""===e[r];r--);return n>r?[]:e.slice(n,r-n+1)}e=n.resolve(e).substr(1),r=n.resolve(r).substr(1);for(var o=i(e.split("/")),t=i(r.split("/")),s=Math.min(o.length,t.length),a=s,d=0;d<s;d++)if(o[d]!==t[d]){a=d;break}var u=[];for(d=a;d<o.length;d++)u.push("..");return(u=u.concat(t.slice(a))).join("/")},n.sep="/",n.delimiter=":",n.dirname=function(e){var n=o(e),r=n[0],i=n[1];return r||i?(i&&(i=i.substr(0,i.length-1)),r+i):"."},n.basename=function(e,n){var r=o(e)[2];return n&&r.substr(-1*n.length)===n&&(r=r.substr(0,r.length-n.length)),r},n.extname=function(e){return o(e)[3]};var s="b"==="ab".substr(-1)?function(e,n,r){return e.substr(n,r)}:function(e,n,r){return n<0&&(n=e.length+n),e.substr(n,r)}}).call(this,r("./node_modules/process/browser.js"))},"./node_modules/query-string/index.js":function(e,n,r){"use strict";var i=r("./node_modules/strict-uri-encode/index.js"),o=r("./node_modules/object-assign/index.js");function t(e,n){return n.encode?n.strict?i(e):encodeURIComponent(e):e}n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e,n){var r=function(e){var n;switch(e.arrayFormat){case"index":return function(e,r,i){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===i[e]&&(i[e]={}),i[e][n[1]]=r):i[e]=r};case"bracket":return function(e,r,i){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==i[e]?i[e]=[].concat(i[e],r):i[e]=[r]:i[e]=r};default:return function(e,n,r){void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=n}}}(n=o({arrayFormat:"none"},n)),i=Object.create(null);return"string"!=typeof e?i:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),o=n.shift(),t=n.length>0?n.join("="):void 0;t=void 0===t?null:decodeURIComponent(t),r(decodeURIComponent(o),t,i)}),Object.keys(i).sort().reduce(function(e,n){var r=i[n];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[n]=function e(n){return Array.isArray(n)?n.sort():"object"==typeof n?e(Object.keys(n)).sort(function(e,n){return Number(e)-Number(n)}).map(function(e){return n[e]}):n}(r):e[n]=r,e},Object.create(null))):i},n.stringify=function(e,n){var r=function(e){switch(e.arrayFormat){case"index":return function(n,r,i){return null===r?[t(n,e),"[",i,"]"].join(""):[t(n,e),"[",t(i,e),"]=",t(r,e)].join("")};case"bracket":return function(n,r){return null===r?t(n,e):[t(n,e),"[]=",t(r,e)].join("")};default:return function(n,r){return null===r?t(n,e):[t(n,e),"=",t(r,e)].join("")}}}(n=o({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map(function(i){var o=e[i];if(void 0===o)return"";if(null===o)return t(i,n);if(Array.isArray(o)){var s=[];return o.slice().forEach(function(e){void 0!==e&&s.push(r(i,e,s.length))}),s.join("&")}return t(i,n)+"="+t(o,n)}).filter(function(e){return e.length>0}).join("&"):""}},"./node_modules/strict-uri-encode/index.js":function(e,n,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},"./node_modules/webpack/buildin/amd-define.js":function(e,n){e.exports=function(){throw new Error("define cannot be used indirect")}}}]);
//# sourceMappingURL=vendors~Profile~ProfileHomepage~ProfilePostComments~R2CommentsPage~R2Listing~Reddit.ab6e733968a19bb51c3a.js.map

}
/*
     FILE ARCHIVED ON 00:47:13 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:34:42 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.083
  cdx.remote: 0.129
  esindex: 0.016
  LoadShardBlock: 334.554 (6)
  PetaboxLoader3.datanode: 243.935 (8)
  PetaboxLoader3.resolve: 323.163 (3)
  load_resource: 302.747 (2)
*/