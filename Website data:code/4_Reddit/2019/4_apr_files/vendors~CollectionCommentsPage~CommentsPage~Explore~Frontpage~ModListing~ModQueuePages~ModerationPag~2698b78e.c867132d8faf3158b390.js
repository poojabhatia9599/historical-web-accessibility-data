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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPag~2698b78e"],{"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js":function(e,r,o){"use strict";var n=o("./node_modules/react/index.js"),t=o.n(n),s=o("./node_modules/react-dom/index.js");o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"),o("./node_modules/invariant/browser.js");function i(e,r){return Array.isArray(e)&&Array.isArray(r)&&e.length===r.length?e.some(function(o,n){return i(e[n],r[n])}):e!==r}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.root||null,o=function(e){var r=/^-?\d*\.?\d+(px|%)$/,o=(e||"0px").split(/\s+/).map(function(e){if(!r.test(e))throw new Error("rootMargin must be specified in pixels or percent");return e});return o[1]=o[1]||o[0],o[2]=o[2]||o[0],o[3]=o[3]||o[1],o.join(" ")}(e.rootMargin),n=Array.isArray(e.threshold)?e.threshold:[void 0!==e.threshold?e.threshold:0],t=d.keys(),s=Array.isArray(t),a=0;for(t=s?t:t[Symbol.iterator]();;){var u;if(s){if(a>=t.length)break;u=t[a++]}else{if((a=t.next()).done)break;u=a.value}var c=u;if(![[r,c.root],[o,c.rootMargin],[n,c.thresholds]].some(function(e){return i.apply(void 0,e)}))return c}return null}var d=new Map,u=function(){function e(){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.create=function(e,r){return a(r)||new IntersectionObserver(e,r)},e.findElement=function(e,r){var o=d.get(r);if(o){var n=o.values(),t=Array.isArray(n),s=0;for(n=t?n:n[Symbol.iterator]();;){var i;if(t){if(s>=n.length)break;i=n[s++]}else{if((s=n.next()).done)break;i=s.value}var a=i;if(a.target===e.target)return a}}return null},e.observe=function(e){var r=void 0;d.has(e.observer)?r=d.get(e.observer):(r=new Set,d.set(e.observer,r)),r.add(e),e.observer.observe(e.target)},e.unobserve=function(e){if(d.has(e.observer)){var r=d.get(e.observer);r.delete(e)&&(r.size>0?e.observer.unobserve(e.target):(e.observer.disconnect(),d.delete(e.observer)))}},e.clear=function(){d.clear()},e.count=function(){return d.size},e}(),c=function(){function e(e,r){for(var o=0;o<r.length;o++){var n=r[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,o,n){return o&&e(r.prototype,o),n&&e(r,n),r}}();function l(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function p(e,r){e.forEach(function(e){var o=u.findElement(e,r);o&&o.handleChange(e)})}var m=["root","rootMargin","threshold"],f=Object.prototype,v=function(e){function r(){var o,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var t=arguments.length,s=Array(t),i=0;i<t;i++)s[i]=arguments[i];return o=n=l(this,e.call.apply(e,[this].concat(s))),n.handleChange=function(e){n.props.onChange(e),n.props.onlyOnce&&e.isIntersecting&&n.unobserve()},n.handleNode=function(e){"function"==typeof n.props.children.ref&&n.props.children.ref(e),n.currentTarget&&e&&n.currentTarget!==e&&(n.unobserve(),n.shouldResetObserver=!0),n.target=e},l(n,o)}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,e),r.prototype.observe=function(){var e;this.target=(e=this.target,t.a.isValidElement(e)&&"string"==typeof e.type?this.target:Object(s.findDOMNode)(this.target)),this.observer=u.create(p,this.options),u.observe(this)},r.prototype.unobserve=function(){u.unobserve(this)},r.prototype.reobserve=function(){this.unobserve(),this.props.disabled||this.observe()},r.prototype.componentDidMount=function(){this.props.disabled||this.observe()},r.prototype.componentWillUnmount=function(){this.unobserve()},r.prototype.componentDidUpdate=function(){this.shouldResetObserver&&this.reobserve()},r.prototype.componentWillUpdate=function(e){var r=this;this.shouldResetObserver=m.concat(["disabled"]).some(function(o){return i(e[o],r.props[o])})},r.prototype.render=function(){return this.currentTarget=this.target,t.a.cloneElement(t.a.Children.only(this.props.children),{ref:this.handleNode})},c(r,[{key:"options",get:function(){var e=this;return m.reduce(function(r,o){if(f.hasOwnProperty.call(e.props,o)){var n,t=e.props[o];return"root"===o&&"[object String]"===f.toString.call(e.props[o])&&(t=document.querySelector(t)),Object.assign({},r,((n={})[o]=t,n))}return r},{})}}]),r}(t.a.Component);v.displayName="IntersectionObserver";var h=v;o.d(r,"a",function(){return h})},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js":function(e,r,o){"use strict";var n=o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");function t(){}e.exports=function(){function e(e,r,o,t,s,i){if(i!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function r(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r};return o.checkPropTypes=t,o.PropTypes=o,o}},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js":function(e,r,o){e.exports=o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,r,o){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/bowser/src/bowser.js":function(e,r,o){var n;n=function(){var e=!0;function r(r){function o(e){var o=r.match(e);return o&&o.length>1&&o[1]||""}function n(e){var o=r.match(e);return o&&o.length>1&&o[2]||""}var t,s=o(/(ipod|iphone|ipad)/i).toLowerCase(),i=!/like android/i.test(r)&&/android/i.test(r),a=/nexus\s*[0-6]\s*/i.test(r),d=!a&&/nexus\s*[0-9]+/i.test(r),u=/CrOS/.test(r),c=/silk/i.test(r),l=/sailfish/i.test(r),p=/tizen/i.test(r),m=/(web|hpw)os/i.test(r),f=/windows phone/i.test(r),v=(/SamsungBrowser/i.test(r),!f&&/windows/i.test(r)),h=!s&&!c&&/macintosh/i.test(r),b=!i&&!l&&!p&&!m&&/linux/i.test(r),y=n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),w=o(/version\/(\d+(\.\d+)?)/i),g=/tablet/i.test(r)&&!/tablet pc/i.test(r),_=!g&&/[^-]mobi/i.test(r),x=/xbox/i.test(r);/opera/i.test(r)?t={name:"Opera",opera:e,version:w||o(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(r)?t={name:"Opera",opera:e,version:o(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(r)?t={name:"Samsung Internet for Android",samsungBrowser:e,version:w||o(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(r)?t={name:"Opera Coast",coast:e,version:w||o(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(r)?t={name:"Yandex Browser",yandexbrowser:e,version:w||o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(r)?t={name:"UC Browser",ucbrowser:e,version:o(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(r)?t={name:"Maxthon",maxthon:e,version:o(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(r)?t={name:"Epiphany",epiphany:e,version:o(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(r)?t={name:"Puffin",puffin:e,version:o(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(r)?t={name:"Sleipnir",sleipnir:e,version:o(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(r)?t={name:"K-Meleon",kMeleon:e,version:o(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:f?(t={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},y?(t.msedge=e,t.version=y):(t.msie=e,t.version=o(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(r)?t={name:"Internet Explorer",msie:e,version:o(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?t={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(r)?t={name:"Microsoft Edge",msedge:e,version:y}:/vivaldi/i.test(r)?t={name:"Vivaldi",vivaldi:e,version:o(/vivaldi\/(\d+(\.\d+)?)/i)||w}:l?t={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(r)?t={name:"SeaMonkey",seamonkey:e,version:o(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(r)?(t={name:"Firefox",firefox:e,version:o(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(r)&&(t.firefoxos=e,t.osname="Firefox OS")):c?t={name:"Amazon Silk",silk:e,version:o(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(r)?t={name:"PhantomJS",phantom:e,version:o(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(r)?t={name:"SlimerJS",slimer:e,version:o(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(r)||/rim\stablet/i.test(r)?t={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:w||o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:m?(t={name:"WebOS",osname:"WebOS",webos:e,version:w||o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(r)&&(t.touchpad=e)):/bada/i.test(r)?t={name:"Bada",osname:"Bada",bada:e,version:o(/dolfin\/(\d+(\.\d+)?)/i)}:p?t={name:"Tizen",osname:"Tizen",tizen:e,version:o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(r)?t={name:"QupZilla",qupzilla:e,version:o(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(r)?t={name:"Chromium",chromium:e,version:o(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(r)?t={name:"Chrome",chrome:e,version:o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?t={name:"Android",version:w}:/safari|applewebkit/i.test(r)?(t={name:"Safari",safari:e},w&&(t.version=w)):s?(t={name:"iphone"==s?"iPhone":"ipad"==s?"iPad":"iPod"},w&&(t.version=w)):t=/googlebot/i.test(r)?{name:"Googlebot",googlebot:e,version:o(/googlebot\/(\d+(\.\d+))/i)||w}:{name:o(/^(.*)\/(.*) /),version:n(/^(.*)\/(.*) /)},!t.msedge&&/(apple)?webkit/i.test(r)?(/(apple)?webkit\/537\.36/i.test(r)?(t.name=t.name||"Blink",t.blink=e):(t.name=t.name||"Webkit",t.webkit=e),!t.version&&w&&(t.version=w)):!t.opera&&/gecko\//i.test(r)&&(t.name=t.name||"Gecko",t.gecko=e,t.version=t.version||o(/gecko\/(\d+(\.\d+)?)/i)),t.windowsphone||!i&&!t.silk?!t.windowsphone&&s?(t[s]=e,t.ios=e,t.osname="iOS"):h?(t.mac=e,t.osname="macOS"):x?(t.xbox=e,t.osname="Xbox"):v?(t.windows=e,t.osname="Windows"):b&&(t.linux=e,t.osname="Linux"):(t.android=e,t.osname="Android");var k="";t.windows?k=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(o(/Windows ((NT|XP)( \d\d?.\d)?)/i)):t.windowsphone?k=o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):t.mac?k=(k=o(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):s?k=(k=o(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):i?k=o(/android[ \/-](\d+(\.\d+)*)/i):t.webos?k=o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):t.blackberry?k=o(/rim\stablet\sos\s(\d+(\.\d+)*)/i):t.bada?k=o(/bada\/(\d+(\.\d+)*)/i):t.tizen&&(k=o(/tizen[\/\s](\d+(\.\d+)*)/i)),k&&(t.osversion=k);var j=!t.windows&&k.split(".")[0];return g||d||"ipad"==s||i&&(3==j||j>=4&&!_)||t.silk?t.tablet=e:(_||"iphone"==s||"ipod"==s||i||a||t.blackberry||t.webos||t.bada)&&(t.mobile=e),t.msedge||t.msie&&t.version>=10||t.yandexbrowser&&t.version>=15||t.vivaldi&&t.version>=1||t.chrome&&t.version>=20||t.samsungBrowser&&t.version>=4||t.firefox&&t.version>=20||t.safari&&t.version>=6||t.opera&&t.version>=10||t.ios&&t.osversion&&t.osversion.split(".")[0]>=6||t.blackberry&&t.version>=10.1||t.chromium&&t.version>=20?t.a=e:t.msie&&t.version<10||t.chrome&&t.version<20||t.firefox&&t.version<20||t.safari&&t.version<6||t.opera&&t.version<10||t.ios&&t.osversion&&t.osversion.split(".")[0]<6||t.chromium&&t.version<20?t.c=e:t.x=e,t}var o=r("undefined"!=typeof navigator&&navigator.userAgent||"");function n(e){return e.split(".").length}function t(e,r){var o,n=[];if(Array.prototype.map)return Array.prototype.map.call(e,r);for(o=0;o<e.length;o++)n.push(r(e[o]));return n}function s(e){for(var r=Math.max(n(e[0]),n(e[1])),o=t(e,function(e){var o=r-n(e);return t((e+=new Array(o+1).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--r>=0;){if(o[0][r]>o[1][r])return 1;if(o[0][r]!==o[1][r])return-1;if(0===r)return 0}}function i(e,n,t){var i=o;"string"==typeof n&&(t=n,n=void 0),void 0===n&&(n=!1),t&&(i=r(t));var a=""+i.version;for(var d in e)if(e.hasOwnProperty(d)&&i[d]){if("string"!=typeof e[d])throw new Error("Browser version in the minVersion map should be a string: "+d+": "+String(e));return s([a,e[d]])<0}return n}return o.test=function(e){for(var r=0;r<e.length;++r){var n=e[r];if("string"==typeof n&&n in o)return!0}return!1},o.isUnsupportedBrowser=i,o.compareVersions=s,o.check=function(e,r,o){return!i(e,r,o)},o._detect=r,o.detect=r,o},e.exports?e.exports=n():o("./node_modules/webpack/buildin/amd-define.js")("bowser",n)},"./node_modules/lodash/_baseClamp.js":function(e,r){e.exports=function(e,r,o){return e==e&&(void 0!==o&&(e=e<=o?e:o),void 0!==r&&(e=e>=r?e:r)),e}},"./node_modules/lodash/_baseFindKey.js":function(e,r){e.exports=function(e,r,o){var n;return o(e,function(e,o,t){if(r(e,o,t))return n=o,!1}),n}},"./node_modules/lodash/_baseReduce.js":function(e,r){e.exports=function(e,r,o,n,t){return t(e,function(e,t,s){o=n?(n=!1,e):r(o,e,t,s)}),o}},"./node_modules/lodash/clamp.js":function(e,r,o){var n=o("./node_modules/lodash/_baseClamp.js"),t=o("./node_modules/lodash/toNumber.js");e.exports=function(e,r,o){return void 0===o&&(o=r,r=void 0),void 0!==o&&(o=(o=t(o))==o?o:0),void 0!==r&&(r=(r=t(r))==r?r:0),n(t(e),r,o)}},"./node_modules/lodash/findKey.js":function(e,r,o){var n=o("./node_modules/lodash/_baseFindKey.js"),t=o("./node_modules/lodash/_baseForOwn.js"),s=o("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,r){return n(e,s(r,3),t)}},"./node_modules/lodash/reduce.js":function(e,r,o){var n=o("./node_modules/lodash/_arrayReduce.js"),t=o("./node_modules/lodash/_baseEach.js"),s=o("./node_modules/lodash/_baseIteratee.js"),i=o("./node_modules/lodash/_baseReduce.js"),a=o("./node_modules/lodash/isArray.js");e.exports=function(e,r,o){var d=a(e)?n:i,u=arguments.length<3;return d(e,s(r,4),o,u,t)}},"./node_modules/webpack/buildin/amd-define.js":function(e,r){e.exports=function(){throw new Error("define cannot be used indirect")}}}]);
//# sourceMappingURL=vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPag~2698b78e.c867132d8faf3158b390.js.map

}
/*
     FILE ARCHIVED ON 00:48:47 Apr 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:47:18 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.134
  exclusion.robots.policy: 0.111
  cdx.remote: 0.191
  esindex: 0.016
  LoadShardBlock: 198.43 (6)
  PetaboxLoader3.datanode: 150.756 (8)
  load_resource: 150.771 (2)
  PetaboxLoader3.resolve: 91.349 (2)
*/