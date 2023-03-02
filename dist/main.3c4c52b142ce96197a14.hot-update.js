self["webpackHotUpdateadiba_central"]("main",{

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
/* harmony import */ var _member_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../member/signup */ "./src/member/signup.tsx");
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
  app.registerPage("/sign-up", _member_signup__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

/***/ "./src/_app/shared/CommandPalette.tsx":
/*!********************************************!*\
  !*** ./src/_app/shared/CommandPalette.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommandPalette)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/className */ "./src/_app/shared/utils/className.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var projects = [{
  id: 1,
  name: "Workflow Inc. / Website Redesign",
  category: "Projects",
  url: "#"
}
// More projects...
];

var users = [{
  id: 1,
  name: "Leslie Alexander",
  url: "#",
  imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}
// More users...
];

function CommandPalette(props) {
  var openPalette = props.openPalette,
    setOpenPalette = props.setOpenPalette;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    rawQuery = _useState2[0],
    setRawQuery = _useState2[1];
  var query = rawQuery.toLowerCase().replace(/^[#>]/, "");
  var filteredProjects = rawQuery === "#" ? projects : query === "" || rawQuery.startsWith(">") ? [] : projects.filter(function (project) {
    return project.name.toLowerCase().includes(query);
  });
  var filteredUsers = rawQuery === ">" ? users : query === "" || rawQuery.startsWith("#") ? [] : users.filter(function (user) {
    return user.name.toLowerCase().includes(query);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
    show: openPalette,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    afterLeave: function afterLeave() {
      return setRawQuery("");
    },
    appear: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
    as: 'div',
    className: 'relative z-10',
    onClose: setOpenPalette
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
    className: 'mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox
  //   onChange={(item) => (window.location = item.url)}
  , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.MagnifyingGlassIcon, {
    className: 'pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Input, {
    className: 'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm',
    placeholder: 'Search...',
    onChange: function onChange(event) {
      return setRawQuery(event.target.value);
    }
  })), (filteredProjects.length > 0 || filteredUsers.length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Options, {
    "static": true,
    className: 'max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2'
  }, filteredProjects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: 'text-xs font-semibold text-gray-900'
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: '-mx-4 mt-2 text-sm text-gray-700'
  }, filteredProjects.map(function (project) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Option, {
      key: project.id,
      value: project,
      className: function className(_ref) {
        var active = _ref.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? "flex cursor-default select-none items-center px-4 py-2" : "flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white");
      }
    }, function (_ref2) {
      var active = _ref2.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.FolderIcon, {
        className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("h-6 w-6 flex-none", active ? "text-white" : "text-gray-400"),
        "aria-hidden": 'true'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: 'ml-3 flex-auto truncate'
      }, project.name));
    });
  }))), filteredUsers.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: 'text-xs font-semibold text-gray-900'
  }, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: '-mx-4 mt-2 text-sm text-gray-700'
  }, filteredUsers.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Combobox.Option, {
      key: user.id,
      value: user,
      className: function className(_ref3) {
        var active = _ref3.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? "flex cursor-default select-none items-center px-4 py-2" : "flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white");
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: user.imageUrl,
      alt: '',
      className: 'h-6 w-6 flex-none rounded-full'
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'ml-3 flex-auto truncate'
    }, user.name));
  })))), rawQuery === "?" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'py-14 px-6 text-center text-sm sm:px-14'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.LifebuoyIcon, {
    className: 'mx-auto h-6 w-6 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-4 font-semibold text-gray-900'
  }, "Help with searching"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-2 text-gray-500'
  }, "Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects.")), query !== "" && rawQuery !== "?" && filteredProjects.length === 0 && filteredUsers.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'py-14 px-6 text-center text-sm sm:px-14'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.ExclamationTriangleIcon, {
    className: 'mx-auto h-6 w-6 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-4 font-semibold text-gray-900'
  }, "No results found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-2 text-gray-500'
  }, "We couldn\u2019t find anything with that term. Please try again.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700'
  }, "Type", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery.startsWith("#") ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900")
  }, "#"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sm:hidden'
  }, "for projects,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'hidden sm:inline'
  }, "to access projects,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery.startsWith(">") ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900")
  }, ">"), " ", "for users, and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)("mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2", rawQuery === "?" ? "border-indigo-600 text-indigo-600" : "border-gray-400 text-gray-900")
  }, "?"), " ", "for help.")))))));
}

/***/ }),

/***/ "./src/_app/shared/Feed.tsx":
/*!**********************************!*\
  !*** ./src/_app/shared/Feed.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Feed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/className */ "./src/_app/shared/utils/className.tsx");
/* harmony import */ var _models_FeedViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/FeedViewModel */ "./src/_app/shared/models/FeedViewModel.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Feed() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activity = _React$useState2[0],
    setActivity = _React$useState2[1];
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    var feedViewModelsInstance = new _models_FeedViewModel__WEBPACK_IMPORTED_MODULE_2__["default"]("feed");
    var listTable = feedViewModelsInstance.list();
    listTable.then(function (response) {
      return response.json();
    }).then(function (data) {
      return setActivity(data);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flow-root'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: '-mb-8'
  }, activity.map(function (activityItem, activityItemIdx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: activityItem.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative pb-8'
    }, activityItemIdx !== activity.length - 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200',
      "aria-hidden": 'true'
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative flex items-start space-x-3'
    }, activityItem.type === "comment" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: 'flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white',
      src: activityItem.imageUrl,
      alt: ''
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.ChatBubbleLeftEllipsisIcon, {
      className: 'h-5 w-5 text-gray-400',
      "aria-hidden": 'true'
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'min-w-0 flex-1'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'text-sm'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: activityItem.person.href,
      className: 'font-medium text-gray-900'
    }, activityItem.person.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: 'mt-0.5 text-sm text-gray-500'
    }, "Commented ", activityItem.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'mt-2 text-sm text-gray-700'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, activityItem.comment)))) : activityItem.type === "assignment" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative px-1'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.UserCircleIcon, {
      className: 'h-5 w-5 text-gray-500',
      "aria-hidden": 'true'
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'min-w-0 flex-1 py-1.5'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'text-sm text-gray-500'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: activityItem.person.href,
      className: 'font-medium text-gray-900'
    }, activityItem.person.name), " ", "assigned", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: activityItem.assigned ? activityItem.assigned.href : "#",
      className: 'font-medium text-gray-900'
    }, activityItem.assigned ? activityItem.assigned.name : ""), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'whitespace-nowrap'
    }, activityItem.date)))) : activityItem.type === "tags" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative px-1'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.TagIcon, {
      className: 'h-5 w-5 text-gray-500',
      "aria-hidden": 'true'
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'min-w-0 flex-1 py-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'text-sm leading-8 text-gray-500'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'mr-0.5'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: activityItem.person.href,
      className: 'font-medium text-gray-900'
    }, activityItem.person.name), " ", "added tags"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'mr-0.5'
    }, activityItem.tags ? activityItem.tags.map(function (tag) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        key: tag.name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: tag.href,
        className: 'relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: 'absolute flex flex-shrink-0 items-center justify-center'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(tag.color, "h-1.5 w-1.5 rounded-full"),
        "aria-hidden": 'true'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: 'ml-3.5 font-medium text-gray-900'
      }, tag.name)), " ");
    }) : ""), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'whitespace-nowrap'
    }, activityItem.date)))) : null)));
  })));
}

/***/ }),

/***/ "./src/_app/shared/FeedStandardList.tsx":
/*!**********************************************!*\
  !*** ./src/_app/shared/FeedStandardList.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FeedStandardList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var activityItems = [{
  "id": 1,
  "person": {
    "name": "Lindsay Walton",
    "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
  },
  "project": "Workcation",
  "commit": "2d89f0c8",
  "environment": "production",
  "time": "1h"
}, {
  "id": 2,
  "person": {
    "name": "John Doe",
    "imageUrl": "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  "project": "Project X",
  "commit": "9f9d8e7b",
  "environment": "staging",
  "time": "30m"
}];
function FeedStandardList() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "divide-y divide-gray-200"
  }, activityItems.map(function (activityItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: activityItem.id,
      className: "py-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "flex space-x-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      className: "h-6 w-6 rounded-full",
      src: activityItem.person.imageUrl,
      alt: ""
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "flex-1 space-y-1"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "flex items-center justify-between"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
      className: "text-sm font-medium"
    }, activityItem.person.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "text-sm text-gray-500"
    }, activityItem.time)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "text-sm text-gray-500"
    }, "Deployed ", activityItem.project, " (", activityItem.commit, " in master) to ", activityItem.environment))));
  })));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/MasterLayout.tsx":
/*!*******************************************************!*\
  !*** ./src/_app/shared/MasterLayout/MasterLayout.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MasterLayout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Sidebar */ "./src/_app/shared/MasterLayout/components/Sidebar.tsx");
/* harmony import */ var _components_Topbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Topbar */ "./src/_app/shared/MasterLayout/components/Topbar.tsx");
/* harmony import */ var _components_MobileSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MobileSidebar */ "./src/_app/shared/MasterLayout/components/MobileSidebar.tsx");
/* harmony import */ var _components_MobileSidebarToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MobileSidebarToggle */ "./src/_app/shared/MasterLayout/components/MobileSidebarToggle.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function MasterLayout(props) {
  var content = props.content;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    sidebarOpen = _useState2[0],
    setSidebarOpen = _useState2[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MobileSidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    show: sidebarOpen,
    toggle: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex flex-1 flex-col md:pl-64"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_MobileSidebarToggle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggle: setSidebarOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Topbar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 sm:pr-6 lg:px-8 sm:pt-8'
  }, content))));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/ViewModels/MasterLayoutViewModel.ts":
/*!**************************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/ViewModels/MasterLayoutViewModel.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_BaseViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/_BaseViewModel */ "./src/_app/shared/models/_BaseViewModel.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// create a function that returns a view model object
var useViewModel = function useViewModel() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    navs = _useState2[0],
    setNavs = _useState2[1]; // initialize the users state
  // define a function that updates the users state
  var updateNavs = function updateNavs(newUsers) {
    setNavs(newUsers);
  };
  // return the view model object
  return {
    navs: navs,
    updateNavs: updateNavs
  };
};
var MasterLayoutViewModel = /*#__PURE__*/function (_BaseViewModel2) {
  _inherits(MasterLayoutViewModel, _BaseViewModel2);
  var _super = _createSuper(MasterLayoutViewModel);
  function MasterLayoutViewModel(data) {
    _classCallCheck(this, MasterLayoutViewModel);
    return _super.call(this, data);
  }
  _createClass(MasterLayoutViewModel, [{
    key: "navList",
    value: function navList() {
      var currentApp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (currentApp === "channels") {
                this._setAll({
                  path: "113e80da-23da-4cdd-9fd4-c60b89560ae6"
                });
                console.log("hereeee");
              } else {
                this._setAll({
                  path: "2d664a5c-b14c-4232-b3d5-43a53679cf0a"
                });
              }
              _context.next = 3;
              return this.get();
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    }
  }]);
  return MasterLayoutViewModel;
}(_models_BaseViewModel__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasterLayoutViewModel);
// export default useViewModel;

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/FlyoutMenu.tsx":
/*!****************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/FlyoutMenu.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentAppContext": () => (/* binding */ CurrentAppContext),
/* harmony export */   "default": () => (/* binding */ FlyoutMenu),
/* harmony export */   "solutions": () => (/* binding */ solutions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/className */ "./src/_app/shared/utils/className.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var solutions = [{
  name: "Channels Engine",
  description: "Get a better understanding of where your traffic is coming from.",
  href: "/channels",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ChartBarIcon
}, {
  name: "Retail/Loan Engine",
  description: "Speak directly to your customers in a more meaningful way.",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.CursorArrowRaysIcon
}, {
  name: "Security",
  description: "Your customers' data will be safe and secure.",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ShieldCheckIcon
}, {
  name: "CRM/Helpdesk Engine",
  description: "Connect with third-party tools that you're already using.",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.Squares2X2Icon
}, {
  name: "Performance Insights",
  description: "Build strategic funnels that will drive your customers to convert",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowPathIcon
}];
var callsToAction = [{
  name: "Watch Demo",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.PlayIcon
}, {
  name: "Contact Sales",
  href: "#",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon
}];
var CurrentAppContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function FlyoutMenu() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentApp = _React$useState2[0],
    setCurrentApp = _React$useState2[1];
  var handleSwitch = function handleSwitch(name) {
    localStorage.setItem("currentApp", name);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CurrentAppContext.Provider, {
    value: currentApp
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    className: 'relative'
  }, function (_ref) {
    var open = _ref.open;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(open ? "text-gray-900" : "text-gray-500", "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:pl-12")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Choose an application ", currentApp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(open ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
      "aria-hidden": 'true'
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Transition, {
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
      enter: 'transition ease-out duration-200',
      enterFrom: 'opacity-0 translate-y-1',
      enterTo: 'opacity-100 translate-y-0',
      leave: 'transition ease-in duration-150',
      leaveFrom: 'opacity-100 translate-y-0',
      leaveTo: 'opacity-0 translate-y-1'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {
      className: 'absolute md:left-64 left-32 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'
    }, solutions.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        key: item.name,
        href: item.href,
        onClick: function onClick() {
          return handleSwitch(item.href.slice(1));
        },
        className: '-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {
        className: 'h-6 w-6 flex-shrink-0 text-indigo-600',
        "aria-hidden": 'true'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: 'ml-4'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: 'text-base font-medium text-gray-900'
      }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
        className: 'mt-1 text-sm text-gray-500'
      }, item.description)));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'
    }, callsToAction.map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: item.name,
        className: 'flow-root'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: item.href,
        className: '-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-100'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {
        className: 'h-6 w-6 flex-shrink-0 text-gray-400',
        "aria-hidden": 'true'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: 'ml-3'
      }, item.name)));
    }))))));
  }));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/MobileSidebar.tsx":
