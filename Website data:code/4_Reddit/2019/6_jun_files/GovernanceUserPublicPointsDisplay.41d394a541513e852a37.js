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

(window.webpackJsonp=window.webpackJsonp||[]).push([["GovernanceUserPublicPointsDisplay"],{"./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less":function(e,t,n){e.exports={token:"_3nQr7AT1U0w1HdVk-xepUB",tokenGrey:"pvn75ouWnsoKK4l_QS9yI",tokenFilled:"_3d-Rpbq-Qb88tf5D_s1rsj",amount:"_3nhTfmUMmYib8x61No0h3r",container:"_15KjTxLhBmrJE79nlBUuxb"}},"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),s=n.n(o),r=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/reselect/es/index.js"),a=n("./src/app/actions/tooltip.ts"),i=n("./src/app/strings/index.ts"),d=n("./src/lib/classNames/index.ts"),l=n("./src/lib/prettyPrintNumber/index.ts"),u=n("./src/reddit/actions/governance/index.ts"),p=n("./src/reddit/components/Governance/Token/index.tsx"),m=n("./src/reddit/components/InfoTextTooltip/index.tsx"),b=n("./src/reddit/featureFlags/component.tsx"),x=n("./src/reddit/selectors/gov.ts"),j=n("./src/reddit/selectors/user.ts"),T=n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),k=n.n(T);const v=Object(c.createStructuredSelector)({tokenName:x.i,amount:(e,t)=>{const n=Object(x.e)(e,t);return n?n.amount:void 0},language:j.Q});t.default=Object(b.a)("spPublicPoints",Object(r.connect)(v,e=>({onHideTooltip:()=>e(Object(a.f)()),onShowTooltip:t=>e(Object(a.d)({tooltipId:t})),onTip:(t,n)=>e(Object(u.h)({recipient:t,contentId:n}))}))(function(e){if(!e.amount)return null;const t=e.contentId,n=e.subredditId,o=`public-wallets-${e.username}-${n}-${t}`;return s.a.createElement("div",{className:Object(d.a)(e.className,k.a.container),id:o,onClick:t=>{t.stopPropagation(),e.onTip(e.username,e.contentId)},onMouseEnter:()=>e.onShowTooltip(o),onMouseLeave:()=>e.onHideTooltip()},s.a.createElement(p.a,{className:k.a.tokenFilled,subredditId:e.subredditId}),s.a.createElement(p.a,{grey:!0,className:k.a.tokenGrey,subredditId:e.subredditId}),s.a.createElement("span",{className:k.a.amount},Object(l.b)(parseInt(e.amount))),s.a.createElement(m.c,{caretOnTop:!0,tooltipId:o,text:Object(i.a)(e.language,"gov.tipText",{tokenName:e.tokenName,username:e.username})}))}))}}]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.41d394a541513e852a37.js.map

}
/*
     FILE ARCHIVED ON 11:15:40 May 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:00:12 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.136
  exclusion.robots.policy: 0.119
  cdx.remote: 0.168
  esindex: 0.013
  LoadShardBlock: 184.169 (6)
  PetaboxLoader3.datanode: 183.341 (8)
  PetaboxLoader3.resolve: 143.677 (3)
  load_resource: 196.81 (2)
*/