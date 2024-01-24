!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-scrollview",[],t):"object"==typeof exports?exports["wafer-scrollview"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-scrollview"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,i){"use strict";function r(){return u=s(i("./src/data.js"))}function s(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},d=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in s)return s.value;var n=s.get;if(void 0!==n)return n.call(r)},v=window.wafer,f=v.base,p=v.constants,m=v.features,g=v.utils,y=v.WaferBaseClass,w=m.smoothScroll,b=m.transformProperty,_=p.ATTR_PREFIX,E=g.setTimeout,A=g.clearTimeout,k=g.bindEvent,C=g.clearAndSetInnerHTML,S=g.convertNodeListToArray,M=g.elementInView,x=g.fetchWithCache,L=g.findAncestor,T=g.getConfigFromJSONScriptNode,P=g.isVisible,O=g.throttle,D=g.unbindEvent,B=5,W=250,I="ease-out",j="active",N="visited",V=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume"],X="ontouchstart"in window,F=function(e,t,i){e.style.webkitTransition="transform "+t+"ms "+i,e.style.transition="transform "+t+"ms "+i},z=function(e){e.style.webkitTransition="",e.style.transition=""},U=function(e,t){X&&(e.style.cursor=t)},H=function(){var e=[],t=!1;return{add:function(t,i){e.push(function(e){return function(){return t.call(e)}}(i)),this.exec(i._util.transitionDuration)},exec:function(i){var r=this;t||(t=!0,E(function(){var s=e.shift();switch(t=!1,s.call(),e.length){case 0:return;case 1:r.exec(i);case 2:r.exec(i+50);default:r.exec(0)}},i))}}}(),Y=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=i.counter,a=void 0===s?0:s,l=i.syncDelay,d=void 0===l?25:l;n(this,t);var h=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{})),v=e.getAttribute(_+"behavior");if(h._util={elem:e,sliderElem:S(e.getElementsByClassName("slides"))[0]||e,behavior:v,nextBtn:S(e.getElementsByClassName("next-btn"))[0],prevBtn:S(e.getElementsByClassName("prev-btn"))[0]},V.forEach(function(e){h[e]=h[e].bind(h)}),"native"===v){var p=e.getAttribute(_+"scroll-snap");h._util.isUsingScrollSnap=null===p||void 0===p?0:Number(p);var m=h._util.sliderElem;h._state=h._state||{},h._state.activeElem=null,h._syncWithThrottle=O(function(){f.sync(m)},d,h);var g=S(m.children);return g.some(function(e){return!!e.classList.contains(j)&&(h._state.activeElem=e,!0)}),h._state.activeElem=h._state.activeElem||g[0],h._state.activeElem.classList.add("active"),h.snapNativeScrollViewToActiveElement({calledOnLoad:!0,source:"onLoad"}),h.addEventListeners(),o(h)}var y=e.getAttribute(_+"edge-padding")||"",w=parseInt(y,10)||0,b=parseInt(e.getAttribute(_+"right-padding"),10)||0,A=e.getAttribute(_+"resize-end"),k=e.getAttribute(_+"boundary"),C=e.getAttribute(_+"pagination-target"),M=parseInt(e.getAttribute(_+"has-indicator-pagination"),10)||0,x=e.getAttribute(_+"trigger-wf-during-transition"),P=e.getAttribute(_+"scrollview-td"),D=Number(e.getAttribute(_+"auto-switch"))||0,X=Number(e.getAttribute(_+"auto-switch-timeout"))||2e3,z=e.getAttribute(_+"scrollview-ttf"),H=e.getElementsByClassName("wafer-indicators-counts")[0],Y=T(H).counts,R=C&&S(document.body.querySelectorAll(C))||S(e.getElementsByClassName("indicators")),q=e.getAttribute(_+"cycle"),J=void 0,G=void 0,K=void 0,Q=void 0,Z=void 0;q=null===q||void 0===q?0:Number(q),R.some(function(e){J=e.getAttribute(_+"pagination-type")||"default","count"===J?(G=S(e.getElementsByClassName("current-page"))[0],Q=e):(Z=e,K=e?S(e.children):null)});var $=new((u||r()).default)({windowLimit:B}),ee=k&&L(e,k);$.cycle=q;var te=h._util=c({},h._util,{autoSwitchTimeout:X,_switchScrollTimeout:null,boundaryElem:ee,counter:a,cycle:q,dataList:$,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:w,elem:e,indicatorCountElem:G,indicatorElems:R,indicatorItems:K,indicatorPagination:M,indicatorsCustomCount:Y,indicatorWithCountElem:Q,indicatorWithoutCountElem:Z,indicatorType:J,resizeEnd:null===A||void 0===A?0:Number(A),rightPadding:b,shouldAutoSwitch:D,sliderItemsDataMapping:new Map,transitionDuration:null===P||void 0===P?W:Number(P),transitionTimingFunction:null===z||void 0===z?I:z,triggerWafersDuringTransition:"1"===x?1:0});y&&-1!==y.indexOf("%")&&(te.edgePaddingPercentage=parseInt(y.replace("%",""),10),te.edgePadding=0),h._state={autoSwitchInProgress:!1,autoSwitchPausedByUser:!1,disableEventHandlers:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},te.sliderItems=S(te.sliderElem.children);var ie=te.sliderItems.length;if(h._state.slideWidth=100/ie,h.updateWidth(),F(te.sliderElem,te.transitionDuration,te.transitionTimingFunction),U(te.sliderElem,"-webkit-grab"),te.edgePaddingPercentage){var re=te.itemWidth*te.edgePaddingPercentage/100;te.sliderElem.style["padding-left"]=re+"px"}else te.sliderElem.style["padding-left"]=te.edgePadding+"px";for(var se=document.createDocumentFragment(),ae=void 0,ne=!1,oe=0;oe<ie;oe++){var le=te.sliderItems[oe];$.add(le),le.style.width=h._state.slideWidth+"%",!ne&&oe>0&&le.classList.contains(j)&&(ae=oe,ne=!0),se.appendChild(le)}if(te.sliderElem.appendChild(se),ae)for(var ue=0;ue<ae;ue++)h.showCurrent(1);return h.addEventListeners(),h.addAriaAttributes(),0!==a||ae||(h.preFetch(),h.updateIndicators(a),h.updateButtons(!0),$.getActive().classList.add(j,N)),e.classList.add("wafer-scrollview-rendered"),window.wafer.ready(function(){E(function(){f.emitWaferEvent("scrollview:ready",{elem:e,meta:{}})},40)}),h}return l(t,e),d(t,[{key:"addAriaAttributes",value:function(e){var t=this._util;t.sliderItems=S(t.sliderElem.children),e=e||t.dataList.getActive();for(var i=t.sliderItems.length,r=!1,s=0;s<i;s++){var a=t.sliderItems[s];r=e!==a,a.setAttribute("aria-hidden",r+"")}}},{key:"slidesHasBeenUpdated",value:function(){var e=this._util;e.sliderItems=S(e.sliderElem.children);var t=e.sliderItems.length;this._state.slideWidth=100/t;for(var i=0;i<t;i++){e.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var e=this._util,t=this._state.virtualCounter,i=e.edgePadding,r=e.edgePaddingPercentage,s=e.rightPadding,a=e.sliderElem,n=e.sliderItems;a.style.width="";var o=a.clientWidth;if(r){var l=o*e.edgePaddingPercentage/100;e.sliderElem.style["padding-left"]=l+"px",e.itemWidth=o-2*l}else e.itemWidth=i?o-2*i:s?o-s:o;a.style.width=e.itemWidth*n.length+"px",a.style[b]="translateX(-"+(t*e.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"removeSlide",value:function(e){var t=this._util,i=t.sliderItems.indexOf(e);if(-1!==i){var r=t.indicatorItems[i],s=t.dataList;e.parentNode.removeChild(e),this.slidesHasBeenUpdated(),r.parentNode.removeChild(r),t.indicatorItems.splice(i,1),s.remove(e)}}},{key:"addEventListeners",value:function(){var e=this,i=this._util,r=i.behavior,s=i.elem,a=i.sliderElem;if("native"===r)return window.wafer.ready(function(){window.wafer.on("video:mediacurrent",function(){var t=a.getElementsByClassName("active")[0],i=a.getElementsByClassName("wafer-playlist-active")[0],r=S(a.children).indexOf(i);if(t!==i&&-1!==r){var s=i.getBoundingClientRect(),n=s.width,o=r*n;t.classList.remove("active"),i.classList.add("active"),e._state.activeElem=i,w?a.scrollTo({behavior:"smooth",left:o,top:0}):a.scrollTo(o,0),e.updateButtons(!0)}})}),void k(a||s,"scroll",this._syncWithThrottle);var n=this._util.indicatorItems;if(this.setTimeoutForAutoSwitch(),n){var o=this._util.indicatorWithoutCountElem;o&&(n.forEach(function(e,t){e.setAttribute("data-index",t)}),k(o,"click",this.indicatorClick));this._util.shouldAutoSwitch&&o&&(k(o,"mouseover",this.indicatorMouseover),k(o,"mouseleave",this.indicatorMouseLeave))}h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"pauseAutoSwitch",value:function(){this._util.shouldAutoSwitch&&(this._state.autoSwitchInProgress=!1,this._util._switchScrollTimeout&&A(this._util._switchScrollTimeout,this))}},{key:"setTimeoutForAutoSwitch",value:function(){var e=this;if(this._util.shouldAutoSwitch&&!this._state.autoSwitchPausedByUser&&!this._state.autoSwitchInProgress&&!this._state.mouseOnElement){this._state.autoSwitchInProgress=!0;var t=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=E(function(){e.showCurrent(1,{source:"autoscroll",type:"next"})},t,this)}}},{key:"removeEventListeners",value:function(){var e=this._util,i=e.behavior,r=e.elem,s=e.indicatorWithCountElem,a=e.shouldAutoSwitch,n=e.sliderElem;if("native"===i)return void D(n||r,"scroll",this._syncWithThrottle);s&&D(s,"click",this.indicatorClick),a&&s&&(k(s,"mouseover",this.indicatorMouseover),k(s,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){for(var e=this._util.dataList,t=0;t<3;t++){var i=e.getForward(t),r=e.getBackward(t);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"snapNativeScrollViewToActiveElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.calledOnLoad,i=void 0!==t&&t,r=e.source,s=this._util,a=s.isUsingScrollSnap,n=s.sliderElem,o=this._state.activeElem;if(!o||i&&0===n.scrollLeft)return void this.updateButtons(!0);var l=o.getBoundingClientRect(),u=l.left,c=l.width,d=u;if(a)w?("next"===r?d=c:"prev"===r&&(d=-1*c),n.scrollBy({behavior:"smooth",left:d,top:0})):n.scrollBy(u,0),this.updateButtons(!0);else{var h=n.getBoundingClientRect(),v=h.width;n.scrollLeft=c>=v?u-30:u-(v-c)/2}}},{key:"handleResize",value:function(){var e=this._util,t=e.behavior,i=e.cycle,r=e.transitionDuration,s=e.transitionTimingFunction;if("native"!==t){var a=this._util.sliderElem;P(a)&&(z(a),i?this.slidesHasBeenUpdated():this.updateWidth(),E(function(){F(a,r,s)},0))}}},{key:"handleFetch",value:function(e){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=r.fetchBody,a=r.fetchUrl,n=r.prefetch,o=void 0!==n&&n,l=r.replace,u=void 0!==l&&l,c=r.resultSelector;if(!o||e.parentNode){var d=this._util,h=d.dataList,v=d.sliderItemsDataMapping;v.has(e)||v.set(e,{});var p=v.get(e);!a||void 0!==p.fetchStatus&&2!==p.fetchStatus?(o?f.prefetch(e):f.sync(e),u&&this.slidesHasBeenUpdated()):(p.fetchStatus=0,x(a,{body:s}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.assets,s=void 0===r?{}:r,a=t.html;if(a){var n=void 0,l=!1;if(f.destroy(e),u){var d=document.createElement("div"),v=e.parentNode,m=S(v.children);d.innerHTML=a;var g=c&&d.querySelector(c),y=S((g||d||{}).children),w=m.indexOf(e),b=e===h.tail;h.appendWithReplace(e,y),-1!==w&&(y.forEach(function(t){v.insertBefore(t,e)}),b&&(v.removeChild(m[0]),i._state.virtualCounter=Math.floor(B/2),l=e!==h.tail),v.removeChild(e)),n=v,i._state.hasBeenThreadmilled=!1}else C(e,a),n=e;p.fetchStatus=1,f.syncAssets(s),o?f.prefetch(e):f.sync(n),l&&z(i._util.sliderElem),u&&i.slidesHasBeenUpdated()}}).catch(function(i){f.emitError({name:t.constructor.name,elem:e,meta:{fetchUrl:a},stack:i.stack}),p.fetchStatus=2}))}}},{key:"renderSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.prefetch,r=void 0!==i&&i,s=this._util.sliderElem;if(!r||M(s,{offsetX:0,offsetY:0},f.viewport)){var a=void 0,n=void 0,o=void 0,l=void 0,u=e.getAttribute(_+"url");switch(u&&(a="fetch",o=!!Number(e.getAttribute(_+"replace")),n=e.getAttribute(_+"result-selector"),l=e.getAttribute(_+"body")),a){case"fetch":this.handleFetch(e,{fetchBody:l,fetchUrl:u,prefetch:r,replace:o,resultSelector:n});break;default:r?f.prefetch(e):E(function(){f.sync(e)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(e,t){var i=this,r=this._util,s=this._state,a=r.cycle,n=r.dataList,o=r.itemWidth,l=r.sliderElem,u=r.transitionTimingFunction,c=r.transitionDuration,d=n.size,h=s.slideWidth,v=s.virtualCounter;if(1===e){var f=t+1>d;if(a||!f){var p=n.getElementToAppend();if(p&&(p.style.width=h+"%"),F(l,c,u),l.style[b]="translateX(-"+(((v||0)+1)*o+this.negativeWidthCoefficient)+"px)",null===v)return s.virtualCounter=1,this._util.counter=t,n.setNextAsActive(),void this.scrollViewTransformAnimationDidComplete();if(s.virtualCounter++,n.setNextAsActive(),!p)return;H.add(function(){var e=r.itemWidth,t=r.sliderElem,a=S(t.children);t.removeChild(a[0]),t.appendChild(p),r.sliderItems=S(t.children),s.virtualCounter--,z(t),t.style[b]="translateX(-"+s.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}else if(-1===e){var m=t<0;if(a||!m){var g=n.getElementToPrepend();if(g&&(g.style.width=h+"%"),F(l,c,u),l.style[b]="translateX(-"+(v-1)*o+"px)",s.virtualCounter--,n.setPreviousAsActive(),!g)return;H.add(function(){var e=r.itemWidth,t=r.sliderElem,a=S(t.children);t.removeChild(a[a.length-1]),t.prepend(g),r.sliderItems=S(t.children),s.virtualCounter++,z(t),t.style[b]="translateX(-"+s.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}}},{key:"showCurrent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this._util,i=t.boundaryElem,r=t.counter,s=t.cycle,n=t.dataList,o=t.elem,l=t.itemWidth,u=t.sliderElem,c=n.size,d=r;if(this.isValidMove(e)){if(s){if(1===e){var h=d+1>=c;d=h?0:r+e}else if(-1===e){var v=d<=0;d=v?c-1:r+e}}else d=r+e;if(n.getActive().classList.remove(j),d!==r){if(!this._state.hasBeenThreadmilled){for(;[].concat(a(u.children)).length>B;)u.removeChild(u.children[B]);t.sliderItems=S(u.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(e,d),this._util.counter=d;var p=n.getActive();p.classList.add(j,N),this.renderSlide(p),this.updateIndicators(d,r),this.updateButtons(),this.triggerOnChange(),this.preFetch(),d+1===c?(o.classList.add("wafer-scrollview-reached-end"),i&&i.classList.add("wafer-scrollview-boundary-reached-end")):(o.classList.remove("wafer-scrollview-reached-end"),i&&i.classList.remove("wafer-scrollview-boundary-reached-end")),this.addAriaAttributes(p),f.emitWaferEvent("scrollview:change",{elem:o,meta:{index:d+1,prevIndex:r+1}})}else{var m=n.getActive();m.classList.add(j,N);var g=this._state.virtualCounter,y="translateX(-"+(g*l+this.negativeWidthCoefficient)+"px)";y!==this._util.transformValue&&(u.style[b]=y,this._util.transformValue=y),this.addAriaAttributes(m)}}}},{key:"triggerOnChange",value:function(){var e=this._state.triggerNodeMap,t=this._util,i=t.dataList,r=i.getActive(),s=[];e.has(r)?s=e.get(r):(s=S(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),e.set(r,s)),s.forEach(function(e){f.trigger(e)})}},{key:"updateIndicators",value:function(e,t){var i=this._util,r=i.indicatorCountElem,s=i.indicatorsCustomCount,a=i.indicatorItems;a&&(a[t]&&a[t].classList.remove(j),a[e]&&a[e].classList.add(j,N)),r&&(r.innerHTML=s&&s[e]||e+1)}},{key:"updateButtons",value:function(e){var t=this._util,i=t.behavior,r=t.nextBtn,s=t.prevBtn;if("native"!==i){var a=t.counter,n=t.cycle,o=t.dataList,l=o.size;r&&(n&&!e||a!==l-1?r.removeAttribute("disabled"):r.setAttribute("disabled",!0)),s&&(n&&!e||0!==a?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}else{var u=this._state.activeElem;if(u){var c=u.previousElementSibling,d=u.nextElementSibling;r&&(d?r.removeAttribute("disabled"):r.setAttribute("disabled",!0)),s&&(c?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}}}},{key:"updateAfterDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag,i=t.currentDirection,r=t.endX,s=t.horizontalDirection,a=t.startX,n=r-a,o=i===s;o&&n>0&&Math.abs(n)>30?this.showCurrent(-1,e):o&&n<0&&Math.abs(n)>30?this.showCurrent(1,e):this.showCurrent()}},{key:"didLock",value:function(){this.pauseAutoSwitch()}},{key:"didUnLock",value:function(){this.setTimeoutForAutoSwitch()}},{key:"isValidMove",value:function(e){var t=this._util,i=t.counter,r=t.cycle,s=t.dataList,a=s.size;return r?1===e&&i<=a-1||-1===e&&i>=0||0===e:1===e&&i<a-1||-1===e&&i>0||0===e}},{key:"grab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag;this._util.pointerDown=!1,t.endX&&this.updateAfterDrag(e),this.clearDrag()}},{key:"grabbing",value:function(){var e=this._util,t=e.drag,i=e.elem,r=e.itemWidth,s=e.sliderElem,a=e.triggerWafersDuringTransition,n=this._state.virtualCounter,o=t.startX,l=t.endX,u=-1*(n*r+(o-l)),c="translateX("+u+"px)";a&&2*Math.abs(u)>=r&&f.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,s.style[b]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var e=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&A(this._grabTimeout),this._util.grabTimeout=E(function(){e._util.drag.isVerticalDirection=!1},50)}},{key:"indicatorClick",value:function(e){var t=e.target,i=t.getAttribute("data-index");if(i){var r=this._util.counter;if(i=parseInt(i,10),r>i)for(var s=0;s<r-i;s++)this.showCurrent(-1);else if(r<i)for(var a=0;a<i-r;a++)this.showCurrent(1)}}},{key:"scrollViewTransformAnimationDidComplete",value:function(){this._state.autoSwitchInProgress=!1,this.setTimeoutForAutoSwitch()}},{key:"indicatorMouseover",value:function(e){this._state.mouseOnElement=!0,this.pauseAutoSwitch()}},{key:"indicatorMouseLeave",value:function(e){this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch()}},{key:"next",value:function(e){if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(1,{source:"button",type:"next",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.nextElementSibling;i&&(t.classList.remove("active"),this._state.activeElem=i,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"next"}))}}}},{key:"pause",value:function(e){e.preventDefault(),e.stopPropagation();var t=this._util,i=t.elem;t.shouldAutoSwitch&&i.classList.add("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!0,this.pauseAutoSwitch()}},{key:"prev",value:function(e){if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.previousElementSibling;i&&(t.classList.remove("active"),this._state.activeElem=i,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"prev"}))}}}},{key:"resume",value:function(e){e.preventDefault(),e.stopPropagation();var t=this._util,i=t.elem;t.shouldAutoSwitch&&i.classList.remove("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!1,this.setTimeoutForAutoSwitch()}},{key:"keydown",value:function(e){this._state.disableEventHandlers||(e=e||window.event,37===e.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===e.keyCode&&this.showCurrent(1,{source:"key",type:"next"}))}},{key:"touchstart",value:function(e){if(!this._state.disableEventHandlers){this.pauseAutoSwitch();var t=this._util,i=e.touches[0],r=i.pageX,s=i.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=r,t.drag.startY=s}}},{key:"touchend",value:function(e){this._state.disableEventHandlers||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.drag,r=i.startX,s=i.startY,a=e.touches[0],n=a.pageX,o=a.pageY,l=0;i.isVerticalDirection||(Math.abs(s-o)>8&&(i.isVerticalDirection=s>o?1:-1),r!==n&&(l=r>n?1:-1),i.horizontalDirection=l,i.last!==n&&(i.currentDirection=i.last>n?1:-1,i.last=n),t.pointerDown&&(i.endX=n,i.endY=o,this.isValidMove(l)&&(t.drag.grabbing&&e.cancelable&&e.preventDefault(),Math.abs(s-o)>8&&(i.isVerticalDirection=s>o?1:-1),l&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(e){if(!this._state.disableEventHandlers){e.preventDefault&&e.preventDefault();var t=this._util,i=e.pageX,r=e.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=i,t.drag.startY=r}}},{key:"mouseover",value:function(){this._state.mouseOnElement=!0;var e=this._util,t=e.elem;e.shouldAutoSwitch&&t.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}},{key:"mouseup",value:function(e){if(!this._state.disableEventHandlers){var t=this._util.sliderElem;U(t,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(e){var t=this._state.disableEventHandlers;if(this._state.mouseOnElement=!1,!t){if(e.preventDefault(),!this._state.autoSwitchPausedByUser){var i=this._util,r=i.elem;i.shouldAutoSwitch&&r.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch()}var s=this._util,a=s.drag,n=s.pointerDown,o=s.sliderElem;if(n){var l=e.pageX,u=e.pageY;a.endX=l,a.endY=u,U(o,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.pointerDown,r=t.sliderElem,s=t.drag;if(i){var a=e.pageX,n=e.pageY;this._util.pointerDown=!1,U(r,"-webkit-grab"),s.endX=a,s.endY=n,this.updateAfterDrag(),this.clearDrag()}}}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){this.removeEventListeners(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this._util)return 0;var e=this._util,t=e.counter,i=e.dataList,r=e.resizeEnd,s=e.rightPadding;if(t>=i.size-2){if(s)return-s;if(r){var a=i.tail;if(!a)return 0;var n=a.style.width,o=a.getBoundingClientRect().width;a.style.width="";var l=a.getBoundingClientRect(),u=l.width;return a.style.width=n,-(o-Math.min(u,o))}}return 0}}]),t}(y);Y.events={click:[["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["_self","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["_self","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]},t.default=Y,e.exports=t.default},"./src/controller.js":function(e,t,i){"use strict";function r(){return l=s(i("./src/base.js"))}function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),c=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in s)return s.value;var n=s.get;if(void 0!==n)return n.call(r)},d=window.wafer,h=d.base,v=d.controllers,f=d.utils,p=f.elementInView,m=f.throttle,g=v.WaferBaseController,y=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.root,s=void 0===i?document:i,o=e.selector,u=void 0===o?".wafer-scrollview":o;a(this,t);var c=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:s,selector:u,WaferClass:(l||r()).default}));return c.sync(),c._validateWithThrottle=m(function(){c.validate()},25,c),c}return o(t,e),u(t,[{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,i=!0,r=!1,s=void 0;try{for(var a,n=t.values()[Symbol.iterator]();!(i=(a=n.next()).done);i=!0){var o=a.value,l=o.instance;l._util.shouldAutoSwitch&&(e?l.setTimeoutForAutoSwitch():l.pauseAutoSwitch())}}catch(e){r=!0,s=e}finally{try{!i&&n.return&&n.return()}finally{if(r)throw s}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(e){var t=this._state.elementInstances;e.forEach(function(e){var i=t.get(e),r=i.instance;r._util.shouldAutoSwitch&&(p(e,{offsetX:0,offsetY:0},h.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),t}(g);t.default=y,e.exports=t.default},"./src/data.js":function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),a="next",n="prev",o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.windowLimit,s=void 0===i?5:i;r(this,e),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(s/2)}return s(e,[{key:"add",value:function(e){var t=this.tail,i=this.elemMapping.size;if(t){var r=this.elemMapping.get(t);this.elemMapping.set(e,new Map([["index",i],[a,r.get(a)],[n,t]])),this.elemMapping.get(this.tail).set(a,e),this.elemMapping.get(this.head).set(n,e),this.tail=e}else this.elemMapping.set(e,new Map([["index",i],[a,e],[n,e]])),this.head=this.tail=e;this.active||(this.active=e)}},{key:"remove",value:function(e){var t=this.elemMapping.get(e),i=t.get(n),r=t.get(a),s=this.elemMapping.get(i),o=this.elemMapping.get(r);s.set(a,r),o.set(n,i),e===this.active&&(this.active=s),e===this.tail&&(this.tail=i),e===this.head&&(this.head=r),this.elemMapping.delete(e)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(a)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(n)}},{key:"getElementToAppend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;if(this.cycle){i<=2?r=0:i<=3&&(r=1);return this.getForward(r+1)}return t<r?null:i>t+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):t>=i-r?null:t-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(a),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(n),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(e,t){e=e||this.active;var i=this.elemMapping.get(e),r=i.get(n),s=i.get(a),o=t[0],l=o,u=r;this.elemMapping.get(r).set(a,l);for(var c=1;c<t.length;c++){var d=t[c];this.elemMapping.set(l,new Map([[a,d],[n,u]])),u=l,l=d}this.elemMapping.set(l).set(l,new Map([[a,s],[n,u]])),this.elemMapping.get(s).set(n,l),e===this.head?this.head=o:e===this.tail&&(this.tail=l),e===this.active&&(this.active=o),this.elemMapping.delete(e);for(var h=this.elemMapping.get(r),v=h.get("index");h;){var f=h.get(a);h=this.elemMapping.get(f),h.set("index",++v),f===this.tail&&(h=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),e}();t.default=o,e.exports=t.default},"./src/entry.js":function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s;t.default=new((s||function(){return s=r(i("./src/controller.js"))}()).default)({}),e.exports=t.default}})});