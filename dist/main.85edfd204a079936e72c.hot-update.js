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
/* harmony import */ var _StepOne__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StepOne */ "./src/member/formT/StepOne.tsx");
/* harmony import */ var _StepTwo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepTwo */ "./src/member/formT/StepTwo.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


// import { SignUpSteps } from "../../_app/shared/member/SignUpSteps";
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
      userInfo: {
        first_name: "",
        last_name: "",
        email_address: "",
        phone_number: "",
        password: ""
      }
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    userServiceConfiguration = _useState4[0],
    setUserServiceConfiguration = _useState4[1];
  var makeRequest = function makeRequest(data) {
    console.log("hhdhd", data);
  };
  var handleNextStep = function handleNextStep(newData) {
    var _final = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setUserServiceConfiguration(function (prev) {
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
    setUserServiceConfiguration(function (prev) {
      return Object.assign(Object.assign({}, prev), newData);
    });
    setCurrentStep(function (prev) {
      return prev - 1;
    });
  };
  var steps = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepOne__WEBPACK_IMPORTED_MODULE_1__["default"], {
    next: handleNextStep,
    data: userServiceConfiguration
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_StepTwo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    next: handleNextStep,
    prev: handlePrevStep,
    data: userServiceConfiguration
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
/******/ 	__webpack_require__.h = () => ("e9e90d0f2edc6e8cfe50")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.85edfd204a079936e72c.hot-update.js.map