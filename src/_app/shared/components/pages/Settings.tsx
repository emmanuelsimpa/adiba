import * as React from "react";
import { Component, PropsWithChildren } from "react";
import Breadcrumb from "../../Breadcrumb";
import Tabs from "../../Tabs";
import PasswordSettings from "../SettingsContents/BillingSettings";
import GeneralSettings from "../SettingsContents/GeneralSettings";
import NotificationsSettings from "../SettingsContents/NotificationSettings";
import PlanSettings from "../SettingsContents/PlanSettings";
import CompanySettings from "../SettingsContents/CompanySettings";
import ConnectionSettings from "../SettingsContents/ConnectionSettings";
import BillingSettings from "../SettingsContents/BillingSettings";
import TeamMembersSettings from "../SettingsContents/TeamMembersSettings";

const tabs = [
  { name: "General", href: "#", current: true, content: <GeneralSettings /> },
  {
    name: "Password",
    href: "#",
    current: false,
    content: <PasswordSettings />,
  },
  {
    name: "Notifications",
    href: "#",
    current: false,
    content: <NotificationsSettings />,
  },
  { name: "Plan", href: "#", current: false, content: <PlanSettings /> },
  { name: "Billing", href: "#", current: false, content: <BillingSettings /> },
  {
    name: "Team Members",
    href: "#",
    current: false,
    content: <TeamMembersSettings />,
  },
  {
    name: "Company Settings",
    href: "#",
    current: false,
    content: <CompanySettings />,
  },
  {
    name: "Connections",
    href: "#",
    current: false,
    content: <ConnectionSettings />,
  },
];

const settingsBreadCrumbs = [
  { name: "Home", href: "/" },
  { name: "Settings", href: "#" },
];

interface SettingsComponenntProp {
  content?: React.ReactNode;
}

export function SettingsComponennt(
  props: PropsWithChildren<SettingsComponenntProp>
) {
  const { content } = props;

  return (
    <>
      <Breadcrumb PageBreadCrumbs={settingsBreadCrumbs} />
      <div>
        {/* Content area */}
        <div className='md:pl-16'>
          <div className='flex max-w-4xl flex-col md:px-8 xl:px-0'>
            <main className='flex-1'>
              <div className='relative mx-auto max-w-4xl md:px-8 xl:px-0'>
                <div className='pt-10 pb-16'>
                  <div className='px-4 sm:px-6 md:px-0'>
                    <h1 className='text-3xl font-bold tracking-tight text-gray-900'>
                      Settings
                    </h1>
                  </div>
                  <div className='px-4 sm:px-6 md:px-0'>
                    <div className='py-6'>
                      {/* Tabs */}
                      <Tabs content={content} tabs={tabs} />
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Settings() {
  return <SettingsComponennt content={<GeneralSettings />} />;
}
