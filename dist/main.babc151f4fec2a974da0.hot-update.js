self["webpackHotUpdateadiba_central"]("main",{

/***/ "./node_modules/axios-mock-adapter/src/handle_request.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios-mock-adapter/src/handle_request.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios-mock-adapter/src/utils.js");

function transformRequest(data) {
  if (
    utils.isArrayBuffer(data) ||
    utils.isBuffer(data) ||
    utils.isStream(data) ||
    utils.isBlob(data)
  ) {
    return data;
  }

  // Object and Array: returns a deep copy
  if (utils.isObjectOrArray(data)) {
    return JSON.parse(JSON.stringify(data));
  }

  // for primitives like string, undefined, null, number
  return data;
}

function makeResponse(result, config) {
  return {
    status: result[0],
    data: transformRequest(result[1]),
    headers: result[2],
    config: config,
    request: {
      responseURL: config.url,
    },
  };
}

function handleRequest(mockAdapter, resolve, reject, config) {
  var url = config.url || "";
  // TODO we're not hitting this `if` in any of the tests, investigate
  if (
    config.baseURL &&
    url.substr(0, config.baseURL.length) === config.baseURL
  ) {
    url = url.slice(config.baseURL.length);
  }

  delete config.adapter;
  mockAdapter.history[config.method].push(config);

  var handler = utils.findHandler(
    mockAdapter.handlers,
    config.method,
    url,
    config.data,
    config.params,
    config.headers,
    config.baseURL
  );

  if (handler) {
    if (handler.length === 7) {
      utils.purgeIfReplyOnce(mockAdapter, handler);
    }

    if (handler.length === 2) {
      // passThrough handler
      mockAdapter.originalAdapter(config).then(resolve, reject);
    } else if (typeof handler[3] !== "function") {
      utils.settle(
        resolve,
        reject,
        makeResponse(handler.slice(3), config),
        mockAdapter.delayResponse
      );
    } else {
      var result = handler[3](config);
      // TODO throw a sane exception when return value is incorrect
      if (typeof result.then !== "function") {
        utils.settle(
          resolve,
          reject,
          makeResponse(result, config),
          mockAdapter.delayResponse
        );
      } else {
        result.then(
          function (result) {
            if (result.config && result.status) {
              utils.settle(
                resolve,
                reject,
                makeResponse(
                  [result.status, result.data, result.headers],
                  result.config
                ),
                0
              );
            } else {
              utils.settle(
                resolve,
                reject,
                makeResponse(result, config),
                mockAdapter.delayResponse
              );
            }
          },
          function (error) {
            if (mockAdapter.delayResponse > 0) {
              setTimeout(function () {
                reject(error);
              }, mockAdapter.delayResponse);
            } else {
              reject(error);
            }
          }
        );
      }
    }
  } else {
    // handler not found
    switch (mockAdapter.onNoMatch) {
      case "passthrough":
        mockAdapter.originalAdapter(config).then(resolve, reject);
        break;
      case "throwException":
        throw utils.createCouldNotFindMockError(config);
      default:
        utils.settle(
          resolve,
          reject,
          {
            status: 404,
            config: config,
          },
          mockAdapter.delayResponse
        );
    }
  }
}

module.exports = handleRequest;


/***/ }),

/***/ "./node_modules/axios-mock-adapter/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/axios-mock-adapter/src/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var handleRequest = __webpack_require__(/*! ./handle_request */ "./node_modules/axios-mock-adapter/src/handle_request.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios-mock-adapter/src/utils.js");

var VERBS = [
  "get",
  "post",
  "head",
  "delete",
  "patch",
  "put",
  "options",
  "list",
  "link",
  "unlink",
];

function adapter() {
  return function (config) {
    var mockAdapter = this;
    return new Promise(function (resolve, reject) {
      handleRequest(mockAdapter, resolve, reject, config);
    });
  }.bind(this);
}

function getVerbObject() {
  return VERBS.reduce(function (accumulator, verb) {
    accumulator[verb] = [];
    return accumulator;
  }, {});
}

