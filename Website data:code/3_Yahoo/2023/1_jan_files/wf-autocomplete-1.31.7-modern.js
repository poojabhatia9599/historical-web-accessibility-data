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

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-autocomplete",[],t):"object"==typeof exports?exports["wafer-autocomplete"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-autocomplete"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i=window.webpackJsonpwafer_wafers_wafer_autocomplete;window.webpackJsonpwafer_wafers_wafer_autocomplete=function(t,a,r){for(var o,s,l=0,u=[];l<t.length;l++)s=t[l],n[s]&&u.push(n[s][0]),n[s]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(i&&i(t,a,r);u.length;)u.shift()()};var a={},n={1:0,2:0};return t.e=function(e){function i(){s.onerror=s.onload=null,clearTimeout(l);var t=n[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),n[e]=void 0)}var a=n[e];if(0===a)return new Promise(function(e){e()});if(a)return a[2];var r=new Promise(function(t,i){a=n[e]=[t,i]});a[2]=r;var o=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,t.nc&&s.setAttribute("nonce",t.nc),s.src=t.p+"wf-autocomplete-1.31.7-modern-"+{0:"feb730873b"}[e]+".chunk.js";var l=setTimeout(i,12e4);return s.onerror=s.onload=i,o.appendChild(s),r},t.m=e,t.c=a,t.d=function(e,i,a){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://web.archive.org/web/20221231225308/https://s.yimg.com/aaq/wf/",t.oe=function(e){throw e},t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,i){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function h(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var y=function(){function e(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},g=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),_=window.wafer,w=_.base,L=_.constants,O=_.utils,k=L.ATTR_PREFIX,E=O.bindEvent,C=O.convertNodeListToArray,A=O.fetchWithCache,T=O.findAncestor,j=O.getConfigFromJSONScriptNode,S=O.getDataYlk,P=O.getTemplateContent,x=O.getWaferInstanceForElem,I=O.getYlkMapForNode,B=O.unbindEvent,M=["handleClearButtonClick","handleInputChange","handleListClick","handleListKeyDown"],D=void 0,U=0,R=void 0,N=function(){function e(t){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.errorClass,o=n.successClass,s=n.selector;a(this,e);var l=t.getAttribute("id");if(!D){var u=document.getElementById("wafer-autocomplete-clear-button");D=u&&P(u)}var c=t.getAttribute(k+"submit-on-clear"),d=t.getAttribute(k+"trigger");R=R||j(document.getElementById("wafer-autocomplete-config")),U++,this._util={ariaConfig:R,clearButtonText:D,elem:t,errorClass:r,id:l,idIndex:U,selector:s,submitOnClear:Number(c)||0,successClass:o},"select"===d&&(this._util.formElem=T(t,"wafer-form")),this._state={active:!1,listOpen:!1,originalTerm:"",placeholdersVisible:!1,term:""},D&&this.renderClearButton(),M.forEach(function(e){i[e]=i[e].bind(i)}),this.addAriaRolesToInput()}return g(e,[{key:"addAriaRolesToInput",value:function(){var e=this._util,t=e.elem,i=(e.type,e.id);t.hasAttribute("aria-controls")||i&&t.setAttribute("aria-controls",i+"-list"),t.hasAttribute("aria-expanded")||t.setAttribute("aria-expanded","false")}},{key:"addEventListeners",value:function(){var e=this,t=this._util,a=t.clearButton,n=t.savedLocationTarget,r=t.targetElem,o=t.type;w.__assist=w.__assist||{};var s=w.__assist[o];if(s){var l=s.getListMarkup;this.getListMarkup=l.bind(this)}else new Promise(function(e){i.e(0).then(function(t){e(i("./src/types recursive ^\\.\\/.*$")("./"+o))}.bind(null,i)).catch(i.oe)}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.getListMarkup;w.__assist[o]={getListMarkup:i},e.getListMarkup=i.bind(e)}).catch(function(e){});n&&E(n,"click",this.handleListClick,{passive:!1}),E(r,"click",this.handleListClick,{passive:!1}),E(r,"keydown",this.handleListKeyDown,{passive:!1}),a&&E(a,"click",this.handleClearButtonClick,{passive:!1})}},{key:"renderClearButton",value:function(){var e=this._util,t=e.clearButtonText,i=e.elem,a=document.createElement("div"),n=document.createElement("div");a.classList.add("wafer-autocomplete-input-wrapper"),Object.assign(a.style,{position:"relative"}),n.innerHTML=t;var r=n.children[0];r&&(i.parentNode.insertBefore(a,i),a.appendChild(i),a.appendChild(r),this._util.clearButton=r)}},{key:"removeEventListeners",value:function(){var e=this._util,t=e.clearButton,i=e.savedLocationTarget,a=e.targetElem;i&&B(i,"click",this.handleListClick,{passive:!1}),B(a,"click",this.handleListClick,{passive:!1}),B(a,"keydown",this.handleListKeyDown,{passive:!1}),t&&B(t,"click",this.handleClearButtonClick,{passive:!1})}},{key:"updateInputValue",value:function(e){var t=e.getAttribute("id");t&&this._util.elem.setAttribute("aria-activedescendant",t),this._util.elem.value=e.getAttribute("data-display-value")||e.innerText||e.textContent,this.handleClearButtonVisibility()}},{key:"getPlaceholders",value:function(){for(var e=this._util,t=e.listElem,i=e.placeholderElem,a=e.numPlaceholders,n=document.createDocumentFragment(),r=0;r<a;r++){var o=document.createElement("li");o.setAttribute("tabindex",0),o.setAttribute("role","option"),o.innerHTML=i.innerHTML,n.appendChild(o)}return t.appendChild(n),t}},{key:"getSuggestions",value:function(){var e=this,t=this._util,i=t.ariaConfig,a=t.elem,n=t.targetElem,r=t.numPlaceholders,o=this._util,s=o.url,l=o.syncOnSearch,u=void 0!==l&&l;if(!(s&&n&&this.getListMarkup&&this._state.active))return!1;var c=this._util,d=c.errorClass,f=c.timeout,h=a.value.toLowerCase();if(a.classList.remove(d),!h)return this.clear(),!1;h!==this._state.term.toLowerCase()&&this.clearAttributes();var p=i&&i.resultsMessage,v=this._state.woeid;if(v&&(s=s+"&woeid="+v),r>0&&!this._state.listOpen){var m=this.getPlaceholders();this._state.placeholdersVisible=!0,this.showList(),n.appendChild(m)}var y={cache:1,cacheStrategy:"cacheFirst",mode:"cors",timeout:f,useRid:0};A(s.replace("{term}",h),y).then(function(t){var i=e._util.listElem;w.destroy(i);var a=e.getListMarkup(t,h),r=a.children.length;if(r?(e._state.placeholdersVisible=!1,e.showList()):e.hideList(),p){var o=p.replace("{0}",r);w.liveAriaRegion.innerHTML=o}return n.appendChild(a),w.syncAssets(t.assets),u&&w.sync(n),!0}).catch(function(t){return e._state.placeholdersVisible&&e.clear(),w.emitError({name:"WaferAutoComplete",elem:a,meta:{url:s},stack:t.stack||t.message}),a.classList.add(d),!1})}},{key:"createListElem",value:function(){var e=this._util,t=e.boundaryElem,i=e.target,a=e.placeholder,n=e.numPlaceholders,r=i&&(t||document.body).querySelector(i),o=C(r.getElementsByClassName("wafer-autocomplete-list"))[0];o||(o=document.createElement("ul"),o.classList.add("wafer-autocomplete-list")),this._util.targetElem=r,this._util.listElem=o,this._util.ylkMap=S(r),a&&n&&(this._util.placeholderElem=document.getElementById(a))}},{key:"showList",value:function(e){if(!this._state.listOpen){this._state.listOpen=!0;var t=this._util,i=t.boundaryElem,a=t.elem,n=t.listElem;e=e||n,e.style.opacity="1",e.classList.add("wafer-autocomplete-list-active"),i&&i.classList.add("wafer-autocomplete-active"),a.setAttribute("aria-expanded","true"),w.emitWaferEvent("autocomplete:open",{elem:a,meta:{}})}}},{key:"hideList",value:function(e){if(this._state.listOpen){this._state.listOpen=!1;var t=this._util,i=t.boundaryElem,a=t.elem,n=t.listElem;e=e||n,e.style.opacity="0",e.classList.remove("wafer-autocomplete-list-active"),i&&i.classList.remove("wafer-autocomplete-active"),a.setAttribute("aria-expanded","false"),w.emitWaferEvent("autocomplete:closed",{elem:a,meta:{}})}}},{key:"clearAttributes",value:function(){var e=this._util.elem;e.setAttribute("aria-activedescendant",""),e.setAttribute("data-assist-src",""),e.setAttribute("data-display-value",""),e.setAttribute("data-user-input",""),e.setAttribute("data-value","")}},{key:"clear",value:function(){var e=this,t=this._util.elem;this._state.active=!1,this._state.placeholdersVisible=!1,t.classList.remove("wafer-autocomplete-did-submit"),this.hideList(),setTimeout(function(){var t=e._util.listElem;w.destroy(t),t.innerHTML=""},100)}},{key:"submit",value:function(){var e=this._util,t=e.elem,i=e.formElem;if(t.classList.add("wafer-autocomplete-did-submit"),this.hideList(),i){var a=this._util.formInstance||x(i,"wafer-form");if(a){this._util.formInstance=a;a.instance.submitForm()}}this.didComplete(null,t.getAttribute("data-value")||t.value.toLowerCase())}},{key:"handleListItemSelect",value:function(e,t){var i=this._util,a=i.savedLocationTarget,n=i.ylkMap;if(e.classList.contains("delete-button")){var r=T(e,"wafer-autocomplete-item"),o=r.getAttribute("data-value"),s=this._util,l=s.assistData,u=s.listElem,c=s.saveLocationUrl,d=s.unifiedGeo,f=C(u.children),h=f.indexOf(r),p={index:h,ylk:b({},n,{_p:h+1,slk:"delete"})};return t&&t.preventDefault(),r.parentNode.removeChild(r),f.length<=1&&this.clear(!0),o&&l&&d&&(l.removeSavedLocation(o),A(c,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"delete",params:{woeid:o,term:this._state.term}}}})}).catch(function(e){})),void w.emitWaferEvent("autocomplete:deleted",{elem:e,meta:p})}if(e.classList.contains("wafer-autocomplete-item")){var v=this._util,m=v.assistData,y=v.elem,g=v.saveLocationUrl,_=v.unifiedGeo,L=y.value;this.updateInputValue(e);var O=this._state.term;this._state.term=this._state.originalTerm=y.value;var k=e.getAttribute("data-value"),E=C(e.parentNode.children).indexOf(e),j={index:E,selectedValue:this._state.term,type:"default",userTerm:L,ylk:b({},I(e),n,{_p:E+1})};if(k){e.classList.contains("wafer-autocomplete-currentlocaton-item")?(j.type="current",y.setAttribute("data-assist-src","assistCurrentLocation")):e.classList.contains("wafer-autocomplete-saved-item")&&(j.type="saved"),y.setAttribute("data-user-input",O),y.setAttribute("data-value",k),_&&m&&(m.isSavedLocation(k)||(m.addSavedLocationUsingwoeid(k),a&&this.renderSavedLocation()),A(g,{body:JSON.stringify({requests:{g0:{resource:"WeatherLocationService.favoriteLocation",operation:"create",params:{woeid:k,term:O}}}})}).catch(function(e){}))}if(j.dataValue=e.getAttribute("data-value"),j.data=e.getAttribute("data-meta"),j.data)try{j.data=JSON.parse(j.data)}catch(t){}w.emitWaferEvent("autocomplete:select",{elem:y,meta:j}),this.clear(!0),this.submit()}}},{key:"stateDidUpdate",value:function(){}},{key:"destroy",value:function(){this.removeEventListeners()}},{key:"handleSelect",value:function(){this.getSuggestions()}},{key:"handleListClick",value:function(e){this.handleListItemSelect(e.target)}},{key:"handleInputKeydown",value:function(){var e=this._util.listElem,t=C(e.children),i=y(t,1),a=i[0];a&&(this.updateInputValue(a),a.focus())}},{key:"handleListDown",value:function(e){e.preventDefault();var t=this._util,i=t.elem,a=t.listElem,n=C(a.children),r=n.indexOf(e.target);if(r===n.length-1)return i.value=this._state.originalTerm,void i.focus();var o=n[r+1];this.updateInputValue(o),o.focus()}},{key:"handleInputKeyup",value:function(){var e=this._util.listElem,t=C(e.children),i=t[t.length-1];i&&(this.updateInputValue(i),i.focus())}},{key:"handleListUp",value:function(e){e.preventDefault();var t=this._util,i=t.elem,a=t.listElem,n=C(a.children),r=n.indexOf(e.target);if(0===r)return i.value=this._state.originalTerm,void i.focus();var o=n[r-1];this.updateInputValue(o),o.focus()}},{key:"handleListKeyDown",value:function(e){switch(e.which||e.code){case 13:this.handleListItemSelect(e.target,e);break;case 27:this._state.active=!1,this._util.elem.value=this._state.originalTerm||"",this.clearAttributes(),this.clear(),this._util.elem.focus();break;case 38:this.handleListUp(e);break;case 40:this.handleListDown(e)}}},{key:"handleKeyup",value:function(e){}},{key:"handleKeydown",value:function(e){var t=e.which||e.code,i=this._util,a=i.elem,n=i.submitOnClear,r=i.submitOnEnter;switch(a.classList.remove("wafer-autocomplete-did-submit"),this._state.active=!0,this._state.term=a.value,this.handleClearButtonVisibility(),t){case 13:this._state.originalTerm=this._state.term,r&&this.submit();break;case 27:this._state.active=!1,this.clearAttributes(),this.clear();break;case 8:this._state.originalTerm=this._state.term,this.getSuggestions();break;case 38:this.handleInputKeyup(e);break;case 40:this.handleInputKeydown(e);break;default:this._state.originalTerm=this._state.term,this.getSuggestions()}!this._state.term&&n&&this.submit()}},{key:"handleClearButtonVisibility",value:function(){var e=this._util.clearButton;if(e){this._util.elem.value?e.style.visibility="":e.style.visibility="hidden"}}},{key:"handleClearButtonClick",value:function(e){var t=this._util,i=t.elem,a=t.submitOnClear;i.value="",this.clearAttributes(),this._state.term=this._state.originalTerm="",this.clear(),i.focus(),this.handleClearButtonVisibility(),a&&this.submit()}},{key:"handleInputChange",value:function(e){""===e.target.value&&this.submit()}},{key:"handleOnfocus",value:function(e){this._state.active=!0,this.clearOthers()}},{key:"handleOnfocusOut",value:function(e){this._state.active=!1}},{key:"handleClickOutside",value:function(e){if(this._state.listOpen){var t=this._util,i=t.elem,a=t.listElem,n=e.waferComposedMap();n.get(i)||n.get(a)||(this._state.active=!1,this.clear(!1,{source:"clickOutside"}))}}}]),e}(),F=N,K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},V=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),W=window.wafer,H=W.constants,J=W.utils,q=H.ATTR_PREFIX,G=J.findAncestor,X=J.getTemplateContent,Y=void 0,$=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.selector;n(this,t);var o=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a})),s=e.getAttribute(q+"ac-target"),l=e.getAttribute(q+"ac-url"),u=e.getAttribute(q+"ac-template"),c=e.getAttribute(q+"ac-placeholder-template"),d=e.getAttribute(q+"ac-number-of-placeholders")||0,f=e.getAttribute(q+"ac-sync-on-search");if(!s||!l)return r(o);var h=e.getAttribute(q+"ac-boundary"),p=e.getAttribute(q+"ac-submit-on-enter"),v=e.getAttribute(q+"ac-clear-button-enabled"),m=e.getAttribute(q+"ac-timeout"),y=e.getAttribute(q+"ac-type")||"gossip",b=h&&G(e,h);if(!Y){var g=document.getElementById("wafer-autocomplete-clear-button");Y="true"===v&&g&&X(g)}return o._util=K({},o._util,{boundaryElem:b,clearButtonText:Y,submitOnEnter:null===p||void 0===p?1:Number(p),numPlaceholders:d,placeholder:c,syncOnSearch:f,target:s,template:u,type:y,url:l,timeout:null===m||void 0===m?6e3:Number(m)}),Y&&o.renderClearButton(),o.createListElem(),o.addEventListeners(),o}return o(t,e),V(t,[{key:"renderClearButton",value:function(){var e=this._util,t=e.clearButtonText,i=e.elem,a=document.createElement("div"),n=document.createElement("div");a.classList.add("wafer-autocomplete-input-wrapper"),Object.assign(a.style,{position:"relative"}),n.innerHTML=t;var r=n.children[0];r&&(r.style.visibility="hidden",i.parentNode.insertBefore(a,i),a.appendChild(i),a.appendChild(r),this._util.clearButton=r)}}]),t}(F),z=$,Q=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),Z=function(){function e(){s(this,e),this.clear()}return Q(e,[{key:"addLocation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.woeid;this.locations[t+""]=e}},{key:"addSavedLocation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.woeid;t+="",this.savedLocationsUuidMapping[t]=e,this.savedLocationsUuids.push(t)}},{key:"isSavedLocation",value:function(e){return this.savedLocationsUuidMapping[e]}},{key:"removeSavedLocation",value:function(e){this.savedLocationsUuidMapping[e]={},delete this.savedLocationsUuidMapping[e];var t=this.savedLocationsUuids.indexOf(e);-1!==t&&this.savedLocationsUuids.splice(t,1)}},{key:"addSavedLocationUsingwoeid",value:function(e){var t=this.locations[e];this.savedLocationsUuidMapping[e]=t,this.savedLocationsUuids.unshift(e)}},{key:"clear",value:function(){this.locations=[],this.savedLocationsUuidMapping={},this.savedLocationsUuids=[]}}]),e}(),ee=Z,te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},ie=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),ae=function e(t,i,a){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,a)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(a)},ne=window.wafer,re=ne.base,oe=ne.constants,se=ne.utils,le=oe.ATTR_PREFIX,ue=se.fetchWithCache,ce=se.findAncestor,de=se.getTemplateContent,fe=se.getWaferInstanceForElem,he=void 0,pe=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.selector;l(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:a})),r=e.getAttribute(le+"lp-target"),o=e.getAttribute(le+"lp-url"),s=e.getAttribute(le+"lp-currentlocation-template-target-id")||"wafer-autocomplete-currentlocation-item",c=e.getAttribute(le+"lp-saved-target");if(!r||!o)return u(n);var d=c&&document.getElementById(c.replace("#","")),f=document.getElementById(s);if(!he){var h=document.getElementById("wafer-autocomplete-delete-button");he=h&&de(h)}var p=f&&de(f),v=e.getAttribute(le+"lp-boundary"),m=e.getAttribute(le+"lp-saved-url"),y=e.getAttribute(le+"lp-submit-on-enter"),b=e.getAttribute(le+"lp-trigger")||"default",g=v&&ce(e,v),_=e.getAttribute(le+"lp-timeout"),w=e.getAttribute(le+"lp-type")||"weather",L=e.getAttribute(le+"lp-unified-geo"),O=e.getAttribute(le+"lp-skip-rerender-on-focus-others"),k=e.getAttribute(le+"lp-woeid");return n._util=te({},n._util,{assistData:new ee,boundaryElem:g,currentLocationTemplate:p,deleteButtonText:he,saveLocationUrl:m,savedLocationTarget:d,submitOnEnter:null===y||void 0===y?1:Number(y),target:r,trigger:b,type:w,unifiedGeo:null===L||void 0===L?0:Number(L),url:o,skipReRenderOnOnFocusOthers:null===O||void 0===O?0:Number(O),timeout:null===_||void 0===_?6e3:Number(_)}),n._state=te({},n._state,{woeid:k}),n.createListElem(),n.addEventListeners(),n.fetchAndRenderSavedLocations(),n}return c(t,e),ie(t,[{key:"fetchAndRenderSavedLocations",value:function(){var e=this,t=this._util,i=t.assistData,a=t.elem,n=t.savedLocationTarget,r=t.saveLocationUrl,o=t.timeout,s=t.trigger;r&&ue(r,{cache:1,cacheStrategy:"networkFirst",timeout:o,useRid:0}).then(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.data,r=void 0===a?[]:a;return i&&(i.clear(),Array.isArray(r)&&r.forEach(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i.addSavedLocation(e)})),("input"!==s||n)&&e.renderSavedLocation(),!0}).catch(function(e){return re.emitError({name:"WaferAutoComplete",elem:a,meta:{url:r},stack:e.stack||e.message}),!1})}},{key:"renderSavedLocation",value:function(){var e=this._util,t=e.ariaConfig,i=e.assistData,a=e.currentLocationTemplate,n=e.deleteButtonText,r=e.idIndex,o=e.listElem,s=e.savedLocationTarget,l=e.targetElem;if(!i.savedLocationsUuids.length)return void(s?(re.destroy(s),s.innerHTML=""):this.clear(!0));var u=void 0,c=void 0;s?c=document.createDocumentFragment():u=document.createDocumentFragment();var d=t&&t.resultsMessage;if(u&&a){var f=document.createElement("li");f.innerHTML=a;var h=f.children[0];h.classList.add("wafer-autocomplete-currentlocaton-item","wafer-autocomplete-item"),h.setAttribute("tabindex",0),h.setAttribute("role","option"),h.setAttribute("id","wf-autocomplete-saved-result-"+r+"-0"),u.appendChild(h)}if(i.savedLocationsUuids.forEach(function(e,t){var a=i.savedLocationsUuidMapping[e]||{},o=a.qualifiedName;if(o){var l=document.createElement("li"),d=c||u;l.classList.add("wafer-autocomplete-item","wafer-autocomplete-saved-item"),s||(l.setAttribute("tabindex",0),l.setAttribute("role","option")),l.setAttribute("data-value",e),l.setAttribute("data-meta",JSON.stringify(a)),l.setAttribute("id","wf-autocomplete-saved-result-"+r+"-"+(t+1)),l.innerHTML=o,n&&(l.innerHTML+=n),d.appendChild(l)}}),c){var p=document.createElement("ul");return re.destroy(s),s.innerHTML="",p.appendChild(c),void s.appendChild(p)}if(re.destroy(o),o.innerHTML="",o.appendChild(u),this._state.active=!0,this.showList(),d){var v=o.children.length,m=d.replace("{0}",v);re.liveAriaRegion.innerHTML=m}l.appendChild(o)}},{key:"getSuggestions",value:function(){var e=this._util,i=e.elem,a=e.savedLocationTarget,n=e.trigger,r=i.value;("input"===n&&!r||a)&&this.renderSavedLocation(),ae(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"getSuggestions",this).call(this)}},{key:"submit",value:function(){var e=this._util,t=e.elem,i=e.formElem,a=t.getAttribute("data-value")||t.value.toLowerCase();if(t.classList.add("wafer-autocomplete-did-submit"),this._state.woeid=a,this.hideList(),i){var n=this._util.formInstance||fe(i,"wafer-form");if(n){this._util.formInstance=n;n.instance.submitForm()}}this.didComplete(null,a)}},{key:"stateDidUpdate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e["lp-woeid"];t&&(this._state.woeid=t)}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.source,n=void 0===a?"":a,r=this._util,o=r.skipReRenderOnOnFocusOthers;if("input"===r.trigger&&"clickOutside"===n)return void ae(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"clear",this).call(this,e,{source:n});if(e)ae(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"clear",this).call(this,e,{source:n});else{if(o&&"clearOthers"===n)return;this.renderSavedLocation()}}}]),t}(F),ve=pe,me=function(){function e(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,i,a){return i&&e(t.prototype,i),a&&e(t,a),t}}(),ye=function e(t,i,a){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,a)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(a)},be=["lp-woeid"],ge=window.wafer,_e=ge.WaferBaseClass,we=ge.utils,Le=we.debounce,Oe=["handleSelect","handleOnfocus","handleOnfocusOut"],ke=["handleKeydown","handleKeyup"],Ee=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=i.errorClass,n=i.successClass,r=i.selector;d(this,t);var o=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{selector:r},{STATE_ATTRS:be}));e.classList.contains("wafer-location-picker")?o._instance=new ve(e,{errorClass:a,successClass:n,selector:r}):o._instance=new z(e,{errorClass:a,successClass:n,selector:r}),Oe.forEach(function(e){o[e]=o[e].bind(o)}),ke.forEach(function(e){o[e+"Debounce"]=Le(o[e],300,o)});var s=o;return o._instance.clearOthers=function(){s.clearOthers.call(this)},o._instance.didComplete=function(e,t){o.didComplete(e,t)},ye(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",o).call(o),o}return h(t,e),me(t,[{key:"stateDidUpdate",value:function(){this._instance.stateDidUpdate(this._util)}},{key:"destroy",value:function(){this._instance.destroy()}},{key:"clear",value:function(e,t){this._instance.clear(e,t)}},{key:"removeEventListeners",value:function(){this._instance.removeEventListeners()}},{key:"handleSelect",value:function(e){this._instance.handleSelect.call(this._instance,e)}},{key:"handleKeydown",value:function(e){this._instance.handleKeydown.call(this._instance,e)}},{key:"handleKeyup",value:function(e){this._instance.handleKeyup.call(this._instance,e)}},{key:"handleOnfocus",value:function(e){this._instance.handleOnfocus.call(this._instance,e)}},{key:"handleOnfocusOut",value:function(e){this._instance.handleOnfocusOut.call(this._instance,e)}},{key:"handleClickOutside",value:function(e){this._instance.handleClickOutside.call(this._instance,e)}}]),t}(_e);Ee.events={click:[["wafer-autocomplete","handleSelect"]],focusin:[["_self","handleOnfocus"]],focusout:[["_self","handleOnfocusOut"]],keydown:[["_self","handleKeydownDebounce"]],keyup:[["_self","handleKeyupDebounce"]]};var Ce=Ee,Ae=function(){function e(e,t){var i=[],a=!0,n=!1,r=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){n=!0,r=e}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Te=window.wafer.controllers.WaferBaseController,je=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.errorClass,a=void 0===i?"wafer-autocomplete-error":i,n=e.root,r=void 0===n?document:n,o=e.selector,s=void 0===o?"wafer-autocomplete":o,l=e.successClass,u=void 0===l?"wafer-autocomplete-complete":l;p(this,t);var c=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:r,selector:s,props:{errorClass:a,selector:s,successClass:u},WaferClass:Ce})),d=c;return Ce.prototype.clearOthers=function(){var e=this._util.elem,t=d._state.elementInstances,i=!0,a=!1,n=void 0;try{for(var r,o=t.entries()[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var s=r.value,l=Ae(s,2),u=l[0],c=l[1];u!==e&&c.instance.clear(!1,{source:"clearOthers"})}}catch(e){a=!0,n=e}finally{try{!i&&o.return&&o.return()}finally{if(a)throw n}}},c.sync(),c}return m(t,e),t}(Te),Se=je;t.default=new Se({selector:".wafer-autocomplete"})}})});

}
/*
     FILE ARCHIVED ON 22:53:08 Dec 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:02 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.098
  exclusion.robots.policy: 0.086
  cdx.remote: 0.125
  esindex: 0.012
  LoadShardBlock: 114.895 (6)
  PetaboxLoader3.datanode: 149.486 (8)
  load_resource: 270.343 (2)
  PetaboxLoader3.resolve: 119.353 (2)
*/