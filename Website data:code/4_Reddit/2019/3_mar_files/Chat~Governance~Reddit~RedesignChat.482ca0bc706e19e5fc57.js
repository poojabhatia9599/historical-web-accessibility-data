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

(window.webpackJsonp=window.webpackJsonp||[]).push([["Chat~Governance~Reddit~RedesignChat"],{"./src/chat/actions/promo/constants.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return s});const r="PROMO__DISPLAY_PROMO",s="PROMO__HIDE_PROMO"},"./src/chat/constants/channels.ts":function(e,n,t){"use strict";var r,s;t.d(n,"b",function(){return r}),t.d(n,"a",function(){return s}),t.d(n,"g",function(){return o}),t.d(n,"f",function(){return c}),t.d(n,"d",function(){return i}),t.d(n,"e",function(){return a}),t.d(n,"c",function(){return d}),function(e){e.JOINED="JOINED",e.INVITED="INVITED",e.PARTIAL="PARTIAL",e.UNSORTED="NONE"}(r||(r={})),function(e){e.BLOCK="block",e.CREATE="create",e.DECLINE_REQUEST="decline",e.INVITE_MEMBERS="invite",e.INVITE_MEMBERS_CONFIRMATION="invite_confirmation",e.DENY="deny",e.LEAVE="leave",e.LOCK_CHANNEL_CONFIRMATION="lock_confirmation",e.VIEW_JOIN="join",e.VIEW_MEMBERS="members",e.VIEW_NSFW_CONFIRMATION="nsfw",e.VIEW_PRIVATE="private",e.VIEW_INVITE="invited"}(s||(s={}));const o=[s.DENY,s.VIEW_JOIN,s.VIEW_PRIVATE];var c;!function(e){e.NonSuper="nonsuper",e.Super="super"}(c||(c={}));const i=30,a=99;var d;!function(e){e.All="all",e.UnreadMessages="unread_message_count_only",e.Off="off"}(d||(d={}))},"./src/chat/constants/messages.ts":function(e,n,t){"use strict";var r,s,o;t.d(n,"c",function(){return r}),t.d(n,"b",function(){return s}),t.d(n,"a",function(){return o}),function(e){e.ADMIN="admin",e.USER="user",e.PENDING="pending"}(r||(r={})),function(e){e.TEXT="text",e.POST="post",e.EMBED="embedCollection",e.SNOOMOJI="snoomoji"}(s||(s={})),function(e){e.DELETE="delete",e.REPORT="report"}(o||(o={}))},"./src/chat/constants/sendbird.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return s});const r="sendbird_group_channel_";var s;!function(e){e.Open="OPEN",e.Closed="CLOSED",e.Pending="PENDING"}(s||(s={}))},"./src/chat/endpoints/sendbird/index.ts":function(e,n,t){"use strict";t.d(n,"e",function(){return d}),t.d(n,"h",function(){return u}),t.d(n,"g",function(){return l}),t.d(n,"c",function(){return m}),t.d(n,"m",function(){return b}),t.d(n,"k",function(){return h}),t.d(n,"a",function(){return f}),t.d(n,"i",function(){return p}),t.d(n,"f",function(){return g}),t.d(n,"l",function(){return v}),t.d(n,"b",function(){return I}),t.d(n,"j",function(){return C}),t.d(n,"d",function(){return y});var r=t("./src/config.ts"),s=t("./src/lib/constants/index.ts"),o=t("./src/lib/makeApiRequest/index.ts"),c=t("./src/lib/omitHeaders/index.ts"),i=t("./src/reddit/constants/headers.ts"),a=t("./src/chat/models/Channel/utils/index.ts");const d=async e=>Object(o.c)(Object(c.a)(e,[i.a]),{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/config`,method:s.jb.GET}),u=async(e,n)=>Object(o.c)(e,{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/me`,method:s.jb.GET}),l=async(e,n,t)=>Object(o.c)(e,{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/contacts?limit=${t}`,method:s.jb.GET}),m=async(e,n,t,c)=>Object(o.c)(e,{data:{users:t,name:c},endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/group_channels`,method:s.jb.POST,headers:{Accept:"application/json","Content-Type":"application/json"}}),b=async(e,n)=>{const t={};return n&&(t.channel_url=n),Object(o.c)(e,{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/opt_in`,data:t,method:s.jb.POST,headers:{Accept:"application/json","Content-Type":"application/json"}})},h=async(e,n,t,c)=>Object(o.c)(e,{data:{users:t},endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/group_channels/${c}/invite`,method:s.jb.POST,withCredentials:!0,headers:{Accept:"application/json","Content-Type":"application/json"}}),f=async(e,n,t)=>Object(o.c)(e,{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/group_channels/${t}/accept`,method:s.jb.PUT,withCredentials:!0}),p=async(e,n)=>Object(o.c)(Object(c.a)(e,[i.a]),{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/unread_message_count`,method:s.jb.GET,headers:{Accept:"application/json","Content-Type":"application/json"}}),g=async(e,n)=>Object(o.c)(e,{endpoint:`${r.a.sendbirdServiceUrl}/api/v1/channels/recommended`,method:s.jb.GET,headers:{Accept:"application/json","Content-Type":"application/json"}}),v=async(e,n,t,c)=>Object(o.c)(e,{data:{channel_url:t,subreddit:c},endpoint:`${r.a.sendbirdServiceUrl}/api/v1/sendbird/join`,method:s.jb.POST,headers:{Accept:"application/json","Content-Type":"application/json"}}),I=(e,n,t)=>Object(o.c)(e,{data:t,method:s.jb.POST,endpoint:`${r.a.sendbirdServiceUrl}/api/v1/chat/ban`,headers:{Accept:"application/json","Content-Type":"application/json"}}),C=(e,n,t)=>Object(o.c)(e,{data:{channel_url:Object(a.a)(n),modqueue_message_id:t},method:s.jb.PUT,endpoint:`${r.a.sendbirdServiceUrl}/api/v1/chat/message/report`,headers:{Accept:"application/json","Content-Type":"application/json"}}),y=(e,n,t)=>Object(o.c)(e,{data:{channel_url:Object(a.a)(n),modqueue_message_id:t},method:s.jb.DELETE,endpoint:`${r.a.sendbirdServiceUrl}/api/v1/chat/message/report`,headers:{Accept:"application/json","Content-Type":"application/json"}})},"./src/chat/helpers/errors.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return s});class r extends Error{constructor(e,n){super(`Invalid Value: '${e} is ${n}'`)}}const s=e=>{0}},"./src/chat/helpers/unreadCount.ts":function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return c});var r=t("./src/chat/models/Promo/index.ts");const s={basicChannelCount:{count:0,unread:!1},subredditChannelCount:{count:0,unread:!1}},o=e=>{const n={};for(const t in e)n[t]={count:e[t],unread:!!e[t]};return Object.assign({},s,n)},c=(e,n)=>{var t=o(e);const s=t.basicChannelCount,c=t.subredditChannelCount,i=Object(r.d)(n),a=Object(r.e)(i),d=s.count;return{count:d,unread:a||!!d||!!c.count}}},"./src/chat/helpers/urls/index.ts":function(e,n,t){"use strict";t.r(n),t.d(n,"minimizeUrl",function(){return c}),t.d(n,"rootUrl",function(){return i}),t.d(n,"basicChannelRootUrl",function(){return a}),t.d(n,"channelUrl",function(){return u}),t.d(n,"channelAction",function(){return l}),t.d(n,"channelUserIdUrl",function(){return m}),t.d(n,"getShortChannelUrl",function(){return b}),t.d(n,"messageActionUrl",function(){return h}),t.d(n,"userActionUrl",function(){return f}),t.d(n,"getSubredditFromUrl",function(){return p}),t.d(n,"viewProfileUrl",function(){return g}),t.d(n,"banUserUrl",function(){return v}),t.d(n,"getChannelUrl",function(){return I});var r=t("./src/config.ts"),s=t("./node_modules/query-string/index.js"),o=t("./src/chat/constants/channels.ts");const c="/chat/minimize/",i="/chat/",a="channel",d=e=>e?(e=>`r/${String(e).toLowerCase()}/${a}`)(e):a,u=(e,n)=>`/chat/${d(n)}/${e}`,l=(e,n,t)=>`/chat/${d(t)}/${e}/${n}`,m=e=>`/chat/user_id/${e}`,b=e=>`${r.a.shortUrl}/${a}/${e}`,h=(e,n,t,r)=>({pathname:`${l(e,t,r)}/message/${n}`,state:{isOverlay:!0}}),f=(e,n,t,r,o)=>`${l(e,t,r)}/user/${n}${o?"?"+Object(s.stringify)(o):""}`,p=e=>new RegExp("reddit.com").test(e)?e.replace(/^.+reddit.com(\/r\/.+?\/).*$/g,"$1"):"",g=e=>`${r.a.redditUrl}/user/${e}`,v=e=>`${r.a.redditUrl}/r/${e}/about/banned`,I=(e,n)=>{const t=e.channelId,r=e.channelState,s=o.b.INVITED,c=o.b.PARTIAL,a=o.b.JOINED,d=o.a.VIEW_JOIN,m=o.a.VIEW_INVITE;switch(r){case s:return l(t,m,n);case c:return l(t,d,n);case a:return u(t,n);default:return i}}},"./src/chat/models/Channel/index.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"f",function(){return l}),t.d(n,"e",function(){return m}),t.d(n,"d",function(){return b}),t.d(n,"c",function(){return h}),t.d(n,"b",function(){return f});var r,s=t("./src/chat/constants/channels.ts"),o=t("./src/chat/models/Channel/subreddit.ts"),c=t("./src/chat/models/Channel/utils/index.ts"),i=t("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),a=t("./src/chat/models/Message/index.ts"),d=t("./src/chat/models/User/inviter.ts"),u=t("./src/chat/models/User/member.ts");!function(e){e[e.Direct=0]="Direct",e[e.Group=1]="Group",e[e.Subreddit=2]="Subreddit"}(r||(r={}));s.b.UNSORTED,r.Direct;function l(e,n){let t;const s=Object(c.d)(e);return s===r.Subreddit&&(t=Object(o.b)(e,n)),s!==r.Direct&&s!==r.Group&&t||(t=function(e,n){const t=e.coverUrl,s=e.createdAt,o=e.customType,l=e.data,m=e.memberCount,p=e.name,g=e.isDistinct,v=e.unreadMessageCount,I=e.unreadMentionCount,C=e.myCountPreference,y=e.inviter,O=e.lastMessage,j=e.members,S=e.url,T=e.myMemberState,_=e.isFrozen,E=e.myMutedState,M=e.myRole;return{channelId:Object(i.a)(S),channelSendbirdUrl:S,channelState:Object(c.b)(n,T),coverUrl:t,createdAt:Number(s),customType:o,data:l,maxLengthMessage:-1,memberCount:m,name:p,isFrozen:_,isModerator:h(M),isUserMuted:f(E),isMuted:b(C),inviter:Object(d.a)(y),type:g?r.Direct:r.Group,lastMessage:O?Object(a.b)(O):void 0,unreadMessageCount:v,unreadMentionCount:I,members:Object(u.a)(j),fetchingFirstMessage:!1,fetchingMessages:!1,fetchingMessagesError:!1,hasMoreMessages:!1,isMessageListLoaded:!1}}(e,n)),t}function m(e,n){const t={};for(let r=0,s=e.length;r<s;r++){const s=l(e[r],n);if(!s||s.memberCount<2)break;t[s.channelId]=s}return t}const b=e=>e===s.c.Off,h=e=>"operator"===e,f=e=>"muted"===e},"./src/chat/models/Channel/subreddit.ts":function(e,n,t){"use strict";t.d(n,"d",function(){return l}),t.d(n,"b",function(){return m}),t.d(n,"c",function(){return b}),t.d(n,"a",function(){return f});var r=t("./src/chat/constants/channels.ts"),s=t("./src/chat/models/Channel/index.ts"),o=t("./src/chat/models/Channel/utils/index.ts"),c=t("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),i=t("./src/chat/models/Message/index.ts"),a=t("./src/chat/models/Subreddit/index.ts"),d=t("./src/chat/models/User/inviter.ts"),u=t("./src/chat/models/User/member.ts");const l=e=>{try{const r=JSON.parse(e),s=r.room_description,o=r.subreddit;var n=r.subreddit;const c=(n=void 0===n?{id:void 0}:n).id;if(c&&o)return{subredditId:c,subreddit:Object(a.b)(o),description:s||""}}catch(t){return void 0}};function m(e,n){const t=e.coverUrl,r=e.createdAt,a=e.customType,m=e.data,b=e.memberCount,h=e.name,f=e.unreadMessageCount,p=e.unreadMentionCount,g=e.inviter,v=e.isPublic,I=e.lastMessage,C=e.members,y=e.url,O=e.myMemberState,j=e.isFrozen,S=e.myCountPreference,T=e.myMutedState,_=e.myRole,E=l(m);if(!E)return;const M=E.description,k=E.subreddit,N=E.subredditId;return{channelId:Object(c.a)(y),channelSendbirdUrl:y,channelState:Object(o.b)(n,O),coverUrl:t,createdAt:Number(r),customType:a,data:m,maxLengthMessage:-1,memberCount:b,name:h,isPublic:v,isFrozen:j,isModerator:Object(s.c)(_),isMuted:Object(s.d)(S),isUserMuted:Object(s.b)(T),inviter:Object(d.a)(g),type:s.a.Subreddit,lastMessage:I?Object(i.b)(I):void 0,unreadMessageCount:f,unreadMentionCount:p,members:Object(u.a)(C),fetchingFirstMessage:!1,fetchingMessages:!1,fetchingMessagesError:!1,hasMoreMessages:!1,isMessageListLoaded:!1,customData:{description:M.trim(),subreddit:k,subredditId:N}}}function b(e,n){const t={};return e.forEach(e=>{const r=m(e,n);r&&(t[r.channelId]=r)}),{channels:t}}const h=e=>{if(e&&e.url&&e.name&&e.subreddit&&e.subreddit.id&&e.description&&e.member_count)return{channelId:Object(c.a)(e.url),channelSendbirdUrl:e.url,channelState:r.b.PARTIAL,fetchingMessages:!1,fetchingMessagesError:!1,hasMoreMessages:!1,isMessageListLoaded:!1,fetchingFirstMessage:!1,name:e.name,type:s.a.Subreddit,memberCount:e.member_count,customData:{subredditId:e.subreddit.id,description:e.description}}};function f(e){const n={};return e.forEach(e=>{if(e){const t=h(e);t&&(n[t.channelId]=t)}}),{channels:n}}},"./src/chat/models/Channel/utils/index.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return h}),t.d(n,"e",function(){return f}),t.d(n,"c",function(){return p}),t.d(n,"b",function(){return g}),t.d(n,"d",function(){return v});var r=t("./node_modules/lodash/keyBy.js"),s=t.n(r),o=t("./node_modules/lodash/pickBy.js"),c=t.n(o),i=t("./node_modules/lodash/sortBy.js"),a=t.n(i),d=t("./node_modules/lodash/toArray.js"),u=t.n(d),l=t("./src/chat/constants/channels.ts"),m=t("./src/chat/constants/sendbird.ts"),b=t("./src/chat/models/Channel/index.ts");const h=e=>m.a+e,f=(e,n)=>s()(a()(u()(e),n),"channelId");function p(e,n){return c()(e,e=>n.includes(e.type))}function g(e,n){return(e||n||l.b.UNSORTED).toUpperCase()}function v(e){const n=e.custom_type||e.customType;if("string"==typeof n){const e=n.split("_");switch(e.length&&e[0]){case"direct":return b.a.Direct;case"subreddit":return b.a.Subreddit;case"group":return b.a.Group}}return"boolean"==typeof e.is_super&&e.is_super||"boolean"==typeof e.isSuper&&e.isSuper?b.a.Subreddit:"boolean"==typeof e.is_distinct&&e.is_distinct||"boolean"==typeof e.isDistinct&&e.isDistinct?b.a.Direct:b.a.Group}},"./src/chat/models/Channel/utils/removeSendbirdPrefix.ts":function(e,n,t){"use strict";var r=t("./src/chat/constants/sendbird.ts");n.a=(e=>e.replace(r.a,""))},"./src/chat/models/Message/adapter.ts":function(e,n,t){"use strict";var r=t("./src/chat/constants/messages.ts"),s=t("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),o=t("./src/chat/helpers/errors.ts");var c=t("./src/chat/helpers/urls/index.ts");const i={text:e=>({type:r.b.TEXT,value:e}),post:e=>({type:r.b.POST,value:e,subreddit:Object(c.getSubredditFromUrl)(e)}),embedCollection:e=>{var n=function(e,n){try{return JSON.parse(e)}catch(t){return Object(o.b)(t),n}}(e,{embed:void 0,url:void 0});const t=n.url,s=n.embed;if(t)return{type:r.b.EMBED,value:t,embed:s}},snoomoji:e=>({type:r.b.SNOOMOJI,value:e})};t.d(n,"b",function(){return b}),t.d(n,"c",function(){return h}),t.d(n,"a",function(){return f});const a=r.b.TEXT,d=r.b.POST,u=r.b.EMBED,l=r.b.SNOOMOJI,m=e=>{try{return JSON.parse(e).v1}catch(n){return{}}},b=e=>m(e).clientMessageId||"",h=(e,n)=>{const t=m(n);return Object.assign({},((e,n)=>{if(n.snoomoji)return i[l](n.snoomoji);if(n.embed_data&&n.embed_data.url)return i[d](n.embed_data.url);if(n.embed_collection){const e=i[u](n.embed_collection);if(e)return e}return i[a](e)})(e,t),{clientMessageId:b(n),highlights:t.highlights||[]},t.report&&{report:(e=>({channelIsPublic:e.channel_is_public,channelName:e.channel_name,channelId:e.channel_url&&Object(s.a)(e.channel_url),messageId:e.message_id,messageValue:e.message_value,messageCreatedAt:e.message_created_at,reason:e.reason,reportedUserId:e.reported_user_id,reportedUserName:e.reported_user_name,subredditId:e.subreddit_id,subredditName:e.subreddit_name,actions:Object.assign({},e.actions&&e.actions.deleted&&{deleted:{status:e.actions.deleted.status,userId:e.actions.deleted.user_id,userName:e.actions.deleted.user_name,updatedTs:e.actions.deleted.updated_ts}},e.actions&&e.actions.ignored&&{ignored:{status:e.actions.ignored.status,userId:e.actions.ignored.user_id,userName:e.actions.ignored.user_name,updatedTs:e.actions.ignored.updated_ts}})}))(t.report)})},f=(e,n,t,r=[])=>({v1:Object.assign({clientMessageId:t,highlights:r},n===l?{snoomoji:e}:{},n===d?{embed_data:{url:e}}:{},n===u?{embed_collection:e}:{})})},"./src/chat/models/Message/index.ts":function(e,n,t){"use strict";t.d(n,"b",function(){return l}),t.d(n,"a",function(){return m});var r=t("./node_modules/uuid/v4.js"),s=t.n(r),o=t("./src/chat/constants/messages.ts"),c=t("./src/chat/models/Channel/utils/removeSendbirdPrefix.ts"),i=t("./src/chat/models/Message/adapter.ts"),a=t("./src/chat/selectors/channels.ts"),d=t("./src/chat/selectors/messages.ts"),u=t("./src/chat/selectors/user.ts");function l(e){if(e&&e.messageType===o.c.USER){const n=e.channelUrl,t=e.messageType,r=e.messageId,s=e.createdAt,a=e.updatedAt,d=e.channelType,u=e.message,l=e.data,m=e.customType;return{channelId:Object(c.a)(n),channelSendbirdUrl:n,messageType:o.c[t],messageId:r,createdAt:s,updatedAt:a,channelType:d,data:l,messageData:Object(i.c)(u,l),sender:function(e){if(e&&e.messageType===o.c.USER)return e.sender}(e),customType:m}}}function m(e,n,t){const r=Object(a.x)(e),c=s()(),l=Object(d.c)(e,n),m=JSON.stringify(Object(i.a)(n,t,c,l));if(r)return{channelId:r.channelId,clientMessageId:c,createdAt:(new Date).getTime(),data:m,messageData:Object(i.c)(n,m),messageType:o.c.PENDING,error:!1,sender:{nickname:Object(u.b)(e),userId:Object(u.a)(e)}}}},"./src/chat/models/Promo/index.ts":function(e,n,t){"use strict";var r,s,o;t.d(n,"a",function(){return r}),t.d(n,"b",function(){return s}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return c}),t.d(n,"e",function(){return i}),function(e){e.SubredditChatFtux="displaySubredditChatFtux"}(r||(r={})),function(e){e.NSFWWarning="displayNSFWWarning"}(s||(s={})),function(e){e.LegacyNSFWWarning="nsfwWarning",e.LegacySubredditChatFtux="firstTimeUserExp"}(o||(o={}));const c=e=>{const n={};for(const t in e)switch(t){case r.SubredditChatFtux:n[t]=e[t]}return n},i=e=>{for(const n in e)if(!0===e[n])return!0;return!1}},"./src/chat/models/Subreddit/index.ts":function(e,n,t){"use strict";t.d(n,"b",function(){return s}),t.d(n,"a",function(){return o}),t.d(n,"c",function(){return c});var r=t("./src/chat/models/Channel/subreddit.ts");function s(e){return{id:e.id,name:e.name,description:e.description,iconImg:e.icon_img,keyColor:e.key_color,nsfw:e.nsfw}}function o(e){const n={};return e.forEach(e=>{if(e&&e.subreddit){const t=s(e.subreddit);n[t.id]=t}}),n}function c(e){const n={};return e.forEach(e=>{const t=Object(r.d)(e.data);if(t){const e=t.subreddit;e&&(n[e.id]=e)}}),n}},"./src/chat/models/User/inviter.ts":function(e,n,t){"use strict";t.d(n,"b",function(){return o}),t.d(n,"a",function(){return c});const r="t2_1qwk",s="reddit";function o(e){if(e)return{id:e.user_id,name:e.nickname}}function c(e){return{id:e?e.userId:r,name:e?e.nickname:s}}},"./src/chat/models/User/member.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return r});const r=e=>e.length&&e.map(e=>({id:e.user_id||e.userId,isOnline:e.is_online||e.isOnline,lastSeenAt:e.last_seen_at||e.lastSeenAt,name:e.nickname,profileUrl:e.profile_url||e.profileUrl,state:e.state,isBlockedByMe:e.isBlockedByMe})).filter(e=>e)||[]},"./src/chat/selectors/channels.ts":function(e,n,t){"use strict";var r,s=t("./node_modules/lodash/flatten.js"),o=t.n(s),c=t("./node_modules/lodash/sortBy.js"),i=t.n(c),a=t("./node_modules/lodash/toArray.js"),d=t.n(a),u=t("./node_modules/lodash/uniqBy.js"),l=t.n(u),m=t("./node_modules/lodash/values.js"),b=t.n(m);!function(e){e.DEFAULT="default",e.BANNED="banned",e.KICKED="kicked"}(r||(r={}));var h=t("./src/chat/constants/channels.ts");t("./src/chat/models/Channel/index.ts");t.d(n,"n",function(){return f}),t.d(n,"r",function(){return p}),t.d(n,"s",function(){return g}),t.d(n,"t",function(){return v}),t.d(n,"p",function(){return y}),t.d(n,"h",function(){return O}),t.d(n,"k",function(){return j}),t.d(n,"l",function(){return S}),t.d(n,"x",function(){return T}),t.d(n,"y",function(){return _}),t.d(n,"m",function(){return E}),t.d(n,"j",function(){return M}),t.d(n,"v",function(){return k}),t.d(n,"b",function(){return N}),t.d(n,"P",function(){return x}),t.d(n,"g",function(){return P}),t.d(n,"f",function(){return D}),t.d(n,"z",function(){return U}),t.d(n,"A",function(){return A}),t.d(n,"B",function(){return w}),t.d(n,"u",function(){return B}),t.d(n,"F",function(){return $}),t.d(n,"e",function(){return L}),t.d(n,"Q",function(){return R}),t.d(n,"G",function(){return F}),t.d(n,"D",function(){return V}),t.d(n,"c",function(){return W}),t.d(n,"H",function(){return J}),t.d(n,"I",function(){return H}),t.d(n,"K",function(){return G}),t.d(n,"J",function(){return K}),t.d(n,"i",function(){return z}),t.d(n,"w",function(){return q}),t.d(n,"o",function(){return X}),t.d(n,"L",function(){return Y}),t.d(n,"a",function(){return Z}),t.d(n,"M",function(){return Q}),t.d(n,"E",function(){return ee}),t.d(n,"d",function(){return ne}),t.d(n,"q",function(){return te}),t.d(n,"N",function(){return re}),t.d(n,"O",function(){return se}),t.d(n,"C",function(){return oe});const f=e=>e.channels.invited.sortedKeys.length,p=e=>e.channels.joined.sortedKeys.length,g=e=>o()(d()(e.channels.subreddit.joined.sortedKeys)).length,v=(e,n,t)=>{const r=n&&b()(n.channels)||t||[],s=(e=>{var n=e.channels;const t=n.models,r=n.subreddit.joined;return o()(b()(r.sortedKeys)).map(e=>t[e])})(e),c=l()([...s,...r],e=>e.channelId),i=I(e,c);return C(e,i)},I=(e,n)=>{const t=e.subreddits.models;return i()(n,[e=>t[e.customData.subredditId].name.toLowerCase()],e=>e.name.toLowerCase())},C=(e,n)=>{const t=e.subreddits.models;return n.reduce((e,n)=>{const r=n.channelId,s=n.customData.subredditId,o=t[s].name.toLowerCase();return e[o]=e[o]||[],e[o].push(r),e},{})},y=e=>e.channels.subreddit.invited.sortedKeys.length,O=(e,n)=>n?e.channels.models[n]:void 0,j=e=>{const n=e.platform.currentPage,t=n&&n.urlParams.channelId;if(t)return O(e,t)},S=e=>{const n=j(e);if(n&&n.channelState===h.b.JOINED)return n},T=e=>{const n=e.channels.selected.channelId;if(n)return O(e,n)},_=e=>e.channels.selected&&e.channels.selected.channelId,E=e=>j(e)||T(e),M=(e,n)=>{const t=n||E(e);return t&&t.members&&t.members.map(e=>e.id)},k=e=>{const n=e.user,t=E(e);if(t&&t.members)return t.members.filter(e=>e.id!==n.account.id)},N=(e,n)=>{const t=k(e);return!(!t||!t.find(e=>!!n[e.id].isNSFW))},x=e=>{return!!S(e)},P=e=>{const n=k(e);return n&&n.filter(e=>e.isBlockedByMe)},D=e=>{const n=[],t=e.user.account.id;return b()(e.channels.models).forEach(e=>{if(e&&e.members){const r=e.members.filter(e=>e.id!==t).map(e=>e.id);r.length&&n.push(r)}}),n.length&&n},U=e=>b()(e.messages.models).filter(n=>n.channelId===e.channels.selected.channelId),A=e=>b()(e.messages.pending).filter(n=>n.channelId===e.channels.selected.channelId),w=(e,n)=>{const t=T(e);return t&&t[n]},B=e=>{const n=T(e);if(n&&n.lastMessage&&n.lastMessage.sender)return n.lastMessage.sender.userId},$=e=>e.channels.joined.hasMoreChannels,L=e=>e.channels.joined.fetchingChannels,R=e=>e.channels.joined.sortedKeys.map(n=>e.channels.models[n]),F=e=>e.channels.inviteListExpanded,V=e=>e.channels.invited.hasMoreChannels,W=e=>e.channels.invited.fetchingChannels,J=e=>e.channels.invited.sortedKeys.map(n=>e.channels.models[n]),H=e=>{const n=T(e);return n&&n.inviter&&n.inviter.name},G=e=>{const n=j(e);return!(!n||!n.isMessageListLoaded)},K=e=>e.channels.isCreatingChannel,z=e=>{const n=T(e);return n&&n.channelState},q=e=>{const n=e.channels.subreddit.recommended.sortedKeys.map(n=>e.channels.models[n]);let t=[];return n&&n.length&&(t=n.filter(e=>!(!e||e.channelState===h.b.JOINED))),t},X=e=>{const n=e.channels.subreddit.invited.sortedKeys;return n&&n.map(n=>e.channels.models[n])},Y=(e,n)=>!(!n||!e.channels.subreddit.recommended.sortedKeys.includes(n)),Z=e=>{const n=j(e);return!(!n||!n.isModerator)},Q=(e,n)=>{const t=O(e,n);return!(!t||!Y(e,n)||t.channelState===h.b.JOINED)},ee=e=>e.channels.subreddit.invited.hasMoreChannels,ne=e=>e.channels.subreddit.invited.fetchingChannels,te=(e,n)=>{if(n)return e.channels.subreddit.kicked.sortedKeys.includes(n)?r.KICKED:e.channels.subreddit.banned.sortedKeys.includes(n)?r.BANNED:r.DEFAULT},re=e=>{const n=E(e);return!(!n||!n.isFrozen)},se=e=>{const n=E(e);return!(!n||!n.isMuted)},oe=e=>{const n=E(e);return n&&n.customData&&n.customData.subreddit&&n.customData.subreddit.id}},"./src/chat/selectors/messages.ts":function(e,n,t){"use strict";t.d(n,"j",function(){return i}),t.d(n,"i",function(){return a}),t.d(n,"d",function(){return d}),t.d(n,"e",function(){return u}),t.d(n,"f",function(){return l}),t.d(n,"g",function(){return m}),t.d(n,"h",function(){return b}),t.d(n,"b",function(){return h}),t.d(n,"c",function(){return f}),t.d(n,"a",function(){return p}),t.d(n,"k",function(){return g});var r=t("./src/lib/linkMatchers/customLinks.ts"),s=t("./src/chat/helpers/unreadCount.ts"),o=t("./src/chat/selectors/channels.ts"),c=t("./src/chat/selectors/promos.ts");const i=e=>{const n=Object(o.n)(e);return e.messages.unread.basicChannelCount-n||0},a=e=>e.messages.unread,d=(e,n)=>{if(n)return e.messages.models[n]},u=(e,n)=>{const t=d(e,n);return t&&t.sender},l=(e,n)=>{const t=u(e,n);return t&&t.userId},m=(e,n)=>{const t=d(e,n);return t&&t.messageData.type},b=(e,n)=>e.messages.pending[n],h=e=>{const n=Object(o.k)(e);if(n&&n.firstMessageId)return e.messages.models[n.firstMessageId]},f=(e,n)=>{const t=Object(o.a)(e);return Object.keys(r.b).map(e=>t&&n.includes("@"+r.b[e])&&r.b[e]).filter(e=>e)},p=e=>{const n=a(e),t=Object(c.b)(e);return Object(s.a)(n,t)},g=e=>{const n=a(e);return Object(s.b)(n)}},"./src/chat/selectors/promos.ts":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"c",function(){return s}),t.d(n,"a",function(){return o});const r=e=>e.promos,s=e=>e.promos.displaySubredditChatFtux,o=e=>e.promos.displayNSFWWarning},"./src/chat/selectors/user.ts":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"b",function(){return s}),t.d(n,"f",function(){return o}),t.d(n,"c",function(){return c}),t.d(n,"e",function(){return i}),t.d(n,"d",function(){return a});const r=e=>e.user.account.id,s=e=>e.user.account.name,o=e=>!!e.user.account,c=e=>e.user.session,i=e=>!!e.user.account&&e.user.account.seenSubredditChatFtux,a=e=>e.user.account},"./src/lib/cache/index.ts":function(e,n,t){"use strict";var r=t("./src/lib/constants/index.ts"),s=t("./src/lib/redditId/index.ts"),o=t("./src/lib/logs/console.ts"),c=t("./src/lib/safeJSONParse/index.ts");const i=e=>{let n;try{if(!(n=localStorage.getItem(e)))return}catch(r){return void Object(o.a)(r,`localStorage cache get("${e}") error`)}const t=Object(c.a)(n);if(t){if(!(t.expires<Date.now()))return t.value}else Object(o.a)(void 0,`localStorage cache get("${e}") error parsing: ${t}`)},a=(e,n,t)=>{const r={expires:"number"==typeof t?Date.now()+1e3*t:t.getTime(),value:n};try{return localStorage.setItem(e,JSON.stringify(r)),!0}catch(s){Object(o.a)(s,`localStorage cache set("${e}") error`)}return!1};t.d(n,"a",function(){return d}),t.d(n,"c",function(){return u}),t.d(n,"b",function(){return l}),t.d(n,"d",function(){return m});r.N;const d=r.Dc,u=(e,n,t)=>e+"."+n+(t?"{"+Object(s.b)(t,r.wb.ACCOUNT)+"}":""),l=i,m=a},"./src/lib/linkMatchers/customLinks.ts":function(e,n,t){"use strict";const r=(e,n)=>(t,r,s)=>{if(r>e.length){const n=/\s/,s=t[r-e.length-1];if(!s.match(n)){if("/"!==s)return 0;{const s=r-e.length-2;if(s>=0&&!t[s].match(n))return 0}}}const o=t.slice(r);return n.test(o)?o.match(n)[0].length:0};var s,o;t.d(n,"b",function(){return s}),t.d(n,"c",function(){return o}),t.d(n,"d",function(){return d}),t.d(n,"a",function(){return u}),t.d(n,"e",function(){return l}),function(e){e.All="all",e.Here="here"}(s||(s={})),function(e){e.subreddit="r/",e.subredditFull="/r/",e.profile="u/",e.profileFull="/u/",e.mention="@"}(o||(o={}));const c=new RegExp("^[A-Za-z0-9_-]{0,20}\\b"),i=new RegExp("^[A-Za-z0-9][A-Za-z0-9_]{0,20}\\b"),a=new RegExp(`^@${s.All}`,"i"),d=new RegExp("^/?(u|r)/","i"),u=new RegExp("^/?(u/|@)","i"),l=o.subreddit,m={subreddit:{prefix:o.subreddit,config:{validate:r(o.subreddit,i),normalize(e){e.url="/r/"+e.url.replace(d,"")}}},profile:{prefix:o.profile,config:{validate:r(o.profile,c),normalize(e){e.url="/user/"+e.url.replace(d,"")}}},mention:{prefix:o.mention,config:{validate:r(o.mention,c),normalize(e){a.test(e.text)?e.url="":e.url="/user/"+e.url.replace(u,"")}}}},b={subredditFull:{prefix:o.subredditFull,config:m.subreddit.config},profileFull:{prefix:o.profileFull,config:m.profile.config}},h=Object.assign({},m,b);n.f=h},"./src/lib/messageIframeParent/index.ts":function(e,n,t){"use strict";n.a=(({type:e,data:n={}},t)=>{if(window.parent!==window){const r={type:t?`${e}.${t}`:e,data:n};window.parent.postMessage(JSON.stringify(r),"*")}})},"./src/lib/safeJSONParse/index.ts":function(e,n,t){"use strict";function r(e){try{return JSON.parse(e)}catch(n){}}t.d(n,"a",function(){return r})},"./src/reddit/constants/theme.ts":function(e,n,t){"use strict";t.d(n,"b",function(){return r}),t.d(n,"a",function(){return s});const r={REDDIT:"REDDIT",NIGHT:"NIGHT"},s=r.REDDIT},"./src/reddit/models/Theme/index.ts":function(e,n,t){"use strict";var r=t("./node_modules/polished/dist/polished.es.js"),s=t("./src/reddit/constants/theme.ts"),o=t("./src/reddit/models/NewStructuredStyles/index.ts"),c=t("./src/reddit/models/StructuredStyles/index.ts");var i=t("./src/reddit/models/Theme/NewColorSystem/index.ts");t.d(n,"a",function(){return a}),t.d(n,"e",function(){return u}),t.d(n,"g",function(){return b}),t.d(n,"f",function(){return y}),t.d(n,"c",function(){return j}),t.d(n,"h",function(){return S}),t.d(n,"j",function(){return T}),t.d(n,"i",function(){return _}),t.d(n,"b",function(){return E}),t.d(n,"d",function(){return M});const a={small:64,medium:128,large:192},d={show:!0,hide:!1};function u(e,n,t){if("pretty"===t)return[e];if("slashtag"===t){if(n){const e=n.indexOf("/");return[n.slice(0,e+1),n.slice(e+1)]}return["r/",e]}return null}const l=(e,n)=>{const t=n/100,s=Object(r.d)(e);return s.alpha=t,Object(r.i)(s)},m=(e,n)=>Object(r.f)(e,n),b=(e,n,t)=>n?[e,`url(${n})`,(e=>{switch(e){case"cover":return"no-repeat center / cover";case"tiled":return"repeat center top";case"centered":return"no-repeat center top";default:return""}})(t)].filter(Boolean).join(" "):e,h=(c.c,{}),f={borderRadius:"24",customSize:"32",padding:"6",size:"24"},p=e=>"overlay"===e.menuPosition?e.bannerOverlayColor?l(e.bannerOverlayColor,e.menuBackgroundOpacity):l(e.primaryColor,e.menuBackgroundOpacity):"default"===e.menuPosition?e.menuBackgroundColor||m(.93,e.primaryColor):void 0,g=e=>"custom"===e.submenuBackgroundStyle?e.submenuBackgroundColor||m(.93,e.primaryColor):e.menuBackgroundColor||m(.93,e.primaryColor),v=e=>{let n=a[e.bannerHeight];return"overlay"===e.menuPosition&&(n+=36),n},I=e=>parseInt(a[e])-16,C={shouldShowNSFWContent:!1},y=e=>e&&Object(r.b)(e)<.5?o.a.body:o.a.bodyText,O=e=>{return Object(r.b)(e)>.9?Object(r.a)(.1,e):e},j=T(c.c,C);function S(e,n,t){return e||n&&m(.6,n)||t&&m(.6,t)||o.a.banner.backgroundColor}function T(e,n){return{subredditContext:n,communityTheme:{},newCommunityTheme:Object(i.e)({active:e.primaryColor,banner:{backgroundColor:function(e){return e.bannerBackgroundColor||m(.6,e.primaryColor)||o.a.banner.backgroundColor}(e),backgroundImage:e.bannerBackgroundImage,backgroundImagePosition:e.bannerBackgroundImagePosition,communityNameFormat:e.bannerCommunityNameFormat,iconColor:e.primaryColor,iconImage:e.communityIcon,iconDimensions:"small"===e.bannerHeight?f:i.f,lineHeight:"small"===e.bannerHeight?"38":"60",height:v(e),positionedImage:e.bannerPositionedImage,positionedImageHeight:I(e.bannerHeight),positionedImageAlignment:e.bannerPositionedImagePosition,secondaryBannerPositionedImage:e.secondaryBannerPositionedImage,showCommunityIcon:d[e.bannerShowCommunityIcon]},button:e.highlightColor?O(e.highlightColor):o.a.button,canvas:e.backgroundColor||o.a.canvas,canvasImgUrl:e.backgroundImage,canvasImgPosition:e.backgroundImagePosition,linkText:e.highlightColor?O(e.highlightColor):o.a.linkText,menu:e.menuBackgroundColor||o.a.menu,menuActiveText:e.menuLinkColorActive||o.a.menuActiveText,menuInactiveText:e.menuLinkColorInactive||o.a.menuInactiveText,navBar:{activeLink:e.menuLinkColorActive||e.highlightColor,activeSubmenuCaret:e.primaryColor,activeSubmenuLink:e.primaryColor,backgroundColor:p(e)||"",backgroundImage:"overlay"!==e.menuPosition?e.menuBackgroundImage:void 0,hoverLink:e.menuLinkColorHover||e.highlightColor,inactiveLink:e.menuLinkColorInactive||e.primaryColor,inactiveSubmenuCaret:m(.6,e.primaryColor),inactiveSubmenuLink:m(.6,e.primaryColor),submenuBackgroundColor:g(e),useOverlay:"overlay"===e.menuPosition},post:!e.postBackgroundColor||n.isOverlay||n.isCommentsPage?o.a.post:e.postBackgroundColor,titleText:e.postTitleColor&&!n.isOverlay?e.postTitleColor:o.a.titleText,voteText:{base:o.a.voteText.base,upvote:e.postUpvoteCountColor||o.a.voteText.upvote,downvote:e.postDownvoteCountColor||o.a.voteText.downvote},voteIcons:{upvoteActive:"custom"===e.postVoteIcons?e.postUpvoteIconActive:void 0,upvoteInactive:"custom"===e.postVoteIcons?e.postUpvoteIconInactive:void 0,downvoteActive:"custom"===e.postVoteIcons?e.postDownvoteIconActive:void 0,downvoteInactive:"custom"===e.postVoteIcons?e.postDownvoteIconInactive:void 0},widgetColors:{sidebarWidgetBackgroundColor:e.sidebarWidgetBackgroundColor||o.a.widgetColors.sidebarWidgetBackgroundColor,sidebarWidgetHeaderColor:e.sidebarWidgetHeaderColor||o.a.widgetColors.sidebarWidgetHeaderColor,lineColor:Object(i.d)(y(e.sidebarWidgetBackgroundColor))}},{backgroundImage:n.isOverlay?void 0:e.postBackgroundImage,backgroundImagePosition:e.postBackgroundImagePosition,placeholderImage:e.postPlaceholderImage,placeholderImagePosition:e.postPlaceholderImagePosition},!1),redditTheme:h,newRedditTheme:Object(i.e)(o.a,{},!1)}}function _(e,n){return{subredditContext:n,communityTheme:{},newCommunityTheme:Object(i.e)({banner:{backgroundColor:Object(r.g)(.9,e.bannerBackgroundColor||m(.6,e.primaryColor)||o.b.banner.backgroundColor),backgroundImage:e.bannerBackgroundImage,backgroundImagePosition:e.bannerBackgroundImagePosition,communityNameFormat:e.bannerCommunityNameFormat,iconColor:e.primaryColor,iconImage:e.communityIcon,iconDimensions:"small"===e.bannerHeight?f:i.f,lineHeight:"small"===e.bannerHeight?"38":"60",height:v(e),positionedImage:e.bannerPositionedImage,positionedImageHeight:I(e.bannerHeight),positionedImageAlignment:e.bannerPositionedImagePosition,secondaryBannerPositionedImage:e.secondaryBannerPositionedImage,showCommunityIcon:d[e.bannerShowCommunityIcon]},voteIcons:{upvoteActive:"custom"===e.postVoteIcons?e.postUpvoteIconActive:void 0,upvoteInactive:"custom"===e.postVoteIcons?e.postUpvoteIconInactive:void 0,downvoteActive:"custom"===e.postVoteIcons?e.postDownvoteIconActive:void 0,downvoteInactive:"custom"===e.postVoteIcons?e.postDownvoteIconInactive:void 0},widgetColors:o.b.widgetColors},{backgroundImage:void 0,backgroundImagePosition:void 0,placeholderImage:e.postPlaceholderImage,placeholderImagePosition:e.postPlaceholderImagePosition},!0),redditTheme:h,newRedditTheme:Object(i.e)(o.b,{},!0)}}const E=_(c.c,C),M={[s.b.REDDIT]:j,[s.b.NIGHT]:E}}}]);
//# sourceMappingURL=Chat~Governance~Reddit~RedesignChat.482ca0bc706e19e5fc57.js.map

}
/*
     FILE ARCHIVED ON 00:06:29 Mar 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:50:17 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.075
  exclusion.robots.policy: 0.062
  cdx.remote: 0.11
  esindex: 0.01
  LoadShardBlock: 141.657 (6)
  PetaboxLoader3.datanode: 109.703 (8)
  load_resource: 147.197 (2)
  PetaboxLoader3.resolve: 109.331 (2)
*/