const Sort = () => {
  return (
    <div className="container !px-0 mx-auto border-b-2 border-secondary">
      <div className="py-3 flex justify-between w-full text-[#4F5E64]">
        <div>Showing results</div>
        <div className=" h-full">
          <div className="relative mb-2 flex items-center after:w-[8px] after:h-[8px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-3">
            <select
              required
              className="text-black/70 bg-white px-3 py-2 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-lg outline-blue-600/50 appearance-none invalid:text-black/30 w-36">
              <option value="" disabled selected>
                Sort By
              </option>
              <option value="option-1">Name</option>
              <option value="option-2">Email</option>
              <option value="option-3">Company</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sort;
