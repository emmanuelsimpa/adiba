import * as React from "react";
import { Menu } from "@headlessui/react";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import SlideOver from '../../../../components/SlideOver';
import FlyoutMenu from "./FlyoutMenu";
import CommandPalette from "../../CommandPalette";
import SlideOver from "../../SlideOver";

export default function Topbar() {
  const [open, setOpen] = React.useState(false);
  const [openPalette, setOpenPalette] = React.useState(false);
  const [content, setContent] = React.useState("profile");

  return (
    <>
      <div className='flex flex-1 justify-between px-4'>
        <div className='flex flex-1'>
          <div className='flex w-full md:ml-0'>
            <div className='flex items-center w-full text-gray-400 focus-within:text-gray-600'>
              <FlyoutMenu />
            </div>
          </div>
        </div>
        <div className='ml-4 flex items-center md:ml-6'>
          <button
            type='button'
            className='rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={() => {
              setOpenPalette(true);
            }}
          >
            <span className='sr-only'>Search</span>
            <MagnifyingGlassIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={() => {
              setOpen(true);
              setContent("messages");
            }}
          >
            <span className='sr-only'>View messages</span>
            <EnvelopeIcon className='h-6 w-6' aria-hidden='true' />
          </button>
          <button
            type='button'
            className='rounded-full bg-white m-1 p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={() => {
              setOpen(true);
              setContent("notifications");
            }}
          >
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='relative ml-3'>
            <div>
              <Menu.Button
                className='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                onClick={() => {
                  setOpen(true);
                  setContent("profile");
                }}
              >
                <span className='sr-only'>Open user menu</span>
                <img
                  className='h-8 w-8 rounded-full'
                  src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
              </Menu.Button>
            </div>
            <SlideOver open={open} setOpen={setOpen} content={content} />
            <CommandPalette
              openPalette={openPalette}
              setOpenPalette={setOpenPalette}
            />
          </Menu>
        </div>
      </div>
    </>
  );
}
