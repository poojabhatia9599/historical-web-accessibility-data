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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~4dc0ff37"],{"./src/reddit/components/Media/RichTextContainer/index.m.less":function(e,t,i){e.exports={richTextContainer:"Chtkt3BCZQruf0LtmFg2c",richTextContainerFull:"_3xX726aBn29LDbsDtzr_6E",placeholder:"_1aLU7RPNLdvfcbaNdcN11x",placeholderParagraph:"Owi9iYzjyVpDq_0YbCdJY"}},"./src/reddit/components/Media/index.m.less":function(e,t,i){e.exports={hiddenLink:"_3dhFVFchWAAFXfLFTa94n9",displayNone:"_1Q2mF3u7v9hBVu_4bkC7R4"}},"./src/reddit/components/Media/index.tsx":function(e,t,i){"use strict";var s,o=i("./node_modules/lodash/debounce.js"),n=i.n(o),a=i("./node_modules/react/index.js"),r=i.n(a),d=i("./bundled-modules/styled-components/styled-components.min.js"),c=i.n(d),l=i("./src/lib/env/index.ts"),h=i("./src/lib/isUrl/index.ts"),p=i("./node_modules/brcast/dist/brcast.es.js"),u=i("./node_modules/lodash/findKey.js"),m=i.n(u);!function(e){e.Hidden="hidden",e.Visible="visible"}(s||(s={}));const b={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};let g=!1;const f=Object(p.a)({documentInFocus:!0});!function(){if(!g){const e=m()(b,(e,t)=>void 0!==document[t]);e&&document.addEventListener(b[e],()=>{f.setState({documentInFocus:document.visibilityState!==s.Hidden})}),g=!0}}();var x={subscribe:e=>{return f.subscribe(e)},unsubscribe:e=>{f.unsubscribe(e)}},v=i("./src/lib/permalinkToOverlayLocation/index.ts"),w=i("./src/lib/raven/index.ts"),E=i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),y=i("./src/reddit/components/Media/EmbedBox/index.tsx"),S=i("./src/reddit/components/Media/ImageBox/index.tsx"),C=i("./src/reddit/components/Media/MediaContainer/index.tsx"),O=i("./src/lib/classNames/index.ts"),M=i("./src/reddit/constants/componentSizes.ts"),I=i("./src/reddit/models/Media/index.ts"),j=i("./node_modules/react-redux/es/index.js"),T=i("./src/reddit/actions/post.ts"),L=i("./src/reddit/helpers/styles/mixins/loading.ts"),P=i("./src/reddit/components/Media/RichTextContainer/index.m.less"),F=i.n(P);const W=c.a.div.withConfig({componentId:"b1ntrq-0"})(["",""],L.c);var N=Object(j.b)(null,e=>({onLoadRichTextContentIfNeeded:t=>e(Object(T.p)(t))}))(class extends r.a.Component{componentDidMount(){this.loadRichTextContentIfNeeded()}loadRichTextContentIfNeeded(){this.props.canLoadContent&&this.props.isExpando&&this.props.onLoadRichTextContentIfNeeded(this.props.postId)}render(){return r.a.createElement("div",{className:F.a.placeholder},[1,2,3].map(e=>r.a.createElement("div",{key:e,className:F.a.placeholderParagraph},r.a.createElement(W,{isLoading:!0,gradientType:"posts"}),r.a.createElement(W,{isLoading:!0,gradientType:"posts"}),r.a.createElement(W,{isLoading:!0,gradientType:"posts"}))))}}),R=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&(i[s[o]]=e[s[o]])}return i};var D=e=>{var t=e.canLoadContent,i=e.children,s=e.className,o=e.isCommentsPage,n=e.isRichTextTruncated,a=e.isExpando,d=e.postId,c=e.showFull,l=R(e,["canLoadContent","children","className","isCommentsPage","isRichTextTruncated","isExpando","postId","showFull"]);const h=c?F.a.richTextContainerFull:F.a.richTextContainer,p={};c||(p.maxHeight=`${I.j}px`),o&&(p.maxWidth=`${M.g}px`);const u=n&&c;return r.a.createElement("div",Object.assign({className:Object(O.a)(h,s),style:p},l),i,u&&r.a.createElement(N,{canLoadContent:!!t,isExpando:a,postId:d}))},V=i("./src/reddit/components/Media/VideoBox/index.tsx"),B=i("./src/reddit/components/PlayButton/index.tsx"),k=i("./src/lib/CSSVariableProvider/withTheme.tsx"),H=i("./src/reddit/helpers/styles/postBackgroundColor.ts"),A=i("./src/reddit/helpers/styles/smartTextColor.ts"),U=i("./src/reddit/components/RawHTMLDisplay/index.tsx"),G=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&(i[s[o]]=e[s[o]])}return i};var _=Object(k.a)(e=>{var t=e.flairStyleTemplate,i=G(e,["flairStyleTemplate"]);return r.a.createElement(U.a,Object.assign({style:{color:Object(A.a)(Object(H.a)(Object.assign({flairStyleTemplate:t},i)))}},i))}),z=i("./src/reddit/components/RichTextJson/index.tsx"),J=i("./src/reddit/constants/screenWidths.ts"),$=i("./src/reddit/helpers/canPreviewSelfText/index.ts"),q=i("./src/reddit/helpers/getRichTextContent.ts"),Q=i("./src/reddit/helpers/postHasSelfText/index.ts"),X=i("./src/lib/redditId/index.ts");function Y(e,t){const i=function e(t,i){let s=!1;let o=[];try{for(const n of t)if("link"===n.e&&n.u&&n.u.includes(`https://web.archive.org/web/20190701001438/https://www.reddit.com/poll/${i}`))s=!0;else if(n.c&&"string"!=typeof n.c){const t=e(n.c,i);t.found?(s=!0,("par"!==n.e||t.updated.length)&&o.push(Object.assign({},n,{c:t.updated}))):o.push(n)}else o.push(n)}catch(n){s=!1,o=[]}return{found:s,updated:s?o:t}}(e.document,Object(X.c)(t));return i.found?{document:i.updated}:e}const K=(e,t,i,s)=>{const o=e/t,n=i/s;return Math.abs(o-n)<.03},Z=(e,t)=>{for(let i=0;i<t.length;i++){const s=t[i];if(s.width>=e)return s}},ee=(e,t,i)=>{for(let s=0;s<i.length;s++){const o=i[s];if(o.width>=I.e/2&&K(e,t,o.height,o.width))return o}},te=e=>{for(let t=0;t<e.length;t++){const i=e[t];if(i.height>=I.e||i.width>=I.f)return i}};var ie=i("./src/reddit/components/Media/index.m.less"),se=i.n(ie),oe=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var a,r=e[Symbol.iterator]();!(s=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(d){o=!0,n=d}finally{try{!s&&r.return&&r.return()}finally{if(o)throw n}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const ne=1200,ae="https://web.archive.org/web/20190701001438/https://www.redditmedia.com",re=75,de="player.js",ce=M.A+M.z,le=e=>e.isVisible?e.children:r.a.createElement("div",{className:se.a.displayNone},e.children),he=new Set([I.m.EMBED,I.m.GIFVIDEO,I.m.VIDEO]),pe=e=>!!e.media&&he.has(e.media.type),ue=new Set([I.m.EMBED,I.m.GIFVIDEO,I.m.IMAGE,I.m.VIDEO]),me=e=>!!e.media&&ue.has(e.media.type);t.a=Object(d.withTheme)(class extends r.a.Component{constructor(e){super(e),this.pauseContent=(()=>{this.shouldFocusContentDebouncer(!1)}),this.stopContent=(()=>{const e=this.props.post.media;if(e&&I.d.has(e.type)){if(this.iframe){const t=e.type===I.m.EMBED?e.provider:null;this.pauseEmbed(this.iframe,t)}this.setState(e=>e.shouldStop?null:{shouldStop:!0})}}),this.handleVisibilityChange=(e=>{const t=this.state.shouldPause,i=this.props.autoplayPref;this.iframe&&(t||!i&&e.documentInFocus||this.toggleEmbedAutoplay(this.iframe,!e.documentInFocus)),this.setState({forcePause:!e.documentInFocus})}),this.focusContent=(()=>{this.shouldFocusContentDebouncer(!0)}),this.loadContent=(()=>{this.setState(e=>e.canLoadContent?null:{canLoadContent:!0})}),this.unmountContent=(()=>{}),this.contentIsHeavyToMount=(()=>{const e=this.props.post.media;return!!e&&I.d.has(e.type)}),this.shouldFocusContentDebouncer=n()(e=>{const t=this.props.post.media,i=this.props.autoplayPref;if(t&&I.d.has(t.type)){if(this.iframe){const s=t.type===I.m.EMBED?t.provider:null;s&&!I.p.has(s)?!i&&e||this.toggleEmbedAutoplay(this.iframe,!e):e||this.pauseEmbed(this.iframe,s)}e?this.setState(e=>e.shouldPause||!e.canLoadContent?{canLoadContent:!0,shouldPause:!1,shouldStop:!1}:null):this.setState(e=>e.shouldPause?null:{shouldPause:!0})}},250,{leading:!0}),this.toggleEmbedAutoplay=((e,t)=>{if(e.contentWindow){const i=t?I.g.Pause:I.g.Play;e.contentWindow.postMessage({context:de,method:i},ae),e.contentWindow.postMessage({context:de,method:I.g.Mute},ae)}}),this.pauseEmbed=((e,t)=>{e.contentWindow&&(t===I.q.YouTube?e.contentWindow.postMessage(JSON.stringify({event:"command",func:I.u.Pause}),ae):e.contentWindow.postMessage({context:de,method:I.g.Pause},ae))}),this.onIframeLoaded=(()=>{const e=this.props.post.media,t=this.props.autoplayPref,i=e&&e.type===I.m.EMBED?e.provider:null;if(this.iframe&&i&&!I.p.has(i)){const e=this.state.shouldPause;(t||e)&&this.toggleEmbedAutoplay(this.iframe,e)}}),this.onImageBoxClick=(e=>{this.props.isListing||!this.shouldBlur()||this.state.isRevealed||(this.setState({isRevealed:!0}),e.preventDefault(),e.stopPropagation())}),this.storeChildRef=(e=>{this.iframe=e}),this.updateDimensions=(()=>{this.setState({viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}),this.isSpoiler=(()=>this.props.post.isSpoiler||!(!this.props.crosspost||!this.props.crosspost.isSpoiler)),this.isNSFW=(()=>this.props.post.isNSFW||!(!this.props.crosspost||!this.props.crosspost.isNSFW)),this.state={canLoadContent:e.shouldLoad||!1,forcePause:!1,isRevealed:!1,shouldPause:void 0===e.shouldPause||e.shouldPause,shouldStop:void 0===e.shouldStop||e.shouldStop,viewportHeight:I.e,viewportWidth:I.f}}componentWillMount(){"undefined"!=typeof window&&(this.updateDimensions(),window.addEventListener("resize",this.updateDimensions))}componentDidMount(){pe(this.props.post)&&(this.visibilityChangeSubscriptionId=x.subscribe(e=>{this.handleVisibilityChange(e)})),this.props.scrollerItemRef&&me(this.props.post)&&this.props.scrollerItemRef(this,this.state.canLoadContent)}componentWillUnmount(){this.visibilityChangeSubscriptionId&&x.unsubscribe(this.visibilityChangeSubscriptionId),this.props.scrollerItemRef&&me(this.props.post)&&this.props.scrollerItemRef(void 0),window.removeEventListener("resize",this.updateDimensions)}componentWillReceiveProps(e){!this.state.canLoadContent&&e.shouldLoad&&this.setState({canLoadContent:!0}),void 0!==e.shouldPause&&e.shouldPause!==this.props.shouldPause&&this.shouldFocusContentDebouncer(!e.shouldPause)}getVideoExpandoMaxDimensions(){let e,t=Math.max(I.i,this.state.viewportHeight),i=Math.min(ne,16*t/9);i===ne&&(t=9*ne/16),e=this.state.viewportWidth>=J.g?this.state.viewportWidth<M.r?this.state.viewportWidth-ce-2*re:this.state.viewportWidth-ce-M.h-2*re:this.state.viewportWidth-2*re;const s=this.state.viewportHeight-2*re;if(i>e)t*=e/i,i=e;else if(t>s){const e=s/t;t=s,i*=e}return{maxVideoHeight:t,maxVideoWidth:i}}getMediaInfo(e){const t=e.availableWidth,i=e.post,s=i.media&&i.media.obfuscated||"";let o=i.media&&!Object(I.B)(i.media)?i.media.content:"";var n=!i.media||Object(I.z)(i.media)||Object(I.A)(i.media)?[0,0]:[i.media.height,i.media.width],a=oe(n,2);let r=a[0],d=a[1];if(t&&i.media&&(i.media.type===I.m.IMAGE||i.media.type===I.m.GIFVIDEO)){const e=Z(t,i.media.resolutions);e&&(o=e.url,d=e.width,r=e.height)}else if(i&&i.media&&(!e.isListing||e.isExpando)&&(i.media.type===I.m.IMAGE||i.media.type===I.m.GIFVIDEO)){let e;(e=Object(S.b)(i.media.height,i.media.width)&&Object(S.c)(i.media.height)?ee(i.media.height,i.media.width,i.media.resolutions):te(i.media.resolutions))&&(o=e.url,d=e.width,r=e.height)}if(e.isExpando)if(d>this.state.viewportWidth)r*=this.state.viewportWidth/d,d=this.state.viewportWidth;else if(r>this.state.viewportHeight){const e=this.state.viewportHeight/r;r=this.state.viewportHeight,d*=e}var c=this.getVideoExpandoMaxDimensions();const l=c.maxVideoHeight,h=c.maxVideoWidth;if(i.media&&i.media.type===I.m.VIDEO){const t=r/d;t>I.c?(r=I.k,d=Math.min(Math.max(I.k/t,I.o),I.l)):(r=Math.min(Math.max(I.l*t,I.n),I.k),d=I.l),e.isExpando&&(r=l,d=h)}i.media&&i.media.type===I.m.EMBED&&e.isExpando&&(r=l,d=h);let p=!1;if(e.isMiniCard){const e=r/d;p=Math.abs(e-I.c)>.01}return{source:o,obfuscated:s,width:d,height:r,needsBackgroundBlur:p}}shouldBlur(){var e=this.props;const t=e.isCommentsPage,i=e.isExpando,s=e.isListing,o=e.isOverlay,n=e.theme,a=this.isNSFW(),r=this.isSpoiler();return!(!a||!s||i||n.subredditContext.shouldShowNSFWContent)||!(!r||!(s||t&&!o)||i||this.state.isRevealed)}render(){var e=this.props;const t=e.className,i=e.crosspost,s=e.flairStyleTemplate,o=e.forceAspectRatio,n=e.isCommentsPage,a=e.isExpando,d=e.isListing,c=e.isNotCardView,p=e.post,u=e.showCentered;var m=e.showFull;const b=void 0!==m&&m;var g=this.state;const f=g.canLoadContent,x=g.forcePause,O=g.shouldPause,M=g.shouldStop;if(!p.media)return null;const j=x||O,T=M;var L=this.getMediaInfo(this.props);const P=L.source,F=L.obfuscated,W=L.height,N=L.width,R=L.needsBackgroundBlur,k={showCentered:u,isListing:d,showFull:b,height:W,width:N},H=Object.assign({},k,{forceAspectRatio:o,className:t}),A=this.shouldBlur(),U=!(!p.isSponsored||!p.source);if(F&&A)return r.a.createElement(C.a,Object.assign({},H,{blurSrc:F}),r.a.createElement(le,{isVisible:f},r.a.createElement(S.a,Object.assign({},k,{isListing:d,isNSFW:this.isNSFW(),isSpoiler:this.isSpoiler(),isVideoThumbnail:p.media.type===I.m.VIDEO,onClick:this.onImageBoxClick,postId:p.id,shouldBlur:A,source:F,outboundUrl:U&&p.source.outboundUrl||void 0,originalSource:P}))));switch(p.media.type){case I.m.RTJSON:const e=Object(q.a)(p,null);if(null===e)return;return b||Object($.a)(p)?r.a.createElement(D,{canLoadContent:f,className:t,"data-click-id":"text",isCommentsPage:n,isExpando:a,isRichTextTruncated:p.media.isRichtextPreview,postId:p.id,showFull:b},r.a.createElement(z.b,{flairStyleTemplate:s,content:p.isMeta?Y(e,p.id):e,mediaMetadata:p.media.mediaMetadata,renderingObjectInfo:p,renderMediaAsLinks:d})):null;case I.m.TEXT:if(Object(Q.a)(p)){const e="Text post should not include body content";return Object(w.c)(e,{extra:{info:{post:p,isListing:d,isCommentsPage:n}}}),Object(l.a)()&&console.log(`${p.id}: ${e}`),r.a.createElement(D,{postId:p.id,className:t,"data-click-id":"text",isCommentsPage:n,showFull:b},r.a.createElement(_,{flairStyleTemplate:s,html:p.isMeta?function(e,t,i){return e.replace(`href="https://web.archive.org/web/20190701001438/https://www.reddit.com/poll/${Object(X.c)(t)}`,`class="${i}" href="https://web.archive.org/web/20190701001438/https://www.reddit.com/poll/${Object(X.c)(t)}`)}(p.media.content,p.id,se.a.hiddenLink):p.media.content}))}return null;case I.m.EMBED:return this.props.isMiniCard&&p.preview&&p.preview.url?r.a.createElement(C.a,Object.assign({},H,{alwaysWrapMedia:!0}),r.a.createElement(le,{isVisible:f},r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,Object.assign({},k,{isExpando:a,isListing:d,isNSFW:this.isNSFW(),isCrosspost:!!i,isSpoiler:this.isSpoiler(),postId:p.id,shouldBlur:A,source:p.preview.url,originalSource:p.preview.url})),r.a.createElement(B.b,null)))):I.h.has(p.media.provider)?r.a.createElement(C.a,Object.assign({},H,{alwaysWrapMedia:!0,height:a?W:I.i,width:a?N:I.i*(16/9)}),f&&r.a.createElement(y.a,{childRef:this.storeChildRef,height:a?W:I.i,width:a?N:void 0,isListing:d,isResponsive:!0,onLoad:this.onIframeLoaded,showCentered:u,showFull:b,source:P,title:p.title})):r.a.createElement(C.a,Object.assign({},H,{alwaysWrapMedia:!0}),f&&r.a.createElement(y.a,Object.assign({},k,{isResponsive:a||p.media.provider===I.q.IFrameEmbed,title:p.title,childRef:this.storeChildRef,onLoad:this.onIframeLoaded,source:P,fullWidth:p.media.provider===I.q.IFrameEmbed})));case I.m.GIFVIDEO:{let e=W,t=N;return e>I.i&&(t=N/W*(e=I.i)),r.a.createElement(C.a,Object.assign({},H,{blurSrc:R?p.media.gifBackgroundImage:void 0}),r.a.createElement(le,{isVisible:f},r.a.createElement(V.a,Object.assign({},k,{isNotCardView:c,height:a?void 0:e,width:a?void 0:t,postId:p.id,shouldLoad:!0,shouldPause:j,source:P,originalSource:p.media.content}))))}case I.m.VIDEO:{const e=p.media.posterUrl||p.preview&&p.preview.url;return this.props.isMiniCard&&e?r.a.createElement(C.a,Object.assign({},H,{alwaysWrapMedia:!0}),r.a.createElement(le,{isVisible:f},r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,Object.assign({},k,{isExpando:a,isListing:d,isNSFW:this.isNSFW(),isCrosspost:!!i,isSpoiler:this.isSpoiler(),postId:p.id,shouldBlur:A,source:e,originalSource:e})),r.a.createElement(B.b,null)))):r.a.createElement(C.a,Object.assign({},H,{alwaysWrapMedia:!0}),f&&r.a.createElement(E.b,{autoPlay:"boolean"==typeof O?!O:void 0,isExpando:a,postUrl:Object(v.a)(p.permalink),shouldLoad:!0,shouldPause:j,shouldStop:T,hlsSource:p.media.hlsUrl,mpegDashSource:p.media.dashUrl,isGif:p.media.isGif,scrubberThumbSource:p.media.scrubberThumbSource,postId:p.id,callToActionSource:p.source||void 0,callToActionText:p.callToAction,isListing:d,posterUrl:p.media.posterUrl}))}case I.m.IMAGE:const o=this.state.viewportHeight-2*re,m=this.state.viewportWidth-2*re;let g=P;return this.props.isMiniCard&&!this.props.isMiniCardHQPreviews&&(p.thumbnail&&Object(h.a)(p.thumbnail.url)?g=p.thumbnail.url:p.preview&&Object(h.a)(p.preview.url)&&(g=p.preview.url)),r.a.createElement(C.a,Object.assign({},H,{blurSrc:R?g:void 0,isExpando:!!a}),r.a.createElement(le,{isVisible:f},r.a.createElement(S.a,Object.assign({},k,{isExpando:a,isListing:d,isNSFW:this.isNSFW(),isCrosspost:!!i,isSpoiler:this.isSpoiler(),maxHeight:a?o:void 0,maxWidth:a?m:void 0,postId:p.id,shouldBlur:A,source:g,outboundUrl:U&&p.source.outboundUrl||void 0,originalSource:p.media.content}))));default:return null}}})},"./src/reddit/helpers/canPreviewSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/helpers/postHasSelfText/index.ts");t.a=(e=>Object(s.a)(e)&&!e.isSpoiler&&!e.isNSFW)},"./src/reddit/helpers/postHasSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/models/Media/index.ts"),o=i("./src/reddit/models/RichTextJson/index.ts");t.a=(e=>{const t=e&&e.media;return!!t&&(t.type===s.m.TEXT&&!!t.content||t.type===s.m.RTJSON&&!Object(o.E)(t.richtextContent))})}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~4dc0ff37.81b85a50380bc4928147.js.map

}
/*
     FILE ARCHIVED ON 00:14:38 Jul 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:26 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.058
  cdx.remote: 0.09
  esindex: 0.009
  LoadShardBlock: 227.703 (6)
  PetaboxLoader3.datanode: 241.422 (8)
  load_resource: 245.133 (2)
  PetaboxLoader3.resolve: 167.843 (2)
*/