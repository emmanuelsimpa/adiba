"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/redux/__mocks__/mockAuth.js":
/*!************************************************!*\
  !*** ./src/member/redux/__mocks__/mockAuth.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mockAuth)
/* harmony export */ });
/* harmony import */ var _redux_authCrud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_redux/authCrud */ "./src/member/redux/_redux/authCrud.js");
/* harmony import */ var _userTableMock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userTableMock */ "./src/member/redux/__mocks__/userTableMock.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


function mockAuth(mock) {
  mock.onPost(_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__.LOGIN_URL).reply(function (_ref) {
    var data = _ref.data;
    var _JSON$parse = JSON.parse(data),
      email = _JSON$parse.email,
      password = _JSON$parse.password;
    if (email && password) {
      var user = _userTableMock__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (x) {
        return x.email.toLowerCase() === email.toLowerCase() && x.password === password;
      });
      if (user) {
        return [200, _objectSpread(_objectSpread({}, user), {}, {
          password: undefined
        })];
      }
    }
    return [400];
  });
  mock.onPost(_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__.REGISTER_URL).reply(function (_ref2) {
    var data = _ref2.data;
    var _JSON$parse2 = JSON.parse(data),
      email = _JSON$parse2.email,
      fullname = _JSON$parse2.fullname,
      username = _JSON$parse2.username,
      password = _JSON$parse2.password;
    if (email && fullname && username && password) {
      var user = {
        id: generateUserId(),
        email: email,
        fullname: fullname,
        username: username,
        password: password,
        roles: [2],
        // Manager
        accessToken: "access-token-" + Math.random(),
        refreshToken: "access-token-" + Math.random(),
        pic: process.env.PUBLIC_URL + "/media/users/default.jpg"
      };
      _userTableMock__WEBPACK_IMPORTED_MODULE_1__["default"].push(user);
      return [200, _objectSpread(_objectSpread({}, user), {}, {
        password: undefined
      })];
    }
    return [400];
  });
  mock.onPost(_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__.REQUEST_PASSWORD_URL).reply(function (_ref3) {
    var data = _ref3.data;
    var _JSON$parse3 = JSON.parse(data),
      email = _JSON$parse3.email;
    if (email) {
      var user = _userTableMock__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (x) {
        return x.email.toLowerCase() === email.toLowerCase();
      });
      if (user) {
        user.password = undefined;
        return [200, _objectSpread(_objectSpread({}, user), {}, {
          password: undefined
        })];
      }
    }
    return [400];
  });
  mock.onGet(_redux_authCrud__WEBPACK_IMPORTED_MODULE_0__.ME_URL).reply(function (_ref4) {
    var Authorization = _ref4.headers.Authorization;
    var accessToken = Authorization && Authorization.startsWith("Bearer ") && Authorization.slice("Bearer ".length);
    if (accessToken) {
      var user = _userTableMock__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (x) {
        return x.accessToken === accessToken;
      });
      if (user) {
        return [200, _objectSpread(_objectSpread({}, user), {}, {
          password: undefined
        })];
      }
    }
    return [401];
  });
  function generateUserId() {
    var ids = _userTableMock__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (el) {
      return el.id;
    });
    var maxId = Math.max.apply(Math, _toConsumableArray(ids));
    return maxId + 1;
  }
}

/***/ }),

/***/ "./src/member/redux/__mocks__/userTableMock.js":
/*!*****************************************************!*\
  !*** ./src/member/redux/__mocks__/userTableMock.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../_metronic/_helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  id: 1,
  username: "admin",
  password: "demo",
  email: "admin@demo.com",
  accessToken: "access-token-8f3ae836da744329a6f93bf20594b5cc",
  refreshToken: "access-token-f8c137a2c98743f48b643e71161d90aa",
  roles: [1],
  // Administrator
  pic: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../_metronic/_helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("/media/users/300_25.jpg"),
  fullname: "Sean",
  occupation: "CEO",
  companyName: "Keenthemes",
  phone: "456669067890",
  address: {
    addressLine: "L-12-20 Vertex, Cybersquare",
    city: "San Francisco",
    state: "California",
    postCode: "45000"
  },
  socialNetworks: {
    linkedIn: "https://linkedin.com/admin",
    facebook: "https://facebook.com/admin",
    twitter: "https://twitter.com/admin",
    instagram: "https://instagram.com/admin"
  }
}, {
  id: 2,
  username: "user",
  password: "demo",
  email: "user@demo.com",
  accessToken: "access-token-6829bba69dd3421d8762-991e9e806dbf",
  refreshToken: "access-token-f8e4c61a318e4d618b6c199ef96b9e55",
  roles: [2],
  // Manager
  pic: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../_metronic/_helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("/media/users/100_2.jpg"),
  fullname: "Megan",
  occupation: "Deputy Head of Keenthemes in New York office",
  companyName: "Keenthemes",
  phone: "456669067891",
  address: {
    addressLine: "3487  Ingram Road",
    city: "Greensboro",
    state: "North Carolina",
    postCode: "27409"
  },
  socialNetworks: {
    linkedIn: "https://linkedin.com/user",
    facebook: "https://facebook.com/user",
    twitter: "https://twitter.com/user",
    instagram: "https://instagram.com/user"
  }
}, {
  id: 3,
  username: "guest",
  password: "demo",
  email: "guest@demo.com",
  accessToken: "access-token-d2dff7b82f784de584b60964abbe45b9",
  refreshToken: "access-token-c999ccfe74aa40d0aa1a64c5e620c1a5",
  roles: [3],
  // Guest
  pic: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../_metronic/_helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("/media/users/default.jpg"),
  fullname: "Ginobili Maccari",
  occupation: "CFO",
  companyName: "Keenthemes",
  phone: "456669067892",
  address: {
    addressLine: "1467  Griffin Street",
    city: "Phoenix",
    state: "Arizona",
    postCode: "85012"
  },
  socialNetworks: {
    linkedIn: "https://linkedin.com/guest",
    facebook: "https://facebook.com/guest",
    twitter: "https://twitter.com/guest",
    instagram: "https://instagram.com/guest"
  }
}]);

/***/ }),

