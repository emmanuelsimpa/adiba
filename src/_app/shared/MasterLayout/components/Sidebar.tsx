import SidebarMain from "./SidebarMain";
import * as React from "react";
import MasterLayoutViewModel from "../ViewModels/MasterLayoutViewModel";
import SidebarInstance from "../ViewModels/MasterLayoutViewModel";
import { CurrentAppContext } from "./FlyoutMenu";
import { classNames } from "../../utils/className";
import SidebarSecondary from "../../SidebarSecondary";
import { setIcon } from "../../ChannelsMenu";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [result, setResult] = React.useState([]);
  const currentApp = localStorage.getItem("currentApp") || null;
  React.useEffect(() => {
    const clientsViewModelsInstance = new MasterLayoutViewModel("nav");
    const navList = clientsViewModelsInstance.navList(currentApp);
    navList
      .then((response: any) => response.json())
      .then((data: any) => {
        const updatedData = data.map((item: any) => {
          return {
            ...item,
            icon: setIcon(item.icon),
          };
        });
        setResult(updatedData);
      });
  }, []);

  console.log("ln 30", result);
  return (
    <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className='flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5 pb-4'>
        <div className='flex flex-shrink-0 items-center px-4'>
          <Link to='/dashboard'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company'
            />
          </Link>
        </div>
        <div className='mt-5 flex flex-grow flex-col'>
          <nav className='flex-1 space-y-8 bg-white px-2' aria-label='Sidebar'>
            <SidebarMain classFn={classNames} navList={result} />
            <SidebarSecondary />
          </nav>
        </div>
      </div>
    </div>
  );
}
