YUI.add("td-applet-viewer-templates-story_cover_atomic_sm",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.p("header_ads",e,{}).w("\n<div class='cover Cover-Bg Pos(r) Whs(n) ").x(e.getPath(!1,["cover_photo","img"]),e,{block:o},{}).w("'>\n    ").s(e.get(["lead_video"],!1),e,{block:n},{}).w("\n").x(e.getPath(!1,["cover_photo","img"]),e,{"else":c,block:s},{}).w("\n</div>\n")}function o(t,e){return t.f(e.getPath(!1,["cover_photo","img","className"]),e,"h")}function n(t,e){return t.w("\n").p("video_atomic_sm",e,{description:"off"}).w("\n")}function c(t,e){return t.w("\n<div class='ResetChildren'>\n            ").p("header_atomic_sm",e,{}).w("\n</div>\n    ")}function s(t,e){return t.w("\n<div class='cover-photo-container Bgz(cv)").x(e.getPath(!1,["cover_photo","img"]),e,{block:i},{}).nx(e.getPath(!1,["ui","slideshowInline"]),e,{block:r},{}).w("' ").x(e.getPath(!1,["cover_photo","img"]),e,{block:d},{}).w('>\n            <div class="').nx(e.getPath(!1,["ui","slideshowInline"]),e,{block:_},{}).w(' RatioWrap Bgc(x) cover-image-container" style="padding-bottom:').f(e.getPath(!1,["cover_photo","img","ratio"]),e,"h").w('%">\n                ').h("img",e,{},{src:u,"class":"RatioBox cover_photo",defer:0}).w("\n</div>\n        </div>\n        ").nx(e.getPath(!1,["ui","slideshowInline"]),e,{block:l},{}).w("\n<div class='B-0 W-100 Cover-Overlay ResetChildren Reset T(25px)").nx(e.getPath(!1,["ui","slideshowInline"]),e,{block:p},{}).w("'>\n            ").p("header_atomic_sm",e,{}).w("\n</div>\n    ")}function i(t,e){return t.w(" Bgc(x) ").f(e.getPath(!1,["cover_photo","img","className"]),e,"h")}function r(t,e){return t.x(e.get(["images"],!1),e,{block:a},{})}function a(t,e){return t.w(" open-lightbox")}function d(t,e){return t.w(' style="background-image: url(').f(e.getPath(!1,["cover_photo","img","src"]),e,"h").w(');"')}function _(t,e){return t.w("open-lightbox")}function u(t,e){return t.f(e.getPath(!1,["cover_photo","img","src"]),e,"h")}function l(t,e){return t.w("\n").x(e.get(["images"],!1),e,{block:h},{}).w("\n")}function h(t,e){return t.w('\n<span class="icons-slideshow-icon Pos(a) Bdrs(100px) open-lightbox"></span>\n        ')}function p(t,e){return t.x(e.getPath(!1,["cover_photo","img"]),e,{block:m},{})}function m(t,e){return t.x(e.get(["images"],!1),e,{block:g},{})}function g(t,e){return t.h("eq",e,{block:v},{key:w,value:"Lead-l W-max"})}function v(t,e){return t.w(" open-lightbox")}function w(t,e){return t.f(e.getPath(!1,["cover_photo","img","className"]),e,"h")}return dust.register("td-applet-viewer-templates-story_cover_atomic_sm",e),e.__dustBody=!0,o.__dustBody=!0,n.__dustBody=!0,c.__dustBody=!0,s.__dustBody=!0,i.__dustBody=!0,r.__dustBody=!0,a.__dustBody=!0,d.__dustBody=!0,_.__dustBody=!0,u.__dustBody=!0,l.__dustBody=!0,h.__dustBody=!0,p.__dustBody=!0,m.__dustBody=!0,g.__dustBody=!0,v.__dustBody=!0,w.__dustBody=!0,e}(),dust.cache["td-applet-viewer:story_cover_atomic_sm.dust"]=dust.cache["td-applet-viewer:story_cover_atomic_sm"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-viewer/templates/story_cover_atomic_sm"]=function(t,o){t=t||{},dust.render(e,t,o)}},"@VERSION@",{requires:["template-base","dust","td-applet-viewer-templates-header_ads","td-applet-viewer-templates-video_atomic_sm","td-applet-viewer-templates-header_atomic_sm"]});