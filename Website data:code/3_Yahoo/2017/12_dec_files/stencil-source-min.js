YUI.add("stencil-source",function(e,t){"use strict";function i(e){this.constructor.superclass.constructor.call(this,e)}var n,r;r=function(e,t){!e.skipInsert&&typeof e.content=="string"&&(e.node.set("innerHTML",e.content),e.node.setData("source-loaded",!0)),t&&t(e)},n=function(){},n.prototype={execute:function(e,t,n){(!e.getData("source-loaded")||t.force)&&this.fetch(e,n)},callback:function(e){e.node.hasAttribute("data-tmpl")?this.renderTemplate(e):r(e)},renderTemplate:function(t){var n,i,s=t.node,o={};n=s.getAttribute("data-tmpl"),e.use("mjata-template","mjata-util",e.bind(function(e){i=this.parseAttrs(n),i&&e.Mjata.Template.render(i.change,t.content,null,function(e,t){r({node:s,content:t},o.callback)})},this))},parseAttrs:function(t){return t?e.Mjata.Util.strParseKV(t):null}},e.Stencil.BaseSource=n,e.extend(i,e.Stencil.BasePlugin,{execute:function(t,n){var r=e.Stencil.Hosts.Source;n=n||{},t||(t=e.Stencil.getNodeList(this._node)),t.each(function(t){var i;i=t.getAttribute("data-source-plugin"),i&&(r[i]?r[i].execute(t,n,this.callback):e.use("stencil-source-"+i,e.bind(function(e){r[i]&&r[i].execute(t,n,this.callback)},this)))},this)}},{NS:"StencilSource"}),e.augment(i,e.Stencil.BaseSource),e.Stencil.registerPlugin(i,"Source"),e.Stencil.Hosts.Source=e.augment({},e.Plugin.Host,!1,null)},"@VERSION@",{requires:["node","oop","pluginhost","mjata-util"]});
