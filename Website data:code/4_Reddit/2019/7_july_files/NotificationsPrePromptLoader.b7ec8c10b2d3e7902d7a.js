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

(window.webpackJsonp=window.webpackJsonp||[]).push([["NotificationsPrePromptLoader"],{"./src/reddit/components/NotificationsPrePrompt/index.m.less":function(e,t,s){e.exports={modalContainer:"_3uA-tRfnkYO-78DbpSdKMh",modalBody:"_3ZQQPHRTItIinpXhny3ZDt",title:"_3t6MWcHrGFpGj4vlgq-xEr",titleLarge:"_1FvWIle80DgjBL62Tdt2eq",body:"_3Z9uK9KORZK0ehS0hs_45y",bodyLarge:"_12G9Se1M4wodVC-R3ANHbS",allow:"_1Lq_w8Q5F_T8F4AYDucl8g",arrow:"_2xbwjCYA8CljeuOnJamg91",snoo:"UzNVGSNFIiN2Q6xXrrIxy",overlay:"_3Ig_EsWWVLquWs2yBBQjec"}},"./src/reddit/components/NotificationsPrePrompt/index.tsx":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/react/index.js"),o=s.n(n),i=s("./node_modules/react-redux/es/index.js"),r=s("./node_modules/reselect/es/index.js"),a=s("./src/app/strings/index.ts"),c=s("./src/reddit/i18n/components.tsx"),d=s("./src/higherOrderComponents/asModal.tsx"),l=s("./src/lib/classNames/index.ts"),u=s("./src/lib/localStorageAvailable/index.ts"),p=s("./src/reddit/actions/notifications/constants.ts"),m=s("./src/reddit/actions/notifications/loader.ts"),f=s("./src/reddit/components/ModalStyledComponents/index.tsx"),b=s("./src/reddit/components/Snoo/index.tsx"),g=s("./src/reddit/controls/Button/index.tsx"),h=s("./src/reddit/helpers/trackers/notifications.ts");var x=e=>o.a.createElement("svg",{className:e.className,viewBox:"0 0 20 6",version:"1.1"},o.a.createElement("path",{d:"M0,5.5 C1.10679602,5.5 -0.215330116,5.5 1.99826192,5.5 L7.98259552,1.17191675 C9.24211692,0.260985956 10.9698221,0.277805319 12.210413,1.21307493 L18,5.5 C19.5801495,5.5 19.2099252,5.5 20,5.5",stroke:"inherit",strokeWidth:"1",fill:"inherit"})),O=s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),j=s("./src/reddit/models/User/index.ts"),w=s("./src/reddit/selectors/experiments/dnPrePrompt.ts"),v=s("./src/reddit/selectors/user.ts"),y=s("./src/reddit/components/NotificationsPrePrompt/index.m.less"),P=s.n(y);const N=Object(r.c)({currentUser:v.k,language:v.S,variant:w.a}),_=Object(i.b)(N,e=>({closePrePrompt:()=>{Object(u.a)()&&localStorage.setItem(p.i,p.j),e(Object(p.o)()),e((e,t)=>h.h(t()))},requestPermissions:()=>{e((e,t)=>h.g(t())),Object(m.a)().then(t=>e(t.requestNotificationsPermissions(!0,!0)))}}));const C=Object(d.a)(class extends o.a.Component{constructor(){super(...arguments),this.state={hideContent:!1},this.handleAllowNotificationsClick=(()=>{this.setState({hideContent:!0},this.props.requestPermissions)})}render(){var e=this.props;const t=e.currentUser,s=e.language;return this.state.hideContent||!Object(w.c)(this.props.variant)?null:o.a.createElement(f.c,{className:P.a.modalBody},o.a.createElement(x,{className:P.a.arrow}),o.a.createElement(f.h,null,o.a.createElement(O.a,{widthLeft:80},o.a.createElement(b.a,{className:P.a.snoo}),o.a.createElement("div",null,o.a.createElement("div",{className:Object(l.a)(P.a.title,!t&&P.a.titleLarge)},o.a.createElement(c.c,null,"Enable notifications")),o.a.createElement("div",{className:Object(l.a)(P.a.body,!t&&P.a.bodyLarge)},t?Object(a.a)(s,"desktopNotifications.prePrompt.body.loggedIn",{userName:Object(j.f)(t)}):Object(a.a)(s,"desktopNotifications.prePrompt.body.loggedOut"))))),o.a.createElement(f.e,null,o.a.createElement(f.a,{onClick:this.props.closePrePrompt},o.a.createElement(c.c,null,"Not now")),o.a.createElement(g.f,{className:P.a.allow,onClick:this.handleAllowNotificationsClick},o.a.createElement(c.c,null,"Allow Notifications"))))}});t.default=_(e=>e.variant?o.a.createElement(C,Object.assign({},e,{className:P.a.modalContainer,overlayClassName:P.a.overlay,withOverlay:Object(w.b)(e.variant)})):null)},"./src/reddit/components/Snoo/index.m.less":function(e,t,s){e.exports={Component:"LTGGGuKkF69FYEjoO3dP-",component:"LTGGGuKkF69FYEjoO3dP-"}},"./src/reddit/components/Snoo/index.tsx":function(e,t,s){"use strict";var n=s("./src/reddit/icons/svgs/Snoo/index.tsx"),o=s("./src/reddit/components/Snoo/index.m.less"),i=s.n(o),r=s("./src/lib/lessComponent.tsx");t.a=r.a.wrapped(n.a,"Component",i.a)},"./src/reddit/helpers/trackers/notifications.ts":function(e,t,s){"use strict";s.d(t,"j",function(){return c}),s.d(t,"c",function(){return d}),s.d(t,"d",function(){return l}),s.d(t,"e",function(){return u}),s.d(t,"i",function(){return p}),s.d(t,"g",function(){return m}),s.d(t,"h",function(){return f}),s.d(t,"l",function(){return g}),s.d(t,"m",function(){return h}),s.d(t,"k",function(){return x}),s.d(t,"b",function(){return O}),s.d(t,"a",function(){return P}),s.d(t,"f",function(){return E});var n=s("./src/reddit/models/PushNotification/index.ts"),o=s("./src/reddit/selectors/telemetry.ts"),i=s("./src/telemetry/index.ts");const r=e=>Object.assign({},o.defaults(e),{noun:"desktop_notification_permissions"}),a=e=>Object.assign({},o.defaults(e),{noun:"desktop_notif_preprompt_permissions"}),c=e=>{Object(i.a)(Object.assign({},r(e),{action:"view",source:"popup"}))},d=e=>{Object(i.a)(Object.assign({},r(e),{action:"allow",source:"popup"}))},l=e=>{Object(i.a)(Object.assign({},r(e),{action:"block",source:"popup"}))},u=e=>{Object(i.a)(Object.assign({},r(e),{action:"close",source:"popup"}))},p=e=>{Object(i.a)(Object.assign({},a(e),{action:"view",source:"popup"}))},m=e=>{Object(i.a)(Object.assign({},a(e),{action:"allow",source:"popup"}))},f=e=>{Object(i.a)(Object.assign({},a(e),{action:"close",source:"popup"}))},b=(e,t,s)=>Object.assign({},o.defaults(e),{actionInfo:o.actionInfo(e,{success:t,reason:s}),noun:"push_token"}),g=e=>{Object(i.a)(Object.assign({},b(e,!0),{action:"request",source:"notifications"}))},h=e=>{Object(i.a)(Object.assign({},b(e,!0),{action:"register",source:"notifications"}))},x=(e,t)=>{Object(i.a)(Object.assign({},b(e,!1,t),{action:"bail",source:"notifications"}))},O=e=>Object.assign({},(e=>Object.assign({},o.defaults(e),{noun:"push_notification"}))(e),{notification:o.notification(e,void 0,void 0),action:void 0,source:"notifications",correlationId:void 0}),j=e=>(t,s)=>{Object(i.a)(Object.assign({},o.defaults(t),{action:(e=>e?"enable":"disable")(s),noun:e,source:"notifications"}))},w=j("chat_messages"),v=j("chat_requests"),y=j("comment_replies"),P=j("desktop_notification_permissions"),N=j("post_replies"),_=j("private_messages"),C=j("trending_posts"),k=j("username_mention"),E=(e,t,s)=>{switch(t){case n.a.ChatMessages:w(e,s),v(e,s);break;case n.a.TrendingPosts:C(e,s);break;case n.a.UnreadMessages:y(e,s),N(e,s),_(e,s),k(e,s)}}},"./src/reddit/layout/twoCol/ExpandRight/index.tsx":function(e,t,s){"use strict";var n=s("./node_modules/react/index.js"),o=s.n(n),i=s("./bundled-modules/styled-components/styled-components.min.js"),r=s.n(i),a=s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),c=s("./src/reddit/helpers/styles/components/index.tsx"),d=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(s[n[o]]=e[n[o]])}return s};const l=r()(Object(c.a)()).withConfig({componentId:"s5kszqe-0"})(["flex: 0 0 ",";",";margin-right: ",";"],e=>e.width?`${e.width}px`:"",e=>e.height?`height: ${e.height}px`:"",({gutter:e})=>`${e||0}px`),u=r.a.div.withConfig({componentId:"s5kszqe-1"})(["flex: 1 1 100%;overflow: hidden;width: 100%;"]);t.a=r()(Object(a.a)(e=>{const t=e.className,s=e.children,n=e.heightLeft,i=e.widthLeft,r=e.gutter,a=d(e,["className","children","heightLeft","widthLeft","gutter"]);return o.a.createElement("div",Object.assign({className:t},a),o.a.createElement(l,{height:n,width:i,gutter:r},Array.isArray(s)&&s[0]),o.a.createElement(u,null,Array.isArray(s)&&s[1]))},2)).withConfig({componentId:"s5kszqe-2"})(["display: flex;flex-direction: row;"])},"./src/reddit/models/PushNotification/index.ts":function(e,t,s){"use strict";var n;s.d(t,"a",function(){return n}),function(e){e.ChatMessages="chatMessages",e.TrendingPosts="trendingPosts",e.UnreadMessages="unreadMessages"}(n||(n={}))},"./src/reddit/selectors/experiments/dnPrePrompt.ts":function(e,t,s){"use strict";s.d(t,"a",function(){return i}),s.d(t,"b",function(){return r}),s.d(t,"c",function(){return a});var n=s("./src/reddit/constants/experiments.ts"),o=s("./src/reddit/helpers/chooseVariant/index.ts");const i=e=>{const t=Object(o.b)(e,{experimentEligibilitySelector:o.a,experimentName:n.s});return Object(n.wb)(t)?void 0:t},r=e=>e===n.r.DarkPrePrompt||e===n.r.DarkSystemDialogue,a=e=>e===n.r.DarkPrePrompt||e===n.r.PrePrompt}}]);
//# sourceMappingURL=NotificationsPrePromptLoader.b7ec8c10b2d3e7902d7a.js.map

}
/*
     FILE ARCHIVED ON 20:57:57 Jun 27, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:56 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.1
  exclusion.robots.policy: 0.087
  cdx.remote: 0.142
  esindex: 0.014
  LoadShardBlock: 95.927 (6)
  PetaboxLoader3.datanode: 109.357 (7)
  load_resource: 71.934
  PetaboxLoader3.resolve: 39.633
*/