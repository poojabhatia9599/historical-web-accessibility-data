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

YUI.add("stencil-toggle",function(e){"use strict";function f(e){this.constructor.superclass.constructor.call(this,e)}var t="data-toggle-group-active",n="data-toggle-group",r="data-toggle-prevent-default",i="remove",s="toggle",o="replace",u={add:1,remove:1,toggle:1,replace:1},a;a=function(e,t,n){e.getAttribute(t)===n[0]?e.setAttribute(t,n[1]):e.setAttribute(t,n[0])},e.extend(f,e.Stencil.BasePlugin,{execute:function(e,t,n){var i=this._node,s;if(!t)return;if(n&&(i.get("tagName")==="A"&&i.getAttribute(r)!=="0"||i.getAttribute(r)==="1"))try{n.preventDefault()}catch(o){}for(s in t)t.hasOwnProperty(s)&&u[s]&&this.go(s,e,t[s])},go:function(r,i,o){var u;i||(i=e.Stencil.getNodeList(this._node)),this.processSources(i),i.each(function(i){u=null,r===s&&i.hasAttribute(n)&&(u=e.all("["+n+"="+i.getAttribute(n)+"]["+t+"]"),u.size()>0&&(u.removeAttribute(t),this.processTarget(u,r,o)));if(!u||u.indexOf(i)===-1)u&&i.setAttribute(t,1),this.processTarget(i,r,o)},this)},processTarget:function(t,n,r){var u,f,l;return e.Object.each(r,function(r,c){u=c==="classnames",typeof r=="string"&&(r=u?e.Lang.trim(r).split(","):[r]),n===o&&(u?t.setAttribute("className",""):t.setAttribute(c,""));if(c==="style")e.Object.each(r,function(r,o){var u,a,f,l;f=t.getStyle(o);for(u=0,a=r.length;u<a;u+=1){if(n===i){t.setStyle(o,"");break}if(n===s){l=e.one(document.createElement(t.get("tagName"))).setStyle(o,r[u]).getStyle(o);if(f!==l){t.setStyle(o,r[u]);break}}else t.setStyle(o,r[u])}},this);else if(u)for(f=0,l=r.length;f<l;f+=1)n===i?t.removeClass(r[f]):n===s?t.toggleClass(r[f]):t.addClass(r[f]);else n===i?t.removeAttribute(c):n===s?t instanceof e.NodeList?t.each(function(e){a(e,c,r)}):a(t,c,r):t.setAttribute(c,r[0])},this),this}},{NS:"StencilToggle",defaultTriggerEvents:["click"]}),e.Stencil.registerPlugin(f,"Toggle")},"@VERSION@",{requires:["stencil-base","yui-base","dom-base","node-base","node-style","node-pluginhost","event-focus","event-mouseenter","json-parse"]});


}
/*
     FILE ARCHIVED ON 00:38:23 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:48 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 269.37
  exclusion.robots: 0.124
  exclusion.robots.policy: 0.114
  cdx.remote: 0.057
  esindex: 0.009
  LoadShardBlock: 116.524 (3)
  PetaboxLoader3.datanode: 165.09 (5)
  load_resource: 170.141 (2)
  PetaboxLoader3.resolve: 116.242 (2)
*/