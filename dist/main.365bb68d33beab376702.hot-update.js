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

/***/ "./src/member/forms/Administrator.tsx":
/*!********************************************!*\
  !*** ./src/member/forms/Administrator.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Administrator = function Administrator(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loading = _React$useState2[0],
    setLoading = _React$useState2[1];
  var nextStep = props.nextStep,
    handleChange = props.handleChange,
    values = props.values;
  var first_name = values.first_name,
    last_name = values.last_name,
    email_address = values.email_address,
    phone_number = values.phone_number,
    password = values.password;
  var enableLoading = function enableLoading() {
    setLoading(true);
  };
  var disableLoading = function disableLoading() {
    setLoading(false);
  };
  var phoneRegExp = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
  var initialValues = {
    first_name: "",
    last_name: "",
    tel: "",
    email: "",
    password: ""
  };
  var RegistrationSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    first_name: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("AUTH.VALIDATION.REQUIRED_FIELD"),
    last_name: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("AUTH.VALIDATION.REQUIRED_FIELD"),
    // tel: Yup.string().matches(phoneRegExp, 'AUTH.VALIDATION.REQUIRED_FIELD'),
    email: yup__WEBPACK_IMPORTED_MODULE_1__.string().email("Wrong email format").min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("AUTH.VALIDATION.REQUIRED_FIELD"),
    password: yup__WEBPACK_IMPORTED_MODULE_1__.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("AUTH.VALIDATION.REQUIRED_FIELD")
  });
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setSubmitting = _ref.setSubmitting;
      var body = {};
      body["first_name"] = values.first_name;
      //   handleChange(body);
      enableLoading();
      nextStep();
      setSubmitting(false);
    }
  });
  var Continue = function Continue(e) {
    e.preventDefault();
    formik.handleSubmit();
    // nextStep()
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'md:col-span-1 mb-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 sm:px-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: 'text-lg font-medium leading-6 text-gray-900'
  }, "Personal Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-1 text-sm text-gray-600'
  }, "Use a permanent address where you can receive mail."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-5 md:col-span-2 md:mt-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: '#',
    method: 'POST'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'overflow-hidden shadow sm:rounded-md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-white px-4 py-5 sm:p-6'
  }, formik.status &&
  /*#__PURE__*/
  // <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
  //   <div className="alert-text font-weight-bold">
  react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-sm font-medium text-gray-700'
  }, formik.status)
  //   </div>
  // </div>
  , /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'grid grid-cols-6 gap-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'first-name',
    className: 'block text-sm font-medium text-gray-700'
  }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({}, formik.getFieldProps("first_name"), {
    type: 'text',
    name: 'first_name',
    id: 'first-name',
    autoComplete: 'given-name',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), formik.touched.first_name && formik.errors.first_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.first_name)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'last-name',
    className: 'block text-sm font-medium text-gray-700'
  }, "Last name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.last_name,
    onChange: handleChange("last_name"),
    type: 'text',
    name: 'last-name',
    id: 'last-name',
    autoComplete: 'family-name',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  }), formik.touched.last_name && formik.errors.last_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.last_name)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'first-name',
    className: 'block text-sm font-medium text-gray-700'
  }, "Email Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.email_address,
    onChange: handleChange("email_address"),
    type: 'email',
    name: 'email-address',
    id: 'email-address',
    autoComplete: 'email',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  }), formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.email)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'phone-number',
    className: 'block text-sm font-medium text-gray-700'
  }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.phone_number,
    onChange: handleChange("phone_number"),
    type: 'text',
    name: 'phone-number',
    id: 'phone-number',
    autoComplete: 'phone-number',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  }), formik.touched.tel && formik.errors.tel ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.tel)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'license-number',
    className: 'block text-sm font-medium text-gray-700'
  }, "License Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.license_number,
    onChange: handleChange("license_number"),
    type: 'text',
    name: 'license-number',
    id: 'license-number',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'password',
    className: 'block text-sm font-medium text-gray-700'
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.password,
    onChange: handleChange("password"),
    type: 'password',
    name: 'password',
    id: 'password',
    autoComplete: 'given-name',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  }), formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.password)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'col-span-6 sm:col-span-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'confirm-password',
    className: 'block text-sm font-medium text-gray-700'
  }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.confirm_password,
    onChange: handleChange("confirm_password"),
    type: 'password',
    name: 'confirm-password',
    id: 'confirm-password',
    autoComplete: 'family-name',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'submit',
    disabled: formik.isSubmitting,
    onClick: Continue,
    className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Next"), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full',
    role: 'status'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'visually-hidden'
  }, "Loading..."))
  //   <svg
  //     aria-hidden="true"
  //     className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
  //     viewBox="0 0 100 101"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
  //       fill="currentColor"
  //     />
  //     <path
  //       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
  //       fill="currentFill"
  //     />
  //   </svg>
  // <span class="sr-only">Loading...</span>
  ))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Administrator);

