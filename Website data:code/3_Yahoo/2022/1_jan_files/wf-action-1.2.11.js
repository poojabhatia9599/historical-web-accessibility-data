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

!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-action",[],e):"object"==typeof exports?exports["wafer-action"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-action"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://web.archive.org/web/20220101045533/https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,o){"use strict";function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c=function(){function t(t,e){var o=[],r=!0,n=!1,a=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(o.push(i.value),!e||o.length!==e);r=!0);}catch(t){n=!0,a=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw a}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),l=[],f=window.wafer,p=f.constants,d=f.features,b=f.utils,y=f.WaferBaseClass,m=p.ATTR_PREFIX,h=b.findAncestor,v=b.fetchWithCache,g=["handleClick"],w="wafer-action-is-true",_={block:-1,unblock:0},k="publisher",S={},T=function(t){function e(t){var o,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=i.appId,f=i.actionHost,p=i.bookmarkActionHost,d=i.crumb,b=i.id,y=i.name,v=i.selector,_=i.shouldSaveToStorage,S=i.subType,T=i.type;n(this,e);var O=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:v},{STATE_ATTRS:l}));u=t.getAttribute(m+"app-id")||u,d=t.getAttribute(m+"crumb")||d;var A=t.getAttribute(m+"action-type")||T||"follow",j=t.getAttribute(m+"action-sub-type")||S,E=t.getAttribute(m+"action-sub-type-category")||"",P=t.getAttribute(m+"action-id")||b,I=t.getAttribute(m+"action-content-id")||"",L=t.getAttribute(m+"action-label"),C=t.getAttribute(m+"action-name")||y,H=L&&L.split("|")||[],x=c(H,2),D=x[0],M=x[1],R=t.getAttribute(m+"action-title")||"",B=t.getAttribute(m+"action-boundary"),N={follow:f+"api/v3/topics?appId="+u,block:f+"api/v1/content/feedback/"+(j===k?k:"entities")+"?appId="+u},F=N[A],J=B&&h(t,B);return O._util=s({},O._util,(o={actionHost:f,apiPath:F,appId:u,bookmarkActionHost:p,boundaryElem:J,subType:j,contentId:I,crumb:d,elem:t,falseLabel:M,id:P,mappingId:P+A+j+E,subTypeCategory:E,shouldSaveToStorage:void 0===_?void 0:!!_,name:C},r(o,"subType",j),r(o,"title",R),r(o,"trueLabel",D),r(o,"type",A),o)),g.forEach(function(t){O[t]=O[t].bind(O)}),O._state={actionStatus:!1,inProgress:!1},t.classList.add("has-click","has-wafer-click"),setTimeout(function(){O.setActionStatus(t.classList.contains(w))},0),O}return i(e,t),u(e,[{key:"statusDidUpdate",value:function(t){var e=this._util.elem;if(e){var o=this._util,r=o.falseLabel,n=o.trueLabel;this._state.actionStatus=t,t?(r&&e.setAttribute("title",r),e.classList.add(w)):(n&&e.setAttribute("title",n),e.classList.remove(w))}}},{key:"saveToStorage",value:function(){if(d.localStorage){var t=this._util,o=t.id,r=t.name,n=void 0===r?"":r,a=t.subType,i=t.type,s=Date.now()+9e5;return window.localStorage.setItem(e.LS_KEY,JSON.stringify({id:o,name:n,subType:a,ttl:s,type:i})),Promise.resolve()}}},{key:"triggerTopicAction",value:function(t){var e=this._util,o=e.appId,n=e.actionHost,a=e.bookmarkActionHost,i=e.contentId,s=e.id,c=e.name,u=e.shouldSaveToStorage,l=e.subType,f=e.subTypeCategory,p=e.title,d=e.type,b=this._util.apiPath,y={follow:this._state.actionStatus?"PUT":"DELETE",block:"POST",bookmark:this._state.actionStatus?"POST":"DELETE",urlBookmark:"DELETE"},m=y[d],h=void 0,g=void 0;return"follow"===d&&(h={types:r({},l,[{id:s}])},g={Crumb:t},"provider"===l&&(h.types[l][0].type=f||"PROVIDER")),"block"===d&&(h={entities:[{entity_id:s,entity_type:l,score:_[this._state.actionStatus?"block":"unblock"]}]},g={Crumb:t},l===k&&(h.entities[0].entity_name=c)),"bookmark"===d&&("DELETE"===m?b=a+"api/v1/user/bookmarks/"+l+"/"+i+"?appId="+o:(b=a+"api/v1/user/bookmarks/"+l+"?appId="+o,h={contentId:i,title:p}),g={"X-CSRF-Token":t}),"urlBookmark"===d&&(b="deleteFolder"===l?n+"api/v1/bookmarks/folders/"+i+"?appId="+o:n+"api/v1/bookmarks/items/"+i+"?appId="+o,g={Crumb:t}),u?this.saveToStorage():v(b,{body:JSON.stringify(h),cache:0,clientHeaders:g,credentials:"include",method:m,mode:"cors"})}},{key:"getCrumb",value:function(){var t=this._util,e=t.appId,o=t.actionHost,r=t.bookmarkActionHost,n=t.shouldSaveToStorage,a=t.type,i=this._util.crumb||S[a];if(i||n)return new Promise(function(t){t(i||"")});var s=void 0;return s="bookmark"===a?r+"api/v1/auth/crumb?appId="+e:o+"api/v1/auth/crumb?appId="+e,v(s,{cache:0,credentials:"include",mode:"cors"}).then(function(t){var e=t.crumb;if(S[a]=e,!e)throw new Error("crumb not found");return e})}},{key:"trigger",value:function(t){var e=this;if(t){var o=this._util.type,r=t.crumb;r&&(S[o]=r),this._util=s({},this._util,t)}var n=this._util,a=n.boundaryElem,i=n.name,c=this._state.actionStatus;this._state.inProgress=!0,a&&a.classList.add("wafer-action-in-progress"),c?this.setActionStatus(!1):this.setActionStatus(!0),this.getCrumb().then(function(t){return e._state.inProgress=!1,e.triggerTopicAction(t)}).then(function(t){var o=t||{},r=o.result,n=void 0===r?{}:r,s=n.success,c=void 0===s?{}:s,u=c.entities,l=void 0===u?[]:u,f=e._util,p=f.id,d=f.subType,b=f.type,y="follow"===b&&l.some(function(t){return t.id===p}),m="block"===b&&(null!==t&&t===Object(t)),h="bookmark"===b&&(null!==t&&t===Object(t)),v="urlBookmark"===b&&(null!==t&&t===Object(t));if(!("follow"===b?y:"block"===b?m:"urlBookmark"===b?v:h))throw a&&(a.classList.add("wafer-action-boundary-error"),a.remove("wafer-action-boundary-success","wafer-action-in-progress")),new Error("action failed");a&&(a.classList.add("wafer-action-boundary-success"),a.remove("wafer-action-boundary-error","wafer-action-in-progress")),e.didComplete(null,{id:p,name:i,subType:d,type:b})}).catch(function(t){e._state.inProgress=!1,a&&(a.classList.remove("wafer-action-in-progress","wafer-action-boundary-success"),a.add("wafer-action-boundary-error")),e._state.actionStatus=!e._state.actionStatus,e.setActionStatus(e._state.actionStatus)})}},{key:"handleClick",value:function(t){t.preventDefault(),this._state.inProgress||this.trigger()}}]),e}(y);T.events={click:[["has-click","handleClick"]]},T.LS_KEY=m+"action-storage",e.default=T,t.exports=e.default},"./src/controller.js":function(t,e,o){"use strict";function r(){return c=n(o("./src/base.js"))}function n(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c,u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),f=window.wafer,p=f.controllers,d=f.features,b=f.utils,y=p.WaferBaseController,m=b.getConfigFromJSONScriptNode,h=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,n=void 0===o?document:o,s=t.selector;a(this,e);var l=m(document.getElementById("wafer-action-config")),f=l.actionHost,p=l.appId,b=l.bookmarkActionHost,y=l.crumb,h=l.shouldSaveToStorage,v=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:n,selector:s,props:{actionHost:f,appId:p,bookmarkActionHost:b,crumb:y,shouldSaveToStorage:h,selector:s},WaferClass:(c||r()).default})),g=v;return v.sync(),v._state=u({},v._state,{idInstanceMapping:new Map}),(c||r()).default.prototype.setActionStatus=function(t){var e=this._util.mappingId,o=g._state.idInstanceMapping;o.has(e)||o.set(e,[]),o.get(e).push(this),o.get(e).forEach(function(e){e.statusDidUpdate(t)})},d.localStorage&&setTimeout(function(){v.processStoredAction(l,s)},1),v}return s(e,t),l(e,[{key:"processStoredAction",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.shouldProcessState){var o=t.actionHost,n=t.appId,a=t.bookmarkActionHost,i=t.crumb,s=window.localStorage.getItem((c||r()).default.LS_KEY);if(s){var l=document.createElement("div"),f={actionHost:o,appId:n,bookmarkActionHost:a,crumb:i,selector:e};try{var p=JSON.parse(s),d=p.id,b=p.name,y=p.ttl,m=void 0===y?0:y,h=p.subType,v=p.type;m&&m>=Date.now()&&v&&h&&d&&(l.setAttribute("data-wf-on","complete:setState:wfAction.entity."+v),new((c||r()).default)(l,Object.assign({},f,{id:d,name:b,subType:h,type:v})).trigger(u({},f,{id:d,name:b,subType:h,type:v})))}catch(t){}window.localStorage.removeItem((c||r()).default.LS_KEY)}}}}]),e}(y);e.default=h,t.exports=e.default},"./src/entry.js":function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n;e.default=new((n||function(){return n=r(o("./src/controller.js"))}()).default)({selector:".wafer-action"}),t.exports=e.default}})});

}
/*
     FILE ARCHIVED ON 04:55:33 Jan 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:14 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.079
  cdx.remote: 0.132
  esindex: 0.009
  LoadShardBlock: 197.316 (6)
  PetaboxLoader3.datanode: 157.603 (8)
  load_resource: 120.102 (2)
  PetaboxLoader3.resolve: 76.757 (2)
*/