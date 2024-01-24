!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-scrollview",[],e):"object"==typeof exports?exports["wafer-scrollview"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-scrollview"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,i){"use strict";function r(){return u=n(i("./src/data.js"))}function n(t){return t&&t.__esModule?t:{default:t}}function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u,c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},d=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),h=function t(e,i,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)},v=window.wafer,f=v.base,p=v.constants,g=v.features,m=v.utils,y=v.WaferBaseClass,w=g.transformProperty,b=p.ATTR_PREFIX,_=m.setTimeout,A=m.clearTimeout,E=m.bindEvent,k=m.clearAndSetInnerHTML,C=m.convertNodeListToArray,S=m.elementInView,M=m.fetchWithCache,P=m.findAncestor,T=m.getConfigFromJSONScriptNode,x=m.isVisible,D=m.throttle,O=m.unbindEvent,L=30,B=5,j=250,I="ease-out",W="active",X="visited",F=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume"],V="ontouchstart"in window,N=function(t,e,i){t.style.webkitTransition="transform "+e+"ms "+i,t.style.transition="transform "+e+"ms "+i},z=function(t){t.style.webkitTransition="",t.style.transition=""},H=function(t,e){V&&(t.style.cursor=e)},Y=function(){var t=[],e=!1;return{add:function(e,i){t.push(function(t){return function(){return e.call(t)}}(i)),this.exec(i._util.transitionDuration+50)},exec:function(i){var r=this;e||(e=!0,_(function(){e=!1,t.shift().call(),t.length&&r.exec(i)},i))}}}(),U=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.counter,s=void 0===n?0:n,l=i.syncDelay,d=void 0===l?25:l;a(this,e);var h=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{},{})),v=t.getAttribute(b+"behavior");if(h._util={elem:t,behavior:v},"native"===v){h._syncWithThrottle=D(function(){f.sync(t)},d,h);var p=void 0;if(C(t.children).some(function(t){return!!t.classList.contains(W)&&(p=t,!0)}),p&&0===t.scrollLeft){var g=t.getBoundingClientRect(),m=g.width,y=p.getBoundingClientRect(),w=y.width,_=y.left;t.scrollLeft=w>=m?_-L:_-(m-w)/2}return h.addEventListeners(),o(h)}var A=t.getAttribute(b+"edge-padding")||"",E=parseInt(A,10)||0,k=parseInt(t.getAttribute(b+"right-padding"),10)||0,S=t.getAttribute(b+"resize-end"),M=t.getAttribute(b+"boundary"),x=t.getAttribute(b+"pagination-target"),O=parseInt(t.getAttribute(b+"has-indicator-pagination"),10)||0,V=t.getAttribute(b+"trigger-wf-during-transition"),z=t.getAttribute(b+"scrollview-td"),Y=Number(t.getAttribute(b+"auto-switch"))||0,U=Number(t.getAttribute(b+"auto-switch-timeout"))||2e3,R=t.getAttribute(b+"scrollview-ttf"),q=t.getElementsByClassName("wafer-indicators-counts")[0],J=T(q).counts,G=x&&document.body.querySelector(x)||C(t.getElementsByClassName("indicators"))[0],K=t.getAttribute(b+"cycle"),Q=void 0,Z=void 0;K=null===K||void 0===K?0:Number(K),G&&"count"===(Q=G.getAttribute(b+"pagination-type")||"default")&&(Z=C(G.getElementsByClassName("current-page"))[0]);var $=new((u||r()).default)({windowLimit:B}),tt=M&&P(t,M);$.cycle=K;var et=h._util=c({},h._util,{autoSwitchTimeout:U,_switchScrollTimeout:null,boundaryElem:tt,counter:s,cycle:K,dataList:$,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:E,elem:t,indicatorCountElem:Z,indicatorElem:G,indicatorPagination:O,indicatorsCustomCount:J,indicatorType:Q,nextBtn:C(t.getElementsByClassName("next-btn"))[0],resizeEnd:null===S||void 0===S?0:Number(S),prevBtn:C(t.getElementsByClassName("prev-btn"))[0],rightPadding:k,shouldAutoSwitch:Y,sliderElem:C(t.getElementsByClassName("slides"))[0],sliderItemsDataMapping:new Map,transitionDuration:null===z||void 0===z?j:Number(z),transitionTimingFunction:null===R||void 0===R?I:R,triggerWafersDuringTransition:"1"===V?1:0});A&&-1!==A.indexOf("%")&&(et.edgePaddingPercentage=parseInt(A.replace("%",""),10),et.edgePadding=0),h._state={autoSwitchInProgress:!1,autoSwitchPausedByUser:!1,disableEventHandlers:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},et.sliderItems=C(et.sliderElem.children),et.indicatorItems=et.indicatorElem?C(et.indicatorElem.children):null;var it=et.sliderItems.length;if(h._state.slideWidth=100/it,h.updateWidth(),N(et.sliderElem,et.transitionDuration,et.transitionTimingFunction),H(et.sliderElem,"-webkit-grab"),et.edgePaddingPercentage){var rt=et.itemWidth*et.edgePaddingPercentage/100;et.sliderElem.style["padding-left"]=rt+"px"}else et.sliderElem.style["padding-left"]=et.edgePadding+"px";for(var nt=document.createDocumentFragment(),st=void 0,at=!1,ot=0;ot<it;ot++){var lt=et.sliderItems[ot];$.add(lt),lt.style.width=h._state.slideWidth+"%",!at&&ot>0&&lt.classList.contains(W)&&(st=ot,at=!0),nt.appendChild(lt)}if(et.sliderElem.appendChild(nt),st)for(var ut=0;ut<st;ut++)h.showCurrent(1);return F.forEach(function(t){h[t]=h[t].bind(h)}),h.addEventListeners(),h.addAriaAttributes(),0!==s||st||(h.preFetch(),h.updateIndicators(s),h.updateButtons(!0),$.getActive().classList.add(W,X)),h}return l(e,t),d(e,[{key:"addAriaAttributes",value:function(t){var e=this._util;e.sliderItems=C(e.sliderElem.children),t=t||e.dataList.getActive();for(var i=e.sliderItems.length,r=!1,n=0;n<i;n++){var s=e.sliderItems[n];r=t!==s,s.setAttribute("aria-hidden",r+"")}}},{key:"slidesHasBeenUpdated",value:function(){var t=this._util;t.sliderItems=C(t.sliderElem.children);var e=t.sliderItems.length;this._state.slideWidth=100/e;for(var i=0;i<e;i++){t.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var t=this._util,e=this._state.virtualCounter,i=t.edgePadding,r=t.edgePaddingPercentage,n=t.rightPadding,s=t.sliderElem,a=t.sliderItems;s.style.width="";var o=s.getBoundingClientRect().width;if(r){var l=o*t.edgePaddingPercentage/100;t.sliderElem.style["padding-left"]=l+"px",t.itemWidth=o-2*l}else t.itemWidth=i?o-2*i:n?o-n:o;s.style.width=t.itemWidth*a.length+"px",s.style[w]="translateX(-"+(e*t.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"addEventListeners",value:function(){var t=this._util,i=t.behavior,r=t.elem;if("native"===i)return void E(r,"scroll",this._syncWithThrottle);var n=this._util,s=n.indicatorElem,a=n.indicatorPagination;if(this.setTimeoutForAutoSwitch(),s){a&&(C(s.children).forEach(function(t,e){t.setAttribute("data-index",e)}),E(s,"click",this.indicatorClick));this._util.shouldAutoSwitch&&(E(s,"mouseover",this.indicatorMouseover),E(s,"mouseleave",this.indicatorMouseLeave))}h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addEventListeners",this).call(this)}},{key:"pauseAutoSwitch",value:function(){this._util.shouldAutoSwitch&&(this._state.autoSwitchInProgress=!1,this._util._switchScrollTimeout&&A(this._util._switchScrollTimeout,this))}},{key:"setTimeoutForAutoSwitch",value:function(){var t=this;if(this._util.shouldAutoSwitch&&!this._state.autoSwitchPausedByUser&&!this._state.autoSwitchInProgress&&!this._state.mouseOnElement){this._state.autoSwitchInProgress=!0;var e=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=_(function(){t.showCurrent(1,{source:"autoscroll",type:"next"})},e,this)}}},{key:"removeEventListeners",value:function(){var t=this._util,i=t.behavior,r=t.elem,n=t.indicatorElem,s=t.indicatorPagination,a=t.shouldAutoSwitch;if("native"===i)return void O(r,"scroll",this._syncWithThrottle);s&&n&&O(n,"click",this.indicatorClick),a&&(E(n,"mouseover",this.indicatorMouseover),E(n,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){for(var t=this._util.dataList,e=0;e<3;e++){var i=t.getForward(e),r=t.getBackward(e);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"handleResize",value:function(){var t=this._util,e=t.behavior,i=t.cycle,r=t.transitionDuration,n=t.transitionTimingFunction;if("native"!==e){var s=this._util.sliderElem;x(s)&&(z(s),i?this.slidesHasBeenUpdated():this.updateWidth(),_(function(){N(s,r,n)},0))}}},{key:"handleFetch",value:function(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.fetchBody,s=r.fetchUrl,a=r.prefetch,o=void 0!==a&&a,l=r.replace,u=void 0!==l&&l,c=r.resultSelector;if(!o||t.parentNode){var d=this._util,h=d.dataList,v=d.sliderItemsDataMapping;v.has(t)||v.set(t,{});var p=v.get(t);!s||void 0!==p.fetchStatus&&2!==p.fetchStatus?(o?f.prefetch(t):f.sync(t),u&&this.slidesHasBeenUpdated()):(p.fetchStatus=0,M(s,{body:n}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.assets,n=void 0===r?{}:r,s=e.html;if(s){var a=void 0,l=!1;if(f.destroy(t),u){var d=document.createElement("div"),v=t.parentNode,g=C(v.children);d.innerHTML=s;var m=c&&d.querySelector(c),y=C((m||d||{}).children),w=g.indexOf(t),b=t===h.tail;h.appendWithReplace(t,y),-1!==w&&(y.forEach(function(e){v.insertBefore(e,t)}),b&&(v.removeChild(g[0]),i._state.virtualCounter=Math.floor(B/2),l=t!==h.tail),v.removeChild(t)),a=v,i._state.hasBeenThreadmilled=!1}else k(t,s),a=t;p.fetchStatus=1,f.syncAssets(n),o?f.prefetch(t):f.sync(a),l&&z(i._util.sliderElem),u&&i.slidesHasBeenUpdated()}}).catch(function(i){f.emitError({name:e.constructor.name,elem:t,meta:{fetchUrl:s},stack:i.stack}),p.fetchStatus=2}))}}},{key:"renderSlide",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.prefetch,r=void 0!==i&&i,n=this._util.sliderElem;if(!r||S(n,{offsetX:0,offsetY:0},f.viewport)){var s=void 0,a=void 0,o=void 0,l=void 0,u=t.getAttribute(b+"url");switch(u&&(s="fetch",o=!!Number(t.getAttribute(b+"replace")),a=t.getAttribute(b+"result-selector"),l=t.getAttribute(b+"body")),s){case"fetch":this.handleFetch(t,{fetchBody:l,fetchUrl:u,prefetch:r,replace:o,resultSelector:a});break;default:r?f.prefetch(t):_(function(){f.sync(t)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(t,e){var i=this,r=this._util,n=this._state,s=r.cycle,a=r.dataList,o=r.itemWidth,l=r.sliderElem,u=r.transitionTimingFunction,c=r.transitionDuration,d=a.size,h=n.slideWidth,v=n.virtualCounter;if(1===t){var f=e+1>d;if(s||!f){var p=a.getElementToAppend();if(p&&(p.style.width=h+"%"),N(l,c,u),l.style[w]="translateX(-"+(((v||0)+1)*o+this.negativeWidthCoefficient)+"px)",null===v)return n.virtualCounter=1,this._util.counter=e,a.setNextAsActive(),void this.scrollViewTransformAnimationDidComplete();if(n.virtualCounter++,a.setNextAsActive(),!p)return;Y.add(function(){var t=r.itemWidth,e=r.sliderElem,s=C(e.children);e.removeChild(s[0]),e.appendChild(p),r.sliderItems=C(e.children),n.virtualCounter--,z(e),e.style[w]="translateX(-"+n.virtualCounter*t+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}else if(-1===t){var g=e<0;if(s||!g){var m=a.getElementToPrepend();if(m&&(m.style.width=h+"%"),N(l,c,u),l.style[w]="translateX(-"+(v-1)*o+"px)",n.virtualCounter--,a.setPreviousAsActive(),!m)return;Y.add(function(){var t=r.itemWidth,e=r.sliderElem,s=C(e.children);e.removeChild(s[s.length-1]),e.prepend(m),r.sliderItems=C(e.children),n.virtualCounter++,z(e),e.style[w]="translateX(-"+n.virtualCounter*t+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}}},{key:"showCurrent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._util,i=e.boundaryElem,r=e.counter,n=e.cycle,a=e.dataList,o=e.elem,l=e.itemWidth,u=e.sliderElem,c=a.size,d=r;if(this.isValidMove(t)){if(n){if(1===t){var h=d+1>=c;d=h?0:r+t}else if(-1===t){var v=d<=0;d=v?c-1:r+t}}else d=r+t;if(a.getActive().classList.remove(W),d!==r){if(!this._state.hasBeenThreadmilled){for(;[].concat(s(u.children)).length>B;)u.removeChild(u.children[B]);e.sliderItems=C(u.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(t,d),this._util.counter=d;var p=a.getActive();p.classList.add(W,X),this.renderSlide(p),this.updateIndicators(d,r),this.updateButtons(),this.triggerOnChange(),this.preFetch(),d+1===c?(o.classList.add("wafer-scrollview-reached-end"),i&&i.classList.add("wafer-scrollview-boundary-reached-end")):(o.classList.remove("wafer-scrollview-reached-end"),i&&i.classList.remove("wafer-scrollview-boundary-reached-end")),this.addAriaAttributes(p),f.emitWaferEvent("scrollview:change",{elem:o,meta:{index:d+1,prevIndex:r+1}})}else{var g=a.getActive();g.classList.add(W,X);var m=this._state.virtualCounter,y="translateX(-"+(m*l+this.negativeWidthCoefficient)+"px)";y!==this._util.transformValue&&(u.style[w]=y,this._util.transformValue=y),this.addAriaAttributes(g)}}}},{key:"triggerOnChange",value:function(){var t=this._state.triggerNodeMap,e=this._util,i=e.dataList,r=i.getActive(),n=[];t.has(r)?n=t.get(r):(n=C(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),t.set(r,n)),n.forEach(function(t){f.trigger(t)})}},{key:"updateIndicators",value:function(t,e){var i=this._util;if("count"===i.indicatorType){var r=i.indicatorCountElem,n=i.indicatorsCustomCount;r&&(r.innerHTML=n&&n[t]||t+1)}else{var s=i.indicatorItems;s&&(s[e]&&s[e].classList.remove(W),s[t]&&s[t].classList.add(W,X))}}},{key:"updateButtons",value:function(t){var e=this._util,i=e.counter,r=e.cycle,n=e.nextBtn,s=e.prevBtn,a=e.dataList,o=a.size;n&&(r&&!t||i!==o-1?n.removeAttribute("disabled"):n.setAttribute("disabled",!0)),s&&(r&&!t||0!==i?s.removeAttribute("disabled"):s.setAttribute("disabled",!0))}},{key:"updateAfterDrag",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._util.drag,i=e.currentDirection,r=e.endX,n=e.horizontalDirection,s=e.startX,a=r-s,o=i===n;o&&a>0&&Math.abs(a)>30?this.showCurrent(-1,t):o&&a<0&&Math.abs(a)>30?this.showCurrent(1,t):this.showCurrent()}},{key:"didLock",value:function(){this.pauseAutoSwitch()}},{key:"didUnLock",value:function(){this.setTimeoutForAutoSwitch()}},{key:"isValidMove",value:function(t){var e=this._util,i=e.counter,r=e.cycle,n=e.dataList,s=n.size;return r?1===t&&i<=s-1||-1===t&&i>=0||0===t:1===t&&i<s-1||-1===t&&i>0||0===t}},{key:"grab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._util.drag;this._util.pointerDown=!1,e.endX&&this.updateAfterDrag(t),this.clearDrag()}},{key:"grabbing",value:function(){var t=this._util,e=t.drag,i=t.elem,r=t.itemWidth,n=t.sliderElem,s=t.triggerWafersDuringTransition,a=this._state.virtualCounter,o=e.startX,l=e.endX,u=-1*(a*r+(o-l)),c="translateX("+u+"px)";s&&2*Math.abs(u)>=r&&f.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,n.style[w]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var t=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&A(this._grabTimeout),this._util.grabTimeout=_(function(){t._util.drag.isVerticalDirection=!1},50)}},{key:"indicatorClick",value:function(t){var e=t.target,i=e.getAttribute("data-index");if(i){var r=this._util.counter;if(i=parseInt(i,10),r>i)for(var n=0;n<r-i;n++)this.showCurrent(-1);else if(r<i)for(var s=0;s<i-r;s++)this.showCurrent(1)}}},{key:"scrollViewTransformAnimationDidComplete",value:function(){this._state.autoSwitchInProgress=!1,this.setTimeoutForAutoSwitch()}},{key:"indicatorMouseover",value:function(t){this._state.mouseOnElement=!0,this.pauseAutoSwitch()}},{key:"indicatorMouseLeave",value:function(t){this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch()}},{key:"next",value:function(t){t.preventDefault(),t.stopPropagation(),this.showCurrent(1,{source:"button",type:"next",sourceEvent:t})}},{key:"pause",value:function(t){t.preventDefault(),t.stopPropagation();var e=this._util,i=e.elem;e.shouldAutoSwitch&&i.classList.add("wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!0,this.pauseAutoSwitch()}},{key:"prev",value:function(t){t.preventDefault(),t.stopPropagation(),this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:t})}},{key:"resume",value:function(t){t.preventDefault(),t.stopPropagation();var e=this._util,i=e.elem;e.shouldAutoSwitch&&i.classList.remove("wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!1,this.setTimeoutForAutoSwitch()}},{key:"keydown",value:function(t){this._state.disableEventHandlers||(t=t||window.event,37===t.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===t.keyCode&&this.showCurrent(1,{source:"key",type:"next"}))}},{key:"touchstart",value:function(t){if(!this._state.disableEventHandlers){this.pauseAutoSwitch();var e=this._util,i=t.touches[0],r=i.pageX,n=i.pageY;e.pointerDown=!0,e.drag.isVerticalDirection=!1,e.drag.startX=r,e.drag.startY=n}}},{key:"touchend",value:function(t){this._state.disableEventHandlers||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(t){if(!this._state.disableEventHandlers){var e=this._util,i=e.drag,r=i.startX,n=i.startY,s=t.touches[0],a=s.pageX,o=s.pageY,l=0;i.isVerticalDirection||(Math.abs(n-o)>8&&(i.isVerticalDirection=n>o?1:-1),r!==a&&(l=r>a?1:-1),i.horizontalDirection=l,i.last!==a&&(i.currentDirection=i.last>a?1:-1,i.last=a),e.pointerDown&&(i.endX=a,i.endY=o,this.isValidMove(l)&&(e.drag.grabbing&&t.cancelable&&t.preventDefault(),Math.abs(n-o)>8&&(i.isVerticalDirection=n>o?1:-1),l&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(t){if(!this._state.disableEventHandlers){t.preventDefault&&t.preventDefault();var e=this._util,i=t.pageX,r=t.pageY;e.pointerDown=!0,e.drag.isVerticalDirection=!1,e.drag.startX=i,e.drag.startY=r}}},{key:"mouseover",value:function(){this._state.mouseOnElement=!0;var t=this._util,e=t.elem;t.shouldAutoSwitch&&e.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}},{key:"mouseup",value:function(t){if(!this._state.disableEventHandlers){var e=this._util.sliderElem;H(e,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(t){var e=this._state.disableEventHandlers;if(this._state.mouseOnElement=!1,!e){if(t.preventDefault(),!this._state.autoSwitchPausedByUser){var i=this._util,r=i.elem;i.shouldAutoSwitch&&r.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch()}var n=this._util,s=n.drag,a=n.pointerDown,o=n.sliderElem;if(a){var l=t.pageX,u=t.pageY;s.endX=l,s.endY=u,H(o,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(t){if(!this._state.disableEventHandlers){var e=this._util,i=e.pointerDown,r=e.sliderElem,n=e.drag;if(i){var s=t.pageX,a=t.pageY;this._util.pointerDown=!1,H(r,"-webkit-grab"),n.endX=s,n.endY=a,this.updateAfterDrag(),this.clearDrag()}}}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){this.removeEventListeners(),h(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this._util)return 0;var t=this._util,e=t.counter,i=t.dataList,r=t.resizeEnd,n=t.rightPadding;if(e>=i.size-2){if(n)return-n;if(r){var s=i.tail;if(!s)return 0;var a=s.style.width,o=s.getBoundingClientRect().width;s.style.width="";var l=s.getBoundingClientRect(),u=l.width;return s.style.width=a,-(o-Math.min(u,o))}}return 0}}]),e}(y);U.events={click:[["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["slides","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["slides","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]},e.default=U,t.exports=e.default},"./src/controller.js":function(t,e,i){"use strict";function r(){return l=n(i("./src/base.js"))}function n(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l,u=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),c=function t(e,i,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var s=Object.getPrototypeOf(e);return null===s?void 0:t(s,i,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)},d=window.wafer,h=d.base,v=d.controllers,f=d.utils,p=f.elementInView,g=f.throttle,m=v.WaferBaseController,y=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.root,n=void 0===i?document:i,o=t.selector,u=void 0===o?".wafer-scrollview":o;s(this,e);var c=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:n,selector:u,WaferClass:(l||r()).default}));return c.sync(),c._validateWithThrottle=g(function(){c.validate()},25,c),c}return o(e,t),u(e,[{key:"handleVisibilityChange",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this._state.elementInstances,i=!0,r=!1,n=void 0;try{for(var s,a=e.values()[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var o=s.value,l=o.instance;l._util.shouldAutoSwitch&&(t?l.setTimeoutForAutoSwitch():l.pauseAutoSwitch())}}catch(t){r=!0,n=t}finally{try{!i&&a.return&&a.return()}finally{if(r)throw n}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),c(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(t){var e=this._state.elementInstances;t.forEach(function(t){var i=e.get(t),r=i.instance;r._util.shouldAutoSwitch&&(p(t,{offsetX:0,offsetY:0},h.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),e}(m);e.default=y,t.exports=e.default},"./src/data.js":function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),s="next",a="prev",o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.windowLimit,n=void 0===i?5:i;r(this,t),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(n/2)}return n(t,[{key:"add",value:function(t){var e=this.tail,i=this.elemMapping.size;if(e){var r=this.elemMapping.get(e);this.elemMapping.set(t,new Map([["index",i],[s,r.get(s)],[a,e]])),this.elemMapping.get(this.tail).set(s,t),this.elemMapping.get(this.head).set(a,t),this.tail=t}else this.elemMapping.set(t,new Map([["index",i],[s,t],[a,t]])),this.head=this.tail=t;this.active||(this.active=t)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(s)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(a)}},{key:"getElementToAppend",value:function(){var t=this.elemMapping.get(this.active),e=t.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;if(this.cycle){i<=2?r=0:i<=3&&(r=1);return this.getForward(r+1)}return e<r?null:i>e+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var t=this.elemMapping.get(this.active),e=t.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):e>=i-r?null:e-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(t){for(var e=0,i=this.active;e++<t;){if(i=this.elemMapping.get(i).get(s),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(t){for(var e=0,i=this.active;e++<t;){if(i=this.elemMapping.get(i).get(a),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(t,e){t=t||this.active;var i=this.elemMapping.get(t),r=i.get(a),n=i.get(s),o=e[0],l=o,u=r;this.elemMapping.get(r).set(s,l);for(var c=1;c<e.length;c++){var d=e[c];this.elemMapping.set(l,new Map([[s,d],[a,u]])),u=l,l=d}this.elemMapping.set(l).set(l,new Map([[s,n],[a,u]])),this.elemMapping.get(n).set(a,l),t===this.head?this.head=o:t===this.tail&&(this.tail=l),t===this.active&&(this.active=o),this.elemMapping.delete(t);for(var h=this.elemMapping.get(r),v=h.get("index");h;){var f=h.get(s);h=this.elemMapping.get(f),h.set("index",++v),f===this.tail&&(h=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),t}();e.default=o,t.exports=e.default},"./src/entry.js":function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n;e.default=new((n||function(){return n=r(i("./src/controller.js"))}()).default)({}),t.exports=e.default}})});