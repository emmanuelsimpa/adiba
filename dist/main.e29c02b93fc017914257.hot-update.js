"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/components/button.tsx":
/*!************************************************!*\
  !*** ./src/member/formT/components/button.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_app/shared/utils/className */ "./src/_app/shared/utils/className.tsx");

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
    type = _ref$type === void 0 ? "primary" : _ref$type,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    className = _ref.className,
    onClick = _ref.onClick;
  var typeClasses = type === "primary" ? "bg-primary-purplish-blue text-white hover:opacity-70" : type === "secondary" ? "bg-primary-marine-blue text-white hover:opacity-70" : "bg-transparent text-neutral-cool-gray ";
  var sizeClasses = size === "sm" ? "text-sm p-0" : size === "lg" ? "text-lg px-5 py-2 font-medium" : "px-5 py-2 font-medium";
  return React.createElement("button", {
    onClick: onClick,
    className: (0,_app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__.classNames)("rounded ", typeClasses, sizeClasses, className)
  }, children);
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b77c1b0a3c3a532fb2f5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e29c02b93fc017914257.hot-update.js.map