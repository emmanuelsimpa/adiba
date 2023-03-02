"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/redux/setupAxios.js":
/*!*********************************!*\
  !*** ./src/redux/setupAxios.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupAxios)
/* harmony export */ });
/* harmony import */ var _member_redux_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../member/redux/_redux/authCrud */ "./src/member/redux/_redux/authCrud.js");
/* harmony import */ var _member_redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member/redux/_redux/authRedux */ "./src/member/redux/_redux/authRedux.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios-auth-refresh'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// import { refresh_token } from "../app/modules/Auth/_redux/authCrud";
// import * as auth_actions from "../app/modules/Auth/_redux/authRedux";





// Function that will be called to refresh authorization

function setupAxios(axios, store) {
  var refreshAuthLogic = function refreshAuthLogic(failedRequest) {
    return (0,_member_redux_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__.refresh_token)().then(function (response) {
      var data = response.data;
      if (data.status === "Success") {
        store.dispatch(_member_redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_1__.actions.fulfillToken(data.data.access_token));
        failedRequest.response.config.headers["Authorization"] = "Bearer " + data.data.access_token;
        return Promise.resolve();
      }
      return Promise.resolve();
    })["catch"](function (error) {
      console.log("Refresh token error", error);
      store.dispatch(_member_redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_1__.actions.logout());
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
/******/ 	__webpack_require__.h = () => ("ee2c13056f2c3571c006")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.82625c2ebe7ef19aa022.hot-update.js.map