/*!*******************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/MobileSidebar.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileSidebar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/className */ "./src/_app/shared/utils/className.tsx");
/* harmony import */ var _ChannelsMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ChannelsMenu */ "./src/_app/shared/ChannelsMenu.tsx");
/* harmony import */ var _SidebarSecondary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SidebarSecondary */ "./src/_app/shared/SidebarSecondary.tsx");







function MobileSidebar(props) {
  var show = props.show,
    toggle = props.toggle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
    show: show,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
    as: 'div',
    className: 'relative z-40 md:hidden',
    onClose: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'transition-opacity ease-linear duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'transition-opacity ease-linear duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 bg-gray-600 bg-opacity-75'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 z-40 flex'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'transition ease-in-out duration-300 transform',
    enterFrom: '-translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transition ease-in-out duration-300 transform',
    leaveFrom: 'translate-x-0',
    leaveTo: '-translate-x-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
    className: 'relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-in-out duration-300',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in-out duration-300',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute top-0 right-0 -mr-12 pt-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white',
    onClick: function onClick() {
      return toggle(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Close sidebar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.XMarkIcon, {
    className: 'h-6 w-6 text-white',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-shrink-0 items-center px-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-auto',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    alt: 'Your Company'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-5 h-0 flex-1 overflow-y-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: 'space-y-1 px-2'
  }, _ChannelsMenu__WEBPACK_IMPORTED_MODULE_2__.navigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(item.current ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900", "group flex items-center px-2 py-2 text-base font-medium rounded-md")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {
      className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(item.current ? "text-gray-500" : "text-gray-400 group-hover:text-gray-500", "mr-4 flex-shrink-0 h-6 w-6"),
      "aria-hidden": 'true'
    }), item.name);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SidebarSecondary__WEBPACK_IMPORTED_MODULE_3__["default"], null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-14 flex-shrink-0',
    "aria-hidden": 'true'
  }))));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/MobileSidebarToggle.tsx":
/*!*************************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/MobileSidebarToggle.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileSidebarToggle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");


function MobileSidebarToggle(props) {
  var toggle = props.toggle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",
    onClick: function onClick() {
      return toggle(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "Open sidebar"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.Bars3BottomLeftIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/Sidebar.tsx":
/*!*************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/Sidebar.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _SidebarMain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarMain */ "./src/_app/shared/MasterLayout/components/SidebarMain.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ViewModels_MasterLayoutViewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ViewModels/MasterLayoutViewModel */ "./src/_app/shared/MasterLayout/ViewModels/MasterLayoutViewModel.ts");
/* harmony import */ var _utils_className__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/className */ "./src/_app/shared/utils/className.tsx");
/* harmony import */ var _SidebarSecondary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../SidebarSecondary */ "./src/_app/shared/SidebarSecondary.tsx");
/* harmony import */ var _ChannelsMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ChannelsMenu */ "./src/_app/shared/ChannelsMenu.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Sidebar() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    result = _React$useState2[0],
    setResult = _React$useState2[1];
  var currentApp = localStorage.getItem("currentApp") || null;
  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {
    var clientsViewModelsInstance = new _ViewModels_MasterLayoutViewModel__WEBPACK_IMPORTED_MODULE_2__["default"]("nav");
    var navList = clientsViewModelsInstance.navList(currentApp);
    navList.then(function (response) {
      return response.json();
    }).then(function (data) {
      var updatedData = data.map(function (item) {
        return Object.assign(Object.assign({}, item), {
          icon: (0,_ChannelsMenu__WEBPACK_IMPORTED_MODULE_5__.setIcon)(item.icon)
        });
      });
      setResult(updatedData);
    });
  }, []);
  console.log("ln 30", result);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'flex flex-shrink-0 items-center px-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    className: 'h-8 w-auto',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    alt: 'Your Company'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'mt-5 flex flex-grow flex-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: 'flex-1 space-y-8 bg-white px-2',
    "aria-label": 'Sidebar'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SidebarMain__WEBPACK_IMPORTED_MODULE_0__["default"], {
    classFn: _utils_className__WEBPACK_IMPORTED_MODULE_3__.classNames,
    navList: result
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SidebarSecondary__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/SidebarMain.tsx":
/*!*****************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/SidebarMain.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarMain)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function SidebarMain(props) {
  var navList = props.navList,
    classFn = props.classFn;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-1"
  }, navList === null || navList === void 0 ? void 0 : navList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      key: item.name,
      href: item.href,
      className: classFn(item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, {
      className: classFn(item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6'),
      "aria-hidden": "true"
    }), item.name);
  }));
}

/***/ }),

/***/ "./src/_app/shared/MasterLayout/components/Topbar.tsx":
/*!************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/Topbar.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Topbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var _FlyoutMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlyoutMenu */ "./src/_app/shared/MasterLayout/components/FlyoutMenu.tsx");
/* harmony import */ var _CommandPalette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../CommandPalette */ "./src/_app/shared/CommandPalette.tsx");
/* harmony import */ var _SlideOver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SlideOver */ "./src/_app/shared/SlideOver.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// import SlideOver from '../../../../components/SlideOver';



function Topbar() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0__.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    openPalette = _React$useState4[0],
    setOpenPalette = _React$useState4[1];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_0__.useState("profile"),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    content = _React$useState6[0],
    setContent = _React$useState6[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-1 justify-between px-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex w-full md:ml-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center w-full text-gray-400 focus-within:text-gray-600'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FlyoutMenu__WEBPACK_IMPORTED_MODULE_1__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'ml-4 flex items-center md:ml-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpenPalette(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.MagnifyingGlassIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpen(true);
      setContent("messages");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "View messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.EnvelopeIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpen(true);
      setContent("notifications");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "View notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.BellIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    as: 'div',
    className: 'relative ml-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Button, {
    className: 'flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
    onClick: function onClick() {
      setOpen(true);
      setContent("profile");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Open user menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-8 rounded-full',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: ''
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SlideOver__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: open,
    setOpen: setOpen,
    content: content
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CommandPalette__WEBPACK_IMPORTED_MODULE_2__["default"], {
    openPalette: openPalette,
    setOpenPalette: setOpenPalette
  })))));
}

/***/ }),

/***/ "./src/_app/shared/Profile.tsx":
/*!*************************************!*\
  !*** ./src/_app/shared/Profile.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");



// import { useNavigate } from "react-router-dom";
function Profile() {
  // let navigate = useNavigate();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pb-1 sm:pb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative h-40 sm:h-56"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "absolute h-full w-full object-cover",
    src: "https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80",
    alt: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "sm:flex-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "text-xl font-bold text-gray-900 sm:text-2xl"
  }, "Ashley Porter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Online"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "text-sm text-gray-500"
  }, "@ashleyporter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return location.href = "/settings";
    },
    type: "button",
    className: "inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1"
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return location.href = "/user/signin";
    },
    type: "button",
    className: "inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Sign Out"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-3 inline-flex sm:ml-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    as: "div",
    className: "relative inline-block text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button, {
    className: "inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Copy profile link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_2__.LinkIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 pt-5 pb-5 sm:px-0 sm:pt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dl", {
    className: "space-y-8 px-4 sm:space-y-6 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Bio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean arcu."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Location"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, "New York, NY, USA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Website"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, "ashleyporter.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dt", {
    className: "text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
  }, "Birthday"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("dd", {
    className: "mt-1 text-sm text-gray-900 sm:col-span-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("time", {
    dateTime: "1988-06-23"
  }, "June 23, 1988"))))));
}

/***/ }),

/***/ "./src/_app/shared/SidebarSecondary.tsx":
/*!**********************************************!*\
  !*** ./src/_app/shared/SidebarSecondary.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarSecondary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChannelsMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChannelsMenu */ "./src/_app/shared/ChannelsMenu.tsx");


function SidebarSecondary() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'space-y-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: 'px-3 text-sm font-medium text-gray-500 w-fit',
    id: 'projects-headline'
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'space-y-1',
    role: 'group',
    "aria-labelledby": 'projects-headline'
  }, _ChannelsMenu__WEBPACK_IMPORTED_MODULE_1__.secondaryNavigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: 'group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: 'truncate'
    }, item.name));
  })));
}

/***/ }),

/***/ "./src/_app/shared/SlideOver.tsx":
/*!***************************************!*\
  !*** ./src/_app/shared/SlideOver.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SlideOver)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _Feed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Feed */ "./src/_app/shared/Feed.tsx");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile */ "./src/_app/shared/Profile.tsx");
/* harmony import */ var _FeedStandardList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeedStandardList */ "./src/_app/shared/FeedStandardList.tsx");







var slideOverContents = [{
  name: "messages",
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_FeedStandardList__WEBPACK_IMPORTED_MODULE_3__["default"], null)
}, {
  name: "notifications",
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Feed__WEBPACK_IMPORTED_MODULE_1__["default"], null)
}, {
  name: "profile",
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Profile__WEBPACK_IMPORTED_MODULE_2__["default"], null)
}];
function SlideOver(props) {
  var _a;
  var open = props.open,
    setOpen = props.setOpen,
    content = props.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Root, {
    show: open,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog, {
    as: 'div',
    className: 'relative z-10',
    onClose: setOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-in-out duration-500',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in-out duration-500',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fixed inset-0 overflow-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute inset-0 overflow-hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'transform transition ease-in-out duration-500 sm:duration-700',
    enterFrom: 'translate-x-full',
    enterTo: 'translate-x-0',
    leave: 'transform transition ease-in-out duration-500 sm:duration-700',
    leaveFrom: 'translate-x-0',
    leaveTo: 'translate-x-full'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Panel, {
    className: 'pointer-events-auto relative w-screen max-w-md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'ease-in-out duration-500',
    enterFrom: 'opacity-0',
    enterTo: 'opacity-100',
    leave: 'ease-in-out duration-500',
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'button',
    className: 'rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white',
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Close panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__.XMarkIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 sm:px-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Dialog.Title, {
    className: 'text-lg font-medium text-gray-900'
  }, "Panel title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative mt-6 flex-1 px-4 sm:px-6'
  }, (_a = slideOverContents.find(function (item) {
    return item.name === content;
  })) === null || _a === void 0 ? void 0 : _a.component)))))))));
}

/***/ }),

/***/ "./src/_app/shared/components/layouts/dashboard.tsx":
/*!**********************************************************!*\
  !*** ./src/_app/shared/components/layouts/dashboard.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardT": () => (/* binding */ DashboardT)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function DashboardT() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Hello"));
}

/***/ }),

/***/ "./src/_app/shared/components/layouts/default.tsx":
/*!********************************************************!*\
  !*** ./src/_app/shared/components/layouts/default.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errors": () => (/* binding */ errors),
/* harmony export */   "layout": () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../landing */ "./src/landing/index.tsx");




var errors = {
  not_found: function not_found() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: 'error'
    }, "Could not find the requested page. Are you sure it exists?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Go back ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: '/'
    }, "to the dashboard"), "."));
  }
};
var layout = {
  ErrorInfo: function ErrorInfo(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_3__.SwitchErrorInfo, Object.assign({}, props)));
  },
  DashboardContainer: function DashboardContainer(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_landing__WEBPACK_IMPORTED_MODULE_1__["default"], null);
  },
  Layout: function Layout(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_3__.Notifications, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, children));
  },
  NotificationsHost: function NotificationsHost(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notifications'
    }, children);
  },
  NotificationsToast: function NotificationsToast(_ref4) {
    var options = _ref4.options,
      onClose = _ref4.onClose,
      children = _ref4.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "notification-toast ".concat(options.type)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-details'
    }, options.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-title'
    }, options.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-description'
    }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'notification-toast-close',
      onClick: onClose
    }));
  }
};

/***/ }),

