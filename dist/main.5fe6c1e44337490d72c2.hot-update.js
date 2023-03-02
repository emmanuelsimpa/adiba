self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/@manaflair/redux-batch/build/core/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@manaflair/redux-batch/build/core/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _reduxBatch = __webpack_require__(/*! ./reduxBatch */ "./node_modules/@manaflair/redux-batch/build/core/reduxBatch.js");

Object.defineProperty(exports, "reduxBatch", ({
  enumerable: true,
  get: function get() {
    return _reduxBatch.reduxBatch;
  }
}));

/***/ }),

/***/ "./node_modules/@manaflair/redux-batch/build/core/reduxBatch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@manaflair/redux-batch/build/core/reduxBatch.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.reduxBatch = reduxBatch;
function reduxBatch(next) {

    var nextListeners = [];
    var currentListeners = undefined;

    function ensureCanMutateNextListeners() {

        if (nextListeners === currentListeners) {
            nextListeners = nextListeners.slice();
        }
    }

    function subscribe(listener) {

        if (typeof listener !== "function") throw new Error("Invalid listener, expected a function");

        var isSubscribed = true;

        ensureCanMutateNextListeners();
        nextListeners.push(listener);

        return function unsubscribe() {

            if (!isSubscribed) return;

            ensureCanMutateNextListeners();
            nextListeners.splice(nextListeners.indexOf(listener), 1);

            isSubscribed = false;
        };
    }

    function notifyListeners() {

        var listeners = nextListeners;

        for (var t = 0; t < listeners.length; ++t) {
            currentListeners = listeners;
            listeners[t]();
        }
    }

    return function () {

        var store = next.apply(undefined, arguments);

        var receivedNotification = false;
        var inDispatch = false;

        function dispatchRecurse(action) {

            return Array.isArray(action) ? action.map(function (subAction) {
                return dispatchRecurse(subAction);
            }) : store.dispatch(action);
        }

        function dispatch(action) {

            var reentrant = inDispatch;

            if (!reentrant) {
                receivedNotification = false;
                inDispatch = true;
            }

            var result = dispatchRecurse(action);
            var requiresNotification = receivedNotification && !reentrant;

            if (!reentrant) {
                receivedNotification = false;
                inDispatch = false;
            }

            if (requiresNotification) notifyListeners();

            return result;
        }

        store.subscribe(function () {

            if (inDispatch) {
                receivedNotification = true;
            } else {
                notifyListeners();
            }
        });

        return Object.assign({}, store, {
            dispatch: dispatch, subscribe: subscribe
        });
    };
}

/***/ }),

/***/ "./node_modules/@manaflair/redux-batch/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@manaflair/redux-batch/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./build/core */ "./node_modules/@manaflair/redux-batch/build/core/index.js");


/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "persistor": () => (/* binding */ persistor)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _manaflair_redux_batch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @manaflair/redux-batch */ "./node_modules/@manaflair/redux-batch/index.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ "./src/redux/rootReducer.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





// import logger from "redux-logger";

var sagaMiddleware = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
var middleware = [].concat(_toConsumableArray((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultMiddleware)({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true
})), [sagaMiddleware
// logger
]);

// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(logger);
// }

var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_3__.rootReducer,
  middleware: middleware,
  devTools: "development" !== "production",
  enhancers: [_manaflair_redux_batch__WEBPACK_IMPORTED_MODULE_1__.reduxBatch]
});

/**
 * @see https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
 * @see https://github.com/rt2zz/redux-persist#persistor-object
 */
var persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_2__.persistStore)(store);
sagaMiddleware.run(_rootReducer__WEBPACK_IMPORTED_MODULE_3__.rootSaga);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7dd470c323f929213f05")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5fe6c1e44337490d72c2.hot-update.js.map