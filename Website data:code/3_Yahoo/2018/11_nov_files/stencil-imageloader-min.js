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

YUI.add("stencil-imageloader",function(e,t){"use strict";function v(e){return e.offsetParent===null||e.offsetHeight===0}function m(t){this.constructor.superclass.constructor.call(this,t);var n=p.documentElement,r=e.DOM.docScrollY(n)+e.DOM.winHeight(n),f=e.DOM.docScrollX(n)+e.DOM.winWidth(n),l=t.host,c;m.checkPosition=null!==p.body.getAttribute("data-imageloader-checkposition"),l.all&&l.all("."+i).each(function(e){e.getDOMNode()&&!e.hasClass(o)&&!e.hasClass(u)&&!e.hasClass(a)&&(e.getY()<=r&&e.getX()<=f?v(e.getDOMNode())?e.addClass(s):m.loadImage(e):(c=e._yuid||e.generateID(),m.imgs[c]=e))},this)}var n="stencil-plugin-imageloader",r=Modernizr,i="ImageLoader",s=i+"-Hidden",o=i+"-Loaded",u=i+"-Loading",a=i+"-Delayed",f=i+"-Group",l=2e3,c=100,h=0,p=e.config.doc,d=e.config.win;if(e.one("html").hasClass(n))return;e.extend(m,e.Stencil.BasePlugin,{},{NS:"StencilImageLoader",requiresInit:!0,defaultTriggerEvents:[],initOnRootOnly:!0,imgs:{},loadImage:function(e){if(!e)return;if(!e._node){e._yuid&&delete this.imgs[e._yuid];return}var t=e;!e.hasClass(o)&&!e.hasClass(u)&&(t.test("img")?(e._error=0,this.swapSrc(e)):(t=e.all("."+f),t.each(this.swapSrc,this)),!e.hasClass(a)&&!e.hasClass(s)&&e.removeClass(i),t.on("load",function(){e.setStyle("opacity",1),e.removeClass(a),e.removeClass(u),e.removeClass(s),e.removeClass(i),e.addClass(o),this.imgs[e._yuid]&&delete this.imgs[e._yuid]},this),t.on("error",function(t){var n=t.target,r,i;n._error||(e._error+=1,n.removeClass(u),i=n.get("src"),r=new Image,r.onload=function(){n.setStyle("backgroundImage","url("+i+")"),m.swapSrc(n),m.imgs[n._yuid]&&delete m.imgs[n._yuid]},r.onerror=function(){},r.src=i)},this))},swapSrc:function(e){var t="https://web.archive.org/web/20181101031258/http://l.yimg.com/g/images/spaceball.gif",n=e.getStyle("backgroundImage"),i=n&&n!=="none"?n:e.getData("imageloader-src");/url\(["']?(.*?)["']?\)/.test(i)&&(i=RegExp.$1),i&&i.length>0&&i!==e.get("src")&&(/\.svg$/.test(i)?r&&r.svg?e.set("src",i):(e.set("src",e.getData("imageloader-fallback")||t),e.addClass(u)):(e.set("src",i),e.addClass(u)),e.setStyle("backgroundImage",""))}}),e.on("domready",function(){e.on(["scroll","resize"],function(){var t=+(new Date),n=h,r,i,s,o,u,a;if(n===0||t-n>=c){h=t,s=p.documentElement,o=e.DOM.docScrollY(s)+e.DOM.winHeight(s),u=e.DOM.docScrollX(s)+e.DOM.winWidth(s),a=m.imgs;for(i in a)if(a.hasOwnProperty(i)){r=a[i];if(!r.getDOMNode()){delete a[i];continue}m.checkPosition?r.getY()<=o&&r.getX()<=u&&m.loadImage(r):m.loadImage(r)}}})}),e.one(d).on("load",function(){setTimeout(function(){e.all("."+s).each(m.loadImage,m)},l)}),e.one("body").on("imageloader:delayed",function(t){var n,r="."+a;e.Lang.isArray(t)?n=e.Array.reduce(t,new e.NodeList,function(e,t){return e.concat(t.all(r))}):t instanceof e.NodeList?(n=new e.NodeList,t.each(function(e){n=n.concat(e.all(r))})):n=t&&t.all(r),n&&n.size()&&n.each(m.loadImage,m)}),e.Stencil.registerPlugin(m,"ImageLoader")},"@VERSION@",{requires:["stencil-base","yui-base","dom-base","dom-screen","node-base","node-screen","node-style","node-pluginhost","array-extras"]});


}
/*
     FILE ARCHIVED ON 03:12:58 Nov 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:41:31 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 824.14
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.054
  cdx.remote: 0.053
  esindex: 0.009
  LoadShardBlock: 214.838 (3)
  PetaboxLoader3.datanode: 205.447 (5)
  PetaboxLoader3.resolve: 214.415 (3)
  load_resource: 245.087 (2)
*/