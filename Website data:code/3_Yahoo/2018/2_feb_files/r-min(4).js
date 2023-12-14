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

YUI.add("td-applet-amplify-hpset-mainview",function(e,t){"use strict";var n="HP",r="ieInstallerLightbox:show",i="#ieInstallerLightbox",s=".td-applet-amplify-hpset",o=e.Cookie,u=e.Af.Config,a,f={CH:"chrome",FF:"firefox",IE:"explorer"};e.namespace("TD.Applet").AmplifyHpsetMainView=e.Base.create("TDAmplifyHpsetMainView",e.Af.AppletView,[],{autoRender:!1,initializer:function(e){this.browser=f[u.getContext("browserName")],this.browserVersion=u.getContext("browserVersion"),this.osName=u.getContext("osName"),this.osName=typeof this.osName=="string"?this.osName.toLowerCase():"";if(!this.browser||!this.browserVersion||!this.osName)return;a=this.getRapid(),this.extensions=e.extensions,this.initChromeLinkStore=!1,this.container=this.get("container"),this.btnNode=this.container&&this.container.one(s),e.skipClientSideValidation?this.setupClickEvent():this.btnNode&&this.initBtn()},initBtn:function(){if(this.isHomepageSet())return;if(this.browser==="chrome"){var e=window.RequestFileSystem||window.webkitRequestFileSystem;e&&e(window.TEMPORARY,100,this.handleVerification.bind(this),function(){})}else if(this.browser==="firefox"){if(window.indexedDB){var t=window.indexedDB.open("test");t.onsuccess=this.handleVerification.bind(this),t.onerror=function(e){}}}else this.browser==="explorer"&&this.handleVerification()},isHomepageSet:function(){var t=!1,r=e.Object.getValue(e.config.win,["history","length"]);return o.get(n)==="1"?t=!0:this.browser==="explorer"?t=r===(this.browserVersion<10?0:1):(this.browser==="chrome"||this.browser==="firefox")&&r===1&&(t=!0),t},handleVerification:function(){var e=this,t={chrome:[e.checkIsExcludedVersion,e.checkHasMarkupFlag],firefox:[e.checkIsExcludedVersion,e.checkHasMarkupFlag],explorer:[e.checkIsExcludedVersion,e.checkDependenciesFail]},n=!1,r=t[e.browser]||[];for(var i=0,s=r.length;i<s;i++){n=!r[i].call(e);if(!n)break}n&&e.setupClickEvent()},checkIsExcludedVersion:function(){var e=this.browserVersion,t=this.extensions||{},n=t[this.browser],r=this.osName,i=!0;return n&&(!n.minVersion||e>=n.minVersion)&&(!n.maxVersion||e<=n.maxVersion)&&(!n.os||n.os.indexOf(r)>=0)&&(i=!1),i},checkHasMarkupFlag:function(){var t=this.extensions||{},n=t.markupFlagClassName,r=e.one("body"),i=!1;return n&&r&&r.hasClass(n)&&(i=!0),i},checkDependenciesFail:function(){var t=e.one(i),n=!t;return n},setupClickEvent:function(){var e=this,t={chrome:e.installChromeExtension,firefox:e.installFirefoxExtension,explorer:e.installExplorerRegistryKey},n=e.browser,r=t[n],i=e.extensions||{},s=i[n]&&i[n].url,o=i.hashTag;r&&s&&(e.btnNode.on("click",function(){e.setupHashTag(o),r.call(e,s)}),e.showModule())},showModule:function(){this.btnNode.removeClass("D\\(n\\)"),a&&a.beaconLinkViews([{sec:"hpset_rr",_links:[{elm:"btn",subsec:"follow-promo"}]}])},setupHashTag:function(e){e&&document&&document.location&&(document.location.hash=e)},installChromeExtension:function(t){var n={sec:"hpset_rr",subsec:"follow-promo"};this.setHPCookie(),this.fireInstallBeacon();if(!this.initChromeLinkStore){var r=e.one(document.head),i=document.createElement("link");i.rel="chrome-webstore-item",i.href=t,r.appendChild(i),this.initChromeLinkStore=!0}chrome.webstore.install(t,function(e){a&&a.beaconClick("hpset_rr","chrome-add-ext","2",n)},function(e){a&&a.beaconClick("hpset_rr","chrome-cancel","1",n)})},installFirefoxExtension:function(e){this.setHPCookie(),window.open(e,"_blank"),this.fireInstallBeacon()},installExplorerRegistryKey:function(t){this.setHPCookie(),e.Af.Event.fire(r),window.open(t,"_self"),this.fireInstallBeacon()},fireInstallBeacon:function(){a&&a.beaconClick("hpset_rr","Make YAHOO! your homepage","1",{sec:"hpset_rr",subsec:"follow-promo",elm:"btn",itc:1})},setHPCookie:function(){o.set(n,"1",{domain:".yahoo.com",path:"/"})}})},"@VERSION@",{requires:["af-applet-view"]});
YUI.add("td-applet-amplify-hpset-templates-hpset",function(e,t){dust.cache=dust.cache||{},dust.cache[t]=function(){return function(){function e(e,n){return e.exists(n.get("whiteHpset"),n,{"else":t,block:r},null).write("\n")}function t(e,t){return e.write("\n    ").write('<button class="td-applet-amplify-hpset D(n) Cur(p) W(300px) H(50px) Bds(n) Bdrs(4px) C(white) Fz(14px) Bgi($hpsetBtnGradient) Bgc(#6b03f6)">').write("\n        ").helper("i18n_string",t,{},{_key:"MAKE_YAHOO_YOUR_HP",v0:n}).write("\n    ").write("</button>").write("\n")}function n(e,t){return e.write("<img class='Va(m) Mx(5px)' src=").reference(t.getPath(!1,["yahooLogo","url"]),t,"h").write(" alt='YAHOO!' height=").reference(t.getPath(!1,["yahooLogo","height"]),t,"h").write(" width=").reference(t.getPath(!1,["yahooLogo","width"]),t,"h").write(">")}function r(e,t){return e.write("\n    ").write('<button class="td-applet-amplify-hpset Cur(p) W(300px) H(50px) Bds(s) Bdc(#e0e4e9) Bdrs(4px) C(#6000d6) Fz(13px) Fw(b) Bgc(#fff) Mb(30px) Bdw(1px) Bgc($hpsetButtonHov):h C($hpsetLabelHov):h">').write("\n        ").write("Make Yahoo your homepage ").write("\n    ").write("</button>").write("\n")}return dust.register("td-applet-amplify-hpset-templates-hpset",e),e}()}(),dust.cache["td-applet-amplify-hpset:hpset.dust"]=dust.cache["td-applet-amplify-hpset:hpset"]=dust.cache[t],e.Template._cache=e.Template._cache||{},e.Template._cache["td-applet-amplify-hpset/templates/hpset"]=function(e,n){e=e||{},dust.render(t,e,n)}},"@VERSION@",{requires:["template-base","dust"]});


}
/*
     FILE ARCHIVED ON 22:17:07 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:34:18 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 70.832
  exclusion.robots: 0.113
  exclusion.robots.policy: 0.104
  cdx.remote: 0.054
  esindex: 0.01
  LoadShardBlock: 33.461 (3)
  PetaboxLoader3.datanode: 80.828 (5)
  load_resource: 157.627 (2)
  PetaboxLoader3.resolve: 81.802 (2)
*/