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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~N~cb337d3c"],{"./src/reddit/actions/governance/index.ts":function(e,t,r){"use strict";var o=r("./src/app/strings/index.ts"),n=r("./src/lib/makeActionCreator/index.ts"),s=r("./src/lib/prettyPrintNumber/index.ts"),i=r("./src/reddit/actions/modal.ts"),d=r("./src/reddit/actions/post.ts"),c=r("./src/reddit/actions/toaster.ts"),a=r("./src/config.ts"),l=r("./src/reddit/endpoints/governance/requester.ts");var u=r("./src/reddit/endpoints/governance/poll.ts");r("./src/reddit/endpoints/governance/wallet.ts");var p=r("./src/reddit/models/Poll/index.ts"),m=r("./src/reddit/models/Toast/index.ts"),f=r("./src/reddit/models/Vote/index.ts"),b=r("./src/reddit/selectors/gov.ts"),g=r("./src/reddit/actions/governance/constants.ts"),v=r("./src/reddit/actions/governance/errorToast.ts");r.d(t,"a",function(){return h}),r.d(t,"b",function(){return x}),r.d(t,"d",function(){return j}),r.d(t,"e",function(){return I}),r.d(t,"h",function(){return P}),r.d(t,"f",function(){return T}),r.d(t,"g",function(){return M}),r.d(t,"c",function(){return $});const h=Object(n.a)(g.b),x=Object(n.a)(g.c),y=Object(n.a)(g.d),j=Object(n.a)(g.e),I=(Object(n.a)(g.f),Object(n.a)(g.g),Object(n.a)(g.h)),O=Object(n.a)(g.i),C=Object(n.a)(g.j),w=Object(n.a)(g.k),S=Object(n.a)(g.q),P=Object(n.a)(g.r),k=Object(n.a)(g.s),N=Object(n.a)(g.t),_=(Object(n.a)(g.u),Object(n.a)(g.v),Object(n.a)(g.w)),T=(e,t)=>async(r,o,{apiContext:n})=>{const s=o().polls.models[e];r(C({pollId:e}));const i=await Object(u.b)(n(),s.subredditId,e,t);if(i.ok){r(w(i.body));const t=o(),n=t.polls.models[e];if(n&&Object(p.d)(n)){const e=n.postId,o=t.posts.models[e];o&&o.voteState===f.a.notVoted&&r(Object(d.J)(e))}}else r(O({pollId:e,error:i.error})),Object(v.a)(r,i.error)},M=(e,t)=>async(r,n,{apiContext:d})=>{r(k());const u=n().transfers.communityPoints.contentId||void 0,p=await function(e,t){return Object(l.a)(e,{data:{amount:t.amount,contentId:t.contentId,description:t.message,receiveUserName:t.recipient},endpoint:`${a.a.metaUrl}/wallets/me/${t.subredditId}/transfers`,method:"post"})}(d(),Object.assign({},e,{contentId:u}));if(p.ok){const d=n().user.language;r(N(Object.assign({},p.body,{subredditId:e.subredditId}))),r(Object(c.e)({kind:m.b.SuccessCommunity,text:Object(o.a)(d,"gov.transferSuccess",{amount:Object(s.a)(e.amount),recipient:e.recipient,tokenName:Object(b.i)(n(),{subredditId:e.subredditId})})})),t&&r(Object(i.f)())}else r(S({error:p.error})),Object(v.a)(r,p.error)},$=(e,t)=>async(r,n,{apiContext:s})=>{r(y());const i=await function(e,t,r){return Object(l.a)(e,{data:{optOut:t},method:"patch",endpoint:`${a.a.metaUrl}/wallets/${r}/me`})}(s(),e,t);if(i.ok){r(_({[t]:i.body}));const s=e?"polls.optOutSuccess":"polls.optInSuccess";r(Object(c.e)({kind:m.b.SuccessCommunity,text:Object(o.a)(n().user.language,s,{tokenName:Object(b.i)(n(),{subredditId:t})})}))}else Object(v.a)(r,i.error)}},"./src/reddit/components/Governance/Token/index.tsx":function(e,t,r){"use strict";r("./node_modules/react/index.js");var o,n=r("./node_modules/react-redux/es/index.js"),s=r("./node_modules/reselect/lib/index.js"),i=r("./src/config.ts"),d=r("./src/reddit/selectors/gov.ts"),c=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&s)for(var d in s)void 0===t[d]&&(t[d]=s[d]);else t||(t=s||{});if(1===i)t.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}});const a=Object(s.createStructuredSelector)({tokenSymbol:d.j});t.a=Object(n.connect)(a)(function(e){const t=e.grey?e.tokenSymbol.grey:e.tokenSymbol.filled;return c("img",{className:e.className,src:`${i.a.assetPath}/${t}`})})},"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx":function(e,t,r){"use strict";var o,n=r("./node_modules/react/index.js"),s=r.n(n),i=r("./node_modules/react-redux/es/index.js"),d=r("./node_modules/reselect/lib/index.js"),c=r("./src/app/actions/tooltip.ts"),a=r("./src/reddit/actions/governance/index.ts"),l=r("./src/reddit/featureFlags/index.ts"),u=r("./src/reddit/models/User/index.ts"),p=r("./src/reddit/selectors/gov.ts"),m=r("./src/reddit/selectors/meta.ts"),f=r("./src/reddit/selectors/moderatorPermissions.ts"),b=r("./src/reddit/selectors/tooltip.ts"),g=r("./src/reddit/selectors/user.ts"),v=r("./src/reddit/selectors/userFlair.ts"),h=r("./src/config.ts"),x=r("./node_modules/react-router-dom/es/index.js"),y=r("./bundled-modules/styled-components/styled-components.min.js"),j=r.n(y),I=r("./src/app/strings/index.ts"),O=r("./src/lib/prettyPrintNumber/index.ts"),C=r("./src/lib/timeAgo/index.ts"),w=r("./src/chat/helpers/urls/index.ts"),S=r("./src/reddit/components/Governance/Token/index.tsx"),P=r("./src/reddit/components/JSAPIContainers/index.tsx"),k=r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),N=r("./src/reddit/components/SubscribeButton/index.tsx"),_=r("./src/reddit/constants/colors.ts"),T=r("./src/reddit/constants/zIndex.ts"),M=r("./src/reddit/helpers/styles/components/index.tsx"),$=r("./src/reddit/helpers/styles/mixins/fonts.tsx"),L=r("./src/reddit/helpers/trackers/authorHovercard.ts"),F=r("./src/reddit/icons/svgs/Chat/index.tsx"),H=r("./src/reddit/icons/svgs/Karma/index.tsx"),U=r("./src/reddit/icons/svgs/Premium/index.tsx"),E=r("./src/reddit/models/Theme/NewColorSystem/index.ts"),A=r("./src/reddit/components/ProfileIdCard/GildedLastMonth.tsx"),B=r("./src/reddit/actions/inContextModeration.ts"),G=r("./src/reddit/actions/modal.ts"),Z=r("./src/reddit/actions/subredditModeration.ts"),z=r("./src/reddit/constants/modals.ts"),W=r("./src/reddit/components/Hovercards/helpers.ts"),K=r("./src/reddit/icons/svgs/Ban/index.tsx"),q=r("./src/reddit/icons/svgs/Mute/index.tsx"),D=r("./src/reddit/models/ModeratingSubreddits/index.ts"),J=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&s)for(var d in s)void 0===t[d]&&(t[d]=s[d]);else t||(t=s||{});if(1===i)t.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}});const V=j()(K.a).withConfig({componentId:"s12xyzmf-0"})(["",";"],W.c),Q=j()(q.a).withConfig({componentId:"s12xyzmf-1"})(["",";"],W.c),R=Object(d.createStructuredSelector)({hasModMailPermissions:Object(f.a)(D.b.mail)});var X=Object(i.connect)(R,(e,{username:t,subredditId:r,contextId:o})=>({toggleBanModal:()=>{e(Object(B.c)({username:t,subredditId:r,contextId:o})),e(Object(Z.X)(r))},toggleMuteModal:()=>{e(Object(B.d)({username:t,subredditId:r,contextId:o})),e(Object(G.i)(z.a.MUTE_USER))}}))(e=>J("div",{className:e.className},void 0,J(W.a,{role:"button",onClick:()=>{e.toggleBanModal(),e.sendEvent(L.a(e.contextId))}},void 0,J(V,{}),Object(I.a)(e.language,"user.tooltip.banUser")),e.hasModMailPermissions&&J(W.a,{role:"button",onClick:()=>{e.toggleMuteModal(),e.sendEvent(L.d(e.contextId))}},void 0,J(Q,{}),Object(I.a)(e.language,"user.tooltip.muteUser")))),Y=r("./src/reddit/actions/userFlair.ts"),ee=r("./src/reddit/icons/svgs/Tag/index.tsx"),te=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var d in s)void 0===r[d]&&(r[d]=s[d]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];r.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}();const re=j()(ee.a).withConfig({componentId:"s630e9v-0"})(["",";"],W.c);var oe=Object(i.connect)(null,(e,t)=>({onToggleUserFlairModal:()=>e(Object(Y.p)(t.subredditId,t.username))}))(e=>te(W.a,{role:"button",onClick:()=>{e.onToggleUserFlairModal(),e.sendEvent(L.c(e.contextId))}},void 0,te(re,{}),Object(I.a)(e.language,"user.tooltip.editUserFlair"))),ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},se=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var d in s)void 0===r[d]&&(r[d]=s[d]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];r.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}();const ie=j()(Object(M.a)()).withConfig({componentId:"s1jh6m6x-0"})(["background: url('","');background-size: contain;border-radius: 4px;margin-right: 8px;margin-top: 3px;height: 32px;width: 32px;"],e=>e.url),de=j()(N.a).withConfig({componentId:"s1jh6m6x-1"})(["margin-bottom: 8px;margin-top: 4px;"]),ce=j()(H.a).withConfig({componentId:"s1jh6m6x-2"})(["fill: ",";height: 20px;margin-top: 7px;width: 20px;"],e=>Object(E.c)(e).actionIcon),ae=j()(U.a).withConfig({componentId:"s1jh6m6x-3"})(["fill: ",";height: 16px;margin-bottom: 2px;vertical-align: middle;width: 16px;"],_.a.snoo),le=Object(y.css)(["display: flex;height: 16px;width: 16px;margin-right: 6px;"]),ue=j()(F.a).withConfig({componentId:"s1jh6m6x-4"})(["",""],le),pe=j()(S.a).withConfig({componentId:"s1jh6m6x-5"})(["",""],le),me=j()(x.a).withConfig({componentId:"s1jh6m6x-6"})(["","color: ",";display: inline-block;margin-right: 4px;"],$.titleFontH4,e=>Object(E.c)(e).bodyText),fe=j.a.div.withConfig({componentId:"s1jh6m6x-7"})(["","color: ",";"],$.metadataFont,e=>Object(E.c)(e).metaText),be=j.a.div.withConfig({componentId:"s1jh6m6x-8"})(["","color: ",";"],$.metadataFont,e=>Object(E.c)(e).bodyText),ge=j.a.div.withConfig({componentId:"s1jh6m6x-9"})(["display: inline-block;"]),ve=j.a.div.withConfig({componentId:"s1jh6m6x-10"})(["display: inline-block;margin: 0px 3px;"]),he=j.a.div.withConfig({componentId:"s1jh6m6x-11"})(["width: 100%;box-sizing: border-box;display: flex;"]),xe=j.a.div.withConfig({componentId:"s1jh6m6x-12"})(["display: flex;padding: 12px 0px 4px 0px;"]),ye=j.a.div.withConfig({componentId:"s1jh6m6x-13"})(["border-right: 1px solid ",";padding: 0px 12px 0px 6px;"],e=>Object(E.c)(e).line),je=j.a.div.withConfig({componentId:"s1jh6m6x-14"})(["padding-left: 12px;"]),Ie=j.a.div.withConfig({componentId:"s1jh6m6x-15"})(["","color: ",";padding-right: 12px;"],$.titleFontH4,e=>Object(E.c)(e).bodyText),Oe=j.a.div.withConfig({componentId:"s1jh6m6x-16"})(["","color: ",";"],$.titleFontH6,e=>Object(E.c)(e).bodyText),Ce=j()(Object(M.a)()).withConfig({componentId:"s1jh6m6x-17"})(["background-image: url(",");border-top-left-radius: 4px;border-top-right-radius: 4px;height: 4px;"],e=>e.image||`${h.a.assetPath}/img/user-info-banner.png`),we=j.a.div.withConfig({componentId:"s1jh6m6x-18"})(["padding: 12px 12px 0px 12px;"]),Se=j.a.div.withConfig({componentId:"s1jh6m6x-19"})(["height: 8px;"]),Pe=e=>se("div",{},void 0,se("div",{},void 0,se(me,{to:`${e.user.url}`},void 0,`u/${e.userName}`),e.user.isGold&&se(x.a,{to:"/premium"},void 0,se(ae,{}))),se(fe,{},void 0,e.user.username&&se(ge,{},void 0,e.user.username,se(ve,{},void 0,"•")),se(ge,{},void 0,Object(C.b)(e.language,e.user.created)))),ke=e=>se(xe,{},void 0,se(ce,{}),se(ye,{},void 0,se(Ie,{},void 0,Object(O.b)(e.user.postKarma)),se(Oe,{},void 0,Object(I.a)(e.language,"user.tooltip.postKarma"))),se(je,{},void 0,se(Ie,{},void 0,Object(O.b)(e.user.commentKarma)),se(Oe,{},void 0,Object(I.a)(e.language,"user.tooltip.commentKarma")))),Ne=Object(y.css)(["","display: flex;cursor: pointer;color: ",";fill: ",";padding: 6px 12px;&:hover {background-color: ",";color: ",";fill: ","}"],$.actionFont,e=>Object(E.c)(e).actionIcon,e=>Object(E.c)(e).actionIcon,e=>Object(E.c)(e).line,e=>Object(E.c)(e).bodyText,e=>Object(E.c)(e).bodyText),_e=j.a.a.withConfig({componentId:"s1jh6m6x-20"})(["",""],Ne),Te=j.a.div.withConfig({componentId:"s1jh6m6x-21"})(["background-color: ",";border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,0.2);position: absolute;width: ","px;z-index: ",";"],e=>Object(E.c)(e).body,240,T.t),Me=Object(k.a)(e=>{const t=e.className,r=e.contextId,o=e.hideNSFWPref,n=e.hoverId,s=e.isCurrentUser,i=e.isGov,d=e.origin,c=e.language,a=e.moderatorPermissions,l=e.sendEvent,u=e.style,p=e.subredditId,m=e.tokenName,f=e.userName,b=e.user,g=e.userFlair,v=e.userInChat,x=e.wallet;if(!b)return se(Te,{style:u});const y=b.isNSFW&&o,j=b.accountIcon||`${h.a.assetPath}/img/snoo_user_placeholder.png`,O=a&&a.flair,C=a&&a.access,S=g&&g.templateIds&&g.templateIds.length>0,k=g&&g.displaySettings&&g.displaySettings.isEnabled,N=b.gildedLastMonth;return se(Te,{className:t,id:n,style:u},void 0,se(Ce,{image:y?void 0:e.user.bannerImage}),se(we,{},void 0,se(he,{},void 0,se(ie,{url:y?`${h.a.assetPath}/img/avatar_over18_square.png`:j}),se(Pe,{language:c,origin:d,user:b,userName:f})),se(ke,{language:c,user:b,userName:f}),N&&se(be,{},void 0,se(A.a,{gildings:N,language:c,userName:f})),b.hasUserProfile&&!s&&se(de,{identifier:{name:e.user.username,type:"profile"},getEventFactory:e=>Object(L.f)(e?"unfollow":"follow",r),small:!0})),C&&r&&!s&&p&&se(X,{contextId:r,language:c,subredditId:p,sendEvent:l,username:f}),O&&r&&(S||k)&&p&&se(oe,{contextId:r,language:c,subredditId:p,sendEvent:l,username:f}),v&&se(_e,{href:Object(w.channelUserIdUrl)(b.id),target:"_blank",rel:"noopener noreferrer",onClick:()=>l(Object(L.b)(r))},void 0,se(ue,{}),Object(I.a)(c,"user.tooltip.inviteToChat")),i&&x&&se(_e,{onClick:()=>e.onOpenTransferModal(b.username)},void 0,p&&se(pe,{subredditId:p}),Object(I.a)(c,"gov.transferModalTitle",{tokenName:m})),se(P.i,{contextId:r,subredditId:p,user:b}),!(C||v)&&se(Se,{}))});var $e=e=>{const t=e.activeTooltipId===e.tooltipId;return s.a.createElement(Me,ne({isOpen:t},e))},Le=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,r,o,n){var s=t&&t.defaultProps,i=arguments.length-3;if(r||0===i||(r={}),r&&s)for(var d in s)void 0===r[d]&&(r[d]=s[d]);else r||(r=s||{});if(1===i)r.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];r.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:r,_owner:null}}}();const Fe=Object(d.createStructuredSelector)({tokenName:p.i,activeTooltipId:b.a,isCurrentUser:(e,t)=>{const r=Object(g.j)(e);return!!r&&Object(u.f)(r)===t.userName},isGov:l.d.spPoints,hideNSFWPref:g.x,language:g.M,moderatorPermissions:f.g,origin:m.f,user:g.bb,userFlair:v.b,userInChat:l.d.userInChat,wallet:p.d}),He=Object(i.connect)(Fe,(e,t)=>({onHideTooltip:()=>e(Object(c.f)()),onOpenTransferModal:r=>e(Object(a.h)({recipient:r,contentId:t.contextId}))}));t.a=He(e=>Le("div",{className:e.className,id:e.tooltipId,onMouseLeave:e.onHideTooltip},void 0,Le($e,{activeTooltipId:e.activeTooltipId,contextId:e.contextId,isCurrentUser:e.isCurrentUser,isGov:e.isGov,hideNSFWPref:e.hideNSFWPref,hoverId:e.hoverId,language:e.language,moderatorPermissions:e.moderatorPermissions,onHideTooltip:e.onHideTooltip,onOpenTransferModal:e.onOpenTransferModal,origin:e.origin,sendEvent:e.sendEvent,subredditId:e.subredditId,tokenName:e.tokenName,tooltipId:e.tooltipId,tooltipType:e.tooltipType,user:e.user,userFlair:e.userFlair,userInChat:e.userInChat,userName:e.userName,wallet:e.wallet})))},"./src/reddit/components/Hovercards/AuthorHovercard/index.tsx":function(e,t,r){"use strict";r.d(t,"a",function(){return m});var o,n=r("./node_modules/react/index.js"),s=r.n(n),i=r("./src/reddit/components/Hovercards/helpers.ts"),d=r("./src/reddit/components/Hovercards/HoverDiv/index.tsx"),c=r("./src/reddit/helpers/isPost.ts"),a=r("./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx"),l=r("./src/reddit/components/TrackingHelper/index.tsx"),u=r("./src/reddit/helpers/trackers/authorHovercard.ts"),p=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&s)for(var d in s)void 0===t[d]&&(t[d]=s[d]);else t||(t=s||{});if(1===i)t.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}});const m="UserInfoTooltip",f=e=>Object(c.a)(e.id)?e.belongsTo.id:e.subredditId;t.b=Object(l.b)(class extends s.a.Component{constructor(){super(...arguments),this.sendEvent=(()=>this.props.sendEvent(Object(u.e)(this.props.postOrComment.id)))}render(){const e=this.props,t=Object(i.b)({author:e.author,itemId:e.postOrComment.id,tooltipIdPrefix:m,tooltipType:e.tooltipType}),r=`${t}-hover-id`,o=e.author||e.postOrComment.author;return p(d.a,{authorOrSubredditName:o,hoverId:r,sendHoverEvent:this.sendEvent,tooltipId:t},void 0,e.children,p(a.a,{className:e.className,contextId:e.postOrComment.id,hoverId:r,sendEvent:e.sendEvent,subredditId:f(e.postOrComment),tooltipId:t,tooltipType:e.tooltipType,userName:o}))}})},"./src/reddit/endpoints/governance/poll.ts":function(e,t,r){"use strict";r.d(t,"b",function(){return a}),r.d(t,"a",function(){return l});var o=r("./node_modules/lodash/get.js"),n=r.n(o),s=r("./src/config.ts"),i=r("./src/lib/omitHeaders/index.ts"),d=r("./src/reddit/constants/headers.ts"),c=(r("./src/reddit/models/Poll/index.ts"),r("./src/reddit/endpoints/governance/requester.ts"));function a(e,t,r,o){return Object(c.a)(e,{method:"put",endpoint:`${s.a.metaUrl}/polls/${t}/${r}/votes/me/${o}`})}function l(e,t){return Object(c.a)(Object(i.a)(e,[d.a]),{method:"get",endpoint:`${e.apiUrl}/by_id/${t}.json`}).then(e=>e.ok?Object.assign({},e,{body:{title:n()(e.body,["data","children",0,"data","title"],""),url:n()(e.body,["data","children",0,"data","permalink"],"")}}):e)}},"./src/reddit/helpers/trackers/authorHovercard.ts":function(e,t,r){"use strict";r.d(t,"f",function(){return i}),r.d(t,"e",function(){return d}),r.d(t,"d",function(){return c}),r.d(t,"a",function(){return a}),r.d(t,"c",function(){return l}),r.d(t,"b",function(){return u});var o=r("./src/reddit/helpers/isComment.ts"),n=r("./src/reddit/selectors/telemetry.ts");const s=(e,t)=>({comment:t&&Object(o.a)(t)?n.comment(e,t):null,post:t?n.post(e,t):null,profile:n.profile(e),screen:n.screen(e)}),i=(e,t)=>r=>Object.assign({source:"user_hovercard",action:"click",noun:e},s(r,t)),d=e=>t=>Object.assign({source:"user_hovercard",action:"view",noun:"hover_user_hovercard"},s(t,e)),c=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"mute_dialog_in_context"},s(t,e)),a=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"ban_dialog_in_context"},s(t,e)),l=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"change_user_flair_in_context",userSubreddit:n.userSubreddit(t)},s(t,e)),u=e=>t=>Object.assign({source:"user_hovercard",action:"click",noun:"create_chat"},e&&s(t,e))},"./src/reddit/icons/svgs/Ban/index.tsx":function(e,t,r){"use strict";r("./node_modules/react/index.js");var o,n=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&s)for(var d in s)void 0===t[d]&&(t[d]=s[d]);else t||(t=s||{});if(1===i)t.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}});t.a=(e=>n("svg",{className:e.className,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},void 0,n("g",{},void 0,n("path",{d:"M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"}))))},"./src/reddit/icons/svgs/Mute/index.tsx":function(e,t,r){"use strict";r("./node_modules/react/index.js");var o,n=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&s)for(var d in s)void 0===t[d]&&(t[d]=s[d]);else t||(t=s||{});if(1===i)t.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}});t.a=(e=>n("svg",{className:e.className,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},void 0,n("g",{},void 0,n("path",{d:"M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",id:"path-1"}))))},"./src/reddit/icons/svgs/Tag/index.tsx":function(e,t,r){"use strict";r("./node_modules/react/index.js");var o,n=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,r,n){var s=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&s)for(var d in s)void 0===t[d]&&(t[d]=s[d]);else t||(t=s||{});if(1===i)t.children=n;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}});t.a=(e=>n("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},void 0,n("g",{},void 0,n("path",{fill:"inherit",d:"M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"}))))},"./src/reddit/models/Payments/index.ts":function(e,t,r){"use strict";var o,n,s;r.d(t,"c",function(){return o}),r.d(t,"b",function(){return n}),r.d(t,"a",function(){return s}),r.d(t,"d",function(){return i}),r.d(t,"e",function(){return d}),function(e){e.PayPal="paypal",e.Stripe="stripe"}(o||(o={})),function(e){e.NewPayPal="new-paypal",e.NewStripe="new-stripe",e.SavedPayPal="saved-paypal",e.SavedStripe="saved-stripe"}(n||(n={})),function(e){e.Comment="comment",e.Post="post",e.Profile="profile"}(s||(s={}));const i=()=>({cardCVCComplete:!1,cardExpiryComplete:!1,cardNumberComplete:!1,name:"",postalCodeComplete:!1,saveCard:!1,type:n.NewStripe}),d=e=>e.cardCVCComplete&&e.cardExpiryComplete&&e.cardNumberComplete&&!!e.name&&e.postalCodeComplete},"./src/reddit/selectors/economics.ts":function(e,t,r){"use strict";r.d(t,"b",function(){return i}),r.d(t,"c",function(){return d}),r.d(t,"d",function(){return c}),r.d(t,"a",function(){return a}),r.d(t,"e",function(){return l}),r.d(t,"f",function(){return u}),r.d(t,"g",function(){return p}),r.d(t,"i",function(){return m}),r.d(t,"h",function(){return f});var o=r("./src/reddit/models/Payments/index.ts"),n=r("./src/reddit/reducers/economics/paymentSystems/index.ts"),s=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&(r[o[n]]=e[o[n]])}return r};const i=(e,t)=>{const r=p(e,t);return!!r&&!!r.creator},d=(e,t)=>{const r=e.economics.tipDetails[t.subredditId];if(r){const e=r[t.contentId];if(e&&e.amounts&&e.amounts.usdr&&e.amounts.usdr.amount)return e.amounts.usdr.amount}return"0"},c=e=>{const t=[],r=e.economics.paymentSystems;if(r.status===n.a.Fetched&&r.data.stripe&&r.data.stripe.sources){const e=r.data.stripe.sources;for(const r in e){const n=e[r];t.push({display:`${n.brand} •••• ${n.last4}`,id:r,type:o.b.SavedStripe})}}return t};var a;!function(e){e[e.Fetched=0]="Fetched",e[e.Fetching=1]="Fetching",e[e.NotFetched=2]="NotFetched"}(a||(a={}));const l=e=>e.economics.paymentSystems.status===n.a.NotFetched?a.NotFetched:e.economics.paymentSystems.status===n.a.Pending?a.Fetching:a.Fetched,u=(e,t)=>{const r=e.economics.tipDetails[t.subredditId];if(r){const e=r[t.contentId];if(e&&e.amounts&&e.amounts.usdr&&e.amounts.usdr.users){const t=e.amounts.usdr.users,r=t.anonymous,o=s(t,["anonymous"]),n=Object.keys(o),i=n.map(e=>Object.assign({id:e},o[e])).sort((e,t)=>parseInt(t.amount)-parseInt(e.amount)),d=r?parseInt(r.amount):0,c=r?r.numUsers:0,a=i.slice(5),l=i.slice(0,5);return{allTippers:new Set(n),topTippers:{list:l,others:{amount:String(a.reduce((e,t)=>e+parseInt(t.amount),d)),count:a.length+c},ranking:l.reduce((e,t,r)=>(e[t.id]=r+1,e),{})}}}}},p=(e,t)=>{const r=e.economics.tipDetails[t.subredditId];if(r){const e=r[t.contentId];if(e&&e.amounts&&e.amounts.usdr&&e.amounts.usdr.tipsProportions)return e.amounts.usdr.tipsProportions}},m=e=>{const t=e.economics.paymentSystems;return!!(t.status===n.a.Fetched&&t.data&&t.data.tips&&t.data.tips.usdr&&t.data.tips.usdr.allowed)},f=e=>{const t=e.economics.paymentSystems;return t.status===n.a.Fetched&&!!t.data&&!!t.data.stripe&&!!t.data.stripe.stripeAccountId}},"./src/reddit/selectors/gov.ts":function(e,t,r){"use strict";r.d(t,"a",function(){return d}),r.d(t,"b",function(){return c}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return l}),r.d(t,"e",function(){return u}),r.d(t,"f",function(){return p}),r.d(t,"i",function(){return m}),r.d(t,"j",function(){return f}),r.d(t,"g",function(){return b}),r.d(t,"h",function(){return g});var o=r("./src/reddit/contexts/PageLayer/index.tsx");const n=[],s={},i={filled:"img/communityPoints/default_filled.png",grey:"img/communityPoints/default_grey.png"},d=(e,t)=>{const r=b(e,t);if(r)return r.mainHeader},c=(e,t)=>{const r=b(e,t);return r&&r.mainHeader?r.mainHeader.price:"0"},a=(e,t)=>{const r=b(e,t);return r&&r.mainHeader?{owner:r.mainHeader.owner,ownerId:r.mainHeader.ownerId}:s},l=(e,t)=>t&&t.subredditId?(e.user.wallets[t.subredditId]||{}).latest:void 0,u=(e,t)=>{return(e.users.publicWallets[t.userId]||{})[t.subredditId]},p=(e,t)=>{const r=Object(o.p)(e,t);return r&&e.subreddits.gov.releaseNotes[r]||n},m=(e,t)=>t&&t.subredditId&&(e.subreddits.gov.meta[t.subredditId]||{}).name||"Subreddit Points",f=(e,t)=>t&&t.subredditId&&(e.subreddits.gov.meta[t.subredditId]||{}).images||i,b=(e,t)=>t.subredditId?e.subreddits.gov.assets[t.subredditId]:void 0,g=(e,t)=>t.subredditId?e.subreddits.gov.meta[t.subredditId]:void 0}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Frontpage~ModListing~ModQueuePages~ModerationPages~Multireddit~N~cb337d3c.6fa713dbaab3dcdd8ad6.js.map

}
/*
     FILE ARCHIVED ON 00:48:51 Apr 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:50:09 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.078
  cdx.remote: 0.094
  esindex: 0.012
  LoadShardBlock: 280.226 (6)
  PetaboxLoader3.datanode: 165.623 (8)
  load_resource: 135.971 (2)
  PetaboxLoader3.resolve: 82.649 (2)
*/