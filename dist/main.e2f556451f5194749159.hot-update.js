"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/components/input.tsx":
/*!***********************************************!*\
  !*** ./src/member/formT/components/input.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Input": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_app/shared/utils/className */ "./src/_app/shared/utils/className.tsx");


var Input = function Input(_ref) {
  var label = _ref.label,
    value = _ref.value,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Enter a value" : _ref$placeholder,
    _onChange = _ref.onChange,
    _ref$showRequired = _ref.showRequired,
    showRequired = _ref$showRequired === void 0 ? false : _ref$showRequired,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? true : _ref$required;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-col font-medium'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'inline-flex justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: label,
    className: 'text-sm text-primary-marine-blue '
  }, label), required && showRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-primary-starberry-red leading-3'
  }, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: type,
    id: label,
    value: value,
    className: (0,_app_shared_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue", showRequired && required && !value && "ring-1 ring-primary-starberry-red"),
    placeholder: placeholder,
    onChange: function onChange(e) {
      return _onChange(e);
    }
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8816b372a1ce3644447a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e2f556451f5194749159.hot-update.js.map