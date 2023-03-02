"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/components/personalInfo.tsx":
/*!******************************************************!*\
  !*** ./src/member/formT/components/personalInfo.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalInfo": () => (/* binding */ PersonalInfo)
/* harmony export */ });
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./src/member/formT/components/input.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var PersonalInfo = function PersonalInfo(_ref) {
  var userInfo = _ref.userInfo,
    updateUserInfo = _ref.updateUserInfo,
    showRequired = _ref.showRequired;
  var handlePersonalInfo = function handlePersonalInfo(event, key) {
    var updatedUserInfo = Object.assign({}, userInfo);
    updatedUserInfo[key] = event.currentTarget.value;
    updateUserInfo(updatedUserInfo);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: 'flex flex-col gap-4 w-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Name',
    placeholder: 'e.g. Stephen King',
    showRequired: showRequired && !userInfo.first_name,
    value: userInfo.first_name,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "first_name");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Email Address',
    type: 'email',
    placeholder: 'e.g. stephenking@lorem.com',
    showRequired: showRequired && (!userInfo.email || !userInfo.email.includes("@")),
    value: userInfo.email,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "email");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_input__WEBPACK_IMPORTED_MODULE_0__.Input, {
    label: 'Phone Number',
    placeholder: 'e.g. +1 234 567 890',
    showRequired: showRequired && !userInfo.phone,
    value: userInfo.phone,
    onChange: function onChange(e) {
      return handlePersonalInfo(e, "phone");
    }
  }));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3ad3d60cc90c58cfd354")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.1a3bb2ee2911d95a2f79.hot-update.js.map