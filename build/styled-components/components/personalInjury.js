"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonalInjury = exports.PIPopup = exports.PIButton = exports.PIBar = exports.MobilePI = exports.FlexWrap = exports.DesktopPI = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _colors = require("../colors");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var PersonalInjury = exports.PersonalInjury = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: auto;\n  @media(min-width: 900px){\n    margin: 0 0 0 85px;\n    width: 276px;\n    &.homePI {\n      width: 100%;\n      display: flex;\n      margin: 0 0 64px 0;\n      h2 {\n        text-align: center;\n      }\n    }\n  }\n"])));
var DesktopPI = exports.DesktopPI = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: none;\n  width: 100%;\n  a {\n    text-align: left;\n  }\n  h2 {\n    font-size: 40px;\n    font-weight: 700;\n    padding: 0 0 10px 0;\n    margin: 0;\n    text-align: left;\n    border-bottom: 3px solid #000;\n  }\n  .desktopPI {\n    border-bottom: 1px solid #c5c5c7;\n  }\n  @media(min-width: 900px){\n    display: block;\n  }\n"])));
var MobilePI = exports.MobilePI = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  position: relative;\n  @media(min-width: 900px){\n    display: none;\n  }\n  .mobilePI {\n    text-transform: capitalize;\n    padding: 10px 37.5px;\n    background-color: ", ";\n    border: 1px solid rgba(0,0,0,.03);\n    width: 100%;\n    box-sizing: border-box;\n    text-align: left;\n    background-image: none;\n  }\n\n"])), _colors.blue);
var PIButton = exports.PIButton = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 15px;\n  width: 216px;\n  word-wrap: break-word;\n  color: ", ";\n  padding: 3px 13px;\n  border-right: ", ";\n  background: url(\"", "\") 6px center no-repeat ", ";\n  padding: 10px 7px 10px 53px;\n  &.selectedPI.desktopPI {\n    color: ", ";\n    background: url(\"", "\") 6px center no-repeat ", ";\n  }\n\n  &:hover {\n    &.mobilePI {\n      background-color: ", ";\n      background-image: none;\n    }\n    &.desktopPI {\n      color: ", ";\n      background: url(\"", "\") 6px center no-repeat ", ";\n    }\n\n  }\n"])), _colors.white, function (props) {
  return props.index != props.size - 1 ? "1px solid ".concat(_colors.white) : "none";
}, function (props) {
  return props.himg;
}, _colors.blue, _colors.white, function (props) {
  return props.himg;
}, _colors.blueish, _colors.blueish, _colors.white, function (props) {
  return props.himg;
}, _colors.blueish);
var PIBar = exports.PIBar = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 24px;\n  margin: 12px 0;\n  text-align: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: ", ";\n  i {\n    color: #0099c4\n  }\n  &:hover {\n    cursor: pointer;\n    outline: 2px dotted #000;\n  }\n  &:selected {\n    outline: 2px dotted #000;\n  }\n"])), _colors.blue);
var PIPopup = exports.PIPopup = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  background-color: ", ";\n  box-shadow: 0 2px 3px rgba(0,0,0,.1);\n  display: none;\n  margin: auto;\n  padding: 24px auto;\n  text-align: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: ", ";\n  position: absolute;\n  top: 68px;\n  left: 12px;\n  z-index: 12;\n  &.menuOpen {\n    display: block;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"])), _colors.white, _colors.white);
var FlexWrap = exports.FlexWrap = _styledComponents["default"].div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 6px;\n  &.homeWrap {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n    height: 278px;\n    justify-content: space-between;\n    align-content: space-between;\n  }\n"])));