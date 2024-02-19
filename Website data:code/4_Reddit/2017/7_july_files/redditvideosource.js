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

var RedditVideoSource = function (_HTMLElement) {
  _inherits(RedditVideoSource, _HTMLElement);

  function RedditVideoSource() {
    _classCallCheck(this, RedditVideoSource);

    return _possibleConstructorReturn(this, (RedditVideoSource.__proto__ || Object.getPrototypeOf(RedditVideoSource)).call(this));
  }

  _createClass(RedditVideoSource, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      if (this.parentElement instanceof RedditVideoPlayer) {
        this.parentElement.attachSource(this);
      } else {
        console.warn("<reddit-video-source> should be placed inside of <reddit-video-player>");
      }
    }
  }, {
    key: 'isContentType',
    value: function isContentType(contentType) {
      return this.getAttribute('type') == contentType;
    }
  }, {
    key: 'isMpd',
    value: function isMpd() {
      return this.isContentType(RedditVideoSource.ContentType.MPD);
    }
  }, {
    key: 'isHls',
    value: function isHls() {
      return this.isContentType(RedditVideoSource.ContentType.HLS);
    }
  }], [{
    key: 'observedAttributes',
    get: function get() {
      return ['src', 'type'];
    }
  }]);

  return RedditVideoSource;
}(HTMLElement);

RedditVideoSource.ContentType = {
  MPD: "application/dash+xml",
  HLS: "application/x-mpegURL"
};

customElements.define('reddit-video-source', RedditVideoSource);


}
/*
     FILE ARCHIVED ON 15:52:58 Jun 30, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:27:46 Feb 19, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.132
  exclusion.robots.policy: 0.109
  cdx.remote: 0.183
  esindex: 0.017
  LoadShardBlock: 287.741 (6)
  PetaboxLoader3.datanode: 189.782 (7)
  load_resource: 120.423
  PetaboxLoader3.resolve: 84.536
*/