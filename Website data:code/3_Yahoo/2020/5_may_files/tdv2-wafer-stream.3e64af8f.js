"use strict";window.wafer&&window.wafer.ready(function(){var d=window.encodeURIComponent(document.location.href);window.wafer.on("fetch:success",function(e){var t=e.elem;if(t.classList&&t.classList.contains("stream-batch-fetch")){var r="https://sb.scorecardresearch.com/p2?c1=2&c2=7241469&ns_c=UTF-8",a=window.rapidPageConfig&&window.rapidPageConfig.rapidConfig&&window.rapidPageConfig.rapidConfig.spaceid,n=window.YAHOO&&window.YAHOO.comscore&&window.YAHOO.comscore.c14||-1;if(r&&a){r=r+"&c5="+a+"&c7="+d+"&ns__t="+Date.now().toString()+"&c14="+n;var i=function(e,t,a){a()},o=window.__cmp||i,s=window.__uspapi||i;o("getVendorConsents",null,function(a,n){s("getDoNotSell",1,function(e,t){n&&a&&a.gdprApplies&&a.vendorConsents?r+="&cs_ucfr="+(a.vendorConsents[77]?1:0):t&&e&&"boolean"==typeof e.doNotSell&&(r+="&cs_ucfr="+(e.doNotSell?0:1)),window.wafer.utils.fireBeacon(r,{useNavigator:!1,useTimestamp:!1})})})}}});var u="show-drawer",f=null,w=null,m=null,g="stream-uuid-list",s="userintent-disliked-anim",c="data-uuid",t="youmaylike",h=[],l=document.querySelector(".stream-items"),o=document.querySelector(".stream-ad-fetch"),p=window.innerWidth||document.documentElement.clientWidth,e="js-sponsored-moments-dwell-time",y={};if(l){if(l.addEventListener("animationend",function(e){var t=e&&e.target;e&&t&&("hideStreamItem"===e.animationName||"fadeOutAdConfirm"===e.animationName)&&t.parentNode&&t.parentNode.removeChild(t)}),l.addEventListener("click",function(e){var t=e.target;if(t.classList.contains("userintent-undo")){var a=t.getAttribute("data-wf-toggle-target"),n=l.querySelector(a);if(n){var r=n.getAttribute(c);r&&y[r]&&clearTimeout(y[r])}}}),o&&window.wafer.base&&window.wafer.utils){var a=o.getAttribute("data-wf-url"),n=o.getAttribute("data-wf-state-body");window.wafer.utils.fetchWithCache(a,{body:n,cache:0}).then(function(e){if(e&&e.html){o.innerHTML=e.html;var t=o.querySelectorAll(".stream-ad"),a=l.querySelectorAll(".stream-ad-placeholder");if(t&&a)for(var n=t.length,r=a.length,i=0;i<r&&i<n;i++)a[i].replaceWith(t[i]);o.innerHTML="",window.wafer.base.sync(l)}})}var r=l.querySelectorAll("."+e+", ."+e+"-mon");if(r.length){r.forEach(function(e){e.classList&&e.classList.contains("js-reserve-moments")&&(window.DARLA?function e(t){var a=Math.floor(16*p/9),n=t.querySelector("#defaultRESERVEMOMENTS"),r=n&&n.getAttribute("data-html");if(r){var i=window.DARLA.prefetched();if(window.DARLA.inProgress()||i&&0!==i.length)setTimeout(function(){e(t)},500);else{var o={dest:"defaultRESERVEMOMENTS",flex:{h:{min:a},w:{min:p}},h:a,id:"RESERVEMOMENTS",supports:{"exp-ovr":1,"exp-push":1,"resize-to":1},w:p};window.DARLA.addPos(o);var s=new window.DARLA.Response("RESERVEMOMENTS",{});r=unescape(r),s.add("RESERVEMOMENTS",r),window.DARLA.render(s)}}}(e):e.style.display="none")});var i=r[0].querySelector(".js-panorama-scroll-view");i&&0===i.scrollLeft&&(i.scrollLeft=(i.scrollWidth-p)/2)}}window.addEventListener("viewerOpened",function(e){var t=e&&e.detail&&e.detail.uuid;if(t){var a=document.querySelector('li[data-uuid="'+t+'"]'),n=a&&a.getAttribute("data-parent-uuid");if(f=n&&document.querySelector('li[data-uuid="'+n+'"]')||a,m=f&&f.getElementsByClassName("stream-related-drawer")[0]){if(f.classList.contains(u))return;var r={config:{relatedUuid:t},ctrl:"StreamRelated",m_id:"tdv2-wafer-stream",m_mode:"json"},i={dedupeUUIDs:function(){for(var e=Array.prototype.slice.call(document.getElementsByClassName(g)),t=0;t<e.length;t++){var a=e[t],n=a.text;a.classList.remove(g);try{var r=JSON.parse(n);r&&Array.isArray(r.uuidList)&&h.length+r.uuidList.length<=250&&(h=h.concat(r.uuidList))}catch(e){}}return{dedupeUUIDs:h}}().dedupeUUIDs.join(","),uuid:t},o=m.getAttribute("data-cfg");if(o)try{var s=JSON.parse(o);s&&s.i13n&&(w=s.i13n),r.config=Object.assign(r.config,s)}catch(e){}r.config.tachyonParams=r.config.tachyonParams||{},r.config.tachyonParams.query=r.config.tachyonParams.query||{},r.config.tachyonParams.query.where=Object.assign(i,r.config.tachyonParams.query.where);var d=window.wafer.base.state.drawer,c=d&&d.adsToken;if(c){var l={query:{where:{ads_dedup_token:c}}};r.config.adTachyonParams=Object.assign(r.config.adTachyonParams||{},l)}m.setAttribute("data-wf-body",JSON.stringify(r)),m.classList.remove("wafer-fetch-error","wafer-fetch-complete"),m.classList.add("wafer-fetch"),window.wafer.base.sync(m.parentNode)}}}),window.addEventListener("viewerClosed",function(){if(f&&!f.classList.contains(u)){var e=m&&!!m.getElementsByClassName("stream-realted-list")[0];e&&f.classList.add(u),e&&w&&window.rapidInstance&&window.rapidInstance.beaconClick("strm",t,0,Object.assign(w,{_p:0,cnt_tpc:w.categoryLabel,g:f.getAttribute(c),grpt:"storyCluster",itc:1,pkgt:t})),w="",f=m=null}});window.wafer.on("toggle:change",function(e){if(e&&e.meta&&e.elem){var t=e.elem.getAttribute("data-wf-toggle-target");if("userintent-hidestrmitem"===e.meta.className&&"add"===e.meta.action){if(t&&l){var a=l.querySelector(t),n=a&&a.getAttribute(c);n&&(y[n]=setTimeout((o=a,function(){o.classList.contains(s)||o.classList.add(s)}),8e3))}}else if("show-drawer"===e.meta.className){var r=l.querySelector(t),i=r&&r.getElementsByClassName("drawer-fetch-target")[0];setTimeout(function(){i&&(i.innerHTML="")},300)}}var o})});