"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AttorneyDiv = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    position: relative;\n    img {\n      display: inherit;\n    }\n    @media (min-width: 900px){\n      img {\n        position: absolute;\n        top: 0;\n        right: 0;\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AttorneyDiv = _styledComponents["default"].div(_templateObject());

exports.AttorneyDiv = AttorneyDiv;