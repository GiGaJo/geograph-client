"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require("next/node_modules/babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("next/node_modules/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("next/node_modules/babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require("react-apollo");

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _initApollo = require("./initApollo");

var _initApollo2 = _interopRequireDefault(_initApollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/joca/Web/geograph/geograph-client/lib/withData.js";


// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || "Unknown";
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: "getInitialProps",
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 19;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  // Provide the `url` prop data in case a GraphQL query uses it

                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 9;
                  _context.next = 12;
                  return (0, _reactApollo.getDataFromTree)(_react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps, {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  }))));

                case 12:
                  _context.next = 16;
                  break;

                case 14:
                  _context.prev = 14;
                  _context.t0 = _context["catch"](9);

                case 16:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind();

                  // Extract query data from the Apollo store
                  state = apollo.getInitialState();

                  serverState = {
                    apollo: {
                      // Only include the Apollo data state
                      data: state.data
                    }
                  };

                case 19:
                  return _context.abrupt("return", (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 14]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)(_this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: "render",
      value: function render() {
        return _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          }
        }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          }
        })));
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = "WithData(" + getComponentDisplayName(ComposedComponent) + ")", _class.propTypes = {
    serverState: _propTypes2.default.object.isRequired
  }, _temp;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi93aXRoRGF0YS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkFwb2xsb1Byb3ZpZGVyIiwiZ2V0RGF0YUZyb21UcmVlIiwiSGVhZCIsImluaXRBcG9sbG8iLCJnZXRDb21wb25lbnREaXNwbGF5TmFtZSIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwibmFtZSIsImN0eCIsInNlcnZlclN0YXRlIiwiY29tcG9zZWRJbml0aWFsUHJvcHMiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsInByb2Nlc3MiLCJicm93c2VyIiwiYXBvbGxvIiwidXJsIiwicXVlcnkiLCJwYXRobmFtZSIsInJld2luZCIsInN0YXRlIiwiZ2V0SW5pdGlhbFN0YXRlIiwiZGF0YSIsInByb3BzIiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBZ0I7O0FBQ3pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUDtBQUNBLFNBQUEsQUFBUyx3QkFBVCxBQUFpQyxXQUFXLEFBQzFDO1NBQU8sVUFBQSxBQUFVLGVBQWUsVUFBekIsQUFBbUMsUUFBMUMsQUFBa0QsQUFDbkQ7QUFFRDs7a0JBQWUsNkJBQXFCO2NBQ2xDOztzREFBQTtzQ0FBQTs7O1dBQUE7eUJBQUE7K0ZBQUEsQUFRK0IsS0FSL0I7OERBQUE7d0VBQUE7c0JBQUE7K0NBQUE7cUJBU1E7QUFUUixnQ0FBQSxBQVNzQixBQUVsQjs7QUFDSTs7QUFaUix5Q0FBQSxBQVkrQjs7dUJBQ3ZCLGtCQWJSLEFBYTBCLGlCQWIxQjtvQ0FBQTtBQUFBO0FBQUE7O2tDQUFBO3lCQWNtQyxrQkFBQSxBQUFrQixnQkFkckQsQUFjbUMsQUFBa0M7O3FCQUEvRDtBQWROLGtEQUFBOztxQkFBQTtzQkFtQlMsUUFuQlQsQUFtQmlCLFNBbkJqQjtvQ0FBQTtBQUFBO0FBb0JZOztBQXBCWiwyQkFBQSxBQW9CcUIsQUFDZjtBQUNNOztBQXRCWix3QkFzQmtCLEVBQUUsT0FBTyxJQUFULEFBQWEsT0FBTyxVQUFVLElBdEJoRCxBQXNCa0IsQUFBa0M7a0NBdEJwRDtrQ0FBQTsyRUEwQlUsQUFBQyw2Q0FBZSxRQUFoQixBQUF3QjtnQ0FBeEI7a0NBQUEsQUFDRTtBQURGO21CQUFBLGdDQUNFLEFBQUMsNENBQWtCLEtBQW5CLEFBQXdCLE9BQXhCLEFBQWlDOztnQ0FBakM7a0NBM0JaLEFBeUJjLEFBQ0osQUFDRTtBQUFBO0FBQUEsc0JBRkU7O3FCQXpCZDtrQ0FBQTtBQUFBOztxQkFBQTtrQ0FBQTtrREFBQTs7cUJBbUNNO0FBQ0E7QUFDQTtpQ0FBQSxBQUFLLEFBRUw7O0FBQ007QUF4Q1osMEJBd0NvQixPQXhDcEIsQUF3Q29CLEFBQU8sQUFFckI7Ozs7QUFHSTs0QkFBTSxNQTdDaEIsQUEwQ00sQUFBYyxBQUNKLEFBRU07QUFGTixBQUNOO0FBRlUsQUFDWjs7cUJBM0NSOztpQ0FBQTtBQW1ETSxxQkFuRE4sQUFvRFM7O3FCQXBEVDtxQkFBQTtrQ0FBQTs7QUFBQTtpQ0FBQTtBQUFBOztxQ0FBQTtrQ0FBQTtBQUFBOztlQUFBO0FBQUEsQUF3REU7QUF4REY7O3NCQXdERSxBQUFZLE9BQU87MENBQUE7OzRJQUFBLEFBQ1gsQUFDTjs7WUFBQSxBQUFLLFNBQVMsMEJBQVcsTUFBQSxBQUFLLE1BRmIsQUFFakIsQUFBYyxBQUFzQjthQUNyQztBQTNESDs7O1dBQUE7K0JBNkRXLEFBQ1A7K0JBQ0UsQUFBQyw2Q0FBZSxRQUFRLEtBQXhCLEFBQTZCO3NCQUE3Qjt3QkFBQSxBQUNFO0FBREY7U0FBQSxnQ0FDRSxBQUFDLDhDQUFzQixLQUF2QixBQUE0Qjs7c0JBQTVCO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7QUFBQTtBQWhFUjtBQUFBOztXQUFBO0lBQThCLGdCQUE5QixBQUFvQyxtQkFBcEMsQUFDUyw0QkFBMEIsd0JBRG5DLEFBQ21DLEFBQy9CLGlDQUZKLEFBSVM7aUJBQ1Esb0JBQUEsQUFBVSxPQUwzQixBQUlxQixBQUNhO0FBRGIsQUFDakIsS0FnRUw7QUF0RUQiLCJmaWxlIjoid2l0aERhdGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvY2EvV2ViL2dlb2dyYXBoL2dlb2dyYXBoLWNsaWVudCJ9