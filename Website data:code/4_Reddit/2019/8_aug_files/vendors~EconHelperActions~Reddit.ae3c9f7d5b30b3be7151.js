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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~EconHelperActions~Reddit"],{"./node_modules/lodash/_LazyWrapper.js":function(o,e,s){var r=s("./node_modules/lodash/_baseCreate.js"),n=s("./node_modules/lodash/_baseLodash.js"),d=4294967295;function a(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=d,this.__views__=[]}a.prototype=r(n.prototype),a.prototype.constructor=a,o.exports=a},"./node_modules/lodash/_LodashWrapper.js":function(o,e,s){var r=s("./node_modules/lodash/_baseCreate.js"),n=s("./node_modules/lodash/_baseLodash.js");function d(o,e){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}d.prototype=r(n.prototype),d.prototype.constructor=d,o.exports=d},"./node_modules/lodash/_baseLodash.js":function(o,e){o.exports=function(){}},"./node_modules/lodash/_baseSetData.js":function(o,e,s){var r=s("./node_modules/lodash/identity.js"),n=s("./node_modules/lodash/_metaMap.js"),d=n?function(o,e){return n.set(o,e),o}:r;o.exports=d},"./node_modules/lodash/_composeArgs.js":function(o,e){var s=Math.max;o.exports=function(o,e,r,n){for(var d=-1,a=o.length,t=r.length,l=-1,_=e.length,u=s(a-t,0),i=Array(_+u),h=!n;++l<_;)i[l]=e[l];for(;++d<t;)(h||d<a)&&(i[r[d]]=o[d]);for(;u--;)i[l++]=o[d++];return i}},"./node_modules/lodash/_composeArgsRight.js":function(o,e){var s=Math.max;o.exports=function(o,e,r,n){for(var d=-1,a=o.length,t=-1,l=r.length,_=-1,u=e.length,i=s(a-l,0),h=Array(i+u),p=!n;++d<i;)h[d]=o[d];for(var c=d;++_<u;)h[c+_]=e[_];for(;++t<l;)(p||d<a)&&(h[c+r[t]]=o[d++]);return h}},"./node_modules/lodash/_countHolders.js":function(o,e){o.exports=function(o,e){for(var s=o.length,r=0;s--;)o[s]===e&&++r;return r}},"./node_modules/lodash/_createBind.js":function(o,e,s){var r=s("./node_modules/lodash/_createCtor.js"),n=s("./node_modules/lodash/_root.js"),d=1;o.exports=function(o,e,s){var a=e&d,t=r(o);return function e(){return(this&&this!==n&&this instanceof e?t:o).apply(a?s:this,arguments)}}},"./node_modules/lodash/_createCtor.js":function(o,e,s){var r=s("./node_modules/lodash/_baseCreate.js"),n=s("./node_modules/lodash/isObject.js");o.exports=function(o){return function(){var e=arguments;switch(e.length){case 0:return new o;case 1:return new o(e[0]);case 2:return new o(e[0],e[1]);case 3:return new o(e[0],e[1],e[2]);case 4:return new o(e[0],e[1],e[2],e[3]);case 5:return new o(e[0],e[1],e[2],e[3],e[4]);case 6:return new o(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new o(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var s=r(o.prototype),d=o.apply(s,e);return n(d)?d:s}}},"./node_modules/lodash/_createCurry.js":function(o,e,s){var r=s("./node_modules/lodash/_apply.js"),n=s("./node_modules/lodash/_createCtor.js"),d=s("./node_modules/lodash/_createHybrid.js"),a=s("./node_modules/lodash/_createRecurry.js"),t=s("./node_modules/lodash/_getHolder.js"),l=s("./node_modules/lodash/_replaceHolders.js"),_=s("./node_modules/lodash/_root.js");o.exports=function(o,e,s){var u=n(o);return function n(){for(var i=arguments.length,h=Array(i),p=i,c=t(n);p--;)h[p]=arguments[p];var m=i<3&&h[0]!==c&&h[i-1]!==c?[]:l(h,c);return(i-=m.length)<s?a(o,e,d,n.placeholder,void 0,h,m,void 0,void 0,s-i):r(this&&this!==_&&this instanceof n?u:o,this,h)}}},"./node_modules/lodash/_createHybrid.js":function(o,e,s){var r=s("./node_modules/lodash/_composeArgs.js"),n=s("./node_modules/lodash/_composeArgsRight.js"),d=s("./node_modules/lodash/_countHolders.js"),a=s("./node_modules/lodash/_createCtor.js"),t=s("./node_modules/lodash/_createRecurry.js"),l=s("./node_modules/lodash/_getHolder.js"),_=s("./node_modules/lodash/_reorder.js"),u=s("./node_modules/lodash/_replaceHolders.js"),i=s("./node_modules/lodash/_root.js"),h=1,p=2,c=8,m=16,f=128,j=512;o.exports=function o(e,s,v,g,y,x,w,b,W,D){var L=s&f,A=s&h,C=s&p,H=s&(c|m),M=s&j,R=C?void 0:a(e);return function h(){for(var p=arguments.length,c=Array(p),m=p;m--;)c[m]=arguments[m];if(H)var f=l(h),j=d(c,f);if(g&&(c=r(c,g,y,H)),x&&(c=n(c,x,w,H)),p-=j,H&&p<D){var O=u(c,f);return t(e,s,o,h.placeholder,v,c,O,b,W,D-p)}var S=A?v:this,z=C?S[e]:e;return p=c.length,b?c=_(c,b):M&&p>1&&c.reverse(),L&&W<p&&(c.length=W),this&&this!==i&&this instanceof h&&(z=R||a(z)),z.apply(S,c)}}},"./node_modules/lodash/_createPartial.js":function(o,e,s){var r=s("./node_modules/lodash/_apply.js"),n=s("./node_modules/lodash/_createCtor.js"),d=s("./node_modules/lodash/_root.js"),a=1;o.exports=function(o,e,s,t){var l=e&a,_=n(o);return function e(){for(var n=-1,a=arguments.length,u=-1,i=t.length,h=Array(i+a),p=this&&this!==d&&this instanceof e?_:o;++u<i;)h[u]=t[u];for(;a--;)h[u++]=arguments[++n];return r(p,l?s:this,h)}}},"./node_modules/lodash/_createRecurry.js":function(o,e,s){var r=s("./node_modules/lodash/_isLaziable.js"),n=s("./node_modules/lodash/_setData.js"),d=s("./node_modules/lodash/_setWrapToString.js"),a=1,t=2,l=4,_=8,u=32,i=64;o.exports=function(o,e,s,h,p,c,m,f,j,v){var g=e&_;e|=g?u:i,(e&=~(g?i:u))&l||(e&=~(a|t));var y=[o,e,p,g?c:void 0,g?m:void 0,g?void 0:c,g?void 0:m,f,j,v],x=s.apply(void 0,y);return r(o)&&n(x,y),x.placeholder=h,d(x,o,e)}},"./node_modules/lodash/_createWrap.js":function(o,e,s){var r=s("./node_modules/lodash/_baseSetData.js"),n=s("./node_modules/lodash/_createBind.js"),d=s("./node_modules/lodash/_createCurry.js"),a=s("./node_modules/lodash/_createHybrid.js"),t=s("./node_modules/lodash/_createPartial.js"),l=s("./node_modules/lodash/_getData.js"),_=s("./node_modules/lodash/_mergeData.js"),u=s("./node_modules/lodash/_setData.js"),i=s("./node_modules/lodash/_setWrapToString.js"),h=s("./node_modules/lodash/toInteger.js"),p="Expected a function",c=1,m=2,f=8,j=16,v=32,g=64,y=Math.max;o.exports=function(o,e,s,x,w,b,W,D){var L=e&m;if(!L&&"function"!=typeof o)throw new TypeError(p);var A=x?x.length:0;if(A||(e&=~(v|g),x=w=void 0),W=void 0===W?W:y(h(W),0),D=void 0===D?D:h(D),A-=w?w.length:0,e&g){var C=x,H=w;x=w=void 0}var M=L?void 0:l(o),R=[o,e,s,x,w,C,H,b,W,D];if(M&&_(R,M),o=R[0],e=R[1],s=R[2],x=R[3],w=R[4],!(D=R[9]=void 0===R[9]?L?0:o.length:y(R[9]-A,0))&&e&(f|j)&&(e&=~(f|j)),e&&e!=c)O=e==f||e==j?d(o,e,D):e!=v&&e!=(c|v)||w.length?a.apply(void 0,R):t(o,e,s,x);else var O=n(o,e,s);return i((M?r:u)(O,R),o,e)}},"./node_modules/lodash/_getData.js":function(o,e,s){var r=s("./node_modules/lodash/_metaMap.js"),n=s("./node_modules/lodash/noop.js"),d=r?function(o){return r.get(o)}:n;o.exports=d},"./node_modules/lodash/_getFuncName.js":function(o,e,s){var r=s("./node_modules/lodash/_realNames.js"),n=Object.prototype.hasOwnProperty;o.exports=function(o){for(var e=o.name+"",s=r[e],d=n.call(r,e)?s.length:0;d--;){var a=s[d],t=a.func;if(null==t||t==o)return a.name}return e}},"./node_modules/lodash/_getHolder.js":function(o,e){o.exports=function(o){return o.placeholder}},"./node_modules/lodash/_getWrapDetails.js":function(o,e){var s=/\{\n\/\* \[wrapped with (.+)\] \*/,r=/,? & /;o.exports=function(o){var e=o.match(s);return e?e[1].split(r):[]}},"./node_modules/lodash/_insertWrapDetails.js":function(o,e){var s=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;o.exports=function(o,e){var r=e.length;if(!r)return o;var n=r-1;return e[n]=(r>1?"& ":"")+e[n],e=e.join(r>2?", ":" "),o.replace(s,"{\n/* [wrapped with "+e+"] */\n")}},"./node_modules/lodash/_isLaziable.js":function(o,e,s){var r=s("./node_modules/lodash/_LazyWrapper.js"),n=s("./node_modules/lodash/_getData.js"),d=s("./node_modules/lodash/_getFuncName.js"),a=s("./node_modules/lodash/wrapperLodash.js");o.exports=function(o){var e=d(o),s=a[e];if("function"!=typeof s||!(e in r.prototype))return!1;if(o===s)return!0;var t=n(s);return!!t&&o===t[0]}},"./node_modules/lodash/_mergeData.js":function(o,e,s){var r=s("./node_modules/lodash/_composeArgs.js"),n=s("./node_modules/lodash/_composeArgsRight.js"),d=s("./node_modules/lodash/_replaceHolders.js"),a="__lodash_placeholder__",t=1,l=2,_=4,u=8,i=128,h=256,p=Math.min;o.exports=function(o,e){var s=o[1],c=e[1],m=s|c,f=m<(t|l|i),j=c==i&&s==u||c==i&&s==h&&o[7].length<=e[8]||c==(i|h)&&e[7].length<=e[8]&&s==u;if(!f&&!j)return o;c&t&&(o[2]=e[2],m|=s&t?0:_);var v=e[3];if(v){var g=o[3];o[3]=g?r(g,v,e[4]):v,o[4]=g?d(o[3],a):e[4]}return(v=e[5])&&(g=o[5],o[5]=g?n(g,v,e[6]):v,o[6]=g?d(o[5],a):e[6]),(v=e[7])&&(o[7]=v),c&i&&(o[8]=null==o[8]?e[8]:p(o[8],e[8])),null==o[9]&&(o[9]=e[9]),o[0]=e[0],o[1]=m,o}},"./node_modules/lodash/_metaMap.js":function(o,e,s){var r=s("./node_modules/lodash/_WeakMap.js"),n=r&&new r;o.exports=n},"./node_modules/lodash/_realNames.js":function(o,e){o.exports={}},"./node_modules/lodash/_reorder.js":function(o,e,s){var r=s("./node_modules/lodash/_copyArray.js"),n=s("./node_modules/lodash/_isIndex.js"),d=Math.min;o.exports=function(o,e){for(var s=o.length,a=d(e.length,s),t=r(o);a--;){var l=e[a];o[a]=n(l,s)?t[l]:void 0}return o}},"./node_modules/lodash/_replaceHolders.js":function(o,e){var s="__lodash_placeholder__";o.exports=function(o,e){for(var r=-1,n=o.length,d=0,a=[];++r<n;){var t=o[r];t!==e&&t!==s||(o[r]=s,a[d++]=r)}return a}},"./node_modules/lodash/_setData.js":function(o,e,s){var r=s("./node_modules/lodash/_baseSetData.js"),n=s("./node_modules/lodash/_shortOut.js")(r);o.exports=n},"./node_modules/lodash/_setWrapToString.js":function(o,e,s){var r=s("./node_modules/lodash/_getWrapDetails.js"),n=s("./node_modules/lodash/_insertWrapDetails.js"),d=s("./node_modules/lodash/_setToString.js"),a=s("./node_modules/lodash/_updateWrapDetails.js");o.exports=function(o,e,s){var t=e+"";return d(o,n(t,a(r(t),s)))}},"./node_modules/lodash/_updateWrapDetails.js":function(o,e,s){var r=s("./node_modules/lodash/_arrayEach.js"),n=s("./node_modules/lodash/_arrayIncludes.js"),d=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]];o.exports=function(o,e){return r(d,function(s){var r="_."+s[0];e&s[1]&&!n(o,r)&&o.push(r)}),o.sort()}},"./node_modules/lodash/_wrapperClone.js":function(o,e,s){var r=s("./node_modules/lodash/_LazyWrapper.js"),n=s("./node_modules/lodash/_LodashWrapper.js"),d=s("./node_modules/lodash/_copyArray.js");o.exports=function(o){if(o instanceof r)return o.clone();var e=new n(o.__wrapped__,o.__chain__);return e.__actions__=d(o.__actions__),e.__index__=o.__index__,e.__values__=o.__values__,e}},"./node_modules/lodash/curry.js":function(o,e,s){var r=s("./node_modules/lodash/_createWrap.js"),n=8;function d(o,e,s){var a=r(o,n,void 0,void 0,void 0,void 0,void 0,e=s?void 0:e);return a.placeholder=d.placeholder,a}d.placeholder={},o.exports=d},"./node_modules/lodash/wrapperLodash.js":function(o,e,s){var r=s("./node_modules/lodash/_LazyWrapper.js"),n=s("./node_modules/lodash/_LodashWrapper.js"),d=s("./node_modules/lodash/_baseLodash.js"),a=s("./node_modules/lodash/isArray.js"),t=s("./node_modules/lodash/isObjectLike.js"),l=s("./node_modules/lodash/_wrapperClone.js"),_=Object.prototype.hasOwnProperty;function u(o){if(t(o)&&!a(o)&&!(o instanceof r)){if(o instanceof n)return o;if(_.call(o,"__wrapped__"))return l(o)}return new n(o)}u.prototype=d.prototype,u.prototype.constructor=u,o.exports=u}}]);
//# sourceMappingURL=vendors~EconHelperActions~Reddit.ae3c9f7d5b30b3be7151.js.map

}
/*
     FILE ARCHIVED ON 04:07:29 Aug 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:49:25 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.109
  exclusion.robots.policy: 0.095
  cdx.remote: 0.244
  esindex: 0.012
  LoadShardBlock: 778.758 (6)
  PetaboxLoader3.datanode: 147.534 (8)
  load_resource: 211.737 (2)
  PetaboxLoader3.resolve: 167.072 (2)
*/