/***/ "./src/_app/shared/member/UserMgtForm.tsx":
/*!************************************************!*\
  !*** ./src/_app/shared/member/UserMgtForm.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserMgtForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function UserMgtForm(props) {
  var content = props.content,
    title = props.title,
    subtitle = props.subtitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "mx-auto h-12 w-auto",
    src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
    alt: "Your Company"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-center text-sm text-gray-600"
  }, subtitle)), content));
}

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
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/solid */ "./node_modules/@heroicons/react/24/solid/index.js");

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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_2__.CheckIcon, {
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

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instance": () => (/* binding */ instance)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral/esm/index.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
/* harmony import */ var _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/shared/components/layouts/default */ "./src/_app/shared/components/layouts/default.tsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






// change to your feed URL here (either using feed.piral.cloud or your own service)
var feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
var instance = (0,piral__WEBPACK_IMPORTED_MODULE_4__.createInstance)({
  state: {
    components: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.layout,
    errorComponents: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.errors
    // routes: {
    //   "/": Landing,
    // },
  },

  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_4__.createStandardApi)()), [(0,piral_page_layouts__WEBPACK_IMPORTED_MODULE_5__.createPageLayoutsApi)()]),
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});
(0,_app_app__WEBPACK_IMPORTED_MODULE_2__.setupShell)(instance.root);
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector("#app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_4__.Piral, {
  instance: instance
}));

/***/ }),

/***/ "./src/landing/components/ContactUs.tsx":
/*!**********************************************!*\
  !*** ./src/landing/components/ContactUs.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");


function ContactUs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute inset-y-0 left-0 w-1/2 bg-gray-50"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mx-auto max-w-7xl lg:grid lg:grid-cols-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-lg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
  }, "Get in touch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-3 text-lg leading-6 text-gray-500"
  }, "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
    className: "mt-8 text-base text-gray-500"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", {
    className: "sr-only"
  }, "Postal address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "742 Evergreen Terrace"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Springfield, OR 12345"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", {
    className: "sr-only"
  }, "Phone number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon, {
    className: "h-6 w-6 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-3"
  }, "+1 (555) 123-4567"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", {
    className: "sr-only"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
    className: "flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.EnvelopeIcon, {
    className: "h-6 w-6 flex-shrink-0 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "ml-3"
  }, "support@example.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-6 text-base text-gray-500"
  }, "Looking for careers?", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "font-medium text-gray-700 underline"
  }, "View all job openings"), "."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-lg lg:max-w-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    action: "/",
    method: "POST",
    className: "grid grid-cols-1 gap-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "full-name",
    className: "sr-only"
  }, "Full name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "full-name",
    id: "full-name",
    autoComplete: "name",
    className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
    placeholder: "Full name"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "email",
    className: "sr-only"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
    placeholder: "Email"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "phone",
    className: "sr-only"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    name: "phone",
    id: "phone",
    autoComplete: "tel",
    className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
    placeholder: "Phone"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    htmlFor: "message",
    className: "sr-only"
  }, "Message"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    id: "message",
    name: "message",
    rows: 4,
    className: "block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
    placeholder: "Message",
    defaultValue: ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    className: "inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
  }, "Submit")))))));
}

/***/ }),

/***/ "./src/landing/components/Features.tsx":
/*!*********************************************!*\
  !*** ./src/landing/components/Features.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Features)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");


var transferFeatures = [{
  id: 1,
  name: 'Competitive exchange rates',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.GlobeAltIcon
}, {
  id: 2,
  name: 'No hidden fees',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.ScaleIcon
}, {
  id: 3,
  name: 'Transfers are instant',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.BoltIcon
}];
var communicationFeatures = [{
  id: 1,
  name: 'Mobile notifications',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.ChatBubbleBottomCenterTextIcon
}, {
  id: 2,
  name: 'Reminder emails',
  description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__.EnvelopeIcon
}];
function Features() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "overflow-hidden bg-gray-50 py-16 lg:py-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block",
    width: 404,
    height: 784,
    fill: "none",
    viewBox: "0 0 404 784",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pattern", {
    id: "b1e6e422-73f8-40a6-b5d9-c8586e37e0e7",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    width: 404,
    height: 784,
    fill: "url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl"
  }, "A better way to send money"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
  }, "Transfer funds world-wide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-3 text-lg text-gray-500"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis impedit odit adipisci optio iste blanditiis facere. Totam, velit."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
    className: "mt-10 space-y-10"
  }, transferFeatures.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, {
      className: "h-8 w-8",
      "aria-hidden": "true"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ml-16 text-lg font-medium leading-6 text-gray-900"
    }, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
      className: "mt-2 ml-16 text-base text-gray-500"
    }, item.description));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative -mx-4 mt-10 lg:mt-0",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden",
    width: 784,
    height: 404,
    fill: "none",
    viewBox: "0 0 784 404"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pattern", {
    id: "ca9667ae-9f92-4be7-abcb-9e3d727f2941",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    width: 784,
    height: 404,
    fill: "url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "relative mx-auto",
    width: 490,
    src: "https://tailwindui.com/img/features/feature-example-1.png",
    alt: ""
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block",
    width: 404,
    height: 784,
    fill: "none",
    viewBox: "0 0 404 784",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pattern", {
    id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    width: 404,
    height: 784,
    fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mt-12 sm:mt-16 lg:mt-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:items-center lg:gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:col-start-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
  }, "Always in the loop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-3 text-lg text-gray-500"
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", {
    className: "mt-10 space-y-10"
  }, communicationFeatures.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.id,
      className: "relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "absolute flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, {
      className: "h-8 w-8",
      "aria-hidden": "true"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
      className: "ml-16 text-lg font-medium leading-6 text-gray-900"
    }, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", {
      className: "mt-2 ml-16 text-base text-gray-500"
    }, item.description));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative -mx-4 mt-10 lg:col-start-1 lg:mt-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden",
    width: 784,
    height: 404,
    fill: "none",
    viewBox: "0 0 784 404",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pattern", {
    id: "e80155a9-dfde-425a-b5ea-1f6fadd20131",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-gray-200",
    fill: "currentColor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    width: 784,
    height: 404,
    fill: "url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "relative mx-auto",
    width: 490,
    src: "https://tailwindui.com/img/features/feature-example-2.png",
    alt: ""
  }))))));
}

/***/ }),

/***/ "./src/landing/components/Footers.tsx":
/*!********************************************!*\
  !*** ./src/landing/components/Footers.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footers)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var navigation = {
  main: [{
    name: 'About',
    href: '#'
  }, {
    name: 'Blog',
    href: '#'
  }, {
    name: 'Jobs',
    href: '#'
  }, {
    name: 'Press',
    href: '#'
  }, {
    name: 'Accessibility',
    href: '#'
  }, {
    name: 'Partners',
    href: '#'
  }],
  social: [{
    name: 'Facebook',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        clipRule: "evenodd"
      }));
    }
  }, {
    name: 'Instagram',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        clipRule: "evenodd"
      }));
    }
  }, {
    name: 'Twitter',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
      }));
    }
  }, {
    name: 'GitHub',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        clipRule: "evenodd"
      }));
    }
  }, {
    name: 'Dribbble',
    href: '#',
    icon: function icon(props) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", Object.assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
        clipRule: "evenodd"
      }));
    }
  }]
};
function Footers() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "-mx-5 -my-2 flex flex-wrap justify-center",
    "aria-label": "Footer"
  }, navigation.main.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: item.name,
      className: "px-5 py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: item.href,
      className: "text-base text-gray-500 hover:text-gray-900"
    }, item.name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-8 flex justify-center space-x-6"
  }, navigation.social.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      key: item.name,
      href: item.href,
      className: "text-gray-400 hover:text-gray-500"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "sr-only"
    }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(item.icon, {
      className: "h-6 w-6",
      "aria-hidden": "true"
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-8 text-center text-base text-gray-400"
  }, "\xA9 2020 Your Company, Inc. All rights reserved.")));
}

/***/ }),

/***/ "./src/landing/components/Hero.tsx":
/*!*****************************************!*\
  !*** ./src/landing/components/Hero.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/headlessui.esm.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/index.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");






var navigation = [{
  name: "Product",
  href: "#"
}, {
  name: "Features",
  href: "#"
}, {
  name: "Marketplace",
  href: "#"
}, {
  name: "Company",
  href: "#"
}];
var Hero = function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative overflow-hidden bg-gray-800'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'hidden sm:absolute sm:inset-0 sm:block',
    "aria-hidden": 'true'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'absolute bottom-0 right-0 mb-48 translate-x-1/2 transform text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:translate-x-0 xl:transform-none',
    width: 364,
    height: 384,
    viewBox: '0 0 364 384',
    fill: 'none'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("pattern", {
    id: 'eab71dd9-9d7a-47bd-8044-256344ee00d0',
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: 'userSpaceOnUse'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    fill: 'currentColor'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 364,
    height: 384,
    fill: 'url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative pt-6 pb-16 sm:pb-24'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: 'relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6',
    "aria-label": 'Global'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-1 items-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex w-full items-center justify-between md:w-auto'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Your Company"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-auto sm:h-10',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500',
    alt: ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: '-mr-2 flex items-center md:hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
    className: 'focus-ring-inset inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Open main menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Bars3Icon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'hidden space-x-10 md:ml-10 md:flex'
  }, navigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: 'font-medium text-white hover:text-gray-300'
    }, item.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'hidden md:flex'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/login',
    className: 'inline-flex items-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700'
  }, "Log in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: 'duration-150 ease-out',
    enterFrom: 'opacity-0 scale-95',
    enterTo: 'opacity-100 scale-100',
    leave: 'duration-100 ease-in',
    leaveFrom: 'opacity-100 scale-100',
    leaveTo: 'opacity-0 scale-95'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
    focus: true,
    className: 'absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center justify-between px-5 pt-4'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-8 w-auto',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    alt: ''
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: '-mr-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
    className: 'inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Close menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'space-y-1 px-2 pt-2 pb-3'
  }, navigation.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      key: item.name,
      href: item.href,
      className: 'block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900'
    }, item.name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/',
    className: 'block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100'
  }, "Log in"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", {
    className: 'mt-16 sm:mt-24'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mx-auto max-w-7xl'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'lg:grid lg:grid-cols-12 lg:gap-8'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 sm:px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex items-center rounded-full bg-gray-900 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'rounded-full bg-indigo-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white'
  }, "We're hiring"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'ml-4 text-sm'
  }, "Visit our careers page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.ChevronRightIcon, {
    className: 'ml-2 h-5 w-5 text-gray-500',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: 'mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl'
  }, "Data to enrich your online business"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'
  }, "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua ad ad non deserunt sunt."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-8 text-base font-semibold text-white sm:mt-10'
  }, "Used by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-wrap items-start justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center px-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-9 sm:h-10',
    src: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
    alt: 'Tuple'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center px-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-9 sm:h-10',
    src: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
    alt: 'Workcation'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center px-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'h-9 sm:h-10',
    src: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
    alt: 'StaticKit'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-16 sm:mt-24 lg:col-span-6 lg:mt-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-white sm:mx-auto sm:w-full sm:max-w-md sm:overflow-hidden sm:rounded-lg'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'px-4 py-8 sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-sm font-medium text-gray-700'
  }, "Sign in with"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1 grid grid-cols-3 gap-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Sign in with Facebook"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'h-5 w-5',
    "aria-hidden": 'true',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: 'evenodd',
    d: 'M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z',
    clipRule: 'evenodd'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Sign in with Twitter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'h-5 w-5',
    "aria-hidden": 'true',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: 'M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'sr-only'
  }, "Sign in with GitHub"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    className: 'h-5 w-5',
    "aria-hidden": 'true',
    fill: 'currentColor',
    viewBox: '0 0 20 20'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: 'evenodd',
    d: 'M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z',
    clipRule: 'evenodd'
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative mt-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'absolute inset-0 flex items-center',
    "aria-hidden": 'true'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-full border-t border-gray-300'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative flex justify-center text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'bg-white px-2 text-gray-500'
  }, "Or"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    action: '/',
    method: 'POST',
    className: 'space-y-6'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'name',
    className: 'sr-only'
  }, "Full name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: 'text',
    name: 'name',
    id: 'name',
    autoComplete: 'name',
    placeholder: 'Full name',
    required: true,
    className: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'mobile-or-email',
    className: 'sr-only'
  }, "Mobile number or email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: 'text',
    name: 'mobile-or-email',
    id: 'mobile-or-email',
    autoComplete: 'email',
    placeholder: 'Mobile number or email',
    required: true,
    className: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'password',
    className: 'sr-only'
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    autoComplete: 'current-password',
    required: true,
    className: 'block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'submit',
    className: 'flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/sign-up'
  }, "Create your account")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'border-t-2 border-gray-200 bg-gray-50 px-4 py-6 sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'text-xs leading-5 text-gray-500'
  }, "By signing up, you agree to our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'font-medium text-gray-900 hover:underline'
  }, "Terms"), ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'font-medium text-gray-900 hover:underline'
  }, "Data Policy"), " ", "and", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: '/',
    className: 'font-medium text-gray-900 hover:underline'
  }, "Cookies Policy"), ".")))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/landing/components/LogoClouds.tsx":
/*!***********************************************!*\
  !*** ./src/landing/components/LogoClouds.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogoClouds)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function LogoClouds() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:grid lg:grid-cols-2 lg:items-center lg:gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
  }, "Used by the world's most average companies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-3 max-w-3xl text-lg text-gray-500"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-8 sm:flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rounded-md shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
  }, "Create Account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-3 sm:mt-0 sm:ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/",
    className: "flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
  }, "Contact Us")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "max-h-12",
    src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    alt: "Workcation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "max-h-12",
    src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    alt: "Mirage"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "max-h-12",
    src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
    alt: "Tuple"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "max-h-12",
    src: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
    alt: "Laravel"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "max-h-12",
    src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
    alt: "StaticKit"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "max-h-12",
    src: "https://tailwindui.com/img/logos/statamic-logo-gray-400.svg",
    alt: "Statamic"
  }))))));
}

/***/ }),

