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
function l(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var e=d.slice();e.push.apply(e,arguments);return a.apply(b,e)}}function aa(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function n(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var p=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ba(){};function q(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function ca(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function da(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function ea(a,b){if(a.filter)return a.filter(b,void 0);var c=[];q(a,function(d,e,f){b.call(void 0,d,e,f)&&c.push(d)});return c}function fa(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;q(a,function(d,e,f){c[e]=b.call(void 0,d,e,f)});return c}function r(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function v(a,b){return w[a]=b}var w=window._spf_state||{};window._spf_state=w;function x(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function ha(a){return"[object String]"==Object.prototype.toString.call(a)}var ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function y(a,b){a=a.split(b);var c=1==a.length;return[a[0],c?"":b,c?"":a.slice(1).join(b)]}function ja(){return"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()};function ka(a){a.data&&ha(a.data)&&0==a.data.lastIndexOf("spf:",0)&&la(a.data.substring(4))}function la(a){var b=z[a];b&&(delete z[a],b())}function ma(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function na(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var oa=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;ma(a);window.postMessage("","*");na(a);return b}(),z={};"async-defers"in w||v("async-defers",z);z=w["async-defers"];oa&&("async-listener"in w&&na(w["async-listener"]),ma(ka),v("async-listener",ka));var qa={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},A={};"config"in w||v("config",A);A=w.config;function ra(a){var b=D();a in b&&delete b[a]}function sa(){var a=D();for(b in a)ta(a[b])||delete a[b];a=D();var b=parseInt(A["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e;for(e in a)if(a[e].count<d){var f=e;d=a[e].count}delete a[f]}}function ta(a){if(!(a&&"data"in a))return!1;var b=a.life;b=isNaN(b)?Infinity:b;a=a.time;return p()-a<b}function ua(a){var b=parseInt(w["cache-counter"],10)||0;b++;v("cache-counter",b);a.count=b}
function D(a){return!a&&"cache-storage"in w?w["cache-storage"]:v("cache-storage",a||{})};function va(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function wa(a,b){if(b){if(a.classList)return a.classList.contains(b);a=va(a);return da(a,function(c){return c==b})}return!1}function E(a,b){b&&(a.classList?a.classList.add(b):wa(a,b)||(a.className+=" "+b))}function F(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=va(a);c=ea(c,function(d){return d!=b});a.className=c.join(" ")}};function xa(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+ja(),a)};function ya(a,b){b=b||document;return b.querySelectorAll?b.querySelectorAll(a):[]}function za(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function Aa(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=l(c,null,d));b.body.appendChild(d);return d};function Ba(a,b,c){var d=null,e=window.history.state;if(e){d={};for(var f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];Ca(!0,a,d,c)}function Ca(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=p();v("history-timestamp",e);c["spf-timestamp"]=e;if(a)Da(c,b);else if(a=Ea().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");v("history-url",b);d&&(d=w["history-callback"])&&d(b,c)}}
function Fa(a){var b=window.location.href;if(w["history-ignore-pop"])v("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==w["history-url"]?(v("history-timestamp",c),Da(a,b)):(a["spf-back"]=c<parseInt(w["history-timestamp"],10),a["spf-current"]=w["history-url"],v("history-timestamp",c),v("history-url",b),(c=w["history-callback"])&&c(b,a))}}
function Da(a,b){var c=Ea().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function Ea(){var a=document.getElementById("history-iframe");a||(a=Aa("history-iframe"));return a};function Ga(a,b){a&&b&&(a in G||(G[a]=[]),G[a].push(b))}function Ha(a,b){a in G&&b&&ca(G[a],function(c,d,e){return c==b?(e[d]=null,!1):!0})}function Ia(a){a in G&&q(G[a],function(b,c,d){d[c]=null;b&&b()})}var G={};"ps-s"in w||v("ps-s",G);G=w["ps-s"];function J(a,b,c){var d=K[a];return a&&b?(d||(d=K[a]={items:[],o:0,m:0,A:1}),d.items.push({C:b,delay:c||0})):d&&d.items.length||0}function L(a,b){var c=K[a];if(c){var d=!!c.o||!!c.m;0<c.A&&(b||!d)&&Ja(a,b)}}function Ka(a){(a=K[a])&&a.A--}function La(a,b){var c=K[a];c&&(c.A++,L(a,b))}function Na(a){var b=K[a];b&&(Oa(b),delete K[a])}
function Ja(a,b){var c=K[a];if(c&&(Oa(c),0<c.A&&c.items.length)){var d=c.items[0];d&&(a=l(function(e,f){f();e()},null,l(Ja,null,a,b)),b?(c.items.shift(),a(d.C)):Pa(c,d,a))}}function Pa(a,b,c){b.delay?(c=l(c,null,ba),a.m=setTimeout(c,b.delay),b.delay=0):(a.items.shift(),c=l(c,null,b.C),(b=(b=A["advanced-task-scheduler"])&&b.addTask)?a.o=b(c):a.m=setTimeout(c,0))}function Oa(a){if(a.o){var b=A["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.o);a.o=0}a.m&&(clearTimeout(a.m),a.m=0)}var K={};function Qa(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,username:b.username,password:b.password};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function N(a,b){a=Qa(a);return b?a.href:y(a.href,"#")[0]}
function Ra(a,b){var c=y(a,"#");a=c[0];q(b,function(d){a=a.replace(new RegExp("([?&])"+d+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(e,f){return"?"==f?f:""})});x(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function Sa(a){var b=A["advanced-persistent-parameters"]||"",c=y(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};function Ta(a,b,c,d){var e="js"==a;b=O(a,b);var f=c||"^"+b,g=P(a,f),h;c&&(h=Q[P(a,c)])&&b!=h&&(n(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:h}),e=h,delete Q[P(a,c)],e&&delete S[P(a,e)],delete G[P(a,c)],Ga(g,l(Ua,null,a,c,h)));if((e=S[P(a,b)])&&f!=e){delete Q[P(a,e)];delete S[P(a,b)];var k=P(a,e);k&&g&&k in G&&(G[g]=(G[g]||[]).concat(G[k]),delete G[k])}S[P(a,b)]=f;Q[P(a,f)]=b;Ga(g,d);d=l(Va,null,a);T[P(a,b,void 0)]?(e&&f!=e&&(a=Wa(a,b))&&a.setAttribute("name",c||""),d()):(a=Xa(a,b,d,void 0,
void 0,h))&&c&&a.setAttribute("name",c)}function Ya(a,b){var c=Q[P(a,b)];delete Q[P(a,b)];c&&delete S[P(a,c)];delete G[P(a,b)];Ua(a,b,c)}function Ua(a,b,c){c&&(n("js"==a?"spfjsunload":"spfcssunload",{name:b,url:c}),Za(a,c))}function Va(a){var b=P(a,""),c;for(c in G)0==c.indexOf(b)&&ca(c.substring(b.length).split("|"),l($a,null,a))&&Ia(c)}
function Xa(a,b,c,d,e,f){function g(){T[P(a,b,e)]&&(T[P(a,b,e)]=2);h&&m&&m.parentNode&&k==document&&m.parentNode.removeChild(m);c&&setTimeout(c,0);return null}var h="js"==a;b=O(a,b);T[P(a,b,e)]=1;var k=d||document,m=k.createElement(h?"script":"link");if(!b)return g();d=ab(b);m.className=P(a,d);"onload"in m?m.onerror=m.onload=g:m.onreadystatechange=function(){/^c|loade/.test(m.readyState)&&g()};d=k.getElementsByTagName("head")[0]||k.body;h?(m.async=!0,m.src=b,d.insertBefore(m,d.firstChild)):(m.rel=
"stylesheet",m.href=b,(f=f?Wa(a,f,d):null)?d.insertBefore(m,f):d.appendChild(m));return m}function Za(a,b){b=O(a,b);var c=Wa(a,b,void 0);c&&c.parentNode&&c.parentNode.removeChild(c);delete T[P(a,b)]}function Wa(a,b,c){b=ab(b);return ya("."+P(a,b),c)[0]}
function bb(a){var b="js"==a,c=[];q(ya(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href;e=O(a,e);if(!T[P(a,e,void 0)]){T[P(a,e,void 0)]=2;var f=ab(e);E(d,P(a,f));if(f=d.getAttribute("name"))S[P(a,e)]=f,Q[P(a,f)]=e;c.push(d)}})}
function cb(a,b,c){if(b&&(b=O(a,b),c||!T[P(a,b,void 0)]))if(c&&"img"==a)db(b);else{var d=ab(b),e=P(a,d),f=P(a,"prefetch");d=document.getElementById(f);if(!d)d=Aa(f,null,function(g){g.title=f;L(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=l(eb,null,d,a,b,e,f);d.title?a():J(f,a)}}
function eb(a,b,c,d,e){var f="js"==b,g="css"==b;a=a.contentWindow.document;var h=a.getElementById(d);h&&h.parentNode.removeChild(h);f?(h=a.createElement("object"),fb?a.createElement("script").src=c:h.data=c,h.id=d,a.body.appendChild(h)):g?(h=Xa(b,c,null,a,e),h.id=d):(h=a.createElement("img"),fb&&(c=c+"#"+p()),h.src=c,h.id=d,a.body.appendChild(h))}function db(a){var b=new Image;fb&&(a=a+"#"+p());b.src=a}
function gb(a,b,c){var d="js"==a,e=Q[P(a,c)],f=b.replace(/\s/g,"");f=f||"";for(var g=0,h=0,k=f.length;h<k;++h)g=31*g+f.charCodeAt(h),g%=4294967296;f="hash-"+g;Q[P(a,c)]=f;!hb(a,f)&&(b=ib(a,b))&&(T[P(a,f,void 0)]=2,b&&!d&&(d=ab(f),b.className=P(a,d),b.setAttribute("name",c)),(e=e&&e[0])&&Za(a,e))}
function ib(a,b){b=ia(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body;"js"==a?(a=document.createElement("script"),a.text=b,c.appendChild(a),c.removeChild(a)):(a=document.createElement("style"),c.appendChild(a),"styleSheet"in a?a.styleSheet.cssText=b:a.appendChild(document.createTextNode(b)));return a}
function O(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=w[c]||"";if(ha(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);"img"!=a&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=N(b)}else 0==d&&(b=N(b))}return b}function P(a,b,c){return a+"-"+b+(c?"-"+c:"")}function ab(a){return a?String(a).replace(/[^\w]/g,""):""}function hb(a,b){a=T[P(a,b,void 0)];return""==b||2==a}function $a(a,b){b=Q[P(a,b)];return void 0!=b&&hb(a,b)}var T={},S={},Q={},fb=-1!=navigator.userAgent.indexOf(" Trident/");
"rsrc-s"in w||v("rsrc-s",T);T=w["rsrc-s"];"rsrc-n"in w||v("rsrc-n",S);S=w["rsrc-n"];"rsrc-u"in w||v("rsrc-u",Q);Q=w["rsrc-u"];function jb(a){a=r(a);q(a,function(b){cb("img",b,!0)})};function kb(a,b,c){Ta("js",a,b,c)}function lb(a){Ya("js",a)}function mb(a,b){Xa("js",a,b)}function nb(a){a=r(a);q(a,function(b){cb("js",b)})}function ob(a,b,c){a=r(a);a=ea(a,function(g){return!!g});var d=[];q(a,function(g){void 0==Q[P("js",g)]&&d.push(g)});var e=!d.length;if(b){var f=ca(a,l($a,null,"js"));e&&f?b():(a=P("js",a.sort().join("|")),Ga(a,b))}c&&!e&&c(d)}function pb(a,b){a=r(a);q(a,function(c){if(c){var d=qb[c]||c;d=O("js",d);var e=Q[P("js",c)];e&&d!=e&&rb(c)}});ob(a,b,sb)}
function sb(a){q(a,function(b){function c(){kb(e,b)}var d=U[b],e=qb[b]||b;d?pb(d,c):c()})}function rb(a){a=r(a);q(a,function(b){var c=[],d;for(d in U){var e=U[d];e=r(e);q(e,function(f){f==b&&c.push(d)})}q(c,function(f){rb(f)});lb(b)})}function tb(a,b){gb("js",a,b)}function ub(a){ib("js",a)}var U={};"js-d"in w||v("js-d",U);U=w["js-d"];var qb={};"js-u"in w||v("js-u",qb);qb=w["js-u"];function vb(a,b,c){Ta("css",a,b,c)}function wb(a,b){Xa("css",a,b)}function xb(a){a=r(a);q(a,function(b){cb("css",b)})};function yb(a,b,c){if(b){b=[];var d=0;c&&(a+="\r\n");var e=a.indexOf("[\r\n",d);for(-1<e&&(d=e+3);-1<(e=a.indexOf(",\r\n",d));){var f=ia(a.substring(d,e));d=e+3;f&&b.push(JSON.parse(f))}e=a.indexOf("]\r\n",d);-1<e&&(f=ia(a.substring(d,e)),d=e+3,f&&b.push(JSON.parse(f)));f="";a.length>d&&(f=a.substring(d),c&&x(f,"\r\n")&&(f=f.substring(0,f.length-2)));b=zb(b);return{w:b,g:f}}a=JSON.parse(a);b=zb(r(a));return{w:b,g:""}}
function V(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,g=c&&!!c.position,h=c&&c.j,k=b.name||"",m="process "+N(a),B=!A["experimental-process-async"];var u=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&N(b.url)!=N(window.location.href)&&Ba(b.url+window.location.hash);b.head&&(u=l(function(t,C){t=W(t);Ab(t);Bb(t);Ka(m);Cb(t,function(){C.spfProcessHead=p();La(m,B)})},null,b.head,b.timing),u=J(m,u));b.attr&&(u=l(function(t,C){for(var H in t){var M=document.getElementById(H);
if(M){var R=void 0,Lb=t[H];for(R in Lb){var pa=Lb[R];"class"==R?M.className=pa:"style"==R?M.style.cssText=pa:(M.setAttribute(R,pa),"value"==R&&(M[R]=pa))}}}C.spfProcessAttr=p()},null,b.attr,b.timing),u=J(m,u));var I=b.body||{},Dc=u,Ma;for(Ma in I)u=l(function(t,C){if(t=document.getElementById(t)){!e||g||h||(v("nav-scroll-position",null),v("nav-scroll-url",null),window.scroll(0,0),h=!0,c&&(c.j=!0));var H=W(C);Bb(H);var M=function(){Ka(m);Cb(H,function(){La(m,B)})};C=A["animation-class"];Db&&wa(t,C)?
(t=new Eb(t,H.html,C,k,!!f),Ka(m),L(t.key,!0),J(t.key,l(Fb,null,t),0),J(t.key,l(Gb,null,t),17),J(t.key,l(Hb,null,t),t.duration),J(t.key,l(function(){M();La(m,B)},null),0),L(t.key)):(C=A["experimental-html-handler"])?(Ka(m),C(H.html,t,function(){M();La(m,B)})):(t.innerHTML=H.html,M())}},null,Ma,I[Ma],b.timing),u=J(m,u);I=u-Dc;b.foot?(u=l(function(t,C,H){H&&(C.spfProcessBody=p());t=W(t);Bb(t);Ka(m);Cb(t,function(){C.spfProcessFoot=p();La(m,B)})},null,b.foot,b.timing,I),u=J(m,u)):I&&(u=l(function(t){t.spfProcessBody=
p()},null,b.timing),u=J(m,u));d&&(u=J(m,l(d,null,a,b)));L(m,B)}function Ib(a,b,c,d){c="preprocess "+N(a);if(b.head){var e=l(function(h){h=W(h);Ab(h);Jb(h);Kb(h)},null,b.head);J(c,e)}var f=b.body||{},g;for(g in f)f[g]&&(e=l(function(h,k){h=W(k);Jb(h);Kb(h)},null,g,f[g]),J(c,e));b.foot&&(e=l(function(h){h=W(h);Jb(h);Kb(h)},null,b.foot),J(c,e));d&&J(c,l(d,null,a,b));L(c)}
function Fb(a){E(a.a,a.s);E(a.a,a.G);E(a.a,a.J);E(a.a,a.H);E(a.a,a.I);a.l=document.createElement("div");a.l.className=a.R;var b=a.a,c=a.l;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.f=document.createElement("div");a.f.className=a.P;a.f.innerHTML=a.O;a.reverse?(b=a.l,b.parentNode.insertBefore(a.f,b)):(b=a.l,b.parentNode.insertBefore(a.f,b.nextSibling))}function Gb(a){F(a.a,a.H);F(a.a,a.I);E(a.a,a.D);E(a.a,a.F)}
function Hb(a){a.a.removeChild(a.l);var b=a.f,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}F(a.a,a.D);F(a.a,a.F);F(a.a,a.G);F(a.a,a.J);F(a.a,a.s)}function zb(a){q(r(a),function(b){if(b){b.head&&(b.head=W(b.head));if(b.body)for(var c in b.body)b.body[c]=W(b.body[c]);b.foot&&(b.foot=W(b.foot))}});return a}
function W(a){var b=new Mb;if(!a)return b;if(!ha(a))return a.scripts&&q(a.scripts,function(c){b.scripts.push({url:c.url||"",text:c.text||"",name:c.name||"",async:c.async||!1})}),a.styles&&q(a.styles,function(c){b.styles.push({url:c.url||"",text:c.text||"",name:c.name||""})}),a.links&&q(a.links,function(c){"spf-preconnect"==c.rel&&b.links.push({url:c.url||"",rel:c.rel||""})}),b.html=a.html||"",b;a=a.replace(Nb,function(c,d,e,f){if("script"==d){d=(d=e.match(Ob))?d[1]:"";var g=e.match(Pb);g=g?g[1]:"";
var h=Qb.test(e);e=Rb.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:g,text:f,name:d,async:h}),""):c}return"style"==d&&(d=(d=e.match(Ob))?d[1]:"",e=Rb.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):c});a=a.replace(Sb,function(c,d){var e=d.match(Tb);e=e?e[1]:"";return"stylesheet"==e?(e=(e=d.match(Ob))?e[1]:"",d=(d=d.match(Ub))?d[1]:"",b.styles.push({url:d,text:"",
name:e}),""):"spf-preconnect"==e?(d=(d=d.match(Ub))?d[1]:"",b.links.push({url:d,rel:e}),""):c});b.html=a;return b}function Cb(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?l(kb,null,e.url,e.name):l(mb,null,e.url):e.text&&(f=e.name?l(tb,null,e.text,e.name):l(ub,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function Kb(a){0>=a.scripts.length||(a=fa(a.scripts,function(b){return b.url}),nb(a))}function Bb(a){0>=a.styles.length||q(a.styles,function(b){b.url?b.name?vb(b.url,b.name):wb(b.url):b.text&&(b.name?gb("css",b.text,b.name):ib("css",b.text))})}function Jb(a){0>=a.styles.length||(a=fa(a.styles,function(b){return b.url}),xb(a))}function Ab(a){0>=a.links.length||(a=fa(a.links,function(b){return"spf-preconnect"==b.rel?b.url:""}),jb(a))}
function Eb(a,b,c,d,e){var f=parseInt(A["animation-duration"],10);this.a=a;this.O=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+ja()))||"";f=parseInt(w.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+v("uid",f));this.G=b&&c+"-from-"+b;this.J=d&&c+"-to-"+d;this.l=null;this.R=c+"-old";this.f=null;this.P=c+"-new";this.s=c+(e?"-reverse":"-forward");this.H=c+"-start";this.I=this.s+"-start";this.D=c+"-end";this.F=this.s+"-end"}
function Mb(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var Db=function(){var a=document.createElement("div");return"transition"in a.style?!0:da(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),Sb=/\x3clink([\s\S]*?)\x3e/ig,Nb=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,Qb=/(?:\s|^)async(?:\s|=|$)/i,Ub=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,Ob=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,Tb=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,Pb=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,Rb=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;function Vb(a,b,c,d){var e=d||{},f=!1,g=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var m=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;m.call(k)};k.onreadystatechange=function(){var u=k.timing;if(2==k.readyState){u.responseStart=u.responseStart||p();if("json"==k.responseType)f=!1;else if(-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{u=k.getResponseHeader("X-Firefox-Spdy");var I=window.chrome&&chrome.loadTimes&&chrome.loadTimes();
I=I&&I.wasFetchedViaSpdy;f=!(!u&&!I)}e.L&&e.L(k)}else 3==k.readyState?f&&e.u&&(u=k.responseText.substring(g),g=k.responseText.length,e.u(k,u)):4==k.readyState&&(u.responseEnd=u.responseEnd||p(),window.performance&&window.performance.getEntriesByName&&(k.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.u&&k.responseText.length>g&&(u=k.responseText.substring(g),g=k.responseText.length,e.u(k,u)),clearTimeout(h),e.K&&e.K(k))};"responseType"in k&&"json"==e.responseType&&(k.responseType=
"json");e.withCredentials&&(k.withCredentials=e.withCredentials);d="FormData"in window&&c instanceof FormData;a="POST"==a&&!d;if(e.headers)for(var B in e.headers)k.setRequestHeader(B,e.headers[B]),"content-type"==B.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.N&&(h=setTimeout(function(){k.abort();e.M&&e.M(k)},e.N));k.timing.fetchStart=p();k.send(c);return k};function Wb(a,b){b=b||{};b.method=((b.method||"GET")+"").toUpperCase();b.type=b.type||"request";var c=a,d=A["url-identifier"]||"";if(d){d=d.replace("__type__",b.type||"");var e=y(c,"#"),f=y(e[0],"?");c=f[0];var g=f[1];f=f[2];var h=e[1];e=e[2];if(0==d.lastIndexOf("?",0))g&&(d=d.replace("?","&")),f+=d;else{if(0==d.lastIndexOf(".",0))if(x(c,"/"))d="index"+d;else{var k=c.lastIndexOf(".");-1<k&&(c=c.substring(0,k))}else x(c,"/")&&0==d.lastIndexOf("/",0)&&(d=d.substring(1));c+=d}c=c+g+f+h+e}d=N(c);c={};
c.spfUrl=d;c.startTime=p();c.fetchStart=c.startTime;g=Xb(a,b.current,null,b.type,!1);g=Yb(g,b.current);c.spfPrefetched=!!g&&"prefetch"==g.type;c.spfCached=!!g;if(g){a=l(Zb,null,a,b,c,g.key,g.response);b=window._spf_state=window._spf_state||{};var m=parseInt(b.uid,10)||0;m++;b=b.uid=m;z[b]=a;oa?window.postMessage("spf:"+b,"*"):window.setTimeout(l(la,null,b),0);return null}g={};if(f=A["request-headers"])for(m in f)h=f[m],g[m]=null==h?"":String(h);if(b.headers)for(m in b.headers)h=b.headers[m],g[m]=
null==h?"":String(h);null!=b.c&&(g["X-SPF-Referer"]=b.c);null!=b.current&&(g["X-SPF-Previous"]=b.current);if(m=A["advanced-header-identifier"])g["X-SPF-Request"]=m.replace("__type__",b.type),g.Accept="application/json";m=new $b;f=l(ac,null,a,b,c,m);a={headers:g,N:A["request-timeout"],L:l(bc,null,a,m),u:l(cc,null,a,b,c,m),K:f,M:f};b.withCredentials&&(a.withCredentials=b.withCredentials);A["advanced-response-type-json"]&&(a.responseType="json");return"POST"==b.method?Vb("POST",d,b.B,a):Vb("GET",d,null,
a)}function Zb(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=p();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,A["cache-unified"]||(ra(d),f=!0));b.i&&"multipart"==e.type&&q(e.parts,function(g){g.timing||(g.timing={});g.timing.spfCached=!!c.spfCached;g.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,g)});dc(a,b,c,e,f)}function bc(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.f=-1!=a.toLowerCase().indexOf("multipart")}
function cc(a,b,c,d,e,f,g){if(d.f){f=d.g+f;try{var h=yb(f,!0,g)}catch(k){e.abort();b.h&&b.h(a,k,e);return}b.i&&q(h.w,function(k){k.timing||(k.timing={});k.timing.spfCached=!!c.spfCached;k.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,k)});d.a=d.a.concat(h.w);d.g=h.g}}
function ac(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var g in e.resourceTiming)c[g]=e.resourceTiming[g];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var h in e.resourceTiming)g=e.resourceTiming[h],void 0!==g&&(x(h,"Start")||x(h,"End")||"startTime"==h)&&(c[h]=f+Math.round(g));"load"!=b.type&&(c.navigationStart=c.startTime);d.a.length&&
(d.g=ia(d.g),d.g&&cc(a,b,c,d,e,"",!0));if("json"==e.responseType){if(!e.response){b.h&&b.h(a,Error("JSON response parsing failed"),e);return}var k=zb(r(e.response))}else try{k=yb(e.responseText).w}catch(B){b.h&&b.h(a,B,e);return}if(b.i&&1<k.length)for(d=d.a.length;d<k.length;d++)e=k[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.i(a,e);if(1<k.length){var m;q(k,function(B){B.cacheType&&(m=B.cacheType)});k={parts:k,type:"multipart"};m&&(k.cacheType=
m)}else k=1==k.length?k[0]:{};dc(a,b,c,k,!0)}function dc(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=Xb(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},g=parseInt(A["cache-lifetime"],10),h=parseInt(A["cache-max"],10);0>=g||0>=h||(h=D(),f={data:f,life:g,time:p(),count:0},ua(f),h[e]=f,setTimeout(sa,1E3))}d.timing=c;b.v&&b.v(a,d)}
function Xb(a,b,c,d,e){a=N(a);var f;A["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+Qa(b).pathname);return f||""}
function Yb(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+Qa(b).pathname));c.push(a);var d=null;da(c,function(e){a:{var f=D();if(e in f){f=f[e];if(ta(f)){ua(f);f=f.data;break a}ra(e)}f=void 0}f&&(d={key:e,response:f.response,type:f.type});return!!f});return d}function $b(){this.f=!1;this.g="";this.a=[]};function ec(a){return za(a,function(b){return wa(b,A["link-class"])})}function fc(a){return za(a,function(b){return wa(b,A["nolink-class"])})}function gc(a,b){return za(a,function(c){return c.href&&"img"!=c.tagName.toLowerCase()},b)}function hc(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=ec(a.target);return!b||A["nolink-class"]&&fc(a.target)?null:(a=gc(a.target,b))?a.href:null}function ic(a){return Qa(a).origin!=Qa(window.location.href).origin?!1:!0}
function jc(){if(!w["nav-init"])return!1;var a=parseInt(w["nav-counter"],10)||0;a++;var b=parseInt(A["navigate-limit"],10);b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(w["nav-init-time"],10);a--;a=p()-a;b=parseInt(A["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function kc(a,b){b=b||window.location.href;return-1!=a.indexOf("#")&&(a=N(a),b=N(b),a==b)?!1:!0}
function lc(a){if(!a.defaultPrevented){var b=hc(a);b&&(b=Sa(b),ic(b)&&jc()&&n("spfclick",{url:b,target:a.target})&&(mc(b,{},new nc),a.preventDefault()))}}function oc(a){var b=hc(a);b&&setTimeout(function(){pc(b)},0)}function qc(){var a=w["nav-scroll-position"]||null;var b=w["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;rc();a&&window.scroll.apply(null,a)}
function sc(a,b){b=new nc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],c:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])});var c=A["reload-identifier"];c&&(a=Ra(a,[c]));ic(a)?jc()?n("spfhistory",{url:a,referer:b.c,previous:b.current})&&(b.position&&(v("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),v("nav-scroll-url",window.location.href)),mc(a,{},b)):X(a,"1"):X(a,"9")}
function mc(a,b,c){tc();if(kc(a,c.current))if(uc(a,c.c,c.current,b)){v("nav-counter",(parseInt(w["nav-counter"],10)||0)+1);vc(a);var d=N(a),e="preprocess "+N(d);for(f in K)e!=f&&0==f.lastIndexOf("preprocess",0)&&Na(f);d=wc()[d];v("nav-request",d);v("nav-promote",null);v("nav-promote-time",null);if(d&&4!=d.readyState)d="preprocess "+N(a),e="promote "+N(a),v("nav-promote",a),v("nav-promote-time",p()),Na(d),L(e,!0),c.history||xc(a,c.c,l(Y,null,b));else{d=l(Y,null,b);e=l(yc,null,b,c);var f=l(zc,null,
b,c);A["advanced-navigate-persist-timing"]||Ac();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=Wb(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,B:b.postData,type:c.type,current:c.current,c:c.c});v("nav-request",b);c.history||xc(a,c.c,d)}}else X(a,"2");else c.history||xc(a,c.c,l(Y,null,b)),Bc(a,c)}
function Bc(a,b){if(b.position)rc(),window.scroll.apply(null,b.position),b.j=!0;else if(a=y(a,"#"),a[2]){if(a=document.getElementById(a[2]))rc(),a.scrollIntoView(),b.j=!0}else b.j||(rc(),window.scroll(0,0),b.j=!0)}function xc(a,b,c){try{Ba(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),N(a,!0)!=window.location.href&&Ca(!1,a,{"spf-referer":b},void 0)}catch(d){tc(),c(a,d)}}function Y(a,b,c,d){v("nav-request",null);Cc(b,c,a,void 0,d)&&X(b,"10",c)}
function yc(a,b,c,d){if(Ec(c,d,a))if(d.reload)X(c,"5");else if(d.redirect)Fc(a,d.redirect);else try{V(c,d,b,function(){Gc(c,d,a)})}catch(e){Y(a,c,e)}else X(c,"3")}
function zc(a,b,c,d){v("nav-request",null);if(w["nav-promote"]==b.b){var e=d.timing||{};e.navigationStart=w["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!Hc(c,d,a)){X(c,"4");return}if(d.reload){X(c,"5");return}if(d.redirect){Fc(a,d.redirect);return}}try{V(c,f?{}:d,b,function(){var g=d.name||"";f&&q(d.parts,function(h){g=h.name||g});xa(g);Bc(c,b);Ic(c,d,a)})}catch(g){Y(a,c,g)}}function Fc(a,b){try{b+=window.location.hash,Ba(b,null,!0)}catch(c){tc(),Y(a,b,c)}}
function tc(){var a=w["nav-request"];a&&(a.abort(),v("nav-request",null))}function Z(a,b){if(a){var c=Array.prototype.slice.call(arguments);c[0]=a;c=aa.apply(null,c)}return!1!==c}
function X(a,b,c){c=c?c.message:"";tc();vc();var d=b;c&&(d+=" Message: "+c);n("spfreload",{url:a,reason:d});var e=window.location.href;A["experimental-remove-history"]&&e==a&&(v("history-ignore-pop",!0),window.history.back());setTimeout(function(){var f=A["reload-identifier"];if(f){var g={};g[f]=encodeURIComponent(b);f=a;var h=y(f,"#");f=h[0];var k=-1!=f.indexOf("?")?"&":"?",m;for(m in g)f+=k+m,g[m]&&(f+="="+g[m]),k="&";a=f+h[1]+h[2]}window.location.href=a;kc(a,e)||window.location.reload()},0)}
function Jc(a,b,c){c.b=c.b||a;if(uc(a,void 0,void 0,b,!0)){var d=l(Kc,null,!1,b,c),e=l(Lc,null,!1,b,c),f=l(Mc,null,!1,b,c);c.type="load";Wb(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,B:b.postData,type:c.type,withCredentials:b.withCredentials})}}function pc(a,b){a=Sa(a);Nc(a,b||{},new nc)}
function Nc(a,b,c){c.b=c.b||a;if(uc(a,void 0,void 0,b,!0)){var d=l(Kc,null,!0,b,c),e=l(Lc,null,!0,b,c),f=l(Mc,null,!0,b,c);c.type="prefetch";b=Wb(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,B:b.postData,type:c.type,current:c.current});a=N(a);wc()[a]=b}}function Kc(a,b,c,d,e){a&&Oc(d);a&&w["nav-promote"]==c.b?Y(b,d,e):Cc(d,e,b,!0)}
function Lc(a,b,c,d,e){if(Ec(d,e,b,!0)){if(e.reload){if(!a)return;if(w["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect)Pc(a,b,c,e.redirect);else{if(a){var f=l(yc,null,b,c,d,e),g="promote "+N(c.b);J(g,f);if(w["nav-promote"]==c.b){L(g,!0);return}}(a?Ib:V)(d,e,c,function(){Gc(d,e,b,!0)})}}}
function Mc(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!Hc(d,e,b,!0)){X(d,"4");return}if(e.reload){if(!a)return;if(w["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect){Pc(a,b,c,e.redirect);return}}var g="promote "+N(c.b);if(a){Oc(d);if(w["nav-promote"]==c.b){J(g,l(zc,null,b,c,d,e));L(g,!0);return}Na(g)}g=a?Ib:V;try{g(d,f?{}:e,c,function(){Ic(d,e,b,!0)})}catch(h){Kc(a,b,c,d,h)}}
function Pc(a,b,c,d){a=a?Nc:Jc;var e={};q("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),function(f){e[f]=b[f]});a(d,e,c)}function Cc(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Z((c||{}).onError,a))&&!d&&(c=n("spferror",a));return c}function uc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{}).onRequest,a))&&!e&&(d=n("spfrequest",a));return d}function Ec(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartProcess,a))&&!d&&(c=n("spfpartprocess",a));return c}
function Gc(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartDone,a))&&!d&&n("spfpartdone",a)}function Hc(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onProcess,a))&&!d&&(c=n("spfprocess",a));return c}function Ic(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onDone,a))&&!d&&n("spfdone",a)}function Oc(a){a=N(a);var b=wc(),c=b[a];c&&c.abort();delete b[a]}function vc(a){var b=wc();a=a&&N(a);for(var c in b)a!=c&&Oc(c)}
var Ac,Qc=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);Ac=Qc?l(Qc,window.performance):ba;function wc(){return"nav-prefetches"in w?w["nav-prefetches"]:v("nav-prefetches",{})}function rc(){v("nav-scroll-position",null);v("nav-scroll-url",null)}
function nc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.b=a.b||"";this.position=a.position||null;this.c=void 0!=a.c?a.c:window.location.href;this.reverse=!!a.reverse;this.j=!!a.j;this.type=a.type||""};function Rc(){bb("js");bb("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Rc,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Rc))}document.addEventListener?document.addEventListener("DOMContentLoaded",Rc,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Rc);Rc();
var Sc={init:function(a){var b=!("function"!=typeof window.history.pushState&&!Ea().contentWindow.history.pushState);a=a||{};for(var c in qa)A[c]=c in a?a[c]:qa[c];for(c in a)c in qa||(A[c]=a[c]);if(b){c=Cc;if(!w["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",Fa,!1);v("history-init",!0);v("history-callback",sc);v("history-error-callback",c);v("history-listener",Fa);v("history-url",a);v("history-timestamp",p());var d={"spf-referer":document.referrer};
try{Ba(a,d)}catch(e){c&&c(a,e)}}!w["nav-init"]&&document.addEventListener&&(v("nav-init",!0),v("nav-init-time",p()),v("nav-counter",0),document.addEventListener("click",lc,!1),v("nav-listener",lc),!A["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",oc,!1),v("nav-mousedown-listener",oc)),document.addEventListener("scroll",qc,!1),v("nav-scroll-listener",qc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(tc(),w["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",w["nav-listener"],!1),document.removeEventListener("mousedown",w["nav-mousedown-listener"],!1),document.removeEventListener("scroll",w["nav-scroll-listener"],!1)),v("nav-listener",null),v("nav-mousedown-listener",null),v("nav-scroll-listener",null),v("nav-scroll-position",null),v("nav-scroll-url",null),v("nav-init",!1),v("nav-init-time",null),v("nav-counter",null)),
w["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",w["history-listener"],!1),v("history-init",!1),v("history-callback",null),v("history-error-callback",null),v("history-listener",null),v("history-url",null),v("history-timestamp",0)));for(var a in A)delete A[a]},navigate:function(a,b){a&&(a=Sa(a),ic(a)?jc()?mc(a,b||{},new nc):X(a,"1"):X(a,"9"))},load:function(a,b){a=Sa(a);Jc(a,b||{},new nc)},prefetch:pc,process:function(a,b){function c(f,g,h,k){f==g&&b&&b(k)}var d=
window.location.href;if("multipart"==a.type){a=a.parts;var e=a.length-1;q(a,function(f,g){V(d,f,null,l(c,null,g,e))})}else V(d,a,null,l(c,null,0,0))}},Tc={cache:{remove:ra,clear:function(){D({})}},script:{load:kb,get:mb,ready:ob,done:function(a){Q[P("js",a)]="";Va("js")},require:pb,declare:function(a,b){if(a){for(var c in a)U[c]=a[c];if(b)for(c in b)qb[c]=b[c]}},path:function(a){v("rsrc-p-js",a)},unload:lb,ignore:function(a,b){a=r(a);a=P("js",a.sort().join("|"));Ha(a,b)},unrequire:rb,prefetch:nb},
style:{load:vb,get:wb,unload:function(a){Ya("css",a)},path:function(a){v("rsrc-p-css",a)},prefetch:xb}},Uc=this.spf=this.spf||{},Vc;for(Vc in Sc)Uc[Vc]=Sc[Vc];for(var Wc in Tc)for(var Xc in Tc[Wc])Uc[Wc]=Uc[Wc]||{},Uc[Wc][Xc]=Tc[Wc][Xc];n("spfready");}).call(this);


}
/*
     FILE ARCHIVED ON 00:41:24 Nov 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:44:28 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.094
  esindex: 0.009
  LoadShardBlock: 69.298 (6)
  PetaboxLoader3.datanode: 74.753 (7)
  load_resource: 66.923
  PetaboxLoader3.resolve: 22.914
*/