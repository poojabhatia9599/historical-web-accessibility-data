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

YUI.add("td-applet-trending-atomic-templates-partials-categorization_body",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('<ul class="Pos(r) Mt(10px)">\n    <li class="trending-list selected" data-category="slingstone">\n        <ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) Trs($trendTrs)">').s(e.get(["mainTabTerms"],!1),e,{block:i},{}).w("</ul>\n    </li>").s(e.get(["hasCelebrities"],!1),e,{block:s},{}).s(e.get(["hasNews"],!1),e,{block:o},{}).s(e.get(["hasSports"],!1),e,{block:g},{}).w('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="gifts">\n        <ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').s(e.get(["giftsTerms"],!1),e,{block:f},{}).w("</ul>\n    </li></ul>\n")}function i(t,e){return t.w('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').h("lt",e,{block:n},{key:e.get(["$idx"],!1),value:e.getPath(!1,["config","ui","columnSize"])}).w(' ua-ie7_Pend(5px)">\n                <a href="').f(e.get(["link"],!1),e,"h").w('" class="Td(n):h C($link) Ell D(ib)" title="').f(e.get(["text"],!1),e,"h",["s"]).w('" ').h("rapid_data_attr",e,{},{"rapid-base":e.get(["i13n"],!1),elm:"itm",elmt:"topic",itc:"0"}).w('>\n                    <span class="trending-item:h_Bgc($itemColor').f(e.get(["$idx"],!1),e,"h").w(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").f(e.get(["$idx"],!1),e,"h").w(") C($itemColor").f(e.get(["$idx"],!1),e,"h").w(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').h("math",e,{},{key:a,method:"add",operand:"1"}).w('</span><span class="trending-item:h_C($itemColor').f(e.get(["$idx"],!1),e,"h").w(') C($searchTerm) Mstart(2px) Fw(b) Fz(13px)"> ').f(e.get(["text"],!1),e,"h",["s"]).w("</span>\n                </a>\n            </li>")}function n(t,e){return t.w(" Fl(start) Cl(start)")}function a(t,e){return t.f(e.get(["$idx"],!1),e,"h")}function s(t,e){return t.w('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="stars">\n        <ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').s(e.get(["celebrityTerms"],!1),e,{block:r},{}).w("</ul>\n    </li>")}function r(t,e){return t.w('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').h("lt",e,{block:d},{key:e.get(["$idx"],!1),value:e.getPath(!1,["config","ui","columnSize"])}).w(' ua-ie7_Pend(5px)">\n                <a href="').f(e.get(["link"],!1),e,"h").w('" class="Td(n):h C($link) Ell D(ib)" title="').f(e.get(["text"],!1),e,"h",["s"]).w('" ').h("rapid_data_attr",e,{},{"rapid-base":e.get(["i13n"],!1),elm:"itm",elmt:"topic",itc:"0"}).w('>\n                    <span class="trending-item:h_Bgc($itemColor').f(e.get(["$idx"],!1),e,"h").w(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").f(e.get(["$idx"],!1),e,"h").w(") C($itemColor").f(e.get(["$idx"],!1),e,"h").w(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').h("math",e,{},{key:l,method:"add",operand:"1"}).w('</span><span class="trending-item:h_C($itemColor').f(e.get(["$idx"],!1),e,"h").w(') C($searchTerm) Mstart(2px) Fw(b)"> ').f(e.get(["text"],!1),e,"h",["s"]).w("</span>\n                </a>\n            </li>")}function d(t,e){return t.w(" Fl(start) Cl(start)")}function l(t,e){return t.f(e.get(["$idx"],!1),e,"h")}function o(t,e){return t.w('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="news">\n        <ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').s(e.get(["newsTerms"],!1),e,{block:c},{}).w("</ul>\n    </li>")}function c(t,e){return t.w('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').h("lt",e,{block:u},{key:e.get(["$idx"],!1),value:e.getPath(!1,["config","ui","columnSize"])}).w(' ua-ie7_Pend(5px)">\n                <a href="').f(e.get(["link"],!1),e,"h").w('" class="Td(n):h C($link) Ell D(ib)" title="').f(e.get(["text"],!1),e,"h",["s"]).w('" ').h("rapid_data_attr",e,{},{"rapid-base":e.get(["i13n"],!1),elm:"itm",elmt:"topic",itc:"0"}).w('>\n                    <span class="trending-item:h_Bgc($itemColor').f(e.get(["$idx"],!1),e,"h").w(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").f(e.get(["$idx"],!1),e,"h").w(") C($itemColor").f(e.get(["$idx"],!1),e,"h").w(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').h("math",e,{},{key:h,method:"add",operand:"1"}).w('</span><span class="trending-item:h_C($itemColor').f(e.get(["$idx"],!1),e,"h").w(') C($searchTerm) Mstart(2px) Fw(b)"> ').f(e.get(["text"],!1),e,"h",["s"]).w("</span>\n                </a>\n            </li>")}function u(t,e){return t.w(" Fl(start) Cl(start)")}function h(t,e){return t.f(e.get(["$idx"],!1),e,"h")}function g(t,e){return t.w('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="sports">\n        <ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').s(e.get(["sportsTerms"],!1),e,{block:p},{}).w("</ul>\n    </li>")}function p(t,e){return t.w('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').h("lt",e,{block:_},{key:e.get(["$idx"],!1),value:e.getPath(!1,["config","ui","columnSize"])}).w(' ua-ie7_Pend(5px)">\n                <a href="').f(e.get(["link"],!1),e,"h").w('" class="Td(n):h C($link) Ell D(ib)" title="').f(e.get(["text"],!1),e,"h",["s"]).w('" ').h("rapid_data_attr",e,{},{"rapid-base":e.get(["i13n"],!1),elm:"itm",elmt:"topic",itc:"0"}).w('>\n                    <span class="trending-item:h_Bgc($itemColor').f(e.get(["$idx"],!1),e,"h").w(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").f(e.get(["$idx"],!1),e,"h").w(") C($itemColor").f(e.get(["$idx"],!1),e,"h").w(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').h("math",e,{},{key:m,method:"add",operand:"1"
}).w('</span><span class="trending-item:h_C($itemColor').f(e.get(["$idx"],!1),e,"h").w(') C($searchTerm) Mstart(2px) Fw(b)"> ').f(e.get(["text"],!1),e,"h",["s"]).w("</span>\n                </a>\n            </li>")}function _(t,e){return t.w(" Fl(start) Cl(start)")}function m(t,e){return t.f(e.get(["$idx"],!1),e,"h")}function f(t,e){return t.w('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').h("lt",e,{block:w},{key:e.get(["$idx"],!1),value:e.getPath(!1,["config","ui","columnSize"])}).w(' ua-ie7_Pend(5px)">\n                <a href="').f(e.get(["link"],!1),e,"h").w('" class="Td(n):h C($link) Ell D(ib)" title="').f(e.get(["text"],!1),e,"h",["s"]).w('" ').h("rapid_data_attr",e,{},{"rapid-base":e.get(["i13n"],!1),elm:"itm",elmt:"topic",itc:"0"}).w('>\n                    <span class="trending-item:h_Bgc($itemColor').f(e.get(["$idx"],!1),e,"h").w(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").f(e.get(["$idx"],!1),e,"h").w(") C($itemColor").f(e.get(["$idx"],!1),e,"h").w(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').h("math",e,{},{key:x,method:"add",operand:"1"}).w('</span><span class="trending-item:h_C($itemColor').f(e.get(["$idx"],!1),e,"h").w(') C($searchTerm) Mstart(2px) Fw(b)"> ').f(e.get(["text"],!1),e,"h",["s"]).w("</span>\n                </a>\n            </li>")}function w(t,e){return t.w(" Fl(start) Cl(start)")}function x(t,e){return t.f(e.get(["$idx"],!1),e,"h")}return dust.register("td-applet-trending-atomic-templates-partials-categorization_body",e),e.__dustBody=!0,i.__dustBody=!0,n.__dustBody=!0,a.__dustBody=!0,s.__dustBody=!0,r.__dustBody=!0,d.__dustBody=!0,l.__dustBody=!0,o.__dustBody=!0,c.__dustBody=!0,u.__dustBody=!0,h.__dustBody=!0,g.__dustBody=!0,p.__dustBody=!0,_.__dustBody=!0,m.__dustBody=!0,f.__dustBody=!0,w.__dustBody=!0,x.__dustBody=!0,e}(),dust.cache["td-applet-trending-atomic:partials/categorization_body.dust"]=dust.cache["td-applet-trending-atomic:partials/categorization_body"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-trending-atomic/templates/partials/categorization_body"]=function(t,i){t=t||{},dust.render(e,t,i)}},"@VERSION@",{requires:["template-base","dust"]});

}
/*
     FILE ARCHIVED ON 21:27:25 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:05 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 756.144
  exclusion.robots: 0.121
  exclusion.robots.policy: 0.112
  cdx.remote: 0.051
  esindex: 0.008
  LoadShardBlock: 700.831 (3)
  PetaboxLoader3.datanode: 751.191 (5)
  load_resource: 191.113 (2)
  PetaboxLoader3.resolve: 74.368 (2)
*/