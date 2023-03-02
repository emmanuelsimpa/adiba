"use strict";
self["webpackHotUpdateadiba_central"]("main",{

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
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
/* harmony import */ var _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/shared/components/layouts/default */ "./src/_app/shared/components/layouts/default.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var _redux_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/index */ "./src/redux/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







// import { store } from "./reduxsss/store";




// change to your feed URL here (either using feed.piral.cloud or your own service)
var feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
var instance = (0,piral__WEBPACK_IMPORTED_MODULE_8__.createInstance)({
  state: {
    components: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.layout,
    errorComponents: _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__.errors
    // routes: {
    //   "/": Landing,
    // },
  },

  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_9__.createStandardApi)()), [(0,piral_page_layouts__WEBPACK_IMPORTED_MODULE_10__.createPageLayoutsApi)()]),
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});
(0,_app_app__WEBPACK_IMPORTED_MODULE_2__.setupShell)(instance.root);
// _redux.setupAxios(axios, store);
_redux_index__WEBPACK_IMPORTED_MODULE_6__.setupAxios(axios__WEBPACK_IMPORTED_MODULE_11__["default"], _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]);
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector("#app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__.PersistGate, {
  persistor: _redux_store__WEBPACK_IMPORTED_MODULE_5__.persistor
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_12__.Piral, {
  instance: instance
}))));

/***/ }),

/***/ "./node_modules/redux-persist/es/integration/react.js":
/*!************************************************************!*\
  !*** ./node_modules/redux-persist/es/integration/react.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersistGate": () => (/* binding */ PersistGate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // eslint-disable-line import/no-unresolved

var PersistGate =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(PersistGate, _PureComponent);

  function PersistGate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PersistGate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PersistGate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      bootstrapped: false
    });

    _defineProperty(_assertThisInitialized(_this), "_unsubscribe", void 0);

    _defineProperty(_assertThisInitialized(_this), "handlePersistorState", function () {
      var persistor = _this.props.persistor;

      var _persistor$getState = persistor.getState(),
          bootstrapped = _persistor$getState.bootstrapped;

      if (bootstrapped) {
        if (_this.props.onBeforeLift) {
          Promise.resolve(_this.props.onBeforeLift()).finally(function () {
            return _this.setState({
              bootstrapped: true
            });
          });
        } else {
          _this.setState({
            bootstrapped: true
          });
        }

        _this._unsubscribe && _this._unsubscribe();
      }
    });

    return _this;
  }

  _createClass(PersistGate, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
      this.handlePersistorState();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: "render",
    value: function render() {
      if (true) {
        if (typeof this.props.children === 'function' && this.props.loading) console.error('redux-persist: PersistGate expects either a function child or loading prop, but not both. The loading prop will be ignored.');
      }

      if (typeof this.props.children === 'function') {
        return this.props.children(this.state.bootstrapped);
      }

      return this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]);

  return PersistGate;
}(react__WEBPACK_IMPORTED_MODULE_0__.PureComponent);

_defineProperty(PersistGate, "defaultProps", {
  children: null,
  loading: null
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d6fcd3581bbcbdfb4b45")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.0ff40be47a0802cfc248.hot-update.js.map