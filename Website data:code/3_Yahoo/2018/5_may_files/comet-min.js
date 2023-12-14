YUI.add("comet",function(e){function t(e){t.superclass.constructor.apply(this,arguments)}e.namespace("Comet");var n={},r="comet:ready";e.initComet=function(i,s){var o=i.replace(/https:/,"http:");return o.substr(-1)==="/"&&(o=o.substring(0,o.length-1)),n[o]||(e.publish(r),n[o]=new t,n[o].clearListeners()),s&&n[o].addListener("/meta/handshake",s),n[o].initBayeux(i,function(t){t.successful&&e.fire(r,{message:t})}),n[o]},t.NAME="Comet",t.ATTRS={uri:{value:null,setter:function(e){if(e===null)return;var t=window.location.protocol;t.indexOf("https")!==-1?e=e.replace(/http:/,"https:"):t.indexOf("http")!==-1&&(e=e.replace(/https:/,"http:"));var n=e.toLowerCase();return n.indexOf("https://")!==-1?this.set("protocol","https://"):n.indexOf("http://")!==-1&&this.set("protocol","http://"),e}},protocol:{value:"https://"},meta:{value:{handshake:{channel:"/meta/handshake",version:"1.0",supportedConnectionTypes:["long-polling"]},connect:{channel:"/meta/connect",connectionType:"long-polling"},subscribe:{channel:"/meta/subscribe"},unsubscribe:{channel:"/meta/unsubscribe"},publish:{},disconnect:{channel:"/meta/disconnect"}}},ioCfg:{value:{method:"POST",headers:{"Content-Type":"application/json",Accept:"*/*"}}},ext:{value:{all:{},handshake:{},subscribe:{"Comet-api-version":"1.1","Comet-subscriber-auth-info":null},unsubscribe:{"Comet-api-version":"1.1","Comet-subscriber-auth-info":null},connect:{},publish:{"Comet-api-version":"1.1","Comet-registration-id":"make-up","Comet-opaque-id":"markup","Comet-acknowledge-URI":"www.yahoo.com/ack","Comet-acknowledge-type":"All"},disconnect:{}}}},e.extend(t,e.Base,{_clientState:"unconnected",_advice:{},_connected:!1,_config:{backoffIncrement:1e3,maxBackoff:1e4,maxNetworkDelay:3e5,delayedSendMaxCount:10,advice:{timeout:6e4,interval:0,reconnect:"retry"},subscribe:{jsonpTimeout:5e3}},_delayedSendCount:0,_urlOrigin:"",_backoff:0,_isLongpollingConnect:!1,_isSendingQueue:!1,_clientId:null,_token:null,_lastMessageId:0,_outgoing:[],_subscribeChannel:{},_queue:new e.AsyncQueue,_ioQueue_c2s:e.io.queue,_ioQueue_s2c:e.io.queue,_jsonp:null,_listeners:{},initializer:function(t){this.setClientState("unconnected"),e.on("beforeunload",e.bind(function(){this.getClientState()!=="unconnected"&&this.disconnect()},this),window)},config:function(t,n){e.Object.setValue(this._config,t,n)},_Queue_send:function(t){var n=this;n._batch(t);if(!n.getClientId())return;if(n._isSendingQueue)return;if(n._outgoing.length<=0)return;e.each(n._outgoing,function(e){e=n._patchMessage(e)}),n._IO_send(!0,n._outgoing),n._outgoing=[]},_nextQueueSend:function(){this._Queue_send()},_IO_send:function(e,t){var n=this;if(!n.get("uri"))return;if(e){if(n._isSendingQueue||!t)return;n._IO_Queue_Send(t)}else{if(!n.getClientId())return;if(n._isLongpollingConnect||!t)return;n._IO_Longpolling_Send(t)}},_IO_Queue_Send:function(t){var n=this;n.setTokenHeader(n._token);var r=e.merge(n.get("ioCfg"),{context:n,timeout:n._config.maxNetworkDelay,data:e.JSON.stringify(t),xdr:{credentials:!0},on:{success:function(r,i){try{var s=e.JSON.parse(i.responseText);n._handleResponse(s)}catch(o){n._handleFailure(t,"json parse error");return}},failure:function(e,r){n._handleFailure(t,"500::io failed")},start:function(){n._isSendingQueue=!0},complete:function(){n._isSendingQueue=!1,n._nextQueueSend()}}});n._ioQueue_c2s.stop(),n._ioQueue_c2s(n.get("uri"),r),n._ioQueue_c2s.start()},_IO_Jsonp_Send:function(t){var n=this;if(!n.get("uri"))return;var r=n.get("uri")+"?callback={callback}",i=encodeURIComponent(e.JSON.stringify(t));r=r+"&data="+i,n._jsonp=new e.JSONPRequest(r,{on:{success:function(e){n._handleResponse(e)},timeout:function(e){n._handleFailure(t,"408:"+n._config.subscribe.jsonpTimeout+":jsonp timeout")},failure:function(){n._handleFailure(t,"500::jsonp failed")}},timeout:n._config.subscribe.jsonpTimeout}),n._jsonp.send()},_IO_Longpolling_Send:function(t){var n=this;n.setTokenHeader(n._token);var r=e.merge(n.get("ioCfg"),{context:n,timeout:n._config.maxNetworkDelay,xdr:{credentials:!0},data:e.JSON.stringify(t),on:{success:function(r,i){try{var s=e.JSON.parse(i.responseText);n._handleResponse(s)}catch(o){n._handleFailure(t,"json parse error");return}},failure:function(e,r){n._handleFailure(t,"500::io failed")},start:function(){n._isLongpollingConnect=!0},complete:function(){n._isLongpollingConnect=!1}}});n._ioQueue_s2c.stop(),n._ioQueue_s2c(n.get("uri"),r),n._ioQueue_s2c.start()},_handleResponse:function(t){if(t===undefined||t===null)return;var n=this;e.each(t,function(e){n._updateAdvice(e.advice),e.originalURI=n._urlOrigin;var t=e.channel;switch(t){case"/meta/handshake":n._handshakeResponse(e);break;case"/meta/connect":n._connectResponse(e);break;case"/meta/disconnect":n._disconnectResponse(e);break;case"/meta/subscribe":n._subscribeResponse(e);break;case"/meta/unsubscribe":n._unsubscribeResponse(e);break;default:n._messageResponse(e)}})},_updateAdvice:function(e){e&&(this._advice=this._mixin(!1,{},this._config.advice,e))},_handshakeResponse:function(e){var t=this;if(e.successful){t.setClientState("connected"),t._clientId=e.clientId,t._advice.VIP&&t.set("uri",t.get("protocol")+t._advice.VIP+"/comet"),t._notifyListeners("/meta/handshake",e),t._Queue_send();var n=t._isDisconnected()?"none":t._advice.reconnect;switch(n){case"retry":t._resetBackoff(),t._delayedConnect();break;case"handshake":t.setClientState("unconnected"),t._resetBackoff(),t._delayedHandshake();break;case"none":t._disconnect(!1)}}else t._failHandshake(e)},_failHandshake:function(e){var t=this;t.setClientState("unconnected"),t._clientId=null,t._notifyListeners("/meta/handshake",e),t._notifyListeners("/meta/unsuccessful",e);var n=t._advice.reconnect!=="none";n?(t._increaseBackoff(),t._delayedHandshake()):t._disconnect(!1)},_delayedHandshake:function(){var e=this;this._delayedSend(function(){e._handshake()})},_subscribeResponse:function(e){if(e.successful){if(!this._subscribeChannel[e.subscription]||this._subscribeChannel[e.subscription]!==!0)this._subscribeChannel[e.subscription]=!0;e.
ext["Comet-auth-token"]&&(this._token=e.ext["Comet-auth-token"]),this._notifyListeners("/meta/subscribe",e)}else this._failSubscribe(e)},_failSubscribe:function(e){this._notifyListeners("/meta/subscribe",e),this._notifyListeners("/meta/unsuccessful",e)},_connectResponse:function(e){var t=this;if(t._isDisconnected())return;t._connected=e.successful;if(t._connected){t.setClientState("connected"),t._notifyListeners("/meta/connect",e);var n=t._isDisconnected()?"none":t._advice.reconnect;switch(n){case"retry":t._resetBackoff(),t._delayedConnect();break;case"handshake":t.setClientState("unconnected"),t._resetBackoff(),t._delayedHandshake();break;case"none":t._disconnect(!1)}}else t._failConnect(e)},_failConnect:function(e){var t=this;t._notifyListeners("/meta/connect",e),t._notifyListeners("/meta/unsuccessful",e);var n=t._isDisconnected()?"none":t._advice.reconnect;switch(n){case"retry":t._delayedConnect(),t._increaseBackoff();break;case"subscribe":t._delayedConnect(),t._increaseBackoff();break;case"handshake":t.setClientState("unconnected"),t._resetBackoff(),t._delayedHandshake();break;case"none":t._disconnect(!1)}},_delayedConnect:function(){var e=this;this._delayedSend(function(){e._connect()})},_disconnectResponse:function(e){e.successful?(this._disconnect(!1),this._notifyListeners("/meta/disconnect",e)):this._failDisconnect(e)},_failDisconnect:function(e){this._disconnect(!0),this._notifyListeners("/meta/disconnect",e),this._notifyListeners("/meta/unsuccessful",e)},_unsubscribeResponse:function(e){e.successful?(this._subscribeChannel[e.subscription]&&this._subscribeChannel[e.subscription]===!0&&delete this._subscribeChannel[e.subscription],this._notifyListeners("/meta/unsubscribe",e)):this._failUnsubscribe(e)},_failUnsubscribe:function(e){this._notifyListeners("/meta/unsubscribe",e),this._notifyListeners("/meta/unsuccessful",e)},_messageResponse:function(e){e.successful===undefined?e.data?this._notifyListeners(e.channel,e):this._notifyListeners("/meta/unsuccessful",e):e.successful?this._notifyListeners("/meta/publish",e):this._failMessage(e)},_failMessage:function(e){this._notifyListeners("/meta/publish",e),this._notifyListeners("/meta/unsuccessful",e)},_delayedSend:function(e){var t=this,n=t._advice.interval+t._backoff;t._config.maxBackoff<=t._backoff?t._delayedSendCount++:t._delayedSendCount=0;if(t._delayedSendCount>t._config.delayedSendMaxCount){var r=t.get("uri");t.set("uri",t._urlOrigin);if(r===t.get("uri"))return;t._resetBackoff(),t._delayedSendCount=0}t._queue.add({fn:e,timeout:n}),t._queue.run()},_handshakeFailure:function(e,t){this._failHandshake({successful:!1,failure:!0,channel:"/meta/handshake",request:e,advice:{reconnect:"retry",interval:this._backoff},error:t||"",ext:e.ext||{},id:e.id||""})},_connectFailure:function(e,t){this._connected=!1,this._failConnect({successful:!1,failure:!0,channel:"/meta/connect",request:e,advice:{reconnect:"retry",interval:this._backoff},clientId:e.clientId||"",error:t||"",ext:e.ext||{},id:e.id||""})},_disconnectFailure:function(e,t){this._failDisconnect({successful:!1,failure:!0,channel:"/meta/disconnect",request:e,advice:{reconnect:"none",interval:0},clientId:e.clientId||"",error:t||"",ext:e.ext||{},id:e.id||""})},_subscribeFailure:function(e,t){this._failSubscribe({successful:!1,failure:!0,channel:"/meta/subscribe",request:e,advice:{reconnect:"none",interval:0},clientId:e.clientId||"",subscription:e.subscription||"",error:t||"",ext:e.ext||{},id:e.id||""})},_unsubscribeFailure:function(e,t){this._failUnsubscribe({successful:!1,failure:!0,channel:"/meta/unsubscribe",request:e,advice:{reconnect:"none",interval:0},clientId:e.clientId||"",subscription:e.subscription||"",error:t||"",ext:e.ext||{},id:e.id||""})},_messageFailure:function(e,t){this._failMessage({successful:!1,failure:!0,channel:e.channel,request:e,advice:{reconnect:"none",interval:0},clientId:e.clientId||"",subscription:e.subscription||"",error:t||"",ext:e.ext||{},id:e.id||""})},_handleFailure:function(e,t){var n,r,i;for(i=0;i<e.length;++i){n=e[i],r=n.channel;switch(r){case"/meta/handshake":this._handshakeFailure(n,t);break;case"/meta/connect":this._connectFailure(n,t);break;case"/meta/disconnect":this._disconnectFailure(n,t);break;case"/meta/subscribe":this._subscribeFailure(n,t);break;case"/meta/unsubscribe":this._unsubscribeFailure(n,t);break;default:this._messageFailure(n,t)}}},_notifyListeners:function(e,t){this._notify(e,t),this._notify(e+"/*",t);var n=e.split("/"),r=n.length-1,i=0;for(i=r;i>0;--i){var s=n.slice(0,i).join("/")+"/*";i===r&&this._notify(s,t),this._notify(s,t)}},_notify:function(t,n){var r=this._listeners[t];r&&e.each(r,function(t){e.Lang.isFunction(t.listener)&&t.listener(n)})},_isDisconnected:function(){return this._clientState==="unconnected"},_resetBackoff:function(){this._backoff=0},_nextMessageId:function(){return++this._lastMessageId+""},_increaseBackoff:function(){this._backoff<this._config.maxBackoff&&(this._backoff+=this._config.backoffIncrement)},_createMessage:function(t,n){n=n||{};var r=(new Date).valueOf(),i=window.location.host,s=[],o=e.merge(this.get("ext").all,this.get("ext")[t],n.ext||{},{timestamp:r,host:i||""});switch(t){case"handshake":s.push(e.merge({id:this._nextMessageId(),ext:o},this.get("meta")[t]));break;case"connect":s.push(e.merge({id:this._nextMessageId(),ext:o},this.get("meta")[t],{clientId:this.getClientId()}));break;case"subscribe":s.push(e.merge({id:this._nextMessageId(),ext:o},this.get("meta")[t],{clientId:this.getClientId(),subscription:n.channel}));break;case"unsubscribe":s.push(e.merge({id:this._nextMessageId(),ext:o},this.get("meta")[t],{clientId:this.getClientId(),subscription:n.channel}));break;case"publish":s.push(e.merge({id:this._nextMessageId(),ext:o},this.get("meta")[t],{clientId:this.getClientId(),channel:n.channel,data:n.data}));break;case"disconnect":s.push(e.merge({id:this._nextMessageId(),ext:o},this.get("meta")[t],{clientId:this.getClientId()}))}return s},_handshake:function(e){var t=this;if(t.getClientState()!=="unconnected"
){if(t.getClientState()==="connected"){var n={successful:!0,channel:"/meta/handshake",clientId:t._clientId,originalURI:t._urlOrigin};t._notifyListeners("/meta/handshake",n)}return}e&&e.listener&&t._addListener(e,!1),t._clientId=null,t._token=null,t.resetTokenHeader(),t._clearSubscriptions(),t._updateAdvice(t._config.advice);var r=t._createMessage("handshake",e);t._IO_send(!0,r),t.setClientState("connecting")},_connect:function(e){var t=this;if(t.getClientState()!=="connected")return;if(t._isLongpollingConnect)return;var n=t._createMessage("connect",e);t._IO_send(!1,n)},_subscribeJSONP:function(e){if(!e||!e.channel)return;if(!this.getClientId())return;if(this._subscribeChannel[e.channel]&&this._subscribeChannel[e.channel]===!0)return;e.listener&&this._addListener(e,!0);var t=this._createMessage("subscribe",e);this._IO_Jsonp_Send(t)},_unsubscribe:function(e){if(!this.getClientId())return;e&&e.channel&&this.removeListeners(e.channel);if(e&&e.channel){var t=this._createMessage("unsubscribe",e);this._Queue_send(t)}},_disconnect:function(e){var t=this;e&&(t._ioQueue_c2s.stop(),t._ioQueue_s2c.stop()),t.setClientState("unconnected"),t._clientId=null,t._resetBackoff(),t._queue.stop();if(t._outgoing.length>0){var n=t._outgoing;t._outgoing=[],t._handleFailure(n,"500::canceled after disconnect")}t._clearSubscriptions()},_patchMessage:function(e){return e.id||(e.id=this._nextMessageId()),e.clientId=this.getClientId(),e.channel==="/meta/handshake"&&delete e.clientId,e},_batch:function(){e.each(arguments,function(t){if(t&&e.Lang.isArray(t)){var n=0;for(n=0;n<t.length;++n)this._outgoing.push(t[n])}else t&&this._outgoing.push(t)},this)},_clearSubscriptions:function(){e.each(this._listeners,function(t){t&&e.each(t,function(e,t,n){e&&e.isSub&&n.splice(t)})}),this._subscribeChannel={}},_reDoSubscriptions:function(){e.each(this._subscribeChannel,function(e,t){e&&(this._subscribeChannel[t]=!1,this._subscribeJSONP({channel:t}))},this)},isDuplicatedListener:function(e,t){var n=0;for(n=0;n<t.length;++n){var r=t[n];if(r&&r.listener&&r.listener.toString()===e.toString())return!0}return!1},_addListener:function(t,n,r){t&&t.listener&&e.Lang.isFunction(t.listener)&&(this._listeners[t.channel]?(r||!this.isDuplicatedListener(t.listener,this._listeners[t.channel]))&&this._listeners[t.channel].push({listener:t.listener,isSub:n}):this._listeners[t.channel]=[{listener:t.listener,isSub:n}])},_mixin:function(e,t,n){var r,i,s=t||{};for(r=2;r<arguments.length;++r){var o=arguments[r];if(o===undefined||o===null)continue;for(i in o){var u=o[i],a=s[i];if(u===t)continue;if(u===undefined)continue;e&&typeof u=="object"&&u!==null?u instanceof Array?s[i]=this._mixin(e,a instanceof Array?a:[],u):s[i]=this._mixin(e,{},u):s[i]=u}}return s},destructor:function(){},getClientState:function(){return this._clientState},setClientState:function(e){this._clientState=e},getClientId:function(){return this._clientId},initBayeux:function(e,t){this._urlOrigin=e,this.set("uri",e),this._handshake({channel:"/meta/handshake",listener:t})},subscribe:function(e,t){this._subscribeJSONP({channel:e,listener:t})},unsubscribe:function(e){this._unsubscribe({channel:e})},disconnect:function(e){var t=this;e&&t._addListener({channel:"/meta/disconnect",listener:e},!1);if(t.getClientState()==="unconnected")return;if(!t.getClientId())return;var n=t._createMessage("disconnect");t._Queue_send(n)},publishMsg:function(e,t){if(e&&t){var n={channel:e,data:t},r=this._createMessage("publish",n);this._Queue_send(r)}},clearListeners:function(){this._listeners={}},addListener:function(t,n,r){r=r||!1;if(!n&&e.Lang.isFunction(n))return;this._addListener({channel:t,listener:n},!1,r)},removeListeners:function(e){this._listeners[e]&&delete this._listeners[e]},setUserInfo:function(e,t){if(e&&t){var n=this.get("ext");n.subscribe["Comet-subscriber-auth-info"]={uid:e,user_type:"yahoo",user_cred:t}}},setUserInfoWithCookie:function(e,t){if(e){var n=this.get("ext");n.subscribe["Comet-subscriber-auth-info"]={uid:e,user_type:"yahoo",user_cred:"Any Value"}}},setTokenHeader:function(e){if(e){var t=this.get("ioCfg");t.headers.Authorization="Basic token="+e}},resetTokenHeader:function(){var e=this.get("ioCfg");e.headers.Authorization="Basic token="},setYcaHeader:function(e,t){if(e){var n=this.get("ioCfg");n.headers["Yahoo-App-Auth"]=e}if(t){var r=this.get("ext");r.publish["Comet-opaque-id"]=t}}}),e.Comet=t},"@VERSION@",{requires:["base","io","json","async-queue","cookie","jsonp","jsonp-url"]});
