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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-lightbox",[],t):"object"==typeof exports?exports["wafer-lightbox"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-lightbox"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221031235009/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},s=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=window.wafer,c=i.base,u=i.constants,d=i.features,f=i.utils,p=i.WaferBaseClass,h=f.bindEvent,b=f.findAncestor,y=f.getFocusableElems,w=f.getTemplateContent,m=f.setTimeout,g=f.unbindEvent,v=["handleClick","handleKeyDown","handleTouchStart","handleTouchEnd","handleSwipeUp"],_=[],E=u.ATTR_PREFIX,x=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=o.errorClass,s=o.lightboxConfig,i=o.selector,c=o.successClass,u=o.wrapperMap;n(this,t);var d=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:l,selector:i,successClass:c},{STATE_ATTRS:_})),f=e.getAttribute(E+"boundary"),p=e.getAttribute(E+"lightbox-target"),h=e.getAttribute(E+"lightbox-key"),b=e.getAttribute(E+"lightbox-trigger")||"click",y=e.getAttribute(E+"lightbox-delay"),w=e.getAttribute(E+"lightbox-close-on-swipe"),m=s.pageTarget;return d._util={boundary:f,closeOnSwipe:null===w||void 0===w?0:Number(w),elem:e,errorClass:l,delay:null===y||void 0===y?0:Number(y),key:h,selector:i,successClass:c,target:p,trigger:b,wrapperMap:u},m&&(d._util.pageTarget=document.querySelector(m)),d._state=a({contentObserver:null,firstFocusableElem:null,lastFocusableElem:null,touchendY:0,touchstartY:0},d._state),v.forEach(function(e){d[e]=d[e].bind(d)}),d.addEventListeners(),"onLoad"===b&&d.open(),d}return l(t,e),s(t,[{key:"destroy",value:function(){this._util.elem.classList.add("wafer-destroyed")}},{key:"open",value:function(){var e=this,t=this._util,o=t.closeOnSwipe,n=t.delay,r=t.elem,l=t.key,a=t.pageTarget,s=t.wrapperMap,i=s.contentElem,u=s.elem,f=s.wrapperElem;this.willOpen(),Object.assign(document.body.style,{overflow:"hidden"}),u.style.display="",i.innerHTML=this.templateText;var p=i.getElementsByClassName("wafer-lightbox-label")[0],b=f.querySelector("[autofocus]")||f;if(f.setAttribute("tabIndex",-1),h(f,"keydown",this.handleKeyDown,{passive:!1}),d.mutationObserver&&(this._state.contentObserver=new MutationObserver(function(){e.setFocusableElements()}),this._state.contentObserver.observe(i,{childList:!0,subtree:!0})),o&&(h(f,"touchstart",this.handleTouchStart),h(f,"touchend",this.handleTouchEnd)),a&&a.setAttribute("aria-hidden",!0),p){var y=p.getAttribute("id");if(!y){var w=y="wafer-lightbox-label-"+Date.now();p.setAttribute("id",w)}f.setAttribute("aria-labelledby",y)}l&&f.classList.add("wafer-ligthbox-source-"+l),f.setAttribute("aria-modal",!0),f.setAttribute("role","dialog"),this.setFocusableElements(),b.focus(),m(function(){return b.focus()},5),f.classList.add("wafer-lightbox-open"),document.body.classList.add("wafer-lightbox-open"),c.lock(document.body),m(function(){c.unlock(i),c.sync(i),c.emitWaferEvent("lightbox:open",{elem:u,meta:{targetElem:r}})},n)}},{key:"close",value:function(){var e=this._util,t=e.closeOnSwipe,o=e.wrapperMap,n=o.wrapperElem,r=this._state.contentObserver;r&&r.disconnect(),g(n,"keydown",this.handleKeyDown,{passive:!1}),t&&(g(n,"touchstart",this.handleTouchStart),g(n,"touchend",this.handleTouchEnd))}},{key:"handleKeyDown",value:function(e){if("tab"===e.key.toLowerCase()||9===e.keyCode){var t=this._state,o=t.firstFocusableElem,n=t.lastFocusableElem;o&&(e.shiftKey?document.activeElement===o&&(n.focus(),e.preventDefault()):document.activeElement===n&&(o.focus(),e.preventDefault()))}}},{key:"handleClick",value:function(){this._util.wrapperMap&&("click"===this._util.trigger&&this.open())}},{key:"handleTouchStart",value:function(e){this._state.touchstartY=e.changedTouches[0].screenY}},{key:"handleTouchEnd",value:function(e){this._state.touchendY=e.changedTouches[0].screenY;var t=this._state,o=t.touchstartY;t.touchendY<o&&this.handleSwipeUp(),this._state.touchstartY=0,this._state.touchendY=0}},{key:"handleSwipeUp",value:function(){var e=this._util.wrapperMap,t=e.wrapperElem,o=e.elementToScroll,n=o.scrollHeight,r=o.scrollTop;n-t.offsetHeight-r<1&&this.handleSwipeClose()}},{key:"setFocusableElements",value:function(){var e=this._util.wrapperMap,t=e.wrapperElem,o=y(t);this._state.firstFocusableElem=o[0],this._state.lastFocusableElem=o[o.length-1]}},{key:"templateText",get:function(){var e=this._util,t=e.boundary,o=e.elem,n=e.target,r=e.templateText;return this._util.templateText=r||n&&w((t&&b(o,t)||document.body).querySelector(n)),this._util.templateText}}]),t}(p);x.events={click:[["wafer-lightbox","handleClick"]]},t.default=x,e.exports=t.default},"./src/controller.js":function(e,t,o){"use strict";function n(){return i=r(o("./src/base.js"))}function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),d=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var l=Object.getPrototypeOf(t);return null===l?void 0:e(l,o,n)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(n)},f=window.wafer.features.isTouchSafariDevice,p=["_handleCloseClick","_handleBgCloseClick","_handleContentScroll","_handleKeyDown"],h={background:"rgba(255 , 255, 255 ,0.8)",bottom:"0",display:"none",height:"100%",left:"0",position:"fixed",right:"0",top:"0",width:"100%"},b=window.wafer.utils,y=b.bindEvent,w=b.getConfigFromJSONScriptNode,m=b.getTemplateContent,g=b.setTimeout,v=b.throttle,_=b.unbindEvent,E=window.wafer.base,x=window.wafer.controllers.WaferBaseController,C=void 0,k=void 0,O=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.containerClass,r=void 0===o?null:o,s=e.root,u=void 0===s?document:s,d=e.selector,h=e.src,b=void 0===h?"data-wf-lightbox":h,y=e.successClass,m=void 0===y?"wafer-lightbox-loaded":y,g=e.scrollDelay,_=void 0===g?25:g;l(this,t);var E=w(document.getElementById("wafer-lightbox-config")),x=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:u,selector:d,WaferClass:(i||n()).default}));x._options=c({},x._options,{props:{lightboxConfig:E},container:!!r&&u.getElementsByClassName(r),src:b,successClass:m}),p.forEach(function(e){x[e]=x[e].bind(x)}),x._handleContentScrollWithThrottle=v(function(){return x._handleContentScroll.call(x)},_,x),x._state=c({},x._state,{closeElem:null,currentInstance:null,lastScrollY:0,open:!1});var O=x;return(i||n()).default.prototype.willOpen=function(){if(window.wafer.base.pauseVideo(),f){var e=window.scrollY||0;C=document.body.style,Object.assign(document.body.style,{overflow:"hidden",position:"fixed",top:"-"+e+"px",width:"100%"}),k=document.documentElement.style,Object.assign(document.documentElement.style,{height:"100vh"}),O._state.lastScrollY=e}O._state.currentInstance=this,O._state.open=!0},(i||n()).default.prototype.handleSwipeClose=function(){O._close()},x._renderLightBoxWrapper(),x.sync(),x}return s(t,e),u(t,[{key:"_close",value:function(){var e=this;if(this._state.open){this._state.open=!1;var t=this._options.props.wrapperMap,o=t.contentElem,n=t.elem,r=t.wrapperElem,l=this._state.currentInstance,a=l._util,s=a.elem,i=a.pageTarget;document.body.classList.remove("wafer-lightbox-open"),r.classList.remove("wafer-lightbox-open"),window.wafer.base.pauseVideo(),E.destroy(o),E.lock(o),E.unlock(document.body),g(function(){s.focus()},2),f?(document.body.style=C,document.documentElement.style=k,g(function(){window.scrollTo(0,e._state.lastScrollY||0),e._state.lastScrollY=0},10)):Object.assign(document.body.style,{overflow:"initial"}),Object.assign(n.style,{display:"none"}),i&&i.removeAttribute("aria-hidden"),l.close(),E.emitWaferEvent("lightbox:close",{elem:n,meta:{targetElem:s}})}}},{key:"_handleCloseClick",value:function(e){e.preventDefault(),this._close()}},{key:"_handleBgCloseClick",value:function(e){var t=this._options.props.wrapperMap,o=t.wrapperElem;e.target===o&&this._close()}},{key:"_handleContentScroll",value:function(){E._handleScroll()}},{key:"_handleKeyDown",value:function(e){switch(e=e||window.event,e.keyCode){case 27:this._close()}}},{key:"handleEvent",value:function(e,o,n){if(d(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleEvent",this).call(this,e,o,n),n&&"click"===n.type){var r=n.target;if(r===this._state.closeButton)return;r.className&&r.classList.contains("wafer-lightbox-close")&&this._close()}}},{key:"willDestroy",value:function(e){var t=this._options.props.wrapperMap;if(t&&e===document.body){var o=t.wrapperElem,n=t.closeElem,r=t.contentElem,l=window.getComputedStyle(o),a="none"!==l.overflow?o:r;_(a,"scroll",this._handleContentScrollWithThrottle),n&&_(n,"click",this._handleCloseClick),_(o,"keydown",this._handleKeyDown),_(o,"click",this._handleBgCloseClick)}}},{key:"_renderLightBoxWrapper",value:function(){var e=document.createElement("div"),t=document.getElementById("wafer-lightbox-wrapper-template");if(!t)return void E.emitError({name:"WaferLightbox",elem:null,meta:{message:"wrapperTemplateElem missing"},stack:null});var o=m(t);if(!o)return void E.emitError({name:"WaferLightbox",elem:null,meta:{message:"lightBoxWrapperTemplateContent missing"},stack:null});e.className=t.className,e.classList.add("wafer-lightbox-overlay"),Object.assign(e.style,h),e.innerHTML=o;var n=e.getElementsByClassName("wafer-lightbox-wrapper")[0],r=e.getElementsByClassName("wafer-lightbox-content")[0],l=e.getElementsByClassName("wafer-lightbox-close")[0];this._state.closeButton=l,document.body.appendChild(e),l&&y(l,"click",this._handleCloseClick,{passive:!1});var a=window.getComputedStyle(n),s="hidden"!==a.overflow?n:r;s.classList.add("wafer-lightbox-element-to-scroll"),y(n,"keydown",this._handleKeyDown),y(s,"scroll",this._handleContentScrollWithThrottle),y(n,"click",this._handleBgCloseClick),this._options.props=c({},this._options.props,{wrapperMap:{elem:e,contentElem:r,elementToScroll:s,wrapperElem:n}})}}]),t}(x);t.default=O,e.exports=t.default},"./src/entry.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r;t.default=new((r||function(){return r=n(o("./src/controller.js"))}()).default)({selector:"wafer-lightbox"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:50:09 Oct 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:59 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.065
  exclusion.robots.policy: 0.055
  cdx.remote: 0.093
  esindex: 0.009
  LoadShardBlock: 300.499 (6)
  PetaboxLoader3.datanode: 258.335 (7)
  load_resource: 31.311
*/