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

(window.webpackJsonp=window.webpackJsonp||[]).push([["PushNotifications"],{"./src/graphql/operations/RegisterWebPushToken.json":function(e){e.exports={id:"197650c1946c"}},"./src/lib/timezone/index.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"e",function(){return c}),n.d(t,"d",function(){return u}),n.d(t,"f",function(){return d}),n.d(t,"g",function(){return l}),n.d(t,"c",function(){return f});var r=n("./src/lib/constants/index.ts"),i=n("./src/reddit/models/PostCreationForm/index.ts"),s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(c){i=!0,s=c}finally{try{!r&&a.return&&a.return()}finally{if(i)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const o="America/Los_Angeles",a=()=>{let e;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}return"Asia/Calcutta"===e&&(e="Asia/Kolkata"),e||void 0},c=e=>{const t=Math.abs(e),n=t%60;return`${e>0?"-":"+"}${("0"+Math.floor(t/60)).slice(-2)}:${("0"+n).slice(-2)}`},u=(e,t)=>{const n=t||Date.now(),i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1,timeZone:e};let o="";try{o=new Intl.DateTimeFormat("en-US",i).format(new Date(n))}catch(y){return}var a=o.replace(", "," ").split(" "),c=s(a,3);const u=c[0],d=c[1],l=c[2];var f=u.trim().split("/").map(Number),p=s(f,3);const b=p[0],g=p[1],m=p[2];var v=d.trim().split(":").map(Number),j=s(v,3);const O=j[0],h=j[1],k=j[2],w=Date.UTC(m,b-1,g,O,h,k),_=new Date(n).setMilliseconds(0)-w;return{abbreviation:l,offset:Math.round(_/r.kb)}},d=e=>{var t=e.slice(0,19).split("T"),n=s(t,2);const r=n[0],i=n[1];var o=r.split("-").map(Number),a=s(o,3);const c=a[0],u=a[1],d=a[2];var l=i.split(":").map(Number),f=s(l,3);const p=f[0],b=f[1];var g=f[2];return new Date(c,u-1,d,p,b,void 0===g?0:g)},l=e=>{const t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,16)},f=e=>{if(e&&e.eventInfo){var t=e.eventInfo;const n=t.eventStart,s=t.eventEnd;return{startDate:l(new Date(n*r.Wb)),endDate:l(new Date(s*r.Wb)),submitTime:i.i.Now,timezoneName:a()||o}}}},"./src/reddit/actions/notifications/index.ts":function(e,t,n){"use strict";n.r(t);var r=n("./src/app/strings/index.ts"),i=n("./src/config.ts"),s=n("./src/lib/browser/isIncognito.ts"),o=n("./src/lib/constants/index.ts"),a=n("./src/lib/localStorageAvailable/index.ts"),c=n("./src/reddit/actions/notifications/constants.ts"),u=n("./src/reddit/actions/notifications/utils.ts"),d=n("./src/reddit/actions/toaster.ts"),l=n("./src/graphql/operations/RegisterWebPushToken.json"),f=n("./src/lib/makeGqlRequest/index.ts"),p=n("./src/lib/timezone/index.ts");var b=n("./src/reddit/helpers/trackers/notifications.ts"),g=n("./src/reddit/models/Toast/index.ts"),m=n("./src/reddit/selectors/experiments/dnPrePrompt.ts"),v=n("./src/reddit/selectors/notificationPrefs.ts"),j=n("./src/reddit/selectors/user.ts");n.d(t,"getBrowserNotificationPermission",function(){return h}),n.d(t,"resetPermissionRequestClosed",function(){return k}),n.d(t,"isBrowserSubscribedForPushNotifications",function(){return w}),n.d(t,"initializeServiceWorkerChannel",function(){return S}),n.d(t,"requestNotificationsPermissions",function(){return P}),n.d(t,"subscribeForPNs",function(){return N}),n.d(t,"unsubscribeFromPNs",function(){return x});const O=4*o.N,h=()=>{const e=Object(a.a)()&&"1"===localStorage.getItem("notification-permission-request-closed");return"granted"===Notification.permission?c.a.Granted:"denied"===Notification.permission?c.a.Denied:e?c.a.Closed:c.a.Default},k=()=>!!Object(a.a)()&&(localStorage.removeItem("notification-permission-request-closed"),!0),w=async()=>{let e;try{e=await navigator.serviceWorker.register("/sw.js")}catch(t){return!1}return null!==await e.pushManager.getSubscription()},_=e=>{navigator.serviceWorker.controller&&navigator.serviceWorker.controller.postMessage({command:"registerClient",v2EventBoilerPlate:b.b(e)})};let y=!1;const S=async e=>{if(y)return;if(y=!0,Object(u.a)(e)!==c.f.NotificationsSupported)return;try{await navigator.serviceWorker.register("/sw.js")}catch(t){return}navigator.serviceWorker.addEventListener("message",t=>{"registerWithServiceWorker"===t.data.command&&_(e)}),_(e)},P=(e,t)=>async(n,r,i)=>{const o=r();if(await Object(s.a)())return;const d=Object(m.a)(o);if(!Object(j.F)(o)&&!d)return;if(await S(o),Object(a.a)()){const t=localStorage.getItem("push-token-last-refresh-ms"),n=(new Date).getTime();if(!e&&t&&parseInt(t)+O>n)return;localStorage.setItem("push-token-last-refresh-ms",n.toString())}b.l(o);const l=Object(u.a)(o);if(l===c.f.BrowserUnsupported)return void b.k(o,"unsupported_browser");if(l===c.f.LocalStorageUnavailable)return void b.k(o,"local_storage_unavailable");if(l===c.f.NotAllRequiredAPIsSupported)return void b.k(o,"not_all_push_apis_supported");if("denied"===Notification.permission)return n(Object(c.p)()),void b.k(o,"already_denied");if("granted"===Notification.permission)return n(Object(c.q)()),void n(N());const f=localStorage.getItem("notification-permission-request-closed");if(!t&&f&&"1"===f)return void b.k(o,"notification_permission_request_closed");const p=localStorage.getItem(c.i);if(t||!p||p!==c.j)if(t||!d||Object(v.c)(o)||(n(Object(c.s)()),!Object(m.c)(d)))switch(n(Object(c.r)()),b.j(o),await Notification.requestPermission()){case"granted":n(Object(c.q)()),n(N()),b.c(o);break;case"denied":n(Object(c.p)()),b.d(o);break;default:n(Object(c.p)()),b.e(o),localStorage.setItem("notification-permission-request-closed","1")}else b.i(r());else b.k(o,"preprompt_closed")},N=e=>async(t,n,s)=>{const o=n();try{const c=await navigator.serviceWorker.register("/sw.js");let u=await c.pushManager.getSubscription();if(!u){const e={userVisibleOnly:!0,applicationServerKey:(e=>{const t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length);for(let i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r})(i.a.pushNotificationApplicationServerKey)};u=await c.pushManager.subscribe(e)}const m=await((e,t,n)=>{const r={pushToken:JSON.stringify(n),timezoneName:Object(p.b)()||p.a,timestamp:(new Date).toISOString(),language:"en_us"};return Object(f.a)(e,Object.assign({},l,{variables:r}))})(s.gqlContext(),n(),u),v=m.body.data.registerWebPushToken;if(m.ok){if(v&&!v.ok)b.k(o,"registration_failed_in_gql");else if(b.m(o),e){const e=Object(j.P)(n());t(Object(d.e)({kind:g.b.SuccessCommunity,text:Object(r.a)(e,"settings.page.saveRequestSuccess")}))}}else b.k(o,"registration_failed_generally")}catch(a){b.k(o,"registration_failed_uncaught_exception"),console.error(a)}},x=e=>async(t,n,i)=>{try{const i=await navigator.serviceWorker.register("/sw.js"),o=await i.pushManager.getSubscription();if(o&&(o.unsubscribe(),e)){const e=Object(j.P)(n());t(Object(d.e)({kind:g.b.SuccessCommunity,text:Object(r.a)(e,"settings.page.saveRequestSuccess")}))}}catch(s){}}},"./src/reddit/helpers/trackers/notifications.ts":function(e,t,n){"use strict";n.d(t,"j",function(){return c}),n.d(t,"c",function(){return u}),n.d(t,"d",function(){return d}),n.d(t,"e",function(){return l}),n.d(t,"i",function(){return f}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return b}),n.d(t,"l",function(){return m}),n.d(t,"m",function(){return v}),n.d(t,"k",function(){return j}),n.d(t,"b",function(){return O}),n.d(t,"a",function(){return y}),n.d(t,"f",function(){return q});var r=n("./src/reddit/models/PushNotification/index.ts"),i=n("./src/reddit/selectors/telemetry.ts"),s=n("./src/telemetry/index.ts");const o=e=>Object.assign({},i.defaults(e),{noun:"desktop_notification_permissions"}),a=e=>Object.assign({},i.defaults(e),{noun:"desktop_notif_preprompt_permissions"}),c=e=>{Object(s.a)(Object.assign({},o(e),{action:"view",source:"popup"}))},u=e=>{Object(s.a)(Object.assign({},o(e),{action:"allow",source:"popup"}))},d=e=>{Object(s.a)(Object.assign({},o(e),{action:"block",source:"popup"}))},l=e=>{Object(s.a)(Object.assign({},o(e),{action:"close",source:"popup"}))},f=e=>{Object(s.a)(Object.assign({},a(e),{action:"view",source:"popup"}))},p=e=>{Object(s.a)(Object.assign({},a(e),{action:"allow",source:"popup"}))},b=e=>{Object(s.a)(Object.assign({},a(e),{action:"close",source:"popup"}))},g=(e,t,n)=>Object.assign({},i.defaults(e),{actionInfo:i.actionInfo(e,{success:t,reason:n}),noun:"desktop_push_token"}),m=e=>{Object(s.a)(Object.assign({},g(e,!0),{action:"request",source:"notifications"}))},v=e=>{Object(s.a)(Object.assign({},g(e,!0),{action:"register",source:"notifications"}))},j=(e,t)=>{Object(s.a)(Object.assign({},g(e,!1,t),{action:"bail",source:"notifications"}))},O=e=>Object.assign({},(e=>Object.assign({},i.defaults(e),{noun:"desktop_push_notification"}))(e),{notification:i.notification(e,void 0,void 0),action:void 0,source:"notifications",correlationId:void 0}),h=e=>(t,n)=>{Object(s.a)(Object.assign({},i.defaults(t),{action:(e=>e?"enable":"disable")(n),noun:e,source:"notifications"}))},k=h("chat_messages"),w=h("chat_requests"),_=h("comment_replies"),y=h("desktop_notification_permissions"),S=h("post_replies"),P=h("private_messages"),N=h("trending_posts"),x=h("username_mention"),q=(e,t,n)=>{switch(t){case r.a.ChatMessages:k(e,n),w(e,n);break;case r.a.TrendingPosts:N(e,n);break;case r.a.UnreadMessages:_(e,n),S(e,n),P(e,n),x(e,n)}}},"./src/reddit/models/PushNotification/index.ts":function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e.ChatMessages="chatMessages",e.TrendingPosts="trendingPosts",e.UnreadMessages="unreadMessages"}(r||(r={}))},"./src/reddit/selectors/experiments/dnPrePrompt.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return a});var r=n("./src/reddit/constants/experiments.ts"),i=n("./src/reddit/helpers/chooseVariant/index.ts");const s=e=>{const t=Object(i.b)(e,{experimentEligibilitySelector:i.a,experimentName:r.o});return Object(r.vb)(t)?void 0:t},o=e=>e===r.n.DarkPrePrompt||e===r.n.DarkSystemDialogue,a=e=>e===r.n.DarkPrePrompt||e===r.n.PrePrompt}}]);
//# sourceMappingURL=PushNotifications.feab70f95018e7f2300a.js.map

}
/*
     FILE ARCHIVED ON 01:34:28 May 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:00:13 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.056
  cdx.remote: 0.098
  esindex: 0.011
  LoadShardBlock: 990.339 (6)
  PetaboxLoader3.datanode: 902.992 (8)
  load_resource: 360.997 (2)
  PetaboxLoader3.resolve: 217.201 (2)
*/