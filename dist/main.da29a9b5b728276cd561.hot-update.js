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
/* harmony import */ var _member_redux_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../member/redux/selector */ "./src/member/redux/selector.ts");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../redux/hook */ "./src/redux/hook.ts");



function DashboardT() {
  var user = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_member_redux_selector__WEBPACK_IMPORTED_MODULE_1__.selectCurrentUser);
  var token = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_member_redux_selector__WEBPACK_IMPORTED_MODULE_1__.selectCurrentToken);
  console.log("ln 9", {
    user: user,
    token: token.slice(0, 9)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Hello"));
}

/***/ }),

/***/ "./src/member/redux/selector.ts":
/*!**************************************!*\
  !*** ./src/member/redux/selector.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectCurrentToken": () => (/* binding */ selectCurrentToken),
/* harmony export */   "selectCurrentUser": () => (/* binding */ selectCurrentUser)
/* harmony export */ });
var selectCurrentUser = function selectCurrentUser(state) {
  return state.auth.user;
};
var selectCurrentToken = function selectCurrentToken(state) {
  return state.auth.token;
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2e8205d0f4202b6fe1fa")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.da29a9b5b728276cd561.hot-update.js.map