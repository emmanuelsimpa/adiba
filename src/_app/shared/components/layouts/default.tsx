import * as React from "react";
import { Link } from "react-router-dom";
import {
  ComponentsState,
  ErrorComponentsState,
  Notifications,
  SwitchErrorInfo,
} from "piral";
import Landing from "../../../../landing";

export const errors: Partial<ErrorComponentsState> = {
  not_found: () => (
    <div>
      <p className='error'>
        Could not find the requested page. Are you sure it exists?
      </p>
      <p>
        Go back <Link to='/'>to the dashboard</Link>.
      </p>
    </div>
  ),
};

export const layout: Partial<ComponentsState> = {
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: ({ children }) => {
    return <Landing />;
    // return<MasterLayout content={children} />
  },
  Layout: ({ children }) => (
    <div>
      <Notifications />
      {/* <Menu type='general' /> */}
      <div>{children}</div>
    </div>
  ),
};
