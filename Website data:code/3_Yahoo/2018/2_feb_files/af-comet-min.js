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

YUI.add("af-comet",function(e,t){"use strict";function j(e){var t,n=e.length,r=0;for(t=0;t<n;t++)r+=e[t];return Math.round(r/n)}function F(e){var t=Math.floor(e.length/2);return e.length%2?e[t]:Math.round((e[t-1]+e[t])/2)}function I(e){var r,i,s=a?a.trackLatency:u.trackLatency;if(!s||l||!c)return;e=parseInt(e,10);if(typeof e!="number")return;f.push(e),i=parseInt(a&&a.latencySampleSize,10)||u.latencySampleSize,f.length>=i&&(l=!0,f.sort(function(e,t){return e-t}),r=F(f),c.perf(t,{code:"onepushLatency",time:r,clientId:n[M]&&n[M].getClientId(),sampleSize:f.length,min:f[0],max:f[f.length-1],median:r,mean:j(f)}),f=[])}function q(e){return a.publicCometHost===a.privateCometHost?M:e.indexOf("*")>0?O:M}function R(t,n,i){var s=r[t],o=e.merge({clientId:s.clientId},i);p.each(s.proxies,function(t){t.fire(n,o)})}function U(e,t){var n=r[t];n.totalTries=n.totalTries?n.totalTries+1:1,n.tries=n.tries?n.tries+1:1,n.tries<=a.subscribeMaxTries&&n.totalTries<=a.subscribeMaxTotalTries&&e.subscribe(t)}function z(e){p.each(r,function(r,i){q(i)===e&&(r.state=k,r.tries=0,r.clientId="",U(n[e],i))})}function W(e){var t,s,o,u=[];for(t=0,s=i.length;t<s;t++)o=i[t],q(o)===e?r[o].state!==k&&r[o].state!==L&&(r[o].state=k,U(n[e],o)):u.push(o);i=u}function X(e){var i=n[e],s={};i.addListener(N,function(r){r.successful&&(s[e]?c&&c.info(t,{code:"rehandshake",type:e},y):s[e]=!0,z(e),W(e))}),i.addListener(x,function(t){var n=t.subscription,s=r[n],o;if(!t.successful){if(E.test(t.error))return;s&&(s.state=A),o=S.test(t.error);if(!o||s.tries>=a.subscribeMaxTries||s.totalTries>=a.subscribeMaxTotalTries){R(n,B,{code:"subscribe",message:t.error||"",clientId:t.clientId});return}U(i,n);return}s||(s=r[n]={state:C,proxies:{}}),s.state=L,s.clientId=t.clientId,R(n,D,{clientId:t.clientId,tries:s.tries}),i.addListener(n,function(t){var r=d.find(t),i;i=r&&r.parseFn(t),i&&R(n,H,{clientId:t.clientId,messages:i})})}),i.addListener(T,function(t){var n=t.subscription,i=r[n];if(!t.successful){R(n,B,{code:"unsubscribe",message:t.error||"",clientId:t.clientId});return}i&&(i.tries=0,i.state=A,R(n,P,{clientId:t.clientId}),delete r[n])})}function V(r){if(n[r])return;if(a.shutdown){c&&h.urlParseBoolean(a.trackShutdown)&&c.info(t,{code:"shutdown"},y);return}if(!v(e.initComet)){c&&c.error(t,{},{code:"nocomet"},y);return}var i=n[r]=e.initComet(a[r+"CometHost"]);i.config(["subscribe","jsonpTimeout"],a.subscribeTimeout),X(r),i.getClientState()===_&&W(r),c&&h.urlParseBoolean(a.trackInitComet)&&c.info(t,{code:r+"Comet"},y)}function $(t){var s=r[t],o=q(t),u=n[o];u&&s.state!==L&&s.state!==k&&(u.getClientState()===_?(s.tries=0,s.state=k,U(u,t)):e.Array.indexOf(i,t)<0&&i.push(t))}function J(e){this.id=++s,this.channel=e}var n={},r={},i=[],s=0,o="https://web.archive.org/web/20180131201854/http://comet.yahoo.com/comet",u={publicCometHost:o,privateCometHost:o,shutdown:!1,subscribeMaxTries:1,subscribeTimeout:5e3,trackInitComet:!1,trackShutdown:!1,trackLatency:!0,latencySampleSize:50},a,f=[],l=!1,c=e.Af.Beacon,h=e.Af.Utils,p=e.Object,d,v=e.Lang.isFunction,m=e.Lang.isString,g=function(e){return e instanceof RegExp},y={once:!0},b=/^\d+$/,w=/^(\d+)\-(\d+)\-(\d+) (\d+):(\d+):(\d+)$/,E=/^408:\d+:jsonp timeout$/,S=/^500::jsonp failed$/,x="/meta/subscribe",T="/meta/unsubscribe",N="/meta/handshake",C=null,k="opening",L="open",A="closed",O="private",M="public",_="connected",D="open",P="close",H="message",B="error";(function(){function n(e){var t=window.location.protocol;return e&&(t.indexOf("https")===0?e=e.replace(/http:/,"https:"):e=e.replace(/https:/,"http:")),e}var r=e.Af.Config;a=e.merge(u,r.get("onepush"),r.get("comet")),a.subscribeMaxTotalTries=a.subscribeMaxTotalTries||a.subscribeMaxTries*2,a.publicCometHost=n(a.publicCometHost),a.privateCometHost=n(a.privateCometHost)})(),d={parsers:[],parseLastUpdated:function(e){if(!e)return C;var t,n;return b.test(e)?(t=parseInt(e,10),n="D"+t,n.length<14&&(t*=1e3),t):(t=e.match(w),t?(t=Array.prototype.slice.call(t),t.shift(),t[1]=parseInt(t[1],10)-1,(new Date(t[0],t[1],t[2],t[3],t[4],t[5])).getTime()):C)},add:function(e,t){return e&&m(e)&&(e=new RegExp(e)),g(e)&&v(t)?(this.parsers.unshift({regex:e,parseFn:t}),!0):!1},find:function(e){var t,n,r=this.parsers.length;if(e)for(n=0;n<r;n++){t=this.parsers[n];if(t.regex&&t.regex.test(e.channel))return t}return C},addDefaults:function(){this.add(/^\/[\/\.\w\d]+$/,function(n){return!n||!n.data?C:e.Lang.isArray(n.data)?n:[n]}),this.add(/^\/\w*\/?sports\/games\/[\w\d\.]+$/,function(n){var r,i;try{r=e.JSON.parse(n.data)}catch(s){return C}return!r||n.channel!==r.chn?C:(i=[],e.Array.each(r.updates,function(t){var n=d.parseLastUpdated(t.lastUpdatedTs),r=d.parseLastUpdated(t.lastUpdated),s=(new Date).getTime(),o={};t.update&&t.update.length&&(e.Array.each(t.update,function(e){e._op==="up"&&h.objectSetValue(o,e.key,e.value)}),i.push({data:o,seq:t.seq,time:t.time,lastUpdated:r,lastUpdatedTs:n}));try{n?I(s-n):r&&I(s-r)}catch(u){}}),i)})}},d.addDefaults(),J.prototype={close:function(){var e=this,t=e.channel,i=r[t];e.fire(P),e.detachAll(),i&&(delete i.proxies[e.id],p.size(i.proxies)===0&&(i.state===L||i.state===k)&&n[q(t)].unsubscribe(t))}},e.augment(J,e.EventTarget,!0,C,{emitFacade:!0}),e.namespace("Af").CometChannelProxy=J,e.namespace("Af").Comet={addParser:function(e,t){return d.add(e,t)},open:function(e){if(!e)return C;var t;V(q(e)),r[e]=r[e]||{state:C,proxies:{}},t=new J(e),r[e].proxies[t.id]=t;switch(r[e].state){case L:window.setTimeout(function(){t.fire(D,{clientId:r[e].clientId})},0);break;case k:break;default:$(e)}return t},parseLastUpdated:d.parseLastUpdated}},"@VERSION@",{requires:["af-beacon","af-config","comet","event-custom-base","json-parse"]});


}
/*
     FILE ARCHIVED ON 20:18:54 Jan 31, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:42:23 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 100.382
  exclusion.robots: 0.098
  exclusion.robots.policy: 0.09
  cdx.remote: 0.049
  esindex: 0.008
  LoadShardBlock: 48.587 (3)
  PetaboxLoader3.datanode: 74.233 (5)
  load_resource: 144.536 (2)
  PetaboxLoader3.resolve: 90.455 (2)
*/