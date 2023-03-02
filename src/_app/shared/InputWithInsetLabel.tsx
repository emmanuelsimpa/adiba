import * as React from "react";

interface InputWithInsetLabelProps {
  name?: string;
  inputType?: string;
}

export default function InputWithInsetLabel(
  props: React.PropsWithChildren<InputWithInsetLabelProps>
) {
  const { name, inputType } = props;

  return (
    <div className='rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 sm:mr-4'>
      <label htmlFor='name' className='block text-xs font-medium text-gray-900'>
        {name}
      </label>

      {inputType == "select" ? (
        <select
          name={name}
          id={name}
          className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
        >
          <option>Select ...</option>
        </select>
      ) : (
        <input
          type={inputType || "text"}
          name={name}
          id={name}
          className='block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm'
        />
      )}
    </div>
  );
}
