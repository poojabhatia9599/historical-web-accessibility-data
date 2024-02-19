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

var redditVideoSeekBarDocument = document.currentScript.ownerDocument;

var RedditVideoSeekBar = function (_HTMLElement) {
  _inherits(RedditVideoSeekBar, _HTMLElement);

  function RedditVideoSeekBar() {
    _classCallCheck(this, RedditVideoSeekBar);

    var _this = _possibleConstructorReturn(this, (RedditVideoSeekBar.__proto__ || Object.getPrototypeOf(RedditVideoSeekBar)).call(this));

    var shadowRoot = _this.attachShadow({ mode: "open" });
    var template = redditVideoSeekBarDocument.querySelector('#reddit-video-seek-bar');
    var clone = document.importNode(template.content, true);
    shadowRoot.appendChild(clone);
    return _this;
  }

  _createClass(RedditVideoSeekBar, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.backgroundBar = this.shadowRoot.querySelector('.bar.background');
      this.lookaheadBar = this.shadowRoot.querySelector('.bar.lookahead');
      this.previewThumbnailContainer = this.shadowRoot.querySelector('.floating');
      this.previewThumbnailVideo = this.previewThumbnailContainer.querySelector('video');
      this.previewThumbnailTime = this.shadowRoot.querySelector(".time");
      this.progressBar = this.shadowRoot.querySelector('.bar.progress');
      this.progressThumb = this.shadowRoot.querySelector('.thumb.progress');
      this.isMouseDown = false;
      this.progressPercent = 0;

      //let source = document.createElement('video');
      this.previewThumbnailVideo.setAttribute("src", this.getAttribute("preview-video-src"));
      //this.previewThumbnailVideo.appendChild(source);
      this.previewThumbnailVideo.load();

      var self = this;

      // Lookahead on hover
      this.addEventListener('mousemove', function (event) {
        var rect = self.getBoundingClientRect();
        var offsetX = event.clientX - rect.left;
        var percentage = offsetX / rect.width * 100;
        self.setLookahead(percentage);
      });

      // Reset lookahead when mouse is no longer hovering the seek bar
      this.addEventListener('mouseleave', function (event) {
        self.previewThumbnailContainer.style.visibility = "hidden";
        self.setLookahead(0);
      });

      this.addEventListener('mouseenter', function (event) {
        self.previewThumbnailContainer.style.visibility = "visible";
      });

      // Set position when progres bar pressed
      this.addEventListener('mousedown', function (event) {
        if (event.which == 1) {
          self.isMouseDown = true;
          var rect = self.getBoundingClientRect();
          var offsetX = event.clientX - rect.left;
          var percentage = offsetX / rect.width * 100;
          self.setProgress(percentage, true);
        }
      });

      // Click and drag the progress thumb
      document.addEventListener('mousemove', function (event) {
        if (self.isMouseDown) {
          var rect = self.getBoundingClientRect();
          var percentage = (event.pageX - rect.left) / rect.width * 100;
          percentage = Math.min(Math.max(percentage, 0), 100);
          self.setProgress(percentage, true);
        }
      });

      // Release from click and drag
      document.addEventListener('mouseup', function (event) {
        if (self.isMouseDown) {
          self.isMouseDown = false;
          var _event = new Event('progress');
          self.dispatchEvent(_event);
        }
      });

      // Prevent container click behaviour being triggered
      this.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }
  }, {
    key: 'setProgress',
    value: function setProgress(progressPercent) {
      var forceSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!this.isMouseDown || forceSet) {
        this.progressPercent = progressPercent;
        this.progressBar.style.width = progressPercent + '%';
        var leftOffset = this.progressThumb.getBoundingClientRect().width / 2;
        this.progressThumb.style.marginLeft = "calc(" + progressPercent + '% - ' + leftOffset + 'px)';
      }
    }
  }, {
    key: 'getProgress',
    value: function getProgress() {
      return this.progressPercent;
    }
  }, {
    key: 'setLookahead',
    value: function setLookahead(lookaheadPercent) {
      this.lookaheadBar.style.width = lookaheadPercent + '%';

      var seconds = this.previewThumbnailVideo.duration * (lookaheadPercent / 100);
      if (!isNaN(seconds)) {
        this.previewThumbnailVideo.currentTime = seconds;
        this.previewThumbnailTime.innerHTML = RedditVideoController.secondsToTimeFormat(seconds);
      }

      // Keep preview within parent element
      var parentRect = this.parentElement.getBoundingClientRect();
      var seekBarRect = this.getBoundingClientRect();
      var thumbnailRect = this.previewThumbnailContainer.getBoundingClientRect();
      var leftMin = parentRect.left - seekBarRect.left;
      var leftMax = parentRect.right - seekBarRect.left - thumbnailRect.width;
      var calculatedLeft = lookaheadPercent / 100 * seekBarRect.width - thumbnailRect.width / 2;

      this.previewThumbnailContainer.style.left = Math.max(leftMin, Math.min(calculatedLeft, leftMax)) + "px";
    }
  }, {
    key: 'setBuffered',
    value: function setBuffered(bufferedRangePercentages) {
      var bufferedBars = this.shadowRoot.querySelectorAll(".bar.buffered") || [];
      var currentBufferedBarCount = bufferedBars.length;
      var requiredBufferedBarCount = bufferedRangePercentages.length;

      // Add new bars if needed new ranges have been created
      for (var i = currentBufferedBarCount; i < requiredBufferedBarCount; i++) {
        var bar = document.createElement('div');
        bar.className = "bar buffered";
        this.shadowRoot.insertBefore(bar, this.progressBar);
      }

      bufferedBars = this.shadowRoot.querySelectorAll(".bar.buffered");
      // Set bar values
      for (var _i = 0; _i < bufferedRangePercentages.length; _i++) {
        var width = bufferedRangePercentages[_i].end - bufferedRangePercentages[_i].start;
        bufferedBars[_i].style.width = width + "%";
        bufferedBars[_i].style.left = bufferedRangePercentages[_i].start + "%";
      }

      // Delete redundant bars if ranges have merged
      for (var _i2 = requiredBufferedBarCount; _i2 < currentBufferedBarCount; _i2++) {
        bufferedBars[_i2].remove();
      }
    }
  }]);

  return RedditVideoSeekBar;
}(HTMLElement);

customElements.define('reddit-video-seek-bar', RedditVideoSeekBar);


}
/*
     FILE ARCHIVED ON 15:53:00 Jun 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:48 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.068
  exclusion.robots.policy: 0.057
  cdx.remote: 0.109
  esindex: 0.01
  LoadShardBlock: 527.042 (6)
  PetaboxLoader3.datanode: 215.015 (7)
  PetaboxLoader3.resolve: 211.153 (2)
  load_resource: 77.419
*/