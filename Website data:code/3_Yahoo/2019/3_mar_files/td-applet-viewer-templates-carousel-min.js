YUI.add("td-applet-viewer-templates-carousel",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(e){function t(e,t){return e.s(t.get(["images"],!1),t,{block:a},{}).w("\n")}function a(e,t){return e.w('\n<div class="js-slider-item H-100 ').f(t.get(["type"],!1),t,"h").w('" data-caption="').h("ne",t,{block:n},{key:c,value:"desktop"}).f(t.get(["caption"],!1),t,"h").w('" data-short-caption="').h("ne",t,{block:o},{key:s,value:"desktop"}).f(t.get(["shortCaption"],!1),t,"h").w('" data-share-img="').f(t.getPath(!1,["image","src"]),t,"h").w('" data-slide-title="').f(t.getPath(!1,["image","alt"]),t,"h").w('">\n    ').h("select",t,{block:i},{key:t.get(["type"],!1)}).w("\n</div>\n")}function n(e,t){return e.x(t.getPath(!1,["image","alt"]),t,{block:d},{})}function d(e,t){return e.f(t.getPath(!1,["image","alt"]),t,"h").w("<br/>")}function c(e,t){return e.f(t.get(["device"],!1),t,"h")}function o(e,t){return e.x(t.getPath(!1,["image","alt"]),t,{block:u},{})}function u(e,t){return e.f(t.getPath(!1,["image","alt"]),t,"h").w("<br/>")}function s(e,t){return e.f(t.get(["device"],!1),t,"h")}function i(e,t){return e.w("\n").h("eq",t,{block:r},{value:"video"}).w("\n").h("default",t,{block:l},{}).w("\n")}function r(e,t){return e.w('\n<div class="js-video-placeholder Slideshow-Video Bgc-n D-ib Va-m Bgz-cv W-100 H-100" data-yepConfig="').f(t.get(["yepConfig"],!1),t,"h",["js"]).w('">\n            </div>\n            <b class="ModalShim"></b>\n        ')}function l(e,t){return e.w('\n<div class="Slideshow-Image H-100 M-a Bgz-ct" style="background-image: url(').f(t.getPath(!1,["image","src"]),t,"h").w('); background-repeat: no-repeat; background-position: center;">\n            </div>\n        ')}return dust.register("td-applet-viewer-templates-carousel",t),t.__dustBody=!0,a.__dustBody=!0,n.__dustBody=!0,d.__dustBody=!0,c.__dustBody=!0,o.__dustBody=!0,u.__dustBody=!0,s.__dustBody=!0,i.__dustBody=!0,r.__dustBody=!0,l.__dustBody=!0,t}(),dust.cache["td-applet-viewer:carousel.dust"]=dust.cache["td-applet-viewer:carousel"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-viewer/templates/carousel"]=function(e,a){e=e||{},dust.render(t,e,a)}},"@VERSION@",{requires:["template-base","dust"]});