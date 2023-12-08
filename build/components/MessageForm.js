"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _messageForm = require("../styled-components/components/messageForm");
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
var MessageFormComponent = /*#__PURE__*/function (_Component) {
  _inherits(MessageFormComponent, _Component);
  var _super = _createSuper(MessageFormComponent);
  function MessageFormComponent(props) {
    var _this;
    _classCallCheck(this, MessageFormComponent);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "submitForm", function (e) {
      e.preventDefault();
      fetch('/emailer', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(_this.state)
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        alert("An email has been submitted to the associates at Nelson, Rozier, and Christenson. Someone will be in contact with you shortly.");
        _this.resetState();
      })["catch"](function (err) {
        alert("Something went wrong. Please contact Nelson, Rozier, and Christenson directly via email or telephone. We are sorry for the inconvenience.");
        _this.resetState();
      });
    });
    _defineProperty(_assertThisInitialized(_this), "resetState", function () {
      _this.setState({
        name: "",
        email: "",
        phone: "",
        description: "",
        disclaimer: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "updateState", function (e, prop) {
      var obj = {};
      obj[prop] = e.currentTarget.value;
      _this.setState(obj);
    });
    _defineProperty(_assertThisInitialized(_this), "updateCheckbox", function () {
      _this.setState({
        disclaimer: !_this.state.disclaimer
      });
    });
    _this.state = {
      name: "",
      email: "",
      phone: "",
      description: "",
      disclaimer: false
    };
    return _this;
  }
  _createClass(MessageFormComponent, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$state = this.state,
        name = _this$state.name,
        email = _this$state.email,
        phone = _this$state.phone,
        description = _this$state.description,
        disclaimer = _this$state.disclaimer;
      var buttonDisabled = disclaimer == true && email ? false : true;
      return /*#__PURE__*/_react["default"].createElement(_messageForm.MessageFormWrap, {
        id: "consultation"
      }, /*#__PURE__*/_react["default"].createElement(_messageForm.MessageForm, null, /*#__PURE__*/_react["default"].createElement("h2", null, "How Can We Help You?"), /*#__PURE__*/_react["default"].createElement("p", null, "Fields marked with an * are required."), /*#__PURE__*/_react["default"].createElement("form", {
        onSubmit: this.submitForm
      }, /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Name",
        type: "text",
        value: name,
        onChange: function onChange(e) {
          _this2.updateState(e, "name");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Email Address*",
        type: "email",
        value: email,
        required: true,
        onChange: function onChange(e) {
          _this2.updateState(e, "email");
        }
      }), /*#__PURE__*/_react["default"].createElement(_global.Input, {
        placeholder: "Phone",
        type: "phone",
        value: phone,
        onChange: function onChange(e) {
          _this2.updateState(e, "phone");
        }
      })), /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_global.TextArea, {
        placeholder: "Brief description of your legal issue.",
        value: description,
        onChange: function onChange(e) {
          _this2.updateState(e, "description");
        }
      }))), /*#__PURE__*/_react["default"].createElement(_global.FlexDiv, null, /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_messageForm.MessageLinks, null, /*#__PURE__*/_react["default"].createElement("a", {
        href: "/disclaimer"
      }, "Disclaimer"), " | ", /*#__PURE__*/_react["default"].createElement("a", {
        href: "/privacy"
      }, "Privacy Policy")), /*#__PURE__*/_react["default"].createElement(_messageForm.MessageDisclaimer, null, /*#__PURE__*/_react["default"].createElement("input", {
        required: true,
        type: "checkbox",
        id: "disclaimer",
        name: "disclaimer",
        checked: disclaimer,
        onChange: this.updateCheckbox
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "disclaimer"
      }, "I Have Read The Disclaimer *"))), /*#__PURE__*/_react["default"].createElement(_global.HalfSize, null, /*#__PURE__*/_react["default"].createElement(_global.BigGoldButton, {
        className: buttonDisabled ? "buttonDisabled" : "",
        type: "submit"
      }, "Send Your Information Today"))))));
    }
  }]);
  return MessageFormComponent;
}(_react.Component);
var _default = exports["default"] = MessageFormComponent;