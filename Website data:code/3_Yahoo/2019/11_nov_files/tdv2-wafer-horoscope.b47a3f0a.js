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

"use strict";!function(){var o="https://web.archive.org/web/20191031225707/https://www.aol.com/api/v1/sailthru",t="Thank you for subscribing!",s="Something went wrong!",e="Bdrs(3px) P(10px) M(0) Mb(10px) Lh(1)",c=e+" Bgc(success-bgc) C(success-c)",r=e+" Bgc(error-bgc) C(error-c)",i=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,n=document.getElementById("horoscope-newsletter-signup");if(n){var a=n.elements.starsign,u=n.elements.email,l=document.getElementById("horoscope-newsletter-signup-msg");n.addEventListener("submit",function(e){e.preventDefault();var n=a.value,t=u.value;i.test(t)?(function(e,n){m(o+"/user?type=POST&id="+encodeURIComponent(e)+"&"+encodeURIComponent("lists[horoscope-"+n+"]")+"=1")}(t,n),function(e,n){m(o+"/send?type=POST&email="+encodeURIComponent(e)+"&template=welcome-horoscopes-"+encodeURIComponent(n))}(t,n)):p("Please enter a valid email address.",r)})}function p(e,n){l.classList.value=n,l.innerHTML=e}function m(e){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(e){200<=this.status&&this.status<400?p(t,c):p(s,r)},n.onerror=function(){p(s,r)},n.send()}}();

}
/*
     FILE ARCHIVED ON 22:57:07 Oct 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:30:12 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 410.432
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.056
  esindex: 0.009
  LoadShardBlock: 49.152 (3)
  PetaboxLoader3.datanode: 55.35 (4)
  load_resource: 95.126
  PetaboxLoader3.resolve: 55.783
*/