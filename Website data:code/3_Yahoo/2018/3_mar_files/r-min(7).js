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

YUI.add("td-applet-astro-atomic-appletmodel",function(e){"use strict";e.namespace("TD.Applet").HoroscopeAppletModel=e.Mjata.ModelBase.createModelClass("TDAppletHoroscopeAppletModel","1.0",e.Af.AppletModel,[],{initializer:function(){this.after("settingsChange",e.bind(this.settingsChanged,this))},settingsChanged:function(e){var t=this.getDataModel("astro");e.prevVal.sign!==e.newVal.sign&&t.load({sign:e.newVal.sign})}})},"@VERSION@",{requires:["mjata-model-base","af-applet-model"]});YUI.add("td-applet-astro-atomic-listview",function(e){"use strict";e.namespace("TD.Applet").AstroListView=e.Base.create("TDAppletAstroListView",e.Af.AppletView,[],{events:{"a.js-show-sign":{click:"selectSign"}},selectSign:function(e){var t=this,s=this.get("model"),i={sign:e.target.ancestor("[data-sign-id]").getData("sign-id"),category:s.getDataModel("astro").get("category")};e.preventDefault(),s.saveSettings(i,{},function(e){e&&t.fireEvent("showmessage",{level:"error",token:"ERR_SAVE_SETTINGS"})})}})},"@VERSION@",{requires:["af-applet-view"]});YUI.add("td-applet-astro-atomic-model",function(e){"use strict";e.namespace("TD.Applet").AstroModel=e.Base.create("TDAppletAstroModel",e.Model,[e.Af.Sync],{resource:"astro",readonly:!0,consolidate:!1,idAttribute:"sign"},{ATTRS:{sign:{value:null},date:{value:null},category:{value:null}}})},"@VERSION@",{requires:["model","af-sync"]});YUI.add("td-applet-astro-atomic-signfooterview",function(e){"use strict";e.namespace("TD.Applet").AstroSignFooterView=e.Base.create("TDAppletAstroSignFooterView",e.Af.AppletView,[],{autoRender:!1,initializer:function(){this.get("model").after("change",e.bind(this.handleHoroscopeChange,this))},handleHoroscopeChange:function(){var e=this.get("model").getDataModel("astro").toJSON();"Cosmic"===e.signName||"cosmic"===e.signName||""===e.signName?e&&e.landing_url?this.get("container").one("a").set("href",e.landing_url):this.get("container").one("a").set("href","https://web.archive.org/web/20180301004953/https://www.yahoo.com/lifestyle/horoscope/"):e&&e.link?this.get("container").one("a").set("href",e.link):this.get("container").one("a").set("href","https://web.archive.org/web/20180301004953/https://www.yahoo.com/lifestyle/horoscope/")}})},"@VERSION@",{requires:["af-applet-view","mjata-model-store"]});YUI.add("td-applet-astro-atomic-signheaderview",function(e){"use strict";e.namespace("TD.Applet").AstroSignHeaderView=e.Base.create("TDAppletAstroSignHeaderView",e.Af.AppletView,[],{initializer:function(e){var t=this.get("model"),o=this;o.footer_info=e.footer_info,o.fallback_url=e.fallback_url,t.after("settingsChange",function(e){var a=t.getDataModel("astro"),r=e.newVal.sign,n=e.newVal.category;"COS"!==r&&(n&&a.set("category",e.newVal.category,{silent:!1}),r&&a.set("sign",e.newVal.sign,{silent:!1}),o.refreshHoroscope(e,{sign:r,category:n}))})},refreshHoroscope:function(t,o){var a=this;t.preventDefault(),o.sign||(o.sign=a.get("model").getDataModel("astro").get("sign")),e.Af.Cookie.set("horoscope","sign",o.sign),o.category||(o.category=a.get("model").getDataModel("astro").get("category")),o.date||(o.date=a.get("model").getDataModel("astro").get("date")),a.get("model").getDataModel("astro").load(o,function(){a.fireEvent("showview",{view:"main",region:"main"}),e.one("#astrofooterDiv")||a.createFooterLink(),a.wrapAstroContent()})},wrapAstroContent:function(){var t,o;if(e.one("#astroBodyText"))for(t=(o=e.one("#astroBodyText").getHTML()).split(" ");e.one("#astroBodyText").get("scrollHeight")>e.one("#astroBodyText").get("offsetHeight");)t.pop(),o=t.join(" ")+"...",e.one("#astroBodyText").setHTML(o)},createFooterLink:function(){var t=this,o=e.Node.create('<div id="astrofooterDiv" class="Lts(n) Mt(2px)">'),a=e.Node.create('<a class=" Fl(start) Pos(r) Z(1) C($link) Fw(b) C($searchBlue):h Td(n) Td(n):h" ></a>').set("text",t.footer_info.text),r="#applet_p_63802 .App-Bd .js-applet-view-container-main .astroContent",n=t.get("model").getDataModel("astro").toJSON();"COSMIC"===n.signName.toUpperCase()||""===n.signName?n.landing_url?a.setAttribute("href",n.landing_url):a.setAttribute("href",t.fallback_url):n.link?a.setAttribute("href",n.link):a.setAttribute("href",t.fallback_url),e.one(r)?o.setHTML(a).appendTo(r):e.one(".astroContent")&&o.setHTML(a).appendTo(".astroContent")}})},"@VERSION@",{requires:["af-applet-view","af-cookie"]});YUI.add("td-applet-astro-atomic-signview",function(t){"use strict";t.namespace("TD.Applet").AstroSignView=t.Base.create("TDAppletAstroSignView",t.Af.AppletView,[],{events:{"button.js-fetch-horoscope":{click:"dateArrows"},".js-another-sign":{click:"showList"}},initializer:function(e){var a=new Date,o=new Date,s="",n=new Date,r=new Date;this.footer_info=e.footer_info,this.fallback_url=e.fallback_url,a.setDate(a.getDate()-30),o.setDate(o.getDate()+30),this.on("viewrender",function(){t.one("#prevBtn")&&t.one("#nextBtn")&&(s=t.one("#prevBtn").getAttribute("data-date"),n.setFullYear(s.substr(0,4),s.substr(4,2)-1,s.substr(6,2)),s=t.one("#nextBtn").getAttribute("data-date"),r.setFullYear(s.substr(0,4),s.substr(4,2)-1,s.substr(6,2)),n<=a&&(t.one("#prevBtn").setAttribute("disabled","1"),t.one("#prevBtn").addClass("Disabled")),r>=o&&(t.one("#nextBtn").setAttribute("disabled","1"),t.one("#nextBtn").addClass("Disabled")))})},dateArrows:function(t){var e={};e.date=t.target.ancestor("[data-date]")?t.target.ancestor("[data-date]").getData("date"):t.target.getData("date"),this.refreshHoroscope(t,e)},refreshHoroscope:function(e,a){var o=this;e.preventDefault(),a.sign||(a.sign=o.get("model").getDataModel("astro").get("sign")),a.category||(a.category=o.get("model").getDataModel("astro").get("category")),a.date||(a.date=o.get("model").getDataModel("astro").get("date")),o.get("model").getDataModel("astro").load(a,function(){o.fireEvent("showview",{view:"main",region:"main"}),t.one("#astrofooterDiv")||o.createFooterLink(),o.wrapAstroContent()})},showList:function(t){var e=this,a=this.get("model");a.getDataModel("astro").set("signName",""),a.saveSettings({sign:"COS",category:"overview"},{},function(t){t?e.fireEvent("showmessage",{level:"error",token:"ERR_SAVE_SETTINGS"}):e.fireEvent("showview",{view:"list",region:"main"})}),t.preventDefault(),this.createFooterLink()},createFooterLink:function(){var e=this,a=t.Node.create('<div id="astrofooterDiv" class="Lts(n)">'),o=t.Node.create('<a class=" Fl(start) Pos(r) Z(1) C($link) Fw(b) C($searchBlue):h Td(n) Td(n):h" ></a>').set("text",e.footer_info.text),s="#applet_p_63802 .App-Bd .js-applet-view-container-main .astroContent",n="#applet_p_63802 .App-Bd .js-applet-view-container-list",r=e.get("model").getDataModel("astro").toJSON();"COSMIC"===r.signName.toUpperCase()||""===r.signName?r.landing_url?o.setAttribute("href",r.landing_url):o.setAttribute("href",e.fallback_url):r.link?o.setAttribute("href",r.link):o.setAttribute("href",e.fallback_url),t.one(s)?(a.addClass("Mt(2px)"),a.setHTML(o).appendTo(s)):t.one(n)?(a.addClass("Mt(10px)"),a.setHTML(o).appendTo(n)):t.one(".js-applet-view-container-list")?(a.addClass("Mt(10px)"),a.setHTML(o).appendTo(".js-applet-view-container-list")):t.one(".astroContent")&&(a.addClass("Mt(2px)"),a.setHTML(o).appendTo(".astroContent"))},wrapAstroContent:function(){var e,a;if(t.one("#astroBodyText"))for(e=(a=t.one("#astroBodyText").getHTML()).split(" ");t.one("#astroBodyText").get("scrollHeight")>t.one("#astroBodyText").get("offsetHeight");)e.pop(),a=e.join(" ")+"...",t.one("#astroBodyText").setHTML(a)}})},"@VERSION@",{requires:["af-applet-view"]});YUI.add("td-applet-astro-atomic-templates-fallback",function(t,a){dust.cache=dust.cache||{},dust.cache[a]=function(t){function a(t,a){return t.w('<ul class="M(0) P(0) Lts(-0.31em) D(ib) Tren(auto) Va(t) W(100%) Fz(11px)" style="word-spacing: normal;">\n    ').s(a.getPath(!1,["data","astro","signlist"]),a,{block:s},{}).w("\n</ul>\n").s(a.get(["footer_info"],!1),a,{block:n},{}).w("\n")}function s(t,a){return t.w('\n<li class="D(ib) Lts(n) Tren(a) Va(t) Mt(13px)" style="word-spacing: normal; width: 32.333%" data-sign-id="').f(a.get(["sign_id"],!1),a,"h").w('">\n        <a class="js-show-sign Td(n) Td(n):h rapidnofollow" href="').f(a.getPath(!1,["data","astro","landing_url"]),a,"h").f(a.get(["sign_name"],!1),a,"h").w('">\n            ').h("img",a,{},{"class":"M(a) D(i) W(30%) Fl(start)",src:e,style:"background-size: contain"}).w('\n<b class="D(b) Ell Pstart(2px)  Fw(b) C($link) C($searchBlue):h Td(n):h">').h("i18n_string",a,{},{_key:a.get(["sign_id"],!1)}).w('</b>\n            <b class="D(b) Ell Pstart(2px) Fz(10px)" style= "color: #afafaf!important;">').f(a.get(["date_range"],!1),a,"h").w("</b>\n        </a>\n    </li>\n    ")}function e(t,a){return t.f(a.getPath(!1,["data","astro","images",a.get(["sign_id"],!1)]),a,"h")}function n(t,a){return t.w('\n<div id="astrofooterDiv" class="Lts(n) Mt(10px)">\n                    <a class=" Fl(start) Pos(r) Z(1) C($link) Fw(b) C($searchBlue):h Td(n) Td(n):h" href="').f(a.get(["link"],!1),a,"h").w('">').f(a.get(["text"],!1),a,"h").w("</a>\n                </div>\n")}return dust.register("td-applet-astro-atomic-templates-fallback",a),a.__dustBody=!0,s.__dustBody=!0,e.__dustBody=!0,n.__dustBody=!0,a}(),dust.cache["td-applet-astro-atomic:fallback.dust"]=dust.cache["td-applet-astro-atomic:fallback"]=dust.cache[a],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-astro-atomic/templates/fallback"]=function(t,s){t=t||{},dust.render(a,t,s)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-astro-atomic-templates-header",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('    <div class="Lh(1.25) Mb(5px)">\n        <h2 class=" astro-title M(0) Fz(15px) Fw(b) Lh(1.25) D(ib) Ls(n) Tren(a) Va(t) Cur(p)" style="word-spacing: normal;">').h("i18n_string",e,{},{_key:"TITLE"}).w("</h2>\n       ").x(e.getPath(!1,["data","astro","signName"]),e,{block:a},{}).w("\n</div>\n\n")}function a(t,e){return t.w("\n").h("select",e,{block:n},{key:e.getPath(!1,["data","astro","signName"])}).w("\n")}function n(t,e){return t.w("\n").h("eq",e,{block:o},{value:"cosmic"}).w("\n").h("eq",e,{block:s},{value:"Cosmic"}).w("\n").h("default",e,{block:c},{}).w("\n")}function o(t,e){return t}function s(t,e){return t}function c(t,e){return t.w("\n").x(e.getPath(!1,["data","astro","multicategories"]),e,{block:r},{}).w("\n")}function r(t,e){return t.w("\n").x(e.getPath(!1,["data","astro","notFallback"]),e,{block:d},{}).w("\n")}function d(t,e){return t.w('\n<form class="D(ib) Ls(n) Tren(a) Va(t) Pos(r) Maw(100%) D(ib) Va(t) T(-0.3em) astro-category" style="word-spacing: normal;" action="" data-sign-id="').f(e.getPath(!1,["data","astro","sign"]),e,"h").w('" data-date="">\n                                <div class="Hidden D(b) P(.3em .2em .2em .5em) Bdrs(2px) Miw(3em) Pos(r) T(2px) B(0) Whs(nw) Ov(h) Tov(e) Bd(1px solid #ccc)">\n                                    <b style="-webkit-hyphens: none">\n                                        ').s(e.getPath(!1,["data","astro","categories"]),e,{block:i},{}).w('\n</b>\n                                    <i class="W(1.25em) Ta(c) D(ib) Ff(\'YGlyphs\')">&#xe002;</i>\n                                </div>\n                                <select class="js-selectbox js-applet-action" data-plugin="selectbox" data-applet-action="savesettings" name="category" data-applet-actioncfg="src:form.astro-category;showview:main">\n                                    ').s(e.getPath(!1,["data","astro","categories"]),e,{block:l},{}).w('\n</select>\n                                <noscript><button type="submit">').h("i18n_string",e,{},{_key:"SUBMIT"}).w("</button></noscript>\n                            </form>\n                        ")}function i(t,e){return t.w("\n").h("eq",e,{block:u},{key:e.getPath(!1,["data","astro","category"]),value:e.get(["category_id"],!1)}).w("\n")}function u(t,e){return t.f(e.get(["category_text"],!1),e,"h")}function l(t,e){return t.w("\n<option data-category=").f(e.get(["category_id"],!1),e,"h").w(" value=").f(e.get(["category_id"],!1),e,"h").w(" ").h("eq",e,{block:h},{key:e.getPath(!1,["data","astro","category"]),value:e.get(["category_id"],!1)}).w(">").f(e.get(["category_text"],!1),e,"h").w("</option>\n                                    ")}function h(t,e){return t.w(" selected")}return dust.register("td-applet-astro-atomic-templates-header",e),e.__dustBody=!0,a.__dustBody=!0,n.__dustBody=!0,o.__dustBody=!0,s.__dustBody=!0,c.__dustBody=!0,r.__dustBody=!0,d.__dustBody=!0,i.__dustBody=!0,u.__dustBody=!0,l.__dustBody=!0,h.__dustBody=!0,e}(),dust.cache["td-applet-astro-atomic:header.dust"]=dust.cache["td-applet-astro-atomic:header"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-astro-atomic/templates/header"]=function(t,a){t=t||{},dust.render(e,t,a)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-astro-atomic-templates-list",function(t,a){dust.cache=dust.cache||{},dust.cache[a]=function(t){function a(t,a){return t.w('<ul class="M(0) P(0) Lts(-0.31em) D(ib) Tren(auto) Va(t) W(100%) Fz(11px)" style="word-spacing: normal;">\n    ').s(a.getPath(!1,["data","astro","signlist"]),a,{block:s},{}).w("\n</ul>\n")}function s(t,a){return t.w('\n<li class="D(ib) Lts(n) Tren(a) Va(t) Mt(13px)" style="word-spacing: normal; width: 32.333%" data-sign-id="').f(a.get(["sign_id"],!1),a,"h").w('">\n        <a class="js-show-sign Td(n) Td(n):h rapidnofollow" href="#">\n            ').h("img",a,{},{"class":"M(a) D(i) W(30%) Fl(start)",src:e}).w('\n<b class="D(b) Ell Pstart(2px)  Fw(b) C($link) C($searchBlue):h Td(n):h">').h("i18n_string",a,{},{_key:a.get(["sign_id"],!1)}).w('</b>\n            <b class="D(b) Ell Pstart(2px) Fz(10px)" style="color: #afafaf!important;">').f(a.get(["date_range"],!1),a,"h").w("</b>\n        </a>\n    </li>\n    ")}function e(t,a){return t.f(a.getPath(!1,["data","astro","images",a.get(["sign_id"],!1)]),a,"h")}return dust.register("td-applet-astro-atomic-templates-list",a),a.__dustBody=!0,s.__dustBody=!0,e.__dustBody=!0,a}(),dust.cache["td-applet-astro-atomic:list.dust"]=dust.cache["td-applet-astro-atomic:list"]=dust.cache[a],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-astro-atomic/templates/list"]=function(t,s){t=t||{},dust.render(a,t,s)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-astro-atomic-templates-lite",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.w('<div class="nr-text-color C($gray) LineClamp(5,82px) Lh(1.25)">\n    ').f(e.getPath(!1,["data","astro","body","truncated","large"]),e,"h").w("\n</div>\n").s(e.get(["footer_info"],!1),e,{block:a},{}).w("\n")}function a(t,e){return t.w('\n<p class="Pt(5px)">\n    <a class="nr-text-color nr-white-on Td(n) Fw(b) C($link) C($searchBlue):h Td(n):h" href="').f(e.get(["link"],!1),e,"h").w('" ').h("rapid_data_attr",e,{},{t3:"hscp",t4:"mu",elmt:"mr"}).w(">").f(e.get(["text"],!1),e,"h").w("</a>\n</p>\n")}return dust.register("td-applet-astro-atomic-templates-lite",e),e.__dustBody=!0,a.__dustBody=!0,e}(),dust.cache["td-applet-astro-atomic:lite.dust"]=dust.cache["td-applet-astro-atomic:lite"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-astro-atomic/templates/lite"]=function(t,a){t=t||{},dust.render(e,t,a)}},"@VERSION@",{requires:["template-base","dust"]});YUI.add("td-applet-astro-atomic-templates-main",function(t,a){dust.cache=dust.cache||{},dust.cache[a]=function(t){function a(t,a){return t.w("    <script>\n    window.onload = function(){\n        var astroBodyText = document.getElementById(\"astroBodyText\");\n            var wordArray = astroBodyText.innerHTML.split(' ');\n            while(astroBodyText.scrollHeight > astroBodyText.offsetHeight) {\n                wordArray.pop();\n                astroBodyText.innerHTML = wordArray.join(' ') + '...';\n            }\n           \n    };\n  <\/script>\n    <div role='toolbar' class='M(0) P(0) D(ib) Lh(1.25) Lts(n) Tren(a) Va(t) Va(m) Pos(r) Z(1) Mend(10px)' style=\"word-spacing: normal;\">\n        <button id=\"prevBtn\" type='button' style='border:1px solid #e2e2e6; padding:2px' class='Fz(10px) Cur(p) W(20px) H(20px) Bg(#fff) C($gray) Bg(n) js-fetch-horoscope' title='previous' data-date=\"").f(a.getPath(!1,["data","astro","prevDate"]),a,"h").w("\"><b class='Hidden'>").h("i18n_string",a,{},{_key:"PREVIOUS"}).w("</b> <b class=\"W(1.25em) Ta(c) D(ib) Icon-Fp2 IconBackArrow Va-bl\"></b></button>\n        <button id=\"nextBtn\" type='button' style='border:1px solid #e2e2e6; padding:2px' class='Fz(10px) Cur(p) W(20px) H(20px) Bg(#fff) C($gray) Bg(n) js-fetch-horoscope' title='next' data-date=\"").f(a.getPath(!1,["data","astro","nextDate"]),a,"h").w("\"><b class='Hidden'>").h("i18n_string",a,{},{_key:"NEXT"}).w('</b> <b class="W(1.25em) Ta(c) D(ib) Icon-Fp2 IconForwardArrow Va-bl"></b></button>\n    </div>\n    <p class=\'D(ib) Lh(1.25) Lts(n) Tren(a) Va(t) Va(m) C(#afafaf)! Mt(3px)\' style="word-spacing: normal;">').f(a.getPath(!1,["data","astro","dateString"]),a,"h").w("</p>\n    <div class='Lts(-0.31em) D(ib)  Tren(auto) Va(t) Mt(10px)' style=\"word-spacing: normal;\">\n        <div class='D(ib) Lh(1.25) Lts(n) Tren(a) Va(t) W(33.333%) Ta(c)' style=\"word-spacing: normal;\">\n            ").h("img",a,{},{src:n}).w("\n</div>\n        <div class='D(ib) Lh(1.25) Lts(n) Tren(a) Va(t) astroContent' style=\"word-spacing: normal;width: 66.666%;\">\n            <div>\n                <strong>\n                ").h("select",a,{block:e},{key:a.getPath(!1,["data","astro","signName"])}).w('\n</strong>\n                (<a href="#" class="js-another-sign Td(n) C($link) C($searchBlue):h Td(n):h rapidnofollow">').h("i18n_string",a,{},{_key:"CHANGE"}).w('</a>)\n            </div>\n            <p id="astroBodyText" class="LineClamp(5,82px) Lh(1.25) C($gray)" style="max-width:225px">            \n                ').f(a.getPath(!1,["data","astro","body","truncated","large"]),a,"h").w("\n</p>\n            ").s(a.get(["footer_info"],!1),a,{block:d},{}).w("\n</div>\n    </div>\n    \n    \n\n")}function n(t,a){return t.f(a.getPath(!1,["data","astro","image"]),a,"h")}function e(t,a){return t.w("\n").h("eq",a,{block:s},{value:"cosmic"}).w("\n").h("eq",a,{block:o},{value:"Cosmic"}).w("\n").h("default",a,{block:r},{}).w("\n")}function s(t,a){return t.h("i18n_string",a,{},{_key:"COSMIC_OVERVIEW"})}function o(t,a){return t.h("i18n_string",a,{},{_key:"COSMIC_OVERVIEW"})}function r(t,a){return t.w(" ").f(a.getPath(!1,["data","astro","signName"]),a,"h").w(" ")}function d(t,a){return t.w('\n<div id="astrofooterDiv" class="Lts(n) Mt(2px)">\n                    <a class=" Fl(start) Pos(r) Z(1) C($link) Fw(b) C($searchBlue):h Td(n) Td(n):h" href="').f(a.get(["link"],!1),a,"h").w('">').f(a.get(["text"],!1),a,"h").w("</a>\n                </div>\n            ")}return dust.register("td-applet-astro-atomic-templates-main",a),a.__dustBody=!0,n.__dustBody=!0,e.__dustBody=!0,s.__dustBody=!0,o.__dustBody=!0,r.__dustBody=!0,d.__dustBody=!0,a}(),dust.cache["td-applet-astro-atomic:main.dust"]=dust.cache["td-applet-astro-atomic:main"]=dust.cache[a],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-astro-atomic/templates/main"]=function(t,n){t=t||{},dust.render(a,t,n)}},"@VERSION@",{requires:["template-base","dust"]});

}
/*
     FILE ARCHIVED ON 00:49:53 Mar 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:34:32 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 158.696
  exclusion.robots: 0.186
  exclusion.robots.policy: 0.173
  cdx.remote: 0.076
  esindex: 0.013
  LoadShardBlock: 108.773 (3)
  PetaboxLoader3.datanode: 243.992 (5)
  load_resource: 334.831 (2)
  PetaboxLoader3.resolve: 113.389 (2)
*/