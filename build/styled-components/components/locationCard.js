"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocationCardWrap = exports.LocationCard = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  margin: auto;\n  height: 100%;\n  max-width: 900px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 241px;\n  max-width: 300px;\n  background-color: #fff;\n  border-left: 1px solid black;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  padding: 18px 48px;\n  box-sizing: border-box;\n  p {\n    margin: 0;\n    position: relative;\n    line-height: 1.5;\n    i {\n      position: absolute;\n      left: -24px;\n      top: 2px;\n    }\n  }\n  h2 {\n    margin: 0;\n    margin-bottom: 12px;\n  }\n  .directionAnchor {\n\n    position: absolute;\n    bottom: -28px;\n    left: 24px;\n    .directionButton {\n      color: #fff;\n    }\n    i {\n      font-size: 13px;\n    }\n  }\n\n  #pinimg {\n    display: none;\n    position: absolute;\n    left: -31px;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 64px;\n  }\n  @media (min-width: 924px){\n    right: initial;\n    border-left: #833634 solid 65px;\n    max-width: 364px;\n    .directionAnchor {\n      position: absolute;\n      bottom: -52px;\n    }\n    .directionButton {\n      font-size: 22px;\n      width: 152px;\n      i {\n        font-size: 17px;\n      }\n    }\n    #pinimg {\n      display: block;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LocationCard = _styledComponents["default"].div(_templateObject());

exports.LocationCard = LocationCard;

var LocationCardWrap = _styledComponents["default"].div(_templateObject2());

exports.LocationCardWrap = LocationCardWrap;