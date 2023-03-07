import { startLoadingPilets } from "piral-base";
import { PiletApi, SetRoute } from "piral-core";
import * as React from "react";
import Forgotpassword from "../member/forgotpassword";
import SignIn from "../member/login";
import SignUp from "../member/SignUp";
import DashboardT from "./shared/components/layouts/dashboard";
import ChannelsEngineDashboard from "./shared/components/pages/ChannelsEngineDashboard";
import Settings from "./shared/components/pages/Settings";
import MasterLayout from "./shared/MasterLayout/MasterLayout";
import UserMgtForm from "./shared/member/UserMgtForm";

export function setupShell(app: PiletApi) {
  console.log("meta", app.meta);
  //   LAYOUTS REGISTRATION
  app.registerPageLayout("dashboard", ({ children }) => (
    <MasterLayout content={children} />
  ));

  app.registerPageLayout("landing", ({ children }) => (
    <>
      <div>Header Landing</div>
      <div>Navigation </div>
      {children}
      <div> footer </div>
    </>
  ));

  app.registerPageLayout("member-login", ({ children }) => (
    <UserMgtForm
      content={children}
      title={"Sign in to your account"}
      subtitle={"Or start your 14-day free trial"}
    />
  ));

  app.registerPageLayout("member-signup", ({ children }) => (
    <UserMgtForm
      content={children}
      title={"Client Enrollment Wizard"}
      subtitle={"Fill in client information to begin registration"}
    />
  ));

  app.registerPageLayout("member-forgotpassword", ({ children }) => (
    <UserMgtForm
      content={children}
      title={"Forgot Password"}
      subtitle={
        "Provide your email address and we will send you a link to reset your password"
      }
    />
  ));
  app.registerPage("/login", SignIn, {
    layout: "member-login",
  });
  app.registerPage("/sign-up", SignUp, {
    layout: "member-signup",
  });
  app.registerPage("/forgetpassword", Forgotpassword, {
    layout: "member-forgotpassword",
  });
  app.registerPage("/dashboard", DashboardT, {
    layout: "dashboard",
  });
  app.registerPage("/settings", Settings, {
    layout: "dashboard",
  });
  app.registerPage("/channels", ChannelsEngineDashboard, {
    layout: "dashboard",
  });
}
