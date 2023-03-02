"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/shared/SidebarSecondary.tsx":
/*!**********************************************!*\
  !*** ./src/_app/shared/SidebarSecondary.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarSecondary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChannelsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelsMenu */ "./src/_app/shared/ChannelsMenu.tsx");


function SidebarSecondary() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'space-y-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: 'px-3 text-sm font-medium text-gray-500 w-fit',
    id: 'projects-headline'
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'space-y-1',
    role: 'group',
    "aria-labelledby": 'projects-headline'
  }, _ChannelsMenu__WEBPACK_IMPORTED_MODULE_1__.secondaryNavigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: 'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'truncate'
    }, item.name));
  })));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ac2ed29bc3de49fbb7eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.c5d5f9b71bcf59bb0fbc.hot-update.js.map