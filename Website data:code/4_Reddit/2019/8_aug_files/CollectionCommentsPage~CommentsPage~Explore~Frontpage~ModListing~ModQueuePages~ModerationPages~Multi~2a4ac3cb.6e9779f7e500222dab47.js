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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~2a4ac3cb"],{"./src/lib/timezone/index.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"e",function(){return a}),o.d(t,"d",function(){return l}),o.d(t,"f",function(){return d}),o.d(t,"g",function(){return u}),o.d(t,"c",function(){return p});var n=o("./src/lib/constants/index.ts"),c=o("./src/reddit/models/PostCreationForm/index.ts"),s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,c=!1,s=void 0;try{for(var r,i=e[Symbol.iterator]();!(n=(r=i.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(a){c=!0,s=a}finally{try{!n&&i.return&&i.return()}finally{if(c)throw s}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const r="America/Los_Angeles",i=()=>{let e;try{e=Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}return"Asia/Calcutta"===e&&(e="Asia/Kolkata"),e||void 0},a=e=>{const t=Math.abs(e),o=t%60;return`${e>0?"-":"+"}${("0"+Math.floor(t/60)).slice(-2)}:${("0"+o).slice(-2)}`},l=(e,t)=>{const o=t||Date.now(),c={year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",timeZoneName:"short",hour12:!1,timeZone:e};let r="";try{r=new Intl.DateTimeFormat("en-US",c).format(new Date(o))}catch(w){return}var i=r.replace(", "," ").split(" "),a=s(i,3);const l=a[0],d=a[1],u=a[2];var p=l.trim().split("/").map(Number),b=s(p,3);const m=b[0],O=b[1],j=b[2];var f=d.trim().split(":").map(Number),g=s(f,3);const C=g[0],x=g[1],v=g[2],I=Date.UTC(j,m-1,O,C,x,v),_=new Date(o).setMilliseconds(0)-I;return{abbreviation:u,offset:Math.round(_/n.db)}},d=e=>{var t=e.slice(0,19).split("T"),o=s(t,2);const n=o[0],c=o[1];var r=n.split("-").map(Number),i=s(r,3);const a=i[0],l=i[1],d=i[2];var u=c.split(":").map(Number),p=s(u,3);const b=p[0],m=p[1];var O=p[2];return new Date(a,l-1,d,b,m,void 0===O?0:O)},u=e=>{const t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().slice(0,16)},p=e=>{if(e&&e.eventInfo){var t=e.eventInfo;const o=t.eventStart,s=t.eventEnd;return{startDate:u(new Date(o*n.Db)),endDate:u(new Date(s*n.Db)),submitTime:c.i.Now,timezoneName:i()||r}}}},"./src/reddit/actions/postCollection/index.ts":function(e,t,o){"use strict";var n=o("./node_modules/react-router-redux/es/index.js"),c=o("./src/app/strings/index.ts"),s=o("./src/lib/filterQueryParams/index.ts"),r=o("./src/lib/makeActionCreator/index.ts"),i=o("./src/reddit/actions/postCollection/constants.ts"),a=o("./src/reddit/actions/toaster.ts"),l=o("./src/reddit/constants/history.ts"),d=o("./src/lib/constants/index.ts"),u=o("./src/lib/makeApiRequest/index.ts"),p=o("./src/lib/omitHeaders/index.ts"),b=o("./src/reddit/constants/headers.ts");var m=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/add_post_to_collection.json`,method:d.cb.POST,data:{collection_id:t,link_fullname:o}});var O=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/create_collection.json`,method:d.cb.POST,data:{title:t,sr_fullname:o}});var j=(e,t)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/delete_collection.json`,method:d.cb.POST,data:{collection_id:t}}),f=o("./src/config.ts");var g=(e,t)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${f.a.gatewayUrl}/desktopapi/v1/subreddit_collections/${t}`,method:d.cb.GET});var C=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/remove_post_in_collection.json`,method:d.cb.POST,data:{collection_id:t,link_fullname:o}});var x=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/update_collection_title.json`,method:d.cb.POST,data:{collection_id:t,title:o}});var v=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/reorder_collection.json`,method:d.cb.POST,data:{collection_id:t,link_ids:o.join(",")}});var I=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/update_collection_description.json`,method:d.cb.POST,data:{collection_id:t,description:o}});var _=(e,t,o)=>Object(u.b)(Object(p.a)(e,[b.a]),{endpoint:`${e.apiUrl}/api/v1/collections/update_collection_display_layout.json`,method:d.cb.POST,data:{collection_id:t,display_layout:o}}),w=o("./src/reddit/helpers/overlay/index.ts"),y=o("./src/reddit/helpers/path/index.ts"),h=o("./src/reddit/models/Toast/index.ts"),E=o("./src/reddit/selectors/postCollection.ts"),k=o("./src/reddit/selectors/posts.ts"),M=o("./src/reddit/selectors/subreddit.ts");o.d(t,"b",function(){return P}),o.d(t,"e",function(){return N}),o.d(t,"g",function(){return L}),o.d(t,"a",function(){return G}),o.d(t,"c",function(){return q}),o.d(t,"h",function(){return z}),o.d(t,"f",function(){return J}),o.d(t,"d",function(){return ne});const S=Object(r.a)(i.c),T=Object(r.a)(i.b),D=Object(r.a)(i.d),P=(e,t)=>async(o,n,{apiContext:c})=>{o(S());const s=await O(c(),e,t);let r;if(s.ok){const e=n().meta,t=(e=>({author:e.author_name||void 0,createdAtUTC:e.created_at_utc,description:e.description,displayLayout:e.display_layout,id:e.collection_id,lastUpdateUTC:e.last_update_utc,permalink:e.permalink,postIds:e.link_ids,primaryPostId:e.primary_link_id||void 0,subredditId:e.subreddit_id,title:e.title}))(s.body);o(D({collection:t,meta:e})),r=t}else{const e=s.error;o(T(e))}return r},U=Object(r.a)(i.f),N=e=>async(t,o,{apiContext:n})=>{const s=o(),r=s.postCollection.subredditToIds||{};if(Object.keys(r).length>0)return;const i=await g(n(),e);i.ok?t(U(i.body)):t(Object(a.e)({kind:h.b.Error,text:Object(c.a)(s.user.language,"error.type.generic")}))},A=Object(r.a)(i.g),L=(e,t,o)=>async(n,s,{apiContext:r})=>{if((await C(r(),e,t)).ok){const r=s(),i=Object(k.G)(r,{postId:t}),l=i&&i.title||"",d=Object(E.q)(r,{collectionId:e}),u=(d&&d.postIds&&d.postIds.indexOf(t)||-1)-1;if(n(A({collectionId:e,postId:t})),o&&u>=0){const t=s(),o=Object(E.q)(t,{collectionId:e}),c=o&&o.postIds&&o.postIds[u]||"",r=Object(k.G)(t,{postId:c});r&&r.permalink&&n(Object(w.a)(r.permalink))}n(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(r.user.language,"collection.postRemovedSuccess",{postTitle:l}),buttonText:Object(c.a)(r.user.language,"collection.undo"),buttonAction:G(e,t)}))}else{const e=s();n(Object(a.e)({kind:h.b.Error,text:Object(c.a)(e.user.language,"error.type.generic")}))}},$=Object(r.a)(i.a),F=Object(r.a)(i.t),G=(e,t)=>async(o,n,{apiContext:s})=>{const r=n();if((await m(s(),e,t)).ok){o($({collectionId:e,postId:t})),o(F({collectionId:e,postId:t}));const n=Object(k.G)(r,{postId:t}),s=Object(E.q)(r,{collectionId:e}),i=s&&s.title||"";o(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(r.user.language,"collection.postAddedSuccess",{title:i}),buttonText:Object(c.a)(r.user.language,"collection.view"),buttonAction:Object(w.a)(n.permalink)}))}else o(Object(a.e)({kind:h.b.Error,text:Object(c.a)(r.user.language,"error.type.generic")}))},B=Object(r.a)(i.e),q=(e,t)=>async(o,r,{apiContext:i})=>{const l=r();if((await j(i(),e)).ok){const r=l.platform.currentPage.url,i=Object(E.q)(l,{collectionId:e}),d=i&&i.title||"",u=i&&i.subredditId,p=u?Object(M.b)(l,u):"/";o(B({collectionId:e,collection:i})),o(t?Object(n.c)(Object(s.a)(r,["collection"])):Object(n.b)(p)),o(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(l.user.language,"collection.collectionDeletedSuccess",{title:d})}))}else o(Object(a.e)({kind:h.b.Error,text:Object(c.a)(l.user.language,"error.type.generic")}))},R=Object(r.a)(i.r),K=Object(r.a)(i.n),W=Object(r.a)(i.s),z=(e,t)=>async(o,n,{apiContext:s})=>{o(R());const r=await x(s(),e,t);let i=!1;const l=n();if(r.ok)o(W({collectionId:e,newTitle:t})),o(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(l.user.language,"collection.editModal.titleUpdateSuccess")})),i=!0;else{const e=r.error;o(K(e)),o(Object(a.e)({kind:h.b.Error,text:Object(c.a)(l.user.language,"error.type.generic")}))}return i},Y=Object(r.a)(i.l),V=Object(r.a)(i.m),Z=Object(r.a)(i.k),J=e=>async(t,o)=>{const c=o().platform.currentPage.locationState;t(!(!c||!c[l.a.IsOverlay])?Object(w.a)(e.permalink):Object(n.b)(Object(y.b)(e.permalink)))},Q=Object(r.a)(i.i),X=Object(r.a)(i.j),H=Object(r.a)(i.h),ee=Object(r.a)(i.p),te=Object(r.a)(i.o),oe=Object(r.a)(i.q),ne=e=>async t=>{const o=[],n=e.collectionId,s=e.description,r=e.displayLayout,i=e.postIds,l=e.title;i&&o.push(t(((e,t)=>async(o,n,{apiContext:s})=>{o(Q());const r=await v(s(),e,t);let i=!1;const l=n();return r.ok?(o(X({collectionId:e,postIds:t})),o(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(l.user.language,"collection.editModal.reorderCollectionSuccess")})),i=!0):(o(H({error:r.error})),o(Object(a.e)({kind:h.b.Error,text:Object(c.a)(l.user.language,"error.type.generic")}))),i})(n,i))),l&&o.push(t(z(n,l))),void 0!==s&&o.push(t(((e,t)=>async(o,n,{apiContext:s})=>{o(Y());const r=await I(s(),e,t);let i=!1;const l=n();if(r.ok)o(V({collectionId:e,newDescription:t})),o(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(l.user.language,"collection.editModal.descriptionUpdateSuccess")})),i=!0;else{const e=r.error;o(Z(e)),o(Object(a.e)({kind:h.b.Error,text:Object(c.a)(l.user.language,"error.type.generic")}))}return i})(n,s))),r&&o.push(t(((e,t)=>async(o,n,{apiContext:s})=>{o(ee());const r=await _(s(),e,t);let i=!1;const l=n();if(r.ok)o(oe({collectionId:e,newLayout:t})),o(Object(a.e)({kind:h.b.SuccessMod,text:Object(c.a)(l.user.language,"collection.editModal.layoutUpdateSuccess")})),i=!0;else{const e=r.error;o(te(e)),o(Object(a.e)({kind:h.b.Error,text:Object(c.a)(l.user.language,"error.type.generic")}))}return i})(n,r)));let d=!0;return await Promise.all(o).then(e=>{e.forEach(e=>{e||(d=!1)})}),d}},"./src/reddit/components/ConfirmUserActionModal/index.m.less":function(e,t,o){e.exports={buttonWidth:"ogOEj4x-0BpDZWeccJwxx",ModalText:"_2YxEi97B6Nm7NCgLG6pCud",modalText:"_2YxEi97B6Nm7NCgLG6pCud"}},"./src/reddit/components/ConfirmUserActionModal/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),c=o.n(n),s=o("./src/higherOrderComponents/asModal.tsx"),r=o("./src/reddit/components/ModalStyledComponents/index.tsx"),i=o("./src/reddit/controls/TextButton/index.tsx"),a=o("./src/reddit/i18n/utils.ts"),l=o("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),d=o("./src/reddit/components/ConfirmUserActionModal/index.m.less"),u=o.n(d);const p=e=>e.preventDefault();t.a=Object(s.a)(e=>c.a.createElement(r.c,null,c.a.createElement(r.g,null,c.a.createElement(l.a,null,c.a.createElement(r.l,null,e.headerText||Object(a.c)("Confirm")),c.a.createElement(i.a,{onClick:()=>{e.onClose&&e.onClose(),e.toggleModal&&e.toggleModal()}},c.a.createElement(r.b,null)))),c.a.createElement(r.h,null,c.a.createElement(r.k,{className:u.a.ModalText},e.modalText)),c.a.createElement(r.e,null,c.a.createElement(r.a,{className:u.a.buttonWidth,onMouseDown:p,onClick:()=>{e.onCancel&&e.onCancel(),e.toggleModal&&e.toggleModal()},"data-redditstyle":!0},e.cancelActionText||Object(a.c)("Cancel")),c.a.createElement(r.p,{className:u.a.buttonWidth,onMouseDown:p,onClick:t=>{e.onConfirm(),e.toggleModal&&e.toggleModal(),e.trackClick&&e.trackClick()},"data-redditstyle":!0},e.actionText))))},"./src/reddit/components/OverflowMenu/index.m.less":function(e,t,o){e.exports={_Dropdown:"ehsOqYO6dxn_Pf9Dzwu37",dropdown:"ehsOqYO6dxn_Pf9Dzwu37",MenuButton:"_2pFdCpgBihIaYh9DSMWBIu",menuButton:"_2pFdCpgBihIaYh9DSMWBIu",mIsEnabled:"uMPgOFYlCc5uvpa2Lbteu",MenuIcon:"_38GxRFSqSC-Z2VLi5Xzkjy",menuIcon:"_38GxRFSqSC-Z2VLi5Xzkjy",DropdownRow:"_2DO72U0b_6CUw3msKGrnnT",dropdownRow:"_2DO72U0b_6CUw3msKGrnnT"}},"./src/reddit/components/OverflowMenu/index.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return I});var n=o("./node_modules/react/index.js"),c=o.n(n),s=o("./node_modules/react-redux/es/index.js"),r=o("./node_modules/reselect/es/index.js"),i=o("./src/lib/classNames/index.ts"),a=o("./src/lib/lessComponent.tsx"),l=o("./src/reddit/actions/tooltip.ts"),d=o("./src/reddit/i18n/utils.ts"),u=o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),p=o("./src/reddit/controls/Dropdown/index.tsx"),b=o("./src/reddit/controls/Dropdown/Row.tsx"),m=o("./src/reddit/icons/fonts/Menu/index.tsx"),O=o("./src/reddit/selectors/tooltip.ts"),j=o("./src/reddit/components/OverflowMenu/index.m.less"),f=o.n(j);const g=a.a.wrapped(p.a,"_Dropdown",f.a),C=Object(u.a)(g),x=a.a.button("MenuButton",f.a),v=a.a.wrapped(m.a,"MenuIcon",f.a),I=a.a.wrapped(b.b,"DropdownRow",f.a),_=Object(r.c)({dropdownIsOpen:(e,{dropdownId:t})=>Object(O.b)(t)(e)}),w=Object(s.b)(_,(e,{dropdownId:t})=>({toggleDropdown:()=>e(Object(l.e)({tooltipId:t}))}));t.b=w(e=>c.a.createElement(x,{"aria-expanded":e.dropdownIsOpen,"aria-haspopup":!0,"aria-label":Object(d.c)("more options"),className:Object(i.a)(e.className,{[f.a.mIsEnabled]:!e.disabled}),disabled:e.disabled,onClick:(e=>()=>{e.onClick&&e.onClick(),e.toggleDropdown()})(e),onMouseDown:e.handleMouseDown,id:e.dropdownId},c.a.createElement(v,null),c.a.createElement(C,{className:e.dropdownClassName,isOpen:e.dropdownIsOpen,tooltipId:e.dropdownId,isFixed:e.isFixed,targetPosition:e.targetPosition,tooltipPosition:e.tooltipPosition},e.children)))},"./src/reddit/helpers/trackers/postCollection.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"h",function(){return l}),o.d(t,"g",function(){return d}),o.d(t,"o",function(){return u}),o.d(t,"f",function(){return b}),o.d(t,"e",function(){return m}),o.d(t,"n",function(){return O}),o.d(t,"m",function(){return j}),o.d(t,"b",function(){return g}),o.d(t,"p",function(){return C}),o.d(t,"c",function(){return x}),o.d(t,"j",function(){return v}),o.d(t,"q",function(){return I}),o.d(t,"k",function(){return _}),o.d(t,"l",function(){return w}),o.d(t,"i",function(){return y}),o.d(t,"d",function(){return h});var n,c,s=o("./src/reddit/constants/tracking.ts"),r=o("./src/reddit/helpers/trackers/postEvent.ts"),i=o("./src/reddit/selectors/platform.ts"),a=o("./src/reddit/selectors/telemetry.ts");!function(e){e.collection="collection",e.collectionComposer="collection_composer",e.postComposer="post_composer",e.postOverflowMenu="post_overflow_menu"}(n||(n={})),function(e){e.post="post",e.follow="follow",e.unfollow="unfollow",e.screen="screen",e.eventEducation="event_education",e.eventEducationGotIt="event_education_got_it",e.collectionEducation="collection_education",e.collectionEducationGotIt="collection_education_got_it",e.collectionCancel="cancel",e.collectionCreate="collection_create",e.collectionSelect="collection_select",e.collectionDelete="collection_delete",e.collectionEdit="collection_edit",e.collectionAddPost="collection_add_post",e.collectionRemovePost="remove_post_from_collection",e.startEvent="start_event"}(c||(c={}));const l=e=>t=>Object.assign({source:n.collection,noun:c.post},p(t,e)),d=({postId:e,isFollowed:t})=>o=>Object.assign({source:n.collection,noun:t?c.unfollow:c.follow},p(o,e)),u=({postId:e,isFollowed:t})=>o=>Object.assign({source:r.a.postEvent,noun:t?c.unfollow:c.follow},p(o,e)),p=(e,t)=>{const o=Object.assign({},a.defaults(e),{action:s.d.CLICK,subreddit:a.subreddit(e)});return void 0===t?o:Object.assign({},o,{post:a.post(e,t),postCollection:a.postCollectionI13nSelector(e,{postId:t}),postEvent:a.postEventI13nSelector(e,{postId:t})})},b=e=>Object.assign({},f(e),{action:s.d.VIEW,noun:c.collectionEducation}),m=e=>Object.assign({},f(e),{action:s.d.CLICK,noun:c.collectionEducationGotIt}),O=e=>Object.assign({},f(e),{action:s.d.VIEW,noun:c.eventEducation}),j=e=>Object.assign({},f(e),{action:s.d.CLICK,noun:c.eventEducationGotIt}),f=e=>Object.assign({},a.defaults(e),{subreddit:a.subreddit(e),source:n.postComposer}),g=(e,t)=>o=>Object.assign({},p(o,e),{source:t||n.postOverflowMenu,noun:c.collectionAddPost}),C=e=>t=>Object.assign({},p(t,e),{source:n.collectionComposer,noun:c.collectionRemovePost}),x=()=>e=>Object.assign({},p(e),{source:n.collectionComposer,noun:c.collectionCancel}),v=()=>e=>{const t=Object(i.o)(e)||void 0;return Object.assign({},p(e,t),{source:n.collectionComposer,noun:c.collectionCreate})},I=()=>e=>Object.assign({},p(e),{source:n.collectionComposer,noun:c.collectionSelect}),_=e=>t=>Object.assign({},a.defaults(t),{subreddit:a.subreddit(t),source:n.collectionComposer,action:s.d.CLICK,noun:c.collectionDelete,postCollection:a.postCollectionI13nByCollectionIdSelector(t,{collectionId:e})}),w=e=>t=>Object.assign({},p(t),{source:n.collectionComposer,noun:c.collectionEdit,postCollection:a.postCollectionI13nByCollectionIdSelector(t,{collectionId:e})}),y=e=>t=>Object.assign({},p(t,e),{source:n.collectionComposer,noun:c.startEvent}),h=()=>e=>{const t=Object(i.o)(e)||void 0;return Object.assign({},p(e,t),{source:n.collectionComposer,action:s.d.VIEW,noun:c.screen})}},"./src/reddit/helpers/trackers/postEvent.ts":function(e,t,o){"use strict";o.d(t,"a",function(){return n}),o.d(t,"f",function(){return m}),o.d(t,"g",function(){return O}),o.d(t,"e",function(){return j}),o.d(t,"b",function(){return f}),o.d(t,"c",function(){return g}),o.d(t,"d",function(){return C});var n,c=o("./src/lib/constants/index.ts"),s=o("./src/lib/eventTools/index.ts"),r=o("./src/lib/timezone/index.ts"),i=o("./src/reddit/constants/tracking.ts"),a=o("./src/reddit/models/PostCreationForm/index.ts"),l=o("./src/reddit/selectors/platform.ts"),d=o("./src/reddit/selectors/postCreations.ts"),u=o("./src/reddit/selectors/telemetry.ts"),p=o("./src/telemetry/index.ts");!function(e){e.postEvent="post_event",e.postComposer="post_composer",e.eventComposer="event_composer"}(n||(n={}));const b=e=>u.actionInfo(e,{pageType:"event_submit"}),m=e=>{Object(p.a)(Object.assign({},u.defaults(e),{source:n.postComposer,action:i.d.CLICK,noun:"event_create",subreddit:u.subreddit(e)}))},O=e=>{Object(p.a)(Object.assign({},u.defaults(e),{source:n.postComposer,action:i.d.CLICK,noun:"event_edit",subreddit:u.subreddit(e),postEvent:x(e),postComposer:v(e)}))},j=()=>e=>({source:n.eventComposer,action:i.d.VIEW,noun:i.c.SCREEN,actionInfo:b(e),postEvent:x(e)}),f=e=>t=>Object.assign({},w(t,Object(l.o)(t)),{source:n.postComposer,noun:"apply",postComposer:I(e)}),g=()=>e=>Object.assign({},w(e,Object(l.o)(e)),{noun:"cancel",actionInfo:b(e)}),C=e=>t=>Object.assign({},w(t,Object(l.o)(t)),{noun:"delete",actionInfo:b(t),postComposer:v(t),postEvent:_(e)}),x=e=>{const t=Object(d.o)(e);return t&&_(t)},v=e=>I(Object(d.o)(e)),I=e=>{return{postScheduled:!!e,submitScheduledTime:e&&e.submitTime===a.i.AtEventTime?Object(r.f)(e.startDate).getTime()/c.Db:void 0}},_=e=>{const t=Object(r.f)(e.startDate).getTime()/c.Db,o=Object(r.f)(e.endDate).getTime()/c.Db;return{eventStartTimestamp:t,eventEndTimestamp:o,eventState:Object(s.e)(t,o)}},w=(e,t)=>{const o={source:n.eventComposer,action:i.d.CLICK,subreddit:u.subreddit(e)};return t?Object.assign({},o,{post:u.post(e,t),postEvent:u.postEventI13nSelector(e,{postId:t}),postCollection:u.postCollectionI13nSelector(e,{postId:t})}):o}},"./src/reddit/icons/fonts/Menu/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),c=o.n(n),s=o("./bundled-modules/styled-components/styled-components.min.js"),r=o.n(s),i=o("./src/reddit/helpers/styles/mixins/index.tsx"),a=o("./src/reddit/icons/fonts/helpers.tsx");const l=r()(e=>c.a.createElement("i",{className:`${Object(a.b)("menu")} ${e.className}`})).withConfig({componentId:"s15u4gn4-0"})(["",""],i.f);t.a=l}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~ModerationPages~Multi~2a4ac3cb.6e9779f7e500222dab47.js.map

}
/*
     FILE ARCHIVED ON 04:07:31 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:47:30 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.202
  exclusion.robots.policy: 0.143
  cdx.remote: 0.17
  esindex: 0.107
  LoadShardBlock: 281.611 (6)
  PetaboxLoader3.resolve: 287.229 (4)
  PetaboxLoader3.datanode: 163.303 (8)
  load_resource: 248.668 (2)
*/