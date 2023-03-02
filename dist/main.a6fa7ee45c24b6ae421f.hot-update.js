"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/components/Forms/Basic/Basic.js":
/*!****************************************************!*\
  !*** ./src/member/components/Forms/Basic/Basic.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function Basic() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    activeStepIndex = _useContext.activeStepIndex,
    setActiveStepIndex = _useContext.setActiveStepIndex,
    formData = _useContext.formData,
    setFormData = _useContext.setFormData;
  var renderError = function renderError(message) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "italic text-red-600"
    }, message);
  };
  var ValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    name: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(),
    email: yup__WEBPACK_IMPORTED_MODULE_3__.string().email().required()
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: ValidationSchema,
    onSubmit: function onSubmit(values) {
      var data = _objectSpread(_objectSpread({}, formData), values);
      setFormData(data);
      setActiveStepIndex(activeStepIndex + 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Form, {
    className: "flex flex-col justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "text-2xl font-medium self-center mb-2"
  }, "Welcome!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col items-start mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "font-medium text-gray-900"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
    name: "name",
    className: "rounded-md border-2 p-2",
    placeholder: "John Doe"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
    name: "name",
    render: renderError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col items-start mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "font-medium text-gray-900"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
    name: "email",
    className: "rounded-md border-2 p-2",
    placeholder: "john.doe@gmail.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
    name: "email",
    render: renderError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "rounded-md bg-indigo-500 font-medium text-white my-2 p-2",
    type: "submit"
  }, "Continue")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basic);

/***/ }),

/***/ "./src/member/components/Forms/Basic/index.js":
/*!****************************************************!*\
  !*** ./src/member/components/Forms/Basic/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basic */ "./src/member/components/Forms/Basic/Basic.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Basic__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/member/components/Forms/Success/Success.js":
/*!********************************************************!*\
  !*** ./src/member/components/Forms/Success/Success.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Success() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "font-medium"
  }, "Workspace successfully created!");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Success);

/***/ }),

/***/ "./src/member/components/Forms/Success/index.js":
/*!******************************************************!*\
  !*** ./src/member/components/Forms/Success/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Success */ "./src/member/components/Forms/Success/Success.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Success__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/member/components/Forms/Workspace/Workspace.js":
/*!************************************************************!*\
  !*** ./src/member/components/Forms/Workspace/Workspace.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function Workspace() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    activeStepIndex = _useContext.activeStepIndex,
    setActiveStepIndex = _useContext.setActiveStepIndex,
    formData = _useContext.formData,
    setFormData = _useContext.setFormData;
  var renderError = function renderError(message) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("p", {
      className: "italic text-red-600"
    }, message);
  };
  var ValidationSchema = yup__WEBPACK_IMPORTED_MODULE_3__.object().shape({
    workspaceName: yup__WEBPACK_IMPORTED_MODULE_3__.string().required(),
    workspaceURL: yup__WEBPACK_IMPORTED_MODULE_3__.string().url().required()
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
    initialValues: {
      workspaceName: "",
      workspaceURL: ""
    },
    validationSchema: ValidationSchema,
    onSubmit: function onSubmit(values) {
      var data = _objectSpread(_objectSpread({}, formData), values);
      setFormData(data);
      setActiveStepIndex(activeStepIndex + 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Form, {
    className: "flex flex-col justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col items-start mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "font-medium text-gray-900"
  }, "Workspace Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
    name: "workspaceName",
    className: "rounded-md border-2 p-2",
    placeholder: "My Workspace"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
    name: "workspaceName",
    render: renderError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex flex-col items-start mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("label", {
    className: "font-medium text-gray-900"
  }, "Workspace URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
    name: "workspaceURL",
    className: "rounded-md border-2 p-2",
    placeholder: "https://my-workspace.com"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
    name: "workspaceURL",
    render: renderError
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "rounded-md bg-indigo-500 font-medium text-white my-2 p-2",
    type: "submit"
  }, "Continue")));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Workspace);

/***/ }),

/***/ "./src/member/components/Forms/Workspace/index.js":
/*!********************************************************!*\
  !*** ./src/member/components/Forms/Workspace/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Workspace */ "./src/member/components/Forms/Workspace/Workspace.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Workspace__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/member/components/Forms/index.js":
/*!**********************************************!*\
  !*** ./src/member/components/Forms/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Basic": () => (/* reexport safe */ _Basic__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Success": () => (/* reexport safe */ _Success__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "Workspace": () => (/* reexport safe */ _Workspace__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Basic */ "./src/member/components/Forms/Basic/index.js");
/* harmony import */ var _Workspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Workspace */ "./src/member/components/Forms/Workspace/index.js");
/* harmony import */ var _Success__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Success */ "./src/member/components/Forms/Success/index.js");





/***/ }),

/***/ "./src/member/components/Step/Step.js":
/*!********************************************!*\
  !*** ./src/member/components/Step/Step.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Forms */ "./src/member/components/Forms/index.js");



function Step() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    activeStepIndex = _useContext.activeStepIndex;
  var stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Forms__WEBPACK_IMPORTED_MODULE_2__.Basic, null);
      break;
    case 1:
      stepContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Forms__WEBPACK_IMPORTED_MODULE_2__.Workspace, null);
      break;
    case 2:
      stepContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Forms__WEBPACK_IMPORTED_MODULE_2__.Success, null);
      break;
    default:
      break;
  }
  return stepContent;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Step);

/***/ }),

/***/ "./src/member/components/Stepper/Stepper.js":
/*!**************************************************!*\
  !*** ./src/member/components/Stepper/Stepper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function Stepper() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../App'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    activeStepIndex = _useContext.activeStepIndex;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var stepperItems = document.querySelectorAll(".stepper-item");
    stepperItems.forEach(function (step, i) {
      if (i <= activeStepIndex) {
        step.classList.add("bg-indigo-500", "text-white");
      } else {
        step.classList.remove("bg-indigo-500", "text-white");
      }
    });
  }, [activeStepIndex]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-2/3 flex flex-row items-center justify-center px-32 py-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stepper-item w-8 h-8 text-center font-medium border-2 rounded-full"
  }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-auto border-t-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stepper-item w-8 h-8 text-center font-medium border-2 rounded-full"
  }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-auto border-t-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "stepper-item w-8 h-8 text-center font-medium border-2 rounded-full"
  }, "3"));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stepper);

/***/ }),

/***/ "./src/member/components/Stepper/index.js":
/*!************************************************!*\
  !*** ./src/member/components/Stepper/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stepper */ "./src/member/components/Stepper/Stepper.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Stepper__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

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
/* harmony import */ var _components_Step_Step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Step/Step */ "./src/member/components/Step/Step.js");
/* harmony import */ var _components_Stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Stepper */ "./src/member/components/Stepper/index.js");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Stepper__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Step_Step__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
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
/******/ 	__webpack_require__.h = () => ("ec97af9f78eeca93a0ba")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a6fa7ee45c24b6ae421f.hot-update.js.map