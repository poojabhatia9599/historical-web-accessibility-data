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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~900871b8"],{"./src/lib/intersectionObserver/index.ts":function(e,t,i){"use strict";let s;i.d(t,"a",function(){return n}),i.d(t,"b",function(){return r});const o=new Map,a=new Map;"undefined"!=typeof window&&(i("./node_modules/intersection-observer/intersection-observer.js"),s=new IntersectionObserver(e=>{e.forEach(e=>{const t=e.target,i=e.intersectionRatio>0;if(i!==!!a.get(t)){a.set(t,i);const s=o.get(t);if(s){s(e,i&&!!a.get(t))}}})},{threshold:[.001]}));const n=(e,t)=>{try{o.set(e,t),s&&s.observe(e)}catch(i){0}},r=e=>{try{o.delete(e),s&&s.unobserve(e)}catch(t){0}}},"./src/lib/onFocusAndVisibilityChange/index.ts":function(e,t,i){"use strict";var s,o=i("./node_modules/brcast/dist/brcast.es.js"),a=i("./node_modules/lodash/findKey.js"),n=i.n(a);!function(e){e.Hidden="hidden",e.Visible="visible"}(s||(s={}));const r={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};let d=!1;const l=Object(o.a)({documentInFocus:!0});!function(){if(!d){const e=n()(r,(e,t)=>void 0!==document[t]);e&&document.addEventListener(r[e],()=>{l.setState({documentInFocus:document.visibilityState!==s.Hidden})}),d=!0}}(),t.a={subscribe:e=>{return l.subscribe(e)},unsubscribe:e=>{l.unsubscribe(e)}}},"./src/reddit/components/Media/RichTextContainer/index.m.less":function(e,t,i){e.exports={richTextContainer:"Chtkt3BCZQruf0LtmFg2c",richTextContainerTitleOnly:"_2XNPI46MXRfDdsSoDqaksI",richTextContainerFull:"_3xX726aBn29LDbsDtzr_6E",placeholder:"_1aLU7RPNLdvfcbaNdcN11x",placeholderParagraph:"Owi9iYzjyVpDq_0YbCdJY"}},"./src/reddit/components/Media/index.m.less":function(e,t,i){e.exports={hiddenLink:"_3dhFVFchWAAFXfLFTa94n9",displayNone:"_1Q2mF3u7v9hBVu_4bkC7R4",tweetPlaceholder:"_2IH8Z3uOFGn-TNLufw92zH",tweetEmbedBox:"_3G3xLNIwS59eiRVMICfR7x",isInvisible:"_1kw4-YNb840sdETnjL3_D3",tweetDeleted:"_2PLbyT4mrdGJGH5LY9Eotl"}},"./src/reddit/components/Media/index.tsx":function(e,t,i){"use strict";var s=i("./node_modules/lodash/debounce.js"),o=i.n(s),a=i("./node_modules/react/index.js"),n=i.n(a),r=i("./src/lib/classNames/index.ts"),d=i("./src/lib/CSSVariableProvider/withTheme.tsx"),l=i("./src/lib/env/index.ts"),c=i("./src/lib/intersectionObserver/index.ts"),h=i("./src/lib/isUrl/index.ts"),p=i("./src/lib/onFocusAndVisibilityChange/index.ts"),u=i("./src/lib/permalinkToOverlayLocation/index.ts"),m=i("./src/lib/raven/index.ts"),b=i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),g=i("./src/reddit/components/Media/EmbedBox/index.tsx"),f=i("./src/reddit/components/Media/ImageBox/index.tsx"),x=i("./src/reddit/components/Media/MediaContainer/index.tsx"),w=i("./src/reddit/constants/componentSizes.ts"),v=i("./src/reddit/models/Media/index.ts"),E=i("./node_modules/react-redux/es/index.js"),C=i("./src/reddit/actions/post.ts"),y=i("./src/reddit/helpers/styles/mixins/loading.ts"),O=i("./src/reddit/components/Media/RichTextContainer/index.m.less"),S=i.n(O);var I=Object(E.b)(null,e=>({onLoadRichTextContentIfNeeded:t=>e(Object(C.q)(t))}))(class extends n.a.Component{componentDidMount(){this.loadRichTextContentIfNeeded()}loadRichTextContentIfNeeded(){this.props.canLoadContent&&this.props.isExpando&&this.props.onLoadRichTextContentIfNeeded(this.props.postId)}render(){const e=Object(y.a)({isLoading:!0});return n.a.createElement("div",{className:S.a.placeholder},[1,2,3].map(t=>n.a.createElement("div",{key:t,className:S.a.placeholderParagraph},n.a.createElement("div",{className:e}),n.a.createElement("div",{className:e}),n.a.createElement("div",{className:e}))))}}),j=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i};var M=e=>{var t=e.canLoadContent,i=e.children,s=e.className,o=e.isCommentsPage,a=e.isMediumHeight,d=e.isRichTextTruncated,l=e.isExpando,c=e.isTitleOnly,h=e.postId,p=e.showFull,u=j(e,["canLoadContent","children","className","isCommentsPage","isMediumHeight","isRichTextTruncated","isExpando","isTitleOnly","postId","showFull"]);const m=p?S.a.richTextContainerFull:c?S.a.richTextContainerTitleOnly:S.a.richTextContainer,b={};p||(b.maxHeight=c?`${v.l}px`:a?`${v.k}px`:`${v.j}px`),o&&(b.maxWidth=`${w.e}px`);const g=d&&p;return n.a.createElement("div",Object.assign({className:Object(r.a)(m,s),style:b},u),i,g&&n.a.createElement(I,{canLoadContent:!!t,isExpando:l,postId:h}))},N=i("./src/reddit/components/Media/VideoBox/index.tsx"),T=i("./src/reddit/components/PlayButton/index.tsx"),L=i("./src/reddit/helpers/styles/postBackgroundColor.ts"),P=i("./src/reddit/helpers/styles/smartTextColor.ts"),F=i("./src/reddit/components/RawHTMLDisplay/index.tsx"),W=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(i[s[o]]=e[s[o]])}return i};var D=Object(d.a)(e=>{var t=e.flairStyleTemplate,i=W(e,["flairStyleTemplate"]);return n.a.createElement(F.a,Object.assign({style:{color:Object(P.a)(Object(L.a)(Object.assign({flairStyleTemplate:t},i)))}},i))}),V=i("./src/reddit/components/RichTextJson/index.tsx"),B=i("./src/reddit/constants/screenWidths.ts"),R=i("./src/reddit/helpers/canPreviewSelfText/index.ts"),H=i("./src/reddit/helpers/getRichTextContent.ts"),k=i("./src/reddit/helpers/postHasSelfText/index.ts"),A=i("./src/lib/redditId/index.ts");function _(e,t){const i=function e(t,i){let s=!1;let o=[];try{for(const a of t)if("link"===a.e&&a.u&&a.u.includes(`https://web.archive.org/web/20190901082604/https://www.reddit.com/poll/${i}`))s=!0;else if(a.c&&"string"!=typeof a.c){const t=e(a.c,i);t.found?(s=!0,("par"!==a.e||t.updated.length)&&o.push(Object.assign({},a,{c:t.updated}))):o.push(a)}else o.push(a)}catch(a){s=!1,o=[]}return{found:s,updated:s?o:t}}(e.document,Object(A.c)(t));return i.found?{document:i.updated}:e}var G=i("./src/reddit/i18n/utils.ts"),U=i("./src/reddit/selectors/experiments/postCleanup.ts");const $=(e,t,i,s)=>{const o=e/t,a=i/s;return Math.abs(o-a)<.03},J=(e,t)=>{for(let i=0;i<t.length;i++){const s=t[i];if(s.width>=e)return s}},z=(e,t,i)=>{for(let s=0;s<i.length;s++){const o=i[s];if(o.width>=v.e/2&&$(e,t,o.height,o.width))return o}},X=e=>{for(let t=0;t<e.length;t++){const i=e[t];if(i.height>=v.e||i.width>=v.f)return i}};var Y=i("./src/reddit/components/Media/index.m.less"),q=i.n(Y),Q=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],s=!0,o=!1,a=void 0;try{for(var n,r=e[Symbol.iterator]();!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(d){o=!0,a=d}finally{try{!s&&r.return&&r.return()}finally{if(o)throw a}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const Z=1200,K=350,ee=100,te=300,ie="https://web.archive.org/web/20190901082604/https://www.redditmedia.com",se=75,oe="player.js",ae=w.t+w.s,ne=e=>e.isVisible?e.children:n.a.createElement("div",{className:q.a.displayNone},e.children),re=new Set([v.o.EMBED,v.o.GIFVIDEO,v.o.VIDEO]),de=e=>!!e.media&&re.has(e.media.type),le=new Set([v.o.EMBED,v.o.GIFVIDEO,v.o.IMAGE,v.o.VIDEO]),ce=({post:e,postCleanupVariant:t})=>!!e.media&&le.has(e.media.type)||Object(U.c)(t)&&Object(U.b)(e);t.a=Object(d.a)(class extends n.a.Component{constructor(e){super(e),this.pauseContent=(()=>{this.shouldFocusContentDebouncer(!1)}),this.stopContent=(()=>{const e=this.props.post.media;if(e&&v.d.has(e.type)){if(this.iframe){const t=e.type===v.o.EMBED?e.provider:null;this.pauseEmbed(this.iframe,t)}this.setState(e=>e.shouldStop?null:{shouldStop:!0})}}),this.handleVisibilityChange=(e=>{const t=this.state.shouldPause,i=this.props.autoplayPref;this.iframe&&(t||!i&&e.documentInFocus||this.toggleEmbedAutoplay(this.iframe,!e.documentInFocus)),this.setState({forcePause:!e.documentInFocus})}),this.focusContent=(()=>{this.shouldFocusContentDebouncer(!0)}),this.loadContent=(()=>{this.setState(e=>e.canLoadContent?null:{canLoadContent:!0})}),this.unmountContent=(()=>{}),this.contentIsHeavyToMount=(()=>{const e=this.props.post.media;return!!e&&v.d.has(e.type)}),this.shouldFocusContentDebouncer=o()(e=>{const t=this.props.post.media,i=this.props.autoplayPref;if(t&&v.d.has(t.type)){if(this.iframe){const s=t.type===v.o.EMBED?t.provider:null;s&&!v.r.has(s)?!i&&e||this.toggleEmbedAutoplay(this.iframe,!e):e||this.pauseEmbed(this.iframe,s)}e?this.setState(e=>e.shouldPause||!e.canLoadContent?{canLoadContent:!0,shouldPause:!1,shouldStop:!1}:null):this.setState(e=>e.shouldPause?null:{shouldPause:!0})}},250,{leading:!0}),this.toggleEmbedAutoplay=((e,t)=>{if(e.contentWindow){const i=t?v.g.Pause:v.g.Play;e.contentWindow.postMessage({context:oe,method:i},ie),e.contentWindow.postMessage({context:oe,method:v.g.Mute},ie)}}),this.pauseEmbed=((e,t)=>{e.contentWindow&&(t===v.u.YouTube?e.contentWindow.postMessage(JSON.stringify({event:"command",func:v.y.Pause}),ie):e.contentWindow.postMessage({context:oe,method:v.g.Pause},ie))}),this.onIframeLoaded=(()=>{const e=this.props.post.media,t=this.props.autoplayPref,i=e&&e.type===v.o.EMBED?e.provider:null;if(this.iframe&&i&&!v.r.has(i)){const e=this.state.shouldPause;(t||e)&&this.toggleEmbedAutoplay(this.iframe,e)}}),this.onImageBoxClick=(e=>{this.props.isListing||!this.shouldBlur()||this.state.isRevealed||(this.setState({isRevealed:!0}),e.preventDefault(),e.stopPropagation())}),this.storeChildRef=(e=>{this.iframe=e,this.iframe&&this.props.post.media&&"embed"===this.props.post.media.type&&this.props.post.media.provider===v.u.Twitter&&c.a(this.iframe,(e,t)=>{this.iframe&&this.iframe.contentWindow&&this.props.post.media&&"embed"===this.props.post.media.type&&!this.props.post.media.height&&t&&this.iframe.contentWindow.postMessage("twitter-measure-requested",ie)})}),this.updateDimensions=(()=>{this.setState({viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}),this.isSpoiler=(()=>this.props.post.isSpoiler||!(!this.props.crosspost||!this.props.crosspost.isSpoiler)),this.isNSFW=(()=>this.props.post.isNSFW||!(!this.props.crosspost||!this.props.crosspost.isNSFW)),this.state={canLoadContent:e.shouldLoad||!1,forcePause:!1,isRevealed:!1,shouldPause:void 0===e.shouldPause||e.shouldPause,shouldStop:void 0===e.shouldStop||e.shouldStop,viewportHeight:v.e,viewportWidth:v.f}}componentWillMount(){"undefined"!=typeof window&&(this.updateDimensions(),window.addEventListener("resize",this.updateDimensions))}componentDidMount(){de(this.props.post)&&(this.visibilityChangeSubscriptionId=p.a.subscribe(e=>{this.handleVisibilityChange(e)})),this.props.scrollerItemRef&&ce(this.props)&&this.props.scrollerItemRef(this,this.state.canLoadContent)}componentWillUnmount(){this.visibilityChangeSubscriptionId&&p.a.unsubscribe(this.visibilityChangeSubscriptionId),this.props.scrollerItemRef&&ce(this.props)&&this.props.scrollerItemRef(void 0),window.removeEventListener("resize",this.updateDimensions),this.iframe&&this.props.post.media&&"embed"===this.props.post.media.type&&this.props.post.media.provider===v.u.Twitter&&c.b(this.iframe)}componentWillReceiveProps(e){!this.state.canLoadContent&&e.shouldLoad&&this.setState({canLoadContent:!0}),void 0!==e.shouldPause&&e.shouldPause!==this.props.shouldPause&&this.shouldFocusContentDebouncer(!e.shouldPause)}getVideoExpandoMaxDimensions(){let e,t=Math.max(v.i,this.state.viewportHeight),i=Math.min(Z,16*t/9);i===Z&&(t=9*Z/16),e=this.state.viewportWidth>=B.d?this.state.viewportWidth<w.n?this.state.viewportWidth-ae-2*se:this.state.viewportWidth-ae-w.f-2*se:this.state.viewportWidth-2*se;const s=this.state.viewportHeight-2*se;if(i>e)t*=e/i,i=e;else if(t>s){const e=s/t;t=s,i*=e}return{maxVideoHeight:t,maxVideoWidth:i}}getVideoMaxDimensions(e){let t=v.m,i=v.n;return e.isExpando?this.getVideoExpandoMaxDimensions():(e.isPromotedTrend&&(t=v.s,i=v.t),{maxVideoHeight:t,maxVideoWidth:i})}getMediaInfo(e){const t=e.availableWidth,i=e.post,s=i.media&&i.media.obfuscated||"";let o=i.media&&!Object(v.F)(i.media)?i.media.content:"";var a=!i.media||Object(v.D)(i.media)||Object(v.E)(i.media)?[0,0]:[i.media.height,i.media.width],n=Q(a,2);let r=n[0],d=n[1];if(t&&i.media&&(i.media.type===v.o.IMAGE||i.media.type===v.o.GIFVIDEO)){const e=J(t,i.media.resolutions);e&&(o=e.url,d=e.width,r=e.height)}else if(t&&i.preview&&Object(U.c)(e.postCleanupVariant)&&Object(U.b)(i))o=i.preview.url,d=i.preview.width,r=i.preview.height;else if(i&&i.media&&(!e.isListing||e.isExpando)&&(i.media.type===v.o.IMAGE||i.media.type===v.o.GIFVIDEO)){let e;(e=Object(f.b)(i.media.height,i.media.width)&&Object(f.c)(i.media.height)?z(i.media.height,i.media.width,i.media.resolutions):X(i.media.resolutions))&&(o=e.url,d=e.width,r=e.height)}if(e.isExpando)if(d>this.state.viewportWidth)r*=this.state.viewportWidth/d,d=this.state.viewportWidth;else if(r>this.state.viewportHeight){const e=this.state.viewportHeight/r;r=this.state.viewportHeight,d*=e}var l=this.getVideoMaxDimensions(e);const c=l.maxVideoHeight,h=l.maxVideoWidth;if(i.media&&i.media.type===v.o.VIDEO){const t=r/d;e.isExpando?(r=c,d=h):t>v.c?(r=c,d=Math.min(Math.max(c/t,v.q),h)):(r=Math.min(Math.max(h*t,v.p),c),d=h)}i.media&&i.media.type===v.o.EMBED&&e.isExpando&&i.media.provider!==v.u.Twitter&&(r=c,d=h);let p=!1;if(e.isMiniCard){const e=r/d;p=Math.abs(e-v.c)>.01}return{source:o,obfuscated:s,width:d,height:r,needsBackgroundBlur:p}}shouldBlur(){var e=this.props;const t=e.isExpando,i=e.isOverlay,s=e.theme,o=this.isNSFW(),a=this.isSpoiler();return!(t||this.state.isRevealed||i)&&(o&&!s.subredditContext.shouldShowNSFWContent||a)}render(){var e=this.props;const t=e.className,i=e.crosspost,s=e.flairStyleTemplate,o=e.forceAspectRatio,a=e.isCommentsPage,d=e.isExpando,c=e.isListing,p=e.isNotCardView,w=e.isMediumHeight,E=e.isTitleOnly,C=e.post,O=e.postCleanupVariant,S=e.showCentered;var I=e.showFull;const j=void 0!==I&&I;var L=this.state;const P=L.canLoadContent,F=L.forcePause,W=L.shouldPause,B=L.shouldStop,$=Object(U.c)(O)&&Object(U.b)(C);if(!C.media&&!$)return null;const J=F||W,z=B;var X=this.getMediaInfo(this.props);const Y=X.source,Q=X.obfuscated,Z=X.height,ie=X.width,oe=X.needsBackgroundBlur,ae={showCentered:S,isListing:c,showFull:j,height:Z,width:ie},re=Object.assign({},ae,{forceAspectRatio:o,className:t}),de=this.shouldBlur(),le=!(!C.isSponsored||!C.source);if(Q&&de)return n.a.createElement(x.a,Object.assign({},re,{blurSrc:Q}),n.a.createElement(ne,{isVisible:P},n.a.createElement(f.a,Object.assign({},ae,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isListing:c,isNSFW:this.isNSFW(),isSpoiler:this.isSpoiler(),isVideoThumbnail:!!C.media&&C.media.type===v.o.VIDEO,onClick:this.onImageBoxClick,postId:C.id,shouldBlur:de,source:Q,outboundUrl:le&&C.source.outboundUrl||void 0,originalSource:Y}))));if($){const e=this.state.viewportHeight-2*se,t=this.state.viewportWidth-2*se,s=C.preview&&Object(h.a)(C.preview.url)?C.preview.url:Y;return n.a.createElement(x.a,Object.assign({},re,{blurSrc:oe?s:void 0,isExpando:!!d}),n.a.createElement(ne,{isVisible:P},n.a.createElement(f.a,Object.assign({},ae,{isCrosspost:!!i,isExpando:d,isListing:c,isNSFW:this.isNSFW(),isSpoiler:this.isSpoiler(),maxHeight:d?e:void 0,maxWidth:d?t:void 0,postId:C.id,shouldBlur:de,source:s,outboundUrl:le&&C.source.outboundUrl||void 0,originalSource:s}))))}if(!C.media)return null;switch(C.media.type){case v.o.RTJSON:const e=Object(H.a)(C,null);if(null===e)return;return j||Object(R.a)(C)?n.a.createElement(M,{canLoadContent:P,className:t,"data-click-id":"text",isCommentsPage:a,isExpando:d,isMediumHeight:w,isRichTextTruncated:C.media.isRichtextPreview,isTitleOnly:E,postId:C.id,showFull:j},n.a.createElement(V.a,{flairStyleTemplate:s,content:C.isMeta?_(e,C.id):e,mediaMetadata:C.media.mediaMetadata,renderingObjectInfo:C,renderMediaAsLinks:c})):null;case v.o.TEXT:if(Object(k.a)(C)){const e="Text post should not include body content";return Object(m.c)(e,{extra:{info:{post:C,isListing:c,isCommentsPage:a}}}),Object(l.a)()&&console.log(`${C.id}: ${e}`),n.a.createElement(M,{postId:C.id,className:t,"data-click-id":"text",isCommentsPage:a,showFull:j},n.a.createElement(D,{flairStyleTemplate:s,html:C.isMeta?function(e,t,i){return e.replace(`href="https://web.archive.org/web/20190901082604/https://www.reddit.com/poll/${Object(A.c)(t)}`,`class="${i}" href="https://web.archive.org/web/20190901082604/https://www.reddit.com/poll/${Object(A.c)(t)}`)}(C.media.content,C.id,q.a.hiddenLink):C.media.content}))}return null;case v.o.EMBED:if(this.props.isMiniCard&&C.preview&&C.preview.url)return n.a.createElement(x.a,Object.assign({},re,{alwaysWrapMedia:!0}),n.a.createElement(ne,{isVisible:P},n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,Object.assign({},ae,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isExpando:d,isListing:c,isNSFW:this.isNSFW(),isCrosspost:!!i,isSpoiler:this.isSpoiler(),postId:C.id,shouldBlur:de,source:C.preview.url,originalSource:C.preview.url})),n.a.createElement(T.a,null))));if(v.h.has(C.media.provider)){if(C.media.provider===v.u.Twitter){const e=Z||(C.media.isDeleted?ee:te);return n.a.createElement(x.a,Object.assign({},re,{alwaysWrapMedia:!0,height:e,showFull:!0,width:K}),P&&n.a.createElement(n.a.Fragment,null,!Z&&(C.media.isDeleted?n.a.createElement("p",{className:q.a.tweetDeleted},Object(G.c)("This Tweet has been deleted.")):n.a.createElement("div",{className:Object(r.a)(Object(y.a)({isLoading:!0}),q.a.tweetPlaceholder)})),n.a.createElement(g.a,{childRef:this.storeChildRef,className:Object(r.a)(q.a.tweetEmbedBox,{[q.a.isInvisible]:!Z}),height:e,isListing:c,isResponsive:!0,onLoad:this.onIframeLoaded,showCentered:S,showFull:!0,source:Y,title:C.title,width:K})))}return n.a.createElement(x.a,Object.assign({},re,{alwaysWrapMedia:!0,height:d?Z:v.i,width:d?ie:v.i*(16/9)}),P&&n.a.createElement(g.a,{childRef:this.storeChildRef,height:d?Z:v.i,width:d?ie:void 0,isListing:c,isResponsive:!0,onLoad:this.onIframeLoaded,showCentered:S,showFull:j,source:Y,title:C.title}))}return n.a.createElement(x.a,Object.assign({},re,{alwaysWrapMedia:!0}),P&&n.a.createElement(g.a,Object.assign({},ae,{isResponsive:d||C.media.provider===v.u.IFrameEmbed,title:C.title,childRef:this.storeChildRef,onLoad:this.onIframeLoaded,source:Y,fullWidth:C.media.provider===v.u.IFrameEmbed})));case v.o.GIFVIDEO:{let e=Z,t=ie;return e>v.i&&(t=ie/Z*(e=v.i)),n.a.createElement(x.a,Object.assign({},re,{blurSrc:oe?C.media.gifBackgroundImage:void 0}),n.a.createElement(ne,{isVisible:P},n.a.createElement(N.a,Object.assign({},ae,{isNotCardView:p,height:d?void 0:e,width:d?void 0:t,postId:C.id,shouldLoad:!0,shouldPause:J,source:Y,originalSource:C.media.content}))))}case v.o.VIDEO:{const e=C.media.posterUrl||C.preview&&C.preview.url;return this.props.isMiniCard&&e?n.a.createElement(x.a,Object.assign({},re,{alwaysWrapMedia:!0}),n.a.createElement(ne,{isVisible:P},n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,Object.assign({},ae,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isExpando:d,isListing:c,isNSFW:this.isNSFW(),isCrosspost:!!i,isSpoiler:this.isSpoiler(),postId:C.id,shouldBlur:de,source:e,originalSource:e})),n.a.createElement(T.a,null)))):n.a.createElement(x.a,Object.assign({},re,{alwaysWrapMedia:!0,isVideo:!0}),P&&n.a.createElement(b.b,{autoPlay:"boolean"==typeof W?!W:void 0,isExpando:d,postUrl:Object(u.a)(C.permalink),shouldLoad:!0,shouldPause:J,shouldStop:z,hlsSource:C.media.hlsUrl,mpegDashSource:C.media.dashUrl,isGif:C.media.isGif,scrubberThumbSource:C.media.scrubberThumbSource,postId:C.id,callToActionSource:C.source||void 0,callToActionText:C.callToAction,isListing:c,posterUrl:C.media.posterUrl}))}case v.o.IMAGE:const o=this.state.viewportHeight-2*se,O=this.state.viewportWidth-2*se;let I=Y;return this.props.isMiniCard&&!this.props.isMiniCardHQPreviews&&(C.thumbnail&&Object(h.a)(C.thumbnail.url)?I=C.thumbnail.url:C.preview&&Object(h.a)(C.preview.url)&&(I=C.preview.url)),n.a.createElement(x.a,Object.assign({},re,{blurSrc:oe?I:void 0,isExpando:!!d}),n.a.createElement(ne,{isVisible:P},n.a.createElement(f.a,Object.assign({},ae,{className:this.props.imageBoxClassName,contentImageClassName:this.props.imageBoxContentImageClassName,imageClassName:this.props.imageBoxClassName,isExpando:d,isListing:c,isNSFW:this.isNSFW(),isCrosspost:!!i,isSpoiler:this.isSpoiler(),maxHeight:d?o:void 0,maxWidth:d?O:void 0,postId:C.id,shouldBlur:de,source:I,outboundUrl:le&&C.source.outboundUrl||void 0,originalSource:C.media.content}))));default:return null}}})},"./src/reddit/helpers/canPreviewSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/helpers/postHasSelfText/index.ts");t.a=(e=>Object(s.a)(e)&&!e.isSpoiler&&!e.isNSFW)},"./src/reddit/helpers/postHasSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/models/Media/index.ts"),o=i("./src/reddit/models/RichTextJson/index.ts");t.a=(e=>{const t=e&&e.media;return!!t&&(t.type===s.o.TEXT&&!!t.content||t.type===s.o.RTJSON&&!Object(o.E)(t.richtextContent))})}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~900871b8.a8eb80bc8d382e19727e.js.map

}
/*
     FILE ARCHIVED ON 08:26:04 Sep 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:47:45 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.07
  cdx.remote: 0.11
  esindex: 0.012
  LoadShardBlock: 533.645 (6)
  PetaboxLoader3.datanode: 375.976 (8)
  load_resource: 485.159 (2)
  PetaboxLoader3.resolve: 347.121 (2)
*/