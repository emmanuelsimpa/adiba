"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupAxios": () => (/* reexport safe */ _setupAxios__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _setupAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setupAxios */ "./src/redux/setupAxios.js");
// export { default as mockAxios } from "./__mocks__/mockAxios";


/***/ }),

/***/ "./src/redux/setupAxios.js":
/*!*********************************!*\
  !*** ./src/redux/setupAxios.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupAxios)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authCrud'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authRedux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios-auth-refresh'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





// Function that will be called to refresh authorization

function setupAxios(axios, store) {
  var refreshAuthLogic = function refreshAuthLogic(failedRequest) {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authCrud'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())().then(function (response) {
      var data = response.data;
      if (data.status === "Success") {
        store.dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authRedux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(data.data.access_token));
        failedRequest.response.config.headers["Authorization"] = "Bearer " + data.data.access_token;
        return Promise.resolve();
      }
      return Promise.resolve();
    })["catch"](function (error) {
      console.log("Refresh token error", error);
      store.dispatch(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authRedux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());
      return Promise.reject(error);
    });
  };
  axios.interceptors.request.use(function (config) {
    var _store$getState = store.getState(),
      authToken = _store$getState.auth.authToken;
    console.log("Auth token", authToken);
    if (authToken) {
      config.headers.Authorization = "Bearer ".concat(authToken);
    }
    return config;
  }, function (err) {
    return Promise.reject(err);
  });
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios-auth-refresh'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(axios, refreshAuthLogic);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bb8a716ca6389fbf6669")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d45d42251805ad82c861.hot-update.js.map