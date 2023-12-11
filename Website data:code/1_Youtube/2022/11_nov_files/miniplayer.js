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

(function(g){var window=this;'use strict';var V8a=function(a){g.X.call(this,{F:"div",K:"ytp-miniplayer-ui"});this.yf=!1;this.player=a;this.S(a,"minimized",this.oh);this.S(a,"onStateChange",this.NL)},W8a=function(a){g.NO.call(this,a);
this.u=new g.mE(this);this.j=new V8a(this.player);this.j.hide();g.hO(this.player,this.j.element,4);a.Gf()&&(this.load(),g.mo(a.getRootNode(),"ytp-player-minimized",!0));this.player.N("web_rounded_containers")&&g.mo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(V8a,g.X);g.k=V8a.prototype;
g.k.aJ=function(){this.tooltip=new g.OS(this.player,this);g.M(this,this.tooltip);g.hO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Hc=new g.GP(this.player);g.M(this,this.Hc);this.Ci=new g.X({F:"div",K:"ytp-miniplayer-scrim"});g.M(this,this.Ci);this.Ci.Ca(this.element);this.S(this.Ci.element,"click",this.nE);var a=new g.X({F:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.EL()]});g.M(this,a);a.Ca(this.Ci.element);this.S(a.element,"click",this.Kn);
a=new g.J2(this.player,this);g.M(this,a);a.Ca(this.Ci.element);this.Ms=new g.X({F:"div",K:"ytp-miniplayer-controls"});g.M(this,this.Ms);this.Ms.Ca(this.Ci.element);this.S(this.Ms.element,"click",this.nE);var b=new g.X({F:"div",K:"ytp-miniplayer-button-container"});g.M(this,b);b.Ca(this.Ms.element);a=new g.X({F:"div",K:"ytp-miniplayer-play-button-container"});g.M(this,a);a.Ca(this.Ms.element);var c=new g.X({F:"div",K:"ytp-miniplayer-button-container"});g.M(this,c);c.Ca(this.Ms.element);this.GS=new g.iR(this.player,
this,!1);g.M(this,this.GS);this.GS.Ca(b.element);b=new g.gR(this.player,this);g.M(this,b);b.Ca(a.element);this.nextButton=new g.iR(this.player,this,!0);g.M(this,this.nextButton);this.nextButton.Ca(c.element);this.Fi=new g.AS(this.player,this);g.M(this,this.Fi);this.Fi.Ca(this.Ci.element);this.Ac=new g.tR(this.player,this);g.M(this,this.Ac);g.hO(this.player,this.Ac.element,4);this.dE=new g.X({F:"div",K:"ytp-miniplayer-buttons"});g.M(this,this.dE);g.hO(this.player,this.dE.element,4);a=new g.X({F:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.EL()]});g.M(this,a);a.Ca(this.dE.element);this.S(a.element,"click",this.Kn);a=new g.X({F:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.LL()]});g.M(this,a);a.Ca(this.dE.element);this.S(a.element,"click",this.H1);this.S(this.player,"presentingplayerstatechange",this.Uc);this.S(this.player,"appresize",this.Ab);this.S(this.player,"fullscreentoggled",this.Ab);this.Ab()};
g.k.show=function(){this.Ke=new g.Vn(this.Ht,null,this);this.Ke.start();this.yf||(this.aJ(),this.yf=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Ac.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ke&&(this.Ke.dispose(),this.Ke=void 0);g.X.prototype.hide.call(this);this.player.Gf()||(this.yf&&this.Ac.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Ke&&(this.Ke.dispose(),this.Ke=void 0);g.X.prototype.ra.call(this)};
g.k.Kn=function(){this.player.stopVideo();this.player.Qa("onCloseMiniplayer")};
g.k.H1=function(){this.player.playVideo()};
g.k.nE=function(a){if(a.target===this.Ci.element||a.target===this.Ms.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.AK(this.player.Eb())?this.player.pauseVideo():this.player.playVideo():this.player.Qa("onExpandMiniplayer")};
g.k.oh=function(){g.mo(this.player.getRootNode(),"ytp-player-minimized",this.player.Gf())};
g.k.me=function(){this.Ac.hc();this.Fi.hc()};
g.k.Ht=function(){this.me();this.Ke&&this.Ke.start()};
g.k.Uc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Ab=function(){g.MR(this.Ac,0,this.player.fb().getPlayerSize().width,!1);g.wR(this.Ac)};
g.k.NL=function(a){this.player.Gf()&&(0===a?this.hide():this.show())};
g.k.xc=function(){return this.tooltip};
g.k.Ff=function(){return!1};
g.k.xg=function(){return!1};
g.k.Dj=function(){return!1};
g.k.Ek=function(){return!1};
g.k.ze=function(){return!1};
g.k.fB=function(){};
g.k.Io=function(){};
g.k.hw=function(){};
g.k.Hl=function(){return null};
g.k.eD=function(){return null};
g.k.Lz=function(){return null};
g.k.Aj=function(){return new g.xl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Rt=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ll(a);if(b){c=g.eo(b,"ytp-prev-button")||g.eo(b,"ytp-next-button");var m=g.eo(b,"ytp-play-button"),n=g.eo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Jl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.eo(b,"ytp-miniplayer-button-top-left"),f=g.Jl(b,this.element),b=g.Ll(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.qg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Vn=function(){};
g.k.zk=function(){return!1};
g.k.gB=function(){};
g.k.xx=function(){};
g.k.Bp=function(){};
g.k.nC=function(){};
g.k.nq=function(){};g.v(W8a,g.NO);g.k=W8a.prototype;g.k.onVideoDataChange=function(){if(this.player.N("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.mo(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.NO.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Rj=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.MO("miniplayer",W8a);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:01:26 Nov 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:43:35 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1431.334
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.056
  esindex: 0.009
  LoadShardBlock: 1354.365 (3)
  PetaboxLoader3.datanode: 1348.202 (4)
  load_resource: 1484.083
  PetaboxLoader3.resolve: 1379.054
*/