/***/ }),

/***/ "./src/member/forms/BusinessEntity.tsx":
/*!*********************************************!*\
  !*** ./src/member/forms/BusinessEntity.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BusinessEntity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function BusinessEntity(props) {
  var prevStep = props.prevStep,
    nextStep = props.nextStep,
    handleChange = props.handleChange,
    values = props.values;
  var Previous = function Previous(e) {
    e.preventDefault();
    prevStep();
  };
  var Continue = function Continue(e) {
    e.preventDefault();
    nextStep();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "md:col-span-1 mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 sm:px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900"
  }, "Business Entity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-1 text-sm text-gray-600"
  }, "Please provide information about the business you're signing up for."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-5 md:col-span-2 md:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: "#",
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "overflow-hidden shadow sm:rounded-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 py-5 sm:p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "grid grid-cols-6 gap-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-span-6 sm:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "business-name",
    className: "block text-sm font-medium text-gray-700"
  }, "Business Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.business_name,
    onChange: handleChange('business_name'),
    type: "text",
    name: "business-name",
    id: "business-name",
    autoComplete: "given-name",
    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-span-6 sm:col-span-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "business-address",
    className: "block text-sm font-medium text-gray-700"
  }, "Business Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    defaultValue: values === null || values === void 0 ? void 0 : values.business_address,
    onChange: handleChange('business_address'),
    name: "business-address",
    id: "business-address",
    autoComplete: "address",
    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-span-6 sm:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "email-address",
    className: "block text-sm font-medium text-gray-700"
  }, "Business Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.business_email,
    onChange: handleChange('business_email'),
    type: "email",
    name: "email-address",
    id: "email-address",
    autoComplete: "phone-number",
    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-span-6 sm:col-span-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: "business-url",
    className: "block text-sm font-medium text-gray-700"
  }, "Business URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    value: values === null || values === void 0 ? void 0 : values.business_url,
    onChange: handleChange('business_url'),
    type: "text",
    name: "business-url",
    id: "business-url",
    className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex justify-between bg-gray-50"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-3 text-right sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: Previous,
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-3 text-right sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: Continue,
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Next")))))));
}

/***/ }),

/***/ "./src/member/forms/SignUpWizard.tsx":
/*!*******************************************!*\
  !*** ./src/member/forms/SignUpWizard.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUpWizard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_app/shared/member/UserWizard */ "./src/_app/shared/member/UserWizard.tsx");
