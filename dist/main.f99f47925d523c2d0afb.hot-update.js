"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/piral/esm/hydrate.js":
/*!*******************************************!*\
  !*** ./node_modules/piral/esm/hydrate.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hydrateInstance": () => (/* binding */ hydrateInstance)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./node_modules/piral/esm/run.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./node_modules/piral/esm/options.js");



/**
 * Sets up a new Piral instance and hydrates it using the provided options.
 * @param options The options to use when setting up the Piral instance.
 * @deprecated Use `createInstance` with `hydrate` directly.
 * @example
```ts
import { hydrateInstance } from 'piral';
hydrateInstance();
```
 */
function hydrateInstance(options) {
    return (0,_run__WEBPACK_IMPORTED_MODULE_1__.runInstance)((app, selector) => (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.hydrate)(app, (0,_options__WEBPACK_IMPORTED_MODULE_2__.getContainer)(selector)), options);
}
//# sourceMappingURL=hydrate.js.map

/***/ }),

/***/ "./node_modules/piral/esm/instance.js":
/*!********************************************!*\
  !*** ./node_modules/piral/esm/instance.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInstanceElement": () => (/* binding */ createInstanceElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-ext'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function createInstanceElement(instance, layout, errors, dashboardPath = '/', piralChildren) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { instance: instance },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { layout: layout }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { errors: errors }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { path: dashboardPath, component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-ext'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) }),
        piralChildren));
}
//# sourceMappingURL=instance.js.map

/***/ }),

/***/ "./node_modules/piral/esm/render.js":
/*!******************************************!*\
  !*** ./node_modules/piral/esm/render.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderInstance": () => (/* binding */ renderInstance)
/* harmony export */ });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./node_modules/piral/esm/options.js");
/* harmony import */ var _run__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./run */ "./node_modules/piral/esm/run.js");



/**
 * Sets up a new Piral instance and renders it using the provided options.
 * @param options The options to use when setting up the Piral instance.
 * @deprecated Use `createInstance` with `render` directly.
 * @example
```ts
import { renderInstance } from 'piral';
renderInstance();
```
 */
function renderInstance(options) {
    return (0,_run__WEBPACK_IMPORTED_MODULE_1__.runInstance)((app, selector) => (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.render)(app, (0,_options__WEBPACK_IMPORTED_MODULE_2__.getContainer)(selector)), options);
}
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/***/ ((module) => {



function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (true) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (false) {} else {
  module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module './cjs/react-dom.development.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module) => {



if (false) {} else {
  module.exports = Object(function webpackMissingModule() { var e = new Error("Cannot find module './cjs/react.development.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
}


/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (warning);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ee448ded6bc3d34ddf54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f99f47925d523c2d0afb.hot-update.js.map