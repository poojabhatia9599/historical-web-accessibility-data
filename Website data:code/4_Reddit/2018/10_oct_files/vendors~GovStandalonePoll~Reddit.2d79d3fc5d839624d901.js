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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~GovStandalonePoll~Reddit"],{"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js":function(e,t,r){"use strict";var o=r("./node_modules/react/index.js"),n=r.n(o),s=r("./node_modules/react-dom/index.js");r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"),r("./node_modules/invariant/browser.js");function i(e){var t=/^-?\d*\.?\d+(px|%)$/,r=(e||"0px").split(/\s+/).map(function(e){if(!t.test(e))throw new Error("rootMargin must be specified in pixels or percent");return e});return r[1]=r[1]||r[0],r[2]=r[2]||r[0],r[3]=r[3]||r[1],r.join(" ")}function a(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.some(function(r,o){return a(e[o],t[o])}):e!==t}var l=new Map,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.create=function(e,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.root||null,r=i(e.rootMargin),o=Array.isArray(e.threshold)?e.threshold:[void 0!==e.threshold?e.threshold:0],n=l.keys(),s=Array.isArray(n),u=0;for(n=s?n:n[Symbol.iterator]();;){var d;if(s){if(u>=n.length)break;d=n[u++]}else{if((u=n.next()).done)break;d=u.value}var c=d;if(![[t,c.root],[r,c.rootMargin],[o,c.thresholds]].some(function(e){return a.apply(void 0,e)}))return c}return null}(t)||new IntersectionObserver(e,t)},e.findElement=function(e,t){var r=l.get(t);if(r){var o=r.values(),n=Array.isArray(o),s=0;for(o=n?o:o[Symbol.iterator]();;){var i;if(n){if(s>=o.length)break;i=o[s++]}else{if((s=o.next()).done)break;i=s.value}var a=i;if(a.target===e.target)return a}}return null},e.observe=function(e){var t=void 0;l.has(e.observer)?t=l.get(e.observer):(t=new Set,l.set(e.observer,t)),t.add(e),e.observer.observe(e.target)},e.unobserve=function(e){if(l.has(e.observer)){var t=l.get(e.observer);t.delete(e)&&(t.size>0?e.observer.unobserve(e.target):(e.observer.disconnect(),l.delete(e.observer)))}},e.clear=function(){l.clear()},e.count=function(){return l.size},e}(),d=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){e.forEach(function(e){var r=u.findElement(e,t);r&&r.handleChange(e)})}var p=["root","rootMargin","threshold"],m=Object.prototype,y=function(e){function t(){var r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,s=Array(n),i=0;i<n;i++)s[i]=arguments[i];return r=o=c(this,e.call.apply(e,[this].concat(s))),o.handleChange=function(e){o.props.onChange(e),o.props.onlyOnce&&e.isIntersecting&&o.unobserve()},o.handleNode=function(e){"function"==typeof o.props.children.ref&&o.props.children.ref(e),o.currentTarget&&e&&o.currentTarget!==e&&(o.unobserve(),o.shouldResetObserver=!0),o.target=e},c(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.observe=function(){var e;this.target=(e=this.target,n.a.isValidElement(e)&&"string"==typeof e.type?this.target:Object(s.findDOMNode)(this.target)),this.observer=u.create(f,this.options),u.observe(this)},t.prototype.unobserve=function(){u.unobserve(this)},t.prototype.reobserve=function(){this.unobserve(),this.props.disabled||this.observe()},t.prototype.componentDidMount=function(){this.props.disabled||this.observe()},t.prototype.componentWillUnmount=function(){this.unobserve()},t.prototype.componentDidUpdate=function(){this.shouldResetObserver&&this.reobserve()},t.prototype.componentWillUpdate=function(e){var t=this;this.shouldResetObserver=p.concat(["disabled"]).some(function(r){return a(e[r],t.props[r])})},t.prototype.render=function(){return this.currentTarget=this.target,n.a.cloneElement(n.a.Children.only(this.props.children),{ref:this.handleNode})},d(t,[{key:"options",get:function(){var e=this;return p.reduce(function(t,r){if(m.hasOwnProperty.call(e.props,r)){var o,n=e.props[r];return"root"===r&&"[object String]"===m.toString.call(e.props[r])&&(n=document.querySelector(n)),Object.assign({},t,((o={})[r]=n,o))}return t},{})}}]),t}(n.a.Component);y.displayName="IntersectionObserver";var v=y;r.d(t,"a",function(){return v}),r.d(t,!1,function(){return i})},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,r){"use strict";var o=r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}e.exports=function(){function e(e,t,r,n,s,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js":function(e,t,r){e.exports=r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/babel-runtime/core-js/object/define-properties.js":function(e,t,r){e.exports={default:r("./node_modules/core-js/library/fn/object/define-properties.js"),__esModule:!0}},"./node_modules/babel-runtime/core-js/object/freeze.js":function(e,t,r){e.exports={default:r("./node_modules/core-js/library/fn/object/freeze.js"),__esModule:!0}},"./node_modules/babel-runtime/helpers/taggedTemplateLiteral.js":function(e,t,r){"use strict";t.__esModule=!0;var o=s(r("./node_modules/babel-runtime/core-js/object/define-properties.js")),n=s(r("./node_modules/babel-runtime/core-js/object/freeze.js"));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){return(0,n.default)((0,o.default)(e,{raw:{value:(0,n.default)(t)}}))}},"./node_modules/bowser/src/bowser.js":function(e,t,r){var o;o=function(){var e=!0;function t(t){function r(e){var r=t.match(e);return r&&r.length>1&&r[1]||""}function o(e){var r=t.match(e);return r&&r.length>1&&r[2]||""}var n,s=r(/(ipod|iphone|ipad)/i).toLowerCase(),i=!/like android/i.test(t)&&/android/i.test(t),a=/nexus\s*[0-6]\s*/i.test(t),l=!a&&/nexus\s*[0-9]+/i.test(t),u=/CrOS/.test(t),d=/silk/i.test(t),c=/sailfish/i.test(t),f=/tizen/i.test(t),p=/(web|hpw)os/i.test(t),m=/windows phone/i.test(t),y=(/SamsungBrowser/i.test(t),!m&&/windows/i.test(t)),v=!s&&!d&&/macintosh/i.test(t),h=!i&&!c&&!f&&!p&&/linux/i.test(t),b=o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),_=r(/version\/(\d+(\.\d+)?)/i),j=/tablet/i.test(t)&&!/tablet pc/i.test(t),g=!j&&/[^-]mobi/i.test(t),w=/xbox/i.test(t);/opera/i.test(t)?n={name:"Opera",opera:e,version:_||r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(t)?n={name:"Opera",opera:e,version:r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||_}:/SamsungBrowser/i.test(t)?n={name:"Samsung Internet for Android",samsungBrowser:e,version:_||r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?n={name:"Opera Coast",coast:e,version:_||r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?n={name:"Yandex Browser",yandexbrowser:e,version:_||r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?n={name:"UC Browser",ucbrowser:e,version:r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?n={name:"Maxthon",maxthon:e,version:r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?n={name:"Epiphany",epiphany:e,version:r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?n={name:"Puffin",puffin:e,version:r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?n={name:"Sleipnir",sleipnir:e,version:r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?n={name:"K-Meleon",kMeleon:e,version:r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:m?(n={name:"Windows Phone",osname:"Windows Phone",windowsphone:e},b?(n.msedge=e,n.version=b):(n.msie=e,n.version=r(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?n={name:"Internet Explorer",msie:e,version:r(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:u?n={name:"Chrome",osname:"Chrome OS",chromeos:e,chromeBook:e,chrome:e,version:r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(t)?n={name:"Microsoft Edge",msedge:e,version:b}:/vivaldi/i.test(t)?n={name:"Vivaldi",vivaldi:e,version:r(/vivaldi\/(\d+(\.\d+)?)/i)||_}:c?n={name:"Sailfish",osname:"Sailfish OS",sailfish:e,version:r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?n={name:"SeaMonkey",seamonkey:e,version:r(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(n={name:"Firefox",firefox:e,version:r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(n.firefoxos=e,n.osname="Firefox OS")):d?n={name:"Amazon Silk",silk:e,version:r(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?n={name:"PhantomJS",phantom:e,version:r(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?n={name:"SlimerJS",slimer:e,version:r(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?n={name:"BlackBerry",osname:"BlackBerry OS",blackberry:e,version:_||r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(n={name:"WebOS",osname:"WebOS",webos:e,version:_||r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(n.touchpad=e)):/bada/i.test(t)?n={name:"Bada",osname:"Bada",bada:e,version:r(/dolfin\/(\d+(\.\d+)?)/i)}:f?n={name:"Tizen",osname:"Tizen",tizen:e,version:r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||_}:/qupzilla/i.test(t)?n={name:"QupZilla",qupzilla:e,version:r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||_}:/chromium/i.test(t)?n={name:"Chromium",chromium:e,version:r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||_}:/chrome|crios|crmo/i.test(t)?n={name:"Chrome",chrome:e,version:r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:i?n={name:"Android",version:_}:/safari|applewebkit/i.test(t)?(n={name:"Safari",safari:e},_&&(n.version=_)):s?(n={name:"iphone"==s?"iPhone":"ipad"==s?"iPad":"iPod"},_&&(n.version=_)):n=/googlebot/i.test(t)?{name:"Googlebot",googlebot:e,version:r(/googlebot\/(\d+(\.\d+))/i)||_}:{name:r(/^(.*)\/(.*) /),version:o(/^(.*)\/(.*) /)},!n.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(n.name=n.name||"Blink",n.blink=e):(n.name=n.name||"Webkit",n.webkit=e),!n.version&&_&&(n.version=_)):!n.opera&&/gecko\//i.test(t)&&(n.name=n.name||"Gecko",n.gecko=e,n.version=n.version||r(/gecko\/(\d+(\.\d+)?)/i)),n.windowsphone||!i&&!n.silk?!n.windowsphone&&s?(n[s]=e,n.ios=e,n.osname="iOS"):v?(n.mac=e,n.osname="macOS"):w?(n.xbox=e,n.osname="Xbox"):y?(n.windows=e,n.osname="Windows"):h&&(n.linux=e,n.osname="Linux"):(n.android=e,n.osname="Android");var S="";n.windows?S=function(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return}}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)):n.windowsphone?S=r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):n.mac?S=(S=r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g,"."):s?S=(S=r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g,"."):i?S=r(/android[ \/-](\d+(\.\d+)*)/i):n.webos?S=r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):n.blackberry?S=r(/rim\stablet\sos\s(\d+(\.\d+)*)/i):n.bada?S=r(/bada\/(\d+(\.\d+)*)/i):n.tizen&&(S=r(/tizen[\/\s](\d+(\.\d+)*)/i)),S&&(n.osversion=S);var O=!n.windows&&S.split(".")[0];return j||l||"ipad"==s||i&&(3==O||O>=4&&!g)||n.silk?n.tablet=e:(g||"iphone"==s||"ipod"==s||i||a||n.blackberry||n.webos||n.bada)&&(n.mobile=e),n.msedge||n.msie&&n.version>=10||n.yandexbrowser&&n.version>=15||n.vivaldi&&n.version>=1||n.chrome&&n.version>=20||n.samsungBrowser&&n.version>=4||n.firefox&&n.version>=20||n.safari&&n.version>=6||n.opera&&n.version>=10||n.ios&&n.osversion&&n.osversion.split(".")[0]>=6||n.blackberry&&n.version>=10.1||n.chromium&&n.version>=20?n.a=e:n.msie&&n.version<10||n.chrome&&n.version<20||n.firefox&&n.version<20||n.safari&&n.version<6||n.opera&&n.version<10||n.ios&&n.osversion&&n.osversion.split(".")[0]<6||n.chromium&&n.version<20?n.c=e:n.x=e,n}var r=t("undefined"!=typeof navigator&&navigator.userAgent||"");function o(e){return e.split(".").length}function n(e,t){var r,o=[];if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r++)o.push(t(e[r]));return o}function s(e){for(var t=Math.max(o(e[0]),o(e[1])),r=n(e,function(e){var r=t-o(e);return n((e+=new Array(r+1).join(".0")).split("."),function(e){return new Array(20-e.length).join("0")+e}).reverse()});--t>=0;){if(r[0][t]>r[1][t])return 1;if(r[0][t]!==r[1][t])return-1;if(0===t)return 0}}function i(e,o,n){var i=r;"string"==typeof o&&(n=o,o=void 0),void 0===o&&(o=!1),n&&(i=t(n));var a=""+i.version;for(var l in e)if(e.hasOwnProperty(l)&&i[l]){if("string"!=typeof e[l])throw new Error("Browser version in the minVersion map should be a string: "+l+": "+String(e));return s([a,e[l]])<0}return o}return r.test=function(e){for(var t=0;t<e.length;++t){var o=e[t];if("string"==typeof o&&o in r)return!0}return!1},r.isUnsupportedBrowser=i,r.compareVersions=s,r.check=function(e,t,r){return!i(e,t,r)},r._detect=t,r.detect=t,r},void 0!==e&&e.exports?e.exports=o():r("./node_modules/webpack/buildin/amd-define.js")("bowser",o)},"./node_modules/brcast/dist/brcast.es.js":function(e,t,r){"use strict";t.a=function(e){var t={},r=1,o=e;return{getState:function(){return o},setState:function(e){o=e;for(var r=Object.keys(t),n=0,s=r.length;n<s;n++)t[r[n]]&&t[r[n]](e)},subscribe:function(e){if("function"!=typeof e)throw new Error("listener must be a function.");var o=r;return t[o]=e,r+=1,o},unsubscribe:function(e){t[e]=void 0}}}},"./node_modules/core-js/library/fn/object/define-properties.js":function(e,t,r){r("./node_modules/core-js/library/modules/es6.object.define-properties.js");var o=r("./node_modules/core-js/library/modules/_core.js").Object;e.exports=function(e,t){return o.defineProperties(e,t)}},"./node_modules/core-js/library/fn/object/freeze.js":function(e,t,r){r("./node_modules/core-js/library/modules/es6.object.freeze.js"),e.exports=r("./node_modules/core-js/library/modules/_core.js").Object.freeze},"./node_modules/core-js/library/modules/_object-sap.js":function(e,t,r){var o=r("./node_modules/core-js/library/modules/_export.js"),n=r("./node_modules/core-js/library/modules/_core.js"),s=r("./node_modules/core-js/library/modules/_fails.js");e.exports=function(e,t){var r=(n.Object||{})[e]||Object[e],i={};i[e]=t(r),o(o.S+o.F*s(function(){r(1)}),"Object",i)}},"./node_modules/core-js/library/modules/es6.object.define-properties.js":function(e,t,r){var o=r("./node_modules/core-js/library/modules/_export.js");o(o.S+o.F*!r("./node_modules/core-js/library/modules/_descriptors.js"),"Object",{defineProperties:r("./node_modules/core-js/library/modules/_object-dps.js")})},"./node_modules/core-js/library/modules/es6.object.freeze.js":function(e,t,r){var o=r("./node_modules/core-js/library/modules/_is-object.js"),n=r("./node_modules/core-js/library/modules/_meta.js").onFreeze;r("./node_modules/core-js/library/modules/_object-sap.js")("freeze",function(e){return function(t){return e&&o(t)?e(n(t)):t}})},"./node_modules/lodash/_baseClamp.js":function(e,t){e.exports=function(e,t,r){return e==e&&(void 0!==r&&(e=e<=r?e:r),void 0!==t&&(e=e>=t?e:t)),e}},"./node_modules/lodash/_baseFindKey.js":function(e,t){e.exports=function(e,t,r){var o;return r(e,function(e,r,n){if(t(e,r,n))return o=r,!1}),o}},"./node_modules/lodash/clamp.js":function(e,t,r){var o=r("./node_modules/lodash/_baseClamp.js"),n=r("./node_modules/lodash/toNumber.js");e.exports=function(e,t,r){return void 0===r&&(r=t,t=void 0),void 0!==r&&(r=(r=n(r))==r?r:0),void 0!==t&&(t=(t=n(t))==t?t:0),o(n(e),t,r)}},"./node_modules/lodash/findKey.js":function(e,t,r){var o=r("./node_modules/lodash/_baseFindKey.js"),n=r("./node_modules/lodash/_baseForOwn.js"),s=r("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,t){return o(e,s(t,3),n)}},"./node_modules/react-motion/lib/Motion.js":function(e,t,r){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var i=s(r("./node_modules/react-motion/lib/mapToZero.js")),a=s(r("./node_modules/react-motion/lib/stripStyle.js")),l=s(r("./node_modules/react-motion/lib/stepper.js")),u=s(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),d=s(r("./node_modules/raf/index.js")),c=s(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),f=s(r("./node_modules/react/index.js")),p=s(r("./node_modules/react-motion/node_modules/prop-types/index.js")),m=1e3/60,y=function(e){function t(r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,r=n.state,s=r.currentStyle,i=r.currentVelocity,a=r.lastIdealStyle,l=r.lastIdealVelocity;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var d=e[u];"number"==typeof d&&(t||(t=!0,s=o({},s),i=o({},i),a=o({},a),l=o({},l)),s[u]=d,i[u]=0,a[u]=d,l[u]=0)}t&&n.setState({currentStyle:s,currentVelocity:i,lastIdealStyle:a,lastIdealVelocity:l})},this.startAnimationIfNecessary=function(){n.animationID=d.default(function(e){var t=n.props.style;if(c.default(n.state.currentStyle,t,n.state.currentVelocity))return n.wasAnimating&&n.props.onRest&&n.props.onRest(),n.animationID=null,n.wasAnimating=!1,void(n.accumulatedTime=0);n.wasAnimating=!0;var r=e||u.default(),o=r-n.prevTime;if(n.prevTime=r,n.accumulatedTime=n.accumulatedTime+o,n.accumulatedTime>10*m&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();var s=(n.accumulatedTime-Math.floor(n.accumulatedTime/m)*m)/m,i=Math.floor(n.accumulatedTime/m),a={},d={},f={},p={};for(var y in t)if(Object.prototype.hasOwnProperty.call(t,y)){var v=t[y];if("number"==typeof v)f[y]=v,p[y]=0,a[y]=v,d[y]=0;else{for(var h=n.state.lastIdealStyle[y],b=n.state.lastIdealVelocity[y],_=0;_<i;_++){var j=l.default(m/1e3,h,b,v.val,v.stiffness,v.damping,v.precision);h=j[0],b=j[1]}var g=l.default(m/1e3,h,b,v.val,v.stiffness,v.damping,v.precision),w=g[0],S=g[1];f[y]=h+(w-h)*s,p[y]=b+(S-b)*s,a[y]=h,d[y]=b}}n.animationID=null,n.accumulatedTime-=i*m,n.setState({currentStyle:f,currentVelocity:p,lastIdealStyle:a,lastIdealVelocity:d}),n.unreadPropStyle=null,n.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,null,[{key:"propTypes",value:{defaultStyle:p.default.objectOf(p.default.number),style:p.default.objectOf(p.default.oneOfType([p.default.number,p.default.object])).isRequired,children:p.default.func.isRequired,onRest:p.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,r=e.style,o=t||a.default(r),n=i.default(o);return{currentStyle:o,currentVelocity:n,lastIdealStyle:o,lastIdealVelocity:n}},t.prototype.componentDidMount=function(){this.prevTime=u.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=u.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(d.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&f.default.Children.only(e)},t}(f.default.Component);t.default=y,e.exports=t.default},"./node_modules/react-motion/lib/StaggeredMotion.js":function(e,t,r){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var i=s(r("./node_modules/react-motion/lib/mapToZero.js")),a=s(r("./node_modules/react-motion/lib/stripStyle.js")),l=s(r("./node_modules/react-motion/lib/stepper.js")),u=s(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),d=s(r("./node_modules/raf/index.js")),c=s(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),f=s(r("./node_modules/react/index.js")),p=s(r("./node_modules/react-motion/node_modules/prop-types/index.js")),m=1e3/60;var y=function(e){function t(r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=n.state,r=t.currentStyles,s=t.currentVelocities,i=t.lastIdealStyles,a=t.lastIdealVelocities,l=!1,u=0;u<e.length;u++){var d=e[u],c=!1;for(var f in d)if(Object.prototype.hasOwnProperty.call(d,f)){var p=d[f];"number"==typeof p&&(c||(c=!0,l=!0,r[u]=o({},r[u]),s[u]=o({},s[u]),i[u]=o({},i[u]),a[u]=o({},a[u])),r[u][f]=p,s[u][f]=0,i[u][f]=p,a[u][f]=0)}}l&&n.setState({currentStyles:r,currentVelocities:s,lastIdealStyles:i,lastIdealVelocities:a})},this.startAnimationIfNecessary=function(){n.animationID=d.default(function(e){var t=n.props.styles(n.state.lastIdealStyles);if(function(e,t,r){for(var o=0;o<e.length;o++)if(!c.default(e[o],t[o],r[o]))return!1;return!0}(n.state.currentStyles,t,n.state.currentVelocities))return n.animationID=null,void(n.accumulatedTime=0);var r=e||u.default(),o=r-n.prevTime;if(n.prevTime=r,n.accumulatedTime=n.accumulatedTime+o,n.accumulatedTime>10*m&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();for(var s=(n.accumulatedTime-Math.floor(n.accumulatedTime/m)*m)/m,i=Math.floor(n.accumulatedTime/m),a=[],d=[],f=[],p=[],y=0;y<t.length;y++){var v=t[y],h={},b={},_={},j={};for(var g in v)if(Object.prototype.hasOwnProperty.call(v,g)){var w=v[g];if("number"==typeof w)h[g]=w,b[g]=0,_[g]=w,j[g]=0;else{for(var S=n.state.lastIdealStyles[y][g],O=n.state.lastIdealVelocities[y][g],T=0;T<i;T++){var k=l.default(m/1e3,S,O,w.val,w.stiffness,w.damping,w.precision);S=k[0],O=k[1]}var P=l.default(m/1e3,S,O,w.val,w.stiffness,w.damping,w.precision),x=P[0],I=P[1];h[g]=S+(x-S)*s,b[g]=O+(I-O)*s,_[g]=S,j[g]=O}}f[y]=h,p[y]=b,a[y]=_,d[y]=j}n.animationID=null,n.accumulatedTime-=i*m,n.setState({currentStyles:f,currentVelocities:p,lastIdealStyles:a,lastIdealVelocities:d}),n.unreadPropStyles=null,n.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,null,[{key:"propTypes",value:{defaultStyles:p.default.arrayOf(p.default.objectOf(p.default.number)),styles:p.default.func.isRequired,children:p.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,r=e.styles,o=t||r().map(a.default),n=o.map(function(e){return i.default(e)});return{currentStyles:o,currentVelocities:n,lastIdealStyles:o,lastIdealVelocities:n}},t.prototype.componentDidMount=function(){this.prevTime=u.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=u.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(d.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&f.default.Children.only(e)},t}(f.default.Component);t.default=y,e.exports=t.default},"./node_modules/react-motion/lib/TransitionMotion.js":function(e,t,r){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var i=s(r("./node_modules/react-motion/lib/mapToZero.js")),a=s(r("./node_modules/react-motion/lib/stripStyle.js")),l=s(r("./node_modules/react-motion/lib/stepper.js")),u=s(r("./node_modules/react-motion/lib/mergeDiff.js")),d=s(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),c=s(r("./node_modules/raf/index.js")),f=s(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),p=s(r("./node_modules/react/index.js")),m=s(r("./node_modules/react-motion/node_modules/prop-types/index.js")),y=1e3/60;function v(e,t,r){var o=t;return null==o?e.map(function(e,t){return{key:e.key,data:e.data,style:r[t]}}):e.map(function(e,t){for(var n=0;n<o.length;n++)if(o[n].key===e.key)return{key:o[n].key,data:o[n].data,style:r[t]};return{key:e.key,data:e.data,style:r[t]}})}function h(e,t,r,o,n,s,a,l,d){for(var c=u.default(o,n,function(e,o){var n=t(o);return null==n?(r({key:o.key,data:o.data}),null):f.default(s[e],n,a[e])?(r({key:o.key,data:o.data}),null):{key:o.key,data:o.data,style:n}}),p=[],m=[],y=[],v=[],h=0;h<c.length;h++){for(var b=c[h],_=null,j=0;j<o.length;j++)if(o[j].key===b.key){_=j;break}if(null==_){var g=e(b);p[h]=g,y[h]=g;var w=i.default(b.style);m[h]=w,v[h]=w}else p[h]=s[_],y[h]=l[_],m[h]=a[_],v[h]=d[_]}return[c,p,m,y,v]}var b=function(e){function t(r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=h(n.props.willEnter,n.props.willLeave,n.props.didLeave,n.state.mergedPropsStyles,e,n.state.currentStyles,n.state.currentVelocities,n.state.lastIdealStyles,n.state.lastIdealVelocities),r=t[0],s=t[1],i=t[2],a=t[3],l=t[4],u=0;u<e.length;u++){var d=e[u].style,c=!1;for(var f in d)if(Object.prototype.hasOwnProperty.call(d,f)){var p=d[f];"number"==typeof p&&(c||(c=!0,s[u]=o({},s[u]),i[u]=o({},i[u]),a[u]=o({},a[u]),l[u]=o({},l[u]),r[u]={key:r[u].key,data:r[u].data,style:o({},r[u].style)}),s[u][f]=p,i[u][f]=0,a[u][f]=p,l[u][f]=0,r[u].style[f]=p)}}n.setState({currentStyles:s,currentVelocities:i,mergedPropsStyles:r,lastIdealStyles:a,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){n.unmounting||(n.animationID=c.default(function(e){if(!n.unmounting){var t=n.props.styles,r="function"==typeof t?t(v(n.state.mergedPropsStyles,n.unreadPropStyles,n.state.lastIdealStyles)):t;if(function(e,t,r,o){if(o.length!==t.length)return!1;for(var n=0;n<o.length;n++)if(o[n].key!==t[n].key)return!1;for(n=0;n<o.length;n++)if(!f.default(e[n],t[n].style,r[n]))return!1;return!0}(n.state.currentStyles,r,n.state.currentVelocities,n.state.mergedPropsStyles))return n.animationID=null,void(n.accumulatedTime=0);var o=e||d.default(),s=o-n.prevTime;if(n.prevTime=o,n.accumulatedTime=n.accumulatedTime+s,n.accumulatedTime>10*y&&(n.accumulatedTime=0),0===n.accumulatedTime)return n.animationID=null,void n.startAnimationIfNecessary();for(var i=(n.accumulatedTime-Math.floor(n.accumulatedTime/y)*y)/y,a=Math.floor(n.accumulatedTime/y),u=h(n.props.willEnter,n.props.willLeave,n.props.didLeave,n.state.mergedPropsStyles,r,n.state.currentStyles,n.state.currentVelocities,n.state.lastIdealStyles,n.state.lastIdealVelocities),c=u[0],p=u[1],m=u[2],b=u[3],_=u[4],j=0;j<c.length;j++){var g=c[j].style,w={},S={},O={},T={};for(var k in g)if(Object.prototype.hasOwnProperty.call(g,k)){var P=g[k];if("number"==typeof P)w[k]=P,S[k]=0,O[k]=P,T[k]=0;else{for(var x=b[j][k],I=_[j][k],M=0;M<a;M++){var A=l.default(y/1e3,x,I,P.val,P.stiffness,P.damping,P.precision);x=A[0],I=A[1]}var D=l.default(y/1e3,x,I,P.val,P.stiffness,P.damping,P.precision),V=D[0],E=D[1];w[k]=x+(V-x)*i,S[k]=I+(E-I)*i,O[k]=x,T[k]=I}}b[j]=O,_[j]=T,p[j]=w,m[j]=S}n.animationID=null,n.accumulatedTime-=a*y,n.setState({currentStyles:p,currentVelocities:m,lastIdealStyles:b,lastIdealVelocities:_,mergedPropsStyles:c}),n.unreadPropStyles=null,n.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,null,[{key:"propTypes",value:{defaultStyles:m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,data:m.default.any,style:m.default.objectOf(m.default.number).isRequired})),styles:m.default.oneOfType([m.default.func,m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,data:m.default.any,style:m.default.objectOf(m.default.oneOfType([m.default.number,m.default.object])).isRequired}))]).isRequired,children:m.default.func.isRequired,willEnter:m.default.func,willLeave:m.default.func,didLeave:m.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return a.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,r=e.styles,o=e.willEnter,n=e.willLeave,s=e.didLeave,l="function"==typeof r?r(t):r,u=void 0;u=null==t?l:t.map(function(e){for(var t=0;t<l.length;t++)if(l[t].key===e.key)return l[t];return e});var d=null==t?l.map(function(e){return a.default(e.style)}):t.map(function(e){return a.default(e.style)}),c=null==t?l.map(function(e){return i.default(e.style)}):t.map(function(e){return i.default(e.style)}),f=h(o,n,s,u,l,d,c,d,c),p=f[0];return{currentStyles:f[1],currentVelocities:f[2],lastIdealStyles:f[3],lastIdealVelocities:f[4],mergedPropsStyles:p}},t.prototype.componentDidMount=function(){this.prevTime=d.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(v(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=d.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=v(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&p.default.Children.only(t)},t}(p.default.Component);t.default=b,e.exports=t.default},"./node_modules/react-motion/lib/mapToZero.js":function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=0);return t},e.exports=t.default},"./node_modules/react-motion/lib/mergeDiff.js":function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t,r){for(var o={},n=0;n<e.length;n++)o[e[n].key]=n;for(var s={},n=0;n<t.length;n++)s[t[n].key]=n;for(var i=[],n=0;n<t.length;n++)i[n]=t[n];for(var n=0;n<e.length;n++)if(!Object.prototype.hasOwnProperty.call(s,e[n].key)){var a=r(n,e[n]);null!=a&&i.push(a)}return i.sort(function(e,r){var n=s[e.key],i=s[r.key],a=o[e.key],l=o[r.key];if(null!=n&&null!=i)return s[e.key]-s[r.key];if(null!=a&&null!=l)return o[e.key]-o[r.key];if(null!=n){for(var u=0;u<t.length;u++){var d=t[u].key;if(Object.prototype.hasOwnProperty.call(o,d)){if(n<s[d]&&l>o[d])return-1;if(n>s[d]&&l<o[d])return 1}}return 1}for(var u=0;u<t.length;u++){var d=t[u].key;if(Object.prototype.hasOwnProperty.call(o,d)){if(i<s[d]&&a>o[d])return 1;if(i>s[d]&&a<o[d])return-1}}return-1})},e.exports=t.default},"./node_modules/react-motion/lib/presets.js":function(e,t,r){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},"./node_modules/react-motion/lib/react-motion.js":function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var n=r("./node_modules/react-motion/lib/Motion.js");t.Motion=o(n);var s=r("./node_modules/react-motion/lib/StaggeredMotion.js");t.StaggeredMotion=o(s);var i=r("./node_modules/react-motion/lib/TransitionMotion.js");t.TransitionMotion=o(i);var a=r("./node_modules/react-motion/lib/spring.js");t.spring=o(a);var l=r("./node_modules/react-motion/lib/presets.js");t.presets=o(l);var u=r("./node_modules/react-motion/lib/stripStyle.js");t.stripStyle=o(u);var d=r("./node_modules/react-motion/lib/reorderKeys.js");t.reorderKeys=o(d)},"./node_modules/react-motion/lib/reorderKeys.js":function(e,t,r){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},"./node_modules/react-motion/lib/shouldStopAnimation.js":function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t,r){for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){if(0!==r[o])return!1;var n="number"==typeof t[o]?t[o]:t[o].val;if(e[o]!==n)return!1}return!0},e.exports=t.default},"./node_modules/react-motion/lib/spring.js":function(e,t,r){"use strict";t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.default=function(e,t){return o({},a,t,{val:e})};var n,s=r("./node_modules/react-motion/lib/presets.js"),i=(n=s)&&n.__esModule?n:{default:n},a=o({},i.default.noWobble,{precision:.01});e.exports=t.default},"./node_modules/react-motion/lib/stepper.js":function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t,r,n,s,i,a){var l=r+(-s*(t-n)+-i*r)*e,u=t+l*e;if(Math.abs(l)<a&&Math.abs(u-n)<a)return o[0]=n,o[1]=0,o;return o[0]=u,o[1]=l,o};var o=[0,0];e.exports=t.default},"./node_modules/react-motion/lib/stripStyle.js":function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]="number"==typeof e[r]?e[r]:e[r].val);return t},e.exports=t.default},"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js":function(e,t,r){(function(t){(function(){var r,o,n;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(r()-n)/1e6},o=t.hrtime,n=(r=function(){var e;return 1e9*(e=o())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-n},n=Date.now()):(e.exports=function(){return(new Date).getTime()-n},n=(new Date).getTime())}).call(this)}).call(this,r("./node_modules/process/browser.js"))},"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,r){"use strict";var o=r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}e.exports=function(){function e(e,t,r,n,s,i){if(i!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},"./node_modules/react-motion/node_modules/prop-types/index.js":function(e,t,r){e.exports=r("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/webpack/buildin/amd-define.js":function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}}}]);
//# sourceMappingURL=vendors~GovStandalonePoll~Reddit.2d79d3fc5d839624d901.js.map

}
/*
     FILE ARCHIVED ON 00:04:57 Oct 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:34:26 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.055
  cdx.remote: 0.091
  esindex: 0.009
  LoadShardBlock: 162.27 (6)
  PetaboxLoader3.datanode: 211.125 (8)
  load_resource: 290.419 (2)
  PetaboxLoader3.resolve: 182.648 (2)
*/