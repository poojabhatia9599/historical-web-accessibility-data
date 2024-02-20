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

(window.webpackJsonp=window.webpackJsonp||[]).push([["AwardTooltip"],{"./src/reddit/components/AwardTooltip/index.m.less":function(e,t,o){e.exports={headerBar:"_1upk7O0Nror_rUzpKtAT82",awardDetails:"_3EitQZYmhmkb40LVIqZjbf",awardIconContainer:"_3d4PewaRsE8Kt1dA9yVlK6",awardIcon:"_3Hlfqt1qFE_Tu7QOlUiazx",awardName:"_35wr2WzwkRAIoUu5CXPuNQ",awardDescription:"_2-4PwlBy4HgE_34Dneye8m",subreddit:"_1X9qQp-APi9LYm-TWfMGNK",subredditIcon:"_1d6eT4Yh-x1pgKfz_TFiB",howToLink:"_1liKJZCBt1h8KFR0F0Gqsi"}},"./src/reddit/components/AwardTooltip/index.tsx":function(e,t,o){"use strict";o.r(t);var a=o("./node_modules/react/index.js"),r=o.n(a),s=o("./node_modules/react-redux/es/index.js"),n=o("./node_modules/reselect/es/index.js"),i=o("./src/app/strings/index.ts"),d=o("./src/reddit/helpers/isPost.ts"),c=o("./src/reddit/constants/colors.ts"),l=o("./src/reddit/models/Gold/Award.ts"),p=o("./src/reddit/selectors/subreddit.ts"),m=o("./src/reddit/selectors/user.ts"),w=o("./bundled-modules/styled-components/styled-components.min.js"),u=o.n(w),b=o("./src/higherOrderComponents/addOverlayEvents.tsx"),O=o("./src/higherOrderComponents/asTooltip.tsx"),T=o("./src/lib/classNames/index.ts"),h=o("./src/lib/fastdom/index.ts"),g=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),y=o("./src/reddit/selectors/tooltip.ts"),C=o("./src/reddit/components/ContentTooltip/index.m.less"),x=o.n(C);const _=200,A=u.a.div.withConfig({componentId:"s4gobx4-0"})(["background: ",";&::after {left: 50%;margin-left: -","px;color: ",";}"],e=>Object(g.c)(e).body,e=>e["data-overflow"].left+7,e=>{const t=e.caretOnBottomColor,o=e.caretOnTopColor,a=e.caretOnTop,r=Object(g.c)(e).body;return(a?o:t)||r}),f=Object(n.createStructuredSelector)({isOpen:(e,{tooltipId:t})=>Object(y.b)(t)(e)}),j=Object(O.a)(e=>{const t=e.caretOnBottomColor,o=e.caretOnTopColor,a=e.caretOnTop,s=e.children,n=e.className,i=e.overflow,d=e.style;return r.a.createElement(A,{caretOnBottomColor:t,caretOnTopColor:o,caretOnTop:a,className:Object(T.a)(n,x.a.tooltipContainer,a?x.a.caretOnTop:""),style:d,"data-overflow":i},s)},[b.a.Click,b.a.Keydown]);var E=Object(s.connect)(f)(class extends r.a.Component{constructor(e){super(e),this.checkAndSetPosition=(()=>{var e=this.props;const t=e.tooltipId,o=e.tooltipHeightEstimate;h.a.read(()=>{const e=document.getElementById(t);if(!e)return;const a=e.getBoundingClientRect().top<=(o||_);this.setState({caretOnTop:a,positionSet:!0})})}),this.state={caretOnTop:!!e.caretOnTop,positionSet:!!e.disableDynamicPositioning}}componentDidUpdate(e){const t=this.props.disableDynamicPositioning;t||e.isOpen||!this.props.isOpen||this.checkAndSetPosition(),t||!e.isOpen||this.props.isOpen||this.setState({positionSet:!1})}render(){var e=this.state;const t=e.caretOnTop;return e.positionSet?t?r.a.createElement(j,Object.assign({},this.props,{caretOnTop:t,targetPosition:["center","bottom"],tooltipPosition:["center","top"]})):r.a.createElement(j,Object.assign({},this.props,{caretOnTop:t,targetPosition:["center","top"],tooltipPosition:["center","bottom"]})):null}}),I=o("./src/reddit/components/SubredditIcon/index.tsx"),N=o("./src/reddit/components/AwardTooltip/index.m.less"),P=o.n(N);const k=Object(n.createStructuredSelector)({language:m.P,subreddit:(e,{postOrComment:t})=>Object(p.I)(e,{thingId:t.id})});t.default=Object(s.connect)(k)(e=>{const t=e.award,o=e.language,a=e.postOrComment,s=e.subreddit,n=(e=>e.awardType===l.a.Community?"communityAwards.awardTooltip.communityAwardDescription":e.awardType===l.a.Moderator?"communityAwards.awardTooltip.moderatorAwardDescription":"gid_1"===e.id?"communityAwards.awardTooltip.silverDescription":"gid_2"===e.id?"communityAwards.awardTooltip.goldDescription":"gid_3"===e.id?"communityAwards.awardTooltip.platinumDescription":"")(t);return r.a.createElement(E,{caretOnTopColor:c.a.alienblue,tooltipHeightEstimate:290,tooltipId:e.tooltipId},r.a.createElement("div",{className:P.a.headerBar}),r.a.createElement("div",{className:P.a.awardDetails},r.a.createElement("div",{className:P.a.awardIconContainer},r.a.createElement("div",{className:P.a.awardIcon,style:{backgroundImage:`url("${t.icon.url}")`}})),r.a.createElement("h1",{className:P.a.awardName},Object(i.a)(o,"communityAwards.awardTooltip.awardNameAward",{awardName:t.name})),r.a.createElement("p",{className:P.a.awardDescription},Object(i.a)(o,n,{awardName:t.name,postOrComment:Object(d.a)(a.id)?"post":"comment"})),t.awardType!==l.a.Global&&s&&r.a.createElement("div",{className:P.a.subreddit},r.a.createElement(I.b,{className:P.a.subredditIcon,subredditOrProfile:s}),`r/${s.name}`),r.a.createElement("a",{className:P.a.howToLink,href:"https://web.archive.org/web/20190425235902/https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",target:"_blank"},Object(i.a)(o,"communityAwards.awardTooltip.howDoIAward"))))})},"./src/reddit/components/ContentTooltip/index.m.less":function(e,t,o){e.exports={tooltipContainer:"_1YTJEYh5nj6YF7Ck0RFzn3",fadeIn:"_2bkYZH_kJx5pIHW0Ts5P6e",caretOnTop:"_1MHCyMQAMeqRqf5DPWWeq3"}}}]);
//# sourceMappingURL=AwardTooltip.edf76aa6a23a5aa19483.js.map

}
/*
     FILE ARCHIVED ON 23:59:02 Apr 25, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:00:06 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.059
  cdx.remote: 0.087
  esindex: 0.02
  LoadShardBlock: 190.094 (6)
  PetaboxLoader3.resolve: 69.179 (2)
  PetaboxLoader3.datanode: 160.919 (7)
  load_resource: 83.361
*/