"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/forms/Summary.tsx":
/*!**************************************!*\
  !*** ./src/member/forms/Summary.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
        return prev(data);
      },
      type: 'button',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, "Previous")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'bg-gray-50 px-4 py-3 text-right sm:px-6'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      onSubmit: handleSubmit,
      type: 'submit',
      className: 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    }, "Enroll"))));
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("88cb70746b01a6229459")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.4dff027c1fb5be71ae0a.hot-update.js.map