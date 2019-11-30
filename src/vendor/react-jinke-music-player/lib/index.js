"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CircleProcessBar = exports.PlayModel = exports.Load = exports.AnimatePauseIcon = exports.AnimatePlayIcon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isMobile = _interopRequireDefault(require("is-mobile"));

var _Slider = _interopRequireDefault(require("rc-slider/lib/Slider"));

var _rcSwitch = _interopRequireDefault(require("rc-switch"));

var _downloadjs = _interopRequireDefault(require("downloadjs"));

var _utils = require("./utils");

var _AudioListsPanel = _interopRequireDefault(require("./components/AudioListsPanel"));

var _PlayerMobile = _interopRequireDefault(require("./components/PlayerMobile"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _lyric = _interopRequireDefault(require("./lyric"));

var _headphones = _interopRequireDefault(require("react-icons/lib/fa/headphones"));

var _minusSquareO = _interopRequireDefault(require("react-icons/lib/fa/minus-square-o"));

var _playCircle = _interopRequireDefault(require("react-icons/lib/fa/play-circle"));

var _pauseCircle = _interopRequireDefault(require("react-icons/lib/fa/pause-circle"));

var _angellist = _interopRequireDefault(require("react-icons/lib/fa/angellist"));

var _refresh = _interopRequireDefault(require("react-icons/lib/fa/refresh"));

var _volumeUp = _interopRequireDefault(require("react-icons/lib/md/volume-up"));

var _volumeOff = _interopRequireDefault(require("react-icons/lib/md/volume-off"));

var _cloudDownload = _interopRequireDefault(require("react-icons/lib/fa/cloud-download"));

var _spinner = _interopRequireDefault(require("react-icons/lib/fa/spinner"));

var _repeatOne = _interopRequireDefault(require("react-icons/lib/md/repeat-one"));

var _repeat = _interopRequireDefault(require("react-icons/lib/md/repeat"));

var _arrowShuffle = _interopRequireDefault(require("react-icons/lib/ti/arrow-shuffle"));

var _viewHeadline = _interopRequireDefault(require("react-icons/lib/md/view-headline"));

var _queueMusic = _interopRequireDefault(require("react-icons/lib/md/queue-music"));

var _skipNext = _interopRequireDefault(require("react-icons/lib/md/skip-next"));

var _skipPrevious = _interopRequireDefault(require("react-icons/lib/md/skip-previous"));

var _close = _interopRequireDefault(require("react-icons/lib/md/close"));

var _trashO = _interopRequireDefault(require("react-icons/lib/fa/trash-o"));

require("rc-slider/assets/index.css");

require("rc-switch/assets/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var IS_MOBILE = (0, _isMobile.default)();

var AnimatePlayIcon = function AnimatePlayIcon() {
  return _react.default.createElement(_playCircle.default, {
    className: "react-jinke-music-player-play-icon"
  });
};

exports.AnimatePlayIcon = AnimatePlayIcon;

var AnimatePauseIcon = function AnimatePauseIcon() {
  return _react.default.createElement(_pauseCircle.default, {
    className: "react-jinke-music-player-pause-icon"
  });
};

exports.AnimatePauseIcon = AnimatePauseIcon;

var Load = function Load() {
  return _react.default.createElement("span", {
    className: "loading group",
    key: "loading"
  }, _react.default.createElement(_spinner.default, null));
};

exports.Load = Load;

var PlayModel = function PlayModel(_ref) {
  var visible = _ref.visible,
      value = _ref.value;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)("play-mode-title", {
      "play-mode-title-visible": visible
    }),
    key: "play-mode-title"
  }, value);
}; //迷你模式进度条


exports.PlayModel = PlayModel;

var CircleProcessBar = function CircleProcessBar() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$progress = _ref2.progress,
      progress = _ref2$progress === void 0 ? 0 : _ref2$progress,
      _ref2$r = _ref2.r,
      r = _ref2$r === void 0 ? 40 : _ref2$r;

  var _progress = progress.toFixed(2);

  var perimeter = Math.PI * 2 * r;
  var strokeDasharray = "".concat(~~(perimeter * _progress), " ").concat(~~(perimeter * (1 - _progress)));
  return _react.default.createElement("svg", {
    className: "audio-circle-process-bar"
  }, _react.default.createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "stroke",
    strokeDasharray: strokeDasharray
  }), _react.default.createElement("circle", {
    cx: r,
    cy: r,
    r: r - 1,
    fill: "none",
    className: "bg",
    strokeDasharray: "0 1000"
  }));
};

exports.CircleProcessBar = CircleProcessBar;
var sliderBaseOptions = {
  min: 0,
  step: 0.01,
  trackStyle: {
    backgroundColor: "#31c27c"
  },
  handleStyle: {
    backgroundColor: "#31c27c",
    border: "2px solid #fff"
  }
};

