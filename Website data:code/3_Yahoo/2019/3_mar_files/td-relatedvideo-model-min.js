YUI.add("td-relatedvideo-model",function(e){var i={article:"1",slideshow:"2",video:"3"};e.namespace("TD.RelatedVideo").Model=e.Base.create("TDRelatedVideoModel",e.Model,[e.Af.Sync],{resource:"relatedvideo",readonly:!0,consolidate:!1,initializer:function(e){},fireContentEvent:function(t){var n=[];t&&t.length&&(e.Array.each(t,function(e){var t,l,d;e.id&&(l=e.id,d=!0,!1===e.is_eligible&&(l="SS-"+l,d=!1),t={id:l,link:e.link,eligible:d,title:e.title,type:i[e.type]},n.push(t))}),n.length>0&&e.Af.Event.fire("content:init",{guid:"relatedvideo",list:n,fullList:n}))},loadRelatedVideos:function(e,i){var t={params:e},n=this;this.sync("read",t,function(e,t){!e&&t&&(n.fireContentEvent(t),i(null,t))})}})},"@VERSION@",{requires:["af-sync","base-build","model","af-beacon"]});