"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/joca/Web/geograph/geograph-client/components/Header.js";

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement("header", {
    "data-jsx": 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("a", { className: pathname === "/" && "is-active", "data-jsx": 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Home")), _react2.default.createElement(_link2.default, { prefetch: true, href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("a", { className: pathname === "/about" && "is-active", "data-jsx": 2280026175,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "About")), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: "header[data-jsx=\"2280026175\"]{margin-bottom:25px}a[data-jsx=\"2280026175\"]{font-size:14px;margin-right:15px;text-decoration:none}.is-active[data-jsx=\"2280026175\"]{text-decoration:underline}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUc0QixBQUdKLEFBS1csZUFKUixJQUhwQixPQVFBLE9BSnVCLHFCQUN2QiIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9jYS9XZWIvZ2VvZ3JhcGgvZ2VvZ3JhcGgtY2xpZW50Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBwYXRobmFtZSB9KSA9PiAoXG4gIDxoZWFkZXI+XG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9cIj5cbiAgICAgIDxhIGNsYXNzTmFtZT17cGF0aG5hbWUgPT09IFwiL1wiICYmIFwiaXMtYWN0aXZlXCJ9PkhvbWU8L2E+XG4gICAgPC9MaW5rPlxuXG4gICAgPExpbmsgcHJlZmV0Y2ggaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGEgY2xhc3NOYW1lPXtwYXRobmFtZSA9PT0gXCIvYWJvdXRcIiAmJiBcImlzLWFjdGl2ZVwifT5BYm91dDwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBoZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgICAuaXMtYWN0aXZlIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2hlYWRlcj5cbik7XG4iXX0= */\n/*@ sourceURL=components/Header.js */"
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO3lCQUNoQixjQUFBO2dCQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsZ0NBQUssVUFBTixNQUFlLE1BQWYsQUFBb0I7Z0JBQXBCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxjQUFBLE9BQUcsV0FBVyxhQUFBLEFBQWEsT0FBM0IsQUFBa0MseUJBQWxDOztnQkFBQTtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBR0YsMEJBQUEsQUFBQyxnQ0FBSyxVQUFOLE1BQWUsTUFBZixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUEsT0FBRyxXQUFXLGFBQUEsQUFBYSxZQUEzQixBQUF1Qyx5QkFBdkM7O2dCQUFBO2tCQUFBO0FBQUE7S0FOSixBQUtFLEFBQ0U7YUFOSjtTQURhLEFBQ2I7QUFBQTtBQURGIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvam9jYS9XZWIvZ2VvZ3JhcGgvZ2VvZ3JhcGgtY2xpZW50In0=