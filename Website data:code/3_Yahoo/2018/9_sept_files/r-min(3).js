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

YUI.add("td-applet-amplify-hpset-mainview",function(e,i){"use strict";var o,t="HP",s="ieInstallerLightbox:show",n="#ieInstallerLightbox",r=".td-applet-amplify-hpset",a=e.Cookie,h=e.Af.Config,c={CH:"chrome",FF:"firefox",IE:"explorer"};e.namespace("TD.Applet").AmplifyHpsetMainView=e.Base.create("TDAmplifyHpsetMainView",e.Af.AppletView,[],{autoRender:!1,initializer:function(e){this.browser=c[h.getContext("browserName")],this.browserVersion=h.getContext("browserVersion"),this.osName=h.getContext("osName"),this.osName="string"==typeof this.osName?this.osName.toLowerCase():"",this.browser&&this.browserVersion&&this.osName&&(o=this.getRapid(),this.extensions=e.extensions,this.initChromeLinkStore=!1,this.container=this.get("container"),this.btnNode=this.container&&this.container.one(r),this.btnNode&&this.initBtn())},initBtn:function(){var e,i;this.isHomepageSet()||("chrome"===this.browser?(e=window.RequestFileSystem||window.webkitRequestFileSystem)&&e(window.TEMPORARY,100,this.handleVerification.bind(this),function(){}):"firefox"===this.browser?window.indexedDB&&((i=window.indexedDB.open("test")).onsuccess=this.handleVerification.bind(this),i.onerror=function(e){}):"explorer"===this.browser&&this.handleVerification())},isHomepageSet:function(){var i=!1,o=e.Object.getValue(e.config.win,["history","length"]);return"1"===a.get(t)?i=!0:"explorer"===this.browser?i=o===(this.browserVersion<10?0:1):"chrome"!==this.browser&&"firefox"!==this.browser||1!==o||(i=!0),i},handleVerification:function(){var e,i,o=this,t={chrome:[o.checkIsExcludedVersion,o.checkHasMarkupFlag],firefox:[o.checkIsExcludedVersion,o.checkHasMarkupFlag],explorer:[o.checkIsExcludedVersion,o.checkDependenciesFail]},s=!1,n=t[o.browser]||[];for(e=0,i=n.length;e<i&&(s=!n[e].call(o));e++);s?o.setupClickEvent():"chrome"!==o.browser&&"firefox"!==o.browser||this.setHPCookie()},checkIsExcludedVersion:function(){var e=this.browserVersion,i=this.extensions||{},o=i[this.browser],t=this.osName,s=!0;return o&&(!o.minVersion||e>=o.minVersion)&&(!o.maxVersion||e<=o.maxVersion)&&(!o.os||o.os.indexOf(t)>=0)&&(s=!1),s},checkHasMarkupFlag:function(){var i=this.extensions||{},o=i.markupFlagClassName,t=e.one("body"),s=!1;return o&&t&&t.hasClass(o)&&(s=!0),s},checkDependenciesFail:function(){var i=e.one(n),o=!i;return o},setupClickEvent:function(){var e=this,i={chrome:e.installChromeExtension,firefox:e.installFirefoxExtension,explorer:e.installExplorerRegistryKey},o=e.browser,t=e.browserVersion,s=i[o],n=e.extensions||{},r=n[o]&&n[o].url,a=n.hashTag;"firefox"===o&&t>=57&&(r=n[o]&&n[o].xpi),s&&r&&(e.btnNode.on("click",function(){e.setupHashTag(a),s.call(e,r)}),e.showModule())},showModule:function(){this.btnNode.removeClass("D\\(n\\)"),o&&o.beaconLinkViews([{sec:"hpset_rr",_links:[{elm:"btn",subsec:"follow-promo"}]}])},setupHashTag:function(e){e&&document&&document.location&&(document.location.hash=e)},installChromeExtension:function(i){var t,s,n={sec:"hpset_rr",subsec:"follow-promo"};this.setHPCookie(),this.fireInstallBeacon(),this.initChromeLinkStore||(t=e.one(document.head),(s=document.createElement("link")).rel="chrome-webstore-item",s.href=i,t.appendChild(s),this.initChromeLinkStore=!0),chrome.webstore.install(i,function(e){o&&o.beaconClick("hpset_rr","chrome-add-ext","2",n)},function(e){o&&o.beaconClick("hpset_rr","chrome-cancel","1",n)})},installFirefoxExtension:function(e){var i=".xpi"===e.substr(-4)?"_self":"_blank";this.setHPCookie(),window.open(e,i),this.fireInstallBeacon()},installExplorerRegistryKey:function(i){this.setHPCookie(),e.Af.Event.fire(s),window.open(i,"_self"),this.fireInstallBeacon()},fireInstallBeacon:function(){o&&o.beaconClick("hpset_rr","Make YAHOO! your homepage","1",{sec:"hpset_rr",subsec:"follow-promo",elm:"btn",itc:1})},setHPCookie:function(){var e=new Date;e.setTime(e.getTime()+1728e5),a.set(t,"1",{domain:".yahoo.com",path:"/",expires:e})}})},"@VERSION@",{requires:["af-applet-view"]});YUI.add("td-applet-amplify-hpset-templates-hpset",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.x(e.get(["whiteHpset"],!1),e,{"else":p,block:s},{}).w("\n")}function p(t,e){return t.w('\n<button class="td-applet-amplify-hpset D(n) Cur(p) W(300px) H(50px) Mb(20px) Bds(n) Bdrs(4px) C(white) Fz(14px) Bgi($hpsetBtnGradient) Bgc(#6b03f6)">\n        ').h("i18n_string",e,{},{_key:"MAKE_YAHOO_YOUR_HP",v0:a}).w("\n</button>\n")}function a(t,e){return t.w("<img class='Va(m) Mx(5px)' src=").f(e.getPath(!1,["yahooLogo","url"]),e,"h").w(" alt='YAHOO!' height=").f(e.getPath(!1,["yahooLogo","height"]),e,"h").w(" width=").f(e.getPath(!1,["yahooLogo","width"]),e,"h").w(">")}function s(t,e){return t.w('\n<button class="td-applet-amplify-hpset Cur(p) uh-banner-wide_D(n) uh-banner-narrow_D(n) W(300px) Bds(s) Bdc(#e0e4e9) Bdrs(4px) C(#6000d6) Fz(13px) Fw(b) Bgc(#fff) Bdw(1px) Bgc($hpsetButtonHov):h C($hpsetLabelHov):h H(44px) Mb(20px)">\n            Make Yahoo your homepage\n        </button>\n')}return dust.register("td-applet-amplify-hpset-templates-hpset",e),e.__dustBody=!0,p.__dustBody=!0,a.__dustBody=!0,s.__dustBody=!0,e}(),dust.cache["td-applet-amplify-hpset:hpset.dust"]=dust.cache["td-applet-amplify-hpset:hpset"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-amplify-hpset/templates/hpset"]=function(t,p){t=t||{},dust.render(e,t,p)}},"@VERSION@",{requires:["template-base","dust"]});

}
/*
     FILE ARCHIVED ON 23:54:15 Aug 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:39:03 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 113.938
  exclusion.robots: 0.091
  exclusion.robots.policy: 0.077
  cdx.remote: 0.069
  esindex: 0.011
  LoadShardBlock: 79.75 (3)
  PetaboxLoader3.datanode: 112.509 (5)
  load_resource: 144.146 (2)
  PetaboxLoader3.resolve: 104.105 (2)
*/