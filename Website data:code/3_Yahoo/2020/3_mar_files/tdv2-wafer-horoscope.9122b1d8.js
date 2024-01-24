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

"use strict";!function(){var r="https://web.archive.org/web/20200229235337/https://www.aol.com/api/v1/sailthru",n="Thank you for subscribing!",s="Something went wrong!",e="Bdrs(3px) P(10px) M(0) Mb(10px) Lh(1)",o=e+" Bgc(success-bgc) C(success-c)",c=e+" Bgc(error-bgc) C(error-c)",a=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,t=document.getElementById("horoscope-newsletter-signup");if(t){var i=t.elements.starsign,u=t.elements.email,l=document.getElementById("horoscope-newsletter-signup-msg");t.addEventListener("submit",function(e){e.preventDefault();var t,n,s=i.value,o=u.value;a.test(o)?(n=s,m(r+"/user?type=POST&id="+encodeURIComponent(o)+"&"+encodeURIComponent("lists[horoscope-"+n+"]")+"=1"),t=s,m(r+"/send?type=POST&email="+encodeURIComponent(o)+"&template=welcome-horoscopes-"+encodeURIComponent(t))):p("Please enter a valid email address.",c)})}function p(e,t){l.classList.value=t,l.innerHTML=e}function m(e){var t=new XMLHttpRequest;t.open("GET",e),t.onload=function(e){200<=this.status&&this.status<400?p(n,o):p(s,c)},t.onerror=function(){p(s,c)},t.send()}}();

}
/*
     FILE ARCHIVED ON 23:53:37 Feb 29, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:01:49 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 149.613
  exclusion.robots: 0.191
  exclusion.robots.policy: 0.17
  cdx.remote: 0.125
  esindex: 0.019
  LoadShardBlock: 29.417 (3)
  PetaboxLoader3.datanode: 40.279 (4)
  load_resource: 132.66
  PetaboxLoader3.resolve: 60.462
*/