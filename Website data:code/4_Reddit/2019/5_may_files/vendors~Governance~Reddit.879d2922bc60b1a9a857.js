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

(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Governance~Reddit"],{"./node_modules/@r/frames/compiled.js":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0});var r=arguments,o={targetOrigin:"*"},t=/\..+$/;function s(e){return new RegExp("\\.(?:"+e.join("|")+")$")}function i(e){return new RegExp("^http(s)?:\\/\\/"+e.join("|")+"$","i")}var u=[".*"],a=i(u),l=[".postMessage"],c=s(l),d={},f=!1;function h(n,r,o){e.addEventListener?e.addEventListener(n,r,o):e.attachEvent&&e.attachEvent("on"+n,r)}function p(n,r){e.removeEventListener?e.removeEventListener(n,r):e.detachEvent&&e.detachEvent("on"+n,r)}var m=n.postMessage=function(e,n,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.test(n)||(n+=".postMessage");var i=s;Object.keys(o).forEach(function(e){i[e]=o[e]}),e.postMessage(JSON.stringify({type:n,data:r,defaultedOptions:i}),i.targetOrigin)},_=n.receiveMessage=function(e,n,r,o){"string"==typeof e&&(o=r,r=n,n=e,e=null),o=o||void 0;var t=function(n){for(var t=arguments.length,s=Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];e&&e!==n.source&&e.contentWindow!==n.source||r.apply(o,[n].concat(s))};return h(n,t),{off:function(){p(n,t)}}},g=(n.receiveMessageOnce=function(e,n,o,t){var s=_(e,n,function(){o&&o.apply(void 0,r),s.off()},t);return s},n.removePostMessageOrigin=function(e){var n=u.indexOf(e);-1!==n&&(u.splice(n,1),a=i(u))});n.addPostMessageOrigin=function(e){!function(e){return/\*/.test(e)}(e)?-1===u.indexOf(e)&&(g(".*"),u.push(e),a=i(u)):u=[".*"]};function v(n){if(n.origin===e.location.origin||a.test(n.origin)||"null"===n.origin){var r={};try{r=JSON.parse(n.data)}catch(n){}var o=r.type;if(c.test(o)){var t=o.split(".",2)[1];if(d[t])d[t].targets.forEach(function(e){return m(e,o,r.data,r.options)});var s=new CustomEvent(o,{detail:r.data});s.source=n.source,e.dispatchEvent(s)}}}var j=n.listen=function(e){-1===l.indexOf(e)&&(l.push(e),c=s(l)),f||(h("message",v),f=!0)};n.stopListening=function(e){var n=l.indexOf(e);-1!==n&&(l.splice(n,1),l.length?c=s(l):(p("message",v),f=!1))},n.proxy=function(e,n){j(e),Array.isArray(n)||(n=[n]);var r=d[e];r?r.targets=[].concat(r.targets,n):r={targets:n},d[e]=r}}).call(this,r("./node_modules/webpack/buildin/global.js"))},"./node_modules/bignumber.js/bignumber.js":function(e,n,r){var o;!function(t){"use strict";var s,i=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,u=Math.ceil,a=Math.floor,l="[BigNumber Error] ",c=l+"Number primitive has more than 15 significant digits: ",d=1e14,f=14,h=9007199254740991,p=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],m=1e7,_=1e9;function g(e){var n=0|e;return e>0||e===n?n:n-1}function v(e){for(var n,r,o=1,t=e.length,s=e[0]+"";o<t;){for(n=e[o++]+"",r=f-n.length;r--;n="0"+n);s+=n}for(t=s.length;48===s.charCodeAt(--t););return s.slice(0,t+1||1)}function j(e,n){var r,o,t=e.c,s=n.c,i=e.s,u=n.s,a=e.e,l=n.e;if(!i||!u)return null;if(r=t&&!t[0],o=s&&!s[0],r||o)return r?o?0:-u:i;if(i!=u)return i;if(r=i<0,o=a==l,!t||!s)return o?0:!t^r?1:-1;if(!o)return a>l^r?1:-1;for(u=(a=t.length)<(l=s.length)?a:l,i=0;i<u;i++)if(t[i]!=s[i])return t[i]>s[i]^r?1:-1;return a==l?0:a>l^r?1:-1}function y(e,n,r,o){if(e<n||e>r||e!==(e<0?u(e):a(e)))throw Error(l+(o||"Argument")+("number"==typeof e?e<n||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+e)}function b(e){return"[object Array]"==Object.prototype.toString.call(e)}function w(e){var n=e.c.length-1;return g(e.e/f)==n&&e.c[n]%2!=0}function O(e,n){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(n<0?"e":"e+")+n}function A(e,n,r){var o,t;if(n<0){for(t=r+".";++n;t+=r);e=t+e}else if(++n>(o=e.length)){for(t=r,n-=o;--n;t+=r);e+=t}else n<o&&(e=e.slice(0,n)+"."+e.slice(n));return e}(s=function e(n){var r,o,t,s,x,E,N,S,R,C=G.prototype={constructor:G,toString:null,valueOf:null},M=new G(1),I=20,L=4,U=-7,B=21,P=-1e7,T=1e7,D=!1,F=1,k=0,q={decimalSeparator:".",groupSeparator:",",groupSize:3,secondaryGroupSize:0,fractionGroupSeparator:" ",fractionGroupSize:0},$="0123456789abcdefghijklmnopqrstuvwxyz";function G(e,n){var r,s,u,l,d,p,m,_,g=this;if(!(g instanceof G))return new G(e,n);if(null==n){if(e instanceof G)return g.s=e.s,g.e=e.e,void(g.c=(e=e.c)?e.slice():e);if((p="number"==typeof e)&&0*e==0){if(g.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,d=e;d>=10;d/=10,l++);return g.e=l,void(g.c=[e])}_=e+""}else{if(!i.test(_=e+""))return t(g,_,p);g.s=45==_.charCodeAt(0)?(_=_.slice(1),-1):1}(l=_.indexOf("."))>-1&&(_=_.replace(".","")),(d=_.search(/e/i))>0?(l<0&&(l=d),l+=+_.slice(d+1),_=_.substring(0,d)):l<0&&(l=_.length)}else{if(y(n,2,$.length,"Base"),_=e+"",10==n)return W(g=new G(e instanceof G?e:_),I+g.e+1,L);if(p="number"==typeof e){if(0*e!=0)return t(g,_,p,n);if(g.s=1/e<0?(_=_.slice(1),-1):1,G.DEBUG&&_.replace(/^0\.0*|\./,"").length>15)throw Error(c+e);p=!1}else g.s=45===_.charCodeAt(0)?(_=_.slice(1),-1):1;for(r=$.slice(0,n),l=d=0,m=_.length;d<m;d++)if(r.indexOf(s=_.charAt(d))<0){if("."==s){if(d>l){l=m;continue}}else if(!u&&(_==_.toUpperCase()&&(_=_.toLowerCase())||_==_.toLowerCase()&&(_=_.toUpperCase()))){u=!0,d=-1,l=0;continue}return t(g,e+"",p,n)}(l=(_=o(_,n,10,g.s)).indexOf("."))>-1?_=_.replace(".",""):l=_.length}for(d=0;48===_.charCodeAt(d);d++);for(m=_.length;48===_.charCodeAt(--m););if(_=_.slice(d,++m)){if(m-=d,p&&G.DEBUG&&m>15&&(e>h||e!==a(e)))throw Error(c+g.s*e);if((l=l-d-1)>T)g.c=g.e=null;else if(l<P)g.c=[g.e=0];else{if(g.e=l,g.c=[],d=(l+1)%f,l<0&&(d+=f),d<m){for(d&&g.c.push(+_.slice(0,d)),m-=f;d<m;)g.c.push(+_.slice(d,d+=f));_=_.slice(d),d=f-_.length}else d-=m;for(;d--;_+="0");g.c.push(+_)}}else g.c=[g.e=0]}function z(e,n,r,o){var t,s,i,u,a;if(null==r?r=L:y(r,0,8),!e.c)return e.toString();if(t=e.c[0],i=e.e,null==n)a=v(e.c),a=1==o||2==o&&i<=U?O(a,i):A(a,i,"0");else if(s=(e=W(new G(e),n,r)).e,u=(a=v(e.c)).length,1==o||2==o&&(n<=s||s<=U)){for(;u<n;a+="0",u++);a=O(a,s)}else if(n-=i,a=A(a,s,"0"),s+1>u){if(--n>0)for(a+=".";n--;a+="0");}else if((n+=s-u)>0)for(s+1==u&&(a+=".");n--;a+="0");return e.s<0&&t?"-"+a:a}function H(e,n){var r,o,t=0;for(b(e[0])&&(e=e[0]),r=new G(e[0]);++t<e.length;){if(!(o=new G(e[t])).s){r=o;break}n.call(r,o)&&(r=o)}return r}function V(e,n,r){for(var o=1,t=n.length;!n[--t];n.pop());for(t=n[0];t>=10;t/=10,o++);return(r=o+r*f-1)>T?e.c=e.e=null:r<P?e.c=[e.e=0]:(e.e=r,e.c=n),e}function W(e,n,r,o){var t,s,i,l,c,h,m,_=e.c,g=p;if(_){e:{for(t=1,l=_[0];l>=10;l/=10,t++);if((s=n-t)<0)s+=f,i=n,m=(c=_[h=0])/g[t-i-1]%10|0;else if((h=u((s+1)/f))>=_.length){if(!o)break e;for(;_.length<=h;_.push(0));c=m=0,t=1,i=(s%=f)-f+1}else{for(c=l=_[h],t=1;l>=10;l/=10,t++);m=(i=(s%=f)-f+t)<0?0:c/g[t-i-1]%10|0}if(o=o||n<0||null!=_[h+1]||(i<0?c:c%g[t-i-1]),o=r<4?(m||o)&&(0==r||r==(e.s<0?3:2)):m>5||5==m&&(4==r||o||6==r&&(s>0?i>0?c/g[t-i]:0:_[h-1])%10&1||r==(e.s<0?8:7)),n<1||!_[0])return _.length=0,o?(n-=e.e+1,_[0]=g[(f-n%f)%f],e.e=-n||0):_[0]=e.e=0,e;if(0==s?(_.length=h,l=1,h--):(_.length=h+1,l=g[f-s],_[h]=i>0?a(c/g[t-i]%g[i])*l:0),o)for(;;){if(0==h){for(s=1,i=_[0];i>=10;i/=10,s++);for(i=_[0]+=l,l=1;i>=10;i/=10,l++);s!=l&&(e.e++,_[0]==d&&(_[0]=1));break}if(_[h]+=l,_[h]!=d)break;_[h--]=0,l=1}for(s=_.length;0===_[--s];_.pop());}e.e>T?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}return G.clone=e,G.ROUND_UP=0,G.ROUND_DOWN=1,G.ROUND_CEIL=2,G.ROUND_FLOOR=3,G.ROUND_HALF_UP=4,G.ROUND_HALF_DOWN=5,G.ROUND_HALF_EVEN=6,G.ROUND_HALF_CEIL=7,G.ROUND_HALF_FLOOR=8,G.EUCLID=9,G.config=G.set=function(e){var n,r;if(null!=e){if("object"!=typeof e)throw Error(l+"Object expected: "+e);if(e.hasOwnProperty(n="DECIMAL_PLACES")&&(y(r=e[n],0,_,n),I=r),e.hasOwnProperty(n="ROUNDING_MODE")&&(y(r=e[n],0,8,n),L=r),e.hasOwnProperty(n="EXPONENTIAL_AT")&&(b(r=e[n])?(y(r[0],-_,0,n),y(r[1],0,_,n),U=r[0],B=r[1]):(y(r,-_,_,n),U=-(B=r<0?-r:r))),e.hasOwnProperty(n="RANGE"))if(b(r=e[n]))y(r[0],-_,-1,n),y(r[1],1,_,n),P=r[0],T=r[1];else{if(y(r,-_,_,n),!r)throw Error(l+n+" cannot be zero: "+r);P=-(T=r<0?-r:r)}if(e.hasOwnProperty(n="CRYPTO")){if((r=e[n])!==!!r)throw Error(l+n+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw D=!r,Error(l+"crypto unavailable");D=r}else D=r}if(e.hasOwnProperty(n="MODULO_MODE")&&(y(r=e[n],0,9,n),F=r),e.hasOwnProperty(n="POW_PRECISION")&&(y(r=e[n],0,_,n),k=r),e.hasOwnProperty(n="FORMAT")){if("object"!=typeof(r=e[n]))throw Error(l+n+" not an object: "+r);q=r}if(e.hasOwnProperty(n="ALPHABET")){if("string"!=typeof(r=e[n])||/^.$|\.|(.).*\1/.test(r))throw Error(l+n+" invalid: "+r);$=r}}return{DECIMAL_PLACES:I,ROUNDING_MODE:L,EXPONENTIAL_AT:[U,B],RANGE:[P,T],CRYPTO:D,MODULO_MODE:F,POW_PRECISION:k,FORMAT:q,ALPHABET:$}},G.isBigNumber=function(e){return e instanceof G||e&&!0===e._isBigNumber||!1},G.maximum=G.max=function(){return H(arguments,C.lt)},G.minimum=G.min=function(){return H(arguments,C.gt)},G.random=(s=9007199254740992*Math.random()&2097151?function(){return a(9007199254740992*Math.random())}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var n,r,o,t,i,c=0,d=[],h=new G(M);if(null==e?e=I:y(e,0,_),t=u(e/f),D)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(t*=2));c<t;)(i=131072*n[c]+(n[c+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),n[c]=r[0],n[c+1]=r[1]):(d.push(i%1e14),c+=2);c=t/2}else{if(!crypto.randomBytes)throw D=!1,Error(l+"crypto unavailable");for(n=crypto.randomBytes(t*=7);c<t;)(i=281474976710656*(31&n[c])+1099511627776*n[c+1]+4294967296*n[c+2]+16777216*n[c+3]+(n[c+4]<<16)+(n[c+5]<<8)+n[c+6])>=9e15?crypto.randomBytes(7).copy(n,c):(d.push(i%1e14),c+=7);c=t/7}if(!D)for(;c<t;)(i=s())<9e15&&(d[c++]=i%1e14);for(t=d[--c],e%=f,t&&e&&(i=p[f-e],d[c]=a(t/i)*i);0===d[c];d.pop(),c--);if(c<0)d=[o=0];else{for(o=-1;0===d[0];d.splice(0,1),o-=f);for(c=1,i=d[0];i>=10;i/=10,c++);c<f&&(o-=f-c)}return h.e=o,h.c=d,h}),o=function(){function e(e,n,r,o){for(var t,s,i=[0],u=0,a=e.length;u<a;){for(s=i.length;s--;i[s]*=n);for(i[0]+=o.indexOf(e.charAt(u++)),t=0;t<i.length;t++)i[t]>r-1&&(null==i[t+1]&&(i[t+1]=0),i[t+1]+=i[t]/r|0,i[t]%=r)}return i.reverse()}return function(n,o,t,s,i){var u,a,l,c,d,f,h,p,m=n.indexOf("."),_=I,g=L;for(m>=0&&(c=k,k=0,n=n.replace(".",""),f=(p=new G(o)).pow(n.length-m),k=c,p.c=e(A(v(f.c),f.e,"0"),10,t,"0123456789"),p.e=p.c.length),l=c=(h=e(n,o,t,i?(u=$,"0123456789"):(u="0123456789",$))).length;0==h[--c];h.pop());if(!h[0])return u.charAt(0);if(m<0?--l:(f.c=h,f.e=l,f.s=s,h=(f=r(f,p,_,g,t)).c,d=f.r,l=f.e),m=h[a=l+_+1],c=t/2,d=d||a<0||null!=h[a+1],d=g<4?(null!=m||d)&&(0==g||g==(f.s<0?3:2)):m>c||m==c&&(4==g||d||6==g&&1&h[a-1]||g==(f.s<0?8:7)),a<1||!h[0])n=d?A(u.charAt(1),-_,u.charAt(0)):u.charAt(0);else{if(h.length=a,d)for(--t;++h[--a]>t;)h[a]=0,a||(++l,h=[1].concat(h));for(c=h.length;!h[--c];);for(m=0,n="";m<=c;n+=u.charAt(h[m++]));n=A(n,l,u.charAt(0))}return n}}(),r=function(){function e(e,n,r){var o,t,s,i,u=0,a=e.length,l=n%m,c=n/m|0;for(e=e.slice();a--;)u=((t=l*(s=e[a]%m)+(o=c*s+(i=e[a]/m|0)*l)%m*m+u)/r|0)+(o/m|0)+c*i,e[a]=t%r;return u&&(e=[u].concat(e)),e}function n(e,n,r,o){var t,s;if(r!=o)s=r>o?1:-1;else for(t=s=0;t<r;t++)if(e[t]!=n[t]){s=e[t]>n[t]?1:-1;break}return s}function r(e,n,r,o){for(var t=0;r--;)e[r]-=t,t=e[r]<n[r]?1:0,e[r]=t*o+e[r]-n[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(o,t,s,i,u){var l,c,h,p,m,_,v,j,y,b,w,O,A,x,E,N,S,R=o.s==t.s?1:-1,C=o.c,M=t.c;if(!(C&&C[0]&&M&&M[0]))return new G(o.s&&t.s&&(C?!M||C[0]!=M[0]:M)?C&&0==C[0]||!M?0*R:R/0:NaN);for(y=(j=new G(R)).c=[],R=s+(c=o.e-t.e)+1,u||(u=d,c=g(o.e/f)-g(t.e/f),R=R/f|0),h=0;M[h]==(C[h]||0);h++);if(M[h]>(C[h]||0)&&c--,R<0)y.push(1),p=!0;else{for(x=C.length,N=M.length,h=0,R+=2,(m=a(u/(M[0]+1)))>1&&(M=e(M,m,u),C=e(C,m,u),N=M.length,x=C.length),A=N,w=(b=C.slice(0,N)).length;w<N;b[w++]=0);S=M.slice(),S=[0].concat(S),E=M[0],M[1]>=u/2&&E++;do{if(m=0,(l=n(M,b,N,w))<0){if(O=b[0],N!=w&&(O=O*u+(b[1]||0)),(m=a(O/E))>1)for(m>=u&&(m=u-1),v=(_=e(M,m,u)).length,w=b.length;1==n(_,b,v,w);)m--,r(_,N<v?S:M,v,u),v=_.length,l=1;else 0==m&&(l=m=1),v=(_=M.slice()).length;if(v<w&&(_=[0].concat(_)),r(b,_,w,u),w=b.length,-1==l)for(;n(M,b,N,w)<1;)m++,r(b,N<w?S:M,w,u),w=b.length}else 0===l&&(m++,b=[0]);y[h++]=m,b[0]?b[w++]=C[A]||0:(b=[C[A]],w=1)}while((A++<x||null!=b[0])&&R--);p=null!=b[0],y[0]||y.splice(0,1)}if(u==d){for(h=1,R=y[0];R>=10;R/=10,h++);W(j,s+(j.e=h+c*f-1)+1,i,p)}else j.e=c,j.r=+p;return j}}(),x=/^(-?)0([xbo])(?=\w[\w.]*$)/i,E=/^([^.]+)\.$/,N=/^\.([^.]+)$/,S=/^-?(Infinity|NaN)$/,R=/^\s*\+(?=[\w.])|^\s+|\s+$/g,t=function(e,n,r,o){var t,s=r?n:n.replace(R,"");if(S.test(s))e.s=isNaN(s)?null:s<0?-1:1,e.c=e.e=null;else{if(!r&&(s=s.replace(x,function(e,n,r){return t="x"==(r=r.toLowerCase())?16:"b"==r?2:8,o&&o!=t?e:n}),o&&(t=o,s=s.replace(E,"$1").replace(N,"0.$1")),n!=s))return new G(s,t);if(G.DEBUG)throw Error(l+"Not a"+(o?" base "+o:"")+" number: "+n);e.c=e.e=e.s=null}},C.absoluteValue=C.abs=function(){var e=new G(this);return e.s<0&&(e.s=1),e},C.comparedTo=function(e,n){return j(this,new G(e,n))},C.decimalPlaces=C.dp=function(e,n){var r,o,t,s=this;if(null!=e)return y(e,0,_),null==n?n=L:y(n,0,8),W(new G(s),e+s.e+1,n);if(!(r=s.c))return null;if(o=((t=r.length-1)-g(this.e/f))*f,t=r[t])for(;t%10==0;t/=10,o--);return o<0&&(o=0),o},C.dividedBy=C.div=function(e,n){return r(this,new G(e,n),I,L)},C.dividedToIntegerBy=C.idiv=function(e,n){return r(this,new G(e,n),0,1)},C.exponentiatedBy=C.pow=function(e,n){var r,o,t,s,i,c,d,h=this;if((e=new G(e)).c&&!e.isInteger())throw Error(l+"Exponent not an integer: "+e);if(null!=n&&(n=new G(n)),s=e.e>14,!h.c||!h.c[0]||1==h.c[0]&&!h.e&&1==h.c.length||!e.c||!e.c[0])return d=new G(Math.pow(+h.valueOf(),s?2-w(e):+e)),n?d.mod(n):d;if(i=e.s<0,n){if(n.c?!n.c[0]:!n.s)return new G(NaN);(o=!i&&h.isInteger()&&n.isInteger())&&(h=h.mod(n))}else{if(e.e>9&&(h.e>0||h.e<-1||(0==h.e?h.c[0]>1||s&&h.c[1]>=24e7:h.c[0]<8e13||s&&h.c[0]<=9999975e7)))return t=h.s<0&&w(e)?-0:0,h.e>-1&&(t=1/t),new G(i?1/t:t);k&&(t=u(k/f+2))}for(s?(r=new G(.5),c=w(e)):c=e%2,i&&(e.s=1),d=new G(M);;){if(c){if(!(d=d.times(h)).c)break;t?d.c.length>t&&(d.c.length=t):o&&(d=d.mod(n))}if(s){if(W(e=e.times(r),e.e+1,1),!e.c[0])break;s=e.e>14,c=w(e)}else{if(!(e=a(e/2)))break;c=e%2}h=h.times(h),t?h.c&&h.c.length>t&&(h.c.length=t):o&&(h=h.mod(n))}return o?d:(i&&(d=M.div(d)),n?d.mod(n):t?W(d,k,L,void 0):d)},C.integerValue=function(e){var n=new G(this);return null==e?e=L:y(e,0,8),W(n,n.e+1,e)},C.isEqualTo=C.eq=function(e,n){return 0===j(this,new G(e,n))},C.isFinite=function(){return!!this.c},C.isGreaterThan=C.gt=function(e,n){return j(this,new G(e,n))>0},C.isGreaterThanOrEqualTo=C.gte=function(e,n){return 1===(n=j(this,new G(e,n)))||0===n},C.isInteger=function(){return!!this.c&&g(this.e/f)>this.c.length-2},C.isLessThan=C.lt=function(e,n){return j(this,new G(e,n))<0},C.isLessThanOrEqualTo=C.lte=function(e,n){return-1===(n=j(this,new G(e,n)))||0===n},C.isNaN=function(){return!this.s},C.isNegative=function(){return this.s<0},C.isPositive=function(){return this.s>0},C.isZero=function(){return!!this.c&&0==this.c[0]},C.minus=function(e,n){var r,o,t,s,i=this,u=i.s;if(n=(e=new G(e,n)).s,!u||!n)return new G(NaN);if(u!=n)return e.s=-n,i.plus(e);var a=i.e/f,l=e.e/f,c=i.c,h=e.c;if(!a||!l){if(!c||!h)return c?(e.s=-n,e):new G(h?i:NaN);if(!c[0]||!h[0])return h[0]?(e.s=-n,e):new G(c[0]?i:3==L?-0:0)}if(a=g(a),l=g(l),c=c.slice(),u=a-l){for((s=u<0)?(u=-u,t=c):(l=a,t=h),t.reverse(),n=u;n--;t.push(0));t.reverse()}else for(o=(s=(u=c.length)<(n=h.length))?u:n,u=n=0;n<o;n++)if(c[n]!=h[n]){s=c[n]<h[n];break}if(s&&(t=c,c=h,h=t,e.s=-e.s),(n=(o=h.length)-(r=c.length))>0)for(;n--;c[r++]=0);for(n=d-1;o>u;){if(c[--o]<h[o]){for(r=o;r&&!c[--r];c[r]=n);--c[r],c[o]+=d}c[o]-=h[o]}for(;0==c[0];c.splice(0,1),--l);return c[0]?V(e,c,l):(e.s=3==L?-1:1,e.c=[e.e=0],e)},C.modulo=C.mod=function(e,n){var o,t,s=this;return e=new G(e,n),!s.c||!e.s||e.c&&!e.c[0]?new G(NaN):!e.c||s.c&&!s.c[0]?new G(s):(9==F?(t=e.s,e.s=1,o=r(s,e,0,3),e.s=t,o.s*=t):o=r(s,e,0,F),(e=s.minus(o.times(e))).c[0]||1!=F||(e.s=s.s),e)},C.multipliedBy=C.times=function(e,n){var r,o,t,s,i,u,a,l,c,h,p,_,v,j,y,b=this,w=b.c,O=(e=new G(e,n)).c;if(!(w&&O&&w[0]&&O[0]))return!b.s||!e.s||w&&!w[0]&&!O||O&&!O[0]&&!w?e.c=e.e=e.s=null:(e.s*=b.s,w&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(o=g(b.e/f)+g(e.e/f),e.s*=b.s,(a=w.length)<(h=O.length)&&(v=w,w=O,O=v,t=a,a=h,h=t),t=a+h,v=[];t--;v.push(0));for(j=d,y=m,t=h;--t>=0;){for(r=0,p=O[t]%y,_=O[t]/y|0,s=t+(i=a);s>t;)r=((l=p*(l=w[--i]%y)+(u=_*l+(c=w[i]/y|0)*p)%y*y+v[s]+r)/j|0)+(u/y|0)+_*c,v[s--]=l%j;v[s]=r}return r?++o:v.splice(0,1),V(e,v,o)},C.negated=function(){var e=new G(this);return e.s=-e.s||null,e},C.plus=function(e,n){var r,o=this,t=o.s;if(n=(e=new G(e,n)).s,!t||!n)return new G(NaN);if(t!=n)return e.s=-n,o.minus(e);var s=o.e/f,i=e.e/f,u=o.c,a=e.c;if(!s||!i){if(!u||!a)return new G(t/0);if(!u[0]||!a[0])return a[0]?e:new G(u[0]?o:0*t)}if(s=g(s),i=g(i),u=u.slice(),t=s-i){for(t>0?(i=s,r=a):(t=-t,r=u),r.reverse();t--;r.push(0));r.reverse()}for((t=u.length)-(n=a.length)<0&&(r=a,a=u,u=r,n=t),t=0;n;)t=(u[--n]=u[n]+a[n]+t)/d|0,u[n]=d===u[n]?0:u[n]%d;return t&&(u=[t].concat(u),++i),V(e,u,i)},C.precision=C.sd=function(e,n){var r,o,t,s=this;if(null!=e&&e!==!!e)return y(e,1,_),null==n?n=L:y(n,0,8),W(new G(s),e,n);if(!(r=s.c))return null;if(o=(t=r.length-1)*f+1,t=r[t]){for(;t%10==0;t/=10,o--);for(t=r[0];t>=10;t/=10,o++);}return e&&s.e+1>o&&(o=s.e+1),o},C.shiftedBy=function(e){return y(e,-h,h),this.times("1e"+e)},C.squareRoot=C.sqrt=function(){var e,n,o,t,s,i=this,u=i.c,a=i.s,l=i.e,c=I+4,d=new G("0.5");if(1!==a||!u||!u[0])return new G(!a||a<0&&(!u||u[0])?NaN:u?i:1/0);if(0==(a=Math.sqrt(+i))||a==1/0?(((n=v(u)).length+l)%2==0&&(n+="0"),a=Math.sqrt(n),l=g((l+1)/2)-(l<0||l%2),o=new G(n=a==1/0?"1e"+l:(n=a.toExponential()).slice(0,n.indexOf("e")+1)+l)):o=new G(a+""),o.c[0])for((a=(l=o.e)+c)<3&&(a=0);;)if(s=o,o=d.times(s.plus(r(i,s,c,1))),v(s.c).slice(0,a)===(n=v(o.c)).slice(0,a)){if(o.e<l&&--a,"9999"!=(n=n.slice(a-3,a+1))&&(t||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(W(o,o.e+I+2,1),e=!o.times(o).eq(i));break}if(!t&&(W(s,s.e+I+2,0),s.times(s).eq(i))){o=s;break}c+=4,a+=4,t=1}return W(o,o.e+I+1,L,e)},C.toExponential=function(e,n){return null!=e&&(y(e,0,_),e++),z(this,e,n,1)},C.toFixed=function(e,n){return null!=e&&(y(e,0,_),e=e+this.e+1),z(this,e,n)},C.toFormat=function(e,n){var r=this.toFixed(e,n);if(this.c){var o,t=r.split("."),s=+q.groupSize,i=+q.secondaryGroupSize,u=q.groupSeparator,a=t[0],l=t[1],c=this.s<0,d=c?a.slice(1):a,f=d.length;if(i&&(o=s,s=i,i=o,f-=o),s>0&&f>0){for(o=f%s||s,a=d.substr(0,o);o<f;o+=s)a+=u+d.substr(o,s);i>0&&(a+=u+d.slice(o)),c&&(a="-"+a)}r=l?a+q.decimalSeparator+((i=+q.fractionGroupSize)?l.replace(new RegExp("\\d{"+i+"}\\B","g"),"$&"+q.fractionGroupSeparator):l):a}return r},C.toFraction=function(e){var n,o,t,s,i,u,a,c,d,h,m,_,g=this,j=g.c;if(null!=e&&(!(c=new G(e)).isInteger()&&(c.c||1!==c.s)||c.lt(M)))throw Error(l+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+e);if(!j)return g.toString();for(o=new G(M),h=t=new G(M),s=d=new G(M),_=v(j),u=o.e=_.length-g.e-1,o.c[0]=p[(a=u%f)<0?f+a:a],e=!e||c.comparedTo(o)>0?u>0?o:h:c,a=T,T=1/0,c=new G(_),d.c[0]=0;m=r(c,o,0,1),1!=(i=t.plus(m.times(s))).comparedTo(e);)t=s,s=i,h=d.plus(m.times(i=h)),d=i,o=c.minus(m.times(i=o)),c=i;return i=r(e.minus(t),s,0,1),d=d.plus(i.times(h)),t=t.plus(i.times(s)),d.s=h.s=g.s,n=r(h,s,u*=2,L).minus(g).abs().comparedTo(r(d,t,u,L).minus(g).abs())<1?[h.toString(),s.toString()]:[d.toString(),t.toString()],T=a,n},C.toNumber=function(){return+this},C.toPrecision=function(e,n){return null!=e&&y(e,1,_),z(this,e,n,2)},C.toString=function(e){var n,r=this,t=r.s,s=r.e;return null===s?t?(n="Infinity",t<0&&(n="-"+n)):n="NaN":(n=v(r.c),null==e?n=s<=U||s>=B?O(n,s):A(n,s,"0"):(y(e,2,$.length,"Base"),n=o(A(n,s,"0"),10,e,t,!0)),t<0&&r.c[0]&&(n="-"+n)),n},C.valueOf=C.toJSON=function(){var e,n=this,r=n.e;return null===r?n.toString():(e=v(n.c),e=r<=U||r>=B?O(e,r):A(e,r,"0"),n.s<0?"-"+e:e)},C._isBigNumber=!0,null!=n&&G.set(n),G}()).default=s.BigNumber=s,void 0===(o=function(){return s}.call(n,r,n,e))||(e.exports=o)}()},"./node_modules/lodash/_arrayAggregator.js":function(e,n){e.exports=function(e,n,r,o){for(var t=-1,s=null==e?0:e.length;++t<s;){var i=e[t];n(o,i,r(i),e)}return o}},"./node_modules/lodash/_arrayShuffle.js":function(e,n,r){var o=r("./node_modules/lodash/_copyArray.js"),t=r("./node_modules/lodash/_shuffleSelf.js");e.exports=function(e){return t(o(e))}},"./node_modules/lodash/_baseAggregator.js":function(e,n,r){var o=r("./node_modules/lodash/_baseEach.js");e.exports=function(e,n,r,t){return o(e,function(e,o,s){n(t,e,r(e),s)}),t}},"./node_modules/lodash/_baseDifference.js":function(e,n,r){var o=r("./node_modules/lodash/_SetCache.js"),t=r("./node_modules/lodash/_arrayIncludes.js"),s=r("./node_modules/lodash/_arrayIncludesWith.js"),i=r("./node_modules/lodash/_arrayMap.js"),u=r("./node_modules/lodash/_baseUnary.js"),a=r("./node_modules/lodash/_cacheHas.js"),l=200;e.exports=function(e,n,r,c){var d=-1,f=t,h=!0,p=e.length,m=[],_=n.length;if(!p)return m;r&&(n=i(n,u(r))),c?(f=s,h=!1):n.length>=l&&(f=a,h=!1,n=new o(n));e:for(;++d<p;){var g=e[d],v=null==r?g:r(g);if(g=c||0!==g?g:0,h&&v==v){for(var j=_;j--;)if(n[j]===v)continue e;m.push(g)}else f(n,v,c)||m.push(g)}return m}},"./node_modules/lodash/_baseOrderBy.js":function(e,n,r){var o=r("./node_modules/lodash/_arrayMap.js"),t=r("./node_modules/lodash/_baseIteratee.js"),s=r("./node_modules/lodash/_baseMap.js"),i=r("./node_modules/lodash/_baseSortBy.js"),u=r("./node_modules/lodash/_baseUnary.js"),a=r("./node_modules/lodash/_compareMultiple.js"),l=r("./node_modules/lodash/identity.js");e.exports=function(e,n,r){var c=-1;n=o(n.length?n:[l],u(t));var d=s(e,function(e,r,t){return{criteria:o(n,function(n){return n(e)}),index:++c,value:e}});return i(d,function(e,n){return a(e,n,r)})}},"./node_modules/lodash/_baseRandom.js":function(e,n){var r=Math.floor,o=Math.random;e.exports=function(e,n){return e+r(o()*(n-e+1))}},"./node_modules/lodash/_baseShuffle.js":function(e,n,r){var o=r("./node_modules/lodash/_shuffleSelf.js"),t=r("./node_modules/lodash/values.js");e.exports=function(e){return o(t(e))}},"./node_modules/lodash/_baseSortBy.js":function(e,n){e.exports=function(e,n){var r=e.length;for(e.sort(n);r--;)e[r]=e[r].value;return e}},"./node_modules/lodash/_compareAscending.js":function(e,n,r){var o=r("./node_modules/lodash/isSymbol.js");e.exports=function(e,n){if(e!==n){var r=void 0!==e,t=null===e,s=e==e,i=o(e),u=void 0!==n,a=null===n,l=n==n,c=o(n);if(!a&&!c&&!i&&e>n||i&&u&&l&&!a&&!c||t&&u&&l||!r&&l||!s)return 1;if(!t&&!i&&!c&&e<n||c&&r&&s&&!t&&!i||a&&r&&s||!u&&s||!l)return-1}return 0}},"./node_modules/lodash/_compareMultiple.js":function(e,n,r){var o=r("./node_modules/lodash/_compareAscending.js");e.exports=function(e,n,r){for(var t=-1,s=e.criteria,i=n.criteria,u=s.length,a=r.length;++t<u;){var l=o(s[t],i[t]);if(l)return t>=a?l:l*("desc"==r[t]?-1:1)}return e.index-n.index}},"./node_modules/lodash/_createAggregator.js":function(e,n,r){var o=r("./node_modules/lodash/_arrayAggregator.js"),t=r("./node_modules/lodash/_baseAggregator.js"),s=r("./node_modules/lodash/_baseIteratee.js"),i=r("./node_modules/lodash/isArray.js");e.exports=function(e,n){return function(r,u){var a=i(r)?o:t,l=n?n():{};return a(r,e,s(u,2),l)}}},"./node_modules/lodash/_createCaseFirst.js":function(e,n,r){var o=r("./node_modules/lodash/_castSlice.js"),t=r("./node_modules/lodash/_hasUnicode.js"),s=r("./node_modules/lodash/_stringToArray.js"),i=r("./node_modules/lodash/toString.js");e.exports=function(e){return function(n){n=i(n);var r=t(n)?s(n):void 0,u=r?r[0]:n.charAt(0),a=r?o(r,1).join(""):n.slice(1);return u[e]()+a}}},"./node_modules/lodash/_iteratorToArray.js":function(e,n){e.exports=function(e){for(var n,r=[];!(n=e.next()).done;)r.push(n.value);return r}},"./node_modules/lodash/_shuffleSelf.js":function(e,n,r){var o=r("./node_modules/lodash/_baseRandom.js");e.exports=function(e,n){var r=-1,t=e.length,s=t-1;for(n=void 0===n?t:n;++r<n;){var i=o(r,s),u=e[i];e[i]=e[r],e[r]=u}return e.length=n,e}},"./node_modules/lodash/camelCase.js":function(e,n,r){var o=r("./node_modules/lodash/capitalize.js"),t=r("./node_modules/lodash/_createCompounder.js")(function(e,n,r){return n=n.toLowerCase(),e+(r?o(n):n)});e.exports=t},"./node_modules/lodash/capitalize.js":function(e,n,r){var o=r("./node_modules/lodash/toString.js"),t=r("./node_modules/lodash/upperFirst.js");e.exports=function(e){return t(o(e).toLowerCase())}},"./node_modules/lodash/cloneDeep.js":function(e,n,r){var o=r("./node_modules/lodash/_baseClone.js"),t=1,s=4;e.exports=function(e){return o(e,t|s)}},"./node_modules/lodash/difference.js":function(e,n,r){var o=r("./node_modules/lodash/_baseDifference.js"),t=r("./node_modules/lodash/_baseFlatten.js"),s=r("./node_modules/lodash/_baseRest.js"),i=r("./node_modules/lodash/isArrayLikeObject.js"),u=s(function(e,n){return i(e)?o(e,t(n,1,i,!0)):[]});e.exports=u},"./node_modules/lodash/findLastIndex.js":function(e,n,r){var o=r("./node_modules/lodash/_baseFindIndex.js"),t=r("./node_modules/lodash/_baseIteratee.js"),s=r("./node_modules/lodash/toInteger.js"),i=Math.max,u=Math.min;e.exports=function(e,n,r){var a=null==e?0:e.length;if(!a)return-1;var l=a-1;return void 0!==r&&(l=s(r),l=r<0?i(a+l,0):u(l,a-1)),o(e,t(n,3),l,!0)}},"./node_modules/lodash/first.js":function(e,n,r){e.exports=r("./node_modules/lodash/head.js")},"./node_modules/lodash/forEach.js":function(e,n,r){var o=r("./node_modules/lodash/_arrayEach.js"),t=r("./node_modules/lodash/_baseEach.js"),s=r("./node_modules/lodash/_castFunction.js"),i=r("./node_modules/lodash/isArray.js");e.exports=function(e,n){return(i(e)?o:t)(e,s(n))}},"./node_modules/lodash/head.js":function(e,n){e.exports=function(e){return e&&e.length?e[0]:void 0}},"./node_modules/lodash/isEqualWith.js":function(e,n,r){var o=r("./node_modules/lodash/_baseIsEqual.js");e.exports=function(e,n,r){var t=(r="function"==typeof r?r:void 0)?r(e,n):void 0;return void 0===t?o(e,n,void 0,r):!!t}},"./node_modules/lodash/keyBy.js":function(e,n,r){var o=r("./node_modules/lodash/_baseAssignValue.js"),t=r("./node_modules/lodash/_createAggregator.js")(function(e,n,r){o(e,r,n)});e.exports=t},"./node_modules/lodash/shuffle.js":function(e,n,r){var o=r("./node_modules/lodash/_arrayShuffle.js"),t=r("./node_modules/lodash/_baseShuffle.js"),s=r("./node_modules/lodash/isArray.js");e.exports=function(e){return(s(e)?o:t)(e)}},"./node_modules/lodash/sortBy.js":function(e,n,r){var o=r("./node_modules/lodash/_baseFlatten.js"),t=r("./node_modules/lodash/_baseOrderBy.js"),s=r("./node_modules/lodash/_baseRest.js"),i=r("./node_modules/lodash/_isIterateeCall.js"),u=s(function(e,n){if(null==e)return[];var r=n.length;return r>1&&i(e,n[0],n[1])?n=[]:r>2&&i(n[0],n[1],n[2])&&(n=[n[0]]),t(e,o(n,1),[])});e.exports=u},"./node_modules/lodash/toArray.js":function(e,n,r){var o=r("./node_modules/lodash/_Symbol.js"),t=r("./node_modules/lodash/_copyArray.js"),s=r("./node_modules/lodash/_getTag.js"),i=r("./node_modules/lodash/isArrayLike.js"),u=r("./node_modules/lodash/isString.js"),a=r("./node_modules/lodash/_iteratorToArray.js"),l=r("./node_modules/lodash/_mapToArray.js"),c=r("./node_modules/lodash/_setToArray.js"),d=r("./node_modules/lodash/_stringToArray.js"),f=r("./node_modules/lodash/values.js"),h="[object Map]",p="[object Set]",m=o?o.iterator:void 0;e.exports=function(e){if(!e)return[];if(i(e))return u(e)?d(e):t(e);if(m&&e[m])return a(e[m]());var n=s(e);return(n==h?l:n==p?c:f)(e)}},"./node_modules/lodash/union.js":function(e,n,r){var o=r("./node_modules/lodash/_baseFlatten.js"),t=r("./node_modules/lodash/_baseRest.js"),s=r("./node_modules/lodash/_baseUniq.js"),i=r("./node_modules/lodash/isArrayLikeObject.js"),u=t(function(e){return s(o(e,1,i,!0))});e.exports=u},"./node_modules/lodash/uniqBy.js":function(e,n,r){var o=r("./node_modules/lodash/_baseIteratee.js"),t=r("./node_modules/lodash/_baseUniq.js");e.exports=function(e,n){return e&&e.length?t(e,o(n,2)):[]}},"./node_modules/lodash/uniqWith.js":function(e,n,r){var o=r("./node_modules/lodash/_baseUniq.js");e.exports=function(e,n){return n="function"==typeof n?n:void 0,e&&e.length?o(e,void 0,n):[]}},"./node_modules/lodash/upperFirst.js":function(e,n,r){var o=r("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");e.exports=o},"./node_modules/query-string/index.js":function(e,n,r){"use strict";var o=r("./node_modules/strict-uri-encode/index.js"),t=r("./node_modules/object-assign/index.js");function s(e,n){return n.encode?n.strict?o(e):encodeURIComponent(e):e}n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e,n){var r=function(e){var n;switch(e.arrayFormat){case"index":return function(e,r,o){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===o[e]&&(o[e]={}),o[e][n[1]]=r):o[e]=r};case"bracket":return function(e,r,o){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==o[e]?o[e]=[].concat(o[e],r):o[e]=[r]:o[e]=r};default:return function(e,n,r){void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=n}}}(n=t({arrayFormat:"none"},n)),o=Object.create(null);return"string"!=typeof e?o:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.replace(/\+/g," ").split("="),t=n.shift(),s=n.length>0?n.join("="):void 0;s=void 0===s?null:decodeURIComponent(s),r(decodeURIComponent(t),s,o)}),Object.keys(o).sort().reduce(function(e,n){var r=o[n];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[n]=function e(n){return Array.isArray(n)?n.sort():"object"==typeof n?e(Object.keys(n)).sort(function(e,n){return Number(e)-Number(n)}).map(function(e){return n[e]}):n}(r):e[n]=r,e},Object.create(null))):o},n.stringify=function(e,n){var r=function(e){switch(e.arrayFormat){case"index":return function(n,r,o){return null===r?[s(n,e),"[",o,"]"].join(""):[s(n,e),"[",s(o,e),"]=",s(r,e)].join("")};case"bracket":return function(n,r){return null===r?s(n,e):[s(n,e),"[]=",s(r,e)].join("")};default:return function(n,r){return null===r?s(n,e):[s(n,e),"=",s(r,e)].join("")}}}(n=t({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map(function(o){var t=e[o];if(void 0===t)return"";if(null===t)return s(o,n);if(Array.isArray(t)){var i=[];return t.slice().forEach(function(e){void 0!==e&&i.push(r(o,e,i.length))}),i.join("&")}return s(o,n)+"="+s(t,n)}).filter(function(e){return e.length>0}).join("&"):""}},"./node_modules/strict-uri-encode/index.js":function(e,n,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}}}]);
//# sourceMappingURL=vendors~Governance~Reddit.879d2922bc60b1a9a857.js.map

}
/*
     FILE ARCHIVED ON 00:09:11 May 01, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:59:47 Feb 20, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.058
  cdx.remote: 0.092
  esindex: 0.011
  LoadShardBlock: 161.661 (6)
  PetaboxLoader3.datanode: 221.462 (8)
  load_resource: 216.153 (2)
  PetaboxLoader3.resolve: 103.741 (2)
*/