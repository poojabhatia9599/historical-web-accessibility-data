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

(window.webpackJsonp=window.webpackJsonp||[]).push([["NotificationsPrePromptLoader"],{"./src/reddit/components/NotificationsPrePrompt/index.m.less":function(e,t,o){e.exports={modalContainer:"_3uA-tRfnkYO-78DbpSdKMh",modalBody:"_3ZQQPHRTItIinpXhny3ZDt",title:"_3t6MWcHrGFpGj4vlgq-xEr",titleLarge:"_1FvWIle80DgjBL62Tdt2eq",body:"_3Z9uK9KORZK0ehS0hs_45y",bodyLarge:"_12G9Se1M4wodVC-R3ANHbS",allow:"_1Lq_w8Q5F_T8F4AYDucl8g",arrow:"_2xbwjCYA8CljeuOnJamg91",snoo:"UzNVGSNFIiN2Q6xXrrIxy"}},"./src/reddit/components/NotificationsPrePrompt/index.tsx":function(e,t,o){"use strict";o.r(t);var n,i=o("./node_modules/react/index.js"),s=o.n(i),r=o("./node_modules/react-redux/es/index.js"),c=o("./node_modules/reselect/lib/index.js"),a=o("./bundled-modules/styled-components/styled-components.min.js"),d=o.n(a),l=o("./src/app/strings/index.ts"),u=o("./src/higherOrderComponents/asModal.tsx"),p=o("./src/lib/classNames/index.ts"),f=o("./src/lib/localStorageAvailable/index.ts"),m=o("./src/reddit/actions/notifications/constants.ts"),b=o("./src/reddit/actions/notifications/loader.ts"),g=o("./src/reddit/components/ModalStyledComponents/index.tsx"),h=o("./src/reddit/icons/svgs/Snoo/index.tsx"),O=d()(h.a).withConfig({componentId:"s1qx9anm-0"})(["margin-right: 8px;height: 32px;"]),j=o("./src/reddit/controls/Button/index.tsx"),y=o("./src/reddit/helpers/trackers/notifications.ts"),v=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var s=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={}),t&&s)for(var c in s)void 0===t[c]&&(t[c]=s[c]);else t||(t=s||{});if(1===r)t.children=i;else if(r>1){for(var a=Array(r),d=0;d<r;d++)a[d]=arguments[d+3];t.children=a}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});var x=e=>v("svg",{className:e.className,viewBox:"0 0 20 6",version:"1.1"},void 0,v("path",{d:"M0,5.5 C1.10679602,5.5 -0.215330116,5.5 1.99826192,5.5 L7.98259552,1.17191675 C9.24211692,0.260985956 10.9698221,0.277805319 12.210413,1.21307493 L18,5.5 C19.5801495,5.5 19.2099252,5.5 20,5.5",stroke:"inherit",strokeWidth:"1",fill:"inherit"})),w=o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),P=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),N=o("./src/reddit/models/User/index.ts"),_=o("./src/reddit/selectors/experiments/dnPrePrompt.ts"),k=o("./src/reddit/selectors/user.ts"),C=o("./src/reddit/components/NotificationsPrePrompt/index.m.less"),S=o.n(C),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},A=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,i){var s=t&&t.defaultProps,r=arguments.length-3;if(o||0===r||(o={}),o&&s)for(var c in s)void 0===o[c]&&(o[c]=s[c]);else o||(o=s||{});if(1===r)o.children=i;else if(r>1){for(var a=Array(r),d=0;d<r;d++)a[d]=arguments[d+3];o.children=a}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();const M=Object(c.createStructuredSelector)({currentUser:k.j,language:k.M,variant:_.a}),q=Object(r.connect)(M,e=>({closePrePrompt:()=>{Object(f.a)()&&localStorage.setItem(m.i,m.j),e(Object(m.o)()),e((e,t)=>y.g(t()))},requestPermissions:()=>{e((e,t)=>y.f(t())),Object(b.a)().then(t=>e(t.requestNotificationsPermissions(!0,!0)))}}));const L=d()(Object(u.a)(class extends s.a.Component{constructor(){super(...arguments),this.state={hideContent:!1},this.handleAllowNotificationsClick=(()=>{this.setState({hideContent:!0},this.props.requestPermissions)})}render(){var e=this.props;const t=e.currentUser,o=e.language;return this.state.hideContent||!Object(_.c)(this.props.variant)?null:A(g.c,{className:S.a.modalBody},void 0,A(x,{className:S.a.arrow}),A(g.h,{},void 0,A(w.a,{widthLeft:80},void 0,A(O,{className:S.a.snoo}),A("div",{},void 0,A("div",{className:Object(p.a)(S.a.title,!t&&S.a.titleLarge)},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.title")),A("div",{className:Object(p.a)(S.a.body,!t&&S.a.bodyLarge)},void 0,t?Object(l.a)(o,"desktopNotifications.prePrompt.body.loggedIn",{userName:Object(N.e)(t)}):Object(l.a)(o,"desktopNotifications.prePrompt.body.loggedOut"))))),A(g.e,{},void 0,A(g.a,{onClick:this.props.closePrePrompt},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.notNow")),A(j.d,{className:S.a.allow,onClick:this.handleAllowNotificationsClick},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.allowNotifications"))))}})).withConfig({componentId:"vuhn8f-0"})(["."," {border: 1px solid ",";}."," {color: ",";}."," {color: ",";}."," {fill: ",";stroke: ",";}"],S.a.modalBody,e=>Object(P.c)(e).line,S.a.title,e=>Object(P.c)(e).bodyText,S.a.body,e=>Object(P.c)(e).metaText,S.a.arrow,e=>Object(P.c)(e).body,e=>Object(P.c)(e).line),D=Object(a.css)(["padding-top: 0;z-index: 100;"]);t.default=q(e=>e.variant?s.a.createElement(L,I({},e,{className:S.a.modalContainer,overlayCustomStyles:D,withOverlay:Object(_.b)(e.variant)})):null)},"./src/reddit/helpers/trackers/notifications.ts":function(e,t,o){"use strict";o.d(t,"i",function(){return a}),o.d(t,"b",function(){return d}),o.d(t,"c",function(){return l}),o.d(t,"d",function(){return u}),o.d(t,"h",function(){return p}),o.d(t,"f",function(){return f}),o.d(t,"g",function(){return m}),o.d(t,"n",function(){return g}),o.d(t,"o",function(){return h}),o.d(t,"m",function(){return O}),o.d(t,"j",function(){return y}),o.d(t,"k",function(){return v}),o.d(t,"l",function(){return x}),o.d(t,"a",function(){return k}),o.d(t,"e",function(){return M});var n=o("./src/reddit/models/PushNotification/index.ts"),i=o("./src/reddit/selectors/telemetry.ts"),s=o("./src/telemetry/index.ts");const r=e=>Object.assign({},i.defaults(e),{noun:"desktop_notification_permissions"}),c=e=>Object.assign({},i.defaults(e),{noun:"desktop_notif_preprompt_permissions"}),a=e=>{Object(s.a)(Object.assign({},r(e),{action:"view",source:"popup"}))},d=e=>{Object(s.a)(Object.assign({},r(e),{action:"allow",source:"popup"}))},l=e=>{Object(s.a)(Object.assign({},r(e),{action:"block",source:"popup"}))},u=e=>{Object(s.a)(Object.assign({},r(e),{action:"close",source:"popup"}))},p=e=>{Object(s.a)(Object.assign({},c(e),{action:"view",source:"popup"}))},f=e=>{Object(s.a)(Object.assign({},c(e),{action:"allow",source:"popup"}))},m=e=>{Object(s.a)(Object.assign({},c(e),{action:"close",source:"popup"}))},b=(e,t,o)=>Object.assign({},i.defaults(e),{actionInfo:i.actionInfo(e,{success:t,reason:o}),noun:"desktop_push_token"}),g=e=>{Object(s.a)(Object.assign({},b(e,!0),{action:"request",source:"notifications"}))},h=e=>{Object(s.a)(Object.assign({},b(e,!0),{action:"register",source:"notifications"}))},O=(e,t)=>{Object(s.a)(Object.assign({},b(e,!1,t),{action:"bail",source:"notifications"}))},j=e=>Object.assign({},i.defaults(e),{noun:"desktop_push_notification"}),y=(e,t,o)=>{Object(s.a)(Object.assign({},j(e),{notification:i.notification(e,t,o),action:"click",source:"notifications",correlationId:t}))},v=(e,t,o)=>{Object(s.a)(Object.assign({},j(e),{notification:i.notification(e,t,o),action:"close",source:"notifications",correlationId:t}))},x=(e,t,o)=>{Object(s.a)(Object.assign({},j(e),{notification:i.notification(e,t,o),action:"receive",source:"notifications",correlationId:t}))},w=e=>(t,o)=>{Object(s.a)(Object.assign({},i.defaults(t),{action:(e=>e?"enable":"disable")(o),noun:e,source:"notifications"}))},P=w("chat_messages"),N=w("chat_requests"),_=w("comment_replies"),k=w("desktop_notification_permissions"),C=w("post_replies"),S=w("private_messages"),I=w("trending_posts"),A=w("username_mention"),M=(e,t,o)=>{switch(t){case n.a.ChatMessages:P(e,o),N(e,o);break;case n.a.TrendingPosts:I(e,o);break;case n.a.UnreadMessages:_(e,o),C(e,o),S(e,o),A(e,o)}}},"./src/reddit/layout/twoCol/ExpandRight/index.tsx":function(e,t,o){"use strict";var n,i=o("./node_modules/react/index.js"),s=o.n(i),r=o("./bundled-modules/styled-components/styled-components.min.js"),c=o.n(r),a=o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),d=o("./src/reddit/helpers/styles/components/index.tsx"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var s=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={}),t&&s)for(var c in s)void 0===t[c]&&(t[c]=s[c]);else t||(t=s||{});if(1===r)t.children=i;else if(r>1){for(var a=Array(r),d=0;d<r;d++)a[d]=arguments[d+3];t.children=a}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(o[n[i]]=e[n[i]])}return o};const f=c()(Object(d.a)()).withConfig({componentId:"zqnwn3-0"})(["flex: 0 0 ",";margin-right: ",";"],e=>e.width?`${e.width}px`:"",({gutter:e})=>`${e||0}px`),m=c.a.div.withConfig({componentId:"zqnwn3-1"})(["flex: 1 1 100%;overflow: hidden;width: 100%;"]);t.a=c()(Object(a.a)(e=>{const t=e.className,o=e.children,n=e.widthLeft,i=e.gutter,r=p(e,["className","children","widthLeft","gutter"]);return s.a.createElement("div",l({className:t},r),u(f,{width:n,gutter:i},void 0,Array.isArray(o)&&o[0]),u(m,{},void 0,Array.isArray(o)&&o[1]))},2)).withConfig({componentId:"zqnwn3-2"})(["display: flex;flex-direction: row;"])},"./src/reddit/models/PushNotification/index.ts":function(e,t,o){"use strict";var n;o.d(t,"a",function(){return n}),function(e){e.ChatMessages="chatMessages",e.TrendingPosts="trendingPosts",e.UnreadMessages="unreadMessages"}(n||(n={}))},"./src/reddit/selectors/experiments/dnPrePrompt.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o.d(t,"b",function(){return r}),o.d(t,"c",function(){return c});var n=o("./src/reddit/constants/experiments.ts"),i=o("./src/reddit/helpers/chooseVariant/index.ts");const s=e=>{const t=Object(i.b)(e,{experimentEligibilitySelector:i.a,experimentName:n.j});return Object(n.O)(t)?void 0:t},r=e=>e===n.i.DarkPrePrompt||e===n.i.DarkSystemDialogue,c=e=>e===n.i.DarkPrePrompt||e===n.i.PrePrompt}}]);
//# sourceMappingURL=NotificationsPrePromptLoader.dfca2dc4c325ffeab713.js.map

}
/*
     FILE ARCHIVED ON 20:36:04 Jan 31, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:56 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.061
  cdx.remote: 0.107
  esindex: 0.012
  LoadShardBlock: 121.946 (6)
  PetaboxLoader3.datanode: 110.051 (7)
  load_resource: 145.219
  PetaboxLoader3.resolve: 87.825
*/