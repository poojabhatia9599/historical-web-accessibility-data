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

(function(b){var a=window.AmazonUIPageJS||window.P,g=a._namespace||a.attributeErrors,d=g?g("AmazonGatewayAuiAssets"):a;d.guardFatal?d.guardFatal(b)(d,window):d.execute(function(){b(d,window)})})(function(b,a,g){b.when("A").register("sg-jsutil",function(a){var b=a.$;return{safeCall:function(a,d){return b.isFunction(a)?a(d):d}}});b.when("A","load").execute("ah-inst-img-size",function(d){function m(c){if(!c)return null;var a=k(c).attr("src");c=k(c).data("a-hires");return a===c?null:a}function l(c){"object"===
typeof p.ue&&"function"===typeof p.ue.count&&p.ue&&p.ue.count(c,(p.ue.count(c)||0)+1)}function h(c,a){l("gw-img-size-invoke");k.ajax({type:"HEAD",async:!0,url:c,success:function(c,b,k){l("gw-img-size-success");d.trigger(a,parseInt(k.getResponseHeader("Content-Length"),10))},error:function(c,a,e){l("gw-img-size-error")}})}function f(c,a){0<c.length&&(q[a]={count:c.length,totalSize:0,images:k.unique(c)},k(q[a].images).each(function(c,b){var k=a+"_"+c;d.on(k,function(c){isNaN(c)||(--q[a].count,q[a].totalSize+=
c,0===q[a].count&&p.ue&&p.ue.count(a,q[a].totalSize))});h(b,k)}))}function n(c,a){var b=d.$(c);(b=0>=b.length?null:m(b[0]))&&f([b],a)}function c(c,a){a=a||c.length;var b=[];k(c.slice(0,a)).each(function(c,a){var e=m(a);if(!e)return[];b.push(e)});return b}var k=d.$,p=a,q=[];b.execute("inst-cf-img",function(){l("gw-inst-img");n(".gw-critical-content img","gw-cf-img-size")});b.when("x1").execute("inst-x1-img",function(){b.execute("inst-x1-rec-img",function(){var a=1;k("#gw-content-grid .feed-carousel .feed-carousel-shelf").slice(0,
2).each(function(e,b){if(2>=a){var d="gw-shoveler-img-size-"+a++,m=k(b).find("img");6<=m.length&&(m=c(m,6),f(m,d))}})});b.execute("inst-x1-unrec-img",function(){f(c(d.$("#desktop-unrec-col-1 img")),"gw-unrec-col-1-img-size");f(c(d.$("#desktop-unrec-col-2 img")),"gw-unrec-col-2-img-size");f(c(d.$("#desktop-unrec-col-3 img")),"gw-unrec-col-3-img-size");n("#desktop-unrec-sidekick #dotd-image img","gw-unrec-sidekick-img-size")})})});b.when("A").register("dombinder",function(a){function b(a,
c){var k=0;c=c.split(".");for(var d=c.length;k<d;k++)a=a&&a[c[k]];return a}function l(a){return h.map(h(a).data("bind").split(","),function(c){c=c.split(":");var b=h.trim(c[0]),d=h.trim(c[1]),m=f[b];if(m)return m.init&&m.init(a,d),function(c){m.update(a,d,c)}})}var h=a.$,f={text:{update:function(a,c,k){h(a).text(b(k,c)||"")}},html:{update:function(a,c,k){h(a).html(b(k,c)||"")}},href:{update:function(a,c,k){h(a).attr("href",b(k,c)||"")}},trimText:{update:function(a,c,b){a=h(a);b=a.text();if(b.length>
c){for(var d=c-4;0<=d&&0<"[.,-/#!$%^&*;:{}=-_`~()] ".indexOf(b[d]);)d--;a.text(b.substring(0,0<=d?d+1:c-3)+"...")}}},value:{update:function(a,c,k){h(a).val(b(k,c)||"")}},visible:{update:function(a,c,k){var d=!1;"!"===c.charAt(0)&&(d=!0,c=c.substring(1));c=!!b(k,c);d!==c?h(a).show():h(a).hide()}},css:{init:function(a,c){var b=h(a),d=b.data("dombcss")||[];d[c]="";b.data("dombcss",d)},update:function(a,c,k){a=h(a);var d=a.data("dombcss"),f=d[c];k=b(k,c);f!==k&&(d[c]=k,f&&a.removeClass(f),k&&a.addClass(k))}},
attr:{init:function(a,c){var b=h(a),d=b.data("dombattr")||[];d[c]={};b.data("dombattr",d)},update:function(a,c,k){var d=h(a);a=d.data("dombattr");var f=a[c];k=b(k,c);f!==k&&(a[c]=k,f&&h.each(f,function(c,a){d.removeAttr(c)}),k&&h.each(k,function(c,a){d.attr(c,a)}))}}};return{init:function(a){var c={$root:a,bindings:[]};a.find("[data-bind]").each(function(){h.each(l(this),function(a,b){c.bindings.push(b)})});return c},update:function(a,c){h.each(a.bindings,function(a,b){b(c)})}}});b.when("jQuery").register("gwAjax",
function(b){return function(m,l){function h(b,d,n){"object"===typeof a.ue&&"function"===typeof a.ue.count&&(f(l.errorCounter||"gwAjaxError"),l.id&&f("gwAjaxError:"+l.id));"function"===typeof a.ueLogError&&a.ueLogError({logLevel:"WARN",attribution:"gwAjax-"+(l.id||m),message:"gwAjax call failed "+(JSON&&JSON.stringify?JSON.stringify({url:m,"params-data":l.params||l.data}):"")});"function"===typeof c&&c(b,d,n)}function f(c){"object"===typeof a.ue&&"function"===typeof a.ue.count&&a.ue.count(c,(a.ue.count(c)||
0)+1)}l=b.extend(!0,{},l);var n=l.success,c=l.error;l.success=function(c,a,b){c.error?h(c,a,b):"function"===typeof n&&n(c,a,b)};l.error=h;l.data=l.params?l.params:l.data;f("gwAjaxCall");l.ajaxCounter&&f(l.ajaxCounter);return b.ajax(m,l)}});b.when("jQuery","gw-hud-punt").execute("gw-hud-sidekick",function(a){a("#gw-hud-grid").css({display:"none"})});b.when("A","sg-jsutil","a-modal","gw-productdb","productdb-binding-helper","sg-media-builder","gw-sims","gw-popover-data").register("gw-popover",
function(d,m,l,h,f,n,c,k){function p(c,e){a.uet&&a.uet(c,e,{wb:1})}function q(c){if(a.ue&&"function"===typeof a.ue.count)return a.ue.count(c)||0}function u(c){a.ue&&"function"===typeof a.ue.count&&a.ue.count(c,(a.ue.count(c)||0)+1)}function e(c){return c.closest("*[data-sgproduct]").data("sgproduct")}function g(c,a){y[c.asin]&&y[c.asin].isResolved()?A.resetSimData():(y[c.asin]=t.Deferred(),c&&c.asin&&a?A.fetch(c,a,y[c.asin]):y[c.asin].reject())}var t=d.$,w={},y={};if(!t("html").hasClass("a-touch")){m=
t('<span style="display: none" />').appendTo("body");var v=t("#gw-popover-wrapper"),r=new f(h,v),z=l.create(m,{name:"gw-asin-popover",width:"90%","max-width":900,height:590,popoverLabel:k.popoverLabel,closeButton:!1}),A=new c(r),D=t("#gw-quick-look-btn");t("#a-page").delegate("li[data-sgproduct]","mouseenter",function(c){t(c.currentTarget).append(D);t(c.currentTarget).find("[title]").removeAttr("title");D.addClass("active")});D.mouseenter(function(){var c=t(this),a=e(c),c=c.siblings().children("a").attr("href");
g(a,c)});t(".bestsellers .listRow a").mouseenter(function(){var c=t(this),a=e(c),c=c.attr("href");g(a,c);!a||!a.asin||w[a.asin]&&w[a.asin].isResolved()||!(c=h.get(a.asin))||(w[a.asin]=t.Deferred(),w[a.asin].resolve(c))});b.when("gwAjax").execute(function(c){var e={};t("#a-page").delegate(".fresh-shoveler li[data-sgproduct]","mouseenter mousemove",function(b){b=t(b.currentTarget);var k=b.data("sgproduct").asin;if(!w[k]||!w[k].isResolved()){var f=[];b.add(b.prev("li[data-sgproduct]")).add(b.next("li[data-sgproduct]")).each(function(){var c=
t(this).data("sgproduct");if(c&&c.asin){var a=h.get(c.asin),b=(a=!(!e[c.asin]&&a&&a.loading))&&1500<d.now()-e[c.asin];if(!a||b)f.push(c.asin),e[c.asin]=d.now()}});w[k]=t.Deferred();f.length?(c("/gp/gw/ajax/pdb.html",{id:"quicklook-pdb",data:{swn:"productdb-ajax",sa:'{"asins": ["'+f.join('","')+'"]}',oe:'{"isDesktop":1,"isTablet":0,"isMobile":0}',rrid:a.ue_id}}).done(function(c){h._add(c);for(var a=0;a<f.length;a++)e[f[a]]=Infinity;w[k].resolve(c)}).fail(w[k].reject),u("freshHoverCount")):w[k].resolve()}})});
t("#a-page").delegate("li[data-sgproduct]","mouseleave",function(c){D.removeClass("active")});var B="#a-popover-"+z.attrs("id")+" ";l=t.map([".a-popover-header { display: none; }",".a-popover-inner { padding: 0px !important; margin: 0px !important; overflow: hidden !important; height: 100% !important; }"],function(c){return B+c}).join(" ");t("head").append("<style>"+l+"</style>");d.on("a:popover:hide:gw-asin-popover",function(c){a.history.state&&a.history.state.popup&&a.history.back();r.clear()});
t(a).bind("popstate",function(){z.hide()});return{show:function(c,b){u("freshPopOverOn");p("bb","popoverLatency"+q("freshPopOverOn"));a.history&&a.history.pushState&&a.history.pushState({popup:1},"");r.setAsin(c,{beforeUpdate:function(a){if(a.loading)return u("freshPopOverLoading"),a;var e=(new n(a.images[0])).autoCrop().scaleXY(500,400).build(),e={url:b,image:e,actionUrl:{action:"/gp/product/handle-buy-box/"+function(c){return c.substring(c.indexOf("/ref=")+1,c.length)}(b)}};a.reviews&&(e.reviews=
t.extend({},a.reviews,{url:b+"#customerReviews"}));t.when(y[c],w[c]).done(function(a,e){A.showSims(c,a)});y[c].fail(A.setNoSimView);p("cf","popoverLatency"+q("freshPopOverOn"));return t.extend({},a,e)}});z.show()},hide:function(){z.hide()}}}});b.when("A","sg-media-builder","gw-productdb").register("gw-sims",function(d,m,l){var h=d.$;return function(d){function n(c,e){a.uet&&a.uet(c,e,{wb:1})}function c(c){if(a.ue&&"function"===typeof a.ue.count)return a.ue.count(c)||0}function k(c){a.ue&&
"function"===typeof a.ue.count&&a.ue.count(c,(a.ue.count(c)||0)+1)}function p(){if(!B){B=!0;I.hide();F.show();H.animate({height:"100%"},300);var e=0,b=0,k=0,d=parseInt(F.css("width"),10),f=F.find(".sims-img-link");f.each(function(c,a){e+=a.clientWidth;d<e?h(a).hide():(b=e,k+=1)});var m=d-b;0<m&&(m=Math.floor(20+m/k-1),20<m&&f.css({"padding-right":m/2+"px","padding-left":m/2+"px"}));f="popoverLatency"+c("freshPopOverOn");n("be",f);a.uex&&a.uex("ld",f,{wb:1})}}function q(){0===--r&&p()}function u(c,
a){var e=h("<a>"),b=h("<div>");e.attr("class","sims-img-link");b.addClass("sims-img-border");a&&e.addClass("selected");e.click(function(){k("freshPopOverSimsClick");F.find(".sims-img-link").removeClass("selected");h(this).addClass("selected");d.clear();d.setAsin(c.asin,{beforeUpdate:function(a){a=h.extend(!0,{},c);var e=c.url;if(a.loading)k("freshPopOverLoading");else{var b=(new m(a.images[0])).autoCrop().scaleXY(500,400).build(),b={url:e,image:b,actionUrl:{action:"/gp/product/handle-buy-box/"+g(e)}};
a.reviews&&(b.reviews=h.extend({},a.reviews,{url:e+"#customerReviews"}));a=h.extend({},a,b)}return a}})});return e.append(b)}function e(){h.each(z,function(c,a){a.url=a.url.replace(/ref=gw_pdb_pdt-[\d]+/,g(A)+"&gw_sims-"+c)})}function g(c){return 0<=c.indexOf("redirect.html?")?c.replace(/.*redirect.html|(token|location)=.*?&/g,""):c.substring(c.indexOf("/ref=")+1,c.length)}function t(){B=!1;e();var c=[];r=z.length>r?r:z.length;h(z).each(function(a,e){e.loading=!1;if(e.images[0].src){var b=(new m(e.images[0])).autoCrop().scaleXY(130,
100).build().src,k=h("<img>");k.attr("src",b);k.attr("class","sims-img");k.load(q);b=h("<div>");b.attr("class","sims-img-container");var d=h("<div>");d.addClass("sims-img-overlay");h(b).append(d);b.append(k);k=u(e,0===a);k.append(b);c.push(k)}return a<r-1});r=c.length;h(c).each(function(c,a){F.append(a)});setTimeout(p,D)}function w(){b.when("gw-popover").execute(function(c){c.hide()})}function y(){I.hide();H.addClass("hidden");C.bind("click",w)}function v(){F.empty();H.add(I).removeAttr("style");
H.removeClass("hidden");C.unbind("click",w);I.show();F.hide();r=8;z=[]}var r,z,A,D=1E4,B=!1,C=h("#sims-section"),H=C.find(".sims-wrapper"),I=C.find(".sims-loading"),F=C.find(".sims-details");h("#gw-asin-popover");return{fetch:function(e,k,d){n("af","popoverLatency"+c("freshPopOverOn"));v();A=k;e.url=A;z.push(e);k=l.get(e.asin);setTimeout(d.reject,D);k.sims?d.resolve(k.sims):b.when("gwAjax").execute(function(c){c("/gp/gw/ajax/pdb.html",{id:"quicklook-sims-pdb",data:{swn:"productdb-ajax",sa:'{"asins": [], "entityId":"'+
e.asin+'","datasetId": "purchase"}',oe:'{"isDesktop":1,"isTablet":0,"isMobile":0}',rrid:a.ue_id}}).done(function(c){if(c&&c.p&&0<c.p.length){var a=e.asin,b=c.p;b&&(l.get(a).sims||l.addSims(a,b));return d.resolve(c.p)}return d.reject()}).fail(d.reject)});return d},setNoSimView:y,showSims:function(c,a){var e=l.get(c);e.loading?k("freshPopOverSimLoadBeforePrimeAsin"):z=e.sims?h.merge([e],e.sims):h.merge([e],a);4<z.length?t():(k("simsLessThanThreshold"),y())},resetSimData:v,setWaitPeriod:function(c){D=
c}}}});b.when("A").execute(function(d){var m=d.$,l,h;if(!d.$("html").hasClass("a-touch"))if(a.cvox)a.ue&&a.ue.tag&&a.ue.tag("screenReaderOn");else{m("#a-page").delegate("*[data-sgproduct] #gw-quick-look-btn","click",function(a){f(a)});m("#a-page").delegate(".bestseller-list *[data-sgproduct]","click",function(a){f(a)});b.when("gw-popover").execute(function(a){l=a;m("#gw-popover-close").click(function(){l.hide()});h&&l.show.apply(l,h)});var f=function(a){if(!(1<a.which||a.shiftKey||a.altKey||
a.metaKey||a.ctrlKey)){var c,b;m(a.target).parents(".bestseller-list").length?(c=m(a.currentTarget).data("sgproduct"),b=m(a.target).closest("a").attr("href")):(c=m("#gw-quick-look-btn").closest("*[data-sgproduct]").data("sgproduct"),b=m("#gw-quick-look-btn").siblings().children("a").attr("href"));var d=[c.asin,b];c.asin&&b&&(a.preventDefault(),l?l.show.apply(l,d):h=d)}}}});b.when("A","sg-jsutil","dombinder").register("productdb-binding-helper",function(a,b,l){return function(a,d){function n(c,
a){l.update(e,p(a.beforeUpdate,c));c.loading||p(a.load,c)}function c(c){k();u=function(){c(q)};q.pdb_observe(u)}function k(){q&&u&&(q.pdb_unobserve(u),u=null)}var p=b.safeCall,q=null,u=null,e=l.init(d);this.setAsin=function(e,b){b=b||{};k();q=a.get(e);n(q,b);q.loading&&c(function(c){n(c,b)});return q};this.clear=function(){k();q={};l.update(e,q)}}});a.P&&b.when("jQuery","afterLoad").register("gw-resource-logger",function(b){return{instrumentResources:function(m){var l;l=!1;if(b.isArray(m)&&!b.isEmptyObject(m)){l=
!0;for(var h=0;h<m.length;h++){var f=m[h];if("id"in f&&"regex"in f&&"initiator"in f){if(!("string"===typeof f.id&&"string"===typeof f.initiator&&f.regex instanceof RegExp)){l=!1;break}}else{l=!1;break}}}h=a.performance&&"function"===typeof a.performance.getEntriesByType&&"undefined"!==typeof a.performance.getEntriesByType("resource")&&"undefined"!==typeof a.ue;if(l&&h){l=Array(m.length);for(h=0;h<l.length;h++)l[h]=!1;for(f=h=0;f<a.performance.getEntriesByType("resource").length&&h<m.length;f++)for(var n=
a.performance.getEntriesByType("resource")[f],c=n.name,k=n.initiatorType,p=0;p<m.length;p++)if(!l[p]){var q=m[p].regex;if(k===m[p].initiator&&q.test(c)){c=m[p].id;k=n;n=k.duration;a.ue.count&&(a.ue.count(c+":duration",n),a.ue.count(c+":startTime",k.startTime));a.ue.tag&&(k=void 0,k=50>n?c+":cached":c+":notCached",a.ue.tag(k));l[p]=!0;h++;break}}}}}});b.register("sg-media-builder",function(){return function(a){var b=this,l=a.src,h=[];b.build=function(){var b=h.join("_");return{src:l.replace(/\.([^.]+)$/,
"._"+b+"_.$1"),alt:a.alt}};b.autoCrop=function(){h.push("AC");return b};b.scaleX=function(a){h.push("SX"+a);return b};b.scaleY=function(a){h.push("SY"+a);return b};b.upScaleX=function(a){h.push("UX"+a);return b};b.upScaleY=function(a){h.push("UY"+a);return b};b.scaleXY=function(a,d){return b.upScaleX(a).scaleY(d)}}});b.when("A","gwAjax").register("shogunProductDB",function(b,m){function l(a){var c=[];f[a]={loading:!0,pdb_observe:function(a){c.push(a)},pdb_unobserve:function(a){c=b.$.grep(c,
function(c){return c!==a})},_trigger:function(){b.$.each(c,function(){this.call(f[a])})}};return f[a]}function h(n,c){this.ajaxUrl=n;this.experienceStr=c;this._add=function(c){c.p&&b.$.each(c.p,function(c,a){if(a.asin){var k=f[a.asin]||l(a.asin);b.$.extend(k,a,{loading:!1,error:!1});k._trigger(a)}})};this.addSims=function(c,a){if(a){var m=f[c]||l(c);b.$.extend(m,{sims:a});m._trigger(c)}};this._ajax=function(k,f){var h=b.$.extend(!0,{},n,{params:{sa:JSON.stringify(k),oe:c}});a.ue_sid&&(h.url+="/"+
a.ue_sid);a.ue_id&&(h.params.rrid=a.ue_id);return m(h.url,{method:h.method,params:h.params,success:f.success,error:f.error,id:"gw-jslibs-"+f.id})};this.get=function(c){return c in f?f[c]:l(c)}}var f={};return function(a,c){return new h(a,c)}});b.when("jQuery","p-detect").register("component-feed-carousel",function(d,m){var l=d.extend(!0,{},m);d.each({pointerPrefix:function(){return"onmspointerup"in document||"onpointerup"in document?"onpointerup"in document?"pointer":"MSPointer":!1},
actionMode:function(){var a=l.capabilities.pointerPrefix;return a?a:l.capabilities.touch?"touch":"mouse"}},function(a,c){l.capabilities[a]=c()});var h={};d.each({start:{mouse:"down",touch:"start",pointer:"down",MSPointer:"Down"},end:{mouse:"up",touch:"end",pointer:"up",MSPointer:"Up"}},function(a,c){var b=l.capabilities.actionMode,d="string"===typeof c?c:c[b];h[a]=d?b+d:c.mouse===g?"":"mouse"+c.mouse});l.action=h;var f=function(a,c,b,d){this.init(a,c,b,d)};f.prototype={init:function(f,c,k,m){var h=
this;d("html").hasClass("a-touch")&&f.addClass("feed-carousel-touch");h.config=m||{};h.adjustMarginOnChange=!1!==h.config.adjustMarginOnChange;h.defaultCssRightMargin=null;h.minItems=c||10;h.imgClass=".product-image";h.$carousel=f;h.cfMinItems=k||6;h.cfFired=!1;h.shovelerReadyFired=!1;h.slotId=h.getSlotId();h.touch=h.$carousel.hasClass("feed-carousel-touch");h.ajaxSource=h.$carousel.parent().hasClass("ajaxSource");h.$shelf=h.$carousel.find(".feed-carousel-shelf");h.$viewport=h.$carousel.find(".feed-carousel-viewport");
h.$spinner=h.$carousel.find(".spinner");h.$left=d(".feed-carousel-control.feed-left",f);h.$right=d(".feed-carousel-control.feed-right",f);h.$buttons=d(".feed-carousel-control",f);h.$thumb=d(".feed-scrollbar-thumb",f);h.shelfLeft=-1*parseInt(h.$shelf.css("left"),10);h.calcWidth=d("html").hasClass("a-lt-ie9");h.noOpacity=d("html").hasClass("a-lt-ie9");h.uniqueId=h.getUniqueId();h.$left.attr("aria-hidden",!0);h.$right.attr("aria-hidden",!0);h.bindEvents();h.$carousel.data("Carousel",h);h.$carousel.trigger("change");
h.token=!1;h.lock=function(){h.token=!0};h.unlock=function(){h.token=!1};h.locked=function(){return h.token};b.when("gw-first-carousel").execute(function(){h.first=h.$carousel.hasClass("first-carousel");h.shouldControlsOn()?h.showControls():h.hideControls()});h.uniqueId&&b.when(h.uniqueId).execute(function(c){h.appendCards(c.cards);if(c.cards&&h.slotId&&"object"===typeof a.ue&&"function"===typeof a.ue.count){var b="gw-"+h.slotId.toString()+"-lazy-cards",k="gw-"+h.slotId.toString()+"-lazy";a.ue.count(b,
(a.ue.count(b)||0)+c.cards.length);a.ue.count(k,(a.ue.count(k)||0)+1)}})},getUniqueId:function(){if(this.$viewport){var a=this.$viewport.closest(".shogun-widget");return 0<a.length?d(a[0]).attr("id"):null}},getSlotId:function(){var a=this.$carousel.closest(".gw-widget-instrument");return 0<a.length?d(a[0]).attr("id"):null},bindEvents:function(){function b(c){return l.capabilities.pointerPrefix&&-1<d.inArray(c.originalEvent.pointerType,[2,"touch"])||"touch"===l.capabilities.actionMode}var c=this,k=
d("body");c.$buttons.ready(function(b){c.shovelerReadyFired||(c.slotId&&(b=c.slotId.toString()+"-active",a.GWI&&a.GWI.recordLatency(b),a.GWI&&a.GWI.register(b)),c.shovelerReadyFired=!0)});c.$carousel.change(function(a){c.updateItems();c.updateSpinner();c.updateShelf();c.updateControls();null===c.defaultCssRightMargin&&c.$shelf.children("li").first()&&(a=parseInt(c.$shelf.children("li").first().css("margin-right"),10),c.defaultCssRightMargin=isNaN(a)?10:a);c.adjustMarginOnChange&&c.adjustCardMargin()});
c.$left.click(function(a){a.preventDefault();c.changePage(-1);c.slotId&&c.logCounter("gw-"+c.slotId.toString()+"-left")});c.$right.click(function(a){a.preventDefault();c.changePage(1);c.slotId&&c.logCounter("gw-"+c.slotId.toString()+"-right")});c.bindImageLoadEvents(c.$shelf);var f;d(a).resize(function(){clearTimeout(f);f=setTimeout(function(){var a=c.getDimensions(),a=Math.max(Math.min(a.shelfLeft,a.maxLeft),0);c.moveShelf(a)},100)});c.$thumb.mousedown(function(a){var b=a.clientX;1===a.which&&(a.preventDefault(),
c.$carousel.addClass("scrolling"),k.bind("mousemove.feed-carousel",function(a){var k=c.getDimensions(),k=Math.max(Math.min(k.shelfLeft+1/k.pageRatio*(a.clientX-b),k.maxLeft),0);b=a.clientX;c.moveShelf(k)}),d(document).bind("selectstart.feed-carousel",function(){return!1}))});k.add(a).mouseup(function(a){c.$carousel.removeClass("scrolling");c.$carousel.hasClass("hovering")||c.hideControls();k.unbind("mousemove.feed-carousel");d(document).unbind("selectstart.feed-carousel")});c.$carousel.hover(function(){c.$carousel.addClass("hovering");
clearTimeout(c.hoverTimer);c.hoverTimer=setTimeout(function(){c.$carousel.hasClass("hovering")&&!c.$carousel.hasClass("touching")?c.showControls():c.$carousel.removeClass("touching")},300)},function(){c.$carousel.removeClass("hovering touching");clearTimeout(c.hoverTimer);c.$carousel.hasClass("scrolling")||(c.hoverTimer=setTimeout(function(){c.$carousel.hasClass("hovering")||c.hideControls()},600))});c.$carousel.bind(l.action.start,function(a){b(a)&&(c.$carousel.addClass("touching"),clearTimeout(c.touchTimer),
c.touchTimer=setTimeout(function(){c.$carousel.removeClass("touching")},5E3))});c.$carousel.bind(l.action.end,function(a){b(a)&&(c.$carousel.removeClass("touching"),clearTimeout(c.touchTimer),clearTimeout(c.hoverTimer))});c.$viewport.scroll(function(){c.shelfLeft=c.$viewport.scrollLeft();c.updateControls()})},bindImageLoadEvents:function(a){var c=this;d(c.imgClass,a).one("load",function(){c.$carousel.trigger("change")})},getDimensions:function(){var a=this.$shelf.width(),c=this.shelfLeft,b=this.$carousel.width();
return{pageWidth:b,shelfWidth:a,shelfLeft:c,pageRatio:b/a,leftRatio:c/a,maxLeft:a-b}},updateItems:function(){var b=this,c=b.$shelf.find(".feed-carousel-card"),k=function(c){return"none"===c.css("display")};c.each(function(c,f){var m=d(f);if(!k(m)&&!b.config.visibleBeforeLoad)return!0;m.attr("aria-posinset",c+1);m.attr("aria-hidden",!1);m.attr("role","listitem");return 0>=m.find(b.imgClass).filter(function(){return!this.complete}).length?(m.css("display","inline-block"),c+1>=b.cfMinItems&&!b.cfFired&&
(b.slotId&&(m=b.slotId.toString()+"-visible",a.GWI&&a.GWI.recordLatency(m),a.GWI&&a.GWI.register(m)),b.cfFired=!0),!0):!1});c.attr("aria-setsize",c.size());b.$items=c.filter(function(){return!k(d(this))})},updateShelf:function(){var a=0;this.calcWidth&&(this.$shelf.children().each(function(){a+=d(this).outerWidth(!0)}),this.$shelf.width(a));this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems&&
this.ajaxSource?this.$spinner.show():(this.size()<this.minItems&&"object"===typeof a.ue&&"function"===typeof a.ue.count&&a.ue.count("shovelerNotEnoughItem",(a.ue.count("shovelerNotEnoughItem")||0)+1),this.$spinner.hide())},updateControls:function(){this.updateArrows();this.updateScrollThumb()},shouldControlsOn:function(){return this.first&&!this.touch},showControls:function(a){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:a,queue:!1})},hideControls:function(a){var c=this.$thumb;
this.shouldControlsOn()||(c=c.add(this.$buttons));c.stop(!0,!0).fadeOut({duration:300,complete:a,queue:!1})},appendCards:function(a){this.$shelf.append(a);this.bindImageLoadEvents(a);this.$carousel.trigger("change")},updateArrows:function(){var a=this,c=a.getDimensions();d.each([{$e:a.$left,enabled:0<c.shelfLeft},{$e:a.$right,enabled:c.shelfLeft<c.maxLeft}],function(c,b){var d=b.$e;b.enabled?d.removeClass("feed-control-disabled"):d.addClass("feed-control-disabled");a.noOpacity&&(b.enabled?d.css("opacity",
"1"):d.css("opacity","0.5"))})},updateScrollThumb:function(){var a=this.getDimensions(),c=a.leftRatio*a.pageWidth,a=Math.min(a.pageRatio*a.pageWidth,a.pageWidth);this.$thumb.width(a).each(function(){d(this).animate({left:c},0)})},logCounter:function(b){"object"===typeof a.ue&&"function"===typeof a.ue.count&&(a.ue.count(b,(a.ue.count(b)||0)+1),a.ue.count("gw-shoveler-click",1))},changePage:function(a){var c=this.getDimensions(),b=this.alignWithItem(c.shelfLeft+a*c.pageWidth),b=Math.min(0>a?b.right:
b.left,c.maxLeft);this.locked()||(this.lock(),c.shelfLeft===b?(this.bounce(this.$shelf,-30*a),this.bounce(this.$thumb,6*a)):this.moveShelf(b,400))},moveShelf:function(a,c){function b(){d.updateArrows();d.unlock()}var d=this;c=c||0;d.shelfLeft=a;if(d.touch)d.$viewport.animate({scrollLeft:a},c,"swing",b);else{var f=d.getDimensions(),f=a/f.shelfWidth*f.pageWidth;d.$shelf.animate({left:-a},c,"swing",b);d.$thumb.animate({left:f},c,"swing",function(){d.updateScrollThumb();d.unlock()})}},getItems:function(){return this.$items},
size:function(){return this.getItems().length},alignWithItem:function(a){if(0>a)return{left:0,right:0};var c=this,b=c.getItems(),f=b.map(function(){var b=c.cardPosition(d(this));if(a>=b.left&&a<=b.right)return b}).get(0);return f?f:c.cardPosition(b.last())},cardPosition:function(a){var c=(a.position()||{left:0,right:0}).left;a=c+a.outerWidth(!0);return{left:c,right:a}},bounce:function(a,c){function b(a){var c={};c[f.touch?"left":"marginLeft"]=a;return c}var f=this;a.each(function(){var a=d(this);
a.animate(b(c),400,"swing",function(){a.animate(b(0),100,"swing",f.unlock)})})},setCardMargin:function(a){this.$shelf.children("li").first()&&this.$shelf.children("li").first().css("margin-right")!==a+"px"&&(this.$shelf.children("li").css("margin-right",a+"px"),this.updateShelf())},adjustCardMargin:function(a){a=a===g||null===a?this.defaultCssRightMargin:a;this.setCardMargin(a);var c=this.getDimensions(),c=0>c.maxLeft?Math.ceil(-c.maxLeft/this.size()):a;this.setCardMargin(c<a?a:c)}};return{createCarousel:function(a,
c,b,m){d(a).each(function(a,h){var e=d(h);new f(e,c,b,m)})}}});b.when("jQuery","SafeP").execute("shoveler-lazy-non-visible-images",function(d,m){function l(a){"object"===typeof f.ue&&"function"===typeof f.ue.count&&f.ue.count(a,(f.ue.count(a)||0)+1)}function h(){f.GWData&&d.each(f.GWData,function(a,c){if(a&&c&&c.data&&!c.loaded){c.loaded=!0;l("gw-lazy-load-all");var b=[];d.each(c.data,function(a,c){b.push(d(c)[0])});b&&0<b.length&&l("gw-lazy-load-non-empty");m&&m.register(a,function(){return{cards:b}})}})}
var f=a;b.when("x1").execute(h);b.when("ready").execute(h);b.when("load").execute(h)});b.register("SafeP",function(){var a={};return{register:function(m,l){"string"===typeof m&&"function"===typeof l&&(a[m]||(a[m]=function(m,f){b.register(m,f);a[m]=function(){}}),a[m]&&a[m](m,l))}}});b.when("A").register("resizeable-inline-video",function(d){function m(a,c){"function"===typeof f.uet&&c&&f.uet(a,c,{wb:1})}function l(a,c){"function"===typeof f.uex&&c&&f.uex(a,c,{wb:1})}var h=
d.$,f=a;return function(a,c,k){function p(){D.removeClass("player-uncommenced viewport-loaded").addClass("viewport-loading player-loading");v.css("z-index",1).css("opacity",1);m("tc","airyInlineVideoLoadingMonitor");m("tc",k.loadingScope);m("bb","airyInlineVideoPlaybackMonitor");m("bb",k.playbackScope)}function g(a){a=a||{};return{play:a.play||B,stop:a.stop||B,resize:a.resize||B,airyReady:a.airyReady||B}}function u(){return new g({airyReady:function(a){p();C=new x(a);C.play()},stop:function(){var a;
a=B;y.removeClass("viewport-loading").addClass("viewport-loaded");v.css("z-index",-1).css("opacity",0);z.length&&r.hide();a()}})}function e(a){return new g({play:function(){C=new x(a);r.fadeOut(1E3,function(){r.css("display","block");r.css("visibility","hidden");p();C.play()})}})}function x(a){return new g({play:function(){A.removeClass("viewport-loading").addClass("viewport-loaded");D.removeClass("player-loading");m("be","airyInlineVideoLoadingMonitor");m("be",k.loadingScope);l("ld","airyInlineVideoLoadingMonitor");
l("ld",k.loadingScope);C=new t(a)}})}function t(a){return new g({stop:function(){C=new w(a);a.pause()}})}function w(a){return new g({})}var y=h(a),v=y.find(".airy-video-container"),r=y.find(".image-map-before"),z=y.find(".image-map-after"),A=y.find(".airy-video-viewport-in"),D=y.add(A),B=function(){},C;k=k||{};m("bb","airyInlineVideoLoadingMonitor");m("bb",k.loadingScope);C=new function(a){function d(a){function b(a){"object"===typeof f.ue&&"function"===typeof f.ue.count&&f.ue.count(a,(f.ue.count(a)||
0)+1)}c.bindings={loadedmetadata:function(a,c){C.airyReady(e);m("cf","airyInlineVideoLoadingMonitor");m("cf",k.loadingScope)},videounsupportederror:function(a,c){b("airyResizableInlineVideoUnsupportedError")},decodeerror:function(a,c){b("airyResizableInlineVideoDecodeError")},networkerror:function(a,c){b("airyResizableInlineVideoNetworkError")},undefinederror:function(a,c){b("airyResizableInlineVideoUndefinedError")},beganplaying:function(){C.play()},ended:function(){m("af","airyInlineVideoPlaybackMonitor");
m("af",k.playbackScope);C.stop()}};var e=a.embed(c);k.autoPlay&&e.play({isAsync:!0})}a=a||{};f.gwAiryAssetLoaded||(f.gwAiryAssetLoaded=a,a.js&&b.load.js(a.js),a.css&&b.load.css(a.css));D.addClass("player-uncommenced");k.whenReady?b.when("Airy","ready").execute(d):b.when("Airy").execute(d);return new g({airyReady:function(a){C=new e(a);C.play()},play:function(){C=new u}})}(k.airyAssetUrls);(function(){d.on("resize",function(){C.resize()})})()}})});

}
/*
     FILE ARCHIVED ON 02:36:46 Oct 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:38:24 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 160.764
  exclusion.robots: 0.061
  exclusion.robots.policy: 0.052
  cdx.remote: 0.053
  esindex: 0.008
  LoadShardBlock: 133.683 (3)
  PetaboxLoader3.datanode: 182.724 (5)
  load_resource: 283.81 (2)
  PetaboxLoader3.resolve: 111.819 (2)
*/