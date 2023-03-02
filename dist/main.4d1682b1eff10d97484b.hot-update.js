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
  app.registerPageLayout("standard", function (_ref) {
    var children = _ref.children;
    return _shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_1__["default"];
  });
  app.registerPage("/land", _landing__WEBPACK_IMPORTED_MODULE_0__["default"], {
    layout: "standard"
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89817b2bc8f9b5061aa8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4d1682b1eff10d97484b.hot-update.js.map