/***/ "./src/landing/components/Testimonials.tsx":
/*!*************************************************!*\
  !*** ./src/landing/components/Testimonials.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Testimonials)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Testimonials() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-white pt-16 lg:py-24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-indigo-600 pb-16 lg:relative lg:z-10 lg:pb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative lg:-my-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "object-cover lg:h-full lg:w-full",
    src: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-12 lg:col-span-2 lg:m-0 lg:pl-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("blockquote", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "h-12 w-12 text-white opacity-25",
    fill: "currentColor",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-6 text-2xl font-medium text-white"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer", {
    className: "mt-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-base font-medium text-white"
  }, "Judith Black"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-base font-medium text-indigo-100"
  }, "CEO at PureInsights"))))))));
}

/***/ }),

/***/ "./src/landing/index.tsx":
/*!*******************************!*\
  !*** ./src/landing/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContactUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ContactUs */ "./src/landing/components/ContactUs.tsx");
/* harmony import */ var _components_Features__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Features */ "./src/landing/components/Features.tsx");
/* harmony import */ var _components_Footers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footers */ "./src/landing/components/Footers.tsx");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Hero */ "./src/landing/components/Hero.tsx");
/* harmony import */ var _components_LogoClouds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LogoClouds */ "./src/landing/components/LogoClouds.tsx");
/* harmony import */ var _components_Testimonials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Testimonials */ "./src/landing/components/Testimonials.tsx");







var Landing = function Landing() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Features__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Testimonials__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_LogoClouds__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ContactUs__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Footers__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);

/***/ }),

/***/ "./src/member/forgotpassword.tsx":
/*!***************************************!*\
  !*** ./src/member/forgotpassword.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Forgotpassword)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_ForgotPasswordContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/ForgotPasswordContent */ "./src/member/forms/ForgotPasswordContent.tsx");


function Forgotpassword() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_ForgotPasswordContent__WEBPACK_IMPORTED_MODULE_1__["default"], null);
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
  react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, formik.status)
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

/***/ "./src/member/forms/ForgotPasswordContent.tsx":
/*!****************************************************!*\
  !*** ./src/member/forms/ForgotPasswordContent.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgotPasswodContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_app/shared/ViewModels/UserMgtViewModel */ "./src/_app/shared/ViewModels/UserMgtViewModel.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function ForgotPasswodContent() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      email: ""
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    viewModel = _React$useState2[0],
    setViewModel = _React$useState2[1];
  var handleChange = function handleChange(event) {
    setViewModel(Object.assign(Object.assign({}, viewModel), _defineProperty({}, event.target.name, event.target.value)));
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var email = viewModel.email;
    var data = {
      email: email
    };
    console.log(data);
    var clientsViewModelsInstance = new _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_1__["default"]("forgotPassword");
    var signIn = clientsViewModelsInstance.forgotPassword(data);
    signIn.then(function (response) {
      if (response.status == 200) {
        location.href = "/";
      } else {
        location.href = ".";
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-8 sm:mx-auto sm:w-full sm:max-w-md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: 'space-y-6',
    action: '#',
    method: 'POST',
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'email',
    className: 'block text-sm font-medium text-gray-700'
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    required: true,
    onChange: handleChange,
    className: 'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/sign-up',
    className: 'font-medium text-indigo-600 hover:text-indigo-500'
  }, "Don't have an account? Sign Up Here!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'submit',
    className: 'flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  }, "Reset My Password")))));
}

/***/ }),

/***/ "./src/member/forms/SignInContent.tsx":
/*!********************************************!*\
  !*** ./src/member/forms/SignInContent.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignInContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_app/shared/ViewModels/UserMgtViewModel */ "./src/_app/shared/ViewModels/UserMgtViewModel.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function SignInContent() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      email: "",
      password: ""
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    viewModel = _React$useState2[0],
    setViewModel = _React$useState2[1];
  var handleChange = function handleChange(event) {
    setViewModel(Object.assign(Object.assign({}, viewModel), _defineProperty({}, event.target.name, event.target.value)));
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var email = viewModel.email,
      password = viewModel.password;
    var data = {
      email: email,
      password: password
    };
    console.log(data);
    var clientsViewModelsInstance = new _app_shared_ViewModels_UserMgtViewModel__WEBPACK_IMPORTED_MODULE_1__["default"]("signin");
    var signIn = clientsViewModelsInstance.signIn(data);
    signIn.then(function (response) {
      if (response.status == 200) {
        location.href = "/";
      } else {
        location.href = ".";
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-8 sm:mx-auto sm:w-full sm:max-w-md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: 'space-y-6',
    action: '#',
    method: 'POST',
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'email',
    className: 'block text-sm font-medium text-gray-700'
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'email',
    onChange: handleChange,
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    required: true,
    className: 'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'password',
    className: 'block text-sm font-medium text-gray-700'
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'password',
    onChange: handleChange,
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    required: true,
    className: 'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'remember-me',
    name: 'remember-me',
    type: 'checkbox',
    className: 'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'remember-me',
    className: 'ml-2 block text-sm text-gray-900'
  }, "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/forgetpassword',
    className: 'font-medium text-indigo-600 hover:text-indigo-500'
  }, "Forgot your password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: 'submit',
    className: 'flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
  }, "Sign in"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-6 flex items-center justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: '/sign-up',
    className: 'font-medium text-indigo-600 hover:text-indigo-500'
  }, "Not yet registered? Enroll")))));
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
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/index.js");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.PaperClipIcon, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_1__.PaperClipIcon, {
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

/***/ }),

/***/ "./src/member/login.tsx":
/*!******************************!*\
  !*** ./src/member/login.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignIn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_SignInContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/SignInContent */ "./src/member/forms/SignInContent.tsx");


function SignIn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_SignInContent__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./src/member/signup.tsx":
/*!*******************************!*\
  !*** ./src/member/signup.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignUp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_SignUpWizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/SignUpWizard */ "./src/member/forms/SignUpWizard.tsx");


function SignUp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_forms_SignUpWizard__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ }),

/***/ "./node_modules/formik/dist/formik.esm.js":
/*!************************************************!*\
  !*** ./node_modules/formik/dist/formik.esm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorMessage": () => (/* binding */ ErrorMessage),
/* harmony export */   "FastField": () => (/* binding */ FastField),
/* harmony export */   "Field": () => (/* binding */ Field),
/* harmony export */   "FieldArray": () => (/* binding */ FieldArray),
/* harmony export */   "Form": () => (/* binding */ Form),
/* harmony export */   "Formik": () => (/* binding */ Formik),
/* harmony export */   "FormikConsumer": () => (/* binding */ FormikConsumer),
/* harmony export */   "FormikContext": () => (/* binding */ FormikContext),
/* harmony export */   "FormikProvider": () => (/* binding */ FormikProvider),
/* harmony export */   "connect": () => (/* binding */ connect),
/* harmony export */   "getActiveElement": () => (/* binding */ getActiveElement),
/* harmony export */   "getIn": () => (/* binding */ getIn),
/* harmony export */   "insert": () => (/* binding */ insert),
/* harmony export */   "isEmptyArray": () => (/* binding */ isEmptyArray),
/* harmony export */   "isEmptyChildren": () => (/* binding */ isEmptyChildren),
/* harmony export */   "isFunction": () => (/* binding */ isFunction),
/* harmony export */   "isInputEvent": () => (/* binding */ isInputEvent),
/* harmony export */   "isInteger": () => (/* binding */ isInteger),
/* harmony export */   "isNaN": () => (/* binding */ isNaN$1),
/* harmony export */   "isObject": () => (/* binding */ isObject),
/* harmony export */   "isPromise": () => (/* binding */ isPromise),
/* harmony export */   "isString": () => (/* binding */ isString),
/* harmony export */   "move": () => (/* binding */ move),
/* harmony export */   "prepareDataForValidation": () => (/* binding */ prepareDataForValidation),
/* harmony export */   "replace": () => (/* binding */ replace),
/* harmony export */   "setIn": () => (/* binding */ setIn),
/* harmony export */   "setNestedObjectValues": () => (/* binding */ setNestedObjectValues),
/* harmony export */   "swap": () => (/* binding */ swap),
/* harmony export */   "useField": () => (/* binding */ useField),
/* harmony export */   "useFormik": () => (/* binding */ useFormik),
/* harmony export */   "useFormikContext": () => (/* binding */ useFormikContext),
/* harmony export */   "validateYupSchema": () => (/* binding */ validateYupSchema),
/* harmony export */   "withFormik": () => (/* binding */ withFormik),
/* harmony export */   "yupToFormErrors": () => (/* binding */ yupToFormErrors)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fast-compare */ "./node_modules/react-fast-compare/index.js");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ "./node_modules/formik/node_modules/deepmerge/dist/es.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/isPlainObject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/clone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/toPath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'hoist-non-react-statics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/cloneDeep'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());










function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/** @private is the value an empty array? */

var isEmptyArray = function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
};
/** @private is the given object a Function? */

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};
/** @private is the given object an Object? */

var isObject = function isObject(obj) {
  return obj !== null && typeof obj === 'object';
};
/** @private is the given object an integer? */

var isInteger = function isInteger(obj) {
  return String(Math.floor(Number(obj))) === obj;
};
/** @private is the given object a string? */

var isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};
/** @private is the given object a NaN? */
// eslint-disable-next-line no-self-compare

var isNaN$1 = function isNaN(obj) {
  return obj !== obj;
};
/** @private Does a React component have exactly 0 children? */

var isEmptyChildren = function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children) === 0;
};
/** @private is the given object/value a promise? */

var isPromise = function isPromise(value) {
  return isObject(value) && isFunction(value.then);
};
/** @private is the given object/value a type of synthetic event? */

var isInputEvent = function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
};
/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?Document} doc Defaults to current document.
 * @return {Element | null}
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/dom/getActiveElement.js
 */

function getActiveElement(doc) {
  doc = doc || (typeof document !== 'undefined' ? document : undefined);

  if (typeof doc === 'undefined') {
    return null;
  }

  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}
/**
 * Deeply get a value from an object via its path.
 */

function getIn(obj, key, def, p) {
  if (p === void 0) {
    p = 0;
  }

  var path = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/toPath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(key);

  while (obj && p < path.length) {
    obj = obj[path[p++]];
  }

  return obj === undefined ? def : obj;
}
/**
 * Deeply set a value from in object via it's path. If the value at `path`
 * has changed, return a shallow copy of obj with `value` set at `path`.
 * If `value` has not changed, return the original `obj`.
 *
 * Existing objects / arrays along `path` are also shallow copied. Sibling
 * objects along path retain the same internal js reference. Since new
 * objects / arrays are only created along `path`, we can test if anything
 * changed in a nested structure by comparing the object's reference in
 * the old and new object, similar to how russian doll cache invalidation
 * works.
 *
 * In earlier versions of this function, which used cloneDeep, there were
 * issues whereby settings a nested value would mutate the parent
 * instead of creating a new object. `clone` avoids that bug making a
 * shallow copy of the objects along the update path
 * so no object is mutated in place.
 *
 * Before changing this function, please read through the following
 * discussions.
 *
 * @see https://github.com/developit/linkstate
 * @see https://github.com/jaredpalmer/formik/pull/123
 */

function setIn(obj, path, value) {
  var res = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/clone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(obj); // this keeps inheritance when obj is a class

  var resVal = res;
  var i = 0;
  var pathArray = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/toPath'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(path);

  for (; i < pathArray.length - 1; i++) {
    var currentPath = pathArray[i];
    var currentObj = getIn(obj, pathArray.slice(0, i + 1));

    if (currentObj && (isObject(currentObj) || Array.isArray(currentObj))) {
      resVal = resVal[currentPath] = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/clone'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(currentObj);
    } else {
      var nextPath = pathArray[i + 1];
      resVal = resVal[currentPath] = isInteger(nextPath) && Number(nextPath) >= 0 ? [] : {};
    }
  } // Return original object if new value is the same as current


  if ((i === 0 ? obj : resVal)[pathArray[i]] === value) {
    return obj;
  }

  if (value === undefined) {
    delete resVal[pathArray[i]];
  } else {
    resVal[pathArray[i]] = value;
  } // If the path array has a single element, the loop did not run.
  // Deleting on `resVal` had no effect in this scenario, so we delete on the result instead.


  if (i === 0 && value === undefined) {
    delete res[pathArray[i]];
  }

  return res;
}
/**
 * Recursively a set the same value for all keys and arrays nested object, cloning
 * @param object
 * @param value
 * @param visited
 * @param response
 */

