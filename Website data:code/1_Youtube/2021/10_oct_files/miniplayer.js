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

(function(g){var window=this;'use strict';var B6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.qe=!1;this.player=a;this.T(a,"minimized",this.yg);this.T(a,"onStateChange",this.yG)},C6=function(a){g.WM.call(this,a);
this.i=new B6(this.player);this.i.hide();g.JM(this.player,this.i.element,4);a.Le()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(B6,g.W);g.k=B6.prototype;
g.k.uE=function(){this.tooltip=new g.wQ(this.player,this);g.I(this,this.tooltip);g.JM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.uc=new g.PN(this.player);g.I(this,this.uc);this.Dg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Dg);this.Dg.Da(this.element);this.T(this.Dg.element,"click",this.mA);var a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.QK()]});g.I(this,a);a.Da(this.Dg.element);this.T(a.element,"click",this.Di);
a=new g.V1(this.player,this);g.I(this,a);a.Da(this.Dg.element);this.yp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.yp);this.yp.Da(this.Dg.element);this.T(this.yp.element,"click",this.mA);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Da(this.yp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Da(this.yp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Da(this.yp.element);this.hN=new g.nP(this.player,
this,!1);g.I(this,this.hN);this.hN.Da(b.element);b=new g.lP(this.player,this);g.I(this,b);b.Da(a.element);this.nextButton=new g.nP(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Da(c.element);this.Gg=new g.hQ(this.player,this);g.I(this,this.Gg);this.Gg.Da(this.Dg.element);this.Fc=new g.uP(this.player,this);g.I(this,this.Fc);g.JM(this.player,this.Fc.element,4);this.aA=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.aA);g.JM(this.player,this.aA.element,4);a=new g.W({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.QK()]});g.I(this,a);a.Da(this.aA.element);this.T(a.element,"click",this.Di);a=new g.W({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.VK()]});g.I(this,a);a.Da(this.aA.element);this.T(a.element,"click",this.wV);this.T(this.player,"presentingplayerstatechange",this.Mc);this.T(this.player,"appresize",this.wb);this.T(this.player,"fullscreentoggled",this.wb);this.wb()};
g.k.show=function(){this.Jd=new g.Hq(this.nq,null,this);this.Jd.start();this.qe||(this.uE(),this.qe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Fc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Jd&&(this.Jd.dispose(),this.Jd=void 0);g.W.prototype.hide.call(this);this.player.Le()||(this.qe&&this.Fc.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.Jd&&(this.Jd.dispose(),this.Jd=void 0);g.W.prototype.xa.call(this)};
g.k.Di=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.wV=function(){this.player.playVideo()};
g.k.mA=function(a){if(a.target===this.Dg.element||a.target===this.yp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.TJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.yg=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Le())};
g.k.md=function(){this.Fc.Wb();this.Gg.Wb()};
g.k.nq=function(){this.md();this.Jd&&this.Jd.start()};
g.k.Mc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.wb=function(){g.HP(this.Fc,0,this.player.bb().getPlayerSize().width,!1);g.vP(this.Fc)};
g.k.yG=function(a){this.player.Le()&&(0===a?this.hide():this.show())};
g.k.dc=function(){return this.tooltip};
g.k.Te=function(){return!1};
g.k.tf=function(){return!1};
g.k.xi=function(){return!1};
g.k.ZA=function(){};
g.k.dn=function(){};
g.k.Yr=function(){};
g.k.Dn=function(){return null};
g.k.jj=function(){return new g.Ol(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.xq=function(a,b,c,d,e){var f=0,h=d=0,l=g.fm(a);if(b){c=g.Sq(b,"ytp-prev-button")||g.Sq(b,"ytp-next-button");var m=g.Sq(b,"ytp-play-button"),n=g.Sq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.dm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Sq(b,"ytp-miniplayer-button-top-left"),f=g.dm(b,this.element),b=g.fm(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.bb().getPlayerSize().width;e=f+(e||0);l=g.dg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.al=function(){};
g.k.Bk=function(){return!1};g.w(C6,g.WM);C6.prototype.create=function(){};
C6.prototype.Ki=function(){return!1};
C6.prototype.load=function(){this.player.hideControls();this.i.show()};
C6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.VM("miniplayer",C6);})(_yt_player);


}
/*
     FILE ARCHIVED ON 02:12:34 Nov 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:08 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 182.975
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.075
  esindex: 0.01
  LoadShardBlock: 86.877 (3)
  PetaboxLoader3.datanode: 87.208 (4)
  load_resource: 64.644
  PetaboxLoader3.resolve: 31.977
*/