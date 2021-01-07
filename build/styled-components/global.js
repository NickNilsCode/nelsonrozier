"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexDiv = exports.HalfSize = exports.TextArea = exports.Input = exports.BigGoldButton = exports.GoldButton = exports.ContentWrapper = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  align-items: ", ";\n  justify-content: space-between;\n  @media (min-width: 900px){\n    display: flex;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 900px){\n    width: 444px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 12px;\n  width: 100%;\n  height: 174px;\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  border: 1px solid #8d8d8d;\n  border-radius: 1px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 12px;\n  width: 100%;\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  border: 1px solid #8d8d8d;\n  border-radius: 1px;\n  line-height: 1.5;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px 20px;\n  margin: 12px auto;\n  color: #7c3230;\n  font-size: 19px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  &:hover {\n    cursor: pointer;\n    background-color: #7c3230;\n    color: #fff;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px 20px;\n  margin: 12px auto;\n  color: #fff;\n  font-size: 17px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  &:hover {\n    cursor: pointer;\n    background-color: #7c3230;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 40px 16px;\n  min-height: calc(100vh - 89px - 145px);\n  max-width: 900px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  @media (min-width: 700px){\n    min-height: calc(100vh - 58px - 115px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents["default"].div(_templateObject());

exports.PageWrapper = PageWrapper;

var ContentWrapper = _styledComponents["default"].div(_templateObject2());

exports.ContentWrapper = ContentWrapper;

var GoldButton = _styledComponents["default"].button(_templateObject3(), _colors.gold);

exports.GoldButton = GoldButton;

var BigGoldButton = _styledComponents["default"].button(_templateObject4(), _colors.gold);

exports.BigGoldButton = BigGoldButton;

var Input = _styledComponents["default"].input(_templateObject5());

exports.Input = Input;

var TextArea = _styledComponents["default"].textarea(_templateObject6());

exports.TextArea = TextArea;

var HalfSize = _styledComponents["default"].div(_templateObject7());

exports.HalfSize = HalfSize;

var FlexDiv = _styledComponents["default"].div(_templateObject8(), function (props) {
  return props.alignItems ? props.alignItems : "center";
});

exports.FlexDiv = FlexDiv;