function reset() {
  resetHandlers.call(this);
  resetHistory.call(this);
}

function resetHandlers() {
  this.handlers = getVerbObject();
}

function resetHistory() {
  this.history = getVerbObject();
}

function MockAdapter(axiosInstance, options) {
  reset.call(this);

  if (axiosInstance) {
    this.axiosInstance = axiosInstance;
    this.originalAdapter = axiosInstance.defaults.adapter;
    this.delayResponse =
      options && options.delayResponse > 0 ? options.delayResponse : null;
    this.onNoMatch = (options && options.onNoMatch) || null;
    axiosInstance.defaults.adapter = this.adapter.call(this);
  } else {
    throw new Error("Please provide an instance of axios to mock");
  }
}

MockAdapter.prototype.adapter = adapter;

MockAdapter.prototype.restore = function restore() {
  if (this.axiosInstance) {
    this.axiosInstance.defaults.adapter = this.originalAdapter;
    this.axiosInstance = undefined;
  }
};

MockAdapter.prototype.reset = reset;
MockAdapter.prototype.resetHandlers = resetHandlers;
MockAdapter.prototype.resetHistory = resetHistory;

VERBS.concat("any").forEach(function (method) {
  var methodName = "on" + method.charAt(0).toUpperCase() + method.slice(1);
  MockAdapter.prototype[methodName] = function (matcher, body, requestHeaders) {
    var _this = this;
    var matcher = matcher === undefined ? /.*/ : matcher;

    function reply(code, response, headers) {
      var handler = [matcher, body, requestHeaders, code, response, headers];
      addHandler(method, _this.handlers, handler);
      return _this;
    }

    function replyOnce(code, response, headers) {
      var handler = [
        matcher,
        body,
        requestHeaders,
        code,
        response,
        headers,
        true,
      ];
      addHandler(method, _this.handlers, handler);
      return _this;
    }

    return {
      reply: reply,

      replyOnce: replyOnce,

      passThrough: function passThrough() {
        var handler = [matcher, body];
        addHandler(method, _this.handlers, handler);
        return _this;
      },

      abortRequest: function () {
        return reply(function (config) {
          var error = utils.createAxiosError(
            "Request aborted",
            config,
            undefined,
            "ECONNABORTED"
          );
          return Promise.reject(error);
        });
      },

      abortRequestOnce: function () {
        return replyOnce(function (config) {
          var error = utils.createAxiosError(
            "Request aborted",
            config,
            undefined,
            "ECONNABORTED"
          );
          return Promise.reject(error);
        });
      },

      networkError: function () {
        return reply(function (config) {
          var error = utils.createAxiosError("Network Error", config);
          return Promise.reject(error);
        });
      },

      networkErrorOnce: function () {
        return replyOnce(function (config) {
          var error = utils.createAxiosError("Network Error", config);
          return Promise.reject(error);
        });
      },

      timeout: function () {
        return reply(function (config) {
          var error = utils.createAxiosError(
            config.timeoutErrorMessage ||
              "timeout of " + config.timeout + "ms exceeded",
            config,
            undefined,
            "ECONNABORTED"
          );
          return Promise.reject(error);
        });
      },

      timeoutOnce: function () {
        return replyOnce(function (config) {
          var error = utils.createAxiosError(
            config.timeoutErrorMessage ||
              "timeout of " + config.timeout + "ms exceeded",
            config,
            undefined,
            "ECONNABORTED"
          );
          return Promise.reject(error);
        });
      },
    };
  };
});

function findInHandlers(method, handlers, handler) {
  var index = -1;
  for (var i = 0; i < handlers[method].length; i += 1) {
    var item = handlers[method][i];
    var isReplyOnce = item.length === 7;
    var comparePaths =
      item[0] instanceof RegExp && handler[0] instanceof RegExp
        ? String(item[0]) === String(handler[0])
        : item[0] === handler[0];
    var isSame =
      comparePaths &&
      utils.isEqual(item[1], handler[1]) &&
      utils.isEqual(item[2], handler[2]);
    if (isSame && !isReplyOnce) {
      index = i;
    }
  }
  return index;
}

