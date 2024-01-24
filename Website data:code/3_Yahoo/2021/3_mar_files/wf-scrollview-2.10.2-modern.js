!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-scrollview",[],e):"object"==typeof exports?exports["wafer-scrollview"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-scrollview"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/entry.js":function(t,e,i){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),d="next",v="prev",f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.windowLimit,n=void 0===i?5:i;r(this,t),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(n/2)}return h(t,[{key:"add",value:function(t){var e=this.tail,i=this.elemMapping.size;if(e){var r=this.elemMapping.get(e);this.elemMapping.set(t,new Map([["index",i],[d,r.get(d)],[v,e]])),this.elemMapping.get(this.tail).set(d,t),this.elemMapping.get(this.head).set(v,t),this.tail=t}else this.elemMapping.set(t,new Map([["index",i],[d,t],[v,t]])),this.head=this.tail=t;this.active||(this.active=t)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(d)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(v)}},{key:"getElementToAppend",value:function(){var t=this.elemMapping.get(this.active),e=t.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getForward(r+1):e<r?null:i>e+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var t=this.elemMapping.get(this.active),e=t.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):e>=i-r?null:e-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(t){for(var e=0,i=this.active;e++<t;){if(i=this.elemMapping.get(i).get(d),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(t){for(var e=0,i=this.active;e++<t;){if(i=this.elemMapping.get(i).get(v),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(t,e){t=t||this.active;var i=this.elemMapping.get(t),r=i.get(v),n=i.get(d),a=e[0],s=a,o=r;this.elemMapping.get(r).set(d,s);for(var l=1;l<e.length;l++){var u=e[l];this.elemMapping.set(s,new Map([[d,u],[v,o]])),o=s,s=u}this.elemMapping.set(s).set(s,new Map([[d,n],[v,o]])),this.elemMapping.get(n).set(v,s),t===this.head?this.head=a:t===this.tail&&(this.tail=s),t===this.active&&(this.active=a),this.elemMapping.delete(t);for(var c=this.elemMapping.get(r),h=c.get("index");c;){var f=c.get(d);c=this.elemMapping.get(f),c.set("index",++h),f===this.tail&&(c=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),t}(),p=f,g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},m=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),y=function t(e,i,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,i,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)},w=window.wafer,b=w.base,_=w.constants,E=w.features,k=w.utils,A=w.WaferBaseClass,C=E.transformProperty,M=_.ATTR_PREFIX,T=k.setTimeout,S=k.clearTimeout,x=k.bindEvent,O=k.clearAndSetInnerHTML,D=k.convertNodeListToArray,L=k.elementInView,P=k.fetchWithCache,W=k.findAncestor,B=k.getConfigFromJSONScriptNode,j=k.isVisible,I=k.throttle,X=k.unbindEvent,F=30,N=5,V=250,z="ease-out",Y="active",H="visited",R=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume"],U="ontouchstart"in window,q=function(t,e,i){t.style.webkitTransition="transform "+e+"ms "+i,t.style.transition="transform "+e+"ms "+i},J=function(t){t.style.webkitTransition="",t.style.transition=""},G=function(t,e){U&&(t.style.cursor=e)},K=function(){var t=[],e=!1;return{add:function(e,i){t.push(function(t){return function(){return e.call(t)}}(i)),this.exec(i._util.transitionDuration+50)},exec:function(i){var r=this;e||(e=!0,T(function(){e=!1,t.shift().call(),t.length&&r.exec(i)},i))}}}(),Q=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.counter,n=void 0===r?0:r,o=i.syncDelay,l=void 0===o?25:o;a(this,e);var u=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{},{})),c=t.getAttribute(M+"behavior");if(u._util={elem:t,behavior:c},"native"===c){u._syncWithThrottle=I(function(){b.sync(t)},l,u);var h=void 0;if(D(t.children).some(function(t){return!!t.classList.contains(Y)&&(h=t,!0)}),h&&0===t.scrollLeft){var d=t.getBoundingClientRect(),v=d.width,f=h.getBoundingClientRect(),m=f.width,y=f.left;t.scrollLeft=m>=v?y-F:y-(v-m)/2}return u.addEventListeners(),s(u)}var w=parseInt(t.getAttribute(M+"edge-padding"),10)||0,_=parseInt(t.getAttribute(M+"right-padding"),10)||0,E=t.getAttribute(M+"resize-end"),k=t.getAttribute(M+"boundary"),A=t.getAttribute(M+"pagination-target"),C=parseInt(t.getAttribute(M+"has-indicator-pagination"),10)||0,T=t.getAttribute(M+"trigger-wf-during-transition"),S=t.getAttribute(M+"scrollview-td"),x=Number(t.getAttribute(M+"auto-switch"))||0,O=Number(t.getAttribute(M+"auto-switch-timeout"))||2e3,L=t.getAttribute(M+"scrollview-ttf"),P=t.getElementsByClassName("wafer-indicators-counts")[0],j=B(P).counts,X=t.getAttribute(M+"cycle"),U=A&&document.body.querySelector(A)||D(t.getElementsByClassName("indicators"))[0],J=void 0,K=void 0;U&&"count"===(J=U.getAttribute(M+"pagination-type")||"default")&&(K=D(U.getElementsByClassName("current-page"))[0]);var Q=new p({windowLimit:N}),Z=k&&W(t,k);Q.cycle=X;var $=u._util=g({},u._util,{autoSwitchTimeout:O,_switchScrollTimeout:null,boundaryElem:Z,counter:n,cycle:null===X||void 0===X?0:Number(X),dataList:Q,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:w,elem:t,indicatorCountElem:K,indicatorElem:U,indicatorPagination:C,indicatorsCustomCount:j,indicatorType:J,nextBtn:D(t.getElementsByClassName("next-btn"))[0],resizeEnd:null===E||void 0===E?0:Number(E),prevBtn:D(t.getElementsByClassName("prev-btn"))[0],rightPadding:_,shouldAutoSwitch:x,sliderElem:D(t.getElementsByClassName("slides"))[0],sliderItemsDataMapping:new Map,transitionDuration:null===S||void 0===S?V:Number(S),transitionTimingFunction:null===L||void 0===L?z:L,triggerWafersDuringTransition:"1"===T?1:0});u._state={autoSwitchPaused:!1,disableEventHandlers:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},$.sliderItems=D($.sliderElem.children),$.indicatorItems=$.indicatorElem?D($.indicatorElem.children):null;var tt=$.sliderItems.length;u._state.slideWidth=100/tt,u.updateWidth(),q($.sliderElem,$.transitionDuration,$.transitionTimingFunction),G($.sliderElem,"-webkit-grab"),$.sliderElem.style["padding-left"]=w+"px";for(var et=document.createDocumentFragment(),it=void 0,rt=!1,nt=0;nt<tt;nt++){var at=$.sliderItems[nt];Q.add(at),at.style.width=u._state.slideWidth+"%",!rt&&nt>0&&at.classList.contains(Y)&&(it=nt,rt=!0),et.appendChild(at)}if($.sliderElem.appendChild(et),it)for(var st=0;st<it;st++)u.showCurrent(1);return R.forEach(function(t){u[t]=u[t].bind(u)}),u.addEventListeners(),0!==n||it||(u.preFetch(),u.updateIndicators(n),u.updateButtons(!0),Q.getActive().classList.add(Y,H)),u}return o(e,t),m(e,[{key:"slidesHasBeenUpdated",value:function(){var t=this._util;t.sliderItems=D(t.sliderElem.children);var e=t.sliderItems.length;this._state.slideWidth=100/e;for(var i=0;i<e;i++){t.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var t=this._util,e=this._state.virtualCounter,i=t.edgePadding,r=t.rightPadding,n=t.sliderElem,a=t.sliderItems;n.style.width="",t.containerWidth=n.getBoundingClientRect().width,t.itemWidth=i?t.containerWidth-2*i:r?t.containerWidth-r:t.containerWidth,n.style.width=t.itemWidth*a.length+"px",n.style[C]="translateX(-"+(e*t.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"addEventListeners",value:function(){var t=this._util,i=t.behavior,r=t.elem;if("native"===i)return void x(r,"scroll",this._syncWithThrottle);var n=this._util,a=n.indicatorElem,s=n.indicatorPagination;if(this.setTimeoutForAutoSwitch(),a){s&&(D(a.children).forEach(function(t,e){t.setAttribute("data-index",e)}),x(a,"click",this.indicatorClick));this._util.shouldAutoSwitch&&(x(a,"mouseover",this.indicatorMouseover),x(a,"mouseleave",this.indicatorMouseLeave))}y(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"addEventListeners",this).call(this)}},{key:"pauseAutoSwitch",value:function(){this._util.shouldAutoSwitch&&this._util._switchScrollTimeout&&S(this._util._switchScrollTimeout,this)}},{key:"setTimeoutForAutoSwitch",value:function(){var t=this;if(this._util.shouldAutoSwitch){var e=this._state,i=e.autoSwitchPaused,r=e.mouseOnElement;if(!i&&!r){var n=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=T(function(){t.showCurrent(1,{source:"autoscroll",type:"next"})},n,this)}}}},{key:"removeEventListeners",value:function(){var t=this._util,i=t.behavior,r=t.elem,n=t.indicatorElem,a=t.indicatorPagination,s=t.shouldAutoSwitch;if("native"===i)return void X(r,"scroll",this._syncWithThrottle);a&&n&&X(n,"click",this.indicatorClick),s&&(x(n,"mouseover",this.indicatorMouseover),x(n,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),y(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){for(var t=this._util.dataList,e=0;e<3;e++){var i=t.getForward(e),r=t.getBackward(e);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"handleResize",value:function(){var t=this._util,e=t.behavior,i=t.transitionDuration,r=t.transitionTimingFunction;if("native"!==e){var n=this._util.sliderElem;j(n)&&(J(n),this.updateWidth(),T(function(){q(n,i,r)},0))}}},{key:"handleFetch",value:function(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.fetchBody,a=r.fetchUrl,s=r.prefetch,o=void 0!==s&&s,l=r.replace,u=void 0!==l&&l,c=r.resultSelector;if(!o||t.parentNode){var h=this._util,d=h.dataList,v=h.sliderItemsDataMapping;v.has(t)||v.set(t,{});var f=v.get(t);!a||void 0!==f.fetchStatus&&2!==f.fetchStatus?(o?b.prefetch(t):b.sync(t),u&&this.slidesHasBeenUpdated()):(f.fetchStatus=0,P(a,{body:n}).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.assets,n=void 0===r?{}:r,a=e.html;if(a){var s=void 0,l=!1;if(b.destroy(t),u){var h=document.createElement("div"),v=t.parentNode,p=D(v.children);h.innerHTML=a;var g=c&&h.querySelector(c),m=D((g||h||{}).children),y=p.indexOf(t),w=t===d.tail;d.appendWithReplace(t,m),-1!==y&&(m.forEach(function(e){v.insertBefore(e,t)}),w&&(v.removeChild(p[0]),i._state.virtualCounter--,l=t!==d.tail),v.removeChild(t)),s=v,i._state.hasBeenThreadmilled=!1}else O(t,a),s=t;f.fetchStatus=1,b.syncAssets(n),o?b.prefetch(t):b.sync(s),l&&J(i._util.sliderElem),u&&i.slidesHasBeenUpdated()}}).catch(function(i){b.emitError({name:e.constructor.name,elem:t,meta:{fetchUrl:a},stack:i.stack}),f.fetchStatus=2}))}}},{key:"renderSlide",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.prefetch,r=void 0!==i&&i,n=this._util.sliderElem;if(!r||L(n,{offsetX:0,offsetY:0},b.viewport)){var a=void 0,s=void 0,o=void 0,l=void 0,u=t.getAttribute(M+"url");switch(u&&(a="fetch",o=!!Number(t.getAttribute(M+"replace")),s=t.getAttribute(M+"result-selector"),l=t.getAttribute(M+"body")),a){case"fetch":this.handleFetch(t,{fetchBody:l,fetchUrl:u,prefetch:r,replace:o,resultSelector:s});break;default:r?b.prefetch(t):T(function(){b.sync(t)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(t,e){var i=this._util,r=this._state,n=i.cycle,a=i.dataList,s=i.itemWidth,o=i.sliderElem,l=i.transitionTimingFunction,u=i.transitionDuration,c=a.size,h=r.slideWidth,d=r.virtualCounter;if(1===t){var v=e+1>c;if(n||!v){var f=a.getElementToAppend();if(f&&(f.style.width=h+"%"),q(o,u,l),o.style[C]="translateX(-"+(((d||0)+1)*s+this.negativeWidthCoefficient)+"px)",null===d)return r.virtualCounter=1,this._util.counter=e,void a.setNextAsActive();if(r.virtualCounter++,a.setNextAsActive(),!f)return;K.add(function(){var t=i.itemWidth,e=i.sliderElem,n=D(e.children);-1!==n.indexOf(f)&&(f=a.getElementToAppend()),e.removeChild(n[0]),e.appendChild(f),i.sliderItems=D(e.children),r.virtualCounter--,J(e),e.style[C]="translateX(-"+r.virtualCounter*t+"px)"},this)}}else if(-1===t){var p=e<0;if(n||!p){var g=a.getElementToPrepend();if(g&&(g.style.width=h+"%"),q(o,u,l),o.style[C]="translateX(-"+(d-1)*s+"px)",r.virtualCounter--,a.setPreviousAsActive(),!g)return;K.add(function(){var t=i.itemWidth,e=i.sliderElem,n=D(e.children);e.removeChild(n[n.length-1]),e.prepend(g),i.sliderItems=D(e.children),r.virtualCounter++,J(e),e.style[C]="translateX(-"+r.virtualCounter*t+"px)"},this)}}}},{key:"showCurrent",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=this._util,i=e.boundaryElem,r=e.counter,a=e.cycle,s=e.dataList,o=e.elem,l=e.itemWidth,u=e.sliderElem,c=s.size,h=r;if(this.isValidMove(t)){if(this.setTimeoutForAutoSwitch(),a){if(1===t){var d=h+1>=c;h=d?0:r+t}else if(-1===t){var v=h<=0;h=v?c-1:r+t}}else h=r+t;if(s.getActive().classList.remove(Y),h!==r){if(!this._state.hasBeenThreadmilled){for(;[].concat(n(u.children)).length>N;)u.removeChild(u.children[N]);e.sliderItems=D(u.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(t,h),this._util.counter=h;var f=s.getActive();f.classList.add(Y,H),this.renderSlide(f),this.updateIndicators(h,r),this.updateButtons(),this.triggerOnChange(),this.preFetch(),h+1===c?(o.classList.add("wafer-scrollview-reached-end"),i&&i.classList.add("wafer-scrollview-boundary-reached-end")):(o.classList.remove("wafer-scrollview-reached-end"),i&&i.classList.remove("wafer-scrollview-boundary-reached-end")),b.emitWaferEvent("scrollview:change",{elem:o,meta:{index:h+1,prevIndex:r+1}})}else{s.getActive().classList.add(Y,H);var p=this._state.virtualCounter,g="translateX(-"+(p*l+this.negativeWidthCoefficient)+"px)";g!==this._util.transformValue&&(u.style[C]=g,this._util.transformValue=g)}}}},{key:"triggerOnChange",value:function(){var t=this._state.triggerNodeMap,e=this._util,i=e.dataList,r=i.getActive(),n=[];t.has(r)?n=t.get(r):(n=D(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),t.set(r,n)),n.forEach(function(t){b.trigger(t)})}},{key:"updateIndicators",value:function(t,e){var i=this._util;if("count"===i.indicatorType){var r=i.indicatorCountElem,n=i.indicatorsCustomCount;r&&(r.innerHTML=n&&n[t]||t+1)}else{var a=i.indicatorItems;a&&(a[e]&&a[e].classList.remove(Y),a[t]&&a[t].classList.add(Y,H))}}},{key:"updateButtons",value:function(t){var e=this._util,i=e.counter,r=e.cycle,n=e.nextBtn,a=e.prevBtn,s=e.dataList,o=s.size;n&&(r&&!t||i!==o-1?n.removeAttribute("disabled"):n.setAttribute("disabled",!0)),a&&(r&&!t||0!==i?a.removeAttribute("disabled"):a.setAttribute("disabled",!0))}},{key:"updateAfterDrag",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._util.drag,i=e.currentDirection,r=e.endX,n=e.horizontalDirection,a=e.startX,s=r-a,o=i===n;o&&s>0&&Math.abs(s)>30?this.showCurrent(-1,t):o&&s<0&&Math.abs(s)>30?this.showCurrent(1,t):this.showCurrent()}},{key:"isValidMove",value:function(t){var e=this._util,i=e.counter,r=e.cycle,n=e.dataList,a=n.size;return r?1===t&&i<=a-1||-1===t&&i>=0||0===t:1===t&&i<a-1||-1===t&&i>0||0===t}},{key:"grab",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this._util.drag;this._util.pointerDown=!1,e.endX&&this.updateAfterDrag(t),this.clearDrag()}},{key:"grabbing",value:function(){var t=this._util,e=t.drag,i=t.elem,r=t.itemWidth,n=t.sliderElem,a=t.triggerWafersDuringTransition,s=this._state.virtualCounter,o=e.startX,l=e.endX,u=-1*(s*r+(o-l)),c="translateX("+u+"px)";a&&2*Math.abs(u)>=r&&b.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,n.style[C]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var t=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&S(this._grabTimeout),this._util.grabTimeout=T(function(){t._util.drag.isVerticalDirection=!1},50)}},{key:"indicatorClick",value:function(t){var e=t.target,i=e.getAttribute("data-index");if(i){var r=this._util.counter;if(i=parseInt(i,10),r>i)for(var n=0;n<r-i;n++)this.showCurrent(-1);else if(r<i)for(var a=0;a<i-r;a++)this.showCurrent(1)}}},{key:"indicatorMouseover",value:function(t){this._state.mouseOnElement=!0,this.pauseAutoSwitch()}},{key:"indicatorMouseLeave",value:function(t){this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch()}},{key:"next",value:function(t){t.preventDefault(),t.stopPropagation(),this.showCurrent(1,{source:"button",type:"next",sourceEvent:t})}},{key:"pause",value:function(t){t.preventDefault(),t.stopPropagation();var e=this._util.elem;this._state.autoSwitchPaused=!0,e.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}},{key:"prev",value:function(t){t.preventDefault(),t.stopPropagation(),this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:t})}},{key:"resume",value:function(t){t.preventDefault(),t.stopPropagation();var e=this._util.elem;this._state.autoSwitchPaused=!1,e.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch()}},{key:"keydown",value:function(t){this._state.disableEventHandlers||(t=t||window.event,37===t.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===t.keyCode&&this.showCurrent(1,{source:"key",type:"next"}))}},{key:"touchstart",value:function(t){if(!this._state.disableEventHandlers){this.pauseAutoSwitch();var e=this._util,i=t.touches[0],r=i.pageX,n=i.pageY;e.pointerDown=!0,e.drag.isVerticalDirection=!1,e.drag.startX=r,e.drag.startY=n}}},{key:"touchend",value:function(t){this._state.disableEventHandlers||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(t){if(!this._state.disableEventHandlers){var e=this._util,i=e.drag,r=i.startX,n=i.startY,a=t.touches[0],s=a.pageX,o=a.pageY,l=0;i.isVerticalDirection||(Math.abs(n-o)>8&&(i.isVerticalDirection=n>o?1:-1),r!==s&&(l=r>s?1:-1),i.horizontalDirection=l,i.last!==s&&(i.currentDirection=i.last>s?1:-1,i.last=s),e.pointerDown&&(i.endX=s,i.endY=o,this.isValidMove(l)&&(e.drag.grabbing&&t.cancelable&&t.preventDefault(),Math.abs(n-o)>8&&(i.isVerticalDirection=n>o?1:-1),l&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(t){if(!this._state.disableEventHandlers){t.preventDefault&&t.preventDefault();var e=this._util,i=t.pageX,r=t.pageY;e.pointerDown=!0,e.drag.isVerticalDirection=!1,e.drag.startX=i,e.drag.startY=r}}},{key:"mouseover",value:function(){this._state.mouseOnElement=!0,this.pauseAutoSwitch()}},{key:"mouseup",value:function(t){if(!this._state.disableEventHandlers){var e=this._util.sliderElem;G(e,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(t){var e=this._state.disableEventHandlers;if(this._state.mouseOnElement=!1,!e){t.preventDefault();var i=this._util,r=i.pointerDown,n=i.drag,a=i.sliderElem;if(this.setTimeoutForAutoSwitch(),r){var s=t.pageX,o=t.pageY;n.endX=s,n.endY=o,G(a,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(t){if(!this._state.disableEventHandlers){var e=this._util,i=e.pointerDown,r=e.sliderElem,n=e.drag;if(i){var a=t.pageX,s=t.pageY;this._util.pointerDown=!1,G(r,"-webkit-grab"),n.endX=a,n.endY=s,this.updateAfterDrag(),this.clearDrag()}}}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){this.removeEventListeners(),y(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this._util)return 0;var t=this._util,e=t.counter,i=t.dataList,r=t.resizeEnd,n=t.rightPadding;if(e>=i.size-2){if(n)return-n;if(r){var a=i.tail;if(!a)return 0;var s=a.style.width,o=a.getBoundingClientRect().width;a.style.width="";var l=a.getBoundingClientRect(),u=l.width;return a.style.width=s,-(o-Math.min(u,o))}}return 0}}]),e}(A);Q.events={click:[["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["slides","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["slides","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]};var Z=Q,$=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,i,r){return i&&t(e.prototype,i),r&&t(e,r),e}}(),tt=function t(e,i,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,i);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,i,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)},et=window.wafer,it=et.base,rt=et.controllers,nt=et.utils,at=nt.elementInView,st=nt.throttle,ot=rt.WaferBaseController,lt=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.root,r=void 0===i?document:i,n=t.selector,a=void 0===n?".wafer-scrollview":n;l(this,e);var s=u(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:r,selector:a,WaferClass:Z}));return s.sync(),s._validateWithThrottle=st(function(){s.validate()},25,s),s}return c(e,t),$(e,[{key:"handleVisibilityChange",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=this._state.elementInstances,i=!0,r=!1,n=void 0;try{for(var a,s=e.values()[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){var o=a.value,l=o.instance;l._util.shouldAutoSwitch&&(t?l.setTimeoutForAutoSwitch():l.pauseAutoSwitch())}}catch(t){r=!0,n=t}finally{try{!i&&s.return&&s.return()}finally{if(r)throw n}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),tt(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(t){var e=this._state.elementInstances;t.forEach(function(t){var i=e.get(t),r=i.instance;r._util.shouldAutoSwitch&&(at(t,{offsetX:0,offsetY:0},it.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),e}(ot),ut=lt;e.default=new ut({})}})});