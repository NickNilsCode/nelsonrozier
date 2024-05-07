"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = _interopRequireDefault(require("react"));
var _blog = require("../styled-components/pages/blog");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(1).reduce(function (xs, x, i) {
    return xs.concat([sep, x]);
  }, [arr[0]]);
}
function _default(blogData) {
  return blogData.map(function (a, ai) {
    var author = a.author == "On behalf of Nelson, Rozier, & Christenson" ? a.author : "by " + a.author;
    var date = new Date(a.date);
    var year = date.getFullYear();
    var day = date.getDate();
    var month = months[date.getMonth()];
    var zeromonth = date.getMonth() + 1;
    zeromonth = zeromonth > 9 ? zeromonth : "0" + zeromonth;
    var titledashed = a.title.toLowerCase().replace(/[^\w\s]/gi, "").split(" ").join("-");
    return /*#__PURE__*/_react["default"].createElement(_blog.BlogDiv, {
      key: ai
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/blog/".concat(year, "/").concat(zeromonth, "/").concat(titledashed)
    }, /*#__PURE__*/_react["default"].createElement("h2", null, a.title)), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("a", {
      href: "/"
    }, author), " | ", month, " ", day, ", ", year, " |", " ", intersperse(a.categories.map(function (b, bi) {
      return /*#__PURE__*/_react["default"].createElement("a", {
        key: bi,
        href: "/blog/category/".concat(b.toLowerCase().split(" ").join("-"))
      }, b);
    }), ", ")), /*#__PURE__*/_react["default"].createElement("p", {
      className: "ellipsisContent"
    }, a.blurb), /*#__PURE__*/_react["default"].createElement("a", {
      href: a.link
    }, "read more"));
  });
}