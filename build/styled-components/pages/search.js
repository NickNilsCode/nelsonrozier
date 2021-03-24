"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SearchContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    text-align: center;\n    form {\n      width: 100%;\n      input {\n        width: calc(100% - 65px);\n        font-size: 12px;\n        padding: 10px;\n        color: #bcbcbc;\n        background-color: #eef1f4;\n        border: none;\n      }\n      input:focus {\n        outline: none;\n      }\n      button {\n        font-size: 12px;\n        padding: 12px;\n        border-radius: initial;\n        border: none;\n      }\n    }\n  "])));

exports.SearchContent = SearchContent;