"use strict";window.wafer&&window.wafer.ready((function(){window.wafer.on("fetch:success",(function(e){var t=e.elem;if(t){if(t.classList&&(t.classList.contains("collections-view-more")&&(document.documentElement.classList.remove("Reader-closed"),document.documentElement.classList.add("Reader-open"),window.wafer.base.lock(document.getElementById("MainView")),window.scrollTo(0,0)),t.classList.contains("stream-batch-fetch"))){var i=window.rapidPageConfig&&window.rapidPageConfig.rapidConfig&&window.rapidPageConfig.rapidConfig.spaceid;i&&(window._comscore=window._comscore||[],window._comscore.push({c1:2,c2:"7241469",c5:i,c7:document.location.href,c14:window.YAHOO&&window.YAHOO.comscore&&window.YAHOO.comscore.c14||-1}),window.COMSCORE&&window.COMSCORE.purge())}var a=t.getAttribute("data-wf-url");if(a&&a.indexOf("StandAloneVideo")>-1){var r="/p.gif?info=trendingvideofetch&bucket="+(window.rapidPageConfig&&window.rapidPageConfig.rapidConfig||{}).test_id;window.wafer.utils.fireBeacon(r)}}}));var e,t,i,a,r,n,o="show-drawer",s=null,c=null,l=null,d="wafer-fetch-error",u="wafer-fetch-complete",w="stream-related-drawer",f="StreamRelated",m="tdv2-wafer-stream",g="json",v="wafer-fetch",A="stream-uuid-list",p="userintent-disliked-anim",y="data-uuid",h="youmaylike",L=[],b=document.querySelector(".stream-items"),E=document.querySelector(".stream-ad-fetch"),q=window.innerWidth||document.documentElement.clientWidth,S="js-sponsored-moments-dwell-time",N="userintent-show-reason",O=window.wafer&&window.wafer.utils,U=document.querySelector(".stream-category-filter");U&&(e=document.getElementById("stream-category-form"),r="."+(a="stream-category-filter-btn-")+"fwd",n="."+a+"back",t=U.querySelector(r),i=U.querySelector(n));var C=function e(t){var i=Math.floor(16*q/9),a=t.querySelector("#defaultRESERVEMOMENTS"),r=a&&a.getAttribute("data-html");if(r){var n=window.DARLA.prefetched();if(window.DARLA.inProgress()||n&&0!==n.length)setTimeout((function(){e(t)}),500);else{var o={dest:"defaultRESERVEMOMENTS",flex:{h:{min:i},w:{min:q}},h:i,id:"RESERVEMOMENTS",supports:{"exp-ovr":1,"exp-push":1,"resize-to":1},w:q};window.DARLA.addPos(o);var s=new window.DARLA.Response("RESERVEMOMENTS",{});r=unescape(r),s.add("RESERVEMOMENTS",r),window.DARLA.render(s)}}},R={};if(b){if(b.addEventListener("animationend",(function(e){var t=e&&e.target;e&&t&&("hideStreamItem"===e.animationName||"fadeOutAdConfirm"===e.animationName)&&(t.classList.contains("ad-feedback-options")||(t.classList.contains("give-feedback-screen")&&(t=window.wafer.utils.findAncestor(t,"stream-item")),t.parentNode&&(window.wafer.base.destroy(t),t.parentNode.removeChild(t))))})),b.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("userintent-undo")){var i=t.getAttribute("data-wf-toggle-target"),a=b.querySelector(i);if(a){var r=a.getAttribute(y);r&&R[r]&&clearTimeout(R[r])}}!function(e){window.location.href.indexOf("functest=1")>-1&&e.preventDefault();var t=e.target;if(!O||!t)return;var i=O.findAncestor(t,"js-content-viewer");if(!i)return;var a=O.findAncestor(i,"stream-cluster-item")||O.findAncestor(i,"js-stream-content");if(!a)return;var r=a.getAttribute("data-uuid");if(r){var n=a&&a.getAttribute("data-parent-uuid");if(s=n&&document.querySelector('li[data-uuid="'+n+'"]')||a,l=s&&s.getElementsByClassName(w)[0]){if(s.classList.contains(o))return;var p=function(){for(var e=Array.prototype.slice.call(document.getElementsByClassName(A)),t=0;t<e.length;t++){var i=e[t],a=i.text;i.classList.remove(A);try{var r=JSON.parse(a);r&&Array.isArray(r.uuidList)&&L.length+r.uuidList.length<=250&&(L=L.concat(r.uuidList))}catch(e){}}return{dedupUuids:L}}(),y={config:{leadItemUuid:n||r},ctrl:f,m_id:m,m_mode:g},h={dedupUuids:p.dedupUuids.join(","),uuid:r},b=l.getAttribute("data-cfg");if(b){var E=a.getAttribute("data-cposy");E=isNaN(E)?null:parseInt(E,10);try{var q=JSON.parse(b);q&&q.i13n&&(c=q.i13n),null!==E&&(q.i13n.cposy=E),y.config=Object.assign(y.config,q)}catch(e){}}var S=l.getAttribute("data-bucket");S&&(y.bucket=S),y.config.ncpParams=y.config.ncpParams||{},y.config.ncpParams.query=y.config.ncpParams.query||{},y.config.ncpParams.query=Object.assign(h,y.config.ncpParams.query);var N=window.wafer.base.state.drawer,U=N&&N.adsToken;U&&(y.config.ncpParams.query.geminiDedupeToken=U),l.setAttribute("data-wf-body",JSON.stringify(y)),l.classList.remove(d,u),l.classList.add(v),window.wafer.base.sync(l.parentNode)}}}(e)})),E&&window.wafer.base&&window.wafer.utils){var T=E.getAttribute("data-wf-url"),M=E.getAttribute("data-wf-state-body");window.wafer.utils.fetchWithCache(T,{body:M,cache:0}).then((function(e){if(e&&e.html){E.innerHTML=e.html;var t=E.querySelectorAll(".stream-ad"),i=E.getElementsByClassName("wafer-state")[0],a=b.querySelectorAll(".stream-ad-placeholder");if(t&&a)for(var r=t.length,n=a.length,o=0;o<n&&o<r;o++)a[o].replaceWith(t[o]);E.innerHTML="",i&&E.appendChild(i),window.wafer.base.sync(b)}}))}var P=b.querySelectorAll("."+S+", ."+S+"-mon");if(P.length){P.forEach((function(e){e.classList&&e.classList.contains("js-reserve-moments")&&(window.DARLA?C(e):e.style.display="none")}));var B=P[0].querySelector(".js-panorama-scroll-view");B&&0===B.scrollLeft&&(B.scrollLeft=(B.scrollWidth-q)/2);var _,k,I=document.getElementById("scrollable-smad"),V=document.getElementById("scrollable-video"),D=window.innerHeight||document.documentElement.clientHeight,H={},j=function(e){return e&&(e=(e=(e=(e=(e=(e=e.replace(/\$\(V_AUTOPLAYED\)/,!1)).replace(/\$\(V_PLAYER_WIDTH\)/,I.clientHeight)).replace(/\$\(V_PLAYER_HEIGHT\)/,I.clientWidth)).replace(/\$\(V_SKIP_AVAIL\)/,!1)).replace(/\$\(V_EXPANDED\)/,!1)).replace(/\$\(V_AUD_INFO\)/,2)),e};if(I){var W=I.getBoundingClientRect();_=W.top-D,k=W.bottom-_,H.startActionUrl=I.getAttribute("data-video-quartile-start"),H.quartileActionUrl25=I.getAttribute("data-video-quartile-25"),H.quartileActionUrl50=I.getAttribute("data-video-quartile-50"),H.quartileActionUrl75=I.getAttribute("data-video-quartile-75"),H.quartileActionUrl100=I.getAttribute("data-video-quartile-100")}I&&V&&window.addEventListener("scroll",window.wafer.utils.throttle((function(){var e=V&&V.duration,t=I.getBoundingClientRect();if(t.top<D&&t.bottom>0){V.currentTime=(window.pageYOffset-_)*e/k;var i=(D-t.top)/D*100;(i=5*Math.ceil(i/5))>=100&&H.quartileActionUrl100?(window.wafer.utils.fireBeacon(j(H.quartileActionUrl100),{useNavigator:!1}),H.quartileActionUrl100=null):i>=75&&H.quartileActionUrl75?(window.wafer.utils.fireBeacon(j(H.quartileActionUrl75),{useNavigator:!1}),H.quartileActionUrl75=null):i>=50&&H.quartileActionUrl50?(window.wafer.utils.fireBeacon(j(H.quartileActionUrl50),{useNavigator:!1}),H.quartileActionUrl50=null):i>=25&&H.quartileActionUrl25?(window.wafer.utils.fireBeacon(j(H.quartileActionUrl25),{useNavigator:!1}),H.quartileActionUrl25=null):i>=5&&H.startActionUrl&&(window.wafer.utils.fireBeacon(j(H.startActionUrl),{useNavigator:!1}),H.startActionUrl=null)}}),16))}}window.addEventListener("viewerClosed",(function(){if(s&&!s.classList.contains(o)){var e=l&&!!l.getElementsByClassName("stream-realted-list")[0];if(e){s.classList.add("drawer-beacon");var t=s;setTimeout((function(){t.classList.add(o)}),10)}e&&c&&window.rapidInstance&&window.rapidInstance.beaconClick("strm",h,0,Object.assign(c,{_p:0,cnt_tpc:c.categoryLabel,g:s.getAttribute(y),grpt:"storyCluster",itc:1,pkgt:h})),c="",l=null,s=null}}));var Y=function(){var a=Math.ceil(100*e.scrollLeft/(e.scrollWidth-e.clientWidth));t.style.color=a>=100?"#ccc":"#7e1fff",0===a&&(i.style.display="none"),a>0&&(i.style.display="block",i.classList.remove("D(n)"))};U&&e&&(U.addEventListener("click",(function(t){var i=t.target;i&&"BUTTON"===i.tagName&&(i.classList.contains(a+"fwd")&&(e.scrollLeft+=500),i.classList.contains(a+"back")&&(e.scrollLeft-=500),setTimeout((function(){Y()}),500))})),e.addEventListener("scroll",(function(e){window.requestAnimationFrame(Y)})),window.wafer.on("fetch:success",(function(e){if(window.scrollY>495&&e.elem&&e.elem.classList.contains("stream-tab-contents")){var t=document.querySelector(".stream-tab-contents");window.scrollTo(0,t.offsetTop+80)}}))),window.wafer.on("toggle:change",(function(e){if(e&&e.meta&&e.elem){var t=e.elem,i=t.getAttribute("data-wf-toggle-target");if("userintent-hidestrmitem"===e.meta.className&&"add"===e.meta.action){if(i&&b){var a=b.querySelector(i),r=a&&a.getAttribute(y);r&&(R[r]=setTimeout((c=a,function(){c.classList.contains(p)||c.classList.add(p)}),8e3))}}else if("show-drawer"===e.meta.className){var n=b.querySelector(i),o=n&&n.getElementsByClassName("drawer-fetch-target")[0];setTimeout((function(){o&&(o.innerHTML="")}),300)}else if("userintent-show"===e.meta.className&&t){var s=window.wafer.utils.findAncestor(t,"stream-item");if(!s)return;"add"===e.meta.action?(s.classList.add(N),window.rapidInstance&&window.rapidInstance.reevaluateModulesViewability(s)):"remove"===e.meta.action&&s.classList.remove(N)}}var c}))}));