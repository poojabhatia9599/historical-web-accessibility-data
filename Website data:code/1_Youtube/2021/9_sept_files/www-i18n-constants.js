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

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e=this||self;function f(b,c){b=b.split(".");var a=e;b[0]in a||"undefined"==typeof a.execScript||a.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===c?a[d]&&a[d]!==Object.prototype[d]?a=a[d]:a=a[d]={}:a[d]=c}
;var g={YEAR_FULL:"y",YEAR_FULL_WITH_ERA:"y G",YEAR_MONTH_ABBR:"MMM y",YEAR_MONTH_FULL:"MMMM y",YEAR_MONTH_SHORT:"MM/y",MONTH_DAY_ABBR:"MMM d",MONTH_DAY_FULL:"MMMM dd",MONTH_DAY_SHORT:"M/d",MONTH_DAY_MEDIUM:"MMMM d",MONTH_DAY_YEAR_MEDIUM:"MMM d, y",WEEKDAY_MONTH_DAY_MEDIUM:"EEE, MMM d",WEEKDAY_MONTH_DAY_YEAR_MEDIUM:"EEE, MMM d, y",DAY_ABBR:"d",MONTH_DAY_TIME_ZONE_SHORT:"MMM d, h:mm a zzzz"},h=g;h=g;var k={ERAS:["BC","AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss a zzzz","h:mm:ss a z","h:mm:ss a","h:mm a"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5},l=k;l=k;function m(b,c){if(void 0===c){c=b+"";var a=c.indexOf(".");c=Math.min(-1==a?0:c.length-a-1,3)}return 1==(b|0)&&0==c?"one":"other"}
var n=m;n=m;f("YT_I18N_FORMATTING_GOOG_LOCALE","en");f("YT_I18N_FORMATTING_DATE_TIME_PATTERNS",h);f("YT_I18N_FORMATTING_DATE_TIME_SYMBOLS",l);
f("YT_I18N_FORMATTING_RELATIVE_DATE_TIME_SYMBOLS",{DAY:{LONG:{R:{"-1":"yesterday",0:"today",1:"tomorrow"},P:"one{# day ago}other{# days ago}",F:"one{in # day}other{in # days}"}},HOUR:{LONG:{R:{0:"this hour"},P:"one{# hour ago}other{# hours ago}",F:"one{in # hour}other{in # hours}"},SHORT:{R:{0:"this hour"},P:"one{# hr. ago}other{# hr. ago}",F:"one{in # hr.}other{in # hr.}"}},MINUTE:{LONG:{R:{0:"this minute"},P:"one{# minute ago}other{# minutes ago}",F:"one{in # minute}other{in # minutes}"},SHORT:{R:{0:"this minute"},
P:"one{# min. ago}other{# min. ago}",F:"one{in # min.}other{in # min.}"}},MONTH:{LONG:{R:{"-1":"last month",0:"this month",1:"next month"},P:"one{# month ago}other{# months ago}",F:"one{in # month}other{in # months}"},SHORT:{R:{"-1":"last mo.",0:"this mo.",1:"next mo."},P:"one{# mo. ago}other{# mo. ago}",F:"one{in # mo.}other{in # mo.}"}},QUARTER:{LONG:{R:{"-1":"last quarter",0:"this quarter",1:"next quarter"},P:"one{# quarter ago}other{# quarters ago}",F:"one{in # quarter}other{in # quarters}"},
SHORT:{R:{"-1":"last qtr.",0:"this qtr.",1:"next qtr."},P:"one{# qtr. ago}other{# qtrs. ago}",F:"one{in # qtr.}other{in # qtrs.}"}},SECOND:{LONG:{R:{0:"now"},P:"one{# second ago}other{# seconds ago}",F:"one{in # second}other{in # seconds}"},SHORT:{R:{0:"now"},P:"one{# sec. ago}other{# sec. ago}",F:"one{in # sec.}other{in # sec.}"}},WEEK:{LONG:{R:{"-1":"last week",0:"this week",1:"next week"},P:"one{# week ago}other{# weeks ago}",F:"one{in # week}other{in # weeks}"},SHORT:{R:{"-1":"last wk.",0:"this wk.",
1:"next wk."},P:"one{# wk. ago}other{# wk. ago}",F:"one{in # wk.}other{in # wk.}"}},YEAR:{LONG:{R:{"-1":"last year",0:"this year",1:"next year"},P:"one{# year ago}other{# years ago}",F:"one{in # year}other{in # years}"},SHORT:{R:{"-1":"last yr.",0:"this yr.",1:"next yr."},P:"one{# yr. ago}other{# yr. ago}",F:"one{in # yr.}other{in # yr.}"}}});f("YT_I18N_FORMATTING_PLURAL_RULES_SELECT",n);}).call(this);


}
/*
     FILE ARCHIVED ON 01:39:39 Oct 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:08:51 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 273.613
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.081
  cdx.remote: 0.08
  esindex: 0.013
  LoadShardBlock: 118.391 (3)
  PetaboxLoader3.datanode: 17011.052 (5)
  load_resource: 17113.697 (2)
  PetaboxLoader3.resolve: 175.994 (2)
*/