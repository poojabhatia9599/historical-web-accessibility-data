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

(function(g){var window=this;'use strict';var g6a=function(a){g.W.call(this,{F:"div",N:"ytp-miniplayer-ui"});this.Ye=!1;this.player=a;this.T(a,"minimized",this.Xg);this.T(a,"onStateChange",this.XK)},N6=function(a){g.bO.call(this,a);
this.j=new g6a(this.player);this.j.hide();g.yN(this.player,this.j.element,4);a.Cf()&&(this.load(),g.jo(a.getRootNode(),"ytp-player-minimized",!0));this.player.V().K("web_rounded_containers")&&g.jo(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(g6a,g.W);g.k=g6a.prototype;
g.k.tI=function(){this.tooltip=new g.YR(this.player,this);g.M(this,this.tooltip);g.yN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Ic=new g.WO(this.player);g.M(this,this.Ic);this.ji=new g.W({F:"div",N:"ytp-miniplayer-scrim"});g.M(this,this.ji);this.ji.Ca(this.element);this.T(this.ji.element,"click",this.GD);var a=new g.W({F:"button",Fa:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.bL()]});g.M(this,a);a.Ca(this.ji.element);this.T(a.element,"click",this.vk);
a=new g.M2(this.player,this);g.M(this,a);a.Ca(this.ji.element);this.Xr=new g.W({F:"div",N:"ytp-miniplayer-controls"});g.M(this,this.Xr);this.Xr.Ca(this.ji.element);this.T(this.Xr.element,"click",this.GD);var b=new g.W({F:"div",N:"ytp-miniplayer-button-container"});g.M(this,b);b.Ca(this.Xr.element);a=new g.W({F:"div",N:"ytp-miniplayer-play-button-container"});g.M(this,a);a.Ca(this.Xr.element);var c=new g.W({F:"div",N:"ytp-miniplayer-button-container"});g.M(this,c);c.Ca(this.Xr.element);this.NR=new g.wQ(this.player,
this,!1);g.M(this,this.NR);this.NR.Ca(b.element);b=new g.uQ(this.player,this);g.M(this,b);b.Ca(a.element);this.nextButton=new g.wQ(this.player,this,!0);g.M(this,this.nextButton);this.nextButton.Ca(c.element);this.wi=new g.JR(this.player,this);g.M(this,this.wi);this.wi.Ca(this.ji.element);this.Bc=new g.HQ(this.player,this);g.M(this,this.Bc);g.yN(this.player,this.Bc.element,4);this.wD=new g.W({F:"div",N:"ytp-miniplayer-buttons"});g.M(this,this.wD);g.yN(this.player,this.wD.element,4);a=new g.W({F:"button",
Fa:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.bL()]});g.M(this,a);a.Ca(this.wD.element);this.T(a.element,"click",this.vk);a=new g.W({F:"button",Fa:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.iL()]});g.M(this,a);a.Ca(this.wD.element);this.T(a.element,"click",this.g2);this.T(this.player,"presentingplayerstatechange",this.Tc);this.T(this.player,"appresize",this.Cb);this.T(this.player,"fullscreentoggled",this.Cb);this.Cb()};
g.k.show=function(){this.Ee=new g.Vn(this.Zs,null,this);this.Ee.start();this.Ye||(this.tI(),this.Ye=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Bc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ee&&(this.Ee.dispose(),this.Ee=void 0);g.W.prototype.hide.call(this);this.player.Cf()||(this.Ye&&this.Bc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.Ee&&(this.Ee.dispose(),this.Ee=void 0);g.W.prototype.ra.call(this)};
g.k.vk=function(){this.player.stopVideo();this.player.Pa("onCloseMiniplayer")};
g.k.g2=function(){this.player.playVideo()};
g.k.GD=function(a){if(a.target===this.ji.element||a.target===this.Xr.element)this.player.V().K("kevlar_miniplayer_play_pause_on_scrim")?g.cK(this.player.Eb())?this.player.pauseVideo():this.player.playVideo():this.player.Pa("onExpandMiniplayer")};
g.k.Xg=function(){g.jo(this.player.getRootNode(),"ytp-player-minimized",this.player.Cf())};
g.k.Xd=function(){this.Bc.dc();this.wi.dc()};
g.k.Zs=function(){this.Xd();this.Ee&&this.Ee.start()};
g.k.Tc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.Cb=function(){g.YQ(this.Bc,0,this.player.fb().getPlayerSize().width,!1);g.KQ(this.Bc)};
g.k.XK=function(a){this.player.Cf()&&(0===a?this.hide():this.show())};
g.k.vc=function(){return this.tooltip};
g.k.Vf=function(){return!1};
g.k.Fg=function(){return!1};
g.k.Zm=function(){return!1};
g.k.jk=function(){return!1};
g.k.xA=function(){};
g.k.Fp=function(){};
g.k.Fv=function(){};
g.k.Hm=function(){return null};
g.k.Yy=function(){return null};
g.k.gk=function(){return new g.xl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.xt=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ll(a);if(b){c=g.eo(b,"ytp-prev-button")||g.eo(b,"ytp-next-button");var m=g.eo(b,"ytp-play-button"),n=g.eo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Jl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.eo(b,"ytp-miniplayer-button-top-left"),f=g.Jl(b,this.element),b=g.Ll(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.fb().getPlayerSize().width;e=f+(e||0);l=g.Eg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Bn=function(){};
g.k.bl=function(){return!1};
g.k.yA=function(){};
g.k.HB=function(){};g.v(N6,g.bO);N6.prototype.create=function(){};
N6.prototype.Cj=function(){return!1};
N6.prototype.load=function(){this.player.hideControls();this.j.show()};
N6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.aO("miniplayer",N6);})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:58:37 Aug 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:43:29 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 80.158
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.058
  cdx.remote: 0.052
  esindex: 0.009
  LoadShardBlock: 30.496 (3)
  PetaboxLoader3.datanode: 43.414 (4)
  load_resource: 50.084
  PetaboxLoader3.resolve: 33.442
*/