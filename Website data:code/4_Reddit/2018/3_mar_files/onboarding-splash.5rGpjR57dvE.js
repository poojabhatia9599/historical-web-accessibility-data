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

!function(e,t,n){e.onboardingSplash={init:function(){function h(){t&&i&&document.location.pathname==="/"&&(e.utils.getFingerprint().timestamp>=s||window.localStorage.getItem("show_onboarding_splash2"))&&(o.find(".modal-body").html(f),window.localStorage.setItem("show_onboarding_splash2",!0),p(),d(),n(".skip-for-now").on("click",function(t){t.preventDefault();var i=n(t.target);o.hide(),u.removeClass("modal-open"),e.onboardingEvents.skippedLandingPage(c),l&&!i.hasClass("c-close")&&(window.location=n(l.target).attr("href"))}))}function p(){this.login=new e.ui.LoginForm(this.$.find("#login-form")),this.register=new e.ui.RegisterForm(this.$.find("#register-form")),this.onboarding=new e.ui.DesktopOnboarding(this.$.find("#onboarding-splash #desktop-onboarding-browse"),this.register),this.onboarding.onShowOnboarding(!1,!1),c=this.onboarding.onboardingID,a.addClass("splash-design"),a.find(".desktop-onboarding-step_sign-up .desktop-onboarding__title").text("Welcome to Reddit."),a.find(".desktop-onboarding-step_sign-up .desktop-onboarding__description").text("Over 50K communities from cars to cats to current events. Find yours.")}function d(){u.addClass("modal-open"),o.show(),e.onboardingEvents.viewedLandingPage(c)}var t=!e.config.logged;n("#block-homepage").hide();var i=e.config.feature_onboarding_splash,s=Date.now()-100,o=n("#onboarding-splash"),u=n("body"),a=n(".splash_wrapper"),f=n("#onboarding-wrapper").html(),l=null,c=null;window.localStorage.removeItem("show_onboarding_splash"),window.webkitRequestFileSystem?window.webkitRequestFileSystem(0,0,h,function(){e.loginEvents.viewedIncognitoBrowser()}):h()}}}(r,_,jQuery),$(function(){r.onboardingSplash.init()});

}
/*
     FILE ARCHIVED ON 00:15:33 Mar 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:32:14 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.066
  exclusion.robots.policy: 0.057
  cdx.remote: 0.104
  esindex: 0.011
  LoadShardBlock: 292.884 (6)
  PetaboxLoader3.resolve: 110.086 (4)
  PetaboxLoader3.datanode: 4136.081 (8)
  load_resource: 4131.96 (2)
*/