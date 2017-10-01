"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("next/node_modules/babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require("react-apollo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/joca/Web/geograph/geograph-client/components/Translations.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  {\n    byCountry(country: \"Germany\") {\n      translations {\n        name\n        language\n        translation\n      }\n    }\n  }\n"], ["\n  {\n    byCountry(country: \"Germany\") {\n      translations {\n        name\n        language\n        translation\n      }\n    }\n  }\n"]);

var myQuery = (0, _reactApollo.gql)(_templateObject);

var Translation = function (_Component) {
  (0, _inherits3.default)(Translation, _Component);

  function Translation() {
    (0, _classCallCheck3.default)(this, Translation);

    return (0, _possibleConstructorReturn3.default)(this, (Translation.__proto__ || (0, _getPrototypeOf2.default)(Translation)).apply(this, arguments));
  }

  (0, _createClass3.default)(Translation, [{
    key: "render",
    value: function render() {
      var content = this.props.data.byCountry || { translations: [] };
      var translations = content.translations.map(function (t) {
        return _react2.default.createElement("li", { key: t.language, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, t.language, " - ", t.translation);
      });
      var country = content.translations.length > 0 ? content.translations[0].name : "";
      console.log(content);
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, country), _react2.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, translations));
    }
  }]);

  return Translation;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)(myQuery)(Translation);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhbnNsYXRpb25zLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3FsIiwiZ3JhcGhxbCIsIm15UXVlcnkiLCJUcmFuc2xhdGlvbiIsImNvbnRlbnQiLCJwcm9wcyIsImRhdGEiLCJieUNvdW50cnkiLCJ0cmFuc2xhdGlvbnMiLCJtYXAiLCJ0IiwibGFuZ3VhZ2UiLCJ0cmFuc2xhdGlvbiIsImNvdW50cnkiLCJsZW5ndGgiLCJuYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBSzs7Ozs7Ozs7QUFFZCxJQUFNLFVBQUEsQUFBVSxzQkFBaEI7O0ksQUFZTTs7Ozs7Ozs7Ozs7NkJBQ0ssQUFDUDtVQUFNLFVBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLGFBQWEsRUFBRSxjQUEvQyxBQUE2QyxBQUFnQixBQUM3RDtVQUFNLHVCQUFlLEFBQVEsYUFBUixBQUFxQixJQUFJLGFBQUE7K0JBQzVDLGNBQUEsUUFBSSxLQUFLLEVBQVQsQUFBVztzQkFBWDt3QkFBQSxBQUNHO0FBREg7U0FBQSxJQUFBLEFBQ0ssVUFBYSxTQUYwQixBQUM1QyxBQUNvQjtBQUZ0QixBQUFxQixBQUtyQixPQUxxQjtVQUtmLFVBQ0osUUFBQSxBQUFRLGFBQVIsQUFBcUIsU0FBckIsQUFBOEIsSUFBSSxRQUFBLEFBQVEsYUFBUixBQUFxQixHQUF2RCxBQUEwRCxPQUQ1RCxBQUNtRSxBQUNuRTtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxTQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxTQUhKLEFBQ0UsQUFFRSxBQUdMOzs7OztBQWpCdUIsQUFvQjFCLEE7O2tCQUFlLDBCQUFBLEFBQVEsU0FBdkIsQUFBZSxBQUFpQiIsImZpbGUiOiJUcmFuc2xhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2pvY2EvV2ViL2dlb2dyYXBoL2dlb2dyYXBoLWNsaWVudCJ9