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

(function(m){var window=this;var z4=function(){return(0,m.I)("feed-item-checkbox",A4)};var B4=function(a,b){if("FORM"==a.tagName)for(var c=a.elements,d=0;a=c[d];d++)B4(a,b);else!0==b&&a.blur(),a.disabled=b};var C4=function(a){(0,m.J)("yt-alert-content",D4).innerHTML=a;m.Q.show(D4);m.Q.hide(E4)};var F4=function(){var a=[],b=!0,c=z4();(0,m.C)(c,function(c){c.checked&&(a.push(c.value),b=!1)});(0,m.Gb)(G4,"video-ids",a.join(","));B4(G4,b);B4(H4,b);I4&&B4(I4,b);J4&&B4(J4,0==c.length)};
var Eca=function(a,b,c,d){var e="",g={};"personal"==b?(e="/feed_ajax?action_load_personal_feed=1",g={feed_name:a}):"social"==b?(e="/feed_ajax?action_load_social_feed=1",g={feed_name:a}):"system"==b?(e="/feed_ajax?action_load_system_feed=1",g={feed_name:a}):"main"==b?e="/feed_ajax?action_load_main_feed=1":"user"==b?(e="/feed_ajax?action_load_user_feed=1",g={user_id:a}):"collection"==b&&(e="/feed_ajax?action_load_collection_feed=1",g={collection_id:a});c&&(g.filter_type=c);d&&(g.paging=d);(0,m.x)("FEED_DEBUG")&&
(g.debug=(0,m.x)("FEED_DEBUG"));return{url:e,ca:g}};var K4=function(a){C4(a);m.Q.toggle((0,m.H)("watch-history-pause-container"),(0,m.H)("watch-history-resume-container"))};var L4=function(){var a=(0,m.I)("watched",A4).length;M4&&B4(M4,0==a)};var N4=function(a){if(O4){var b=(0,window.parseInt)((0,m.xk)(O4).replace(Fca,""),10);O4.innerHTML=b-a}F4();(0,m.Kq)(P4,!1);(0,m.Kl)(A4)};
var Gca=function(a,b,c,d,e){c=Eca(b,c,d,e);b=c.url;c=c.ca;var g=(0,m.J)("feed-load-more-container",a);(0,m.mj)(g,"loading");var h=(0,m.J)("feed-list",a);(0,m.W)(b,{ca:c,format:"JSON",onSuccess:function(b,c){var d=(0,m.ym)(c.feed_html);d?(h.appendChild(d),(0,m.Kl)(h),m.JC.getInstance().md(),(0,m.zm)(g,"loading"),c.paging?(0,m.Gb)(a,"paging",c.paging):m.Q.hide(g),m.Q.hide(Q4)):(0,m.zm)(g,"loading")},onError:function(){(0,m.zm)(g,"loading");m.Q.show(Q4)}})};
var Hca=function(){C4((0,m.Wa)("HISTORY_FEED_CLEARED"));var a=z4();0!=a.length&&((0,m.Ec)(a[0],"UL").innerHTML="",F4())};var Ica=function(){K4((0,m.Wa)("HISTORY_FEED_RESUMED"))};var Jca=function(){K4((0,m.Wa)("HISTORY_FEED_PAUSED"))};var R4=function(){m.Q.hide(D4);m.Q.show(E4)};var Kca=function(){var a=0;(0,m.C)(z4(),function(b){b.checked&&((0,m.xc)((0,m.Ec)(b,"LI")),a++)});N4(a)};
var Lca=function(){C4((0,m.Wa)("WATCHED_VIDEOS_REMOVED"));var a=0;(0,m.C)((0,m.I)("watched",A4),function(b){(0,m.xc)((0,m.Ec)(b,"LI"));a++});N4(a);L4()};var S4=function(a){(0,m.C)(z4(),function(b){(0,m.Kq)(b,a)});F4()};var Mca=function(a){a=a.getServiceInfo();for(var b in a){var c=(0,m.H)(b+"-connected");if(c){var d=a[b],e=(0,m.H)(b+"-not-connected"),g=(0,m.H)(b+"-display-name"),h=d.is_connected;m.Q.xb(c,h);m.Q.xb(e,!h);(0,m.zk)(g,d.connected_as||"")}}};
var T4=function(a){a=(0,m.K)(a,"feed-container");var b=(0,m.K)(a,"individual-feed"),c=(0,m.E)(b,"feed-name")||null,b=(0,m.E)(b,"feed-type")||null,d=(0,m.E)(a,"filter-type")||null,e=(0,m.E)(a,"paging")||null;Gca(a,c,b,d,e)};var Nca=function(){(0,m.W)("/feed_change_ajax",{method:"POST",ca:{action_clear_history:1},ba:{session_token:(0,m.Il)("feed_change_ajax")},onSuccess:Hca,onError:R4})};
var Oca=function(){(0,m.W)("/feed_change_ajax",{method:"POST",ca:{action_resume_history:1},ba:{session_token:(0,m.Il)("feed_change_ajax")},onSuccess:Ica,onError:R4})};var Pca=function(){(0,m.W)("/feed_change_ajax",{method:"POST",ca:{action_pause_history:1},ba:{session_token:(0,m.Il)("feed_change_ajax")},onSuccess:Jca,onError:R4})};
var Qca=function(){(0,m.W)("/feed_change_ajax",{method:"POST",ca:{action_clear_watched_from_watch_later:1},ba:{session_token:(0,m.Il)("feed_change_ajax")},onSuccess:Lca,onError:R4})};
var Rca=function(){var a=(0,m.E)(G4,"video-ids"),b={};switch(U4){case "history":b.action_remove_history_entries=1;break;case "watch_later":b.action_remove_watch_later_entries=1;break;case "favorites":b.action_remove_favorites_entries=1;break;default:throw Error("Unsupported feed name: "+U4);}(0,m.W)("/feed_change_ajax",{method:"POST",ca:b,ba:{session_token:(0,m.Il)("feed_change_ajax"),video_ids:a},onSuccess:Kca,onError:R4})};var Sca=function(){F4()};
var Tca=function(a){a="false"!=(0,m.E)(a.currentTarget,"enabled");(0,m.Kq)(P4,a);S4(a)};var Uca=function(a){S4(a.currentTarget.checked)};var V4=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};var Vca=function(a){V4(a);a=(0,m.K)(a.currentTarget,"feed-item-collapsed-container");(0,m.Co)(a,"expanded","collapsed");(0,m.Ln)()};var Wca=function(a){V4(a);a=(0,m.K)(a.currentTarget,"feed-item-collapsed-container");(0,m.Co)(a,"collapsed","expanded");(0,m.Ln)()};
var Xca=function(a){T4(a.currentTarget)};var W4=function(a,b){this.b=a;this.k=b;this.g=null;this.i=(0,m.H)("page");this.g=(0,m.R)((0,m.H)("premium-yva-close"),"click",(0,m.s)(this.$r,this));var c=this.b;m.gd.getInstance().get("HIDDEN_MASTHEAD_ID")==c||(0,m.mj)(this.i,"masthead-ad-expanded");this.j=(0,m.R)(window,"message",(0,m.s)(this.$A,this))};var X4=function(a){var b=m.gd.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()};
var Yca=function(){var a=(0,m.x)("PYV_IFRAME_CONTENT"),b=(0,m.H)((0,m.x)("PYV_IFRAME_ID"));b&&(b=b.contentDocument||b.contentWindow.document,b.open(),b.write("<!DOCTYPE html><html><head></head><body>"+a+"</body></html>"),m.nc||b.close())};var Zca=function(){var a=(0,m.H)("destination-moments-promo");if(a){var b=(0,m.E)(a,"column-name")||"";Y4=(0,m.X)(a,"click",(0,m.t)($ca,b),"destination-moments-promo-close")}};
var $ca=function(a){var b=(0,m.K)((0,m.H)("destination-moments-promo"),"browse-list-item-container"),c=(0,m.J)("feed-item-dismissal-hide",b),b=(0,m.J)("feed-item-dismissable",b);m.Q.show(c);m.Q.hide(b);(new m.bB(a)).write("write_reject")};
var ada=function(){var a=(0,m.H)("i18n-local-languages-feed-promo");if(a){var b=(0,m.E)(a,"column-name");if(b){var c={gl:(0,m.E)(a,"promo-gl")},c=(0,m.yd)(c);(0,m.Um)("i18n-promo-show",c,void 0);c=(0,m.t)(bda,b);Z4.push((0,m.X)(null,"click",(0,m.t)(cda,b),"i18n-local-languages-feed-promo-language-option"),(0,m.X)(a,"click",c,"i18n-local-languages-feed-promo-close"))}}};
var cda=function(a,b){function c(){var a=window.document.forms["i18n-local-languages-feed-promo-form"];a.hl.value=d;a.submit()}var d=(0,m.E)(b.currentTarget,"lang-code"),e=(0,m.H)("i18n-local-languages-feed-promo"),g=(0,m.E)(e,"promo-gl"),e=(0,m.E)(e,"current-lang");(0,m.Sn)("i18n-promo-select",(0,m.yd)({gl:g,lang:d,current:e}));(new m.bB(a)).write("write_accept",{onSuccess:c,onError:c})};
var bda=function(a){var b=(0,m.H)("i18n-local-languages-feed-promo"),c=(0,m.E)(b,"promo-gl"),b=(0,m.E)(b,"current-lang"),c=(0,m.yd)({gl:c,current:b});(0,m.Um)("i18n-promo-dismiss",c,void 0);(0,m.T)(Z4);Z4=[];(new m.bB(a)).write("write_dismiss")};var dda=function(){var a=(0,m.H)("music-onboarding-promo");if(a){var b=(0,m.E)(a,"column-name")||"";$4=(0,m.X)(a,"click",(0,m.t)(eda,b),"music-onboarding-promo-close")}};
var eda=function(a){m.Q.hide((0,m.K)((0,m.H)("music-onboarding-promo"),"feed-item-container"));(new m.bB(a)).write("write_reject")};var fda=function(){(0,m.T)(a5);(0,m.fb)(b5);(0,m.C)(c5,function(a){(0,m.A)(a)})};var gda=function(a){a.preventDefault();a=(0,m.K)(a.currentTarget,"branded-page-related-channels-item");d5(a,!0)};var e5=function(a){(0,m.OA)(a,{duration:0.3,wa:function(){(0,m.xc)(a)}})};
var hda=function(a){var b=(0,m.I)("branded-page-related-channels-item"),c=(0,m.za)(b,function(b){return(0,m.E)(b,"external-id")==a});c&&c5.push((0,m.z)(function(){d5(c,!1)},2E3))};
var d5=function(a,b){var c=window.document.getElementById("channels_you_may_know"),c=c&&(0,m.Dc)(c,a),d=!!(0,m.J)("branded-page-related-channels-featured-badge",a),e=(0,m.E)(a,"external-id"),g=(0,m.Ec)(a,"ul"),g=(0,m.I)("branded-page-related-channels-item",g),g=(0,m.ch)(g,function(a){return(0,m.E)(a,"external-id")}),h={};d&&(h.featured=1);c&&(h.channels_you_may_know=1);(0,m.W)("/guide_ajax?action_reload_channel=1",{method:"POST",ca:h,ba:{session_token:(0,m.Il)("guide_ajax"),dismissed_id:e,shown_ids:g.join(),
dismiss_old_channel:b},onSuccess:function(b,c){var d=c.new_suggested_html;d?(d=(0,m.Yn)(d),(0,m.xo)(d,a),(0,m.Kl)(d),(0,m.NA)(d,0,1,{duration:0.3})):e5(a)},onError:function(){e5(a)}})};
var ida=function(){var a;if(a=(0,m.x)("INNERTUBE_HOLDBACK")?(0,m.H)("user-interests-promo-holdback"):(0,m.H)("user-interests-promo")){var b=(0,m.E)(a,"external-id")||"";f5.push((0,m.X)(a,"click",(0,m.t)(jda,b),"user-interests-promo-close"));f5.push((0,m.X)(a,"click",(0,m.t)(kda,b),"user-interests-promo-yes"));f5.push((0,m.X)(a,"click",(0,m.t)(lda,b),"user-interests-promo-no"))}};var jda=function(a,b){(0,m.x)("INNERTUBE_HOLDBACK")?m.Q.hide("user-interests-promo-holdback"):g5(b.target);h5&&i5(a,"dismiss")};
var g5=function(a){var b=(0,m.K)(a,"browse-list-item-container");a=(0,m.J)("feed-item-dismissal-hide",b);b=(0,m.J)("feed-item-dismissable",b);m.Q.show(a);m.Q.hide(b)};
var kda=function(a){var b;(0,m.x)("INNERTUBE_HOLDBACK")?(m.Q.hide("user-interests-promo-question-holdback"),m.Q.show("user-interests-promo-details-holdback"),b=(0,m.H)("user-interests-promo-shelf-holdback")):(m.Q.hide("user-interests-promo-question"),m.Q.show("user-interests-promo-details"),b=(0,m.H)("user-interests-promo-shelf"));h5=!1;i5(a,"yes");m.JC.getInstance().md();b&&(0,m.Kl)(b)};
var lda=function(a,b){(0,m.x)("INNERTUBE_HOLDBACK")?m.Q.hide("user-interests-promo-holdback"):g5(b.target);i5(a,"no")};var i5=function(a,b){var c=(0,m.Il)("user_interests_promo_ajax_token"),d={external_channel_id:a};d["action_"+b]=1;(0,m.W)("/user_interests_promo_ajax",{method:"POST",ca:d,ba:{session_token:c}})};
var mda=function(){"DELAYED_EMBEDED"in m.Oa&&(0,m.C)((0,m.x)("DELAYED_EMBEDED"),function(a){(0,m.Jd)(a.container,a.swf_config)});"MASTHEAD_ENCRYPTED_ID"in m.Oa&&(window.masthead=new W4((0,m.x)("MASTHEAD_ENCRYPTED_ID"),(0,m.x)("MASTHEAD_IS_BRANDED")));"PYV_IFRAME_ID"in m.Oa&&Yca();Zca();ada();dda();ida();a5=(0,m.X)(window.document.body,"click",gda,"branded-page-related-channels-item-close");b5.push((0,m.B)("subscription-subscribe-loaded",hda));(0,m.KD)();var a=(0,m.H)("destination-moments-promo");
a&&(a={"impression-count":(0,m.E)(a,"impression-count")||""},(0,m.Sn)("destination-moments-promo-show",(0,m.yd)(a)))};var j5=function(){this.da=(0,m.H)("tag-editing-menu");this.Lh=(0,m.J)("yt-combobox-menu-content",this.da);this.b=(0,m.J)("yt-combobox-search-input",this.da);this.g=(0,m.J)("tag-resource-container");this.Dc()};var k5=function(a){a.Se?a.Oo=!0:a.Ye()};
var nda=function(a,b){a.i=(0,m.J)("add-new-tag");a.wv=(0,m.J)("apply-tag-changes");if(b){var c=(0,m.rc)("input","tag-checkbox",void 0);(0,m.C)(c,function(a){var c=b[a.value];(0,m.Gb)(a,"initial-tag-membership",c);(0,m.Gb)(a,"current-tag-membership",c);"ALL"==c?a.checked=!0:"SOME"==c&&(0,m.Oq)(a,!0)},a)}l5(a)};var l5=function(a){for(var b=(0,m.rc)("input","tag-checkbox",void 0),c=!1,d=0;d<b.length;d++)if(!oda(b[d])){c=!0;break}c?(0,m.Pk)(a.da,"show-new","show-apply"):(0,m.Pk)(a.da,"show-apply","show-new")};
var oda=function(a){switch((0,m.E)(a,"initial-tag-membership")){case "SOME":if(a.Pl)return!0;break;case "NONE":if(!a.checked)return!0;break;case "ALL":if(a.checked)return!0}return!1};var m5=function(a,b){if(b){var c=b.error;if(c){var d=(0,m.J)("error-small-template",a.da),d=(0,m.ao)(d);n5(a,"yt-alert-error",c,d,8E3)}}};var o5=function(a,b){if(b){var c=b.success_msg;if(c){var d=(0,m.J)("success-small-template",a.da),d=(0,m.ao)(d);n5(a,"yt-alert-success",c,d,3E3)}}};
var n5=function(a,b,c,d,e){var g=(0,m.J)("tag-menu-notifications",a.da);(0,m.At)(b,c,d,g);(0,m.z)((0,m.s)(function(){(new m.hA(d,750)).play()},a),e)};var p5=function(a){a=(0,m.rc)("input",a,void 0);for(var b=[],c=[],d=0;d<a.length;d++){var e=a[d];e.Pl||(e.checked?b.push(e.value):c.push(e.value))}return{checked_values:b,unchecked_values:c}};var q5=function(){m.hb.call(this,"www/feed",["www/common"],["feed","index"],pda,qda)};
var pda=function(){m.hr.getInstance().md();m.JC.getInstance().md();mda();var a=m.lE=(0,m.H)("feed");r5.push((0,m.X)(a,"click",Xca,"feed-load-more"));r5.push((0,m.X)(a,"click",Wca,"feed-item-expander-button"));r5.push((0,m.X)(a,"click",Vca,"feed-item-collapser-button"));s5.push((0,m.B)("page-resize",m.kE));(0,m.kE)();var b=(0,m.J)("individual-feed"),c=!1;b&&(t5=(0,m.E)(b,"feed-name"),c="user"==(0,m.E)(b,"feed-type"));if("history"==t5||"watch_later"==t5||"favorites"==t5)U4=b=t5,A4=a,P4=(0,m.H)("feed-item-select-all-checkbox"),
D4=(0,m.H)("managed-feed-success"),E4=(0,m.H)("managed-feed-error"),H4=(0,m.H)("feed-item-remove-videos"),I4=(0,m.H)("tag-menu-button"),J4=(0,m.H)("managed-toolbar-play-all-button"),O4=(0,m.H)("feed-title-count"),u5=(0,m.J)("branded-page-v2-primary-col-header-container"),G4=(0,m.J)("addto-button",u5),v5.push((0,m.R)(P4,"click",Uca)),v5.push((0,m.X)(window.document.body,"click",Tca,"feed-item-selection-action")),v5.push((0,m.X)(window.document.body,"click",Sca,"feed-item-checkbox")),v5.push((0,m.R)(H4,
"click",Rca)),"watch_later"==b&&(M4=(0,m.H)("watch-later-clear-watched-button"),v5.push((0,m.R)(M4,"click",Qca)),L4()),"history"==b&&(v5.push((0,m.R)((0,m.H)("watch-history-pause-button"),"click",Pca)),v5.push((0,m.R)((0,m.H)("watch-history-resume-button"),"click",Oca)),v5.push((0,m.X)(window.document.body,"click",Nca,"watch-history-clear-button")));(0,m.Mz)({"feed-load-more":T4});if((0,m.x)("INIT_AUTOSHARE")){b=new m.jE((0,m.Il)("autoshare"));b.addServiceChangedCallback(Mca);var d=(0,m.H)("facebook-connect-button");
d&&b.registerConnectDialogLauncher(d,"facebook",!0);(d=(0,m.H)("twitter-connect-button"))&&b.registerConnectDialogLauncher(d,"twitter",!0);(d=(0,m.H)("orkut-connect-button"))&&b.registerConnectDialogLauncher(d,"orkut",!0);window.autoshare=b}(0,m.LD)(a,c);(0,m.mu)(0);(0,m.x)("PLAYER_PERSISTENCE_REFACTOR")||(0,m.Vg)()};
var qda=function(){(0,m.Ma)("DELAYED_EMBEDED",[]);window.masthead&&window.masthead.dispose();Y4&&((0,m.T)(Y4),Y4=null);(0,m.T)(Z4);Z4=[];$4&&((0,m.T)($4),$4=null);(0,m.T)(f5);f5.length=0;fda();(0,m.vt)(m.JD);Q4=m.lE=null;(0,m.T)(r5);r5.length=0;(0,m.fb)(s5);s5.length=0;if("history"==t5||"watch_later"==t5||"favorites"==t5)(0,m.T)(v5),v5=[],I4=D4=E4=P4=O4=J4=M4=H4=G4=u5=A4=null;(0,m.AC)()};var A4,I4,D4,E4,J4,H4,G4,Fca=/[^\d\.\ ]/g,P4,O4,M4,Q4,U4,v5=[],u5,s5=[],r5=[],t5;(0,m.v)(W4,m.Ia);var rda=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;
m.f=W4.prototype;m.f.$A=function(a){a&&a.origin&&rda.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.fx()};m.f.K=function(){W4.D.K.call(this);(0,m.T)(this.g);(0,m.T)(this.j);this.j=this.g=null};m.f.fx=function(){m.Q.hide("ad_creative_1");(0,m.D)("ads-masthead-hide");(0,m.cm)((0,m.H)("page"),!0);(0,m.Ln)();this.k&&m.Q.hide("ad_creative_collapse_btn_1");m.Q.show("ad_creative_expand_btn_1");(0,m.zm)(this.i,"masthead-ad-expanded");X4(this.b);(0,m.Um)("homepage_collapse_masthead_ad",void 0,void 0)};
m.f.$r=function(){m.Q.show("ad_creative_expand_btn_1");(0,m.xc)((0,m.H)("premium-yva"));(0,m.xc)((0,m.H)("video-masthead"));(0,m.Ln)();X4(this.b)};m.f.UJ=function(){(0,m.Co)(window.document.getElementById("premium-yva"),"premium-yva-unexpanded","premium-yva-expanded")};m.f.VJ=function(){(0,m.Co)(window.document.getElementById("premium-yva"),"premium-yva-expanded","premium-yva-unexpanded")};m.f.JJ=function(){m.Q.hide("premium-yva");(0,m.zm)((0,m.H)("premium-yva"),"premium-yva-unexpanded")};
m.f.ZJ=function(){var a=m.gd.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();(0,m.Um)("homepage_expand_masthead_ad",void 0,void 0);(0,m.rf)(window.document.location.href)};var Y4;var Z4=[];var $4;var a5,b5=[],c5=[];var f5=[],h5=!0;(0,m.fa)(j5);m.f=j5.prototype;m.f.Se=!1;m.f.Oo=!1;
m.f.Ye=function(){var a={},b=this.b.value;(0,m.Fn)(b)||(a.search=b);b=[];b=p5("tag-video-checkbox").checked_values;this.Se=!0;this.Oo=!1;(0,m.W)("/labels_ajax?action_tag_menu_dropdown=1",{method:"POST",O:this,ca:a,ba:{video_ids:b},onSuccess:function(a,b){var e=b.tag_membership;this.Lh.innerHTML=b.html_content||"";nda(this,e);this.Se=!1;(0,m.O)(this.da,"loading");(0,m.Lq)();this.Oo&&this.Ye()},onError:function(a){this.Se=!1;(0,m.O)(this.da,"loading");m5(this,(0,m.de)(a.response))}})};
m.f.Dc=function(){(0,m.R)(this.b,"keydown",(0,m.s)(this.Xt,this));(0,m.R)(this.b,"paste",(0,m.s)(this.Xt,this));(0,m.X)(this.da,"click",(0,m.s)(this.wE,this),"tag-checkbox");(0,m.X)(this.da,"click",(0,m.s)(this.vE,this),"add-new-tag");(0,m.X)(this.da,"click",(0,m.s)(this.uE,this),"apply-tag-changes");this.g&&(0,m.X)(this.g,"click",(0,m.s)(this.Wt,this),"tag-video-checkbox");(0,m.X)(window.document.body,"click",(0,m.s)(this.Wt,this),"tag-refresh")};
m.f.Xt=function(){(0,m.z)((0,m.s)(function(){k5(this)},this),0)};m.f.wE=function(a){a=a.target;switch((0,m.E)(a,"current-tag-membership")){case "SOME":a.Pl=!1;(0,m.Gb)(a,"current-tag-membership","ALL");break;case "ALL":(0,m.Gb)(a,"current-tag-membership","NONE");break;case "NONE":"SOME"==(0,m.E)(a,"initial-tag-membership")?((0,m.Oq)(a,!0),(0,m.Gb)(a,"current-tag-membership","SOME")):(0,m.Gb)(a,"current-tag-membership","ALL")}l5(this)};m.f.Wt=function(){(0,m.M)(this.da,"loading")};
m.f.vE=function(){this.i.disabled=!0;var a=this.b.value,b=p5("tag-video-checkbox").checked_values,a={title:a,video_ids:b},a={method:"POST",ca:{session_token:(0,m.E)(this.da,"ajax-token")},ba:a,onSuccess:function(a,b){o5(this,b);k5(this)},onError:function(a){m5(this,(0,m.de)(a.response));k5(this)},O:this};(0,m.W)("/labels_ajax?action_create_and_apply_tag=1",a)};
m.f.uE=function(){this.wv.disabled=!0;var a=p5("tag-video-checkbox").checked_values,b=p5("tag-checkbox"),c=(0,m.rc)("input","tag-checkbox",void 0).length;(0,m.W)("/labels_ajax?action_update_membership=1",{O:this,method:"POST",ca:{session_token:(0,m.E)(this.da,"ajax-token")},ba:{video_ids:a,tags_to_add:b.checked_values,tags_to_remove:b.unchecked_values,num_tags:c},onSuccess:function(a,b){o5(this,b);k5(this)},onError:function(a){this.wv.disabled=!1;m5(this,(0,m.de)(a.response))}})};(0,m.l)("yt.flash.embed",m.Jd,void 0);(0,m.l)("yt.www.ads.pyv.pyvHomeAfcCallback",m.GC,void 0);(0,m.l)("yt.www.ads.MastheadAd",W4,void 0);(0,m.l)("yt.www.lists.addto.toggleMenu",m.KC,void 0);(0,m.l)("yt.www.TagEditingMenu.toggleTagMenu",function(a,b){if(b){var c=(0,m.H)("tag-editing-menu");(0,m.L)(c,"loading")?j5.getInstance().Ye():(j5.getInstance(),(0,m.Lq)());c=(0,m.J)("yt-combobox-search-input",c);(0,m.z)((0,m.s)(c.focus,c),0)}},void 0);W4.prototype.autoCollapsePremiumYva=W4.prototype.JJ;
W4.prototype.collapse_ad=W4.prototype.fx;W4.prototype.expand_ad=W4.prototype.ZJ;W4.prototype.userCollapsePremiumYva=W4.prototype.$r;W4.prototype.userExpandPremiumYva=W4.prototype.UJ;W4.prototype.userUnexpandPremiumYva=W4.prototype.VJ;(0,m.v)(q5,m.hb);q5.prototype.enable=function(){q5.D.enable.call(this);(0,m.Qn)(m.kg);(0,m.Qn)(m.JC)};q5.prototype.disable=function(){q5.D.disable.call(this);(0,m.Pn)(m.kg);(0,m.Pn)(m.JC)};(0,m.ib)(new q5);})(_yt_www);


}
/*
     FILE ARCHIVED ON 02:00:45 Mar 01, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:50:14 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 136.298
  exclusion.robots: 0.126
  exclusion.robots.policy: 0.111
  cdx.remote: 0.089
  esindex: 0.013
  LoadShardBlock: 105.357 (3)
  PetaboxLoader3.datanode: 157.916 (5)
  load_resource: 258.31 (2)
  PetaboxLoader3.resolve: 113.251 (2)
*/