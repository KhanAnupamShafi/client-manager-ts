interface IPaginationProps {
  onPageClick: (page: number | string) => void;
  pageNumber: number[];
  currentPage: number;
}
const Pagination = ({
  onPageClick,
  pageNumber,
  currentPage,
}: IPaginationProps) => {
  return (
    <div className="container mx-auto flex justify-center my-10">
      <div className="flex items-center gap-2">
        {pageNumber.map((page) => (
          <button
            key={page}
            onClick={() => onPageClick(page)}
            className={`size-8 rounded border border-gray-100 text-center leading-8 text-gray-900 hover:opacity-70 transition-all ${
              currentPage === page
                ? 'bg-primary !text-white'
                : 'bg-secondary'
            }`}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
