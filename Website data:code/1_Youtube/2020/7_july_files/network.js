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

(function(){/*

SPF
(c) 2012-2017 Google Inc.
https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function l(b,a,c){var e=Array.prototype.slice.call(arguments,2);return function(){var d=e.slice();d.push.apply(d,arguments);return b.apply(a,d)}}function aa(b,a){if(b){var c=Array.prototype.slice.call(arguments,1);try{return b.apply(null,c)}catch(e){return e}}}var n=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function p(b,a){if(b.forEach)b.forEach(a,void 0);else for(var c=0,e=b.length;c<e;c++)c in b&&a.call(void 0,b[c],c,b)}function r(b,a){if(b.some)return b.some(a,void 0);for(var c=0,e=b.length;c<e;c++)if(c in b&&a.call(void 0,b[c],c,b))return!0;return!1}function u(b){return"[object Array]"==Object.prototype.toString.call(b)?b:[b]};function v(b,a){return w[b]=a}var w=window._spf_state||{};window._spf_state=w;var x={};"config"in w||v("config",x);x=w.config;function y(b){var a=z();b in a&&delete a[b]}function ba(){var b=z();for(a in b)B(b[a])||delete b[a];b=z();var a=parseInt(x["cache-max"],10);a=isNaN(a)?Infinity:a;a=Object.keys(b).length-a;if(!(0>=a))for(var c=0;c<a;c++){var e=Infinity,d;for(d in b)if(b[d].count<e){var f=d;e=b[d].count}delete b[f]}}function B(b){if(!(b&&"data"in b))return!1;var a=b.life;a=isNaN(a)?Infinity:a;b=b.time;return n()-b<a}function C(b){var a=parseInt(w["cache-counter"],10)||0;a++;v("cache-counter",a);b.count=a}
function z(){return"cache-storage"in w?w["cache-storage"]:v("cache-storage",{})};function D(b,a){var c=b.length-a.length;return 0<=c&&b.indexOf(a,c)==c}var E=String.prototype.trim?function(b){return b.trim()}:function(b){return b.replace(/^\s+|\s+$/g,"")};function F(b,a){b=b.split(a);var c=1==b.length;return[b[0],c?"":a,c?"":b.slice(1).join(a)]};function G(b){b.data&&"[object String]"==Object.prototype.toString.call(b.data)&&0==b.data.lastIndexOf("spf:",0)&&H(b.data.substring(4))}function H(b){var a=I[b];a&&(delete I[b],a())}function J(b){window.addEventListener?window.addEventListener("message",b,!1):window.attachEvent&&window.attachEvent("onmessage",b)}function K(b){window.removeEventListener?window.removeEventListener("message",b,!1):window.detachEvent&&window.detachEvent("onmessage",b)}
var L=function(){function b(){a=!1}if(!window.postMessage)return!1;var a=!0;J(b);window.postMessage("","*");K(b);return a}(),I={};"async-defers"in w||v("async-defers",I);I=w["async-defers"];L&&("async-listener"in w&&K(w["async-listener"]),J(G),v("async-listener",G));var M={};"ps-s"in w||v("ps-s",M);M=w["ps-s"];function N(b){var a=document.createElement("a");a.href=b;a.href=a.href;b={href:a.href,protocol:a.protocol,host:a.host,hostname:a.hostname,port:a.port,pathname:a.pathname,search:a.search,hash:a.hash,username:a.username,password:a.password};b.origin=b.protocol+"//"+b.host;b.pathname&&"/"==b.pathname[0]||(b.pathname="/"+b.pathname);return b}function O(b){b=N(b);return F(b.href,"#")[0]};var P={},Q={},R={};"rsrc-s"in w||v("rsrc-s",P);P=w["rsrc-s"];"rsrc-n"in w||v("rsrc-n",Q);Q=w["rsrc-n"];"rsrc-u"in w||v("rsrc-u",R);R=w["rsrc-u"];var S={};"js-d"in w||v("js-d",S);S=w["js-d"];var T={};"js-u"in w||v("js-u",T);T=w["js-u"];function U(b,a,c){if(a){a=[];var e=0;c&&(b+="\r\n");var d=b.indexOf("[\r\n",e);for(-1<d&&(e=d+3);-1<(d=b.indexOf(",\r\n",e));){var f=E(b.substring(e,d));e=d+3;f&&a.push(JSON.parse(f))}d=b.indexOf("]\r\n",e);-1<d&&(f=E(b.substring(e,d)),e=d+3,f&&a.push(JSON.parse(f)));f="";b.length>e&&(f=b.substring(e),c&&D(f,"\r\n")&&(f=f.substring(0,f.length-2)));a=V(a);return{h:a,a:f}}b=JSON.parse(b);a=V(u(b));return{h:a,a:""}}
function V(b){p(u(b),function(a){if(a){a.head&&(a.head=W(a.head));if(a.body)for(var c in a.body)a.body[c]=W(a.body[c]);a.foot&&(a.foot=W(a.foot))}});return b}
function W(b){var a=new ca;if(!b)return a;if("[object String]"!=Object.prototype.toString.call(b))return b.scripts&&p(b.scripts,function(c){a.scripts.push({url:c.url||"",text:c.text||"",name:c.name||"",async:c.async||!1})}),b.styles&&p(b.styles,function(c){a.styles.push({url:c.url||"",text:c.text||"",name:c.name||""})}),b.links&&p(b.links,function(c){"spf-preconnect"==c.rel&&a.links.push({url:c.url||"",rel:c.rel||""})}),a.html=b.html||"",a;b=b.replace(da,function(c,e,d,f){if("script"==e){e=(e=d.match(X))?
e[1]:"";var h=d.match(ea);h=h?h[1]:"";var k=fa.test(d);d=ha.exec(d);return(d=!d||-1!=d[1].indexOf("/javascript")||-1!=d[1].indexOf("/x-javascript")||-1!=d[1].indexOf("/ecmascript"))?(a.scripts.push({url:h,text:f,name:e,async:k}),""):c}return"style"==e&&(e=(e=d.match(X))?e[1]:"",d=ha.exec(d),d=!d||-1!=d[1].indexOf("text/css"))?(a.styles.push({url:"",text:f,name:e}),""):c});b=b.replace(ia,function(c,e){var d=e.match(ja);d=d?d[1]:"";return"stylesheet"==d?(d=(d=e.match(X))?d[1]:"",e=(e=e.match(ka))?e[1]:
"",a.styles.push({url:e,text:"",name:d}),""):"spf-preconnect"==d?(e=(e=e.match(ka))?e[1]:"",a.links.push({url:e,rel:d}),""):c});a.html=b;return a}function ca(){this.html="";this.scripts=[];this.styles=[];this.links=[]}(function(){var b=document.createElement("div");return"transition"in b.style?!0:r(["webkit","Moz","Ms","O","Khtml"],function(a){return a+"Transition"in b.style})})();
var ia=/\x3clink([\s\S]*?)\x3e/ig,da=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,fa=/(?:\s|^)async(?:\s|=|$)/i,ka=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,X=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,ja=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,ea=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,ha=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;/*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
function la(b,a,c,e){var d=e||{},f=!1,h=0,k,g=new XMLHttpRequest;g.open(b,a,!0);g.timing={};var m=g.abort;g.abort=function(){clearTimeout(k);g.onreadystatechange=null;m.call(g)};g.onreadystatechange=function(){var q=g.timing;if(2==g.readyState){q.responseStart=q.responseStart||n();if("json"==g.responseType)f=!1;else if(x["assume-all-json-requests-chunked"]||-1<(g.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{q=g.getResponseHeader("X-Firefox-Spdy");var A=window.chrome&&
chrome.loadTimes&&chrome.loadTimes();A=A&&A.wasFetchedViaSpdy;f=!(!q&&!A)}d.l&&d.l(g)}else 3==g.readyState?f&&d.g&&(q=g.responseText.substring(h),h=g.responseText.length,d.g(g,q)):4==g.readyState&&(q.responseEnd=q.responseEnd||n(),window.performance&&window.performance.getEntriesByName&&(g.resourceTiming=window.performance.getEntriesByName(a).pop()),f&&d.g&&g.responseText.length>h&&(q=g.responseText.substring(h),h=g.responseText.length,d.g(g,q)),clearTimeout(k),d.j&&d.j(g))};"responseType"in g&&"json"==
d.responseType&&(g.responseType="json");d.withCredentials&&(g.withCredentials=d.withCredentials);e="FormData"in window&&c instanceof FormData;b="POST"==b&&!e;if(d.headers)for(var t in d.headers)g.setRequestHeader(t,d.headers[t]),"content-type"==t.toLowerCase()&&(b=!1);b&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<d.u&&(k=setTimeout(function(){g.abort();d.o&&d.o(g)},d.u));g.timing.fetchStart=n();g.send(c);return g};function ma(b,a,c,e,d){var f=!1;c.responseStart=c.responseEnd=n();a.type&&0==a.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,x["cache-unified"]||(y(e),f=!0));a.c&&"multipart"==d.type&&p(d.parts,function(h){h.timing||(h.timing={});h.timing.spfCached=!!c.spfCached;h.timing.spfPrefetched=!!c.spfPrefetched;a.c(b,h)});na(b,a,c,d,f)}function oa(b,a,c){b=c.getResponseHeader("X-SPF-Response-Type")||"";a.i=-1!=b.toLowerCase().indexOf("multipart")}
function pa(b,a,c,e,d,f,h){if(e.i){f=e.a+f;try{var k=U(f,!0,h)}catch(g){d.abort();a.b&&a.b(b,g,d);return}a.c&&p(k.h,function(g){g.timing||(g.timing={});g.timing.spfCached=!!c.spfCached;g.timing.spfPrefetched=!!c.spfPrefetched;a.c(b,g)});e.f=e.f.concat(k.h);e.a=k.a}}
function qa(b,a,c,e,d){if(d.timing)for(var f in d.timing)c[f]=d.timing[f];if(d.resourceTiming)if("load"==a.type)for(var h in d.resourceTiming)c[h]=d.resourceTiming[h];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+d.resourceTiming.startTime>=c.startTime))for(var k in d.resourceTiming)h=d.resourceTiming[k],void 0!==h&&(D(k,"Start")||D(k,"End")||"startTime"==k)&&(c[k]=f+Math.round(h));"load"!=a.type&&(c.navigationStart=c.startTime);e.f.length&&
(e.a=E(e.a),e.a&&pa(b,a,c,e,d,"",!0));if("json"==d.responseType){if(!d.response){a.b&&a.b(b,Error("JSON response parsing failed"),d);return}var g=V(u(d.response))}else try{g=U(d.responseText).h}catch(t){a.b&&a.b(b,t,d);return}if(a.c&&1<g.length)for(e=e.f.length;e<g.length;e++)d=g[e],d.timing||(d.timing={}),d.timing.spfCached=!!c.spfCached,d.timing.spfPrefetched=!!c.spfPrefetched,a.c(b,d);if(1<g.length){var m;p(g,function(t){t.cacheType&&(m=t.cacheType)});g={parts:g,type:"multipart"};m&&(g.cacheType=
m)}else g=1==g.length?g[0]:{};na(b,a,c,g,!0)}function na(b,a,c,e,d){if(d&&"POST"!=a.method&&(d=ra(b,a.current,e.cacheType,a.type,!0))){e.cacheKey=d;var f={response:e,type:a.type||""},h=parseInt(x["cache-lifetime"],10),k=parseInt(x["cache-max"],10);0>=h||0>=k||(k=z(),f={data:f,life:h,time:n(),count:0},C(f),k[d]=f,setTimeout(ba,1E3))}e.timing=c;a.m&&a.m(b,e)}
function ra(b,a,c,e,d){b=O(b);var f;x["cache-unified"]?f=b:"navigate-back"==e||"navigate-forward"==e?f="history "+b:"navigate"==e?f=(d?"history ":"prefetch ")+b:"prefetch"==e&&(f=d?"prefetch "+b:"");a&&"url"==c?f+=" previous "+a:a&&"path"==c&&(f+=" previous "+N(a).pathname);return f||""}
function sa(b,a){var c=[];a&&(c.push(b+" previous "+a),c.push(b+" previous "+N(a).pathname));c.push(b);var e=null;r(c,function(d){a:{var f=z();if(d in f){f=f[d];if(B(f)){C(f);f=f.data;break a}y(d)}f=void 0}f&&(e={key:d,response:f.response,type:f.type});return!!f});return e}function ta(){this.i=!1;this.a="";this.f=[]};function Y(b,a){if(b){var c=Array.prototype.slice.call(arguments);c[0]=b;c=aa.apply(null,c)}return!1!==c};function ua(b,a,c,e){Y((b||{}).onError,{url:a,err:c,xhr:e})}function va(b,a,c){Y((b||{}).onPartProcess,{url:a,part:c})&&Y((b||{}).onPartDone,{url:a,part:c})}function wa(b,a,c){var e;(e="multipart"==c.type)||(e=Y((b||{}).onProcess,{url:a,response:c}));e&&Y((b||{}).onDone,{url:a,response:c})}
var xa={request:function(b,a){a=a||{};a={method:a.method,headers:a.experimental_headers,c:l(va,null,a),b:l(ua,null,a),m:l(wa,null,a),v:a.postData,type:"",current:window.location.href,s:window.location.href};a.method=((a.method||"GET")+"").toUpperCase();a.type=a.type||"request";var c=b,e=x["url-identifier"]||"";if(e){e=e.replace("__type__",a.type||"");var d=F(c,"#"),f=F(d[0],"?");c=f[0];var h=f[1];f=f[2];var k=d[1];d=d[2];if(0==e.lastIndexOf("?",0))h&&(e=e.replace("?","&")),f+=e;else{if(0==e.lastIndexOf(".",
0))if(D(c,"/"))e="index"+e;else{var g=c.lastIndexOf(".");-1<g&&(c=c.substring(0,g))}else D(c,"/")&&0==e.lastIndexOf("/",0)&&(e=e.substring(1));c+=e}c=c+h+f+k+d}e=O(c);c={};c.spfUrl=e;c.startTime=n();c.fetchStart=c.startTime;h=ra(b,a.current,null,a.type,!1);h=sa(h,a.current);c.spfPrefetched=!!h&&"prefetch"==h.type;c.spfCached=!!h;if(h){b=l(ma,null,b,a,c,h.key,h.response);a=window._spf_state=window._spf_state||{};var m=parseInt(a.uid,10)||0;m++;a=a.uid=m;I[a]=b;L?window.postMessage("spf:"+a,"*"):window.setTimeout(l(H,
null,a),0);b=null}else{h={};if(f=x["request-headers"])for(m in f)k=f[m],h[m]=null==k?"":String(k);if(a.headers)for(m in a.headers)k=a.headers[m],h[m]=null==k?"":String(k);null!=a.s&&(h["X-SPF-Referer"]=a.s);null!=a.current&&(h["X-SPF-Previous"]=a.current);if(m=x["advanced-header-identifier"])h["X-SPF-Request"]=m.replace("__type__",a.type),h.Accept="application/json";m=new ta;f=l(qa,null,b,a,c,m);b={headers:h,u:x["request-timeout"],l:l(oa,null,b,m),g:l(pa,null,b,a,c,m),j:f,o:f};a.withCredentials&&
(b.withCredentials=a.withCredentials);x["advanced-response-type-json"]&&(b.responseType="json");b="POST"==a.method?la("POST",e,a.v,b):la("GET",e,null,b)}return b}},ya=this.spf=this.spf||{},Z;for(Z in xa)ya[Z]=xa[Z];}).call(this);


}
/*
     FILE ARCHIVED ON 00:40:09 Jul 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:56:21 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.144
  exclusion.robots.policy: 0.13
  cdx.remote: 0.172
  esindex: 0.011
  LoadShardBlock: 102.434 (6)
  PetaboxLoader3.datanode: 103.482 (8)
  load_resource: 71.889 (2)
  PetaboxLoader3.resolve: 53.293 (2)
*/