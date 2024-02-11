import { useUsersContext } from '../../contextAPI';

const Search = () => {
  const { handleInputChange } = useUsersContext();

  return (
    <div className="flex justify-center my-16">
      <div className="container bg-secondary p-8 text-center m-auto rounded-lg">
        <h3 className="text-2xl text-primary font-bold">
          Browse User
        </h3>
        <div className="max-w-md mx-auto py-4 ">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-regal-blue ">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              name="search"
              placeholder="Search user name.."
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
