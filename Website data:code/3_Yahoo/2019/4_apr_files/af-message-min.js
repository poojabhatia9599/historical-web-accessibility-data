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

YUI.add("af-message",function(e,s){"use strict";var a,n={ERR:"Doh! Something went wrong. Please try again.",ERR_LOAD:"Oops, something went wrong. Please try again.",ERR_SAVE_SETTINGS:"Oops, we couldn't save your preferences. Please try again.",ERR_SAVE:"Oops, something got stuck in our tubes. Please try again.",ERR_AUTH:"Oops, you need to log in again."},o="D-n",t="info",r={error:"Error",important:"Important",info:"Info",success:"Success",warn:"Warning"},i={error:"&#xe046;",important:"&#xe046;",info:"&#xe035;",success:"&#xe063;",warn:"&#xe046;"},l={page:"Page",modal:"Modal",app:"App"};e.namespace("Af").Message={show:function(s,p,c,g){var d,u,f,m,h,R=p.template||"ape-af-templates-message";a||(a=e.Af.Utils.i18n("ape-af/strings"),0===e.Object.size(a)&&(a=n)),(s=e.one(s))||(s=e.one("body")),g||(g="BODY"===s.get("nodeName")?"page":s.hasClass("js-applet")?"app":"modal"),d=s.one(">.js-msg"),u=p.level?p.level.toLowerCase():t,m=p.token,(f=p.content)||(m&&(f=a[m]),f||"error"!==u||(f=a.ERR)),h={guid:s.generateID(),stencilIcon:i[u]||i[t],stencilLevel:r[u]||r[t],stencilType:l[g]||l.page,content:f},c&&c.glyphHook&&(h.glyphHook=c.glyphHook),dust.render(R,h,e.bind(function(a,n){if(!a){var t=e.Node.create(n);t.addClass(o),d?d.replace(t):s.append(t),this._show(t)}},this))},_show:function(s){if(s=e.one(s)){s.removeClass(o).focus(),s.show("fadeIn",{duration:1});var a=s.one(".js-msg-close");a&&a.once("click",function(e){var a;e.preventDefault(),a=1,s.hide("fadeOut",{duration:a},function(){s.addClass(o),s.remove(!0)}),s.addClass(o)})}}}},"@VERSION@",{langBundles:["strings"],requires:["ape-af-templates-message","af-utils","node-base","selector-css3"]});

}
/*
     FILE ARCHIVED ON 20:25:28 Mar 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:31:49 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 78.142
  exclusion.robots: 0.154
  exclusion.robots.policy: 0.141
  cdx.remote: 0.079
  esindex: 0.012
  LoadShardBlock: 32.186 (3)
  PetaboxLoader3.datanode: 62.008 (5)
  load_resource: 112.842 (2)
  PetaboxLoader3.resolve: 77.346 (2)
*/