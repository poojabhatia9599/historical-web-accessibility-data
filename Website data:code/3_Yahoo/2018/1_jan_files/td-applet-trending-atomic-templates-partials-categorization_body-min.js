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

YUI.add("td-applet-trending-atomic-templates-partials-categorization_body",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,n){return e.write('<ul class="Pos(r) Mt(10px)">').write("\n    ").write('<li class="trending-list selected" data-category="slingstone">').write("\n        ").write('<ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) Trs($trendTrs)">').section(n.get("mainTabTerms"),n,{block:t},null).write("</ul>").write("\n    ").write("</li>").section(n.get("hasCelebrities"),n,{block:i},null).section(n.get("hasNews"),n,{block:a},null).section(n.get("hasSports"),n,{block:h},null).write('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="gifts">').write("\n        ").write('<ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').section(n.get("giftsTerms"),n,{block:m},null).write("</ul>").write("\n    ").write("</li></ul>").write("\n")}function t(e,t){return e.write('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').helper("lt",t,{block:n},{key:t.get("$idx"),value:t.getPath(!1,["config","ui","columnSize"])}).write(' ua-ie7_Pend(5px)">').write("\n                ").write('<a href="').reference(t.get("link"),t,"h").write('" class="Td(n):h C($link) Ell D(ib)" title="').reference(t.get("text"),t,"h",["s"]).write('" ').helper("rapid_data_attr",t,{},{"rapid-base":t.get("i13n"),elm:"itm",elmt:"topic",itc:"0"}).write(">").write("\n                    ").write('<span class="trending-item:h_Bgc($itemColor').reference(t.get("$idx"),t,"h").write(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").reference(t.get("$idx"),t,"h").write(") C($itemColor").reference(t.get("$idx"),t,"h").write(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').helper("math",t,{},{key:r,method:"add",operand:"1"}).write('</span><span class="trending-item:h_C($itemColor').reference(t.get("$idx"),t,"h").write(') C($searchTerm) Mstart(2px) Fw(b) Fz(13px)"> ').reference(t.get("text"),t,"h",["s"]).write("</span>").write("\n                ").write("</a>").write("\n            ").write("</li>")}function n(e,t){return e.write(" Fl(start) Cl(start)")}function r(e,t){return e.reference(t.get("$idx"),t,"h")}function i(e,t){return e.write('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="stars">').write("\n        ").write('<ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').section(t.get("celebrityTerms"),t,{block:s},null).write("</ul>").write("\n    ").write("</li>")}function s(e,t){return e.write('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').helper("lt",t,{block:o},{key:t.get("$idx"),value:t.getPath(!1,["config","ui","columnSize"])}).write(' ua-ie7_Pend(5px)">').write("\n                ").write('<a href="').reference(t.get("link"),t,"h").write('" class="Td(n):h C($link) Ell D(ib)" title="').reference(t.get("text"),t,"h",["s"]).write('" ').helper("rapid_data_attr",t,{},{"rapid-base":t.get("i13n"),elm:"itm",elmt:"topic",itc:"0"}).write(">").write("\n                    ").write('<span class="trending-item:h_Bgc($itemColor').reference(t.get("$idx"),t,"h").write(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").reference(t.get("$idx"),t,"h").write(") C($itemColor").reference(t.get("$idx"),t,"h").write(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').helper("math",t,{},{key:u,method:"add",operand:"1"}).write('</span><span class="trending-item:h_C($itemColor').reference(t.get("$idx"),t,"h").write(') C($searchTerm) Mstart(2px) Fw(b)"> ').reference(t.get("text"),t,"h",["s"]).write("</span>").write("\n                ").write("</a>").write("\n            ").write("</li>")}function o(e,t){return e.write(" Fl(start) Cl(start)")}function u(e,t){return e.reference(t.get("$idx"),t,"h")}function a(e,t){return e.write('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="news">').write("\n        ").write('<ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').section(t.get("newsTerms"),t,{block:f},null).write("</ul>").write("\n    ").write("</li>")}function f(e,t){return e.write('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').helper("lt",t,{block:l},{key:t.get("$idx"),value:t.getPath(!1,["config","ui","columnSize"])}).write(' ua-ie7_Pend(5px)">').write("\n                ").write('<a href="').reference(t.get("link"),t,"h").write('" class="Td(n):h C($link) Ell D(ib)" title="').reference(t.get("text"),t,"h",["s"]).write('" ').helper("rapid_data_attr",t,{},{"rapid-base":t.get("i13n"),elm:"itm",elmt:"topic",itc:"0"}).write(">").write("\n                    ").write('<span class="trending-item:h_Bgc($itemColor').reference(t.get("$idx"),t,"h").write(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").reference(t.get("$idx"),t,"h").write(") C($itemColor").reference(t.get("$idx"),t,"h").write(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').helper("math",t,{},{key:c,method:"add",operand:"1"}).write('</span><span class="trending-item:h_C($itemColor').reference(t.get("$idx"),t,"h").write(') C($searchTerm) Mstart(2px) Fw(b)"> ').reference(t.get("text"),t,"h",["s"]).write("</span>").write("\n                ").write("</a>").write("\n            ").write("</li>")}function l(e,t){return e.write(" Fl(start) Cl(start)")}function c(e,t){return e.reference(t.get("$idx"),t,"h")}function h(e,t){return e.write('<li class="trending-list blur Pos(a) T(0) W(100%)" data-category="sports">').write("\n        ").write('<ul class="M(0) ua-ie8_W(100%) ua-ie7_W(100%) blur_V(h) blur_Op(0) selected_Op(1) blur_H(0) Ov(h) Trs($trendTrs)">').section(t.get("sportsTerms"),t,{block:p},null).write("</ul>").write("\n    ").write("</li>")}function p(e,t){return e.write('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').helper("lt",t,{block:d},{key:t.get("$idx"),
value:t.getPath(!1,["config","ui","columnSize"])}).write(' ua-ie7_Pend(5px)">').write("\n                ").write('<a href="').reference(t.get("link"),t,"h").write('" class="Td(n):h C($link) Ell D(ib)" title="').reference(t.get("text"),t,"h",["s"]).write('" ').helper("rapid_data_attr",t,{},{"rapid-base":t.get("i13n"),elm:"itm",elmt:"topic",itc:"0"}).write(">").write("\n                    ").write('<span class="trending-item:h_Bgc($itemColor').reference(t.get("$idx"),t,"h").write(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").reference(t.get("$idx"),t,"h").write(") C($itemColor").reference(t.get("$idx"),t,"h").write(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').helper("math",t,{},{key:v,method:"add",operand:"1"}).write('</span><span class="trending-item:h_C($itemColor').reference(t.get("$idx"),t,"h").write(') C($searchTerm) Mstart(2px) Fw(b)"> ').reference(t.get("text"),t,"h",["s"]).write("</span>").write("\n                ").write("</a>").write("\n            ").write("</li>")}function d(e,t){return e.write(" Fl(start) Cl(start)")}function v(e,t){return e.reference(t.get("$idx"),t,"h")}function m(e,t){return e.write('<li class="trending-item Pt(7px) D(ib) Bxz(bb) W(50%) ').helper("lt",t,{block:g},{key:t.get("$idx"),value:t.getPath(!1,["config","ui","columnSize"])}).write(' ua-ie7_Pend(5px)">').write("\n                ").write('<a href="').reference(t.get("link"),t,"h").write('" class="Td(n):h C($link) Ell D(ib)" title="').reference(t.get("text"),t,"h",["s"]).write('" ').helper("rapid_data_attr",t,{},{"rapid-base":t.get("i13n"),elm:"itm",elmt:"topic",itc:"0"}).write(">").write("\n                    ").write('<span class="trending-item:h_Bgc($itemColor').reference(t.get("$idx"),t,"h").write(") trending-item:h_C(#fff) trending-item:h_Bdc($itemColor").reference(t.get("$idx"),t,"h").write(") C($itemColor").reference(t.get("$idx"),t,"h").write(') Fz(11px) Lh(17px) D(ib) W(1.5em) Ta(c) Bdrs(18px) Bd Bdw(1px)">').helper("math",t,{},{key:y,method:"add",operand:"1"}).write('</span><span class="trending-item:h_C($itemColor').reference(t.get("$idx"),t,"h").write(') C($searchTerm) Mstart(2px) Fw(b)"> ').reference(t.get("text"),t,"h",["s"]).write("</span>").write("\n                ").write("</a>").write("\n            ").write("</li>")}function g(e,t){return e.write(" Fl(start) Cl(start)")}function y(e,t){return e.reference(t.get("$idx"),t,"h")}return dust.register("td-applet-trending-atomic-templates-partials-categorization_body",e),e}()}(),dust.cache["td-applet-trending-atomic:partials/categorization_body.dust"]=dust.cache["td-applet-trending-atomic:partials/categorization_body"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-trending-atomic/templates/partials/categorization_body"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});


}
/*
     FILE ARCHIVED ON 00:38:05 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:42:56 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 774.339
  exclusion.robots: 0.099
  exclusion.robots.policy: 0.09
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 750.847 (3)
  PetaboxLoader3.datanode: 752.979 (5)
  load_resource: 152.386 (2)
  PetaboxLoader3.resolve: 102.814 (2)
*/