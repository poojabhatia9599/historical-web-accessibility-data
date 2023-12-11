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

/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';(()=>{if(window.customElements){var h=window.HTMLElement,m=window.customElements.define,n=window.customElements.get,k=new Map,l=new Map,e=!1,f=!1;window.HTMLElement=function(){if(!e){var a=k.get(this.constructor);a=n.call(window.customElements,a);f=!0;return new a}e=!1};window.HTMLElement.prototype=h.prototype;window.HTMLElement.es5Shimmed=!0;Object.defineProperty(window,"customElements",{value:window.customElements,configurable:!0,writable:!0});Object.defineProperty(window.customElements,
"define",{value:(a,b)=>{const c=b.prototype,g=class extends h{constructor(){super();Object.setPrototypeOf(this,c);f||(e=!0,b.call(this));f=!1}},d=g.prototype;g.observedAttributes=b.observedAttributes;d.connectedCallback=c.connectedCallback;d.disconnectedCallback=c.disconnectedCallback;d.attributeChangedCallback=c.attributeChangedCallback;d.adoptedCallback=c.adoptedCallback;k.set(b,a);l.set(a,b);m.call(window.customElements,a,g)},configurable:!0,writable:!0});Object.defineProperty(window.customElements,
"get",{value:a=>l.get(a),configurable:!0,writable:!0});if(navigator.userAgent.match(/Version\/(10\..*|11\.0\..*)Safari/)){const a=HTMLElement.prototype.constructor;Object.defineProperty(HTMLElement.prototype,"constructor",{configurable:!0,get(){return a},set(b){Object.defineProperty(this,"constructor",{value:b,configurable:!0,writable:!0})}})}}})();
//# sourceMappingURL=fast-shim.js.sourcemap


}
/*
     FILE ARCHIVED ON 10:50:12 Aug 20, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:36:11 Dec 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.084
  exclusion.robots.policy: 0.059
  cdx.remote: 0.089
  esindex: 0.008
  LoadShardBlock: 145.951 (6)
  PetaboxLoader3.datanode: 196.285 (8)
  load_resource: 247.977 (2)
  PetaboxLoader3.resolve: 150.473 (2)
*/