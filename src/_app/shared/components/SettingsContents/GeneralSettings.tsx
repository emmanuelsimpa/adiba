import * as React from "react";
import InlineEdit from "../../InlineEdit";

const ProfileFields = [
  { title: "Name", type: "text", defaultValue: "John Doe" },
  {
    title: "Photo",
    type: "image",
    defaultValue:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  { title: "Email", type: "email", defaultValue: "chelsea.hagon@example.com" },
  { title: "Job Title", type: "text", defaultValue: "Software Developer" },
];

const AccountFields = [
  { title: "Language", type: "text", defaultValue: "English" },
  { title: "Date Format", type: "date", defaultValue: "DD-MM-YYYY" },
  { title: "Automatic Timezone", type: "radio", defaultValue: "" },
  { title: "Auto-update applicant data", type: "radio", defaultValue: "" },
];

export default function GeneralSettings() {
  return (
    <div>
      <div className='mt-10 divide-y divide-gray-200'>
        <div className='space-y-1'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Profile
          </h3>
          <p className='max-w-2xl text-sm text-gray-500'>
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>
        <div className='mt-6'>
          <dl className='divide-y divide-gray-200'>
            {ProfileFields.map((item, idx) => (
              <InlineEdit
                title={item.title}
                type={item.type}
                defaultValue={item.defaultValue}
                key={idx}
              />
            ))}
          </dl>
        </div>
      </div>

      <div className='mt-10 divide-y divide-gray-200'>
        <div className='space-y-1'>
          <h3 className='text-lg font-medium leading-6 text-gray-900'>
            Account
          </h3>
          <p className='max-w-2xl text-sm text-gray-500'>
            Manage how information is displayed on your account.
          </p>
        </div>
        <div className='mt-6'>
          <dl className='divide-y divide-gray-200'>
            {AccountFields.map((item, idx) => (
              <InlineEdit
                title={item.title}
                type={item.type}
                defaultValue={item.defaultValue}
                key={idx}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
