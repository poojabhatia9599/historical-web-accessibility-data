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

YUI.add("td-applet-weather-atomic-templates-main",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,n){return e.write('<div class="D(b)">').write("\n    ").section(n.getPath(!1,["data","weather","weatherDataList"]),n,{block:t},{total_loc:n.getPath(!1,["data","weather","total"]),current_loc:n.getPath(!1,["data","weather","currentLoc"])}).write("\n").write("</div>").write("\n")}function t(e,t){return e.write("\n    ").notexists(t.getPath(!1,["config","fixed_layout"]),t,{block:n},null).write("\n    ").write('<ul class="P(0) Mt(0) Mend(0) Cl(b) Td(n) Mb(10px) Mstart(-2px) Ta(j) forecasts forecasts-').reference(t.getPath(!1,["location","woeid"]),t,"h").write('">').write("\n        ").section(t.getPath(!1,["forecast","day"]),t,{block:r},null).write("\n    ").write("</ul>").write("\n    ")}function n(e,t){return e.write("\n    ").write("<style>").write("\n    ").write(".forecasts::after {").write("\n        ").write("content: '';").write("\n        ").write("width: 100%;").write("\n        ").write("display: inline-block;").write("\n    ").write("}").write("\n    ").write("\n    ").write(".forecasts:after {").write("\n        ").write("content: '';").write("\n        ").write("width: 100%;").write("\n        ").write("display: inline-block;").write("\n    ").write("}").write("\n    ").write("</style>").write("\n    ")}function r(e,t){return e.write("\n         ").write('<li class="Pos(r) Ta(c) D(ib) ').exists(t.getPath(!1,["config","fixed_layout"]),t,{block:i},null).write('">').write("\n            ").write('<a href="').section(t.get("link"),t,{block:s},null).write('" class="C(#000) Td(n)" ').helper("rapid_data_attr",t,{},{itc:"0",elm:"itm",elmt:"ct",rspns:"nav"}).write(">").write("\n                ").write('<h3 class="Fz(13px) Mb(7px)">').reference(t.get("label"),t,"h").write("</h3>").write("\n                ").write('<img class="D(b) M(a)" src="').reference(t.getPath(!1,["condition","images","thumb","url"]),t,"h").write('" width="43" height="43" alt="').reference(t.getPath(!1,["current","condition","description"]),t,"h").write('" />').write("\n                ").write('<span class="Mstart(6px) ').exists(t.getPath(!1,["config","fixed_layout"]),t,{"else":o,block:u},null).write(' Mt(2px)">').write("\n                    ").write('<b class="Fz(13px) Fw(b) ').exists(t.getPath(!1,["config","fixed_layout"]),t,{"else":a,block:f},null).write(' Pend(3px)">').reference(t.getPath(!1,["temp","high"]),t,"h").write('&#xb0;<b class="Hidden">').reference(t.getPath(!1,["temp","unit"]),t,"h").write(" ").helper("i18n_string",t,{},{_key:"HIGH"}).write("</b></b>").write("\n                    ").write('<b class="Fz(13px) Fw(b) C($temp_low) ').exists(t.getPath(!1,["config","fixed_layout"]),t,{"else":l,block:c},null).write('">').reference(t.getPath(!1,["temp","low"]),t,"h").write('&#xb0;<b class="Hidden">').reference(t.getPath(!1,["temp","unit"]),t,"h").write(" ").helper("i18n_string",t,{},{_key:"LOW"}).write("</b></b>").write("\n                ").write("</span>").write("\n            ").write("</a>").write("\n        ").write("</li>").write("\n        ")}function i(e,t){return e.write("W(24%)")}function s(e,t){return e.reference(t.get("href"),t,"h")}function o(e,t){return e.write("D(tbc)")}function u(e,t){return e.write("D(ib)")}function a(e,t){return e.write("D(tbc)")}function f(e,t){return e.write("D(ib)")}function l(e,t){return e.write("D(tbc)")}function c(e,t){return e.write("D(ib)")}return dust.register("td-applet-weather-atomic-templates-main",e),e}()}(),dust.cache["td-applet-weather-atomic:main.dust"]=dust.cache["td-applet-weather-atomic:main"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-weather-atomic/templates/main"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});


}
/*
     FILE ARCHIVED ON 00:38:08 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:34 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 72.199
  exclusion.robots: 0.188
  exclusion.robots.policy: 0.174
  cdx.remote: 0.103
  esindex: 0.013
  LoadShardBlock: 35.13 (3)
  PetaboxLoader3.datanode: 60.501 (5)
  load_resource: 124.415 (2)
  PetaboxLoader3.resolve: 82.837 (2)
*/