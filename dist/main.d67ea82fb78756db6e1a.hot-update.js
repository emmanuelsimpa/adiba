"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "persistor": () => (/* binding */ persistor)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@manaflair/redux-batch'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-persist'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.tsx");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





var sagaMiddleware = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var middleware = [].concat(_toConsumableArray((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultMiddleware)({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
})), [sagaMiddleware]);
var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer,
  middleware: middleware,
  devTools: "development" !== "production",
  enhancers: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '@manaflair/redux-batch'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
});
var persistor = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-persist'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(store);
sagaMiddleware.run(_rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootSaga);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instance": () => (/* binding */ instance)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
/* harmony import */ var _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/shared/components/layouts/default */ "./src/_app/shared/components/layouts/default.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }








// change to your feed URL here (either using feed.piral.cloud or your own service)
var feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
var instance = (0,piral__WEBPACK_IMPORTED_MODULE_6__.createInstance)({
  state: {
    components: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.layout,
    errorComponents: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.errors
    // routes: {
    //   "/": Landing,
    // },
  },

  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_7__.createStandardApi)()), [(0,piral_page_layouts__WEBPACK_IMPORTED_MODULE_8__.createPageLayoutsApi)()]),
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
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_9__.Piral, {
  instance: instance
})));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("097282bbdaf5d2c4170f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d67ea82fb78756db6e1a.hot-update.js.map