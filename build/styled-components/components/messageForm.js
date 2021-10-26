"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactDisclaimer = exports.MessageDisclaimer = exports.ContactLinks = exports.MessageLinks = exports.MessageForm = exports.MessageFormWrap = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n  input {\n    height: 20px;\n    width: 20px;\n    margin: 0 6px 0 0;\n    background: #f7f7f7;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n  input {\n    height: 20px;\n    width: 20px;\n    margin: 0 6px 0 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  a {\n    color: ", ";\n    text-decoration: underline;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  a {\n    color: ", ";\n    text-decoration: underline;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 48px);\n  padding: 24px;\n  max-width: 900px;\n  margin: auto;\n  h2 {\n    width: 100%;\n    font-size: 29px;\n    text-align: center;\n  }\n  .buttonDisabled {\n    filter: grayscale(100%);\n  }\n  @media(min-width: 900px){\n    h2 {\n      font-size: 40px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 387px;\n  background-image: url(\"/images/bg-container-short-form-wrap.jpg\");\n  background-position: center;\n  background-size: cover;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MessageFormWrap = _styledComponents["default"].div(_templateObject(), _colors.white);

exports.MessageFormWrap = MessageFormWrap;

var MessageForm = _styledComponents["default"].div(_templateObject2());

exports.MessageForm = MessageForm;

var MessageLinks = _styledComponents["default"].div(_templateObject3(), _colors.white);

exports.MessageLinks = MessageLinks;

var ContactLinks = _styledComponents["default"].div(_templateObject4(), _colors.blue);

exports.ContactLinks = ContactLinks;

var MessageDisclaimer = _styledComponents["default"].div(_templateObject5());

exports.MessageDisclaimer = MessageDisclaimer;

var ContactDisclaimer = _styledComponents["default"].div(_templateObject6());

exports.ContactDisclaimer = ContactDisclaimer;