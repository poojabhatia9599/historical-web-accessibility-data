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

(function(n){var g=window.AmazonUIPageJS||window.P,q=g._namespace||g.attributeErrors,f=q?q("AmazonGatewayAuiAssets",""):g;f.guardFatal?f.guardFatal(n)(f,window):f.execute(function(){n(f,window)})})(function(n,g,q){n.register("gateway-asset-load",function(){g.uet&&g.uet("cf","gateway-asset-load",{wb:1});g.uex&&g.uex("ld","gateway-asset-load",{wb:1})});n.when("A","load").execute("ah-inst-img-size",function(f){function m(a){if(!a)return null;var b=c(a).attr("src");a=c(a).data("a-hires");return b===a?
null:b}function k(a){"object"===typeof d.ue&&"function"===typeof d.ue.count&&d.ue&&d.ue.count(a,(d.ue.count(a)||0)+1)}function h(a,b){k("gw-img-size-invoke");c.ajax({type:"HEAD",async:!0,url:a,success:function(c,e,d){c=g.performance.getEntriesByName(a).filter(function(a){return"img"===a.initiatorType});0<c.length&&"decodedBodySize"in c[0]?(k("gw-img-size-success"),f.trigger(b,parseInt(c[0].decodedBodySize,10))):k("gw-img-size-error")},error:function(a,b,c){k("gw-img-size-error")}})}function l(a,b){0<
a.length&&(e[b]={count:a.length,totalSize:0,images:c.unique(a)},c(e[b].images).each(function(a,c){a=b+"_"+a;f.on(a,function(a){isNaN(a)||(--e[b].count,e[b].totalSize+=a,0===e[b].count&&d.ue&&d.ue.count(b,e[b].totalSize))});h(c,a)}))}function b(a,b){b=b||a.length;var e=[];c(a.slice(0,b)).each(function(a,b){a=m(b);if(!a)return[];e.push(a)});return e}function a(){return g.performance&&g.performance.getEntriesByName?!1:(k("gw-img-size-error"),!0)}var c=f.$,d=g,e=[];n.execute("inst-cf-img",function(){if(!a()){k("gw-inst-img");
var b=f.$(".gw-critical-content img");(b=0>=b.length?null:m(b[0]))&&l([b],"gw-cf-img-size")}});n.when("x1").execute("inst-x1-img",function(){a()||n.execute("inst-x1-rec-img",function(){var a=1;c("#gw-content-grid .feed-carousel .feed-carousel-shelf").slice(0,2).each(function(e,d){2>=a&&(e="gw-shoveler-img-size-"+a++,d=c(d).find("img"),6<=d.length&&(d=b(d,6),l(d,e)))})})})});"use strict";n.when("A").register("dombinder",function(f){function m(b,a){var c=0;a=a.split(".");for(var d=a.length;c<d;c++)b=
b&&b[a[c]];return b}function k(b){return h.map(h(b).data("bind").split(","),function(a){a=a.split(":");var c=h.trim(a[0]),d=h.trim(a[1]),e=l[c];if(e)return e.init&&e.init(b,d),function(a){e.update(b,d,a)}})}var h=f.$,l={text:{update:function(b,a,c){h(b).text(m(c,a)||"")}},html:{update:function(b,a,c){h(b).html(m(c,a)||"")}},href:{update:function(b,a,c){h(b).attr("href",m(c,a)||"")}},trimText:{update:function(b,a,c){b=h(b);c=b.text();if(c.length>a){for(var d=a-4;0<=d&&0<"[.,-/#!$%^\x26*;:{}\x3d-_`~()] ".indexOf(c[d]);)d--;
b.text(c.substring(0,0<=d?d+1:a-3)+"...")}}},value:{update:function(b,a,c){h(b).val(m(c,a)||"")}},visible:{update:function(b,a,c){var d=!1;"!"===a.charAt(0)&&(d=!0,a=a.substring(1));a=!!m(c,a);d!==a?h(b).show():h(b).hide()}},css:{init:function(b,a){b=h(b);var c=b.data("dombcss")||[];c[a]="";b.data("dombcss",c)},update:function(b,a,c){b=h(b);var d=b.data("dombcss"),e=d[a];c=m(c,a);e!==c&&(d[a]=c,e&&b.removeClass(e),c&&b.addClass(c))}},attr:{init:function(b,a){b=h(b);var c=b.data("dombattr")||[];c[a]=
{};b.data("dombattr",c)},update:function(b,a,c){var d=h(b);b=d.data("dombattr");var e=b[a];c=m(c,a);e!==c&&(b[a]=c,e&&h.each(e,function(a,b){d.removeAttr(a)}),c&&h.each(c,function(a,b){d.attr(a,b)}))}}};return{init:function(b){var a={$root:b,bindings:[]};b.find("[data-bind]").each(function(){h.each(k(this),function(b,d){a.bindings.push(d)})});return a},update:function(b,a){h.each(b.bindings,function(b,d){d(a)})}}});"use strict";n.when("jQuery").register("gwAjax",function(f){return function(m,k){function h(b,
d,e){"object"===typeof g.ue&&"function"===typeof g.ue.count&&(l(k.errorCounter||"gwAjaxError"),k.id&&l("gwAjaxError:"+k.id));"function"===typeof g.ueLogError&&g.ueLogError({logLevel:"WARN",attribution:"gwAjax-"+(k.id||m),message:"gwAjax call failed "+(JSON&&JSON.stringify?JSON.stringify({url:m,"params-data":k.params||k.data}):"")});"function"===typeof a&&a(b,d,e)}function l(a){"object"===typeof g.ue&&"function"===typeof g.ue.count&&g.ue.count(a,(g.ue.count(a)||0)+1)}k=f.extend(!0,{},k);var b=k.success,
a=k.error;k.success=function(a,d,e){a.error?h(a,d,e):"function"===typeof b&&b(a,d,e)};k.error=h;k.data=k.params?k.params:k.data;l("gwAjaxCall");k.ajaxCounter&&l(k.ajaxCounter);return f.ajax(m,k)}});"use strict";n.when("jQuery","gw-hud-punt").execute("gw-hud-sidekick",function(f){f("#gw-hud-grid").css({display:"none"})});"use strict";n.register("gw/card-modal",function(){function f(f,h){if(m)return m(f,h);n.when("__gw-card-modal").execute(function(l){l(f,h)});return{show:function(){}}}var m;n.when("__gw-card-modal").execute(function(f){m=
f});return{show:function(k,h){f(k,h).show()},preload:function(k,h){n.when("ready").execute(function(){f(k,h)})}}});n.when("A","a-modal","gw/card-loader").register("__gw-card-modal",function(f,m,k){var h={},l=f.$;return function(b,a){if(h[b])return h[b];var c=k.decodeToken(b).name,d=l('\x3cspan style\x3d"display: none" /\x3e').appendTo("body");a=l.extend({name:c||"gw-card-popover",closeButton:!0,hideHeader:!0,style:"gw",content:l('\x3cdiv aria-hidden\x3d"true"\x3e\x3c/div\x3e').html(a&&a.loading||
'\x3cdiv class\x3d"gw-modal-loading"\x3e\x3ci class\x3d"gw-spinner"\x3e\x3c/i\x3e\x3c/div\x3e')},a);var e=h[b]=m.create(d,a);if("gw"===a.style){var g="#a-popover-"+e.attrs("id"),d=l.map([" .a-popover-inner { overflow: hidden !important; height: 100% !important; min-width: 80px; min-height: 80px; }"," .a-popover-wrapper { border: none; border-radius: 0; }"],function(a){return g+a}).join(" ");l("head").append("\x3cstyle\x3e"+d+"\x3c/style\x3e");if(a.closeButton)f.on("a:popover:show:"+a.name,function(a){a=
l(g);a.find("button.a-button-close").addClass("gw-close-button");a.find(".a-icon.a-icon-close").attr("class","gw-icon gw-icon-close")})}k.request(b).then(function(a){e.update({content:a.html()})});return h[b]}});"use strict";n.when("gw-promise","urlb64decode").register("gw/card-loader",function(f,g){function k(){try{var b=(new URL(document.location.href)).searchParams.get("cardOverrides");if(b)return"cardOverrides\x3d"+b}catch(a){if(b=document.location.href.match(/[?&](cardOverrides=.*?)([&#]|$)/),
null!==b)return b[1]}}var h=Array.isArray||function(b){return"[object Array]"===Object.prototype.toString.call(b)},l={};return{decodeToken:function(b){return JSON.parse(g(b.substring(1)))},request:function(b){function a(a){for(var b=0,c=m.length;b<c;b++)m[b]&&m[b](a)}for(var c=h(b)?b:[b],d=k(),e="/homepage.html/ajax/card"+(d?"?"+d:""),d=[],g=[],m=[],u=[],p=0,q=c.length;p<q;p++){var v=c[p];l[v]?d[p]=l[v]:(d[p]=l[v]=f(function(a,b){g[p]=a;m[p]=b}),u[p]={t:v})}0<u.length&&n.when("A").execute(function(b){b.post(e,
{chunk:function(a){var c=a[1];c&&(c.ok?g[c.i]&&g[c.i]({render:function(a){b.$(a).html(c.body)},html:function(){return c.body}}):m[c.i]&&m[c.i](c.body))},success:function(b,c,e){a("Not Found")},error:function(b,c,e){a(e)},abort:function(b){a("Aborted")},contentType:"application/json",paramsFormat:"json",params:u})});return h(b)?d:d[0]}}});g.Promise?n.register("gw-promise",function(){return function(f){return new Promise(f)}}):n.when("jQuery").register("gw-promise",function(f){return function(g){var k=
f.Deferred();g(k.resolve,k.reject);return{then:k.then,"catch":function(f){return k.fail(f)}}}});n.register("urlb64decode",function(){if(g.atob){var f={"-":"+",_:"/"};return function(m){return g.atob(m.replace(/[-_]/g,function(k){return f[k]}))}}return function(f){f=f.replace(/\s|=/g,"");for(var k="",h=0,g=f.length;h<g;h+=4){for(var b=0,a=h,c=24;0<c&&a<g;)b+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(f.charAt(a++))<<(c-=6);k+=String.fromCharCode(b>>>16&255,b>>>8&255,
b&255)}return k}});g.P&&n.when("jQuery","afterLoad").register("gw-resource-logger",function(f){return{instrumentResources:function(m){var k;k=!1;if(f.isArray(m)&&!f.isEmptyObject(m)){k=!0;for(var h=0;h<m.length;h++){var l=m[h];if("id"in l&&"regex"in l&&"initiator"in l){if(!("string"===typeof l.id&&"string"===typeof l.initiator&&l.regex instanceof RegExp)){k=!1;break}}else{k=!1;break}}}h=g.performance&&"function"===typeof g.performance.getEntriesByType&&"undefined"!==typeof g.performance.getEntriesByType("resource")&&
"undefined"!==typeof g.ue;if(k&&h){k=Array(m.length);for(h=0;h<k.length;h++)k[h]=!1;for(l=h=0;l<g.performance.getEntriesByType("resource").length&&h<m.length;l++)for(var b=g.performance.getEntriesByType("resource")[l],a=b.name,c=b.initiatorType,d=0;d<m.length;d++)if(!k[d]){var e=m[d].regex;if(c===m[d].initiator&&e.test(a)){a=m[d].id;c=b.duration;g.ue.count&&(g.ue.count(a+":duration",c),g.ue.count(a+":startTime",b.startTime));g.ue.tag&&g.ue.tag(50>c?a+":cached":a+":notCached");k[d]=!0;h++;break}}}}}});
"use strict";n.register("gw-video-orchestrator",function(){function f(a){a=g(a);a!==l&&(l&&l.callback(!1),(l=a)&&l.callback(!0))}function g(a){if(a)for(var b=h.length;b--;)if(h[b].element===a)return h[b]}function k(a,b){return b.priority-a.priority}var h=[],l,b=function(){l||h.length&&90<=h[0].priority&&f(h[0].element)};n.when("A","ready").execute(function(a){b=function(){if(h.length&&(!l||!a.onScreen(l.element))){var b=h.filter(function(b){return a.onScreen(b.element,b.buffer||0)});f(0<b.length?
b[0].element:q)}};a.on("scroll resize orientationChange",b);b()});return{subscribe:function(a,c,d){if(!a||!c)throw Error("Subscribe required a valid element and callback function");d=d||{};c={element:a,callback:n.guardCurrent(c),buffer:"undefined"===typeof d.buffer?0:d.buffer,priority:"undefined"===typeof d.priority?50:d.priority};if(g(a))throw Error("element is already subscribed");h.push(c);h.sort(k);b()},unsubscribe:function(a){if(!a)throw Error("unsubscribe requires a valid element");l&&l.element===
a&&f();for(var c=h.length;c--;)h[c].element===a&&(h.splice(c,1),b())},elect:f}});"use strict";n.when("jQuery","gwAjax").register("shogunProductDB",function(f,m){function k(b){var a=[];l[b]={loading:!0,pdb_observe:function(b){a.push(b)},pdb_unobserve:function(b){a=f.grep(a,function(a){return a!==b})},_trigger:function(){f.each(a,function(){this.call(l[b])})}};return l[b]}function h(b,a){this.ajaxUrl=b;this.experienceStr=a;this._add=function(a){a.p&&f.each(a.p,function(a,b){b.asin&&(a=l[b.asin]||k(b.asin),
f.extend(a,b,{loading:!1,error:!1}),a._trigger(b))})};this.addSims=function(a,b){if(b){var e=l[a]||k(a);f.extend(e,{sims:b});e._trigger(a)}};this._ajax=function(c,d,e){e=e||{};c=f.extend(!0,{},b,{params:{sa:c,oe:a}},e);g.ue_id&&(c.params.rrid=g.ue_id);return m(c.url,{method:c.method,params:c.params,success:d.success,error:d.error,id:"gw-jslibs-"+d.id})};this.get=function(a){return a in l?l[a]:k(a)}}var l={};return function(b,a){return new h(b,a)}});"use strict";n.when("jQuery","p-detect").register("component-feed-carousel",
function(f,m){var k=f.extend(!0,{},m);f.each({pointerPrefix:function(){return"onmspointerup"in document||"onpointerup"in document?"onpointerup"in document?"pointer":"MSPointer":!1},actionMode:function(){var b=k.capabilities.pointerPrefix;return b?b:k.capabilities.touch?"touch":"mouse"}},function(b,a){k.capabilities[b]=a()});var h={};f.each({start:{mouse:"down",touch:"start",pointer:"down",MSPointer:"Down"},end:{mouse:"up",touch:"end",pointer:"up",MSPointer:"Up"}},function(b,a){var c=k.capabilities.actionMode,
d="string"===typeof a?a:a[c];h[b]=d?c+d:a.mouse===q?"":"mouse"+a.mouse});k.action=h;var l=function(b,a,c,d){this.init(b,a,c,d)};l.prototype={init:function(b,a,c,d){var e=this;f("html").hasClass("a-touch")&&b.addClass("feed-carousel-touch");e.config=d||{};e.adjustMarginOnChange=!1!==e.config.adjustMarginOnChange;e.defaultCssRightMargin=null;e.minItems=a||10;e.imgClass=".product-image";e.$carousel=b;e.cfMinItems=c||6;e.cfFired=!1;e.shovelerReadyFired=!1;e.slotId=e.getSlotId();e.touch=e.$carousel.hasClass("feed-carousel-touch");
e.ajaxSource=e.$carousel.parent().hasClass("ajaxSource");e.$shelf=e.$carousel.find(".feed-carousel-shelf");e.$viewport=e.$carousel.find(".feed-carousel-viewport");e.$spinner=e.$carousel.find(".spinner");e.$left=f(".feed-carousel-control.feed-left",b);e.$right=f(".feed-carousel-control.feed-right",b);e.$buttons=f(".feed-carousel-control",b);e.$thumb=f(".feed-scrollbar-thumb",b);e.shelfLeft=-1*parseInt(e.$shelf.css("left"),10);e.calcWidth=f("html").hasClass("a-lt-ie9");e.noOpacity=f("html").hasClass("a-lt-ie9");
e.uniqueId=e.getUniqueId();e.$left.attr("aria-hidden",!0);e.$right.attr("aria-hidden",!0);e.bindEvents();e.$carousel.data("Carousel",e);e.$carousel.trigger("change");e.token=!1;e.lock=function(){e.token=!0};e.unlock=function(){e.token=!1};e.locked=function(){return e.token};n.when("gw-first-carousel").execute(function(){e.first=e.$carousel.hasClass("first-carousel");e.shouldControlsOn()?e.showControls():e.hideControls()});e.uniqueId&&n.when(e.uniqueId).execute(function(a){e.appendCards(a.cards);if(a.cards&&
e.slotId&&"object"===typeof g.ue&&"function"===typeof g.ue.count){var b="gw-"+e.slotId.toString()+"-lazy-cards",c="gw-"+e.slotId.toString()+"-lazy";g.ue.count(b,(g.ue.count(b)||0)+a.cards.length);g.ue.count(c,(g.ue.count(c)||0)+1)}})},getUniqueId:function(){if(this.$viewport){var b=this.$viewport.closest(".shogun-widget");return 0<b.length?f(b[0]).attr("id"):null}},getSlotId:function(){var b=this.$carousel.closest(".gw-widget-instrument");return 0<b.length?f(b[0]).attr("id"):null},getMouseDirection:function(){return k.capabilities.rtl?
-1:1},bindEvents:function(){function b(a){return k.capabilities.pointerPrefix&&-1<f.inArray(a.originalEvent.pointerType,[2,"touch"])||"touch"===k.capabilities.actionMode}var a=this,c=f("body");a.$buttons.ready(function(b){a.shovelerReadyFired||(a.slotId&&(b=a.slotId.toString()+"-active",g.GWI&&g.GWI.recordLatency(b),g.GWI&&g.GWI.register(b)),a.shovelerReadyFired=!0)});a.$carousel.change(function(b){a.updateItems();a.updateSpinner();a.updateShelf();a.updateControls();null===a.defaultCssRightMargin&&
a.$shelf.children("li").first()&&(b=parseInt(a.$shelf.children("li").first().css("margin-right"),10),a.defaultCssRightMargin=isNaN(b)?10:b);a.adjustMarginOnChange&&a.adjustCardMargin()});a.$left.click(function(b){b.preventDefault();a.changePage(-1);a.slotId&&a.logCounter("gw-"+a.slotId.toString()+"-left")});a.$right.click(function(b){b.preventDefault();a.changePage(1);a.slotId&&a.logCounter("gw-"+a.slotId.toString()+"-right")});a.bindImageLoadEvents(a.$shelf);var d;f(g).resize(function(){clearTimeout(d);
d=setTimeout(function(){var b=a.getDimensions();a.moveShelf(Math.max(Math.min(b.shelfLeft,b.maxLeft),0));a.updateShelf()},100)});a.$thumb.mousedown(function(b){var d=b.clientX;1===b.which&&(b.preventDefault(),a.$carousel.addClass("scrolling"),c.bind("mousemove.feed-carousel",function(b){var c=a.getDimensions(),e=a.getMouseDirection()*(b.clientX-d),c=Math.max(Math.min(c.shelfLeft+1/c.pageRatio*e,c.maxLeft),0);d=b.clientX;a.moveShelf(c)}),f(document).bind("selectstart.feed-carousel",function(){return!1}))});
c.add(g).mouseup(function(b){a.$carousel.removeClass("scrolling");a.$carousel.hasClass("hovering")||a.hideControls();c.unbind("mousemove.feed-carousel");f(document).unbind("selectstart.feed-carousel")});a.$carousel.hover(function(){a.$carousel.addClass("hovering");clearTimeout(a.hoverTimer);a.hoverTimer=setTimeout(function(){a.$carousel.hasClass("hovering")&&!a.$carousel.hasClass("touching")?a.showControls():a.$carousel.removeClass("touching")},300)},function(){a.$carousel.removeClass("hovering touching");
clearTimeout(a.hoverTimer);a.$carousel.hasClass("scrolling")||(a.hoverTimer=setTimeout(function(){a.$carousel.hasClass("hovering")||a.hideControls()},600))});a.$carousel.bind(k.action.start,function(c){b(c)&&(a.$carousel.addClass("touching"),clearTimeout(a.touchTimer),a.touchTimer=setTimeout(function(){a.$carousel.removeClass("touching")},5E3))});a.$carousel.bind(k.action.end,function(c){b(c)&&(a.$carousel.removeClass("touching"),clearTimeout(a.touchTimer),clearTimeout(a.hoverTimer))});a.$viewport.scroll(function(){a.shelfLeft=
a.$viewport.scrollLeft();a.updateControls()})},bindImageLoadEvents:function(b){var a=this;f(a.imgClass,b).one("load",function(){a.$carousel.trigger("change")})},getDimensions:function(){var b=this.$shelf.width(),a=this.shelfLeft,c=this.$carousel.width();return{pageWidth:c,shelfWidth:b,shelfLeft:a,pageRatio:c/b,leftRatio:a/b,maxLeft:b-c}},updateItems:function(){var b=this,a=b.$shelf.find(".feed-carousel-card");a.each(function(a,d){d=f(d);if("none"!==d.css("display")&&!b.config.visibleBeforeLoad)return!0;
d.attr("aria-posinset",a+1);d.attr("aria-hidden",!1);d.attr("role","listitem");return 0>=d.find(b.imgClass).filter(function(){return!this.complete}).length?(d.css("display","inline-block"),a+1>=b.cfMinItems&&!b.cfFired&&(b.slotId&&(a=b.slotId.toString()+"-visible",g.GWI&&g.GWI.recordLatency(a),g.GWI&&g.GWI.register(a)),b.cfFired=!0),!0):!1});a.attr("aria-setsize",a.size());b.$items=a.filter(function(){return"none"!==f(this).css("display")})},updateShelf:function(){var b=0;this.calcWidth&&(this.$shelf.children().each(function(){b+=
f(this).outerWidth(!0)}),this.$shelf.width(b));this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems&&this.ajaxSource?this.$spinner.show():(this.size()<this.minItems&&"object"===typeof g.ue&&"function"===typeof g.ue.count&&g.ue.count("shovelerNotEnoughItem",(g.ue.count("shovelerNotEnoughItem")||0)+1),this.$spinner.hide())},updateControls:function(){this.updateArrows();this.updateScrollThumb()},
shouldControlsOn:function(){return this.first&&!this.touch},showControls:function(b){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:b,queue:!1})},hideControls:function(b){var a=this.$thumb;this.shouldControlsOn()||(a=a.add(this.$buttons));a.stop(!0,!0).fadeOut({duration:300,complete:b,queue:!1})},appendCards:function(b){this.$shelf.append(b);this.bindImageLoadEvents(b);this.$carousel.trigger("change")},updateArrows:function(){var b=this,a=b.getDimensions();f.each([{$e:b.$left,
enabled:0<a.shelfLeft},{$e:b.$right,enabled:a.shelfLeft<a.maxLeft}],function(a,d){a=d.$e;d.enabled?a.removeClass("feed-control-disabled"):a.addClass("feed-control-disabled");b.noOpacity&&(d.enabled?a.css("opacity","1"):a.css("opacity","0.5"))})},updateScrollThumb:function(){var b=this.getDimensions(),a=b.leftRatio*b.pageWidth;this.$thumb.width(Math.min(b.pageRatio*b.pageWidth,b.pageWidth)).each(function(){f(this).animate({left:a},0)})},logCounter:function(b){"object"===typeof g.ue&&"function"===typeof g.ue.count&&
(g.ue.count(b,(g.ue.count(b)||0)+1),g.ue.count("gw-shoveler-click",1))},changePage:function(b){var a=this.getDimensions(),c=this.alignWithItem(a.shelfLeft+b*a.pageWidth),c=Math.min(0>b?c.right:c.left,a.maxLeft);this.locked()||(this.lock(),a.shelfLeft===c?(this.bounce(this.$shelf,-30*b),this.bounce(this.$thumb,6*b)):this.moveShelf(c,400))},moveShelf:function(b,a){function c(){d.updateArrows();d.unlock()}var d=this;a=a||0;d.shelfLeft=b;if(d.touch)d.$viewport.animate({scrollLeft:b},a,"swing",c);else{var e=
d.getDimensions(),e=b/e.shelfWidth*e.pageWidth;d.$shelf.animate({left:-b},a,"swing",c);d.$thumb.animate({left:e},a,"swing",function(){d.updateScrollThumb();d.unlock()})}},getItems:function(){return this.$items},size:function(){return this.getItems().length},alignWithItem:function(b){if(0>b)return{left:0,right:0};var a=this,c=a.getItems(),d=c.map(function(){var c=a.cardPosition(f(this));if(b>=c.left&&b<=c.right)return c}).get(0);return d?d:a.cardPosition(c.last())},cardPosition:function(b){var a=(b.position()||
{left:0,right:0}).left;b=a+b.outerWidth(!0);return{left:a,right:b}},bounce:function(b,a){function c(a){var b={};b[d.touch?"left":"marginLeft"]=a;return b}var d=this;b.each(function(){var b=f(this);b.animate(c(a),400,"swing",function(){b.animate(c(0),100,"swing",d.unlock)})})},setCardMargin:function(b){this.$shelf.children("li").first()&&this.$shelf.children("li").first().css("margin-right")!==b+"px"&&(this.$shelf.children("li").css("margin-right",b+"px"),this.updateShelf())},adjustCardMargin:function(b){b=
b===q||null===b?this.defaultCssRightMargin:b;this.setCardMargin(b);var a=this.getDimensions(),a=0>a.maxLeft?Math.ceil(-a.maxLeft/this.size()):b;this.setCardMargin(a<b?b:a)}};return{createCarousel:function(b,a,c,d){f(b).each(function(b,h){b=f(h);new l(b,a,c,d)})}}});"use strict";n.when("jQuery","SafeP").execute("shoveler-lazy-non-visible-images",function(f,m){function k(b){"object"===typeof l.ue&&"function"===typeof l.ue.count&&l.ue.count(b,(l.ue.count(b)||0)+1)}function h(){l.GWData&&f.each(l.GWData,
function(b,a){if(b&&a&&a.data&&!a.loaded){a.loaded=!0;k("gw-lazy-load-all");var c=[];f.each(a.data,function(a,b){f.each(f(b),function(a,b){c.push(b)})});c&&0<c.length&&k("gw-lazy-load-non-empty");m&&m.register(b,function(){return{cards:c}})}})}var l=g;n.when("x1").execute(h);n.when("ready").execute(h);n.when("load").execute(h)});"use strict";n.register("SafeP",function(){var f={};return{register:function(g,k){"string"===typeof g&&"function"===typeof k&&(f[g]||(f[g]=function(h,k){n.register(h,k);f[h]=
function(){}}),f[g]&&f[g](g,k))}}});"use strict";n.when("A").register("gw-count-down",function(f){return function(g,k,h,l,b){function a(a){a=a||{};return{update:a.update||w.noop,count:a.count||w.noop,transition:a.transition||w.noop}}function c(){return a({update:function(){if(l&&l.dealState){var a=l.dealState.toUpperCase();r="AVAILABLE"===a&&86400<h/1E3?d(""):-1<a.indexOf("WAITLIST")?d(b.on_waitlist):"SOLDOUT"===a?d(b.sold_out,C):0<k?e():0<h?n():d(b.has_ended,z)}r.update();r.count()}})}function d(b,
c){return a({update:function(){p(b);f.trigger(c)}})}function e(){y=b.starts_in;return a({update:function(){f.trigger(D);p(t)},transition:function(){r=d(b.started,E);r.update()},count:function(){x=f.interval(function(){k=A-Date.now();q(k,b.starts_in_timer)},1E3)}})}function n(){y=b.ends_in;return a({update:function(){p(t)},transition:function(){r=d(b.has_ended,z);r.update()},count:function(){x=f.interval(function(){h=B-Date.now();q(h,b.ends_in_timer)},1E3)}})}function q(a,b){var c,d,e;c=Math.floor(a/
36E5);d=Math.floor(a/1E3/60%60);e=Math.floor(a/1E3%60);var f=t,g;g=y+" "+u(c)+u(d,!0,!0)+u(e,!1,!0);f.timerString=g;f=t;b=b?b.replace("_hours_",c).replace("_minutes_",d).replace("_seconds_",e):"";f.readoutString=b;p(t);0>=a&&(clearInterval(x),r.transition())}function u(a,b,c){var d="";if(0<a||c)d=("0"+a).slice(-2);if(!c&&0<a||b)d+=":";return d}function p(a){a.readoutString?t=a:(t.readoutString=a,t.timerString=a);f.trigger(F,t)}if(b&&b.starts_in&&b.ends_in&&b.has_ended&&b.sold_out&&b.on_waitlist&&
b.started&&b.starts_in_timer&&b.ends_in_timer){k=parseInt(k,10);h=parseInt(h,10);l=JSON.parse(l);var w=f.$,v=Date.now(),A=v+k,B=v+h,x,y="",t={timerString:"",readoutString:""},z=g+"ended",E=g+"started",F=g+"updateTimer",D=g+"countingDown",C=g+"soldOut",r=c();r.update();f.on(g,function(){r.update()})}}})});

}
/*
     FILE ARCHIVED ON 00:38:00 Jul 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:57:20 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 130.517
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.06
  cdx.remote: 0.063
  esindex: 0.012
  LoadShardBlock: 98.417 (3)
  PetaboxLoader3.datanode: 115.261 (4)
  load_resource: 384.523
  PetaboxLoader3.resolve: 353.078
*/