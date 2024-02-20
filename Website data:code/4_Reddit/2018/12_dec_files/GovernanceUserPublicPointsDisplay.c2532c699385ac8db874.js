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

(window.webpackJsonp=window.webpackJsonp||[]).push([["GovernanceUserPublicPointsDisplay"],{"./src/reddit/components/Governance/UserPublicPointsDisplay/index.tsx":function(e,t,n){"use strict";n.r(t);n("./node_modules/react/index.js");var o,s=n("./node_modules/react-redux/es/index.js"),r=n("./node_modules/reselect/lib/index.js"),i=n("./src/app/actions/tooltip.ts"),c=n("./src/app/strings/index.ts"),a=n("./src/lib/classNames/index.ts"),d=n("./src/lib/prettyPrintNumber/index.ts"),l=n("./src/reddit/actions/governance/index.ts"),u=n("./src/reddit/components/Governance/Token/index.tsx"),p=n("./src/reddit/components/InfoTextTooltip/index.tsx"),m=n("./src/reddit/featureFlags/component.tsx"),b=n("./src/reddit/selectors/gov.ts"),f=n("./src/reddit/selectors/user.ts"),v=n("./src/reddit/components/Governance/UserPublicPointsDisplay/index.m.less"),x=n.n(v),y=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,s){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var a=Array(i),d=0;d<i;d++)a[d]=arguments[d+3];t.children=a}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}});const g=Object(r.createStructuredSelector)({tokenName:b.f,amount:(e,t)=>{const n=Object(b.b)(e,t);return n?n.amount:void 0},language:f.I});t.default=Object(m.a)("governance",Object(s.connect)(g,e=>({onHideTooltip:()=>e(Object(i.f)()),onShowTooltip:t=>e(Object(i.d)({tooltipId:t})),onTip:(t,n)=>e(Object(l.i)({recipient:t,contentId:n}))}))(function(e){if(!e.amount)return null;const t=e.contentId,n=e.subredditId,o=`public-wallets-${e.username}-${n}-${t}`;return y("div",{className:Object(a.a)(e.className,x.a.container),id:o,onClick:t=>{t.stopPropagation(),e.onTip(e.username,e.contentId)},onMouseEnter:()=>e.onShowTooltip(o),onMouseLeave:()=>e.onHideTooltip()},void 0,y(u.a,{className:x.a.tokenFilled,subredditId:e.subredditId}),y(u.a,{grey:!0,className:x.a.tokenGrey,subredditId:e.subredditId}),y("span",{className:x.a.amount},void 0,Object(d.b)(parseInt(e.amount))),y(p.b,{caretOnTop:!0,tooltipId:o,text:Object(c.a)(e.language,"gov.tipText",{tokenName:e.tokenName,username:e.username})}))}))}}]);
//# sourceMappingURL=GovernanceUserPublicPointsDisplay.c2532c699385ac8db874.js.map

}
/*
     FILE ARCHIVED ON 18:43:17 Nov 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:35:59 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.065
  cdx.remote: 0.132
  esindex: 0.014
  LoadShardBlock: 180.118 (6)
  PetaboxLoader3.datanode: 187.337 (8)
  load_resource: 233.086 (2)
  PetaboxLoader3.resolve: 119.347 (2)
*/