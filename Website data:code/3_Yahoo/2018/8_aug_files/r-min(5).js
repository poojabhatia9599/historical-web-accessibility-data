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

YUI.add("td-applet-yahooview-mainview",function(e,i){e.namespace("TD.Applet").YahooviewAtomicMainView=e.Base.create("TDAppletYahooviewMainView",e.Af.AppletView,[],{initializer:function(e){},destructor:function(){e.Array.each(this._handles,function(e){e.detach()}),this._handles=[]}})},"@VERSION@",{requires:["af-applet-view","node"]});YUI.add("td-applet-yahooview-templates-episodes-tile",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.x(e.getPath(!1,["series","title"]),e,{block:s},{}).w("\n")}function s(t,e){return t.w('<a href="').f(e.get(["view_url"],!1),e,"h").w('" class="Td(n) D(b) Cur(p) C(#000) C($m_blue):h C($m_blue):f Mt(15px) Mih(82px)" ').h("rapid_data_attr",e,{},{subsec:"Yahoo View",cpos:a,itc:"1",elm:"img"}).w('><div class="Row"><div class="Fl(start) W(50%) Pos(r)">').h("img",e,{},{src:i,"class":"Pos(r)",alt:d,defer:0,width:145,height:82}).w('<div class="Pos(a) C(#fff) W(28px) H(28px) Bgi($orb) Bgz(ct) B(5px) Start(5px)"><i class="Pos(a) Fz(12px) C(#fff) T(6px) Mstart(11px) Icon-Fp2 IconCorePlay"></i></div></div><div class="Fl(start) W(50%)"><div class="Pstart(8px)"><div class="Fw(b) Fz(13px) Pb(2px)">').f(e.getPath(!1,["series","title"]),e,"h").w('</div><div class="Fz(11px) C(#000) Pb(2px)">').f(e.get(["seasonEpisodeText"],!1),e,"h").w('</div><div class="Fz(11px) C($gray_dark) LineClamp(2,30px)"">').f(e.get(["title"],!1),e,"h").w("</div></div></div></div></a>")}function a(t,e){return t.f(e.get(["cpos"],!1),e,"h")}function i(t,e){return t.f(e.getPath(!1,["image","url"]),e,"h")}function d(t,e){return t.f(e.getPath(!1,["series","title"]),e,"h")}return dust.register("td-applet-yahooview-templates-episodes-tile",e),e.__dustBody=!0,s.__dustBody=!0,a.__dustBody=!0,i.__dustBody=!0,d.__dustBody=!0,e}(),dust.cache["td-applet-yahooview:episodes-tile.dust"]=dust.cache["td-applet-yahooview:episodes-tile"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-yahooview/templates/episodes-tile"]=function(t,s){t=t||{},dust.render(e,t,s)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-yahooview-templates-main",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.x(e.getPath(!1,["uiConfigs","display_heading"]),e,{block:i},{}).x(e.getPath(!1,["videoConfigs","uuid"]),e,{block:d},{}).x(e.get(["data"],!1),e,{block:f},{}).x(e.getPath(!1,["uiConfigs","display_footer"]),e,{block:v},{}).w("\n")}function i(t,e){return t.w('<h2 class="Fz(15px) Fw(b) Mb(7px)"><a href="').f(e.get(["landingUrl"],!1),e,"h").w('" class="Td(n) C(#000)" ').h("rapid_data_attr",e,{},{subsec:"Yahoo View",itc:"0",elm:"hldn"}).w(">").h("i18n_string",e,{},{_key:"YAHOO_VIEW_TITLE"}).w("</a></h2>")}function d(t,e){return t.w('<div class="yahoo-view-video ').x(e.getPath(!1,["uiConfigs","display_heading"]),e,{"else":a,block:n},{}).w('" data-uuid="').f(e.getPath(!1,["videoConfigs","uuid"]),e,"h").w('" data-type="video"><div class="js-video-content"><div class="js-video-target js-video-image Pb(56.25%)" style="background-image:url(').f(e.getPath(!1,["videoConfigs","image"]),e,"h").w(');background-size:cover;"></div></div></div>').x(e.getPath(!1,["videoConfigs","title"]),e,{block:o},{})}function a(t,e){return t.w("Mt(2px)")}function n(t,e){return t.w("Mt(10px)")}function o(t,e){return t.x(e.getPath(!1,["videoConfigs","link"]),e,{"else":s,block:u},{}).f(e.getPath(!1,["videoConfigs","title"]),e,"h").x(e.getPath(!1,["videoConfigs","subtitle"]),e,{block:l},{}).x(e.getPath(!1,["videoConfigs","link"]),e,{"else":_,block:h},{})}function s(t,e){return t.w('<div class="C($link) Fw(500) Td(n) Mt(10px)">')}function u(t,e){return t.w('<a href="').f(e.getPath(!1,["videoConfigs","link"]),e,"h").w('" class="D(b) Cur(p) C($link) C($m_blue):h C($m_blue):f Fw(500) Td(n) Mt(10px)" ').h("rapid_data_attr",e,{},{subsec:"Yahoo View",itc:"0",elm:"video"}).w(">")}function l(t,e){return t.x(e.getPath(!1,["videoConfigs","subtitleLink"]),e,{"else":r,block:c},{})}function r(t,e){return t.w('<div class="Fz(11px) Td(n) C(gray_dark) Fw(n)">').f(e.getPath(!1,["videoConfigs","subtitle"]),e,"h").w("</div>")}function c(t,e){return t.w('<a class="Fz(11px) Td(n) C(gray_dark) C($m_blue):h C($m_blue):f Fw(n)" href="').f(e.getPath(!1,["videoConfigs","subtitleLink"]),e,"h").w('" ').h("rapid_data_attr",e,{},{subsec:"Yahoo View",itc:"0",elm:"attribution"}).w(">").f(e.getPath(!1,["videoConfigs","subtitle"]),e,"h").w("</a>")}function _(t,e){return t.w("</div>")}function h(t,e){return t.w("</a>")}function f(t,e){return t.x(e.getPath(!1,["uiConfigs","display_mode"]),e,{block:g},{})}function g(t,e){return t.w("<div>").s(e.get(["data"],!1),e,{block:w},{}).w("</div>")}function w(t,e){return t.p(p,e,{})}function p(t,e){return t.f(e.getPath(!1,["uiConfigs","display_mode"]),e,"h").w("-tile")}function v(t,e){return t.w('<a href="').f(e.get(["landingUrl"],!1),e,"h").w('" class="D(b) Cur(p) C($link) C($m_blue):h C($m_blue):f Fw(400) Fz(13px) Td(n) Mt(14px)" ').h("rapid_data_attr",e,{},{subsec:"Yahoo View",itc:"0",elm:"more"}).w(">").h("i18n_string",e,{},{_key:"MORE_ON_YAHOO_VIEW"}).w(" »</a>")}return dust.register("td-applet-yahooview-templates-main",e),e.__dustBody=!0,i.__dustBody=!0,d.__dustBody=!0,a.__dustBody=!0,n.__dustBody=!0,o.__dustBody=!0,s.__dustBody=!0,u.__dustBody=!0,l.__dustBody=!0,r.__dustBody=!0,c.__dustBody=!0,_.__dustBody=!0,h.__dustBody=!0,f.__dustBody=!0,g.__dustBody=!0,w.__dustBody=!0,p.__dustBody=!0,v.__dustBody=!0,e}(),dust.cache["td-applet-yahooview:main.dust"]=dust.cache["td-applet-yahooview:main"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-yahooview/templates/main"]=function(t,i){t=t||{},dust.render(e,t,i)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-yahooview-templates-shows-tile",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('<a href="').f(e.get(["view_url"],!1),e,"h").w('" class="Td(n)" ').h("rapid_data_attr",e,{},{subsec:"Yahoo View",cpos:s,itc:"1",elm:"img"}).w(">").h("img",e,{},{src:a,alt:c,"class":d,defer:0,width:145,height:82}).w("</a>\n")}function s(t,e){return t.f(e.get(["cpos"],!1),e,"h")}function a(t,e){return t.f(e.getPath(!1,["image","url"]),e,"h")}function c(t,e){return t.f(e.get(["series_title"],!1),e,"h")}function d(t,e){return t.f(e.get(["extraClasses"],!1),e,"h").w(" Mt(10px)")}return dust.register("td-applet-yahooview-templates-shows-tile",e),e.__dustBody=!0,s.__dustBody=!0,a.__dustBody=!0,c.__dustBody=!0,d.__dustBody=!0,e}(),dust.cache["td-applet-yahooview:shows-tile.dust"]=dust.cache["td-applet-yahooview:shows-tile"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-yahooview/templates/shows-tile"]=function(t,s){t=t||{},dust.render(e,t,s)}},"@VERSION@",{requires:["template-base","dust"]});

}
/*
     FILE ARCHIVED ON 00:21:14 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:40:38 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 230.199
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.059
  cdx.remote: 0.056
  esindex: 0.009
  LoadShardBlock: 101.285 (3)
  PetaboxLoader3.datanode: 139.023 (5)
  load_resource: 168.883 (2)
  PetaboxLoader3.resolve: 115.974 (2)
*/