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

(function(g){var window=this;var N5=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={I:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{I:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{I:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{I:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{I:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Open video page";a.T().ca("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={I:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{I:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{I:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{I:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{I:"button",ha:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.J=a;this.wa("click",this.onClick,this);this.xa("title",g.QX(a,e,"i"));g.$f(this,g.oY(b.Jb(),this.element))},O5=function(a){g.V.call(this,{I:"div",
L:"ytp-miniplayer-ui"});this.ih=!1;this.player=a;this.R(a,"minimized",this.Fi);this.R(a,"onStateChange",this.zQ)},P5=function(a){g.AS.call(this,a);
this.u=new O5(this.player);this.u.hide();g.uP(this.player,this.u.element,4);a.app.visibility.u&&(this.load(),g.I(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(N5,g.V);N5.prototype.onClick=function(){this.J.va("onExpandMiniplayer")};g.u(O5,g.V);g.k=O5.prototype;
g.k.show=function(){this.Hd=new g.Um(this.Rp,null,this);this.Hd.start();if(!this.ih){this.tooltip=new g.F_(this.player,this);g.D(this,this.tooltip);g.uP(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Lb=new g.iY(this.player);g.D(this,this.Lb);this.Ok=new g.V({I:"div",L:"ytp-miniplayer-scrim"});g.D(this,this.Ok);this.Ok.fa(this.element);this.R(this.Ok.element,"click",this.EE);var a=new g.V({I:"button",ha:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.QN()]});
g.D(this,a);a.fa(this.Ok.element);this.R(a.element,"click",this.Cn);a=new N5(this.player,this);g.D(this,a);a.fa(this.Ok.element);this.ul=new g.V({I:"div",L:"ytp-miniplayer-controls"});g.D(this,this.ul);this.ul.fa(this.Ok.element);this.R(this.ul.element,"click",this.EE);var b=new g.V({I:"div",L:"ytp-miniplayer-button-container"});g.D(this,b);b.fa(this.ul.element);a=new g.V({I:"div",L:"ytp-miniplayer-play-button-container"});g.D(this,a);a.fa(this.ul.element);var c=new g.V({I:"div",L:"ytp-miniplayer-button-container"});
g.D(this,c);c.fa(this.ul.element);this.cF=new g.GZ(this.player,this,!1);g.D(this,this.cF);this.cF.fa(b.element);b=new g.DZ(this.player,this);g.D(this,b);b.fa(a.element);this.nextButton=new g.GZ(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.fa(c.element);this.Kh=new g.u_(this.player,this);g.D(this,this.Kh);this.Kh.fa(this.Ok.element);this.Rc=new g.KZ(this.player,this);g.D(this,this.Rc);g.uP(this.player,this.Rc.element,4);this.kt=new g.V({I:"div",L:"ytp-miniplayer-buttons"});g.D(this,
this.kt);g.uP(this.player,this.kt.element,4);a=new g.V({I:"button",ha:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Close"},S:[g.QN()]});g.D(this,a);a.fa(this.kt.element);this.R(a.element,"click",this.Cn);a=new g.V({I:"button",ha:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Close"},S:[g.VN()]});g.D(this,a);a.fa(this.kt.element);this.R(a.element,"click",this.GO);this.R(this.player,"presentingplayerstatechange",this.Wb);this.R(this.player,"appresize",this.Sa);this.R(this.player,
"fullscreentoggled",this.Sa);this.Sa();this.ih=!0}0!==this.player.getPlayerState()&&g.V.prototype.show.call(this);this.Rc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Hd&&(this.Hd.dispose(),this.Hd=void 0);g.V.prototype.hide.call(this);this.player.app.visibility.u||(this.ih&&this.Rc.hide(),this.player.loadModule("annotations_module"))};
g.k.aa=function(){this.Hd&&(this.Hd.dispose(),this.Hd=void 0);g.V.prototype.aa.call(this)};
g.k.Cn=function(){this.player.stopVideo();this.player.va("onCloseMiniplayer")};
g.k.GO=function(){this.player.playVideo()};
g.k.EE=function(a){if(a.target===this.Ok.element||a.target===this.ul.element)g.Q(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.IL(g.wJ(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.va("onExpandMiniplayer")};
g.k.Fi=function(){g.I(this.player.getRootNode(),"ytp-player-minimized",this.player.app.visibility.u)};
g.k.Pd=function(){this.Rc.Ic();this.Kh.Ic()};
g.k.Rp=function(){this.Pd();this.Hd&&this.Hd.start()};
g.k.Wb=function(a){g.U(a.state,32)&&this.tooltip.hide()};
g.k.Sa=function(){this.Rc.setPosition(0,g.MG(this.player).getPlayerSize().width,!1);g.MZ(this.Rc)};
g.k.zQ=function(a){this.player.app.visibility.u&&(0===a?this.hide():this.show())};
g.k.Jb=function(){return this.tooltip};
g.k.Ld=function(){return!1};
g.k.qe=function(){return!1};
g.k.kh=function(){return!1};
g.k.Hy=function(){};
g.k.wl=function(){};
g.k.No=function(){};
g.k.Fl=function(){return null};
g.k.hi=function(){return new g.eg(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Jn=function(a,b,c,d,e){var f=0,h=d=0,l=g.Bg(a);if(b){c=g.cn(b,"ytp-prev-button")||g.cn(b,"ytp-next-button");var m=g.cn(b,"ytp-play-button"),n=g.cn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.zg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.cn(b,"ytp-miniplayer-button-top-left"),f=g.zg(b,this.element),b=g.Bg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.MG(this.player).getPlayerSize().width;e=f+(e||0);l=g.$d(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Nj=function(){};
g.k.jj=function(){return!1};g.u(P5,g.AS);P5.prototype.create=function(){};
P5.prototype.Gh=function(){return!1};
P5.prototype.load=function(){this.player.hideControls();this.u.show()};
P5.prototype.unload=function(){this.player.showControls();this.u.hide()};g.CX.miniplayer=P5;})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:02:47 Dec 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:57:57 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1762.763
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.067
  cdx.remote: 0.059
  esindex: 0.01
  LoadShardBlock: 975.097 (3)
  PetaboxLoader3.datanode: 187.563 (5)
  load_resource: 187.858 (2)
  PetaboxLoader3.resolve: 108.056 (2)
*/