function setNestedObjectValues(object, value, visited, response) {
  if (visited === void 0) {
    visited = new WeakMap();
  }

  if (response === void 0) {
    response = {};
  }

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    var val = object[k];

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true); // In order to keep array values consistent for both dot path  and
        // bracket syntax, we need to check if this is an array so that
        // this will output  { friends: [true] } and not { friends: { "0": true } }

        response[k] = Array.isArray(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
      }
    } else {
      response[k] = value;
    }
  }

  return response;
}

var FormikContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
FormikContext.displayName = 'FormikContext';
var FormikProvider = FormikContext.Provider;
var FormikConsumer = FormikContext.Consumer;
function useFormikContext() {
  var formik = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(FormikContext);
  !!!formik ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.") : 0 : void 0;
  return formik;
}

function formikReducer(state, msg) {
  switch (msg.type) {
    case 'SET_VALUES':
      return _extends({}, state, {
        values: msg.payload
      });

    case 'SET_TOUCHED':
      return _extends({}, state, {
        touched: msg.payload
      });

    case 'SET_ERRORS':
      if (react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(state.errors, msg.payload)) {
        return state;
      }

      return _extends({}, state, {
        errors: msg.payload
      });

    case 'SET_STATUS':
      return _extends({}, state, {
        status: msg.payload
      });

    case 'SET_ISSUBMITTING':
      return _extends({}, state, {
        isSubmitting: msg.payload
      });

    case 'SET_ISVALIDATING':
      return _extends({}, state, {
        isValidating: msg.payload
      });

    case 'SET_FIELD_VALUE':
      return _extends({}, state, {
        values: setIn(state.values, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_TOUCHED':
      return _extends({}, state, {
        touched: setIn(state.touched, msg.payload.field, msg.payload.value)
      });

    case 'SET_FIELD_ERROR':
      return _extends({}, state, {
        errors: setIn(state.errors, msg.payload.field, msg.payload.value)
      });

    case 'RESET_FORM':
      return _extends({}, state, msg.payload);

    case 'SET_FORMIK_STATE':
      return msg.payload(state);

    case 'SUBMIT_ATTEMPT':
      return _extends({}, state, {
        touched: setNestedObjectValues(state.values, true),
        isSubmitting: true,
        submitCount: state.submitCount + 1
      });

    case 'SUBMIT_FAILURE':
      return _extends({}, state, {
        isSubmitting: false
      });

    case 'SUBMIT_SUCCESS':
      return _extends({}, state, {
        isSubmitting: false
      });

    default:
      return state;
  }
} // Initial empty states // objects


var emptyErrors = {};
var emptyTouched = {};
function useFormik(_ref) {
  var _ref$validateOnChange = _ref.validateOnChange,
      validateOnChange = _ref$validateOnChange === void 0 ? true : _ref$validateOnChange,
      _ref$validateOnBlur = _ref.validateOnBlur,
      validateOnBlur = _ref$validateOnBlur === void 0 ? true : _ref$validateOnBlur,
      _ref$validateOnMount = _ref.validateOnMount,
      validateOnMount = _ref$validateOnMount === void 0 ? false : _ref$validateOnMount,
      isInitialValid = _ref.isInitialValid,
      _ref$enableReinitiali = _ref.enableReinitialize,
      enableReinitialize = _ref$enableReinitiali === void 0 ? false : _ref$enableReinitiali,
      onSubmit = _ref.onSubmit,
      rest = _objectWithoutPropertiesLoose(_ref, ["validateOnChange", "validateOnBlur", "validateOnMount", "isInitialValid", "enableReinitialize", "onSubmit"]);

  var props = _extends({
    validateOnChange: validateOnChange,
    validateOnBlur: validateOnBlur,
    validateOnMount: validateOnMount,
    onSubmit: onSubmit
  }, rest);

  var initialValues = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialValues);
  var initialErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialErrors || emptyErrors);
  var initialTouched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialTouched || emptyTouched);
  var initialStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.initialStatus);
  var isMounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  var fieldRegistry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !(typeof isInitialValid === 'undefined') ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead.') : 0 : void 0; // eslint-disable-next-line
    }, []);
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);

  var _React$useReducer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formikReducer, {
    values: props.initialValues,
    errors: props.initialErrors || emptyErrors,
    touched: props.initialTouched || emptyTouched,
    status: props.initialStatus,
    isSubmitting: false,
    isValidating: false,
    submitCount: 0
  }),
      state = _React$useReducer[0],
      dispatch = _React$useReducer[1];

  var runValidateHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values, field) {
    return new Promise(function (resolve, reject) {
      var maybePromisedErrors = props.validate(values, field);

      if (maybePromisedErrors == null) {
        // use loose null check here on purpose
        resolve(emptyErrors);
      } else if (isPromise(maybePromisedErrors)) {
        maybePromisedErrors.then(function (errors) {
          resolve(errors || emptyErrors);
        }, function (actualException) {
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", actualException);
          }

          reject(actualException);
        });
      } else {
        resolve(maybePromisedErrors);
      }
    });
  }, [props.validate]);
  /**
   * Run validation against a Yup schema and optionally run a function if successful
   */

  var runValidationSchema = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values, field) {
    var validationSchema = props.validationSchema;
    var schema = isFunction(validationSchema) ? validationSchema(field) : validationSchema;
    var promise = field && schema.validateAt ? schema.validateAt(field, values) : validateYupSchema(values, schema);
    return new Promise(function (resolve, reject) {
      promise.then(function () {
        resolve(emptyErrors);
      }, function (err) {
        // Yup will throw a validation error if validation fails. We catch those and
        // resolve them into Formik errors. We can sniff if something is a Yup error
        // by checking error.name.
        // @see https://github.com/jquense/yup#validationerrorerrors-string--arraystring-value-any-path-string
        if (err.name === 'ValidationError') {
          resolve(yupToFormErrors(err));
        } else {
          // We throw any other errors
          if (true) {
            console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", err);
          }

          reject(err);
        }
      });
    });
  }, [props.validationSchema]);
  var runSingleFieldLevelValidation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (field, value) {
    return new Promise(function (resolve) {
      return resolve(fieldRegistry.current[field].validate(value));
    });
  }, []);
  var runFieldLevelValidations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values) {
    var fieldKeysWithValidation = Object.keys(fieldRegistry.current).filter(function (f) {
      return isFunction(fieldRegistry.current[f].validate);
    }); // Construct an array with all of the field validation functions

    var fieldValidations = fieldKeysWithValidation.length > 0 ? fieldKeysWithValidation.map(function (f) {
      return runSingleFieldLevelValidation(f, getIn(values, f));
    }) : [Promise.resolve('DO_NOT_DELETE_YOU_WILL_BE_FIRED')]; // use special case ;)

    return Promise.all(fieldValidations).then(function (fieldErrorsList) {
      return fieldErrorsList.reduce(function (prev, curr, index) {
        if (curr === 'DO_NOT_DELETE_YOU_WILL_BE_FIRED') {
          return prev;
        }

        if (curr) {
          prev = setIn(prev, fieldKeysWithValidation[index], curr);
        }

        return prev;
      }, {});
    });
  }, [runSingleFieldLevelValidation]); // Run all validations and return the result

  var runAllValidations = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (values) {
    return Promise.all([runFieldLevelValidations(values), props.validationSchema ? runValidationSchema(values) : {}, props.validate ? runValidateHandler(values) : {}]).then(function (_ref2) {
      var fieldErrors = _ref2[0],
          schemaErrors = _ref2[1],
          validateErrors = _ref2[2];
      var combinedErrors = deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"].all([fieldErrors, schemaErrors, validateErrors], {
        arrayMerge: arrayMerge
      });
      return combinedErrors;
    });
  }, [props.validate, props.validationSchema, runFieldLevelValidations, runValidateHandler, runValidationSchema]); // Run all validations methods and update state accordingly

  var validateFormWithHighPriority = useEventCallback(function (values) {
    if (values === void 0) {
      values = state.values;
    }

    dispatch({
      type: 'SET_ISVALIDATING',
      payload: true
    });
    return runAllValidations(values).then(function (combinedErrors) {
      if (!!isMounted.current) {
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
        dispatch({
          type: 'SET_ERRORS',
          payload: combinedErrors
        });
      }

      return combinedErrors;
    });
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (validateOnMount && isMounted.current === true && react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      validateFormWithHighPriority(initialValues.current);
    }
  }, [validateOnMount, validateFormWithHighPriority]);
  var resetForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nextState) {
    var values = nextState && nextState.values ? nextState.values : initialValues.current;
    var errors = nextState && nextState.errors ? nextState.errors : initialErrors.current ? initialErrors.current : props.initialErrors || {};
    var touched = nextState && nextState.touched ? nextState.touched : initialTouched.current ? initialTouched.current : props.initialTouched || {};
    var status = nextState && nextState.status ? nextState.status : initialStatus.current ? initialStatus.current : props.initialStatus;
    initialValues.current = values;
    initialErrors.current = errors;
    initialTouched.current = touched;
    initialStatus.current = status;

    var dispatchFn = function dispatchFn() {
      dispatch({
        type: 'RESET_FORM',
        payload: {
          isSubmitting: !!nextState && !!nextState.isSubmitting,
          errors: errors,
          touched: touched,
          status: status,
          values: values,
          isValidating: !!nextState && !!nextState.isValidating,
          submitCount: !!nextState && !!nextState.submitCount && typeof nextState.submitCount === 'number' ? nextState.submitCount : 0
        }
      });
    };

    if (props.onReset) {
      var maybePromisedOnReset = props.onReset(state.values, imperativeMethods);

      if (isPromise(maybePromisedOnReset)) {
        maybePromisedOnReset.then(dispatchFn);
      } else {
        dispatchFn();
      }
    } else {
      dispatchFn();
    }
  }, [props.initialErrors, props.initialStatus, props.initialTouched]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, props.initialValues)) {
      if (enableReinitialize) {
        initialValues.current = props.initialValues;
        resetForm();
      }

      if (validateOnMount) {
        validateFormWithHighPriority(initialValues.current);
      }
    }
  }, [enableReinitialize, props.initialValues, resetForm, validateOnMount, validateFormWithHighPriority]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialErrors.current, props.initialErrors)) {
      initialErrors.current = props.initialErrors || emptyErrors;
      dispatch({
        type: 'SET_ERRORS',
        payload: props.initialErrors || emptyErrors
      });
    }
  }, [enableReinitialize, props.initialErrors]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialTouched.current, props.initialTouched)) {
      initialTouched.current = props.initialTouched || emptyTouched;
      dispatch({
        type: 'SET_TOUCHED',
        payload: props.initialTouched || emptyTouched
      });
    }
  }, [enableReinitialize, props.initialTouched]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (enableReinitialize && isMounted.current === true && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialStatus.current, props.initialStatus)) {
      initialStatus.current = props.initialStatus;
      dispatch({
        type: 'SET_STATUS',
        payload: props.initialStatus
      });
    }
  }, [enableReinitialize, props.initialStatus, props.initialTouched]);
  var validateField = useEventCallback(function (name) {
    // This will efficiently validate a single field by avoiding state
    // changes if the validation function is synchronous. It's different from
    // what is called when using validateForm.
    if (fieldRegistry.current[name] && isFunction(fieldRegistry.current[name].validate)) {
      var value = getIn(state.values, name);
      var maybePromise = fieldRegistry.current[name].validate(value);

      if (isPromise(maybePromise)) {
        // Only flip isValidating if the function is async.
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: true
        });
        return maybePromise.then(function (x) {
          return x;
        }).then(function (error) {
          dispatch({
            type: 'SET_FIELD_ERROR',
            payload: {
              field: name,
              value: error
            }
          });
          dispatch({
            type: 'SET_ISVALIDATING',
            payload: false
          });
        });
      } else {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: maybePromise
          }
        });
        return Promise.resolve(maybePromise);
      }
    } else if (props.validationSchema) {
      dispatch({
        type: 'SET_ISVALIDATING',
        payload: true
      });
      return runValidationSchema(state.values, name).then(function (x) {
        return x;
      }).then(function (error) {
        dispatch({
          type: 'SET_FIELD_ERROR',
          payload: {
            field: name,
            value: error[name]
          }
        });
        dispatch({
          type: 'SET_ISVALIDATING',
          payload: false
        });
      });
    }

    return Promise.resolve();
  });
  var registerField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name, _ref3) {
    var validate = _ref3.validate;
    fieldRegistry.current[name] = {
      validate: validate
    };
  }, []);
  var unregisterField = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    delete fieldRegistry.current[name];
  }, []);
  var setTouched = useEventCallback(function (touched, shouldValidate) {
    dispatch({
      type: 'SET_TOUCHED',
      payload: touched
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var setErrors = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (errors) {
    dispatch({
      type: 'SET_ERRORS',
      payload: errors
    });
  }, []);
  var setValues = useEventCallback(function (values, shouldValidate) {
    var resolvedValues = isFunction(values) ? values(state.values) : values;
    dispatch({
      type: 'SET_VALUES',
      payload: resolvedValues
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(resolvedValues) : Promise.resolve();
  });
  var setFieldError = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (field, value) {
    dispatch({
      type: 'SET_FIELD_ERROR',
      payload: {
        field: field,
        value: value
      }
    });
  }, []);
  var setFieldValue = useEventCallback(function (field, value, shouldValidate) {
    dispatch({
      type: 'SET_FIELD_VALUE',
      payload: {
        field: field,
        value: value
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnChange : shouldValidate;
    return willValidate ? validateFormWithHighPriority(setIn(state.values, field, value)) : Promise.resolve();
  });
  var executeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (eventOrTextValue, maybePath) {
    // By default, assume that the first argument is a string. This allows us to use
    // handleChange with React Native and React Native Web's onChangeText prop which
    // provides just the value of the input.
    var field = maybePath;
    var val = eventOrTextValue;
    var parsed; // If the first argument is not a string though, it has to be a synthetic React Event (or a fake one),
    // so we handle like we would a normal HTML change event.

    if (!isString(eventOrTextValue)) {
      // If we can, persist the event
      // @see https://reactjs.org/docs/events.html#event-pooling
      if (eventOrTextValue.persist) {
        eventOrTextValue.persist();
      }

      var target = eventOrTextValue.target ? eventOrTextValue.target : eventOrTextValue.currentTarget;
      var type = target.type,
          name = target.name,
          id = target.id,
          value = target.value,
          checked = target.checked,
          outerHTML = target.outerHTML,
          options = target.options,
          multiple = target.multiple;
      field = maybePath ? maybePath : name ? name : id;

      if (!field && "development" !== "production") {
        warnAboutMissingIdentifier({
          htmlContent: outerHTML,
          documentationAnchorLink: 'handlechange-e-reactchangeeventany--void',
          handlerName: 'handleChange'
        });
      }

      val = /number|range/.test(type) ? (parsed = parseFloat(value), isNaN(parsed) ? '' : parsed) : /checkbox/.test(type) // checkboxes
      ? getValueForCheckbox(getIn(state.values, field), checked, value) : options && multiple // <select multiple>
      ? getSelectedValues(options) : value;
    }

    if (field) {
      // Set form fields by name
      setFieldValue(field, val);
    }
  }, [setFieldValue, state.values]);
  var handleChange = useEventCallback(function (eventOrPath) {
    if (isString(eventOrPath)) {
      return function (event) {
        return executeChange(event, eventOrPath);
      };
    } else {
      executeChange(eventOrPath);
    }
  });
  var setFieldTouched = useEventCallback(function (field, touched, shouldValidate) {
    if (touched === void 0) {
      touched = true;
    }

    dispatch({
      type: 'SET_FIELD_TOUCHED',
      payload: {
        field: field,
        value: touched
      }
    });
    var willValidate = shouldValidate === undefined ? validateOnBlur : shouldValidate;
    return willValidate ? validateFormWithHighPriority(state.values) : Promise.resolve();
  });
  var executeBlur = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e, path) {
    if (e.persist) {
      e.persist();
    }

    var _e$target = e.target,
        name = _e$target.name,
        id = _e$target.id,
        outerHTML = _e$target.outerHTML;
    var field = path ? path : name ? name : id;

    if (!field && "development" !== "production") {
      warnAboutMissingIdentifier({
        htmlContent: outerHTML,
        documentationAnchorLink: 'handleblur-e-any--void',
        handlerName: 'handleBlur'
      });
    }

    setFieldTouched(field, true);
  }, [setFieldTouched]);
  var handleBlur = useEventCallback(function (eventOrString) {
    if (isString(eventOrString)) {
      return function (event) {
        return executeBlur(event, eventOrString);
      };
    } else {
      executeBlur(eventOrString);
    }
  });
  var setFormikState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (stateOrCb) {
    if (isFunction(stateOrCb)) {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: stateOrCb
      });
    } else {
      dispatch({
        type: 'SET_FORMIK_STATE',
        payload: function payload() {
          return stateOrCb;
        }
      });
    }
  }, []);
  var setStatus = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (status) {
    dispatch({
      type: 'SET_STATUS',
      payload: status
    });
  }, []);
  var setSubmitting = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (isSubmitting) {
    dispatch({
      type: 'SET_ISSUBMITTING',
      payload: isSubmitting
    });
  }, []);
  var submitForm = useEventCallback(function () {
    dispatch({
      type: 'SUBMIT_ATTEMPT'
    });
    return validateFormWithHighPriority().then(function (combinedErrors) {
      // In case an error was thrown and passed to the resolved Promise,
      // `combinedErrors` can be an instance of an Error. We need to check
      // that and abort the submit.
      // If we don't do that, calling `Object.keys(new Error())` yields an
      // empty array, which causes the validation to pass and the form
      // to be submitted.
      var isInstanceOfError = combinedErrors instanceof Error;
      var isActuallyValid = !isInstanceOfError && Object.keys(combinedErrors).length === 0;

      if (isActuallyValid) {
        // Proceed with submit...
        //
        // To respect sync submit fns, we can't simply wrap executeSubmit in a promise and
        // _always_ dispatch SUBMIT_SUCCESS because isSubmitting would then always be false.
        // This would be fine in simple cases, but make it impossible to disable submit
        // buttons where people use callbacks or promises as side effects (which is basically
        // all of v1 Formik code). Instead, recall that we are inside of a promise chain already,
        //  so we can try/catch executeSubmit(), if it returns undefined, then just bail.
        // If there are errors, throw em. Otherwise, wrap executeSubmit in a promise and handle
        // cleanup of isSubmitting on behalf of the consumer.
        var promiseOrUndefined;

        try {
          promiseOrUndefined = executeSubmit(); // Bail if it's sync, consumer is responsible for cleaning up
          // via setSubmitting(false)

          if (promiseOrUndefined === undefined) {
            return;
          }
        } catch (error) {
          throw error;
        }

        return Promise.resolve(promiseOrUndefined).then(function (result) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_SUCCESS'
            });
          }

          return result;
        })["catch"](function (_errors) {
          if (!!isMounted.current) {
            dispatch({
              type: 'SUBMIT_FAILURE'
            }); // This is a legit error rejected by the onSubmit fn
            // so we don't want to break the promise chain

            throw _errors;
          }
        });
      } else if (!!isMounted.current) {
        // ^^^ Make sure Formik is still mounted before updating state
        dispatch({
          type: 'SUBMIT_FAILURE'
        }); // throw combinedErrors;

        if (isInstanceOfError) {
          throw combinedErrors;
        }
      }

      return;
    });
  });
  var handleSubmit = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    } // Warn if form submission is triggered by a <button> without a
    // specified `type` attribute during development. This mitigates
    // a common gotcha in forms with both reset and submit buttons,
    // where the dev forgets to add type="button" to the reset button.


    if ( true && typeof document !== 'undefined') {
      // Safely get the active element (works with IE)
      var activeElement = getActiveElement();

      if (activeElement !== null && activeElement instanceof HTMLButtonElement) {
        !(activeElement.attributes && activeElement.attributes.getNamedItem('type')) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type="submit"`. If this is not a submit button, please add `type="button"`.') : 0 : void 0;
      }
    }

    submitForm()["catch"](function (reason) {
      console.warn("Warning: An unhandled error was caught from submitForm()", reason);
    });
  });
  var imperativeMethods = {
    resetForm: resetForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    setErrors: setErrors,
    setFieldError: setFieldError,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    setFormikState: setFormikState,
    submitForm: submitForm
  };
  var executeSubmit = useEventCallback(function () {
    return onSubmit(state.values, imperativeMethods);
  });
  var handleReset = useEventCallback(function (e) {
    if (e && e.preventDefault && isFunction(e.preventDefault)) {
      e.preventDefault();
    }

    if (e && e.stopPropagation && isFunction(e.stopPropagation)) {
      e.stopPropagation();
    }

    resetForm();
  });
  var getFieldMeta = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    return {
      value: getIn(state.values, name),
      error: getIn(state.errors, name),
      touched: !!getIn(state.touched, name),
      initialValue: getIn(initialValues.current, name),
      initialTouched: !!getIn(initialTouched.current, name),
      initialError: getIn(initialErrors.current, name)
    };
  }, [state.errors, state.touched, state.values]);
  var getFieldHelpers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (name) {
    return {
      setValue: function setValue(value, shouldValidate) {
        return setFieldValue(name, value, shouldValidate);
      },
      setTouched: function setTouched(value, shouldValidate) {
        return setFieldTouched(name, value, shouldValidate);
      },
      setError: function setError(value) {
        return setFieldError(name, value);
      }
    };
  }, [setFieldValue, setFieldTouched, setFieldError]);
  var getFieldProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (nameOrOptions) {
    var isAnObject = isObject(nameOrOptions);
    var name = isAnObject ? nameOrOptions.name : nameOrOptions;
    var valueState = getIn(state.values, name);
    var field = {
      name: name,
      value: valueState,
      onChange: handleChange,
      onBlur: handleBlur
    };

    if (isAnObject) {
      var type = nameOrOptions.type,
          valueProp = nameOrOptions.value,
          is = nameOrOptions.as,
          multiple = nameOrOptions.multiple;

      if (type === 'checkbox') {
        if (valueProp === undefined) {
          field.checked = !!valueState;
        } else {
          field.checked = !!(Array.isArray(valueState) && ~valueState.indexOf(valueProp));
          field.value = valueProp;
        }
      } else if (type === 'radio') {
        field.checked = valueState === valueProp;
        field.value = valueProp;
      } else if (is === 'select' && multiple) {
        field.value = field.value || [];
        field.multiple = true;
      }
    }

    return field;
  }, [handleBlur, handleChange, state.values]);
  var dirty = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(initialValues.current, state.values);
  }, [initialValues.current, state.values]);
  var isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return typeof isInitialValid !== 'undefined' ? dirty ? state.errors && Object.keys(state.errors).length === 0 : isInitialValid !== false && isFunction(isInitialValid) ? isInitialValid(props) : isInitialValid : state.errors && Object.keys(state.errors).length === 0;
  }, [isInitialValid, dirty, state.errors, props]);

  var ctx = _extends({}, state, {
    initialValues: initialValues.current,
    initialErrors: initialErrors.current,
    initialTouched: initialTouched.current,
    initialStatus: initialStatus.current,
    handleBlur: handleBlur,
    handleChange: handleChange,
    handleReset: handleReset,
    handleSubmit: handleSubmit,
    resetForm: resetForm,
    setErrors: setErrors,
    setFormikState: setFormikState,
    setFieldTouched: setFieldTouched,
    setFieldValue: setFieldValue,
    setFieldError: setFieldError,
    setStatus: setStatus,
    setSubmitting: setSubmitting,
    setTouched: setTouched,
    setValues: setValues,
    submitForm: submitForm,
    validateForm: validateFormWithHighPriority,
    validateField: validateField,
    isValid: isValid,
    dirty: dirty,
    unregisterField: unregisterField,
    registerField: registerField,
    getFieldProps: getFieldProps,
    getFieldMeta: getFieldMeta,
    getFieldHelpers: getFieldHelpers,
    validateOnBlur: validateOnBlur,
    validateOnChange: validateOnChange,
    validateOnMount: validateOnMount
  });

  return ctx;
}
function Formik(props) {
  var formikbag = useFormik(props);
  var component = props.component,
      children = props.children,
      render = props.render,
      innerRef = props.innerRef; // This allows folks to pass a ref to <Formik />

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(innerRef, function () {
    return formikbag;
  });

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !!props.render ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>") : 0 : void 0; // eslint-disable-next-line
    }, []);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormikProvider, {
    value: formikbag
  }, component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, formikbag) : render ? render(formikbag) : children // children come last, always called
  ? isFunction(children) ? children(formikbag) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children) : null : null);
}

function warnAboutMissingIdentifier(_ref4) {
  var htmlContent = _ref4.htmlContent,
      documentationAnchorLink = _ref4.documentationAnchorLink,
      handlerName = _ref4.handlerName;
  console.warn("Warning: Formik called `" + handlerName + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + htmlContent + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + documentationAnchorLink + "\n  ");
}
/**
 * Transform Yup ValidationError to a more usable object
 */


function yupToFormErrors(yupError) {
  var errors = {};

  if (yupError.inner) {
    if (yupError.inner.length === 0) {
      return setIn(errors, yupError.path, yupError.message);
    }

    for (var _iterator = yupError.inner, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref5;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref5 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref5 = _i.value;
      }

      var err = _ref5;

      if (!getIn(errors, err.path)) {
        errors = setIn(errors, err.path, err.message);
      }
    }
  }

  return errors;
}
/**
 * Validate a yup schema.
 */

