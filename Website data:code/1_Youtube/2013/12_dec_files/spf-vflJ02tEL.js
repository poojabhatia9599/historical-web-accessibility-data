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

(function(){function l(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function m(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function n(){return(new Date).getTime()}function aa(a){var b=(parseInt(p.uid,10)||0)+1;return a["spf-key"]||(a["spf-key"]=""+q("uid",b))}
var r={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"navigate-requested-callback":null,"navigate-part-received-callback":null,"navigate-part-processed-callback":null,"navigate-received-callback":null,"navigate-processed-callback":null,"navigate-error-callback":null,"prefetch-on-mousedown":!1,"process-async":!1,"request-timeout":0,"script-loading-callback":null,
"style-loading-callback":null,"url-identifier":"?spf=__type__"};function s(a){return t()[a]}function t(a){return!a&&"config"in p?p.config:q("config",a||{})}function q(a,b){return p[a]=b}var p=window._spf_state||{};window._spf_state=p;function u(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function v(a,b){if(a.classList)return a.classList.contains(b);for(var c=u(a),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function w(a,b){a.classList?a.classList.add(b):v(a,b)||(a.className+=" "+b)}function y(a,b){if(a.classList)a.classList.remove(b);else{for(var c=u(a),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ")}};function ba(a){var b,c=a.parentNode;if(c&&11!=c.nodeType)if(a.removeNode)a.removeNode(!1);else{for(;b=a.firstChild;)c.insertBefore(b,a);c.removeChild(a)}}function z(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function ca(a,b){var c=a||"",d=document,e=d.createElement("iframe");e.id=c;e.src='javascript:""';e.style.display="none";b&&(e.onload=l(b,null,e));d.body.appendChild(e);return e};function A(a,b,c){da(!0,a,b,c)}function da(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=n();q("history-timestamp",e);c["spf-timestamp"]=e;a?window.history.replaceState(c,"",b):window.history.pushState(c,"",b);q("history-url",b);d&&(a=p["history-callback"])&&a(b,c)}}
function ea(a){var b=window.location.href;if(a.state){a=a.state;var c=a["spf-timestamp"];b==p["history-url"]?(q("history-timestamp",c),window.history.replaceState(a,"",b)):(a["spf-back"]=c<parseInt(p["history-timestamp"],10),q("history-timestamp",c),q("history-url",b),(c=p["history-callback"])&&c(b,a))}};var B=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function C(a,b,c){var d=D[a];return a&&b?(d||(d=D[a]={items:[],j:0,m:1}),d.items.push({D:b,C:c||0})):d&&d.items.length||0}function E(a,b){var c=D[a];if(c){var d=0<c.j;0<c.m&&(b||!d)&&fa(a,b)}}function F(a){(a=D[a])&&a.m--}function G(a,b){var c=D[a];c&&(c.m++,E(a,b))}function ga(a){var b=D[a];b&&(clearTimeout(b.j),delete D[a])}
function fa(a,b){var c=D[a];if(c&&(clearTimeout(c.j),c.j=0,0<c.m)){var d=c.items.shift();if(d){var e=l(fa,null,a,b),e=l(function(a,b){a();b()},null,d.D,e);b?e():c.j=setTimeout(e,d.C)}}}var D={};function H(a){var b=document.createElement("a");b.href=a;return b.href};function ha(a){var b=I();a in b&&delete b[a]}function ia(){var a=I(),b;for(b in a)ja(a[b])||delete a[b]}function ja(a){if(!(a&&"data"in a))return!1;var b=a.life,b=isNaN(b)?Infinity:b,c=n()-a.time,d=parseInt(s("cache-max"),10),d=isNaN(d)?Infinity:d;a=(parseInt(p["cache-counter"],10)||0)-a.count;return c<b&&a<d}function I(){return"cache-storage"in p?p["cache-storage"]:q("cache-storage",{})};function ka(a,b,c,d){var e=d||{},f=!1,g=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var x=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;x.call(k)};k.onreadystatechange=function(){var a=k.timing;2==k.readyState?(a.responseStart=a.responseStart||n(),f=-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"),e.u&&e.u(k)):3==k.readyState?f&&e.k&&(a=k.responseText.substring(g),g=k.responseText.length,e.k(k,a)):4==k.readyState&&(a.responseEnd=a.responseEnd||
n(),f&&e.k&&k.responseText.length>g&&(a=k.responseText.substring(g),g=k.responseText.length,e.k(k,a)),clearTimeout(h),e.t&&e.t(k))};a="POST"==a;if(e.headers)for(var M in e.headers)k.setRequestHeader(M,e.headers[M]),"content-type"==M.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.w&&(h=setTimeout(function(){k.abort();e.v&&e.v(k)},e.w));k.timing.fetchStart=n();k.send(c);return k};function J(a){return a.dataset?a.dataset.loaded:a.getAttribute("data-"+"loaded".replace(/([A-Z])/g,"-$1").toLowerCase())}function K(a){a.dataset?a.dataset.loaded="true":a.setAttribute("data-"+"loaded".replace(/([A-Z])/g,"-$1").toLowerCase(),"true")};function la(a,b){if(a&&b){var c=L();a in c||(c[a]=[]);c[a].push(b)}}function ma(a,b){var c=L();if(a in c)for(var d=Array.prototype.slice.call(arguments,1),e=0,f=c[a].length;e<f;e++)c[a][e]&&c[a][e].apply(null,d)}function N(a){var b=L();a?a in b&&delete b[a]:L({})}function L(a){return!a&&"pubsub-subs"in p?p["pubsub-subs"]:q("pubsub-subs",a||{})};function na(a){for(var b=document.querySelectorAll?document.querySelectorAll("js"==a?"script[src]":'link[rel~="stylesheet"]'):[],c=0,d=b.length;c<d;c++)if(!b[c].id){var e=O(a,"js"==a?b[c].src:b[c].href);b[c].id=e;K(b[c])}}
function oa(a,b,c,d){if("js"!=a&&"css"!=a||!b)return null;var e=O(a,b);d=d||"";var f=document.getElementById(e),g=f&&J(f),h=f&&!g;if(g)return c&&c(),f;c&&la(e,c);if(h)return f;c="js"==a;var k=d?document.querySelectorAll?document.querySelectorAll((c?"script":"link")+"."+d):[]:[];m(s(c?"script-loading-callback":"style-loading-callback"),b,d);return f=pa(a,b,e,d,function(){J(f)||(K(f),qa(k),ma(e),N(e))})}
function pa(a,b,c,d,e,f){if("js"!=a&&"css"!=a||!b)return null;var g=document.createElement("js"==a?"script":"link");g.id=c;g.className=d;"css"==a&&(g.rel="stylesheet");g.onload=function(){e&&setTimeout(e,0)};g.onreadystatechange=function(){switch(g.readyState){case "loaded":case "complete":g.onload()}};"js"==a?g.src=b:g.href=b;b=f||document;b=b.getElementsByTagName("head")[0]||b.body;"js"==a?b.insertBefore(g,b.firstChild):b.appendChild(g);return g}
function ra(a,b){if("js"==a||"css"==a){var c=O(a,b);(c=document.getElementById(c))&&qa([c])}}function qa(a){for(var b=0,c=a.length;b<c;b++)N(a[b].id),a[b].parentNode.removeChild(a[b])}function sa(a,b){if("js"==a||"css"==a){var c=O(a,b);N(c)}}
function ta(a,b){if("js"==a||"css"==a){var c=O(a,b),d=document.getElementById(c);if(!d){var e=a+"-prefetch",f=document.getElementById(e);if(f){if(d=f.contentWindow.document.getElementById(c))return}else f=ca(e,function(a){K(a);E(e,!0)});J(f)?ua(f,a,b,c):C(e,l(ua,null,f,a,b,c))}}}function ua(a,b,c,d){a=a.contentWindow.document;"js"==b?(va?(b=a.createElement("script"),b.src=c):(b=a.createElement("object"),b.data=c),b.id=d,a.body.appendChild(b)):pa(b,c,d,"",null,a)}
function O(a,b){for(var c=H(b).replace(/^[a-zA-Z]+:\/\//,"//"),d=0,e=0,f=c.length;e<f;++e)d=31*d+c.charCodeAt(e),d%=4294967296;return a+"-"+d}var va=-1!=navigator.userAgent.indexOf(" Trident/");function wa(a,b,c){return oa("js",a,b,c)}function xa(a){ta("js",a)}function P(a,b){if(0>=a.a.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.a.length){var e=a.a[c];if(e.url)wa(e.url,d,e.name);else if(e.text){var f=e.text,e=d;if(window.execScript)window.execScript(f,"JavaScript");else{var g=document.createElement("script");g.appendChild(document.createTextNode(f));f=document.getElementsByTagName("head")[0]||document.body;f.insertBefore(g,f.firstChild)}e&&e()}else d()}else b&&b()};d()}}
function ya(a){if(!(0>=a.a.length))for(var b=0,c=a.a.length;b<c;b++){var d=a.a[b];d.url&&xa(d.url)}}function Q(a){var b=new za;if(!a)return b;a=a.replace(Aa,function(a,d,e){a=(a=d.match(Ba))?a[1]:"";d=(d=d.match(Ca))?d[1]:"";b.a.push({url:a,text:e,name:d});return""});b.h=a;return b}function za(){this.h="";this.a=[]}var Aa=/\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig,Ba=/src="([\S]+)"/,Ca=/class="([\S]+)"/;function Da(a,b,c){return oa("css",a,b,c)}function Ea(a){ta("css",a)}function Fa(a){var b=new Ga;if(!a)return b;a=a.replace(Ha,function(a,d){if(-1!=d.indexOf('rel="stylesheet"')){var e=d.match(Ia),e=e?e[1]:"",f=d.match(Ja),f=f?f[1]:"";b.a.push({url:e,text:"",name:f});return""}return a});a=a.replace(Ka,function(a,d,e){b.a.push({url:"",text:e,name:""});return""});b.h=a;return b}function Ga(){this.h="";this.a=[]}
var Ha=/\x3clink([\s\S]*?)\x3e/ig,Ka=/\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style/ig,Ia=/href="([\S]+)"/,Ja=/class="([\S]+)"/;function La(a,b,c){if(b){b=[];var d,e=0;c&&(a+="\r\n");var f=a.indexOf("[\r\n",e);for(-1<f&&(e=f+3);-1<(f=a.indexOf(",\r\n",e));)d=B(a.substring(e,f)),e=f+3,d&&b.push(JSON.parse(d));f=a.indexOf("]\r\n",e);-1<f&&(d=B(a.substring(e,f)),e=f+3,d&&b.push(JSON.parse(d)));d="";if(a.length>e){d=a.substring(e);if(a=c)a=d.length-2,a=0<=a&&d.indexOf("\r\n",a)==a;a&&(d=d.substring(0,d.length-2))}return{i:b,b:d}}b=JSON.parse(a);b="number"==typeof b.length?b:[b];return{i:b,b:""}}
function R(a,b,c,d){var e="process "+H(a),f=!s("process-async"),g;g=0;b.timing||(b.timing={});b.title&&(document.title=b.title);b.css&&(g=l(function(a,b){var c=Fa(a);if(!(0>=c.a.length))for(var d=0,e=c.a.length;d<e;d++){var f=c.a[d];if(f.url)Da(f.url,null,f.name);else if(f.text){var f=f.text,g=document.createElement("style");(document.getElementsByTagName("head")[0]||document.body).appendChild(g);"styleSheet"in g?g.styleSheet.cssText=f:g.appendChild(document.createTextNode(f))}}b.spfProcessCss=n()},
null,b.css,b.timing),g=C(e,g));b.attr&&(g=l(function(a,b){for(var c in a){var d=document.getElementById(c);if(d){var e=a[c],f=void 0;for(f in e){var g=e[f];"class"==f?d.className=g:"style"==f?d.style.cssText=g:d.setAttribute(f,g)}}}b.spfProcessAttr=n()},null,b.attr,b.timing),g=C(e,g));var h=b.html||{},k=g,x;for(x in h)g=l(function(a,b){var c=document.getElementById(a);if(c){var g=Q(b),h=s("animation-class");if(Ma&&v(c,h)){F(e);var k=aa(c);E(k,!0);g={r:g,reverse:!!d,d:null,f:null,e:c,A:h+"-old",B:h+
"-new",s:d?h+"-reverse-start":h+"-forward-start",q:d?h+"-reverse-end":h+"-forward-end"};c=l(function(a){w(a.e,a.s);a.d=document.createElement("div");a.d.className=a.A;var b=a.e,c=a.d;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.f=document.createElement("div");a.f.className=a.B;a.f.innerHTML=a.r.h;a.reverse?(b=a.d,b.parentNode.insertBefore(a.f,b)):(b=a.d,b.parentNode.insertBefore(a.f,b.nextSibling))},null,g);C(k,c,0);c=l(function(a){y(a.e,a.s);w(a.e,a.q)},null,g);C(k,c,0);c=
l(function(a){a.e.removeChild(a.d);y(a.e,a.q);ba(a.f);F(k);P(a.r,function(){G(k)})},null,g);C(k,c,parseInt(s("animation-duration"),10));c=l(function(a,b){G(b)},null,g,e);C(k,c);E(k)}else c.innerHTML=g.h,F(e),P(g,function(){G(e,f)})}},null,x,h[x],b.timing),g=C(e,g);h=g-k;b.js?(g=l(function(a,b,c){c&&(b.spfProcessHtml=n());F(e);P(Q(a),function(){b.spfProcessJs=n();G(e,f)})},null,b.js,b.timing,h),g=C(e,g)):h&&(g=l(function(a){a.spfProcessHtml=n()},null,b.timing),g=C(e,g));c&&(g=C(e,l(c,null,a,b)));E(e,
f)}function Na(a,b,c){var d="preprocess "+H(a),e;b.css&&(e=l(function(a){a=Fa(a);if(!(0>=a.a.length))for(var b=0,c=a.a.length;b<c;b++){var d=a.a[b];d.url&&Ea(d.url)}},null,b.css),C(d,e));var f=b.html||{},g;for(g in f)f[g]&&(e=l(function(a,b){ya(Q(b))},null,g,f[g]),C(d,e));b.js&&(e=l(function(a){ya(Q(a))},null,b.js),C(d,e));c&&C(d,l(c,null,a,b));E(d)}
var Ma=function(){var a=document.createElement("div");if("transition"in a.style)return!0;for(var b=["webkit","Moz","Ms","O","Khtml"],c=0,d=b.length;c<d;c++)if(b[c]+"Transition"in a.style)return!0;return!1}();function S(a,b){var c=b||{};c.method=((c.method||"GET")+"").toUpperCase();c.type=c.type||"request";var d;d=a;var e=c.type,f=s("url-identifier")||"";f&&(f=f.replace("__type__",e||""),d=0==f.lastIndexOf("?",0)&&-1!=d.indexOf("?")?d+f.replace("?","&"):d+f);e={};e.startTime=n();e.fetchStart=e.startTime;n:{var f=T(a,c.type,!1),g=I();if(f in g){g=g[f];if(ja(g)){f=g.data;break n}ha(f)}f=void 0}if(f)return c=l(Oa,null,a,c,e,f),setTimeout(c,0),null;f={"X-SPF-Request":c.type};c.p&&(f["X-SPF-Referer"]=c.p);
var h={o:!1,b:"",complete:[]},g=l(Pa,null,a,h),k=l(Qa,null,a,c,h),e=l(Ra,null,a,c,e,h),e={headers:f,w:s("request-timeout"),u:g,k:k,t:e,v:e};return"POST"==c.method?ka("POST",d,c.n,e):ka("GET",d,null,e)}function Oa(a,b,c,d){var e=!1;c.responseStart=c.responseEnd=n();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,s("cache-unified")||(e=T(a,b.type,!1),ha(e),e=!0));if(b.c&&"multipart"==d.type)for(var f=d.parts,g=0;g<f.length;g++)b.c(a,f[g]);Sa(a,b,c,d,e)}
function Pa(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.o=-1!=a.toLowerCase().indexOf("multipart")}function Qa(a,b,c,d,e,f){if(c.o){e=c.b+e;var g;try{g=La(e,!0,f)}catch(h){d.abort();b.g&&b.g(a,h);return}if(b.c)for(d=0;d<g.i.length;d++)b.c(a,g.i[d]);c.complete=c.complete.concat(g.i);c.b=g.b}}
function Ra(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];"navigate"==b.type&&(c.navigationStart=c.startTime);var g;d.complete.length&&(d.b=B(d.b),d.b?(f=d.complete.length,Qa(a,b,d,e,"",!0),d.complete.length>f&&(g=d.complete)):g=d.complete);if(!g){try{g=La(e.responseText).i}catch(h){b.g&&b.g(a,h);return}if(b.c&&1<g.length)for(d=d.complete.length;d<g.length;d++)b.c(a,g[d])}Sa(a,b,c,1<g.length?{parts:g,type:"multipart"}:1==g.length?g[0]:{},!0)}
function Sa(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=T(a,b.type,!0))){var f=s("cache-lifetime"),f=parseInt(f,10),g=parseInt(s("cache-max"),10);if(!(0>=f||0>=g)){var g=I(),h=(parseInt(p["cache-counter"],10)||0)+1;q("cache-counter",h);g[e]={data:d,life:f,time:n(),count:h};setTimeout(ia,1E3)}}d.timing=c;b.l&&b.l(a,d)}
function T(a,b,c){a=H(a);var d;s("cache-unified")?d=a:"navigate-back"==b||"navigate-forward"==b?d="history "+a:"navigate"==b?d=(c?"history ":"prefetch ")+a:"prefetch"==b&&(d=c?"prefetch "+a:"");return d||""};function Ta(a){return z(a,function(a){return v(a,s("link-class"))})}function Ua(a){return z(a,function(a){return v(a,s("nolink-class"))})}function Va(a,b){return z(a,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b)}function Wa(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=Ta(a.target);return!b||s("nolink-class")&&Ua(a.target)?null:(a=Va(a.target,b))?a.href:null}
function Xa(a){var b=Wa(a);null!==b&&(b&&b!=window.location.href&&U(b),a.preventDefault())}function Ya(a){var b=Wa(a);b&&b!=window.location.href&&setTimeout(function(){V(b)},0)}function Za(a,b){U(a,null,b&&b["spf-referer"],!0,!(!b||!b["spf-back"]))}
function U(a,b,c,d,e){b=b||{};if(W("navigate-requested-callback",a))if(p["nav-init"]){var f=(parseInt(p["nav-counter"],10)||0)+1,g=parseInt(s("navigate-limit"),10),g=isNaN(g)?Infinity:g;if(f>g)X(a);else if(q("nav-counter",f),f=n()-parseInt(p["nav-time"],10),g=parseInt(s("navigate-lifetime"),10),g=isNaN(g)?Infinity:g,f>g)X(a);else{q("nav-time",n());c=c||window.location.href;q("nav-referer",c);Y();$a(a);var f="preprocess "+H(a),h;for(h in D)f!=h&&0==h.lastIndexOf("preprocess",0)&&ga(h);h=Z()[a];q("nav-request",
h);q("nav-promote",null);q("nav-promote-time",null);h&&4!=h.readyState?(e=!!d,h=H(a),d="preprocess "+h,h="promote "+h,q("nav-promote",a),q("nav-promote-time",n()),ga(d),E(h,!0),e||(b=l(ab,null,b),bb(a,c,b))):(d=!!d,h=!!e,e=l(ab,null,b),f=l(cb,null,b,h),g=l(db,null,b,c,h),b=S(a,{method:b.method,c:f,g:e,l:g,n:b.postData,type:"navigate"+(d?h?"-back":"-forward":""),p:c}),q("nav-request",b),d||bb(a,c,e))}}else X(a);else X(a)}
function bb(a,b,c){try{da(!1,a,{"spf-referer":b},void 0)}catch(d){Y(),c(a,d)}}function ab(a,b,c){q("nav-request",null);W(a.onError,b,c)&&W("navigate-error-callback",b,c)&&X(b)}function cb(a,b,c,d){W("navigate-part-received-callback",c,d)?R(c,d,function(){W(a.onPart,c,d)?W("navigate-part-processed-callback",c,d)||X(c):X(c)},b):X(c)}
function db(a,b,c,d,e){q("nav-request",null);p["nav-promote"]==d&&((e.timing||{}).navigationStart=p["nav-promote-time"]);W("navigate-received-callback",d,e)?e.redirect?A(e.redirect,{"spf-referer":b},!0):R(d,"multipart"==e.type?{}:e,function(){W(a.onSuccess,d,e)&&W("navigate-processed-callback",d,e)},c):X(d)}function Y(){var a=p["nav-request"];a&&(a.abort(),q("nav-request",null))}
function W(a,b){"string"==typeof a&&(a=s(a));var c=Array.prototype.slice.call(arguments,0);c[0]=a;return!1!==m.apply(null,c)}function X(a){Y();$a();window.location.href=a}function eb(a,b){var c=b||{},d=l(fb,null,!1,c),e=l(gb,null,!1,c),f=l(hb,null,!1,c);S(a,{method:c.method,c:e,g:d,l:f,n:c.postData,type:"load"})}function V(a,b){var c=b||{},d=l(fb,null,!0,c),e=l(gb,null,!0,c),f=l(hb,null,!0,c),c=S(a,{method:c.method,c:e,g:d,l:f,n:c.postData,type:"prefetch"}),d=H(a);Z()[d]=c}
function fb(a,b,c,d){W(b.onError,c,d);a&&ib(c)}function gb(a,b,c,d){var e=a?Na:R;if(a){var f=l(cb,null,b,!1,c,d),g="promote "+H(c);C(g,f);if(p["nav-promote"]==c){E(jb,!0);return}}a&&!p["nav-promote"]!=c||e(c,d,function(){W(b.onPart,c,d)})}
function hb(a,b,c,d){var e=a?V:eb;if(d.redirect)e(d.redirect,{onSuccess:b.onSuccess,onPart:b.onPart,onError:b.onError});else{if(a){e=window.location.href;p["nav-promote"]==c&&(e=p["nav-referer"]);var e=l(db,null,b,e,!1,c,d),f="promote "+H(c);C(f,e);p["nav-promote"]==c&&E(f,!0)}e=a?Na:R;f="multipart"==d.type?{}:d;a&&!p["nav-promote"]!=c||e(c,f,function(){W(b.onSuccess,c,d)})}}function ib(a){a=H(a);var b=Z(),c=b[a];c&&c.abort();delete b[a]}function $a(a){var b=Z(),c;for(c in b)a!=c&&ib(c)}
function Z(){return"nav-prefetches"in p?p["nav-prefetches"]:q("nav-prefetches",{})};var jb;function $(){na("js");na("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",$,!1):document.detachEvent&&document.detachEvent("onreadystatechange",$))}document.addEventListener?document.addEventListener("DOMContentLoaded",$,!1):document.attachEvent&&document.attachEvent("onreadystatechange",$);$();
window.spf={init:function(a){var b=!!window.history.pushState;a=a||{};for(var c in r){var d=c,e=c in a?a[c]:r[c];t()[d]=e}b&&(!p["history-init"]&&window.addEventListener&&(c=window.location.href,window.addEventListener("popstate",ea,!1),q("history-init",!0),q("history-callback",Za),q("history-listener",ea),q("history-url",c),q("history-timestamp",n()),A(c,{"spf-referer":document.referrer})),!p["nav-init"]&&document.addEventListener&&(document.addEventListener("click",Xa,!1),s("prefetch-on-mousedown")&&
(document.addEventListener("mousedown",Ya,!1),q("prefetch-listener",Ya)),q("nav-init",!0),q("nav-counter",0),q("nav-time",n()),q("nav-listener",Xa)));return b},dispose:function(){window.history.pushState&&(Y(),p["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",p["nav-listener"],!1),s("prefetch-on-mousedown")&&document.removeEventListener("mousedown",p["prefetch-listener"],!1)),q("nav-init",!1),q("nav-counter",null),q("nav-time",null),q("nav-listener",null)),p["history-init"]&&
(window.removeEventListener&&window.removeEventListener("popstate",p["history-listener"],!1),q("history-init",!1),q("history-callback",null),q("history-listener",null),q("history-url",null),q("history-timestamp",0)));t({})},navigate:function(a,b){a&&a!=window.location.href&&U(a,b)},load:eb,process:R,prefetch:V,scripts:{load:wa,unload:function(a){ra("js",a)},ignore:function(a){sa("js",a)},prefetch:xa},styles:{load:Da,unload:function(a){ra("css",a)},ignore:function(a){sa("css",a)},prefetch:Ea}};})();


}
/*
     FILE ARCHIVED ON 00:08:38 Dec 01, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:41:42 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 124.281
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.062
  esindex: 0.01
  LoadShardBlock: 40.78 (3)
  PetaboxLoader3.datanode: 73.422 (5)
  load_resource: 220.689 (2)
  PetaboxLoader3.resolve: 151.766 (2)
*/