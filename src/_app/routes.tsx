import { Dashboard } from "piral";
import { ComponentsState, LayoutProps, SwitchErrorInfo } from "piral-core";
import * as React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Landing from "../landing";
import SignIn from "../member/login";
import DashboardT from "./shared/components/layouts/dashboard";
import ChannelsEngineDashboard from "./shared/components/pages/ChannelsEngineDashboard";
import Settings from "./shared/components/pages/Settings";
import MasterLayout from "./shared/MasterLayout/MasterLayout";

const Switching: React.FC<LayoutProps> = ({ children }) => {
  // let match = useRouteMatch("/");
  console.log({ match: children });
  return (
    <>
      {/* <Landing /> */}
      <Switch>
        <Route path='/' component={Landing} />
        <Route path='/loans' component={DashboardT}>
          <Route path='/settings' component={Settings} />
          <Route path='/channels' component={ChannelsEngineDashboard} />
        </Route>
      </Switch>

      {/* {match.isExact === true ? (
        <Landing />
      ) : (
        <MasterLayout content={<Switch>{children}</Switch>} />
      )} */}
    </>
  );
};

export default Switching;
