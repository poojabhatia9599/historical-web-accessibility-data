YUI.add("mjata-binder",function(e,t){"use strict";function o(){this._mjataBinding=[]}var n=e.Mjata.Bind.Model2Dom,r=e.Mjata.ModelStore,i=e.Lang,s=i.isFunction;o._NON_ATTRS_CFG=["mjataAutoBind"],o.prototype={mjataAutoBind:!0,mjataBind:function(t,i,o){if(!t)return!1;!i&&s(this.get)&&(i=this.get("container"));if(!i)return!1;var u,a,f;if(t._isYUIModel||t._isYUIModelList){u=r.add(t);if(!u)return!1}return this._mjataBinding.push(n.bind(t,i,o)),o=o||{},e.Object.owns(o,"mjataAutoBind")?f=o.mjataAutoBind:f=this.mjataAutoBind,f?(t._isYUIModelList?a=t.model:s(t)&&(a=t.prototype.model),s(a)&&this._mjataBinding.push(n.bind(a.NAME,i,o)),!0):!0},mjataUnbind:function(){e.each(this._mjataBinding,function(e){e.unbind()}),this._mjataBinding=[]}},e.namespace("Mjata").Binder=o},"@VERSION@",{requires:["mjata-bind-model2dom"]});
