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

(function(e){var c=window.AmazonUIPageJS||window.P,l=c._namespace||c.attributeErrors,a=l?l("AmazonGatewayAuiAssets"):c;a.guardFatal?a.guardFatal(e)(a,window):a.execute(function(){e(a,window)})})(function(e,c,l){e.when("A").register("sg-jsutil",function(a){var c=a.$;return{safeCall:function(a,h){return c.isFunction(a)?a(h):h}}});e.when("A","load").execute("ah-inst-img-size",function(a){function p(b){if(!b)return null;var d=f(b).attr("src");b=f(b).data("a-hires");return d===b?null:d}function m(b){"object"===
typeof q.ue&&"function"===typeof q.ue.count&&q.ue&&q.ue.count(b,(q.ue.count(b)||0)+1)}function h(b,d){m("gw-img-size-invoke");f.ajax({type:"HEAD",async:!0,url:b,success:function(b,f,k){m("gw-img-size-success");a.trigger(d,parseInt(k.getResponseHeader("Content-Length"),10))},error:function(b,d,f){m("gw-img-size-error")}})}function g(b,d){0<b.length&&(t[d]={count:b.length,totalSize:0,images:b},f(t[d].images).each(function(b,f){var k=d+"_"+b;a.on(k,function(b){isNaN(b)||(--t[d].count,t[d].totalSize+=
b,0===t[d].count&&q.ue&&q.ue.count(d,t[d].totalSize))});h(f,k)}))}function k(b,d){var f=a.$(b);(f=0>=f.length?null:p(f[0]))&&g([f],d)}function b(b,d){d=d||b.length;var k=[];f(b.slice(0,d)).each(function(b,d){var f=p(d);if(!f)return[];k.push(f)});return k}var f=a.$,q=c,t=[];e.execute("inst-cf-img",function(){m("gw-inst-img");k(".gw-critical-content img","gw-cf-img-size")});e.when("x1").execute("inst-x1-img",function(){e.execute("inst-x1-rec-img",function(){var k=1;f("#gw-content-grid .feed-carousel .feed-carousel-shelf").slice(0,
2).each(function(d,a){if(2>=k){var q="gw-shoveler-img-size-"+k++,h=f(a).find("img");6<=h.length&&(h=b(h,6),g(h,q))}})});e.execute("inst-x1-unrec-img",function(){var f=a.$("#desktop-unrec-col-2 img"),f=b(f);g(f,"gw-dpt-img-size");k("#desktop-unrec-col-3 .image-map-before img","gw-slate-img-size");k("#desktop-unrec-sidekick #dotd-image img","gw-dotd-img-size")})})});e.when("A").register("dombinder",function(a){function c(k,b){var f=0;b=b.split(".");for(var a=b.length;f<a;f++)k=k&&k[b[f]];
return k}function e(k){return h.map(h(k).data("bind").split(","),function(b){b=b.split(":");var f=h.trim(b[0]),a=h.trim(b[1]),t=g[f];if(t)return t.init&&t.init(k,a),function(b){t.update(k,a,b)}})}var h=a.$,g={text:{update:function(k,b,f){h(k).text(c(f,b)||"")}},html:{update:function(k,b,f){h(k).html(c(f,b)||"")}},href:{update:function(k,b,f){h(k).attr("href",c(f,b)||"")}},trimText:{update:function(k,b,f){k=h(k);f=k.text();if(f.length>b){for(var a=b-4;0<=a&&0<"[.,-/#!$%^&*;:{}=-_`~()] ".indexOf(f[a]);)a--;
k.text(f.substring(0,0<=a?a+1:b-3)+"...")}}},value:{update:function(k,b,f){h(k).val(c(f,b)||"")}},visible:{update:function(k,b,f){var a=!1;"!"===b.charAt(0)&&(a=!0,b=b.substring(1));b=!!c(f,b);a!==b?h(k).show():h(k).hide()}},css:{init:function(k,b){var f=h(k),a=f.data("dombcss")||[];a[b]="";f.data("dombcss",a)},update:function(k,b,f){k=h(k);var a=k.data("dombcss"),g=a[b];f=c(f,b);g!==f&&(a[b]=f,g&&k.removeClass(g),f&&k.addClass(f))}},attr:{init:function(k,b){var f=h(k),a=f.data("dombattr")||[];a[b]=
{};f.data("dombattr",a)},update:function(k,b,f){var a=h(k);k=a.data("dombattr");var g=k[b];f=c(f,b);g!==f&&(k[b]=f,g&&h.each(g,function(b,d){a.removeAttr(b)}),f&&h.each(f,function(b,d){a.attr(b,d)}))}}};return{init:function(k){var b={$root:k,bindings:[]};k.find("[data-bind]").each(function(){h.each(e(this),function(f,k){b.bindings.push(k)})});return b},update:function(k,b){h.each(k.bindings,function(f,k){k(b)})}}});e.when("jQuery").register("gwAjax",function(a){return function(p,e){function h(f,
k,a){"object"===typeof c.ue&&"function"===typeof c.ue.count&&(g(e.errorCounter||"gwAjaxError"),e.id&&g("gwAjaxError:"+e.id));"function"===typeof c.ueLogError&&c.ueLogError({logLevel:"WARN",attribution:"gwAjax-"+(e.id||p),message:"gwAjax call failed "+(JSON&&JSON.stringify?JSON.stringify({url:p,"params-data":e.params||e.data}):"")});"function"===typeof b&&b(f,k,a)}function g(b){"object"===typeof c.ue&&"function"===typeof c.ue.count&&c.ue.count(b,(c.ue.count(b)||0)+1)}e=a.extend(!0,{},e);var k=e.success,
b=e.error;e.success=function(b,a,g){b.error?h(b,a,g):"function"===typeof k&&k(b,a,g)};e.error=h;e.data=e.params?e.params:e.data;g("gwAjaxCall");e.ajaxCounter&&g(e.ajaxCounter);return a.ajax(p,e)}});e.when("jQuery","gw-hud-punt").execute("gw-hud-sidekick",function(a){a("#gw-hud-grid").css({display:"none"})});e.when("A","sg-jsutil","a-modal","gw-productdb","productdb-binding-helper","sg-media-builder","gw-sims","gw-popover-data").register("gw-popover",function(a,p,m,h,g,k,
b,f){function q(b,d){c.uet&&c.uet(b,d,{wb:1})}function t(b){if(c.ue&&"function"===typeof c.ue.count)return c.ue.count(b)||0}function v(b){c.ue&&"function"===typeof c.ue.count&&c.ue.count(b,(c.ue.count(b)||0)+1)}function d(b){return b.closest("*[data-sgproduct]").data("sgproduct")}function x(b,d){y[b.asin]&&y[b.asin].isResolved()?A.resetSimData():(y[b.asin]=u.Deferred(),b&&b.asin&&d?A.fetch(b,d,y[b.asin]):y[b.asin].reject())}var u=a.$,l={},y={};if(!u("html").hasClass("a-touch")){p=u('<span style="display: none" />').appendTo("body");
var r=u("#gw-popover-wrapper"),n=new g(h,r),z=m.create(p,{name:"gw-asin-popover",width:"90%","max-width":900,height:590,popoverLabel:f.popoverLabel,closeButton:!1}),A=new b(n),E=u("#gw-quick-look-btn");u("#a-page").delegate("li[data-sgproduct]","mouseenter",function(b){u(b.currentTarget).append(E);u(b.currentTarget).find("[title]").removeAttr("title");E.addClass("active")});E.mouseenter(function(){var b=u(this),f=d(b),b=b.siblings().children("a").attr("href");x(f,b)});u(".bestsellers .listRow a").mouseenter(function(){var b=
u(this),f=d(b),b=b.attr("href");x(f,b);!f||!f.asin||l[f.asin]&&l[f.asin].isResolved()||!(b=h.get(f.asin))||(l[f.asin]=u.Deferred(),l[f.asin].resolve(b))});e.when("gwAjax").execute(function(b){var d={};u("#a-page").delegate(".fresh-shoveler li[data-sgproduct]","mouseenter mousemove",function(f){f=u(f.currentTarget);var n=f.data("sgproduct").asin;if(!l[n]||!l[n].isResolved()){var r=[];f.add(f.prev("li[data-sgproduct]")).add(f.next("li[data-sgproduct]")).each(function(){var b=u(this).data("sgproduct");
if(b&&b.asin){var f=h.get(b.asin),n=(f=!(!d[b.asin]&&f&&f.loading))&&1500<a.now()-d[b.asin];if(!f||n)r.push(b.asin),d[b.asin]=a.now()}});l[n]=u.Deferred();r.length?(b("/gp/gw/ajax/pdb.html",{id:"quicklook-pdb",data:{swn:"productdb-ajax",sa:'{"asins": ["'+r.join('","')+'"]}',oe:'{"isDesktop":1,"isTablet":0,"isMobile":0}',rrid:c.ue_id}}).done(function(b){h._add(b);for(var f=0;f<r.length;f++)d[r[f]]=Infinity;l[n].resolve(b)}).fail(l[n].reject),v("freshHoverCount")):l[n].resolve()}})});u("#a-page").delegate("li[data-sgproduct]",
"mouseleave",function(b){E.removeClass("active")});var C="#a-popover-"+z.attrs("id")+" ";m=u.map([".a-popover-header { display: none; }",".a-popover-inner { padding: 0px !important; margin: 0px !important; overflow: hidden !important; height: 100% !important; }"],function(b){return C+b}).join(" ");u("head").append("<style>"+m+"</style>");a.on("a:popover:hide:gw-asin-popover",function(b){c.history.state&&c.history.state.popup&&c.history.back();n.clear()});u(c).bind("popstate",function(){z.hide()});
return{show:function(b,d){v("freshPopOverOn");q("bb","popoverLatency"+t("freshPopOverOn"));c.history&&c.history.pushState&&c.history.pushState({popup:1},"");n.setAsin(b,{beforeUpdate:function(f){if(f.loading)return v("freshPopOverLoading"),f;var n=(new k(f.images[0])).autoCrop().scaleXY(500,400).build(),n={url:d,image:n,actionUrl:{action:"/gp/product/handle-buy-box/"+function(b){return b.substring(b.indexOf("/ref=")+1,b.length)}(d)}};f.reviews&&(n.reviews=u.extend({},f.reviews,{url:d+"#customerReviews"}));
u.when(y[b],l[b]).done(function(d,f){A.showSims(b,d)});y[b].fail(A.setNoSimView);q("cf","popoverLatency"+t("freshPopOverOn"));return u.extend({},f,n)}});z.show()},hide:function(){z.hide()}}}});e.when("A","sg-media-builder","gw-productdb").register("gw-sims",function(a,p,m){var h=a.$;return function(a){function k(b,d){c.uet&&c.uet(b,d,{wb:1})}function b(b){if(c.ue&&"function"===typeof c.ue.count)return c.ue.count(b)||0}function f(b){c.ue&&"function"===typeof c.ue.count&&c.ue.count(b,(c.ue.count(b)||
0)+1)}function q(){if(!C){C=!0;I.hide();w.show();H.animate({height:"100%"},300);var d=0,f=0,n=0,r=parseInt(w.css("width"),10),a=w.find(".sims-img-link");a.each(function(b,a){d+=a.clientWidth;r<d?h(a).hide():(f=d,n+=1)});var q=r-f;0<q&&(q=Math.floor(20+q/n-1),20<q&&a.css({"padding-right":q/2+"px","padding-left":q/2+"px"}));a="popoverLatency"+b("freshPopOverOn");k("be",a);c.uex&&c.uex("ld",a,{wb:1})}}function t(){0===--n&&q()}function v(b,d){var n=h("<a>"),r=h("<div>");n.attr("class","sims-img-link");
r.addClass("sims-img-border");d&&n.addClass("selected");n.click(function(){f("freshPopOverSimsClick");w.find(".sims-img-link").removeClass("selected");h(this).addClass("selected");a.clear();a.setAsin(b.asin,{beforeUpdate:function(d){d=h.extend(!0,{},b);var n=b.url;if(d.loading)f("freshPopOverLoading");else{var r=(new p(d.images[0])).autoCrop().scaleXY(500,400).build(),r={url:n,image:r,actionUrl:{action:"/gp/product/handle-buy-box/"+x(n)}};d.reviews&&(r.reviews=h.extend({},d.reviews,{url:n+"#customerReviews"}));
d=h.extend({},d,r)}return d}})});return n.append(r)}function d(){h.each(z,function(b,d){d.url=d.url.replace(/ref=gw_pdb_pdt-[\d]+/,x(A)+"&gw_sims-"+b)})}function x(b){return 0<=b.indexOf("redirect.html?")?b.replace(/.*redirect.html|(token|location)=.*?&/g,""):b.substring(b.indexOf("/ref=")+1,b.length)}function u(){C=!1;d();var b=[];n=z.length>n?n:z.length;h(z).each(function(d,f){f.loading=!1;if(f.images[0].src){var r=(new p(f.images[0])).autoCrop().scaleXY(130,100).build().src,a=h("<img>");a.attr("src",
r);a.attr("class","sims-img");a.load(t);r=h("<div>");r.attr("class","sims-img-container");var k=h("<div>");k.addClass("sims-img-overlay");h(r).append(k);r.append(a);a=v(f,0===d);a.append(r);b.push(a)}return d<n-1});n=b.length;h(b).each(function(b,d){w.append(d)});setTimeout(q,E)}function l(){e.when("gw-popover").execute(function(b){b.hide()})}function y(){I.hide();H.addClass("hidden");D.bind("click",l)}function r(){w.empty();H.add(I).removeAttr("style");H.removeClass("hidden");D.unbind("click",l);
I.show();w.hide();n=8;z=[]}var n,z,A,E=1E4,C=!1,D=h("#sims-section"),H=D.find(".sims-wrapper"),I=D.find(".sims-loading"),w=D.find(".sims-details");h("#gw-asin-popover");return{fetch:function(d,f,n){k("af","popoverLatency"+b("freshPopOverOn"));r();A=f;d.url=A;z.push(d);f=m.get(d.asin);setTimeout(n.reject,E);f.sims?n.resolve(f.sims):e.when("gwAjax").execute(function(b){b("/gp/gw/ajax/pdb.html",{id:"quicklook-sims-pdb",data:{swn:"productdb-ajax",sa:'{"asins": [], "entityId":"'+d.asin+'","datasetId": "purchase"}',
oe:'{"isDesktop":1,"isTablet":0,"isMobile":0}',rrid:c.ue_id}}).done(function(b){if(b&&b.p&&0<b.p.length){var f=d.asin,r=b.p;r&&(m.get(f).sims||m.addSims(f,r));return n.resolve(b.p)}return n.reject()}).fail(n.reject)});return n},setNoSimView:y,showSims:function(b,d){var n=m.get(b);n.loading?f("freshPopOverSimLoadBeforePrimeAsin"):z=n.sims?h.merge([n],n.sims):h.merge([n],d);4<z.length?u():(f("simsLessThanThreshold"),y())},resetSimData:r,setWaitPeriod:function(b){E=b}}}});e.when("A").execute(function(a){var p=
a.$,m,h;if(!a.$("html").hasClass("a-touch"))if(c.cvox)c.ue&&c.ue.tag&&c.ue.tag("screenReaderOn");else{p("#a-page").delegate("*[data-sgproduct] #gw-quick-look-btn","click",function(a){g(a)});p("#a-page").delegate(".bestseller-list *[data-sgproduct]","click",function(a){g(a)});e.when("gw-popover").execute(function(a){m=a;p("#gw-popover-close").click(function(){m.hide()});h&&m.show.apply(m,h)});var g=function(a){if(!(1<a.which||a.shiftKey||a.altKey||a.metaKey||a.ctrlKey)){var b,f;p(a.target).parents(".bestseller-list").length?
(b=p(a.currentTarget).data("sgproduct"),f=p(a.target).closest("a").attr("href")):(b=p("#gw-quick-look-btn").closest("*[data-sgproduct]").data("sgproduct"),f=p("#gw-quick-look-btn").siblings().children("a").attr("href"));var q=[b.asin,f];b.asin&&f&&(a.preventDefault(),m?m.show.apply(m,q):h=q)}}}});e.when("A","sg-jsutil","dombinder").register("productdb-binding-helper",function(a,c,e){return function(a,g){function k(b,f){e.update(d,q(f.beforeUpdate,b));b.loading||q(f.load,b)}function b(b){f();
v=function(){b(t)};t.pdb_observe(v)}function f(){t&&v&&(t.pdb_unobserve(v),v=null)}var q=c.safeCall,t=null,v=null,d=e.init(g);this.setAsin=function(d,q){q=q||{};f();t=a.get(d);k(t,q);t.loading&&b(function(b){k(b,q)});return t};this.clear=function(){f();t={};e.update(d,t)}}});c.P&&e.when("jQuery","afterLoad").register("gw-resource-logger",function(a){return{instrumentResources:function(e){var m;m=!1;if(a.isArray(e)&&!a.isEmptyObject(e)){m=!0;for(var h=0;h<e.length;h++){var g=e[h];if("id"in g&&"regex"in
g&&"initiator"in g){if(!("string"===typeof g.id&&"string"===typeof g.initiator&&g.regex instanceof RegExp)){m=!1;break}}else{m=!1;break}}}h=c.performance&&"function"===typeof c.performance.getEntriesByType&&"undefined"!==typeof c.performance.getEntriesByType("resource")&&"undefined"!==typeof c.ue;if(m&&h){m=Array(e.length);for(h=0;h<m.length;h++)m[h]=!1;for(g=h=0;g<c.performance.getEntriesByType("resource").length&&h<e.length;g++)for(var k=c.performance.getEntriesByType("resource")[g],b=k.name,f=
k.initiatorType,q=0;q<e.length;q++)if(!m[q]){var t=e[q].regex;if(f===e[q].initiator&&t.test(b)){b=e[q].id;f=k;k=f.duration;c.ue.count&&(c.ue.count(b+":duration",k),c.ue.count(b+":startTime",f.startTime));c.ue.tag&&(f=void 0,f=50>k?b+":cached":b+":notCached",c.ue.tag(f));m[q]=!0;h++;break}}}}}});e.register("sg-media-builder",function(){return function(a){var c=this,e=a.src,h=[];c.build=function(){var g=h.join("_");return{src:e.replace(/\.([^.]+)$/,"._"+g+"_.$1"),alt:a.alt}};c.autoCrop=
function(){h.push("AC");return c};c.scaleX=function(a){h.push("SX"+a);return c};c.scaleY=function(a){h.push("SY"+a);return c};c.upScaleX=function(a){h.push("UX"+a);return c};c.upScaleY=function(a){h.push("UY"+a);return c};c.scaleXY=function(a,k){return c.upScaleX(a).scaleY(k)}}});e.when("A","gwAjax").register("shogunProductDB",function(a,e){function m(k){var b=[];g[k]={loading:!0,pdb_observe:function(f){b.push(f)},pdb_unobserve:function(f){b=a.$.grep(b,function(b){return b!==f})},_trigger:function(){a.$.each(b,
function(){this.call(g[k])})}};return g[k]}function h(k,b){this.ajaxUrl=k;this.experienceStr=b;this._add=function(b){b.p&&a.$.each(b.p,function(b,f){if(f.asin){var k=g[f.asin]||m(f.asin);a.$.extend(k,f,{loading:!1,error:!1});k._trigger(f)}})};this.addSims=function(b,k){if(k){var h=g[b]||m(b);a.$.extend(h,{sims:k});h._trigger(b)}};this._ajax=function(f,q){var g=a.$.extend(!0,{},k,{params:{sa:JSON.stringify(f),oe:b}});c.ue_sid&&(g.url+="/"+c.ue_sid);c.ue_id&&(g.params.rrid=c.ue_id);return e(g.url,{method:g.method,
params:g.params,success:q.success,error:q.error,id:"gw-jslibs-"+q.id})};this.get=function(b){return b in g?g[b]:m(b)}}var g={};return function(a,b){return new h(a,b)}});e.when("jQuery","p-detect").register("component-feed-carousel",function(a,p){var m=a.extend(!0,{},p);a.each({pointerPrefix:function(){return"onmspointerup"in document||"onpointerup"in document?"onpointerup"in document?"pointer":"MSPointer":!1},actionMode:function(){var a=m.capabilities.pointerPrefix;return a?a:m.capabilities.touch?
"touch":"mouse"}},function(a,b){m.capabilities[a]=b()});var h={};a.each({start:{mouse:"down",touch:"start",pointer:"down",MSPointer:"Down"},end:{mouse:"up",touch:"end",pointer:"up",MSPointer:"Up"}},function(a,b){var f=m.capabilities.actionMode,q="string"===typeof b?b:b[f];h[a]=q?f+q:b.mouse===l?"":"mouse"+b.mouse});m.action=h;var g=function(a,b,f,q){this.init(a,b,f,q)};g.prototype={init:function(k,b,f,q){var g=this;a("html").hasClass("a-touch")&&k.addClass("feed-carousel-touch");g.adjustMarginOnChange=
!0;g.defaultCssRightMargin=null;g.minItems=b||10;g.imgClass=".product-image";g.config=q||{};g.$carousel=k;g.cfMinItems=f||6;g.cfFired=!1;g.shovelerReadyFired=!1;g.slotId=g.getSlotId();g.touch=g.$carousel.hasClass("feed-carousel-touch");g.ajaxSource=g.$carousel.parent().hasClass("ajaxSource");g.$shelf=g.$carousel.find(".feed-carousel-shelf");g.$viewport=g.$carousel.find(".feed-carousel-viewport");g.$spinner=g.$carousel.find(".spinner");g.$left=a(".feed-carousel-control.feed-left",k);g.$right=a(".feed-carousel-control.feed-right",
k);g.$buttons=a(".feed-carousel-control",k);g.$thumb=a(".feed-scrollbar-thumb",k);g.shelfLeft=-1*parseInt(g.$shelf.css("left"),10);g.calcWidth=a("html").hasClass("a-lt-ie9");g.noOpacity=a("html").hasClass("a-lt-ie9");g.uniqueId=g.getUniqueId();g.$left.attr("aria-hidden",!0);g.$right.attr("aria-hidden",!0);g.bindEvents();g.$carousel.data("Carousel",g);g.$carousel.trigger("change");g.token=!1;g.lock=function(){g.token=!0};g.unlock=function(){g.token=!1};g.locked=function(){return g.token};e.when("gw-first-carousel").execute(function(){g.first=
g.$carousel.hasClass("first-carousel");g.shouldControlsOn()?g.showControls():g.hideControls()});g.uniqueId&&e.when(g.uniqueId).execute(function(b){g.appendCards(b.cards);if(b.cards&&g.slotId&&"object"===typeof c.ue&&"function"===typeof c.ue.count){var d="gw-"+g.slotId.toString()+"-lazy-cards",f="gw-"+g.slotId.toString()+"-lazy";c.ue.count(d,(c.ue.count(d)||0)+b.cards.length);c.ue.count(f,(c.ue.count(f)||0)+1)}})},getUniqueId:function(){if(this.$viewport){var k=this.$viewport.closest(".shogun-widget");
return 0<k.length?a(k[0]).attr("id"):null}},getSlotId:function(){var k=this.$carousel.closest(".gw-widget-instrument");return 0<k.length?a(k[0]).attr("id"):null},bindEvents:function(){function k(b){return m.capabilities.pointerPrefix&&-1<a.inArray(b.originalEvent.pointerType,[2,"touch"])||"touch"===m.capabilities.actionMode}var b=this,f=a("body");b.$buttons.ready(function(f){b.shovelerReadyFired||(b.slotId&&(f=b.slotId.toString()+"-active",c.GWI&&c.GWI.recordLatency(f),c.GWI&&c.GWI.register(f)),b.shovelerReadyFired=
!0)});b.$carousel.change(function(f){b.updateItems();b.updateSpinner();b.updateShelf();b.updateControls();null===b.defaultCssRightMargin&&b.$shelf.children("li").first()&&(b.defaultCssRightMargin=parseInt(b.$shelf.children("li").first().css("margin-right"),10));b.adjustMarginOnChange&&b.adjustCardMargin()});b.$left.click(function(f){f.preventDefault();b.changePage(-1);b.slotId&&b.logCounter("gw-"+b.slotId.toString()+"-left")});b.$right.click(function(f){f.preventDefault();b.changePage(1);b.slotId&&
b.logCounter("gw-"+b.slotId.toString()+"-right")});b.bindImageLoadEvents(b.$shelf);var g;a(c).resize(function(){clearTimeout(g);g=setTimeout(function(){var f=b.getDimensions(),f=Math.max(Math.min(f.shelfLeft,f.maxLeft),0);b.moveShelf(f)},100)});b.$thumb.mousedown(function(k){var g=k.clientX;1===k.which&&(k.preventDefault(),b.$carousel.addClass("scrolling"),f.bind("mousemove.feed-carousel",function(d){var f=b.getDimensions(),f=Math.max(Math.min(f.shelfLeft+1/f.pageRatio*(d.clientX-g),f.maxLeft),0);
g=d.clientX;b.moveShelf(f)}),a(document).bind("selectstart.feed-carousel",function(){return!1}))});f.add(c).mouseup(function(k){b.$carousel.removeClass("scrolling");b.$carousel.hasClass("hovering")||b.hideControls();f.unbind("mousemove.feed-carousel");a(document).unbind("selectstart.feed-carousel")});b.$carousel.hover(function(){b.$carousel.addClass("hovering");clearTimeout(b.hoverTimer);b.hoverTimer=setTimeout(function(){b.$carousel.hasClass("hovering")&&!b.$carousel.hasClass("touching")?b.showControls():
b.$carousel.removeClass("touching")},300)},function(){b.$carousel.removeClass("hovering touching");clearTimeout(b.hoverTimer);b.$carousel.hasClass("scrolling")||(b.hoverTimer=setTimeout(function(){b.$carousel.hasClass("hovering")||b.hideControls()},600))});b.$carousel.bind(m.action.start,function(f){k(f)&&(b.$carousel.addClass("touching"),clearTimeout(b.touchTimer),b.touchTimer=setTimeout(function(){b.$carousel.removeClass("touching")},5E3))});b.$carousel.bind(m.action.end,function(f){k(f)&&(b.$carousel.removeClass("touching"),
clearTimeout(b.touchTimer),clearTimeout(b.hoverTimer))});b.$viewport.scroll(function(){b.shelfLeft=b.$viewport.scrollLeft();b.updateControls()})},bindImageLoadEvents:function(k){var b=this;a(b.imgClass,k).one("load",function(){b.$carousel.trigger("change")})},getDimensions:function(){var a=this.$shelf.width(),b=this.shelfLeft,f=this.$carousel.width();return{pageWidth:f,shelfWidth:a,shelfLeft:b,pageRatio:f/a,leftRatio:b/a,maxLeft:a-f}},updateItems:function(){var k=this,b=k.$shelf.find(".feed-carousel-card"),
f=function(b){return"none"===b.css("display")};b.each(function(b,g){var h=a(g);if(!f(h)&&!k.config.visibleBeforeLoad)return!0;h.attr("aria-posinset",b+1);h.attr("aria-hidden",!1);h.attr("role","listitem");return 0>=h.find(k.imgClass).filter(function(){return!this.complete}).length?(h.css("display","inline-block"),b+1>=k.cfMinItems&&!k.cfFired&&(k.slotId&&(h=k.slotId.toString()+"-visible",c.GWI&&c.GWI.recordLatency(h),c.GWI&&c.GWI.register(h)),k.cfFired=!0),!0):!1});b.attr("aria-setsize",b.size());
k.$items=b.filter(function(){return!f(a(this))})},updateShelf:function(){var k=0;this.calcWidth&&(this.$shelf.children().each(function(){k+=a(this).outerWidth(!0)}),this.$shelf.width(k));this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems&&this.ajaxSource?this.$spinner.show():(this.size()<this.minItems&&"object"===typeof c.ue&&"function"===typeof c.ue.count&&c.ue.count("shovelerNotEnoughItem",
(c.ue.count("shovelerNotEnoughItem")||0)+1),this.$spinner.hide())},updateControls:function(){this.updateArrows();this.updateScrollThumb()},shouldControlsOn:function(){return this.first&&!this.touch},showControls:function(a){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:a,queue:!1})},hideControls:function(a){var b=this.$thumb;this.shouldControlsOn()||(b=b.add(this.$buttons));b.stop(!0,!0).fadeOut({duration:300,complete:a,queue:!1})},appendCards:function(a){this.$shelf.append(a);
this.bindImageLoadEvents(a);this.$carousel.trigger("change")},updateArrows:function(){var k=this,b=k.getDimensions();a.each([{$e:k.$left,enabled:0<b.shelfLeft},{$e:k.$right,enabled:b.shelfLeft<b.maxLeft}],function(b,a){var g=a.$e;a.enabled?g.removeClass("feed-control-disabled"):g.addClass("feed-control-disabled");k.noOpacity&&(a.enabled?g.css("opacity","1"):g.css("opacity","0.5"))})},updateScrollThumb:function(){var k=this.getDimensions(),b=k.leftRatio*k.pageWidth,k=Math.min(k.pageRatio*k.pageWidth,
k.pageWidth);this.$thumb.width(k).each(function(){a(this).animate({left:b},0)})},logCounter:function(a){"object"===typeof c.ue&&"function"===typeof c.ue.count&&(c.ue.count(a,(c.ue.count(a)||0)+1),c.ue.count("gw-shoveler-click",1))},changePage:function(a){var b=this.getDimensions(),f=this.alignWithItem(b.shelfLeft+a*b.pageWidth),f=Math.min(0>a?f.right:f.left,b.maxLeft);this.locked()||(this.lock(),b.shelfLeft===f?(this.bounce(this.$shelf,-30*a),this.bounce(this.$thumb,6*a)):this.moveShelf(f,400))},
moveShelf:function(a,b){function f(){g.updateArrows();g.unlock()}var g=this;b=b||0;g.shelfLeft=a;if(g.touch)g.$viewport.animate({scrollLeft:a},b,"swing",f);else{var h=g.getDimensions(),h=a/h.shelfWidth*h.pageWidth;g.$shelf.animate({left:-a},b,"swing",f);g.$thumb.animate({left:h},b,"swing",function(){g.updateScrollThumb();g.unlock()})}},getItems:function(){return this.$items},size:function(){return this.getItems().length},alignWithItem:function(g){if(0>g)return{left:0,right:0};var b=this,f=b.getItems(),
q=f.map(function(){var f=b.cardPosition(a(this));if(g>=f.left&&g<=f.right)return f}).get(0);return q?q:b.cardPosition(f.last())},cardPosition:function(a){var b=(a.position()||{left:0,right:0}).left;a=b+a.outerWidth(!0);return{left:b,right:a}},bounce:function(g,b){function f(b){var f={};f[q.touch?"left":"marginLeft"]=b;return f}var q=this;g.each(function(){var g=a(this);g.animate(f(b),400,"swing",function(){g.animate(f(0),100,"swing",q.unlock)})})},setCardMargin:function(a){this.$shelf.children("li").first()&&
this.$shelf.children("li").first().css("margin-right")!==a+"px"&&(this.$shelf.children("li").css("margin-right",a+"px"),this.updateShelf())},adjustCardMargin:function(a){a=a===l||null===a?this.defaultCssRightMargin:a;this.setCardMargin(a);var b=this.getDimensions(),b=0>b.maxLeft?Math.ceil(-b.maxLeft/this.size()):a;this.setCardMargin(b<a?a:b)}};return{createCarousel:function(k,b,f,q){a(k).each(function(k,h){var d=a(h);new g(d,b,f,q)})}}});e.when("jQuery").execute("shoveler-lazy-non-visible-images",
function(a){function p(a){"object"===typeof h.ue&&"function"===typeof h.ue.count&&h.ue.count(a,(h.ue.count(a)||0)+1)}function m(){h.GWData&&a.each(h.GWData,function(g,k){if(g&&k&&k.data&&!1===k.loaded){p("gw-lazy-load-all");k.loaded=!0;var b=[];a.each(k.data,function(f,g){b.push(a(g)[0])});b&&0<b.length&&p("gw-lazy-load-non-empty");e.register(g,function(){return{cards:b}})}})}var h=c;e.when("x1").execute(function(){m()});e.when("ready").execute(function(){m()});e.when("load").execute(function(){m()})});
e.register("billboard-widget",function(){if(c.GWI)return c.GWI.BillboardWidget});e.register("gwi-util",function(){if(c.GWI)return c.GWI.util});e.when("A").register("resizeable-inline-video",function(a){function p(a,b){"function"===typeof g.uet&&b&&g.uet(a,b,{wb:1})}function m(a,b){"function"===typeof g.uex&&b&&g.uex(a,b,{wb:1})}var h=a.$,g=c;return function(k,b,f){function q(){E.removeClass("player-uncommenced viewport-loaded").addClass("viewport-loading player-loading");
r.css("z-index",1).css("opacity",1);p("tc","airyInlineVideoLoadingMonitor");p("tc",f.loadingScope);p("bb","airyInlineVideoPlaybackMonitor");p("bb",f.playbackScope)}function c(b){b=b||{};return{play:b.play||C,stop:b.stop||C,resize:b.resize||C,airyReady:b.airyReady||C}}function v(){return new c({airyReady:function(b){q();D=new x(b);D.play()},stop:function(){var b;b=C;y.removeClass("viewport-loading").addClass("viewport-loaded");r.css("z-index",-1).css("opacity",0);z.length&&n.hide();b()}})}function d(b){return new c({play:function(){D=
new x(b);n.fadeOut(1E3,function(){n.css("display","block");n.css("visibility","hidden");q();D.play()})}})}function x(b){return new c({play:function(){A.removeClass("viewport-loading").addClass("viewport-loaded");E.removeClass("player-loading");p("be","airyInlineVideoLoadingMonitor");p("be",f.loadingScope);m("ld","airyInlineVideoLoadingMonitor");m("ld",f.loadingScope);D=new u(b)}})}function u(b){return new c({stop:function(){D=new l(b);b.pause()}})}function l(b){return new c({})}var y=h(k),r=y.find(".airy-video-container"),
n=y.find(".image-map-before"),z=y.find(".image-map-after"),A=y.find(".airy-video-viewport-in"),E=y.add(A),C=function(){},D;f=f||{};p("bb","airyInlineVideoLoadingMonitor");p("bb",f.loadingScope);D=new function(a){function n(d){function a(b){"object"===typeof g.ue&&"function"===typeof g.ue.count&&g.ue.count(b,(g.ue.count(b)||0)+1)}b.bindings={loadedmetadata:function(b,d){D.airyReady(r);p("cf","airyInlineVideoLoadingMonitor");p("cf",f.loadingScope)},videounsupportederror:function(b,d){a("airyResizableInlineVideoUnsupportedError")},
decodeerror:function(b,d){a("airyResizableInlineVideoDecodeError")},networkerror:function(b,d){a("airyResizableInlineVideoNetworkError")},undefinederror:function(b,d){a("airyResizableInlineVideoUndefinedError")},beganplaying:function(){D.play()},ended:function(){p("af","airyInlineVideoPlaybackMonitor");p("af",f.playbackScope);D.stop()}};var r=d.embed(b);f.autoPlay&&r.play({isAsync:!0})}a=a||{};e.load.js(a.js||"");e.load.css(a.css||"");E.addClass("player-uncommenced");f.whenReady?e.when("Airy","ready").execute(n):
e.when("Airy").execute(n);return new c({airyReady:function(b){D=new d(b);D.play()},play:function(){D=new v}})}(f.airyAssetUrls);(function(){a.on("resize",function(){D.resize()})})()}})});

}
/*
     FILE ARCHIVED ON 00:32:33 May 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:48 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 89.338
  exclusion.robots: 0.133
  exclusion.robots.policy: 0.12
  cdx.remote: 0.082
  esindex: 0.012
  LoadShardBlock: 43.547 (3)
  PetaboxLoader3.datanode: 83.141 (5)
  load_resource: 161.313 (2)
  PetaboxLoader3.resolve: 63.532 (2)
*/