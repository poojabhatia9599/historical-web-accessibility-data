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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPag~4ec07ee5"],{"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js":function(t,e,r){"use strict";var n=r("./node_modules/react/index.js"),o=r.n(n),i=r("./node_modules/react-dom/index.js");r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"),r("./node_modules/invariant/browser.js");function s(t,e){return Array.isArray(t)&&Array.isArray(e)&&t.length===e.length?t.some(function(r,n){return s(t[n],e[n])}):t!==e}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.root||null,r=function(t){var e=/^-?\d*\.?\d+(px|%)$/,r=(t||"0px").split(/\s+/).map(function(t){if(!e.test(t))throw new Error("rootMargin must be specified in pixels or percent");return t});return r[1]=r[1]||r[0],r[2]=r[2]||r[0],r[3]=r[3]||r[1],r.join(" ")}(t.rootMargin),n=Array.isArray(t.threshold)?t.threshold:[void 0!==t.threshold?t.threshold:0],o=a.keys(),i=Array.isArray(o),c=0;for(o=i?o:o[Symbol.iterator]();;){var h;if(i){if(c>=o.length)break;h=o[c++]}else{if((c=o.next()).done)break;h=c.value}var u=h;if(![[e,u.root],[r,u.rootMargin],[n,u.thresholds]].some(function(t){return s.apply(void 0,t)}))return u}return null}var a=new Map,h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return t.create=function(t,e){return c(e)||new IntersectionObserver(t,e)},t.findElement=function(t,e){var r=a.get(e);if(r){var n=r.values(),o=Array.isArray(n),i=0;for(n=o?n:n[Symbol.iterator]();;){var s;if(o){if(i>=n.length)break;s=n[i++]}else{if((i=n.next()).done)break;s=i.value}var c=s;if(c.target===t.target)return c}}return null},t.observe=function(t){var e=void 0;a.has(t.observer)?e=a.get(t.observer):(e=new Set,a.set(t.observer,e)),e.add(t),t.observer.observe(t.target)},t.unobserve=function(t){if(a.has(t.observer)){var e=a.get(t.observer);e.delete(t)&&(e.size>0?t.observer.unobserve(t.target):(t.observer.disconnect(),a.delete(t.observer)))}},t.clear=function(){a.clear()},t.count=function(){return a.size},t}(),u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){t.forEach(function(t){var r=h.findElement(t,e);r&&r.handleChange(t)})}var d=["root","rootMargin","threshold"],f=Object.prototype,v=function(t){function e(){var r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=n=p(this,t.call.apply(t,[this].concat(i))),n.handleChange=function(t){n.props.onChange(t),n.props.onlyOnce&&t.isIntersecting&&n.unobserve()},n.handleNode=function(t){"function"==typeof n.props.children.ref&&n.props.children.ref(t),n.currentTarget&&t&&n.currentTarget!==t&&(n.unobserve(),n.shouldResetObserver=!0),n.target=t},p(n,r)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.observe=function(){var t;this.target=(t=this.target,o.a.isValidElement(t)&&"string"==typeof t.type?this.target:Object(i.findDOMNode)(this.target)),this.observer=h.create(l,this.options),h.observe(this)},e.prototype.unobserve=function(){h.unobserve(this)},e.prototype.reobserve=function(){this.unobserve(),this.props.disabled||this.observe()},e.prototype.componentDidMount=function(){this.props.disabled||this.observe()},e.prototype.componentWillUnmount=function(){this.unobserve()},e.prototype.componentDidUpdate=function(){this.shouldResetObserver&&this.reobserve()},e.prototype.componentWillUpdate=function(t){var e=this;this.shouldResetObserver=d.concat(["disabled"]).some(function(r){return s(t[r],e.props[r])})},e.prototype.render=function(){return this.currentTarget=this.target,o.a.cloneElement(o.a.Children.only(this.props.children),{ref:this.handleNode})},u(e,[{key:"options",get:function(){var t=this;return d.reduce(function(e,r){if(f.hasOwnProperty.call(t.props,r)){var n,o=t.props[r];return"root"===r&&"[object String]"===f.toString.call(t.props[r])&&(o=document.querySelector(o)),Object.assign({},e,((n={})[r]=o,n))}return e},{})}}]),e}(o.a.Component);v.displayName="IntersectionObserver";var b=v;r.d(e,"a",function(){return b})},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js":function(t,e,r){"use strict";var n=r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");function o(){}t.exports=function(){function t(t,e,r,o,i,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var r={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return r.checkPropTypes=o,r.PropTypes=r,r}},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js":function(t,e,r){t.exports=r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()},"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js":function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/intersection-observer/intersection-observer.js":function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var r=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,r){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==r[e-1]})},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(i(t,"resize",this._checkForIntersections,!0),i(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),r=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(o){var i=o.element,s=c(i),a=this._rootContainsTarget(i),h=o.entry,u=e&&a&&this._computeTargetAndRootIntersection(i,r),p=o.entry=new n({time:t.performance&&performance.now&&performance.now(),target:i,boundingClientRect:s,rootBounds:r,intersectionRect:u});h?e&&a?this._hasCrossedThreshold(h,p)&&this._queuedEntries.push(p):h&&h.isIntersecting&&this._queuedEntries.push(p):this._queuedEntries.push(p)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(r,n){if("none"!=t.getComputedStyle(r).display){for(var o,i,s,a,u,p,l,d,f=c(r),v=h(r),b=!1;!b;){var g=null,m=1==v.nodeType?t.getComputedStyle(v):{};if("none"==m.display)return;if(v==this.root||v==e?(b=!0,g=n):v!=e.body&&v!=e.documentElement&&"visible"!=m.overflow&&(g=c(v)),g&&(o=g,i=f,void 0,void 0,void 0,void 0,void 0,void 0,s=Math.max(o.top,i.top),a=Math.min(o.bottom,i.bottom),u=Math.max(o.left,i.left),p=Math.min(o.right,i.right),d=a-s,!(f=(l=p-u)>=0&&d>=0&&{top:s,bottom:a,left:u,right:p,width:l,height:d})))break;v=h(v)}return f}},o.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var r=e.documentElement,n=e.body;t={top:0,left:0,right:r.clientWidth||n.clientWidth,width:r.clientWidth||n.clientWidth,bottom:r.clientHeight||n.clientHeight,height:r.clientHeight||n.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,r){return"px"==e.unit?e.value:e.value*(r%2?t.width:t.height)/100}),r={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return r.width=r.right-r.left,r.height=r.bottom-r.top,r},o.prototype._hasCrossedThreshold=function(t,e){var r=t&&t.isIntersecting?t.intersectionRatio||0:-1,n=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==n)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==r||i==n||i<r!=i<n)return!0}},o.prototype._rootIsInDom=function(){return!this.root||a(e,this.root)},o.prototype._rootContainsTarget=function(t){return a(this.root||e,t)},o.prototype._registerInstance=function(){r.indexOf(this)<0&&r.push(this)},o.prototype._unregisterInstance=function(){var t=r.indexOf(this);-1!=t&&r.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,r=e.width*e.height,n=this.intersectionRect,o=n.width*n.height;this.intersectionRatio=r?o/r:this.isIntersecting?1:0}function o(t,e){var r,n,o,i=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(i.root&&1!=i.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(r=this._checkForIntersections.bind(this),n=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout(function(){r(),o=null},n))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(i.rootMargin),this.thresholds=this._initThresholds(i.threshold),this.root=i.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function i(t,e,r,n){"function"==typeof t.addEventListener?t.addEventListener(e,r,n||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,r)}function s(t,e,r,n){"function"==typeof t.removeEventListener?t.removeEventListener(e,r,n||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,r)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(r){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function a(t,e){for(var r=e;r;){if(r==t)return!0;r=h(r)}return!1}function h(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)}}]);
//# sourceMappingURL=vendors~CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPag~4ec07ee5.9aefdd0d01ae0510e9c2.js.map

}
/*
     FILE ARCHIVED ON 00:14:46 Feb 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:49:51 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.136
  exclusion.robots.policy: 0.117
  cdx.remote: 0.153
  esindex: 0.017
  LoadShardBlock: 207.111 (6)
  PetaboxLoader3.datanode: 140.492 (8)
  load_resource: 146.364 (2)
  PetaboxLoader3.resolve: 91.323 (2)
*/