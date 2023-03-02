import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch } from "../../redux/hook";
// import UserMgtViewModel from "../../_app/shared/ViewModels/UserMgtViewModel";
import { logins } from "../redux/_redux/authCrud";
import * as auth from "../redux/_redux/authRedux";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

interface SignInViewModel {
  email: string;
  password: string;
}

const initialValues: SignInViewModel = {
  email: "",
  password: "",
};

export default function SignInContent() {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("EMAIL.VALIDATION.REQUIRED_FIELD"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("PASSWORD.VALIDATION.REQUIRED_FIELD"),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      enableLoading();
      setStatus("");
      logins({ email: values.email, password: values.password })
        .then((response) => {
          disableLoading();
          setSubmitting(false);
          var data = response.data;
          if (response.status === 200) {
            dispatch(auth.actions.login(data));
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          disableLoading();
          setStatus("Invalid response");
          console.log(error);
        });
    },
  });

  return (
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
      <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
        <form
          className='space-y-6'
          action='#'
          method='POST'
          onSubmit={formik.handleSubmit}
        >
          {formik.status ? (
            <div className='mb-10 alert alert-custom alert-light-danger alert-dismissible'>
              <div className='text-sm font-medium text-gray-700'>
                {formik.status}
              </div>
            </div>
          ) : null}

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
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                {...formik.getFieldProps("email")}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>{formik.errors.email}</div>
              </div>
            ) : null}
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <div className='mt-1'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                className='block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                {...formik.getFieldProps("password")}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>{formik.errors.password}</div>
              </div>
            ) : null}
          </div>

          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                id='remember-me'
                name='remember-me'
                type='checkbox'
                className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
              />
              <label
                htmlFor='remember-me'
                className='ml-2 block text-sm text-gray-900'
              >
                Remember me
              </label>
            </div>

            <div className='text-sm'>
              <Link
                to='/forgetpassword'
                className='font-medium text-indigo-600 hover:text-indigo-500'
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              id='kt_login_signin_submit'
              type='submit'
              disabled={formik.isSubmitting}
              className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm'
              style={{
                width: "-webkit-fill-available",
              }}
            >
              <span>Login</span>
              {loading && (
                <span className='ml-3 spinner spinner-white'>...</span>
              )}
            </button>

            {/* <button
              type='submit'
              className='flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            >
              Sign in
            </button> */}
          </div>
        </form>

        <div className='mt-6 flex items-center justify-between'>
          <div className='text-sm'>
            <Link
              to='/sign-up'
              className='font-medium text-indigo-600 hover:text-indigo-500'
            >
              Not yet registered? Enroll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default connect(null, auth.actions)(SignInContent);
