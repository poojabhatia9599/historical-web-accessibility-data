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

(function(m){var window=this;var qH=function(a){(0,m.V)("/addto_ajax?action_delete_from_playlist=1",{format:"XML",method:"POST",P:{video_ids:a.Aa,full_list_id:a.pe||"",session_token:(0,m.G)("addto_ajax")},R:a.R,onError:a.onError,onSuccess:a.onSuccess})};var rH=function(a,b){if("FORM"==a.tagName)for(var c=a.elements,d=0;a=c[d];d++)rH(a,b);else!0==b&&a.blur(),a.disabled=b};var sH=function(a){a=a||window.event;a.returnValue=!1;a.preventDefault&&a.preventDefault()};
var tH=function(a,b){this.j=a;this.D=b;this.b=null;this.k=(0,m.L)("page");this.b=(0,m.Q)((0,m.L)("premium-yva-close"),"click",(0,m.r)(this.Lh,this));m.ng.getInstance().get("HIDDEN_MASTHEAD_ID")==this.j||(0,m.H)(this.k,"masthead-ad-expanded")};var uH=function(a){var b=m.ng.getInstance();b.set("HIDDEN_MASTHEAD_ID",a);b.save()};
var vH=function(a,b){this.M="session_token="+a;(this.b=window.document.location.protocol+"//"+window.document.location.hostname)&&"/"!=this.b.charAt(this.b.length-1)&&(this.b+="/");this.k=b;this.D=null;this.H=[];this.F=[];this.J={}};var wH=function(){return(0,m.M)("feed-item-checkbox",xH)};var yH=function(a){zH(a.currentTarget.checked)};var AH=function(a){a="false"!=(0,m.C)(a.currentTarget,"enabled");(0,m.Ok)(BH,a);zH(a)};var zH=function(a){(0,m.y)(wH(),function(b){(0,m.Ok)(b,a)});CH()};var DH=function(){CH()};
var CH=function(){var a=[],b=!0,c=wH();(0,m.y)(c,function(c){c.checked&&(a.push(c.value),b=!1)});(0,m.E)(EH,"video-ids",a.join(","));rH(EH,b);rH(FH,b);GH&&rH(GH,b);HH&&rH(HH,0==c.length)};
var IH=function(){var a=(0,m.C)(EH,"video-ids"),b={};switch(JH){case "history":b.action_remove_history_entries=1;break;case "watch_later":b.action_remove_watch_later_entries=1;break;case "favorites":b.action_remove_favorites_entries=1;break;default:throw Error("Unsupported feed name: "+JH);}(0,m.V)("/feed_change_ajax",{method:"POST",Q:b,P:{session_token:(0,m.G)("feed_change_ajax"),video_ids:a},onSuccess:KH,onError:LH})};
var KH=function(){var a=0;(0,m.y)(wH(),function(b){b.checked&&((0,m.Kd)((0,m.ee)(b,"LI")),a++)});if(MH){var b=(0,window.parseInt)((0,m.$d)(MH).replace(NH,""),10);MH.innerHTML=b-a}CH();(0,m.Ok)(BH,!1);(0,m.ip)(xH)};var LH=function(){m.T.hide(OH);m.T.show(PH)};var QH=function(){(0,m.V)("/feed_change_ajax",{method:"POST",Q:{action_pause_history:1},P:{session_token:(0,m.G)("feed_change_ajax")},onSuccess:RH,onError:LH})};var RH=function(){SH((0,m.F)("HISTORY_FEED_PAUSED"))};
var TH=function(){(0,m.V)("/feed_change_ajax",{method:"POST",Q:{action_resume_history:1},P:{session_token:(0,m.G)("feed_change_ajax")},onSuccess:UH,onError:LH})};var UH=function(){SH((0,m.F)("HISTORY_FEED_RESUMED"))};var SH=function(a){VH(a);m.T.toggle((0,m.L)("watch-history-pause-container"),(0,m.L)("watch-history-resume-container"))};var VH=function(a){(0,m.N)("yt-alert-content",OH).innerHTML=a;m.T.show(OH);m.T.hide(PH)};
var WH=function(){(0,m.V)("/feed_change_ajax",{method:"POST",Q:{action_clear_history:1},P:{session_token:(0,m.G)("feed_change_ajax")},onSuccess:XH,onError:LH})};var XH=function(){VH((0,m.F)("HISTORY_FEED_CLEARED"));var a=wH();0!=a.length&&((0,m.ee)(a[0],"UL").innerHTML="",CH())};var YH=function(a){ZH(a.currentTarget)};
var ZH=function(a){a=(0,m.P)(a,"feed-container");var b=(0,m.P)(a,"individual-feed"),c=(0,m.C)(b,"feed-name")||null,b=(0,m.C)(b,"feed-type")||null,d=(0,m.C)(a,"filter-type")||null,e=(0,m.C)(a,"paging")||null;$H(a,c,b,d,e)};
var $H=function(a,b,c,d,e){c=aI(b,c,d,e);b=c.url;c=c.Q;var g=(0,m.N)("feed-load-more-container",a);(0,m.H)(g,"loading");(0,m.V)(b,{Q:c,format:"JSON",onSuccess:function(b,c){var d=(0,m.Ze)(c.feed_html);if(d){var e=(0,m.N)("last",a);e&&(0,m.I)(e,"last");(0,m.Hd)(d,g);(0,m.ip)(d);m.Jt.getInstance().ob();(0,m.I)(g,"loading");c.paging?(0,m.E)(a,"paging",c.paging):m.T.hide(g);m.T.hide(bI)}else(0,m.I)(g,"loading")},onError:function(){(0,m.I)(g,"loading");m.T.show(bI)}})};
var cI=function(a){a=a.getServiceInfo();for(var b in a){var c=(0,m.L)(b+"-connected");if(c){var d=a[b],e=(0,m.L)(b+"-not-connected"),g=(0,m.L)(b+"-display-name"),h=d.is_connected;m.T.ab(c,h);m.T.ab(e,!h);(0,m.Xd)(g,d.connected_as||"")}}};var dI=function(a){var b=(0,m.L)("mep-container");if(null!=b)for(var b=(0,m.M)("yt-uix-subscription-button",b),c=0;c<b.length;c++)if((0,m.C)(b[c],"channel-external-id")==a){a=(0,m.P)(b[c],"music-promo-item");eI(a);(0,m.H)(a,"subscribed");break}};
var fI=function(a){var b=(0,m.P)(a.currentTarget,"music-promo-item");a=(0,m.C)(b,"external-id");var c=(0,m.J)(b,"last")?1:0,d=gI.shift();(0,m.V)("/engagement_wizard_ajax",{method:"POST",Q:{action_dismiss_item_mep2:"1"},P:{session_token:(0,m.G)("engagement_wizard_ajax"),dismissed_channel:a,next_channel:d,is_last_item:c,column_name:(0,m.v)("MEP_COLUMN_NAME")},ba:function(a,c){(0,m.lt)(b,{duration:0.5,ba:function(){var a=c.html_content;m.T.hide(b);if(a){b.innerHTML=a;var d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);
else{for(;a=b.firstChild;)d.insertBefore(a,b);(0,m.Kd)(b)}(0,m.kt)(b,0,1,{duration:0.5})}if(0==gI.length)for(a=(0,m.M)("mep2-dismiss-button"),d=0;d<a.length;d++)m.T.setVisible(a[d],!1)}})}})};var hI=function(a){a=(0,m.P)(a.currentTarget,"music-promo-item");var b=(0,m.J)(a,"collapsed"),c=(0,m.J)(a,"subscribed");b&&c&&eI(a)};var eI=function(a){if(!(0,m.J)(a,"expanded")){var b=(0,m.L)("mep-container");null!=b&&((b=(0,m.N)("expanded",b))&&(0,m.Uc)(b,"expanded","collapsed"),(0,m.Uc)(a,"collapsed","expanded"))}};
var iI=function(a){sH(a);a=(0,m.P)(a.currentTarget,"feed-item-collapsed-container");(0,m.Vc)(a,"collapsed","expanded");(0,m.tm)()};var jI=function(a){sH(a);a=(0,m.P)(a.currentTarget,"feed-item-collapsed-container");(0,m.Vc)(a,"expanded","collapsed");(0,m.tm)()};
var kI=function(a){sH(a);var b=(0,m.P)(a.currentTarget,"context-data-item");a=(0,m.P)(a.currentTarget,"feed-item-container");b=(0,m.C)(b,"context-item-id");a.parentNode.innerHTML='<iframe type="text/html" width="640" height="390" src="https://web.archive.org/web/20131031224637/http://www.youtube.com/embed/__VID__?autoplay=1" frameborder="0"/>'.replace("__VID__",b)};
var aI=function(a,b,c,d){var e="",g={};"personal"==b?(e="/feed_ajax?action_load_personal_feed=1",g={feed_name:a}):"social"==b?(e="/feed_ajax?action_load_social_feed=1",g={feed_name:a}):"system"==b?(e="/feed_ajax?action_load_system_feed=1",g={feed_name:a}):"main"==b?e="/feed_ajax?action_load_main_feed=1":"user"==b?(e="/feed_ajax?action_load_user_feed=1",g={user_id:a}):"collection"==b&&(e="/feed_ajax?action_load_collection_feed=1",g={collection_id:a});c&&(g.filter_type=c);d&&(g.paging=d);(0,m.v)("FEED_DEBUG")&&
(g.debug=(0,m.v)("FEED_DEBUG"));return{url:e,Q:g}};var lI=function(){var a=(0,m.M)("multirow-shelf",mI);(0,m.y)(a,function(a){var c=0,d=null,e=(0,m.od)("li","yt-shelf-grid-item",a);(0,m.y)(e,function(a){m.T.ta(a)&&(a=(0,m.Tf)(a).x,(a<=d||!d)&&c++,d=a)});a=(0,m.N)("yt-uix-expander-head",a);(0,m.Wc)(a,"hidden-expander",2>=c)})};
var nI=function(){var a=(0,m.v)("PYV_IFRAME_CONTENT"),b=(0,m.L)((0,m.v)("PYV_IFRAME_ID"));b&&(b=b.contentDocument||b.contentWindow.document,b.open(),b.write("<!DOCTYPE html><html><head></head><body>"+a+"</body></html>"),m.K||b.close())};var oI=function(){var a=(0,m.L)("destination-moments-promo");if(a){var b=(0,m.C)(a,"column-name")||"";pI=(0,m.S)(a,"click",(0,m.B)(qI,b),"destination-moments-promo-close")}};var qI=function(a){m.T.hide((0,m.L)("destination-moments-promo"));(new m.Kt(a)).write("write_reject")};
var rI=function(){var a=(0,m.L)("i18n-local-languages-feed-promo");if(a){var b=(0,m.C)(a,"column-name");if(b){(0,m.Le)("i18n-promo-show",void 0,void 0);var c=(0,m.B)(sI,b),b=(0,m.B)(tI,b);uI.push((0,m.S)(null,"click",c,"i18n-local-languages-feed-promo-language-option"),(0,m.S)(a,"click",b,"i18n-local-languages-feed-promo-close"))}}};
var sI=function(a,b){function c(){var a=window.document.forms["i18n-local-languages-feed-promo-form"];a.hl.value=d;a.submit()}var d=(0,m.C)(b.target,"lang-code");(0,m.Ke)("i18n-promo-select",(0,m.Fe)({lang:d}));(new m.Kt(a)).write("write_accept",{onSuccess:c,onError:c})};var tI=function(a){(0,m.R)(uI);uI=[];(new m.Kt(a)).write("write_dismiss")};var vI=function(){var a=(0,m.L)("music-onboarding-promo");if(a){var b=(0,m.C)(a,"column-name")||"";wI=(0,m.S)(a,"click",(0,m.B)(xI,b),"music-onboarding-promo-close")}};
var xI=function(a){m.T.hide((0,m.P)((0,m.L)("music-onboarding-promo"),"feed-item-container"));(new m.Kt(a)).write("write_reject")};var yI=function(){(0,m.R)(zI);(0,m.Ea)(AI);(0,m.y)(BI,function(a){(0,m.wa)(a)})};var CI=function(a){a.preventDefault();a=(0,m.P)(a.currentTarget,"branded-page-related-channels-item");DI(a,!0)};var EI=function(a){(0,m.lt)(a,{duration:0.3,ba:function(){(0,m.Kd)(a)}})};
var FI=function(a){var b=(0,m.M)("branded-page-related-channels-item"),c=(0,m.Hb)(b,function(b){return(0,m.C)(b,"external-id")==a});c&&BI.push((0,m.w)(function(){DI(c,!1)},2E3))};
var DI=function(a,b){var c=window.document.getElementById("channels_you_may_know"),c=c&&(0,m.Wd)(c,a),d=!!(0,m.N)("branded-page-related-channels-featured-badge",a),e=(0,m.C)(a,"external-id"),g=(0,m.ee)(a,"ul"),g=(0,m.M)("branded-page-related-channels-item",g),g=(0,m.xb)(g,function(a){return(0,m.C)(a,"external-id")}),h={};d&&(h.featured=1);c&&(h.channels_you_may_know=1);(0,m.V)("/guide_ajax?action_reload_channel=1",{method:"POST",Q:h,P:{session_token:(0,m.G)("guide_ajax"),dismissed_id:e,shown_ids:g.join(),
dismiss_old_channel:b},onSuccess:function(b,c){var d=c.new_suggested_html;d?(d=(0,m.Ze)(d),(0,m.Ld)(d,a),(0,m.ip)(d),(0,m.kt)(d,0,1,{duration:0.3})):EI(a)},onError:function(){EI(a)}})};var GI=function(){var a=(0,m.L)("user-interests-promo");if(a){var b=(0,m.C)(a,"external-id")||"";HI.push((0,m.S)(a,"click",(0,m.B)(II,b),"user-interests-promo-close"));HI.push((0,m.S)(a,"click",(0,m.B)(JI,b),"user-interests-promo-yes"));HI.push((0,m.S)(a,"click",(0,m.B)(KI,b),"user-interests-promo-no"))}};
var II=function(a){m.T.hide("user-interests-promo");LI&&MI(a,"dismiss")};var JI=function(a){m.T.hide("user-interests-promo-question");m.T.show("user-interests-promo-details");LI=!1;MI(a,"yes");m.Jt.getInstance().ob()};var KI=function(a){m.T.hide("user-interests-promo");MI(a,"no")};var MI=function(a,b){var c=(0,m.G)("promo_ajax_token"),d={external_channel_id:a};d["action_"+b]=1;(0,m.V)("/user_interests_promo_ajax",{method:"POST",Q:d,P:{session_token:c}})};
var NI=function(){"DELAYED_EMBEDED"in m.sa&&(0,m.y)((0,m.v)("DELAYED_EMBEDED"),function(a){(0,m.Dg)(a.container,a.swf_config)});"MASTHEAD_ENCRYPTED_ID"in m.sa&&(window.masthead=new tH((0,m.v)("MASTHEAD_ENCRYPTED_ID"),(0,m.v)("MASTHEAD_IS_BRANDED")));"PYV_IFRAME_ID"in m.sa&&nI();oI();rI();vI();GI();zI=(0,m.S)(window.document.body,"click",CI,"branded-page-related-channels-item-close");AI.push((0,m.x)("subscription-subscribe-loaded",FI));(0,m.au)();var a=(0,m.L)("destination-moments-promo");a&&(a={"impression-count":(0,m.C)(a,
"impression-count")||""},(0,m.Ke)("destination-moments-promo-show",(0,m.Fe)(a)))};var OI=function(a){this.F=a;this.ea=(0,m.L)("shared-addto-menu");this.H=(0,m.C)(this.F,"feature")||"";if(a=(0,m.C)(a,"deferred-save"))this.k="true"==a.toLowerCase();this.D=(0,m.C)(this.F,"video-ids")||"";(0,m.bc)(PI)||(PI=(0,m.Yg)(this.ea,"lightweight-panel"));(a=(0,m.N)("sign-in",this.ea))?(0,m.Q)(a,"click",(0,m.r)(this.to,this)):this.fc()};var QI=function(a){var b=RI(a);(0,m.z)("addto-menu-changed",{videoIds:a.D,selectedPlaylists:b})};
var SI=function(a){var b=[];(0,m.rc)(b,(0,m.M)("playlist-name",a.b.list));(0,m.y)(b,function(a){(0,m.We)(a)&&(a=(0,m.P)(a,"addto-playlist-item"),a.title=(0,m.C)(a,"possible-tooltip"))})};var TI=function(a){var b=[],c=[];a=(0,m.M)("addto-playlist-item",a.ea);(0,m.y)(a,function(a){(0,m.Yg)(a,"to-be-removed")&&b.push((0,m.C)(a,"full-list-id"));(0,m.Yg)(a,"to-be-added")&&c.push((0,m.C)(a,"full-list-id"))});return{Qp:b,Pp:c}};
var UI=function(a,b){var c=(0,m.M)("addto-playlist-item",a.ea);(0,m.y)(c,function(a){var c=(0,m.C)(a,"full-list-id");-1<(0,m.ja)(b.Qp,c)?(0,m.U)(a,"to-be-removed"):-1<(0,m.ja)(b.Pp,c)&&(0,m.U)(a,"to-be-added")})};
var RI=function(a){var b=(0,m.M)("contains-selected-videos",a.ea),c=(0,m.M)("to-be-added",a.ea),d=(0,m.M)("to-be-removed",a.ea),e=[];b&&(0,m.y)(b,function(a){-1<(0,m.ja)(d,a)||e.push({id:(0,m.C)(a,"item-id"),name:(0,m.C)(a,"item-name")})});c&&(0,m.y)(c,function(a){e.push({id:(0,m.C)(a,"item-id"),name:(0,m.C)(a,"item-name")})});return e};var VI=function(a,b){qH({Aa:a.D,pe:b,onSuccess:function(){this.fc()},R:a});(0,m.dc)(a.ea,"video-ids")};
var WI=function(a,b){if(b){var c=m.wd?"webkitTransitionEnd":m.vf?"oTransitionEnd":m.uf?"transitionend":m.K&&(0,m.ed)(10)?"MSTransitionEnd":null;c?(0,m.jf)(a,c,function(){b()}):b()}};
var XI=function(a,b,c){c=c?"slide":"fade";var d=["fade","slide"];(0,m.fw)(a.j,d);(0,m.U)(a.j,c);(0,m.fw)(b,d);(0,m.U)(b,c);PI&&b==a.b.list&&(0,m.U)(a.ea,"lightweight-panel");(0,m.Yg)(b,"dismissed-panel")?((0,m.Wg)(b,"dismissed-panel"),(0,m.Wg)(a.j,"active-panel")):(c=a.j,(0,m.Yg)(c,"active-panel")&&((0,m.Wg)(c,"active-panel"),(0,m.U)(c,"dismissed-panel")));(0,m.U)(b,"active-panel");a.j=b};
var YI=function(a){var b=a.M=(0,m.N)("addto-create-playlist",a.b.Sb);(0,m.Q)(b,"keydown",(0,m.r)(a.qg,a));(0,m.Q)(b,"paste",(0,m.r)(a.qg,a));WI(a.b.Sb,function(){b.focus()});var c=(0,m.N)("addto-create-cancel-button",a.b.Sb);(0,m.Q)(c,"click",(0,m.r)(function(){XI(this,this.b.list,!0)},a));c=(0,m.N)("create-playlist-button",a.b.Sb);(0,m.Q)(c,"click",(0,m.r)(a.An,a));a.J=(0,m.N)("privacy-form",a.b.Sb);(0,m.S)(a.J,"click",(0,m.r)(a.qg,a),"playlist-privacy-option");a.O=(0,m.N)("addto-create-playlist-label",
a.b.Sb);a.V=(0,m.N)("create-playlist-button",a.b.Sb)};var ZI=function(a,b,c,d){(0,m.Iq)({Aa:a.k?"":a.D,pe:c,Bi:a.G?b:null,privacy:d,Un:a.H,onSuccess:a.fo,onError:a.eo,R:a});a.k||(0,m.dc)(a.ea,"video-ids")};var $I=function(a,b){var c=(0,m.M)("addto-playlist-item",a.ea);return(0,m.Hb)(c,function(a){return(0,m.C)(a,"full-list-id")==b})};
var aJ=function(){this.ea=(0,m.L)("tag-editing-menu");this.wm=(0,m.N)("yt-combobox-menu-content",this.ea);this.b=(0,m.N)("yt-combobox-search-input",this.ea);this.j=(0,m.N)("tag-resource-container");this.Ra()};var bJ=function(a){a.$e?a.tg=!0:a.fc()};
var cJ=function(a,b){a.k=(0,m.N)("add-new-tag");a.cj=(0,m.N)("apply-tag-changes");if(b){var c=(0,m.od)("input","tag-checkbox",void 0);(0,m.y)(c,function(a){var c=b[a.value];(0,m.E)(a,"initial-tag-membership",c);(0,m.E)(a,"current-tag-membership",c);"ALL"==c?a.checked=!0:"SOME"==c&&(0,m.Sk)(a,!0)},a)}dJ(a)};
var dJ=function(a){for(var b=(0,m.od)("input","tag-checkbox",void 0),c=!1,d=0;d<b.length;d++)if(!eJ(b[d])){c=!0;break}c?(a=a.ea,(0,m.Wg)(a,"show-new"),(0,m.U)(a,"show-apply")):(a=a.ea,(0,m.Wg)(a,"show-apply"),(0,m.U)(a,"show-new"))};var eJ=function(a){switch((0,m.C)(a,"initial-tag-membership")){case "SOME":if(a.zf)return!0;break;case "NONE":if(!a.checked)return!0;break;case "ALL":if(a.checked)return!0}return!1};
var fJ=function(a,b){if(b){var c=b.error;if(c){var d=(0,m.N)("error-small-template",a.ea),d=(0,m.Te)(d);gJ(a,"yt-alert-error",c,d,8E3)}}};var hJ=function(a,b){if(b){var c=b.success_msg;if(c){var d=(0,m.N)("success-small-template",a.ea),d=(0,m.Te)(d);gJ(a,"yt-alert-success",c,d,3E3)}}};var gJ=function(a,b,c,d,e){var g=(0,m.N)("tag-menu-notifications",a.ea);(0,m.Oo)(b,c,d,g);(0,m.w)((0,m.r)(function(){(new m.Is(d,750)).ra()},a),e)};
var iJ=function(a){a=(0,m.od)("input",a,void 0);for(var b=[],c=[],d=0;d<a.length;d++){var e=a[d];e.zf||(e.checked?b.push(e.value):c.push(e.value))}return{checked_values:b,unchecked_values:c}};var jJ=function(){m.Ga.call(this,"www/feed",["www/common"],["feed","index"],kJ,lJ)};
var kJ=function(){m.ym.getInstance().ob();m.Jt.getInstance().ob();NI();var a=mI=(0,m.L)("feed");mJ.push((0,m.S)(a,"click",YH,"feed-load-more"));mJ.push((0,m.S)(a,"click",iI,"feed-item-expander-button"));mJ.push((0,m.S)(a,"click",jI,"feed-item-collapser-button"));(0,m.v)("WATCH_FROM_FEED")&&(mJ.push((0,m.S)(a,"click",kI,"feed-item-thumb")),mJ.push((0,m.S)(a,"click",kI,"feed-video-title")));nJ.push((0,m.x)("page-resize",lI));lI();var b=(0,m.N)("individual-feed"),c=!1;b&&(oJ=(0,m.C)(b,"feed-name"),c=
"user"==(0,m.C)(b,"feed-type"));if("history"==oJ||"watch_later"==oJ||"favorites"==oJ)JH=b=oJ,xH=a,BH=(0,m.L)("feed-item-select-all-checkbox"),OH=(0,m.L)("managed-feed-success"),PH=(0,m.L)("managed-feed-error"),FH=(0,m.L)("feed-item-remove-videos"),GH=(0,m.L)("tag-menu-button"),HH=(0,m.L)("managed-toolbar-play-all-button"),MH=(0,m.L)("feed-title-count"),pJ=(0,m.N)("branded-page-v2-primary-col-header-container"),EH=(0,m.N)("addto-button",pJ),qJ.push((0,m.Q)(BH,"click",yH)),qJ.push((0,m.S)(window.document.body,
"click",AH,"feed-item-selection-action")),qJ.push((0,m.S)(window.document.body,"click",DH,"feed-item-checkbox")),qJ.push((0,m.Q)(FH,"click",IH)),"history"==b&&(qJ.push((0,m.Q)((0,m.L)("watch-history-pause-button"),"click",QH)),qJ.push((0,m.Q)((0,m.L)("watch-history-resume-button"),"click",TH)),qJ.push((0,m.S)(window.document.body,"click",WH,"watch-history-clear-button")));(0,m.ks)({"feed-load-more":ZH});if((0,m.v)("INIT_AUTOSHARE")){b=new vH((0,m.G)("autoshare"));b.addServiceChangedCallback(cI);var d=
(0,m.L)("facebook-connect-button");d&&b.registerConnectDialogLauncher(d,"facebook",!0);(d=(0,m.L)("twitter-connect-button"))&&b.registerConnectDialogLauncher(d,"twitter",!0);(d=(0,m.L)("orkut-connect-button"))&&b.registerConnectDialogLauncher(d,"orkut",!0);window.autoshare=b}(0,m.v)("MUSIC_PROMO_TYPE")&&(b=(0,m.L)("mep-container"),nJ.push((0,m.x)("subscription-subscribe-success",dI)),mJ.push((0,m.S)(b,"click",fI,"mep2-dismiss-button")),mJ.push((0,m.S)(b,"click",hI,"channel-lockup")),gI=(0,m.C)(b,
"ids-for-replacement").split(","));(0,m.bu)(a,c);(0,m.Ct)(0);(0,m.Dt)();(0,m.Lt)()};var lJ=function(){(0,m.qa)("DELAYED_EMBEDED",[]);window.masthead&&window.masthead.dispose();pI&&((0,m.R)(pI),pI=null);(0,m.R)(uI);uI=[];wI&&((0,m.R)(wI),wI=null);(0,m.R)(HI);HI.length=0;yI();(0,m.Lo)(m.$t);bI=mI=null;(0,m.R)(mJ);(0,m.Ea)(nJ);if("history"==oJ||"watch_later"==oJ||"favorites"==oJ)(0,m.R)(qJ),qJ=[],GH=OH=PH=BH=MH=HH=FH=EH=pJ=xH=null};var oJ,bI,mI;(0,m.t)(tH,m.oa);m.f=tH.prototype;
m.f.N=function(){tH.L.N.call(this);(0,m.R)(this.b);this.b=null};m.f.Lq=function(){m.T.hide("ad_creative_1");(0,m.z)("ads-masthead-hide");(0,m.ep)((0,m.L)("page"),!0);this.D&&m.T.hide("ad_creative_collapse_btn_1");m.T.show("ad_creative_expand_btn_1");(0,m.I)(this.k,"masthead-ad-expanded");uH(this.j);(0,m.Le)("homepage_collapse_masthead_ad",void 0,void 0)};m.f.Lh=function(){m.T.show("ad_creative_expand_btn_1");(0,m.Kd)((0,m.L)("premium-yva"));(0,m.Kd)((0,m.L)("video-masthead"));uH(this.j)};
m.f.Iq=function(){(0,m.Vc)(window.document.getElementById("premium-yva"),"premium-yva-unexpanded","premium-yva-expanded")};m.f.Jq=function(){(0,m.Vc)(window.document.getElementById("premium-yva"),"premium-yva-expanded","premium-yva-unexpanded")};m.f.yq=function(){m.T.hide("premium-yva");(0,m.I)((0,m.L)("premium-yva"),"premium-yva-unexpanded")};m.f.Mq=function(){var a=m.ng.getInstance();a.set("HIDDEN_MASTHEAD_ID",!1);a.save();(0,m.Le)("homepage_expand_masthead_ad",void 0,void 0);(0,m.an)(window.document.location.href)};(0,m.s)("yt.sharing.AutoShare",vH);vH.prototype.eb=function(a,b,c,d){(0,m.Q)(a,"click",(0,m.r)(this.O,this));if(a.id)this.J[a.id]={serviceName:b,connectOnly:c},d&&(this.J[a.id].connectOnlyCallback=d);else throw"Connect dialog launch buttons must have an id.";};vH.prototype.registerConnectDialogLauncher=vH.prototype.eb;vH.prototype.O=function(a){if(a=this.J[a.currentTarget.id]){var b=a.connectOnly;a.connectOnlyCallback&&(b=(0,a.connectOnlyCallback)());this.G(a.serviceName,b)}};
vH.prototype.handleConnectService=vH.prototype.O;vH.prototype.ka=function(){this.j()};vH.prototype.doOnLoad=vH.prototype.ka;vH.prototype.da=function(a){this.H.push(a)};vH.prototype.addServiceChangedCallback=vH.prototype.da;vH.prototype.Z=function(a){this.F.push(a)};vH.prototype.addCanConnectCallback=vH.prototype.Z;vH.prototype.xa=function(){return this.k};vH.prototype.getServiceInfo=vH.prototype.xa;
vH.prototype.G=function(a,b){for(var c in this.F)if(!(0,this.F[c])(this,a,b))return;(0,m.V)(this.b+"autoshare",{Q:{action_ajax_stats_ping:"1",stat:"connect_has_google",service:a}});c=this.b+"autoshare?action_popup_auth=1&service="+a+"&connect_only="+(b?"True":"False")+"&root_url="+(0,window.encodeURIComponent)(this.b);"facebook"==a&&(c+="&permissions="+(0,window.encodeURIComponent)("read_stream,offline_access,manage_pages,user_likes,publish_stream"));this.V(c,{height:500,width:860})};
vH.prototype.connectService=vH.prototype.G;vH.prototype.pa=function(a,b){var c=(0,m.r)(function(a,c){this.k=(0,m.Ph)(c.html_content);this.j();b&&b()},this),d=(0,m.r)(function(){b&&b();this.j()},this),e={action_ajax_connect_service:1};e.return_url=a;(0,m.V)(this.b+"autoshare?ajax_connect_service",{format:"XML",method:"POST",Cb:(0,m.Fe)(e)+"&"+this.M,onSuccess:c,onError:d})};vH.prototype.connectServiceDone=vH.prototype.pa;vH.prototype.ga=function(a){this.$(a)};vH.prototype.disconnectService=vH.prototype.ga;
vH.prototype.Nb=function(a,b){var c=(0,m.r)(function(a,b){this.k=(0,m.Ph)(b.html_content);this.j()},this),d=(0,m.r)(function(){this.j()},this),e={action_ajax_set_connect_only:1};e.service=a;e.connect_only=b?"True":"False";(0,m.V)(this.b+"autoshare?ajax_set_connect_only",{format:"XML",method:"POST",Cb:(0,m.Fe)(e)+"&"+this.M,onSuccess:c,onError:d})};vH.prototype.setConnectOnly=vH.prototype.Nb;
vH.prototype.$=function(a){var b=(0,m.r)(function(a,b){this.k=(0,m.Ph)(b.html_content);this.j()},this),c=(0,m.r)(function(){this.j()},this),d={action_ajax_disconnect_service:1};d.service=a;(0,m.V)(this.b+"autoshare?ajax_disconnect_service",{format:"XML",method:"POST",Cb:(0,m.Fe)(d)+"&"+this.M,onSuccess:b,onError:c})};vH.prototype.j=function(){for(var a in this.H)(0,this.H[a])(this)};vH.prototype.V=function(a,b){if(this.D)try{this.D.close()}catch(c){this.D=null}this.D=!(0,m.dn)(a,b)};
vH.prototype.ud=function(){this.G("facebook",!this.k.facebook.is_autosharing)};var JH,xH,pJ,EH,FH,HH,MH,BH,PH,OH,GH,qJ=[],NH=/[^\d\.\ ]/g;var mJ=[],nJ=[],gI=[];var pI;var uI=[];var wI;var zI,AI=[],BI=[];var HI=[],LI=!0;var rJ,sJ,PI;m.f=OI.prototype;m.f.$f=!1;
m.f.fc=function(a){var b=(0,m.C)(this.F,"hide-watch-later"),c={action_get_dropdown:"1",hide_favorites:(0,m.C)(this.F,"hide-favorites"),hide_watch_later:b},d={video_ids:this.D};this.H&&(c.feature=this.H);var e;this.k&&(e=TI(this));(0,m.V)("/addto_ajax",{Qn:!0,format:"XML",method:"POST",R:this,Q:c,P:d,onSuccess:function(c,d){this.ea.innerHTML=d.html_content||"";(0,m.Vg)(this.ea,"no-watch-later",!!b);(0,m.Vg)(this.ea,"ie",m.K);e&&UI(this,e);this.Ra();SI(this);this.$f=!1;a&&a()}})};
m.f.Ra=function(){this.b={};this.b.list=(0,m.L)("addto-list-panel");this.b.Rq=(0,m.L)("addto-list-saving-panel");this.b.Ne=(0,m.L)("addto-list-error-panel");this.b.Sb=(0,m.L)("addto-create-panel");this.j=this.b.list;(0,m.S)(this.b.list,"click",(0,m.r)(this.Xm,this),"addto-playlist-item")};
m.f.Xm=function(a){a.stopPropagation();var b=a.currentTarget;(0,m.Nm)(m.Hm.getInstance(),b);(0,m.Yg)(b,"loading")||("create-playlist"==(0,m.C)(b,"list-action")?(this.$f||(YI(this),this.$f=!0),XI(this,this.b.Sb,!0)):this.k?((0,m.Yg)(b,"contains-selected-videos")?(0,m.Xg)(b,"to-be-removed"):(0,m.Xg)(b,"to-be-added"),QI(this)):((0,m.U)(b,"loading"),a=(0,m.C)(b,"full-list-id")||"",(0,m.Yg)(b,"contains-selected-videos")?VI(this,a):(b=(0,m.C)(b,"item-name")||"",ZI(this,b,a))))};
m.f.An=function(){var a=this.M.value;this.G=!0;var b=(0,m.Ji)(this.J,"privacy");ZI(this,a,null,b)};m.f.qg=function(){(0,m.w)((0,m.r)(function(){var a=(0,m.Xb)(this.M.value);a?m.T.show(this.O):m.T.hide(this.O);var b=(0,m.Ji)(this.J,"privacy");a||!b?(0,m.Ve)(this.V,!1):(0,m.Ve)(this.V,!0)},this),0)};
m.f.fo=function(a,b){var c=this.G;this.G=!1;if(this.$=b.full_list_id||""){if("true"==b.show_private_video_warning.toLowerCase()){var d=(0,m.M)("private-video-warning",this.ea);d&&m.T.show.apply(m.T,d)}this.k&&c?this.fc((0,m.r)(function(){var a=$I(this,this.$);a&&(0,m.U)(a,"to-be-added");QI(this)},this)):this.fc()}};
m.f.eo=function(a,b){var c=b&&b.error_message;if(c){(0,m.N)("error-details",this.b.Ne).innerHTML=c;var c=(0,m.N)("show-menu-link",this.b.Ne),d=(0,m.Q)(c,"click",(0,m.r)(function(a){a.preventDefault();(0,m.R)(d);this.G?XI(this,this.b.Sb,!0):XI(this,this.b.list,!0)},this));(0,m.fw)(this.b.Ne,["dismissed-panel","fade","slide"]);XI(this,this.b.Ne)}};
m.f.to=function(){var a=(0,m.Ge)("/addto_ajax",{action_redirect_to_signin_with_add:1,video_ids:this.D,next_url:window.document.location}),b=(0,m.Dd)("form");b.action=a;b.method="POST";a=(0,m.Dd)("input");a.type="hidden";a.name="session_token";a.value=(0,m.G)("addto_ajax_logged_out");b.appendChild(a);window.document.body.appendChild(b);b.submit()};(0,m.Pc)(aJ);m.f=aJ.prototype;m.f.$e=!1;m.f.tg=!1;
m.f.fc=function(){var a={},b=this.b.value;(0,m.Xb)(b)||(a.search=b);var b=[],c=[],b=iJ("tag-video-checkbox").checked_values,c=iJ("tag-playlist-checkbox").checked_values;this.$e=!0;this.tg=!1;(0,m.V)("/labels_ajax?action_tag_menu_dropdown=1",{method:"POST",R:this,Q:a,P:{video_ids:b,playlist_ids:c},onSuccess:function(a,b){var c=b.tag_membership;this.wm.innerHTML=b.html_content||"";cJ(this,c);this.$e=!1;(0,m.Wg)(this.ea,"loading");(0,m.Pk)();this.tg&&this.fc()},onError:function(a){this.$e=!1;(0,m.Wg)(this.ea,
"loading");fJ(this,(0,m.Oh)(a.response))}})};
m.f.Ra=function(){(0,m.Q)(this.b,"keydown",(0,m.r)(this.hi,this));(0,m.Q)(this.b,"paste",(0,m.r)(this.hi,this));(0,m.S)(this.ea,"click",(0,m.r)(this.Rm,this),"tag-checkbox");(0,m.S)(this.ea,"click",(0,m.r)(this.Qm,this),"add-new-tag");(0,m.S)(this.ea,"click",(0,m.r)(this.Pm,this),"apply-tag-changes");this.j&&((0,m.S)(this.j,"click",(0,m.r)(this.og,this),"tag-video-checkbox"),(0,m.S)(this.j,"click",(0,m.r)(this.og,this),"tag-playlist-checkbox"));(0,m.S)(window.document.body,"click",(0,m.r)(this.og,
this),"tag-refresh")};m.f.hi=function(){(0,m.w)((0,m.r)(function(){bJ(this)},this),0)};m.f.Rm=function(a){a=a.target;switch((0,m.C)(a,"current-tag-membership")){case "SOME":a.zf=!1;(0,m.E)(a,"current-tag-membership","NONE");break;case "NONE":(0,m.E)(a,"current-tag-membership","ALL");break;case "ALL":"SOME"==(0,m.C)(a,"initial-tag-membership")?((0,m.Sk)(a,!0),(0,m.E)(a,"current-tag-membership","SOME")):(0,m.E)(a,"current-tag-membership","NONE")}dJ(this)};m.f.og=function(){(0,m.U)(this.ea,"loading")};
m.f.Qm=function(){this.k.disabled=!0;var a=this.b.value,b=iJ("tag-video-checkbox").checked_values,c=iJ("tag-playlist-checkbox").checked_values,a={title:a,video_ids:b,playlist_ids:c},a={method:"POST",Q:{session_token:(0,m.C)(this.ea,"ajax-token")},P:a,onSuccess:function(a,b){hJ(this,b);bJ(this)},onError:function(a){fJ(this,(0,m.Oh)(a.response));bJ(this)},R:this};(0,m.V)("/labels_ajax?action_create_and_apply_tag=1",a)};
m.f.Pm=function(){this.cj.disabled=!0;var a=iJ("tag-video-checkbox").checked_values,b=iJ("tag-playlist-checkbox").checked_values,c=iJ("tag-checkbox"),d=(0,m.od)("input","tag-checkbox",void 0).length;(0,m.V)("/labels_ajax?action_update_membership=1",{R:this,method:"POST",Q:{session_token:(0,m.C)(this.ea,"ajax-token")},P:{video_ids:a,playlist_ids:b,tags_to_add:c.checked_values,tags_to_remove:c.unchecked_values,num_tags:d},onSuccess:function(a,b){hJ(this,b);bJ(this)},onError:function(a){this.cj.disabled=
!1;fJ(this,(0,m.Oh)(a.response))}})};(0,m.s)("yt.flash.embed",m.Dg);(0,m.s)("yt.www.ads.pyv.pyvHomeAfcCallback",m.Ht);(0,m.s)("yt.www.ads.MastheadAd",tH);
(0,m.s)("yt.www.lists.addto.toggleMenu",function(a,b){var c=m.Hm.getInstance(),d=(0,m.W)(c),e=(0,m.L)("shared-addto-menu");if(b){var g=(0,m.N)("addto-menu",e);(0,m.Nm)(c,a);sJ=(0,m.Wg)(a,d);rJ||(rJ=g.innerHTML);c=(0,m.C)(e,"video-ids");d=(0,m.C)(a,"video-ids");PI&&(0,m.U)(e,"lightweight-panel");(0,m.Yg)(a,"flip")&&(0,m.U)(e,"flip");d&&c!=d&&((0,m.E)(e,"video-ids",d),g.innerHTML=rJ,(0,m.Qe)(a),new OI(a))}else sJ&&(0,m.U)(a,d),(0,m.Wg)(e,"flip")});
(0,m.s)("yt.www.TagEditingMenu.toggleTagMenu",function(a,b){if(b){var c=(0,m.L)("tag-editing-menu");(0,m.Yg)(c,"loading")?aJ.getInstance().fc():(aJ.getInstance(),(0,m.Pk)());c=(0,m.N)("yt-combobox-search-input",c);(0,m.w)((0,m.r)(c.focus,c),0)}});tH.prototype.autoCollapsePremiumYva=tH.prototype.yq;tH.prototype.collapse_ad=tH.prototype.Lq;tH.prototype.expand_ad=tH.prototype.Mq;tH.prototype.userCollapsePremiumYva=tH.prototype.Lh;tH.prototype.userExpandPremiumYva=tH.prototype.Iq;
tH.prototype.userUnexpandPremiumYva=tH.prototype.Jq;(0,m.t)(jJ,m.Ga);jJ.prototype.enable=function(){jJ.L.enable.call(this);(0,m.Wj)(m.fm);(0,m.Wj)(m.Jt)};jJ.prototype.disable=function(){jJ.L.disable.call(this);(0,m.Yj)(m.fm);(0,m.Yj)(m.Jt)};(0,m.Ha)(new jJ);})(_yt_www);


}
/*
     FILE ARCHIVED ON 22:46:37 Oct 31, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:42:38 Dec 07, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 134.796
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.076
  cdx.remote: 0.067
  esindex: 0.01
  LoadShardBlock: 104.295 (3)
  PetaboxLoader3.datanode: 68.897 (4)
  PetaboxLoader3.resolve: 66.616 (2)
  load_resource: 114.656
*/