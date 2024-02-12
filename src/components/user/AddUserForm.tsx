import { enqueueSnackbar } from 'notistack';
import { ChangeEvent, FormEvent, useState } from 'react';
import Address from '../../assets/address.svg';
import Avatar from '../../assets/avatar.svg';
import { useFormContext, useUsersContext } from '../../contextAPI';
import { FormAction } from '../../states/action.interface';

const AddUserForm = () => {
  const { state, dispatch } = useFormContext();
  const { handleSubmit } = useUsersContext();
  const [submitted, setSubmitted] = useState(false);

  // submit to add new user data
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Check if all required fields are filled before submission
    if (
      state.firstName &&
      state.lastName &&
      state.email &&
      state.company &&
      state.address &&
      state.city
    ) {
      handleSubmit(e);

      // Clear form fields after successful submission
      dispatch({
        type: FormAction.CLEAR,
      });
      setSubmitted(false);
      return enqueueSnackbar('successfully added on last page!', {
        variant: 'success',
      });
    }
  };
  const handleFormInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: FormAction.INPUT,
      payload: { name, value },
    });
  };
  return (
    <section
      id="add_user"
      className="container bg-secondary mx-auto rounded-md mt-20 py-8">
      <h2 className="text-lg font-semibold capitalize text-black text-center mb-5">
        Add User
      </h2>
      <div className="max-w-xl p-6 flex items-center justify-center mx-auto  rounded-md shadow-md bg-white ">
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-3 md:gap-6 mt-4 sm:grid-cols-2 md:text-base text-xs">
            <div>
              <label
                className={`text-gray-700 ${
                  submitted && !state.firstName && 'text-red-500'
                }`}>
                First Name
                <input
                  name="firstName"
                  value={state.firstName}
                  type="text"
                  className={`input-group ${
                    submitted &&
                    !state.firstName &&
                    'border-2 !border-red-500'
                  }`}
                  onChange={handleFormInputChange}
                />
              </label>
            </div>
            <div>
              <label
                className={`text-gray-700 ${
                  submitted && !state.lastName && 'text-red-500'
                }`}>
                Last Name
                <input
                  value={state.lastName}
                  name="lastName"
                  type="text"
                  className={`input-group ${
                    submitted &&
                    !state.lastName &&
                    '!border-2  !border-red-500'
                  }`}
                  onChange={handleFormInputChange}
                />
              </label>
            </div>
            <div>
              <label
                className={`text-gray-700 ${
                  submitted &&
                  !state.email &&
                  '!border-2  text-red-500'
                }`}>
                Email
                <input
                  value={state.email}
                  name="email"
                  type="email"
                  className={`input-group  ${
                    submitted &&
                    !state.email &&
                    '!border-2  !border-red-500'
                  }`}
                  onChange={handleFormInputChange}
                />
              </label>
            </div>
            <div>
              <label
                className={`text-gray-700 ${
                  submitted && !state.company && 'text-red-500'
                }`}>
                Company
                <input
                  value={state.company}
                  name="company"
                  type="text"
                  className={`input-group  ${
                    submitted &&
                    !state.company &&
                    '!border-2  !border-red-500'
                  }`}
                  onChange={handleFormInputChange}
                />
              </label>
            </div>
          </div>
          <div className=" md:mt-5 py-5 ">
            <div className="">
              <label className="relative ">
                <input
                  value={state.address}
                  placeholder="Street Address"
                  type="text"
                  name="address"
                  className={`input-group !pl-10 !border-0 ${
                    submitted &&
                    !state.address &&
                    '!border !border-red-500'
                  }`}
                  onChange={handleFormInputChange}
                />
                <div className="absolute inset-y-0 left-0 flex md:flex-row flex-col items-center pl-3">
                  {' '}
                  <span className="w-5 h-5 inline-block">
                    <img className="w-full " src={Address} alt="" />
                  </span>
                </div>
              </label>
              <div className="flex md:flex-row flex-col">
                <label className="flex-grow w-full md:w-1/4 md:pr-2">
                  <input
                    value={state.house}
                    placeholder="House (optional)"
                    name="house"
                    type="text"
                    className="input-group"
                    onChange={handleFormInputChange}
                  />
                </label>
                <label className="flex-grow ">
                  <input
                    value={state.city}
                    placeholder="City"
                    name="city"
                    type="text"
                    className={`input-group !border-0 ${
                      submitted &&
                      !state.city &&
                      '!border !border-red-500'
                    }`}
                    onChange={handleFormInputChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="relative">
              <input
                type="text"
                value={state.avatar}
                placeholder="Provide image url (optional)"
                name="avatar"
                className="input-group !pl-10 "
                onChange={handleFormInputChange}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                {' '}
                <span className="w-5 h-5 inline-block">
                  <img className="w-full " src={Avatar} alt="" />
                </span>
              </div>
            </label>
          </div>
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddUserForm;
