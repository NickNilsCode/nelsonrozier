"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header4 = exports.Header3 = exports.Header2 = exports.Header1 = exports.HeaderDiv = exports.HeaderWrap = exports.Header = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  font-family: 'Libre Baskerville',Georgia,\"Times New Roman\",serif;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 100;\n  @media(min-width: 900px){\n    font-size: 32px;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  background-color: #333;\n  color: #fff;\n  padding: 0 32px;\n  font-size: 28px;\n  font-weight: 700;\n  width: max-content;\n  margin: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #383b40;\n  font-weight: 400;\n  font-size: 24px;\n  margin: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 23px;\n  font-weight: 700;\n  color: #7c3230;\n  margin: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 24px;\n  @media(min-width: 900px){\n    margin-top: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 900px;\n  text-align: center;\n  position: relative;\n  padding: 24px 0;\n  margin: auto;\n  h2, p {\n    text-align: center;\n  }\n  .consultationAnchor {\n    bottom: -32px;\n    left: 0;\n    right: 0;\n    margin: auto;\n    position: absolute;\n  }\n  a {\n    width: 100%;\n    max-width: 480px;\n    z-index: 10;\n  }\n  img {\n    width: calc(100% - 24px);\n    max-width: 480px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  min-height: 100px;\n  background-image: url(\"/images/bg-header-page-wrap-home.jpg\");\n  background-position: center;\n  background-size: cover;\n  color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Header = _styledComponents["default"].header(_templateObject());

exports.Header = Header;

var HeaderWrap = _styledComponents["default"].div(_templateObject2());

exports.HeaderWrap = HeaderWrap;

var HeaderDiv = _styledComponents["default"].div(_templateObject3());

exports.HeaderDiv = HeaderDiv;

var Header1 = _styledComponents["default"].h2(_templateObject4());

exports.Header1 = Header1;

var Header2 = _styledComponents["default"].h2(_templateObject5());

exports.Header2 = Header2;

var Header3 = _styledComponents["default"].h2(_templateObject6());

exports.Header3 = Header3;

var Header4 = _styledComponents["default"].h2(_templateObject7());

exports.Header4 = Header4;