/***/ "./src/member/redux/_redux/authCrud.js":
/*!*********************************************!*\
  !*** ./src/member/redux/_redux/authCrud.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOGIN_URL": () => (/* binding */ LOGIN_URL),
/* harmony export */   "ME_URL": () => (/* binding */ ME_URL),
/* harmony export */   "REGISTER_URL": () => (/* binding */ REGISTER_URL),
/* harmony export */   "REQUEST_PASSWORD_URL": () => (/* binding */ REQUEST_PASSWORD_URL),
/* harmony export */   "URL": () => (/* binding */ URL),
/* harmony export */   "changePassword": () => (/* binding */ changePassword),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "refresh_token": () => (/* binding */ refresh_token),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "requestPassword": () => (/* binding */ requestPassword),
/* harmony export */   "resend_confirmation": () => (/* binding */ resend_confirmation),
/* harmony export */   "reset_password": () => (/* binding */ reset_password),
/* harmony export */   "send_pin": () => (/* binding */ send_pin),
/* harmony export */   "send_pin_forgot": () => (/* binding */ send_pin_forgot)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

var URL = "http://localhost:3112/";
var LOGIN_URL = URL + "login";
var REGISTER_URL = URL + "signup";
var REQUEST_PASSWORD_URL = URL + "api/auth/forgot-password";
var ME_URL = URL + "user/profile";
function login(data) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(LOGIN_URL, data);
}
function resend_confirmation(data) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("".concat(URL, "auth/resend-confirm-code"), data);
}
function send_pin(data) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("".concat(URL, "auth/confirm-code"), data);
}
function send_pin_forgot(data) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("".concat(URL, "auth/forgot-password"), data);
}
function reset_password(data) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("".concat(URL, "auth/reset-password"), data);
}
function register(data) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(REGISTER_URL, data);
}
function requestPassword(email) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(REQUEST_PASSWORD_URL, {
    email: email
  });
}
function changePassword(body) {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(URL + "auth/user/change_pass", body);
}
function refresh_token() {
  return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(URL + "auth/refresh-token", {});
}

/***/ }),

/***/ "./src/redux/__mocks__/mockAxios.js":
/*!******************************************!*\
  !*** ./src/redux/__mocks__/mockAxios.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mockAxios)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios-mock-adapter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _member_redux_mocks_mockAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../member/redux/__mocks__/mockAuth */ "./src/member/redux/__mocks__/mockAuth.js");


function mockAxios(axios) {
  var mock = new Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios-mock-adapter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(axios, {
    delayResponse: 300
  });
  (0,_member_redux_mocks_mockAuth__WEBPACK_IMPORTED_MODULE_1__["default"])(mock);
  return mock;
}

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mockAxios": () => (/* reexport safe */ _mocks_mockAxios__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _mocks_mockAxios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__mocks__/mockAxios */ "./src/redux/__mocks__/mockAxios.js");

// export {default as setupAxios} from "./setupAxios";

/***/ }),

/***/ "./src/redux/rootReducer.js":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer),
/* harmony export */   "rootSaga": () => (/* binding */ rootSaga)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga/effects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authRedux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Dashbord/_redux/dashboard/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Incidents/_redux/incidents/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Agents/_redux/accounts/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Billing/_redux/billing/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/User/_redux/customers/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Businesses/_redux/incidents/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(rootSaga);









var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  auth: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authRedux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  dashboard: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Dashbord/_redux/dashboard/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  alert: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Incidents/_redux/incidents/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  customers: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/User/_redux/customers/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  accounts: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Agents/_redux/accounts/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  billing: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Billing/_redux/billing/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  business: Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Businesses/_redux/incidents/Slice'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
});
function rootSaga() {
  return _regeneratorRuntime().wrap(function rootSaga$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-saga/effects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())([Object(function webpackMissingModule() { var e = new Error("Cannot find module '../app/modules/Auth/_redux/authRedux'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()]);
      case 2:
      case "end":
        return _context.stop();
    }
  }, _marked);
}

/***/ }),

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
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'redux-logger'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






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
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/createInstance.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! piral */ "./node_modules/piral-ext/esm/create.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/Piral.js");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_app/app */ "./src/_app/app.tsx");
/* harmony import */ var piral_page_layouts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! piral-page-layouts */ "./node_modules/piral-page-layouts/esm/create.js");
/* harmony import */ var _app_shared_components_layouts_default__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_app/shared/components/layouts/default */ "./src/_app/shared/components/layouts/default.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux */ "./src/redux/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
_redux__WEBPACK_IMPORTED_MODULE_6__.setupAxios(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]);
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(document.querySelector("#app"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(PersistGate, {
  persistor: _redux_store__WEBPACK_IMPORTED_MODULE_5__.persistor
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_11__.Piral, {
  instance: instance
}))));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f66e3c38932513baa58b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.3413f47a850ddd564c46.hot-update.js.map