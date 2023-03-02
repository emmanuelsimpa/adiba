"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/SignWizard.tsx":
/*!*****************************************!*\
  !*** ./src/member/formT/SignWizard.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_app/shared/member/SignUpSteps */ "./src/_app/shared/member/SignUpSteps.tsx");
/* harmony import */ var _app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_app/shared/member/UserWizard */ "./src/_app/shared/member/UserWizard.tsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/button */ "./src/member/formT/components/button.tsx");
/* harmony import */ var _components_personalInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/personalInfo */ "./src/member/formT/components/personalInfo.tsx");
/* harmony import */ var _components_selectPlan__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/selectPlan */ "./src/member/formT/components/selectPlan.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







// import { Addon, Plan, UserInfo, UserServiceConfiguration } from 'AppTypes';
function SignWizard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showRequired = _useState4[0],
    setShowRequiredFields = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      userInfo: {
        first_name: "",
        last_name: "",
        email_address: "",
        phone_number: "",
        password: ""
      },
      selectedPlan: null,
      monthly: true,
      addons: []
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    userServiceConfiguration = _useState6[0],
    setUserServiceConfiguration = _useState6[1];
  var updateUserInfo = function updateUserInfo(userInfo) {
    setUserServiceConfiguration(Object.assign(Object.assign({}, userServiceConfiguration), {
      userInfo: userInfo
    }));
  };
  var updateSelectedPlan = function updateSelectedPlan(plan) {
    setUserServiceConfiguration(Object.assign(Object.assign({}, userServiceConfiguration), {
      selectedPlan: plan
    }));
  };
  var updateMonthly = function updateMonthly() {
    setUserServiceConfiguration(function (prevVal) {
      return Object.assign(Object.assign({}, userServiceConfiguration), {
        monthly: !prevVal.monthly
      });
    });
  };
  var updateAddons = function updateAddons(addon) {
    var addons = userServiceConfiguration.addons;
    var index = addons.findIndex(function (currentAddon) {
      return currentAddon.name === addon.name;
    });
    if (index === -1) {
      setUserServiceConfiguration(Object.assign(Object.assign({}, userServiceConfiguration), {
        addons: [].concat(_toConsumableArray(addons), [addon])
      }));
    } else {
      addons.splice(index, 1);
      setUserServiceConfiguration(Object.assign(Object.assign({}, userServiceConfiguration), {
        addons: _toConsumableArray(addons)
      }));
    }
  };
  var nextStep = function nextStep(onGoingStep) {
    if (step === 5) return;
    if (step === 1 || onGoingStep && onGoingStep !== 1 && step === 1) {
      if (!userServiceConfiguration.userInfo.first_name || !userServiceConfiguration.userInfo.last_name || !userServiceConfiguration.userInfo.email_address || !userServiceConfiguration.userInfo.email_address.includes("@") || !userServiceConfiguration.userInfo.phone_number || !userServiceConfiguration.userInfo.password) {
        setShowRequiredFields(true);
        return;
      }
    }
    setStep(function (step) {
      if (onGoingStep) return onGoingStep;
      return step + 1;
    });
  };
  var goBack = function goBack() {
    if (step === 1) return;
    setStep(function (step) {
      return step - 1;
    });
  };
  var handleSwitch = function handleSwitch(id) {
    return function (e) {
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_1__.SignUpSteps[parseInt(id) - 1]["status"] = "current";
      setStep(parseInt(id));
    };
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, step === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleSwitch: handleSwitch,
    steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_1__.SignUpSteps,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_personalInfo__WEBPACK_IMPORTED_MODULE_4__.PersonalInfo, {
      userInfo: userServiceConfiguration.userInfo,
      updateUserInfo: updateUserInfo,
      showRequired: showRequired
    })
  }), step === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_selectPlan__WEBPACK_IMPORTED_MODULE_5__.SelectPlan, {
    selectedPlan: userServiceConfiguration.selectedPlan,
    monthly: userServiceConfiguration.monthly,
    updateSelectedPlan: updateSelectedPlan,
    updateIsMonthly: updateMonthly
  })), step < 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("menu", {
    className: 'flex justify-between p-4 mt-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    type: 'ghost',
    onClick: goBack
  }, "Go Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: function onClick() {
      return nextStep();
    },
    type: step !== 3 ? "secondary" : "primary"
  }, step !== 3 ? "Next Step" : "Confirm"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignWizard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e1748d68297ee1f3df32")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.aae8de9a7f54aca1bc34.hot-update.js.map