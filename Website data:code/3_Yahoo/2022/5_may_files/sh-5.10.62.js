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

!function(){var r="BrowserSubscriptionHelper",i=["chrome","chrome mobile"],p="error",f="info",n="pushNotifications",o="undefined",t="Unsupported Browser.",u="granted",a="denied",c="subscriptions",s="type",d="push",e="display-push-promos",l="js-push-subscribe",h="rapidnofollow",b="subscriptionFail";function g(e,n,i){this.init(e,n,i)}if(g.prototype={init:function(e,n,i){var r=this;r.beaconer=n,r.tracker=i,r.config={appServerPubKey:e.appServerPubKey,bucket:e.bucket,confirmationNotification:e.confirmationNotification||{},enableIndexedDbDurationBeacon:e.enableIndexedDbDurationBeacon||!1,enablePermissionChangeBeacon:e.enablePermissionChangeBeacon||!1,enableVapidMigration:e.enableVapidMigration||!1,overlay:e.overlay||{},resubscribeOnChurn:e.resubscribeOnChurn||!1,serviceWorkerScope:e.serviceWorkerScope||"/",serviceWorkerUrl:e.serviceWorkerUrl,spaceId:e.spaceId,subscriptionService:e.subscriptionService||{},supportedBrowsers:e.supportedBrowsers||{},userAgent:e.userAgent||{}},r.appServerPubKeyArr=r.urlB64ToUint8Array(e.appServerPubKey),e.delegatePromoButton&&r.addPromoButtonDelegator(),e.showPushSubscriptionPromos&&r.showPushSubscriptionPromos(),r._attachPermissionUpdateHandle(),r._migrateEligibleUserToVapid(function(){r._resubscribeOnChurn(r._updateAttributesForSubscribedUser.bind(r))})},checkIsSupportedBrowser:function(){for(var e=this.config.userAgent,n=e.browserName,i=e.browserVersion,r=e.os||e.osName,t=this.config.supportedBrowsers[n]||{},o=!1,s=!1,a=t.os&&t.os.length,c=0;c<a;c++)if(-1<r.indexOf(t.os[c])){s=!0;break}return(!t.minVersion||i>=t.minVersion)&&(!t.maxVersion||i<=t.maxVersion)&&(!t.useServiceWorker||t.useServiceWorker&&"serviceWorker"in navigator)&&s&&(o=!0),o},checkSubscriptionChurn:function(l){var p=this;p.checkIsSupportedBrowser(n)?p.fetchPushPermission(function(e,i){e||!i||i&&"granted"!==i.state?l&&l(e,{isOnboardError:null,pushManagerChurn:null},{}):p.getSubscriptionLog(function(e,n){e?l&&l(e):i&&n?function(e,n){var i=p._parseGCMSubscriptionId(n)||null,r=e.deviceId||null,t=e.subscriptionState||null,o=n&&n.error===b,s=!r&&"granted"===e.state,a=r&&"granted"===e.state&&"started"===n.onboardState&&!n.error,c=o||s||a,u="subsPushMngrResync";o?u="subsRivendellResync":a&&(u="subsFCMResync");var d=!n.churnCheckTime||n.churnCheckTime<n.subscriptionTime;if(c)return d&&p._sendBeacon(f,{code:u,deviceId:r,idbDeviceId:i,onboardTime:n.onboardTime}),l&&l(null,{isOnboardError:!0,pushManagerChurn:null},n);i&&i!==r&&"granted"===e.state?p.logSubscriptionChurnCheck(function(e){e?l&&l(e):(d&&p._sendBeacon(f,{code:"subChurn",idbDeviceId:i,deviceId:r,subscriptionState:t}),l&&l(null,{isOnboardError:!1,pushManagerChurn:!0},n))}):l&&l(null,{isOnboardError:!1,pushManagerChurn:!1},n)}(i,n):l&&l(null,{isOnboardError:!1,pushManagerChurn:!1},n)})}):l&&l(new Error(t))},_resubscribeOnChurn:function(s){var a=this;if(a.config.resubscribeOnChurn&&"undefined"!=typeof Notification&&Notification.permission===u){var c=function(e,n){e?(a._sendBeacon(p,{code:"resub",message:e}),s&&s(e)):(a.logOnboardingCompleted(),a._sendBeacon(f,{code:"resub",message:"success"}),s&&s(null,!0))};a._readEntryInDB(function(e,n){if(e)s&&s(e);else{var i=n&&n.churnCheckTime;if(i&&Date.now()-i<=6048e5)return s&&s(null,null),!1;a.checkSubscriptionChurn(function(e,n,i){var r=n.isOnboardError,t=n.pushManagerChurn;if(e||!r&&!t)s&&s(null,null);else{var o=(i=i||{}).origin||"gondor_homerun_news";a._doRegisterServiceWorker(a.config.serviceWorkerUrl,a.config.serviceWorkerScope).then(a._doPushManagerSubscribe.bind(a)).then(a._buildPermissionObjectChrome.bind(a)).then(function(e){a.setTopicSubscription(o,!0,e.deviceId,e.subscriptionKeys,{},c)}).catch(function(e){c(e)})}})}})}else s&&s(null,null)},fetchPushPermission:function(e){if(e){this.checkIsSupportedBrowser()&&-1<i.indexOf(this.config.userAgent.browserName)?this._fetchPushPermissionChrome(e):e(new Error(t,null))}},requestPushPermission:function(e,n){if(n){this.checkIsSupportedBrowser()&&(this.logOnboardingStart(),-1<i.indexOf(this.config.userAgent.browserName))?this._requestPushPermissionChrome(e,n):n(new Error(t,null))}},_fetchPushPermissionChrome:function(n){var i=this;(Notification&&Notification.permission)===u?navigator.serviceWorker.getRegistration(i.config.serviceWorkerScope).then(function(e){return e&&e.pushManager.getSubscription()}).then(i._buildPermissionObjectChrome.bind(i)).then(function(e){n(null,e)}).catch(function(e){i._sendBeacon(p,{code:"brwsrPermFetchError",message:e}),n(e)}):n(null,i._buildPermissionObjectChrome(null))},_requestPushPermissionChrome:function(e,n){var i=this,r=i.config.serviceWorkerUrl,t=i.config.serviceWorkerScope;Notification&&r&&t&&("default"===Notification.permission&&(i._trackLinkView({itc:"1",sec:e.sec,slk:"notification permission request",subsec:e.subsec}),i._sendBeacon(f,{code:"notificationPermissionRequest",message:e.sec})),Notification.requestPermission().then(function(){return i._doRegisterServiceWorker(r,t)}).then(i._doPushManagerSubscribe.bind(i)).then(i._buildPermissionObjectChrome.bind(i)).then(function(e){i._sendBeacon(f,{code:"brwsrPermReqSuccess",message:e.state}),n(null,e)}).catch(function(e){i._sendBeacon(p,{code:"brwsrPermReqError",message:e}),n(e,null)}))},_doRegisterServiceWorker:function(e,n){var i=this;return navigator.serviceWorker.register(e,{scope:n}).then(function(e){return i._sendBeacon(f,{code:"svcWkrRegSuccess"}),e},function(e){i._sendBeacon(p,{code:"svcWkrRegError",message:e})})},_doPushManagerSubscribe:function(r){var n=this;if(window.Promise&&r){if(n.appServerPubKeyArr)return new Promise(function(n,e){if(Notification&&"granted"===Notification.permission){var i=r.installing||r.waiting;i?i.addEventListener("statechange",function(e){"activated"===e.target.state&&n()}):r.active?n():e("Service Worker not active")}else e("Permission not granted")}).then(function(){return r.pushManager.subscribe({applicationServerKey:n.appServerPubKeyArr,userVisibleOnly:!0})}).then(function(e){if(!e||!e.endpoint)throw"Missing subscription endpoint";return n.logPushManagerSuccess(e.endpoint),n._sendBeacon(f,{code:"PushMngrSubSuccess",deviceId:e.endpoint}),e}).catch(function(e){n._sendBeacon(p,{code:"PushMngrSubFail",message:e}),n.logPushManagerFailure()});n._sendBeacon(p,{code:"PushMngrSubFail",message:"Push Manager subscribe called without application server key"})}},_doPushManagerUnsubscribe:function(r){var e=this;return r.pushManager.getSubscription().then(function(e){if(e)return e.unsubscribe()}).then(function(){return new Promise(function(n,i){e._setEntryInDB({onboardState:"started"},function(e){e?i("Could not unset IDB values when unsubscribing"):n(r)})})})},_buildPermissionObjectChrome:function(e){var n;return n=typeof e===o?"No_SW_registration":null===e?"No_PushManager_Subscription":"Subscription_Present",{applicationServerKey:e&&e.options&&e.options.applicationServerKey,deviceId:e&&this._parseGCMSubscriptionId(e),state:Notification&&Notification.permission,subscriptionKeys:e&&btoa(JSON.stringify(e)),subscriptionState:n}},_parseGCMSubscriptionId:function(e){var n,i;return e&&e.endpoint&&(i=(n=e.endpoint.match(/^https\:\/\/(fcm|android)\.googleapis\.com\/(gcm|fcm)\/send\/(.*)$/))&&n.length&&n[3]),i},_sendBeacon:function(e,n){var i=this;i.beaconer&&e&&n&&("function"==typeof i.beaconer?i.beaconer(e,r,n):"function"==typeof i.beaconer[e]&&i.beaconer[e](r,n))},_trackClick:function(e,n){this.tracker&&e&&e.sec&&e.slk&&typeof e._p!==o&&this.tracker.beaconClick(e.sec,e.slk,e._p,e,e.outcome,n)},_trackLinkView:function(e){this.tracker&&e&&e.sec&&e.slk&&this.tracker.beaconLinkViews([{sec:e.sec,t1:e.t1,t2:e.t2,_links:[e]}])},_migrateEligibleUserToVapid:function(r){var t=this,o=t.config.serviceWorkerUrl,s=t.config.serviceWorkerScope;if("undefined"!=typeof Notification&&Notification.permission===u)if(t.config.enableVapidMigration){var a=function(e,n){e?t._sendBeacon(p,{code:"vapidMigration",message:e&&e.message}):(t.logOnboardingCompleted(),t._sendBeacon(f,{code:"vapidMigration",message:"success"})),r&&r(null,null)};t.fetchPushPermission(function(e,n){if(e)return!1;var i=!1;(n&&n.applicationServerKey&&n.applicationServerKey.byteLength)!==t.appServerPubKeyArr.byteLength&&(i=!0),i?t._readEntryInDB(function(e,n){n=n||{};t._doRegisterServiceWorker(o,s).then(t._doPushManagerUnsubscribe.bind(t)).then(t._doPushManagerSubscribe.bind(t)).then(t._buildPermissionObjectChrome.bind(t)).then(function(e){t.setTopicSubscription("gondor_homerun_news",!0,e.deviceId,e.subscriptionKeys,{},a)}).catch(function(e){t._sendBeacon(p,{code:"vapidMigration:pushManagerErr",message:e}),r&&r(e,null)})}):r&&r(null,null)})}else r&&r();else r&&r()},_attachPermissionUpdateHandle:function(e){var r=this;r.config.enablePermissionChangeBeacon?r.checkIsSupportedBrowser(n)?navigator&&navigator.permissions&&navigator.permissions.query&&navigator.permissions.query({name:"notifications"}).then(function(i){i?(i.onchange=function(){r.getSubscriptionLog(function(e,n){n||(n={}),n.code="userPermissionUpdate",n.newState=i.state,r._sendBeacon(f,n)})},e&&e(null,!0)):e&&e(null,!1)}):e&&e(new Error(t),!1):e&&e(null,null)},_convertAllOnepushTopicsToRivendell:function(e,n){var i={channel_id:(n=n||{}).subscriptionKeys,device_id:n.deviceId,registration_id:e},r=Object.assign(i,this.getEssentialAttributes());return this.callSubscriptionService({method:"POST",operation:"update",serviceResource:"subscriptions.oToR"},r),!0},_updateAttributesForSubscribedUser:function(){if(!window.indexedDB)return!1;var a=this;a._readEntryInDB(function(e,o){if(e)return!1;var n=(o=o||{}).lastAttributeUpdateTime,s=o.registrationId;if(Date.now()-n<=864e5)return!1;a.fetchPushPermission(function(e,r){if(e)return!1;var n=(r=r||{}).subscriptionKeys;if(r.state===u&&"completed"===o.onboardState&&n){var i={channel_id:n,device_id:r.deviceId};s&&(i.registration_id=s);var t=Object.assign(i,a.getEssentialAttributes());return a.callSubscriptionService({method:"POST",operation:"update",serviceResource:"subscriptions.setAttributes"},t,function(e,n){if(!e){n=n||{},s=s||n.registrationId||n.g0&&n.g0.data&&n.g0.data.registrationId;var i={lastAttributeUpdateTime:Date.now()};s&&(setTimeout(function(){a._convertAllOnepushTopicsToRivendell(s,r)},0),i.registrationId=s),a._setEntryInDB(i)}}),!0}return!1})})},logOnboardingStart:function(e,n){e=e||{},this._initDB(e,n)},logOnboardingCompleted:function(e,n){this._setEntryInDB({onboardState:"completed",origin:e,vapidSubscriptionTimestamp:Date.now(),error:void 0},n)},logPushManagerSuccess:function(e,n){this._setEntryInDB({endpoint:e,subscriptionTime:(new Date).getTime()},n)},logPushManagerFailure:function(e){this._setEntryInDB({error:"pushManagerFail"},e)},logSubscriptionFailure:function(e){this._setEntryInDB({error:b},e)},logSubscriptionChurnCheck:function(e){this._setEntryInDB({churnCheckTime:(new Date).getTime()},e)},clearErrorLog:function(e){this._setEntryInDB({error:void 0},e)},getSubscriptionLog:function(e){this._readEntryInDB(e)},_openDB:function(i){var r=this;if(window.indexedDB){var e=window.indexedDB.open("yahooNotifications",2);e.onupgradeneeded=function(e){e.target.result.createObjectStore(c,{keyPath:s}).transaction.onerror=function(e){var n=new Error("Failed upgrading: "+e.target.errorCode);r._sendBeacon(p,{code:"IDBUpgradeFail",message:n.message}),i&&i(n)}},e.onsuccess=function(e){var n=e.target.result;i&&i(null,n)},e.onerror=function(e){var n=new Error("Failed opening: "+e.target.errorCode);r._sendBeacon(p,{code:"IDBOpenFail",message:n.message}),i&&i(new Error(n))}}},_initDB:function(t,o){var s=this,a=(new Date).getTime();s._openDB(function(e,i){if(e)return o&&o(e);var r=s._buildEntryObject(t),n=i.transaction(c,"readwrite").objectStore(c).put(r);n.onsuccess=function(e){var n=(new Date).getTime();o&&o(null,r),s._sendBeacon(f,{code:"initIndexedDBDuration",message:n-a}),i.close()},n.onerror=function(e){var n=new Error("Failed initilazing: "+e.target.errorCode);s._sendBeacon(p,{code:"IDBInitFail",message:n.message}),o&&o(n),i.close()}})},_readEntryInDB:function(t){var o=this,s=(new Date).getTime();o._openDB(function(e,i){if(e)return t&&t(e);var r=i.transaction(c).objectStore(c).get(d);r.onsuccess=function(e){var n=(new Date).getTime();t&&t(null,r.result),o.config.enableIndexedDbDurationBeacon&&o._sendBeacon(f,{code:"readIndexedDBDuration",message:n-s}),i.close()},r.onerror=function(e){var n=new Error("Failed Reading: ",e.target.errorCode);o._sendBeacon(p,{code:"IDBReadFail",message:n.message}),t&&t(n),i.close()}})},_setEntryInDB:function(t,o){var s=this,a=(new Date).getTime();s._readEntryInDB(function(e,r){e||!r?s._initDB(s._buildEntryObject(t,r),o):s._openDB(function(n,i){if(n)return o&&o(n);var e=i.transaction(c,"readwrite").objectStore(c).put(s._buildEntryObject(t,r));e.onsuccess=function(e){var n=(new Date).getTime();o&&o(null,!0),s.config.enableIndexedDbDurationBeacon&&s._sendBeacon(f,{code:"updateIndexedDBDuration",message:n-a}),i.close()},e.onerror=function(e){s._sendBeacon(p,{code:"IDBUpdateFail",message:n}),o&&o(new Error("Failed updating: ",e.target.errorCode)),i.close()}})})},_buildEntryObject:function(e,n){e=e||{},n=n||{};var i=(new Date).getTime(),r=n.registrationId;typeof e.registrationId!==o&&(r=e.registrationId);var t={bucket:e.bucket||n.bucket||this.config.bucket,churnCheckTime:e.churnCheckTime||n.churnCheckTime,endpoint:e.endpoint||n.endpoint,error:e.error||n.error,lastAttributeUpdateTime:e.lastAttributeUpdateTime||n.lastAttributeUpdateTime,onboardState:e.onboardState||n.onboardState||"started",onboardTime:n.onboardTime||i,origin:e.origin||n.origin,permissionState:Notification&&Notification.permission||"unsuported",registrationId:r,spaceId:e.spaceId||n.spaceId||this.config.spaceId,subscriptionTime:e.subscriptionTime||n.subscriptionTime,updateTime:i,vapidSubscriptionTimestamp:e.vapidSubscriptionTimestamp||n.vapidSubscriptionTimestamp};return e.hasOwnProperty("error")&&void 0===e.error&&(t.error=void 0,"started"===t.onboardState&&(t.onboardState="completed",t.onboardTime=i)),t[s]=d,t},_sendRequest:function(e,n,i){if(e){var r=this,t=2e3,o=e.url,s=e.headers,a=e.body,c=new XMLHttpRequest;for(var u in n="number"==typeof n?n:3,c.open(e.method,o),c.responseType="json",c.timeout=1e4,s)s.hasOwnProperty(u)&&c.setRequestHeader(u,s[u]);c.onload=function(){if(200===c.status){var e=c.response;i&&i(null,e)}else d()},c.onerror=function(){d()},c.ontimeout=function(){d()},"GET"===e.method?c.send():c.send(a)}function d(){0<n?(n-=1,setTimeout(function(){r._sendRequest(e,n,i)},t)):i&&i(new Error(c.statusText))}},callSubscriptionService:function(n,e,i){n=n||{};var r,t=this.config.subscriptionService,o="",s="";n.matrixParams&&Object.keys&&(Object.keys(n.matrixParams).forEach(function(e){o+=";"+encodeURIComponent(e)+"="+encodeURIComponent(n.matrixParams[e]||"")}),o&&(o+=";")),s=[].concat(t.protocol?t.protocol+"://":[]).concat(t.host||[]).concat(t.path?t.path.replace("RESOURCE_PLACEHOLDER",n.serviceResource+o):[]).join(""),t&&t.context&&t.context.partner&&(s+=(0<=s.indexOf("?")?"&":"?")+"partner="+t.context.partner),"GET"===n.method?(s.indexOf("resource/")<0&&(s.endsWith&&!s.endsWith("/")&&(s+="/"),s+="resource/"+n.serviceResource+o),r={url:s,method:"GET"}):"POST"===n.method&&(t&&t.context&&t.context.crumb&&(s+=(0<=s.indexOf("?")?"&":"?")+"crumb="+t.context.crumb),r={body:JSON.stringify({requests:{g0:{resource:n.serviceResource,operation:n.operation,params:n,body:e}},context:t.context||{}}),headers:{"content-type":"application/json"},url:s,method:"POST"}),this._sendRequest(r,3,i)},readTopicSubscription:function(t,o,s){if(t&&o)if(window.indexedDB){var a=this;a._readEntryInDB(function(e,n){if(e)s&&s(e);else{var i=(n=n||{}).registrationId,r={matrixParams:{channel_id:o,operation:"read",serviceResource:"subscriptions.hasSubscription",target_id:t},method:"GET",serviceResource:"subscriptions.hasSubscription"};i&&(r.matrixParams.registration_id=i),a.callSubscriptionService(r,null,s)}})}else s&&s(new Error("IndexedDB connection failed"));else s&&s(new Error("Missing required arguments"))},setTopicSubscription:function(s,a,c,u,e,d){if(s&&c&&u)if(window.indexedDB){var l=this;l._readEntryInDB(function(e,n){if(e)d&&d(e);else{var r=(n=n||{}).registrationId,i={channel_id:u,device_id:c,target_id:s};r&&(i.registration_id=r);var t=Object.assign(i,l.getEssentialAttributes()),o={method:"POST",operation:"update",serviceResource:a?"subscriptions.setSubscription":"subscriptions.removeSubscription"};l.callSubscriptionService(o,t,function(n,i){!n&&(i=i||{},r=r||i.registrationId||i.g0&&i.g0.data&&i.g0.data.registrationId)?l._setEntryInDB({registrationId:r},function(e){e&&l._sendBeacon(p,{code:"registrationIDBEntryError",message:e.message}),d&&d.call(l,n,i)}):d&&d.apply(l,Array.prototype.slice.call(arguments))})}})}else d&&d(new Error("IndexedDB connection failed"));else d&&d(new Error("Missing required arguments"+!!s+!!c,!!u))},checkIsPushMuted:function(i,r){if(i&&r){var t=this;t.fetchPushPermission(function(e,n){n&&n.state===u&&n.subscriptionKeys?t.readTopicSubscription(i,n.subscriptionKeys,function(e,n){var i=n&&n.isSubscribed;r(null,!i)}):r(null,!0)})}else r&&r(new Error("Missing required topic"))},pushNotificationSubscribe:function(i,r){if(i&&i.topic){i=JSON.parse(JSON.stringify(i));var t=this,o=t.config.overlay.default,e=i.topic,s=i.trackingParams||{sec:"hd"};s.subsec="browser-prompt",s.aid=e,i.trackingParams=s,t.fetchPushPermission(function(e,n){return e||!n?(t._sendBeacon(p,{code:"permRead",message:e.message}),void(r&&r(new Error("Could not read push permission")))):n.state===a?(i.trackingParams=null,void t._handlePermissionDenied(i,r)):n.state===u&&n.deviceId&&n.subscriptionKeys?(i.trackingParams=null,void t._handlePermissionGranted(n,i,r)):(i.showInstructionsDefault&&o&&n.state!==u&&t.renderInstructionOverlay(o.overlayId,o.imageUrl,o.imageWidth,o.imageHeight,o.xOffset,o.yOffset),void t.requestPushPermission(s,function(e,n){return i.showInstructionsDefault&&o&&t.removeInstructionsOverlay(o.overlayId),!e&&n?n.state===u?void t._handlePermissionGranted(n,i,r):n.state===a?void t._handlePermissionDenied(i,r):void t._handlePermissionDismissed(i,r):(t._sendBeacon(p,{code:"permReq",message:e.message}),void(r&&r(new Error("Push permission request failure"))))}))})}else r&&r(new Error("Missing required option: topic"))},_handlePermissionGranted:function(i,e,r){var t=this,n=(e=e||{}).trackingParams,o=e.topic;i&&i.state===u&&o?(n&&(n.slk="permission-allow",n._p=1,t._trackClick(n)),this.setTopicSubscription(o,!0,i.deviceId,i.subscriptionKeys,{},function(e,n){e?i.deviceId&&t.logSubscriptionFailure():(t.hidePushSubscriptionPromos(),t.getSubscriptionLog(function(e,n){n&&"completed"!==n.onboardState&&t.logOnboardingCompleted(o)})),e&&t._sendBeacon(p,{code:"failureAfterPerm",message:e&&e.message}),r&&r(e,n)})):r&&r(new Error("Missing required params in handler"))},_handlePermissionDenied:function(e,n){e=e||{};var i=this.config.overlay.denied,r=e.trackingParams;r&&(r.slk="permission-block",r._p=2,this._trackClick(r)),e.showInstructionsDenied&&i&&this.renderInstructionOverlay(i.overlayId,i.imageUrl,i.imageWidth,i.imageHeight,i.xOffset,i.yOffset),n&&n(new Error("Permission denied by user"))},_handlePermissionDismissed:function(e,n){var i=(e=e||{}).trackingParams;i&&(i.slk="permission-dismiss",i._p=0,this._trackClick(i)),n&&n(new Error("Permission not granted by user"))},pushNotificationUnsubscribe:function(i,r){var t=this;i&&t.fetchPushPermission(function(e,n){n?t.setTopicSubscription(i,!1,n.deviceId,n.subscriptionKeys,{},r):r&&r(new Error("Could not read permission"))})},renderInstructionOverlay:function(n,e,i,r,t,o){var s=this;if(n&&e&&i&&r){var a=document.createElement("div"),c=document.createElement("div"),u="";a.id=n,a.setAttribute("style","position:fixed; background-color:rgba(236, 236, 236, 0.95); top:0; left:0; width:100%; height:100%; z-index:100;"),"number"!=typeof t&&(u+="margin-left:auto; margin-right:auto;"),"number"!=typeof o&&(u+=" margin-top:117px;"),u&&c.setAttribute("style",u),c.setAttribute("style","width:"+i+"px;height:"+r+"px;background: url("+e+") 0 0/"+i+"px "+r+"px no-repeat;"+("number"==typeof t?"margin-left:"+t+"px;":"")+("number"==typeof o?"margin-top:"+o+"px;":"")),a.appendChild(c),document.body.appendChild(a),s.removeInstructionsOverlay&&(document.onkeydown=function(e){("key"in(e=e||window.event)?"Escape"===e.key||"Esc"===e.key:27===e.keyCode)&&s.removeInstructionsOverlay(n)},a.onclick=function(e){s.removeInstructionsOverlay(n)})}},removeInstructionsOverlay:function(e){var n=document.getElementById(e);n&&document.body.removeChild(n)},shouldPromotePushNotifications:function(){return this.checkIsSupportedBrowser(n)&&Notification.permission!==u},shouldPromotePushNotificationsForTopic:function(e,i){e&&this.checkIsSupportedBrowser(n)?this.checkIsPushMuted(e,function(e,n){e?i(e,!1):i(void 0,n)}):i(void 0,!1)},showPushSubscriptionPromos:function(){this.shouldPromotePushNotifications()&&document.body.classList.add(e)},hidePushSubscriptionPromos:function(){document.body.classList.remove(e)},_stringParseKV:function(e,n,i){var r={};if(!e)return r;n=n||";",i=i||":";for(var t=e.split(n),o=0;o<t.length;o+=1){var s=t[o],a=s.indexOf(i),c=s.substring(0,a),u=s.substring(a+1);c=c.trim?c.trim():c,u=u.trim?u.trim():u,c&&(r[c]=u)}return r},_delegateDOMEvent:function(e,n,i,r){if(e&&n&&i&&r){var t=document.querySelector(n);t&&t.addEventListener(e,function(e){for(var n=e.target;n&&e.currentTarget!==n;){if(n.classList.contains(i)){r.call(n,e);break}n=n.parentNode}},!1)}},addPromoButtonDelegator:function(){var n=this;n._delegateDOMEvent("click","body",l,function(e){n.handlePromoButtonSubscription(this)})},handlePromoButtonSubscription:function(e){if(e){var n=this,i=e.getAttribute("data-subscription-topic"),r=e.getAttribute("data-subscription-ylk"),t=r&&n._stringParseKV(r),o="false"===e.getAttribute("data-subscription-instructions-default"),s="false"===e.getAttribute("data-subscription-instructions-denied");i&&t&&(n._trackClick(n._stringParseKV(r)),n.pushNotificationSubscribe({showInstructionsDefault:!o,showInstructionsDenied:!s,topic:i,trackingParams:t},n.displayWelcomeNotification.bind(n)))}},trackPromoButtonsLinkViews:function(){for(var e,n,i=document.getElementsByClassName(l),r=0;i&&r<i.length;r+=1)i[r].classList.contains(h)&&this._isVisible(i[r])&&(e=i[r].getAttribute("data-subscription-ylk")||"",(n=this._stringParseKV(e))&&n.slk&&(n.slk="[manual] "+n.slk,this._trackLinkView(n)),i[r].classList.remove(h))},_isVisible:function(e){if(e){var n=window.getComputedStyle(e,null);return n&&"none"!==n.display&&"hidden"!==n.visibility}},displayWelcomeNotification:function(){var e=this.config.confirmationNotification;Notification.permission===u&&e.enabled&&new Notification(e.title,{body:e.body,icon:e.icon})},getEssentialAttributes:function(){var e={utcTz:"UTC"+-(new Date).getTimezoneOffset()/60};if(window.Intl)try{e.tz=window.Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){}return e},urlB64ToUint8Array:function(e){if("atob"in window){for(var n=(4-e.length%4)%4,i="",r=0;r<n;r++)i+="=";for(var t=(e+i).replace(/\-/g,"+").replace(/_/g,"/"),o=window.atob(t),s=new Uint8Array(o.length),a=0;a<o.length;++a)s[a]=o.charCodeAt(a);return s}}},typeof module!==o&&module.exports)module.exports=g;else if(typeof window!==o){window.SubscriptionHelper=g;var m=window.YAHOO&&window.YAHOO.subscriptionHelperParams;m&&m.selfInit&&setTimeout(function(){window.subscriptionHelperInstance=new g(m.config,m.beaconer,m.tracker)},200)}}();

}
/*
     FILE ARCHIVED ON 00:12:37 May 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:49:37 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.074
  cdx.remote: 0.109
  esindex: 0.01
  LoadShardBlock: 741.7 (6)
  PetaboxLoader3.datanode: 97.684 (7)
  load_resource: 7626.794
  PetaboxLoader3.resolve: 7584.996
*/