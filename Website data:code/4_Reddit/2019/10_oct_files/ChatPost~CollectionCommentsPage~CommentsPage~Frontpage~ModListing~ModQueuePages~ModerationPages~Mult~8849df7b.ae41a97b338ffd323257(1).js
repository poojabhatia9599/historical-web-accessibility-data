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

(window.webpackJsonp=window.webpackJsonp||[]).push([["ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~8849df7b"],{"./src/reddit/actions/governance/index.ts":function(e,t,r){"use strict";var n=r("./src/app/strings/index.ts"),a=r("./src/lib/makeActionCreator/index.ts"),s=r("./src/lib/prettyPrintNumber/index.ts"),o=r("./src/reddit/actions/modal.ts"),c=r("./src/reddit/actions/post.ts"),d=r("./src/reddit/actions/toaster.ts"),i=r("./src/config.ts"),l=r("./src/reddit/endpoints/governance/requester.ts");var u=r("./src/reddit/endpoints/governance/poll.ts");r("./src/reddit/endpoints/governance/wallet.ts");var m=r("./src/reddit/models/Poll/index.ts"),p=r("./src/reddit/models/Toast/index.ts"),b=r("./src/reddit/models/Vote/index.ts"),v=r("./src/reddit/selectors/gov.ts"),g=r("./src/reddit/actions/governance/constants.ts"),C=r("./src/reddit/actions/governance/errorToast.ts");r.d(t,"a",(function(){return I})),r.d(t,"b",(function(){return x})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return O})),r.d(t,"h",(function(){return L})),r.d(t,"f",(function(){return M})),r.d(t,"g",(function(){return H})),r.d(t,"c",(function(){return P}));const I=Object(a.a)(g.b),x=Object(a.a)(g.c),f=Object(a.a)(g.d),j=Object(a.a)(g.e),O=(Object(a.a)(g.f),Object(a.a)(g.g),Object(a.a)(g.h)),h=Object(a.a)(g.i),_=Object(a.a)(g.j),E=Object(a.a)(g.k),w=Object(a.a)(g.q),L=Object(a.a)(g.r),y=Object(a.a)(g.s),N=Object(a.a)(g.t),k=(Object(a.a)(g.u),Object(a.a)(g.v),Object(a.a)(g.w)),M=(e,t)=>async(r,n,a)=>{let{apiContext:s}=a;const o=n().polls.models[e];r(_({pollId:e}));const d=await Object(u.b)(s(),o.subredditId,e,t);if(d.ok){r(E(d.body));const t=n(),a=t.polls.models[e];if(a&&Object(m.d)(a)){const{postId:e}=a,n=t.posts.models[e];n&&n.voteState===b.a.notVoted&&r(Object(c.P)(e))}}else r(h({pollId:e,error:d.error})),Object(C.a)(r,d.error)},H=(e,t)=>async(r,a,c)=>{let{apiContext:u}=c;r(y());const m=a().transfers.communityPoints.contentId||void 0,b=await function(e,t){return Object(l.a)(e,{data:{amount:t.amount,contentId:t.contentId,description:t.message,receiveUserName:t.recipient},endpoint:"".concat(i.a.metaUrl,"/wallets/me/").concat(t.subredditId,"/transfers"),method:"post"})}(u(),Object.assign({},e,{contentId:m}));if(b.ok){const c=a().user.language;r(N(Object.assign({},b.body,{subredditId:e.subredditId}))),r(Object(d.e)({kind:p.b.SuccessCommunity,text:Object(n.a)(c,"gov.transferSuccess",{amount:Object(s.a)(e.amount),recipient:e.recipient,tokenName:Object(v.j)(a(),{subredditId:e.subredditId})})})),t&&r(Object(o.f)())}else r(w({error:b.error})),Object(C.a)(r,b.error)},P=(e,t)=>async(r,a,s)=>{let{apiContext:o}=s;r(f());const c=await function(e,t,r){return Object(l.a)(e,{data:{optOut:t},method:"patch",endpoint:"".concat(i.a.metaUrl,"/wallets/").concat(r,"/me")})}(o(),e,t);if(c.ok){r(k({[t]:c.body}));const s=e?"polls.optOutSuccess":"polls.optInSuccess";r(Object(d.e)({kind:p.b.SuccessCommunity,text:Object(n.a)(a().user.language,s,{tokenName:Object(v.j)(a(),{subredditId:t})})}))}else Object(C.a)(r,c.error)}},"./src/reddit/components/Governance/Token/index.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n),s=r("./node_modules/react-redux/es/index.js"),o=r("./node_modules/reselect/es/index.js"),c=r("./src/config.ts"),d=r("./src/reddit/selectors/gov.ts");const i=Object(o.c)({tokenSymbol:d.k});t.a=Object(s.b)(i)((function(e){const t=e.grey?e.tokenSymbol.grey:e.tokenSymbol.filled;return a.a.createElement("img",{className:e.className,src:"".concat(c.a.assetPath,"/").concat(t)})}))},"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n),s=r("./node_modules/react-redux/es/index.js"),o=r("./node_modules/reselect/es/index.js"),c=r("./src/reddit/actions/governance/index.ts"),d=r("./src/reddit/actions/tooltip.ts"),i=r("./src/reddit/featureFlags/index.ts"),l=r("./src/reddit/models/User/index.ts"),u=r("./src/reddit/selectors/gov.ts"),m=r("./src/reddit/selectors/meta.ts"),p=r("./src/reddit/selectors/moderatorPermissions.ts"),b=r("./src/reddit/selectors/tooltip.ts"),v=r("./src/reddit/selectors/user.ts"),g=r("./src/reddit/selectors/userFlair.ts"),C=r("./src/config.ts"),I=r("./node_modules/react-router-dom/es/index.js"),x=r("./src/app/strings/index.ts"),f=r("./src/lib/lessComponent.tsx"),j=r("./src/lib/prettyPrintNumber/index.ts"),O=r("./src/lib/timeAgo/index.ts"),h=r("./src/reddit/i18n/components.tsx"),_=r("./src/chat/helpers/urls/index.ts"),E=r("./src/reddit/components/Governance/Token/index.tsx"),w=r("./src/reddit/components/JSAPIContainers/index.tsx"),L=r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),y=r("./src/reddit/components/SubscribeButton/index.tsx"),N=r("./src/reddit/helpers/trackers/authorHovercard.ts"),k=r("./src/reddit/icons/svgs/Admin/index.tsx"),M=r("./src/reddit/icons/svgs/Karma/index.tsx"),H=r("./src/reddit/icons/svgs/Premium/index.tsx"),P=r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),T=r("./src/reddit/controls/Button/index.tsx"),U=r("./src/reddit/i18n/utils.ts"),S=r("./src/reddit/actions/inContextModeration.ts"),F=r("./src/reddit/actions/modal.ts"),A=r("./src/reddit/actions/subredditModeration.ts"),B=r("./src/reddit/constants/modals.ts"),Z=r("./src/reddit/components/Hovercards/helpers.ts"),K=r("./src/reddit/icons/svgs/Ban/index.tsx"),q=r("./src/reddit/icons/svgs/Mute/index.tsx"),D=r("./src/reddit/models/ModeratingSubreddits/index.ts"),J=r("./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less"),R=r.n(J);const z=f.a.wrapped(K.a,"BanIcon",R.a),Q=f.a.wrapped(q.a,"MuteIcon",R.a),V=Object(o.c)({hasModMailPermissions:Object(p.a)(D.c.mail)});var X=Object(s.b)(V,(e,t)=>{let{username:r,subredditId:n,contextId:a}=t;return{toggleBanModal:()=>{e(Object(S.c)({username:r,subredditId:n,contextId:a})),e(Object(A.X)(n))},toggleMuteModal:()=>{e(Object(S.d)({username:r,subredditId:n,contextId:a})),e(Object(F.i)(B.a.MUTE_USER))}}})(e=>a.a.createElement("div",{className:e.className},a.a.createElement(Z.a,{role:"button",onClick:()=>{e.toggleBanModal(),e.sendEvent(N.a(e.contextId))}},a.a.createElement(z,null),a.a.createElement(h.c,null,"Ban User")),e.hasModMailPermissions&&a.a.createElement(Z.a,{role:"button",onClick:()=>{e.toggleMuteModal(),e.sendEvent(N.d(e.contextId))}},a.a.createElement(Q,null),a.a.createElement(h.c,null,"Mute User")))),Y=r("./src/reddit/actions/userFlair.ts"),W=r("./src/reddit/icons/svgs/Tag/index.tsx"),G=r("./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less"),$=r.n(G);const ee=f.a.wrapped(W.a,"FlairIcon",$.a);var te=Object(s.b)(null,(e,t)=>({onToggleUserFlairModal:()=>e(Object(Y.p)(t.subredditId,t.username))}))(e=>a.a.createElement(Z.a,{role:"button",onClick:()=>{e.onToggleUserFlairModal(),e.sendEvent(N.c(e.contextId))}},a.a.createElement(ee,null),a.a.createElement(h.c,null,"Edit user flair"))),re=r("./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less"),ne=r.n(re);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const se=f.a.div("SubredditIcon",ne.a),oe=f.a.wrapped(y.a,"SubscribeButton",ne.a),ce=f.a.wrapped(M.a,"KarmaIcon",ne.a),de=f.a.wrapped(H.a,"PremiumIcon",ne.a),ie=f.a.wrapped(E.a,"Token",ne.a),le=f.a.wrapped(I.a,"UserNameLink",ne.a),ue=f.a.div("UserNameMetaData",ne.a),me=f.a.div("MetaDataItem",ne.a),pe=f.a.div("Bullet",ne.a),be=f.a.div("UserNameContainer",ne.a),ve=f.a.div("UserInfoContainer",ne.a),ge=f.a.div("PostKarma",ne.a),Ce=f.a.div("CommentKarma",ne.a),Ie=f.a.div("KarmaCount",ne.a),xe=f.a.div("KarmaLabel",ne.a),fe=f.a.div("BannerImage",ne.a),je=f.a.div("UserContainer",ne.a),Oe=f.a.div("BottomSpacer",ne.a),he=f.a.a("UserActionLink",ne.a),_e=f.a.div("Container",ne.a),Ee=e=>a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(le,{to:"/user/".concat(e.userName,"/")},"u/".concat(e.userName)),e.user.isEmployee&&a.a.createElement(k.a,{className:ne.a.adminIcon,title:Object(U.c)("Reddit admin")}),e.user.isGold&&a.a.createElement(I.a,{to:"/premium"},a.a.createElement(de,null))),a.a.createElement(ue,null,e.user.username&&a.a.createElement(me,null,e.user.username,a.a.createElement(pe,null,"•")),a.a.createElement(me,null,Object(O.d)(e.language,e.user.created)))),we=e=>a.a.createElement(ve,null,a.a.createElement(ce,null),a.a.createElement(ge,null,a.a.createElement(Ie,null,Object(j.b)(e.user.postKarma)),a.a.createElement(xe,null,a.a.createElement(h.c,null,"Post Karma"))),a.a.createElement(Ce,null,a.a.createElement(Ie,null,Object(j.b)(e.user.commentKarma)),a.a.createElement(xe,null,a.a.createElement(h.c,null,"Comment Karma")))),Le=Object(L.a)(e=>{const{className:t,contextId:r,hideNSFWPref:n,hoverId:s,isCurrentUser:o,isGov:c,origin:d,language:i,moderatorPermissions:l,sendEvent:u,style:m,subredditId:p,tokenName:b,userName:v,user:g,userFlair:I,userInChat:f,wallet:j}=e;if(!g)return a.a.createElement(_e,{style:m});const O=g.isNSFW&&n,h=g.accountIcon||"".concat(C.a.assetPath,"/img/snoo_user_placeholder.png"),E=l&&l.flair,L=l&&l.access,y=I&&I.templateIds&&I.templateIds.length>0,k=I&&I.displaySettings&&I.displaySettings.isEnabled,{awardedLastMonth:M}=g,H=O?"".concat(C.a.assetPath,"/img/user-info-banner.png"):e.user.bannerImage,S=O?"".concat(C.a.assetPath,"/img/avatar_over18_square.png"):h;return a.a.createElement(_e,{className:t,id:s,style:m},a.a.createElement(fe,{style:{backgroundImage:"url('".concat(H,"')")}}),a.a.createElement(je,null,a.a.createElement(be,null,a.a.createElement(se,{style:{background:"url('".concat(S,"')"),backgroundSize:"contain"}}),a.a.createElement(Ee,{language:i,origin:d,user:g,userName:v})),a.a.createElement(we,{language:i,user:g,userName:v}),M&&a.a.createElement(P.a,{recentAwardings:M,username:v}),f&&!o&&a.a.createElement(T.g,{href:Object(_.channelUserIdUrl)(g.id),target:"_blank",rel:"noopener noreferrer",onClick:()=>u(Object(N.b)(r)),className:ne.a.primaryLinkButton},Object(U.c)("Start Chat")),g.hasUserProfile&&!o&&a.a.createElement(oe,{identifier:{name:e.user.username,type:"profile"},getEventFactory:e=>Object(N.f)(e?"unfollow":"follow",r),small:!0})),L&&r&&!o&&p&&a.a.createElement(X,{contextId:r,language:i,subredditId:p,sendEvent:u,username:v}),E&&r&&y&&k&&p&&a.a.createElement(te,{contextId:r,language:i,subredditId:p,sendEvent:u,username:v}),c&&j&&a.a.createElement(he,{onClick:()=>e.onOpenTransferModal(g.username)},p&&a.a.createElement(ie,{subredditId:p}),Object(x.a)(i,"gov.transferModalTitle",{tokenName:b})),a.a.createElement(w.i,{contextId:r,subredditId:p,user:g}),!(L||f)&&a.a.createElement(Oe,null))});var ye=e=>{const t=e.activeTooltipId===e.tooltipId;return a.a.createElement(Le,ae({isOpen:t},e))};const Ne=Object(o.c)({tokenName:u.j,activeTooltipId:b.a,isCurrentUser:(e,t)=>{const r=Object(v.i)(e);return!!r&&Object(l.f)(r)===t.userName},isGov:i.d.spPoints,hideNSFWPref:v.z,language:v.S,moderatorPermissions:p.i,origin:m.g,user:v.gb,userFlair:g.c,userInChat:i.d.userInChat,wallet:u.d}),ke=Object(s.b)(Ne,(e,t)=>({onHideTooltip:()=>e(Object(d.i)()),onOpenTransferModal:r=>e(Object(c.h)({recipient:r,contentId:t.contextId}))}));t.a=ke(e=>a.a.createElement("div",{className:e.className,id:e.tooltipId,onMouseLeave:e.onHideTooltip},a.a.createElement(ye,{activeTooltipId:e.activeTooltipId,contextId:e.contextId,isCurrentUser:e.isCurrentUser,isGov:e.isGov,hideNSFWPref:e.hideNSFWPref,hoverId:e.hoverId,language:e.language,moderatorPermissions:e.moderatorPermissions,onHideTooltip:e.onHideTooltip,onOpenTransferModal:e.onOpenTransferModal,origin:e.origin,sendEvent:e.sendEvent,subredditId:e.subredditId,tokenName:e.tokenName,tooltipId:e.tooltipId,tooltipType:e.tooltipType,user:e.user,userFlair:e.userFlair,userInChat:e.userInChat,userName:e.userName,wallet:e.wallet})))},"./src/reddit/components/Hovercards/AuthorHovercard/ModActions.m.less":function(e,t,r){e.exports={BanIcon:"_2g595huO3XJ8C5PGbnTIcH",banIcon:"_2g595huO3XJ8C5PGbnTIcH",MuteIcon:"_1qnIs5F_qVlqqqY9ZvtGHT",muteIcon:"_1qnIs5F_qVlqqqY9ZvtGHT"}},"./src/reddit/components/Hovercards/AuthorHovercard/ModFlairActions.m.less":function(e,t,r){e.exports={FlairIcon:"_2xaYvwRfHZMRW_6lyBpV4v",flairIcon:"_2xaYvwRfHZMRW_6lyBpV4v"}},"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r("./node_modules/react/index.js"),a=r.n(n),s=r("./src/reddit/components/Hovercards/helpers.ts"),o=r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),c=r("./src/reddit/helpers/isPost.ts"),d=r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),i=r("./src/reddit/components/TrackingHelper/index.tsx"),l=r("./src/reddit/helpers/trackers/authorHovercard.ts");const u="UserInfoTooltip",m=e=>Object(c.a)(e.id)?e.belongsTo.id:e.subredditId;class p extends a.a.Component{constructor(){super(...arguments),this.sendEvent=()=>this.props.sendEvent(Object(l.e)(this.props.postOrComment.id))}render(){const{props:e}=this,t=Object(s.b)({author:e.author,itemId:e.postOrComment.id,tooltipIdPrefix:u,tooltipType:e.tooltipType}),r="".concat(t,"-hover-id"),n=e.author||e.postOrComment.author;return a.a.createElement(o.a,{authorOrSubredditName:n,hoverId:r,sendHoverEvent:this.sendEvent,tooltipId:t},e.children,a.a.createElement(d.a,{className:e.className,contextId:e.postOrComment.id,hoverId:r,sendEvent:e.sendEvent,subredditId:m(e.postOrComment),tooltipId:t,tooltipType:e.tooltipType,userName:n}))}}t.b=Object(i.b)(p)},"./src/reddit/components/Hovercards/AuthorHovercard/userOptions.m.less":function(e,t,r){e.exports={primaryLinkButton:"_33qmTi-steAtfFkONvaiX3",SubredditIcon:"_59_dv7TVnod9oIzsOdPEM",subredditIcon:"_59_dv7TVnod9oIzsOdPEM",SubscribeButton:"yFByQg8RzENoqoOt0ysAk",subscribeButton:"yFByQg8RzENoqoOt0ysAk",KarmaIcon:"_2XmHHGriP3EYLhv_9BG6OT",karmaIcon:"_2XmHHGriP3EYLhv_9BG6OT",PremiumIcon:"_3YJqiyvx8zFvv30tmg36S-",premiumIcon:"_3YJqiyvx8zFvv30tmg36S-",Token:"_2U0P3n4v75sHsDvQmSKNz3",token:"_2U0P3n4v75sHsDvQmSKNz3",UserNameLink:"_1oT4pd8QlZQZ1wGOk9VAaQ",userNameLink:"_1oT4pd8QlZQZ1wGOk9VAaQ",UserNameMetaData:"_1wu7a98opA-mU9WUQpJIuF",userNameMetaData:"_1wu7a98opA-mU9WUQpJIuF",GildedLastMonthDisplay:"_19NlUDUSw7ra6wC0luJwKV",gildedLastMonthDisplay:"_19NlUDUSw7ra6wC0luJwKV",MetaDataItem:"RcL4UXH2ABHT3YpYzu3ms",metaDataItem:"RcL4UXH2ABHT3YpYzu3ms",Bullet:"_2dfF2p_dwLpL5C-8pAvdbL",bullet:"_2dfF2p_dwLpL5C-8pAvdbL",UserNameContainer:"J9OjkO5NR8gsgJUQrk2Ft",userNameContainer:"J9OjkO5NR8gsgJUQrk2Ft",UserInfoContainer:"_3l7ptRjFJYo-fcXXajRpqn",userInfoContainer:"_3l7ptRjFJYo-fcXXajRpqn",PostKarma:"_2T3kavHwxOaL76xfa9id7",postKarma:"_2T3kavHwxOaL76xfa9id7",CommentKarma:"_1rFYsN1yoSDrDTRfqagI5r",commentKarma:"_1rFYsN1yoSDrDTRfqagI5r",KarmaCount:"_18aX_pAQub_mu1suz4-i8j",karmaCount:"_18aX_pAQub_mu1suz4-i8j",KarmaLabel:"_1b2tgHrvjFKgTLyFIQ9B6T",karmaLabel:"_1b2tgHrvjFKgTLyFIQ9B6T",BannerImage:"_1l9DXI5VaWcxjbz23v5b6X",bannerImage:"_1l9DXI5VaWcxjbz23v5b6X",UserContainer:"_m7PpFuKATP9fZF4xKf9R",userContainer:"_m7PpFuKATP9fZF4xKf9R",BottomSpacer:"_2D-HmwsbsNkTnIiPO4zcqb",bottomSpacer:"_2D-HmwsbsNkTnIiPO4zcqb",UserActionLink:"_1Sy8bDpK6p4JRHy1yB1Xyk",userActionLink:"_1Sy8bDpK6p4JRHy1yB1Xyk",Container:"_1sbZnfdaxhCOFVUCJ3Z75m",container:"_1sbZnfdaxhCOFVUCJ3Z75m",adminIcon:"_2aJuBKF3mo4YJS4YFkeU9a"}},"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n),s=r("./src/config.ts"),o=r("./src/lib/prettyPrintNumber/index.ts"),c=r("./src/reddit/i18n/components.tsx"),d=r("./src/reddit/components/ProfileIdCard/index.m.less"),i=r.n(d);class l extends a.a.PureComponent{render(){const{recentAwardings:e,username:t}=this.props;if(!e.topAward)return null;const{topAward:r,totalCount:n}=e,d=r.icon32?r.icon32.url:r.icon.url,l=r.description?r.description:r.name;return a.a.createElement("a",{className:i.a.AwardedLastMonth,href:"".concat(s.a.oldRedditUrl,"/user/").concat(t,"/gilded")},a.a.createElement("div",{className:i.a.iconColumn},a.a.createElement("img",{alt:l,className:i.a.icon,src:d}),n>1&&a.a.createElement("span",{className:i.a.count},"+".concat(Object(o.b)(n-1)))),a.a.createElement("div",{className:i.a.textColumn},n>1?a.a.createElement(c.c,null,"Received the ",a.a.createElement(c.b,{name:"award-name"},r.name)," Award and more in the past 30 days"):a.a.createElement(c.c,null,"Received the ",a.a.createElement(c.b,{name:"award-name"},r.name)," Award in the past 30 days")))}}t.a=l},"./src/reddit/components/ProfileIdCard/index.m.less":function(e,t,r){e.exports={SnooIconWrapper:"_308WM6C-yV5iwS0Iy8nOfI",snooIconWrapper:"_308WM6C-yV5iwS0Iy8nOfI",actionItem:"_1l7CTV4NjDjmzX8DiiSgTL",AwardedLastMonth:"oZjk-MiWCU7KVYej9wPSw",awardedLastMonth:"oZjk-MiWCU7KVYej9wPSw",textColumn:"_wi1DtT7oN7k_x5oIV8zm",iconColumn:"_32tzMaZn7x3dfQC5MXndJn",icon:"_12jN4wdttUosp76WHzuieI",count:"_6xPPP5HdELF-SZJL8layH",awardIcon:"_2Eq8z6UD7I0ul3wnZ-YT80",adminIcon:"_1sNQxemH_0rq1jtZAMyAZd",button:"_2q1wcTx60QKM_bQ1Maev7b"}},"./src/reddit/endpoints/governance/poll.ts":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return l}));var n=r("./node_modules/lodash/get.js"),a=r.n(n),s=r("./src/config.ts"),o=r("./src/lib/omitHeaders/index.ts"),c=r("./src/reddit/constants/headers.ts"),d=(r("./src/reddit/models/Poll/index.ts"),r("./src/reddit/endpoints/governance/requester.ts"));function i(e,t,r,n){return Object(d.a)(e,{method:"put",endpoint:"".concat(s.a.metaUrl,"/polls/").concat(t,"/").concat(r,"/votes/me/").concat(n)})}function l(e,t){return Object(d.a)(Object(o.a)(e,[c.a]),{method:"get",endpoint:"".concat(e.apiUrl,"/by_id/").concat(t,".json")}).then(e=>e.ok?Object.assign({},e,{body:{title:a()(e.body,["data","children",0,"data","title"],""),url:a()(e.body,["data","children",0,"data","permalink"],"")}}):e)}},"./src/reddit/helpers/trackers/authorHovercard.ts":function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return d})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r("./src/reddit/helpers/isComment.ts"),a=r("./src/reddit/selectors/telemetry.ts");const s=(e,t)=>({comment:t&&Object(n.a)(t)?a.comment(e,t):null,post:t?a.post(e,t):null,profile:a.profile(e),screen:a.screen(e)}),o=(e,t)=>r=>Object.assign({source:"user_hovercard",action:"click",noun:e},s(r,t)),c=e=>t=>Object.assign({source:"user_hovercard",action:"view",noun:"hover_user_hovercard"},s(t,e)),d=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"mute_dialog_in_context"},s(t,e)),i=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"ban_dialog_in_context"},s(t,e)),l=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"change_user_flair_in_context",userSubreddit:a.userSubreddit(t)},s(t,e)),u=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"create_chat"},e&&s(t,e))},"./src/reddit/icons/svgs/Ban/index.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n);t.a=e=>a.a.createElement("svg",{className:e.className,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",null,a.a.createElement("path",{d:"M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"})))},"./src/reddit/icons/svgs/Karma/index.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n);t.a=e=>a.a.createElement("svg",{className:e.className,viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",null,a.a.createElement("path",{d:"M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"})))},"./src/reddit/icons/svgs/Mute/index.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n);t.a=e=>a.a.createElement("svg",{className:e.className,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",null,a.a.createElement("path",{d:"M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",id:"path-1"})))},"./src/reddit/icons/svgs/Tag/index.tsx":function(e,t,r){"use strict";var n=r("./node_modules/react/index.js"),a=r.n(n);t.a=e=>a.a.createElement("svg",{className:e.className,style:e.style,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a.a.createElement("g",null,a.a.createElement("path",{fill:"inherit",d:"M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"})))},"./src/reddit/selectors/gov.ts":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return m})),r.d(t,"j",(function(){return p})),r.d(t,"k",(function(){return b})),r.d(t,"i",(function(){return v})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return C}));var n=r("./src/reddit/contexts/PageLayer/index.tsx");const a=[],s={},o={filled:"img/communityPoints/default_filled.png",grey:"img/communityPoints/default_grey.png"},c=(e,t)=>{const r=g(e,t);if(r)return r.mainHeader},d=(e,t)=>{const r=g(e,t);return r&&r.mainHeader?r.mainHeader.price:"0"},i=(e,t)=>{const r=g(e,t);return r&&r.mainHeader?{owner:r.mainHeader.owner,ownerId:r.mainHeader.ownerId}:s},l=(e,t)=>t&&t.subredditId?(e.user.wallets[t.subredditId]||{}).latest:void 0,u=(e,t)=>{return(e.users.publicWallets[t.userId]||{})[t.subredditId]},m=(e,t)=>{const r=Object(n.n)(e,t);return r&&e.subreddits.gov.releaseNotes[r]||a},p=(e,t)=>t&&t.subredditId&&(e.subreddits.gov.meta[t.subredditId]||{}).name||"Subreddit Points",b=(e,t)=>t&&t.subredditId&&(e.subreddits.gov.meta[t.subredditId]||{}).images||o,v=(e,t)=>{const r=C(e,t);return r&&r.provider?"1000000000000000000":"1"},g=(e,t)=>t.subredditId?e.subreddits.gov.assets[t.subredditId]:void 0,C=(e,t)=>t&&t.subredditId?e.subreddits.gov.meta[t.subredditId]:void 0}}]);
//# sourceMappingURL=ChatPost~CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Mult~8849df7b.ae41a97b338ffd323257.js.map

}
/*
     FILE ARCHIVED ON 04:11:03 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:50:33 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.17
  exclusion.robots.policy: 0.148
  cdx.remote: 0.182
  esindex: 0.022
  LoadShardBlock: 259.176 (6)
  PetaboxLoader3.datanode: 295.343 (7)
  load_resource: 117.411
  PetaboxLoader3.resolve: 52.142
*/