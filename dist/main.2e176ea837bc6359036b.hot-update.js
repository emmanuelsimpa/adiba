self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/@heroicons/react/20/solid/PaperClipIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/20/solid/PaperClipIcon.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function PaperClipIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(PaperClipIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/solid/CheckIcon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/CheckIcon.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = React.forwardRef(CheckIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./src/_app/app.tsx":
/*!**************************!*\
  !*** ./src/_app/app.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupShell": () => (/* binding */ setupShell)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _member_forgotpassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../member/forgotpassword */ "./src/member/forgotpassword.tsx");
/* harmony import */ var _member_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member/login */ "./src/member/login.tsx");
/* harmony import */ var _member_SignUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member/SignUp */ "./src/member/SignUp.tsx");
/* harmony import */ var _shared_components_layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/layouts/dashboard */ "./src/_app/shared/components/layouts/dashboard.tsx");
/* harmony import */ var _shared_MasterLayout_MasterLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/MasterLayout/MasterLayout */ "./src/_app/shared/MasterLayout/MasterLayout.tsx");
/* harmony import */ var _shared_member_UserMgtForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/member/UserMgtForm */ "./src/_app/shared/member/UserMgtForm.tsx");







function setupShell(app) {
  //   LAYOUTS REGISTRATION
  app.registerPageLayout("dashboard", function (_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_MasterLayout_MasterLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      content: children
    }));
  });
  app.registerPageLayout("landing", function (_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Header Landing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Navigation "), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, " footer "));
  });
  app.registerPageLayout("member-login", function (_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_member_UserMgtForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: children,
      title: "Sign in to your account",
      subtitle: "Or start your 14-day free trial"
    });
  });
  app.registerPageLayout("member-signup", function (_ref4) {
    var children = _ref4.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_member_UserMgtForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: children,
      title: "Client Enrollment Wizard",
      subtitle: "Fill in client information to begin registration"
    });
  });
  app.registerPageLayout("member-forgotpassword", function (_ref5) {
    var children = _ref5.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_member_UserMgtForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
      content: children,
      title: "Forgot Password",
      subtitle: "Provide your email address and we will send you a link to reset your password"
    });
  });
  // app.registerPage("/", Landing);
  app.registerPage("/login", _member_login__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layout: "member-login"
  });
  app.registerPage("/sign-up", _member_SignUp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    layout: "member-signup"
  });
  app.registerPage("/forgetpassword", _member_forgotpassword__WEBPACK_IMPORTED_MODULE_1__["default"], {
    layout: "member-forgotpassword"
  });
  app.registerPage("/dashboard", _shared_components_layouts_dashboard__WEBPACK_IMPORTED_MODULE_4__.DashboardT, {
    layout: "dashboard"
  });
}

/***/ }),

/***/ "./src/_app/shared/member/SignUpSteps.tsx":
/*!************************************************!*\
  !*** ./src/_app/shared/member/SignUpSteps.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignUpSteps": () => (/* binding */ SignUpSteps)
/* harmony export */ });
var SignUpSteps = [{
  id: "01",
  name: "Administrator",
  description: "Vitae sed mi luctus laoreet.",
  href: "#",
  status: "current"
}, {
  id: "02",
  name: "Business Entity",
  description: "Cursus semper viverra.",
  href: "#",
  status: "upcoming"
}, {
  id: "03",
  name: "Summary",
  description: "Penatibus eu quis ante.",
  href: "#",
  status: "upcoming"
}];

/***/ }),

/***/ "./src/_app/shared/member/UserWizard.tsx":
/*!***********************************************!*\
  !*** ./src/_app/shared/member/UserWizard.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserWizard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/className */ "./src/_app/shared/utils/className.tsx");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/CheckIcon.js");
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__);

// import Steps from '../Steps';


