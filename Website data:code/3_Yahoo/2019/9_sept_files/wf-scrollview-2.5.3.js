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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-scrollview",[],t):"object"==typeof exports?exports["wafer-scrollview"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-scrollview"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20190831231725/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,i){"use strict";function r(){return u=n(i("./src/data.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function a(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},d=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h=function e(t,i,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in n)return n.value;var s=n.get;if(void 0!==s)return s.call(r)},f=window.wafer,v=f.base,p=f.constants,g=f.features,m=f.utils,y=f.WaferBaseClass,b=g.transformProperty,w=p.ATTR_PREFIX,_=m.bindEvent,E=m.convertNodeListToArray,k=m.elementInView,C=m.fetchWithCache,M=m.isVisible,x=m.throttle,D=m.unbindEvent,A=30,T=5,W=250,O="ease-out",j="active",B=["next","prev"],L=function(e,t,i){e.style.webkitTransition="transform "+t+"ms "+i,e.style.transition="transform "+t+"ms "+i},P=function(e){e.style.webkitTransition="",e.style.transition=""},X=function(){var e=[],t=!1;return{add:function(t,i){e.push(function(e){return function(){return t.call(e)}}(i)),this.exec(i._util.transitionDuration+50)},exec:function(i){var r=this;t||(t=!0,setTimeout(function(){t=!1,e.shift().call(),e.length&&r.exec(i)},i))}}}(),I=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.counter,a=void 0===n?0:n,l=i.syncDelay,d=void 0===l?25:l;s(this,t);var h=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{})),f=e.getAttribute(w+"behavior");if(h._util={elem:e,behavior:f},"native"===f){h._syncWithThrottle=x(function(){v.sync(e)},d,h);var p=void 0;if(E(e.children).some(function(e){return!!e.classList.contains(j)&&(p=e,!0)}),p&&0===e.scrollLeft){var g=e.getBoundingClientRect(),m=g.width,y=p.getBoundingClientRect(),b=y.width,_=y.left;e.scrollLeft=b>=m?_-A:_-(m-b)/2}return h.addEventListeners(),o(h)}var k=parseInt(e.getAttribute(w+"edge-padding"))||0,C=parseInt(e.getAttribute(w+"right-padding"))||0,M=e.getAttribute(w+"resize-end"),D=e.getAttribute(w+"pagination-target"),P=e.getAttribute(w+"trigger-wf-during-transition"),X=e.getAttribute(w+"scrollview-td"),I=e.getAttribute(w+"scrollview-ttf"),V=e.getAttribute(w+"cycle"),z=D&&document.body.querySelector(D)||E(e.getElementsByClassName("indicators"))[0],F=void 0,H=void 0;z&&"count"===(F=z.getAttribute(w+"pagination-type")||"default")&&(H=E(z.getElementsByClassName("current-page"))[0]);var Y=new((u||r()).default)({windowLimit:T});Y.cycle=V;var N=h._util=c({},h._util,{counter:a,cycle:null===V||void 0===V?0:Number(V),dataList:Y,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:k,elem:e,indicatorCountElem:H,indicatorElem:z,indicatorType:F,nextBtn:E(e.getElementsByClassName("next-btn"))[0],resizeEnd:null===M||void 0===M?0:Number(M),prevBtn:E(e.getElementsByClassName("prev-btn"))[0],rightPadding:C,sliderElem:E(e.getElementsByClassName("slides"))[0],sliderItemsDataMapping:new Map,transitionDuration:null===X||void 0===X?W:Number(X),transitionTimingFunction:null===I||void 0===I?O:I,triggerWafersDuringTransition:"1"===P?1:0});h._state={disableEventHandlers:!1,hasBeenThreadmilled:!1,slideWidth:null,virtualCounter:null},N.sliderItems=E(N.sliderElem.children),N.indicatorItems=N.indicatorElem?E(N.indicatorElem.children):null;var S=N.sliderItems.length;h._state.slideWidth=100/S,h.updateWidth(),L(N.sliderElem,N.transitionDuration,N.transitionTimingFunction),N.sliderElem.style.cursor="-webkit-grab",N.sliderElem.style["padding-left"]=k+"px";for(var R=document.createDocumentFragment(),U=void 0,q=!1,G=0;G<S;G++){var J=N.sliderItems[G];Y.add(J),J.style.width=h._state.slideWidth+"%",!q&&G>0&&J.classList.contains(j)&&(U=G,q=!0),R.appendChild(J)}if(N.sliderElem.appendChild(R),U)for(var K=0;K<U;K++)h.showCurrent(1);return B.forEach(function(e){h[e]=h[e].bind(h)}),h.addEventListeners(),0===a&&(h.preFetch(),h.updateIndicators(a),h.updateButtons(!0),Y.getActive().classList.add(j)),h}return l(t,e),d(t,[{key:"slidesHasBeenUpdated",value:function(){var e=this._util;e.sliderItems=E(e.sliderElem.children);var t=e.sliderItems.length;this._state.slideWidth=100/t;for(var i=0;i<t;i++){e.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var e=this._util,t=this._state.virtualCounter,i=e.edgePadding,r=e.rightPadding,n=e.sliderElem,a=e.sliderItems;n.style.width="",e.containerWidth=n.getBoundingClientRect().width,e.itemWidth=i?e.containerWidth-2*i:r?e.containerWidth-r:e.containerWidth,n.style.width=e.itemWidth*a.length+"px",n.style[b]="translateX(-"+(t*e.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"addEventListeners",value:function(){var e=this._util,i=e.elem;if("native"===e.behavior)return void _(i,"scroll",this._syncWithThrottle);h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"removeEventListeners",value:function(){var e=this._util,i=e.elem;if("native"===e.behavior)return void D(i,"scroll",this._syncWithThrottle);h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){for(var e=this._util.dataList,t=0;t<3;t++){var i=e.getForward(t),r=e.getBackward(t);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"handleResize",value:function(){var e=this._util,t=e.behavior,i=e.transitionDuration,r=e.transitionTimingFunction;if("native"!==t){var n=this._util.sliderElem;M(n)&&(P(n),this.updateWidth(),setTimeout(function(){L(n,i,r)},0))}}},{key:"handleFetch",value:function(e){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.fetchBody,a=r.fetchUrl,s=r.prefetch,o=void 0!==s&&s,l=r.replace,u=void 0!==l&&l,c=r.resultSelector;if(!o||e.parentNode){var d=this._util,h=d.dataList,f=d.sliderItemsDataMapping;f.has(e)||f.set(e,{});var p=f.get(e);!a||void 0!==p.fetchStatus&&2!==p.fetchStatus?(o?v.prefetch(e):v.sync(e),u&&this.slidesHasBeenUpdated()):(p.fetchStatus=0,C(a,{body:n}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.html;if(r){var n=void 0;if(v.destroy(e),u){var a=document.createElement("div"),s=e.parentNode,l=E(s.children),d=e===h.tail;a.innerHTML=r;var f=c&&a.querySelector(c),g=E((f||a||{}).children),m=l.indexOf(e);h.appendWithReplace(e,g),-1!==m&&(g.forEach(function(t){s.insertBefore(t,e)}),d&&(s.removeChild(l[0]),i._state.virtualCounter--),s.removeChild(e)),n=s,i._state.hasBeenThreadmilled=!1}else e.innerHTML=r,n=e;p.fetchStatus=1,o?v.prefetch(e):v.sync(n),u&&i.slidesHasBeenUpdated()}}).catch(function(i){v.emitError({name:t.constructor.name,elem:e,meta:{fetchUrl:a},stack:i.stack}),p.fetchStatus=2}))}}},{key:"renderSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.prefetch,r=void 0!==i&&i,n=this._util.sliderElem;if(!r||k(n,{offsetX:0,offsetY:0},v.viewport)){var a=void 0,s=void 0,o=void 0,l=void 0,u=e.getAttribute(w+"url");switch(u&&(a="fetch",o=!!Number(e.getAttribute(w+"replace")),s=e.getAttribute(w+"result-selector"),l=e.getAttribute(w+"body")),a){case"fetch":this.handleFetch(e,{fetchBody:l,fetchUrl:u,prefetch:r,replace:o,resultSelector:s});break;default:r?v.prefetch(e):setTimeout(function(){v.sync(e)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(e,t){var i=this._util,r=this._state,n=i.cycle,a=i.dataList,s=i.itemWidth,o=i.sliderElem,l=i.transitionTimingFunction,u=i.transitionDuration,c=a.size,d=r.slideWidth,h=r.virtualCounter;if(1===e){var f=t+1>c;if(n||!f){var v=a.getElementToAppend();if(v&&(v.style.width=d+"%"),L(o,u,l),o.style[b]="translateX(-"+(((h||0)+1)*s+this.negativeWidthCoefficient)+"px)",null===h)return r.virtualCounter=1,this._util.counter=t,void a.setNextAsActive();if(r.virtualCounter++,a.setNextAsActive(),!v)return;X.add(function(){var e=i.itemWidth,t=i.sliderElem,n=E(t.children);t.removeChild(n[0]),t.appendChild(v),i.sliderItems=E(t.children),r.virtualCounter--,P(t),t.style[b]="translateX(-"+r.virtualCounter*e+"px)"},this)}}else if(-1===e){var p=t<0;if(n||!p){var g=a.getElementToPrepend();if(g&&(g.style.width=d+"%"),L(o,u,l),o.style[b]="translateX(-"+(h-1)*s+"px)",r.virtualCounter--,a.setPreviousAsActive(),!g)return;X.add(function(){var e=i.itemWidth,t=i.sliderElem,n=E(t.children);t.removeChild(n[n.length-1]),t.prepend(g),i.sliderItems=E(t.children),r.virtualCounter++,P(t),t.style[b]="translateX(-"+r.virtualCounter*e+"px)"},this)}}}},{key:"showCurrent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this._util,i=t.counter,r=t.cycle,n=t.dataList,s=t.elem,o=t.itemWidth,l=t.sliderElem,u=n.size,c=i;if(this.isValidMove(e)){if(r){if(1===e){var d=c+1>=u;c=d?0:i+e}else if(-1===e){var h=c<=0;c=h?u-1:i+e}}else c=i+e;if(n.getActive().classList.remove(j),c!==i){if(!this._state.hasBeenThreadmilled){for(;[].concat(a(l.children)).length>T;)l.removeChild(l.children[T]);t.sliderItems=E(l.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(e,c),this._util.counter=c;var f=n.getActive();f.classList.add(j),this.renderSlide(f),this.updateIndicators(c,i),this.updateButtons(),this.preFetch(),v.emitWaferEvent("scrollview:change",{elem:s,meta:{index:c+1,prevIndex:i+1}})}else{n.getActive().classList.add(j);var p=this._state.virtualCounter,g="translateX(-"+(p*o+this.negativeWidthCoefficient)+"px)";g!==this._util.transformValue&&(l.style[b]=g,this._util.transformValue=g)}}}},{key:"updateIndicators",value:function(e,t){var i=this._util;if("count"===i.indicatorType){var r=i.indicatorCountElem;r&&(r.innerHTML=e+1)}else{var n=i.indicatorItems;n&&(n[t]&&n[t].classList.remove(j),n[e]&&n[e].classList.add(j))}}},{key:"updateButtons",value:function(e){var t=this._util,i=t.counter,r=t.cycle,n=t.nextBtn,a=t.prevBtn,s=t.dataList,o=s.size;n&&(r&&!e||i!==o-1?n.removeAttribute("disabled"):n.setAttribute("disabled",!0)),a&&(r&&!e||0!==i?a.removeAttribute("disabled"):a.setAttribute("disabled",!0))}},{key:"updateAfterDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag,i=t.currentDirection,r=t.endX,n=t.horizontalDirection,a=t.startX,s=r-a,o=i===n;o&&s>0&&Math.abs(s)>30?this.showCurrent(-1,e):o&&s<0&&Math.abs(s)>30?this.showCurrent(1,e):this.showCurrent()}},{key:"isValidMove",value:function(e){var t=this._util,i=t.counter,r=t.cycle,n=t.dataList,a=n.size;return r?1===e&&i<=a-1||-1===e&&i>=0||0===e:1===e&&i<a-1||-1===e&&i>0||0===e}},{key:"grab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag;this._util.pointerDown=!1,t.endX&&this.updateAfterDrag(e),this.clearDrag()}},{key:"grabbing",value:function(){var e=this._util,t=e.drag,i=e.elem,r=e.itemWidth,n=e.sliderElem,a=e.triggerWafersDuringTransition,s=this._state.virtualCounter,o=t.startX,l=t.endX,u=-1*(s*r+(o-l)),c="translateX("+u+"px)";a&&2*Math.abs(u)>=r&&v.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,n.style[b]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var e=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&clearTimeout(this._grabTimeout),this._util.grabTimeout=setTimeout(function(){e._util.drag.isVerticalDirection=!1},50)}},{key:"next",value:function(e){e.preventDefault(),e.stopPropagation(),this.showCurrent(1,{source:"button",type:"next",sourceEvent:e})}},{key:"prev",value:function(e){e.preventDefault(),e.stopPropagation(),this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:e})}},{key:"keydown",value:function(e){this._state.disableEventHandlers||(e=e||window.event,37===e.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===e.keyCode&&this.showCurrent(1,{source:"key",type:"next"}))}},{key:"touchstart",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=e.touches[0],r=i.pageX,n=i.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=r,t.drag.startY=n}}},{key:"touchend",value:function(e){this._state.disableEventHandlers||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.drag,r=i.startX,n=i.startY,a=e.touches[0],s=a.pageX,o=a.pageY,l=0;i.isVerticalDirection||(Math.abs(n-o)>8&&(i.isVerticalDirection=n>o?1:-1),r!==s&&(l=r>s?1:-1),i.horizontalDirection=l,i.last!==s&&(i.currentDirection=i.last>s?1:-1,i.last=s),t.pointerDown&&(i.endX=s,i.endY=o,this.isValidMove(l)&&(t.drag.grabbing&&e.preventDefault(),Math.abs(n-o)>8&&(i.isVerticalDirection=n>o?1:-1),l&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(e){if(!this._state.disableEventHandlers){e.preventDefault&&e.preventDefault();var t=this._util,i=e.pageX,r=e.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=i,t.drag.startY=r}}},{key:"mouseup",value:function(e){this._state.disableEventHandlers||(this._util.sliderElem.style.cursor="-webkit-grab",this.grab({source:"mouse"}))}},{key:"mouseleave",value:function(e){if(!this._state.disableEventHandlers){e.preventDefault();var t=this._util,i=t.pointerDown,r=t.drag,n=t.sliderElem;if(i){var a=e.pageX,s=e.pageY;r.endX=a,r.endY=s,n.style.cursor="-webkit-grabbing",this.grabbing()}}}},{key:"mousemove",value:function(e){if(!this._state.disableEventHandlers){var t=this._util,i=t.pointerDown,r=t.sliderElem,n=t.drag;if(i){var a=e.pageX,s=e.pageY;this._util.pointerDown=!1,r.style.cursor="-webkit-grab",n.endX=a,n.endY=s,this.updateAfterDrag(),this.clearDrag()}}}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"destroy",value:function(){this.removeEventListeners(),h(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this._util)return 0;var e=this._util,t=e.counter,i=e.dataList,r=e.resizeEnd,n=e.rightPadding;if(t>=i.size-2){if(n)return-n;if(r){var a=i.tail;if(!a)return 0;var s=a.style.width,o=a.getBoundingClientRect().width;a.style.width="";var l=a.getBoundingClientRect(),u=l.width;return a.style.width=s,-(o-Math.min(u,o))}}return 0}}]),t}(y);I.events={click:[["next-btn","next"],["prev-btn","prev"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["slides","mouseleave"]],mousemove:[["slides","mousemove"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]},t.default=I,e.exports=t.default},"./src/controller.js":function(e,t,i){"use strict";function r(){return l=n(i("./src/base.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=window.wafer.controllers,c=u.WaferBaseController,d=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.root,n=void 0===i?document:i,o=e.selector,u=void 0===o?".wafer-scrollview":o;a(this,t);var c=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:n,selector:u,WaferClass:(l||r()).default}));return c.sync(),c}return o(t,e),t}(c);t.default=d,e.exports=t.default},"./src/data.js":function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),a="next",s="prev",o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.windowLimit,n=void 0===i?5:i;r(this,e),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(n/2)}return n(e,[{key:"add",value:function(e){var t=this.tail,i=this.elemMapping.size;if(t){var r=this.elemMapping.get(t);this.elemMapping.set(e,new Map([["index",i],[a,r.get(a)],[s,t]])),this.elemMapping.get(this.tail).set(a,e),this.elemMapping.get(this.head).set(s,e),this.tail=e}else this.elemMapping.set(e,new Map([["index",i],[a,e],[s,e]])),this.head=this.tail=e;this.active||(this.active=e)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(a)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(s)}},{key:"getElementToAppend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getForward(r+1):t<r?null:i>t+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):t>=i-r?null:t-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(a),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(s),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(e,t){e=e||this.active;var i=this.elemMapping.get(e),r=i.get(s),n=i.get(a),o=t[0],l=o,u=r;this.elemMapping.get(r).set(a,l);for(var c=1;c<t.length;c++){var d=t[c];this.elemMapping.set(l,new Map([[a,d],[s,u]])),u=l,l=d}this.elemMapping.set(l).set(l,new Map([[a,n],[s,u]])),this.elemMapping.get(n).set(s,l),e===this.head?this.head=o:e===this.tail&&(this.tail=l),e===this.active&&(this.active=o),this.elemMapping.delete(e);for(var h=this.elemMapping.get(r),f=h.get("index");h;){var v=h.get(a);h=this.elemMapping.get(v),h.set("index",++f),v===this.tail&&(h=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),e}();t.default=o,e.exports=t.default},"./src/entry.js":function(e,t,i){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n;t.default=new((n||function(){return n=r(i("./src/controller.js"))}()).default)({}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:17:25 Aug 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:29:09 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 224.325
  exclusion.robots: 0.081
  exclusion.robots.policy: 0.071
  cdx.remote: 0.066
  esindex: 0.01
  LoadShardBlock: 181.918 (3)
  PetaboxLoader3.datanode: 95.922 (4)
  PetaboxLoader3.resolve: 96.469 (2)
  load_resource: 56.027
*/