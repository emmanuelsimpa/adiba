import * as React from "react";
import { secondaryNavigation } from "./ChannelsMenu";

export default function SidebarSecondary() {
  return (
    <div className='space-y-1'>
      <h3
        className='px-3 text-sm font-medium text-gray-500 w-fit'
        id='projects-headline'
      >
        Projects
      </h3>
      <div
        className='space-y-1'
        role='group'
        aria-labelledby='projects-headline'
      >
        {secondaryNavigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className='group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          >
            <span className='truncate'>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
