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

YUI.add("stencil-source",function(e,t){"use strict";function i(e){this.constructor.superclass.constructor.call(this,e)}var n,r;r=function(e,t){!e.skipInsert&&typeof e.content=="string"&&(e.node.set("innerHTML",e.content),e.node.setData("source-loaded",!0)),t&&t(e)},n=function(){},n.prototype={execute:function(e,t,n){(!e.getData("source-loaded")||t.force)&&this.fetch(e,n)},callback:function(e){e.node.hasAttribute("data-tmpl")?this.renderTemplate(e):r(e)},renderTemplate:function(t){var n,i,s=t.node,o={};n=s.getAttribute("data-tmpl"),e.use("mjata-template","mjata-util",e.bind(function(e){i=this.parseAttrs(n),i&&e.Mjata.Template.render(i.change,t.content,null,function(e,t){r({node:s,content:t},o.callback)})},this))},parseAttrs:function(t){return t?e.Mjata.Util.strParseKV(t):null}},e.Stencil.BaseSource=n,e.extend(i,e.Stencil.BasePlugin,{execute:function(t,n){var r=e.Stencil.Hosts.Source;n=n||{},t||(t=e.Stencil.getNodeList(this._node)),t.each(function(t){var i;i=t.getAttribute("data-source-plugin"),i&&(r[i]?r[i].execute(t,n,this.callback):e.use("stencil-source-"+i,e.bind(function(e){r[i]&&r[i].execute(t,n,this.callback)},this)))},this)}},{NS:"StencilSource"}),e.augment(i,e.Stencil.BaseSource),e.Stencil.registerPlugin(i,"Source"),e.Stencil.Hosts.Source=e.augment({},e.Plugin.Host,!1,null)},"@VERSION@",{requires:["node","oop","pluginhost","mjata-util"]});


}
/*
     FILE ARCHIVED ON 17:09:14 Apr 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:31:48 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 276.114
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.066
  cdx.remote: 0.055
  esindex: 0.008
  LoadShardBlock: 113.797 (3)
  PetaboxLoader3.datanode: 158.061 (5)
  load_resource: 381.578 (2)
  PetaboxLoader3.resolve: 242.038
*/