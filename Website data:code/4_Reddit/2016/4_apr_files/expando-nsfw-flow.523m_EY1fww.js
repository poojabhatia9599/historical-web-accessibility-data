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

r.templates.set([{style:"html",name:"ui/formbar",template:'<form class="form-bar c-clearfix">\n  <div class="md-container-small">\n    <div class="md">\n      <p class="form-bar-text"><%- thing.text %></p>\n    </div>\n    \n    <button type="submit" class="c-btn c-btn-primary"><%- thing.buttonLabel %></button>\n  </div>\n  <input type="hidden" name="<%- thing.key %>" value="<%- thing.value %>">\n</form>\n'}]),!function(e,t){e.ui.FormBar=Backbone.View.extend({templateName:"ui/formbar",defaults:{text:"",buttonLabel:"",key:"",value:""},events:{"submit .form-bar":"onSubmit"},initialize:function(){var e=_.defaults(this.options,this.defaults);this.render(e)},render:function(t){var n=e.templates.make(this.templateName,t);this.$el.html(n)},onSubmit:function(e){e.preventDefault(),this.trigger("submit",get_form_fields(e.target))}})}(r),r.templates.set([{style:"html",name:"expando/nsfwgate",template:'<div class="expando-nsfw-gate expando-nsfw-<%- thing.style %> expando-nsfw-<%- thing.type %>"\n        style="width: <%- thing.width %>; height: <%- thing.height %>">\n    <div class="expando-nsfw-gate-controls">\n        <button class="expando-nsfw-gate-show-once"><%- thing.buttonLabel %></button>\n        <p class="expando-nsfw-gate-text"><%- thing.text %></p>\n    </div>\n</div>\n'}]),!function(e,t){var n={over18Listing:!1,noProfanity:!0,nsfwMediaAcknowledged:!1,loggedIn:!1};e.hooks.get("setup").register(function(){n.over18Listing=e.config.listing_over_18,n.noProfanity=e.config.pref_no_profanity,n.nsfwMediaAcknowledged=e.config.nsfw_media_acknowledged,n.loggedIn=!!e.config.logged});var r=e.ui.FormBar.extend({doneString:e._("We will ask before showing NSFW media."),defaults:{text:"",buttonLabel:"",key:"show_nsfw_media",value:""},render:function(e){this._lastRenderProps=e,r.__super__.render.call(this,e)},onSubmit:function(e){r.__super__.onSubmit.call(this,e);var t=_.defaults({text:this.doneString},this._lastRenderProps);this.render(t),this.$el.addClass("expando-nsfw-flow-complete"),this.$el.find("button").remove(),this.$el.find("form").attr("disabled",!0)}}),i=Backbone.View.extend({templateName:"expando/nsfwgate",events:{"click .expando-nsfw-gate-show-once":"onButtonClick","click .expando-nsfw-gate-text":"onTextClick"},defaults:{buttonLabel:e._("Click to see NSFW"),text:"",type:"normal",style:"interstitial"},initialize:function(){this.render(this.options)},render:function(t){t=_.defaults(t,this.defaults);var n=e.templates.make(this.templateName,t);this.$el.html(n)},onButtonClick:function(e){e.preventDefault(),this.trigger("click:button")},onTextClick:function(e){e.preventDefault(),this.trigger("click:text")}}),s=Backbone.View.extend({strings:{normal:e._("Always show NSFW media?"),changedToShow:e._("Ok, we changed your preferences to always show NSFW media."),changedToShowLabel:e._("Undo"),warning:e._("Your account is set up to always show this content in the future."),alwaysAsk:e._("Change your preferences to hide NSFW media?"),alwaysAskLabel:e._("Hide NSFW")},initialize:function(){var e=this.options.width,t=this.options.height,r=this.options.isOverlay,s=this.options.isWarning;this.isOverlay=this.options.isOverlay,this.isWarning=this.options.isWarning;var o={width:e?e+"px":"100%",height:t?t+"px":"100%",style:r?"overlay":"interstitial",type:s?"warning":"normal"};n.loggedIn&&(this.isWarning?o.text=this.strings.warning:o.text=this.strings.normal),this.interstitial=new i(o),this.$el.append(this.interstitial.el),this.listenTo(this.interstitial,"click:button",this.onShowOnce);if(!n.loggedIn)return;this.isWarning?this.initFormBar():this.listenTo(this.interstitial,"click:text",this.onShowAlways)},initFormBar:function(){var e,t;this.isWarning?(e=this.strings.alwaysAsk,t=this.strings.alwaysAskLabel):(e=this.strings.changedToShow,t=this.strings.changedToShowLabel),this.formBar=new r({text:e,buttonLabel:t,value:"off"}),this.$el.append(this.formBar.el),this.listenTo(this.formBar,"submit",this.updatePref)},onShowOnce:function(){n.nsfwMediaAcknowledged?this.show():(n.nsfwMediaAcknowledged=!0,this._updateNsfwMediaPrefs({},this.show.bind(this)))},onShowAlways:function(){this.updatePref({show_nsfw_media:"on"}),this.initFormBar()},updatePref:function(e){n.noProfanity=e.show_nsfw_media==="off",this._updateNsfwMediaPrefs(e,function(){e.show_nsfw_media==="on"&&this.show()}.bind(this))},_updateNsfwMediaPrefs:function(e,t){$.request("set_nsfw_media_pref",e,function(e){t&&t()},!1,"json",!1)},show:function(){this.trigger("show"),this.isOverlay?this.interstitial.$el.fadeOut():this.interstitial.$el.remove()}});e.hooks.get("expando-pre-init").register(function(){$(document.body).on("expando:create",function(e){function o(e){e.preventDefault(),t.autoexpanded||t.$expando.html(t.cachedHTML);var r=t.$expando,o=r.children(),u=o.width(),f=o.height(),l=o.hasClass("media-preview"),c=!n.noProfanity;i=new s({width:u,height:f,isOverlay:l,isWarning:c}),t.$expando.addClass("expando-with-nsfw-interstitial"),t.listenTo(i,"show",a),i.isOverlay?o.append(i.el):r.html(i.el),t.showExpandoContent()}function u(e){e.preventDefault(),t.hideExpandoContent()}function a(){t.stopListening(i,"show",a),t.$expando.removeClass("expando-with-nsfw-interstitial"),i.isOverlay||t.$expando.prepend(t.cachedHTML),t.fireExpandEvent(),t.$el.off("expando:show",o),t.$el.off("expando:hide",u)}var t=e.expando,r=!n.over18Listing&&(n.noProfanity||!n.nsfwMediaAcknowledged)&&t.isNSFW&&t.linkType=="link";if(!r)return;var i;t.$el.on("expando:show",o),t.$el.on("expando:hide",u)})})}(r);

}
/*
     FILE ARCHIVED ON 00:09:25 Apr 01, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:30:41 Jan 25, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.065
  cdx.remote: 0.087
  esindex: 0.01
  LoadShardBlock: 390.617 (6)
  PetaboxLoader3.datanode: 282.293 (8)
  load_resource: 281.646 (2)
  PetaboxLoader3.resolve: 183.438 (2)
*/