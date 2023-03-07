import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import { LinkIcon } from "@heroicons/react/20/solid";
import { useHistory } from "react-router";

export default function Profile() {
  const history = useHistory();
  return (
    <div>
      <div className='pb-1 sm:pb-6'>
        <div>
          <div className='relative h-40 sm:h-56'>
            <img
              className='absolute h-full w-full object-cover'
              src='https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=600&q=80'
              alt=''
            />
          </div>
          <div className='mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6'>
            <div className='sm:flex-1'>
              <div>
                <div className='flex items-center'>
                  <h3 className='text-xl font-bold text-gray-900 sm:text-2xl'>
                    Ashley Porter
                  </h3>
                  <span className='ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400'>
                    <span className='sr-only'>Online</span>
                  </span>
                </div>
                <p className='text-sm text-gray-500'>@ashleyporter</p>
              </div>
              <div className='mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3'>
                <button
                  onClick={() => history.push("/settings")}
                  type='button'
                  className='inline-flex w-full flex-shrink-0 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:flex-1'
                >
                  Profile
                </button>
                <button
                  onClick={() => history.push("/login")}
                  type='button'
                  className='inline-flex w-full flex-1 items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Sign Out
                </button>
                <div className='ml-3 inline-flex sm:ml-0'>
                  <Menu as='div' className='relative inline-block text-left'>
                    <Menu.Button className='inline-flex items-center rounded-md border border-gray-300 bg-white p-2 text-sm font-medium text-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                      <span className='sr-only'>Copy profile link</span>
                      <LinkIcon className='h-5 w-5' aria-hidden='true' />
                    </Menu.Button>
                    {/* <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    View profile
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="#"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Copy profile link
                                    </a>
                                )}
                                </Menu.Item>
                                <Menu.Item>
                                {({ active }) => (
                                    <a
                                    href="/user/signin"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                    >
                                    Sign Out
                                    </a>
                                )}
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition> */}
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-4 pt-5 pb-5 sm:px-0 sm:pt-0'>
        <dl className='space-y-8 px-4 sm:space-y-6 sm:px-6'>
          <div>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
              Bio
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
              <p>
                Enim feugiat ut ipsum, neque ut. Tristique mi id elementum
                praesent. Gravida in tempus feugiat netus enim aliquet a, quam
                scelerisque. Dictumst in convallis nec in bibendum aenean arcu.
              </p>
            </dd>
          </div>
          <div>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
              Location
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
              New York, NY, USA
            </dd>
          </div>
          <div>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
              Website
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
              ashleyporter.com
            </dd>
          </div>
          <div>
            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
              Birthday
            </dt>
            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
              <time dateTime='1988-06-23'>June 23, 1988</time>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