function UserWizard(props) {
  var content = props.content,
    steps = props.steps,
    handleSwitch = props.handleSwitch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-8 lg:border-t lg:border-b lg:border-gray-200'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    "aria-label": 'Progress'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", {
    className: 'overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200'
  }, steps.map(function (step, stepIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: step.id,
      className: 'relative overflow-hidden lg:flex-1'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx + 1 === 1 ? "border-b-0 rounded-t-md" : "", stepIdx + 1 === steps.length - 1 ? "border-t-0 rounded-b-md" : "", "border border-gray-200 overflow-hidden lg:border-0")
    }, step.status === "complete" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: step.href,
      className: 'group'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
      "aria-hidden": 'true'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx + 1 !== 1 ? "lg:pl-9" : "", "px-6 py-5 flex items-start text-sm font-medium")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'flex-shrink-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__, {
      className: 'h-6 w-6 text-white',
      "aria-hidden": 'true'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'mt-0.5 ml-4 flex min-w-0 flex-col'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-sm font-medium'
    }, step.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-sm font-medium text-gray-500'
    }, step.description)))) : step.status === "current" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: step.href,
      "aria-current": 'step'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'absolute top-0 left-0 h-full w-1 bg-indigo-600 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
      "aria-hidden": 'true'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx + 1 !== 1 ? "lg:pl-9" : "", "px-6 py-5 flex items-start text-sm font-medium")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'flex-shrink-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-indigo-600'
    }, step.id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'mt-0.5 ml-4 flex min-w-0 flex-col'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-sm font-medium text-indigo-600'
    }, step.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-sm font-medium text-gray-500'
    }, step.description)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: step.href,
      className: 'group'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
      "aria-hidden": 'true'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx + 1 !== 1 ? "lg:pl-9" : "", "px-6 py-5 flex items-start text-sm font-medium")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'flex-shrink-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-gray-500'
    }, step.id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'mt-0.5 ml-4 flex min-w-0 flex-col'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-sm font-medium text-gray-500'
    }, step.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'text-sm font-medium text-gray-500'
    }, step.description)))), stepIdx + 1 !== 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'absolute inset-0 top-0 left-0 hidden w-3 lg:block',
      "aria-hidden": 'true'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
      className: 'h-full w-full text-gray-300',
      viewBox: '0 0 12 82',
      fill: 'none',
      preserveAspectRatio: 'none'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      d: 'M0.5 0V31L10.5 41L0.5 51V82',
      stroke: 'currentcolor',
      vectorEffect: 'non-scaling-stroke'
    })))) : null));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-8 sm:mx-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'sm:min-w-[80rem]'
  }, content)));
}

/***/ }),

/***/ "./src/member/SignUp.tsx":
/*!*******************************!*\
  !*** ./src/member/SignUp.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formT_SignWizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formT/SignWizard */ "./src/member/formT/SignWizard.tsx");


function SignUp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_formT_SignWizard__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/member/formT/SignWizard.tsx":
/*!*****************************************!*\
  !*** ./src/member/formT/SignWizard.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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







function SignUpWizard() {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpWizard);

/***/ }),

/***/ "./src/member/formT/StepOne.tsx":
/*!**************************************!*\
  !*** ./src/member/formT/StepOne.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");



var StepOne = function StepOne(props) {
  var handleSubmit = function handleSubmit(values) {
    console.log("handleSubmit", values);
    props.next(values);
  };
  var passwordRegex = RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
  var phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
  var stepOneValidation = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    first_name: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).required("First Name is required"),
    last_name: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).required("last Name is required"),
    phone_number: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).required("last Name is required").matches(phoneRegex, "Invalid phone"),
    license_number: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).required("license_number is required"),
    email_address: yup__WEBPACK_IMPORTED_MODULE_2__.string().email("Not a proper email").required("Email is required"),
    password: yup__WEBPACK_IMPORTED_MODULE_2__.string().required("Password is required").matches(passwordRegex, "Minimum eight characters, at least one letter, one number and one special character"),
    passwordConfirmation: yup__WEBPACK_IMPORTED_MODULE_2__.string().oneOf([yup__WEBPACK_IMPORTED_MODULE_2__.ref("password"), null], "Passwords must match")
  });
  var renderError = function renderError(message) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: 'text-red-600'
    }, message);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
    initialValues: props.data,
    validationSchema: stepOneValidation,
    onSubmit: handleSubmit
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'md:col-span-1 mb-5'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'px-4 sm:px-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
      className: 'text-lg font-medium leading-6 text-gray-900'
    }, "Personal Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: 'mt-1 text-sm text-gray-600'
    }, "Use a permanent address where you can receive mail."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'mt-5 md:col-span-2 md:mt-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'overflow-hidden shadow sm:rounded-md'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:p-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'grid grid-cols-6 gap-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'first-name',
      className: 'block text-sm font-medium text-gray-700'
    }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'first_name',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'first_name'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'last-name',
      className: 'block text-sm font-medium text-gray-700'
    }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'last_name',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'last_name'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'first-name',
      className: 'block text-sm font-medium text-gray-700'
    }, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'email_address',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'email_address'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'phone-number',
      className: 'block text-sm font-medium text-gray-700'
    }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'phone_number',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'phone_number'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'license-number',
      className: 'block text-sm font-medium text-gray-700'
    }, "License Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'license_number',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'license_number'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'license-number',
      className: 'block text-sm font-medium text-gray-700'
    }, "Request License Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'license_number',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'license_number'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'password',
      className: 'block text-sm font-medium text-gray-700'
    }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'password',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'password'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'confirm-password',
      className: 'block text-sm font-medium text-gray-700'
    }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'passwordConfirmation',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'passwordConfirmation'
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: 'submit',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", null, "Next")))))));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepOne);

/***/ }),

