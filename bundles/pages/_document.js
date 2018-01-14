
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports =
webpackJsonp([1],{

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _document = __webpack_require__(424);

var _document2 = _interopRequireDefault(_document);

var _styledComponents = __webpack_require__(542);

var _fonts = __webpack_require__(516);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/pages/_document.js?entry';


var resetStyles = '\n  *,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}\n\n  .prism-code {\n    display: block;\n    white-space: pre;\n    background-color: #1D1F21;\n    color: #C5C8C6;\n    padding: 0.5rem;\n    margin: 0;\n    box-sizing: border-box;\n    vertical-align: baseline;\n    outline: none;\n    text-shadow: none;\n    -webkit-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n    word-wrap: normal;\n    word-break: normal;\n    text-align: left;\n    word-spacing: normal;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n  }\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: hsl(30, 20%, 50%);\n  }\n  .token.comment {\n    font-style: italic;\n  }\n  .token.punctuation {\n    opacity: .7;\n  }\n  .namespace {\n    opacity: .7;\n  }\n  .token.property,\n  .token.tag,\n  .token.boolean,\n  .token.number,\n  .token.constant,\n  .token.symbol {\n    color: hsl(350, 40%, 70%);\n  }\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: hsl(75, 70%, 60%);\n  }\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .language-css .token.string,\n  .style .token.string,\n  .token.variable {\n    color: hsl(40, 90%, 60%);\n  }\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword {\n    color: hsl(350, 40%, 70%);\n  }\n  .token.regex,\n  .token.important {\n    color: #e90;\n  }\n  .token.important,\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n  .token.entity {\n    cursor: help;\n  }\n  .token.deleted {\n    color: red;\n  }\n\n  @font-face {\n    font-family: \'Merriweather\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Merriweather\'), local(\'Merriweather-Regular\'), url(https://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EIjoYw3YTyktCCer_ilOlhE.woff2) format(\'woff2\');\n    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n  }\n\n  @font-face {\n    font-family: \'Merriweather\';\n    font-style: normal;\n    font-weight: 400;\n    src: local(\'Merriweather\'), local(\'Merriweather-Regular\'), url(https://fonts.gstatic.com/s/merriweather/v15/RFda8w1V0eDZheqfcyQ4EBampu5_7CjHW5spxoeN3Vs.woff2) format(\'woff2\');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\n  }\n\n  html, body {\n    font-size: 18px;\n    line-height: 1.6;\n    font-family: ' + _fonts.bodyFont + ';\n    font-style: normal;\n    padding: 0;\n    margin: 0;\n    color: rgb(46, 68, 78);\n\n    -webkit-font-smoothing: subpixel-antialiased;\n\n    @media (max-width: 1000px) {\n      font-size: 16px;\n    }\n  }\n\n  body.sticky {\n    overflow: hidden;\n  }\n\n  .root {\n    position: relative;\n    overflow: auto;\n  }\n\n  .big {\n    color: white;\n    font-size: 1.4em;\n  }\n\n  .small {\n    color: white;\n    font-size: 0.5em;\n  }\n\n  ul li {\n    margin-bottom: 0.2em;\n    line-height: 1.7;\n  }\n';

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var styleElements = this.props.styleElements;

      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement('link', { rel: 'icon', type: 'image/png', href: '/static/favicon.png', __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }), _react2.default.createElement('link', { rel: 'manifest', href: '/static/manifest.json', __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), _react2.default.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=yes', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement('meta', { name: 'theme-color', content: '#da936a', __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), _react2.default.createElement('meta', { name: 'author', content: 'styled-components', __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: resetStyles }, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), styleElements, _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: '(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);})(window,document,\'script\',\'dataLayer\',\'GTM-WDWNSLK\');' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      })), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react2.default.createElement('noscript', { dangerouslySetInnerHTML: { __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDWNSLK" height="0" width="0" style="display:none;visibility:hidden"></iframe>' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), _react2.default.createElement('div', { className: 'root', __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      })), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: 'https://cloud.typography.com/7039052/7606172/css/fonts.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();

      var page = renderPage(function (Component) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(Component, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            }
          })));
        };
      });

      var styleElements = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleElements: styleElements });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/pages/_document.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/WAHAHA/Github/GitBook/styled-components-website_fork/master/pages/_document.js"); } } })();
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
    })(module.exports.default || module.exports, "/_document")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

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

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(237);


