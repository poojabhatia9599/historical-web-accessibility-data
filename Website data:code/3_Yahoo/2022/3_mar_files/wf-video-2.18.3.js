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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-video",[],t):"object"==typeof exports?exports["wafer-video"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-video"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220301002038/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,i){"use strict";function a(e,t){var i={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(i[a]=e[a]);return i}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},l=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),d=function e(t,i,a){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,a)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(a)},u=window.wafer,c=u.constants,f=u.utils,v=u.WaferBaseClass,y=c.ATTR_PREFIX,p=f.bindEvent,_=f.clearTimeout,h=f.each,m=f.findAncestor,g=f.isNodeName,w=f.removeCookie,C=f.setTimeout,E=f.unbindEvent,b=["handleFullscreenClick","handleMuteClick","handleNativeVideoEnd","handleVideoClick","handleVideoMouseEnter","handleVideoMouseLeave"],P=[],A=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.errorClass,o=i.selector,l=i.successClass;n(this,t);var d=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:a,selector:o,successClass:l},{STATE_ATTRS:P})),u=e.getAttribute(y+"src"),c=e.getAttribute(y+"darkmode-src"),f=e.getAttribute(y+"type")||"default",v=e.getAttribute(y+"trigger")||"viewport",p=e.getAttribute(y+"playlist-trigger")||"click",_=e.getAttribute(y+"boundary"),h=e.getAttribute(y+"autoplay"),g=e.getAttribute(y+"video-handle"),w=e.getAttribute(y+"pause-when-out-of-viewport"),C=e.getAttribute(y+"loop-count"),E=e.getAttribute(y+"id"),A=e.getAttribute(y+"target"),O=e.getAttribute(y+"viewability"),k=e.getAttribute(y+"ad-view-continuous"),V=A&&(_&&m(e,_)||document.body).querySelector(A),T=e.getAttribute(y+"load-class")||"";return T=T&&T.split(" "),d._util=s({},d._util,{autoplay:null===h||void 0===h?0:Number(h),boundary:_,elem:e,errorClass:a,darkModeSrc:c,id:E,loopCount:C,muteElem:e.getElementsByClassName("wafer-video-mute")[0],pauseWhenOutOfViewport:null===w||void 0===w?1:Number(w),player:null,playlistTrigger:p,selector:o,src:u,successClass:l,targetElem:V,trigger:v,type:f,videoHandle:null===g||void 0===g?1:Number(g),videoLoadClassName:T,adViewContinuous:null===k||void 0===k?0:Number(k)}),d._state=s({},d._state,{adPlaying:!1,adViewed:!1,created:!1,mounted:!1,playing:!1,playingAsPlaylist:!1,renderInProgress:!1,retryCount:0,viewability:O&&parseInt(O,10)||50,status:status}),C&&(d._state.loopCount=null===C||void 0===C?0:Number(C),d._state.loopCount&&--d._state.loopCount),b.forEach(function(e){d[e]=d[e].bind(d)}),"mouseenter"===p&&(d.addEventListeners(),d._state.mouseTimeout=null),"yvideoPlaylist"===f&&d.playlistDidMount(V,E),d}return o(t,e),l(t,[{key:"play",value:function(){var e=this._util.player;e&&(e.controls.isPlaying()||e.controls.play(),this._state.playing=!0)}},{key:"pause",value:function(){var e=this._util,t=e.player,i=e.adViewContinuous,a=this._state.adViewed,n=i&&a;t&&(t.controls.isPlaying()&&!n&&t.controls.pause(),this._state.playing=!1)}},{key:"isDocked",value:function(){var e=this._util.player;return!!e&&e.isDocked()}},{key:"unDock",value:function(){var e=this._util.player;e&&(e.controls.pause(),e.undockVideoPlayer())}},{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.config,i=void 0===t?{}:t,a=this._util,n=a.type,r=a.playlistTrigger;switch(n){case"yvideo":this._createYVideo(i);break;case"yvideoPlaylist":var o=this._util,s=o.elem,l=o.targetElem;this.addToPlaylistForVideo(l,s),s.classList.add("has-video-"+r,"has-wafer-click");break;default:this._createDefault()}}},{key:"stateDidUpdate",value:function(){}},{key:"destroy",value:function(){var e=this._util,i=e.player,a=e.playlistTrigger,n=e.type;i&&(i.__destroyed=!0),"mouseenter"===a&&this.removeEventListeners(),"yvideo"===n&&this.removeInstanceFromUuidCollection(),d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"_createDefault",value:function(){var e=this;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]||!this._state.created){var t=window.wafer.base.colorSchema,i=this._util,a=i.elem,n=i.darkmodeSrc,r=i.src;if(this._state.created=!0,r){var o=("dark"===t?n:r)||r;a.src=o,this._itemLoaded()}else{var s=this._util.errorClass;g(a,"video")?(h(a.getElementsByTagName("source"),function(i){var a=i.getAttribute("data-wf-src"),n=i.getAttribute("data-wf-darkmode-src");if(a){e._util.darkModeSrc=n;var r=("dark"===t?n:a)||a;i.setAttribute("src",r)}}),a.load(),this._itemLoaded(),this._addNativeVideoEvents()):a.classList.add(s)}}}},{key:"_createYVideo",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.force,r=void 0!==n&&n,o=this._util.player;if(r||!o){var l=this._util,d=l.elem,u=l.targetElem,c=void 0;try{c=JSON.parse(d.getAttribute(y+"video-config"))}catch(e){}if(!c)return!1;var f=s({},t.rapidConfig,c.rapidConfig),v=this._util,p=v.autoplay,_=void 0!==p&&p,h=v.videoLoadClassName;c=s({},t,c,{rapidConfig:f});var m=u||document.createElement("div");u||d.classList.add("wafer-video-default");var g=c,C=(g.height,g.width,a(g,["height","width"])),E={};m.classList.add("wafer-yvideo"),h&&m.classList.add.apply(m.classList,h),c.forceDisableFirstAd&&w("yvapF");try{if(this._util.player)try{this._util.player.destroy()}catch(e){}if(this._util.player=new window.YAHOO.VideoPlatform.VideoPlayer(s({startscreen:{showTitle:!0,showDesc:!0,showProvider:!1,showButton:!0},showControls:!0,fullscreenBtn:!0,replayonlyendscreen:!1,showTitleOnHover:!0,settingscreen:!1,enableFollowButtons:!0,enableSharedMediaStore:!1,energySaverMode:!1,enableLazy:!1,maintain16x9ratio:!0,renderOnServer:!1,videoOnly:!1,useAppDocking:!1,suppressPanelTitle:!1,mediaItem:null,videoManagerOptOut:!1,hidePlaylist:!1,hidePlaylistWhenSmall:!1,loop:!1,startTime:0,fullscreen:!1,mute:!0,ccOnMute:!0,stopBufferingOnPause:!1,preload:!1,watchHistoryEnabled:!1,html5:!0,iframeRender:!1,rapidConfig:{pageParams:E}},C,{autoplay:!!_})),!u){var b=d.getElementsByClassName("wafer-yvideo")[0];b&&b.parentNode.removeChild(b),d.appendChild(m)}this._addCustomEndScreen(),this._util.player.__render=function(){e._util.player.render(m),e.addInstanceToUuidCollection(),m.classList.add("wafer-video-rendered"),e._itemLoaded(d)}}catch(e){}}}},{key:"_addCustomEndScreen",value:function(){var e=this._util,t=e.boundary,i=e.elem,a=i.getAttribute(y+"end-scrn-class"),n=a&&t&&m(i,t),r=n&&n.getElementsByClassName(a)[0];this._util.endScreenEl=r}},{key:"_addNativeVideoEvents",value:function(){var e=this._util.elem;this._state.loopCount&&(e.loop=!1,p(e,"ended",this.handleNativeVideoEnd))}},{key:"_itemLoaded",value:function(){var e=this._util,t=e.elem,i=e.targetElem,a=this._util,n=a.selector,r=a.successClass;!i&&t.classList.remove(n.replace(".","")),t.classList.add(r),t.removeAttribute(y+"src")}},{key:"handleVideoClick",value:function(e){if("yvideoPlaylist"===this._util.type){var t=this._util,i=t.elem,a=t.id,n=t.targetElem;this.handlePlaylistClick(n,i,a)}}},{key:"handleMuteClick",value:function(e){e.preventDefault(),"yvideo"===this._util.type&&(this.mute=!this.mute)}},{key:"handleFullscreenClick",value:function(e){if(e.preventDefault(),"yvideo"===this._util.type){var t=this._util.player;t&&t.controls.setFullscreen(!t.controls.getFullscreen())}}},{key:"handleVideoMouseEnter",value:function(e){var t=this;"yvideoPlaylist"===this._util.type&&(_(this._state.mouseTimeout,this),this._state.mouseTimeout=C(function(){var e=t._util,i=e.elem,a=e.id,n=e.targetElem;!t._state.playingAsPlaylist&&t.handlePlaylistClick(n,i,a)},300,this))}},{key:"handleColorSchemaChange",value:function(){if(this._util.darkModeSrc&&"default"===this._util.type){var e=this._util.loopCount;e&&(this._state.loopCount=Number(e)),this._createDefault(!0)}}},{key:"handleVideoMouseLeave",value:function(e){"yvideoPlaylist"===this._util.type&&_(this._state.mouseTimeout,this)}},{key:"handleNativeVideoEnd",value:function(e){var t=this._util.elem,i=this._state.loopCount;if(t.setAttribute("data-wf-current-loop-count",this._state.loopCount--),i<=0)return void E(t,"ended",this.handleNativeVideoEnd);t.currentTime=0,t.play()}},{key:"mounted",set:function(e){this._state.mounted=e},get:function(){return this._state.mounted}},{key:"renderInProgress",set:function(e){this._state.renderInProgress=e},get:function(){return this._state.renderInProgress}},{key:"playing",set:function(e){this._state.playing=e}},{key:"playlistItemActive",set:function(e){var t=this._util.elem;if(e)return t.classList.add("wafer-playlist-active"),void(this._state.playingAsPlaylist=!0);this._state.playingAsPlaylist=!1,t.classList.remove("wafer-playlist-active")}},{key:"playlistItemComplete",set:function(e){var t=this._util.elem;e&&t.classList.add("wafer-video-watched")}},{key:"pausedByUser",set:function(e){this._state.pausedByUser=e}},{key:"mute",set:function(e){var t=this._util,i=t.muteElem,a=t.player,n=this.mute;i&&(n?i.classList.remove("video-is-unmute"):i.classList.add("video-is-unmute")),e!==n&&a&&a.controls.setMute(e)},get:function(){var e=this._util.player;return!!e&&e.controls.getMute()}},{key:"config",get:function(){var e=this._util,t=e.adViewContinuous,i=e.endScreenEl,a=e.id,n=e.pauseWhenOutOfViewport,r=e.player,o=e.trigger,s=e.type,l=e.videoHandle,d=this._state;return{adViewContinuous:t,endScreenEl:i,id:a,pausedByUser:d.pausedByUser,pauseWhenOutOfViewport:n,player:r,playingAsPlaylist:d.playingAsPlaylist,trigger:o,type:s,videoHandle:l}}},{key:"viewability",get:function(){return this._state.viewability}},{key:"adViewed",set:function(e){this._state.adViewed=e}},{key:"adPlaying",get:function(){return this._state.adPlaying},set:function(e){this._state.adPlaying=e}}]),t}(v);A.events={click:[["has-video-click","handleVideoClick"],["wafer-video-mute","handleMuteClick"],["wafer-video-fullscreen","handleFullscreenClick"]],mouseenter:[["_self","handleVideoMouseEnter"]],mouseleave:[["_self","handleVideoMouseLeave"]]},t.default=A,e.exports=t.default},"./src/controller.js":function(e,t,i){"use strict";function a(){return u=r(i("./src/base.js"))}function n(){return c=i("./src/perf.js")}function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"oathPlayer",n=this._state,r=n.elementInstances;(n.playlistMap.get(e)||[]).forEach(function(n){var o=r.get(n)||{},s=o.instance;s&&(s.config.id===t?("fireball"===a&&A.emitWaferEvent("video:mediacurrent",{elem:e,meta:{videoCreatedRetryCount:s._state.retryCount,instance:i,videoData:{id:t}}}),s.playlistItemActive=!0):s.playlistItemActive=!1)})}Object.defineProperty(t,"__esModule",{value:!0});var u,c,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},v=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),y=window.wafer.features,p=y.performanceMarkSupported,_=window.wafer.utils,h=_.clearTimeout,m=_.debounce,g=_.elementInView,w=_.findAncestor,C=_.getConfigFromJSONScriptNode,E=_.loadCSSSync,b=_.loadScriptAsync,P=_.setTimeout,A=window.wafer.base,O=window.wafer.controllers.WaferBaseController,k={AD_PLAYBACK_START:"video:adplaybackstart",MEDIA_ITEM_CURRENT:"video:mediacurrent",PLAYBACK_PAUSE:"video:playbackpause",PLAYBACK_START:"video:playbackstart",PLAYBACK_COMPLETE:"video:playbackcomplete"},V={AD_PLAYBACK_START:"AD",PLAYBACK_START:"CONTENT"},T=Object.keys(k),I=".wafer-video-default.wafer-video:not(.StretchedBox),.wafer-video-default.wafer-video-complete:not(.StretchedBox){position:relative;width:100%;height:100%}.wafer-video-default .wafer-yvideo{position:absolute;top:0;bottom:0;left:0;right:0}",S=void 0;window.__waferYahooVideoUuidCollection=function(){var e=new Map;return{add:function(t){var i=t._util.id;i&&(e.has(i)||e.set(i,[]),e.get(i).push(t))},getElemAndPlayer:function(t){return(e.get(t)||[]).map(function(e){var t=e._util;return{elem:t.elem,player:t.player}})},remove:function(t){var i=t._util.id;if(i){var a=e.get(i);if(a.length){var n=a.indexOf(t);n>-1&&e.get(i).splice(n,1)}}}}}();var L=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.errorClass,n=void 0===i?"wafer-video-error":i,r=e.root,l=void 0===r?document:r,c=e.selector,v=e.successClass,y=void 0===v?"wafer-video-complete":v,p=e.validateDelay,_=void 0===p?25:p;o(this,t);var h=C(document.getElementById("wafer-video-config")),g=h.config;if(g&&window.YAHOO&&window.YAHOO.subscriptions&&window.YAHOO.subscriptions.videoPlayer){var w=window.YAHOO.subscriptions.videoPlayer;g.pluginConfigs=g.pluginConfigs||{},g.pluginConfigs["source-metadata-plugin"]=g.pluginConfigs["source-metadata-plugin"]||{},g.pluginConfigs["source-metadata-plugin"]["media/sapi"]=g.pluginConfigs["source-metadata-plugin"]["media/sapi"]||{},g.pluginConfigs["source-metadata-plugin"]["media/sapi"].qs=g.pluginConfigs["source-metadata-plugin"]["media/sapi"].qs||{};for(var b in w)w.hasOwnProperty(b)&&(g.pluginConfigs["source-metadata-plugin"]["media/sapi"].qs[b]=w[b])}(u||a()).default.prototype.playlistDidMount=function(e,t){var i=P._state.elementInstances,a=i.get(e).instance,n=a.config.player;if(n){n.playlist.getItemById(t)||n.playlist.addItem(t)}},(u||a()).default.prototype.handlePlaylistClick=function(e,t,i){var a=P._state,n=a.elementInstances,r=a.playlistMap,o=n.get(e).instance,s=o.config.player;s.playlist.getItemById(i)||s.playlist.addItem(i),s.playlist.setPositionById(i),o.play(),r.get(e).length>1&&d.call(P,t,i,s)},(u||a()).default.prototype.addToPlaylistForVideo=function(e,t){var i=P._state.playlistMap;i.has(e)||i.set(e,[]),i.get(e).push(t)},(u||a()).default.prototype.addInstanceToUuidCollection=function(){window.__waferYahooVideoUuidCollection.add(this)},(u||a()).default.prototype.removeInstanceFromUuidCollection=function(){window.__waferYahooVideoUuidCollection.remove(this)};var P=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:l,selector:c,props:{errorClass:n,selector:c,successClass:y},WaferClass:(u||a()).default}));return P._validateWithDebounce=m(function(){P.validate()},_,P),P._util=f({},P._util,{videoConfig:h}),P._state=f({},P._state,{activeElem:null,currentVideoCreationIndex:0,dockedElem:null,hasYahooVideoPlayer:!1,loudElem:null,paused:!1,playerReadyTimeoutMap:new Map,playlistMap:new Map,yvideosList:[]}),E({text:I}),P.sync(),P}return l(t,e),v(t,[{key:"_handleVideoReady",value:function(e,t){var i=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=e.config.player;if(h(this._state.playerReadyTimeoutMap.get(t),this),n.__destroyed)return void n.destroy();if(!n.__ready){var r=n.getRootElement,o=this._util.videoConfig,s=e.config.videoHandle,l=o||{},d=l.autoplay,u=w(n.getVideoElement(),"wafer-yvideo")||r&&r.call(n)||t,c=!1;if(u){if(n._viewportOffset=this._getVideoOffset(u,e.viewability),a<=3){if(!n._viewportOffset)return void P(function(){n.__destroyed||i._handleVideoReady(e,t,++a)},50*a);p&&performance.mark("vp_ready"),c=g(u,n._viewportOffset,A.viewport)}!this._state.activeElem&&!1!==d&&s&&c&&!this._state.paused&&(e.play(),this._state.activeElem=t)}n.__isSlick=t.firstChild.classList.contains("yvideo-slick"),n.__ready=!0,this._state.currentVideoCreationIndex++,e.renderInProgress=!1,e.mounted=!0,this._createNextYvideo(),A.emitWaferEvent("video:ready",{elem:t,meta:{videoCreatedRetryCount:e._state.retryCount,instance:n,isInViewport:c}})}}},{key:"_startPlayerReadyTimer",value:function(e){var t=this;this._state.playerReadyTimeoutMap.set(e,P(function(){t._state.currentVideoCreationIndex++,t._createNextYvideo()},5e3,this))}},{key:"_createNextYvideo",value:function(){var e=this._state.yvideosList[this._state.currentVideoCreationIndex];if(e){var t=this._state.elementInstances.get(e),i=t.instance;if(!i.renderInProgress){i.renderInProgress=!0;var a=i.config.player;if(!a||a.__ready)return this._state.currentVideoCreationIndex++,void this._createNextYvideo();this._startPlayerReadyTimer(e),a.__init&&a.__init(e,this,i),this._handleYVideoEvents(e,i),a.__render()}}}},{key:"_handleYVideoEvents",value:function(e,t){var i=this,a=t.config,r=a.endScreenEl,o=a.player,s=a.adViewContinuous,l=window.YAHOO.VideoPlatform.API_Events||window.OATH&&window.OATH.VideoPlatform.Events;T.forEach(function(i){o.on(l[i],function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=V[i];r&&(0,(c||n()).logVideoPlayerMetrics)(r),A.emitWaferEvent(k[i],{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o,videoData:a}})})}),o.on(l.PLAYBACK_RESUMED,function(){o.__destroyed||(t.config&&!t.config.pausedByUser&&(i._state.activeElem=e),t.playing=!0,A.emitWaferEvent("video:resumed",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o}}))}),o.on(l.UI_INTERACT,function(a){var n=a.srcElement;if("startScreen"!==n||"click"!==t.config.trigger){var r=!1,s=o.controls.isPlaying(),l=i._state,d=l.elementInstances,u=l.dockedElem,c=u&&d.get(u).instance;if("video-click"!==n||s?"ctrl-pause-btn"===n&&(r=!0):r=!0,t.pausedByUser=r,s){var f=i._state.activeElem,v=f&&d.get(f).instance;f&&f!==e&&v.pause(),i._state.activeElem=e,u&&u!==e&&c.isDocked()&&(c.unDock(),i._state.dockedElem=null)}else i._state.activeElem===e&&(i._state.activeElem=null,t.playing=!1);A.emitWaferEvent("video:interacted",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o}})}}),o.on(l.PLAYER_RENDERED,function(){var a=o.playlist;if(a){var n=a.getItems();if(n&&!n.length)return}o&&(i._handleVideoReady(t,e),A.emitWaferEvent("video:rendered",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o}}))}),o.on(l.PLAYER_MUTE_CHANGE,function(a){A.emitWaferEvent("video:mutechange",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o}}),i._updateMuteControlForElem(e,a)}),o.on(l.PLAYER_READY,function(){o&&i._handleVideoReady(t,e)}),o.on(l.PLAYER_DOCKED_CHANGE,function(a){if(!o.__destroyed){var n=document.body,r=o.getRootElement,s=w(o.getVideoElement(),"wafer-yvideo")||r&&r.call(o)||e;if(s&&(o._viewportOffset=i._getVideoOffset(s,t.viewability)),a){i._state.dockedElem=e;var l=i._state.activeElem;if(l&&l!==e){i._state.elementInstances.get(l).instance.pause()}i._state.activeElem=e,t.config.pausedByUser||o.controls.isPlaying()||i._state.paused||t.play(),n.classList.add("wafer-video-docked")}else i._state.dockedElem=null,n.classList.remove("wafer-video-docked");A.emitWaferEvent("video:dockChange",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o,isDocked:a,isInViewport:a}})}}),o.on(l.MEDIA_ITEM_CURRENT,function(t){d.call(i,e,t.id,o)}),this._state.isOathPlayer||(o.on(l.PLAYLIST_POSITION_CHANGE,function(){var t=o.playlist.getCurrentItem().id;d.call(i,e,t,o,"fireball")}),o.on(l.PLAYBACK_START,function(t){var a=i._state,n=a.elementInstances,r=a.playlistMap,s=r.get(e);s&&s.some(function(a){var r=n.get(a),s=r.instance,l=s.config,u=l.id;return!l.playingAsPlaylist&&u===t&&(d.call(i,e,t,o,"fireball"),!0)})})),o.on(l.PLAYBACK_COMPLETE,function(t){var a=i._state,n=a.elementInstances,r=a.playlistMap,o=r.get(e)||[];o&&o.some(function(e){var i=n.get(e)||{},a=i.instance;if(a&&a.config.id===t.id)return a.playlistItemComplete=!0,!0})}),o.on(l.PLAYER_ERROR,function(a){if(e===i._state.activeElem&&(i._state.activeElem=!1),h(i._state.playerReadyTimeoutMap.get(e),i),t._state.retryCount<2){var n=i._util.videoConfig||{},r=n.config;return i._state.currentVideoCreationIndex--,t.renderInProgress=!1,t._createYVideo(r,{force:!0}),t._state.retryCount++,void i._createNextYvideo()}i._state.currentVideoCreationIndex++,i._createNextYvideo(),o.__destroyed||(o.__isSlick=e.firstChild.classList.contains("yvideo-slick"),A.emitWaferEvent("video:playerError",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,data:a,instance:o}}))});var u=this._state.isOathPlayer?"vp-state-end-screen":"yvp-state-end-screen";if(r&&o.on(l.PLAYLIST_COMPLETE,function(){var e=w(o.getVideoElement(),"wafer-yvideo"),t=e.getElementsByClassName(u)[0];t&&t.insertAdjacentElement("afterend",r)}),o.on(l.AD_BREAK_ITEM_PLAYBACK_STARTED,function(i){t.adPlaying=!0,A.emitWaferEvent("video:adStarted",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o,adData:i}})}),o.on(l.AD_BREAK_ITEM_ENDED,function(i){t.adPlaying=!1,A.emitWaferEvent("video:adEnded",{elem:e,meta:{videoCreatedRetryCount:t._state.retryCount,instance:o,adData:i}})}),s)var f=o.addEventListener(l.PLAYBACK_PROGRESS,function(e,i){t.adPlaying&&i>=2&&(t.adViewed=!0,o.removeEventListener(l.PLAYBACK_PROGRESS,f))})}},{key:"_getVideoOffset",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=e||{},a=i.clientHeight,n=i.clientWidth,r=-parseInt(n,10),o=-parseInt(a*t/100,10);return r||o?{offsetX:r,offsetY:o}:null}},{key:"_updateMuteControlForElem",value:function(e,t){var i=this._state,a=i.elementInstances,n=i.loudElem,r=a.get(e);if(r){var o=r.instance;o&&(o.mute=t),n!==e&&(this._state.loudElem=e)}}},{key:"_loadVideoJS",value:function(e){var t=this;return new Promise(function(i,a){b({src:e},function(r){if(r)return void a(new Error("could not load js, src="+e));(0,(c||n()).logVideoPlayerResourceMetrics)(e),window.YAHOO||(window.YAHOO={}),window.YAHOO.VideoPlatform=window.YAHOO.VideoPlatform||window.OATH.VideoPlatform,t._state.isOathPlayer=window.OATH&&window.OATH.VideoPlatform,t._state.hasYahooVideoPlayer=!0,i()},"YAHOO.VideoPlatform")})}},{key:"handleScroll",value:function(){this._validateWithDebounce()}},{key:"handleResize",value:function(){this._validateWithDebounce()}},{key:"handleColorSchemaChange",value:function(){var e=this._state.elementInstances,t=!0,i=!1,a=void 0;try{for(var n,r=e.values()[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){n.value.instance.handleColorSchemaChange()}}catch(e){i=!0,a=e}finally{try{!t&&r.return&&r.return()}finally{if(i)throw a}}}},{key:"loadDependencies",value:function(){var e=this,t=this._util.videoConfig,i=this._state,a=i.elementInstances,n=i.hasYahooVideoPlayer;return new Promise(function(i,r){if(n)return i();var o=!1,s=!0,l=!1,d=void 0;try{for(var u,c=a.values()[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){if("yvideo"===u.value.instance.config.type){o=!0;break}}}catch(e){l=!0,d=e}finally{try{!s&&c.return&&c.return()}finally{if(l)throw d}}if(o){var f=window.OATH||window.YAHOO;if(f&&f.VideoPlatform)return window.YAHOO.VideoPlatform=window.YAHOO.VideoPlatform||window.OATH.VideoPlatform,void i();var v=t.playerScript||"https://web.archive.org/web/20220301002038/https://yep.video.yahoo.com/oath/js/1/oath-player.js";if(S)return S;S=e._loadVideoJS(v).then(function(){i()}).catch(function(e){r(e)})}else i()})}},{key:"pause",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pageVisibility",t=this._state.elementInstances;this._state.paused=!0,this._state.pauseSrc=this._state.pauseSrc||e;var i=!0,a=!1,n=void 0;try{for(var r,o=t.values()[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var s=r.value,l=s.instance;("pageVisibility"!==e||l.mute)&&l.pause()}}catch(e){a=!0,n=e}finally{try{!i&&o.return&&o.return()}finally{if(a)throw n}}}},{key:"resume",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pageVisibility";if(this._state.pauseSrc===e){var t=this._state.activeElem;if(this._state.pauseSrc=null,this._state.paused=!1,t){var i=this._state.elementInstances,a=i.get(t).instance;a&&a.play()}else this.sync()}}},{key:"trigger",value:function(e){var t=this._state.elementInstances,i=t.get(e);if(i){var a=i.instance;if("yvideoPlaylist"===a.config.type){var n=a._util,r=n.elem,o=n.id,s=n.targetElem;a.handlePlaylistClick(s,r,o)}}}},{key:"didSync",value:function(){var e=this._state,t=e.elementInstances,i=e.mounted;0===t.size||i||(this._state.mounted=!0)}},{key:"willValidate",value:function(e){var t=this,i=this._state,a=i.activeElem,n=i.elementInstances,r=i.dockedElem,o=this._util.videoConfig||{},s=o.config,l=o.viewportOffset,d=void 0===l?{}:l,u=!1;if(r)u=!0;else if(a){var c=n.get(a),f=c.instance,v=f.config,y=v.pauseWhenOutOfViewport,p=v.player;p&&(y?(p.controls.getFullscreen()||g(a,{offsetX:0,offsetY:-parseInt(a.clientHeight*f.viewability/100,10)},A.viewport))&&(u=!0):u=!0)}this.loadDependencies().then(function(){var i=!1;e.forEach(function(e){var a=n.get(e),r=a.instance;if(!r.mounted){var o=r.config.type;"yvideo"===o||"yvideoPlaylist"===o?(r.create({config:s}),"yvideo"===o&&(r._addedToYvideoList||(t._state.yvideosList.push(e),r._addedToYvideoList=!0,i=!0))):r.mounted=!0}}),i&&t._createNextYvideo()}).then(function(){if(!u){if(!1!==(t._util.videoConfig||{}).autoplay){a&&(n.get(a).instance.pause(),t._state.activeElem=null);var i=d.offsetX,r=void 0===i?0:i,o=d.offsetY,l=void 0===o?0:o,c=A.viewport;c.top=l,c.left=r,e.some(function(e){var i=n.get(e),a=i.instance,r=a.config.type,o=a._util.videoHandle;if("yvideoPlaylist"!==r&&o&&a.mounted&&g(e,{offsetX:0,offsetY:-parseInt(e.clientHeight*a.viewability/100,10)},c))if("default"===r)a.create({config:s});else{var l=a.config,d=l.pausedByUser,u=l.player;if(u&&!d)return t._state.activeElem=e,t._state.paused||a.play(),!0}return!1})}}}).then(function(){A.emitLog({name:"WaferVideo",elem:null,meta:{videoScriptLoaded:!0}})}).catch(function(e){var t=e.message,i=e.stack;A.emitError({name:"WaferVideo",elem:null,meta:{message:t},stack:i})})}}]),t}(O);t.default=L,e.exports=t.default},"./src/entry.js":function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=a(i("./src/controller.js"))}()).default)({selector:".wafer-video"}),e.exports=t.default},"./src/perf.js":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=window.wafer.features,r=n.performanceMarkSupported,o=n.isSlowBrowser,s=!1;t.logVideoPlayerMetrics=function(e){if(!s&&r){var t=window,i=t.rapidInstance;i&&i.beaconPerformanceData&&o.then(function(t){if(!t){var n=window,r=n.performance,o={},l=r.now();"AD"===e?o.vp_adplayback_start=l:o.vp_contentplayback_start=l,o.vp_playback_start=l;var d=r.getEntriesByName("vp_ready");if(d&&d.length){var u=a(d,1),c=u[0];o.vp_ready=Math.round(c.startTime+c.duration)}s=!0,i.beaconPerformanceData({perf_usertime:{utm:o}})}})}},t.logVideoPlayerResourceMetrics=function(e){if(r){var t=window,i=t.rapidInstance,n=t.videoPlayerResourceMetricsFired;if(i&&i.beaconPerformanceData&&!n){var o=window,s=o.performance,l={};if(e){var d=s.getEntriesByName(e);if(d&&d.length){var u=a(d,1),c=u[0];l.vp_fetch_duration=c.duration,l.vp_fetch_end_time=c.responseEnd,l.vp_fetch_start=c.startTime}}window.videoPlayerResourceMetricsFired=!0,window.rapidInstance.beaconPerformanceData({perf_usertime:{utm:l}})}}}}})});

}
/*
     FILE ARCHIVED ON 00:20:38 Mar 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:49:19 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.079
  cdx.remote: 0.118
  esindex: 0.012
  LoadShardBlock: 65.099 (6)
  PetaboxLoader3.datanode: 71.591 (7)
  load_resource: 45.612
  PetaboxLoader3.resolve: 29.254
*/