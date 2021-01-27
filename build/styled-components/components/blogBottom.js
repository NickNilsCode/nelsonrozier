"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogBottom = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  a {\n    width: max-content;\n    word-wrap: break-word;\n    max-width: 100%;\n  }\n  form {\n    width: 100%;\n    input {\n      width: calc(100% - 65px);\n      font-size: 12px;\n      padding: 10px;\n      color: #bcbcbc;\n      background-color: #eef1f4;\n      border: none;\n    }\n    input:focus {\n      outline: none;\n    }\n    button {\n      font-size: 12px;\n      padding: 12px;\n      border-radius: initial;\n      border: none;\n    }\n  }\n  select {\n    width: 100%;\n    padding: 5px;\n    color: #4e4e4e;\n    border: 1px solid #bbb;\n  }\n  p {\n    text-align: left;\n    font-size: 17px;\n    font-weight: 400;\n    line-height: 27px;\n  }\n  h1 {\n    text-align: left;\n    font-size: 25px;\n    font-weight: 700;\n    margin-bottom: 30px;\n  }\n  h2 {\n    text-align: left;\n    font-size: 24px;\n    font-weight: 700;\n    margin-bottom: 10px;\n  }\n  ul {\n    padding-left: 17px;\n    li {\n      margin: 8px 0;\n      text-align: left;\n    }\n    a:hover {\n      text-decoration: underline;\n    }\n  }\n  @media (min-width: 900px){\n    width: 277px;\n    margin-left: 85px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogBottom = _styledComponents["default"].div(_templateObject());

exports.BlogBottom = BlogBottom;