function addHandler(method, handlers, handler) {
  if (method === "any") {
    VERBS.forEach(function (verb) {
      handlers[verb].push(handler);
    });
  } else {
    var indexOfExistingHandler = findInHandlers(method, handlers, handler);
    if (indexOfExistingHandler > -1 && handler.length < 7) {
      handlers[method].splice(indexOfExistingHandler, 1, handler);
    } else {
      handlers[method].push(handler);
    }
  }
}

module.exports = MockAdapter;
module.exports["default"] = MockAdapter;


/***/ }),

/***/ "./node_modules/axios-mock-adapter/src/is_blob.js":
/*!********************************************************!*\
  !*** ./node_modules/axios-mock-adapter/src/is_blob.js ***!
  \********************************************************/
/***/ ((module) => {

/*!
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function isBlob(value) {
  if (typeof Blob === 'undefined') {
    return false;
  }

  return value instanceof Blob || Object.prototype.toString.call(value) === '[object Blob]';
}

module.exports = isBlob;


/***/ }),

/***/ "./node_modules/axios-mock-adapter/src/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/axios-mock-adapter/src/utils.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
var isEqual = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");
var isBlob = __webpack_require__(/*! ./is_blob */ "./node_modules/axios-mock-adapter/src/is_blob.js");
var toString = Object.prototype.toString;

function find(array, predicate) {
  var length = array.length;
  for (var i = 0; i < length; i++) {
    var value = array[i];
    if (predicate(value)) return value;
  }
}

function isFunction(val) {
  return toString.call(val) === "[object Function]";
}

function isObjectOrArray(val) {
  return val !== null && typeof val === "object";
}

function isStream(val) {
  return isObjectOrArray(val) && isFunction(val.pipe);
}

function isArrayBuffer(val) {
  return toString.call(val) === "[object ArrayBuffer]";
}

function combineUrls(baseURL, url) {
  if (baseURL) {
    return baseURL.replace(/\/+$/, "") + "/" + url.replace(/^\/+/, "");
  }

  return url;
}

function findHandler(
  handlers,
  method,
  url,
  body,
  parameters,
  headers,
  baseURL
) {
  return find(handlers[method.toLowerCase()], function (handler) {
    if (typeof handler[0] === "string") {
      return (
        (isUrlMatching(url, handler[0]) ||
          isUrlMatching(combineUrls(baseURL, url), handler[0])) &&
        isBodyOrParametersMatching(method, body, parameters, handler[1]) &&
        isObjectMatching(headers, handler[2])
      );
    } else if (handler[0] instanceof RegExp) {
      return (
        (handler[0].test(url) || handler[0].test(combineUrls(baseURL, url))) &&
        isBodyOrParametersMatching(method, body, parameters, handler[1]) &&
        isObjectMatching(headers, handler[2])
      );
    }
  });
}

function isUrlMatching(url, required) {
  var noSlashUrl = url[0] === "/" ? url.substr(1) : url;
  var noSlashRequired = required[0] === "/" ? required.substr(1) : required;
  return noSlashUrl === noSlashRequired;
}

function isBodyOrParametersMatching(method, body, parameters, required) {
  var allowedParamsMethods = ["delete", "get", "head", "options"];
  if (allowedParamsMethods.indexOf(method.toLowerCase()) >= 0) {
    var data = required ? required.data : undefined;
    var params = required ? required.params : undefined;
    return isObjectMatching(parameters, params) && isBodyMatching(body, data);
  } else {
    return isBodyMatching(body, required);
  }
}

function isObjectMatching(actual, expected) {
  if (expected === undefined) return true;
  if (typeof expected.asymmetricMatch === "function") {
    return expected.asymmetricMatch(actual);
  }
  return isEqual(actual, expected);
}

