YUI.add("af-eu-tracking",function(e,t){"use strict";e.namespace("Af").EuTracking={agof:function(t){var n={},r=t&&t.spaceid||"";if(!r)return;e.Media.Agof&&e.Media.Agof.beacon&&(n={st:t&&t.domain||"mobyahoo",co:t&&t.comment||"kommentar",cp:r},e.Media.Agof.beacon(n))},whap:function(t){var n=t&&t.serial||"800000206964",r=t&&t.channel||"",i=t&&t.brand||"",s=encodeURIComponent(document.referrer),o;o=window.location.protocol+"//w.estat.com/m/web/"+n+"?n="+Math.round(Math.random()*1e9)+"&type=whap&v=0.09&r="+s,r&&(o+="&chn="+encodeURIComponent(r)),i&&(o+="&brnd="+encodeURIComponent(i)),e.Af.Beacon.send(o)}}},"@VERSION@",{requires:["af-beacon","media-agof-tracking"]});