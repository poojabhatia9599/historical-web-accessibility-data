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

(function(g){var window=this;var U3=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={G:"svg",T:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},R:[{G:"g",T:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",T:{transform:"translate(-1.000000, -3.000000)"},R:[{G:"polygon",T:{points:"0 0 24 0 24 24 0 24"}},{G:"path",T:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.S().Y("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={G:"svg",T:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},R:[{G:"g",T:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},R:[{G:"g",T:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},R:[{G:"path",T:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{G:"button",ia:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],T:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},R:[d]});this.J=a;this.ya("click",this.onClick,this);this.za("title",g.EO(a,e,"i"));g.dg(this,g.bP(b.Qb(),this.element))},V3=function(a){g.U.call(this,{G:"div",
L:"ytp-miniplayer-ui"});this.bi=!1;this.player=a;this.P(a,"minimized",this.Ch);this.P(a,"onStateChange",this.jR)},W3=function(a){g.hO.call(this,a);
this.u=new V3(this.player);this.u.hide();g.WN(this.player,this.u.element,4);a.oe()&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(U3,g.U);U3.prototype.onClick=function(){this.J.va("onExpandMiniplayer")};g.u(V3,g.U);g.k=V3.prototype;
g.k.show=function(){this.ce=new g.ln(this.Zr,null,this);this.ce.start();if(!this.bi){this.tooltip=new g.bS(this.player,this);g.C(this,this.tooltip);g.WN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rb=new g.XO(this.player);g.C(this,this.Rb);this.Mk=new g.U({G:"div",L:"ytp-miniplayer-scrim"});g.C(this,this.Mk);this.Mk.fa(this.element);this.P(this.Mk.element,"click",this.fG);var a=new g.U({G:"button",ia:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.UL()]});
g.C(this,a);a.fa(this.Mk.element);this.P(a.element,"click",this.Fj);a=new U3(this.player,this);g.C(this,a);a.fa(this.Mk.element);g.P(this.player.S().experiments,"web_inline_player_after_video_preview")&&(a=new g.sQ(this.player,this),g.C(this,a),a.fa(this.Mk.element));this.dn=new g.U({G:"div",L:"ytp-miniplayer-controls"});g.C(this,this.dn);this.dn.fa(this.Mk.element);this.P(this.dn.element,"click",this.fG);var b=new g.U({G:"div",L:"ytp-miniplayer-button-container"});g.C(this,b);b.fa(this.dn.element);
a=new g.U({G:"div",L:"ytp-miniplayer-play-button-container"});g.C(this,a);a.fa(this.dn.element);var c=new g.U({G:"div",L:"ytp-miniplayer-button-container"});g.C(this,c);c.fa(this.dn.element);this.AG=new g.YQ(this.player,this,!1);g.C(this,this.AG);this.AG.fa(b.element);b=new g.MQ(this.player,this);g.C(this,b);b.fa(a.element);this.nextButton=new g.YQ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.fa(c.element);this.Ei=new g.OR(this.player,this);g.C(this,this.Ei);this.Ei.fa(this.Mk.element);
this.Xc=new g.cR(this.player,this);g.C(this,this.Xc);g.WN(this.player,this.Xc.element,4);this.Gu=new g.U({G:"div",L:"ytp-miniplayer-buttons"});g.C(this,this.Gu);g.WN(this.player,this.Gu.element,4);a=new g.U({G:"button",ia:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.UL()]});g.C(this,a);a.fa(this.Gu.element);this.P(a.element,"click",this.Fj);a=new g.U({G:"button",ia:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.ZL()]});g.C(this,a);a.fa(this.Gu.element);
this.P(a.element,"click",this.pP);this.P(this.player,"presentingplayerstatechange",this.Sb);this.P(this.player,"appresize",this.Ra);this.P(this.player,"fullscreentoggled",this.Ra);this.Ra();this.bi=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.Xc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.U.prototype.hide.call(this);this.player.oe()||(this.bi&&this.Xc.hide(),this.player.loadModule("annotations_module"))};
g.k.ca=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.U.prototype.ca.call(this)};
g.k.Fj=function(){this.player.stopVideo();this.player.va("onCloseMiniplayer")};
g.k.pP=function(){this.player.playVideo()};
g.k.fG=function(a){if(a.target===this.Mk.element||a.target===this.dn.element)g.P(this.player.S().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.YK(this.player.Va())?this.player.pauseVideo():this.player.playVideo():this.player.va("onExpandMiniplayer")};
g.k.Ch=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.oe())};
g.k.re=function(){this.Xc.Cb();this.Ei.Cb()};
g.k.Zr=function(){this.re();this.ce&&this.ce.start()};
g.k.Sb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Ra=function(){g.nR(this.Xc,0,this.player.Ja().getPlayerSize().width,!1);g.eR(this.Xc)};
g.k.jR=function(a){this.player.oe()&&(0===a?this.hide():this.show())};
g.k.Qb=function(){return this.tooltip};
g.k.xe=function(){return!1};
g.k.Oe=function(){return!1};
g.k.di=function(){return!1};
g.k.pA=function(){};
g.k.fn=function(){};
g.k.Nq=function(){};
g.k.Cl=function(){return null};
g.k.ij=function(){return new g.hg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ip=function(a,b,c,d,e){var f=0,h=d=0,l=g.Kg(a);if(b){c=g.vn(b,"ytp-prev-button")||g.vn(b,"ytp-next-button");var m=g.vn(b,"ytp-play-button"),n=g.vn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ig(b,this.element),h=b.x,f=b.y-12):n&&(h=g.vn(b,"ytp-miniplayer-button-top-left"),f=g.Ig(b,this.element),b=g.Kg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ja().getPlayerSize().width;e=f+(e||0);l=g.ee(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Qk=function(){};
g.k.kk=function(){return!1};g.u(W3,g.hO);W3.prototype.create=function(){};
W3.prototype.Ai=function(){return!1};
W3.prototype.load=function(){this.player.hideControls();this.u.show()};
W3.prototype.unload=function(){this.player.showControls();this.u.hide()};g.nO.miniplayer=W3;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:09:32 Feb 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:14:53 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1491.397
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 1439.207 (3)
  PetaboxLoader3.datanode: 1531.493 (5)
  load_resource: 247.002 (2)
  PetaboxLoader3.resolve: 102.788 (2)
*/