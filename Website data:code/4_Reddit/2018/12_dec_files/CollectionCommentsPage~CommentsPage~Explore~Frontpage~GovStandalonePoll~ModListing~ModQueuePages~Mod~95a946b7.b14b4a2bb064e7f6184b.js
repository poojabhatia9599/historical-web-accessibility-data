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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovStandalonePoll~ModListing~ModQueuePages~Mod~95a946b7"],{"./src/reddit/components/Badges/UserDisplay/index.m.less":function(e,o,t){e.exports={image:"_2ntJEAiwKXBGvxrJiqxx_2"}},"./src/reddit/components/Badges/UserDisplay/index.tsx":function(e,o,t){"use strict";t.d(o,"b",function(){return b}),t.d(o,"a",function(){return h});var n,r=t("./node_modules/react/index.js"),i=t("./node_modules/react-redux/es/index.js"),s=t("./node_modules/reselect/lib/index.js"),d=t("./src/app/actions/tooltip.ts"),l=t("./src/lib/classNames/index.ts"),c=t("./src/reddit/components/InfoTextTooltip/index.tsx"),a=t("./src/reddit/models/Badge/index.ts"),p=t("./src/reddit/components/Badges/UserDisplay/index.m.less"),u=t.n(p),f=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});function m(e){return f(r.Fragment,{},void 0,e.badges.map(o=>{const t=Object(a.a)(24,24,o),n=`badges-display-${o.id}-${e.uniqueIdentifier}`;return f(r.Fragment,{},void 0,f("img",{className:Object(l.a)(u.a.image,e.className),id:n,src:t.url2x,srcSet:`${t.url}, ${t.url2x} 2x`,onMouseEnter:()=>e.onShowTooltip(n),onMouseLeave:()=>e.onHideTooltip()},o.id),f(c.b,{caretOnTop:!0,tooltipId:n,text:o.title}))}))}const x=Object(s.createStructuredSelector)({badges:(e,{subredditId:o,userId:t})=>{return((e.users.appliedBadges[t]||{})[o]||[]).map(o=>e.badges.models[o]).filter(Boolean)}}),v=Object(s.createStructuredSelector)({badges:(e,{subredditId:o})=>{const t=e.user.account;if(t){return((e.users.appliedBadges[t.id]||{})[o]||[]).map(o=>e.badges.models[o]).filter(Boolean)}return[]}}),g=e=>({onShowTooltip:o=>e(Object(d.d)({tooltipId:o})),onHideTooltip:()=>e(Object(d.f)())}),b=Object(i.connect)(x,g)(m),h=Object(i.connect)(v,g)(m)},"./src/reddit/components/ConfirmUserActionModal/index.tsx":function(e,o,t){"use strict";t("./node_modules/react/index.js");var n,r=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/reselect/lib/index.js"),s=t("./bundled-modules/styled-components/styled-components.min.js"),d=t.n(s),l=t("./src/app/strings/index.ts"),c=t("./src/higherOrderComponents/asModal.tsx"),a=t("./src/reddit/components/ModalStyledComponents/index.tsx"),p=t("./src/reddit/controls/TextButton/index.tsx"),u=t("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),f=t("./src/reddit/selectors/user.ts"),m=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});const x=d()(a.j).withConfig({componentId:"s1mpd70m-0"})(["line-height: 22px;margin: 10px 0px;"]),v=Object(i.createStructuredSelector)({language:f.I}),g=Object(r.connect)(v),b=e=>e.preventDefault();o.a=Object(c.a)(g(e=>m(a.c,{},void 0,m(a.g,{},void 0,m(u.b,{},void 0,m(a.k,{},void 0,e.headerText||Object(l.a)(e.language,"subredditModeration.confirm")),m(p.a,{onClick:()=>{e.trackCancel&&e.trackCancel(),e.toggleModal()}},void 0,m(a.b,{})))),m(a.h,{},void 0,m(x,{},void 0,e.modalText)),m(a.e,{},void 0,m(a.a,{onMouseDown:b,onClick:()=>{e.trackCancel&&e.trackCancel(),e.toggleModal()},"data-redditstyle":!0},void 0,e.cancelActionText||Object(l.a)(e.language,"subredditModeration.buttons.cancel")),m(a.o,{onMouseDown:b,onClick:o=>{e.onConfirm(),e.toggleModal(),e.trackClick()},"data-redditstyle":!0},void 0,e.actionText)))))},"./src/reddit/components/OverflowMenu/index.tsx":function(e,o,t){"use strict";t.d(o,"a",function(){return I});t("./node_modules/react/index.js");var n,r=t("./node_modules/react-redux/es/index.js"),i=t("./node_modules/reselect/lib/index.js"),s=t("./bundled-modules/styled-components/styled-components.min.js"),d=t.n(s),l=t("./src/app/actions/tooltip.ts"),c=t("./src/app/strings/index.ts"),a=t("./src/higherOrderComponents/asTooltip.tsx"),p=t("./src/reddit/constants/colors.ts"),u=t("./src/reddit/contexts/InsideOverlay.tsx"),f=t("./src/reddit/controls/Dropdown/index.tsx"),m=t("./src/reddit/controls/Dropdown/Row.tsx"),x=t("./src/reddit/helpers/styles/mixins/index.tsx"),v=t("./src/reddit/icons/fonts/Menu/index.tsx"),g=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),b=t("./src/reddit/selectors/tooltip.ts"),h=t("./src/reddit/selectors/user.ts"),y=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});const w=d()(f.a).withConfig({componentId:"mpc6lx-0"})(["overflow: visible;margin-top: 0;"]),C=Object(a.a)(w),j=d.a.button.withConfig({componentId:"mpc6lx-1"})(["height: 24px;",""],x.p),O=d()(v.a).withConfig({componentId:"mpc6lx-2"})(["color: ",";"],e=>Object(g.c)(e).actionIcon),I=d()(m.c).withConfig({componentId:"mpc6lx-3"})(["padding: 8px 16px 8px 8px;cursor: pointer;border-top: none;text-transform: none;color: ",";&:hover {color: ",";background-color: ",";fill: ",";border: none;}"],e=>Object(g.c)(e).metaText,e=>Object(g.c)(e).body,p.a.alienblue,e=>Object(g.c)(e).body),S=Object(i.createStructuredSelector)({dropdownIsOpen:(e,{dropdownId:o})=>Object(b.b)(o)(e),language:h.I}),T=Object(r.connect)(S,(e,{dropdownId:o})=>({toggleDropdown:()=>e(Object(l.e)({tooltipId:o}))}));o.b=T(Object(u.b)(e=>y(j,{"aria-expanded":e.dropdownIsOpen,"aria-haspopup":!0,"aria-label":Object(c.a)(e.language,"posts.moreOptions"),className:e.className,onClick:(e=>()=>{e.onClick(),e.toggleDropdown()})(e),onMouseDown:e.handleMouseDown,id:e.dropdownId},void 0,y(O,{}),y(C,{isOverlay:e.isOverlay,isOpen:e.dropdownIsOpen,tooltipId:e.dropdownId,isFixed:e.isFixed,targetPosition:e.targetPosition,tooltipPosition:e.tooltipPosition},void 0,e.children))))},"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx":function(e,o,t){"use strict";var n,r=t("./node_modules/react/index.js"),i=t.n(r),s=t("./node_modules/react-redux/es/index.js"),d=t("./node_modules/reselect/lib/index.js"),l=t("./bundled-modules/styled-components/styled-components.min.js"),c=t.n(l),a=t("./src/app/strings/index.ts"),p=t("./src/higherOrderComponents/asModal.tsx"),u=t("./src/lib/formatApiError/index.ts"),f=t("./src/reddit/actions/postCollection.ts"),m=t("./src/reddit/components/ModalStyledComponents/index.tsx"),x=t("./src/reddit/constants/postCreation.ts"),v=t("./src/reddit/controls/Button/index.tsx"),g=t("./src/reddit/controls/ErrorText/index.tsx"),b=t("./src/reddit/controls/Input/index.tsx"),h=t("./src/reddit/controls/LoadingIcon/index.tsx"),y=t("./src/reddit/helpers/styles/mixins/fonts.tsx"),w=t("./src/reddit/icons/svgs/AddCollection/index.tsx"),C=t("./src/reddit/icons/svgs/Close/index.tsx"),j=t("./src/reddit/layout/row/Inline/index.tsx"),O=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),I=t("./src/reddit/selectors/postCollection.ts"),S=t("./src/reddit/selectors/user.ts"),T=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});const k=Object(a.f)("postCreation.cancel"),M=Object(a.f)("postCreation.create"),$=Object(a.f)("postCreation.save"),P=Object(a.f)("postCreation.collections.createCollection"),_=Object(a.f)("postCreation.collections.createModal.details"),A=Object(a.f)("postCreation.collections.createModal.giveATitle"),B=Object(a.f)("postCreation.collections.createModal.editTitle"),E=Object(a.f)("postCreation.collections.createModal.titlePlaceholderText"),H=c.a.div.withConfig({componentId:"vtp8pv-0"})(["background-color: ",";border-radius: 4px;box-sizing: border-box;display: flex;flex-flow: column nowrap;position: relative;width: 487px;"],e=>Object(O.c)(e).body),N=c.a.div.withConfig({componentId:"vtp8pv-1"})(["display: flex;flex-flow: column nowrap;flex: 1;padding: 24px;"]),D=c.a.div.withConfig({componentId:"vtp8pv-2"})(["","align-items: center;color: ",";display: flex;"],y.titleFontH1,e=>Object(O.c)(e).bodyText),F=c.a.div.withConfig({componentId:"vtp8pv-3"})(["","color: ",";flex: 1;margin: 8px 0px 24px;"],y.bodyFontH5,e=>Object(O.c)(e).bodyText),z=c()(m.e).withConfig({componentId:"vtp8pv-4"})(["display: block;padding: 16px;"]),U=c()(j.a).withConfig({componentId:"vtp8pv-5"})([""]),L=c()(v.g).withConfig({componentId:"vtp8pv-6"})(["margin: 0 8px 0 auto;min-width: 90px;"]),R=c.a.div.withConfig({componentId:"vtp8pv-7"})(["cursor: pointer;position: absolute;top: 15px;right: 15px;"]),V=c()(C.a).withConfig({componentId:"vtp8pv-8"})(["fill: ",";height: 16px;width: 16px;"],e=>Object(O.c)(e).actionIcon),J=c.a.label.withConfig({componentId:"vtp8pv-9"})(["","color: ",";display: flex;flex-flow: column nowrap;height: 65px;"],y.titleFontH4,e=>Object(O.c)(e).bodyText),q=c()(b.a).withConfig({componentId:"vtp8pv-10"})(["","border-radius: 4px;border: 1px solid ",";margin-top: 8px;padding: 12px;"],y.bodyFontH5,e=>Object(O.c)(e).line),W=c()(w.a).withConfig({componentId:"vtp8pv-11"})(["fill: currentColor;height: 24px;margin-right: 8px;width: 24px;"]),G=c()(v.d).withConfig({componentId:"vtp8pv-12"})(["min-width: 98px;"]),Q=c()(h.a).withConfig({componentId:"vtp8pv-13"})(["display: inline-block;margin-bottom: -3px;"]),K=c()(g.a).withConfig({componentId:"vtp8pv-14"})(["padding-top: 4px;display: block;"]),X=Object(d.createStructuredSelector)({collection:I.j,error:I.a,isPending:I.c,language:S.I}),Y=Object(s.connect)(X,(e,o)=>({onCreate:o=>e(Object(f.m)(o)),onUpdate:t=>e(Object(f.r)(o.collectionId,t))}));o.a=Object(p.a)(Y(class extends i.a.PureComponent{constructor(e){super(e),this.onTitleChange=(e=>{this.setState({collectionTitle:e.target.value})}),this.onPrimaryButtonClick=(async()=>{const e=this.props.collectionId,o=this.state.collectionTitle;if(e)await this.props.onUpdate(o),!this.props.error&&this.props.onCollectionUpdated&&this.props.onCollectionUpdated();else{const e=await this.props.onCreate(o);e&&this.props.onCollectionCreated&&this.props.onCollectionCreated(e)}}),this.onClose=(()=>{this.props.onCancel()});const o=e.collection;this.state={collectionTitle:o?o.title:""}}render(){var e=this.props;const o=e.collectionId,t=e.error,n=e.isPending,r=e.language,s=!o,d=!!this.state.collectionTitle.trim(),l=s?M:$,c=s?A:B;return T(H,{},void 0,T(R,{onClick:this.props.onCancel},void 0,T(V,{})),T(N,{},void 0,s&&T(i.a.Fragment,{},void 0,T(D,{},void 0,T(W,{}),P(r)),T(F,{},void 0,_(r))),T(J,{},void 0,c(r),T(q,{maxLength:x.d,onChange:this.onTitleChange,placeholder:E(r),value:this.state.collectionTitle}))),T(z,{},void 0,T(U,{},void 0,T(L,{onClick:this.props.onCancel},void 0,k(r)),T(G,{onClick:this.onPrimaryButtonClick,disabled:n||!d},void 0,n?T(Q,{sizePx:10}):l(r))),t&&T(K,{language:r},void 0,Object(u.a)(r,t))))}}))},"./src/reddit/constants/postCreation.ts":function(e,o,t){"use strict";t.d(o,"e",function(){return n}),t.d(o,"d",function(){return r}),t.d(o,"a",function(){return i}),t.d(o,"f",function(){return s}),t.d(o,"b",function(){return d}),t.d(o,"c",function(){return l});const n=300,r=n,i="PostCreation-AddEventButton",s="PostCreation-AddToCollectionButton",d="PostCreation-CollectionEducationTooltip",l="PostCreation-EventEducationTooltip"},"./src/reddit/controls/ErrorText/index.tsx":function(e,o,t){"use strict";var n,r=t("./node_modules/lodash/uniqueId.js"),i=t.n(r),s=t("./node_modules/raf/index.js"),d=t.n(s),l=t("./node_modules/react/index.js"),c=t.n(l),a=t("./node_modules/react-redux/es/index.js"),p=t("./node_modules/reselect/lib/index.js"),u=t("./bundled-modules/styled-components/styled-components.min.js"),f=t.n(u),m=t("./src/app/strings/index.ts"),x=t("./src/reddit/actions/modal.ts"),v=t("./src/reddit/helpers/styles/mixins/fonts.tsx"),g=t("./src/reddit/selectors/activeModalId.ts"),b=t("./src/higherOrderComponents/asModal.tsx"),h=t("./src/reddit/controls/Button/index.tsx"),y=t("./src/reddit/layout/row/Inline/index.tsx"),w=t("./src/reddit/models/Theme/NewColorSystem/index.ts"),C=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});const j=Object(m.f)("error.ok"),O=f.a.div.withConfig({componentId:"s18tv1r8-0"})(["box-sizing: border-box;border-radius: 4px;width: 350px;background-color: ",";border: 1px solid ",";border-radius: 4px;box-shadow: 0 0 0 1px ",",0px 2px 3px 2px ",";"],e=>Object(w.c)(e).body,e=>Object(w.c)(e).line,e=>Object(w.c)(e).line,e=>Object(w.c)(e).line),I=f()(y.a).withConfig({componentId:"s18tv1r8-1"})(["","padding: 11px 16px;border-bottom: 1px solid ",";"],v.titleFontH4,e=>Object(w.c)(e).line),S=f.a.div.withConfig({componentId:"s18tv1r8-2"})(["","padding: 16px;"],v.bodyFont),T=f()(y.a).withConfig({componentId:"s18tv1r8-3"})(["padding: 8px 5px;border-top: 1px solid ",";background: hsl(0, 0%, 98%);flex-direction: row-reverse;"],e=>Object(w.c)(e).line),k=f()(h.d).withConfig({componentId:"s18tv1r8-4"})(["margin-left: 5px;"]);var M=Object(b.a)(e=>{const o=e.children,t=e.language,n=e.title;return C(O,{},void 0,C(I,{},void 0,n),C(S,{},void 0,o),C(T,{},void 0,C(k,{onClick:e.onConfirmed},void 0,j(t))))});t.d(o,"b",function(){return F});var $=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,t,n,r){var i=o&&o.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});if(1===s)t.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:e,type:o,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}}();const P=Object(m.f)("error.more"),_=Object(m.f)("error.error"),A=Object(m.f)("error.type.generic"),B=f.a.div.withConfig({componentId:"s2apn2n-0"})(["","color: #f00;padding-top: 4px;text-align: right;display: flex;"],v.metadataFont),E=f.a.span.withConfig({componentId:"s2apn2n-1"})(["white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"]),H=f.a.span.withConfig({componentId:"s2apn2n-2"})(["text-decoration: underline;cursor: pointer;padding-left: 4px;"]),N=Object(p.createStructuredSelector)({activeModalId:g.a});const D=Object(a.connect)(N,e=>({toggleErrorTextModal:o=>e(Object(x.i)(o))}))(class extends c.a.Component{constructor(e){super(e),this.calcTextDidOverflow=(e=>{d()(()=>{e&&e.scrollWidth>e.clientWidth&&this.setState({textHasOverflowed:!0})})}),this.setRef=(e=>{this.calcTextDidOverflow(e)}),this.state={errorModalBody:e.errorModalBody||e.children,errorModalTitle:e.errorModalTitle||_(e.language),moreText:e.moreText||P(e.language),textHasOverflowed:!1,modalId:`ErrorTextModal--${i()()}`}}render(){var e=this.props;const o=e.children,t=e.className,n=e.activeModalId,r=e.language,i=e.toggleErrorTextModal;var s=this.state;const d=s.errorModalBody,l=s.errorModalTitle,c=s.modalId,a=s.moreText,p=s.textHasOverflowed;return $(B,{className:t},void 0,$(E,{innerRef:this.setRef},void 0,o),p&&$(H,{onClick:()=>i(c)},void 0,a),n===c&&$(M,{language:r,onConfirmed:()=>i(c),title:l},void 0,d))}});o.a=D;const F=(e,o)=>(e.length>0?e:[A(o)]).map(e=>$(D,{language:o},void 0,e))},"./src/reddit/helpers/styles/mixins/loading.ts":function(e,o,t){"use strict";t.d(o,"a",function(){return s}),t.d(o,"b",function(){return l}),t.d(o,"c",function(){return c});var n=t("./bundled-modules/styled-components/styled-components.min.js"),r=t("./src/reddit/helpers/styles/components/index.tsx"),i=t("./src/reddit/models/Theme/NewColorSystem/index.ts");const s={COMMENTS:"comments",POSTS:"posts"},d=Object(n.keyframes)(["from { background-position: 0 0; }to { background-position: -200% 0; }"]),l=Object(r["d"])()`
  animation: ${e=>e.isLoading?d:"none"} 1.5s ease infinite;
  background: ${e=>{const o=Object(i.c)(e);return e.isLoading?`linear-gradient(\n          90deg,\n          ${o.field},\n          ${o.inactive},\n          ${o.field}\n        )`:`${o.field}`}};
  background-size: 200%;
`,c="\n  border-radius: 4px;\n";Object(n.css)(["background: ",";border-radius: 4px;box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);"],e=>Object(i.c)(e).post)},"./src/reddit/icons/fonts/Menu/index.tsx":function(e,o,t){"use strict";t("./node_modules/react/index.js");var n,r=t("./bundled-modules/styled-components/styled-components.min.js"),i=t.n(r),s=t("./src/reddit/helpers/styles/mixins/index.tsx"),d=t("./src/reddit/icons/fonts/helpers.tsx"),l=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});const c=i()(e=>l("i",{className:`${Object(d.b)("menu")} ${e.className}`})).withConfig({componentId:"s1bxipnd-0"})(["",""],s.l);o.a=c},"./src/reddit/icons/svgs/AddCollection/index.tsx":function(e,o,t){"use strict";t("./node_modules/react/index.js");var n,r=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});o.a=(e=>r("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},void 0,r("defs",{},void 0,r("path",{id:"svg-add-collection",d:"M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"})),r("use",{fill:"inherit",xlinkHref:"#svg-add-collection",fillRule:"evenodd"})))},"./src/reddit/icons/svgs/QuarantineWarning/index.tsx":function(e,o,t){"use strict";t("./node_modules/react/index.js");var n,r=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,o,t,r){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var d in i)void 0===o[d]&&(o[d]=i[d]);else o||(o=i||{});if(1===s)o.children=r;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:n,type:e,key:void 0===t?null:""+t,ref:null,props:o,_owner:null}});o.a=(({className:e})=>r("svg",{className:e,viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},void 0,r("g",{fillRule:"evenodd"},void 0,r("path",{d:"M0 12h12V0H0z",fill:"none"}),r("path",{d:"M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",fill:"inherit"}))))},"./src/reddit/models/Badge/index.ts":function(e,o,t){"use strict";t.d(o,"a",function(){return s});var n=t("./src/config.ts"),r=function(){return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,o){var t=[],n=!0,r=!1,i=void 0;try{for(var s,d=e[Symbol.iterator]();!(n=(s=d.next()).done)&&(t.push(s.value),!o||t.length!==o);n=!0);}catch(l){r=!0,i=l}finally{try{!n&&d.return&&d.return()}finally{if(r)throw i}}return t}(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function i(e,o,t){const n=t.media[0],i=Object.keys(n);let s={width:1/0,height:1/0,url:""};if(i.forEach(t=>{const i=n[t];var d=t.split("x").map(e=>parseInt(e)),l=r(d,2);const c=l[0],a=l[1];(c<s.width&&c>=e||a<s.height&&a>=o)&&(s={height:a,width:c,url:i})}),!s.url&&i.length){const e=Object.keys(n)[0],o=n[e];var d=e.split("x").map(e=>parseInt(e)),l=r(d,2);const t=l[0],i=l[1];s={height:i,width:t,url:o}}return s.url}function s(e,o,t){const r=i(e,o,t),s=i(2*e,2*o,t);return{url:`${n.a.assetPath}/${r}`,url2x:`${n.a.assetPath}/${s}`}}}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~GovStandalonePoll~ModListing~ModQueuePages~Mod~95a946b7.b14b4a2bb064e7f6184b.js.map

}
/*
     FILE ARCHIVED ON 23:56:02 Nov 30, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:35:49 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.095
  cdx.remote: 0.149
  esindex: 0.015
  LoadShardBlock: 496.177 (6)
  PetaboxLoader3.datanode: 618.434 (8)
  load_resource: 506.413 (2)
  PetaboxLoader3.resolve: 265.792 (2)
*/