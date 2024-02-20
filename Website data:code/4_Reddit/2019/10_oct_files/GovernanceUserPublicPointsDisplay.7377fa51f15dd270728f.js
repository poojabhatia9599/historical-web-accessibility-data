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

(window.webpackJsonp=window.webpackJsonp||[]).push([["GovernanceUserPublicPointsDisplay"],{"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less":function(e,t,n){e.exports={token:"_3nQr7AT1U0w1HdVk-xepUB",tokenGrey:"pvn75ouWnsoKK4l_QS9yI",tokenFilled:"_3d-Rpbq-Qb88tf5D_s1rsj",amount:"_3nhTfmUMmYib8x61No0h3r",container:"_15KjTxLhBmrJE79nlBUuxb"}},"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),s=n.n(o),r=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/reselect/es/index.js"),i=n("./src/app/strings/index.ts"),a=n("./src/lib/classNames/index.ts"),d=n("./src/reddit/actions/governance/index.ts"),l=n("./src/reddit/actions/tooltip.ts"),u=n("./src/reddit/components/Governance/Token/index.tsx"),m=n("./src/reddit/components/InfoTextTooltip/index.tsx"),p=n("./src/reddit/featureFlags/component.tsx"),b=n("./src/reddit/helpers/governance/tokens.ts"),x=n("./src/reddit/selectors/gov.ts"),j=n("./src/reddit/selectors/user.ts"),f=n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),g=n.n(f);const v=Object(c.c)({tokenName:x.j,tokenDisplayConversion:x.i,amount:(e,t)=>{const n=Object(x.e)(e,t);return n?n.amount:void 0},language:j.S});t.default=Object(p.a)("spPublicPoints",Object(r.b)(v,e=>({onHideTooltip:()=>e(Object(l.i)()),onShowTooltip:t=>e(Object(l.f)({tooltipId:t})),onTip:(t,n)=>e(Object(d.h)({recipient:t,contentId:n}))}))((function(e){if(!e.amount)return null;const{contentId:t,subredditId:n,tokenDisplayConversion:o,username:r}=e,c="public-wallets-".concat(r,"-").concat(n,"-").concat(t);return s.a.createElement("div",{className:Object(a.a)(e.className,g.a.container),id:c,onClick:t=>{t.stopPropagation(),e.onTip(e.username,e.contentId)},onMouseEnter:()=>e.onShowTooltip(c),onMouseLeave:()=>e.onHideTooltip()},s.a.createElement(u.a,{className:g.a.tokenFilled,subredditId:e.subredditId}),s.a.createElement(u.a,{grey:!0,className:g.a.tokenGrey,subredditId:e.subredditId}),s.a.createElement("span",{className:g.a.amount},Object(b.b)(e.amount,o)),s.a.createElement(m.c,{caretOnTop:!0,tooltipId:c,text:Object(i.a)(e.language,"gov.tipText",{tokenName:e.tokenName,username:e.username})}))})))},"./src/reddit/featureFlags/component.tsx":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("./node_modules/core-js/modules/es6.symbol.js");var o=n("./node_modules/react/index.js"),s=n.n(o),r=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/reselect/es/index.js"),i=n("./src/reddit/featureFlags/index.ts"),a=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(n[o[s]]=e[o[s]])}return n};function d(e,t,n){const o=Object(c.c)({featureEnabled:t=>i.d[e](t)});return Object(r.b)(o)(e=>{const{featureEnabled:o,dispatch:r}=e,c=a(e,["featureEnabled","dispatch"]);return o?s.a.createElement(t,c):void 0!==n?s.a.createElement(n,c):null})}},"./src/reddit/helpers/governance/tokens.ts":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));n("./node_modules/core-js/modules/es6.regexp.to-string.js");var o=n("./node_modules/bignumber.js/bignumber.js"),s=n("./src/lib/prettyPrintNumber/index.ts");function r(e,t){const n=new o.BigNumber(e),s=new o.BigNumber(t);return n.dividedBy(s).decimalPlaces(2).toString()}function c(e,t){return Object(s.b)(parseInt(r(e,t),10))}}}]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.7377fa51f15dd270728f.js.map

}
/*
     FILE ARCHIVED ON 04:11:04 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:24 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.096
  exclusion.robots.policy: 0.084
  cdx.remote: 0.104
  esindex: 0.011
  LoadShardBlock: 377.696 (6)
  PetaboxLoader3.datanode: 121.472 (7)
  load_resource: 58.133
  PetaboxLoader3.resolve: 32.84
*/