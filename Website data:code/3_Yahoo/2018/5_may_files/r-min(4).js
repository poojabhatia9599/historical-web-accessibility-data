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

YUI.add("td-applet-amplify-hpset-mainview",function(e,i){"use strict";var t,o="HP",n="ieInstallerLightbox:show",s="#ieInstallerLightbox",r=".td-applet-amplify-hpset",a=".hpset",h=e.Cookie,c=e.Af.Config,l={CH:"chrome",FF:"firefox",IE:"explorer"};e.namespace("TD.Applet").AmplifyHpsetMainView=e.Base.create("TDAmplifyHpsetMainView",e.Af.AppletView,[],{autoRender:!1,initializer:function(i){this.browser=l[c.getContext("browserName")],this.browserVersion=c.getContext("browserVersion"),this.osName=c.getContext("osName"),this.osName="string"==typeof this.osName?this.osName.toLowerCase():"",this.browser&&this.browserVersion&&this.osName&&(t=this.getRapid(),this.extensions=i.extensions,this.initChromeLinkStore=!1,this.container=this.get("container"),this.btnNode=this.container&&this.container.one(r),this.btnParentNode=e.one(a),this.btnNode&&this.initBtn())},initBtn:function(){var e,i;this.isHomepageSet()?this.btnParentNode&&this.btnParentNode.hide():"chrome"===this.browser?(e=window.RequestFileSystem||window.webkitRequestFileSystem)&&e(window.TEMPORARY,100,this.handleVerification.bind(this),function(){}):"firefox"===this.browser?window.indexedDB&&((i=window.indexedDB.open("test")).onsuccess=this.handleVerification.bind(this),i.onerror=function(e){}):"explorer"===this.browser&&this.handleVerification()},isHomepageSet:function(){var i=!1,t=e.Object.getValue(e.config.win,["history","length"]);return"1"===h.get(o)?i=!0:"explorer"===this.browser?i=t===(this.browserVersion<10?0:1):"chrome"!==this.browser&&"firefox"!==this.browser||1!==t||(i=!0),i},handleVerification:function(){var e,i,t=this,o={chrome:[t.checkIsExcludedVersion,t.checkHasMarkupFlag],firefox:[t.checkIsExcludedVersion,t.checkHasMarkupFlag],explorer:[t.checkIsExcludedVersion,t.checkDependenciesFail]},n=!1,s=o[t.browser]||[];for(e=0,i=s.length;e<i&&(n=!s[e].call(t));e++);n?t.setupClickEvent():this.btnParentNode&&(this.setHPCookie(),this.btnParentNode.hide())},checkIsExcludedVersion:function(){var e=this.browserVersion,i=this.extensions||{},t=i[this.browser],o=this.osName,n=!0;return t&&(!t.minVersion||e>=t.minVersion)&&(!t.maxVersion||e<=t.maxVersion)&&(!t.os||t.os.indexOf(o)>=0)&&(n=!1),n},checkHasMarkupFlag:function(){var i=this.extensions||{},t=i.markupFlagClassName,o=e.one("body"),n=!1;return t&&o&&o.hasClass(t)&&(n=!0),n},checkDependenciesFail:function(){var i=e.one(s),t=!i;return t},setupClickEvent:function(){var e=this,i={chrome:e.installChromeExtension,firefox:e.installFirefoxExtension,explorer:e.installExplorerRegistryKey},t=e.browser,o=i[t],n=e.extensions||{},s=n[t]&&n[t].url,r=n.hashTag;o&&s&&(e.btnNode.on("click",function(){e.setupHashTag(r),o.call(e,s)}),e.showModule())},showModule:function(){this.btnNode.removeClass("D\\(n\\)"),t&&t.beaconLinkViews([{sec:"hpset_rr",_links:[{elm:"btn",subsec:"follow-promo"}]}])},setupHashTag:function(e){e&&document&&document.location&&(document.location.hash=e)},installChromeExtension:function(i){var o,n,s={sec:"hpset_rr",subsec:"follow-promo"};this.setHPCookie(),this.fireInstallBeacon(),this.initChromeLinkStore||(o=e.one(document.head),(n=document.createElement("link")).rel="chrome-webstore-item",n.href=i,o.appendChild(n),this.initChromeLinkStore=!0),chrome.webstore.install(i,function(e){t&&t.beaconClick("hpset_rr","chrome-add-ext","2",s)},function(e){t&&t.beaconClick("hpset_rr","chrome-cancel","1",s)})},installFirefoxExtension:function(e){this.setHPCookie(),window.open(e,"_self"),this.fireInstallBeacon()},installExplorerRegistryKey:function(i){this.setHPCookie(),e.Af.Event.fire(n),window.open(i,"_self"),this.fireInstallBeacon()},fireInstallBeacon:function(){t&&t.beaconClick("hpset_rr","Make YAHOO! your homepage","1",{sec:"hpset_rr",subsec:"follow-promo",elm:"btn",itc:1})},setHPCookie:function(){var e=new Date;e.setTime(e.getTime()+1728e5),h.set(o,"1",{domain:".yahoo.com",path:"/",expires:e})}})},"@VERSION@",{requires:["af-applet-view"]});YUI.add("td-applet-amplify-hpset-templates-hpset",function(t,e){dust.cache=dust.cache||{},dust.cache[e]=function(t){function e(t,e){return t.x(e.get(["whiteHpset"],!1),e,{"else":p,block:a},{}).w("\n")}function p(t,e){return t.w('\n<button class="td-applet-amplify-hpset D(n) Cur(p) W(300px) H(50px) Mb(20px) Bds(n) Bdrs(4px) C(white) Fz(14px) Bgi($hpsetBtnGradient) Bgc(#6b03f6)">\n        ').h("i18n_string",e,{},{_key:"MAKE_YAHOO_YOUR_HP",v0:s}).w("\n</button>\n")}function s(t,e){return t.w("<img class='Va(m) Mx(5px)' src=").f(e.getPath(!1,["yahooLogo","url"]),e,"h").w(" alt='YAHOO!' height=").f(e.getPath(!1,["yahooLogo","height"]),e,"h").w(" width=").f(e.getPath(!1,["yahooLogo","width"]),e,"h").w(">")}function a(t,e){return t.w('\n<button class="td-applet-amplify-hpset Cur(p) W(300px) Bds(s) Bdc(#e0e4e9) Bdrs(4px) C(#6000d6) Fz(13px) Fw(b) Bgc(#fff) Bdw(1px) Bgc($hpsetButtonHov):h C($hpsetLabelHov):h H(44px) Mb(20px)">\n            Make Yahoo your homepage\n        </button>\n')}return dust.register("td-applet-amplify-hpset-templates-hpset",e),e.__dustBody=!0,p.__dustBody=!0,s.__dustBody=!0,a.__dustBody=!0,e}(),dust.cache["td-applet-amplify-hpset:hpset.dust"]=dust.cache["td-applet-amplify-hpset:hpset"]=dust.cache[e],t.Template._cache=t.Template._cache||{},t.Template._cache["td-applet-amplify-hpset/templates/hpset"]=function(t,p){t=t||{},dust.render(e,t,p)}},"@VERSION@",{requires:["template-base","dust"]});

}
/*
     FILE ARCHIVED ON 23:42:44 Apr 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:40:27 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 100.306
  exclusion.robots: 0.129
  exclusion.robots.policy: 0.119
  cdx.remote: 0.066
  esindex: 0.01
  LoadShardBlock: 37.022 (3)
  PetaboxLoader3.datanode: 92.706 (4)
  load_resource: 140.962
  PetaboxLoader3.resolve: 37.489
*/