function validateYupSchema(values, schema, sync, context) {
  if (sync === void 0) {
    sync = false;
  }

  if (context === void 0) {
    context = {};
  }

  var validateData = prepareDataForValidation(values);
  return schema[sync ? 'validateSync' : 'validate'](validateData, {
    abortEarly: false,
    context: context
  });
}
/**
 * Recursively prepare values.
 */

function prepareDataForValidation(values) {
  var data = Array.isArray(values) ? [] : {};

  for (var k in values) {
    if (Object.prototype.hasOwnProperty.call(values, k)) {
      var key = String(k);

      if (Array.isArray(values[key]) === true) {
        data[key] = values[key].map(function (value) {
          if (Array.isArray(value) === true || Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/isPlainObject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)) {
            return prepareDataForValidation(value);
          } else {
            return value !== '' ? value : undefined;
          }
        });
      } else if (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/isPlainObject'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(values[key])) {
        data[key] = prepareDataForValidation(values[key]);
      } else {
        data[key] = values[key] !== '' ? values[key] : undefined;
      }
    }
  }

  return data;
}
/**
 * deepmerge array merging algorithm
 * https://github.com/KyleAMathews/deepmerge#combine-array
 */

function arrayMerge(target, source, options) {
  var destination = target.slice();
  source.forEach(function merge(e, i) {
    if (typeof destination[i] === 'undefined') {
      var cloneRequested = options.clone !== false;
      var shouldClone = cloneRequested && options.isMergeableObject(e);
      destination[i] = shouldClone ? (0,deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(Array.isArray(e) ? [] : {}, e, options) : e;
    } else if (options.isMergeableObject(e)) {
      destination[i] = (0,deepmerge__WEBPACK_IMPORTED_MODULE_2__["default"])(target[i], e, options);
    } else if (target.indexOf(e) === -1) {
      destination.push(e);
    }
  });
  return destination;
}
/** Return multi select values based on an array of options */


function getSelectedValues(options) {
  return Array.from(options).filter(function (el) {
    return el.selected;
  }).map(function (el) {
    return el.value;
  });
}
/** Return the next value for a checkbox */


function getValueForCheckbox(currentValue, checked, valueProp) {
  // If the current value was a boolean, return a boolean
  if (typeof currentValue === 'boolean') {
    return Boolean(checked);
  } // If the currentValue was not a boolean we want to return an array


  var currentArrayOfValues = [];
  var isValueInArray = false;
  var index = -1;

  if (!Array.isArray(currentValue)) {
    // eslint-disable-next-line eqeqeq
    if (!valueProp || valueProp == 'true' || valueProp == 'false') {
      return Boolean(checked);
    }
  } else {
    // If the current value is already an array, use it
    currentArrayOfValues = currentValue;
    index = currentValue.indexOf(valueProp);
    isValueInArray = index >= 0;
  } // If the checkbox was checked and the value is not already present in the aray we want to add the new value to the array of values


  if (checked && valueProp && !isValueInArray) {
    return currentArrayOfValues.concat(valueProp);
  } // If the checkbox was unchecked and the value is not in the array, simply return the already existing array of values


  if (!isValueInArray) {
    return currentArrayOfValues;
  } // If the checkbox was unchecked and the value is in the array, remove the value and return the array


  return currentArrayOfValues.slice(0, index).concat(currentArrayOfValues.slice(index + 1));
} // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
// @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85


var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useEventCallback(fn) {
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(fn); // we copy a ref to the callback scoped to the current state/props on each render

  useIsomorphicLayoutEffect(function () {
    ref.current = fn;
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current.apply(void 0, args);
  }, []);
}

function useField(propsOrFieldName) {
  var formik = useFormikContext();
  var getFieldProps = formik.getFieldProps,
      getFieldMeta = formik.getFieldMeta,
      getFieldHelpers = formik.getFieldHelpers,
      registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  var isAnObject = isObject(propsOrFieldName); // Normalize propsOrFieldName to FieldHookConfig<Val>

  var props = isAnObject ? propsOrFieldName : {
    name: propsOrFieldName
  };
  var fieldName = props.name,
      validateFn = props.validate;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (fieldName) {
      registerField(fieldName, {
        validate: validateFn
      });
    }

    return function () {
      if (fieldName) {
        unregisterField(fieldName);
      }
    };
  }, [registerField, unregisterField, fieldName, validateFn]);

  if (true) {
    !formik ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'useField() / <Field /> must be used underneath a <Formik> component or withFormik() higher order component') : 0 : void 0;
  }

  !fieldName ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'Invalid field name. Either pass `useField` a string or an object containing a `name` key.') : 0 : void 0;
  return [getFieldProps(props), getFieldMeta(fieldName), getFieldHelpers(fieldName)];
}
function Field(_ref) {
  var validate = _ref.validate,
      name = _ref.name,
      render = _ref.render,
      children = _ref.children,
      is = _ref.as,
      component = _ref.component,
      props = _objectWithoutPropertiesLoose(_ref, ["validate", "name", "render", "children", "as", "component"]);

  var _useFormikContext = useFormikContext(),
      formik = _objectWithoutPropertiesLoose(_useFormikContext, ["validate", "validationSchema"]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
      !!render ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + name + "\" render={({field, form}) => ...} /> with <Field name=\"" + name + "\">{({field, form, meta}) => ...}</Field>") : 0 : void 0;
      !!(is && children && isFunction(children)) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.') : 0 : void 0;
      !!(component && children && isFunction(children)) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.') : 0 : void 0;
      !!(render && children && !isEmptyChildren(children)) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored') : 0 : void 0; // eslint-disable-next-line
    }, []);
  } // Register field and field-level validation with parent <Formik>


  var registerField = formik.registerField,
      unregisterField = formik.unregisterField;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    registerField(name, {
      validate: validate
    });
    return function () {
      unregisterField(name);
    };
  }, [registerField, unregisterField, name, validate]);
  var field = formik.getFieldProps(_extends({
    name: name
  }, props));
  var meta = formik.getFieldMeta(name);
  var legacyBag = {
    field: field,
    form: formik
  };

  if (render) {
    return render(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (isFunction(children)) {
    return children(_extends({}, legacyBag, {
      meta: meta
    }));
  }

  if (component) {
    // This behavior is backwards compat with earlier Formik 0.9 to 1.x
    if (typeof component === 'string') {
      var innerRef = props.innerRef,
          rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
        ref: innerRef
      }, field, rest), children);
    } // We don't pass `meta` for backwards compat


    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
      field: field,
      form: formik
    }, props), children);
  } // default to input here so we can check for both `as` and `children` above


  var asElement = is || 'input';

  if (typeof asElement === 'string') {
    var _innerRef = props.innerRef,
        _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({
      ref: _innerRef
    }, field, _rest), children);
  }

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({}, field, props), children);
}

