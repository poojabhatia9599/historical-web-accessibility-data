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

(function(e){e.spoilertext={init:function(){$("body").on("mouseenter",".md-spoiler-text",function(t){var n=$(t.currentTarget),i=!!n.data("initialized");i||(n.data("initialized",!0),new e.spoilertext.SpoilerText({el:n}))})}},e.spoilertext.SpoilerRevealTooltip=e.ui.Bubble.extend({animateDuration:0,showDelay:100,hideDelay:100,className:"spoiler-text-tooltip hover-bubble anchor-bottom-left",template:_.template("<div><%- text %></div>"),position:function(){var e=this.$parent.get(0).getClientRects()[0],t=this.$parent.get(0).getBoundingClientRect(),n=e.left-t.left,r=-this.$el.outerHeight(!0)-8,i=this.$parent.offset(),s=$("body").offset();this.$el.css({left:i.left+n,top:i.top+r-s.top})},updateTargetElement:function(e){this.$parent=e,this.position()},render:function(){this.$el.html(this.template({text:e._("Reveal spoiler")}))}});var t=new e.spoilertext.SpoilerRevealTooltip({parent:null,group:{},trackHover:!1});e.spoilertext.SpoilerText=Backbone.View.extend({events:{mouseenter:"showTooltip",mouseleave:"hideTooltip",click:"revealSpoiler"},initialize:function(){this.isRevealed=!1,this.showTooltip()},revealSpoiler:function(e){this.isRevealed||(e.preventDefault(),this.$el.addClass("revealed",!0),this.isRevealed=!0,t.hideNow())},showTooltip:function(){this.isRevealed||(t.updateTargetElement(this.$el),t.queueShow())},hideTooltip:function(){this.isRevealed||t.queueHide()}}),e.spoilertext.init()})(r);

}
/*
     FILE ARCHIVED ON 00:05:07 Apr 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:32:32 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.135
  exclusion.robots.policy: 0.112
  cdx.remote: 0.182
  esindex: 0.022
  LoadShardBlock: 214.825 (6)
  PetaboxLoader3.datanode: 183.819 (8)
  load_resource: 154.903 (2)
  PetaboxLoader3.resolve: 85.487 (2)
*/