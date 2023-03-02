import * as React from "react";
import { Link } from "react-router-dom";
import UserMgtViewModel from "../../_app/shared/ViewModels/UserMgtViewModel";

interface ForgotPasswordModel {
  email: string;
}

export default function ForgotPasswodContent() {
  const [viewModel, setViewModel] = React.useState<ForgotPasswordModel>({
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setViewModel({
      ...viewModel,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email } = viewModel;
    const data = { email };
    console.log(data);
    const clientsViewModelsInstance = new UserMgtViewModel("forgotPassword");
    const signIn = clientsViewModelsInstance.forgotPassword(data);
    signIn.then((response: any) => {
      if (response.status == 200) {
        location.href = "/";
      } else {
        location.href = ".";
      }
    });
  };
  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form
          className='space-y-6'
          action='#'
          method='POST'
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email address
            </label>
            <div className='mt-1'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                onChange={handleChange}
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
              />
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <div className='text-sm'>
              <Link
                to='/sign-up'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Don't have an account? Sign Up Here!
              </Link>
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Reset My Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
