YUI.add("td-applet-viewer-templates-lightbox_atomic_sm",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('<div class="js-viewer-overlay PageOverlay D(n) Op(0)">\n    <div id=\'LightboxContainer-Viewer\' class=\'Slideshow-Lightbox H(100%) Ta-start NoTapHighlightColor\'>\n        <div id="slideshow" class="slideshow-carousel H(100%) M(a)" data-total="').f(e.get(["count"],!1),e,"h").w('">\n            ').x(e.getPath(!1,["ui","comments","canvassFullScreen"]),e,{"else":n,block:s},{}).w("\n<div class='js-slider H(100%)'>\n                ").p("carousel_atomic_sm",e,{}).w('\n</div>\n            <div class="lb-meta-content Pos(a) ').x(e.getPath(!1,["ui","comments","canvassFullScreen"]),e,{"else":a,block:i},{}).w(' Start(0) P(16px) Fw(200) Bxz(bb) W(100%)">\n                <div class="lb-meta-right Whs(n) H(n) Pos(r)">\n                    <div class="lb-meta-left ').x(e.getPath(!1,["ui","comments","canvassFullScreen"]),e,{"else":o,block:c},{}).w(' Bdrs(100px) W(50px) H(50px) Bgc(#000)">\n                        <div class="index-count D(tbc) Va(m) Ta(c) Fz(14px) W(50px) H(50px) C(#fff) Lts(1px)">').f(e.get(["index"],!1),e,"h").w("/").f(e.get(["total"],!1),e,"h").w('</div>\n                    </div>\n                    <div class="Credit js-lb-credit Ta(s)">\n                        <div class="lb-meta-title Fw(b)">').f(e.get(["title"],!1),e,"h",["s"]).w('</div>\n                        <div class="lb-meta-ts M(0)">').f(e.get(["updated"],!1),e,"h").w('</div>\n                        <div class="lb-meta-caption-container">\n                            <div class="Lh(1.5) lb-meta-txt-container-short">\n                                <span class="lb-meta-short-caption Ov(h) Fz(14px)">').f(e.get(["shortCaption"],!1),e,"h",["s"]).w('</span>\n                                <span class="Px(6px) Fz(12px) read-more Whs(nw)">').h("i18n_string",e,{},{_key:"READ_MORE"}).w('</span>\n                            </div>\n                            <div class="Lh(1.5) lb-meta-txt-container-full">\n                                <span class="lb-meta-caption Ov(h) Fz(12px)">').f(e.get(["caption"],!1),e,"h",["s"]).w("</span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                ").nx(e.getPath(!1,["ui","comments","canvassFullScreen"]),e,{block:l},{}).w("\n</div>\n        </div>\n    </div>\n    ").x(e.getPath(!1,["ui","comments","canvassFullScreen"]),e,{block:d},{}).w("\n</div>\n")}function n(t,e){return t.w('\n<button class="Lb-Close-Icon rapidnofollow M(10px) js-lb-close Bd(0) D(b) Pos(a) T(0) End(0)"></button>\n            ')}function s(t,e){return t.w('\n<button class="Lb-Close-Icon rapidnofollow M(10px) js-lb-close Bd(0) D(b) Pos(a) T(0) Start(0) M(10px)">\n                     <i class="Icon-Fp2 IconBackArrow"></i>\n                </button>\n            ')}function a(t,e){return t.w("B(0)")}function i(t,e){return t.w("T(0)")}function o(t,e){return t.w("Fl(start)")}function c(t,e){return t.w("Fl(end)")}function l(t,e){return t.w('\n<button id="ShareLightboxBtn" class="ButtonNaked Pos(a)" data-plugin=\'lightbox\' data-lightbox=\'{"target":"#Share","default":{"show":{"autohide":1, "closebtn":".icon-share-close"}}}\'>\n                        <i class="Icon Fz(20px)">&#xe600;</i>\n                    </button>\n                ')}function d(t,e){return t.w('\n<div id="lightbox-canvass" data-type="slideshow" data-hosted="true">\n        <div class="js-comments-container" id="Stencil"></div>\n    </div>\n    ')}return dust.register("td-applet-viewer-templates-lightbox_atomic_sm",e),e.__dustBody=!0,n.__dustBody=!0,s.__dustBody=!0,a.__dustBody=!0,i.__dustBody=!0,o.__dustBody=!0,c.__dustBody=!0,l.__dustBody=!0,d.__dustBody=!0,e}(),dust.cache["td-applet-viewer:lightbox_atomic_sm.dust"]=dust.cache["td-applet-viewer:lightbox_atomic_sm"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-viewer/templates/lightbox_atomic_sm"]=function(t,n){t=t||{},dust.render(e,t,n)}},"@VERSION@",{requires:["template-base","dust","td-applet-viewer-templates-carousel_atomic_sm"]});