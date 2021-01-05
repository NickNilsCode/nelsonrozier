"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BottomSection = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: calc(100% - 32px);\nbackground-color: #fff;\ncolor: #000;\npadding: 16px;\ntext-align: center;\np {\n  font-family: \"PT Sans\", Helvetica, Arial, Lucida, sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  a {\n    text-decoration: underline #000 solid;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BottomSection = _styledComponents["default"].div(_templateObject());

exports.BottomSection = BottomSection;