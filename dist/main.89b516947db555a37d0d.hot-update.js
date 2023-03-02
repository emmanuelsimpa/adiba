"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/forms/SignUpWizard.tsx":
/*!*******************************************!*\
  !*** ./src/member/forms/SignUpWizard.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpWizard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_app/shared/member/UserWizard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_app/shared/ViewModels/UserMgtViewModel */ "./src/_app/shared/ViewModels/UserMgtViewModel.ts");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Summary */ "./src/member/forms/Summary.tsx");
/* harmony import */ var _Administrator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Administrator */ "./src/member/forms/Administrator.tsx");
/* harmony import */ var _BusinessEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BusinessEntity */ "./src/member/forms/BusinessEntity.tsx");
/* harmony import */ var _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_app/shared/member/SignUpSteps */ "./src/_app/shared/member/SignUpSteps.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var SignUpWizard = /*#__PURE__*/function (_Component) {
  _inherits(SignUpWizard, _Component);
  var _super = _createSuper(SignUpWizard);
  function SignUpWizard() {
    var _this;
    _classCallCheck(this, SignUpWizard);
    _this = _super.apply(this, arguments);
    _this.state = {
      step: 1,
      first_name: "",
      last_name: "",
      email_address: "",
      phone_number: "",
      license_number: "",
      password: "",
      confirm_password: "",
      business_name: "",
      business_address: "",
      business_email: "",
      business_url: ""
    };
    _this.prevStep = function () {
      var step = _this.state.step;
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 1]["status"] = "upcoming";
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 2]["status"] = "current";
      _this.setState({
        step: step - 1
      });
    };
    _this.nextStep = function () {
      var step = _this.state.step;
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 1]["status"] = "complete";
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step]["status"] = "current";
      _this.setState({
        step: step + 1
      });
    };
    // handleChange = (data) => {
    //   this.setState({ first_name: 'emmy' });
    //   console.log('ln 41', data.first_name);
    // };
    _this.handleChange = function (input) {
      return function (e) {
        _this.setState(_defineProperty({}, input, e.target.value));
      };
    };
    _this.handleSwitch = function (id) {
      return function (e) {
        var step = _this.state.step;
        _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 1]["status"] = "complete";
        _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[parseInt(id) - 1]["status"] = "current";
        _this.setState({
          step: parseInt(id)
        });
      };
    };
    _this.handleSubmit = function () {
      console.log(_this.state);
      var clientsViewModelsInstance = new _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_2__["default"]("signup");
      var signUp = clientsViewModelsInstance.signUp(_this.state);
      signUp.then(function (response) {
        if (response.status == 200) {
          location.href = "/";
        } else {
          location.href = ".";
        }
      });
    };
    return _this;
  }
  _createClass(SignUpWizard, [{
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$state = this.state,
        first_name = _this$state.first_name,
        last_name = _this$state.last_name,
        email_address = _this$state.email_address,
        phone_number = _this$state.phone_number,
        license_number = _this$state.license_number,
        password = _this$state.password,
        confirm_password = _this$state.confirm_password,
        business_name = _this$state.business_name,
        business_address = _this$state.business_address,
        business_email = _this$state.business_email,
        business_url = _this$state.business_url;
      var values = {
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
        phone_number: phone_number,
        license_number: license_number,
        password: password,
        confirm_password: confirm_password,
        business_name: business_name,
        business_address: business_address,
        business_email: business_email,
        business_url: business_url
      };
      switch (step) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_app/shared/member/UserWizard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            handleSwitch: this.handleSwitch,
            steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps,
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Administrator__WEBPACK_IMPORTED_MODULE_4__["default"], {
              nextStep: this.nextStep,
              handleChange: this.handleChange,
              values: values
            })
          }));
        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_app/shared/member/UserWizard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            handleSwitch: this.handleSwitch,
            steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps,
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BusinessEntity__WEBPACK_IMPORTED_MODULE_5__["default"], {
              prevStep: this.prevStep,
              nextStep: this.nextStep,
              handleChange: this.handleChange,
              values: values
            })
          }));
        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../_app/shared/member/UserWizard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            handleSwitch: this.handleSwitch,
            steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps,
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
              prevStep: this.prevStep,
              values: values,
              handleSubmit: this.handleSubmit
            })
          }));
        default:
        // do nothing
      }
    }
  }]);
  return SignUpWizard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dcaf3ee7f005e32d36ea")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.89b516947db555a37d0d.hot-update.js.map