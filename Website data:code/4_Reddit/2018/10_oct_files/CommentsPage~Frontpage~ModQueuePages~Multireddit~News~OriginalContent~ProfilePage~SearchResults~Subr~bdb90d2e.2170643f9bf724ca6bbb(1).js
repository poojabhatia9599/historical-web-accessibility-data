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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CommentsPage~Frontpage~ModQueuePages~Multireddit~News~OriginalContent~ProfilePage~SearchResults~Subr~bdb90d2e"],{"./node_modules/lodash/times.js":function(e,n,o){var t=o("./node_modules/lodash/_baseTimes.js"),r=o("./node_modules/lodash/_castFunction.js"),i=o("./node_modules/lodash/toInteger.js"),s=9007199254740991,a=4294967295,d=Math.min;e.exports=function(e,n){if((e=i(e))<1||e>s)return[];var o=a,c=d(e,a);n=r(n),e-=a;for(var l=t(c,n);++o<e;)n(o);return l}},"./src/app/helpers/describeApiError/index.ts":function(e,n,o){"use strict";o.d(n,"a",function(){return i});var t=o("./src/app/strings/index.ts"),r=o("./src/lib/constants/index.ts");function i(e){var n=e.apiError,o=e.isLoggedOut,i=e.language;switch(n.type){case r.C.AUTHORIZATION_ERROR:return o?Object(t.a)(i,"error.type.notLoggedIn"):Object(t.a)(i,"error.type.notAuthorized");case r.C.VALIDATION_ERROR:return Object(t.a)(i,"error.type.validation");case r.C.NOT_FOUND_ERROR:return Object(t.a)(i,"error.type.notFound");case r.C.SERVER_ERROR:return Object(t.a)(i,"error.type.server");case r.C.LIKELY_UBLOCK_ERROR:return Object(t.a)(i,"error.type.blocked");default:return Object(t.a)(i,"error.type.generic")}}},"./src/lib/colors/constants.ts":function(e,n,o){"use strict";o.d(n,"c",function(){return t}),o.d(n,"b",function(){return r}),o.d(n,"n",function(){return i}),o.d(n,"l",function(){return s}),o.d(n,"g",function(){return a}),o.d(n,"k",function(){return d}),o.d(n,"m",function(){return c}),o.d(n,"a",function(){return l}),o.d(n,"d",function(){return p}),o.d(n,"e",function(){return u}),o.d(n,"f",function(){return m}),o.d(n,"h",function(){return g}),o.d(n,"i",function(){return b}),o.d(n,"j",function(){return h});var t="#24A0ED",r="#000",i="#FFF",s="#FF4500",a="#CCCCCA",d="#A5A4A4",c="#222",l="#EA0027",p="#5F99CF",u="#0079d3",m="#F7FBFD",g="#545452",b="#222",h="#C6C6C6"},"./src/lib/loginHref/index.ts":function(e,n,o){"use strict";var t=o("./src/config.ts"),r=o("./node_modules/history/index.js");n.a=function(e,n,o){var i=Object(r.createPath)(e),s=encodeURIComponent(""+n+i);return""+t.a.accountManagerOrigin+(o||"/login")+"?dest="+s}},"./src/reddit/components/ClassicPost/Thumbnail.tsx":function(e,n,o){"use strict";o.d(n,"a",function(){return u});var t=o("./node_modules/babel-runtime/helpers/jsx.js"),r=o.n(t),i=(o("./node_modules/react/index.js"),o("./bundled-modules/styled-components/styled-components.min.js")),s=o("./src/lib/classNames/index.ts"),a=o("./src/reddit/components/Thumbnail/index.tsx"),d=o("./src/reddit/constants/posts.ts"),c=o("./src/reddit/helpers/styles/mixins/index.tsx"),l=o("./src/reddit/components/ClassicPost/index.m.less"),p=o.n(l),u=Object(i.css)(["","."," {","","}"],a.c,p.a.thumbnailContainer,Object(c.x)(d.c,d.d),c.c);n.b=function(e){var n=e.className,o=e.crosspost,t=e.forceShowNSFW,i=e.isMeta,d=e.post,c=e.templatePlaceholderImage,l=e.url;return r()("div",{className:Object(s.a)(p.a.thumbnailContainer,n)},void 0,r()(a.d,{className:p.a.thumbnail,crosspost:o,forceShowNSFW:t,isMeta:i,post:d,templatePlaceholderImage:c,url:l}))}},"./src/reddit/components/ClassicPost/index.m.less":function(e,n,o){e.exports={classicThumbnail:"nL7Q54U2LLg9rkVdSxxLe",content:"_1Y6dfr4zLlrygH-FLmr8x-",crosspostMediaWrapper:"_1qc1-Anfrhr6APGcBKFk8M",expandoContainer:"_3r40yytzBnldjGGOrs2mCw",flatlist:"ssgs3QQidkqeycI33hlBa",flatlistContainer:"_36kpXQ-z7Hr61j8878uRkP",flatlistSeparator:"_1wDt70OnYnqsrm0XIsNn8v",leftExpando:"_35zWJjb5RJMIMkexZ2Prus",mainBody:"_2XDITKxlj4y3M99thqyCsO",rightExpando:"_2Ddj1d6vOe9NlJqkdothNe",spacer:"iRkLLvxarfGu_2c7HxhW0",titleWithPoll:"_2FcpdQwjwRwk7X_NiZub8x",thumbnail:"_2e9Lv1I3dOmICVO9fg3uTG",thumbnailContainer:"_38EcSQ9jzVrdtzkXO1cydX"}},"./src/reddit/components/MediumPost/index.tsx":function(e,n,o){"use strict";o.d(n,"a",function(){return G});var t=o("./node_modules/babel-runtime/helpers/jsx.js"),r=o.n(t),i=(o("./node_modules/react/index.js"),o("./node_modules/react-redux/es/index.js")),s=o("./node_modules/reselect/lib/index.js"),a=o("./bundled-modules/styled-components/styled-components.min.js"),d=o.n(a),c=o("./src/config.ts"),l=o("./src/app/actions/tooltip.ts"),p=o("./src/reddit/actions/post.ts"),u=o("./src/reddit/components/AdLinkWrapper/index.tsx"),m=o("./src/reddit/components/CallToActionButton/index.tsx"),g=o("./src/reddit/components/CompactPost/HorizontalVotes.tsx"),b=o("./src/reddit/components/Flatlist/index.tsx"),h=o("./src/reddit/components/LargePost/index.tsx"),x=o("./src/reddit/components/ModModeReports/index.tsx"),f=o("./src/reddit/components/ModModeReports/helpers.ts"),v=o("./src/reddit/components/PostBackgroundWrapper/index.tsx"),j=o("./src/reddit/components/PostContainer/index.tsx"),O=o("./src/reddit/components/PostTitle/index.tsx"),w=o("./src/reddit/components/PostTopLine/index.tsx"),y=o("./src/reddit/components/PostTopMeta/index.tsx"),P=o("./src/reddit/components/SubscribeButton/Inline.tsx"),C=o("./src/reddit/components/Thumbnail/index.tsx"),S=o("./src/reddit/constants/screenWidths.ts"),k=o("./src/reddit/contexts/InsideOverlay.tsx"),B=o("./src/reddit/contexts/PageLayer/index.tsx"),I=o("./src/reddit/controls/OutboundLink/styled.tsx"),M=o("./src/reddit/helpers/canRenderThumbnail.ts"),_=o("./src/reddit/helpers/hasModFlairPermissions/index.ts"),L=o("./src/reddit/helpers/hasModPostPermissions/index.ts"),F=o("./src/reddit/helpers/styles/components/index.tsx"),R=o("./src/reddit/helpers/styles/mixins/index.tsx"),T=o("./src/reddit/models/Vote/index.ts"),N=o("./src/reddit/selectors/moderatorPermissions.ts"),U=o("./src/reddit/selectors/monthsToMinutes.ts"),E=o("./src/reddit/selectors/posts.ts"),D=o("./src/reddit/selectors/user.ts"),V=o("./src/reddit/components/SourceLink/index.tsx"),H=o("./src/reddit/helpers/styles/mixins/responsive.ts"),A=d.a.article.withConfig({componentId:"s1w29gso-0"})(["display: flex;flex-direction: row;padding-bottom: 8px;"]),X=d()(x.a).withConfig({componentId:"s1w29gso-1"})(["margin-top: 10px;"]),z=d.a.div.withConfig({componentId:"s1w29gso-2"})(["display: flex;flex: 1 1 100%;flex-direction: column;padding-bottom: ","px;position: relative;word-break: break-word;"],22),K=d()(O.c).withConfig({componentId:"s1w29gso-3"})(["margin: 0 8px;"]),W=d()(P.a).withConfig({componentId:"s1w29gso-4"})(["float: right;margin-bottom: 8px;"]),q=d()(Object(F.a)()).withConfig({componentId:"s1w29gso-5"})(["","align-items: flex-end;border-radius: 2px;display: flex;flex-direction: column;padding: 0px 8px;"],function(e){return Object(R.x)(e.shouldShowSubscribeButton?140:108,144)}),G=function(e){var n=e.post,o=e.forceShowNSFW,t=e.shouldShowSubscribeButton,i=e.subredditOrProfile,s=e.templatePlaceholderImage;return r()(q,{shouldShowSubscribeButton:!!t},void 0,t&&i&&r()(W,{identifier:{name:i.name,type:"subreddit"}}),r()(C.d,{post:n,forceShowNSFW:o,templatePlaceholderImage:s}))},Q=d()(g.a).withConfig({componentId:"s1w29gso-6"})(["max-height: 24px;",""],H.a),J=d.a.div.withConfig({componentId:"s1w29gso-7"})(["align-items: center;display: flex;flex-direction: row;"]),Y=d()(v.b).withConfig({componentId:"s1w29gso-8"})(["padding-top: 8px;"]),Z=Object(B.s)({isCommentsPage:B.v,isOriginalPage:B.z,pageLayer:function(e){return e}}),$=Object(i.connect)(function(){return Object(s.createStructuredSelector)({crosspost:E.b,currentUser:D.j,flairStyleTemplate:B.M,hideNSFWPref:D.v,post:E.y,isActive:E.e,language:D.H,moderatorPermissions:N.e,modModeEnabled:B.K,shouldShowSubscribeButton:U.b,showMedia:B.q,subredditOrProfile:E.J,userIsOp:D.V})},function(e,n){var o=n.postId;return{handleVote:function(n){return n===T.a.upvoted?e(Object(p.G)(o)):e(Object(p.m)(o))},onIgnoreReports:function(){return e(Object(p.E)(o))},onOpenReportsDropdown:function(n){return e(Object(l.e)({tooltipId:n}))}}});n.b=Z($(d()(Object(k.b)(function(e){var n=e.className,o=e.crosspost,t=e.currentUser,i=e.eventFactory,s=e.flairStyleTemplate,a=e.hideNSFWPref,d=e.inSubredditOrProfile,l=void 0!==d&&d,p=e.isCommentsPage,g=e.isCheckboxSelected,x=e.isOverlay,v=e.isOriginalPage,P=e.language,C=e.moderatorPermissions,S=e.modModeEnabled,k=e.onClickPost,B=e.onIgnoreReports,F=e.onOpenReportsDropdown,R=e.post,T=e.shouldShowSubscribeButton,N=e.showBulkActionCheckbox,U=e.showMedia,E=e.subredditOrProfile,D=e.toggleCheckbox,H=e.userIsOp,W=Object(L.a)(C),q=Object(_.a)(C),Z="subreddit"===R.belongsTo.type,$=H&&!!Z,ee=Object(f.c)(R),ne=Object(M.a)(R),oe=l&&!U,te=oe&&!!R.source&&!o;return r()(j.a,{className:n,post:R,onClick:k,eventFactory:i},void 0,Object(h.b)(R,e.handleVote,N,g,D,s),r()(Y,{flairStyleTemplate:s},void 0,r()(A,{},void 0,r()(z,{"data-click-id":"body"},void 0,r()(w.a,{hideNSFWPref:a,inSubredditOrProfile:l,isOverlay:!!x,language:P,post:R,shouldShowSubscribeButton:!1,showCornerOutboundLink:te,showOCCategories:v,showSubreddit:!l&&!R.isSponsored,subredditOrProfile:E}),r()(K,{post:R,size:O.b.Large,titleColor:s&&s.postTitleColor}),R.source&&!R.isSponsored&&!o&&r()(V.a,{post:R,isCommentsPage:p})),!oe&&ne&&r()(G,{post:o||R,shouldShowSubscribeButton:T,subredditOrProfile:E,templatePlaceholderImage:s&&s.postPlaceholderImage})),R.source&&R.source.url&&R.isSponsored&&r()(u.a,{},void 0,r()(I.a,{href:R.source.url.replace(c.a.redditUrl,""),isSponsored:R.isSponsored,source:R.source},void 0,R.source.displayText),R.callToAction&&r()(m.a,{href:R.source.url.replace(c.a.redditUrl,""),isSponsored:R.isSponsored,source:R.source,isNotCardView:!0},void 0,R.callToAction)),S&&W&&ee&&r()(X,{language:P,onIgnoreReports:B,reportable:R}),r()(J,{},void 0,r()(Q,{compact:!1,flairStyleTemplate:s,model:R,onVoteClick:e.handleVote}),r()(b.c,{currentUser:t,hasModFlairPerms:q,hasModPostPerms:W,isOverlay:!!x,language:P,modModeEnabled:S,onIgnoreReports:B,onOpenReportsDropdown:F,post:R,showEditFlair:$,tooltipType:x?y.c.Lightbox:void 0}))))})).withConfig({componentId:"s1w29gso-9"})(["","","","","","",";@media (min-width: ","px) {padding-left: 40px;border-radius: 4px;}"],C.e,R.n,R.m,v.a,b.d,function(e){return Object(R.j)(e.flairStyleTemplate)},S.h)))},"./src/reddit/components/PromoBanners/index.tsx":function(e,n,o){"use strict";var t=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),r=o.n(t),i=o("./node_modules/babel-runtime/helpers/createClass.js"),s=o.n(i),a=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=o.n(a),c=o("./node_modules/babel-runtime/helpers/inherits.js"),l=o.n(c),p=o("./node_modules/history/index.js"),u=o("./node_modules/react/index.js"),m=o.n(u),g=o("./node_modules/react-redux/es/index.js"),b=o("./node_modules/reselect/lib/index.js"),h=o("./src/lib/cache/index.ts"),x=o("./src/lib/localStorageAvailable/index.ts"),f=o("./src/lib/loginHref/index.ts"),v=o("./src/reddit/actions/login.ts"),j=o("./src/reddit/actions/promo.ts"),O=o("./node_modules/babel-runtime/helpers/jsx.js"),w=o.n(O),y=o("./src/config.ts"),P=o("./bundled-modules/styled-components/styled-components.min.js"),C=o.n(P),S=o("./src/app/strings/index.ts"),k=o("./src/lib/colors/constants.ts"),B=o("./src/reddit/constants/promos.ts"),I=o("./src/reddit/controls/Button/index.tsx"),M=o("./src/reddit/helpers/styles/mixins/fonts.tsx"),_=o("./src/reddit/icons/svgs/Close/index.tsx"),L=C.a.h1.withConfig({componentId:"s1brp014-0"})(["","color: ",";font-size: 32px;font-weight: bold;"],M.titleFontH1,k.n),F=C()(L).withConfig({componentId:"s1brp014-1"})(["","","line-height: initial;"],M.titleFontH1,""),R=C.a.span.withConfig({componentId:"s1brp014-2"})(["","color: ",";display: block;padding-top: 4px;"],M.bodyFontH6,k.n),T=C()(I.e).withConfig({componentId:"s1brp014-3"})(["background-color: ",";border-color: ",";display: inline-block;margin-top: 8px;color: ",";&:hover {background-color: ",";border-color: ",";color: ",";}"],k.e,k.e,k.n,k.d,k.d,k.n),N=Object(P.css)(["background-color: rgb(3, 46, 94);background-position: right;background-repeat: no-repeat;background-size: contain;border-radius: 4px;position: relative;"]),U=C()(function(e){return w()("div",{className:e.className},void 0,e.children)}).withConfig({componentId:"s1brp014-4"})(["","margin-bottom: 8px;padding: 16px;",""],N,function(e){return e.largeBannerKey===B.m.join?"background-image: url("+y.a.assetPath+"/img/banner/banner-"+B.m.welcome+"@2x.png);":"background-image: url("+y.a.assetPath+"/img/banner/banner-"+e.largeBannerKey+"@2x.png);"}),E=C.a.div.withConfig({componentId:"s1brp014-5"})(["","background-image: url(","/img/banner/banner-medium@2x.png);display: flex;margin-bottom: 8px;padding: 16px 134px 16px 16px;"," {margin: 0 16px;}"],N,y.a.assetPath,T),D=C.a.div.withConfig({componentId:"s1brp014-6"})(["align-items: center;display: flex;flex-wrap: wrap;min-height: 42px;"," {margin: 0;}"," {margin-right: 20px;margin-left: 0px;}"],T,F),V=C.a.img.withConfig({componentId:"s1brp014-7"})(["margin: 0 8px;"]),H=C()(function(e){return w()("button",{className:e.className,onClick:e.onClick},void 0,w()(_.a,{}))}).withConfig({componentId:"s1brp014-8"})(["height: 12px;width: 12px;right: 10px;top: 10px;position: absolute;svg {fill: ",";}"],k.n),A=function(e){return w()(U,{largeBannerKey:e.largeBannerKey},void 0,w()(H,{onClick:function(){return e.closeBanner(B.j.UpsellSignUpBannerLarge,B.i[e.largeBannerKey])}}),w()(L,{},void 0,e.language&&Object(S.a)(e.language,"promoBanners."+e.largeBannerKey+".header")),w()(R,{},void 0,e.language&&Object(S.a)(e.language,"promoBanners."+e.largeBannerKey+".subHeader")),w()(T,{href:e.href,onClick:function(n){n.stopPropagation(),n.preventDefault(),e.onOpenRegisterModal(B.i[e.largeBannerKey])}},void 0,e.language&&Object(S.a)(e.language,"promoBanners."+e.largeBannerKey+".button")))},X=function(e){return w()(E,{},void 0,w()(H,{onClick:function(){return e.closeBanner(B.j.UpsellSignUpBannerMedium,B.i.join)}}),w()(F,{},void 0,e.language&&Object(S.a)(e.language,"promoBanners.join.header")),w()(T,{href:e.href,onClick:function(n){n.stopPropagation(),n.preventDefault(),e.onOpenRegisterModal(B.i.join)}},void 0,e.language&&Object(S.a)(e.language,"promoBanners.personalize.button")))},z=C()(function(e){return w()("div",{className:e.className},void 0,w()(H,{onClick:function(){return e.closeBanner(B.j.UpsellSignUpBannerSmall,B.i.join)}}),w()(D,{},void 0,w()(V,{srcSet:y.a.assetPath+"/img/banner/banner-small-logo.png 1x,\n          "+y.a.assetPath+"/img/banner/banner-small-logo@2x.png 2x,"}),w()(F,{},void 0,e.language&&Object(S.a)(e.language,"promoBanners.join.header")),w()(T,{href:e.href,onClick:function(n){n.stopPropagation(),n.preventDefault(),e.onOpenRegisterModal(B.i.join)}},void 0,e.language&&Object(S.a)(e.language,"promoBanners.join.button"))))}).withConfig({componentId:"s1brp014-9"})(["","background-image: url(","/img/banner/banner-small@2x.png);background-position: left;","padding: 4px 32px 4px 8px;"],N,y.a.assetPath,function(e){return e.isOverlay?"border-radius: 0;":""}),K=o("./node_modules/babel-runtime/regenerator/index.js"),W=o.n(K),q=o("./node_modules/babel-runtime/helpers/asyncToGenerator.js"),G=o.n(q),Q=o("./src/reddit/actions/toaster.ts"),J=function(e,n){return function(o){return{source:"banner",action:e,noun:n}}},Y=o("./src/reddit/components/TrackingHelper/index.tsx"),Z=o("./src/lib/constants/index.ts"),$=o("./src/lib/makeRequest/index.ts"),ee=function(e,n){return Object($.a)({endpoint:"https://web.archive.org/web/20181001000458/https://api.linktexting.com/sendLink",method:Z.Ca.POST,data:"linkId="+n+"&number="+e,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}})},ne=o("./src/reddit/models/Toast/index.ts"),oe=C()(function(e){return w()("button",{className:e.className,onClick:e.onCloseBanner},void 0,w()(_.a,{}))}).withConfig({componentId:"uob30s-0"})(["height: 12px;position: absolute;right: 10px;top: 10px;width: 12px;svg {fill: ",";}"],k.n),te=C()(I.d).withConfig({componentId:"uob30s-1"})(["width: 123px;height: 26px;line-height: 20px;background-color: ",";border-color: ",";color: ",";&:hover {background-color: ",";border-color: ",";color: ",";}"],k.e,k.e,k.n,k.e,k.e,k.n),re=C.a.div.withConfig({componentId:"uob30s-2"})(["margin-bottom: 8px;"]),ie=C.a.div.withConfig({componentId:"uob30s-3"})(["background-color: rgb(3, 46, 94);background-position: right;background-repeat: no-repeat;background-size: contain;border-radius: 4px;display: flex;flex-wrap: wrap;padding: 16px 16px 14px 16px;position: relative;@media (min-width: 550px) {background-image: url(","/img/banner/mobile-x-promo.png);}"],y.a.assetPath),se=C()(function(e){return w()("div",{className:e.className},void 0,e.children)}).withConfig({componentId:"uob30s-4"})(["margin-top: 1px;height: 100%;overflow: hidden;transition: max-height 0.3s;background-color: ",";",""],function(e){return e.shouldDisplayLegalDropdown?""+k.e:"rgb(3, 46, 94)"},function(e){return e.shouldDisplayLegalDropdown?"max-height: "+(e.isHidden?"0":"58px")+";":"max-height: 58px;"}),ae=C()(function(e){return w()("span",{className:e.className},void 0,e.children)}).withConfig({componentId:"uob30s-5"})(["","color: ",";display: block;font-size: 10px;line-height: 12px;opacity: 0.8;padding: 5px 22px;text-align: ",";"],M.bodyFontH6,k.n,function(e){return e.shouldDisplayLegalDropdown?"center":"left"}),de=C.a.h1.withConfig({componentId:"uob30s-6"})(["","color: ",";margin-bottom: 5px;"],M.titleFontH1,k.n),ce=C.a.div.withConfig({componentId:"uob30s-7"})(["display: flex;flex-wrap: wrap;"]),le=C.a.div.withConfig({componentId:"uob30s-8"})(["margin-right: 8px;"]),pe=C.a.div.withConfig({componentId:"uob30s-9"})(["display: flex;align-items: center;margin-bottom: 5px;"]),ue=C.a.img.withConfig({componentId:"uob30s-10"})(["height: 16px;width: 16px;margin-right: 8px;"]),me=C()(ue).withConfig({componentId:"uob30s-11"})(["width: auto;height: 12px;"]),ge=C.a.span.withConfig({componentId:"uob30s-12"})(["","color: ",";"],M.bodyFontH6,k.n),be=C.a.div.withConfig({componentId:"uob30s-13"})(["align-items: center;display: flex;margin-top: 11px;"]),he=C()(function(e){return m.a.createElement("input",e)}).withConfig({componentId:"uob30s-14"})(["","border-radius: 4px;height: 24px;margin-right: 5px;padding-left: 5px;width: 162px;",""],M.bodyFontH6,function(e){return e.error?"border: 1px solid "+k.l:"border: 1px solid transparent"}),xe=C.a.span.withConfig({componentId:"uob30s-15"})(["color: ",";display: block;font-size: 10px;margin-top: 7px;margin-left: 6px;opacity: .9;"],k.n),fe=C.a.div.withConfig({componentId:"uob30s-16"})(["margin-left: 20px;"]),ve=C.a.img.withConfig({componentId:"uob30s-17"})(["margin: 0 auto;display: block;margin-bottom: 5px;border-radius: 4px;padding: 3px;height: 75px;width: 75px;background-color: white;margin-bottom: 5px;"]),je=C.a.span.withConfig({componentId:"uob30s-18"})(["","color: ",";max-width: 126px;display: block;text-align: center;text-transform: inherit;"],M.bodyFontH6,k.n),Oe=Object(g.connect)(void 0,function(e,n){return{displayErrorToast:function(n){e(Object(Q.e)({kind:ne.a.Error,text:n}))},displaySuccessToast:function(n){e(Object(Q.e)({kind:ne.a.SuccessCommunity,text:n}))}}}),we=function(e){function n(e){var o=this;r()(this,n);var t=d()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.getLinkId=function(){return t.props.loggedInMobilePromoVariant?B.b:B.d},t.onBlur=function(e){var n=!!e.currentTarget.value.length;t.setState({isLegalDropdownHidden:!n})},t.onFocus=function(e){t.setState({isLegalDropdownHidden:!1})},t.onInputChange=function(e){t.setState({phoneNumber:e.target.value.replace(/\D/,"")})},t.onSubmit=G()(W.a.mark(function e(){var n,r,i,s,a,d,c,l,p,u;return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.props,r=n.language,i=n.displayErrorToast,s=n.displaySuccessToast,a=n.sendEvent,d=Object(S.a)(r,"promoBanners.mobileXPromo.empty"),c=Object(S.a)(r,"promoBanners.mobileXPromo.error"),l=Object(S.a)(r,"promoBanners.mobileXPromo.success"),t.state.phoneNumber.length){e.next=8;break}return t.setState({inputError:!0}),i(d),e.abrupt("return");case 8:return a(J("click",B.i.mobilePromoBanner)),p=t.getLinkId(),e.next=12,ee(t.state.phoneNumber,p);case 12:(u=e.sent)&&u.ok?(t.setState({phoneNumber:"",inputError:!1}),s(l)):(t.setState({inputError:!0}),i(c));case 14:case"end":return e.stop()}},e,o)})),t.state={isLegalDropdownHidden:!0,phoneNumber:""},t}return l()(n,e),s()(n,[{key:"render",value:function(){var e=this.props,n=e.closeBanner,o=e.language,t=e.loggedInMobilePromoVariant,r=e.loggedOutMobilePromoVariant,i=t&&t===B.e.Test1,s=r&&r===B.f.Test1,a=!(!i&&!s);return w()(re,{},void 0,w()(ie,{},void 0,w()(oe,{onCloseBanner:function(){return n(B.j.MobilePromoBanner,B.i[B.j.MobilePromoBanner],B.l)}}),w()("div",{},void 0,w()(de,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.header")),w()(ce,{},void 0,w()(le,{},void 0,w()(pe,{},void 0,w()(ue,{src:y.a.assetPath+"/img/banner/redditor@2x.png"}),w()(ge,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.manage"))),w()(pe,{},void 0,w()(ue,{src:y.a.assetPath+"/img/banner/subscribe@2x.png"}),w()(ge,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.subscriptions")))),w()(le,{},void 0,w()(pe,{},void 0,w()(ue,{src:y.a.assetPath+"/img/banner/download@2x.png"}),w()(ge,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.downloads"))),w()(pe,{},void 0,w()(me,{src:y.a.assetPath+"/img/banner/rating@2x.png"}),w()(ge,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.rated"))))),w()(be,{},void 0,w()(he,{type:"tel",onChange:this.onInputChange,placeholder:Object(S.a)(o,"promoBanners.mobileXPromo.placeholder"),error:this.state.inputError?1:0,onBlur:this.onBlur,onFocus:this.onFocus,value:this.state.phoneNumber}),w()(te,{onClick:this.onSubmit},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.button"))),w()(xe,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.countryCode"))),w()(fe,{},void 0,w()(ve,{src:this.props.loggedInMobilePromoVariant?y.a.assetPath+"/img/banner/qr-code-logged-in.png":y.a.assetPath+"/img/banner/qr-code-logged-out.png"}),w()(je,{},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.qr")))),w()(se,{isHidden:this.state.isLegalDropdownHidden,shouldDisplayLegalDropdown:a},void 0,w()(ae,{shouldDisplayLegalDropdown:a},void 0,Object(S.a)(o,"promoBanners.mobileXPromo.legal"))))}}]),n}(m.a.Component),ye=Oe(Object(Y.b)(we)),Pe=o("./src/reddit/contexts/PageLayer/index.tsx"),Ce=o("./src/reddit/helpers/chooseVariant/index.ts"),Se=o("./src/reddit/selectors/meta.ts"),ke=o("./src/reddit/selectors/user.ts"),Be=Object.keys(B.m),Ie=Be[Math.floor(Math.random()*Math.floor(Be.length))],Me=Object(b.createStructuredSelector)({displayUpsellSignUpBannerLarge:function(e){return e.promos.upsellSignUpBannerLarge},displayUpsellSignUpBannerMedium:function(e){return e.promos.upsellSignUpBannerMedium},displayUpsellSignUpBannerSmall:function(e){return e.promos.upsellSignUpBannerSmall},language:ke.H,isLoggedIn:ke.B,displayMobilePromo:function(e){return e.promos.mobilePromoBanner},origin:Se.c,loggedInMobilePromoVariant:function(e){return Object(Ce.a)(e,B.a)},loggedOutMobilePromoVariant:function(e){return Object(Ce.a)(e,B.c)}}),_e=Object(g.connect)(Me,function(e,n){return{closeBanner:function(o,t,r){e(Object(j.c)(o,r)),n.sendEvent(J("close",t))},displayBanner:function(o,t){e(Object(j.d)({promoType:o})),n.sendEvent(J("view",t))},onOpenRegisterModal:function(o){e(Object(v.b)()),n.sendEvent(J("click",o))}}}),Le=Object(Pe.s)({isFrontPage:Pe.x,path:Pe.R}),Fe=function(e){function n(){r()(this,n);var e=d()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.sendToRegister=function(e,n){return Object(f.a)(Object(p.createLocation)(e),n,"/register")},e}return l()(n,e),s()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.displayBanner,o=e.isFrontPage,t=e.isLoggedIn,r=e.loggedInMobilePromoVariant,i=e.loggedOutMobilePromoVariant,s=e.location,a=Object(x.a)(),d=!!Object(h.b)(B.g),c=!!Object(h.b)(B.k);if(a)switch(s){case B.h.FrontPage:return void(t?!d&&r&&n(B.j.MobilePromoBanner,B.i[B.j.MobilePromoBanner]):t||(!d&&i?n(B.j.MobilePromoBanner,B.i[B.j.MobilePromoBanner]):c||n(B.j.UpsellSignUpBannerLarge,B.i[Ie])));case B.h.SubredditPage:return void(o||t||c||n(B.j.UpsellSignUpBannerMedium,B.i.join));case B.h.CommentsPage:t||c||n(B.j.UpsellSignUpBannerSmall,B.i.join)}}},{key:"render",value:function(){var e=this.props,n=e.closeBanner,o=e.displayMobilePromo,t=e.displayUpsellSignUpBannerLarge,r=e.displayUpsellSignUpBannerMedium,i=e.displayUpsellSignUpBannerSmall,s=e.isFrontPage,a=e.isLoggedIn,d=e.isOverlay,c=e.language,l=e.location,p=e.loggedInMobilePromoVariant,u=e.loggedOutMobilePromoVariant,g=e.path,b=e.onOpenRegisterModal,h=e.origin,x={closeBanner:n,href:this.sendToRegister(g,h),isOverlay:d,language:c,onOpenRegisterModal:b},f=Object.assign({},x,{largeBannerKey:Ie}),v=Object.assign({},x,{loggedInMobilePromoVariant:p,loggedOutMobilePromoVariant:u});switch(l){case B.h.FrontPage:if(s){if(o)return m.a.createElement(ye,v);if(t)return m.a.createElement(A,f)}break;case B.h.SubredditPage:if(!s&&!a&&r)return m.a.createElement(X,x);break;case B.h.CommentsPage:if(!a&&i)return m.a.createElement(z,x)}return null}}]),n}(u.Component);n.a=Le(Object(Y.b)(_e(Fe)))},"./src/reddit/helpers/canRenderThumbnail.ts":function(e,n,o){"use strict";var t="nsfw",r="self";function i(e){return!(!e.thumbnail||!e.thumbnail.url||e.thumbnail.url===r||e.thumbnail.url===t)}o.d(n,"a",function(){return i})}}]);
//# sourceMappingURL=CommentsPage~Frontpage~ModQueuePages~Multireddit~News~OriginalContent~ProfilePage~SearchResults~Subr~bdb90d2e.2170643f9bf724ca6bbb.js.map

}
/*
     FILE ARCHIVED ON 00:04:58 Oct 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:34:47 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.134
  exclusion.robots.policy: 0.118
  cdx.remote: 0.197
  esindex: 0.021
  LoadShardBlock: 381.559 (6)
  PetaboxLoader3.datanode: 405.409 (8)
  load_resource: 290.097 (2)
  PetaboxLoader3.resolve: 106.785 (2)
*/