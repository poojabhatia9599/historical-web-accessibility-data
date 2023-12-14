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

YUI.add("mjata-binder",function(e,t){"use strict";function o(){this._mjataBinding=[]}var n=e.Mjata.Bind.Model2Dom,r=e.Mjata.ModelStore,i=e.Lang,s=i.isFunction;o._NON_ATTRS_CFG=["mjataAutoBind"],o.prototype={mjataAutoBind:!0,mjataBind:function(t,i,o){if(!t)return!1;!i&&s(this.get)&&(i=this.get("container"));if(!i)return!1;var u,a,f;if(t._isYUIModel||t._isYUIModelList){u=r.add(t);if(!u)return!1}return this._mjataBinding.push(n.bind(t,i,o)),o=o||{},e.Object.owns(o,"mjataAutoBind")?f=o.mjataAutoBind:f=this.mjataAutoBind,f?(t._isYUIModelList?a=t.model:s(t)&&(a=t.prototype.model),s(a)&&this._mjataBinding.push(n.bind(a.NAME,i,o)),!0):!0},mjataUnbind:function(){e.each(this._mjataBinding,function(e){e.unbind()}),this._mjataBinding=[]}},e.namespace("Mjata").Binder=o},"@VERSION@",{requires:["mjata-bind-model2dom"]});


}
/*
     FILE ARCHIVED ON 03:20:24 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:44 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 93.303
  exclusion.robots: 0.127
  exclusion.robots.policy: 0.116
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 52.885 (3)
  PetaboxLoader3.datanode: 62.757 (5)
  PetaboxLoader3.resolve: 121.519 (3)
  load_resource: 135.675 (2)
*/