var ReactJkMusicPlayer =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ReactJkMusicPlayer, _PureComponent);

  //初始播放id
  // 列表删除动画时间(ms)
  function ReactJkMusicPlayer(props) {
    var _this;

    _classCallCheck(this, ReactJkMusicPlayer);

    _this = _possibleConstructorReturn(this, (ReactJkMusicPlayer.__proto__ || Object.getPrototypeOf(ReactJkMusicPlayer)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "initPlayId", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioListRemoveAnimateTime", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 350
    });
    Object.defineProperty(_assertThisInitialized(_this), "NETWORK_STATE", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        NETWORK_EMPTY: 0,
        //未初始化
        NETWORK_IDLE: 1,
        //未使用网络 304 缓存
        NETWORK_LOADING: 2,
        //浏览器正在下载数据
        NETWORK_NO_SOURCE: 3 //未找到资源

      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "READY_SUCCESS_STATE", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 4
    });
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        audioLists: [],
        playId: _this.initPlayId,
        //播放id
        name: "",
        //当前歌曲名
        cover: "",
        //当前歌曲封面
        singer: "",
        //当前歌手
        musicSrc: "",
        //当前歌曲链
        lyric: "",
        // 当前歌词
        currentLyric: "",
        isMobile: IS_MOBILE,
        toggle: false,
        pause: true,
        playing: false,
        duration: 0,
        currentTime: 0,
        isLoop: false,
        isMute: false,
        soundValue: 100,
        isDrag: false,
        //是否支持拖拽
        currentX: 0,
        currentY: 0,
        moveX: 0,
        moveY: 0,
        isMove: false,
        loading: false,
        audioListsPanelVisible: false,
        playModelNameVisible: false,
        theme: _this.darkThemeName,
        extendsContent: [],
        //自定义扩展功能按钮
        playMode: "",
        //当前播放模式
        currentAudioVolume: 0,
        //当前音量  静音后恢复到之前记录的音量
        initAnimate: false,
        isInitAutoplay: false,
        isInitRemember: false,
        loadProgress: 0,
        removeId: -1,
        isNeedMobileHack: IS_MOBILE,
        audioLyricVisible: false,
        isChanging: false
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleAudioLyric", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          audioLyricVisible: !_this.state.audioLyricVisible
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "togglePlayMode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var index = _this._PLAY_MODE_.findIndex(function (_ref3) {
          var key = _ref3.key;
          return key === _this.state.playMode;
        });

        var playMode = index === _this._PLAY_MODE_LENGTH_ - 1 ? _this._PLAY_MODE_[0]["key"] : _this._PLAY_MODE_[++index]["key"];

        _this.setState({
          playMode: playMode,
          playModelNameVisible: true,
          playModeTipVisible: true
        });

        _this.props.onPlayModeChange && _this.props.onPlayModeChange(_this.PLAY_MODE[playMode]);
        clearTimeout(_this.playModelTimer);
        _this.playModelTimer = setTimeout(function () {
          _this.setState({
            playModelNameVisible: false,
            playModeTipVisible: false
          });
        }, _this.props.playModeShowTime);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "renderPlayModeIcon", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(playMode) {
        var IconNode = "";
        var animateName = "react-jinke-music-player-mode-icon";

        switch (playMode) {
          case _this.PLAY_MODE["order"]["key"]:
            IconNode = _react.default.createElement(_viewHeadline.default, {
              className: animateName
            });
            break;

          case _this.PLAY_MODE["orderLoop"]["key"]:
            IconNode = _react.default.createElement(_repeat.default, {
              className: animateName
            });
            break;

          case _this.PLAY_MODE["singleLoop"]["key"]:
            IconNode = _react.default.createElement(_repeatOne.default, {
              className: animateName
            });
            break;

          case _this.PLAY_MODE["shufflePlay"]["key"]:
            IconNode = _react.default.createElement(_arrowShuffle.default, {
              className: animateName
            });
            break;

          default:
            IconNode = _react.default.createElement(_viewHeadline.default, {
              className: animateName
            });
        }

        return IconNode;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioListsPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(playId) {
        var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        if (!state) state = _this.state;
        var _state = state,
            currentPlayId = _state.playId,
            pause = _state.pause,
            playing = _state.playing,
            audioLists = _state.audioLists;

        if (Array.isArray(audioLists) && audioLists.length === 0) {
          /*eslint-disable no-console*/
          return console.warn("Your playlist has no songs. and cannot play !");
          /*eslint-disable no-console*/
        } //如果点击当前项 就暂停 或者播放


        if (playId === currentPlayId && !ignore) {
          _this.setState({
            pause: !pause,
            playing: !playing
          });

          return pause ? _this.audio.play() : _this._pauseAudio();
        }

        var _audioLists$find = audioLists.find(function (audio) {
          return audio.id === playId;
        }),
            name = _audioLists$find.name,
            cover = _audioLists$find.cover,
            musicSrc = _audioLists$find.musicSrc,
            singer = _audioLists$find.singer,
            _audioLists$find$lyri = _audioLists$find.lyric,
            lyric = _audioLists$find$lyri === void 0 ? "" : _audioLists$find$lyri;

        var loadAudio = function loadAudio(musicSrc) {
          _this.setState({
            name: name,
            cover: cover,
            musicSrc: musicSrc,
            singer: singer,
            playId: playId,
            lyric: lyric,
            currentTime: 0,
            duration: 0,
            playing: false,
            loading: true,
            loadProgress: 0
          }, function () {
            _this.audio.load();
          });

          _this.props.onAudioPlayTrackChange && _this.props.onAudioPlayTrackChange(playId, audioLists, _this.getBaseAudioInfo());
        };

        switch (_typeof(musicSrc)) {
          case "function":
            musicSrc().then(function (originMusicSrc) {
              loadAudio(originMusicSrc);
            }, _this.onAudioLoadError);
            break;

          default:
            loadAudio(musicSrc);
        }

        console.log("AudioLoaded");
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioResetListsPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(playId) {
        var ignore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var currentPlayId = state.playId,
            pause = state.pause,
            playing = state.playing,
            audioLists = state.audioLists;

        if (Array.isArray(audioLists) && audioLists.length === 0) {
          /*eslint-disable no-console*/
          return console.warn("Your playlist has no songs. and cannot play !");
          /*eslint-disable no-console*/
        } //如果点击当前项 就暂停 或者播放


        var _audioLists$find2 = audioLists.find(function (audio) {
          return audio.id === playId;
        }),
            name = _audioLists$find2.name,
            cover = _audioLists$find2.cover,
            musicSrc = _audioLists$find2.musicSrc,
            singer = _audioLists$find2.singer,
            _audioLists$find2$lyr = _audioLists$find2.lyric,
            lyric = _audioLists$find2$lyr === void 0 ? "" : _audioLists$find2$lyr;

        var loadAudio = function loadAudio(musicSrc) {
          _this.setState({
            name: name,
            cover: cover,
            musicSrc: musicSrc,
            singer: singer,
            playId: playId,
            lyric: lyric,
            paused: true,
            currentTime: 0,
            duration: 0,
            playing: false,
            loading: true,
            loadProgress: 0
          }, function () {
            _this.initLyricParser();

            _this.audio.load();
          });

          _this.props.onAudioPlayTrackChange && _this.props.onAudioPlayTrackChange(playId, audioLists, _this.getBaseAudioInfo());
        };

        switch (_typeof(musicSrc)) {
          case "function":
            musicSrc().then(function (originMusicSrc) {
              loadAudio(originMusicSrc);
            }, _this.onAudioLoadError);
            break;

          default:
            loadAudio(musicSrc);
        }

        console.log("AudioLoaded");
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resetAudioStatus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.audio.pause();

        _this.initPlayInfo([]);

        _this.setState({
          currentTime: 0,
          duration: 0,
          loading: false,
          playing: false,
          pause: true,
          playId: "",
          currentLyric: ""
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "deleteAudioLists", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(audioId) {
        return function (e) {
          e.stopPropagation(); //如果不 传 id  删除全部

          var _this$state = _this.state,
              audioLists = _this$state.audioLists,
              playId = _this$state.playId;

          if (audioLists.length < 1) {
            return;
          }

          _this.lyric && _this.lyric.stop();

          var newAudioLists = _toConsumableArray(audioLists).filter(function (audio) {
            return audio.id !== audioId;
          });

          if (!audioId) {
            return _this.resetAudioStatus();
          } //触发删除动画,等动画结束 删除列表


          _this.setState({
            removeId: audioId
          });

          setTimeout(function () {
            _this.setState({
              audioLists: newAudioLists,
              removeId: -1
            }, function () {
              if (!newAudioLists.length) {
                return _this.resetAudioStatus();
              } // 如果删除的是当前正在播放的 顺延下一首播放


              if (audioId === playId) {
                _this.handlePlay(_this.PLAY_MODE["orderLoop"]["key"]);
              }
            });
          }, _this.audioListRemoveAnimateTime);
          _this.props.onAudioListsChange && _this.props.onAudioListsChange(playId, newAudioLists, _this.getBaseAudioInfo());
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openAudioListsPanel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (_ref4) {
          var audioListsPanelVisible = _ref4.audioListsPanelVisible,
              initAnimate = _ref4.initAnimate;
          return {
            initAnimate: true,
            audioListsPanelVisible: !audioListsPanelVisible
          };
        });

        _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(!_this.state.audioListsPanelVisible);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closeAudioListsPanel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.stopPropagation();

        _this.setState({
          audioListsPanelVisible: false
        });

        _this.props.onAudioListsPanelChange && _this.props.onAudioListsPanelChange(false);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "themeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(isLight) {
        var theme = isLight ? _this.lightThemeName : _this.darkThemeName;

        _this.setState({
          theme: theme
        });

        _this.props.onThemeChange && _this.props.onThemeChange(theme);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioDownload", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.musicSrc) {
          var baseAudioInfo = _this.getBaseAudioInfo();

          var onBeforeAudioDownload = _this.props.onBeforeAudioDownload(baseAudioInfo);

          var transformedDownloadAudioInfo = {};

          if (onBeforeAudioDownload && onBeforeAudioDownload.then) {
            onBeforeAudioDownload.then(function (info) {
              var src = info.src,
                  filename = info.filename,
                  mimeType = info.mimeType;
              transformedDownloadAudioInfo = info;
              (0, _downloadjs.default)(src, filename, mimeType);
            });
          } else {
            (0, _downloadjs.default)(_this.state.musicSrc);
          }

          _this.props.onAudioDownload && _this.props.onAudioDownload(baseAudioInfo, transformedDownloadAudioInfo);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "controllerMouseMove", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref5) {
        var deltaX = _ref5.deltaX,
            deltaY = _ref5.deltaY;

        var isMove = Math.abs(deltaX) >= _this.openPanelPeriphery || Math.abs(deltaY) >= _this.openPanelPeriphery;

        _this.setState({
          isMove: isMove
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "controllerMouseUp", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e, _ref6) {
        var x = _ref6.x,
            y = _ref6.y;

        if (!_this.state.isMove) {
          if (_this.state.isNeedMobileHack) {
            _this.loadAndPlayAudio();

            _this.setState({
              isNeedMobileHack: false
            });
          }

          _this.openPanel();
        }

        _this.setState({
          moveX: x,
          moveY: y
        });

        return false;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "controllerMouseOut", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        _this.isDrag = false;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onHandleProgress", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value) {
        _this.audio.currentTime = _value;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onSound", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setAudioVolume(_this.state.currentAudioVolume);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAudioVolume", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value2) {
        _this.audio.volume = _value2;

        _this.setState({
          currentAudioVolume: _value2,
          soundValue: _value2
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "stopAll", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(target) {
        target.stopPropagation();
        target.preventDefault();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getBoundingClientRect", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(ele) {
        var _ele$getBoundingClien = ele.getBoundingClientRect(),
            left = _ele$getBoundingClien.left,
            top = _ele$getBoundingClien.top;

        return {
          left: left,
          top: top
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioLoop", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (_ref7) {
          var isLoop = _ref7.isLoop;
          return {
            isLoop: !isLoop
          };
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioReload", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.handlePlay(_this.PLAY_MODE["singleLoop"]["key"]);

        _this.props.onAudioReload && _this.props.onAudioReload(_this.getBaseAudioInfo());
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "openPanel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.toggleMode) {
          _this.setState({
            toggle: true
          });

          _this.props.onModeChange && _this.props.onModeChange(_this.toggleModeName.full);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onHidePanel", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          toggle: false,
          audioListsPanelVisible: false
        });

        _this.props.onModeChange && _this.props.onModeChange(_this.toggleModeName.mini);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log("sometimes im here");

        if (_this.state.audioLists.length >= 1) {
          _this.lyric.togglePlay();

          if (_this.state.playing) {
            _this._pauseAudio();
          } else {
            _this.loadAndPlayAudio();

            _this.props.onAudioPlay && _this.props.onAudioPlay(_this.getBaseAudioInfo());
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "canPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setAudioLength();

        if (_this.isChanging) _this.loadAndPlayAudio();

        _this.setState({
          loading: false,
          playing: false,
          isChanging: false
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_pauseAudio", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.audio.pause();

        _this.setState({
          playing: false,
          pause: true
        }, function () {
          _this.lyric && _this.lyric.stop();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onPauseAudio", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.lyric && _this.lyric.stop();
        _this.props.onAudioPause && _this.props.onAudioPause(_this.getBaseAudioInfo());
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "loadAndPlayAudio", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        if (!state) state = _this.state;
        var _this$props = _this.props,
            autoPlay = _this$props.autoPlay,
            remember = _this$props.remember;
        var _state2 = state,
            isInitAutoplay = _state2.isInitAutoplay,
            isInitRemember = _state2.isInitRemember,
            loadProgress = _state2.loadProgress;
        var networkState = _this.audio.networkState;
        var maxLoadProgress = 100;

        _this.setState({
          loading: true
        });

        if (loadProgress < maxLoadProgress) {
          _this.setState({
            loadProgress: loadProgress + 1
          });
        }

        if ( // readyState === this.READY_SUCCESS_STATE &&
        networkState !== _this.NETWORK_STATE.NETWORK_NO_SOURCE) {
          var _this$getLastPlayStat = _this.getLastPlayStatus(),
              pause = _this$getLastPlayStat.pause;

          var isLastPause = remember && !isInitRemember && pause;
          var canPlay = isInitAutoplay || autoPlay === true;

          _this.setState({
            playing: remember ? !isLastPause : canPlay,
            loading: false,
            pause: remember ? isLastPause : !canPlay,
            loadProgress: maxLoadProgress
          }, function () {
            if (remember ? !isLastPause : canPlay) {
              // fuck Safari is need muted :(
              // this.audio.muted = true;
              _this.audio.play();

              console.log("fuck");
            }

            _this.setState({
              isInitAutoplay: true,
              isInitRemember: true
            });
          });
        } else {
          _this.onAudioLoadError();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setAudioLength", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          duration: _this.audio.duration
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioLoadError", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var _this$state2 = _this.state,
            playMode = _this$state2.playMode,
            audioLists = _this$state2.audioLists,
            playId = _this$state2.playId,
            musicSrc = _this$state2.musicSrc;

        _this.lyric.stop(); //如果当前音乐加载出错 尝试播放下一首


        var loadAudioErrorPlayNext = _this.props.loadAudioErrorPlayNext;

        if (loadAudioErrorPlayNext && playId < audioLists.length - 1) {
          _this.handlePlay(playMode);
        } // 如果删除歌曲或其他原因导致列表为空时
        // 这时候会触发 https://developer.mozilla.org/en-US/docs/Web/API/MediaError


        if (musicSrc) {
          var info = _this.getBaseAudioInfo();

          _this.props.onAudioLoadError && _this.props.onAudioLoadError(_objectSpread({}, e, {
            audioInfo: info,
            errMsg: _this.audio.error || null
          }));
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "handlePlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(playMode) {
        var isNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        console.log("im in  handleplay");
        var IconNode = "";
        var _this$state3 = _this.state,
            playId = _this$state3.playId,
            audioLists = _this$state3.audioLists;
        var audioListsLen = audioLists.length;
        var currentPlayIndex = audioLists.findIndex(function (audio) {
          return audio.id === playId;
        });

        switch (playMode) {
          //顺序播放
          case _this.PLAY_MODE["order"]["key"]:
            IconNode = _react.default.createElement(_viewHeadline.default, null); // 拖拽排序后 或者 正常播放 到最后一首歌 就暂停

            if (currentPlayIndex === audioListsLen - 1) return _this._pauseAudio();

            _this.audioListsPlay(isNext ? audioLists[currentPlayIndex + 1].id : audioLists[currentPlayIndex - 1].id);

            break;
          //列表循环

          case _this.PLAY_MODE["orderLoop"]["key"]:
            IconNode = _react.default.createElement(_repeat.default, null);

            if (isNext) {
              if (currentPlayIndex === audioListsLen - 1) {
                return _this.audioListsPlay(audioLists[0].id);
              }

              _this.audioListsPlay(audioLists[currentPlayIndex + 1].id);
            } else {
              if (currentPlayIndex === 0) {
                return _this.audioListsPlay(audioLists[audioListsLen - 1].id);
              }

              _this.audioListsPlay(audioLists[currentPlayIndex - 1].id);
            }

            break;
          //单曲循环

          case _this.PLAY_MODE["singleLoop"]["key"]:
            IconNode = _react.default.createElement(_repeatOne.default, null);
            _this.audio.currentTime = 0;

            _this.audioListsPlay(playId, true);

            break;
          //随机播放

          case _this.PLAY_MODE["shufflePlay"]["key"]:
            {
              IconNode = _react.default.createElement(_arrowShuffle.default, null);
              var randomIndex = (0, _utils.createRandomNum)(0, audioListsLen - 1);
              var randomPlayId = (audioLists[randomIndex] || {}).id;

              _this.audioListsPlay(randomPlayId, true);
            }
            break;

          default:
            IconNode = _react.default.createElement(_viewHeadline.default, null);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioEnd", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.onAudioEnded && _this.props.onAudioEnded(_this.getBaseAudioInfo());

        _this.handlePlay(_this.state.playMode);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioPrevAndNextBasePlayHandle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var playMode = _this.state.playMode;
        var _playMode = "";

        switch (playMode) {
          case _this.PLAY_MODE["shufflePlay"]["key"]:
            _playMode = playMode;
            break;

          default:
            _playMode = _this.PLAY_MODE["orderLoop"]["key"];
            break;
        }

        _this.handlePlay(_playMode, isNext);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioPrevPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.audioPrevAndNextBasePlayHandle(false);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioNextPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.audioPrevAndNextBasePlayHandle(true);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioTimeUpdate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var currentTime = _this.audio.currentTime;

        _this.setState({
          currentTime: currentTime
        });

        if (_this.props.remember) {
          _this.saveLastPlayStatus();
        }

        _this.props.onAudioProgress && _this.props.onAudioProgress(_this.getBaseAudioInfo());
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioSoundChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value3) {
        _this.setAudioVolume(_value3);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioVolumeChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isMute: _this.audio.volume <= 0
        });

        _this.props.onAudioVolumeChange && _this.props.onAudioVolumeChange(_this.audio.volume);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioPlay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          playing: true,
          loading: false
        }, _this.initLyricParser);

        _this.props.onAudioPlay && _this.props.onAudioPlay(_this.getBaseAudioInfo());
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioSeeked", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.state.audioLists.length >= 1) {
          if (_this.state.playing) {
            _this.loadAndPlayAudio();

            setTimeout(function () {
              _this.setState({
                playing: true
              });

              _this.lyric.seek(_this.getLyricPlayTime());
            });
          }

          _this.props.onAudioSeeked && _this.props.onAudioSeeked(_this.getBaseAudioInfo());
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onMute", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          isMute: true,
          soundValue: 0,
          currentAudioVolume: _this.audio.volume
        }, function () {
          _this.audio.volume = 0;
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onAudioAbort", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var audioLists = _this.state.audioLists;

        var audioInfo = _this.getBaseAudioInfo();

        var mergedError = Object.assign({}, e, audioInfo);
        _this.props.onAudioAbort && _this.props.onAudioAbort(mergedError);

        if (audioLists.length) {
          _this.audio.pause(); // this.audio.play();


          _this.lyric.stop();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "toggleMode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(mode) {
        if (mode === _this.toggleModeName["full"]) {
          _this.setState({
            toggle: true
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "audioListsDragEnd", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(fromIndex, toIndex) {
        var _this$state4 = _this.state,
            playId = _this$state4.playId,
            audioLists = _this$state4.audioLists;

        var _audioLists = _toConsumableArray(audioLists);

        var item = _audioLists.splice(fromIndex, 1)[0];

        _audioLists.splice(toIndex, 0, item); //如果拖动正在播放的歌曲 播放Id 等于 拖动后的index


        var _playId = fromIndex === playId ? toIndex : playId;

        _this.setState({
          audioLists: _audioLists,
          playId: _playId
        });

        _this.props.onAudioListsDragEnd && _this.props.onAudioListsDragEnd(fromIndex, toIndex);
        _this.props.onAudioListsChange && _this.props.onAudioListsChange(_playId, _audioLists, _this.getBaseAudioInfo());
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "saveLastPlayStatus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state5 = _this.state,
            currentTime = _this$state5.currentTime,
            playId = _this$state5.playId,
            duration = _this$state5.duration,
            theme = _this$state5.theme,
            soundValue = _this$state5.soundValue,
            playMode = _this$state5.playMode,
            name = _this$state5.name,
            cover = _this$state5.cover,
            singer = _this$state5.singer,
            musicSrc = _this$state5.musicSrc,
            pause = _this$state5.pause;
        var lastPlayStatus = JSON.stringify({
          currentTime: currentTime,
          playId: playId,
          duration: duration,
          theme: theme,
          playMode: playMode,
          soundValue: soundValue,
          name: name,
          cover: cover,
          singer: singer,
          musicSrc: musicSrc,
          pause: pause
        });
        localStorage.setItem("lastPlayStatus", lastPlayStatus);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getLastPlayStatus", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props2 = _this.props,
            theme = _this$props2.theme,
            defaultPlayMode = _this$props2.defaultPlayMode;
        var status = {
          currentTime: 0,
          duration: 0,
          playMode: defaultPlayMode,
          name: "",
          cover: "",
          singer: "",
          musicSrc: "",
          lyric: "",
          playId: _this.getDefaultPlayId(),
          theme: theme,
          pause: false
        };

        try {
          return JSON.parse(localStorage.getItem("lastPlayStatus")) || status;
        } catch (error) {
          return status;
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "mockAutoPlayForMobile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if (_this.props.autoPlay && !_this.state.playing && _this.state.pause) {
          _this.audio.load();

          _this.audio.pause();

          _this.audio.play();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "bindMobileAutoPlayEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        document.addEventListener("touchstart", function () {
          _this.mockAutoPlayForMobile();
        }, {
          once: true
        }); //监听微信准备就绪事件

        document.addEventListener("WeixinJSBridgeReady", function () {
          _this.mockAutoPlayForMobile();
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "bindSafariAutoPlayEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        document.addEventListener("click", function () {
          _this.mockAutoPlayForMobile();
        }, {
          once: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "unBindEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this2;

        (_this2 = _this).bindEvents.apply(_this2, arguments);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "bindEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.audio;
        var eventsNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          waiting: _this.loadAndPlayAudio,
          canplay: _this.canPlay,
          error: _this.onAudioLoadError,
          ended: _this.audioEnd,
          seeked: _this.onAudioSeeked,
          pause: _this.onPauseAudio,
          play: _this.onAudioPlay,
          timeupdate: _this.audioTimeUpdate,
          volumechange: _this.onAudioVolumeChange,
          stalled: _this.onAudioLoadError,
          //当浏览器尝试获取媒体数据，但数据不可用时
          abort: _this.onAudioAbort
        };
        var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var once = _this.props.once;

        for (var name in eventsNames) {
          var _events = eventsNames[name];
          bind ? target.addEventListener(name, _events, {
            once: !!(once && name === "play")
          }) : target.removeEventListener(name, _events);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getPlayInfo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var newAudioLists = audioLists.filter(function (audio) {
          return !audio["id"];
        });
        var lastAudioLists = audioLists.filter(function (audio) {
          return audio["id"];
        });

        var _audioLists = _toConsumableArray(lastAudioLists).concat(_toConsumableArray(newAudioLists.map(function (info) {
          return _objectSpread({}, info, {
            id: (0, _utils.uuId)()
          });
        })));

        var playIndex = Math.max(0, Math.min(_audioLists.length, _this.props.defaultPlayIndex));
        var playId = _this.state.playId || _audioLists[playIndex].id;

        var _ref8 = _audioLists.find(function (_ref9) {
          var id = _ref9.id;
          return id === playId;
        }) || {},
            _ref8$name = _ref8.name,
            name = _ref8$name === void 0 ? "" : _ref8$name,
            _ref8$cover = _ref8.cover,
            cover = _ref8$cover === void 0 ? "" : _ref8$cover,
            _ref8$singer = _ref8.singer,
            singer = _ref8$singer === void 0 ? "" : _ref8$singer,
            _ref8$musicSrc = _ref8.musicSrc,
            musicSrc = _ref8$musicSrc === void 0 ? "" : _ref8$musicSrc,
            _ref8$lyric = _ref8.lyric,
            lyric = _ref8$lyric === void 0 ? "" : _ref8$lyric;

        return {
          name: name,
          cover: cover,
          singer: singer,
          musicSrc: musicSrc,
          lyric: lyric,
          audioLists: _audioLists,
          playId: playId
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getPlayInfoOfNewList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

        var _audioLists = audioLists.map(function (info) {
          return _objectSpread({}, info, {
            id: (0, _utils.uuId)()
          });
        });

        var playIndex = Math.max(0, Math.min(_audioLists.length, _this.props.defaultPlayIndex));
        var playId = _audioLists[playIndex].id;

        var _ref10 = _audioLists.find(function (_ref11) {
          var id = _ref11.id;
          return id === playId;
        }) || {},
            _ref10$name = _ref10.name,
            name = _ref10$name === void 0 ? "" : _ref10$name,
            _ref10$cover = _ref10.cover,
            cover = _ref10$cover === void 0 ? "" : _ref10$cover,
            _ref10$singer = _ref10.singer,
            singer = _ref10$singer === void 0 ? "" : _ref10$singer,
            _ref10$musicSrc = _ref10.musicSrc,
            musicSrc = _ref10$musicSrc === void 0 ? "" : _ref10$musicSrc,
            _ref10$lyric = _ref10.lyric,
            lyric = _ref10$lyric === void 0 ? "" : _ref10$lyric;

        return {
          name: name,
          cover: cover,
          singer: singer,
          musicSrc: musicSrc,
          lyric: lyric,
          audioLists: _audioLists,
          playId: playId
        };
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "initPlayInfo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(audioLists, cb) {
        var info = _this.getPlayInfo(audioLists);

        switch (_typeof(info.musicSrc)) {
          case "function":
            info.musicSrc().then(function (originMusicSrc) {
              _this.setState(_objectSpread({}, info, {
                musicSrc: originMusicSrc
              }), cb);
            }, _this.onAudioLoadError);
            break;

          default:
            _this.setState(info, cb);

        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resetPlayInfo", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(audioLists, cb) {
        var _this$props3 = _this.props,
            mode = _this$props3.mode,
            defaultPlayIndex = _this$props3.defaultPlayIndex,
            defaultPlayMode = _this$props3.defaultPlayMode,
            remember = _this$props3.remember,
            theme = _this$props3.theme;

        _this.toggleMode(mode);

        var info = _this.getPlayInfoOfNewList(audioLists);

        var lastPlayStatus = remember ? _this.getLastPlayStatus(defaultPlayIndex) : {
          playMode: defaultPlayMode,
          theme: theme
        };

        switch (_typeof(info.musicSrc)) {
          case "function":
            info.musicSrc().then(function (originMusicSrc) {
              _this.setState(_objectSpread({}, info, {
                musicSrc: originMusicSrc
              }, lastPlayStatus), cb);
            }, _this.onAudioLoadError);
            break;

          default:
            _this.setState(info, cb);

        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "listenerIsMobile", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref12) {
        var matches = _ref12.matches;

        _this.setState({
          isMobile: !!matches
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "addMobileListener", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.media = window.matchMedia("(max-width: 768px) and (orientation : portrait)");

        _this.media.addListener(_this.listenerIsMobile);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "setDefaultAudioVolume", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$props4 = _this.props,
            defaultVolume = _this$props4.defaultVolume,
            remember = _this$props4.remember; //音量 [0-100]

        _this.defaultVolume = Math.max(0, Math.min(defaultVolume, 100)) / 100;

        var _this$getLastPlayStat2 = _this.getLastPlayStatus(),
            _this$getLastPlayStat3 = _this$getLastPlayStat2.soundValue,
            soundValue = _this$getLastPlayStat3 === void 0 ? _this.defaultVolume : _this$getLastPlayStat3;

        _this.setAudioVolume(remember ? soundValue : _this.defaultVolume);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getDefaultPlayId", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var audioLists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.audioLists;
        var playIndex = Math.max(0, Math.min(audioLists.length, _this.props.defaultPlayIndex));
        return audioLists[playIndex] && audioLists[playIndex].id;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getLyricPlayTime", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _formatTime$split = (0, _utils.formatTime)(_this.audio.currentTime).split(":"),
            _formatTime$split2 = _slicedToArray(_formatTime$split, 2),
            m = _formatTime$split2[0],
            s = _formatTime$split2[1];

        return m * 1000 + s * 10;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "initLyricParser", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.lyric = undefined;
        _this.lyric = new _lyric.default(_this.state.lyric, _this.onLyricChange);

        _this.lyric.stop();

        if (_this.props.showLyric && _this.state.playing) {
          _this.lyric.seek(_this.getLyricPlayTime());

          _this.lyric.play();
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onLyricChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref13) {
        var lineNum = _ref13.lineNum,
            txt = _ref13.txt;

        _this.setState({
          currentLyric: txt
        });

        _this.props.onAudioLyricChange && _this.props.onAudioLyricChange(lineNum, txt);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateTheme", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(theme) {
        if (theme && (theme === _this.lightThemeName || theme === _this.darkThemeName)) {
          _this.setState({
            theme: theme
          });

          _this.props.onThemeChange && _this.props.onThemeChange(theme);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateMode", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(mode) {
        if (mode && mode !== _this.props.mode && (mode === _this.toggleModeName.full || mode === _this.toggleModeName.mini)) {
          _this.setState({
            toggle: mode === _this.toggleModeName.full
          });

          _this.props.onModeChange && _this.props.onModeChange(mode);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updateAudioLists", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(audioLists) {
        var newAudioLists = _toConsumableArray(_this.state.audioLists).concat(_toConsumableArray(audioLists.filter(function (audio) {
          return _this.state.audioLists.findIndex(function (v) {
            return v.musicSrc === audio.musicSrc;
          }) === -1;
        })));

        _this.initPlayInfo(newAudioLists);

        _this.bindEvents(_this.audio);

        _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, audioLists, _this.getBaseAudioInfo());
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "updatePlayIndex", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(playIndex) {
        // 播放索引 改变
        var currentPlayIndex = _this.state.audioLists.findIndex(function (audio) {
          return audio.id === _this.state.playId;
        });

        if (currentPlayIndex !== playIndex) {
          var _playIndex = Math.max(0, Math.min(_this.state.audioLists.length, playIndex));

          var currentPlay = _this.state.audioLists[_playIndex];

          if (currentPlay && currentPlay.id) {
            _this.audioListsPlay(currentPlay.id, true);
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onGetAudioInstance", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.getAudioInstance && _this.props.getAudioInstance(_this.audio);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "changeAudioLists", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(audioLists) {
        _this.resetAudioStatus();

        _this.props.onAudioListsChange && _this.props.onAudioListsChange(_this.state.playId, audioLists, _this.getBaseAudioInfo());

        _this.setState({
          isChanging: true
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resetPlayList", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(state) {
        // 播放索引 改变
        var _playIndex = Math.max(0, Math.min(state.audioLists.length, _this.props.defaultPlayIndex));

        var currentPlay = state.audioLists[_playIndex];

        if (currentPlay && currentPlay.id) {
          _this.audioResetListsPlay(currentPlay.id, true, state);
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "bindUnhandledRejection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.addEventListener("unhandledrejection", _this.onAudioLoadError);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "unBindUnhandledRejection", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.removeEventListener("unhandledrejection", _this.onAudioLoadError);
      }
    });
    _this.audio = null; //当前播放器

    _this.lightThemeName = "light";
    _this.darkThemeName = "dark"; //模式配置

    _this.toggleModeName = {
      full: "full",
      mini: "mini"
    };
    _this.targetId = "music-player-controller";
    _this.openPanelPeriphery = 1; //移动差值 在 这之间 认为是点击打开panel

    _this.x = 0;
    _this.y = 0;
    _this.isDrag = false;
    var _props$playModeText = props.playModeText,
        order = _props$playModeText.order,
        orderLoop = _props$playModeText.orderLoop,
        singleLoop = _props$playModeText.singleLoop,
        shufflePlay = _props$playModeText.shufflePlay; //播放模式配置

    _this.PLAY_MODE = {
      order: {
        key: "order",
        value: order
      },
      orderLoop: {
        key: "orderLoop",
        value: orderLoop
      },
      singleLoop: {
        key: "singleLoop",
        value: singleLoop
      },
      shufflePlay: {
        key: "shufflePlay",
        value: shufflePlay
      }
    };
    _this._PLAY_MODE_ = Object.values(_this.PLAY_MODE);
    _this._PLAY_MODE_LENGTH_ = _this._PLAY_MODE_.length;
    return _this;
  }

  _createClass(ReactJkMusicPlayer, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          controllerTitle = _props.controllerTitle,
          closeText = _props.closeText,
          openText = _props.openText,
          notContentText = _props.notContentText,
          drag = _props.drag,
          style = _props.style,
          showDownload = _props.showDownload,
          showPlay = _props.showPlay,
          showReload = _props.showReload,
          showPlayMode = _props.showPlayMode,
          showThemeSwitch = _props.showThemeSwitch,
          panelTitle = _props.panelTitle,
          checkedText = _props.checkedText,
          unCheckedText = _props.unCheckedText,
          toggleMode = _props.toggleMode,
          showMiniModeCover = _props.showMiniModeCover,
          extendsContent = _props.extendsContent,
          defaultPlayMode = _props.defaultPlayMode,
          seeked = _props.seeked,
          showProgressLoadBar = _props.showProgressLoadBar,
          bounds = _props.bounds,
          defaultPosition = _props.defaultPosition,
          showMiniProcessBar = _props.showMiniProcessBar,
          preload = _props.preload,
          glassBg = _props.glassBg,
          remove = _props.remove,
          lyricClassName = _props.lyricClassName,
          showLyric = _props.showLyric,
          emptyLyricPlaceholder = _props.emptyLyricPlaceholder,
          getContainer = _props.getContainer,
          autoHiddenCover = _props.autoHiddenCover;
      var _state3 = this.state,
          toggle = _state3.toggle,
          playing = _state3.playing,
          duration = _state3.duration,
          currentTime = _state3.currentTime,
          isMute = _state3.isMute,
          soundValue = _state3.soundValue,
          moveX = _state3.moveX,
          moveY = _state3.moveY,
          loading = _state3.loading,
          audioListsPanelVisible = _state3.audioListsPanelVisible,
          pause = _state3.pause,
          theme = _state3.theme,
          name = _state3.name,
          cover = _state3.cover,
          singer = _state3.singer,
          musicSrc = _state3.musicSrc,
          playId = _state3.playId,
          isMobile = _state3.isMobile,
          playMode = _state3.playMode,
          playModeTipVisible = _state3.playModeTipVisible,
          playModelNameVisible = _state3.playModelNameVisible,
          initAnimate = _state3.initAnimate,
          loadProgress = _state3.loadProgress,
          audioLists = _state3.audioLists,
          removeId = _state3.removeId,
          currentLyric = _state3.currentLyric,
          audioLyricVisible = _state3.audioLyricVisible,
          isChanging = _state3.isChanging;
      var preloadState = preload === false || preload === "none" ? {} : preload === true ? {
        preload: "auto"
      } : {
        preload: preload
      };
      var panelToggleAnimate = initAnimate ? {
        show: audioListsPanelVisible,
        hide: !audioListsPanelVisible
      } : {
        show: audioListsPanelVisible
      };
      var _playMode_ = this.PLAY_MODE[playMode || defaultPlayMode];
      var currentPlayMode = _playMode_["key"];
      var currentPlayModeName = _playMode_["value"];
      var isShowMiniModeCover = showMiniModeCover && !autoHiddenCover || autoHiddenCover && cover ? {
        style: {
          backgroundImage: "url(".concat(cover, ")")
        }
      } : {};

      var _currentTime = (0, _utils.formatTime)(currentTime);

      var _duration = (0, _utils.formatTime)(duration);

      var progressHandler = seeked ? {
        onChange: this.onHandleProgress,
        onAfterChange: this.onAudioSeeked
      } : {}; //进度条

      var ProgressBar = _react.default.createElement(_Slider.default, _extends({
        max: Math.ceil(duration),
        defaultValue: 0,
        value: Math.ceil(currentTime)
      }, progressHandler, sliderBaseOptions)); //下载按钮


      var DownloadComponent = showDownload && _react.default.createElement("span", _extends({
        className: "group audio-download"
      }, _defineProperty({}, IS_MOBILE ? "onTouchStart" : "onClick", this.onAudioDownload)), _react.default.createElement(_cloudDownload.default, null)); //主题开关


      var ThemeSwitchComponent = showThemeSwitch && _react.default.createElement("span", {
        className: "group theme-switch"
      }, _react.default.createElement(_rcSwitch.default, {
        className: "theme-switch-container",
        onChange: this.themeChange,
        checkedChildren: checkedText,
        unCheckedChildren: unCheckedText,
        checked: theme === this.lightThemeName
      })); //重放


      var ReloadComponent = showReload && _react.default.createElement("span", _extends({
        className: "group reload-btn"
      }, IS_MOBILE ? {
        onTouchStart: this.onAudioReload
      } : {
        onClick: this.onAudioReload
      }, {
        key: "reload-btn",
        title: "Reload"
      }), _react.default.createElement(_refresh.default, null)); //歌词


      var LyricComponent = showLyric && _react.default.createElement("span", _extends({
        className: (0, _classnames.default)("group lyric-btn", {
          "lyric-btn-active": audioLyricVisible
        })
      }, IS_MOBILE ? {
        onTouchStart: this.toggleAudioLyric
      } : {
        onClick: this.toggleAudioLyric
      }, {
        key: "lyric-btn",
        title: "toggle lyric"
      }), _react.default.createElement(_angellist.default, null)); //播放模式


      var PlayModeComponent = showPlayMode ? _react.default.createElement("span", _extends({
        className: (0, _classnames.default)("group loop-btn")
      }, IS_MOBILE ? {
        onTouchStart: this.togglePlayMode
      } : {
        onClick: this.togglePlayMode
      }, {
        key: "play-mode-btn",
        title: this.PLAY_MODE[currentPlayMode]["value"]
      }), this.renderPlayModeIcon(currentPlayMode)) : undefined;
      var miniProcessBarR = isMobile ? 30 : 40;

      var AudioController = _react.default.createElement("div", {
        className: (0, _classnames.default)("react-jinke-music-player"),
        key: "react-jinke-music-player",
        style: defaultPosition
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)("music-player"),
        key: "music-player"
      }, showMiniProcessBar ? _react.default.createElement(CircleProcessBar, {
        progress: currentTime / duration,
        r: miniProcessBarR
      }) : undefined, _react.default.createElement("div", _extends({
        key: "controller",
        id: this.targetId,
        className: (0, _classnames.default)("scale", "music-player-controller", {
          "music-player-playing": this.state.playing
        })
      }, isShowMiniModeCover), loading ? _react.default.createElement(Load, null) : _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
        className: "controller-title",
        key: "controller-title"
      }, controllerTitle), _react.default.createElement("div", {
        key: "setting",
        className: "music-player-controller-setting"
      }, toggle ? closeText : openText)))));

      var container = getContainer() || document.body;
      return (0, _reactDom.createPortal)(_react.default.createElement("div", {
        className: (0, _classnames.default)("react-jinke-music-player-main", {
          "light-theme": theme === this.lightThemeName,
          "dark-theme": theme === this.darkThemeName
        }, className),
        style: style
      }, toggle && isMobile ? _react.default.createElement(_PlayerMobile.default, {
        playing: playing,
        loading: loading,
        pause: pause,
        name: name,
        singer: singer,
        cover: cover,
        themeSwitch: ThemeSwitchComponent,
        duration: _duration,
        currentTime: _currentTime,
        progressBar: ProgressBar,
        onPlay: this.onPlay,
        currentPlayModeName: this.PLAY_MODE[currentPlayMode]["value"],
        playMode: PlayModeComponent,
        audioNextPlay: this.audioNextPlay,
        audioPrevPlay: this.audioPrevPlay,
        playListsIcon: _react.default.createElement(_queueMusic.default, null),
        reloadIcon: ReloadComponent,
        downloadIcon: DownloadComponent,
        nextAudioIcon: _react.default.createElement(_skipNext.default, null),
        prevAudioIcon: _react.default.createElement(_skipPrevious.default, null),
        playIcon: _react.default.createElement(AnimatePlayIcon, null),
        pauseIcon: _react.default.createElement(AnimatePauseIcon, null),
        closeIcon: _react.default.createElement(_close.default, null),
        loadingIcon: _react.default.createElement(Load, null),
        playModeTipVisible: playModeTipVisible,
        openAudioListsPanel: this.openAudioListsPanel,
        onClose: this.onHidePanel,
        extendsContent: extendsContent,
        glassBg: glassBg,
        LyricIcon: LyricComponent,
        autoHiddenCover: autoHiddenCover
      }) : undefined, toggle ? undefined : drag ? _react.default.createElement(_reactDraggable.default, {
        bounds: bounds,
        position: {
          x: moveX,
          y: moveY
        },
        onDrag: this.controllerMouseMove,
        onStop: this.controllerMouseUp,
        onStart: this.controllerMouseMove
      }, AudioController) : _react.default.createElement(_react.Fragment, null, AudioController), toggle ? isMobile ? undefined : _react.default.createElement("div", {
        key: "panel",
        className: (0, _classnames.default)("music-player-panel", "translate", {
          "glass-bg": glassBg
        })
      }, _react.default.createElement("section", {
        className: "panel-content",
        key: "panel-content"
      }, (!autoHiddenCover || autoHiddenCover && cover) && _react.default.createElement("div", {
        className: (0, _classnames.default)("img-content", "img-rotate", {
          "img-rotate-pause": pause || !playing || !cover
        }),
        style: {
          backgroundImage: "url(".concat(cover, ")")
        },
        key: "img-content"
      }), _react.default.createElement("div", {
        className: "progress-bar-content",
        key: "progress-bar-content"
      }, _react.default.createElement("span", {
        className: "audio-title"
      }, name, " ", singer ? "- ".concat(singer) : ""), _react.default.createElement("section", {
        className: "audio-main"
      }, _react.default.createElement("span", {
        key: "current-time",
        className: "current-time"
      }, loading ? "--" : _currentTime), _react.default.createElement("div", {
        className: "progress-bar",
        key: "progress-bar"
      }, showProgressLoadBar ? _react.default.createElement("div", {
        className: "progress-load-bar",
        key: "progress-load-bar",
        style: {
          width: "".concat(Math.min(loadProgress, 100), "%")
        }
      }) : undefined, ProgressBar), _react.default.createElement("span", {
        key: "duration",
        className: "duration"
      }, loading ? "--" : _duration))), _react.default.createElement("div", {
        className: "player-content",
        key: "player-content"
      }, loading ? _react.default.createElement(Load, null) : showPlay ? _react.default.createElement("span", {
        className: "group"
      }, _react.default.createElement("span", _extends({
        className: "group prev-audio",
        title: "Previous track"
      }, IS_MOBILE ? {
        onTouchStart: this.audioPrevPlay
      } : {
        onClick: this.audioPrevPlay
      }), _react.default.createElement(_skipPrevious.default, null)), _react.default.createElement("span", _extends({
        className: "group play-btn",
        key: "play-btn",
        ref: function ref(node) {
          return _this3.playBtn = node;
        }
      }, IS_MOBILE ? {
        onTouchStart: this.onPlay
      } : {
        onClick: this.onPlay
      }, {
        title: playing ? "Click to pause" : "Click to play"
      }), playing ? _react.default.createElement("span", null, _react.default.createElement(AnimatePauseIcon, null)) : _react.default.createElement("span", null, _react.default.createElement(AnimatePlayIcon, null))), _react.default.createElement("span", _extends({
        className: "group next-audio",
        title: "Next track"
      }, IS_MOBILE ? {
        onTouchStart: this.audioNextPlay
      } : {
        onClick: this.audioNextPlay
      }), _react.default.createElement(_skipNext.default, null))) : undefined, ReloadComponent, DownloadComponent, ThemeSwitchComponent, extendsContent && extendsContent.length >= 1 ? extendsContent.map(function (content) {
        return content;
      }) : undefined, _react.default.createElement("span", {
        className: "group play-sounds",
        key: "play-sound",
        title: "Volume"
      }, isMute ? _react.default.createElement("span", _extends({
        className: "sounds-icon"
      }, IS_MOBILE ? {
        onTouchStart: this.onSound
      } : {
        onClick: this.onSound
      }), _react.default.createElement(_volumeOff.default, null)) : _react.default.createElement("span", _extends({
        className: "sounds-icon"
      }, IS_MOBILE ? {
        onTouchStart: this.onMute
      } : {
        onClick: this.onMute
      }), _react.default.createElement(_volumeUp.default, null)), _react.default.createElement(_Slider.default, _extends({
        max: 1,
        value: soundValue,
        onChange: this.audioSoundChange,
        className: "sound-operation"
      }, sliderBaseOptions))), PlayModeComponent, LyricComponent, _react.default.createElement("span", _extends({
        className: "group audio-lists-btn",
        key: "audio-lists-btn",
        title: "play lists"
      }, IS_MOBILE ? {
        onTouchStart: this.openAudioListsPanel
      } : {
        onClick: this.openAudioListsPanel
      }), _react.default.createElement("span", {
        className: "audio-lists-icon"
      }, _react.default.createElement(_queueMusic.default, null)), _react.default.createElement("span", {
        className: "audio-lists-num"
      }, audioLists.length)), toggleMode ? _react.default.createElement("span", _extends({
        className: "group hide-panel",
        key: "hide-panel-btn"
      }, IS_MOBILE ? {
        onTouchStart: this.onHidePanel
      } : {
        onClick: this.onHidePanel
      }), _react.default.createElement(_minusSquareO.default, null)) : undefined)), _react.default.createElement(PlayModel, {
        visible: playModelNameVisible,
        value: currentPlayModeName
      })) : undefined, _react.default.createElement(_AudioListsPanel.default, {
        playId: playId,
        pause: pause,
        loading: loading ? _react.default.createElement(Load, null) : undefined,
        visible: audioListsPanelVisible,
        audioLists: audioLists,
        notContentText: notContentText,
        onPlay: this.audioListsPlay,
        onCancel: this.closeAudioListsPanel,
        playIcon: _react.default.createElement(AnimatePlayIcon, null),
        pauseIcon: _react.default.createElement(AnimatePauseIcon, null),
        closeIcon: _react.default.createElement(_close.default, null),
        panelTitle: panelTitle,
        isMobile: IS_MOBILE,
        panelToggleAnimate: panelToggleAnimate,
        glassBg: glassBg,
        cover: cover,
        remove: remove,
        deleteIcon: _react.default.createElement(_trashO.default, null),
        onDelete: this.deleteAudioLists,
        removeId: removeId,
        audioListsDragEnd: this.audioListsDragEnd
      }), audioLyricVisible && _react.default.createElement(_reactDraggable.default, null, _react.default.createElement("div", {
        className: (0, _classnames.default)("music-player-lyric", lyricClassName)
      }, currentLyric || emptyLyricPlaceholder)), _react.default.createElement("audio", _extends({
        className: "music-player-audio"
      }, preloadState, {
        src: musicSrc,
        ref: function ref(node) {
          return _this3.audio = node;
        }
      }))), container);
    }
  }, {
    key: "getBaseAudioInfo",
    //返回给使用者的 音乐信息
    value: function getBaseAudioInfo() {
      var _state4 = this.state,
          cover = _state4.cover,
          name = _state4.name,
          musicSrc = _state4.musicSrc,
          soundValue = _state4.soundValue,
          lyric = _state4.lyric;
      var _audio = this.audio,
          currentTime = _audio.currentTime,
          duration = _audio.duration,
          muted = _audio.muted,
          networkState = _audio.networkState,
          readyState = _audio.readyState,
          played = _audio.played,
          paused = _audio.paused,
          ended = _audio.ended,
          startDate = _audio.startDate;
      return {
        cover: cover,
        name: name,
        musicSrc: musicSrc,
        volume: soundValue,
        currentTime: currentTime,
        duration: duration,
        muted: muted,
        networkState: networkState,
        readyState: readyState,
        played: played,
        paused: paused,
        ended: ended,
        startDate: startDate,
        lyric: lyric
      };
    } //播放

  }, {
    key: "componentWillReceiveProps",
    //当父组件 更新 props 时 如 audioLists 改变 更新播放信息
    value: function componentWillReceiveProps(_ref15) {
      var _this4 = this;

      var audioLists = _ref15.audioLists,
          playIndex = _ref15.playIndex,
          theme = _ref15.theme,
          mode = _ref15.mode,
          defaultPlayIndex = _ref15.defaultPlayIndex,
          clearPriorAudioLists = _ref15.clearPriorAudioLists,
          remember = _ref15.remember,
          defaultPlayMode = _ref15.defaultPlayMode;

      if (!(0, _utils.arrayEqual)(audioLists)(this.props.audioLists)) {
        if (clearPriorAudioLists) {
          this.changeAudioLists(audioLists);

          if (audioLists.length >= 1) {
            var info = this.getPlayInfoOfNewList(audioLists);
            var lastPlayStatus = remember ? this.getLastPlayStatus(defaultPlayIndex) : {
              playMode: defaultPlayMode,
              theme: theme
            };

            switch (_typeof(info.musicSrc)) {
              case "function":
                info.musicSrc().then(function (val) {
                  _this4.setState(_objectSpread({}, info, {
                    musicSrc: val
                  }, lastPlayStatus));
                }, this.onAudioLoadError);
                break;

              default:
                this.setState(_objectSpread({}, info, lastPlayStatus));
            }
          }
        } else {
          this.updateAudioLists(audioLists);
        }
      } else {
        this.updatePlayIndex(playIndex);
      }

      this.updateTheme(theme);
      this.updateMode(mode);
    }
  }, {
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(nextProps, nextState) {
      if (nextProps.clearPriorAudioLists) {
        if (nextState.isChanging !== this.state.isChanging) {
          this.resetPlayList(nextState);
        }
      }
    } //合并state 更新初始值

  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this5 = this;

      var _props2 = this.props,
          mode = _props2.mode,
          audioLists = _props2.audioLists,
          defaultPlayMode = _props2.defaultPlayMode,
          remember = _props2.remember,
          theme = _props2.theme,
          defaultPlayIndex = _props2.defaultPlayIndex; //切换 'mini' 或者 'full' 模式

      this.toggleMode(mode);

      if (audioLists.length >= 1) {
        var info = this.getPlayInfo(audioLists);
        var lastPlayStatus = remember ? this.getLastPlayStatus(defaultPlayIndex) : {
          playMode: defaultPlayMode,
          theme: theme
        };

        switch (_typeof(info.musicSrc)) {
          case "function":
            info.musicSrc().then(function (val) {
              _this5.setState(_objectSpread({}, info, {
                musicSrc: val
              }, lastPlayStatus));
            }, this.onAudioLoadError);
            break;

          default:
            this.setState(_objectSpread({}, info, lastPlayStatus));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unBindEvents(this.audio, undefined, false);
      this.unBindUnhandledRejection();
      this.media.removeListener(this.listenerIsMobile);
      this.media = undefined;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.addMobileListener();
      this.setDefaultAudioVolume();
      this.bindUnhandledRejection();

      if (this.props.audioLists.length >= 1) {
        this.bindEvents(this.audio);
        this.onGetAudioInstance();
        this.initLyricParser();

        if (IS_MOBILE) {
          this.bindMobileAutoPlayEvents();
        }

        if (!IS_MOBILE && (0, _utils.isSafari)()) {
          this.bindSafariAutoPlayEvents();
        }
      }
    }
  }]);

  return ReactJkMusicPlayer;
}(_react.PureComponent);

exports.default = ReactJkMusicPlayer;
Object.defineProperty(ReactJkMusicPlayer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    audioLists: [],
    theme: "dark",
    mode: "mini",
    playModeText: {
      order: "order",
      orderLoop: "orderLoop",
      singleLoop: "singleLoop",
      shufflePlay: "shufflePlay"
    },
    defaultPlayMode: "order",
    defaultPosition: {
      left: 0,
      top: 0
    },
    controllerTitle: _react.default.createElement(_headphones.default, null),
    panelTitle: "PlayList",
    closeText: "close",
    openText: "open",
    notContentText: "no music",
    checkedText: "",
    unCheckedText: "",
    once: false,
    //onAudioPlay 事件  是否只触发一次
    drag: true,
    toggleMode: true,
    //能换在迷你 和完整模式下 互相切换
    showMiniModeCover: true,
    //迷你模式下 是否显示封面图
    showDownload: true,
    showPlay: true,
    showReload: true,
    showPlayMode: true,
    showThemeSwitch: true,
    showLyric: false,
    playModeTipVisible: false,
    //手机端切换播放模式
    autoPlay: true,
    defaultVolume: 100,
    showProgressLoadBar: true,
    //音频预加载进度
    seeked: true,
    playModeShowTime: 600,
    //播放模式提示 显示时间,
    bounds: "body",
    //mini 模式拖拽的可移动边界
    showMiniProcessBar: false,
    //是否在迷你模式 显示进度条
    loadAudioErrorPlayNext: true,
    // 加载音频失败时 是否尝试播放下一首
    preload: false,
    //是否在页面加载后立即加载音频
    glassBg: false,
    //是否是毛玻璃效果
    remember: false,
    //是否记住当前播放状态
    remove: true,
    //音乐是否可以删除
    defaultPlayIndex: 0,
    //默认播放索引
    emptyLyricPlaceholder: "NO LYRIC",
    getContainer: function getContainer() {
      return document.body;
    },
    // 播放器挂载的节点
    autoHiddenCover: false,
    // 当前播放歌曲没有封面时是否自动隐藏
    onBeforeAudioDownload: function onBeforeAudioDownload() {} // 下载前转换音频地址等

  }
});
Object.defineProperty(ReactJkMusicPlayer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    audioLists: _propTypes.default.array.isRequired,
    theme: _propTypes.default.oneOf(["dark", "light"]),
    mode: _propTypes.default.oneOf(["mini", "full"]),
    defaultPlayMode: _propTypes.default.oneOf(["order", "orderLoop", "singleLoop", "shufflePlay"]),
    drag: _propTypes.default.bool,
    seeked: _propTypes.default.bool,
    autoPlay: _propTypes.default.bool,
    playModeText: _propTypes.default.object,
    panelTitle: _propTypes.default.string,
    closeText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    openText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    notContentText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    controllerTitle: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    defaultPosition: _propTypes.default.shape({
      top: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
      left: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
      right: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
      bottom: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
    }),
    onAudioPlay: _propTypes.default.func,
    onAudioPause: _propTypes.default.func,
    onAudioEnded: _propTypes.default.func,
    onAudioAbort: _propTypes.default.func,
    onAudioVolumeChange: _propTypes.default.func,
    onAudioLoadError: _propTypes.default.func,
    onAudioProgress: _propTypes.default.func,
    onAudioSeeked: _propTypes.default.func,
    onAudioDownload: _propTypes.default.func,
    onAudioReload: _propTypes.default.func,
    onThemeChange: _propTypes.default.func,
    onAudioListsChange: _propTypes.default.func,
    onPlayModeChange: _propTypes.default.func,
    onModeChange: _propTypes.default.func,
    onAudioListsPanelChange: _propTypes.default.func,
    onAudioPlayTrackChange: _propTypes.default.func,
    onAudioListsDragEnd: _propTypes.default.func,
    onAudioLyricChange: _propTypes.default.func,
    showDownload: _propTypes.default.bool,
    showPlay: _propTypes.default.bool,
    showReload: _propTypes.default.bool,
    showPlayMode: _propTypes.default.bool,
    showThemeSwitch: _propTypes.default.bool,
    showMiniModeCover: _propTypes.default.bool,
    toggleMode: _propTypes.default.bool,
    once: _propTypes.default.bool,
    extendsContent: _propTypes.default.array,
    checkedText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    unCheckedText: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    defaultVolume: _propTypes.default.number,
    playModeShowTime: _propTypes.default.number,
    bounds: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    showMiniProcessBar: _propTypes.default.bool,
    loadAudioErrorPlayNext: _propTypes.default.bool,
    preload: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(["auto", "metadata", "none"])]),
    glassBg: _propTypes.default.bool,
    remember: _propTypes.default.bool,
    remove: _propTypes.default.bool,
    defaultPlayIndex: _propTypes.default.number,
    playIndex: _propTypes.default.number,
    lyricClassName: _propTypes.default.string,
    emptyLyricPlaceholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    showLyric: _propTypes.default.bool,
    getContainer: _propTypes.default.func,
    getAudioInstance: _propTypes.default.func,
    onBeforeAudioDownload: _propTypes.default.func,
    autoHiddenCover: _propTypes.default.bool
  }
});