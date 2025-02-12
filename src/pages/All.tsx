import { useState } from "react";
import ProductCard from "../components/ProductCard";
import useFetchProducts from "../customHooks/useFetchProducts";
import Loading from "./Loading";
import NotFound from "./NotFound";
import Pagination from "../components/Pagination";

interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  rating: { count: number; rate: number };
}

const All = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const { data: products, isLoading, error } = useFetchProducts();

  const lastCardId = currentPage * productsPerPage;
  const firstCardId = lastCardId - productsPerPage;
  const productsPage = products && products.slice(firstCardId, lastCardId);
  const pagesLength = products && Math.ceil(products.length / productsPerPage);
  if (error) return <NotFound />;

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col justify-between h-full w-full overflow-hidden">
      <div className=" grid grid-cols-4 grid-flow-row justify-items-center max-h-screen ">
        {productsPage.map((product: Product) => (
          <ProductCard
            title={product.title}
            price={product.price}
            image={product.image}
            key={product.id}
          />
        ))}
      </div>
      <Pagination
        setCurrentPage={setCurrentPage}
        pages={pagesLength}
        currentPage={currentPage}
      />
    </div>
  );
};

export default All;
