"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }





// change to your feed URL here (either using feed.piral.cloud or your own service)
var feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
function init() {
  // const store = configureStore();
  // function createApp(pilets: PiletMetadata[]) {
  //   try {
  //     const instance = createInstance({
  //       shareDependencies(deps) {
  //         // Here we export our own module explicitly, since it's not possible to do this via the "externals" property in the package.json
  //         // If this wasn't here, we could only export types to pilets, not functions, classes, etc. due to circular dependency issues.
  //         return {
  //           ...deps,
  //           // "piral-core-redux-saga-demo-shell": require("./exports"),
  //         };
  //       },
  //       // requestPilets: async () => pilets,
  //       plugins: [...createStandardApi()],
  //       state: {
  //         components: layout,
  //         errorComponents: errors,
  //       },
  //     });
  //     setupShell(instance.root);
  //     return <Piral instance={instance} />;
  //   } catch (error) {
  //     return <div>Error page</div>;
  //   }
  // }
  var instance = (0,piral__WEBPACK_IMPORTED_MODULE_4__.createInstance)({
    state: {
      components: _layout__WEBPACK_IMPORTED_MODULE_2__.layout,
      errorComponents: _layout__WEBPACK_IMPORTED_MODULE_2__.errors
    },
    plugins: _toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_5__.createStandardApi)()),
    requestPilets: function requestPilets() {
      return fetch(feedUrl).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.items;
      });
    }
  });
  function App() {
    var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      app = _React$useState2[0],
      setApp = _React$useState2[1];
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
      (0,_app_app__WEBPACK_IMPORTED_MODULE_3__.setupShell)(instance.root);
      /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_6__.Piral, {
        instance: instance
      });
    }, [app]);
    return app;
  }
  var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector("#app"));
  root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null));
}
init();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("71c8bc4f815f6266dade")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.278e7a88bffcad94e81f.hot-update.js.map