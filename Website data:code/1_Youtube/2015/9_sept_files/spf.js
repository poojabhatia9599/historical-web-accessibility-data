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
(c) 2012-2014 Google, Inc.
License: MIT
*/
function l(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var c=d.slice();c.push.apply(c,arguments);return a.apply(b,c)}}function aa(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function m(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}function n(){return(new Date).getTime()}function ba(){};function ca(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase(),a)};function q(a,b){return r[a]=b}var r=window._spf_state||{};window._spf_state=r;function u(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function da(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function ea(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function fa(a,b){if(a.filter)return a.filter(b,void 0);var c=[];u(a,function(a,e,f){b.call(void 0,a,e,f)&&c.push(a)});return c}function ga(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;u(a,function(a,e,f){c[e]=b.call(void 0,a,e,f)});return c}function v(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};var ha={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},w={};"config"in r||q("config",w);w=r.config;function ia(a,b){var c=b||document;return c.querySelectorAll?c.querySelectorAll(a):[]}function ja(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function ka(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=l(c,null,d));b.body.appendChild(d);return d};function la(a,b,c,d){var e=d||{},f=!1,k=0,g,h=new XMLHttpRequest;h.open(a,b,!0);h.timing={};var p=h.abort;h.abort=function(){clearTimeout(g);h.onreadystatechange=null;p.call(h)};h.onreadystatechange=function(){var a=h.timing;if(2==h.readyState){a.responseStart=a.responseStart||n();if("json"==h.responseType)f=!1;else if(-1<(h.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{var a=h.getResponseHeader("X-Firefox-Spdy"),c=window.chrome&&chrome.loadTimes&&chrome.loadTimes(),
c=c&&c.wasFetchedViaSpdy;f=!(!a&&!c)}e.M&&e.M(h)}else 3==h.readyState?f&&e.u&&(a=h.responseText.substring(k),k=h.responseText.length,e.u(h,a)):4==h.readyState&&(a.responseEnd=a.responseEnd||n(),window.performance&&window.performance.getEntriesByName&&(h.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.u&&h.responseText.length>k&&(a=h.responseText.substring(k),k=h.responseText.length,e.u(h,a)),clearTimeout(g),e.L&&e.L(h))};"responseType"in h&&"json"==e.responseType&&(h.responseType=
"json");a="POST"==a;if(e.headers)for(var z in e.headers)h.setRequestHeader(z,e.headers[z]),"content-type"==z.toLowerCase()&&(a=!1);a&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.O&&(g=setTimeout(function(){h.abort();e.N&&e.N(h)},e.O));h.timing.fetchStart=n();h.send(c);return h};function x(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function ma(a){return"[object String]"==Object.prototype.toString.call(a)}var oa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function y(a,b){var c=a.split(b),d=1==c.length;return[c[0],d?"":b,d?"":c.slice(1).join(b)]};function pa(a){a.data&&ma(a.data)&&0==a.data.lastIndexOf("spf:",0)&&qa(a.data.substring(4))}function qa(a){var b=A[a];b&&(delete A[a],b())}function ra(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function sa(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var ta=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;ra(a);window.postMessage("","*");sa(a);return b}(),A={};"async-defers"in r||q("async-defers",A);A=r["async-defers"];ta&&("async-listener"in r&&sa(r["async-listener"]),ra(pa),q("async-listener",pa));function ua(a){var b=B();a in b&&delete b[a]}function va(){var a=B(),b;for(b in a)wa(a[b])||delete a[b];a=B();b=parseInt(w["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e,f;for(f in a)a[f].count<d&&(e=f,d=a[f].count);delete a[e]}}function wa(a){if(!(a&&"data"in a))return!1;var b=a.life,b=isNaN(b)?Infinity:b;return n()-a.time<b}function xa(a){var b=parseInt(r["cache-counter"],10)||0;b++;q("cache-counter",b);a.count=b}
function B(a){return!a&&"cache-storage"in r?r["cache-storage"]:q("cache-storage",a||{})};function ya(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function za(a,b){if(b){if(a.classList)return a.classList.contains(b);var c=ya(a);return ea(c,function(a){return a==b})}return!1}function C(a,b){b&&(a.classList?a.classList.add(b):za(a,b)||(a.className+=" "+b))}function E(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=ya(a),c=fa(c,function(a){return a!=b});a.className=c.join(" ")}};function Aa(a,b,c){var d=null,e=window.history.state;if(e){var d={},f;for(f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];Ba(!0,a,d,c)}function Ba(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=n();q("history-timestamp",e);c["spf-timestamp"]=e;if(a)Ca(c,b);else if(a=Da().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");q("history-url",b);d&&(d=r["history-callback"])&&d(b,c)}}
function Ea(a){var b=window.location.href;if(r["history-ignore-pop"])q("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==r["history-url"]?(q("history-timestamp",c),Ca(a,b)):(a["spf-back"]=c<parseInt(r["history-timestamp"],10),a["spf-current"]=r["history-url"],q("history-timestamp",c),q("history-url",b),(c=r["history-callback"])&&c(b,a))}}
function Ca(a,b){var c=Da().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function Da(){var a=document.getElementById("history-iframe");a||(a=ka("history-iframe"));return a};function Fa(a,b){a&&b&&(a in F||(F[a]=[]),F[a].push(b))}function Ga(a,b){a in F&&b&&da(F[a],function(a,d,e){return a==b?(e[d]=null,!1):!0})}function Ha(a){a in F&&u(F[a],function(a,c,d){d[c]=null;a&&a()})}var F={};"ps-s"in r||q("ps-s",F);F=r["ps-s"];function G(a,b,c){var d=H[a];return a&&b?(d||(d=H[a]={items:[],o:0,m:0,A:1}),d.items.push({D:b,B:c||0})):d&&d.items.length||0}function I(a,b){var c=H[a];if(c){var d=!!c.o||!!c.m;0<c.A&&(b||!d)&&Ia(a,b)}}function J(a){(a=H[a])&&a.A--}function K(a,b){var c=H[a];c&&(c.A++,I(a,b))}function Ja(a){var b=H[a];b&&(Ka(b),delete H[a])}
function Ia(a,b){var c=H[a];if(c&&(Ka(c),0<c.A&&c.items.length)){var d=c.items[0];if(d){var e=l(function(a,b){b();a()},null,l(Ia,null,a,b));b?(c.items.shift(),e(d.D)):La(c,d,e)}}}function La(a,b,c){b.B?(c=l(c,null,ba),a.m=setTimeout(c,b.B),b.B=0):(a.items.shift(),c=l(c,null,b.D),(b=(b=w["advanced-task-scheduler"])&&b.addTask)?a.o=b(c):a.m=setTimeout(c,0))}function Ka(a){if(a.o){var b=w["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.o);a.o=0}a.m&&(clearTimeout(a.m),a.m=0)}var H={};function L(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,U:b.U,R:b.R};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function M(a,b){var c=L(a);return b?c.href:y(c.href,"#")[0]}
function Na(a,b){var c=y(a,"#");a=c[0];u(b,function(b){a=a.replace(new RegExp("([?&])"+b+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(a,b){return"?"==b?b:""})});x(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function Oa(a){var b=w["advanced-persistent-parameters"]||"",c=y(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};function Pa(a,b,c,d){var e="js"==a;b=N(a,b);var f=c||"^"+b,k=O(a,f),g;c&&(g=P(a,c))&&b!=g&&(m(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:g}),e=g,Qa(a,c),e&&Ra(a,e),e=O(a,c),delete F[e],Fa(k,l(Sa,null,a,c,g)));e=O(a,b);if((e=Q[e])&&f!=e){Qa(a,e);Ra(a,b);var h=O(a,e);h&&k&&h in F&&(F[k]=(F[k]||[]).concat(F[h]),delete F[h])}h=O(a,b);Q[h]=f;Ta(a,f,b);Fa(k,d);d=l(Ua,null,a);R(a,b)?(e&&f!=e&&(a=Va(a,b))&&a.setAttribute("name",c||""),d()):(a=Wa(a,b,d,void 0,void 0,g))&&c&&a.setAttribute("name",
c)}function Xa(a,b){var c=P(a,b);Qa(a,b);c&&Ra(a,c);var d=O(a,b);delete F[d];Sa(a,b,c)}function Sa(a,b,c){c&&(m("js"==a?"spfjsunload":"spfcssunload",{name:b,url:c}),Ya(a,c))}function Ua(a){var b=O(a,""),c;for(c in F)0==c.indexOf(b)&&da(c.substring(b.length).split("|"),l(Za,null,a))&&Ha(c)}
function Wa(a,b,c,d,e,f){function k(){R(a,b,e)&&$a(2,a,b,e);g&&p&&p.parentNode&&h==document&&p.parentNode.removeChild(p);c&&setTimeout(c,0);return null}var g="js"==a;b=N(a,b);$a(1,a,b,e);var h=d||document,p=h.createElement(g?"script":"link");if(!b)return k();d=S(b);p.className=O(a,d);"onload"in p?p.onerror=p.onload=k:p.onreadystatechange=function(){/^c|loade/.test(p.readyState)&&k()};d=h.getElementsByTagName("head")[0]||h.body;g?(p.async=!0,p.src=b,d.insertBefore(p,d.firstChild)):(p.rel="stylesheet",
p.href=b,(f=f&&Va(a,f,d))?d.insertBefore(p,f):d.appendChild(p));return p}function Ya(a,b){b=N(a,b);var c=Va(a,b,void 0);c&&c.parentNode&&c.parentNode.removeChild(c);c=O(a,b);delete T[c]}function Va(a,b,c){b=S(b);a="."+O(a,b);return ia(a,c)[0]}function ab(a){var b="js"==a,c=[];u(ia(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href,e=N(a,e);if(!R(a,e)){$a(2,a,e);var f=S(e),f=O(a,f);C(d,f);if(f=d.getAttribute("name")){var k=O(a,e);Q[k]=f;Ta(a,f,e)}c.push(d)}})}
function bb(a,b,c){if(b&&(b=N(a,b),c||!R(a,b)))if(c&&"img"==a)cb(b);else{var d=S(b),e=O(a,d),f=O(a,"prefetch"),d=document.getElementById(f);if(!d)d=ka(f,null,function(a){a.title=f;I(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=l(db,null,d,a,b,e,f);d.title?a():G(f,a)}}
function db(a,b,c,d,e){var f="js"==b,k="css"==b;a=a.contentWindow.document;var g=a.getElementById(d);g&&g.parentNode.removeChild(g);f?(g=a.createElement("object"),eb?a.createElement("script").src=c:g.data=c,g.id=d,a.body.appendChild(g)):k?(g=Wa(b,c,null,a,e),g.id=d):(g=a.createElement("img"),eb&&(c=c+"#"+n()),g.src=c,g.id=d,a.body.appendChild(g))}function cb(a){var b=new Image;eb&&(a=a+"#"+n());b.src=a}
function fb(a,b,c){for(var d="js"==a,e=P(a,c),f=b.replace(/\s/g,""),f=f||"",k=0,g=0,h=f.length;g<h;++g)k=31*k+f.charCodeAt(g),k%=4294967296;f="hash-"+k;Ta(a,c,f);!gb(a,f)&&(b=hb(a,b))&&($a(2,a,f),b&&!d&&(d=S(f),d=O(a,d),b.className=d,b.setAttribute("name",c)),(e=e&&e[0])&&Ya(a,e))}
function hb(a,b){b=oa(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body,d;"js"==a?(d=document.createElement("script"),d.text=b,c.appendChild(d),c.removeChild(d)):(d=document.createElement("style"),c.appendChild(d),"styleSheet"in d?d.styleSheet.cssText=b:d.appendChild(document.createTextNode(b)));return d}
function N(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=r[c]||"";if(ma(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);"img"!=a&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=M(b)}else 0==d&&(b=M(b))}return b}function O(a,b,c){return a+"-"+b+(c?"-"+c:"")}function S(a){return a?String(a).replace(/[^\w]/g,""):""}function $a(a,b,c,d){b=O(b,c,d);T[b]=a}function R(a,b,c){a=O(a,b,c);return T[a]}function gb(a,b){var c=R(a,b);return""==b||2==c}
function Ra(a,b){var c=O(a,b);delete Q[c]}function Ta(a,b,c){a=O(a,b);ib[a]=c}function P(a,b){var c=O(a,b);return ib[c]}function Qa(a,b){var c=O(a,b);delete ib[c]}function Za(a,b){var c=P(a,b);return void 0!=c&&gb(a,c)}var T={},Q={},ib={},eb=-1!=navigator.userAgent.indexOf(" Trident/");"rsrc-s"in r||q("rsrc-s",T);T=r["rsrc-s"];"rsrc-n"in r||q("rsrc-n",Q);Q=r["rsrc-n"];"rsrc-u"in r||q("rsrc-u",ib);ib=r["rsrc-u"];function jb(a){a=v(a);u(a,function(a){bb("img",a,!0)})};function kb(a,b,c){Pa("js",a,b,c)}function lb(a){Xa("js",a)}function mb(a,b){Wa("js",a,b)}function nb(a){a=v(a);u(a,function(a){bb("js",a)})}function ob(a,b,c){a=v(a);a=fa(a,function(a){return!!a});var d=[];u(a,function(a){void 0==P("js",a)&&d.push(a)});var e=!d.length;if(b){var f=da(a,l(Za,null,"js"));e&&f?b():(a=O("js",a.sort().join("|")),Fa(a,b))}c&&!e&&c(d)}function pb(a,b){a=v(a);u(a,function(a){if(a){var b=qb[a]||a,b=N("js",b),e=P("js",a);e&&b!=e&&rb(a)}});ob(a,b,sb)}
function sb(a){u(a,function(a){function c(){kb(e,a)}var d=U[a],e=qb[a]||a;d?pb(d,c):c()})}function rb(a){a=v(a);u(a,function(a){var c=[],d;for(d in U){var e=U[d],e=v(e);u(e,function(e){e==a&&c.push(d)})}u(c,function(a){rb(a)});lb(a)})}function tb(a,b){fb("js",a,b)}function ub(a){hb("js",a)}var U={};"js-d"in r||q("js-d",U);var U=r["js-d"],qb={};"js-u"in r||q("js-u",qb);qb=r["js-u"];function vb(a,b,c){Pa("css",a,b,c)}function wb(a,b){Wa("css",a,b)}function xb(a){a=v(a);u(a,function(a){bb("css",a)})};function yb(a,b,c){if(b){b=[];var d,e=0;c&&(a+="\r\n");var f=a.indexOf("[\r\n",e);for(-1<f&&(e=f+3);-1<(f=a.indexOf(",\r\n",e));)d=oa(a.substring(e,f)),e=f+3,d&&b.push(JSON.parse(d));f=a.indexOf("]\r\n",e);-1<f&&(d=oa(a.substring(e,f)),e=f+3,d&&b.push(JSON.parse(d)));d="";a.length>e&&(d=a.substring(e),c&&x(d,"\r\n")&&(d=d.substring(0,d.length-2)));b=zb(b);return{w:b,g:d}}a=JSON.parse(a);b=zb(v(a));return{w:b,g:""}}
function V(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,k=c&&!!c.position,g=c&&c.j,h=b.name||"",p="process "+M(a),z=!w["experimental-process-async"],t;t=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&M(b.url)!=M(window.location.href)&&Aa(b.url+window.location.hash);b.head&&(t=l(function(a,b){var c=W(a);Ab(c);Bb(c);J(p);Cb(c,function(){b.spfProcessHead=n();K(p,z)})},null,b.head,b.timing),t=G(p,t));b.attr&&(t=l(function(a,b){for(var c in a){var d=document.getElementById(c);
if(d){var e=a[c],f=void 0;for(f in e){var g=e[f];"class"==f?d.className=g:"style"==f?d.style.cssText=g:d.setAttribute(f,g)}}}b.spfProcessAttr=n()},null,b.attr,b.timing),t=G(p,t));var D=b.body||{},zc=t,Ma;for(Ma in D)t=l(function(a,b){var d=document.getElementById(a);if(d){!e||k||g||(q("nav-scroll-position",null),q("nav-scroll-url",null),window.scroll(0,0),g=!0,c&&(c.j=!0));var t=W(b);Bb(t);var D=function(){J(p);Cb(t,function(){K(p,z)})},na=w["animation-class"];Db&&za(d,na)?(d=new Eb(d,t.html,na,h,
!!f),J(p),I(d.key,!0),G(d.key,l(Fb,null,d),0),G(d.key,l(Gb,null,d),17),G(d.key,l(Hb,null,d),d.V),G(d.key,l(function(){D();K(p,z)},null),0),I(d.key)):(na=w["experimental-html-handler"])?(J(p),na(t.html,d,function(){D();K(p,z)})):(d.innerHTML=t.html,D())}},null,Ma,D[Ma],b.timing),t=G(p,t);D=t-zc;b.foot?(t=l(function(a,b,c){c&&(b.spfProcessBody=n());a=W(a);Bb(a);J(p);Cb(a,function(){b.spfProcessFoot=n();K(p,z)})},null,b.foot,b.timing,D),t=G(p,t)):D&&(t=l(function(a){a.spfProcessBody=n()},null,b.timing),
t=G(p,t));d&&(t=G(p,l(d,null,a,b)));I(p,z)}function Ib(a,b,c,d){c="preprocess "+M(a);var e;b.head&&(e=l(function(a){a=W(a);Ab(a);Jb(a);Kb(a)},null,b.head),G(c,e));var f=b.body||{},k;for(k in f)f[k]&&(e=l(function(a,b){var c=W(b);Jb(c);Kb(c)},null,k,f[k]),G(c,e));b.foot&&(e=l(function(a){a=W(a);Jb(a);Kb(a)},null,b.foot),G(c,e));d&&G(c,l(d,null,a,b));I(c)}
function Fb(a){C(a.a,a.s);C(a.a,a.H);C(a.a,a.K);C(a.a,a.I);C(a.a,a.J);a.l=document.createElement("div");a.l.className=a.T;var b=a.a,c=a.l;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.f=document.createElement("div");a.f.className=a.S;a.f.innerHTML=a.P;a.reverse?(b=a.l,b.parentNode.insertBefore(a.f,b)):(b=a.l,b.parentNode.insertBefore(a.f,b.nextSibling))}function Gb(a){E(a.a,a.I);E(a.a,a.J);C(a.a,a.F);C(a.a,a.G)}
function Hb(a){a.a.removeChild(a.l);var b=a.f,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}E(a.a,a.F);E(a.a,a.G);E(a.a,a.H);E(a.a,a.K);E(a.a,a.s)}function zb(a){u(v(a),function(a){if(a){a.head&&(a.head=W(a.head));if(a.body)for(var c in a.body)a.body[c]=W(a.body[c]);a.foot&&(a.foot=W(a.foot))}});return a}
function W(a){var b=new Lb;if(!a)return b;if(!ma(a))return a.scripts&&u(a.scripts,function(a){b.scripts.push({url:a.url||"",text:a.text||"",name:a.name||"",async:a.async||!1})}),a.styles&&u(a.styles,function(a){b.styles.push({url:a.url||"",text:a.text||"",name:a.name||""})}),a.links&&w["experimental-preconnect"]&&u(a.links,function(a){"spf-preconnect"==a.rel&&b.links.push({url:a.url||"",rel:a.rel||""})}),b.html=a.html||"",b;a=a.replace(Mb,function(a,d,e,f){return"script"==d?(a=(a=e.match(Nb))?a[1]:
"",d=(d=e.match(Ob))?d[1]:"",e=Pb.test(e),b.scripts.push({url:d,text:f,name:a,async:e}),""):"style"==d?(a=(a=e.match(Nb))?a[1]:"",b.styles.push({url:"",text:f,name:a}),""):a});a=a.replace(Qb,function(a,d){var e=d.match(Rb),e=e?e[1]:"";if("stylesheet"==e){var e=(e=d.match(Nb))?e[1]:"",f=d.match(Sb),f=f?f[1]:"";b.styles.push({url:f,text:"",name:e});return""}return"spf-preconnect"==e&&w["experimental-preconnect"]?(f=(f=d.match(Sb))?f[1]:"",b.links.push({url:f,rel:e}),""):a});b.html=a;return b}
function Cb(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?l(kb,null,e.url,e.name):l(mb,null,e.url):e.text&&(f=e.name?l(tb,null,e.text,e.name):l(ub,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}function Kb(a){0>=a.scripts.length||(a=ga(a.scripts,function(a){return a.url}),nb(a))}
function Bb(a){0>=a.styles.length||u(a.styles,function(a){a.url?a.name?vb(a.url,a.name):wb(a.url):a.text&&(a.name?fb("css",a.text,a.name):hb("css",a.text))})}function Jb(a){0>=a.styles.length||(a=ga(a.styles,function(a){return a.url}),xb(a))}function Ab(a){0>=a.links.length||(a=ga(a.links,function(a){return"spf-preconnect"==a.rel?a.url:""}),jb(a))}
function Eb(a,b,c,d,e){var f=parseInt(w["animation-duration"],10);this.a=a;this.P=b;this.V=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()))||"";f=parseInt(r.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+q("uid",f));this.H=b&&c+"-from-"+b;this.K=d&&c+"-to-"+d;this.l=null;this.T=c+"-old";this.f=null;this.S=c+"-new";this.s=c+(e?"-reverse":"-forward");this.I=c+"-start";this.J=this.s+"-start";this.F=c+"-end";
this.G=this.s+"-end"}function Lb(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var Db=function(){var a=document.createElement("div");return"transition"in a.style?!0:ea(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),Qb=/\x3clink([\s\S]*?)\x3e/ig,Mb=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,Pb=/(?:\s|^)async(?:\s|=|$)/i,Sb=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,Nb=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,Rb=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,Ob=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i;function Tb(a,b){var c=b||{};c.method=((c.method||"GET")+"").toUpperCase();c.type=c.type||"request";var d=a,e=w["url-identifier"]||"";if(e){var e=e.replace("__type__",c.type||""),f=y(d,"#"),k=y(f[0],"?"),d=k[0],g=k[1],k=k[2],h=f[1],f=f[2];if(0==e.lastIndexOf("?",0))g&&(e=e.replace("?","&")),k+=e;else{if(0==e.lastIndexOf(".",0))if(x(d,"/"))e="index"+e;else{var p=d.lastIndexOf(".");-1<p&&(d=d.substring(0,p))}else x(d,"/")&&0==e.lastIndexOf("/",0)&&(e=e.substring(1));d+=e}d=d+g+k+h+f}e=M(d);d={};d.spfUrl=
e;d.startTime=n();d.fetchStart=d.startTime;g=Ub(a,c.current,null,c.type,!1);g=Vb(g,c.current);d.spfPrefetched=!!g&&"prefetch"==g.type;d.spfCached=!!g;if(g)return c=l(Wb,null,a,c,d,g.key,g.response),w["experimental-defer-response-cache"]?(e=window._spf_state=window._spf_state||{},d=parseInt(e.uid,10)||0,d++,e=e.uid=d,A[e]=c,ta?window.postMessage("spf:"+e,"*"):window.setTimeout(l(qa,null,e),0)):w["experimental-sync-response-cache"]?c():w["experimental-sync-response-cache-background"]&&document.hidden?
c():setTimeout(c,0),null;g={};void 0!=c.c&&(g["X-SPF-Referer"]=c.c);c.current&&(g["X-SPF-Previous"]=c.current);if(k=w["advanced-header-identifier"])g["X-SPF-Request"]=k.replace("__type__",c.type),g.Accept="application/json";k=new Xb;h=l(Yb,null,a,c,d,k);d={headers:g,O:w["request-timeout"],M:l(Zb,null,a,k),u:l($b,null,a,c,d,k),L:h,N:h};w["advanced-response-type-json"]&&(d.responseType="json");return"POST"==c.method?la("POST",e,c.C,d):la("GET",e,null,d)}
function Wb(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=n();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,w["cache-unified"]||(ua(d),f=!0));b.i&&"multipart"==e.type&&u(e.parts,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,d)});ac(a,b,c,e,f)}function Zb(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.f=-1!=a.toLowerCase().indexOf("multipart")}
function $b(a,b,c,d,e,f,k){if(d.f){f=d.g+f;var g;try{g=yb(f,!0,k)}catch(h){e.abort();b.h&&b.h(a,h);return}b.i&&u(g.w,function(d){d.timing||(d.timing={});d.timing.spfCached=!!c.spfCached;d.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,d)});d.a=d.a.concat(g.w);d.g=g.g}}
function Yb(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var k in e.resourceTiming)c[k]=e.resourceTiming[k];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var g in e.resourceTiming)k=e.resourceTiming[g],void 0!==k&&(x(g,"Start")||x(g,"End")||"startTime"==g)&&(c[g]=f+Math.round(k));"load"!=b.type&&(c.navigationStart=c.startTime);d.a.length&&
(d.g=oa(d.g),d.g&&$b(a,b,c,d,e,"",!0));var h;if("json"==e.responseType){if(!e.response){b.h&&b.h(a,Error("JSON response parsing failed"));return}h=zb(v(e.response))}else try{h=yb(e.responseText).w}catch(p){b.h&&b.h(a,p);return}if(b.i&&1<h.length)for(d=d.a.length;d<h.length;d++)e=h[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.i(a,e);if(1<h.length){var z;u(h,function(a){a.cacheType&&(z=a.cacheType)});h={parts:h,type:"multipart"};z&&(h.cacheType=
z)}else h=1==h.length?h[0]:{};ac(a,b,c,h,!0)}function ac(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=Ub(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},k=parseInt(w["cache-lifetime"],10),g=parseInt(w["cache-max"],10);0>=k||0>=g||(g=B(),f={data:f,life:k,time:n(),count:0},xa(f),g[e]=f,setTimeout(va,1E3))}d.timing=c;b.v&&b.v(a,d)}
function Ub(a,b,c,d,e){a=M(a);var f;w["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+L(b).pathname);return f||""}
function Vb(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+L(b).pathname));c.push(a);var d=null;ea(c,function(a){var b;a:{b=B();if(a in b){b=b[a];if(wa(b)){xa(b);b=b.data;break a}ua(a)}b=void 0}b&&(d={key:a,response:b.response,type:b.type});return!!b});return d}function Xb(){this.f=!1;this.g="";this.a=[]};function bc(a){return ja(a,function(a){return za(a,w["link-class"])})}function cc(a){return ja(a,function(a){return za(a,w["nolink-class"])})}function dc(a,b){return ja(a,function(a){return a.href&&"img"!=a.tagName.toLowerCase()},b)}function ec(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=bc(a.target);return!b||w["nolink-class"]&&cc(a.target)?null:(a=dc(a.target,b))?a.href:null}function fc(a){return L(a).origin!=L(window.location.href).origin?!1:!0}
function gc(){if(!r["nav-init"])return!1;var a=parseInt(r["nav-counter"],10)||0;a++;var b=parseInt(w["navigate-limit"],10),b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(r["nav-init-time"],10);a--;a=n()-a;b=parseInt(w["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function hc(a){if(!a.defaultPrevented){var b=ec(a);b&&(b=Oa(b),fc(b)&&gc()&&m("spfclick",{url:b,target:a.target})&&(ic(b,{},new jc),a.preventDefault()))}}function kc(a){var b=ec(a);b&&setTimeout(function(){lc(b)},0)}
function mc(){var a;a=r["nav-scroll-position"]||null;var b=r["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;nc();a&&window.scroll.apply(null,a)}
function oc(a,b){var c=new jc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],c:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])}),d=w["reload-identifier"];d&&(a=Na(a,[d]));fc(a)?gc()?m("spfhistory",{url:a,referer:c.c,previous:c.current})&&(c.position&&(q("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),q("nav-scroll-url",window.location.href)),ic(a,{},c)):X(a,"1"):X(a,"9")}
function ic(a,b,c){pc();var d;a:{var e=c.current||window.location.href;if(-1!=a.indexOf("#")||-1!=e.indexOf("#"))if(d=M(a),e=M(e),d==e){d=!1;break a}d=!0}if(d)if(qc(a,c.c,c.current,b)){q("nav-counter",(parseInt(r["nav-counter"],10)||0)+1);rc(a);d=M(a);var e="preprocess "+M(d),f;for(f in H)e!=f&&0==f.lastIndexOf("preprocess",0)&&Ja(f);f=sc()[d];q("nav-request",f);q("nav-promote",null);q("nav-promote-time",null);f&&4!=f.readyState?(f="preprocess "+M(a),d="promote "+M(a),q("nav-promote",a),q("nav-promote-time",
n()),Ja(f),I(d,!0),c.history||tc(a,c.c,l(Y,null,b))):(f=l(Y,null,b),d=l(uc,null,b,c),e=l(vc,null,b,c),w["advanced-navigate-persist-timing"]||wc(),c.type="navigate",c.history&&(c.type+=c.reverse?"-back":"-forward"),b=Tb(a,{method:b.method,i:d,h:f,v:e,C:b.postData,type:c.type,current:c.current,c:c.c}),q("nav-request",b),c.history||tc(a,c.c,f))}else X(a,"2");else c.history||tc(a,c.c,l(Y,null,b)),xc(a,c)}
function xc(a,b){if(b.position)nc(),window.scroll.apply(null,b.position),b.j=!0;else{var c=y(a,"#");if(c[2]){if(c=document.getElementById(c[2]))nc(),c.scrollIntoView(),b.j=!0}else b.j||(nc(),window.scroll(0,0),b.j=!0)}}function tc(a,b,c){try{Aa(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),M(a,!0)!=window.location.href&&Ba(!1,a,{"spf-referer":b},void 0)}catch(d){pc(),c(a,d)}}function Y(a,b,c){q("nav-request",null);yc(b,c,a)&&X(b,"10",c)}
function uc(a,b,c,d){if(Ac(c,d,a))if(d.reload)X(c,"5");else if(d.redirect)Bc(a,d.redirect);else try{V(c,d,b,function(){Cc(c,d,a)})}catch(e){Y(a,c,e)}else X(c,"3")}
function vc(a,b,c,d){q("nav-request",null);if(r["nav-promote"]==b.b){var e=d.timing||{};e.navigationStart=r["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!Dc(c,d,a)){X(c,"4");return}if(d.reload){X(c,"5");return}if(d.redirect){Bc(a,d.redirect);return}}try{V(c,f?{}:d,b,function(){var e=d.name||"";f&&u(d.parts,function(a){e=a.name||e});ca(e);xc(c,b);Ec(c,d,a)})}catch(k){Y(a,c,k)}}function Bc(a,b){try{b+=window.location.hash,Aa(b,null,!0)}catch(c){pc(),Y(a,b,c)}}
function pc(){var a=r["nav-request"];a&&(a.abort(),q("nav-request",null))}function Z(a,b){var c;a&&(c=Array.prototype.slice.call(arguments),c[0]=a,c=aa.apply(null,c));return!1!==c}
function X(a,b,c){c=c?c.message:"";pc();rc();var d=b;c&&(d+=" Message: "+c);m("spfreload",{url:a,reason:d});w["experimental-remove-history"]&&window.location.href==a&&(q("history-ignore-pop",!0),window.history.back());setTimeout(function(){var c=w["reload-identifier"];if(c){var d={};d[c]=encodeURIComponent(b);var c=a,k=y(c,"#"),c=k[0],g=-1!=c.indexOf("?")?"&":"?",h;for(h in d)c+=g+h,d[h]&&(c+="="+d[h]),g="&";a=c+k[1]+k[2]}window.location.href=a},0)}
function Fc(a,b,c){c.b=c.b||a;if(qc(a,void 0,void 0,b,!0)){var d=l(Gc,null,!1,b,c),e=l(Hc,null,!1,b,c),f=l(Ic,null,!1,b,c);c.type="load";Tb(a,{method:b.method,i:e,h:d,v:f,C:b.postData,type:c.type})}}function lc(a,b){a=Oa(a);Jc(a,b||{},new jc)}function Jc(a,b,c){c.b=c.b||a;if(qc(a,void 0,void 0,b,!0)){var d=l(Gc,null,!0,b,c),e=l(Hc,null,!0,b,c),f=l(Ic,null,!0,b,c);c.type="prefetch";b=Tb(a,{method:b.method,i:e,h:d,v:f,C:b.postData,type:c.type,current:c.current});a=M(a);sc()[a]=b}}
function Gc(a,b,c,d,e){a&&Kc(d);a&&r["nav-promote"]==c.b?Y(b,d,e):yc(d,e,b,!0)}function Hc(a,b,c,d,e){if(Ac(d,e,b,!0)){if(e.reload){if(!a)return;if(r["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect)Lc(a,b,c,e.redirect);else{if(a){var f=l(uc,null,b,c,d,e),k="promote "+M(c.b);G(k,f);if(r["nav-promote"]==c.b){I(k,!0);return}}(a?Ib:V)(d,e,c,function(){Cc(d,e,b,!0)})}}}
function Ic(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!Dc(d,e,b,!0)){X(d,"4");return}if(e.reload){if(!a)return;if(r["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect){Lc(a,b,c,e.redirect);return}}var k="promote "+M(c.b);if(a){Kc(d);if(r["nav-promote"]==c.b){G(k,l(vc,null,b,c,d,e));I(k,!0);return}Ja(k)}k=a?Ib:V;try{k(d,f?{}:e,c,function(){Ec(d,e,b,!0)})}catch(g){Gc(a,b,c,d,g)}}
function Lc(a,b,c,d){a=a?Jc:Fc;var e={};u("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),function(a){e[a]=b[a]});a(d,e,c)}function yc(a,b,c,d){a={url:a,err:b};(c=Z((c||{}).onError,a))&&!d&&(c=m("spferror",a));return c}function qc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{}).onRequest,a))&&!e&&(d=m("spfrequest",a));return d}function Ac(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartProcess,a))&&!d&&(c=m("spfpartprocess",a));return c}
function Cc(a,b,c,d){a={url:a,part:b};Z((c||{}).onPartDone,a)&&!d&&m("spfpartdone",a)}function Dc(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onProcess,a))&&!d&&(c=m("spfprocess",a));return c}function Ec(a,b,c,d){a={url:a,response:b};Z((c||{}).onDone,a)&&!d&&m("spfdone",a)}function Kc(a){a=M(a);var b=sc(),c=b[a];c&&c.abort();delete b[a]}function rc(a){var b=sc();a=a&&M(a);for(var c in b)a!=c&&Kc(c)}
var wc,Mc=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);wc=Mc?l(Mc,window.performance):ba;function sc(){return"nav-prefetches"in r?r["nav-prefetches"]:q("nav-prefetches",{})}function nc(){q("nav-scroll-position",null);q("nav-scroll-url",null)}
function jc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.b=a.b||"";this.position=a.position||null;this.c=void 0!=a.c?a.c:window.location.href;this.reverse=!!a.reverse;this.j=!!a.j;this.type=a.type||""};function Nc(){ab("js");ab("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Nc,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Nc))}document.addEventListener?document.addEventListener("DOMContentLoaded",Nc,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Nc);Nc();
var Oc={init:function(a){var b=!("function"!=typeof window.history.pushState&&!Da().contentWindow.history.pushState);a=a||{};for(var c in ha)w[c]=c in a?a[c]:ha[c];for(c in a)c in ha||(w[c]=a[c]);if(b){c=yc;if(!r["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",Ea,!1);q("history-init",!0);q("history-callback",oc);q("history-error-callback",c);q("history-listener",Ea);q("history-url",a);q("history-timestamp",n());var d={"spf-referer":document.referrer};
try{Aa(a,d)}catch(e){c&&c(a,e)}}!r["nav-init"]&&document.addEventListener&&(q("nav-init",!0),q("nav-init-time",n()),q("nav-counter",0),document.addEventListener("click",hc,!1),q("nav-listener",hc),!w["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",kc,!1),q("nav-mousedown-listener",kc)),document.addEventListener("scroll",mc,!1),q("nav-scroll-listener",mc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(pc(),r["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",r["nav-listener"],!1),document.removeEventListener("mousedown",r["nav-mousedown-listener"],!1),document.removeEventListener("scroll",r["nav-scroll-listener"],!1)),q("nav-listener",null),q("nav-mousedown-listener",null),q("nav-scroll-listener",null),q("nav-scroll-position",null),q("nav-scroll-url",null),q("nav-init",!1),q("nav-init-time",null),q("nav-counter",null)),
r["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",r["history-listener"],!1),q("history-init",!1),q("history-callback",null),q("history-error-callback",null),q("history-listener",null),q("history-url",null),q("history-timestamp",0)));for(var a in w)delete w[a]},navigate:function(a,b){a&&(a=Oa(a),fc(a)?gc()?ic(a,b||{},new jc):X(a,"1"):X(a,"9"))},load:function(a,b){a=Oa(a);Fc(a,b||{},new jc)},prefetch:lc,process:function(a,b){function c(a,c,d,e){a==c&&b&&b(e)}var d=
window.location.href;if("multipart"==a.type){var e=a.parts,f=e.length-1;u(e,function(a,b){V(d,a,null,l(c,null,b,f))})}else V(d,a,null,l(c,null,0,0))}},Pc={cache:{remove:ua,clear:function(){B({})}},script:{load:kb,get:mb,ready:ob,done:function(a){Ta("js",a,"");Ua("js")},require:pb,declare:function(a,b){if(a){for(var c in a)U[c]=a[c];if(b)for(c in b)qb[c]=b[c]}},path:function(a){q("rsrc-p-js",a)},unload:lb,ignore:function(a,b){a=v(a);var c=O("js",a.sort().join("|"));Ga(c,b)},unrequire:rb,prefetch:nb},
style:{load:vb,get:wb,unload:function(a){Xa("css",a)},path:function(a){q("rsrc-p-css",a)},prefetch:xb}},Qc=this.spf=this.spf||{},Rc;for(Rc in Oc)Qc[Rc]=Oc[Rc];for(var Sc in Pc)for(var Tc in Pc[Sc])Qc[Sc]=Qc[Sc]||{},Qc[Sc][Tc]=Pc[Sc][Tc];m("spfready");})();


}
/*
     FILE ARCHIVED ON 02:12:42 Sep 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:01:19 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 194.241
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.056
  esindex: 0.01
  LoadShardBlock: 35.71 (3)
  PetaboxLoader3.datanode: 80.274 (5)
  load_resource: 1223.847 (2)
  PetaboxLoader3.resolve: 1132.369 (2)
*/