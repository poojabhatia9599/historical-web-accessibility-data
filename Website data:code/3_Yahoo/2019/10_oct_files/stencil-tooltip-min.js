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

YUI.add("stencil-tooltip",function(e,t){"use strict";function _(e){this.constructor.superclass.constructor.call(this,e)}var n=null,r=!0,i=!1,s="D-n",o="V-h",u="Tooltip",a="TooltipContent",f=e.UA.ie&&e.UA.ie<7?["javascript",":false"].join(""):"about:blank",l={"default":{id:n,position:"t",validPositions:"tfr tr t tl tfl rfb rb r rt rft bfl bl b br bfr lft lt l lb lfb",content:"",classes:"FancyBox Arrow Pos-a Lh-14 Z-5 Px-10 Mt-10",role:"alert",width:"150px",maxWidth:n,minWidth:n,template:"<div tabindex='-1' class='{classes}' role='{role}'><iframe src='"+f+"' aria-hidden='true' tabindex='-1' frameborder='0' class='IframeTooltip'></iframe></div>",contentClasses:"Pos-r M-0",container:n,parent:document.body,autohide:r,arrowHeight:8,arrowWidth:14,mouseover:i,noPosition:i,align:n,alignNode:n,focusNode:n,nofocus:i,scrollIntoView:i}},c="px",h="id",p="top",d="left",v="right",m="tooltip-content-id",g,y,b,w,E,S,x,T,N,C,k,L,A,O,M={tl:"South SouthWest",tfl:"South SouthFarWest",tc:"South",tr:"South SouthEast",tfr:"South SouthFarEast",rt:"West WestNorth",rft:"West WestFarNorth",rc:"West",rb:"West WestSouth",rfb:"West WestFarSouth",br:"North NorthEast",bfr:"North NorthFarEast",bc:"North",bl:"North NorthWest",bfl:"North NorthFarWest",lb:"East EastSouth",lfb:"East EastFarSouth",lc:"East",lt:"East EastNorth",lft:"East EastFarNorth"};g=function(t,n){var r,i,o=e.Node(document.createElement("div"));return o.setAttribute("className","js-Tooltip-Wrapper Pos-r"),r=e.Node.create(e.Lang.sub(n.template,n)).addClass(s).addClass(u),i=r.get(h),i||(i=e.stamp(r),r.set(h,i)),o.append(r),t.get("parentNode")?t.replace(o):e.one(n.parent).prepend(o),r.append(t),t.addClass(a),r},y=function(t,n){var r,i,s,o,u=t.get(h);return u||(u=e.stamp(t),t.set(h,u)),r=n.id||t.getData(m),r&&(s=e.one("#"+r)),s?(o=s.get("parentNode"),o.hasClass("Tooltip")?i=o:i=g(s,n)):(s=e.one(document.createElement("div")),r=r||e.stamp(s),s.set(h,r),i=g(s,n)),t.setData(m,r),i},b=function(t,n,r){var i={},s=r.one("."+a),o=s.get(h),u=t.get(h);return n.mouseover&&!r.hasAttribute("data-tooltip")&&(r.setAttribute("data-trigger","mouseenter mouseleave").setAttribute("data-tooltip",'{"target":"#'+u+'","mouseenter":{"show":{"id":"'+o+'","noPosition":true,"nofocus":'+n.nofocus+'}},"mouseleave":{"hide":{"id":"'+o+'","noPosition":true}}}').setAttribute("data-plugin","tooltip"),e.Stencil.initAll(r)),n.maxWidth&&(i.maxWidth=n.maxWidth),n.minWidth&&(i.minWidth=n.minWidth),n.width&&(i.width=n.width),s.setStyles(i).setAttribute("className",n.contentClasses+" "+a),r},w=function(t,n,i){var s;return n||(n={}),s=n.type||"default",i&&i.type&&(i.type.indexOf("mouse")===0||i.type.indexOf("pointer")===0)&&(n.nofocus=r),e.merge(l[s],n)},S=function(t,r,o){var u,a;o||(o=y(t,r)),o.getData("beenShown")||(b(t,r,o),this.processSources(o),o.setData("beenShown",1)),!r.noContentUpdate&&r.content&&this.setContent(o,r.content),r.noPosition?o.removeClass(s):this.position(t,o,r),r.scrollIntoView&&o.scrollIntoView(),r.nofocus===i&&(r.autohide&&(u=e.bind(E,this,n,n,o)),a=r.focusNode?e.one(r.focusNode):o,this.focus(o,a,u)),o.one(".TooltipContent").fire("tooltip:show")},E=function(e,t,n){n||(n=y(e,t)),this.releaseFocus(n),n.addClass(s),n.one(".TooltipContent").fire("tooltip:hide")},x=function(e,t){var n=0;switch(e){case"l":n=t?.75:.25;break;case"t":n=.25;break;case"r":n=t?.25:.75;break;case"b":n=.75;break;case"fl":n=t?1:0;break;case"ft":n=0;break;case"fr":n=t?0:1;break;case"fb":n=1;break;default:n=.5}return n},T=function(e,t,n){var r=0;switch(e){case"fl":case"fr":case"ft":case"fb":r=(2+t/2)*(e==="fr"||e==="fb"?-1:1),n&&(e==="fr"||e==="fl")&&(r*=-1)}return r},C=function(e,t,n,r,i){var s=0,o=0;return n==="t"||n==="b"?(s=-x(r,i)*t.w,o=n==="t"?-t.h:e.h):(s=n==="l"?-t.w:e.w,o=e.h/2-x(r,i)*t.h),{x:e.x+s,y:e.y+o,w:t.w,h:t.h}},N=function(e,t){return e.left<=t.x&&e.right>=t.x+t.w&&e.top<=t.y&&e.bottom>=t.y+t.h},A=function(e){return e.substr(1)||"c"},O=function(e){return e.charAt(0)},L=function(t,n,r,i){var s=i.validPositions.split(" "),o=e.Array.indexOf(s,i.box+i.arrow),u,a,f=!1,l=!1,c,h,p;i.arrow==="c"&&o<0&&(o=e.Array.indexOf(s,i.box)),a=o;while(!f&&!l)u=a,h=O(s[u]),p=A(s[u]),c=C(t,r,h,p,i.rtl),f=N(n,c),a+=1,a===s.length&&(a=0),a===o&&(l=!0);return f&&(i.box=h,i.arrow=p),{styles:i}},k=function(t,n,r,i){var s={x:n.getX(),y:n.getY(),w:n.get("offsetWidth"),h:n.get("offsetHeight")},o,u={x:0,w:r.get("offsetWidth"),h:r.get("offsetHeight")};return t?o={right:t.getX(),left:t.getX()+t.get("offsetWidth"),height:t.get("offsetHeight"),top:t.getY()}:o=e.DOM.viewportRegion(),{container:o,pointAtNode:s,tooltip:u,positions:L(s,o,u,i)}},e.extend(_,e.Stencil.BasePlugin,{setContent:function(t,n){e.Stencil.getNodeList(t).each(function(t){var r=t.one(".TooltipContent");typeof n=="string"?r.set("innerHTML",n):(r.set("innerHTML",""),r.appendChild(e.one(n)))},this)},position:function(t,n,r){var i=n.get("parentNode"),s=i.getStyle("direction")==="rtl",a=r.position,f=O(a),l,h=A(a),m=e.UA.ie&&e.UA.ie<8?0:r.arrowHeight,g=r.arrowWidth,y=r.align,b=r.alignNode,w=r.classes,E=r.container,S={},N=0,C=0,L=0,_=0,D,P,H,B;b&&(b=e.one(b)),E&&(E=e.one(E)),w=w+" "+o+" "+u,n.setAttribute("className",w),l=k(E,t,n,{arrow:h,box:f,validPositions:r.validPositions,rtl:s}),f=l.positions.styles.box,h=l.positions.styles.arrow,a=f+h,w+=" "+M[a],n.setAttribute("className",w),_=i.getY(),L=i.getX(),D=parseInt(n.getComputedStyle("marginTop"),10),P=t.getX()-L,H=t.getY()-_,N=x(h,s),C=T(h,g,s);switch(f){case"b":case"t":S[d]=P-l.tooltip.w*N-C+l.pointAtNode.w/2+c,f==="t"?S[p]=H-l.tooltip.h-m-D+c:S[p]=H+l.pointAtNode.h+m-D+c;break;case"l":case"r":B=s?v:d,f==="r"?S[B]=P+l.pointAtNode.w+m+c:S[B]=P-l.tooltip.w-m+c,b&&y==="t"?S[p]=b.getY()-_-D-C+c:S[p]=H+l.pointAtNode.h/2-D-l.tooltip.h*N-C+c}n.setStyles(S),n.removeClass(o)},show:function(e,t,n){var r=this._node,i;i=w(r,t,n),e.each(function(e){S.call(this,e,i)},this)},hide:function(e,t,n){var r=this._node,i;i=w(r,t,n),e.each(function(e){E.call(this,e,i)},this)},toggle:function(e,t,n){var r=this._node,i,o;o=w(r,t,n),e.each(function(
e){i=y(e,o),i.hasClass(s)?S.call(this,e,o,i):E.call(this,e,o,i)},this)}},{NS:"StencilTooltip"}),e.Stencil.registerPlugin(_,"Tooltip")},"@VERSION@",{requires:["stencil-base","yui-base","dom-base","dom-screen","node-base","node-pluginhost","node-style","stencil-source"]});


}
/*
     FILE ARCHIVED ON 21:59:46 Sep 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:31:36 Dec 13, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 204.309
  exclusion.robots: 0.069
  exclusion.robots.policy: 0.06
  cdx.remote: 0.054
  esindex: 0.009
  LoadShardBlock: 42.382 (3)
  PetaboxLoader3.datanode: 51.111 (4)
  load_resource: 85.463
  PetaboxLoader3.resolve: 70.355
*/