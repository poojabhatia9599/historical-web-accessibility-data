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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~1084d5fc"],{"./src/reddit/components/Media/RichTextContainer/index.m.less":function(e,t,i){e.exports={richTextContainer:"Chtkt3BCZQruf0LtmFg2c",richTextContainerFull:"_3xX726aBn29LDbsDtzr_6E",placeholder:"_1aLU7RPNLdvfcbaNdcN11x",placeholderParagraph:"Owi9iYzjyVpDq_0YbCdJY"}},"./src/reddit/components/Media/index.m.less":function(e,t,i){e.exports={hiddenLink:"_3dhFVFchWAAFXfLFTa94n9",displayNone:"_1Q2mF3u7v9hBVu_4bkC7R4"}},"./src/reddit/components/Media/index.tsx":function(e,t,i){"use strict";var s,n=i("./node_modules/lodash/debounce.js"),o=i.n(n),a=i("./node_modules/react/index.js"),d=i.n(a),r=i("./bundled-modules/styled-components/styled-components.min.js"),c=i.n(r),l=i("./src/lib/env/index.ts"),h=i("./src/lib/isUrl/index.ts"),u=i("./node_modules/brcast/dist/brcast.es.js"),p=i("./node_modules/lodash/findKey.js"),m=i.n(p);!function(e){e.Hidden="hidden",e.Visible="visible"}(s||(s={}));const b={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};let g=!1;const f=Object(u.a)({documentInFocus:!0});!function(){if(!g){const e=m()(b,(e,t)=>void 0!==document[t]);e&&document.addEventListener(b[e],()=>{f.setState({documentInFocus:document.visibilityState!==s.Hidden})}),g=!0}}();var x={subscribe:e=>{return f.subscribe(e)},unsubscribe:e=>{f.unsubscribe(e)}},w=i("./src/lib/permalinkToOverlayLocation/index.ts"),v=i("./src/lib/raven/index.ts"),E=i("./src/reddit/components/HTML5StreamPlayer/index.tsx"),y=i("./src/reddit/components/Media/EmbedBox/index.tsx"),C=i("./src/reddit/components/Media/ImageBox/index.tsx"),O=i("./src/reddit/components/Media/MediaContainer/index.tsx"),M=i("./src/lib/classNames/index.ts"),I=i("./src/reddit/constants/componentSizes.ts"),S=i("./src/reddit/models/Media/index.ts"),j=i("./node_modules/react-redux/es/index.js"),L=i("./src/reddit/actions/post.ts"),T=i("./src/reddit/helpers/styles/mixins/loading.ts"),P=i("./src/reddit/components/Media/RichTextContainer/index.m.less"),F=i.n(P);const W=c.a.div.withConfig({componentId:"b1ntrq-0"})(["",""],T.b);var D=Object(j.connect)(null,e=>({onLoadRichTextContentIfNeeded:t=>e(Object(L.p)(t))}))(class extends d.a.Component{componentDidMount(){this.loadRichTextContentIfNeeded()}loadRichTextContentIfNeeded(){this.props.canLoadContent&&this.props.isExpando&&this.props.onLoadRichTextContentIfNeeded(this.props.postId)}render(){return d.a.createElement("div",{className:F.a.placeholder},[1,2,3].map(e=>d.a.createElement("div",{key:e,className:F.a.placeholderParagraph},d.a.createElement(W,{isLoading:!0,gradientType:"posts"}),d.a.createElement(W,{isLoading:!0,gradientType:"posts"}),d.a.createElement(W,{isLoading:!0,gradientType:"posts"}))))}}),R=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(s=Object.getOwnPropertySymbols(e);n<s.length;n++)t.indexOf(s[n])<0&&(i[s[n]]=e[s[n]])}return i};var V=e=>{var t=e.canLoadContent,i=e.children,s=e.className,n=e.isCommentsPage,o=e.isRichTextTruncated,a=e.isExpando,r=e.postId,c=e.showFull,l=R(e,["canLoadContent","children","className","isCommentsPage","isRichTextTruncated","isExpando","postId","showFull"]);const h=c?F.a.richTextContainerFull:F.a.richTextContainer,u={};c||(u.maxHeight=`${S.j}px`),n&&(u.maxWidth=`${I.g}px`);const p=o&&c;return d.a.createElement("div",Object.assign({className:Object(M.a)(h,s),style:u},l),i,p&&d.a.createElement(D,{canLoadContent:!!t,isExpando:a,postId:r}))},N=i("./src/reddit/components/Media/VideoBox/index.tsx"),H=i("./src/reddit/components/PlayButton/index.tsx"),B=i("./src/reddit/components/RawHTMLDisplay/index.tsx"),k=i("./src/reddit/components/RichTextJson/index.tsx"),A=i("./src/reddit/constants/screenWidths.ts"),U=i("./src/reddit/helpers/canPreviewSelfText/index.ts"),G=i("./src/reddit/helpers/getRichTextContent.ts"),_=i("./src/reddit/helpers/postHasSelfText/index.ts"),z=i("./src/lib/redditId/index.ts");function J(e,t){const i=function e(t,i){let s=!1;let n=[];try{for(const o of t)if("link"===o.e&&o.u&&o.u.includes(`https://web.archive.org/web/20190501000913/https://www.reddit.com/poll/${i}`))s=!0;else if(o.c&&"string"!=typeof o.c){const t=e(o.c,i);t.found?(s=!0,("par"!==o.e||t.updated.length)&&n.push(Object.assign({},o,{c:t.updated}))):n.push(o)}else n.push(o)}catch(o){s=!1,n=[]}return{found:s,updated:s?n:t}}(e.document,Object(z.c)(t));return i.found?{document:i.updated}:e}const $=(e,t,i,s)=>{const n=e/t,o=i/s;return Math.abs(n-o)<.03},q=(e,t)=>{for(let i=0;i<t.length;i++){const s=t[i];if(s.width>=e)return s}},Q=(e,t,i)=>{for(let s=0;s<i.length;s++){const n=i[s];if(n.width>=S.e/2&&$(e,t,n.height,n.width))return n}},X=e=>{for(let t=0;t<e.length;t++){const i=e[t];if(i.height>=S.e||i.width>=S.f)return i}};var Y=i("./src/reddit/components/Media/index.m.less"),K=i.n(Y),Z=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],s=!0,n=!1,o=void 0;try{for(var a,d=e[Symbol.iterator]();!(s=(a=d.next()).done)&&(i.push(a.value),!t||i.length!==t);s=!0);}catch(r){n=!0,o=r}finally{try{!s&&d.return&&d.return()}finally{if(n)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const ee=1200,te="https://web.archive.org/web/20190501000913/https://www.redditmedia.com",ie=75,se="player.js",ne=I.F+I.E,oe=e=>e.isVisible?e.children:d.a.createElement("div",{className:K.a.displayNone},e.children),ae=new Set([S.m.EMBED,S.m.GIFVIDEO,S.m.VIDEO]),de=e=>!!e.media&&ae.has(e.media.type),re=new Set([S.m.EMBED,S.m.GIFVIDEO,S.m.IMAGE,S.m.VIDEO]),ce=e=>!!e.media&&re.has(e.media.type);t.a=Object(r.withTheme)(class extends d.a.Component{constructor(e){super(e),this.pauseContent=(()=>{this.shouldFocusContentDebouncer(!1)}),this.stopContent=(()=>{const e=this.props.post.media;if(e&&S.d.has(e.type)){if(this.iframe){const t=e.type===S.m.EMBED?e.provider:null;this.pauseEmbed(this.iframe,t)}this.setState(e=>e.shouldStop?null:{shouldStop:!0})}}),this.handleVisibilityChange=(e=>{const t=this.state.shouldPause,i=this.props.autoplayPref;this.iframe&&(t||!i&&e.documentInFocus||this.toggleEmbedAutoplay(this.iframe,!e.documentInFocus)),this.setState({forcePause:!e.documentInFocus})}),this.focusContent=(()=>{this.shouldFocusContentDebouncer(!0)}),this.loadContent=(()=>{this.setState(e=>e.canLoadContent?null:{canLoadContent:!0})}),this.unmountContent=(()=>{}),this.contentIsHeavyToMount=(()=>{const e=this.props.post.media;return!!e&&S.d.has(e.type)}),this.shouldFocusContentDebouncer=o()(e=>{const t=this.props.post.media,i=this.props.autoplayPref;if(t&&S.d.has(t.type)){if(this.iframe){const s=t.type===S.m.EMBED?t.provider:null;s&&!S.p.has(s)?!i&&e||this.toggleEmbedAutoplay(this.iframe,!e):e||this.pauseEmbed(this.iframe,s)}e?this.setState(e=>e.shouldPause||!e.canLoadContent?{canLoadContent:!0,shouldPause:!1,shouldStop:!1}:null):this.setState(e=>e.shouldPause?null:{shouldPause:!0})}},250,{leading:!0}),this.toggleEmbedAutoplay=((e,t)=>{if(e.contentWindow){const i=t?S.g.Pause:S.g.Play;e.contentWindow.postMessage({context:se,method:i},te),e.contentWindow.postMessage({context:se,method:S.g.Mute},te)}}),this.pauseEmbed=((e,t)=>{e.contentWindow&&(t===S.q.YouTube?e.contentWindow.postMessage(JSON.stringify({event:"command",func:S.u.Pause}),te):e.contentWindow.postMessage({context:se,method:S.g.Pause},te))}),this.onIframeLoaded=(()=>{const e=this.props.post.media,t=this.props.autoplayPref,i=e&&e.type===S.m.EMBED?e.provider:null;if(this.iframe&&i&&!S.p.has(i)){const e=this.state.shouldPause;(t||e)&&this.toggleEmbedAutoplay(this.iframe,e)}}),this.storeChildRef=(e=>{this.iframe=e}),this.updateDimensions=(()=>{this.setState({viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}),this.state={canLoadContent:e.shouldLoad||!1,forcePause:!1,shouldPause:void 0===e.shouldPause||e.shouldPause,shouldStop:void 0===e.shouldStop||e.shouldStop,viewportHeight:S.e,viewportWidth:S.f}}componentWillMount(){"undefined"!=typeof window&&(this.updateDimensions(),window.addEventListener("resize",this.updateDimensions))}componentDidMount(){de(this.props.post)&&(this.visibilityChangeSubscriptionId=x.subscribe(e=>{this.handleVisibilityChange(e)})),this.props.scrollerItemRef&&ce(this.props.post)&&this.props.scrollerItemRef(this,this.state.canLoadContent)}componentWillUnmount(){this.visibilityChangeSubscriptionId&&x.unsubscribe(this.visibilityChangeSubscriptionId),this.props.scrollerItemRef&&ce(this.props.post)&&this.props.scrollerItemRef(void 0),window.removeEventListener("resize",this.updateDimensions)}componentWillReceiveProps(e){!this.state.canLoadContent&&e.shouldLoad&&this.setState({canLoadContent:!0}),void 0!==e.shouldPause&&e.shouldPause!==this.props.shouldPause&&this.shouldFocusContentDebouncer(!e.shouldPause)}getVideoExpandoMaxDimensions(){let e,t=Math.max(S.i,this.state.viewportHeight),i=Math.min(ee,16*t/9);i===ee&&(t=9*ee/16),e=this.state.viewportWidth>=A.g?this.state.viewportWidth<I.w?this.state.viewportWidth-ne-2*ie:this.state.viewportWidth-ne-I.i-2*ie:this.state.viewportWidth-2*ie;const s=this.state.viewportHeight-2*ie;if(i>e)t*=e/i,i=e;else if(t>s){const e=s/t;t=s,i*=e}return{maxVideoHeight:t,maxVideoWidth:i}}getMediaInfo(e){const t=e.availableWidth,i=e.post,s=i.media&&i.media.obfuscated||"";let n=i.media&&!Object(S.B)(i.media)?i.media.content:"";var o=!i.media||Object(S.z)(i.media)||Object(S.A)(i.media)?[0,0]:[i.media.height,i.media.width],a=Z(o,2);let d=a[0],r=a[1];if(t&&i.media&&(i.media.type===S.m.IMAGE||i.media.type===S.m.GIFVIDEO)){const e=q(t,i.media.resolutions);e&&(n=e.url,r=e.width,d=e.height)}else if(i&&i.media&&(!e.isListing||e.isExpando)&&(i.media.type===S.m.IMAGE||i.media.type===S.m.GIFVIDEO)){let e;(e=Object(C.b)(i.media.height,i.media.width)&&Object(C.c)(i.media.height)?Q(i.media.height,i.media.width,i.media.resolutions):X(i.media.resolutions))&&(n=e.url,r=e.width,d=e.height)}if(e.isExpando)if(r>this.state.viewportWidth)d*=this.state.viewportWidth/r,r=this.state.viewportWidth;else if(d>this.state.viewportHeight){const e=this.state.viewportHeight/d;d=this.state.viewportHeight,r*=e}var c=this.getVideoExpandoMaxDimensions();const l=c.maxVideoHeight,h=c.maxVideoWidth;if(i.media&&i.media.type===S.m.VIDEO){const t=d/r;t>S.c?(d=S.k,r=Math.min(Math.max(S.k/t,S.o),S.l)):(d=Math.min(Math.max(S.l*t,S.n),S.k),r=S.l),e.isExpando&&(d=l,r=h)}i.media&&i.media.type===S.m.EMBED&&e.isExpando&&(d=l,r=h);let u=!1;if(e.isMiniCard){const e=d/r;u=Math.abs(e-S.c)>.01}return{source:n,obfuscated:s,width:r,height:d,needsBackgroundBlur:u}}render(){var e=this.props;const t=e.className,i=e.crosspost,s=e.flairStyleTemplate,n=e.forceAspectRatio,o=e.isCommentsPage,a=e.isExpando,r=e.isListing,c=e.isNotCardView,u=e.post,p=e.showCentered;var m=e.showFull;const b=void 0!==m&&m,g=e.theme;var f=this.state;const x=f.canLoadContent,M=f.forcePause,I=f.shouldPause,j=f.shouldStop;if(!u.media)return null;const L=M||I,T=j;var P=this.getMediaInfo(this.props);const F=P.source,W=P.obfuscated,D=P.height,R=P.width,A=P.needsBackgroundBlur,$={showCentered:p,isListing:r,showFull:b,height:D,width:R},q=Object.assign({},$,{forceAspectRatio:n,className:t}),Q=r&&!a&&(!g.subredditContext.shouldShowNSFWContent&&(u.isNSFW||!(!i||!i.isNSFW))||u.isSpoiler||!(!i||!i.isSpoiler)),X=!(!u.isSponsored||!u.source);if(W&&Q)return d.a.createElement(O.a,Object.assign({},q,{blurSrc:W}),d.a.createElement(oe,{isVisible:x},d.a.createElement(C.a,Object.assign({},$,{isListing:r,isVideoThumbnail:u.media.type===S.m.VIDEO,postId:u.id,shouldBlur:Q,source:W,outboundUrl:X&&u.source.outboundUrl||void 0,originalSource:F}))));switch(u.media.type){case S.m.RTJSON:const e=Object(G.a)(u,null);if(null===e)return;return b||Object(U.a)(u)?d.a.createElement(V,{canLoadContent:x,className:t,"data-click-id":"text",isCommentsPage:o,isExpando:a,isRichTextTruncated:u.media.isRichtextPreview,postId:u.id,showFull:b},d.a.createElement(k.b,{flairStyleTemplate:s,content:u.isMeta?J(e,u.id):e,mediaMetadata:u.media.mediaMetadata,renderingObjectInfo:u,renderMediaAsLinks:r})):null;case S.m.TEXT:if(Object(_.a)(u)){const e="Text post should not include body content";return Object(v.c)(e,{extra:{info:{post:u,isListing:r,isCommentsPage:o}}}),Object(l.a)()&&console.log(`${u.id}: ${e}`),d.a.createElement(V,{postId:u.id,className:t,"data-click-id":"text",isCommentsPage:o,showFull:b},d.a.createElement(B.a,{flairStyleTemplate:s,html:u.isMeta?function(e,t,i){return e.replace(`href="https://web.archive.org/web/20190501000913/https://www.reddit.com/poll/${Object(z.c)(t)}`,`class="${i}" href="https://web.archive.org/web/20190501000913/https://www.reddit.com/poll/${Object(z.c)(t)}`)}(u.media.content,u.id,K.a.hiddenLink):u.media.content}))}return null;case S.m.EMBED:return this.props.isMiniCard&&u.preview&&u.preview.url?d.a.createElement(O.a,Object.assign({},q,{alwaysWrapMedia:!0}),d.a.createElement(oe,{isVisible:x},d.a.createElement(d.a.Fragment,null,d.a.createElement(C.a,Object.assign({},$,{isExpando:a,isListing:r,isCrosspost:!!i,postId:u.id,shouldBlur:Q,source:u.preview.url,originalSource:u.preview.url})),d.a.createElement(H.b,null)))):S.h.has(u.media.provider)?d.a.createElement(O.a,Object.assign({},q,{alwaysWrapMedia:!0,height:a?D:S.i,width:a?R:S.i*(16/9)}),x&&d.a.createElement(y.a,{childRef:this.storeChildRef,height:a?D:S.i,width:a?R:void 0,isListing:r,isResponsive:!0,onLoad:this.onIframeLoaded,showCentered:p,showFull:b,source:F,title:u.title})):d.a.createElement(O.a,Object.assign({},q,{alwaysWrapMedia:!0}),x&&d.a.createElement(y.a,Object.assign({},$,{isResponsive:a||u.media.provider===S.q.IFrameEmbed,title:u.title,childRef:this.storeChildRef,onLoad:this.onIframeLoaded,source:F,fullWidth:u.media.provider===S.q.IFrameEmbed})));case S.m.GIFVIDEO:{let e=D,t=R;return e>S.i&&(t=R/D*(e=S.i)),d.a.createElement(O.a,Object.assign({},q,{blurSrc:A?u.media.gifBackgroundImage:void 0}),d.a.createElement(oe,{isVisible:x},d.a.createElement(N.a,Object.assign({},$,{isNotCardView:c,height:a?void 0:e,width:a?void 0:t,postId:u.id,shouldLoad:!0,shouldPause:L,source:F,originalSource:u.media.content}))))}case S.m.VIDEO:{const e=u.media.posterUrl||u.preview&&u.preview.url;return this.props.isMiniCard&&e?d.a.createElement(O.a,Object.assign({},q,{alwaysWrapMedia:!0}),d.a.createElement(oe,{isVisible:x},d.a.createElement(d.a.Fragment,null,d.a.createElement(C.a,Object.assign({},$,{isExpando:a,isListing:r,isCrosspost:!!i,postId:u.id,shouldBlur:Q,source:e,originalSource:e})),d.a.createElement(H.b,null)))):d.a.createElement(O.a,Object.assign({},q,{alwaysWrapMedia:!0}),x&&d.a.createElement(E.b,{autoPlay:"boolean"==typeof I?!I:void 0,isExpando:a,postUrl:Object(w.a)(u.permalink),shouldLoad:!0,shouldPause:L,shouldStop:T,hlsSource:u.media.hlsUrl,mpegDashSource:u.media.dashUrl,isGif:u.media.isGif,scrubberThumbSource:u.media.scrubberThumbSource,postId:u.id,callToActionSource:u.source||void 0,callToActionText:u.callToAction,isListing:r,posterUrl:u.media.posterUrl}))}case S.m.IMAGE:const n=this.state.viewportHeight-2*ie,m=this.state.viewportWidth-2*ie;let g=F;return this.props.isMiniCard&&!this.props.isMiniCardHQPreviews&&(u.thumbnail&&Object(h.a)(u.thumbnail.url)?g=u.thumbnail.url:u.preview&&Object(h.a)(u.preview.url)&&(g=u.preview.url)),d.a.createElement(O.a,Object.assign({},q,{blurSrc:A?g:void 0,isExpando:!!a}),d.a.createElement(oe,{isVisible:x},d.a.createElement(C.a,Object.assign({},$,{isExpando:a,isListing:r,isCrosspost:!!i,maxHeight:a?n:void 0,maxWidth:a?m:void 0,postId:u.id,shouldBlur:Q,source:g,outboundUrl:X&&u.source.outboundUrl||void 0,originalSource:u.media.content}))));default:return null}}})},"./src/reddit/helpers/canPreviewSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/helpers/postHasSelfText/index.ts");t.a=(e=>Object(s.a)(e)&&!e.isSpoiler&&!e.isNSFW)},"./src/reddit/helpers/postHasSelfText/index.ts":function(e,t,i){"use strict";var s=i("./src/reddit/models/Media/index.ts"),n=i("./src/reddit/models/RichTextJson/index.ts");t.a=(e=>{const t=e&&e.media;return!!t&&(t.type===s.m.TEXT&&!!t.content||t.type===s.m.RTJSON&&!Object(n.E)(t.richtextContent))})}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~1084d5fc.d2fed9ef9e9560a9178b.js.map

}
/*
     FILE ARCHIVED ON 00:09:13 May 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:23 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.062
  cdx.remote: 0.104
  esindex: 0.01
  LoadShardBlock: 197.366 (6)
  PetaboxLoader3.datanode: 216.181 (8)
  load_resource: 156.147 (2)
  PetaboxLoader3.resolve: 78.812 (2)
*/