"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _blogBottom = require("../styled-components/components/blogBottom");
var _global = require("../styled-components/global");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import archives from '../data/archives';
var BlogBottomComponent = /*#__PURE__*/function (_Component) {
  _inherits(BlogBottomComponent, _Component);
  var _super = _createSuper(BlogBottomComponent);
  function BlogBottomComponent(props) {
    var _this;
    _classCallCheck(this, BlogBottomComponent);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "changeSearch", function (e) {
      _this.setState({
        searchInput: e.target.value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "searchBlogs", function (e) {
      e.preventDefault();
      window.location.href = "/blog/search/" + _this.state.searchInput;
    });
    _defineProperty(_assertThisInitialized(_this), "changeBlogDate", function (e) {
      e.preventDefault();
      window.location.href = '/blog/' + e.target.value;
    });
    _this.state = {
      searchInput: "",
      blogs: [],
      categories: [],
      archives: []
    };
    return _this;
  }
  _createClass(BlogBottomComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      fetch('/api/blogs/getThree').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.setState({
          blogs: res
        });
      });
      fetch('/api/blogs/getCategories').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.setState({
          categories: res
        });
      });
      fetch('/api/blogs/getMonths').then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.setState({
          archives: res
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        className = _this$props.className,
        home = _this$props.home,
        blog = _this$props.blog;
      var _this$state = this.state,
        blogs = _this$state.blogs,
        categories = _this$state.categories,
        archives = _this$state.archives;
      return /*#__PURE__*/_react["default"].createElement(_blogBottom.BlogBottom, {
        className: className
      }, /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.searchBlogs
      }, /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Search...",
        type: "text",
        required: true,
        onChange: this.changeSearch
      }), /*#__PURE__*/_react["default"].createElement(_global.GoldButton, {
        type: "submit"
      }, "Search")), /*#__PURE__*/_react["default"].createElement("h2", null, "Categories"), /*#__PURE__*/_react["default"].createElement("ul", null, categories.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "/blog/category/".concat(a.name.toLowerCase().split(" ").join("-"))
        }, a.name), " (", a.qty, ")");
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Archives"), /*#__PURE__*/_react["default"].createElement("select", {
        onChange: this.changeBlogDate
      }, archives.map(function (a, i) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: i,
          value: a.src
        }, a.title, " (", a.qty, ")");
      })), /*#__PURE__*/_react["default"].createElement("h2", null, "Recent Posts"), /*#__PURE__*/_react["default"].createElement("ul", null, blogs.map(function (a, i) {
        var date = new Date(a.date);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        month = month > 9 ? month : "0" + month;
        var titledashed = a.title.toLowerCase().replace(/[^\w\s]/gi, '').split(" ").join('-');
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: "/blog/".concat(year, "/").concat(month, "/").concat(titledashed)
        }, a.title));
      })), /*#__PURE__*/_react["default"].createElement(_global.BlueButton, {
        target: "_blank",
        href: "https://reviewplatform.findlaw.com/nelsonrozier"
      }, "REVIEW US"), /*#__PURE__*/_react["default"].createElement(_global.FBButton, {
        target: "_blank",
        href: "https://www.facebook.com/nelsonrozier/"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fab fa-facebook-f"
      })));
    }
  }]);
  return BlogBottomComponent;
}(_react.Component);
var _default = exports["default"] = BlogBottomComponent;