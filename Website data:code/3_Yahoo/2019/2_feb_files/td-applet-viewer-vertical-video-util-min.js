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

YUI.add("td-applet-viewer-vertical-video-util",function(e){"use strict";var t=e.config.win,i=e.one("body"),a=e.Af.Beacon,n=e.Af.Config,o=e.Af.Event,r=e.Af.Transport,s=t.ViewerUtils,d=s.getObjValue,l="td-applet-viewer-templates-vv_topbar",c="td-applet-viewer-templates-vv_banner_atomic_sm",p="td-applet-viewer-templates-vv_ad_cta",u=30,v=.64,g=40,h=1.49,m=414,f=13,y=42,C=600,b=325,A=16/9,w="03x04",V="09x16",k=[{regex:/pkgt:[^;]*;/,value:"pkgt:giraffe;"},{regex:/ct:[^;]*;/,value:"ct:video;"}],P=t.requestAnimationFrame||function(e){setTimeout(e,1e3/60)},I=/[?&]exp=vv\b/,S='.js-stream-content[data-type="article"][data-uuid],[data-temp="pic_sm"][data-uuid],.ntk-item[data-uuid]';e.namespace("TD.Applet").ViewerVerticalVideoUtil=function(e){(e=e||{}).player=e.player||{url:"https://web.archive.org/web/20190131102656/https://yep.video.yahoo.com/js/3/videoplayer-min.js",version:"nextgen-mobile",env:"prod"},e.config=e.config||{},e.uiConfig=e.config.ui||{},this.options=e},e.TD.Applet.ViewerVerticalVideoUtil.getAspectRatio=function(){return Math.max(window.innerHeight,window.innerWidth)/Math.min(window.innerHeight,window.innerWidth)>A?V:w},e.TD.Applet.ViewerVerticalVideoUtil.prototype={init:function(){var e=this,t=e.options.viewer;e.swipeHistoryCounter=0,o.on("vertical-video:content-fetched",e.handleContentFetched,e),o.on("content:shown",e.handleContentShown,e),o.on("viewer:shown",e.handleViewerShown,e),o.on("viewer:hidden",e.handleContentHidden,e),o.on("vertical-video:destroy-page",e.handleDestroyPage,e),o.on("history:change",e.handleNavigation,e),o.on("content:pageview",e.handlePageView,e),o.on("viewer:remote-applet",e.handleRemoteApplet,e),t&&t.node&&(t.node.addEventListener("slider:swipe",e.handleSliderSwipe.bind(e),!1),t.node.addEventListener("slider:swipeend",e.handleSliderSwipeEnd.bind(e),!1)),e.options.uiConfig.enableVerticalVideoAds&&e.initGeminiAds(),e.preRenderVp={},e.geminiVp={},e.contentIds=[],e.initVvMetadata()},handleViewerShown:function(){this.swipeHistoryCounter=0},handleContentShown:function(){var e,t=this,i=t.options.container;i&&i.one(".vv")&&(e=t.getViewportMeta())&&-1===e.attrs.indexOf("user-scalable=0")&&(e.attrs.push("user-scalable=0"),e.node.setAttribute("content",e.attrs.join(", ")))},handleContentHidden:function(){var e,t=this,i=t.getViewportMeta();i&&(e=i.attrs.indexOf("user-scalable=0"))>=0&&(i.attrs.splice(e,1),i.node.setAttribute("content",i.attrs.join(", ")))},getViewportMeta:function(){var t,i=e.one("head").one('meta[name="viewport"]');if(i&&(t=i.getAttribute("content")))return{node:i,attrs:t.split(/\s*,\s*/)}},handleContentFetched:function(e){var t=this,i=e&&e.content;i&&i.length&&(t.isPlayerJsLoaded()?t.player?t.prefetchVideos(i):t.createPlayer(i):t.loadPlayerJs(t.createPlayer.bind(t,i)))},createPlayer:function(e){var t,i=this,a=i.options.container;a&&e&&e.length&&(i.player?i.prefetchVideos(e):(t=i.getPlayerConfig(),e.forEach(function(e){var i=e&&e.verticalVideo&&e.verticalVideo.id;i&&t.playlist.mediaItems.push({id:i,images:{large:e.verticalVideo.thumbnail}})}),i.playerNode=a.append('<div style="display: none;" id="vv-placeholder" class="js-video-placeholder"><div class="vv-player W-100 H-100"></div></div>').one("#vv-placeholder .vv-player"),i.player=new YAHOO.VideoPlatform.VideoPlayer(t).render(i.playerNode)))},prefetchVideos:function(e){var t=this,i=t.player,a=[];i&&e&&e.length&&(e.forEach(function(e){var t=e&&e.verticalVideo&&e.verticalVideo.id;e&&e.id&&i.playlist.getIndexForId(t)<0&&a.push(t)}),a.length>0&&i.playlist.addItems(a))},getPlayerConfig:function(){var e=this,t=e.getRapidTracker(),i=t&&t.currentSpaceid,a={CMS:{format:"mp4"},disableCasting:!0,playlist:{mediaItems:[]},expBucket:n.getContext("bucket")||"",expName:"giraffe",mute:!0,autoplay:!1,ywaSamplingRate:0,rapidConfig:this.getVideoRapidConfig(),replayonlyendscreen:!1,stopAtLastFrame:!0,loop:!1,showControls:!1,connectionType:{raw:"dsl",mobile:!1},YVAP:null,startscreen:{showProvider:!1,showDesc:!1,showButton:!1,showTitle:!1}};return i&&(a.pageSpaceId=i+""),a},getVideoRapidConfig:function(){var t={},i=e&&e.Af&&e.Af.rapid,a=i&&i.tracking,n=i&&i.tracker,o=a&&a.pp,r=a&&a.spaceid||n&&n.currentSpaceid;return o||(o={pt:"content",layout:"giraffe"}),t.pageParams=o,t.rapid={},r&&(t.Spaceid=r+""),t},loadPlayerJs:function(t){var i,a,n=this;n.isPlayerJsLoaded()||(n._loadingPlayerJs?n._onLoadPlayerJsCallback.push(t):(a=(i=n.options.player).url+"?r="+i.version+"&ypv="+i.env,n._onLoadPlayerJsCallback=[t],n._loadingPlayerJs=!0,e.Get.js(a,function(){n._loadingPlayerJs=!1,n._onLoadPlayerJsCallback.forEach(function(e){e()}),n._onLoadPlayerJsCallback=null})))},isPlayerJsLoaded:function(){return YAHOO&&YAHOO.VideoPlatform&&YAHOO.VideoPlatform.VideoPlayer},handleSliderSwipe:function(e){var t=this,i=e&&e.detail;i&&(i.currPage<i.fromPage?t.swipeHistoryCounter++:i.currPage>i.fromPage&&(t.swipeHistoryCounter=Math.max(t.swipeHistoryCounter-1,0)),t.fireSwipeBeacon(i)),t.fireGeminiViewBeacon()},checkIgnoreEdge:function(i,a){var n,o,r=this;return!!e.UA.ios&&(n=Math.min(t.innerHeight,t.innerWidth)<m?f:y,o=r.swipeHistoryCounter>0,i<=n||o&&i>=t.innerWidth-n)},handleSliderSwipeEnd:function(t){var i,a=this,n=t&&t.detail,o=n&&n.fromNode;o&&(i=e.one(o).one(".vv-ad-feedback"))&&a.closeAdFeedback(i)},fireSwipeBeacon:function(e){var t,i=this,a=i.options.view;e&&a&&(t=e.fromPage<e.currPage?"next":"prev",e.currNode&&"ad"===e.currNode.getAttribute("data-type")&&(t+="_ad"),a.fireClickBeacon("giraffe_viewer",t,"advance",0,{elmt:"swipe",itc:"0"}),a.swipeTooltip&&a.fireClickBeacon("giraffe_swipe_tooltip",a.swipeTooltip.hasClass("ftu")?"ftu":"non-ftu","swipe_"+t))},handleDestroyPage:function(t){var i=this,a=t.removeContent,n=e.one(t.node);a&&(i.firstItem=null),n&&n.hasClass("vv-ad-item")&&i.destroyGeminiVideoAd(n)},handleNavigation:function(t){var i,a,n,o=this,r=o.options.view,s=o.options.viewer,d=s&&s.node,l=s&&s.getCurrIndex(),c=d&&d.querySelector('.js-slider-card[data-index="'+l+'"] .js-slider-item');if("popstate"===t.src&&r&&c)if(i=t.newVal.uuid,
a=d.querySelector('.js-slider-item[data-id="'+i+'"]'),n=a&&e.one(a).ancestor(".js-slider-card").getAttribute("data-index"))s.jumpTo(n,function(){r.articleRevealed&&r.resetRevealState(),r.handleSwiping(n,l,a,c,!1)},!1);else{if((n=s.findItemIndex(function(e){return e.indexOf('data-id="'+i+'"')>0}))<0)return;s.showContent(n),r.handleSwiping(n,l,s.getCurrItem(),c,!1),r.handleSwipeEnd(n,s.getCurrItem()),r.initPage(s.getCurrItem(),n)}},handlePageView:function(t){var i=this,a=d(e.Af,["rapid","tracking","rapidConfig"]),n=i.getRapidTracker();a&&a.keys&&n&&"giraffe2"===a.keys.layout&&(a=e.merge(a,{keys:e.merge(a.keys,{layout:"giraffe"})}),e.Lang.isFunction(n.updateConfig)&&n.updateConfig(a))},handleRemoteApplet:function(t){var i,a,n,o,r;t&&!t.err&&t.name&&t.node&&(n={params:{enableEntities:!1}},(a=(i=this).options.model&&i.options.model.getDataModel("viewer"))&&"advance-sm"===i.options.uiConfig.mode&&"td-applet-sidekick"===t.name&&(r=(o=e.one(t.node).all('.js-sidekick-item[data-type="ARTICLE"][data-uuid]')).getAttribute("data-uuid"),Array.isArray(r)&&r.length>0&&a.prefetchItems(r,!1,n,function(){o.each(function(e){var t,i,n,o=e.getAttribute("data-uuid"),r=a.itemCache.get(o);r&&r.verticalVideo&&(t=e.one(".js-sidekick-anchor"),i=t.getAttribute("data-ylk"),n=t.getAttribute("href"),dust.render(c,{},function(e,i){!e&&i&&t.append(i)}),i&&(k.forEach(function(e){e.regex.test(i)?i=i.replace(e.regex,e.value):i+=e.value}),t.setAttribute("data-ylk",i)),t.removeAttribute("data-rapid_p"),I.test(n)||t.setAttribute("href",n+(n.indexOf("?")>0?"&":"?")+"exp=vv"),e.setAttribute("data-vvid",r.verticalVideo.id))}),i.refreshTracking()})))},toggleOtherCards:function(e){var t=this,i=t.options.container,a=t.options.viewer,n=e?"visible":"hidden";i&&a&&a.getCurrItem()&&i.all('.js-slider-card:not([data-index="'+a.getCurrIndex()+'"])').each(function(e){var t=e.one("video");e.setStyle("visibility",n),t&&t.setStyle("visibility",n)})},setLastPlaybackTime:function(e){this._lastPlaybackTime=e},isPlaybackTimeContinuous:function(e){var t=this,i=t._lastPlaybackTime;return isNaN(i)||e-i>=0},handleOpss:function(e,t){var i=this,a=i.options.container;a&&e&&e.on(t.OPSS_VISIBILITY_CHANGED,function(e){var t=a.all(".vv-box .tap-overlay");e?t.hide():t.show()})},setPageViewParams:function(e){var t,i,a=this,n=a.options.container,o=a.options.viewer;n&&e&&o&&(i=!!n.one(".vv-box"),e.containerId=n.getAttribute("id"),e.keys=e.keys||{},i&&(e.keys.layout="giraffe",e.keys.pt="content",e.keys.pct=n.hasClass("revealed")?"article":"video",(t=a.contentIds.indexOf(e.keys.pstaid)+1)>0&&(e.keys.p_cpos=t)))},getRapidTracker:function(){return e.Af.rapid&&e.Lang.isFunction(e.Af.rapid.getRapidTracker)?e.Af.rapid.getRapidTracker():null},refreshTracking:function(){var e=this,t=e.options.container,i=e.getRapidTracker();t&&i&&i.refreshModule(t.getAttribute("id"))},isCurrItem:function(e){var t=this,i=t.options.viewer;return e&&i&&e===i.getCurrItem()},initSocial:function(){var t,i=this,a=i.options.view,n=i.options.viewer,o=i.options.container,r=i.options.uiConfig,s=n&&n.getCurrItem(),d=s&&e.one(s),l=d&&d.getAttribute("data-id"),c=o&&o.one(".js-comments-container"),p=d&&d.getAttribute("data-type");l&&a&&c&&"ad"!==p&&(a.getRemoteAppletComments(d.getDOMNode(),function(e){e&&t&&t.detach()}),d.hasClass("vv-item")?(r.enableVerticalVideoSocial&&i.getCommentCount({uuid:l},function(e,t){var a;i.isCurrItem(s)&&(!e&&t?i.renderCommentCount(t.count):(a=d.one(".social-buttons"))&&a.hasClass("enabled")&&a.removeClass("enabled"))}),t=e.on("td-applet-canvass:loaded",function(a){var n,o=a&&a.contextUuid;c&&c.one(".td-applet-canvass")&&o===l&&(t.detach(),setTimeout(function(){i.isCurrItem(s)?i.refreshTracking():(n=c.one("[data-applet-guid]"))&&e.fire("td-applet-canvass:destroy",{guid:n.getAttribute("data-applet-guid")})},0))})):c&&(t=e.once("td-applet-canvass:loaded",function(){i.refreshTracking()})),i._socialControlsInited||(i.initSocialControls(),i._socialControlsInited=!0))},initSocialControls:function(){var t=this,i=t.options.viewer,a=t.options.view,n=t.options.container,r=n&&n.one(".js-comments-container");a&&i&&n&&r&&(n.delegate("tap",function s(n){var o,d,l,c;n.halt(!0),o=n.currentTarget,l=(d=i&&i.getCurrItem()&&e.one(i.getCurrItem()))&&d.one(".bottom-controls"),c=d&&d.getAttribute("data-id"),l&&c&&r&&(t._animatingShare?t._onAnimateShareEnd=s.bind(null,n):o.hasClass("comments")?(e.fire("td-applet-canvass:open",{contextUuid:c}),a.fireClickBeacon("giraffe_viewer","reaction","cmmt",null,{itc:"0",ct:"story",g:c})):o.hasClass("share")&&(t._animatingShare=!0,l.hasClass("disabled")?t.toggleShareIcons(!1):t.toggleShareIcons(!0),a.fireClickBeacon("giraffe_viewer","open","share",null,{itc:"1",ct:"open",g:c})))},".social-button"),o.on("vertical-video:destroy-page",function(t){var i=t&&t.node&&e.one(t.node),a=i&&i.one(".bottom-controls"),n=i&&i.one(".comments .count"),o=r&&r.one("[data-applet-guid]"),s=o&&o.getAttribute("data-applet-guid");i&&(s&&e.fire("td-applet-canvass:destroy",{guid:s}),r&&r.empty(),a&&a.removeClass("disabled"),n&&n.empty())}),i.node.addEventListener("slider:move",function(){t.toggleShareIcons(!1)},!1),o.on("modal:showcomments",function(){var e=a.vvPlayer&&a.vvPlayer.controls;n.hasClass("not-revealed")&&(a.isLandscape&&t.togglePageFix(!1),e&&e.pause())}),o.on("modal:hidecomments",function(){var e=a.vvPlayer&&a.vvPlayer.controls;n.hasClass("not-revealed")&&(a.isLandscape&&t.togglePageFix(!0),e&&e.getDuration()-e.getCurrentTime()>.5&&e.play())}),o.on("vertical-video:reveal",function(t){var i=t&&t.reveal,a=r.one("[data-applet-guid]"),n=a&&a.getAttribute("data-applet-guid");n&&!i&&r.one(".share-icons-open")&&e.fire("td-applet-canvass:toggle-share",{guid:n})}))},toggleShareIcons:function(t){var i=this,a=i.options.viewer,n=i.options.container,o=a&&a.getCurrItem()&&e.one(a.getCurrItem()),r=o&&o.one(".bottom-controls"),s=n&&n.one(".js-comments-container"),d=s.one("[data-applet-guid]"),l=d&&d.getAttribute("data-applet-guid")
;l&&(t?s.hasClass("toggle-share")||(s.addClass("toggle-share"),setTimeout(function(){e.fire("td-applet-canvass:toggle-share",{guid:l}),s.addClass("animate-share"),setTimeout(function(){s.addClass("show-share"),r.addClass("disabled"),i._animatingShare=!1,i._onAnimateShareEnd&&(i._onAnimateShareEnd(),i._onAnimateShareEnd=null)},0)},0)):s.hasClass("show-share")&&(r.removeClass("disabled"),s.removeClass("show-share"),setTimeout(function(){s.removeClass("animate-share"),e.fire("td-applet-canvass:toggle-share",{guid:l}),setTimeout(function(){s.removeClass("toggle-share"),i._animatingShare=!1,i._onAnimateShareEnd&&(i._onAnimateShareEnd(),i._onAnimateShareEnd=null)},500)},500)))},renderCommentCount:function(t){var i,a,n=this,o=n.options.viewer,r=o&&o.getCurrItem(),s=r&&r.querySelector(".comments .count");s&&(t=t||0,(t=isNaN(t)||t<0?0:Math.floor(t))<1e3?a=t:(t<1e5?(a=t/1e3,i="k"):t<1e8&&(a=t/1e6,i="m"),(a=a&&a.toString().match(/^(\d\.\d|\d\d|\d)/))&&a[0]&&(a=a[0]+i)),a&&e.one(s).set("innerHTML",a))},getCommentCount:function(t,i){var a,n=this,o=t&&t.uuid,s=n.options.model&&n.options.model.syncContext,d=n.options.uiConfig&&n.options.uiConfig.verticalVideoComment;o&&s&&d&&(a=e.merge(d,{context:o}),r.read("CanvassStore",a,s,i))},togglePageFix:function(e){var t=this,a=t.options.container,n=t.options.viewer,o=t._pageFixHandles,r=o&&o.length>0;n&&a&&(e?r||a.one(".vv-comments .modal-open")||(t._pageFixHandles=[i.on("touchmove",function(e){e.preventDefault()}),i.on(["touchend","touchcancel"],function(e){n.handleScroll()})]):r&&(o.forEach(function(e){e.detach()}),t._pageFixHandles=null))},resetPlaylistPosition:function(e,t){function i(){var t;e.controls&&(e.controls.seek(0),t=e.playlist.getCurrentItemId(),setTimeout(function(){e.playlist&&t===e.playlist.getCurrentItemId()&&e.playlist.setPosition(e.playlist.getPosition())},100))}e&&e.controls&&t&&(e.controls.isPlaying()?(e.once(t.PLAYBACK_PAUSE,i),e.controls.pause()):i())},initContentList:function(t,i){var a,n,o,r,s,d;t&&t.verticalVideo?(n=(a=this).options.uiConfig,o=t.verticalVideo.category||"news",r=n.enableVerticalVideoCategory?n.verticalVideoCategory[o]:n.verticalVideoList,s=a.options.model&&a.options.model.getDataModel("viewer"),d=e.merge(a.options.config,{params:{enableEntities:!1,enableRelatedContent:!1}}),n.enableVerticalVideoAds&&(d=e.merge(a.options.config,{params:{curveball:{ads_count:n.verticalVideoAdPositions&&n.verticalVideoAdPositions.length||0,ads_start_index:1,ads_type:n.verticalVideoAdsType,fromContentAPI:1,sectionId:n.verticalVideoSectionId},enableEntities:!1,enableRelatedContent:!1}})),s.initContentList(r,d,i),a.firstItem=t):i&&i()},processVerticalVideos:function(e,i,a,n){var o=this,r=o.options.uiConfig,s=r.enableVerticalVideoAds,l=r.verticalVideoAdPositions,c=o.player&&o.player.playlist,p=o.options.container,u=[],v=[],g=[],m=0,f=[],y=o.getAspectRatio();if(e&&p)return e.forEach(function(e){var n,o,r=e&&p.one('.js-slider-item[data-id="'+e.id+'"]'),b=e&&"story"===e.type&&e.verticalVideo,A=s&&f.length<l.length,w=b&&m<a&&!r;if(A&&"ad"===e.type)return e.verticalVideoAd=e.verticalVideoAd||{},e.adImages&&(y<h||t.screen.height<C||e.YVAP?e.verticalVideoAd.image=d(e.adImages,["landscape","large"])||d(e.adImages,["landscape","medium"]):e.verticalVideoAd.image=d(e.adImages,["square","large"])||d(e.adImages,["landscape","large"])||d(e.adImages,["square","medium"])||d(e.adImages,["landscape","medium"])),void f.push(e);!e||i&&!w||("story"===e.type&&e.verticalVideo&&(n=e.verticalVideo.id,e.verticalVideo.isVertical=!0,e.verticalVideo.aspectRatioClass=(o=e.verticalVideo.aspectRatio)&&o.match&&o.match(/\d+x\d+/)&&o.split("x").map(function(e){return parseInt(e)}).join("-")||"3-4",e.verticalVideo.yepConfig={autoplay:!1,replayonlyendscreen:!0,loop:!0,showControls:!1,video_uuid:n,site:e.site,region:e.region,lang:e.lang,startScreen:!1,page_space_id:e.spaceid},e.link&&!I.test(e.link)&&(e.link+=(e.link.indexOf("?")>0?"&":"?")+"exp=vv"),c&&c.getIndexForId(n)<0&&g.push(n),m++),u.push(e),v.push(e.id))}),n=n||0,o.contentIds=0===n?v:o.contentIds.concat(v),l.forEach(function(e,t){f[t]&&u.splice(Math.max(0,e-n+t),0,f[t])}),c&&g.length>0&&c.addItems(g),u},getAspectRatio:function(){var e=Math.max(t.innerHeight,t.innerWidth),i=Math.min(t.innerHeight,t.innerWidth);return e/i},initGeminiAds:function(){var e=this,t=e.options.container,i=e.options.viewer;t&&i&&i.node&&(t.delegate("tap",function(t){var i,a,n,o;t.halt(!0),a=(i=t.currentTarget.ancestor(".vv-ad-item")).one(".vv-ad-feedback"),n=i.getAttribute("data-id"),o=e.geminiVp[n],a.hasClass("hidden")?(a.removeClass("hidden"),o&&e.toggleGeminiPlayer(o,!1)):(e.closeAdFeedback(a),o&&e.toggleGeminiPlayer(o,!0))},".vv-ad-close"),t.delegate("change",function(e){var t=e.currentTarget.ancestor(".vv-ad-item"),i=t.one(".vv-ad-feedback .vv-ad-feedback-buttons");i.hasClass("enabled")||i.addClass("enabled")},".vv-ad-feedback-option"),t.delegate("tap",function(t){var i,a,n,o,r,s;t.halt(!0),n=(a=(i=t.currentTarget).ancestor(".vv-ad-item")).one(".vv-ad-feedback"),o=a.getAttribute("data-id"),r=e.geminiVp[o],i.hasClass("vv-ad-feedback-cancel")?(e.closeAdFeedback(n),r&&e.toggleGeminiPlayer(r,!0)):i.hasClass("vv-ad-feedback-submit")&&(s=n.one(".vv-ad-feedback-item input:checked"))&&(e.beaconAdFeedback(i.getAttribute("data-feedback-beacon"),s.get("value")),e.removeAd())},".vv-ad-feedback-button"),e.adBeaconMap={})},initGeminiVideoAd:function(e){var t,i,a,o,r,s,d,l,c,u,v;e&&(t=this,i=e.one(".vv-ad-vp"),a=e.getAttribute("data-id"),o=t.options.model&&t.options.model.getDataModel("viewer"),s=(r=a&&o.itemCache.get(a))&&r.YVAP,d=e.one(".vv-ad-cover"),c=(l=t.getRapidTracker())&&l.currentSpaceid,s&&i&&(u={autoplay:!0,replayonlyendscreen:!0,expBucket:n.getContext("bucket")||"",expName:"giraffe",playlist:{mediaItems:[{id:t.options.uiConfig.verticalVideoAdVideoId,images:{thumbnail:d&&d.getAttribute("src")}}]},startscreen:{showButton:!1,showDesc:!1,showProvider:!1,showTitle:!1},connectionType:{raw:"dsl",mobile:!1},disableCasting:!0,mute:!0,
rapidConfig:this.getVideoRapidConfig(),YVAP:s},c&&(u.pageSpaceId=c+""),(v=new YAHOO.VideoPlatform.VideoPlayer(u)).on(YAHOO.VideoPlatform.API_Events.AD_PLAYBACK_START,function(){var a=e.one(".vv-ad-feedback"),n=i.one(".vv-ad-cta-link");i.setStyle("display","block"),a&&!a.hasClass("hidden")&&t.toggleGeminiPlayer(v,!1),n&&n.remove()}),v.on(YAHOO.VideoPlatform.API_Events.PLAYBACK_COMPLETE,function(){i.one(".vv-ad-cta-link")||dust.render(p,r,function(e,t){!e&&t&&i.one(".yvp-main").prepend(t)})}),v.render(i.one(".js-video-ad-placeholder")),t.geminiVp[a]=v))},destroyGeminiVideoAd:function(e){var t=this,i=e&&e.getAttribute("data-id"),a=i&&t.geminiVp[i];a&&(a.destroy(),t.geminiVp[i]=null)},toggleGeminiPlayer:function(e,t){e&&(t?e.controls.isPlaying()||"end"===e.controls.getPlaybackState()||e.controls.play():e.controls.isPlaying()&&e.controls.pause())},closeAdFeedback:function(e){if(e){e.addClass("hidden"),this.resetAdFeedback(e)}},resetAdFeedback:function(e){var t,i;e&&(t=e.one(".vv-ad-feedback-item input:checked"),i=e.one(".vv-ad-feedback-buttons"),t&&(t.getDOMNode().checked=!1),i.hasClass("enabled")&&i.removeClass("enabled"))},beaconAdFeedback:function(e,t){var i=this,n=i.adBeaconMap;e&&t&&!d(n,[e,"submit"])&&(n[e]=n[e]||{},n[e].submit=!0,a.send(e.replace(/\$\(AD_FEEDBACK\)/,"(type$fdb_submit,subo$"+t+",cmnt$)")))},fireGeminiViewBeacon:function(){var t,i=this,n=i.options.viewer,o=n&&n.getCurrItem()&&e.one(n.getCurrItem()),r=i.adBeaconMap;o&&o.hasClass("vv-ad-item")&&(t=o.one(".vv-ad").getAttribute("data-beacon"),d(r,[t,"view"])||(r[t]=r[t]||{},r[t].view=!0,a.send(t)))},removeAd:function(){var t=this,i=t.options.viewer,a=t.options.view,n=t.options.container,o=i&&i.getCurrItem()&&e.one(i.getCurrItem()),r=i.getCurrIndex();o&&o.hasClass("vv-ad-item")&&i&&i.node&&a&&n&&(i.node.addEventListener("slider:swipeend",function s(e){var d=n&&n.one(".vv-topbar"),l=t.preRenderVp,c=r;for(i.node.removeEventListener("slider:swipeend",s),d&&d.one(".progress-dot:nth-child("+(r+1)+")").remove();l[c];)l[c-1]=l[c],c++;delete t.preRenderVp[c-1],i.removeContent(r,1,r),a.resizeVerticalPlayer(),t.destroyGeminiVideoAd(o)}),i.next())},rotateAds:function(e){var i,a,n=this,o=n.options.container,r=o&&o.all(".vv-ad");r&&0!==r.size()&&(i=parseInt(o.getStyle("height"),10),a=isNaN(i)?null:i-u+"px",r.each(function(n){var o,r=n.one(".vv-ad-link"),s=r&&r.one(".vv-ad-vp");i<b?n.addClass("vv-ad-short"):n.removeClass("vv-ad-short"),n.setStyle("height",a),e?(n.addClass("vv-ad-rotated"),r&&(n.hasClass("vv-ad-landscape")?(o=(Math.max(t.innerHeight,t.innerWidth)-g)*v,r.setStyle("width",o),s&&s.setStyle("width",o)):r.setStyle("width",a))):(n.removeClass("vv-ad-rotated"),r&&(r.setStyle("width",null),s&&s.setStyle("width",null)))}))},updateProgressBar:function(e){var t,i,a,n,o,r,s,d=this,l=d.options.container,c=l&&l.one(".vv-topbar");if(c&&e&&Array.isArray(e)){for(i=(t=c.all(".progress-dot")).size(),a=0,o=0,s=[];a<i;)r=e[o],n=t.item(a),r?"ad"!==r.type?(n.hasClass("V-h")&&n.removeClass("V-h"),a++):s.push(n):(n.hasClass("V-h")||n.addClass("V-h"),a++),o++;s.forEach(function(e){e.get("parentNode").insertBefore('<li class="progress-dot ad"></li>',e)})}},initProgressBar:function(e){var t,i=this,a=i.options.container,n=i.options.model;if(a&&n){for(t=[];e-- >0;)t.push(!0);dust.render(l,{dots:t,i18n:n.get("i18n")},function(e,t){!e&&t&&a.append(t)})}},shiftPlayers:function(e,t){var i,a,n,o=this,r=o.preRenderVp,s=e;if(e<t)i=e+1;else{if(!(e>t))return;i=e-1}n=i+(i-s),r[a=i-2*(i-s)]&&(r[n]=r[a],delete r[a]),o.shiftPlayers(i,t)},updateRapidConfig:function(e,t,i){var a,n,o;return(e=e||{}).pageParams=e.pageParams||{},e.rapid=e.rapid||{},a=t&&t.getAttribute("data-id"),n=t&&t.getAttribute("data-site"),o=e.pageParams,i&&(e.Spaceid=i),o.layout="giraffe",o.pt="content",a&&(o.paid=o.pstaid=o.pstaid_p=a),n&&(o.site=n),e},initVvMetadata:function(){var t,i=this,a=e.one(".streamv2"),n=i.options.model&&i.options.model.getDataModel("viewer"),o={params:{enableEntities:!1}};"advance-sm"===i.options.uiConfig.mode&&a&&n&&(t=a.all(S).getAttribute("data-uuid"),Array.isArray(t)&&t.length>0&&n.prefetchItems(t,!0,o))},hideCurrThumbnail:function(e){var t=this,i=e.playlist.getCurrentItemId(),a=t.options.viewer,n=a&&a.getCurrItem(),o=n&&n.querySelector('.vv-box[data-vvid="'+i+'"]');o&&t.hideThumbnail(n)},hideThumbnail:function(t){var i=t&&e.one(t).one(".thumbnail-placeholder");i&&("block"===i.one(".yvp-loading-screen").getStyle("display")&&i.one(".yvp-loading-screen").setStyle("display","none"),"block"===i.getStyle("display")&&i.setStyle("display","none"))},resizeItemToBody:function(e){var t=this;e&&P(function(){var i=e.one(".viewer-content-body"),a=t.options.viewer,n=t.options.container,o=a&&a.getCurrIndex(),r=i&&i.get("offsetHeight");r&&e.ancestor('.js-slider-card[data-index"'+o+'"]')&&n.hasClass("revealed")?(e.get("offsetHeight")!==r&&e.setStyle("height",r),t.resizeItemToBody(e)):e.setStyle("height",null)})}}},"@VERSION@",{requires:["af-event","af-transport"]});

}
/*
     FILE ARCHIVED ON 10:26:56 Jan 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:33:32 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 304.242
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.076
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 263.659 (3)
  PetaboxLoader3.resolve: 285.14 (5)
  PetaboxLoader3.datanode: 123.386 (5)
  load_resource: 1210.291 (2)
*/