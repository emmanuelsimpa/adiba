"use strict";
self["webpackHotUpdateadiba_central"]("main",{

/***/ "./src/_app/app.tsx":
/*!**************************!*\
  !*** ./src/_app/app.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setupShell": () => (/* binding */ setupShell)
/* harmony export */ });
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../landing */ "./src/landing/index.tsx");
/* harmony import */ var _shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/layouts/landing */ "./src/_app/shared/components/layouts/landing.tsx");


// import { Landing } from "./shared/components/layouts/landing";
function setupShell(app) {
  app.registerPageLayout("standard", _shared_components_layouts_landing__WEBPACK_IMPORTED_MODULE_1__["default"]);
  //   ({ children }) => {
  //     console.log({ children: children });
  //     return (
  //       <>
  //         {/* <Header />
  //       <Navigation /> */}
  //         {children}
  //         {/* <Footer /> */}
  //       </>
  //     );
  //   });
  //   app.registerPageLayout("standard", (children) => (
  //     <Landing children={children} />
  //   ));
  app.registerPage("/land", _landing__WEBPACK_IMPORTED_MODULE_0__["default"], {
    layout: "standard"
  });
}

/***/ }),

/***/ "./src/_app/shared/components/layouts/landing.tsx":
/*!********************************************************!*\
  !*** ./src/_app/shared/components/layouts/landing.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// interface Props {
//   children: any | JSX.Element;
// }
var Landing = function Landing(children) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Hello World !!!!!!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);
// export const Landing: Partial<ComponentsState> = {
//   ErrorInfo: (props) => (
//     <div>
//       <h1>Error</h1>
//       <SwitchErrorInfo {...props} />
//     </div>
//   ),
//   DashboardContainer: ({ children }) => (
//     <div>
//       <h1>Hello, world!</h1>
//       <p>Welcome to your new microfrontend app shell, built with:</p>
//       <div className='tiles'>{children}</div>
//     </div>
//   ),
//   DashboardTile: ({ columns, rows, children }) => (
//     <div className={`tile cols-${columns} rows-${rows}`}>{children}</div>
//   ),
//   Layout: ({ children }) => (
//     <div>
//       <Notifications />
//       <Menu type='general' />
//       <div className='container'>{children}</div>
//     </div>
//   ),
//   MenuContainer: ({ children }) => {
//     const [collapsed, setCollapsed] = React.useState(true);
//     return (
//       <header>
//         <nav className='navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3'>
//           <div className='container'>
//             <Link className='navbar-brand' to='/'>
//               Piral
//             </Link>
//             <button
//               aria-label='Toggle navigation'
//               type='button'
//               onClick={() => setCollapsed(!collapsed)}
//               className='navbar-toggler mr-2'
//             >
//               <span className='navbar-toggler-icon' />
//             </button>
//             <div
//               className={`collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ${
//                 collapsed ? "" : "show"
//               }`}
//               aria-expanded={!collapsed}
//             >
//               <ul className='navbar-nav flex-grow'>{children}</ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//     );
//   },
//   NotificationsHost: ({ children }) => (
//     <div className='notifications'>{children}</div>
//   ),
//   NotificationsToast: ({ options, onClose, children }) => (
//     <div className={`notification-toast ${options.type}`}>
//       <div className='notification-toast-details'>
//         {options.title && (
//           <div className='notification-toast-title'>{options.title}</div>
//         )}
//         <div className='notification-toast-description'>{children}</div>
//       </div>
//       <div className='notification-toast-close' onClick={onClose} />
//     </div>
//   ),
// };

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b631a0549c9c7c8f9772")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.d2b6b4105c7938ccbdf4.hot-update.js.map