
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bodyFont = exports.bodyFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var headerFont = exports.headerFont = '"Avenir Next", ' + bodyFont;
var monospace = exports.monospace = '"Operator Mono SSm A", "Operator Mono SSm B", monospace';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/fonts.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/fonts.js"); } } })();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rem2 = __webpack_require__(660);

var _rem3 = _interopRequireDefault(_rem2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _rem = function _rem(size) {
  return (0, _rem3.default)(size, '18px');
};

exports.default = _rem;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/rem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/rem.js"); } } })();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var paleGrey = exports.paleGrey = '#efefef';
var lightGrey = exports.lightGrey = 'rgba(20, 20, 20, 0.1)';
var darkGrey = exports.darkGrey = '#1d1f27';
var grey = exports.grey = '#282a36';

var red = exports.red = '#ff5555';
var violetRed = exports.violetRed = 'rgb(219, 112, 147)';
var lightVioletRed = exports.lightVioletRed = '#f7dee6';

var gold = exports.gold = '#daa357';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/colors.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/colors.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineLink = exports.StyledLink = undefined;

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(570);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = __webpack_require__(653);

var _link2 = _interopRequireDefault(_link);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _colors = __webpack_require__(558);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Link.js';
var StyledLink = exports.StyledLink = _styledComponents2.default.a.withConfig({
  displayName: 'Link__StyledLink',
  componentId: 'cnbpkq-0'
})(['display:inline-block;text-decoration:none;color:inherit;cursor:pointer;padding:', ' ', ';margin:', ' ', ';@media (min-width:', 'em){border-radius:', ';&:hover{background:', ';}}'], (0, _rem2.default)(2), (0, _rem2.default)(8), (0, _rem2.default)(-2), (0, _rem2.default)(-8), 1000 / 16, (0, _rem2.default)(3), _colors.lightGrey);

var InlineLink = exports.InlineLink = _styledComponents2.default.a.attrs({
  target: '_blank',
  rel: 'noopener'
}).withConfig({
  displayName: 'Link__InlineLink',
  componentId: 'cnbpkq-1'
})(['color:', ';text-decoration:underline;font-weight:600;cursor:pointer;'], function (p) {
  return p['data-white'] ? 'white' : _colors.violetRed;
});

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      inline = _ref.inline,
      unstyled = _ref.unstyled,
      white = _ref.white,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'inline', 'unstyled', 'white']);

  var Child = StyledLink;
  if (inline) {
    Child = InlineLink;
  } else if (unstyled) {
    Child = 'a';
  }

  var dataAttrs = void 0;
  if (white) {
    dataAttrs = { 'data-white': white };
  }

  return _react2.default.createElement(_link2.default, (0, _extends3.default)({}, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement(Child, (0, _extends3.default)({ href: rest.href, className: className }, dataAttrs, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), children));
};

exports.default = Link;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Link.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Link.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phone = exports.mobile = undefined;

var _styledComponents = __webpack_require__(542);

var mobile = exports.mobile = function mobile(inner) {
  return (0, _styledComponents.css)(['@media (max-width:', 'em){', '}'], 1000 / 16, inner);
};

var phone = exports.phone = function phone(inner) {
  return (0, _styledComponents.css)(['@media (max-width:', 'em){', '}'], 650 / 16, inner);
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/media.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/media.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sidebarWidth = exports.sidebarWidth = 300;
var navbarHeight = exports.navbarHeight = 50;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/sizes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/sizes.js"); } } })();

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TertiaryHeader = exports.SubHeader = exports.Header = exports.Title = exports.Content = exports.Container = undefined;

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _media = __webpack_require__(560);

var _sizes = __webpack_require__(561);

var _fonts = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = exports.Container = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__Container',
  componentId: 's1s1pjfp-0'
})(['padding-left:', ';', ''], (0, _rem2.default)(_sizes.sidebarWidth), (0, _media.mobile)((0, _styledComponents.css)(['padding-left:0;'])));

var Content = exports.Content = _styledComponents2.default.div.withConfig({
  displayName: 'Layout__Content',
  componentId: 's1s1pjfp-1'
})(['width:', ';max-width:100%;margin:0 auto;padding:', ' ', ' ', ' ', ';box-sizing:border-box;font-family:', ';transition:transform 150ms ease-out;', ' ', ''], (0, _rem2.default)(1024), (0, _rem2.default)(90), (0, _rem2.default)(40), (0, _rem2.default)(30), (0, _rem2.default)(40), _fonts.bodyFont, (0, _media.mobile)((0, _styledComponents.css)(['padding:', ' ', ' ', ' ', ';transform:translateX(', ');'], (0, _rem2.default)(70), (0, _rem2.default)(20), (0, _rem2.default)(30), (0, _rem2.default)(20), function (p) {
  return p.moveRight ? (0, _rem2.default)(_sizes.sidebarWidth) : 0;
})), function (p) {
  return p.hero && (0, _styledComponents.css)(['font-family:', ';width:75rem;'], _fonts.headerFont);
});

var Title = exports.Title = _styledComponents2.default.h1.withConfig({
  displayName: 'Layout__Title',
  componentId: 's1s1pjfp-2'
})(['display:block;text-align:left;width:100%;color:rgb(243,182,97);font-size:', ';font-weight:bold;font-family:', ';'], (0, _rem2.default)(42), _fonts.headerFont);

var Header = exports.Header = _styledComponents2.default.h2.withConfig({
  displayName: 'Layout__Header',
  componentId: 's1s1pjfp-3'
})(['font-size:', ';font-weight:500;font-family:', ';'], (0, _rem2.default)(32), _fonts.headerFont);

var SubHeader = exports.SubHeader = _styledComponents2.default.h3.withConfig({
  displayName: 'Layout__SubHeader',
  componentId: 's1s1pjfp-4'
})(['display:block;margin:', ' 0 ', ' 0;font-size:', ';font-weight:500;font-family:', ';'], (0, _rem2.default)(35), (0, _rem2.default)(22), (0, _rem2.default)(24), _fonts.headerFont);

var TertiaryHeader = exports.TertiaryHeader = _styledComponents2.default.h4.withConfig({
  displayName: 'Layout__TertiaryHeader',
  componentId: 's1s1pjfp-5'
})(['display:block;margin:', ' 0 ', ' 0;font-size:', ';font-weight:600;font-family:', ';'], (0, _rem2.default)(35), (0, _rem2.default)(22), (0, _rem2.default)(18), _fonts.headerFont);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Layout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Layout.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(206);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CaptureScroll.js'; // eslint-disable-line


var isMobile = void 0;
var lastWheelTimestamp = void 0;

if (typeof window !== 'undefined' && window.matchMedia) {
  isMobile = window.matchMedia('(max-width: ' + 1000 / 16 + 'em)').matches;

  if (!isMobile) {
    window.addEventListener('wheel', function (_ref) {
      var timeStamp = _ref.timeStamp;

      lastWheelTimestamp = timeStamp;
    });
  }
}

var captureScroll = function captureScroll(Component) {
  if (isMobile) {
    return Component;
  }

  var CaptureScroll = function (_Component) {
    (0, _inherits3.default)(CaptureScroll, _Component);

    function CaptureScroll() {
      var _ref2;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, CaptureScroll);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref2 = CaptureScroll.__proto__ || (0, _getPrototypeOf2.default)(CaptureScroll)).call.apply(_ref2, [this].concat(args))), _this), _this.onScroll = function (evt) {
        // Don't access window wheel listener
        evt.stopImmediatePropagation();

        var timeStamp = evt.timeStamp,
            deltaY = evt.deltaY;
        var _this$node = _this.node,
            offsetHeight = _this$node.offsetHeight,
            scrollHeight = _this$node.scrollHeight,
            scrollTop = _this$node.scrollTop;

        // If the window is being scrolled, don't scroll the captured scroll area

        if (timeStamp - lastWheelTimestamp <= 400) {
          lastWheelTimestamp = timeStamp;

          evt.preventDefault();
          window.scrollBy(0, deltaY);
          return;
        }

        var maxScrollTop = scrollHeight - offsetHeight;

        // Has the scroll area reached it's beginning/end
        var hasReachedTop = deltaY < 0 && scrollTop === 0;
        var hasReachedBottom = deltaY > 0 && scrollTop >= maxScrollTop;

        // Is the trajectory overshooting the scroll area
        var isReachingTop = scrollTop + deltaY <= 0;
        var isReachingBottom = scrollTop + deltaY >= maxScrollTop;

        if (hasReachedTop || hasReachedBottom || isReachingTop || isReachingBottom) {
          evt.preventDefault();
        }

        // If we're overshooting, we need to set the maximum available position
        if (isReachingTop || isReachingBottom) {
          _this.node.scrollTop = isReachingTop ? 0 : maxScrollTop;
        }
      }, _this.onResize = function () {
        isMobile = window.matchMedia('(max-width: ' + 1000 / 16 + 'em)').matches;
        if (isMobile) {
          _this.node.removeEventListener('wheel', _this.onScroll);
        } else {
          _this.node.addEventListener('wheel', _this.onScroll);
        }
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CaptureScroll, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        // eslint-disable-next-line react/no-find-dom-node
        this.node = (0, _reactDom.findDOMNode)(this.ref);

        this.node.addEventListener('wheel', this.onScroll);
        window.addEventListener('resize', this.onResize);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.node.removeEventListener('wheel', this.onScroll);
        window.removeEventListener('resize', this.onResize);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(Component, (0, _extends3.default)({}, this.props, {
          ref: function ref(x) {
            return _this2.ref = x;
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }));
      }
    }]);

    return CaptureScroll;
  }(Component);

  return CaptureScroll;
};

exports.default = captureScroll;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CaptureScroll.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CaptureScroll.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledError = exports.editorMixin = undefined;

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _colors = __webpack_require__(558);

var _media = __webpack_require__(560);

var _fonts = __webpack_require__(516);

var _CaptureScroll = __webpack_require__(571);

var _CaptureScroll2 = _interopRequireDefault(_CaptureScroll);

__webpack_require__(596);

var _reactLive = __webpack_require__(572);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/LiveEdit.js';


var StyledProvider = (0, _styledComponents2.default)(_reactLive.LiveProvider).withConfig({
  displayName: 'LiveEdit__StyledProvider',
  componentId: 's98ci5q-0'
})(['box-shadow:', ' ', ' ', ' rgba(20,20,20,0.27);overflow:hidden;margin:', ' 0;text-align:left;'], (0, _rem2.default)(1), (0, _rem2.default)(1), (0, _rem2.default)(20), (0, _rem2.default)(35));

var Row = _styledComponents2.default.div.withConfig({
  displayName: 'LiveEdit__Row',
  componentId: 's98ci5q-1'
})(['display:flex;flex-direction:row;justify-content:stretch;align-items:stretch;', ''], (0, _media.phone)((0, _styledComponents.css)(['flex-direction:column;'])));

var columnMixin = (0, _styledComponents.css)(['flex-basis:50%;width:50%;max-width:50%;', ''], (0, _media.phone)((0, _styledComponents.css)(['flex-basis:auto;width:100%;max-width:100%;height:auto;'])));

var editorMixin = exports.editorMixin = '\n  background: ' + _colors.darkGrey + ';\n  font-size: 0.8rem;\n  font-family: ' + _fonts.monospace + ';\n  font-weight: 300;\n  height: ' + (0, _rem2.default)(400) + ';\n  overflow-y: scroll;\n  overflow-x: hidden;\n  cursor: text;\n  white-space: pre-wrap;\n';

var StyledEditor = (0, _styledComponents2.default)(_reactLive.LiveEditor).withConfig({
  displayName: 'LiveEdit__StyledEditor',
  componentId: 's98ci5q-2'
})(['', ' ', ''], editorMixin, columnMixin);

var StyledEditorScrollCaptured = (0, _CaptureScroll2.default)(StyledEditor);

var StyledPreview = (0, _styledComponents2.default)(_reactLive.LivePreview).withConfig({
  displayName: 'LiveEdit__StyledPreview',
  componentId: 's98ci5q-3'
})(['position:relative;padding:0.5rem;background:white;color:black;height:auto;overflow:hidden;', ''], columnMixin);

var StyledError = exports.StyledError = (0, _styledComponents2.default)(_reactLive.LiveError).withConfig({
  displayName: 'LiveEdit__StyledError',
  componentId: 's98ci5q-4'
})(['display:block;width:100%;padding:', ';background:', ';color:white;font-size:0.8rem;font-family:', ';white-space:pre;'], (0, _rem2.default)(8), _colors.red, _fonts.headerFont);

var LiveEdit = function LiveEdit(_ref) {
  var noInline = _ref.noInline,
      code = _ref.code,
      _ref$scope = _ref.scope,
      scope = _ref$scope === undefined ? {} : _ref$scope;
  return _react2.default.createElement(StyledProvider, {
    code: code,
    noInline: noInline,
    mountStylesheet: false,
    scope: (0, _extends3.default)({}, scope, {
      styled: _styledComponents2.default,
      css: _styledComponents.css,
      keyframes: _styledComponents.keyframes,
      withTheme: _styledComponents.withTheme,
      ThemeProvider: _styledComponents.ThemeProvider
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement(Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, _react2.default.createElement(StyledEditorScrollCaptured, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }), _react2.default.createElement(StyledPreview, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  })), _react2.default.createElement(StyledError, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }));
};

exports.default = LiveEdit;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/LiveEdit.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/LiveEdit.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logo = _styledComponents2.default.div.withConfig({
  displayName: 'Logo',
  componentId: 's1wiu9k4-0'
})(['display:inline-block;vertical-align:middle;box-sizing:border-box;background-position:center;background-size:contain;', ''], function (p) {
  return p.compact ? (0, _styledComponents.css)(['background-image:url(/static/icon.png);width:', ';height:', ';'], (0, _rem2.default)(100), (0, _rem2.default)(30)) : (0, _styledComponents.css)(['background-image:url(/static/nav-logo.png);width:', ';height:', ';'], (0, _rem2.default)(164), (0, _rem2.default)(40));
});

exports.default = Logo;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Logo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Logo.js"); } } })();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _sizes = __webpack_require__(561);

var _NavSeparator = __webpack_require__(593);

var _NavSeparator2 = _interopRequireDefault(_NavSeparator);

var _Link = __webpack_require__(559);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavLinks.js';


var Wrapper = _styledComponents2.default.nav.withConfig({
  displayName: 'NavLinks__Wrapper',
  componentId: 's82sbtk-0'
})(['display:flex;align-items:center;flex:0 0 auto;']);

var NavLink = (0, _styledComponents2.default)(_Link2.default).attrs({
  unstyled: true
}).withConfig({
  displayName: 'NavLinks__NavLink',
  componentId: 's82sbtk-1'
})(['flex:0 0 auto;display:inline-block;line-height:', ';transition:opacity 0.2s,transform 0.2s;cursor:pointer;letter-spacing:', ';color:currentColor;&:hover,&:focus{opacity:0.8;}&:active{transform:scale(0.95);opacity:0.6;}'], (0, _rem2.default)(_sizes.navbarHeight), (0, _rem2.default)(0.4));

var NavLinks = function NavLinks() {
  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(NavLink, { href: '/docs', __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, '\u6587\u6863'), _react2.default.createElement(_NavSeparator2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement(NavLink, { href: '/ecosystem', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, '\u751F\u6001'), _react2.default.createElement(_NavSeparator2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement(NavLink, { href: '/releases', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, '\u7248\u672C'));
};

exports.default = NavLinks;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavLinks.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavLinks.js"); } } })();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavSeparator = _styledComponents2.default.span.withConfig({
  displayName: 'NavSeparator',
  componentId: 's1afez1g-0'
})(['flex:0 0 auto;width:', ';height:', ';margin:0 ', ';border-radius:50%;background:currentColor;opacity:0.35;'], (0, _rem2.default)(5), (0, _rem2.default)(5), (0, _rem2.default)(15));

exports.default = NavSeparator;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavSeparator.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavSeparator.js"); } } })();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _sizes = __webpack_require__(561);

var _Link = __webpack_require__(559);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Social.js';


var Wrapper = _styledComponents2.default.nav.withConfig({
  displayName: 'Social__Wrapper',
  componentId: 's4j9mhd-0'
})(['display:flex;align-items:center;flex:1 1 auto;']);

var SocialLink = (0, _styledComponents2.default)(_Link2.default).attrs({
  unstyled: true
}).withConfig({
  displayName: 'Social__SocialLink',
  componentId: 's4j9mhd-1'
})(['display:inline-block;margin-right:', ';line-height:', ';transition:opacity 0.2s,transform 0.2s;cursor:pointer;&:last-child{margin-right:0;}&:hover,&:focus{opacity:0.8;}&:active{transform:scale(0.95);opacity:0.6;}svg{path{fill:currentColor;}}'], (0, _rem2.default)(20), (0, _rem2.default)(_sizes.navbarHeight));

var Svg = _styledComponents2.default.svg.withConfig({
  displayName: 'Social__Svg',
  componentId: 's4j9mhd-2'
})(['width:', ';height:', ';'], function (p) {
  return (0, _rem2.default)(Number(p.width));
}, function (p) {
  return (0, _rem2.default)(Number(p.height));
});

var Github = function Github() {
  return _react2.default.createElement(Svg, { width: '17', height: '17', viewBox: '0 0 17 17', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, 'github-logo'), _react2.default.createElement('path', { fill: '#FFF', d: 'M15.86 4.34c-.76-1.335-1.79-2.392-3.093-3.17C11.463.39 10.042 0 8.5 0 6.958 0 5.536.39 4.233 1.17 2.93 1.947 1.9 3.004 1.14 4.34.38 5.674 0 7.132 0 8.713c0 1.898.54 3.606 1.62 5.122 1.082 1.517 2.48 2.566 4.19 3.148.2.038.347.01.443-.08.096-.09.144-.203.144-.34l-.006-.612v-1l-.25.05c-.16.03-.36.05-.61.04-.24 0-.5-.03-.77-.08-.26-.05-.51-.16-.74-.34-.23-.18-.39-.41-.49-.7l-.11-.26c-.07-.17-.19-.36-.35-.58-.16-.21-.32-.35-.48-.43l-.08-.05c-.05-.04-.09-.08-.14-.132-.04-.053-.08-.106-.1-.16-.02-.053 0-.097.06-.13.06-.035.17-.052.32-.052l.22.036c.15.03.33.12.55.27.22.154.4.35.54.59.17.31.375.55.615.71.24.164.484.245.727.245s.456-.02.63-.056c.18-.037.346-.094.5-.17.067-.507.248-.896.54-1.17-.42-.043-.795-.112-1.13-.203-.34-.09-.685-.24-1.04-.44-.36-.2-.657-.455-.894-.76-.234-.3-.43-.7-.58-1.19-.15-.49-.225-1.06-.225-1.7 0-.917.29-1.695.875-2.34-.27-.69-.244-1.46.08-2.313.214-.07.53-.015.95.155.42.17.73.314.926.435.195.12.35.225.47.308.684-.2 1.394-.3 2.124-.3s1.44.1 2.124.297l.42-.27c.288-.184.628-.35 1.02-.5.39-.15.69-.195.895-.126.334.857.364 1.63.09 2.317.584.645.875 1.42.875 2.34 0 .64-.072 1.21-.223 1.707-.15.5-.343.897-.583 1.196-.24.298-.54.55-.896.754-.355.202-.702.35-1.04.44-.334.09-.712.16-1.132.205.38.34.57.875.57 1.61v2.39c0 .136.045.25.137.34.096.09.24.118.44.08 1.71-.582 3.11-1.632 4.19-3.15 1.06-1.525 1.6-3.235 1.6-5.13 0-1.58-.38-3.04-1.14-4.37z', __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }));
};

// const Twitter = () => (
//   <Svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" viewBox="0 0 19 15" xmlnsXlink="http://www.w3.org/1999/xlink">
//     <title>twitter-logo</title>
//     <use fill="#FFF" xlinkHref="#b"/>
//     <defs>
//       <path id="b" d="M18.2 1.8l-2 .6c.6-.5 1.2-1.2 1.5-2l-2.4.8C14.7.5 13.7 0 12.6 0 10.6 0 9 1.7 9 3.8v1C6 4.4 3 3 1.3.8 1 1 .8 1.8.8 2.4c0 1.3.6 2.5 1.6 3-.6 0-1.2 0-1.7-.3 0 2 1.3 3.7 3 4H2c.5 1.6 2 2.7 3.5 2.7-1.2 1-3 1.6-4.6 1.6H0c1.7 1 3.6 1.7 5.7 1.7 7 0 10.7-6 10.7-11v-.5c.7-.5 1.3-1.2 1.8-2z"/>
//     </defs>
//   </Svg>
// )

var Medium = function Medium() {
  return _react2.default.createElement(Svg, { width: '17', height: '14', viewBox: '0 0 17 14', __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, 'medium'), _react2.default.createElement('path', { fill: '#fff', d: 'M5.3 0H.5l1.8 2.4v9L0 13.7h5.3l-2-2.3V3.7L7.8 14 12 3.7v8.7l-1.3 1.3H17l-1.5-1.3v-11L17 0h-4.5L9 8.2 5.2 0z', __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }));
};

var Spectrum = function Spectrum() {
  return _react2.default.createElement(Svg, { width: '14', height: '14', viewBox: '0 0 15 15', __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, 'spectrum-logo'), _react2.default.createElement('path', { fill: '#FFF', d: 'M0 6.5V1c0-.6.4-1 1-1 9 .3 13.7 5 14 14 0 .6-.4 1-1 1H8.5c-.6 0-1-.4-1-1-.3-4.4-2-6.2-6.5-6.5-.6 0-1-.4-1-1z', __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }));
};

var Social = function Social(props) {
  return _react2.default.createElement(Wrapper, (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), _react2.default.createElement(SocialLink, { href: 'https://spectrum.chat/styled-components/', __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, _react2.default.createElement(Spectrum, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  })), _react2.default.createElement(SocialLink, { href: 'https://github.com/styled-components', __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, _react2.default.createElement(Github, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  })), _react2.default.createElement(SocialLink, { href: 'https://medium.com/styled-components', __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement(Medium, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  })));
};

exports.default = Social;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Social.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Social.js"); } } })();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var whitespacesRe = /\s+/g;
var _format = function _format() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str.trim().replace(whitespacesRe, ' ');
};

var elementToTextRec = function elementToTextRec(x) {
  if (Array.isArray(x)) {
    return x.map(elementToTextRec).join('');
  } else if ((0, _react.isValidElement)(x)) {
    return elementToTextRec(x.children || x.props.children);
  } else if (typeof x === 'string') {
    return x || '';
  }

  return '';
};

var elementToText = function elementToText(node) {
  return _format(elementToTextRec(node));
};

exports.default = elementToText;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/elementToText.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/elementToText.js"); } } })();

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.languages = undefined;

var _prismCore = __webpack_require__(586);

__webpack_require__(585);

__webpack_require__(587);

__webpack_require__(589);

__webpack_require__(588);

__webpack_require__(665);

__webpack_require__(666);

__webpack_require__(664);

__webpack_require__(667);

// NOTE: This highlights template-strings as strings of CSS
Prism.languages.insertBefore('jsx', 'template-string', {
  'styled-template-string': {
    pattern: /(styled(\.\w+|\([^\)]*\))(\.\w+(\([^\)]*\))*)*|css|injectGlobal|keyframes|\.extend)`(?:\$\{[^}]+\}|\\\\|\\?[^\\])*?`/,
    lookbehind: true,
    greedy: true,
    inside: {
      interpolation: {
        pattern: /\$\{[^}]+\}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          },
          rest: _prismCore.languages.jsx
        }
      },
      string: {
        pattern: /[^$;]+/,
        inside: _prismCore.languages.css,
        alias: 'language-css'
      }
    }
  }
});

exports.languages = _prismCore.languages;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/prismTemplateString.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/prismTemplateString.js"); } } })();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elementToText = __webpack_require__(595);

var _elementToText2 = _interopRequireDefault(_elementToText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleToDash = function titleToDash(title) {
  return (0, _elementToText2.default)(title).toLowerCase().replace(/[^\u4E00-\u9FA5a-zA-Z\d\s]/g, '').replace(/\s+/g, '-');
};

exports.default = titleToDash;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/titleToDash.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/titleToDash.js"); } } })();

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(570);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactLive = __webpack_require__(572);

var _HeartIcon = __webpack_require__(694);

var _HeartIcon2 = _interopRequireDefault(_HeartIcon);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _media = __webpack_require__(560);

var _colors = __webpack_require__(558);

var _LiveEdit = __webpack_require__(590);

var _Link = __webpack_require__(559);

var _Link2 = _interopRequireDefault(_Link);

var _Layout = __webpack_require__(564);

var _CaptureScroll = __webpack_require__(571);

var _CaptureScroll2 = _interopRequireDefault(_CaptureScroll);

var _SeoHead = __webpack_require__(681);

var _SeoHead2 = _interopRequireDefault(_SeoHead);

var _homepageGettingStarted = __webpack_require__(684);

var _homepageGettingStarted2 = _interopRequireDefault(_homepageGettingStarted);

var _WithIsScrolled = __webpack_require__(682);

var _WithIsScrolled2 = _interopRequireDefault(_WithIsScrolled);

var _Nav = __webpack_require__(679);

var _Nav2 = _interopRequireDefault(_Nav);

var _LiveProvider = __webpack_require__(688);

var _CompanyLogos = __webpack_require__(671);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/pages/index.js?entry';


var Tagline = _styledComponents2.default.h1.withConfig({
  displayName: 'pages__Tagline',
  componentId: 's1yp7jrb-0'
})(['font-weight:600;font-size:1.3rem;']);

var SupportingTagline = _styledComponents2.default.h2.withConfig({
  displayName: 'pages__SupportingTagline',
  componentId: 's1yp7jrb-1'
})(['font-size:1.1rem;font-weight:400;']);

var headerCode = '\nconst Button = styled.a`\n  /* This renders the buttons above... Edit me! */\n  display: inline-block;\n  border-radius: 3px;\n  padding: 0.5rem 0;\n  margin: 0.5rem 1rem;\n  width: 11rem;\n  background: transparent;\n  color: white;\n  border: 2px solid white;\n\n  /* The GitHub button is a primary button\n   * edit this to target it specifically! */\n  ${props => props.primary && css`\n    background: white;\n    color: palevioletred;\n  `}\n`\n'.trim();

var HomepageLivePreview = function HomepageLivePreview(_ref, _ref2) {
  var Button = _ref2.live.element;

  var className = _ref.className,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['className']);

  var InternalButton = Button.withComponent(_Link2.default);
  return _react2.default.createElement('div', (0, _extends3.default)({}, rest, {
    className: 'react-live-preview ' + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }), _react2.default.createElement(Button, {
    href: 'https://github.com/styled-components/styled-components',
    target: '_blank',
    rel: 'noopener',
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'GitHub'), _react2.default.createElement(InternalButton, { href: '/docs', prefetch: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, '\u6587\u6863'));
};

HomepageLivePreview.contextTypes = _LiveProvider.LiveContextTypes;

var Title = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Title',
  componentId: 's1yp7jrb-2'
})(['margin:2rem 0;h1,h2{margin:0;}']);

var Logo = _styledComponents2.default.img.attrs({
  alt: 'styled-components Logo',
  src: '/static/logo.png'
}).withConfig({
  displayName: 'pages__Logo',
  componentId: 's1yp7jrb-3'
})(['width:', ';height:', ';'], (0, _rem2.default)(125), (0, _rem2.default)(125));

var UsersWrapper = _styledComponents2.default.section.withConfig({
  displayName: 'pages__UsersWrapper',
  componentId: 's1yp7jrb-4'
})(['display:flex;flex-flow:row wrap;justify-content:center;padding:0.5rem;margin-bottom:2rem;']);

var UsersHeading = _styledComponents2.default.p.withConfig({
  displayName: 'pages__UsersHeading',
  componentId: 's1yp7jrb-5'
})(['text-transform:uppercase;color:#fff;font-size:0.8rem;font-weight:600;margin:2.5rem 0 0.5rem;opacity:0.8;']);

var CompanyLogo = _styledComponents2.default.span.withConfig({
  displayName: 'pages__CompanyLogo',
  componentId: 's1yp7jrb-6'
})(['position:relative;height:', ';margin:0.5rem;bottom:', ';opacity:0.8;filter:brightness(0) invert(1);transition:opacity 125ms ease-in-out;&:hover{opacity:1;}'], function (p) {
  return p.height || '2rem';
}, function (p) {
  return p.bottom || 0;
});

var Wrapper = _styledComponents2.default.div.attrs({
  className: 'hero-header' // for integration tests
}).withConfig({
  displayName: 'pages__Wrapper',
  componentId: 's1yp7jrb-7'
})(['display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:white;background:linear-gradient(20deg,', ',', ');box-shadow:0 2px 20px rgba(0,0,0,0.17);box-sizing:border-box;min-height:100vh;'], _colors.violetRed, _colors.gold);

var EditorContainer = _styledComponents2.default.div.withConfig({
  displayName: 'pages__EditorContainer',
  componentId: 's1yp7jrb-8'
})(['display:inline-block;box-shadow:', ' ', ' ', ' rgba(20,20,20,0.27);margin:', ' 0;text-align:left;width:100%;max-width:34rem;'], (0, _rem2.default)(1), (0, _rem2.default)(1), (0, _rem2.default)(20), (0, _rem2.default)(35));

var Editor = (0, _CaptureScroll2.default)((0, _styledComponents2.default)(_reactLive.LiveEditor).withConfig({
  displayName: 'pages__Editor',
  componentId: 's1yp7jrb-9'
})(['', ' height:24rem;white-space:pre;width:100%;'], _LiveEdit.editorMixin));

var Links = _styledComponents2.default.div.withConfig({
  displayName: 'pages__Links',
  componentId: 's1yp7jrb-10'
})(['margin:', ' 0;'], (0, _rem2.default)(36));

var Footer = _styledComponents2.default.footer.withConfig({
  displayName: 'pages__Footer',
  componentId: 's1yp7jrb-11'
})(['display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;color:', ';background:', ';box-sizing:border-box;margin-top:', ';'], _colors.grey, _colors.paleGrey, (0, _rem2.default)(50));

var Heart = (0, _styledComponents2.default)(_HeartIcon2.default).attrs({
  width: null,
  height: null
}).withConfig({
  displayName: 'pages__Heart',
  componentId: 's1yp7jrb-12'
})(['display:inline-block;width:', ';color:', ''], (0, _rem2.default)(17), _colors.red);

var FooterLink = (0, _styledComponents2.default)(_Link2.default).withConfig({
  displayName: 'pages__FooterLink',
  componentId: 's1yp7jrb-13'
})(['color:', ';'], _colors.grey);

var FooterContent = (0, _styledComponents2.default)(_Layout.Content).withConfig({
  displayName: 'pages__FooterContent',
  componentId: 's1yp7jrb-14'
})(['padding:', ' ', ' ', ' ', ';', ''], (0, _rem2.default)(30), (0, _rem2.default)(40), (0, _rem2.default)(30), (0, _rem2.default)(40), (0, _media.mobile)((0, _styledComponents.css)(['padding:', ' ', ' ', ' ', ';'], (0, _rem2.default)(30), (0, _rem2.default)(20), (0, _rem2.default)(30), (0, _rem2.default)(20))));

var Index = function (_PureComponent) {
  (0, _inherits3.default)(Index, _PureComponent);

  function Index() {
    var _ref3;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref3 = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      isMobileNavFolded: true
    }, _this.toggleMobileNav = function () {
      _this.setState(function (prevState) {
        return {
          isMobileNavFolded: !prevState.isMobileNavFolded
        };
      });
    }, _this.onRouteChange = function () {
      _this.setState({
        isMobileNavFolded: true
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var isMobileNavFolded = this.state.isMobileNavFolded;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        }
      }, _react2.default.createElement(_SeoHead2.default, { title: 'styled-components', __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        }
      }, _react2.default.createElement('meta', { name: 'robots', content: 'noodp', __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      })), _react2.default.createElement(_WithIsScrolled2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, function (_ref4) {
        var isScrolled = _ref4.isScrolled;
        return _react2.default.createElement(_Nav2.default, {
          showSideNav: false,
          transparent: !isScrolled,
          isMobileNavFolded: isMobileNavFolded,
          onMobileNavToggle: _this2.toggleMobileNav,
          onRouteChange: _this2.onRouteChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        });
      }), _react2.default.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement(_Layout.Content, { hero: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_reactLive.LiveProvider, {
        code: headerCode,
        mountStylesheet: false,
        scope: { styled: _styledComponents2.default, css: _styledComponents.css, rem: _rem2.default, Link: _Link2.default }, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }), _react2.default.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement(Tagline, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, '\u7EC4\u4EF6\u65F6\u4EE3\u7684\u89C6\u89C9\u57FA\u5143\u3002'), _react2.default.createElement(SupportingTagline, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, '\u4F7F\u7528\u6700\u597D\u7684 ES6 \u548C CSS \u6765\u8F7B\u677E\u6837\u5F0F\u5316\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F \uD83D\uDC85')), _react2.default.createElement(Links, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, _react2.default.createElement(HomepageLivePreview, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })), _react2.default.createElement(EditorContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement(Editor, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }), _react2.default.createElement(_LiveEdit.StyledError, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }))), _react2.default.createElement(UsersHeading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, '\u8C01\u5728\u4F7F\u7528'), _react2.default.createElement(UsersWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement(CompanyLogo, { bottom: '-0.2rem', height: '1.75rem', __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, _react2.default.createElement(_CompanyLogos.BloombergLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      })), _react2.default.createElement(CompanyLogo, { height: '1.75rem', __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement(_CompanyLogos.AtlassianLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      })), _react2.default.createElement(CompanyLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }, _react2.default.createElement(_CompanyLogos.RedditLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      })), _react2.default.createElement(CompanyLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }, _react2.default.createElement(_CompanyLogos.TargetLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      })), _react2.default.createElement(CompanyLogo, { bottom: '0.625rem', height: '3rem', __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }, _react2.default.createElement(_CompanyLogos.EuroVisionLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      })), _react2.default.createElement(CompanyLogo, { bottom: '0.16rem', height: '2.25rem', src: '/static/artsy-logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }, _react2.default.createElement(_CompanyLogos.ArtsyLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      })), _react2.default.createElement(CompanyLogo, { bottom: '-0.15rem', height: '1.5rem', __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, _react2.default.createElement(_CompanyLogos.IdeaLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      })), _react2.default.createElement(CompanyLogo, { src: '/static/huffpost-logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, _react2.default.createElement(_CompanyLogos.HuffpostLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      })), _react2.default.createElement(CompanyLogo, { bottom: '0.25rem', height: '2rem', src: '/static/coinbase-logo.svg', __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, _react2.default.createElement(_CompanyLogos.CoinbaseLogo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }))))), _react2.default.createElement(_homepageGettingStarted2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }), _react2.default.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, _react2.default.createElement(FooterContent, { hero: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, ' ', 'Hosted on ▲ ZEIT Now', _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      }), 'Made with ', _react2.default.createElement(Heart, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), ' by ', _react2.default.createElement(FooterLink, { inline: true, href: 'https://twitter.com/glenmaddern', __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, '@glenmaddern'), ', ', _react2.default.createElement(FooterLink, { inline: true, href: 'https://twitter.com/mxstbr', __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, '@mxstbr'), ' & ', _react2.default.createElement(FooterLink, { inline: true, href: 'https://twitter.com/_philpl', __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, '@_philpl\u202C'), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }), '本站译自 ', _react2.default.createElement(FooterLink, { inline: true, href: 'https://www.styled-components.com/', __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }, 'styled-components \u82F1\u6587'), ' 如有疑问，请访问原站！')));
    }
  }]);

  return Index;
}(_react.PureComponent);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports = {
	"pages": [
		{
			"title": "基础",
			"pathname": "basics",
			"sections": [
				{
					"title": "动机"
				},
				{
					"title": "安装"
				},
				{
					"title": "其他安装方案"
				},
				{
					"title": "入门"
				},
				{
					"title": "传递属性"
				},
				{
					"title": "动态样式"
				},
				{
					"title": "样式化任何组件"
				},
				{
					"title": "扩展样式"
				},
				{
					"title": "附加额外的属性"
				},
				{
					"title": "动画"
				},
				{
					"title": "React Native"
				}
			]
		},
		{
			"title": "高级",
			"pathname": "advanced",
			"sections": [
				{
					"title": "主题"
				},
				{
					"title": "Refs"
				},
				{
					"title": "安全"
				},
				{
					"title": "现有 CSS"
				},
				{
					"title": "媒体模板"
				},
				{
					"title": "标签模板字符串"
				},
				{
					"title": "服务端渲染"
				},
				{
					"title": "引用其他组件"
				}
			]
		},
		{
			"title": "API 参考",
			"pathname": "api",
			"sections": [
				{
					"title": "Primary"
				},
				{
					"title": "Helpers"
				},
				{
					"title": "支持的 CSS"
				},
				{
					"title": "Flow"
				},
				{
					"title": "TypeScript"
				}
			]
		},
		{
			"title": "工具",
			"pathname": "tooling",
			"sections": [
				{
					"title": "Babel 插件"
				},
				{
					"title": "Test Utilities"
				},
				{
					"title": "Stylelint"
				},
				{
					"title": "Styled Theming"
				},
				{
					"title": "语法高亮"
				}
			]
		},
		{
			"title": "常见问题",
			"pathname": "faqs",
			"sections": [
				{
					"title": "可以嵌套规则吗?"
				},
				{
					"title": "何时应该使用 styled?"
				},
				{
					"title": "可以使用 CSS 框架吗?"
				},
				{
					"title": "如何能以更高的特异性覆盖样式?"
				},
				{
					"title": "如何覆盖内联样式?"
				},
				{
					"title": "DOM 节点为什么有两个 class?"
				},
				{
					"title": "何时使用 attrs?"
				},
				{
					"title": "可以引用其他组件吗?"
				},
				{
					"title": "哪些浏览器支持?"
				}
			]
		}
	]
};

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _LinkIcon = __webpack_require__(695);

var _LinkIcon2 = _interopRequireDefault(_LinkIcon);

var _Layout = __webpack_require__(564);

var _media = __webpack_require__(560);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Anchor.js';


var InvisibleAnchor = _styledComponents2.default.div.attrs({
  'aria-hidden': true
}).withConfig({
  displayName: 'Anchor__InvisibleAnchor',
  componentId: 's1n6vku9-0'
})(['position:relative;display:block;visibility:hidden;height:0;top:', ';', ''], (0, _rem2.default)(-70), (0, _media.mobile)((0, _styledComponents.css)(['top:', ';'], (0, _rem2.default)(-90))));

var Anchor = _styledComponents2.default.a.withConfig({
  displayName: 'Anchor',
  componentId: 's1n6vku9-1'
})(['display:none;position:absolute;left:0;color:inherit;']);

var AnchorIcon = (0, _styledComponents2.default)(_LinkIcon2.default).attrs({
  width: null,
  height: null
}).withConfig({
  displayName: 'Anchor__AnchorIcon',
  componentId: 's1n6vku9-2'
})(['width:', ';opacity:0.7;margin-top:', ';&:hover{opacity:0.9;}'], (0, _rem2.default)(20), (0, _rem2.default)(-5));

var AnchorHeader = (0, _styledComponents2.default)(_Layout.Header).withConfig({
  displayName: 'Anchor__AnchorHeader',
  componentId: 's1n6vku9-3'
})(['position:relative;margin-left:', ';padding-left:', ';', ' &:hover ', '{display:inline-block;}'], (0, _rem2.default)(-30), (0, _rem2.default)(30), (0, _media.mobile)((0, _styledComponents.css)(['margin-left:0;', '{display:inline-block;}'], Anchor)), Anchor);

var AnchorSubHeader = AnchorHeader.withComponent(_Layout.SubHeader);
var AnchorTertiaryHeader = AnchorHeader.withComponent(_Layout.TertiaryHeader);

var Link = function Link(_ref) {
  var children = _ref.children,
      level = _ref.level,
      id = _ref.id;

  var Child = AnchorHeader;

  switch (level) {
    case 3:
      Child = AnchorSubHeader;
      break;
    case 4:
      Child = AnchorTertiaryHeader;
      break;
    default:
      break;
  }

  return _react2.default.createElement(Child, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement(InvisibleAnchor, { id: id, __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }), _react2.default.createElement(Anchor, { href: '#' + id, __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement(AnchorIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  })), children);
};

exports.default = Link;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Anchor.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Anchor.js"); } } })();

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _fonts = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Code = _styledComponents2.default.span.withConfig({
  displayName: 'Code',
  componentId: 's1gu2r1r-0'
})(['display:inline-block;font-family:', ';font-size:90%;font-weight:300;padding:0 0.05em 0.1em;border-radius:3px;vertical-align:baseline;line-height:1.4;color:#66B2A7;background-color:#F5F4D6;'], _fonts.monospace);

exports.default = Code;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Code.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Code.js"); } } })();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

__webpack_require__(596);

var _reactLive = __webpack_require__(572);

var _colors = __webpack_require__(558);

var _fonts = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CodeBlock.js';


var CodeBlock = (0, _styledComponents2.default)(function (p) {
  var language = (p.language || 'clike').toLowerCase().trim();
  return _react2.default.createElement(_reactLive.Editor, (0, _extends3.default)({}, p, { language: language, __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
}).attrs({
  contentEditable: false
}).withConfig({
  displayName: 'CodeBlock',
  componentId: 's1qhv3lv-0'
})(['background:', ';font-size:0.8rem;font-family:', ';font-weight:300;white-space:pre-wrap;border-radius:', ';box-shadow:1px 1px 20px rgba(20,20,20,0.27);margin:', ' 0;overflow-x:hidden;'], _colors.darkGrey, _fonts.monospace, (0, _rem2.default)(3), (0, _rem2.default)(35));

exports.default = CodeBlock;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CodeBlock.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CodeBlock.js"); } } })();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoinbaseLogo = exports.HuffpostLogo = exports.IdeaLogo = exports.ArtsyLogo = exports.EuroVisionLogo = exports.TargetLogo = exports.RedditLogo = exports.AtlassianLogo = exports.BloombergLogo = undefined;

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CompanyLogos.js";


var Svg = _styledComponents2.default.svg.withConfig({
  displayName: "CompanyLogos__Svg",
  componentId: "s4pgzhj-0"
})(["width:inherit;height:inherit;"]);

var BloombergLogo = exports.BloombergLogo = function BloombergLogo() {
  return _react2.default.createElement(Svg, { viewBox: "115 -9.6 257.8 47.6", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("path", { d: "M115-9.6h18.9c3.6 0 6.3.9 8.3 2.4 2.2 1.8 3.4 4.4 3.4 7.6 0 3.7-1.5 6-4.5 7.4V8c4 1.3 6.3 4.9 6.3 9.2 0 4.1-1.6 7.3-4.2 9.3-2.2 1.6-5 2.3-8.8 2.3H115V-9.6zm17 15c2 0 3.5-1.1 3.5-3.4 0-2.2-1.5-3.3-3.6-3.3h-6.5v6.6h6.6zm.9 14.9c2.3 0 4-1.4 4-3.9 0-2.7-1.8-3.9-4-3.9h-7.4v7.9h7.4zm16.2-29.9h9.9v38.5h-9.9V-9.6zM161 15.2C161 6.5 166.6.7 175.3.7s14.2 5.9 14.2 14.5c0 8.7-5.5 14.5-14.2 14.5S161 23.9 161 15.2zm18.6 0c0-4.8-1.5-7.8-4.5-7.8s-4.4 3-4.4 7.8 1.4 7.9 4.4 7.9c3-.1 4.5-3.1 4.5-7.9zm11 0c0-8.7 5.6-14.5 14.3-14.5S219 6.5 219 15.2s-5.5 14.5-14.2 14.5c-8.6 0-14.2-5.8-14.2-14.5zm18.6 0c0-4.8-1.5-7.8-4.5-7.8s-4.4 3-4.4 7.8 1.4 7.9 4.4 7.9c3-.1 4.5-3.1 4.5-7.9zM221 1.4h9.2v4.1h.2c1.8-3.2 4.3-4.9 8.3-4.9 3.5 0 6.1 1.7 7.4 4.7h.2c2.2-3.6 5.1-4.7 8.5-4.7 6.4 0 9.1 4.7 9.1 11v17.2h-9.6V13.3c0-2.8-.9-4.6-3.3-4.6s-3.6 2.2-3.6 5.2v14.9h-9.6V13.3c0-2.8-.9-4.6-3.3-4.6s-3.6 2.2-3.6 5.2v14.9H221V1.4zm55 23.8h-.1v3.6h-9.2V-9.6h9.6V4.2h.2c1.8-2.4 4.3-3.7 7.8-3.7 6.9 0 10.9 6.2 10.9 14.5 0 9.3-4.3 14.7-11.5 14.7-3 0-6.1-1.4-7.7-4.5zm9.3-10.3c0-4.4-1.6-7.3-4.5-7.3-3 0-4.8 2.9-4.8 7.3s1.9 7.3 4.8 7.3 4.5-2.8 4.5-7.3zm11 .2c0-8.6 5.7-14.5 13.9-14.5 4.1 0 7.2 1.3 9.6 3.6 3.2 3.1 4.6 7.9 4.5 13.5h-18.4c.4 3.4 2 5.2 4.9 5.2 1.7 0 3.2-.8 3.8-2.6h9.3c-1.6 6.3-6.5 9.4-13.4 9.4-8.5-.1-14.2-5.9-14.2-14.6zm9.6-2.9h8.8c-.2-3.3-2-5-4.3-5-2.7-.1-4.2 1.8-4.5 5zm29.3-6.1h.2c2-3.8 4.6-5.3 7.9-5.3.8 0 1.3.1 1.6.3v8.4h-.2c-5.7-1-9 1.7-9 7.9v11.5H326V1.4h9.2v4.7zm10.7 22.8h9.3c.4 1.2 1.6 2.3 3.9 2.3 3.1 0 4.2-1.9 4.2-4.8v-2h-.2c-1.5 1.8-3.6 3.1-6.6 3.1-5.9 0-11.1-4.4-11.1-13 0-7.9 4.2-14 10.6-14 3.7 0 5.9 1.5 7.4 3.8h.2v-3h9.2v23.8c0 4.4-1.5 7.8-3.8 9.8-2.4 2.1-5.8 3-9.7 3-7.4.1-12.5-2.9-13.4-9zm17.8-14.8c0-3.4-1.6-6.2-4.4-6.2-2.7 0-4.4 2.4-4.4 6.2 0 3.7 1.7 6.3 4.4 6.3s4.4-2.7 4.4-6.3z", __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
};

var AtlassianLogo = exports.AtlassianLogo = function AtlassianLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 114 24", __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement("g", { fill: "#5BA5CE", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("path", { d: "M27.2.27c-.1-.16-.3-.25-.47-.25-.1 0-.2.02-.28.07-3.52 1.97-7.6 3-11.8 3-4.2 0-8.26-1.03-11.78-3C2.8.03 2.7 0 2.6 0c-.2 0-.37.1-.48.24-.17.23-.18.6.1.84C4 2.45 5.93 3.5 8 4.22c2.14.75 4.38 1.13 6.66 1.13 2.28 0 4.52-.38 6.66-1.13 2.07-.72 4-1.77 5.78-3.12.28-.23.27-.6.1-.83M14.66 7.34c.9 0 1.42-.06 1.6-.06.23 0 .44.2.44.45 0 .08-.02.13-.03.18-.12.33-.67 1.5-1.68 2.52-.12.12-.25.14-.34.14-.1 0-.22-.02-.33-.14-1-1-1.56-2.2-1.67-2.5-.02-.06-.04-.1-.04-.2 0-.25.2-.44.43-.44.2 0 .7.06 1.6.06", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement("path", { d: "M23.16 5.9c-.08-.07-.18-.1-.28-.1-.06 0-.12 0-.17.03-1 .4-2.04.7-3 .93-.18.04-.34.2-.4.37-.7 1.93-2.45 3.77-4.3 5.7-.07.08-.17.17-.34.17s-.27-.1-.35-.17c-1.83-1.93-3.6-3.76-4.28-5.7-.06-.17-.22-.32-.4-.37-.95-.22-2-.54-3-.94l-.18-.03c-.1 0-.2.02-.28.1-.13.1-.2.26-.2.42.17 1.6.8 3.18 1.9 4.83 1.06 1.55 2.43 2.98 3.76 4.37 2.44 2.56 4.74 4.97 4.95 7.77.02.24.22.44.47.44h2.87c.14 0 .26-.05.35-.15.1-.1.13-.24.13-.37-.1-1.87-.78-3.74-2.1-5.73-.28-.4-.57-.82-.88-1.22-.13-.16-.08-.36.02-.46l.3-.3c1.3-1.4 2.68-2.82 3.73-4.37 1.12-1.65 1.74-3.2 1.9-4.82 0-.16-.06-.34-.2-.44M11.58 17.7c-.07-.07-.17-.15-.33-.15-.22 0-.34.15-.4.23-1.2 1.88-1.82 3.66-1.9 5.45-.02.13.03.26.12.36.1.08.22.14.34.14h2.88c.25 0 .45-.2.47-.45.06-.87.32-1.74.8-2.64.17-.32.04-.6-.06-.74-.48-.63-1.06-1.3-1.92-2.22", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })), _react2.default.createElement("g", { fill: "#274970", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement("path", { d: "M34.07 6.46c-.06-.2-.23-.32-.42-.32H29.6c-.2 0-.37.13-.43.32l-5.13 16.7c-.04.14-.02.28.06.4.1.1.22.18.36.18h2.8c.2 0 .36-.13.4-.32l3.55-12.28s.1-.3.42-.3c.33 0 .4.3.4.3l1.64 5.83h-2.2c-.2 0-.36.14-.42.33l-.63 2.3c-.03.14 0 .3.08.4.08.1.2.17.35.17h3.75l1 3.26c.05.18.2.3.4.3h2.8c.14 0 .28-.06.36-.17.08-.12.1-.26.06-.4l-5.13-16.7M46.27 21.17c-.02-.13-.1-.24-.2-.3-.1-.08-.22-.1-.34-.07-.45.12-.9.18-1.22.18-.63 0-.9-.28-.9-.92v-6.4h2.5c.23 0 .42-.2.42-.45v-1.98c0-.25-.2-.45-.43-.45h-2.5V7.7c0-.14-.07-.26-.16-.35-.1-.08-.23-.12-.35-.1l-2.58.36c-.22.05-.38.23-.38.46v2.7h-1.4c-.24 0-.44.2-.44.46v2c0 .24.2.44.44.44h1.4v6.8c0 2.35 1.2 3.54 3.56 3.54.67 0 1.82-.16 2.56-.43.2-.07.32-.27.3-.48l-.3-1.93M51.04 5.82h-2.58c-.24 0-.43.2-.43.45V23.3c0 .24.2.44.43.44h2.58c.24 0 .43-.2.43-.45V6.26c0-.25-.2-.45-.43-.45M59.38 19v1.54c-.42.24-1.2.57-2.13.57-.8 0-1.04-.24-1.04-1.07 0-.8.16-1.04 1.1-1.04h2.08zm-1.72-8.5c-1.3 0-2.9.22-4.05.55-.2.06-.33.28-.3.5l.3 1.92c.02.12.1.23.18.3.1.06.22.1.34.07 1.07-.22 2.17-.33 3.1-.33 1.87 0 2.16.4 2.16 1.7v1.13h-2.76c-2.63 0-3.76 1.1-3.76 3.73 0 2.5 1.23 3.94 3.4 3.94 1.23 0 2.48-.35 3.52-1l.1.4c.06.2.24.34.43.34h2.1c.23 0 .43-.2.43-.45v-8.05c0-3.45-1.4-4.74-5.17-4.74zM69.28 15.7c-1.6-.4-1.6-.43-1.6-1.33 0-.6.06-.9 1.38-.9.9 0 2.23.17 3.08.32.12 0 .24-.02.34-.1.1-.06.15-.17.17-.3l.24-2c.02-.24-.12-.45-.34-.5-1-.24-2.36-.4-3.5-.4-3.96 0-4.77 1.55-4.77 3.85 0 2.53.44 3.38 3.48 4.14 2 .48 2 .85 2 1.46 0 .8-.07 1.07-1.38 1.07-1.05 0-2.27-.17-3.34-.46-.12-.03-.24 0-.35.05-.1.07-.16.18-.18.3l-.34 1.9c-.04.23.08.45.3.52 1.16.4 2.84.66 4.07.66 3.84 0 4.62-1.65 4.62-4.12 0-2.73-.47-3.24-3.9-4.17M79.23 15.7c-1.6-.4-1.6-.43-1.6-1.33 0-.6.06-.9 1.37-.9.9 0 2.24.17 3.1.32.1 0 .23-.02.32-.1.1-.06.16-.17.18-.3l.24-2c.03-.24-.12-.45-.33-.5-.98-.24-2.36-.4-3.5-.4-3.95 0-4.77 1.55-4.77 3.85 0 2.53.46 3.38 3.5 4.14 2 .48 2 .85 2 1.46 0 .8-.07 1.07-1.38 1.07-1.05 0-2.27-.17-3.34-.46-.1-.03-.24 0-.34.05-.1.07-.17.18-.2.3l-.34 1.9c-.03.23.1.45.3.52 1.17.4 2.85.66 4.08.66 3.83 0 4.62-1.65 4.62-4.12 0-2.73-.47-3.24-3.9-4.17M87.56 5.82h-2.58c-.24 0-.43.2-.43.44V8.6c0 .25.2.45.43.45h2.58c.24 0 .43-.2.43-.45V6.26c0-.24-.2-.44-.44-.44M87.56 10.77h-2.58c-.24 0-.43.2-.43.45V23.3c0 .24.2.44.43.44h2.58c.24 0 .43-.2.43-.45V11.2c0-.25-.2-.45-.44-.45M95.97 19v1.54c-.43.24-1.2.57-2.13.57-.8 0-1.05-.24-1.05-1.07 0-.8.14-1.04 1.1-1.04h2.07zm-1.73-8.5c-1.3 0-2.9.22-4.04.55-.2.06-.35.28-.3.5l.3 1.92c0 .12.07.23.17.3.1.06.22.1.33.07 1.07-.22 2.18-.33 3.12-.33 1.85 0 2.15.4 2.15 1.7v1.13H93.2c-2.63 0-3.75 1.1-3.75 3.73 0 2.5 1.23 3.94 3.38 3.94 1.25 0 2.5-.35 3.54-1l.1.4c.06.2.23.34.43.34h2.08c.24 0 .44-.2.44-.45v-8.05c0-3.45-1.4-4.74-5.18-4.74zM108.94 10.5c-1.37 0-3.22.5-4.8 1.25l-.18-.66c-.06-.2-.23-.33-.42-.33h-1.9c-.25 0-.44.2-.44.45V23.3c0 .24.2.44.43.44h2.58c.25 0 .44-.2.44-.45v-8.37c.93-.48 2.23-.98 3-.98.6 0 .8.22.8.8v8.54c0 .24.2.44.45.44h2.56c.24 0 .44-.2.44-.45v-8.87c0-2.6-1-3.92-2.96-3.92", __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })));
};

var RedditLogo = exports.RedditLogo = function RedditLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 82 30", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, _react2.default.createElement("clipPath", { id: "a", __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement("path", { d: "M0 792h612V0H0v792z", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }))), _react2.default.createElement("g", { clipPath: "url(#a)", transform: "matrix(.98784 0 0 -.98784 -273.4 399.012)", __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement("path", { d: "M280.7 392.42c0 .44.12.8.4 1.05.26.26.58.4.96.4.4 0 .72-.13 1-.4.27-.25.4-.6.4-1.05v-1.45h.07c.42.74.97 1.4 1.66 2 .68.6 1.4.9 2.15.94.42 0 .8-.13 1.12-.4.32-.28.5-.63.5-1.04 0-.48-.18-.83-.5-1.06-.35-.23-.83-.42-1.47-.6-.63-.15-1.05-.3-1.24-.4-1.53-.82-2.3-2.24-2.3-4.25v-8.28c0-.46-.12-.8-.38-1.07-.26-.25-.58-.38-.96-.38-.4 0-.74.14-1 .4-.3.27-.43.64-.43 1.12v14.48z", __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: ".76", d: "M280.7 392.42c0 .44.12.8.4 1.05.26.26.58.4.96.4.4 0 .72-.13 1-.4.27-.25.4-.6.4-1.05v-1.45h.07c.42.74.97 1.4 1.66 2 .68.6 1.4.9 2.15.94.42 0 .8-.13 1.12-.4.32-.28.5-.63.5-1.04 0-.48-.18-.83-.5-1.06-.35-.23-.83-.42-1.47-.6-.63-.15-1.05-.3-1.24-.4-1.53-.82-2.3-2.24-2.3-4.25v-8.28c0-.46-.12-.8-.38-1.07-.26-.25-.58-.38-.96-.38-.4 0-.74.14-1 .4-.3.27-.43.64-.43 1.12v14.48z", __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement("path", { d: "M292.5 386.2h9.4c-.02 1.58-.43 2.84-1.24 3.8-.8.95-1.9 1.44-3.3 1.47-1.43 0-2.58-.46-3.45-1.38-.86-.93-1.33-2.23-1.4-3.9m-2.83-.88c.06 1.46.4 2.84 1 4.15.6 1.3 1.47 2.37 2.6 3.2 1.12.8 2.44 1.22 3.96 1.24 1.47 0 2.78-.4 3.93-1.18 1.14-.8 2.02-1.85 2.64-3.16.63-1.3.94-2.68.94-4.1 0-.93-.53-1.4-1.57-1.4H292.5c.03-1.12.27-2.08.74-2.87.46-.8 1.1-1.37 1.87-1.76.8-.4 1.65-.58 2.6-.58 1.67 0 3.2.6 4.6 1.77.48.35.83.52 1.06.52.3 0 .55-.12.73-.35.17-.23.25-.52.25-.85 0-.35-.14-.7-.4-1.03-.64-.66-1.53-1.25-2.68-1.75-1.16-.5-2.4-.75-3.73-.75-1.4 0-2.6.26-3.63.8-1 .5-1.84 1.2-2.47 2.08-.63.87-1.08 1.8-1.37 2.8-.3 1-.44 2.03-.46 3.06l.05.1c0 .04.02.05.02.06", __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: ".76", d: "M292.5 386.2h9.4c-.02 1.58-.43 2.84-1.24 3.8-.8.95-1.9 1.44-3.3 1.47-1.43 0-2.58-.46-3.45-1.38-.86-.93-1.33-2.23-1.4-3.9zm-2.83-.88c.06 1.46.4 2.84 1 4.15.6 1.3 1.47 2.37 2.6 3.2 1.12.8 2.44 1.22 3.96 1.24 1.47 0 2.78-.4 3.93-1.18 1.14-.8 2.02-1.85 2.64-3.16.63-1.3.94-2.68.94-4.1 0-.93-.53-1.4-1.57-1.4H292.5c.03-1.12.27-2.08.74-2.87.46-.8 1.1-1.37 1.87-1.76.8-.4 1.65-.58 2.6-.58 1.67 0 3.2.6 4.6 1.77.48.35.83.52 1.06.52.3 0 .55-.12.73-.35.17-.23.25-.52.25-.85 0-.35-.14-.7-.4-1.03-.64-.66-1.53-1.25-2.68-1.75-1.16-.5-2.4-.75-3.73-.75-1.4 0-2.6.26-3.63.8-1 .5-1.84 1.2-2.47 2.08-.63.87-1.08 1.8-1.37 2.8-.3 1-.44 2.03-.46 3.06l.05.1c0 .04.02.05.02.06z", __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement("path", { d: "M309.5 385.22c0-1.74.36-3.22 1.1-4.44.76-1.22 1.88-1.86 3.36-1.92 1.18 0 2.14.3 2.87.92.73.6 1.26 1.4 1.57 2.34.32.95.5 1.96.5 3.03 0 1.24-.2 2.34-.6 3.3-.4.97-.95 1.7-1.66 2.24-.72.5-1.52.77-2.42.77-1.07 0-1.95-.3-2.66-.93-.7-.63-1.22-1.42-1.54-2.36-.33-.95-.5-1.94-.53-2.96m9.1 6.38v8.42c0 .44.13.78.4 1.03.28.26.6.38.97.38.4 0 .76-.12 1.03-.37.28-.26.4-.62.4-1.1v-22.1c0-.44-.13-.8-.4-1.05-.3-.25-.63-.38-1.03-.38-.35 0-.67.13-.95.4-.3.24-.43.57-.43.98v.93h-.07c-.3-.62-.8-1.15-1.5-1.6-.68-.43-1.6-.67-2.78-.7-1.5 0-2.83.36-3.97 1.1-1.13.73-2 1.76-2.64 3.07-.62 1.32-.95 2.8-.97 4.48 0 1.2.17 2.34.52 3.42.34 1.08.84 2.02 1.47 2.83.64.8 1.4 1.44 2.3 1.9.9.45 1.87.68 2.93.68 1.92 0 3.46-.76 4.63-2.3h.06z", __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: ".76", d: "M309.5 385.22c0-1.74.36-3.22 1.1-4.44.76-1.22 1.88-1.86 3.36-1.92 1.18 0 2.14.3 2.87.92.73.6 1.26 1.4 1.57 2.34.32.95.5 1.96.5 3.03 0 1.24-.2 2.34-.6 3.3-.4.97-.95 1.7-1.66 2.24-.72.5-1.52.77-2.42.77-1.07 0-1.95-.3-2.66-.93-.7-.63-1.22-1.42-1.54-2.36-.33-.95-.5-1.94-.53-2.96zm9.1 6.38v8.42c0 .44.13.78.4 1.03.28.26.6.38.97.38.4 0 .76-.12 1.03-.37.28-.26.4-.62.4-1.1v-22.1c0-.44-.13-.8-.4-1.05-.3-.25-.63-.38-1.03-.38-.35 0-.67.13-.95.4-.3.24-.43.57-.43.98v.93h-.07c-.3-.62-.8-1.15-1.5-1.6-.68-.43-1.6-.67-2.78-.7-1.5 0-2.83.36-3.97 1.1-1.13.73-2 1.76-2.64 3.07-.62 1.32-.95 2.8-.97 4.48 0 1.2.17 2.34.52 3.42.34 1.08.84 2.02 1.47 2.83.64.8 1.4 1.44 2.3 1.9.9.45 1.87.68 2.93.68 1.92 0 3.46-.76 4.63-2.3h.06z", __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement("path", { d: "M327.35 385.22c0-1.74.37-3.22 1.12-4.44.75-1.22 1.86-1.86 3.35-1.92 1.18 0 2.14.3 2.87.92.73.6 1.25 1.4 1.56 2.34.32.95.5 1.96.5 3.03 0 1.24-.2 2.34-.6 3.3-.4.97-.95 1.7-1.66 2.24-.72.5-1.52.77-2.42.77-1.07 0-1.95-.3-2.66-.93-.7-.63-1.22-1.42-1.54-2.36-.33-.95-.5-1.94-.53-2.96m9.1 6.38v8.42c0 .44.14.78.4 1.03.3.26.6.38.98.38.4 0 .76-.12 1.03-.37.28-.26.4-.62.4-1.1v-22.1c0-.44-.13-.8-.4-1.05-.3-.25-.63-.38-1.03-.38-.35 0-.67.13-.95.4-.3.24-.43.57-.43.98v.93h-.06c-.32-.62-.8-1.15-1.5-1.6-.7-.43-1.62-.67-2.8-.7-1.5 0-2.82.36-3.96 1.1-1.13.73-2 1.76-2.64 3.07-.62 1.32-.95 2.8-.97 4.48 0 1.2.17 2.34.52 3.42s.84 2.02 1.48 2.83c.64.8 1.4 1.44 2.3 1.9.9.45 1.87.68 2.93.68 1.92 0 3.46-.76 4.63-2.3h.05z", __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: ".76", d: "M327.35 385.22c0-1.74.37-3.22 1.12-4.44.75-1.22 1.86-1.86 3.35-1.92 1.18 0 2.14.3 2.87.92.73.6 1.25 1.4 1.56 2.34.32.95.5 1.96.5 3.03 0 1.24-.2 2.34-.6 3.3-.4.97-.95 1.7-1.66 2.24-.72.5-1.52.77-2.42.77-1.07 0-1.95-.3-2.66-.93-.7-.63-1.22-1.42-1.54-2.36-.33-.95-.5-1.94-.53-2.96zm9.1 6.38v8.42c0 .44.14.78.4 1.03.3.26.6.38.98.38.4 0 .76-.12 1.03-.37.28-.26.4-.62.4-1.1v-22.1c0-.44-.13-.8-.4-1.05-.3-.25-.63-.38-1.03-.38-.35 0-.67.13-.95.4-.3.24-.43.57-.43.98v.93h-.06c-.32-.62-.8-1.15-1.5-1.6-.7-.43-1.62-.67-2.8-.7-1.5 0-2.82.36-3.96 1.1-1.13.73-2 1.76-2.64 3.07-.62 1.32-.95 2.8-.97 4.48 0 1.2.17 2.34.52 3.42s.84 2.02 1.48 2.83c.64.8 1.4 1.44 2.3 1.9.9.45 1.87.68 2.93.68 1.92 0 3.46-.76 4.63-2.3h.05z", __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement("path", { d: "M351.75 391.3h-1.25c-.4 0-.72.1-.96.34-.24.23-.38.5-.42.84.08.84.54 1.26 1.38 1.26h1.25v3.8c0 .43.13.75.4.98.26.23.6.34.98.34.4 0 .75-.1 1.03-.34.27-.24.4-.58.4-1.04v-3.74h1.25c.44 0 .77-.12 1-.35.22-.24.33-.54.33-.92 0-.32-.1-.6-.33-.83-.22-.23-.5-.35-.85-.35h-1.38v-13.5c0-.42-.15-.76-.44-1-.3-.25-.65-.38-1.07-.38-.37 0-.68.13-.93.37s-.38.6-.38 1.07v13.43z", __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: ".76", d: "M351.75 391.3h-1.25c-.4 0-.72.1-.96.34-.24.23-.38.5-.42.84.08.84.54 1.26 1.38 1.26h1.25v3.8c0 .43.13.75.4.98.26.23.6.34.98.34.4 0 .75-.1 1.03-.34.27-.24.4-.58.4-1.04v-3.74h1.25c.44 0 .77-.12 1-.35.22-.24.33-.54.33-.92 0-.32-.1-.6-.33-.83-.22-.23-.5-.35-.85-.35h-1.38v-13.5c0-.42-.15-.76-.44-1-.3-.25-.65-.38-1.07-.38-.37 0-.68.13-.93.37s-.38.6-.38 1.07v13.43z", __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement("path", { fill: "#fff", d: "M346.86 398.5c0-1.27-1.03-2.3-2.3-2.3-1.28 0-2.32 1.03-2.32 2.3 0 1.28 1.04 2.32 2.3 2.32 1.3 0 2.32-1.04 2.32-2.3", __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: "2.02", d: "M346.86 398.5c0-1.27-1.03-2.3-2.3-2.3-1.28 0-2.32 1.03-2.32 2.3 0 1.28 1.04 2.32 2.3 2.32 1.3 0 2.32-1.04 2.32-2.3z", __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement("path", { fill: "none", stroke: "#000", strokeWidth: "4.25", d: "M344.56 392.57v-14.8", strokeLinecap: "round", __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  })));
};

var TargetLogo = exports.TargetLogo = function TargetLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 286.5 63", __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, _react2.default.createElement("path", { fill: "#EB2D2D", d: "M31.5 42C37.3 42 42 37.6 42 31.8c0-5.8-4.7-10.5-10.5-10.5S21 26 21 31.7 25.8 42 31.6 42zm0 10c11 0 20-9 20-20 0-11.2-9-20.3-20-20.3s-20 9-20 20.2c0 11 9 20 20 20zM1.2 32c0-17 13.6-30.4 30.3-30.4C48.3 1.6 61.8 15 61.8 32 61.8 48.5 48.3 62 31.5 62 14.8 62.2 1.2 48.6 1.2 32z", __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }), _react2.default.createElement("path", { d: "M71.7 10h34.5V19h-12v35H84v-35h-12v-8.7M158.2 19h-9.7v8.6h8.7c3 0 5.4-1.4 5.4-4.4 0-3.2-2-4.3-4.4-4.3zm-19.7-9H159c11.6 0 13.2 8 13.2 12.7 0 6.8-5.8 10.2-6.3 10.3 0 0 5 2 5 7.7v8c0 3.4 2 4.3 2.4 5H165c-4-.4-4-3.5-3.8-5.4v-7c0-1.7-.7-3.6-4.2-3.6h-8.5v16h-10V10.2zM216.8 10V54h31.4v-9H227V35h18v-8.2h-18v-8h21.2v-8.7h-31.4M249.7 19h12.5v34.8h10.3v-35H285v-8.7h-35.3v9M117 25.5l-3.6 11.3h7.7l-4-11.3zM111.4 10h11.2L137.7 54H127l-3.3-9h-13l-2.8 9H97L111.4 10zM213.2 29.4h-18.8V38h9c0 1.6.2 3.4-2 5.8-.6 1-3 2.7-6.5 2.7-3 0-5-.8-6.8-2.3-4-3.4-5-9.6-5-13 0-4 1.7-14.3 12-14.7 0 0 6.7-.5 8.4 7.7h9.5c0-4-5-15.8-18-16-4.4 0-10 1.5-15 6.2-3.3 3.4-6.3 9.2-6.3 17.3 0 8.8 3.2 14.5 6 17.6 5.3 5.5 10.6 6 13.3 6 2 0 6.3-.4 11.6-4l1.5 2.5h7.2V29.4zM277.3 51h.5c.4 0 .6-.2.6-.5 0-.4-.3-.4-.6-.4h-.5v1zm-.6-1.4h1c1 0 1.3.2 1.3 1 0 .5-.3.7-.8.7l1 1.4h-.8l-.7-1.3h-.4v1.3h-.6v-3zm1 3.7c1.2 0 2-1 2-2 0-1.4-.8-2.3-2-2.3-1 0-2 1-2 2.2 0 1.2 1 2 2 2zm0-5c1.6 0 3 1.2 3 3 0 1.5-1.4 2.6-3 2.6-1.4 0-2.8-1.2-2.8-2.8 0-1.7 1.3-2.8 2.8-2.8z", __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }));
};

var EuroVisionLogo = exports.EuroVisionLogo = function EuroVisionLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 300 100", __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement("path", { fill: "#333", d: "M237.3 58.7c-3.3 0-5.2-4-5-8 .4-7.3 6.4-14.5 6.4-14.5 1.4 1.3 5.6 8.2 5.3 13.5-.2 5-3.3 9.2-6.7 9zm4-24.8c1.5-1.8 2.4-2.8 2.2-4-.2-1-4-2-6-.3-5-4-4 .7-3.3 1.8-6 4.3-10.2 15.6-7 24.4 3.4 8.6 13.2 9.6 18.3 3.6 4.6-5.4 3.8-15.3-4.2-25.7M68.5 87.4l1.7-2m-1.7 2l1.7-2m-1.7 2l1.7-2m-1.7 2l1.7-2c1.2 1 2.4 1.5 4 1.5 1 0 1.8-.5 1.8-1.2 0-.8-.5-1-2.7-1.7-2.6-.6-4.3-1.3-4.3-4 0-2.3 2-3.8 4.6-3.8 2 0 3.5.6 4.8 1.6L77 80c-1.2-.8-2.4-1.3-3.4-1.3s-1.7.5-1.7 1v.2c0 .7.4 1 2.7 1.6 2.6.7 4 1.6 4 4 0 2.5-2 4-4.7 4-2 0-4-.8-5.5-2m24-4.7c0-2.4-1.7-4.2-4-4.2s-4 1.8-4 4c0 2.3 1.7 4 4 4s4-1.7 4-4zm-11 0c0-3.8 3-7 7-7s7 3 7 6.8c0 3.7-3 6.8-7 6.8s-7-3-7-6.7m17.2-6.6h2.6l6 8v-8h3v13h-2.5l-6.3-8.3v8.3h-2.8v-13zm15 6.5c0-3.8 3-7 7-7 2.3 0 3.7.8 5 2l-1.8 2c-1-.7-2-1.2-3.5-1.2-2 0-3.7 1.8-3.7 4 0 2.4 1.6 4.2 4 4.2 1 0 2-.3 2.6-.8v-2h-2.8V82h5.6v5.5c-1.3 1-3.2 2-5.5 2-4 0-7-2.8-7-6.6m22.4 0c0-3.8 3-7 7-7 2.4 0 3.8 1 5 2.2l-1.8 2c-1-1-2-1.4-3.3-1.4-2.3 0-4 1.8-4 4 0 2.3 1.7 4 4 4 1.4 0 2.3-.5 3.3-1.4l1.8 2c-1.2 1.3-2.7 2.2-5.2 2.2-3.8 0-6.7-3-6.7-6.7m25.4 0c0-2.4-1.7-4.2-4-4.2s-3.8 1.8-3.8 4c0 2.3 1.6 4 4 4 2.2 0 3.8-1.7 3.8-4zm-10.8 0c0-3.8 3-7 7-7s6.8 3 6.8 6.8c0 3.7-3 6.8-7 6.8s-6.8-3-6.8-6.7m17-6.6h2.7l6 8v-8h3v13h-2.6l-6.2-8.3v8.3h-3v-13zM186 79h-3.8v-2.6H193V79h-4v10.3h-3V79zm10.2-2.6h9.8V79h-7v2.5h6.2V84h-6V87h7v2.5h-10v-13zm12.7 11l1.6-2c1 1 2.3 1.6 3.8 1.6 1.2 0 2-.5 2-1.2 0-.8-.5-1-2.7-1.7-2.6-.6-4.3-1.3-4.3-4 0-2.3 2-3.8 4.5-3.8 1.8 0 3.4.6 4.7 1.6l-1.4 2.2c-1.2-.8-2.3-1.3-3.4-1.3-1.2 0-1.8.5-1.8 1v.2c0 .7.6 1 2.8 1.6 2.7.7 4 1.6 4 4 0 2.5-1.8 4-4.6 4-2 0-4-.8-5.5-2m16.5-8.6h-4v-2.6h10.8V79h-4v10.3h-2.8V79zm-176-62.3c-11.4-.8-24.2 8.7-23.7 21 0 1.3 1 2.4 2.5 2.4h7S25 48 25 57.4c0 5 3.8 11 11.6 11 11 0 19.3-9 19.3-16.6 0-.7-.8-1.5-2-.2-1.6 2-10.8 11.5-19.8 11.5-3 0-5.7-1.7-5.7-5.4C28.5 53 36 44 49 40.2c3.2-1 3.4-5.4-.6-5.6-4-.2-17.6 1.3-18.6 1.3s-1-.2-.8-1c.5-1.3 5.5-10 20.6-11.7 5-.4 4.6-6.3 0-6.6M66 31.2c0-3-4.5-5-6.2-.6-3.2 8-4.2 32.8 6.6 32.8C71 63.4 77.2 53 77.2 43c0-8.4-3.5-14-4.2-15-.7-1-1.7-.3-1.6 1.5.2 2 .7 19-4.6 25-2 2.4-3.7 0-4-2.3-.6-6.6 3-16.7 3-21m49.4 26.5c-3 0-4.7-4-4.7-8.2 0-7.5 5.4-14.3 5.4-14.3 1.3 2 5 7.3 5 12.6 0 5.4-2.8 10-5.8 10zm2.4-24.8s1.7-2.4.7-3.8c-1.2-1.4-5-2-8.3 2-4.6 5-7.8 16-4.4 25 3.3 8.7 12.6 9.4 17 2.8 3.8-5.8 2.7-15.6-5-26m-30.4 8.7l.5-6.8s7.6-2 10-1.8c2.4.2 2.8 1.2 1.7 3-2.7 4-9 5.6-12.2 5.5zM103.4 64C100 59.7 96 50.8 90 45.3c6.2-.4 14-5.3 14-10.5 0-3.8-4-6.6-9.2-6.6-5.2 0-11 1.8-13.2 3-2.8 1.8-.7 5.7 2 4.6 0 0-1 4.7-1.3 7-2 0-2.6.3-2.4.7 0 .5 1 1 2 2.2-.4 3-1 15.8-.8 17 0 1 .8 1.3 1.8 0 .8-1 2.7-3.5 3.5-13.2 1 1 3.7 4.5 7 8.8 5 6.3 6.5 6.7 8.5 7.4 1 .4 2.2-.2 1.4-1.3m80.3-35c.2 6.6-5.7 17.3-6 25-.4 5.8.6 8 1 9 .6.6 1.7.7 2-.7 1-4.3 7-15.5 7.8-24.5.4-5.6-1.3-9-3.2-9.6-1-.3-1.6-.2-1.6.7m22-1c-8.2 0-14.2 3-14.2 9.7 0 4 3 7 8 7.7 2.7.5 5.5.7 6.5 1 1.8.7-2.6 2.8-9.3 7.4-4.6 3-8 6.4-9.8 10-.7 1 .2 2.3 1.5 1.4 2.5-1.8 8-4.7 13.4-7.6 5-2.8 9.8-6 9.8-9.8 0-3.5-2.6-4.8-4.6-5-3.5-.4-11 0-11-4.4 0-1.7 2-3.8 9-3.8 5.4 0 5-6.5.5-6.5m10.4 1.3c2.8 5.2-1.8 19.3-1.8 24.7 0 5.3.6 7.2 2 9 .8.8 1.7.3 1.8-.7.5-4.7 5.5-17.5 6-23.5.3-7.6-3.5-10.5-5.7-10.7-1.2 0-2.8.2-2.2 1.3m2-7.3c0 5 8 5.7 8-.3 0-5.3-4.3-9.7-5.2-10.4-1.4-1-3.3-1-3 1 1.2 3.7.2 8 .2 9.7m56.6 41c-1-6.7.4-15.3.4-23.4 0-6-5-9.3-8-9.3-4 0-6.4 1.8-6.4 1.8l.2-3.4c0-.7-.8-.7-2 0-6.2 3.8-7 14.8-7 22.5 0 7.8 1.2 10.5 1.3 11.5.2 1 1.4 1.2 2 .3 3.2-6.4 3.6-18 4.7-24.6 1.6-2 8-2.5 8.2 2.6.2 5-.3 18.2 5 22.7.6.6 1.8.4 1.6-.6M131.4 36c.2-12.4 6.6-16.3 10-16.3 5 0 7 3.8 7.3 5.4.4 1.8 2.2 3 2.8.4.6-2.7 6.4-11 13.4-11 6.4 0 8.7 6.7 8.5 12.4-.6 15.5-20.5 27.8-23 35.6-2.4-4.7-19.2-11.5-19-26.4zm36-25.4c-6 0-12.8 4.3-17 11.4-1-2.6-5-5.4-10-5.4-3.7 0-14.5 4.8-14.5 20.3 0 20 20 24 24.2 30.2.3.4 1.2.7 1.5-.3 3.3-9.7 28.5-20.6 28.5-40 0-11-7-16.4-13-16.4", __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }));
};

var ArtsyLogo = exports.ArtsyLogo = function ArtsyLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 2450 786", __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, _react2.default.createElement("path", { d: "M0 393v393h2450V0H0v393zm2443 0v380H1415l-.2-62.8-.3-62.7-28.7-.3-28.8-.2-.2 62.7-.3 62.8-671.7.3L13 773V13h2430v380z", __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    }
  }), _react2.default.createElement("path", { d: "M1639.3 229c-18.6 2.8-39.6 11-52 20.4-17 13-26.8 30.6-29.3 53-2.8 26 5 50 21 65.2 16.7 15.5 35.5 23.5 82.8 35.4 30.7 7.7 40.6 11.7 48.6 19.5 6.8 6.6 9 12 9 22 0 9.6-2.5 15.7-9.2 22.3-15.4 15.5-57 20.2-81 9.2-11.5-5.4-20.7-16.6-24.2-29.8l-1-4.2h-59.3l.7 9.2c2 24 8.3 38 25 53.5 22 20.6 51 30.3 90.4 30.3 58.3 0 102-27 113.3-70.2 4-11.8 4-30.8 1-43-6-24.7-21-43.3-43-54.7-13.5-7-23.4-10-58-19-19.4-5-33.6-9-38-11-16.7-7-23.5-19-19.6-33 4-14 20.5-23 43.7-23 16.3 0 27.3 4 35.6 11 5 5 9 11 11 18l1 4 29 .6h29.4l-.8-5.5c-4.5-52-41.6-80.7-104-80.2-8 .3-17.6.7-21 1zM404 238.2l-56.5 145.3-56.2 144.2c-.4 1 6.4 1.3 32 1.3H356l1.7-3.6c.8-2 7.2-19 14-37.7 7-18.7 13-35.5 14-37.4l1.3-3.3h101.8l1 2.7c16.4 45.5 26.6 73.4 27.7 76l1.4 3.3h32c18 0 32 0 32-.3l-57-146.2-56.8-146-32.7-.3-32.7-.2-1 2.2zm50.5 111c8.7 24.2 15.6 44 15.3 44.3-.3.3-15 .4-33 .3l-32.6-.3 16.6-45.3c9-25 16.8-44.7 17.2-44 .4.7 7.8 21 16.5 45zm237.7 33l.3 146.3 30.7.3 30.8.2.2-72.2.3-72.2 57.5 72.2 57.4 72.2h37.3c20.5 0 37.3-.2 37.3-.5s-19.6-24.5-43.5-53.7L857 421.6l11-2.6c12.6-3.3 18-5.6 28.4-12.2 8.7-5.6 20.6-17.7 25.6-26 5.6-9.3 10.3-21.3 12.4-31.6 2.8-13.8 2.2-34-1.6-46.5-7.8-26-24-45.4-47.7-56.6-10-5-20-7-35-9-7 0-40-1-84-1h-74l.5 147zM839 292c14.3 2 22.8 6.6 29 16.2 5.4 8.3 7.7 18.7 6.3 28.5-2.4 16.7-11.8 26.2-31 31.5-7.2 2-11 2.2-48.5 2.6l-40.8.4v-39.4c0-21.7.3-39.8.7-40 1-1.2 75-1 84.2.2zm199-27v29h102v235l30.8-.2 30.7-.3.3-117.3.2-117.2h102v-58h-266v29zm829.2-26.8c.8 1.3 26.8 43 57.6 93L1981 422v107h61V421.5l56-90.5 57.6-92.8 1.4-2.2h-71.8l-13.8 23.2c-7.6 12.8-19 32.3-25.7 43.3-26 44.2-34.2 57.5-34.7 57.5-.3 0-17-28-37-62l-36.4-62h-71.8l1.4 2.2z", __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }));
};

var IdeaLogo = exports.IdeaLogo = function IdeaLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 283 65", __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, _react2.default.createElement("path", { d: "M104.5 2.6h-29v59.6H104c18.5-.2 31.2-13.2 31.2-30 0-16.4-12.5-29-30.7-29.6zM104 52H86V13h18.2c11.7.2 19.4 8.4 19.4 19.5 0 11.2-7.8 19.3-19.6 19.5zM59.6 13V2.7H0V13h24.5v39H0v10.5h59.6V51.8H35.2V13zm148.8 0V2.7h-60.2v59.7h60.2V51.8H159v-14h38.5V27H159V13zm42.3-13c-18 0-32.8 14.5-32.8 32.4s14.4 32.4 32.5 32.4c18 0 32.8-14.5 32.8-32.4S268.8 0 250.7 0zm0 53.7c-11.8 0-21.5-9.5-21.5-21.2s9.6-21.2 21.5-21.2c11.8 0 21.5 9.5 21.5 21.2s-9.7 21.2-21.5 21.2z", __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }));
};

var HuffpostLogo = exports.HuffpostLogo = function HuffpostLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 513.5 80", __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, _react2.default.createElement("path", { fill: "#FFF", d: "M71.6 68h18.2l10-56H81.3L78 32H62l3.6-20H47.3l-9.8 56h18.2l3.7-21h15.8l-3.6 21zM110 12l-5.5 31.2c-.5 2.5-.7 4.8-.7 7 0 16.6 14.5 19 23 19 18.3 0 26-6 29-22.3l6-35h-18.2l-5.2 29c-1.7 9-2.8 14-9.7 14-4.4 0-6.6-2.7-6.6-7.5 0-2 .8-4 1-7l5.6-29h-18zm148.5 56h18.3l2.6-14.4h8.6c16 0 24.7-8.6 24.7-24.3 0-11-7.7-17.3-21-17.3h-23.3l-10 56zM287 39.8h-5.4l2.4-13.2h5c4 0 6 2 6 5.7.2 4.6-3 7.5-8 7.5zm61-29c-19.8 0-31.7 13-31.7 34.4 0 15 9.5 24 25.3 24 20 0 31.8-13 31.8-34.4 0-15-9.4-24-25.3-24zm-5.2 44c-4.7 0-7.5-3.5-7.5-9.2 0-2.2.2-4 .6-6.2 1-7.3 3.2-14 11-14 4.4 0 7.2 3.3 7.2 9 0 2.2-.2 4-.6 6.2-1.6 7.3-4 14-11.3 14zM437 68h18l7.3-41H476l2.7-15H432l-2.6 15H444l-7 41zm-30.3-35.3c-5.8-1.8-8-2.6-8-5.3 0-1.8 1-4 4.5-4 2.6 0 4.7 1.6 5.6 3.7l16-4c-1.8-8-8.6-12-20.3-12-22 0-23.8 15-23.8 19.5 0 9.3 5 15 15.4 17.8 3 .8 6 1.7 6 4.8 0 2.6-1.3 4-4.4 4-3 0-6-1.7-7-4.6l-16 4.4c2 8.4 9.7 13.2 22 13.2 9.4 0 25-2.6 25-19.5 0-8.4-4.7-14-14.5-17zM27.4 68l9.8-56H7v56h20.4zm459.2-56l-9.8 56H507V12h-20.4zm-314.2 0l-9.8 56h18.2l3-16.5H199l2.6-14h-15.3L188 27h21.4l2.7-15m8.6 0l-9.8 56H229l3-16.5h15l2.5-14h-15.3L236 27h21.4l2.6-15", __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }));
};

var CoinbaseLogo = exports.CoinbaseLogo = function CoinbaseLogo() {
  return _react2.default.createElement(Svg, { viewBox: "0 0 122 28", __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement("path", { fillRule: "evenodd", d: "M10.3 24c1 0 1.8-.3 2.7-.6l1.7 2.6c-1.6.8-3 1.2-5 1.2-5 0-8.7-3.4-8.7-8.8s4-8.8 8.8-8.8c1.8 0 3.2.4 4.6 1l-1.6 2.8c-1-.3-1.7-.4-2.6-.4-3 0-5.4 2-5.4 5.4 0 3.4 2.3 5.5 5.5 5.5zm13-14.4c5 0 8.7 3.6 8.7 8.8 0 5.2-3.7 8.8-8.7 8.8-5 0-8.7-3.6-8.7-8.8 0-5.2 3.7-8.8 8.7-8.8zm0 3.2c-2.8 0-5 2.2-5 5.6 0 3.4 2.2 5.6 5 5.6 3 0 5-2.2 5-5.6 0-3.4-2-5.6-5-5.6zm11 14V10h3.8v16.8h-3.6zm-.4-22c0-1.3 1-2.3 2.2-2.3 1.3 0 2.4 1 2.4 2.3 0 1.4-1 2.4-2.4 2.4-1.2 0-2.3-1-2.3-2.4zm7.4 6.3c2.3-1 5.2-1.4 7.7-1.4 4.4 0 7 1.6 7 6.4v10.8h-3.6V16.3c0-2.4-1.5-3.3-3.6-3.3-1.3 0-2.7.2-3.7.5v13.3h-3.6V11zm18-10H63v9.5c.8-.5 2.4-1 4-1 4.7 0 8.4 3.2 8.4 8.6 0 5.5-3.7 9.2-10 9.2-2.3 0-4.4-.5-6-1V1zM63 23.6c.7.3 1.7.4 2.6.4 3.5 0 6-2 6-5.8 0-3.3-2.4-5.2-5.2-5.2-1.5 0-2.6.4-3.4.8v9.8zm23.2-8c0-2-1.4-2.7-3.2-2.7-2 0-3.5.5-5 1.2V11c1.6-1 3.5-1.4 5.6-1.4 3.7 0 6.3 1.5 6.3 5.7v11.2c-1.7.4-4 .7-6 .7-4.2 0-7.4-1.4-7.4-5.2 0-3.4 3-5 7.8-5h1.8v-1.5zm0 3.8h-1.6c-2.6 0-4.3.8-4.3 2.5s1.6 2.3 4 2.3h2v-5zm6.4 3c1.6 1 3.4 1.8 5 1.8 1.8 0 3-.6 3-2 0-1.3-1-1.8-3.2-2.4-3.5-.8-5-2.2-5-5 0-3.5 2.6-5.2 6-5.2 2 0 3.4.4 4.8 1.3v3.4c-1.5-1-3-1.7-4.7-1.7-1.6 0-2.5.8-2.5 2 0 1 .7 1.5 2.7 2 3.8 1 5.5 2.3 5.5 5.4 0 3.6-2.7 5.2-6.4 5.2-2 0-4-.5-5.2-1.4v-3.5zm16.7-3c.2 3 2.8 4.6 5.4 4.6 2.4 0 4-.6 5.7-1.7v3.3c-1.5 1-3.8 1.6-6 1.6-5.2 0-8.7-3.3-8.7-8.7 0-5.3 3.5-9 8-9 5 0 7.3 3.3 7.3 8v1.8h-11.7zm8.2-2.6c0-2.6-1.4-4-3.8-4-2.2 0-3.8 1.5-4.3 4h8z", __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CompanyLogos.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/CompanyLogos.js"); } } })();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelGroup = undefined;

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _colors = __webpack_require__(558);

var _fonts = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelGroup = exports.LabelGroup = _styledComponents2.default.div.withConfig({
  displayName: 'Label__LabelGroup',
  componentId: 's1ycyyhc-0'
})(['display:inline-block;margin-left:0.5rem;position:relative;bottom:', ';'], (0, _rem2.default)(3));

var Label = _styledComponents2.default.small.withConfig({
  displayName: 'Label',
  componentId: 's1ycyyhc-1'
})(['display:inline-block;background:', ';color:white;font-size:0.75rem;font-family:', ';border-radius:', ';padding:', ' ', ';margin-left:0.4rem;'], _colors.violetRed, _fonts.headerFont, (0, _rem2.default)(3), (0, _rem2.default)(1), (0, _rem2.default)(5));

exports.default = Label;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Label.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Label.js"); } } })();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _sizes = __webpack_require__(561);

var _colors = __webpack_require__(558);

var _media = __webpack_require__(560);

var _NavIcons = __webpack_require__(675);

var _Link = __webpack_require__(559);

var _Link2 = _interopRequireDefault(_Link);

var _NavLinks = __webpack_require__(592);

var _NavLinks2 = _interopRequireDefault(_NavLinks);

var _Social = __webpack_require__(594);

var _Social2 = _interopRequireDefault(_Social);

var _Logo = __webpack_require__(591);

var _Logo2 = _interopRequireDefault(_Logo);

var _NavSeparator = __webpack_require__(593);

var _NavSeparator2 = _interopRequireDefault(_NavSeparator);

var _NavButton = __webpack_require__(674);

var _NavButton2 = _interopRequireDefault(_NavButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/MobileNavbar.js';


var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'MobileNavbar__Wrapper',
  componentId: 's1mwg5kk-0'
})(['display:none;', ''], (0, _media.mobile)((0, _styledComponents.css)(['display:flex;align-items:center;justify-content:space-between;height:', ';'], (0, _rem2.default)(_sizes.navbarHeight))));

var SecondaryMenu = _styledComponents2.default.div.withConfig({
  displayName: 'MobileNavbar__SecondaryMenu',
  componentId: 's1mwg5kk-1'
})(['position:absolute;top:', ';left:0;right:0;', ' display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;padding:0 ', ';transition:height 0.1s;user-select:none;-webkit-overflow-scrolling:touch;overflow-x:scroll;overflow-y:hidden;background:', ';color:#868686;'], (0, _rem2.default)(_sizes.navbarHeight), function (p) {
  return p.open ? (0, _styledComponents.css)(['height:', ';'], (0, _rem2.default)(_sizes.navbarHeight)) : (0, _styledComponents.css)(['height:0;']);
}, (0, _rem2.default)(20), _colors.paleGrey);

var LogoLink = (0, _styledComponents2.default)(_Link2.default).attrs({
  unstyled: true,
  href: '/'
}).withConfig({
  displayName: 'MobileNavbar__LogoLink',
  componentId: 's1mwg5kk-2'
})(['display:inline-block;vertical-align:center;']);

var ArrowWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'MobileNavbar__ArrowWrapper',
  componentId: 's1mwg5kk-3'
})(['transition:transform 0.1s;', ''], function (p) {
  return p.rotate && (0, _styledComponents.css)(['transform-origin:50% 55%;transform:rotate(180deg);']);
});

var SecondaryMenuItem = _styledComponents2.default.div.withConfig({
  displayName: 'MobileNavbar__SecondaryMenuItem',
  componentId: 's1mwg5kk-4'
})(['padding-right:', ';'], (0, _rem2.default)(20));

var MobileNavbar = function MobileNavbar(props) {
  var isSideFolded = props.isSideFolded,
      isMobileNavFolded = props.isMobileNavFolded,
      onSideToggle = props.onSideToggle,
      onMobileNavToggle = props.onMobileNavToggle,
      showSideNav = props.showSideNav;

  return _react2.default.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, showSideNav !== false && _react2.default.createElement(_NavButton2.default, {
    active: !isSideFolded,
    onClick: onSideToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, isSideFolded ? _react2.default.createElement(_NavIcons.FoldIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }) : _react2.default.createElement(_NavIcons.CloseIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  })), _react2.default.createElement(LogoLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, _react2.default.createElement(_Logo2.default, { compact: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  })), _react2.default.createElement(_NavButton2.default, {
    onClick: onMobileNavToggle,
    active: !isMobileNavFolded,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement(ArrowWrapper, { rotate: !isMobileNavFolded, __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, _react2.default.createElement(_NavIcons.ArrowIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }))), _react2.default.createElement(SecondaryMenu, { open: !isMobileNavFolded, __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement(_NavLinks2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }), _react2.default.createElement(_NavSeparator2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }), _react2.default.createElement(SecondaryMenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, _react2.default.createElement(_Social2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }))));
};

exports.default = MobileNavbar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/MobileNavbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/MobileNavbar.js"); } } })();

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _sizes = __webpack_require__(561);

var _form = __webpack_require__(685);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavButton = _styledComponents2.default.button.withConfig({
  displayName: 'NavButton',
  componentId: 'bbdxin-0'
})(['', ' flex:0 0 auto;min-width:', ';height:', ';text-align:center;vertical-align:middle;cursor:pointer;', ' &:focus{border:', ' solid currentColor;border-radius:', ';}'], _form.resetInput, (0, _rem2.default)(_sizes.navbarHeight), (0, _rem2.default)(_sizes.navbarHeight), function (p) {
  return p.active && (0, _styledComponents.css)(['background:rgba(0,0,0,0.07);']);
}, (0, _rem2.default)(2), (0, _rem2.default)(2));

exports.default = NavButton;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavButton.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavButton.js"); } } })();

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowIcon = exports.FoldIcon = exports.CloseIcon = undefined;

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavIcons.js";


var Svg = _styledComponents2.default.svg.withConfig({
  displayName: "NavIcons__Svg",
  componentId: "gjgetu-0"
})(["svg{display:inline-block;path{fill:currentColor;}}"]);

var CloseIcon = exports.CloseIcon = function CloseIcon() {
  return _react2.default.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "15", height: "15", xmlnsXlink: "http://www.w3.org/1999/xlink", __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "close"), _react2.default.createElement("use", { fill: "#FFF", xlinkHref: "#close", transform: "translate(1 1)", __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("path", { id: "close", d: "M-.7.7l13 13 1.4-1.4-13-13L-.7.7zm13-1.4l-13 13 1.4 1.4 13-13-1.4-1.4z", __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  })));
};

var FoldIcon = exports.FoldIcon = function FoldIcon() {
  return _react2.default.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "17", height: "14", xmlnsXlink: "http://www.w3.org/1999/xlink", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "fold"), _react2.default.createElement("use", { fill: "#FFF", xlinkHref: "#fold", transform: "translate(0 1)", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement("path", { id: "fold", d: "M0 1h17v-2H0v2zm17 4H0v2h17V5zM0 13h17v-2H0v2z", __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })));
};

var ArrowIcon = exports.ArrowIcon = function ArrowIcon() {
  return _react2.default.createElement(Svg, { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "8", xmlnsXlink: "http://www.w3.org/1999/xlink", __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "arrow down"), _react2.default.createElement("use", { fill: "#FFF", xlinkHref: "#menuArrow", transform: "translate(1 1)", __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement("path", { id: "menuArrow", d: "M5 5l-.7.7.7.7.7-.7L5 5zM9.3-.7l-5 5 1.4 1.4 5-5L9.3-.7zm-3.6 5l-5-5L-.7.7l5 5 1.4-1.4z", __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  })));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavIcons.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/NavIcons.js"); } } })();

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _colors = __webpack_require__(558);

var _sizes = __webpack_require__(561);

var _fonts = __webpack_require__(516);

var _media = __webpack_require__(560);

var _Link = __webpack_require__(559);

var _Link2 = _interopRequireDefault(_Link);

var _NavLinks = __webpack_require__(592);

var _NavLinks2 = _interopRequireDefault(_NavLinks);

var _Social = __webpack_require__(594);

var _Social2 = _interopRequireDefault(_Social);

var _Logo = __webpack_require__(591);

var _Logo2 = _interopRequireDefault(_Logo);

var _MobileNavbar = __webpack_require__(673);

var _MobileNavbar2 = _interopRequireDefault(_MobileNavbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Navbar.js';


var Wrapper = _styledComponents2.default.nav.withConfig({
  displayName: 'Navbar__Wrapper',
  componentId: 's1mplyxk-0'
})(['position:fixed;left:0;box-sizing:border-box;z-index:3;width:100%;height:', ';font-family:', ';font-size:', ';font-weight:500;background:', ';transition:background 300ms ease-out;color:white;'], (0, _rem2.default)(_sizes.navbarHeight), _fonts.headerFont, (0, _rem2.default)(15), function (props) {
  return props.transparent ? 'transparent' : _colors.violetRed;
});

var NormalNavbar = _styledComponents2.default.div.withConfig({
  displayName: 'Navbar__NormalNavbar',
  componentId: 's1mplyxk-1'
})(['display:flex;align-items:center;justify-content:space-between;padding:0 ', ';', ''], (0, _rem2.default)(20), (0, _media.mobile)((0, _styledComponents.css)(['display:none;'])));

var StartWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Navbar__StartWrapper',
  componentId: 's1mplyxk-2'
})(['display:flex;align-items:center;justify-content:flex-start;']);

var EndWrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Navbar__EndWrapper',
  componentId: 's1mplyxk-3'
})(['display:flex;align-items:center;justify-content:flex-end;']);

var LogoLink = (0, _styledComponents2.default)(_Link2.default).attrs({
  unstyled: true,
  href: '/'
}).withConfig({
  displayName: 'Navbar__LogoLink',
  componentId: 's1mplyxk-4'
})(['display:inline-block;vertical-align:center;margin-right:', ';'], (0, _rem2.default)(35));

var Navbar = function (_PureComponent) {
  (0, _inherits3.default)(Navbar, _PureComponent);

  function Navbar() {
    (0, _classCallCheck3.default)(this, Navbar);

    return (0, _possibleConstructorReturn3.default)(this, (Navbar.__proto__ || (0, _getPrototypeOf2.default)(Navbar)).apply(this, arguments));
  }

  (0, _createClass3.default)(Navbar, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onSideToggle = _props.onSideToggle,
          onMobileNavToggle = _props.onMobileNavToggle,
          isSideFolded = _props.isSideFolded,
          isMobileNavFolded = _props.isMobileNavFolded,
          showSideNav = _props.showSideNav,
          transparent = _props.transparent;

      return _react2.default.createElement(Wrapper, { transparent: transparent, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(NormalNavbar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(StartWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(LogoLink, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_Logo2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      })), _react2.default.createElement(_NavLinks2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement(EndWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_Social2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }))), _react2.default.createElement(_MobileNavbar2.default, {
        isSideFolded: isSideFolded,
        isMobileNavFolded: isMobileNavFolded,
        onSideToggle: onSideToggle,
        onMobileNavToggle: onMobileNavToggle,
        showSideNav: showSideNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }));
    }
  }]);

  return Navbar;
}(_react.PureComponent);

exports.default = Navbar;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Navbar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Navbar.js"); } } })();

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _media = __webpack_require__(560);

var _colors = __webpack_require__(558);

var _sizes = __webpack_require__(561);

var _fonts = __webpack_require__(516);

var _CaptureScroll = __webpack_require__(571);

var _CaptureScroll2 = _interopRequireDefault(_CaptureScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = _styledComponents2.default.nav.withConfig({
  displayName: 'Sidebar',
  componentId: 's1279vcw-0'
})(['position:fixed;transform:translateZ(0);display:block;z-index:1;font-family:', ';left:0;top:', ';bottom:0;right:auto;width:', ';background:', ';box-sizing:border-box;color:inherit;overflow-y:auto;transition:transform 150ms ease-out;', ''], _fonts.headerFont, (0, _rem2.default)(_sizes.navbarHeight), (0, _rem2.default)(_sizes.sidebarWidth), _colors.paleGrey, (0, _media.mobile)((0, _styledComponents.css)(['', ''], function (p) {
  return p.isFolded ? (0, _styledComponents.css)(['transform:translateX(', ');'], (0, _rem2.default)(-_sizes.sidebarWidth)) : '';
})));

exports.default = (0, _CaptureScroll2.default)(Sidebar);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Sidebar.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/Sidebar.js"); } } })();

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleSidebarMenu = exports.DocsSidebarMenu = undefined;

var _extends2 = __webpack_require__(84);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(570);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _titleToDash = __webpack_require__(597);

var _titleToDash2 = _interopRequireDefault(_titleToDash);

var _docs = __webpack_require__(648);

var _Link = __webpack_require__(559);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/SidebarMenus.js';


var MenuInner = _styledComponents2.default.div.withConfig({
  displayName: 'SidebarMenus__MenuInner',
  componentId: 's11f7yr6-0'
})(['display:block;box-sizing:border-box;height:100%;padding-top:', ';'], (0, _rem2.default)(25));

var TopLevelLink = _styledComponents2.default.div.withConfig({
  displayName: 'SidebarMenus__TopLevelLink',
  componentId: 's11f7yr6-1'
})(['display:block;margin:', ' ', ';'], (0, _rem2.default)(10), (0, _rem2.default)(40));

var Section = _styledComponents2.default.div.withConfig({
  displayName: 'SidebarMenus__Section',
  componentId: 's11f7yr6-2'
})(['margin-bottom:', ';'], (0, _rem2.default)(20));

var SectionTitle = _styledComponents2.default.h4.withConfig({
  displayName: 'SidebarMenus__SectionTitle',
  componentId: 's11f7yr6-3'
})(['display:block;margin:', ' ', ';font-weight:normal;'], (0, _rem2.default)(10), (0, _rem2.default)(40));

var SubSection = _styledComponents2.default.h5.withConfig({
  displayName: 'SidebarMenus__SubSection',
  componentId: 's11f7yr6-4'
})(['display:block;margin:', ' ', ' ', ' ', ';font-size:0.9rem;font-weight:normal;'], (0, _rem2.default)(10), (0, _rem2.default)(40), (0, _rem2.default)(10), (0, _rem2.default)(55));

var Folder = function (_Component) {
  (0, _inherits3.default)(Folder, _Component);

  function Folder() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Folder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Folder.__proto__ || (0, _getPrototypeOf2.default)(Folder)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isOpen: false
    }, _this.toggleSubSections = function () {
      _this.setState({ isOpen: !_this.state.isOpen });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Folder, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ isOpen: this.props.isOpenDefault });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ isOpen: nextProps.isOpenDefault });
    }
  }, {
    key: 'render',
    value: function render() {
      // eslint-disable-next-line
      var _props = this.props,
          children = _props.children,
          isOpenDefault = _props.isOpenDefault,
          props = (0, _objectWithoutProperties3.default)(_props, ['children', 'isOpenDefault']);

      var isOpen = this.state.isOpen;

      return typeof children === 'function' ? children({ rootProps: props, toggleSubSections: this.toggleSubSections, isOpen: isOpen }) : null;
    }
  }]);

  return Folder;
}(_react.Component);

var DocsSidebarMenu = exports.DocsSidebarMenu = function DocsSidebarMenu(_ref2) {
  var onRouteChange = _ref2.onRouteChange;
  return _react2.default.createElement(MenuInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _docs.pages.map(function (_ref3) {
    var title = _ref3.title,
        pathname = _ref3.pathname,
        sections = _ref3.sections;
    return _react2.default.createElement(Folder, {
      key: title,
      isOpenDefault: typeof window !== 'undefined' && window.location.pathname === '/docs/' + pathname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }, function (_ref4) {
      var rootProps = _ref4.rootProps,
          toggleSubSections = _ref4.toggleSubSections,
          isOpen = _ref4.isOpen;
      return _react2.default.createElement(Section, (0, _extends3.default)({}, rootProps, { onClick: onRouteChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }), _react2.default.createElement(SectionTitle, { onClick: toggleSubSections, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_Link2.default, { href: '/docs/' + pathname, __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, title)), isOpen && sections.map(function (_ref5) {
        var title = _ref5.title;
        return _react2.default.createElement(SubSection, { key: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          }
        }, _react2.default.createElement(_Link.StyledLink, { href: '/docs/' + pathname + '#' + (0, _titleToDash2.default)(title), __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          }
        }, title));
      }));
    });
  }));
};

function getSectionPath(parentPathname, title) {
  return (parentPathname || '') + '#' + (0, _titleToDash2.default)(title);
}

function isFolderOpen(currentHref, _ref6) {
  var pathname = _ref6.pathname,
      title = _ref6.title,
      sections = _ref6.sections;

  return sections.reduce(function (sum, v) {
    return sum || window.location.href.endsWith(getSectionPath(pathname, v.title));
  }, false) || window.location.href.endsWith(pathname || '#' + (0, _titleToDash2.default)(title));
}

var SimpleSidebarMenu = exports.SimpleSidebarMenu = function SimpleSidebarMenu(_ref7) {
  var onRouteChange = _ref7.onRouteChange,
      _ref7$pages = _ref7.pages,
      pages = _ref7$pages === undefined ? [] : _ref7$pages;
  return _react2.default.createElement(MenuInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    }
  }, pages.map(function (_ref8) {
    var title = _ref8.title,
        pathname = _ref8.pathname,
        sections = _ref8.sections,
        href = _ref8.href;

    if (!sections) {
      return _react2.default.createElement(TopLevelLink, { key: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_Link.StyledLink, { href: pathname || '#' + (href || (0, _titleToDash2.default)(title)), __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, title));
    }

    return _react2.default.createElement(Folder, {
      key: title,
      isOpenDefault: typeof window !== 'undefined' && isFolderOpen(window.location.href, { title: title, pathname: pathname, sections: sections }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      }
    }, function (_ref9) {
      var rootProps = _ref9.rootProps,
          toggleSubSections = _ref9.toggleSubSections,
          isOpen = _ref9.isOpen;
      return _react2.default.createElement(Section, (0, _extends3.default)({}, rootProps, { onClick: onRouteChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }), _react2.default.createElement(SectionTitle, { onClick: toggleSubSections, __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement(_Link2.default, { href: pathname || '#' + (0, _titleToDash2.default)(title), __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, title)), isOpen && sections.map(function (_ref10) {
        var title = _ref10.title;
        return _react2.default.createElement(SubSection, { key: title, __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          }
        }, _react2.default.createElement(_Link.StyledLink, { unstyled: true, href: getSectionPath(pathname, title), __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        }, title));
      }));
    });
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/SidebarMenus.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/SidebarMenus.js"); } } })();

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(676);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Sidebar = __webpack_require__(677);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _SidebarMenus = __webpack_require__(678);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/index.js';


var Nav = function Nav(props) {
  var isSideFolded = props.isSideFolded,
      isMobileNavFolded = props.isMobileNavFolded,
      onSideToggle = props.onSideToggle,
      onMobileNavToggle = props.onMobileNavToggle,
      onRouteChange = props.onRouteChange,
      showSideNav = props.showSideNav,
      useDocsSidebarMenu = props.useDocsSidebarMenu,
      transparent = props.transparent,
      pages = props.pages;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement(_Navbar2.default, {
    showSideNav: showSideNav,
    transparent: transparent,
    isSideFolded: isSideFolded,
    isMobileNavFolded: isMobileNavFolded,
    onSideToggle: onSideToggle,
    onMobileNavToggle: onMobileNavToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), showSideNav !== false && _react2.default.createElement(_Sidebar2.default, { isFolded: isSideFolded, __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, useDocsSidebarMenu !== false ? _react2.default.createElement(_SidebarMenus.DocsSidebarMenu, { onRouteChange: onRouteChange, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }) : _react2.default.createElement(_SidebarMenus.SimpleSidebarMenu, {
    onRouteChange: onRouteChange,
    pages: pages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })));
};

exports.default = Nav;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Nav/index.js"); } } })();

/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _rem = __webpack_require__(557);

var _rem2 = _interopRequireDefault(_rem);

var _colors = __webpack_require__(558);

var _fonts = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Note.js';


var Note = _styledComponents2.default.div.withConfig({
  displayName: 'Note',
  componentId: 's1bk2sh4-0'
})(['font-family:', ';background:', ';padding:', ' ', ' ', ' ', ';border-left:', ' solid ', ';margin:', ' 0;border-radius:', ';> p{margin:0 0 ', ' 0;}'], _fonts.bodyFont, _colors.lightVioletRed, (0, _rem2.default)(7), (0, _rem2.default)(10), (0, _rem2.default)(5), (0, _rem2.default)(14), (0, _rem2.default)(4), _colors.violetRed, (0, _rem2.default)(45), (0, _rem2.default)(3), (0, _rem2.default)(5));

var NoteLabel = _styledComponents2.default.strong.withConfig({
  displayName: 'Note__NoteLabel',
  componentId: 's1bk2sh4-1'
})(['display:block;font-weight:600;font-family:', ';text-transform:uppercase;font-size:90%;margin-bottom:', ';'], _fonts.headerFont, (0, _rem2.default)(7));

var NoteWrapper = function NoteWrapper(_ref) {
  var _ref$label = _ref.label,
      label = _ref$label === undefined ? 'Note' : _ref$label,
      children = _ref.children;
  return _react2.default.createElement(Note, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(NoteLabel, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, label), children);
};

exports.default = NoteWrapper;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Note.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/Note.js"); } } })();

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(198);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/SeoHead.js';


// const CreateMarkup = text => ({ __html: text })

var SeoHead = function (_Component) {
  (0, _inherits3.default)(SeoHead, _Component);

  function SeoHead() {
    (0, _classCallCheck3.default)(this, SeoHead);

    return (0, _possibleConstructorReturn3.default)(this, (SeoHead.__proto__ || (0, _getPrototypeOf2.default)(SeoHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(SeoHead, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$title = _props.title,
          title = _props$title === undefined ? 'styled-components' : _props$title,
          _props$description = _props.description,
          description = _props$description === undefined ? 'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅' : _props$description,
          _props$image = _props.image,
          image = _props$image === undefined ? 'https://www.styled-components.com/static/atom.png' : _props$image,
          children = _props.children,
          canonical = _props.canonical,
          _props$url = _props.url,
          url = _props$url === undefined ? '' : _props$url;

      var properCanonical = canonical || url;
      return _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, title), _react2.default.createElement('meta', { name: 'description', content: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('link', { itemProp: 'url', href: 'https://styled-components.com/', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('meta', { itemProp: 'name', content: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('meta', { itemProp: 'description', content: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('meta', { itemProp: 'image', content: '/static/atom.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('meta', {
        name: 'google-site-verification',
        content: 'lWntYW6AWVMcShSIWLmOzKr8Wyek2TR-zuQn6_XGu_c',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('meta', { property: 'og:locale', content: 'en_US', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'website', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }), _react2.default.createElement('meta', { property: 'og:title', content: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('meta', { property: 'og:url', content: url, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('meta', { property: 'og:image', content: image, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('meta', { property: 'og:image:height', content: '652', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('meta', { property: 'og:image:width', content: '652', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('meta', { property: 'og:description', content: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('meta', { property: 'og:site_name', content: 'styled-components', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('meta', { name: 'twitter:site', content: '@mxstbr', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('meta', { name: 'twitter:title', content: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement('meta', { name: 'twitter:description', content: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('meta', { name: 'twitter:creator', content: '@mxstbr', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement('meta', { name: 'twitter:image', content: image, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement('meta', { name: 'twitter:url', content: url, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement('meta', {
        name: 'twitter:image:src',
        content: 'https://styled-components.com/static/meta.png',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement('link', {
        rel: 'canonical',
        href: 'https://www.styled-components.com' + properCanonical,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), children, _react2.default.createElement('link', { rel: 'shortcut icon', href: '/static/atom.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('link', { rel: 'icon', href: '/static/atom.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }));
    }
  }]);

  return SeoHead;
}(_react.Component);

exports.default = SeoHead;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/SeoHead.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/SeoHead.js"); } } })();

/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(32);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(33);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(10);

var _invariant = __webpack_require__(645);

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WithIsScrolled = function (_Component) {
  (0, _inherits3.default)(WithIsScrolled, _Component);

  function WithIsScrolled() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WithIsScrolled);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WithIsScrolled.__proto__ || (0, _getPrototypeOf2.default)(WithIsScrolled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isScrolled: false
    }, _this.onScroll = function () {
      var isScrolled = (window.pageYOffset || document.body.scrollTop) > 0;

      if (isScrolled !== _this.state.isScrolled) {
        _this.setState({ isScrolled: isScrolled });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(WithIsScrolled, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      (0, _invariant2.default)(typeof this.props.children === 'function', 'The children prop is expected to be a function');
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Learn more about how { passive: true } improves scrolling performance
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners
      window.addEventListener('scroll', this.onScroll, { passive: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, { passive: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state);
    }
  }]);

  return WithIsScrolled;
}(_react.Component);

exports.default = WithIsScrolled;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/WithIsScrolled.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/WithIsScrolled.js"); } } })();

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toArray2 = __webpack_require__(658);

var _toArray3 = _interopRequireDefault(_toArray2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _commonmark = __webpack_require__(606);

var _commonmarkReactRenderer = __webpack_require__(603);

var _commonmarkReactRenderer2 = _interopRequireDefault(_commonmarkReactRenderer);

var _stripIndent = __webpack_require__(686);

var _stripIndent2 = _interopRequireDefault(_stripIndent);

var _elementToText = __webpack_require__(595);

var _elementToText2 = _interopRequireDefault(_elementToText);

var _titleToDash = __webpack_require__(597);

var _titleToDash2 = _interopRequireDefault(_titleToDash);

var _Code2 = __webpack_require__(669);

var _Code3 = _interopRequireDefault(_Code2);

var _LiveEdit = __webpack_require__(590);

var _LiveEdit2 = _interopRequireDefault(_LiveEdit);

var _CodeBlock2 = __webpack_require__(670);

var _CodeBlock3 = _interopRequireDefault(_CodeBlock2);

var _Note = __webpack_require__(680);

var _Note2 = _interopRequireDefault(_Note);

var _Link2 = __webpack_require__(559);

var _Link3 = _interopRequireDefault(_Link2);

var _Layout = __webpack_require__(564);

var _Anchor = __webpack_require__(668);

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Label = __webpack_require__(672);

var _Label2 = _interopRequireDefault(_Label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/md.js';
/*
 * This is totally an adapted version of react-markings, but we need to be able
 * to render custom elements for each markdown feature to make contributions reasonably easy
 * See: https://github.com/Thinkmill/react-markings
 */

// Components to be used as renderers


var PLACEHOLDER = 'THIS_IS_A_BUG_PLEASE_OPEN_AN_ISSUE_IN_OUR_WEBSITE_REPO';

var isValid = function isValid(node) {
  var walker = node.walker();
  var event = void 0;

  while (event = walker.next()) {
    var _event = event,
        _node = _event.node,
        entering = _event.entering;

    if (!entering || !_node.literal || _node.literal.indexOf(PLACEHOLDER) === -1 || _node.type === 'text' && _node.parent.type === 'paragraph' && _node.literal === PLACEHOLDER) {
      continue;
    }

    return false;
  }

  return true;
};

var md = function md(strings) {
  for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  // Check if it's called as a normal function or as a tagged function
  var input = typeof strings === 'string' ? (0, _stripIndent2.default)(strings) : (0, _stripIndent2.default)(strings.join(PLACEHOLDER));

  var idPrefix = typeof strings === 'string' && typeof values[0] === 'string' ? values[0] + '_' : '';

  var startingLevel = typeof strings === 'string' ? values[1] : null;

  var parser = new _commonmark.Parser();
  var ast = parser.parse(input);

  if (!isValid(ast)) {
    throw new Error('Cannot interpolate React elements non-block positions');
  }

  var topLevelHeading = void 0;

  var renderer = new _commonmarkReactRenderer2.default({
    renderers: {
      Paragraph: function Paragraph(_ref) {
        var children = _ref.children;

        if (Array.isArray(children) && children.length === 1 && children[0] === PLACEHOLDER || children === PLACEHOLDER) {
          return values.shift();
        }

        return _react2.default.createElement('p', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          }
        }, children);
      },
      Code: function Code(_ref2) {
        var literal = _ref2.literal;

        return _react2.default.createElement(_Code3.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, literal);
      },
      CodeBlock: function CodeBlock(_ref3) {
        var language = _ref3.language,
            literal = _ref3.literal;

        if (language === 'react') {
          return _react2.default.createElement(_LiveEdit2.default, { code: literal, noInline: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            }
          });
        } else if (language === 'react-inline') {
          return _react2.default.createElement(_LiveEdit2.default, { code: literal, __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            }
          });
        } else if (language === 'sh') {
          return _react2.default.createElement(_CodeBlock3.default, { code: literal, language: 'bash', __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            }
          });
        }

        return _react2.default.createElement(_CodeBlock3.default, { code: literal, language: language, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          }
        });
      },
      BlockQuote: function BlockQuote(_ref4) {
        var children = _ref4.children;

        return _react2.default.createElement(_Note2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, children);
      },
      Link: function Link(_ref5) {
        var href = _ref5.href,
            children = _ref5.children;

        return _react2.default.createElement(_Link3.default, { href: href, inline: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, children);
      },
      Heading: function Heading(_ref6) {
        var level = _ref6.level,
            children = _ref6.children;

        if (startingLevel) {
          topLevelHeading = topLevelHeading || Math.max(level, 1);
          level += startingLevel - topLevelHeading;
        }

        if (level === 1) {
          return _react2.default.createElement(_Layout.Title, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            }
          }, children);
        }

        // The pipe indicates labels after the initial title

        var _elementToText$split = (0, _elementToText2.default)(children).split('|'),
            _elementToText$split2 = (0, _toArray3.default)(_elementToText$split),
            _ = _elementToText$split2[0],
            labels = _elementToText$split2.slice(1);

        var title = _react.Children.map(children, function (child) {
          if (typeof child === 'string') {
            var pipeIndex = child.indexOf('|');
            return pipeIndex > -1 ? child.slice(0, pipeIndex) : child;
          }

          return child;
        });

        var hash = '' + idPrefix + (0, _titleToDash2.default)(title);

        return _react2.default.createElement(_Anchor2.default, { id: hash, level: level, __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          }
        }, title, labels.length > 0 && _react2.default.createElement(_Label.LabelGroup, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          }
        }, labels.map(function (label, index) {
          return _react2.default.createElement(_Label2.default, { key: index, __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            }
          }, label.trim());
        })));
      }
    }
  });

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }, renderer.render(ast));
};

exports.default = md;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/md.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/components/md.js"); } } })();

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = __webpack_require__(657);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(542);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _md = __webpack_require__(683);

var _md2 = _interopRequireDefault(_md);

var _Layout = __webpack_require__(564);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/sections/homepage-getting-started.js';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n      # \u5F00\u59CB\n      ## \u5B89\u88C5\n\n      \u8981\u5B89\u88C5 styled-components \u8BF7\u8FD0\u884C `npm install --save styled-components`\u3002\n      \u8FD9\u5C31\u662F\u4F60\u6240\u9700\u8981\u505A\u7684\uFF0C\u4F60\u73B0\u5728\u53EF\u4EE5\u5728\u4F60\u7684\u5E94\u7528\u4E2D\u4F7F\u7528\u5B83\u4E86! (\u5BF9\u5934, \u4E0D\u9700\u8981\u6784\u5EFA\u6B65\u9AA4 \uD83D\uDC4C)\n\n      ## \u4F60\u7684\u7B2C\u4E00\u4E2A\u6837\u5F0F\u5316\u7EC4\u4EF6\n\n      \u5047\u8BBE\u60A8\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u4E14\u53EF\u91CD\u7528\u7684 `<Button />` \u7EC4\u4EF6\uFF0C\u4EE5\u5728\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5B83\u3002\n      \u5BF9\u4E8E\u8FD9\u4E2A\u91CD\u8981\u7684\u6309\u94AE\uFF0C\u5E94\u8BE5\u6709\u4E00\u4E2A\u6B63\u5E38\u7684\u7248\u672C\u548C\u4E00\u4E2A\u5927\u53F7\u7684 `primary` \u7248\u672C\u3002\n      \u8FD9\u5C31\u662F\u6E32\u67D3\u65F6\u7684\u6837\u5B50:(\u8FD9\u662F\u4E00\u4E2A\u6D3B\u751F\u751F\u7684\u4F8B\u5B50\uFF0C\u70B9\u51FB\u5B83\u4EEC\uFF01)\n\n      ', '\n\n      \u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u5BFC\u5165 styled-components \u5E76\u521B\u5EFA\u4E00\u4E2A `styled.button`:\n\n      ```jsx\n      import styled from \'styled-components\';\n\n      const Button = styled.button``;\n      ```\n\n      \u8FD9\u91CC\u7684 `Button` \u53D8\u91CF\u73B0\u5728\u662F\u4E00\u4E2A React \u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528\u5176\u4ED6\u4EFB\u4F55 React \u4E00\u6837\u4F7F\u7528\u5B83\u3002\n      \u8FD9\u79CD\u4E0D\u5BFB\u5E38\u7684\u53CD\u5F15\u53F7\u8BED\u6CD5\u662F\u4E00\u79CD\u65B0\u7684 JavaScript \u7279\u6027\uFF0C\u79F0\u4E3A\u6807\u8BB0\u6A21\u677F\u5B57\u7B26\u4E32\u3002\n      \u4F60\u77E5\u9053\u5982\u4F55\u7528\u62EC\u53F7\u6765\u8C03\u7528\u51FD\u6570\u5417?(`myFunc()`)\u5F88\u597D\uFF0C\u73B0\u5728\u4F60\u4E5F\u53EF\u4EE5\u8C03\u7528\u5E26\u6709\u53CD\u5F15\u53F7\u7684\u51FD\u6570\u3002\n      \u5B83\u662F\u5982\u4F55\u8FD0\u4F5C\u7684\uFF0C[\u89E3\u91CA\u5728\u8FD9\u91CC](/docs/advanced#tagged-template-literals) \u3002\n\n      \u5982\u679C\u4F60\u73B0\u5728\u6E32\u67D3\u6211\u4EEC\u53EF\u7231\u7684\u7EC4\u4EF6(\u53EA\u9700\u50CF\u5176\u4ED6\u7EC4\u4EF6: `<Button />`)\uFF0C\u8FD9\u5C31\u662F\u4F60\u5F97\u5230\u7684\uFF1A\n\n      ', '\n\n      \u8FD9\u6E32\u67D3\u4E86\u4E00\u4E2A\u6309\u94AE\uFF01\u8FD9\u4E0D\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u6309\u94AE\uFF0C\u5C3D\u7BA1\uD83D\uDE15\u6211\u4EEC\u53EF\u4EE5\u505A\u5F97\u66F4\u597D\uFF0C\u8BA9\u6211\u4EEC\u7ED9\u5B83\u4E00\u70B9\u6837\u5F0F\uFF0C\u53D1\u6398\u9690\u85CF\u5728\u5185\u90E8\u7684\u7F8E\u4E3D\uFF01\n\n      ```jsx\n      const Button = styled.button`\n        border-radius: 3px;\n        padding: 0.25em 1em;\n        margin: 0 1em;\n        background: transparent;\n        color: palevioletred;\n        border: 2px solid palevioletred;\n      `;\n      ```\n\n      ', '\n\n      \u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0Cstyled-components \u53EF\u4EE5\u8BA9\u4F60\u5728\u4F60\u7684 JavaScrip t\u4E2D\u7F16\u5199\u5B9E\u9645\u7684 CSS\u3002\n      \u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4F7F\u7528\u5168\u90E8\u60A8\u4F7F\u7528\u548C\u7231\u4F7F\u7528\u7684 CSS \u7684\u7279\u6027\uFF0C\u5305\u62EC\uFF08\u4F46\u4E0D\u9650\u4E8E\uFF09\u5A92\u4F53\u67E5\u8BE2\uFF0C\u6240\u6709\u4F2A\u9009\u62E9\u5668\uFF0C\u5D4C\u5957\u7B49\u3002\n      \u5B83\u8FD8\u5C06\u6837\u5F0F\u7ED1\u5B9A\u5230\u7EC4\u4EF6\uFF0C\u8FD9\u5177\u6709\u4E00\u4E9B\u6709\u8DA3\u7684\u5C5E\u6027\u3002\n      \uFF08\u4E86\u89E3\u66F4\u591A\u5173\u4E8E [styled-components \u80CC\u540E\u7684\u601D\u60F3](/docs/basics#motivation)\uFF09\n\n      \u6700\u540E\u4E00\u6B65\u662F\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u4E3B\u6309\u94AE\u7684\u6837\u5B50\u3002\n      \u4E3A\u4E86\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u8FD8\u4ECE `styled-components` \u5BFC\u5165 `{ css }`\uFF0C\n      \u5E76\u5C06\u4E00\u4E2A\u51FD\u6570\u63D2\u5165\u5230\u6211\u4EEC\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\uFF0C\u8BE5\u5B57\u7B26\u4E32\u88AB\u4F20\u5165\u6211\u4EEC\u7684\u7EC4\u4EF6\u7684 props\uFF1A\n\n      ```jsx\n      import styled, { css } from styled-components\n\n      const Button = styled.button`\n        border-radius: 3px;\n        padding: 0.25em 1em;\n        margin: 0 1em;\n        background: transparent;\n        color: palevioletred;\n        border: 2px solid palevioletred;\n\n        ${props => props.primary && css`\n          background: palevioletred;\n          color: white;\n        `}\n      `;\n      ```\n\n      \u4E0A\u9762\u4EE3\u7801\u8868\u8FBE\u7684\u662F\uFF0C\u5F53 `primary` \u5C5E\u6027\u88AB\u8BBE\u7F6E\u65F6\u6211\u4EEC\u60F3\u8981\u6DFB\u52A0\u66F4\u591A\u7684 `css` \u5230\u7EC4\u4EF6\u4E2D\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6539\u53D8\u80CC\u666F\u548C\u989C\u8272\u3002\n\n      \u5C31\u8FD9\u6837,\u6211\u4EEC\u5B8C\u6210\u4E86!\u770B\u4E00\u4E0B\u6211\u4EEC\u5B8C\u6210\u7684\u7EC4\u4EF6:\n\n      ```react\n      const Button = styled.button`\n        border-radius: 3px;\n        padding: 0.25em 1em;\n        margin: 0 1em;\n        background: transparent;\n        color: palevioletred;\n        border: 2px solid palevioletred;\n\n        ${props => props.primary && css`\n          background: palevioletred;\n          color: white;\n        `}\n      `;\n\n      render(\n        <div>\n          <Button>Normal Button</Button>\n          <Button primary>Primary Button</Button>\n        </div>\n      );\n      ```\n\n      \u4E0D\u9519\u54DF \uD83D\uDE0D \u8FD9\u4E5F\u662F\u4E00\u4E2A\u5B9E\u65F6\u66F4\u65B0\u7F16\u8F91\u5668\uFF0C\u6240\u4EE5\u8BF7\u4ED4\u7EC6\u7814\u7A76\u4E00\u4E0B\uFF0C\u4EE5\u4FBF\u4E86\u89E3\u4F7F\u7528\u6837\u5F0F\u5316\u7EC4\u4EF6\u7684\u611F\u89C9!\n\n      \u5B8C\u6210\u4E4B\u540E\uFF0C\u8BF7\u67E5\u770B[\u6587\u6863](/docs)\uFF0C\u7279\u522B\u662F[\u5165\u95E8](/docs/basics#getting-started) \u90E8\u5206\uFF01\u4EAB\u53D7\u5427\u2728\n    '], ['\n      # \u5F00\u59CB\n      ## \u5B89\u88C5\n\n      \u8981\u5B89\u88C5 styled-components \u8BF7\u8FD0\u884C \\`npm install --save styled-components\\`\u3002\n      \u8FD9\u5C31\u662F\u4F60\u6240\u9700\u8981\u505A\u7684\uFF0C\u4F60\u73B0\u5728\u53EF\u4EE5\u5728\u4F60\u7684\u5E94\u7528\u4E2D\u4F7F\u7528\u5B83\u4E86! (\u5BF9\u5934, \u4E0D\u9700\u8981\u6784\u5EFA\u6B65\u9AA4 \uD83D\uDC4C)\n\n      ## \u4F60\u7684\u7B2C\u4E00\u4E2A\u6837\u5F0F\u5316\u7EC4\u4EF6\n\n      \u5047\u8BBE\u60A8\u60F3\u8981\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u4E14\u53EF\u91CD\u7528\u7684 \\`<Button />\\` \u7EC4\u4EF6\uFF0C\u4EE5\u5728\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5B83\u3002\n      \u5BF9\u4E8E\u8FD9\u4E2A\u91CD\u8981\u7684\u6309\u94AE\uFF0C\u5E94\u8BE5\u6709\u4E00\u4E2A\u6B63\u5E38\u7684\u7248\u672C\u548C\u4E00\u4E2A\u5927\u53F7\u7684 \\`primary\\` \u7248\u672C\u3002\n      \u8FD9\u5C31\u662F\u6E32\u67D3\u65F6\u7684\u6837\u5B50:(\u8FD9\u662F\u4E00\u4E2A\u6D3B\u751F\u751F\u7684\u4F8B\u5B50\uFF0C\u70B9\u51FB\u5B83\u4EEC\uFF01)\n\n      ', '\n\n      \u9996\u5148\uFF0C\u8BA9\u6211\u4EEC\u5BFC\u5165 styled-components \u5E76\u521B\u5EFA\u4E00\u4E2A \\`styled.button\\`:\n\n      \\`\\`\\`jsx\n      import styled from \'styled-components\';\n\n      const Button = styled.button\\`\\`;\n      \\`\\`\\`\n\n      \u8FD9\u91CC\u7684 \\`Button\\` \u53D8\u91CF\u73B0\u5728\u662F\u4E00\u4E2A React \u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u50CF\u4F7F\u7528\u5176\u4ED6\u4EFB\u4F55 React \u4E00\u6837\u4F7F\u7528\u5B83\u3002\n      \u8FD9\u79CD\u4E0D\u5BFB\u5E38\u7684\u53CD\u5F15\u53F7\u8BED\u6CD5\u662F\u4E00\u79CD\u65B0\u7684 JavaScript \u7279\u6027\uFF0C\u79F0\u4E3A\u6807\u8BB0\u6A21\u677F\u5B57\u7B26\u4E32\u3002\n      \u4F60\u77E5\u9053\u5982\u4F55\u7528\u62EC\u53F7\u6765\u8C03\u7528\u51FD\u6570\u5417?(\\`myFunc()\\`)\u5F88\u597D\uFF0C\u73B0\u5728\u4F60\u4E5F\u53EF\u4EE5\u8C03\u7528\u5E26\u6709\u53CD\u5F15\u53F7\u7684\u51FD\u6570\u3002\n      \u5B83\u662F\u5982\u4F55\u8FD0\u4F5C\u7684\uFF0C[\u89E3\u91CA\u5728\u8FD9\u91CC](/docs/advanced#tagged-template-literals) \u3002\n\n      \u5982\u679C\u4F60\u73B0\u5728\u6E32\u67D3\u6211\u4EEC\u53EF\u7231\u7684\u7EC4\u4EF6(\u53EA\u9700\u50CF\u5176\u4ED6\u7EC4\u4EF6: \\`<Button />\\`)\uFF0C\u8FD9\u5C31\u662F\u4F60\u5F97\u5230\u7684\uFF1A\n\n      ', '\n\n      \u8FD9\u6E32\u67D3\u4E86\u4E00\u4E2A\u6309\u94AE\uFF01\u8FD9\u4E0D\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u6309\u94AE\uFF0C\u5C3D\u7BA1\uD83D\uDE15\u6211\u4EEC\u53EF\u4EE5\u505A\u5F97\u66F4\u597D\uFF0C\u8BA9\u6211\u4EEC\u7ED9\u5B83\u4E00\u70B9\u6837\u5F0F\uFF0C\u53D1\u6398\u9690\u85CF\u5728\u5185\u90E8\u7684\u7F8E\u4E3D\uFF01\n\n      \\`\\`\\`jsx\n      const Button = styled.button\\`\n        border-radius: 3px;\n        padding: 0.25em 1em;\n        margin: 0 1em;\n        background: transparent;\n        color: palevioletred;\n        border: 2px solid palevioletred;\n      \\`;\n      \\`\\`\\`\n\n      ', '\n\n      \u6B63\u5982\u4F60\u6240\u770B\u5230\u7684\uFF0Cstyled-components \u53EF\u4EE5\u8BA9\u4F60\u5728\u4F60\u7684 JavaScrip t\u4E2D\u7F16\u5199\u5B9E\u9645\u7684 CSS\u3002\n      \u8FD9\u610F\u5473\u7740\u4F60\u53EF\u4EE5\u4F7F\u7528\u5168\u90E8\u60A8\u4F7F\u7528\u548C\u7231\u4F7F\u7528\u7684 CSS \u7684\u7279\u6027\uFF0C\u5305\u62EC\uFF08\u4F46\u4E0D\u9650\u4E8E\uFF09\u5A92\u4F53\u67E5\u8BE2\uFF0C\u6240\u6709\u4F2A\u9009\u62E9\u5668\uFF0C\u5D4C\u5957\u7B49\u3002\n      \u5B83\u8FD8\u5C06\u6837\u5F0F\u7ED1\u5B9A\u5230\u7EC4\u4EF6\uFF0C\u8FD9\u5177\u6709\u4E00\u4E9B\u6709\u8DA3\u7684\u5C5E\u6027\u3002\n      \uFF08\u4E86\u89E3\u66F4\u591A\u5173\u4E8E [styled-components \u80CC\u540E\u7684\u601D\u60F3](/docs/basics#motivation)\uFF09\n\n      \u6700\u540E\u4E00\u6B65\u662F\u6211\u4EEC\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u4E3B\u6309\u94AE\u7684\u6837\u5B50\u3002\n      \u4E3A\u4E86\u505A\u5230\u8FD9\u4E00\u70B9\uFF0C\u6211\u4EEC\u8FD8\u4ECE \\`styled-components\\` \u5BFC\u5165 \\`{ css }\\`\uFF0C\n      \u5E76\u5C06\u4E00\u4E2A\u51FD\u6570\u63D2\u5165\u5230\u6211\u4EEC\u7684\u6A21\u677F\u5B57\u7B26\u4E32\u4E2D\uFF0C\u8BE5\u5B57\u7B26\u4E32\u88AB\u4F20\u5165\u6211\u4EEC\u7684\u7EC4\u4EF6\u7684 props\uFF1A\n\n      \\`\\`\\`jsx\n      import styled, { css } from styled-components\n\n      const Button = styled.button\\`\n        border-radius: 3px;\n        padding: 0.25em 1em;\n        margin: 0 1em;\n        background: transparent;\n        color: palevioletred;\n        border: 2px solid palevioletred;\n\n        \\${props => props.primary && css\\`\n          background: palevioletred;\n          color: white;\n        \\`\\}\n      \\`;\n      \\`\\`\\`\n\n      \u4E0A\u9762\u4EE3\u7801\u8868\u8FBE\u7684\u662F\uFF0C\u5F53 \\`primary\\` \u5C5E\u6027\u88AB\u8BBE\u7F6E\u65F6\u6211\u4EEC\u60F3\u8981\u6DFB\u52A0\u66F4\u591A\u7684 \\`css\\` \u5230\u7EC4\u4EF6\u4E2D\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6539\u53D8\u80CC\u666F\u548C\u989C\u8272\u3002\n\n      \u5C31\u8FD9\u6837,\u6211\u4EEC\u5B8C\u6210\u4E86!\u770B\u4E00\u4E0B\u6211\u4EEC\u5B8C\u6210\u7684\u7EC4\u4EF6:\n\n      \\`\\`\\`react\n      const Button = styled.button\\`\n        border-radius: 3px;\n        padding: 0.25em 1em;\n        margin: 0 1em;\n        background: transparent;\n        color: palevioletred;\n        border: 2px solid palevioletred;\n\n        \\${props => props.primary && css\\`\n          background: palevioletred;\n          color: white;\n        \\`\\}\n      \\`;\n\n      render(\n        <div>\n          <Button>Normal Button</Button>\n          <Button primary>Primary Button</Button>\n        </div>\n      );\n      \\`\\`\\`\n\n      \u4E0D\u9519\u54DF \uD83D\uDE0D \u8FD9\u4E5F\u662F\u4E00\u4E2A\u5B9E\u65F6\u66F4\u65B0\u7F16\u8F91\u5668\uFF0C\u6240\u4EE5\u8BF7\u4ED4\u7EC6\u7814\u7A76\u4E00\u4E0B\uFF0C\u4EE5\u4FBF\u4E86\u89E3\u4F7F\u7528\u6837\u5F0F\u5316\u7EC4\u4EF6\u7684\u611F\u89C9!\n\n      \u5B8C\u6210\u4E4B\u540E\uFF0C\u8BF7\u67E5\u770B[\u6587\u6863](/docs)\uFF0C\u7279\u522B\u662F[\u5165\u95E8](/docs/basics#getting-started) \u90E8\u5206\uFF01\u4EAB\u53D7\u5427\u2728\n    ']);

var AlignCenter = _styledComponents2.default.div.withConfig({
  displayName: 'homepage-getting-started__AlignCenter',
  componentId: 'ot4efi-0'
})(['text-align:center;']);

var Badge = _styledComponents2.default.img.withConfig({
  displayName: 'homepage-getting-started__Badge',
  componentId: 'ot4efi-1'
})(['margin:0 0.5em 3em;height:1.5em;']);

var ExampleButton = _styledComponents2.default.button.withConfig({
  displayName: 'homepage-getting-started__ExampleButton',
  componentId: 'ot4efi-2'
})(['border-radius:3px;padding:0.25em 1em;margin:0 1em;background:transparent;color:palevioletred;border:2px solid palevioletred;', ''], function (p) {
  return p.primary && (0, _styledComponents.css)(['background:palevioletred;color:white;']);
});

var SecondButton = _styledComponents2.default.button.withConfig({
  displayName: 'homepage-getting-started__SecondButton',
  componentId: 'ot4efi-3'
})(['border-radius:3px;padding:0.25em 1em;background:transparent;color:palevioletred;border:2px solid palevioletred;']);

var HomepageGettingStarted = function HomepageGettingStarted() {
  return _react2.default.createElement(_Layout.Content, { 'data-e2e-id': 'content', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(AlignCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, _react2.default.createElement('a', { href: 'https://github.com/styled-components/styled-components', __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, _react2.default.createElement(Badge, { src: '/proxy/stars.svg', alt: 'Stars on GitHub', __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  })), _react2.default.createElement('a', { href: 'https://www.npmjs.com/package/styled-components', __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, _react2.default.createElement(Badge, { src: '/proxy/npm-v.svg', alt: 'Current version', __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  })), _react2.default.createElement(Badge, { src: '/proxy/downloads.svg', alt: 'Monthly downloads', __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), _react2.default.createElement(Badge, { src: '/proxy/size.svg', alt: 'Gzipped size', __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement('a', { href: 'https://spectrum.chat/styled-components', __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(Badge, { alt: 'Join the community on Spectrum', src: 'https://withspectrum.github.io/badge/badge.svg', __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }))), (0, _md2.default)(_templateObject, _react2.default.createElement(AlignCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _react2.default.createElement(ExampleButton, { onClick: function onClick() {
      alert('You clicked the normal button!');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, 'Normal button'), _react2.default.createElement(ExampleButton, { primary: true, onClick: function onClick() {
      alert('You clicked the primary button!');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, 'Primary button')), _react2.default.createElement(AlignCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, _react2.default.createElement('button', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, 'I\'m a <Button />!')), _react2.default.createElement(AlignCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, _react2.default.createElement(SecondButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, 'I\'m a styled <Button />'))));
};

exports.default = HomepageGettingStarted;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/sections/homepage-getting-started.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/sections/homepage-getting-started.js"); } } })();

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetInput = undefined;

var _styledComponents = __webpack_require__(542);

var resetInput = exports.resetInput = (0, _styledComponents.css)(['background:none;outline:none;border:none;']);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/form.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/form.js"); } } })();

/***/ }),

/***/ 686:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(125);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/sindresorhus/strip-indent

var stripIndent = function stripIndent(str) {
  var match = str.match(/^[ \t]*(?=\S)/gm);

  if (!match) {
    return str;
  }

  // TODO: Use spread operator when targeting Node.js 6
  var indent = Math.min.apply(Math, (0, _toConsumableArray3.default)(match.map(function (x) {
    return x.length;
  })));
  var re = new RegExp('^[ \\t]{' + indent + '}', 'gm');

  return indent > 0 ? str.replace(re, '') : str;
};

exports.default = stripIndent;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/stripIndent.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/utils/stripIndent.js"); } } })();

/***/ }),

/***/ 698:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(599);


/***/ })

},[698]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2ZvbnRzLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVtLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29sb3JzLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaW5rLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvbWVkaWEuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi91dGlscy9zaXplcy5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXB0dXJlU2Nyb2xsLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaXZlRWRpdC5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L0xvZ28uanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXZMaW5rcy5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdlNlcGFyYXRvci5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NvY2lhbC5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL3V0aWxzL2VsZW1lbnRUb1RleHQuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi91dGlscy9wcmlzbVRlbXBsYXRlU3RyaW5nLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdGl0bGVUb0Rhc2guanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9wYWdlcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL3BhZ2VzL2RvY3MuanNvbj9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQW5jaG9yLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db2RlLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db2RlQmxvY2suanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbXBhbnlMb2dvcy5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGFiZWwuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9Nb2JpbGVOYXZiYXIuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXZCdXR0b24uanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9OYXZJY29ucy5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L05hdmJhci5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L1NpZGViYXIuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9TaWRlYmFyTWVudXMuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdi9pbmRleC5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90ZS5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VvSGVhZC5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvV2l0aElzU2Nyb2xsZWQuanM/YzZmMTY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21kLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZXBhZ2UtZ2V0dGluZy1zdGFydGVkLmpzP2M2ZjE2ODgiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybS5qcz9jNmYxNjg4Iiwid2VicGFjazovLy8uL3V0aWxzL3N0cmlwSW5kZW50LmpzP2M2ZjE2ODgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJvZHlGb250ID0gJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIidcbmV4cG9ydCBjb25zdCBoZWFkZXJGb250ID0gYFwiQXZlbmlyIE5leHRcIiwgJHtib2R5Rm9udH1gXG5leHBvcnQgY29uc3QgbW9ub3NwYWNlID0gJ1wiT3BlcmF0b3IgTW9ubyBTU20gQVwiLCBcIk9wZXJhdG9yIE1vbm8gU1NtIEJcIiwgbW9ub3NwYWNlJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9udHMuanMiLCJpbXBvcnQgcmVtIGZyb20gJ3BvbGlzaGVkL2xpYi9oZWxwZXJzL3JlbSdcblxuY29uc3QgX3JlbSA9IHNpemUgPT4gcmVtKHNpemUsICcxOHB4JylcblxuZXhwb3J0IGRlZmF1bHQgX3JlbVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvcmVtLmpzIiwiaW1wb3J0IGxpZ2h0ZW4gZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL2xpZ2h0ZW4nXG5pbXBvcnQgZGFya2VuIGZyb20gJ3BvbGlzaGVkL2xpYi9jb2xvci9kYXJrZW4nXG5pbXBvcnQgc2hhZGUgZnJvbSAncG9saXNoZWQvbGliL2NvbG9yL3NoYWRlJ1xuXG5leHBvcnQgY29uc3QgcGFsZUdyZXkgPSAnI2VmZWZlZidcbmV4cG9ydCBjb25zdCBsaWdodEdyZXkgPSAncmdiYSgyMCwgMjAsIDIwLCAwLjEpJ1xuZXhwb3J0IGNvbnN0IGRhcmtHcmV5ID0gZGFya2VuKDAuMDUsICcjMjgyYTM2JylcbmV4cG9ydCBjb25zdCBncmV5ID0gJyMyODJhMzYnXG5cbmV4cG9ydCBjb25zdCByZWQgPSAnI2ZmNTU1NSdcbmV4cG9ydCBjb25zdCB2aW9sZXRSZWQgPSAncmdiKDIxOSwgMTEyLCAxNDcpJ1xuZXhwb3J0IGNvbnN0IGxpZ2h0VmlvbGV0UmVkID0gbGlnaHRlbigwLjI3LCAncmdiKDIxOSwgMTEyLCAxNDcpJylcblxuZXhwb3J0IGNvbnN0IGdvbGQgPSBzaGFkZSgwLjksICdyZ2IoMjQzLCAxODIsIDk3KScpXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL2NvbG9ycy5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgVW5zdHlsZWRMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHJlbSBmcm9tICcuLi91dGlscy9yZW0nXG5pbXBvcnQgeyB2aW9sZXRSZWQsIGxpZ2h0R3JleSB9IGZyb20gJy4uL3V0aWxzL2NvbG9ycydcblxuZXhwb3J0IGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6ICR7cmVtKDIpfSAke3JlbSg4KX07XG4gIG1hcmdpbjogJHtyZW0oLTIpfSAke3JlbSgtOCl9O1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkezEwMDAgLyAxNn1lbSkge1xuICAgIGJvcmRlci1yYWRpdXM6ICR7cmVtKDMpfTtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHtsaWdodEdyZXl9O1xuICAgIH1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgSW5saW5lTGluayA9IHN0eWxlZC5hLmF0dHJzKHtcbiAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgcmVsOiAnbm9vcGVuZXInXG59KWBcbiAgY29sb3I6ICR7cCA9PiBwWydkYXRhLXdoaXRlJ10gPyAnd2hpdGUnIDogdmlvbGV0UmVkfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmBcblxuY29uc3QgTGluayA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGlubGluZSwgdW5zdHlsZWQsIHdoaXRlLCAuLi5yZXN0IH0pID0+IHtcbiAgbGV0IENoaWxkID0gU3R5bGVkTGlua1xuICBpZiAoaW5saW5lKSB7XG4gICAgQ2hpbGQgPSBJbmxpbmVMaW5rXG4gIH0gZWxzZSBpZiAodW5zdHlsZWQpIHtcbiAgICBDaGlsZCA9ICdhJ1xuICB9XG5cbiAgbGV0IGRhdGFBdHRyc1xuICBpZiAod2hpdGUpIHtcbiAgICBkYXRhQXR0cnMgPSB7ICdkYXRhLXdoaXRlJzogd2hpdGUgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8VW5zdHlsZWRMaW5rIHsuLi5yZXN0fT5cbiAgICAgIDxDaGlsZCBocmVmPXtyZXN0LmhyZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB7Li4uZGF0YUF0dHJzfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DaGlsZD5cbiAgICA8L1Vuc3R5bGVkTGluaz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xpbmsuanMiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IG1vYmlsZSA9IGlubmVyID0+IGNzc2BcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7MTAwMCAvIDE2fWVtKSB7XG4gICAgJHtpbm5lcn1cbiAgfVxuYFxuXG5leHBvcnQgY29uc3QgcGhvbmUgPSBpbm5lciA9PiBjc3NgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkezY1MCAvIDE2fWVtKSB7XG4gICAgJHtpbm5lcn1cbiAgfVxuYFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvbWVkaWEuanMiLCJleHBvcnQgY29uc3Qgc2lkZWJhcldpZHRoID0gMzAwXG5leHBvcnQgY29uc3QgbmF2YmFySGVpZ2h0ID0gNTBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3NpemVzLmpzIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCByZW0gZnJvbSAnLi4vdXRpbHMvcmVtJ1xuaW1wb3J0IHsgbW9iaWxlIH0gZnJvbSAnLi4vdXRpbHMvbWVkaWEnXG5pbXBvcnQgeyBzaWRlYmFyV2lkdGggfSBmcm9tICcuLi91dGlscy9zaXplcydcbmltcG9ydCB7IGJvZHlGb250LCBoZWFkZXJGb250IH0gZnJvbSAnLi4vdXRpbHMvZm9udHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nLWxlZnQ6ICR7cmVtKHNpZGViYXJXaWR0aCl9O1xuXG4gICR7bW9iaWxlKGNzc2BcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGApfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAke3JlbSgxMDI0KX07XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6ICR7cmVtKDkwKX0gJHtyZW0oNDApfSAke3JlbSgzMCl9ICR7cmVtKDQwKX07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAke2JvZHlGb250fTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2Utb3V0O1xuXG4gICR7bW9iaWxlKGNzc2BcbiAgICBwYWRkaW5nOiAke3JlbSg3MCl9ICR7cmVtKDIwKX0gJHtyZW0oMzApfSAke3JlbSgyMCl9O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3AgPT4gcC5tb3ZlUmlnaHQgPyByZW0oc2lkZWJhcldpZHRoKSA6IDB9KTtcbiAgYCl9XG5cbiAgJHtwID0+IHAuaGVybyAmJiBjc3NgXG4gICAgZm9udC1mYW1pbHk6ICR7aGVhZGVyRm9udH07XG4gICAgd2lkdGg6IDc1cmVtO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHJnYigyNDMsIDE4MiwgOTcpO1xuICBmb250LXNpemU6ICR7cmVtKDQyKX07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogJHtoZWFkZXJGb250fTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAke3JlbSgzMil9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogJHtoZWFkZXJGb250fTtcbmBcblxuZXhwb3J0IGNvbnN0IFN1YkhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogJHtyZW0oMzUpfSAwICR7cmVtKDIyKX0gMDtcbiAgZm9udC1zaXplOiAke3JlbSgyNCl9O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogJHtoZWFkZXJGb250fTtcbmBcblxuZXhwb3J0IGNvbnN0IFRlcnRpYXJ5SGVhZGVyID0gc3R5bGVkLmg0YFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAke3JlbSgzNSl9IDAgJHtyZW0oMjIpfSAwO1xuICBmb250LXNpemU6ICR7cmVtKDE4KX07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAke2hlYWRlckZvbnR9O1xuYFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuXG5sZXQgaXNNb2JpbGVcbmxldCBsYXN0V2hlZWxUaW1lc3RhbXBcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gIGlzTW9iaWxlID0gd2luZG93Lm1hdGNoTWVkaWEoYChtYXgtd2lkdGg6ICR7MTAwMCAvIDE2fWVtKWApLm1hdGNoZXNcblxuICBpZiAoIWlzTW9iaWxlKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgKHsgdGltZVN0YW1wIH0pID0+IHtcbiAgICAgIGxhc3RXaGVlbFRpbWVzdGFtcCA9IHRpbWVTdGFtcFxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgY2FwdHVyZVNjcm9sbCA9IENvbXBvbmVudCA9PiB7XG4gIGlmIChpc01vYmlsZSkge1xuICAgIHJldHVybiBDb21wb25lbnRcbiAgfVxuXG4gIGNsYXNzIENhcHR1cmVTY3JvbGwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIG9uU2Nyb2xsID0gZXZ0ID0+IHtcbiAgICAgIC8vIERvbid0IGFjY2VzcyB3aW5kb3cgd2hlZWwgbGlzdGVuZXJcbiAgICAgIGV2dC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuXG4gICAgICBjb25zdCB7IHRpbWVTdGFtcCwgZGVsdGFZIH0gPSBldnRcbiAgICAgIGNvbnN0IHsgb2Zmc2V0SGVpZ2h0LCBzY3JvbGxIZWlnaHQsIHNjcm9sbFRvcCB9ID0gdGhpcy5ub2RlXG5cbiAgICAgIC8vIElmIHRoZSB3aW5kb3cgaXMgYmVpbmcgc2Nyb2xsZWQsIGRvbid0IHNjcm9sbCB0aGUgY2FwdHVyZWQgc2Nyb2xsIGFyZWFcbiAgICAgIGlmICh0aW1lU3RhbXAgLSBsYXN0V2hlZWxUaW1lc3RhbXAgPD0gNDAwKSB7XG4gICAgICAgIGxhc3RXaGVlbFRpbWVzdGFtcCA9IHRpbWVTdGFtcFxuXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCBkZWx0YVkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBjb25zdCBtYXhTY3JvbGxUb3AgPSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRIZWlnaHRcblxuICAgICAgLy8gSGFzIHRoZSBzY3JvbGwgYXJlYSByZWFjaGVkIGl0J3MgYmVnaW5uaW5nL2VuZFxuICAgICAgY29uc3QgaGFzUmVhY2hlZFRvcCA9IGRlbHRhWSA8IDAgJiYgc2Nyb2xsVG9wID09PSAwXG4gICAgICBjb25zdCBoYXNSZWFjaGVkQm90dG9tID0gZGVsdGFZID4gMCAmJiBzY3JvbGxUb3AgPj0gbWF4U2Nyb2xsVG9wXG5cbiAgICAgIC8vIElzIHRoZSB0cmFqZWN0b3J5IG92ZXJzaG9vdGluZyB0aGUgc2Nyb2xsIGFyZWFcbiAgICAgIGNvbnN0IGlzUmVhY2hpbmdUb3AgPSBzY3JvbGxUb3AgKyBkZWx0YVkgPD0gMFxuICAgICAgY29uc3QgaXNSZWFjaGluZ0JvdHRvbSA9IHNjcm9sbFRvcCArIGRlbHRhWSA+PSBtYXhTY3JvbGxUb3BcblxuICAgICAgaWYgKFxuICAgICAgICBoYXNSZWFjaGVkVG9wIHx8XG4gICAgICAgIGhhc1JlYWNoZWRCb3R0b20gfHxcbiAgICAgICAgaXNSZWFjaGluZ1RvcCB8fFxuICAgICAgICBpc1JlYWNoaW5nQm90dG9tXG4gICAgICApIHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KClcbiAgICAgIH1cblxuICAgICAgLy8gSWYgd2UncmUgb3ZlcnNob290aW5nLCB3ZSBuZWVkIHRvIHNldCB0aGUgbWF4aW11bSBhdmFpbGFibGUgcG9zaXRpb25cbiAgICAgIGlmIChpc1JlYWNoaW5nVG9wIHx8IGlzUmVhY2hpbmdCb3R0b20pIHtcbiAgICAgICAgdGhpcy5ub2RlLnNjcm9sbFRvcCA9IGlzUmVhY2hpbmdUb3AgPyAwIDogbWF4U2Nyb2xsVG9wXG4gICAgICB9XG4gICAgfVxuXG4gICAgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgICBpc01vYmlsZSA9IHdpbmRvdy5tYXRjaE1lZGlhKGAobWF4LXdpZHRoOiAkezEwMDAgLyAxNn1lbSlgKS5tYXRjaGVzXG4gICAgICBpZihpc01vYmlsZSkge1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2hlZWwnLCB0aGlzLm9uU2Nyb2xsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vblNjcm9sbClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1maW5kLWRvbS1ub2RlXG4gICAgICB0aGlzLm5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzLnJlZilcblxuICAgICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vblNjcm9sbClcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgdGhpcy5vblNjcm9sbClcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uUmVzaXplKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICByZWY9e3ggPT4gdGhpcy5yZWYgPSB4fVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBDYXB0dXJlU2Nyb2xsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcHR1cmVTY3JvbGxcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ2FwdHVyZVNjcm9sbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzLCBrZXlmcmFtZXMsIHdpdGhUaGVtZSwgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHJlbSBmcm9tICcuLi91dGlscy9yZW0nXG5pbXBvcnQgeyBkYXJrR3JleSwgcmVkIH0gZnJvbSAnLi4vdXRpbHMvY29sb3JzJ1xuaW1wb3J0IHsgcGhvbmUgfSBmcm9tICcuLi91dGlscy9tZWRpYSdcbmltcG9ydCB7IGhlYWRlckZvbnQsIG1vbm9zcGFjZSB9IGZyb20gJy4uL3V0aWxzL2ZvbnRzJ1xuaW1wb3J0IGNhcHR1cmVTY3JvbGwgZnJvbSAnLi9DYXB0dXJlU2Nyb2xsJ1xuXG5pbXBvcnQgJy4uL3V0aWxzL3ByaXNtVGVtcGxhdGVTdHJpbmcnXG5cbmltcG9ydCB7XG4gIExpdmVQcm92aWRlcixcbiAgTGl2ZUVkaXRvcixcbiAgTGl2ZUVycm9yLFxuICBMaXZlUHJldmlld1xufSBmcm9tICdyZWFjdC1saXZlJ1xuXG5jb25zdCBTdHlsZWRQcm92aWRlciA9IHN0eWxlZChMaXZlUHJvdmlkZXIpYFxuICBib3gtc2hhZG93OiAke3JlbSgxKX0gJHtyZW0oMSl9ICR7cmVtKDIwKX0gcmdiYSgyMCwgMjAsIDIwLCAwLjI3KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAke3JlbSgzNSl9IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5gXG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgJHtwaG9uZShjc3NgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYCl9XG5gXG5cbmNvbnN0IGNvbHVtbk1peGluID0gY3NzYFxuICBmbGV4LWJhc2lzOiA1MCU7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICR7cGhvbmUoY3NzYFxuICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgYCl9XG5gXG5cbmV4cG9ydCBjb25zdCBlZGl0b3JNaXhpbiA9IGBcbiAgYmFja2dyb3VuZDogJHtkYXJrR3JleX07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LWZhbWlseTogJHttb25vc3BhY2V9O1xuICBmb250LXdlaWdodDogMzAwO1xuICBoZWlnaHQ6ICR7cmVtKDQwMCl9O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgY3Vyc29yOiB0ZXh0O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5gXG5cbmNvbnN0IFN0eWxlZEVkaXRvciA9IHN0eWxlZChMaXZlRWRpdG9yKWBcbiAgJHtlZGl0b3JNaXhpbn1cbiAgJHtjb2x1bW5NaXhpbn1cbmBcblxuY29uc3QgU3R5bGVkRWRpdG9yU2Nyb2xsQ2FwdHVyZWQgPSBjYXB0dXJlU2Nyb2xsKFN0eWxlZEVkaXRvcilcblxuY29uc3QgU3R5bGVkUHJldmlldyA9IHN0eWxlZChMaXZlUHJldmlldylgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJHtjb2x1bW5NaXhpbn1cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEVycm9yID0gc3R5bGVkKExpdmVFcnJvcilgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogJHtyZW0oOCl9O1xuICBiYWNrZ3JvdW5kOiAke3JlZH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGZvbnQtZmFtaWx5OiAke2hlYWRlckZvbnR9O1xuICB3aGl0ZS1zcGFjZTogcHJlO1xuYFxuXG5jb25zdCBMaXZlRWRpdCA9ICh7IG5vSW5saW5lLCBjb2RlLCBzY29wZSA9IHt9IH0pID0+IChcbiAgPFN0eWxlZFByb3ZpZGVyXG4gICAgY29kZT17Y29kZX1cbiAgICBub0lubGluZT17bm9JbmxpbmV9XG4gICAgbW91bnRTdHlsZXNoZWV0PXtmYWxzZX1cbiAgICBzY29wZT17e1xuICAgICAgLi4uc2NvcGUsXG4gICAgICBzdHlsZWQsXG4gICAgICBjc3MsXG4gICAgICBrZXlmcmFtZXMsXG4gICAgICB3aXRoVGhlbWUsXG4gICAgICBUaGVtZVByb3ZpZGVyXG4gICAgfX1cbiAgPlxuICAgIDxSb3c+XG4gICAgICA8U3R5bGVkRWRpdG9yU2Nyb2xsQ2FwdHVyZWQgLz5cbiAgICAgIDxTdHlsZWRQcmV2aWV3IC8+XG4gICAgPC9Sb3c+XG5cbiAgICA8U3R5bGVkRXJyb3IgLz5cbiAgPC9TdHlsZWRQcm92aWRlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGl2ZUVkaXRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTGl2ZUVkaXQuanMiLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3JlbSdcblxuY29uc3QgTG9nbyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuICAke3AgPT4gcC5jb21wYWN0ID8gY3NzYFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL2ljb24ucG5nKTtcbiAgICB3aWR0aDogJHtyZW0oMTAwKX07XG4gICAgaGVpZ2h0OiAke3JlbSgzMCl9O1xuICBgIDogY3NzYFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL25hdi1sb2dvLnBuZyk7XG4gICAgd2lkdGg6ICR7cmVtKDE2NCl9O1xuICAgIGhlaWdodDogJHtyZW0oNDApfTtcbiAgYH1cbmBcblxuZXhwb3J0IGRlZmF1bHQgTG9nb1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvTG9nby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCByZW0gZnJvbSAnLi4vLi4vdXRpbHMvcmVtJ1xuaW1wb3J0IHsgbmF2YmFySGVpZ2h0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2l6ZXMnXG5pbXBvcnQgTmF2U2VwYXJhdG9yIGZyb20gJy4vTmF2U2VwYXJhdG9yJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluaydcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5uYXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDAgMCBhdXRvO1xuYFxuXG5jb25zdCBOYXZMaW5rID0gc3R5bGVkKExpbmspLmF0dHJzKHtcbiAgdW5zdHlsZWQ6IHRydWVcbn0pYFxuICBmbGV4OiAwIDAgYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogJHtyZW0obmF2YmFySGVpZ2h0KX07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBsZXR0ZXItc3BhY2luZzogJHtyZW0oMC40KX07XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IE5hdkxpbmtzID0gKCkgPT5cbiAgPFdyYXBwZXI+XG4gICAgPE5hdkxpbmsgaHJlZj1cIi9kb2NzXCI+5paH5qGjPC9OYXZMaW5rPlxuICAgIDxOYXZTZXBhcmF0b3IgLz5cbiAgICA8TmF2TGluayBocmVmPVwiL2Vjb3N5c3RlbVwiPueUn+aAgTwvTmF2TGluaz5cbiAgICA8TmF2U2VwYXJhdG9yIC8+XG4gICAgPE5hdkxpbmsgaHJlZj1cIi9yZWxlYXNlc1wiPueJiOacrDwvTmF2TGluaz5cbiAgPC9XcmFwcGVyPlxuXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rc1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvTmF2TGlua3MuanMiLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3JlbSdcblxuY29uc3QgTmF2U2VwYXJhdG9yID0gc3R5bGVkLnNwYW5gXG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogJHtyZW0oNSl9O1xuICBoZWlnaHQ6ICR7cmVtKDUpfTtcbiAgbWFyZ2luOiAwICR7cmVtKDE1KX07XG5cbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XG4gIG9wYWNpdHk6IDAuMzU7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IE5hdlNlcGFyYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvTmF2U2VwYXJhdG9yLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9yZW0nXG5pbXBvcnQgeyBuYXZiYXJIZWlnaHQgfSBmcm9tICcuLi8uLi91dGlscy9zaXplcydcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxIDEgYXV0bztcbmBcblxuY29uc3QgU29jaWFsTGluayA9IHN0eWxlZChMaW5rKS5hdHRycyh7XG4gIHVuc3R5bGVkOiB0cnVlLFxufSlgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAke3JlbSgyMCl9O1xuICBsaW5lLWhlaWdodDogJHtyZW0obmF2YmFySGVpZ2h0KX07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycywgdHJhbnNmb3JtIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuXG4gIHN2ZyB7XG4gICAgcGF0aCB7XG4gICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFN2ZyA9IHN0eWxlZC5zdmdgXG4gIHdpZHRoOiAke3AgPT4gcmVtKE51bWJlcihwLndpZHRoKSl9O1xuICBoZWlnaHQ6ICR7cCA9PiByZW0oTnVtYmVyKHAuaGVpZ2h0KSl9O1xuYFxuXG5jb25zdCBHaXRodWIgPSAoKSA9PiAoXG4gIDxTdmcgd2lkdGg9XCIxN1wiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxNyAxN1wiPlxuICAgIDx0aXRsZT5naXRodWItbG9nbzwvdGl0bGU+XG4gICAgPHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTE1Ljg2IDQuMzRjLS43Ni0xLjMzNS0xLjc5LTIuMzkyLTMuMDkzLTMuMTdDMTEuNDYzLjM5IDEwLjA0MiAwIDguNSAwIDYuOTU4IDAgNS41MzYuMzkgNC4yMzMgMS4xNyAyLjkzIDEuOTQ3IDEuOSAzLjAwNCAxLjE0IDQuMzQuMzggNS42NzQgMCA3LjEzMiAwIDguNzEzYzAgMS44OTguNTQgMy42MDYgMS42MiA1LjEyMiAxLjA4MiAxLjUxNyAyLjQ4IDIuNTY2IDQuMTkgMy4xNDguMi4wMzguMzQ3LjAxLjQ0My0uMDguMDk2LS4wOS4xNDQtLjIwMy4xNDQtLjM0bC0uMDA2LS42MTJ2LTFsLS4yNS4wNWMtLjE2LjAzLS4zNi4wNS0uNjEuMDQtLjI0IDAtLjUtLjAzLS43Ny0uMDgtLjI2LS4wNS0uNTEtLjE2LS43NC0uMzQtLjIzLS4xOC0uMzktLjQxLS40OS0uN2wtLjExLS4yNmMtLjA3LS4xNy0uMTktLjM2LS4zNS0uNTgtLjE2LS4yMS0uMzItLjM1LS40OC0uNDNsLS4wOC0uMDVjLS4wNS0uMDQtLjA5LS4wOC0uMTQtLjEzMi0uMDQtLjA1My0uMDgtLjEwNi0uMS0uMTYtLjAyLS4wNTMgMC0uMDk3LjA2LS4xMy4wNi0uMDM1LjE3LS4wNTIuMzItLjA1MmwuMjIuMDM2Yy4xNS4wMy4zMy4xMi41NS4yNy4yMi4xNTQuNC4zNS41NC41OS4xNy4zMS4zNzUuNTUuNjE1LjcxLjI0LjE2NC40ODQuMjQ1LjcyNy4yNDVzLjQ1Ni0uMDIuNjMtLjA1NmMuMTgtLjAzNy4zNDYtLjA5NC41LS4xNy4wNjctLjUwNy4yNDgtLjg5Ni41NC0xLjE3LS40Mi0uMDQzLS43OTUtLjExMi0xLjEzLS4yMDMtLjM0LS4wOS0uNjg1LS4yNC0xLjA0LS40NC0uMzYtLjItLjY1Ny0uNDU1LS44OTQtLjc2LS4yMzQtLjMtLjQzLS43LS41OC0xLjE5LS4xNS0uNDktLjIyNS0xLjA2LS4yMjUtMS43IDAtLjkxNy4yOS0xLjY5NS44NzUtMi4zNC0uMjctLjY5LS4yNDQtMS40Ni4wOC0yLjMxMy4yMTQtLjA3LjUzLS4wMTUuOTUuMTU1LjQyLjE3LjczLjMxNC45MjYuNDM1LjE5NS4xMi4zNS4yMjUuNDcuMzA4LjY4NC0uMiAxLjM5NC0uMyAyLjEyNC0uM3MxLjQ0LjEgMi4xMjQuMjk3bC40Mi0uMjdjLjI4OC0uMTg0LjYyOC0uMzUgMS4wMi0uNS4zOS0uMTUuNjktLjE5NS44OTUtLjEyNi4zMzQuODU3LjM2NCAxLjYzLjA5IDIuMzE3LjU4NC42NDUuODc1IDEuNDIuODc1IDIuMzQgMCAuNjQtLjA3MiAxLjIxLS4yMjMgMS43MDctLjE1LjUtLjM0My44OTctLjU4MyAxLjE5Ni0uMjQuMjk4LS41NC41NS0uODk2Ljc1NC0uMzU1LjIwMi0uNzAyLjM1LTEuMDQuNDQtLjMzNC4wOS0uNzEyLjE2LTEuMTMyLjIwNS4zOC4zNC41Ny44NzUuNTcgMS42MXYyLjM5YzAgLjEzNi4wNDUuMjUuMTM3LjM0LjA5Ni4wOS4yNC4xMTguNDQuMDggMS43MS0uNTgyIDMuMTEtMS42MzIgNC4xOS0zLjE1IDEuMDYtMS41MjUgMS42LTMuMjM1IDEuNi01LjEzIDAtMS41OC0uMzgtMy4wNC0xLjE0LTQuMzd6XCIvPlxuICA8L1N2Zz5cbilcblxuLy8gY29uc3QgVHdpdHRlciA9ICgpID0+IChcbi8vICAgPFN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOVwiIGhlaWdodD1cIjE1XCIgdmlld0JveD1cIjAgMCAxOSAxNVwiIHhtbG5zWGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4vLyAgICAgPHRpdGxlPnR3aXR0ZXItbG9nbzwvdGl0bGU+XG4vLyAgICAgPHVzZSBmaWxsPVwiI0ZGRlwiIHhsaW5rSHJlZj1cIiNiXCIvPlxuLy8gICAgIDxkZWZzPlxuLy8gICAgICAgPHBhdGggaWQ9XCJiXCIgZD1cIk0xOC4yIDEuOGwtMiAuNmMuNi0uNSAxLjItMS4yIDEuNS0ybC0yLjQuOEMxNC43LjUgMTMuNyAwIDEyLjYgMCAxMC42IDAgOSAxLjcgOSAzLjh2MUM2IDQuNCAzIDMgMS4zLjggMSAxIC44IDEuOC44IDIuNGMwIDEuMy42IDIuNSAxLjYgMy0uNiAwLTEuMiAwLTEuNy0uMyAwIDIgMS4zIDMuNyAzIDRIMmMuNSAxLjYgMiAyLjcgMy41IDIuNy0xLjIgMS0zIDEuNi00LjYgMS42SDBjMS43IDEgMy42IDEuNyA1LjcgMS43IDcgMCAxMC43LTYgMTAuNy0xMXYtLjVjLjctLjUgMS4zLTEuMiAxLjgtMnpcIi8+XG4vLyAgICAgPC9kZWZzPlxuLy8gICA8L1N2Zz5cbi8vIClcblxuY29uc3QgTWVkaXVtID0gKCkgPT4gKFxuICA8U3ZnIHdpZHRoPVwiMTdcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTcgMTRcIj5cbiAgICA8dGl0bGU+bWVkaXVtPC90aXRsZT5cbiAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNNS4zIDBILjVsMS44IDIuNHY5TDAgMTMuN2g1LjNsLTItMi4zVjMuN0w3LjggMTQgMTIgMy43djguN2wtMS4zIDEuM0gxN2wtMS41LTEuM3YtMTFMMTcgMGgtNC41TDkgOC4yIDUuMiAwelwiLz5cbiAgPC9Tdmc+XG4pXG5cbmNvbnN0IFNwZWN0cnVtID0gKCkgPT4gKFxuICA8U3ZnIHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMTUgMTVcIj5cbiAgICA8dGl0bGU+c3BlY3RydW0tbG9nbzwvdGl0bGU+XG4gICAgPHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTAgNi41VjFjMC0uNi40LTEgMS0xIDkgLjMgMTMuNyA1IDE0IDE0IDAgLjYtLjQgMS0xIDFIOC41Yy0uNiAwLTEtLjQtMS0xLS4zLTQuNC0yLTYuMi02LjUtNi41LS42IDAtMS0uNC0xLTF6XCIvPlxuICA8L1N2Zz5cbilcblxuY29uc3QgU29jaWFsID0gcHJvcHMgPT4gKFxuICA8V3JhcHBlciB7Li4ucHJvcHN9PlxuICAgIDxTb2NpYWxMaW5rIGhyZWY9XCJodHRwczovL3NwZWN0cnVtLmNoYXQvc3R5bGVkLWNvbXBvbmVudHMvXCI+XG4gICAgICA8U3BlY3RydW0gLz5cbiAgICA8L1NvY2lhbExpbms+XG4gICAgey8qIDxTb2NpYWxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3NvbWVvbmVcIj5cbiAgICAgIDxUd2l0dGVyIC8+XG4gICAgPC9Tb2NpYWxMaW5rPiAqL31cbiAgICA8U29jaWFsTGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzXCI+XG4gICAgICA8R2l0aHViIC8+XG4gICAgPC9Tb2NpYWxMaW5rPlxuICAgIDxTb2NpYWxMaW5rIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vc3R5bGVkLWNvbXBvbmVudHNcIj5cbiAgICAgIDxNZWRpdW0gLz5cbiAgICA8L1NvY2lhbExpbms+XG4gIDwvV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi9Tb2NpYWwuanMiLCJpbXBvcnQgeyBpc1ZhbGlkRWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCB3aGl0ZXNwYWNlc1JlID0gL1xccysvZ1xuY29uc3QgX2Zvcm1hdCA9IChzdHIgPSAnJykgPT4gc3RyLnRyaW0oKS5yZXBsYWNlKHdoaXRlc3BhY2VzUmUsICcgJylcblxuY29uc3QgZWxlbWVudFRvVGV4dFJlYyA9IHggPT4ge1xuICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiB4Lm1hcChlbGVtZW50VG9UZXh0UmVjKS5qb2luKCcnKVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KHgpKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRUb1RleHRSZWMoeC5jaGlsZHJlbiB8fCB4LnByb3BzLmNoaWxkcmVuKVxuICB9IGVsc2UgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB4IHx8ICcnXG4gIH1cblxuICByZXR1cm4gJydcbn1cblxuY29uc3QgZWxlbWVudFRvVGV4dCA9IG5vZGUgPT4gX2Zvcm1hdChlbGVtZW50VG9UZXh0UmVjKG5vZGUpKVxuXG5leHBvcnQgZGVmYXVsdCBlbGVtZW50VG9UZXh0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9lbGVtZW50VG9UZXh0LmpzIiwiaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWNvcmUnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jbGlrZSdcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXAnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc3gnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jc3MnXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qc29uJ1xuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYmFzaCdcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmtkb3duJ1xuXG4vLyBOT1RFOiBUaGlzIGhpZ2hsaWdodHMgdGVtcGxhdGUtc3RyaW5ncyBhcyBzdHJpbmdzIG9mIENTU1xuUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnanN4JywgJ3RlbXBsYXRlLXN0cmluZycsIHtcbiAgJ3N0eWxlZC10ZW1wbGF0ZS1zdHJpbmcnOiB7XG4gICAgcGF0dGVybjogLyhzdHlsZWQoXFwuXFx3K3xcXChbXlxcKV0qXFwpKShcXC5cXHcrKFxcKFteXFwpXSpcXCkpKikqfGNzc3xpbmplY3RHbG9iYWx8a2V5ZnJhbWVzfFxcLmV4dGVuZClgKD86XFwkXFx7W159XStcXH18XFxcXFxcXFx8XFxcXD9bXlxcXFxdKSo/YC8sXG4gICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICBncmVlZHk6IHRydWUsXG4gICAgaW5zaWRlOiB7XG4gICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRcXHtbXn1dK1xcfS8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL15cXCRcXHt8XFx9JC8sXG4gICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdDogbGFuZ3VhZ2VzLmpzeFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IC9bXiQ7XSsvLFxuICAgICAgICBpbnNpZGU6IGxhbmd1YWdlcy5jc3MsXG4gICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtY3NzJ1xuICAgICAgfVxuICAgIH1cbiAgfVxufSlcblxuZXhwb3J0IHsgbGFuZ3VhZ2VzIH1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3ByaXNtVGVtcGxhdGVTdHJpbmcuanMiLCJpbXBvcnQgZWxlbWVudFRvVGV4dCBmcm9tICcuL2VsZW1lbnRUb1RleHQnXG5cbmNvbnN0IHRpdGxlVG9EYXNoID0gdGl0bGUgPT4gKFxuICBlbGVtZW50VG9UZXh0KHRpdGxlKVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnJlcGxhY2UoL1teXFx1NEUwMC1cXHU5RkE1YS16QS1aXFxkXFxzXS9nLCAnJylcbiAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHRpdGxlVG9EYXNoXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy90aXRsZVRvRGFzaC5qcyIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGl2ZVByb3ZpZGVyLCBMaXZlRWRpdG9yIH0gZnJvbSAncmVhY3QtbGl2ZSdcbmltcG9ydCBIZWFydEljb24gZnJvbSAncmVhY3Qtb2N0aWNvbnMtc3ZnL2Rpc3QvSGVhcnRJY29uJ1xuXG5pbXBvcnQgcmVtIGZyb20gJy4uL3V0aWxzL3JlbSdcbmltcG9ydCB7IG1vYmlsZSB9IGZyb20gJy4uL3V0aWxzL21lZGlhJ1xuaW1wb3J0IHsgdmlvbGV0UmVkLCBnb2xkLCBncmV5LCBwYWxlR3JleSwgcmVkIH0gZnJvbSAnLi4vdXRpbHMvY29sb3JzJ1xuaW1wb3J0IHsgZWRpdG9yTWl4aW4sIFN0eWxlZEVycm9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MaXZlRWRpdCdcbmltcG9ydCBMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBjYXB0dXJlU2Nyb2xsIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FwdHVyZVNjcm9sbCdcbmltcG9ydCBTZW9IZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VvSGVhZCdcbmltcG9ydCBIb21lcGFnZUdldHRpbmdTdGFydGVkIGZyb20gJy4uL3NlY3Rpb25zL2hvbWVwYWdlLWdldHRpbmctc3RhcnRlZCdcbmltcG9ydCBXaXRoSXNTY3JvbGxlZCBmcm9tICcuLi9jb21wb25lbnRzL1dpdGhJc1Njcm9sbGVkJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdidcblxuY29uc3QgVGFnbGluZSA9IHN0eWxlZC5oMWBcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG5gXG5cbmNvbnN0IFN1cHBvcnRpbmdUYWdsaW5lID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbmBcblxuY29uc3QgaGVhZGVyQ29kZSA9IChgXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYVxcYFxuICAvKiBUaGlzIHJlbmRlcnMgdGhlIGJ1dHRvbnMgYWJvdmUuLi4gRWRpdCBtZSEgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xuICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICB3aWR0aDogMTFyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuXG4gIC8qIFRoZSBHaXRIdWIgYnV0dG9uIGlzIGEgcHJpbWFyeSBidXR0b25cbiAgICogZWRpdCB0aGlzIHRvIHRhcmdldCBpdCBzcGVjaWZpY2FsbHkhICovXG4gIFxcJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ICYmIGNzc1xcYFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICBcXGB9XG5cXGBcbmApLnRyaW0oKVxuXG5pbXBvcnQgeyBMaXZlQ29udGV4dFR5cGVzIH0gZnJvbSAncmVhY3QtbGl2ZS9saWIvY29tcG9uZW50cy9MaXZlL0xpdmVQcm92aWRlcidcbmltcG9ydCB7XG4gIEJsb29tYmVyZ0xvZ28sXG4gIEF0bGFzc2lhbkxvZ28sXG4gIFJlZGRpdExvZ28sXG4gIFRhcmdldExvZ28sXG4gIEV1cm9WaXNpb25Mb2dvLFxuICBBcnRzeUxvZ28sXG4gIElkZWFMb2dvLFxuICBIdWZmcG9zdExvZ28sXG4gIENvaW5iYXNlTG9nbyxcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21wYW55TG9nb3MnXG5cbmNvbnN0IEhvbWVwYWdlTGl2ZVByZXZpZXcgPSAoeyBjbGFzc05hbWUsIC4uLnJlc3QgfSwgeyBsaXZlOiB7IGVsZW1lbnQ6IEJ1dHRvbiB9IH0pID0+IHtcbiAgY29uc3QgSW50ZXJuYWxCdXR0b24gPSBCdXR0b24ud2l0aENvbXBvbmVudChMaW5rKVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5yZXN0fVxuICAgICAgY2xhc3NOYW1lPXtgcmVhY3QtbGl2ZS1wcmV2aWV3ICR7Y2xhc3NOYW1lfWB9XG4gICAgPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICBwcmltYXJ5XG4gICAgICA+XG4gICAgICAgIEdpdEh1YlxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxJbnRlcm5hbEJ1dHRvbiBocmVmPVwiL2RvY3NcIiBwcmVmZXRjaD5cbiAgICAgICAg5paH5qGjXG4gICAgICA8L0ludGVybmFsQnV0dG9uPlxuICAgIDwvZGl2PlxuICApXG59XG5cbkhvbWVwYWdlTGl2ZVByZXZpZXcuY29udGV4dFR5cGVzID0gTGl2ZUNvbnRleHRUeXBlc1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMnJlbSAwO1xuXG4gIGgxLFxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gXG5cbmNvbnN0IExvZ28gPSBzdHlsZWQuaW1nLmF0dHJzKHtcbiAgYWx0OiAnc3R5bGVkLWNvbXBvbmVudHMgTG9nbycsXG4gIHNyYzogJy9zdGF0aWMvbG9nby5wbmcnXG59KWBcbiAgd2lkdGg6ICR7cmVtKDEyNSl9O1xuICBoZWlnaHQ6ICR7cmVtKDEyNSl9O1xuYFxuXG5jb25zdCBVc2Vyc1dyYXBwZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbmBcblxuY29uc3QgVXNlcnNIZWFkaW5nID0gc3R5bGVkLnBgXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAyLjVyZW0gMCAwLjVyZW07XG4gIG9wYWNpdHk6IDAuODtcbmBcblxuY29uc3QgQ29tcGFueUxvZ28gPSBzdHlsZWQuc3BhbmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6ICR7cCA9PiBwLmhlaWdodCB8fCAnMnJlbSd9O1xuICBtYXJnaW46IDAuNXJlbTtcbiAgYm90dG9tOiAke3AgPT4gcC5ib3R0b20gfHwgMH07XG4gIG9wYWNpdHk6IDAuODtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMjVtcyBlYXNlLWluLW91dDtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2LmF0dHJzKHtcbiAgY2xhc3NOYW1lOiAnaGVyby1oZWFkZXInIC8vIGZvciBpbnRlZ3JhdGlvbiB0ZXN0c1xufSlgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjBkZWcsICR7dmlvbGV0UmVkfSwgJHtnb2xkfSk7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE3KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG5gXG5cbmNvbnN0IEVkaXRvckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNoYWRvdzogJHtyZW0oMSl9ICR7cmVtKDEpfSAke3JlbSgyMCl9IHJnYmEoMjAsIDIwLCAyMCwgMC4yNyk7XG4gIG1hcmdpbjogJHtyZW0oMzUpfSAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNHJlbTtcbmBcblxuY29uc3QgRWRpdG9yID0gY2FwdHVyZVNjcm9sbChzdHlsZWQoTGl2ZUVkaXRvcilgXG4gICR7ZWRpdG9yTWl4aW59XG4gIGhlaWdodDogMjRyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG4gIHdpZHRoOiAxMDAlO1xuYClcblxuY29uc3QgTGlua3MgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46ICR7cmVtKDM2KX0gMDtcbmBcblxuY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICR7Z3JleX07XG4gIGJhY2tncm91bmQ6ICR7cGFsZUdyZXl9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tdG9wOiAke3JlbSg1MCl9O1xuYFxuXG5jb25zdCBIZWFydCA9IHN0eWxlZChIZWFydEljb24pLmF0dHJzKHtcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbFxufSlgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6ICR7cmVtKDE3KX07XG4gIGNvbG9yOiAke3JlZH1cbmBcblxuY29uc3QgRm9vdGVyTGluayA9IHN0eWxlZChMaW5rKWBcbiAgY29sb3I6ICR7Z3JleX07XG5gXG5cbmNvbnN0IEZvb3RlckNvbnRlbnQgPSBzdHlsZWQoQ29udGVudClgXG4gIHBhZGRpbmc6ICR7cmVtKDMwKX0gJHtyZW0oNDApfSAke3JlbSgzMCl9ICR7cmVtKDQwKX07XG5cbiAgJHttb2JpbGUoY3NzYFxuICBwYWRkaW5nOiAke3JlbSgzMCl9ICR7cmVtKDIwKX0gJHtyZW0oMzApfSAke3JlbSgyMCl9O1xuYCl9XG5gXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzTW9iaWxlTmF2Rm9sZGVkOiB0cnVlLFxuICB9XG5cbiAgdG9nZ2xlTW9iaWxlTmF2ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc01vYmlsZU5hdkZvbGRlZDogIXByZXZTdGF0ZS5pc01vYmlsZU5hdkZvbGRlZCxcbiAgICB9KSlcbiAgfVxuXG4gIG9uUm91dGVDaGFuZ2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc01vYmlsZU5hdkZvbGRlZDogdHJ1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNNb2JpbGVOYXZGb2xkZWQgfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlb0hlYWQgdGl0bGU9XCJzdHlsZWQtY29tcG9uZW50c1wiPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwibm9vZHBcIiAvPlxuICAgICAgICA8L1Nlb0hlYWQ+XG5cbiAgICAgICAgPFdpdGhJc1Njcm9sbGVkPlxuICAgICAgICAgIHsoeyBpc1Njcm9sbGVkIH0pID0+IChcbiAgICAgICAgICAgIDxOYXZcbiAgICAgICAgICAgICAgc2hvd1NpZGVOYXY9e2ZhbHNlfVxuICAgICAgICAgICAgICB0cmFuc3BhcmVudD17IWlzU2Nyb2xsZWR9XG4gICAgICAgICAgICAgIGlzTW9iaWxlTmF2Rm9sZGVkPXtpc01vYmlsZU5hdkZvbGRlZH1cbiAgICAgICAgICAgICAgb25Nb2JpbGVOYXZUb2dnbGU9e3RoaXMudG9nZ2xlTW9iaWxlTmF2fVxuICAgICAgICAgICAgICBvblJvdXRlQ2hhbmdlPXt0aGlzLm9uUm91dGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvV2l0aElzU2Nyb2xsZWQ+XG5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAgPENvbnRlbnQgaGVybz5cbiAgICAgICAgICAgIDxMaXZlUHJvdmlkZXJcbiAgICAgICAgICAgICAgY29kZT17aGVhZGVyQ29kZX1cbiAgICAgICAgICAgICAgbW91bnRTdHlsZXNoZWV0PXtmYWxzZX1cbiAgICAgICAgICAgICAgc2NvcGU9e3sgc3R5bGVkLCBjc3MsIHJlbSwgTGluayB9fT5cblxuICAgICAgICAgICAgICA8TG9nbyAvPlxuXG4gICAgICAgICAgICAgIDxUaXRsZT5cbiAgICAgICAgICAgICAgICA8VGFnbGluZT7nu4Tku7bml7bku6PnmoTop4bop4nln7rlhYPjgII8L1RhZ2xpbmU+XG4gICAgICAgICAgICAgICAgPFN1cHBvcnRpbmdUYWdsaW5lPlxuICAgICAgICAgICAgICAgICAg5L2/55So5pyA5aW955qEIEVTNiDlkowgQ1NTIOadpei9u+advuagt+W8j+WMluS9oOeahOW6lOeUqOeoi+W6jyDwn5KFXG4gICAgICAgICAgICAgICAgPC9TdXBwb3J0aW5nVGFnbGluZT5cbiAgICAgICAgICAgICAgPC9UaXRsZT5cblxuICAgICAgICAgICAgICA8TGlua3M+XG4gICAgICAgICAgICAgICAgPEhvbWVwYWdlTGl2ZVByZXZpZXcgLz5cbiAgICAgICAgICAgICAgPC9MaW5rcz5cblxuICAgICAgICAgICAgICA8RWRpdG9yQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxFZGl0b3IgLz5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRXJyb3IgLz5cbiAgICAgICAgICAgICAgPC9FZGl0b3JDb250YWluZXI+XG4gICAgICAgICAgICA8L0xpdmVQcm92aWRlcj5cblxuICAgICAgICAgICAgPFVzZXJzSGVhZGluZz7osIHlnKjkvb/nlKg8L1VzZXJzSGVhZGluZz5cblxuICAgICAgICAgICAgPFVzZXJzV3JhcHBlcj5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvIGJvdHRvbT1cIi0wLjJyZW1cIiBoZWlnaHQ9XCIxLjc1cmVtXCI+XG4gICAgICAgICAgICAgICAgPEJsb29tYmVyZ0xvZ28gLz5cbiAgICAgICAgICAgICAgPC9Db21wYW55TG9nbz5cblxuICAgICAgICAgICAgICA8Q29tcGFueUxvZ28gaGVpZ2h0PVwiMS43NXJlbVwiPlxuICAgICAgICAgICAgICAgIDxBdGxhc3NpYW5Mb2dvIC8+XG4gICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvPlxuICAgICAgICAgICAgICAgIDxSZWRkaXRMb2dvIC8+XG4gICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvPlxuICAgICAgICAgICAgICAgIDxUYXJnZXRMb2dvIC8+XG4gICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvIGJvdHRvbT1cIjAuNjI1cmVtXCIgaGVpZ2h0PVwiM3JlbVwiPlxuICAgICAgICAgICAgICAgIDxFdXJvVmlzaW9uTG9nbyAvPlxuICAgICAgICAgICAgICA8L0NvbXBhbnlMb2dvPlxuXG4gICAgICAgICAgICAgIDxDb21wYW55TG9nbyBib3R0b209XCIwLjE2cmVtXCIgaGVpZ2h0PVwiMi4yNXJlbVwiIHNyYz1cIi9zdGF0aWMvYXJ0c3ktbG9nby5zdmdcIj5cbiAgICAgICAgICAgICAgICA8QXJ0c3lMb2dvIC8+XG4gICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvIGJvdHRvbT1cIi0wLjE1cmVtXCIgaGVpZ2h0PVwiMS41cmVtXCI+XG4gICAgICAgICAgICAgICAgPElkZWFMb2dvIC8+XG4gICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvIHNyYz1cIi9zdGF0aWMvaHVmZnBvc3QtbG9nby5zdmdcIj5cbiAgICAgICAgICAgICAgICA8SHVmZnBvc3RMb2dvIC8+XG4gICAgICAgICAgICAgIDwvQ29tcGFueUxvZ28+XG5cbiAgICAgICAgICAgICAgPENvbXBhbnlMb2dvIGJvdHRvbT1cIjAuMjVyZW1cIiBoZWlnaHQ9XCIycmVtXCIgc3JjPVwiL3N0YXRpYy9jb2luYmFzZS1sb2dvLnN2Z1wiPlxuICAgICAgICAgICAgICAgIDxDb2luYmFzZUxvZ28gLz5cbiAgICAgICAgICAgICAgPC9Db21wYW55TG9nbz5cblxuICAgICAgICAgICAgPC9Vc2Vyc1dyYXBwZXI+XG4gICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICA8L1dyYXBwZXI+XG5cbiAgICAgICAgPEhvbWVwYWdlR2V0dGluZ1N0YXJ0ZWQgLz5cblxuICAgICAgICA8Rm9vdGVyPlxuICAgICAgICAgIDxGb290ZXJDb250ZW50IGhlcm8+IHsnSG9zdGVkIG9uIOKWsiBaRUlUIE5vdyd9XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICB7J01hZGUgd2l0aCAnfVxuICAgICAgICAgICAgPEhlYXJ0IC8+XG4gICAgICAgICAgICB7JyBieSAnfVxuICAgICAgICAgICAgPEZvb3RlckxpbmsgaW5saW5lIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2dsZW5tYWRkZXJuXCI+QGdsZW5tYWRkZXJuPC9Gb290ZXJMaW5rPlxuICAgICAgICAgICAgeycsICd9XG4gICAgICAgICAgICA8Rm9vdGVyTGluayBpbmxpbmUgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vbXhzdGJyXCI+QG14c3RicjwvRm9vdGVyTGluaz5cbiAgICAgICAgICAgIHsnICYgJ31cbiAgICAgICAgICAgIDxGb290ZXJMaW5rIGlubGluZSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9fcGhpbHBsXCI+QF9waGlscGzigKw8L0Zvb3Rlckxpbms+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHsn5pys56uZ6K+R6IeqICd9XG4gICAgICAgICAgICA8Rm9vdGVyTGluayBpbmxpbmUgaHJlZj1cImh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9cIj5zdHlsZWQtY29tcG9uZW50cyDoi7Hmloc8L0Zvb3Rlckxpbms+XG4gICAgICAgICAgICB7JyDlpoLmnInnlpHpl67vvIzor7forr/pl67ljp/nq5nvvIEnfVxuICAgICAgICAgIDwvRm9vdGVyQ29udGVudD5cbiAgICAgICAgPC9Gb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnZXNcIjogW1xuXHRcdHtcblx0XHRcdFwidGl0bGVcIjogXCLln7rnoYBcIixcblx0XHRcdFwicGF0aG5hbWVcIjogXCJiYXNpY3NcIixcblx0XHRcdFwic2VjdGlvbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWKqOaculwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5a6J6KOFXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLlhbbku5blronoo4XmlrnmoYhcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWFpemXqFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5Lyg6YCS5bGe5oCnXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLliqjmgIHmoLflvI9cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuagt+W8j+WMluS7u+S9lee7hOS7tlwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5omp5bGV5qC35byPXCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLpmYTliqDpop3lpJbnmoTlsZ7mgKdcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWKqOeUu1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiUmVhY3QgTmF0aXZlXCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJ0aXRsZVwiOiBcIumrmOe6p1wiLFxuXHRcdFx0XCJwYXRobmFtZVwiOiBcImFkdmFuY2VkXCIsXG5cdFx0XHRcInNlY3Rpb25zXCI6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLkuLvpophcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlJlZnNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWuieWFqFwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi546w5pyJIENTU1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5aqS5L2T5qih5p2/XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLmoIfnrb7mqKHmnb/lrZfnrKbkuLJcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuacjeWKoeerr+a4suafk1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi5byV55So5YW25LuW57uE5Lu2XCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJ0aXRsZVwiOiBcIkFQSSDlj4LogINcIixcblx0XHRcdFwicGF0aG5hbWVcIjogXCJhcGlcIixcblx0XHRcdFwic2VjdGlvbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlByaW1hcnlcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkhlbHBlcnNcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuaUr+aMgeeahCBDU1NcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkZsb3dcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIlR5cGVTY3JpcHRcIlxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRcInRpdGxlXCI6IFwi5bel5YW3XCIsXG5cdFx0XHRcInBhdGhuYW1lXCI6IFwidG9vbGluZ1wiLFxuXHRcdFx0XCJzZWN0aW9uc1wiOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiQmFiZWwg5o+S5Lu2XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJUZXN0IFV0aWxpdGllc1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwiU3R5bGVsaW50XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCJTdHlsZWQgVGhlbWluZ1wiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcInRpdGxlXCI6IFwi6K+t5rOV6auY5LquXCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0XCJ0aXRsZVwiOiBcIuW4uOingemXrumimFwiLFxuXHRcdFx0XCJwYXRobmFtZVwiOiBcImZhcXNcIixcblx0XHRcdFwic2VjdGlvbnNcIjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWPr+S7peW1jOWll+inhOWImeWQlz9cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuS9leaXtuW6lOivpeS9v+eUqCBzdHlsZWQ/XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLlj6/ku6Xkvb/nlKggQ1NTIOahhuaetuWQlz9cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWmguS9leiDveS7peabtOmrmOeahOeJueW8guaAp+imhuebluagt+W8jz9cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIuWmguS9leimhuebluWGheiBlOagt+W8jz9cIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJ0aXRsZVwiOiBcIkRPTSDoioLngrnkuLrku4DkuYjmnInkuKTkuKogY2xhc3M/XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLkvZXml7bkvb/nlKggYXR0cnM/XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLlj6/ku6XlvJXnlKjlhbbku5bnu4Tku7blkJc/XCJcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFwidGl0bGVcIjogXCLlk6rkupvmtY/op4jlmajmlK/mjIE/XCJcblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblx0XVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BhZ2VzL2RvY3MuanNvblxuLy8gbW9kdWxlIGlkID0gNjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgcmVtIGZyb20gJy4uL3V0aWxzL3JlbSdcblxuaW1wb3J0IExpbmtJY29uIGZyb20gJ3JlYWN0LW9jdGljb25zLXN2Zy9kaXN0L0xpbmtJY29uJ1xuaW1wb3J0IHsgSGVhZGVyLCBTdWJIZWFkZXIsIFRlcnRpYXJ5SGVhZGVyIH0gZnJvbSAnLi9MYXlvdXQnXG5pbXBvcnQgeyBtb2JpbGUgfSBmcm9tICcuLi91dGlscy9tZWRpYSdcblxuY29uc3QgSW52aXNpYmxlQW5jaG9yID0gc3R5bGVkLmRpdi5hdHRycyh7XG4gICdhcmlhLWhpZGRlbic6IHRydWVcbn0pYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGhlaWdodDogMDtcblxuICB0b3A6ICR7cmVtKC03MCl9O1xuXG4gICR7bW9iaWxlKGNzc2BcbiAgICB0b3A6ICR7cmVtKC05MCl9O1xuICBgKX1cbmBcblxuY29uc3QgQW5jaG9yID0gc3R5bGVkLmFgXG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG5gXG5cbmNvbnN0IEFuY2hvckljb24gPSBzdHlsZWQoTGlua0ljb24pLmF0dHJzKHtcbiAgd2lkdGg6IG51bGwsXG4gIGhlaWdodDogbnVsbFxufSlgXG4gIHdpZHRoOiAke3JlbSgyMCl9O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6ICR7cmVtKC01KX07XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG5gXG5cbmNvbnN0IEFuY2hvckhlYWRlciA9IHN0eWxlZChIZWFkZXIpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiAke3JlbSgtMzApfTtcbiAgcGFkZGluZy1sZWZ0OiAke3JlbSgzMCl9O1xuXG4gICR7bW9iaWxlKGNzc2BcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICR7QW5jaG9yfSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICBgKX1cblxuICAmOmhvdmVyICR7QW5jaG9yfSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5gXG5cbmNvbnN0IEFuY2hvclN1YkhlYWRlciA9IEFuY2hvckhlYWRlci53aXRoQ29tcG9uZW50KFN1YkhlYWRlcilcbmNvbnN0IEFuY2hvclRlcnRpYXJ5SGVhZGVyID0gQW5jaG9ySGVhZGVyLndpdGhDb21wb25lbnQoVGVydGlhcnlIZWFkZXIpXG5cbmNvbnN0IExpbmsgPSAoeyBjaGlsZHJlbiwgbGV2ZWwsIGlkIH0pID0+IHtcbiAgbGV0IENoaWxkID0gQW5jaG9ySGVhZGVyXG5cbiAgc3dpdGNoKGxldmVsKSB7XG4gICAgY2FzZSAzOlxuICAgICAgQ2hpbGQgPSBBbmNob3JTdWJIZWFkZXJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSA0OlxuICAgICAgQ2hpbGQgPSBBbmNob3JUZXJ0aWFyeUhlYWRlclxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoaWxkPlxuICAgICAgPEludmlzaWJsZUFuY2hvciBpZD17aWR9IC8+XG5cbiAgICAgIDxBbmNob3IgaHJlZj17YCMke2lkfWB9PlxuICAgICAgICA8QW5jaG9ySWNvbiAvPlxuICAgICAgPC9BbmNob3I+XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NoaWxkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQW5jaG9yLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IG1vbm9zcGFjZSB9IGZyb20gJy4uL3V0aWxzL2ZvbnRzJ1xuXG5jb25zdCBDb2RlID0gc3R5bGVkLnNwYW5gXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6ICR7bW9ub3NwYWNlfTtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmc6IDAgMC4wNWVtIDAuMWVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM2NkIyQTc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RDY7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IENvZGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29kZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgcmVtIGZyb20gJy4uL3V0aWxzL3JlbSdcblxuaW1wb3J0ICcuLi91dGlscy9wcmlzbVRlbXBsYXRlU3RyaW5nJ1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSAncmVhY3QtbGl2ZSdcbmltcG9ydCB7IGRhcmtHcmV5IH0gZnJvbSAnLi4vdXRpbHMvY29sb3JzJ1xuaW1wb3J0IHsgbW9ub3NwYWNlIH0gZnJvbSAnLi4vdXRpbHMvZm9udHMnXG5cbmNvbnN0IENvZGVCbG9jayA9IHN0eWxlZChwID0+IHtcbiAgY29uc3QgbGFuZ3VhZ2UgPSAocC5sYW5ndWFnZSB8fCAnY2xpa2UnKS50b0xvd2VyQ2FzZSgpLnRyaW0oKVxuICByZXR1cm4gPEVkaXRvciB7Li4ucH0gbGFuZ3VhZ2U9e2xhbmd1YWdlfSAvPlxufSkuYXR0cnMoe1xuICBjb250ZW50RWRpdGFibGU6IGZhbHNlXG59KWBcbiAgYmFja2dyb3VuZDogJHtkYXJrR3JleX07XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LWZhbWlseTogJHttb25vc3BhY2V9O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG5cbiAgYm9yZGVyLXJhZGl1czogJHtyZW0oMyl9O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDIwcHggcmdiYSgyMCwgMjAsIDIwLCAwLjI3KTtcbiAgbWFyZ2luOiAke3JlbSgzNSl9IDA7XG5cbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBDb2RlQmxvY2tcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29kZUJsb2NrLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgU3ZnID0gc3R5bGVkLnN2Z2BcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIGhlaWdodDogaW5oZXJpdDtcbmBcblxuZXhwb3J0IGNvbnN0IEJsb29tYmVyZ0xvZ28gPSAoKSA9PiAoXG4gIDxTdmcgdmlld0JveD1cIjExNSAtOS42IDI1Ny44IDQ3LjZcIj5cbiAgICA8cGF0aCBkPVwiTTExNS05LjZoMTguOWMzLjYgMCA2LjMuOSA4LjMgMi40IDIuMiAxLjggMy40IDQuNCAzLjQgNy42IDAgMy43LTEuNSA2LTQuNSA3LjRWOGM0IDEuMyA2LjMgNC45IDYuMyA5LjIgMCA0LjEtMS42IDcuMy00LjIgOS4zLTIuMiAxLjYtNSAyLjMtOC44IDIuM0gxMTVWLTkuNnptMTcgMTVjMiAwIDMuNS0xLjEgMy41LTMuNCAwLTIuMi0xLjUtMy4zLTMuNi0zLjNoLTYuNXY2LjZoNi42em0uOSAxNC45YzIuMyAwIDQtMS40IDQtMy45IDAtMi43LTEuOC0zLjktNC0zLjloLTcuNHY3LjloNy40em0xNi4yLTI5LjloOS45djM4LjVoLTkuOVYtOS42ek0xNjEgMTUuMkMxNjEgNi41IDE2Ni42LjcgMTc1LjMuN3MxNC4yIDUuOSAxNC4yIDE0LjVjMCA4LjctNS41IDE0LjUtMTQuMiAxNC41UzE2MSAyMy45IDE2MSAxNS4yem0xOC42IDBjMC00LjgtMS41LTcuOC00LjUtNy44cy00LjQgMy00LjQgNy44IDEuNCA3LjkgNC40IDcuOWMzLS4xIDQuNS0zLjEgNC41LTcuOXptMTEgMGMwLTguNyA1LjYtMTQuNSAxNC4zLTE0LjVTMjE5IDYuNSAyMTkgMTUuMnMtNS41IDE0LjUtMTQuMiAxNC41Yy04LjYgMC0xNC4yLTUuOC0xNC4yLTE0LjV6bTE4LjYgMGMwLTQuOC0xLjUtNy44LTQuNS03LjhzLTQuNCAzLTQuNCA3LjggMS40IDcuOSA0LjQgNy45YzMtLjEgNC41LTMuMSA0LjUtNy45ek0yMjEgMS40aDkuMnY0LjFoLjJjMS44LTMuMiA0LjMtNC45IDguMy00LjkgMy41IDAgNi4xIDEuNyA3LjQgNC43aC4yYzIuMi0zLjYgNS4xLTQuNyA4LjUtNC43IDYuNCAwIDkuMSA0LjcgOS4xIDExdjE3LjJoLTkuNlYxMy4zYzAtMi44LS45LTQuNi0zLjMtNC42cy0zLjYgMi4yLTMuNiA1LjJ2MTQuOWgtOS42VjEzLjNjMC0yLjgtLjktNC42LTMuMy00LjZzLTMuNiAyLjItMy42IDUuMnYxNC45SDIyMVYxLjR6bTU1IDIzLjhoLS4xdjMuNmgtOS4yVi05LjZoOS42VjQuMmguMmMxLjgtMi40IDQuMy0zLjcgNy44LTMuNyA2LjkgMCAxMC45IDYuMiAxMC45IDE0LjUgMCA5LjMtNC4zIDE0LjctMTEuNSAxNC43LTMgMC02LjEtMS40LTcuNy00LjV6bTkuMy0xMC4zYzAtNC40LTEuNi03LjMtNC41LTcuMy0zIDAtNC44IDIuOS00LjggNy4zczEuOSA3LjMgNC44IDcuMyA0LjUtMi44IDQuNS03LjN6bTExIC4yYzAtOC42IDUuNy0xNC41IDEzLjktMTQuNSA0LjEgMCA3LjIgMS4zIDkuNiAzLjYgMy4yIDMuMSA0LjYgNy45IDQuNSAxMy41aC0xOC40Yy40IDMuNCAyIDUuMiA0LjkgNS4yIDEuNyAwIDMuMi0uOCAzLjgtMi42aDkuM2MtMS42IDYuMy02LjUgOS40LTEzLjQgOS40LTguNS0uMS0xNC4yLTUuOS0xNC4yLTE0LjZ6bTkuNi0yLjloOC44Yy0uMi0zLjMtMi01LTQuMy01LTIuNy0uMS00LjIgMS44LTQuNSA1em0yOS4zLTYuMWguMmMyLTMuOCA0LjYtNS4zIDcuOS01LjMuOCAwIDEuMy4xIDEuNi4zdjguNGgtLjJjLTUuNy0xLTkgMS43LTkgNy45djExLjVIMzI2VjEuNGg5LjJ2NC43em0xMC43IDIyLjhoOS4zYy40IDEuMiAxLjYgMi4zIDMuOSAyLjMgMy4xIDAgNC4yLTEuOSA0LjItNC44di0yaC0uMmMtMS41IDEuOC0zLjYgMy4xLTYuNiAzLjEtNS45IDAtMTEuMS00LjQtMTEuMS0xMyAwLTcuOSA0LjItMTQgMTAuNi0xNCAzLjcgMCA1LjkgMS41IDcuNCAzLjhoLjJ2LTNoOS4ydjIzLjhjMCA0LjQtMS41IDcuOC0zLjggOS44LTIuNCAyLjEtNS44IDMtOS43IDMtNy40LjEtMTIuNS0yLjktMTMuNC05em0xNy44LTE0LjhjMC0zLjQtMS42LTYuMi00LjQtNi4yLTIuNyAwLTQuNCAyLjQtNC40IDYuMiAwIDMuNyAxLjcgNi4zIDQuNCA2LjNzNC40LTIuNyA0LjQtNi4zelwiLz5cbiAgPC9Tdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBBdGxhc3NpYW5Mb2dvID0gKCkgPT4gKFxuICA8U3ZnIHZpZXdCb3g9XCIwIDAgMTE0IDI0XCI+XG4gICAgPGcgZmlsbD1cIiM1QkE1Q0VcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMjcuMi4yN2MtLjEtLjE2LS4zLS4yNS0uNDctLjI1LS4xIDAtLjIuMDItLjI4LjA3LTMuNTIgMS45Ny03LjYgMy0xMS44IDMtNC4yIDAtOC4yNi0xLjAzLTExLjc4LTNDMi44LjAzIDIuNyAwIDIuNiAwYy0uMiAwLS4zNy4xLS40OC4yNC0uMTcuMjMtLjE4LjYuMS44NEM0IDIuNDUgNS45MyAzLjUgOCA0LjIyYzIuMTQuNzUgNC4zOCAxLjEzIDYuNjYgMS4xMyAyLjI4IDAgNC41Mi0uMzggNi42Ni0xLjEzIDIuMDctLjcyIDQtMS43NyA1Ljc4LTMuMTIuMjgtLjIzLjI3LS42LjEtLjgzTTE0LjY2IDcuMzRjLjkgMCAxLjQyLS4wNiAxLjYtLjA2LjIzIDAgLjQ0LjIuNDQuNDUgMCAuMDgtLjAyLjEzLS4wMy4xOC0uMTIuMzMtLjY3IDEuNS0xLjY4IDIuNTItLjEyLjEyLS4yNS4xNC0uMzQuMTQtLjEgMC0uMjItLjAyLS4zMy0uMTQtMS0xLTEuNTYtMi4yLTEuNjctMi41LS4wMi0uMDYtLjA0LS4xLS4wNC0uMiAwLS4yNS4yLS40NC40My0uNDQuMiAwIC43LjA2IDEuNi4wNlwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjMuMTYgNS45Yy0uMDgtLjA3LS4xOC0uMS0uMjgtLjEtLjA2IDAtLjEyIDAtLjE3LjAzLTEgLjQtMi4wNC43LTMgLjkzLS4xOC4wNC0uMzQuMi0uNC4zNy0uNyAxLjkzLTIuNDUgMy43Ny00LjMgNS43LS4wNy4wOC0uMTcuMTctLjM0LjE3cy0uMjctLjEtLjM1LS4xN2MtMS44My0xLjkzLTMuNi0zLjc2LTQuMjgtNS43LS4wNi0uMTctLjIyLS4zMi0uNC0uMzctLjk1LS4yMi0yLS41NC0zLS45NGwtLjE4LS4wM2MtLjEgMC0uMi4wMi0uMjguMS0uMTMuMS0uMi4yNi0uMi40Mi4xNyAxLjYuOCAzLjE4IDEuOSA0LjgzIDEuMDYgMS41NSAyLjQzIDIuOTggMy43NiA0LjM3IDIuNDQgMi41NiA0Ljc0IDQuOTcgNC45NSA3Ljc3LjAyLjI0LjIyLjQ0LjQ3LjQ0aDIuODdjLjE0IDAgLjI2LS4wNS4zNS0uMTUuMS0uMS4xMy0uMjQuMTMtLjM3LS4xLTEuODctLjc4LTMuNzQtMi4xLTUuNzMtLjI4LS40LS41Ny0uODItLjg4LTEuMjItLjEzLS4xNi0uMDgtLjM2LjAyLS40NmwuMy0uM2MxLjMtMS40IDIuNjgtMi44MiAzLjczLTQuMzcgMS4xMi0xLjY1IDEuNzQtMy4yIDEuOS00LjgyIDAtLjE2LS4wNi0uMzQtLjItLjQ0TTExLjU4IDE3LjdjLS4wNy0uMDctLjE3LS4xNS0uMzMtLjE1LS4yMiAwLS4zNC4xNS0uNC4yMy0xLjIgMS44OC0xLjgyIDMuNjYtMS45IDUuNDUtLjAyLjEzLjAzLjI2LjEyLjM2LjEuMDguMjIuMTQuMzQuMTRoMi44OGMuMjUgMCAuNDUtLjIuNDctLjQ1LjA2LS44Ny4zMi0xLjc0LjgtMi42NC4xNy0uMzIuMDQtLjYtLjA2LS43NC0uNDgtLjYzLTEuMDYtMS4zLTEuOTItMi4yMlwiLz5cbiAgICA8L2c+XG4gICAgPGcgZmlsbD1cIiMyNzQ5NzBcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMzQuMDcgNi40NmMtLjA2LS4yLS4yMy0uMzItLjQyLS4zMkgyOS42Yy0uMiAwLS4zNy4xMy0uNDMuMzJsLTUuMTMgMTYuN2MtLjA0LjE0LS4wMi4yOC4wNi40LjEuMS4yMi4xOC4zNi4xOGgyLjhjLjIgMCAuMzYtLjEzLjQtLjMybDMuNTUtMTIuMjhzLjEtLjMuNDItLjNjLjMzIDAgLjQuMy40LjNsMS42NCA1LjgzaC0yLjJjLS4yIDAtLjM2LjE0LS40Mi4zM2wtLjYzIDIuM2MtLjAzLjE0IDAgLjMuMDguNC4wOC4xLjIuMTcuMzUuMTdoMy43NWwxIDMuMjZjLjA1LjE4LjIuMy40LjNoMi44Yy4xNCAwIC4yOC0uMDYuMzYtLjE3LjA4LS4xMi4xLS4yNi4wNi0uNGwtNS4xMy0xNi43TTQ2LjI3IDIxLjE3Yy0uMDItLjEzLS4xLS4yNC0uMi0uMy0uMS0uMDgtLjIyLS4xLS4zNC0uMDctLjQ1LjEyLS45LjE4LTEuMjIuMTgtLjYzIDAtLjktLjI4LS45LS45MnYtNi40aDIuNWMuMjMgMCAuNDItLjIuNDItLjQ1di0xLjk4YzAtLjI1LS4yLS40NS0uNDMtLjQ1aC0yLjVWNy43YzAtLjE0LS4wNy0uMjYtLjE2LS4zNS0uMS0uMDgtLjIzLS4xMi0uMzUtLjFsLTIuNTguMzZjLS4yMi4wNS0uMzguMjMtLjM4LjQ2djIuN2gtMS40Yy0uMjQgMC0uNDQuMi0uNDQuNDZ2MmMwIC4yNC4yLjQ0LjQ0LjQ0aDEuNHY2LjhjMCAyLjM1IDEuMiAzLjU0IDMuNTYgMy41NC42NyAwIDEuODItLjE2IDIuNTYtLjQzLjItLjA3LjMyLS4yNy4zLS40OGwtLjMtMS45M001MS4wNCA1LjgyaC0yLjU4Yy0uMjQgMC0uNDMuMi0uNDMuNDVWMjMuM2MwIC4yNC4yLjQ0LjQzLjQ0aDIuNThjLjI0IDAgLjQzLS4yLjQzLS40NVY2LjI2YzAtLjI1LS4yLS40NS0uNDMtLjQ1TTU5LjM4IDE5djEuNTRjLS40Mi4yNC0xLjIuNTctMi4xMy41Ny0uOCAwLTEuMDQtLjI0LTEuMDQtMS4wNyAwLS44LjE2LTEuMDQgMS4xLTEuMDRoMi4wOHptLTEuNzItOC41Yy0xLjMgMC0yLjkuMjItNC4wNS41NS0uMi4wNi0uMzMuMjgtLjMuNWwuMyAxLjkyYy4wMi4xMi4xLjIzLjE4LjMuMS4wNi4yMi4xLjM0LjA3IDEuMDctLjIyIDIuMTctLjMzIDMuMS0uMzMgMS44NyAwIDIuMTYuNCAyLjE2IDEuN3YxLjEzaC0yLjc2Yy0yLjYzIDAtMy43NiAxLjEtMy43NiAzLjczIDAgMi41IDEuMjMgMy45NCAzLjQgMy45NCAxLjIzIDAgMi40OC0uMzUgMy41Mi0xbC4xLjRjLjA2LjIuMjQuMzQuNDMuMzRoMi4xYy4yMyAwIC40My0uMi40My0uNDV2LTguMDVjMC0zLjQ1LTEuNC00Ljc0LTUuMTctNC43NHpNNjkuMjggMTUuN2MtMS42LS40LTEuNi0uNDMtMS42LTEuMzMgMC0uNi4wNi0uOSAxLjM4LS45LjkgMCAyLjIzLjE3IDMuMDguMzIuMTIgMCAuMjQtLjAyLjM0LS4xLjEtLjA2LjE1LS4xNy4xNy0uM2wuMjQtMmMuMDItLjI0LS4xMi0uNDUtLjM0LS41LTEtLjI0LTIuMzYtLjQtMy41LS40LTMuOTYgMC00Ljc3IDEuNTUtNC43NyAzLjg1IDAgMi41My40NCAzLjM4IDMuNDggNC4xNCAyIC40OCAyIC44NSAyIDEuNDYgMCAuOC0uMDcgMS4wNy0xLjM4IDEuMDctMS4wNSAwLTIuMjctLjE3LTMuMzQtLjQ2LS4xMi0uMDMtLjI0IDAtLjM1LjA1LS4xLjA3LS4xNi4xOC0uMTguM2wtLjM0IDEuOWMtLjA0LjIzLjA4LjQ1LjMuNTIgMS4xNi40IDIuODQuNjYgNC4wNy42NiAzLjg0IDAgNC42Mi0xLjY1IDQuNjItNC4xMiAwLTIuNzMtLjQ3LTMuMjQtMy45LTQuMTdNNzkuMjMgMTUuN2MtMS42LS40LTEuNi0uNDMtMS42LTEuMzMgMC0uNi4wNi0uOSAxLjM3LS45LjkgMCAyLjI0LjE3IDMuMS4zMi4xIDAgLjIzLS4wMi4zMi0uMS4xLS4wNi4xNi0uMTcuMTgtLjNsLjI0LTJjLjAzLS4yNC0uMTItLjQ1LS4zMy0uNS0uOTgtLjI0LTIuMzYtLjQtMy41LS40LTMuOTUgMC00Ljc3IDEuNTUtNC43NyAzLjg1IDAgMi41My40NiAzLjM4IDMuNSA0LjE0IDIgLjQ4IDIgLjg1IDIgMS40NiAwIC44LS4wNyAxLjA3LTEuMzggMS4wNy0xLjA1IDAtMi4yNy0uMTctMy4zNC0uNDYtLjEtLjAzLS4yNCAwLS4zNC4wNS0uMS4wNy0uMTcuMTgtLjIuM2wtLjM0IDEuOWMtLjAzLjIzLjEuNDUuMy41MiAxLjE3LjQgMi44NS42NiA0LjA4LjY2IDMuODMgMCA0LjYyLTEuNjUgNC42Mi00LjEyIDAtMi43My0uNDctMy4yNC0zLjktNC4xN004Ny41NiA1LjgyaC0yLjU4Yy0uMjQgMC0uNDMuMi0uNDMuNDRWOC42YzAgLjI1LjIuNDUuNDMuNDVoMi41OGMuMjQgMCAuNDMtLjIuNDMtLjQ1VjYuMjZjMC0uMjQtLjItLjQ0LS40NC0uNDRNODcuNTYgMTAuNzdoLTIuNThjLS4yNCAwLS40My4yLS40My40NVYyMy4zYzAgLjI0LjIuNDQuNDMuNDRoMi41OGMuMjQgMCAuNDMtLjIuNDMtLjQ1VjExLjJjMC0uMjUtLjItLjQ1LS40NC0uNDVNOTUuOTcgMTl2MS41NGMtLjQzLjI0LTEuMi41Ny0yLjEzLjU3LS44IDAtMS4wNS0uMjQtMS4wNS0xLjA3IDAtLjguMTQtMS4wNCAxLjEtMS4wNGgyLjA3em0tMS43My04LjVjLTEuMyAwLTIuOS4yMi00LjA0LjU1LS4yLjA2LS4zNS4yOC0uMy41bC4zIDEuOTJjMCAuMTIuMDcuMjMuMTcuMy4xLjA2LjIyLjEuMzMuMDcgMS4wNy0uMjIgMi4xOC0uMzMgMy4xMi0uMzMgMS44NSAwIDIuMTUuNCAyLjE1IDEuN3YxLjEzSDkzLjJjLTIuNjMgMC0zLjc1IDEuMS0zLjc1IDMuNzMgMCAyLjUgMS4yMyAzLjk0IDMuMzggMy45NCAxLjI1IDAgMi41LS4zNSAzLjU0LTFsLjEuNGMuMDYuMi4yMy4zNC40My4zNGgyLjA4Yy4yNCAwIC40NC0uMi40NC0uNDV2LTguMDVjMC0zLjQ1LTEuNC00Ljc0LTUuMTgtNC43NHpNMTA4Ljk0IDEwLjVjLTEuMzcgMC0zLjIyLjUtNC44IDEuMjVsLS4xOC0uNjZjLS4wNi0uMi0uMjMtLjMzLS40Mi0uMzNoLTEuOWMtLjI1IDAtLjQ0LjItLjQ0LjQ1VjIzLjNjMCAuMjQuMi40NC40My40NGgyLjU4Yy4yNSAwIC40NC0uMi40NC0uNDV2LTguMzdjLjkzLS40OCAyLjIzLS45OCAzLS45OC42IDAgLjguMjIuOC44djguNTRjMCAuMjQuMi40NC40NS40NGgyLjU2Yy4yNCAwIC40NC0uMi40NC0uNDV2LTguODdjMC0yLjYtMS0zLjkyLTIuOTYtMy45MlwiLz5cbiAgICA8L2c+XG4gIDwvU3ZnPlxuKVxuXG5leHBvcnQgY29uc3QgUmVkZGl0TG9nbyA9ICgpID0+IChcbiAgPFN2ZyB2aWV3Qm94PVwiMCAwIDgyIDMwXCI+XG4gICAgPGRlZnM+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJhXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMCA3OTJoNjEyVjBIMHY3OTJ6XCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICA8L2RlZnM+XG4gICAgPGcgY2xpcFBhdGg9XCJ1cmwoI2EpXCIgdHJhbnNmb3JtPVwibWF0cml4KC45ODc4NCAwIDAgLS45ODc4NCAtMjczLjQgMzk5LjAxMilcIj5cbiAgICAgIDxwYXRoIGQ9XCJNMjgwLjcgMzkyLjQyYzAgLjQ0LjEyLjguNCAxLjA1LjI2LjI2LjU4LjQuOTYuNC40IDAgLjcyLS4xMyAxLS40LjI3LS4yNS40LS42LjQtMS4wNXYtMS40NWguMDdjLjQyLjc0Ljk3IDEuNCAxLjY2IDIgLjY4LjYgMS40LjkgMi4xNS45NC40MiAwIC44LS4xMyAxLjEyLS40LjMyLS4yOC41LS42My41LTEuMDQgMC0uNDgtLjE4LS44My0uNS0xLjA2LS4zNS0uMjMtLjgzLS40Mi0xLjQ3LS42LS42My0uMTUtMS4wNS0uMy0xLjI0LS40LTEuNTMtLjgyLTIuMy0yLjI0LTIuMy00LjI1di04LjI4YzAtLjQ2LS4xMi0uOC0uMzgtMS4wNy0uMjYtLjI1LS41OC0uMzgtLjk2LS4zOC0uNCAwLS43NC4xNC0xIC40LS4zLjI3LS40My42NC0uNDMgMS4xMnYxNC40OHpcIi8+XG4gICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2VXaWR0aD1cIi43NlwiIGQ9XCJNMjgwLjcgMzkyLjQyYzAgLjQ0LjEyLjguNCAxLjA1LjI2LjI2LjU4LjQuOTYuNC40IDAgLjcyLS4xMyAxLS40LjI3LS4yNS40LS42LjQtMS4wNXYtMS40NWguMDdjLjQyLjc0Ljk3IDEuNCAxLjY2IDIgLjY4LjYgMS40LjkgMi4xNS45NC40MiAwIC44LS4xMyAxLjEyLS40LjMyLS4yOC41LS42My41LTEuMDQgMC0uNDgtLjE4LS44My0uNS0xLjA2LS4zNS0uMjMtLjgzLS40Mi0xLjQ3LS42LS42My0uMTUtMS4wNS0uMy0xLjI0LS40LTEuNTMtLjgyLTIuMy0yLjI0LTIuMy00LjI1di04LjI4YzAtLjQ2LS4xMi0uOC0uMzgtMS4wNy0uMjYtLjI1LS41OC0uMzgtLjk2LS4zOC0uNCAwLS43NC4xNC0xIC40LS4zLjI3LS40My42NC0uNDMgMS4xMnYxNC40OHpcIi8+XG4gICAgICA8cGF0aCBkPVwiTTI5Mi41IDM4Ni4yaDkuNGMtLjAyIDEuNTgtLjQzIDIuODQtMS4yNCAzLjgtLjguOTUtMS45IDEuNDQtMy4zIDEuNDctMS40MyAwLTIuNTgtLjQ2LTMuNDUtMS4zOC0uODYtLjkzLTEuMzMtMi4yMy0xLjQtMy45bS0yLjgzLS44OGMuMDYgMS40Ni40IDIuODQgMSA0LjE1LjYgMS4zIDEuNDcgMi4zNyAyLjYgMy4yIDEuMTIuOCAyLjQ0IDEuMjIgMy45NiAxLjI0IDEuNDcgMCAyLjc4LS40IDMuOTMtMS4xOCAxLjE0LS44IDIuMDItMS44NSAyLjY0LTMuMTYuNjMtMS4zLjk0LTIuNjguOTQtNC4xIDAtLjkzLS41My0xLjQtMS41Ny0xLjRIMjkyLjVjLjAzLTEuMTIuMjctMi4wOC43NC0yLjg3LjQ2LS44IDEuMS0xLjM3IDEuODctMS43Ni44LS40IDEuNjUtLjU4IDIuNi0uNTggMS42NyAwIDMuMi42IDQuNiAxLjc3LjQ4LjM1LjgzLjUyIDEuMDYuNTIuMyAwIC41NS0uMTIuNzMtLjM1LjE3LS4yMy4yNS0uNTIuMjUtLjg1IDAtLjM1LS4xNC0uNy0uNC0xLjAzLS42NC0uNjYtMS41My0xLjI1LTIuNjgtMS43NS0xLjE2LS41LTIuNC0uNzUtMy43My0uNzUtMS40IDAtMi42LjI2LTMuNjMuOC0xIC41LTEuODQgMS4yLTIuNDcgMi4wOC0uNjMuODctMS4wOCAxLjgtMS4zNyAyLjgtLjMgMS0uNDQgMi4wMy0uNDYgMy4wNmwuMDUuMWMwIC4wNC4wMi4wNS4wMi4wNlwiLz5cbiAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZVdpZHRoPVwiLjc2XCIgZD1cIk0yOTIuNSAzODYuMmg5LjRjLS4wMiAxLjU4LS40MyAyLjg0LTEuMjQgMy44LS44Ljk1LTEuOSAxLjQ0LTMuMyAxLjQ3LTEuNDMgMC0yLjU4LS40Ni0zLjQ1LTEuMzgtLjg2LS45My0xLjMzLTIuMjMtMS40LTMuOXptLTIuODMtLjg4Yy4wNiAxLjQ2LjQgMi44NCAxIDQuMTUuNiAxLjMgMS40NyAyLjM3IDIuNiAzLjIgMS4xMi44IDIuNDQgMS4yMiAzLjk2IDEuMjQgMS40NyAwIDIuNzgtLjQgMy45My0xLjE4IDEuMTQtLjggMi4wMi0xLjg1IDIuNjQtMy4xNi42My0xLjMuOTQtMi42OC45NC00LjEgMC0uOTMtLjUzLTEuNC0xLjU3LTEuNEgyOTIuNWMuMDMtMS4xMi4yNy0yLjA4Ljc0LTIuODcuNDYtLjggMS4xLTEuMzcgMS44Ny0xLjc2LjgtLjQgMS42NS0uNTggMi42LS41OCAxLjY3IDAgMy4yLjYgNC42IDEuNzcuNDguMzUuODMuNTIgMS4wNi41Mi4zIDAgLjU1LS4xMi43My0uMzUuMTctLjIzLjI1LS41Mi4yNS0uODUgMC0uMzUtLjE0LS43LS40LTEuMDMtLjY0LS42Ni0xLjUzLTEuMjUtMi42OC0xLjc1LTEuMTYtLjUtMi40LS43NS0zLjczLS43NS0xLjQgMC0yLjYuMjYtMy42My44LTEgLjUtMS44NCAxLjItMi40NyAyLjA4LS42My44Ny0xLjA4IDEuOC0xLjM3IDIuOC0uMyAxLS40NCAyLjAzLS40NiAzLjA2bC4wNS4xYzAgLjA0LjAyLjA1LjAyLjA2elwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMzA5LjUgMzg1LjIyYzAtMS43NC4zNi0zLjIyIDEuMS00LjQ0Ljc2LTEuMjIgMS44OC0xLjg2IDMuMzYtMS45MiAxLjE4IDAgMi4xNC4zIDIuODcuOTIuNzMuNiAxLjI2IDEuNCAxLjU3IDIuMzQuMzIuOTUuNSAxLjk2LjUgMy4wMyAwIDEuMjQtLjIgMi4zNC0uNiAzLjMtLjQuOTctLjk1IDEuNy0xLjY2IDIuMjQtLjcyLjUtMS41Mi43Ny0yLjQyLjc3LTEuMDcgMC0xLjk1LS4zLTIuNjYtLjkzLS43LS42My0xLjIyLTEuNDItMS41NC0yLjM2LS4zMy0uOTUtLjUtMS45NC0uNTMtMi45Nm05LjEgNi4zOHY4LjQyYzAgLjQ0LjEzLjc4LjQgMS4wMy4yOC4yNi42LjM4Ljk3LjM4LjQgMCAuNzYtLjEyIDEuMDMtLjM3LjI4LS4yNi40LS42Mi40LTEuMXYtMjIuMWMwLS40NC0uMTMtLjgtLjQtMS4wNS0uMy0uMjUtLjYzLS4zOC0xLjAzLS4zOC0uMzUgMC0uNjcuMTMtLjk1LjQtLjMuMjQtLjQzLjU3LS40My45OHYuOTNoLS4wN2MtLjMtLjYyLS44LTEuMTUtMS41LTEuNi0uNjgtLjQzLTEuNi0uNjctMi43OC0uNy0xLjUgMC0yLjgzLjM2LTMuOTcgMS4xLTEuMTMuNzMtMiAxLjc2LTIuNjQgMy4wNy0uNjIgMS4zMi0uOTUgMi44LS45NyA0LjQ4IDAgMS4yLjE3IDIuMzQuNTIgMy40Mi4zNCAxLjA4Ljg0IDIuMDIgMS40NyAyLjgzLjY0LjggMS40IDEuNDQgMi4zIDEuOS45LjQ1IDEuODcuNjggMi45My42OCAxLjkyIDAgMy40Ni0uNzYgNC42My0yLjNoLjA2elwiLz5cbiAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZVdpZHRoPVwiLjc2XCIgZD1cIk0zMDkuNSAzODUuMjJjMC0xLjc0LjM2LTMuMjIgMS4xLTQuNDQuNzYtMS4yMiAxLjg4LTEuODYgMy4zNi0xLjkyIDEuMTggMCAyLjE0LjMgMi44Ny45Mi43My42IDEuMjYgMS40IDEuNTcgMi4zNC4zMi45NS41IDEuOTYuNSAzLjAzIDAgMS4yNC0uMiAyLjM0LS42IDMuMy0uNC45Ny0uOTUgMS43LTEuNjYgMi4yNC0uNzIuNS0xLjUyLjc3LTIuNDIuNzctMS4wNyAwLTEuOTUtLjMtMi42Ni0uOTMtLjctLjYzLTEuMjItMS40Mi0xLjU0LTIuMzYtLjMzLS45NS0uNS0xLjk0LS41My0yLjk2em05LjEgNi4zOHY4LjQyYzAgLjQ0LjEzLjc4LjQgMS4wMy4yOC4yNi42LjM4Ljk3LjM4LjQgMCAuNzYtLjEyIDEuMDMtLjM3LjI4LS4yNi40LS42Mi40LTEuMXYtMjIuMWMwLS40NC0uMTMtLjgtLjQtMS4wNS0uMy0uMjUtLjYzLS4zOC0xLjAzLS4zOC0uMzUgMC0uNjcuMTMtLjk1LjQtLjMuMjQtLjQzLjU3LS40My45OHYuOTNoLS4wN2MtLjMtLjYyLS44LTEuMTUtMS41LTEuNi0uNjgtLjQzLTEuNi0uNjctMi43OC0uNy0xLjUgMC0yLjgzLjM2LTMuOTcgMS4xLTEuMTMuNzMtMiAxLjc2LTIuNjQgMy4wNy0uNjIgMS4zMi0uOTUgMi44LS45NyA0LjQ4IDAgMS4yLjE3IDIuMzQuNTIgMy40Mi4zNCAxLjA4Ljg0IDIuMDIgMS40NyAyLjgzLjY0LjggMS40IDEuNDQgMi4zIDEuOS45LjQ1IDEuODcuNjggMi45My42OCAxLjkyIDAgMy40Ni0uNzYgNC42My0yLjNoLjA2elwiLz5cbiAgICAgIDxwYXRoIGQ9XCJNMzI3LjM1IDM4NS4yMmMwLTEuNzQuMzctMy4yMiAxLjEyLTQuNDQuNzUtMS4yMiAxLjg2LTEuODYgMy4zNS0xLjkyIDEuMTggMCAyLjE0LjMgMi44Ny45Mi43My42IDEuMjUgMS40IDEuNTYgMi4zNC4zMi45NS41IDEuOTYuNSAzLjAzIDAgMS4yNC0uMiAyLjM0LS42IDMuMy0uNC45Ny0uOTUgMS43LTEuNjYgMi4yNC0uNzIuNS0xLjUyLjc3LTIuNDIuNzctMS4wNyAwLTEuOTUtLjMtMi42Ni0uOTMtLjctLjYzLTEuMjItMS40Mi0xLjU0LTIuMzYtLjMzLS45NS0uNS0xLjk0LS41My0yLjk2bTkuMSA2LjM4djguNDJjMCAuNDQuMTQuNzguNCAxLjAzLjMuMjYuNi4zOC45OC4zOC40IDAgLjc2LS4xMiAxLjAzLS4zNy4yOC0uMjYuNC0uNjIuNC0xLjF2LTIyLjFjMC0uNDQtLjEzLS44LS40LTEuMDUtLjMtLjI1LS42My0uMzgtMS4wMy0uMzgtLjM1IDAtLjY3LjEzLS45NS40LS4zLjI0LS40My41Ny0uNDMuOTh2LjkzaC0uMDZjLS4zMi0uNjItLjgtMS4xNS0xLjUtMS42LS43LS40My0xLjYyLS42Ny0yLjgtLjctMS41IDAtMi44Mi4zNi0zLjk2IDEuMS0xLjEzLjczLTIgMS43Ni0yLjY0IDMuMDctLjYyIDEuMzItLjk1IDIuOC0uOTcgNC40OCAwIDEuMi4xNyAyLjM0LjUyIDMuNDJzLjg0IDIuMDIgMS40OCAyLjgzYy42NC44IDEuNCAxLjQ0IDIuMyAxLjkuOS40NSAxLjg3LjY4IDIuOTMuNjggMS45MiAwIDMuNDYtLjc2IDQuNjMtMi4zaC4wNXpcIi8+XG4gICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2VXaWR0aD1cIi43NlwiIGQ9XCJNMzI3LjM1IDM4NS4yMmMwLTEuNzQuMzctMy4yMiAxLjEyLTQuNDQuNzUtMS4yMiAxLjg2LTEuODYgMy4zNS0xLjkyIDEuMTggMCAyLjE0LjMgMi44Ny45Mi43My42IDEuMjUgMS40IDEuNTYgMi4zNC4zMi45NS41IDEuOTYuNSAzLjAzIDAgMS4yNC0uMiAyLjM0LS42IDMuMy0uNC45Ny0uOTUgMS43LTEuNjYgMi4yNC0uNzIuNS0xLjUyLjc3LTIuNDIuNzctMS4wNyAwLTEuOTUtLjMtMi42Ni0uOTMtLjctLjYzLTEuMjItMS40Mi0xLjU0LTIuMzYtLjMzLS45NS0uNS0xLjk0LS41My0yLjk2em05LjEgNi4zOHY4LjQyYzAgLjQ0LjE0Ljc4LjQgMS4wMy4zLjI2LjYuMzguOTguMzguNCAwIC43Ni0uMTIgMS4wMy0uMzcuMjgtLjI2LjQtLjYyLjQtMS4xdi0yMi4xYzAtLjQ0LS4xMy0uOC0uNC0xLjA1LS4zLS4yNS0uNjMtLjM4LTEuMDMtLjM4LS4zNSAwLS42Ny4xMy0uOTUuNC0uMy4yNC0uNDMuNTctLjQzLjk4di45M2gtLjA2Yy0uMzItLjYyLS44LTEuMTUtMS41LTEuNi0uNy0uNDMtMS42Mi0uNjctMi44LS43LTEuNSAwLTIuODIuMzYtMy45NiAxLjEtMS4xMy43My0yIDEuNzYtMi42NCAzLjA3LS42MiAxLjMyLS45NSAyLjgtLjk3IDQuNDggMCAxLjIuMTcgMi4zNC41MiAzLjQycy44NCAyLjAyIDEuNDggMi44M2MuNjQuOCAxLjQgMS40NCAyLjMgMS45LjkuNDUgMS44Ny42OCAyLjkzLjY4IDEuOTIgMCAzLjQ2LS43NiA0LjYzLTIuM2guMDV6XCIvPlxuICAgICAgPHBhdGggZD1cIk0zNTEuNzUgMzkxLjNoLTEuMjVjLS40IDAtLjcyLjEtLjk2LjM0LS4yNC4yMy0uMzguNS0uNDIuODQuMDguODQuNTQgMS4yNiAxLjM4IDEuMjZoMS4yNXYzLjhjMCAuNDMuMTMuNzUuNC45OC4yNi4yMy42LjM0Ljk4LjM0LjQgMCAuNzUtLjEgMS4wMy0uMzQuMjctLjI0LjQtLjU4LjQtMS4wNHYtMy43NGgxLjI1Yy40NCAwIC43Ny0uMTIgMS0uMzUuMjItLjI0LjMzLS41NC4zMy0uOTIgMC0uMzItLjEtLjYtLjMzLS44My0uMjItLjIzLS41LS4zNS0uODUtLjM1aC0xLjM4di0xMy41YzAtLjQyLS4xNS0uNzYtLjQ0LTEtLjMtLjI1LS42NS0uMzgtMS4wNy0uMzgtLjM3IDAtLjY4LjEzLS45My4zN3MtLjM4LjYtLjM4IDEuMDd2MTMuNDN6XCIvPlxuICAgICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjMDAwXCIgc3Ryb2tlV2lkdGg9XCIuNzZcIiBkPVwiTTM1MS43NSAzOTEuM2gtMS4yNWMtLjQgMC0uNzIuMS0uOTYuMzQtLjI0LjIzLS4zOC41LS40Mi44NC4wOC44NC41NCAxLjI2IDEuMzggMS4yNmgxLjI1djMuOGMwIC40My4xMy43NS40Ljk4LjI2LjIzLjYuMzQuOTguMzQuNCAwIC43NS0uMSAxLjAzLS4zNC4yNy0uMjQuNC0uNTguNC0xLjA0di0zLjc0aDEuMjVjLjQ0IDAgLjc3LS4xMiAxLS4zNS4yMi0uMjQuMzMtLjU0LjMzLS45MiAwLS4zMi0uMS0uNi0uMzMtLjgzLS4yMi0uMjMtLjUtLjM1LS44NS0uMzVoLTEuMzh2LTEzLjVjMC0uNDItLjE1LS43Ni0uNDQtMS0uMy0uMjUtLjY1LS4zOC0xLjA3LS4zOC0uMzcgMC0uNjguMTMtLjkzLjM3cy0uMzguNi0uMzggMS4wN3YxMy40M3pcIi8+XG4gICAgICA8cGF0aCBmaWxsPVwiI2ZmZlwiIGQ9XCJNMzQ2Ljg2IDM5OC41YzAtMS4yNy0xLjAzLTIuMy0yLjMtMi4zLTEuMjggMC0yLjMyIDEuMDMtMi4zMiAyLjMgMCAxLjI4IDEuMDQgMi4zMiAyLjMgMi4zMiAxLjMgMCAyLjMyLTEuMDQgMi4zMi0yLjNcIi8+XG4gICAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiMwMDBcIiBzdHJva2VXaWR0aD1cIjIuMDJcIiBkPVwiTTM0Ni44NiAzOTguNWMwLTEuMjctMS4wMy0yLjMtMi4zLTIuMy0xLjI4IDAtMi4zMiAxLjAzLTIuMzIgMi4zIDAgMS4yOCAxLjA0IDIuMzIgMi4zIDIuMzIgMS4zIDAgMi4zMi0xLjA0IDIuMzItMi4zelwiLz5cbiAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzAwMFwiIHN0cm9rZVdpZHRoPVwiNC4yNVwiIGQ9XCJNMzQ0LjU2IDM5Mi41N3YtMTQuOFwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiLz5cbiAgICA8L2c+XG4gIDwvU3ZnPlxuKVxuXG5leHBvcnQgY29uc3QgVGFyZ2V0TG9nbyA9ICgpID0+IChcbiAgPFN2ZyB2aWV3Qm94PVwiMCAwIDI4Ni41IDYzXCI+XG4gICAgPHBhdGggZmlsbD1cIiNFQjJEMkRcIiBkPVwiTTMxLjUgNDJDMzcuMyA0MiA0MiAzNy42IDQyIDMxLjhjMC01LjgtNC43LTEwLjUtMTAuNS0xMC41UzIxIDI2IDIxIDMxLjcgMjUuOCA0MiAzMS42IDQyem0wIDEwYzExIDAgMjAtOSAyMC0yMCAwLTExLjItOS0yMC4zLTIwLTIwLjNzLTIwIDktMjAgMjAuMmMwIDExIDkgMjAgMjAgMjB6TTEuMiAzMmMwLTE3IDEzLjYtMzAuNCAzMC4zLTMwLjRDNDguMyAxLjYgNjEuOCAxNSA2MS44IDMyIDYxLjggNDguNSA0OC4zIDYyIDMxLjUgNjIgMTQuOCA2Mi4yIDEuMiA0OC42IDEuMiAzMnpcIi8+XG4gICAgPHBhdGggZD1cIk03MS43IDEwaDM0LjVWMTloLTEydjM1SDg0di0zNWgtMTJ2LTguN00xNTguMiAxOWgtOS43djguNmg4LjdjMyAwIDUuNC0xLjQgNS40LTQuNCAwLTMuMi0yLTQuMy00LjQtNC4zem0tMTkuNy05SDE1OWMxMS42IDAgMTMuMiA4IDEzLjIgMTIuNyAwIDYuOC01LjggMTAuMi02LjMgMTAuMyAwIDAgNSAyIDUgNy43djhjMCAzLjQgMiA0LjMgMi40IDVIMTY1Yy00LS40LTQtMy41LTMuOC01LjR2LTdjMC0xLjctLjctMy42LTQuMi0zLjZoLTguNXYxNmgtMTBWMTAuMnpNMjE2LjggMTBWNTRoMzEuNHYtOUgyMjdWMzVoMTh2LTguMmgtMTh2LThoMjEuMnYtOC43aC0zMS40TTI0OS43IDE5aDEyLjV2MzQuOGgxMC4zdi0zNUgyODV2LTguN2gtMzUuM3Y5TTExNyAyNS41bC0zLjYgMTEuM2g3LjdsLTQtMTEuM3pNMTExLjQgMTBoMTEuMkwxMzcuNyA1NEgxMjdsLTMuMy05aC0xM2wtMi44IDlIOTdMMTExLjQgMTB6TTIxMy4yIDI5LjRoLTE4LjhWMzhoOWMwIDEuNi4yIDMuNC0yIDUuOC0uNiAxLTMgMi43LTYuNSAyLjctMyAwLTUtLjgtNi44LTIuMy00LTMuNC01LTkuNi01LTEzIDAtNCAxLjctMTQuMyAxMi0xNC43IDAgMCA2LjctLjUgOC40IDcuN2g5LjVjMC00LTUtMTUuOC0xOC0xNi00LjQgMC0xMCAxLjUtMTUgNi4yLTMuMyAzLjQtNi4zIDkuMi02LjMgMTcuMyAwIDguOCAzLjIgMTQuNSA2IDE3LjYgNS4zIDUuNSAxMC42IDYgMTMuMyA2IDIgMCA2LjMtLjQgMTEuNi00bDEuNSAyLjVoNy4yVjI5LjR6TTI3Ny4zIDUxaC41Yy40IDAgLjYtLjIuNi0uNSAwLS40LS4zLS40LS42LS40aC0uNXYxem0tLjYtMS40aDFjMSAwIDEuMy4yIDEuMyAxIDAgLjUtLjMuNy0uOC43bDEgMS40aC0uOGwtLjctMS4zaC0uNHYxLjNoLS42di0zem0xIDMuN2MxLjIgMCAyLTEgMi0yIDAtMS40LS44LTIuMy0yLTIuMy0xIDAtMiAxLTIgMi4yIDAgMS4yIDEgMiAyIDJ6bTAtNWMxLjYgMCAzIDEuMiAzIDMgMCAxLjUtMS40IDIuNi0zIDIuNi0xLjQgMC0yLjgtMS4yLTIuOC0yLjggMC0xLjcgMS4zLTIuOCAyLjgtMi44elwiLz5cbiAgPC9Tdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBFdXJvVmlzaW9uTG9nbyA9ICgpID0+IChcbiAgPFN2ZyB2aWV3Qm94PVwiMCAwIDMwMCAxMDBcIj5cbiAgICA8cGF0aCBmaWxsPVwiIzMzM1wiIGQ9XCJNMjM3LjMgNTguN2MtMy4zIDAtNS4yLTQtNS04IC40LTcuMyA2LjQtMTQuNSA2LjQtMTQuNSAxLjQgMS4zIDUuNiA4LjIgNS4zIDEzLjUtLjIgNS0zLjMgOS4yLTYuNyA5em00LTI0LjhjMS41LTEuOCAyLjQtMi44IDIuMi00LS4yLTEtNC0yLTYtLjMtNS00LTQgLjctMy4zIDEuOC02IDQuMy0xMC4yIDE1LjYtNyAyNC40IDMuNCA4LjYgMTMuMiA5LjYgMTguMyAzLjYgNC42LTUuNCAzLjgtMTUuMy00LjItMjUuN002OC41IDg3LjRsMS43LTJtLTEuNyAybDEuNy0ybS0xLjcgMmwxLjctMm0tMS43IDJsMS43LTJjMS4yIDEgMi40IDEuNSA0IDEuNSAxIDAgMS44LS41IDEuOC0xLjIgMC0uOC0uNS0xLTIuNy0xLjctMi42LS42LTQuMy0xLjMtNC4zLTQgMC0yLjMgMi0zLjggNC42LTMuOCAyIDAgMy41LjYgNC44IDEuNkw3NyA4MGMtMS4yLS44LTIuNC0xLjMtMy40LTEuM3MtMS43LjUtMS43IDF2LjJjMCAuNy40IDEgMi43IDEuNiAyLjYuNyA0IDEuNiA0IDQgMCAyLjUtMiA0LTQuNyA0LTIgMC00LS44LTUuNS0ybTI0LTQuN2MwLTIuNC0xLjctNC4yLTQtNC4ycy00IDEuOC00IDRjMCAyLjMgMS43IDQgNCA0czQtMS43IDQtNHptLTExIDBjMC0zLjggMy03IDctN3M3IDMgNyA2LjhjMCAzLjctMyA2LjgtNyA2LjhzLTctMy03LTYuN20xNy4yLTYuNmgyLjZsNiA4di04aDN2MTNoLTIuNWwtNi4zLTguM3Y4LjNoLTIuOHYtMTN6bTE1IDYuNWMwLTMuOCAzLTcgNy03IDIuMyAwIDMuNy44IDUgMmwtMS44IDJjLTEtLjctMi0xLjItMy41LTEuMi0yIDAtMy43IDEuOC0zLjcgNCAwIDIuNCAxLjYgNC4yIDQgNC4yIDEgMCAyLS4zIDIuNi0uOHYtMmgtMi44VjgyaDUuNnY1LjVjLTEuMyAxLTMuMiAyLTUuNSAyLTQgMC03LTIuOC03LTYuNm0yMi40IDBjMC0zLjggMy03IDctNyAyLjQgMCAzLjggMSA1IDIuMmwtMS44IDJjLTEtMS0yLTEuNC0zLjMtMS40LTIuMyAwLTQgMS44LTQgNCAwIDIuMyAxLjcgNCA0IDQgMS40IDAgMi4zLS41IDMuMy0xLjRsMS44IDJjLTEuMiAxLjMtMi43IDIuMi01LjIgMi4yLTMuOCAwLTYuNy0zLTYuNy02LjdtMjUuNCAwYzAtMi40LTEuNy00LjItNC00LjJzLTMuOCAxLjgtMy44IDRjMCAyLjMgMS42IDQgNCA0IDIuMiAwIDMuOC0xLjcgMy44LTR6bS0xMC44IDBjMC0zLjggMy03IDctN3M2LjggMyA2LjggNi44YzAgMy43LTMgNi44LTcgNi44cy02LjgtMy02LjgtNi43bTE3LTYuNmgyLjdsNiA4di04aDN2MTNoLTIuNmwtNi4yLTguM3Y4LjNoLTN2LTEzek0xODYgNzloLTMuOHYtMi42SDE5M1Y3OWgtNHYxMC4zaC0zVjc5em0xMC4yLTIuNmg5LjhWNzloLTd2Mi41aDYuMlY4NGgtNlY4N2g3djIuNWgtMTB2LTEzem0xMi43IDExbDEuNi0yYzEgMSAyLjMgMS42IDMuOCAxLjYgMS4yIDAgMi0uNSAyLTEuMiAwLS44LS41LTEtMi43LTEuNy0yLjYtLjYtNC4zLTEuMy00LjMtNCAwLTIuMyAyLTMuOCA0LjUtMy44IDEuOCAwIDMuNC42IDQuNyAxLjZsLTEuNCAyLjJjLTEuMi0uOC0yLjMtMS4zLTMuNC0xLjMtMS4yIDAtMS44LjUtMS44IDF2LjJjMCAuNy42IDEgMi44IDEuNiAyLjcuNyA0IDEuNiA0IDQgMCAyLjUtMS44IDQtNC42IDQtMiAwLTQtLjgtNS41LTJtMTYuNS04LjZoLTR2LTIuNmgxMC44Vjc5aC00djEwLjNoLTIuOFY3OXptLTE3Ni02Mi4zYy0xMS40LS44LTI0LjIgOC43LTIzLjcgMjEgMCAxLjMgMSAyLjQgMi41IDIuNGg3UzI1IDQ4IDI1IDU3LjRjMCA1IDMuOCAxMSAxMS42IDExIDExIDAgMTkuMy05IDE5LjMtMTYuNiAwLS43LS44LTEuNS0yLS4yLTEuNiAyLTEwLjggMTEuNS0xOS44IDExLjUtMyAwLTUuNy0xLjctNS43LTUuNEMyOC41IDUzIDM2IDQ0IDQ5IDQwLjJjMy4yLTEgMy40LTUuNC0uNi01LjYtNC0uMi0xNy42IDEuMy0xOC42IDEuM3MtMS0uMi0uOC0xYy41LTEuMyA1LjUtMTAgMjAuNi0xMS43IDUtLjQgNC42LTYuMyAwLTYuNk02NiAzMS4yYzAtMy00LjUtNS02LjItLjYtMy4yIDgtNC4yIDMyLjggNi42IDMyLjhDNzEgNjMuNCA3Ny4yIDUzIDc3LjIgNDNjMC04LjQtMy41LTE0LTQuMi0xNS0uNy0xLTEuNy0uMy0xLjYgMS41LjIgMiAuNyAxOS00LjYgMjUtMiAyLjQtMy43IDAtNC0yLjMtLjYtNi42IDMtMTYuNyAzLTIxbTQ5LjQgMjYuNWMtMyAwLTQuNy00LTQuNy04LjIgMC03LjUgNS40LTE0LjMgNS40LTE0LjMgMS4zIDIgNSA3LjMgNSAxMi42IDAgNS40LTIuOCAxMC01LjggMTB6bTIuNC0yNC44czEuNy0yLjQuNy0zLjhjLTEuMi0xLjQtNS0yLTguMyAyLTQuNiA1LTcuOCAxNi00LjQgMjUgMy4zIDguNyAxMi42IDkuNCAxNyAyLjggMy44LTUuOCAyLjctMTUuNi01LTI2bS0zMC40IDguN2wuNS02LjhzNy42LTIgMTAtMS44YzIuNC4yIDIuOCAxLjIgMS43IDMtMi43IDQtOSA1LjYtMTIuMiA1LjV6TTEwMy40IDY0QzEwMCA1OS43IDk2IDUwLjggOTAgNDUuM2M2LjItLjQgMTQtNS4zIDE0LTEwLjUgMC0zLjgtNC02LjYtOS4yLTYuNi01LjIgMC0xMSAxLjgtMTMuMiAzLTIuOCAxLjgtLjcgNS43IDIgNC42IDAgMC0xIDQuNy0xLjMgNy0yIDAtMi42LjMtMi40LjcgMCAuNSAxIDEgMiAyLjItLjQgMy0xIDE1LjgtLjggMTcgMCAxIC44IDEuMyAxLjggMCAuOC0xIDIuNy0zLjUgMy41LTEzLjIgMSAxIDMuNyA0LjUgNyA4LjggNSA2LjMgNi41IDYuNyA4LjUgNy40IDEgLjQgMi4yLS4yIDEuNC0xLjNtODAuMy0zNWMuMiA2LjYtNS43IDE3LjMtNiAyNS0uNCA1LjguNiA4IDEgOSAuNi42IDEuNy43IDItLjcgMS00LjMgNy0xNS41IDcuOC0yNC41LjQtNS42LTEuMy05LTMuMi05LjYtMS0uMy0xLjYtLjItMS42LjdtMjItMWMtOC4yIDAtMTQuMiAzLTE0LjIgOS43IDAgNCAzIDcgOCA3LjcgMi43LjUgNS41LjcgNi41IDEgMS44LjctMi42IDIuOC05LjMgNy40LTQuNiAzLTggNi40LTkuOCAxMC0uNyAxIC4yIDIuMyAxLjUgMS40IDIuNS0xLjggOC00LjcgMTMuNC03LjYgNS0yLjggOS44LTYgOS44LTkuOCAwLTMuNS0yLjYtNC44LTQuNi01LTMuNS0uNC0xMSAwLTExLTQuNCAwLTEuNyAyLTMuOCA5LTMuOCA1LjQgMCA1LTYuNS41LTYuNW0xMC40IDEuM2MyLjggNS4yLTEuOCAxOS4zLTEuOCAyNC43IDAgNS4zLjYgNy4yIDIgOSAuOC44IDEuNy4zIDEuOC0uNy41LTQuNyA1LjUtMTcuNSA2LTIzLjUuMy03LjYtMy41LTEwLjUtNS43LTEwLjctMS4yIDAtMi44LjItMi4yIDEuM20yLTcuM2MwIDUgOCA1LjcgOC0uMyAwLTUuMy00LjMtOS43LTUuMi0xMC40LTEuNC0xLTMuMy0xLTMgMSAxLjIgMy43LjIgOCAuMiA5LjdtNTYuNiA0MWMtMS02LjcuNC0xNS4zLjQtMjMuNCAwLTYtNS05LjMtOC05LjMtNCAwLTYuNCAxLjgtNi40IDEuOGwuMi0zLjRjMC0uNy0uOC0uNy0yIDAtNi4yIDMuOC03IDE0LjgtNyAyMi41IDAgNy44IDEuMiAxMC41IDEuMyAxMS41LjIgMSAxLjQgMS4yIDIgLjMgMy4yLTYuNCAzLjYtMTggNC43LTI0LjYgMS42LTIgOC0yLjUgOC4yIDIuNi4yIDUtLjMgMTguMiA1IDIyLjcuNi42IDEuOC40IDEuNi0uNk0xMzEuNCAzNmMuMi0xMi40IDYuNi0xNi4zIDEwLTE2LjMgNSAwIDcgMy44IDcuMyA1LjQuNCAxLjggMi4yIDMgMi44LjQuNi0yLjcgNi40LTExIDEzLjQtMTEgNi40IDAgOC43IDYuNyA4LjUgMTIuNC0uNiAxNS41LTIwLjUgMjcuOC0yMyAzNS42LTIuNC00LjctMTkuMi0xMS41LTE5LTI2LjR6bTM2LTI1LjRjLTYgMC0xMi44IDQuMy0xNyAxMS40LTEtMi42LTUtNS40LTEwLTUuNC0zLjcgMC0xNC41IDQuOC0xNC41IDIwLjMgMCAyMCAyMCAyNCAyNC4yIDMwLjIuMy40IDEuMi43IDEuNS0uMyAzLjMtOS43IDI4LjUtMjAuNiAyOC41LTQwIDAtMTEtNy0xNi40LTEzLTE2LjRcIi8+XG4gIDwvU3ZnPlxuKVxuXG5leHBvcnQgY29uc3QgQXJ0c3lMb2dvID0gKCkgPT4gKFxuICA8U3ZnIHZpZXdCb3g9XCIwIDAgMjQ1MCA3ODZcIj5cbiAgICA8cGF0aCBkPVwiTTAgMzkzdjM5M2gyNDUwVjBIMHYzOTN6bTI0NDMgMHYzODBIMTQxNWwtLjItNjIuOC0uMy02Mi43LTI4LjctLjMtMjguOC0uMi0uMiA2Mi43LS4zIDYyLjgtNjcxLjcuM0wxMyA3NzNWMTNoMjQzMHYzODB6XCIvPlxuICAgIDxwYXRoIGQ9XCJNMTYzOS4zIDIyOWMtMTguNiAyLjgtMzkuNiAxMS01MiAyMC40LTE3IDEzLTI2LjggMzAuNi0yOS4zIDUzLTIuOCAyNiA1IDUwIDIxIDY1LjIgMTYuNyAxNS41IDM1LjUgMjMuNSA4Mi44IDM1LjQgMzAuNyA3LjcgNDAuNiAxMS43IDQ4LjYgMTkuNSA2LjggNi42IDkgMTIgOSAyMiAwIDkuNi0yLjUgMTUuNy05LjIgMjIuMy0xNS40IDE1LjUtNTcgMjAuMi04MSA5LjItMTEuNS01LjQtMjAuNy0xNi42LTI0LjItMjkuOGwtMS00LjJoLTU5LjNsLjcgOS4yYzIgMjQgOC4zIDM4IDI1IDUzLjUgMjIgMjAuNiA1MSAzMC4zIDkwLjQgMzAuMyA1OC4zIDAgMTAyLTI3IDExMy4zLTcwLjIgNC0xMS44IDQtMzAuOCAxLTQzLTYtMjQuNy0yMS00My4zLTQzLTU0LjctMTMuNS03LTIzLjQtMTAtNTgtMTktMTkuNC01LTMzLjYtOS0zOC0xMS0xNi43LTctMjMuNS0xOS0xOS42LTMzIDQtMTQgMjAuNS0yMyA0My43LTIzIDE2LjMgMCAyNy4zIDQgMzUuNiAxMSA1IDUgOSAxMSAxMSAxOGwxIDQgMjkgLjZoMjkuNGwtLjgtNS41Yy00LjUtNTItNDEuNi04MC43LTEwNC04MC4yLTggLjMtMTcuNi43LTIxIDF6TTQwNCAyMzguMmwtNTYuNSAxNDUuMy01Ni4yIDE0NC4yYy0uNCAxIDYuNCAxLjMgMzIgMS4zSDM1NmwxLjctMy42Yy44LTIgNy4yLTE5IDE0LTM3LjcgNy0xOC43IDEzLTM1LjUgMTQtMzcuNGwxLjMtMy4zaDEwMS44bDEgMi43YzE2LjQgNDUuNSAyNi42IDczLjQgMjcuNyA3NmwxLjQgMy4zaDMyYzE4IDAgMzIgMCAzMi0uM2wtNTctMTQ2LjItNTYuOC0xNDYtMzIuNy0uMy0zMi43LS4yLTEgMi4yem01MC41IDExMWM4LjcgMjQuMiAxNS42IDQ0IDE1LjMgNDQuMy0uMy4zLTE1IC40LTMzIC4zbC0zMi42LS4zIDE2LjYtNDUuM2M5LTI1IDE2LjgtNDQuNyAxNy4yLTQ0IC40LjcgNy44IDIxIDE2LjUgNDV6bTIzNy43IDMzbC4zIDE0Ni4zIDMwLjcuMyAzMC44LjIuMi03Mi4yLjMtNzIuMiA1Ny41IDcyLjIgNTcuNCA3Mi4yaDM3LjNjMjAuNSAwIDM3LjMtLjIgMzcuMy0uNXMtMTkuNi0yNC41LTQzLjUtNTMuN0w4NTcgNDIxLjZsMTEtMi42YzEyLjYtMy4zIDE4LTUuNiAyOC40LTEyLjIgOC43LTUuNiAyMC42LTE3LjcgMjUuNi0yNiA1LjYtOS4zIDEwLjMtMjEuMyAxMi40LTMxLjYgMi44LTEzLjggMi4yLTM0LTEuNi00Ni41LTcuOC0yNi0yNC00NS40LTQ3LjctNTYuNi0xMC01LTIwLTctMzUtOS03IDAtNDAtMS04NC0xaC03NGwuNSAxNDd6TTgzOSAyOTJjMTQuMyAyIDIyLjggNi42IDI5IDE2LjIgNS40IDguMyA3LjcgMTguNyA2LjMgMjguNS0yLjQgMTYuNy0xMS44IDI2LjItMzEgMzEuNS03LjIgMi0xMSAyLjItNDguNSAyLjZsLTQwLjguNHYtMzkuNGMwLTIxLjcuMy0zOS44LjctNDAgMS0xLjIgNzUtMSA4NC4yLjJ6bTE5OS0yN3YyOWgxMDJ2MjM1bDMwLjgtLjIgMzAuNy0uMy4zLTExNy4zLjItMTE3LjJoMTAydi01OGgtMjY2djI5em04MjkuMi0yNi44Yy44IDEuMyAyNi44IDQzIDU3LjYgOTNMMTk4MSA0MjJ2MTA3aDYxVjQyMS41bDU2LTkwLjUgNTcuNi05Mi44IDEuNC0yLjJoLTcxLjhsLTEzLjggMjMuMmMtNy42IDEyLjgtMTkgMzIuMy0yNS43IDQzLjMtMjYgNDQuMi0zNC4yIDU3LjUtMzQuNyA1Ny41LS4zIDAtMTctMjgtMzctNjJsLTM2LjQtNjJoLTcxLjhsMS40IDIuMnpcIi8+XG4gIDwvU3ZnPlxuKVxuXG5leHBvcnQgY29uc3QgSWRlYUxvZ28gPSAoKSA9PiAoXG4gIDxTdmcgdmlld0JveD1cIjAgMCAyODMgNjVcIj5cbiAgICA8cGF0aCBkPVwiTTEwNC41IDIuNmgtMjl2NTkuNkgxMDRjMTguNS0uMiAzMS4yLTEzLjIgMzEuMi0zMCAwLTE2LjQtMTIuNS0yOS0zMC43LTI5LjZ6TTEwNCA1Mkg4NlYxM2gxOC4yYzExLjcuMiAxOS40IDguNCAxOS40IDE5LjUgMCAxMS4yLTcuOCAxOS4zLTE5LjYgMTkuNXpNNTkuNiAxM1YyLjdIMFYxM2gyNC41djM5SDB2MTAuNWg1OS42VjUxLjhIMzUuMlYxM3ptMTQ4LjggMFYyLjdoLTYwLjJ2NTkuN2g2MC4yVjUxLjhIMTU5di0xNGgzOC41VjI3SDE1OVYxM3ptNDIuMy0xM2MtMTggMC0zMi44IDE0LjUtMzIuOCAzMi40czE0LjQgMzIuNCAzMi41IDMyLjRjMTggMCAzMi44LTE0LjUgMzIuOC0zMi40UzI2OC44IDAgMjUwLjcgMHptMCA1My43Yy0xMS44IDAtMjEuNS05LjUtMjEuNS0yMS4yczkuNi0yMS4yIDIxLjUtMjEuMmMxMS44IDAgMjEuNSA5LjUgMjEuNSAyMS4ycy05LjcgMjEuMi0yMS41IDIxLjJ6XCIvPlxuICA8L1N2Zz5cbilcblxuZXhwb3J0IGNvbnN0IEh1ZmZwb3N0TG9nbyA9ICgpID0+IChcbiAgPFN2ZyB2aWV3Qm94PVwiMCAwIDUxMy41IDgwXCI+XG4gICAgPHBhdGggZmlsbD1cIiNGRkZcIiBkPVwiTTcxLjYgNjhoMTguMmwxMC01Nkg4MS4zTDc4IDMySDYybDMuNi0yMEg0Ny4zbC05LjggNTZoMTguMmwzLjctMjFoMTUuOGwtMy42IDIxek0xMTAgMTJsLTUuNSAzMS4yYy0uNSAyLjUtLjcgNC44LS43IDcgMCAxNi42IDE0LjUgMTkgMjMgMTkgMTguMyAwIDI2LTYgMjktMjIuM2w2LTM1aC0xOC4ybC01LjIgMjljLTEuNyA5LTIuOCAxNC05LjcgMTQtNC40IDAtNi42LTIuNy02LjYtNy41IDAtMiAuOC00IDEtN2w1LjYtMjloLTE4em0xNDguNSA1NmgxOC4zbDIuNi0xNC40aDguNmMxNiAwIDI0LjctOC42IDI0LjctMjQuMyAwLTExLTcuNy0xNy4zLTIxLTE3LjNoLTIzLjNsLTEwIDU2ek0yODcgMzkuOGgtNS40bDIuNC0xMy4yaDVjNCAwIDYgMiA2IDUuNy4yIDQuNi0zIDcuNS04IDcuNXptNjEtMjljLTE5LjggMC0zMS43IDEzLTMxLjcgMzQuNCAwIDE1IDkuNSAyNCAyNS4zIDI0IDIwIDAgMzEuOC0xMyAzMS44LTM0LjQgMC0xNS05LjQtMjQtMjUuMy0yNHptLTUuMiA0NGMtNC43IDAtNy41LTMuNS03LjUtOS4yIDAtMi4yLjItNCAuNi02LjIgMS03LjMgMy4yLTE0IDExLTE0IDQuNCAwIDcuMiAzLjMgNy4yIDkgMCAyLjItLjIgNC0uNiA2LjItMS42IDcuMy00IDE0LTExLjMgMTR6TTQzNyA2OGgxOGw3LjMtNDFINDc2bDIuNy0xNUg0MzJsLTIuNiAxNUg0NDRsLTcgNDF6bS0zMC4zLTM1LjNjLTUuOC0xLjgtOC0yLjYtOC01LjMgMC0xLjggMS00IDQuNS00IDIuNiAwIDQuNyAxLjYgNS42IDMuN2wxNi00Yy0xLjgtOC04LjYtMTItMjAuMy0xMi0yMiAwLTIzLjggMTUtMjMuOCAxOS41IDAgOS4zIDUgMTUgMTUuNCAxNy44IDMgLjggNiAxLjcgNiA0LjggMCAyLjYtMS4zIDQtNC40IDQtMyAwLTYtMS43LTctNC42bC0xNiA0LjRjMiA4LjQgOS43IDEzLjIgMjIgMTMuMiA5LjQgMCAyNS0yLjYgMjUtMTkuNSAwLTguNC00LjctMTQtMTQuNS0xN3pNMjcuNCA2OGw5LjgtNTZIN3Y1NmgyMC40em00NTkuMi01NmwtOS44IDU2SDUwN1YxMmgtMjAuNHptLTMxNC4yIDBsLTkuOCA1NmgxOC4ybDMtMTYuNUgxOTlsMi42LTE0aC0xNS4zTDE4OCAyN2gyMS40bDIuNy0xNW04LjYgMGwtOS44IDU2SDIyOWwzLTE2LjVoMTVsMi41LTE0aC0xNS4zTDIzNiAyN2gyMS40bDIuNi0xNVwiLz5cbiAgPC9Tdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBDb2luYmFzZUxvZ28gPSAoKSA9PiAoXG4gIDxTdmcgdmlld0JveD1cIjAgMCAxMjIgMjhcIj5cbiAgICA8cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjMgMjRjMSAwIDEuOC0uMyAyLjctLjZsMS43IDIuNmMtMS42LjgtMyAxLjItNSAxLjItNSAwLTguNy0zLjQtOC43LTguOHM0LTguOCA4LjgtOC44YzEuOCAwIDMuMi40IDQuNiAxbC0xLjYgMi44Yy0xLS4zLTEuNy0uNC0yLjYtLjQtMyAwLTUuNCAyLTUuNCA1LjQgMCAzLjQgMi4zIDUuNSA1LjUgNS41em0xMy0xNC40YzUgMCA4LjcgMy42IDguNyA4LjggMCA1LjItMy43IDguOC04LjcgOC44LTUgMC04LjctMy42LTguNy04LjggMC01LjIgMy43LTguOCA4LjctOC44em0wIDMuMmMtMi44IDAtNSAyLjItNSA1LjYgMCAzLjQgMi4yIDUuNiA1IDUuNiAzIDAgNS0yLjIgNS01LjYgMC0zLjQtMi01LjYtNS01LjZ6bTExIDE0VjEwaDMuOHYxNi44aC0zLjZ6bS0uNC0yMmMwLTEuMyAxLTIuMyAyLjItMi4zIDEuMyAwIDIuNCAxIDIuNCAyLjMgMCAxLjQtMSAyLjQtMi40IDIuNC0xLjIgMC0yLjMtMS0yLjMtMi40em03LjQgNi4zYzIuMy0xIDUuMi0xLjQgNy43LTEuNCA0LjQgMCA3IDEuNiA3IDYuNHYxMC44aC0zLjZWMTYuM2MwLTIuNC0xLjUtMy4zLTMuNi0zLjMtMS4zIDAtMi43LjItMy43LjV2MTMuM2gtMy42VjExem0xOC0xMEg2M3Y5LjVjLjgtLjUgMi40LTEgNC0xIDQuNyAwIDguNCAzLjIgOC40IDguNiAwIDUuNS0zLjcgOS4yLTEwIDkuMi0yLjMgMC00LjQtLjUtNi0xVjF6TTYzIDIzLjZjLjcuMyAxLjcuNCAyLjYuNCAzLjUgMCA2LTIgNi01LjggMC0zLjMtMi40LTUuMi01LjItNS4yLTEuNSAwLTIuNi40LTMuNC44djkuOHptMjMuMi04YzAtMi0xLjQtMi43LTMuMi0yLjctMiAwLTMuNS41LTUgMS4yVjExYzEuNi0xIDMuNS0xLjQgNS42LTEuNCAzLjcgMCA2LjMgMS41IDYuMyA1Ljd2MTEuMmMtMS43LjQtNCAuNy02IC43LTQuMiAwLTcuNC0xLjQtNy40LTUuMiAwLTMuNCAzLTUgNy44LTVoMS44di0xLjV6bTAgMy44aC0xLjZjLTIuNiAwLTQuMy44LTQuMyAyLjVzMS42IDIuMyA0IDIuM2gydi01em02LjQgM2MxLjYgMSAzLjQgMS44IDUgMS44IDEuOCAwIDMtLjYgMy0yIDAtMS4zLTEtMS44LTMuMi0yLjQtMy41LS44LTUtMi4yLTUtNSAwLTMuNSAyLjYtNS4yIDYtNS4yIDIgMCAzLjQuNCA0LjggMS4zdjMuNGMtMS41LTEtMy0xLjctNC43LTEuNy0xLjYgMC0yLjUuOC0yLjUgMiAwIDEgLjcgMS41IDIuNyAyIDMuOCAxIDUuNSAyLjMgNS41IDUuNCAwIDMuNi0yLjcgNS4yLTYuNCA1LjItMiAwLTQtLjUtNS4yLTEuNHYtMy41em0xNi43LTNjLjIgMyAyLjggNC42IDUuNCA0LjYgMi40IDAgNC0uNiA1LjctMS43djMuM2MtMS41IDEtMy44IDEuNi02IDEuNi01LjIgMC04LjctMy4zLTguNy04LjcgMC01LjMgMy41LTkgOC05IDUgMCA3LjMgMy4zIDcuMyA4djEuOGgtMTEuN3ptOC4yLTIuNmMwLTIuNi0xLjQtNC0zLjgtNC0yLjIgMC0zLjggMS41LTQuMyA0aDh6XCIvPlxuICA8L1N2Zz5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ29tcGFueUxvZ29zLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCByZW0gZnJvbSAnLi4vdXRpbHMvcmVtJ1xuaW1wb3J0IHsgdmlvbGV0UmVkIH0gZnJvbSAnLi4vdXRpbHMvY29sb3JzJ1xuaW1wb3J0IHsgaGVhZGVyRm9udCB9IGZyb20gJy4uL3V0aWxzL2ZvbnRzJ1xuXG5leHBvcnQgY29uc3QgTGFiZWxHcm91cCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogJHtyZW0oMyl9O1xuYFxuXG5jb25zdCBMYWJlbCA9IHN0eWxlZC5zbWFsbGBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAke3Zpb2xldFJlZH07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LWZhbWlseTogJHtoZWFkZXJGb250fTtcbiAgYm9yZGVyLXJhZGl1czogJHtyZW0oMyl9O1xuICBwYWRkaW5nOiAke3JlbSgxKX0gJHtyZW0oNSl9O1xuICBtYXJnaW4tbGVmdDogMC40cmVtO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9MYWJlbC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCByZW0gZnJvbSAnLi4vLi4vdXRpbHMvcmVtJ1xuaW1wb3J0IHsgbmF2YmFySGVpZ2h0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2l6ZXMnXG5pbXBvcnQgeyBwYWxlR3JleSB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbG9ycydcbmltcG9ydCB7IG1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJ1xuaW1wb3J0IHsgQ2xvc2VJY29uLCBGb2xkSWNvbiwgQXJyb3dJY29uIH0gZnJvbSAnLi9OYXZJY29ucydcbmltcG9ydCBMaW5rIGZyb20gJy4uL0xpbmsnXG5pbXBvcnQgTmF2TGlua3MgZnJvbSAnLi9OYXZMaW5rcydcbmltcG9ydCBTb2NpYWwgZnJvbSAnLi9Tb2NpYWwnXG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgTmF2U2VwYXJhdG9yIGZyb20gJy4vTmF2U2VwYXJhdG9yJ1xuaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICcuL05hdkJ1dHRvbidcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJHttb2JpbGUoY3NzYFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAke3JlbShuYXZiYXJIZWlnaHQpfTtcbiAgYCl9XG5gXG5cbmNvbnN0IFNlY29uZGFyeU1lbnUgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogJHtyZW0obmF2YmFySGVpZ2h0KX07XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuXG4gICR7cCA9PiBwLm9wZW4gPyBjc3NgXG4gICAgaGVpZ2h0OiAke3JlbShuYXZiYXJIZWlnaHQpfTtcbiAgYCA6IGNzc2BcbiAgICBoZWlnaHQ6IDA7XG4gIGB9XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAke3JlbSgyMCl9O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4xcztcblxuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICBiYWNrZ3JvdW5kOiAke3BhbGVHcmV5fTtcbiAgY29sb3I6ICM4Njg2ODY7XG5gXG5cbmNvbnN0IExvZ29MaW5rID0gc3R5bGVkKExpbmspLmF0dHJzKHtcbiAgdW5zdHlsZWQ6IHRydWUsXG4gIGhyZWY6ICcvJyxcbn0pYFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG5gXG5cbmNvbnN0IEFycm93V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzO1xuXG4gICR7cCA9PiBwLnJvdGF0ZSAmJiBjc3NgXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDU1JTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICBgfVxuYFxuXG5jb25zdCBTZWNvbmRhcnlNZW51SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctcmlnaHQ6ICR7cmVtKDIwKX07XG5gXG5cbmNvbnN0IE1vYmlsZU5hdmJhciA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGlzU2lkZUZvbGRlZCxcbiAgICBpc01vYmlsZU5hdkZvbGRlZCxcbiAgICBvblNpZGVUb2dnbGUsXG4gICAgb25Nb2JpbGVOYXZUb2dnbGUsXG4gICAgc2hvd1NpZGVOYXYsXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICB7c2hvd1NpZGVOYXYgIT09IGZhbHNlICYmIChcbiAgICAgICAgPE5hdkJ1dHRvblxuICAgICAgICAgIGFjdGl2ZT17IWlzU2lkZUZvbGRlZH1cbiAgICAgICAgICBvbkNsaWNrPXtvblNpZGVUb2dnbGV9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNTaWRlRm9sZGVkID8gPEZvbGRJY29uIC8+IDogPENsb3NlSWNvbiAvPn1cbiAgICAgICAgPC9OYXZCdXR0b24+XG4gICAgICApfVxuXG4gICAgICA8TG9nb0xpbms+XG4gICAgICAgIDxMb2dvIGNvbXBhY3QgLz5cbiAgICAgIDwvTG9nb0xpbms+XG5cbiAgICAgIDxOYXZCdXR0b25cbiAgICAgICAgb25DbGljaz17b25Nb2JpbGVOYXZUb2dnbGV9XG4gICAgICAgIGFjdGl2ZT17IWlzTW9iaWxlTmF2Rm9sZGVkfVxuICAgICAgPlxuICAgICAgICA8QXJyb3dXcmFwcGVyIHJvdGF0ZT17IWlzTW9iaWxlTmF2Rm9sZGVkfT5cbiAgICAgICAgICA8QXJyb3dJY29uIC8+XG4gICAgICAgIDwvQXJyb3dXcmFwcGVyPlxuICAgICAgPC9OYXZCdXR0b24+XG5cbiAgICAgIDxTZWNvbmRhcnlNZW51IG9wZW49eyFpc01vYmlsZU5hdkZvbGRlZH0+XG4gICAgICAgIDxOYXZMaW5rcyAvPlxuICAgICAgICA8TmF2U2VwYXJhdG9yIC8+XG4gICAgICAgIDxTZWNvbmRhcnlNZW51SXRlbT5cbiAgICAgICAgICA8U29jaWFsIC8+XG4gICAgICAgIDwvU2Vjb25kYXJ5TWVudUl0ZW0+XG4gICAgICA8L1NlY29uZGFyeU1lbnU+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU5hdmJhclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvTW9iaWxlTmF2YmFyLmpzIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9yZW0nXG5pbXBvcnQgeyBuYXZiYXJIZWlnaHQgfSBmcm9tICcuLi8uLi91dGlscy9zaXplcydcbmltcG9ydCB7IHJlc2V0SW5wdXQgfSBmcm9tICcuLi8uLi91dGlscy9mb3JtJ1xuXG5jb25zdCBOYXZCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAke3Jlc2V0SW5wdXR9XG5cbiAgZmxleDogMCAwIGF1dG87XG4gIG1pbi13aWR0aDogJHtyZW0obmF2YmFySGVpZ2h0KX07XG4gIGhlaWdodDogJHtyZW0obmF2YmFySGVpZ2h0KX07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cCA9PiBwLmFjdGl2ZSAmJiBjc3NgXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgYH1cblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6ICR7cmVtKDIpfSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogJHtyZW0oMil9O1xuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJ1dHRvblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvTmF2QnV0dG9uLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgU3ZnID0gc3R5bGVkLnN2Z2BcbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICBwYXRoIHtcbiAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENsb3NlSWNvbiA9ICgpID0+IChcbiAgPFN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNVwiIGhlaWdodD1cIjE1XCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8dGl0bGU+Y2xvc2U8L3RpdGxlPlxuICAgIDx1c2UgZmlsbD1cIiNGRkZcIiB4bGlua0hyZWY9XCIjY2xvc2VcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxKVwiIC8+XG4gICAgPGRlZnM+XG4gICAgICA8cGF0aCBpZD1cImNsb3NlXCIgZD1cIk0tLjcuN2wxMyAxMyAxLjQtMS40LTEzLTEzTC0uNy43em0xMy0xLjRsLTEzIDEzIDEuNCAxLjQgMTMtMTMtMS40LTEuNHpcIi8+XG4gICAgPC9kZWZzPlxuICA8L1N2Zz5cbilcblxuZXhwb3J0IGNvbnN0IEZvbGRJY29uID0gKCkgPT4gKFxuICA8U3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE3XCIgaGVpZ2h0PVwiMTRcIiB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiPlxuICAgIDx0aXRsZT5mb2xkPC90aXRsZT5cbiAgICA8dXNlIGZpbGw9XCIjRkZGXCIgeGxpbmtIcmVmPVwiI2ZvbGRcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAxKVwiLz5cbiAgICA8ZGVmcz5cbiAgICAgIDxwYXRoIGlkPVwiZm9sZFwiIGQ9XCJNMCAxaDE3di0ySDB2MnptMTcgNEgwdjJoMTdWNXpNMCAxM2gxN3YtMkgwdjJ6XCIvPlxuICAgIDwvZGVmcz5cbiAgPC9Tdmc+XG4pXG5cbmV4cG9ydCBjb25zdCBBcnJvd0ljb24gPSAoKSA9PiAoXG4gIDxTdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTJcIiBoZWlnaHQ9XCI4XCIgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8dGl0bGU+YXJyb3cgZG93bjwvdGl0bGU+XG4gICAgPHVzZSBmaWxsPVwiI0ZGRlwiIHhsaW5rSHJlZj1cIiNtZW51QXJyb3dcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxKVwiLz5cbiAgICA8ZGVmcz5cbiAgICAgIDxwYXRoIGlkPVwibWVudUFycm93XCIgZD1cIk01IDVsLS43LjcuNy43LjctLjdMNSA1ek05LjMtLjdsLTUgNSAxLjQgMS40IDUtNUw5LjMtLjd6bS0zLjYgNWwtNS01TC0uNy43bDUgNSAxLjQtMS40elwiLz5cbiAgICA8L2RlZnM+XG4gIDwvU3ZnPlxuKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9OYXYvTmF2SWNvbnMuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHJlbSBmcm9tICcuLi8uLi91dGlscy9yZW0nXG5pbXBvcnQgeyB2aW9sZXRSZWQgfSBmcm9tICcuLi8uLi91dGlscy9jb2xvcnMnXG5pbXBvcnQgeyBuYXZiYXJIZWlnaHQgfSBmcm9tICcuLi8uLi91dGlscy9zaXplcydcbmltcG9ydCB7IGhlYWRlckZvbnQgfSBmcm9tICcuLi8uLi91dGlscy9mb250cydcbmltcG9ydCB7IG1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluaydcbmltcG9ydCBOYXZMaW5rcyBmcm9tICcuL05hdkxpbmtzJ1xuaW1wb3J0IFNvY2lhbCBmcm9tICcuL1NvY2lhbCdcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbydcbmltcG9ydCBNb2JpbGVOYXZiYXIgZnJvbSAnLi9Nb2JpbGVOYXZiYXInXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQubmF2YFxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDM7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogJHtyZW0obmF2YmFySGVpZ2h0KX07XG5cbiAgZm9udC1mYW1pbHk6ICR7aGVhZGVyRm9udH07XG4gIGZvbnQtc2l6ZTogJHtyZW0oMTUpfTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50cmFuc3BhcmVudCA/ICd0cmFuc3BhcmVudCcgOiB2aW9sZXRSZWR9O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDMwMG1zIGVhc2Utb3V0O1xuICBjb2xvcjogd2hpdGU7XG5gXG5cbmNvbnN0IE5vcm1hbE5hdmJhciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMCAke3JlbSgyMCl9O1xuXG4gICR7bW9iaWxlKGNzc2BcbiAgICBkaXNwbGF5OiBub25lO1xuICBgKX1cbmBcblxuY29uc3QgU3RhcnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYFxuXG5jb25zdCBFbmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbmBcblxuY29uc3QgTG9nb0xpbmsgPSBzdHlsZWQoTGluaykuYXR0cnMoe1xuICB1bnN0eWxlZDogdHJ1ZSxcbiAgaHJlZjogJy8nLFxufSlgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAke3JlbSgzNSl9O1xuYFxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9uU2lkZVRvZ2dsZSxcbiAgICAgIG9uTW9iaWxlTmF2VG9nZ2xlLFxuICAgICAgaXNTaWRlRm9sZGVkLFxuICAgICAgaXNNb2JpbGVOYXZGb2xkZWQsXG4gICAgICBzaG93U2lkZU5hdixcbiAgICAgIHRyYW5zcGFyZW50LFxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgdHJhbnNwYXJlbnQ9e3RyYW5zcGFyZW50fT5cbiAgICAgICAgPE5vcm1hbE5hdmJhcj5cbiAgICAgICAgICA8U3RhcnRXcmFwcGVyPlxuICAgICAgICAgICAgPExvZ29MaW5rPlxuICAgICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgICAgPC9Mb2dvTGluaz5cblxuICAgICAgICAgICAgPE5hdkxpbmtzIC8+XG4gICAgICAgICAgPC9TdGFydFdyYXBwZXI+XG5cbiAgICAgICAgICA8RW5kV3JhcHBlcj5cbiAgICAgICAgICAgIDxTb2NpYWwgLz5cbiAgICAgICAgICA8L0VuZFdyYXBwZXI+XG4gICAgICAgIDwvTm9ybWFsTmF2YmFyPlxuXG4gICAgICAgIDxNb2JpbGVOYXZiYXJcbiAgICAgICAgICBpc1NpZGVGb2xkZWQ9e2lzU2lkZUZvbGRlZH1cbiAgICAgICAgICBpc01vYmlsZU5hdkZvbGRlZD17aXNNb2JpbGVOYXZGb2xkZWR9XG4gICAgICAgICAgb25TaWRlVG9nZ2xlPXtvblNpZGVUb2dnbGV9XG4gICAgICAgICAgb25Nb2JpbGVOYXZUb2dnbGU9e29uTW9iaWxlTmF2VG9nZ2xlfVxuICAgICAgICAgIHNob3dTaWRlTmF2PXtzaG93U2lkZU5hdn1cbiAgICAgICAgLz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi9OYXZiYXIuanMiLCJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3JlbSdcbmltcG9ydCB7IG1vYmlsZSB9IGZyb20gJy4uLy4uL3V0aWxzL21lZGlhJ1xuaW1wb3J0IHsgcGFsZUdyZXkgfSBmcm9tICcuLi8uLi91dGlscy9jb2xvcnMnXG5pbXBvcnQgeyBzaWRlYmFyV2lkdGgsIG5hdmJhckhlaWdodCB9IGZyb20gJy4uLy4uL3V0aWxzL3NpemVzJ1xuaW1wb3J0IHsgaGVhZGVyRm9udCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZvbnRzJ1xuaW1wb3J0IGNhcHR1cmVTY3JvbGwgZnJvbSAnLi4vQ2FwdHVyZVNjcm9sbCdcblxuY29uc3QgU2lkZWJhciA9IHN0eWxlZC5uYXZgXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBkaXNwbGF5OiBibG9jaztcbiAgei1pbmRleDogMTtcbiAgZm9udC1mYW1pbHk6ICR7aGVhZGVyRm9udH07XG5cbiAgbGVmdDogMDtcbiAgdG9wOiAke3JlbShuYXZiYXJIZWlnaHQpfTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogYXV0bztcbiAgd2lkdGg6ICR7cmVtKHNpZGViYXJXaWR0aCl9O1xuICBiYWNrZ3JvdW5kOiAke3BhbGVHcmV5fTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLW91dDtcblxuICAke21vYmlsZShjc3NgXG4gICAgJHtwID0+IHAuaXNGb2xkZWQgPyBjc3NgXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoJHtyZW0oLXNpZGViYXJXaWR0aCl9KTtcbiAgICBgOiBgYH1cbiAgYCl9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGNhcHR1cmVTY3JvbGwoU2lkZWJhcilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2L1NpZGViYXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5pbXBvcnQgcmVtIGZyb20gJy4uLy4uL3V0aWxzL3JlbSdcbmltcG9ydCB0aXRsZVRvRGFzaCBmcm9tICcuLi8uLi91dGlscy90aXRsZVRvRGFzaCdcbmltcG9ydCB7IHBhZ2VzIH0gZnJvbSAnLi4vLi4vcGFnZXMvZG9jcy5qc29uJ1xuaW1wb3J0IExpbmssIHsgU3R5bGVkTGluayB9IGZyb20gJy4uL0xpbmsnXG5cbmNvbnN0IE1lbnVJbm5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAke3JlbSgyNSl9O1xuYFxuXG5jb25zdCBUb3BMZXZlbExpbmsgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAke3JlbSgxMCl9ICR7cmVtKDQwKX07XG5gXG5cbmNvbnN0IFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tYm90dG9tOiAke3JlbSgyMCl9O1xuYFxuXG5jb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDRgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46ICR7cmVtKDEwKX0gJHtyZW0oNDApfTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbmBcblxuY29uc3QgU3ViU2VjdGlvbiA9IHN0eWxlZC5oNWBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogJHtyZW0oMTApfSAke3JlbSg0MCl9ICR7cmVtKDEwKX0gJHtyZW0oNTUpfTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5gXG5cbmNsYXNzIEZvbGRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogZmFsc2UsXG4gIH1cblxuICB0b2dnbGVTdWJTZWN0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW4gfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0aGlzLnByb3BzLmlzT3BlbkRlZmF1bHQgfSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogbmV4dFByb3BzLmlzT3BlbkRlZmF1bHQgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBjb25zdCB7IGNoaWxkcmVuLCBpc09wZW5EZWZhdWx0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nXG4gICAgICA/IGNoaWxkcmVuKHsgcm9vdFByb3BzOiBwcm9wcywgdG9nZ2xlU3ViU2VjdGlvbnM6IHRoaXMudG9nZ2xlU3ViU2VjdGlvbnMsIGlzT3BlbiB9KVxuICAgICAgOiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERvY3NTaWRlYmFyTWVudSA9ICh7IG9uUm91dGVDaGFuZ2UgfSkgPT4gKFxuICA8TWVudUlubmVyPlxuICAgIHtcbiAgICAgIHBhZ2VzLm1hcCgoeyB0aXRsZSwgcGF0aG5hbWUsIHNlY3Rpb25zIH0pID0+IChcbiAgICAgICAgICA8Rm9sZGVyXG4gICAgICAgICAgICBrZXk9e3RpdGxlfVxuICAgICAgICAgICAgaXNPcGVuRGVmYXVsdD17XG4gICAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICAgICAgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gYC9kb2NzLyR7cGF0aG5hbWV9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHtcbiAgICAgICAgICAgICAgcm9vdFByb3BzLFxuICAgICAgICAgICAgICB0b2dnbGVTdWJTZWN0aW9ucyxcbiAgICAgICAgICAgICAgaXNPcGVuLFxuICAgICAgICAgICAgfSkgPT4gKFxuICAgICAgICAgICAgICA8U2VjdGlvbiB7Li4ucm9vdFByb3BzfSBvbkNsaWNrPXtvblJvdXRlQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlIG9uQ2xpY2s9e3RvZ2dsZVN1YlNlY3Rpb25zfT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvZG9jcy8ke3BhdGhuYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uVGl0bGU+XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpc09wZW4gJiYgc2VjdGlvbnMubWFwKCh7IHRpdGxlIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPFN1YlNlY3Rpb24ga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbmsgaHJlZj17YC9kb2NzLyR7cGF0aG5hbWV9IyR7dGl0bGVUb0Rhc2godGl0bGUpfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdWJTZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZvbGRlcj5cbiAgICAgICkpXG4gICAgfVxuICA8L01lbnVJbm5lcj5cbilcblxuZnVuY3Rpb24gZ2V0U2VjdGlvblBhdGgocGFyZW50UGF0aG5hbWUsIHRpdGxlKSB7XG4gIHJldHVybiBgJHtwYXJlbnRQYXRobmFtZSB8fCAnJ30jJHt0aXRsZVRvRGFzaCh0aXRsZSl9YFxufVxuXG5mdW5jdGlvbiBpc0ZvbGRlck9wZW4oY3VycmVudEhyZWYsIHsgcGF0aG5hbWUsIHRpdGxlLCBzZWN0aW9ucyB9KSB7XG4gIHJldHVybiAoXG4gICAgc2VjdGlvbnMucmVkdWNlKChzdW0sIHYpID0+IChcbiAgICAgIHN1bSB8fCB3aW5kb3cubG9jYXRpb24uaHJlZi5lbmRzV2l0aChnZXRTZWN0aW9uUGF0aChwYXRobmFtZSwgdi50aXRsZSkpXG4gICAgKSwgZmFsc2UpIHx8XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYuZW5kc1dpdGgocGF0aG5hbWUgfHwgJyMnICsgdGl0bGVUb0Rhc2godGl0bGUpKVxuICApXG59XG5cbmV4cG9ydCBjb25zdCBTaW1wbGVTaWRlYmFyTWVudSA9ICh7IG9uUm91dGVDaGFuZ2UsIHBhZ2VzID0gW10gfSkgPT4gKFxuICA8TWVudUlubmVyPlxuICAgIHtcbiAgICAgIHBhZ2VzLm1hcCgoeyB0aXRsZSwgcGF0aG5hbWUsIHNlY3Rpb25zLCBocmVmIH0pID0+IHtcbiAgICAgICAgaWYgKCFzZWN0aW9ucykge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8VG9wTGV2ZWxMaW5rIGtleT17dGl0bGV9PlxuICAgICAgICAgICAgICA8U3R5bGVkTGluayBocmVmPXtwYXRobmFtZSB8fCAnIycgKyAoaHJlZiB8fCB0aXRsZVRvRGFzaCh0aXRsZSkpfT5cbiAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgICAgIDwvVG9wTGV2ZWxMaW5rPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZvbGRlclxuICAgICAgICAgICAga2V5PXt0aXRsZX1cbiAgICAgICAgICAgIGlzT3BlbkRlZmF1bHQ9e1xuICAgICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgICAgICAgIGlzRm9sZGVyT3Blbih3aW5kb3cubG9jYXRpb24uaHJlZiwgeyB0aXRsZSwgcGF0aG5hbWUsIHNlY3Rpb25zIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyh7XG4gICAgICAgICAgICAgIHJvb3RQcm9wcyxcbiAgICAgICAgICAgICAgdG9nZ2xlU3ViU2VjdGlvbnMsXG4gICAgICAgICAgICAgIGlzT3BlbixcbiAgICAgICAgICAgIH0pID0+IChcbiAgICAgICAgICAgICAgPFNlY3Rpb24gey4uLnJvb3RQcm9wc30gb25DbGljaz17b25Sb3V0ZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSBvbkNsaWNrPXt0b2dnbGVTdWJTZWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRobmFtZSB8fCAnIycgKyB0aXRsZVRvRGFzaCh0aXRsZSl9PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uVGl0bGU+XG5cbiAgICAgICAgICAgICAgICB7aXNPcGVuICYmIHNlY3Rpb25zLm1hcCgoeyB0aXRsZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8U3ViU2VjdGlvbiBrZXk9e3RpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZExpbmsgdW5zdHlsZWQgaHJlZj17Z2V0U2VjdGlvblBhdGgocGF0aG5hbWUsIHRpdGxlKX0+XG4gICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZExpbms+XG4gICAgICAgICAgICAgICAgICA8L1N1YlNlY3Rpb24+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvU2VjdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Gb2xkZXI+XG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgfVxuICA8L01lbnVJbm5lcj5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTmF2L1NpZGViYXJNZW51cy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL1NpZGViYXInXG5pbXBvcnQgeyBEb2NzU2lkZWJhck1lbnUsIFNpbXBsZVNpZGViYXJNZW51IH0gZnJvbSAnLi9TaWRlYmFyTWVudXMnXG5cbmNvbnN0IE5hdiA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIGlzU2lkZUZvbGRlZCxcbiAgICBpc01vYmlsZU5hdkZvbGRlZCxcbiAgICBvblNpZGVUb2dnbGUsXG4gICAgb25Nb2JpbGVOYXZUb2dnbGUsXG4gICAgb25Sb3V0ZUNoYW5nZSxcbiAgICBzaG93U2lkZU5hdixcbiAgICB1c2VEb2NzU2lkZWJhck1lbnUsXG4gICAgdHJhbnNwYXJlbnQsXG4gICAgcGFnZXMsXG4gIH0gPSBwcm9wc1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxOYXZiYXJcbiAgICAgICAgc2hvd1NpZGVOYXY9e3Nob3dTaWRlTmF2fVxuICAgICAgICB0cmFuc3BhcmVudD17dHJhbnNwYXJlbnR9XG4gICAgICAgIGlzU2lkZUZvbGRlZD17aXNTaWRlRm9sZGVkfVxuICAgICAgICBpc01vYmlsZU5hdkZvbGRlZD17aXNNb2JpbGVOYXZGb2xkZWR9XG4gICAgICAgIG9uU2lkZVRvZ2dsZT17b25TaWRlVG9nZ2xlfVxuICAgICAgICBvbk1vYmlsZU5hdlRvZ2dsZT17b25Nb2JpbGVOYXZUb2dnbGV9XG4gICAgICAvPlxuXG4gICAgICB7c2hvd1NpZGVOYXYgIT09IGZhbHNlICYmIChcbiAgICAgICAgPFNpZGViYXIgaXNGb2xkZWQ9e2lzU2lkZUZvbGRlZH0+XG5cbiAgICAgICAgICB7dXNlRG9jc1NpZGViYXJNZW51ICE9PSBmYWxzZSA/XG4gICAgICAgICAgICA8RG9jc1NpZGViYXJNZW51IG9uUm91dGVDaGFuZ2U9e29uUm91dGVDaGFuZ2V9IC8+IDpcbiAgICAgICAgICAgIDxTaW1wbGVTaWRlYmFyTWVudVxuICAgICAgICAgICAgICBvblJvdXRlQ2hhbmdlPXtvblJvdXRlQ2hhbmdlfVxuICAgICAgICAgICAgICBwYWdlcz17cGFnZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIH1cblxuICAgICAgICA8L1NpZGViYXI+XG4gICAgICApfVxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05hdi9pbmRleC5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCByZW0gZnJvbSAnLi4vdXRpbHMvcmVtJ1xuaW1wb3J0IHsgbGlnaHRWaW9sZXRSZWQsIHZpb2xldFJlZCB9IGZyb20gJy4uL3V0aWxzL2NvbG9ycydcbmltcG9ydCB7IGJvZHlGb250LCBoZWFkZXJGb250IH0gZnJvbSAnLi4vdXRpbHMvZm9udHMnXG5cbmNvbnN0IE5vdGUgPSBzdHlsZWQuZGl2YFxuICBmb250LWZhbWlseTogJHtib2R5Rm9udH07XG4gIGJhY2tncm91bmQ6ICR7bGlnaHRWaW9sZXRSZWR9O1xuICBwYWRkaW5nOiAke3JlbSg3KX0gJHtyZW0oMTApfSAke3JlbSg1KX0gJHtyZW0oMTQpfTtcbiAgYm9yZGVyLWxlZnQ6ICR7cmVtKDQpfSBzb2xpZCAke3Zpb2xldFJlZH07XG4gIG1hcmdpbjogJHtyZW0oNDUpfSAwO1xuICBib3JkZXItcmFkaXVzOiAke3JlbSgzKX07XG5cbiAgPiBwIHtcbiAgICBtYXJnaW46IDAgMCAke3JlbSg1KX0gMDtcbiAgfVxuYFxuXG5jb25zdCBOb3RlTGFiZWwgPSBzdHlsZWQuc3Ryb25nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6ICR7aGVhZGVyRm9udH07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBtYXJnaW4tYm90dG9tOiAke3JlbSg3KX07XG5gXG5cbmNvbnN0IE5vdGVXcmFwcGVyID0gKHsgbGFiZWwgPSAnTm90ZScsIGNoaWxkcmVuIH0pID0+IChcbiAgPE5vdGU+XG4gICAgPE5vdGVMYWJlbD57bGFiZWx9PC9Ob3RlTGFiZWw+XG4gICAge2NoaWxkcmVufVxuICA8L05vdGU+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5vdGVXcmFwcGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL05vdGUuanMiLCJpbXBvcnQgTmV4dEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8vIGNvbnN0IENyZWF0ZU1hcmt1cCA9IHRleHQgPT4gKHsgX19odG1sOiB0ZXh0IH0pXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlb0hlYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGl0bGUgPSAnc3R5bGVkLWNvbXBvbmVudHMnLFxuICAgICAgZGVzY3JpcHRpb24gPSAnVmlzdWFsIHByaW1pdGl2ZXMgZm9yIHRoZSBjb21wb25lbnQgYWdlLiBVc2UgdGhlIGJlc3QgYml0cyBvZiBFUzYgYW5kIENTUyB0byBzdHlsZSB5b3VyIGFwcHMgd2l0aG91dCBzdHJlc3Mg8J+ShScsXG4gICAgICBpbWFnZSA9ICdodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vc3RhdGljL2F0b20ucG5nJyxcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2Fub25pY2FsLFxuICAgICAgdXJsID0gJycsXG4gICAgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwcm9wZXJDYW5vbmljYWwgPSBjYW5vbmljYWwgfHwgdXJsXG4gICAgcmV0dXJuIChcbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC90aXRsZT5cblxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cblxuICAgICAgICB7LyogT3BlbiBHcmFwaCAqL31cbiAgICAgICAgPGxpbmsgaXRlbVByb3A9XCJ1cmxcIiBocmVmPVwiaHR0cHM6Ly9zdHlsZWQtY29tcG9uZW50cy5jb20vXCIgLz5cbiAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJuYW1lXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIGl0ZW1Qcm9wPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgaXRlbVByb3A9XCJpbWFnZVwiIGNvbnRlbnQ9XCIvc3RhdGljL2F0b20ucG5nXCIgLz5cblxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJnb29nbGUtc2l0ZS12ZXJpZmljYXRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJsV250WVc2QVdWTWNTaFNJV0xtT3pLcjhXeWVrMlRSLXp1UW42X1hHdV9jXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3RpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2NTJcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjY1MlwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwic3R5bGVkLWNvbXBvbmVudHNcIiAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQG14c3RiclwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17dGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQG14c3RiclwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1hZ2V9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e3VybH0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidHdpdHRlcjppbWFnZTpzcmNcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL3N0eWxlZC1jb21wb25lbnRzLmNvbS9zdGF0aWMvbWV0YS5wbmdcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tJHtwcm9wZXJDYW5vbmljYWx9YH1cbiAgICAgICAgLz5cblxuICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvc3RhdGljL2F0b20ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvc3RhdGljL2F0b20ucG5nXCIgLz5cbiAgICAgIDwvTmV4dEhlYWQ+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1Nlb0hlYWQuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50J1xuXG5jbGFzcyBXaXRoSXNTY3JvbGxlZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGlzU2Nyb2xsZWQ6IGZhbHNlXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaW52YXJpYW50KHR5cGVvZiB0aGlzLnByb3BzLmNoaWxkcmVuID09PSAnZnVuY3Rpb24nLCAnVGhlIGNoaWxkcmVuIHByb3AgaXMgZXhwZWN0ZWQgdG8gYmUgYSBmdW5jdGlvbicpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBMZWFybiBtb3JlIGFib3V0IGhvdyB7IHBhc3NpdmU6IHRydWUgfSBpbXByb3ZlcyBzY3JvbGxpbmcgcGVyZm9ybWFuY2VcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lciNJbXByb3Zpbmdfc2Nyb2xsaW5nX3BlcmZvcm1hbmNlX3dpdGhfcGFzc2l2ZV9saXN0ZW5lcnNcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gIH1cblxuICBvblNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBpc1Njcm9sbGVkID0gKHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCkgPiAwXG5cbiAgICBpZiAoaXNTY3JvbGxlZCAhPT0gdGhpcy5zdGF0ZS5pc1Njcm9sbGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNTY3JvbGxlZCB9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLnN0YXRlKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhJc1Njcm9sbGVkXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1dpdGhJc1Njcm9sbGVkLmpzIiwiLypcbiAqIFRoaXMgaXMgdG90YWxseSBhbiBhZGFwdGVkIHZlcnNpb24gb2YgcmVhY3QtbWFya2luZ3MsIGJ1dCB3ZSBuZWVkIHRvIGJlIGFibGVcbiAqIHRvIHJlbmRlciBjdXN0b20gZWxlbWVudHMgZm9yIGVhY2ggbWFya2Rvd24gZmVhdHVyZSB0byBtYWtlIGNvbnRyaWJ1dGlvbnMgcmVhc29uYWJseSBlYXN5XG4gKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9UaGlua21pbGwvcmVhY3QtbWFya2luZ3NcbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJ2NvbW1vbm1hcmsnXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnY29tbW9ubWFyay1yZWFjdC1yZW5kZXJlcidcbmltcG9ydCBzdHJpcEluZGVudCBmcm9tICcuLi91dGlscy9zdHJpcEluZGVudCdcblxuaW1wb3J0IGVsZW1lbnRUb1RleHQgZnJvbSAnLi4vdXRpbHMvZWxlbWVudFRvVGV4dCdcbmltcG9ydCB0aXRsZVRvRGFzaCBmcm9tICcuLi91dGlscy90aXRsZVRvRGFzaCdcblxuLy8gQ29tcG9uZW50cyB0byBiZSB1c2VkIGFzIHJlbmRlcmVyc1xuaW1wb3J0IENvZGUgZnJvbSAnLi9Db2RlJ1xuaW1wb3J0IExpdmVFZGl0IGZyb20gJy4vTGl2ZUVkaXQnXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gJy4vQ29kZUJsb2NrJ1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9Ob3RlJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuL0xheW91dCdcbmltcG9ydCBBbmNob3IgZnJvbSAnLi9BbmNob3InXG5pbXBvcnQgTGFiZWwsIHsgTGFiZWxHcm91cCB9IGZyb20gJy4vTGFiZWwnXG5cbmNvbnN0IFBMQUNFSE9MREVSID0gJ1RISVNfSVNfQV9CVUdfUExFQVNFX09QRU5fQU5fSVNTVUVfSU5fT1VSX1dFQlNJVEVfUkVQTydcblxuY29uc3QgaXNWYWxpZCA9IG5vZGUgPT4ge1xuICBjb25zdCB3YWxrZXIgPSBub2RlLndhbGtlcigpXG4gIGxldCBldmVudFxuXG4gIHdoaWxlIChldmVudCA9IHdhbGtlci5uZXh0KCkpIHtcbiAgICBjb25zdCB7IG5vZGUsIGVudGVyaW5nIH0gPSBldmVudFxuXG4gICAgaWYgKFxuICAgICAgIWVudGVyaW5nIHx8XG4gICAgICAhbm9kZS5saXRlcmFsIHx8XG4gICAgICBub2RlLmxpdGVyYWwuaW5kZXhPZihQTEFDRUhPTERFUikgPT09IC0xIHx8XG4gICAgICAoXG4gICAgICAgIG5vZGUudHlwZSA9PT0gJ3RleHQnICYmXG4gICAgICAgIG5vZGUucGFyZW50LnR5cGUgPT09ICdwYXJhZ3JhcGgnICYmXG4gICAgICAgIG5vZGUubGl0ZXJhbCA9PT0gUExBQ0VIT0xERVJcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5jb25zdCBtZCA9IChzdHJpbmdzLCAuLi52YWx1ZXMpID0+IHtcbiAgLy8gQ2hlY2sgaWYgaXQncyBjYWxsZWQgYXMgYSBub3JtYWwgZnVuY3Rpb24gb3IgYXMgYSB0YWdnZWQgZnVuY3Rpb25cbiAgY29uc3QgaW5wdXQgPSB0eXBlb2Ygc3RyaW5ncyA9PT0gJ3N0cmluZycgP1xuICAgIHN0cmlwSW5kZW50KHN0cmluZ3MpIDpcbiAgICBzdHJpcEluZGVudChzdHJpbmdzLmpvaW4oUExBQ0VIT0xERVIpKVxuXG4gIGNvbnN0IGlkUHJlZml4ID0gdHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2YWx1ZXNbMF0gPT09ICdzdHJpbmcnID9cbiAgICB2YWx1ZXNbMF0gKyAnXycgIDogJydcblxuICBjb25zdCBzdGFydGluZ0xldmVsID0gdHlwZW9mIHN0cmluZ3MgPT09ICdzdHJpbmcnID9cbiAgICB2YWx1ZXNbMV0gOiBudWxsXG5cbiAgY29uc3QgcGFyc2VyID0gbmV3IFBhcnNlcigpXG4gIGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShpbnB1dClcblxuICBpZiAoIWlzVmFsaWQoYXN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGludGVycG9sYXRlIFJlYWN0IGVsZW1lbnRzIG5vbi1ibG9jayBwb3NpdGlvbnMnKVxuICB9XG5cbiAgbGV0IHRvcExldmVsSGVhZGluZ1xuXG4gIGNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHtcbiAgICByZW5kZXJlcnM6IHtcbiAgICAgIFBhcmFncmFwaCh7IGNoaWxkcmVuIH0pIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSAmJiBjaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgY2hpbGRyZW5bMF0gPT09IFBMQUNFSE9MREVSKSB8fFxuICAgICAgICAgIGNoaWxkcmVuID09PSBQTEFDRUhPTERFUlxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzLnNoaWZ0KClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8cD57Y2hpbGRyZW59PC9wPlxuICAgICAgfSxcblxuICAgICAgQ29kZSh7IGxpdGVyYWwgfSkge1xuICAgICAgICByZXR1cm4gPENvZGU+e2xpdGVyYWx9PC9Db2RlPlxuICAgICAgfSxcblxuICAgICAgQ29kZUJsb2NrKHsgbGFuZ3VhZ2UsIGxpdGVyYWwgfSkge1xuICAgICAgICBpZiAobGFuZ3VhZ2UgPT09ICdyZWFjdCcpIHtcbiAgICAgICAgICByZXR1cm4gPExpdmVFZGl0IGNvZGU9e2xpdGVyYWx9IG5vSW5saW5lIC8+XG4gICAgICAgIH0gZWxzZSBpZiAobGFuZ3VhZ2UgPT09ICdyZWFjdC1pbmxpbmUnKSB7XG4gICAgICAgICAgcmV0dXJuIDxMaXZlRWRpdCBjb2RlPXtsaXRlcmFsfSAvPlxuICAgICAgICB9IGVsc2UgaWYgKGxhbmd1YWdlID09PSAnc2gnKSB7XG4gICAgICAgICAgcmV0dXJuIDxDb2RlQmxvY2sgY29kZT17bGl0ZXJhbH0gbGFuZ3VhZ2U9XCJiYXNoXCIgLz5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8Q29kZUJsb2NrIGNvZGU9e2xpdGVyYWx9IGxhbmd1YWdlPXtsYW5ndWFnZX0gLz5cbiAgICAgIH0sXG5cbiAgICAgIEJsb2NrUXVvdGUoeyBjaGlsZHJlbiB9KSB7XG4gICAgICAgIHJldHVybiA8Tm90ZT57Y2hpbGRyZW59PC9Ob3RlPlxuICAgICAgfSxcblxuICAgICAgTGluayh7IGhyZWYsIGNoaWxkcmVuIH0pIHtcbiAgICAgICAgcmV0dXJuIDxMaW5rIGhyZWY9e2hyZWZ9IGlubGluZT57Y2hpbGRyZW59PC9MaW5rPlxuICAgICAgfSxcblxuICAgICAgSGVhZGluZyh7IGxldmVsLCBjaGlsZHJlbiB9KSB7XG4gICAgICAgIGlmIChzdGFydGluZ0xldmVsKSB7XG4gICAgICAgICAgdG9wTGV2ZWxIZWFkaW5nID0gdG9wTGV2ZWxIZWFkaW5nIHx8IE1hdGgubWF4KGxldmVsLCAxKVxuICAgICAgICAgIGxldmVsKz0gc3RhcnRpbmdMZXZlbCAtIHRvcExldmVsSGVhZGluZ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxldmVsID09PSAxKSB7XG4gICAgICAgICAgcmV0dXJuIDxUaXRsZT57Y2hpbGRyZW59PC9UaXRsZT5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSBwaXBlIGluZGljYXRlcyBsYWJlbHMgYWZ0ZXIgdGhlIGluaXRpYWwgdGl0bGVcbiAgICAgICAgY29uc3QgW18sIC4uLmxhYmVsc10gPSBlbGVtZW50VG9UZXh0KGNoaWxkcmVuKS5zcGxpdCgnfCcpXG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc3QgcGlwZUluZGV4ID0gY2hpbGQuaW5kZXhPZignfCcpXG4gICAgICAgICAgICByZXR1cm4gcGlwZUluZGV4ID4gLTEgPyBjaGlsZC5zbGljZSgwLCBwaXBlSW5kZXgpIDogY2hpbGRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY2hpbGRcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBoYXNoID0gYCR7aWRQcmVmaXh9JHt0aXRsZVRvRGFzaCh0aXRsZSl9YFxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEFuY2hvciBpZD17aGFzaH0gbGV2ZWw9e2xldmVsfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIHtsYWJlbHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxMYWJlbEdyb3VwPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbC50cmltKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L0xhYmVsR3JvdXA+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQW5jaG9yPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJlci5yZW5kZXIoYXN0KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmltcG9ydCBtZCBmcm9tICdjb21wb25lbnRzL21kJ1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ2NvbXBvbmVudHMvTGF5b3V0J1xuXG5jb25zdCBBbGlnbkNlbnRlciA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuY29uc3QgQmFkZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXJnaW46IDAgMC41ZW0gM2VtO1xuICBoZWlnaHQ6IDEuNWVtO1xuYFxuXG5jb25zdCBFeGFtcGxlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICBtYXJnaW46IDAgMWVtO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHBhbGV2aW9sZXRyZWQ7XG5cbiAgJHtwID0+IHAucHJpbWFyeSAmJiBjc3NgXG4gICAgYmFja2dyb3VuZDogcGFsZXZpb2xldHJlZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIGB9XG5gXG5cbmNvbnN0IFNlY29uZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICBib3JkZXI6IDJweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xuYFxuXG5jb25zdCBIb21lcGFnZUdldHRpbmdTdGFydGVkID0gKCkgPT4gKFxuICA8Q29udGVudCBkYXRhLWUyZS1pZD1cImNvbnRlbnRcIj5cbiAgICA8QWxpZ25DZW50ZXI+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzXCI+XG4gICAgICAgIDxCYWRnZSBzcmM9XCIvcHJveHkvc3RhcnMuc3ZnXCIgYWx0PVwiU3RhcnMgb24gR2l0SHViXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9zdHlsZWQtY29tcG9uZW50c1wiPlxuICAgICAgICA8QmFkZ2Ugc3JjPVwiL3Byb3h5L25wbS12LnN2Z1wiIGFsdD1cIkN1cnJlbnQgdmVyc2lvblwiIC8+XG4gICAgICA8L2E+XG4gICAgICA8QmFkZ2Ugc3JjPVwiL3Byb3h5L2Rvd25sb2Fkcy5zdmdcIiBhbHQ9XCJNb250aGx5IGRvd25sb2Fkc1wiIC8+XG4gICAgICA8QmFkZ2Ugc3JjPVwiL3Byb3h5L3NpemUuc3ZnXCIgYWx0PVwiR3ppcHBlZCBzaXplXCIgLz5cbiAgICAgIDxhIGhyZWY9XCJodHRwczovL3NwZWN0cnVtLmNoYXQvc3R5bGVkLWNvbXBvbmVudHNcIj5cbiAgICAgICAgPEJhZGdlIGFsdD1cIkpvaW4gdGhlIGNvbW11bml0eSBvbiBTcGVjdHJ1bVwiIHNyYz1cImh0dHBzOi8vd2l0aHNwZWN0cnVtLmdpdGh1Yi5pby9iYWRnZS9iYWRnZS5zdmdcIiAvPlxuICAgICAgPC9hPlxuICAgIDwvQWxpZ25DZW50ZXI+XG5cbiAgICB7bWRgXG4gICAgICAjIOW8gOWni1xuICAgICAgIyMg5a6J6KOFXG5cbiAgICAgIOimgeWuieijhSBzdHlsZWQtY29tcG9uZW50cyDor7fov5DooYwgXFxgbnBtIGluc3RhbGwgLS1zYXZlIHN0eWxlZC1jb21wb25lbnRzXFxg44CCXG4gICAgICDov5nlsLHmmK/kvaDmiYDpnIDopoHlgZrnmoTvvIzkvaDnjrDlnKjlj6/ku6XlnKjkvaDnmoTlupTnlKjkuK3kvb/nlKjlroPkuoYhICjlr7nlpLQsIOS4jemcgOimgeaehOW7uuatpemqpCDwn5GMKVxuXG4gICAgICAjIyDkvaDnmoTnrKzkuIDkuKrmoLflvI/ljJbnu4Tku7ZcblxuICAgICAg5YGH6K6+5oKo5oOz6KaB5Yib5bu65LiA5Liq566A5Y2V5LiU5Y+v6YeN55So55qEIFxcYDxCdXR0b24gLz5cXGAg57uE5Lu277yM5Lul5Zyo5pW05Liq5bqU55So56iL5bqP5Lit5L2/55So5a6D44CCXG4gICAgICDlr7nkuo7ov5nkuKrph43opoHnmoTmjInpkq7vvIzlupTor6XmnInkuIDkuKrmraPluLjnmoTniYjmnKzlkozkuIDkuKrlpKflj7fnmoQgXFxgcHJpbWFyeVxcYCDniYjmnKzjgIJcbiAgICAgIOi/meWwseaYr+a4suafk+aXtueahOagt+WtkDoo6L+Z5piv5LiA5Liq5rS755Sf55Sf55qE5L6L5a2Q77yM54K55Ye75a6D5Lus77yBKVxuXG4gICAgICAke1xuICAgICAgPEFsaWduQ2VudGVyPlxuICAgICAgICA8RXhhbXBsZUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7IGFsZXJ0KCdZb3UgY2xpY2tlZCB0aGUgbm9ybWFsIGJ1dHRvbiEnKSB9fT5Ob3JtYWwgYnV0dG9uPC9FeGFtcGxlQnV0dG9uPlxuICAgICAgICA8RXhhbXBsZUJ1dHRvbiBwcmltYXJ5IG9uQ2xpY2s9eygpID0+IHsgYWxlcnQoJ1lvdSBjbGlja2VkIHRoZSBwcmltYXJ5IGJ1dHRvbiEnKSB9fT5QcmltYXJ5IGJ1dHRvbjwvRXhhbXBsZUJ1dHRvbj5cbiAgICAgIDwvQWxpZ25DZW50ZXI+XG4gICAgICB9XG5cbiAgICAgIOmmluWFiO+8jOiuqeaIkeS7rOWvvOWFpSBzdHlsZWQtY29tcG9uZW50cyDlubbliJvlu7rkuIDkuKogXFxgc3R5bGVkLmJ1dHRvblxcYDpcblxuICAgICAgXFxgXFxgXFxganN4XG4gICAgICBpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuICAgICAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvblxcYFxcYDtcbiAgICAgIFxcYFxcYFxcYFxuXG4gICAgICDov5nph4znmoQgXFxgQnV0dG9uXFxgIOWPmOmHj+eOsOWcqOaYr+S4gOS4qiBSZWFjdCDnu4Tku7bvvIzkvaDlj6/ku6Xlg4/kvb/nlKjlhbbku5bku7vkvZUgUmVhY3Qg5LiA5qC35L2/55So5a6D44CCXG4gICAgICDov5nnp43kuI3lr7vluLjnmoTlj43lvJXlj7for63ms5XmmK/kuIDnp43mlrDnmoQgSmF2YVNjcmlwdCDnibnmgKfvvIznp7DkuLrmoIforrDmqKHmnb/lrZfnrKbkuLLjgIJcbiAgICAgIOS9oOefpemBk+WmguS9leeUqOaLrOWPt+adpeiwg+eUqOWHveaVsOWQlz8oXFxgbXlGdW5jKClcXGAp5b6I5aW977yM546w5Zyo5L2g5Lmf5Y+v5Lul6LCD55So5bim5pyJ5Y+N5byV5Y+355qE5Ye95pWw44CCXG4gICAgICDlroPmmK/lpoLkvZXov5DkvZznmoTvvIxb6Kej6YeK5Zyo6L+Z6YeMXSgvZG9jcy9hZHZhbmNlZCN0YWdnZWQtdGVtcGxhdGUtbGl0ZXJhbHMpIOOAglxuXG4gICAgICDlpoLmnpzkvaDnjrDlnKjmuLLmn5PmiJHku6zlj6/niLHnmoTnu4Tku7Yo5Y+q6ZyA5YOP5YW25LuW57uE5Lu2OiBcXGA8QnV0dG9uIC8+XFxgKe+8jOi/meWwseaYr+S9oOW+l+WIsOeahO+8mlxuXG4gICAgICAke1xuICAgICAgPEFsaWduQ2VudGVyPlxuICAgICAgICA8YnV0dG9uPkknbSBhICZsdDtCdXR0b24gLyZndDshPC9idXR0b24+XG4gICAgICA8L0FsaWduQ2VudGVyPlxuICAgICAgfVxuXG4gICAgICDov5nmuLLmn5PkuobkuIDkuKrmjInpkq7vvIHov5nkuI3mmK/kuIDkuKrlvojlpb3nmoTmjInpkq7vvIzlsL3nrqHwn5iV5oiR5Lus5Y+v5Lul5YGa5b6X5pu05aW977yM6K6p5oiR5Lus57uZ5a6D5LiA54K55qC35byP77yM5Y+R5o6Y6ZqQ6JeP5Zyo5YaF6YOo55qE576O5Li977yBXG5cbiAgICAgIFxcYFxcYFxcYGpzeFxuICAgICAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvblxcYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcbiAgICAgIFxcYDtcbiAgICAgIFxcYFxcYFxcYFxuXG4gICAgICAke1xuICAgICAgPEFsaWduQ2VudGVyPlxuICAgICAgICA8U2Vjb25kQnV0dG9uPkknbSBhIHN0eWxlZCAmbHQ7QnV0dG9uIC8mZ3Q7PC9TZWNvbmRCdXR0b24+XG4gICAgICA8L0FsaWduQ2VudGVyPlxuICAgICAgfVxuXG4gICAgICDmraPlpoLkvaDmiYDnnIvliLDnmoTvvIxzdHlsZWQtY29tcG9uZW50cyDlj6/ku6XorqnkvaDlnKjkvaDnmoQgSmF2YVNjcmlwIHTkuK3nvJblhpnlrp7pmYXnmoQgQ1NT44CCXG4gICAgICDov5nmhI/lkbPnnYDkvaDlj6/ku6Xkvb/nlKjlhajpg6jmgqjkvb/nlKjlkozniLHkvb/nlKjnmoQgQ1NTIOeahOeJueaAp++8jOWMheaLrO+8iOS9huS4jemZkOS6ju+8ieWqkuS9k+afpeivou+8jOaJgOacieS8qumAieaLqeWZqO+8jOW1jOWll+etieOAglxuICAgICAg5a6D6L+Y5bCG5qC35byP57uR5a6a5Yiw57uE5Lu277yM6L+Z5YW35pyJ5LiA5Lqb5pyJ6Laj55qE5bGe5oCn44CCXG4gICAgICDvvIjkuobop6Pmm7TlpJrlhbPkuo4gW3N0eWxlZC1jb21wb25lbnRzIOiDjOWQjueahOaAneaDs10oL2RvY3MvYmFzaWNzI21vdGl2YXRpb24p77yJXG5cbiAgICAgIOacgOWQjuS4gOatpeaYr+aIkeS7rOmcgOimgeWumuS5ieS4gOS4quS4u+aMiemSrueahOagt+WtkOOAglxuICAgICAg5Li65LqG5YGa5Yiw6L+Z5LiA54K577yM5oiR5Lus6L+Y5LuOIFxcYHN0eWxlZC1jb21wb25lbnRzXFxgIOWvvOWFpSBcXGB7IGNzcyB9XFxg77yMXG4gICAgICDlubblsIbkuIDkuKrlh73mlbDmj5LlhaXliLDmiJHku6znmoTmqKHmnb/lrZfnrKbkuLLkuK3vvIzor6XlrZfnrKbkuLLooqvkvKDlhaXmiJHku6znmoTnu4Tku7bnmoQgcHJvcHPvvJpcblxuICAgICAgXFxgXFxgXFxganN4XG4gICAgICBpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gc3R5bGVkLWNvbXBvbmVudHNcblxuICAgICAgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvblxcYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gICAgICAgIG1hcmdpbjogMCAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcblxuICAgICAgICBcXCR7cHJvcHMgPT4gcHJvcHMucHJpbWFyeSAmJiBjc3NcXGBcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgXFxgXFx9XG4gICAgICBcXGA7XG4gICAgICBcXGBcXGBcXGBcblxuICAgICAg5LiK6Z2i5Luj56CB6KGo6L6+55qE5piv77yM5b2TIFxcYHByaW1hcnlcXGAg5bGe5oCn6KKr6K6+572u5pe25oiR5Lus5oOz6KaB5re75Yqg5pu05aSa55qEIFxcYGNzc1xcYCDliLDnu4Tku7bkuK3vvIzlnKjov5nnp43mg4XlhrXkuIvvvIzmlLnlj5jog4zmma/lkozpopzoibLjgIJcblxuICAgICAg5bCx6L+Z5qC3LOaIkeS7rOWujOaIkOS6hiHnnIvkuIDkuIvmiJHku6zlrozmiJDnmoTnu4Tku7Y6XG5cbiAgICAgIFxcYFxcYFxcYHJlYWN0XG4gICAgICBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uXFxgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgcGFkZGluZzogMC4yNWVtIDFlbTtcbiAgICAgICAgbWFyZ2luOiAwIDFlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBwYWxldmlvbGV0cmVkO1xuXG4gICAgICAgIFxcJHtwcm9wcyA9PiBwcm9wcy5wcmltYXJ5ICYmIGNzc1xcYFxuICAgICAgICAgIGJhY2tncm91bmQ6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBcXGBcXH1cbiAgICAgIFxcYDtcblxuICAgICAgcmVuZGVyKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b24+Tm9ybWFsIEJ1dHRvbjwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gcHJpbWFyeT5QcmltYXJ5IEJ1dHRvbjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgICBcXGBcXGBcXGBcblxuICAgICAg5LiN6ZSZ5ZOfIPCfmI0g6L+Z5Lmf5piv5LiA5Liq5a6e5pe25pu05paw57yW6L6R5Zmo77yM5omA5Lul6K+35LuU57uG56CU56m25LiA5LiL77yM5Lul5L6/5LqG6Kej5L2/55So5qC35byP5YyW57uE5Lu255qE5oSf6KeJIVxuXG4gICAgICDlrozmiJDkuYvlkI7vvIzor7fmn6XnnItb5paH5qGjXSgvZG9jcynvvIznibnliKvmmK9b5YWl6ZeoXSgvZG9jcy9iYXNpY3MjZ2V0dGluZy1zdGFydGVkKSDpg6jliIbvvIHkuqvlj5flkKfinKhcbiAgICBgfVxuICA8L0NvbnRlbnQ+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlR2V0dGluZ1N0YXJ0ZWRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NlY3Rpb25zL2hvbWVwYWdlLWdldHRpbmctc3RhcnRlZC5qcyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgcmVzZXRJbnB1dCA9IGNzc2BcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuYFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvZm9ybS5qcyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvc3RyaXAtaW5kZW50XG5cbmNvbnN0IHN0cmlwSW5kZW50ID0gc3RyID0+IHtcbiAgY29uc3QgbWF0Y2ggPSBzdHIubWF0Y2goL15bIFxcdF0qKD89XFxTKS9nbSlcblxuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIHN0clxuICB9XG5cbiAgLy8gVE9ETzogVXNlIHNwcmVhZCBvcGVyYXRvciB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDZcbiAgY29uc3QgaW5kZW50ID0gTWF0aC5taW4oLi4ubWF0Y2gubWFwKHggPT4geC5sZW5ndGgpKVxuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoYF5bIFxcXFx0XXske2luZGVudH19YCwgJ2dtJylcblxuICByZXR1cm4gaW5kZW50ID4gMCA/IHN0ci5yZXBsYWNlKHJlLCAnJykgOiBzdHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaXBJbmRlbnRcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3N0cmlwSW5kZW50LmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFFQTtBQUNBOzs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWdCQTtBQUVBO0FBQUE7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUlBO0FBSkE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFEQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFGQTtBQUtBO0FBTUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBSEE7QUFDQTtBQUlBO0FBTEE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUE3Q0E7QUFnREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBdERBO0FBQUE7QUFDQTs7QUFEQTtBQXlEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUE3REE7QUFBQTtBQUFBO0FBaUVBO0FBQUE7QUFDQTtBQWxFQTtBQUFBO0FBQUE7QUFxRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRkE7O0FBQUE7QUFLQTtBQUxBO0FBRUE7QUF6RUE7QUFBQTtBQUNBO0FBREE7QUErRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFZQTtBQUNBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUVBOztBQU5BO0FBYUE7QUFiQTtBQUNBOztBQVlBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFXQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQXNCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQTZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUhBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBSEE7QUFDQTtBQU1BO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUtBO0FBTEE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBREE7QUFHQTtBQUdBO0FBQ0E7QUFBQTtBQVZBO0FBQ0E7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUVBO0FBSEE7QUFHQTtBQUpBO0FBRkE7O0FBV0E7QUFBQTtBQU9BO0FBUkE7QUFYQTtBQUpBO0FBREE7QUFDQTtBQXVCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQWdDQTtBQUNBO0FBU0E7QUFDQTs7Ozs7O0FBMUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQWlDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7O0FBRkE7QUFJQTtBQUpBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFKQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUtBO0FBckJBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQUE7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFXQTtBQUVBO0FBQUE7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFJQTs7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBR0E7QUFGQTs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUNBO0FBU0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUhBO0FBS0E7QUFMQTtBQUNBOztBQUlBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUtBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFPQTtBQVBBO0FBQUE7O0FBT0E7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUVBO0FBRkE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBOzs7OztBQVFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkpBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUVBO0FBQUE7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7O0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBR0E7QUFIQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUpBO0FBQUE7QUFBQTtBQUNBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQUhBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFOQTtBQUNBO0FBMkJBO0FBRUE7QUFBQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUlBO0FBSkE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBRUE7QUFBQTs7QUFGQTtBQUlBO0FBSkE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFLQTtBQUxBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEhBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBVkE7QUFDQTtBQW1CQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7O0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUxBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBWUE7QUFaQTtBQUNBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBRUE7QUFBQTtBQURBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFRQTs7Ozs7Ozs7Ozs7QUFDQTtBQVFBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBR0E7QUFIQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQVNBO0FBVEE7QUFDQTs7Ozs7QUFXQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBSUE7Ozs7OztBQUlBO0FBQUE7Ozs7QUFHQTtBQUNBOzs7O0FBSUE7QUFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFIQTtBQU9BO0FBUEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFGQTtBQXBCQTtBQURBO0FBSEE7QUFDQTtBQXVDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBT0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFFQTtBQUZBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBOztBQUhBO0FBT0E7QUFQQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBV0E7QUExQ0E7QUFIQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2SEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQU5BO0FBU0E7QUFUQTtBQUNBO0FBU0E7QUFFQTtBQUZBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7O0FBRkE7QUFXQTtBQVhBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQVFBO0FBTkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUdBO0FBSEE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTs7QUFJQTtBQUFBOztBQUZBO0FBS0E7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBOztBQUdBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFNQTtBQUFBOztBQUZBO0FBS0E7QUFMQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBSEE7Ozs7OztBQTVEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBbkJBO0FBQUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7OztBQUlBO0FBQUE7Ozs7QUFZQTtBQUFBOzs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7O0FBdkJBOzs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFVQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQXhCQTtBQUNBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVpBO0FBWUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFoQkE7QUFnQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQTVCQTtBQTRCQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQWhDQTtBQWdDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFwQ0E7QUFvQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBWEE7QUFDQTtBQVVBO0FBWEE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTtBQUlBO0FBL0VBO0FBREE7QUFDQTtBQWdGQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFSQTtBQUNBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBO0FBWEE7O0FBNkJBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW9CQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFrQkE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFpRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        