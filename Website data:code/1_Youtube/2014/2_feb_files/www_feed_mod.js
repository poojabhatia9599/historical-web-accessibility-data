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

(function(m){var window=this;var A4=function(){return(0,m.J)("feed-item-checkbox",B4)};var C4=function(a,b){if("FORM"==a.tagName)for(var c=a.elements,d=0;a=c[d];d++)C4(a,b);else!0==b&&a.blur(),a.disabled=b};var D4=function(a){(0,m.K)("yt-alert-content",E4).innerHTML=a;m.Q.show(E4);m.Q.hide(F4)};var G4=function(){var a=[],b=!0,c=A4();(0,m.C)(c,function(c){c.checked&&(a.push(c.value),b=!1)});(0,m.rb)(H4,"video-ids",a.join(","));C4(H4,b);C4(I4,b);J4&&C4(J4,b);K4&&C4(K4,0==c.length)};
var qba=function(a,b,c,d){var e="",g={};"personal"==b?(e="/feed_ajax?action_load_personal_feed=1",g={feed_name:a}):"social"==b?(e="/feed_ajax?action_load_social_feed=1",g={feed_name:a}):"system"==b?(e="/feed_ajax?action_load_system_feed=1",g={feed_name:a}):"main"==b?e="/feed_ajax?action_load_main_feed=1":"user"==b?(e="/feed_ajax?action_load_user_feed=1",g={user_id:a}):"collection"==b&&(e="/feed_ajax?action_load_collection_feed=1",g={collection_id:a});c&&(g.filter_type=c);d&&(g.paging=d);(0,m.x)("FEED_DEBUG")&&
(g.debug=(0,m.x)("FEED_DEBUG"));return{url:e,da:g}};var L4=function(a){D4(a);m.Q.toggle((0,m.I)("watch-history-pause-container"),(0,m.I)("watch-history-resume-container"))};var M4=function(){var a=(0,m.J)("watched",B4).length;N4&&C4(N4,0==a)};var O4=function(a){if(P4){var b=(0,window.parseInt)((0,m.hk)(P4).replace(rba,""),10);P4.innerHTML=b-a}G4();(0,m.aq)(Q4,!1);(0,m.ql)(B4)};
var sba=function(a,b,c,d,e){c=qba(b,c,d,e);b=c.url;c=c.da;var g=(0,m.K)("feed-load-more-container",a);(0,m.R)(g,"loading");var h=(0,m.K)("feed-list",a);(0,m.W)(b,{da:c,format:"JSON",onSuccess:function(b,c){var d=(0,m.bm)(c.feed_html);if(d){var e=(0,m.K)("last",a);e&&(0,m.V)(e,"last");h.appendChild(d);(0,m.ql)(h);m.vz.getInstance().wd();(0,m.V)(g,"loading");c.paging?(0,m.rb)(a,"paging",c.paging):m.Q.hide(g);m.Q.hide(R4)}else(0,m.V)(g,"loading")},onError:function(){(0,m.V)(g,"loading");m.Q.show(R4)}})};
var tba=function(){D4((0,m.Wa)("HISTORY_FEED_CLEARED"));var a=A4();0!=a.length&&((0,m.Jc)(a[0],"UL").innerHTML="",G4())};var uba=function(){L4((0,m.Wa)("HISTORY_FEED_RESUMED"))};var vba=function(){L4((0,m.Wa)("HISTORY_FEED_PAUSED"))};var S4=function(){m.Q.hide(E4);m.Q.show(F4)};var wba=function(){var a=0;(0,m.C)(A4(),function(b){b.checked&&((0,m.Dc)((0,m.Jc)(b,"LI")),a++)});O4(a)};
var xba=function(){D4((0,m.Wa)("WATCHED_VIDEOS_REMOVED"));var a=0;(0,m.C)((0,m.J)("watched",B4),function(b){(0,m.Dc)((0,m.Jc)(b,"LI"));a++});O4(a);M4()};var T4=function(a){(0,m.C)(A4(),function(b){(0,m.aq)(b,a)});G4()};var yba=function(a){a=a.getServiceInfo();for(var b in a){var c=(0,m.I)(b+"-connected");if(c){var d=a[b],e=(0,m.I)(b+"-not-connected"),g=(0,m.I)(b+"-display-name"),h=d.is_connected;m.Q.Ab(c,h);m.Q.Ab(e,!h);(0,m.jk)(g,d.connected_as||"")}}};
var U4=function(a){a=(0,m.L)(a,"feed-container");var b=(0,m.L)(a,"individual-feed"),c=(0,m.F)(b,"feed-name")||null,b=(0,m.F)(b,"feed-type")||null,d=(0,m.F)(a,"filter-type")||null,e=(0,m.F)(a,"paging")||null;sba(a,c,b,d,e)};var zba=function(){(0,m.W)("/feed_change_ajax",{method:"POST",da:{action_clear_history:1},aa:{session_token:(0,m.em)("feed_change_ajax")},onSuccess:tba,onError:S4})};
var Aba=function(){(0,m.W)("/feed_change_ajax",{method:"POST",da:{action_resume_history:1},aa:{session_token:(0,m.em)("feed_change_ajax")},onSuccess:uba,onError:S4})};var Bba=function(){(0,m.W)("/feed_change_ajax",{method:"POST",da:{action_pause_history:1},aa:{session_token:(0,m.em)("feed_change_ajax")},onSuccess:vba,onError:S4})};
var Cba=function(){(0,m.W)("/feed_change_ajax",{method:"POST",da:{action_clear_watched_from_watch_later:1},aa:{session_token:(0,m.em)("feed_change_ajax")},onSuccess:xba,onError:S4})};
var Dba=function(){var a=(0,m.F)(H4,"video-ids"),b={};switch(V4){case "history":b.action_remove_history_entries=1;break;case "watch_later":b.action_remove_watch_later_entries=1;break;case "favorites":b.action_remove_favorites_entries=1;break;default:throw Error("Unsupported feed name: "+V4);}(0,m.W)("/feed_change_ajax",{method:"POST",da:b,aa:{session_token:(0,m.em)("feed_change_ajax"),video_ids:a},onSuccess:wba,onError:S4})};var Eba=function(){G4()};
var Fba=function(a){a="false"!=(0,m.F)(a.currentTarget,"enabled");(0,m.aq)(Q4,a);T4(a)};var Gba=function(a){T4(a.currentTarget.checked)};var W4=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};var Hba=function(a){W4(a);a=(0,m.L)(a.currentTarget,"feed-item-collapsed-container");(0,m.Tn)(a,"expanded","collapsed");(0,m.mn)()};var Iba=function(a){W4(a);a=(0,m.L)(a.currentTarget,"feed-item-collapsed-container");(0,m.Tn)(a,"collapsed","expanded");(0,m.mn)()};
var Jba=function(a){U4(a.currentTarget)};var X4=function(a,b){this.b=a;this.k=b;this.g=null;this.i=(0,m.I)("page");this.g=(0,m.M)((0,m.I)("premium-yva-close"),"click",(0,m.s)(this.Rs,this));var c=this.b;m.nd.getInstance().get("HIDDEN_MASTHEAD_ID")==c||(0,m.R)(this.i,"masthead-ad-expanded");this.j=(0,m.M)(window,"message",(0,m.s)(this.HB,this))};var Y4=function(a){var b=m.nd.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()};
var Kba=function(){var a=(0,m.x)("PYV_IFRAME_CONTENT"),b=(0,m.I)((0,m.x)("PYV_IFRAME_ID"));b&&(b=b.contentDocument||b.contentWindow.document,b.open(),b.write("<!DOCTYPE html><html><head></head><body>"+a+"</body></html>"),m.Gb||b.close())};var Lba=function(){var a=(0,m.I)("destination-moments-promo");if(a){var b=(0,m.F)(a,"column-name")||"";Z4=(0,m.X)(a,"click",(0,m.t)(Mba,b),"destination-moments-promo-close")}};
var Mba=function(a){var b=(0,m.L)((0,m.I)("destination-moments-promo"),"browse-list-item-container"),c=(0,m.K)("feed-item-dismissal-hide",b),b=(0,m.K)("feed-item-dismissable",b);m.Q.show(c);m.Q.hide(b);(new m.nw(a)).write("write_reject")};
var Nba=function(){var a=(0,m.I)("i18n-local-languages-feed-promo");if(a){var b=(0,m.F)(a,"column-name");if(b){var c={gl:(0,m.F)(a,"promo-gl")},c=(0,m.Yb)(c);(0,m.Im)("i18n-promo-show",c,void 0);c=(0,m.t)(Oba,b);$4.push((0,m.X)(null,"click",(0,m.t)(Pba,b),"i18n-local-languages-feed-promo-language-option"),(0,m.X)(a,"click",c,"i18n-local-languages-feed-promo-close"))}}};
var Pba=function(a,b){function c(){var a=window.document.forms["i18n-local-languages-feed-promo-form"];a.hl.value=d;a.submit()}var d=(0,m.F)(b.currentTarget,"lang-code"),e=(0,m.I)("i18n-local-languages-feed-promo"),g=(0,m.F)(e,"promo-gl"),e=(0,m.F)(e,"current-lang");(0,m.sn)("i18n-promo-select",(0,m.Yb)({gl:g,lang:d,current:e}));(new m.nw(a)).write("write_accept",{onSuccess:c,onError:c})};var Oba=function(a){(0,m.S)($4);$4=[];(new m.nw(a)).write("write_dismiss")};
var Qba=function(){var a=(0,m.I)("music-onboarding-promo");if(a){var b=(0,m.F)(a,"column-name")||"";a5=(0,m.X)(a,"click",(0,m.t)(Rba,b),"music-onboarding-promo-close")}};var Rba=function(a){m.Q.hide((0,m.L)((0,m.I)("music-onboarding-promo"),"feed-item-container"));(new m.nw(a)).write("write_reject")};var Sba=function(){(0,m.S)(b5);(0,m.fb)(c5);(0,m.C)(d5,function(a){(0,m.A)(a)})};var Tba=function(a){a.preventDefault();a=(0,m.L)(a.currentTarget,"branded-page-related-channels-item");e5(a,!0)};
var f5=function(a){(0,m.$v)(a,{duration:0.3,Ca:function(){(0,m.Dc)(a)}})};var Uba=function(a){var b=(0,m.J)("branded-page-related-channels-item"),c=(0,m.za)(b,function(b){return(0,m.F)(b,"external-id")==a});c&&d5.push((0,m.z)(function(){e5(c,!1)},2E3))};
var e5=function(a,b){var c=window.document.getElementById("channels_you_may_know"),c=c&&(0,m.Ic)(c,a),d=!!(0,m.K)("branded-page-related-channels-featured-badge",a),e=(0,m.F)(a,"external-id"),g=(0,m.Jc)(a,"ul"),g=(0,m.J)("branded-page-related-channels-item",g),g=(0,m.Og)(g,function(a){return(0,m.F)(a,"external-id")}),h={};d&&(h.featured=1);c&&(h.channels_you_may_know=1);(0,m.W)("/guide_ajax?action_reload_channel=1",{method:"POST",da:h,aa:{session_token:(0,m.em)("guide_ajax"),dismissed_id:e,shown_ids:g.join(),
dismiss_old_channel:b},onSuccess:function(b,c){var d=c.new_suggested_html;d?(d=(0,m.yn)(d),(0,m.On)(d,a),(0,m.ql)(d),(0,m.Zv)(d,0,1,{duration:0.3})):f5(a)},onError:function(){f5(a)}})};
var Vba=function(){var a;if(a=(0,m.x)("INNERTUBE_HOLDBACK")?(0,m.I)("user-interests-promo-holdback"):(0,m.I)("user-interests-promo")){var b=(0,m.F)(a,"external-id")||"";g5.push((0,m.X)(a,"click",(0,m.t)(Wba,b),"user-interests-promo-close"));g5.push((0,m.X)(a,"click",(0,m.t)(Xba,b),"user-interests-promo-yes"));g5.push((0,m.X)(a,"click",(0,m.t)(Yba,b),"user-interests-promo-no"))}};var Wba=function(a,b){(0,m.x)("INNERTUBE_HOLDBACK")?m.Q.hide("user-interests-promo-holdback"):h5(b.target);i5&&j5(a,"dismiss")};
var h5=function(a){var b=(0,m.L)(a,"browse-list-item-container");a=(0,m.K)("feed-item-dismissal-hide",b);b=(0,m.K)("feed-item-dismissable",b);m.Q.show(a);m.Q.hide(b)};
var Xba=function(a){var b;(0,m.x)("INNERTUBE_HOLDBACK")?(m.Q.hide("user-interests-promo-question-holdback"),m.Q.show("user-interests-promo-details-holdback"),b=(0,m.I)("user-interests-promo-shelf-holdback")):(m.Q.hide("user-interests-promo-question"),m.Q.show("user-interests-promo-details"),b=(0,m.I)("user-interests-promo-shelf"));i5=!1;j5(a,"yes");m.vz.getInstance().wd();b&&(0,m.ql)(b)};
var Yba=function(a,b){(0,m.x)("INNERTUBE_HOLDBACK")?m.Q.hide("user-interests-promo-holdback"):h5(b.target);j5(a,"no")};var j5=function(a,b){var c=(0,m.em)("user_interests_promo_ajax_token"),d={external_channel_id:a};d["action_"+b]=1;(0,m.W)("/user_interests_promo_ajax",{method:"POST",da:d,aa:{session_token:c}})};
var Zba=function(){"DELAYED_EMBEDED"in m.Oa&&(0,m.C)((0,m.x)("DELAYED_EMBEDED"),function(a){(0,m.of)(a.container,a.swf_config)});"MASTHEAD_ENCRYPTED_ID"in m.Oa&&(window.masthead=new X4((0,m.x)("MASTHEAD_ENCRYPTED_ID"),(0,m.x)("MASTHEAD_IS_BRANDED")));"PYV_IFRAME_ID"in m.Oa&&Kba();Lba();Nba();Qba();Vba();b5=(0,m.X)(window.document.body,"click",Tba,"branded-page-related-channels-item-close");c5.push((0,m.B)("subscription-subscribe-loaded",Uba));(0,m.xA)();var a=(0,m.I)("destination-moments-promo");
a&&(a={"impression-count":(0,m.F)(a,"impression-count")||""},(0,m.sn)("destination-moments-promo-show",(0,m.Yb)(a)))};var k5=function(){this.ea=(0,m.I)("tag-editing-menu");this.gi=(0,m.K)("yt-combobox-menu-content",this.ea);this.b=(0,m.K)("yt-combobox-search-input",this.ea);this.g=(0,m.K)("tag-resource-container");this.Hc()};var l5=function(a){a.bf?a.zp=!0:a.jf()};
var $ba=function(a,b){a.i=(0,m.K)("add-new-tag");a.Uv=(0,m.K)("apply-tag-changes");if(b){var c=(0,m.xc)("input","tag-checkbox",void 0);(0,m.C)(c,function(a){var c=b[a.value];(0,m.rb)(a,"initial-tag-membership",c);(0,m.rb)(a,"current-tag-membership",c);"ALL"==c?a.checked=!0:"SOME"==c&&(0,m.eq)(a,!0)},a)}m5(a)};var m5=function(a){for(var b=(0,m.xc)("input","tag-checkbox",void 0),c=!1,d=0;d<b.length;d++)if(!aca(b[d])){c=!0;break}c?(0,m.Ak)(a.ea,"show-new","show-apply"):(0,m.Ak)(a.ea,"show-apply","show-new")};
var aca=function(a){switch((0,m.F)(a,"initial-tag-membership")){case "SOME":if(a.vm)return!0;break;case "NONE":if(!a.checked)return!0;break;case "ALL":if(a.checked)return!0}return!1};var n5=function(a,b){if(b){var c=b.error;if(c){var d=(0,m.K)("error-small-template",a.ea),d=(0,m.Bn)(d);o5(a,"yt-alert-error",c,d,8E3)}}};var p5=function(a,b){if(b){var c=b.success_msg;if(c){var d=(0,m.K)("success-small-template",a.ea),d=(0,m.Bn)(d);o5(a,"yt-alert-success",c,d,3E3)}}};
var o5=function(a,b,c,d,e){var g=(0,m.K)("tag-menu-notifications",a.ea);(0,m.Ps)(b,c,d,g);(0,m.z)((0,m.s)(function(){(new m.sv(d,750)).play()},a),e)};var q5=function(a){a=(0,m.xc)("input",a,void 0);for(var b=[],c=[],d=0;d<a.length;d++){var e=a[d];e.vm||(e.checked?b.push(e.value):c.push(e.value))}return{checked_values:b,unchecked_values:c}};var r5=function(){m.hb.call(this,"www/feed",["www/common"],["feed","index"],bca,cca)};
var bca=function(){m.yq.getInstance().wd();m.vz.getInstance().wd();Zba();var a=m.ZA=(0,m.I)("feed");s5.push((0,m.X)(a,"click",Jba,"feed-load-more"));s5.push((0,m.X)(a,"click",Iba,"feed-item-expander-button"));s5.push((0,m.X)(a,"click",Hba,"feed-item-collapser-button"));t5.push((0,m.B)("page-resize",m.YA));(0,m.YA)();var b=(0,m.K)("individual-feed"),c=!1;b&&(u5=(0,m.F)(b,"feed-name"),c="user"==(0,m.F)(b,"feed-type"));if("history"==u5||"watch_later"==u5||"favorites"==u5)V4=b=u5,B4=a,Q4=(0,m.I)("feed-item-select-all-checkbox"),
E4=(0,m.I)("managed-feed-success"),F4=(0,m.I)("managed-feed-error"),I4=(0,m.I)("feed-item-remove-videos"),J4=(0,m.I)("tag-menu-button"),K4=(0,m.I)("managed-toolbar-play-all-button"),P4=(0,m.I)("feed-title-count"),v5=(0,m.K)("branded-page-v2-primary-col-header-container"),H4=(0,m.K)("addto-button",v5),w5.push((0,m.M)(Q4,"click",Gba)),w5.push((0,m.X)(window.document.body,"click",Fba,"feed-item-selection-action")),w5.push((0,m.X)(window.document.body,"click",Eba,"feed-item-checkbox")),w5.push((0,m.M)(I4,
"click",Dba)),"watch_later"==b&&(N4=(0,m.I)("watch-later-clear-watched-button"),w5.push((0,m.M)(N4,"click",Cba)),M4()),"history"==b&&(w5.push((0,m.M)((0,m.I)("watch-history-pause-button"),"click",Bba)),w5.push((0,m.M)((0,m.I)("watch-history-resume-button"),"click",Aba)),w5.push((0,m.X)(window.document.body,"click",zba,"watch-history-clear-button")));(0,m.Xu)({"feed-load-more":U4});if((0,m.x)("INIT_AUTOSHARE")){b=new m.XA((0,m.em)("autoshare"));b.addServiceChangedCallback(yba);var d=(0,m.I)("facebook-connect-button");
d&&b.registerConnectDialogLauncher(d,"facebook",!0);(d=(0,m.I)("twitter-connect-button"))&&b.registerConnectDialogLauncher(d,"twitter",!0);(d=(0,m.I)("orkut-connect-button"))&&b.registerConnectDialogLauncher(d,"orkut",!0);window.autoshare=b}(0,m.yA)(a,c);(0,m.Ct)(0);(0,m.Mz)()};
var cca=function(){(0,m.Ma)("DELAYED_EMBEDED",[]);window.masthead&&window.masthead.dispose();Z4&&((0,m.S)(Z4),Z4=null);(0,m.S)($4);$4=[];a5&&((0,m.S)(a5),a5=null);(0,m.S)(g5);g5.length=0;Sba();(0,m.Ls)(m.wA);R4=m.ZA=null;(0,m.S)(s5);s5.length=0;(0,m.fb)(t5);t5.length=0;if("history"==u5||"watch_later"==u5||"favorites"==u5)(0,m.S)(w5),w5=[],J4=E4=F4=Q4=P4=K4=N4=I4=H4=v5=B4=null;(0,m.mz)()};var B4,J4,E4,F4,K4,I4,H4,rba=/[^\d\.\ ]/g,Q4,P4,N4,R4,V4,w5=[],v5,t5=[],s5=[],u5;(0,m.v)(X4,m.Ia);var dca=/^https?:\/\/(ad.doubleclick|s0.2mdn).net$/;
m.f=X4.prototype;m.f.HB=function(a){a&&a.origin&&dca.test(a.origin)&&"creative2yt_requestClose"==a.data&&this.Fx()};m.f.J=function(){X4.D.J.call(this);(0,m.S)(this.g);(0,m.S)(this.j);this.j=this.g=null};m.f.Fx=function(){m.Q.hide("ad_creative_1");(0,m.E)("ads-masthead-hide");(0,m.Ql)((0,m.I)("page"),!0);(0,m.mn)();this.k&&m.Q.hide("ad_creative_collapse_btn_1");m.Q.show("ad_creative_expand_btn_1");(0,m.V)(this.i,"masthead-ad-expanded");Y4(this.b);(0,m.Im)("homepage_collapse_masthead_ad",void 0,void 0)};
m.f.Rs=function(){m.Q.show("ad_creative_expand_btn_1");(0,m.Dc)((0,m.I)("premium-yva"));(0,m.Dc)((0,m.I)("video-masthead"));(0,m.mn)();Y4(this.b)};m.f.fK=function(){(0,m.Tn)(window.document.getElementById("premium-yva"),"premium-yva-unexpanded","premium-yva-expanded")};m.f.gK=function(){(0,m.Tn)(window.document.getElementById("premium-yva"),"premium-yva-expanded","premium-yva-unexpanded")};m.f.VJ=function(){m.Q.hide("premium-yva");(0,m.V)((0,m.I)("premium-yva"),"premium-yva-unexpanded")};
m.f.jK=function(){var a=m.nd.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();(0,m.Im)("homepage_expand_masthead_ad",void 0,void 0);(0,m.bc)(window.document.location.href)};var Z4;var $4=[];var a5;var b5,c5=[],d5=[];var g5=[],i5=!0;(0,m.ea)(k5);m.f=k5.prototype;m.f.bf=!1;m.f.zp=!1;
m.f.jf=function(){var a={},b=this.b.value;(0,m.en)(b)||(a.search=b);var b=[],c=[],b=q5("tag-video-checkbox").checked_values,c=q5("tag-playlist-checkbox").checked_values;this.bf=!0;this.zp=!1;(0,m.W)("/labels_ajax?action_tag_menu_dropdown=1",{method:"POST",P:this,da:a,aa:{video_ids:b,playlist_ids:c},onSuccess:function(a,b){var c=b.tag_membership;this.gi.innerHTML=b.html_content||"";$ba(this,c);this.bf=!1;(0,m.H)(this.ea,"loading");(0,m.bq)();this.zp&&this.jf()},onError:function(a){this.bf=!1;(0,m.H)(this.ea,
"loading");n5(this,(0,m.fd)(a.response))}})};
m.f.Hc=function(){(0,m.M)(this.b,"keydown",(0,m.s)(this.Du,this));(0,m.M)(this.b,"paste",(0,m.s)(this.Du,this));(0,m.X)(this.ea,"click",(0,m.s)(this.UE,this),"tag-checkbox");(0,m.X)(this.ea,"click",(0,m.s)(this.TE,this),"add-new-tag");(0,m.X)(this.ea,"click",(0,m.s)(this.SE,this),"apply-tag-changes");this.g&&((0,m.X)(this.g,"click",(0,m.s)(this.Yo,this),"tag-video-checkbox"),(0,m.X)(this.g,"click",(0,m.s)(this.Yo,this),"tag-playlist-checkbox"));(0,m.X)(window.document.body,"click",(0,m.s)(this.Yo,
this),"tag-refresh")};m.f.Du=function(){(0,m.z)((0,m.s)(function(){l5(this)},this),0)};m.f.UE=function(a){a=a.target;switch((0,m.F)(a,"current-tag-membership")){case "SOME":a.vm=!1;(0,m.rb)(a,"current-tag-membership","ALL");break;case "ALL":(0,m.rb)(a,"current-tag-membership","NONE");break;case "NONE":"SOME"==(0,m.F)(a,"initial-tag-membership")?((0,m.eq)(a,!0),(0,m.rb)(a,"current-tag-membership","SOME")):(0,m.rb)(a,"current-tag-membership","ALL")}m5(this)};m.f.Yo=function(){(0,m.G)(this.ea,"loading")};
m.f.TE=function(){this.i.disabled=!0;var a=this.b.value,b=q5("tag-video-checkbox").checked_values,c=q5("tag-playlist-checkbox").checked_values,a={title:a,video_ids:b,playlist_ids:c},a={method:"POST",da:{session_token:(0,m.F)(this.ea,"ajax-token")},aa:a,onSuccess:function(a,b){p5(this,b);l5(this)},onError:function(a){n5(this,(0,m.fd)(a.response));l5(this)},P:this};(0,m.W)("/labels_ajax?action_create_and_apply_tag=1",a)};
m.f.SE=function(){this.Uv.disabled=!0;var a=q5("tag-video-checkbox").checked_values,b=q5("tag-playlist-checkbox").checked_values,c=q5("tag-checkbox"),d=(0,m.xc)("input","tag-checkbox",void 0).length;(0,m.W)("/labels_ajax?action_update_membership=1",{P:this,method:"POST",da:{session_token:(0,m.F)(this.ea,"ajax-token")},aa:{video_ids:a,playlist_ids:b,tags_to_add:c.checked_values,tags_to_remove:c.unchecked_values,num_tags:d},onSuccess:function(a,b){p5(this,b);l5(this)},onError:function(a){this.Uv.disabled=
!1;n5(this,(0,m.fd)(a.response))}})};(0,m.l)("yt.flash.embed",m.of,void 0);(0,m.l)("yt.www.ads.pyv.pyvHomeAfcCallback",m.sz,void 0);(0,m.l)("yt.www.ads.MastheadAd",X4,void 0);(0,m.l)("yt.www.lists.addto.toggleMenu",m.wz,void 0);(0,m.l)("yt.www.TagEditingMenu.toggleTagMenu",function(a,b){if(b){var c=(0,m.I)("tag-editing-menu");(0,m.pc)(c,"loading")?k5.getInstance().jf():(k5.getInstance(),(0,m.bq)());c=(0,m.K)("yt-combobox-search-input",c);(0,m.z)((0,m.s)(c.focus,c),0)}},void 0);X4.prototype.autoCollapsePremiumYva=X4.prototype.VJ;
X4.prototype.collapse_ad=X4.prototype.Fx;X4.prototype.expand_ad=X4.prototype.jK;X4.prototype.userCollapsePremiumYva=X4.prototype.Rs;X4.prototype.userExpandPremiumYva=X4.prototype.fK;X4.prototype.userUnexpandPremiumYva=X4.prototype.gK;(0,m.v)(r5,m.hb);r5.prototype.enable=function(){r5.D.enable.call(this);(0,m.qn)(m.ke);(0,m.qn)(m.vz)};r5.prototype.disable=function(){r5.D.disable.call(this);(0,m.pn)(m.ke);(0,m.pn)(m.vz)};(0,m.ib)(new r5);})(_yt_www);


}
/*
     FILE ARCHIVED ON 22:11:46 Jan 31, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:50:05 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 65.572
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.105
  cdx.remote: 0.086
  esindex: 0.011
  LoadShardBlock: 35.761 (3)
  PetaboxLoader3.datanode: 93.216 (5)
  load_resource: 263.492 (2)
  PetaboxLoader3.resolve: 197.244 (2)
*/