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

(function(k){var h=window.AmazonUIPageJS||window.P,t=h._namespace||h.attributeErrors,d=t?t("AmazonGatewayAuiAssets"):h;d.guardFatal?d.guardFatal(k)(d,window):d.execute(function(){k(d,window)})})(function(k,h,t){k.when("A").register("sg-jsutil",function(d){var g=d.$;return{safeCall:function(d,c){return g.isFunction(d)?d(c):c}}});k.when("A").register("dombinder",function(d){function g(b,a){var c=0;a=a.split(".");for(var l=a.length;c<l;c++)b=b&&b[a[c]];return b}function m(n){return c.map(c(n).data("bind").split(","),
function(a){a=a.split(":");var f=c.trim(a[0]),l=c.trim(a[1]),d=b[f];if(d)return d.init&&d.init(n,l),function(a){d.update(n,l,a)}})}var c=d.$,b={text:{update:function(b,a,f){c(b).text(g(f,a)||"")}},html:{update:function(b,a,f){c(b).html(g(f,a)||"")}},href:{update:function(b,a,f){c(b).attr("href",g(f,a)||"")}},trimText:{update:function(b,a,f){b=c(b);f=b.text();if(f.length>a){for(var l=a-4;0<=l&&0<"[.,-/#!$%^&*;:{}=-_`~()] ".indexOf(f[l]);)l--;b.text(f.substring(0,0<=l?l+1:a-3)+"...")}}},value:{update:function(b,
a,f){c(b).val(g(f,a)||"")}},visible:{update:function(b,a,f){var l=!1;"!"===a.charAt(0)&&(l=!0,a=a.substring(1));a=!!g(f,a);l!==a?c(b).show():c(b).hide()}},css:{init:function(b,a){var f=c(b),l=f.data("dombcss")||[];l[a]="";f.data("dombcss",l)},update:function(b,a,f){b=c(b);var l=b.data("dombcss"),d=l[a];f=g(f,a);d!==f&&(l[a]=f,d&&b.removeClass(d),f&&b.addClass(f))}},attr:{init:function(b,a){var f=c(b),l=f.data("dombattr")||[];l[a]={};f.data("dombattr",l)},update:function(b,a,f){var l=c(b);b=l.data("dombattr");
var d=b[a];f=g(f,a);d!==f&&(b[a]=f,d&&c.each(d,function(a,b){l.removeAttr(a)}),f&&c.each(f,function(a,b){l.attr(a,b)}))}}};return{init:function(b){var a={$root:b,bindings:[]};b.find("[data-bind]").each(function(){c.each(m(this),function(b,c){a.bindings.push(c)})});return a},update:function(b,a){c.each(b.bindings,function(b,c){c(a)})}}});k.when("A").register("gwAjax",function(d){return function(g,m){function c(c,l,n){"object"===typeof h.ue&&"function"===typeof h.ue.count&&b(m.errorCounter||
"gwAjaxError");"function"===typeof h.ueLogError&&h.ueLogError({logLevel:"WARN",attribution:"gwAjax-"+(m.id||g),message:"gwAjax call failed "+(JSON&&JSON.stringify?JSON.stringify({url:g,"params-data":m.params||m.data}):"")});"function"===typeof a&&a(c,l,n)}function b(a){"object"===typeof h.ue&&"function"===typeof h.ue.count&&h.ue.count(a,(h.ue.count(a)||0)+1)}m=d.copy(m);var n=m.success,a=m.error;m.success=function(a,b,d){a.error?c(a,b,d):"function"===typeof n&&n(a,b,d)};m.error=c;m.data=m.params?
m.params:m.data;b("gwAjaxCall");m.ajaxCounter&&b(m.ajaxCounter);return d.$.ajax(g,m)}});k.when("A","sg-jsutil","a-modal","gw-productdb","productdb-binding-helper","sg-media-builder","gw-sims","gw-popover-data").register("gw-popover",function(d,g,m,c,b,n,a,f){function l(a,b){h.uet&&h.uet(a,b,{wb:1})}function C(a){if(h.ue&&"function"===typeof h.ue.count)return h.ue.count(a)||0}function w(a){h.ue&&"function"===typeof h.ue.count&&h.ue.count(a,(h.ue.count(a)||0)+1)}function e(a){return a.closest("*[data-sgproduct]").data("sgproduct")}
function y(a,b){u[a.asin]&&u[a.asin].isResolved()?z.resetSimData():(u[a.asin]=q.Deferred(),a&&a.asin&&b?z.fetch(a,b,u[a.asin]):u[a.asin].reject())}var q=d.$,v={},u={};if(!q("html").hasClass("a-touch")){g=q('<span style="display: none" />').appendTo("body");var r=q("#gw-popover-wrapper"),p=new b(c,r),x=m.create(g,{name:"gw-asin-popover",width:"90%","max-width":900,height:590,popoverLabel:f.popoverLabel,closeButton:!1}),z=new a(p),B=q("#gw-quick-look-btn");q("#a-page").delegate("li[data-sgproduct]",
"mouseenter",function(a){q(a.currentTarget).append(B);q(a.currentTarget).find("[title]").removeAttr("title");B.addClass("active")});B.mouseenter(function(){var a=q(this),b=e(a),a=a.siblings().children("a").attr("href");y(b,a)});q(".bestsellers .listRow a").mouseenter(function(){var a=q(this),b=e(a),a=a.attr("href");y(b,a);!b||!b.asin||v[b.asin]&&v[b.asin].isResolved()||!(a=c.get(b.asin))||(v[b.asin]=q.Deferred(),v[b.asin].resolve(a))});k.when("gwAjax").execute(function(a){var b={};q("#a-page").delegate(".fresh-shoveler li[data-sgproduct]",
"mouseenter mousemove",function(f){f=q(f.currentTarget);var e=f.data("sgproduct").asin;if(!v[e]||!v[e].isResolved()){var p=[];f.add(f.prev("li[data-sgproduct]")).add(f.next("li[data-sgproduct]")).each(function(){var a=q(this).data("sgproduct");if(a&&a.asin){var f=c.get(a.asin),e=(f=!(!b[a.asin]&&f&&f.loading))&&1500<d.now()-b[a.asin];if(!f||e)p.push(a.asin),b[a.asin]=d.now()}});v[e]=q.Deferred();p.length?(a("/gp/gw/ajax/pdb.html",{id:"quicklook-pdb",data:{swn:"productdb-ajax",sa:'{"asins": ["'+p.join('","')+
'"]}',oe:'{"isDesktop":1,"isTablet":0,"isMobile":0}',rrid:h.ue_id}}).done(function(a){c._add(a);for(var f=0;f<p.length;f++)b[p[f]]=Infinity;v[e].resolve(a)}).fail(v[e].reject),w("freshHoverCount")):v[e].resolve()}})});q("#a-page").delegate("li[data-sgproduct]","mouseleave",function(a){B.removeClass("active")});var A="#a-popover-"+x.attrs("id")+" ";m=q.map([".a-popover-header { display: none; }",".a-popover-inner { padding: 0px !important; margin: 0px !important; overflow: hidden !important; height: 100% !important; }"],
function(a){return A+a}).join(" ");q("head").append("<style>"+m+"</style>");d.on("a:popover:hide:gw-asin-popover",function(a){h.history.state&&h.history.state.popup&&h.history.back();p.clear()});q(h).bind("popstate",function(){x.hide()});return{show:function(a,b){w("freshPopOverOn");l("bb","popoverLatency"+C("freshPopOverOn"));h.history&&h.history.pushState&&h.history.pushState({popup:1},"");p.setAsin(a,{beforeUpdate:function(c){if(c.loading)return w("freshPopOverLoading"),c;var f=(new n(c.images[0])).autoCrop().scaleXY(500,
400).build(),f={url:b,image:f,actionUrl:{action:"/gp/product/handle-buy-box/"+function(a){return a.substring(a.indexOf("/ref=")+1,a.length)}(b)}};c.reviews&&(f.reviews=q.extend({},c.reviews,{url:b+"#customerReviews"}));q.when(u[a],v[a]).done(function(b,c){z.showSims(a,b)});u[a].fail(z.setNoSimView);l("cf","popoverLatency"+C("freshPopOverOn"));return q.extend({},c,f)}});x.show()},hide:function(){x.hide()}}}});k.when("A","sg-media-builder","gw-productdb").register("gw-sims",function(d,
g,m){var c=d.$;return function(b){function n(a,b){h.uet&&h.uet(a,b,{wb:1})}function a(a){if(h.ue&&"function"===typeof h.ue.count)return h.ue.count(a)||0}function f(a){h.ue&&"function"===typeof h.ue.count&&h.ue.count(a,(h.ue.count(a)||0)+1)}function l(){if(!A){A=!0;D.hide();H.show();F.animate({height:"100%"},300);var b=0,f=0,e=0,p=parseInt(H.css("width"),10),r=H.find(".sims-img-link");r.each(function(a,r){b+=r.clientWidth;p<b?c(r).hide():(f=b,e+=1)});var l=p-f;0<l&&(l=Math.floor(20+l/e-1),20<l&&r.css({"padding-right":l/
2+"px","padding-left":l/2+"px"}));r="popoverLatency"+a("freshPopOverOn");n("be",r);h.uex&&h.uex("ld",r,{wb:1})}}function d(){0===--p&&l()}function w(a,e){var p=c("<a>"),r=c("<div>");p.attr("class","sims-img-link");r.addClass("sims-img-border");e&&p.addClass("selected");p.click(function(){f("freshPopOverSimsClick");H.find(".sims-img-link").removeClass("selected");c(this).addClass("selected");b.clear();b.setAsin(a.asin,{beforeUpdate:function(b){b=c.extend(!0,{},a);var e=a.url;if(b.loading)f("freshPopOverLoading");
else{var p=(new g(b.images[0])).autoCrop().scaleXY(500,400).build(),p={url:e,image:p,actionUrl:{action:"/gp/product/handle-buy-box/"+y(e)}};b.reviews&&(p.reviews=c.extend({},b.reviews,{url:e+"#customerReviews"}));b=c.extend({},b,p)}return b}})});return p.append(r)}function e(){c.each(x,function(a,b){b.url=b.url.replace(/ref=gw_pdb_pdt-[\d]+/,y(z)+"&gw_sims-"+a)})}function y(a){return 0<=a.indexOf("redirect.html?")?a.replace(/.*redirect.html|(token|location)=.*?&/g,""):a.substring(a.indexOf("/ref=")+
1,a.length)}function q(){A=!1;e();var a=[];p=x.length>p?p:x.length;c(x).each(function(b,f){f.loading=!1;if(f.images[0].src){var e=(new g(f.images[0])).autoCrop().scaleXY(130,100).build().src,r=c("<img>");r.attr("src",e);r.attr("class","sims-img");r.load(d);e=c("<div>");e.attr("class","sims-img-container");var l=c("<div>");l.addClass("sims-img-overlay");c(e).append(l);e.append(r);r=w(f,0===b);r.append(e);a.push(r)}return b<p-1});p=a.length;c(a).each(function(a,b){H.append(b)});setTimeout(l,B)}function v(){k.when("gw-popover").execute(function(a){a.hide()})}
function u(){D.hide();F.addClass("hidden");E.bind("click",v)}function r(){H.empty();F.add(D).removeAttr("style");F.removeClass("hidden");E.unbind("click",v);D.show();H.hide();p=8;x=[]}var p,x,z,B=1E4,A=!1,E=c("#sims-section"),F=E.find(".sims-wrapper"),D=E.find(".sims-loading"),H=E.find(".sims-details");c("#gw-asin-popover");return{fetch:function(b,c,f){n("af","popoverLatency"+a("freshPopOverOn"));r();z=c;b.url=z;x.push(b);c=m.get(b.asin);setTimeout(f.reject,B);c.sims?f.resolve(c.sims):k.when("gwAjax").execute(function(a){a("/gp/gw/ajax/pdb.html",
{id:"quicklook-sims-pdb",data:{swn:"productdb-ajax",sa:'{"asins": [], "entityId":"'+b.asin+'","datasetId": "purchase"}',oe:'{"isDesktop":1,"isTablet":0,"isMobile":0}',rrid:h.ue_id}}).done(function(a){if(a&&a.p&&0<a.p.length){var c=b.asin,e=a.p;e&&(m.get(c).sims||m.addSims(c,e));return f.resolve(a.p)}return f.reject()}).fail(f.reject)});return f},setNoSimView:u,showSims:function(a,b){var e=m.get(a);e.loading?f("freshPopOverSimLoadBeforePrimeAsin"):x=e.sims?c.merge([e],e.sims):c.merge([e],b);4<x.length?
q():(f("simsLessThanThreshold"),u())},resetSimData:r,setWaitPeriod:function(a){B=a}}}});k.when("A").execute(function(d){var g=d.$,m,c;if(!d.$("html").hasClass("a-touch"))if(h.cvox)h.ue&&h.ue.tag&&h.ue.tag("screenReaderOn");else{g("#a-page").delegate("*[data-sgproduct] #gw-quick-look-btn","click",function(c){b(c)});g("#a-page").delegate(".bestseller-list *[data-sgproduct]","click",function(c){b(c)});k.when("gw-popover").execute(function(b){m=b;g("#gw-popover-close").click(function(){m.hide()});
c&&m.show.apply(m,c)});var b=function(b){if(!(1<b.which||b.shiftKey||b.altKey||b.metaKey||b.ctrlKey)){var a,f;g(b.target).parents(".bestseller-list").length?(a=g(b.currentTarget).data("sgproduct"),f=g(b.target).closest("a").attr("href")):(a=g("#gw-quick-look-btn").closest("*[data-sgproduct]").data("sgproduct"),f=g("#gw-quick-look-btn").siblings().children("a").attr("href"));var l=[a.asin,f];a.asin&&f&&(b.preventDefault(),m?m.show.apply(m,l):c=l)}}}});k.when("A","sg-jsutil","dombinder").register("productdb-binding-helper",
function(d,g,m){return function(c,b){function d(a,b){m.update(e,l(b.beforeUpdate,a));a.loading||l(b.load,a)}function a(a){f();k=function(){a(h)};h.pdb_observe(k)}function f(){h&&k&&(h.pdb_unobserve(k),k=null)}var l=g.safeCall,h=null,k=null,e=m.init(b);this.setAsin=function(b,e){e=e||{};f();h=c.get(b);d(h,e);h.loading&&a(function(a){d(a,e)});return h};this.clear=function(){f();h={};m.update(e,h)}}});h.P&&k.when("jQuery","afterLoad").register("gw-resource-logger",function(d){return{instrumentResources:function(g){var m;
m=!1;if(d.isArray(g)&&!d.isEmptyObject(g)){m=!0;for(var c=0;c<g.length;c++){var b=g[c];if("id"in b&&"regex"in b&&"initiator"in b){if(!("string"===typeof b.id&&"string"===typeof b.initiator&&b.regex instanceof RegExp)){m=!1;break}}else{m=!1;break}}}c=h.performance&&"function"===typeof h.performance.getEntriesByType&&"undefined"!==typeof h.performance.getEntriesByType("resource")&&"undefined"!==typeof h.ue;if(m&&c){m=Array(g.length);for(c=0;c<m.length;c++)m[c]=!1;for(b=c=0;b<h.performance.getEntriesByType("resource").length&&
c<g.length;b++)for(var n=h.performance.getEntriesByType("resource")[b],a=n.name,f=n.initiatorType,l=0;l<g.length;l++)if(!m[l]){var k=g[l].regex;if(f===g[l].initiator&&k.test(a)){a=g[l].id;f=n;n=f.duration;h.ue.count&&(h.ue.count(a+":duration",n),h.ue.count(a+":startTime",f.startTime));h.ue.tag&&(f=void 0,f=50>n?a+":cached":a+":notCached",h.ue.tag(f));m[l]=!0;c++;break}}}}}});k.register("sg-media-builder",function(){return function(d){var g=this,m=d.src,c=[];g.build=function(){var b=c.join("_");
return{src:m.replace(/\.([^.]+)$/,"._"+b+"_.$1"),alt:d.alt}};g.autoCrop=function(){c.push("AC");return g};g.scaleX=function(b){c.push("SX"+b);return g};g.scaleY=function(b){c.push("SY"+b);return g};g.upScaleX=function(b){c.push("UX"+b);return g};g.upScaleY=function(b){c.push("UY"+b);return g};g.scaleXY=function(b,c){return g.upScaleX(b).scaleY(c)}}});k.when("A","gwAjax").register("shogunProductDB",function(d,g){function m(c){var a=[];b[c]={loading:!0,pdb_observe:function(b){a.push(b)},
pdb_unobserve:function(b){a=d.$.grep(a,function(a){return a!==b})},_trigger:function(){d.$.each(a,function(){this.call(b[c])})}};return b[c]}function c(c,a){this.ajaxUrl=c;this.experienceStr=a;this._add=function(a){a.p&&d.$.each(a.p,function(a,c){if(c.asin){var f=b[c.asin]||m(c.asin);d.$.extend(f,c,{loading:!1,error:!1});f._trigger(c)}})};this.addSims=function(a,c){if(c){var n=b[a]||m(a);d.$.extend(n,{sims:c});n._trigger(a)}};this._ajax=function(b,l){var m=d.$.extend(!0,{},c,{params:{sa:JSON.stringify(b),
oe:a}});h.ue_sid&&(m.url+="/"+h.ue_sid);h.ue_id&&(m.params.rrid=h.ue_id);return g(m.url,{method:m.method,params:m.params,success:l.success,error:l.error,id:"gw-jslibs-"+l.id})};this.get=function(a){return a in b?b[a]:m(a)}}var b={};return function(b,a){return new c(b,a)}});k.when("jQuery","p-detect").register("component-feed-carousel",function(d,g){var m=d.extend(!0,{},g);d.each({pointerPrefix:function(){return"onmspointerup"in document||"onpointerup"in document?"onpointerup"in document?
"pointer":"MSPointer":!1},actionMode:function(){var b=m.capabilities.pointerPrefix;return b?b:m.capabilities.touch?"touch":"mouse"}},function(b,a){m.capabilities[b]=a()});var c={};d.each({start:{mouse:"down",touch:"start",pointer:"down",MSPointer:"Down"},end:{mouse:"up",touch:"end",pointer:"up",MSPointer:"Up"}},function(b,a){var f=m.capabilities.actionMode,l="string"===typeof a?a:a[f];c[b]=l?f+l:a.mouse===t?"":"mouse"+a.mouse});m.action=c;var b=function(b,a,c){this.init(b,a,c)};b.prototype={init:function(b,
a,c){var l=this;d("html").hasClass("a-touch")&&b.addClass("feed-carousel-touch");l.adjustMarginOnChange=!0;l.defaultCssRightMargin=null;l.minItems=a||10;l.imgClass=".product-image";l.$carousel=b;l.cfMinItems=c||6;l.cfFired=!1;l.shovelerReadyFired=!1;l.slotId=l.getSlotId();l.touch=l.$carousel.hasClass("feed-carousel-touch");l.ajaxSource=l.$carousel.parent().hasClass("ajaxSource");l.$shelf=l.$carousel.find(".feed-carousel-shelf");l.$viewport=l.$carousel.find(".feed-carousel-viewport");l.$spinner=l.$carousel.find(".spinner");
l.$left=d(".feed-carousel-control.feed-left",b);l.$right=d(".feed-carousel-control.feed-right",b);l.$buttons=d(".feed-carousel-control",b);l.$thumb=d(".feed-scrollbar-thumb",b);l.shelfLeft=-1*parseInt(l.$shelf.css("left"),10);l.calcWidth=d("html").hasClass("a-lt-ie9");l.noOpacity=d("html").hasClass("a-lt-ie9");l.$left.attr("aria-hidden",!0);l.$right.attr("aria-hidden",!0);l.bindEvents();l.$carousel.data("Carousel",l);l.$carousel.trigger("change");l.token=!1;l.lock=function(){l.token=!0};l.unlock=
function(){l.token=!1};l.locked=function(){return l.token};k.when("gw-first-carousel").execute(function(){l.first=l.$carousel.hasClass("first-carousel");l.shouldControlsOn()?l.showControls():l.hideControls()})},getSlotId:function(){var b=this.$carousel.closest(".gw-widget-instrument");return 0<b.length?d(b[0]).attr("id"):null},bindEvents:function(){function b(a){return m.capabilities.pointerPrefix&&-1<d.inArray(a.originalEvent.pointerType,[2,"touch"])||"touch"===m.capabilities.actionMode}var a=this,
c=d("body");a.$buttons.ready(function(b){a.shovelerReadyFired||(a.slotId&&(b=a.slotId.toString()+"-active",h.GWI&&h.GWI.recordLatency(b),h.GWI&&h.GWI.register(b)),a.shovelerReadyFired=!0)});a.$carousel.change(function(b){a.updateItems();a.updateSpinner();a.updateShelf();a.updateControls();null===a.defaultCssRightMargin&&a.$shelf.children("li").first()&&(a.defaultCssRightMargin=parseInt(a.$shelf.children("li").first().css("margin-right"),10));a.adjustMarginOnChange&&a.adjustCardMargin()});a.$left.click(function(b){b.preventDefault();
a.changePage(-1);a.slotId&&a.logCounter("gw-"+a.slotId.toString()+"-left")});a.$right.click(function(b){b.preventDefault();a.changePage(1);a.slotId&&a.logCounter("gw-"+a.slotId.toString()+"-right")});a.bindImageLoadEvents(a.$shelf);var l;d(h).resize(function(){clearTimeout(l);l=setTimeout(function(){var b=a.getDimensions(),b=Math.max(Math.min(b.shelfLeft,b.maxLeft),0);a.moveShelf(b)},100)});a.$thumb.mousedown(function(b){var l=b.clientX;1===b.which&&(b.preventDefault(),a.$carousel.addClass("scrolling"),
c.bind("mousemove.feed-carousel",function(b){var c=a.getDimensions(),c=Math.max(Math.min(c.shelfLeft+1/c.pageRatio*(b.clientX-l),c.maxLeft),0);l=b.clientX;a.moveShelf(c)}),d(document).bind("selectstart.feed-carousel",function(){return!1}))});c.add(h).mouseup(function(b){a.$carousel.removeClass("scrolling");a.$carousel.hasClass("hovering")||a.hideControls();c.unbind("mousemove.feed-carousel");d(document).unbind("selectstart.feed-carousel")});a.$carousel.hover(function(){a.$carousel.addClass("hovering");
clearTimeout(a.hoverTimer);a.hoverTimer=setTimeout(function(){a.$carousel.hasClass("hovering")&&!a.$carousel.hasClass("touching")?a.showControls():a.$carousel.removeClass("touching")},300)},function(){a.$carousel.removeClass("hovering touching");clearTimeout(a.hoverTimer);a.$carousel.hasClass("scrolling")||(a.hoverTimer=setTimeout(function(){a.$carousel.hasClass("hovering")||a.hideControls()},600))});a.$carousel.bind(m.action.start,function(c){b(c)&&(a.$carousel.addClass("touching"),clearTimeout(a.touchTimer),
a.touchTimer=setTimeout(function(){a.$carousel.removeClass("touching")},5E3))});a.$carousel.bind(m.action.end,function(c){b(c)&&(a.$carousel.removeClass("touching"),clearTimeout(a.touchTimer),clearTimeout(a.hoverTimer))});a.$viewport.scroll(function(){a.shelfLeft=a.$viewport.scrollLeft();a.updateControls()})},bindImageLoadEvents:function(b){var a=this;d(a.imgClass,b).one("load",function(){a.$carousel.trigger("change")})},getDimensions:function(){var b=this.$shelf.width(),a=this.shelfLeft,c=this.$carousel.width();
return{pageWidth:c,shelfWidth:b,shelfLeft:a,pageRatio:c/b,leftRatio:a/b,maxLeft:b-c}},updateItems:function(){var b=this,a=b.$shelf.find(".feed-carousel-card"),c=function(a){return"none"===a.css("display")};a.each(function(a,g){var m=d(g);if(!c(m))return!0;m.attr("aria-setsize",b.$shelf.find(".feed-carousel-card").size());m.attr("aria-posinset",a+1);m.attr("aria-hidden",!1);m.attr("role","listitem");return 0>=m.find(b.imgClass).filter(function(){return!this.complete}).length?(m.css("display","inline-block"),
a+1>=b.cfMinItems&&!b.cfFired&&(b.slotId&&(m=b.slotId.toString()+"-visible",h.GWI&&h.GWI.recordLatency(m),h.GWI&&h.GWI.register(m)),b.cfFired=!0),!0):!1});b.$items=a.filter(function(){return!c(d(this))})},updateShelf:function(){var b=0;this.calcWidth&&(this.$shelf.children().each(function(){b+=d(this).outerWidth(!0)}),this.$shelf.width(b));this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems&&
this.ajaxSource?this.$spinner.show():(this.size()<this.minItems&&"object"===typeof h.ue&&"function"===typeof h.ue.count&&h.ue.count("shovelerNotEnoughItem",(h.ue.count("shovelerNotEnoughItem")||0)+1),this.$spinner.hide())},updateControls:function(){this.updateArrows();this.updateScrollThumb()},shouldControlsOn:function(){return this.first&&!this.touch},showControls:function(b){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:b,queue:!1})},hideControls:function(b){var a=this.$thumb;
this.shouldControlsOn()||(a=a.add(this.$buttons));a.stop(!0,!0).fadeOut({duration:300,complete:b,queue:!1})},appendCards:function(b){this.$shelf.append(b);this.bindImageLoadEvents(b);this.$carousel.trigger("change")},updateArrows:function(){var b=this,a=b.getDimensions();d.each([{$e:b.$left,enabled:0<a.shelfLeft},{$e:b.$right,enabled:a.shelfLeft<a.maxLeft}],function(a,c){var d=c.$e;c.enabled?d.removeClass("feed-control-disabled"):d.addClass("feed-control-disabled");b.noOpacity&&(c.enabled?d.css("opacity",
"1"):d.css("opacity","0.5"))})},updateScrollThumb:function(){var b=this.getDimensions(),a=b.leftRatio*b.pageWidth,b=Math.min(b.pageRatio*b.pageWidth,b.pageWidth);this.$thumb.width(b).each(function(){d(this).animate({left:a},0)})},logCounter:function(b){"object"===typeof h.ue&&"function"===typeof h.ue.count&&(h.ue.count(b,(h.ue.count(b)||0)+1),h.ue.count("gw-shoveler-click",1))},changePage:function(b){var a=this.getDimensions(),c=this.alignWithItem(a.shelfLeft+b*a.pageWidth),c=Math.min(0>b?c.right:
c.left,a.maxLeft);this.locked()||(this.lock(),a.shelfLeft===c?(this.bounce(this.$shelf,-30*b),this.bounce(this.$thumb,6*b)):this.moveShelf(c,400))},moveShelf:function(b,a){function c(){l.updateArrows();l.unlock()}var l=this;a=a||0;l.shelfLeft=b;if(l.touch)l.$viewport.animate({scrollLeft:b},a,"swing",c);else{var d=l.getDimensions(),d=b/d.shelfWidth*d.pageWidth;l.$shelf.animate({left:-b},a,"swing",c);l.$thumb.animate({left:d},a,"swing",function(){l.updateScrollThumb();l.unlock()})}},getItems:function(){return this.$items},
size:function(){return this.getItems().length},alignWithItem:function(b){if(0>b)return{left:0,right:0};var a=this,c=a.getItems(),l=c.map(function(){var c=a.cardPosition(d(this));if(b>=c.left&&b<=c.right)return c}).get(0);return l?l:a.cardPosition(c.last())},cardPosition:function(b){var a=b.position().left;b=a+b.outerWidth(!0);return{left:a,right:b}},bounce:function(b,a){function c(a){var b={};b[l.touch?"left":"marginLeft"]=a;return b}var l=this;b.each(function(){var b=d(this);b.animate(c(a),400,"swing",
function(){b.animate(c(0),100,"swing",l.unlock)})})},setCardMargin:function(b){this.$shelf.children("li").first()&&this.$shelf.children("li").first().css("margin-right")!==b+"px"&&(this.$shelf.children("li").css("margin-right",b+"px"),this.updateShelf())},adjustCardMargin:function(b){b=b===t||null===b?this.defaultCssRightMargin:b;this.setCardMargin(b);var a=this.getDimensions(),a=0>a.maxLeft?Math.ceil(-a.maxLeft/this.size()):b;this.setCardMargin(a<b?b:a)}};return{createCarousel:function(c,a,f){d(c).each(function(c,
g){var n=d(g);new b(n,a,f)})}}})});

}
/*
     FILE ARCHIVED ON 03:28:35 Oct 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:26:53 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 510.593
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.078
  cdx.remote: 0.063
  esindex: 0.01
  LoadShardBlock: 457.363 (3)
  PetaboxLoader3.resolve: 418.164 (3)
  PetaboxLoader3.datanode: 149.266 (5)
  load_resource: 130.885 (2)
*/