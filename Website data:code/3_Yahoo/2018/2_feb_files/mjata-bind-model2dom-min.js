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

YUI.add("mjata-bind-model2dom",function(e){"use strict";function g(e,t){return e&&e._node&&e.empty().setHTML(t)}function y(t,n){var r=t._node,i=e.Node.create(n);r.parentNode.replaceChild(i._node,r),t._node=i._node}function b(e,t){var n=e&&t&&a(e.getData)&&e.getData(t);return n&&u.strParseKV(n)||{}}function w(e){var t,r,i;return e._isYUIModel?t="data-model":e._isYUIModelList&&(t="data-list"),r=e.constructor.NAME,i=e.get&&e.get("id"),!t||!r||!i?n:"["+t+'="'+r+"@"+i+'"]'}function E(e,t,n){if(!e)return;var r;switch(e.get("tagName")){case"A":e.set("href",n);break;case"IMG":e.set("src",n);break;case"INPUT":r=e.get("type"),"radio"===r||"checkbox"===r?n===e.get("value")?e.setAttribute("checked","checked"):e.removeAttribute("checked"):e.set("value",n);break;case"SELECT":e.set("value",n);break;default:e.setHTML(n)}}function S(t,n,r){var i=[];return t&&n&&t.all("[data-attr]").each(function(s){var o=s.getData("attr"),f=o.split("."),l=f.shift(),c=f.join("."),h,p;e.Object.owns(n,l)&&(h=c?u.objGet(n[l].prevVal,c):n[l].prevVal,p=c?u.objGet(n[l].newVal,c):n[l].newVal,u.objEqual(h,p)||(a(r)&&r(s,o,h,p),i.push(s)))}),i}function x(t,n){var r=n&&n["class"];t&&t.length&&r&&(t=e.all(t),t.addClass("SlowTrans").addClass(r),window.setTimeout(function(){try{t.removeClass(r)}catch(e){}},500))}function T(t){if(t._transaction&&t._transaction._mjatabind_processed)return;t._transaction&&(t._transaction._mjatabind_processed=!0);var n=e.Object.some(t.changed,function(e){return!u.objEqual(e.prevVal,e.newVal)});if(!n)return;var r=t.target,i=r.get("id"),s=v[i];s?v[i].changed=e.merge(s.changed,t.changed):v[i]={changed:t.changed,target:t.target},m||N()}function N(){m=window.setTimeout(function(){e.each(v,function(e){var n=e.target;o.eachBinding(n,function(i,s){var o=b(s,t),u=b(s,"bindcfg"),a=i.getContext(),f=i.options.callback||d,c;o.change?l(o.change,n.toJSON(),a,function(n,r){if(n){f(n);return}u.replace==="true"?y(s,r):g(s,r),c=S(s,e.changed),x(c,u),f()}):(c=S(s,e.changed,function(r,i,s,o){var u=b(r,t);u.change?l(u.change,n.toJSON([i]),a,function(t,n){if(t){f(t);return}g(r,n),f()}):(E(r,s,o),f())}),x(c,u))})}),m=null,v={}},250)}function C(e){var n=e.target,r=e.model,i,s,u;a(r.get)?s=r.get("id"):(i=n.model.prototype.idAttribute||"id",s=r[i]),u=w(r);if(!u)return;o.eachBinding(n,function(r,i){var s,o=r.options.callback||d;i.all(u).remove(!0),n.isEmpty()&&(s=b(i,t))&&s.placeholder?l(s.placeholder,{},r.getContext(),function(t,n){t||g(i,n),o()}):o()})}function k(e){var n=e.target,r=e.model,i=e.index;o.eachBinding(n,function(s,o){var u=b(o,t);if(!u.add)return;var f=a(r.toJSON)?r.toJSON():r,c=s.options.callback||d;l(u.add,f,s.getContext(),function(t,r){if(t){c(t);return}if(n.size()===1)g(o,r);else{var s=o.get("children").item(i);s?o.insertBefore(r,s):o.append(r)}c()})})}function L(e){var n=e.target;o.eachBinding(n,function(r,i){var s=b(i,t),o=r.options.callback||d,u=r.getContext();if(s.reset){l(s.reset,n.toJSON(),u,function(t,n){if(t){o(t);return}g(i,n),o()});return}if(n.isEmpty()){s.placeholder?l(s.placeholder,{},u,function(t,n){if(t){o(t);return}g(i,n),o()}):(g(i,""),o());return}})}function A(t,n,r){this.key=t,this.node=n||"body",this.options=r||{},this.guid=e.guid()}var t="tmpl",n=null,r=e.Lang,i=e.Mjata,s=i.ModelStore,o,u=i.Util,a=r.isFunction,f=r.isString,l=i.Template.render,c=e.Object.size,h={},p=!1,d=function(){},v={},m;A.prototype={getContext:function(){return a(this.options.ctx)?this.options.ctx.call():this.options.ctx||{}},isValid:function(){return f(this.node)||!!this.node._node},unbind:function(){this.node=n,this.options=n,h[this.key]&&(delete h[this.key][this.guid],c(h[this.key])===0&&delete h[this.key])}},o={_createBindKey:function(e){if(!e)return n;if(f(e))return e;if(a(e))return e.NAME||n;var t=e.constructor.NAME,r;return t?(a(e.get)&&(r=e.get("id")),r?t+"_"+r:t):n},_init:function(){if(p)return;s.after("*:change",T),s.after("*:remove",C),s.after("*:reset",L),s.after("*:add",k),p=!0},bind:function(e,t,r){var i=this._createBindKey(e),s;return i?(h[i]||(h[i]={}),s=new A(i,t,r),h[i][s.guid]=s,this._init(),s):n},unbind:function(){},isBound:function(e){var t=this._getBindings(e);return t&&c(t)>0},_getBindings:function(e){if(!e)return{};var t=this._createBindKey(e),n;return t?h[t]&&c(h[t])>0?h[t]:(n=e.constructor.NAME,n&&h[n]||{}):{}},eachBinding:function(t,r){if(!a(r))return;var i,s=w(t),o=[];if(!s)return;i=this._getBindings(t),e.each(i,function(t){if(t.isValid()){var i=e.one(t.node);i.all(s).each(function(e){r.call(n,t,e)}),i.test(s)&&r.call(n,t,i)}else o.push(t)}),e.each(o,function(e){e.unbind()})}},e.namespace("Mjata.Bind").Model2Dom=o},"@VERSION@",{requires:["mjata-model-store","mjata-template","mjata-util","node-base","node-core"]});


}
/*
     FILE ARCHIVED ON 13:43:05 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:43:43 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 165.156
  exclusion.robots: 0.141
  exclusion.robots.policy: 0.131
  cdx.remote: 0.062
  esindex: 0.011
  LoadShardBlock: 107.935 (3)
  PetaboxLoader3.resolve: 135.005 (5)
  PetaboxLoader3.datanode: 54.904 (5)
  load_resource: 107.696 (2)
*/