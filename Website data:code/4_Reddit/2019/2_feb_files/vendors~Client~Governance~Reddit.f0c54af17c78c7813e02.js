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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Client~Governance~Reddit"],{"./node_modules/fbjs/lib/emptyFunction.js":function(e,s,o){"use strict";function i(e){return function(){return e}}var n=function(){};n.thatReturns=i,n.thatReturnsFalse=i(!1),n.thatReturnsTrue=i(!0),n.thatReturnsNull=i(null),n.thatReturnsThis=function(){return this},n.thatReturnsArgument=function(e){return e},e.exports=n},"./node_modules/fbjs/lib/invariant.js":function(e,s,o){"use strict";var i=function(e){};e.exports=function(e,s,o,n,r,d,t,a){if(i(s),!e){var u;if(void 0===s)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[o,n,r,d,t,a],c=0;(u=new Error(s.replace(/%s/g,function(){return l[c++]}))).name="Invariant Violation"}throw u.framesToPop=1,u}}},"./node_modules/lodash/_asciiWords.js":function(e,s){var o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(o)||[]}},"./node_modules/lodash/_assignMergeValue.js":function(e,s,o){var i=o("./node_modules/lodash/_baseAssignValue.js"),n=o("./node_modules/lodash/eq.js");e.exports=function(e,s,o){(void 0===o||n(e[s],o))&&(void 0!==o||s in e)||i(e,s,o)}},"./node_modules/lodash/_baseInverter.js":function(e,s,o){var i=o("./node_modules/lodash/_baseForOwn.js");e.exports=function(e,s,o,n){return i(e,function(e,i,r){s(n,o(e),i,r)}),n}},"./node_modules/lodash/_baseMerge.js":function(e,s,o){var i=o("./node_modules/lodash/_Stack.js"),n=o("./node_modules/lodash/_assignMergeValue.js"),r=o("./node_modules/lodash/_baseFor.js"),d=o("./node_modules/lodash/_baseMergeDeep.js"),t=o("./node_modules/lodash/isObject.js"),a=o("./node_modules/lodash/keysIn.js"),u=o("./node_modules/lodash/_safeGet.js");e.exports=function e(s,o,l,c,f){s!==o&&r(o,function(r,a){if(t(r))f||(f=new i),d(s,o,a,l,e,c,f);else{var m=c?c(u(s,a),r,a+"",s,o,f):void 0;void 0===m&&(m=r),n(s,a,m)}},a)}},"./node_modules/lodash/_baseMergeDeep.js":function(e,s,o){var i=o("./node_modules/lodash/_assignMergeValue.js"),n=o("./node_modules/lodash/_cloneBuffer.js"),r=o("./node_modules/lodash/_cloneTypedArray.js"),d=o("./node_modules/lodash/_copyArray.js"),t=o("./node_modules/lodash/_initCloneObject.js"),a=o("./node_modules/lodash/isArguments.js"),u=o("./node_modules/lodash/isArray.js"),l=o("./node_modules/lodash/isArrayLikeObject.js"),c=o("./node_modules/lodash/isBuffer.js"),f=o("./node_modules/lodash/isFunction.js"),m=o("./node_modules/lodash/isObject.js"),h=o("./node_modules/lodash/isPlainObject.js"),p=o("./node_modules/lodash/isTypedArray.js"),w=o("./node_modules/lodash/_safeGet.js"),b=o("./node_modules/lodash/toPlainObject.js");e.exports=function(e,s,o,v,_,g,j){var x=w(e,o),y=w(s,o),k=j.get(y);if(k)i(e,o,k);else{var A=g?g(x,y,o+"",e,s,j):void 0,T=void 0===A;if(T){var S=u(y),E=!S&&c(y),O=!S&&!E&&p(y);A=y,S||E||O?u(x)?A=x:l(x)?A=d(x):E?(T=!1,A=n(y,!0)):O?(T=!1,A=r(y,!0)):A=[]:h(y)||a(y)?(A=x,a(x)?A=b(x):(!m(x)||v&&f(x))&&(A=t(y))):T=!1}T&&(j.set(y,A),_(A,y,v,g,j),j.delete(y)),i(e,o,A)}}},"./node_modules/lodash/_basePropertyOf.js":function(e,s){e.exports=function(e){return function(s){return null==e?void 0:e[s]}}},"./node_modules/lodash/_baseSome.js":function(e,s,o){var i=o("./node_modules/lodash/_baseEach.js");e.exports=function(e,s){var o;return i(e,function(e,i,n){return!(o=s(e,i,n))}),!!o}},"./node_modules/lodash/_castFunction.js":function(e,s,o){var i=o("./node_modules/lodash/identity.js");e.exports=function(e){return"function"==typeof e?e:i}},"./node_modules/lodash/_castSlice.js":function(e,s,o){var i=o("./node_modules/lodash/_baseSlice.js");e.exports=function(e,s,o){var n=e.length;return o=void 0===o?n:o,!s&&o>=n?e:i(e,s,o)}},"./node_modules/lodash/_charsStartIndex.js":function(e,s,o){var i=o("./node_modules/lodash/_baseIndexOf.js");e.exports=function(e,s){for(var o=-1,n=e.length;++o<n&&i(s,e[o],0)>-1;);return o}},"./node_modules/lodash/_createAssigner.js":function(e,s,o){var i=o("./node_modules/lodash/_baseRest.js"),n=o("./node_modules/lodash/_isIterateeCall.js");e.exports=function(e){return i(function(s,o){var i=-1,r=o.length,d=r>1?o[r-1]:void 0,t=r>2?o[2]:void 0;for(d=e.length>3&&"function"==typeof d?(r--,d):void 0,t&&n(o[0],o[1],t)&&(d=r<3?void 0:d,r=1),s=Object(s);++i<r;){var a=o[i];a&&e(s,a,i,d)}return s})}},"./node_modules/lodash/_createCompounder.js":function(e,s,o){var i=o("./node_modules/lodash/_arrayReduce.js"),n=o("./node_modules/lodash/deburr.js"),r=o("./node_modules/lodash/words.js"),d=RegExp("['’]","g");e.exports=function(e){return function(s){return i(r(n(s).replace(d,"")),e,"")}}},"./node_modules/lodash/_createInverter.js":function(e,s,o){var i=o("./node_modules/lodash/_baseInverter.js");e.exports=function(e,s){return function(o,n){return i(o,e,s(n),{})}}},"./node_modules/lodash/_deburrLetter.js":function(e,s,o){var i=o("./node_modules/lodash/_basePropertyOf.js")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=i},"./node_modules/lodash/_hasUnicodeWord.js":function(e,s){var o=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return o.test(e)}},"./node_modules/lodash/_safeGet.js":function(e,s){e.exports=function(e,s){return"__proto__"==s?void 0:e[s]}},"./node_modules/lodash/_unicodeWords.js":function(e,s){var o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",n="\\d+",r="[\\u2700-\\u27bf]",d="[a-z\\xdf-\\xf6\\xf8-\\xff]",t="[^\\ud800-\\udfff"+o+n+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:"+d+"|"+t+")",f="(?:"+l+"|"+t+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",h="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",a,u].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),p="(?:"+[r,a,u].join("|")+")"+h,w=RegExp([l+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[i,l,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[i,l+c,"$"].join("|")+")",l+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",n,p].join("|"),"g");e.exports=function(e){return e.match(w)||[]}},"./node_modules/lodash/deburr.js":function(e,s,o){var i=o("./node_modules/lodash/_deburrLetter.js"),n=o("./node_modules/lodash/toString.js"),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,d=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=n(e))&&e.replace(r,i).replace(d,"")}},"./node_modules/lodash/defaults.js":function(e,s,o){var i=o("./node_modules/lodash/_baseRest.js"),n=o("./node_modules/lodash/eq.js"),r=o("./node_modules/lodash/_isIterateeCall.js"),d=o("./node_modules/lodash/keysIn.js"),t=Object.prototype,a=t.hasOwnProperty,u=i(function(e,s){e=Object(e);var o=-1,i=s.length,u=i>2?s[2]:void 0;for(u&&r(s[0],s[1],u)&&(i=1);++o<i;)for(var l=s[o],c=d(l),f=-1,m=c.length;++f<m;){var h=c[f],p=e[h];(void 0===p||n(p,t[h])&&!a.call(e,h))&&(e[h]=l[h])}return e});e.exports=u},"./node_modules/lodash/forOwn.js":function(e,s,o){var i=o("./node_modules/lodash/_baseForOwn.js"),n=o("./node_modules/lodash/_castFunction.js");e.exports=function(e,s){return e&&i(e,n(s))}},"./node_modules/lodash/invert.js":function(e,s,o){var i=o("./node_modules/lodash/constant.js"),n=o("./node_modules/lodash/_createInverter.js"),r=o("./node_modules/lodash/identity.js"),d=Object.prototype.toString,t=n(function(e,s,o){null!=s&&"function"!=typeof s.toString&&(s=d.call(s)),e[s]=o},i(r));e.exports=t},"./node_modules/lodash/mapKeys.js":function(e,s,o){var i=o("./node_modules/lodash/_baseAssignValue.js"),n=o("./node_modules/lodash/_baseForOwn.js"),r=o("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,s){var o={};return s=r(s,3),n(e,function(e,n,r){i(o,s(e,n,r),e)}),o}},"./node_modules/lodash/mapValues.js":function(e,s,o){var i=o("./node_modules/lodash/_baseAssignValue.js"),n=o("./node_modules/lodash/_baseForOwn.js"),r=o("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,s){var o={};return s=r(s,3),n(e,function(e,n,r){i(o,n,s(e,n,r))}),o}},"./node_modules/lodash/merge.js":function(e,s,o){var i=o("./node_modules/lodash/_baseMerge.js"),n=o("./node_modules/lodash/_createAssigner.js")(function(e,s,o){i(e,s,o)});e.exports=n},"./node_modules/lodash/mergeWith.js":function(e,s,o){var i=o("./node_modules/lodash/_baseMerge.js"),n=o("./node_modules/lodash/_createAssigner.js")(function(e,s,o,n){i(e,s,o,n)});e.exports=n},"./node_modules/lodash/set.js":function(e,s,o){var i=o("./node_modules/lodash/_baseSet.js");e.exports=function(e,s,o){return null==e?e:i(e,s,o)}},"./node_modules/lodash/snakeCase.js":function(e,s,o){var i=o("./node_modules/lodash/_createCompounder.js")(function(e,s,o){return e+(o?"_":"")+s.toLowerCase()});e.exports=i},"./node_modules/lodash/some.js":function(e,s,o){var i=o("./node_modules/lodash/_arraySome.js"),n=o("./node_modules/lodash/_baseIteratee.js"),r=o("./node_modules/lodash/_baseSome.js"),d=o("./node_modules/lodash/isArray.js"),t=o("./node_modules/lodash/_isIterateeCall.js");e.exports=function(e,s,o){var a=d(e)?i:r;return o&&t(e,s,o)&&(s=void 0),a(e,n(s,3))}},"./node_modules/lodash/toPlainObject.js":function(e,s,o){var i=o("./node_modules/lodash/_copyObject.js"),n=o("./node_modules/lodash/keysIn.js");e.exports=function(e){return i(e,n(e))}},"./node_modules/lodash/trimStart.js":function(e,s,o){var i=o("./node_modules/lodash/_baseToString.js"),n=o("./node_modules/lodash/_castSlice.js"),r=o("./node_modules/lodash/_charsStartIndex.js"),d=o("./node_modules/lodash/_stringToArray.js"),t=o("./node_modules/lodash/toString.js"),a=/^\s+/;e.exports=function(e,s,o){if((e=t(e))&&(o||void 0===s))return e.replace(a,"");if(!e||!(s=i(s)))return e;var u=d(e),l=r(u,d(s));return n(u,l).join("")}},"./node_modules/lodash/words.js":function(e,s,o){var i=o("./node_modules/lodash/_asciiWords.js"),n=o("./node_modules/lodash/_hasUnicodeWord.js"),r=o("./node_modules/lodash/toString.js"),d=o("./node_modules/lodash/_unicodeWords.js");e.exports=function(e,s,o){return e=r(e),void 0===(s=o?void 0:s)?n(e)?d(e):i(e):e.match(s)||[]}},"./node_modules/path-browserify/index.js":function(e,s,o){(function(e){function o(e,s){for(var o=0,i=e.length-1;i>=0;i--){var n=e[i];"."===n?e.splice(i,1):".."===n?(e.splice(i,1),o++):o&&(e.splice(i,1),o--)}if(s)for(;o--;o)e.unshift("..");return e}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,n=function(e){return i.exec(e).slice(1)};function r(e,s){if(e.filter)return e.filter(s);for(var o=[],i=0;i<e.length;i++)s(e[i],i,e)&&o.push(e[i]);return o}s.resolve=function(){for(var s="",i=!1,n=arguments.length-1;n>=-1&&!i;n--){var d=n>=0?arguments[n]:e.cwd();if("string"!=typeof d)throw new TypeError("Arguments to path.resolve must be strings");d&&(s=d+"/"+s,i="/"===d.charAt(0))}return(i?"/":"")+(s=o(r(s.split("/"),function(e){return!!e}),!i).join("/"))||"."},s.normalize=function(e){var i=s.isAbsolute(e),n="/"===d(e,-1);return(e=o(r(e.split("/"),function(e){return!!e}),!i).join("/"))||i||(e="."),e&&n&&(e+="/"),(i?"/":"")+e},s.isAbsolute=function(e){return"/"===e.charAt(0)},s.join=function(){var e=Array.prototype.slice.call(arguments,0);return s.normalize(r(e,function(e,s){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},s.relative=function(e,o){function i(e){for(var s=0;s<e.length&&""===e[s];s++);for(var o=e.length-1;o>=0&&""===e[o];o--);return s>o?[]:e.slice(s,o-s+1)}e=s.resolve(e).substr(1),o=s.resolve(o).substr(1);for(var n=i(e.split("/")),r=i(o.split("/")),d=Math.min(n.length,r.length),t=d,a=0;a<d;a++)if(n[a]!==r[a]){t=a;break}var u=[];for(a=t;a<n.length;a++)u.push("..");return(u=u.concat(r.slice(t))).join("/")},s.sep="/",s.delimiter=":",s.dirname=function(e){var s=n(e),o=s[0],i=s[1];return o||i?(i&&(i=i.substr(0,i.length-1)),o+i):"."},s.basename=function(e,s){var o=n(e)[2];return s&&o.substr(-1*s.length)===s&&(o=o.substr(0,o.length-s.length)),o},s.extname=function(e){return n(e)[3]};var d="b"==="ab".substr(-1)?function(e,s,o){return e.substr(s,o)}:function(e,s,o){return s<0&&(s=e.length+s),e.substr(s,o)}}).call(this,o("./node_modules/process/browser.js"))},"./node_modules/prop-types/factoryWithThrowingShims.js":function(e,s,o){"use strict";var i=o("./node_modules/fbjs/lib/emptyFunction.js"),n=o("./node_modules/fbjs/lib/invariant.js");e.exports=function(){function e(){n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function s(){return e}e.isRequired=e;var o={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s};return o.checkPropTypes=i,o.PropTypes=o,o}},"./node_modules/prop-types/index.js":function(e,s,o){e.exports=o("./node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/ua-parser-js/src/ua-parser.js":function(e,s,o){var i;!function(n,r){"use strict";var d="model",t="name",a="type",u="vendor",l="version",c="mobile",f="tablet",m={extend:function(e,s){var o={};for(var i in e)s[i]&&s[i].length%2==0?o[i]=s[i].concat(e[i]):o[i]=e[i];return o},has:function(e,s){return"string"==typeof e&&-1!==s.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()},major:function(e){return"string"==typeof e?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0},trim:function(e){return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}},h={rgx:function(e,s){for(var o,i,n,r,d,t,a=0;a<s.length&&!d;){var u=s[a],l=s[a+1];for(o=i=0;o<u.length&&!d;)if(d=u[o++].exec(e))for(n=0;n<l.length;n++)t=d[++i],"object"==typeof(r=l[n])&&r.length>0?2==r.length?"function"==typeof r[1]?this[r[0]]=r[1].call(this,t):this[r[0]]=r[1]:3==r.length?"function"!=typeof r[1]||r[1].exec&&r[1].test?this[r[0]]=t?t.replace(r[1],r[2]):void 0:this[r[0]]=t?r[1].call(this,t,r[2]):void 0:4==r.length&&(this[r[0]]=t?r[3].call(this,t.replace(r[1],r[2])):void 0):this[r]=t||void 0;a+=2}},str:function(e,s){for(var o in s)if("object"==typeof s[o]&&s[o].length>0){for(var i=0;i<s[o].length;i++)if(m.has(s[o][i],e))return"?"===o?void 0:o}else if(m.has(s[o],e))return"?"===o?void 0:o;return e}},p={browser:{oldsafari:{version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{amazon:{model:{"Fire Phone":["SD","KF"]}},sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"}}}},w={browser:[[/(opera\smini)\/([\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,/(opera).+version\/([\w\.]+)/i,/(opera)[\/\s]+([\w\.]+)/i],[t,l],[/(opios)[\/\s]+([\w\.]+)/i],[[t,"Opera Mini"],l],[/\s(opr)\/([\w\.]+)/i],[[t,"Opera"],l],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,/(?:ms|\()(ie)\s([\w\.]+)/i,/(rekonq)\/([\w\.]*)/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],[t,l],[/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],[[t,"IE"],l],[/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],[[t,"Edge"],l],[/(yabrowser)\/([\w\.]+)/i],[[t,"Yandex"],l],[/(puffin)\/([\w\.]+)/i],[[t,"Puffin"],l],[/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],[[t,"UCBrowser"],l],[/(comodo_dragon)\/([\w\.]+)/i],[[t,/_/g," "],l],[/(micromessenger)\/([\w\.]+)/i],[[t,"WeChat"],l],[/(qqbrowserlite)\/([\w\.]+)/i],[t,l],[/(QQ)\/([\d\.]+)/i],[t,l],[/m?(qqbrowser)[\/\s]?([\w\.]+)/i],[t,l],[/(BIDUBrowser)[\/\s]?([\w\.]+)/i],[t,l],[/(2345Explorer)[\/\s]?([\w\.]+)/i],[t,l],[/(MetaSr)[\/\s]?([\w\.]+)/i],[t],[/(LBBROWSER)/i],[t],[/xiaomi\/miuibrowser\/([\w\.]+)/i],[l,[t,"MIUI Browser"]],[/;fbav\/([\w\.]+);/i],[l,[t,"Facebook"]],[/headlesschrome(?:\/([\w\.]+)|\s)/i],[l,[t,"Chrome Headless"]],[/\swv\).+(chrome)\/([\w\.]+)/i],[[t,/(.+)/,"$1 WebView"],l],[/((?:oculus|samsung)browser)\/([\w\.]+)/i],[[t,/(.+(?:g|us))(.+)/,"$1 $2"],l],[/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],[l,[t,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],[t,l],[/(dolfin)\/([\w\.]+)/i],[[t,"Dolphin"],l],[/((?:android.+)crmo|crios)\/([\w\.]+)/i],[[t,"Chrome"],l],[/(coast)\/([\w\.]+)/i],[[t,"Opera Coast"],l],[/fxios\/([\w\.-]+)/i],[l,[t,"Firefox"]],[/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],[l,[t,"Mobile Safari"]],[/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],[l,t],[/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[[t,"GSA"],l],[/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],[t,[l,h.str,p.browser.oldsafari.version]],[/(konqueror)\/([\w\.]+)/i,/(webkit|khtml)\/([\w\.]+)/i],[t,l],[/(navigator|netscape)\/([\w\.-]+)/i],[[t,"Netscape"],l],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,/(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,/(links)\s\(([\w\.]+)/i,/(gobrowser)\/?([\w\.]*)/i,/(ice\s?browser)\/v?([\w\._]+)/i,/(mosaic)[\/\s]([\w\.]+)/i],[t,l]],cpu:[[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],[["architecture","amd64"]],[/(ia32(?=;))/i],[["architecture",m.lowerize]],[/((?:i[346]|x)86)[;\)]/i],[["architecture","ia32"]],[/windows\s(ce|mobile);\sppc;/i],[["architecture","arm"]],[/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],[["architecture",/ower/,"",m.lowerize]],[/(sun4\w)[;\)]/i],[["architecture","sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],[["architecture",m.lowerize]]],device:[[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],[d,u,[a,f]],[/applecoremedia\/[\w\.]+ \((ipad)/],[d,[u,"Apple"],[a,f]],[/(apple\s{0,1}tv)/i],[[d,"Apple TV"],[u,"Apple"]],[/(archos)\s(gamepad2?)/i,/(hp).+(touchpad)/i,/(hp).+(tablet)/i,/(kindle)\/([\w\.]+)/i,/\s(nook)[\w\s]+build\/(\w+)/i,/(dell)\s(strea[kpr\s\d]*[\dko])/i],[u,d,[a,f]],[/(kf[A-z]+)\sbuild\/.+silk\//i],[d,[u,"Amazon"],[a,f]],[/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],[[d,h.str,p.device.amazon.model],[u,"Amazon"],[a,c]],[/\((ip[honed|\s\w*]+);.+(apple)/i],[d,u,[a,c]],[/\((ip[honed|\s\w*]+);/i],[d,[u,"Apple"],[a,c]],[/(blackberry)[\s-]?(\w+)/i,/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,/(hp)\s([\w\s]+\w)/i,/(asus)-?(\w+)/i],[u,d,[a,c]],[/\(bb10;\s(\w+)/i],[d,[u,"BlackBerry"],[a,c]],[/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],[d,[u,"Asus"],[a,f]],[/(sony)\s(tablet\s[ps])\sbuild\//i,/(sony)?(?:sgp.+)\sbuild\//i],[[u,"Sony"],[d,"Xperia Tablet"],[a,f]],[/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],[d,[u,"Sony"],[a,c]],[/\s(ouya)\s/i,/(nintendo)\s([wids3u]+)/i],[u,d,[a,"console"]],[/android.+;\s(shield)\sbuild/i],[d,[u,"Nvidia"],[a,"console"]],[/(playstation\s[34portablevi]+)/i],[d,[u,"Sony"],[a,"console"]],[/(sprint\s(\w+))/i],[[u,h.str,p.device.sprint.vendor],[d,h.str,p.device.sprint.model],[a,c]],[/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],[u,d,[a,f]],[/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,/(zte)-(\w*)/i,/(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],[u,[d,/_/g," "],[a,c]],[/(nexus\s9)/i],[d,[u,"HTC"],[a,f]],[/d\/huawei([\w\s-]+)[;\)]/i,/(nexus\s6p)/i],[d,[u,"Huawei"],[a,c]],[/(microsoft);\s(lumia[\s\w]+)/i],[u,d,[a,c]],[/[\s\(;](xbox(?:\sone)?)[\s\);]/i],[d,[u,"Microsoft"],[a,"console"]],[/(kin\.[onetw]{3})/i],[[d,/\./g," "],[u,"Microsoft"],[a,c]],[/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,/mot[\s-]?(\w*)/i,/(XT\d{3,4}) build\//i,/(nexus\s6)/i],[d,[u,"Motorola"],[a,c]],[/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],[d,[u,"Motorola"],[a,f]],[/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],[[u,m.trim],[d,m.trim],[a,"smarttv"]],[/hbbtv.+maple;(\d+)/i],[[d,/^/,"SmartTV"],[u,"Samsung"],[a,"smarttv"]],[/\(dtv[\);].+(aquos)/i],[d,[u,"Sharp"],[a,"smarttv"]],[/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,/((SM-T\w+))/i],[[u,"Samsung"],d,[a,f]],[/smart-tv.+(samsung)/i],[u,[a,"smarttv"],d],[/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,/(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,/sec-((sgh\w+))/i],[[u,"Samsung"],d,[a,c]],[/sie-(\w*)/i],[d,[u,"Siemens"],[a,c]],[/(maemo|nokia).*(n900|lumia\s\d+)/i,/(nokia)[\s_-]?([\w-]*)/i],[[u,"Nokia"],d,[a,c]],[/android\s3\.[\s\w;-]{10}(a\d{3})/i],[d,[u,"Acer"],[a,f]],[/android.+([vl]k\-?\d{3})\s+build/i],[d,[u,"LG"],[a,f]],[/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],[[u,"LG"],d,[a,f]],[/(lg) netcast\.tv/i],[u,d,[a,"smarttv"]],[/(nexus\s[45])/i,/lg[e;\s\/-]+(\w*)/i,/android.+lg(\-?[\d\w]+)\s+build/i],[d,[u,"LG"],[a,c]],[/android.+(ideatab[a-z0-9\-\s]+)/i],[d,[u,"Lenovo"],[a,f]],[/linux;.+((jolla));/i],[u,d,[a,c]],[/((pebble))app\/[\d\.]+\s/i],[u,d,[a,"wearable"]],[/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],[u,d,[a,c]],[/crkey/i],[[d,"Chromecast"],[u,"Google"]],[/android.+;\s(glass)\s\d/i],[d,[u,"Google"],[a,"wearable"]],[/android.+;\s(pixel c)\s/i],[d,[u,"Google"],[a,f]],[/android.+;\s(pixel xl|pixel)\s/i],[d,[u,"Google"],[a,c]],[/android.+;\s(\w+)\s+build\/hm\1/i,/android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,/android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,/android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],[[d,/_/g," "],[u,"Xiaomi"],[a,c]],[/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],[[d,/_/g," "],[u,"Xiaomi"],[a,f]],[/android.+;\s(m[1-5]\snote)\sbuild/i],[d,[u,"Meizu"],[a,f]],[/android.+a000(1)\s+build/i,/android.+oneplus\s(a\d{4})\s+build/i],[d,[u,"OnePlus"],[a,c]],[/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],[d,[u,"RCA"],[a,f]],[/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],[d,[u,"Dell"],[a,f]],[/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],[d,[u,"Verizon"],[a,f]],[/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],[[u,"Barnes & Noble"],d,[a,f]],[/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],[d,[u,"NuVision"],[a,f]],[/android.+;\s(k88)\sbuild/i],[d,[u,"ZTE"],[a,f]],[/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],[d,[u,"Swiss"],[a,c]],[/android.+[;\/]\s*(zur\d{3})\s+build/i],[d,[u,"Swiss"],[a,f]],[/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],[d,[u,"Zeki"],[a,f]],[/(android).+[;\/]\s+([YR]\d{2})\s+build/i,/android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],[[u,"Dragon Touch"],d,[a,f]],[/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],[d,[u,"Insignia"],[a,f]],[/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],[d,[u,"NextBook"],[a,f]],[/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],[[u,"Voice"],d,[a,c]],[/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],[[u,"LvTel"],d,[a,c]],[/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],[d,[u,"Envizen"],[a,f]],[/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],[u,d,[a,f]],[/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],[d,[u,"MachSpeed"],[a,f]],[/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],[u,d,[a,f]],[/android.+[;\/]\s*TU_(1491)\s+build/i],[d,[u,"Rotor"],[a,f]],[/android.+(KS(.+))\s+build/i],[d,[u,"Amazon"],[a,f]],[/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],[u,d,[a,f]],[/\s(tablet|tab)[;\/]/i,/\s(mobile)(?:[;\/]|\ssafari)/i],[[a,m.lowerize],u,d],[/(android[\w\.\s\-]{0,9});.+build/i],[d,[u,"Generic"]]],engine:[[/windows.+\sedge\/([\w\.]+)/i],[l,[t,"EdgeHTML"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[t,l],[/rv\:([\w\.]{1,9}).+(gecko)/i],[l,t]],os:[[/microsoft\s(windows)\s(vista|xp)/i],[t,l],[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,/(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[t,[l,h.str,p.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[t,"Windows"],[l,h.str,p.os.windows.version]],[/\((bb)(10);/i],[[t,"BlackBerry"],l],[/(blackberry)\w*\/?([\w\.]*)/i,/(tizen)[\/\s]([\w\.]+)/i,/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,/linux;.+(sailfish);/i],[t,l],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],[[t,"Symbian"],l],[/\((series40);/i],[t],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[t,"Firefox OS"],l],[/(nintendo|playstation)\s([wids34portablevu]+)/i,/(mint)[\/\s\(]?(\w*)/i,/(mageia|vectorlinux)[;\s]/i,/(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,/(hurd|linux)\s?([\w\.]*)/i,/(gnu)\s?([\w\.]*)/i],[t,l],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[t,"Chromium OS"],l],[/(sunos)\s?([\w\.\d]*)/i],[[t,"Solaris"],l],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],[t,l],[/(haiku)\s(\w+)/i],[t,l],[/cfnetwork\/.+darwin/i,/ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],[[l,/_/g,"."],[t,"iOS"]],[/(mac\sos\sx)\s?([\w\s\.]*)/i,/(macintosh|mac(?=_powerpc)\s)/i],[[t,"Mac OS"],[l,/_/g,"."]],[/((?:open)?solaris)[\/\s-]?([\w\.]*)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,/(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,/(unix)\s?([\w\.]*)/i],[t,l]]},b=function(e,s){if("object"==typeof e&&(s=e,e=void 0),!(this instanceof b))return new b(e,s).getResult();var o=e||(n&&n.navigator&&n.navigator.userAgent?n.navigator.userAgent:""),i=s?m.extend(w,s):w;return this.getBrowser=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,o,i.browser),e.major=m.major(e.version),e},this.getCPU=function(){var e={architecture:void 0};return h.rgx.call(e,o,i.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return h.rgx.call(e,o,i.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,o,i.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return h.rgx.call(e,o,i.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=e,this},this};b.VERSION="0.7.18",b.BROWSER={NAME:t,MAJOR:"major",VERSION:l},b.CPU={ARCHITECTURE:"architecture"},b.DEVICE={MODEL:d,VENDOR:u,TYPE:a,CONSOLE:"console",MOBILE:c,SMARTTV:"smarttv",TABLET:f,WEARABLE:"wearable",EMBEDDED:"embedded"},b.ENGINE={NAME:t,VERSION:l},b.OS={NAME:t,VERSION:l},void 0!==s?(void 0!==e&&e.exports&&(s=e.exports=b),s.UAParser=b):o("./node_modules/webpack/buildin/amd-options.js")?void 0===(i=function(){return b}.call(s,o,s,e))||(e.exports=i):n&&(n.UAParser=b);var v=n&&(n.jQuery||n.Zepto);if(void 0!==v){var _=new b;v.ua=_.getResult(),v.ua.get=function(){return _.getUA()},v.ua.set=function(e){_.setUA(e);var s=_.getResult();for(var o in s)v.ua[o]=s[o]}}}("object"==typeof window?window:this)},"./node_modules/webpack/buildin/amd-options.js":function(e,s){(function(s){e.exports=s}).call(this,{})}}]);
//# sourceMappingURL=vendors~Client~Governance~Reddit.f0c54af17c78c7813e02.js.map

}
/*
     FILE ARCHIVED ON 00:14:44 Feb 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:49:12 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.142
  exclusion.robots.policy: 0.122
  cdx.remote: 0.209
  esindex: 0.018
  LoadShardBlock: 184.386 (6)
  PetaboxLoader3.resolve: 226.943 (4)
  PetaboxLoader3.datanode: 90.104 (8)
  load_resource: 165.776 (2)
*/