/* harmony import */ var _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_app/shared/ViewModels/UserMgtViewModel */ "./src/_app/shared/ViewModels/UserMgtViewModel.ts");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Summary */ "./src/member/forms/Summary.tsx");
/* harmony import */ var _Administrator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Administrator */ "./src/member/forms/Administrator.tsx");
/* harmony import */ var _BusinessEntity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BusinessEntity */ "./src/member/forms/BusinessEntity.tsx");
/* harmony import */ var _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_app/shared/member/SignUpSteps */ "./src/_app/shared/member/SignUpSteps.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var SignUpWizard = /*#__PURE__*/function (_Component) {
  _inherits(SignUpWizard, _Component);
  var _super = _createSuper(SignUpWizard);
  function SignUpWizard() {
    var _this;
    _classCallCheck(this, SignUpWizard);
    _this = _super.apply(this, arguments);
    _this.state = {
      step: 1,
      first_name: "",
      last_name: "",
      email_address: "",
      phone_number: "",
      license_number: "",
      password: "",
      confirm_password: "",
      business_name: "",
      business_address: "",
      business_email: "",
      business_url: ""
    };
    _this.prevStep = function () {
      var step = _this.state.step;
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 1]["status"] = "upcoming";
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 2]["status"] = "current";
      _this.setState({
        step: step - 1
      });
    };
    _this.nextStep = function () {
      var step = _this.state.step;
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 1]["status"] = "complete";
      _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step]["status"] = "current";
      _this.setState({
        step: step + 1
      });
    };
    // handleChange = (data) => {
    //   this.setState({ first_name: 'emmy' });
    //   console.log('ln 41', data.first_name);
    // };
    _this.handleChange = function (input) {
      return function (e) {
        _this.setState(_defineProperty({}, input, e.target.value));
      };
    };
    _this.handleSwitch = function (id) {
      return function (e) {
        var step = _this.state.step;
        _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[step - 1]["status"] = "complete";
        _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps[parseInt(id) - 1]["status"] = "current";
        _this.setState({
          step: parseInt(id)
        });
      };
    };
    _this.handleSubmit = function () {
      console.log(_this.state);
      var clientsViewModelsInstance = new _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_2__["default"]("signup");
      var signUp = clientsViewModelsInstance.signUp(_this.state);
      signUp.then(function (response) {
        if (response.status == 200) {
          location.href = "/";
        } else {
          location.href = ".";
        }
      });
    };
    return _this;
  }
  _createClass(SignUpWizard, [{
    key: "render",
    value: function render() {
      var step = this.state.step;
      var _this$state = this.state,
        first_name = _this$state.first_name,
        last_name = _this$state.last_name,
        email_address = _this$state.email_address,
        phone_number = _this$state.phone_number,
        license_number = _this$state.license_number,
        password = _this$state.password,
        confirm_password = _this$state.confirm_password,
        business_name = _this$state.business_name,
        business_address = _this$state.business_address,
        business_email = _this$state.business_email,
        business_url = _this$state.business_url;
      var values = {
        first_name: first_name,
        last_name: last_name,
        email_address: email_address,
        phone_number: phone_number,
        license_number: license_number,
        password: password,
        confirm_password: confirm_password,
        business_name: business_name,
        business_address: business_address,
        business_email: business_email,
        business_url: business_url
      };
      switch (step) {
        case 1:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            handleSwitch: this.handleSwitch,
            steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps,
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Administrator__WEBPACK_IMPORTED_MODULE_4__["default"], {
              nextStep: this.nextStep,
              handleChange: this.handleChange,
              values: values
            })
          }));
        case 2:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            handleSwitch: this.handleSwitch,
            steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps,
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BusinessEntity__WEBPACK_IMPORTED_MODULE_5__["default"], {
              prevStep: this.prevStep,
              nextStep: this.nextStep,
              handleChange: this.handleChange,
              values: values
            })
          }));
        case 3:
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_shared_member_UserWizard__WEBPACK_IMPORTED_MODULE_1__["default"], {
            handleSwitch: this.handleSwitch,
            steps: _app_shared_member_SignUpSteps__WEBPACK_IMPORTED_MODULE_6__.SignUpSteps,
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Summary__WEBPACK_IMPORTED_MODULE_3__["default"], {
              prevStep: this.prevStep,
              values: values,
              handleSubmit: this.handleSubmit
            })
          }));
        default:
        // do nothing
      }
    }
  }]);
  return SignUpWizard;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);


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
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/PaperClipIcon.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Summary(props) {
  var prevStep = props.prevStep,
    values = props.values,
    handleSubmit = props.handleSubmit;
  var Previous = function Previous(e) {
    e.preventDefault();
    prevStep();
  };
  var Submit = function Submit(e) {
    e.preventDefault();
    handleSubmit();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "overflow-hidden bg-white shadow sm:rounded-lg sm:max-w-7xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 py-5 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900"
  }, "Administrator Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "Personal details and application.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border-t border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.first_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.last_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.email_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.phone_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "License Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.license_number)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, '*'.repeat(values.password.length))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 py-5 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "text-lg font-medium leading-6 text-gray-900"
  }, "Business Entity Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mt-1 max-w-2xl text-sm text-gray-500"
  }, "Personal details and application.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "border-t border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Business Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.business_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Business Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.business_address)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Business Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.business_email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Business URL"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, values.business_url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500"
  }, "Attachments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    role: "list",
    className: "divide-y divide-gray-200 rounded-md border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "flex items-center justify-between py-3 pl-3 pr-4 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-0 flex-1 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__, {
    className: "h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ml-2 w-0 flex-1 truncate"
  }, "cac_document.pdf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-4 flex-shrink-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Download"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "flex items-center justify-between py-3 pl-3 pr-4 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex w-0 flex-1 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__, {
    className: "h-5 w-5 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ml-2 w-0 flex-1 truncate"
  }, "memart_document.pdf")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-4 flex-shrink-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Download")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-between bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-3 text-right sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: Previous,
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bg-gray-50 px-4 py-3 text-right sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: Submit,
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Enroll"))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2919d8f2158ff0ead553")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.365bb68d33beab376702.hot-update.js.map