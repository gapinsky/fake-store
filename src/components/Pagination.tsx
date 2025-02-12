import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pages: number;
}

const Pagination = ({ currentPage, setCurrentPage, pages }: Props) => {
  const pagesArr = [];

  for (let i = 1; i <= pages; i++) {
    pagesArr.push(i);
  }

  const handleNextPage = () => {
    if (currentPage + 1 > pagesArr.length) return;
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage - 1 < 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex items-center mx-auto mb-5 text-xl">
      <button
        className="mx-1  px-1 hover:cursor-pointer"
        onClick={handlePreviousPage}
      >
        <IoIosArrowBack />
      </button>
      {pagesArr.map((page, index) => (
        <button
          key={index}
          className={`mx-2  px-1 hover:cursor-pointer ${
            page === currentPage && "font-bold"
          }`}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="mx-1  px-1 hover:cursor-pointer"
        onClick={handleNextPage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
