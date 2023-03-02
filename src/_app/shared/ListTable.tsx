import * as React from "react";
import * as _ from "underscore";
// import InputWithInsetLabel from "./InputWithInsetLabel";
import ListFilter from "./ListFilter";
// import Pagination from "./Pagination";

interface ListTableProps {
  title: string;
  subtitle?: string;
  filters?: any;
  actions?: boolean;
  data: object[];
}

export default function ListTable(
  props: React.PropsWithChildren<ListTableProps>
) {
  const { title, subtitle, filters, actions, data } = props;

  const headers = _.keys(data[0]);
  let contents: any = [];
  for (let i = 0; i < data.length; i++) {
    contents.push(_.values(data[i]));
  }

  return (
    <>
      <div className='my-4'>
        {filters ? <ListFilter filters={filters} /> : <></>}
        <div className='sm:flex sm:items-center'>
          <div className='sm:flex-auto'>
            <h1 className='text-xl font-semibold text-gray-900'>{title}</h1>
            {subtitle ? (
              <p className='mt-2 text-sm text-gray-700'>{subtitle}</p>
            ) : (
              <></>
            )}
          </div>
          {actions && (
            <div className='mt-4 sm:mt-1 sm:ml-16 sm:flex-none'>
              <ul role='list' className='mt-3 grid grid-cols-3 gap-1 sm:gap-4'>
                <button
                  key='create'
                  type='button'
                  className='max-w-fit inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
                >
                  Create
                </button>
                <button
                  key='copy'
                  type='button'
                  className='max-w-fit inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
                >
                  Copy
                </button>
                <button
                  key='delete'
                  type='button'
                  className='max-w-fit inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
                >
                  Delete
                </button>
              </ul>
            </div>
          )}
        </div>
        <div className='mt-8 flex flex-col'>
          <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
              <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead className='bg-gray-50'>
                    <tr>
                      {headers.map((header, idx) => (
                        <th
                          key={idx}
                          scope='col'
                          className={
                            idx === 0
                              ? "py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                              : "px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                          }
                        >
                          {header}
                        </th>
                      ))}
                      {actions && (
                        <th
                          scope='col'
                          className='relative py-3 pl-3 pr-4 sm:pr-6'
                        >
                          <span className='sr-only'>Edit</span>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                    {contents?.map((content: any, idx: any) => (
                      <tr key={idx}>
                        {content?.map((content: any, idx: any) => (
                          <td
                            key={idx}
                            className={
                              idx === 0
                                ? "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                                : "whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                            }
                          >
                            {content}
                          </td>
                        ))}
                        {actions && (
                          <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                            <a
                              href='/clients/1'
                              className='text-indigo-600 hover:text-indigo-900'
                            >
                              Edit<span className='sr-only'>edit</span>
                            </a>
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
