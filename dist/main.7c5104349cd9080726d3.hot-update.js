"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/shared/MasterLayout/components/SidebarMain.tsx":
/*!*****************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/SidebarMain.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarMain)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");


function SidebarMain(props) {
  var navList = props.navList,
    classFn = props.classFn;
  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_1__.useHistory)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: 'space-y-1'
  }, navList === null || navList === void 0 ? void 0 : navList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      key: item.name,
      // href={item.href}
      onClick: function onClick() {
        return history.push("".concat(item.href));
      },
      className: classFn(item.current ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center px-2 py-2 text-sm font-medium rounded-md")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, {
      className: classFn(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-3 flex-shrink-0 h-6 w-6"),
      "aria-hidden": 'true'
    }), item.name);
  }));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2b56e0997a956dca8d9d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.7c5104349cd9080726d3.hot-update.js.map