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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-scrollview",[],t):"object"==typeof exports?exports["wafer-scrollview"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-scrollview"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221001011841/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,i){"use strict";function r(){return u=s(i("./src/data.js"))}function s(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},d=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in s)return s.value;var n=s.get;if(void 0!==n)return n.call(r)},v=window.wafer,f=v.base,p=v.constants,m=v.features,g=v.utils,y=v.WaferBaseClass,w=m.smoothScroll,b=m.transformProperty,_=p.ATTR_PREFIX,E=g.setTimeout,A=g.clearTimeout,k=g.bindEvent,S=g.clearAndSetInnerHTML,C=g.convertNodeListToArray,x=g.elementInView,L=g.fetchWithCache,T=g.findAncestor,M=g.getConfigFromJSONScriptNode,O=g.isVisible,P=g.throttle,D=g.unbindEvent,W=5,B=250,I="ease-out",N="active",j="visited",V=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume","stateDidUpdate","tabClick"],F=["index"],X="ontouchstart"in window,H=function(e,t,i){e.style.webkitTransition="transform "+t+"ms "+i,e.style.transition="transform "+t+"ms "+i},U=function(e){e.style.webkitTransition="",e.style.transition=""},z=function(e,t){X&&(e.style.cursor=t)},Y=function(){var e=[],t=!1;return{add:function(t,i){e.push(function(e){return function(){return t.call(e)}}(i)),this.exec(i._util.transitionDuration)},exec:function(i){var r=this;t||(t=!0,E(function(){var s=e.shift();switch(t=!1,s.call(),e.length){case 0:return;case 1:r.exec(i);case 2:r.exec(i+50);default:r.exec(0)}},i))}}}(),R=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=i.counter,a=void 0===s?0:s,o=i.syncDelay,d=void 0===o?25:o;n(this,t);var h=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:F})),v=e.getAttribute(_+"behavior"),p=e.getAttribute(_+"snap-behavior");if(h._util=c({},h._util,{elem:e,snapBehavior:p,sliderElem:C(e.getElementsByClassName("slides"))[0]||e,behavior:v,nextBtn:C(e.getElementsByClassName("next-btn"))[0],prevBtn:C(e.getElementsByClassName("prev-btn"))[0]}),V.forEach(function(e){h[e]=h[e].bind(h)}),"native"===v){var m=e.getAttribute(_+"scroll-snap");h._util.isUsingScrollSnap=null===m||void 0===m?0:Number(m);var g=h._util.sliderElem;h._state=h._state||{},h._state.activeElem=null,h._syncWithThrottle=P(function(){f.sync(g)},d,h);var y=C(g.children);return y.some(function(e){return!!e.classList.contains(N)&&(h._state.activeElem=e,!0)}),m&&y.some(function(e){return!e.classList.contains("tab")||(e.classList.add("has-scrollsnap-click","has-click"),!1)}),h._state.activeElem=h._state.activeElem||y[0],h._state.activeElem.classList.add("active"),h.snapNativeScrollViewToActiveElement({calledOnLoad:!0,source:"onLoad"}),h.checkAndAddActiveClassForNativeOverflow(),h.addEventListeners(),l(h)}var w=e.getAttribute(_+"edge-padding")||"",b=parseInt(w,10)||0,A=parseInt(e.getAttribute(_+"right-padding"),10)||0,k=e.getAttribute(_+"resize-end"),S=e.getAttribute(_+"boundary"),x=e.getAttribute(_+"pagination-target"),L=parseInt(e.getAttribute(_+"has-indicator-pagination"),10)||0,O=e.getAttribute(_+"trigger-wf-during-transition"),D=e.getAttribute(_+"scrollview-td"),X=Number(e.getAttribute(_+"auto-switch"))||0,U=Number(e.getAttribute(_+"auto-switch-disable-hover"))||0,Y=Number(e.getAttribute(_+"auto-switch-timeout"))||2e3,R=e.getAttribute(_+"scrollview-ttf"),q=e.getElementsByClassName("wafer-indicators-counts")[0],J=M(q).counts,G=x&&C(document.body.querySelectorAll(x))||C(e.getElementsByClassName("indicators")),K=e.getAttribute(_+"cycle"),Q=void 0,Z=void 0,$=void 0,ee=void 0,te=void 0;K=null===K||void 0===K?0:Number(K),G.some(function(e){Q=e.getAttribute(_+"pagination-type")||"default","count"===Q?(Z=C(e.getElementsByClassName("current-page"))[0],ee=e):(te=e,$=e?C(e.children):null)});var ie=new((u||r()).default)({windowLimit:W}),re=S&&T(e,S);ie.cycle=K;var se=h._util=c({},h._util,{autoSwitchDisableHover:U,autoSwitchTimeout:Y,_switchScrollTimeout:null,boundaryElem:re,counter:a,cycle:K,dataList:ie,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:b,elem:e,index:null,indicatorCountElem:Z,indicatorElems:G,indicatorItems:$,indicatorPagination:L,indicatorsCustomCount:J,indicatorType:Q,indicatorWithCountElem:ee,indicatorWithoutCountElem:te,resizeEnd:null===k||void 0===k?0:Number(k),rightPadding:A,shouldAutoSwitch:X,sliderItemsDataMapping:new Map,transitionDuration:null===D||void 0===D?B:Number(D),transitionTimingFunction:null===R||void 0===R?I:R,triggerWafersDuringTransition:"1"===O?1:0});w&&-1!==w.indexOf("%")&&(se.edgePaddingPercentage=parseInt(w.replace("%",""),10),se.edgePadding=0),h._state={autoSwitchInProgress:!1,autoSwitchPausedByUser:!1,disableEventHandlers:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},se.sliderItems=C(se.sliderElem.children);var ae=se.sliderItems.length;if(h._state.slideWidth=100/ae,h.updateWidth(),H(se.sliderElem,se.transitionDuration,se.transitionTimingFunction),z(se.sliderElem,"-webkit-grab"),se.edgePaddingPercentage){var ne=se.itemWidth*se.edgePaddingPercentage/100;se.sliderElem.style["padding-left"]=ne+"px"}else se.sliderElem.style["padding-left"]=se.edgePadding+"px";for(var le=document.createDocumentFragment(),oe=void 0,ue=!1,ce=0;ce<ae;ce++){var de=se.sliderItems[ce];ie.add(de),de.style.width=h._state.slideWidth+"%",!ue&&ce>0&&de.classList.contains(N)&&(oe=ce,ue=!0),le.appendChild(de)}if(se.sliderElem.appendChild(le),oe)for(var he=0;he<oe;he++)h.showCurrent(1);return h.addEventListeners(),h.addAriaAttributes(),0!==a||oe||(h.preFetch(),h.updateIndicators(a),h.updateButtons(!0),ie.getActive().classList.add(N,j)),e.classList.add("wafer-scrollview-rendered"),window.wafer.ready(function(){E(function(){h._util.index&&h.scrollToIndex(h._util.index),f.emitWaferEvent("scrollview:ready",{elem:e,meta:{}})},40)}),h}return o(t,e),d(t,[{key:"addAriaAttributes",value:function(e){var t=this._util;t.sliderItems=C(t.sliderElem.children),e=e||t.dataList.getActive();for(var i=t.sliderItems.length,r=!1,s=0;s<i;s++){var a=t.sliderItems[s];r=e!==a,a.setAttribute("aria-hidden",r+"")}}},{key:"slidesHasBeenUpdated",value:function(){var e=this._util;e.sliderItems=C(e.sliderElem.children);var t=e.sliderItems.length;this._state.slideWidth=100/t;for(var i=0;i<t;i++){e.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var e=this._util,t=this._state.virtualCounter,i=e.edgePadding,r=e.edgePaddingPercentage,s=e.rightPadding,a=e.sliderElem,n=e.sliderItems;a.style.width="";var l=a.clientWidth;if(r){var o=l*e.edgePaddingPercentage/100;e.sliderElem.style["padding-left"]=o+"px",e.itemWidth=l-2*o}else e.itemWidth=i?l-2*i:s?l-s:l;a.style.width=e.itemWidth*n.length+"px",a.style[b]="translateX(-"+(t*e.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"removeSlide",value:function(e){var t=this._util,i=t.sliderItems.indexOf(e);if(-1!==i){var r=t.indicatorItems[i],s=t.dataList;e.parentNode.removeChild(e),this.slidesHasBeenUpdated(),r.parentNode.removeChild(r),t.indicatorItems.splice(i,1),s.remove(e)}}},{key:"addEventListeners",value:function(){var e=this,i=this._util,r=i.behavior,s=i.elem,a=i.sliderElem;if("native"===r)return window.wafer.ready(function(){window.wafer.on("video:mediacurrent",function(){var t=a.getElementsByClassName("active")[0],i=a.getElementsByClassName("wafer-playlist-active")[0],r=C(a.children).indexOf(i);if(t!==i&&-1!==r){var s=i.getBoundingClientRect(),n=s.width,l=r*n;t.classList.remove("active"),i.classList.add("active"),e._state.activeElem=i,w?a.scrollTo({behavior:"smooth",left:l,top:0}):a.scrollTo(l,0),e.updateButtons(!0)}})}),void k(a||s,"scroll",this._syncWithThrottle);var n=this._util.indicatorItems;if(this.setTimeoutForAutoSwitch(),n){var l=this._util.indicatorWithoutCountElem;l&&(n.forEach(function(e,t){e.setAttribute("data-index",t)}),k(l,"click",this.indicatorClick));this._util.shouldAutoSwitch&&l&&(k(l,"mouseover",this.indicatorMouseover),k(l,"mouseleave",this.indicatorMouseLeave))}h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"scrollToIndex",value:function(e){var t=this._util,i=t.behavior,r=t.counter;if("native"===i){var s=this._state.activeElem,a=C(s.parentNode.children),n=a[e];if(n===s)return;s.classList.remove("active"),this._state.activeElem=n,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"indexChange"})}else if(r>e)for(var l=0;l<r-e;l++)this.showCurrent(-1);else if(r<e)for(var o=0;o<e-r;o++)this.showCurrent(1)}},{key:"pauseAutoSwitch",value:function(){if(this._util.shouldAutoSwitch){var e=this._util.sliderElem.parentNode;this._state.autoSwitchInProgress=!1,this._util._switchScrollTimeout&&A(this._util._switchScrollTimeout,this),e&&e.setAttribute("aria-busy","false")}}},{key:"setTimeoutForAutoSwitch",value:function(){var e=this;if(this._util.shouldAutoSwitch&&!this._state.autoSwitchPausedByUser&&!this._state.autoSwitchInProgress&&!this._state.mouseOnElement){this._state.autoSwitchInProgress=!0;var t=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=E(function(){e.showCurrent(1,{source:"autoscroll",type:"next"})},t,this)}}},{key:"removeEventListeners",value:function(){var e=this._util,i=e.behavior,r=e.elem,s=e.indicatorWithCountElem,a=e.shouldAutoSwitch,n=e.sliderElem;if("native"===i)return void D(n||r,"scroll",this._syncWithThrottle);s&&D(s,"click",this.indicatorClick),a&&s&&(k(s,"mouseover",this.indicatorMouseover),k(s,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){if(!window.wafer.base.isBot)for(var e=this._util.dataList,t=0;t<3;t++){var i=e.getForward(t),r=e.getBackward(t);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"snapNativeScrollViewToActiveElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.calledOnLoad,i=void 0!==t&&t,r=e.source,s=this._util.sliderElem,a=this._state.activeElem;if(!a||i&&0===s.scrollLeft)return void this.updateButtons(!0);var n=this._util.isUsingScrollSnap,l=parseInt(window.getComputedStyle(s).scrollPaddingLeft.replace("px",""),10)||0,o=a.offsetLeft-s.scrollLeft;o-="click"===r?s.clientWidth/2-a.offsetWidth/2+l:a.offsetWidth/2,n?w?s.scrollBy({behavior:"smooth",left:o,top:0}):s.scrollBy(o,0):s.scrollLeft+=o,this.updateButtons(!0)}},{key:"handleResize",value:function(){if("native"===this._util.behavior)return void this.checkAndAddActiveClassForNativeOverflow();var e=this._util.sliderElem;if(O(e)){U(e);var t=this._util,i=t.cycle,r=t.transitionDuration,s=t.transitionTimingFunction;i?this.slidesHasBeenUpdated():this.updateWidth(),E(function(){H(e,r,s)},0)}}},{key:"handleFetch",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.fetchBody,s=i.fetchUrl,a=i.prefetch,n=void 0!==a&&a,l=i.replace,o=void 0!==l&&l,u=i.resultSelector;if(!n||e.parentNode){var c=this._util,d=c.dataList,h=c.sliderItemsDataMapping;h.has(e)||h.set(e,{});var v=h.get(e);!s||void 0!==v.fetchStatus&&2!==v.fetchStatus?(n?f.prefetch(e):f.sync(e),o&&this.slidesHasBeenUpdated()):(v.fetchStatus=0,L(s,{body:r}).then(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.assets,s=void 0===r?{}:r,a=i.html;if(a){var l=void 0,c=!1;if(f.destroy(e),o){var h=document.createElement("div"),p=e.parentNode,m=C(p.children);h.innerHTML=a;var g=u&&h.querySelector(u),y=C((g||h||{}).children),w=m.indexOf(e),b=e===d.tail;d.appendWithReplace(e,y),-1!==w&&(y.forEach(function(t){p.insertBefore(t,e)}),b&&(p.removeChild(m[0]),t._state.virtualCounter=Math.floor(W/2),c=e!==d.tail),p.removeChild(e)),l=p,t._state.hasBeenThreadmilled=!1}else S(e,a),l=e;v.fetchStatus=1,f.syncAssets(s),n?f.prefetch(e):f.sync(l),c&&U(t._util.sliderElem),o&&t.slidesHasBeenUpdated()}}).catch(function(t){f.emitError({name:"WaferScrollview",elem:e,meta:{fetchUrl:s},stack:t.stack||t.message}),v.fetchStatus=2}))}}},{key:"renderSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.prefetch,r=void 0!==i&&i,s=this._util.sliderElem;if(!r||x(s,{offsetX:0,offsetY:0},f.viewport)){var a=void 0,n=void 0,l=void 0,o=void 0,u=e.getAttribute(_+"url");switch(u&&(a="fetch",l=!!Number(e.getAttribute(_+"replace")),n=e.getAttribute(_+"result-selector"),o=e.getAttribute(_+"body")),a){case"fetch":this.handleFetch(e,{fetchBody:o,fetchUrl:u,prefetch:r,replace:l,resultSelector:n});break;default:r?f.prefetch(e):E(function(){f.sync(e)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(e,t){var i=this,r=this._util,s=this._state,a=r.cycle,n=r.dataList,l=r.itemWidth,o=r.sliderElem,u=r.transitionTimingFunction,c=r.transitionDuration,d=n.size,h=s.slideWidth,v=s.virtualCounter;if(1===e){var f=t+1>d;if(a||!f){var p=n.getElementToAppend();if(p&&(p.style.width=h+"%"),H(o,c,u),o.style[b]="translateX(-"+(((v||0)+1)*l+this.negativeWidthCoefficient)+"px)",null===v)return s.virtualCounter=1,this._util.counter=t,n.setNextAsActive(),void this.scrollViewTransformAnimationDidComplete();if(s.virtualCounter++,n.setNextAsActive(),!p)return;Y.add(function(){var e=r.itemWidth,t=r.sliderElem,a=C(t.children);t.removeChild(a[0]),t.appendChild(p),r.sliderItems=C(t.children),s.virtualCounter--,U(t),t.style[b]="translateX(-"+s.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}else if(-1===e){var m=t<0;if(a||!m){var g=n.getElementToPrepend();if(g&&(g.style.width=h+"%"),H(o,c,u),o.style[b]="translateX(-"+(v-1)*l+"px)",s.virtualCounter--,n.setPreviousAsActive(),!g)return;Y.add(function(){var e=r.itemWidth,t=r.sliderElem,a=C(t.children);t.removeChild(a[a.length-1]),t.prepend(g),r.sliderItems=C(t.children),s.virtualCounter++,U(t),t.style[b]="translateX(-"+s.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}}},{key:"showCurrent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this._util,i=t.boundaryElem,r=t.counter,s=t.cycle,n=t.dataList,l=t.elem,o=t.itemWidth,u=t.sliderElem,c=n.size,d=r;if(u.parentNode.setAttribute("aria-busy","true"),this.isValidMove(e)){if(s){if(1===e){var h=d+1>=c;d=h?0:r+e}else if(-1===e){var v=d<=0;d=v?c-1:r+e}}else d=r+e;if(n.getActive().classList.remove(N),d!==r){if(!this._state.hasBeenThreadmilled){for(;[].concat(a(u.children)).length>W;)u.removeChild(u.children[W]);t.sliderItems=C(u.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(e,d),this._util.counter=d;var p=n.getActive();p.classList.add(N,j),this.renderSlide(p),this.updateIndicators(d,r),this.updateButtons(),this.triggerOnChange(),this.preFetch(),d+1===c?(l.classList.add("wafer-scrollview-reached-end"),i&&i.classList.add("wafer-scrollview-boundary-reached-end")):(l.classList.remove("wafer-scrollview-reached-end"),i&&i.classList.remove("wafer-scrollview-boundary-reached-end")),f.emitWaferEvent("scrollview:change",{elem:l,meta:{index:d+1,prevIndex:r+1}})}else{n.getActive().classList.add(N,j);var m=this._state.virtualCounter,g="translateX(-"+(m*o+this.negativeWidthCoefficient)+"px)";g!==this._util.transformValue&&(u.style[b]=g,this._util.transformValue=g)}this._util.index=d,this.didComplete(null,d)}}},{key:"triggerOnChange",value:function(){var e=this._state.triggerNodeMap,t=this._util,i=t.dataList,r=i.getActive(),s=[];e.has(r)?s=e.get(r):(s=C(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),e.set(r,s)),s.forEach(function(e){f.trigger(e)})}},{key:"updateIndicators",value:function(e,t){var i=this._util,r=i.indicatorCountElem,s=i.indicatorsCustomCount,a=i.indicatorItems;if(a){var n=a[t],l=a[e];n&&(n.classList.remove(N),n.removeAttribute("aria-current")),l&&(l.classList.add(N,j),l.setAttribute("aria-current",!0))}r&&(r.innerHTML=s&&s[e]||e+1)}},{key:"updateButtons",value:function(e){var t=this._util,i=t.behavior,r=t.nextBtn,s=t.prevBtn;if("native"!==i){var a=t.counter,n=t.cycle,l=t.dataList,o=l.size;r&&(n&&!e||a!==o-1?r.removeAttribute("disabled"):r.setAttribute("disabled",!0)),s&&(n&&!e||0!==a?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}else{var u=this._state.activeElem;if(u){var c=u.previousElementSibling,d=u.nextElementSibling;r&&(d?r.removeAttribute("disabled"):r.setAttribute("disabled",!0)),s&&(c?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}}}},{key:"updateAfterDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag,i=t.currentDirection,r=t.endX,s=t.horizontalDirection,a=t.startX,n=r-a,l=i===s;l&&n>0&&Math.abs(n)>30?this.showCurrent(-1,e):l&&n<0&&Math.abs(n)>30?this.showCurrent(1,e):this.showCurrent()}},{key:"didLock",value:function(){this.pauseAutoSwitch()}},{key:"didUnLock",value:function(){this.setTimeoutForAutoSwitch()}},{key:"isValidMove",value:function(e){var t=this._util,i=t.counter,r=t.cycle,s=t.dataList,a=s.size;return r?1===e&&i<=a-1||-1===e&&i>=0||0===e:1===e&&i<a-1||-1===e&&i>0||0===e}},{key:"grab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag;this._util.pointerDown=!1,t.endX&&this.updateAfterDrag(e),this.clearDrag()}},{key:"grabbing",value:function(){var e=this._util,t=e.drag,i=e.elem,r=e.itemWidth,s=e.sliderElem,a=e.triggerWafersDuringTransition,n=this._state.virtualCounter,l=t.startX,o=t.endX,u=-1*(n*r+(l-o)),c="translateX("+u+"px)";a&&2*Math.abs(u)>=r&&f.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,s.style[b]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var e=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&A(this._grabTimeout),this._util.grabTimeout=E(function(){e._util.drag.isVerticalDirection=!1},50)}},{key:"indicatorClick",value:function(e){var t=e.target,i=t.getAttribute("data-index");i&&this.scrollToIndex(parseInt(i,10))}},{key:"scrollViewTransformAnimationDidComplete",value:function(){var e=this._util,t=e.sliderElem;this._state.autoSwitchInProgress=!1,this.setTimeoutForAutoSwitch();var i=e.dataList;t.parentNode.setAttribute("aria-busy","false");var r=i.getActive();this.addAriaAttributes(r)}},{key:"indicatorMouseover",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!0,this.pauseAutoSwitch())}},{key:"indicatorMouseLeave",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch())}},{key:"getSnapSlideScrollToNode",value:function(e,t){var i=this._util.sliderElem,r=i.clientWidth,s=!1,a=200,n=!0;for("nextElementSibling"===t&&i.scrollLeft+i.clientWidth+i.clientWidth/2>=i.scrollWidth?s=!0:"previousElementSibling"===t&&i.scrollLeft<i.clientWidth&&(s=!0);e&&e[t]&&n;)a+=e.offsetWidth,!s&&a>=r?n=!1:e=e[t];return e}},{key:"checkAndAddActiveClassForNativeOverflow",value:function(){var e=this._util,t=e.elem,i=e.sliderElem;i.scrollWidth<=i.clientWidth?t.classList.add("wf-scrollview-inactive"):t.classList.remove("wf-scrollview-inactive")}},{key:"next",value:function(e){if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(1,{source:"button",type:"next",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.nextElementSibling,r=this._util.snapBehavior,s=i;i&&("snapSlide"===r&&(s=this.getSnapSlideScrollToNode(s,"nextElementSibling")),t.classList.remove("active"),this._state.activeElem=s,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"next"}))}}}},{key:"pause",value:function(e){e.preventDefault(),e.stopPropagation();var t=this._util,i=t.elem,r=t.shouldAutoSwitch,s=t.sliderElem;r&&i.classList.add("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!0,this.pauseAutoSwitch();var a=s.parentNode;a&&a.setAttribute("aria-live","polite")}},{key:"prev",value:function(e){if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.previousElementSibling,r=this._util.snapBehavior,s=i;i&&("snapSlide"===r&&(s=this.getSnapSlideScrollToNode(s,"previousElementSibling")),t.classList.remove("active"),this._state.activeElem=s,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"prev"}))}}}},{key:"resume",value:function(e){e.preventDefault(),e.stopPropagation();var t=this._util,i=t.elem,r=t.shouldAutoSwitch,s=t.sliderElem;r&&i.classList.remove("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!1,this.setTimeoutForAutoSwitch();var a=s.parentNode;a&&a.setAttribute("aria-live","off")}},{key:"keydown",value:function(e){this._state.disableEventHandlers||(e=e||window.event,37===e.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===e.keyCode&&this.showCurrent(1,{source:"key",type:"next"}))}},{key:"touchstart",value:function(e){if(!this._state.disableEventHandlers){this.pauseAutoSwitch();var t=this._util,i=e.touches[0],r=i.pageX,s=i.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=r,t.drag.startY=s}}},{key:"touchend",value:function(e){this._state.disableEventHandlers||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.drag,r=i.startX,s=i.startY,a=e.touches[0],n=a.pageX,l=a.pageY,o=0;i.isVerticalDirection||(Math.abs(s-l)>8&&(i.isVerticalDirection=s>l?1:-1),r!==n&&(o=r>n?1:-1),i.horizontalDirection=o,i.last!==n&&(i.currentDirection=i.last>n?1:-1,i.last=n),t.pointerDown&&(i.endX=n,i.endY=l,this.isValidMove(o)&&(t.drag.grabbing&&e.cancelable&&e.preventDefault(),Math.abs(s-l)>8&&(i.isVerticalDirection=s>l?1:-1),o&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(e){if(!this._state.disableEventHandlers){e.preventDefault&&e.preventDefault();var t=this._util,i=e.pageX,r=e.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=i,t.drag.startY=r}}},{key:"mouseover",value:function(){if(!this._util.autoSwitchDisableHover){this._state.mouseOnElement=!0;var e=this._util,t=e.elem;e.shouldAutoSwitch&&t.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}}},{key:"mouseup",value:function(e){if(!this._state.disableEventHandlers){var t=this._util.sliderElem;z(t,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(e){var t=this._state.disableEventHandlers,i=this._util.autoSwitchDisableHover;if(!t){if(e.preventDefault(),!i){this._state.mouseOnElement=!1;var r=this._util,s=r.elem,a=r.shouldAutoSwitch;this._state.autoSwitchPausedByUser||(a&&s.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch())}var n=this._util,l=n.drag,o=n.pointerDown,u=n.sliderElem;if(o){var c=e.pageX,d=e.pageY;l.endX=c,l.endY=d,z(u,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.pointerDown,r=t.sliderElem,s=t.drag;if(i){var a=e.pageX,n=e.pageY;this._util.pointerDown=!1,z(r,"-webkit-grab"),s.endX=a,s.endY=n,this.updateAfterDrag(),this.clearDrag()}}}},{key:"tabClick",value:function(e){"native"===this._util.behavior&&(this._util.isUsingScrollSnap&&(this._state.activeElem=e.target,this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"click"})))}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"stateDidUpdate",value:function(){"index"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr&&this.scrollToIndex(parseInt(this._util.index,10))}},{key:"destroy",value:function(){this.removeEventListeners(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this.isReady())return 0;var e=this._util,t=e.counter,i=e.dataList,r=e.resizeEnd,s=e.rightPadding;if(t>=i.size-2){if(s)return-s;if(r){var a=i.tail;if(!a)return 0;var n=a.style.width,l=a.getBoundingClientRect().width;a.style.width="";var o=a.getBoundingClientRect(),u=o.width;return a.style.width=n,-(l-Math.min(u,l))}}return 0}}]),t}(y);R.events={click:[["has-scrollsnap-click","tabClick"],["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["_self","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["_self","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]},t.default=R,e.exports=t.default},"./src/controller.js":function(e,t,i){"use strict";function r(){return o=s(i("./src/base.js"))}function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o,u=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),c=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in s)return s.value;var n=s.get;if(void 0!==n)return n.call(r)},d=window.wafer,h=d.base,v=d.controllers,f=d.utils,p=f.elementInView,m=f.throttle,g=v.WaferBaseController,y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.root,s=void 0===i?document:i,l=e.selector,u=void 0===l?".wafer-scrollview":l;a(this,t);var c=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:s,selector:u,WaferClass:(o||r()).default}));return c.sync(),c._validateWithThrottle=m(function(){c.validate()},25,c),c}return l(t,e),u(t,[{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,i=!0,r=!1,s=void 0;try{for(var a,n=t.values()[Symbol.iterator]();!(i=(a=n.next()).done);i=!0){var l=a.value,o=l.instance;o._util.shouldAutoSwitch&&(e?o.setTimeoutForAutoSwitch():o.pauseAutoSwitch())}}catch(e){r=!0,s=e}finally{try{!i&&n.return&&n.return()}finally{if(r)throw s}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(e){var t=this._state.elementInstances;e.forEach(function(e){var i=t.get(e),r=i.instance;r._util.shouldAutoSwitch&&(p(e,{offsetX:0,offsetY:0},h.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),t}(g);t.default=y,e.exports=t.default},"./src/data.js":function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),a="next",n="prev",l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.windowLimit,s=void 0===i?5:i;r(this,e),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(s/2)}return s(e,[{key:"add",value:function(e){var t=this.tail,i=this.elemMapping.size;if(t){var r=this.elemMapping.get(t);this.elemMapping.set(e,new Map([["index",i],[a,r.get(a)],[n,t]])),this.elemMapping.get(this.tail).set(a,e),this.elemMapping.get(this.head).set(n,e),this.tail=e}else this.elemMapping.set(e,new Map([["index",i],[a,e],[n,e]])),this.head=this.tail=e;this.active||(this.active=e)}},{key:"remove",value:function(e){var t=this.elemMapping.get(e),i=t.get(n),r=t.get(a),s=this.elemMapping.get(i),l=this.elemMapping.get(r);s.set(a,r),l.set(n,i),e===this.active&&(this.active=s),e===this.tail&&(this.tail=i),e===this.head&&(this.head=r),this.elemMapping.delete(e)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(a)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(n)}},{key:"getElementToAppend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;if(this.cycle){i<=2?r=0:i<=3&&(r=1);return this.getForward(r+1)}return t<r?null:i>t+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):t>=i-r?null:t-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(a),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(n),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(e,t){e=e||this.active;var i=this.elemMapping.get(e),r=i.get(n),s=i.get(a),l=t[0],o=l,u=r;this.elemMapping.get(r).set(a,o);for(var c=1;c<t.length;c++){var d=t[c];this.elemMapping.set(o,new Map([[a,d],[n,u]])),u=o,o=d}this.elemMapping.set(o).set(o,new Map([[a,s],[n,u]])),this.elemMapping.get(s).set(n,o),e===this.head?this.head=l:e===this.tail&&(this.tail=o),e===this.active&&(this.active=l),this.elemMapping.delete(e);for(var h=this.elemMapping.get(r),v=h.get("index");h;){var f=h.get(a);h=this.elemMapping.get(f),h.set("index",++v),f===this.tail&&(h=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),e}();t.default=l,e.exports=t.default},"./src/entry.js":function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s;t.default=new((s||function(){return s=r(i("./src/controller.js"))}()).default)({}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 01:18:41 Oct 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:03:04 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.055
  cdx.remote: 0.087
  esindex: 0.01
  LoadShardBlock: 183.513 (6)
  PetaboxLoader3.datanode: 172.11 (7)
  load_resource: 80.769
  PetaboxLoader3.resolve: 39.738
*/