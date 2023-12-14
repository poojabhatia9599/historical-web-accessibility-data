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

YUI.add("td-applet-trending-atomic-mainview",function(e,t){var n="container",r=".trending-list",i=".trending-title",s=".tn-title",o="data-category",u="data-title",a="selected",f="blur",l=typeof window.requestAnimationFrame=="function";e.namespace("TD.Applet").TrendingAtomicMainView=e.Base.create("TDAppletTrendingAtomicMainView",e.Af.AppletView,[],{initializer:function(t){var s=this,u=s.get(n),f=u?u.all(i):[],l=u?u.all(r):[];s.guid=t.guid,s.config=e.Af.Bootstrap.getViewMeta(s.guid,"main").config||{},s.currentCategory=null,s.categories=[],s.titleNodes={},s.listNodes={},s._handles=[],e.each(f,function(e){var t=e.getAttribute(o);s.categories.push(t),s.titleNodes[t]=e,e.hasClass(a)&&t&&(s.currentCategory=t)}),e.each(l,function(e){var t=e.getAttribute(o);s.listNodes[t]=e}),s.config.rotationEnabled&&s.categories.length>1&&(s.rotateTimerEvent=null,s._handles.push(u.on("mouseenter",e.bind(s.stopRotation,s))),s._handles.push(u.on("mouseleave",e.bind(s.startRotation,s))),s.startRotation()),s.config.clickableTitles&&s.categories.length>1&&s._handles.push(u.delegate("click",e.bind(s.handleSelect,s),i))},startRotation:function(){var t=this,n=t.config.rotationInterval||15e3;t.rotateTimerEvent=e.later(n,t,t.rotate,[],!0)},stopRotation:function(){var e=this;e.rotateTimerEvent.cancel(),e.rotateTimerEvent=null},rotate:function(){var t=this,n=t.categories.shift();t.categories.push(n),l?window.requestAnimationFrame(e.bind(function(){t.toggleCategory(n)},t)):t.toggleCategory(n)},handleSelect:function(e){var t=this,n=e.currentTarget.getAttribute(o);if(n===t.currentCategory)return;l?window.requestAnimationFrame(function(){t.toggleCategory(n)}):t.toggleCategory(n)},toggleCategory:function(t){var n=this;if(!n.currentCategory||!t||n.currentCategory===t)return;n.show(n.titleNodes[t]),n.hide(n.titleNodes[n.currentCategory]),e.one(s)&&e.one(s).setHTML(n.titleNodes[t].getAttribute(u)),n.show(n.listNodes[t]),n.hide(n.listNodes[n.currentCategory]),n.currentCategory=t},show:function(e){e&&e.removeClass(f).addClass(a)},hide:function(e){e&&e.removeClass(a).addClass(f)},destructor:function(){e.Array.each(this._handles,function(e){e.detach()}),this._handles=[]}})},"@VERSION@",{requires:["af-applet-view","node"]});


}
/*
     FILE ARCHIVED ON 00:38:05 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:42:39 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 111.994
  exclusion.robots: 0.156
  exclusion.robots.policy: 0.142
  cdx.remote: 0.073
  esindex: 0.011
  LoadShardBlock: 83.672 (3)
  PetaboxLoader3.datanode: 104.523 (5)
  load_resource: 152.927 (2)
  PetaboxLoader3.resolve: 117.864 (2)
*/