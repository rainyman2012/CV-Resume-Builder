"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _libraryMusic = _interopRequireDefault(require("react-icons/lib/md/library-music"));

var _angleDoubleDown = _interopRequireDefault(require("react-icons/lib/fa/angle-double-down"));

var _ReactDragListView = _interopRequireDefault(require("react-drag-listview/lib/ReactDragListView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var AudioListsPanel = function AudioListsPanel(_ref) {
  var audioLists = _ref.audioLists,
      notContentText = _ref.notContentText,
      onCancel = _ref.onCancel,
      onDelete = _ref.onDelete,
      onPlay = _ref.onPlay,
      pause = _ref.pause,
      playId = _ref.playId,
      loading = _ref.loading,
      playIcon = _ref.playIcon,
      pauseIcon = _ref.pauseIcon,
      closeIcon = _ref.closeIcon,
      deleteIcon = _ref.deleteIcon,
      panelTitle = _ref.panelTitle,
      panelToggleAnimate = _ref.panelToggleAnimate,
      glassBg = _ref.glassBg,
      remove = _ref.remove,
      removeId = _ref.removeId,
      audioListsDragEnd = _ref.audioListsDragEnd;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)("audio-lists-panel", panelToggleAnimate, {
      "glass-bg": glassBg
    }),
    key: "audio-list-panel"
  }, _react.default.createElement("div", {
    className: "audio-lists-panel-header"
  }, _react.default.createElement("h2", {
    className: "title"
  }, _react.default.createElement("span", {
    key: "panel-title"
  }, panelTitle, " / "), _react.default.createElement("span", {
    className: "num",
    key: "num"
  }, audioLists.length), _react.default.createElement("span", {
    key: "close-btn",
    className: "close-btn",
    title: "Close",
    onClick: onCancel
  }, _react.default.createElement(_angleDoubleDown.default, null)), remove ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
    className: "line",
    key: "line"
  }), _react.default.createElement("span", {
    key: "delete-btn",
    className: "delete-btn",
    title: "Delete audio lists",
    onClick: onDelete()
  }, deleteIcon)) : undefined)), _react.default.createElement("div", {
    className: (0, _classnames.default)("audio-lists-panel-content", {
      "no-content": audioLists.length < 1
    }),
    key: "audio-lists-panel-content"
  }, audioLists.length >= 1 ? _react.default.createElement(_ReactDragListView.default, {
    nodeSelector: "li",
    handleSelector: ".player-name",
    lineClassName: "audio-lists-panel-drag-line",
    onDragEnd: audioListsDragEnd
  }, _react.default.createElement("ul", null, audioLists.map(function (audio, i) {
    var name = audio.name,
        singer = audio.singer;
    var playing = playId === audio.id;
    return _react.default.createElement("li", {
      key: i,
      title: pause ? "Click to play" : playing ? "Click to pause" : "Click to play",
      className: (0, _classnames.default)("audio-item", {
        playing: playing
      }, {
        pause: pause
      }, {
        remove: removeId === audio.id
      }),
      onClick: function onClick() {
        return onPlay(audio.id);
      }
    }, _react.default.createElement("span", {
      className: "group player-status",
      key: "player-status"
    }, _react.default.createElement("span", {
      className: "player-icons",
      key: "player-icons-".concat(i)
    }, playing && loading ? loading : playing ? pause ? playIcon : pauseIcon : undefined)), _react.default.createElement("span", {
      className: "group player-name",
      key: "player-name"
    }, name), _react.default.createElement("span", {
      className: "group player-time",
      key: "player-time"
    }, singer), remove ? _react.default.createElement("span", {
      className: "group player-delete",
      key: "player-delete",
      title: "Click to delete ".concat(name),
      onClick: onDelete(audio.id)
    }, closeIcon) : undefined);
  }))) : _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
    key: "no-content"
  }, _react.default.createElement(_libraryMusic.default, null)), _react.default.createElement("span", {
    className: "no-data",
    key: "no-data"
  }, notContentText))));
};

var _default = AudioListsPanel;
exports.default = _default;