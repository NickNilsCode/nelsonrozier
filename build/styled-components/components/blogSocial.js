"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialText = exports.SocialButton = exports.Logo = exports.BlogSocial = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _colors = require("../colors");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var BlogSocial = exports.BlogSocial = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n"])));
var SocialButton = exports.SocialButton = _styledComponents["default"].a(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  text-decoration: none;\n  height: 40px;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 12px;\n  border-radius: 4px;\n  &.blogFacebook {\n    background-color: #365089;\n    text-decoration: none;\n    .socialLogo {\n      background-color: #3c5998;\n    }\n  }\n  &.blogLinkedin {\n    background-color: #196fa2;\n    text-decoration: none;\n    .socialLogo {\n      background-color: #1c7cb4;\n    }\n  }\n  &.blogTwitter {\n    background-color: #1a9ad5;\n    text-decoration: none;\n    .socialLogo {\n      background-color: #1daced;\n    }\n  }\n  &:hover {\n    transition: background-color 0.5s;\n    cursor: pointer;\n    i {\n      left: 40px;\n    }\n    i:first-of-type {\n      left: 0px;\n    }\n    .socialLogo {\n      background-color: transparent;\n    }\n  }\n"])));
var Logo = exports.Logo = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 40px;\n  height: 40px;\n  overflow: hidden;\n  position: relative;\n  transition: background-color 0.5s;\n  border-radius: 4px 0 0 4px\n  i {\n    width: 40px;\n    height: 20px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    color: ", ";\n    transition: left 0.5s;\n  }\n  i:first-of-type {\n    left: -40px;\n  }\n"])), _colors.white);
var SocialText = exports.SocialText = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  font-family: 'Open Sans';\n  font-size: 14px;\n  font-weight: 700;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 7px 14px;\n"])), _colors.white);