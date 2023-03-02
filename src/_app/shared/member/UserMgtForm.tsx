import * as React from "react";
import { Link } from "react-router-dom";

interface UserMgtProps {
  content?: React.ReactNode;
  title?: String;
  subtitle?: String;
}

export default function UserMgtForm(
  props: React.PropsWithChildren<UserMgtProps>
) {
  const { content, title, subtitle } = props;

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
      <div className='flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <Link to='/'>
            <img
              className='mx-auto h-12 w-auto'
              src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
              alt='Your Company'
            />
          </Link>
          <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            {title}
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>{subtitle}</p>
        </div>
        {content}
      </div>
    </>
  );
}
