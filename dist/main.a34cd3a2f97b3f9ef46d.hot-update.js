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
/* harmony import */ var _shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layouts/landing */ "./src/_app/shared/components/layouts/landing.tsx");



// import { Landing } from "./shared/components/layouts/landing";
function setupShell(app) {
  app.registerPageLayout("standard", function (_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: children
    })
    // <>
    //   <Header />
    //   <Navigation />
    //   {children}
    //   <Footer />
    // </>
    ;
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
/******/ 	__webpack_require__.h = () => ("7fa8ba4581bccc892b7d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a34cd3a2f97b3f9ef46d.hot-update.js.map