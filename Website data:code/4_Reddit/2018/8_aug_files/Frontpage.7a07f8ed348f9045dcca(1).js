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

(window.webpackJsonp=window.webpackJsonp||[]).push([["Frontpage"],{"./src/reddit/components/EmptySubreddit.tsx":function(e,t,n){"use strict";var r,i=n("./node_modules/react/index.js"),o=n.n(i),s=n("./node_modules/react-redux/es/index.js"),d=n("./node_modules/reselect/lib/index.js"),c=n("./bundled-modules/styled-components/styled-components.min.js"),a=n.n(c),l=n("./src/app/strings/index.ts"),u=n("./src/config.ts"),p=n("./src/lib/constants/index.ts"),m=n("./src/lib/isFakeSubreddit/index.ts"),f=n("./src/reddit/constants/postLayout.ts"),g=n("./src/reddit/constants/screenWidths.ts"),b=n("./src/reddit/controls/Button/index.tsx"),y=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),h=n("./src/reddit/selectors/user.ts"),x=n("./src/reddit/components/PostList/Placeholder.tsx"),v=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),w=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),j="\n  margin: 16px;\n",S=a.a.div.withConfig({componentId:"rqdrsd-0"})(["","","color: ",";"],j,y.titleFontH3,function(e){return Object(v.c)(e).bodyText}),C=a.a.div.withConfig({componentId:"rqdrsd-1"})(["","","color: ",";"],j,y.titleFontH5,function(e){return Object(v.c)(e).bodyText}),O=a.a.div.withConfig({componentId:"rqdrsd-2"})(["position: relative;width: 100%;height: 100%;"]),I=a.a.div.withConfig({componentId:"rqdrsd-3"})(["width: 80%;margin: 80px auto;"]),k=a()(x.b).withConfig({componentId:"rqdrsd-4"})(["position: absolute;left: 0;width: 100%;top: 0;background: none;opacity: 0.4;"]),_=a()(b.d).withConfig({componentId:"rqdrsd-5"})(["","display: inline-block;@media (max-width: ","px) {align-self: stretch;}"],j,g.d-1),N=a.a.img.withConfig({componentId:"rqdrsd-6"})(["height: 147px;width: 140px;"]),E=a.a.div.withConfig({componentId:"rqdrsd-7"})(["position: relative;display: flex;flex-direction: column;justify-content: center;align-items: center;height: 100%;min-height: ","px;text-align: center;@media (max-width: ","px) {align-items: left;min-height: 0;}"],380,g.d-1),P=Object(d.createStructuredSelector)({language:h.w}),T=Object(s.connect)(P),F=function(e){var t=e.language,n=e.listingName,r=e.sort;return w(I,{},void 0,w(S,{},void 0,r===p.R.RISING&&Object(l.a)(t,"listings.emptySubredditRising.primary"),r!==p.R.RISING&&Object(l.a)(t,"listings.emptySubreddit.primary")),n&&!Object(m.a)(n)&&o.a.Children.toArray([w(C,{},void 0,r===p.R.RISING&&Object(l.a)(t,"listings.emptySubredditRising.secondary"),r!==p.R.RISING&&Object(l.a)(t,"listings.emptySubreddit.secondary")),w(_,{to:"/r/"+n+"/submit"},void 0,Object(l.a)(t,"listings.emptySubreddit.callToAction"))]))},L=function(e){return w(I,{},void 0,w(N,{src:u.a.assetPath+"/img/snoo_discovery@1x.png"}),w(S,{},void 0,Object(l.a)(e.language,"listings.emptyHomepage.primary")),w(_,{to:"/r/popular"},void 0,Object(l.a)(e.language,"listings.emptyHomepage.callToAction")))};t.a=a()(T(function(e){return w(E,{},void 0,w(k,{isLoading:!1,layout:f.e.Classic}),w(O,{},void 0,e.subreddit?o.a.createElement(F,e):o.a.createElement(L,e)))})).withConfig({componentId:"rqdrsd-8"})(["position: relative;display: flex;flex-direction: column;justify-content: center;align-items: center;height: 100%;min-height: ","px;text-align: center;@media (max-width: ","px) {align-items: left;min-height: 0;}"],380,g.d-1)},"./src/reddit/components/FrontpageSidebar/index.tsx":function(e,t,n){"use strict";n("./node_modules/react/index.js");var r,i=n("./node_modules/react-redux/es/index.js"),o=n("./node_modules/reselect/lib/index.js"),s=n("./src/app/strings/index.ts"),d=n("./src/reddit/components/IdCard/index.tsx"),c=n("./src/reddit/components/SidebarAd/index.tsx"),a=n("./src/reddit/components/SidebarContainer/index.tsx"),l=n("./src/reddit/components/SidebarSpacer/index.tsx"),u=n("./src/reddit/components/SidebarStickyBottom/index.tsx"),p=n("./src/reddit/components/Widgets/Aggregate/BestOCPosts/PostsList.tsx"),m=n("./src/reddit/helpers/overlay/index.ts"),f=n("./src/reddit/selectors/posts.ts"),g=n("./src/reddit/selectors/user.ts"),b=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),y=Object(o.createStructuredSelector)({language:g.w,recentPosts:f.B}),h=Object(i.connect)(y,function(e,t){return{openLightbox:function(t){return function(){return e(Object(m.a)(t.permalink))}}}})(function(e){var t=e.className,n=e.recentPosts,r=e.language;return n&&n.length?b(p.a,{className:t,headerText:Object(s.a)(r,"sidebar.recentLinks"),posts:n}):null}),x=n("./src/reddit/components/Widgets/Aggregate/Subreddits/index.tsx"),v=n("./src/reddit/selectors/subreddit.ts"),w=n("./src/lib/constants/index.ts"),j=n("./src/reddit/helpers/createBannerProperties/index.ts"),S=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,i){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});if(1===s)n.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),C=Object(o.createStructuredSelector)({trendingSubredditIds:v.x,currentUser:g.f,language:g.w});t.a=Object(i.connect)(C)(function(e){var t=0;return S(a.a,{className:e.className},void 0,S(d.b,{listingName:e.listingName}),S(l.a,{},void 0,S(c.a,{placement:w.d.ABOVE_THE_FOLD,listingName:e.listingName,position:j.a.FIRST,sizes:[w.f,w.g],placementIndex:t++})),function(e){return!(!e.trendingSubredditIds.length||e.currentUser&&!e.currentUser.showTrending)}(e)&&S(l.a,{},void 0,S(x.b,{subredditIds:e.trendingSubredditIds,title:Object(s.a)(e.language,"sidebar.trending.title")})),function(e){return!(!e.currentUser||!e.currentUser.showRecentPosts)}(e)&&S(l.a,{},void 0,S(h,{})),S(u.f,{listingName:e.listingName,placementIndex:t++}))})},"./src/reddit/components/Widgets/Aggregate/BestOCPosts/PostsList.tsx":function(e,t,n){"use strict";n("./node_modules/react/index.js");var r,i=n("./node_modules/react-redux/es/index.js"),o=n("./node_modules/reselect/lib/index.js"),s=n("./bundled-modules/styled-components/styled-components.min.js"),d=n.n(s),c=n("./src/app/strings/index.ts"),a=n("./src/lib/prettyPrintNumber/index.ts"),l=n("./src/lib/timeAgo/index.ts"),u=n("./src/reddit/components/Thumbnail/index.tsx"),p=n("./src/reddit/components/TrackingHelper/index.tsx"),m=n("./src/reddit/components/Widgets/Base/index.tsx"),f=n("./src/reddit/helpers/overlay/index.ts"),g=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),b=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),y=n("./src/reddit/selectors/user.ts"),h=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),x=d.a.p.withConfig({componentId:"s1c6ymkf-0"})(["","color: ",";margin-bottom: 4px;max-height: 36px;overflow: hidden;text-overflow: ellipsis;"],g.titleFontH5,function(e){return Object(b.c)(e).bodyText}),v=d.a.div.withConfig({componentId:"s1c6ymkf-1"})(["cursor: pointer;display: flex;padding-top: 12px;&:not(:last-child) {border-bottom: 2px solid ",";padding-bottom: 12px;}&:hover "," {text-decoration: underline;}"],function(e){return Object(b.c)(e).field},x),w=d.a.div.withConfig({componentId:"s1c6ymkf-2"})(["","border-radius: 4px;display: inline-block;flex: 0 0 65px;height: 49px;margin-right: 7px;width: 65px;"],u.c),j=d.a.div.withConfig({componentId:"s1c6ymkf-3"})(["display: flex;flex: 1;flex-direction: column;justify-content: center;overflow: hidden;"]),S=d.a.span.withConfig({componentId:"s1c6ymkf-4"})(["","color: ",";white-space: nowrap;& ~ &:before {content: '·';font-weight: bold;margin: 0 3px;}"],g.metadataFont,function(e){return Object(b.c)(e).actionIcon}),C=Object(o.createStructuredSelector)({language:y.w}),O=Object(i.connect)(C,function(e,t){return{openLightbox:function(t){return e(Object(f.a)(t.permalink))}}});t.a=O(Object(p.b)(function(e){var t=e.getClickEventFactory,n=e.headerText,r=e.language,i=e.openLightbox,o=e.posts,s=e.sendEvent;return h(m.c,{},void 0,h(m.a,{},void 0,n),o.map(function(e){return h(v,{onClick:function(){t&&s(t(e.postId)),i(e)}},e.id,h(w,{},void 0,h(u.b,{post:e})),h(j,{},void 0,h(x,{title:e.title},void 0,e.title),h("div",{},void 0,h(S,{},void 0,Object(c.b)(r,"posts.points.noun",e.score,{count:Object(a.a)(e.score)})),h(S,{},void 0,Object(c.b)(r,"posts.comments.noun",e.numComments,{count:Object(a.a)(e.numComments)})),h(S,{},void 0,Object(l.a)(r,e.created/1e3,!0,!0)))))}))}))},"./src/reddit/components/Widgets/Aggregate/Subreddits/index.tsx":function(e,t,n){"use strict";n("./node_modules/react/index.js");var r=n("./src/reddit/components/TrackingHelper/index.tsx"),i=n("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),o=n("./node_modules/react-redux/es/index.js"),s=n("./src/reddit/selectors/news.ts"),d=n("./src/reddit/selectors/subreddit.ts"),c=n("./node_modules/reselect/lib/index.js"),a=Object(o.connect)(Object(c.createStructuredSelector)({communities:d.d})),l=Object(o.connect)(Object(c.createStructuredSelector)({communities:s.b}));n.d(t,"a",function(){return f});var u,p=(u="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,r){var i=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===o)t.children=r;else if(o>1){for(var d=Array(o),c=0;c<o;c++)d[c]=arguments[c+3];t.children=d}return{$$typeof:u,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),m=function(e){return p(i.b,{className:e.className,communities:e.communities,sendEvent:e.sendEvent,getClickEventFactory:e.getClickEventFactory,getSubscribeEventFactoryHandler:e.getSubscribeEventFactoryHandler,title:e.title})},f=l(Object(r.b)(m));t.b=a(Object(r.b)(m))},"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return N}),n.d(t,"a",function(){return E});var r,i=n("./src/app/strings/index.ts"),o=n("./node_modules/react/index.js"),s=n.n(o),d=n("./node_modules/react-router-dom/es/index.js"),c=n("./src/reddit/components/SubscribeButton/index.tsx"),a=n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),l=n("./src/reddit/connectors/connectToLanguage.ts"),u=n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),p=n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),m=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),f=n("./bundled-modules/styled-components/styled-components.min.js"),g=n.n(f),b=n("./src/reddit/components/Widgets/CommunityList/index.m.less"),y=n.n(b),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),v=g.a.div.withConfig({componentId:"qge3kj-0"})(["height: 32px;"]),w="\n  border-radius: 100%;\n  height: 32px;\n  margin-right: 8px;\n  width: 32px;\n",j=g()(u.a).withConfig({componentId:"qge3kj-1"})(["",";background: ",";box-sizing: border-box;fill: ",";padding: 3px;"],w,function(e){return Object(m.c)(e).active},function(e){return Object(m.c)(e).lightText}),S=g.a.img.withConfig({componentId:"qge3kj-2"})(["",";"],w),C=g.a.div.withConfig({componentId:"qge3kj-3"})(["width: 100%;"]),O=g()(d.a).withConfig({componentId:"qge3kj-4"})(["display: block;font-size: 11px;font-weight: 500;line-height: 16px;overflow: hidden;text-overflow: ellipsis;width: 132px;&:hover {text-decoration: underline;}"]),I=Object(f.css)(["font-size: 10px;font-weight: 500;line-height: 12px;"]),k=g.a.p.withConfig({componentId:"qge3kj-5"})(["",""],I),_=g.a.p.withConfig({componentId:"qge3kj-6"})(["","font-weight: normal;"],I),N=function(e){return x(a.a,{className:e.className,styles:e.widget&&e.widget.styles,title:e.title},void 0,x(C,{},void 0,e.communities.map(function(t){return s.a.createElement(E,h({key:t.name},t,{getSubscribeEventFactory:e.getSubscribeEventFactoryHandler?e.getSubscribeEventFactoryHandler(t):void 0,widget:e.widget,sendEvent:e.sendEvent,type:t.type||"subreddit",onCommunityNameClick:e.getClickEventFactory?function(){return e.sendEvent(e.getClickEventFactory(t))}:void 0}))})))},E=Object(l.a)(function(e){return x("div",{className:y.a.communityItemContainer},void 0,x(p.a,{widthRight:100},void 0,x(v,{},void 0,e.iconUrl?x(S,{src:e.iconUrl}):x(j,{"data-redditstyle":!0})),x("div",{className:y.a.communityDescriptionContainer},void 0,x(O,{to:(t=e.name,n=e.type,("profile"===n?"/user/":"/r/")+t),onClick:e.onCommunityNameClick},void 0,function(e,t){return("profile"===t?"u/":"r/")+e}(e.name,e.type)),!!e.subscribers&&x(k,{},void 0,Object(i.b)(e.language,"listings.subscribers",e.subscribers))),e.widget?x(c.a,{getEventFactory:e.getSubscribeEventFactory,identifier:{name:e.name,type:e.type},sendEvent:e.sendEvent,small:!0,userIsSubscriber:!!e.isSubscribed,widget:e.widget}):x(c.b,{identifier:{name:e.name,type:e.type},getEventFactory:e.getSubscribeEventFactory,small:!0})),!!e.description&&x(_,{title:e.description,className:y.a.communityDescription},void 0,e.description));var t,n})},"./src/reddit/components/Widgets/CommunityList/index.m.less":function(e,t,n){e.exports={communityItemContainer:"_3NFddqqrzfM8noBES52Qcy",communityDescriptionContainer:"_3jEbHrUmHtMsZcfN-z_GpD",communityDescription:"_2IANzA2n-6eA5T8Tz0TEVE"}},"./src/reddit/icons/svgs/Circle/index.tsx":function(e,t,n){"use strict";n("./node_modules/react/index.js");var r,i=n("./bundled-modules/styled-components/styled-components.min.js"),o=n.n(i),s=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),d=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}});t.a=o()(function(e){return d("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 8"},void 0,d("g",{fill:"inherit",stroke:"none"},void 0,d("circle",{r:"4",cy:"4",cx:"4"})))}).withConfig({componentId:"mo8psv-0"})(["fill: ",";"],function(e){return Object(s.c)(e).actionIcon})},"./src/reddit/layout/threeCol/ExpandCenter/index.tsx":function(e,t,n){"use strict";n("./node_modules/react/index.js");var r,i=n("./bundled-modules/styled-components/styled-components.min.js"),o=n.n(i),s=n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),d=n("./src/reddit/helpers/styles/components/index.tsx"),c=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),a=o()(Object(d.a)()).withConfig({componentId:"s16tqqbe-0"})(["flex: 0 0 ",";"],function(e){return e.width?e.width+"px":""}),l=o.a.div.withConfig({componentId:"s16tqqbe-1"})(["flex: 1 1 100%;width: 100%;"]),u=o()(Object(d.a)()).withConfig({componentId:"s16tqqbe-2"})(["flex: 0 0 ",";"],function(e){return e.width?e.width+"px":""});t.a=o()(Object(s.a)(function(e){return c("div",{className:e.className},void 0,c(a,{width:e.widthLeft},void 0,e.children&&e.children[0]),c(l,{},void 0,e.children&&e.children[1]),c(u,{width:e.widthRight},void 0,e.children&&e.children[2]))},3)).withConfig({componentId:"s16tqqbe-3"})(["display: flex;flex-direction: row;"])},"./src/reddit/pages/Frontpage/index.tsx":function(e,t,n){"use strict";n.r(t);var r,i=n("./node_modules/lodash/fromPairs.js"),o=n.n(i),s=n("./node_modules/react/index.js"),d=n.n(s),c=n("./node_modules/react-redux/es/index.js"),a=n("./node_modules/reselect/lib/index.js"),l=n("./bundled-modules/styled-components/styled-components.min.js"),u=n.n(l),p=n("./src/lib/extractQueryParams/index.ts"),m=n("./src/lib/makeListingKey/index.ts"),f=n("./src/reddit/actions/frontpage.ts"),g=n("./src/reddit/components/EmptySubreddit.tsx"),b=n("./src/config.ts"),y=n("./src/app/strings/index.ts"),h=n("./src/reddit/constants/colors.ts"),x=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),v=n("./src/reddit/icons/svgs/Circle/index.tsx"),w=n("./src/reddit/icons/svgs/OutboundLink/index.tsx"),j=n("./src/reddit/layout/row/Inline/index.tsx"),S=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),C=n("./src/reddit/selectors/user.ts"),O=(r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,i){var o=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&o)for(var d in o)void 0===t[d]&&(t[d]=o[d]);else t||(t=o||{});if(1===s)t.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:r,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}),I=b.a.redditUrl+"/live/",k=u.a.a.withConfig({componentId:"s40zzda-0"})(["background-color: ",";border: 1px solid ",";border-radius: 4px;display: block;margin-bottom: 12px;padding: 16px;"],function(e){return Object(S.c)(e).body},h.a.warning),_=u()(v.a).withConfig({componentId:"s40zzda-1"})(["fill: ",";height: 8px;margin-right: 4px;width: 8px;"],h.a.warning),N=u.a.div.withConfig({componentId:"s40zzda-2"})(["","color: ",";margin-right: 8px;"],x.labelsFont,h.a.warning),E=u.a.div.withConfig({componentId:"s40zzda-3"})(["","color: ",";margin-left: 8px;"],x.metadataFont,function(e){return Object(S.c)(e).metaText}),P=u.a.div.withConfig({componentId:"s40zzda-4"})(["","color: ",";margin: 4px 0;"],x.titleFontH3,h.a.warning),T=u()(w.a).withConfig({componentId:"s40zzda-5"})(["fill: ",";height: 16px;margin-left: 4px;width: 16px;"],h.a.warning),F=u.a.div.withConfig({componentId:"s40zzda-6"})(["","color: ",";"],x.metadataFont,function(e){return Object(S.c)(e).metaText}),L=Object(a.createStructuredSelector)({featuredLiveThread:function(e){return e.live.featured},language:C.w}),q=Object(c.connect)(L)(function(e){return e.featuredLiveThread?O(k,{href:""+I+e.featuredLiveThread.id},void 0,O(j.a,{},void 0,O(_,{}),O(N,{},void 0,Object(y.a)(e.language,"live.live")),O(F,{},void 0,"·"),O(E,{},void 0,Object(y.b)(e.language,"live.viewers",e.featuredLiveThread.viewerCount))),O(P,{},void 0,e.featuredLiveThread.title,O(T,{})),O(F,{},void 0,e.featuredLiveThread.description)):null}),A=n("./src/reddit/components/FrontpageSidebar/index.tsx"),z=n("./src/reddit/components/LayoutNavigation/index.tsx"),$=n("./src/reddit/components/PostList/index.tsx"),H=n("./src/reddit/constants/parameters.ts"),R=n("./src/reddit/helpers/getDefaultFrontpageSort/index.ts"),B=n("./src/reddit/helpers/trackers/screenview.ts"),U=n("./src/reddit/layout/page/Listing/index.tsx"),W=n("./src/reddit/selectors/meta.ts"),D=n("./src/lib/constants/index.ts"),K=n("./src/lib/objectSelector/index.ts"),M=n("./src/reddit/constants/page.ts"),G=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,i){var o=t&&t.defaultProps,s=arguments.length-3;if(n||0===s||(n={}),n&&o)for(var d in o)void 0===n[d]&&(n[d]=o[d]);else n||(n=o||{});if(1===s)n.children=i;else if(s>1){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),V=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var J=u()(A.a).withConfig({componentId:"s1wnvq8j-0"})(["width: inherit;"]),Q=Object(a.createStructuredSelector)({queryParams:Object(K.a)(function(e,t){var n=t.location;return o()([].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(Object(p.a)(n.search))))}),sort:function(e,t){var n=t.match,r=Object(R.a)(e.user);return n.params.sort||r}}),Z=Object(a.createStructuredSelector)({countryMeta:W.a,geopopular:C.h}),X=Object(c.connect)(function(){return Object(a.createSelector)(Z,Q,function(e,t){var n=e.countryMeta,r=e.geopopular,i=t.queryParams,o=t.sort,s=H.m in i&&i[H.m].toUpperCase(),d="string"==typeof s&&s in D.Cb?D.Cb[s]:D.Db,c=Object(m.a)(M.a,o,i),a=n||D.u.Everywhere,l=r||a;return{countrySort:H.d in i?i[H.d].toUpperCase():l,listingKey:c,sort:o,timeSort:d}})},function(e,t){return{onLoadMorePosts:function(){return e(f.d({sort:t.match.params.sort}))}}}),Y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d.a.Component),V(t,[{key:"render",value:function(){var e=this;return G(U.d,{className:this.props.className,fitPageToContent:!0,contentNavBar:G(z.a,{baseUrl:"",countrySort:this.props.countrySort,sort:this.props.sort,timeSort:this.props.timeSort}),content:G(s.Fragment,{},void 0,G(q,{}),G($.d,{noPostsComponent:function(){return G(g.a,{listingName:M.b,sort:e.props.sort})},listingKey:this.props.listingKey,listingName:M.b,listingViewed:function(t,n){return Object(B.b)(e.props.listingKey,e.props.sort,n,t,e.props.timeSort)},onLoadMore:this.props.onLoadMorePosts},"listing")),sidebar:G(J,{listingKey:this.props.listingKey,listingName:M.b})})}}]),t}();t.default=X(Y)}}]);
//# sourceMappingURL=Frontpage.7a07f8ed348f9045dcca.js.map

}
/*
     FILE ARCHIVED ON 00:52:48 Aug 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:35:15 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.058
  cdx.remote: 0.096
  esindex: 0.009
  LoadShardBlock: 290.846 (6)
  PetaboxLoader3.datanode: 224.128 (7)
  load_resource: 120.824
  PetaboxLoader3.resolve: 86.691
*/