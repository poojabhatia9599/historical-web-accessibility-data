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

(window.webpackJsonp=window.webpackJsonp||[]).push([["Trending"],{"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less":function(e,t,n){e.exports={metaLine:"_2bW-gLhebJzurGWNnxpl0I",bodyWrapper:"TRQWddBXkEbkcG_ubUuna",mediaWrapper:"_1Gl3uwbMHh5VhlU0JATHu0",textWrapper:"YH565aQWcKKY53qc9qHsm",meta:"_363wpVC6QeLO7Vq0SwQcOg",metaWrapper:"_232eNhzD3iKHOssx14WnYG",thumbnail:"_3ot5Uav1x5Oa8hH19Mlogk",trendingPost:"_3GfG_jvS9X-90Q_8zU4uCu",flatlist:"_2i5CgtwVkYOwV-M92BNHuo",title:"_10WwrR6QeKoqfxT3UBj0Qq",titleNoDescription:"_2RETtzv0N74uYf3vCRgQsj",spacer:"dnGYcjdXDdH17kki2-FYy",description:"_2Jjv0TAohMSydVpAgyhjhA",flexSpacer:"_2X1uOOj7bjYyM2hV3o5Eou"}},"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less":function(e,t,n){e.exports={container:"_1wTtHt-VeTJLbmZj77AmN3",trendingPosts:"cslJXYWf-T5weuzAPoO3X",trendingPost:"_27FJDku8We0nUkyLPhJFnD"}},"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx":function(e,t,n){"use strict";n.r(t);var o,s=n("./node_modules/react/index.js"),r=n.n(s),i=n("./node_modules/react-redux/es/index.js"),d=n("./node_modules/reselect/lib/index.js"),c=n("./src/reddit/actions/page.ts"),a=n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),l=n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),p=n("./bundled-modules/styled-components/styled-components.min.js"),b=n.n(p),m=n("./src/reddit/components/SubredditNameLink/index.tsx"),g=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),u=n("./src/reddit/helpers/trackers/discoveryUnit.ts"),h=n("./src/config.ts"),f=n("./node_modules/polished/dist/polished.es.js"),y=n("./src/lib/addQueryParams/index.ts"),x=n("./src/reddit/components/DiscoveryUnit/Layout/Posts/LargePost/index.tsx"),v=n("./src/reddit/components/MiniCardPost/index.tsx"),j=n("./src/reddit/components/Translated/index.tsx"),k=n("./src/reddit/constants/zIndex.ts"),w=n("./src/reddit/contexts/PageLayer/index.tsx"),O=n("./src/reddit/controls/InternalLink/index.tsx"),P=n("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),S=n("./src/reddit/models/Theme/index.ts"),T=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),I=n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),C=n.n(I),D=n("./src/reddit/components/MiniCardPost/index.m.less"),U=n.n(D),_=n("./src/reddit/controls/Search/index.m.less"),N=n.n(_),L=n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),W=n.n(L),V=(o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,n,s){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];t.children=c}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}});const $=b.a.div.withConfig({componentId:"s1inann8-0"})(["border-radius: 8px;",";background-color: ",";background-size: cover;height: 178px;fill: ",";overflow: hidden;position: relative;width: 100%;&::before {background-image: ",";content: '';position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: ",";}."," {margin-left: 0;}."," {padding: 12px;position: absolute;bottom: 0;z-index: ",";}."," {border: 1px solid ",";}"],e=>e.backgroundImage?`background: ${Object(S.g)(Object(T.c)(e).body,e.backgroundImage||Object(T.c)(e).banner.backgroundImage,"cover")}`:`&::after {\n        background-image: url(${h.a.assetPath}/img/trending-placeholder.png);\n        background-size: cover;\n        opacity: 0.3;\n        content: "";\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        position: absolute;\n      } `,e=>e.backgroundImage?"transparent":Object(T.c)(e).body,e=>e.backgroundImage?"inherit":Object(T.c)(e).line,e=>e.backgroundImage?"linear-gradient(0deg,\n          rgba(0,0,0,1) 0%,\n          rgba(0,0,0,0.8) 25%,\n          rgba(0,0,0,0.6) 50%,\n          rgba(0,0,0,0.4) 75%,\n          rgba(0,0,0,0.2) 100%\n        )":`linear-gradient(\n          ${Object(f.e)(Object(T.c)(e).body,.2)},\n          ${Object(f.e)(Object(T.c)(e).body,.3)},\n          ${Object(f.e)(Object(T.c)(e).body,.4)},\n          ${Object(f.e)(Object(T.c)(e).body,.6)},\n          ${Object(f.e)(Object(T.c)(e).body,.8)},\n          ${Object(T.c)(e).body}\n        )`,k.e,C.a.subText,U.a.innerContainer,k.h,N.a.icon,e=>Object(T.c)(e).line),M=b.a.div.withConfig({componentId:"s1inann8-1"})(["color: ",";"],e=>e.backgroundImage?Object(T.c)(e).lightText:Object(T.c)(e).bodyText),H=Object(w.u)(),Q=b()(e=>{const t=e.onPostClick,n=e.trendingPost,o=e.trendingSearch,s=o.isWhitelisted&&n&&n.preview&&n.preview.url||void 0;return V(M,{className:W.a.trendingPost,backgroundImage:s},void 0,V(O.a,{to:Object(y.a)("/search",{q:e.trendingSearch.rawQuery,source:"trending"})},void 0,V($,{className:U.a.backgroundWrapper,backgroundImage:s},void 0,V("div",{className:U.a.innerContainer,onClick:t},void 0,V("h2",{className:n?W.a.title:W.a.titleNoDescription},void 0,e.title),n&&o.isWhitelisted?V("div",{className:W.a.description},void 0,n.title):V("div",{className:W.a.spacer}),o.subredditInfo&&V(P.a,{iconUrl:o.subredditInfo.icon||void 0,suffix:V(j.a,{msgId:"search.subredditMetaData.andMore",replacements:{displayText:o.subredditInfo.displayText}})})))))}).withConfig({componentId:"s1inann8-2"})(["",";border-color: ",";color: ",";display: inline-flex;flex: 1;"],x.b,e=>Object(T.c)(e).line,e=>Object(T.c)(e).bodyText);var z=H(Object(v.b)(Q)),A=n("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/index.m.less"),J=n.n(A),Y=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,s){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var d in r)void 0===n[d]&&(n[d]=r[d]);else n||(n=r||{});if(1===i)n.children=s;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();const q=b.a.div.withConfig({componentId:"s17ljb5o-0"})([""," {",";}"],m.a,g.titleFontH6);var G=Object(i.connect)(null,e=>({trackPostView:t=>e((e,n)=>u.q(n(),t)),trackPostClick:t=>e((e,n)=>t.post?u.p(n(),t):null)}))(e=>Y(q,{className:J.a.container},void 0,Y("div",{className:J.a.trendingPosts},void 0,e.trendingSearches.map((t,n)=>(t.post&&e.trackPostView(t),Y(z,{className:J.a.trendingPost,forceLoadMedia:!0,showMetaLine:!1,title:t.searchQuery,trendingSearch:t,trendingPost:t.post,postId:t.post?t.post.id:"",onPostClick:()=>e.trackPostClick(t)},t.post?t.post.id:n)))))),X=n("./src/reddit/contexts/ApiContext.tsx"),F=n("./src/reddit/endpoints/trending/index.ts"),R=n("./src/reddit/selectors/trending.ts"),K=n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),B=n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),E=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,s){var r=t&&t.defaultProps,i=arguments.length-3;if(n||0===i||(n={}),n&&r)for(var d in r)void 0===n[d]&&(n[d]=r[d]);else n||(n=r||{});if(1===i)n.children=s;else if(i>1){for(var c=Array(i),a=0;a<i;a++)c[a]=arguments[a+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}();const Z=Object(i.connect)(()=>Object(d.createStructuredSelector)({trendingItems:R.a}),(e,t)=>({onTrendingItemsSuccess:t=>e(Object(c.T)({items:t}))}));t.default=Object(X.b)(Z(class extends r.a.Component{constructor(e){super(e),this.fetchTrendingPosts=(async()=>{const e=await Object(F.a)(this.props.apiContext());if(e.ok){const t=Object(F.b)(e);this.props.onTrendingItemsSuccess(t),this.isLoading=!1}}),this.isLoading=!1}componentDidMount(){this.isLoading=!0,this.fetchTrendingPosts()}render(){const e=E(r.a.Fragment,{},void 0,E(l.a,{},void 0,E(j.a,{msgId:"discoveryUnits.trendingToday"})));return this.props.trendingItems&&0!==this.props.trendingItems.length?E(K.a,{className:this.props.className,showCardView:this.props.showCardView},void 0,E(a.a,{header:e},void 0,E(G,{trendingSearches:this.props.trendingItems}))):E(B.a,{showCardView:!!this.props.showCardView})}}))}}]);
//# sourceMappingURL=Trending.f9040c500f0425ef82e3.js.map

}
/*
     FILE ARCHIVED ON 15:41:47 Mar 09, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:22 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.158
  exclusion.robots.policy: 0.136
  cdx.remote: 0.138
  esindex: 0.015
  LoadShardBlock: 144.412 (6)
  PetaboxLoader3.datanode: 150.83 (7)
  load_resource: 806.849
  PetaboxLoader3.resolve: 767.805
*/