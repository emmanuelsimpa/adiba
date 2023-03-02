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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../landing */ "./src/landing/index.tsx");


// import { Landing } from "./shared/components/layouts/landing";
function setupShell(app) {
  app.registerPageLayout("standard", function (_ref) {
    var children = _ref.children;
    console.log({
      children: children
    });
    return (
      /*#__PURE__*/
      // <Landing children={children} />
      react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children)
    );
  });
  //   app.registerPageLayout("standard", (children) => (
  //     <Landing children={children} />
  //   ));
  app.registerPage("/land", _landing__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "standard"
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0df4f88fc6b323c6b843")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8d42fddc5963de1704bd.hot-update.js.map