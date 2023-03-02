"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './apiSlice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var _reducer;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// import { rootReducer, rootSaga } from "./rootReducer";

// const sagaMiddleware = createSagaMiddleware;
// const middleware = [
//   ...getDefaultMiddleware({
//     immutableCheck: false,
//     serializableCheck: false,
//     thunk: true,
//   }),
//   sagaMiddleware,
// ];

var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: (_reducer = {}, _defineProperty(_reducer, Object(function webpackMissingModule() { var e = new Error("Cannot find module './apiSlice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './apiSlice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), _defineProperty(_reducer, "auth", authReducer), _reducer),
  middleware: function middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(Object(function webpackMissingModule() { var e = new Error("Cannot find module './apiSlice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  },
  devTools: "development" !== "production"
});

// export const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("843c59bb7d64b340add6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.e7ccc1bed10bc19ef58c.hot-update.js.map