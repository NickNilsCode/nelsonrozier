"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavButton = exports.Nav = exports.MobileNav = exports.MenuPopup = exports.MenuBar = exports.DesktopNav = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _colors = require("../colors");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Nav = exports.Nav = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n\n"])));
var DesktopNav = exports.DesktopNav = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: none;\n  width: max-content;\n  margin: 32px auto;\n  align-items: center;\n  justify-content: center;\n  @media(min-width: 900px){\n    display: flex;\n  }\n"])));
var MobileNav = exports.MobileNav = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: block;\n  position: relative;\n  @media(min-width: 900px){\n    display: none;\n  }\n"])));
var NavButton = exports.NavButton = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 18px;\n  width: max-content;\n  color: ", ";\n  padding: 3px 13px;\n  border-right: ", ";\n  transition: background-color 0.4s;\n  background-color: ", ";\n  &.mobileNav {\n    text-transform: capitalize;\n    padding: 10px 37.5px;\n    border-right: none;\n    width: 100%;\n    box-sizing: border-box;\n    text-align: left;\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n    &.mobileNav {\n      background-color: ", ";\n    }\n  }\n"])), _colors.white, function (props) {
  return props.index != props.size - 1 ? "1px solid ".concat(_colors.white) : "none";
}, function (props) {
  return props.selected ? _colors.blue : "transparent";
}, function (props) {
  return props.selected ? _colors.whiteish : _colors.blue;
}, _colors.whiteish, _colors.whiteish);
var MenuBar = exports.MenuBar = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 24px;\n  margin: 12px 0;\n  text-align: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: ", ";\n  &:hover {\n    cursor: pointer;\n  }\n"])), _colors.blue, _colors.white);
var MenuPopup = exports.MenuPopup = _styledComponents["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  width: calc(100% - 24px);\n  background-color: ", ";\n  display: none;\n  margin: auto;\n  padding: 24px auto;\n  text-align: center;\n  font-weight: 700;\n  font-size: 16px;\n  color: ", ";\n  position: absolute;\n  top: 68px;\n  left: 12px;\n  z-index: 12;\n  &.menuOpen {\n    display: block;\n  }\n  &:hover {\n    cursor: pointer;\n  }\n"])), _colors.blue, _colors.white);