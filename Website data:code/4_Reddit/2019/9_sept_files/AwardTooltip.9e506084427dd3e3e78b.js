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

(window.webpackJsonp=window.webpackJsonp||[]).push([["AwardTooltip"],{"./src/reddit/components/AwardTooltip/index.m.less":function(e,t,o){e.exports={headerBar:"_1upk7O0Nror_rUzpKtAT82",awardReport:"_3NL-lAvdtp1f08B73D3P-U",isReported:"_2Pk3ujKwQr9ilRsjN0MDqJ",awardReportIcon:"_1l-7KCSHWOZOMW8AwEn6sF",awardDetails:"_3EitQZYmhmkb40LVIqZjbf",awardIconContainer:"_3d4PewaRsE8Kt1dA9yVlK6",awardIcon:"_3Hlfqt1qFE_Tu7QOlUiazx",awardName:"_35wr2WzwkRAIoUu5CXPuNQ",awardDescription:"_2-4PwlBy4HgE_34Dneye8m",subreddit:"_1X9qQp-APi9LYm-TWfMGNK",subredditIcon:"_1d6eT4Yh-x1pgKfz_TFiB",modShield:"_3GaARjoK2CWYLfWjrPUTkN",howToLink:"_1liKJZCBt1h8KFR0F0Gqsi"}},"./src/reddit/components/AwardTooltip/index.tsx":function(e,t,o){"use strict";o.r(t);var n=o("./node_modules/react/index.js"),a=o.n(n),s=o("./node_modules/react-redux/es/index.js"),r=o("./node_modules/reselect/es/index.js"),i=o("./src/lib/classNames/index.ts"),d=o("./src/reddit/helpers/isPost.ts"),c=o("./src/reddit/i18n/components.tsx"),l=o("./src/reddit/constants/colors.ts"),m=o("./src/lib/makeActionCreator/index.ts"),p=o("./src/reddit/i18n/utils.ts"),u=o("./src/reddit/actions/toaster.ts"),h=o("./src/reddit/models/Toast/index.ts"),w=o("./src/reddit/endpoints/gold/communityAwards.ts"),b=o("./src/reddit/actions/gold/constants.ts");const g=Object(m.a)(b.G);var x=o("./src/reddit/models/Gold/Award.ts"),C=o("./src/reddit/selectors/subreddit.ts"),f=o("./src/reddit/selectors/user.ts"),E=o("./src/reddit/components/ContentTooltip/index.tsx"),P=o("./src/reddit/components/SubredditIcon/index.tsx"),O=o("./src/reddit/icons/svgs/CircleCheck/index.tsx"),v=o("./src/reddit/icons/svgs/Moderate/index.tsx"),T=o("./src/reddit/icons/svgs/Report/index.tsx"),_=o("./src/reddit/icons/fonts/Coin/index.tsx");const j=e=>{const t=e.award,o=e.postOrComment;if(t.description){const e=t.description.split("%{coin_symbol}");return a.a.createElement(a.a.Fragment,null,e.map((e,t)=>0===t?e:a.a.createElement(a.a.Fragment,null,a.a.createElement(_.a,null),e)))}if(t.awardType===x.a.Community)return"post"===o?a.a.createElement(c.c,null,"Shows the ",a.a.createElement(c.b,{name:"award-name"},t.name)," Award on the post."):a.a.createElement(c.c,null,"Shows the ",a.a.createElement(c.b,{name:"award-name"},t.name)," Award on the comment.");if(t.awardType===x.a.Moderator){const e=t.daysOfPremium?Math.floor(t.daysOfPremium/30):0;return 1===e?a.a.createElement(c.c,null,"Shows the ",a.a.createElement(c.b,{name:"award-name"},t.name)," Award and gives the recipient 1 month of Premium."):a.a.createElement(c.c,null,"Shows the ",a.a.createElement(c.b,{name:"award-name"},t.name)," Award and gives the recipient ",a.a.createElement(c.b,{name:"months-of-premium"},e)," months of Premium.")}return"gid_1"===t.id?"post"===o?a.a.createElement(c.c,null,"Shows the Silver Award on the post... and that's it."):a.a.createElement(c.c,null,"Shows the Silver Award on the comment... and that's it."):"gid_2"===t.id?"post"===o?a.a.createElement(c.c,null,"Shows the Gold Award on the post and gives the recipient a week of Reddit Premium (including 100 Coins)."):a.a.createElement(c.c,null,"Shows the Gold Award on the comment and gives the recipient a week of Reddit Premium (including 100 Coins)."):"gid_3"===t.id?"post"===o?a.a.createElement(c.c,null,"Shows the Platinum Award on the post and grants the recipient one month of Reddit Premium."):a.a.createElement(c.c,null,"Shows the Platinum Award on the comment and grants the recipient one month of Reddit Premium."):null};var N=o("./src/reddit/components/AwardTooltip/index.m.less"),y=o.n(N);const A=Object(r.c)({language:f.T,subreddit:(e,{postOrComment:t})=>Object(C.Q)(e,{thingId:t.id})}),R=Object(s.b)(A,(e,t)=>({reportAward:()=>e((e=>async(t,o,{apiContext:n})=>{t(g());const a=Object(p.c)("Something went wrong. The report could not be created at this time.");try{(await Object(w.d)(n(),e)).error&&t(Object(u.e)({kind:h.b.Error,duration:u.a,text:a}))}catch(s){t(Object(u.e)({kind:h.b.Error,duration:u.a,text:a}))}})(t.award.id))}));t.default=R(class extends a.a.Component{constructor(e){super(e),this.state={isReported:!1}}renderReporterButton(){const e=this.props.reportAward,t=this.state.isReported;return a.a.createElement("button",{className:Object(i.a)(y.a.awardReport,{[y.a.isReported]:t}),onClick:()=>{t||(this.setState({isReported:!0}),e())}},t?a.a.createElement(a.a.Fragment,null,a.a.createElement(c.c,null,"Reported"),a.a.createElement(O.a,{className:y.a.awardReportIcon})):a.a.createElement(T.a,{className:y.a.awardReportIcon}))}render(){var e=this.props;const t=e.award,o=e.postOrComment,n=e.subreddit,s=e.tooltipId;return a.a.createElement(E.a,{caretColor:{top:l.a.alienblue},tooltipSizeEstimate:{height:290,width:254},tooltipId:s,defaultTooltipPosition:"top"},a.a.createElement("div",{className:y.a.headerBar},t.awardType!==x.a.Global&&this.renderReporterButton()),a.a.createElement("div",{className:y.a.awardDetails},a.a.createElement("div",{className:y.a.awardIconContainer},a.a.createElement("div",{className:y.a.awardIcon,style:{backgroundImage:`url("${t.icon.url}")`}})),a.a.createElement("div",{className:y.a.awardName},a.a.createElement(c.c,null,a.a.createElement(c.b,{name:"award-name"},t.name)," Award")),a.a.createElement("p",{className:y.a.awardDescription},a.a.createElement(j,{award:t,postOrComment:Object(d.a)(o.id)?"post":"comment"})),t.awardType===x.a.Community&&n&&a.a.createElement("div",{className:y.a.subreddit},a.a.createElement(P.b,{className:y.a.subredditIcon,subredditOrProfile:n}),`r/${n.name}`),t.awardType===x.a.Moderator&&a.a.createElement("div",{className:y.a.subreddit},a.a.createElement(v.a,{className:Object(i.a)(y.a.subredditIcon,y.a.modShield)}),a.a.createElement(c.c,null,"Exclusive mod-given Award")),a.a.createElement("a",{className:y.a.howToLink,href:"https://web.archive.org/web/20190901072234/https://www.reddithelp.com/en/categories/reddit-101/reddit-basics/what-are-awards",target:"_blank"},a.a.createElement(c.c,null,"How do I award?"))))}})},"./src/reddit/components/ContentTooltip/index.m.less":function(e,t,o){e.exports={StyledTooltipContainer:"_2uSuNRa3OeptFDJCKQ3vU6",styledTooltipContainer:"_2uSuNRa3OeptFDJCKQ3vU6",fadeIn:"_2bkYZH_kJx5pIHW0Ts5P6e",caretOnBottom:"_1rF-A55THyDL-rQ9ZUDQ4_",caretOnTop:"_1MHCyMQAMeqRqf5DPWWeq3",caretOnLeft:"nVD-oexLbZI_4QjhrkLFz",caretOnRight:"KRVDnoE1RIC5qyqQLXxGG"}},"./src/reddit/components/ContentTooltip/index.tsx":function(e,t,o){"use strict";var n=o("./src/higherOrderComponents/addOverlayEvents.tsx"),a=o("./node_modules/react/index.js"),s=o.n(a),r=o("./node_modules/react-redux/es/index.js"),i=o("./node_modules/reselect/es/index.js"),d=o("./src/higherOrderComponents/asTooltip.tsx"),c=o("./src/lib/classNames/index.ts"),l=o("./src/lib/CSSVariableProvider/withTheme.tsx"),m=o("./src/lib/fastdom/index.ts"),p=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),u=o("./src/reddit/selectors/tooltip.ts"),h=o("./src/reddit/components/ContentTooltip/index.m.less"),w=o.n(h);const b={height:200,width:200},g=e=>{switch(e){case"top":return"bottom";case"right":return"left";case"left":return"right";case"bottom":default:return"top"}},x=Object(l.a)(e=>{const t=e.children,o=e.className,n=e.style,a=e.caretPosition,r=e.caretColor;return s.a.createElement("div",{className:Object(c.a)(o,w.a.StyledTooltipContainer,{[w.a.caretOnTop]:"top"===a,[w.a.caretOnLeft]:"left"===a,[w.a.caretOnRight]:"right"===a,[w.a.caretOnBottom]:"bottom"===a}),style:Object.assign({},n,{"--contentTooltip-caretColor":r&&r[a]?r[a]:Object(p.a)(e).body})},t)}),C=Object(i.c)({isOpen:(e,{tooltipId:t})=>Object(u.b)(t)(e)}),f=Object(d.a)(x,[n.a.Click,n.a.Keydown]),E=Object(r.b)(C);t.a=E(class extends s.a.Component{constructor(e){super(e),this.checkAndSetPosition=(()=>{var e=this.props;const t=e.tooltipId;var o=e.tooltipSizeEstimate;const n=void 0===o?b:o;m.a.read(()=>{const e=document.getElementById(t);if(!e)return;const o=e.getBoundingClientRect();if("undefined"==typeof window)return void this.setState({position:this.props.defaultTooltipPosition});let a=!0;switch(this.props.defaultTooltipPosition){case"bottom":a=window.innerHeight-o.bottom>n.height;break;case"left":a=o.left>n.width;break;case"right":a=o.right<=window.innerWidth-n.width;break;case"top":default:a=o.top>n.height}this.setState({position:a?this.props.defaultTooltipPosition:g(this.props.defaultTooltipPosition)})})}),this.state={position:null}}componentDidUpdate(e){!e.isOpen&&this.props.isOpen&&this.checkAndSetPosition(),e.isOpen&&!this.props.isOpen&&this.setState({position:null})}getPositions(e){switch(e||this.props.defaultTooltipPosition){case"bottom":return{tooltipPosition:["center","top"],targetPosition:["center","bottom"],caretPosition:"top"};case"left":return{tooltipPosition:["right","center"],targetPosition:["left","center"],caretPosition:"right"};case"right":return{tooltipPosition:["left","center"],targetPosition:["right","center"],caretPosition:"left"};case"top":default:return{tooltipPosition:["center","bottom"],targetPosition:["center","top"],caretPosition:"bottom"}}}render(){const e=this.state.position;var t=this.getPositions(e);const o=t.targetPosition,n=t.tooltipPosition,a=t.caretPosition;return s.a.createElement(f,Object.assign({},this.props,{caretPosition:a,targetPosition:o,tooltipPosition:n}))}})},"./src/reddit/icons/fonts/Coin/index.m.less":function(e,t,o){e.exports={CoinIcon:"_12xlue8dQ1odPw1J81FIGQ",coinIcon:"_12xlue8dQ1odPw1J81FIGQ"}},"./src/reddit/icons/fonts/Coin/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),a=o.n(n),s=o("./src/reddit/constants/colors.ts"),r=o("./src/reddit/icons/fonts/helpers.tsx"),i=o("./src/reddit/icons/fonts/Coin/index.m.less"),d=o.n(i);const c=o("./src/lib/lessComponent.tsx").a.wrapped(e=>a.a.createElement("i",{className:`${Object(r.b)("coin")} ${e.className}`,style:{color:e.fillColor||s.a.gold}}),"CoinIcon",d.a);t.a=c},"./src/reddit/icons/svgs/CircleCheck/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),a=o.n(n);t.a=(e=>a.a.createElement("svg",{className:e.className,viewBox:"0 0 21 21",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("path",{d:"M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",fill:"inherit"})))},"./src/reddit/icons/svgs/Report/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),a=o.n(n);t.a=(e=>a.a.createElement("svg",{className:e.className,id:e.id,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",null,a.a.createElement("path",{d:"M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"}))))}}]);
//# sourceMappingURL=AwardTooltip.9e506084427dd3e3e78b.js.map

}
/*
     FILE ARCHIVED ON 07:22:34 Sep 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:26 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.056
  cdx.remote: 0.108
  esindex: 0.014
  LoadShardBlock: 102.162 (6)
  PetaboxLoader3.datanode: 110.553 (7)
  load_resource: 108.251
  PetaboxLoader3.resolve: 60.318
*/