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

YUI.add("type_video_manager",function(P,i){var H=P.Object.getValue(YUI,["Env","My","settings","context"]),w=H.videoplayerUrl,aq=(H.videoForcedError===1),p=(H.videoFullscreen===1),av=false,a=(H.videoAutoplay===1),V=(H.videoHtml5===1),b={statePlaying:"js-state-playing",stateMuted:"js-state-muted",stateFullscreen:"js-state-fullscreen",btnSound:"js-btn-sound",btnPlayPause:"js-btn-play-pause",btnFullscreen:"js-btn-fullscreen",btnVideomode:"js-btn-video-mode",btnVideoTiltbackMode:"js-btn-expand",customControls:".yvp-custom-controls .pl-controls-wrap"},aw=".js-stream-content-link",ab="prod",c=true,t=H.videoSingleVideo||false,z=H.videoMaxInstances||12,J=H.videoMaxLoops||3,r=(H.videoLooping===1),ax=(H.videoRelated===0),az=(H.videoBuffering===0),am=H.videoQosRate||".1",x=H.videoYwaRate||"0",L=H.videoMinControls===1,E=H.videoMustWatch===1,al=H.videoMWSticky,A=H.videoMute===1,ak={},ac=[],D={},G={},ao=H.videoSSButton,at=H.videoPausescreen,ag="not-ready",m=[],j="",B="",ae=H.videoInitEvent,aa=(H.videoAsyncEnabled===1),u=H.videoplayerScriptElementId,W=(H.videoCCOnMuteEnabled===1),Z=(H.videoModeEnabled===1),o=H.videoExpName||"advance",ap=H.videoComscoreC4||"US fp",q=(H.videoTiltbackModeEnabled===1),I=(H.videoAdBeaconsDisabled===1),ai=(H.videoAdCCOnMuteEnabled),R=(H.videoStreamRapidEnabled===1),af=!!P.one("#atomic"),K=af?"Dn":"D-n",aC=(H.videoFetchPlayerJS===1),k=H.videoVpaidTimeout||5,v=H.videoSingleVideoClasses||[],y=H.videoSingleVideoContainers||[],l=H.videoAdAutoLoop||false,e=H.videoAdClicktoUnmute||false,Q=H.verticalVideoAdStartPercentage||0,s=H.videoDisableOnViewerShow||false,f=H.videoSetCurrentTime||false,C=H.videoPlayListSwap||false,d=H.videoViewabilityDivisible||false;P.VideoManager={initPlayerJs:function(aG){var Y=this,aD,aE,aF;if(ag==="not-ready"&&aC){aE=function(){ag="ready";if(typeof aG==="function"){aG.call(Y);}};if(Y._isPlayerJSLoaded()){return aE();}ag="fetching";aF=aa&&P.one("#"+u);if(aF){aF.on("load",aE);}else{if(w&&!P.config.groups.videoplayer){aD={modules:{videoplayer:{group:"videoplayer",name:"videoplayer",type:"js",fullpath:w}},groups:{videoplayer:{name:"videoplayer",combine:false,filter:"min"}}};P.applyConfig(aD);}m.push(P.on("domready",function(){P.use("videoplayer",aE);}));}}},createPlayerInstance:function(aM,aX){var aP=this,aZ=".js-video-target",a4,aN,aQ,aS,aO,aE,a0,aT,aU,aH,aG,Y,aD,a2,a3,aY,a5,aI={},aW="strm-inline",aK,aJ,aR;if(ag!=="ready"){if(!aP.queue){aP.queue=[];}aM.playerConf=aX;aP.queue.push(aM);aP.initPlayerJs(aP.playerInitCallback);}else{if(aM&&aM.node&&aM.uuid){aO=P.one(aM.node);if(!aO.getDOMNode()){return;}aK=aO.one("script:not(.fetch-body)");if(aK){try{aJ=JSON.parse(aK.get("innerHTML"));aJ.autoplay=aJ.hasOwnProperty("autoplay")?aJ.autoplay:true;aJ.continuousPlay=aJ.hasOwnProperty("continuousPlay")?aJ.continuousPlay:true;}catch(a1){aJ=null;}}aS=aO.generateID();if(aS in G){return;}aE=aO.one(aZ);if(aE){aH=aO.getData("videoUrl");aG=aO.getData("videoXml");aD=aO.getData("playlist");aI=aO.getData("video-cfg");playlistPos=aO.getData("video-playlist-pos");if(aI){aI=JSON.parse(aI)||{};aI=aI.config||aI;aW=aI.expType||aO.getData("videoExpType")||aW;Y=aI.playlist||(aD&&JSON.parse(aD))||null;}aN=aP.createPlayerContainer(aE,aO,aI);aQ=aN.one(af?".StretchedBox":".RatioBox").generateID();if(aH){a3=aO.getData("imageUrl")||"";aU={streams:[{url:aH}],images:{thumbnail:a3}};if(I){aU={id:"6bf451fd-11f9-37f9-a54c-d73d795839f6",images:{thumbnail:a3}};a2={standaloneAd:{gemini:aO.getData("geminiData"),rules:aO.getData("videoRules"),beacons:aO.getData("videoBeacons")}};}}else{if(aG){a3=aO.getData("imageUrl")||"";aU={id:"6bf451fd-11f9-37f9-a54c-d73d795839f6",images:{thumbnail:a3}};a2={standaloneAd:{xml:aG,beacons:aO.getData("videoBeacons")},vpaidTimeout:k};if(!window.flEnabled){return;}}else{aU={id:aM.uuid};if(aE.getData("yvap")){try{a2=JSON.parse(aE.getData("yvap"));}catch(aL){}}}}aR=aI&&aI.hideVideoTitleOnHover||false;a4=aJ||{autoplay:a,ccode:B,ccOnMute:W,comscoreC4:ap,continuousPlay:Y?true:false,disableCasting:true,expBucket:P.Af.Config.getContext("bucket"),expName:(aI&&aI.expName)||o,expType:aW,fullscreenBtn:p,html5:V,lang:P.Af.Config.getContext("lang")||"en-US",loop:r,mute:A,pageSpaceId:P.Af.Config.get("spaceid"),pausescreen:at,playlist:Y||{mediaItems:[aU]},preload:true,qosSamplingRate:parseFloat(am),referrer:document.referrer||"",region:P.Af.Config.getContext("region")||"US",replayonlyendscreen:ax,stopBufferingOnPause:az,sec:j,settingscreen:false,showTitleOnHover:!aR,site:"frontpage",startscreen:{showButton:ao,showDesc:false,showProvider:false,showTitle:false},CMS:{env:ab,suppressAdContext:true},videoapps:false,ywaSamplingRate:parseFloat(x)};if(playlistPos){a4.playlistUI=aI.playlistUI||{show:true,position:playlistPos,theme:"dark"};}if(a2){a4.YVAP=a2;var aF=aE.getData("delete-yvap-cookie");if(aF&&P.Cookie&&P.Cookie.set){var a6=new Date();a6.setDate(a6.getDate()-30);P.Cookie.set(aF,"",{expires:a6});}}if(aH&&I){if(ai){a4.ccOnMute=true;}a4.html5=ai?true:"raw";}if(aG||aH){a4.disableRecoverer=true;if(l){a4.loop=aO.getData("autoloop");if(a4.loop&&aH){a4.playlist.mediaItems[0].streams=[{url:aH}];delete a4.playlist.mediaItems[0].id;}}if(aO.one(".js-vertical-video-ad")){a4.loop=true;a4.replayonlyendscreen=false;a4.expName="sponsored_moments_ad";aE.setData("pause-landscape","1");}if(aO.hasClass("js-stream-ad")){aE.setData("pause-article","1");}if(e){a4.unMuteOnClick=true;}}if(aG){a4.expName="GeminiBRX";}if(c){a4.conviva=false;c=false;}if(aX){a4=P.merge(a4,aX);}if(aD&&aI.expName!=="NTK"){a4=aP._addSidekickTvConfig(a4,aO,aD);}if(R){aP._updateVideoConfigWithRapidInstance(a4,aO);}aE.replace(aN);aT=aP._getMediaStore(aM.boss);if(aT){a0=new YAHOO.VideoPlatform.VideoPlayer(a4,aT);}else{a0=new YAHOO.VideoPlatform.VideoPlayer(a4);}aP._addPlayerToMap({boss:aM.boss,firedBeacons:{},guid:aS,has_interacted:false,is_playing:a4.autoplay,is_paused:false,loopCount:0,player:a0,playerNode:aN,playOnlyInViewport:aO.getData("play-only-in-viewport")||false,swapNode:aE,videoCfg:aI});aP.attachVideoListeners(a0,aO,aS);var aV=aO.getData("yaft-module")||undefined;if(aV&&ak[aS]){if(window.performance&&typeof window.performance.now==="function"){ak[aS]["yaftModuleName"]=aV;if(typeof window._videoLT==="undefined"){window._videoLT={};}window._videoLT[aV]={startTime:window.performance.now()};}}a0.render("#"+aQ);if(L){aP._setupControls(aS);}if(aq){if(a0&&a0._controller&&a0._controller.error){a0._controller.error({type:"playerError",code:"400"});}if(a0&&a0._controller&&a0._controller._vdmsPlayer&&a0._controller._vdmsPlayer._controller&&a0._controller._vdmsPlayer._controller.error){a0._controller._vdmsPlayer._controller.error({code:"SP-400-604",msg:"test error"});}}if(aO.one(".static-image-anchor")){aO.one(".static-image-anchor").addClass("D-n");}P.Global.fire("video-manager:create_player_instance",ak[aS]);}}}return aS;},isNodeInViewport:function T(aH){var aG,Y=document.getElementById("mega-uh-wrapper")&&document.getElementById("mega-uh-wrapper").offsetHeight||0,aJ=window.innerHeight,aI,aD=this;if(!aH){return;}if((aH.hasClass("js-stream-ad")||aH.ancestor(".js-stream-ad"))||(aH.hasClass("js-viewer-smad")||aH.ancestor(".js-viewer-smad"))){if(!aD._scrollInfo){var aF=P.one("body");aF.plug(P.Plugin.ScrollInfo);aD._scrollInfo=aF.scrollInfo;}if(aD._scrollInfo){var aE=parseInt(aH.getData("offset"),10)||-85;aI=aD._scrollInfo.isNodeOnscreen(aH,aE);}else{aI=aH.inViewportRegion();}}else{aG=aH.getDOMNode();if(aG&&aG.getBoundingClientRect()&&Y&&d){nodeTop=aG.getBoundingClientRect().top;nodeHeight=aG.getBoundingClientRect().height/d;aI=nodeTop+nodeHeight>Y&&nodeTop<aJ-nodeHeight;}else{aI=aH.inViewportRegion();}}return aI;},_addSidekickTvConfig:function ar(aD,aF,aE){var Y=this;aE=P.JSON.parse(aE);aD.autoplay=a;if(!aD.playlist.mediaItems){aD.playlist.mediaItems=aE;}aD.replayonlyendscreen=false;aD.continuousPlay=true;aD.loop=true;aD.html5=window.flEnabled?false:true;plCfg=aF.getData("cfg");html5Cfg=aF.getData("html5cfg");if(plCfg){plCfg=P.JSON.parse(plCfg);}if(html5Cfg){html5Cfg=P.JSON.parse(html5Cfg);}if(window.flEnabled&&plCfg){aD.iframeRender=true;aD=P.merge(aD,plCfg);}else{if(!window.flEnabled&&html5Cfg){aD=P.merge(aD,html5Cfg);}}return aD;},_getMediaStore:function(Y){if(ak[Y]){return ak[Y].player.getMediaStore();}return false;},_getPlayerMutedState:function(Y){return Y&&Y.controls&&Y.controls.getMute();},_addPlayerToMap:function(aD){var Y=aD.guid;var aE={loopCount:0,has_interacted:false,firedBeacons:{},eventSubscriptions:{playerErrors:true}};ak[Y]=aD;ac.push(Y);},_disableVideo:function(aD){var Y=this;if(aD&&aD.player&&aD.player.controls.isPlaying()){aD.is_disabled=true;Y._pauseVideo(aD);}},_enableVideo:function(aD){var Y=this;if(aD&&aD.player&&aD.is_disabled){aD.is_disabled=false;Y._playVideo(aD);}},_getPlayerMapItem:function(Y){return ak&&Y in ak&&ak[Y];},_pauseVideo:function(Y){if(Y&&Y.player&&Y.player.controls){Y.is_playing=false;Y.player.controls.pause();if(f){var aD=Y.player.controls.getCurrentTime();if(aD){Y.playerNode.setAttribute("data-vid-currenttime",aD);}}}},_playVideo:function(Y){if(Y&&Y.swapNode&&Y.swapNode.getData("pause-article")&&Y.is_disabled){return;}if(Y&&Y.player&&Y.player.controls){Y.is_playing=true;Y.player.controls.play();}},_publishUIInteract:function(aF,aD){var aE=this;var Y=aE.getVpAPI();aF._eventBus.publish(Y.UI_INTERACT,{srcElement:aD});},_setupControls:function(aI){var aL=this,aK=ak[aI],aM=aK&&aK.is_playing?" js-state-playing":"",Y=aL._createCustomControls(aK.player),aG=Y.one(".pl-controls-wrap"),aE=aK.playerNode.one(".yvp-custom-controls"),aH=P.one(".yvp-bottom-bar"),aD,aF,aJ;if(aE){aE.append(Y);aG.delegate("click",function(aO){var aN=aO.currentTarget;aK.has_interacted=true;switch(true){case (aN.hasClass(b.btnSound)):aL._toggleSoundControl(aN,aK,aI);break;case (aN.hasClass(b.btnPlayPause)):aL._togglePlayPauseControl(aN,aK,aI);break;case (aN.hasClass(b.btnFullscreen)):aL._toggleFullscreenControl(aN,aK,aE);break;case (aN.hasClass(b.btnVideomode)):aL._toggleVideoModeControl(aN,aK);break;case (aN.hasClass(b.btnVideoTiltbackMode)):aL._toggleTiltbackMode(aN,aK);break;default:break;}},"span");}},_toggleSoundControl:function n(aH,aF,aE){var aD=this;var aG=aF.player.controls.getMute();var Y="ctrl-mute-btn-"+(aG&&"off"||"on");if(aG){aF.player.controls.setMute(false);aD.volumeHandler(aE);aH.removeClass(b.stateMuted);}else{aF.player.controls.setMute(true);aH.addClass(b.stateMuted);}aD._publishUIInteract(aF.player,Y);},_togglePlayPauseControl:function M(aH,aG,aE){var aD=this;var aF=aD._isPlaying(aG.player);var Y="ctrl-"+(aF&&"Pause"||"Play");if(aF){aD._pauseVideo(aG);if(t){if(ak&&ak[aE]){ak[aE].is_playing=false;}aD.playOtherVideos(aE);}aH.removeClass(b.statePlaying);}else{aD._playVideo(aG);aH.addClass(b.statePlaying);}aD._publishUIInteract(aG.player,Y);},_toggleFullscreenControl:function au(aF,aE,aD){var Y=this;if(aE.player.controls.getFullscreen()){return;}aE.player.controls.setFullscreen(true);vpAPI=Y.getVpAPI();fullscreenEvent=aE.player.on(vpAPI.PLAYER_FULLSCREEN_CHANGE,Y.fullscreenChangeHandler.bind(Y));Y.fullscreen={player:aE.player,container:aD,state:Y.controlsSnapshot(aD),evt:fullscreenEvent};aF.addClass(b.stateFullscreen);Y._publishUIInteract(aE.player,"ctrl-fullscreen-on");},_toggleVideoModeControl:function N(aG,aE){var Y=this;var aD=aE.player;var aF={action:"open",currentTime:Math.floor(aD.controls.getCurrentTime()),muted:aD.controls.getMute(),uuid:aD.playlist.getCurrentItemId()};P.Global.fire("video-modal",aF);Y._publishUIInteract(aE.player,"ctrl-videomode-on");},_toggleTiltbackMode:function O(aH,aE){var Y=this;var aD=aE&&aE.player;var aG=aE&&aE.playerNode;var aF=aG&&aG.ancestor(".js-video-content");if(!aF){return false;}aF.toggleClass("expanded");aG.toggleClass("css-hide-video-controls");Y._publishUIInteract(aD,"ctrl-tiltback-mode");},controlsSnapshot:function(aD){var aE,Y;if(aD){aE=aD&&aD.one("."+b.btnSound);Y=aD&&aD.one("."+b.btnPlayPause);if(aE&&Y){return{muted:aE.hasClass(b.stateMuted),playing:Y.hasClass(b.statePlaying)};}}},fullscreenChangeHandler:function(aD){var Y=this;if(!aD){Y.exitFullscreenCleanup();}},exitFullscreenCleanup:function(){var aE=this,aG=aE.fullscreen,aD=aG.container,Y=aD.one(".js-btn-fullscreen"),aF=aE.controlsSnapshot(aD);if(Y&&Y.test(".js-state-fullscreen")){Y.toggleClass(b.stateFullscreen);}if(aF.playing!==aG.state.playing){aD.one("."+b.btnPlayPause).toggleClass(b.statePlaying);}if(aF.muted!==aG.state.muted){aD.one("."+b.btnSound).toggleClass(b.stateMuted);}aE.fullscreen.evt();aE.fullscreen=null;},fullscreenHandler:function(aD){var aE=this,Y;if(aE.fullscreen){switch(aD){case"ctrl-fullscreen-off":aE.exitFullscreenCleanup();break;case"ctrl-mute-btn-off":aE.fullscreen.state.muted=false;break;case"ctrl-mute-btn-on":aE.fullscreen.state.muted=true;break;case"ctrl-play":aE.fullscreen.state.playing=true;break;case"ctrl-pause":aE.fullscreen.state.playing=false;break;default:break;}}},_createCustomControls:function ay(aG){var aE=this;var aF=[];var Y=aE._getSoundControlMarkup(aG);var aD=aE._getPlayPauseControlMarkup(aG);if(Z){aF=[Y,aD,aE._getVideoModeMarkup()];}else{if(q){aF=[aE._getVideoTiltbackModeMarkup()];}else{aF=[Y,aD];if(p){aF.push(aE._getFullscreenControlMarkup());}}}return P.Node.create('<div class="outer-wrap"><div class="inner-wrap"><div class="pl-controls-wrap">'+aF.join("")+"</div></div></div>");},_getPlayPauseControlMarkup:function h(Y){var aD=this._isPlaying(Y)&&" js-state-playing"||"";return'<span class="js-btn-play-pause '+aD+'"> <i class="play"></i> <i class="pause"></i> </span>';},_getSoundControlMarkup:function an(Y){var aD=Y.controls.getMute()&&" js-state-muted"||"";return'<span class="js-btn-sound '+aD+'"> <i class="on"></i> <i class="off"></i> </span>';},_getFullscreenControlMarkup:function U(){return'<span class="js-btn-fullscreen"> <i class="fs"></i> </span>';},_getVideoModeMarkup:function aB(){return'<span class="js-btn-video-mode"> <i class="video-mode"></i> </span>';},_getVideoTiltbackModeMarkup:function g(){return'<span class="js-btn-expand"><i class="on"></i></span>';},_isDestroyable:function(Y){var aE=ak[Y];var aD;if(!aE||aE.is_destroyable===false){return false;}aD=aE&&!aE.has_interacted&&aE.playerNode;return aD&&!aD.inViewportRegion();},_isPlaying:function(Y){var aD=false;if(!Y||!Y.controls){return;}if(Y.controls.isPlaying){aD=Y.controls.isPlaying();}else{if(Y.controls._model){aD=!Y.controls._model.playbackState.paused;}}return aD;},_isPlayerJSLoaded:function(){return YAHOO&&YAHOO.VideoPlatform&&YAHOO.VideoPlatform.VideoPlayer;},_auditPlayerInstances:function(){var aD=ac.length,aE,Y;if(aD>z){aE=P.Array.filter(ac,this._isDestroyable);Y=aE.shift();this.destroyPlayerInstance(Y);}},createPlayerContainer:function(aL,aK,aI){var aH=[(L&&"css-hide-video-controls")||""];var aG=af?["Pb(56.25%)","H(0)","Pos(r)"]:["Ratio-16-9"];var aF=af?"StretchedBox W(100%) H(100%)":"RatioBox";var aO;var Y=aL&&aL.getAttribute("href")||"";var aE=aI&&aI.overrideTap||false;var aJ;if(aE&&Y){var aP=aI&&aI.viewerEligible?aK.getData("uuid"):"";var aN=[];var aD="";if(aP){aN=["js-content-viewer","rapid-noclick-resp","rapidnofollow"];aD=' data-uuid="'+aP+'"';}aN.push(aF);aJ='<a class="'+aN.join(" ")+'" href="'+Y+'"'+aD+"></a>";}else{aJ='<div class="'+aF+'"></div></div>';}if(q){aH.push("tiltback-mode-enabled");}var aM="";if(aL.hasClass("js-vertical-video-ad")){aG=["js-smad-image","Start(0)","Pos(f)","H(100%)","W(100%)","TranslateZ(0)"];}aO=aH.concat(aG).join(" ");return P.Node.create('<div class="js-player-container '+aO+'">'+aJ+"</div>");},destroyPlayerInstance:function(aD,aG){var Y=this,aF=P.Array.indexOf(ac,aD),aH;if(aD&&aD in ak&&ak[aD]){aH=ak[aD];if(aH.playerNode.inViewportRegion&&!aH.playerNode.inViewportRegion()||aG){try{aH.player.destroy();}catch(aE){}if(aH.playerNode&&aH.playerNode.getDOMNode()&&aH.swapNode&&aH.swapNode.getDOMNode()){aH.playerNode.replace(aH.swapNode);}aH.playerNode.destroy();aH=null;delete ak[aD];ac.splice(aF,1);}}if(Y.unmutedVP&&Y.unmutedVP===aD){Y.unmutedVP=null;}},_cleanup:function aA(aD){var Y=this;var aE;if(ak){aE=Object.keys(ak);if(Array.isArray(aE)){aE.forEach(function(aF){Y.destroyPlayerInstance(aF,true);});}}if(Array.isArray(m)){m.forEach(function(aF){aF.detach();aF=null;});}H=null;w=null;aq=null;a=null;V=null;b=null;ab=null;c=null;t=null;z=null;J=null;r=null;ax=null;az=null;am=null;x=null;L=null;E=null;al=null;A=null;ak=null;ac=null;G=null;ao=null;ag=null;m=null;j=null;B=null;ae=null;aa=null;u=null;Z=null;o=null;},handleBlur:function(){var Y=this;P.Array.each(ac,function(aD){var aF=Y._getPlayerMapItem(aD);var aE=false;if(!aF){return;}if(aF.is_live_event&&aF.player){if(Y._getPlayerMutedState(aF.player)){aE=true;}}else{if(!aF.has_interacted||aF.playOnlyInViewport){aE=true;}}if(aE){Y._pauseVideo(aF);Y.updatePlayBtn(aF);}},this);},isOrientationLandscape:function(){var aD;var Y=false;if(screen.orientation&&typeof screen.orientation.angle==="number"){aD=screen.orientation.angle;}else{if(typeof window.orientation==="number"){aD=window.orientation;}}if(aD!==undefined){Y=aD===90||aD===-90||aD===270||aD===-270;}return Y;},handleOrientationChange:function(aE){var aD=this;var Y;Y=aD.isOrientationLandscape();if(Y){P.Array.each(ac,function(aF){var aG=aD._getPlayerMapItem(aF);if(aG.swapNode&&aG.swapNode.getData("pause-landscape")){aD._pauseVideo(aG);}});}},handleFocus:function(){this.playOtherVideos();},playOtherVideos:function(aE){var Y=this,aD=this.isPlayable();P.Array.each(ac,function(aF){var aI=Y._getPlayerMapItem(aF),aG=aI&&aI.player,aH=ak[aF]&&ak[aF].playerNode;if(aI.swapNode&&aI.swapNode.getData("pause-article")){if(P.one("html").hasClass("Reader-open")){return;}}if(aI.swapNode&&aI.swapNode.getData("pause-landscape")){if(Y.isOrientationLandscape()){return;}aH=aI.playerNode.ancestor(".js-smad-clip");}if((!aE||aE!==aF)&&aD&&aG&&(!aI.has_interacted||aI.playOnlyInViewport)&&aH&&Y.isNodeInViewport(aH)){Y._playVideo(aI);Y.updatePlayBtn(aI);if(t){aD=false;}}});},handleViewEnter:function(aG){var aK=this,aE=aG.currentTarget,Y=aE.getData("pkg-video-id")||aE.getData("uuid"),aH=aE.getData("applet-guid")||aE.generateID(),aI=aK._getPlayerMapItem(aH),aJ=aI&&aI.player,aF=aK.isPlayable(),aD={node:aE,uuid:Y};if(aJ&&!aK._isPlaying(aJ)&&aI.playOnlyInViewport&&!aJ.isDocked()){if(aF){if(av){D.player=aH;return;}if(!aI.has_interacted&&(aI.is_paused||!aI.is_playing)){aK._playVideo(aI);}}aK.updatePlayBtn(aI);}else{if(aD&&aD.uuid&&!aI){aK.createPlayerInstance(aD,{autoplay:aF});}}},handleViewLeave:function(aF){var Y=this,aE=aF.currentTarget,aD=aE.getData("applet-guid")||aE.generateID(),aG=Y._getPlayerMapItem(aD);if(aG&&Y._isPlaying(aG.player)&&(!aG.has_interacted||aG.playOnlyInViewport)&&!aG.is_fullscreen&&!(aG.player&&aG.player.isDocked())){Y._pauseVideo(aG);}Y.updatePlayBtn(aG);Y._auditPlayerInstances();if(t){Y.playOtherVideos(aD);}if(D.player&&D.player===aD){D.player=false;}},_fetchMustWatch:function(){var Y=this,aD=function aE(){var aF=P.one("#mustwatch-container"),aI=aF&&aF.one("[data-applet-type=td-applet-videoplayer]"),aH=aI&&aI.getData("applet-guid");if(aH){P.Global.on("player-manager:initialize-complete",function aG(){P.Global.fire("player-manager:get-player-manager",{callback:function aJ(aK){var aL=aK.getPlayerInstance();Y._addPlayerToMap({loopCount:0,guid:aH,player:aL,playerNode:aI,has_interacted:false,is_playing:false});Y._setupControls(aH);aI.on("viewenter",Y.handleViewEnter,Y);aI.on("viewleave",Y.handleViewLeave,Y);},instance:aH});});}};P.Af.Content.remoteApplet(P.My.App,{type:"td-applet-videoplayer",params:{mode:"listron",submode:"mustwatch",channelAlias:"popular",enable_sticky_mode:al,expName:"advance",expType:"vid-inline",spaceid:P.Af.Config.get("spaceid"),site:"frontpage",vp:0,pausescreen:0,player_mute:1,i13n:{auto:false}},placement:{node:"#mustwatch-container"}},aD);},initMustWatch:function(){var aL=this,aF=5,aG=0,aD=P.one("#applet_p_50000201"),aJ=P.one("#applet_p_50000186"),aI,aE,Y;if(aD){m.push(P.Global.on("fpvideo:ready",function aK(aQ){var aN=aQ&&aQ.vp;if(aN){var aO=aD;var aM=aO&&aO.getData("applet-guid");var aP=(aN&&aL._isPlaying(aN))||true;aL._addPlayerToMap({loopCount:0,guid:aM,player:aN,playerNode:aO,has_interacted:false,is_playing:aP});m.push(aO.on("viewenter",aL.handleViewEnter,aL));m.push(aO.on("viewleave",aL.handleViewLeave,aL));aL.attachVideoListeners(aN,aO,aM);}}));return;}if(aJ){aJ.insert('<div id="mustwatch-container" class="css-hide-video-controls" data-offset="1000"></div>',"after");aI=P.one("#mustwatch-container");}if(aI){if(aI.inViewportRegion()){if(ag==="ready"){aL._fetchMustWatch();}else{if(ag==="not-ready"){aL.initPlayerJs(aL._fetchMustWatch);}else{if(ag==="fetching"){aE=setInterval(function aH(){aG+=1;if(ag==="ready"){clearInterval(aE);aL._fetchMustWatch();}if(aG>=aF){clearInterval(aE);}},500);}}}}else{Y=aI.on("viewenter",function(){Y.detach();aL._fetchMustWatch();});}}},init:function(){var aD=this;aD.queue=[];if(E){aD.initMustWatch();}m.push(P.Af.Event.on("content:init",aD.findVideosInit,aD));m.push(P.Af.Event.on("content-video:init",aD.findVideosInit,aD));m.push(P.Af.Event.on("content:batch",aD.findStreamVideos,aD));m.push(P.Af.Event.on("sidekicktv:init",aD.findStreamVideos,aD));aD.findDOMVideos();m.push(P.Global.on("video-manager:disable",aD._disablePlayers,aD));m.push(P.Af.Event.on("video-manager:disable",aD._disablePlayers,aD));m.push(P.Af.Event.on("page:destroy",aD._cleanup,aD));m.push(P.Global.on("video-manager:enable",aD._enablePlayers,aD));m.push(P.Af.Event.on("video-manager:enable",aD._enablePlayers,aD));m.push(P.Global.on("video-modal",function Y(aE){aE.type="video";P.Af.Event.fire("viewmode:enter",aE);}));m.push(P.on("blur",P.bind(aD.handleBlur,aD),window));m.push(P.on("focus",P.bind(aD.handleFocus,aD),window));m.push(P.on("orientationchange",P.bind(aD.handleOrientationChange,aD),window));m.push(P.Global.on("video-manager:prevent-new-playback",aD.handlePreventNewPlayback,aD));m.push(P.Global.on("video-manager:add-remote-player",aD.handleAddRemoteVideo,aD));m.push(P.Global.on("video-manager:remove-remote-player",aD.removeRemoteVideo,aD));if(s){m.push(P.Af.Event.on("viewer:show",aD._disablePlayers,aD));m.push(P.Af.Event.on("viewer:hide",aD._enablePlayers,aD));}aD.activeVideosInit();},_disablePlayers:function aj(){var Y=this;P.Array.each(ac,function(aD){var aE=Y._getPlayerMapItem(aD);if(aE.is_playing){Y._disableVideo(aE);}});},_enablePlayers:function F(){var Y=this;P.Array.each(ac,function(aD){var aE=Y._getPlayerMapItem(aD);if(aE.is_disabled){if(aE.swapNode&&aE.swapNode.getData("pause-landscape")){if(Y.isOrientationLandscape()){aE.is_disabled=false;return;}}Y._enableVideo(aE);}});},_normalizePayload:function(aF){var Y=aF&&aF.guid&&P.one("#applet_"+aF.guid)||P.one("#applet_p_50000173"),aD=aF&&aF.list,aE={container:Y,items:aD};return aE;},getVideoNodes:function(aH){var aD=aH&&aH.container,aF=aH&&aH.items,aG=null,aI,Y,aE=this;if(aD&&aF){P.Array.each(aF,function(aZ){if(aZ&&(aZ.type==="3"||aZ.pkg_video_id||aZ.videoCfg)){var aN,aU,aM,aV,aW,aQ;if(!aG){aG=new P.NodeList();}Y=aD.all('[data-uuid="'+aZ.id+'"]');Y.each(function(a0){if(!a0.hasClass("fake-cluster-uuid")&&!a0.hasClass("js-videomgr-excluded")){aI=a0;}});if(aI){var aO=Array.isArray(aZ.videoAdAssets)?P.Object.getValue(aZ,["videoAdAssets",0]):aZ.videoAdAssets;if(aO&&aO.mediaInfo){if(l){var aS=false;if(aO.autoloop){aS=aO.autoloop==="true"?true:(aO.autoloop==="false"?false:aO.autoloop);}aI.setData("autoloop",aS);}if(!Array.isArray(aO.mediaInfo)){aN=aE.mapVideoAdAssets(aO);if(aN&&aN.videoXml){aM=aN.videoXml;}else{aU=aN&&aN.videoUrl;}}else{for(var aL=0;aL<aO.mediaInfo.length;aL++){var aY=aO.mediaInfo[aL];if(aY.url&&aY.contentType==="video/mp4"){aU=aY.url;}if(aY.xml){aM=aY.xml;}}}}aV=aZ.videoAdImage;aW=aZ.videoAdBeacons;if(aI.one(".js-vertical-video-ad")){var aK=aI.get("clientHeight");var aT=Q||aZ.videoAdRules&&aZ.videoAdRules.viewabilityDefVideo&&parseInt(aZ.videoAdRules.viewabilityDefVideo.p,10)||50;if(aK>0){var aJ=-1*aK*(aT/100);aI.setData("offset",aJ);var aX=aI.one(".js-smad-clip");if(aX){aX.setData("offset",aJ);}}}else{if(aI.hasClass("js-stream-ad")){var aP=aI.get("clientHeight");if(aP){aI.setData("offset",-1*aK*0.5);}}}if(aU){aI.setData("videoUrl",aU);}if(aM||I){aI.setData("videoXml",aM);if(aW){P.Object.each(aW,function(a1,a0){if(Array.isArray(a1)){aW[a0]=a1;}else{aW[a0]=[a1];}});}}if(aV){aI.setData("imageUrl",aV);}if(aW){aI.setData("videoBeacons",aW);}if(aZ.videoAdRules){P.Object.each(aZ.videoAdRules,function(a1,a0){if(Array.isArray(a1)){P.Object.each(a1,function(a2){P.Object.each(a2,function(a4,a3){a2[a3]=parseInt(a4,10);});});}else{P.Object.each(a1,function(a3,a2){a1[a2]=parseInt(a3,10);});}});aI.setData("videoRules",aZ.videoAdRules);}if(I&&aU){aQ={clickUrl:aZ.link,mediaInfo:aO.mediaInfo};P.Array.each(aQ.mediaInfo,function aR(a0){a0.height=parseInt(a0.height,10);a0.width=parseInt(a0.width,10);a0.bitrate=parseInt(a0.bitrate,10);a0.length=parseInt(a0.length,10);});aI.setData("geminiData",aQ);}if(aZ.videoCfg){aI.setData("video-cfg",aZ.videoCfg);}aG.push(aI);aI=null;}}});if(aG&&aG.size()>0){return aG;}}return null;},mapVideoAdAssets:function(aG){var aD={VIDEO_PRIMARY:{contentType:"video/mp4",assetName:"videoUrl"},VIDEO_PORTRAIT:{contentType:"video/mp4",assetName:"videoUrl"}};var aK;var aE={};var aJ;var aI;var aH;var Y=function(aN,aL){var aM=new RegExp(aN);return aM.test(aL.contentType);};var aF=function(aL){return aL.xml;};aG=aG?[].concat(aG):[];aG.forEach(function(aL){var aM=aD[aL.usageType];aL.mediaInfo=aL.mediaInfo?[].concat(aL.mediaInfo):[];if(aM){if(aL.mediaInfo.length>1){aH=aL.mediaInfo.filter(aF)||[];if(!aH){aI=aL.mediaInfo.filter(Y.bind(null,aM.contentType))||[];}}else{if(aL.mediaInfo.length===1&&aL.mediaInfo[0].xml){aH=aL.mediaInfo;}else{aI=aL.mediaInfo;}}if(aH){aE.videoXml=aH[0]&&aH[0].xml;}else{aE[aM.assetName]=aI[0]&&aI[0].url;}}});return aE;},_loopVideos:function(aE,Y,aF){var aM=this,aD=false,aL,aJ,aG,aH,aK;Y=Y||{};aK=Y.playerConf||{};aK.autoplay=false;aJ=function aJ(aO,aN){var aP={node:aO,uuid:aO.getData("pkg-video-id")||aO.getData("uuid")},aQ=function aQ(){var aR;if(aN===0){aR=aE.getData("pkg-video-id")||aE.getData("uuid");aK.prefetchIds=aR;aH=aM.createPlayerInstance(aP,aK);}else{aP.boss=aH;aM.createPlayerInstance(aP,aK);}};setTimeout(aQ,0);};aG=function aG(aN){if(aM.isNodeInViewport(aN)){aD=true;}aM.queue.push({node:aN,uuid:aN.getData("pkg-video-id")||aN.getData("uuid"),playerConf:aK});};aL=function aL(){if(aF){aF();}};var aI=Y.init?aG:aJ;if(aE){aE.each(aI);if(Y.init){if(aD){aL();}else{P.one("window").once("scroll",aL);}}else{aL();}aM.attachViewportListeners(aE);}},findStreamVideos:function(aG){var Y=this,aF=Y._normalizePayload(aG),aD=Y.getVideoNodes(aF),aE={playerConf:aG.playerConf||{}};if(aD){Y._loopVideos(aD,aE);}},findDOMVideos:function(){var Y=P.all(".yahoo-view-video,.wafer-video,.featuredvideo");if(Y.size()>0){this._loopVideos(Y,{});}},findVideosInit:function(aG){var Y=this,aF=Y._normalizePayload(aG),aD=Y.getVideoNodes(aF),aE={init:true,playerConf:aG.playerConf||{}};if(ak&&Object.keys(ak).length>0){keys=Object.keys(ak);if(Array.isArray(keys)){keys.forEach(function(aH){var aI=ak[aH].playerNode;if(aI&&aI.getDOMNode&&!aI.getDOMNode()){Y.destroyPlayerInstance(aH,true);}});}}if(aD){Y._loopVideos(aD,aE,function(){if(Y.queue.length>0){Y.initPlayerJs(Y.playerInitCallback);}});}},activeVideosInit:function(){var Y=this;if(!window.VEX){return;}if(ag!=="ready"){Y.initPlayerJs(P.bind(Y.videoModeInstancesInit,Y));}else{Y.videoModeInstancesInit();}},videoModeInstancesInit:function(){var Y=this;var aF;var aD=[];var aE;if(!window.VEX){return;}P.Array.each(window.VEX.VideoModeInstances,function(aG){aF=aG&&aG.getPlayerInfos&&aG.getPlayerInfos();if(aF){aE=P.one(payload.node);aF.playerNode=aE;aF.is_playing=aF.config&&aF.config.autoplay;aD.push(aF);}});if(aD.length>0){Y.addRemoteVideoInstance(aD);}},handleAddRemoteVideo:function X(aE){var Y=this;var aD=Array.isArray(aE)?aE:[aE];Y.addRemoteVideoInstances(aD);},handlePreventNewPlayback:function ad(aD){var Y=this;av=!!aD;if(!aD&&D.player){if(Y.isPlayable()&&ak[D.player]){Y._playVideo(ak[D.player]);D.player=false;}if(D.player&&!ak[D.player]){D.player=false;}}},removeRemoteVideo:function S(aG){var Y=this;var aD=aG&&aG.guid;var aF;var aE;if(aD&&aD in ak&&ak[aD]){aE=P.Array.indexOf(ac,aD);aF=ak[aD];aF=null;delete ak[aD];ac.splice(aE,1);}},addRemoteVideoInstances:function ah(aG){var Y=this;var aF;var aE=new P.NodeList();var aD;if(Array.isArray(aG)&&aG.length>0){P.Array.each(aG,function(aH){if(aH){aF=P.one(aH.playerNode);aD=aF.generateID();Y._addPlayerToMap({guid:aD,player:aH.instance,playerNode:aF,is_destroyable:false,is_playing:aH._is_playing,eventSubscriptions:{playerErrors:false}});Y.attachVideoListeners(aH.instance,null,aD);aE.push(aF);}});}if(aE.size()>0){Y.attachViewportListeners(aE);}},attachViewportListeners:function(aD){var Y=this;m.push(aD.on("viewenter",Y.handleViewEnter,Y));m.push(aD.on("viewleave",Y.handleViewLeave,Y));},attachVideoListeners:function(aV,aP,aS){var aR=this,aE=aR.getVpAPI(),aT,aO,aW,aY,aN=aP&&aP.getData("videoBeacons"),aH=aN||false,aJ=ak[aS],aZ=(aJ&&aJ.fireBeacons)||{},aD=aP&&aP.getData("playlist")||(aJ&&aJ.videoCfg&&aJ.videoCfg.playlist),aU=aP&&aP.getData("meta"),aK=(aJ&&aJ.videoCfg)||{},aM=0,aL;if(aE&&ak&&ak[aS]){aL=ak[aS].eventSubscriptions||{};aV.on(aE.UI_INTERACT,function Y(a1){var a0=a1&&a1.srcElement&&a1.srcElement.toLowerCase();if(r){aV.controls.setLoop(false);}if(ak&&ak[aS]){ak[aS].has_interacted=true;}if(a0&&a0==="ctrl-mute-btn-off"){aR.volumeHandler(aS);}if(L&&aR.fullscreen){aR.fullscreenHandler(a0);}});aO=function(){if(ak&&ak[aS]){ak[aS].is_playing=false;}var a1=ak[aS].playerNode;var a0=a1.one(".js-cstm-end-screen");if(!a0){a0=a1.previous(".js-cstm-end-screen");if(a0){a0.remove();a1.insert(a0,a1.one(".yvp-bottom-bar")||a1.one(".vp-bottom-bar"));}}if(a0){a0.removeClass(K);}if(t){aR.playOtherVideos(aS);}};if(aL.playerErrors!==false){aT=function aT(a0){G[aS]=true;if(aH&&aP.getData("videoXml")){aR.destroyPlayerInstance(aS,true);}if(aP.getData("playlist")){aR.destroyPlayerInstance(aS,true);if(P.one("#applet_sidekicktv")){P.one("#applet_sidekicktv").addClass("D-n");}if(P.one("#my-adsLREC2-fallback")){P.one("#my-adsLREC2-fallback").removeClass("D-n");}}if(aP.one(".static-image-anchor")){aP.one(".static-image-anchor").removeClass("D-n");}if(aK.destroyOnError===true&&a0&&a0.category!=="200"){aR.destroyPlayerInstance(aS,true);P.Global.fire("video-manager:destroy_on_error",aS,a0);}};aV.on(aE.PLAYBACK_ERROR,aT);aV.on(aE.PLAYER_ERROR,aT);aW=aV.on(aE.PLAYBACK_TIMEOUT,aT);}aV.on(aE.AD_PLAYBACK_START,function aG(){var a0=ak[aS].playerNode.one(".js-cstm-end-screen");if(a0){a0.addClass(K);}});aV.on(aE.PLAYER_FULLSCREEN_CHANGE,function aI(a0){ak[aS].is_fullscreen=a0;});aV.on(aE.PLAYBACK_START,function aF(){ak[aS].is_playing=true;var a1=!ak[aS].has_interacted&&r&&J&&(ak[aS].loopCount<J);if(a1){ak[aS].loopCount++;if(ak[aS].loopCount===J){aV.controls.setLoop(false);}}var a0=ak[aS].playerNode.one(".js-cstm-end-screen");if(a0){a0.addClass(K);}if(aH){if(aP.getData("videoXml")){aZ={VIDEO_START:true,VIDEO_QUARTILE_100:true,VIDEO_VIEW:true,VIDEO_30_SEC:true,VIDEO_QUARTILE_25:true,VIDEO_QUARTILE_50:true,VIDEO_QUARTILE_75:true};}aR.fireAdBeacon("VIDEO_START",aN,aZ);}if(aW&&typeof aW==="function"){aW();}});aV.on(aE.PLAYBACK_PAUSE,function aX(){ak[aS].is_playing=false;ak[aS].is_paused=true;});aV.on(aE.PLAYBACK_RESUMED,function aX(){ak[aS].is_playing=true;ak[aS].is_paused=false;});if(aD){aD=aK.playlist||P.JSON.parse(aD);aU=aU&&P.JSON.parse(aU)||{};aV.on(aE.PLAYLIST_POSITION_CHANGE,function aQ(a0){if(C){aR.swapCurrentVideoInfo(aD,a0);}if(a0<aD.length&&a0>=0&&aU[aD[a0].id]){curMeta=aU[aD[a0].id];aM=a0;aP.one(".js-stv-title").setContent(curMeta.title);aP.one(".js-stv-provider").setContent(curMeta.providerName);}});}aV.on(aE.PLAYLIST_COMPLETE,function(){aO();if(aH){aR.fireAdBeacon("VIDEO_QUARTILE_100",aN,aZ);aZ={};}});aV.on(aE.VIDEO_STARTED,function(){if(aJ.yaftModuleName&&window.performance&&typeof window.performance.now==="function"){window._videoLT[aJ.yaftModuleName]["loadTime"]=window.performance.now();}});if(aH){aV.on(aE.PLAYBACK_TIME_UPDATE,function(a1,a0,a2){if(a0>3&&!aZ.VIDEO_VIEW){aR.fireAdBeacon("VIDEO_VIEW",aN,aZ);}if(a0>30&&!aZ.VIDEO_30_SEC){aR.fireAdBeacon("VIDEO_30_SEC",aN,aZ);}if(a0>a2*0.25&&!aZ.VIDEO_QUARTILE_25){aR.fireAdBeacon("VIDEO_QUARTILE_25",aN,aZ);}if(a0>a2*0.5&&!aZ.VIDEO_QUARTILE_50){aR.fireAdBeacon("VIDEO_QUARTILE_50",aN,aZ);}if(a0>a2*0.75&&!aZ.VIDEO_QUARTILE_75){aR.fireAdBeacon("VIDEO_QUARTILE_75",aN,aZ);}});}}},swapCurrentVideoInfo:function(aD,aE){if(aD&&aD.mediaItems){aD=aD.mediaItems;}if(aE<aD.length&&aE>=0){var Y=P.one(".power-toddler #video-item-"+aE);if(Y){P.one(".lead-video-item").setAttribute("data-uuid",aD[aE]["id"]);P.one(".lead-video-item .title").setContent(Y.getData("title"));P.one(".lead-video-item .summary").setContent(Y.getData("summary"));P.one(".lead-video-item .stream-content-link").setAttribute("href",Y.getData("link"));P.one(".lead-video-item .ActionComments a").setAttribute("href",Y.getData("link"));P.one(".lead-video-item .categorylabel").setContent(Y.getData("categorylabel"));P.one(".lead-video-item .js-stream-comment-counter").setContent(Y.getData("cmtcnt"));P.one(".lead-video-item .provider").setContent(Y.getData("provider"));}}},fireAdBeacon:function(aE,Y,aG){var aH;var aF;var aD;if(!aE||aG[aE]||I){return;}aH=Y&&Y[aE];if(!aH){return;}aH=[].concat(aH);for(aF=0;aF<aH.length;aF++){aD=aH[aF];if(!aD){continue;}P.Af.Beacon.send(aD);aG[aE]=true;}},playerInitCallback:function(){var aE=this,aD=aE.queue,Y=aD&&aD.length||0,aG=a,aF,aI,aH;if(Y!==0){aE.setUltParams(aD[0]);}for(aF=0;aF<Y;aF++){aI=aD[aF];aH=aI.playerConf||{};if(aI.node.inViewportRegion()){aH.autoplay=aG;aE.createPlayerInstance(aI,aH);if(t){aG=false;}}else{aH.autoplay=false;aE.createPlayerInstance(aI,aH);}}aE.queue=[];},getVpAPI:function(){var Y=this;if(!Y.vpAPI){Y.vpAPI=YAHOO&&YAHOO.VideoPlatform&&YAHOO.VideoPlatform.API_Events;}return Y.vpAPI;},setUltParams:function(aI){var aD=this,Y=aI&&aI.node,aH=Y.ancestor("[data-i13n-sec]"),aF=Y&&Y.one(".js-video-content"),aE=aF&&aF.getData("ylk"),aG=/;?ccode:(.[^;]+);/i,aJ;j=aH&&aH.getData("i13n-sec")||"";if(aE){aJ=aE.match(aG);B=(aJ&&aJ[1])||"";}},isPlayable:function(){var Y=a;if(t){P.Array.each(ac,function(aF){var aH=ak[aF]&&ak[aF].playerNode;var aE=false;if(aH){aE=v.some(function aG(aI){return aH.hasClass(aI);});aE=aE||y.some(function aD(aI){return aH.ancestor("."+aI);});}if(aH&&!G[aF]&&aE&&(ak[aF].is_playing===true)){Y=false;}});}return Y;},updatePlayBtn:function(aD){var Y;Y=aD&&aD.playerNode&&aD.playerNode.one(b.customControls+" ."+b.btnPlayPause);if(L&&Y){if(aD.is_playing&&!Y.hasClass(b.statePlaying)){Y.addClass(b.statePlaying);}else{if(!aD.is_playing&&Y.hasClass(b.statePlaying)){Y.removeClass(b.statePlaying);}}}},volumeHandler:function(aD){var Y=this,aE,aG,aF;if(Y.unmutedVP&&aD!==Y.unmutedVP){if(ak&&ak[Y.unmutedVP]){aG=ak[Y.unmutedVP];aE=aG.player;aF=aG.playerNode;aE.controls.setMute(true);if(!aF.inViewportRegion()){aE.controls.pause(true);aG.is_playing=false;Y.updatePlayBtn(aG);}aG.has_interacted=false;}}Y.unmutedVP=aD;},_updateVideoConfigWithRapidInstance:function(aE,aH){var aI=aH.ancestor("[data-i13n-sec]");var aG=aI&&aI.getData("i13n-sec")||"";var aD={};var aF={};var aJ=P.Object.getValue(window.rapidPageConfig,["rapidConfig","keys"])||{};var Y=aH.one(aw);if(Y){aD=P.Af.rapid.parseYLK(Y);}aE.sec=aE.sec||aG;aE.ccode=aE.ccode||aD.ccode||"";aE.cpos=aE.cpos||aD.cpos||"";aD.sec=aG;aF._rid=aJ._rid||"";aF.pt=aJ.pt||"home";aF.site=aJ.site||"";aE.rapidConfig={rapid:window.rapidInstance,clickParams:aD,pageParams:aF};return aE;}};if(w){P.VideoManager.init();}},"0.0.1",{requires:["af-content","af-event","base","event-custom","event-viewenter","node-core"]});YUI.add("event-viewenter",function(g,e){var b="inviewport",h=g.Object.getValue(YUI,["Env","My","settings","context"]),a,f=h.videoplayerScrollThrottle&&parseInt(h.videoplayerScrollThrottle,10)||0,d=h.videoViewabilityDivisible||false,c={_checkNode:function(m,v,u){var p,t,o,i,s=v.handle.evt.type,k,l,q,j,n;m=g.one(m);k=m.getData("timer"+s);if(k){clearTimeout(k);}l=function r(){o=m.getDOMNode();a=document.getElementById("mega-uh-wrapper")&&document.getElementById("mega-uh-wrapper").offsetHeight||0;i=window.innerHeight;if(o&&o.getBoundingClientRect()&&a&&d){n=o.getBoundingClientRect().top;j=o.getBoundingClientRect().height/d;p=n+j>a&&n<i-j;}else{q=parseInt(m.getData("offset"),10)||-85;p=u.isNodeOnscreen(m,q);}t=m.getData(b);if((s==="viewenter"&&p&&!t)||(s==="viewleave"&&!p&&t)){v.fire({target:m});m.setData(b,p);}};if(f){k=setTimeout(l,f);m.setData("timer"+s,k);}else{l();}},_notify:function(m,l,k,j){var i=l.handle.evt.type;if(i==="viewenter"||i==="viewleave"){j._checkNode(k,l,this);}else{l.fire({target:k});}},_filterNotify:function(q,o,m,n){var k,j,p,l=o.handle.evt.type;p=g.Selector.query(m||"*");for(k=0,j=p.length;k<j;k++){if(l==="viewenter"||l==="viewleave"){n._checkNode(p[k],o,this);}else{o.fire({target:p[k]});}}},_bind:function(m,j,l,i){var k,n,o,p;o=i||m;p=i?this._filterNotify:this._notify;if(this.type==="viewenter"||this.type==="viewleave"){k="scroll";n=g.one("body");}else{k=this.type;n=m;}n.plug(g.Plugin.ScrollInfo);n.scrollInfo.set("scrollDelay",25);j.handle=n.scrollInfo.on(k,p,null,l,o,this);},on:function(k,i,j){return this._bind(k,i,j);},delegate:function(l,j,k,i){return this._bind(l,j,k,i);},detach:function(j,i){i.handle.detach();},detachDelegate:function(j,i){i.handle.detach();}};g.Event.define("viewenter",c,true);g.Event.define("viewleave",c,true);g.Event.define("scrollToBottom",c,true);g.Event.define("scrollToTop",c,true);g.Event.define("scrollToLeft",c,true);g.Event.define("scrollToRight",c,true);},"1.0.0",{requires:["event-synthetic","node-scroll-info"]});/* Copyright (c) 2019, Yahoo! Inc.  All rights reserved. */


}
/*
     FILE ARCHIVED ON 02:39:36 Nov 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:32:30 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 254.839
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.071
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 128.064 (3)
  PetaboxLoader3.datanode: 137.584 (4)
  load_resource: 52.163
  PetaboxLoader3.resolve: 40.47
*/