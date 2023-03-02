import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { countries } from "../../_app/shared/utils/country";
import { request_license } from "../redux/_redux/authCrud";

const initialValues = {
  name: "",
  street: "",
  streetTwo: "",
  city: "",
  country: "",
  website: "",
  contactName: "",
  email: "",
  mobile: "",
  function: "",
};

const Administrator = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = (values) => {
    console.log("handleSubmit", values);
    props.next(values);
  };

  const passwordRegex = RegExp(
    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
  );
  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const stepOneValidation = Yup.object({
    first_name: Yup.string().min(3).required("First Name is required"),
    last_name: Yup.string().min(3).required("last Name is required"),
    phone_number: Yup.string()
      .min(3)
      .required("last Name is required")
      .matches(phoneRegex, "Invalid phone"),
    license_number: Yup.string().min(3).required("license_number is required"),
    email_address: Yup.string()
      .email("Not a proper email")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Minimum eight characters, at least one letter, one number and one special character"
      ),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });
  console.log(countries);
  const requestLicense = (values) => {
    const data = {
      company: {
        name: values.name,
        street: values.street,
        street2: values.streetTwo,
        city: values.city,
        country: values.country,
        website: values.website,
      },
      contact: {
        name: values.contactName,
        email: values.email,
        mobile: values.mobile,
        function: values.function,
      },
    };
    console.log(data);
    request_license(data)
      .then((response) => console.log("submit", response))
      .catch((err) => console.log(err));
  };

  const renderError = (message) => <p className='text-red-600'>{message}</p>;

  const handleModal = showModal ? (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          {/*content*/}
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <button
              type='button'
              className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'
              onClick={() => setShowModal(false)}
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='sr-only' onClick={() => setShowModal(false)}>
                Close modal
              </span>
            </button>
            <div className='px-6 py-6 lg:px-8'>
              <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                Fill in to receive your Licenese Number
              </h3>
              <Formik initialValues={initialValues} onSubmit={requestLicense}>
                <Form className='space-y-6' action='#'>
                  <div className='flex justify-between space-x-3'>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Company Name
                      </label>
                      <Field
                        name='name'
                        placeholder='name@company.com'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Street Name
                      </label>
                      <Field
                        name='street'
                        placeholder='street address'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between space-x-3'>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Street Address
                      </label>
                      <Field
                        name='streetTwo'
                        placeholder='street address two'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        City
                      </label>
                      <Field
                        name='city'
                        placeholder='city'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between space-x-3'>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Country
                      </label>
                      <Field
                        name='country'
                        as='select'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      >
                        {countries.map((item) => (
                          <option value={item.code}>{item.name}</option>
                        ))}
                      </Field>
                    </div>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Website
                      </label>
                      <Field
                        name='website'
                        placeholder='company website'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between space-x-3'>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your Name
                      </label>
                      <Field
                        name='contactName'
                        placeholder='Joshua Faithful'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='email'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your email
                      </label>
                      <Field
                        name='email'
                        placeholder='name@company.com'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                  </div>
                  <div className='flex justify-between space-x-3'>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your Phone Number
                      </label>
                      <Field
                        name='mobile'
                        placeholder='09023134563'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='text'
                        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                      >
                        Your function
                      </label>
                      <Field
                        name='function'
                        placeholder='C.T.O'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                      />
                    </div>
                  </div>
                  <button
                    type='submit'
                    className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                  >
                    Submit to get License
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  ) : null;

  return (
    <>
      {handleModal}
      <Formik
        initialValues={props.data}
        validationSchema={stepOneValidation}
        onSubmit={handleSubmit}
      >
        {() => (
          <>
            <div className='md:col-span-1 mb-5'>
              <div className='px-4 sm:px-0'>
                <h3 className='text-lg font-medium leading-6 text-gray-900'>
                  Personal Information
                </h3>
                <p className='mt-1 text-sm text-gray-600'>
                  Use a permanent address where you can receive mail.
                </p>
              </div>
            </div>
            <div className='mt-5 md:col-span-2 md:mt-0'>
              <Form>
                <div className='overflow-hidden shadow sm:rounded-md'>
                  <div className='bg-white px-4 py-5 sm:p-6'>
                    {/* begin: Alert */}
                    {/* end: Alert */}
                    <div className='grid grid-cols-6 gap-6'>
                      {/* BEGIN: First Name */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='first-name'
                          className='block text-sm font-medium text-gray-700'
                        >
                          First name
                        </label>
                        <Field
                          name='first_name'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage render={renderError} name='first_name' />
                      </div>
                      {/* END: First Name */}

                      {/* BEGIN: Last name */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='last-name'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Last name
                        </label>
                        <Field
                          name='last_name'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage render={renderError} name='last_name' />
                      </div>
                      {/* END: Last name */}

                      {/* begin: Email */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='first-name'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Email Address
                        </label>
                        <Field
                          name='email_address'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage
                          render={renderError}
                          name='email_address'
                        />
                      </div>
                      {/* end: Email */}

                      {/* BEGIN: Phone Number */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='phone-number'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Phone Number
                        </label>
                        <Field
                          name='phone_number'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage
                          render={renderError}
                          name='phone_number'
                        />
                      </div>
                      {/* END: Phone Number */}

                      {/* BEGIN: License Number */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='license-number'
                          className='block text-sm font-medium text-gray-700'
                        >
                          License Number
                        </label>
                        <Field
                          name='license_number'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage
                          render={renderError}
                          name='license_number'
                        />
                      </div>
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='license-number'
                          className='mb-1 block text-sm font-medium text-gray-700'
                        >
                          Request License Number
                        </label>
                        <button
                          onClick={() => setShowModal(true)}
                          className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                          type='button'
                        >
                          Open Request
                        </button>
                        {/* <button 
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                        Open Request
                      </button> */}
                        {/* <Field
                        name='license_number'
                        className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                      <ErrorMessage
                        render={renderError}
                        name='license_number'
                      /> */}
                      </div>
                      {/* END: License Number */}

                      {/* BEGIN: Password */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='password'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Password
                        </label>
                        <Field
                          name='password'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage render={renderError} name='password' />
                      </div>
                      {/* END: Password */}
                      <div className='col-span-6 sm:col-span-3'>
                        <label
                          htmlFor='confirm-password'
                          className='block text-sm font-medium text-gray-700'
                        >
                          Confirm Password
                        </label>
                        <Field
                          name='passwordConfirmation'
                          className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        />
                        <ErrorMessage
                          render={renderError}
                          name='passwordConfirmation'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      <span>Next</span>
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </>
        )}
      </Formik>
    </>
  );
};

export default Administrator;
