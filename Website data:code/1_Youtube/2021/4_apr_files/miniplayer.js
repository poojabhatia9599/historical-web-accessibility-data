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

(function(g){var window=this;'use strict';var P4=function(a){g.V.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.Vf=!1;this.player=a;this.N(a,"minimized",this.Fg);this.N(a,"onStateChange",this.mC)},Q4=function(a){g.DM.call(this,a);
this.i=new P4(this.player);this.i.hide();g.sM(this.player,this.i.element,4);a.Be()&&(this.load(),g.L(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(P4,g.V);g.k=P4.prototype;
g.k.LA=function(){this.tooltip=new g.XP(this.player,this);g.G(this,this.tooltip);g.sM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.hc=new g.tN(this.player);g.G(this,this.hc);this.fg=new g.V({D:"div",K:"ytp-miniplayer-scrim"});g.G(this,this.fg);this.fg.ya(this.element);this.N(this.fg.element,"click",this.Kw);var a=new g.V({D:"button",Da:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.BK()]});g.G(this,a);a.ya(this.fg.element);this.N(a.element,"click",this.Ih);
a=new g.r0(this.player,this);g.G(this,a);a.ya(this.fg.element);this.Jn=new g.V({D:"div",K:"ytp-miniplayer-controls"});g.G(this,this.Jn);this.Jn.ya(this.fg.element);this.N(this.Jn.element,"click",this.Kw);var b=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,b);b.ya(this.Jn.element);a=new g.V({D:"div",K:"ytp-miniplayer-play-button-container"});g.G(this,a);a.ya(this.Jn.element);var c=new g.V({D:"div",K:"ytp-miniplayer-button-container"});g.G(this,c);c.ya(this.Jn.element);this.qI=new g.UO(this.player,
this,!1);g.G(this,this.qI);this.qI.ya(b.element);b=new g.RO(this.player,this);g.G(this,b);b.ya(a.element);this.nextButton=new g.UO(this.player,this,!0);g.G(this,this.nextButton);this.nextButton.ya(c.element);this.hg=new g.KP(this.player,this);g.G(this,this.hg);this.hg.ya(this.fg.element);this.Ac=new g.ZO(this.player,this);g.G(this,this.Ac);g.sM(this.player,this.Ac.element,4);this.xw=new g.V({D:"div",K:"ytp-miniplayer-buttons"});g.G(this,this.xw);g.sM(this.player,this.xw.element,4);a=new g.V({D:"button",
Da:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.BK()]});g.G(this,a);a.ya(this.xw.element);this.N(a.element,"click",this.Ih);a=new g.V({D:"button",Da:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.GK()]});g.G(this,a);a.ya(this.xw.element);this.N(a.element,"click",this.IQ);this.N(this.player,"presentingplayerstatechange",this.zc);this.N(this.player,"appresize",this.qb);this.N(this.player,"fullscreentoggled",this.qb);this.qb()};
g.k.show=function(){this.fd=new g.en(this.Do,null,this);this.fd.start();this.Vf||(this.LA(),this.Vf=!0);0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ac.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.fd&&(this.fd.dispose(),this.fd=void 0);g.V.prototype.hide.call(this);this.player.Be()||(this.Vf&&this.Ac.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.fd&&(this.fd.dispose(),this.fd=void 0);g.V.prototype.va.call(this)};
g.k.Ih=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.IQ=function(){this.player.playVideo()};
g.k.Kw=function(a){if(a.target===this.fg.element||a.target===this.Jn.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.EJ(this.player.sb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.Fg=function(){g.L(this.player.getRootNode(),"ytp-player-minimized",this.player.Be())};
g.k.Qd=function(){this.Ac.Sb();this.hg.Sb()};
g.k.Do=function(){this.Qd();this.fd&&this.fd.start()};
g.k.zc=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.qb=function(){g.jP(this.Ac,0,this.player.Xa().getPlayerSize().width,!1);g.aP(this.Ac)};
g.k.mC=function(a){this.player.Be()&&(0===a?this.hide():this.show())};
g.k.Zb=function(){return this.tooltip};
g.k.me=function(){return!1};
g.k.De=function(){return!1};
g.k.Eh=function(){return!1};
g.k.kx=function(){};
g.k.Ll=function(){};
g.k.Qp=function(){};
g.k.Zl=function(){return null};
g.k.Ai=function(){return new g.Zf(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Lo=function(a,b,c,d,e){var f=0,h=d=0,l=g.zg(a);if(b){c=g.qn(b,"ytp-prev-button")||g.qn(b,"ytp-next-button");var m=g.qn(b,"ytp-play-button"),n=g.qn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.xg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.qn(b,"ytp-miniplayer-button-top-left"),f=g.xg(b,this.element),b=g.zg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Xa().getPlayerSize().width;e=f+(e||0);l=g.ce(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Xj=function(){};
g.k.Cj=function(){return!1};g.v(Q4,g.DM);Q4.prototype.create=function(){};
Q4.prototype.Vh=function(){return!1};
Q4.prototype.load=function(){this.player.hideControls();this.i.show()};
Q4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.JM.miniplayer=Q4;})(_yt_player);


}
/*
     FILE ARCHIVED ON 02:06:56 May 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:34 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 275.615
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.067
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 195.309 (3)
  PetaboxLoader3.datanode: 136.423 (5)
  load_resource: 136.134 (2)
  PetaboxLoader3.resolve: 86.661 (2)
*/