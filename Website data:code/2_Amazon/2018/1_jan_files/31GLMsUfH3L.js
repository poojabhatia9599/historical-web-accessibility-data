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

var a11y=a11y||{};a11y.isDebugMode=!1;a11y.log=function(a){a11y.isDebugMode&&console.log("[A11Y] ["+a+"]")};
a11y.Utils=function(){var a={addListener:null,removeListener:null,isStorageSupported:null};"function"===typeof window.addEventListener?(a.addListener=function(a,c,e){a.addEventListener(c,e,!1)},a.removeListener=function(a,c,e){a.removeEventListener(c,e,!1)}):"function"===typeof document.attachEvent?(a.addListener=function(a,c,e){a.attachEvent("on"+c,e)},a.removeListener=function(a,c,e){a.detachEvent("on"+c,e)}):(a.addListener=function(a,c,e){a["on"+c]=e},a.removeListener=function(a,c,e){a["on"+c]=
null});a.isStorageSupported=function(){try{return localStorage.setItem("storage","storage"),localStorage.removeItem("storage"),!0}catch(a){return!1}};a.isInternetExplorerLowerOrEqualsTo8=function(){return window.attachEvent&&!window.addEventListener?!0:!1};return a}();a11y.Observable=function(){var a=[];this.getObservers=function(){return a}};a11y.Observable.prototype.addObserver=function(a,b){var c=this.getObservers();c[a]||(c[a]=[]);c[a].push(b)};
a11y.Observable.prototype.notifyAll=function(a,b){var c=this.getObservers();c[a]&&c[a].forEach(function(a,c){a(b)})};a11y.MouseEventWrapper=function(a,b){this.originalEvent=a;this.which=a.which};a11y.stepFunction=function(a){var b=0;if(a.mouseMoved)return-1;switch(a.eventType){case "click":b=1;break;case "middleClick":case "rightClick":b=-1;break;case "keypressed":case "focus":b=1}return b};a11y.LinearClassifier=function(a){this.threshold=a};
a11y.LinearClassifier.prototype.getClassificationOutput=function(a){return a>=this.threshold?1:0};a11y.CONFIG=function(){var a={MAX_KEY_CODE:222,MOUSE_SAMPLING_PERIOD:100,SCORE_ATTRIBUTION_STRATEGY:a11y.stepFunction,SESSION_CLASSIFIER_THRESHOLD:10,FAST_RECOVERY_PARAMETER:2,LOGGER_CONFIGURATION:{handlingEventDelay:100}};return function(b){return a[b]}}();a11y.KeystrokeCmb=function(a,b){this.keyCodes=a;this.command=b};
a11y.KeyLogger=function(a){var b=a||0,c=this,e=[],d=0,f;this.keysToDetect=[];this.defaultCmdFcn={};this.sumKeys=0;this.whiteListedKeyCodes=[];this.keyDownListener=function(a){setTimeout(function(){if(!(void 0===a||0>a.keyCode||a.keyCode>a11y.CONFIG("MAX_KEY_CODE")||(f=a,e[f.keyCode]))){d++;var b=f.target.tagName,g=f.target.type;("TEXTAREA"==b||"INPUT"==b&&("submit"!=g||"button"!=g))&&!c.whiteListedKeyCodes[f.keyCode]||c.sumKeys++;a11y.log("Number of keys pressed so far in browse mode:"+c.sumKeys);
e[a.keyCode]=!0;for(var b=f,g=c.keysToDetect.length,l,m=0;m<g;m++){l=c.keysToDetect[m];for(var n=l.keyCodes,q=!0,p=0;5>p&&q&&p<n.length;)q=0==n[p]?f.metaKey:e[n[p]],p++;5!=p&&q&&d==n.length&&(void 0===l.command?c.defaultCmdFcn(b):l.command(b))}}},b)};this.keyReleasedListener=function(a){setTimeout(function(){0<d&&(e[a.keyCode]=!1,d--)},b)};this.onfocusListener=function(){setTimeout(function(){e={};d=0;a11y.log("changed focus")},b)};a11y.Utils.addListener(document,"keydown",this.keyDownListener);a11y.Utils.addListener(document,
"keyup",this.keyReleasedListener);a11y.Utils.addListener(document,"focus",this.onfocusListener)};a11y.KeyLogger.prototype.getSumKeys=function(){return this.sumKeys};
a11y.KeyLogger.prototype.register=function(a,b){this.keysToDetect=a;this.defaultCmdFcn=b;this.whiteListedKeyCodes[9]=!0;this.whiteListedKeyCodes[27]=!0;this.whiteListedKeyCodes[38]=!0;this.whiteListedKeyCodes[39]=!0;this.whiteListedKeyCodes[40]=!0;this.whiteListedKeyCodes[17]=!0;this.whiteListedKeyCodes[18]=!0;this.whiteListedKeyCodes[45]=!0;for(var c=112;123>=c;c++)this.whiteListedKeyCodes[c]=!0};
a11y.ScoreBoard=function(a,b,c,e,d){a11y.Observable.call(this);this.maxScore=void 0==d?50:d;this.turn=0;this.scoreAttributionStrategy=a;this.threshold=b;this.fastRecoveryParam=c;this.previousScore=0;this.previousDerivative=-1;this.currentScore=void 0==e?0:e;this.downThresholdPeriod=this.upThresholdPeriod=this.currentDerivative=0;this.initialQuantity=void 0;this.decayLength=0;this.alpha=this.decayParam=1;this.scorePeak=0;this.isFastRecoveryEnabled=!0;this.getScore=function(){return this.currentScore};
this.resetScore=function(a){this.score=a};this.getTurn=function(){return this.turn}};a11y.Utils.isInternetExplorerLowerOrEqualsTo8()||(a11y.ScoreBoard.prototype=Object.create(a11y.Observable.prototype),a11y.ScoreBoard.prototype.constructor=a11y.ScoreBoard);
a11y.ScoreBoard.prototype.computePeriods=function(){this.currentScore>=this.threshold&&this.previousScore<this.threshold?this.upThresholdPeriod=1:this.currentScore<this.threshold&&this.previousScore>=this.threshold?this.downThresholdPeriod=1:this.currentScore>=this.threshold?this.upThresholdPeriod++:this.downThresholdPeriod++;a11y.log("upThresholdPeriod: "+this.upThresholdPeriod);a11y.log("downThresholdPeriod: "+this.downThresholdPeriod)};
a11y.ScoreBoard.prototype.isEligibleForFastRecovery=function(a){return this.isFastRecoveryEnabled&&a<this.threshold&&a>this.currentScore&&0>this.currentDerivative&&this.upThresholdPeriod&&this.upThresholdPeriod>=this.fastRecoveryParam*this.downThresholdPeriod};
a11y.ScoreBoard.prototype.updateScore=function(a){var b=0,c=!1;0<this.scoreAttributionStrategy(a,this)?(this.decayLength=0,b=this.currentScore+this.alpha,this.isEligibleForFastRecovery(b)&&(this.scorePeak=b=this.currentScore+this.scorePeak/2,c=!0)):this.currentScore>=this.threshold?(0<=this.currentDerivative&&(this.scorePeak=this.currentScore),this.decayLength+=1,b=this.scorePeak*Math.exp(-this.decayLength*this.decayParam)):b=this.currentScore-this.alpha;this.previousScore=this.currentScore;this.currentScore=
b;this.currentScore>this.maxScore&&(this.currentScore=this.maxScore);0>this.currentScore&&(this.currentScore=0);this.previousDerivative=this.currentDerivative;this.currentDerivative=this.currentScore-this.previousScore;this.computePeriods();this.turn+=1;c&&this.notifyAll("fastRecovery")};
a11y.ScoreBoard.prototype.getState=function(){return{turn:this.turn,currentScore:this.currentScore,currentDerivative:this.currentDerivative,upThresholdPeriod:this.upThresholdPeriod,downThresholdPeriod:this.downThresholdPeriod,decayLenght:this.decayLength,scorePeak:this.scorePeak}};
a11y.ScoreBoard.prototype.setState=function(a){this.turn=a.turn;this.currentScore=a.currentScore;this.currentDerivative=a.currentDerivative;this.upThresholdPeriod=a.upThresholdPeriod;this.downThresholdPeriod=a.downThresholdPeriod;this.decayLenght=a.decayLenght;this.scorePeak=a.scorePeak};a11y.ScoreBoard.prototype.enableFastRecovery=function(){this.isFastRecoveryEnabled=!0};a11y.ScoreBoard.prototype.disableFastRecovery=function(){this.isFastRecoveryEnabled=!1};
a11y.ScoreBoard.prototype.getThreshold=function(){return this.threshold};a11y.ScoreBoard.prototype.getUpThresholdPeriod=function(){return this.upThresholdPeriod};a11y.ScoreBoard.prototype.getDownThresholdPeriod=function(){return this.downThresholdPeriod};a11y.ScoreBoard.prototype.getScorePeak=function(){return this.scorePeak};
a11y.FocusLogger=function(a){function b(a){var b=a.target||a.srcElement;void 0!==b&&void 0!==b.tagName&&"BODY"!==b.tagName&&setTimeout(function(){e.notifyAll("focus",a)},c)}var c=a||0,e=this;a11y.Observable.call(this);void 0===document.onfocusin&&null!=document.addEventListener?document.addEventListener("focus",b,!0):a11y.Utils.addListener(document,"focusin",b)};
a11y.Utils.isInternetExplorerLowerOrEqualsTo8()||(a11y.FocusLogger.prototype=Object.create(a11y.Observable.prototype),a11y.FocusLogger.prototype.constructor=a11y.FocusLogger);a11y.InteractionEvent=function(a,b,c){this.mouseMoved=a;this.eventType=b;this.event=c};
a11y.MouseLogger=function(a,b){function c(){m=!1}function e(a){var b=a.which;a.which||void 0===a.button||(b=a.button&1?1:a.button&2?3:a.button&4?2:0);return new a11y.MouseEventWrapper(a,b)}a11y.Observable.call(this);var d=b||0,f,k,h,g,l=this,m=!1;this.eventObscurationInterval=100;a11y.Utils.addListener(document,"mousemove",function(a){return function(b){m||(n>=q?(m=!0,setTimeout(c,l.eventObscurationInterval)):n+=1,a(b))}}(function(a){var b=window.scrollX||window.pageXOffset,c=window.scrollY||window.pageYOffset;
setTimeout(function(){var d=a||window.event,m={x:d.pageX,y:d.pageY};f=k;k=m;h=g;g={x:b,y:c};if(void 0===h||h.x===g.x&&h.y===g.y)void 0===f&&a11y.log("first mvm"),void 0==f||0==f.x-k.x&&0==f.y-k.y||l.notifyAll("mousemove",e(d))},d)}));a11y.Utils.addListener(document,"click",function(a){setTimeout(function(){l.notifyAll("click",e(a))},d)});a11y.Utils.addListener(document,"mousedown",function(a){3===a.which&&setTimeout(function(){l.notifyAll("rightClick",e(a))},d)});var n=0,q=2};
a11y.Utils.isInternetExplorerLowerOrEqualsTo8()||(a11y.MouseLogger.prototype=Object.create(a11y.Observable.prototype),a11y.MouseLogger.prototype.constructor=a11y.MouseLogger);
a11y.EventStream=function(a,b,c){function e(){k=!1}function d(a){return function(b){k||(k=!0,setTimeout(e,f.eventObscurationInterval),a(b))}}a11y.Observable.call(this);var f=this;this.eventObscurationInterval=100;var k=!1,h=!1,g=[];g.push(new a11y.KeystrokeCmb([0]));g.push(new a11y.KeystrokeCmb([9]));g.push(new a11y.KeystrokeCmb([13]));g.push(new a11y.KeystrokeCmb([16]));g.push(new a11y.KeystrokeCmb([17]));g.push(new a11y.KeystrokeCmb([18]));b.register(g,d(function(a){f.notifyAll("keypressed",new a11y.InteractionEvent(h,
"keypressed",a));h=!1}));a.addObserver("click",d(function(a){f.notifyAll("click",new a11y.InteractionEvent(h,"click",a));h=!1}));a.addObserver("rightClick",d(function(a){f.notifyAll("rightClick",new a11y.InteractionEvent(h,"rightClick",a));h=!1}));c.addObserver("focus",d(function(a){f.notifyAll("focus",new a11y.InteractionEvent(h,"focus",a));h=!1}));a.addObserver("mousemove",function(a){h=!0})};
a11y.Utils.isInternetExplorerLowerOrEqualsTo8()||(a11y.EventStream.prototype=Object.create(a11y.Observable.prototype),a11y.EventStream.prototype.constructor=a11y.EventStream);a11y.Storage=function(){};a11y.Storage.prototype.setObject=function(a,b){try{localStorage.setItem(a,JSON.stringify(b))}catch(c){}};a11y.Storage.prototype.getObject=function(a){var b=void 0;try{return(b=localStorage.getItem(a))&&JSON.parse(b)}catch(c){return b}};
a11y.ScoreBoardDao=function(a){a11y.ScoreBoardDao.prototype.getState=function(){return a.getObject("scoreBoard")};a11y.ScoreBoardDao.prototype.storeState=function(b){a.setObject("scoreBoard",b.getState())}};
a11y.InputController=function(a,b,c,e){function d(a){f.updateScore(a);g=k.getClassificationOutput(f.getScore());1==g?(ue.tag("keyboardHit"),ue.count("keyboardHit",1)):ue.tag("mouseHit");a=f.getScore();ue.count("A11yScore",a);h.storeState(f);a11y.log("ScoreBoard: "+f.getScore());a11y.log("Classification output : "+g)}var f=b,k=c,h=e,g;a.addObserver("click",d);a.addObserver("rightClick",d);a.addObserver("keypressed",d);a.addObserver("focus",d)};
(function(){if(!a11y.Utils.isInternetExplorerLowerOrEqualsTo8()&&a11y.Utils.isStorageSupported()){var a=a11y.CONFIG,b=new a11y.LinearClassifier(a("SESSION_CLASSIFIER_THRESHOLD")),c=new a11y.ScoreBoard(a("SCORE_ATTRIBUTION_STRATEGY"),a("SESSION_CLASSIFIER_THRESHOLD"),a("FAST_RECOVERY_PARAMETER")),e=new a11y.MouseLogger(a("MOUSE_SAMPLING_PERIOD"),a("LOGGER_CONFIGURATION")),d=new a11y.KeyLogger(a("LOGGER_CONFIGURATION")),a=new a11y.FocusLogger(a("LOGGER_CONFIGURATION")),e=new a11y.EventStream(e,d,a),
d=new a11y.Storage,d=new a11y.ScoreBoardDao(d);void 0!=d.getState()&&c.setState(d.getState());new a11y.InputController(e,c,b,d)}})();

}
/*
     FILE ARCHIVED ON 00:17:43 Jan 01, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:20:06 Dec 11, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 126.194
  exclusion.robots: 0.09
  exclusion.robots.policy: 0.079
  cdx.remote: 0.079
  esindex: 0.013
  LoadShardBlock: 87.239 (3)
  PetaboxLoader3.datanode: 54.639 (5)
  PetaboxLoader3.resolve: 95.563 (2)
  load_resource: 90.057 (2)
*/