/***/ })

},[554]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZG9jdW1lbnQuanM/MDQyMTEwZiIsIndlYnBhY2s6Ly8vLi91dGlscy9mb250cy5qcz8wNDIxMTBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCwgeyBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCdcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHsgYm9keUZvbnQgfSBmcm9tICcuLi91dGlscy9mb250cydcblxuY29uc3QgcmVzZXRTdHlsZXMgPSBgXG4gICosOjphZnRlciw6OmJlZm9yZXtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7Ym94LXNpemluZzppbmhlcml0fTo6YWZ0ZXIsOjpiZWZvcmV7dGV4dC1kZWNvcmF0aW9uOmluaGVyaXQ7dmVydGljYWwtYWxpZ246aW5oZXJpdH1odG1se2JveC1zaXppbmc6Ym9yZGVyLWJveDtjdXJzb3I6ZGVmYXVsdDstbXMtdGV4dC1zaXplLWFkanVzdDoxMDAlOy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlfWFydGljbGUsYXNpZGUsZm9vdGVyLGhlYWRlcixuYXYsc2VjdGlvbntkaXNwbGF5OmJsb2NrfWJvZHl7bWFyZ2luOjB9aDF7Zm9udC1zaXplOjJlbTttYXJnaW46LjY3ZW0gMH1maWdjYXB0aW9uLGZpZ3VyZSxtYWlue2Rpc3BsYXk6YmxvY2t9ZmlndXJle21hcmdpbjoxZW0gNDBweH1ocntib3gtc2l6aW5nOmNvbnRlbnQtYm94O2hlaWdodDowO292ZXJmbG93OnZpc2libGV9bmF2IG9sLG5hdiB1bHtsaXN0LXN0eWxlOm5vbmV9cHJle2ZvbnQtZmFtaWx5Om1vbm9zcGFjZSxtb25vc3BhY2U7Zm9udC1zaXplOjFlbX1he3RleHQtZGVjb3JhdGlvbjpub25lO2NvbG9yOmluaGVyaXQ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOm9iamVjdHN9YWJiclt0aXRsZV17Ym9yZGVyLWJvdHRvbTpub25lO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSBkb3R0ZWR9YixzdHJvbmd7Zm9udC13ZWlnaHQ6aW5oZXJpdH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19ZGZue2ZvbnQtc3R5bGU6aXRhbGljfW1hcmt7YmFja2dyb3VuZC1jb2xvcjojZmYwO2NvbG9yOiMwMDB9c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfTo6LW1vei1zZWxlY3Rpb257YmFja2dyb3VuZC1jb2xvcjojYjNkNGZjO2NvbG9yOiMwMDA7dGV4dC1zaGFkb3c6bm9uZX06OnNlbGVjdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNiM2Q0ZmM7Y29sb3I6IzAwMDt0ZXh0LXNoYWRvdzpub25lfWF1ZGlvLGNhbnZhcyxpZnJhbWUsaW1nLHN2Zyx2aWRlb3t2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9YXVkaW8sdmlkZW97ZGlzcGxheTppbmxpbmUtYmxvY2t9YXVkaW86bm90KFtjb250cm9sc10pe2Rpc3BsYXk6bm9uZTtoZWlnaHQ6MH1pbWd7Ym9yZGVyLXN0eWxlOm5vbmV9c3Zne2ZpbGw6Y3VycmVudENvbG9yfXN2Zzpub3QoOnJvb3Qpe292ZXJmbG93OmhpZGRlbn10YWJsZXtib3JkZXItY29sbGFwc2U6Y29sbGFwc2V9YnV0dG9uLGlucHV0LG9wdGdyb3VwLHNlbGVjdCx0ZXh0YXJlYXttYXJnaW46MH1idXR0b24saW5wdXQsc2VsZWN0LHRleHRhcmVhe2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Y29sb3I6aW5oZXJpdDtmb250LXNpemU6aW5oZXJpdDtsaW5lLWhlaWdodDppbmhlcml0fWJ1dHRvbixpbnB1dHtvdmVyZmxvdzp2aXNpYmxlfWJ1dHRvbixzZWxlY3R7dGV4dC10cmFuc2Zvcm06bm9uZX1bdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b24saHRtbCBbdHlwZT1idXR0b25dey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b259W3R5cGU9YnV0dG9uXTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9c3VibWl0XTo6LW1vei1mb2N1cy1pbm5lcixidXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyLXN0eWxlOm5vbmU7cGFkZGluZzowfVt0eXBlPWJ1dHRvbl06LW1vei1mb2N1c3JpbmcsW3R5cGU9cmVzZXRdOi1tb3otZm9jdXNyaW5nLFt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3JpbmcsYnV0dG9uOi1tb3otZm9jdXNyaW5ne291dGxpbmU6MXB4IGRvdHRlZCBCdXR0b25UZXh0fWxlZ2VuZHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y29sb3I6aW5oZXJpdDtkaXNwbGF5OnRhYmxlO21heC13aWR0aDoxMDAlO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpub3JtYWx9cHJvZ3Jlc3N7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9dGV4dGFyZWF7b3ZlcmZsb3c6YXV0bztyZXNpemU6dmVydGljYWx9W3R5cGU9Y2hlY2tib3hdLFt0eXBlPXJhZGlvXXtib3gtc2l6aW5nOmJvcmRlci1ib3g7cGFkZGluZzowfVt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sW3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntoZWlnaHQ6YXV0b31bdHlwZT1zZWFyY2hdey13ZWJraXQtYXBwZWFyYW5jZTp0ZXh0ZmllbGQ7b3V0bGluZS1vZmZzZXQ6LTJweH1bdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb257LXdlYmtpdC1hcHBlYXJhbmNlOm5vbmV9Ojotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbnstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9uO2ZvbnQ6aW5oZXJpdH1kZXRhaWxzLG1lbnV7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfWNhbnZhc3tkaXNwbGF5OmlubGluZS1ibG9ja310ZW1wbGF0ZXtkaXNwbGF5Om5vbmV9W3RhYmluZGV4XSxhLGFyZWEsYnV0dG9uLGlucHV0LGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhey1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb259W2hpZGRlbl17ZGlzcGxheTpub25lfVthcmlhLWJ1c3k9dHJ1ZV17Y3Vyc29yOnByb2dyZXNzfVthcmlhLWNvbnRyb2xzXXtjdXJzb3I6cG9pbnRlcn1bYXJpYS1oaWRkZW49ZmFsc2VdW2hpZGRlbl06bm90KDpmb2N1cyl7Y2xpcDpyZWN0KDAsMCwwLDApO2Rpc3BsYXk6aW5oZXJpdDtwb3NpdGlvbjphYnNvbHV0ZX1bYXJpYS1kaXNhYmxlZF17Y3Vyc29yOmRlZmF1bHR9XG5cbiAgLnByaXNtLWNvZGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFEMUYyMTtcbiAgICBjb2xvcjogI0M1QzhDNjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gICAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xuICAgIC1tcy1oeXBoZW5zOiBub25lO1xuICAgIGh5cGhlbnM6IG5vbmU7XG4gICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgd29yZC1icmVhazogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gICAgLW1vei10YWItc2l6ZTogMjtcbiAgICAtby10YWItc2l6ZTogMjtcbiAgICB0YWItc2l6ZTogMjtcbiAgfVxuICAudG9rZW4uY29tbWVudCxcbiAgLnRva2VuLnByb2xvZyxcbiAgLnRva2VuLmRvY3R5cGUsXG4gIC50b2tlbi5jZGF0YSB7XG4gICAgY29sb3I6IGhzbCgzMCwgMjAlLCA1MCUpO1xuICB9XG4gIC50b2tlbi5jb21tZW50IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIH1cbiAgLnRva2VuLnB1bmN0dWF0aW9uIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAubmFtZXNwYWNlIHtcbiAgICBvcGFjaXR5OiAuNztcbiAgfVxuICAudG9rZW4ucHJvcGVydHksXG4gIC50b2tlbi50YWcsXG4gIC50b2tlbi5ib29sZWFuLFxuICAudG9rZW4ubnVtYmVyLFxuICAudG9rZW4uY29uc3RhbnQsXG4gIC50b2tlbi5zeW1ib2wge1xuICAgIGNvbG9yOiBoc2woMzUwLCA0MCUsIDcwJSk7XG4gIH1cbiAgLnRva2VuLnNlbGVjdG9yLFxuICAudG9rZW4uYXR0ci1uYW1lLFxuICAudG9rZW4uc3RyaW5nLFxuICAudG9rZW4uY2hhcixcbiAgLnRva2VuLmJ1aWx0aW4sXG4gIC50b2tlbi5pbnNlcnRlZCB7XG4gICAgY29sb3I6IGhzbCg3NSwgNzAlLCA2MCUpO1xuICB9XG4gIC50b2tlbi5vcGVyYXRvcixcbiAgLnRva2VuLmVudGl0eSxcbiAgLnRva2VuLnVybCxcbiAgLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuICAuc3R5bGUgLnRva2VuLnN0cmluZyxcbiAgLnRva2VuLnZhcmlhYmxlIHtcbiAgICBjb2xvcjogaHNsKDQwLCA5MCUsIDYwJSk7XG4gIH1cbiAgLnRva2VuLmF0cnVsZSxcbiAgLnRva2VuLmF0dHItdmFsdWUsXG4gIC50b2tlbi5rZXl3b3JkIHtcbiAgICBjb2xvcjogaHNsKDM1MCwgNDAlLCA3MCUpO1xuICB9XG4gIC50b2tlbi5yZWdleCxcbiAgLnRva2VuLmltcG9ydGFudCB7XG4gICAgY29sb3I6ICNlOTA7XG4gIH1cbiAgLnRva2VuLmltcG9ydGFudCxcbiAgLnRva2VuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC50b2tlbi5pdGFsaWMge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgfVxuICAudG9rZW4uZW50aXR5IHtcbiAgICBjdXJzb3I6IGhlbHA7XG4gIH1cbiAgLnRva2VuLmRlbGV0ZWQge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcic7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTWVycml3ZWF0aGVyJyksIGxvY2FsKCdNZXJyaXdlYXRoZXItUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21lcnJpd2VhdGhlci92MTUvUkZkYTh3MVYwZURaaGVxZmN5UTRFSWpvWXczWVR5a3RDQ2VyX2lsT2xoRS53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDEwMC0wMjRGLCBVKzFFMDAtMUVGRiwgVSsyMEEwLTIwQUIsIFUrMjBBRC0yMENGLCBVKzJDNjAtMkM3RiwgVStBNzIwLUE3RkY7XG4gIH1cblxuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcic7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnTWVycml3ZWF0aGVyJyksIGxvY2FsKCdNZXJyaXdlYXRoZXItUmVndWxhcicpLCB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL21lcnJpd2VhdGhlci92MTUvUkZkYTh3MVYwZURaaGVxZmN5UTRFQmFtcHU1XzdDakhXNXNweG9lTjNWcy53b2ZmMikgZm9ybWF0KCd3b2ZmMicpO1xuICAgIHVuaWNvZGUtcmFuZ2U6IFUrMDAwMC0wMEZGLCBVKzAxMzEsIFUrMDE1Mi0wMTUzLCBVKzAyQzYsIFUrMDJEQSwgVSswMkRDLCBVKzIwMDAtMjA2RiwgVSsyMDc0LCBVKzIwQUMsIFUrMjIxMiwgVSsyMjE1O1xuICB9XG5cbiAgaHRtbCwgYm9keSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgZm9udC1mYW1pbHk6ICR7Ym9keUZvbnR9O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogcmdiKDQ2LCA2OCwgNzgpO1xuXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgYm9keS5zdGlja3kge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAucm9vdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLmJpZyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gIH1cblxuICAuc21hbGwge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuNWVtO1xuICB9XG5cbiAgdWwgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gIH1cbmBcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzICh7IHJlbmRlclBhZ2UgfSkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKVxuXG4gICAgY29uc3QgcGFnZSA9IHJlbmRlclBhZ2UoQ29tcG9uZW50ID0+IHByb3BzID0+XG4gICAgICBzaGVldC5jb2xsZWN0U3R5bGVzKDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICkpXG5cbiAgICBjb25zdCBzdHlsZUVsZW1lbnRzID0gc2hlZXQuZ2V0U3R5bGVFbGVtZW50KClcbiAgICByZXR1cm4geyAuLi5wYWdlLCBzdHlsZUVsZW1lbnRzIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBzdHlsZUVsZW1lbnRzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9zdGF0aWMvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9zdGF0aWMvbWFuaWZlc3QuanNvblwiIC8+XG5cbiAgICAgICAgICA8bWV0YSBodHRwRXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZSxjaHJvbWU9MVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9eWVzXCIgLz5cblxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZGE5MzZhXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cInN0eWxlZC1jb21wb25lbnRzXCIgLz5cblxuICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHJlc2V0U3R5bGVzIH19IC8+XG4gICAgICAgICAge3N0eWxlRWxlbWVudHN9XG4gICAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGAoZnVuY3Rpb24odyxkLHMsbCxpKXt3W2xdPXdbbF18fFtdO3dbbF0ucHVzaCh7J2d0bS5zdGFydCc6bmV3IERhdGUoKS5nZXRUaW1lKCksZXZlbnQ6J2d0bS5qcyd9KTt2YXIgZj1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdLGo9ZC5jcmVhdGVFbGVtZW50KHMpLGRsPWwhPSdkYXRhTGF5ZXInPycmbD0nK2w6Jyc7ai5hc3luYz10cnVlO2ouc3JjPSdodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndG0uanM/aWQ9JytpK2RsO2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaixmKTt9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJ2RhdGFMYXllcicsJ0dUTS1XRFdOU0xLJyk7YCB9fT48L3NjcmlwdD5cbiAgICAgICA8L0hlYWQ+XG5cbiAgICAgICA8Ym9keT5cbiAgICAgICAgIDxub3NjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL25zLmh0bWw/aWQ9R1RNLVdEV05TTEtcIiBoZWlnaHQ9XCIwXCIgd2lkdGg9XCIwXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmU7dmlzaWJpbGl0eTpoaWRkZW5cIj48L2lmcmFtZT5gIH19Pjwvbm9zY3JpcHQ+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICA8TmV4dFNjcmlwdCAvPlxuXG4gICAgICAgICB7LyogY2xvdWQudHlwb2dyYXBoeSAqL31cbiAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiaHR0cHM6Ly9jbG91ZC50eXBvZ3JhcGh5LmNvbS83MDM5MDUyLzc2MDYxNzIvY3NzL2ZvbnRzLmNzc1wiIC8+XG4gICAgICAgPC9ib2R5PlxuICAgICA8L2h0bWw+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9fZG9jdW1lbnQuanM/ZW50cnkiLCJleHBvcnQgY29uc3QgYm9keUZvbnQgPSAnLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiJ1xuZXhwb3J0IGNvbnN0IGhlYWRlckZvbnQgPSBgXCJBdmVuaXIgTmV4dFwiLCAke2JvZHlGb250fWBcbmV4cG9ydCBjb25zdCBtb25vc3BhY2UgPSAnXCJPcGVyYXRvciBNb25vIFNTbSBBXCIsIFwiT3BlcmF0b3IgTW9ubyBTU20gQlwiLCBtb25vc3BhY2UnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy9mb250cy5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFnSkE7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBR0E7QUFIQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFBQTs7QUFHQTtBQUdBO0FBSEE7QUFBQTtBQUdBO0FBSUE7QUFKQTs7Ozs7QUF4Q0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBVEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        