/***/ "./src/member/formT/StepTwo.tsx":
/*!**************************************!*\
  !*** ./src/member/formT/StepTwo.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");



var StepTwo = function StepTwo(props) {
  var handleSubmit = function handleSubmit(values) {
    props.next(values);
  };
  var urlRegex = RegExp(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/);
  var businessValidation = yup__WEBPACK_IMPORTED_MODULE_2__.object({
    business_name: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(3).required("Business Name is required"),
    business_address: yup__WEBPACK_IMPORTED_MODULE_2__.string().min(10).required("Business Address is required"),
    business_url: yup__WEBPACK_IMPORTED_MODULE_2__.string().matches(urlRegex, "Enter correct url!").required("Please enter website"),
    business_email: yup__WEBPACK_IMPORTED_MODULE_2__.string().email("Not a proper email").required("Email is required")
  });
  var renderError = function renderError(message) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: 'text-red-600'
    }, message);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
    initialValues: props.data,
    validationSchema: businessValidation,
    onSubmit: handleSubmit
  }, function (_ref) {
    var values = _ref.values;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'md:col-span-1 mb-5'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'px-4 sm:px-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
      className: 'text-lg font-medium leading-6 text-gray-900'
    }, "Business Entity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
      className: 'mt-1 text-sm text-gray-600'
    }, "Please provide information about the business you're signing up for."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'mt-5 md:col-span-2 md:mt-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'overflow-hidden shadow sm:rounded-md'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:p-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'grid grid-cols-6 gap-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'business-name',
      className: 'block text-sm font-medium text-gray-700'
    }, "Business Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'business_name',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'business_name'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'business-address',
      className: 'block text-sm font-medium text-gray-700'
    }, "Business Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'business_address',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'business_address'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'email-address',
      className: 'block text-sm font-medium text-gray-700'
    }, "Business Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'business_email',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'business_email'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'col-span-6 sm:col-span-3'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
      htmlFor: 'business-url',
      className: 'block text-sm font-medium text-gray-700'
    }, "Business URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Field, {
      name: 'business_url',
      className: 'mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue\n                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.ErrorMessage, {
      render: renderError,
      name: 'business_url'
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'flex justify-between bg-gray-50'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      onClick: function onClick() {
        return props.prev(values);
      },
      type: 'button',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      type: 'submit',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, "Next")))))));
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepTwo);

/***/ }),

/***/ "./src/member/forms/Summary.tsx":
/*!**************************************!*\
  !*** ./src/member/forms/Summary.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Summary)
/* harmony export */ });
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/PaperClipIcon.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");



function Summary(props) {
  var prev = props.prev,
    data = props.data,
    next = props.next;
  var handleSubmit = function handleSubmit(values) {
    next(values, true);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {
    initialValues: props.data,
    onSubmit: handleSubmit
  }, function (_ref) {
    var values = _ref.values;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_1__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'overflow-hidden bg-white shadow sm:rounded-lg sm:max-w-7xl'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'px-4 py-5 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: 'text-lg font-medium leading-6 text-gray-900'
    }, "Administrator Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: 'mt-1 max-w-2xl text-sm text-gray-500'
    }, "Personal details and application.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'border-t border-gray-200'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.email_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.phone_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "License Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.license_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, "*".repeat(data.password.length))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'px-4 py-5 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: 'text-lg font-medium leading-6 text-gray-900'
    }, "Business Entity Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: 'mt-1 max-w-2xl text-sm text-gray-500'
    }, "Personal details and application.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'border-t border-gray-200'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Business Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.business_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Business Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.business_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Business Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.business_email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Business URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, data.business_url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
      className: 'text-sm font-medium text-gray-500'
    }, "Attachments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
      className: 'mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      role: 'list',
      className: 'divide-y divide-gray-200 rounded-md border border-gray-200'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: 'flex items-center justify-between py-3 pl-3 pr-4 text-sm'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'flex w-0 flex-1 items-center'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__, {
      className: 'h-5 w-5 flex-shrink-0 text-gray-400',
      "aria-hidden": 'true'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'ml-2 w-0 flex-1 truncate'
    }, "cac_document.pdf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'ml-4 flex-shrink-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: '#',
      className: 'font-medium text-indigo-600 hover:text-indigo-500'
    }, "Download"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: 'flex items-center justify-between py-3 pl-3 pr-4 text-sm'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'flex w-0 flex-1 items-center'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__, {
      className: 'h-5 w-5 flex-shrink-0 text-gray-400',
      "aria-hidden": 'true'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'ml-2 w-0 flex-1 truncate'
    }, "memart_document.pdf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'ml-4 flex-shrink-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: '#',
      className: 'font-medium text-indigo-600 hover:text-indigo-500'
    }, "Download")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'flex justify-between bg-gray-50'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onClick: function onClick() {
        return prev(values);
      },
      type: 'button',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      // onSubmit={handleSubmit}
      type: 'submit',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, "Enroll")))));
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e6e7be611b321dfebfdb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2e176ea837bc6359036b.hot-update.js.map