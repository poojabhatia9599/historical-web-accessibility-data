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

var WORK_SERVER="https://web.archive.org/web/20220101054428/https://edge-mcdn.secure.yahoo.com/ybar/exp.json",TIMEOUT=2e3,Cerebro=function(){function e(){this.uploadType="individual",this.expCount=0,this.pending={},this.complete=0}return e.runExperiment=function(){(new e)._fetchWork()},e.sendBeacon=function(){this.runExperiment()},e.prototype._extractResourceTiming=function(n){var t="",t="[";return["startTime","redirectStart","redirectEnd","fetchStart","domainLookupStart","domainLookupEnd","connectStart","secureConnectionStart","connectEnd","requestStart","responseStart","responseEnd"].forEach(function(e){t+=n[e]+","}),t=t.slice(0,-1)+"]"},e.prototype._extractHeader=function(n,e){if(0==e.length)return"{}";var t="{";return e.forEach(function(e){t+='"'+e+'":"'+n.getResponseHeader(e)+'",'}),t=t.slice(0,-1)+"}"},e.prototype._fetchWork=function(){var n=this,o=!1;new Promise(function(n,t){var r=setTimeout(function(){o=!0,t(new Error("Work Order Request Timed Out"))},TIMEOUT);fetch(WORK_SERVER).then(function(e){clearTimeout(r),o||n(e)}).catch(function(e){o||t(e)})}).then(function(e){return e.json()}).then(function(e){n._parseWork(e)}).catch(function(e){})},e.prototype._parseWork=function(e){var n=e.expCount,t=e.selection;this.uploadType=e.uploadType;var r=[],o=[];if(0!==n){if(n>=e.expList.length)o=e.expList;else if("random"===t)for(var i=0;i<n;i++)(l=Math.floor(Math.random()*(e.expList.length+1)))===e.expList.length&&(l-=1),o.push(e.expList[l]);else if("ordered"===t){(l=Math.floor(Math.random()*(e.expList.length+1)))===e.expList.length&&(l-=1);for(i=0;i<n;i++)l+i>=e.expList.length&&(l=-1*i),o.push(e.expList[l+i])}else if("individual"===t)if((l=100*Math.random())<e.runProb)for(var a=0,s=e.expList;a<s.length;a++){var u=s[a];o.push(u)}for(var c=0,p=o;c<p.length;c++)for(u=p[c],i=0;i<u.trials;i++){var l=Math.ceil(99999999999999*Math.random()).toString(36),f=u.target.replace("<RAND>",l),d=new RegExp(u.beaconRegex,"gi").exec(f),h=[],m=[];u.requestHeaders&&(h=u.requestHeaders),u.parseHeaders&&(m=u.parseHeaders),null!==d&&null!==d[1]?r.push([f,d[1],u.timeout,h,m,u.name,u.uploadEndpoints]):r.push([f,u.name,u.timeout,h,m,u.name,u.uploadEndpoints]),this.expCount++}this._sendBeacons(r)}},e.prototype._sendBeacons=function(e){for(var m=this,n=function(){this.startTime=0,this.endTime=0,this.source="default"},t=0,r=e;t<r.length;t++){var o=r[t];!function(o,i,a,r,s,u,c){var p,l,f,d,h;0<s.length||0<r.length?(l=new n,f=!1,new Promise(function(e,n){var t=setTimeout(function(){f=!0,n(new Error("Header Request Timed Out"))},a);(p=new XMLHttpRequest).open("GET",o,!0),p.onload=function(){clearTimeout(t),f||e()},p.onerror=function(){clearTimeout(t),f||e()},r.forEach(function(e){e=e.split(":");2==e.length&&p.setRequestHeader(e[0],e[1])}),l.startTime=Date.now(),p.send()}).then(function(){if("performance"in window&&"getEntriesByType"in window.performance){l.endTime=Date.now(),l.source="ajax";var e=window.performance.getEntriesByName(o);m.expCount=1<e.length?m.expCount+e.length-1:m.expCount;for(var n=0,t=e;n<t.length;n++){var r=t[n];m._sendClientMeasurements("0",i,r,m._extractHeader(p,s),u,c,l)}}else m._sendClientMeasurements("6",i,null,m._extractHeader(p,s),u,c,l)}).catch(function(e){f?m._sendClientMeasurements("5",i,null,"",u,c,l):m._sendClientMeasurements("4",i,null,"",u,c,l)})):(d=!1,h=new n,new Promise(function(e,n){var t=setTimeout(function(){d=!0,n(new Error("Experiment Timed Out"))},a),r=new Image;r.onload=function(){clearTimeout(t),d||e()},r.onerror=function(){clearTimeout(t),d||e()},h.startTime=Date.now(),r.src=o}).then(function(){if("performance"in window&&"getEntriesByType"in window.performance){h.endTime=Date.now(),h.source="image";var e=window.performance.getEntriesByName(o);m.expCount=1<e.length?m.expCount+e.length-1:m.expCount;for(var n=0,t=e;n<t.length;n++){var r=t[n];m._sendClientMeasurements("0",i,r,"",u,c,h)}}else m._sendClientMeasurements("3",i,null,"",u,c,h)}).catch(function(e){d?m._sendClientMeasurements("2",i,null,"",u,c,h):m._sendClientMeasurements("1",i,null,"",u,c,h)}))}(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}},e.prototype._sendClientMeasurements=function(e,n,t,r,o,i,a){var s,u,c,p,l=this;0!==i.length&&(s=function(r,o){var n=0;new Promise(function(e,n){var t=new Image;t.onload=function(){return e()},t.onerror=function(){return n()},t.src=r[0]+o}).catch(function(e){(n+=1)<r.length&&s(r[n],o)})},u="{",null!=o&&(u+='"n":"'+o+'",'),u+=null===t?'"m":[],':'"m":'+this._extractResourceTiming(t)+",",u+='"r":'+e+",",u+='"s":'+a.startTime+",",u+='"e":'+a.endTime+",",u+='"q":"'+a.source+'",',""!=r&&(u+='"h":'+r+","),window.YBAR&&"function"==typeof window.YBAR.getConfig&&(u+='"p":"'+window.YBAR.getConfig().property+'",',u+='"d":"'+window.YBAR.getConfig().device+'",',u+='"l":"'+window.YBAR.getConfig().locale+'",'),u+='"b":"'+n+'"}',c="",p=[],i.forEach(function(e){c+=e.replace("<BEACON>",n),p.push(e.replace("<BEACON>",n))}),"group"==this.uploadType?(c in this.pending||(this.pending[c]=[]),this.pending[c].push([u,p]),this.complete++,this.complete==this.expCount&&Object.keys(this.pending).forEach(function(e){var n,t="[";l.pending[e].forEach(function(e){t+=e[0]+",",n=e[1]}),t=t.slice(0,-1)+"]",s(n,btoa(t))})):(u="["+u+"]",s(p,btoa(u))))},e}();Cerebro.runExperiment();

}
/*
     FILE ARCHIVED ON 05:44:28 Jan 01, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:17 Jan 24, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.08
  cdx.remote: 0.127
  esindex: 0.011
  LoadShardBlock: 290.997 (6)
  PetaboxLoader3.datanode: 219.694 (8)
  PetaboxLoader3.resolve: 139.837 (3)
  load_resource: 231.982 (2)
*/