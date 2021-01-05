"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 342px;\n  background-image: url(\"/images/bg-map-new.jpg\");\n  background-position: center;\n  background-size: cover;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Map = _styledComponents["default"].div(_templateObject());

exports.Map = Map;