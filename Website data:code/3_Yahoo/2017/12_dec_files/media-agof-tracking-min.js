YUI.add("media-agof-tracking",function(e,t){"use strict";var n="",r="dummy",i="de.ioam.de/tx.io",s="de.ioam.de/aid.io",o=["","inst","open","clse","play","stop","fowa","bakw","recd","paus","forg","bakg","dele","refr","view","alve"],u=[],a=1,f=0,l=1,c="Leercode_nichtzuordnungsfaehig",h={onfocus:"forg",onblur:"bakg",onclose:"clse"},p=0,d=null,v=null,m={},g=0,y=0;e.namespace("Media").Agof={enableEvents:function(){var e=this,t;if(f&&(typeof m.tb=="undefined"||m.tb)&&!g){g=1;for(t in h)(function(t){var n=window[t];window[t]=function(){e.event(h[t]),typeof n=="function"&&n()}})(t)}},isDoNotTrack:function(){if(p&2?typeof m.nt=="undefined"?p&1:m.nt:p&1){if(window.navigator.msDoNotTrack&&window.navigator.msDoNotTrack=="1")return!0;if(window.navigator.doNotTrack&&(window.navigator.doNotTrack=="yes"||window.navigator.doNotTrack=="1"))return!0}return!1},loadSurvey:function(){var e=this,t=m.st+"//"+m.pt+"//"+m.cp+"//VIA_SZMNG";if(l&&!y&&m.sv!=="ke"&&(m.sv==="in"||m.sv==="mo"||m.sv==="i2")){y=1;var n=0,r=document.cookie.split(";");for(var i=0;i<r.length;i++)if(r[i].match("POPUPCHECK=.*")){var s=new Date,o=s.getTime();s.setTime(r[i].split("=")[1]),s.getTime()>=o&&(n=1);break}n==0&&m.sv==="in"&&(v=e.createScriptTag(window.location.protocol+"//qs.ioam.de/?"+(t?t:"")),v&&v.parentNode.removeChild(v)),n==0&&m.sv==="i2"&&(v&&v.parentNode.removeChild(v),v=e.createScriptTag(window.location.protocol+"//qs.ioam.de/?"+(t?t:""))),n==0&&m.sv==="mo"&&(v&&v.parentNode.removeChild(v),v=e.createScriptTag(window.location.protocol+"//mqs.ioam.de/?"+(t?t:"")))}},hash:function(e){var t=0;for(var n=0;n<e.length;++n)t+=e.charCodeAt(n),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t+=t<<15,t=Math.abs(t&t),t.toString(36)},activeXDetect:function(){var e="",t,n=["7790769C-0471-11D2-AF11-00C04FA35D02","89820200-ECBD-11CF-8B85-00AA005B4340","283807B5-2C60-11D0-A31D-00AA00B92C03","4F216970-C90C-11D1-B5C7-0000F8051515","44BBA848-CC51-11CF-AAFA-00AA00B6015C","9381D8F2-0288-11D0-9501-00AA00B911A5","4F216970-C90C-11D1-B5C7-0000F8051515","5A8D6EE0-3E18-11D0-821E-444553540000","89820200-ECBD-11CF-8B85-00AA005B4383","08B0E5C0-4FCB-11CF-AAA5-00401C608555","45EA75A0-A269-11D1-B5BF-0000F8051515","DE5AED00-A4BF-11D1-9948-00C04F98BBC9","22D6F312-B0F6-11D0-94AB-0080C74C7E95","44BBA842-CC51-11CF-AAFA-00AA00B6015B","3AF36230-A269-11D1-B5BF-0000F8051515","44BBA840-CC51-11CF-AAFA-00AA00B6015C","CC2A9BA0-3BDD-11D0-821E-444553540000","08B0E5C0-4FCB-11CF-AAA5-00401C608500","D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20"];document.body.addBehavior("#default#clientCaps");for(var r=0;r<n.length;r++)t=document.body.getComponentVersion("{"+n[r]+"}","ComponentID"),t!=null?e+=t:e+="null";return e},fingerprint:function(){var e=this,t=window.navigator,n=t.userAgent,r;n+=e.getScreen();if(t.plugins.length>0)for(r=0;r<t.plugins.length;r++)n+=t.plugins[r].filename+t.plugins[r].version+t.plugins[r].description;if(t.mimeTypes.length>0)for(r=0;r<t.mimeTypes.length;r++)n+=t.mimeTypes[r].type;return/MSIE (\d+\.\d+);/.test(t.userAgent)&&(n+=e.activeXDetect()),e.hash(n)},createScriptTag:function(e){var t=document.createElement("script");t.type="text/javascript",t.src=e;var n=document.getElementsByTagName("HEAD")[0];return n?(n.appendChild(t),t):!1},transmitData:function(e,t){var n=this,r,i;if(e.split("/")[2].slice(e.split("/")[2].length-8)==".ioam.de")switch(t){case 1:d&&d.parentNode.removeChild(d),d=n.createScriptTag(e+"&mo=1"),d||((new Image).src=e+"&mo=0");break;case 2:(new Image).src=e+"&mo=0";break;case 3:i=document.getElementById("iamsendbox"),i&&document.body.removeChild(i),i=document.createElement("iframe"),i.id="iamsendbox",r=i.style,r.position="absolute",r.left=r.top="-999px",i.src=e+"&mo=1",document.body.appendChild(i);break;case 0:default:(new Image).src=e+"&mo=0"}},getScreen:function(){return screen.width+"x"+screen.height+"x"+screen.colorDepth},arrayContains:function(e,t){var n;for(n=0;n<e.length;n++)if(e[n]==t)return!0;return!1},transformVar:function(e){return e||(e=""),e=e.replace(/[?#].*/g,""),e=e.replace(/[^a-zA-Z0-9,_\/-]+/g,"."),e.length>255&&(e=e.substr(0,254)+"+"),e},getRefHost:function(){var e=document.referrer.split("/");return e.length>=3?e[2]:""},buildResult:function(e){var t=this,n;m={};for(n in e)e.hasOwnProperty(n)&&(m[n]=e[n]);m.hasOwnProperty("fp")&&(m.fp=m.fp!=""?m.fp:c,m.fp=t.transformVar(m.fp),m.pt="FP"),m.hasOwnProperty("np")&&(m.np=m.np!=""?m.np:c,m.np=t.transformVar(m.np),m.pt="NP"),m.hasOwnProperty("xp")&&(m.xp=m.xp!=""?m.xp:c,m.xp=t.transformVar(m.xp),m.pt="XP"),m.hasOwnProperty("cp")&&(m.cp=m.cp!=""?m.cp:c,m.cp=t.transformVar(m.cp),m.pt="CP"),m.pt||(m.cp=c,m.pt="CP",m.er="N13"),m.rf=t.getRefHost(),m.r2=document.referrer,m.ur=document.location.host,m.xy=t.getScreen(),m.cb="8002",m.vr="304",m.id=t.fingerprint(),m.st=m.st?m.st:r},event:function(e,t){var n=this,r="",t=t||2,f;e=e||"";if(!n.isDoNotTrack()&&(!a||a&&n.arrayContains(o,e))){m.lt=(new Date).getTime(),m.ev=e;var l=window.location.protocol.slice(0,4)==="http"?window.location.protocol:"https:";!n.arrayContains(u,m.st)&&(/iPhone/.test(window.navigator.userAgent)||/iPad/.test(window.navigator.userAgent))&&/OS\s[3-6]/.test(window.navigator.userAgent)&&/Safari/.test(window.navigator.userAgent)&&!/Chrome/.test(window.navigator.userAgent)&&(i=s,t=3,m.u2=document.URL);for(f in m)m.hasOwnProperty(f)&&f!="cs"&&f!="url"&&(r=r+encodeURIComponent(f).slice(0,8)+"="+encodeURIComponent(m[f]).slice(0,2048)+"&");r=r.slice(0,4096),m.cs=n.hash(r),m.url=l+"//"+i+"?"+r+"cs="+m.cs,n.transmitData(m.url,t)}},forwardToOldSZM:function(){var e=this;if(m.mg==="yes"&&!window.IVW&&!document.IVW){var t=window.location.protocol.slice(0,4)==="http"?window.location.protocol:"https:",n=m.co?m.co+"_SENT_VIA_MIGRATION_TAG":"SENT_VIA_MIGRATION_TAG",r=m.oc?m.oc:m.cp?m.cp==c?"":m.cp:"",i=m.pt!==null?m.pt:"CP";(new Image).src=t+"//"+m.st+".ivwbox.de/cgi-bin/ivw/"+i.toUpperCase()+"/"+r+";"+n+"?r="+escape(document.referrer)+"&d="+Math.random()*1e5}},beacon:function(e,t){var n=this,r=t||2;n.buildResult
(e),m.sv&&(m.sv=m.sv=="in"&&r==1?"i2":m.sv),n.enableEvents(),n.loadSurvey(),n.forwardToOldSZM(),n.event(m.ev,r)}}},"@VERSION@");
