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

(window.webpackJsonp=window.webpackJsonp||[]).push([["EmailCollectionTooltip"],{"./src/reddit/components/EmailCollection/Envelope/index.m.less":function(e,t,s){e.exports={container:"_1yYBGklEZ27AA6Pk4a5xcB",content:"_1tsHXJq8O99kY-Hnw0TU9H",envelopeIcon:"_2MwJgJPAzuZmaOVwlLfjeO",warningIcon:"_1UqQ04HyR3qGPylb_9baOq"}},"./src/reddit/components/EmailCollection/Envelope/index.tsx":function(e,t,s){"use strict";var n=s("./node_modules/react/index.js"),a=s.n(n),o=s("./src/lib/classNames/index.ts"),i=s("./src/reddit/icons/svgs/Envelope/index.tsx"),c=s("./src/reddit/icons/svgs/Warning/index.tsx"),l=s("./src/reddit/components/EmailCollection/Envelope/index.m.less"),r=s.n(l);t.a=e=>a.a.createElement("div",{className:Object(o.a)(r.a.container,e.className)},a.a.createElement("div",{className:r.a.content},a.a.createElement(i.a,{className:r.a.envelopeIcon}),a.a.createElement(c.a,{className:Object(o.a)(r.a.warningIcon,e.warningClassName)})))},"./src/reddit/components/EmailCollection/Tooltip/index.m.less":function(e,t,s){e.exports={container:"_1OHU0AjPTE-FUvNKxuzeqm",containerHidden:"_2Hrc-FiL-gcvEHPjXQJtje",layout:"_3P4F20dAdxOLhYuQIp83Un",topLine:"Zg2H9-VJlQG31pGn_sdL_",close:"_1pjsDeA0UeCHBxQiLZRM8O",closeIcon:"_2a-5mXVPVNZDKkCjoMUXyS",header:"uOYfiMOx6GVTa6VjiFu2W",envelope:"_38w_kqptaAt6yMs7mlfrY4",title:"_3srJmTJ1O6dDecp9Bb3URc",description:"T4JXk56EjkLj-1nhW1bDf",addEmail:"_1Cdv8T1PfBIwryMYlCp7U2"}},"./src/reddit/components/EmailCollection/Tooltip/index.tsx":function(e,t,s){"use strict";s.r(t);var n=s("./node_modules/react/index.js"),a=s.n(n),o=s("./node_modules/react-redux/es/index.js"),i=s("./src/higherOrderComponents/addOverlayEvents.tsx"),c=s("./src/higherOrderComponents/asTooltip.tsx"),l=s("./src/lib/classNames/index.ts"),r=s("./src/reddit/actions/emailCollection/index.ts"),d=s("./src/reddit/actions/modal.ts"),m=s("./src/reddit/components/EmailCollection/Envelope/index.tsx"),p=s("./src/reddit/components/Settings/modalIds.ts"),x=s("./src/reddit/components/TrackingHelper/index.tsx"),E=s("./src/reddit/controls/Button/index.tsx"),u=s("./src/reddit/helpers/trackers/emailCollection.ts"),v=s("./src/reddit/i18n/components.tsx"),h=s("./src/reddit/icons/svgs/Close/index.tsx"),g=s("./src/reddit/components/EmailCollection/Tooltip/index.m.less"),b=s.n(g);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e}).apply(this,arguments)}const f="tooltip",j=["left","bottom"],C=["right","top"],w=Object(o.b)(null,e=>({onAddEmail:()=>e(Object(d.h)(p.d)),onClose:()=>e(Object(r.a)())}));class N extends a.a.Component{constructor(){super(...arguments),this.state={isClosed:!1},this.closeTooltip=()=>{this.props.sendEvent(Object(u.e)(f)),this.setState({isClosed:!0},this.props.onClose)},this.addEmail=()=>{this.props.onAddEmail(),this.props.sendEvent(Object(u.a)(f))}}componentDidMount(){this.props.sendEvent(Object(u.f)(f))}render(){return this.state.isClosed?null:a.a.createElement("div",{className:Object(l.a)(b.a.container,this.props.isHidden&&b.a.containerHidden)},a.a.createElement("div",{className:b.a.layout},a.a.createElement("div",{className:b.a.topLine}),a.a.createElement("button",{className:b.a.close,onClick:this.closeTooltip},a.a.createElement(h.a,{className:b.a.closeIcon})),a.a.createElement("div",{className:b.a.header},a.a.createElement(m.a,{className:b.a.envelope}),a.a.createElement("h2",{className:b.a.title},a.a.createElement(v.c,null,"Add your email to verify your account"))),a.a.createElement("p",{className:b.a.description},a.a.createElement(v.c,null,"Add and verify your email to prevent being locked out of your account.")),a.a.createElement(E.f,{className:b.a.addEmail,redditStyle:!0,onClick:this.addEmail},a.a.createElement(v.c,null,"Add email"))))}}const y=Object(c.a)(w(Object(x.b)(N)),[i.a.Click,i.a.Keydown,i.a.Resize]);t.default=e=>a.a.createElement(y,O({},e,{isFixed:!0,targetPosition:j,tooltipPosition:C}))},"./src/reddit/icons/svgs/Warning/index.m.less":function(e,t,s){e.exports={warning:"_3ppQRTaxPs0X9rsFYHfSdf"}},"./src/reddit/icons/svgs/Warning/index.tsx":function(e,t,s){"use strict";var n=s("./node_modules/react/index.js"),a=s.n(n),o=s("./src/lib/classNames/index.ts"),i=s("./src/reddit/icons/svgs/Warning/index.m.less"),c=s.n(i);t.a=e=>a.a.createElement("svg",{className:Object(o.a)(c.a.warning,e.className),viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("circle",{r:"9",cx:"9",cy:"9"}),a.a.createElement("path",{d:"m10.4893 10.9385c-.05.23-.254.395-.489.395-.236 0-.44-.165-.49-.395l-1-4.667c-.031-.148.006-.302.101-.419.095-.118.237-.186.389-.186h2c.151 0 .294.068.388.186.095.117.132.271.101.419zm.431 3.281c-.05.12-.12.23-.21.321-.05.049-.101.089-.151.129l-.179.09c-.061.02-.12.04-.18.051-.07.019-.131.019-.2.019-.26 0-.521-.099-.71-.289-.09-.091-.16-.201-.21-.321-.061-.13-.08-.26-.08-.39 0-.26.109-.519.29-.7.09-.1.2-.17.33-.22.37-.15.809-.06 1.09.22.179.181.29.44.29.7 0 .13-.031.26-.08.39zm-.92-12.219c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8z",fill:"inherit",fillRule:"evenodd",transform:"translate(-1 -1)"}))}}]);
//# sourceMappingURL=EmailCollectionTooltip.005b18977d283c1976c5.js.map

}
/*
     FILE ARCHIVED ON 04:11:04 Oct 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:51:27 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.07
  cdx.remote: 0.099
  esindex: 0.01
  LoadShardBlock: 217.492 (6)
  PetaboxLoader3.datanode: 174.393 (7)
  load_resource: 115.717
  PetaboxLoader3.resolve: 93.502
*/