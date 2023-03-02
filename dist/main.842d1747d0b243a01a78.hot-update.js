"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/formT/StepTwo.tsx":
/*!**************************************!*\
  !*** ./src/member/formT/StepTwo.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var StepTwo = function StepTwo(props) {
  var handleSubmit = function handleSubmit(values) {
    props.next(values);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(formik__WEBPACK_IMPORTED_MODULE_0__.Formik, {
    initialValues: props.data,
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ErrorMessage, {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ErrorMessage, {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ErrorMessage, {
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
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ErrorMessage, {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c5ff1e9f1a94482b68e6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.842d1747d0b243a01a78.hot-update.js.map