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

r.authortooltip={init:function(){this.authors=new r.authortooltip.AuthorCache,this.activeBubble=null,$(".author").each(function(e,t){new r.authortooltip.AuthorName({el:t})})}},r.authortooltip.AuthorName=Backbone.View.extend({events:{mouseenter:"createBubble"},createBubble:function(){if(this.bubble)return;var e=this.$el.text();this.bubble=new r.authortooltip.AuthorBubble({isLoggedIn:!!r.config.logged,isSelf:r.config.logged&&r.config.logged===e,parent:this.$el,profileName:e,group:r.authortooltip}),this.bubble.queueShow()}}),r.authortooltip.AuthorFollowButton=Backbone.View.extend({template:_.template('<% if (isFollowed) { %><a href="#" class="author-tooltip__unfollow-button"><span class="author-tooltip__follow-status"><%= following %></span></a><% } else { %><a href="#" class="author-tooltip__follow-button"><i class="author-tooltip__icon author-tooltip__icon_sm i-follow"></i><div><%= follow %></div></a><% } %>'),events:{"click a":"follow"},initialize:function(){this.author=r.authortooltip.authors.touch(this.options.profileName),this.render()},render:function(){if(!this.author)return;var e=this.author.get("subreddit"),t=e?e.user_is_subscriber:!1;return this.$el.html(this.template({isFollowed:t,follow:r._("Follow"),following:r._("Following")})),this.delegateEvents(),this},follow:function(e){e.preventDefault();var t=this.author.get("subreddit"),n=t?t.user_is_subscriber:!1;this.author.follow(!n),this.render()}}),r.authortooltip.Author=Backbone.Model.extend({idAttribute:"profileName",url:function(){return r.utils.joinURLs("/user",this.id,"about.json")},urlFollow:"/api/subscribe",deafults:{loaded:!1},parse:function(e){return e.data},load:function(){var e=new $.Deferred;return this.get("loaded")?(e.resolve(this),e):(Backbone.ajax({type:"GET",url:this.url(),success:_.bind(function(t){this.set({loaded:!0}),this.set(this.parse(t)),e.resolve(this)},this),error:_.bind(e.reject,e)}),e)},follow:function(e){var t=new $.Deferred;this.get("subreddit").user_is_subscriber=e;var n={id:"t2_"+this.get("id"),name:this.get("name"),type:"default"};return e?r.profileCardEvents.clickFollow(n):r.profileCardEvents.clickUnfollow(n),Backbone.ajax({type:"POST",url:this.urlFollow,data:{action:e?"sub":"unsub",sr_name:this.get("subreddit").display_name,api_type:"json"}}),t}}),r.authortooltip.AuthorCache=Backbone.Collection.extend({model:r.authortooltip.Author,touch:function(e){var t=this.get(e);return t||(t=new this.model({profileName:e}),this.add(t)),t}}),r.authortooltip.AuthorBubble=r.ui.Bubble.extend({showDelay:700,hideDelay:300,className:function(e){var t="author-tooltip hover-bubble anchor-bottom-left author-tooltip-loading ";return t+=this.options.isSelf?"author-tooltip_self":"author-tooltip_common",t},events:{"click .author-tooltip__message-link":"clickedMessageLink","click .author-tooltip__profile-link":"clickedProfileLink"},template:_.template('<div class="author-tooltip__head"><h3><a class="author-tooltip__profile-link" href="/user/<%= profileName %>">u/<%= profileName %></a></h3></div>'),templateFullVoices:_.template('<div class="author-tooltip__head"><% if (!isNSFW) { %><img class="author-tooltip__avatar" src="<%= data.subreddit.icon_img %>" /><% } %><h3 class="author-tooltip__title"><%= data.subreddit.title %></h3><div><a class="may-blank author-tooltip__profile-name author-tooltip__profile-link" href="/user/<%= profileName %>">u/<%= profileName %></a></div><ul class="author-tooltip__credentials-list"><li class="author-tooltip__credential"><div class="author-tooltip__karma"><i class="author-tooltip__icon i-karma"></i><div><strong><%= karma %></strong><div><%= karmaTitle %></div></div></div><div class="author-tooltip__karma-details"><div><strong><%= postKarma %></strong> <span><%= postKarmaTitle %></span></div><div><strong><%= commentKarma %></strong> <span><%= commentKarmaTitle %></span></div></div></li><li class="author-tooltip__credential"><div class="author-tooltip__cakeday"><i class="author-tooltip__icon i-cake"></i><div><strong><% if (createdCount > 0) { %><%= createdCount %> <% } %><%= createdDescription %></strong><div>Joined <%= cakeday %></div></div></div></li></ul><% if (data.subreddit.public_description) { %><p class="author-tooltip__description"><%= data.subreddit.public_description %></p><% } %></div>'),templateFullCommon:_.template('<div class="author-tooltip__head"><h3><a class="author-tooltip__profile-link" href="/user/<%= profileName %>">u/<%= profileName %></a></h3><ul class="author-tooltip__credentials-list"><li class="author-tooltip__credential"><div class="author-tooltip__karma"><i class="author-tooltip__icon i-karma"></i><div><strong><%= karma %></strong><div><%= karmaTitle %></div></div></div><div class="author-tooltip__karma-details"><div><strong><%= postKarma %></strong> <span><%= postKarmaTitle %></span></div><div><strong><%= commentKarma %></strong> <span><%= commentKarmaTitle %></span></div></div></li><li class="author-tooltip__credential"><div class="author-tooltip__cakeday"><i class="author-tooltip__icon i-cake"></i><div><strong><% if (createdCount > 0) { %><%= createdCount %> <% } %><%= createdDescription %></strong><div>Joined <%= cakeday %></div></div></div></li></ul></div>'),templateLinks:_.template('<ul class="author-tooltip__link-list"><li><a class="may-blank author-tooltip__message-link" href="/message/compose/?to=<%= profileName %>"><i class="author-tooltip__icon author-tooltip__icon_sm i-message"></i><div><%= messageTitle %></div></a></li><% if (!isSelf) { %><li class="author-tooltip__follow-container"></li><% } %></ul>'),linkClick:function(e,t,n){t(n),r.utils.isSimpleClickEvent(e)&&(e.preventDefault(),setTimeout(function(){window.location=e.currentTarget.href},500))},clickedMessageLink:function(e){this.linkClick(e,r.profileCardEvents.clickMessage,this.profileData)},clickedProfileLink:function(e){this.linkClick(e,r.profileCardEvents.clickUsername,this.profileData)},render:function(){var e=r.authortooltip.authors.touch(this.options.profileName),t=e.load();t.done(_.bind(function(e){this.renderFull(e),this.$el.removeClass("author-tooltip-loading"),this.position()},this)).fail(_.bind(function(e){var t=JSON.parse(e.responseText);console.error(t.explanation)},this))},renderFull:function(e){var t=e.toJSON(),n=!!t.subreddit,i=n?this.templateFullVoices:this.templateFullCommon,s="",o=r.TimeText.formatBirthday(r.TimeText.now()/1e3-t.created),u=r.TimeText.formatDate(t.created*1e3);this.profileData={id:"t2_"+t.id,name:t.name,type:n?"default":"legacy"},r.profileCardEvents.viewCard(this.profileData),s+=i({data:t,postKarma:r.utils.safePrettyNumber(t.link_karma),postKarmaTitle:r._("Post Karma"),commentKarma:r.utils.safePrettyNumber(t.comment_karma),commentKarmaTitle:r._("Comment Karma"),karma:r.utils.safePrettyNumber(t.link_karma+t.comment_karma),karmaTitle:r._("Karma"),followersCount:t.subreddit?r.utils.safePrettyNumber(t.subreddit.subscribers):r._("No"),followersTitle:r._("Followers"),createdCount:o.count,createdDescription:o.description,cakeday:u,isSelf:this.options.isSelf,isNSFW:!!t.subreddit&&t.subreddit.over_18,profileName:this.options.profileName,betaTitle:r._("Join Profiles Beta")}),this.options.isSelf||(s+=this.templateLinks({isSelf:this.options.isSelf,messageTitle:r._("Message"),profileName:this.options.profileName})),this.$el.html(s),this.options.isLoggedIn&&!this.options.isSelf&&n&&new r.authortooltip.AuthorFollowButton({el:this.$el.find(".author-tooltip__follow-container").get(0),profileName:this.options.profileName})}}),r.authortooltip.init(),!function(e,t,n){"use strict";function r(t,n,r,i){var s=$.extend({},i);s.name=s.name.toLowerCase(),e.analyticsV2.sendEvent(t,n,r,["action_info"],{profile:new Thrift.Profile(s)})}if(!e.analyticsV2)return;if(e.config.feature_hover_user_ui_holdout)return;e.profileCardEvents={},e.profileCardEvents.viewCard=function(e){r("profile_card","view","card",e)},e.profileCardEvents.clickFollow=function(e){r("profile_card","click","follow",e)},e.profileCardEvents.clickUnfollow=function(e){r("profile_card","click","unfollow",e)},e.profileCardEvents.clickMessage=function(e){r("profile_card","click","message",e)},e.profileCardEvents.clickUsername=function(e){r("profile_card","click","username",e)}}(r,this);

}
/*
     FILE ARCHIVED ON 01:04:58 Oct 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:25:07 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.139
  exclusion.robots.policy: 0.125
  cdx.remote: 0.19
  esindex: 0.017
  LoadShardBlock: 304.821 (6)
  PetaboxLoader3.datanode: 391.407 (8)
  load_resource: 423.551 (2)
  PetaboxLoader3.resolve: 234.936 (2)
*/