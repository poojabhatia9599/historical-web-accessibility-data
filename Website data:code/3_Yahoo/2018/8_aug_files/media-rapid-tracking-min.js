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

YUI.add("media-rapid-tracking",function(e){"use strict";var n,i="rapid-tracker:",t=i+"click",o=i+"event",a=i+"reinit",u=i+"destroy-instance",c=null;function r(e){r.superclass.constructor.apply(this,arguments)}r.NAME="RapidTracking",r.ATTRS={},e.extend(r,e.Base,{config:null,refererSpaceid:null,currentSpaceid:null,rapidConfig:null,_globalEvents:{},moduleQueue:null,beaconQueue:[],initializer:function(e){var n=this;c=c||e.instance||null,n.moduleQueue=n.moduleQueue||e.moduleQueue||[],n.config=n.config||e.config||{},n.rapidConfig=n.rapidConfig||e.rapidConfig||{},n._initEventListeners(),n._initPublish(),c&&n._processQueue()},initRapid:function(){this._initRapid(),this._processQueue()},_initRapid:function(e){var n=this;c&&!e||(c&&c.destroy(),n.updateRequestAttributes(),n.rapidConfig.tracked_mods=n._getTrackedMods(),"undefined"!=typeof YAHOO.i13n.Rapid&&(c=new YAHOO.i13n.Rapid(n.rapidConfig),n.currentSpaceid=n.rapidConfig.spaceid,window.rapidInstance=c,YAHOO&&YAHOO.i13n&&(YAHOO.i13n.currentSID=n.getCurrentSID())))},getCurrentSID:function(e){return c&&c.getCurrentSID?c.getCurrentSID():null},getRefererSpaceid:function(){return this.refererSpaceid||null},_getTrackedMods:function(){var n=this,i=n.rapidConfig&&n.rapidConfig.tracked_mods||[];return e.Lang.isArray(i)&&(i=n._getModulesArrayFromQueue(!0).concat(i),i=e.Array.dedupe(i)),i},_initPublish:function(){e.publish("rapid:init",{fireOnce:!0}).fire()},_initEventListeners:function(){var n=this;n._globalEvents[t]||(e.Global.on(t,n._handleBeaconing,n,"click"),n._globalEvents[t]=!0),n._globalEvents[o]||(e.Global.on(o,n._handleBeaconing,n,"event"),n._globalEvents[o]=!0),n._globalEvents[a]||(e.Global.on(a,n._handleReInit,n),n._globalEvents[a]=!0),n._globalEvents[u]||(e.Global.on(u,n._handleDestroyInstance,n),n._globalEvents[u]=!0)},updateRequestAttributes:function(){var e=this;window.YMEDIA_REQ_ATTR&&"object"==typeof YMEDIA_REQ_ATTR.instr&&(e.rapidConfig.keys=e.rapidConfig.keys||{},e.rapidConfig.keys.authfb=YMEDIA_REQ_ATTR.instr.authfb,e.rapidConfig.keys.rid=YMEDIA_REQ_ATTR.instr.request_id)},addModules:function(e,n,i){c?c.addModules(e,n,i):this._addModulesQueue(e)},refreshModule:function(e,n,i,t){c&&c.refreshModule(e,n,i,t)},refreshModuleAsRichView:function(n,i){c&&(e.Lang.isFunction(c.refreshModuleAsRichView)?c.refreshModuleAsRichView(n,i):this.refreshModule(n))},removeModule:function(e){c&&c.removeModule(e)},isModuleTracked:function(e){if(c)return c.isModuleTracked(e)},setRapidAttribute:function(e){c&&"function"==typeof c.setRapidAttribute&&c.setRapidAttribute(e)},clearRapidAttribute:function(e){c&&"function"==typeof c.clearRapidAttribute&&c.clearRapidAttribute(e)},beaconPageview:function(e){c&&c.beaconPageview(e)},beaconClick:function(e,n,i,t,o,a,u){var r={};r.sec=e||"",r.linkname=n||"",r.pos=i&&"number"==typeof i?i:0,r.keys="object"==typeof t?t:{},r.outcome=o||"",r.callback="function"==typeof a?a:null,r.sec?c?r.outcome?c.beaconClick(r.sec,r.linkname,r.pos,r.keys,r.outcome,r.callback,u):c.beaconClick(r.sec,r.linkname,r.pos,r.keys,null,r.callback,u):this._addBeaconQueue(r,"click"):r.callback&&r.callback()},beaconLinkViews:function(e,n,i){c&&c.beaconLinkViews&&c.beaconLinkViews(e,n,i)},beaconPerformanceData:function(e,n){c&&c.beaconPerformanceData&&c.beaconPerformanceData(e,n)},beaconEvent:function(e){arguments.length>1&&(e={name:arguments[0],keys:arguments[1]},arguments.length>2&&arguments[2]&&(e.outcome=arguments[2]),arguments.length>3&&arguments[3]&&(e.callback="function"==typeof arguments[3]?arguments[3]:null)),c?e.name&&e.keys?(e.keys="object"==typeof e.keys?e.keys:{},e.outcome?c.beaconEvent(e.name,e.keys,e.outcome,e.callback):c.beaconEvent(e.name,e.keys,null,e.callback)):e.callback&&e.callback():this._addBeaconQueue(e,"event")},updateConfig:function(e){if(c){this.refererSpaceid=this.currentSpaceid||null,this.currentSpaceid=e.spaceid||null,c.reInit(e)}},addModuleAPV:function(e){if(c&&c.addModuleAPV)return c.addModuleAPV(e)},beaconAPV:function(e,n){c&&c.beaconAPV&&c.beaconAPV(e,n)},_addModulesQueue:function(e){e&&this.moduleQueue.push(e)},_addBeaconQueue:function(e,n){this.beaconQueue.push({data:e,type:n})},_processQueue:function(){var n,i,t,o,a=this,u=a.beaconQueue.length;if(c){for((t=a._getModulesArrayFromQueue(!0)).length>0&&a.addModules(t),n=a.moduleQueue.length,o=0;o<n;o++)"object"==typeof a.moduleQueue[o]&&(i=e.merge(i,a.moduleQueue[o]));for(i&&a.addModules(i),o=0;o<u;o++)a._handleBeaconing(a.beaconQueue[o].data,a.beaconQueue[o].type);a.moduleQueue=[],a.beaconQueue=[]}},_getModulesArrayFromQueue:function(n){var i,t=this,o=t.moduleQueue.length,a=[],u=[];for(i=0;i<o;i++)e.Lang.isArray(t.moduleQueue[i])?a=a.concat(t.moduleQueue[i]):"object"==typeof t.moduleQueue[i]&&n?u.push(t.moduleQueue[i]):a.push(t.moduleQueue[i]);return a.length>0&&n&&(t.moduleQueue=u),a},_handleBeaconing:function(e,n){var i=e&&"object"==typeof e.data?e.data:null,t=e.mod_id?e.mod_id:"";c?i&&(i.keys=this._addMpos(i.keys,t),"click"===n?this.beaconClick(i.sec,i.linkname,i.pos,i.keys,i.outcome,i.callback):this.beaconEvent(i)):this._addBeaconQueue(e,n)},_handleDestroyInstance:function(){c&&(this.rapidConfig={},c.destroy(),c=null)},_handleReInit:function(e){this.rapidConfig=e,this._initRapid(!0)},_addMpos:function(i,t){var o,a,u=this.config.selectors;return t&&i&&!i.mpos?(o=(n=n||u&&e.one(u.bd))&&n.all(u.mods),a=t&&o?o.indexOf(e.one("#"+t))+1:0,"object"==typeof i?i.mpos=a:i={mpos:a},i):i}}),e.namespace("Media").RapidTracking=r},"@VERSION@",{requires:["event-custom","base","node"]});

}
/*
     FILE ARCHIVED ON 15:21:56 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:08 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 99.875
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.049
  esindex: 0.008
  LoadShardBlock: 65.849 (3)
  PetaboxLoader3.datanode: 174.203 (5)
  load_resource: 153.772 (2)
  PetaboxLoader3.resolve: 39.633
*/