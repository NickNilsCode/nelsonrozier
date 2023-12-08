"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageLinks = exports.MessageFormWrap = exports.MessageForm = exports.MessageDisclaimer = exports.ContactLinks = exports.ContactDisclaimer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _colors = require("../colors");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var MessageFormWrap = exports.MessageFormWrap = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 387px;\n  background-image: url(\"/images/bg-container-short-form-wrap.jpg\");\n  background-position: center;\n  background-size: cover;\n  color: ", ";\n"])), _colors.white);
var MessageForm = exports.MessageForm = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  padding: 24px;\n  max-width: 900px;\n  margin: auto;\n  h2 {\n    width: 100%;\n    font-size: 29px;\n    text-align: center;\n  }\n  .buttonDisabled {\n    filter: grayscale(100%);\n  }\n  @media(min-width: 900px){\n    h2 {\n      font-size: 40px;\n    }\n  }\n"])));
var MessageLinks = exports.MessageLinks = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  a {\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), _colors.white);
var ContactLinks = exports.ContactLinks = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-align: left;\n  a {\n    color: ", ";\n    text-decoration: underline;\n  }\n"])), _colors.blue);
var MessageDisclaimer = exports.MessageDisclaimer = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n  input {\n    height: 20px;\n    width: 20px;\n    margin: 0 6px 0 0;\n  }\n"])));
var ContactDisclaimer = exports.ContactDisclaimer = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n  input {\n    height: 20px;\n    width: 20px;\n    margin: 0 6px 0 0;\n    background: #f7f7f7;\n  }\n"])));