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

(function(g){var window=this;'use strict';var $ab=function(a){g.V.call(this,{F:"div",K:"ytp-miniplayer-ui"});this.Cf=!1;this.player=a;this.S(a,"minimized",this.oh);this.S(a,"onStateChange",this.oM)},abb=function(a){g.VP.call(this,a);
this.u=new g.iF(this);this.j=new $ab(this.player);this.j.hide();g.mP(this.player,this.j.element,4);a.Nf()&&(this.load(),g.ro(a.getRootNode(),"ytp-player-minimized",!0));this.player.N("web_rounded_containers")&&g.ro(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v($ab,g.V);g.k=$ab.prototype;
g.k.BJ=function(){this.tooltip=new g.WT(this.player,this);g.E(this,this.tooltip);g.mP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Jc=new g.OQ(this.player);g.E(this,this.Jc);this.Fi=new g.V({F:"div",K:"ytp-miniplayer-scrim"});g.E(this,this.Fi);this.Fi.Ca(this.element);this.S(this.Fi.element,"click",this.EE);var a=new g.V({F:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.GM()]});g.E(this,a);a.Ca(this.Fi.element);this.S(a.element,"click",this.Nn);
a=new g.z2(this.player,this);g.E(this,a);a.Ca(this.Fi.element);this.Ss=new g.V({F:"div",K:"ytp-miniplayer-controls"});g.E(this,this.Ss);this.Ss.Ca(this.Fi.element);this.S(this.Ss.element,"click",this.EE);var b=new g.V({F:"div",K:"ytp-miniplayer-button-container"});g.E(this,b);b.Ca(this.Ss.element);a=new g.V({F:"div",K:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Ca(this.Ss.element);var c=new g.V({F:"div",K:"ytp-miniplayer-button-container"});g.E(this,c);c.Ca(this.Ss.element);this.pT=new g.qS(this.player,
this,!1);g.E(this,this.pT);this.pT.Ca(b.element);b=new g.oS(this.player,this);g.E(this,b);b.Ca(a.element);this.nextButton=new g.qS(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Ca(c.element);this.Ii=new g.JT(this.player,this);g.E(this,this.Ii);this.Ii.Ca(this.Fi.element);this.Dc=new g.BS(this.player,this);g.E(this,this.Dc);g.mP(this.player,this.Dc.element,4);this.tE=new g.V({F:"div",K:"ytp-miniplayer-buttons"});g.E(this,this.tE);g.mP(this.player,this.tE.element,4);a=new g.V({F:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.GM()]});g.E(this,a);a.Ca(this.tE.element);this.S(a.element,"click",this.Nn);a=new g.V({F:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.NM()]});g.E(this,a);a.Ca(this.tE.element);this.S(a.element,"click",this.G2);this.S(this.player,"presentingplayerstatechange",this.Vc);this.S(this.player,"appresize",this.Bb);this.S(this.player,"fullscreentoggled",this.Bb);this.Bb()};
g.k.show=function(){this.Ne=new g.co(this.Qt,null,this);this.Ne.start();this.Cf||(this.BJ(),this.Cf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Dc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ne&&(this.Ne.dispose(),this.Ne=void 0);g.V.prototype.hide.call(this);this.player.Nf()||(this.Cf&&this.Dc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Ne&&(this.Ne.dispose(),this.Ne=void 0);g.V.prototype.ra.call(this)};
g.k.Nn=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.G2=function(){this.player.playVideo()};
g.k.EE=function(a){if(a.target===this.Fi.element||a.target===this.Ss.element)g.wL(this.player.Eb())?this.player.pauseVideo():this.player.playVideo()};
g.k.oh=function(){g.ro(this.player.getRootNode(),"ytp-player-minimized",this.player.Nf())};
g.k.qe=function(){this.Dc.kc();this.Ii.kc()};
g.k.Qt=function(){this.qe();this.Ne&&this.Ne.start()};
g.k.Vc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Bb=function(){g.US(this.Dc,0,this.player.fb().getPlayerSize().width,!1);g.ES(this.Dc)};
g.k.oM=function(a){this.player.Nf()&&(0===a?this.hide():this.show())};
g.k.yc=function(){return this.tooltip};
g.k.Mf=function(){return!1};
g.k.Fg=function(){return!1};
g.k.Ij=function(){return!1};
g.k.Ik=function(){return!1};
g.k.Ce=function(){return!1};
g.k.oB=function(){};
g.k.Mo=function(){};
g.k.xw=function(){};
g.k.Jl=function(){return null};
g.k.oD=function(){return null};
g.k.Pz=function(){return null};
g.k.Dj=function(){return new g.Dl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.au=function(a,b,c,d,e){var f=0,h=d=0,l=g.Rl(a);if(b){c=g.mo(b,"ytp-prev-button")||g.mo(b,"ytp-next-button");var m=g.mo(b,"ytp-play-button"),n=g.mo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Pl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.mo(b,"ytp-miniplayer-button-top-left"),f=g.Pl(b,this.element),b=g.Rl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.ne(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Xn=function(){};
g.k.Ek=function(){return!1};
g.k.pB=function(){};
g.k.Bx=function(){};
g.k.Ip=function(){};
g.k.wC=function(){};
g.k.uq=function(){};g.v(abb,g.VP);g.k=abb.prototype;g.k.onVideoDataChange=function(){if(this.player.N("web_rounded_containers")&&this.player.getVideoData()){var a=16/9;a=this.player.getVideoAspectRatio()>a+.1;g.ro(this.player.getRootNode(),"ytp-rounded-miniplayer-extra-wide-video",a)}};
g.k.create=function(){g.VP.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Uj=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.UP("miniplayer",abb);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:00:32 Dec 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:44:03 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 123.278
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.057
  cdx.remote: 0.057
  esindex: 0.01
  LoadShardBlock: 89.0 (3)
  PetaboxLoader3.datanode: 124.766 (5)
  load_resource: 133.558 (2)
  PetaboxLoader3.resolve: 69.57 (2)
*/