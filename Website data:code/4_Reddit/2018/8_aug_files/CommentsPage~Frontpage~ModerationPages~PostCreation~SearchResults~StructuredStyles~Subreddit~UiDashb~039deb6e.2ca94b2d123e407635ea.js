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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CommentsPage~Frontpage~ModerationPages~PostCreation~SearchResults~StructuredStyles~Subreddit~UiDashb~039deb6e"],{"./src/reddit/components/CreatePostButton/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),i=n.n(r),o=n("./node_modules/react-redux/es/index.js"),s=n("./src/app/strings/index.ts"),d=n("./src/reddit/actions/modal.ts"),c=n("./src/reddit/components/AccountManagerModal/index.tsx"),a=n("./src/reddit/constants/page.ts"),l=n("./src/reddit/controls/Button/index.tsx"),u=n("./src/reddit/helpers/getSubredditUrl/index.ts"),g=n("./src/reddit/selectors/telemetry.ts"),p=n("./src/reddit/selectors/user.ts"),b=n("./node_modules/reselect/lib/index.js"),f=n("./src/reddit/components/TrackingHelper/index.tsx"),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},v=Object(b.createStructuredSelector)({isLoggedIn:p.s,language:p.w}),h=Object(o.connect)(v,function(e){return{openLoginModal:function(){return e(Object(d.e)(c.a))}}});t.a=h(Object(f.b)(function(e){var t=e.isLoggedIn,n=e.language,r=e.listingName,o=e.openLoginModal,d=e.sendEvent,c=e.subreddit,p=x(e,["isLoggedIn","language","listingName","openLoginModal","sendEvent","subreddit"]);return i.a.createElement(l.d,m({},p,{onClick:function(e){d(function(e){return{action:"click",noun:"create_post",source:"id_card",screen:Object(g.screen)(e),subreddit:Object(g.subreddit)(e),actionInfo:Object(g.actionInfo)(e)}}),t||(o(),e.preventDefault())},to:(Object(u.a)(c)||function(e){return e===a.f?"/original/":""}(r)||"/")+"submit"}),Object(s.a)(n,"postCreation.createPost"))}))},"./src/reddit/components/IdCard/index.tsx":function(e,t,n){"use strict";var r,i=n("./node_modules/react/index.js"),o=n.n(i),s=n("./node_modules/react-redux/es/index.js"),d=n("./node_modules/react-router-dom/es/index.js"),c=n("./node_modules/react-router-redux/es/index.js"),a=n("./node_modules/reselect/lib/index.js"),l=n("./bundled-modules/styled-components/styled-components.min.js"),u=n.n(l),g=n("./src/app/strings/index.ts"),p=n("./src/lib/isFakeSubreddit/index.ts"),b=n("./src/lib/prettyPrintNumber/index.ts"),f=n("./src/app/actions/tooltip.ts"),m=n("./src/reddit/components/TrackingHelper/index.tsx"),x=n("./src/reddit/controls/Button/index.tsx"),v=n("./src/reddit/helpers/styles/mixins/index.tsx"),h=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),y=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),w=u()(x.f).withConfig({componentId:"s1ambw8i-0"})(["","","margin-top: 10px;"],h.largeButtonFont,v.e),O=Object(m.b)(function(e){var t=e.language;return y(w,{href:"https://web.archive.org/web/20180801004715/https://www.reddit.com/subreddits/create",target:"_blank"},void 0,Object(g.a)(t,"postCreation.createCommunity"))}),j=n("./src/reddit/components/CreatePostButton/index.tsx"),C=n("./src/reddit/components/InfoTextTooltip/index.tsx"),S=n("./src/reddit/components/Media/LoadingIcon/index.tsx"),k=n("./src/reddit/actions/authorFlair.ts"),I=n("./src/reddit/components/Flair/index.tsx"),T=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),P=n("./src/reddit/models/User/index.ts"),B=n("./src/reddit/selectors/user.ts"),N=n("./src/reddit/selectors/userFlair.ts"),F=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,i){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});if(1===s)n.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),_=u.a.div.withConfig({componentId:"uws27z-0"})(["border-top: 1px solid ",";margin-top: 12px;padding-top: 12px;"],function(e){return Object(T.c)(e).widgetColors.lineColor}),E=u.a.div.withConfig({componentId:"uws27z-1"})(["","background-color: ",";border-radius: 4px;display: flex;margin: 8px 0;padding: 8px;"],h.metadataFont,function(e){return Object(T.c)(e).body}),L=u.a.div.withConfig({componentId:"uws27z-2"})(["",""],h.labelsFont),U=u()(I.c).withConfig({componentId:"uws27z-3"})(["margin-left: 8px;"]),M=u()(x.h).withConfig({componentId:"uws27z-4"})(["display: flex;margin-left: auto;"]),A=u.a.span.withConfig({componentId:"uws27z-5"})(["color: ",";flex: 0 0 auto;line-height: 16px;"],function(e){return Object(T.c)(e).bodyText}),D=Object(a.createStructuredSelector)({currentUser:B.f,language:B.w,userFlairData:N.b}),$=Object(s.connect)(D,function(e,t){var n=t.subredditId;return{onToggleModal:function(t){return e(Object(k.b)({username:t,subredditId:n}))}}})(function(e){var t=e.language,n=e.userFlairData,r=void 0;return e.currentUser&&(r=Object(P.d)(e.currentUser)),e.currentUser&&n?F(_,{},void 0,F(L,{},void 0,Object(g.a)(t,"flair.preview")),F(E,{},void 0,F(A,{},void 0,"u/"+e.currentUser.displayText),n.applied&&n.displaySettings.isUserEnabled&&F(U,{flair:n.applied})),n.displaySettings.isEnabled&&F(M,{onClick:function(){return e.onToggleModal(r)}},void 0,n.applied?Object(g.a)(t,"flair.editUserFlair"):Object(g.a)(t,"flair.addUserFlair"))):null}),z=n("./src/higherOrderComponents/makeAsync.tsx"),V=n("./src/lib/loadWithRetries/index.ts"),H=n("./src/reddit/helpers/styles/components/index.tsx"),W=n("./src/reddit/helpers/styles/mixins/loading.ts"),J=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,i){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});if(1===s)n.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),R=u()(Object(H.a)()).withConfig({componentId:"zcx4sa-0"})(["","","height: 26px;margin-left: auto;width: 38px;"],W.a,W.b),Z=Object(z.a)({ErrorComponent:function(e){var t=e.className;return J(R,{className:t,gradientType:"posts",isLoading:!1})},getComponent:function(){return Object(V.a)(function(){return n.e("ModerationDropdowns").then(n.bind(null,"./src/reddit/components/SubredditModerationDropdown/_SubredditModerationDropdown.tsx")).then(function(e){return e.default})})},LoadingComponent:function(e){var t=e.className;return J(R,{className:t,gradientType:"posts",isLoading:!0})}}),q=function(e){return o.a.createElement(Z,e)},G=n("./src/reddit/components/SubscribeButton/index.tsx"),K=n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),Q=n("./src/reddit/constants/listings.ts"),X=n("./src/reddit/constants/page.ts"),Y=n("./src/reddit/helpers/trackers/lightbox.ts"),ee=n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),te=n("./node_modules/polished/dist/polished.es.js"),ne=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,i){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});if(1===s)n.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),re=u()(function(e){return ne("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},void 0,ne("path",{d:"M17.71,10.29,14.95,7.54a7,7,0,0,0-9.9,0L2.29,10.29a1,1,0,0,0,1.41,1.41L6.46,8.95c.07-.07.14-.11.21-.17a4,4,0,1,0,6.65,0c.07.06.15.11.21.17l2.76,2.76a1,1,0,0,0,1.41-1.41Z"}))}).withConfig({componentId:"hauj45-0"})(["fill: ",";"],function(e){return Object(te.f)(.6,Object(T.c)(e).active)}),ie=n("./src/reddit/models/Subreddit/index.ts"),oe=n("./src/reddit/models/Theme/index.ts"),se=n("./src/reddit/selectors/moderatorPermissions.ts"),de=n("./src/reddit/selectors/structuredStyles.ts"),ce=n("./src/reddit/selectors/subreddit.ts"),ae=n("./src/reddit/selectors/widgets.ts"),le=n("./src/config.ts"),ue=function(e){return e&&e.toLowerCase()===Q.b.Popular},ge=function(e){return e&&e.toLowerCase()===Q.b.All},pe=function(e){return e&&e===X.b},be=function(e){return e&&e===X.f},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:40;return{height:arguments.length>2&&void 0!==arguments[2]?arguments[2]:68,image:e,width:t}};n.d(t,"c",function(){return ve}),n.d(t,"a",function(){return Ee});var me=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xe=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,i){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});if(1===s)n.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),ve=function(e){return!Object(p.a)(e)||ge(e)||pe(e)||ue(e)||be(e)},he=u()(Object(H.a)()).withConfig({componentId:"s1rdie1g-0"})(["background: ",";border-radius: 4px 4px 0 0;height: 34px;margin: -12px -12px 10px;"],function(e){return Object(oe.g)(Object(T.c)(e).active,e.bannerBackgroundImage||Object(T.c)(e).banner.backgroundImage,"cover")}),ye=u.a.div.withConfig({componentId:"s1rdie1g-1"})(["align-items: center;display: flex;& > * {display: inline-block;vertical-align: middle;}"]),we=u()(ye).withConfig({componentId:"s1rdie1g-2"})(["margin-top: -23px;"]),Oe=u()(Object(H.a)()).withConfig({componentId:"s1rdie1g-3"})(["background: ",";background-size: ","px ","px;display: inline-block;flex-shrink: 0;height: ","px;position: relative;width: ","px;"],function(e){return e.snooBackground.image},function(e){return e.snooBackground.width},function(e){return e.snooBackground.height},function(e){return e.snooBackground.height},function(e){return e.snooBackground.width}),je=Object(l.css)(["background: ",";border: 2px solid ",";border-radius: 24px;box-sizing: border-box;flex: none;height: 32px;margin-right: 8px;width: 32px;"],function(e){return Object(T.c)(e).active},function(e){return Object(T.c)(e).line}),Ce=u()(Object(H.a)()).withConfig({componentId:"s1rdie1g-4"})(["",";background-image: url('","');","background-position: center;background-repeat: no-repeat;background-size: 100%;"],je,function(e){return e.url},function(e){return e.color?"background-color: "+e.color+";":""}),Se=u()(ee.a).withConfig({componentId:"s1rdie1g-5"})(["",";border: 2px solid ",";fill: ",";padding: 5px;"],je,function(e){return Object(T.c)(e).lightText},function(e){return Object(T.c)(e).lightText}),ke=u()(d.a).withConfig({componentId:"s1rdie1g-6"})(["flex: 1 1 auto;overflow: hidden;text-overflow: ellipsis;&:hover {text-decoration: underline;}"]),Ie=u.a.span.withConfig({componentId:"s1rdie1g-7"})(["","display: inline-block;"],h.titleFontH4),Te=u.a.div.withConfig({componentId:"s1rdie1g-8"})(["margin-left: 10px;margin-top: ","px;"],function(e){return e.hasSecondaryTitle?35:30}),Pe=u()(Ie).withConfig({componentId:"s1rdie1g-9"})(["color: ",";",""],function(e){return Object(T.c)(e).actionIcon},h.metadataFont),Be=u.a.div.withConfig({componentId:"s1rdie1g-10"})(["display: flex;margin: 8px 0;& > * {flex: 1;}"]),Ne=u.a.div.withConfig({componentId:"s1rdie1g-11"})(["border-left: 1px solid ",";padding-left: 12px;"],function(e){return Object(T.c)(e).widgetColors.lineColor}),Fe=u.a.p.withConfig({componentId:"s1rdie1g-12"})(["",""],h.titleFontH4),_e=u.a.p.withConfig({componentId:"s1rdie1g-13"})(["","display: inline-block;word-break: break-word;"],h.titleFontH6),Ee=u.a.p.withConfig({componentId:"s1rdie1g-14"})(["","margin-top: 8px;word-wrap: break-word;"],h.bodyFont),Le=u.a.div.withConfig({componentId:"s1rdie1g-15"})(["margin-top: 12px;"]),Ue="\n  display: block;\n  width: 100%;\n",Me=u()(G.b).withConfig({componentId:"s1rdie1g-16"})(["",";margin-bottom: 8px;"],Ue),Ae=u()(j.a).withConfig({componentId:"s1rdie1g-17"})(["",";","padding: 0 16px;"],Ue,h.largeButtonFont),De=u()(O).withConfig({componentId:"s1rdie1g-18"})(["",";","margin-top: 11px;"],v.e,h.largeButtonFont),$e=u.a.div.withConfig({componentId:"s1rdie1g-19"})(["","color: ",";text-transform: uppercase;"],h.bodyFontSmall,function(e){return Object(T.c)(e).metaText}),ze=u()(re).withConfig({componentId:"s1rdie1g-20"})(["display: inline-block;fill: ",";height: 20px;margin-right: 4px;vertical-align: bottom;"],function(e){return Object(T.c)(e).metaText}),Ve=Object(s.connect)(function(){return Object(a.createStructuredSelector)({idCardWidget:function(e,t){return Object(ae.c)(e,{subredditName:t.listingName})},isLoggedIn:B.s,language:B.w,moderatorPermissions:function(e,t){var n=Object(ce.m)(e,t.listingName);if(n)return Object(se.f)(e,{subredditId:n})},shouldShowCreateCommunity:B.D,subreddit:function(e,t){return Object(ce.k)(e,{subredditName:t.listingName})},subredditIcon:function(e,t){return Object(de.i)(e,{subredditName:t.listingName})}})},function(e,t){return{dispatchPush:function(t){return e(Object(c.b)(t))},toggleTooltip:function(t){return e(Object(f.e)({tooltipId:t}))}}},function(e,t,n){return Object.assign({},e,t,n,{onContainerClick:function(){return n.isOverlay&&t.dispatchPush(e.subreddit.url)}})}),He=function(e){var t=e.titleText,n=e.titleSecondaryText,r=e.snooBackground;return xe(we,{},void 0,xe(Oe,{snooBackground:r}),xe(Te,{hasSecondaryTitle:!!n},void 0,xe(Ie,{},void 0,t),n&&xe(Pe,{},void 0,n)))},We=function(e){var t=e.isTargetBlank,n=e.linkUrl,r=e.subredditIcon,i=e.titleText;return xe(ye,{},void 0,r.url?xe(Ce,{url:r.url},r.url):xe(Se,{},"planet"),n?o.a.createElement(ke,me({key:n,to:n,onClick:function(e){return e.stopPropagation()}},t?{target:"_blank"}:{}),xe(Ie,{title:i},void 0,i)):xe(Ie,{},i,i))},Je=function(e,t,n,r,i,o,s,d){return xe(Be,{},void 0,xe("div",{onMouseEnter:function(){return d(r)},onMouseLeave:function(){return d(r)}},void 0,xe(Fe,{},void 0,Object(b.a)(t)),xe(_e,{id:r},void 0,n),xe(C.b,{caretOnTop:!0,text:Object(b.a)(t,!0)+" "+n,tooltipId:r})),xe(Ne,{onMouseEnter:function(){return d(s)},onMouseLeave:function(){return d(s)}},void 0,xe(Fe,{},void 0,Object(b.a)(i)),xe(_e,{id:s},void 0,o),xe(C.b,{caretOnTop:!0,text:Object(b.a)(i,!0)+" "+o,tooltipId:s})))},Re=function(e){return xe(Ee,{},void 0,e)},Ze=function(e){var t=e.isFake,n=e.isOverlay,r=e.isSubmissionPage,i=e.language,o=e.listingName,s=e.subreddit,d=e.shouldShowCreateCommunity;return xe(Le,{},void 0,!t&&xe(Me,{getEventFactory:function(e){return Object(Y.a)(e?"unsubscribe":"subscribe")},identifier:{name:s.name,type:"subreddit"},onClick:function(e){return e.stopPropagation()}}),!r&&!n&&xe(Ae,{listingName:o,subreddit:s}),!r&&!n&&!s&&o!==X.f&&d&&xe(De,{language:i}))};t.b=Ve(Object(l.withTheme)(function(e){var t=e.className,n=e.language,r=e.listingName,i=e.idCardWidget,o=e.isLoggedIn,s=e.isOverlay,d=e.isSubmissionPage,c=e.moderatorPermissions,a=e.onContainerClick,l=e.shouldShowCreateCommunity,u=e.subreddit,b=e.subredditIcon,f=e.toggleTooltip,m=r;o||r!==X.b||(m=Q.b.Popular);var x=Object(p.a)(m);if(!x&&!i)return xe("div",{style:{height:100,position:"relative"}},void 0,xe(S.a,{}));var v=function(e){var t=e.language,n=e.listingName,r=e.subreddit,i=e.idCardWidget,o=void 0,s=void 0,d=void 0,c=void 0,a=void 0,l=void 0,u=i&&i.subscribersText||Object(g.a)(t,"structuredStyles.widgets.id-card.subscribersText"),p=i&&i.currentlyViewingText||Object(g.a)(t,"structuredStyles.widgets.id-card.currentlyViewingText"),b=void 0,f=void 0;if(pe(n)){o=le.a.assetPath+"/img/id-cards/home-banner@2x.png",s=Object(g.a)(t,"listings.home.longDescription"),d=fe("url('"+le.a.assetPath+"/img/id-cards/snoo-home@2x.png')");var m=Object(g.a)(t,"listings.home.title");c=m.charAt(0).toUpperCase()+m.slice(1),l=Q.c[Q.b.Home]}else if(ge(n))o=le.a.assetPath+"/img/id-cards/banner@2x.png",s=Object(g.a)(t,"listings.all.longDescription"),d=fe("url('"+le.a.assetPath+"/img/id-cards/snoo-all@2x.png')"),c="r/all",l=Q.c[Q.b.All];else if(be(n)){o=le.a.assetPath+"/img/id-cards/oc-banner@2x.png",s=Object(g.a)(t,"listings.originalContent.longDescription"),d=fe("url('"+le.a.assetPath+"/img/id-cards/snoo-oc@2x.png')",68);var x=Object(g.a)(t,"listings.originalContent.title");c=x.charAt(0).toUpperCase()+x.slice(1),a=Object(g.a)(t,"listings.originalContent.titleSecondary"),l=Q.c[Q.b.Original]}else ue(n)?(o=le.a.assetPath+"/img/id-cards/banner@2x.png",s=Object(g.a)(t,"listings.popular.longDescription"),d=fe("url('"+le.a.assetPath+"/img/id-cards/snoo-popular@2x.png')"),c="r/popular",l=Q.c[Q.b.Popular]):n&&(s=i&&i.description,d=fe(""),c=r.displayText,l=r.url,f=i&&i.subscribersCount,b=i&&i.currentlyViewingCount);return Object.assign({snooBackground:d,description:s,titleText:c,titleSecondaryText:a,url:l,subscribersCount:f,subscribersText:u,currentlyViewingText:p,currentlyViewingCount:b},o?{bannerBackgroundImage:o}:{})}({language:n,listingName:m,subreddit:u,idCardWidget:i}),h=v.bannerBackgroundImage,y=v.currentlyViewingCount,w=v.currentlyViewingText,O=v.description,j=v.snooBackground,C=v.subscribersCount,k=v.subscribersText,I=v.titleText,T=v.titleSecondaryText,P=v.url,B=x||s||d,N=!x&&u.id?u.id:"",F="IdCard--Subscribers--"+s+"--"+N,_="IdCard--CurrentlyViewing--"+s+"--"+N;return xe(K.a,{className:t,onClick:s?a:void 0,headerButton:!B&&u&&c?xe(q,{source:"id_card",subredditId:N,subredditName:u.name}):void 0,redditStyle:x||d,title:B?void 0:Object(g.a)(n,"sidebar.subreddit.title")},void 0,B&&xe(he,{bannerBackgroundImage:h}),x?He({titleText:I,titleSecondaryText:T,snooBackground:j}):xe(We,{isTargetBlank:d,linkUrl:x?void 0:P,subredditIcon:b,titleText:I}),!x&&Je(n,C,k,F,y,w,_,f),!x&&u.type===ie.a.EmployeesOnly&&xe($e,{},void 0,xe(ze,{}),u.allowContractors?Object(g.a)(n,"sidebar.subreddit.employeesAndContractors"):Object(g.a)(n,"sidebar.subreddit.employeesOnly")),Re(O),Ze({isFake:x,isOverlay:s,isSubmissionPage:d,language:n,listingName:m,subreddit:u,shouldShowCreateCommunity:l}),!x&&!s&&xe($,{subredditId:u.id}))}))},"./src/reddit/components/SubscribeButton/index.tsx":function(e,t,n){"use strict";var r=n("./node_modules/react/index.js"),i=n.n(r),o=n("./bundled-modules/styled-components/styled-components.min.js"),s=n.n(o),d=n("./src/app/strings/index.ts"),c=n("./src/reddit/components/TrackingHelper/index.tsx"),a=n("./node_modules/react-redux/es/index.js"),l=n("./node_modules/reselect/lib/index.js"),u=n("./src/reddit/actions/subscription.ts"),g=n("./src/reddit/selectors/subreddit.ts"),p=n("./src/reddit/selectors/user.ts"),b=Object(a.connect)(function(){return Object(l.createStructuredSelector)({language:p.w,userIsSubscriber:g.y})},function(e,t){var n=t.identifier;return{onSubscribe:function(){return e(u.g(n,!0))},onUnsubscribe:function(){return e(u.g(n,!1))}}}),f=Object(l.createStructuredSelector)({language:p.w}),m=Object(a.connect)(f,function(e,t){var n=t.widget.id||void 0;return{onSubscribe:function(){return e(u.g(t.identifier,!0,n))},onUnsubscribe:function(){return e(u.g(t.identifier,!1,n))}}}),x=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),v=n("./src/reddit/controls/Button/index.tsx");n.d(t,"a",function(){return T});var h,y=(h="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===o)t.children=r;else if(o>1){for(var d=Array(o),c=0;c<o;c++)d[c]=arguments[c+3];t.children=d}return{$$typeof:h,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n},O=function(e){return"subreddit"===e.type?"subredditActions":"profileActions"},j="\n  "+x.smallButtonFont+"\n  padding: 4px 9px 2px;\n  width: 100%;\n",C="\n  "+x.largeButtonFont+"\n  padding: 0 16px;\n",S=s()(function(e){var t=e.border,n=(e.small,w(e,["border","small"]));return t?i.a.createElement(v.b,n):i.a.createElement(v.h,n)}).withConfig({componentId:"s55dm8x-0"})(["",""],function(e){return e.small?j:C}),k=s()(function(e){var t=e.border,n=(e.language,e.small,e.type,w(e,["border","language","small","type"]));return t?i.a.createElement(v.e,n):i.a.createElement(v.h,n)}).withConfig({componentId:"s55dm8x-1"})(["","&::after {content: '","';}&:hover {&::after {content: '","';}}"],function(e){return e.small?j:C},function(e){return Object(d.a)(e.language,"subscriptions."+O(e)+".subscribed")},function(e){return Object(d.a)(e.language,"subscriptions."+O(e)+".unsubscribe")}),I=function(e){var t=e.border,n=void 0===t||t,r=e.className,i=e.language,o=e.sendEvent,s=e.small,c=void 0!==s&&s,a=function(t){if(e.userIsSubscriber?e.onUnsubscribe():e.onSubscribe(),e.onClick&&e.onClick(t),e.getEventFactory){var n=e.getEventFactory(e.userIsSubscriber);n&&o(n)}};return e.userIsSubscriber?y(k,{border:n,className:r,language:i,onClick:a,small:c,type:e.identifier.type}):y(S,{border:n,className:r,onClick:a,small:c},void 0,Object(d.a)(i,"subscriptions."+O(e.identifier)+".subscribe"))},T=m(I);t.b=b(Object(c.b)(I))}}]);
//# sourceMappingURL=CommentsPage~Frontpage~ModerationPages~PostCreation~SearchResults~StructuredStyles~Subreddit~UiDashb~039deb6e.2ca94b2d123e407635ea.js.map

}
/*
     FILE ARCHIVED ON 00:47:15 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:35:49 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.056
  cdx.remote: 0.088
  esindex: 0.008
  LoadShardBlock: 177.587 (6)
  PetaboxLoader3.datanode: 178.367 (8)
  load_resource: 204.786 (2)
  PetaboxLoader3.resolve: 132.386 (2)
*/