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

YUI.add("td-applet-breakingnews-atomic-templates-feature",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,n){return e.section(n.get("data"),n,{block:t},null).write("\n")}function t(e,t){return e.write("\n    ").write('<div class="Bdrs(2px) Fz-m Mb(22px) C(#fff) feature-bar').exists(t.get("featExtend"),t,{block:n},null).write(" ").reference(t.getPath(!1,["config","class","bg"]),t,"h").write('">').exists(t.get("hl_link_href"),t,{"else":r,block:i},null).write('class="Pos(r) Ov(h) C(#fff) D(b)  Td(n):h ').exists(t.get("featExtend"),t,{"else":f,block:h},null).exists(t.get("main_image"),t,{block:v},null).exists(t.get("hl_link_href"),t,{block:m},null).exists(t.getPath(!1,["config","viewer"]),t,{block:g},null).write('" ').exists(t.get("hosted"),t,{block:y},null).write(" ").exists(t.get("cauuid"),t,{block:b},null).write(' data-uuid-list="true">').exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:w},null).exists(t.get("prefix"),t,{block:E},null).exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:k},null).write('<div class="Whs(n) Va(m) D(ib) Maw(740px) ').exists(t.get("featExtend"),t,{block:L},null).write('"><h2 class="Whs(nw) Ov(h) Tov(e) feat-bar:h_Td(u) ').exists(t.get("featExtend"),t,{"else":M,block:_},null).exists(t.get("sub_heading"),t,{block:D},null).write('">').reference(t.get("hl_text"),t,"h").write("</h2>").exists(t.get("sub_heading"),t,{block:P},null).write("</div>").exists(t.getPath(!1,["main_image","0","url"]),t,{"else":H,block:R},null).exists(t.get("hl_link_href"),t,{"else":W,block:X},null).write("</div>").exists(t.get("featExtend"),t,{block:V},null).write("\n")}function n(e,t){return e.write(" Miw(1060px)")}function r(e,t){return e.write("<div ")}function i(e,t){return e.write('<a href="').reference(t.get("hl_link_href"),t,"h").write('" ').helper("rapid_data_attr",t,{},{subsec:s,slk:o,itc:"0",cpos:"1",pos:"1",g:u,elm:a}).write(" ")}function s(e,t){return e.reference(t.get("prefix"),t,"h")}function o(e,t){return e.reference(t.get("hl_text"),t,"h")}function u(e,t){return e.reference(t.get("cauuid"),t,"h")}function a(e,t){return e.reference(t.get("bg_color"),t,"h")}function f(e,t){return e.exists(t.getPath(!1,["config","subscribeBtn"]),t,{"else":l,block:c},null)}function l(e,t){return e.write("P(12px) ")}function c(e,t){return e.write("Px(12px) Py(4px) ")}function h(e,t){return e.write("Whs(nw) Px(15px) Pstart(0) ").exists(t.get("sub_heading"),t,{"else":p,block:d},null).write(" ")}function p(e,t){return e.write("Py(10px) ")}function d(e,t){return e.write("Py(8px) ")}function v(e,t){return e.write("Pend(11em) ")}function m(e,t){return e.write("feat-bar ")}function g(e,t){return e.write("js-content-title js-content-viewer rapid-noclick-resp rapidnofollow ")}function y(e,t){return e.write('data-hosted="').reference(t.get("hosted"),t,"h").write('"')}function b(e,t){return e.write('data-uuid="').reference(t.get("cauuid"),t,"h").write('"')}function w(e,t){return e.write('<div class="D(tb) Mih(35px)"><div class="D(tbr)">')}function E(e,t){return e.exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:S},null).write('<span class="Whs(nw) Va(m) D(ib) Fw(b) D(ib) ').exists(t.get("featExtend"),t,{"else":x,block:T},null).write('">').reference(t.get("prefix"),t,"h").notexists(t.get("featExtend"),t,{block:N},null).write("</span>").exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:C},null)}function S(e,t){return e.write('<div class="D(tbc) Va(m)">')}function x(e,t){return e.write("Fz(15px)")}function T(e,t){return e.write("Lh(1.2) Fz(19px) Px(20px) Pb(4px) ")}function N(e,t){return e.write(":&nbsp;")}function C(e,t){return e.write("</div>")}function k(e,t){return e.write('<div class="D(tbc) W(100%) Va(m)">')}function L(e,t){return e.write("Bdstarts(s) Bdstartw(1px) Bdstartc($borderTrans) ").exists(t.get("sub_heading"),t,{"else":A,block:O},null)}function A(e,t){return e.write("P(16px) ")}function O(e,t){return e.write("Px(20px) Mb(10px) Mt(8px) ")}function M(e,t){return e.write("Fz(15px) Fw(n) ")}function _(e,t){return e.write("Fz(19px) ")}function D(e,t){return e.write("Mb(2px) ")}function P(e,t){return e.write('<p class="Whs(nw) Ov(h) Tov(e)">').reference(t.get("sub_heading"),t,"h").write("</p>")}function H(e,t){return e.exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:B},null)}function B(e,t){return e.exists(t.getPath(!1,["config","viewer"]),t,{block:j},null).write("</div></div>")}function j(e,t){return e.write('</div><div class="D(tbc) Va(m) Miw(130px)"><button class="js-push-subscribe manualtrackpromo Pos(r) T(0) H(28.5px) W(130px) End(0) Pstart(12px) Py(0) Fz(15px) D(n) display-push-promos_D(ib) Bds(s) Bdw(1px) Bdrs(2px) Bgc(#fff) ').exists(t.get("sub_heading"),t,{"else":F,block:I},null).write('" data-ylk="sec:featurebar;slk:').helper("intlMessage",t,{},{_key:"GET_ALERTS"}).write(';elm:btn;itc:1;" data-subscription-topic="gondor_homerun_news" data-subscription-ylk="sec:featurebar;slk:').helper("intlMessage",t,{},{_key:"GET_ALERTS"}).write(";aid:").helper("intlMessage",t,{},{_key:"GET_ALERTS"}).write(';elm:btn;itc:1;t1:a3;t2:bn" title="').helper("intlMessage",t,{},{_key:"GET_BREAKING_NEWS_ALERTS"}).write('" aria-label="').helper("intlMessage",t,{},{_key:"GET_BREAKING_NEWS_ALERTS"}).write('"><i class="C($bellIconColor').reference(t.getPath(!1,["config","colorIndex"]),t,"h").write(") Icon-Fp2 IconBell Mend(10px) ").exists(t.get("sub_heading"),t,{block:q},null).write('"></i><span class="Va(tt) Fz(12px) Fw(500) Ta(c) C($bellTextColor').reference(t.getPath(!1,["config","colorIndex"]),t,"h").write(')">').helper("intlMessage",t,{},{_key:"GET_ALERTS"}).write("</span></button></div>")}function F(e,t){return e.write("Pend(12px) ")}function I(e,t){return e.write("Pend(20px) ")}function q(e,t){return e.write("Fz(18px) ")}function R(e,t){return e.exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:U},null).write('<img src="').reference(t.getPath(!1,["main_image","0","url"]),t,"h").write('" class="Pos(a) T(0) H(100%) Bdrstend(2px) Bdrsbend(2px) End(0)" alt="">'
).exists(t.getPath(!1,["config","subscribeBtn"]),t,{block:z},null)}function U(e,t){return e.write('</div><div class="D(tbc) Va(m) Miw(130px)">')}function z(e,t){return e.write("</div></div></div>")}function W(e,t){return e.write("</div>")}function X(e,t){return e.write("</a>")}function V(e,t){return e.write("\n    ").write('<script type="text/javascript">').write("\n        ").write('document.documentElement.className += " feature-bar";').write("\n    ").write("</script>")}return dust.register("td-applet-breakingnews-atomic-templates-feature",e),e}()}(),dust.cache["td-applet-breakingnews-atomic:feature.dust"]=dust.cache["td-applet-breakingnews-atomic:feature"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-breakingnews-atomic/templates/feature"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});
YUI.add("td-applet-breakingnews-atomic-templates-main",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,n){return e.section(n.get("data"),n,{block:t},null).write("\n")}function t(e,t){return e.write("\n    ").write('<div class="P(12px) Bdrs(2px) Pstart(17px) Fz-m Mb(22px) C(#fff) breakingnews ').reference(t.getPath(!1,["config","class","bg"]),t,"h").write('">').write("\n        ").exists(t.get("prefix"),t,{block:n},null).write("\n        ").exists(t.get("hl_link_href"),t,{"else":r,block:i},null).write("\n        ").exists(t.get("more_link_text"),t,{block:s},null).write("\n    ").write("</div>").write("\n")}function n(e,t){return e.write("\n            ").write('<span class="Fw(b) Fz(15px)">').reference(t.get("prefix"),t,"h").write(":</span>").write("\n        ")}function r(e,t){return e.write("\n            ").write("<span>").reference(t.get("hl_text"),t,"h").write("</span>").write("\n        ")}function i(e,t){return e.write("\n            ").write('<a href="').reference(t.get("hl_link_href"),t,"h").write('" class="C(#fff)">').reference(t.get("hl_text"),t,"h").write("</a>").write("\n        ")}function s(e,t){return e.write("\n            ").exists(t.getPath(!1,["more_link","href"]),t,{"else":o,block:u},null).write("\n        ")}function o(e,t){return e.write("\n                ").write("<span>").reference(t.get("more_link_text"),t,"h").write("</span>").write("\n            ")}function u(e,t){return e.write("\n                ").write('<a href="').reference(t.getPath(!1,["more_link","href"]),t,"h").write('" class="C(#fff)">').reference(t.get("more_link_text"),t,"h").write("</a>").write("\n            ")}return dust.register("td-applet-breakingnews-atomic-templates-main",e),e}()}(),dust.cache["td-applet-breakingnews-atomic:main.dust"]=dust.cache["td-applet-breakingnews-atomic:main"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-breakingnews-atomic/templates/main"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});
YUI.add("td-applet-breakingnews-atomic-templates-smartphone",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,n){return e.section(n.get("data"),n,{block:t},null)}function t(e,t){return e.write("\n    ").write('<div class="P(12px) Pstart(17px) Fz-m Mb(4px) C(#fff) feature-bar ').reference(t.getPath(!1,["config","class","bg"]),t,"h").write('">').write("\n        ").exists(t.get("prefix"),t,{block:n},null).write("\n        ").exists(t.get("hl_link_href"),t,{"else":r,block:i},null).write("\n        ").exists(t.get("more_link_text"),t,{block:s},null).write("\n    ").write("</div>").write("\n")}function n(e,t){return e.write("\n            ").write('<span class="Fw(b) Fz(15px)">').reference(t.get("prefix"),t,"h").write(":</span>").write("\n        ")}function r(e,t){return e.write("\n            ").write("<span>").reference(t.get("hl_text"),t,"h").write("</span>").write("\n        ")}function i(e,t){return e.write("\n            ").write('<a href="').reference(t.get("hl_link_href"),t,"h").write('" class="C(#fff)">').reference(t.get("hl_text"),t,"h").write("</a>").write("\n        ")}function s(e,t){return e.write("\n            ").exists(t.getPath(!1,["more_link","href"]),t,{"else":o,block:u},null).write("\n        ")}function o(e,t){return e.write("\n                ").write("<span>").reference(t.get("more_link_text"),t,"h").write("</span>").write("\n            ")}function u(e,t){return e.write("\n                ").write('<a href="').reference(t.getPath(!1,["more_link","href"]),t,"h").write('" class="C(#fff)">').reference(t.get("more_link_text"),t,"h").write("</a>").write("\n            ")}return dust.register("td-applet-breakingnews-atomic-templates-smartphone",e),e}()}(),dust.cache["td-applet-breakingnews-atomic:smartphone.dust"]=dust.cache["td-applet-breakingnews-atomic:smartphone"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-breakingnews-atomic/templates/smartphone"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});
YUI.add("td-breakingnews-model",function(e,t){"use strict";var n=["winter","spring","summer","fall"];e.namespace("TD.Breakingnews").Model=e.Base.create("TDBreakingnewsModel",e.Model,[e.Af.Sync],{resource:"breakingnews",readonly:!0,idAttribute:"season",initializer:function(e){}},{ATTRS:{season:{}}})},"@VERSION@",{requires:["model","af-sync"]});


}
/*
     FILE ARCHIVED ON 00:49:50 Mar 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:36:29 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 83.161
  exclusion.robots: 0.114
  exclusion.robots.policy: 0.106
  cdx.remote: 0.052
  esindex: 0.009
  LoadShardBlock: 39.652 (3)
  PetaboxLoader3.datanode: 295.97 (5)
  load_resource: 421.792 (2)
  PetaboxLoader3.resolve: 155.937 (2)
*/