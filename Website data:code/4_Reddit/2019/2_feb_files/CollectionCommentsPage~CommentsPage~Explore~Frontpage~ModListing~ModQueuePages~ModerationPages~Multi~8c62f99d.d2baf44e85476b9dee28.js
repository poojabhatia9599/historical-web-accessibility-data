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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~8c62f99d"],{"./src/lib/memoizeByReference/index.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r});var n=o("./node_modules/lodash/every.js"),i=o.n(n);function r(e){let t=null,o=null;return(...n)=>(null!==t&&n.length===t.length&&i()(n,(e,o)=>e===t[o])||(t=n,o=e(...n)),o)}},"./src/lib/timezone/index.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return s}),o.d(t,"b",function(){return d}),o.d(t,"e",function(){return l}),o.d(t,"d",function(){return c}),o.d(t,"f",function(){return a}),o.d(t,"g",function(){return p}),o.d(t,"c",function(){return u});var n=o("./src/lib/constants/index.ts"),i=o("./src/reddit/models/PostCreationForm/index.ts"),r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,i=!1,r=void 0;try{for(var s,d=e[Symbol.iterator]();!(n=(s=d.next()).done)&&(o.push(s.value),!t||o.length!==t);n=!0);}catch(l){i=!0,r=l}finally{try{!n&&d.return&&d.return()}finally{if(i)throw r}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const s="America/Los_Angeles",d=()=>{let e;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}return"Asia/Calcutta"===e&&(e="Asia/Kolkata"),e||void 0},l=e=>{const t=Math.abs(e),o=t%60;return`${e>0?"-":"+"}${("0"+Math.floor(t/60)).slice(-2)}:${("0"+o).slice(-2)}`},c=(e,t)=>{const o=t||Date.now(),i={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1,timeZone:e};let s="";try{s=new Intl.DateTimeFormat("en-US",i).format(new Date(o))}catch(O){return}var d=s.replace(", "," ").split(" "),l=r(d,3);const c=l[0],a=l[1],p=l[2];var u=c.trim().split("/").map(Number),m=r(u,3);const f=m[0],x=m[1],h=m[2];var b=a.trim().split(":").map(Number),g=r(b,3);const v=g[0],y=g[1],C=g[2],w=Date.UTC(h,f-1,x,v,y,C),j=new Date(o).setMilliseconds(0)-w;return{abbreviation:p,offset:Math.round(j/n.kb)}},a=e=>{var t=e.slice(0,19).split("T"),o=r(t,2);const n=o[0],i=o[1];var s=n.split("-").map(Number),d=r(s,3);const l=d[0],c=d[1],a=d[2];var p=i.split(":").map(Number),u=r(p,3);const m=u[0],f=u[1];var x=u[2];return new Date(l,c-1,a,m,f,void 0===x?0:x)},p=e=>{const t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,16)},u=e=>{if(e&&e.eventInfo){var t=e.eventInfo;const o=t.eventStart,r=t.eventEnd;return{startDate:p(new Date(o*n.Wb)),endDate:p(new Date(r*n.Wb)),submitTime:i.i.Now,timezoneName:d()||s}}}},"./src/reddit/components/ConfirmUserActionModal/index.tsx":function(e,t,o){"use strict";o("./node_modules/react/index.js");var n,i=o("./node_modules/react-redux/es/index.js"),r=o("./node_modules/reselect/lib/index.js"),s=o("./bundled-modules/styled-components/styled-components.min.js"),d=o.n(s),l=o("./src/app/strings/index.ts"),c=o("./src/higherOrderComponents/asModal.tsx"),a=o("./src/reddit/components/ModalStyledComponents/index.tsx"),p=o("./src/reddit/controls/TextButton/index.tsx"),u=o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),m=o("./src/reddit/selectors/user.ts"),f=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});const x=d()(a.j).withConfig({componentId:"s1mpd70m-0"})(["line-height: 22px;margin: 10px 0px;"]),h=Object(r.createStructuredSelector)({language:m.M}),b=Object(i.connect)(h),g=e=>e.preventDefault();t.a=Object(c.a)(b(e=>f(a.c,{},void 0,f(a.g,{},void 0,f(u.b,{},void 0,f(a.k,{},void 0,e.headerText||Object(l.a)(e.language,"subredditModeration.confirm")),f(p.a,{onClick:()=>{e.trackCancel&&e.trackCancel(),e.toggleModal()}},void 0,f(a.b,{})))),f(a.h,{},void 0,f(x,{},void 0,e.modalText)),f(a.e,{},void 0,f(a.a,{onMouseDown:g,onClick:()=>{e.trackCancel&&e.trackCancel(),e.toggleModal()},"data-redditstyle":!0},void 0,e.cancelActionText||Object(l.a)(e.language,"subredditModeration.buttons.cancel")),f(a.o,{onMouseDown:g,onClick:t=>{e.onConfirm(),e.toggleModal(),e.trackClick()},"data-redditstyle":!0},void 0,e.actionText)))))},"./src/reddit/components/OverflowMenu/index.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return I});o("./node_modules/react/index.js");var n,i=o("./node_modules/react-redux/es/index.js"),r=o("./node_modules/reselect/lib/index.js"),s=o("./bundled-modules/styled-components/styled-components.min.js"),d=o.n(s),l=o("./src/app/actions/tooltip.ts"),c=o("./src/app/strings/index.ts"),a=o("./src/higherOrderComponents/asTooltip.tsx"),p=o("./src/reddit/constants/colors.ts"),u=o("./src/reddit/contexts/InsideOverlay.tsx"),m=o("./src/reddit/controls/Dropdown/index.tsx"),f=o("./src/reddit/controls/Dropdown/Row.tsx"),x=o("./src/reddit/helpers/styles/mixins/index.tsx"),h=o("./src/reddit/icons/fonts/Menu/index.tsx"),b=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),g=o("./src/reddit/selectors/tooltip.ts"),v=o("./src/reddit/selectors/user.ts"),y=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});const C=d()(m.a).withConfig({componentId:"mpc6lx-0"})(["overflow: visible;margin-top: 0;"]),w=Object(a.a)(C),j=d.a.button.withConfig({componentId:"mpc6lx-1"})(["height: 24px;",""],x.p),O=d()(h.a).withConfig({componentId:"mpc6lx-2"})(["color: ",";"],e=>Object(b.c)(e).actionIcon),I=d()(f.c).withConfig({componentId:"mpc6lx-3"})(["padding: 8px 16px 8px 8px;cursor: pointer;border-top: none;text-transform: none;color: ",";&:hover {color: ",";background-color: ",";fill: ",";border: none;}"],e=>Object(b.c)(e).metaText,e=>Object(b.c)(e).body,p.a.alienblue,e=>Object(b.c)(e).body),k=Object(r.createStructuredSelector)({dropdownIsOpen:(e,{dropdownId:t})=>Object(g.b)(t)(e),language:v.M}),T=Object(i.connect)(k,(e,{dropdownId:t})=>({toggleDropdown:()=>e(Object(l.e)({tooltipId:t}))}));t.b=T(Object(u.b)(e=>y(j,{"aria-expanded":e.dropdownIsOpen,"aria-haspopup":!0,"aria-label":Object(c.a)(e.language,"posts.moreOptions"),className:e.className,onClick:(e=>()=>{e.onClick(),e.toggleDropdown()})(e),onMouseDown:e.handleMouseDown,id:e.dropdownId},void 0,y(O,{}),y(w,{isOverlay:e.isOverlay,isOpen:e.dropdownIsOpen,tooltipId:e.dropdownId,isFixed:e.isFixed,targetPosition:e.targetPosition,tooltipPosition:e.tooltipPosition},void 0,e.children))))},"./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less":function(e,t,o){e.exports={container:"_3I_U-htoXoQEzFLCM48kHO",onHoverActionText:"_1Zlk1VrZ8puYZy5lJOfz--"}},"./src/reddit/components/PostCreationForm/CollectionListModal/index.tsx":function(e,t,o){"use strict";var n,i=o("./src/config.ts"),r=o("./node_modules/react/index.js"),s=o.n(r),d=o("./node_modules/react-redux/es/index.js"),l=o("./node_modules/reselect/lib/index.js"),c=o("./bundled-modules/styled-components/styled-components.min.js"),a=o.n(c),p=o("./src/app/strings/index.ts"),u=o("./src/higherOrderComponents/asModal.tsx"),m=o("./src/lib/memoizeByReference/index.ts"),f=o("./src/reddit/actions/postCreation/index.ts"),x=o("./src/reddit/constants/keycodes.ts"),h=o("./src/reddit/controls/Button/index.tsx"),b=o("./src/reddit/controls/Input/index.tsx"),g=o("./src/reddit/helpers/styles/mixins/fonts.tsx"),v=o("./src/reddit/icons/svgs/Close/index.tsx"),y=o("./src/reddit/icons/svgs/Plus/index.tsx"),C=o("./src/reddit/icons/svgs/Search/index.tsx"),w=o("./src/reddit/layout/row/Inline/index.tsx"),j=o("./src/reddit/models/PostCreationForm/index.ts"),O=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),I=o("./src/reddit/selectors/postCollection.ts"),k=o("./src/reddit/selectors/user.ts"),T=o("./node_modules/polished/dist/polished.es.js"),S=o("./src/lib/timeAgo/index.ts"),M=o("./src/reddit/controls/MetaSeparator/index.tsx"),F=o("./src/reddit/helpers/name/index.ts"),P=o("./src/reddit/helpers/styles/mixins/index.tsx"),_=o("./src/reddit/models/Subreddit/index.ts"),A=o("./src/reddit/models/User/index.ts"),N=o("./src/reddit/selectors/subreddit.ts"),D=o("./src/reddit/components/PostCreationForm/CollectionListModal/CollectionListItem/index.m.less"),$=o.n(D),E=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});const q=a.a.div.withConfig({componentId:"s1k4qt1p-0"})(["cursor: pointer;display: flex;flex-flow: column nowrap;padding: 4px 12px;border-bottom: 1px solid ",";flex: 1;&:hover {background: ",";}"],e=>Object(O.c)(e).line,e=>Object(T.e)(Object(O.c)(e).button,.1)),H=a.a.div.withConfig({componentId:"s1k4qt1p-1"})(["color: ",";"],e=>Object(O.c)(e).button),z=a.a.h2.withConfig({componentId:"s1k4qt1p-2"})(["","hyphens: auto;padding-top: 3px;word-break: break-all;margin-right: 50px;"],P.s),L=a.a.div.withConfig({componentId:"s1k4qt1p-3"})(["","color: ",";"],g.bodyFontSmall,e=>Object(O.c)(e).metaText),B=a.a.span.withConfig({componentId:"s1k4qt1p-4"})(["","color: ",";vertical-align: middle;"],g.actionFont,e=>Object(O.c)(e).metaText),U=a.a.time.withConfig({componentId:"s1k4qt1p-5"})(["vertical-align: middle;"]),R=Object(l.createStructuredSelector)({subreddit:(e,{collection:{subredditId:t}})=>t?Object(N.F)(e,{subredditId:t}):void 0,user:k.j});var Z=Object(d.connect)(R)(class extends s.a.PureComponent{constructor(){super(...arguments),this.onClick=(()=>{this.props.onClick(this.props.collection.id)})}render(){var e=this.props;const t=e.collection,o=e.language,n=e.subreddit,i=e.user,r=e.onHoverActionText,s=n&&Object(_.c)(n)&&i?Object(F.c)(Object(A.e)(i)):n?n.displayText:"",d=t.postIds.length;return E(q,{onClick:this.onClick,className:$.a.container,redditStyle:!0},void 0,E(z,{"data-redditstyle":!0},void 0,t.title),E(L,{"data-redditstyle":!0},void 0,s&&E(B,{"data-redditstyle":!0},void 0,s),s&&E(M.b,{}),E(U,{},void 0,Object(p.d)(o,"postCreation.postsCount",d)),E(M.b,{}),E(U,{},void 0,Object(p.a)(o,"postCreation.collections.creationTime",{time:Object(S.b)(o,t.createdAtUTC)}))),r&&E(H,{className:$.a.onHoverActionText},void 0,E("span",{},void 0,r)))}}),V=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,i){var r=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&r)for(var d in r)void 0===o[d]&&(o[d]=r[d]);else o||(o=r||{});if(1===s)o.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();const W=Object(p.f)("postCreation.collections.collectionsListEmptyText"),K=Object(p.f)("postCreation.collections.noCollectionMatchingFilter"),J=Object(p.f)("postCreation.collections.filterPlaceholder"),Q=Object(p.f)("postCreation.collections.collectionsListTitle"),X=Object(p.f)("postCreation.collections.createCollection"),Y=`${i.a.assetPath}/img/snoo-drafts.png`,G=a.a.div.withConfig({componentId:"s10hke1q-0"})(["background-color: ",";border-radius: 4px;box-sizing: border-box;display: flex;flex-flow: column nowrap;max-height: 70vh;min-height: 400px;"],e=>Object(O.c)(e).body),ee=a.a.div.withConfig({componentId:"s10hke1q-1"})(["padding: 15px;border-bottom: 1px solid ",";"],e=>Object(O.c)(e).line),te=a.a.div.withConfig({componentId:"s10hke1q-2"})(["","color: ",";position: relative;"],g.titleFontH4,e=>Object(O.c)(e).bodyText),oe=a.a.div.withConfig({componentId:"s10hke1q-3"})(["","flex: 1;overflow-y: auto;"],g.bodyFont),ne=a()(w.a).withConfig({componentId:"s10hke1q-4"})(["padding: 18px 0;border-top: 1px solid ",";background: ",";"],e=>Object(O.c)(e).line,e=>Object(O.c)(e).body),ie=a.a.div.withConfig({componentId:"s10hke1q-5"})(["cursor: pointer;position: absolute;top: 0;right: 0;"]),re=a()(v.a).withConfig({componentId:"s10hke1q-6"})(["height: 16px;width: 16px;padding: 4px;fill: ",";"],e=>Object(O.c)(e).actionIcon),se=a.a.div.withConfig({componentId:"s10hke1q-7"})(["display: flex;flex-direction: column;align-items: center;padding-top: 64px;"]),de=a.a.img.withConfig({componentId:"s10hke1q-8"})(["display: block;height: 128px;width: 240px;"]),le=a.a.p.withConfig({componentId:"s10hke1q-9"})(["","color: ",";"],g.bodyFont,e=>Object(O.c)(e).bodyText),ce=a.a.div.withConfig({componentId:"s10hke1q-10"})(["display: flex;margin-top: 18px;position: relative;"]),ae=a()(b.a).withConfig({componentId:"s10hke1q-11"})(["border-radius: 4px;border: 1px solid ",";flex: 1;height: 30px;padding-left: 30px;"],e=>Object(O.c)(e).line),pe=a()(C.a).withConfig({componentId:"s10hke1q-12"})(["width: 16px;height: 16px;position: absolute;left: 8px;top: 8px;fill: ",";"],e=>Object(O.c)(e).actionIcon),ue=a()(y.a).withConfig({componentId:"s10hke1q-13"})(["width: 16px;height: 16px;margin-right: 4px;fill: currentColor;"]),me=a()(h.h).withConfig({componentId:"s10hke1q-14"})(["","align-items: center;border: none;cursor: pointer;display: flex;margin-left: 10px;padding: 0;"],g.largeButtonFont),fe=Object(m.a)((e,t)=>{const o=t.toLowerCase();return e.filter(e=>e.title.toLowerCase().includes(o))}),xe=Object(l.createStructuredSelector)({collections:I.o,language:k.M}),he=Object(d.connect)(xe,(e,{postId:t,isOverlay:o})=>({onOpenCreateCollectionModal:()=>{let n=j.b;t&&(n=Object(j.t)(t,!!o)),e(Object(f.Ab)(n))}}));const be=a()(Object(u.a)(he(class extends s.a.PureComponent{constructor(){super(...arguments),this.state={filterStr:""},this.handleEscapeKey=(e=>{e.keyCode===x.a.Escape&&this.props.onClose()}),this.onFilterStringChange=(e=>{this.setState({filterStr:e.target.value})}),this.renderItem=(e=>V(Z,{collection:e,language:this.props.language,onClick:()=>this.props.onSelectCollection(e),onHoverActionText:this.props.onItemHoverActionText},e.id))}componentDidMount(){document.addEventListener("keydown",this.handleEscapeKey)}componentWillUnmount(){document.removeEventListener("keydown",this.handleEscapeKey)}renderNoCollections(){return V(se,{},void 0,V(de,{src:Y}),V(le,{},void 0,W(this.props.language)))}renderNoFilterMatches(){return V(se,{},void 0,V(le,{},void 0,K(this.props.language)))}render(){var e=this.props;const t=e.collections,o=e.language,n=e.titleText;let i;if(0===t.length)i=this.renderNoCollections();else{const e=fe(t,this.state.filterStr);i=0===e.length?this.renderNoFilterMatches():e.map(this.renderItem)}return V(G,{"data-redditstyle":!0},void 0,V(ee,{},void 0,V(te,{"data-redditstyle":!0},void 0,n||Q(o),V(ie,{onClick:this.props.onClose},void 0,V(re,{"data-redditstyle":!0}))),V(ce,{},void 0,V(pe,{}),V(ae,{placeholder:J(o),value:this.state.filterStr,onChange:this.onFilterStringChange}))),V(oe,{},void 0,i),V(ne,{},void 0,V(me,{onClick:this.props.onOpenCreateCollectionModal},void 0,V(ue,{}),X(o))))}}))).withConfig({componentId:"s10hke1q-15"})(["width: 80vw;max-width: 600px;"]);t.a=be},"./src/reddit/components/PostCreationForm/CreateOrEditCollectionModal/index.tsx":function(e,t,o){"use strict";var n,i=o("./node_modules/react/index.js"),r=o.n(i),s=o("./node_modules/react-redux/es/index.js"),d=o("./node_modules/reselect/lib/index.js"),l=o("./bundled-modules/styled-components/styled-components.min.js"),c=o.n(l),a=o("./src/app/strings/index.ts"),p=o("./src/higherOrderComponents/asModal.tsx"),u=o("./src/lib/formatApiError/index.ts"),m=o("./src/reddit/actions/postCollection.ts"),f=o("./src/reddit/components/ModalStyledComponents/index.tsx"),x=o("./src/reddit/constants/postCreation.ts"),h=o("./src/reddit/controls/Button/index.tsx"),b=o("./src/reddit/controls/ErrorText/index.tsx"),g=o("./src/reddit/controls/Input/index.tsx"),v=o("./src/reddit/controls/LoadingIcon/index.tsx"),y=o("./src/reddit/helpers/styles/mixins/fonts.tsx"),C=o("./src/reddit/icons/svgs/AddCollection/index.tsx"),w=o("./src/reddit/icons/svgs/Close/index.tsx"),j=o("./src/reddit/layout/row/Inline/index.tsx"),O=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),I=o("./src/reddit/selectors/postCollection.ts"),k=o("./src/reddit/selectors/user.ts"),T=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});const S=Object(a.f)("postCreation.cancel"),M=Object(a.f)("postCreation.create"),F=Object(a.f)("postCreation.save"),P=Object(a.f)("postCreation.collections.createCollection"),_=Object(a.f)("postCreation.collections.createModal.details"),A=Object(a.f)("postCreation.collections.createModal.giveATitle"),N=Object(a.f)("postCreation.collections.createModal.editTitle"),D=Object(a.f)("postCreation.collections.createModal.titlePlaceholderText"),$=c.a.div.withConfig({componentId:"vtp8pv-0"})(["background-color: ",";border-radius: 4px;box-sizing: border-box;display: flex;flex-flow: column nowrap;position: relative;width: 487px;"],e=>Object(O.c)(e).body),E=c.a.div.withConfig({componentId:"vtp8pv-1"})(["display: flex;flex-flow: column nowrap;flex: 1;padding: 24px;"]),q=c.a.div.withConfig({componentId:"vtp8pv-2"})(["","align-items: center;color: ",";display: flex;"],y.titleFontH1,e=>Object(O.c)(e).bodyText),H=c.a.div.withConfig({componentId:"vtp8pv-3"})(["","color: ",";flex: 1;margin: 8px 0px 24px;"],y.bodyFontH5,e=>Object(O.c)(e).bodyText),z=c()(f.e).withConfig({componentId:"vtp8pv-4"})(["display: block;padding: 16px;"]),L=c()(j.a).withConfig({componentId:"vtp8pv-5"})([""]),B=c()(h.g).withConfig({componentId:"vtp8pv-6"})(["margin: 0 8px 0 auto;min-width: 90px;"]),U=c.a.div.withConfig({componentId:"vtp8pv-7"})(["cursor: pointer;position: absolute;top: 15px;right: 15px;"]),R=c()(w.a).withConfig({componentId:"vtp8pv-8"})(["fill: ",";height: 16px;width: 16px;"],e=>Object(O.c)(e).actionIcon),Z=c.a.label.withConfig({componentId:"vtp8pv-9"})(["","color: ",";display: flex;flex-flow: column nowrap;height: 65px;"],y.titleFontH4,e=>Object(O.c)(e).bodyText),V=c()(g.a).withConfig({componentId:"vtp8pv-10"})(["","border-radius: 4px;border: 1px solid ",";margin-top: 8px;padding: 12px;"],y.bodyFontH5,e=>Object(O.c)(e).line),W=c()(C.a).withConfig({componentId:"vtp8pv-11"})(["fill: currentColor;height: 24px;margin-right: 8px;width: 24px;"]),K=c()(h.d).withConfig({componentId:"vtp8pv-12"})(["min-width: 98px;"]),J=c()(v.a).withConfig({componentId:"vtp8pv-13"})(["display: inline-block;margin-bottom: -3px;"]),Q=c()(b.a).withConfig({componentId:"vtp8pv-14"})(["padding-top: 4px;display: block;"]),X=Object(d.createStructuredSelector)({collection:I.l,error:I.a,isPending:I.c,language:k.M}),Y=Object(s.connect)(X,(e,t)=>({onCreate:t=>e(Object(m.p)(t)),onUpdate:o=>e(Object(m.v)(t.collectionId,o))}));t.a=Object(p.a)(Y(class extends r.a.PureComponent{constructor(e){super(e),this.onTitleChange=(e=>{this.setState({collectionTitle:e.target.value})}),this.onPrimaryButtonClick=(async()=>{const e=this.props.collectionId,t=this.state.collectionTitle;if(e)await this.props.onUpdate(t),!this.props.error&&this.props.onCollectionUpdated&&this.props.onCollectionUpdated();else{const e=await this.props.onCreate(t);e&&this.props.onCollectionCreated&&this.props.onCollectionCreated(e)}}),this.onClose=(()=>{this.props.onCancel()});const t=e.collection;this.state={collectionTitle:t?t.title:""}}render(){var e=this.props;const t=e.collectionId,o=e.error,n=e.isPending,i=e.language,s=!t,d=!!this.state.collectionTitle.trim(),l=s?M:F,c=s?A:N;return T($,{},void 0,T(U,{onClick:this.props.onCancel},void 0,T(R,{})),T(E,{},void 0,s&&T(r.a.Fragment,{},void 0,T(q,{},void 0,T(W,{}),P(i)),T(H,{},void 0,_(i))),T(Z,{},void 0,c(i),T(V,{maxLength:x.d,onChange:this.onTitleChange,placeholder:D(i),value:this.state.collectionTitle}))),T(z,{},void 0,T(L,{},void 0,T(B,{onClick:this.props.onCancel},void 0,S(i)),T(K,{onClick:this.onPrimaryButtonClick,disabled:n||!d},void 0,n?T(J,{sizePx:10}):l(i))),o&&T(Q,{language:i},void 0,Object(u.a)(i,o))))}}))},"./src/reddit/components/PostFlairPicker/index.tsx":function(e,t,o){"use strict";o.d(t,"b",function(){return M});var n,i=o("./node_modules/react/index.js"),r=o.n(i),s=o("./node_modules/react-redux/es/index.js"),d=o("./node_modules/reselect/lib/index.js"),l=o("./bundled-modules/styled-components/styled-components.min.js"),c=o.n(l),a=o("./src/app/strings/index.ts"),p=o("./src/reddit/components/TrackingHelper/index.tsx"),u=o("./src/higherOrderComponents/asModal.tsx"),m=o("./src/reddit/actions/modal.ts"),f=o("./src/reddit/components/FlairPickerTitle/index.tsx"),x=o("./src/reddit/components/FlairPickerWrapper/index.tsx"),h=o("./src/reddit/components/FlairPreview/index.tsx"),b=o("./src/reddit/components/FlairSearch/index.tsx"),g=o("./src/reddit/constants/flair.ts"),v=o("./src/reddit/controls/Button/index.tsx"),y=o("./src/reddit/layout/row/Inline/index.tsx"),C=o("./src/reddit/layout/row/RightAlign/index.tsx"),w=o("./src/reddit/models/Flair/index.ts"),j=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),O=o("./src/reddit/selectors/moderatorPermissions.ts"),I=o("./src/reddit/selectors/postFlair.ts"),k=o("./src/reddit/selectors/subreddit.ts"),T=o("./src/reddit/selectors/telemetry.ts"),S=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});const M=e=>`PostFlair__Modal__${e}`,F=c()(y.a).withConfig({componentId:"s1n2kdta-0"})(["border: none;padding: 16px;"]),P=c()(v.l).withConfig({componentId:"s1n2kdta-1"})(["color: ",";"],e=>Object(j.c)(e).actionIcon),_=Object(d.createStructuredSelector)({flairData:I.c,subreddit:k.F,isMod:(e,t,o)=>!!Object(O.h)(e,t)});const A=Object(s.connect)(_,(e,t)=>({closeModal:()=>e(Object(m.j)(t.modalId))}))(class extends r.a.Component{constructor(e){super(e),this.getTrackingNoun=((e,t)=>this.props.isMod?e:t),this.onApply=(()=>{const e=this.props,t=this.state,o=t.previewFlair,n=t.selectedTemplateId;this.props.onFlairChanged({previewFlair:o,selectedTemplateId:n}),e.closeModal&&e.closeModal(),this.track(this.getTrackingNoun("flairadd_mod","flairadd_user"))}),this.onClear=(()=>this.setSelectedFlair(null,null)),this.setSelectedFlair=((e,t)=>this.setState({previewFlair:e,selectedTemplateId:t})),this.track=(e=>this.props.sendEvent(t=>({source:"post_flair_picker",action:"click",noun:e,subreddit:Object(T.subredditById)(t,this.props.subredditId)})));const t=e.flairs?e.flairs.find(e=>e.type===w.e.Text||e.type===w.e.Image||e.type===w.e.Richtext):null;this.state={previewFlair:t,selectedTemplateId:t&&t.templateId?t.templateId:null}}render(){const e=this.props,t=this.state,o=e.flairData,n=e.language,i=e.subreddit,r=i.displayText,s=o.templates,d=o.templateIds,l=!!(t.previewFlair&&Object(w.i)(t.previewFlair).length>g.b);return S(x.a,{},void 0,S(f.a,{onClosePressed:e.closeModal,title:Object(a.a)(n,"flair.postFlairModalTitle",{subredditName:r})}),S(h.a,{flair:t.previewFlair,flairTemplateType:w.c.LinkFlair,language:n,placeholderText:Object(a.a)(n,"flair.postFlairPlaceholder")}),S(b.a,{appliedFlair:t.previewFlair,flairTemplateType:w.c.LinkFlair,subredditId:i.id,templates:s,templateIds:d,language:e.language,onChange:this.setSelectedFlair,selectedTemplateId:t.selectedTemplateId}),S(F,{},void 0,S(C.a,{},void 0,S(P,{onClick:this.onClear},void 0,Object(a.a)(n,"flair.clear")),S(v.d,{disabled:l,onClick:this.onApply,"data-redditstyle":!0},void 0,Object(a.a)(n,"flair.apply")))))}});t.a=Object(u.a)(Object(p.b)(A))},"./src/reddit/constants/componentTestIds.ts":function(e,t,o){"use strict";o.d(t,"d",function(){return n}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return r}),o.d(t,"a",function(){return s}),o.d(t,"e",function(){return d});const n="comment",i="comment-submission-form-markdown",r="comment-submission-form-richtext",s="comments-page-link-num-comments",d="post-content"},"./src/reddit/constants/postCreation.ts":function(e,t,o){"use strict";o.d(t,"e",function(){return n}),o.d(t,"d",function(){return i}),o.d(t,"a",function(){return r}),o.d(t,"f",function(){return s}),o.d(t,"b",function(){return d}),o.d(t,"c",function(){return l});const n=300,i=n,r="PostCreation-AddEventButton",s="PostCreation-AddToCollectionButton",d="PostCreation-CollectionEducationTooltip",l="PostCreation-EventEducationTooltip"},"./src/reddit/controls/ErrorText/index.tsx":function(e,t,o){"use strict";var n,i=o("./node_modules/lodash/uniqueId.js"),r=o.n(i),s=o("./node_modules/raf/index.js"),d=o.n(s),l=o("./node_modules/react/index.js"),c=o.n(l),a=o("./node_modules/react-redux/es/index.js"),p=o("./node_modules/reselect/lib/index.js"),u=o("./bundled-modules/styled-components/styled-components.min.js"),m=o.n(u),f=o("./src/app/strings/index.ts"),x=o("./src/reddit/actions/modal.ts"),h=o("./src/reddit/helpers/styles/mixins/fonts.tsx"),b=o("./src/reddit/selectors/activeModalId.ts"),g=o("./src/higherOrderComponents/asModal.tsx"),v=o("./src/reddit/controls/Button/index.tsx"),y=o("./src/reddit/layout/row/Inline/index.tsx"),C=o("./src/reddit/models/Theme/NewColorSystem/index.ts"),w=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});const j=Object(f.f)("error.ok"),O=m.a.div.withConfig({componentId:"s18tv1r8-0"})(["box-sizing: border-box;border-radius: 4px;width: 350px;background-color: ",";border: 1px solid ",";border-radius: 4px;box-shadow: 0 0 0 1px ",",0px 2px 3px 2px ",";"],e=>Object(C.c)(e).body,e=>Object(C.c)(e).line,e=>Object(C.c)(e).line,e=>Object(C.c)(e).line),I=m()(y.a).withConfig({componentId:"s18tv1r8-1"})(["","padding: 11px 16px;border-bottom: 1px solid ",";"],h.titleFontH4,e=>Object(C.c)(e).line),k=m.a.div.withConfig({componentId:"s18tv1r8-2"})(["","padding: 16px;"],h.bodyFont),T=m()(y.a).withConfig({componentId:"s18tv1r8-3"})(["padding: 8px 5px;border-top: 1px solid ",";background: hsl(0, 0%, 98%);flex-direction: row-reverse;"],e=>Object(C.c)(e).line),S=m()(v.d).withConfig({componentId:"s18tv1r8-4"})(["margin-left: 5px;"]);var M=Object(g.a)(e=>{const t=e.children,o=e.language,n=e.title;return w(O,{},void 0,w(I,{},void 0,n),w(k,{},void 0,t),w(T,{},void 0,w(S,{onClick:e.onConfirmed},void 0,j(o))))});o.d(t,"b",function(){return H});var F=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,n,i){var r=t&&t.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&r)for(var d in r)void 0===o[d]&&(o[d]=r[d]);else o||(o=r||{});if(1===s)o.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();const P=Object(f.f)("error.more"),_=Object(f.f)("error.error"),A=Object(f.f)("error.type.generic"),N=m.a.div.withConfig({componentId:"s2apn2n-0"})(["","color: #f00;padding-top: 4px;text-align: right;display: flex;"],h.metadataFont),D=m.a.span.withConfig({componentId:"s2apn2n-1"})(["white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"]),$=m.a.span.withConfig({componentId:"s2apn2n-2"})(["text-decoration: underline;cursor: pointer;padding-left: 4px;"]),E=Object(p.createStructuredSelector)({activeModalId:b.a});const q=Object(a.connect)(E,e=>({toggleErrorTextModal:t=>e(Object(x.j)(t))}))(class extends c.a.Component{constructor(e){super(e),this.calcTextDidOverflow=(e=>{d()(()=>{e&&e.scrollWidth>e.clientWidth&&this.setState({textHasOverflowed:!0})})}),this.setRef=(e=>{this.calcTextDidOverflow(e)}),this.state={errorModalBody:e.errorModalBody||e.children,errorModalTitle:e.errorModalTitle||_(e.language),moreText:e.moreText||P(e.language),textHasOverflowed:!1,modalId:`ErrorTextModal--${r()()}`}}render(){var e=this.props;const t=e.children,o=e.className,n=e.activeModalId,i=e.language,r=e.toggleErrorTextModal;var s=this.state;const d=s.errorModalBody,l=s.errorModalTitle,c=s.modalId,a=s.moreText,p=s.textHasOverflowed;return F(N,{className:o},void 0,F(D,{innerRef:this.setRef},void 0,t),p&&F($,{onClick:()=>r(c)},void 0,a),n===c&&F(M,{language:i,onConfirmed:()=>r(c),title:l},void 0,d))}});t.a=q;const H=(e,t)=>(e.length>0?e:[A(t)]).map(e=>F(q,{language:t},void 0,e))},"./src/reddit/controls/Input/index.tsx":function(e,t,o){"use strict";o.d(t,"b",function(){return d});var n=o("./bundled-modules/styled-components/styled-components.min.js"),i=o.n(n),r=o("./src/reddit/helpers/styles/mixins/fonts.tsx"),s=o("./src/reddit/models/Theme/NewColorSystem/index.ts");const d=`\n  ${r.bodyFont}\n  border: none;\n  color: ${e=>Object(s.c)(e).actionIcon};\n  display: block;\n  height: 36px;\n  padding: 0 8px;\n  outline: none;\n`;t.a=i.a.input.withConfig({componentId:"ed4rwa-0"})(["",""],d)},"./src/reddit/controls/LoadingIcon/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/polished/dist/polished.es.js"),i=o("./bundled-modules/styled-components/styled-components.min.js"),r=o.n(i),s=o("./src/reddit/helpers/styles/components/index.tsx"),d=o("./src/reddit/models/Theme/NewColorSystem/index.ts");const l=r()(Object(s.a)()).withConfig({componentId:"s1h5d9ni-0"})(["width: ","px;height: ","px;","font-size: 4px;position: relative;text-indent: -9999em;border-radius: 50%;border-top: .6em solid ",";border-right: .6em solid ",";border-bottom: .6em solid ",";border-left: .6em solid ",";transform: translateZ(0);animation: spin 1.1s infinite linear;&:after {border-radius: 50%;width: ","px;height: ","px;}@keyframes spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}"],e=>e.sizePx,e=>e.sizePx,e=>e.center?"margin: 0 auto;":"",e=>Object(n.e)(Object(d.c)(e).bodyText,.2),e=>Object(n.e)(Object(d.c)(e).bodyText,.2),e=>Object(n.e)(Object(d.c)(e).bodyText,.2),e=>Object(d.c)(e).body,e=>e.sizePx,e=>e.sizePx);t.a=l},"./src/reddit/icons/svgs/AddCollection/index.tsx":function(e,t,o){"use strict";o("./node_modules/react/index.js");var n,i=(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,function(e,t,o,i){var r=e&&e.defaultProps,s=arguments.length-3;if(t||0===s||(t={}),t&&r)for(var d in r)void 0===t[d]&&(t[d]=r[d]);else t||(t=r||{});if(1===s)t.children=i;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];t.children=l}return{$$typeof:n,type:e,key:void 0===o?null:""+o,ref:null,props:t,_owner:null}});t.a=(e=>i("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},void 0,i("defs",{},void 0,i("path",{id:"svg-add-collection",d:"M19.2 2.4a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V4.8a2.4 2.4 0 0 1 2.4-2.4h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v.936a3.577 3.577 0 0 0-2.4-.936H4.8c-.925 0-1.763.361-2.4.936V8.4A2.4 2.4 0 0 1 4.8 6h14.4zm0 3.6a2.4 2.4 0 0 1 2.4 2.4v7.2a2.4 2.4 0 0 1-2.4 2.4H4.8a2.4 2.4 0 0 1-2.4-2.4V12a2.4 2.4 0 0 1 2.4-2.4h14.4zm-3.806 5.1H12.9v-2.494a.9.9 0 1 0-1.8 0V14.7H8.607a.9.9 0 1 0 0 1.8H11.1v2.494a.9.9 0 1 0 1.8 0V16.5h2.494a.9.9 0 0 0 0-1.8z"})),i("use",{fill:"inherit",xlinkHref:"#svg-add-collection",fillRule:"evenodd"})))}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~8c62f99d.d2baf44e85476b9dee28.js.map

}
/*
     FILE ARCHIVED ON 00:14:48 Feb 04, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:47:38 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.101
  exclusion.robots.policy: 0.086
  cdx.remote: 0.136
  esindex: 0.013
  LoadShardBlock: 402.817 (6)
  PetaboxLoader3.datanode: 431.393 (8)
  load_resource: 413.342 (2)
  PetaboxLoader3.resolve: 171.297 (2)
*/