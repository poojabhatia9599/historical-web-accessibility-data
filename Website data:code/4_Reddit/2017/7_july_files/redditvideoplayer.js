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

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var redditVideoPlayerDocument = document.currentScript.ownerDocument;

var RedditVideoPlayer = function (_HTMLElement) {
  _inherits(RedditVideoPlayer, _HTMLElement);

  function RedditVideoPlayer() {
    _classCallCheck(this, RedditVideoPlayer);

    var _this = _possibleConstructorReturn(this, (RedditVideoPlayer.__proto__ || Object.getPrototypeOf(RedditVideoPlayer)).call(this));

    var shadowRoot = _this.attachShadow({ mode: "open" });
    var template = redditVideoPlayerDocument.querySelector('#reddit-video-player');
    var clone = document.importNode(template.content, true);
    shadowRoot.appendChild(clone);

    // Action listener
    var self = _this;
    _this.addEventListener('videoAction', function (event) {
      self.doAction(event.detail.action, event.detail.value, event.detail.eventExtras);
    }, false);
    return _this;
  }

  /*
   * HTMLElement methods
   */

  _createClass(RedditVideoPlayer, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.uiControllers = [];
      this.sources = [];
      this.actionCompletedCallbacks = [];
      this.isFullScreen = false;
      this.hasCompatibleSource = false;
      this.videoElement = this.shadowRoot.querySelector('#rvp-video');

      if (typeof Storage !== "undefined") {
        if (localStorage.getItem("redditVideoPlayerVolume") != null) {
          this.setVolume(parseFloat(localStorage.redditVideoPlayerVolume));
        } else {
          localStorage.redditVideoPlayerVolume = 1;
          this.setVolume(1);
        }
      }

      var self = this;
      this.videoElement.addEventListener('ended', function (event) {
        self.notifyActionCompleted(RedditVideoPlayer.Actions.PAUSE);
      });

      // Attach HTML5 Video events directly to RedditVideoPlayer
      RedditVideoPlayer.videoEvents.forEach(function (eventName) {
        self.videoElement.addEventListener(eventName, function (event) {
          self.dispatchEvent(new event.constructor(event.type, event));
        });
      });

      this.addEventListener('click', function (event) {
        var eventExtras = {
          verb: "click"
        };
        if (self.paused) {
          eventExtras["noun"] = "play";
          self.play(eventExtras);
        } else {
          eventExtras["noun"] = "pause";
          self.pause(eventExtras);
        }
      });

      // Track the maximum played time for analytics
      this._maxPlayed = 0;
      this.videoElement.addEventListener("timeupdate", function () {
        self._maxPlayed = Math.max(self._maxPlayed, self.videoElement.currentTime);
      });

      this.prepareFullscreen();

      // Firefox cannot access methods until the connected callback is fired.
      setTimeout(function () {
        self.dispatchEvent(new Event('ready'));
      }, 0);
    }
  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(attributeName, oldValue, newValue, namespace) {
      if (RedditVideoPlayer.videoElementAttributes.indexOf(attributeName) != -1) {
        var videoElement = this.shadowRoot.querySelector('#rvp-video');
        videoElement.setAttribute(attributeName, '' + newValue);
      }
    }
  }, {
    key: 'attachSource',
    value: function attachSource(source) {
      var self = this;
      this.sources.push(source);
      if (!this.hasCompatibleSource) {
        if (source.isMpd()) {
          if ('MediaSource' in window) {
            this.hasCompatibleSource = true;
            this.dashPlayer = dashjs.MediaPlayer().create();
            this.dashPlayer.getDebug().setLogToBrowserConsole(false);
            this.dashPlayer.initialize(this.videoElement, source.getAttribute('src'), false);

            this.dashPlayer.on(dashjs.MediaPlayer.events.STREAM_INITIALIZED, function () {
              self.bitrateOptions = self.dashPlayer.getBitrateInfoListFor("video");
              self.availableResolutions = self.bitrateOptions.map(function (bitrateOption) {
                return bitrateOption.height;
              });
              self.notifyDashStreamReady(self.bitrateOptions);
            });
          }
        } else {
          if (this.videoElement.canPlayType(source.getAttribute('type')) != "") {
            this.hasCompatibleSource = true;
            this.videoElement.setAttribute('src', source.getAttribute('src'));
          }
        }
      }
    }
  }, {
    key: 'detachSource',
    value: function detachSource(source) {
      var index = this.sources.indexOf(source);
      if (index != -1) {
        this.sources[index].splice(index, 1);
      } else {
        console.error("Error: <reddit-video-source> is not attached - cannot remove");
      }
    }
  }, {
    key: 'prepareFullscreen',
    value: function prepareFullscreen() {
      var self = this;

      // Full screen cursor visibility controls
      function hideCursor() {
        self.style.cursor = "none";
      }

      function showCursor() {
        self.style.cursor = "auto";
      }

      var cursorTimeout = null;

      function startCursorTimeout() {
        cursorTimeout = setTimeout(hideCursor, RedditVideoPlayer.Defaults.CURSOR_TIMEOUT);
      }

      function resetCursorTimeout() {
        self.style.cursor = "auto";
        if (cursorTimeout !== null) {
          clearTimeout(cursorTimeout);
        }
        startCursorTimeout();
      }

      // Full screen listener
      function fullScreenChangeHandler() {
        var action = self.isFullScreen ? RedditVideoPlayer.Actions.FULLSCREEN_CANCEL : RedditVideoPlayer.Actions.FULLSCREEN_REQUEST;
        self.isFullScreen = !self.isFullScreen;

        if (self.isFullScreen) {
          startCursorTimeout();
          self.addEventListener("mousemove", resetCursorTimeout);
        } else {
          clearTimeout(cursorTimeout);
          showCursor();
          self.removeEventListener("mousemove", resetCursorTimeout);
        }
        var eventExtras = {};
        if (self.isFullScreen) {
          eventExtras["verb"] = "click";
          eventExtras["noun"] = "fullscreen";
        }
        self.notifyActionCompleted(action, eventExtras, eventExtras);
      }

      document.addEventListener("fullscreenchange", fullScreenChangeHandler);
      document.addEventListener("webkitfullscreenchange", fullScreenChangeHandler);
      document.addEventListener("mozfullscreenchange", fullScreenChangeHandler);
      document.addEventListener("MSFullscreenChange", fullScreenChangeHandler);
    }
  }, {
    key: 'attachUiController',
    value: function attachUiController(uiController) {
      this.uiControllers.push(uiController);
    }
  }, {
    key: 'detachUiController',
    value: function detachUiController(uiController) {
      var index = this.uiControllers.indexOf(uiController);
      if (index != -1) {
        this.uiControllers.splice(index, 1);
      } else {
        console.error("Error: <reddit-video-controller> is not attached - cannot remove");
      }
    }
  }, {
    key: 'play',
    value: function play(eventExtras) {
      this.videoElement.play();
      this.notifyActionCompleted(RedditVideoPlayer.Actions.PLAY, null, eventExtras);
    }
  }, {
    key: 'pause',
    value: function pause(eventExtras) {
      this.videoElement.pause();
      this.notifyActionCompleted(RedditVideoPlayer.Actions.PAUSE, null, eventExtras);
    }
  }, {
    key: 'replay',
    value: function replay(eventExtras) {
      this.setCurrentTime(0);
      this.play();
      this.notifyActionCompleted(RedditVideoPlayer.Actions.REPLAY, null, eventExtras);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(value, eventExtras) {
      if (this.videoElement.muted) {
        this.videoElement.muted = false;
        this.notifyActionCompleted(RedditVideoPlayer.Actions.UNMUTE, null, eventExtras);
      }
      this.videoElement.volume = value;
      if (typeof Storage !== "undefined") {
        if (localStorage.redditVideoPlayerVolume != value) {
          localStorage.redditVideoPlayerVolume = value;
        }
      }
      this.notifyActionCompleted(RedditVideoPlayer.Actions.SET_VOLUME, value, eventExtras);
    }
  }, {
    key: 'setCurrentTime',
    value: function setCurrentTime(value, eventExtras) {
      this.videoElement.currentTime = value;
      this.notifyActionCompleted(RedditVideoPlayer.Actions.SET_CURRENT_TIME, value, eventExtras);
    }
  }, {
    key: 'seekJump',
    value: function seekJump(value, eventExtras) {
      value = parseInt(value);
      var newTime = this.videoElement.currentTime + value;
      if (newTime < 0) {
        newTime = 0;
      }
      if (newTime > this.videoElement.duration) {
        newTime = this.videoElement.duration;
      }
      this.videoElement.currentTime = newTime;
      this.notifyActionCompleted(RedditVideoPlayer.Actions.SEEK_JUMP, value, eventExtras);
    }
  }, {
    key: 'mute',
    value: function mute(eventExtras) {
      this.videoElement.muted = true;
      this.notifyActionCompleted(RedditVideoPlayer.Actions.MUTE, null, eventExtras);
    }
  }, {
    key: 'unmute',
    value: function unmute(eventExtras) {
      this.videoElement.muted = false;
      this.notifyActionCompleted(RedditVideoPlayer.Actions.UNMUTE, null, eventExtras);
    }
  }, {
    key: 'toggleFullScreen',
    value: function toggleFullScreen(eventExtras) {
      var requestFullScreen = this.requestFullscreen || this.webkitRequestFullscreen || this.mozRequestFullScreen || this.msRequestFullscreen;
      var cancelFullScreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;

      if (!this.isFullScreen) {
        requestFullScreen.call(this);
      } else {
        cancelFullScreen.call(document);
      }
    }
  }, {
    key: 'setResolution',
    value: function setResolution(target, eventExtras) {
      if (this.availableResolutions != null && this.bitrateOptions != null) {
        // Auto
        if (target <= 0) {
          this.dashPlayer.setAutoSwitchQuality(true);
          this.notifyActionCompleted(RedditVideoPlayer.Actions.SET_RESOLUTION, "auto", eventExtras);
          return;
        }

        var nearest = this.availableResolutions.reduce(function (previous, current) {
          return Math.abs(current - target) < Math.abs(previous - target) ? current : previous;
        });

        for (var i = 0; i < this.availableResolutions.length; i++) {
          if (nearest == this.availableResolutions[i]) {
            this.dashPlayer.setAutoSwitchQuality(false);
            this.dashPlayer.setQualityFor("video", i);
            this.notifyActionCompleted(RedditVideoPlayer.Actions.SET_RESOLUTION, nearest, eventExtras);
            break;
          }
        }
      }
    }
  }, {
    key: 'load',
    value: function load() {
      return this.videoElement.load();
    }
  }, {
    key: 'notifyActionCompleted',
    value: function notifyActionCompleted(action, value, eventExtras) {
      this.uiControllers.forEach(function (controller) {
        controller.onActionCompleted(action, value);
      });
      this.actionCompletedCallbacks.forEach(function (callback) {
        callback.call(this, action, value, eventExtras);
      }.bind(this));
    }
  }, {
    key: 'notifyDashStreamReady',
    value: function notifyDashStreamReady(bitrateOptions) {
      this.uiControllers.forEach(function (controller) {
        controller.onDashStreamReady(bitrateOptions);
      });
    }
  }, {
    key: 'doAction',
    value: function doAction(action, value, eventExtras) {
      switch (action) {
        case RedditVideoPlayer.Actions.PLAY:
          this.play(eventExtras);
          break;
        case RedditVideoPlayer.Actions.PAUSE:
          this.pause(eventExtras);
          break;
        case RedditVideoPlayer.Actions.REPLAY:
          this.replay(eventExtras);
          break;
        case RedditVideoPlayer.Actions.MUTE:
          this.mute(eventExtras);
          break;
        case RedditVideoPlayer.Actions.UNMUTE:
          this.unmute(eventExtras);
          break;
        case RedditVideoPlayer.Actions.SEEK_JUMP:
          this.seekJump(value, eventExtras);
          break;
        case RedditVideoPlayer.Actions.SET_CURRENT_TIME:
          this.setCurrentTime(value, eventExtras);
          break;
        case RedditVideoPlayer.Actions.SET_VOLUME:
          this.setVolume(value, eventExtras);
          break;
        case RedditVideoPlayer.Actions.FULLSCREEN_REQUEST:
        case RedditVideoPlayer.Actions.FULLSCREEN_CANCEL:
          this.toggleFullScreen(eventExtras);
          break;
        case RedditVideoPlayer.Actions.SET_RESOLUTION:
          this.setResolution(value, eventExtras);
          break;
        default:
          console.warn("Invalid Action:", action);
      }
    }
  }, {
    key: 'addActionCompletedCallback',
    value: function addActionCompletedCallback(callback) {
      this.actionCompletedCallbacks.push(callback);
    }
  }, {
    key: 'removeActionCompletedCallback',
    value: function removeActionCompletedCallback(callback) {
      var index = this.actionCompletedCallbacks.indexOf(callback);
      if (index != -1) {
        this.actionCompletedCallbacks.splice(index, 1);
      }
    }
  }, {
    key: 'getBitrateOptions',
    value: function getBitrateOptions() {
      return this.bitrateOptions;
    }
  }, {
    key: 'getQuality',
    value: function getQuality() {
      return this.dashPlayer.getQualityFor("video");
    }
  }, {
    key: 'getVisiblePercentage',
    value: function getVisiblePercentage() {
      var viewportHeight = window.innerHeight;
      var rect = this.getBoundingClientRect();
      var top = rect.top;
      var bottom = rect.bottom;
      var height = bottom - top;
      var hiddenTopPx = Math.min(top, 0);
      var hiddenBottomPx = Math.min(viewportHeight - bottom, 0);
      var visibleHeight = Math.max(height + hiddenTopPx + hiddenBottomPx, 0);
      return visibleHeight / height * 100;
    }
  }, {
    key: 'duration',


    /*
     * Video Property Getters
     */

    get: function get() {
      return this.videoElement.duration;
    }
  }, {
    key: 'currentTime',
    get: function get() {
      return this.videoElement.currentTime;
    }
  }, {
    key: 'videoWidth',
    get: function get() {
      return this.videoElement.videoWidth;
    }
  }, {
    key: 'videoHeight',
    get: function get() {
      return this.videoElement.videoHeight;
    }
  }, {
    key: 'muted',
    get: function get() {
      return this.videoElement.muted;
    }
  }, {
    key: 'paused',
    get: function get() {
      return this.videoElement.paused;
    }

    /*
     * Metadata getters
     */

  }, {
    key: 'maxPlayed',
    get: function get() {
      return this._maxPlayed;
    }
  }, {
    key: 'orientation',
    get: function get() {
      return this.videoWidth < this.videoHeight ? RedditVideoPlayer.Orientations.PORTRAIT : RedditVideoPlayer.Orientations.LANDSCAPE;
    }

    /*
     * Actions
     */

  }], [{
    key: 'videoElementAttributes',
    get: function get() {
      return ['autoplay', 'controls', 'height', 'loop', 'muted', 'poster', 'preload', 'src', 'width'];
    }
  }, {
    key: 'observedAttributes',
    get: function get() {
      return RedditVideoPlayer.videoElementAttributes.concat([]);
    }
  }, {
    key: 'videoEvents',
    get: function get() {
      return ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'ended', 'error', 'loadeddata', 'loadedmetadata', 'loadstart', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];
    }
  }, {
    key: 'Defaults',
    get: function get() {
      return {
        CURSOR_TIMEOUT: 3000
      };
    }
  }, {
    key: 'Actions',
    get: function get() {
      return {
        PLAY: "play",
        PAUSE: "pause",
        REPLAY: "replay",
        MUTE: "mute",
        UNMUTE: "unmute",
        FULLSCREEN_REQUEST: "fullscreenRequest",
        FULLSCREEN_CANCEL: "fullscreenCancel",
        SET_VOLUME: "setVolume",
        SET_CURRENT_TIME: "setCurrentTime",
        SEEK_JUMP: "seekJump",
        SET_RESOLUTION: "setResolution"
      };
    }
  }, {
    key: 'Orientations',
    get: function get() {
      return {
        PORTRAIT: "portrait",
        LANDSCAPE: "landscape"
      };
    }
  }]);

  return RedditVideoPlayer;
}(HTMLElement);

customElements.define('reddit-video', RedditVideoPlayer);


}
/*
     FILE ARCHIVED ON 15:52:53 Jun 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:24 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.067
  exclusion.robots.policy: 0.057
  cdx.remote: 0.103
  esindex: 0.01
  LoadShardBlock: 211.945 (6)
  PetaboxLoader3.datanode: 231.982 (7)
  load_resource: 151.791
  PetaboxLoader3.resolve: 40.573
*/