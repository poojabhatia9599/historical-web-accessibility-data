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

(window.webpackJsonp=window.webpackJsonp||[]).push([["CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~OriginalC~3e01cebe"],{"./node_modules/lodash/times.js":function(e,t,i){var n=i("./node_modules/lodash/_baseTimes.js"),s=i("./node_modules/lodash/_castFunction.js"),r=i("./node_modules/lodash/toInteger.js"),o=9007199254740991,l=4294967295,a=Math.min;e.exports=function(e,t){if((e=r(e))<1||e>o)return[];var i=l,d=a(e,l);t=s(t),e-=l;for(var h=n(d,t);++i<e;)t(i);return h}},"./src/lib/intersectionObserver/index.ts":function(e,t,i){"use strict";let n;i.d(t,"a",function(){return o}),i.d(t,"b",function(){return l});const s=new Map,r=new Map;"undefined"!=typeof window&&(i("./node_modules/intersection-observer/intersection-observer.js"),n=new IntersectionObserver(e=>{e.forEach(e=>{const t=e.target,i=e.intersectionRatio>0;if(i!==!!r.get(t)){r.set(t,i);const n=s.get(t);if(n){n(e,i&&!!r.get(t))}}})},{threshold:[.001]}));const o=(e,t)=>{try{s.set(e,t),n&&n.observe(e)}catch(i){0}},l=e=>{try{s.delete(e),n&&n.unobserve(e)}catch(t){0}}},"./src/reddit/components/PostList/Placeholder.tsx":function(e,t,i){"use strict";var n=i("./node_modules/lodash/constant.js"),s=i.n(n),r=i("./node_modules/lodash/times.js"),o=i.n(r),l=i("./node_modules/react/index.js"),a=i.n(l),d=i("./node_modules/react-redux/es/index.js"),h=i("./node_modules/reselect/es/index.js"),c=i("./src/lib/fastdom/index.ts"),p=i("./src/lib/intersectionObserver/index.ts"),m=i("./src/reddit/constants/postLayout.ts"),u=i("./bundled-modules/styled-components/styled-components.min.js"),g=i.n(u),f=i("./src/reddit/components/PostLeftRail/index.tsx"),b=i("./src/reddit/components/VerticalVotes/votes.tsx"),C=i("./src/reddit/contexts/PageLayer/index.tsx"),w=i("./src/reddit/constants/posts.ts"),I=i("./src/reddit/helpers/styles/components/index.tsx"),x=i("./src/reddit/helpers/styles/mixins/index.tsx"),v=i("./src/reddit/helpers/styles/mixins/loading.ts"),y=i("./src/reddit/models/Theme/NewColorSystem/index.ts"),O=i("./src/reddit/models/Vote/index.ts"),R=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&(i[n[s]]=e[n[s]])}return i};const S=Object(C.w)(),T=Object(h.c)({isFakeSubreddit:C.B}),j=Object(d.b)(T),E=g.a.div.withConfig({componentId:"s1isd0jg-0"})(["display: flex;margin: 8px 0;"]),M=g.a.div.withConfig({componentId:"s1isd0jg-1"})(["display: flex;flex-direction: column;justify-content: space-between;margin-left: 8px;"]),V=g()(Object(I.a)()).withConfig({componentId:"s1isd0jg-2"})(["","",""],v.c,v.d),F=g.a.div.withConfig({componentId:"s1isd0jg-3"})(["","background: rgba(0, 0, 0, 0.15);height: 16px;margin: 1.5px 0 1.5px -8px;width: 16px;"],v.d),k=g()(e=>{const t={interactive:!1,voteState:O.a.notVoted};return a.a.createElement("div",{className:e.className},a.a.createElement(b.d,Object.assign({key:"u"},t)),a.a.createElement(F,{key:"s"}),a.a.createElement(b.c,Object.assign({key:"d"},t)))}).withConfig({componentId:"s1isd0jg-4"})(["",""],x.z),P=g.a.div.withConfig({componentId:"s1isd0jg-5"})(["","margin-left: 8px;"],Object(x.y)(w.c,w.d)),H=g()(V).withConfig({componentId:"s1isd0jg-6"})(["","","position: relative;"],x.d,x.c),W=g()(V).withConfig({componentId:"s1isd0jg-7"})(["height: 20px;width: 328px;"]),N=g()(V).withConfig({componentId:"s1isd0jg-8"})(["height: 10px;margin-top: 8px;width: 88px;"]),L=g.a.div.withConfig({componentId:"s1isd0jg-9"})(["align-items: center;display: flex;flex-direction: row;margin: auto 8px 0 0;"]),z=g()(V).withConfig({componentId:"s1isd0jg-10"})(["height: 12px;width: 16px;"]),_=g.a.div.withConfig({componentId:"s1isd0jg-11"})(["border-right: 1px solid ",";height: 16px;margin: 0 8px;vertical-align: middle;"],e=>Object(y.c)(e).line),A=g()(V).withConfig({componentId:"s1isd0jg-12"})(["height: 12px;width: 110px;"]),U=g()(V).withConfig({componentId:"s1isd0jg-13"})(["height: 12px;margin-left: 8px;width: 20px;"]);var q=g()(S(j(e=>{var t=e.className,i=R(e,["className"]);return a.a.createElement("div",{className:t},a.a.createElement(f.b,null,a.a.createElement(k,Object.assign({},i))),a.a.createElement(E,null,a.a.createElement(P,null,a.a.createElement(H,Object.assign({gradientType:"posts"},i))),a.a.createElement(M,null,a.a.createElement("div",{key:"a"},a.a.createElement(W,Object.assign({key:"aa",gradientType:"posts"},i)),a.a.createElement(N,Object.assign({key:"ab",gradientType:"posts"},i))),a.a.createElement(L,{key:"f"},a.a.createElement(z,Object.assign({key:"fa",gradientType:"posts"},i)),a.a.createElement(_,{key:"fb"}),a.a.createElement(A,Object.assign({key:"fc",gradientType:"posts"},i)),a.a.createElement(U,Object.assign({key:"fd",gradientType:"posts"},i))))))}))).withConfig({componentId:"s1isd0jg-14"})(["","",""],x.h,x.g),B=i("./src/reddit/components/SubredditIcon/index.tsx"),K=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&(i[n[s]]=e[n[s]])}return i};const D=Object(C.w)(),$=Object(h.c)({isFakeSubreddit:C.B}),G=Object(d.b)($),J=g.a.div.withConfig({componentId:"hynnh0-0"})(["","background: rgba(0, 0, 0, 0.15);height: 16px;margin: 0 14px 0 4px;width: 16px;"],v.d),Q=g()(e=>{const t={interactive:!1,voteState:O.a.notVoted};return a.a.createElement("div",{className:e.className},a.a.createElement(b.d,Object.assign({key:"u"},t)),a.a.createElement(J,{key:"s"}),a.a.createElement(b.c,Object.assign({key:"d"},t)))}).withConfig({componentId:"hynnh0-1"})(["","align-items: center;flex-direction: row;"],x.z),X=g.a.div.withConfig({componentId:"hynnh0-2"})(["align-items: flex-start;display: flex;flex-direction: row;padding: 3px 8px 3px 4px;"]),Z=g.a.div.withConfig({componentId:"hynnh0-3"})(["margin: 4px;margin-left: 14px;"]),Y=g()(Object(I.a)()).withConfig({componentId:"hynnh0-4"})(["","border-radius: 100%;height: 16px;width: 16px;"],v.c),ee=g.a.div.withConfig({componentId:"hynnh0-5"})(["margin: 2px 12px 0 4px;"]),te=g()(e=>a.a.createElement(B.a,{className:e.className})).withConfig({componentId:"hynnh0-6"})(["",""],v.c),ie=g()(Object(I.a)()).withConfig({componentId:"hynnh0-7"})(["","",""],v.c,v.d),ne=g.a.div.withConfig({componentId:"hynnh0-8"})(["align-items: center;display: flex;flex: 1 1 100%;min-height: 24px;overflow: hidden;"]),se=g()(ie).withConfig({componentId:"hynnh0-9"})(["height: 12px;margin-top: 2px;width: 160px;"]),re=g()(ie).withConfig({componentId:"hynnh0-10"})(["height: 12px;margin-left: 8px;margin-top: 2px;width: 256px;"]),oe=g()(ie).withConfig({componentId:"hynnh0-11"})(["height: 12px;margin-left: 8px;width: 52px;"]),le=g()(ie).withConfig({componentId:"hynnh0-12"})(["height: 12px;margin-left: 8px;width: 20px;"]),ae=g()(e=>{var t=e.className,i=K(e,["className"]);return a.a.createElement("div",{className:t},a.a.createElement(oe,Object.assign({key:"fc",gradientType:"posts"},i)),a.a.createElement(le,Object.assign({key:"fe",gradientType:"posts"},i)))}).withConfig({componentId:"hynnh0-13"})(["align-items: center;display: flex;margin-left: auto;min-height: 24px;"]);var de=g()(D(G(e=>{var t=e.className,i=K(e,["className"]);return a.a.createElement("div",{className:t},a.a.createElement(X,null,a.a.createElement(Q,Object.assign({key:"c"},i)),a.a.createElement(Z,{key:"a"},a.a.createElement(Y,Object.assign({gradientType:"posts"},i))),a.a.createElement(ee,{key:"d"},a.a.createElement(te,Object.assign({gradientType:"posts"},i,{isLoading:!1}))),a.a.createElement(ne,{key:"e"},a.a.createElement(se,Object.assign({gradientType:"posts",key:"ea"},i)),a.a.createElement(re,Object.assign({gradientType:"posts",key:"eb"},i))),a.a.createElement(ae,Object.assign({key:"f"},i))))}))).withConfig({componentId:"hynnh0-14"})(["","",""],x.i,x.g),he=i("./src/reddit/models/Media/index.ts"),ce=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&(i[n[s]]=e[n[s]])}return i};const pe=Math.round(.67*he.i),me=Object(C.w)(),ue=Object(h.c)({isFakeSubreddit:C.B}),ge=Object(d.b)(ue),fe=g.a.div.withConfig({componentId:"lr44mn-0"})(["margin: 8px 0 0 40px;"]),be=g()(Object(I.a)()).withConfig({componentId:"lr44mn-1"})(["","",""],v.c,v.d),Ce=g.a.div.withConfig({componentId:"lr44mn-2"})(["","background: rgba(0, 0, 0, 0.15);height: 16px;margin: 1.5px 0 1.5px -8px;width: 16px;"],v.d),we=g()(e=>{const t={interactive:!1,voteState:O.a.notVoted};return a.a.createElement("div",{className:e.className},a.a.createElement(b.d,Object.assign({key:"u"},t)),a.a.createElement(Ce,{key:"s"}),a.a.createElement(b.c,Object.assign({key:"d"},t)))}).withConfig({componentId:"lr44mn-3"})(["",""],x.z),Ie=g()(e=>{e.gradientType,e.isLoading;var t=ce(e,["gradientType","isLoading"]);return a.a.createElement(B.b,Object.assign({},t))}).withConfig({componentId:"lr44mn-4"})(["",""],v.c),xe=g.a.div.withConfig({componentId:"lr44mn-5"})(["align-items: center;display: flex;flex-direction: row;flex-wrap: nowrap;margin: 0 8px 8px 0;"]),ve=g()(be).withConfig({componentId:"lr44mn-6"})(["height: 12px;width: 88px;"]),ye=g()(be).withConfig({componentId:"lr44mn-7"})(["height: 12px;margin-left: 8px;width: 232px;"]),Oe=g()(be).withConfig({componentId:"lr44mn-8"})(["height: 20px;margin-top: 16px;width: 328px;"]),Re=g()(Object(I.a)()).withConfig({componentId:"lr44mn-9"})(["","height: ","px;margin: 8px 0 0 40px;width: 100%;"],v.c,pe),Se=g.a.div.withConfig({componentId:"lr44mn-10"})(["align-items: center;display: flex;flex-direction: row;margin: 8px 8px 8px 0;"]),Te=g()(be).withConfig({componentId:"lr44mn-11"})(["height: 16px;width: 110px;"]),je=g()(be).withConfig({componentId:"lr44mn-12"})(["height: 16px;margin-left: 8px;width: 20px;"]);var Ee=g()(me(ge(e=>{var t=e.className,i=(e.dispatch,e.pageLayer,ce(e,["className","dispatch","pageLayer"]));return a.a.createElement("div",{className:t},a.a.createElement(f.b,{key:"a"},a.a.createElement(we,Object.assign({},i))),a.a.createElement(fe,{key:"b"},a.a.createElement(xe,{key:"ba"},i.isFakeSubreddit&&a.a.createElement(Ie,{key:"baa",gradientType:"posts",isLoading:!1}),a.a.createElement(ve,Object.assign({key:"bab",gradientType:"posts"},i)),a.a.createElement(ye,Object.assign({key:"bac",gradientType:"posts"},i))),a.a.createElement(Oe,Object.assign({key:"bb",gradientType:"posts"},i))),a.a.createElement(Re,Object.assign({key:"c",gradientType:"posts"},i)),a.a.createElement(fe,{key:"d"},a.a.createElement(Se,null,a.a.createElement(Te,Object.assign({gradientType:"posts"},i)),a.a.createElement(je,Object.assign({gradientType:"posts"},i)))))}))).withConfig({componentId:"lr44mn-13"})(["",""],x.b);const Me={[m.f.Large]:[Ee,2],[m.f.Classic]:[q,10],[m.f.Compact]:[de,30]};var Ve=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,s=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(a){s=!0,r=a}finally{try{!n&&l.return&&l.return()}finally{if(s)throw r}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();const Fe=.1,ke=Object(h.c)({loadingPostComponentForLayout:()=>(function(e){return Me[e]})}),Pe=Object(d.b)(ke);t.a=Pe(class extends a.a.Component{constructor(){super(...arguments),this.mounted=!1,this.state={visible:!1},this.setWrapperRef=(e=>{e!==this.wrapperRef&&(this.wrapperRef&&p.b(this.wrapperRef),e&&p.a(e,this.updateVisibleState)),this.wrapperRef=e}),this.updateVisibleState=(e=>{const t=e.intersectionRatio>=Fe;c.a.write(()=>{this.mounted&&this.setState(e=>e.visible!==t?{visible:t}:null)})})}componentDidMount(){document.documentElement.scrollTop=document.body.scrollTop=0,this.mounted=!0}componentWillUnmount(){this.mounted=!1,this.wrapperRef&&p.b(this.wrapperRef)}render(){var e=this.props;const t=e.className,i=e.countOverride,n=e.isLoading,r=e.layout,l=e.loadingPostComponentForLayout,d=this.state.visible;var h=l(r),c=Ve(h,2);const p=c[0],m=c[1],u=i||m,g=s()(a.a.createElement(p,{isLoading:n&&d})),f=o()(u,g);return a.a.createElement("div",{className:t,ref:this.setWrapperRef},a.a.Children.toArray(f))}})},"./src/reddit/components/Scroller/Simple.m.less":function(e,t,i){e.exports={Hidden:"wwHbgRV0ZXGp5CHHlpo5u",hidden:"wwHbgRV0ZXGp5CHHlpo5u"}},"./src/reddit/components/Scroller/Simple.tsx":function(e,t,i){"use strict";var n=i("./node_modules/lodash/debounce.js"),s=i.n(n),r=i("./node_modules/lodash/isNil.js"),o=i.n(r),l=i("./node_modules/react/index.js"),a=i.n(l),d=i("./node_modules/react-dom/index.js"),h=i("./node_modules/react-redux/es/index.js"),c=i("./node_modules/request-idle-callback/index.js"),p=i("./node_modules/reselect/es/index.js"),m=i("./src/lib/constants/index.ts"),u=i("./src/lib/fastdom/index.ts"),g=i("./node_modules/lodash/throttle.js"),f=i.n(g);const b=500,C=1e3,w=40;var I;!function(e){e.Max10="0-10",e.Max20="11-20",e.Max30="21-30",e.Max40="31-40",e.Max50="41-50",e.Max60="51-60"}(I||(I={}));const x=()=>({[I.Max10]:0,[I.Max20]:0,[I.Max30]:0,[I.Max40]:0,[I.Max50]:0,[I.Max60]:0}),v=[I.Max10,I.Max20,I.Max30,I.Max40,I.Max50,I.Max60],y=e=>({eventHandler:e});function O({fn:e,subscriber:t,timeout:i}){const n=[];let s,r,o;const l=()=>{if(n.length<w)return;const e=x(),i=Math.min(C,n.length),s=n.splice(0,i);n.splice(0,n.length);const r=s[i-1]-s[0];for(let t=s.shift();s.length>0;t=s.shift()){const i=s[0]-t,n=Math.min(60,Math.ceil(1e3/i));e[n<=10?I.Max10:60===n?I.Max60:v[Math.ceil(n/10)-1]]+=i}const o=x();for(const t in e)o[t]=e[t]/r;t(o)},a=()=>{void 0!==o&&(window.clearTimeout(o),o=void 0)},d=()=>{void 0!==s&&(cancelAnimationFrame(s),s=void 0),void 0!==r&&(window.clearInterval(r),r=void 0),a(),l()},h=()=>{s=requestAnimationFrame(()=>{n.push(performance.now()),h()})},c=f()(()=>{a(),o=window.setTimeout(d,i)},m.H);return{cleanup:d,eventHandler:t=>{void 0===r?(h(),c(),r=window.setInterval(l,b)):c(),e(t)}}}var R=i("./src/lib/scheduler/index.ts"),S=i("./src/lib/domUtils/index.ts"),T=i("./src/lib/LinkedListMap/index.ts");const j=(e,t)=>e<0?t+e:e%t;class E{constructor(e){this.head=0,this.size=0,this.maxSize=e,this.items=new Array(e)}push(e){return this.items[this.head]=e,this.head=j(this.head+1,this.maxSize),this.size<this.maxSize&&this.size++,this}pop(){if(this.size>0){const e=j(this.head-1,this.maxSize),t=this.items[e];return this.items[e]=void 0,this.head=e,this.size--,t}}forEach(e){let t=this.size<this.maxSize?j(this.head-this.size,this.maxSize):this.head;for(let i=0;i<this.size;i++)e(this.items[t],i,this.size),t=(t+1)%this.maxSize}map(e){const t=new Array(this.size);return this.forEach((i,n,s)=>{t[n]=e(i,n,s)}),t}getEntries(){const e=new Array(this.size);return this.forEach((t,i)=>{e[i]=t}),e}clear(){const e=this.size;for(let t=0;t<e;t++)this.pop()}}var M=()=>document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0;class V{constructor({top:e,height:t,heightWithMargin:i}){this.height=t,this.heightWithMargin=i,this.top=e,this.bottom=this.top+this.height}contains(e){return!(e.top<=this.top||e.bottom>=this.bottom)}intersects(e){return!(e.bottom<=this.top||e.top>=this.bottom)}intersectsBorder(e){return e.top<=this.top&&e.bottom>=this.top||e.bottom>=this.bottom&&e.top<=this.bottom}containsTop(e){return!(e.top<this.top||e.top>this.bottom)}isAbove(e){return e.top>this.bottom}isBelow(e){return e.bottom<this.top}}const F=({buffer:e,container:t}={})=>{const i=o()(e)?1e3:e;if("undefined"!=typeof window&&t){const e=t===document?M():t.scrollTop;return new V({top:e,height:window.innerHeight})}return new V({top:0,height:i})};var k=i("./src/reddit/constants/componentSizes.ts"),P=i("./src/reddit/constants/elementClassNames.ts"),H=i("./src/reddit/contexts/InsideOverlay.tsx"),W=i("./src/reddit/selectors/platform.ts"),N=i("./src/telemetry/helpers/sendEvent.ts"),L=i("./src/telemetry/helpers/sendTiming.ts"),z=i("./src/reddit/components/Scroller/Simple.m.less"),_=i.n(z);const A=k.j,U=5*m.H,q=3,B=Object(p.c)({isOverlayOpen:W.i}),K=Object(h.b)(B),D={};function $(e){let t=0;do{t+=e.offsetTop||0,e=e.offsetParent}while(e);return t}const G=10,J=.9,Q=.9,X=1.8,Z=5,Y=1500,ee=2*m.H,te=400,ie=8,ne=5*m.H,se=30,re="object"==typeof performance&&"function"==typeof performance.now,oe=()=>re?performance.now():Date.now();function le(e,t){return T.a.fromArray(e.children.map((e,i)=>{const n=t&&t.get(e.id);return n?(n.isFocusable=!!e.isFocusable,n.trackOnEnteredViewport=e.trackOnEnteredViewport,n.trackOnExitedViewport=e.trackOnExitedViewport,n):{el:null,id:e.id,index:i,isFocusable:!!e.isFocusable,itemRef:void 0,focused:!1,loaded:!t&&i<Z,rectangle:void 0,trackOnEnteredViewport:e.trackOnEnteredViewport,trackOnExitedViewport:e.trackOnExitedViewport}}),"id")}t.a=K(Object(H.b)(class extends a.a.Component{constructor(e){super(e),this.lastRenderPosition=0,this.lastScrollTime=-1,this.resetCanFocusTimer=-1,this.unmountItemsIdleId=null,this.scrollingQuickly=!1,this.visibleChildrenCount=0,this.isRenderableChildrenStateChangePending=!1,this.parentOffsetTop=void 0,this.distanceToTop=void 0,this.measurementsInvalid=!1,this.viewport=void 0,this.mountableViewport=void 0,this.needsToPauseViewportItems=!0,this.updateRenderableChildrenWhenIdleHandle=null,this.requestUpdateWhenIdleCallbackHandle=null,this.pendingScollHandlerRead=null,this.renderableViewport=void 0,this.sendFPSData=(e=>{const t={name:this.props.trackingName};N.b.enqueue(new R.a({args:[e,t],cb:(e,t)=>Object(L.a)(m.l.Redesign,{data:e,meta:t,type:"scrollfps"})}))}),this.getVisibleChildren=(()=>{let e=0;const t=Y+(this.props.viewportTopPadding?this.props.viewportTopPadding:0),i=[];let n=this.nextVisibleChildrenIndex;for(;e<t&&n<this.props.children.length;){const t=this.props.children[n];i.push(t),e+=t.estHeight,n++}return this.visibleChildrenCount=i.length,i}),this.setRenderableChildrenIndexIncrement=(()=>{if(this.props.children[0]){const e=this.props.children[0].estHeight;this.renderableChildrenIndexIncrement=Math.min(Math.ceil(te/e),ie)}else this.renderableChildrenIndexIncrement=ie}),this.updateRenderableChildrenWhenIdle=(()=>{this.cancelPopulateRenderableChildrenWhenIdle(),this.hasScrolledWithinThreshold()||(this.timeoutForUpdateIdleCallback=ne,Object(c.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle),this.requestUpdateWhenIdleCallbackHandle=Object(c.requestIdleCallback)(()=>{const e=Math.ceil(this.renderableChildrenIndexIncrement/2);this.populateRenderableChildrenFromProps(!1,e)})),this.state.renderableChildren.length<this.props.children.length&&this.schedulePopulateRenderableChildrenWhenIdle()}),this.hasScrolledWithinThreshold=(()=>!!this.lastScrollTime&&oe()-this.lastScrollTime<ee),this.populateRenderableChildrenFromProps=((e=!1,t=this.renderableChildrenIndexIncrement,i)=>{const n=i||this.props.children;if(this.state.renderableChildren.length<n.length||e)if(this.hasScrolledWithinThreshold())u.a.read(()=>{clearTimeout(this.updateRenderableChildrenHandle),this.updateRenderableChildrenHandle=setTimeout(()=>{this.populateRenderableChildrenFromProps(e,this.renderableChildrenIndexIncrement,i?n:void 0)},ee)});else{this.nextVisibleChildrenIndex+t<=n.length?this.nextVisibleChildrenIndex+=t:this.nextVisibleChildrenIndex=n.length;const e=n.slice(0,this.nextVisibleChildrenIndex);e.length&&(this.lastVisibleElId=e[e.length-1].id),u.a.write(()=>{this.setState({renderableChildren:e})}),this.isRenderableChildrenStateChangePending=!0}}),this.lastElementIsAboutToBeVisible=(()=>!!(this.lastVisibleEl&&this.lastVisibleEl.getBoundingClientRect().top<window.innerHeight+te)),this.getRenderableChildrenIndexIncrement=((e=se)=>{let t=0,i=this.state.renderableChildren.length;for(;t<e&&i<this.props.children.length;)t+=this.props.children[i].estHeight,i++;const n=i-this.state.renderableChildren.length;return Math.max(this.renderableChildrenIndexIncrement,n)}),this.schedulePopulateRenderableChildrenWhenIdle=(()=>{!this.props.isOverlayOpen||this.props.isOverlay?this.updateRenderableChildrenWhenIdleHandle=setTimeout(()=>{this.updateRenderableChildrenWhenIdle()},this.timeoutForUpdateIdleCallback):this.cancelPopulateRenderableChildrenWhenIdle()}),this.cancelPopulateRenderableChildrenWhenIdle=(()=>{clearTimeout(this.updateRenderableChildrenWhenIdleHandle),Object(c.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)}),this.callOnScrollForItemsChanged=s()(()=>{this.handleScroll()},m.H),this.pauseAllElements=(()=>{const e=this.getItemsInViewportWithFilter(this.loadedChildRefFilter),t=[];e.forEach(e=>{const i=e.itemRef;i&&(e.focused=!1,t.push(i.pauseContent))}),u.a.write(()=>{t.forEach(e=>e())})}),this.elementIsVisible=(e=>!!this.viewport&&this.viewport.intersects(e)),this.getItemsInViewportWithFilter=(e=>{this.updateViewportInfo();const t=new T.a("id");return this.state.renderableChildren.forEach(i=>{const n=this.childMap.get(i.id);n&&e(n)&&t.push(n)}),t}),this.visibleChildRefFilter=(e=>{const t=this.getChildRectangle(e);return t&&this.elementIsVisible(t)||!1}),this.loadedChildRefFilter=(e=>e.loaded),this.resetScrollFramerateAndFocus=(()=>{this.scrollContainer&&(this.pixelsPerMSRing.clear(),this.lastScrollTime=-1,this.needsToPauseViewportItems=!0,null===this.unmountItemsIdleId&&(this.unmountItemsIdleId=Object(c.requestIdleCallback)(this.unmountItemsWhileIdle)),setTimeout(this.handleScroll,m.H))}),this.setContainerRef=(e=>{this.containerRef=e,this.props.innerRef&&this.props.innerRef(e)}),this.getChildRectangle=(e=>{const t=e.el;if(!t)return;if(e.rectangle&&!this.measurementsInvalid)return e.rectangle;if(void 0===this.parentOffsetTop){const e=t.offsetParent;this.parentOffsetTop=e.offsetTop;const i=e.getBoundingClientRect().top;this.distanceToTop=i+this.getScrollTop()}const i=t.offsetTop+(this.parentOffsetTop||0),n=t.clientHeight,s=`${t.scrollHeight}px`,r=new V({top:i,height:n,heightWithMargin:s});return e.rectangle=r,r}),this.handleResize=(e=>{this.fpsMeter&&this.fpsMeter.eventHandler(e);for(const t in this.hiddenChildren)this.remeasureWhenShown[t]=!0;this.measurementsInvalid=!0,this.callOnScrollForItemsChanged()}),this.handleScroll=(()=>{this.pendingScollHandlerRead||(this.pendingScollHandlerRead=u.a.read(()=>{if(clearTimeout(this.resetCanFocusTimer),this.cancelPopulateRenderableChildrenWhenIdle(),Object(S.b)()||!this.scrollContainer)return void(this.pendingScollHandlerRead=null);this.updateScrollMetrics();const e=this.getAveragePixelsPerMilliSecond(),t=e<J,i=e<Q,n=e<X;if(this.scrollContainer&&!this.loadMoreFired&&this.props.onLoadMore){let e=!1;if(void 0!==this.props.loadMoreToken&&void 0!==this.viewport&&this.nextVisibleChildrenIndex>=this.props.children.length){const t=this.containerRef?$(this.containerRef):0;e=!!this.containerRef&&this.containerRef.offsetHeight+t-this.viewport.bottom<=this.viewport.height}if(e){const e=this.props.onLoadMore;setTimeout(e),this.loadMoreFired=!0}}this.populateRenderableChildrenIfLastChildIsVisible();const s=new T.a("id");let r,o;const l=[];this.state.renderableChildren.forEach(e=>{const a=this.childMap.get(e.id);let d;if(a&&a.el){if(!(d=this.getChildRectangle(a)))return;const e=a.id;this.elementIsHideable(d)?void 0===this.hiddenChildren[e]&&(this.childrenToHide[e]=d.heightWithMargin):void 0!==this.hiddenChildren[e]&&(this.childrenToShow[e]=!0)}if(!a||!a.el||!a.rectangle)return void(this.measurementsInvalid&&a&&this.getChildRectangle(a));const h=a.id,c=a.itemRef,p=a.trackOnEnteredViewport,m=!!this.itemsInViewport.get(h);if(this.elementIsUnmountable(d))c&&m&&a.loaded&&a.isFocusable&&l.push(c.pauseContent);else if(c&&this.loadItemIfPossible(a,c,t,i,n,l),this.elementIsVisible(d)){s.push(a),!m&&p&&N.b.enqueue(new R.a({cb:p,args:void 0}));const e=this.elementIsFocused(d);e&&!o&&(o=a.id),t&&a.isFocusable&&!r&&e?(r=a.id,a.focused||(a.focused=!0,c&&l.push(c.focusContent))):a.loaded&&a.isFocusable&&(a.focused||this.needsToPauseViewportItems)&&(a.focused=!1,c&&l.push(c.pauseContent))}else m&&a.loaded&&a.isFocusable&&(a.focused=!1,c&&l.push(c.stopContent))}),u.a.write(()=>{l.forEach(e=>e()),this.props.enableElementHiding&&this.hideOrShowChildren()}),this.itemsInViewport.forEach(({id:e,trackOnExitedViewport:t})=>{t&&!s.has(e)&&N.b.enqueue(new R.a({cb:t,args:[!1]}))}),this.itemsInViewport=s,this.canFocusItems=t,this.focusedChild=r,this.primaryChild=o,this.measurementsInvalid=!1,this.needsToPauseViewportItems=!1,t?null===this.unmountItemsIdleId&&(this.unmountItemsIdleId=Object(c.requestIdleCallback)(this.unmountItemsWhileIdle)):(this.resetCanFocusTimer=setTimeout(this.resetScrollFramerateAndFocus,U),null!==this.unmountItemsIdleId&&(Object(c.cancelIdleCallback)(this.unmountItemsIdleId),this.unmountItemsIdleId=null)),this.props.onScroll&&this.props.onScroll({getVisibleItemsInViewport:()=>this.getItemsInViewportWithFilter(this.visibleChildRefFilter),primaryChild:this.primaryChild?this.childMap.get(this.primaryChild):void 0}),this.timeoutForUpdateIdleCallback=4*ne,this.schedulePopulateRenderableChildrenWhenIdle(),this.pendingScollHandlerRead=null}))}),this.unmountItemsWhileIdle=(e=>{if(!this.scrollContainer)return;const t=[];if(this.state.renderableChildren.forEach(e=>{const i=this.childMap.get(e.id);if(!i||!i.el||!i.itemRef)return;const n=this.getChildRectangle(i);n&&this.elementIsUnmountable(n)&&i.loaded&&t.push(i)}),!t.length)return;const i=Math.min(Math.ceil(e.timeRemaining()/q),t.length),n=[];for(let s=0;s<i;s++){const e=t[s];n.push(e.itemRef.unmountContent),e.loaded=!1,e.focused=!1}Object(d.unstable_batchedUpdates)(()=>{this.scrollContainer&&n.forEach(e=>e())}),i<t.length?this.unmountItemsIdleId=Object(c.requestIdleCallback)(this.unmountItemsWhileIdle):this.unmountItemsIdleId=null}),this.hideOrShowChildren=s()(()=>{for(const e in this.childrenToHide){const t=this.childrenToHide[e];void 0!==t&&(this.hideChild(e,t),this.childrenToHide[e]=void 0)}for(const e in this.childrenToShow)void 0!==this.childrenToShow[e]&&(this.showChild(e),this.childrenToShow[e]=void 0)},m.H),this.hideChild=((e,t)=>{const i=this.childMap.get(e);if(!i||!i.el)return;const n=i.el.firstChild;n&&(t!==i.el.style.height&&(i.el.style.height=t),n.classList.add(_.a.Hidden),this.hiddenChildren[e]=`${t}px`,i.loaded&&u.a.write(()=>{i.itemRef&&i.itemRef.unmountContent()}))}),this.showChild=(e=>{const t=this.childMap.get(e);if(!t||!t.el)return;const i=t.el.firstChild;i&&(this.remeasureWhenShown[t.id]&&(this.measurementsInvalid=!0,this.remeasureWhenShown[t.id]=void 0),t.el.style.height=null,i.classList.remove(_.a.Hidden),void 0!==this.hiddenChildren[e]&&(this.hiddenChildren[e]=void 0))}),this.getStylesForOuterWrapper=(e=>{if(void 0!==this.hiddenChildren[e])return{height:this.hiddenChildren[e]}}),this.remeasureChild=(e=>{this.measurementsInvalid=!0}),this.scrollToChild=((e,t)=>{this.measurementsInvalid=!0,u.a.read(()=>{const i=this.childMap.get(e);if(i&&i.el&&this.scrollContainer){if(i.rectangle=void 0,t&&this.isScrollChildTopVisible(e))return;const n=this.getScrollTop()+i.el.getBoundingClientRect().top-(this.props.scrollToChildPadding||0)-(this.props.viewportTopPadding||0);setTimeout(()=>{this.scrollContainer&&(Object(S.c)(this.scrollContainer,n),this.callOnScrollForItemsChanged())},m.H)}})}),this.isScrollChildTopVisible=(e=>{const t=this.childMap.get(e);if(t&&t.el&&this.scrollContainer){var i=this.props,n=i.scrollToChildPadding;const e=void 0===n?0:n;var s=i.viewportTopPadding;const r=void 0===s?0:s,o=window.innerHeight-r,l=t.el.getBoundingClientRect().top;return l>=r+e&&l<o}return!1}),this.childMap=le(e),this.containerRef=null,this.itemsInViewport=new T.a("id"),this.loadMoreFired=!1,this.pixelsPerMSRing=new E(G),this.wrapperRefFNs={},this.childRefFns={},this.childrenToHide={},this.childrenToShow={},this.canFocusItems=!0,this.focusedChild=void 0,this.hiddenChildren={},this.nextVisibleChildrenIndex=0,this.lastVisibleEl=null,this.lastVisibleElId=null,this.remeasureWhenShown={},this.timeoutForUpdateIdleCallback=ne;const t=this.getVisibleChildren();t.length&&(this.lastVisibleElId=t[t.length-1].id),this.nextVisibleChildrenIndex=t.length,this.updateRenderableChildrenHandle=null,this.state={renderableChildren:t},this.setRenderableChildrenIndexIncrement(),this.validateScrollPreservationProps(e),this.validateLoadMoreProps(e)}populateRenderableChildrenIfLastChildIsVisible(){this.isRenderableChildrenStateChangePending||this.state.renderableChildren.length<this.props.children.length&&u.a.read(()=>{if(!this.isRenderableChildrenStateChangePending&&this.lastElementIsAboutToBeVisible()){const e=this.getRenderableChildrenIndexIncrement();this.populateRenderableChildrenFromProps(!1,e)}})}setupScrollHandler(){this.fpsMeter=this.props.trackingName?O({fn:this.handleScroll,subscriber:this.sendFPSData,timeout:U}):y(this.handleScroll),this.scrollContainer&&this.scrollContainer.addEventListener("scroll",this.fpsMeter.eventHandler),window.addEventListener("resize",this.handleResize)}cleanupScrollHandler(){this.fpsMeter&&("function"==typeof this.fpsMeter.cleanup&&this.fpsMeter.cleanup(),this.scrollContainer&&this.scrollContainer.removeEventListener("scroll",this.fpsMeter.eventHandler),window.removeEventListener("resize",this.handleResize),this.pendingScollHandlerRead&&(u.a.clear(this.pendingScollHandlerRead),this.pendingScollHandlerRead=null))}componentDidMount(){this.props.getContainer?this.scrollContainer=this.props.getContainer()||document:this.scrollContainer=document,this.props.onScroll&&this.props.onScroll({getVisibleItemsInViewport:()=>this.getItemsInViewportWithFilter(this.visibleChildRefFilter),primaryChild:void 0}),this.props.disableScrollCache&&!this.props.preventScrollOnMount&&Object(S.c)(this.scrollContainer,0),this.setupScrollHandler(),u.a.write(()=>{if(!this.props.disableScrollCache){const e=this.getCacheKey(),t=D[e];o()(t)||(D[e]=void 0,this.scrollContainer&&Object(S.c)(this.scrollContainer,t))}this.callOnScrollForItemsChanged(),this.props.onLastVisibleChildRendered&&this.props.onLastVisibleChildRendered()}),this.schedulePopulateRenderableChildrenWhenIdle()}componentDidUpdate(e){if(this.isRenderableChildrenStateChangePending=!1,this.measurementsInvalid=!0,this.scrollTargetId&&(this.scrollToChild(this.scrollTargetId,!1),this.scrollTargetId=void 0),this.didLayoutAloneChange(e,this.props)){this.callExitedViewportForUnmount(),this.focusedChild=void 0,this.childrenToShow={},this.childrenToHide={},this.hiddenChildren={},this.childMap.forEach(e=>{e.loaded=!1,e.focused=!1}),this.setRenderableChildrenIndexIncrement(),this.populateRenderableChildrenFromProps(!0),this.callOnScrollForItemsChanged();const e=this.getVisibleChildren();this.visibleChildrenCount=e.length,this.schedulePopulateRenderableChildrenWhenIdle()}this.populateRenderableChildrenIfLastChildIsVisible(),e.trackingName!==this.props.trackingName&&(this.cleanupScrollHandler(),this.setupScrollHandler())}shouldComponentUpdate(e){return e.isOverlayOpen===this.props.isOverlayOpen}componentWillReceiveProps(e){this.validateScrollPreservationProps(e)&&this.validateLoadMoreProps(e)&&this.didLayoutAloneChange(this.props,e)&&this.hasBeenScrolled()&&this.handleScroll(),e.loadMoreToken!==this.props.loadMoreToken&&(this.loadMoreFired=!1,this.loadMoreEl=null),e.isOverlayOpen!==this.props.isOverlayOpen&&e.isOverlayOpen&&!this.props.isOverlay&&u.a.read(this.pauseAllElements),e.isOverlayOpen===this.props.isOverlayOpen||e.isOverlayOpen||this.props.isOverlay||this.resetScrollFramerateAndFocus(),this.childMap=le(e,this.childMap);const t=e.children.length<this.props.children.length,i=e.children.length===this.props.children.length&&e.children.some((e,t)=>e.id!==this.props.children[t].id);this.populateRenderableChildrenFromProps(t||i,this.renderableChildrenIndexIncrement,e.children),this.schedulePopulateRenderableChildrenWhenIdle()}componentWillUnmount(){if(this.callExitedViewportForUnmount(),this.cleanupScrollHandler(),clearTimeout(this.updateRenderableChildrenHandle),this.cancelPopulateRenderableChildrenWhenIdle(),this.scrollContainer&&!this.props.disableScrollCache){const e=this.getCacheKey();D[e]=this.lastRenderPosition}this.childMap=new T.a("id"),this.itemsInViewport=new T.a("id"),this.wrapperRefFNs={},this.childRefFns={},this.containerRef=null,this.loadMoreEl=void 0,this.scrollContainer=void 0,this.unmountItemsIdleId&&(Object(c.cancelIdleCallback)(this.unmountItemsIdleId),this.unmountItemsIdleId=null)}didLayoutAloneChange(e,t){return"string"==typeof e.layoutKey&&"string"==typeof t.layoutKey&&e.layoutKey!==t.layoutKey&&"string"==typeof e.dataKey&&"string"==typeof t.layoutKey&&e.dataKey===t.dataKey}elementIsFocused(e){if(!this.viewport)return!1;const t=this.distanceToTop?this.distanceToTop:0,i=this.parentOffsetTop?this.parentOffsetTop:0,n=e.bottom+t-i,s=e.top+t-i,r=Math.min(this.viewport.bottom,n)-Math.max(this.viewport.top,s),o=r/e.height,l=r/this.viewport.height;return o>.75||l>.9}getFirstItemInViewport(){for(const e of this.props.children){const t=e.id,i=this.childMap.get(t);if(i){const e=this.getChildRectangle(i);if(e&&this.elementIsVisible(e))return i}}}elementIsUnmountable(e){return!!this.mountableViewport&&!this.mountableViewport.intersects(e)}elementIsHideable(e){return!!this.renderableViewport&&!this.renderableViewport.intersects(e)}getCacheKey(){return this.props.children.map(e=>e.id).join("-")}getScrollTop(){return this.scrollContainer?this.scrollContainer===document?M():this.scrollContainer.scrollTop:0}updateViewportInfo(){if(this.scrollContainer){this.viewport=F({buffer:0,container:this.scrollContainer});var e=this.props.viewportTopPadding;const t=void 0===e?0:e,i=window.innerHeight-t,n=2*i;this.mountableViewport=new V({top:this.viewport.top-n,height:this.viewport.height+2*n});const s=4*i;this.renderableViewport=new V({top:this.viewport.top-s,height:this.viewport.height+2*s})}}updateScrollMetrics(){this.updateViewportInfo();const e=oe(),t=this.getScrollTop(),i=Math.abs(this.lastRenderPosition-t),n=e-this.lastScrollTime,s=this.lastScrollTime>-1;this.lastScrollTime=e,this.lastRenderPosition=t,s?this.pixelsPerMSRing.push(i/n):this.lastScrollTime=e}getAveragePixelsPerMilliSecond(){if(this.pixelsPerMSRing.size>1){let e=0;return this.pixelsPerMSRing.forEach(t=>e+=t),e/this.pixelsPerMSRing.size}return 0}_wrapperRefFN(e,t){const i=this.childMap.get(e);i&&(i.el=t),this.lastVisibleElId===e&&(this.lastVisibleEl=t)}getWrapperRefFN(e){let t=this.wrapperRefFNs[e];return t||(t=(t=>{this._wrapperRefFN(e,t)}),this.wrapperRefFNs[e]=t),t}_childRefFn(e,t,i){const n=this.childMap.get(e);n&&(n.itemRef=t,n.loaded=!!t&&(void 0!==i?i:n.loaded),this.callOnScrollForItemsChanged())}getChildRefFn(e){let t=this.childRefFns[e];return t||(t=((t,i)=>{this._childRefFn(e,t,i)}),this.childRefFns[e]=t),t}loadItemIfPossible(e,t,i,n,s,r){if(t.contentIsHeavyToMount()?n:s){const n=!e.isFocusable||i;!e.loaded&&n&&(e.loaded=!0,r.push(t.loadContent))}}callExitedViewportForUnmount(){this.itemsInViewport.forEach(({id:e,trackOnExitedViewport:t})=>{t&&N.b.enqueue(new R.a({cb:t,args:[!0]}))})}hasBeenScrolled(){if(!this.containerRef)return!1;var e=this.props.viewportTopPadding;const t=void 0===e?0:e,i=$(this.containerRef);return this.getScrollTop()+t-i>0}render(){return a.a.createElement("div",{className:this.props.className,ref:this.setContainerRef},this.state.renderableChildren.map((e,t)=>a.a.createElement("div",{key:`scroller-${e.id}`,ref:this.getWrapperRefFN(e.id),style:this.getStylesForOuterWrapper(e.id)},a.a.createElement("div",{className:this.hiddenChildren[e.id]?_.a.Hidden:void 0},e.render({className:P.g,height:e.estHeight,placeholderRecommended:!1,remeasure:this.remeasureChild,scrollToAndRemeasure:this.scrollToChild,setScrollerChildRef:this.getChildRefFn(e.id),shouldLoadInitially:t<Z,width:A})))))}validateScrollPreservationProps(e){return"string"!=typeof e.layoutKey||void 0!==e.dataKey}validateLoadMoreProps(e){return void 0===e.onLoadMore||"loadMoreToken"in e}}))},"./src/reddit/connectors/connectToLanguage.ts":function(e,t,i){"use strict";i.d(t,"a",function(){return l});var n=i("./node_modules/react-redux/es/index.js"),s=i("./node_modules/reselect/es/index.js"),r=i("./src/reddit/selectors/user.ts");const o=Object(s.c)({language:r.S});function l(e){return Object(n.b)(o)(e)}}}]);
//# sourceMappingURL=CollectionCommentsPage~CommentsPage~Explore~Frontpage~ModListing~ModQueuePages~Multireddit~OriginalC~3e01cebe.432fb018b7204f3ed7d2.js.map

}
/*
     FILE ARCHIVED ON 00:14:38 Jul 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:27 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.077
  exclusion.robots.policy: 0.065
  cdx.remote: 0.131
  esindex: 0.018
  LoadShardBlock: 169.221 (6)
  PetaboxLoader3.datanode: 166.712 (8)
  load_resource: 273.947 (2)
  PetaboxLoader3.resolve: 158.069 (2)
*/