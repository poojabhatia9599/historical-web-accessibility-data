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

var WORK_SERVER="https://web.archive.org/web/20221231233629/https://edge-mcdn.secure.yahoo.com/ybar/exp.json",TIMEOUT=2e3,Cerebro=function(){function e(){this.uploadType="individual",this.expCount=0,this.pending={},this.complete=0}return e.runExperiment=function(){(new e)._fetchWork()},e.sendBeacon=function(){this.runExperiment()},e.prototype._extractResourceTiming=function(n){var t="",t="[";return["startTime","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","secureConnectionStart","connectEnd","requestStart","responseStart","responseEnd"].forEach(function(e){t+=n[e]+","}),t=t.slice(0,-1)+"]"},e.prototype._extractHeader=function(n,e){if(0==e.length)return"{}";var t="{";return e.forEach(function(e){t+='"'+e+'":"'+n.getResponseHeader(e)+'",'}),t=t.slice(0,-1)+"}"},e.prototype._fetchWork=function(){var n=this,r=!1;new Promise(function(n,t){var o=setTimeout(function(){r=!0,t(new Error("Work Order Request Timed Out"))},TIMEOUT);fetch(WORK_SERVER).then(function(e){clearTimeout(o),r||n(e)}).catch(function(e){r||t(e)})}).then(function(e){return e.json()}).then(function(e){n._parseWork(e)}).catch(function(e){})},e.prototype._parseWork=function(e){var n=e.expCount,t=e.selection,o=(this.uploadType=e.uploadType,[]),r=[];if(0===n)console.log("not marked any experiments to run as expCount is 0");else{if(n>=e.expList.length)console.log("marked all experiments to run as expCount >= expList length"),r=e.expList;else if("random"===t){console.log("marked "+n+" random experiments to run");for(var i=0;i<n;i++){var s=Math.floor(Math.random()*(e.expList.length+1));s===e.expList.length&&(s-=1),r.push(e.expList[s])}}else if("ordered"===t){console.log("marked "+n+" ordered experiments to run");var a=Math.floor(Math.random()*(e.expList.length+1));a===e.expList.length&&(a-=1);for(i=0;i<n;i++)a+i>=e.expList.length&&(a=-1*i),r.push(e.expList[a+i])}else if("individual"===t)if(console.log("marked "+n+" individual experiments to run"),100*Math.random()<e.runProb)for(var u=0,c=e.expList;u<c.length;u++){var l=c[u];r.push(l)}for(var p=0,d=r;p<d.length;p++)for(l=d[p],i=0;i<l.trials;i++){var f=Math.ceil(99999999999999*Math.random()).toString(36),f=l.target.replace("<RAND>",f),h=new RegExp(l.beaconRegex,"gi").exec(f),m=[],g=[];l.requestHeaders&&(m=l.requestHeaders),l.parseHeaders&&(g=l.parseHeaders),null!==h&&null!==h[1]?o.push([f,h[1],l.timeout,m,g,l.name,l.uploadEndpoints]):o.push([f,l.name,l.timeout,m,g,l.name,l.uploadEndpoints]),this.expCount++}t=100;100*Math.random()<=(t=e.runProb?e.runProb:t)?(console.log("sending beacons to targets"),this._sendBeacons(o)):console.log("not sending beacons")}},e.prototype._sendBeacons=function(e){for(var m=this,n=function(){this.startTime=0,this.endTime=0,this.source="default"},t=0,o=e;t<o.length;t++){var r=o[t];!function(r,i,s,o,a,u,c){var l,p,d,f,h;0<a.length||0<o.length?(p=new n,d=!1,new Promise(function(e,n){var t=setTimeout(function(){d=!0,n(new Error("Header Request Timed Out"))},s);(l=new XMLHttpRequest).open("GET",r,!0),l.onload=function(){clearTimeout(t),d||e()},l.onerror=function(){clearTimeout(t),d||e()},o.forEach(function(e){e=e.split(":");2==e.length&&l.setRequestHeader(e[0],e[1])}),p.startTime=Date.now(),l.send()}).then(function(){if("performance"in window&&"getEntriesByType"in window.performance){p.endTime=Date.now(),p.source="ajax";var e=window.performance.getEntriesByName(r);m.expCount=1<e.length?m.expCount+e.length-1:m.expCount;for(var n=0,t=e;n<t.length;n++){var o=t[n];m._sendClientMeasurements("0",i,o,m._extractHeader(l,a),u,c,p)}}else m._sendClientMeasurements("6",i,null,m._extractHeader(l,a),u,c,p)}).catch(function(e){d?m._sendClientMeasurements("5",i,null,"",u,c,p):m._sendClientMeasurements("4",i,null,"",u,c,p)})):(f=!1,h=new n,new Promise(function(e,n){var t=setTimeout(function(){f=!0,n(new Error("Experiment Timed Out"))},s),o=new Image;o.onload=function(){clearTimeout(t),f||e()},o.onerror=function(){clearTimeout(t),f||e()},h.startTime=Date.now(),o.src=r}).then(function(){if("performance"in window&&"getEntriesByType"in window.performance){h.endTime=Date.now(),h.source="image";var e=window.performance.getEntriesByName(r);m.expCount=1<e.length?m.expCount+e.length-1:m.expCount;for(var n=0,t=e;n<t.length;n++){var o=t[n];m._sendClientMeasurements("0",i,o,"",u,c,h)}}else m._sendClientMeasurements("3",i,null,"",u,c,h)}).catch(function(e){f?m._sendClientMeasurements("2",i,null,"",u,c,h):m._sendClientMeasurements("1",i,null,"",u,c,h)}))}(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}},e.prototype._sendClientMeasurements=function(e,n,t,o,r,i,s){var a,u,c,l,p=this;0!==i.length&&(a=function(o,r){var n=0;new Promise(function(e,n){var t=new Image;t.onload=function(){return e()},t.onerror=function(){return n()},t.src=o[0]+r}).catch(function(e){(n+=1)<o.length&&a(o[n],r)})},u="{",null!=r&&(u+='"n":"'+r+'",'),u=(u=(u=(u+=null===t?'"m":[],':'"m":'+this._extractResourceTiming(t)+",")+'"r":'+e+',"s":'+s.startTime+",")+'"e":'+s.endTime+",")+'"q":"'+s.source+'",',""!=o&&(u+='"h":'+o+","),window.YBAR&&"function"==typeof window.YBAR.getConfig&&(u=(u=(u+='"p":"'+window.YBAR.getConfig().property+'",')+'"d":"'+window.YBAR.getConfig().device+'",')+'"l":"'+window.YBAR.getConfig().locale+'",'),u+='"b":"'+n+'"}',c="",l=[],i.forEach(function(e){c+=e.replace("<BEACON>",n),l.push(e.replace("<BEACON>",n))}),"group"==this.uploadType?(c in this.pending||(this.pending[c]=[]),this.pending[c].push([u,l]),this.complete++,this.complete==this.expCount&&Object.keys(this.pending).forEach(function(e){var n,t="[";p.pending[e].forEach(function(e){t+=e[0]+",",n=e[1]}),t=t.slice(0,-1)+"]",a(n,btoa(t))})):(u="["+u+"]",a(l,btoa(u))))},e}();Cerebro.runExperiment();

}
/*
     FILE ARCHIVED ON 23:36:29 Dec 31, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:02:10 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.136
  cdx.remote: 0.141
  esindex: 0.046
  LoadShardBlock: 1016.248 (6)
  PetaboxLoader3.datanode: 233.134 (8)
  PetaboxLoader3.resolve: 494.004 (3)
  load_resource: 371.076 (2)
*/