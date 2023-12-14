YUI.add("type_video_manager",function(M,g){var E=M.Object.getValue(YUI,["Env","My","settings","context"]),u=E.videoplayerUrl,am=(E.videoForcedError===1),n=(E.videoFullscreen===1),aq=false,a=(E.videoAutoplay===1),S=(E.videoHtml5===1),b={statePlaying:"js-state-playing",stateMuted:"js-state-muted",stateFullscreen:"js-state-fullscreen",btnSound:"js-btn-sound",btnPlayPause:"js-btn-play-pause",btnFullscreen:"js-btn-fullscreen",btnVideomode:"js-btn-video-mode",btnVideoTiltbackMode:"js-btn-expand",customControls:".yvp-custom-controls .pl-controls-wrap"},ar=".js-stream-content-link",W="prod",c=true,r=E.videoSingleVideo||false,x=E.videoMaxInstances||12,G=E.videoMaxLoops||3,p=(E.videoLooping===1),at=(E.videoRelated===0),av=(E.videoBuffering===0),ai=E.videoQosRate||".1",v=E.videoYwaRate||"0",I=E.videoMinControls===1,B=E.videoMustWatch===1,ah=E.videoMWSticky,y=E.videoMute===1,af={},X=[],A={},D={},ak=E.videoSSButton,ao=E.videoPausescreen,ac="not-ready",k=[],h="",z="",aa=E.videoInitEvent,V=(E.videoAsyncEnabled===1),s=E.videoplayerScriptElementId,U=(E.videoModeEnabled===1),m=E.videoExpName||"advance",al=E.videoComscoreC4||"US fp",o=(E.videoTiltbackModeEnabled===1),F=(E.videoAdBeaconsDisabled===1),ae=(E.videoAdCCOnMuteEnabled),O=(E.videoStreamRapidEnabled===1),ab=!!M.one("#atomic"),H=ab?"Dn":"D-n",ay=(E.videoFetchPlayerJS===1),i=E.videoVpaidTimeout||5,t=E.videoSingleVideoClasses||[],w=E.videoSingleVideoContainers||[],j=E.videoAdAutoLoop||false,d=E.videoAdClicktoUnmute||false,N=E.verticalVideoAdStartPercentage||0,q=E.videoDisableOnViewerShow||false;M.VideoManager={initPlayerJs:function(aC){var Y=this,az,aA,aB;if(ac==="not-ready"&&ay){aA=function(){ac="ready";if(typeof aC==="function"){aC.call(Y);}};if(Y._isPlayerJSLoaded()){return aA();}ac="fetching";aB=V&&M.one("#"+s);if(aB){aB.on("load",aA);}else{if(u&&!M.config.groups.videoplayer){az={modules:{videoplayer:{group:"videoplayer",name:"videoplayer",type:"js",fullpath:u}},groups:{videoplayer:{name:"videoplayer",combine:false,filter:"min"}}};M.applyConfig(az);}k.push(M.on("domready",function(){M.use("videoplayer",aA);}));}}},createPlayerInstance:function(aH,aQ){var aK=this,aS=".js-video-target",aX,aI,aL,aM,aJ,aA,aT,aN,aO,aC,aB,Y,az,aV,aW,aR,aY,aD={},aP="strm-inline",aF,aE;if(ac!=="ready"){if(!aK.queue){aK.queue=[];}aH.playerConf=aQ;aK.queue.push(aH);aK.initPlayerJs(aK.playerInitCallback);}else{if(aH&&aH.node&&aH.uuid){aJ=M.one(aH.node);if(!aJ.getDOMNode()){return;}aF=aJ.one("script");if(aF){try{aE=JSON.parse(aF.get("innerHTML"));aE.autoplay=aE.hasOwnProperty("autoplay")?aE.autoplay:true;aE.continuousPlay=aE.hasOwnProperty("continuousPlay")?aE.continuousPlay:true;}catch(aU){aE=null;}}aM=aJ.generateID();if(aM in D){return;}aA=aJ.one(aS);if(aA){aC=aJ.getData("videoUrl");aB=aJ.getData("videoXml");az=aJ.getData("playlist");aD=aJ.getData("video-cfg");if(aD){aD=JSON.parse(aD)||{};aD=aD.config||aD;aP=aD.expType||aJ.getData("videoExpType")||aP;Y=aD.playlist||null;}aI=aK.createPlayerContainer(aA,aJ,aD);aL=aI.one(ab?".StretchedBox":".RatioBox").generateID();if(aC){aW=aJ.getData("imageUrl")||"";aO={streams:[{url:aC}],images:{thumbnail:aW}};if(F){aO={id:"6bf451fd-11f9-37f9-a54c-d73d795839f6",images:{thumbnail:aW}};aV={standaloneAd:{gemini:aJ.getData("geminiData"),rules:aJ.getData("videoRules"),beacons:aJ.getData("videoBeacons")}};}}else{if(aB){aW=aJ.getData("imageUrl")||"";aO={id:"6bf451fd-11f9-37f9-a54c-d73d795839f6",images:{thumbnail:aW}};aV={standaloneAd:{xml:aB,beacons:aJ.getData("videoBeacons")},vpaidTimeout:i};if(!window.flEnabled){return;}}else{aO={id:aH.uuid};if(aA.getData("yvap")){try{aV=JSON.parse(aA.getData("yvap"));}catch(aG){}}}}aX=aE||{autoplay:a,ccode:z,comscoreC4:al,continuousPlay:false,disableCasting:true,expBucket:M.Af.Config.getContext("bucket"),expName:(aD&&aD.expName)||m,expType:aP,fullscreenBtn:n,html5:S,lang:M.Af.Config.getContext("lang")||"en-US",loop:p,mute:y,pageSpaceId:M.Af.Config.get("spaceid"),pausescreen:ao,playlist:Y||{mediaItems:[aO]},preload:true,qosSamplingRate:parseFloat(ai),region:M.Af.Config.getContext("region")||"US",replayonlyendscreen:at,stopBufferingOnPause:av,sec:h,settingscreen:false,site:"frontpage",startscreen:{showButton:ak,showDesc:false,showProvider:false,showTitle:false},CMS:{env:W,suppressAdContext:true},videoapps:false,ywaSamplingRate:parseFloat(v)};if(aV){aX.YVAP=aV;}if(aC&&F){if(ae){aX.ccOnMute=true;}aX.html5=ae?true:"raw";}if(aB||aC){aX.disableRecoverer=true;if(j){aX.loop=aJ.getData("autoloop");if(aX.loop&&aC){aX.playlist.mediaItems[0].streams=[{url:aC}];delete aX.playlist.mediaItems[0].id;}}if(aJ.one(".js-vertical-video-ad")){aX.loop=true;aX.replayonlyendscreen=false;aX.expName="sponsored_moments_ad";aA.setData("pause-landscape","1");}if(aJ.hasClass("js-stream-ad")){aA.setData("pause-article","1");}if(d){aX.unMuteOnClick=true;}}if(aB){aX.expName="GeminiBRX";}if(c){aX.conviva=false;c=false;}if(aQ){aX=M.merge(aX,aQ);}if(az){aX=aK._addSidekickTvConfig(aX,aJ,az);}if(O){aK._updateVideoConfigWithRapidInstance(aX,aJ);}aA.replace(aI);aN=aK._getMediaStore(aH.boss);if(aN){aT=new YAHOO.VideoPlatform.VideoPlayer(aX,aN);}else{aT=new YAHOO.VideoPlatform.VideoPlayer(aX);}aK._addPlayerToMap({boss:aH.boss,firedBeacons:{},guid:aM,has_interacted:false,is_playing:aX.autoplay,loopCount:0,player:aT,playerNode:aI,swapNode:aA,videoCfg:aD});aK.attachVideoListeners(aT,aJ,aM);aT.render("#"+aL);if(I){aK._setupControls(aM);}if(am){aT._controller.error({type:"playerError",code:"400"});}if(aJ.one(".static-image-anchor")){aJ.one(".static-image-anchor").addClass("D-n");}M.Global.fire("video-manager:create_player_instance",af[aM]);}}}return aM;},isNodeInViewport:function Q(aB){var Y=this;if(aB&&((aB.hasClass("js-stream-ad")||aB.ancestor(".js-stream-ad"))||(aB.hasClass("js-viewer-smad")||aB.ancestor(".js-viewer-smad")))){if(!Y._scrollInfo){var aA=M.one("body");aA.plug(M.Plugin.ScrollInfo);Y._scrollInfo=aA.scrollInfo;}if(Y._scrollInfo){var az=parseInt(aB.getData("offset"),10)||-85;var aC=Y._scrollInfo.isNodeOnscreen(aB,az);return aC;}else{return aB.inViewportRegion();}}},_addSidekickTvConfig:function an(az,aB,aA){var Y=this;aA=M.JSON.parse(aA);az.autoplay=a;az.playlist.mediaItems=aA;az.replayonlyendscreen=false;az.continuousPlay=true;az.loop=true;az.html5=window.flEnabled?false:true;plCfg=aB.getData("cfg");html5Cfg=aB.getData("html5cfg");if(plCfg){plCfg=M.JSON.parse(plCfg);}if(html5Cfg){html5Cfg=M.JSON.parse(html5Cfg);}if(window.flEnabled&&plCfg){az.iframeRender=true;az=M.merge(az,plCfg);}else{if(!window.flEnabled&&html5Cfg){az=M.merge(az,html5Cfg);}}return az;},_getMediaStore:function(Y){if(af[Y]){return af[Y].player.getMediaStore();}return false;},_getPlayerMutedState:function(Y){return Y&&Y.controls&&Y.controls.getMute();},_addPlayerToMap:function(az){var Y=az.guid;var aA={loopCount:0,has_interacted:false,firedBeacons:{},eventSubscriptions:{playerErrors:true}};af[Y]=az;X.push(Y);},_disableVideo:function(az){var Y=this;if(az&&az.player&&az.player.controls.isPlaying()){az.is_disabled=true;Y._pauseVideo(az);}},_enableVideo:function(az){var Y=this;if(az&&az.player&&az.is_disabled){az.is_disabled=false;Y._playVideo(az);}},_getPlayerMapItem:function(Y){return af&&Y in af&&af[Y];},_pauseVideo:function(Y){if(Y&&Y.player&&Y.player.controls){Y.is_playing=false;Y.player.controls.pause();}},_playVideo:function(Y){if(Y&&Y.swapNode&&Y.swapNode.getData("pause-article")&&Y.is_disabled){return;}if(Y&&Y.player&&Y.player.controls){Y.is_playing=true;Y.player.controls.play();}},_publishUIInteract:function(aB,az){var aA=this;var Y=aA.getVpAPI();aB._eventBus.publish(Y.UI_INTERACT,{srcElement:az});},_setupControls:function(aE){var aH=this,aG=af[aE],aI=aG&&aG.is_playing?" js-state-playing":"",Y=aH._createCustomControls(aG.player),aC=Y.one(".pl-controls-wrap"),aA=aG.playerNode.one(".yvp-custom-controls"),aD=M.one(".yvp-bottom-bar"),az,aB,aF;if(aA){aA.append(Y);aC.delegate("click",function(aK){var aJ=aK.currentTarget;aG.has_interacted=true;switch(true){case (aJ.hasClass(b.btnSound)):aH._toggleSoundControl(aJ,aG,aE);break;case (aJ.hasClass(b.btnPlayPause)):aH._togglePlayPauseControl(aJ,aG,aE);break;case (aJ.hasClass(b.btnFullscreen)):aH._toggleFullscreenControl(aJ,aG,aA);break;case (aJ.hasClass(b.btnVideomode)):aH._toggleVideoModeControl(aJ,aG);break;case (aJ.hasClass(b.btnVideoTiltbackMode)):aH._toggleTiltbackMode(aJ,aG);break;default:break;}},"span");}},_toggleSoundControl:function l(aD,aB,aA){var az=this;var aC=aB.player.controls.getMute();var Y="ctrl-mute-btn-"+(aC&&"off"||"on");if(aC){aB.player.controls.setMute(false);az.volumeHandler(aA);aD.removeClass(b.stateMuted);}else{aB.player.controls.setMute(true);aD.addClass(b.stateMuted);}az._publishUIInteract(aB.player,Y);},_togglePlayPauseControl:function J(aD,aC,aA){var az=this;var aB=az._isPlaying(aC.player);var Y="ctrl-"+(aB&&"Pause"||"Play");if(aB){az._pauseVideo(aC);if(r){if(af&&af[aA]){af[aA].is_playing=false;}az.playOtherVideos(aA);}aD.removeClass(b.statePlaying);}else{az._playVideo(aC);aD.addClass(b.statePlaying);}az._publishUIInteract(aC.player,Y);},_toggleFullscreenControl:function ap(aB,aA,az){var Y=this;if(aA.player.controls.getFullscreen()){return;}aA.player.controls.setFullscreen(true);vpAPI=Y.getVpAPI();fullscreenEvent=aA.player.on(vpAPI.PLAYER_FULLSCREEN_CHANGE,Y.fullscreenChangeHandler.bind(Y));Y.fullscreen={player:aA.player,container:az,state:Y.controlsSnapshot(az),evt:fullscreenEvent};aB.addClass(b.stateFullscreen);Y._publishUIInteract(aA.player,"ctrl-fullscreen-on");},_toggleVideoModeControl:function K(aC,aA){var Y=this;var az=aA.player;var aB={action:"open",currentTime:Math.floor(az.controls.getCurrentTime()),muted:az.controls.getMute(),uuid:az.playlist.getCurrentItemId()};M.Global.fire("video-modal",aB);Y._publishUIInteract(aA.player,"ctrl-videomode-on");},_toggleTiltbackMode:function L(aD,aA){var Y=this;var az=aA&&aA.player;var aC=aA&&aA.playerNode;var aB=aC&&aC.ancestor(".js-video-content");if(!aB){return false;}aB.toggleClass("expanded");aC.toggleClass("css-hide-video-controls");Y._publishUIInteract(az,"ctrl-tiltback-mode");},controlsSnapshot:function(az){var aA,Y;if(az){aA=az&&az.one("."+b.btnSound);Y=az&&az.one("."+b.btnPlayPause);if(aA&&Y){return{muted:aA.hasClass(b.stateMuted),playing:Y.hasClass(b.statePlaying)};}}},fullscreenChangeHandler:function(az){var Y=this;if(!az){Y.exitFullscreenCleanup();}},exitFullscreenCleanup:function(){var aA=this,aC=aA.fullscreen,az=aC.container,Y=az.one(".js-btn-fullscreen"),aB=aA.controlsSnapshot(az);if(Y&&Y.test(".js-state-fullscreen")){Y.toggleClass(b.stateFullscreen);}if(aB.playing!==aC.state.playing){az.one("."+b.btnPlayPause).toggleClass(b.statePlaying);}if(aB.muted!==aC.state.muted){az.one("."+b.btnSound).toggleClass(b.stateMuted);}aA.fullscreen.evt();aA.fullscreen=null;},fullscreenHandler:function(az){var aA=this,Y;if(aA.fullscreen){switch(az){case"ctrl-fullscreen-off":aA.exitFullscreenCleanup();break;case"ctrl-mute-btn-off":aA.fullscreen.state.muted=false;break;case"ctrl-mute-btn-on":aA.fullscreen.state.muted=true;break;case"ctrl-play":aA.fullscreen.state.playing=true;break;case"ctrl-pause":aA.fullscreen.state.playing=false;break;default:break;}}},_createCustomControls:function au(aC){var aA=this;var aB=[];var Y=aA._getSoundControlMarkup(aC);var az=aA._getPlayPauseControlMarkup(aC);if(U){aB=[Y,az,aA._getVideoModeMarkup()];}else{if(o){aB=[aA._getVideoTiltbackModeMarkup()];}else{aB=[Y,az];if(n){aB.push(aA._getFullscreenControlMarkup());}}}return M.Node.create('<div class="outer-wrap"><div class="inner-wrap"><div class="pl-controls-wrap">'+aB.join("")+"</div></div></div>");},_getPlayPauseControlMarkup:function f(Y){var az=this._isPlaying(Y)&&" js-state-playing"||"";return'<span class="js-btn-play-pause '+az+'"> <i class="play"></i> <i class="pause"></i> </span>';},_getSoundControlMarkup:function aj(Y){var az=Y.controls.getMute()&&" js-state-muted"||"";return'<span class="js-btn-sound '+az+'"> <i class="on"></i> <i class="off"></i> </span>';},_getFullscreenControlMarkup:function R(){return'<span class="js-btn-fullscreen"> <i class="fs"></i> </span>';},_getVideoModeMarkup:function aw(){return'<span class="js-btn-video-mode"> <i class="video-mode"></i> </span>';},_getVideoTiltbackModeMarkup:function e(){return'<span class="js-btn-expand"><i class="on"></i></span>';},_isDestroyable:function(Y){var aA=af[Y];var az;if(!aA||aA.is_destroyable===false){return false;}az=aA&&!aA.has_interacted&&aA.playerNode;return az&&!az.inViewportRegion();},_isPlaying:function(Y){var az=false;if(!Y||!Y.controls){return;}if(Y.controls.isPlaying){az=Y.controls.isPlaying();}else{if(Y.controls._model){az=!Y.controls._model.playbackState.paused;}}return az;},_isPlayerJSLoaded:function(){return YAHOO&&YAHOO.VideoPlatform&&YAHOO.VideoPlatform.VideoPlayer;},_auditPlayerInstances:function(){var az=X.length,aA,Y;if(az>x){aA=M.Array.filter(X,this._isDestroyable);Y=aA.shift();this.destroyPlayerInstance(Y);}},createPlayerContainer:function(aH,aG,aE){var aD=[(I&&"css-hide-video-controls")||""];var aC=ab?["Pb(56.25%)","H(0)","Pos(r)"]:["Ratio-16-9"];var aB=ab?"StretchedBox W(100%) H(100%)":"RatioBox";var aK;var Y=aH&&aH.getAttribute("href")||"";var aA=aE&&aE.overrideTap||false;var aF;if(aA&&Y){var aL=aE&&aE.viewerEligible?aG.getData("uuid"):"";var aJ=[];var az="";if(aL){aJ=["js-content-viewer","rapid-noclick-resp","rapidnofollow"];az=' data-uuid="'+aL+'"';}aJ.push(aB);aF='<a class="'+aJ.join(" ")+'" href="'+Y+'"'+az+"></a>";}else{aF='<div class="'+aB+'"></div></div>';}if(o){aD.push("tiltback-mode-enabled");}var aI="";if(aH.hasClass("js-vertical-video-ad")){aC=["js-smad-image","Start(0)","Pos(f)","H(100%)","W(100%)","TranslateZ(0)"];}aK=aD.concat(aC).join(" ");return M.Node.create('<div class="js-player-container '+aK+'">'+aF+"</div>");},destroyPlayerInstance:function(az,aC){var Y=this,aB=M.Array.indexOf(X,az),aD;if(az&&az in af&&af[az]){aD=af[az];if(aD.playerNode.inViewportRegion&&!aD.playerNode.inViewportRegion()||aC){try{aD.player.destroy();}catch(aA){}if(aD.playerNode&&aD.playerNode.getDOMNode()&&aD.swapNode&&aD.swapNode.getDOMNode()){aD.playerNode.replace(aD.swapNode);}aD.playerNode.destroy();aD=null;delete af[az];X.splice(aB,1);}}if(Y.unmutedVP&&Y.unmutedVP===az){Y.unmutedVP=null;}},_cleanup:function ax(az){var Y=this;var aA;if(af){aA=Object.keys(af);if(Array.isArray(aA)){aA.forEach(function(aB){Y.destroyPlayerInstance(aB,true);});}}if(Array.isArray(k)){k.forEach(function(aB){aB.detach();aB=null;});}E=null;u=null;am=null;a=null;S=null;b=null;W=null;c=null;r=null;x=null;G=null;p=null;at=null;av=null;ai=null;v=null;I=null;B=null;ah=null;y=null;af=null;X=null;D=null;ak=null;ac=null;k=null;h=null;z=null;aa=null;V=null;s=null;U=null;m=null;},handleBlur:function(){var Y=this;M.Array.each(X,function(az){var aB=Y._getPlayerMapItem(az);var aA=false;if(!aB){return;}if(aB.is_live_event&&aB.player){if(Y._getPlayerMutedState(aB.player)){aA=true;}}else{if(!aB.has_interacted){aA=true;}}if(aA){Y._pauseVideo(aB);Y.updatePlayBtn(aB);}},this);},isOrientationLandscape:function(){var az;var Y=false;if(screen.orientation&&typeof screen.orientation.angle==="number"){az=screen.orientation.angle;}else{if(typeof window.orientation==="number"){az=window.orientation;}}if(az!==undefined){Y=az===90||az===-90||az===270||az===-270;}return Y;},handleOrientationChange:function(aA){var az=this;var Y;Y=az.isOrientationLandscape();if(Y){M.Array.each(X,function(aB){var aC=az._getPlayerMapItem(aB);if(aC.swapNode&&aC.swapNode.getData("pause-landscape")){az._pauseVideo(aC);}});}},handleFocus:function(){this.playOtherVideos();},playOtherVideos:function(aA){var Y=this,az=this.isPlayable();M.Array.each(X,function(aB){var aE=Y._getPlayerMapItem(aB),aC=aE&&aE.player,aD=af[aB]&&af[aB].playerNode;if(aE.swapNode&&aE.swapNode.getData("pause-article")){if(M.one("html").hasClass("Reader-open")){return;}}if(aE.swapNode&&aE.swapNode.getData("pause-landscape")){if(Y.isOrientationLandscape()){return;}aD=aE.playerNode.ancestor(".js-smad-clip");}if((!aA||aA!==aB)&&az&&aC&&!aE.has_interacted&&aD&&Y.isNodeInViewport(aD)){Y._playVideo(aE);Y.updatePlayBtn(aE);if(r){az=false;}}});},handleViewEnter:function(aC){var aG=this,aA=aC.currentTarget,Y=aA.getData("pkg-video-id")||aA.getData("uuid"),aD=aA.getData("applet-guid")||aA.generateID(),aE=aG._getPlayerMapItem(aD),aF=aE&&aE.player,aB=aG.isPlayable(),az={node:aA,uuid:Y};if(aF&&!aG._isPlaying(aF)&&!aE.has_interacted&&!aF.isDocked()){if(aB){if(aq){A.player=aD;return;}aG._playVideo(aE);}aG.updatePlayBtn(aE);}else{if(az&&az.uuid&&!aE){aG.createPlayerInstance(az,{autoplay:aB});}}},handleViewLeave:function(aB){var Y=this,aA=aB.currentTarget,az=aA.getData("applet-guid")||aA.generateID(),aC=Y._getPlayerMapItem(az);if(aC&&Y._isPlaying(aC.player)&&!aC.has_interacted&&!aC.is_fullscreen&&!(aC.player&&aC.player.isDocked())){Y._pauseVideo(aC);}Y.updatePlayBtn(aC);Y._auditPlayerInstances();if(r){Y.playOtherVideos(az);}if(A.player&&A.player===az){A.player=false;}},_fetchMustWatch:function(){var Y=this,az=function aA(){var aB=M.one("#mustwatch-container"),aE=aB&&aB.one("[data-applet-type=td-applet-videoplayer]"),aD=aE&&aE.getData("applet-guid");if(aD){M.Global.on("player-manager:initialize-complete",function aC(){M.Global.fire("player-manager:get-player-manager",{callback:function aF(aG){var aH=aG.getPlayerInstance();Y._addPlayerToMap({loopCount:0,guid:aD,player:aH,playerNode:aE,has_interacted:false,is_playing:false});Y._setupControls(aD);aE.on("viewenter",Y.handleViewEnter,Y);aE.on("viewleave",Y.handleViewLeave,Y);},instance:aD});});}};M.Af.Content.remoteApplet(M.My.App,{type:"td-applet-videoplayer",params:{mode:"listron",submode:"mustwatch",channelAlias:"popular",enable_sticky_mode:ah,expName:"advance",expType:"vid-inline",spaceid:M.Af.Config.get("spaceid"),site:"frontpage",vp:0,pausescreen:0,player_mute:1,i13n:{auto:false}},placement:{node:"#mustwatch-container"}},az);},initMustWatch:function(){var aH=this,aB=5,aC=0,az=M.one("#applet_p_50000201"),aF=M.one("#applet_p_50000186"),aE,aA,Y;if(az){k.push(M.Global.on("fpvideo:ready",function aG(aM){var aJ=aM&&aM.vp;if(aJ){var aK=az;var aI=aK&&aK.getData("applet-guid");var aL=(aJ&&aH._isPlaying(aJ))||true;aH._addPlayerToMap({loopCount:0,guid:aI,player:aJ,playerNode:aK,has_interacted:false,is_playing:aL});k.push(aK.on("viewenter",aH.handleViewEnter,aH));k.push(aK.on("viewleave",aH.handleViewLeave,aH));aH.attachVideoListeners(aJ,aK,aI);}}));return;}if(aF){aF.insert('<div id="mustwatch-container" class="css-hide-video-controls" data-offset="1000"></div>',"after");aE=M.one("#mustwatch-container");}if(aE){if(aE.inViewportRegion()){if(ac==="ready"){aH._fetchMustWatch();}else{if(ac==="not-ready"){aH.initPlayerJs(aH._fetchMustWatch);}else{if(ac==="fetching"){aA=setInterval(function aD(){aC+=1;if(ac==="ready"){clearInterval(aA);aH._fetchMustWatch();}if(aC>=aB){clearInterval(aA);}},500);}}}}else{Y=aE.on("viewenter",function(){Y.detach();aH._fetchMustWatch();});}}},init:function(){var az=this;az.queue=[];if(B){az.initMustWatch();}k.push(M.Af.Event.on("content:init",az.findVideosInit,az));k.push(M.Af.Event.on("content-video:init",az.findVideosInit,az));k.push(M.Af.Event.on("content:batch",az.findStreamVideos,az));k.push(M.Af.Event.on("sidekicktv:init",az.findStreamVideos,az));az.findDOMVideos();k.push(M.Global.on("video-manager:disable",az._disablePlayers,az));k.push(M.Af.Event.on("video-manager:disable",az._disablePlayers,az));k.push(M.Af.Event.on("page:destroy",az._cleanup,az));k.push(M.Global.on("video-manager:enable",az._enablePlayers,az));k.push(M.Af.Event.on("video-manager:enable",az._enablePlayers,az));k.push(M.Global.on("video-modal",function Y(aA){aA.type="video";M.Af.Event.fire("viewmode:enter",aA);}));k.push(M.on("blur",M.bind(az.handleBlur,az),window));k.push(M.on("focus",M.bind(az.handleFocus,az),window));k.push(M.on("orientationchange",M.bind(az.handleOrientationChange,az),window));k.push(M.Global.on("video-manager:prevent-new-playback",az.handlePreventNewPlayback,az));k.push(M.Global.on("video-manager:add-remote-player",az.handleAddRemoteVideo,az));k.push(M.Global.on("video-manager:remove-remote-player",az.removeRemoteVideo,az));if(q){k.push(M.Af.Event.on("viewer:show",az._disablePlayers,az));k.push(M.Af.Event.on("viewer:hide",az._enablePlayers,az));}az.activeVideosInit();},_disablePlayers:function ag(){var Y=this;M.Array.each(X,function(az){var aA=Y._getPlayerMapItem(az);if(aA.is_playing){Y._disableVideo(aA);}});},_enablePlayers:function C(){var Y=this;M.Array.each(X,function(az){var aA=Y._getPlayerMapItem(az);if(aA.is_disabled){if(aA.swapNode&&aA.swapNode.getData("pause-landscape")){if(Y.isOrientationLandscape()){aA.is_disabled=false;return;}}Y._enableVideo(aA);}});},_normalizePayload:function(aB){var Y=aB&&aB.guid&&M.one("#applet_"+aB.guid)||M.one("#applet_p_50000173"),az=aB&&aB.list,aA={container:Y,items:az};return aA;},getVideoNodes:function(aD){var az=aD&&aD.container,aB=aD&&aD.items,aC=null,aE,Y,aA=this;if(az&&aB){M.Array.each(aB,function(aV){if(aV&&(aV.type==="3"||aV.pkg_video_id||aV.videoCfg)){var aJ,aQ,aI,aR,aS,aM;if(!aC){aC=new M.NodeList();}Y=az.all('[data-uuid="'+aV.id+'"]');Y.each(function(aW){if(!aW.hasClass("fake-cluster-uuid")&&!aW.hasClass("js-videomgr-excluded")){aE=aW;}});if(aE){var aK=Array.isArray(aV.videoAdAssets)?M.Object.getValue(aV,["videoAdAssets",0]):aV.videoAdAssets;if(aK&&aK.mediaInfo){if(j){var aO=false;if(aK.autoloop){aO=aK.autoloop==="true"?true:(aK.autoloop==="false"?false:aK.autoloop);}aE.setData("autoloop",aO);}if(!Array.isArray(aK.mediaInfo)){aJ=aA.mapVideoAdAssets(aK);if(aJ&&aJ.videoXml){aI=aJ.videoXml;}else{aQ=aJ&&aJ.videoUrl;}}else{for(var aH=0;aH<aK.mediaInfo.length;aH++){var aU=aK.mediaInfo[aH];if(aU.url&&aU.contentType==="video/mp4"){aQ=aU.url;}if(aU.xml){aI=aU.xml;}}}}aR=aV.videoAdImage;aS=aV.videoAdBeacons;if(aE.one(".js-vertical-video-ad")){var aG=aE.get("clientHeight");var aP=N||aV.videoAdRules&&aV.videoAdRules.viewabilityDefVideo&&parseInt(aV.videoAdRules.viewabilityDefVideo.p,10)||50;if(aG>0){var aF=-1*aG*(aP/100);aE.setData("offset",aF);var aT=aE.one(".js-smad-clip");if(aT){aT.setData("offset",aF);}}}else{if(aE.hasClass("js-stream-ad")){var aL=aE.get("clientHeight");if(aL){aE.setData("offset",-1*aG*0.5);}}}if(aQ){aE.setData("videoUrl",aQ);}if(aI||F){aE.setData("videoXml",aI);if(aS){M.Object.each(aS,function(aX,aW){if(Array.isArray(aX)){aS[aW]=aX;}else{aS[aW]=[aX];}});}}if(aR){aE.setData("imageUrl",aR);}if(aS){aE.setData("videoBeacons",aS);}if(aV.videoAdRules){M.Object.each(aV.videoAdRules,function(aX,aW){if(Array.isArray(aX)){M.Object.each(aX,function(aY){M.Object.each(aY,function(a0,aZ){aY[aZ]=parseInt(a0,10);});});}else{M.Object.each(aX,function(aZ,aY){aX[aY]=parseInt(aZ,10);});}});aE.setData("videoRules",aV.videoAdRules);}if(F&&aQ){aM={clickUrl:aV.link,mediaInfo:aK.mediaInfo};M.Array.each(aM.mediaInfo,function aN(aW){aW.height=parseInt(aW.height,10);aW.width=parseInt(aW.width,10);aW.bitrate=parseInt(aW.bitrate,10);aW.length=parseInt(aW.length,10);});aE.setData("geminiData",aM);}if(aV.videoCfg){aE.setData("video-cfg",aV.videoCfg);}aC.push(aE);aE=null;}}});if(aC&&aC.size()>0){return aC;}}return null;},mapVideoAdAssets:function(aC){var az={VIDEO_PRIMARY:{contentType:"video/mp4",assetName:"videoUrl"},VIDEO_PORTRAIT:{contentType:"video/mp4",assetName:"videoUrl"}};var aG;var aA={};var aF;var aE;var aD;var Y=function(aJ,aH){var aI=new RegExp(aJ);return aI.test(aH.contentType);};var aB=function(aH){return aH.xml;};aC=aC?[].concat(aC):[];aC.forEach(function(aH){var aI=az[aH.usageType];aH.mediaInfo=aH.mediaInfo?[].concat(aH.mediaInfo):[];if(aI){if(aH.mediaInfo.length>1){aD=aH.mediaInfo.filter(aB)||[];if(!aD){aE=aH.mediaInfo.filter(Y.bind(null,aI.contentType))||[];}}else{if(aH.mediaInfo.length===1&&aH.mediaInfo[0].xml){aD=aH.mediaInfo;}else{aE=aH.mediaInfo;}}if(aD){aA.videoXml=aD[0]&&aD[0].xml;}else{aA[aI.assetName]=aE[0]&&aE[0].url;}}});return aA;},_loopVideos:function(aA,Y,aB){var aI=this,az=false,aH,aF,aC,aD,aG;Y=Y||{};aG=Y.playerConf||{};aG.autoplay=false;aF=function aF(aK,aJ){var aL={node:aK,uuid:aK.getData("pkg-video-id")||aK.getData("uuid")},aM=function aM(){var aN;if(aJ===0){aN=aA.getData("pkg-video-id")||aA.getData("uuid");aG.prefetchIds=aN;aD=aI.createPlayerInstance(aL,aG);}else{aL.boss=aD;aI.createPlayerInstance(aL,aG);}};setTimeout(aM,0);};aC=function aC(aJ){if(aI.isNodeInViewport(aJ)){az=true;}aI.queue.push({node:aJ,uuid:aJ.getData("pkg-video-id")||aJ.getData("uuid"),playerConf:aG});};aH=function aH(){if(aB){aB();}};var aE=Y.init?aC:aF;if(aA){aA.each(aE);if(Y.init){if(az){aH();}else{M.one("window").once("scroll",aH);}}else{aH();}aI.attachViewportListeners(aA);}},findStreamVideos:function(aC){var Y=this,aB=Y._normalizePayload(aC),az=Y.getVideoNodes(aB),aA={playerConf:aC.playerConf||{}};if(az){Y._loopVideos(az,aA);}},findDOMVideos:function(){var Y=M.all(".yahoo-view-video,.wafer-video");if(Y.size()>0){this._loopVideos(Y,{});}},findVideosInit:function(aC){var Y=this,aB=Y._normalizePayload(aC),az=Y.getVideoNodes(aB),aA={init:true,playerConf:aC.playerConf||{}};if(af&&Object.keys(af).length>0){keys=Object.keys(af);if(Array.isArray(keys)){keys.forEach(function(aD){var aE=af[aD].playerNode;if(aE&&aE.getDOMNode&&!aE.getDOMNode()){Y.destroyPlayerInstance(aD,true);}});}}if(az){Y._loopVideos(az,aA,function(){if(Y.queue.length>0){Y.initPlayerJs(Y.playerInitCallback);}});}},activeVideosInit:function(){var Y=this;if(!window.VEX){return;}if(ac!=="ready"){Y.initPlayerJs(M.bind(Y.videoModeInstancesInit,Y));}else{Y.videoModeInstancesInit();}},videoModeInstancesInit:function(){var Y=this;var aB;var az=[];var aA;if(!window.VEX){return;}M.Array.each(window.VEX.VideoModeInstances,function(aC){aB=aC&&aC.getPlayerInfos&&aC.getPlayerInfos();if(aB){aA=M.one(payload.node);aB.playerNode=aA;aB.is_playing=aB.config&&aB.config.autoplay;az.push(aB);}});if(az.length>0){Y.addRemoteVideoInstance(az);}},handleAddRemoteVideo:function T(aA){var Y=this;var az=Array.isArray(aA)?aA:[aA];Y.addRemoteVideoInstances(az);},handlePreventNewPlayback:function Z(az){var Y=this;aq=!!az;if(!az&&A.player){if(Y.isPlayable()&&af[A.player]){Y._playVideo(af[A.player]);A.player=false;}if(A.player&&!af[A.player]){A.player=false;}}},removeRemoteVideo:function P(aC){var Y=this;var az=aC&&aC.guid;var aB;var aA;if(az&&az in af&&af[az]){aA=M.Array.indexOf(X,az);aB=af[az];aB=null;delete af[az];X.splice(aA,1);}},addRemoteVideoInstances:function ad(aC){var Y=this;var aB;var aA=new M.NodeList();var az;if(Array.isArray(aC)&&aC.length>0){M.Array.each(aC,function(aD){if(aD){aB=M.one(aD.playerNode);az=aB.generateID();Y._addPlayerToMap({guid:az,player:aD.instance,playerNode:aB,is_destroyable:false,is_playing:aD._is_playing,eventSubscriptions:{playerErrors:false}});Y.attachVideoListeners(aD.instance,null,az);aA.push(aB);}});}if(aA.size()>0){Y.attachViewportListeners(aA);}},attachViewportListeners:function(az){var Y=this;k.push(az.on("viewenter",Y.handleViewEnter,Y));k.push(az.on("viewleave",Y.handleViewLeave,Y));},attachVideoListeners:function(aR,aL,aO){var aN=this,aA=aN.getVpAPI(),aP,aK,aS,aT,aJ=aL&&aL.getData("videoBeacons"),aD=aJ||false,aF=af[aO],aU=(aF&&aF.fireBeacons)||{},az=aL&&aL.getData("playlist"),aQ=aL&&aL.getData("meta"),aG=(aF&&aF.videoCfg)||{},aI=0,aH;if(aA&&af&&af[aO]){aH=af[aO].eventSubscriptions||{};aR.on(aA.UI_INTERACT,function Y(aW){var aV=aW&&aW.srcElement&&aW.srcElement.toLowerCase();if(p){aR.controls.setLoop(false);}if(af&&af[aO]){af[aO].has_interacted=true;}if(aV&&aV==="ctrl-mute-btn-off"){aN.volumeHandler(aO);}if(I&&aN.fullscreen){aN.fullscreenHandler(aV);}});aK=function(){if(af&&af[aO]){af[aO].is_playing=false;}var aW=af[aO].playerNode;var aV=aW.one(".js-cstm-end-screen");if(!aV){aV=aW.previous(".js-cstm-end-screen");if(aV){aV.remove();aW.insert(aV,af[aO].playerNode.one(".yvp-bottom-bar"));}}if(aV){aV.removeClass(H);}if(r){aN.playOtherVideos(aO);}};if(aH.playerErrors!==false){aP=function aP(){D[aO]=true;if(aD&&aL.getData("videoXml")){aN.destroyPlayerInstance(aO,true);}if(aL.getData("playlist")){aN.destroyPlayerInstance(aO,true);if(M.one("#applet_sidekicktv")){M.one("#applet_sidekicktv").addClass("D-n");}if(M.one("#my-adsLREC2-fallback")){M.one("#my-adsLREC2-fallback").removeClass("D-n");}}if(aL.one(".static-image-anchor")){aL.one(".static-image-anchor").removeClass("D-n");}if(aG.destroyOnError===true){aN.destroyPlayerInstance(aO,true);}};aR.on(aA.PLAYBACK_ERROR,aP);aR.on(aA.PLAYER_ERROR,aP);aS=aR.on(aA.PLAYBACK_TIMEOUT,aP);}aR.on(aA.AD_PLAYBACK_START,function aC(){var aV=af[aO].playerNode.one(".js-cstm-end-screen");if(aV){aV.addClass(H);}});aR.on(aA.PLAYER_FULLSCREEN_CHANGE,function aE(aV){af[aO].is_fullscreen=aV;});aR.on(aA.PLAYBACK_START,function aB(){var aW=!af[aO].has_interacted&&p&&G&&(af[aO].loopCount<G);if(aW){af[aO].loopCount++;if(af[aO].loopCount===G){aR.controls.setLoop(false);}}var aV=af[aO].playerNode.one(".js-cstm-end-screen");if(aV){aV.addClass(H);}if(aD){if(aL.getData("videoXml")){aU={VIDEO_START:true,VIDEO_QUARTILE_100:true,VIDEO_VIEW:true,VIDEO_30_SEC:true,VIDEO_QUARTILE_25:true,VIDEO_QUARTILE_50:true,VIDEO_QUARTILE_75:true};}aN.fireAdBeacon("VIDEO_START",aJ,aU);}if(aS){aS();}});if(az){az=M.JSON.parse(az);aQ=M.JSON.parse(aQ);aR.on(aA.PLAYLIST_POSITION_CHANGE,function aM(aW){var aV;if(aW<az.length&&aW>=0&&aQ[az[aW].id]){aV=aQ[az[aW].id];aI=aW;aL.one(".js-stv-title").setContent(aV.title);aL.one(".js-stv-provider").setContent(aV.providerName);}});}aR.on(aA.PLAYLIST_COMPLETE,function(){aK();if(aD){aN.fireAdBeacon("VIDEO_QUARTILE_100",aJ,aU);aU={};}});if(aD){aR.on(aA.PLAYBACK_TIME_UPDATE,function(aW,aV,aX){if(aV>3&&!aU.VIDEO_VIEW){aN.fireAdBeacon("VIDEO_VIEW",aJ,aU);}if(aV>30&&!aU.VIDEO_30_SEC){aN.fireAdBeacon("VIDEO_30_SEC",aJ,aU);}if(aV>aX*0.25&&!aU.VIDEO_QUARTILE_25){aN.fireAdBeacon("VIDEO_QUARTILE_25",aJ,aU);}if(aV>aX*0.5&&!aU.VIDEO_QUARTILE_50){aN.fireAdBeacon("VIDEO_QUARTILE_50",aJ,aU);}if(aV>aX*0.75&&!aU.VIDEO_QUARTILE_75){aN.fireAdBeacon("VIDEO_QUARTILE_75",aJ,aU);}});}}},fireAdBeacon:function(aA,Y,aC){var aD;var aB;var az;if(!aA||aC[aA]||F){return;}aD=Y&&Y[aA];if(!aD){return;}aD=[].concat(aD);for(aB=0;aB<aD.length;aB++){az=aD[aB];if(!az){continue;}M.Af.Beacon.send(az);aC[aA]=true;}},playerInitCallback:function(){var aA=this,az=aA.queue,Y=az&&az.length||0,aC=a,aB,aE,aD;if(Y!==0){aA.setUltParams(az[0]);}for(aB=0;aB<Y;aB++){aE=az[aB];aD=aE.playerConf||{};if(aE.node.inViewportRegion()){aD.autoplay=aC;aA.createPlayerInstance(aE,aD);if(r){aC=false;}}else{aD.autoplay=false;aA.createPlayerInstance(aE,aD);}}aA.queue=[];},getVpAPI:function(){var Y=this;if(!Y.vpAPI){Y.vpAPI=YAHOO&&YAHOO.VideoPlatform&&YAHOO.VideoPlatform.API_Events;}return Y.vpAPI;},setUltParams:function(aE){var az=this,Y=aE&&aE.node,aD=Y.ancestor("[data-i13n-sec]"),aB=Y&&Y.one(".js-video-content"),aA=aB&&aB.getData("ylk"),aC=/;?ccode:(.[^;]+);/i,aF;h=aD&&aD.getData("i13n-sec")||"";if(aA){aF=aA.match(aC);z=(aF&&aF[1])||"";}},isPlayable:function(){var Y=a;if(r){M.Array.each(X,function(aB){var aD=af[aB]&&af[aB].playerNode;var aA=false;if(aD){aA=t.some(function aC(aE){return aD.hasClass(aE);});aA=aA||w.some(function az(aE){return aD.ancestor("."+aE);});}if(aD&&!D[aB]&&aA&&(af[aB].is_playing===true)){Y=false;}});}return Y;},updatePlayBtn:function(az){var Y;Y=az&&az.playerNode&&az.playerNode.one(b.customControls+" ."+b.btnPlayPause);if(I&&Y){if(az.is_playing&&!Y.hasClass(b.statePlaying)){Y.addClass(b.statePlaying);}else{if(!az.is_playing&&Y.hasClass(b.statePlaying)){Y.removeClass(b.statePlaying);}}}},volumeHandler:function(az){var Y=this,aA,aC,aB;if(Y.unmutedVP&&az!==Y.unmutedVP){if(af&&af[Y.unmutedVP]){aC=af[Y.unmutedVP];aA=aC.player;aB=aC.playerNode;aA.controls.setMute(true);if(!aB.inViewportRegion()){aA.controls.pause(true);aC.is_playing=false;Y.updatePlayBtn(aC);}aC.has_interacted=false;}}Y.unmutedVP=az;},_updateVideoConfigWithRapidInstance:function(aA,aD){var aE=aD.ancestor("[data-i13n-sec]");var aC=aE&&aE.getData("i13n-sec")||"";var az={};var aB={};var Y=aD.one(ar);if(Y){az=M.Af.rapid.parseYLK(Y);}aA.sec=aA.sec||aC;aA.ccode=aA.ccode||az.ccode||"";aA.cpos=aA.cpos||az.cpos||"";az.sec=aC;aB._rid=M.Object.getValue(window.rapidPageConfig,["rapidConfig","keys","_rid"])||"";aA.rapidConfig={rapid:window.rapidInstance,clickParams:az,pageParams:aB};return aA;}};if(u){M.VideoManager.init();}},"0.0.1",{requires:["af-content","af-event","base","event-custom","event-viewenter","node-core"]});YUI.add("event-viewenter",function(e,c){var a="inviewport",f=e.Object.getValue(YUI,["Env","My","settings","context"]),d=f.videoplayerScrollThrottle&&parseInt(f.videoplayerScrollThrottle,10)||0,b={_checkNode:function(h,p,o){var j,n,m=p.handle.evt.type,g,i,k;h=e.one(h);g=h.getData("timer"+m);if(g){clearTimeout(g);}i=function l(){k=parseInt(h.getData("offset"),10)||-85;j=o.isNodeOnscreen(h,k);n=h.getData(a);if((m==="viewenter"&&j&&!n)||(m==="viewleave"&&!j&&n)){p.fire({target:h});h.setData(a,j);}};if(d){g=setTimeout(i,d);h.setData("timer"+m,g);}else{i();}},_notify:function(k,j,i,h){var g=j.handle.evt.type;if(g==="viewenter"||g==="viewleave"){h._checkNode(i,j,this);}else{j.fire({target:i});}},_filterNotify:function(o,m,k,l){var h,g,n,j=m.handle.evt.type;n=e.Selector.query(k||"*");for(h=0,g=n.length;h<g;h++){if(j==="viewenter"||j==="viewleave"){l._checkNode(n[h],m,this);}else{m.fire({target:n[h]});}}},_bind:function(k,h,j,g){var i,l,m,n;m=g||k;n=g?this._filterNotify:this._notify;if(this.type==="viewenter"||this.type==="viewleave"){i="scroll";l=e.one("body");}else{i=this.type;l=k;}l.plug(e.Plugin.ScrollInfo);l.scrollInfo.set("scrollDelay",25);h.handle=l.scrollInfo.on(i,n,null,j,m,this);},on:function(i,g,h){return this._bind(i,g,h);},delegate:function(j,h,i,g){return this._bind(j,h,i,g);},detach:function(h,g){g.handle.detach();},detachDelegate:function(h,g){g.handle.detach();}};e.Event.define("viewenter",b,true);e.Event.define("viewleave",b,true);e.Event.define("scrollToBottom",b,true);e.Event.define("scrollToTop",b,true);e.Event.define("scrollToLeft",b,true);e.Event.define("scrollToRight",b,true);},"1.0.0",{requires:["event-synthetic","node-scroll-info"]});/* Copyright (c) 2018, Yahoo! Inc.  All rights reserved. */
