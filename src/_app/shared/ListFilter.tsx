import * as React from "react";
import InputWithInsetLabel from "./InputWithInsetLabel";

interface InputProps {
  name: string;
  inputType?: string;
}

interface ListFilterProps {
  filters?: Array<InputProps>;
}

export default function ListFilter(
  props: React.PropsWithChildren<ListFilterProps>
) {
  const { filters } = props;

  return (
    <>
      <ul
        role='list'
        className='mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4'
      >
        {filters?.map((filter, idx) => (
          <InputWithInsetLabel
            name={filter.name}
            inputType={filter?.inputType}
            key={idx}
          />
        ))}
        <button
          type='button'
          className='max-w-fit inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
        >
          Go
        </button>
      </ul>
    </>
  );
}
