import SortAlt from '../../assets/sort-alpha-down-alt.svg';
import SortDefault from '../../assets/sort-alpha-down.svg';
import { useUsersContext } from '../../contextAPI';
const Sort = () => {
  const {
    handleSortChange,
    toggleSortOrder,
    sortOrder,
    sortBy,
    totalResults,
  } = useUsersContext();
  return (
    <div className="container  mx-auto border-b-2 border-secondary md:!px-0 px-10">
      <div className="py-3 flex md:flex-row flex-col md:gap-0 gap-3 justify-between w-full text-[#4F5E64]">
        <div className="text-sm">
          Showing results{' '}
          <b className="text-lg p-1">{totalResults}</b> in Total
        </div>
        <div className=" h-full">
          <div className="relative mb-2 flex items-center md:after:w-[8px] md:after:h-[8px] md:after:border-black/70 md:after:border-b md:after:border-r md:after:transform md:after:rotate-45 md:after:absolute md:after:right-3 gap-3">
            <div className="flex items-center">
              <button
                disabled={sortBy === ''}
                className="w-6 h-6 !cursor-pointer"
                onClick={toggleSortOrder}>
                {sortOrder === 'asc' ? (
                  <img
                    className="w-full object-cover"
                    src={SortDefault}
                    alt=""
                  />
                ) : (
                  <img
                    className="w-full object-cover"
                    src={SortAlt}
                    alt=""
                  />
                )}
              </button>
            </div>
            <select
              required
              value={sortBy}
              onChange={handleSortChange}
              className=" bg-white px-3 py-2 transition-all cursor-pointer hover:border-primary/30 border border-gray-200 rounded-lg outline-primary/50 appearance-none w-36 text-primary ring-primary">
              <option value="" disabled>
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
