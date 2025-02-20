import { useState } from "react";
import useFetchProducts from "../../customHooks/useFetchProducts";
import Loading from "../../pages/Loading";
import NotFound from "../../pages/NotFound";
import { FetchProductsResult } from "../ProductsGrid";
import CarouselCard from "./CarouselCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDot, GoDotFill } from "react-icons/go";
const MainCarousel = () => {
  const { data, isLoading, error } = useFetchProducts(
    ""
  ) as FetchProductsResult;

  const [page, setPage] = useState(1);
  const itemsPerSlide = 5;
  const lastCardId = page * itemsPerSlide;
  const firstCardId = lastCardId - itemsPerSlide;
  const products = data && data.slice(0, 15);
  const slidePage = products && products.slice(firstCardId, lastCardId);
  const slides = products && products.length / itemsPerSlide;

  const changePage = (order: string) => {
    if (order === "forwards") {
      if (page + 1 > slides) return;
      setPage(page + 1);
    }
    if (order === "backwards") {
      if (page - 1 < 1) return;
      setPage(page - 1);
    }
    return;
  };

  const slidesDots = [];
  for (let i = 1; i <= slides; i++) {
    slidesDots.push(i);
  }

  if (error) return <NotFound />;
  return (
    <div className="h-[600px]">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full h-full overflow-hidden flex flex-col justify-evenly items-center pt-5">
          <div className="flex flex-row items-center justify-center gap-16">
            <button
              className=" text-3xl p-2 hover:cursor-pointer"
              onClick={() => changePage("backwards")}
            >
              <IoIosArrowBack />
            </button>
            {slidePage.map((product, index) => (
              <CarouselCard
                img={product.image}
                title={product.title}
                price={product.price}
                key={index}
                id={product.id}
              />
            ))}
            <button
              className=" text-3xl p-2 hover:cursor-pointer"
              onClick={() => changePage("forwards")}
            >
              <IoIosArrowForward />
            </button>
          </div>
          <p>
            {slidesDots.map((dot, index) => (
              <button
                key={index}
                className="p-2 mx-1  hover:cursor-pointer"
                onClick={() => setPage(dot)}
              >
                {page === dot ? <GoDotFill /> : <GoDot />}
              </button>
            ))}
          </p>
        </div>
      )}
    </div>
  );
};

export default MainCarousel;
