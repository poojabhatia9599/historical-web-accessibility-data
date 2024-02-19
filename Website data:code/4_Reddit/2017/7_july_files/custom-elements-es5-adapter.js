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

(function () {
'use strict';

(()=>{'use strict';if(!window.customElements)return;const a=window.HTMLElement,b=window.customElements.define,c=window.customElements.get,d=new Map,e=new Map;let f=!1,g=!1;window.HTMLElement=function(){if(!f){const j=d.get(this.constructor),k=c.call(window.customElements,j);g=!0;const l=new k;return l}f=!1;},window.HTMLElement.prototype=a.prototype;Object.defineProperty(window,'customElements',{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'define',{value:(j,k)=>{const l=k.prototype,m=class extends a{constructor(){super(),Object.setPrototypeOf(this,l),g||(f=!0,k.call(this)),g=!1;}},n=m.prototype;m.observedAttributes=k.observedAttributes,n.connectedCallback=l.connectedCallback,n.disconnectedCallback=l.disconnectedCallback,n.attributeChangedCallback=l.attributeChangedCallback,n.adoptedCallback=l.adoptedCallback,d.set(k,j),e.set(j,k),b.call(window.customElements,j,m);},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,'get',{value:(j)=>e.get(j),configurable:!0,writable:!0});})();

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

}());


}
/*
     FILE ARCHIVED ON 00:05:22 Jul 01, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:24:30 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.128
  exclusion.robots.policy: 0.113
  cdx.remote: 0.127
  esindex: 0.013
  LoadShardBlock: 254.757 (6)
  PetaboxLoader3.datanode: 324.544 (8)
  load_resource: 311.867 (2)
  PetaboxLoader3.resolve: 163.492 (2)
*/