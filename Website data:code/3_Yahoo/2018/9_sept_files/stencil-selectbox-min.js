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

YUI.add("stencil-selectbox",function(e){"use strict";function t(t){var n,r;this.constructor.superclass.constructor.call(this,t),n=this._node,r=n.getData("selectbox-target")||n.getData("target"),this.nodeDOM=n.getDOMNode(),this.targetEl=r?e.one(r):n.get("parentNode").one(".SelectBoxPick")||n.get("parentNode").one(".SelectBox-Text")||n.get("parentNode").one(".SelectBox-Pick")}e.extend(t,e.Stencil.BasePlugin,{execute:function(e,t,n){this.targetEl&&(n.type==="change"?this.update(e,t):n.type==="focus"?this.targetEl.addClass("Focused"):n.type==="blur"&&this.targetEl.removeClass("Focused"))},update:function(t,n,r){var i=this.nodeDOM,s,o;r&&typeof r.to=="number"&&(i.selectedIndex=r.to),s=i.options[i.selectedIndex],o=s.getAttribute("data-selectbox-link")||s.getAttribute("data-link"),o?e.config.win.location.replace(o):this.targetEl&&this.targetEl.set("innerHTML",s.innerHTML)}},{NS:"StencilSelectBox",defaultTriggerEvents:["change","focus","blur"]}),e.Stencil.registerPlugin(t,"SelectBox")},"@VERSION@",{requires:["stencil-base"]});


}
/*
     FILE ARCHIVED ON 13:32:43 Aug 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:41:55 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 183.8
  exclusion.robots: 0.062
  exclusion.robots.policy: 0.053
  cdx.remote: 0.05
  esindex: 0.008
  LoadShardBlock: 53.185 (3)
  PetaboxLoader3.datanode: 87.519 (5)
  load_resource: 160.573 (2)
  PetaboxLoader3.resolve: 70.19 (2)
*/