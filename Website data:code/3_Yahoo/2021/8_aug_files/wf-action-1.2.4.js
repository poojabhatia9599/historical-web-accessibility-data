!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("wafer-action",[],e):"object"==typeof exports?exports["wafer-action"]=e():(t.wafer=t.wafer||{},t.wafer.wafers=t.wafer.wafers||{},t.wafer.wafers["wafer-action"]=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="https://s.yimg.com/aaq/wf/",e(e.s="./src/entry.js")}({"./src/base.js":function(t,e,o){"use strict";function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c=function(){function t(t,e){var o=[],r=!0,n=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(o.push(a.value),!e||o.length!==e);r=!0);}catch(t){n=!0,i=t}finally{try{!r&&s.return&&s.return()}finally{if(n)throw i}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),f=[],p=window.wafer,d=p.constants,b=p.features,y=p.utils,h=p.WaferBaseClass,v=y.fetchWithCache,m=d.ATTR_PREFIX,g=["handleClick"],w="wafer-action-is-true",_={block:-1,unblock:0},S=void 0,k="publisher",T=function(t){function e(t){var o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.appId,l=a.actionHost,p=a.bookmarkActionHost,d=a.crumb,b=a.id,y=a.name,h=a.selector,v=a.shouldSaveToStorage,_=a.subType,S=a.type;n(this,e);var T=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,{selector:h},{STATE_ATTRS:f}));s=t.getAttribute(m+"app-id")||s,d=t.getAttribute(m+"crumb")||d;var O=t.getAttribute(m+"action-type")||S||"follow",A=t.getAttribute(m+"action-sub-type")||_,j=t.getAttribute(m+"action-sub-type-category")||"",P=t.getAttribute(m+"action-id")||b,E=t.getAttribute(m+"action-contentId")||"",I=t.getAttribute(m+"action-label"),C=t.getAttribute(m+"action-name")||y,H=I&&I.split("|")||[],x=c(H,2),L=x[0],D=x[1],M=t.getAttribute(m+"action-title")||"",R={follow:l+"api/v3/topics?appId="+s,block:l+"api/v1/content/feedback/"+(A===k?k:"entities")+"?appId="+s},N=R[O];return T._util=u({},T._util,(o={actionHost:l,apiPath:N,appId:s,bookmarkActionHost:p,subType:A,contentId:E,crumb:d,elem:t,falseLabel:D,id:P,mappingId:P+O+A+j,subTypeCategroy:j,shouldSaveToStorage:void 0===v?void 0:!!v,name:C},r(o,"subType",A),r(o,"title",M),r(o,"trueLabel",L),r(o,"type",O),o)),g.forEach(function(t){T[t]=T[t].bind(T)}),T._state={actionStatus:!1,inProgress:!1},t.classList.add("has-click","has-wafer-click"),setTimeout(function(){T.setActionStatus(t.classList.contains(w))},0),T}return a(e,t),l(e,[{key:"statusDidUpdate",value:function(t){var e=this._util.elem;if(e){var o=this._util,r=o.falseLabel,n=o.trueLabel;this._state.actionStatus=t,t?(r&&e.setAttribute("title",r),e.classList.add(w)):(n&&e.setAttribute("title",n),e.classList.remove(w))}}},{key:"saveToStorage",value:function(){if(b.localStorage){var t=this._util,o=t.id,r=t.name,n=void 0===r?"":r,i=t.subType,a=t.type,s=Date.now()+9e5;return window.localStorage.setItem(e.LS_KEY,JSON.stringify({id:o,name:n,subType:i,ttl:s,type:a})),Promise.resolve()}}},{key:"triggerTopicAction",value:function(t){var e=this._util,o=e.appId,n=e.bookmarkActionHost,i=e.contentId,a=e.id,s=e.name,u=e.shouldSaveToStorage,c=e.subType,l=e.subTypeCategroy,f=e.title,p=e.type,d=this._util.apiPath,b={follow:this._state.actionStatus?"PUT":"DELETE",block:"POST",bookmark:this._state.actionStatus?"POST":"DELETE"},y=b[p],h=void 0,m=void 0;return"follow"===p&&(h={types:r({},c,[{id:a}])},m={Crumb:t},"provider"===c&&(h.types[c][0].type=l||"PROVIDER")),"block"===p&&(h={entities:[{entity_id:a,entity_type:c,score:_[this._state.actionStatus?"block":"unblock"]}]},m={Crumb:t},c===k&&(h.entities[0].entity_name=s)),"bookmark"===p&&("DELETE"===y?d=n+"api/v1/user/bookmarks/"+c+"/"+i+"?appId="+o:(d=n+"api/v1/user/bookmarks/"+c+"?appId="+o,h={contentId:i,title:f}),m={"X-CSRF-Token":t}),u?this.saveToStorage():v(d,{cache:0,clientHeaders:m,credentials:"include",method:y,body:JSON.stringify(h)})}},{key:"getCrumb",value:function(){var t=this._util.shouldSaveToStorage,e=this._util.crumb||S;if(e||t)return new Promise(function(t){t(e||"")});var o=this._util,r=o.appId,n=o.actionHost,i=o.bookmarkActionHost;return v((i||n)+"api/v1/auth/crumb?appId="+r,{cache:0,credentials:"include"}).then(function(t){if(!(S=t.crumb))throw new Error("crumb not found");return S})}},{key:"trigger",value:function(t){var e=this;if(t){var o=t.crumb;o&&(S=o),this._util=u({},this._util,t)}var r=this._util.name,n=this._state.actionStatus;this._state.inProgress=!0,n?this.setActionStatus(!1):this.setActionStatus(!0),this.getCrumb().then(function(t){return e._state.inProgress=!1,e.triggerTopicAction(t)}).then(function(t){var o=t||{},n=o.result,i=void 0===n?{}:n,a=i.success,u=void 0===a?{}:a,c=u.entities,l=void 0===c?[]:c,f=e._util,p=f.id,d=f.subType,b=f.type,y="follow"===b&&l.some(function(t){return t.id===p}),h="block"===b&&(null!==t&&"object"===(void 0===t?"undefined":s(t))),v="bookmark"===b&&(null!==t&&"object"===(void 0===t?"undefined":s(t)));if(!("follow"===b?y:"block"===b?h:v))throw new Error("action failed");e.didComplete(null,{id:p,name:r,subType:d,type:b})}).catch(function(t){e._state.inProgress=!1,e._state.actionStatus=!e._state.actionStatus,e.setActionStatus(e._state.actionStatus)})}},{key:"handleClick",value:function(t){t.preventDefault(),this._state.inProgress||this.trigger()}}]),e}(h);T.events={click:[["has-click","handleClick"]]},T.LS_KEY=m+"action-storage",e.default=T,t.exports=e.default},"./src/controller.js":function(t,e,o){"use strict";function r(){return u=n(o("./src/base.js"))}function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var u,c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),f=window.wafer,p=f.controllers,d=f.features,b=f.utils,y=p.WaferBaseController,h=b.getConfigFromJSONScriptNode,v=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.root,n=void 0===o?document:o,s=t.selector;i(this,e);var l=h(document.getElementById("wafer-action-config")),f=l.actionHost,p=l.appId,b=l.bookmarkActionHost,y=l.crumb,v=l.shouldSaveToStorage,m=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{root:n,selector:s,props:{actionHost:f,appId:p,bookmarkActionHost:b,crumb:y,shouldSaveToStorage:v,selector:s},WaferClass:(u||r()).default})),g=m;return m.sync(),m._state=c({},m._state,{idInstanceMapping:new Map}),(u||r()).default.prototype.setActionStatus=function(t){var e=this._util.mappingId,o=g._state.idInstanceMapping;o.has(e)||o.set(e,[]),o.get(e).push(this),o.get(e).forEach(function(e){e.statusDidUpdate(t)})},d.localStorage&&setTimeout(function(){m.processStoredAction(l,s)},1),m}return s(e,t),l(e,[{key:"processStoredAction",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(t.shouldProcessState){var o=t.actionHost,n=t.appId,i=t.bookmarkActionHost,a=t.crumb,s=window.localStorage.getItem((u||r()).default.LS_KEY);if(s){var l=document.createElement("div"),f={actionHost:o,appId:n,bookmarkActionHost:i,crumb:a,selector:e};try{var p=JSON.parse(s),d=p.id,b=p.name,y=p.ttl,h=void 0===y?0:y,v=p.subType,m=p.type;h&&h>=Date.now()&&m&&v&&d&&(l.setAttribute("data-wf-on","complete:setState:wfAction.entity."+m),new((u||r()).default)(l,Object.assign({},f,{id:d,name:b,subType:v,type:m})).trigger(c({},f,{id:d,name:b,subType:v,type:m})))}catch(t){}window.localStorage.removeItem((u||r()).default.LS_KEY)}}}}]),e}(y);e.default=v,t.exports=e.default},"./src/entry.js":function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n;e.default=new((n||function(){return n=r(o("./src/controller.js"))}()).default)({selector:".wafer-action"}),t.exports=e.default}})});