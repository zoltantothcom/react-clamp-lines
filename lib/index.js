(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClampLines = function (_PureComponent) {
  _inherits(ClampLines, _PureComponent);

  function ClampLines(props) {
    _classCallCheck(this, ClampLines);

    var _this = _possibleConstructorReturn(this, (ClampLines.__proto__ || Object.getPrototypeOf(ClampLines)).call(this, props));

    _this.element = null;
    _this.original = props.text;
    _this.watch = true;
    _this.lineHeight = 0;
    _this.start = 0;
    _this.middle = 0;
    _this.end = 0;
    _this.state = {
      noClamp: false,
      text: '.'
    };

    _this.action = _this.action.bind(_this);
    _this.clickHandler = _this.clickHandler.bind(_this);

    _this.debounced = _this.debounce(_this.action, props.delay);
    return _this;
  }

  _createClass(ClampLines, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.text) {
        this.lineHeight = this.element.clientHeight + 1;
        this.clampLines();

        if (this.watch) {
          window.addEventListener('resize', this.debounced);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.debounced);
      this.action = null;
      this.clickHandler = null;
    }
  }, {
    key: 'debounce',
    value: function debounce(func, wait, immediate) {
      var _this2 = this,
          _arguments = arguments;

      var timeout = void 0;

      return function () {
        var context = _this2,
            args = _arguments;
        var later = function later() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }
  }, {
    key: 'action',
    value: function action() {
      if (this.watch) {
        this.setState({ noClamp: false });
        this.clampLines();
      }
    }
  }, {
    key: 'clampLines',
    value: function clampLines() {
      this.setState({ text: '' });

      var maxHeight = this.lineHeight * this.props.lines + 1;

      this.start = 0;
      this.middle = 0;
      this.end = this.original.length;

      while (this.start <= this.end) {
        this.middle = Math.floor((this.start + this.end) / 2);
        this.element.innerText = this.original.slice(0, this.middle);
        if (this.middle === this.original.length) {
          this.setState({
            text: this.original,
            noClamp: true
          });
          return;
        }

        this.moveMarkers(maxHeight);
      }

      this.element.innerText = this.original.slice(0, this.middle - 5) + this.getEllipsis();
      this.setState({ text: this.original.slice(0, this.middle - 5) + this.getEllipsis() });
    }
  }, {
    key: 'moveMarkers',
    value: function moveMarkers(maxHeight) {
      if (this.element.clientHeight <= maxHeight) {
        this.start = this.middle + 1;
      } else {
        this.end = this.middle - 1;
      }
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var className = this.props.className || '';

      return 'clamp-lines ' + className;
    }
  }, {
    key: 'getEllipsis',
    value: function getEllipsis() {
      return this.watch && !this.state.noClamp ? this.props.ellipsis : '';
    }
  }, {
    key: 'getButton',
    value: function getButton() {
      if (this.state.noClamp || !this.props.buttons) return;

      var buttonText = this.watch ? this.props.moreText : this.props.lessText;

      return _react2.default.createElement(
        'button',
        { className: 'clamp-lines__button', onClick: this.clickHandler },
        buttonText
      );
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler(e) {
      e.preventDefault();

      this.watch = !this.watch;
      this.watch ? this.clampLines() : this.setState({ text: this.original });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      if (!this.props.text) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: this.getClassName() },
        _react2.default.createElement(
          'div',
          { ref: function ref(e) {
              _this3.element = e;
            } },
          this.state.text
        ),
        this.getButton()
      );
    }
  }]);

  return ClampLines;
}(_react.PureComponent);

exports.default = ClampLines;


ClampLines.defaultProps = {
  buttons: true,
  lines: 3,
  delay: 300,
  ellipsis: '...',
  moreText: 'Read more',
  lessText: 'Read less'
};

/***/ })
/******/ ]);
});