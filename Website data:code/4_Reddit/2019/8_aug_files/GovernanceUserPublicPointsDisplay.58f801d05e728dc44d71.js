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

(window.webpackJsonp=window.webpackJsonp||[]).push([["GovernanceUserPublicPointsDisplay"],{"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less":function(e,t,n){e.exports={token:"_3nQr7AT1U0w1HdVk-xepUB",tokenGrey:"pvn75ouWnsoKK4l_QS9yI",tokenFilled:"_3d-Rpbq-Qb88tf5D_s1rsj",amount:"_3nhTfmUMmYib8x61No0h3r",container:"_15KjTxLhBmrJE79nlBUuxb"}},"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx":function(e,t,n){"use strict";n.r(t);var s=n("./node_modules/react/index.js"),o=n.n(s),r=n("./node_modules/react-redux/es/index.js"),a=n("./node_modules/reselect/es/index.js"),c=n("./src/app/strings/index.ts"),i=n("./src/lib/classNames/index.ts"),d=n("./src/lib/prettyPrintNumber/index.ts"),l=n("./src/reddit/actions/governance/index.ts"),u=n("./src/reddit/actions/tooltip.ts"),p=n("./src/reddit/components/Governance/Token/index.tsx"),m=n("./src/reddit/components/InfoTextTooltip/index.tsx"),b=n("./src/reddit/featureFlags/component.tsx"),x=n("./src/reddit/selectors/gov.ts"),f=n("./src/reddit/selectors/user.ts"),j=n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),O=n.n(j);const g=Object(a.c)({tokenName:x.i,amount:(e,t)=>{const n=Object(x.e)(e,t);return n?n.amount:void 0},language:f.S});t.default=Object(b.a)("spPublicPoints",Object(r.b)(g,e=>({onHideTooltip:()=>e(Object(u.f)()),onShowTooltip:t=>e(Object(u.d)({tooltipId:t})),onTip:(t,n)=>e(Object(l.h)({recipient:t,contentId:n}))}))(function(e){if(!e.amount)return null;const t=e.contentId,n=e.subredditId,s=`public-wallets-${e.username}-${n}-${t}`;return o.a.createElement("div",{className:Object(i.a)(e.className,O.a.container),id:s,onClick:t=>{t.stopPropagation(),e.onTip(e.username,e.contentId)},onMouseEnter:()=>e.onShowTooltip(s),onMouseLeave:()=>e.onHideTooltip()},o.a.createElement(p.a,{className:O.a.tokenFilled,subredditId:e.subredditId}),o.a.createElement(p.a,{grey:!0,className:O.a.tokenGrey,subredditId:e.subredditId}),o.a.createElement("span",{className:O.a.amount},Object(d.b)(parseInt(e.amount))),o.a.createElement(m.c,{caretOnTop:!0,tooltipId:s,text:Object(c.a)(e.language,"gov.tipText",{tokenName:e.tokenName,username:e.username})}))}))},"./src/reddit/featureFlags/component.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var s=n("./node_modules/react/index.js"),o=n.n(s),r=n("./node_modules/react-redux/es/index.js"),a=n("./node_modules/reselect/es/index.js"),c=n("./src/reddit/featureFlags/index.ts"),i=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};function d(e,t,n){const s=Object(a.c)({featureEnabled:t=>c.d[e](t)});return Object(r.b)(s)(e=>{const s=e.featureEnabled,r=(e.dispatch,i(e,["featureEnabled","dispatch"]));return s?o.a.createElement(t,Object.assign({},r)):void 0!==n?o.a.createElement(n,Object.assign({},r)):null})}}}]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.58f801d05e728dc44d71.js.map

}
/*
     FILE ARCHIVED ON 03:54:35 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:22 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.069
  cdx.remote: 0.134
  esindex: 0.016
  LoadShardBlock: 165.223 (6)
  PetaboxLoader3.datanode: 1209.3 (8)
  load_resource: 1202.197 (2)
  PetaboxLoader3.resolve: 84.923 (2)
*/