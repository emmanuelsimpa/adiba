"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/shared/components/layouts/dashboard.tsx":
/*!**********************************************************!*\
  !*** ./src/_app/shared/components/layouts/dashboard.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardT": () => (/* binding */ DashboardT)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reduxsss_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../reduxsss/hook */ "./src/reduxsss/hook.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



function DashboardT() {
  var _useAppSelector = (0,_reduxsss_hook__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(function (state) {
      return {
        user: state
      };
    }, react_redux__WEBPACK_IMPORTED_MODULE_2__.shallowEqual),
    user = _useAppSelector.user;
  // console.log({ auth: user });
  console.log("ln 9", {
    user: user
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Hello"));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("84a5db08f039dc30cff2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.85f02cfe49cee26424bf.hot-update.js.map