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

(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([["reddit-components-BlankPost"],{"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js":function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var r=i("./node_modules/react/index.js"),n=i.n(r),s=i("./node_modules/react-dom/index.js"),o=(i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"),/^-?\d*\.?\d+(px|%)$/);function a(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length?e.some((function(i,r){return a(e[r],t[r])})):e!==t}var d=new Map;function l(e){void 0===e&&(e={});for(var t,i=e.root||null,r=function(e){var t=(e?e.trim():"0px").split(/\s+/).map((function(e){if(!o.test(e))throw new Error("rootMargin must be a string literal containing pixels and/or percent values");return e})),i=t[0],r=void 0===i?"0px":i,n=t[1],s=void 0===n?r:n,a=t[2],d=void 0===a?r:a,l=t[3];return r+" "+s+" "+d+" "+(void 0===l?s:l)}(e.rootMargin),n=Array.isArray(e.threshold)?e.threshold:[null!=e.threshold?e.threshold:0],s=d.keys();t=s.next().value;){if(!(i!==t.root||r!==t.rootMargin||a(n,t.thresholds)))return t}return null}function u(e,t){var i=d.get(e);if(i)for(var r,n=i.values();r=n.next().value;)if(r.target===t.target)return r;return null}function c(e,t){for(var i=0;i<e.length;i++){var r=u(t,e[i]);r&&r.handleChange(e[i])}}function h(e){return l(e)||new IntersectionObserver(c,e)}var m=i("./node_modules/invariant/browser.js"),p=i.n(m),b={},v=Object.create(null,{errorReporter:{configurable:!1,get:function(){return b.errorReporter||function(e){return p()(!1,e)}},set:function(e){if("function"!=typeof e)throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");b.errorReporter=e}}});function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var T=["root","rootMargin","threshold"],_=["root","rootMargin","threshold","disabled"],E=Object.prototype,g=E.hasOwnProperty,y=E.toString,w=function(e){return T.reduce((function(t,i){if(g.call(e,i)){var r="root"===i&&"[object String]"===y.call(e[i]);t[i]=r?document.querySelector(e[i]):e[i]}return t}),{})},f=function(e){var t,i;function r(){for(var t,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return V(I(t=e.call.apply(e,[this].concat(r))||this),"handleChange",(function(e){t.props.onChange(e,t.externalUnobserve)})),V(I(t),"handleNode",(function(e){var i=t.props.children;if(null!=i){var r=i.ref;r&&("function"==typeof r?r(e):"object"==typeof r&&(r.current=e))}t.targetNode=e&&Object(s.findDOMNode)(e)})),V(I(t),"observe",(function(){return null!=t.props.children&&!t.props.disabled&&(t.targetNode?(t.observer=h(w(t.props)),t.target=t.targetNode,e=I(t),d.has(e.observer)||d.set(e.observer,new Set),d.get(e.observer).add(e),e.observer.observe(e.target),!0):(v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."),!1));var e})),V(I(t),"unobserve",(function(e){!function(e,t){if(d.has(e.observer)){var i=d.get(e.observer);i.delete(e)&&(i.size>0?e.observer.unobserve(t):(e.observer.disconnect(),d.delete(e.observer)))}}(I(t),e)})),V(I(t),"externalUnobserve",(function(){t.unobserve(t.targetNode)})),t}i=e,(t=r).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var o=r.prototype;return o.getSnapshotBeforeUpdate=function(e){var t=this;this.prevTargetNode=this.targetNode;var i=_.some((function(i){return a(t.props[i],e[i])}));return i&&this.prevTargetNode&&(e.disabled||this.unobserve(this.prevTargetNode)),i},o.componentDidUpdate=function(e,t,i){var r=!1;i||(r=this.prevTargetNode!==this.targetNode)&&null!=this.prevTargetNode&&this.unobserve(this.prevTargetNode),(i||r)&&this.observe()},o.componentDidMount=function(){this.observe()},o.componentWillUnmount=function(){this.targetNode&&this.unobserve(this.targetNode)},o.render=function(){var e=this.props.children;return null!=e?n.a.cloneElement(n.a.Children.only(e),{ref:this.handleNode}):null},r}(n.a.Component);V(f,"displayName","IntersectionObserver")},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js":function(e,t,i){"use strict";var r=i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,t,i,n,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var i={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:n};return i.PropTypes=i,i}},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js":function(e,t,i){e.exports=i("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,i){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/lodash/_baseFindKey.js":function(e,t){e.exports=function(e,t,i){var r;return i(e,(function(e,i,n){if(t(e,i,n))return r=i,!1})),r}},"./node_modules/lodash/findKey.js":function(e,t,i){var r=i("./node_modules/lodash/_baseFindKey.js"),n=i("./node_modules/lodash/_baseForOwn.js"),s=i("./node_modules/lodash/_baseIteratee.js");e.exports=function(e,t){return r(e,s(t,3),n)}},"./src/lib/onFocusAndVisibilityChange/index.ts":function(e,t,i){"use strict";var r,n=i("./node_modules/brcast/dist/brcast.es.js"),s=i("./node_modules/lodash/findKey.js"),o=i.n(s);!function(e){e.Hidden="hidden",e.Visible="visible"}(r||(r={}));const a={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};let d=!1;const l=Object(n.a)({documentInFocus:!0});!function(){if(!d){const e=o()(a,(e,t)=>void 0!==document[t]);e&&document.addEventListener(a[e],()=>{l.setState({documentInFocus:document.visibilityState!==r.Hidden})}),d=!0}}(),t.a={subscribe:e=>{return l.subscribe(e)},unsubscribe:e=>{l.unsubscribe(e)}}},"./src/reddit/components/AdViewability/index.tsx":function(e,t,i){"use strict";var r=i("./node_modules/lodash/isEqual.js"),n=i.n(r),s=i("./node_modules/react/index.js"),o=i.n(s),a=i("./node_modules/reselect/es/index.js"),d=i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),l=i("./src/lib/ads/index.ts"),u=i("./src/lib/ads/store.ts"),c=i("./src/lib/onFocusAndVisibilityChange/index.ts"),h=i("./src/reddit/connectors/PostViewable/index.ts"),m=i("./src/reddit/constants/viewabilityEvents.ts"),p=i("./src/reddit/selectors/media.ts"),b=i("./src/reddit/selectors/video.ts");const v=[{event:m.a.Viewable,threshold:l.VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VIEWABILITY_TIME},{event:m.a.Impression,threshold:l.IMPRESSION_THRESHOLD,viewabilityMinimum:l.IMPRESSION_TIME},{event:m.a.VendorFullyViewable,threshold:l.FULL_VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VENDOR_VIEWABILITY_TIME},{event:m.a.GroupMViewable,threshold:l.FULL_VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VIEWABILITY_TIME},{event:m.a.VendorFullyViewableSeconds5,threshold:l.VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VENDOR_VIEWABILITY_TIME_5,remainingTime:l.VENDOR_VIEWABILITY_TIME_5,timeViewingInterrupted:0,cumulative:!0,cumulativeElapsedTime:0},{event:m.a.VendorFullyViewableSeconds15,threshold:l.VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VENDOR_VIEWABILITY_TIME_15,remainingTime:l.VENDOR_VIEWABILITY_TIME_15,timeViewingInterrupted:0,cumulative:!0,cumulativeElapsedTime:0},{event:m.a.LargeAdFullyViewable,threshold:void 0,viewabilityMinimum:l.VIEWABILITY_TIME}],I=[{event:m.a.VideoViewable,threshold:l.VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VIDEO_VIEWABILITY_TIME,remainingTime:l.VIDEO_VIEWABILITY_TIME,timeViewingInterrupted:0},{event:m.a.VideoFullyViewable,threshold:l.FULL_VIEWABILITY_THRESHOLD,viewabilityMinimum:l.VIDEO_FULL_VIEWABILITY_TIME,remainingTime:l.VIDEO_FULL_VIEWABILITY_TIME,timeViewingInterrupted:0},{event:m.a.VideoGroupMViewable,threshold:void 0,viewabilityMinimum:l.VIDEO_VIEWABILITY_TIME,remainingTime:l.VIDEO_VIEWABILITY_TIME,timeViewingInterrupted:0,cumulative:!0,cumulativeElapsedTime:0,checkAudible:!0},{event:m.a.VideoVendorFullyViewable50,threshold:l.FULL_VIEWABILITY_THRESHOLD,viewabilityMinimum:void 0,remainingTime:void 0,timeViewingInterrupted:0,cumulative:!0,cumulativeElapsedTime:0}],V=e=>e.map(e=>{let{event:t,cumulative:i=!1,cumulativeElapsedTime:r,remainingTime:n,threshold:s=null,viewabilityMinimum:o,checkAudible:a=!1,timeViewingInterrupted:d}=e;return{event:t,cumulative:i,checkAudible:a,timer:null,fired:!1,threshold:s,remainingTime:n,cumulativeElapsedTime:0,viewabilityMinimum:o,timeViewingInitialized:0,timeViewingInterrupted:d}}),T=()=>V(v),_=()=>V(I),E=[l.IMPRESSION_THRESHOLD,l.LARGE_AD_FULL_VIEW_THRESHOLD,l.VIEWABILITY_THRESHOLD,l.VIDEO_GROUPM_THRESHOLD,l.FULL_VIEWABILITY_THRESHOLD],g=[l.IMPRESSION_THRESHOLD,l.VIEWABILITY_THRESHOLD,l.VIDEO_GROUPM_THRESHOLD,l.FULL_VIEWABILITY_THRESHOLD],y=[l.IMPRESSION_THRESHOLD,l.LARGE_AD_FULL_VIEW_THRESHOLD,l.VIEWABILITY_THRESHOLD,l.FULL_VIEWABILITY_THRESHOLD],w=e=>"boolean"==typeof e.cumulative&&e.cumulative,f=Object(a.c)({continuousViewingStartedAt:(e,t)=>{let{post:i}=t;return Object(b.c)(e,{postId:i.id})},videoDuration:(e,t)=>{let{post:i}=t;const r=Object(b.i)(e,{postId:i.id});if(r)return r.length},isAudible:e=>!Object(p.c)(e)&&!!Object(p.d)(e),isPlaying:(e,t)=>{let{post:i}=t;return Object(b.e)(e,{postId:i.id})}}),L=Object(h.a)(f);class O extends s.Component{constructor(e){super(e),this.viewabilityStats=T(),this.videoStats=_(),this.pageInFocus=!0,this.inViewStats=[],this.outOfViewStats=[],this.handleViewabilityChange=e=>{this.props.trackDisplay&&this.handleThresholds(e,l.ViewabilityThresholds),this.props.trackVideo&&this.handleThresholds(e,l.VideoViewabilityThresholds,!0),this.checkViewabilityByType(e)},this.checkViewabilityByType=e=>{n()(this.state.event,e)||this.setState({event:e}),this.props.trackDisplay&&this.viewabilityStats.forEach(t=>{this.checkViewability(e,t)}),this.props.isPlaying&&this.props.trackVideo&&this.videoStats.forEach(t=>{t.checkAudible&&!this.props.isAudible||this.checkViewability(e,t)})},this.state={event:null,currentContinuousViewingStartedAt:e.continuousViewingStartedAt}}componentDidMount(){this.visibilityChangeSubscriptionId=c.a.subscribe(e=>{this.pageInFocus=e.documentInFocus,this.state.event&&this.handleViewabilityChange(this.state.event)})}componentWillUnmount(){this.visibilityChangeSubscriptionId&&c.a.unsubscribe(this.visibilityChangeSubscriptionId)}componentDidUpdate(){this.props.trackVideo&&(this.state.currentContinuousViewingStartedAt===this.props.continuousViewingStartedAt?(this.handleThresholds(this.state.event,l.VideoViewabilityThresholds,!0),this.videoStats.forEach(e=>{!this.props.isPlaying||e.checkAudible&&!this.props.isAudible?e.cumulative?this.pauseCumulativeStats(e):this.pauseViewableStats(e):this.checkViewability(this.state.event,e)})):this.resetTimers())}resetTimers(){this.videoStats.forEach(e=>{e.cumulative||this.resetTimer(e)}),this.setState({currentContinuousViewingStartedAt:this.props.continuousViewingStartedAt})}resetTimer(e){this.clearTimer(e),e.timeViewingInitialized=0,void 0!==e.viewabilityMinimum&&(e.remainingTime=e.viewabilityMinimum)}pauseViewableStats(e){let t;if(!e.timer||e.fired)return;e.timeViewingInterrupted=Date.now();const i=e.timeViewingInterrupted-e.timeViewingInitialized;t=(e.viewabilityMinimum||0)-i,e.remainingTime=t>0?t:0,this.clearTimer(e)}pauseCumulativeStats(e){let t;e.timer&&!e.fired&&(e.timeViewingInterrupted=Date.now(),e.cumulativeElapsedTime+=e.timeViewingInterrupted-e.timeViewingInitialized,t=(e.viewabilityMinimum||0)-e.cumulativeElapsedTime,e.remainingTime=t>0?t:0,this.clearTimer(e))}meetsViewabilityRequirements(e,t){let i,r=!1;return"object"==typeof t?(i=t.threshold,r=!!t.playing):i=t,this.isAdequatelyInView(e,i)&&(!r||this.props.isPlaying)}handleThresholds(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{post:r}=this.props,s=t.filter(t=>this.meetsViewabilityRequirements(e,t));!n()(s,this.inViewStats)&&s.length>0&&u.b(r.id,s,i);const o=t.filter(t=>!this.meetsViewabilityRequirements(e,t));!n()(o,this.outOfViewStats)&&o.length>0&&u.e(r.id,o,i),this.outOfViewStats=o,this.inViewStats=s}isAdequatelyInView(e,t){return!!e&&e.intersectionRatio>=t&&this.pageInFocus}addDurationBasedViewabilityMinimum(e){this.props.videoDuration?e.viewabilityMinimum=Math.min(.5*this.props.videoDuration,l.VENDOR_VIEWABILITY_TIME_15):e.viewabilityMinimum=l.VENDOR_VIEWABILITY_TIME_15,e.remainingTime=e.viewabilityMinimum}adjustThreshold(e,t){const{height:i,width:r}=e.boundingClientRect;return!t.threshold&&t.event===m.a.VideoGroupMViewable&&this.props.videoDuration&&(t.threshold=r*i<3e5?l.FULL_VIEWABILITY_THRESHOLD:l.VIDEO_GROUPM_THRESHOLD,t.viewabilityMinimum=.5*this.props.videoDuration),t.threshold||t.event!==m.a.LargeAdFullyViewable||r*i>=242500&&(t.threshold=l.LARGE_AD_FULL_VIEW_THRESHOLD),t.event===m.a.GroupMViewable&&r*i>242500&&(t.threshold=l.VIEWABILITY_THRESHOLD),t}checkViewability(e,t){if(w(t)&&t.event===m.a.VideoVendorFullyViewable50&&this.addDurationBasedViewabilityMinimum(t),e&&e.target&&this.adjustThreshold(e,t),t.threshold&&void 0!==t.viewabilityMinimum){if(this.isAdequatelyInView(e,t.threshold)&&!t.fired){if(t.timer)return;const e=this.getLengthForTimer(t);return e>0?this.initTimer(t,e):this.fireStat(t),void(t.timeViewingInitialized=Date.now())}w(t)&&t.cumulative&&this.pauseCumulativeStats(t),this.clearTimer(t)}}clearTimer(e){e.timer&&(clearTimeout(e.timer),e.timer=null)}getLengthForTimer(e){return void 0!==e.remainingTime?e.remainingTime:e.viewabilityMinimum||0}fireStat(e){setTimeout(()=>this.props.onPostViewable(this.props.post,e.event),0),e.fired=!0}initTimer(e,t){this.clearTimer(e),e.timer=window.setTimeout(()=>{this.fireStat(e)},t)}render(){const{trackDisplay:e,trackVideo:t}=this.props;let i=E;return e&&!t?i=y:!e&&t&&(i=g),o.a.createElement(d.a,{threshold:i,onChange:this.handleViewabilityChange},this.props.children)}}t.a=L(O)},"./src/reddit/components/BlankPost/index.tsx":function(e,t,i){"use strict";i.r(t),i.d(t,"BlankPost",(function(){return c}));var r=i("./node_modules/react/index.js"),n=i.n(r),s=i("./node_modules/reselect/es/index.js"),o=i("./src/reddit/components/AdViewability/index.tsx"),a=i("./src/reddit/connectors/PostViewable/index.ts"),d=i("./src/reddit/selectors/posts.ts"),l=i("./src/lib/classNames/index.ts");const u=Object(a.a)(()=>Object(s.c)({post:d.M})),c=e=>{let{className:t,post:i,onPostViewable:r}=e;return i.isSponsored?n.a.createElement(o.a,{post:i,trackDisplay:!0},n.a.createElement("div",{className:Object(l.a)(t,"Blank ".concat(i.id))})):null};t.default=u(c)},"./src/reddit/connectors/PostViewable/index.ts":function(e,t,i){"use strict";var r=i("./node_modules/react-redux/es/index.js"),n=i("./src/reddit/actions/post.ts");t.a=(e,t)=>Object(r.b)(e,function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(Object.assign({},e),{onPostViewable:n.N})}(t))}}]);
//# sourceMappingURL=reddit-components-BlankPost.a5c41b2e0a1dbcfef47a.js.map

}
/*
     FILE ARCHIVED ON 01:45:22 Aug 06, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:51:03 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.055
  cdx.remote: 0.117
  esindex: 0.011
  LoadShardBlock: 160.919 (6)
  PetaboxLoader3.datanode: 254.46 (8)
  load_resource: 429.098 (2)
  PetaboxLoader3.resolve: 250.063 (2)
*/