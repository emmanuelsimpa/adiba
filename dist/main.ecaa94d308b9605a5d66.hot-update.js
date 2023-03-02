self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/axios-auth-refresh/dist/index.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios-auth-refresh/dist/index.min.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs")):0}(this,(function(e){return function(){"use strict";var t={593:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.resendFailedRequest=t.getRetryInstance=t.unsetCache=t.createRequestQueueInterceptor=t.createRefreshCall=t.shouldInterceptError=t.mergeOptions=t.defaultOptions=void 0;const s=r(300);t.defaultOptions={statusCodes:[401],pauseInstanceWhileRefreshing:!1},t.mergeOptions=function(e,t){return Object.assign(Object.assign(Object.assign({},e),{pauseInstanceWhileRefreshing:t.skipWhileRefreshing}),t)},t.shouldInterceptError=function(e,t,r,s){var n,o;return!!e&&(!(null===(n=e.config)||void 0===n?void 0:n.skipAuthRefresh)&&(!!(t.interceptNetworkError&&!e.response&&0===e.request.status||e.response&&((null==t?void 0:t.shouldRefresh)?t.shouldRefresh(e):null===(o=t.statusCodes)||void 0===o?void 0:o.includes(parseInt(e.response.status))))&&(e.response||(e.response={config:e.config}),!t.pauseInstanceWhileRefreshing||!s.skipInstances.includes(r))))},t.createRefreshCall=function(e,t,r){return r.refreshCall||(r.refreshCall=t(e),"function"==typeof r.refreshCall.then)?r.refreshCall:(console.warn("axios-auth-refresh requires `refreshTokenCall` to return a promise."),Promise.reject())},t.createRequestQueueInterceptor=function(e,t,r){return void 0===t.requestQueueInterceptorId&&(t.requestQueueInterceptorId=e.interceptors.request.use((e=>t.refreshCall.catch((()=>{throw new s.default.Cancel("Request call failed")})).then((()=>r.onRetry?r.onRetry(e):e))))),t.requestQueueInterceptorId},t.unsetCache=function(e,t){e.interceptors.request.eject(t.requestQueueInterceptorId),t.requestQueueInterceptorId=void 0,t.refreshCall=void 0,t.skipInstances=t.skipInstances.filter((t=>t!==e))},t.getRetryInstance=function(e,t){return t.retryInstance||e},t.resendFailedRequest=function(e,t){return e.config.skipAuthRefresh=!0,t(e.response.config)}},300:function(t){t.exports=e}},r={};function s(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,s),o.exports}var n={};return function(){var e=n;Object.defineProperty(e,"__esModule",{value:!0});const t=s(593);e.default=function(e,r,s={}){if("function"!=typeof r)throw new Error("axios-auth-refresh requires `refreshAuthCall` to be a function that returns a promise.");const n={skipInstances:[],refreshCall:void 0,requestQueueInterceptorId:void 0};return e.interceptors.response.use((e=>e),(o=>{if(s=(0,t.mergeOptions)(t.defaultOptions,s),!(0,t.shouldInterceptError)(o,s,e,n))return Promise.reject(o);s.pauseInstanceWhileRefreshing&&n.skipInstances.push(e);const u=(0,t.createRefreshCall)(o,r,n);return(0,t.createRequestQueueInterceptor)(e,n,s),u.catch((e=>Promise.reject(e))).then((()=>(0,t.resendFailedRequest)(o,(0,t.getRetryInstance)(e,s)))).finally((()=>(0,t.unsetCache)(e,n)))}))}}(),n}()}));

/***/ }),

/***/ "./src/redux/setupAxios.js":
/*!*********************************!*\
  !*** ./src/redux/setupAxios.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setupAxios)
/* harmony export */ });
/* harmony import */ var _member_redux_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../member/redux/_redux/authCrud */ "./src/member/redux/_redux/authCrud.js");
/* harmony import */ var _member_redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member/redux/_redux/authRedux */ "./src/member/redux/_redux/authRedux.js");
/* harmony import */ var axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios-auth-refresh */ "./node_modules/axios-auth-refresh/dist/index.min.js");
/* harmony import */ var axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2__);
// import { refresh_token } from "../app/modules/Auth/_redux/authCrud";
// import * as auth_actions from "../app/modules/Auth/_redux/authRedux";



// import { AxiosAuthRefreshRequestConfig } from "axios-auth-refresh";


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
  axios_auth_refresh__WEBPACK_IMPORTED_MODULE_2___default()(axios, refreshAuthLogic);
}

/***/ }),

/***/ "./node_modules/axios/dist/browser/axios.cjs":
/*!***************************************************!*\
  !*** ./node_modules/axios/dist/browser/axios.cjs ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "59e507f0b9de0547cfdc.cjs";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("65ca52e5ec97c13d1f82")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ecaa94d308b9605a5d66.hot-update.js.map