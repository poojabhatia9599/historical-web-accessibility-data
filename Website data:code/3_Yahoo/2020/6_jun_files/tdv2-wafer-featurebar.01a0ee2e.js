window.addEventListener("load",function(){var n,e,s,a,t=document.getElementsByClassName("tdv2-wafer-Featurebar")[0];t&&t.classList&&t.classList.contains&&t.classList.contains("auto-play")&&(n=window.getComputedStyle(t).height,e=Array.prototype.slice.call(t.getElementsByClassName("featurebar-content")),a=((s=0)+1)%e.length,1<e.length&&(e.forEach(function(t,e){e!==s&&(t.style.transform="translateY("+n+")")}),function t(){setTimeout(function(){e[s].style.transitionDuration=".8s",e[s].style.transform="translateY(-"+n+")",e[a].style.transitionDuration=".8s",e[a].style.transform="translateY(0)",setTimeout(function(){e[s].style.transitionDuration=null,e[s].style.transform="translateY("+n+")",a=((s=a)+1)%e.length,t()},1e3)},3e3)}()))});