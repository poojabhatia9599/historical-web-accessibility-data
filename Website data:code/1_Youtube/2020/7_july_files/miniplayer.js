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

(function(g){var window=this;var N5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.V?{D:"div",Y:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.O().ia("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.V?{D:"div",Y:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.T.call(this,{D:"button",Y:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.I=a;this.oa("click",this.onClick,this);this.na("title",g.YN(a,e,"i"));g.Le(this,g.DO(b.rb(),this.element))},O5=function(a){g.T.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.u=this.o=void 0;this.M(a,"minimized",this.cJ);this.M(a,"onStateChange",this.DO)},P5=function(a){g.gC.call(this,a);
this.o=new O5(this.player);this.o.hide();g.vN(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.J(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(N5,g.T);N5.prototype.onClick=function(){this.I.sa("onExpandMiniplayer")};g.t(O5,g.T);g.h=O5.prototype;
g.h.show=function(){this.o=new g.sn(this.bL,null,this);this.o.start();if(!this.H){this.C=new g.UR(this.player,this);g.A(this,this.C);g.vN(this.player,this.C.element,4);this.C.Wd=.6;this.dc=new g.GO(this.player);g.A(this,this.dc);this.A=new g.T({D:"div",J:"ytp-miniplayer-scrim"});g.A(this,this.A);this.A.ca(this.element);this.M(this.A.element,"click",this.yB);var a=new g.T({D:"button",Y:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.wM()]});g.A(this,a);a.ca(this.A.element);
this.M(a.element,"click",this.hA);a=new N5(this.player,this);g.A(this,a);a.ca(this.A.element);this.B=new g.T({D:"div",J:"ytp-miniplayer-controls"});g.A(this,this.B);this.B.ca(this.A.element);this.M(this.B.element,"click",this.yB);var b=new g.T({D:"div",J:"ytp-miniplayer-button-container"});g.A(this,b);b.ca(this.B.element);a=new g.T({D:"div",J:"ytp-miniplayer-play-button-container"});g.A(this,a);a.ca(this.B.element);var c=new g.T({D:"div",J:"ytp-miniplayer-button-container"});g.A(this,c);c.ca(this.B.element);
this.R=new g.wQ(this.player,this,!1);g.A(this,this.R);this.R.ca(b.element);b=new g.sQ(this.player,this);g.A(this,b);b.ca(a.element);this.N=new g.wQ(this.player,this,!0);g.A(this,this.N);this.N.ca(c.element);this.G=new g.GR(this.player,this);g.A(this,this.G);this.G.ca(this.A.element);this.u=new g.FQ(this.player,this);g.A(this,this.u);g.vN(this.player,this.u.element,4);this.F=new g.T({D:"div",J:"ytp-miniplayer-buttons"});g.A(this,this.F);g.vN(this.player,this.F.element,4);a=new g.T({D:"button",Y:["ytp-miniplayer-close-button",
"ytp-button"],P:{"aria-label":"Close"},K:[g.wM()]});g.A(this,a);a.ca(this.F.element);this.M(a.element,"click",this.hA);a=new g.T({D:"button",Y:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.LM()]});g.A(this,a);a.ca(this.F.element);this.M(a.element,"click",this.xM);this.M(this.player,"presentingplayerstatechange",this.dJ);this.M(this.player,"appresize",this.qu);this.M(this.player,"fullscreentoggled",this.qu);this.qu();this.H=!0}0!=this.player.getPlayerState()&&g.T.prototype.show.call(this);
this.u.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.o&&(this.o.dispose(),this.o=void 0);g.T.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.u.hide(),this.player.loadModule("annotations_module"))};
g.h.X=function(){this.o&&(this.o.dispose(),this.o=void 0);g.T.prototype.X.call(this)};
g.h.hA=function(){this.player.stopVideo();this.player.sa("onCloseMiniplayer")};
g.h.xM=function(){this.player.playVideo()};
g.h.yB=function(a){if(a.target==this.A.element||a.target==this.B.element)g.O(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.aD(g.iM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.sa("onExpandMiniplayer")};
g.h.cJ=function(){g.J(this.player.getRootNode(),"ytp-player-minimized",this.player.app.H.o)};
g.h.bL=function(){this.u.ac();this.G.ac();this.o&&this.o.start()};
g.h.dJ=function(a){g.S(a.state,32)&&this.C.hide()};
g.h.qu=function(){g.YQ(this.u,0,g.iN(this.player).getPlayerSize().width,!1);this.u.Nv()};
g.h.DO=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.rb=function(){return this.C};
g.h.Pc=function(){return!1};
g.h.he=function(){return!1};
g.h.wj=function(){return!1};
g.h.xv=function(){};
g.h.Xi=function(){};
g.h.Zl=function(){};
g.h.Mm=function(){return null};
g.h.gu=function(){return new g.uh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.kl=function(a,b,c,d,e){var f=0,k=d=0,l=g.Qh(a);if(b){c=g.En(b,"ytp-prev-button")||g.En(b,"ytp-next-button");var m=g.En(b,"ytp-play-button"),n=g.En(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Nh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.En(b,"ytp-miniplayer-button-top-left"),f=g.Nh(b,this.element),b=g.Qh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.iN(this.player).getPlayerSize().width;e=f+(e||0);l=g.Td(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.ju=function(){};
g.h.Rg=function(){};g.t(P5,g.gC);P5.prototype.create=function(){};
P5.prototype.Pf=function(){return!1};
P5.prototype.load=function(){this.player.hideControls();this.o.show()};
P5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.BC.miniplayer=P5;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:29:14 Jul 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:58:31 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 76.724
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.054
  esindex: 0.01
  LoadShardBlock: 39.096 (3)
  PetaboxLoader3.datanode: 62.634 (5)
  load_resource: 278.117 (2)
  PetaboxLoader3.resolve: 215.719 (2)
*/