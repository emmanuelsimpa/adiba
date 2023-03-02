import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

interface PageBreadCrumbsProps {
  PageBreadCrumbs: PageBreadCrumbs[];
}

interface PageBreadCrumbs {
  name: string;
  href: string;
}

export default function Breadcrumb(props: PageBreadCrumbsProps) {
  const { PageBreadCrumbs } = props;

  return (
    <div>
      <div className='md:pt-4'>
        <nav className='sm:hidden' aria-label='Back'>
          <a
            href='#'
            className='flex items-center text-sm font-medium text-gray-500 hover:text-gray-700'
          >
            <ChevronLeftIcon
              className='-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400'
              aria-hidden='true'
            />
            Back
          </a>
        </nav>
        <nav className='hidden sm:flex' aria-label='Breadcrumb'>
          <ol className='flex items-center space-x-4'>
            {PageBreadCrumbs.map((item, idx) => (
              <li key={idx}>
                <div className='flex'>
                  {idx > 0 && (
                    <ChevronRightIcon
                      className='h-5 w-5 flex-shrink-0 text-gray-400'
                      aria-hidden='true'
                    />
                  )}
                  <a
                    href={item.href}
                    className={
                      idx > 0
                        ? "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        : "text-sm font-medium text-gray-500 hover:text-gray-700"
                    }
                  >
                    {item.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
