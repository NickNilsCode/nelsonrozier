"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BoxContent = exports.BoxTitle = exports.BottomBox = exports.MeetAttorneys = exports.ContentBottom = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  border-top: 1px solid #dfdfdf;\n  padding: 8px;\n  a {\n    text-decoration: underline;\n    display: block;\n    color: #333;\n    font-size: 15px;\n    line-height: 27px;\n    font-weight: 700;\n    text-align: left;\n    margin-bottom: 13px;\n  }\n  .readMore {\n    text-decoration: none;\n    margin-top: 12px;\n  }\n  i {\n    color: ", ";\n  }\n  a:hover i {\n    color: #333;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  padding: 3px 0;\n  width: calc(100% - 8px);\n  color: ", ";\n  border: 4px solid ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid #dfdfdf;\n  box-sizing: border-box;\n  border-collapse: collapse;\n  width: 100%;\n  margin-top: 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  img {\n    display: block;\n    margin: auto;\n  }\n  .freeConsultation {\n    margin: 24px 0 0 0;\n  }\n  .contactToday {\n    margin: auto;\n  }\n  .contactToday button {\n    margin: 0;\n  }\n  .learnMore, .learnMore i {\n    color: ", ";\n    margin: auto;\n    transition: color 300ms ease 0ms;\n  }\n  .learnMore:hover i {\n    color: #000;\n  }\n  #attorneyList {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  @media (min-width: 900px){\n    .contactToday, .contactToday button {\n      width: 100%;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  a {\n    width: max-content;\n    display: block;\n    word-wrap: break-word;\n    max-width: 100%;\n  }\n  &.mobileBottom {\n    width: 100%;\n    background-color: ", ";\n    color: #000;\n    text-align: center;\n  }\n  &.desktopBottom {\n    display: none;\n    width: 100%;\n    background-color: ", ";\n    color: #000;\n    text-align: center;\n  }\n  &.homePageBottom {\n    width: 222px;\n    margin-right: 24px;\n  }\n  @media (min-width: 900px){\n    &.mobileBottom {\n      display: none;\n    }\n    &.desktopBottom {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ContentBottom = _styledComponents["default"].div(_templateObject(), _colors.white, _colors.white);

exports.ContentBottom = ContentBottom;

var MeetAttorneys = _styledComponents["default"].div(_templateObject2(), _colors.blue);

exports.MeetAttorneys = MeetAttorneys;

var BottomBox = _styledComponents["default"].div(_templateObject3());

exports.BottomBox = BottomBox;

var BoxTitle = _styledComponents["default"].div(_templateObject4(), _colors.blue, _colors.white, _colors.white);

exports.BoxTitle = BoxTitle;

var BoxContent = _styledComponents["default"].div(_templateObject5(), _colors.blue);

exports.BoxContent = BoxContent;