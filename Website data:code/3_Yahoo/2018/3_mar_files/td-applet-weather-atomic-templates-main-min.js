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

YUI.add("td-applet-weather-atomic-templates-main",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('<div class="D(b)">\n    ').s(e.getPath(!1,["data","weather","weatherDataList"]),e,{block:n},{total_loc:e.getPath(!1,["data","weather","total"]),current_loc:e.getPath(!1,["data","weather","currentLoc"])}).w("\n</div>\n")}function n(t,e){return t.w("\n").nx(e.getPath(!1,["config","fixed_layout"]),e,{block:a},{}).w('\n<ul class="P(0) Mt(0) Mend(0) Cl(b) Td(n) Mb(10px) Mstart(-2px) Ta(j) forecasts forecasts-').f(e.getPath(!1,["location","woeid"]),e,"h").w('">\n        ').s(e.getPath(!1,["forecast","day"]),e,{block:c},{}).w("\n</ul>\n    ")}function a(t,e){return t.w("\n<style>\n    .forecasts::after {\n        content: '';\n        width: 100%;\n        display: inline-block;\n    }\n    \n    .forecasts:after {\n        content: '';\n        width: 100%;\n        display: inline-block;\n    }\n    </style>\n    ")}function c(t,e){return t.w('\n<li class="Pos(r) Ta(c) D(ib) ').x(e.getPath(!1,["config","fixed_layout"]),e,{block:s},{}).w('">\n            <a href="').s(e.get(["link"],!1),e,{block:i},{}).w('" class="C(#000) Td(n)" ').h("rapid_data_attr",e,{},{itc:"0",elm:"itm",elmt:"ct",rspns:"nav"}).w('>\n                <h3 class="Fz(13px) Mb(7px)">').f(e.get(["label"],!1),e,"h").w('</h3>\n                <img class="D(b) M(a)" src="').f(e.getPath(!1,["condition","images","thumb","url"]),e,"h").w('" width="43" height="43" alt="').f(e.getPath(!1,["current","condition","description"]),e,"h").w('" />\n                <span class="Mstart(6px) ').x(e.getPath(!1,["config","fixed_layout"]),e,{"else":o,block:d},{}).w(' Mt(2px)">\n                    <b class="Fz(13px) Fw(b) ').x(e.getPath(!1,["config","fixed_layout"]),e,{"else":r,block:l},{}).w(' Pend(3px)">').f(e.getPath(!1,["temp","high"]),e,"h").w('&#xb0;<b class="Hidden">').f(e.getPath(!1,["temp","unit"]),e,"h").w(" ").h("i18n_string",e,{},{_key:"HIGH"}).w('</b></b>\n                    <b class="Fz(13px) Fw(b) C($temp_low) ').x(e.getPath(!1,["config","fixed_layout"]),e,{"else":u,block:h},{}).w('">').f(e.getPath(!1,["temp","low"]),e,"h").w('&#xb0;<b class="Hidden">').f(e.getPath(!1,["temp","unit"]),e,"h").w(" ").h("i18n_string",e,{},{_key:"LOW"}).w("</b></b>\n                </span>\n            </a>\n        </li>\n        ")}function s(t,e){return t.w("W(24%)")}function i(t,e){return t.f(e.get(["href"],!1),e,"h")}function o(t,e){return t.w("D(tbc)")}function d(t,e){return t.w("D(ib)")}function r(t,e){return t.w("D(tbc)")}function l(t,e){return t.w("D(ib)")}function u(t,e){return t.w("D(tbc)")}function h(t,e){return t.w("D(ib)")}return dust.register("td-applet-weather-atomic-templates-main",e),e.__dustBody=!0,n.__dustBody=!0,a.__dustBody=!0,c.__dustBody=!0,s.__dustBody=!0,i.__dustBody=!0,o.__dustBody=!0,d.__dustBody=!0,r.__dustBody=!0,l.__dustBody=!0,u.__dustBody=!0,h.__dustBody=!0,e}(),dust.cache["td-applet-weather-atomic:main.dust"]=dust.cache["td-applet-weather-atomic:main"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-weather-atomic/templates/main"]=function(t,n){t=t||{},dust.render(e,t,n)}},"@VERSION@",{requires:["template-base","dust"]});

}
/*
     FILE ARCHIVED ON 21:27:23 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:38 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 84.842
  exclusion.robots: 0.226
  exclusion.robots.policy: 0.21
  cdx.remote: 0.103
  esindex: 0.014
  LoadShardBlock: 43.479 (3)
  PetaboxLoader3.datanode: 137.32 (5)
  load_resource: 299.255 (2)
  PetaboxLoader3.resolve: 144.753 (2)
*/