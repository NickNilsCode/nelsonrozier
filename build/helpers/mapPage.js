"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = function (pageData) {
  return pageData.map(function (a, i) {
    var A = a.type;
    return /*#__PURE__*/_react["default"].createElement(A, {
      key: i,
      dangerouslySetInnerHTML: {
        __html: a.content
      }
    });
  });
};