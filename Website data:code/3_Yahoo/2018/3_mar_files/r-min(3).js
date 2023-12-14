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

YUI.add("td-applet-specialevent-electionmap",function(e,t){"use strict";e.namespace("TD.Applet").SpecialEventElectionMap=e.Base.create("TDAppletSpecialEventElectionMap",e.Af.AppletView,[],{initializer:function(t){return this.interval=parseInt(t.autoRefreshInterval,10),this.interval>0&&e.later(this.interval,this,this.refreshMap,t,!0)},refreshMap:function(e){var t=this.get("container"),i=t.one(".election-img"),a=Math.floor(Date.now()/this.interval);i&&e.url&&i.setAttribute("src",e.url+"?cachebust="+a)}})},"@VERSION@",{requires:["af-applet-view"]});YUI.add("td-applet-specialevent-templates-electionmap",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(e){function t(e,t){return e.x(t.get(["clickurl"],!1),t,{block:n},{}).w("\n").x(t.get(["headerurl"],!1),t,{block:c},{}).w("\n").x(t.get(["url"],!1),t,{block:s},{}).w("\n").x(t.get(["clickurl"],!1),t,{block:u},{}).w("\n").x(t.get(["refreshRateSecs"],!1),t,{block:l},{}).w("\n")}function n(e,t){return e.w('\n<a class="Td(n):h D(b) Ov(h)" href="').f(t.get(["clickurl"],!1),t,"h").w('" ').h("rapid_data_attr",t,{},{"rapid-base":t.get(["i13n"],!1),elm:"img",elmt:"map",itc:"1"}).w(">\n")}function c(e,t){return e.w('\n<img class="Trsdu(.42s) D(b) Mt(10px) W(100%)" alt="Live Election Results" title="Live Election Results" src="').f(t.get(["headerurl"],!1),t,"h").w('">\n    ')}function s(e,t){return e.w('\n<img class="D(b) W(100%) election-img" title="Live Election Results" src="').f(t.get(["url"],!1),t,"h").w('">\n')}function u(e,t){return e.w("\n</a>\n")}function l(e,t){return e.w("\n").h("gt",t,{block:a},{key:t.get(["refreshRateSecs"],!1),value:0}).w("\n")}function a(e,t){return e.w('\n<div class="Ta(end) C($gray) Mb(20px)">Results update every ').h("select",t,{block:r},{key:t.get(["refreshRateSecs"],!1)}).w("</div>\n")}function r(e,t){return e.w("\n").h("gt",t,{block:d},{value:119}).w("\n").h("lt",t,{block:i},{value:60}).w("\n").h("gt",t,{block:o},{value:59}).w("\n")}function d(e,t){return e.w("\n").f(t.get(["refreshRateMin"],!1),t,"h").w(" minutes\n        ")}function i(e,t){return e.w("\n").f(t.get(["refreshRateSecs"],!1),t,"h").w(" seconds\n        ")}function o(e,t){return e.w("\n").f(t.get(["refreshRateMin"],!1),t,"h").w(" minute\n        ")}return dust.register("td-applet-specialevent-templates-electionmap",t),t.__dustBody=!0,n.__dustBody=!0,c.__dustBody=!0,s.__dustBody=!0,u.__dustBody=!0,l.__dustBody=!0,a.__dustBody=!0,r.__dustBody=!0,d.__dustBody=!0,i.__dustBody=!0,o.__dustBody=!0,t}(),dust.cache["td-applet-specialevent:electionmap.dust"]=dust.cache["td-applet-specialevent:electionmap"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-specialevent/templates/electionmap"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-specialevent-templates-medalcount",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(e){function t(e,t){return e.w('<h2><a href="').f(t.getPath(!1,["config","url"]),t,"h").w('"><img src="https://web.archive.org/web/20180301004948/https://s.yimg.com/cv/api/default/20180206/300x50.png" style="width:100%;" alt="').h("intlMessage",t,{},{_key:"TITLE"}).w('"/><u style="top:0;bottom:0;left:0;right:0;position:absolute;z-index:1;"></u></a></h2>\n<ul class="chartlist Mb(30px)" style="margin-top:20px;">\n    ').s(t.get(["data"],!1),t,{block:l},{}).w("\n</ul>\n")}function l(e,t){return e.w('\n<li style="position:relative;">\n        <div style="float:left;">\n            <img src="https://web.archive.org/web/20180301004948/https://s.yimg.com/os/sp/oly/flags/64x42/').f(t.get(["country_code"],!1),t,"h").w('.png" style="height:21px;"/>\n            <h4 style="display:inline;font-size:12px;font-weight:500;">').f(t.get(["abbreviation"],!1),t,"h").w('</h4>\n        </div>\n        <div style="padding-left:80px;">\n            <h5 class="index" style="display:table;margin:.55em 0;width:100%;">\n                <span style="width:').f(t.get(["gold_percent"],!1),t,"h").w('%;height:20px;background-color:#f9e68c;display:table-cell;"></span><span style="width:').f(t.get(["silver_percent"],!1),t,"h").w('%;height:20px;background-color:#e1e3e6;display:table-cell;"></span><span style="width:').f(t.get(["bronze_percent"],!1),t,"h").w('%;height:20px;background-color:#e5bda4;display:table-cell;"></span>\n                <span style="font-size:15px;font-weight:bold;padding-left:4px;">').f(t.get(["total"],!1),t,"h").w('</span><span style="width:').f(t.get(["filler_percent"],!1),t,"h").w('%;height:20px;background-color:transparent;display:table-cell;"></span>\n            </h5>\n        </div>\n    </li>\n    ')}return dust.register("td-applet-specialevent-templates-medalcount",t),t.__dustBody=!0,l.__dustBody=!0,t}(),dust.cache["td-applet-specialevent:medalcount.dust"]=dust.cache["td-applet-specialevent:medalcount"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-specialevent/templates/medalcount"]=function(e,l){e=e||{},dust.render(t,e,l)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-specialevent",function(e,p){"use strict";e.namespace("TD.Applet").SpecialEventMainView=e.Base.create("TDAppletSpecialEventMainView",e.Af.AppletView,[],{events:{"a.more":{click:"openPopUp"}},openPopUp:function(e){e.preventDefault()}})},"@VERSION@",{requires:["af-applet-view"]});

}
/*
     FILE ARCHIVED ON 00:49:48 Mar 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:35:41 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 139.959
  exclusion.robots: 0.173
  exclusion.robots.policy: 0.161
  cdx.remote: 0.112
  esindex: 0.013
  LoadShardBlock: 76.143 (3)
  PetaboxLoader3.datanode: 75.082 (5)
  PetaboxLoader3.resolve: 88.688 (3)
  load_resource: 115.414 (2)
*/