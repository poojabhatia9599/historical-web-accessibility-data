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

(function(){function s(e){var t="[A-Za-z0-9\\-\\.]+";return new RegExp("^"+(e.replace(/\./g,"\\.").replace(/\*\\\./g,t)+"(:\\d+)?$"))}function u(e){var t=!1;return o.forEach(function(n){n.test(e)&&(t=!0)}),t}function a(s){if(r&&!n&&s.origin==="https://web.archive.org/web/20200831191815/https://cdn.embedly.com")try{var o=JSON.parse(s.data);if(o.event==="ready"){n=!0,i&&(e.contentWindow.postMessage(i.data,"*"),i=null);return}}catch(a){}if(!u(s.origin))return;if(!t||r&&!n){i=s;return}e&&e.contentWindow.postMessage(s.data,"*")}var e=document.getElementsByTagName("iframe")[0],t=!1,n=!1,r=!1,i,o=AUTHORIZED_DOMAINS.map(s);if(!e)return;e.classList.contains("embedly-embed")&&(r=!0),e.addEventListener("load",function(){t=!0;if(i){if(r&&!n)return;a(i),i=null}}),window.addEventListener("message",a,!1),window.parent.postMessage(JSON.stringify({context:"player.js",event:"ready"}),"*")})();

}
/*
     FILE ARCHIVED ON 19:18:15 Aug 31, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:49:14 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.141
  exclusion.robots.policy: 0.124
  cdx.remote: 0.134
  esindex: 0.011
  LoadShardBlock: 208.279 (6)
  PetaboxLoader3.datanode: 167.047 (7)
  load_resource: 128.131
  PetaboxLoader3.resolve: 64.149
*/