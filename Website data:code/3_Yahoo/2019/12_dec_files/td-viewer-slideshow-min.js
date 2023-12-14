YUI.add("td-viewer-slideshow",function(e,t){"use strict";var s=e.config.win,a=e.config.doc,i=screen,n=i.availWidth,l=i.availHeight,o=3,r=e.UA.android||e.UA.ie?"click":"tap",d=5,m=3;function h(t){var s,i=this;t=t||{},i.node=s=a.getElementById(t.id),s&&(i.slideshow=new Angus.Slider(s.getElementsByClassName("js-slider")[0],{numBufCards:2}),i.caption=s.getElementsByClassName("lb-meta-caption")[0]||{},i.captionContainer=s.getElementsByClassName("lb-meta-caption-container")[0]||{},i.indexCount=s.getElementsByClassName("index-count")[0],i.metaContent=s.getElementsByClassName("lb-meta-content")[0],i.overlayNode=a.getElementsByClassName("js-viewer-overlay")[0],i.shortCaption=s.getElementsByClassName("lb-meta-short-caption")[0]||{},i.title=s.getElementsByClassName("lb-meta-title")[0]||{},i.slideTitle=s.getElementsByClassName("slide-title")[0]||{},i.slideThumbnails=s.getElementsByClassName("sl-thumbnails")[0],i.slideThumbnails&&(i.thumbCarousel=i.slideThumbnails.getElementsByClassName("sl-carousel")[0],i.thumbItems=i.slideThumbnails.getElementsByClassName("sl-item"),i.thumbStart=0,i.thumbSelect=0,i.thumbItems&&i.thumbItems.length>=d&&(i.thumbEnd=d-1),i.thumbItems&&i.thumbItems[i.thumbSelect].classList.add("Selected")),i.readMore=s.getElementsByClassName("read-more")[0],i.nextPaginate=s.getElementsByClassName("js-lb-next")[0],i.prevPaginate=s.getElementsByClassName("js-lb-prev")[0],i.slideshowCaption=s.getElementsByClassName("js-slideshow-caption")[0],i.slideshowProvider=s.getElementsByClassName("js-slideshow-provider")[0],i.slideshowTimestamp=s.getElementsByClassName("js-slideshow-timestamp")[0],i.slideshowTitle=s.getElementsByClassName("js-slideshow-title")[0],i.uuid=null,i.model=t.model,i.total=0,i.isOpen=!1,i.isFromStream=!1,i.template=t.template,i.device=e.Af.Config.getContext("device")||"smartphone",i.onSwipe=t.onSwipe,i.onSwipeEnd=t.onSwipeEnd,i.onClose=t.onClose,i.onOpen=t.onOpen,i.isIOS7=parseInt(e.UA.ios,10)>=7,i.isSafari=!!e.UA.safari,i.addressBarTimer=null,i.enableAds=t.enableAds,i.slideshowAdPos=t.slideshowAdPos,i.init())}h.prototype={init:function(){var t,i=this,n=i.node,l=e.one(n),d=a.body;n.addEventListener("slider:swipe",i.handleSwipe.bind(i)),n.addEventListener("slider:swipeend",i.handleSwipeEnd.bind(i)),"smartphone"===i.device&&d.appendChild(i.overlayNode),s.onpopstate=function(e){e&&e.state&&i.isOpen&&i.close()},l.delegate(r,function(e){e.preventDefault(),i.close()},".js-lb-close"),l.delegate(r,function(e){e.preventDefault(),i.shortCaption.innerHTML!==i.caption.innerHTML&&i.metaContent.classList.toggle("expand")},".js-lb-credit"),"desktop"===i.device?l.delegate(r,function(e){i.handlePaginate(e)},".js-lb-prev, .js-lb-next"):l.delegate(r,function(e){i.node.classList.toggle("hide-meta")},".js-slider"),t=function(e,t){i.thumbCarousel.style.transition="initial",i.thumbCarousel.style["-webkit-transition"]="initial",0===i.thumbStart?i.setThumbnailOffset(0):i.setThumbnailOffset(0-i.thumbStart*e),t?i.slideThumbnails.classList.add("sl-thumb-wide"):i.slideThumbnails.classList.remove("sl-thumb-wide"),setTimeout(function(){i.thumbCarousel.style.transition="transform 0.6s",i.thumbCarousel.style["-webkit-transition"]="transform 0.6s"},10)},l.delegate("mouseenter",function(){t(60,!0)},".sl-thumbnails"),l.delegate("mouseleave",function(){t(30,!1)},".sl-thumbnails"),l.delegate(r,function(e){var t,s,a,n;if(e.preventDefault(),t=e.target.ancestor(".sl-item"),s=-1,a=i.thumbItems.length,e.target.hasClass("js-thm-sl-icon"))return e.target.hasClass("Lb-Next")?(i.thumbStart+m<i.thumbItems.length?i.thumbStart+=m:i.thumbStart<i.thumbItems.length&&(i.thumbStart=i.thumbItems.length-m),i.total>a&&i.thumbStart>=a-3*o-1&&i.model.nextBatchPhotos({id:i.uuid,start:a},function(e){i.append(e)})):e.target.hasClass("Lb-Prev")&&(i.thumbStart-m>0?i.thumbStart-=m:i.thumbStart>0&&(i.thumbStart=0)),void(0===i.thumbStart?i.setThumbnailOffset(0):i.setThumbnailOffset(0-i.thumbStart*i.thumbItems[i.thumbStart].offsetWidth));for(t&&(t=t.getDOMNode()),n=0;n<i.thumbItems.length;n++)if(t&&t===i.thumbItems.item(n)){s=n;break}s>=0&&i.handlePaginate(e,s)},".sl-item, .js-thm-sl-icon")},handlePaginate:function(t,s){var a=this,i=t.currentTarget,n=a.slideshow.getCurrIndex(),l=n;i&&!i.hasClass("Disabled")&&(i.hasClass("js-lb-prev")?(a.slideshow.prev(1),l=n-1):i.hasClass("js-lb-next")?(a.slideshow.next(1),l=n+1):(i.hasClass("sl-item")||i.ancestor(".sl-item"))&&void 0!==s&&(a.slideshow.jumpTo(s,null,!0),l=s),l!==n&&(a.enableAds&&"undefined"!=typeof DARLA&&!DARLA.inProgress()&&(a.slideshowAdPos?(0===n&&(e.one("#hl-ad-LREC-0")&&e.one("#hl-ad-LREC-0").get("offsetHeight")>0?a.slideshowAdPos=a.slideshowAdPos.replace(/.*LREC-0.*/,"LREC-0"):e.one("#hl-ad-LREC-0-fallback")&&e.one("#hl-ad-LREC-0-fallback").get("offsetHeight")>0?a.slideshowAdPos=a.slideshowAdPos.replace(/.*LREC-0.*/,"LREC-0"):e.one("#hl-ad-MON-0")&&e.one("#hl-ad-MON-0").get("offsetHeight")>0&&(a.slideshowAdPos=a.slideshowAdPos.replace(/.*MON-0.*/,"MON-0"))),DARLA.event("hlAdsAll",{ps:a.slideshowAdPos})):DARLA.event("hlAdsAll")),a.handlePaginateBtn(l,a.total)))},handlePaginateBtn:function(e,t){var s=this,a="Disabled";s.prevPaginate&&s.nextPaginate&&(e===t-1?s.nextPaginate.classList.add(a):s.nextPaginate.classList.remove(a),0===e?s.prevPaginate.classList.add(a):s.prevPaginate.classList.remove(a))},handleSwipe:function(e){var t=this;t.updateMetaData(),t.onSwipe&&t.onSwipe()},handleSwipeEnd:function(e){var t=this,s=e.detail&&e.detail.currNode&&e.detail.currNode.firstChild||null,a=t.slideshow.getTotal(),i=t.slideshow.getCurrIndex();s&&(t.total>a&&i>=a-o-1&&t.model.nextBatchPhotos({id:t.uuid,start:a},function(e){t.append(e)}),t.onSwipeEnd&&t.onSwipeEnd(s,i))},updateMetaData:function(){var e,t,s=this;(e=s.slideshow.getCurrItem())&&(s.title.innerHTML=e.getAttribute("data-title")||"",s.slideshowTitle&&(s.slideshowTitle.innerHTML=e.getAttribute("data-title")||""),s.caption.innerHTML=e.getAttribute("data-caption")||"",s.shortCaption.innerHTML=e.getAttribute("data-short-caption")||"",
s.slideTitle&&(s.slideTitle.innerHTML=e.getAttribute("data-slide-title")||""),t=s.slideshow.getCurrIndex(),s.indexCount&&(s.indexCount.innerHTML=t+1+"/"+s.total),0===t?s.node.classList.add("First-Item"):s.node.classList.remove("First-Item"),""===s.caption.innerHTML?(s.captionContainer.classList.add("D-n"),s.captionContainer.classList.add("D(n)")):(s.captionContainer.classList.remove("D-n"),s.captionContainer.classList.remove("D(n)")),s.readMore&&(s.readMore.style.display=s.shortCaption.innerHTML===s.caption.innerHTML?"none":""),s.slideThumbnails&&s.thumbItems&&(s.thumbItems[s.thumbSelect].classList.remove("Selected"),s.thumbSelect=t,s.thumbSelect>=m&&s.thumbSelect<=s.thumbItems.length-m?s.setThumbnailOffset(0-(s.thumbSelect-m+1)*s.thumbItems[s.thumbSelect].offsetWidth):s.thumbSelect<m?s.setThumbnailOffset(0):s.thumbSelect>s.thumbItems.length-m&&s.setThumbnailOffset(0-(s.thumbItems.length-d)*s.thumbItems[s.thumbSelect].offsetWidth),s.thumbSelect-m+1>=0&&(s.thumbStart=s.thumbSelect-m+1),t<s.thumbItems.length&&s.thumbItems[s.thumbSelect].classList.add("Selected")))},open:function(e){var t,s=this,a=s.overlayNode;s.isFromStream=e||!1,s.isOpen=!0,s.node.classList.remove("hide-meta"),"desktop"===s.device?s.metaContent.classList.add("expand"):s.metaContent.classList.remove("expand"),a&&(a.classList.remove("Dn"),a.classList.remove("D(n)"),s.forceReflow(),a.style.opacity="1"),t=s.slideshow.getCurrItem(),s.slideshow.resetCards(),s.isIOS7&&s.isSafari&&s.handleIOS7AddressBar(),s.onOpen&&s.onOpen(t)},close:function(){var e=this,t=e.overlayNode;e.onClose&&e.onClose(e.isFromStream),t&&(t.style.opacity="0",Stencil.css.transitioned(t,function(){t.classList.add("Dn"),t.classList.add("D(n)"),e.node.classList.remove("hide-meta"),e.metaContent.classList.remove("expand"),e.isOpen=!1}),e.clearAddressBarTimer())},dustRender:function(e,t){var s=this;e&&((e=e.images?e:{images:e}).device=s.device,dust.render(s.template,e,function(a,i){!a&&i&&(s.slideshow.fillContent(i,t),s.slideThumbnails&&t&&(s.thumbCarousel.style.transition="initial",s.thumbCarousel.style["-webkit-transition"]="initial"),s.updateMetaData(),s.slideThumbnails&&t&&dust.render("td-applet-viewer-templates-thumbnail_items",e,function(e,t){t&&(s.thumbCarousel.innerHTML+=t,s.thumbItems=s.slideThumbnails.getElementsByClassName("sl-item"),0===s.thumbStart?s.setThumbnailOffset(0):s.setThumbnailOffset(0-60*s.thumbStart),setTimeout(function(){s.thumbCarousel.style.transition="transform 0.6s",s.thumbCarousel.style["-webkit-transition"]="transform 0.6s"},10))}))}))},append:function(e){this.dustRender(e,!0)},render:function(e){e&&(this.uuid=e.id||this.uuid,this.total=parseInt(e.total,10)||e.length,this.dustRender(e))},handleIOS7AddressBar:function(){var e=this,t=s.innerHeight;e.addressBarTimer=setInterval(function(){var i=90===s.orientation||-90===s.orientation,o=s.innerHeight,r=.85*(i?n:l);t===o&&o<=r?e.clearAddressBarTimer():t!==o&&o<r&&(s.scrollTo(0,a.body.scrollTop),s.dispatchEvent(new Event("resize")),e.clearAddressBarTimer())},500)},setThumbnailOffset:function(e){var t=this,s="";s=0===e?"translateX(0)":"translateX("+e+"px)",t.thumbCarousel.style.transform=s,t.thumbCarousel.style["-webkit-transform"]=s,t.thumbCarousel.style["-moz-transform"]=s,t.thumbCarousel.style["-ms-transform"]=s},clearAddressBarTimer:function(){clearTimeout(this.addressBarTimer),this.addressBarTimer=null},forceReflow:function(){return this.node.offsetWidth},clear:function(){this.slideshow.clear()}},e.namespace("TD.Viewer").Slideshow=h},"@VERSION@",{requires:["stencil","angus-slider","event-tap"]});