"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogDiv = exports.BlogContent = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BlogContent = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n"])));

exports.BlogContent = BlogContent;

var BlogDiv = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n  text-align: left;\n"])));

exports.BlogDiv = BlogDiv;