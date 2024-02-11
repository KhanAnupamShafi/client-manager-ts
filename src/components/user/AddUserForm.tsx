import Address from '../../assets/address.svg';
const AddUserForm = () => {
  return (
    <section className="container bg-secondary mx-auto rounded-md mt-20 py-8">
      <h2 className="text-lg font-semibold capitalize text-black text-center mb-5">
        Add User
      </h2>
      <div className="max-w-xl p-6 flex items-center justify-center mx-auto  rounded-md shadow-md bg-white ">
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 ">
                First Name
                <input
                  name="firstName"
                  type="text"
                  className="input-group"
                />
              </label>
            </div>
            <div>
              <label className="text-gray-700">
                Last Name
                <input
                  name="lastName"
                  type="text"
                  className="input-group"
                />
              </label>
            </div>
            <div>
              <label className="text-gray-700">
                Email
                <input
                  name="email"
                  type="email"
                  className="input-group"
                />
              </label>
            </div>
            <div>
              <label className="text-gray-700">
                Company
                <input
                  name="company"
                  type="text"
                  className="input-group"
                />
              </label>
            </div>
          </div>
          <div className=" mt-5 py-5 ">
            <div className="">
              <label className="relative">
                <input
                  placeholder="Street Address"
                  className="input-group pl-10 "
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {' '}
                  <span className="w-5 h-5 inline-block">
                    <img className="w-full " src={Address} alt="" />
                  </span>
                </div>
              </label>
              <div className="flex">
                <label className="flex-grow w-1/4 pr-2">
                  <input
                    placeholder="House"
                    name="company"
                    type="text"
                    className="input-group"
                  />
                </label>
                <label className="flex-grow ">
                  <input
                    placeholder="City"
                    name="company"
                    type="text"
                    className="input-group"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddUserForm;