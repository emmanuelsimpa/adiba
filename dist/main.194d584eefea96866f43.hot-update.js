self["webpackHotUpdateadiba_central"]("main",{

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
      className: 'relative overflow-hidden lg:flex-1',
      onClick: handleSwitch(step.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx === 0 ? "border-b-0 rounded-t-md" : "", stepIdx === steps.length - 1 ? "border-t-0 rounded-b-md" : "", "border border-gray-200 overflow-hidden lg:border-0")
    }, step.status === "complete" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: step.href,
      className: 'group'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
      "aria-hidden": 'true'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx !== 0 ? "lg:pl-9" : "", "px-6 py-5 flex items-start text-sm font-medium")
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
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx !== 0 ? "lg:pl-9" : "", "px-6 py-5 flex items-start text-sm font-medium")
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
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(stepIdx !== 0 ? "lg:pl-9" : "", "px-6 py-5 flex items-start text-sm font-medium")
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
    }, step.description)))), stepIdx !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// import UserWizard from "../../_app/shared/member/UserWizard";
// import { Addons } from "./components/Addons";
// import { Button } from "./components/button";
// import { PersonalInfo } from "./components/personalInfo";
// import { SelectPlan } from "./components/selectPlan";
// import { ServiceSummary } from "./components/serviceSummary";
// import { ThankYou } from "./components/thankYou";


// import { Addon, Plan, UserInfo, UserServiceConfiguration } from 'AppTypes';
function SignWizard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentStep = _useState2[0],
    setCurrentStep = _useState2[1];
  //   const [showRequired, setShowRequiredFields] = useState(false);
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      first_name: "",
      last_name: "",
      email_address: "",
      phone_number: "",
      password: ""
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var makeRequest = function makeRequest(data) {
    console.log("hhdhd", data);
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
    setCurrentStep(function (prev) {
      return prev + 1;
    });
  };
  var handlePrevStep = function handlePrevStep(newData) {
    setData(function (prev) {
      return Object.assign(Object.assign({}, prev), newData);
    });
    setCurrentStep(function (prev) {
      return prev - 1;
    });
  };
  var handleSwitch = function handleSwitch(id) {
    return function (e) {
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[currentStep - 1]["status"] = "complete";
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps[parseInt(id) - 1]["status"] = "current";
      setCurrentStep(parseInt(id));
      // this.setState({ currentStep: parseInt(id) });
    };
  };

  var steps = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    handleSwitch: true,
    steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_2__.SignUpSteps,
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
      next: handleNextStep,
      data: data
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepTwo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    next: handleNextStep,
    prev: handlePrevStep,
    data: data
  })];
  var content = steps[currentStep];
  return content;
  //   const updateUserInfo = (userInfo: UserInfo) => {
  //     setUserServiceConfiguration({ ...userServiceConfiguration, userInfo });
  //   };
  //   const updateSelectedPlan = (plan: Plan) => {
  //     setUserServiceConfiguration({
  //       ...userServiceConfiguration,
  //       selectedPlan: plan,
  //     });
  //   };
  //   const updateMonthly = () => {
  //     setUserServiceConfiguration((prevVal) => ({
  //       ...userServiceConfiguration,
  //       monthly: !prevVal.monthly,
  //     }));
  //   };
  //   const updateAddons = (addon: Addon) => {
  //     const addons = userServiceConfiguration.addons;
  //     const index = addons.findIndex(
  //       (currentAddon) => currentAddon.name === addon.name
  //     );
  //     if (index === -1) {
  //       setUserServiceConfiguration({
  //         ...userServiceConfiguration,
  //         addons: [...addons, addon],
  //       });
  //     } else {
  //       addons.splice(index, 1);
  //       setUserServiceConfiguration({
  //         ...userServiceConfiguration,
  //         addons: [...addons],
  //       });
  //     }
  //   };
  //   const nextStep = (onGoingStep?: number) => {
  //     if (step === 2) return;
  //     if (step === 1 || (onGoingStep && onGoingStep !== 1 && step === 1)) {
  //       if (
  //         !userServiceConfiguration.userInfo.first_name ||
  //         !userServiceConfiguration.userInfo.last_name ||
  //         !userServiceConfiguration.userInfo.email_address ||
  //         !userServiceConfiguration.userInfo.email_address.includes("@") ||
  //         !userServiceConfiguration.userInfo.phone_number ||
  //         !userServiceConfiguration.userInfo.password
  //       ) {
  //         setShowRequiredFields(true);
  //         return;
  //       }
  //     }
  //     setStep((step) => {
  //       if (onGoingStep) return onGoingStep;
  //       return step + 1;
  //     });
  //   };
  //   const goBack = () => {
  //     if (step === 1) return;
  //     setStep((step) => step - 1);
  //   };
  //   const handleSwitch = (id: string) => (e: any) => {
  //     SignUpSteps[parseInt(id) - 1]["status"] = "current";
  //     setStep(parseInt(id));
  //   };
  //   return (
  //     <div>
  //       <form>
  //         {step === 1 && (
  //           <UserWizard
  //             handleSwitch={handleSwitch}
  //             steps={SignUpSteps}
  //             content={
  //               <PersonalInfo
  //                 userInfo={userServiceConfiguration.userInfo}
  //                 updateUserInfo={updateUserInfo}
  //                 showRequired={showRequired}
  //               />
  //             }
  //           />
  //         )}
  //         {step === 2 && (
  //           <SelectPlan
  //             selectedPlan={userServiceConfiguration.selectedPlan}
  //             monthly={userServiceConfiguration.monthly}
  //             updateSelectedPlan={updateSelectedPlan}
  //             updateIsMonthly={updateMonthly}
  //           />
  //         )}
  //         {/* {step === 3 && (
  //           <Addons
  //             selectedAddons={userServiceConfiguration.addons}
  //             monthly={userServiceConfiguration.monthly}
  //             updateAddons={updateAddons}
  //           />
  //         )} */}
  //         {/* {step === 4 && (
  //           <ServiceSummary userServiceConfiguration={userServiceConfiguration} />
  //         )} */}
  //         {/* {step === 5 && <ThankYou />} */}
  //       </form>
  //       {step > 1 ? (
  //         <menu className='flex justify-between p-4 mt-auto'>
  //           <li>
  //             <Button type='ghost' onClick={goBack}>
  //               Go Back
  //             </Button>
  //           </li>
  //           <li>
  //             <Button
  //               onClick={() => nextStep()}
  //               type={step > 2 ? "secondary" : "primary"}
  //             >
  //               {/* {step > 2 ? "Next Step" : "Confirm"} */}
  //             </Button>
  //           </li>
  //         </menu>
  //       ) : (
  //         <Button type='ghost' onClick={() => nextStep()}>
  //           Go Next
  //         </Button>
  //       )}
  //     </div>
  //   );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignWizard);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3c8fb5289eb4881bf0f6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.194d584eefea96866f43.hot-update.js.map