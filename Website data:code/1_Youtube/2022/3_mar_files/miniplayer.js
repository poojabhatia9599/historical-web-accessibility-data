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

(function(g){var window=this;'use strict';var V5=function(a){g.V.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.ue=!1;this.player=a;this.T(a,"minimized",this.hg);this.T(a,"onStateChange",this.bI)},W5=function(a){g.sM.call(this,a);
this.j=new V5(this.player);this.j.hide();g.fM(this.player,this.j.element,4);a.Te()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(V5,g.V);g.h=V5.prototype;
g.h.QF=function(){this.tooltip=new g.oQ(this.player,this);g.J(this,this.tooltip);g.fM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yc=new g.oN(this.player);g.J(this,this.yc);this.Lg=new g.V({G:"div",L:"ytp-miniplayer-scrim"});g.J(this,this.Lg);this.Lg.Ba(this.element);this.T(this.Lg.element,"click",this.rB);var a=new g.V({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.bJ()]});g.J(this,a);a.Ba(this.Lg.element);this.T(a.element,"click",this.Si);
a=new g.e1(this.player,this);g.J(this,a);a.Ba(this.Lg.element);this.fq=new g.V({G:"div",L:"ytp-miniplayer-controls"});g.J(this,this.fq);this.fq.Ba(this.Lg.element);this.T(this.fq.element,"click",this.rB);var b=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,b);b.Ba(this.fq.element);a=new g.V({G:"div",L:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Ba(this.fq.element);var c=new g.V({G:"div",L:"ytp-miniplayer-button-container"});g.J(this,c);c.Ba(this.fq.element);this.UO=new g.NO(this.player,
this,!1);g.J(this,this.UO);this.UO.Ba(b.element);b=new g.LO(this.player,this);g.J(this,b);b.Ba(a.element);this.nextButton=new g.NO(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Ba(c.element);this.Og=new g.aQ(this.player,this);g.J(this,this.Og);this.Og.Ba(this.Lg.element);this.Kc=new g.XO(this.player,this);g.J(this,this.Kc);g.fM(this.player,this.Kc.element,4);this.gB=new g.V({G:"div",L:"ytp-miniplayer-buttons"});g.J(this,this.gB);g.fM(this.player,this.gB.element,4);a=new g.V({G:"button",
Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.bJ()]});g.J(this,a);a.Ba(this.gB.element);this.T(a.element,"click",this.Si);a=new g.V({G:"button",Ha:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.hJ()]});g.J(this,a);a.Ba(this.gB.element);this.T(a.element,"click",this.VX);this.T(this.player,"presentingplayerstatechange",this.Sc);this.T(this.player,"appresize",this.yb);this.T(this.player,"fullscreentoggled",this.yb);this.yb()};
g.h.show=function(){this.Vd=new g.Zo(this.Oq,null,this);this.Vd.start();this.ue||(this.QF(),this.ue=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.Vd&&(this.Vd.dispose(),this.Vd=void 0);g.V.prototype.hide.call(this);this.player.Te()||(this.ue&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.h.va=function(){this.Vd&&(this.Vd.dispose(),this.Vd=void 0);g.V.prototype.va.call(this)};
g.h.Si=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.h.VX=function(){this.player.playVideo()};
g.h.rB=function(a){if(a.target===this.Lg.element||a.target===this.fq.element)this.player.V().S("kevlar_miniplayer_play_pause_on_scrim")?g.eI(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.h.hg=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Te())};
g.h.Dd=function(){this.Kc.Vb();this.Og.Vb()};
g.h.Oq=function(){this.Dd();this.Vd&&this.Vd.start()};
g.h.Sc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.h.yb=function(){g.mP(this.Kc,0,this.player.gb().getPlayerSize().width,!1);g.$O(this.Kc)};
g.h.bI=function(a){this.player.Te()&&(0===a?this.hide():this.show())};
g.h.pc=function(){return this.tooltip};
g.h.Ze=function(){return!1};
g.h.Df=function(){return!1};
g.h.Li=function(){return!1};
g.h.gy=function(){};
g.h.Tn=function(){};
g.h.Zs=function(){};
g.h.Co=function(){return null};
g.h.Jw=function(){return null};
g.h.Ij=function(){return new g.qm(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Vq=function(a,b,c,d,e){var f=0,k=d=0,l=g.Gm(a);if(b){c=g.gp(b,"ytp-prev-button")||g.gp(b,"ytp-next-button");var m=g.gp(b,"ytp-play-button"),n=g.gp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Em(b,this.element),k=b.x,f=b.y-12):n&&(k=g.gp(b,"ytp-miniplayer-button-top-left"),f=g.Em(b,this.element),b=g.Gm(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.ch(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Gl=function(){};
g.h.Wk=function(){return!1};g.w(W5,g.sM);W5.prototype.create=function(){};
W5.prototype.Yh=function(){return!1};
W5.prototype.load=function(){this.player.hideControls();this.j.show()};
W5.prototype.unload=function(){this.player.showControls();this.j.hide()};g.rM("miniplayer",W5);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:33:24 Mar 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:10 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 137.096
  exclusion.robots: 0.07
  exclusion.robots.policy: 0.061
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 83.129 (3)
  PetaboxLoader3.datanode: 103.633 (5)
  load_resource: 242.663 (2)
  PetaboxLoader3.resolve: 171.725 (2)
*/