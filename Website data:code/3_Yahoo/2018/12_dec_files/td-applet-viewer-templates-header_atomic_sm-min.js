YUI.add("td-applet-viewer-templates-header_atomic_sm",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(e){function t(e,t){return e.w('<div class="Px(20px) Py(14px) ').x(t.get(["cover_photo"],!1),t,{block:d},{}).w(' Headline-Box">\n    <h1 class="H(n) Fz(28px) Pb(8px) Fw(b) C(#000) Lead-l_C(#fff)">').f(t.get(["title"],!1),t,"h",["s"]).w('</h1>\n    \n    <div class="Fz(12px) C(#828c93) Lead-l_C(#fff) Credit">\n        ').x(t.get(["publisher"],!1),t,{block:u},{}).x(t.get(["author"],!1),t,{block:n},{}).h("eq",t,{"else":c,block:r},{key:i,value:"video"}).w("\n</div>\n</div>")}function d(e,t){return e.w(" B-0")}function u(e,t){return e.f(t.get(["publisher"],!1),t,"h",["s"]).w(" • ")}function n(e,t){return e.f(t.get(["author"],!1),t,"h",["s"]).w(" • ")}function c(e,t){return e.x(t.get(["publicationDate"],!1),t,{block:a},{}).w("\n")}function a(e,t){return e.f(t.get(["publicationDate"],!1),t,"h")}function r(e,t){return e.x(t.get(["duration"],!1),t,{block:o},{})}function o(e,t){return e.h("i18n_string",t,{},{_key:"VIDEO_DURATION",v0:s})}function s(e,t){return e.f(t.get(["duration"],!1),t,"h")}function i(e,t){return e.f(t.get(["type"],!1),t,"h")}return dust.register("td-applet-viewer-templates-header_atomic_sm",t),t.__dustBody=!0,d.__dustBody=!0,u.__dustBody=!0,n.__dustBody=!0,c.__dustBody=!0,a.__dustBody=!0,r.__dustBody=!0,o.__dustBody=!0,s.__dustBody=!0,i.__dustBody=!0,t}(),dust.cache["td-applet-viewer:header_atomic_sm.dust"]=dust.cache["td-applet-viewer:header_atomic_sm"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-viewer/templates/header_atomic_sm"]=function(e,d){e=e||{},dust.render(t,e,d)}},"@VERSION@",{requires:["template-base","dust"]});