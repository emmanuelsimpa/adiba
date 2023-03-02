"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/member/forms/SignInContent.tsx":
/*!********************************************!*\
  !*** ./src/member/forms/SignInContent.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SignInContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _redux_hook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/hook */ "./src/redux/hook.ts");
/* harmony import */ var _redux_redux_authCrud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/_redux/authCrud */ "./src/member/redux/_redux/authCrud.js");
/* harmony import */ var _redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/_redux/authRedux */ "./src/member/redux/_redux/authRedux.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// import UserMgtViewModel from "../../_app/shared/ViewModels/UserMgtViewModel";





var initialValues = {
  email: "",
  password: ""
};
function SignInContent() {
  var dispatch = (0,_redux_hook__WEBPACK_IMPORTED_MODULE_1__.useAppDispatch)();
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useHistory)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var LoginSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
    email: yup__WEBPACK_IMPORTED_MODULE_5__.string().email("Wrong email format").min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("AUTH.VALIDATION.REQUIRED_FIELD"),
    password: yup__WEBPACK_IMPORTED_MODULE_5__.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("AUTH.VALIDATION.REQUIRED_FIELD")
  });
  var enableLoading = function enableLoading() {
    setLoading(true);
  };
  var disableLoading = function disableLoading() {
    setLoading(false);
  };
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_4__.useFormik)({
    initialValues: initialValues,
    validationSchema: LoginSchema,
    onSubmit: function onSubmit(values, _ref) {
      var setStatus = _ref.setStatus,
        setSubmitting = _ref.setSubmitting;
      enableLoading();
      setStatus("");
      (0,_redux_redux_authCrud__WEBPACK_IMPORTED_MODULE_2__.logins)({
        email: values.email,
        password: values.password
      }).then(function (response) {
        disableLoading();
        setSubmitting(false);
        var data = response.data;
        if (response.status === 200) {
          dispatch(_redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_3__.actions.login(data));
          history.push("/dashboard");
        }
      })["catch"](function (error) {
        disableLoading();
        setStatus("Invalid response");
        console.log(error);
      });
    }
  });
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
      email: "",
      password: ""
    }),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    viewModel = _React$useState2[0],
    setViewModel = _React$useState2[1];
  var handleChange = function handleChange(event) {
    setViewModel(Object.assign(Object.assign({}, viewModel), _defineProperty({}, event.target.name, event.target.value)));
  };
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var email = viewModel.email,
      password = viewModel.password;
    (0,_redux_redux_authCrud__WEBPACK_IMPORTED_MODULE_2__.logins)({
      email: email,
      password: password
    }).then(function (response) {
      var data = response.data;
      if (response.status === 200) {
        dispatch(_redux_redux_authRedux__WEBPACK_IMPORTED_MODULE_3__.actions.login(data));
        history.push("/dashboard");
      }
    })["catch"](function (error) {
      console.log(error);
    });
    // const data = { email, password };
    // const clientsViewModelsInstance = new UserMgtViewModel("signin");
    // const signIn = clientsViewModelsInstance.signIn(data);
    // signIn.then((response: any) => {
    //   if (response.status == 200) {
    //     location.href = "/";
    //   } else {
    //     location.href = ".";
    //   }
    // });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-8 sm:mx-auto sm:w-full sm:max-w-md'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: 'space-y-6',
    action: '#',
    method: 'POST',
    // onSubmit={handleSubmit}
    onSubmit: formik.handleSubmit
  }, formik.status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mb-10 alert alert-custom alert-light-danger alert-dismissible'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm font-medium text-gray-700'
  }, formik.status)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'email',
    className: 'block text-sm font-medium text-gray-700'
  }, "Email address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({
    id: 'email',
    // onChange={handleChange}
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    className: 'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
  }, formik.getFieldProps("email")))), formik.touched.email && formik.errors.email ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.email)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'password',
    className: 'block text-sm font-medium text-gray-700'
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-1'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", Object.assign({
    id: 'password',
    // onChange={handleChange}
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    className: 'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
  }, formik.getFieldProps("password")))), formik.touched.password && formik.errors.password ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-plugins-message-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'fv-help-block'
  }, formik.errors.password)) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    id: 'remember-me',
    name: 'remember-me',
    type: 'checkbox',
    className: 'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    htmlFor: 'remember-me',
    className: 'ml-2 block text-sm text-gray-900'
  }, "Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: '/forgetpassword',
    className: 'font-medium text-indigo-600 hover:text-indigo-500'
  }, "Forgot your password?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    id: 'kt_login_signin_submit',
    type: 'submit',
    disabled: formik.isSubmitting,
    className: 'flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm',
    style: {
      width: "-webkit-fill-available"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Login"), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: 'ml-3 spinner spinner-white'
  }, "...")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-6 flex items-center justify-between'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {
    to: '/sign-up',
    className: 'font-medium text-indigo-600 hover:text-indigo-500'
  }, "Not yet registered? Enroll")))));
}
// export default connect(null, auth.actions)(SignInContent);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3dc02385fe308c7f4df8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5bf01f48a2556638726a.hot-update.js.map