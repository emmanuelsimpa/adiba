"use strict";
self["webpackHotUpdateadiba_central"]("main",{

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
/* harmony import */ var _forms_SignUpWizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../forms/SignUpWizard */ "./src/member/forms/SignUpWizard.tsx");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function Workspace() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_forms_SignUpWizard__WEBPACK_IMPORTED_MODULE_2__.FormContext),
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("60d0fa5a4f59dafe1ef0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ccb76cf322a0882c132b.hot-update.js.map