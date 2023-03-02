"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/app.tsx":
/*!**************************!*\
  !*** ./src/_app/app.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupShell": () => (/* binding */ setupShell)
/* harmony export */ });
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../landing */ "./src/landing/index.tsx");
/* harmony import */ var _shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/layouts/landing */ "./src/_app/shared/components/layouts/landing.tsx");


function setupShell(app) {
  app.registerPageLayout("fullscreen", _shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_1__["default"]);
  app.registerPage("/land", _landing__WEBPACK_IMPORTED_MODULE_0__["default"], {
    layout: "standard"
  });
}

/***/ }),

/***/ "./src/_app/shared/components/layouts/landing.tsx":
/*!********************************************************!*\
  !*** ./src/_app/shared/components/layouts/landing.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Landing = function Landing() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Hello World !!!!!!"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3027f4d4bdd09fc549f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.97bfdfb6aa3ea008d675.hot-update.js.map