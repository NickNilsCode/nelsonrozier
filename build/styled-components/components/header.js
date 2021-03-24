"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header5 = exports.Header4 = exports.Header3 = exports.Header2 = exports.Header1 = exports.HeaderDiv = exports.HeaderWrap = exports.DesktopView = exports.HeaderImage = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 100px;\n  color: ", ";\n  @media(min-width: 900px){\n    background-image: url(\"/images/Proof-8961.jpg\");\n    background-position: center;\n    background-size: cover;\n  }\n"])), _colors.white);

exports.Header = Header;

var HeaderImage = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: block;\n  width: 100vw;\n  min-height: 320px;\n  background-image: url(\"/images/Mobile-8961.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: ", ";\n  @media(min-width: 900px){\n    display: none;\n  }\n"])), _colors.white);

exports.HeaderImage = HeaderImage;

var DesktopView = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: none;\n  @media(min-width: 900px){\n    display: block;\n  }\n"])));

exports.DesktopView = DesktopView;

var HeaderWrap = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 900px;\n  text-align: center;\n  position: relative;\n  padding: 24px 0;\n  margin: auto;\n  h2, p {\n    text-align: center;\n  }\n  .consultationAnchor {\n    bottom: -12px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    position: absolute;\n  }\n  a {\n    width: 100%;\n    max-width: 480px;\n    z-index: 10;\n  }\n  img {\n    width: calc(100% - 24px);\n    max-width: 480px;\n  }\n  @media(min-width: 900px){\n    .consultationAnchor {\n      bottom: -32px;\n    }\n  }\n"])));

exports.HeaderWrap = HeaderWrap;

var HeaderDiv = _styledComponents["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  margin-top: 24px;\n  @media(min-width: 900px){\n    margin-top: 0;\n  }\n"])));

exports.HeaderDiv = HeaderDiv;

var Header1 = _styledComponents["default"].h2(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  font-size: 23px;\n  font-weight: 700;\n  color: ", ";\n  margin: 0;\n"])), _colors.red);

exports.Header1 = Header1;

var Header2 = _styledComponents["default"].h2(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 24px;\n  margin: 0;\n"])), _colors.red);

exports.Header2 = Header2;

var Header3 = _styledComponents["default"].h2(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  background-color: #333;\n  color: ", ";\n  padding: 0 32px;\n  font-size: 28px;\n  font-weight: 700;\n  width: max-content;\n  margin: auto;\n"])), _colors.white);

exports.Header3 = Header3;

var Header4 = _styledComponents["default"].h2(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  font-family: 'Libre Baskerville',Georgia,\"Times New Roman\",serif;\n  color: ", ";\n  font-size: 17px;\n  font-weight: 100;\n  text-shadow: 1px 1px #000000;\n  margin: 0 auto;\n  padding: 212px 0 24px 0;\n  line-height: 2;\n  max-width: 600px;\n  @media(min-width: 900px){\n    padding: 0;\n    font-size: 32px;\n    margin: 284px 0 24px 0;\n    max-width: 900px;\n  }\n"])), _colors.white);

exports.Header4 = Header4;

var Header5 = _styledComponents["default"].h2(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  font-family: 'Libre Baskerville',Georgia,\"Times New Roman\",serif;\n  color: ", ";\n  font-size: 17px;\n  font-weight: 100;\n  text-shadow: 1px 1px #000000;\n\n  @media(min-width: 900px){\n    font-size: 32px;\n  }\n"])), _colors.white);

exports.Header5 = Header5;