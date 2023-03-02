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
/* harmony import */ var _components_Addons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Addons */ "./src/member/formT/components/Addons.tsx");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button */ "./src/member/formT/components/button.tsx");
/* harmony import */ var _components_personalInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/personalInfo */ "./src/member/formT/components/personalInfo.tsx");
/* harmony import */ var _components_selectPlan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/selectPlan */ "./src/member/formT/components/selectPlan.tsx");
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
  return (
    /*#__PURE__*/
    // <Sidebar currentStep={step} handleNextStep={nextStep} />
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null, step === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      handleSwitch: handleSwitch,
      steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_1__.SignUpSteps,
      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_personalInfo__WEBPACK_IMPORTED_MODULE_5__.PersonalInfo, {
        userInfo: userServiceConfiguration.userInfo,
        updateUserInfo: updateUserInfo,
        showRequired: showRequired
      })
    }), step === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_selectPlan__WEBPACK_IMPORTED_MODULE_6__.SelectPlan, {
      selectedPlan: userServiceConfiguration.selectedPlan,
      monthly: userServiceConfiguration.monthly,
      updateSelectedPlan: updateSelectedPlan,
      updateIsMonthly: updateMonthly
    }), step === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Addons__WEBPACK_IMPORTED_MODULE_3__.Addons, {
      selectedAddons: userServiceConfiguration.addons,
      monthly: userServiceConfiguration.monthly,
      updateAddons: updateAddons
    })), step < 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("menu", {
      className: 'flex justify-between p-4 mt-auto'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      type: 'ghost',
      onClick: goBack
    }, "Go Back")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_button__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: function onClick() {
        return nextStep();
      },
      type: step !== 4 ? "secondary" : "primary"
    }, step !== 4 ? "Next Step" : "Confirm"))))
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignWizard);

/***/ }),

/***/ "./src/member/formT/components/Addons.tsx":
/*!************************************************!*\
  !*** ./src/member/formT/components/Addons.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Addons": () => (/* binding */ Addons)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/calculatePrice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "./src/member/formT/components/card.tsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var activeClasses = 'border border-primary-purplish-blue bg-neutral-magnolia';
var addons = [{
  name: 'Online service',
  description: 'Access to multiplayer games',
  monthlyPrice: 1
}, {
  name: 'Large storage',
  description: 'Extra 1TB of cloud save',
  monthlyPrice: 2
}, {
  name: 'Customizable profile',
  description: 'Custom theme on your profile',
  monthlyPrice: 2
}];
var Addons = function Addons(_ref) {
  var updateAddons = _ref.updateAddons,
    monthly = _ref.monthly,
    selectedAddons = _ref.selectedAddons;
  return React.createElement("section", {
    className: "flex flex-col w-full gap-4"
  }, React.createElement("h2", null, "Pick add-ons"), React.createElement("p", null, "Add-ons help enhace your gaming experience."), addons.map(function (addon) {
    return React.createElement(_card__WEBPACK_IMPORTED_MODULE_1__.Card, {
      className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p-4 flex gap-4 transition-all relative w-full hover:border-primary-purplish-blue hover:bg-neutral-magnolia cursor-pointer", selectedAddons.includes(addon) ? activeClasses : 'border border-neutral-light-gray'),
      onClick: function onClick() {
        return updateAddons(addon);
      },
      key: addon.name
    }, React.createElement("input", {
      type: "checkbox",
      checked: selectedAddons.includes(addon),
      className: "w-5 h-5 aspect-square rounded-sm self-center checked:accent-primary-purplish-blue ",
      onChange: function onChange() {
        return updateAddons(addon);
      }
    }), React.createElement("div", null, React.createElement("h3", null, addon.name), React.createElement("p", null, addon.description)), React.createElement("span", {
      className: "w-min ml-auto self-center"
    }, "$", Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/calculatePrice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(addon.monthlyPrice, monthly).toLocaleString(), monthly ? 'mo' : 'yr'));
  }));
};

