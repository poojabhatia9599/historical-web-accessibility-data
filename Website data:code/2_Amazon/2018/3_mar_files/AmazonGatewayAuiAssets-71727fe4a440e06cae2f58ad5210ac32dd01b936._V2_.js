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

(function(a){var b=window.AmazonUIPageJS||window.P,d=b._namespace||b.attributeErrors,c=d?d("AmazonGatewayAuiAssets"):b;c.guardFatal?c.guardFatal(a)(c,window):c.execute(function(){a(c,window)})})(function(a,b,d){a.when("A").register("sg-jsutil",function(a){var b=a.$;return{safeCall:function(a,c){return b.isFunction(a)?a(c):c}}});a.register("gateway-asset-load",function(a){b.uet&&b.uet("cf","gateway-asset-load",{wb:1});b.uex&&b.uex("ld","gateway-asset-load",{wb:1})});a.when("A","load").execute("ah-inst-img-size",
function(c){function l(a){if(!a)return null;var b=g(a).attr("src");a=g(a).data("a-hires");return b===a?null:b}function d(a){"object"===typeof m.ue&&"function"===typeof m.ue.count&&m.ue&&m.ue.count(a,(m.ue.count(a)||0)+1)}function k(a,b){d("gw-img-size-invoke");g.ajax({type:"HEAD",async:!0,url:a,success:function(a,e,g){d("gw-img-size-success");c.trigger(b,parseInt(g.getResponseHeader("Content-Length"),10))},error:function(a,b,e){d("gw-img-size-error")}})}function h(a,b){0<a.length&&(n[b]={count:a.length,
totalSize:0,images:g.unique(a)},g(n[b].images).each(function(a,e){var g=b+"_"+a;c.on(g,function(a){isNaN(a)||(--n[b].count,n[b].totalSize+=a,0===n[b].count&&m.ue&&m.ue.count(b,n[b].totalSize))});k(e,g)}))}function p(a,b){var e=c.$(a);(e=0>=e.length?null:l(e[0]))&&h([e],b)}function e(a,b){b=b||a.length;var e=[];g(a.slice(0,b)).each(function(a,b){var f=l(b);if(!f)return[];e.push(f)});return e}var g=c.$,m=b,n=[];a.execute("inst-cf-img",function(){d("gw-inst-img");p(".gw-critical-content img","gw-cf-img-size")});
a.when("x1").execute("inst-x1-img",function(){a.execute("inst-x1-rec-img",function(){var a=1;g("#gw-content-grid .feed-carousel .feed-carousel-shelf").slice(0,2).each(function(b,m){if(2>=a){var l="gw-shoveler-img-size-"+a++,p=g(m).find("img");6<=p.length&&(p=e(p,6),h(p,l))}})});a.execute("inst-x1-unrec-img",function(){h(e(c.$("#desktop-unrec-col-1 img")),"gw-unrec-col-1-img-size");h(e(c.$("#desktop-unrec-col-2 img")),"gw-unrec-col-2-img-size");h(e(c.$("#desktop-unrec-col-3 img")),"gw-unrec-col-3-img-size");
p("#desktop-unrec-sidekick #dotd-image img","gw-unrec-sidekick-img-size")})})});a.when("A").register("dombinder",function(a){function b(a,e){var g=0;e=e.split(".");for(var m=e.length;g<m;g++)a=a&&a[e[g]];return a}function d(a){return k.map(k(a).data("bind").split(","),function(b){b=b.split(":");var g=k.trim(b[0]),m=k.trim(b[1]),l=h[g];if(l)return l.init&&l.init(a,m),function(b){l.update(a,m,b)}})}var k=a.$,h={text:{update:function(a,e,g){k(a).text(b(g,e)||"")}},html:{update:function(a,
e,g){k(a).html(b(g,e)||"")}},href:{update:function(a,e,g){k(a).attr("href",b(g,e)||"")}},trimText:{update:function(a,b,g){a=k(a);g=a.text();if(g.length>b){for(var m=b-4;0<=m&&0<"[.,-/#!$%^&*;:{}=-_`~()] ".indexOf(g[m]);)m--;a.text(g.substring(0,0<=m?m+1:b-3)+"...")}}},value:{update:function(a,e,g){k(a).val(b(g,e)||"")}},visible:{update:function(a,e,g){var m=!1;"!"===e.charAt(0)&&(m=!0,e=e.substring(1));e=!!b(g,e);m!==e?k(a).show():k(a).hide()}},css:{init:function(a,b){var g=k(a),m=g.data("dombcss")||
[];m[b]="";g.data("dombcss",m)},update:function(a,e,g){a=k(a);var m=a.data("dombcss"),c=m[e];g=b(g,e);c!==g&&(m[e]=g,c&&a.removeClass(c),g&&a.addClass(g))}},attr:{init:function(a,b){var g=k(a),m=g.data("dombattr")||[];m[b]={};g.data("dombattr",m)},update:function(a,e,g){var m=k(a);a=m.data("dombattr");var c=a[e];g=b(g,e);c!==g&&(a[e]=g,c&&k.each(c,function(a,b){m.removeAttr(a)}),g&&k.each(g,function(a,b){m.attr(a,b)}))}}};return{init:function(a){var b={$root:a,bindings:[]};a.find("[data-bind]").each(function(){k.each(d(this),
function(a,m){b.bindings.push(m)})});return b},update:function(a,b){k.each(a.bindings,function(a,m){m(b)})}}});a.when("jQuery").register("gwAjax",function(a){return function(l,d){function k(a,m,c){"object"===typeof b.ue&&"function"===typeof b.ue.count&&(h(d.errorCounter||"gwAjaxError"),d.id&&h("gwAjaxError:"+d.id));"function"===typeof b.ueLogError&&b.ueLogError({logLevel:"WARN",attribution:"gwAjax-"+(d.id||l),message:"gwAjax call failed "+(JSON&&JSON.stringify?JSON.stringify({url:l,"params-data":d.params||
d.data}):"")});"function"===typeof e&&e(a,m,c)}function h(a){"object"===typeof b.ue&&"function"===typeof b.ue.count&&b.ue.count(a,(b.ue.count(a)||0)+1)}d=a.extend(!0,{},d);var p=d.success,e=d.error;d.success=function(a,b,e){a.error?k(a,b,e):"function"===typeof p&&p(a,b,e)};d.error=k;d.data=d.params?d.params:d.data;h("gwAjaxCall");d.ajaxCounter&&h(d.ajaxCounter);return a.ajax(l,d)}});a.when("jQuery","gw-hud-punt").execute("gw-hud-sidekick",function(a){a("#gw-hud-grid").css({display:"none"})});
a.when("A","sg-jsutil","a-modal","gw-productdb","productdb-binding-helper","sg-media-builder","gw-sims","gw-popover-data").register("gw-popover",function(a,l,d,k,h,p,e,g){function m(a,q){b.uet&&b.uet(a,q,{wb:1})}function n(a){if(b.ue&&"function"===typeof b.ue.count)return b.ue.count(a)||0}function u(a){b.ue&&"function"===typeof b.ue.count&&b.ue.count(a,(b.ue.count(a)||0)+1)}function f(a){return a.closest("*[data-sgproduct]").data("sgproduct")}function y(a){a=a.closest(".shogun-widget");
return!a.length||a.hasClass("card-lite")?"/ah/ajax/product":"/gp/gw/ajax/pdb.html"}function x(a,b,q){r[a.asin]&&r[a.asin].isResolved()?C.resetSimData():(r[a.asin]=v.Deferred(),a&&a.asin&&b&&q?C.fetch(a,b,r[a.asin],q):r[a.asin].reject())}var v=a.$,w={},r={};if(!v("html").hasClass("a-touch")){l=v('<span style="display: none" />').appendTo("body");var q=v("#gw-popover-wrapper"),z=new h(k,q),A=d.create(l,{name:"gw-asin-popover",width:"90%","max-width":900,height:590,popoverLabel:g.popoverLabel,closeButton:!1}),
C=new e(z),B=v("#gw-quick-look-btn");v("#a-page").delegate("li[data-sgproduct]","mouseenter",function(a){a=v(a.currentTarget);a.closest(".deals-shoveler").length||(a.append(B),a.find("[title]").removeAttr("title"),B.addClass("active"))});B.mouseenter(function(){var a=v(this),b=y(a),q=f(a),a=a.siblings().children("a").attr("href");x(q,a,b)});v(".bestsellers .listRow a").mouseenter(function(){var a=v(this),b=y(a),q=f(a),a=a.attr("href");x(q,a,b);!q||!q.asin||w[q.asin]&&w[q.asin].isResolved()||!(b=k.get(q.asin))||
(w[q.asin]=v.Deferred(),w[q.asin].resolve(b))});var D={};v("#a-page").delegate(".fresh-shoveler li[data-sgproduct]","mouseenter mousemove",function(b){b=v(b.currentTarget);if(!b.closest(".deals-shoveler").length){var q=b.data("sgproduct").asin;if(!w[q]||!w[q].isResolved()){var e=[];b.add(b.prev("li[data-sgproduct]")).add(b.next("li[data-sgproduct]")).each(function(){var b=v(this).data("sgproduct");if(b&&b.asin){var q=k.get(b.asin),f=(q=!(!D[b.asin]&&q&&q.loading))&&1500<a.now()-D[b.asin];if(!q||f)e.push(b.asin),
D[b.asin]=a.now()}});w[q]=v.Deferred();e.length?(k._ajax('{"asins": ["'+e.join('","')+'"]}',{id:"quicklook-pdb"},{url:y(b)}).done(function(a){k._add(a);for(var b=0;b<e.length;b++)D[e[b]]=Infinity;w[q].resolve(a)}).fail(w[q].reject),u("freshHoverCount")):w[q].resolve()}}});v("#a-page").delegate("li[data-sgproduct]","mouseleave",function(a){v(a.currentTarget).closest(".deals-shoveler").length||B.removeClass("active")});var H="#a-popover-"+A.attrs("id")+" ";d=v.map([".a-popover-header { display: none; }",
".a-popover-inner { padding: 0px !important; margin: 0px !important; overflow: hidden !important; height: 100% !important; }"],function(a){return H+a}).join(" ");v("head").append("<style>"+d+"</style>");a.on("a:popover:hide:gw-asin-popover",function(a){b.history.state&&b.history.state.popup&&b.history.back();z.clear()});v(b).bind("popstate",function(){A.hide()});return{show:function(a,q){u("freshPopOverOn");m("bb","popoverLatency"+n("freshPopOverOn"));b.history&&b.history.pushState&&b.history.pushState({popup:1},
"");z.setAsin(a,{beforeUpdate:function(b){if(b.loading)return u("freshPopOverLoading"),b;var e=(new p(b.images[0])).autoCrop().scaleXY(500,400).build(),e={url:q,image:e,actionUrl:{action:"/gp/product/handle-buy-box/"+function(a){return a.substring(a.indexOf("/ref=")+1,a.length)}(q)}};b.reviews&&(e.reviews=v.extend({},b.reviews,{url:q+"#customerReviews"}));v.when(r[a],w[a]).done(function(b,q){C.showSims(a,b)});r[a].fail(C.setNoSimView);m("cf","popoverLatency"+n("freshPopOverOn"));return v.extend({},
b,e)}});A.show()},hide:function(){A.hide()}}}});a.when("jQuery","sg-media-builder","gw-productdb").register("gw-sims",function(c,l,d){return function(k){function h(a,q){b.uet&&b.uet(a,q,{wb:1})}function p(a){if(b.ue&&"function"===typeof b.ue.count)return b.ue.count(a)||0}function e(a){b.ue&&"function"===typeof b.ue.count&&b.ue.count(a,(b.ue.count(a)||0)+1)}function g(){if(!C){C=!0;H.hide();G.show();D.animate({height:"100%"},300);var a=0,q=0,e=0,f=parseInt(G.css("width"),10),g=G.find(".sims-img-link");
g.each(function(b,g){a+=g.clientWidth;f<a?c(g).hide():(q=a,e+=1)});var m=f-q;0<m&&(m=Math.floor(20+m/e-1),20<m&&g.css({"padding-right":m/2+"px","padding-left":m/2+"px"}));g="popoverLatency"+p("freshPopOverOn");h("be",g);b.uex&&b.uex("ld",g,{wb:1})}}function m(){0===--r&&g()}function n(a,b){var q=c("<a>"),g=c("<div>");q.attr("class","sims-img-link");g.addClass("sims-img-border");b&&q.addClass("selected");q.click(function(){e("freshPopOverSimsClick");G.find(".sims-img-link").removeClass("selected");
c(this).addClass("selected");k.clear();k.setAsin(a.asin,{beforeUpdate:function(b){b=c.extend(!0,{},a);var q=a.url;if(b.loading)e("freshPopOverLoading");else{var g=(new l(b.images[0])).autoCrop().scaleXY(500,400).build(),g={url:q,image:g,actionUrl:{action:"/gp/product/handle-buy-box/"+f(q)}};b.reviews&&(g.reviews=c.extend({},b.reviews,{url:q+"#customerReviews"}));b=c.extend({},b,g)}return b}})});return q.append(g)}function u(){c.each(q,function(a,b){b.url=b.url.replace(/ref=gw_pdb_pdt-[\d]+/,f(z)+
"&gw_sims-"+a)})}function f(a){return 0<=a.indexOf("redirect.html?")?a.replace(/.*redirect.html|(token|location)=.*?&/g,""):0<=a.indexOf("/ref=")?a.substring(a.indexOf("/ref=")+1,a.length):0<=a.indexOf("?")?a.substring(a.indexOf("?"),a.length):""}function y(){C=!1;u();var a=[];r=q.length>r?r:q.length;c(q).each(function(b,q){q.loading=!1;if(q.images[0].src){var e=(new l(q.images[0])).autoCrop().scaleXY(130,100).build().src,f=c("<img>");f.attr("src",e);f.attr("class","sims-img");f.load(m);e=c("<div>");
e.attr("class","sims-img-container");var g=c("<div>");g.addClass("sims-img-overlay");c(e).append(g);e.append(f);f=n(q,0===b);f.append(e);a.push(f)}return b<r-1});r=a.length;c(a).each(function(a,b){G.append(b)});setTimeout(g,A)}function x(){a.when("gw-popover").execute(function(a){a.hide()})}function v(){H.hide();D.addClass("hidden");B.bind("click",x)}function w(){G.empty();D.add(H).removeAttr("style");D.removeClass("hidden");B.unbind("click",x);H.show();G.hide();r=8;q=[]}var r,q,z,A=1E4,C=!1,B=c("#sims-section"),
D=B.find(".sims-wrapper"),H=B.find(".sims-loading"),G=B.find(".sims-details");c("#gw-asin-popover");return{fetch:function(a,b,e,f){h("af","popoverLatency"+p("freshPopOverOn"));w();z=b;a.url=z;q.push(a);b=d.get(a.asin);setTimeout(e.reject,A);b.sims?e.resolve(b.sims):d._ajax('{"asins": [], "entityId":"'+a.asin+'","datasetId": "purchase"}',{id:"quicklook-sims-pdb"},{url:f}).done(function(b){if(b&&b.p&&0<b.p.length){var q=a.asin,f=b.p;f&&(d.get(q).sims||d.addSims(q,f));return e.resolve(b.p)}return e.reject()}).fail(e.reject);
return e},setNoSimView:v,showSims:function(a,b){var f=d.get(a);f.loading?e("freshPopOverSimLoadBeforePrimeAsin"):q=f.sims?c.merge([f],f.sims):c.merge([f],b);4<q.length?y():(e("simsLessThanThreshold"),v())},resetSimData:w,setWaitPeriod:function(a){A=a}}}});a.when("A").execute(function(c){var l=c.$,d,k;if(!c.$("html").hasClass("a-touch"))if(b.cvox)b.ue&&b.ue.tag&&b.ue.tag("screenReaderOn");else{l("#a-page").delegate("*[data-sgproduct] #gw-quick-look-btn","click",function(a){l(a.target).closest(".deals-shoveler").length||
h(a)});l("#a-page").delegate(".bestseller-list *[data-sgproduct]","click",function(a){h(a)});a.when("gw-popover").execute(function(a){d=a;l("#gw-popover-close").click(function(){d.hide()});k&&d.show.apply(d,k)});var h=function(a){if(!(1<a.which||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey)){var b,g;l(a.target).parents(".bestseller-list").length?(b=l(a.currentTarget).data("sgproduct"),g=l(a.target).closest("a").attr("href")):(b=l("#gw-quick-look-btn").closest("*[data-sgproduct]").data("sgproduct"),
g=l("#gw-quick-look-btn").siblings().children("a").attr("href"));var m=[b.asin,g];b.asin&&g&&(a.preventDefault(),d?d.show.apply(d,m):k=m)}}}});a.when("A","sg-jsutil","dombinder").register("productdb-binding-helper",function(a,b,d){return function(a,c){function p(a,b){d.update(f,m(b.beforeUpdate,a));a.loading||m(b.load,a)}function e(a){g();u=function(){a(n)};n.pdb_observe(u)}function g(){n&&u&&(n.pdb_unobserve(u),u=null)}var m=b.safeCall,n=null,u=null,f=d.init(c);this.setAsin=function(b,
f){f=f||{};g();n=a.get(b);p(n,f);n.loading&&e(function(a){p(a,f)});return n};this.clear=function(){g();n={};d.update(f,n)}}});b.P&&a.when("jQuery","afterLoad").register("gw-resource-logger",function(a){return{instrumentResources:function(l){var d;d=!1;if(a.isArray(l)&&!a.isEmptyObject(l)){d=!0;for(var k=0;k<l.length;k++){var h=l[k];if("id"in h&&"regex"in h&&"initiator"in h){if(!("string"===typeof h.id&&"string"===typeof h.initiator&&h.regex instanceof RegExp)){d=!1;break}}else{d=!1;break}}}k=b.performance&&
"function"===typeof b.performance.getEntriesByType&&"undefined"!==typeof b.performance.getEntriesByType("resource")&&"undefined"!==typeof b.ue;if(d&&k){d=Array(l.length);for(k=0;k<d.length;k++)d[k]=!1;for(h=k=0;h<b.performance.getEntriesByType("resource").length&&k<l.length;h++)for(var p=b.performance.getEntriesByType("resource")[h],e=p.name,g=p.initiatorType,m=0;m<l.length;m++)if(!d[m]){var n=l[m].regex;if(g===l[m].initiator&&n.test(e)){e=l[m].id;g=p;p=g.duration;b.ue.count&&(b.ue.count(e+":duration",
p),b.ue.count(e+":startTime",g.startTime));b.ue.tag&&(g=void 0,g=50>p?e+":cached":e+":notCached",b.ue.tag(g));d[m]=!0;k++;break}}}}}});a.register("sg-media-builder",function(){return function(a){var b=this,d=a.src,k=[];b.build=function(){var b=k.join("_");return{src:d.replace(/\.([^.]+)$/,"._"+b+"_.$1"),alt:a.alt}};b.autoCrop=function(){k.push("AC");return b};b.scaleX=function(a){k.push("SX"+a);return b};b.scaleY=function(a){k.push("SY"+a);return b};b.upScaleX=function(a){k.push("UX"+
a);return b};b.upScaleY=function(a){k.push("UY"+a);return b};b.scaleXY=function(a,c){return b.upScaleX(a).scaleY(c)}}});a.when("jQuery","gwAjax").register("shogunProductDB",function(a,l){function d(b){var e=[];h[b]={loading:!0,pdb_observe:function(a){e.push(a)},pdb_unobserve:function(b){e=a.grep(e,function(a){return a!==b})},_trigger:function(){a.each(e,function(){this.call(h[b])})}};return h[b]}function k(p,e){this.ajaxUrl=p;this.experienceStr=e;this._add=function(b){b.p&&a.each(b.p,
function(b,e){if(e.asin){var g=h[e.asin]||d(e.asin);a.extend(g,e,{loading:!1,error:!1});g._trigger(e)}})};this.addSims=function(b,e){if(e){var l=h[b]||d(b);a.extend(l,{sims:e});l._trigger(b)}};this._ajax=function(g,m,n){n=n||{};g=a.extend(!0,{},p,{params:{sa:g,oe:e}},n);b.ue_id&&(g.params.rrid=b.ue_id);return l(g.url,{method:g.method,params:g.params,success:m.success,error:m.error,id:"gw-jslibs-"+m.id})};this.get=function(a){return a in h?h[a]:d(a)}}var h={};return function(a,b){return new k(a,b)}});
a.when("jQuery","p-detect").register("component-feed-carousel",function(c,l){var t=c.extend(!0,{},l);c.each({pointerPrefix:function(){return"onmspointerup"in document||"onpointerup"in document?"onpointerup"in document?"pointer":"MSPointer":!1},actionMode:function(){var a=t.capabilities.pointerPrefix;return a?a:t.capabilities.touch?"touch":"mouse"}},function(a,b){t.capabilities[a]=b()});var k={};c.each({start:{mouse:"down",touch:"start",pointer:"down",MSPointer:"Down"},end:{mouse:"up",
touch:"end",pointer:"up",MSPointer:"Up"}},function(a,b){var g=t.capabilities.actionMode,m="string"===typeof b?b:b[g];k[a]=m?g+m:b.mouse===d?"":"mouse"+b.mouse});t.action=k;var h=function(a,b,g,m){this.init(a,b,g,m)};h.prototype={init:function(l,e,g,m){var n=this;c("html").hasClass("a-touch")&&l.addClass("feed-carousel-touch");n.config=m||{};n.adjustMarginOnChange=!1!==n.config.adjustMarginOnChange;n.defaultCssRightMargin=null;n.minItems=e||10;n.imgClass=".product-image";n.$carousel=l;n.cfMinItems=
g||6;n.cfFired=!1;n.shovelerReadyFired=!1;n.slotId=n.getSlotId();n.touch=n.$carousel.hasClass("feed-carousel-touch");n.ajaxSource=n.$carousel.parent().hasClass("ajaxSource");n.$shelf=n.$carousel.find(".feed-carousel-shelf");n.$viewport=n.$carousel.find(".feed-carousel-viewport");n.$spinner=n.$carousel.find(".spinner");n.$left=c(".feed-carousel-control.feed-left",l);n.$right=c(".feed-carousel-control.feed-right",l);n.$buttons=c(".feed-carousel-control",l);n.$thumb=c(".feed-scrollbar-thumb",l);n.shelfLeft=
-1*parseInt(n.$shelf.css("left"),10);n.calcWidth=c("html").hasClass("a-lt-ie9");n.noOpacity=c("html").hasClass("a-lt-ie9");n.uniqueId=n.getUniqueId();n.$left.attr("aria-hidden",!0);n.$right.attr("aria-hidden",!0);n.bindEvents();n.$carousel.data("Carousel",n);n.$carousel.trigger("change");n.token=!1;n.lock=function(){n.token=!0};n.unlock=function(){n.token=!1};n.locked=function(){return n.token};a.when("gw-first-carousel").execute(function(){n.first=n.$carousel.hasClass("first-carousel");n.shouldControlsOn()?
n.showControls():n.hideControls()});n.uniqueId&&a.when(n.uniqueId).execute(function(a){n.appendCards(a.cards);if(a.cards&&n.slotId&&"object"===typeof b.ue&&"function"===typeof b.ue.count){var e="gw-"+n.slotId.toString()+"-lazy-cards",g="gw-"+n.slotId.toString()+"-lazy";b.ue.count(e,(b.ue.count(e)||0)+a.cards.length);b.ue.count(g,(b.ue.count(g)||0)+1)}})},getUniqueId:function(){if(this.$viewport){var a=this.$viewport.closest(".shogun-widget");return 0<a.length?c(a[0]).attr("id"):null}},getSlotId:function(){var a=
this.$carousel.closest(".gw-widget-instrument");return 0<a.length?c(a[0]).attr("id"):null},bindEvents:function(){function a(b){return t.capabilities.pointerPrefix&&-1<c.inArray(b.originalEvent.pointerType,[2,"touch"])||"touch"===t.capabilities.actionMode}var e=this,g=c("body");e.$buttons.ready(function(a){e.shovelerReadyFired||(e.slotId&&(a=e.slotId.toString()+"-active",b.GWI&&b.GWI.recordLatency(a),b.GWI&&b.GWI.register(a)),e.shovelerReadyFired=!0)});e.$carousel.change(function(a){e.updateItems();
e.updateSpinner();e.updateShelf();e.updateControls();null===e.defaultCssRightMargin&&e.$shelf.children("li").first()&&(a=parseInt(e.$shelf.children("li").first().css("margin-right"),10),e.defaultCssRightMargin=isNaN(a)?10:a);e.adjustMarginOnChange&&e.adjustCardMargin()});e.$left.click(function(a){a.preventDefault();e.changePage(-1);e.slotId&&e.logCounter("gw-"+e.slotId.toString()+"-left")});e.$right.click(function(a){a.preventDefault();e.changePage(1);e.slotId&&e.logCounter("gw-"+e.slotId.toString()+
"-right")});e.bindImageLoadEvents(e.$shelf);var m;c(b).resize(function(){clearTimeout(m);m=setTimeout(function(){var a=e.getDimensions(),a=Math.max(Math.min(a.shelfLeft,a.maxLeft),0);e.moveShelf(a)},100)});e.$thumb.mousedown(function(a){var b=a.clientX;1===a.which&&(a.preventDefault(),e.$carousel.addClass("scrolling"),g.bind("mousemove.feed-carousel",function(a){var g=e.getDimensions(),g=Math.max(Math.min(g.shelfLeft+1/g.pageRatio*(a.clientX-b),g.maxLeft),0);b=a.clientX;e.moveShelf(g)}),c(document).bind("selectstart.feed-carousel",
function(){return!1}))});g.add(b).mouseup(function(a){e.$carousel.removeClass("scrolling");e.$carousel.hasClass("hovering")||e.hideControls();g.unbind("mousemove.feed-carousel");c(document).unbind("selectstart.feed-carousel")});e.$carousel.hover(function(){e.$carousel.addClass("hovering");clearTimeout(e.hoverTimer);e.hoverTimer=setTimeout(function(){e.$carousel.hasClass("hovering")&&!e.$carousel.hasClass("touching")?e.showControls():e.$carousel.removeClass("touching")},300)},function(){e.$carousel.removeClass("hovering touching");
clearTimeout(e.hoverTimer);e.$carousel.hasClass("scrolling")||(e.hoverTimer=setTimeout(function(){e.$carousel.hasClass("hovering")||e.hideControls()},600))});e.$carousel.bind(t.action.start,function(b){a(b)&&(e.$carousel.addClass("touching"),clearTimeout(e.touchTimer),e.touchTimer=setTimeout(function(){e.$carousel.removeClass("touching")},5E3))});e.$carousel.bind(t.action.end,function(b){a(b)&&(e.$carousel.removeClass("touching"),clearTimeout(e.touchTimer),clearTimeout(e.hoverTimer))});e.$viewport.scroll(function(){e.shelfLeft=
e.$viewport.scrollLeft();e.updateControls()})},bindImageLoadEvents:function(a){var b=this;c(b.imgClass,a).one("load",function(){b.$carousel.trigger("change")})},getDimensions:function(){var a=this.$shelf.width(),b=this.shelfLeft,g=this.$carousel.width();return{pageWidth:g,shelfWidth:a,shelfLeft:b,pageRatio:g/a,leftRatio:b/a,maxLeft:a-g}},updateItems:function(){var a=this,e=a.$shelf.find(".feed-carousel-card"),g=function(a){return"none"===a.css("display")};e.each(function(e,l){var h=c(l);if(!g(h)&&
!a.config.visibleBeforeLoad)return!0;h.attr("aria-posinset",e+1);h.attr("aria-hidden",!1);h.attr("role","listitem");return 0>=h.find(a.imgClass).filter(function(){return!this.complete}).length?(h.css("display","inline-block"),e+1>=a.cfMinItems&&!a.cfFired&&(a.slotId&&(h=a.slotId.toString()+"-visible",b.GWI&&b.GWI.recordLatency(h),b.GWI&&b.GWI.register(h)),a.cfFired=!0),!0):!1});e.attr("aria-setsize",e.size());a.$items=e.filter(function(){return!g(c(this))})},updateShelf:function(){var a=0;this.calcWidth&&
(this.$shelf.children().each(function(){a+=c(this).outerWidth(!0)}),this.$shelf.width(a));this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems&&this.ajaxSource?this.$spinner.show():(this.size()<this.minItems&&"object"===typeof b.ue&&"function"===typeof b.ue.count&&b.ue.count("shovelerNotEnoughItem",(b.ue.count("shovelerNotEnoughItem")||0)+1),this.$spinner.hide())},updateControls:function(){this.updateArrows();
this.updateScrollThumb()},shouldControlsOn:function(){return this.first&&!this.touch},showControls:function(a){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:a,queue:!1})},hideControls:function(a){var b=this.$thumb;this.shouldControlsOn()||(b=b.add(this.$buttons));b.stop(!0,!0).fadeOut({duration:300,complete:a,queue:!1})},appendCards:function(a){this.$shelf.append(a);this.bindImageLoadEvents(a);this.$carousel.trigger("change")},updateArrows:function(){var a=this,b=a.getDimensions();
c.each([{$e:a.$left,enabled:0<b.shelfLeft},{$e:a.$right,enabled:b.shelfLeft<b.maxLeft}],function(b,e){var l=e.$e;e.enabled?l.removeClass("feed-control-disabled"):l.addClass("feed-control-disabled");a.noOpacity&&(e.enabled?l.css("opacity","1"):l.css("opacity","0.5"))})},updateScrollThumb:function(){var a=this.getDimensions(),b=a.leftRatio*a.pageWidth,a=Math.min(a.pageRatio*a.pageWidth,a.pageWidth);this.$thumb.width(a).each(function(){c(this).animate({left:b},0)})},logCounter:function(a){"object"===
typeof b.ue&&"function"===typeof b.ue.count&&(b.ue.count(a,(b.ue.count(a)||0)+1),b.ue.count("gw-shoveler-click",1))},changePage:function(a){var b=this.getDimensions(),g=this.alignWithItem(b.shelfLeft+a*b.pageWidth),g=Math.min(0>a?g.right:g.left,b.maxLeft);this.locked()||(this.lock(),b.shelfLeft===g?(this.bounce(this.$shelf,-30*a),this.bounce(this.$thumb,6*a)):this.moveShelf(g,400))},moveShelf:function(a,b){function g(){m.updateArrows();m.unlock()}var m=this;b=b||0;m.shelfLeft=a;if(m.touch)m.$viewport.animate({scrollLeft:a},
b,"swing",g);else{var l=m.getDimensions(),l=a/l.shelfWidth*l.pageWidth;m.$shelf.animate({left:-a},b,"swing",g);m.$thumb.animate({left:l},b,"swing",function(){m.updateScrollThumb();m.unlock()})}},getItems:function(){return this.$items},size:function(){return this.getItems().length},alignWithItem:function(a){if(0>a)return{left:0,right:0};var b=this,g=b.getItems(),m=g.map(function(){var g=b.cardPosition(c(this));if(a>=g.left&&a<=g.right)return g}).get(0);return m?m:b.cardPosition(g.last())},cardPosition:function(a){var b=
(a.position()||{left:0,right:0}).left;a=b+a.outerWidth(!0);return{left:b,right:a}},bounce:function(a,b){function g(a){var b={};b[m.touch?"left":"marginLeft"]=a;return b}var m=this;a.each(function(){var a=c(this);a.animate(g(b),400,"swing",function(){a.animate(g(0),100,"swing",m.unlock)})})},setCardMargin:function(a){this.$shelf.children("li").first()&&this.$shelf.children("li").first().css("margin-right")!==a+"px"&&(this.$shelf.children("li").css("margin-right",a+"px"),this.updateShelf())},adjustCardMargin:function(a){a=
a===d||null===a?this.defaultCssRightMargin:a;this.setCardMargin(a);var b=this.getDimensions(),b=0>b.maxLeft?Math.ceil(-b.maxLeft/this.size()):a;this.setCardMargin(b<a?a:b)}};return{createCarousel:function(a,b,g,m){c(a).each(function(a,l){var f=c(l);new h(f,b,g,m)})}}});a.when("jQuery","SafeP").execute("shoveler-lazy-non-visible-images",function(c,l){function d(a){"object"===typeof h.ue&&"function"===typeof h.ue.count&&h.ue.count(a,(h.ue.count(a)||0)+1)}function k(){h.GWData&&c.each(h.GWData,
function(a,b){if(a&&b&&b.data&&!b.loaded){b.loaded=!0;d("gw-lazy-load-all");var g=[];c.each(b.data,function(a,b){c.each(c(b),function(a,b){g.push(b)})});g&&0<g.length&&d("gw-lazy-load-non-empty");l&&l.register(a,function(){return{cards:g}})}})}var h=b;a.when("x1").execute(k);a.when("ready").execute(k);a.when("load").execute(k)});a.register("SafeP",function(){var b={};return{register:function(l,d){"string"===typeof l&&"function"===typeof d&&(b[l]||(b[l]=function(l,h){a.register(l,h);b[l]=
function(){}}),b[l]&&b[l](l,d))}}});a.when("A").register("resizeable-inline-video",function(c){function l(a,b){"function"===typeof h.uet&&b&&h.uet(a,b,{wb:1})}function d(a,b){"function"===typeof h.uex&&b&&h.uex(a,b,{wb:1})}var k=c.$,h=b;return function(b,e,g){function m(){C.removeClass("player-uncommenced viewport-loaded").addClass("viewport-loading player-loading");r.css("z-index",1).css("opacity",1);l("tc","airyInlineVideoLoadingMonitor");l("tc",g.loadingScope);l("bb","airyInlineVideoPlaybackMonitor");
l("bb",g.playbackScope)}function n(a){a=a||{};return{play:a.play||B,stop:a.stop||B,resize:a.resize||B,airyReady:a.airyReady||B}}function u(){return new n({airyReady:function(a){m();D=new y(a);D.play()},stop:function(){var a;a=B;w.removeClass("viewport-loading").addClass("viewport-loaded");r.css("z-index",-1).css("opacity",0);z.length&&q.hide();a()}})}function f(a){return new n({play:function(){D=new y(a);q.fadeOut(1E3,function(){q.css("display","block");q.css("visibility","hidden");m();D.play()})}})}
function y(a){return new n({play:function(){A.removeClass("viewport-loading").addClass("viewport-loaded");C.removeClass("player-loading");l("be","airyInlineVideoLoadingMonitor");l("be",g.loadingScope);d("ld","airyInlineVideoLoadingMonitor");d("ld",g.loadingScope);D=new x(a)}})}function x(a){return new n({stop:function(){D=new v(a);a.pause()}})}function v(a){return new n({})}var w=k(b),r=w.find(".airy-video-container"),q=w.find(".image-map-before"),z=w.find(".image-map-after"),A=w.find(".airy-video-viewport-in"),
C=w.add(A),B=function(){},D;g=g||{};l("bb","airyInlineVideoLoadingMonitor");l("bb",g.loadingScope);D=new function(b){function q(a){function b(a){"object"===typeof h.ue&&"function"===typeof h.ue.count&&h.ue.count(a,(h.ue.count(a)||0)+1)}e.bindings={loadedmetadata:function(a,b){D.airyReady(f);l("cf","airyInlineVideoLoadingMonitor");l("cf",g.loadingScope)},videounsupportederror:function(a,q){b("airyResizableInlineVideoUnsupportedError")},decodeerror:function(a,q){b("airyResizableInlineVideoDecodeError")},
networkerror:function(a,q){b("airyResizableInlineVideoNetworkError")},undefinederror:function(a,q){b("airyResizableInlineVideoUndefinedError")},beganplaying:function(){D.play()},ended:function(){l("af","airyInlineVideoPlaybackMonitor");l("af",g.playbackScope);D.stop()}};var f=a.embed(e);g.autoPlay&&f.play({isAsync:!0})}b=b||{};h.gwAiryAssetLoaded||(h.gwAiryAssetLoaded=b,b.js&&a.load.js(b.js),b.css&&a.load.css(b.css));C.addClass("player-uncommenced");g.whenReady?a.when("Airy","ready").execute(q):a.when("Airy").execute(q);
return new n({airyReady:function(a){D=new f(a);D.play()},play:function(){D=new u}})}(g.airyAssetUrls);(function(){c.on("resize",function(){D.resize()})})()}});a.when("A").register("gw-count-down",function(a){return function(b,d,k,h,p){function e(a){a=a||{};return{update:a.update||x.noop,count:a.count||x.noop,transition:a.transition||x.noop}}function g(b,q){return e({update:function(){y(b);a.trigger(q)}})}function m(){z=p.starts_in;return e({update:function(){a.trigger(H);y(A)},transition:function(){F=
g(p.started,B);F.update()},count:function(){q=setInterval(function(){d=w-Date.now();u(d,p.starts_in_timer)},1E3)}})}function n(){z=p.ends_in;return e({update:function(){y(A)},transition:function(){F=g(p.has_ended,C);F.update()},count:function(){q=setInterval(function(){k=r-Date.now();u(k,p.ends_in_timer)},1E3)}})}function u(a,b){var e,g,m;e=Math.floor(a/36E5);g=Math.floor(a/1E3/60%60);m=Math.floor(a/1E3%60);var l=A,c;c=z+" "+f(e)+f(g,!0,!0)+f(m,!1,!0);l.timerString=c;l=A;e=b?b.replace("_hours_",e).replace("_minutes_",
g).replace("_seconds_",m):"";l.readoutString=e;y(A);0>=a&&(clearInterval(q),F.transition())}function f(a,b,q){var e="";if(0<a||q)e=("0"+a).slice(-2);if(!q&&0<a||b)e+=":";return e}function y(b){b.readoutString?A=b:(A.readoutString=b,A.timerString=b);a.trigger(D,A)}d=parseInt(d,10);k=parseInt(k,10);h=JSON.parse(h);var x=a.$,v=Date.now(),w=v+d,r=v+k,q,z="",A={timerString:"",readoutString:""},C=b+"ended",B=b+"started",D=b+"updateTimer",H=b+"countingDown",G=b+"soldOut",F=function(){return e({update:function(){if(h&&
h.dealState){var a=h.dealState.toUpperCase();F="AVAILABLE"===a&&86400<k/1E3?g(""):-1<a.indexOf("WAITLIST")?g(p.on_waitlist):"SOLDOUT"===a?g(p.sold_out,G):0<d?m():0<k?n():g(p.has_ended,C)}F.update();F.count()}})}();F.update();a.on(b,function(){F.update()})}})});

}
/*
     FILE ARCHIVED ON 00:12:36 Mar 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:12:57 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 70.173
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.082
  cdx.remote: 0.08
  esindex: 0.016
  LoadShardBlock: 35.761 (3)
  PetaboxLoader3.datanode: 49.169 (4)
  load_resource: 67.81
  PetaboxLoader3.resolve: 27.727
*/