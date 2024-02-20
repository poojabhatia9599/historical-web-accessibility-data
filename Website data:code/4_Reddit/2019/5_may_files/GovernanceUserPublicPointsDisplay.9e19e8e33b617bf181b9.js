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

(window.webpackJsonp=window.webpackJsonp||[]).push([["GovernanceUserPublicPointsDisplay"],{"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx":function(e,t,n){"use strict";n.r(t);var s=n("./node_modules/react/index.js"),o=n.n(s),a=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/reselect/es/index.js"),r=n("./src/app/actions/tooltip.ts"),i=n("./src/app/strings/index.ts"),d=n("./src/lib/classNames/index.ts"),l=n("./src/lib/prettyPrintNumber/index.ts"),u=n("./src/reddit/actions/governance/index.ts"),p=n("./src/reddit/components/Governance/Token/index.tsx"),m=n("./src/reddit/components/InfoTextTooltip/index.tsx"),b=n("./src/reddit/featureFlags/component.tsx"),x=n("./src/reddit/selectors/gov.ts"),j=n("./src/reddit/selectors/user.ts"),I=n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),g=n.n(I);const v=Object(c.createStructuredSelector)({tokenName:x.i,amount:(e,t)=>{const n=Object(x.e)(e,t);return n?n.amount:void 0},language:j.P});t.default=Object(b.a)("spPublicPoints",Object(a.connect)(v,e=>({onHideTooltip:()=>e(Object(r.f)()),onShowTooltip:t=>e(Object(r.d)({tooltipId:t})),onTip:(t,n)=>e(Object(u.h)({recipient:t,contentId:n}))}))(function(e){if(!e.amount)return null;const t=e.contentId,n=e.subredditId,s=`public-wallets-${e.username}-${n}-${t}`;return o.a.createElement("div",{className:Object(d.a)(e.className,g.a.container),id:s,onClick:t=>{t.stopPropagation(),e.onTip(e.username,e.contentId)},onMouseEnter:()=>e.onShowTooltip(s),onMouseLeave:()=>e.onHideTooltip()},o.a.createElement(p.a,{className:g.a.tokenFilled,subredditId:e.subredditId}),o.a.createElement(p.a,{grey:!0,className:g.a.tokenGrey,subredditId:e.subredditId}),o.a.createElement("span",{className:g.a.amount},Object(l.b)(parseInt(e.amount))),o.a.createElement(m.c,{caretOnTop:!0,tooltipId:s,text:Object(i.a)(e.language,"gov.tipText",{tokenName:e.tokenName,username:e.username})}))}))}}]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.9e19e8e33b617bf181b9.js.map

}
/*
     FILE ARCHIVED ON 01:34:08 May 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:00:06 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.149
  exclusion.robots.policy: 0.126
  cdx.remote: 0.235
  esindex: 0.019
  LoadShardBlock: 298.422 (6)
  PetaboxLoader3.datanode: 790.119 (8)
  load_resource: 690.006 (2)
  PetaboxLoader3.resolve: 124.965 (2)
*/