function isBodyMatching(body, requiredBody) {
  if (requiredBody === undefined) {
    return true;
  }
  var parsedBody;
  try {
    parsedBody = JSON.parse(body);
  } catch (e) {}

  return isObjectMatching(parsedBody ? parsedBody : body, requiredBody);
}

function purgeIfReplyOnce(mock, handler) {
  Object.keys(mock.handlers).forEach(function (key) {
    var index = mock.handlers[key].indexOf(handler);
    if (index > -1) {
      mock.handlers[key].splice(index, 1);
    }
  });
}

function settle(resolve, reject, response, delay) {
  if (delay > 0) {
    setTimeout(settle, delay, resolve, reject, response);
    return;
  }

  if (
    !response.config.validateStatus ||
    response.config.validateStatus(response.status)
  ) {
    resolve(response);
  } else {
    reject(
      createAxiosError(
        "Request failed with status code " + response.status,
        response.config,
        response
      )
    );
  }
}

function createAxiosError(message, config, response, code) {
  // axios v0.27.0+ defines AxiosError as constructor
  if (typeof axios.AxiosError === "function") {
    return axios.AxiosError.from(new Error(message), code, config, null, response);
  }

  // handling for axios v0.26.1 and below
  var error = new Error(message);
  error.isAxiosError = true;
  error.config = config;
  if (response !== undefined) {
    error.response = response;
  }
  if (code !== undefined) {
    error.code = code;
  }

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
    };
  };
  return error;
}

function createCouldNotFindMockError(config) {
  var message =
    "Could not find mock for: \n" +
    JSON.stringify(config, ["method", "url"], 2);
  var error = new Error(message);
  error.isCouldNotFindMockError = true;
  error.url = config.url;
  error.method = config.method;
  return error;
}

module.exports = {
  find: find,
  findHandler: findHandler,
  purgeIfReplyOnce: purgeIfReplyOnce,
  settle: settle,
  isStream: isStream,
  isArrayBuffer: isArrayBuffer,
  isFunction: isFunction,
  isObjectOrArray: isObjectOrArray,
  isBuffer: isBuffer,
  isBlob: isBlob,
  isBodyOrParametersMatching: isBodyOrParametersMatching,
  isEqual: isEqual,
  createAxiosError: createAxiosError,
  createCouldNotFindMockError: createCouldNotFindMockError,
};


/***/ }),

/***/ "./src/member/redux/_redux/authRedux.js":
/*!**********************************************!*\
  !*** ./src/member/redux/_redux/authRedux.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionTypes": () => (/* binding */ actionTypes),
