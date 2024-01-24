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

"use strict";!function(){var n,r,e,i,a,o,d="header-mail-button",c="header-mail-panel",u="header-notification-button",s="header-notification-panel",l=".headertdv2wafer";function f(e,t){if(e){var n={id:e.id},i=e.getAttribute(t||"data-ylk");return i&&(n=i.split(";").reduce(function(e,t){var n=t.split(":");return 2===n.length&&(e[n[0]]=n[1]),e},n)),n}}function v(){return e=e||(n.YAHOO&&n.YAHOO.i13n&&n.YAHOO.i13n.rapidInstance||n.rapidInstance)}function m(){var e,t,n;return i||(t=(f(e=r&&r.querySelector(l),"data-i13n")||{}).sec||"hd",n=e&&f(e),i=Object.assign({},{sec:t},n)),i}function E(e){var t,n,i,a=v();a&&(n=(t=r.getElementById(e))&&t.querySelectorAll("a,button"),i=Object.assign({},m(),{_links:[]}),n&&(n.forEach(function(e){var t=f(e);t&&t.slk&&i._links.push(t)}),a.beaconLinkViews&&a.beaconLinkViews([i])))}function p(e,t){var n=v(),i=t&&Object.assign({},m(),f(t),{itc:2});t&&i&&n&&n.beaconClick(i.sec||"hd",i.slk||e,t.getAttribute("data-rapid_p"),i)}function t(e){var t,n=e&&e.target;n&&n.getAttribute&&((t=n.getAttribute("id"))===d?(p("mail",a||r.getElementById(d)),E(c)):t===u&&(p("notifications",o||r.getElementById(u)),E(s)))}function g(){(a=r.getElementById(d))&&a.addEventListener("mouseenter",t),(o=r.getElementById(u))&&o.addEventListener("mouseenter",t);var e=r.getElementById("dialogue-open-locker");e&&e.addEventListener("click",b)}function b(){var e,t=r.body;"undefined"!=typeof CustomEvent?t.dispatchEvent(new CustomEvent("show-locker")):((e=document.createEvent("Event")).initEvent("show-locker",!0,!0),t.dispatchEvent(e))}function h(e,t){n=e,r=t}"undefined"!=typeof module?(module.exports.defineGlobals=h,module.exports.initEventHandlers=g,module.exports.handleHeaderMenuHover=t):window&&document&&(h(window,document),n.wafer&&n.wafer.ready(g))}();

}
/*
     FILE ARCHIVED ON 00:16:16 Jul 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:49 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 128.784
  exclusion.robots: 0.071
  exclusion.robots.policy: 0.061
  cdx.remote: 0.058
  esindex: 0.01
  LoadShardBlock: 89.234 (3)
  PetaboxLoader3.datanode: 90.821 (4)
  load_resource: 65.288
  PetaboxLoader3.resolve: 37.467
*/