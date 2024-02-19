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

var redditVideoVolumeSliderDocument = document.currentScript.ownerDocument;

var RedditVideoVolumeSlider = function (_HTMLElement) {
  _inherits(RedditVideoVolumeSlider, _HTMLElement);

  function RedditVideoVolumeSlider() {
    _classCallCheck(this, RedditVideoVolumeSlider);

    var _this = _possibleConstructorReturn(this, (RedditVideoVolumeSlider.__proto__ || Object.getPrototypeOf(RedditVideoVolumeSlider)).call(this));

    var shadowRoot = _this.attachShadow({ mode: "open" });
    var template = redditVideoVolumeSliderDocument.querySelector('#reddit-video-volume-slider');
    var clone = document.importNode(template.content, true);
    shadowRoot.appendChild(clone);
    return _this;
  }

  _createClass(RedditVideoVolumeSlider, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (this.hasAttribute('step')) {
        this.step = this.getAttribute('step');
      }

      this.thumb = this.shadowRoot.querySelector('.slider-thumb');
      this.progress = this.shadowRoot.querySelector('.slider-progress');
      this.container = this.shadowRoot.querySelector('.slider-container');
      this.isMouseDown = false;

      if (typeof Storage !== "undefined" && localStorage.redditVideoPlayerVolume) {
        this.value = localStorage.redditVideoPlayerVolume;
      } else {
        this.value = 1;
      }

      var self = this;

      // Set value when slider pressed
      this.container.addEventListener('mousedown', function (event) {
        if (event.which == 1) {
          self.isMouseDown = true;
          var rect = self.container.getBoundingClientRect();
          var offsetY = event.clientY - rect.top;
          var percentage = 100 - offsetY / rect.height * 100;
          self.value = (self.max - self.min) * (percentage / 100);
          var changeEvent = new Event('change');
          self.dispatchEvent(changeEvent);
        }
      });

      // Click and drag volume
      document.addEventListener('mousemove', function (event) {
        if (self.isMouseDown) {
          var rect = self.container.getBoundingClientRect();
          var offsetY = event.clientY - rect.top;
          var percentage = 100 - offsetY / rect.height * 100;
          self.value = (self.max - self.min) * (percentage / 100);
          var changeEvent = new Event('change');
          self.dispatchEvent(changeEvent);
        }
      });

      // Release from click and drag
      document.addEventListener('mouseup', function (event) {
        if (self.isMouseDown) {
          self.isMouseDown = false;
        }
      });

      // Prevent container click behaviour being triggered
      this.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
  }, {
    key: 'stepUp',
    value: function stepUp() {
      this.value += this.step;
      var changeEvent = new Event('change');
      this.dispatchEvent(changeEvent);
    }
  }, {
    key: 'stepDown',
    value: function stepDown() {
      this.value -= this.step;
      var changeEvent = new Event('change');
      this.dispatchEvent(changeEvent);
    }
  }, {
    key: 'value',
    set: function set(value) {
      this._value = Math.max(Math.min(value, this.max), this.min);
      var percent = (this._value - this.min) / (this.max - this.min) * 100;
      this.progress.style.height = percent + "%";
    },
    get: function get() {
      return this._value;
    }
  }]);

  return RedditVideoVolumeSlider;
}(HTMLElement);

Object.defineProperties(RedditVideoVolumeSlider.prototype, {
  'min': {
    value: 0,
    writable: false
  },
  'max': {
    value: 1,
    writable: false
  },
  'step': {
    value: 0.1,
    writable: true
  }
});

customElements.define('reddit-video-volume-slider', RedditVideoVolumeSlider);


}
/*
     FILE ARCHIVED ON 15:53:02 Jun 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:50 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.11
  exclusion.robots.policy: 0.091
  cdx.remote: 0.148
  esindex: 0.015
  LoadShardBlock: 258.387 (6)
  PetaboxLoader3.datanode: 223.339 (7)
  load_resource: 104.659
  PetaboxLoader3.resolve: 35.047
*/