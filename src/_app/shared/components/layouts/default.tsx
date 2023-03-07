import * as React from "react";
import { Link } from "react-router-dom";
import { ComponentsState, ErrorComponentsState, SwitchErrorInfo } from "piral";
import Landing from "../../../../landing";
import Switching from "../../../routes";

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
  LoadingIndicator: () => <div>I'm Loading...</div>,
  ErrorInfo: (props) => (
    <div>
      <h1>Error</h1>
      <SwitchErrorInfo {...props} />
    </div>
  ),
  DashboardContainer: () => {
    return <Landing />;
  },
  // Layout: Switching,
  Layout: ({ children }) => (
    <div>
      <div>{children}</div>
    </div>
  ),
};
