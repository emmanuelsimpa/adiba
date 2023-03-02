"use strict";
self["webpackHotUpdateadiba_central"]("main",{

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../SignUpWizard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function Stepper() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../SignUpWizard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1c856df98df9a7299a24")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4601af7685d154a167ff.hot-update.js.map