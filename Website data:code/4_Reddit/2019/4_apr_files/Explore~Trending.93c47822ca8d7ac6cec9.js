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

(window.webpackJsonp=window.webpackJsonp||[]).push([["Explore~Trending"],{"./src/reddit/components/DiscoveryUnit/Community/index.tsx":function(e,t,s){"use strict";var o,n=s("./src/app/strings/index.ts"),r=s("./node_modules/react/index.js"),i=s.n(r),d=s("./node_modules/react-router-dom/es/index.js"),a=s("./bundled-modules/styled-components/styled-components.min.js"),c=s.n(a),l=s("./src/lib/classNames/index.ts"),u=s("./src/reddit/components/SubredditIcon/index.tsx"),p=s("./src/reddit/components/SubscribeButton/index.tsx"),m=s("./src/reddit/connectors/connectToLanguage.ts"),b=s("./src/reddit/constants/posts.ts"),f=s("./src/reddit/helpers/name/index.ts"),x=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,s,n){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:o,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}});var h=e=>x("svg",{className:e.className,viewBox:"0 0 12 12",version:"1.1"},void 0,x("path",{d:"M10.8 4.4H7.6V1.2a.8.8 0 0 0-.8-.8H5.2a.8.8 0 0 0-.8.8v3.2H1.2a.8.8 0 0 0-.8.8v1.6a.8.8 0 0 0 .8.8h3.2v3.2a.8.8 0 0 0 .8.8h1.6a.8.8 0 0 0 .8-.8V7.6h3.2a.8.8 0 0 0 .8-.8V5.2a.8.8 0 0 0-.8-.8",fill:"currentColor",fillRule:"evenodd"})),y=s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),v=s("./src/reddit/models/Subreddit/index.ts"),g=s("./src/reddit/models/Theme/NewColorSystem/index.ts"),O=s("./src/reddit/components/DiscoveryUnit/Community/index.m.less"),j=s.n(O),C=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,s,o,n){var r=t&&t.defaultProps,i=arguments.length-3;if(s||0===i||(s={}),s&&r)for(var d in r)void 0===s[d]&&(s[d]=r[d]);else s||(s=r||{});if(1===i)s.children=n;else if(i>1){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+3];s.children=a}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:s,_owner:null}}}();const P=c()(p.a).withConfig({componentId:"s8pveuu-0"})(["",""],e=>e.withPlusIcon?"\n      padding-bottom: 0;\n      padding-top: 0;\n      white-space: nowrap;\n    ":""),S=c.a.div.withConfig({componentId:"s8pveuu-1"})(["."," {border: 1px solid ",";}."," {color: ",";}.",",.",",."," {color: ",";}."," {background-color: ",";}."," {color: ",";}."," {fill: ",";}"],j.a.icon,e=>Object(g.c)(e).line,j.a.name,e=>Object(g.c)(e).bodyText,j.a.description,j.a.subscribers,j.a.descriptionLine,e=>Object(g.c)(e).metaText,j.a.subscribeButton,e=>Object(g.c)(e).field,j.a.visitCommunity,e=>Object(g.c)(e).linkText,j.a.plusIcon,e=>Object(g.c)(e).body);t.a=Object(m.a)(e=>{const t=e.subredditAboutInfo,s=e.subredditOrProfile,o={name:s.name,type:Object(v.c)(s)?b.a.PROFILE:b.a.SUBREDDIT},r=t?t.publicDescription:"";return C(S,{className:Object(l.a)(j.a.container,e.className)},void 0,C(y.a,{className:j.a.layout},void 0,C("div",{className:j.a.iconContainer},void 0,C(u.b,{className:j.a.icon,redditStyle:!0,subredditOrProfile:s}),e.showSubscribeSmallIcon&&C(P,{className:j.a.subscribeIcon,getEventFactory:e.getSubscribeEventFactory,icon:!0,identifier:o,small:!0})),C("div",{className:j.a.textContainer},void 0,C(d.a,{className:j.a.name,to:s.url,onMouseDown:e.onClick},void 0,Object(f.b)(s.displayText||s.name)),!e.showDescriptionLine&&!!r&&C("p",{className:j.a.description,title:r},void 0,r),(e.showDescriptionLine||!r)&&!!s.subscribers&&C("p",{className:j.a.subscribers},void 0,Object(n.c)(e.language,"listings.subscribers",s.subscribers))),C("div",{className:j.a.right},void 0,!e.showSubscribeSmallIcon&&C(i.a.Fragment,{},void 0,e.showVisitLink&&C(d.a,{className:j.a.visitCommunity,to:s.url,onMouseDown:e.onClick},void 0,Object(n.a)(e.language,"discoveryUnits.visitCommunity")),C(P,{border:!!e.showSubscribeBlueButton,className:e.showSubscribeBlueButton||e.showSubscribeLargeIcon?void 0:j.a.subscribeButton,getEventFactory:e.getSubscribeEventFactory,identifier:o,icon:e.showSubscribeLargeIcon,small:!e.showSubscribeLargeIcon,withPlusIcon:!!e.showSubscribeBlueButton},void 0,e.showSubscribeBlueButton&&C(h,{className:j.a.plusIcon}))))),e.showDescriptionLine&&C("p",{className:j.a.descriptionLine,title:r},void 0,r))})},"./src/reddit/components/DiscoveryUnit/Layout/Posts/LargePost/index.m.less":function(e,t,s){e.exports={subscribeBlock:"_2K1NDLfQ1li98LnvydBdNi",metaLine:"_2ZzXnnvViW1cNiyJDAwQDt",bodyWrapper:"_3u6y1RQYCofMUyoR2kjC5l",textWrapper:"_19mUmrg6WesSKSmZhQEjWV",mediaWrapper:"_1yIBLJ6HB85lFgtecGo5fE",thumbnail:"_3UTXxzS2wbR9EWHksS_e8h",flatlist:"_1Vzo24SML9Mhww7IxRI2pp",postTitle:"RIdh-lLjEPPyxAGw3Tu5k",postTitleCompact:"_2S1d6YLjro9lYVxzu3lo54",flexSpacer:"_2VNbdMdEXhCajLS8-L_dXA"}},"./src/reddit/components/DiscoveryUnit/Layout/Posts/LargePost/index.tsx":function(e,t,s){"use strict";s.d(t,"b",function(){return G});var o,n=s("./src/config.ts"),r=s("./node_modules/react/index.js"),i=s.n(r),d=s("./bundled-modules/styled-components/styled-components.min.js"),a=s.n(d),c=s("./src/lib/isUrl/index.ts"),l=s("./src/reddit/components/DiscoveryUnit/Community/index.tsx"),u=s("./src/reddit/components/JSAPIContainers/index.tsx"),p=s("./src/reddit/components/Media/index.tsx"),m=s("./src/reddit/components/MiniCardPost/index.tsx"),b=s("./src/reddit/components/MiniCardPost/Flatlist/index.tsx"),f=s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),x=s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),h=s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),y=s("./src/reddit/components/PostContainer/index.tsx"),v=s("./src/reddit/components/PostFlairPicker/index.tsx"),g=s("./src/reddit/components/PostTitle/index.tsx"),O=s("./src/reddit/components/SubscribeButton/Base.tsx"),j=s("./src/reddit/constants/posts.ts"),C=s("./src/reddit/contexts/PageLayer/index.tsx"),P=s("./src/reddit/controls/Button/index.tsx"),S=s("./src/reddit/controls/ContentType/index.tsx"),w=s("./src/reddit/helpers/canPreviewSelfText/index.ts"),_=s("./src/reddit/helpers/getRichTextContent.ts"),I=s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),N=s("./src/reddit/helpers/hasModPostPermissions/index.ts"),T=s("./src/reddit/helpers/postHasSelfText/index.ts"),M=s("./src/reddit/models/Media/index.ts"),L=s("./src/reddit/models/Theme/NewColorSystem/index.ts"),k=s("./src/reddit/components/Media/EmbedBox/index.m.less"),F=s.n(k),W=s("./src/reddit/components/Media/ImageBox/index.m.less"),B=s.n(W),U=s("./src/reddit/components/Media/VideoBox/index.m.less"),D=s.n(U),R=s("./src/reddit/components/MiniCardPost/index.m.less"),$=s.n(R),E=s("./src/reddit/components/Thumbnail/index.m.less"),V=s.n(E),A=s("./src/reddit/controls/Score/index.m.less"),K=s.n(A),Q=s("./src/reddit/components/DiscoveryUnit/Layout/Posts/LargePost/index.m.less"),J=s.n(Q),H=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,s,n){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:o,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}});const z=`${n.a.assetPath}/img/link-placeholder.png`,X=Object(C.w)(),Y="\n  border-radius: 0;\n  height: 180px;\n  width: auto;\n",G=`\n  .${J.a.mediaWrapper} {\n    .${J.a.thumbnail} {\n      .${V.a.container} {\n        ${Y};\n\n        .${V.a.thumbnail} {\n          ${Y};\n          background-size: cover;\n        }\n      }\n\n      .${V.a.linkIcon} {\n        border-radius: 0;\n      }\n\n      .${V.a.outboundLinkIcon} {\n        margin-top: 2px;\n      }\n\n      .${V.a.contentType} {\n        transform: scale(1.5);\n      }\n    }\n\n    .${B.a.container} > div {\n      width: 100%;\n    }\n\n    .${B.a.image} {\n      object-fit: cover;\n      width: 100%;\n    }\n\n    .${D.a.styledVideo} {\n      object-fit: cover;\n    }\n\n    .${B.a.seeMore} {\n      bottom: 0;\n    }\n\n    .${F.a.embedBox} {\n      height: 180px;\n      width: 100%;\n    }\n  }\n\n  .${K.a.score} {\n    color: inherit !important; // to override inline style\n  }\n`,q=a()(e=>{const t=e.autoplayPref,s=e.availableWidth,o=e.className,n=e.crosspostRoot,r=e.crosspostSubredditOrProfile,d=e.currentUser,a=e.eventFactory,m=e.flairStyleTemplate,O=e.forceLoadMedia,C=e.hideNSFWPref,P=e.language,S=e.moderatorPermissions,L=e.modModeEnabled,k=e.onClickPost,F=e.post,W=e.scrollerItemRef,B=e.shouldPause;var U=e.showMetaLine;const D=void 0===U||U;var R=e.showSubscribeBlock;const E=void 0!==R&&R,V=e.subredditOrProfile,A=e.userIsOp;const K=(n||F).media,Q=K&&K.type,X=Object(v.b)(F.id),Y=Q===M.m.RTJSON,G=F.belongsTo.type===j.a.SUBREDDIT,q=A&&Y,Z=A&&!!G,ee=Object(N.a)(S),te=Object(I.a)(S),se=K&&H(p.a,{autoplayPref:t,availableWidth:s,className:$.a.media,forceAspectRatio:M.c,isListing:!0,isMiniCard:!0,isNotCardView:!0,post:n||F,scrollerItemRef:W,shouldPause:B,shouldLoad:O,showCentered:!1,showFull:!1});let oe,ne=!0;const re=!!F.source&&Object(c.a)(F.source.url)||!!F.thumbnail&&Object(c.a)(F.thumbnail.url);return!K&&re?(ne=!1,oe=H(i.a.Fragment,{},void 0,H("div",{className:J.a.flexSpacer}),H("div",{className:J.a.mediaWrapper},void 0,H(x.a,{className:J.a.thumbnail,post:F,templatePlaceholderImage:m?m.postPlaceholderImage:z,showPlaceholderContentType:!m||!m.postPlaceholderImage})))):K&&se?K.type!==M.m.RTJSON&&K.type!==M.m.TEXT?(ne=!1,oe=H(i.a.Fragment,{},void 0,H("div",{className:J.a.flexSpacer}),H("div",{className:J.a.mediaWrapper},void 0,se))):oe=Object(T.a)(F)||Object(_.a)(F,null)&&Object(w.a)(F)?H("div",{className:J.a.textWrapper},void 0,se):H("div",{className:J.a.flexSpacer}):oe=H("div",{className:J.a.flexSpacer}),H(y.a,{className:o,post:F,onClick:k,eventFactory:a},void 0,H(h.b,{className:$.a.backgroundWrapper,flairStyleTemplate:m},void 0,H("div",{className:$.a.innerContainer},void 0,E&&V&&H(l.a,{className:J.a.subscribeBlock,getSubscribeEventFactory:e.getSubredditSubscribeEventFactory,onClick:()=>e.onCommunityClick(F),showSubscribeLargeIcon:!0,subredditOrProfile:V}),D&&V&&H(f.a,{className:J.a.metaLine,crosspostSubredditOrProfile:r,hideNSFWPref:C,language:P,onCommunityClick:()=>e.onCommunityClick(F),post:F,subredditOrProfile:V}),H(g.c,{className:ne?J.a.postTitle:J.a.postTitleCompact,disableFlair:!0,hideSourceLink:!0,post:F,size:g.b.Large,titleColor:m&&m.postTitleColor}),oe,H(b.a,{className:J.a.flatlist,currentUser:d,handleVote:e.handleVote,hasModFlairPerms:te,hasModPostPerms:ee,language:P,modModeEnabled:L,post:F,showEditFlair:Z,showEditPost:q}))),e.activeModalId===X&&H(v.a,{flairs:F.flair,subredditId:F.belongsTo.id,language:P,modalId:X,onFlairChanged:e.onFlairChanged}),H(u.d,{postId:F.id}))}).withConfig({componentId:"yhotp9-0"})(["",";",";margin-bottom: 0;"," {color: ",";}."," {padding-top: 8px;}."," {height: 100%;}."," {"," {fill: ",";}"," {",";background-color: ",";border: 1px solid ",";&:active,&:hover,&:disabled,&[disabled],&[data-disabled] {background-color: ",";border: 1px solid ",";}}}"],m.d,G,S.a,e=>Object(L.c)(e).body,$.a.innerContainer,$.a.media,J.a.subscribeBlock,O.a,e=>Object(L.c)(e).button,O.b,P.u,e=>Object(L.c)(e).body,e=>Object(L.c)(e).button,e=>Object(L.c)(e).body,e=>Object(L.c)(e).button);t.a=X(Object(m.b)(q))},"./src/reddit/components/MiniCardPost/MetaLine/index.m.less":function(e,t,s){e.exports={container:"_35Bx3s8VlFspHwPlg1MaHt",subredditIcon:"_32Ni_aGBoPzRxNSy5eC_ck"}},"./src/reddit/components/MiniCardPost/MetaLine/index.tsx":function(e,t,s){"use strict";s.d(t,"b",function(){return g});s("./node_modules/react/index.js");var o,n=s("./bundled-modules/styled-components/styled-components.min.js"),r=s.n(n),i=s("./src/app/strings/index.ts"),d=s("./src/config.ts"),a=s("./src/lib/classNames/index.ts"),c=s("./src/reddit/components/QuarantinedLabel/index.tsx"),l=s("./src/reddit/components/SubredditIcon/index.tsx"),u=s("./src/reddit/components/SubredditNameLink/index.tsx"),p=s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),m=s("./src/reddit/helpers/name/index.ts"),b=s("./src/reddit/helpers/styles/mixins/fonts.tsx"),f=s("./src/reddit/icons/fonts/Crosspost/index.tsx"),x=s("./src/reddit/models/Theme/NewColorSystem/index.ts"),h=s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),y=s.n(h),v=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,s,n){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:o,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}});const g=Object(n.css)(["."," {",""," {","color: ",";}}"],y.a.container,b.metadataFont,u.a,b.metadataFont,e=>Object(x.c)(e).metaText),O=r()(f.a).withConfig({componentId:"s1pt5i0s-0"})(["color: ",";font-size: 10px;margin: 0 4px;"],e=>Object(x.c)(e).active);t.a=(e=>{const t=e.className,s=e.crosspostSubredditOrProfile,o=e.hideNSFWPref,n=e.language,r=e.post,b=e.subredditOrProfile,f=Object(p.a)({subredditOrProfile:b}),x=b&&b.isNSFW&&o&&"user"===b.type?`${d.a.assetPath}/img/avatar_over18.png`:f.url;return v("div",{className:Object(a.a)(y.a.container,t)},void 0,v(u.a,{to:b.url,onMouseDown:e.onCommunityClick},void 0,v(l.b,{className:y.a.subredditIcon,primaryColor:f.color,iconUrl:x}),v("span",{},void 0,b.displayText)),((e,t,s)=>{if(s)return v("div",{role:"img","aria-label":Object(i.a)(e,"posts.crosspostedByFrom",{by:Object(m.c)(t),from:s.displayText})},void 0,v(O,{}))})(n,r.author,s),b&&b.isQuarantined&&v(c.a,{}))})},"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less":function(e,t,s){e.exports={container:"_1HoOlmppFDBC4s5XWY-Qcd",link:"_3vSJGY3bytdlY4DhANolyh"}},"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx":function(e,t,s){"use strict";s("./node_modules/react/index.js");var o,n=s("./bundled-modules/styled-components/styled-components.min.js"),r=s.n(n),i=s("./src/lib/classNames/index.ts"),d=s("./src/reddit/components/Thumbnail/index.tsx"),a=s("./src/reddit/models/Theme/NewColorSystem/index.ts"),c=s("./src/reddit/components/Thumbnail/index.m.less"),l=s.n(c),u=s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),p=s.n(u),m=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,s,n){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:o,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}});const b=r.a.div.withConfig({componentId:"nndyxl-0"})(["",";"],d.e),f="\n  width: 208px;\n  height: 158px;\n",x=Object(n.css)(["border: 1px solid ",";"," {."," {",";}."," {align-items: center;background-color: ",";border-radius: 0 0 4px 4px;display: flex;padding: 4px 0px;width: 100%;}"," {margin-left: 4px;max-width: 180px;}."," {font-size: 18px;}."," {","border-width: 0;}}&:hover {"," {."," {background-color: ",";}}}"],e=>Object(a.c)(e).line,b,l.a.container,f,l.a.linkIcon,e=>Object(a.c)(e).postFlairText,d.b,l.a.outboundLinkIcon,l.a.thumbnail,f,b,l.a.linkIcon,e=>Object(a.c)(e).button),h=r.a.div.withConfig({componentId:"nndyxl-1"})(["",";"],x);t.a=(e=>{const t=e.post.source;return m(h,{className:Object(i.a)(p.a.container,e.className)},void 0,m(b,{},void 0,m(d.d,{post:e.post,showContentType:e.showPlaceholderContentType,templatePlaceholderImage:e.templatePlaceholderImage,text:t?t.url:""})))})},"./src/reddit/components/MiniCardPost/index.m.less":function(e,t,s){e.exports={flexSpacer:"_3FMwep96W9D-wkC9u2Pc0L",backgroundWrapper:"_2yVioz8mzc0YBV2JyNXzRj",innerContainer:"_3mrITcnODXcvMf9oonBXeD",metaLine:"_20xUo-97VDWkydk8rn74dR",media:"_1qlC_L_v_Aher9NBsvBIMR",mediaWrapper:"_1UmG626eNsebZt_eyKdDL4",postTitleCompact:"_3wSK3_gZiuaUZtqPKu9z3M"}},"./src/reddit/components/MiniCardPost/index.tsx":function(e,t,s){"use strict";s.d(t,"b",function(){return R}),s.d(t,"d",function(){return $}),s.d(t,"a",function(){return E});s("./node_modules/react/index.js");var o,n=s("./node_modules/react-redux/es/index.js"),r=s("./node_modules/reselect/lib/index.js"),i=s("./bundled-modules/styled-components/styled-components.min.js"),d=s.n(i),a=s("./src/app/actions/tooltip.ts"),c=s("./src/lib/isUrl/index.ts"),l=s("./src/reddit/actions/post.ts"),u=s("./src/reddit/actions/postFlair.ts"),p=s("./src/reddit/components/JSAPIContainers/index.tsx"),m=s("./src/reddit/components/Media/index.tsx"),b=s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),f=s("./src/reddit/components/PostContainer/index.tsx"),x=s("./src/reddit/components/PostFlairPicker/index.tsx"),h=s("./src/reddit/components/PostTitle/index.tsx"),y=s("./src/reddit/contexts/PageLayer/index.tsx"),v=s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),g=s("./src/reddit/helpers/hasModPostPermissions/index.ts"),O=s("./src/reddit/helpers/styles/components/index.tsx"),j=s("./src/reddit/helpers/styles/mixins/index.tsx"),C=s("./src/reddit/models/Media/index.ts"),P=s("./src/reddit/models/Vote/index.ts"),S=s("./src/reddit/selectors/activeModalId.ts"),w=s("./src/reddit/selectors/moderatorPermissions.ts"),_=s("./src/reddit/selectors/posts.ts"),I=s("./src/reddit/selectors/user.ts"),N=s("./src/reddit/components/MiniCardPost/Flatlist/index.tsx"),T=s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),M=s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),L=s("./src/reddit/components/Media/ImageBox/index.m.less"),k=s.n(L),F=s("./src/reddit/components/MiniCardPost/index.m.less"),W=s.n(F),B=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,s,n){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===i)t.children=n;else if(i>1){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}return{$$typeof:o,type:e,key:void 0===s?null:""+s,ref:null,props:t,_owner:null}});const U=Object(i.css)([".",",."," {height: 100%;}"],k.a.container,k.a.image),D=Object(y.w)(),R=Object(n.connect)(()=>Object(r.createStructuredSelector)({activeModalId:S.a,autoplayPref:I.b,crosspostRoot:_.c,crosspostSubredditOrProfile:_.d,currentUser:I.j,flairStyleTemplate:y.S,hideNSFWPref:I.x,isActive:_.f,language:I.M,moderatorPermissions:w.f,modModeEnabled:y.Q,post:_.C,subredditOrProfile:_.N,userIsOp:I.db}),(e,{postId:t})=>({dispatchFlairChanged:({post:t,previewFlair:s,selectedTemplateId:o})=>e(Object(u.h)({post:t,previewFlair:s,selectedTemplateId:o})),handleVote:s=>{const o=s===P.a.upvoted?Object(l.J)(t):Object(l.n)(t);e(o)},onIgnoreReports:()=>e(Object(l.H)(t)),onOpenReportsDropdown:t=>e(Object(a.e)({tooltipId:t}))}),(e,t,s)=>Object.assign({},s,e,t,{onFlairChanged:({previewFlair:s,selectedTemplateId:o})=>t.dispatchFlairChanged({post:e.post,previewFlair:s,selectedTemplateId:o})})),$=Object(O["d"])()`
  ${j.n}
  ${j.m}
  ${b.a}
  ${N.b}
  ${T.b}
  ${U}

  ${e=>Object(j.j)(e.flairStyleTemplate)};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  flex: 1;
`,E=d()(e=>{const t=e.autoplayPref,s=e.availableWidth,o=e.className,n=e.crosspostRoot,r=e.crosspostSubredditOrProfile,i=e.currentUser,d=e.eventFactory,a=e.flairStyleTemplate,l=e.forceLoadMedia,u=e.hideNSFWPref,y=e.language,O=e.moderatorPermissions,j=e.modModeEnabled,P=e.onClickPost,S=e.post,w=e.scrollerItemRef,_=e.shouldPause;var I=e.showMetaLine;const L=void 0===I||I,k=e.subredditOrProfile,F=e.userIsOp;const U=(n||S).media,D=U&&U.type,R=Object(x.b)(S.id),$=D===C.m.RTJSON,E="subreddit"===S.belongsTo.type,V=F&&$,A=F&&!!E,K=Object(g.a)(O),Q=Object(v.a)(O),J=U&&D!==C.m.RTJSON&&D!==C.m.TEXT,H=!U&&!!S.source&&Object(c.a)(S.source.url),z=U&&B(m.a,{autoplayPref:t,availableWidth:s,className:W.a.media,forceAspectRatio:C.c,isListing:!0,isMiniCard:!0,isNotCardView:!0,post:n||S,scrollerItemRef:w,shouldPause:_,shouldLoad:l,showCentered:!0,showFull:!1});return B(f.a,{className:o,post:S,onClick:P,eventFactory:d},void 0,B(b.b,{className:W.a.backgroundWrapper,flairStyleTemplate:a},void 0,J&&z,B("div",{className:W.a.innerContainer},void 0,H&&B(M.a,{post:S,templatePlaceholderImage:a?a.postPlaceholderImage:void 0}),B(h.c,{className:W.a.postTitleCompact,disableFlair:!0,hideSourceLink:!0,post:S,size:h.b.Large,titleColor:a&&a.postTitleColor}),L&&k&&B(T.a,{className:W.a.metaLine,crosspostSubredditOrProfile:r,hideNSFWPref:u,language:y,post:S,subredditOrProfile:k}),!J&&B("div",{className:W.a.mediaWrapper},void 0,z),B("div",{className:W.a.flexSpacer}),B(N.a,{currentUser:i,handleVote:e.handleVote,hasModFlairPerms:Q,hasModPostPerms:K,language:y,modModeEnabled:j,post:S,showEditFlair:A,showEditPost:V}))),e.activeModalId===R&&B(x.a,{flairs:S.flair,subredditId:S.belongsTo.id,language:y,modalId:R,onFlairChanged:e.onFlairChanged}),B(p.d,{postId:S.id}))}).withConfig({componentId:"s1ml9eop-0"})(["",";"],$);t.c=D(R(E))},"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less":function(e,t,s){e.exports={metaLine:"_2bW-gLhebJzurGWNnxpl0I",bodyWrapper:"TRQWddBXkEbkcG_ubUuna",mediaWrapper:"_1Gl3uwbMHh5VhlU0JATHu0",textWrapper:"YH565aQWcKKY53qc9qHsm",meta:"_363wpVC6QeLO7Vq0SwQcOg",metaWrapper:"_232eNhzD3iKHOssx14WnYG",thumbnail:"_3ot5Uav1x5Oa8hH19Mlogk",trendingPost:"_3GfG_jvS9X-90Q_8zU4uCu",flatlist:"_2i5CgtwVkYOwV-M92BNHuo",title:"_10WwrR6QeKoqfxT3UBj0Qq",titleNoDescription:"_2RETtzv0N74uYf3vCRgQsj",spacer:"dnGYcjdXDdH17kki2-FYy",description:"_2Jjv0TAohMSydVpAgyhjhA",fvfo:"_27EorwlUpQHUhM7ilSeJKM",flexSpacer:"_2X1uOOj7bjYyM2hV3o5Eou"}},"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less":function(e,t,s){e.exports={container:"_1wTtHt-VeTJLbmZj77AmN3",trendingPosts:"cslJXYWf-T5weuzAPoO3X",trendingPost:"_27FJDku8We0nUkyLPhJFnD"}},"./src/reddit/helpers/trackers/discoveryUnit.ts":function(e,t,s){"use strict";s.d(t,"d",function(){return m}),s.d(t,"a",function(){return f}),s.d(t,"e",function(){return h}),s.d(t,"r",function(){return v}),s.d(t,"s",function(){return g}),s.d(t,"j",function(){return O}),s.d(t,"m",function(){return j}),s.d(t,"n",function(){return C}),s.d(t,"b",function(){return P}),s.d(t,"g",function(){return S}),s.d(t,"q",function(){return w}),s.d(t,"f",function(){return _}),s.d(t,"h",function(){return I}),s.d(t,"i",function(){return N}),s.d(t,"k",function(){return T}),s.d(t,"l",function(){return M}),s.d(t,"t",function(){return L}),s.d(t,"c",function(){return k}),s.d(t,"o",function(){return F}),s.d(t,"p",function(){return W});var o=s("./src/reddit/constants/tracking.ts"),n=s("./src/reddit/helpers/correlationIdTracker.ts"),r=s("./src/reddit/helpers/trackers/navigation.ts"),i=s("./src/reddit/models/DiscoveryUnit/index.ts"),d=s("./src/reddit/selectors/posts.ts"),a=s("./src/reddit/selectors/telemetry.ts"),c=s("./src/reddit/selectors/widgets.ts"),l=s("./src/telemetry/index.ts");const u="discovery_unit",p=(e,t)=>Object.assign({},a.defaults(e),{source:u,screen:a.screen(e),discoveryUnit:{id:t.id,type:t.unitType,title:t.title,name:t.unitName}}),m=(e,t)=>Object.assign({},p(e,t),{source:"global",action:"view",noun:"discovery_unit"}),b=(e,t)=>Object.assign({},a.defaults(e),{correlationId:Object(n.c)(n.a.SearchResults),screen:a.screen(e),noun:"search_result_discovery_unit",post:t?a.post(e,t):null,discoveryUnit:{name:i.i,id:"xd_72",type:"listing"}}),f=(e,t)=>{Object(l.a)(m(e,t))},x=(e,t,s)=>"unitName"in t?p(e,t):((e,t,s)=>Object.assign({},a.defaults(e),{source:"search",screen:a.screen(e),search:s?Object.assign({},a.search(e,s),{structureType:a.StructureType.Trending}):null,discoveryUnit:{id:t.name,type:"listing",title:t.layout.title,name:t.name}}))(e,t,s),h=(e,t,s,o)=>Object.assign({},x(e,t,o),{action:"view",noun:"item_post",post:a.post(e,s)}),y=e=>({displayQuery:decodeURIComponent(e.searchQuery),rawQuery:e.rawQuery?decodeURIComponent(e.rawQuery):void 0,structureType:a.StructureType.Trending}),v=(e,t)=>{const s=t.post?t.post.id:void 0;Object(l.a)(Object.assign({},b(e,s),{metaSearch:y(t),source:"search",action:"click"}))},g=(e,t)=>{const s=t.post?t.post.id:void 0;Object(l.a)(Object.assign({},b(e,s),{metaSearch:y(t),source:"search",action:"view"}))},O=(e,t,s,o)=>{Object(l.a)(h(e,t,s,o))},j=(e,t,s,o)=>{const n=x(e,t,o);Object(l.a)(Object.assign({},n,Object(c.b)(e,s),{action:"view",noun:"item_subreddit"}))},C=(e,t,s)=>{Object(l.a)(Object.assign({},p(e,t),{source:u,action:o.b.CLICK,noun:"title_category",subreddit:{categoryName:Object(r.e)(s)}}))},P=(e,t)=>{Object(l.a)(Object.assign({},p(e,t),{source:u,action:o.b.CLICK,noun:"show_less_often"}))},S=(e,t,s,n)=>{const r=x(e,t,n);Object(l.a)(Object.assign({},r,{source:u,action:o.b.CLICK,noun:"item_post",post:a.post(e,s)}))},w=()=>e=>t=>({source:"search",action:o.b.CLICK,noun:"item_post",post:a.post(t,e),search:{structureType:a.StructureType.Trending}}),_=e=>t=>s=>Object.assign({},e?p(s,e):{},{source:u,action:o.b.CLICK,noun:"item_post",post:a.post(s,t)}),I=(e,t,s,n)=>{const r=Object(d.b)(e,{postId:s}),i=r?Object(c.b)(e,r):void 0,p=x(e,t,n);Object(l.a)(Object.assign({},p,i,{source:u,action:o.b.CLICK,noun:"item_post_subreddit",post:a.post(e,s)}))},N=(e,t)=>s=>n=>{const r=Object(d.b)(n,{postId:t}),i=r?Object(c.b)(n,r):void 0,l=x(n,e);return Object.assign({},l,i,{source:u,action:o.b.CLICK,noun:s?"item_post_subreddit_unsubscribe":"item_post_subreddit_subscribe",post:a.post(n,t)})},T=(e,t,s)=>{Object(l.a)(Object.assign({},p(e,t),Object(c.b)(e,s),{source:u,action:o.b.CLICK,noun:"item_subreddit"}))},M=(e,t)=>s=>n=>Object.assign({},p(n,e),Object(c.b)(n,t),{source:u,action:o.b.CLICK,noun:s?"item_subreddit_unsubscribe":"item_subreddit_subscribe"}),L=(e,t,s)=>{const n=x(e,t);Object(l.a)(Object.assign({},n,Object(c.b)(e,s),{source:"search",action:o.b.CLICK,noun:"search_result_discovery_unit_subreddit"}))},k=(e,t,s)=>{const n=x(e,t);Object(l.a)(Object.assign({},n,Object(c.b)(e,s),{source:u,action:o.b.CLICK,noun:"footer_subreddit"}))},F=(e,t,s)=>{Object(l.a)(Object.assign({},p(e,t),Object(c.b)(e,s),{source:u,action:o.b.CLICK,noun:"title_subreddit"}))},W=(e,t)=>s=>n=>Object.assign({},p(n,e),Object(c.b)(n,t),{source:u,action:o.b.CLICK,noun:s?"title_subreddit_unsubscribe":"title_subreddit_subscribe"})}}]);
//# sourceMappingURL=Explore~Trending.93c47822ca8d7ac6cec9.js.map

}
/*
     FILE ARCHIVED ON 14:38:54 Mar 26, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:32 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.073
  cdx.remote: 0.149
  esindex: 0.02
  LoadShardBlock: 232.447 (6)
  PetaboxLoader3.datanode: 170.892 (7)
  load_resource: 273.118
  PetaboxLoader3.resolve: 201.269
*/