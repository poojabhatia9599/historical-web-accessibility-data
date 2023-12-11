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

(function(g){var window=this;'use strict';var C6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.re=!1;this.player=a;this.T(a,"minimized",this.Ag);this.T(a,"onStateChange",this.LG)},D6=function(a){g.FM.call(this,a);
this.i=new C6(this.player);this.i.hide();g.sM(this.player,this.i.element,4);a.Ne()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(C6,g.W);g.k=C6.prototype;
g.k.FE=function(){this.tooltip=new g.hQ(this.player,this);g.I(this,this.tooltip);g.sM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.zc=new g.yN(this.player);g.I(this,this.zc);this.Fg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.I(this,this.Fg);this.Fg.Ea(this.element);this.T(this.Fg.element,"click",this.uA);var a=new g.W({G:"button",Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.wK()]});g.I(this,a);a.Ea(this.Fg.element);this.T(a.element,"click",this.Ki);
a=new g.R1(this.player,this);g.I(this,a);a.Ea(this.Fg.element);this.Fp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.I(this,this.Fp);this.Fp.Ea(this.Fg.element);this.T(this.Fp.element,"click",this.uA);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,b);b.Ea(this.Fp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.I(this,a);a.Ea(this.Fp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.I(this,c);c.Ea(this.Fp.element);this.tN=new g.YO(this.player,
this,!1);g.I(this,this.tN);this.tN.Ea(b.element);b=new g.WO(this.player,this);g.I(this,b);b.Ea(a.element);this.nextButton=new g.YO(this.player,this,!0);g.I(this,this.nextButton);this.nextButton.Ea(c.element);this.Ig=new g.TP(this.player,this);g.I(this,this.Ig);this.Ig.Ea(this.Fg.element);this.Kc=new g.fP(this.player,this);g.I(this,this.Kc);g.sM(this.player,this.Kc.element,4);this.jA=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.I(this,this.jA);g.sM(this.player,this.jA.element,4);a=new g.W({G:"button",
Ha:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.wK()]});g.I(this,a);a.Ea(this.jA.element);this.T(a.element,"click",this.Ki);a=new g.W({G:"button",Ha:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.BK()]});g.I(this,a);a.Ea(this.jA.element);this.T(a.element,"click",this.QV);this.T(this.player,"presentingplayerstatechange",this.Qc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Od=new g.Ar(this.uq,null,this);this.Od.start();this.re||(this.FE(),this.re=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Od&&(this.Od.dispose(),this.Od=void 0);g.W.prototype.hide.call(this);this.player.Ne()||(this.re&&this.Kc.hide(),this.player.loadModule("annotations_module"))};
g.k.ya=function(){this.Od&&(this.Od.dispose(),this.Od=void 0);g.W.prototype.ya.call(this)};
g.k.Ki=function(){this.player.stopVideo();this.player.Oa("onCloseMiniplayer")};
g.k.QV=function(){this.player.playVideo()};
g.k.uA=function(a){if(a.target===this.Fg.element||a.target===this.Fp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.zJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Oa("onExpandMiniplayer")};
g.k.Ag=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.Ne())};
g.k.wd=function(){this.Kc.Xb();this.Ig.Xb()};
g.k.uq=function(){this.wd();this.Od&&this.Od.start()};
g.k.Qc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.sP(this.Kc,0,this.player.eb().getPlayerSize().width,!1);g.gP(this.Kc)};
g.k.LG=function(a){this.player.Ne()&&(0===a?this.hide():this.show())};
g.k.lc=function(){return this.tooltip};
g.k.Ve=function(){return!1};
g.k.xf=function(){return!1};
g.k.Di=function(){return!1};
g.k.hB=function(){};
g.k.Bn=function(){};
g.k.zs=function(){};
g.k.Pn=function(){return null};
g.k.vj=function(){return new g.Bm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Cq=function(a,b,c,d,e){var f=0,h=d=0,l=g.Um(a);if(b){c=g.Ir(b,"ytp-prev-button")||g.Ir(b,"ytp-next-button");var m=g.Ir(b,"ytp-play-button"),n=g.Ir(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Sm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Ir(b,"ytp-miniplayer-button-top-left"),f=g.Sm(b,this.element),b=g.Um(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.qg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.ol=function(){};
g.k.Fk=function(){return!1};g.w(D6,g.FM);D6.prototype.create=function(){};
D6.prototype.Ui=function(){return!1};
D6.prototype.load=function(){this.player.hideControls();this.i.show()};
D6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.EM("miniplayer",D6);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:02:50 Dec 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:15:32 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 65.084
  exclusion.robots: 0.146
  exclusion.robots.policy: 0.132
  cdx.remote: 0.129
  esindex: 0.015
  LoadShardBlock: 35.96 (3)
  PetaboxLoader3.datanode: 64.409 (5)
  load_resource: 140.174 (2)
  PetaboxLoader3.resolve: 86.469 (2)
*/