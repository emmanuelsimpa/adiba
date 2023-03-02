"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/forms/SignUpWizard.tsx":
/*!*******************************************!*\
  !*** ./src/member/forms/SignUpWizard.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormContext": () => (/* binding */ FormContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Step/Step'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Stepper'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import * as React from "react";
// import UserWizard from "../../_app/shared/member/UserWizard";
// import UserMgtViewModel from "../../_app/shared/ViewModels/UserMgtViewModel";
// import Summary from "./Summary";
// import { Component } from "react";
// import Administrator from "./Administrator";
// import BusinessEntity from "./BusinessEntity";
// import { SignUpSteps } from "../../_app/shared/member/SignUpSteps";




var FormContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function SignUpWizard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeStepIndex = _useState2[0],
    setActiveStepIndex = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    formData = _useState4[0],
    setFormData = _useState4[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FormContext.Provider, {
    value: {
      activeStepIndex: activeStepIndex,
      setActiveStepIndex: setActiveStepIndex,
      formData: formData,
      setFormData: setFormData
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-screen h-screen flex flex-col items-center justify-start'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Stepper'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../components/Step/Step'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpWizard);
// export default class SignUpWizard extends Component {
//   state = {
//     step: 1,
//     first_name: "",
//     last_name: "",
//     email_address: "",
//     phone_number: "",
//     license_number: "",
//     password: "",
//     confirm_password: "",
//     business_name: "",
//     business_address: "",
//     business_email: "",
//     business_url: "",
//   };
//   prevStep = () => {
//     const { step } = this.state;
//     SignUpSteps[step - 1]["status"] = "upcoming";
//     SignUpSteps[step - 2]["status"] = "current";
//     this.setState({ step: step - 1 });
//   };
//   nextStep = () => {
//     const { step } = this.state;
//     SignUpSteps[step - 1]["status"] = "complete";
//     SignUpSteps[step]["status"] = "current";
//     this.setState({ step: step + 1 });
//   };
//   // handleChange = (data) => {
//   //   this.setState({ first_name: 'emmy' });
//   //   console.log('ln 41', data.first_name);
//   // };
//   handleChange = (input: any) => (e: any) => {
//     this.setState({ [input]: e.target.value });
//   };
//   handleSwitch = (id: string) => (e: any) => {
//     const { step } = this.state;
//     SignUpSteps[step - 1]["status"] = "complete";
//     SignUpSteps[parseInt(id) - 1]["status"] = "current";
//     this.setState({ step: parseInt(id) });
//   };
//   handleSubmit = () => {
//     console.log(this.state);
//     const clientsViewModelsInstance = new UserMgtViewModel("signup");
//     const signUp = clientsViewModelsInstance.signUp(this.state);
//     signUp.then((response: any) => {
//       if (response.status == 200) {
//         location.href = "/";
//       } else {
//         location.href = ".";
//       }
//     });
//   };
//   render() {
//     const { step } = this.state;
//     const {
//       first_name,
//       last_name,
//       email_address,
//       phone_number,
//       license_number,
//       password,
//       confirm_password,
//       business_name,
//       business_address,
//       business_email,
//       business_url,
//     } = this.state;
//     const values = {
//       first_name,
//       last_name,
//       email_address,
//       phone_number,
//       license_number,
//       password,
//       confirm_password,
//       business_name,
//       business_address,
//       business_email,
//       business_url,
//     };
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <UserWizard
//               handleSwitch={this.handleSwitch}
//               steps={SignUpSteps}
//               content={
//                 <Administrator
//                   nextStep={this.nextStep}
//                   handleChange={this.handleChange}
//                   values={values}
//                 />
//               }
//             />
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <UserWizard
//               handleSwitch={this.handleSwitch}
//               steps={SignUpSteps}
//               content={
//                 <BusinessEntity
//                   prevStep={this.prevStep}
//                   nextStep={this.nextStep}
//                   handleChange={this.handleChange}
//                   values={values}
//                 />
//               }
//             />
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <UserWizard
//               handleSwitch={this.handleSwitch}
//               steps={SignUpSteps}
//               content={
//                 <Summary
//                   prevStep={this.prevStep}
//                   values={values}
//                   handleSubmit={this.handleSubmit}
//                 />
//               }
//             />
//           </>
//         );
//       default:
//       // do nothing
//     }
//   }
// }

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5ec8f91c3676157d1965")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.22e30b32f55e5b76de29.hot-update.js.map