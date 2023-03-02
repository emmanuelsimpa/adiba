import * as React from "react";
import { Switch } from "@headlessui/react";
import { classNames } from "./utils/className";

interface InlineEditProps {
  title?: string;
  type?: string;
  defaultValue?: string;
  // setValue?: React.SetStateAction<any>
}

function InlineEdit(props: React.PropsWithChildren<InlineEditProps>) {
  const [radioChecked, setRadioChecked] = React.useState(true);

  const { title, type, defaultValue } = props;

  const [value, setValue] = React.useState(defaultValue);

  const [editMode, setEditMode] = React.useState(false);

  const onChange = (event: any) => setValue(event.target.value);

  const onKeyDown = (event: any) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
      setEditMode(false);
    }
  };

  const onImageChange = (event: any) => {
    setValue(URL.createObjectURL(event.target.files[0]));
  };

  switch (type) {
    case "image":
      return (
        <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
          <dt className='text-sm font-medium text-gray-500'>{title}</dt>
          <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
            <span className='flex-grow'>
              <img className='h-8 w-8 rounded-full' src={value} alt='' />
              <input
                id='imgPreview'
                type='file'
                accept='image/*'
                onChange={onImageChange}
                hidden
              />
            </span>
            <span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
              <button
                type='button'
                onClick={() => document.getElementById("imgPreview")?.click()}
                className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              >
                Update
              </button>
              <span className='text-gray-300' aria-hidden='true'>
                |
              </span>
              <button
                type='button'
                onClick={() => setValue("")}
                className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              >
                Remove
              </button>
            </span>
          </dd>
        </div>
      );
    case "email":
      return (
        <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
          <dt className='text-sm font-medium text-gray-500'>{title}</dt>
          <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
            {editMode ? (
              <input
                className='flex-grow py-3 pl-3'
                defaultValue={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
            ) : (
              <span className='flex-grow'>{value}</span>
            )}
            <span className='ml-4 flex-shrink-0'>
              <button
                type='button'
                onClick={() => setEditMode(editMode ? false : true)}
                className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              >
                Update
              </button>
            </span>
          </dd>
        </div>
      );
    case "date":
      return (
        <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'>
          <dt className='text-sm font-medium text-gray-500'>{title}</dt>
          <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
            <span className='flex-grow'>{value}</span>
            {/* <input id="datePreviewer" className="flex-grow" type='date'/> */}
            <span className='ml-4 flex flex-shrink-0 items-start space-x-4'>
              <button
                type='button'
                className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              >
                Update
              </button>
              <span className='text-gray-300' aria-hidden='true'>
                |
              </span>
              <button
                type='button'
                className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              >
                Remove
              </button>
            </span>
          </dd>
        </div>
      );
    case "radio":
      return (
        <Switch.Group
          as='div'
          className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5'
        >
          <Switch.Label
            as='dt'
            className='text-sm font-medium text-gray-500'
            passive
          >
            {title}
          </Switch.Label>
          <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
            <Switch
              checked={radioChecked}
              onChange={setRadioChecked}
              className={classNames(
                radioChecked ? "bg-purple-600" : "bg-gray-200",
                "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
              )}
            >
              <span
                aria-hidden='true'
                className={classNames(
                  radioChecked ? "translate-x-5" : "translate-x-0",
                  "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                )}
              />
            </Switch>
          </dd>
        </Switch.Group>
      );
    default:
      return (
        <div className='py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5'>
          <dt className='text-sm font-medium text-gray-500'>{title}</dt>
          <dd className='mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
            {editMode ? (
              <input
                className='flex-grow py-3 pl-3'
                defaultValue={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
              />
            ) : (
              <span className='flex-grow'>{value}</span>
            )}
            <span className='ml-4 flex-shrink-0'>
              <button
                type='button'
                onClick={() => setEditMode(editMode ? false : true)}
                className='rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2'
              >
                Update
              </button>
            </span>
          </dd>
        </div>
      );
  }
}

export default InlineEdit;
