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

(function(g){var window=this;'use strict';var A6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.og=!1;this.player=a;this.S(a,"minimized",this.vg);this.S(a,"onStateChange",this.eF)},B6=function(a){g.iN.call(this,a);
this.i=new A6(this.player);this.i.hide();g.WM(this.player,this.i.element,4);a.Fe()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(A6,g.W);g.k=A6.prototype;
g.k.pD=function(){this.tooltip=new g.IQ(this.player,this);g.J(this,this.tooltip);g.WM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.qc=new g.dO(this.player);g.J(this,this.qc);this.Ag=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Ag);this.Ag.Ea(this.element);this.S(this.Ag.element,"click",this.pz);var a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},T:[g.gL()]});g.J(this,a);a.Ea(this.Ag.element);this.S(a.element,"click",this.Bi);
a=new g.V1(this.player,this);g.J(this,a);a.Ea(this.Ag.element);this.hp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.J(this,this.hp);this.hp.Ea(this.Ag.element);this.S(this.hp.element,"click",this.pz);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.Ea(this.hp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ea(this.hp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.Ea(this.hp.element);this.CL=new g.DP(this.player,
this,!1);g.J(this,this.CL);this.CL.Ea(b.element);b=new g.yP(this.player,this);g.J(this,b);b.Ea(a.element);this.nextButton=new g.DP(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ea(c.element);this.Dg=new g.vQ(this.player,this);g.J(this,this.Dg);this.Dg.Ea(this.Ag.element);this.Mc=new g.JP(this.player,this);g.J(this,this.Mc);g.WM(this.player,this.Mc.element,4);this.bz=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.bz);g.WM(this.player,this.bz.element,4);a=new g.W({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},T:[g.gL()]});g.J(this,a);a.Ea(this.bz.element);this.S(a.element,"click",this.Bi);a=new g.W({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},T:[g.lL()]});g.J(this,a);a.Ea(this.bz.element);this.S(a.element,"click",this.qU);this.S(this.player,"presentingplayerstatechange",this.Kc);this.S(this.player,"appresize",this.xb);this.S(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Bd=new g.zq(this.Vp,null,this);this.Bd.start();this.og||(this.pD(),this.og=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Mc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Bd&&(this.Bd.dispose(),this.Bd=void 0);g.W.prototype.hide.call(this);this.player.Fe()||(this.og&&this.Mc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Bd&&(this.Bd.dispose(),this.Bd=void 0);g.W.prototype.ya.call(this)};
g.k.Bi=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.qU=function(){this.player.playVideo()};
g.k.pz=function(a){if(a.target===this.Ag.element||a.target===this.hp.element)g.T(this.player.U().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.jK(this.player.vb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.vg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.Fe())};
g.k.kd=function(){this.Mc.Ob();this.Dg.Ob()};
g.k.Vp=function(){this.kd();this.Bd&&this.Bd.start()};
g.k.Kc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.VP(this.Mc,0,this.player.eb().getPlayerSize().width,!1);g.KP(this.Mc)};
g.k.eF=function(a){this.player.Fe()&&(0===a?this.hide():this.show())};
g.k.hc=function(){return this.tooltip};
g.k.Oe=function(){return!1};
g.k.kf=function(){return!1};
g.k.ri=function(){return!1};
g.k.Xz=function(){};
g.k.Pm=function(){};
g.k.zr=function(){};
g.k.jn=function(){return null};
g.k.gj=function(){return new g.Fl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.cq=function(a,b,c,d,e){var f=0,h=d=0,l=g.am(a);if(b){c=g.Jq(b,"ytp-prev-button")||g.Jq(b,"ytp-next-button");var m=g.Jq(b,"ytp-play-button"),n=g.Jq(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Zl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Jq(b,"ytp-miniplayer-button-top-left"),f=g.Zl(b,this.element),b=g.am(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.Rf(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Rk=function(){};
g.k.vk=function(){return!1};g.w(B6,g.iN);B6.prototype.create=function(){};
B6.prototype.Ii=function(){return!1};
B6.prototype.load=function(){this.player.hideControls();this.i.show()};
B6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.tN.miniplayer=B6;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:56:45 Aug 31, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:33 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 109.133
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 80.422 (3)
  PetaboxLoader3.datanode: 87.746 (4)
  load_resource: 77.285
  PetaboxLoader3.resolve: 48.709
*/