import * as React from "react";
import { useHistory } from "react-router";

export interface NavigationList {
  name: string;
  href: string;
  icon: any;
  current: boolean;
}

interface SidebarProps {
  navList?: Array<NavigationList>;
  classFn: any;
}

export default function SidebarMain(
  props: React.PropsWithChildren<SidebarProps>
) {
  const { navList, classFn } = props;
  const history = useHistory();

  return (
    <div className='space-y-1'>
      {navList?.map((item) => (
        <a
          key={item.name}
          // href={item.href}
          onClick={() => history.push(`${item.href}`)}
          className={classFn(
            item.current
              ? "bg-gray-100 text-gray-900"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
            "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
          )}
        >
          <item.icon
            className={classFn(
              item.current
                ? "text-gray-500"
                : "text-gray-400 group-hover:text-gray-500",
              "mr-3 flex-shrink-0 h-6 w-6"
            )}
            aria-hidden='true'
          />
          {item.name}
        </a>
      ))}
    </div>
  );
}
