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

YUI.add("media-agof-tracking",function(e,t){"use strict";var n="de.ioam.de/tx.io",o=["","inst","open","clse","play","stop","fowa","bakw","recd","paus","forg","bakg","dele","refr","view","alve"],r=[],i="Leercode_nichtzuordnungsfaehig",a=null,s=null,c={},p=0;e.namespace("Media").Agof={enableEvents:function(){},isDoNotTrack:function(){return!1},loadSurvey:function(){var e,t,n,o,r,i=this,a=c.st+"//"+c.pt+"//"+c.cp+"//web.archive.org/web/20190630233439/https://via_SZMNG";if(!p&&"ke"!==c.sv&&("in"===c.sv||"mo"===c.sv||"i2"===c.sv)){for(p=1,e=0,t=document.cookie.split(";"),n=0;n<t.length;n++)if(t[n].match("POPUPCHECK=.*")){r=(o=new Date).getTime(),o.setTime(t[n].split("=")[1]),o.getTime()>=r&&(e=1);break}0==e&&"in"===c.sv&&(s=i.createScriptTag(window.location.protocol+"//web.archive.org/web/20190630233439/https://qs.ioam.de/?"+(a||"")))&&s.parentNode.removeChild(s),0==e&&"i2"===c.sv&&(s&&s.parentNode.removeChild(s),s=i.createScriptTag(window.location.protocol+"//web.archive.org/web/20190630233439/https://qs.ioam.de/?"+(a||""))),0==e&&"mo"===c.sv&&(s&&s.parentNode.removeChild(s),s=i.createScriptTag(window.location.protocol+"//web.archive.org/web/20190630233439/https://mqs.ioam.de/?"+(a||"")))}},hash:function(e){var t,n=0;for(t=0;t<e.length;++t)n+=e.charCodeAt(t),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n+=n<<15,(n=Math.abs(n&n)).toString(36)},activeXDetect:function(){var e,t,n="",o=["7790769C-0471-11D2-AF11-00C04FA35D02","89820200-ECBD-11CF-8B85-00AA005B4340","283807B5-2C60-11D0-A31D-00AA00B92C03","4F216970-C90C-11D1-B5C7-0000F8051515","44BBA848-CC51-11CF-AAFA-00AA00B6015C","9381D8F2-0288-11D0-9501-00AA00B911A5","4F216970-C90C-11D1-B5C7-0000F8051515","5A8D6EE0-3E18-11D0-821E-444553540000","89820200-ECBD-11CF-8B85-00AA005B4383","08B0E5C0-4FCB-11CF-AAA5-00401C608555","45EA75A0-A269-11D1-B5BF-0000F8051515","DE5AED00-A4BF-11D1-9948-00C04F98BBC9","22D6F312-B0F6-11D0-94AB-0080C74C7E95","44BBA842-CC51-11CF-AAFA-00AA00B6015B","3AF36230-A269-11D1-B5BF-0000F8051515","44BBA840-CC51-11CF-AAFA-00AA00B6015C","CC2A9BA0-3BDD-11D0-821E-444553540000","08B0E5C0-4FCB-11CF-AAA5-00401C608500","D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20"];for(document.body.addBehavior("#default#clientCaps"),t=0;t<o.length;t++)n+=null!=(e=document.body.getComponentVersion("{"+o[t]+"}","ComponentID"))?e:"null";return n},fingerprint:function(){var e,t=this,n=window.navigator,o=n.userAgent;if(o+=t.getScreen(),n.plugins.length>0)for(e=0;e<n.plugins.length;e++)o+=n.plugins[e].filename+n.plugins[e].version+n.plugins[e].description;if(n.mimeTypes.length>0)for(e=0;e<n.mimeTypes.length;e++)o+=n.mimeTypes[e].type;return/MSIE (\d+\.\d+);/.test(n.userAgent)&&(o+=t.activeXDetect()),t.hash(o)},createScriptTag:function(e){var t,n=document.createElement("script");return n.type="text/javascript",n.src=e,!!(t=document.getElementsByTagName("HEAD")[0])&&(t.appendChild(n),n)},transmitData:function(e,t){var n,o;if(".ioam.de"==e.split("/")[2].slice(e.split("/")[2].length-8))switch(t){case 1:a&&a.parentNode.removeChild(a),(a=this.createScriptTag(e+"&mo=1"))||((new Image).src=e+"&mo=0");break;case 2:(new Image).src=e+"&mo=0";break;case 3:(o=document.getElementById("iamsendbox"))&&document.body.removeChild(o),(o=document.createElement("iframe")).id="iamsendbox",(n=o.style).position="absolute",n.left=n.top="-999px",o.src=e+"&mo=1",document.body.appendChild(o);break;case 0:default:(new Image).src=e+"&mo=0"}},getScreen:function(){return screen.width+"x"+screen.height+"x"+screen.colorDepth},arrayContains:function(e,t){var n;for(n=0;n<e.length;n++)if(e[n]==t)return!0;return!1},transformVar:function(e){return e||(e=""),(e=(e=e.replace(/[?#].*/g,"")).replace(/[^a-zA-Z0-9,_\/-]+/g,".")).length>255&&(e=e.substr(0,254)+"+"),e},getRefHost:function(){var e=document.referrer.split("/");return e.length>=3?e[2]:""},buildResult:function(e){var t,n=this;for(t in c={},e)e.hasOwnProperty(t)&&(c[t]=e[t]);c.hasOwnProperty("fp")&&(c.fp=""!=c.fp?c.fp:i,c.fp=n.transformVar(c.fp),c.pt="FP"),c.hasOwnProperty("np")&&(c.np=""!=c.np?c.np:i,c.np=n.transformVar(c.np),c.pt="NP"),c.hasOwnProperty("xp")&&(c.xp=""!=c.xp?c.xp:i,c.xp=n.transformVar(c.xp),c.pt="XP"),c.hasOwnProperty("cp")&&(c.cp=""!=c.cp?c.cp:i,c.cp=n.transformVar(c.cp),c.pt="CP"),c.pt||(c.cp=i,c.pt="CP",c.er="N13"),c.rf=n.getRefHost(),c.r2=document.referrer,c.ur=document.location.host,c.xy=n.getScreen(),c.cb="8002",c.vr="304",c.id=n.fingerprint(),c.st=c.st?c.st:"dummy"},event:function(e,t){var i,a,s=this,p="";if(t=t||2,e=e||"",!s.isDoNotTrack()&&s.arrayContains(o,e)){for(i in c.lt=(new Date).getTime(),c.ev=e,a="http"===window.location.protocol.slice(0,4)?window.location.protocol:"https:",!s.arrayContains(r,c.st)&&(/iPhone/.test(window.navigator.userAgent)||/iPad/.test(window.navigator.userAgent))&&/OS\s[3-6]/.test(window.navigator.userAgent)&&/Safari/.test(window.navigator.userAgent)&&!/Chrome/.test(window.navigator.userAgent)&&(n="de.ioam.de/aid.io",t=3,c.u2=document.URL),c)c.hasOwnProperty(i)&&"cs"!=i&&"url"!=i&&(p=p+encodeURIComponent(i).slice(0,8)+"="+encodeURIComponent(c[i]).slice(0,2048)+"&");p=p.slice(0,4096),c.cs=s.hash(p),c.url=a+"//"+n+"?"+p+"cs="+c.cs,s.transmitData(c.url,t)}},forwardToOldSZM:function(){var e,t,n,o;"yes"!==c.mg||window.IVW||document.IVW||(e="http"===window.location.protocol.slice(0,4)?window.location.protocol:"https:",t=c.co?c.co+"_SENT_VIA_MIGRATION_TAG":"SENT_VIA_MIGRATION_TAG",n=c.oc?c.oc:c.cp?c.cp==i?"":c.cp:"",o=null!==c.pt?c.pt:"CP",(new Image).src=e+"//"+c.st+".ivwbox.de/cgi-bin/ivw/"+o.toUpperCase()+"/"+n+";"+t+"?r="+escape(document.referrer)+"&d="+1e5*Math.random())},beacon:function(e,t){var n=this,o=t||2;n.buildResult(e),c.sv&&(c.sv="in"==c.sv&&1==o?"i2":c.sv),n.enableEvents(),n.loadSurvey(),n.forwardToOldSZM(),n.event(c.ev,o)}}},"@VERSION@");

}
/*
     FILE ARCHIVED ON 23:34:39 Jun 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:31:36 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 273.318
  exclusion.robots: 0.064
  exclusion.robots.policy: 0.056
  cdx.remote: 0.051
  esindex: 0.01
  LoadShardBlock: 118.301 (3)
  PetaboxLoader3.datanode: 91.751 (4)
  PetaboxLoader3.resolve: 75.481 (2)
  load_resource: 56.273
*/