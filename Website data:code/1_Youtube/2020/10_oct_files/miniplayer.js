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

(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",O:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},L:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",O:{transform:"translate(-1.000000, -3.000000)"},L:[{D:"polygon",O:{points:"0 0 24 0 24 24 0 24"}},{D:"path",O:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.N().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",O:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},L:[{D:"g",O:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},L:[{D:"g",O:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},L:[{D:"path",O:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",da:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],O:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},L:[d]});this.G=a;this.ia("click",this.onClick,this);this.ka("title",g.LX(a,e,"i"));g.Yf(this,g.jY(b.xb(),this.element))},P5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.zg=!1;this.player=a;this.K(a,"minimized",this.Fi);this.K(a,"onStateChange",this.rP)},Q5=function(a){g.IS.call(this,a);
this.o=new P5(this.player);this.o.hide();g.GO(this.player,this.o.element,4);a.app.visibility.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(O5,g.V);O5.prototype.onClick=function(){this.G.la("onExpandMiniplayer")};g.u(P5,g.V);g.k=P5.prototype;
g.k.show=function(){this.fd=new g.mn(this.Mo,null,this);this.fd.start();if(!this.zg){this.tooltip=new g.v_(this.player,this);g.E(this,this.tooltip);g.GO(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.yb=new g.dY(this.player);g.E(this,this.yb);this.Kj=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.E(this,this.Kj);this.Kj.Y(this.element);this.K(this.Kj.element,"click",this.vD);var a=new g.V({D:"button",da:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},L:[g.RM()]});
g.E(this,a);a.Y(this.Kj.element);this.K(a.element,"click",this.Em);a=new O5(this.player,this);g.E(this,a);a.Y(this.Kj.element);this.hk=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.E(this,this.hk);this.hk.Y(this.Kj.element);this.K(this.hk.element,"click",this.vD);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.E(this,b);b.Y(this.hk.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.E(this,a);a.Y(this.hk.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});
g.E(this,c);c.Y(this.hk.element);this.RD=new g.xZ(this.player,this,!1);g.E(this,this.RD);this.RD.Y(b.element);b=new g.uZ(this.player,this);g.E(this,b);b.Y(a.element);this.nextButton=new g.xZ(this.player,this,!0);g.E(this,this.nextButton);this.nextButton.Y(c.element);this.Wg=new g.k_(this.player,this);g.E(this,this.Wg);this.Wg.Y(this.Kj.element);this.Ec=new g.BZ(this.player,this);g.E(this,this.Ec);g.GO(this.player,this.Ec.element,4);this.Lr=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.E(this,this.Lr);
g.GO(this.player,this.Lr.element,4);a=new g.V({D:"button",da:["ytp-miniplayer-close-button","ytp-button"],O:{"aria-label":"Close"},L:[g.RM()]});g.E(this,a);a.Y(this.Lr.element);this.K(a.element,"click",this.Em);a=new g.V({D:"button",da:["ytp-miniplayer-replay-button","ytp-button"],O:{"aria-label":"Close"},L:[g.eN()]});g.E(this,a);a.Y(this.Lr.element);this.K(a.element,"click",this.vN);this.K(this.player,"presentingplayerstatechange",this.Kb);this.K(this.player,"appresize",this.Ma);this.K(this.player,
"fullscreentoggled",this.Ma);this.Ma();this.zg=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Ec.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.fd&&(this.fd.dispose(),this.fd=void 0);g.V.prototype.hide.call(this);this.player.app.visibility.o||(this.zg&&this.Ec.hide(),this.player.loadModule("annotations_module"))};
g.k.V=function(){this.fd&&(this.fd.dispose(),this.fd=void 0);g.V.prototype.V.call(this)};
g.k.Em=function(){this.player.stopVideo();this.player.la("onCloseMiniplayer")};
g.k.vN=function(){this.player.playVideo()};
g.k.vD=function(a){if(a.target===this.Kj.element||a.target===this.hk.element)g.Q(this.player.N().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.NK(g.eI(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.la("onExpandMiniplayer")};
g.k.Fi=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.o)};
g.k.Bd=function(){this.Ec.wc();this.Wg.wc()};
g.k.Mo=function(){this.Bd();this.fd&&this.fd.start()};
g.k.Kb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Ma=function(){this.Ec.setPosition(0,g.BG(this.player).getPlayerSize().width,!1);this.Ec.Xx()};
g.k.rP=function(a){this.player.app.visibility.o&&(0===a?this.hide():this.show())};
g.k.xb=function(){return this.tooltip};
g.k.od=function(){return!1};
g.k.Bf=function(){return!1};
g.k.Bg=function(){return!1};
g.k.tx=function(){};
g.k.jk=function(){};
g.k.Gn=function(){};
g.k.vk=function(){return null};
g.k.yk=function(){return new g.cg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Km=function(a,b,c,d,e){var f=0,h=d=0,l=g.Ag(a);if(b){c=g.vn(b,"ytp-prev-button")||g.vn(b,"ytp-next-button");var m=g.vn(b,"ytp-play-button"),n=g.vn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.yg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.vn(b,"ytp-miniplayer-button-top-left"),f=g.yg(b,this.element),b=g.Ag(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.BG(this.player).getPlayerSize().width;e=f+(e||0);l=g.Yd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Ki=function(){};
g.k.gi=function(){return!1};g.u(Q5,g.IS);Q5.prototype.create=function(){};
Q5.prototype.Sg=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.xX.miniplayer=Q5;})(_yt_player);


}
/*
     FILE ARCHIVED ON 23:56:16 Sep 30, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:21 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 92.739
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.088
  cdx.remote: 0.079
  esindex: 0.013
  LoadShardBlock: 33.464 (3)
  PetaboxLoader3.datanode: 67.429 (5)
  load_resource: 99.118 (2)
  PetaboxLoader3.resolve: 58.56
*/