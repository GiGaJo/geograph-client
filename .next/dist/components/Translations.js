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
        return _react2.default.createElement("li", { key: t.language }, t.language, " - ", t.translation);
      });
      var country = content.translations.length > 0 ? content.translations[0].name : "";
      console.log(content);
      return _react2.default.createElement("div", null, _react2.default.createElement("h4", null, country), _react2.default.createElement("ul", null, translations));
    }
  }]);

  return Translation;
}(_react.Component);

exports.default = (0, _reactApollo.graphql)(myQuery)(Translation);