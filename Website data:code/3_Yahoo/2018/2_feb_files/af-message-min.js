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

YUI.add("af-message",function(e,t){"use strict";var n={ERR:"Doh! Something went wrong. Please try again.",ERR_LOAD:"Oops, something went wrong. Please try again.",ERR_SAVE_SETTINGS:"Oops, we couldn't save your preferences. Please try again.",ERR_SAVE:"Oops, something got stuck in our tubes. Please try again.",ERR_AUTH:"Oops, you need to log in again."},r,i="js-msg",s="D-n",o="info",u="page",a={error:"Error",important:"Important",info:"Info",success:"Success",warn:"Warning"},f={error:"&#xe046;",important:"&#xe046;",info:"&#xe035;",success:"&#xe063;",warn:"&#xe046;"},l={page:"Page",modal:"Modal",app:"App"};e.namespace("Af").Message={show:function(t,c,h,p){var d,v,m,g,y,b=c.template||"ape-af-templates-message";r||(r=e.Af.Utils.i18n("ape-af/strings"),e.Object.size(r)===0&&(r=n)),t=e.one(t),t||(t=e.one("body")),p||(t.get("nodeName")==="BODY"?p="page":t.hasClass("js-applet")?p="app":p="modal"),d=t.one(">."+i),v=c.level?c.level.toLowerCase():o,g=c.token,m=c.content,m||(g&&(m=r[g]),!m&&v==="error"&&(m=r.ERR)),y={guid:t.generateID(),stencilIcon:f[v]||f[o],stencilLevel:a[v]||a[o],stencilType:l[p]||l[u],content:m},h&&h.glyphHook&&(y.glyphHook=h.glyphHook),dust.render(b,y,e.bind(function(n,r){if(n)return;var i=e.Node.create(r);i.addClass(s),d?d.replace(i):t.append(i),this._show(i)},this))},_show:function(t){function n(e){t.hide("fadeOut",{duration:e},function(){t.addClass(s),t.remove(!0)})}t=e.one(t);if(!t)return;t.removeClass(s).focus(),t.show("fadeIn",{duration:1});var r=t.one(".js-msg-close");r&&r.once("click",function(e){e.preventDefault(),n(1),t.addClass(s)})}}},"@VERSION@",{langBundles:["strings"],requires:["ape-af-templates-message","af-utils","node-base","selector-css3"]});


}
/*
     FILE ARCHIVED ON 13:51:52 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:39:00 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 71.294
  exclusion.robots: 0.14
  exclusion.robots.policy: 0.129
  cdx.remote: 0.065
  esindex: 0.009
  LoadShardBlock: 40.715 (3)
  PetaboxLoader3.datanode: 61.322 (4)
  load_resource: 82.89
  PetaboxLoader3.resolve: 59.196
*/