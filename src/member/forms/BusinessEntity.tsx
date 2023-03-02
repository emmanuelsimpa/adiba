import { ErrorMessage, Field, Form, Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";

const BusinessEntity = (props) => {
  const handleSubmit = (values) => {
    props.next(values);
  };

  const urlRegex = RegExp(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
  );

  const businessValidation = Yup.object({
    business_name: Yup.string().min(3).required("Business Name is required"),
    business_address: Yup.string()
      .min(10)
      .required("Business Address is required"),
    business_url: Yup.string()
      .matches(urlRegex, "Enter correct url!")
      .required("Please enter website"),
    business_email: Yup.string()
      .email("Not a proper email")
      .required("Email is required"),
  });

  const renderError = (message) => <p className='text-red-600'>{message}</p>;

  return (
    <Formik
      initialValues={props.data}
      validationSchema={businessValidation}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <>
          <div className='md:col-span-1 mb-5'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Business Entity
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Please provide information about the business you're signing up
                for.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <Form>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-6'>
                      <label
                        htmlFor='business-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Business Name
                      </label>
                      <Field
                        name='business_name'
                        className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                      <ErrorMessage render={renderError} name='business_name' />
                    </div>

                    <div className='col-span-6 sm:col-span-6'>
                      <label
                        htmlFor='business-address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Business Address
                      </label>
                      <Field
                        name='business_address'
                        className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                      <ErrorMessage
                        render={renderError}
                        name='business_address'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Business Email
                      </label>
                      <Field
                        name='business_email'
                        className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                      <ErrorMessage
                        render={renderError}
                        name='business_email'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='business-url'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Business URL
                      </label>
                      <Field
                        name='business_url'
                        className='mt-1 block w-full border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue
                        rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      />
                      <ErrorMessage render={renderError} name='business_url' />
                    </div>
                  </div>
                </div>
                <div className='flex justify-between bg-gray-50'>
                  <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                    <button
                      onClick={() => props.prev(values)}
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Previous
                    </button>
                  </div>
                  <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                    <button
                      type='submit'
                      className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </>
      )}
    </Formik>
  );
};

export default BusinessEntity;
