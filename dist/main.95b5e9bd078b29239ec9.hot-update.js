"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/components/selectPlan.tsx":
/*!****************************************************!*\
  !*** ./src/member/formT/components/selectPlan.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectPlan": () => (/* binding */ SelectPlan)
/* harmony export */ });
/* harmony import */ var _app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_app/shared/utils/className */ "./src/_app/shared/utils/className.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// import classNames from 'classNames';
// import { calculatePrice } from '../utils/calculatePrice';


var activeClasses = "border border-primary-purplish-blue bg-neutral-magnolia falopa";
var plans = [{
  name: "Arcade",
  icon: "icon-arcade.svg",
  monthlyPrice: 9
}, {
  name: "Advanced",
  icon: "icon-advanced.svg",
  monthlyPrice: 12
}, {
  name: "Pro",
  icon: "icon-pro.svg",
  monthlyPrice: 15
}];
var SelectPlan = function SelectPlan(_ref) {
  var selectedPlan = _ref.selectedPlan,
    monthly = _ref.monthly,
    updateSelectedPlan = _ref.updateSelectedPlan,
    updateIsMonthly = _ref.updateIsMonthly;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("section", {
    className: 'flex flex-col gap-4 w-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h2", null, "Select your plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "You have the option of monthly or yearly billing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: 'flex flex-col gap-2 lg:flex-row'
  }, plans.map(function (plan) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      key: plan.name,
      className: 'lg:w-full'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: (0,_app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__.classNames)("p-4 flex gap-4 transition-all w-full lg:flex-col lg:gap-8 hover:border-primary-purplish-blue hover:bg-neutral-magnolia cursor-pointer", plan.name === (selectedPlan === null || selectedPlan === void 0 ? void 0 : selectedPlan.name) ? activeClasses : "border border-neutral-light-gray"),
      onClick: function onClick() {
        return updateSelectedPlan(plan);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("figure", {
      className: 'w-10 h-10'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
      src: "./assets/images/".concat(plan.icon),
      alt: ''
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: ''
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
      className: 'leading-5'
    }, plan.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "$", "/", monthly ? "mo" : "yr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: (0,_app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__.classNames)("text-primary-marine-blue", monthly && "hidden")
    }, "2 months free"))));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'bg-neutral-alabaster w-full rounded-sm mt-8 felx p-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    className: 'flex relative items-center cursor-pointer mx-auto w-min'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: (0,_app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__.classNames)("mr-4 font-medium", monthly ? "text-primary-marine-blue" : "")
  }, "Monthly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: 'checkbox',
    onChange: function onChange() {
      return updateIsMonthly(!monthly);
    },
    className: 'sr-only peer'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "w-11 h-6 peer-focus:outline-none rounded-full peer bg-primary-marine-blue peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[80px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: (0,_app_shared_utils_className__WEBPACK_IMPORTED_MODULE_0__.classNames)("ml-4 font-medium", !monthly ? "text-primary-marine-blue" : "")
  }, "Yearly"))));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e3569b1a4d1013982029")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.95b5e9bd078b29239ec9.hot-update.js.map