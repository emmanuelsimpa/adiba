self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/@heroicons/react/24/outline/ExclamationTriangleIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ExclamationTriangleIcon.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ExclamationTriangleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
  }));
}

const ForwardRef = React.forwardRef(ExclamationTriangleIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/LifebuoyIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/LifebuoyIcon.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function LifebuoyIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
  }));
}

const ForwardRef = React.forwardRef(LifebuoyIcon);
module.exports = ForwardRef;

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
  name: 'Workflow Inc. / Website Redesign',
  category: 'Projects',
  url: '#'
}
// More projects...
];

var users = [{
  id: 1,
  name: 'Leslie Alexander',
  url: '#',
  imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
// More users...
];

function CommandPalette(props) {
  var openPalette = props.openPalette,
    setOpenPalette = props.setOpenPalette;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    rawQuery = _useState2[0],
    setRawQuery = _useState2[1];
  var query = rawQuery.toLowerCase().replace(/^[#>]/, '');
  var filteredProjects = rawQuery === '#' ? projects : query === '' || rawQuery.startsWith('>') ? [] : projects.filter(function (project) {
    return project.name.toLowerCase().includes(query);
  });
  var filteredUsers = rawQuery === '>' ? users : query === '' || rawQuery.startsWith('#') ? [] : users.filter(function (user) {
    return user.name.toLowerCase().includes(query);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
    show: openPalette,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    afterLeave: function afterLeave() {
      return setRawQuery('');
    },
    appear: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: setOpenPalette
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
    className: "mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox
  //   onChange={(item) => (window.location = item.url)}
  , null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_5__, {
    className: "pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Input, {
    className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
    placeholder: "Search...",
    onChange: function onChange(event) {
      return setRawQuery(event.target.value);
    }
  })), (filteredProjects.length > 0 || filteredUsers.length > 0) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Options, {
    "static": true,
    className: "max-h-80 scroll-py-10 scroll-py-10 scroll-pb-2 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
  }, filteredProjects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xs font-semibold text-gray-900"
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "-mx-4 mt-2 text-sm text-gray-700"
  }, filteredProjects.map(function (project) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Option, {
      key: project.id,
      value: project,
      className: function className(_ref) {
        var active = _ref.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? 'flex cursor-default select-none items-center px-4 py-2' : 'flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white');
      }
    }, function (_ref2) {
      var active = _ref2.active;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__, {
        className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)('h-6 w-6 flex-none', active ? 'text-white' : 'text-gray-400'),
        "aria-hidden": "true"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
        className: "ml-3 flex-auto truncate"
      }, project.name));
    });
  }))), filteredUsers.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xs font-semibold text-gray-900"
  }, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "-mx-4 mt-2 text-sm text-gray-700"
  }, filteredUsers.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Combobox.Option, {
      key: user.id,
      value: user,
      className: function className(_ref3) {
        var active = _ref3.active;
        return (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)(active ? 'flex cursor-default select-none items-center px-4 py-2' : 'flex cursor-default select-none items-center px-4 py-2 bg-indigo-600 text-white');
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: user.imageUrl,
      alt: "",
      className: "h-6 w-6 flex-none rounded-full"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "ml-3 flex-auto truncate"
    }, user.name));
  })))), rawQuery === '?' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-14 px-6 text-center text-sm sm:px-14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
    className: "mx-auto h-6 w-6 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 font-semibold text-gray-900"
  }, "Help with searching"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-gray-500"
  }, "Use this tool to quickly search for users and projects across our entire platform. You can also use the search modifiers found in the footer below to limit the results to just users or projects.")), query !== '' && rawQuery !== '?' && filteredProjects.length === 0 && filteredUsers.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-14 px-6 text-center text-sm sm:px-14"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__, {
    className: "mx-auto h-6 w-6 text-gray-400",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-4 font-semibold text-gray-900"
  }, "No results found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mt-2 text-gray-500"
  }, "We couldn\u2019t find anything with that term. Please try again.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs text-gray-700"
  }, "Type", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)('mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2', rawQuery.startsWith('#') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900')
  }, "#"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sm:hidden"
  }, "for projects,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "hidden sm:inline"
  }, "to access projects,"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)('mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2', rawQuery.startsWith('>') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900')
  }, ">"), ' ', "for users, and", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("kbd", {
    className: (0,_utils_className__WEBPACK_IMPORTED_MODULE_1__.classNames)('mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2', rawQuery === '?' ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900')
  }, "?"), ' ', "for help.")))))));
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/EnvelopeIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/BellIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/MagnifyingGlassIcon.js");
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__);
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
  }, "Search"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__, {
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
  }, "View messages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__, {
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
  }, "View notifications"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__, {
    className: 'h-6 w-6',
    "aria-hidden": 'true'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu, {
    as: 'div',
    className: 'relative ml-3'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__.Menu.Button, {
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
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/XMarkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Feed/Feed'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Profile'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './FeedStandardList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());







var slideOverContents = [{
  name: 'messages',
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module './FeedStandardList'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
}, {
  name: 'notifications',
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module './Feed/Feed'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
}, {
  name: 'profile',
  component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module './Profile'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null)
}];
function SlideOver(props) {
  var _a;
  var open = props.open,
    setOpen = props.setOpen,
    content = props.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
    show: open,
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: setOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "fixed inset-0 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "absolute inset-0 overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transform transition ease-in-out duration-500 sm:duration-700",
    enterFrom: "translate-x-full",
    enterTo: "translate-x-0",
    leave: "transform transition ease-in-out duration-500 sm:duration-700",
    leaveFrom: "translate-x-0",
    leaveTo: "translate-x-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Panel, {
    className: "pointer-events-auto relative w-screen max-w-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "ease-in-out duration-500",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in-out duration-500",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",
    onClick: function onClick() {
      return setOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "sr-only"
  }, "Close panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "px-4 sm:px-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Dialog.Title, {
    className: "text-lg font-medium text-gray-900"
  }, "Panel title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "relative mt-6 flex-1 px-4 sm:px-6"
  }, (_a = slideOverContents.find(function (item) {
    return item.name === content;
  })) === null || _a === void 0 ? void 0 : _a.component)))))))));
}

