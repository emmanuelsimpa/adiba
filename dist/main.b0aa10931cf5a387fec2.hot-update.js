"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/forms/Administrator.tsx":
/*!********************************************!*\
  !*** ./src/member/forms/Administrator.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    // validationSchema: RegistrationSchema,
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
    // formik.handleSubmit();
    nextStep();
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
  }, "First name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    onChange: handleChange("first_name"),
    value: values === null || values === void 0 ? void 0 : values.first_name,
    // {...formik.getFieldProps("first_name")}
    type: 'text',
    name: 'first_name',
    id: 'first-name',
    autoComplete: 'given-name',
    className: 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  }), formik.touched.first_name && formik.errors.first_name ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
    // disabled={formik.isSubmitting}
    onClick: Continue,
    className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Next")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Administrator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("16933a24c10abba55aa4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.b0aa10931cf5a387fec2.hot-update.js.map