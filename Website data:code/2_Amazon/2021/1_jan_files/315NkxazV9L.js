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

'use strict';mix_d("DealsSolitaireCards__deals-shoveler-v2:deals-shoveler-v2__dXOw0gfQ",["exports","tslib","@c/dom","@p/a-truncate"],function(u,r,v,x){function w(b){return b&&"object"===typeof b&&"default"in b?b:{"default":b}}var t=w(v),y=w(x),n={day:function(){return 24}},l={per:{hour:function(){return 60},day:function(){return l.per.hour()*n.day()}}},m={per:{minute:function(){return 60},hour:function(){return m.per.minute()*l.per.hour()},day:function(){return m.per.hour()*n.day()}}},d={per:{second:function(){return 1E3},
minute:function(){return d.per.second()*m.per.minute()},hour:function(){return d.per.minute()*l.per.hour()},day:function(){return d.per.hour()*n.day()}}},h={per:{millisecond:function(){return 1E4},second:function(){return h.per.millisecond()*d.per.second()},minute:function(){return h.per.second()*m.per.minute()},hour:function(){return h.per.minute()*l.per.hour()},day:function(){return h.per.hour()*n.day()}}},k;(function(b){b[b.Ticks=0]="Ticks";b[b.Milliseconds=1]="Milliseconds";b[b.Seconds=2]="Seconds";
b[b.Minutes=3]="Minutes";b[b.Hours=4]="Hours";b[b.Days=5]="Days"})(k||(k={}));var z=function(b,a){switch(a){case k.Days:return b/d.per.day();case k.Hours:return b/d.per.hour();case k.Minutes:return b/d.per.minute();case k.Seconds:return b/d.per.second();case k.Milliseconds:return b;case k.Ticks:return b*h.per.millisecond();default:throw Error("Invalid TimeUnit.");}},q=function(b){function a(){for(var c=[],f=0;f<arguments.length;f++)c[f]=arguments[f];c=b.call(this,1<c.length?a.millisecondsFromTime(c[0]||
0,c[1]||0,2<c.length&&c[2]||0,3<c.length&&c[3]||0):0<c.length&&c[0]||0)||this;f=d.per;var g=Math.abs(c.getTotalMilliseconds()),e=Math.floor(g);c.tick=(g-e)*h.per.millisecond();c.day=e/f.day()|0;e-=c.day*d.per.day();c.hour=e/f.hour()|0;e-=c.hour*f.hour();c.minute=e/f.minute()|0;e-=c.minute*f.minute();c.second=e/f.second()|0;e-=c.second*f.second();c.millisecond=e;c;return c}r.__extends(a,b);a.prototype.toString=function(){var a=[];this.day&&a.push(p(this.day,"day"));this.hour&&a.push(p(this.hour,"hour"));
this.minute&&a.push(p(this.minute,"minute"));this.second&&a.push(p(this.second,"second"));1<a.length&&a.splice(a.length-1,0,"and");return a.join(", ").replace(", and, "," and ")};a.toMilliseconds=function(b){return a.millisecondsFromTime(b.hour,b.minute,b.second,b.millisecond)};a.from=function(b,f,g,e){void 0===g&&(g=0);void 0===e&&(e=0);return new a(b,f,g,e)};a.millisecondsFromTime=function(a,b,g,e){void 0===g&&(g=0);void 0===e&&(e=0);a*=l.per.hour();a=(a+b)*m.per.minute();a+=g;a*=d.per.second();
return a+=e};return a}(function(){function b(a){void 0===a&&(a=0);this._quantity=a;this.total={ticks:a*h.per.millisecond(),milliseconds:a,seconds:a/d.per.second(),minutes:a/d.per.minute(),hours:a/d.per.hour(),days:a/d.per.day()}}Object.defineProperty(b.prototype,"direction",{get:function(){return 0<this.getTotalMilliseconds()?1:0>this.getTotalMilliseconds()?-1:0},enumerable:!1,configurable:!0});b.prototype.getTotalMilliseconds=function(){return this._quantity};b.prototype.equals=function(a){return a&&
a.total?this.getTotalMilliseconds()===a.total.milliseconds:!1};b.prototype.getTotal=function(a){return z(this.getTotalMilliseconds(),a)};b.getTotalMillisecondsFrom=function(a){return a?(a.days||0)*d.per.day()+(a.hours||0)*d.per.hour()+(a.minutes||0)*d.per.minute()+(a.seconds||0)*d.per.second()+(a.milliseconds||0)+(a.ticks||0)/h.per.millisecond():0};return b}()),p=function(b,a){1!==Math.abs(b)&&(a+="s");return b+" "+a},A=function(){function b(a,b,f,g,e){void 0===b&&(b=Infinity);void 0===f&&(f=a);this._interval=
a;this._maxCount=b;this._initialDelay=f;this._onComplete=g;this._onCountDown=e;this._count=0;if(null===a)throw Error("interval Must be a valid number.");if(0>a)throw Error("interval Cannot be negative.");}Object.defineProperty(b.prototype,"count",{get:function(){return this._count},enumerable:!1,configurable:!0});Object.defineProperty(b.prototype,"isRunning",{get:function(){return!!this._cancel},enumerable:!1,configurable:!0});b.prototype.start=function(){if(!this._cancel&&this._count<this._maxCount){var a=
setTimeout(this._onTick,this._interval+this._initialDelay,this,!1);this._cancel=function(){clearTimeout(a)}}};b.prototype.stop=function(){this.cancel()};b.prototype.reset=function(){this.stop();this._count=0};b.prototype.complete=function(){this.cancel();this._onComplete();return this._count};b.prototype.cancel=function(){return this._cancel?(this._cancel(),this._cancel=void 0,!0):!1};b.prototype._onTick=function(a,b){var c=a._count++,g=a._maxCount,e=a._count>=g;b&&(a.cancel(),a.start());c<g&&a._onCountDown(a._interval*
(g-a._count),a._interval*a.count);if(e)a.stop(),a._onComplete();else{var d=setTimeout(a._onTick,a._interval,a,!1);a._cancel=function(){clearTimeout(d)}}};b.startNew=function(a,c,f,d,e){void 0===c&&(c=Infinity);void 0===f&&(f=a);a=new b(a,c,f,d,e);a.start();return a};return b}(),C=function(){function b(a,b){this.timerLabelElement=a.getElementsByClassName("gwTimerLabel")[0];this.timerAriaLabelElement=a.getElementsByClassName("gwTimerAriaLabel")[0];this.sharedViewModel=JSON.parse(a.dataset.sharedModel);
this.countDownTimerLabel={ariaLabel:this.timerAriaLabelElement.innerHTML,label:this.timerLabelElement.innerHTML};this.onCountDownCallback=this.onCountDownCallback.bind(this);this.onCompleteCallback=this.onCompleteCallback.bind(this);var c=this.sharedViewModel.clockTime;c=q.millisecondsFromTime(c.hour,c.minute,c.second);var d=b.interval;this.timer=new A(d,Math.floor(c/d),b.initialDelay,this.onCompleteCallback,this.onCountDownCallback);this.remainingClockTime=new q(c);this.remainingClockTimeDisplay=
new B(a)}b.prototype.start=function(){this.timer.start()};b.prototype.updateTimer=function(){this.updateLabel();this.remainingClockTimeDisplay.updateClockTime(this.remainingClockTime)};b.prototype.updateLabel=function(){this.timerLabelElement.innerHTML=this.countDownTimerLabel.label;this.timerAriaLabelElement.innerHTML=this.countDownTimerLabel.ariaLabel};b.prototype.onCountDownCallback=function(a,b){this.remainingClockTime=new q(a);var c=this.sharedViewModel.timeFormattedLabel;a=this.remainingClockTime;
b=c.formattedString;c=c.placeHolders;b=b.replace(c.hour,a.hour.toString());b=b.replace(c.minute,a.minute.toString());b=b.replace(c.second,a.second.toString());this.countDownTimerLabel={ariaLabel:b,label:this.countDownTimerLabel.label};this.updateTimer()};b.prototype.onCompleteCallback=function(){this.countDownTimerLabel=this.sharedViewModel.countDownEndLabel;this.remainingClockTime=new q(0);this.updateTimer()};b.secondsCountDownTimer=function(a){return b.from(a,{initialDelay:0,interval:1E3})};b.initializeSecondsCountDownTimers=
function(a){var c=[];b.isTimerElement(a)?c.push(b.secondsCountDownTimer(a)):Array.prototype.slice.call(a.getElementsByClassName("gwTimer")).forEach(function(a){a=b.secondsCountDownTimer(a);a.start();c.push(a)});return c};b.isTimerElement=function(a){return a.classList.contains("gwTimer")?!0:!1};b.from=function(a,c){return new b(a,c)};return b}(),B=function(){function b(a){this.hourElement=a.getElementsByClassName("gwTimerHour")[0];this.minuteElement=a.getElementsByClassName("gwTimerMinute")[0];this.secondElement=
a.getElementsByClassName("gwTimerSecond")[0];a=a.getElementsByClassName("gwTimerSeparator");this.minuteSeparatorElement=a[0];this.secondSeparatorElement=a[1]}b.prototype.updateClockTime=function(a){0<a.hour?(this.hourElement.innerHTML=("0"+a.hour.toString()).slice(-2),this.minuteSeparatorElement.classList.remove("aok-hidden")):(this.hourElement.innerHTML="",this.minuteSeparatorElement.classList.add("aok-hidden"));0<a.minute||0<a.hour?(this.minuteElement.innerHTML=("0"+a.minute.toString()).slice(-2),
this.secondSeparatorElement.classList.remove("aok-hidden")):(this.secondSeparatorElement.classList.add("aok-hidden"),this.minuteElement.innerHTML="");this.secondElement.innerHTML=0<a.second||0<a.hour||0<a.minute?("0"+a.second.toString()).slice(-2):""};return b}(),D=function(b){Array.prototype.slice.call(b.getElementsByClassName("dealAvailabilityMessage")).forEach(function(a){a.getElementsByClassName("staticMessage")[0]||C.initializeSecondsCountDownTimers(a)})},E=function(b){Array.prototype.slice.call(b.getElementsByClassName("a-truncate")).forEach(function(a){return y["default"].get(v.unscope(a)).update()})};
u._operationNames=[];u.card=function(){return r.__awaiter(void 0,void 0,void 0,function(){var b;return r.__generator(this,function(a){b=t["default"].cardRoot.getAttribute("id");window.P.when(b+"-lazy-cards-loaded").execute(function(){D(t["default"].cardRoot);E(t["default"].cardRoot)});return[2]})})}});


}
/*
     FILE ARCHIVED ON 12:36:26 Jan 01, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:12:48 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 91.175
  exclusion.robots: 0.132
  exclusion.robots.policy: 0.117
  cdx.remote: 0.096
  esindex: 0.014
  LoadShardBlock: 52.384 (3)
  PetaboxLoader3.datanode: 77.295 (4)
  load_resource: 169.07
  PetaboxLoader3.resolve: 54.073
*/