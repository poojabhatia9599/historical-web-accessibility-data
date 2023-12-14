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

YUI.add("td-applet-trending-atomic-mainview",function(t,e){var i="container",n=".trending-list",o=".trending-title",a=".tn-title",r="data-category",s="data-title",l="selected",c="blur",g="function"==typeof window.requestAnimationFrame;t.namespace("TD.Applet").TrendingAtomicMainView=t.Base.create("TDAppletTrendingAtomicMainView",t.Af.AppletView,[],{initializer:function(e){var a=this,s=a.get(i),c=s?s.all(o):[],g=s?s.all(n):[];a.guid=e.guid,a.config=t.Af.Bootstrap.getViewMeta(a.guid,"main").config||{},a.currentCategory=null,a.categories=[],a.titleNodes={},a.listNodes={},a._handles=[],t.each(c,function(t){var e=t.getAttribute(r);a.categories.push(e),a.titleNodes[e]=t,t.hasClass(l)&&e&&(a.currentCategory=e)}),t.each(g,function(t){var e=t.getAttribute(r);a.listNodes[e]=t}),a.config.rotationEnabled&&a.categories.length>1&&(a.rotateTimerEvent=null,a._handles.push(s.on("mouseenter",t.bind(a.stopRotation,a))),a._handles.push(s.on("mouseleave",t.bind(a.startRotation,a))),a.startRotation()),a.config.clickableTitles&&a.categories.length>1&&a._handles.push(s.delegate("click",t.bind(a.handleSelect,a),o))},startRotation:function(){var e=this,i=e.config.rotationInterval||15e3;e.rotateTimerEvent=t.later(i,e,e.rotate,[],!0)},stopRotation:function(){this.rotateTimerEvent.cancel(),this.rotateTimerEvent=null},rotate:function(){var e=this,i=e.categories.shift();e.categories.push(i),g?window.requestAnimationFrame(t.bind(function(){e.toggleCategory(i)},e)):e.toggleCategory(i)},handleSelect:function(t){var e=this,i=t.currentTarget.getAttribute(r);i!==e.currentCategory&&(g?window.requestAnimationFrame(function(){e.toggleCategory(i)}):e.toggleCategory(i))},toggleCategory:function(e){var i=this;i.currentCategory&&e&&i.currentCategory!==e&&(i.show(i.titleNodes[e]),i.hide(i.titleNodes[i.currentCategory]),t.one(a)&&t.one(a).setHTML(i.titleNodes[e].getAttribute(s)),i.show(i.listNodes[e]),i.hide(i.listNodes[i.currentCategory]),i.currentCategory=e)},show:function(t){t&&t.removeClass(c).addClass(l)},hide:function(t){t&&t.removeClass(l).addClass(c)},destructor:function(){t.Array.each(this._handles,function(t){t.detach()}),this._handles=[]}})},"@VERSION@",{requires:["af-applet-view","node"]});

}
/*
     FILE ARCHIVED ON 21:27:25 Feb 28, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:02 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 102.16
  exclusion.robots: 0.142
  exclusion.robots.policy: 0.131
  cdx.remote: 0.061
  esindex: 0.009
  LoadShardBlock: 33.729 (3)
  PetaboxLoader3.datanode: 95.641 (5)
  load_resource: 983.125 (2)
  PetaboxLoader3.resolve: 219.62 (2)
*/