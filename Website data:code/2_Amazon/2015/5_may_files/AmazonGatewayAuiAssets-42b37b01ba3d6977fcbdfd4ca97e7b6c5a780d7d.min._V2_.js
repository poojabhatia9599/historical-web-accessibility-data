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

(function(g){g.execute(function(){g.when("A").register("gwAjax",function(e){return function(b,i){function f(d,c,f){typeof window.ue==="object"&&(i.errorCounter?window.ue.count(i.errorCounter,(window.ue.count(i.errCounter)||0)+1):window.ue.count("gwAjaxError",(window.ue.count("gwAjaxError")||0)+1));typeof h==="function"&&h(d,c,f)}var i=e.copy(i),c=i.success,h=i.error;i.success=function(d,b,h){d.error?f(d,b,h):typeof c==="function"&&c(d,b,h)};i.error=f;i.data=i.params?i.params:i.data;typeof window.ue===
"object"&&window.ue.count("gwAjaxCall",(window.ue.count("gwAjaxCall")||0)+1);return e.$.ajax(b,i)}});g.when("A").register("component-feed-carousel",function(e){var b=e.$,i=function(f,c){this.init(f,c)};i.prototype={init:function(f,c){e.$("html").hasClass("a-touch")&&f.addClass("feed-carousel-touch");this.adjustMarginOnChange=!0;this.defaultCssRightMargin=null;this.minItems=c||10;this.$carousel=f;this.touch=this.$carousel.hasClass("feed-carousel-touch");this.$shelf=this.$carousel.find(".feed-carousel-shelf");
this.$viewport=this.$carousel.find(".feed-carousel-viewport");this.$spinner=this.$carousel.find(".spinner");this.$left=b(".feed-carousel-control.feed-left",f);this.$right=b(".feed-carousel-control.feed-right",f);this.$buttons=b(".feed-carousel-control",f);this.$thumb=b(".feed-scrollbar-thumb",f);this.shelfLeft=-1*parseInt(this.$shelf.css("left"),10);this.calcWidth=b("html").hasClass("a-lt-ie9");this.noOpacity=b("html").hasClass("a-lt-ie9");this.bindEvents();this.$carousel.data("Carousel",this);this.$carousel.trigger("change")},
bindEvents:function(){function f(d){return e.capabilities.pointerPrefix&&b.inArray(d.originalEvent.pointerType,[2,"touch"])>-1||e.capabilities.actionMode==="touch"}var c=this,h=b("body");c.$carousel.change(function(){c.updateSpinner();c.updateShelf();c.updateControls();if(c.defaultCssRightMargin===null&&c.$shelf.children("li").first())c.defaultCssRightMargin=parseInt(c.$shelf.children("li").first().css("margin-right"),10);c.adjustMarginOnChange&&c.adjustCardMargin()});c.$left.click(function(d){d.preventDefault();
c.changePage(-1)});c.$right.click(function(d){d.preventDefault();c.changePage(1)});b(".product-image",c.$shelf).one("sload",function(){c.$carousel.trigger("change")});var d;b(window).resize(function(){clearTimeout(d);d=setTimeout(function(){var d=c.getDimensions(),d=Math.max(Math.min(d.shelfLeft,d.maxLeft),0);c.moveShelf(d)},100)});c.$thumb.mousedown(function(d){var f=d.clientX;d.which===1&&(d.preventDefault(),c.$carousel.addClass("scrolling"),h.bind("mousemove.feed-carousel",function(d){var b=c.getDimensions(),
b=Math.max(Math.min(b.shelfLeft+1/b.pageRatio*(d.clientX-f),b.maxLeft),0);f=d.clientX;c.moveShelf(b)}),b(document).bind("selectstart.feed-carousel",function(){return!1}))});h.add(window).mouseup(function(){c.$carousel.removeClass("scrolling");c.$carousel.hasClass("hovering")||c.hideControls();h.unbind("mousemove.feed-carousel");b(document).unbind("selectstart.feed-carousel")});c.$carousel.hover(function(){c.$carousel.addClass("hovering");clearTimeout(c.hoverTimer);c.hoverTimer=setTimeout(function(){c.$carousel.hasClass("hovering")&&
!c.$carousel.hasClass("touching")?c.showControls():c.$carousel.removeClass("touching")},300)},function(){c.$carousel.removeClass("hovering touching");clearTimeout(c.hoverTimer);if(!c.$carousel.hasClass("scrolling"))c.hoverTimer=setTimeout(function(){c.$carousel.hasClass("hovering")||c.hideControls()},600)});c.$carousel.bind(e.action.start,function(d){if(f(d))c.$carousel.addClass("touching"),clearTimeout(c.touchTimer),c.touchTimer=setTimeout(function(){c.$carousel.removeClass("touching")},5E3)});c.$carousel.bind(e.action.end,
function(d){f(d)&&(c.$carousel.removeClass("touching"),clearTimeout(c.touchTimer),clearTimeout(c.hoverTimer))});c.$viewport.scroll(function(){c.shelfLeft=c.$viewport.scrollLeft();c.updateControls()})},getDimensions:function(){var f=this.$shelf.width(),c=this.shelfLeft,b=this.$carousel.width();return{pageWidth:b,shelfWidth:f,shelfLeft:c,pageRatio:b/f,leftRatio:c/f,maxLeft:f-b}},updateShelf:function(){var f=0;this.calcWidth&&(this.$shelf.children().each(function(){f+=b(this).outerWidth(!0)}),this.$shelf.width(f));
this.touch&&this.$carousel.not(".fresh-shoveler-tablet-app .feed-carousel").height(this.$shelf.outerHeight(!0))},updateSpinner:function(){this.size()<this.minItems?this.$spinner.show():this.$spinner.hide()},updateControls:function(){this.updateArrows();this.updateScrollThumb()},showControls:function(f){this.$thumb.add(this.$buttons).stop(!0,!0).fadeIn({duration:300,complete:f,queue:!1})},hideControls:function(f){var c=this.$thumb;if(!this.$carousel.hasClass("first-carousel")||this.touch)c=c.add(this.$buttons);
c.stop(!0,!0).fadeOut({duration:300,complete:f,queue:!1})},appendCards:function(f){this.$shelf.append(f);this.$carousel.trigger("change")},updateArrows:function(){var f=this,c=f.getDimensions();b.each([{$e:f.$left,enabled:c.shelfLeft>0},{$e:f.$right,enabled:c.shelfLeft<c.maxLeft}],function(c,d){var b=d.$e;d.enabled?b.removeClass("feed-control-disabled"):b.addClass("feed-control-disabled");f.noOpacity&&(d.enabled?b.css("opacity","1"):b.css("opacity","0.5"))})},updateScrollThumb:function(){var f=this.getDimensions(),
c=f.leftRatio*f.pageWidth;this.$thumb.width(Math.min(f.pageRatio*f.pageWidth,f.pageWidth)).each(function(){e.animate(b(this),{left:c},0)})},changePage:function(f){var c=this.getDimensions(),b=this.alignWithItem(c.shelfLeft+f*c.pageWidth),b=Math.min(f<0?b.right:b.left,c.maxLeft);c.shelfLeft===b?(this.bounce(this.$shelf,-30*f),this.bounce(this.$thumb,6*f)):this.moveShelf(b,400)},moveShelf:function(f,c){var b=this,c=c||0;b.shelfLeft=f;if(b.touch)b.$viewport.animate({scrollLeft:f},c,"swing",function(){b.updateArrows()});
else{var d=b.getDimensions(),d=f/d.shelfWidth*d.pageWidth;e.animate(b.$shelf,{left:-f},c,"cubic-bezier(0.455, 0.03, 0.515, 0.955)",function(){b.updateArrows()});e.animate(b.$thumb,{left:d},c,"cubic-bezier(0.455, 0.03, 0.515, 0.955)",function(){b.updateScrollThumb()})}},getItems:function(){return this.$shelf.find(".feed-carousel-card")},size:function(){return this.getItems().length},alignWithItem:function(f){if(f<0)return{left:0,right:0};var c=this,h=c.getItems(),d=h.map(function(){var d=c.cardPosition(b(this));
if(f>=d.left&&f<=d.right)return d}).get(0);return d?d:c.cardPosition(h.last())},cardPosition:function(f){var c=f.position().left,f=c+f.outerWidth(!0);return{left:c,right:f}},bounce:function(f,c){function h(c){var f={};f[d.touch?"left":"marginLeft"]=c;return f}var d=this;f.each(function(){var d=b(this);e.animate(d,h(c),400,"cubic-bezier(0.175, 0.885, 0.32, 1.275)",function(){e.animate(d,h(0),100)})})},setCardMargin:function(f){this.$shelf.children("li").first()&&this.$shelf.children("li").first().css("margin-right")!==
f+"px"&&(this.$shelf.children("li").css("margin-right",f+"px"),this.updateShelf())},adjustCardMargin:function(f){f=f===void 0||f===null?this.defaultCssRightMargin:f;this.setCardMargin(f);var c=this.getDimensions(),c=c.maxLeft<0?Math.ceil(-c.maxLeft/this.size()):f;this.setCardMargin(c<f?f:c)}};return{createCarousel:function(f,c){b(f).each(function(f,d){var b=e.$(d);new i(b,c)})}}});g.when("A").register("component-sequential-images",function(e){var b=e.$;return{loadImages:function(e){for(var f=function(d,
c){b(d).show().bind("load error",function(f){b(d).unbind(f);b(c).trigger("sload")}).each(function(){d.complete&&b(d).triggerHandler("load")})},c=2,h=e.length;c<=h;c++)(function(d,c){b(d).bind("sload",function(e){e.target===this&&(b(d).unbind(e),f(this,c))})})(e[c-1],e[c]);f(e[0],e[1])}}})})})(function(){var g=window.AmazonUIPageJS||P,e=g.attributeErrors;return e?e("AmazonGatewayAuiAssets"):g}());

}
/*
     FILE ARCHIVED ON 07:45:48 May 01, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:38:17 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 105.046
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.078
  cdx.remote: 0.074
  esindex: 0.012
  LoadShardBlock: 63.315 (3)
  PetaboxLoader3.datanode: 50.911 (4)
  load_resource: 37.416
  PetaboxLoader3.resolve: 32.625
*/