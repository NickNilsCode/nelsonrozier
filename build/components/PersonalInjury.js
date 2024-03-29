"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ = require("./");
var _personalInjury = require("../styled-components/components/personalInjury");
var _global = require("../styled-components/global");
var _personalinjurylist = _interopRequireDefault(require("../data/personalinjurylist"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
var PersonalInjuryComponent = /*#__PURE__*/function (_Component) {
  _inherits(PersonalInjuryComponent, _Component);
  var _super = _createSuper(PersonalInjuryComponent);
  function PersonalInjuryComponent(props) {
    var _this;
    _classCallCheck(this, PersonalInjuryComponent);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "menuManager", function () {
      return _this.setState({
        menuOpen: !_this.state.menuOpen
      });
    });
    _defineProperty(_assertThisInitialized(_this), "fillPI", function (mobile) {
      return _personalinjurylist["default"].map(function (a, i) {
        var className = "";
        if (mobile) {
          className = "mobilePI";
        } else {
          if (_this.props.selected == a.name) {
            className = "desktopPI selectedPI";
          } else {
            className = "desktopPI";
          }
        }
        return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: a.link
        }, /*#__PURE__*/_react["default"].createElement(_personalInjury.PIButton, {
          className: className,
          index: i,
          size: _personalinjurylist["default"].length,
          dimg: a.icon,
          himg: a.hicon
        }, a.name)));
      });
    });
    _this.state = {
      menuOpen: false
    };
    return _this;
  }
  _createClass(PersonalInjuryComponent, [{
    key: "render",
    value: function render() {
      var menuOpen = this.state.menuOpen;
      var home = this.props.home;
      return /*#__PURE__*/_react["default"].createElement(_personalInjury.PersonalInjury, {
        className: home ? "homePI" : ""
      }, /*#__PURE__*/_react["default"].createElement(_personalInjury.DesktopPI, {
        className: home ? "homeDPI" : ""
      }, /*#__PURE__*/_react["default"].createElement("h2", null, "Personal Injury"), /*#__PURE__*/_react["default"].createElement(_personalInjury.FlexWrap, {
        className: home ? "homeWrap" : ""
      }, this.fillPI(false))), /*#__PURE__*/_react["default"].createElement(_personalInjury.MobilePI, null, /*#__PURE__*/_react["default"].createElement(_personalInjury.PIBar, {
        onClick: this.menuManager
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-bars"
      }), " PERSONAL INJURY"), /*#__PURE__*/_react["default"].createElement(_personalInjury.PIPopup, {
        className: menuOpen ? "menuOpen" : ""
      }, menuOpen && this.fillPI(true), /*#__PURE__*/_react["default"].createElement(_personalInjury.PIButton, {
        className: "mobilePI",
        size: _personalinjurylist["default"].length,
        onClick: this.menuManager
      }, "X Close"))), !home && /*#__PURE__*/_react["default"].createElement(_.ContentBottom, {
        className: "desktopBottom"
      }));
    }
  }]);
  return PersonalInjuryComponent;
}(_react.Component);
var _default = exports["default"] = PersonalInjuryComponent;