var Form = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
  // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
  var action = props.action,
      rest = _objectWithoutPropertiesLoose(props, ["action"]);

  var _action = action != null ? action : '#';

  var _useFormikContext = useFormikContext(),
      handleReset = _useFormikContext.handleReset,
      handleSubmit = _useFormikContext.handleSubmit;

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", Object.assign({
    onSubmit: handleSubmit,
    ref: ref,
    onReset: handleReset,
    action: _action
  }, rest));
});
Form.displayName = 'Form';

/**
 * A public higher-order component to access the imperative API
 */

function withFormik(_ref) {
  var _ref$mapPropsToValues = _ref.mapPropsToValues,
      mapPropsToValues = _ref$mapPropsToValues === void 0 ? function (vanillaProps) {
    var val = {};

    for (var k in vanillaProps) {
      if (vanillaProps.hasOwnProperty(k) && typeof vanillaProps[k] !== 'function') {
        // @todo TypeScript fix
        val[k] = vanillaProps[k];
      }
    }

    return val;
  } : _ref$mapPropsToValues,
      config = _objectWithoutPropertiesLoose(_ref, ["mapPropsToValues"]);

  return function createFormik(Component$1) {
    var componentDisplayName = Component$1.displayName || Component$1.name || Component$1.constructor && Component$1.constructor.name || 'Component';
    /**
     * We need to use closures here for to provide the wrapped component's props to
     * the respective withFormik config methods.
     */

    var C = /*#__PURE__*/function (_React$Component) {
      _inheritsLoose(C, _React$Component);

      function C() {
        var _this;

        _this = _React$Component.apply(this, arguments) || this;

        _this.validate = function (values) {
          return config.validate(values, _this.props);
        };

        _this.validationSchema = function () {
          return isFunction(config.validationSchema) ? config.validationSchema(_this.props) : config.validationSchema;
        };

        _this.handleSubmit = function (values, actions) {
          return config.handleSubmit(values, _extends({}, actions, {
            props: _this.props
          }));
        };
        /**
         * Just avoiding a render callback for perf here
         */


        _this.renderFormComponent = function (formikProps) {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component$1, Object.assign({}, _this.props, formikProps));
        };

        return _this;
      }

      var _proto = C.prototype;

      _proto.render = function render() {
        var _this$props = this.props,
            props = _objectWithoutPropertiesLoose(_this$props, ["children"]);

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Formik, Object.assign({}, props, config, {
          validate: config.validate && this.validate,
          validationSchema: config.validationSchema && this.validationSchema,
          initialValues: mapPropsToValues(this.props),
          initialStatus: config.mapPropsToStatus && config.mapPropsToStatus(this.props),
          initialErrors: config.mapPropsToErrors && config.mapPropsToErrors(this.props),
          initialTouched: config.mapPropsToTouched && config.mapPropsToTouched(this.props),
          onSubmit: this.handleSubmit,
          children: this.renderFormComponent
        }));
      };

      return C;
    }(react__WEBPACK_IMPORTED_MODULE_0__.Component);

    C.displayName = "WithFormik(" + componentDisplayName + ")";
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'hoist-non-react-statics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(C, Component$1 // cast type to ComponentClass (even if SFC)
    );
  };
}

/**
 * Connect any component to Formik context, and inject as a prop called `formik`;
 * @param Comp React Component
 */

function connect(Comp) {
  var C = function C(props) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(FormikConsumer, null, function (formik) {
      !!!formik ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, "Formik context is undefined, please verify you are rendering <Form>, <Field>, <FastField>, <FieldArray>, or your custom context-using component as a child of a <Formik> component. Component name: " + Comp.name) : 0 : void 0;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Comp, Object.assign({}, props, {
        formik: formik
      }));
    });
  };

  var componentDisplayName = Comp.displayName || Comp.name || Comp.constructor && Comp.constructor.name || 'Component'; // Assign Comp to C.WrappedComponent so we can access the inner component in tests
  // For example, <Field.WrappedComponent /> gets us <FieldInner/>

  C.WrappedComponent = Comp;
  C.displayName = "FormikConnect(" + componentDisplayName + ")";
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'hoist-non-react-statics'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(C, Comp // cast type to ComponentClass (even if SFC)
  );
}

/**
 * Some array helpers!
 */

var move = function move(array, from, to) {
  var copy = copyArrayLike(array);
  var value = copy[from];
  copy.splice(from, 1);
  copy.splice(to, 0, value);
  return copy;
};
var swap = function swap(arrayLike, indexA, indexB) {
  var copy = copyArrayLike(arrayLike);
  var a = copy[indexA];
  copy[indexA] = copy[indexB];
  copy[indexB] = a;
  return copy;
};
var insert = function insert(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy.splice(index, 0, value);
  return copy;
};
var replace = function replace(arrayLike, index, value) {
  var copy = copyArrayLike(arrayLike);
  copy[index] = value;
  return copy;
};

var copyArrayLike = function copyArrayLike(arrayLike) {
  if (!arrayLike) {
    return [];
  } else if (Array.isArray(arrayLike)) {
    return [].concat(arrayLike);
  } else {
    var maxIndex = Object.keys(arrayLike).map(function (key) {
      return parseInt(key);
    }).reduce(function (max, el) {
      return el > max ? el : max;
    }, 0);
    return Array.from(_extends({}, arrayLike, {
      length: maxIndex + 1
    }));
  }
};

var FieldArrayInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FieldArrayInner, _React$Component);

  function FieldArrayInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.updateArrayField = function (fn, alterTouched, alterErrors) {
      var _this$props = _this.props,
          name = _this$props.name,
          setFormikState = _this$props.formik.setFormikState;
      setFormikState(function (prevState) {
        var updateErrors = typeof alterErrors === 'function' ? alterErrors : fn;
        var updateTouched = typeof alterTouched === 'function' ? alterTouched : fn; // values fn should be executed before updateErrors and updateTouched,
        // otherwise it causes an error with unshift.

        var values = setIn(prevState.values, name, fn(getIn(prevState.values, name)));
        var fieldError = alterErrors ? updateErrors(getIn(prevState.errors, name)) : undefined;
        var fieldTouched = alterTouched ? updateTouched(getIn(prevState.touched, name)) : undefined;

        if (isEmptyArray(fieldError)) {
          fieldError = undefined;
        }

        if (isEmptyArray(fieldTouched)) {
          fieldTouched = undefined;
        }

        return _extends({}, prevState, {
          values: values,
          errors: alterErrors ? setIn(prevState.errors, name, fieldError) : prevState.errors,
          touched: alterTouched ? setIn(prevState.touched, name, fieldTouched) : prevState.touched
        });
      });
    };

    _this.push = function (value) {
      return _this.updateArrayField(function (arrayLike) {
        return [].concat(copyArrayLike(arrayLike), [Object(function webpackMissingModule() { var e = new Error("Cannot find module 'lodash-es/cloneDeep'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(value)]);
      }, false, false);
    };

    _this.handlePush = function (value) {
      return function () {
        return _this.push(value);
      };
    };

    _this.swap = function (indexA, indexB) {
      return _this.updateArrayField(function (array) {
        return swap(array, indexA, indexB);
      }, true, true);
    };

    _this.handleSwap = function (indexA, indexB) {
      return function () {
        return _this.swap(indexA, indexB);
      };
    };

    _this.move = function (from, to) {
      return _this.updateArrayField(function (array) {
        return move(array, from, to);
      }, true, true);
    };

    _this.handleMove = function (from, to) {
      return function () {
        return _this.move(from, to);
      };
    };

    _this.insert = function (index, value) {
      return _this.updateArrayField(function (array) {
        return insert(array, index, value);
      }, function (array) {
        return insert(array, index, null);
      }, function (array) {
        return insert(array, index, null);
      });
    };

    _this.handleInsert = function (index, value) {
      return function () {
        return _this.insert(index, value);
      };
    };

    _this.replace = function (index, value) {
      return _this.updateArrayField(function (array) {
        return replace(array, index, value);
      }, false, false);
    };

    _this.handleReplace = function (index, value) {
      return function () {
        return _this.replace(index, value);
      };
    };

    _this.unshift = function (value) {
      var length = -1;

      _this.updateArrayField(function (array) {
        var arr = array ? [value].concat(array) : [value];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      }, function (array) {
        var arr = array ? [null].concat(array) : [null];

        if (length < 0) {
          length = arr.length;
        }

        return arr;
      });

      return length;
    };

    _this.handleUnshift = function (value) {
      return function () {
        return _this.unshift(value);
      };
    };

    _this.handleRemove = function (index) {
      return function () {
        return _this.remove(index);
      };
    };

    _this.handlePop = function () {
      return function () {
        return _this.pop();
      };
    }; // We need TypeScript generics on these, so we'll bind them in the constructor
    // @todo Fix TS 3.2.1


    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.pop = _this.pop.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = FieldArrayInner.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.validateOnChange && this.props.formik.validateOnChange && !react_fast_compare__WEBPACK_IMPORTED_MODULE_1___default()(getIn(prevProps.formik.values, prevProps.name), getIn(this.props.formik.values, this.props.name))) {
      this.props.formik.validateForm(this.props.formik.values);
    }
  };

  _proto.remove = function remove(index) {
    // We need to make sure we also remove relevant pieces of `touched` and `errors`
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var copy = array ? copyArrayLike(array) : [];

      if (!result) {
        result = copy[index];
      }

      if (isFunction(copy.splice)) {
        copy.splice(index, 1);
      }

      return copy;
    }, true, true);
    return result;
  };

  _proto.pop = function pop() {
    // Remove relevant pieces of `touched` and `errors` too!
    var result;
    this.updateArrayField( // so this gets call 3 times
    function (array) {
      var tmp = array;

      if (!result) {
        result = tmp && tmp.pop && tmp.pop();
      }

      return tmp;
    }, true, true);
    return result;
  };

  _proto.render = function render() {
    var arrayHelpers = {
      push: this.push,
      pop: this.pop,
      swap: this.swap,
      move: this.move,
      insert: this.insert,
      replace: this.replace,
      unshift: this.unshift,
      remove: this.remove,
      handlePush: this.handlePush,
      handlePop: this.handlePop,
      handleSwap: this.handleSwap,
      handleMove: this.handleMove,
      handleInsert: this.handleInsert,
      handleReplace: this.handleReplace,
      handleUnshift: this.handleUnshift,
      handleRemove: this.handleRemove
    };

    var _this$props2 = this.props,
        component = _this$props2.component,
        render = _this$props2.render,
        children = _this$props2.children,
        name = _this$props2.name,
        _this$props2$formik = _this$props2.formik,
        restOfFormik = _objectWithoutPropertiesLoose(_this$props2$formik, ["validate", "validationSchema"]);

    var props = _extends({}, arrayHelpers, {
      form: restOfFormik,
      name: name
    });

    return component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, props) : render ? render(props) : children // children come last, always called
    ? typeof children === 'function' ? children(props) : !isEmptyChildren(children) ? react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children) : null : null;
  };

  return FieldArrayInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

FieldArrayInner.defaultProps = {
  validateOnChange: true
};
var FieldArray = /*#__PURE__*/connect(FieldArrayInner);

var ErrorMessageImpl = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ErrorMessageImpl, _React$Component);

  function ErrorMessageImpl() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = ErrorMessageImpl.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (getIn(this.props.formik.errors, this.props.name) !== getIn(props.formik.errors, this.props.name) || getIn(this.props.formik.touched, this.props.name) !== getIn(props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length) {
      return true;
    } else {
      return false;
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        component = _this$props.component,
        formik = _this$props.formik,
        render = _this$props.render,
        children = _this$props.children,
        name = _this$props.name,
        rest = _objectWithoutPropertiesLoose(_this$props, ["component", "formik", "render", "children", "name"]);

    var touch = getIn(formik.touched, name);
    var error = getIn(formik.errors, name);
    return !!touch && !!error ? render ? isFunction(render) ? render(error) : null : children ? isFunction(children) ? children(error) : null : component ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, rest, error) : error : null;
  };

  return ErrorMessageImpl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var ErrorMessage = /*#__PURE__*/connect(ErrorMessageImpl);

/**
 * Custom Field component for quickly hooking into Formik
 * context and wiring up forms.
 */

var FastFieldInner = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(FastFieldInner, _React$Component);

  function FastFieldInner(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    var render = props.render,
        children = props.children,
        component = props.component,
        is = props.as,
        name = props.name;
    !!render ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, "<FastField render> has been deprecated. Please use a child callback function instead: <FastField name={" + name + "}>{props => ...}</FastField> instead.") : 0 : void 0;
    !!(component && render) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <FastField component> and <FastField render> in the same <FastField> component; <FastField component> will be ignored') : 0 : void 0;
    !!(is && children && isFunction(children)) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <FastField as> and <FastField children> as a function in the same <FastField> component; <FastField as> will be ignored.') : 0 : void 0;
    !!(component && children && isFunction(children)) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <FastField component> and <FastField children> as a function in the same <FastField> component; <FastField component> will be ignored.') : 0 : void 0;
    !!(render && children && !isEmptyChildren(children)) ?  true ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'tiny-warning'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false, 'You should not use <FastField render> and <FastField children> in the same <FastField> component; <FastField children> will be ignored') : 0 : void 0;
    return _this;
  }

  var _proto = FastFieldInner.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (this.props.shouldUpdate) {
      return this.props.shouldUpdate(props, this.props);
    } else if (props.name !== this.props.name || getIn(props.formik.values, this.props.name) !== getIn(this.props.formik.values, this.props.name) || getIn(props.formik.errors, this.props.name) !== getIn(this.props.formik.errors, this.props.name) || getIn(props.formik.touched, this.props.name) !== getIn(this.props.formik.touched, this.props.name) || Object.keys(this.props).length !== Object.keys(props).length || props.formik.isSubmitting !== this.props.formik.isSubmitting) {
      return true;
    } else {
      return false;
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, {
      validate: this.props.validate
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, {
        validate: this.props.validate
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        render = _this$props.render,
        is = _this$props.as,
        children = _this$props.children,
        component = _this$props.component,
        formik = _this$props.formik,
        props = _objectWithoutPropertiesLoose(_this$props, ["validate", "name", "render", "as", "children", "component", "shouldUpdate", "formik"]);

    var restOfFormik = _objectWithoutPropertiesLoose(formik, ["validate", "validationSchema"]);

    var field = formik.getFieldProps(_extends({
      name: name
    }, props));
    var meta = {
      value: getIn(formik.values, name),
      error: getIn(formik.errors, name),
      touched: !!getIn(formik.touched, name),
      initialValue: getIn(formik.initialValues, name),
      initialTouched: !!getIn(formik.initialTouched, name),
      initialError: getIn(formik.initialErrors, name)
    };
    var bag = {
      field: field,
      meta: meta,
      form: restOfFormik
    };

    if (render) {
      return render(bag);
    }

    if (isFunction(children)) {
      return children(bag);
    }

    if (component) {
      // This behavior is backwards compat with earlier Formik 0.9 to 1.x
      if (typeof component === 'string') {
        var innerRef = props.innerRef,
            rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
          ref: innerRef
        }, field, rest), children);
      } // We don't pass `meta` for backwards compat


      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(component, _extends({
        field: field,
        form: formik
      }, props), children);
    } // default to input here so we can check for both `as` and `children` above


    var asElement = is || 'input';

    if (typeof asElement === 'string') {
      var _innerRef = props.innerRef,
          _rest = _objectWithoutPropertiesLoose(props, ["innerRef"]);

      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({
        ref: _innerRef
      }, field, _rest), children);
    }

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(asElement, _extends({}, field, props), children);
  };

  return FastFieldInner;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

var FastField = /*#__PURE__*/connect(FastFieldInner);


//# sourceMappingURL=formik.esm.js.map


/***/ }),

/***/ "./node_modules/piral-page-layouts/esm/create.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-page-layouts/esm/create.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPageLayoutsApi": () => (/* binding */ createPageLayoutsApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-page-layouts/esm/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/index.js");



function getPageLayouts(items) {
    const layouts = {};
    if (items && typeof items === 'object') {
        Object.keys(items).forEach((name) => {
            layouts[name] = {
                pilet: undefined,
                component: items[name],
            };
        });
    }
    return layouts;
}
const DefaultWrapper = (props) => (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.defaultRender)(props.children);
function createPageWrapper(Wrapper = DefaultWrapper, fallback = 'default') {
    return (props) => {
        var _a;
        const layout = ((_a = props.meta) === null || _a === void 0 ? void 0 : _a.layout) || fallback;
        const registration = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.useGlobalState)((s) => s.registry.pageLayouts[layout] || s.registry.pageLayouts[fallback]);
        const Layout = (registration === null || registration === void 0 ? void 0 : registration.component) || DefaultWrapper;
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Layout, props, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Wrapper, props));
    };
}
function withPageLayouts(pageLayouts, fallback) {
    return (state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { wrappers: Object.assign(Object.assign({}, state.registry.wrappers), { page: createPageWrapper(state.registry.wrappers.page, fallback) }), pageLayouts }) }));
}
/**
 * Creates new Pilet API extensions for dealing with page layouts.
 */
function createPageLayoutsApi(config = {}) {
    const { layouts = {}, fallback } = config;
    return (context) => {
        const findPageLayout = (name) => context.readState((s) => s.registry.pageLayouts[name]);
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_2__);
        context.dispatch(withPageLayouts(getPageLayouts(layouts), fallback));
        return (api) => {
            const pilet = api.meta.name;
            return {
                registerPageLayout(name, pageLayout) {
                    const current = findPageLayout(name);
                    if (!current || current.pilet === pilet) {
                        const component = (0,piral_core__WEBPACK_IMPORTED_MODULE_1__.withApi)(context, pageLayout, api, 'pageLayout');
                        context.registerPageLayout(name, {
                            component,
                            pilet,
                        });
                    }
                    return () => api.unregisterPageLayout(name);
                },
                unregisterPageLayout(name) {
                    const current = findPageLayout(name);
                    if ((current === null || current === void 0 ? void 0 : current.pilet) === pilet) {
                        context.unregisterPageLayout(name);
                    }
                },
            };
        };
    };
}
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "./node_modules/piral/esm/instance.js":
/*!********************************************!*\
  !*** ./node_modules/piral/esm/instance.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInstanceElement": () => (/* binding */ createInstanceElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-ext'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



function createInstanceElement(instance, layout, errors, dashboardPath = '/', piralChildren) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { instance: instance },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { layout: layout }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { errors: errors }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), { path: dashboardPath, component: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'piral-ext'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()) }),
        piralChildren));
}
//# sourceMappingURL=instance.js.map

/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ (() => {



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("db49682fda51b88887d7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3c4c52b142ce96197a14.hot-update.js.map