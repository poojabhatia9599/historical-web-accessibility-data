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

(window.webpackJsonp=window.webpackJsonp||[]).push([["Frontpage"],{"./src/reddit/components/News/BreakingNewsContainer/index.m.less":function(e,t,r){e.exports={titleWrapper:"eAp1JF1bdrJ8zYJzLCkgj",breakingNewsHeader:"_1w3ZRp6Jf4WFAtuXSTq_R-",buttonWrapper:"_2rd7JjqmXwo5sO8Q20kLlN",noNewsLink:"_3mCYorxWwoMlry7LTEOtzn",seeMoreButton:"_2DPgxLRkxAKK1LhMiFbPHK",hideButton:"_2dgWhMFiTjhxQ4Dd8plJbh"}},"./src/reddit/pages/Frontpage/index.tsx":function(e,t,r){"use strict";r.r(t);var n=r("./node_modules/babel-runtime/helpers/jsx.js"),s=r.n(n),o=r("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=r.n(o),a=r("./node_modules/babel-runtime/helpers/createClass.js"),d=r.n(a),c=r("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),l=r.n(c),p=r("./node_modules/babel-runtime/helpers/inherits.js"),u=r.n(p),g=r("./node_modules/babel-runtime/helpers/toConsumableArray.js"),m=r.n(g),h=r("./node_modules/lodash/fromPairs.js"),b=r.n(h),x=r("./node_modules/react/index.js"),f=r.n(x),v=r("./node_modules/react-redux/es/index.js"),w=r("./node_modules/reselect/lib/index.js"),y=r("./bundled-modules/styled-components/styled-components.min.js"),j=r.n(y),C=r("./src/lib/extractQueryParams/index.ts"),O=r("./src/lib/fastdom/index.ts"),k=r("./src/lib/makeListingKey/index.ts"),L=r("./src/lib/performanceTimings/index.tsx"),T=r("./src/reddit/actions/frontpage.ts"),N=r("./src/reddit/actions/news.ts"),I=r("./src/reddit/components/AccountCompleteness/index.tsx"),S=r("./src/reddit/components/CategoriesNavigation/index.tsx"),_=r("./src/reddit/components/EmptySubreddit.tsx"),P=r("./src/config.ts"),H=r("./src/app/strings/index.ts"),z=r("./src/reddit/constants/colors.ts"),F=r("./src/reddit/helpers/styles/mixins/fonts.tsx"),M=r("./src/reddit/models/Theme/NewColorSystem/index.ts"),U=j()(function(e){return s()("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 8 8"},void 0,s()("g",{fill:"inherit",stroke:"none"},void 0,s()("circle",{r:"4",cy:"4",cx:"4"})))}).withConfig({componentId:"mo8psv-0"})(["fill: ",";"],function(e){return Object(M.c)(e).actionIcon}),K=r("./src/reddit/icons/svgs/OutboundLink/index.tsx"),D=r("./src/reddit/layout/row/Inline/index.tsx"),B=r("./src/reddit/selectors/user.ts"),W=P.a.redditUrl+"/live/",A=j.a.a.withConfig({componentId:"s40zzda-0"})(["background-color: ",";border: 1px solid ",";border-radius: 4px;display: block;margin-bottom: 12px;padding: 16px;"],function(e){return Object(M.c)(e).body},z.a.warning),J=j()(U).withConfig({componentId:"s40zzda-1"})(["fill: ",";height: 8px;margin-right: 4px;width: 8px;"],z.a.warning),R=j.a.div.withConfig({componentId:"s40zzda-2"})(["","color: ",";margin-right: 8px;"],F.labelsFont,z.a.warning),q=j.a.div.withConfig({componentId:"s40zzda-3"})(["","color: ",";margin-left: 8px;"],F.metadataFont,function(e){return Object(M.c)(e).metaText}),E=j.a.div.withConfig({componentId:"s40zzda-4"})(["","color: ",";margin: 4px 0;"],F.titleFontH3,z.a.warning),V=j()(K.a).withConfig({componentId:"s40zzda-5"})(["fill: ",";height: 16px;margin-left: 4px;width: 16px;"],z.a.warning),Q=j.a.div.withConfig({componentId:"s40zzda-6"})(["","color: ",";"],F.metadataFont,function(e){return Object(M.c)(e).metaText}),X=Object(w.createStructuredSelector)({featuredLiveThread:function(e){return e.live.featured},language:B.H}),Y=Object(v.connect)(X)(function(e){return e.featuredLiveThread?s()(A,{href:""+W+e.featuredLiveThread.id},void 0,s()(D.a,{},void 0,s()(J,{}),s()(R,{},void 0,Object(H.a)(e.language,"live.live")),s()(Q,{},void 0,"·"),s()(q,{},void 0,Object(H.b)(e.language,"live.viewers",e.featuredLiveThread.viewerCount))),s()(E,{},void 0,e.featuredLiveThread.title,s()(V,{})),s()(Q,{},void 0,e.featuredLiveThread.description)):null}),Z=r("./src/reddit/components/FeedTitle/PopularTitle.tsx"),G=r("./src/reddit/components/FrontpageSidebar/index.tsx"),$=r("./src/reddit/components/HeroStories/index.tsx"),ee=r("./src/reddit/components/LayoutNavigation/index.tsx"),te=r("./src/reddit/components/ListingPostList/index.tsx"),re=r("./node_modules/babel-runtime/helpers/defineProperty.js"),ne=r.n(re),se=r("./src/lib/classNames/index.ts"),oe=r("./src/lib/partOfDay/index.ts"),ie=r("./src/reddit/components/ShowcaseCard/index.tsx"),ae=r("./src/reddit/components/TrackingHelper/index.tsx"),de=r("./src/reddit/constants/tracking.ts"),ce=r("./src/reddit/controls/Button/index.tsx"),le=r("./src/reddit/controls/InternalLink/index.tsx"),pe=r("./src/reddit/controls/Typography/index.tsx"),ue=r("./src/reddit/helpers/localStorage/index.ts"),ge=r("./src/reddit/helpers/trackers/news.ts"),me=r("./src/reddit/icons/svgs/News/index.tsx"),he=r("./src/reddit/routes/news/util.ts"),be=r("./src/reddit/components/News/BreakingNewsContainer/index.m.less"),xe=r.n(be),fe=j()(me.a).withConfig({componentId:"s1hr4vrt-0"})(["height: 24px;width: 24px;fill: ",";margin-right: 16px;"],z.a.alienblue),ve=j.a.div.withConfig({componentId:"s1hr4vrt-1"})(["color: ",";"],function(e){return Object(M.c)(e).titleText}),we=j()(pe.a).withConfig({componentId:"s1hr4vrt-2"})(["color: ",";"],function(e){return Object(M.c)(e).metaText}),ye=j()(ce.f).withConfig({componentId:"s1hr4vrt-3"})(["display: inline-block;margin-left: 12px;"]),je=j.a.button.withConfig({componentId:"s1hr4vrt-4"})(["color: ",";"],function(e){return Object(M.c)(e).metaText}),Ce=function(e){function t(e){i()(this,t);var r=l()(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.sendTelemetry=function(e){r.props.sendEvent(function(t){return{source:ge.a.newsHero,action:de.b.CLICK,noun:e}})},r.onHideComponentClick=function(){Object(ue.q)(),r.setState({didUserDisable:!0}),r.sendTelemetry("hide")},r.onTitleWrapperClick=function(){r.sendTelemetry("module_title")},r.onSeeMoreClick=function(){r.sendTelemetry("see_more")},r.state={didUserDisable:!1},r}return u()(t,e),d()(t,[{key:"componentDidMount",value:function(){this.setState({didUserDisable:Object(ue.b)()})}},{key:"render",value:function(){if(this.state.didUserDisable)return null;var e=this.props,t=e.children,r=e.language,n=e.shouldRenderNewsLink,o=void 0===n||n;return s()(ie.a,{},void 0,s()(ve,{className:xe.a.breakingNewsHeader},void 0,s()(le.a,{to:he.a,onClick:this.onTitleWrapperClick},void 0,s()(fe,{})),s()(le.a,{to:he.a,className:xe.a.titleWrapper,onClick:this.onTitleWrapperClick},void 0,s()(pe.d,{},void 0,Object(H.a)(r,"news.breakingNews."+(Object(oe.a)()||"default"))),s()(we,{},void 0,Object(H.a)(r,"news.fromCommunitiesAcrossReddit"))),s()("div",{className:Object(se.a)(xe.a.buttonWrapper,ne()({},xe.a.noNewsLink,!o))},void 0,s()(je,{className:xe.a.hideButton,onClick:this.onHideComponentClick},void 0,s()(pe.b,{},void 0,Object(H.a)(r,"news.labels.hide"))),o&&s()(ye,{to:he.a,onClick:this.onSeeMoreClick,className:xe.a.seeMoreButton},void 0,Object(H.a)(r,"news.seeMoreNews")))),t)}}]),t}(f.a.Component);Ce.displayName="BreakingNewsContainer";var Oe=Object(ae.b)(Ce),ke=r("./src/reddit/components/PromoBanners/index.tsx"),Le=r("./src/reddit/constants/experiments.ts"),Te=r("./src/reddit/constants/parameters.ts"),Ne=r("./src/reddit/constants/postLayout.ts"),Ie=r("./src/reddit/constants/promos.ts"),Se=r("./src/reddit/contexts/PageLayer/index.tsx"),_e=r("./src/reddit/helpers/chooseVariant/index.ts"),Pe=r("./src/reddit/helpers/trackers/screenview.ts"),He=r("./src/reddit/layout/page/Listing/index.tsx"),ze=r("./src/reddit/selectors/monthsToMinutes.ts"),Fe=r("./src/reddit/selectors/frontpage.ts"),Me=r("./src/reddit/selectors/meta.ts"),Ue=r("./src/reddit/selectors/news.ts"),Ke=r("./src/lib/constants/index.ts"),De=r("./src/lib/objectSelector/index.ts"),Be=r("./src/reddit/constants/page.ts"),We=j()(G.a).withConfig({componentId:"s1g0byz3-0"})(["width: inherit;"]),Ae=Object(Se.s)(),Je=Object(w.createStructuredSelector)({queryParams:Object(De.a)(function(e,t){var r=t.location;return b()([].concat(m()(Object(C.a)(r.search))))}),sort:function(e,t){var r=t.match,n=Object(Fe.a)(e);return r.params.sort||n}}),Re=Object(w.createStructuredSelector)({countryMeta:Me.a,geopopular:B.l}),qe=Object(w.createStructuredSelector)({isLoggedIn:B.B}),Ee=Object(w.createStructuredSelector)({haveHeroData:Ue.e,haveTopicData:Ue.f,heroListingKey:Ue.b,language:B.H,layout:Se.I,isUserInHeroTreatment:Ue.g,userLoid:B.W}),Ve=Object(v.connect)(function(){return Object(w.createSelector)(Re,Je,qe,Se.C,ze.e,Ee,function(e){return Object(_e.a)(e,Le.k)},function(e,t,r,n,s,o,i){var a=e.countryMeta,d=e.geopopular,c=t.queryParams,l=t.sort,p=r.isLoggedIn,u=Te.m in c&&c[Te.m].toUpperCase(),g="string"==typeof u&&u in Ke.Hb?Ke.Hb[u]:Ke.Ib,m=Object(k.a)(Be.a,l,c),h=a||Ke.u.Everywhere,b=d||h,x=Te.d in c?c[Te.d].toUpperCase():b;return Object.assign({countrySort:x,isLoggedIn:p,isPopular:n,listingKey:m,redesignLoggedOutCategoryVariant:i,sort:l,showAccountCompletenessInFeed:s,timeSort:g},o)})},function(e,t){return{onLoadMorePosts:function(){return e(T.d({sort:t.match.params.sort}))},setIsSignedUpHeroUserTrue:function(){return e(Object(N.g)())}}}),Qe=function(e){function t(){return i()(this,t),l()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isLoggedIn,r=e.setIsSignedUpHeroUserTrue,n=e.isUserInHeroTreatment,s=e.sort,o=e.userLoid;O.a.read(function(){var e=L.b.FrontPage+"-"+s;Object(L.c)(e,t)});var i=Object(ue.h)();!n&&(t&&o===i)?r():n&&Object(ue.w)(o)}},{key:"render",value:function(){var e=this,t=this.props.showAccountCompletenessInFeed,r=!this.props.isLoggedIn&&this.props.isPopular&&!!this.props.redesignLoggedOutCategoryVariant;return s()(He.d,{className:this.props.className,fitPageToContent:!0,contentNavBar:s()(f.a.Fragment,{},void 0,s()(ee.a,{baseUrl:"",countrySort:this.props.countrySort,sort:this.props.sort,timeSort:this.props.timeSort}),s()(S.a,{baseUrl:""})),content:s()(x.Fragment,{},void 0,s()(Y,{}),this.props.isUserInHeroTreatment&&this.props.haveHeroData&&this.props.haveTopicData?s()(Oe,{language:this.props.language,shouldRenderNewsLink:this.props.layout!==Ne.e.Large},void 0,s()($.b,{listingKey:this.props.heroListingKey,isCompactMode:this.props.layout===Ne.e.Large})):null,r&&s()(Z.a,{language:this.props.language}),t?s()(I.a,{}):s()(ke.a,{location:Ie.h.FrontPage}),s()(te.a,{noPostsComponent:function(){return s()(_.a,{listingName:Be.b,sort:e.props.sort})},listingKey:this.props.listingKey,listingName:Be.b,listingViewed:function(t,r){return Object(Pe.c)(e.props.listingKey,e.props.sort,r,t,e.props.timeSort)},onLoadMore:this.props.onLoadMorePosts},"listing")),sidebar:s()(We,{listingKey:this.props.listingKey,listingName:Be.b})})}}]),t}(f.a.Component);t.default=Ae(Ve(Qe))}}]);
//# sourceMappingURL=Frontpage.7bd472251f4aea026105.js.map

}
/*
     FILE ARCHIVED ON 22:24:39 Sep 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:35:34 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.091
  exclusion.robots.policy: 0.076
  cdx.remote: 0.127
  esindex: 0.023
  LoadShardBlock: 228.079 (6)
  PetaboxLoader3.datanode: 141.79 (7)
  load_resource: 68.731
  PetaboxLoader3.resolve: 29.668
*/