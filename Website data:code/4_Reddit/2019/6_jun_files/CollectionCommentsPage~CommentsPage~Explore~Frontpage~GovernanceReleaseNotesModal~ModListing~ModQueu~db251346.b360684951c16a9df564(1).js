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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~db251346"],{"./src/lib/unicodeUtils/index.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return s});const o=e=>{let t=0,n=0;const o=[0];for(const s of e)t++,n+=s.length,o[t]=n;return o},s=e=>{let t=0,n=0;const o=[];for(const s of e){for(let e=0;e<s.length;e++)o[n]=t,n++;t++}return o[n]=t,o}},"./src/reddit/components/Media/EmbedBox/index.m.less":function(e,t,n){e.exports={embedBox:"_3K6DCjWs2dQ93YYZDOHjib"}},"./src/reddit/components/Media/EmbedBox/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),s=n.n(o),r=n("./src/lib/classNames/index.ts"),i=n("./src/reddit/constants/tracking.ts"),a=n("./src/reddit/models/Media/index.ts"),d=n("./src/lib/addQueryParams/index.ts"),c=n("./src/lib/forceHttps/index.ts"),l=n("./src/reddit/components/Media/EmbedBox/index.m.less"),p=n.n(l);t.a=(e=>{const t=e.isResponsive?Object(d.a)(Object(c.a)(e.source),{responsive:"true"}):Object(c.a)(e.source),n={};return e.showCentered&&(n.margin="0 auto"),e.isListing||(n.maxHeight=`${a.e}px`),s.a.createElement("iframe",{className:Object(r.a)(i.b,p.a.embedBox,e.className),height:`${e.height}px`,width:e.width&&!e.fullWidth?`${e.width}px`:"100%",onLoad:e.onLoad,ref:e.childRef,scrolling:"no",title:e.title,src:t,style:n,allowFullScreen:!0})})},"./src/reddit/components/Media/ImageBox/index.m.less":function(e,t,n){e.exports={container:"_3Oa0THmZ3f5iZXAQ0hBJ0k",image:"_2_tDEnGMLxpM6uOa2kaDB3",seeMore:"_3hUbl08LBz2mbXjy0iYhOS"}},"./src/reddit/components/Media/ImageBox/index.tsx":function(e,t,n){"use strict";n.d(t,"b",function(){return E}),n.d(t,"c",function(){return v});var o=n("./node_modules/react/index.js"),s=n.n(o),r=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/react-router-dom/es/index.js"),a=n("./node_modules/reselect/es/index.js"),d=n("./bundled-modules/styled-components/styled-components.min.js"),c=n("./src/lib/classNames/index.ts"),l=n("./src/lib/forceHttps/index.ts"),p=n("./src/lib/permalinkToOverlayLocation/index.ts"),u=n("./src/reddit/components/PlayButton/index.tsx"),h=n("./src/reddit/models/Media/index.ts"),m=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),g=n("./src/reddit/selectors/posts.ts"),f=n("./src/reddit/selectors/user.ts"),x=n("./src/reddit/constants/posts.ts"),b=n("./src/reddit/constants/tracking.ts"),w=n("./src/reddit/components/Media/ImageBox/index.m.less"),y=n.n(w);const E=(e,t)=>{return e/t>16/9},v=e=>e>2*h.e,j=Object(d.withTheme)(e=>{const t={backgroundColor:Object(m.c)(e).post};return e.showFull||e.isTall||(t.maxHeight=`${h.i}px`),e.isListing||e.isTall&&v(e.height)||(t.maxHeight=`${h.e}px`),e.isExpando&&e.maxHeight&&(t.maxHeight=`${e.maxHeight}px`),e.isExpando&&e.maxWidth&&(t.maxWidth=`${e.maxWidth}px`),e.showCentered&&(t.margin="0 auto"),e.shouldBlur&&(t.filter=`blur(${x.f}px)`,t.width="100%"),s.a.createElement("img",{className:Object(c.a)(y.a.image,e.className),style:t,src:e.src})}),C=e=>{const t={};return(!e.showFull&&E(e.height,e.width)||e.shouldBlur)&&(t.overflow="hidden"),e.showFull||(t.maxHeight=`${h.i}px`,e.shouldBlur&&(t.maxWidth=E(e.height,e.width)?`${h.t}px`:`${e.width}px`)),e.showCentered&&(t.margin="0 auto"),e.isExpando&&e.maxHeight&&(t.maxHeight=`${e.maxHeight}px`),s.a.createElement("div",{className:Object(c.a)(y.a.container,e.className),style:t},e.children)},O=Object(a.createStructuredSelector)({postPermalink:g.E,shouldOpenPostInNewTab:f.U}),k=Object(r.connect)(O);t.a=k(e=>e.outboundUrl?s.a.createElement("a",{href:e.outboundUrl,target:"_blank"},T(e)):e.isListing&&e.postPermalink?s.a.createElement(i.a,{target:e.shouldOpenPostInNewTab?"_blank":void 0,to:Object(p.a)(e.postPermalink)},T(e)):T(e));const I=(e,t)=>s.a.createElement(j,{className:e?"":b.b,height:t.height,isExpando:!!t.isExpando,isListing:t.isListing,isTall:e,maxHeight:t.maxHeight,maxWidth:t.maxWidth,shouldBlur:t.shouldBlur,showCentered:t.showCentered,showFull:t.showFull,src:Object(l.a)(t.source),width:t.width}),T=e=>{const t=E(e.height,e.width),n=v(e.height)&&t;return s.a.createElement(C,Object.assign({},e,{className:`${t?`${b.b} `:""}${e.className||""}`}),e.isListing?s.a.createElement("div",null,I(t,e)):s.a.createElement("a",{style:n?{maxWidth:"50%"}:{},href:e.originalSource,target:"_blank"},I(t,e)),e.isListing&&!e.showFull&&e.height>h.i&&E(e.height,e.width)&&s.a.createElement("div",{className:y.a.seeMore},"see full image"),e.isVideoThumbnail&&s.a.createElement(u.b,null))}},"./src/reddit/components/Media/MediaContainer/index.m.less":function(e,t,n){e.exports={blur:"_2iaYXFpGyyEGq1rp02cl5w",container:"m3aNC6yp8RrNM_-a0rrfa",spacer:"_3gBRFDB5C34UWyxEe_U6mD",wrapper:"_3JgI-GOrkmyIeDeyzXdyUD"}},"./src/reddit/components/Media/MediaContainer/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/polished/dist/polished.es.js"),s=n("./node_modules/react/index.js"),r=n.n(s),i=n("./bundled-modules/styled-components/styled-components.min.js"),a=n("./src/lib/classNames/index.ts"),d=n("./src/lib/forceHttps/index.ts"),c=n("./src/reddit/models/Media/index.ts"),l=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),p=n("./src/reddit/components/Media/MediaContainer/index.m.less"),u=n.n(p);const h=e=>{const t=e.showFull?{maxHeight:`${e.height}px`}:{maxHeight:`${Math.min(c.i,e.height)}px`},n=Object.assign({background:Object(o.j)(.05,Object(l.c)(e).active)},t,e.showFull&&!e.showCentered?{maxWidth:`${e.width}px`}:{},e.blurSrc?{overflow:"hidden"}:{}),s=e.blurSrc?r.a.createElement("img",{className:u.a.blur,src:Object(d.a)(e.blurSrc)}):null,i=((e,t,n)=>n?100*n:e&&t?e/t*100:100*c.c)(e.height,e.width,e.forceAspectRatio);return r.a.createElement("div",{className:Object(a.a)(u.a.container,e.className),"data-click-id":"media",style:n},s,r.a.createElement("div",{className:u.a.spacer,style:{paddingBottom:`${i}%`}}),r.a.createElement("div",{className:u.a.wrapper,style:e.blurSrc?void 0:{background:Object(l.c)(e).body}},e.children))};t.a=Object(i.withTheme)(e=>{if(!e.isListing&&!e.alwaysWrapMedia||e.isExpando)return r.a.Children.only(e.children)||r.a.createElement("div",null);return r.a.createElement(h,Object.assign({},e))})},"./src/reddit/components/Media/VideoBox/index.m.less":function(e,t,n){e.exports={container:"_3spkFGVnKMHZ83pDAhW3Mx",styledVideo:"tErWI93xEKrI2OkozPs7J"}},"./src/reddit/components/Media/VideoBox/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/lodash/throttle.js"),s=n.n(o),r=n("./node_modules/react/index.js"),i=n.n(r),a=n("./node_modules/react-redux/es/index.js"),d=n("./node_modules/reselect/es/index.js"),c=n("./src/lib/classNames/index.ts"),l=n("./src/reddit/actions/video.ts"),p=n("./src/reddit/constants/tracking.ts"),u=n("./src/reddit/models/Media/index.ts"),h=n("./src/reddit/selectors/user.ts"),m=n("./src/reddit/selectors/video.ts");const g=100,f=g/2/1e3;var x=n("./src/lib/forceHttps/index.ts"),b=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};var w=class extends i.a.Component{constructor(e){super(e),this.toggle=(e=>{if(e){const e=this.play();e&&e.catch&&e.catch(()=>{})}else this.pause()}),this.ref=null}play(){if(this.ref&&this.ref.play)return this.ref.play()}pause(){if(this.ref&&this.ref.pause)return this.ref.pause()}componentDidMount(){this.initEventHandlers(),this.toggle(!this.props.shouldPause&&(this.props.autoplay||this.props.isNotCardView))}componentWillUnmount(){this.destroyEventHandlers()}componentWillReceiveProps(e){this.props.shouldPause!==e.shouldPause&&this.toggle(!e.shouldPause&&(e.autoplay||e.isNotCardView))}destroyEventHandlers(){this.ref&&this.cancelBufferingDetector&&this.cancelBufferingDetector()}initEventHandlers(){this.ref&&this.props.onBufferingChange&&(this.cancelBufferingDetector=function(e,t){let n=!1,o=!1;const s=()=>n=!0,r=()=>o=!0;e.addEventListener("loadeddata",s),e.addEventListener("play",r),e.addEventListener("playing",r);let i=!1,a=0,d=0;const c=window.setInterval(()=>{if(d=e.currentTime,o)return o=!1,void(a=d);if(e.paused||e.seeking||!n)return void(a=d);const s=i;4===e.readyState?i=!1:!i&&d>=a&&d<a+f?i=!0:i&&d>=a&&d>a+f&&(i=!1),a=d,s!==i&&t(i)},g);return()=>{clearInterval(c),e.removeEventListener("playing",r),e.removeEventListener("play",r),e.removeEventListener("loadeddata",s)}}(this.ref,this.props.onBufferingChange))}render(){const e=this.props,t=(e.autoplay,e.isListing,e.isNotCardView,e.onBufferingChange,e.shouldLoad,e.shouldPause,e.showCentered,e.showFull,e.source,b(e,["autoplay","isListing","isNotCardView","onBufferingChange","shouldLoad","shouldPause","showCentered","showFull","source"]));return i.a.createElement("video",Object.assign({},t,{ref:e=>{this.ref=e},muted:!0}),i.a.createElement("source",{src:Object(x.a)(this.props.source)}))}},y=n("./src/reddit/components/Media/VideoBox/index.m.less"),E=n.n(y);const v=Object(d.createStructuredSelector)({autoplayPref:h.b,consumed:m.b,loadTimes:m.f,metadata:m.g,started:m.i}),j=Object(a.connect)(v,(e,{postId:t})=>({onBufferingChanged:n=>{e(n?l.w(t):l.I(t))},onLoadStarted:n=>e(l.v(t,n)),onMetadataReceived:n=>e(l.H({metadata:n,postId:t})),onPaused:()=>e(l.D({postId:t})),onPlayable:n=>e(l.E(t,n)),onPlaying:()=>e(l.G(t)),onWatched:()=>e(l.x(t)),onViewableImpression:()=>e(l.B(t)),onFullyViewableImpression:()=>e(l.A(t)),onPlayedWithSound:()=>e(l.F(t)),onWatchedPercent:n=>e(l.P(n,t))}));t.a=j(class extends i.a.Component{constructor(){super(...arguments),this.percentTriggered=0,this._checkForConsumption=s()(e=>{if(this.props.consumed)return;const t=e.target;t&&t.played&&1===t.played.length&&0===t.played.start(0)&&t.played.end(0)===t.duration&&this.props.onWatched()},200),this.onTimeUpdate=(e=>{e.persist(),this._checkForConsumption(e)}),this.onVideoPlayable=(e=>{this.props.metadata||this.sendTransformedMetadata(e),this.props.started||this.props.onPlayable(e.timeStamp)}),this.loadStarted=(e=>{this.props.onLoadStarted(e.timeStamp)}),this.sendTransformedMetadata=(e=>{this.props.onMetadataReceived({id:this.props.postId,length:1e3*e.target.duration,originalHeight:e.target.videoHeight,originalWidth:e.target.videoWidth})}),this.onPaused=(e=>{this.props.onPaused()}),this.onPlaying=(e=>{this.props.loadTimes||this.onVideoPlayable(e),this.props.metadata||this.sendTransformedMetadata(e),this.props.onPlaying()}),this.renderVideoPlayer=(()=>{var e=this.props;const t=e.showCentered,n=e.isListing,o={};return t&&(o.margin="0 auto"),n||(o.maxHeight=`${u.e}px`),i.a.createElement(w,{autoplay:this.props.autoplayPref,className:Object(c.a)(p.b,E.a.styledVideo),height:this.props.height,isListing:this.props.isListing,isNotCardView:this.props.isNotCardView,key:this.props.postId,loop:!0,onBufferingChange:this.props.onBufferingChanged,onLoadStart:this.loadStarted,onLoadedData:this.onVideoPlayable,onLoadedMetadata:this.sendTransformedMetadata,onPause:this.props.onPaused,onPlaying:this.onPlaying,onTimeUpdate:this.onTimeUpdate,shouldLoad:this.props.shouldLoad,shouldPause:this.props.shouldPause,showCentered:this.props.showCentered,showFull:this.props.showFull,source:this.props.source,style:o,width:this.props.width})})}render(){return this.props.isListing?this.renderVideoPlayer():i.a.createElement("div",{className:E.a.container},i.a.createElement("a",{href:this.props.originalSource,target:"_blank"},this.renderVideoPlayer()))}})},"./src/reddit/components/RichTextJson/SpoilerText.tsx":function(e,t,n){"use strict";var o=n("./node_modules/react/index.js"),s=n.n(o),r=n("./node_modules/react-redux/es/index.js"),i=n("./node_modules/reselect/es/index.js"),a=n("./bundled-modules/styled-components/styled-components.min.js"),d=n.n(a),c=n("./src/app/strings/index.ts"),l=n("./src/higherOrderComponents/addOverlayEvents.tsx"),p=n("./src/reddit/components/InfoTextTooltip/index.tsx"),u=n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),h=n("./src/reddit/selectors/user.ts");const m=["left","top"],g=["left","bottom"],f=d.a.span.withConfig({componentId:"s1dobic2-0"})(["opacity: 0;transition: opacity ease-out 1s;"]),x=d.a.span.withConfig({componentId:"s1dobic2-1"})(["// Workaround for chrome to fix tooltip position when\n// spoiler text starts with space\n&:before {content: '';position: absolute;visibility: hidden;}"]),b=d.a.span.withConfig({componentId:"s1dobic2-2"})(["border-radius: 2px;transition: background ease-out 1s;",""," {opacity: ",";}"],e=>e.isOpen?"\n    background: rgba(84, 84, 82, 0.1);\n  ":"\n    background: #545452;\n    cursor: pointer;\n  ",f,e=>e.isOpen?1:0),w=Object(u.a)(d()(p.b).withConfig({componentId:"s1dobic2-3"})(["animation-duration: .1s;&:after {left: 10px;}"]),[l.a.Click,l.a.Keydown]),y=Object(i.createStructuredSelector)({language:h.Q}),E=Object(r.connect)(y);t.a=E(class extends s.a.Component{constructor(e){super(e),this.tooltipTargetElement=null,this.onClick=(e=>{this.state.isOpen||(e.preventDefault(),e.stopPropagation(),this.setState({isOpen:!0}))}),this.setTooltipTargetRef=(e=>this.tooltipTargetElement=e),this.onShowTooltip=(()=>{this.state.isOpen||this.setState({showTooltip:!0})}),this.onHideTooltip=(()=>{this.setState({showTooltip:!1})}),this.state={isOpen:!1,showTooltip:!1}}render(){const e=this.props.language;var t=this.state;const n=t.isOpen,o=t.showTooltip;return s.a.createElement(b,{isOpen:n,onMouseEnter:this.onShowTooltip,onMouseLeave:this.onHideTooltip,onClick:this.onClick},s.a.createElement(f,null,s.a.createElement(x,{innerRef:this.setTooltipTargetRef}),s.a.createElement(w,{isOpen:o,tooltipTarget:this.tooltipTargetElement,text:Object(c.a)(e,"posts.spoilerRevealTooltip"),targetPosition:m,tooltipPosition:g}),this.props.children))}})},"./src/reddit/components/RichTextJson/elements.tsx":function(e,t,n){"use strict";n.d(t,"w",function(){return p}),n.d(t,"e",function(){return u}),n.d(t,"h",function(){return h}),n.d(t,"k",function(){return m}),n.d(t,"c",function(){return g}),n.d(t,"j",function(){return f}),n.d(t,"g",function(){return x}),n.d(t,"v",function(){return b}),n.d(t,"i",function(){return w}),n.d(t,"b",function(){return y}),n.d(t,"f",function(){return E}),n.d(t,"u",function(){return v}),n.d(t,"d",function(){return j}),n.d(t,"l",function(){return C}),n.d(t,"m",function(){return O}),n.d(t,"n",function(){return k}),n.d(t,"t",function(){return I}),n.d(t,"p",function(){return P}),n.d(t,"o",function(){return S}),n.d(t,"q",function(){return M}),n.d(t,"s",function(){return L}),n.d(t,"r",function(){return F}),n.d(t,"a",function(){return H});var o=n("./node_modules/polished/dist/polished.es.js"),s=n("./node_modules/react/index.js"),r=n.n(s),i=n("./bundled-modules/styled-components/styled-components.min.js"),a=n.n(i),d=n("./src/reddit/controls/OutboundLink/index.tsx"),c=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),l=n("./src/reddit/models/Theme/NewColorSystem/index.ts");const p=[a.a.div.withConfig({componentId:"rz6fp9-0"})(["","margin-bottom: 8px;margin-top: 1.4em;"],c.bodyFontH1),a.a.div.withConfig({componentId:"rz6fp9-1"})(["","margin-bottom: 8px;margin-top: 1.4em;"],c.bodyFontH2),a.a.div.withConfig({componentId:"rz6fp9-2"})(["","margin-bottom: 8px;margin-top: 1.4em;"],c.bodyFontH3),a.a.div.withConfig({componentId:"rz6fp9-3"})(["","margin-bottom: 8px;margin-top: 1.4em;"],c.bodyFontH4),a.a.div.withConfig({componentId:"rz6fp9-4"})(["","margin-bottom: 8px;margin-top: 1.4em;"],c.bodyFontH5),a.a.div.withConfig({componentId:"rz6fp9-5"})(["","margin-bottom: 8px;margin-top: 1.4em;"],c.bodyFontH6)],u=a.a.hr.withConfig({componentId:"rz6fp9-6"})(["border: 0;border-top: 1px solid ",";height: 1px;margin: 8px 0;"],e=>Object(o.g)(Object(l.c)(e).bodyText,.2)),h=a.a.code.withConfig({componentId:"rz6fp9-7"})(["","background: rgba(238, 238, 238, 0.8);color: #FF006D;margin: 0 2px;max-width: 100%;overflow: auto;"],c.bodyFontMono),m=a.a.pre.withConfig({componentId:"rz6fp9-8"})(["background: rgba(238, 238, 238, 0.8);display: grid;line-height: 1.4;margin: 4px 0;max-width: 100%;overflow: auto;padding: 8px;> "," {background-color: transparent;color: #222;margin: 0;}"],h),g=a.a.blockquote.withConfig({componentId:"rz6fp9-9"})(["border-left: 4px solid ",";margin: 4px 0 4px 8px;padding-left: 8px;"],e=>Object(o.g)(Object(l.c)(e).bodyText,.2)),f=a.a.p.withConfig({componentId:"rz6fp9-10"})(["padding: 0.25em 0;&:first-child {padding-top: 0;}&:last-child {padding-bottom: 0;}"]),x=a.a.li.withConfig({componentId:"rz6fp9-11"})(["margin: 0.4em 1em;"," {padding: 0;}"],f),b=a.a.ul.withConfig({componentId:"rz6fp9-12"})(["list-style: disc outside;margin: 4px 0 4px 8px;& & {list-style-type: circle;}& & & {list-style-type: square;}"]),w=a.a.ol.withConfig({componentId:"rz6fp9-13"})(["list-style: decimal outside;margin: 4px 0 4px 20px;& & {list-style-type: lower-alpha;}& & & {list-style-type: lower-roman;}"]),y=a.a.strong.withConfig({componentId:"rz6fp9-14"})(["font-weight: 700;"]),E=a.a.em.withConfig({componentId:"rz6fp9-15"})(["font-style: italic;"]),v=a.a.span.withConfig({componentId:"rz6fp9-16"})(["text-decoration: underline;"]),j=e=>r.a.createElement("del",Object.assign({},e)),C=a.a.sub.withConfig({componentId:"rz6fp9-17"})(["position: relative;bottom: -0.4em;font-size: 0.7em;line-height: 0.7em;"]),O=a.a.sup.withConfig({componentId:"rz6fp9-18"})(["position: relative;top: -0.4em;font-size: 0.7em;line-height: 0.7em;"]),k=a.a.table.withConfig({componentId:"rz6fp9-19"})(["border: 2px solid #EEEEEE;border-collapse: collapse;display: inline-block;margin-bottom: 4px;margin-top: 4px;overflow-x: auto;word-break: normal;"]),I=a.a.tr.withConfig({componentId:"rz6fp9-20"})(["border: 1px solid #EEEEEE;&:nth-child(even) {background-color: ",";}&:nth-child(odd) {background-color: ",";}"],e=>Object(o.g)(Object(l.c)(e).body,.8),e=>Object(o.g)(Object(l.c)(e).body,.8)),T=`\n  border: 1px solid #EEEEEE;\n  color: ${e=>Object(l.c)(e).bodyText};\n  padding: 4px 8px;\n`,P=a.a.td.withConfig({componentId:"rz6fp9-21"})(["","background-color: ",";text-align: left;"],T,e=>Object(o.g)(Object(l.c)(e).body,.8)),S=a.a.td.withConfig({componentId:"rz6fp9-22"})(["","text-align: center;"],T),M=a.a.td.withConfig({componentId:"rz6fp9-23"})(["","text-align: right;"],T),L=a.a.th.withConfig({componentId:"rz6fp9-24"})(["","text-align: left;"],T),F=a.a.th.withConfig({componentId:"rz6fp9-25"})(["","text-align: center;"],T),H=(a.a.th.withConfig({componentId:"rz6fp9-26"})(["","text-align: right;"],T),a()(e=>r.a.createElement(d.a,Object.assign({},e,{isSponsored:!1,source:null}))).withConfig({componentId:"rz6fp9-27"})(["&, &:visited {color: ",";text-decoration: underline;}"],e=>Object(l.c)(e).linkText))},"./src/reddit/components/RichTextJson/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/lodash/findLastIndex.js"),s=n.n(o),r=n("./node_modules/react/index.js"),i=n.n(r),a=n("./bundled-modules/styled-components/styled-components.min.js"),d=n.n(a),c=n("./src/lib/raven/index.ts"),l=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),p=n("./src/reddit/helpers/styles/postBackgroundColor.ts"),u=n("./src/reddit/helpers/styles/smartTextColor.ts"),h=n("./src/reddit/models/RichTextJson/index.ts"),m=n("./src/app/strings/index.ts"),g=n("./src/config.ts"),f=n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),x=n("./src/reddit/components/Media/EmbedBox/index.tsx"),b=n("./src/reddit/components/Media/ImageBox/index.tsx"),w=n("./src/reddit/components/Media/MediaContainer/index.tsx"),y=n("./src/reddit/components/Media/VideoBox/index.tsx"),E=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),v=n("./src/reddit/components/RichTextJson/elements.tsx");const j=/\/(\w+)\/asset\/(\w+)\//,C=d()(v.a).withConfig({componentId:"s1smblml-0"})(["display: block;"]),O=d()(b.a).withConfig({componentId:"s1smblml-1"})(["margin-top: 16px;"]),k=d()(w.a).withConfig({componentId:"s1smblml-2"})(["max-width: ",";margin: 16px auto;"],e=>`${e.width}px`),I=d()(e=>i.a.createElement("p",Object.assign({},e))).withConfig({componentId:"s1smblml-3"})(["margin-bottom: 16px;font-size: 0.8em;text-align: center;"]),T=d.a.div.withConfig({componentId:"s1smblml-4"})(["background-color: ",";border-radius: 4px;padding-bottom: 56%; // ~ 16/9 aspect ratio\nposition: relative;width: 100%;margin-bottom: 20px;&:after {bottom: 8px;content: '","';font-size: 0.9em;left: 16px;position: absolute;}"],e=>Object(E.c)(e).inactive,e=>e.e===h.C?Object(m.a)(e.language,"postCreation.processingVideo"):Object(m.a)(e.language,"postCreation.processingImage")),P=({c:e,x:t,y:n})=>i.a.createElement(k,{height:n,width:t,isListing:!1,showCentered:!0,showFull:!0},i.a.createElement(x.a,{isListing:!1,source:e,height:n,width:t,showCentered:!0,showFull:!0})),S=({id:e,s:t})=>i.a.createElement(k,{height:t.y,width:t.x,isListing:!1,showCentered:!0,showFull:!0},i.a.createElement(O,{originalSource:t.u,postId:e,source:t.u,height:t.y,width:t.x,shouldBlur:!1,showCentered:!0,showFull:!0,isListing:!1})),M=({id:e,s:t})=>i.a.createElement(k,{height:t.y,width:t.x,isListing:!1,showCentered:!0,showFull:!0},i.a.createElement(y.a,{height:t.y,isListing:!1,isNotCardView:!0,originalSource:t.mp4,width:t.x,postId:e,source:t.mp4,shouldPause:!1,showCentered:!0,shouldLoad:!0,showFull:!0})),L=({hlsUrl:e,dashUrl:t,x:n,y:o,isGif:s})=>i.a.createElement(k,{height:o,width:n,isListing:!1,showCentered:!0,showFull:!0},i.a.createElement(f.b,{shouldLoad:!0,shouldPause:!0,autoPlay:s,hlsSource:e,mpegDashSource:t,isGif:s})),F=e=>i.a.createElement(I,null,e),H=(e,t="en")=>i.a.createElement(T,{e,language:t}),N=(e,t)=>{const n=e.c;let o="";return t&&(t.e===h.s?o=t.s.u:t.e===h.r?o=t.s.gif:t.e===h.t&&(o=(e=>{const t=j.exec(e);return t?`${g.a.redditUrl}/link/${t[1]}/video/${t[2]}/player`:""})(t.dashUrl))),o?i.a.createElement(C,{title:n,href:o},n||o):null};var B=n("./node_modules/lodash/reduce.js"),z=n.n(B),$=n("./src/lib/unicodeUtils/index.ts"),_=n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),D=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],o=!0,s=!1,r=void 0;try{for(var i,a=e[Symbol.iterator]();!(o=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(d){s=!0,r=d}finally{try{!o&&a.return&&a.return()}finally{if(s)throw r}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const V=e=>{const t=e.c||[],n=e.l,o=[],s=t.length;for(let i=0;i<s;i++){const e=t[i];o.push(e.e===h.w?e.t:Y(e))}const r=v.w[n-1];return i.a.createElement(r,null,o)},W=()=>i.a.createElement(v.e,null),R=e=>{const t=e.c;if(!t)return;const n=t.length,o=[];for(let s=0;s<n;s++)o.push(A(t[s]));return i.a.createElement(v.c,null,o)},U=e=>{const t=e.c;return i.a.createElement(v.k,null,i.a.createElement(v.h,null,t.reduce((e,t,n,o)=>e+=t.t+(n<o.length?"\n":""),"")))},J=e=>{const t=e.c,n=[],o=t.length;for(let r=0;r<o;r++){const e=t[r].c;e&&e.length&&n.push(i.a.createElement(v.g,null,e.map(A)))}const s=e.o?v.i:v.v;return i.a.createElement(s,null,n)},A=e=>{switch(e.e){case h.b:return R(e);case h.c:return U(e);case h.k:return V(e);case h.l:return W();case h.p:return J(e);case h.u:return Q(e);case h.z:return G(e)}},G=e=>{const t=e.c,n=e.h,o=t.length,s=n.length,r=[],a=[],d=[];for(let u=0;u<s;u++){const e=n[u];var c=ne(e.a);const t=c.H,o=c.D;var l=e.c;const s=void 0===l?[]:l;r.push(i.a.createElement(t,null,K(s))),d[u]=o}for(let u=0;u<o;u++){const e=t[u],n=e.length,o=[];for(let t=0;t<n;t++){const n=d[t];var p=e[t].c;const s=void 0===p?[]:p;o.push(i.a.createElement(n,null,K(s)))}a.push(i.a.createElement(v.t,null,o))}return i.a.createElement(v.n,null,i.a.createElement("thead",null,i.a.createElement(v.t,null,r)),i.a.createElement("tbody",null,a))},q=i.a.createElement(v.j,null,i.a.createElement("br",null)),Q=e=>e.c&&e.c.length?i.a.createElement(v.j,null,K(e.c)):q,K=e=>{const t=[],n=e.length;for(let o=0;o<n;o++){const n=e[o];n.e===h.A?t.push(Z(n)):n.e===h.x?t.push(i.a.createElement(_.a,null,K(n.c))):n.e===h.n?t.push(i.a.createElement("br",null)):t.push(Y(n))}return t},X=(e,t)=>{const n=`${t}/${e.t}`;return i.a.createElement(v.a,{href:`/${n}/`},`${e.l?"/":""}${n}`)},Y=e=>{switch(e.e){case h.o:return i.a.createElement(v.a,{title:e.a,href:e.u},Z({t:e.t,f:e.f}));case h.y:return X(e,"r");case h.B:return X(e,"u");case h.g:case h.v:return i.a.createElement(v.a,{href:e.t},e.t)}},Z=e=>{const t=e.f,n=e.t,o=[];if(!t)return te(0,n);const s=Object($.a)(n);let r=0,i=0;const a=t.length;for(;r<a;r++){var d=D(t[r],3);const e=d[0],a=d[1],c=a+d[2],l=s[a],p=s[c]-l;l>i&&o.push(te(0,n.substr(i,l-i))),o.push(te(e,n.substr(l,p))),i=l+p}return i<n.length&&o.push(te(0,n.substr(i))),o},ee={[h.j.monospace]:v.h,[h.j.bold]:v.b,[h.j.italic]:v.f,[h.j.underline]:v.u,[h.j.strikethrough]:v.d,[h.j.subscript]:v.l,[h.j.superscript]:v.m},te=(e,t)=>{let n=t;return n=z()(ee,(t,n,o)=>e&parseInt(o,10)?i.a.createElement(n,null,t):t,n)},ne=e=>{switch(e){case h.f:return{H:v.r,D:v.q};case h.d:return{H:v.r,D:v.o};case h.e:default:return{H:v.r,D:v.p}}};n.d(t,"a",function(){return se}),n.d(t,"b",function(){return ae});var oe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&(n[o[s]]=e[o[s]])}return n};const se=d.a.div.withConfig({componentId:"s13uypuv-0"})(["","color: ",";word-break: break-word;overflow: auto;"],l.bodyFont,e=>Object(u.a)(Object(p.a)(e))),re=e=>e.e===h.k?!!e.c&&!e.c.every(e=>!e.t):e.e!==h.u||!!e.c&&!e.c.every(e=>e.e===h.A&&!e.t),ie=e=>{const t=e.className,n=e.content,o=e.language,r=e.mediaMetadata,a=e.renderMediaAsLinks,d=n.document,c=[],l=(e=>e.findIndex(re))(d),p=(e=>s()(e,re))(d);if(-1!==l)for(let s=l;s<=p;s++){const e=d[s];switch(e.e){case h.k:c.push(V(e));break;case h.l:c.push(W());break;case h.b:c.push(R(e));break;case h.c:c.push(U(e));break;case h.p:c.push(J(e));break;case h.z:c.push(G(e));break;case h.u:c.push(Q(e));break;case h.h:c.push(P(e));break;case h.m:case h.a:case h.C:{const t=h.D(r,e.id);a?c.push(N(e,t)):(t?t.e===h.s?c.push(S(t)):t.e===h.r?c.push(M(t)):t.e===h.t&&c.push(L(t)):c.push(H(e.e,o)),e.c&&c.push(F(e.c)));break}}}return i.a.createElement(se,{className:t,flairStyleTemplate:e.flairStyleTemplate},c)};class ae extends i.a.Component{constructor(){super(...arguments),this.hasError=!1,this.state={hasError:!1},this.renderDefaultFallback=(()=>"Something went wrong while trying to render this")}componentDidCatch(e){this.setState({hasError:!0}),this.logError(e)}logError(e){Object(c.b)(e,{extra:{objectInfo:this.props.renderingObjectInfo},tags:{rtjson:"rendering"}})}render(){const e=this.props;e.renderingObjectInfo;var t=e.renderFallback;const n=void 0===t?this.renderDefaultFallback:t,o=oe(e,["renderingObjectInfo","renderFallback"]);if(this.hasError||this.state.hasError)return n();try{return ie(o)}catch(s){return this.hasError=!0,this.logError(s),n()}}}},"./src/reddit/helpers/styles/mixins/loading.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return c});var o=n("./bundled-modules/styled-components/styled-components.min.js"),s=n("./src/reddit/helpers/styles/components/index.tsx"),r=n("./src/reddit/models/Theme/NewColorSystem/index.ts");const i={COMMENTS:"comments",POSTS:"posts"},a=Object(o.keyframes)(["from { background-position: 0 0; }to { background-position: -200% 0; }"]),d=Object(s["d"])()`
  animation: ${e=>e.isLoading?a:"none"} 1.5s ease infinite;
  background: ${e=>{const t=Object(r.c)(e);return e.isLoading?`linear-gradient(\n          90deg,\n          ${t.field},\n          ${t.inactive},\n          ${t.field}\n        )`:`${t.field}`}};
  background-size: 200%;
`,c="\n  border-radius: 4px;\n";Object(o.css)(["background: ",";border-radius: 4px;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);"],e=>Object(r.c)(e).post)}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueu~db251346.b360684951c16a9df564.js.map

}
/*
     FILE ARCHIVED ON 00:16:02 Jun 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:00:02 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.094
  exclusion.robots.policy: 0.08
  cdx.remote: 0.126
  esindex: 0.015
  LoadShardBlock: 295.861 (6)
  PetaboxLoader3.resolve: 302.96 (4)
  PetaboxLoader3.datanode: 253.708 (8)
  load_resource: 275.225 (2)
*/