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

"use strict";!function(){var r=null,t=document.querySelectorAll('[data-applet-type="userintentmgmt"],[data-applet-type="userintenttoast"]');t.length&&(t.forEach(function(t){t.addEventListener("touchstart",function(t){t.targetTouches&&1===t.targetTouches.length&&(r=t.targetTouches[0].clientY)},!1)}),t.forEach(function(t){t.addEventListener("touchmove",function(t){t.targetTouches&&1===t.targetTouches.length&&function(t){if(!t.target||!t.targetTouches)return;var e=document.querySelector(".userintenttoast .userintent-actions,.userintentmgmt-panel > ul");if(e&&!function(t,e){if(!t)return!1;var n=e.parentNode;for(;null!==n;){if(n===t)return!0;n=n.parentNode}return!1}(e,t.target))return t.preventDefault();var n=t.targetTouches[0].clientY-r;0===e.scrollTop&&0<n&&t.preventDefault();(function(t){return t&&void 0!==t.scrollHeight?t.scrollHeight-t.scrollTop<=t.clientHeight:void 0})(e)&&n<0&&t.preventDefault()}(t)},!1)})),window.wafer&&window.wafer.ready(function(){document.querySelector('[data-applet-type="userintenttoast"]')&&window&&window.wafer&&window.wafer.on("toggle:change",function(t){var e=t.elem;if(e&&e.getAttribute){var n=t.meta.target;if(n.matches(".article-actions-toast-overlay-wrapper"))return void(n.classList.contains("is-active")&&document.body.classList.add("yhm-toaster-open"))}})})}();

}
/*
     FILE ARCHIVED ON 23:57:59 Nov 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:29:10 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 130.427
  exclusion.robots: 0.074
  exclusion.robots.policy: 0.065
  cdx.remote: 0.058
  esindex: 0.009
  LoadShardBlock: 64.913 (3)
  PetaboxLoader3.datanode: 55.017 (4)
  PetaboxLoader3.resolve: 51.239 (2)
  load_resource: 57.724
*/