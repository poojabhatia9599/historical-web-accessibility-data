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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-scrollview",[],t):"object"==typeof exports?exports["wafer-scrollview"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-scrollview"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var a=i[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220101054500/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,i){"use strict";function r(){return u=a(i("./src/data.js"))}function a(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},d=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h=function e(t,i,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,i,r)}if("value"in a)return a.value;var n=a.get;if(void 0!==n)return n.call(r)},v=window.wafer,f=v.base,p=v.constants,m=v.features,g=v.utils,y=v.WaferBaseClass,w=m.smoothScroll,b=m.transformProperty,_=p.ATTR_PREFIX,E=g.setTimeout,A=g.clearTimeout,k=g.bindEvent,S=g.clearAndSetInnerHTML,C=g.convertNodeListToArray,x=g.elementInView,T=g.fetchWithCache,L=g.findAncestor,M=g.getConfigFromJSONScriptNode,P=g.isVisible,D=g.throttle,O=g.unbindEvent,I=5,B=250,W="ease-out",j="active",N="visited",V=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume","stateDidUpdate"],X=["index"],F="ontouchstart"in window,H=function(e,t,i){e.style.webkitTransition="transform "+t+"ms "+i,e.style.transition="transform "+t+"ms "+i},U=function(e){e.style.webkitTransition="",e.style.transition=""},z=function(e,t){F&&(e.style.cursor=t)},Y=function(){var e=[],t=!1;return{add:function(t,i){e.push(function(e){return function(){return t.call(e)}}(i)),this.exec(i._util.transitionDuration)},exec:function(i){var r=this;t||(t=!0,E(function(){var a=e.shift();switch(t=!1,a.call(),e.length){case 0:return;case 1:r.exec(i);case 2:r.exec(i+50);default:r.exec(0)}},i))}}}(),R=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.counter,s=void 0===a?0:a,l=i.syncDelay,d=void 0===l?25:l;n(this,t);var h=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:X})),v=e.getAttribute(_+"behavior");if(h._util=c({},h._util,{elem:e,sliderElem:C(e.getElementsByClassName("slides"))[0]||e,behavior:v,nextBtn:C(e.getElementsByClassName("next-btn"))[0],prevBtn:C(e.getElementsByClassName("prev-btn"))[0]}),V.forEach(function(e){h[e]=h[e].bind(h)}),"native"===v){var p=e.getAttribute(_+"scroll-snap");h._util.isUsingScrollSnap=null===p||void 0===p?0:Number(p);var m=h._util.sliderElem;h._state=h._state||{},h._state.activeElem=null,h._syncWithThrottle=D(function(){f.sync(m)},d,h);var g=C(m.children);return g.some(function(e){return!!e.classList.contains(j)&&(h._state.activeElem=e,!0)}),h._state.activeElem=h._state.activeElem||g[0],h._state.activeElem.classList.add("active"),h.snapNativeScrollViewToActiveElement({calledOnLoad:!0,source:"onLoad"}),h.addEventListeners(),o(h)}var y=e.getAttribute(_+"edge-padding")||"",w=parseInt(y,10)||0,b=parseInt(e.getAttribute(_+"right-padding"),10)||0,A=e.getAttribute(_+"resize-end"),k=e.getAttribute(_+"boundary"),S=e.getAttribute(_+"pagination-target"),x=parseInt(e.getAttribute(_+"has-indicator-pagination"),10)||0,T=e.getAttribute(_+"trigger-wf-during-transition"),P=e.getAttribute(_+"scrollview-td"),O=Number(e.getAttribute(_+"auto-switch"))||0,F=Number(e.getAttribute(_+"auto-switch-disable-hover"))||0,U=Number(e.getAttribute(_+"auto-switch-timeout"))||2e3,Y=e.getAttribute(_+"scrollview-ttf"),R=e.getElementsByClassName("wafer-indicators-counts")[0],q=M(R).counts,J=S&&C(document.body.querySelectorAll(S))||C(e.getElementsByClassName("indicators")),G=e.getAttribute(_+"cycle"),K=void 0,Q=void 0,Z=void 0,$=void 0,ee=void 0;G=null===G||void 0===G?0:Number(G),J.some(function(e){K=e.getAttribute(_+"pagination-type")||"default","count"===K?(Q=C(e.getElementsByClassName("current-page"))[0],$=e):(ee=e,Z=e?C(e.children):null)});var te=new((u||r()).default)({windowLimit:I}),ie=k&&L(e,k);te.cycle=G;var re=h._util=c({},h._util,{autoSwitchDisableHover:F,autoSwitchTimeout:U,_switchScrollTimeout:null,boundaryElem:ie,counter:s,cycle:G,dataList:te,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:w,elem:e,index:null,indicatorCountElem:Q,indicatorElems:J,indicatorItems:Z,indicatorPagination:x,indicatorsCustomCount:q,indicatorType:K,indicatorWithCountElem:$,indicatorWithoutCountElem:ee,resizeEnd:null===A||void 0===A?0:Number(A),rightPadding:b,shouldAutoSwitch:O,sliderItemsDataMapping:new Map,transitionDuration:null===P||void 0===P?B:Number(P),transitionTimingFunction:null===Y||void 0===Y?W:Y,triggerWafersDuringTransition:"1"===T?1:0});y&&-1!==y.indexOf("%")&&(re.edgePaddingPercentage=parseInt(y.replace("%",""),10),re.edgePadding=0),h._state={autoSwitchInProgress:!1,autoSwitchPausedByUser:!1,disableEventHandlers:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},re.sliderItems=C(re.sliderElem.children);var ae=re.sliderItems.length;if(h._state.slideWidth=100/ae,h.updateWidth(),H(re.sliderElem,re.transitionDuration,re.transitionTimingFunction),z(re.sliderElem,"-webkit-grab"),re.edgePaddingPercentage){var se=re.itemWidth*re.edgePaddingPercentage/100;re.sliderElem.style["padding-left"]=se+"px"}else re.sliderElem.style["padding-left"]=re.edgePadding+"px";for(var ne=document.createDocumentFragment(),oe=void 0,le=!1,ue=0;ue<ae;ue++){var ce=re.sliderItems[ue];te.add(ce),ce.style.width=h._state.slideWidth+"%",!le&&ue>0&&ce.classList.contains(j)&&(oe=ue,le=!0),ne.appendChild(ce)}if(re.sliderElem.appendChild(ne),oe)for(var de=0;de<oe;de++)h.showCurrent(1);return h.addEventListeners(),h.addAriaAttributes(),0!==s||oe||(h.preFetch(),h.updateIndicators(s),h.updateButtons(!0),te.getActive().classList.add(j,N)),e.classList.add("wafer-scrollview-rendered"),window.wafer.ready(function(){E(function(){h._util.index&&h.scrollToIndex(h._util.index),f.emitWaferEvent("scrollview:ready",{elem:e,meta:{}})},40)}),h}return l(t,e),d(t,[{key:"addAriaAttributes",value:function(e){var t=this._util;t.sliderItems=C(t.sliderElem.children),e=e||t.dataList.getActive();for(var i=t.sliderItems.length,r=!1,a=0;a<i;a++){var s=t.sliderItems[a];r=e!==s,s.setAttribute("aria-hidden",r+"")}}},{key:"slidesHasBeenUpdated",value:function(){var e=this._util;e.sliderItems=C(e.sliderElem.children);var t=e.sliderItems.length;this._state.slideWidth=100/t;for(var i=0;i<t;i++){e.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var e=this._util,t=this._state.virtualCounter,i=e.edgePadding,r=e.edgePaddingPercentage,a=e.rightPadding,s=e.sliderElem,n=e.sliderItems;s.style.width="";var o=s.clientWidth;if(r){var l=o*e.edgePaddingPercentage/100;e.sliderElem.style["padding-left"]=l+"px",e.itemWidth=o-2*l}else e.itemWidth=i?o-2*i:a?o-a:o;s.style.width=e.itemWidth*n.length+"px",s.style[b]="translateX(-"+(t*e.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"removeSlide",value:function(e){var t=this._util,i=t.sliderItems.indexOf(e);if(-1!==i){var r=t.indicatorItems[i],a=t.dataList;e.parentNode.removeChild(e),this.slidesHasBeenUpdated(),r.parentNode.removeChild(r),t.indicatorItems.splice(i,1),a.remove(e)}}},{key:"addEventListeners",value:function(){var e=this,i=this._util,r=i.behavior,a=i.elem,s=i.sliderElem;if("native"===r)return window.wafer.ready(function(){window.wafer.on("video:mediacurrent",function(){var t=s.getElementsByClassName("active")[0],i=s.getElementsByClassName("wafer-playlist-active")[0],r=C(s.children).indexOf(i);if(t!==i&&-1!==r){var a=i.getBoundingClientRect(),n=a.width,o=r*n;t.classList.remove("active"),i.classList.add("active"),e._state.activeElem=i,w?s.scrollTo({behavior:"smooth",left:o,top:0}):s.scrollTo(o,0),e.updateButtons(!0)}})}),void k(s||a,"scroll",this._syncWithThrottle);var n=this._util.indicatorItems;if(this.setTimeoutForAutoSwitch(),n){var o=this._util.indicatorWithoutCountElem;o&&(n.forEach(function(e,t){e.setAttribute("data-index",t)}),k(o,"click",this.indicatorClick));this._util.shouldAutoSwitch&&o&&(k(o,"mouseover",this.indicatorMouseover),k(o,"mouseleave",this.indicatorMouseLeave))}h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"scrollToIndex",value:function(e){var t=this._util,i=t.behavior,r=t.counter;if("native"===i){var a=this._state.activeElem,s=C(a.parentNode.children),n=s[e];if(n===a)return;a.classList.remove("active"),this._state.activeElem=n,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"indexChange"})}else if(r>e)for(var o=0;o<r-e;o++)this.showCurrent(-1);else if(r<e)for(var l=0;l<e-r;l++)this.showCurrent(1)}},{key:"pauseAutoSwitch",value:function(){if(this._util.shouldAutoSwitch){var e=this._util.sliderElem.parentNode;this._state.autoSwitchInProgress=!1,this._util._switchScrollTimeout&&A(this._util._switchScrollTimeout,this),e&&e.setAttribute("aria-busy","false")}}},{key:"setTimeoutForAutoSwitch",value:function(){var e=this;if(this._util.shouldAutoSwitch&&!this._state.autoSwitchPausedByUser&&!this._state.autoSwitchInProgress&&!this._state.mouseOnElement){this._state.autoSwitchInProgress=!0;var t=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=E(function(){e.showCurrent(1,{source:"autoscroll",type:"next"})},t,this)}}},{key:"removeEventListeners",value:function(){var e=this._util,i=e.behavior,r=e.elem,a=e.indicatorWithCountElem,s=e.shouldAutoSwitch,n=e.sliderElem;if("native"===i)return void O(n||r,"scroll",this._syncWithThrottle);a&&O(a,"click",this.indicatorClick),s&&a&&(k(a,"mouseover",this.indicatorMouseover),k(a,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){for(var e=this._util.dataList,t=0;t<3;t++){var i=e.getForward(t),r=e.getBackward(t);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"snapNativeScrollViewToActiveElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.calledOnLoad,i=void 0!==t&&t,r=(e.source,this._util),a=r.isUsingScrollSnap,s=r.sliderElem,n=this._state.activeElem;if(!n||i&&0===s.scrollLeft)return void this.updateButtons(!0);var o=n.offsetLeft-s.scrollLeft-n.offsetWidth/2;a?w?s.scrollBy({behavior:"smooth",left:o,top:0}):s.scrollBy(o,0):s.scrollLeft=s.scrollLeft+o,this.updateButtons(!0)}},{key:"handleResize",value:function(){var e=this._util,t=e.behavior,i=e.cycle,r=e.transitionDuration,a=e.transitionTimingFunction;if("native"!==t){var s=this._util.sliderElem;P(s)&&(U(s),i?this.slidesHasBeenUpdated():this.updateWidth(),E(function(){H(s,r,a)},0))}}},{key:"handleFetch",value:function(e){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.fetchBody,s=r.fetchUrl,n=r.prefetch,o=void 0!==n&&n,l=r.replace,u=void 0!==l&&l,c=r.resultSelector;if(!o||e.parentNode){var d=this._util,h=d.dataList,v=d.sliderItemsDataMapping;v.has(e)||v.set(e,{});var p=v.get(e);!s||void 0!==p.fetchStatus&&2!==p.fetchStatus?(o?f.prefetch(e):f.sync(e),u&&this.slidesHasBeenUpdated()):(p.fetchStatus=0,T(s,{body:a}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.assets,a=void 0===r?{}:r,s=t.html;if(s){var n=void 0,l=!1;if(f.destroy(e),u){var d=document.createElement("div"),v=e.parentNode,m=C(v.children);d.innerHTML=s;var g=c&&d.querySelector(c),y=C((g||d||{}).children),w=m.indexOf(e),b=e===h.tail;h.appendWithReplace(e,y),-1!==w&&(y.forEach(function(t){v.insertBefore(t,e)}),b&&(v.removeChild(m[0]),i._state.virtualCounter=Math.floor(I/2),l=e!==h.tail),v.removeChild(e)),n=v,i._state.hasBeenThreadmilled=!1}else S(e,s),n=e;p.fetchStatus=1,f.syncAssets(a),o?f.prefetch(e):f.sync(n),l&&U(i._util.sliderElem),u&&i.slidesHasBeenUpdated()}}).catch(function(i){f.emitError({name:t.constructor.name,elem:e,meta:{fetchUrl:s},stack:i.stack}),p.fetchStatus=2}))}}},{key:"renderSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.prefetch,r=void 0!==i&&i,a=this._util.sliderElem;if(!r||x(a,{offsetX:0,offsetY:0},f.viewport)){var s=void 0,n=void 0,o=void 0,l=void 0,u=e.getAttribute(_+"url");switch(u&&(s="fetch",o=!!Number(e.getAttribute(_+"replace")),n=e.getAttribute(_+"result-selector"),l=e.getAttribute(_+"body")),s){case"fetch":this.handleFetch(e,{fetchBody:l,fetchUrl:u,prefetch:r,replace:o,resultSelector:n});break;default:r?f.prefetch(e):E(function(){f.sync(e)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(e,t){var i=this,r=this._util,a=this._state,s=r.cycle,n=r.dataList,o=r.itemWidth,l=r.sliderElem,u=r.transitionTimingFunction,c=r.transitionDuration,d=n.size,h=a.slideWidth,v=a.virtualCounter;if(1===e){var f=t+1>d;if(s||!f){var p=n.getElementToAppend();if(p&&(p.style.width=h+"%"),H(l,c,u),l.style[b]="translateX(-"+(((v||0)+1)*o+this.negativeWidthCoefficient)+"px)",null===v)return a.virtualCounter=1,this._util.counter=t,n.setNextAsActive(),void this.scrollViewTransformAnimationDidComplete();if(a.virtualCounter++,n.setNextAsActive(),!p)return;Y.add(function(){var e=r.itemWidth,t=r.sliderElem,s=C(t.children);t.removeChild(s[0]),t.appendChild(p),r.sliderItems=C(t.children),a.virtualCounter--,U(t),t.style[b]="translateX(-"+a.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}else if(-1===e){var m=t<0;if(s||!m){var g=n.getElementToPrepend();if(g&&(g.style.width=h+"%"),H(l,c,u),l.style[b]="translateX(-"+(v-1)*o+"px)",a.virtualCounter--,n.setPreviousAsActive(),!g)return;Y.add(function(){var e=r.itemWidth,t=r.sliderElem,s=C(t.children);t.removeChild(s[s.length-1]),t.prepend(g),r.sliderItems=C(t.children),a.virtualCounter++,U(t),t.style[b]="translateX(-"+a.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}}},{key:"showCurrent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this._util,i=t.boundaryElem,r=t.counter,a=t.cycle,n=t.dataList,o=t.elem,l=t.itemWidth,u=t.sliderElem,c=n.size,d=r;if(u.parentNode.setAttribute("aria-busy","true"),this.isValidMove(e)){if(a){if(1===e){var h=d+1>=c;d=h?0:r+e}else if(-1===e){var v=d<=0;d=v?c-1:r+e}}else d=r+e;if(n.getActive().classList.remove(j),d!==r){if(!this._state.hasBeenThreadmilled){for(;[].concat(s(u.children)).length>I;)u.removeChild(u.children[I]);t.sliderItems=C(u.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(e,d),this._util.counter=d;var p=n.getActive();p.classList.add(j,N),this.renderSlide(p),this.updateIndicators(d,r),this.updateButtons(),this.triggerOnChange(),this.preFetch(),d+1===c?(o.classList.add("wafer-scrollview-reached-end"),i&&i.classList.add("wafer-scrollview-boundary-reached-end")):(o.classList.remove("wafer-scrollview-reached-end"),i&&i.classList.remove("wafer-scrollview-boundary-reached-end")),f.emitWaferEvent("scrollview:change",{elem:o,meta:{index:d+1,prevIndex:r+1}})}else{n.getActive().classList.add(j,N);var m=this._state.virtualCounter,g="translateX(-"+(m*l+this.negativeWidthCoefficient)+"px)";g!==this._util.transformValue&&(u.style[b]=g,this._util.transformValue=g)}this._util.index=d,this.didComplete(null,d)}}},{key:"triggerOnChange",value:function(){var e=this._state.triggerNodeMap,t=this._util,i=t.dataList,r=i.getActive(),a=[];e.has(r)?a=e.get(r):(a=C(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),e.set(r,a)),a.forEach(function(e){f.trigger(e)})}},{key:"updateIndicators",value:function(e,t){var i=this._util,r=i.indicatorCountElem,a=i.indicatorsCustomCount,s=i.indicatorItems;if(s){var n=s[t],o=s[e];n&&(n.classList.remove(j),n.removeAttribute("aria-current")),o&&(o.classList.add(j,N),o.setAttribute("aria-current",!0))}r&&(r.innerHTML=a&&a[e]||e+1)}},{key:"updateButtons",value:function(e){var t=this._util,i=t.behavior,r=t.nextBtn,a=t.prevBtn;if("native"!==i){var s=t.counter,n=t.cycle,o=t.dataList,l=o.size;r&&(n&&!e||s!==l-1?r.removeAttribute("disabled"):r.setAttribute("disabled",!0)),a&&(n&&!e||0!==s?a.removeAttribute("disabled"):a.setAttribute("disabled",!0))}else{var u=this._state.activeElem;if(u){var c=u.previousElementSibling,d=u.nextElementSibling;r&&(d?r.removeAttribute("disabled"):r.setAttribute("disabled",!0)),a&&(c?a.removeAttribute("disabled"):a.setAttribute("disabled",!0))}}}},{key:"updateAfterDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag,i=t.currentDirection,r=t.endX,a=t.horizontalDirection,s=t.startX,n=r-s,o=i===a;o&&n>0&&Math.abs(n)>30?this.showCurrent(-1,e):o&&n<0&&Math.abs(n)>30?this.showCurrent(1,e):this.showCurrent()}},{key:"didLock",value:function(){this.pauseAutoSwitch()}},{key:"didUnLock",value:function(){this.setTimeoutForAutoSwitch()}},{key:"isValidMove",value:function(e){var t=this._util,i=t.counter,r=t.cycle,a=t.dataList,s=a.size;return r?1===e&&i<=s-1||-1===e&&i>=0||0===e:1===e&&i<s-1||-1===e&&i>0||0===e}},{key:"grab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag;this._util.pointerDown=!1,t.endX&&this.updateAfterDrag(e),this.clearDrag()}},{key:"grabbing",value:function(){var e=this._util,t=e.drag,i=e.elem,r=e.itemWidth,a=e.sliderElem,s=e.triggerWafersDuringTransition,n=this._state.virtualCounter,o=t.startX,l=t.endX,u=-1*(n*r+(o-l)),c="translateX("+u+"px)";s&&2*Math.abs(u)>=r&&f.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,a.style[b]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var e=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&A(this._grabTimeout),this._util.grabTimeout=E(function(){e._util.drag.isVerticalDirection=!1},50)}},{key:"indicatorClick",value:function(e){var t=e.target,i=t.getAttribute("data-index");i&&this.scrollToIndex(parseInt(i,10))}},{key:"scrollViewTransformAnimationDidComplete",value:function(){var e=this._util,t=e.sliderElem;this._state.autoSwitchInProgress=!1,this.setTimeoutForAutoSwitch();var i=e.dataList;t.parentNode.setAttribute("aria-busy","false");var r=i.getActive();this.addAriaAttributes(r)}},{key:"indicatorMouseover",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!0,this.pauseAutoSwitch())}},{key:"indicatorMouseLeave",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch())}},{key:"next",value:function(e){if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(1,{source:"button",type:"next",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.nextElementSibling;i&&(t.classList.remove("active"),this._state.activeElem=i,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"next"}))}}}},{key:"pause",value:function(e){e.preventDefault(),e.stopPropagation();var t=this._util,i=t.elem,r=t.shouldAutoSwitch,a=t.sliderElem;r&&i.classList.add("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!0,this.pauseAutoSwitch();var s=a.parentNode;s&&s.setAttribute("aria-live","polite")}},{key:"prev",value:function(e){if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.previousElementSibling;i&&(t.classList.remove("active"),this._state.activeElem=i,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"prev"}))}}}},{key:"resume",value:function(e){e.preventDefault(),e.stopPropagation();var t=this._util,i=t.elem,r=t.shouldAutoSwitch,a=t.sliderElem;r&&i.classList.remove("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!1,this.setTimeoutForAutoSwitch();var s=a.parentNode;s&&s.setAttribute("aria-live","off")}},{key:"keydown",value:function(e){this._state.disableEventHandlers||(e=e||window.event,37===e.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===e.keyCode&&this.showCurrent(1,{source:"key",type:"next"}))}},{key:"touchstart",value:function(e){if(!this._state.disableEventHandlers){this.pauseAutoSwitch();var t=this._util,i=e.touches[0],r=i.pageX,a=i.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=r,t.drag.startY=a}}},{key:"touchend",value:function(e){this._state.disableEventHandlers||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.drag,r=i.startX,a=i.startY,s=e.touches[0],n=s.pageX,o=s.pageY,l=0;i.isVerticalDirection||(Math.abs(a-o)>8&&(i.isVerticalDirection=a>o?1:-1),r!==n&&(l=r>n?1:-1),i.horizontalDirection=l,i.last!==n&&(i.currentDirection=i.last>n?1:-1,i.last=n),t.pointerDown&&(i.endX=n,i.endY=o,this.isValidMove(l)&&(t.drag.grabbing&&e.cancelable&&e.preventDefault(),Math.abs(a-o)>8&&(i.isVerticalDirection=a>o?1:-1),l&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(e){if(!this._state.disableEventHandlers){e.preventDefault&&e.preventDefault();var t=this._util,i=e.pageX,r=e.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=i,t.drag.startY=r}}},{key:"mouseover",value:function(){if(!this._util.autoSwitchDisableHover){this._state.mouseOnElement=!0;var e=this._util,t=e.elem;e.shouldAutoSwitch&&t.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}}},{key:"mouseup",value:function(e){if(!this._state.disableEventHandlers){var t=this._util.sliderElem;z(t,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(e){var t=this._state.disableEventHandlers,i=this._util.autoSwitchDisableHover;if(!t){if(e.preventDefault(),!i){this._state.mouseOnElement=!1;var r=this._util,a=r.elem,s=r.shouldAutoSwitch;this._state.autoSwitchPausedByUser||(s&&a.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch())}var n=this._util,o=n.drag,l=n.pointerDown,u=n.sliderElem;if(l){var c=e.pageX,d=e.pageY;o.endX=c,o.endY=d,z(u,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.pointerDown,r=t.sliderElem,a=t.drag;if(i){var s=e.pageX,n=e.pageY;this._util.pointerDown=!1,z(r,"-webkit-grab"),a.endX=s,a.endY=n,this.updateAfterDrag(),this.clearDrag()}}}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"stateDidUpdate",value:function(){"index"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr&&this.scrollToIndex(parseInt(this._util.index,10))}},{key:"destroy",value:function(){this.removeEventListeners(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this._util)return 0;var e=this._util,t=e.counter,i=e.dataList,r=e.resizeEnd,a=e.rightPadding;if(t>=i.size-2){if(a)return-a;if(r){var s=i.tail;if(!s)return 0;var n=s.style.width,o=s.getBoundingClientRect().width;s.style.width="";var l=s.getBoundingClientRect(),u=l.width;return s.style.width=n,-(o-Math.min(u,o))}}return 0}}]),t}(y);R.events={click:[["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["_self","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["_self","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]},t.default=R,e.exports=t.default},"./src/controller.js":function(e,t,i){"use strict";function r(){return l=a(i("./src/base.js"))}function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),c=function e(t,i,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,i);if(void 0===a){var s=Object.getPrototypeOf(t);return null===s?void 0:e(s,i,r)}if("value"in a)return a.value;var n=a.get;if(void 0!==n)return n.call(r)},d=window.wafer,h=d.base,v=d.controllers,f=d.utils,p=f.elementInView,m=f.throttle,g=v.WaferBaseController,y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.root,a=void 0===i?document:i,o=e.selector,u=void 0===o?".wafer-scrollview":o;s(this,t);var c=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:a,selector:u,WaferClass:(l||r()).default}));return c.sync(),c._validateWithThrottle=m(function(){c.validate()},25,c),c}return o(t,e),u(t,[{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,i=!0,r=!1,a=void 0;try{for(var s,n=t.values()[Symbol.iterator]();!(i=(s=n.next()).done);i=!0){var o=s.value,l=o.instance;l._util.shouldAutoSwitch&&(e?l.setTimeoutForAutoSwitch():l.pauseAutoSwitch())}}catch(e){r=!0,a=e}finally{try{!i&&n.return&&n.return()}finally{if(r)throw a}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(e){var t=this._state.elementInstances;e.forEach(function(e){var i=t.get(e),r=i.instance;r._util.shouldAutoSwitch&&(p(e,{offsetX:0,offsetY:0},h.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),t}(g);t.default=y,e.exports=t.default},"./src/data.js":function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),s="next",n="prev",o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.windowLimit,a=void 0===i?5:i;r(this,e),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(a/2)}return a(e,[{key:"add",value:function(e){var t=this.tail,i=this.elemMapping.size;if(t){var r=this.elemMapping.get(t);this.elemMapping.set(e,new Map([["index",i],[s,r.get(s)],[n,t]])),this.elemMapping.get(this.tail).set(s,e),this.elemMapping.get(this.head).set(n,e),this.tail=e}else this.elemMapping.set(e,new Map([["index",i],[s,e],[n,e]])),this.head=this.tail=e;this.active||(this.active=e)}},{key:"remove",value:function(e){var t=this.elemMapping.get(e),i=t.get(n),r=t.get(s),a=this.elemMapping.get(i),o=this.elemMapping.get(r);a.set(s,r),o.set(n,i),e===this.active&&(this.active=a),e===this.tail&&(this.tail=i),e===this.head&&(this.head=r),this.elemMapping.delete(e)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(s)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(n)}},{key:"getElementToAppend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;if(this.cycle){i<=2?r=0:i<=3&&(r=1);return this.getForward(r+1)}return t<r?null:i>t+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):t>=i-r?null:t-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(s),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(n),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(e,t){e=e||this.active;var i=this.elemMapping.get(e),r=i.get(n),a=i.get(s),o=t[0],l=o,u=r;this.elemMapping.get(r).set(s,l);for(var c=1;c<t.length;c++){var d=t[c];this.elemMapping.set(l,new Map([[s,d],[n,u]])),u=l,l=d}this.elemMapping.set(l).set(l,new Map([[s,a],[n,u]])),this.elemMapping.get(a).set(n,l),e===this.head?this.head=o:e===this.tail&&(this.tail=l),e===this.active&&(this.active=o),this.elemMapping.delete(e);for(var h=this.elemMapping.get(r),v=h.get("index");h;){var f=h.get(s);h=this.elemMapping.get(f),h.set("index",++v),f===this.tail&&(h=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),e}();t.default=o,e.exports=t.default},"./src/entry.js":function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a;t.default=new((a||function(){return a=r(i("./src/controller.js"))}()).default)({}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 05:45:00 Jan 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:14 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.105
  exclusion.robots.policy: 0.092
  cdx.remote: 0.128
  esindex: 0.012
  LoadShardBlock: 231.448 (6)
  PetaboxLoader3.datanode: 226.377 (7)
  PetaboxLoader3.resolve: 77.124 (2)
  load_resource: 118.382
*/