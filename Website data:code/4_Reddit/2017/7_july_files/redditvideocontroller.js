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

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var redditVideoControllerDocument = document.currentScript.ownerDocument;

var RedditVideoController = function (_HTMLElement) {
  _inherits(RedditVideoController, _HTMLElement);

  function RedditVideoController() {
    _classCallCheck(this, RedditVideoController);

    var _this = _possibleConstructorReturn(this, (RedditVideoController.__proto__ || Object.getPrototypeOf(RedditVideoController)).call(this));

    var shadowRoot = _this.attachShadow({ mode: "open" });
    var template = redditVideoControllerDocument.querySelector('#reddit-video-controller');
    var clone = document.importNode(template.content, true);
    shadowRoot.appendChild(clone);
    return _this;
  }

  _createClass(RedditVideoController, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.parentElement instanceof RedditVideoPlayer) {
        this.parentElement.attachUiController(this);
        var self = this;

        this.videoPlayer = this.parentElement;

        this.setupActions();

        var behaviorAttribute = this.getAttribute("behavior");
        if (behaviorAttribute != null) {
          var behaviors = behaviorAttribute.split(" ");
          if (behaviors.indexOf(RedditVideoController.Behaviors.MOUSE_MOVE) != -1) {
            this.setupMouseMoveBehavior();
          }
          if (behaviors.indexOf(RedditVideoController.Behaviors.COMPLETED) != -1) {
            this.setupCompletedBehavior();
          }
        }
      } else {
        console.warn("<reddit-video-controller> should be placed inside of <reddit-video-player>");
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.parentElement instanceof RedditVideoPlayer) {
        this.parentElement.detachUiController(this);
      }
    }
  }, {
    key: "setupActions",
    value: function setupActions() {
      var self = this;
      // This needs to be delayed until the next frame because on Chrome and Opera
      // (i.e., non-polyfilled webcomponents browsers), custom elements are handled
      // before any following html is inserted.
      setTimeout(function () {
        var slot = self.shadowRoot.querySelector('slot');
        var assignedNodes = slot.assignedNodes();

        self.connectClickElements(assignedNodes);
        self.connectTextElements(assignedNodes);
        self.connectSeekBarElements(assignedNodes);
        self.connectVolumeSliderElements(assignedNodes);
        self.connectSettingsMenuElements(assignedNodes);
      }, 0);
    }
  }, {
    key: "setupMouseMoveBehavior",
    value: function setupMouseMoveBehavior() {
      var timeout;
      var self = this;
      this.isFadedIn = true;

      var alwaysVisible = this.getAttributeAsBoolean("always_visible", RedditVideoController.Defaults.ALWAYS_VISIBLE);
      var startVisible = this.getAttributeAsBoolean("start_visible", RedditVideoController.Defaults.START_VISIBLE);
      this.style.opacity = startVisible ? this.getAttributeAsNumber("opacity_max", RedditVideoController.Defaults.OPACITY_MAX) : this.getAttributeAsNumber("opacity_min", RedditVideoController.Defaults.OPACITY_MIN);

      if (startVisible) {
        this.fadeOut();
      }

      if (!alwaysVisible) {
        var startFadeOut = function startFadeOut(event) {
          clearTimeout(timeout);
          self.fadeOut();
        };

        var startFadeIn = function startFadeIn(event) {
          self.fadeIn();
          clearTimeout(timeout);
          timeout = setTimeout(timeoutFader, self.getAttributeAsNumber("fade_out_delay", RedditVideoController.Defaults.FADE_OUT_DELAY));
        };

        // Fade out on mouse leave event


        var timeoutFader = function timeoutFader() {
          self.fadeOut();
        };

        this.parentElement.addEventListener("mouseleave", startFadeOut);

        // Fade in on mouse enter event or mousedown
        this.parentElement.addEventListener("mouseenter", startFadeIn);
        this.parentElement.addEventListener("mousedown", startFadeIn);
        this.parentElement.addEventListener("mousemove", startFadeIn);
      }
    }
  }, {
    key: "setupCompletedBehavior",
    value: function setupCompletedBehavior() {
      var self = this;

      var fadeOutCallback = function fadeOutCallback() {
        self.style.visibility = "hidden";
      };

      var startVisible = this.getAttributeAsBoolean("start_visible", RedditVideoController.Defaults.START_VISIBLE);
      this.style.opacity = startVisible ? this.getAttributeAsNumber("opacity_max", RedditVideoController.Defaults.OPACITY_MAX) : this.getAttributeAsNumber("opacity_min", RedditVideoController.Defaults.OPACITY_MIN);

      if (startVisible) {
        this.fadeOut(fadeOutCallback);
      } else {
        fadeOutCallback();
      }

      this.videoPlayer.videoElement.addEventListener("ended", function (event) {
        self.style.visibility = "visible";
        self.fadeIn();
      });

      this.videoPlayer.videoElement.addEventListener("play", function (event) {
        self.fadeOut(fadeOutCallback);
      });
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(callback) {
      if (this.isFadedIn) {
        this.fadeTo(this.getAttributeAsNumber("opacity_min", RedditVideoController.Defaults.OPACITY_MIN), this.getAttributeAsNumber("fade_out_duration", RedditVideoController.Defaults.FADE_OUT_DURATION), callback);
        this.isFadedIn = false;
      }
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(callback) {
      if (!this.isFadedIn) {
        this.fadeTo(this.getAttributeAsNumber("opacity_max", RedditVideoController.Defaults.OPACITY_MAX), this.getAttributeAsNumber("fade_in_duration", RedditVideoController.Defaults.FADE_IN_DURATION), callback);
        this.isFadedIn = true;
      }
    }
  }, {
    key: "fadeTo",
    value: function fadeTo(to, duration, callback) {
      var self = this;
      function animate(opts, callback) {
        var start = new Date();

        clearInterval(self.fadeInterval);
        self.fadeInterval = setInterval(function () {
          var timePassed = new Date() - start;
          var progress = timePassed / opts.duration;
          if (progress > 1) {
            progress = 1;
          }
          var delta = opts.delta(progress);
          opts.step(delta);

          if (progress == 1) {
            clearInterval(self.fadeInterval);
            if (callback) {
              callback();
            }
          }
        }, 1000 / 60);
      }
      function scale(valueIn, baseMin, baseMax, limitMin, limitMax) {
        return (limitMax - limitMin) * (valueIn - baseMin) / (baseMax - baseMin) + limitMin;
      }

      var from = this.style.opacity;
      var isDecreasing = false;
      if (from > to) {
        isDecreasing = true;
      }
      animate({
        duration: duration,
        delta: function delta(p) {
          return p;
        },
        step: function step(delta) {

          var opacity;
          if (isDecreasing) {
            delta = 1 - delta;
          }

          self.style.opacity = scale(delta, RedditVideoController.Defaults.OPACITY_MIN, RedditVideoController.Defaults.OPACITY_MAX, self.getAttributeAsNumber("opacity_min", RedditVideoController.Defaults.OPACITY_MIN), self.getAttributeAsNumber("opacity_max", RedditVideoController.Defaults.OPACITY_MAX));
        }
      }, callback);
    }
  }, {
    key: "onDashStreamReady",
    value: function onDashStreamReady(bitrateOptions) {
      // TODO: populate settings dynamically
    }
  }, {
    key: "connectClickElements",
    value: function connectClickElements(assignedNodes) {
      var self = this;
      function attachClickableNode(clickableNode) {
        clickableNode.addEventListener("click", function (event) {
          var action = clickableNode.getAttribute("data-action");
          if (action) {
            var value = clickableNode.getAttribute("data-value");
            var eventExtras = {
              verb: "click",
              noun: action
            };
            self.fireEvent(action, value, eventExtras);
          }
          event.stopPropagation();
        }, false);
      }

      var clickSelector = "[data-control-type=click]";
      assignedNodes.forEach(function (node) {
        if (node.nodeType != 1) {
          return;
        }
        var clickableNodes = node.querySelectorAll(clickSelector);
        clickableNodes.forEach(attachClickableNode);
        if (node.matches(clickSelector)) {
          attachClickableNode(node);
        }
      });
    }
  }, {
    key: "connectTextElements",
    value: function connectTextElements(assignedNodes) {
      var self = this;

      function attachTextNode(textNode) {
        var action = textNode.getAttribute("data-action");
        if (action == "totalTime") {
          if (!isNaN(self.videoPlayer.videoElement.duration)) {
            textNode.innerHTML = RedditVideoController.secondsToTimeFormat(self.videoPlayer.videoElement.duration);
          }
          self.videoPlayer.videoElement.addEventListener("durationchange", function () {
            textNode.innerHTML = RedditVideoController.secondsToTimeFormat(self.videoPlayer.videoElement.duration);
          });
        } else if (action == "elapsedTime") {
          if (!isNaN(self.videoPlayer.videoElement.currentTime)) {
            textNode.innerHTML = RedditVideoController.secondsToTimeFormat(self.videoPlayer.videoElement.currentTime);
          }
          self.videoPlayer.videoElement.addEventListener("timeupdate", function () {
            textNode.innerHTML = RedditVideoController.secondsToTimeFormat(self.videoPlayer.videoElement.currentTime);
          });
        }
      }

      var textSelector = "[data-control-type=text]";
      assignedNodes.forEach(function (node) {
        if (node.nodeType != 1) {
          return;
        }
        var textNodes = node.querySelectorAll(textSelector);
        textNodes.forEach(attachTextNode);
        if (node.matches(textSelector)) {
          attachTextNode(node);
        }
      });
    }
  }, {
    key: "connectSeekBarElements",
    value: function connectSeekBarElements(assignedNodes) {
      var self = this;
      var videoElement = this.videoPlayer.videoElement;
      function attachSeekBar(seekBarNode) {
        seekBarNode.addEventListener('progress', function (event) {
          var progress = seekBarNode.getProgress() / 100;
          var eventExtras = {
            verb: 'click',
            noun: 'seek'
          };
          self.fireEvent(RedditVideoPlayer.Actions.SET_CURRENT_TIME, videoElement.duration * progress, eventExtras);
        });

        videoElement.addEventListener('timeupdate', function (event) {
          var progressPercentage = videoElement.currentTime / videoElement.duration * 100;
          seekBarNode.setProgress(progressPercentage);
        });

        videoElement.addEventListener('progress', function (event) {
          var bufferedRangePercentages = [];
          for (var i = 0; i < videoElement.buffered.length; i++) {
            var bufferedRangePercentage = {
              start: videoElement.buffered.start(i) / videoElement.duration * 100,
              end: videoElement.buffered.end(i) / videoElement.duration * 100
            };
            bufferedRangePercentages.push(bufferedRangePercentage);
          }
          seekBarNode.setBuffered(bufferedRangePercentages);
        });
      }

      var seekBarSelector = 'reddit-video-seek-bar';
      assignedNodes.forEach(function (node) {
        if (node.nodeType != 1) {
          return;
        }
        var seekBars = node.querySelectorAll(seekBarSelector);
        seekBars.forEach(attachSeekBar);
        if (node.matches(seekBarSelector)) {
          attachSeekBar(node);
        }
      });
    }
  }, {
    key: "connectVolumeSliderElements",
    value: function connectVolumeSliderElements(assignedNodes) {
      var self = this;
      function attachVolumeSlider(volumeSliderNode) {
        volumeSliderNode.addEventListener('change', function (event) {
          var eventExtras = {
            verb: "click",
            noun: "volume"
          };
          self.fireEvent(RedditVideoPlayer.Actions.SET_VOLUME, volumeSliderNode.value, eventExtras);
        });
      }

      var volumeSliderSelector = 'reddit-video-volume-slider';
      assignedNodes.forEach(function (node) {
        if (node.nodeType != 1) {
          return;
        }
        var volumeSliders = node.querySelectorAll(volumeSliderSelector);
        volumeSliders.forEach(attachVolumeSlider);
        if (node.matches(volumeSliderSelector)) {
          attachVolumeSlider(node);
        }
      });
    }
  }, {
    key: "connectSettingsMenuElements",
    value: function connectSettingsMenuElements(assignedNodes) {
      var self = this;
      function attachSettingsMenu(settingsMenuNode) {
        settingsMenuNode.addEventListener('resolution', function (event) {
          var eventExtras = {
            verb: "click",
            noun: event.detail.resolution > 0 ? event.detail.resolution : "auto"
          };
          self.fireEvent(RedditVideoPlayer.Actions.SET_RESOLUTION, event.detail.resolution, eventExtras);
        });
      }

      var settingsMenuSelector = 'reddit-video-settings-menu';
      assignedNodes.forEach(function (node) {
        if (node.nodeType != 1) {
          return;
        }
        var settingsMenus = node.querySelectorAll(settingsMenuSelector);
        settingsMenus.forEach(attachSettingsMenu);
        if (node.matches(settingsMenuSelector)) {
          attachSettingsMenu(node);
        }
      });
    }
  }, {
    key: "getAttributeAsNumber",
    value: function getAttributeAsNumber(attributeName, defaultValue) {
      var attribute = this.getAttribute(attributeName);
      if (attribute) {
        return parseFloat(attribute);
      }
      return defaultValue;
    }
  }, {
    key: "getAttributeAsBoolean",
    value: function getAttributeAsBoolean(attributeName, defaultValue) {
      var attribute = this.getAttribute(attributeName);
      if (attribute) {
        return attribute.toLowerCase() != "false";
      }
      return defaultValue;
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(action, value, eventExtras) {
      var detail = {
        "action": action,
        "value": value,
        "eventExtras": eventExtras
      };
      var event = new CustomEvent('videoAction', { 'detail': detail });
      this.videoPlayer.dispatchEvent(event);
    }
  }, {
    key: "onActionCompleted",
    value: function onActionCompleted(action, value) {
      // Swap with toggle action if it exists
      var self = this;
      var slot = this.shadowRoot.querySelector('slot');
      var assignedNodes = slot.assignedNodes();

      function toggleAction(actionedNode) {
        var toggleAction = actionedNode.getAttribute("data-toggle-action");
        if (toggleAction) {
          actionedNode.setAttribute("data-action", toggleAction);
          actionedNode.setAttribute("data-toggle-action", action);
        }
      }
      assignedNodes.forEach(function (node) {
        if (node.nodeType != 1) {
          return;
        }
        var actionSelector = "[data-action='" + action + "']";
        var actionedNodes = node.querySelectorAll(actionSelector);

        actionedNodes.forEach(toggleAction);
        if (node.matches(actionSelector)) {
          toggleAction(node);
        }
      });

      // If mute was toggled, update volume sliders
      function toggleMute(actionedNode) {
        if (action == RedditVideoPlayer.Actions.MUTE) {
          actionedNode.value = 0;
        } else {
          actionedNode.value = self.videoPlayer.videoElement.volume;
        }
      }
      if (action == RedditVideoPlayer.Actions.MUTE || action == RedditVideoPlayer.Actions.UNMUTE) {
        assignedNodes.forEach(function (node) {
          if (node.nodeType != 1) {
            return;
          }
          var actionSelector = "reddit-video-volume-slider";
          var actionedNodes = node.querySelectorAll(actionSelector);

          actionedNodes.forEach(toggleMute);
          if (node.matches(actionSelector)) {
            toggleAction(node);
          }
        });
      }
    }
  }], [{
    key: "secondsToTimeFormat",
    value: function secondsToTimeFormat(totalSeconds) {
      totalSeconds = Math.round(totalSeconds);
      var hours = parseInt(totalSeconds / 3600) % 24;
      var minutes = parseInt(totalSeconds / 60) % 60;
      var seconds = totalSeconds % 60;
      if (hours != 0) {
        return hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
      } else {
        return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
      }
    }
  }, {
    key: "Defaults",
    get: function get() {
      return {
        FADE_IN_DURATION: 0,
        FADE_OUT_DURATION: 400,
        FADE_OUT_DELAY: 3000,
        ALWAYS_VISIBLE: false,
        START_VISIBLE: true,
        OPACITY_MAX: 1,
        OPACITY_MIN: 0
      };
    }
  }, {
    key: "Behaviors",
    get: function get() {
      return {
        MOUSE_MOVE: "mousemove",
        COMPLETED: "completed"
      };
    }
  }]);

  return RedditVideoController;
}(HTMLElement);

customElements.define('reddit-video-controller', RedditVideoController);


}
/*
     FILE ARCHIVED ON 15:52:55 Jun 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:37 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.063
  cdx.remote: 0.102
  esindex: 0.011
  LoadShardBlock: 450.072 (6)
  PetaboxLoader3.datanode: 472.381 (7)
  load_resource: 202.938
  PetaboxLoader3.resolve: 80.733
*/