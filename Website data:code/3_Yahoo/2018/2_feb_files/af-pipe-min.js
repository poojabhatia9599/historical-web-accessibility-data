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

YUI.add("af-pipe",function(e,t){"use strict";function k(){this._items=[]}function L(){this._item=null}function A(r){var i=this;i._host=r.host,i._cfg=e.merge(p,n.get("pipe")),e.stamp(i),i._channel=r.pipe&&r.pipe.channel||i._host&&(i._host.pipeChannel||i._host.get("pipeChannel")),i._dataAdapterFn=r.pipe&&r.pipe.dataAdapterFn||i._host&&(i._host.pipeDataAdapterFn||i._host.get("pipeDataAdapterFn")),i._meta={channel:i._channel},i._publishEvents(),e.Af.Beacon&&i.on([T,x],function(n){var r=i._cfg.beacon_types;r[n.type]&&e.Af.Beacon.error(t,i._meta,e.merge({code:n.type},n.pipe))})}var n=e.Af.Config,r=e.Lang,i=e.Array,s=e.Af.Utils,o=n.isFeatureOn("pipedebug"),u=r.isFunction,a=r.isNumber,f=r.isObject,l=r.isValue,c="lastUpdated",h="noseq",p={beacon_types:{error:!0,idle:!0},msg_maxidle:3e5,msg_throttle:2e3,seq_algo:c},d={},v="host-missing-seq",m="invalid-seq",g="open-failed",y="close-failed",b="ts-outoforder",w=null,E=!0,S="close",x="error",T="idle",N="open",C="message";d[h]=k,k.prototype={empty:function(){return!this._items.length},pop:function(e,t){var n=this._items;return this._items=[],t&&t(w,n)},push:function(e,t){return this._items.push(e),t&&t(w)}},d[c]=L,L.prototype={empty:function(){return!this._item},pop:function(e,t){var n=this,r=n._item;return!r||!e?t&&t(w,w):(n._item=w,e.lastUpdatedTs&&r.lastUpdatedTs&&r.lastUpdatedTs>=e.lastUpdatedTs?t&&t(w,[r]):e.lastUpdated&&r.lastUpdated&&r.lastUpdated>=e.lastUpdated?t&&t(w,[r]):t&&t(w,w))},push:function(e,t){var n,r,i=this;return e?i._item?(e.lastUpdatedTs&&i._item.lastUpdatedTs?(n=i._item.lastUpdatedTs,r=e.lastUpdatedTs):e.lastUpdated&&i._item.lastUpdated&&(n=i._item.lastUpdated,r=e.lastUpdated),r?n>r?t&&t({code:b,message:n+">"+r}):(n===r?i._item=e:n<r&&(i._item=s.objectMerge(i._item,e)),t&&t(w)):t&&t({code:m,message:"invalid msg. algo=lastUpdated"})):(i._item=e,t&&t(w)):t&&t(w)}},A.addMessageParser=function(t,n){e.Af.Comet.addParser(t,n)},A.NS="pipe",A.prototype={open:function(t){t=e.merge({delay:0},t);var n=Math.max(0,t.delay-3e4),r=e.Lang.now(),i,s=this;n>0?(i=r+n,s._delayTimer&&i<s._delayTimer.when&&(s._delayTimer.cancel(),s._delayTimer=w),s._delayTimer||(s._delayTimer=e.later(n,s,s._open,[t]),s._delayTimer.when=i)):s._open(t)},close:function(){var e=this;e._delayTimer&&(e._delayTimer.cancel(),e._delayTimer=w),e._idleTimer&&(e._idleTimer.cancel(),e._idleTimer=w),e._io&&(e._io.close(),e._io=w)},config:function(t){this._cfg=e.merge(p,n.get("pipe"),t)},destroy:function(){this.close()},_getSeqId:function(){var t=this,n=t._host,r,i=e.Af.Comet.parseLastUpdated;if(t._cfg.seq_algo===c){r={lastUpdatedTs:i(t.lastUpdatedTs||n&&(n.lastUpdatedTs||n.get("lastUpdatedTs"))),lastUpdated:i(t.lastUpdated||n&&(n.lastUpdated||n.get("lastUpdated")))};if(a(r.lastUpdatedTs)||a(r.lastUpdated))return r}return w},_setIdleTimer:function(){var t=this;t._idleTimer&&t._idleTimer.cancel(),t._idleTimer=e.later(t._cfg.msg_maxidle,w,function(){t._fireEvent(T,{idleTime:t._cfg.msg_maxidle})})},_open:function(){var t=this,n=t._cfg.seq_algo;if(n!==h&&t._getSeqId()===w){t._fireEvent(x,{code:v,message:"algo="+n});return}t._delayTimer&&(t._delayTimer.cancel(),t._delayTimer=w),t._io||(t._io=e.Af.Comet.open(t._channel),t._io.on("open",function(n){t._meta.clientId=n.clientId,t._fireEvent(N)}),t._io.on("close",function(){t._msgQ=w,t._fireEvent(S)}),t._io.on("message",t._onMessage,t),t._io.on("error",t._onError,t))},_onError:function(e){e.code==="subscribe"?this._fireEvent(x,{code:g,message:e.message,clientId:e.clientId}):e.code==="unsubscribe"&&this._fireEvent(x,{code:y,message:e.message,clientId:e.clientId})},_onMessage:function(e){var t=this,n;t._msgQ||(n=d[t._cfg.seq_algo]||d[h],t._msgQ=new n),t.throttled_pop=t.throttled_pop||s.throttle(function(){if(!t._msgQ||t._msgQ.empty())return;t._msgQ.pop(t._getSeqId(),function(e,n){if(e)return;if(!n||!n.length)return;var r={},o,u;i.each(n,function(e){r=s.objectMerge(r,e.data),o=e.lastUpdatedTs,u=e.lastUpdated}),l(o)&&(r.lastUpdatedTs=o),l(u)&&(r.lastUpdated=u),t._fireEvent(C,{data:r})})},t._cfg.msg_throttle),i.each(e.messages,function(n){if(!n)return;t._setIdleTimer(),t._msgQ&&t._msgQ.push({lastUpdatedTs:n.lastUpdatedTs,lastUpdated:n.lastUpdated,data:n.data},function(e){e?t._fireEvent(x,e):t.throttled_pop()})})},_fireEvent:function(e,t){this.fire(e,{pipe:t||{}}),o&&console&&console.log&&console.log("pipe event:",this._meta,e,t||"")},_publishEvents:function(){var e=this;e.publish(S,{emitFacade:E}),e.publish(x,{defaultFn:e._defaultErrFn,emitFacade:E}),e.publish(T,{defaultFn:e._defaultIdleFn,emitFacade:E}),e.publish(N,{emitFacade:E}),e.publish(C,{defaultFn:e._defaultMessageFn,emitFacade:E})},_defaultErrFn:function(e){},_defaultIdleFn:function(){this.close()},_defaultMessageFn:function(t){var n=this,r={},i=n._host,o=n._dataAdapterFn,a=t.pipe.data;if(!a)return;i&&u(i.setAttrs)?(e.Object.each(a,function(e,t){var n=i.get(t);f(n)?r[t]=s.objectMerge(n,e):r[t]=e}),o&&(r=o(r,i)),i.setAttrs(r)):i||(a.lastUpdatedTs&&(n.lastUpdatedTs=a.lastUpdatedTs),a.lastUpdated&&(n.lastUpdated=a.lastUpdated))}},e.augment(A,e.EventTarget,E,null,{emitFacade:E}),e.namespace("Af").Pipe=A},"@VERSION@",{requires:["af-beacon","af-comet","af-config","af-utils","event-custom-base"]});


}
/*
     FILE ARCHIVED ON 20:18:54 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:42:32 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 510.573
  exclusion.robots: 0.122
  exclusion.robots.policy: 0.114
  cdx.remote: 0.059
  esindex: 0.008
  LoadShardBlock: 466.188 (3)
  PetaboxLoader3.datanode: 483.37 (5)
  load_resource: 85.323 (2)
  PetaboxLoader3.resolve: 54.991 (2)
*/