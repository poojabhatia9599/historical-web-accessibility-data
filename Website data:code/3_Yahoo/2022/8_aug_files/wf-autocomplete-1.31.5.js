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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-autocomplete",[],t):"object"==typeof exports?exports["wafer-autocomplete"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-autocomplete"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(a[i])return a[i].exports;var r=a[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var i=window.webpackJsonpwafer_wafers_wafer_autocomplete;window.webpackJsonpwafer_wafers_wafer_autocomplete=function(t,a,n){for(var o,s,l=0,u=[];l<t.length;l++)s=t[l],r[s]&&u.push(r[s][0]),r[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(i&&i(t,a,n);u.length;)u.shift()()};var a={},r={1:0,2:0};return t.e=function(e){function i(){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),r[e]=void 0)}var a=r[e];if(0===a)return new Promise(function(e){e()});if(a)return a[2];var n=new Promise(function(t,i){a=r[e]=[t,i]});a[2]=n;var o=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+"wf-autocomplete-1.31.5-"+{0:"ea7062aed7"}[e]+".chunk.js";var l=setTimeout(i,12e4);return s.onerror=s.onload=i,o.appendChild(s),n},t.m=e,t.c=a,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20220801005053/https://s.yimg.com/aaq/wf/",t.oe=function(e){throw e},t(t.s="./src/entry.js")}({"./src/assist.js":function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},u=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),c=window.wafer,d=c.constants,f=c.utils,h=d.ATTR_PREFIX,p=f.findAncestor,v=f.getTemplateContent,m=void 0,y=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.selector;r(this,t);var o=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a})),s=e.getAttribute(h+"ac-target"),u=e.getAttribute(h+"ac-url"),c=e.getAttribute(h+"ac-template"),d=e.getAttribute(h+"ac-placeholder-template"),f=e.getAttribute(h+"ac-number-of-placeholders")||0,y=e.getAttribute(h+"ac-sync-on-search");if(!s||!u)return n(o);var b=e.getAttribute(h+"ac-boundary"),g=e.getAttribute(h+"ac-submit-on-enter"),_=e.getAttribute(h+"ac-clear-button-enabled"),w=e.getAttribute(h+"ac-timeout"),O=e.getAttribute(h+"ac-type")||"gossip",L=b&&p(e,b);if(!m){var k=document.getElementById("wafer-autocomplete-clear-button");m="true"===_&&k&&v(k)}return o._util=l({},o._util,{boundaryElem:L,clearButtonText:m,submitOnEnter:null===g||void 0===g?1:Number(g),numPlaceholders:f,placeholder:d,syncOnSearch:y,target:s,template:c,type:O,url:u,timeout:null===w||void 0===w?6e3:Number(w)}),m&&o.renderClearButton(),o.createListElem(),o.addEventListeners(),o}return o(t,e),u(t,[{key:"renderClearButton",value:function(){var e=this._util,t=e.clearButtonText,i=e.elem,a=document.createElement("div"),r=document.createElement("div");a.classList.add("wafer-autocomplete-input-wrapper"),Object.assign(a.style,{position:"relative"}),r.innerHTML=t;var n=r.children[0];n&&(n.style.visibility="hidden",i.parentNode.insertBefore(a,i),a.appendChild(i),a.appendChild(n),this._util.clearButton=n)}}]),t}((s||function(){return s=a(i("./src/assistBase.js"))}()).default);t.default=y,e.exports=t.default},"./src/assistBase.js":function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),o=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=window.wafer,l=s.base,u=s.constants,c=s.utils,d=u.ATTR_PREFIX,f=c.bindEvent,h=c.convertNodeListToArray,p=c.fetchWithCache,v=c.findAncestor,m=c.getConfigFromJSONScriptNode,y=c.getTemplateContent,b=c.getWaferInstanceForElem,g=c.unbindEvent,_=["handleClearButtonClick","handleInputChange","handleListClick","handleListKeyDown"],w=function(e){var t=e.getAttribute("data-ylk"),i={};return t&&t.split(";").forEach(function(e){var t=e.split(":"),a=o(t,2),r=a[0],n=a[1];i[r]||(i[r]=n)}),i},O=function(e){for(var t={},i=e;i!==document.body;)Object.assign(t,w(i)),i=i.parentNode;return t},L=void 0,k=0,E=void 0,C=function(){function e(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.errorClass,o=r.successClass,s=r.selector;a(this,e);var l=t.getAttribute("id");if(!L){var u=document.getElementById("wafer-autocomplete-clear-button");L=u&&y(u)}var c=t.getAttribute(d+"submit-on-clear"),f=t.getAttribute(d+"trigger");E=E||m(document.getElementById("wafer-autocomplete-config")),k++,this._util={ariaConfig:E,clearButtonText:L,elem:t,errorClass:n,id:l,idIndex:k,selector:s,submitOnClear:Number(c)||0,successClass:o},"select"===f&&(this._util.formElem=v(t,"wafer-form")),this._state={active:!1,listOpen:!1,originalTerm:"",placeholdersVisible:!1,term:""},L&&this.renderClearButton(),_.forEach(function(e){i[e]=i[e].bind(i)}),this.addAriaRolesToInput()}return n(e,[{key:"addAriaRolesToInput",value:function(){var e=this._util,t=e.elem,i=(e.type,e.id);t.hasAttribute("aria-controls")||i&&t.setAttribute("aria-controls",i+"-list"),t.hasAttribute("aria-expanded")||t.setAttribute("aria-expanded","false")}},{key:"addEventListeners",value:function(){var e=this,t=this._util,a=t.clearButton,r=t.savedLocationTarget,n=t.targetElem,o=t.type;l.__assist=l.__assist||{};var s=l.__assist[o];if(s){var u=s.getListMarkup;this.getListMarkup=u.bind(this)}else new Promise(function(e){i.e(0).then(function(t){e(i("./src/types recursive ^\\.\\/.*$")("./"+o))}.bind(null,i)).catch(i.oe)}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.getListMarkup;l.__assist[o]={getListMarkup:i},e.getListMarkup=i.bind(e)}).catch(function(e){});r&&f(r,"click",this.handleListClick,{passive:!1}),f(n,"click",this.handleListClick,{passive:!1}),f(n,"keydown",this.handleListKeyDown,{passive:!1}),a&&f(a,"click",this.handleClearButtonClick,{passive:!1})}},{key:"renderClearButton",value:function(){var e=this._util,t=e.clearButtonText,i=e.elem,a=document.createElement("div"),r=document.createElement("div");a.classList.add("wafer-autocomplete-input-wrapper"),Object.assign(a.style,{position:"relative"}),r.innerHTML=t;var n=r.children[0];n&&(i.parentNode.insertBefore(a,i),a.appendChild(i),a.appendChild(n),this._util.clearButton=n)}},{key:"removeEventListeners",value:function(){var e=this._util,t=e.clearButton,i=e.savedLocationTarget,a=e.targetElem;i&&g(i,"click",this.handleListClick,{passive:!1}),g(a,"click",this.handleListClick,{passive:!1}),g(a,"keydown",this.handleListKeyDown,{passive:!1}),t&&g(t,"click",this.handleClearButtonClick,{passive:!1})}},{key:"updateInputValue",value:function(e){var t=e.getAttribute("id");t&&this._util.elem.setAttribute("aria-activedescendant",t),this._util.elem.value=e.getAttribute("data-display-value")||e.innerText||e.textContent,this.handleClearButtonVisibility()}},{key:"getPlaceholders",value:function(){for(var e=this._util,t=e.listElem,i=e.placeholderElem,a=e.numPlaceholders,r=document.createDocumentFragment(),n=0;n<a;n++){var o=document.createElement("li");o.setAttribute("tabindex",0),o.setAttribute("role","option"),o.innerHTML=i.innerHTML,r.appendChild(o)}return t.appendChild(r),t}},{key:"getSuggestions",value:function(){var e=this,t=this._util,i=t.ariaConfig,a=t.elem,r=t.targetElem,n=t.numPlaceholders,o=this._util,s=o.url,u=o.syncOnSearch,c=void 0!==u&&u;if(!(s&&r&&this.getListMarkup&&this._state.active))return!1;var d=this._util,f=d.errorClass,h=d.timeout,v=a.value.toLowerCase();if(a.classList.remove(f),!v)return this.clear(),!1;v!==this._state.term.toLowerCase()&&this.clearAttributes();var m=i&&i.resultsMessage,y=this._state.woeid;if(y&&(s=s+"&woeid="+y),n>0&&!this._state.listOpen){var b=this.getPlaceholders();this._state.placeholdersVisible=!0,this.showList(),r.appendChild(b)}var g={cache:1,cacheStrategy:"cacheFirst",mode:"cors",timeout:h,useRid:0};p(s.replace("{term}",v),g).then(function(t){var i=e._util.listElem;l.destroy(i);var a=e.getListMarkup(t,v),n=a.children.length;if(n?(e._state.placeholdersVisible=!1,e.showList()):e.hideList(),m){var o=m.replace("{0}",n);l.liveAriaRegion.innerHTML=o}return r.appendChild(a),l.syncAssets(t.assets),c&&l.sync(r),!0}).catch(function(t){return e._state.placeholdersVisible&&e.clear(),l.emitError({name:"WaferAutoComplete",elem:a,meta:{url:s},stack:t.stack||t.message}),a.classList.add(f),!1})}},{key:"createListElem",value:function(){var e=this._util,t=e.boundaryElem,i=e.target,a=e.placeholder,r=e.numPlaceholders,n=i&&(t||document.body).querySelector(i),o=h(n.getElementsByClassName("wafer-autocomplete-list"))[0];o||(o=document.createElement("ul"),o.classList.add("wafer-autocomplete-list")),this._util.targetElem=n,this._util.listElem=o,this._util.ylkMap=O(n),a&&r&&(this._util.placeholderElem=document.getElementById(a))}},{key:"showList",value:function(e){if(!this._state.listOpen){this._state.listOpen=!0;var t=this._util,i=t.boundaryElem,a=t.elem,r=t.listElem;e=e||r,e.style.opacity="1",e.classList.add("wafer-autocomplete-list-active"),i&&i.classList.add("wafer-autocomplete-active"),a.setAttribute("aria-expanded","true"),l.emitWaferEvent("autocomplete:open",{elem:a,meta:{}})}}},{key:"hideList",value:function(e){if(this._state.listOpen){this._state.listOpen=!1;var t=this._util,i=t.boundaryElem,a=t.elem,r=t.listElem;e=e||r,e.style.opacity="0",e.classList.remove("wafer-autocomplete-list-active"),i&&i.classList.remove("wafer-autocomplete-active"),a.setAttribute("aria-expanded","false"),l.emitWaferEvent("autocomplete:closed",{elem:a,meta:{}})}}},{key:"clearAttributes",value:function(){var e=this._util.elem;e.setAttribute("aria-activedescendant",""),e.setAttribute("data-assist-src",""),e.setAttribute("data-display-value",""),e.setAttribute("data-user-input",""),e.setAttribute("data-value","")}},{key:"clear",value:function(){var e=this,t=this._util.elem;this._state.active=!1,this._state.placeholdersVisible=!1,t.classList.remove("wafer-autocomplete-did-submit"),this.hideList(),setTimeout(function(){var t=e._util.listElem;l.destroy(t),t.innerHTML=""},100)}},{key:"submit",value:function(){var e=this._util,t=e.elem,i=e.formElem;if(t.classList.add("wafer-autocomplete-did-submit"),this.hideList(),i){var a=this._util.formInstance||b(i,"wafer-form");if(a){this._util.formInstance=a;a.instance.submitForm()}}this.didComplete(null,t.getAttribute("data-value")||t.value.toLowerCase())}},{key:"handleListItemSelect",value:function(e,t){var i=this._util,a=i.savedLocationTarget,n=i.ylkMap;if(e.classList.contains("delete-button")){var o=v(e,"wafer-autocomplete-item"),s=o.getAttribute("data-value"),u=this._util,c=u.assistData,d=u.listElem,f=u.saveLocationUrl,m=u.unifiedGeo,y=h(d.children),b=y.indexOf(o),g={index:b,ylk:r({},n,{_p:b+1,slk:"delete"})};return t&&t.preventDefault(),o.parentNode.removeChild(o),y.length<=1&&this.clear(!0),s&&c&&m&&(c.removeSavedLocation(s),p(f,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"delete",params:{woeid:s,term:this._state.term}}}})}).catch(function(e){})),void l.emitWaferEvent("autocomplete:deleted",{elem:e,meta:g})}if(e.classList.contains("wafer-autocomplete-item")){var _=this._util,O=_.assistData,L=_.elem,k=_.saveLocationUrl,E=_.unifiedGeo,C=L.value;this.updateInputValue(e);var A=this._state.term;this._state.term=this._state.originalTerm=L.value;var j=e.getAttribute("data-value"),T=h(e.parentNode.children).indexOf(e),S={index:T,selectedValue:this._state.term,type:"default",userTerm:C,ylk:r({},w(e),n,{_p:T+1})};if(j){e.classList.contains("wafer-autocomplete-currentlocaton-item")?(S.type="current",L.setAttribute("data-assist-src","assistCurrentLocation")):e.classList.contains("wafer-autocomplete-saved-item")&&(S.type="saved"),L.setAttribute("data-user-input",A),L.setAttribute("data-value",j),E&&O&&(O.isSavedLocation(j)||(O.addSavedLocationUsingwoeid(j),a&&this.renderSavedLocation()),p(k,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"create",params:{woeid:j,term:A}}}})}).catch(function(e){}))}if(S.dataValue=e.getAttribute("data-value"),S.data=e.getAttribute("data-meta"),S.data)try{S.data=JSON.parse(S.data)}catch(t){}l.emitWaferEvent("autocomplete:select",{elem:L,meta:S}),this.clear(!0),this.submit()}}},{key:"stateDidUpdate",value:function(){}},{key:"destroy",value:function(){this.removeEventListeners()}},{key:"handleSelect",value:function(){this.getSuggestions()}},{key:"handleListClick",value:function(e){this.handleListItemSelect(e.target)}},{key:"handleInputKeydown",value:function(){var e=this._util.listElem,t=h(e.children),i=o(t,1),a=i[0];a&&(this.updateInputValue(a),a.focus())}},{key:"handleListDown",value:function(e){e.preventDefault();var t=this._util,i=t.elem,a=t.listElem,r=h(a.children),n=r.indexOf(e.target);if(n===r.length-1)return i.value=this._state.originalTerm,void i.focus();var o=r[n+1];this.updateInputValue(o),o.focus()}},{key:"handleInputKeyup",value:function(){var e=this._util.listElem,t=h(e.children),i=t[t.length-1];i&&(this.updateInputValue(i),i.focus())}},{key:"handleListUp",value:function(e){e.preventDefault();var t=this._util,i=t.elem,a=t.listElem,r=h(a.children),n=r.indexOf(e.target);if(0===n)return i.value=this._state.originalTerm,void i.focus();var o=r[n-1];this.updateInputValue(o),o.focus()}},{key:"handleListKeyDown",value:function(e){switch(e.which||e.code){case 13:this.handleListItemSelect(e.target,e);break;case 27:this._state.active=!1,this._util.elem.value=this._state.originalTerm||"",this.clearAttributes(),this.clear(),this._util.elem.focus();break;case 38:this.handleListUp(e);break;case 40:this.handleListDown(e)}}},{key:"handleKeyup",value:function(e){}},{key:"handleKeydown",value:function(e){var t=e.which||e.code,i=this._util,a=i.elem,r=i.submitOnClear,n=i.submitOnEnter;switch(a.classList.remove("wafer-autocomplete-did-submit"),this._state.active=!0,this._state.term=a.value,this.handleClearButtonVisibility(),t){case 13:this._state.originalTerm=this._state.term,n&&this.submit();break;case 27:this._state.active=!1,this.clearAttributes(),this.clear();break;case 8:this._state.originalTerm=this._state.term,this.getSuggestions();break;case 38:this.handleInputKeyup(e);break;case 40:this.handleInputKeydown(e);break;default:this._state.originalTerm=this._state.term,this.getSuggestions()}!this._state.term&&r&&this.submit()}},{key:"handleClearButtonVisibility",value:function(){var e=this._util.clearButton;if(e){this._util.elem.value?e.style.visibility="":e.style.visibility="hidden"}}},{key:"handleClearButtonClick",value:function(e){var t=this._util,i=t.elem,a=t.submitOnClear;i.value="",this.clearAttributes(),this._state.term=this._state.originalTerm="",this.clear(),i.focus(),this.handleClearButtonVisibility(),a&&this.submit()}},{key:"handleInputChange",value:function(e){""===e.target.value&&this.submit()}},{key:"handleOnfocus",value:function(e){this._state.active=!0,this.clearOthers()}},{key:"handleOnfocusOut",value:function(e){this._state.active=!1}},{key:"handleClickOutside",value:function(e){if(this._state.listOpen){var t=this._util,i=t.elem,a=t.listElem,r=e.waferComposedMap();r.get(i)||r.get(a)||(this._state.active=!1,this.clear(!1,{source:"clickOutside"}))}}}]),e}();t.default=C,e.exports=t.default},"./src/base.js":function(e,t,i){"use strict";function a(){return u=n(i("./src/assist.js"))}function r(){return c=n(i("./src/locationPicker.js"))}function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,c,d=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),f=function e(t,i,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,i);if(void 0===r){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,a)}if("value"in r)return r.value;var o=r.get;if(void 0!==o)return o.call(a)},h=["lp-woeid"],p=window.wafer,v=p.WaferBaseClass,m=p.utils,y=m.debounce,b=["handleSelect","handleOnfocus","handleOnfocusOut"],g=["handleKeydown","handleKeyup"],_=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.errorClass,l=i.successClass,d=i.selector;o(this,t);var p=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:d},{STATE_ATTRS:h}));e.classList.contains("wafer-location-picker")?p._instance=new((c||r()).default)(e,{errorClass:n,successClass:l,selector:d}):p._instance=new((u||a()).default)(e,{errorClass:n,successClass:l,selector:d}),b.forEach(function(e){p[e]=p[e].bind(p)}),g.forEach(function(e){p[e+"Debounce"]=y(p[e],300,p)});var v=p;return p._instance.clearOthers=function(){v.clearOthers.call(this)},p._instance.didComplete=function(e,t){p.didComplete(e,t)},f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",p).call(p),p}return l(t,e),d(t,[{key:"stateDidUpdate",value:function(){this._instance.stateDidUpdate(this._util)}},{key:"destroy",value:function(){this._instance.destroy()}},{key:"clear",value:function(e,t){this._instance.clear(e,t)}},{key:"removeEventListeners",value:function(){this._instance.removeEventListeners()}},{key:"handleSelect",value:function(e){this._instance.handleSelect.call(this._instance,e)}},{key:"handleKeydown",value:function(e){this._instance.handleKeydown.call(this._instance,e)}},{key:"handleKeyup",value:function(e){this._instance.handleKeyup.call(this._instance,e)}},{key:"handleOnfocus",value:function(e){this._instance.handleOnfocus.call(this._instance,e)}},{key:"handleOnfocusOut",value:function(e){this._instance.handleOnfocusOut.call(this._instance,e)}},{key:"handleClickOutside",value:function(e){this._instance.handleClickOutside.call(this._instance,e)}}]),t}(v);_.events={click:[["wafer-autocomplete","handleSelect"]],focusin:[["_self","handleOnfocus"]],focusout:[["_self","handleOnfocusOut"]],keydown:[["_self","handleKeydownDebounce"]],keyup:[["_self","handleKeyupDebounce"]]},t.default=_,e.exports=t.default},"./src/controller.js":function(e,t,i){"use strict";function a(){return l=r(i("./src/base.js"))}function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u=function(){function e(e,t){var i=[],a=!0,r=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){r=!0,n=e}finally{try{!a&&s.return&&s.return()}finally{if(r)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=window.wafer.controllers.WaferBaseController,d=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.errorClass,r=void 0===i?"wafer-autocomplete-error":i,s=e.root,c=void 0===s?document:s,d=e.selector,f=void 0===d?"wafer-autocomplete":d,h=e.successClass,p=void 0===h?"wafer-autocomplete-complete":h;n(this,t);var v=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:c,selector:f,props:{errorClass:r,selector:f,successClass:p},WaferClass:(l||a()).default})),m=v;return(l||a()).default.prototype.clearOthers=function(){var e=this._util.elem,t=m._state.elementInstances,i=!0,a=!1,r=void 0;try{for(var n,o=t.entries()[Symbol.iterator]();!(i=(n=o.next()).done);i=!0){var s=u(n.value,2),l=s[0],c=s[1];l!==e&&c.instance.clear(!1,{source:"clearOthers"})}}catch(e){a=!0,r=e}finally{try{!i&&o.return&&o.return()}finally{if(a)throw r}}},v.sync(),v}return s(t,e),t}(c);t.default=d,e.exports=t.default},"./src/data.js":function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),n=function(){function e(){a(this,e),this.clear()}return r(e,[{key:"addLocation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.woeid;this.locations[t+""]=e}},{key:"addSavedLocation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.woeid;t+="",this.savedLocationsUuidMapping[t]=e,this.savedLocationsUuids.push(t)}},{key:"isSavedLocation",value:function(e){return this.savedLocationsUuidMapping[e]}},{key:"removeSavedLocation",value:function(e){this.savedLocationsUuidMapping[e]={},delete this.savedLocationsUuidMapping[e];var t=this.savedLocationsUuids.indexOf(e);-1!==t&&this.savedLocationsUuids.splice(t,1)}},{key:"addSavedLocationUsingwoeid",value:function(e){var t=this.locations[e];this.savedLocationsUuidMapping[e]=t,this.savedLocationsUuids.unshift(e)}},{key:"clear",value:function(){this.locations=[],this.savedLocationsUuidMapping={},this.savedLocationsUuids=[]}}]),e}();t.default=n,e.exports=t.default},"./src/entry.js":function(e,t,i){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r;t.default=new((r||function(){return r=a(i("./src/controller.js"))}()).default)({selector:".wafer-autocomplete"}),e.exports=t.default},"./src/locationPicker.js":function(e,t,i){"use strict";function a(){return u=r(i("./src/data.js"))}function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},d=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),f=function e(t,i,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,i);if(void 0===r){var n=Object.getPrototypeOf(t);return null===n?void 0:e(n,i,a)}if("value"in r)return r.value;var o=r.get;if(void 0!==o)return o.call(a)},h=window.wafer,p=h.base,v=h.constants,m=h.utils,y=v.ATTR_PREFIX,b=m.fetchWithCache,g=m.findAncestor,_=m.getTemplateContent,w=m.getWaferInstanceForElem,O=void 0,L=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.selector;n(this,t);var s=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:r})),l=e.getAttribute(y+"lp-target"),d=e.getAttribute(y+"lp-url"),f=e.getAttribute(y+"lp-currentlocation-template-target-id")||"wafer-autocomplete-currentlocation-item",h=e.getAttribute(y+"lp-saved-target");if(!l||!d)return o(s);var p=h&&document.getElementById(h.replace("#","")),v=document.getElementById(f);if(!O){var m=document.getElementById("wafer-autocomplete-delete-button");O=m&&_(m)}var b=v&&_(v),w=e.getAttribute(y+"lp-boundary"),L=e.getAttribute(y+"lp-saved-url"),k=e.getAttribute(y+"lp-submit-on-enter"),E=e.getAttribute(y+"lp-trigger")||"default",C=w&&g(e,w),A=e.getAttribute(y+"lp-timeout"),j=e.getAttribute(y+"lp-type")||"weather",T=e.getAttribute(y+"lp-unified-geo"),S=e.getAttribute(y+"lp-skip-rerender-on-focus-others"),P=e.getAttribute(y+"lp-woeid");return s._util=c({},s._util,{assistData:new((u||a()).default),boundaryElem:C,currentLocationTemplate:b,deleteButtonText:O,saveLocationUrl:L,savedLocationTarget:p,submitOnEnter:null===k||void 0===k?1:Number(k),target:l,trigger:E,type:j,unifiedGeo:null===T||void 0===T?0:Number(T),url:d,skipReRenderOnOnFocusOthers:null===S||void 0===S?0:Number(S),timeout:null===A||void 0===A?6e3:Number(A)}),s._state=c({},s._state,{woeid:P}),s.createListElem(),s.addEventListeners(),s.fetchAndRenderSavedLocations(),s}return s(t,e),d(t,[{key:"fetchAndRenderSavedLocations",value:function(){var e=this,t=this._util,i=t.assistData,a=t.elem,r=t.savedLocationTarget,n=t.saveLocationUrl,o=t.timeout,s=t.trigger;n&&b(n,{cache:1,cacheStrategy:"networkFirst",timeout:o,useRid:0}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.data,n=void 0===a?[]:a;return i&&(i.clear(),Array.isArray(n)&&n.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.addSavedLocation(e)})),("input"!==s||r)&&e.renderSavedLocation(),!0}).catch(function(e){return p.emitError({name:"WaferAutoComplete",elem:a,meta:{url:n},stack:e.stack||e.message}),!1})}},{key:"renderSavedLocation",value:function(){var e=this._util,t=e.ariaConfig,i=e.assistData,a=e.currentLocationTemplate,r=e.deleteButtonText,n=e.idIndex,o=e.listElem,s=e.savedLocationTarget,l=e.targetElem;if(!i.savedLocationsUuids.length)return void(s?(p.destroy(s),s.innerHTML=""):this.clear(!0));var u=void 0,c=void 0;s?c=document.createDocumentFragment():u=document.createDocumentFragment();var d=t&&t.resultsMessage;if(u&&a){var f=document.createElement("li");f.innerHTML=a;var h=f.children[0];h.classList.add("wafer-autocomplete-currentlocaton-item","wafer-autocomplete-item"),h.setAttribute("tabindex",0),h.setAttribute("role","option"),h.setAttribute("id","wf-autocomplete-saved-result-"+n+"-0"),u.appendChild(h)}if(i.savedLocationsUuids.forEach(function(e,t){var a=i.savedLocationsUuidMapping[e]||{},o=a.qualifiedName;if(o){var l=document.createElement("li"),d=c||u;l.classList.add("wafer-autocomplete-item","wafer-autocomplete-saved-item"),s||(l.setAttribute("tabindex",0),l.setAttribute("role","option")),l.setAttribute("data-value",e),l.setAttribute("data-meta",JSON.stringify(a)),l.setAttribute("id","wf-autocomplete-saved-result-"+n+"-"+(t+1)),l.innerHTML=o,r&&(l.innerHTML+=r),d.appendChild(l)}}),c){var v=document.createElement("ul");return p.destroy(s),s.innerHTML="",v.appendChild(c),void s.appendChild(v)}if(p.destroy(o),o.innerHTML="",o.appendChild(u),this._state.active=!0,this.showList(),d){var m=o.children.length,y=d.replace("{0}",m);p.liveAriaRegion.innerHTML=y}l.appendChild(o)}},{key:"getSuggestions",value:function(){var e=this._util,i=e.elem,a=e.savedLocationTarget,r=e.trigger,n=i.value;("input"===r&&!n||a)&&this.renderSavedLocation(),f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getSuggestions",this).call(this)}},{key:"submit",value:function(){var e=this._util,t=e.elem,i=e.formElem,a=t.getAttribute("data-value")||t.value.toLowerCase();if(t.classList.add("wafer-autocomplete-did-submit"),this._state.woeid=a,this.hideList(),i){var r=this._util.formInstance||w(i,"wafer-form");if(r){this._util.formInstance=r;r.instance.submitForm()}}this.didComplete(null,a)}},{key:"stateDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["lp-woeid"];t&&(this._state.woeid=t)}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.source,r=void 0===a?"":a,n=this._util,o=n.skipReRenderOnOnFocusOthers;if("input"===n.trigger&&"clickOutside"===r)return void f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"clear",this).call(this,e,{source:r});if(e)f(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"clear",this).call(this,e,{source:r});else{if(o&&"clearOthers"===r)return;this.renderSavedLocation()}}}]),t}((l||function(){return l=r(i("./src/assistBase.js"))}()).default);t.default=L,e.exports=t.default}})});

}
/*
     FILE ARCHIVED ON 00:50:53 Aug 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:58 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.073
  cdx.remote: 0.139
  esindex: 0.012
  LoadShardBlock: 146.72 (6)
  PetaboxLoader3.datanode: 193.156 (8)
  load_resource: 188.769 (2)
  PetaboxLoader3.resolve: 101.317 (2)
*/