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

(function(g){var window=this;'use strict';var B1a=function(a){g.X.call(this,{F:"div",L:"ytp-miniplayer-ui"});this.Qe=!1;this.player=a;this.P(a,"minimized",this.Kg);this.P(a,"onStateChange",this.fK)},V6=function(a){g.jM.call(this,a);
this.j=new B1a(this.player);this.j.hide();g.IL(this.player,this.j.element,4);a.rf()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0),this.player.S().K("web_rounded_containers")&&g.N(a.getRootNode(),"ytp-rounded-miniplayer",!0))};
g.w(B1a,g.X);g.k=B1a.prototype;
g.k.CH=function(){this.tooltip=new g.iQ(this.player,this);g.M(this,this.tooltip);g.IL(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Cc=new g.eN(this.player);g.M(this,this.Cc);this.Nh=new g.X({F:"div",L:"ytp-miniplayer-scrim"});g.M(this,this.Nh);this.Nh.xa(this.element);this.P(this.Nh.element,"click",this.VC);var a=new g.X({F:"button",Ca:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.BJ()]});g.M(this,a);a.xa(this.Nh.element);this.P(a.element,"click",this.Qj);
a=new g.Z1(this.player,this);g.M(this,a);a.xa(this.Nh.element);this.jr=new g.X({F:"div",L:"ytp-miniplayer-controls"});g.M(this,this.jr);this.jr.xa(this.Nh.element);this.P(this.jr.element,"click",this.VC);var b=new g.X({F:"div",L:"ytp-miniplayer-button-container"});g.M(this,b);b.xa(this.jr.element);a=new g.X({F:"div",L:"ytp-miniplayer-play-button-container"});g.M(this,a);a.xa(this.jr.element);var c=new g.X({F:"div",L:"ytp-miniplayer-button-container"});g.M(this,c);c.xa(this.jr.element);this.cR=new g.GO(this.player,
this,!1);g.M(this,this.cR);this.cR.xa(b.element);b=new g.EO(this.player,this);g.M(this,b);b.xa(a.element);this.nextButton=new g.GO(this.player,this,!0);g.M(this,this.nextButton);this.nextButton.xa(c.element);this.Ph=new g.VP(this.player,this);g.M(this,this.Ph);this.Ph.xa(this.Nh.element);this.vc=new g.RO(this.player,this);g.M(this,this.vc);g.IL(this.player,this.vc.element,4);this.LC=new g.X({F:"div",L:"ytp-miniplayer-buttons"});g.M(this,this.LC);g.IL(this.player,this.LC.element,4);a=new g.X({F:"button",
Ca:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.BJ()]});g.M(this,a);a.xa(this.LC.element);this.P(a.element,"click",this.Qj);a=new g.X({F:"button",Ca:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.HJ()]});g.M(this,a);a.xa(this.LC.element);this.P(a.element,"click",this.x0);this.P(this.player,"presentingplayerstatechange",this.bd);this.P(this.player,"appresize",this.wb);this.P(this.player,"fullscreentoggled",this.wb);this.wb()};
g.k.show=function(){this.pe=new g.Tn(this.us,null,this);this.pe.start();this.Qe||(this.CH(),this.Qe=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.vc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.pe&&(this.pe.dispose(),this.pe=void 0);g.X.prototype.hide.call(this);this.player.rf()||(this.Qe&&this.vc.hide(),this.player.loadModule("annotations_module"))};
g.k.ea=function(){this.pe&&(this.pe.dispose(),this.pe=void 0);g.X.prototype.ea.call(this)};
g.k.Qj=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.k.x0=function(){this.player.playVideo()};
g.k.VC=function(a){if(a.target===this.Nh.element||a.target===this.jr.element)this.player.S().K("kevlar_miniplayer_play_pause_on_scrim")?g.DI(this.player.yb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.k.Kg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.rf())};
g.k.Pd=function(){this.vc.Vb();this.Ph.Vb()};
g.k.us=function(){this.Pd();this.pe&&this.pe.start()};
g.k.bd=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.wb=function(){g.gP(this.vc,0,this.player.Ya().getPlayerSize().width,!1);g.UO(this.vc)};
g.k.fK=function(a){this.player.rf()&&(0===a?this.hide():this.show())};
g.k.hc=function(){return this.tooltip};
g.k.If=function(){return!1};
g.k.pg=function(){return!1};
g.k.Iy=function(){return!1};
g.k.Ij=function(){return!1};
g.k.Mz=function(){};
g.k.ep=function(){};
g.k.Du=function(){};
g.k.Ap=function(){return null};
g.k.ly=function(){return null};
g.k.Hj=function(){return new g.nl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Es=function(a,b,c,d,e){var f=0,h=d=0,l=g.Bl(a);if(b){c=g.bo(b,"ytp-prev-button")||g.bo(b,"ytp-next-button");var m=g.bo(b,"ytp-play-button"),n=g.bo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.zl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.bo(b,"ytp-miniplayer-button-top-left"),f=g.zl(b,this.element),b=g.Bl(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ya().getPlayerSize().width;e=f+(e||0);l=g.qg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Mm=function(){};
g.k.Zl=function(){return!1};
g.k.Nz=function(){};g.w(V6,g.jM);V6.prototype.create=function(){};
V6.prototype.nj=function(){return!1};
V6.prototype.load=function(){this.player.hideControls();this.j.show()};
V6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.iM("miniplayer",V6);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:11:56 Jul 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:26:19 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 119.328
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.058
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 67.33 (3)
  PetaboxLoader3.datanode: 75.19 (5)
  load_resource: 129.931 (2)
  PetaboxLoader3.resolve: 95.535 (2)
*/