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

(function(g){var window=this;'use strict';var $6a=function(a){g.X.call(this,{D:"div",K:"ytp-miniplayer-ui"});this.wf=!1;this.player=a;this.T(a,"minimized",this.ih);this.T(a,"onStateChange",this.IL)},O6=function(a){g.vO.call(this,a);
this.j=new $6a(this.player);this.j.hide();g.RN(this.player,this.j.element,4);a.Ff()&&(this.load(),g.qo(a.getRootNode(),"ytp-player-minimized",!0));this.player.V().N("web_rounded_containers")&&g.qo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v($6a,g.X);g.k=$6a.prototype;
g.k.aJ=function(){this.tooltip=new g.vS(this.player,this);g.N(this,this.tooltip);g.RN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Kc=new g.pP(this.player);g.N(this,this.Kc);this.Ei=new g.X({D:"div",K:"ytp-miniplayer-scrim"});g.N(this,this.Ei);this.Ei.Da(this.element);this.T(this.Ei.element,"click",this.iE);var a=new g.X({D:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.rL()]});g.N(this,a);a.Da(this.Ei.element);this.T(a.element,"click",this.Ok);
a=new g.M2(this.player,this);g.N(this,a);a.Da(this.Ei.element);this.Ds=new g.X({D:"div",K:"ytp-miniplayer-controls"});g.N(this,this.Ds);this.Ds.Da(this.Ei.element);this.T(this.Ds.element,"click",this.iE);var b=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.N(this,b);b.Da(this.Ds.element);a=new g.X({D:"div",K:"ytp-miniplayer-play-button-container"});g.N(this,a);a.Da(this.Ds.element);var c=new g.X({D:"div",K:"ytp-miniplayer-button-container"});g.N(this,c);c.Da(this.Ds.element);this.ES=new g.RQ(this.player,
this,!1);g.N(this,this.ES);this.ES.Da(b.element);b=new g.PQ(this.player,this);g.N(this,b);b.Da(a.element);this.nextButton=new g.RQ(this.player,this,!0);g.N(this,this.nextButton);this.nextButton.Da(c.element);this.Gi=new g.hS(this.player,this);g.N(this,this.Gi);this.Gi.Da(this.Ei.element);this.Cc=new g.bR(this.player,this);g.N(this,this.Cc);g.RN(this.player,this.Cc.element,4);this.XD=new g.X({D:"div",K:"ytp-miniplayer-buttons"});g.N(this,this.XD);g.RN(this.player,this.XD.element,4);a=new g.X({D:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.rL()]});g.N(this,a);a.Da(this.XD.element);this.T(a.element,"click",this.Ok);a=new g.X({D:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.yL()]});g.N(this,a);a.Da(this.XD.element);this.T(a.element,"click",this.f3);this.T(this.player,"presentingplayerstatechange",this.Wc);this.T(this.player,"appresize",this.Bb);this.T(this.player,"fullscreentoggled",this.Bb);this.Bb()};
g.k.show=function(){this.Le=new g.bo(this.Gt,null,this);this.Le.start();this.wf||(this.aJ(),this.wf=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Cc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Le&&(this.Le.dispose(),this.Le=void 0);g.X.prototype.hide.call(this);this.player.Ff()||(this.wf&&this.Cc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Le&&(this.Le.dispose(),this.Le=void 0);g.X.prototype.ra.call(this)};
g.k.Ok=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.f3=function(){this.player.playVideo()};
g.k.iE=function(a){if(a.target===this.Ei.element||a.target===this.Ds.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.oK(this.player.Fb())?this.player.pauseVideo():this.player.playVideo():this.player.Pa("onExpandMiniplayer")};
g.k.ih=function(){g.qo(this.player.getRootNode(),"ytp-player-minimized",this.player.Ff())};
g.k.ge=function(){this.Cc.jc();this.Gi.jc()};
g.k.Gt=function(){this.ge();this.Le&&this.Le.start()};
g.k.Wc=function(a){g.W(a.state,32)&&this.tooltip.hide()};
g.k.Bb=function(){g.uR(this.Cc,0,this.player.gb().getPlayerSize().width,!1);g.eR(this.Cc)};
g.k.IL=function(a){this.player.Ff()&&(0===a?this.hide():this.show())};
g.k.xc=function(){return this.tooltip};
g.k.Ef=function(){return!1};
g.k.Mg=function(){return!1};
g.k.Zi=function(){return!1};
g.k.Jk=function(){return!1};
g.k.fh=function(){return!1};
g.k.VA=function(){};
g.k.xo=function(){};
g.k.ew=function(){};
g.k.Tm=function(){return null};
g.k.Az=function(){return null};
g.k.Hk=function(){return new g.Cl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Pt=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ql(a);if(b){c=g.lo(b,"ytp-prev-button")||g.lo(b,"ytp-next-button");var m=g.lo(b,"ytp-play-button"),n=g.lo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ol(b,this.element),h=b.x,f=b.y-12):n&&(h=g.lo(b,"ytp-miniplayer-button-top-left"),f=g.Ol(b,this.element),b=g.Ql(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.gb().getPlayerSize().width;e=f+(e||0);l=g.Mg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Mn=function(){};
g.k.Ek=function(){return!1};
g.k.WA=function(){};
g.k.vx=function(){};
g.k.gp=function(){};
g.k.gC=function(){};
g.k.Xp=function(){};g.v(O6,g.vO);O6.prototype.create=function(){};
O6.prototype.Sj=function(){return!1};
O6.prototype.load=function(){this.player.hideControls();this.j.show()};
O6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.uO("miniplayer",O6);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:05:39 Oct 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:43:43 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 87.313
  exclusion.robots: 0.146
  exclusion.robots.policy: 0.129
  cdx.remote: 0.111
  esindex: 0.018
  LoadShardBlock: 35.934 (3)
  PetaboxLoader3.datanode: 65.147 (5)
  load_resource: 130.42 (2)
  PetaboxLoader3.resolve: 58.4 (2)
*/