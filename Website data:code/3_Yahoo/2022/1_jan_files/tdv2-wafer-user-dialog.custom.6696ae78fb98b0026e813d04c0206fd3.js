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

"use strict";window.wafer&&window.wafer.ready((function(){var e={},t="click",n=window.YAHOO&&window.YAHOO.i13n&&window.YAHOO.i13n.rapidInstance||window.rapidInstance;function i(e){var t;try{t=JSON.parse(window.localStorage.getItem(e))||{}}catch(e){}return t}function a(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch(e){}}function o(e,n){e&&e.addEventListener&&e.addEventListener(t,s.bind(this,n,e))}function s(n,o,r){if(r.target.classList.contains("answer")){var l=n&&i(n)||null;a(n,Object.assign({},l,{discovered:1e3})),e[n]=!0,o.removeEventListener(t,s.bind(this,n,o))}}function r(){var e=document.getElementById("user-dialog-lite-campaign-key");if(e)return"userDialog"+(e.value||0)+"Visits"}function l(){var e=document.getElementById("user-dialog-lite-dialog-key");if(e)return"userDialog"+(e.value||0)+"Closed"}!function(){var e=document.getElementsByClassName("wafer-rapid-module");if(e){for(var t=[],i=0;i<e.length;i++){var a=e[i].id;a&&t.push(a)}var o=t.length;n&&o>0&&n.addModulesWithViewability(t)}}(),window.wafer.on("fetch:success",(function(t){t.elem&&t.elem.classList&&t.elem.classList.contains("user-dialog-init")&&function(){if(r()){var e=Number(i(r()))||0,t=Number(e+1);window.wafer.base.state={userDialogLiteVisits:t},a(r(),t)}}();var n=document.getElementById("user-dialog-lite");n&&!0===i(l())&&n.remove();var s=t&&t.elem;if(s&&s.classList&&s.classList.contains("user-dialog-fetch")&&window.localStorage){var c=s.getAttribute("data-wf-boundary"),u=c&&document.querySelector("."+c+" .user-dialog");if(u){var d=s.querySelector(".wafer-tooltip"),w=d&&d.getAttribute("data-wf-local-storage-key");e[w]||o(u,w),function(e){var t=e.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<0||t.top-n>=0)}(u)||u.scrollIntoView&&u.scrollIntoView(!1)}}})),window.wafer.on("form:submit",(function(e){e.elem.elements&&e.elem.elements.answerIdx&&function(e){if(e.answerIdx){var t=e.answerIdx,i="";t.forEach((function(e){e.checked&&(i=e.value)}));var a={};if(e.config[0].value)try{a=JSON.parse(e.config[0].value)}catch(e){}var o=e.subsec.value,s=e.cpos.value,r=a.questions[a.questionNum-1],l=r.question,c={cpos:s,elm:"btn",elmt:r.choices[i],itc:1,subsec:o},u=l;n.beaconClick("fdbk-mod",u,"",c)}}(e.elem.elements)})),window.wafer.on("toggle:change",(function(e){if(e&&e.elem){var t=document.getElementById("user-dialog-lite-dialog-key");e.elem.classList.contains("js-close-btn")&&t&&a(l(),!0)}}))}));

}
/*
     FILE ARCHIVED ON 04:54:46 Jan 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:50:12 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.061
  cdx.remote: 0.107
  esindex: 0.013
  LoadShardBlock: 131.518 (6)
  PetaboxLoader3.datanode: 132.691 (7)
  load_resource: 72.472
  PetaboxLoader3.resolve: 38.805
*/