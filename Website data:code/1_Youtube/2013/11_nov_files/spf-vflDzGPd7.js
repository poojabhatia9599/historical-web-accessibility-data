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

(function(){function k(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function m(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function n(){return+new Date}function aa(a){var b=(parseInt(p.uid,10)||0)+1;return a["spf-key"]||(a["spf-key"]=""+q("uid",b))}
var r={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"navigate-requested-callback":null,"navigate-part-received-callback":null,"navigate-part-processed-callback":null,"navigate-received-callback":null,"navigate-processed-callback":null,"navigate-error-callback":null,"process-async":!1,"request-timeout":0,"script-loading-callback":null,"style-loading-callback":null,
"url-identifier":"?spf=__type__"};function s(a){return!a&&"config"in p?p.config:q("config",a||{})}function q(a,b){return p[a]=b}var p=window._spf_state||{};window._spf_state=p;function t(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function u(a,b){if(a.classList)return a.classList.contains(b);for(var c=t(a),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function v(a,b){a.classList?a.classList.add(b):u(a,b)||(a.className+=" "+b)}function w(a,b){if(a.classList)a.classList.remove(b);else{for(var c=t(a),d=[],e=0,f=c.length;e<f;e++)c[e]!=b&&d.push(c[e]);a.className=d.join(" ")}};function ba(a){if(document.querySelectorAll)return document.querySelectorAll(a);if(x){var b=document.createElement("style"),c=document.getElementsByTagName("head")[0];c.appendChild(b);window.__qsa=[];b.styleSheet.cssText=a+"{x:expression(__qsa.push(this))}";document.body.style.cssText+="";document.body.style.zoom=1;c.removeChild(b);return window.__qsa.slice(0)}return[]}
function ca(a){var b,c=a.parentNode;if(c&&11!=c.nodeType)if(a.removeNode)a.removeNode(!1);else{for(;b=a.firstChild;)c.insertBefore(b,a);c.removeChild(a)}}function z(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function da(a,b){var c=a||"",d=document,e=d.createElement("iframe");e.id=c;e.src='javascript:""';e.style.display="none";b&&(e.onload=k(b,null,e));d.body.appendChild(e);return e}var x="Microsoft Internet Explorer"==navigator.appName;function A(a,b,c){B(!0,a,b,c)}function B(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=n();q("history-timestamp",e);c["spf-timestamp"]=e;a?window.history.replaceState(c,"",b):window.history.pushState(c,"",b);q("history-url",b);d&&(a=p["history-callback"])&&a(b,c)}}
function C(a){var b=window.location.href;if(a.state){a=a.state;var c=a["spf-timestamp"];b==p["history-url"]?(q("history-timestamp",c),window.history.replaceState(a,"",b)):(a["spf-back"]=c<parseInt(p["history-timestamp"],10),q("history-timestamp",c),q("history-url",b),(c=p["history-callback"])&&c(b,a))}};var D=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function E(a){for(var b=0,c=0,d=a.length;c<d;++c)b=31*b+a.charCodeAt(c),b%=4294967296;return b};function F(a,b,c){var d=G[a];return a&&b?(d||(d=G[a]={items:[],j:0,m:1}),d.items.push({D:b,C:c||0})):d&&d.items.length||0}function H(a,b){var c=G[a];if(c){var d=0<c.j;0<c.m&&(b||!d)&&ea(a,b)}}function I(a){(a=G[a])&&a.m--}function J(a,b){var c=G[a];c&&(c.m++,H(a,b))}function fa(a){var b=G[a];b&&(clearTimeout(b.j),delete G[a])}
function ea(a,b){var c=G[a];if(c&&(clearTimeout(c.j),c.j=0,0<c.m)){var d=c.items.shift();if(d){var e=k(ea,null,a,b),e=k(function(a,b){a();b()},null,d.D,e);b?e():c.j=setTimeout(e,d.C)}}}var G={};function ga(){var a=L(),b;for(b in a)ha(a[b])||delete a[b]}function ha(a){if(!(a&&"data"in a))return!1;var b=a.life,b=isNaN(b)?Infinity:b,c=n()-a.time,d=parseInt(s()["cache-max"],10),d=isNaN(d)?Infinity:d;a=(parseInt(p["cache-counter"],10)||0)-a.count;return c<b&&a<d}function L(){return"cache-storage"in p?p["cache-storage"]:q("cache-storage",{})};function ia(a,b,c,d){var e=d||{},f=!1,g=0,l,h=ja();h.open(a,b,!0);h.timing={};var y=h.abort;h.abort=function(){clearTimeout(l);h.onreadystatechange=null;y.call(h)};h.onreadystatechange=function(){var a=h.timing;2==h.readyState?(a.responseStart=a.responseStart||n(),f=-1<(h.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"),e.u&&e.u(h)):3==h.readyState?f&&e.k&&(a=h.responseText.substring(g),g=h.responseText.length,e.k(h,a)):4==h.readyState&&(a.responseEnd=a.responseEnd||n(),
f&&e.k&&h.responseText.length>g&&(a=h.responseText.substring(g),g=h.responseText.length,e.k(h,a)),clearTimeout(l),e.t&&e.t(h))};a="POST"==a;if(e.headers)for(var K in e.headers)h.setRequestHeader(K,e.headers[K]),"content-type"==K.toLowerCase()&&(a=!1);a&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.w&&(l=setTimeout(function(){h.abort();e.v&&e.v(h)},e.w));h.timing.fetchStart=n();h.send(c);return h}var ja;
ja="XMLHttpRequest"in window?function(){return new XMLHttpRequest}:"ActiveXObject"in window?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:void 0;function M(a){return a.dataset?a.dataset.loaded:a.getAttribute("data-"+"loaded".replace(/([A-Z])/g,"-$1").toLowerCase())}function ka(a){a.dataset?a.dataset.loaded="true":a.setAttribute("data-"+"loaded".replace(/([A-Z])/g,"-$1").toLowerCase(),"true")};function la(a,b){if(a&&b){var c=N();a in c||(c[a]=[]);c[a].push(b)}}function ma(a,b){var c=N();if(a in c)for(var d=Array.prototype.slice.call(arguments,1),e=0,f=c[a].length;e<f;e++)c[a][e]&&c[a][e].apply(null,d)}function O(a){var b=N();a?a in b&&delete b[a]:N({})}function N(a){return!a&&"pubsub-subs"in p?p["pubsub-subs"]:q("pubsub-subs",a||{})};function na(a,b,c,d){if("js"!=a&&"css"!=a||!b)return null;var e=a+"-"+E(b);d=d||"";var f=document.getElementById(e),g=f&&M(f),l=f&&!g;if(g)return c&&c(),f;c&&la(e,c);if(l)return f;c="js"==a;var h=d?ba((c?"script":"link")+"."+d):[];m(s()[c?"script-loading-callback":"style-loading-callback"],b,d);return f=oa(a,b,e,d,function(){M(f)||(ka(f),pa(h),ma(e),O(e))})}
function oa(a,b,c,d,e,f){if("js"!=a&&"css"!=a||!b)return null;var g=document.createElement("js"==a?"script":"link");g.id=c;g.className=d;"css"==a&&(g.rel="stylesheet");g.onload=function(){e&&setTimeout(e,0)};g.onreadystatechange=function(){switch(g.readyState){case "loaded":case "complete":g.onload()}};"js"==a?g.src=b:g.href=b;b=f||document;b=b.getElementsByTagName("head")[0]||b.body;"js"==a?b.insertBefore(g,b.firstChild):b.appendChild(g);return g}
function qa(a,b){if("js"==a||"css"==a){var c=document.getElementById(a+"-"+E(b));c&&pa([c])}}function pa(a){for(var b=0,c=a.length;b<c;b++)O(a[b].id),a[b].parentNode.removeChild(a[b])}function ra(a,b){if("js"==a||"css"==a){var c=a+"-"+E(b),d=document.getElementById(c);if(!d){var e=a+"-prefetch",f=document.getElementById(e);if(f){if(d=f.contentWindow.document.getElementById(c))return}else f=da(e,function(a){ka(a);H(e,!0)});M(f)?sa(f,a,b,c):F(e,k(sa,null,f,a,b,c))}}}
function sa(a,b,c,d){a=a.contentWindow.document;"js"==b?(x?(b=a.createElement("script"),b.src=c):(b=a.createElement("object"),b.data=c),b.id=d,a.body.appendChild(b)):oa(b,c,d,"",null,a)};function ta(a,b,c){return na("js",a,b,c)}function ua(a){ra("js",a)}function P(a,b){if(0>=a.a.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.a.length){var e=a.a[c];if(e.url)ta(e.url,d,e.name);else if(e.text){var f=e.text,e=d;if(window.execScript)window.execScript(f,"JavaScript");else{var g=document.createElement("script");g.appendChild(document.createTextNode(f));f=document.getElementsByTagName("head")[0]||document.body;f.insertBefore(g,f.firstChild)}e&&e()}else d()}else b&&b()};d()}}
function va(a){if(!(0>=a.a.length))for(var b=0,c=a.a.length;b<c;b++){var d=a.a[b];d.url&&ua(d.url)}}function Q(a){var b=new wa;if(!a)return b;a=a.replace(xa,function(a,d,e){a=(a=d.match(ya))?a[1]:"";d=(d=d.match(za))?d[1]:"";b.a.push({url:a,text:e,name:d});return""});b.g=a;return b}function wa(){this.g="";this.a=[]}var xa=/\x3cscript([\s\S]*?)\x3e([\s\S]*?)\x3c\/script\x3e/ig,ya=/src="([\S]+)"/,za=/class="([\S]+)"/;function Aa(a,b,c){return na("css",a,b,c)}function Ba(a){ra("css",a)}function Ca(a){var b=new Da;if(!a)return b;a=a.replace(Ea,function(a,d){if(-1!=d.indexOf('rel="stylesheet"')){var e=d.match(Fa),e=e?e[1]:"",f=d.match(Ga),f=f?f[1]:"";b.a.push({url:e,text:"",name:f});return""}return a});a=a.replace(Ha,function(a,d,e){b.a.push({url:"",text:e,name:""});return""});b.g=a;return b}function Da(){this.g="";this.a=[]}
var Ea=/\x3clink([\s\S]*?)\x3e/ig,Ha=/\x3cstyle([\s\S]*?)\x3e([\s\S]*?)\x3c\/style/ig,Fa=/href="([\S]+)"/,Ga=/class="([\S]+)"/;function R(a){var b=document.createElement("a");b.href=a;return b.href};function Ia(a,b){if(b){var c=[],d,e=0,f=a.indexOf("[\r\n",e);for(-1<f&&(e=f+3);-1<(f=a.indexOf(",\r\n",e));)d=D(a.substring(e,f)),e=f+3,d&&c.push(S(d));f=a.indexOf("]\r\n",e);-1<f&&(d=D(a.substring(e,f)),e=f+3,d&&c.push(S(d)));d="";a.length>e&&(d=a.substring(e));return{i:c,h:d}}c=S(a);c="number"==typeof c.length?c:[c];return{i:c,h:""}}var S=function(){return"JSON"in window?function(a){return JSON.parse(a)}:function(a){return eval("("+a+")")}}();
function T(a,b,c,d){var e="process "+R(a),f=!s()["process-async"],g;g=0;b.timing||(b.timing={});b.title&&(document.title=b.title);b.css&&(g=k(function(a,b){var c=Ca(a);if(!(0>=c.a.length))for(var d=0,e=c.a.length;d<e;d++){var f=c.a[d];if(f.url)Aa(f.url,null,f.name);else if(f.text){var f=f.text,g=document.createElement("style");(document.getElementsByTagName("head")[0]||document.body).appendChild(g);"styleSheet"in g?g.styleSheet.cssText=f:g.appendChild(document.createTextNode(f))}}b.spfProcessCss=
n()},null,b.css,b.timing),g=F(e,g));b.attr&&(g=k(function(a,b){for(var c in a){var d=document.getElementById(c);if(d){var e=a[c],f=void 0;for(f in e){var g=e[f];"class"==f?d.className=g:"style"==f?d.style.cssText=g:d.setAttribute(f,g)}}}b.spfProcessAttr=n()},null,b.attr,b.timing),g=F(e,g));var l=b.html||{},h=g,y;for(y in l)g=k(function(a,b){var c=document.getElementById(a);if(c){var g=Q(b),l=s()["animation-class"];if(Ja&&u(c,l)){I(e);var h=aa(c);H(h,!0);g={q:g,reverse:!!d,c:null,e:null,d:c,A:l+"-old",
B:l+"-new",s:d?l+"-reverse-start":l+"-forward-start",p:d?l+"-reverse-end":l+"-forward-end"};c=k(function(a){v(a.d,a.s);a.c=document.createElement("div");a.c.className=a.A;var b=a.d,c=a.c;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.e=document.createElement("div");a.e.className=a.B;a.e.innerHTML=a.q.g;a.reverse?(b=a.c,b.parentNode.insertBefore(a.e,b)):(b=a.c,b.parentNode.insertBefore(a.e,b.nextSibling))},null,g);F(h,c,0);c=k(function(a){w(a.d,a.s);v(a.d,a.p)},null,g);F(h,c,0);
c=k(function(a){a.d.removeChild(a.c);w(a.d,a.p);ca(a.e);I(h);P(a.q,function(){J(h)})},null,g);F(h,c,parseInt(s()["animation-duration"],10));c=k(function(a,b){J(b)},null,g,e);F(h,c);H(h)}else c.innerHTML=g.g,I(e),P(g,function(){J(e,f)})}},null,y,l[y],b.timing),g=F(e,g);l=g-h;b.js?(g=k(function(a,b,c){c&&(b.spfProcessHtml=n());I(e);P(Q(a),function(){b.spfProcessJs=n();J(e,f)})},null,b.js,b.timing,l),g=F(e,g)):l&&(g=k(function(a){a.spfProcessHtml=n()},null,b.timing),g=F(e,g));c&&(g=F(e,k(c,null,a,b)));
H(e,f)}function Ka(a,b,c){var d="preprocess "+R(a),e;b.css&&(e=k(function(a){a=Ca(a);if(!(0>=a.a.length))for(var b=0,c=a.a.length;b<c;b++){var d=a.a[b];d.url&&Ba(d.url)}},null,b.css),F(d,e));var f=b.html||{},g;for(g in f)f[g]&&(e=k(function(a,b){va(Q(b))},null,g,f[g]),F(d,e));b.js&&(e=k(function(a){va(Q(a))},null,b.js),F(d,e));c&&F(d,k(c,null,a,b));H(d)}
var Ja=function(){var a=document.createElement("div");if("transition"in a.style)return!0;for(var b=["webkit","Moz","Ms","O","Khtml"],c=0,d=b.length;c<d;c++)if(b[c]+"Transition"in a.style)return!0;return!1}();function U(a,b){var c=b||{};c.method=((c.method||"GET")+"").toUpperCase();c.type=c.type||"request";var d=R(a),e;e=d;var f=c.type,g=s()["url-identifier"]||"";g&&(g=g.replace("__type__",f||""),e=0==g.lastIndexOf("?",0)&&-1!=e.indexOf("?")?e+g.replace("?","&"):e+g);f={};f.startTime=c.startTime||n();f.fetchStart=f.startTime;n:{g=L();if(d in g){g=g[d];if(ha(g)){d=g.data;break n}g=L();d in g&&delete g[d]}d=void 0}if(d)return c=k(La,null,a,c,f,d),setTimeout(c,0),null;d={"X-SPF-Request":c.type};c.r&&(d["X-SPF-Referer"]=
c.r);var l={o:!1,h:"",complete:[]},g=k(Ma,null,a,l),h=k(Na,null,a,c,l),f=k(Oa,null,a,c,f,l),f={headers:d,w:s()["request-timeout"],u:g,k:h,t:f,v:f};return"POST"==c.method?ia("POST",e,c.n,f):ia("GET",e,null,f)}function La(a,b,c,d){c.responseStart=c.responseEnd=n();"navigate"==b.type&&(c.navigationStart=c.startTime);if(b.b&&"multipart"==d.type)for(var e=d.parts,f=0;f<e.length;f++)b.b(a,e[f]);Pa(a,b,c,d,!1)}
function Ma(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.o=-1!=a.toLowerCase().indexOf("multipart")}function Na(a,b,c,d,e){if(c.o){e=c.h+e;var f;try{f=Ia(e,!0)}catch(g){d.abort();b.f&&b.f(a,g);return}if(b.b)for(d=0;d<f.i.length;d++)b.b(a,f.i[d]);c.complete=c.complete.concat(f.i);c.h=f.h}}
function Oa(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];"navigate"==b.type&&(c.navigationStart=c.startTime);var g;if(d.complete.length)g=d.complete;else{try{g=Ia(e.responseText).i}catch(l){b.f&&b.f(a,l);return}if(b.b&&1<g.length)for(d=0;d<g.length;d++)b.b(a,g[d])}Pa(a,b,c,1<g.length?{parts:g,type:"multipart"}:1==g.length?g[0]:{},!0)}
function Pa(a,b,c,d,e){if(e&&"POST"!=b.method){e=R(a);var f=s()["cache-lifetime"],f=parseInt(f,10),g=parseInt(s()["cache-max"],10);if(!(0>=f||0>=g)){var g=L(),l=(parseInt(p["cache-counter"],10)||0)+1;q("cache-counter",l);g[e]={data:d,life:f,time:n(),count:l};setTimeout(ga,1E3)}}d.timing=c;b.l&&b.l(a,d)};function Qa(a){if(!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)){var b=z(a.target,function(a){return u(a,s()["link-class"])});!b||s()["nolink-class"]&&z(a.target,function(a){return u(a,s()["nolink-class"])})||!(b=z(a.target,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b))||((b=b.href)&&b!=window.location.href&&V(b),a.preventDefault())}}function Ra(a,b){V(a,null,b&&b["spf-referer"],!0,!(!b||!b["spf-back"]))}
function V(a,b,c,d,e){b=b||{};if(W("navigate-requested-callback",a))if(p["nav-init"]){var f=(parseInt(p["nav-counter"],10)||0)+1,g=parseInt(s()["navigate-limit"],10),g=isNaN(g)?Infinity:g;if(f>g)X(a);else if(q("nav-counter",f),f=n()-parseInt(p["nav-time"],10),g=parseInt(s()["navigate-lifetime"],10),g=isNaN(g)?Infinity:g,f>g)X(a);else{q("nav-time",n());c=c||window.location.href;Y();Sa(a);var f="preprocess "+R(a),l;for(l in G)f!=l&&0==l.lastIndexOf("preprocess",0)&&fa(l);l=Z()[a];q("nav-request",l);
q("nav-intention",null);l&&4!=l.readyState?(a=k(Ta,null,a,b,c,!!d,!!e),q("nav-intention",a)):Ua(a,b,c,!!d,!!e)}}else X(a);else X(a)}function Ta(a,b,c,d,e,f){if(f!=a)return!1;q("nav-intention",null);f="preprocess "+R(a);fa(f);Ua(a,b,c,d,e);return!0}
function Ua(a,b,c,d,e){var f=k(Va,null,b),g=k(Wa,null,b,e);e=k(Xa,null,b,c,e);b=U(a,{method:b.method,b:g,f:f,l:e,n:b.postData,type:"navigate",r:c,startTime:p["nav-time"]});q("nav-request",b);if(!d)try{B(!1,a,{"spf-referer":c},void 0)}catch(l){Y(),f(a,l)}}function Va(a,b,c){q("nav-request",null);W(a.onError,b,c)&&W("navigate-error-callback",b,c)&&X(b)}
function Wa(a,b,c,d){W("navigate-part-received-callback",c,d)?T(c,d,function(){W(a.onPart,c,d)?W("navigate-part-processed-callback",c,d)||X(c):X(c)},b):X(c)}function Xa(a,b,c,d,e){q("nav-request",null);W("navigate-received-callback",d,e)?e.redirect?A(e.redirect,{"spf-referer":b},!0):T(d,"multipart"==e.type?{}:e,function(){W(a.onSuccess,d,e)&&W("navigate-processed-callback",d,e)},c):X(d)}function Y(){var a=p["nav-request"];a&&(a.abort(),q("nav-request",null))}
function W(a,b){"string"==typeof a&&(a=s()[a]);var c=Array.prototype.slice.call(arguments,0);c[0]=a;return!1!==m.apply(null,c)}function X(a){Y();Sa();window.location.href=a}function Ya(a,b){var c=b||{},d=k(Za,null,!1,c),e=k($a,null,!1,c),f=k(ab,null,!1,c);U(a,{method:c.method,b:e,f:d,l:f,n:c.postData,type:"load"})}function bb(a,b){var c=b||{},d=k(Za,null,!0,c),e=k($a,null,!0,c),f=k(ab,null,!0,c),c=U(a,{method:c.method,b:e,f:d,l:f,n:c.postData,type:"prefetch"}),d=R(a);Z()[d]=c}
function Za(a,b,c,d){W(b.onError,c,d);a&&$(c)}function $a(a,b,c,d){(a?Ka:T)(c,d,function(){W(b.onPart,c,d)})}function ab(a,b,c,d){var e=a?bb:Ya;if(d.redirect)e(d.redirect,{onSuccess:b.onSuccess,onPart:b.onPart,onError:b.onError});else{if(a&&($(c),(e=p["nav-intention"])&&e(c)))return;(a?Ka:T)(c,"multipart"==d.type?{}:d,function(){W(b.onSuccess,c,d)})}}function $(a){a=R(a);var b=Z(),c=b[a];c&&c.abort();delete b[a]}function Sa(a){var b=Z(),c;for(c in b)a!=c&&$(c)}
function Z(){return"nav-prefetches"in p?p["nav-prefetches"]:q("nav-prefetches",{})};window.spf={init:function(a){var b=!!window.history.pushState;a=a||{};for(var c in r){var d=c,e=c in a?a[c]:r[c];s()[d]=e}b&&(!p["history-init"]&&window.addEventListener&&(c=window.location.href,window.addEventListener("popstate",C,!1),q("history-init",!0),q("history-callback",Ra),q("history-listener",C),q("history-url",c),q("history-timestamp",n()),A(c,{"spf-referer":document.referrer})),!p["nav-init"]&&document.addEventListener&&(document.addEventListener("click",Qa,!1),q("nav-init",!0),q("nav-counter",
0),q("nav-time",n()),q("nav-listener",Qa)));return b},dispose:function(){window.history.pushState&&(Y(),p["nav-init"]&&(document.removeEventListener&&document.removeEventListener("click",p["nav-listener"],!1),q("nav-init",!1),q("nav-counter",null),q("nav-time",null),q("nav-listener",null)),p["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",p["history-listener"],!1),q("history-init",!1),q("history-callback",null),q("history-listener",null),q("history-url",null),q("history-timestamp",
0)));s({})},navigate:function(a,b){a&&a!=window.location.href&&V(a,b)},load:Ya,process:T,prefetch:bb,scripts:{load:ta,unload:function(a){qa("js",a)},ignore:function(a){O("js-"+E(a))},prefetch:ua},styles:{load:Aa,unload:function(a){qa("css",a)},ignore:function(a){O("css-"+E(a))},prefetch:Ba}};})();


}
/*
     FILE ARCHIVED ON 00:34:18 Nov 01, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:41:53 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 115.33
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.052
  esindex: 0.009
  LoadShardBlock: 83.626 (3)
  PetaboxLoader3.datanode: 189.245 (5)
  load_resource: 697.204 (2)
  PetaboxLoader3.resolve: 540.533 (2)
*/