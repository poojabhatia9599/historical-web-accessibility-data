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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Governance~Reddit"],{"./node_modules/@r/frames/compiled.js":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var r=arguments,t={targetOrigin:"*"},o=/\..+$/;function s(e){return new RegExp("\\.(?:"+e.join("|")+")$")}function i(e){return new RegExp("^http(s)?:\\/\\/"+e.join("|")+"$","i")}var u=[".*"],a=i(u),l=[".postMessage"],c=s(l),f={},d=!1;function h(n,r,t){e.addEventListener?e.addEventListener(n,r,t):e.attachEvent&&e.attachEvent("on"+n,r)}function p(n,r){e.removeEventListener?e.removeEventListener(n,r):e.detachEvent&&e.detachEvent("on"+n,r)}var m=n.postMessage=function(e,n,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};o.test(n)||(n+=".postMessage");var i=s;Object.keys(t).forEach(function(e){i[e]=t[e]}),e.postMessage(JSON.stringify({type:n,data:r,defaultedOptions:i}),i.targetOrigin)},g=n.receiveMessage=function(e,n,r,t){"string"==typeof e&&(t=r,r=n,n=e,e=null),t=t||void 0;var o=function(n){for(var o=arguments.length,s=Array(o>1?o-1:0),i=1;i<o;i++)s[i-1]=arguments[i];e&&e!==n.source&&e.contentWindow!==n.source||r.apply(t,[n].concat(s))};return h(n,o),{off:function(){p(n,o)}}},_=(n.receiveMessageOnce=function(e,n,t,o){var s=g(e,n,function(){t&&t.apply(void 0,r),s.off()},o);return s},n.removePostMessageOrigin=function(e){var n=u.indexOf(e);-1!==n&&(u.splice(n,1),a=i(u))});n.addPostMessageOrigin=function(e){!function(e){return/\*/.test(e)}(e)?-1===u.indexOf(e)&&(_(".*"),u.push(e),a=i(u)):u=[".*"]};function v(n){if(n.origin===e.location.origin||a.test(n.origin)||"null"===n.origin){var r={};try{r=JSON.parse(n.data)}catch(n){}var t=r.type;if(c.test(t)){var o=t.split(".",2)[1];if(f[o])f[o].targets.forEach(function(e){return m(e,t,r.data,r.options)});var s=new CustomEvent(t,{detail:r.data});s.source=n.source,e.dispatchEvent(s)}}}var j=n.listen=function(e){-1===l.indexOf(e)&&(l.push(e),c=s(l)),d||(h("message",v),d=!0)};n.stopListening=function(e){var n=l.indexOf(e);-1!==n&&(l.splice(n,1),l.length?c=s(l):(p("message",v),d=!1))},n.proxy=function(e,n){j(e),Array.isArray(n)||(n=[n]);var r=f[e];r?r.targets=[].concat(r.targets,n):r={targets:n},f[e]=r}}).call(this,r("./node_modules/webpack/buildin/global.js"))},"./node_modules/bignumber.js/bignumber.js":function(e,n,r){var t;!function(o){"use strict";var s,i=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,u=Math.ceil,a=Math.floor,l="[BigNumber Error] ",c=l+"Number primitive has more than 15 significant digits: ",f=1e14,d=14,h=9007199254740991,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],m=1e7,g=1e9;function _(e){var n=0|e;return e>0||e===n?n:n-1}function v(e){for(var n,r,t=1,o=e.length,s=e[0]+"";t<o;){for(n=e[t++]+"",r=d-n.length;r--;n="0"+n);s+=n}for(o=s.length;48===s.charCodeAt(--o););return s.slice(0,o+1||1)}function j(e,n){var r,t,o=e.c,s=n.c,i=e.s,u=n.s,a=e.e,l=n.e;if(!i||!u)return null;if(r=o&&!o[0],t=s&&!s[0],r||t)return r?t?0:-u:i;if(i!=u)return i;if(r=i<0,t=a==l,!o||!s)return t?0:!o^r?1:-1;if(!t)return a>l^r?1:-1;for(u=(a=o.length)<(l=s.length)?a:l,i=0;i<u;i++)if(o[i]!=s[i])return o[i]>s[i]^r?1:-1;return a==l?0:a>l^r?1:-1}function y(e,n,r,t){if(e<n||e>r||e!==(e<0?u(e):a(e)))throw Error(l+(t||"Argument")+("number"==typeof e?e<n||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+e)}function w(e){return"[object Array]"==Object.prototype.toString.call(e)}function b(e){var n=e.c.length-1;return _(e.e/d)==n&&e.c[n]%2!=0}function O(e,n){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(n<0?"e":"e+")+n}function A(e,n,r){var t,o;if(n<0){for(o=r+".";++n;o+=r);e=o+e}else if(++n>(t=e.length)){for(o=r,n-=t;--n;o+=r);e+=o}else n<t&&(e=e.slice(0,n)+"."+e.slice(n));return e}(s=function e(n){var r,t,o,s,E,x,N,S,R,C=G.prototype={constructor:G,toString:null,valueOf:null},L=new G(1),I=20,M=4,U=-7,P=21,T=-1e7,D=1e7,F=!1,k=1,B=0,q={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0},$="0123456789abcdefghijklmnopqrstuvwxyz";function G(e,n){var r,s,u,l,f,p,m,g,_=this;if(!(_ instanceof G))return new G(e,n);if(null==n){if(e instanceof G)return _.s=e.s,_.e=e.e,void(_.c=(e=e.c)?e.slice():e);if((p="number"==typeof e)&&0*e==0){if(_.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,f=e;f>=10;f/=10,l++);return _.e=l,void(_.c=[e])}g=e+""}else{if(!i.test(g=e+""))return o(_,g,p);_.s=45==g.charCodeAt(0)?(g=g.slice(1),-1):1}(l=g.indexOf("."))>-1&&(g=g.replace(".","")),(f=g.search(/e/i))>0?(l<0&&(l=f),l+=+g.slice(f+1),g=g.substring(0,f)):l<0&&(l=g.length)}else{if(y(n,2,$.length,"Base"),g=e+"",10==n)return W(_=new G(e instanceof G?e:g),I+_.e+1,M);if(p="number"==typeof e){if(0*e!=0)return o(_,g,p,n);if(_.s=1/e<0?(g=g.slice(1),-1):1,G.DEBUG&&g.replace(/^0\.0*|\./,"").length>15)throw Error(c+e);p=!1}else _.s=45===g.charCodeAt(0)?(g=g.slice(1),-1):1;for(r=$.slice(0,n),l=f=0,m=g.length;f<m;f++)if(r.indexOf(s=g.charAt(f))<0){if("."==s){if(f>l){l=m;continue}}else if(!u&&(g==g.toUpperCase()&&(g=g.toLowerCase())||g==g.toLowerCase()&&(g=g.toUpperCase()))){u=!0,f=-1,l=0;continue}return o(_,e+"",p,n)}(l=(g=t(g,n,10,_.s)).indexOf("."))>-1?g=g.replace(".",""):l=g.length}for(f=0;48===g.charCodeAt(f);f++);for(m=g.length;48===g.charCodeAt(--m););if(g=g.slice(f,++m)){if(m-=f,p&&G.DEBUG&&m>15&&(e>h||e!==a(e)))throw Error(c+_.s*e);if((l=l-f-1)>D)_.c=_.e=null;else if(l<T)_.c=[_.e=0];else{if(_.e=l,_.c=[],f=(l+1)%d,l<0&&(f+=d),f<m){for(f&&_.c.push(+g.slice(0,f)),m-=d;f<m;)_.c.push(+g.slice(f,f+=d));g=g.slice(f),f=d-g.length}else f-=m;for(;f--;g+="0");_.c.push(+g)}}else _.c=[_.e=0]}function z(e,n,r,t){var o,s,i,u,a;if(null==r?r=M:y(r,0,8),!e.c)return e.toString();if(o=e.c[0],i=e.e,null==n)a=v(e.c),a=1==t||2==t&&i<=U?O(a,i):A(a,i,"0");else if(s=(e=W(new G(e),n,r)).e,u=(a=v(e.c)).length,1==t||2==t&&(n<=s||s<=U)){for(;u<n;a+="0",u++);a=O(a,s)}else if(n-=i,a=A(a,s,"0"),s+1>u){if(--n>0)for(a+=".";n--;a+="0");}else if((n+=s-u)>0)for(s+1==u&&(a+=".");n--;a+="0");return e.s<0&&o?"-"+a:a}function H(e,n){var r,t,o=0;for(w(e[0])&&(e=e[0]),r=new G(e[0]);++o<e.length;){if(!(t=new G(e[o])).s){r=t;break}n.call(r,t)&&(r=t)}return r}function V(e,n,r){for(var t=1,o=n.length;!n[--o];n.pop());for(o=n[0];o>=10;o/=10,t++);return(r=t+r*d-1)>D?e.c=e.e=null:r<T?e.c=[e.e=0]:(e.e=r,e.c=n),e}function W(e,n,r,t){var o,s,i,l,c,h,m,g=e.c,_=p;if(g){e:{for(o=1,l=g[0];l>=10;l/=10,o++);if((s=n-o)<0)s+=d,i=n,m=(c=g[h=0])/_[o-i-1]%10|0;else if((h=u((s+1)/d))>=g.length){if(!t)break e;for(;g.length<=h;g.push(0));c=m=0,o=1,i=(s%=d)-d+1}else{for(c=l=g[h],o=1;l>=10;l/=10,o++);m=(i=(s%=d)-d+o)<0?0:c/_[o-i-1]%10|0}if(t=t||n<0||null!=g[h+1]||(i<0?c:c%_[o-i-1]),t=r<4?(m||t)&&(0==r||r==(e.s<0?3:2)):m>5||5==m&&(4==r||t||6==r&&(s>0?i>0?c/_[o-i]:0:g[h-1])%10&1||r==(e.s<0?8:7)),n<1||!g[0])return g.length=0,t?(n-=e.e+1,g[0]=_[(d-n%d)%d],e.e=-n||0):g[0]=e.e=0,e;if(0==s?(g.length=h,l=1,h--):(g.length=h+1,l=_[d-s],g[h]=i>0?a(c/_[o-i]%_[i])*l:0),t)for(;;){if(0==h){for(s=1,i=g[0];i>=10;i/=10,s++);for(i=g[0]+=l,l=1;i>=10;i/=10,l++);s!=l&&(e.e++,g[0]==f&&(g[0]=1));break}if(g[h]+=l,g[h]!=f)break;g[h--]=0,l=1}for(s=g.length;0===g[--s];g.pop());}e.e>D?e.c=e.e=null:e.e<T&&(e.c=[e.e=0])}return e}return G.clone=e,G.ROUND_UP=0,G.ROUND_DOWN=1,G.ROUND_CEIL=2,G.ROUND_FLOOR=3,G.ROUND_HALF_UP=4,G.ROUND_HALF_DOWN=5,G.ROUND_HALF_EVEN=6,G.ROUND_HALF_CEIL=7,G.ROUND_HALF_FLOOR=8,G.EUCLID=9,G.config=G.set=function(e){var n,r;if(null!=e){if("object"!=typeof e)throw Error(l+"Object expected: "+e);if(e.hasOwnProperty(n="DECIMAL_PLACES")&&(y(r=e[n],0,g,n),I=r),e.hasOwnProperty(n="ROUNDING_MODE")&&(y(r=e[n],0,8,n),M=r),e.hasOwnProperty(n="EXPONENTIAL_AT")&&(w(r=e[n])?(y(r[0],-g,0,n),y(r[1],0,g,n),U=r[0],P=r[1]):(y(r,-g,g,n),U=-(P=r<0?-r:r))),e.hasOwnProperty(n="RANGE"))if(w(r=e[n]))y(r[0],-g,-1,n),y(r[1],1,g,n),T=r[0],D=r[1];else{if(y(r,-g,g,n),!r)throw Error(l+n+" cannot be zero: "+r);T=-(D=r<0?-r:r)}if(e.hasOwnProperty(n="CRYPTO")){if((r=e[n])!==!!r)throw Error(l+n+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw F=!r,Error(l+"crypto unavailable");F=r}else F=r}if(e.hasOwnProperty(n="MODULO_MODE")&&(y(r=e[n],0,9,n),k=r),e.hasOwnProperty(n="POW_PRECISION")&&(y(r=e[n],0,g,n),B=r),e.hasOwnProperty(n="FORMAT")){if("object"!=typeof(r=e[n]))throw Error(l+n+" not an object: "+r);q=r}if(e.hasOwnProperty(n="ALPHABET")){if("string"!=typeof(r=e[n])||/^.$|\.|(.).*\1/.test(r))throw Error(l+n+" invalid: "+r);$=r}}return{DECIMAL_PLACES:I,ROUNDING_MODE:M,EXPONENTIAL_AT:[U,P],RANGE:[T,D],CRYPTO:F,MODULO_MODE:k,POW_PRECISION:B,FORMAT:q,ALPHABET:$}},G.isBigNumber=function(e){return e instanceof G||e&&!0===e._isBigNumber||!1},G.maximum=G.max=function(){return H(arguments,C.lt)},G.minimum=G.min=function(){return H(arguments,C.gt)},G.random=(s=9007199254740992*Math.random()&2097151?function(){return a(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var n,r,t,o,i,c=0,f=[],h=new G(L);if(null==e?e=I:y(e,0,g),o=u(e/d),F)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(o*=2));c<o;)(i=131072*n[c]+(n[c+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),n[c]=r[0],n[c+1]=r[1]):(f.push(i%1e14),c+=2);c=o/2}else{if(!crypto.randomBytes)throw F=!1,Error(l+"crypto unavailable");for(n=crypto.randomBytes(o*=7);c<o;)(i=281474976710656*(31&n[c])+1099511627776*n[c+1]+4294967296*n[c+2]+16777216*n[c+3]+(n[c+4]<<16)+(n[c+5]<<8)+n[c+6])>=9e15?crypto.randomBytes(7).copy(n,c):(f.push(i%1e14),c+=7);c=o/7}if(!F)for(;c<o;)(i=s())<9e15&&(f[c++]=i%1e14);for(o=f[--c],e%=d,o&&e&&(i=p[d-e],f[c]=a(o/i)*i);0===f[c];f.pop(),c--);if(c<0)f=[t=0];else{for(t=-1;0===f[0];f.splice(0,1),t-=d);for(c=1,i=f[0];i>=10;i/=10,c++);c<d&&(t-=d-c)}return h.e=t,h.c=f,h}),t=function(){function e(e,n,r,t){for(var o,s,i=[0],u=0,a=e.length;u<a;){for(s=i.length;s--;i[s]*=n);for(i[0]+=t.indexOf(e.charAt(u++)),o=0;o<i.length;o++)i[o]>r-1&&(null==i[o+1]&&(i[o+1]=0),i[o+1]+=i[o]/r|0,i[o]%=r)}return i.reverse()}return function(n,t,o,s,i){var u,a,l,c,f,d,h,p,m=n.indexOf("."),g=I,_=M;for(m>=0&&(c=B,B=0,n=n.replace(".",""),d=(p=new G(t)).pow(n.length-m),B=c,p.c=e(A(v(d.c),d.e,"0"),10,o,"0123456789"),p.e=p.c.length),l=c=(h=e(n,t,o,i?(u=$,"0123456789"):(u="0123456789",$))).length;0==h[--c];h.pop());if(!h[0])return u.charAt(0);if(m<0?--l:(d.c=h,d.e=l,d.s=s,h=(d=r(d,p,g,_,o)).c,f=d.r,l=d.e),m=h[a=l+g+1],c=o/2,f=f||a<0||null!=h[a+1],f=_<4?(null!=m||f)&&(0==_||_==(d.s<0?3:2)):m>c||m==c&&(4==_||f||6==_&&1&h[a-1]||_==(d.s<0?8:7)),a<1||!h[0])n=f?A(u.charAt(1),-g,u.charAt(0)):u.charAt(0);else{if(h.length=a,f)for(--o;++h[--a]>o;)h[a]=0,a||(++l,h=[1].concat(h));for(c=h.length;!h[--c];);for(m=0,n="";m<=c;n+=u.charAt(h[m++]));n=A(n,l,u.charAt(0))}return n}}(),r=function(){function e(e,n,r){var t,o,s,i,u=0,a=e.length,l=n%m,c=n/m|0;for(e=e.slice();a--;)u=((o=l*(s=e[a]%m)+(t=c*s+(i=e[a]/m|0)*l)%m*m+u)/r|0)+(t/m|0)+c*i,e[a]=o%r;return u&&(e=[u].concat(e)),e}function n(e,n,r,t){var o,s;if(r!=t)s=r>t?1:-1;else for(o=s=0;o<r;o++)if(e[o]!=n[o]){s=e[o]>n[o]?1:-1;break}return s}function r(e,n,r,t){for(var o=0;r--;)e[r]-=o,o=e[r]<n[r]?1:0,e[r]=o*t+e[r]-n[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,o,s,i,u){var l,c,h,p,m,g,v,j,y,w,b,O,A,E,x,N,S,R=t.s==o.s?1:-1,C=t.c,L=o.c;if(!(C&&C[0]&&L&&L[0]))return new G(t.s&&o.s&&(C?!L||C[0]!=L[0]:L)?C&&0==C[0]||!L?0*R:R/0:NaN);for(y=(j=new G(R)).c=[],R=s+(c=t.e-o.e)+1,u||(u=f,c=_(t.e/d)-_(o.e/d),R=R/d|0),h=0;L[h]==(C[h]||0);h++);if(L[h]>(C[h]||0)&&c--,R<0)y.push(1),p=!0;else{for(E=C.length,N=L.length,h=0,R+=2,(m=a(u/(L[0]+1)))>1&&(L=e(L,m,u),C=e(C,m,u),N=L.length,E=C.length),A=N,b=(w=C.slice(0,N)).length;b<N;w[b++]=0);S=L.slice(),S=[0].concat(S),x=L[0],L[1]>=u/2&&x++;do{if(m=0,(l=n(L,w,N,b))<0){if(O=w[0],N!=b&&(O=O*u+(w[1]||0)),(m=a(O/x))>1)for(m>=u&&(m=u-1),v=(g=e(L,m,u)).length,b=w.length;1==n(g,w,v,b);)m--,r(g,N<v?S:L,v,u),v=g.length,l=1;else 0==m&&(l=m=1),v=(g=L.slice()).length;if(v<b&&(g=[0].concat(g)),r(w,g,b,u),b=w.length,-1==l)for(;n(L,w,N,b)<1;)m++,r(w,N<b?S:L,b,u),b=w.length}else 0===l&&(m++,w=[0]);y[h++]=m,w[0]?w[b++]=C[A]||0:(w=[C[A]],b=1)}while((A++<E||null!=w[0])&&R--);p=null!=w[0],y[0]||y.splice(0,1)}if(u==f){for(h=1,R=y[0];R>=10;R/=10,h++);W(j,s+(j.e=h+c*d-1)+1,i,p)}else j.e=c,j.r=+p;return j}}(),E=/^(-?)0([xbo])(?=\w[\w.]*$)/i,x=/^([^.]+)\.$/,N=/^\.([^.]+)$/,S=/^-?(Infinity|NaN)$/,R=/^\s*\+(?=[\w.])|^\s+|\s+$/g,o=function(e,n,r,t){var o,s=r?n:n.replace(R,"");if(S.test(s))e.s=isNaN(s)?null:s<0?-1:1,e.c=e.e=null;else{if(!r&&(s=s.replace(E,function(e,n,r){return o="x"==(r=r.toLowerCase())?16:"b"==r?2:8,t&&t!=o?e:n}),t&&(o=t,s=s.replace(x,"$1").replace(N,"0.$1")),n!=s))return new G(s,o);if(G.DEBUG)throw Error(l+"Not a"+(t?" base "+t:"")+" number: "+n);e.c=e.e=e.s=null}},C.absoluteValue=C.abs=function(){var e=new G(this);return e.s<0&&(e.s=1),e},C.comparedTo=function(e,n){return j(this,new G(e,n))},C.decimalPlaces=C.dp=function(e,n){var r,t,o,s=this;if(null!=e)return y(e,0,g),null==n?n=M:y(n,0,8),W(new G(s),e+s.e+1,n);if(!(r=s.c))return null;if(t=((o=r.length-1)-_(this.e/d))*d,o=r[o])for(;o%10==0;o/=10,t--);return t<0&&(t=0),t},C.dividedBy=C.div=function(e,n){return r(this,new G(e,n),I,M)},C.dividedToIntegerBy=C.idiv=function(e,n){return r(this,new G(e,n),0,1)},C.exponentiatedBy=C.pow=function(e,n){var r,t,o,s,i,c,f,h=this;if((e=new G(e)).c&&!e.isInteger())throw Error(l+"Exponent not an integer: "+e);if(null!=n&&(n=new G(n)),s=e.e>14,!h.c||!h.c[0]||1==h.c[0]&&!h.e&&1==h.c.length||!e.c||!e.c[0])return f=new G(Math.pow(+h.valueOf(),s?2-b(e):+e)),n?f.mod(n):f;if(i=e.s<0,n){if(n.c?!n.c[0]:!n.s)return new G(NaN);(t=!i&&h.isInteger()&&n.isInteger())&&(h=h.mod(n))}else{if(e.e>9&&(h.e>0||h.e<-1||(0==h.e?h.c[0]>1||s&&h.c[1]>=24e7:h.c[0]<8e13||s&&h.c[0]<=9999975e7)))return o=h.s<0&&b(e)?-0:0,h.e>-1&&(o=1/o),new G(i?1/o:o);B&&(o=u(B/d+2))}for(s?(r=new G(.5),c=b(e)):c=e%2,i&&(e.s=1),f=new G(L);;){if(c){if(!(f=f.times(h)).c)break;o?f.c.length>o&&(f.c.length=o):t&&(f=f.mod(n))}if(s){if(W(e=e.times(r),e.e+1,1),!e.c[0])break;s=e.e>14,c=b(e)}else{if(!(e=a(e/2)))break;c=e%2}h=h.times(h),o?h.c&&h.c.length>o&&(h.c.length=o):t&&(h=h.mod(n))}return t?f:(i&&(f=L.div(f)),n?f.mod(n):o?W(f,B,M,void 0):f)},C.integerValue=function(e){var n=new G(this);return null==e?e=M:y(e,0,8),W(n,n.e+1,e)},C.isEqualTo=C.eq=function(e,n){return 0===j(this,new G(e,n))},C.isFinite=function(){return!!this.c},C.isGreaterThan=C.gt=function(e,n){return j(this,new G(e,n))>0},C.isGreaterThanOrEqualTo=C.gte=function(e,n){return 1===(n=j(this,new G(e,n)))||0===n},C.isInteger=function(){return!!this.c&&_(this.e/d)>this.c.length-2},C.isLessThan=C.lt=function(e,n){return j(this,new G(e,n))<0},C.isLessThanOrEqualTo=C.lte=function(e,n){return-1===(n=j(this,new G(e,n)))||0===n},C.isNaN=function(){return!this.s},C.isNegative=function(){return this.s<0},C.isPositive=function(){return this.s>0},C.isZero=function(){return!!this.c&&0==this.c[0]},C.minus=function(e,n){var r,t,o,s,i=this,u=i.s;if(n=(e=new G(e,n)).s,!u||!n)return new G(NaN);if(u!=n)return e.s=-n,i.plus(e);var a=i.e/d,l=e.e/d,c=i.c,h=e.c;if(!a||!l){if(!c||!h)return c?(e.s=-n,e):new G(h?i:NaN);if(!c[0]||!h[0])return h[0]?(e.s=-n,e):new G(c[0]?i:3==M?-0:0)}if(a=_(a),l=_(l),c=c.slice(),u=a-l){for((s=u<0)?(u=-u,o=c):(l=a,o=h),o.reverse(),n=u;n--;o.push(0));o.reverse()}else for(t=(s=(u=c.length)<(n=h.length))?u:n,u=n=0;n<t;n++)if(c[n]!=h[n]){s=c[n]<h[n];break}if(s&&(o=c,c=h,h=o,e.s=-e.s),(n=(t=h.length)-(r=c.length))>0)for(;n--;c[r++]=0);for(n=f-1;t>u;){if(c[--t]<h[t]){for(r=t;r&&!c[--r];c[r]=n);--c[r],c[t]+=f}c[t]-=h[t]}for(;0==c[0];c.splice(0,1),--l);return c[0]?V(e,c,l):(e.s=3==M?-1:1,e.c=[e.e=0],e)},C.modulo=C.mod=function(e,n){var t,o,s=this;return e=new G(e,n),!s.c||!e.s||e.c&&!e.c[0]?new G(NaN):!e.c||s.c&&!s.c[0]?new G(s):(9==k?(o=e.s,e.s=1,t=r(s,e,0,3),e.s=o,t.s*=o):t=r(s,e,0,k),(e=s.minus(t.times(e))).c[0]||1!=k||(e.s=s.s),e)},C.multipliedBy=C.times=function(e,n){var r,t,o,s,i,u,a,l,c,h,p,g,v,j,y,w=this,b=w.c,O=(e=new G(e,n)).c;if(!(b&&O&&b[0]&&O[0]))return!w.s||!e.s||b&&!b[0]&&!O||O&&!O[0]&&!b?e.c=e.e=e.s=null:(e.s*=w.s,b&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=_(w.e/d)+_(e.e/d),e.s*=w.s,(a=b.length)<(h=O.length)&&(v=b,b=O,O=v,o=a,a=h,h=o),o=a+h,v=[];o--;v.push(0));for(j=f,y=m,o=h;--o>=0;){for(r=0,p=O[o]%y,g=O[o]/y|0,s=o+(i=a);s>o;)r=((l=p*(l=b[--i]%y)+(u=g*l+(c=b[i]/y|0)*p)%y*y+v[s]+r)/j|0)+(u/y|0)+g*c,v[s--]=l%j;v[s]=r}return r?++t:v.splice(0,1),V(e,v,t)},C.negated=function(){var e=new G(this);return e.s=-e.s||null,e},C.plus=function(e,n){var r,t=this,o=t.s;if(n=(e=new G(e,n)).s,!o||!n)return new G(NaN);if(o!=n)return e.s=-n,t.minus(e);var s=t.e/d,i=e.e/d,u=t.c,a=e.c;if(!s||!i){if(!u||!a)return new G(o/0);if(!u[0]||!a[0])return a[0]?e:new G(u[0]?t:0*o)}if(s=_(s),i=_(i),u=u.slice(),o=s-i){for(o>0?(i=s,r=a):(o=-o,r=u),r.reverse();o--;r.push(0));r.reverse()}for((o=u.length)-(n=a.length)<0&&(r=a,a=u,u=r,n=o),o=0;n;)o=(u[--n]=u[n]+a[n]+o)/f|0,u[n]=f===u[n]?0:u[n]%f;return o&&(u=[o].concat(u),++i),V(e,u,i)},C.precision=C.sd=function(e,n){var r,t,o,s=this;if(null!=e&&e!==!!e)return y(e,1,g),null==n?n=M:y(n,0,8),W(new G(s),e,n);if(!(r=s.c))return null;if(t=(o=r.length-1)*d+1,o=r[o]){for(;o%10==0;o/=10,t--);for(o=r[0];o>=10;o/=10,t++);}return e&&s.e+1>t&&(t=s.e+1),t},C.shiftedBy=function(e){return y(e,-h,h),this.times("1e"+e)},C.squareRoot=C.sqrt=function(){var e,n,t,o,s,i=this,u=i.c,a=i.s,l=i.e,c=I+4,f=new G("0.5");if(1!==a||!u||!u[0])return new G(!a||a<0&&(!u||u[0])?NaN:u?i:1/0);if(0==(a=Math.sqrt(+i))||a==1/0?(((n=v(u)).length+l)%2==0&&(n+="0"),a=Math.sqrt(n),l=_((l+1)/2)-(l<0||l%2),t=new G(n=a==1/0?"1e"+l:(n=a.toExponential()).slice(0,n.indexOf("e")+1)+l)):t=new G(a+""),t.c[0])for((a=(l=t.e)+c)<3&&(a=0);;)if(s=t,t=f.times(s.plus(r(i,s,c,1))),v(s.c).slice(0,a)===(n=v(t.c)).slice(0,a)){if(t.e<l&&--a,"9999"!=(n=n.slice(a-3,a+1))&&(o||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(W(t,t.e+I+2,1),e=!t.times(t).eq(i));break}if(!o&&(W(s,s.e+I+2,0),s.times(s).eq(i))){t=s;break}c+=4,a+=4,o=1}return W(t,t.e+I+1,M,e)},C.toExponential=function(e,n){return null!=e&&(y(e,0,g),e++),z(this,e,n,1)},C.toFixed=function(e,n){return null!=e&&(y(e,0,g),e=e+this.e+1),z(this,e,n)},C.toFormat=function(e,n){var r=this.toFixed(e,n);if(this.c){var t,o=r.split("."),s=+q.groupSize,i=+q.secondaryGroupSize,u=q.groupSeparator,a=o[0],l=o[1],c=this.s<0,f=c?a.slice(1):a,d=f.length;if(i&&(t=s,s=i,i=t,d-=t),s>0&&d>0){for(t=d%s||s,a=f.substr(0,t);t<d;t+=s)a+=u+f.substr(t,s);i>0&&(a+=u+f.slice(t)),c&&(a="-"+a)}r=l?a+q.decimalSeparator+((i=+q.fractionGroupSize)?l.replace(new RegExp("\\d{"+i+"}\\B","g"),"$&"+q.fractionGroupSeparator):l):a}return r},C.toFraction=function(e){var n,t,o,s,i,u,a,c,f,h,m,g,_=this,j=_.c;if(null!=e&&(!(c=new G(e)).isInteger()&&(c.c||1!==c.s)||c.lt(L)))throw Error(l+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+e);if(!j)return _.toString();for(t=new G(L),h=o=new G(L),s=f=new G(L),g=v(j),u=t.e=g.length-_.e-1,t.c[0]=p[(a=u%d)<0?d+a:a],e=!e||c.comparedTo(t)>0?u>0?t:h:c,a=D,D=1/0,c=new G(g),f.c[0]=0;m=r(c,t,0,1),1!=(i=o.plus(m.times(s))).comparedTo(e);)o=s,s=i,h=f.plus(m.times(i=h)),f=i,t=c.minus(m.times(i=t)),c=i;return i=r(e.minus(o),s,0,1),f=f.plus(i.times(h)),o=o.plus(i.times(s)),f.s=h.s=_.s,n=r(h,s,u*=2,M).minus(_).abs().comparedTo(r(f,o,u,M).minus(_).abs())<1?[h.toString(),s.toString()]:[f.toString(),o.toString()],D=a,n},C.toNumber=function(){return+this},C.toPrecision=function(e,n){return null!=e&&y(e,1,g),z(this,e,n,2)},C.toString=function(e){var n,r=this,o=r.s,s=r.e;return null===s?o?(n="Infinity",o<0&&(n="-"+n)):n="NaN":(n=v(r.c),null==e?n=s<=U||s>=P?O(n,s):A(n,s,"0"):(y(e,2,$.length,"Base"),n=t(A(n,s,"0"),10,e,o,!0)),o<0&&r.c[0]&&(n="-"+n)),n},C.valueOf=C.toJSON=function(){var e,n=this,r=n.e;return null===r?n.toString():(e=v(n.c),e=r<=U||r>=P?O(e,r):A(e,r,"0"),n.s<0?"-"+e:e)},C._isBigNumber=!0,null!=n&&G.set(n),G}()).default=s.BigNumber=s,void 0===(t=function(){return s}.call(n,r,n,e))||(e.exports=t)}()},"./node_modules/lodash/_arrayAggregator.js":function(e,n){e.exports=function(e,n,r,t){for(var o=-1,s=null==e?0:e.length;++o<s;){var i=e[o];n(t,i,r(i),e)}return t}},"./node_modules/lodash/_arrayShuffle.js":function(e,n,r){var t=r("./node_modules/lodash/_copyArray.js"),o=r("./node_modules/lodash/_shuffleSelf.js");e.exports=function(e){return o(t(e))}},"./node_modules/lodash/_baseAggregator.js":function(e,n,r){var t=r("./node_modules/lodash/_baseEach.js");e.exports=function(e,n,r,o){return t(e,function(e,t,s){n(o,e,r(e),s)}),o}},"./node_modules/lodash/_baseDifference.js":function(e,n,r){var t=r("./node_modules/lodash/_SetCache.js"),o=r("./node_modules/lodash/_arrayIncludes.js"),s=r("./node_modules/lodash/_arrayIncludesWith.js"),i=r("./node_modules/lodash/_arrayMap.js"),u=r("./node_modules/lodash/_baseUnary.js"),a=r("./node_modules/lodash/_cacheHas.js"),l=200;e.exports=function(e,n,r,c){var f=-1,d=o,h=!0,p=e.length,m=[],g=n.length;if(!p)return m;r&&(n=i(n,u(r))),c?(d=s,h=!1):n.length>=l&&(d=a,h=!1,n=new t(n));e:for(;++f<p;){var _=e[f],v=null==r?_:r(_);if(_=c||0!==_?_:0,h&&v==v){for(var j=g;j--;)if(n[j]===v)continue e;m.push(_)}else d(n,v,c)||m.push(_)}return m}},"./node_modules/lodash/_baseRandom.js":function(e,n){var r=Math.floor,t=Math.random;e.exports=function(e,n){return e+r(t()*(n-e+1))}},"./node_modules/lodash/_baseShuffle.js":function(e,n,r){var t=r("./node_modules/lodash/_shuffleSelf.js"),o=r("./node_modules/lodash/values.js");e.exports=function(e){return t(o(e))}},"./node_modules/lodash/_createAggregator.js":function(e,n,r){var t=r("./node_modules/lodash/_arrayAggregator.js"),o=r("./node_modules/lodash/_baseAggregator.js"),s=r("./node_modules/lodash/_baseIteratee.js"),i=r("./node_modules/lodash/isArray.js");e.exports=function(e,n){return function(r,u){var a=i(r)?t:o,l=n?n():{};return a(r,e,s(u,2),l)}}},"./node_modules/lodash/_createCaseFirst.js":function(e,n,r){var t=r("./node_modules/lodash/_castSlice.js"),o=r("./node_modules/lodash/_hasUnicode.js"),s=r("./node_modules/lodash/_stringToArray.js"),i=r("./node_modules/lodash/toString.js");e.exports=function(e){return function(n){n=i(n);var r=o(n)?s(n):void 0,u=r?r[0]:n.charAt(0),a=r?t(r,1).join(""):n.slice(1);return u[e]()+a}}},"./node_modules/lodash/_iteratorToArray.js":function(e,n){e.exports=function(e){for(var n,r=[];!(n=e.next()).done;)r.push(n.value);return r}},"./node_modules/lodash/_shuffleSelf.js":function(e,n,r){var t=r("./node_modules/lodash/_baseRandom.js");e.exports=function(e,n){var r=-1,o=e.length,s=o-1;for(n=void 0===n?o:n;++r<n;){var i=t(r,s),u=e[i];e[i]=e[r],e[r]=u}return e.length=n,e}},"./node_modules/lodash/camelCase.js":function(e,n,r){var t=r("./node_modules/lodash/capitalize.js"),o=r("./node_modules/lodash/_createCompounder.js")(function(e,n,r){return n=n.toLowerCase(),e+(r?t(n):n)});e.exports=o},"./node_modules/lodash/capitalize.js":function(e,n,r){var t=r("./node_modules/lodash/toString.js"),o=r("./node_modules/lodash/upperFirst.js");e.exports=function(e){return o(t(e).toLowerCase())}},"./node_modules/lodash/cloneDeep.js":function(e,n,r){var t=r("./node_modules/lodash/_baseClone.js"),o=1,s=4;e.exports=function(e){return t(e,o|s)}},"./node_modules/lodash/difference.js":function(e,n,r){var t=r("./node_modules/lodash/_baseDifference.js"),o=r("./node_modules/lodash/_baseFlatten.js"),s=r("./node_modules/lodash/_baseRest.js"),i=r("./node_modules/lodash/isArrayLikeObject.js"),u=s(function(e,n){return i(e)?t(e,o(n,1,i,!0)):[]});e.exports=u},"./node_modules/lodash/findLastIndex.js":function(e,n,r){var t=r("./node_modules/lodash/_baseFindIndex.js"),o=r("./node_modules/lodash/_baseIteratee.js"),s=r("./node_modules/lodash/toInteger.js"),i=Math.max,u=Math.min;e.exports=function(e,n,r){var a=null==e?0:e.length;if(!a)return-1;var l=a-1;return void 0!==r&&(l=s(r),l=r<0?i(a+l,0):u(l,a-1)),t(e,o(n,3),l,!0)}},"./node_modules/lodash/first.js":function(e,n,r){e.exports=r("./node_modules/lodash/head.js")},"./node_modules/lodash/forEach.js":function(e,n,r){var t=r("./node_modules/lodash/_arrayEach.js"),o=r("./node_modules/lodash/_baseEach.js"),s=r("./node_modules/lodash/_castFunction.js"),i=r("./node_modules/lodash/isArray.js");e.exports=function(e,n){return(i(e)?t:o)(e,s(n))}},"./node_modules/lodash/head.js":function(e,n){e.exports=function(e){return e&&e.length?e[0]:void 0}},"./node_modules/lodash/isEqualWith.js":function(e,n,r){var t=r("./node_modules/lodash/_baseIsEqual.js");e.exports=function(e,n,r){var o=(r="function"==typeof r?r:void 0)?r(e,n):void 0;return void 0===o?t(e,n,void 0,r):!!o}},"./node_modules/lodash/keyBy.js":function(e,n,r){var t=r("./node_modules/lodash/_baseAssignValue.js"),o=r("./node_modules/lodash/_createAggregator.js")(function(e,n,r){t(e,r,n)});e.exports=o},"./node_modules/lodash/shuffle.js":function(e,n,r){var t=r("./node_modules/lodash/_arrayShuffle.js"),o=r("./node_modules/lodash/_baseShuffle.js"),s=r("./node_modules/lodash/isArray.js");e.exports=function(e){return(s(e)?t:o)(e)}},"./node_modules/lodash/toArray.js":function(e,n,r){var t=r("./node_modules/lodash/_Symbol.js"),o=r("./node_modules/lodash/_copyArray.js"),s=r("./node_modules/lodash/_getTag.js"),i=r("./node_modules/lodash/isArrayLike.js"),u=r("./node_modules/lodash/isString.js"),a=r("./node_modules/lodash/_iteratorToArray.js"),l=r("./node_modules/lodash/_mapToArray.js"),c=r("./node_modules/lodash/_setToArray.js"),f=r("./node_modules/lodash/_stringToArray.js"),d=r("./node_modules/lodash/values.js"),h="[object Map]",p="[object Set]",m=t?t.iterator:void 0;e.exports=function(e){if(!e)return[];if(i(e))return u(e)?f(e):o(e);if(m&&e[m])return a(e[m]());var n=s(e);return(n==h?l:n==p?c:d)(e)}},"./node_modules/lodash/union.js":function(e,n,r){var t=r("./node_modules/lodash/_baseFlatten.js"),o=r("./node_modules/lodash/_baseRest.js"),s=r("./node_modules/lodash/_baseUniq.js"),i=r("./node_modules/lodash/isArrayLikeObject.js"),u=o(function(e){return s(t(e,1,i,!0))});e.exports=u},"./node_modules/lodash/uniqBy.js":function(e,n,r){var t=r("./node_modules/lodash/_baseIteratee.js"),o=r("./node_modules/lodash/_baseUniq.js");e.exports=function(e,n){return e&&e.length?o(e,t(n,2)):[]}},"./node_modules/lodash/uniqWith.js":function(e,n,r){var t=r("./node_modules/lodash/_baseUniq.js");e.exports=function(e,n){return n="function"==typeof n?n:void 0,e&&e.length?t(e,void 0,n):[]}},"./node_modules/lodash/upperFirst.js":function(e,n,r){var t=r("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");e.exports=t},"./node_modules/query-string/index.js":function(e,n,r){"use strict";var t=r("./node_modules/strict-uri-encode/index.js"),o=r("./node_modules/object-assign/index.js");function s(e,n){return n.encode?n.strict?t(e):encodeURIComponent(e):e}n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e,n){var r=function(e){var n;switch(e.arrayFormat){case"index":return function(e,r,t){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===t[e]&&(t[e]={}),t[e][n[1]]=r):t[e]=r};case"bracket":return function(e,r,t){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==t[e]?t[e]=[].concat(t[e],r):t[e]=[r]:t[e]=r};default:return function(e,n,r){void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=n}}}(n=o({arrayFormat:"none"},n)),t=Object.create(null);return"string"!=typeof e?t:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),o=n.shift(),s=n.length>0?n.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),r(decodeURIComponent(o),s,t)}),Object.keys(t).sort().reduce(function(e,n){var r=t[n];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[n]=function e(n){return Array.isArray(n)?n.sort():"object"==typeof n?e(Object.keys(n)).sort(function(e,n){return Number(e)-Number(n)}).map(function(e){return n[e]}):n}(r):e[n]=r,e},Object.create(null))):t},n.stringify=function(e,n){var r=function(e){switch(e.arrayFormat){case"index":return function(n,r,t){return null===r?[s(n,e),"[",t,"]"].join(""):[s(n,e),"[",s(t,e),"]=",s(r,e)].join("")};case"bracket":return function(n,r){return null===r?s(n,e):[s(n,e),"[]=",s(r,e)].join("")};default:return function(n,r){return null===r?s(n,e):[s(n,e),"=",s(r,e)].join("")}}}(n=o({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map(function(t){var o=e[t];if(void 0===o)return"";if(null===o)return s(t,n);if(Array.isArray(o)){var i=[];return o.slice().forEach(function(e){void 0!==e&&i.push(r(t,e,i.length))}),i.join("&")}return s(t,n)+"="+s(o,n)}).filter(function(e){return e.length>0}).join("&"):""}},"./node_modules/strict-uri-encode/index.js":function(e,n,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}}}]);
//# sourceMappingURL=vendors~Governance~Reddit.813a9234ae6131bd61b0.js.map

}
/*
     FILE ARCHIVED ON 00:16:00 Jun 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:54 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.08
  exclusion.robots.policy: 0.068
  cdx.remote: 0.104
  esindex: 0.01
  LoadShardBlock: 84.642 (6)
  PetaboxLoader3.datanode: 102.493 (8)
  load_resource: 119.247 (2)
  PetaboxLoader3.resolve: 90.716 (2)
*/