/* harmony export */   "actions": () => (/* binding */ actions),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "saga": () => (/* binding */ saga)
/* harmony export */ });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _authCrud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authCrud */ "./src/member/redux/_redux/authCrud.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _marked = /*#__PURE__*/_regeneratorRuntime().mark(saga);
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  OrgLoaded: "REQUEST ORG",
  Error: "Set Error",
  RESET_TOKEN: "[RESET] TOKEN"
};
var initialAuthState = {
  user: undefined,
  organization: undefined,
  authToken: undefined,
  error: null
};
function forwardTo(location) {
  history.push(location);
}
var reducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_0__.persistReducer)({
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__["default"],
  key: "v706-demo3-auth",
  whitelist: ["user", "authToken", "organization"]
}, function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialAuthState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case actionTypes.Login:
      {
        var authToken = action.payload.authToken;
        return {
          authToken: authToken,
          user: undefined
        };
      }
    case actionTypes.Register:
      {
        var _authToken = action.payload.authToken;
        return {
          authToken: _authToken,
          user: undefined
        };
      }
    case actionTypes.Logout:
      {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }
    case actionTypes.RESET_TOKEN:
      {
        var _authToken2 = action.payload.authToken;
        return _objectSpread(_objectSpread({}, state), {}, {
          authToken: _authToken2
        });
      }
    case actionTypes.UserLoaded:
      {
        var user = action.payload.user;
        return _objectSpread(_objectSpread({}, state), {}, {
          user: user
        });
      }
    case actionTypes.OrgLoaded:
      {
        var organization = action.payload.organization;
        return _objectSpread(_objectSpread({}, state), {}, {
          organization: organization
        });
      }
    case actionTypes.Error:
      {
        var error = action.payload.error;
        return _objectSpread(_objectSpread({}, state), {}, {
          error: error
        });
      }
    default:
      return state;
  }
});
var actions = {
  login: function login(authToken) {
    return {
      type: actionTypes.Login,
      payload: {
        authToken: authToken
      }
    };
  },
  register: function register(authToken) {
    return {
      type: actionTypes.Register,
      payload: {
        authToken: authToken
      }
    };
  },
  logout: function logout() {
    return {
      type: actionTypes.Logout
    };
  },
  requestUser: function requestUser(user) {
    return {
      type: actionTypes.UserRequested,
      payload: {
        user: user
      }
    };
  },
  fulfillUser: function fulfillUser(user) {
    return {
      type: actionTypes.UserLoaded,
      payload: {
        user: user
      }
    };
  },
  fulfillOrg: function fulfillOrg(data) {
    return {
      type: actionTypes.OrgLoaded,
      payload: {
        organization: data
      }
    };
  },
  fulfillToken: function fulfillToken(authToken) {
    return {
      type: actionTypes.RESET_TOKEN,
      payload: {
        authToken: authToken
      }
    };
  }
};
function saga() {
  return _regeneratorRuntime().wrap(function saga$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(actionTypes.Login, /*#__PURE__*/_regeneratorRuntime().mark(function loginSaga() {
          return _regeneratorRuntime().wrap(function loginSaga$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)(actions.requestUser());
              case 2:
              case "end":
                return _context.stop();
            }
          }, loginSaga);
        }));
      case 2:
        _context4.next = 4;
        return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(actionTypes.Register, /*#__PURE__*/_regeneratorRuntime().mark(function registerSaga() {
          return _regeneratorRuntime().wrap(function registerSaga$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)(actions.requestUser());
              case 2:
              case "end":
                return _context2.stop();
            }
          }, registerSaga);
        }));
      case 4:
        _context4.next = 6;
        return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(actionTypes.UserRequested, /*#__PURE__*/_regeneratorRuntime().mark(function userRequested() {
          var _yield$getUserByToken, data;
          return _regeneratorRuntime().wrap(function userRequested$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0,_authCrud__WEBPACK_IMPORTED_MODULE_3__.getUserByToken)();
              case 2:
                _yield$getUserByToken = _context3.sent;
                data = _yield$getUserByToken.data;
                if (!(data.data.type === "administrator")) {
                  _context3.next = 7;
                  break;
                }
                _context3.next = 7;
                return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)(actions.fulfillUser(data.data));
              case 7:
              case "end":
                return _context3.stop();
            }
          }, userRequested);
        }));
      case 6:
      case "end":
        return _context4.stop();
    }
  }, _marked);
}

/***/ }),

/***/ "./src/redux/__mocks__/mockAxios.js":
/*!******************************************!*\
  !*** ./src/redux/__mocks__/mockAxios.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mockAxios)
/* harmony export */ });
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios-mock-adapter */ "./node_modules/axios-mock-adapter/src/index.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _member_redux_mocks_mockAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../member/redux/__mocks__/mockAuth */ "./src/member/redux/__mocks__/mockAuth.js");


function mockAxios(axios) {
  var mock = new (axios_mock_adapter__WEBPACK_IMPORTED_MODULE_0___default())(axios, {
    delayResponse: 300
  });
  (0,_member_redux_mocks_mockAuth__WEBPACK_IMPORTED_MODULE_1__["default"])(mock);
  return mock;
}

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/***/ ((module) => {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/axios/dist/browser/axios.cjs":
/*!***************************************************!*\
  !*** ./node_modules/axios/dist/browser/axios.cjs ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "59e507f0b9de0547cfdc.cjs";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d9db4ef30bd5f6105504")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.babc151f4fec2a974da0.hot-update.js.map