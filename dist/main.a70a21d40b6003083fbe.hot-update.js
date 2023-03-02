"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/shared/CommandPalette.tsx":
/*!********************************************!*\
  !*** ./src/_app/shared/CommandPalette.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CommandPalette)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/combobox/combobox.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/MagnifyingGlassIcon.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/FolderIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/LifebuoyIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ExclamationTriangleIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
    className: 'mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox
  //   onChange={(item) => (window.location = item.url)}
  , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'relative'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__, {
    className: 'pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Input, {
    className: 'h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm',
    placeholder: 'Search...',
    onChange: function onChange(event) {
      return setRawQuery(event.target.value);
    }
  })), (filteredProjects.length > 0 || filteredUsers.length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Options, {
    "static": true,
    className: 'max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2'
  }, filteredProjects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: 'text-xs font-semibold text-gray-900'
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: '-mx-4 mt-2 text-sm text-gray-700'
  }, filteredProjects.map(function (project) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Option, {
      key: project.id,
      value: project,
      className: function className(_ref) {
        var active = _ref.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? "flex cursor-default select-none items-center px-4 py-2" : "flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white");
      }
    }, function (_ref2) {
      var active = _ref2.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__, {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Option, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
    className: 'mx-auto h-6 w-6 text-gray-400',
    "aria-hidden": 'true'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-4 font-semibold text-gray-900'
  }, "Help with searching"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: 'mt-2 text-gray-500'
  }, "Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects.")), query !== "" && rawQuery !== "?" && filteredProjects.length === 0 && filteredUsers.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'py-14 px-6 text-center text-sm sm:px-14'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__, {
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9fdd31468c369423706a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.a70a21d40b6003083fbe.hot-update.js.map