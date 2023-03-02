"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/StepTwo.tsx":
/*!**************************************!*\
  !*** ./src/member/formT/StepTwo.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var StepTwo = function StepTwo(props) {
  var handleSubmit = function handleSubmit(values) {
    props.next(values, true);
  };
  var back = function back(values) {
    props.prev(values);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
    initialValues: props.data,
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "First"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
    name: 'email_address'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "Last"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
    name: 'Phone Number'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: 'button',
    onClick: back
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    type: 'submit'
  }, "Submit")), ";");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepTwo);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bd3284a1e5e3b698b03c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ff8133b82f54dab3a3a8.hot-update.js.map