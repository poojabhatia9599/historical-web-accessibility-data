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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-lightbox",[],t):"object"==typeof exports?exports["wafer-lightbox"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-lightbox"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220630233725/https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/base.js":function(e,t,o){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=window.wafer,c=s.base,u=s.constants,f=s.utils,p=s.WaferBaseClass,d=f.bindEvent,h=f.findAncestor,b=f.getFocusableElems,y=f.getTemplateContent,m=f.setTimeout,w=f.unbindEvent,g=["handleClick","handleKeyDown"],v=[],_=u.ATTR_PREFIX,x=function(e){function t(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=o.errorClass,i=o.lightboxConfig,s=o.selector,c=o.successClass,u=o.wrapperMap;n(this,t);var f=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{errorClass:l,selector:s,successClass:c},{STATE_ATTRS:v})),p=e.getAttribute(_+"boundary"),d=e.getAttribute(_+"lightbox-target"),h=e.getAttribute(_+"lightbox-trigger")||"click",b=e.getAttribute(_+"lightbox-delay"),y=i.pageTarget;return f._util={boundary:p,elem:e,errorClass:l,delay:null===b||void 0===b?0:Number(b),selector:s,successClass:c,target:d,trigger:h,wrapperMap:u},y&&(f._util.pageTarget=document.querySelector(y)),f._state=a({firstFocusableElem:null,lastFocusableElem:null},f._state),g.forEach(function(e){f[e]=f[e].bind(f)}),f.addEventListeners(),"onLoad"===h&&f.open(),f}return l(t,e),i(t,[{key:"destroy",value:function(){this._util.elem.classList.add("wafer-destroyed")}},{key:"open",value:function(){var e=this._util,t=e.elem,o=e.delay,n=e.pageTarget,r=e.wrapperMap,l=r.contentElem,a=r.elem,i=r.wrapperElem;this.willOpen(),Object.assign(document.body.style,{overflow:"hidden"}),a.style.display="",l.innerHTML=this.templateText;var s=l.getElementsByClassName("wafer-lightbox-label")[0],u=b(i),f=i.querySelector("[autofocus]")||i;if(i.setAttribute("tabIndex",-1),d(i,"keydown",this.handleKeyDown,{passive:!1}),n&&n.setAttribute("aria-hidden",!0),s){var p=s.getAttribute("id");if(!p){var h=p="wafer-lightbox-label-"+Date.now();s.setAttribute("id",h)}i.setAttribute("aria-labelledby",p)}i.setAttribute("aria-modal",!0),i.setAttribute("role","dialog"),this._state.firstFocusableElem=u[0],this._state.lastFocusableElem=u[u.length-1],f.focus(),m(function(){return f.focus()},5),i.classList.add("wafer-lightbox-open"),document.body.classList.add("wafer-lightbox-open"),c.lock(document.body),m(function(){c.unlock(l),c.sync(l),c.emitWaferEvent("lightbox:open",{elem:a,meta:{targetElem:t}})},o)}},{key:"close",value:function(){var e=this._util.wrapperMap,t=e.wrapperElem;w(t,"keydown",this.handleKeyDown,{passive:!1})}},{key:"handleKeyDown",value:function(e){if("tab"===e.key.toLowerCase()||9===e.keyCode){var t=this._state,o=t.firstFocusableElem,n=t.lastFocusableElem;o&&(e.shiftKey?document.activeElement===o&&(n.focus(),e.preventDefault()):document.activeElement===n&&(o.focus(),e.preventDefault()))}}},{key:"handleClick",value:function(){this._util.wrapperMap&&("click"===this._util.trigger&&this.open())}},{key:"templateText",get:function(){var e=this._util,t=e.boundary,o=e.elem,n=e.target,r=e.templateText;return this._util.templateText=r||n&&y((t&&h(o,t)||document.body).querySelector(n)),this._util.templateText}}]),t}(p);x.events={click:[["wafer-lightbox","handleClick"]]},t.default=x,e.exports=t.default},"./src/controller.js":function(e,t,o){"use strict";function n(){return s=r(o("./src/base.js"))}function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),f=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var l=Object.getPrototypeOf(t);return null===l?void 0:e(l,o,n)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(n)},p=window.wafer.features.isTouchSafariDevice,d=["_handleCloseClick","_handleBgCloseClick","_handleContentScroll","_handleKeyDown"],h={background:"rgba(255 , 255, 255 ,0.8)",bottom:"0",display:"none",height:"100%",left:"0",position:"fixed",right:"0",top:"0",width:"100%"},b=window.wafer.utils,y=b.bindEvent,m=b.getConfigFromJSONScriptNode,w=b.getTemplateContent,g=b.setTimeout,v=b.throttle,_=b.unbindEvent,x=window.wafer.base,C=window.wafer.controllers.WaferBaseController,E=void 0,k=void 0,O=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.containerClass,r=void 0===o?null:o,i=e.root,u=void 0===i?document:i,f=e.selector,h=e.src,b=void 0===h?"data-wf-lightbox":h,y=e.successClass,w=void 0===y?"wafer-lightbox-loaded":y,g=e.scrollDelay,_=void 0===g?25:g;l(this,t);var x=m(document.getElementById("wafer-lightbox-config")),C=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:u,selector:f,WaferClass:(s||n()).default}));C._options=c({},C._options,{props:{lightboxConfig:x},container:!!r&&u.getElementsByClassName(r),src:b,successClass:w}),d.forEach(function(e){C[e]=C[e].bind(C)}),C._handleContentScrollWithThrottle=v(function(){return C._handleContentScroll.call(C)},_,C),C._state=c({},C._state,{closeElem:null,currentInstance:null,lastScrollY:0,open:!1});var O=C;return(s||n()).default.prototype.willOpen=function(){if(p){var e=window.scrollY||0;E=document.body.style,Object.assign(document.body.style,{overflow:"hidden",position:"fixed",top:"-"+e+"px",width:"100%"}),k=document.documentElement.style,Object.assign(document.documentElement.style,{height:"100vh"}),O._state.lastScrollY=e}O._state.currentInstance=this,O._state.open=!0},C._renderLightBoxWrapper(),C.sync(),C}return i(t,e),u(t,[{key:"_close",value:function(){var e=this;if(this._state.open){this._state.open=!1;var t=this._options.props.wrapperMap,o=t.contentElem,n=t.elem,r=t.wrapperElem,l=this._state.currentInstance,a=l._util,i=a.elem,s=a.pageTarget;document.body.classList.remove("wafer-lightbox-open"),r.classList.remove("wafer-lightbox-open"),x.destroy(o),x.lock(o),x.unlock(document.body),g(function(){i.focus()},2),p?(document.body.style=E,document.documentElement.style=k,g(function(){window.scrollTo(0,e._state.lastScrollY||0),e._state.lastScrollY=0},10)):Object.assign(document.body.style,{overflow:"initial"}),Object.assign(n.style,{display:"none"}),s&&s.removeAttribute("aria-hidden"),l.close(),x.emitWaferEvent("lightbox:close",{elem:n,meta:{targetElem:i}})}}},{key:"_handleCloseClick",value:function(e){e.preventDefault(),this._close()}},{key:"_handleBgCloseClick",value:function(e){var t=this._options.props.wrapperMap,o=t.wrapperElem;e.target===o&&this._close()}},{key:"_handleContentScroll",value:function(){x._handleScroll()}},{key:"_handleKeyDown",value:function(e){switch(e=e||window.event,e.keyCode){case 27:this._close()}}},{key:"handleEvent",value:function(e,o,n){if(f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleEvent",this).call(this,e,o,n),n&&"click"===n.type){var r=n.target;if(r===this._state.closeButton)return;r.className&&r.classList.contains("wafer-lightbox-close")&&this._close()}}},{key:"willDestroy",value:function(e){var t=this._options.props.wrapperMap;if(t&&e===document.body){var o=t.wrapperElem,n=t.closeElem,r=t.contentElem,l=window.getComputedStyle(o),a="none"!==l.overflow?o:r;_(a,"scroll",this._handleContentScrollWithThrottle),n&&_(n,"click",this._handleCloseClick),_(o,"keydown",this._handleKeyDown),_(o,"click",this._handleBgCloseClick)}}},{key:"_renderLightBoxWrapper",value:function(){var e=document.createElement("div"),t=document.getElementById("wafer-lightbox-wrapper-template");if(!t)return void x.emitError({name:"WaferLightbox",elem:null,meta:{message:"wrapperTemplateElem missing"},stack:null});var o=w(t);if(!o)return void x.emitError({name:"WaferLightbox",elem:null,meta:{message:"lightBoxWrapperTemplateContent missing"},stack:null});e.className=t.className,e.classList.add("wafer-lightbox-overlay"),Object.assign(e.style,h),e.innerHTML=o;var n=e.getElementsByClassName("wafer-lightbox-wrapper")[0],r=e.getElementsByClassName("wafer-lightbox-content")[0],l=e.getElementsByClassName("wafer-lightbox-close")[0];this._state.closeButton=l,document.body.appendChild(e),l&&y(l,"click",this._handleCloseClick,{passive:!1});var a=window.getComputedStyle(n),i="hidden"!==a.overflow?n:r;i.classList.add("wafer-lightbox-element-to-scroll"),y(n,"keydown",this._handleKeyDown),y(i,"scroll",this._handleContentScrollWithThrottle),y(n,"click",this._handleBgCloseClick),this._options.props=c({},this._options.props,{wrapperMap:{elem:e,wrapperElem:n,contentElem:r}})}}]),t}(C);t.default=O,e.exports=t.default},"./src/entry.js":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r;t.default=new((r||function(){return r=n(o("./src/controller.js"))}()).default)({selector:"wafer-lightbox"}),e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 23:37:25 Jun 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:53 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.056
  cdx.remote: 0.091
  esindex: 0.011
  LoadShardBlock: 1047.825 (6)
  PetaboxLoader3.datanode: 293.589 (8)
  PetaboxLoader3.resolve: 963.109 (3)
  load_resource: 239.338 (2)
*/