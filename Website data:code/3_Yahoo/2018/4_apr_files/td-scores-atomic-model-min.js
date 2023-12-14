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

YUI.add("td-scores-atomic-model",function(e){"use strict";function n(e){e=parseInt(e,10);switch(e){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd";default:return e+"th"}}var t={"000":0,100:1,"010":2,"001":3,"011":4,110:5,101:6,111:7};e.namespace("TD.Scores").Model=e.Mjata.createModelClass("TDScoresModel",e.Model,[],{idAttribute:"gameid",resource:"sports-atomic",readonly:!0,initializer:function(e){this.after("change",function(t){this.checkGameStatus()},this),this.checkGameStatus()},checkGameStatus:function(){var t;switch(this.get("status.type")){case"in_progress":this.openPipe();break;case"pregame":t=this.get("start_ts")-e.Lang.now(),this.openPipe(t);break;default:this.pipe&&this.pipe.close()}},openPipe:function(t){var n=this;if(n.get("enablePipe")!==!0)return;t=t||0;if(this.pipe){this.pipe.open({delay:t});return}e.use("af-pipe",function(e){n.plug(e.Af.Pipe),n.pipe.config({msg_maxidle:36e5}),n.pipe.on(["outofsync","idle"],function(e){this.fire("refresh")},n),n.pipe.on("error",function(e){e.pipe.code==="exceed-max-error"&&this.set("enablePipe",!1)},n),n.pipe.open({delay:t})})}},{ATTRS:{id:{getter:function(){return this.get("gameid")}},pipeChannel:{getter:function(){return this.get("comet_channel")||"/sports/games/"+this.get("gameid")}},away_team:{getter:function(e){return(this.get("league.id")==="ncaaf"||this.get("league.id")==="ncaab")&&e.league_rank>25&&(e.league_rank=""),e}},home_team:{getter:function(e){return(this.get("league.id")==="ncaaf"||this.get("league.id")==="ncaab")&&e.league_rank>25&&(e.league_rank=""),e}},score:{getter:function(e){return e&&(this.get("league.id")==="soccer"&&(e.away_team_shootout||e.home_team_shootout)&&this.set("shootout",!0),e.away_team&&(e.away_team=parseInt(e.away_team,10)),e.home_team&&(e.home_team=parseInt(e.home_team,10))),e},value:{}},status:{value:{},setter:function(r,i){var s=e.clone(r),o,u;return s&&s.base_runners&&(o=s.base_runners,o.offset=t[""+o.first+o.second+o.third]*36),s&&s.down_ordinal&&(s.down_ordinal=n(s.down_ordinal)),s.yards_to_endzone&&(u=Number(s.yards_to_endzone),u>=50?s.fieldPosition=s.team_in_possesion+" "+(100-u):u<50&&(s.team_in_possesion===this.get("home_team").abbr?s.fieldPosition=this.get("away_team").abbr+" "+u:s.fieldPosition=this.get("home_team").abbr+" "+u)),s}}}})},"@VERSION@",{requires:["mjata-model","mjata-model-base"]});


}
/*
     FILE ARCHIVED ON 02:36:15 Mar 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:41 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 72.691
  exclusion.robots: 0.178
  exclusion.robots.policy: 0.163
  cdx.remote: 0.078
  esindex: 0.011
  LoadShardBlock: 36.166 (3)
  PetaboxLoader3.datanode: 58.888 (5)
  load_resource: 104.618 (2)
  PetaboxLoader3.resolve: 50.991 (2)
*/