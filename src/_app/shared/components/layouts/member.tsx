import * as React from "react";
import { ComponentsState, Notifications, SwitchErrorInfo } from "piral";
import SignIn from "../../../../member/login";

// export const errors: Partial<ErrorComponentsState> = {
//   not_found: () => (
//     <div>
//       <p className='error'>
//         Could not find the requested page. Are you sure it exists?
//       </p>
//       <p>
//         Go back <Link to='/'>to the dashboard</Link>.
//       </p>
//     </div>
//   ),
// };

export const Memeber: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => {
    console.log("ln 86", children);
    return <SignIn />;
  },
  Layout: ({ children }) => (
    <div>
      <Notifications />
      {/* <Menu type='general' /> */}
      <div>{children}</div>
    </div>
  ),
};
