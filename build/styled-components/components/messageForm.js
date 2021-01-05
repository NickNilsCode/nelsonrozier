"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessageForm = exports.MessageFormWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  height: calc(100% - 48px);\n  padding: 24px;\n  max-width: 900px;\n  margin: auto;\n  h2 {\n    width: 100%;\n    font-size: 29px;\n    text-align: center;\n  }\n  @media(min-width: 900px){\n    h2 {\n      font-size: 40px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 387px;\n  background-image: url(\"/images/bg-container-short-form-wrap.jpg\");\n  background-position: center;\n  background-size: cover;\n  color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageFormWrap = _styledComponents["default"].div(_templateObject());

exports.MessageFormWrap = MessageFormWrap;

var MessageForm = _styledComponents["default"].div(_templateObject2());

exports.MessageForm = MessageForm;