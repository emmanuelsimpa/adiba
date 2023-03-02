"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/redux/authApiSlice.ts":
/*!******************************************!*\
  !*** ./src/member/redux/authApiSlice.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authApiSlice": () => (/* binding */ authApiSlice),
/* harmony export */   "useLoginMutation": () => (/* binding */ useLoginMutation)
/* harmony export */ });
/* harmony import */ var _redux_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../redux/api/apiSlice */ "./src/redux/api/apiSlice.ts");

var authApiSlice = _redux_api_apiSlice__WEBPACK_IMPORTED_MODULE_0__.apiSlice.injectEndpoints({
  endpoints: function endpoints(builder) {
    return {
      login: builder.mutation({
        query: function query(credentials) {
          return {
            url: "/login",
            method: "POST",
            body: Object.assign({}, credentials)
          };
        }
      })
    };
  }
});
var useLoginMutation = authApiSlice.useLoginMutation;


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2373656beed6450645e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2e8205d0f4202b6fe1fa.hot-update.js.map