/***/ }),

/***/ "./src/member/formT/components/card.tsx":
/*!**********************************************!*\
  !*** ./src/member/formT/components/card.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
var Card = function Card(_ref) {
  var children = _ref.children,
    className = _ref.className,
    onClick = _ref.onClick;
  return React.createElement("div", {
    className: "".concat(className, "  rounded-xl"),
    onClick: onClick
  }, children);
};

/***/ }),

/***/ "./src/member/formT/components/selectPlan.tsx":
/*!****************************************************!*\
  !*** ./src/member/formT/components/selectPlan.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPlan": () => (/* binding */ SelectPlan)
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/member/formT/components/card.tsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/calculatePrice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



var activeClasses = 'border border-primary-purplish-blue bg-neutral-magnolia falopa';
var plans = [{
  name: 'Arcade',
  icon: 'icon-arcade.svg',
  monthlyPrice: 9
}, {
  name: 'Advanced',
  icon: 'icon-advanced.svg',
  monthlyPrice: 12
}, {
  name: 'Pro',
  icon: 'icon-pro.svg',
  monthlyPrice: 15
}];
var SelectPlan = function SelectPlan(_ref) {
  var selectedPlan = _ref.selectedPlan,
    monthly = _ref.monthly,
    updateSelectedPlan = _ref.updateSelectedPlan,
    updateIsMonthly = _ref.updateIsMonthly;
  return React.createElement("section", {
    className: "flex flex-col gap-4 w-full"
  }, React.createElement("h2", null, "Select your plan"), React.createElement("p", null, "You have the option of monthly or yearly billing"), React.createElement("ul", {
    className: "flex flex-col gap-2 lg:flex-row"
  }, plans.map(function (plan) {
    return React.createElement("li", {
      key: plan.name,
      className: "lg:w-full"
    }, React.createElement(_card__WEBPACK_IMPORTED_MODULE_0__.Card, {
      className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('p-4 flex gap-4 transition-all w-full lg:flex-col lg:gap-8 hover:border-primary-purplish-blue hover:bg-neutral-magnolia cursor-pointer', plan.name === (selectedPlan === null || selectedPlan === void 0 ? void 0 : selectedPlan.name) ? activeClasses : 'border border-neutral-light-gray'),
      onClick: function onClick() {
        return updateSelectedPlan(plan);
      }
    }, React.createElement("figure", {
      className: "w-10 h-10"
    }, React.createElement("img", {
      src: "./assets/images/".concat(plan.icon),
      alt: ""
    })), React.createElement("div", {
      className: ""
    }, React.createElement("h3", {
      className: "leading-5"
    }, plan.name), React.createElement("p", null, "$", Object(function webpackMissingModule() { var e = new Error("Cannot find module '../utils/calculatePrice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(plan.monthlyPrice, monthly).toLocaleString(), "/", monthly ? 'mo' : 'yr'), React.createElement("p", {
      className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('text-primary-marine-blue', monthly && 'hidden')
    }, "2 months free"))));
  })), React.createElement("div", {
    className: "bg-neutral-alabaster w-full rounded-sm mt-8 felx p-4"
  }, React.createElement("label", {
    className: "flex relative items-center cursor-pointer mx-auto w-min"
  }, React.createElement("span", {
    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("mr-4 font-medium", monthly ? 'text-primary-marine-blue' : '')
  }, "Monthly"), React.createElement("input", {
    type: "checkbox",
    onChange: function onChange() {
      return updateIsMonthly(!monthly);
    },
    className: "sr-only peer"
  }), React.createElement("div", {
    className: "w-11 h-6 peer-focus:outline-none rounded-full peer bg-primary-marine-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[80px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
  }), React.createElement("span", {
    className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'clsx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("ml-4 font-medium", !monthly ? 'text-primary-marine-blue' : '')
  }, "Yearly"))));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ebc2e9f7e08d7013230f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.eb8ba2a8fba7eac194d4.hot-update.js.map