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

(window.webpackJsonp=window.webpackJsonp||[]).push([["NotificationsPrePromptLoader"],{"./src/reddit/components/NotificationsPrePrompt/index.m.less":function(e,t,o){e.exports={modalContainer:"_3uA-tRfnkYO-78DbpSdKMh",modalBody:"_3ZQQPHRTItIinpXhny3ZDt",title:"_3t6MWcHrGFpGj4vlgq-xEr",titleLarge:"_1FvWIle80DgjBL62Tdt2eq",body:"_3Z9uK9KORZK0ehS0hs_45y",fvfo:"_3p2kO5KdyLS-THr21hfHwq",bodyLarge:"_12G9Se1M4wodVC-R3ANHbS",allow:"_1Lq_w8Q5F_T8F4AYDucl8g",arrow:"_2xbwjCYA8CljeuOnJamg91",snoo:"UzNVGSNFIiN2Q6xXrrIxy"}},"./src/reddit/components/NotificationsPrePrompt/index.tsx":function(e,t,o){"use strict";o.r(t);var n,s=o("./node_modules/react/index.js"),r=o.n(s),i=o("./node_modules/react-redux/es/index.js"),a=o("./node_modules/reselect/lib/index.js"),c=o("./bundled-modules/styled-components/styled-components.min.js"),d=o.n(c),l=o("./src/app/strings/index.ts"),u=o("./src/higherOrderComponents/asModal.tsx"),p=o("./src/lib/classNames/index.ts"),f=o("./src/lib/localStorageAvailable/index.ts"),m=o("./src/reddit/actions/notifications/constants.ts"),b=o("./src/reddit/actions/notifications/loader.ts"),h=o("./src/reddit/components/ModalStyledComponents/index.tsx"),g=o("./src/reddit/icons/svgs/Snoo/index.tsx"),O=d()(g.a).withConfig({componentId:"s1qx9anm-0"})(["margin-right: 8px;height: 32px;"]),j=o("./src/reddit/controls/Button/index.tsx"),v=o("./src/reddit/helpers/trackers/notifications.ts"),y=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,s){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});var x=e=>y("svg",{className:e.className,viewBox:"0 0 20 6",version:"1.1"},void 0,y("path",{d:"M0,5.5 C1.10679602,5.5 -0.215330116,5.5 1.99826192,5.5 L7.98259552,1.17191675 C9.24211692,0.260985956 10.9698221,0.277805319 12.210413,1.21307493 L18,5.5 C19.5801495,5.5 19.2099252,5.5 20,5.5",stroke:"inherit",strokeWidth:"1",fill:"inherit"})),w=o("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),P=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),N=o("./src/reddit/models/User/index.ts"),_=o("./src/reddit/selectors/experiments/dnPrePrompt.ts"),k=o("./src/reddit/selectors/user.ts"),C=o("./src/reddit/components/NotificationsPrePrompt/index.m.less"),S=o.n(C),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},A=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,s){var r=t&&t.defaultProps,i=arguments.length-3;if(o||0===i||(o={}),o&&r)for(var a in r)void 0===o[a]&&(o[a]=r[a]);else o||(o=r||{});if(1===i)o.children=s;else if(i>1){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+3];o.children=c}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();const L=Object(a.createStructuredSelector)({currentUser:k.j,language:k.N,variant:_.a}),q=Object(i.connect)(L,e=>({closePrePrompt:()=>{Object(f.a)()&&localStorage.setItem(m.i,m.j),e(Object(m.o)()),e((e,t)=>v.h(t()))},requestPermissions:()=>{e((e,t)=>v.g(t())),Object(b.a)().then(t=>e(t.requestNotificationsPermissions(!0,!0)))}}));const M=d()(Object(u.a)(class extends r.a.Component{constructor(){super(...arguments),this.state={hideContent:!1},this.handleAllowNotificationsClick=(()=>{this.setState({hideContent:!0},this.props.requestPermissions)})}render(){var e=this.props;const t=e.currentUser,o=e.language;return this.state.hideContent||!Object(_.c)(this.props.variant)?null:A(h.c,{className:S.a.modalBody},void 0,A(x,{className:S.a.arrow}),A(h.h,{},void 0,A(w.a,{widthLeft:80},void 0,A(O,{className:S.a.snoo}),A("div",{},void 0,A("div",{className:Object(p.a)(S.a.title,!t&&S.a.titleLarge)},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.title")),A("div",{className:Object(p.a)(S.a.body,!t&&S.a.bodyLarge)},void 0,t?Object(l.a)(o,"desktopNotifications.prePrompt.body.loggedIn",{userName:Object(N.e)(t)}):Object(l.a)(o,"desktopNotifications.prePrompt.body.loggedOut"))))),A(h.e,{},void 0,A(h.a,{onClick:this.props.closePrePrompt},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.notNow")),A(j.d,{className:S.a.allow,onClick:this.handleAllowNotificationsClick},void 0,Object(l.a)(o,"desktopNotifications.prePrompt.allowNotifications"))))}})).withConfig({componentId:"vuhn8f-0"})(["."," {border: 1px solid ",";}."," {color: ",";}."," {color: ",";}."," {fill: ",";stroke: ",";}"],S.a.modalBody,e=>Object(P.c)(e).line,S.a.title,e=>Object(P.c)(e).bodyText,S.a.body,e=>Object(P.c)(e).metaText,S.a.arrow,e=>Object(P.c)(e).body,e=>Object(P.c)(e).line),T=Object(c.css)(["padding-top: 0;z-index: 100;"]);t.default=q(e=>e.variant?r.a.createElement(M,I({},e,{className:S.a.modalContainer,overlayCustomStyles:T,withOverlay:Object(_.b)(e.variant)})):null)},"./src/reddit/helpers/trackers/notifications.ts":function(e,t,o){"use strict";o.d(t,"j",function(){return c}),o.d(t,"c",function(){return d}),o.d(t,"d",function(){return l}),o.d(t,"e",function(){return u}),o.d(t,"i",function(){return p}),o.d(t,"g",function(){return f}),o.d(t,"h",function(){return m}),o.d(t,"l",function(){return h}),o.d(t,"m",function(){return g}),o.d(t,"k",function(){return O}),o.d(t,"b",function(){return j}),o.d(t,"a",function(){return P}),o.d(t,"f",function(){return S});var n=o("./src/reddit/models/PushNotification/index.ts"),s=o("./src/reddit/selectors/telemetry.ts"),r=o("./src/telemetry/index.ts");const i=e=>Object.assign({},s.defaults(e),{noun:"desktop_notification_permissions"}),a=e=>Object.assign({},s.defaults(e),{noun:"desktop_notif_preprompt_permissions"}),c=e=>{Object(r.a)(Object.assign({},i(e),{action:"view",source:"popup"}))},d=e=>{Object(r.a)(Object.assign({},i(e),{action:"allow",source:"popup"}))},l=e=>{Object(r.a)(Object.assign({},i(e),{action:"block",source:"popup"}))},u=e=>{Object(r.a)(Object.assign({},i(e),{action:"close",source:"popup"}))},p=e=>{Object(r.a)(Object.assign({},a(e),{action:"view",source:"popup"}))},f=e=>{Object(r.a)(Object.assign({},a(e),{action:"allow",source:"popup"}))},m=e=>{Object(r.a)(Object.assign({},a(e),{action:"close",source:"popup"}))},b=(e,t,o)=>Object.assign({},s.defaults(e),{actionInfo:s.actionInfo(e,{success:t,reason:o}),noun:"desktop_push_token"}),h=e=>{Object(r.a)(Object.assign({},b(e,!0),{action:"request",source:"notifications"}))},g=e=>{Object(r.a)(Object.assign({},b(e,!0),{action:"register",source:"notifications"}))},O=(e,t)=>{Object(r.a)(Object.assign({},b(e,!1,t),{action:"bail",source:"notifications"}))},j=e=>Object.assign({},(e=>Object.assign({},s.defaults(e),{noun:"desktop_push_notification"}))(e),{notification:s.notification(e,void 0,void 0),action:void 0,source:"notifications",correlationId:void 0}),v=e=>(t,o)=>{Object(r.a)(Object.assign({},s.defaults(t),{action:(e=>e?"enable":"disable")(o),noun:e,source:"notifications"}))},y=v("chat_messages"),x=v("chat_requests"),w=v("comment_replies"),P=v("desktop_notification_permissions"),N=v("post_replies"),_=v("private_messages"),k=v("trending_posts"),C=v("username_mention"),S=(e,t,o)=>{switch(t){case n.a.ChatMessages:y(e,o),x(e,o);break;case n.a.TrendingPosts:k(e,o);break;case n.a.UnreadMessages:w(e,o),N(e,o),_(e,o),C(e,o)}}},"./src/reddit/layout/twoCol/ExpandRight/index.tsx":function(e,t,o){"use strict";var n,s=o("./node_modules/react/index.js"),r=o.n(s),i=o("./bundled-modules/styled-components/styled-components.min.js"),a=o.n(i),c=o("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),d=o("./src/reddit/helpers/styles/components/index.tsx"),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},u=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,s){var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={}),t&&r)for(var a in r)void 0===t[a]&&(t[a]=r[a]);else t||(t=r||{});if(1===i)t.children=s;else if(i>1){for(var c=Array(i),d=0;d<i;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}}),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&(o[n[s]]=e[n[s]])}return o};const f=a()(Object(d.a)()).withConfig({componentId:"zqnwn3-0"})(["flex: 0 0 ",";margin-right: ",";"],e=>e.width?`${e.width}px`:"",({gutter:e})=>`${e||0}px`),m=a.a.div.withConfig({componentId:"zqnwn3-1"})(["flex: 1 1 100%;overflow: hidden;width: 100%;"]);t.a=a()(Object(c.a)(e=>{const t=e.className,o=e.children,n=e.widthLeft,s=e.gutter,i=p(e,["className","children","widthLeft","gutter"]);return r.a.createElement("div",l({className:t},i),u(f,{width:n,gutter:s},void 0,Array.isArray(o)&&o[0]),u(m,{},void 0,Array.isArray(o)&&o[1]))},2)).withConfig({componentId:"zqnwn3-2"})(["display: flex;flex-direction: row;"])},"./src/reddit/models/PushNotification/index.ts":function(e,t,o){"use strict";var n;o.d(t,"a",function(){return n}),function(e){e.ChatMessages="chatMessages",e.TrendingPosts="trendingPosts",e.UnreadMessages="unreadMessages"}(n||(n={}))},"./src/reddit/selectors/experiments/dnPrePrompt.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return a});var n=o("./src/reddit/constants/experiments.ts"),s=o("./src/reddit/helpers/chooseVariant/index.ts");const r=e=>{const t=Object(s.b)(e,{experimentEligibilitySelector:s.a,experimentName:n.i});return Object(n.L)(t)?void 0:t},i=e=>e===n.h.DarkPrePrompt||e===n.h.DarkSystemDialogue,a=e=>e===n.h.DarkPrePrompt||e===n.h.PrePrompt}}]);
//# sourceMappingURL=NotificationsPrePromptLoader.62eb41e19fffee071347.js.map

}
/*
     FILE ARCHIVED ON 20:48:02 Feb 28, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:58 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.082
  exclusion.robots.policy: 0.071
  cdx.remote: 0.115
  esindex: 0.013
  LoadShardBlock: 130.32 (6)
  PetaboxLoader3.datanode: 163.534 (7)
  load_resource: 165.723
  PetaboxLoader3.resolve: 67.569
*/