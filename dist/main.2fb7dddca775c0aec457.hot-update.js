"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/redux/authSlice.ts":
/*!***************************************!*\
  !*** ./src/member/redux/authSlice.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "logOut": () => (/* binding */ logOut),
/* harmony export */   "setCredentials": () => (/* binding */ setCredentials)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");

var initialState = {
  user: {}
  // token: null,
};

var authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "auth",
  initialState: initialState,
  reducers: {
    setCredentials: function setCredentials(state, action) {
      var user = action.payload.user;
      state.user = user;
      // state.token = accessToken;
    },

    logOut: function logOut(state, action) {
      state.user = null;
      // state.token = null;
    }
  }
});

var _authSlice$actions = authSlice.actions,
  setCredentials = _authSlice$actions.setCredentials,
  logOut = _authSlice$actions.logOut;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a29c48d72aee10f3c4a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2fb7dddca775c0aec457.hot-update.js.map