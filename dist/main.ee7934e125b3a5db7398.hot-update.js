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
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.tsx");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
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
    components: _layout__WEBPACK_IMPORTED_MODULE_2__.layout,
    errorComponents: _layout__WEBPACK_IMPORTED_MODULE_2__.errors
  },
  plugins: [].concat(_toConsumableArray((0,piral__WEBPACK_IMPORTED_MODULE_5__.createStandardApi)()), [(0,piral_page_layouts__WEBPACK_IMPORTED_MODULE_6__.createPageLayoutsApi)()]),
  requestPilets: function requestPilets() {
    return fetch(feedUrl).then(function (res) {
      return res.json();
    }).then(function (res) {
      return res.items;
    });
  }
});
(0,_app_app__WEBPACK_IMPORTED_MODULE_3__.setupShell)(instance.root);
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector("#app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_7__.Piral, {
  instance: instance
}));

/***/ }),

/***/ "./node_modules/piral-page-layouts/esm/actions.js":
/*!********************************************************!*\
  !*** ./node_modules/piral-page-layouts/esm/actions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerPageLayout": () => (/* binding */ registerPageLayout),
/* harmony export */   "unregisterPageLayout": () => (/* binding */ unregisterPageLayout)
/* harmony export */ });
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/utils/helpers.js");

function registerPageLayout(ctx, name, value) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { pageLayouts: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withKey)(state.registry.pageLayouts, name, value) }) })));
}
function unregisterPageLayout(ctx, name) {
    ctx.dispatch((state) => (Object.assign(Object.assign({}, state), { registry: Object.assign(Object.assign({}, state.registry), { pageLayouts: (0,piral_core__WEBPACK_IMPORTED_MODULE_0__.withoutKey)(state.registry.pageLayouts, name) }) })));
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "./node_modules/piral-page-layouts/esm/create.js":
/*!*******************************************************!*\
  !*** ./node_modules/piral-page-layouts/esm/create.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPageLayoutsApi": () => (/* binding */ createPageLayoutsApi)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./node_modules/piral-page-layouts/esm/actions.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/utils/react.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/hooks/globalState.js");
/* harmony import */ var piral_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral-core */ "./node_modules/piral-core/esm/state/withApi.js");



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
        const registration = (0,piral_core__WEBPACK_IMPORTED_MODULE_2__.useGlobalState)((s) => s.registry.pageLayouts[layout] || s.registry.pageLayouts[fallback]);
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
        context.defineActions(_actions__WEBPACK_IMPORTED_MODULE_3__);
        context.dispatch(withPageLayouts(getPageLayouts(layouts), fallback));
        return (api) => {
            const pilet = api.meta.name;
            return {
                registerPageLayout(name, pageLayout) {
                    const current = findPageLayout(name);
                    if (!current || current.pilet === pilet) {
                        const component = (0,piral_core__WEBPACK_IMPORTED_MODULE_4__.withApi)(context, pageLayout, api, 'pageLayout');
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9beed99230c948a3e50c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ee7934e125b3a5db7398.hot-update.js.map