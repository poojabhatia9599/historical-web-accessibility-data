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

YUI.add("td-scores-atomic-modellist",function(e){"use strict";e.namespace("TD.Scores").ModelList=e.Mjata.createModelListClass("TDScoresModelList",e.Mjata.ModelList,e.TD.Scores.Model,[e.Af.Sync],{resource:"sports-atomic",readonly:!0,consolidate:!1,add:function(t,n){e.TD.Scores.ModelList.superclass.add.call(this,t,n),this.updateEnablePipe()},hasLiveGames:function(){return this.some(function(e){return e.get("status").type==="in_progress"})},reset:function(t,n){var r="gameid",i={};e.each(t,function(e){i[e[r]]=!0}),this.each(function(e){i[e.get(r)]||e.destroy()}),e.TD.Scores.ModelList.superclass.reset.call(this,t,n),this.updateEnablePipe()},updateEnablePipe:function(){var e=this.get("enablePipe");this.each(function(n){n.set("enablePipe",e)})}},{ATTRS:{enablePipe:{value:!1}}})},"@VERSION@",{requires:["mjata-model-base","mjata-modellist","af-sync","td-scores-atomic-model"]});


}
/*
     FILE ARCHIVED ON 02:36:15 Mar 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:42 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 807.951
  exclusion.robots: 0.117
  exclusion.robots.policy: 0.109
  cdx.remote: 0.06
  esindex: 0.009
  LoadShardBlock: 787.069 (3)
  PetaboxLoader3.datanode: 827.611 (5)
  load_resource: 328.158 (2)
  PetaboxLoader3.resolve: 49.589 (2)
*/