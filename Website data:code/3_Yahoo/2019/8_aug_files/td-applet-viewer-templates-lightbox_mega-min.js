YUI.add("td-applet-viewer-templates-lightbox_mega",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('<div id="slideshow-modal-').f(e.get(["pageIndex"],!1),e,"h").w('" class="Pos-r ').x(e.getPath(!1,["ui","enableSlideshowv2"]),e,{block:n},{}).w('" data-total="').f(e.get(["count"],!1),e,"h").w('">\n    <div class="Pos-r slideshow-carousel ').x(e.getPath(!1,["ui","enableSlideshowv2Thumbnails"]),e,{block:s},{}).w(' M-a W-100 H-100">\n        <button class="js-lb-prev js-lb-icon Lb-Page-Icon Lb-Prev D-ib Cur-p Disabled Pos-a Icon-Fp2 IconBackArrow" ').h("rapid_data_attr",e,{},{sec:"sshow",itc:"0",elm:"btn",slk:"previous"}).w('></button>\n        <button class="js-lb-next js-lb-icon Lb-Page-Icon Lb-Next D-ib Cur-p Pos-a Icon-Fp2 IconForwardArrow" ').h("rapid_data_attr",e,{},{sec:"sshow",itc:"0",elm:"btn",slk:"next"}).w("></button>\n        <div class=\"main-col W-100 H-100 Pos-a Px-30 Pb-30 Bxz-bb\">\x3c!-- this is the mega template --\x3e\n            <div class='js-slider H-100 Ov-h Pos-r'>\n                ").p("carousel",e,{}).w("\n</div>\n        </div>\n        ").nx(e.getPath(!1,["ui","enableSlideshowv2"]),e,{"else":a,block:i},{}).w('\n</div>\n    <div class="lb-meta-content ').x(e.getPath(!1,["ui","enableSlideshowv2"]),e,{"else":l,block:c},{}).w('">\n        ').x(e.getPath(!1,["ui","enableSlideshowv2"]),e,{block:d},{}).w('\n<div class="lb-meta-caption-container">\n            ').x(e.getPath(!1,["ui","enableLongCaption"]),e,{"else":r,block:u},{}).w("\n</div>\n    </div>\n</div>\n")}function n(t,e){return t.w("slideshowv2")}function s(t,e){return t.w("slv2-carousel")}function a(t,e){return t.w("\n").x(e.getPath(!1,["ui","enableSlideshowv2Thumbnails"]),e,{block:o},{}).w("\n")}function o(t,e){return t.w('\n<div class="Pos-a B-0 sl-thumbnails W-100">\n                <div class="Pos-r Mx-a sl-slider-ct">\n                    <button class="js-thm-sl-icon Lb-Page-Icon Lb-Prev D-ib Cur-p Disabled Pos-a Start-0 Icon-Fp2 IconBackArrow" ').h("rapid_data_attr",e,{},{sec:"sshow",itc:"0",elm:"btn",slk:"thm-previous"}).w('></button>\n                    <button class="js-thm-sl-icon Lb-Page-Icon Lb-Next D-ib Cur-p Pos-a End-0 Icon-Fp2 IconForwardArrow" ').h("rapid_data_attr",e,{},{sec:"sshow",itc:"0",elm:"btn",slk:"thm-next"}).w('></button>\n                    <div class="sl-car-mask Ov-h Mx-a">\n                        <ul class="Whs-nw sl-carousel">').p("thumbnail_items",e,{}).w("</ul>\n                    </div>\n                </div>\n            </div>\n            ")}function i(t,e){return t.w('\n<div class="index-count Fz-s">').f(e.get(["index"],!1),e,"h").w("/").f(e.get(["total"],!1),e,"h").w("</div>\n        ")}function l(t,e){return t.w("Py-10")}function c(t,e){return t.w("Pb-10 Pt-6")}function d(t,e){return t.w('\n<div class="index-count">').f(e.get(["index"],!1),e,"h").w("/").f(e.get(["total"],!1),e,"h").w('</div>\n            <div class="slide-title Fz-s"></div>\n        ')}function r(t,e){return t.w('\n<div class="Lh-15 lb-meta-txt-container-short">\n                    <p class="lb-meta-short-caption Ov-h Fz-s">').f(e.get(["shortCaption"],!1),e,"h",["s"]).w("</p>\n                </div>\n            ")}function u(t,e){return t.w('\n<div class="Lh-15 lb-meta-txt-container').x(e.getPath(!1,["ui","enableCaptionScroll"]),e,{block:h},{}).w('">\n                    <p class="lb-meta-caption Ov-h Fz-s">').f(e.get(["caption"],!1),e,"h",["s"]).w("</p>\n                </div>\n            ")}function h(t,e){return t.w(" caption-scroll")}return dust.register("td-applet-viewer-templates-lightbox_mega",e),e.__dustBody=!0,n.__dustBody=!0,s.__dustBody=!0,a.__dustBody=!0,o.__dustBody=!0,i.__dustBody=!0,l.__dustBody=!0,c.__dustBody=!0,d.__dustBody=!0,r.__dustBody=!0,u.__dustBody=!0,h.__dustBody=!0,e}(),dust.cache["td-applet-viewer:lightbox_mega.dust"]=dust.cache["td-applet-viewer:lightbox_mega"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-viewer/templates/lightbox_mega"]=function(t,n){t=t||{},dust.render(e,t,n)}},"@VERSION@",{requires:["template-base","dust","td-applet-viewer-templates-carousel","td-applet-viewer-templates-thumbnail_items"]});