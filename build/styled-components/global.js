"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexDiv = exports.HalfSize = exports.TextArea = exports.Input = exports.FBButton = exports.RedButton = exports.BigGoldButton = exports.GoldButton = exports.Content = exports.ContentWrapper = exports.PageWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("./colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageWrapper = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  min-height: 100vh;\n"])));

exports.PageWrapper = PageWrapper;

var ContentWrapper = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: calc(100% - 32px);\n  padding: 40px 16px;\n  min-height: calc(100vh - 89px - 145px);\n  max-width: 900px;\n  margin: auto;\n  text-align: center;\n  position: relative;\n  display: block;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content:space-between;\n  @media (min-width: 900px){\n    display: flex;\n    min-height: calc(100vh - 58px - 115px);\n    flex-direction: row-reverse;\n    &.homePage {\n      flex-direction: column;\n    }\n    &.blogPage {\n      flex-direction: row;\n    }\n  }\n"])));

exports.ContentWrapper = ContentWrapper;

var Content = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  p, ul, li, .goldBack {\n    text-align: left;\n    font-size: 17px;\n    font-weight: 400;\n    line-height: 27px;\n  }\n  h1 {\n    text-align: left;\n    font-size: 25px;\n    font-weight: 700;\n    margin-bottom: 30px;\n  }\n  h2 {\n    text-align: left;\n    font-size: 24px;\n    font-weight: 700;\n    margin-bottom: 10px;\n  }\n  select {\n    background: #f7f7f7;\n    padding: 12px;\n    width: 100%;\n    margin: 0 0 12px 0;\n    font-size: 16px;\n    border: 1px solid #8d8d8d;\n    border-radius: 1px;\n    line-height: 1.5;\n  }\n  a {\n    color: ", ";\n    transition: color 300ms ease 0ms;\n    text-decoration: underline;\n  }\n  form {\n    input, textarea {\n      background: #f7f7f7;\n    }\n  }\n  a:hover {\n    color: ", ";\n  }\n  .goldBack {\n    background-color: ", ";\n    color: ", ";\n    padding: 20px;\n  }\n  .boxedList {\n    display: flex;\n    flex-direction: column;\n    padding: 12px;\n    padding-left: 24px;\n    margin: 12px 0;\n    border: 1px solid #000;\n    @media (min-width: 600px){\n      flex-wrap: wrap;\n      max-height: 325px;\n      li {\n        width: calc(50% - 16px);\n      }\n    }\n  }\n  &.blogContent {\n    @media (min-width: 900px){\n      width: calc(100% - 277px - 85px);\n    }\n  }\n"])), _colors.red, _colors.gold, _colors.gold, _colors.white);

exports.Content = Content;

var GoldButton = _styledComponents["default"].button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px 20px;\n  margin: 12px auto;\n  color: ", ";\n  font-size: 17px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: max-content;\n  transition: background-color 300ms ease 0ms;\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"])), _colors.gold, _colors.white, _colors.red);

exports.GoldButton = GoldButton;

var BigGoldButton = _styledComponents["default"].button(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px 20px;\n  margin: 12px auto;\n  color: ", ";\n  font-size: 19px;\n  border: 1px solid #8d8d8d;\n  border-radius: 3px;\n  width: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  transition: background-color 300ms ease 0ms;\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n    color: ", ";\n  }\n"])), _colors.gold, _colors.red, _colors.red, _colors.white);

exports.BigGoldButton = BigGoldButton;

var RedButton = _styledComponents["default"].button(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 5px 15px;\n  margin: 24px 0 8px 0;\n  color: ", ";\n  font-size: 15px;\n  font-weight: 600px;\n  border: none;\n  line-height: 26px;\n  width: max-content;\n  transition: background-color 300ms ease 0ms;\n  display: block;\n  &:hover {\n    cursor: pointer;\n    background-color: #000;\n  }\n"])), _colors.red, _colors.white);

exports.RedButton = RedButton;

var FBButton = _styledComponents["default"].button(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background-color: #3b5998;\n  border-radius: 3px;\n  height: 30px;\n  width: 30px;\n  border: none;\n  transition: background-color 300ms ease 0ms;\n  display: block;\n  i {\n    color: ", ";\n    font-size: 16px;\n  }\n  &:hover {\n    cursor: pointer;\n    background-color: #4674b5;\n  }\n"])), _colors.white);

exports.FBButton = FBButton;

var Input = _styledComponents["default"].input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px;\n  width: 100%;\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  border: 1px solid #8d8d8d;\n  border-radius: 1px;\n  line-height: 1.5;\n"])), _colors.white);

exports.Input = Input;

var TextArea = _styledComponents["default"].textarea(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 12px;\n  width: 100%;\n  height: 174px;\n  margin: 0 0 12px 0;\n  font-size: 16px;\n  border: 1px solid #8d8d8d;\n  border-radius: 1px;\n"])), _colors.white);

exports.TextArea = TextArea;

var HalfSize = _styledComponents["default"].div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 900px){\n    width: 444px;\n  }\n"])));

exports.HalfSize = HalfSize;

var FlexDiv = _styledComponents["default"].div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: block;\n  align-items: ", ";\n  justify-content: space-between;\n  @media (min-width: 900px){\n    display: flex;\n  }\n"])), function (props) {
  return props.alignItems ? props.alignItems : "center";
});

exports.FlexDiv = FlexDiv;