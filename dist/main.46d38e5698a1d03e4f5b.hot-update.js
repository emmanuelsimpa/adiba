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
/* harmony import */ var _app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_app/shared/member/UserWizard */ "./src/_app/shared/member/UserWizard.tsx");
/* harmony import */ var _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_app/shared/member/SignUpSteps */ "./src/_app/shared/member/SignUpSteps.tsx");
/* harmony import */ var _StepOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepOne */ "./src/member/formT/StepOne.tsx");
/* harmony import */ var _StepTwo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepTwo */ "./src/member/formT/StepTwo.tsx");
/* harmony import */ var _forms_Summary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../forms/Summary */ "./src/member/forms/Summary.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function SignWizard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentStep = _useState2[0],
    setCurrentStep = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      first_name: "",
      last_name: "",
      email_address: "",
      phone_number: "",
      password: "",
      passwordConfirmation: "",
      license_number: "",
      business_name: "",
      business_address: "",
      business_email: "",
      business_url: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var makeRequest = function makeRequest(data) {
    console.log("final", data);
  };
  var handleNextStep = function handleNextStep(newData) {
    var _final = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    console.log("hhdhd", newData);
    setData(function (prev) {
      return Object.assign(Object.assign({}, prev), newData);
    });
    if (_final) {
      makeRequest(newData);
      return;
    }
    _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[currentStep]["status"] = "complete";
    _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[currentStep + 1]["status"] = "current";
    setCurrentStep(function (prev) {
      return prev + 1;
    });
  };
  var handlePrevStep = function handlePrevStep(newData) {
    setData(function (prev) {
      return Object.assign(Object.assign({}, prev), newData);
    });
    _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[currentStep]["status"] = "complete";
    _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[currentStep - 1]["status"] = "current";
    setCurrentStep(function (prev) {
      return prev - 1;
    });
  };
  var handleSwitch = function handleSwitch(id) {
    return function (e) {
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[currentStep]["status"] = "complete";
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[parseInt(id) - 1]["status"] = "current";
      setCurrentStep(function (prev) {
        return prev + 1;
      });
    };
  };
  var steps = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleSwitch: handleSwitch,
    steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
      next: handleNextStep,
      data: data
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleSwitch: handleSwitch,
    steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      next: handleNextStep,
      prev: handlePrevStep,
      data: data
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleSwitch: handleSwitch,
    steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_Summary__WEBPACK_IMPORTED_MODULE_5__["default"], {
      next: handleNextStep,
      prev: handlePrevStep,
      data: data
    })
  })];
  var content = steps[currentStep];
  return content;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignWizard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d154b58fefe14c52a416")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.46d38e5698a1d03e4f5b.hot-update.js.map