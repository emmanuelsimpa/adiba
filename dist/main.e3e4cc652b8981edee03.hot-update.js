"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/shared/MasterLayout/components/Sidebar.tsx":
/*!*************************************************************!*\
  !*** ./src/_app/shared/MasterLayout/components/Sidebar.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {
    to: '/dashboard'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("img", {
    className: 'h-8 w-auto',
    src: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    alt: 'Your Company'
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'mt-5 flex flex-grow flex-col'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: 'flex-1 space-y-8 bg-white px-2',
    "aria-label": 'Sidebar'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SidebarMain__WEBPACK_IMPORTED_MODULE_0__["default"], {
    classFn: _utils_className__WEBPACK_IMPORTED_MODULE_3__.classNames,
    navList: result
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_SidebarSecondary__WEBPACK_IMPORTED_MODULE_4__["default"], null)))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("95fbbaf110603ff165ff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e3e4cc652b8981edee03.hot-update.js.map