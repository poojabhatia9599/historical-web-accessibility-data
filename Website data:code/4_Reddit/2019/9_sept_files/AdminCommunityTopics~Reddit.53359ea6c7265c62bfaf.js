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

(window.webpackJsonp=window.webpackJsonp||[]).push([["AdminCommunityTopics~Reddit"],{"./src/graphql/operations/CreateSubredditTags.json":function(t){t.exports={id:"639d65a32e0e"}},"./src/graphql/operations/DeleteTags.json":function(t){t.exports={id:"85a644f8353a"}},"./src/graphql/operations/FetchGlobalTags.json":function(t){t.exports={id:"1d3331c579e0"}},"./src/graphql/operations/FetchSubredditTags.json":function(t){t.exports={id:"8e39ae6fa332"}},"./src/graphql/operations/UpdateSubredditTagStates.json":function(t){t.exports={id:"70f7ff70f03e"}},"./src/graphql/operations/UpdateSubredditTagStatesRelevance.json":function(t){t.exports={id:"ee43ccb6e5eb"}},"./src/reddit/actions/tags/index.ts":function(t,e,d){"use strict";var s=d("./src/app/strings/index.ts"),a=d("./src/lib/makeActionCreator/index.ts"),i=d("./src/reddit/actions/tags/constants.ts"),r=d("./src/reddit/actions/toaster.ts");const n=t=>{const e=t.subreddit,d={global:{},[e.id]:{}};e.availableTags&&e.availableTags.edges.reduce((t,{node:e})=>(t[e.subreddit&&e.subreddit.id||"global"][e.id]=e,t),d);const s=e.tags.edges.reduce((t,{node:d})=>(t[e.id][d.tag.id]=d,t),{[e.id]:{}}),a=e.suggestedTags.edges.reduce((t,{node:d})=>(t[e.id][d.tag.id]=d,t),{[e.id]:{}});return{globalSubredditTags:d.global,subredditScopedTags:{[e.id]:d[e.id]},subredditId:e.id,itemTags:s,suggestedItemTags:a}};var c=d("./src/graphql/operations/CreateSubredditTags.json"),o=d("./src/lib/makeGqlRequest/index.ts");var u=d("./src/graphql/operations/DeleteTags.json");var b=d("./src/graphql/operations/FetchGlobalTags.json"),g=d("./src/graphql/operations/FetchSubredditTags.json");const l=(t,{subredditId:e,pageSize:d=1050,after:s,includeAvailableTags:a})=>Object(o.a)(t,Object.assign({},g,{variables:{subredditId:e,pageSize:d,after:s,includeAvailableTags:a}}));var p,j=d("./src/graphql/operations/UpdateSubredditTagStates.json");!function(t){t.TAGGED="TAGGED",t.NONE="NONE"}(p||(p={}));var O=d("./src/graphql/operations/UpdateSubredditTagStatesRelevance.json");var f=d("./src/reddit/featureFlags/communityTopics.ts"),T=d("./src/reddit/helpers/tags/index.ts"),m=d("./src/reddit/helpers/trackers/communityTopics.ts"),I=d("./src/reddit/i18n/utils.ts"),y=d("./src/reddit/models/Tags/index.ts"),h=d("./src/reddit/models/Toast/index.ts"),v=d("./src/reddit/reducers/tags/selected/index.ts"),S=d("./src/reddit/selectors/tags.ts"),x=d("./src/reddit/selectors/user.ts");d.d(e,"k",function(){return z}),d.d(e,"n",function(){return W}),d.d(e,"j",function(){return B}),d.d(e,"m",function(){return J}),d.d(e,"i",function(){return H}),d.d(e,"l",function(){return K}),d.d(e,"c",function(){return M}),d.d(e,"b",function(){return Q}),d.d(e,"a",function(){return V}),d.d(e,"h",function(){return X}),d.d(e,"e",function(){return $}),d.d(e,"g",function(){return st}),d.d(e,"f",function(){return at}),d.d(e,"d",function(){return it}),d.d(e,"o",function(){return rt});const w=Object(a.a)(i.d),C=Object(a.a)(i.o),k=Object(a.a)(i.e),q=Object(a.a)(i.m),E=Object(a.a)(i.n),_=Object(a.a)(i.l),A=Object(a.a)(i.g),G=Object(a.a)(i.h),R=Object(a.a)(i.f),F=Object(a.a)(i.j),N=Object(a.a)(i.k),D=Object(a.a)(i.i),L=Object(a.a)(i.q),U=Object(a.a)(i.r),P=Object(a.a)(i.p),z=Object(a.a)(i.u),W=Object(a.a)(i.x),B=Object(a.a)(i.t),J=Object(a.a)(i.w),H=Object(a.a)(i.s),K=Object(a.a)(i.v),M=Object(a.a)(i.c),Q=Object(a.a)(i.b),V=Object(a.a)(i.a),X=(t,e=!1)=>async(d,a,{gqlContext:i})=>{const c=a();if(!Object(f.b)())return;d(C());const o=await l(i(),{subredditId:t});if(o.ok){const s=o.body;d(q(n(s.data))),e&&m.f(a(),t)}else d(_()),d(Object(r.e)(Object(r.d)(Object(s.a)(Object(x.T)(c),"communityTopics.loadFailed"),h.b.Error,Object(s.a)(Object(x.T)(c),"communityTopics.retry"),X(t,e))))},Y=t=>async(e,d,{gqlContext:a})=>{const i=d();if(!Object(f.b)())return;e(C());const c=await l(a(),{subredditId:t});if(c.ok){const t=c.body;e(E(n(t.data)))}else e(_()),e(Object(r.e)(Object(r.d)(Object(s.a)(Object(x.T)(i),"communityTopics.loadFailed"),h.b.Error,Object(s.a)(Object(x.T)(i),"communityTopics.retry"),E(t))))},Z=t=>async(e,d,{gqlContext:a})=>{const i=d();if(!Object(f.b)())return;e(C());const c=await l(a(),{subredditId:t});if(c.ok){const t=c.body;e(k(n(t.data)))}else e(_()),e(Object(r.e)(Object(r.d)(Object(s.a)(Object(x.T)(i),"communityTopics.loadFailed"),h.b.Error,Object(s.a)(Object(x.T)(i),"communityTopics.retry"),Z(t))))},$=()=>async(t,e,{gqlContext:d})=>{const s=e();if(!Object(f.c)()||Object(S.l)(s))return;t(C());const a=await((t,{pageSize:e=1050,after:d})=>Object(o.a)(t,Object.assign({},b,{variables:{pageSize:e,after:d}})))(d(),{});if(a.ok){const e=a.body;t(w((t=>{return{globalSubredditTags:t.globalTags.edges.reduce((t,e)=>(t[e.node.id]=e.node,t),{})}})(e.data)))}},tt=(t,e)=>async(d,s,{gqlContext:a})=>{if(!e.length)return;d(A());const i=e.map(e=>Object.assign({subredditId:t},e)),r=await((t,e)=>Object(o.a)(t,Object.assign({},c,{variables:e})))(a(),{input:i}),n=r.body&&r.body.data||null;r.ok&&n&&n.createSubredditTags&&n.createSubredditTags.ok?d(G()):d(R())},et=(t,e)=>async(d,s,{gqlContext:a})=>{if(!e.length)return;d(F());const i=await((t,e)=>Object(o.a)(t,Object.assign({},u,{variables:e})))(a(),{input:e}),r=i.body&&i.body.data||null;i.ok&&r&&r.deleteTags&&r.deleteTags.ok?d(N({subredditId:t,tags:e})):d(D())},dt=(t,e,d=[])=>async(s,a,{gqlContext:i})=>{if(!e.length&&!d.length)return;s(L());const r=await((t,e)=>Object(o.a)(t,Object.assign({},j,{variables:e})))(i(),{input:{subredditId:t,tagStates:e,suggestedTagStates:d}}),n=r.body&&r.body.data||null;r.ok&&n&&n.updateSubredditTagStates&&n.updateSubredditTagStates.ok?s(U()):s(P())},st=t=>async(e,d,a)=>{const i=d(),n=Object(S.n)(i,{subredditId:t}),c=Object(S.d)(i,{subredditId:t}),o=Object(S.v)(i,{subredditId:t}),u=Object(S.w)(i,{subredditId:t}),b=n.filter(t=>!!t.id&&!!t.action).map(t=>({tagId:t.id,state:t.action===v.a.ADD?p.TAGGED:p.NONE}));if(o.length>0){const s=new Set([...Object.keys(c)]);await tt(t,o)(e,d,a),await Z(t)(e,d,a);const i=Object(S.d)(d(),{subredditId:t}),r=new Set([...Object.keys(i).filter(t=>!s.has(t))]);o.forEach(t=>{for(const e of r){const d=i[e];if(d&&d.text.toLowerCase()===t.text.toLowerCase()&&d.type===t.type)return r.delete(e),void b.push({tagId:d.id,state:p.TAGGED})}})}await Promise.all([dt(t,b)(e,d,a),et(t,u)(e,d,a)]),Object(S.t)(d())&&e(Object(r.e)(Object(r.d)(Object(s.a)(Object(x.T)(i),"communityTopics.savePartialFailed"),h.b.Error,Object(s.a)(Object(x.T)(i),"communityTopics.retry"),st(t)))),e(X(t,!0))},at=(t,e)=>async(d,s,a)=>{const i={state:p.TAGGED};if(Object(T.b)(e)){const r=Object(S.d)(s(),{subredditId:t}),n=new Set([...Object.keys(r)]);await tt(t,[{text:e.displayText,type:y.c.CLASSIFICATION}])(d,s,a),await Z(t)(d,s,a);const c=Object(S.d)(s(),{subredditId:t}),o=new Set([...Object.keys(c).filter(t=>!n.has(t))]);for(const t of o){const d=c[t];d&&d.text.toLowerCase()===e.displayText.toLowerCase()&&d.type===y.c.CLASSIFICATION&&(i.tagId=d.id)}}else{if(!e.id)return void d(Object(r.e)(Object(r.d)(Object(I.c)("Whoops, we couldn't save that topic. Please try again later."),h.b.Error)));i.tagId=e.id}(t=>!!t.tagId&&!!t.state)(i)?(await dt(t,[],[i])(d,s,a),d(X(t,!1))):d(Object(r.e)(Object(r.d)(Object(I.c)("Whoops, we couldn't save that topic. Please try again later."),h.b.Error)))},it=(t,e)=>async(d,s,a)=>{if(!e.id)return void d(X(t,!1));const i=s(),r=[dt(t,[],[{state:p.NONE,tagId:e.id}])(d,s,a)],n=Object(S.m)(i,{itemId:t}),c=Object(S.d)(i,{subredditId:t});!n[e.id]&&c[e.id]&&r.push(et(t,[{tagId:e.id}])(d,s,a)),await Promise.all(r),d(X(t,!1))},rt=(t,e,d,s=!1)=>async(a,i,{gqlContext:n})=>{if(!(await((t,e)=>Object(o.a)(t,Object.assign({},O,{variables:e})))(n(),{input:{tagStatesRelevance:e,suggestedTagStatesRelevance:d}})).ok)return a(Object(r.e)(Object(r.d)(Object(I.c)("Whoops! Unable to update topics relevance status"),h.b.Error,Object(I.c)("Retry"),rt(t,e,d,s)))),void a(Y(t));if(s)for(const t of d)m.e(i(),t);a(Object(r.e)(Object(r.d)(Object(I.c)("Successfully updated topics relevance!"),h.b.SuccessCommunity,Object(I.c)("Undo"),rt(t,e.map(t=>Object.assign({},t,{isRelevant:!t.isRelevant})),d.map(t=>Object.assign({},t,{isRelevant:!t.isRelevant})),s)))),a(Y(t))}},"./src/reddit/helpers/trackers/communityTopics.ts":function(t,e,d){"use strict";d.d(e,"e",function(){return o}),d.d(e,"b",function(){return u}),d.d(e,"d",function(){return b}),d.d(e,"c",function(){return g}),d.d(e,"a",function(){return l}),d.d(e,"f",function(){return p});var s=d("./src/reddit/selectors/tags.ts"),a=d("./src/reddit/selectors/telemetry.ts"),i=d("./src/telemetry/index.ts");const r=(t,e,d)=>{if(!d.id)return{content:d.displayText};const a=Object(s.b)(t)[d.id]||Object(s.d)(t,{subredditId:e})[d.id];return a?{id:a.id,content:a.text,type:a.type}:null},n=(t,e)=>Object.assign({},a.defaults(t),{subreddit:Object.assign({},a.subreddit(t)||{},{id:e},((t,e)=>Object(s.q)(t,{itemId:e}).reduce(({topicTagIds:t,topicTagContents:e,topicTagTypes:d},s)=>(t.push(s.tag.id),e.push(s.tag.text),d.push(s.tag.type),{topicTagIds:t,topicTagContents:e,topicTagTypes:d}),{topicTagIds:[],topicTagContents:[],topicTagTypes:[]}))(t,e)),source:"community_settings",action:"click"}),c=(t,e)=>Object.assign({},n(t,e.subredditId),{noun:e.isRelevant?"restore_related_topic":"remove_related_topic",topicTag:((t,e,d)=>{if(!d)return null;const a=Object(s.b)(t)[d]||Object(s.d)(t,{subredditId:e})[d];return a?{id:a.id,content:a.text,type:a.type}:null})(t,e.subredditId,e.tagId)}),o=(t,e)=>{Object(i.a)(c(t,e))},u=(t,e,d)=>{Object(i.a)(Object.assign({},n(t,e),{topicTag:r(t,e,d),noun:"add_related_topic"}))},b=(t,e,d)=>{return!Object(s.j)(t,{subredditId:e})&&d.id?Object(i.a)(((t,e,d)=>Object.assign({},n(t,e),{topicTag:r(t,e,d),noun:"topic_auto_suggest"}))(t,e,d)):d.id?Object(i.a)(((t,e,d)=>Object.assign({},n(t,e),{topicTag:r(t,e,d),noun:"topic_auto_complete"}))(t,e,d)):Object(i.a)(((t,e,d)=>Object.assign({},n(t,e),{topicTag:r(t,e,d),noun:"topic_add_new"}))(t,e,d))},g=(t,e,d)=>Object(i.a)(Object.assign({},n(t,e),{topicTag:r(t,e,d),noun:"topic_remove"})),l=(t,e)=>Object(i.a)(Object.assign({},n(t,e),{noun:"topic_tag_field"})),p=(t,e)=>Object(i.a)(Object.assign({},n(t,e),{noun:"save"}))},"./src/reddit/selectors/tags.ts":function(t,e,d){"use strict";d.d(e,"e",function(){return n}),d.d(e,"f",function(){return c}),d.d(e,"i",function(){return o}),d.d(e,"g",function(){return u}),d.d(e,"h",function(){return b}),d.d(e,"l",function(){return g}),d.d(e,"t",function(){return l}),d.d(e,"u",function(){return p}),d.d(e,"j",function(){return j}),d.d(e,"k",function(){return O}),d.d(e,"o",function(){return f}),d.d(e,"p",function(){return T}),d.d(e,"b",function(){return v}),d.d(e,"d",function(){return x}),d.d(e,"c",function(){return w}),d.d(e,"m",function(){return C}),d.d(e,"s",function(){return k}),d.d(e,"r",function(){return q}),d.d(e,"q",function(){return E}),d.d(e,"a",function(){return _}),d.d(e,"n",function(){return A}),d.d(e,"v",function(){return G}),d.d(e,"w",function(){return R});var s=d("./node_modules/lodash/values.js"),a=d.n(s),i=d("./src/reddit/helpers/tags/index.ts"),r=d("./src/reddit/models/Tags/index.ts");const n=t=>a()((t=>{const e=c(t)?S(t):h(t),d=o(t),s=e.reduce((t,e)=>(t[e.id]=Object(r.e)(e),t),{});return d.reduce((t,e)=>(e.id&&t[e.id]&&(t[e.id].selected=!0),t),s)})(t)).filter(t=>!t.selected),c=t=>t.tags.creation.tagInput||"",o=t=>t.tags.creation.selectedOptions||[],u=t=>{const e=[];for(let d=0;d<o(t).length;d++)o(t)[d].id&&e.push(o(t)[d].id);return e||[]},b=t=>{const e=[];for(let d=0;d<o(t).length;d++)o(t)[d].id||e.push(o(t)[d].displayText);return e||[]},g=t=>Object.keys(t.tags.models.globalSubredditTags).length>0,l=t=>t.tags.api.create.error||t.tags.api.deleteTag.error||t.tags.api.fetch.error||t.tags.api.update.error,p=t=>t.tags.api.create.pending||t.tags.api.deleteTag.pending||t.tags.api.fetch.pending||t.tags.api.update.pending,j=(t,{subredditId:e})=>t.tags.selected.inputByItemId[e]||"",O=(t,{subredditId:e})=>t.tags.selected.suggestedInputByItemId[e]||"",f=(t,{subredditId:e})=>t.tags.selected.selectedOptions[e]||[],T=(t,{subredditId:e})=>t.tags.selected.selectedSuggestedOptions[e]||[],m=(t,{subredditId:e})=>t.tags.selected.deselectedOptions[e]||[],I={},y={},h=t=>t.tags.availableGlobalTagOrder.recommendedGlobal.map(e=>t.tags.models.globalSubredditTags[e]),v=t=>t.tags.models.globalSubredditTags,S=t=>t.tags.availableGlobalTagOrder.global.map(e=>t.tags.models.globalSubredditTags[e]),x=(t,{subredditId:e})=>t.tags.models.subredditScopedTags[e]||y,w=(t,e)=>{const d=a()(e);for(let s=0;s<d.length;s++)if(d[s].text.toLowerCase().trim()===t.toLowerCase().trim())return d[s];return null},C=(t,{itemId:e})=>t.tags.models.itemTags[e]||I,k=(t,{itemId:e})=>t.tags.models.suggestedItemTags[e]||I,q=(t,{itemId:e})=>a()(k(t,{itemId:e})).filter(t=>t.isRelevant).map(t=>Object(r.d)(t,!0)),E=(t,{itemId:e})=>t.tags.models.sortedItemTags[e]||[],_=(t,{thingId:e,suggested:d=!1})=>a()(((t,{thingId:e,suggested:d=!1})=>{const s=(d?O(t,{subredditId:e}):j(t,{subredditId:e}))?S(t):h(t),a=d?T(t,{subredditId:e}):f(t,{subredditId:e}),i=s.reduce((t,e)=>(t[e.id]=Object(r.e)(e),t),{});return a.reduce((t,e)=>(e.id&&t[e.id]&&(t[e.id].selected=!0),t),i)})(t,{thingId:e,suggested:d})).filter(t=>!t.selected),A=(t,{subredditId:e})=>f(t,{subredditId:e}).concat(m(t,{subredditId:e})),G=(t,{subredditId:e})=>f(t,{subredditId:e}).filter(i.b).map(t=>({text:t.displayText,type:r.c.CLASSIFICATION})),R=(t,{subredditId:e})=>{const d=x(t,{subredditId:e}),s=k(t,{itemId:e});return m(t,{subredditId:e}).filter(t=>!!t.id&&!!d[t.id]&&!s[t.id]).map(t=>({tagId:t.id}))}}}]);
//# sourceMappingURL=AdminCommunityTopics~Reddit.53359ea6c7265c62bfaf.js.map

}
/*
     FILE ARCHIVED ON 08:26:03 Sep 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:49:37 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.09
  cdx.remote: 0.135
  esindex: 0.012
  LoadShardBlock: 161.865 (6)
  PetaboxLoader3.datanode: 226.307 (8)
  load_resource: 278.589 (2)
  PetaboxLoader3.resolve: 186.962 (2)
*/