/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/combobox/combobox.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/combobox/combobox.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Combobox": () => (/* binding */ ko)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-computed.js */ "./node_modules/@headlessui/react/dist/hooks/use-computed.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../hooks/use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-watch.js */ "./node_modules/@headlessui/react/dist/hooks/use-watch.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
var Fe=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(Fe||{}),_e=(n=>(n[n.Single=0]="Single",n[n.Multi=1]="Multi",n))(_e||{}),ke=(n=>(n[n.Pointer=0]="Pointer",n[n.Other=1]="Other",n))(ke||{}),we=(i=>(i[i.OpenCombobox=0]="OpenCombobox",i[i.CloseCombobox=1]="CloseCombobox",i[i.GoToOption=2]="GoToOption",i[i.RegisterOption=3]="RegisterOption",i[i.UnregisterOption=4]="UnregisterOption",i[i.RegisterLabel=5]="RegisterLabel",i))(we||{});function ne(t,r=n=>n){let n=t.activeOptionIndex!==null?t.options[t.activeOptionIndex]:null,o=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(r(t.options.slice()),u=>u.dataRef.current.domRef.current),a=n?o.indexOf(n):null;return a===-1&&(a=null),{options:o,activeOptionIndex:a}}let Be={[1](t){return t.dataRef.current.disabled||t.comboboxState===1?t:{...t,activeOptionIndex:null,comboboxState:1}},[0](t){if(t.dataRef.current.disabled||t.comboboxState===0)return t;let r=t.activeOptionIndex,{isSelected:n}=t.dataRef.current,o=t.options.findIndex(a=>n(a.dataRef.current.value));return o!==-1&&(r=o),{...t,comboboxState:0,activeOptionIndex:r}},[2](t,r){var a;if(t.dataRef.current.disabled||t.dataRef.current.optionsRef.current&&!t.dataRef.current.optionsPropsRef.current.static&&t.comboboxState===1)return t;let n=ne(t);if(n.activeOptionIndex===null){let u=n.options.findIndex(i=>!i.dataRef.current.disabled);u!==-1&&(n.activeOptionIndex=u)}let o=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(r,{resolveItems:()=>n.options,resolveActiveIndex:()=>n.activeOptionIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});return{...t,...n,activeOptionIndex:o,activationTrigger:(a=r.trigger)!=null?a:1}},[3]:(t,r)=>{let n={id:r.id,dataRef:r.dataRef},o=ne(t,u=>[...u,n]);t.activeOptionIndex===null&&t.dataRef.current.isSelected(r.dataRef.current.value)&&(o.activeOptionIndex=o.options.indexOf(n));let a={...t,...o,activationTrigger:1};return t.dataRef.current.__demoMode&&t.dataRef.current.value===void 0&&(a.activeOptionIndex=0),a},[4]:(t,r)=>{let n=ne(t,o=>{let a=o.findIndex(u=>u.id===r.id);return a!==-1&&o.splice(a,1),o});return{...t,...n,activationTrigger:1}},[5]:(t,r)=>({...t,labelId:r.id})},re=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);re.displayName="ComboboxActionsContext";function Q(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(re);if(r===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Q),n}return r}let ae=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);ae.displayName="ComboboxDataContext";function j(t){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ae);if(r===null){let n=new Error(`<${t} /> is missing a parent <Combobox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,j),n}return r}function Ue(t,r){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(r.type,Be,t,r)}let Ge=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ne(t,r){let{value:n,defaultValue:o,onChange:a,name:u,by:i=(b,m)=>b===m,disabled:d=!1,__demoMode:c=!1,nullable:e=!1,multiple:p=!1,...P}=t,[s=p?[]:void 0,y]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_4__.useControllable)(n,a,o),[T,C]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ue,{dataRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),comboboxState:c?0:1,options:[],activeOptionIndex:null,activationTrigger:1,labelId:null}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),R=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({static:!1,hold:!1}),K=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),h=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),w=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),B=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(typeof i=="string"?(b,m)=>{let A=i;return(b==null?void 0:b[A])===(m==null?void 0:m[A])}:i),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(f.mode,{[1]:()=>s.some(m=>D(m,b)),[0]:()=>D(s,b)}),[s]),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({...T,optionsPropsRef:R,labelRef:K,inputRef:h,buttonRef:w,optionsRef:B,value:s,defaultValue:o,disabled:d,mode:p?1:0,get activeOptionIndex(){if(g.current&&T.activeOptionIndex===null&&T.options.length>0){let b=T.options.findIndex(m=>!m.dataRef.current.disabled);if(b!==-1)return b}return T.activeOptionIndex},compare:D,isSelected:W,nullable:e,__demoMode:c}),[s,o,d,p,e,c,T]);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{T.dataRef.current=f},[f]),(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_7__.useOutsideClick)([f.buttonRef,f.inputRef,f.optionsRef],()=>U.closeCombobox(),f.comboboxState===0);let F=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:f.comboboxState===0,disabled:d,activeIndex:f.activeOptionIndex,activeOption:f.activeOptionIndex===null?null:f.options[f.activeOptionIndex].dataRef.current.value,value:s}),[f,d,s]),_=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(b=>{let m=f.options.find(A=>A.id===b);!m||V(m.dataRef.current.value)}),O=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{if(f.activeOptionIndex!==null){let{dataRef:b,id:m}=f.options[f.activeOptionIndex];V(b.current.value),U.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,m)}}),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{C({type:0}),g.current=!0}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{C({type:1}),g.current=!1}),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((b,m,A)=>(g.current=!1,b===_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific?C({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:m,trigger:A}):C({type:2,focus:b,trigger:A}))),X=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)((b,m)=>(C({type:3,id:b,dataRef:m}),()=>C({type:4,id:b}))),Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(b=>(C({type:5,id:b}),()=>C({type:5,id:null}))),V=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(b=>(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(f.mode,{[0](){return y==null?void 0:y(b)},[1](){let m=f.value.slice(),A=m.findIndex($=>D($,b));return A===-1?m.push(b):m.splice(A,1),y==null?void 0:y(m)}})),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({onChange:V,registerOption:X,registerLabel:Y,goToOption:E,closeCombobox:L,openCombobox:l,selectActiveOption:O,selectOption:_}),[]),de=r===null?{}:{ref:r},Z=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),ce=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{!Z.current||o!==void 0&&ce.addEventListener(Z.current,"reset",()=>{V(o)})},[Z,V]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(re.Provider,{value:U},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ae.Provider,{value:f},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_9__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(f.comboboxState,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_9__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_9__.State.Closed})},u!=null&&s!=null&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_10__.objectToFormEntries)({[u]:s}).map(([b,m],A)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_11__.Features.Hidden,ref:A===0?$=>{var le;Z.current=(le=$==null?void 0:$.closest("form"))!=null?le:null}:void 0,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.compact)({key:b,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:b,value:m})})),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.render)({ourProps:de,theirProps:P,slot:F,defaultTag:Ge,name:"Combobox"}))))}let He=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.forwardRefWithAs)(Ne),je="input",Ke=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.forwardRefWithAs)(function(r,n){var f,F,_,O;let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_13__.useId)(),{id:a=`headlessui-combobox-input-${o}`,onChange:u,displayValue:i,type:d="text",...c}=r,e=j("Combobox.Input"),p=Q("Combobox.Input"),P=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_14__.useSyncRefs)(e.inputRef,n),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),y=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__.useDisposables)(),T=function(){var l;return typeof i=="function"&&e.value!==void 0?(l=i(e.value))!=null?l:"":typeof e.value=="string"?e.value:""}();(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_15__.useWatch)(([l,L],[E,X])=>{s.current||!e.inputRef.current||(X===0&&L===1||l!==E)&&(e.inputRef.current.value=l)},[T,e.comboboxState]),(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_15__.useWatch)(([l],[L])=>{if(l===0&&L===1){let E=e.inputRef.current;if(!E)return;let X=E.value,{selectionStart:Y,selectionEnd:V,selectionDirection:U}=E;E.value="",E.value=X,U!==null?E.setSelectionRange(Y,V,U):E.setSelectionRange(Y,V)}},[e.comboboxState]);let C=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{C.current=!0}),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{setTimeout(()=>{C.current=!1})}),K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(l=>{switch(s.current=!0,l.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Backspace:case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Delete:if(e.mode!==0||!e.nullable)return;let L=l.currentTarget;y.requestAnimationFrame(()=>{L.value===""&&(p.onChange(null),e.optionsRef.current&&(e.optionsRef.current.scrollTop=0),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing))});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Enter:if(s.current=!1,e.comboboxState!==0||C.current)return;if(l.preventDefault(),l.stopPropagation(),e.activeOptionIndex===null){p.closeCombobox();return}p.selectActiveOption(),e.mode===0&&p.closeCombobox();break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.ArrowDown:return s.current=!1,l.preventDefault(),l.stopPropagation(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(e.comboboxState,{[0]:()=>{p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next)},[1]:()=>{p.openCombobox()}});case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.ArrowUp:return s.current=!1,l.preventDefault(),l.stopPropagation(),(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(e.comboboxState,{[0]:()=>{p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous)},[1]:()=>{p.openCombobox(),y.nextFrame(()=>{e.value||p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last)})}});case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Home:if(l.shiftKey)break;return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.PageUp:return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First);case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.End:if(l.shiftKey)break;return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.PageDown:return s.current=!1,l.preventDefault(),l.stopPropagation(),p.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last);case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Escape:return s.current=!1,e.comboboxState!==0?void 0:(l.preventDefault(),e.optionsRef.current&&!e.optionsPropsRef.current.static&&l.stopPropagation(),p.closeCombobox());case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Tab:if(s.current=!1,e.comboboxState!==0)return;e.mode===0&&p.selectActiveOption(),p.closeCombobox();break}}),h=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(l=>{p.openCombobox(),u==null||u(l)}),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{s.current=!1}),B=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.useComputed)(()=>{if(!!e.labelId)return[e.labelId].join(" ")},[e.labelId]),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:e.comboboxState===0,disabled:e.disabled}),[e]),W={ref:P,id:a,role:"combobox",type:d,"aria-controls":(f=e.optionsRef.current)==null?void 0:f.id,"aria-expanded":e.disabled?void 0:e.comboboxState===0,"aria-activedescendant":e.activeOptionIndex===null||(F=e.options[e.activeOptionIndex])==null?void 0:F.id,"aria-multiselectable":e.mode===1?!0:void 0,"aria-labelledby":B,"aria-autocomplete":"list",defaultValue:(O=(_=r.defaultValue)!=null?_:e.defaultValue!==void 0?i==null?void 0:i(e.defaultValue):null)!=null?O:e.defaultValue,disabled:e.disabled,onCompositionStart:g,onCompositionEnd:R,onKeyDown:K,onChange:h,onBlur:w};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.render)({ourProps:W,theirProps:c,slot:D,defaultTag:je,name:"Combobox.Input"})}),We="button",Xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.forwardRefWithAs)(function(r,n){var C;let o=j("Combobox.Button"),a=Q("Combobox.Button"),u=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_14__.useSyncRefs)(o.buttonRef,n),i=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_13__.useId)(),{id:d=`headlessui-combobox-button-${i}`,...c}=r,e=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__.useDisposables)(),p=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(g=>{switch(g.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.ArrowDown:return g.preventDefault(),g.stopPropagation(),o.comboboxState===1&&a.openCombobox(),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.ArrowUp:return g.preventDefault(),g.stopPropagation(),o.comboboxState===1&&(a.openCombobox(),e.nextFrame(()=>{o.value||a.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last)})),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})});case _keyboard_js__WEBPACK_IMPORTED_MODULE_16__.Keys.Escape:return o.comboboxState!==0?void 0:(g.preventDefault(),o.optionsRef.current&&!o.optionsPropsRef.current.static&&g.stopPropagation(),a.closeCombobox(),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})}));default:return}}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(g=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_18__.isDisabledReactIssue7711)(g.currentTarget))return g.preventDefault();o.comboboxState===0?a.closeCombobox():(g.preventDefault(),a.openCombobox()),e.nextFrame(()=>{var R;return(R=o.inputRef.current)==null?void 0:R.focus({preventScroll:!0})})}),s=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.useComputed)(()=>{if(!!o.labelId)return[o.labelId,d].join(" ")},[o.labelId,d]),y=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:o.comboboxState===0,disabled:o.disabled,value:o.value}),[o]),T={ref:u,id:d,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_19__.useResolveButtonType)(r,o.buttonRef),tabIndex:-1,"aria-haspopup":"listbox","aria-controls":(C=o.optionsRef.current)==null?void 0:C.id,"aria-expanded":o.disabled?void 0:o.comboboxState===0,"aria-labelledby":s,disabled:o.disabled,onClick:P,onKeyDown:p};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.render)({ourProps:T,theirProps:c,slot:y,defaultTag:We,name:"Combobox.Button"})}),$e="label",Je=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.forwardRefWithAs)(function(r,n){let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_13__.useId)(),{id:a=`headlessui-combobox-label-${o}`,...u}=r,i=j("Combobox.Label"),d=Q("Combobox.Label"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_14__.useSyncRefs)(i.labelRef,n);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>d.registerLabel(a),[a]);let e=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{var s;return(s=i.inputRef.current)==null?void 0:s.focus({preventScroll:!0})}),p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i.comboboxState===0,disabled:i.disabled}),[i]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.render)({ourProps:{ref:c,id:a,onClick:e},theirProps:u,slot:p,defaultTag:$e,name:"Combobox.Label"})}),qe="ul",Qe=_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.Features.Static,Ye=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.forwardRefWithAs)(function(r,n){let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_13__.useId)(),{id:a=`headlessui-combobox-options-${o}`,hold:u=!1,...i}=r,d=j("Combobox.Options"),c=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_14__.useSyncRefs)(d.optionsRef,n),e=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_9__.useOpenClosed)(),p=(()=>e!==null?e===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_9__.State.Open:d.comboboxState===0)();(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{var T;d.optionsPropsRef.current.static=(T=r.static)!=null?T:!1},[d.optionsPropsRef,r.static]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{d.optionsPropsRef.current.hold=u},[d.optionsPropsRef,u]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_20__.useTreeWalker)({container:d.optionsRef.current,enabled:d.comboboxState===0,accept(T){return T.getAttribute("role")==="option"?NodeFilter.FILTER_REJECT:T.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(T){T.setAttribute("role","none")}});let P=(0,_hooks_use_computed_js__WEBPACK_IMPORTED_MODULE_17__.useComputed)(()=>{var T,C;return(C=d.labelId)!=null?C:(T=d.buttonRef.current)==null?void 0:T.id},[d.labelId,d.buttonRef.current]),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:d.comboboxState===0}),[d]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.render)({ourProps:{"aria-labelledby":P,role:"listbox",id:a,ref:c},theirProps:i,slot:s,defaultTag:qe,features:Qe,visible:p,name:"Combobox.Options"})}),Ze="li",ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.forwardRefWithAs)(function(r,n){var F,_;let o=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_13__.useId)(),{id:a=`headlessui-combobox-option-${o}`,disabled:u=!1,value:i,...d}=r,c=j("Combobox.Option"),e=Q("Combobox.Option"),p=c.activeOptionIndex!==null?c.options[c.activeOptionIndex].id===a:!1,P=c.isSelected(i),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),y=(0,_hooks_use_latest_value_js__WEBPACK_IMPORTED_MODULE_21__.useLatestValue)({disabled:u,value:i,domRef:s,textValue:(_=(F=s.current)==null?void 0:F.textContent)==null?void 0:_.toLowerCase()}),T=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_14__.useSyncRefs)(n,s),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>e.selectOption(a));(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>e.registerOption(a,y),[y,a]);let g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!c.__demoMode);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{if(!c.__demoMode)return;let O=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_22__.disposables)();return O.requestAnimationFrame(()=>{g.current=!0}),O.dispose},[]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_6__.useIsoMorphicEffect)(()=>{if(c.comboboxState!==0||!p||!g.current||c.activationTrigger===0)return;let O=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_22__.disposables)();return O.requestAnimationFrame(()=>{var l,L;(L=(l=s.current)==null?void 0:l.scrollIntoView)==null||L.call(l,{block:"nearest"})}),O.dispose},[s,p,c.comboboxState,c.activationTrigger,c.activeOptionIndex]);let R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(O=>{if(u)return O.preventDefault();C(),c.mode===0&&e.closeCombobox()}),K=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{if(u)return e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing);e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,a)}),h=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_23__.useTrackedPointer)(),w=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(O=>h.update(O)),B=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(O=>{!h.wasMoved(O)||u||p||e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,a,0)}),D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(O=>{!h.wasMoved(O)||u||!p||c.optionsPropsRef.current.hold||e.goToOption(_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing)}),W=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:p,selected:P,disabled:u}),[p,P,u]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_12__.render)({ourProps:{id:a,ref:T,role:"option",tabIndex:u===!0?void 0:-1,"aria-disabled":u===!0?!0:void 0,"aria-selected":P,disabled:void 0,onClick:R,onFocus:K,onPointerEnter:w,onMouseEnter:w,onPointerMove:B,onMouseMove:B,onPointerLeave:D,onMouseLeave:D},theirProps:d,slot:W,defaultTag:Ze,name:"Combobox.Option"})}),ko=Object.assign(He,{Input:Ke,Button:Xe,Label:Je,Options:Ye,Option:ze});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-computed.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-computed.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useComputed": () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function i(e,o){let[u,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(e),r=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>t(r.current),[r,t,...o]),u}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-controllable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useControllable": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attemptSubmit": () => (/* binding */ p),
/* harmony export */   "objectToFormEntries": () => (/* binding */ e)
/* harmony export */ });
function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f(t,s(r,i),o);return t}function s(n,r){return n?n+"["+r+"]":r}function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):typeof t=="boolean"?n.push([r,t?"1":"0"]):typeof t=="string"?n.push([r,t]):typeof t=="number"?n.push([r,`${t}`]):t==null?n.push([r,""]):e(t,r,n)}function p(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(!!r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("053a84949c120edd33e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8db340fc18b4a353d9a4.hot-update.js.map