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

var redditVideoSettingsMenuDocument = document.currentScript.ownerDocument;

var RedditVideoSettingsMenu = function (_HTMLElement) {
  _inherits(RedditVideoSettingsMenu, _HTMLElement);

  function RedditVideoSettingsMenu() {
    _classCallCheck(this, RedditVideoSettingsMenu);

    var _this = _possibleConstructorReturn(this, (RedditVideoSettingsMenu.__proto__ || Object.getPrototypeOf(RedditVideoSettingsMenu)).call(this));

    var shadowRoot = _this.attachShadow({ mode: "open" });
    var template = redditVideoSettingsMenuDocument.querySelector('#reddit-video-settings-menu');
    var clone = document.importNode(template.content, true);
    shadowRoot.appendChild(clone);
    return _this;
  }

  _createClass(RedditVideoSettingsMenu, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      var self = this;

      this.container = this.shadowRoot.querySelector('.menu-container');
      this.qualityRadioButtons = this.container.querySelectorAll('input[type=radio]');

      // Unfortunate hack since input name groups are not supported by pollyfilled shadow DOM
      RedditVideoSettingsMenu.count++;
      this.qualityRadioButtons.forEach(function (radioButton) {
        radioButton.setAttribute("name", "quality-" + RedditVideoSettingsMenu.count);
      });

      this.qualityRadioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', function (event) {
          var detail = {
            "resolution": radioButton.value
          };
          var resolutionEvent = new CustomEvent('resolution', { 'detail': detail });
          self.dispatchEvent(resolutionEvent);
        });
      }.bind(this));

      // Prevent container click behaviour being triggered
      this.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
  }, {
    key: 'updateQualityOptions',
    value: function updateQualityOptions(qualityOptions) {
      this.qualityRadioButtons.forEach(function (qualityRadioButton) {
        if (qualityRadioButton.value === "0") {
          qualityRadioButton.disabled = false;
          qualityRadioButton.checked = true;
        } else {
          qualityRadioButton.disabled = true;
        }
      });
      // For each quality option height, infer the quality by getting the closest height
      qualityOptions.forEach(function (option) {
        var actual = option.height;
        var closest = RedditVideoSettingsMenu.Resolutions.reduce(function (accumulator, currentValue) {
          return Math.abs(currentValue - actual) < Math.abs(accumulator - actual) ? currentValue : accumulator;
        });

        var element = this.shadowRoot.querySelector('input[name="quality"][value="' + closest + '"]');
        if (element) {
          element.disabled = false;
        }
      }.bind(this));
    }
  }, {
    key: 'quality',
    set: function set(value) {
      this._quality = value;
    },
    get: function get() {
      return this._quality;
    }
  }], [{
    key: 'Resolutions',
    get: function get() {
      return [240, 360, 480, 720, 1080];
    }
  }]);

  return RedditVideoSettingsMenu;
}(HTMLElement);

RedditVideoSettingsMenu.count = 0;

customElements.define('reddit-video-settings-menu', RedditVideoSettingsMenu);


}
/*
     FILE ARCHIVED ON 15:53:06 Jun 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:52 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.145
  exclusion.robots.policy: 0.122
  cdx.remote: 0.226
  esindex: 0.024
  LoadShardBlock: 167.629 (6)
  PetaboxLoader3.datanode: 159.948 (7)
  load_resource: 78.994
  PetaboxLoader3.resolve: 38.323
*/