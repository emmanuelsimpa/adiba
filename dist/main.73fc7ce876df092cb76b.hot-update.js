"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/redux/_redux/authCrud.js":
/*!*********************************************!*\
  !*** ./src/member/redux/_redux/authCrud.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_URL": () => (/* binding */ LOGIN_URL),
/* harmony export */   "ME_URL": () => (/* binding */ ME_URL),
/* harmony export */   "REGISTER_URL": () => (/* binding */ REGISTER_URL),
/* harmony export */   "REQUEST_PASSWORD_URL": () => (/* binding */ REQUEST_PASSWORD_URL),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "getUserByToken": () => (/* binding */ getUserByToken),
/* harmony export */   "logins": () => (/* binding */ logins),
/* harmony export */   "refresh_token": () => (/* binding */ refresh_token),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "requestPassword": () => (/* binding */ requestPassword),
/* harmony export */   "request_license": () => (/* binding */ request_license),
/* harmony export */   "resend_confirmation": () => (/* binding */ resend_confirmation),
/* harmony export */   "reset_password": () => (/* binding */ reset_password),
/* harmony export */   "send_pin": () => (/* binding */ send_pin),
/* harmony export */   "send_pin_forgot": () => (/* binding */ send_pin_forgot)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");


// export const URL = "http://localhost:3112/";
var URL = "https://gw1.api.adiba.app/backoffice/v1/admin/opportunities/";
var LOGIN_URL = URL + "users/login";
var REGISTER_URL = URL + "signup";
var REQUEST_PASSWORD_URL = URL + "api/auth/forgot-password";
var ME_URL = URL + "user/profile";
function logins(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(LOGIN_URL, data);
}
function resend_confirmation(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(URL, "auth/resend-confirm-code"), data);
}
function send_pin(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(URL, "auth/confirm-code"), data);
}
function send_pin_forgot(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(URL, "auth/forgot-password"), data);
}
function reset_password(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(URL, "auth/reset-password"), data);
}
function register(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(REGISTER_URL, data);
}
function requestPassword(email) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(REQUEST_PASSWORD_URL, {
    email: email
  });
}
function changePassword(body) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(URL + "auth/user/change_pass", body);
}
function request_license(body) {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("".concat(URL, "admin/opportunities"), body);
}
function refresh_token() {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(URL + "admin/members/refresh", {});
}
function getUserByToken() {
  return axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(ME_URL);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1866b504dadacb85b09a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.73fc7ce876df092cb76b.hot-update.js.map