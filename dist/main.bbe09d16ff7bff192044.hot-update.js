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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");



var Administrator = function Administrator(props) {
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
      className: 'mb-1 block text-sm font-medium text-gray-700'
    }, "Request License Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      "data-modal-target": 'authentication-modal',
      "data-modal-toggle": 'authentication-modal',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
      type: 'button'
    }, "Open Request"), modal), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
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
var modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  id: 'authentication-modal',
  tabIndex: '-1',
  "aria-hidden": 'true',
  "class": 'fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'relative w-full h-full max-w-md md:h-auto'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'relative bg-white rounded-lg shadow dark:bg-gray-700'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
  type: 'button',
  className: 'absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white',
  "data-modal-hide": 'authentication-modal'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
  "aria-hidden": 'true',
  className: 'w-5 h-5',
  fill: 'currentColor',
  viewBox: '0 0 20 20',
  xmlns: 'http://www.w3.org/2000/svg'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
  "fill-rule": 'evenodd',
  d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
  "clip-rule": 'evenodd'
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
  className: 'sr-only'
}, "Close modal")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'px-6 py-6 lg:px-8'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h3", {
  className: 'mb-4 text-xl font-medium text-gray-900 dark:text-white'
}, "Sign in to our platform"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("form", {
  className: 'space-y-6',
  action: '#'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
  htmlFor: 'email',
  className: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
}, "Your email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
  type: 'email',
  name: 'email',
  id: 'email',
  className: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white',
  placeholder: 'name@company.com',
  required: true
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
  htmlFor: 'password',
  className: 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
}, "Your password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
  type: 'password',
  name: 'password',
  id: 'password',
  placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
  className: 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white',
  required: true
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'flex justify-between'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'flex items-start'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'flex items-center h-5'
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
  id: 'remember',
  type: 'checkbox',
  value: '',
  className: 'w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800',
  required: true
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
  htmlFor: 'remember',
  className: 'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
}, "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
  href: '#',
  className: 'text-sm text-blue-700 hover:underline dark:text-blue-500'
}, "Lost Password?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
  type: 'submit',
  className: 'w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
}, "Login to your account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
  className: 'text-sm font-medium text-gray-500 dark:text-gray-300'
}, "Not registered?", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
  href: '#',
  className: 'text-blue-700 hover:underline dark:text-blue-500'
}, "Create account")))))));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Administrator);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("78086de2fad7ea23bdcd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.bbe09d16ff7bff192044.hot-update.js.map