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

(window.webpackJsonp=window.webpackJsonp||[]).push([["GovernanceUserPublicPointsDisplay"],{"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less":function(e,t,n){e.exports={token:"_3nQr7AT1U0w1HdVk-xepUB",tokenGrey:"pvn75ouWnsoKK4l_QS9yI",tokenFilled:"_3d-Rpbq-Qb88tf5D_s1rsj",amount:"_3nhTfmUMmYib8x61No0h3r",container:"_15KjTxLhBmrJE79nlBUuxb"}},"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx":function(e,t,n){"use strict";n.r(t);var s=n("./node_modules/react/index.js"),o=n.n(s),r=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/reselect/es/index.js"),c=n("./src/app/strings/index.ts"),a=n("./src/lib/classNames/index.ts"),d=n("./src/reddit/actions/governance/index.ts"),l=n("./src/reddit/actions/tooltip.ts"),u=n("./src/reddit/components/Governance/Token/index.tsx"),p=n("./src/reddit/components/InfoTextTooltip/index.tsx"),b=n("./src/reddit/featureFlags/component.tsx"),m=n("./src/reddit/helpers/governance/tokens.ts"),x=n("./src/reddit/selectors/gov.ts"),f=n("./src/reddit/selectors/user.ts"),j=n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),g=n.n(j);const O=Object(i.c)({tokenName:x.j,tokenDisplayConversion:x.i,amount:(e,t)=>{const n=Object(x.e)(e,t);return n?n.amount:void 0},language:f.T});t.default=Object(b.a)("spPublicPoints",Object(r.b)(O,e=>({onHideTooltip:()=>e(Object(l.f)()),onShowTooltip:t=>e(Object(l.d)({tooltipId:t})),onTip:(t,n)=>e(Object(d.h)({recipient:t,contentId:n}))}))(function(e){if(!e.amount)return null;const t=e.contentId,n=e.subredditId,s=e.tokenDisplayConversion,r=`public-wallets-${e.username}-${n}-${t}`;return o.a.createElement("div",{className:Object(a.a)(e.className,g.a.container),id:r,onClick:t=>{t.stopPropagation(),e.onTip(e.username,e.contentId)},onMouseEnter:()=>e.onShowTooltip(r),onMouseLeave:()=>e.onHideTooltip()},o.a.createElement(u.a,{className:g.a.tokenFilled,subredditId:e.subredditId}),o.a.createElement(u.a,{grey:!0,className:g.a.tokenGrey,subredditId:e.subredditId}),o.a.createElement("span",{className:g.a.amount},Object(m.b)(e.amount,s)),o.a.createElement(p.c,{caretOnTop:!0,tooltipId:r,text:Object(c.a)(e.language,"gov.tipText",{tokenName:e.tokenName,username:e.username})}))}))},"./src/reddit/featureFlags/component.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var s=n("./node_modules/react/index.js"),o=n.n(s),r=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/reselect/es/index.js"),c=n("./src/reddit/featureFlags/index.ts"),a=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(n[s[o]]=e[s[o]])}return n};function d(e,t,n){const s=Object(i.c)({featureEnabled:t=>c.d[e](t)});return Object(r.b)(s)(e=>{const s=e.featureEnabled,r=(e.dispatch,a(e,["featureEnabled","dispatch"]));return s?o.a.createElement(t,Object.assign({},r)):void 0!==n?o.a.createElement(n,Object.assign({},r)):null})}},"./src/reddit/helpers/governance/tokens.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i});var s=n("./node_modules/bignumber.js/bignumber.js"),o=n("./src/lib/prettyPrintNumber/index.ts");function r(e,t){const n=new s.BigNumber(e),o=new s.BigNumber(t);return n.dividedBy(o).decimalPlaces(2).toString()}function i(e,t){return Object(o.b)(parseInt(r(e,t),10))}}}]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.842bb902f6c097f17a41.js.map

}
/*
     FILE ARCHIVED ON 07:22:37 Sep 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:16 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.082
  cdx.remote: 0.138
  esindex: 0.016
  LoadShardBlock: 76.498 (6)
  PetaboxLoader3.datanode: 88.363 (7)
  load_resource: 53.812
  PetaboxLoader3.resolve: 32.381
*/