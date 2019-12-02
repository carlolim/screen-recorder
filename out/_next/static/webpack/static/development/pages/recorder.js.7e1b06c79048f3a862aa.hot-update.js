webpackHotUpdate("static\\development\\pages\\recorder.js",{

/***/ "./src/components/recorder/index.js":
/*!******************************************!*\
  !*** ./src/components/recorder/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recorder; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _business_recordrtc_business__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../business/recordrtc-business */ "./src/business/recordrtc-business.js");
/* harmony import */ var _business_recordrtc_business__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_business_recordrtc_business__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _business_recorder_business__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../business/recorder-business */ "./src/business/recorder-business.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Users\\chips\\source\\repos\\screen-recorder\\src\\components\\recorder\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var recorder; // the variable to handle recordRTC object

class Recorder extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      captureCamera: false,
      captureMic: true,
      isRecording: false,
      isPaused: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_startRecording", async () => {
      try {
        var screenStream = await _business_recorder_business__WEBPACK_IMPORTED_MODULE_4__["default"].CaptureScreen();
        var audioStream = await _business_recorder_business__WEBPACK_IMPORTED_MODULE_4__["default"].CaptureAudio();
        recorder = _business_recordrtc_business__WEBPACK_IMPORTED_MODULE_2___default()([screenStream, audioStream], {
          type: 'video',
          video: {
            width: 1920,
            height: 1080
          },
          frameInterval: 90,
          frameRate: 90,
          disableLogs: false
        });
        recorder.startRecording();
        this.setState({
          isRecording: true,
          isPaused: false
        });
      } catch (e) {// console.log(e);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_pauseRecording", () => {
      recorder.pauseRecording();
      this.setState({
        isPaused: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_resumeRecording", () => {
      recorder.resumeRecording();
      this.setState({
        isPaused: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "_stopRecording", async () => {
      this.setState({
        isRecording: false,
        isPaused: false
      });
      recorder.stopRecording(() => {
        var blob = recorder.getBlob();
        var fileName = 'recording.webm';
        _business_recorder_business__WEBPACK_IMPORTED_MODULE_4__["default"].SaveAs(blob, fileName);
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "mt-5 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("b", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Note: Mobile browsers are not supported!"), __jsx("button", {
      className: "action-button btn-red",
      disabled: this.state.isRecording,
      onClick: this._startRecording.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCircle"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    })), __jsx("button", {
      className: "action-button btn-green",
      disabled: !this.state.isPaused,
      onClick: this._resumeRecording.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPlay"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })), __jsx("button", {
      className: "action-button btn-green",
      disabled: !(this.state.isRecording && !this.state.isPaused),
      onClick: this._pauseRecording.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPause"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    })), __jsx("button", {
      className: "action-button btn-red",
      disabled: !this.state.isRecording,
      onClick: this._stopRecording.bind(this),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaStop"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))));
  }

}

/***/ })

})
//# sourceMappingURL=recorder.js.7e1b06c79048f3a862aa.hot-update.js.map