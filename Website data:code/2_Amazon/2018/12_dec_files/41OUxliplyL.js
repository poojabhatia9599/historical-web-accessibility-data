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

(function(n){var f=window.AmazonUIPageJS||window.P,G=f._namespace||f.attributeErrors,g=G?G("AmazonGatewayAuiAssets",""):f;g.guardFatal?g.guardFatal(n)(g,window):g.execute(function(){n(g,window)})})(function(n,f,G){n.register("gateway-asset-load",function(){f.uet&&f.uet("cf","gateway-asset-load",{wb:1});f.uex&&f.uex("ld","gateway-asset-load",{wb:1})});n.when("A","load").execute("ah-inst-img-size",function(g){function l(a){if(!a)return null;var e=b(a).attr("src");a=b(a).data("a-hires");return e===a?
null:e}function c(a){"object"===typeof e.ue&&"function"===typeof e.ue.count&&e.ue&&e.ue.count(a,(e.ue.count(a)||0)+1)}function k(a,e){c("gw-img-size-invoke");b.ajax({type:"HEAD",async:!0,url:a,success:function(a,b,d){c("gw-img-size-success");g.trigger(e,parseInt(d.getResponseHeader("Content-Length"),10))},error:function(a,b,d){c("gw-img-size-error")}})}function m(a,c){0<a.length&&(h[c]={count:a.length,totalSize:0,images:b.unique(a)},b(h[c].images).each(function(a,b){var d=c+"_"+a;g.on(d,function(a){isNaN(a)||
(--h[c].count,h[c].totalSize+=a,0===h[c].count&&e.ue&&e.ue.count(c,h[c].totalSize))});k(b,d)}))}function a(a,e){e=e||a.length;var h=[];b(a.slice(0,e)).each(function(a,b){var d=l(b);if(!d)return[];h.push(d)});return h}var b=g.$,e=f,h=[];n.execute("inst-cf-img",function(){c("gw-inst-img");var a=g.$(".gw-critical-content img");(a=0>=a.length?null:l(a[0]))&&m([a],"gw-cf-img-size")});n.when("x1").execute("inst-x1-img",function(){n.execute("inst-x1-rec-img",function(){var d=1;b("#gw-content-grid .feed-carousel .feed-carousel-shelf").slice(0,
2).each(function(e,h){if(2>=d){var c="gw-shoveler-img-size-"+d++,g=b(h).find("img");6<=g.length&&(g=a(g,6),m(g,c))}})})})});"use strict";n.when("A").register("dombinder",function(g){function l(a,b){var e=0;b=b.split(".");for(var h=b.length;e<h;e++)a=a&&a[b[e]];return a}function c(a){return k.map(k(a).data("bind").split(","),function(b){b=b.split(":");var e=k.trim(b[0]),h=k.trim(b[1]),d=f[e];if(d)return d.init&&d.init(a,h),function(b){d.update(a,h,b)}})}var k=g.$,f={text:{update:function(a,b,e){k(a).text(l(e,
b)||"")}},html:{update:function(a,b,e){k(a).html(l(e,b)||"")}},href:{update:function(a,b,e){k(a).attr("href",l(e,b)||"")}},trimText:{update:function(a,b,e){a=k(a);e=a.text();if(e.length>b){for(var h=b-4;0<=h&&0<"[.,-/#!$%^\x26*;:{}\x3d-_`~()] ".indexOf(e[h]);)h--;a.text(e.substring(0,0<=h?h+1:b-3)+"...")}}},value:{update:function(a,b,e){k(a).val(l(e,b)||"")}},visible:{update:function(a,b,e){var h=!1;"!"===b.charAt(0)&&(h=!0,b=b.substring(1));b=!!l(e,b);h!==b?k(a).show():k(a).hide()}},css:{init:function(a,
b){var e=k(a),h=e.data("dombcss")||[];h[b]="";e.data("dombcss",h)},update:function(a,b,e){a=k(a);var h=a.data("dombcss"),d=h[b];e=l(e,b);d!==e&&(h[b]=e,d&&a.removeClass(d),e&&a.addClass(e))}},attr:{init:function(a,b){var e=k(a),h=e.data("dombattr")||[];h[b]={};e.data("dombattr",h)},update:function(a,b,e){var h=k(a);a=h.data("dombattr");var d=a[b];e=l(e,b);d!==e&&(a[b]=e,d&&k.each(d,function(a,b){h.removeAttr(a)}),e&&k.each(e,function(a,b){h.attr(a,b)}))}}};return{init:function(a){var b={$root:a,bindings:[]};
a.find("[data-bind]").each(function(){k.each(c(this),function(a,h){b.bindings.push(h)})});return b},update:function(a,b){k.each(a.bindings,function(a,h){h(b)})}}});"use strict";n.when("jQuery").register("gwAjax",function(g){return function(l,c){function k(a,h,d){"object"===typeof f.ue&&"function"===typeof f.ue.count&&(m(c.errorCounter||"gwAjaxError"),c.id&&m("gwAjaxError:"+c.id));"function"===typeof f.ueLogError&&f.ueLogError({logLevel:"WARN",attribution:"gwAjax-"+(c.id||l),message:"gwAjax call failed "+
(JSON&&JSON.stringify?JSON.stringify({url:l,"params-data":c.params||c.data}):"")});"function"===typeof b&&b(a,h,d)}function m(a){"object"===typeof f.ue&&"function"===typeof f.ue.count&&f.ue.count(a,(f.ue.count(a)||0)+1)}c=g.extend(!0,{},c);var a=c.success,b=c.error;c.success=function(b,h,d){b.error?k(b,h,d):"function"===typeof a&&a(b,h,d)};c.error=k;c.data=c.params?c.params:c.data;m("gwAjaxCall");c.ajaxCounter&&m(c.ajaxCounter);return g.ajax(l,c)}});"use strict";n.when("jQuery","gw-hud-punt").execute("gw-hud-sidekick",
function(g){g("#gw-hud-grid").css({display:"none"})});"use strict";n.when("A","a-modal","gw-productdb","productdb-binding-helper","sg-media-builder","gw-sims","gw-popover-data").register("gw-popover",function(g,l,c,k,m,a,b){function e(a,b){f.uet&&f.uet(a,b,{wb:1})}function h(a){if(f.ue&&"function"===typeof f.ue.count)return f.ue.count(a)||0}function d(a){f.ue&&"function"===typeof f.ue.count&&f.ue.count(a,(f.ue.count(a)||0)+1)}function F(a){return a.closest("*[data-sgproduct]").data("sgproduct")}function n(a){a=
a.closest(".shogun-widget");return!a.length||a.hasClass("card-lite")?"/ah/ajax/product":"/gp/gw/ajax/pdb.html"}function v(a,b,d){t[a.asin]&&t[a.asin].isResolved()?x.resetSimData():(t[a.asin]=p.Deferred(),a&&a.asin&&b&&d?x.fetch(a,b,t[a.asin],d):t[a.asin].reject())}var p=g.$,q={},t={};if(!p("html").hasClass("a-touch")){var y=p('\x3cspan style\x3d"display: none" /\x3e').appendTo("body"),u=p("#gw-popover-wrapper"),z=new k(c,u),r=l.create(y,{name:"gw-asin-popover",width:"90%","max-width":900,height:590,
popoverLabel:b.popoverLabel,closeButton:!1}),x=new a(z),w=p("#gw-quick-look-btn");p("#a-page").delegate("li[data-sgproduct]","mouseenter",function(a){a=p(a.currentTarget);a.closest(".deals-shoveler").length||(a.append(w),a.find("[title]").removeAttr("title"),w.addClass("active"))});w.mouseenter(function(){var a=p(this),b=n(a),d=F(a),a=a.siblings().children("a").attr("href");v(d,a,b)});p(".bestsellers .listRow a").mouseenter(function(){var a=p(this),b=n(a),d=F(a),a=a.attr("href");v(d,a,b);!d||!d.asin||
q[d.asin]&&q[d.asin].isResolved()||!(b=c.get(d.asin))||(q[d.asin]=p.Deferred(),q[d.asin].resolve(b))});var A={};p("#a-page").delegate(".fresh-shoveler li[data-sgproduct]","mouseenter mousemove",function(a){a=p(a.currentTarget);if(!a.closest(".deals-shoveler").length){var b=a.data("sgproduct").asin;if(!q[b]||!q[b].isResolved()){var e=[];a.add(a.prev("li[data-sgproduct]")).add(a.next("li[data-sgproduct]")).each(function(){var a=p(this).data("sgproduct");if(a&&a.asin){var b=c.get(a.asin),d=(b=!(!A[a.asin]&&
b&&b.loading))&&1500<g.now()-A[a.asin];if(!b||d)e.push(a.asin),A[a.asin]=g.now()}});q[b]=p.Deferred();e.length?(c._ajax('{"asins": ["'+e.join('","')+'"]}',{id:"quicklook-pdb"},{url:n(a)}).done(function(a){c._add(a);for(var d=0;d<e.length;d++)A[e[d]]=Infinity;q[b].resolve(a)}).fail(q[b].reject),d("freshHoverCount")):q[b].resolve()}}});p("#a-page").delegate("li[data-sgproduct]","mouseleave",function(a){p(a.currentTarget).closest(".deals-shoveler").length||w.removeClass("active")});var E="#a-popover-"+
r.attrs("id")+" ";l=p.map([".a-popover-header { display: none; }",".a-popover-inner { padding: 0px !important; margin: 0px !important; overflow: hidden !important; height: 100% !important; }"],function(a){return E+a}).join(" ");p("head").append("\x3cstyle\x3e"+l+"\x3c/style\x3e");g.on("a:popover:hide:gw-asin-popover",function(a){f.history.state&&f.history.state.popup&&f.history.back();z.clear()});p(f).bind("popstate",function(){r.hide()});return{show:function(a,b){d("freshPopOverOn");e("bb","popoverLatency"+
h("freshPopOverOn"));f.history&&f.history.pushState&&f.history.pushState({popup:1},"");z.setAsin(a,{beforeUpdate:function(c){if(c.loading)return d("freshPopOverLoading"),c;var g=(new m(c.images[0])).autoCrop().scaleXY(500,400).build(),g={url:b,image:g,actionUrl:{action:"/gp/product/handle-buy-box/"+function(a){return a.substring(a.indexOf("/ref\x3d")+1,a.length)}(b)}};c.reviews&&(g.reviews=p.extend({},c.reviews,{url:b+"#customerReviews"}));p.when(t[a],q[a]).done(function(b,d){x.showSims(a,b)});t[a].fail(x.setNoSimView);
e("cf","popoverLatency"+h("freshPopOverOn"));return p.extend({},c,g)}});r.show()},hide:function(){r.hide()}}}});"use strict";n.when("jQuery","sg-media-builder","gw-productdb").register("gw-sims",function(g,l,c){return function(k){function m(a,b){f.uet&&f.uet(a,b,{wb:1})}function a(a){if(f.ue&&"function"===typeof f.ue.count)return f.ue.count(a)||0}function b(a){f.ue&&"function"===typeof f.ue.count&&f.ue.count(a,(f.ue.count(a)||0)+1)}function e(){if(!x){x=!0;E.hide();D.show();A.animate({height:"100%"},
300);var b=0,d=0,e=0,c=parseInt(D.css("width"),10),h=D.find(".sims-img-link");h.each(function(a,h){b+=h.clientWidth;c<b?g(h).hide():(d=b,e+=1)});var k=c-d;0<k&&(k=Math.floor(20+k/e-1),20<k&&h.css({"padding-right":k/2+"px","padding-left":k/2+"px"}));h="popoverLatency"+a("freshPopOverOn");m("be",h);f.uex&&f.uex("ld",h,{wb:1})}}function h(){0===--y&&e()}function d(a,d){var e=g("\x3ca\x3e"),h=g("\x3cdiv\x3e");e.attr("class","sims-img-link");h.addClass("sims-img-border");d&&e.addClass("selected");e.click(function(){b("freshPopOverSimsClick");
D.find(".sims-img-link").removeClass("selected");g(this).addClass("selected");k.clear();k.setAsin(a.asin,{beforeUpdate:function(d){d=g.extend(!0,{},a);var e=a.url;if(d.loading)b("freshPopOverLoading");else{var h=(new l(d.images[0])).autoCrop().scaleXY(500,400).build(),h={url:e,image:h,actionUrl:{action:"/gp/product/handle-buy-box/"+C(e)}};d.reviews&&(h.reviews=g.extend({},d.reviews,{url:e+"#customerReviews"}));d=g.extend({},d,h)}return d}})});return e.append(h)}function F(){g.each(u,function(a,b){b.url=
b.url.replace(/ref=gw_pdb_pdt-[\d]+/,C(z)+"\x26gw_sims-"+a)})}function C(a){return 0<=a.indexOf("redirect.html?")?a.replace(/.*redirect.html|(token|location)=.*?&/g,""):0<=a.indexOf("/ref\x3d")?a.substring(a.indexOf("/ref\x3d")+1,a.length):0<=a.indexOf("?")?a.substring(a.indexOf("?"),a.length):""}function v(){x=!1;F();var a=[];y=u.length>y?y:u.length;g(u).each(function(b,e){e.loading=!1;if(e.images[0].src){var c=(new l(e.images[0])).autoCrop().scaleXY(130,100).build().src,k=g("\x3cimg\x3e");k.attr("src",
c);k.attr("class","sims-img");k.load(h);c=g("\x3cdiv\x3e");c.attr("class","sims-img-container");var f=g("\x3cdiv\x3e");f.addClass("sims-img-overlay");g(c).append(f);c.append(k);k=d(e,0===b);k.append(c);a.push(k)}return b<y-1});y=a.length;g(a).each(function(a,b){D.append(b)});setTimeout(e,r)}function p(){n.when("gw-popover").execute(function(a){a.hide()})}function q(){E.hide();A.addClass("hidden");w.bind("click",p)}function t(){D.empty();A.add(E).removeAttr("style");A.removeClass("hidden");w.unbind("click",
p);E.show();D.hide();y=8;u=[]}var y,u,z,r=1E4,x=!1,w=g("#sims-section"),A=w.find(".sims-wrapper"),E=w.find(".sims-loading"),D=w.find(".sims-details");g("#gw-asin-popover");return{fetch:function(b,d,e,h){m("af","popoverLatency"+a("freshPopOverOn"));t();z=d;b.url=z;u.push(b);d=c.get(b.asin);setTimeout(e.reject,r);d.sims?e.resolve(d.sims):c._ajax('{"asins": [], "entityId":"'+b.asin+'","datasetId": "purchase"}',{id:"quicklook-sims-pdb"},{url:h}).done(function(a){if(a&&a.p&&0<a.p.length){var d=b.asin,
h=a.p;h&&(c.get(d).sims||c.addSims(d,h));return e.resolve(a.p)}return e.reject()}).fail(e.reject);return e},setNoSimView:q,showSims:function(a,d){var e=c.get(a);e.loading?b("freshPopOverSimLoadBeforePrimeAsin"):u=e.sims?g.merge([e],e.sims):g.merge([e],d);4<u.length?v():(b("simsLessThanThreshold"),q())},resetSimData:t,setWaitPeriod:function(a){r=a}}}});"use strict";n.when("A").execute(function(g){var l=g.$,c,k;if(!g.$("html").hasClass("a-touch"))if(f.cvox)f.ue&&f.ue.tag&&f.ue.tag("screenReaderOn");
else{l("#a-page").delegate("*[data-sgproduct] #gw-quick-look-btn","click",function(a){l(a.target).closest(".deals-shoveler").length||m(a)});l("#a-page").delegate(".bestseller-list *[data-sgproduct]","click",function(a){m(a)});n.when("gw-popover").execute(function(a){c=a;l("#gw-popover-close").click(function(){c.hide()});k&&c.show.apply(c,k)});var m=function(a){if(!(1<a.which||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey)){var b,e;l(a.target).parents(".bestseller-list").length?(b=l(a.currentTarget).data("sgproduct"),
e=l(a.target).closest("a").attr("href")):(b=l("#gw-quick-look-btn").closest("*[data-sgproduct]").data("sgproduct"),e=l("#gw-quick-look-btn").siblings().children("a").attr("href"));var h=[b.asin,e];b.asin&&e&&(a.preventDefault(),c?c.show.apply(c,h):k=h)}}}});"use strict";n.register("gw/card-modal",function(){function g(c,g){if(l)return l(c,g);n.when("__gw-card-modal").execute(function(l){l(c,g)});return{show:function(){}}}var l;n.when("__gw-card-modal").execute(function(c){l=c});return{show:function(c,
k){g(c,k).show()},preload:function(c,k){n.when("ready").execute(function(){g(c,k)})}}});n.when("A","a-modal","gw/card-loader").register("__gw-card-modal",function(g,l,c){var k={},f=g.$;return function(a,b){if(k[a])return k[a];var e=c.decodeToken(a).name,h=f('\x3cspan style\x3d"display: none" /\x3e').appendTo("body"),e=f.extend({name:e||"gw-card-popover",closeButton:!0,hideHeader:!0,style:"gw",content:f('\x3cdiv aria-hidden\x3d"true"\x3e\x3c/div\x3e').html(b&&b.loading||'\x3cdiv class\x3d"gw-modal-loading"\x3e\x3ci class\x3d"gw-spinner"\x3e\x3c/i\x3e\x3c/div\x3e')},
b),d=k[a]=l.create(h,e);if("gw"===e.style){var F="#a-popover-"+d.attrs("id"),h=f.map([" .a-popover-inner { overflow: hidden !important; height: 100% !important; min-width: 80px; min-height: 80px; }"," .a-popover-wrapper { border: none; border-radius: 0; }"],function(a){return F+a}).join(" ");f("head").append("\x3cstyle\x3e"+h+"\x3c/style\x3e");if(e.closeButton)g.on("a:popover:show:"+e.name,function(a){a=f(F);a.find("button.a-button-close").addClass("gw-close-button");a.find(".a-icon.a-icon-close").attr("class",
"gw-icon gw-icon-close")})}c.request(a).then(function(a){d.update({content:a.html()})});return k[a]}});"use strict";n.when("gw-promise","urlb64decode").register("gw/card-loader",function(g,f){function c(){try{var a=(new URL(document.location.href)).searchParams.get("cardOverrides");if(a)return"cardOverrides\x3d"+a}catch(b){if(a=document.location.href.match(/[?&](cardOverrides=.*?)([&#]|$)/),null!==a)return a[1]}}var k=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},
m={};return{decodeToken:function(a){return JSON.parse(f(a.substring(1)))},request:function(a){function b(a){for(var b=0,d=l.length;b<d;b++)l[b]&&l[b](a)}for(var e=k(a)?a:[a],h=c(),d="/homepage.html/ajax/card"+(h?"?"+h:""),h=[],f=[],l=[],v=[],p=0,q=e.length;p<q;p++){var t=e[p];m[t]?h[p]=m[t]:(h[p]=m[t]=g(function(a,b){f[p]=a;l[p]=b}),v[p]={t:t})}0<v.length&&n.when("A").execute(function(a){a.post(d,{chunk:function(b){var d=b[1];d&&(d.ok?f[d.i]&&f[d.i]({render:function(b){a.$(b).html(d.body)},html:function(){return d.body}}):
l[d.i]&&l[d.i](d.body))},success:function(a,d,e){b("Not Found")},error:function(a,d,e){b(e)},abort:function(a){b("Aborted")},contentType:"application/json",paramsFormat:"json",params:v})});return k(a)?h:h[0]}}});f.Promise?n.register("gw-promise",function(){return function(g){return new Promise(g)}}):n.when("jQuery").register("gw-promise",function(g){return function(f){var c=g.Deferred();f(c.resolve,c.reject);return{then:c.then,"catch":function(g){return c.fail(g)}}}});n.register("urlb64decode",function(){if(f.atob){var g=
{"-":"+",_:"/"};return function(l){return f.atob(l.replace(/[-_]/g,function(c){return g[c]}))}}return function(g){g=g.replace(/\s|=/g,"");for(var c="",f=0,m=g.length;f<m;f+=4){for(var a=0,b=f,e=24;0<e&&b<m;)a+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(g.charAt(b++))<<(e-=6);c+=String.fromCharCode(a>>>16&255,a>>>8&255,a&255)}return c}});"use strict";n.when("jQuery","dombinder").register("productdb-binding-helper",function(g,f){function c(c,f){return g.isFunction(c)?
c(f):f}return function(g,m){function a(a,b){f.update(C,h(b.beforeUpdate,a));a.loading||h(b.load,a)}function b(a){e();n=function(){a(d)};d.pdb_observe(n)}function e(){d&&n&&(d.pdb_unobserve(n),n=null)}var h=c,d=null,n=null,C=f.init(m);this.setAsin=function(h,c){c=c||{};e();d=g.get(h);a(d,c);d.loading&&b(function(b){a(b,c)});return d};this.clear=function(){e();d={};f.update(C,d)}}});f.P&&n.when("jQuery","afterLoad").register("gw-resource-logger",function(g){return{instrumentResources:function(l){var c;
c=!1;if(g.isArray(l)&&!g.isEmptyObject(l)){c=!0;for(var k=0;k<l.length;k++){var m=l[k];if("id"in m&&"regex"in m&&"initiator"in m){if(!("string"===typeof m.id&&"string"===typeof m.initiator&&m.regex instanceof RegExp)){c=!1;break}}else{c=!1;break}}}k=f.performance&&"function"===typeof f.performance.getEntriesByType&&"undefined"!==typeof f.performance.getEntriesByType("resource")&&"undefined"!==typeof f.ue;if(c&&k){c=Array(l.length);for(k=0;k<c.length;k++)c[k]=!1;for(m=k=0;m<f.performance.getEntriesByType("resource").length&&
k<l.length;m++)for(var a=f.performance.getEntriesByType("resource")[m],b=a.name,e=a.initiatorType,h=0;h<l.length;h++)if(!c[h]){var d=l[h].regex;if(e===l[h].initiator&&d.test(b)){b=l[h].id;e=a;a=e.duration;f.ue.count&&(f.ue.count(b+":duration",a),f.ue.count(b+":startTime",e.startTime));f.ue.tag&&(e=void 0,e=50>a?b+":cached":b+":notCached",f.ue.tag(e));c[h]=!0;k++;break}}}}}});"use strict";n.register("sg-media-builder",function(){return function(g){var f=this,c=g.src,k=[];f.build=function(){var f=k.join("_");
return{src:c.replace(/\.([^.]+)$/,"._"+f+"_.$1"),alt:g.alt}};f.autoCrop=function(){k.push("AC");return f};f.scaleX=function(c){k.push("SX"+c);return f};f.scaleY=function(c){k.push("SY"+c);return f};f.upScaleX=function(c){k.push("UX"+c);return f};f.upScaleY=function(c){k.push("UY"+c);return f};f.scaleXY=function(c,a){return f.upScaleX(c).scaleY(a)}}});"use strict";n.when("jQuery","gwAjax").register("shogunProductDB",function(g,l){function c(a){var b=[];m[a]={loading:!0,pdb_observe:function(a){b.push(a)},
pdb_unobserve:function(a){b=g.grep(b,function(b){return b!==a})},_trigger:function(){g.each(b,function(){this.call(m[a])})}};return m[a]}function k(a,b){this.ajaxUrl=a;this.experienceStr=b;this._add=function(a){a.p&&g.each(a.p,function(a,b){if(b.asin){var e=m[b.asin]||c(b.asin);g.extend(e,b,{loading:!1,error:!1});e._trigger(b)}})};this.addSims=function(a,b){if(b){var d=m[a]||c(a);g.extend(d,{sims:b});d._trigger(a)}};this._ajax=function(e,c,d){d=d||{};e=g.extend(!0,{},a,{params:{sa:e,oe:b}},d);f.ue_id&&
(e.params.rrid=f.ue_id);return l(e.url,{method:e.method,params:e.params,success:c.success,error:c.error,id:"gw-jslibs-"+c.id})};this.get=function(a){return a in m?m[a]:c(a)}}var m={};return function(a,b){return new k(a,b)}});"use strict";n.when("jQuery","p-detect").register("component-feed-carousel",function(g,l){var c=g.extend(!0,{},l);g.each({pointerPrefix:function(){return"onmspointerup"in document||"onpointerup"in document?"onpointerup"in document?"pointer":"MSPointer":!1},actionMode:function(){var a=
c.capabilities.pointerPrefix;return a?a:c.capabilities.touch?"touch":"mouse"}},function(a,b){c.capabilities[a]=b()});var k={};g.each({start:{mouse:"down",touch:"start",pointer:"down",MSPointer:"Down"},end:{mouse:"up",touch:"end",pointer:"up",MSPointer:"Up"}},function(a,b){var e=c.capabilities.actionMode,h="string"===typeof b?b:b[e];k[a]=h?e+h:void 0===b.mouse?"":"mouse"+b.mouse});c.action=k;var m=function(a,b,e,c){this.init(a,b,e,c)};m.prototype={init:function(a,b,e,c){var d=this;g("html").hasClass("a-touch")&&
a.addClass("feed-carousel-touch");d.config=c||{};d.adjustMarginOnChange=!1!==d.config.adjustMarginOnChange;d.defaultCssRightMargin=null;d.minItems=b||10;d.imgClass=".product-image";d.$carousel=a;d.cfMinItems=e||6;d.cfFired=!1;d.shovelerReadyFired=!1;d.slotId=d.getSlotId();d.touch=d.$carousel.hasClass("feed-carousel-touch");d.ajaxSource=d.$carousel.parent().hasClass("ajaxSource");d.$shelf=d.$carousel.find(".feed-carousel-shelf");d.$viewport=d.$carousel.find(".feed-carousel-viewport");d.$spinner=d.$carousel.find(".spinner");
d.$left=g(".feed-carousel-control.feed-left",a);d.$right=g(".feed-carousel-control.feed-right",a);d.$buttons=g(".feed-carousel-control",a);d.$thumb=g(".feed-scrollbar-thumb",a);d.shelfLeft=-1*parseInt(d.$shelf.css("left"),10);d.calcWidth=g("html").hasClass("a-lt-ie9");d.noOpacity=g("html").hasClass("a-lt-ie9");d.uniqueId=d.getUniqueId();d.$left.attr("aria-hidden",!0);d.$right.attr("aria-hidden",!0);d.bindEvents();d.$carousel.data("Carousel",d);d.$carousel.trigger("change");d.token=!1;d.lock=function(){d.token=
!0};d.unlock=function(){d.token=!1};d.locked=function(){return d.token};n.when("gw-first-carousel").execute(function(){d.first=d.$carousel.hasClass("first-carousel");d.shouldControlsOn()?d.showControls():d.hideControls()});d.uniqueId&&n.when(d.uniqueId).execute(function(a){d.appendCards(a.cards);if(a.cards&&d.slotId&&"object"===typeof f.ue&&"function"===typeof f.ue.count){var b="gw-"+d.slotId.toString()+"-lazy-cards",e="gw-"+d.slotId.toString()+"-lazy";f.ue.count(b,(f.ue.count(b)||0)+a.cards.length);
f.ue.count(e,(f.ue.count(e)||0)+1)}})},getUniqueId:function(){if(this.$viewport){var a=this.$viewport.closest(".shogun-widget");return 0<a.length?g(a[0]).attr("id"):null}},getSlotId:function(){var a=this.$carousel.closest(".gw-widget-instrument");return 0<a.length?g(a[0]).attr("id"):null},bindEvents:function(){function a(a){return c.capabilities.pointerPrefix&&-1<g.inArray(a.originalEvent.pointerType,[2,"touch"])||"touch"===c.capabilities.actionMode}var b=this,e=g("body");b.$buttons.ready(function(a){b.shovelerReadyFired||
(b.slotId&&(a=b.slotId.toString()+"-active",f.GWI&&f.GWI.recordLatency(a),f.GWI&&f.GWI.register(a)),b.shovelerReadyFired=!0)});b.$carousel.change(function(a){b.updateItems();b.updateSpinner();b.updateShelf();b.updateControls();null===b.defaultCssRightMargin&&b.$shelf.children("li").first()&&(a=parseInt(b.$shelf.children("li").first().css("margin-right"),10),b.defaultCssRightMargin=isNaN(a)?10:a);b.adjustMarginOnChange&&b.adjustCardMargin()});b.$left.click(function(a){a.preventDefault();b.changePage(-1);
b.slotId&&b.logCounter("gw-"+b.slotId.toString()+"-left")});b.$right.click(function(a){a.preventDefault();b.changePage(1);b.slotId&&b.logCounter("gw-"+b.slotId.toString()+"-right")});b.bindImageLoadEvents(b.$shelf);var h;g(f).resize(function(){clearTimeout(h);h=setTimeout(function(){var a=b.getDimensions(),a=Math.max(Math.min(a.shelfLeft,a.maxLeft),0);b.moveShelf(a)},100)});b.$thumb.mousedown(function(a){var c=a.clientX;1===a.which&&(a.preventDefault(),b.$carousel.addClass("scrolling"),e.bind("mousemove.feed-carousel",
function(a){var d=b.getDimensions(),d=Math.max(Math.min(d.shelfLeft+1/d.pageRatio*(a.clientX-c),d.maxLeft),0);c=a.clientX;b.moveShelf(d)}),g(document).bind("selectstart.feed-carousel",function(){return!1}))});e.add(f).mouseup(function(a){b.$carousel.removeClass("scrolling");b.$carousel.hasClass("hovering")||b.hideControls();e.unbind("mousemove.feed-carousel");g(document).unbind("selectstart.feed-carousel")});b.$carousel.hover(function(){b.$carousel.addClass("hovering");clearTimeout(b.hoverTimer);
b.hoverTimer=setTimeout(function(){b.$carousel.hasClass("hovering")&&!b.$carousel.hasClass("touching")?b.showControls():b.$carousel.removeClass("touching")},300)},function(){b.$carousel.removeClass("hovering touching");clearTimeout(b.hoverTimer);b.$carousel.hasClass("scrolling")||(b.hoverTimer=setTimeout(function(){b.$carousel.hasClass("hovering")||b.hideControls()},600))});b.$carousel.bind(c.action.start,function(d){a(d)&&(b.$carousel.addClass("touching"),clearTimeout(b.touchTimer),b.touchTimer=
setTimeout(function(){b.$carousel.removeClass("touching")},5E3))});b.$carousel.bind(c.action.end,function(d){a(d)&&(b.$carousel.removeClass("touching"),clearTimeout(b.touchTimer),clearTimeout(b.hoverTimer))});b.$viewport.scroll(function(){b.shelfLeft=b.$viewport.scrollLeft();b.updateControls()})},bindImageLoadEvents:function(a){var b=this;g(b.imgClass,a).one("load",function(){b.$carousel.trigger("change")})},getDimensions:function(){var a=this.$shelf.width(),b=this.shelfLeft,e=this.$carousel.width();
return{pageWidth:e,shelfWidth:a,shelfLeft:b,pageRatio:e/a,leftRatio:b/a,maxLeft:a-e}},updateItems:function(){var a=this,b=a.$shelf.find(".feed-carousel-card"),e=function(a){return"none"===a.css("display")};b.each(function(b,d){var c=g(d);if(!e(c)&&!a.config.visibleBeforeLoad)return!0;c.attr("aria-posinset",b+1);c.attr("aria-hidden",!1);c.attr("role","listitem");return 0>=c.find(a.imgClass).filter(function(){return!this.complete}).length?(c.css("display","inline-block"),b+1>=a.cfMinItems&&!a.cfFired&&
(a.slotId&&(c=a.slotId.toString()+"-visible",f.GWI&&f.GWI.recordLatency(c),f.GWI&&f.GWI.register(c)),a.cfFired=!0),!0):!1});b.attr("aria-setsize",b.size());a.$items=b.filter(function(){return!e(g(this))})},updateShelf:function(){var a=0;this.calcWidth&&(this.$shelf.children().each(function(){a+=g(this).outerWidth(!0)}),this.$shelf.width(a));this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems&&
this.ajaxSource?this.$spinner.show():(this.size()<this.minItems&&"object"===typeof f.ue&&"function"===typeof f.ue.count&&f.ue.count("shovelerNotEnoughItem",(f.ue.count("shovelerNotEnoughItem")||0)+1),this.$spinner.hide())},updateControls:function(){this.updateArrows();this.updateScrollThumb()},shouldControlsOn:function(){return this.first&&!this.touch},showControls:function(a){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:a,queue:!1})},hideControls:function(a){var b=this.$thumb;
this.shouldControlsOn()||(b=b.add(this.$buttons));b.stop(!0,!0).fadeOut({duration:300,complete:a,queue:!1})},appendCards:function(a){this.$shelf.append(a);this.bindImageLoadEvents(a);this.$carousel.trigger("change")},updateArrows:function(){var a=this,b=a.getDimensions();g.each([{$e:a.$left,enabled:0<b.shelfLeft},{$e:a.$right,enabled:b.shelfLeft<b.maxLeft}],function(b,c){var d=c.$e;c.enabled?d.removeClass("feed-control-disabled"):d.addClass("feed-control-disabled");a.noOpacity&&(c.enabled?d.css("opacity",
"1"):d.css("opacity","0.5"))})},updateScrollThumb:function(){var a=this.getDimensions(),b=a.leftRatio*a.pageWidth,a=Math.min(a.pageRatio*a.pageWidth,a.pageWidth);this.$thumb.width(a).each(function(){g(this).animate({left:b},0)})},logCounter:function(a){"object"===typeof f.ue&&"function"===typeof f.ue.count&&(f.ue.count(a,(f.ue.count(a)||0)+1),f.ue.count("gw-shoveler-click",1))},changePage:function(a){var b=this.getDimensions(),e=this.alignWithItem(b.shelfLeft+a*b.pageWidth),e=Math.min(0>a?e.right:
e.left,b.maxLeft);this.locked()||(this.lock(),b.shelfLeft===e?(this.bounce(this.$shelf,-30*a),this.bounce(this.$thumb,6*a)):this.moveShelf(e,400))},moveShelf:function(a,b){function e(){c.updateArrows();c.unlock()}var c=this;b=b||0;c.shelfLeft=a;if(c.touch)c.$viewport.animate({scrollLeft:a},b,"swing",e);else{var d=c.getDimensions(),d=a/d.shelfWidth*d.pageWidth;c.$shelf.animate({left:-a},b,"swing",e);c.$thumb.animate({left:d},b,"swing",function(){c.updateScrollThumb();c.unlock()})}},getItems:function(){return this.$items},
size:function(){return this.getItems().length},alignWithItem:function(a){if(0>a)return{left:0,right:0};var b=this,c=b.getItems(),f=c.map(function(){var d=b.cardPosition(g(this));if(a>=d.left&&a<=d.right)return d}).get(0);return f?f:b.cardPosition(c.last())},cardPosition:function(a){var b=(a.position()||{left:0,right:0}).left;a=b+a.outerWidth(!0);return{left:b,right:a}},bounce:function(a,b){function c(a){var b={};b[f.touch?"left":"marginLeft"]=a;return b}var f=this;a.each(function(){var a=g(this);
a.animate(c(b),400,"swing",function(){a.animate(c(0),100,"swing",f.unlock)})})},setCardMargin:function(a){this.$shelf.children("li").first()&&this.$shelf.children("li").first().css("margin-right")!==a+"px"&&(this.$shelf.children("li").css("margin-right",a+"px"),this.updateShelf())},adjustCardMargin:function(a){a=void 0===a||null===a?this.defaultCssRightMargin:a;this.setCardMargin(a);var b=this.getDimensions(),b=0>b.maxLeft?Math.ceil(-b.maxLeft/this.size()):a;this.setCardMargin(b<a?a:b)}};return{createCarousel:function(a,
b,c,f){g(a).each(function(a,k){var l=g(k);new m(l,b,c,f)})}}});"use strict";n.when("jQuery","SafeP").execute("shoveler-lazy-non-visible-images",function(g,l){function c(a){"object"===typeof m.ue&&"function"===typeof m.ue.count&&m.ue.count(a,(m.ue.count(a)||0)+1)}function k(){m.GWData&&g.each(m.GWData,function(a,b){if(a&&b&&b.data&&!b.loaded){b.loaded=!0;c("gw-lazy-load-all");var e=[];g.each(b.data,function(a,b){g.each(g(b),function(a,b){e.push(b)})});e&&0<e.length&&c("gw-lazy-load-non-empty");l&&
l.register(a,function(){return{cards:e}})}})}var m=f;n.when("x1").execute(k);n.when("ready").execute(k);n.when("load").execute(k)});"use strict";n.register("SafeP",function(){var f={};return{register:function(l,c){"string"===typeof l&&"function"===typeof c&&(f[l]||(f[l]=function(c,l){n.register(c,l);f[c]=function(){}}),f[l]&&f[l](l,c))}}});"use strict";n.when("A").register("gw-count-down",function(f){return function(l,c,k,m,a){function b(a){a=a||{};return{update:a.update||p.noop,count:a.count||p.noop,
transition:a.transition||p.noop}}function e(a,c){return b({update:function(){v(a);f.trigger(c)}})}function h(){z=a.starts_in;return b({update:function(){f.trigger(E);v(r)},transition:function(){B=e(a.started,w);B.update()},count:function(){u=setInterval(function(){c=t-Date.now();n(c,a.starts_in_timer)},1E3)}})}function d(){z=a.ends_in;return b({update:function(){v(r)},transition:function(){B=e(a.has_ended,x);B.update()},count:function(){u=setInterval(function(){k=y-Date.now();n(k,a.ends_in_timer)},
1E3)}})}function n(a,b){var c,d,e;c=Math.floor(a/36E5);d=Math.floor(a/1E3/60%60);e=Math.floor(a/1E3%60);var f=r,g;g=z+" "+C(c)+C(d,!0,!0)+C(e,!1,!0);f.timerString=g;f=r;c=b?b.replace("_hours_",c).replace("_minutes_",d).replace("_seconds_",e):"";f.readoutString=c;v(r);0>=a&&(clearInterval(u),B.transition())}function C(a,b,c){var d="";if(0<a||c)d=("0"+a).slice(-2);if(!c&&0<a||b)d+=":";return d}function v(a){a.readoutString?r=a:(r.readoutString=a,r.timerString=a);f.trigger(A,r)}c=parseInt(c,10);k=parseInt(k,
10);m=JSON.parse(m);var p=f.$,q=Date.now(),t=q+c,y=q+k,u,z="",r={timerString:"",readoutString:""},x=l+"ended",w=l+"started",A=l+"updateTimer",E=l+"countingDown",D=l+"soldOut",B=function(){return b({update:function(){if(m&&m.dealState){var b=m.dealState.toUpperCase();B="AVAILABLE"===b&&86400<k/1E3?e(""):-1<b.indexOf("WAITLIST")?e(a.on_waitlist):"SOLDOUT"===b?e(a.sold_out,D):0<c?h():0<k?d():e(a.has_ended,x)}B.update();B.count()}})}();B.update();f.on(l,function(){B.update()})}})});

}
/*
     FILE ARCHIVED ON 12:30:34 Dec 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:39:46 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 140.802
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.054
  esindex: 0.008
  LoadShardBlock: 111.751 (3)
  PetaboxLoader3.datanode: 119.278 (5)
  load_resource: 344.477 (2)
  PetaboxLoader3.resolve: 275.39 (2)
*/