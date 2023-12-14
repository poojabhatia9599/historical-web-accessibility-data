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

YUI.add("stencil-fx-collapse",function(e){"use strict";var t="Collapse-opened",n="Collapse",r="FastTrans",i="scrollHeight",s="height",o="px",u="offsetWidth",a="offsetHeight",f="0px",l;l=function(e){l.superclass.constructor.call(this,e),this.host=e.host},e.extend(l,e.Stencil.BaseFx),l.NS="collapse",l.prototype.show=function(n){return e.Stencil.getNodeList(n).each(function(e){e.get(a)<e.get(i)&&this.transition(e,function(e){var n=e.get(i)+o;e.get(a)===0&&e.setStyle(s,f).get(u),e.addClass(r).addClass(t).setStyle(s,n)})},this),this},l.prototype.hide=function(a){return e.Stencil.getNodeList(a).each(function(e){e.hasClass(t)&&this.transition(e,function(e){var a=e.get(i)+o;e.removeClass(n).setStyle(s,a).get(u),e.addClass(r).addClass(n).removeClass(t).setStyle(s,f)})},this),this},l.prototype.toggle=function(e){e.each(function(e){e.hasClass(t)?this.hide(e):this.show(e)},this)},e.Stencil.Hosts.Fx.plug(l)},"@VERSION@",{requires:["stencil-fx","node-style"]});


}
/*
     FILE ARCHIVED ON 21:27:25 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:42:34 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 249.416
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.088
  cdx.remote: 0.055
  esindex: 0.009
  LoadShardBlock: 131.321 (3)
  PetaboxLoader3.datanode: 114.584 (5)
  PetaboxLoader3.resolve: 359.884 (3)
  load_resource: 386.198 (2)
*/