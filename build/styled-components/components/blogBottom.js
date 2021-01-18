"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogBottom = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  a {\n    width: max-content;\n    word-wrap: break-word;\n    max-width: 100%;\n  }\n  form {\n    width: 100%;\n  }\n  ul {\n    a {\n      display: inline-block;\n    }\n    li {\n      margin: 8px 0;\n      text-align: left;\n    }\n    a:hover {\n      text-decoration: underline;\n    }\n  }\n  @media (min-width: 900px){\n\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogBottom = _styledComponents["default"].div(_templateObject());

exports.BlogBottom = BlogBottom;