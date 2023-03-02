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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@manaflair/redux-batch'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-persist'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





// import logger from "redux-logger";

var sagaMiddleware = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
var middleware = [].concat(_toConsumableArray((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultMiddleware)({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
})), [sagaMiddleware
// logger
]);

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(logger);
// }

var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.configureStore)({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootReducer,
  middleware: middleware,
  devTools: "development" !== "production",
  enhancers: [Object(function webpackMissingModule() { var e = new Error("Cannot find module '@manaflair/redux-batch'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
var persistor = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-persist'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(store);
sagaMiddleware.run(_rootReducer__WEBPACK_IMPORTED_MODULE_1__.rootSaga);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff42f14af5a9ffa2c092")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.f66e3c38932513baa58b.hot-update.js.map